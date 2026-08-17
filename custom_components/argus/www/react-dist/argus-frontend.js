function cp(s) {
  if (s.__esModule) return s;
  var c = s.default;
  if (typeof c == "function") {
    var o = function u() {
      return this instanceof u ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    o.prototype = c.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(s).forEach(function(u) {
    var z = Object.getOwnPropertyDescriptor(s, u);
    Object.defineProperty(o, u, z.get ? z : {
      enumerable: !0,
      get: function() {
        return s[u];
      }
    });
  }), o;
}
var Ss = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vd;
function fp() {
  if (vd) return Le;
  vd = 1;
  var s = Symbol.for("react.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), W = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), I = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), O = Symbol.iterator;
  function G(y) {
    return y === null || typeof y != "object" ? null : (y = O && y[O] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var ge = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, we = Object.assign, Y = {};
  function L(y, A, fe) {
    this.props = y, this.context = A, this.refs = Y, this.updater = fe || ge;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(y, A) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, A, "setState");
  }, L.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function v() {
  }
  v.prototype = L.prototype;
  function d(y, A, fe) {
    this.props = y, this.context = A, this.refs = Y, this.updater = fe || ge;
  }
  var m = d.prototype = new v();
  m.constructor = d, we(m, L.prototype), m.isPureReactComponent = !0;
  var f = Array.isArray, h = Object.prototype.hasOwnProperty, w = { current: null }, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(y, A, fe) {
    var re, Oe = {}, Ce = null, Te = null;
    if (A != null) for (re in A.ref !== void 0 && (Te = A.ref), A.key !== void 0 && (Ce = "" + A.key), A) h.call(A, re) && !_.hasOwnProperty(re) && (Oe[re] = A[re]);
    var X = arguments.length - 2;
    if (X === 1) Oe.children = fe;
    else if (1 < X) {
      for (var he = Array(X), Re = 0; Re < X; Re++) he[Re] = arguments[Re + 2];
      Oe.children = he;
    }
    if (y && y.defaultProps) for (re in X = y.defaultProps, X) Oe[re] === void 0 && (Oe[re] = X[re]);
    return { $$typeof: s, type: y, key: Ce, ref: Te, props: Oe, _owner: w.current };
  }
  function V(y, A) {
    return { $$typeof: s, type: y.type, key: A, ref: y.ref, props: y.props, _owner: y._owner };
  }
  function J(y) {
    return typeof y == "object" && y !== null && y.$$typeof === s;
  }
  function le(y) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(fe) {
      return A[fe];
    });
  }
  var se = /\/+/g;
  function ie(y, A) {
    return typeof y == "object" && y !== null && y.key != null ? le("" + y.key) : A.toString(36);
  }
  function ve(y, A, fe, re, Oe) {
    var Ce = typeof y;
    (Ce === "undefined" || Ce === "boolean") && (y = null);
    var Te = !1;
    if (y === null) Te = !0;
    else switch (Ce) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case s:
          case c:
            Te = !0;
        }
    }
    if (Te) return Te = y, Oe = Oe(Te), y = re === "" ? "." + ie(Te, 0) : re, f(Oe) ? (fe = "", y != null && (fe = y.replace(se, "$&/") + "/"), ve(Oe, A, fe, "", function(Re) {
      return Re;
    })) : Oe != null && (J(Oe) && (Oe = V(Oe, fe + (!Oe.key || Te && Te.key === Oe.key ? "" : ("" + Oe.key).replace(se, "$&/") + "/") + y)), A.push(Oe)), 1;
    if (Te = 0, re = re === "" ? "." : re + ":", f(y)) for (var X = 0; X < y.length; X++) {
      Ce = y[X];
      var he = re + ie(Ce, X);
      Te += ve(Ce, A, fe, he, Oe);
    }
    else if (he = G(y), typeof he == "function") for (y = he.call(y), X = 0; !(Ce = y.next()).done; ) Ce = Ce.value, he = re + ie(Ce, X++), Te += ve(Ce, A, fe, he, Oe);
    else if (Ce === "object") throw A = String(y), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function _e(y, A, fe) {
    if (y == null) return y;
    var re = [], Oe = 0;
    return ve(y, re, "", "", function(Ce) {
      return A.call(fe, Ce, Oe++);
    }), re;
  }
  function oe(y) {
    if (y._status === -1) {
      var A = y._result;
      A = A(), A.then(function(fe) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = fe);
      }, function(fe) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = fe);
      }), y._status === -1 && (y._status = 0, y._result = A);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var pe = { current: null }, N = { transition: null }, ee = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: N, ReactCurrentOwner: w };
  function D() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: _e, forEach: function(y, A, fe) {
    _e(y, function() {
      A.apply(this, arguments);
    }, fe);
  }, count: function(y) {
    var A = 0;
    return _e(y, function() {
      A++;
    }), A;
  }, toArray: function(y) {
    return _e(y, function(A) {
      return A;
    }) || [];
  }, only: function(y) {
    if (!J(y)) throw Error("React.Children.only expected to receive a single React element child.");
    return y;
  } }, Le.Component = L, Le.Fragment = o, Le.Profiler = z, Le.PureComponent = d, Le.StrictMode = u, Le.Suspense = j, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee, Le.act = D, Le.cloneElement = function(y, A, fe) {
    if (y == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
    var re = we({}, y.props), Oe = y.key, Ce = y.ref, Te = y._owner;
    if (A != null) {
      if (A.ref !== void 0 && (Ce = A.ref, Te = w.current), A.key !== void 0 && (Oe = "" + A.key), y.type && y.type.defaultProps) var X = y.type.defaultProps;
      for (he in A) h.call(A, he) && !_.hasOwnProperty(he) && (re[he] = A[he] === void 0 && X !== void 0 ? X[he] : A[he]);
    }
    var he = arguments.length - 2;
    if (he === 1) re.children = fe;
    else if (1 < he) {
      X = Array(he);
      for (var Re = 0; Re < he; Re++) X[Re] = arguments[Re + 2];
      re.children = X;
    }
    return { $$typeof: s, type: y.type, key: Oe, ref: Ce, props: re, _owner: Te };
  }, Le.createContext = function(y) {
    return y = { $$typeof: W, _currentValue: y, _currentValue2: y, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, y.Provider = { $$typeof: C, _context: y }, y.Consumer = y;
  }, Le.createElement = B, Le.createFactory = function(y) {
    var A = B.bind(null, y);
    return A.type = y, A;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(y) {
    return { $$typeof: R, render: y };
  }, Le.isValidElement = J, Le.lazy = function(y) {
    return { $$typeof: $, _payload: { _status: -1, _result: y }, _init: oe };
  }, Le.memo = function(y, A) {
    return { $$typeof: I, type: y, compare: A === void 0 ? null : A };
  }, Le.startTransition = function(y) {
    var A = N.transition;
    N.transition = {};
    try {
      y();
    } finally {
      N.transition = A;
    }
  }, Le.unstable_act = D, Le.useCallback = function(y, A) {
    return pe.current.useCallback(y, A);
  }, Le.useContext = function(y) {
    return pe.current.useContext(y);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(y) {
    return pe.current.useDeferredValue(y);
  }, Le.useEffect = function(y, A) {
    return pe.current.useEffect(y, A);
  }, Le.useId = function() {
    return pe.current.useId();
  }, Le.useImperativeHandle = function(y, A, fe) {
    return pe.current.useImperativeHandle(y, A, fe);
  }, Le.useInsertionEffect = function(y, A) {
    return pe.current.useInsertionEffect(y, A);
  }, Le.useLayoutEffect = function(y, A) {
    return pe.current.useLayoutEffect(y, A);
  }, Le.useMemo = function(y, A) {
    return pe.current.useMemo(y, A);
  }, Le.useReducer = function(y, A, fe) {
    return pe.current.useReducer(y, A, fe);
  }, Le.useRef = function(y) {
    return pe.current.useRef(y);
  }, Le.useState = function(y) {
    return pe.current.useState(y);
  }, Le.useSyncExternalStore = function(y, A, fe) {
    return pe.current.useSyncExternalStore(y, A, fe);
  }, Le.useTransition = function() {
    return pe.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var yd;
function Pt() {
  return yd || (yd = 1, Ss.exports = fp()), Ss.exports;
}
var de = Pt(), ka = {}, xs = { exports: {} }, Et = {}, bs = { exports: {} }, _s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function pp() {
  return wd || (wd = 1, function(s) {
    function c(N, ee) {
      var D = N.length;
      N.push(ee);
      e: for (; 0 < D; ) {
        var y = D - 1 >>> 1, A = N[y];
        if (0 < z(A, ee)) N[y] = ee, N[D] = A, D = y;
        else break e;
      }
    }
    function o(N) {
      return N.length === 0 ? null : N[0];
    }
    function u(N) {
      if (N.length === 0) return null;
      var ee = N[0], D = N.pop();
      if (D !== ee) {
        N[0] = D;
        e: for (var y = 0, A = N.length, fe = A >>> 1; y < fe; ) {
          var re = 2 * (y + 1) - 1, Oe = N[re], Ce = re + 1, Te = N[Ce];
          if (0 > z(Oe, D)) Ce < A && 0 > z(Te, Oe) ? (N[y] = Te, N[Ce] = D, y = Ce) : (N[y] = Oe, N[re] = D, y = re);
          else if (Ce < A && 0 > z(Te, D)) N[y] = Te, N[Ce] = D, y = Ce;
          else break e;
        }
      }
      return ee;
    }
    function z(N, ee) {
      var D = N.sortIndex - ee.sortIndex;
      return D !== 0 ? D : N.id - ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      s.unstable_now = function() {
        return C.now();
      };
    } else {
      var W = Date, R = W.now();
      s.unstable_now = function() {
        return W.now() - R;
      };
    }
    var j = [], I = [], $ = 1, O = null, G = 3, ge = !1, we = !1, Y = !1, L = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(N) {
      for (var ee = o(I); ee !== null; ) {
        if (ee.callback === null) u(I);
        else if (ee.startTime <= N) u(I), ee.sortIndex = ee.expirationTime, c(j, ee);
        else break;
        ee = o(I);
      }
    }
    function f(N) {
      if (Y = !1, m(N), !we) if (o(j) !== null) we = !0, oe(h);
      else {
        var ee = o(I);
        ee !== null && pe(f, ee.startTime - N);
      }
    }
    function h(N, ee) {
      we = !1, Y && (Y = !1, v(B), B = -1), ge = !0;
      var D = G;
      try {
        for (m(ee), O = o(j); O !== null && (!(O.expirationTime > ee) || N && !le()); ) {
          var y = O.callback;
          if (typeof y == "function") {
            O.callback = null, G = O.priorityLevel;
            var A = y(O.expirationTime <= ee);
            ee = s.unstable_now(), typeof A == "function" ? O.callback = A : O === o(j) && u(j), m(ee);
          } else u(j);
          O = o(j);
        }
        if (O !== null) var fe = !0;
        else {
          var re = o(I);
          re !== null && pe(f, re.startTime - ee), fe = !1;
        }
        return fe;
      } finally {
        O = null, G = D, ge = !1;
      }
    }
    var w = !1, _ = null, B = -1, V = 5, J = -1;
    function le() {
      return !(s.unstable_now() - J < V);
    }
    function se() {
      if (_ !== null) {
        var N = s.unstable_now();
        J = N;
        var ee = !0;
        try {
          ee = _(!0, N);
        } finally {
          ee ? ie() : (w = !1, _ = null);
        }
      } else w = !1;
    }
    var ie;
    if (typeof d == "function") ie = function() {
      d(se);
    };
    else if (typeof MessageChannel < "u") {
      var ve = new MessageChannel(), _e = ve.port2;
      ve.port1.onmessage = se, ie = function() {
        _e.postMessage(null);
      };
    } else ie = function() {
      L(se, 0);
    };
    function oe(N) {
      _ = N, w || (w = !0, ie());
    }
    function pe(N, ee) {
      B = L(function() {
        N(s.unstable_now());
      }, ee);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, s.unstable_continueExecution = function() {
      we || ge || (we = !0, oe(h));
    }, s.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < N ? Math.floor(1e3 / N) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, s.unstable_getFirstCallbackNode = function() {
      return o(j);
    }, s.unstable_next = function(N) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = G;
      }
      var D = G;
      G = ee;
      try {
        return N();
      } finally {
        G = D;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(N, ee) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = G;
      G = N;
      try {
        return ee();
      } finally {
        G = D;
      }
    }, s.unstable_scheduleCallback = function(N, ee, D) {
      var y = s.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? y + D : y) : D = y, N) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = D + A, N = { id: $++, callback: ee, priorityLevel: N, startTime: D, expirationTime: A, sortIndex: -1 }, D > y ? (N.sortIndex = D, c(I, N), o(j) === null && N === o(I) && (Y ? (v(B), B = -1) : Y = !0, pe(f, D - y))) : (N.sortIndex = A, c(j, N), we || ge || (we = !0, oe(h))), N;
    }, s.unstable_shouldYield = le, s.unstable_wrapCallback = function(N) {
      var ee = G;
      return function() {
        var D = G;
        G = ee;
        try {
          return N.apply(this, arguments);
        } finally {
          G = D;
        }
      };
    };
  }(_s)), _s;
}
var Sd;
function hp() {
  return Sd || (Sd = 1, bs.exports = pp()), bs.exports;
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
var xd;
function mp() {
  if (xd) return Et;
  xd = 1;
  var s = Pt(), c = hp();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), z = {};
  function C(e, t) {
    W(e, t), W(e + "Capture", t);
  }
  function W(e, t) {
    for (z[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, I = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, O = {};
  function G(e) {
    return j.call(O, e) ? !0 : j.call($, e) ? !1 : I.test(e) ? O[e] = !0 : ($[e] = !0, !1);
  }
  function ge(e, t, n, r) {
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
  function we(e, t, n, r) {
    if (t === null || typeof t > "u" || ge(e, t, n, r)) return !0;
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
  function Y(e, t, n, r, i, a, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = l;
  }
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    L[e] = new Y(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    L[t] = new Y(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    L[e] = new Y(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    L[e] = new Y(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    L[e] = new Y(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    L[e] = new Y(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    L[e] = new Y(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    L[e] = new Y(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    L[e] = new Y(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var v = /[\-:]([a-z])/g;
  function d(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      v,
      d
    );
    L[t] = new Y(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(v, d);
    L[t] = new Y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(v, d);
    L[t] = new Y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    L[e] = new Y(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), L.xlinkHref = new Y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    L[e] = new Y(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function m(e, t, n, r) {
    var i = L.hasOwnProperty(t) ? L[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (we(t, n, i, r) && (n = null), r || i === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = Symbol.for("react.element"), w = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), le = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = N && e[N] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var D = Object.assign, y;
  function A(e) {
    if (y === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      y = t && t[1] || "";
    }
    return `
` + y + e;
  }
  var fe = !1;
  function re(e, t) {
    if (!e || fe) return "";
    fe = !0;
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
        } catch (F) {
          var r = F;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (F) {
          r = F;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          r = F;
        }
        e();
      }
    } catch (F) {
      if (F && r && typeof F.stack == "string") {
        for (var i = F.stack.split(`
`), a = r.stack.split(`
`), l = i.length - 1, g = a.length - 1; 1 <= l && 0 <= g && i[l] !== a[g]; ) g--;
        for (; 1 <= l && 0 <= g; l--, g--) if (i[l] !== a[g]) {
          if (l !== 1 || g !== 1)
            do
              if (l--, g--, 0 > g || i[l] !== a[g]) {
                var b = `
` + i[l].replace(" at new ", " at ");
                return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), b;
              }
            while (1 <= l && 0 <= g);
          break;
        }
      }
    } finally {
      fe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function Oe(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = re(e.type, !1), e;
      case 11:
        return e = re(e.type.render, !1), e;
      case 1:
        return e = re(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ce(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _:
        return "Fragment";
      case w:
        return "Portal";
      case V:
        return "Profiler";
      case B:
        return "StrictMode";
      case ie:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case le:
        return (e.displayName || "Context") + ".Consumer";
      case J:
        return (e._context.displayName || "Context") + ".Provider";
      case se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case _e:
        return t = e.displayName || null, t !== null ? t : Ce(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return Ce(e(t));
        } catch {
        }
    }
    return null;
  }
  function Te(e) {
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
        return Ce(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
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
  function X(e) {
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
  function he(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Re(e) {
    var t = he(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, a = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(l) {
        r = "" + l, a.call(this, l);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(l) {
        r = "" + l;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ae(e) {
    e._valueTracker || (e._valueTracker = Re(e));
  }
  function De(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = he(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Be(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ve(e, t) {
    var n = t.checked;
    return D({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function et(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = X(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function x(e, t) {
    t = t.checked, t != null && m(e, "checked", t, !1);
  }
  function E(e, t) {
    x(e, t);
    var n = X(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Q(e, t.type, n) : t.hasOwnProperty("defaultValue") && Q(e, t.type, X(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function T(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Q(e, t, n) {
    (t !== "number" || Be(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ue = Array.isArray;
  function xe(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + X(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ze(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return D({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ne(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(o(92));
        if (ue(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: X(n) };
  }
  function Me(e, t) {
    var n = X(t.value), r = X(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ge(e) {
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
  function U(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var p, P = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (p = p || document.createElement("div"), p.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = p.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function q(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var te = {
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
  Object.keys(te).forEach(function(e) {
    ce.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), te[t] = te[e];
    });
  });
  function Ie(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || te.hasOwnProperty(e) && te[e] ? ("" + t).trim() : t + "px";
  }
  function He(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Ie(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Ze = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ft(e, t) {
    if (t) {
      if (Ze[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
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
  function An(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yn = null, Dn = null, Jt = null;
  function br(e) {
    if (e = Gr(e)) {
      if (typeof Yn != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = Hi(t), Yn(e.stateNode, e.type, t));
    }
  }
  function _r(e) {
    Dn ? Jt ? Jt.push(e) : Jt = [e] : Dn = e;
  }
  function Xn() {
    if (Dn) {
      var e = Dn, t = Jt;
      if (Jt = Dn = null, br(e), t) for (e = 0; e < t.length; e++) br(t[e]);
    }
  }
  function gi(e, t) {
    return e(t);
  }
  function Is() {
  }
  var Ma = !1;
  function Hs(e, t, n) {
    if (Ma) return e(t, n);
    Ma = !0;
    try {
      return gi(e, t, n);
    } finally {
      Ma = !1, (Dn !== null || Jt !== null) && (Is(), Xn());
    }
  }
  function kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Hi(n);
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
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var La = !1;
  if (R) try {
    var zr = {};
    Object.defineProperty(zr, "passive", { get: function() {
      La = !0;
    } }), window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr);
  } catch {
    La = !1;
  }
  function gc(e, t, n, r, i, a, l, g, b) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, F);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var Er = !1, vi = null, yi = !1, Ia = null, vc = { onError: function(e) {
    Er = !0, vi = e;
  } };
  function yc(e, t, n, r, i, a, l, g, b) {
    Er = !1, vi = null, gc.apply(vc, arguments);
  }
  function wc(e, t, n, r, i, a, l, g, b) {
    if (yc.apply(this, arguments), Er) {
      if (Er) {
        var F = vi;
        Er = !1, vi = null;
      } else throw Error(o(198));
      yi || (yi = !0, Ia = F);
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
  function Ws(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Fs(e) {
    if (Tn(e) !== e) throw Error(o(188));
  }
  function Sc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var a = i.alternate;
      if (a === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === a.child) {
        for (a = i.child; a; ) {
          if (a === n) return Fs(i), e;
          if (a === r) return Fs(i), t;
          a = a.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) n = i, r = a;
      else {
        for (var l = !1, g = i.child; g; ) {
          if (g === n) {
            l = !0, n = i, r = a;
            break;
          }
          if (g === r) {
            l = !0, r = i, n = a;
            break;
          }
          g = g.sibling;
        }
        if (!l) {
          for (g = a.child; g; ) {
            if (g === n) {
              l = !0, n = a, r = i;
              break;
            }
            if (g === r) {
              l = !0, r = a, n = i;
              break;
            }
            g = g.sibling;
          }
          if (!l) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function qs(e) {
    return e = Sc(e), e !== null ? Bs(e) : null;
  }
  function Bs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Bs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Us = c.unstable_scheduleCallback, Gs = c.unstable_cancelCallback, xc = c.unstable_shouldYield, bc = c.unstable_requestPaint, it = c.unstable_now, _c = c.unstable_getCurrentPriorityLevel, Ha = c.unstable_ImmediatePriority, Vs = c.unstable_UserBlockingPriority, wi = c.unstable_NormalPriority, kc = c.unstable_LowPriority, $s = c.unstable_IdlePriority, Si = null, Qt = null;
  function zc(e) {
    if (Qt && typeof Qt.onCommitFiberRoot == "function") try {
      Qt.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : Oc, Ec = Math.log, Pc = Math.LN2;
  function Oc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ec(e) / Pc | 0) | 0;
  }
  var xi = 64, bi = 4194304;
  function Pr(e) {
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
  function _i(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, a = e.pingedLanes, l = n & 268435455;
    if (l !== 0) {
      var g = l & ~i;
      g !== 0 ? r = Pr(g) : (a &= l, a !== 0 && (r = Pr(a)));
    } else l = n & ~i, l !== 0 ? r = Pr(l) : a !== 0 && (r = Pr(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Cc(e, t) {
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
  function Rc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var l = 31 - Wt(a), g = 1 << l, b = i[l];
      b === -1 ? (!(g & n) || g & r) && (i[l] = Cc(g, t)) : b <= t && (e.expiredLanes |= g), a &= ~g;
    }
  }
  function Wa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Qs() {
    var e = xi;
    return xi <<= 1, !(xi & 4194240) && (xi = 64), e;
  }
  function Fa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Or(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
  }
  function jc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Wt(n), a = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
    }
  }
  function qa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Wt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var $e = 0;
  function Ys(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xs, Ba, Ks, Zs, Js, Ua = !1, ki = [], fn = null, pn = null, hn = null, Cr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), mn = [], Nc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function el(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        Cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function jr(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Gr(t), t !== null && Ba(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Ac(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return fn = jr(fn, e, t, n, r, i), !0;
      case "dragenter":
        return pn = jr(pn, e, t, n, r, i), !0;
      case "mouseover":
        return hn = jr(hn, e, t, n, r, i), !0;
      case "pointerover":
        var a = i.pointerId;
        return Cr.set(a, jr(Cr.get(a) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return a = i.pointerId, Rr.set(a, jr(Rr.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function tl(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ws(n), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
              Ks(n);
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
  function zi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $t = r, n.target.dispatchEvent(r), $t = null;
      } else return t = Gr(n), t !== null && Ba(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function nl(e, t, n) {
    zi(e) && n.delete(t);
  }
  function Dc() {
    Ua = !1, fn !== null && zi(fn) && (fn = null), pn !== null && zi(pn) && (pn = null), hn !== null && zi(hn) && (hn = null), Cr.forEach(nl), Rr.forEach(nl);
  }
  function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ua || (Ua = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Dc)));
  }
  function Ar(e) {
    function t(i) {
      return Nr(i, e);
    }
    if (0 < ki.length) {
      Nr(ki[0], e);
      for (var n = 1; n < ki.length; n++) {
        var r = ki[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && Nr(fn, e), pn !== null && Nr(pn, e), hn !== null && Nr(hn, e), Cr.forEach(t), Rr.forEach(t), n = 0; n < mn.length; n++) r = mn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < mn.length && (n = mn[0], n.blockedOn === null); ) tl(n), n.blockedOn === null && mn.shift();
  }
  var Kn = f.ReactCurrentBatchConfig, Ei = !0;
  function Tc(e, t, n, r) {
    var i = $e, a = Kn.transition;
    Kn.transition = null;
    try {
      $e = 1, Ga(e, t, n, r);
    } finally {
      $e = i, Kn.transition = a;
    }
  }
  function Mc(e, t, n, r) {
    var i = $e, a = Kn.transition;
    Kn.transition = null;
    try {
      $e = 4, Ga(e, t, n, r);
    } finally {
      $e = i, Kn.transition = a;
    }
  }
  function Ga(e, t, n, r) {
    if (Ei) {
      var i = Va(e, t, n, r);
      if (i === null) uo(e, t, r, Pi, n), el(e, r);
      else if (Ac(i, e, t, n, r)) r.stopPropagation();
      else if (el(e, r), t & 4 && -1 < Nc.indexOf(e)) {
        for (; i !== null; ) {
          var a = Gr(i);
          if (a !== null && Xs(a), a = Va(e, t, n, r), a === null && uo(e, t, r, Pi, n), a === i) break;
          i = a;
        }
        i !== null && r.stopPropagation();
      } else uo(e, t, r, null, n);
    }
  }
  var Pi = null;
  function Va(e, t, n, r) {
    if (Pi = null, e = An(r), e = Mn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ws(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Pi = e, null;
  }
  function rl(e) {
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
        switch (_c()) {
          case Ha:
            return 1;
          case Vs:
            return 4;
          case wi:
          case kc:
            return 16;
          case $s:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, $a = null, Oi = null;
  function il() {
    if (Oi) return Oi;
    var e, t = $a, n = t.length, r, i = "value" in gn ? gn.value : gn.textContent, a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[a - r]; r++) ;
    return Oi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ci(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ri() {
    return !0;
  }
  function al() {
    return !1;
  }
  function Ot(e) {
    function t(n, r, i, a, l) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = l, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(a) : a[g]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ri : al, this.isPropagationStopped = al, this;
    }
    return D(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ri);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ri);
    }, persist: function() {
    }, isPersistent: Ri }), t;
  }
  var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qa = Ot(Zn), Dr = D({}, Zn, { view: 0, detail: 0 }), Lc = Ot(Dr), Ya, Xa, Tr, ji = D({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Za, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (Ya = e.screenX - Tr.screenX, Xa = e.screenY - Tr.screenY) : Xa = Ya = 0, Tr = e), Ya);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Xa;
  } }), ol = Ot(ji), Ic = D({}, ji, { dataTransfer: 0 }), Hc = Ot(Ic), Wc = D({}, Dr, { relatedTarget: 0 }), Ka = Ot(Wc), Fc = D({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qc = Ot(Fc), Bc = D({}, Zn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uc = Ot(Bc), Gc = D({}, Zn, { data: 0 }), sl = Ot(Gc), Vc = {
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
  }, $c = {
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
  }, Qc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qc[e]) ? !!t[e] : !1;
  }
  function Za() {
    return Yc;
  }
  var Xc = D({}, Dr, { key: function(e) {
    if (e.key) {
      var t = Vc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $c[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Za, charCode: function(e) {
    return e.type === "keypress" ? Ci(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Kc = Ot(Xc), Zc = D({}, ji, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ll = Ot(Zc), Jc = D({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Za }), ef = Ot(Jc), tf = D({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nf = Ot(tf), rf = D({}, ji, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), af = Ot(rf), of = [9, 13, 27, 32], Ja = R && "CompositionEvent" in window, Mr = null;
  R && "documentMode" in document && (Mr = document.documentMode);
  var sf = R && "TextEvent" in window && !Mr, ul = R && (!Ja || Mr && 8 < Mr && 11 >= Mr), dl = " ", cl = !1;
  function fl(e, t) {
    switch (e) {
      case "keyup":
        return of.indexOf(t.keyCode) !== -1;
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
  function pl(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jn = !1;
  function lf(e, t) {
    switch (e) {
      case "compositionend":
        return pl(t);
      case "keypress":
        return t.which !== 32 ? null : (cl = !0, dl);
      case "textInput":
        return e = t.data, e === dl && cl ? null : e;
      default:
        return null;
    }
  }
  function uf(e, t) {
    if (Jn) return e === "compositionend" || !Ja && fl(e, t) ? (e = il(), Oi = $a = gn = null, Jn = !1, e) : null;
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
        return ul && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var df = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function hl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!df[e.type] : t === "textarea";
  }
  function ml(e, t, n, r) {
    _r(r), t = Mi(t, "onChange"), 0 < t.length && (n = new Qa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Lr = null, Ir = null;
  function cf(e) {
    Al(e, 0);
  }
  function Ni(e) {
    var t = ir(e);
    if (De(t)) return e;
  }
  function ff(e, t) {
    if (e === "change") return t;
  }
  var gl = !1;
  if (R) {
    var eo;
    if (R) {
      var to = "oninput" in document;
      if (!to) {
        var vl = document.createElement("div");
        vl.setAttribute("oninput", "return;"), to = typeof vl.oninput == "function";
      }
      eo = to;
    } else eo = !1;
    gl = eo && (!document.documentMode || 9 < document.documentMode);
  }
  function yl() {
    Lr && (Lr.detachEvent("onpropertychange", wl), Ir = Lr = null);
  }
  function wl(e) {
    if (e.propertyName === "value" && Ni(Ir)) {
      var t = [];
      ml(t, Ir, e, An(e)), Hs(cf, t);
    }
  }
  function pf(e, t, n) {
    e === "focusin" ? (yl(), Lr = t, Ir = n, Lr.attachEvent("onpropertychange", wl)) : e === "focusout" && yl();
  }
  function hf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ni(Ir);
  }
  function mf(e, t) {
    if (e === "click") return Ni(t);
  }
  function gf(e, t) {
    if (e === "input" || e === "change") return Ni(t);
  }
  function vf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ft = typeof Object.is == "function" ? Object.is : vf;
  function Hr(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!j.call(t, i) || !Ft(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Sl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xl(e, t) {
    var n = Sl(e);
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
      n = Sl(n);
    }
  }
  function bl(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bl(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _l() {
    for (var e = window, t = Be(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Be(e.document);
    }
    return t;
  }
  function no(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function yf(e) {
    var t = _l(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bl(n.ownerDocument.documentElement, n)) {
      if (r !== null && no(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, a = Math.min(r.start, i);
          r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = xl(n, a);
          var l = xl(
            n,
            r
          );
          i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var wf = R && "documentMode" in document && 11 >= document.documentMode, er = null, ro = null, Wr = null, io = !1;
  function kl(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    io || er == null || er !== Be(r) || (r = er, "selectionStart" in r && no(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wr && Hr(Wr, r) || (Wr = r, r = Mi(ro, "onSelect"), 0 < r.length && (t = new Qa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = er)));
  }
  function Ai(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var tr = { animationend: Ai("Animation", "AnimationEnd"), animationiteration: Ai("Animation", "AnimationIteration"), animationstart: Ai("Animation", "AnimationStart"), transitionend: Ai("Transition", "TransitionEnd") }, ao = {}, zl = {};
  R && (zl = document.createElement("div").style, "AnimationEvent" in window || (delete tr.animationend.animation, delete tr.animationiteration.animation, delete tr.animationstart.animation), "TransitionEvent" in window || delete tr.transitionend.transition);
  function Di(e) {
    if (ao[e]) return ao[e];
    if (!tr[e]) return e;
    var t = tr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in zl) return ao[e] = t[n];
    return e;
  }
  var El = Di("animationend"), Pl = Di("animationiteration"), Ol = Di("animationstart"), Cl = Di("transitionend"), Rl = /* @__PURE__ */ new Map(), jl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function vn(e, t) {
    Rl.set(e, t), C(t, [e]);
  }
  for (var oo = 0; oo < jl.length; oo++) {
    var so = jl[oo], Sf = so.toLowerCase(), xf = so[0].toUpperCase() + so.slice(1);
    vn(Sf, "on" + xf);
  }
  vn(El, "onAnimationEnd"), vn(Pl, "onAnimationIteration"), vn(Ol, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(Cl, "onTransitionEnd"), W("onMouseEnter", ["mouseout", "mouseover"]), W("onMouseLeave", ["mouseout", "mouseover"]), W("onPointerEnter", ["pointerout", "pointerover"]), W("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function Nl(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, wc(r, t, void 0, e), e.currentTarget = null;
  }
  function Al(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t) for (var l = r.length - 1; 0 <= l; l--) {
          var g = r[l], b = g.instance, F = g.currentTarget;
          if (g = g.listener, b !== a && i.isPropagationStopped()) break e;
          Nl(i, g, F), a = b;
        }
        else for (l = 0; l < r.length; l++) {
          if (g = r[l], b = g.instance, F = g.currentTarget, g = g.listener, b !== a && i.isPropagationStopped()) break e;
          Nl(i, g, F), a = b;
        }
      }
    }
    if (yi) throw e = Ia, yi = !1, Ia = null, e;
  }
  function Xe(e, t) {
    var n = t[go];
    n === void 0 && (n = t[go] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Dl(t, e, 2, !1), n.add(r));
  }
  function lo(e, t, n) {
    var r = 0;
    t && (r |= 4), Dl(n, e, r, t);
  }
  var Ti = "_reactListening" + Math.random().toString(36).slice(2);
  function qr(e) {
    if (!e[Ti]) {
      e[Ti] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (bf.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ti] || (t[Ti] = !0, lo("selectionchange", !1, t));
    }
  }
  function Dl(e, t, n, r) {
    switch (rl(t)) {
      case 1:
        var i = Tc;
        break;
      case 4:
        i = Mc;
        break;
      default:
        i = Ga;
    }
    n = i.bind(null, t, n, e), i = void 0, !La || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function uo(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var g = r.stateNode.containerInfo;
        if (g === i || g.nodeType === 8 && g.parentNode === i) break;
        if (l === 4) for (l = r.return; l !== null; ) {
          var b = l.tag;
          if ((b === 3 || b === 4) && (b = l.stateNode.containerInfo, b === i || b.nodeType === 8 && b.parentNode === i)) return;
          l = l.return;
        }
        for (; g !== null; ) {
          if (l = Mn(g), l === null) return;
          if (b = l.tag, b === 5 || b === 6) {
            r = a = l;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Hs(function() {
      var F = a, Z = An(n), ne = [];
      e: {
        var K = Rl.get(e);
        if (K !== void 0) {
          var me = Qa, Se = e;
          switch (e) {
            case "keypress":
              if (Ci(n) === 0) break e;
            case "keydown":
            case "keyup":
              me = Kc;
              break;
            case "focusin":
              Se = "focus", me = Ka;
              break;
            case "focusout":
              Se = "blur", me = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              me = Ka;
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
              me = ol;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = Hc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = ef;
              break;
            case El:
            case Pl:
            case Ol:
              me = qc;
              break;
            case Cl:
              me = nf;
              break;
            case "scroll":
              me = Lc;
              break;
            case "wheel":
              me = af;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = Uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = ll;
          }
          var be = (t & 4) !== 0, at = !be && e === "scroll", M = be ? K !== null ? K + "Capture" : null : K;
          be = [];
          for (var k = F, H; k !== null; ) {
            H = k;
            var ae = H.stateNode;
            if (H.tag === 5 && ae !== null && (H = ae, M !== null && (ae = kr(k, M), ae != null && be.push(Br(k, ae, H)))), at) break;
            k = k.return;
          }
          0 < be.length && (K = new me(K, Se, null, n, Z), ne.push({ event: K, listeners: be }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (K = e === "mouseover" || e === "pointerover", me = e === "mouseout" || e === "pointerout", K && n !== $t && (Se = n.relatedTarget || n.fromElement) && (Mn(Se) || Se[en])) break e;
          if ((me || K) && (K = Z.window === Z ? Z : (K = Z.ownerDocument) ? K.defaultView || K.parentWindow : window, me ? (Se = n.relatedTarget || n.toElement, me = F, Se = Se ? Mn(Se) : null, Se !== null && (at = Tn(Se), Se !== at || Se.tag !== 5 && Se.tag !== 6) && (Se = null)) : (me = null, Se = F), me !== Se)) {
            if (be = ol, ae = "onMouseLeave", M = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (be = ll, ae = "onPointerLeave", M = "onPointerEnter", k = "pointer"), at = me == null ? K : ir(me), H = Se == null ? K : ir(Se), K = new be(ae, k + "leave", me, n, Z), K.target = at, K.relatedTarget = H, ae = null, Mn(Z) === F && (be = new be(M, k + "enter", Se, n, Z), be.target = H, be.relatedTarget = at, ae = be), at = ae, me && Se) t: {
              for (be = me, M = Se, k = 0, H = be; H; H = nr(H)) k++;
              for (H = 0, ae = M; ae; ae = nr(ae)) H++;
              for (; 0 < k - H; ) be = nr(be), k--;
              for (; 0 < H - k; ) M = nr(M), H--;
              for (; k--; ) {
                if (be === M || M !== null && be === M.alternate) break t;
                be = nr(be), M = nr(M);
              }
              be = null;
            }
            else be = null;
            me !== null && Tl(ne, K, me, be, !1), Se !== null && at !== null && Tl(ne, at, Se, be, !0);
          }
        }
        e: {
          if (K = F ? ir(F) : window, me = K.nodeName && K.nodeName.toLowerCase(), me === "select" || me === "input" && K.type === "file") var ke = ff;
          else if (hl(K)) if (gl) ke = gf;
          else {
            ke = hf;
            var Ee = pf;
          }
          else (me = K.nodeName) && me.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (ke = mf);
          if (ke && (ke = ke(e, F))) {
            ml(ne, ke, n, Z);
            break e;
          }
          Ee && Ee(e, K, F), e === "focusout" && (Ee = K._wrapperState) && Ee.controlled && K.type === "number" && Q(K, "number", K.value);
        }
        switch (Ee = F ? ir(F) : window, e) {
          case "focusin":
            (hl(Ee) || Ee.contentEditable === "true") && (er = Ee, ro = F, Wr = null);
            break;
          case "focusout":
            Wr = ro = er = null;
            break;
          case "mousedown":
            io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            io = !1, kl(ne, n, Z);
            break;
          case "selectionchange":
            if (wf) break;
          case "keydown":
          case "keyup":
            kl(ne, n, Z);
        }
        var Pe;
        if (Ja) e: {
          switch (e) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else Jn ? fl(e, n) && (je = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (je = "onCompositionStart");
        je && (ul && n.locale !== "ko" && (Jn || je !== "onCompositionStart" ? je === "onCompositionEnd" && Jn && (Pe = il()) : (gn = Z, $a = "value" in gn ? gn.value : gn.textContent, Jn = !0)), Ee = Mi(F, je), 0 < Ee.length && (je = new sl(je, e, null, n, Z), ne.push({ event: je, listeners: Ee }), Pe ? je.data = Pe : (Pe = pl(n), Pe !== null && (je.data = Pe)))), (Pe = sf ? lf(e, n) : uf(e, n)) && (F = Mi(F, "onBeforeInput"), 0 < F.length && (Z = new sl("onBeforeInput", "beforeinput", null, n, Z), ne.push({ event: Z, listeners: F }), Z.data = Pe));
      }
      Al(ne, t);
    });
  }
  function Br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, a = i.stateNode;
      i.tag === 5 && a !== null && (i = a, a = kr(e, n), a != null && r.unshift(Br(e, a, i)), a = kr(e, t), a != null && r.push(Br(e, a, i))), e = e.return;
    }
    return r;
  }
  function nr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Tl(e, t, n, r, i) {
    for (var a = t._reactName, l = []; n !== null && n !== r; ) {
      var g = n, b = g.alternate, F = g.stateNode;
      if (b !== null && b === r) break;
      g.tag === 5 && F !== null && (g = F, i ? (b = kr(n, a), b != null && l.unshift(Br(n, b, g))) : i || (b = kr(n, a), b != null && l.push(Br(n, b, g)))), n = n.return;
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
  }
  var _f = /\r\n?/g, kf = /\u0000|\uFFFD/g;
  function Ml(e) {
    return (typeof e == "string" ? e : "" + e).replace(_f, `
`).replace(kf, "");
  }
  function Li(e, t, n) {
    if (t = Ml(t), Ml(e) !== t && n) throw Error(o(425));
  }
  function Ii() {
  }
  var co = null, fo = null;
  function po(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ho = typeof setTimeout == "function" ? setTimeout : void 0, zf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ll = typeof Promise == "function" ? Promise : void 0, Ef = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ll < "u" ? function(e) {
    return Ll.resolve(null).then(e).catch(Pf);
  } : ho;
  function Pf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function mo(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Ar(t);
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
  function Il(e) {
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
  var rr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + rr, Ur = "__reactProps$" + rr, en = "__reactContainer$" + rr, go = "__reactEvents$" + rr, Of = "__reactListeners$" + rr, Cf = "__reactHandles$" + rr;
  function Mn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[en] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Il(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = Il(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Gr(e) {
    return e = e[Yt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Hi(e) {
    return e[Ur] || null;
  }
  var vo = [], ar = -1;
  function wn(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > ar || (e.current = vo[ar], vo[ar] = null, ar--);
  }
  function Ye(e, t) {
    ar++, vo[ar] = e.current, e.current = t;
  }
  var Sn = {}, mt = wn(Sn), xt = wn(!1), Ln = Sn;
  function or(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, a;
    for (a in n) i[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function bt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wi() {
    Ke(xt), Ke(mt);
  }
  function Hl(e, t, n) {
    if (mt.current !== Sn) throw Error(o(168));
    Ye(mt, t), Ye(xt, n);
  }
  function Wl(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, Te(e) || "Unknown", i));
    return D({}, n, r);
  }
  function Fi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sn, Ln = mt.current, Ye(mt, e), Ye(xt, xt.current), !0;
  }
  function Fl(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n ? (e = Wl(e, t, Ln), r.__reactInternalMemoizedMergedChildContext = e, Ke(xt), Ke(mt), Ye(mt, e)) : Ke(xt), Ye(xt, n);
  }
  var tn = null, qi = !1, yo = !1;
  function ql(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function Rf(e) {
    qi = !0, ql(e);
  }
  function xn() {
    if (!yo && tn !== null) {
      yo = !0;
      var e = 0, t = $e;
      try {
        var n = tn;
        for ($e = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        tn = null, qi = !1;
      } catch (i) {
        throw tn !== null && (tn = tn.slice(e + 1)), Us(Ha, xn), i;
      } finally {
        $e = t, yo = !1;
      }
    }
    return null;
  }
  var sr = [], lr = 0, Bi = null, Ui = 0, Nt = [], At = 0, In = null, nn = 1, rn = "";
  function Hn(e, t) {
    sr[lr++] = Ui, sr[lr++] = Bi, Bi = e, Ui = t;
  }
  function Bl(e, t, n) {
    Nt[At++] = nn, Nt[At++] = rn, Nt[At++] = In, In = e;
    var r = nn;
    e = rn;
    var i = 32 - Wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - Wt(t) + i;
    if (30 < a) {
      var l = i - i % 5;
      a = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, nn = 1 << 32 - Wt(t) + i | n << i | r, rn = a + e;
    } else nn = 1 << a | n << i | r, rn = e;
  }
  function wo(e) {
    e.return !== null && (Hn(e, 1), Bl(e, 1, 0));
  }
  function So(e) {
    for (; e === Bi; ) Bi = sr[--lr], sr[lr] = null, Ui = sr[--lr], sr[lr] = null;
    for (; e === In; ) In = Nt[--At], Nt[At] = null, rn = Nt[--At], Nt[At] = null, nn = Nt[--At], Nt[At] = null;
  }
  var Ct = null, Rt = null, Je = !1, qt = null;
  function Ul(e, t) {
    var n = Lt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Gl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, Rt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, Rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: nn, overflow: rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ct = e, Rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bo(e) {
    if (Je) {
      var t = Rt;
      if (t) {
        var n = t;
        if (!Gl(e, t)) {
          if (xo(e)) throw Error(o(418));
          t = yn(n.nextSibling);
          var r = Ct;
          t && Gl(e, t) ? Ul(r, n) : (e.flags = e.flags & -4097 | 2, Je = !1, Ct = e);
        }
      } else {
        if (xo(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Je = !1, Ct = e;
      }
    }
  }
  function Vl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ct = e;
  }
  function Gi(e) {
    if (e !== Ct) return !1;
    if (!Je) return Vl(e), Je = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !po(e.type, e.memoizedProps)), t && (t = Rt)) {
      if (xo(e)) throw $l(), Error(o(418));
      for (; t; ) Ul(e, t), t = yn(t.nextSibling);
    }
    if (Vl(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Rt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Rt = null;
      }
    } else Rt = Ct ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $l() {
    for (var e = Rt; e; ) e = yn(e.nextSibling);
  }
  function ur() {
    Rt = Ct = null, Je = !1;
  }
  function _o(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  var jf = f.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = r, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(l) {
          var g = i.refs;
          l === null ? delete g[a] : g[a] = l;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Vi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ql(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Yl(e) {
    function t(M, k) {
      if (e) {
        var H = M.deletions;
        H === null ? (M.deletions = [k], M.flags |= 16) : H.push(k);
      }
    }
    function n(M, k) {
      if (!e) return null;
      for (; k !== null; ) t(M, k), k = k.sibling;
      return null;
    }
    function r(M, k) {
      for (M = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? M.set(k.key, k) : M.set(k.index, k), k = k.sibling;
      return M;
    }
    function i(M, k) {
      return M = Cn(M, k), M.index = 0, M.sibling = null, M;
    }
    function a(M, k, H) {
      return M.index = H, e ? (H = M.alternate, H !== null ? (H = H.index, H < k ? (M.flags |= 2, k) : H) : (M.flags |= 2, k)) : (M.flags |= 1048576, k);
    }
    function l(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function g(M, k, H, ae) {
      return k === null || k.tag !== 6 ? (k = hs(H, M.mode, ae), k.return = M, k) : (k = i(k, H), k.return = M, k);
    }
    function b(M, k, H, ae) {
      var ke = H.type;
      return ke === _ ? Z(M, k, H.props.children, ae, H.key) : k !== null && (k.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === oe && Ql(ke) === k.type) ? (ae = i(k, H.props), ae.ref = Vr(M, k, H), ae.return = M, ae) : (ae = ga(H.type, H.key, H.props, null, M.mode, ae), ae.ref = Vr(M, k, H), ae.return = M, ae);
    }
    function F(M, k, H, ae) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== H.containerInfo || k.stateNode.implementation !== H.implementation ? (k = ms(H, M.mode, ae), k.return = M, k) : (k = i(k, H.children || []), k.return = M, k);
    }
    function Z(M, k, H, ae, ke) {
      return k === null || k.tag !== 7 ? (k = $n(H, M.mode, ae, ke), k.return = M, k) : (k = i(k, H), k.return = M, k);
    }
    function ne(M, k, H) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = hs("" + k, M.mode, H), k.return = M, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case h:
            return H = ga(k.type, k.key, k.props, null, M.mode, H), H.ref = Vr(M, null, k), H.return = M, H;
          case w:
            return k = ms(k, M.mode, H), k.return = M, k;
          case oe:
            var ae = k._init;
            return ne(M, ae(k._payload), H);
        }
        if (ue(k) || ee(k)) return k = $n(k, M.mode, H, null), k.return = M, k;
        Vi(M, k);
      }
      return null;
    }
    function K(M, k, H, ae) {
      var ke = k !== null ? k.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return ke !== null ? null : g(M, k, "" + H, ae);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case h:
            return H.key === ke ? b(M, k, H, ae) : null;
          case w:
            return H.key === ke ? F(M, k, H, ae) : null;
          case oe:
            return ke = H._init, K(
              M,
              k,
              ke(H._payload),
              ae
            );
        }
        if (ue(H) || ee(H)) return ke !== null ? null : Z(M, k, H, ae, null);
        Vi(M, H);
      }
      return null;
    }
    function me(M, k, H, ae, ke) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return M = M.get(H) || null, g(k, M, "" + ae, ke);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case h:
            return M = M.get(ae.key === null ? H : ae.key) || null, b(k, M, ae, ke);
          case w:
            return M = M.get(ae.key === null ? H : ae.key) || null, F(k, M, ae, ke);
          case oe:
            var Ee = ae._init;
            return me(M, k, H, Ee(ae._payload), ke);
        }
        if (ue(ae) || ee(ae)) return M = M.get(H) || null, Z(k, M, ae, ke, null);
        Vi(k, ae);
      }
      return null;
    }
    function Se(M, k, H, ae) {
      for (var ke = null, Ee = null, Pe = k, je = k = 0, ct = null; Pe !== null && je < H.length; je++) {
        Pe.index > je ? (ct = Pe, Pe = null) : ct = Pe.sibling;
        var Ue = K(M, Pe, H[je], ae);
        if (Ue === null) {
          Pe === null && (Pe = ct);
          break;
        }
        e && Pe && Ue.alternate === null && t(M, Pe), k = a(Ue, k, je), Ee === null ? ke = Ue : Ee.sibling = Ue, Ee = Ue, Pe = ct;
      }
      if (je === H.length) return n(M, Pe), Je && Hn(M, je), ke;
      if (Pe === null) {
        for (; je < H.length; je++) Pe = ne(M, H[je], ae), Pe !== null && (k = a(Pe, k, je), Ee === null ? ke = Pe : Ee.sibling = Pe, Ee = Pe);
        return Je && Hn(M, je), ke;
      }
      for (Pe = r(M, Pe); je < H.length; je++) ct = me(Pe, M, je, H[je], ae), ct !== null && (e && ct.alternate !== null && Pe.delete(ct.key === null ? je : ct.key), k = a(ct, k, je), Ee === null ? ke = ct : Ee.sibling = ct, Ee = ct);
      return e && Pe.forEach(function(Rn) {
        return t(M, Rn);
      }), Je && Hn(M, je), ke;
    }
    function be(M, k, H, ae) {
      var ke = ee(H);
      if (typeof ke != "function") throw Error(o(150));
      if (H = ke.call(H), H == null) throw Error(o(151));
      for (var Ee = ke = null, Pe = k, je = k = 0, ct = null, Ue = H.next(); Pe !== null && !Ue.done; je++, Ue = H.next()) {
        Pe.index > je ? (ct = Pe, Pe = null) : ct = Pe.sibling;
        var Rn = K(M, Pe, Ue.value, ae);
        if (Rn === null) {
          Pe === null && (Pe = ct);
          break;
        }
        e && Pe && Rn.alternate === null && t(M, Pe), k = a(Rn, k, je), Ee === null ? ke = Rn : Ee.sibling = Rn, Ee = Rn, Pe = ct;
      }
      if (Ue.done) return n(
        M,
        Pe
      ), Je && Hn(M, je), ke;
      if (Pe === null) {
        for (; !Ue.done; je++, Ue = H.next()) Ue = ne(M, Ue.value, ae), Ue !== null && (k = a(Ue, k, je), Ee === null ? ke = Ue : Ee.sibling = Ue, Ee = Ue);
        return Je && Hn(M, je), ke;
      }
      for (Pe = r(M, Pe); !Ue.done; je++, Ue = H.next()) Ue = me(Pe, M, je, Ue.value, ae), Ue !== null && (e && Ue.alternate !== null && Pe.delete(Ue.key === null ? je : Ue.key), k = a(Ue, k, je), Ee === null ? ke = Ue : Ee.sibling = Ue, Ee = Ue);
      return e && Pe.forEach(function(dp) {
        return t(M, dp);
      }), Je && Hn(M, je), ke;
    }
    function at(M, k, H, ae) {
      if (typeof H == "object" && H !== null && H.type === _ && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case h:
            e: {
              for (var ke = H.key, Ee = k; Ee !== null; ) {
                if (Ee.key === ke) {
                  if (ke = H.type, ke === _) {
                    if (Ee.tag === 7) {
                      n(M, Ee.sibling), k = i(Ee, H.props.children), k.return = M, M = k;
                      break e;
                    }
                  } else if (Ee.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === oe && Ql(ke) === Ee.type) {
                    n(M, Ee.sibling), k = i(Ee, H.props), k.ref = Vr(M, Ee, H), k.return = M, M = k;
                    break e;
                  }
                  n(M, Ee);
                  break;
                } else t(M, Ee);
                Ee = Ee.sibling;
              }
              H.type === _ ? (k = $n(H.props.children, M.mode, ae, H.key), k.return = M, M = k) : (ae = ga(H.type, H.key, H.props, null, M.mode, ae), ae.ref = Vr(M, k, H), ae.return = M, M = ae);
            }
            return l(M);
          case w:
            e: {
              for (Ee = H.key; k !== null; ) {
                if (k.key === Ee) if (k.tag === 4 && k.stateNode.containerInfo === H.containerInfo && k.stateNode.implementation === H.implementation) {
                  n(M, k.sibling), k = i(k, H.children || []), k.return = M, M = k;
                  break e;
                } else {
                  n(M, k);
                  break;
                }
                else t(M, k);
                k = k.sibling;
              }
              k = ms(H, M.mode, ae), k.return = M, M = k;
            }
            return l(M);
          case oe:
            return Ee = H._init, at(M, k, Ee(H._payload), ae);
        }
        if (ue(H)) return Se(M, k, H, ae);
        if (ee(H)) return be(M, k, H, ae);
        Vi(M, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, k !== null && k.tag === 6 ? (n(M, k.sibling), k = i(k, H), k.return = M, M = k) : (n(M, k), k = hs(H, M.mode, ae), k.return = M, M = k), l(M)) : n(M, k);
    }
    return at;
  }
  var dr = Yl(!0), Xl = Yl(!1), $i = wn(null), Qi = null, cr = null, ko = null;
  function zo() {
    ko = cr = Qi = null;
  }
  function Eo(e) {
    var t = $i.current;
    Ke($i), e._currentValue = t;
  }
  function Po(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function fr(e, t) {
    Qi = e, ko = cr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
  }
  function Dt(e) {
    var t = e._currentValue;
    if (ko !== e) if (e = { context: e, memoizedValue: t, next: null }, cr === null) {
      if (Qi === null) throw Error(o(308));
      cr = e, Qi.dependencies = { lanes: 0, firstContext: e };
    } else cr = cr.next = e;
    return t;
  }
  var Wn = null;
  function Oo(e) {
    Wn === null ? Wn = [e] : Wn.push(e);
  }
  function Kl(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Oo(t)) : (n.next = i.next, i.next = n), t.interleaved = n, an(e, r);
  }
  function an(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var bn = !1;
  function Co(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Zl(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, qe & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, an(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Oo(r)) : (t.next = i.next, i.next = t), r.interleaved = t, an(e, n);
  }
  function Yi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, qa(e, n);
    }
  }
  function Jl(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          a === null ? i = a = l : a = a.next = l, n = n.next;
        } while (n !== null);
        a === null ? i = a = t : a = a.next = t;
      } else i = a = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Xi(e, t, n, r) {
    var i = e.updateQueue;
    bn = !1;
    var a = i.firstBaseUpdate, l = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var b = g, F = b.next;
      b.next = null, l === null ? a = F : l.next = F, l = b;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, g = Z.lastBaseUpdate, g !== l && (g === null ? Z.firstBaseUpdate = F : g.next = F, Z.lastBaseUpdate = b));
    }
    if (a !== null) {
      var ne = i.baseState;
      l = 0, Z = F = b = null, g = a;
      do {
        var K = g.lane, me = g.eventTime;
        if ((r & K) === K) {
          Z !== null && (Z = Z.next = {
            eventTime: me,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var Se = e, be = g;
            switch (K = t, me = n, be.tag) {
              case 1:
                if (Se = be.payload, typeof Se == "function") {
                  ne = Se.call(me, ne, K);
                  break e;
                }
                ne = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = be.payload, K = typeof Se == "function" ? Se.call(me, ne, K) : Se, K == null) break e;
                ne = D({}, ne, K);
                break e;
              case 2:
                bn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, K = i.effects, K === null ? i.effects = [g] : K.push(g));
        } else me = { eventTime: me, lane: K, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, Z === null ? (F = Z = me, b = ne) : Z = Z.next = me, l |= K;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null) break;
          K = g, g = K.next, K.next = null, i.lastBaseUpdate = K, i.shared.pending = null;
        }
      } while (!0);
      if (Z === null && (b = ne), i.baseState = b, i.firstBaseUpdate = F, i.lastBaseUpdate = Z, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          l |= i.lane, i = i.next;
        while (i !== t);
      } else a === null && (i.shared.lanes = 0);
      Bn |= l, e.lanes = l, e.memoizedState = ne;
    }
  }
  function eu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(o(191, i));
        i.call(r);
      }
    }
  }
  var $r = {}, Xt = wn($r), Qr = wn($r), Yr = wn($r);
  function Fn(e) {
    if (e === $r) throw Error(o(174));
    return e;
  }
  function Ro(e, t) {
    switch (Ye(Yr, t), Ye(Qr, e), Ye(Xt, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : U(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = U(t, e);
    }
    Ke(Xt), Ye(Xt, t);
  }
  function pr() {
    Ke(Xt), Ke(Qr), Ke(Yr);
  }
  function tu(e) {
    Fn(Yr.current);
    var t = Fn(Xt.current), n = U(t, e.type);
    t !== n && (Ye(Qr, e), Ye(Xt, n));
  }
  function jo(e) {
    Qr.current === e && (Ke(Xt), Ke(Qr));
  }
  var tt = wn(0);
  function Ki(e) {
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
  var No = [];
  function Ao() {
    for (var e = 0; e < No.length; e++) No[e]._workInProgressVersionPrimary = null;
    No.length = 0;
  }
  var Zi = f.ReactCurrentDispatcher, Do = f.ReactCurrentBatchConfig, qn = 0, nt = null, st = null, ut = null, Ji = !1, Xr = !1, Kr = 0, Nf = 0;
  function gt() {
    throw Error(o(321));
  }
  function To(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function Mo(e, t, n, r, i, a) {
    if (qn = a, nt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zi.current = e === null || e.memoizedState === null ? Mf : Lf, e = n(r, i), Xr) {
      a = 0;
      do {
        if (Xr = !1, Kr = 0, 25 <= a) throw Error(o(301));
        a += 1, ut = st = null, t.updateQueue = null, Zi.current = If, e = n(r, i);
      } while (Xr);
    }
    if (Zi.current = na, t = st !== null && st.next !== null, qn = 0, ut = st = nt = null, Ji = !1, t) throw Error(o(300));
    return e;
  }
  function Lo() {
    var e = Kr !== 0;
    return Kr = 0, e;
  }
  function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ut === null ? nt.memoizedState = ut = e : ut = ut.next = e, ut;
  }
  function Tt() {
    if (st === null) {
      var e = nt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = st.next;
    var t = ut === null ? nt.memoizedState : ut.next;
    if (t !== null) ut = t, st = e;
    else {
      if (e === null) throw Error(o(310));
      st = e, e = { memoizedState: st.memoizedState, baseState: st.baseState, baseQueue: st.baseQueue, queue: st.queue, next: null }, ut === null ? nt.memoizedState = ut = e : ut = ut.next = e;
    }
    return ut;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Io(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = st, i = r.baseQueue, a = n.pending;
    if (a !== null) {
      if (i !== null) {
        var l = i.next;
        i.next = a.next, a.next = l;
      }
      r.baseQueue = i = a, n.pending = null;
    }
    if (i !== null) {
      a = i.next, r = r.baseState;
      var g = l = null, b = null, F = a;
      do {
        var Z = F.lane;
        if ((qn & Z) === Z) b !== null && (b = b.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), r = F.hasEagerState ? F.eagerState : e(r, F.action);
        else {
          var ne = {
            lane: Z,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          b === null ? (g = b = ne, l = r) : b = b.next = ne, nt.lanes |= Z, Bn |= Z;
        }
        F = F.next;
      } while (F !== null && F !== a);
      b === null ? l = r : b.next = g, Ft(r, t.memoizedState) || (_t = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = b, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        a = i.lane, nt.lanes |= a, Bn |= a, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ho(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, a = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var l = i = i.next;
      do
        a = e(a, l.action), l = l.next;
      while (l !== i);
      Ft(a, t.memoizedState) || (_t = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, r];
  }
  function nu() {
  }
  function ru(e, t) {
    var n = nt, r = Tt(), i = t(), a = !Ft(r.memoizedState, i);
    if (a && (r.memoizedState = i, _t = !0), r = r.queue, Wo(ou.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || ut !== null && ut.memoizedState.tag & 1) {
      if (n.flags |= 2048, Jr(9, au.bind(null, n, r, i, t), void 0, null), dt === null) throw Error(o(349));
      qn & 30 || iu(n, t, i);
    }
    return i;
  }
  function iu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = nt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, nt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function au(e, t, n, r) {
    t.value = n, t.getSnapshot = r, su(t) && lu(e);
  }
  function ou(e, t, n) {
    return n(function() {
      su(t) && lu(e);
    });
  }
  function su(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ft(e, n);
    } catch {
      return !0;
    }
  }
  function lu(e) {
    var t = an(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function uu(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tf.bind(null, nt, e), [t.memoizedState, e];
  }
  function Jr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = nt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, nt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function du() {
    return Tt().memoizedState;
  }
  function ea(e, t, n, r) {
    var i = Kt();
    nt.flags |= e, i.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ta(e, t, n, r) {
    var i = Tt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (st !== null) {
      var l = st.memoizedState;
      if (a = l.destroy, r !== null && To(r, l.deps)) {
        i.memoizedState = Jr(t, n, a, r);
        return;
      }
    }
    nt.flags |= e, i.memoizedState = Jr(1 | t, n, a, r);
  }
  function cu(e, t) {
    return ea(8390656, 8, e, t);
  }
  function Wo(e, t) {
    return ta(2048, 8, e, t);
  }
  function fu(e, t) {
    return ta(4, 2, e, t);
  }
  function pu(e, t) {
    return ta(4, 4, e, t);
  }
  function hu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function mu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ta(4, 4, hu.bind(null, t, e), n);
  }
  function Fo() {
  }
  function gu(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && To(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function vu(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && To(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function yu(e, t, n) {
    return qn & 21 ? (Ft(n, t) || (n = Qs(), nt.lanes |= n, Bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n);
  }
  function Af(e, t) {
    var n = $e;
    $e = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Do.transition;
    Do.transition = {};
    try {
      e(!1), t();
    } finally {
      $e = n, Do.transition = r;
    }
  }
  function wu() {
    return Tt().memoizedState;
  }
  function Df(e, t, n) {
    var r = Pn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Su(e)) xu(t, n);
    else if (n = Kl(e, t, n, r), n !== null) {
      var i = St();
      Vt(n, e, r, i), bu(n, t, r);
    }
  }
  function Tf(e, t, n) {
    var r = Pn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Su(e)) xu(t, i);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
        var l = t.lastRenderedState, g = a(l, n);
        if (i.hasEagerState = !0, i.eagerState = g, Ft(g, l)) {
          var b = t.interleaved;
          b === null ? (i.next = i, Oo(t)) : (i.next = b.next, b.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = Kl(e, t, i, r), n !== null && (i = St(), Vt(n, e, r, i), bu(n, t, r));
    }
  }
  function Su(e) {
    var t = e.alternate;
    return e === nt || t !== null && t === nt;
  }
  function xu(e, t) {
    Xr = Ji = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function bu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, qa(e, n);
    }
  }
  var na = { readContext: Dt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, Mf = { readContext: Dt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Dt, useEffect: cu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ea(
      4194308,
      4,
      hu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ea(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ea(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Kt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Kt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Df.bind(null, nt, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: uu, useDebugValue: Fo, useDeferredValue: function(e) {
    return Kt().memoizedState = e;
  }, useTransition: function() {
    var e = uu(!1), t = e[0];
    return e = Af.bind(null, e[1]), Kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = nt, i = Kt();
    if (Je) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else {
      if (n = t(), dt === null) throw Error(o(349));
      qn & 30 || iu(r, t, n);
    }
    i.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return i.queue = a, cu(ou.bind(
      null,
      r,
      a,
      e
    ), [e]), r.flags |= 2048, Jr(9, au.bind(null, r, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = Kt(), t = dt.identifierPrefix;
    if (Je) {
      var n = rn, r = nn;
      n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Nf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Lf = {
    readContext: Dt,
    useCallback: gu,
    useContext: Dt,
    useEffect: Wo,
    useImperativeHandle: mu,
    useInsertionEffect: fu,
    useLayoutEffect: pu,
    useMemo: vu,
    useReducer: Io,
    useRef: du,
    useState: function() {
      return Io(Zr);
    },
    useDebugValue: Fo,
    useDeferredValue: function(e) {
      var t = Tt();
      return yu(t, st.memoizedState, e);
    },
    useTransition: function() {
      var e = Io(Zr)[0], t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: nu,
    useSyncExternalStore: ru,
    useId: wu,
    unstable_isNewReconciler: !1
  }, If = { readContext: Dt, useCallback: gu, useContext: Dt, useEffect: Wo, useImperativeHandle: mu, useInsertionEffect: fu, useLayoutEffect: pu, useMemo: vu, useReducer: Ho, useRef: du, useState: function() {
    return Ho(Zr);
  }, useDebugValue: Fo, useDeferredValue: function(e) {
    var t = Tt();
    return st === null ? t.memoizedState = e : yu(t, st.memoizedState, e);
  }, useTransition: function() {
    var e = Ho(Zr)[0], t = Tt().memoizedState;
    return [e, t];
  }, useMutableSource: nu, useSyncExternalStore: ru, useId: wu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = D({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function qo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ra = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = St(), i = Pn(e), a = on(r, i);
    a.payload = t, n != null && (a.callback = n), t = _n(e, a, i), t !== null && (Vt(t, e, i, r), Yi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = St(), i = Pn(e), a = on(r, i);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = _n(e, a, i), t !== null && (Vt(t, e, i, r), Yi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = St(), r = Pn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = _n(e, i, r), t !== null && (Vt(t, e, r, n), Yi(t, e, r));
  } };
  function _u(e, t, n, r, i, a, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, l) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(i, a) : !0;
  }
  function ku(e, t, n) {
    var r = !1, i = Sn, a = t.contextType;
    return typeof a == "object" && a !== null ? a = Dt(a) : (i = bt(t) ? Ln : mt.current, r = t.contextTypes, a = (r = r != null) ? or(e, i) : Sn), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ra, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function zu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ra.enqueueReplaceState(t, t.state, null);
  }
  function Bo(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Co(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = Dt(a) : (a = bt(t) ? Ln : mt.current, i.context = or(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (qo(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ra.enqueueReplaceState(i, i.state, null), Xi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function hr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Oe(r), r = r.return;
      while (r);
      var i = n;
    } catch (a) {
      i = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Uo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Go(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Hf = typeof WeakMap == "function" ? WeakMap : Map;
  function Eu(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      da || (da = !0, os = r), Go(e, t);
    }, n;
  }
  function Pu(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Go(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      Go(e, t), typeof r != "function" && (zn === null ? zn = /* @__PURE__ */ new Set([this]) : zn.add(this));
      var l = t.stack;
      this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
    }), n;
  }
  function Ou(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Hf();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Jf.bind(null, e, t, n), t.then(e, e));
  }
  function Cu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ru(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, _n(n, t, 1))), n.lanes |= 1), e);
  }
  var Wf = f.ReactCurrentOwner, _t = !1;
  function wt(e, t, n, r) {
    t.child = e === null ? Xl(t, null, n, r) : dr(t, e.child, n, r);
  }
  function ju(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return fr(t, i), r = Mo(e, t, n, r, a, i), n = Lo(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sn(e, t, i)) : (Je && n && wo(t), t.flags |= 1, wt(e, t, r, i), t.child);
  }
  function Nu(e, t, n, r, i) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !ps(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Au(e, t, a, r, i)) : (e = ga(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, !(e.lanes & i)) {
      var l = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Hr, n(l, r) && e.ref === t.ref) return sn(e, t, i);
    }
    return t.flags |= 1, e = Cn(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Au(e, t, n, r, i) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Hr(a, r) && e.ref === t.ref) if (_t = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (_t = !0);
      else return t.lanes = e.lanes, sn(e, t, i);
    }
    return Vo(e, t, n, r, i);
  }
  function Du(e, t, n) {
    var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ye(gr, jt), jt |= n;
    else {
      if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ye(gr, jt), jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Ye(gr, jt), jt |= r;
    }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ye(gr, jt), jt |= r;
    return wt(e, t, i, n), t.child;
  }
  function Tu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Vo(e, t, n, r, i) {
    var a = bt(n) ? Ln : mt.current;
    return a = or(t, a), fr(t, i), n = Mo(e, t, n, r, a, i), r = Lo(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, sn(e, t, i)) : (Je && r && wo(t), t.flags |= 1, wt(e, t, n, i), t.child);
  }
  function Mu(e, t, n, r, i) {
    if (bt(n)) {
      var a = !0;
      Fi(t);
    } else a = !1;
    if (fr(t, i), t.stateNode === null) aa(e, t), ku(t, n, r), Bo(t, n, r, i), r = !0;
    else if (e === null) {
      var l = t.stateNode, g = t.memoizedProps;
      l.props = g;
      var b = l.context, F = n.contextType;
      typeof F == "object" && F !== null ? F = Dt(F) : (F = bt(n) ? Ln : mt.current, F = or(t, F));
      var Z = n.getDerivedStateFromProps, ne = typeof Z == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      ne || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (g !== r || b !== F) && zu(t, l, r, F), bn = !1;
      var K = t.memoizedState;
      l.state = K, Xi(t, r, l, i), b = t.memoizedState, g !== r || K !== b || xt.current || bn ? (typeof Z == "function" && (qo(t, n, Z, r), b = t.memoizedState), (g = bn || _u(t, n, g, r, K, b, F)) ? (ne || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = b), l.props = r, l.state = b, l.context = F, r = g) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      l = t.stateNode, Zl(e, t), g = t.memoizedProps, F = t.type === t.elementType ? g : Bt(t.type, g), l.props = F, ne = t.pendingProps, K = l.context, b = n.contextType, typeof b == "object" && b !== null ? b = Dt(b) : (b = bt(n) ? Ln : mt.current, b = or(t, b));
      var me = n.getDerivedStateFromProps;
      (Z = typeof me == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (g !== ne || K !== b) && zu(t, l, r, b), bn = !1, K = t.memoizedState, l.state = K, Xi(t, r, l, i);
      var Se = t.memoizedState;
      g !== ne || K !== Se || xt.current || bn ? (typeof me == "function" && (qo(t, n, me, r), Se = t.memoizedState), (F = bn || _u(t, n, F, r, K, Se, b) || !1) ? (Z || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, Se, b), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, Se, b)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || g === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Se), l.props = r, l.state = Se, l.context = b, r = F) : (typeof l.componentDidUpdate != "function" || g === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return $o(e, t, n, r, a, i);
  }
  function $o(e, t, n, r, i, a) {
    Tu(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && Fl(t, n, !1), sn(e, t, a);
    r = t.stateNode, Wf.current = t;
    var g = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = dr(t, e.child, null, a), t.child = dr(t, null, g, a)) : wt(e, t, g, a), t.memoizedState = r.state, i && Fl(t, n, !0), t.child;
  }
  function Lu(e) {
    var t = e.stateNode;
    t.pendingContext ? Hl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hl(e, t.context, !1), Ro(e, t.containerInfo);
  }
  function Iu(e, t, n, r, i) {
    return ur(), _o(i), t.flags |= 256, wt(e, t, n, r), t.child;
  }
  var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hu(e, t, n) {
    var r = t.pendingProps, i = tt.current, a = !1, l = (t.flags & 128) !== 0, g;
    if ((g = l) || (g = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), g ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ye(tt, i & 1), e === null)
      return bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, l = { mode: "hidden", children: l }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = l) : a = va(l, r, 0, null), e = $n(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Yo(n), t.memoizedState = Qo, e) : Xo(t, l));
    if (i = e.memoizedState, i !== null && (g = i.dehydrated, g !== null)) return Ff(e, t, l, r, g, i, n);
    if (a) {
      a = r.fallback, l = t.mode, i = e.child, g = i.sibling;
      var b = { mode: "hidden", children: r.children };
      return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = b, t.deletions = null) : (r = Cn(i, b), r.subtreeFlags = i.subtreeFlags & 14680064), g !== null ? a = Cn(g, a) : (a = $n(a, l, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, l = e.child.memoizedState, l = l === null ? Yo(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, a.memoizedState = l, a.childLanes = e.childLanes & ~n, t.memoizedState = Qo, r;
    }
    return a = e.child, e = a.sibling, r = Cn(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Xo(e, t) {
    return t = va({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ia(e, t, n, r) {
    return r !== null && _o(r), dr(t, e.child, null, n), e = Xo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ff(e, t, n, r, i, a, l) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Uo(Error(o(422))), ia(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = va({ mode: "visible", children: r.children }, i, 0, null), a = $n(a, i, l, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && dr(t, e.child, null, l), t.child.memoizedState = Yo(l), t.memoizedState = Qo, a);
    if (!(t.mode & 1)) return ia(e, t, l, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var g = r.dgst;
      return r = g, a = Error(o(419)), r = Uo(a, r, void 0), ia(e, t, l, r);
    }
    if (g = (l & e.childLanes) !== 0, _t || g) {
      if (r = dt, r !== null) {
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
        i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, an(e, i), Vt(r, e, i, -1));
      }
      return fs(), r = Uo(Error(o(421))), ia(e, t, l, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ep.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, Rt = yn(i.nextSibling), Ct = t, Je = !0, qt = null, e !== null && (Nt[At++] = nn, Nt[At++] = rn, Nt[At++] = In, nn = e.id, rn = e.overflow, In = t), t = Xo(t, r.children), t.flags |= 4096, t);
  }
  function Wu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Po(e.return, t, n);
  }
  function Ko(e, t, n, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
  }
  function Fu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, a = r.tail;
    if (wt(e, t, r.children, n), r = tt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wu(e, n, t);
        else if (e.tag === 19) Wu(e, n, t);
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
    if (Ye(tt, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Ki(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ko(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Ki(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ko(t, !0, n, null, a);
        break;
      case "together":
        Ko(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function aa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Bn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function qf(e, t, n) {
    switch (t.tag) {
      case 3:
        Lu(t), ur();
        break;
      case 5:
        tu(t);
        break;
      case 1:
        bt(t.type) && Fi(t);
        break;
      case 4:
        Ro(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ye($i, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ye(tt, tt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hu(e, t, n) : (Ye(tt, tt.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Ye(tt, tt.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Fu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ye(tt, tt.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Du(e, t, n);
    }
    return sn(e, t, n);
  }
  var qu, Zo, Bu, Uu;
  qu = function(e, t) {
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
  }, Zo = function() {
  }, Bu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Fn(Xt.current);
      var a = null;
      switch (n) {
        case "input":
          i = Ve(e, i), r = Ve(e, r), a = [];
          break;
        case "select":
          i = D({}, i, { value: void 0 }), r = D({}, r, { value: void 0 }), a = [];
          break;
        case "textarea":
          i = ze(e, i), r = ze(e, r), a = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ii);
      }
      ft(n, r);
      var l;
      n = null;
      for (F in i) if (!r.hasOwnProperty(F) && i.hasOwnProperty(F) && i[F] != null) if (F === "style") {
        var g = i[F];
        for (l in g) g.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (z.hasOwnProperty(F) ? a || (a = []) : (a = a || []).push(F, null));
      for (F in r) {
        var b = r[F];
        if (g = i?.[F], r.hasOwnProperty(F) && b !== g && (b != null || g != null)) if (F === "style") if (g) {
          for (l in g) !g.hasOwnProperty(l) || b && b.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
          for (l in b) b.hasOwnProperty(l) && g[l] !== b[l] && (n || (n = {}), n[l] = b[l]);
        } else n || (a || (a = []), a.push(
          F,
          n
        )), n = b;
        else F === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, g = g ? g.__html : void 0, b != null && g !== b && (a = a || []).push(F, b)) : F === "children" ? typeof b != "string" && typeof b != "number" || (a = a || []).push(F, "" + b) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (z.hasOwnProperty(F) ? (b != null && F === "onScroll" && Xe("scroll", e), a || g === b || (a = [])) : (a = a || []).push(F, b));
      }
      n && (a = a || []).push("style", n);
      var F = a;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, Uu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ei(e, t) {
    if (!Je) switch (e.tailMode) {
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
  function vt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Bf(e, t, n) {
    var r = t.pendingProps;
    switch (So(t), t.tag) {
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
        return vt(t), null;
      case 1:
        return bt(t.type) && Wi(), vt(t), null;
      case 3:
        return r = t.stateNode, pr(), Ke(xt), Ke(mt), Ao(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qt !== null && (us(qt), qt = null))), Zo(e, t), vt(t), null;
      case 5:
        jo(t);
        var i = Fn(Yr.current);
        if (n = t.type, e !== null && t.stateNode != null) Bu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return vt(t), null;
          }
          if (e = Fn(Xt.current), Gi(t)) {
            r = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (r[Yt] = t, r[Ur] = a, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Xe("cancel", r), Xe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xe("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++) Xe(Fr[i], r);
                break;
              case "source":
                Xe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Xe(
                  "error",
                  r
                ), Xe("load", r);
                break;
              case "details":
                Xe("toggle", r);
                break;
              case "input":
                et(r, a), Xe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!a.multiple }, Xe("invalid", r);
                break;
              case "textarea":
                Ne(r, a), Xe("invalid", r);
            }
            ft(n, a), i = null;
            for (var l in a) if (a.hasOwnProperty(l)) {
              var g = a[l];
              l === "children" ? typeof g == "string" ? r.textContent !== g && (a.suppressHydrationWarning !== !0 && Li(r.textContent, g, e), i = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (a.suppressHydrationWarning !== !0 && Li(
                r.textContent,
                g,
                e
              ), i = ["children", "" + g]) : z.hasOwnProperty(l) && g != null && l === "onScroll" && Xe("scroll", r);
            }
            switch (n) {
              case "input":
                Ae(r), T(r, a, !0);
                break;
              case "textarea":
                Ae(r), Ge(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Ii);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Yt] = t, e[Ur] = r, qu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (l = Ht(n, r), n) {
                case "dialog":
                  Xe("cancel", e), Xe("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xe("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Fr.length; i++) Xe(Fr[i], e);
                  i = r;
                  break;
                case "source":
                  Xe("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Xe(
                    "error",
                    e
                  ), Xe("load", e), i = r;
                  break;
                case "details":
                  Xe("toggle", e), i = r;
                  break;
                case "input":
                  et(e, r), i = Ve(e, r), Xe("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = D({}, r, { value: void 0 }), Xe("invalid", e);
                  break;
                case "textarea":
                  Ne(e, r), i = ze(e, r), Xe("invalid", e);
                  break;
                default:
                  i = r;
              }
              ft(n, i), g = i;
              for (a in g) if (g.hasOwnProperty(a)) {
                var b = g[a];
                a === "style" ? He(e, b) : a === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && P(e, b)) : a === "children" ? typeof b == "string" ? (n !== "textarea" || b !== "") && q(e, b) : typeof b == "number" && q(e, "" + b) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (z.hasOwnProperty(a) ? b != null && a === "onScroll" && Xe("scroll", e) : b != null && m(e, a, b, l));
              }
              switch (n) {
                case "input":
                  Ae(e), T(e, r, !1);
                  break;
                case "textarea":
                  Ae(e), Ge(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + X(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, a = r.value, a != null ? xe(e, !!r.multiple, a, !1) : r.defaultValue != null && xe(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Ii);
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
        return vt(t), null;
      case 6:
        if (e && t.stateNode != null) Uu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (n = Fn(Yr.current), Fn(Xt.current), Gi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (a = r.nodeValue !== n) && (e = Ct, e !== null)) switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            a && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return vt(t), null;
      case 13:
        if (Ke(tt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Je && Rt !== null && t.mode & 1 && !(t.flags & 128)) $l(), ur(), t.flags |= 98560, a = !1;
          else if (a = Gi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Yt] = t;
            } else ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            vt(t), a = !1;
          } else qt !== null && (us(qt), qt = null), a = !0;
          if (!a) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || tt.current & 1 ? lt === 0 && (lt = 3) : fs())), t.updateQueue !== null && (t.flags |= 4), vt(t), null);
      case 4:
        return pr(), Zo(e, t), e === null && qr(t.stateNode.containerInfo), vt(t), null;
      case 10:
        return Eo(t.type._context), vt(t), null;
      case 17:
        return bt(t.type) && Wi(), vt(t), null;
      case 19:
        if (Ke(tt), a = t.memoizedState, a === null) return vt(t), null;
        if (r = (t.flags & 128) !== 0, l = a.rendering, l === null) if (r) ei(a, !1);
        else {
          if (lt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (l = Ki(e), l !== null) {
              for (t.flags |= 128, ei(a, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) a = n, e = r, a.flags &= 14680066, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ye(tt, tt.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          a.tail !== null && it() > vr && (t.flags |= 128, r = !0, ei(a, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ki(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ei(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !Je) return vt(t), null;
          } else 2 * it() - a.renderingStartTime > vr && n !== 1073741824 && (t.flags |= 128, r = !0, ei(a, !1), t.lanes = 4194304);
          a.isBackwards ? (l.sibling = t.child, t.child = l) : (n = a.last, n !== null ? n.sibling = l : t.child = l, a.last = l);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = it(), t.sibling = null, n = tt.current, Ye(tt, r ? n & 1 | 2 : n & 1), t) : (vt(t), null);
      case 22:
      case 23:
        return cs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? jt & 1073741824 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Uf(e, t) {
    switch (So(t), t.tag) {
      case 1:
        return bt(t.type) && Wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pr(), Ke(xt), Ke(mt), Ao(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return jo(t), null;
      case 13:
        if (Ke(tt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          ur();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ke(tt), null;
      case 4:
        return pr(), null;
      case 10:
        return Eo(t.type._context), null;
      case 22:
      case 23:
        return cs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oa = !1, yt = !1, Gf = typeof WeakSet == "function" ? WeakSet : Set, ye = null;
  function mr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      rt(e, t, r);
    }
    else n.current = null;
  }
  function Jo(e, t, n) {
    try {
      n();
    } catch (r) {
      rt(e, t, r);
    }
  }
  var Gu = !1;
  function Vf(e, t) {
    if (co = Ei, e = _l(), no(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0, g = -1, b = -1, F = 0, Z = 0, ne = e, K = null;
          t: for (; ; ) {
            for (var me; ne !== n || i !== 0 && ne.nodeType !== 3 || (g = l + i), ne !== a || r !== 0 && ne.nodeType !== 3 || (b = l + r), ne.nodeType === 3 && (l += ne.nodeValue.length), (me = ne.firstChild) !== null; )
              K = ne, ne = me;
            for (; ; ) {
              if (ne === e) break t;
              if (K === n && ++F === i && (g = l), K === a && ++Z === r && (b = l), (me = ne.nextSibling) !== null) break;
              ne = K, K = ne.parentNode;
            }
            ne = me;
          }
          n = g === -1 || b === -1 ? null : { start: g, end: b };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (fo = { focusedElem: e, selectionRange: n }, Ei = !1, ye = t; ye !== null; ) if (t = ye, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ye = e;
    else for (; ye !== null; ) {
      t = ye;
      try {
        var Se = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Se !== null) {
              var be = Se.memoizedProps, at = Se.memoizedState, M = t.stateNode, k = M.getSnapshotBeforeUpdate(t.elementType === t.type ? be : Bt(t.type, be), at);
              M.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var H = t.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (ae) {
        rt(t, t.return, ae);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ye = e;
        break;
      }
      ye = t.return;
    }
    return Se = Gu, Gu = !1, Se;
  }
  function ti(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var a = i.destroy;
          i.destroy = void 0, a !== void 0 && Jo(t, n, a);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function sa(e, t) {
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
  function es(e) {
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
  function Vu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Vu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Ur], delete t[go], delete t[Of], delete t[Cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function $u(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Qu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $u(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ts(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ii));
    else if (r !== 4 && (e = e.child, e !== null)) for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), e = e.sibling;
  }
  function ns(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), e = e.sibling;
  }
  var pt = null, Ut = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) Yu(e, t, n), n = n.sibling;
  }
  function Yu(e, t, n) {
    if (Qt && typeof Qt.onCommitFiberUnmount == "function") try {
      Qt.onCommitFiberUnmount(Si, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        yt || mr(n, t);
      case 6:
        var r = pt, i = Ut;
        pt = null, kn(e, t, n), pt = r, Ut = i, pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? mo(e.parentNode, n) : e.nodeType === 1 && mo(e, n), Ar(e)) : mo(pt, n.stateNode));
        break;
      case 4:
        r = pt, i = Ut, pt = n.stateNode.containerInfo, Ut = !0, kn(e, t, n), pt = r, Ut = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var a = i, l = a.destroy;
            a = a.tag, l !== void 0 && (a & 2 || a & 4) && Jo(n, t, l), i = i.next;
          } while (i !== r);
        }
        kn(e, t, n);
        break;
      case 1:
        if (!yt && (mr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          rt(n, t, g);
        }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (yt = (r = yt) || n.memoizedState !== null, kn(e, t, n), yt = r) : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function Xu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Gf()), t.forEach(function(r) {
        var i = tp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function Gt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e, l = t, g = l;
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
        if (pt === null) throw Error(o(160));
        Yu(a, l, i), pt = null, Ut = !1;
        var b = i.alternate;
        b !== null && (b.return = null), i.return = null;
      } catch (F) {
        rt(i, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ku(t, e), t = t.sibling;
  }
  function Ku(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Gt(t, e), Zt(e), r & 4) {
          try {
            ti(3, e, e.return), sa(3, e);
          } catch (be) {
            rt(e, e.return, be);
          }
          try {
            ti(5, e, e.return);
          } catch (be) {
            rt(e, e.return, be);
          }
        }
        break;
      case 1:
        Gt(t, e), Zt(e), r & 512 && n !== null && mr(n, n.return);
        break;
      case 5:
        if (Gt(t, e), Zt(e), r & 512 && n !== null && mr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            q(i, "");
          } catch (be) {
            rt(e, e.return, be);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var a = e.memoizedProps, l = n !== null ? n.memoizedProps : a, g = e.type, b = e.updateQueue;
          if (e.updateQueue = null, b !== null) try {
            g === "input" && a.type === "radio" && a.name != null && x(i, a), Ht(g, l);
            var F = Ht(g, a);
            for (l = 0; l < b.length; l += 2) {
              var Z = b[l], ne = b[l + 1];
              Z === "style" ? He(i, ne) : Z === "dangerouslySetInnerHTML" ? P(i, ne) : Z === "children" ? q(i, ne) : m(i, Z, ne, F);
            }
            switch (g) {
              case "input":
                E(i, a);
                break;
              case "textarea":
                Me(i, a);
                break;
              case "select":
                var K = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var me = a.value;
                me != null ? xe(i, !!a.multiple, me, !1) : K !== !!a.multiple && (a.defaultValue != null ? xe(
                  i,
                  !!a.multiple,
                  a.defaultValue,
                  !0
                ) : xe(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[Ur] = a;
          } catch (be) {
            rt(e, e.return, be);
          }
        }
        break;
      case 6:
        if (Gt(t, e), Zt(e), r & 4) {
          if (e.stateNode === null) throw Error(o(162));
          i = e.stateNode, a = e.memoizedProps;
          try {
            i.nodeValue = a;
          } catch (be) {
            rt(e, e.return, be);
          }
        }
        break;
      case 3:
        if (Gt(t, e), Zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (be) {
          rt(e, e.return, be);
        }
        break;
      case 4:
        Gt(t, e), Zt(e);
        break;
      case 13:
        Gt(t, e), Zt(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (as = it())), r & 4 && Xu(e);
        break;
      case 22:
        if (Z = n !== null && n.memoizedState !== null, e.mode & 1 ? (yt = (F = yt) || Z, Gt(t, e), yt = F) : Gt(t, e), Zt(e), r & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !Z && e.mode & 1) for (ye = e, Z = e.child; Z !== null; ) {
            for (ne = ye = Z; ye !== null; ) {
              switch (K = ye, me = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ti(4, K, K.return);
                  break;
                case 1:
                  mr(K, K.return);
                  var Se = K.stateNode;
                  if (typeof Se.componentWillUnmount == "function") {
                    r = K, n = K.return;
                    try {
                      t = r, Se.props = t.memoizedProps, Se.state = t.memoizedState, Se.componentWillUnmount();
                    } catch (be) {
                      rt(r, n, be);
                    }
                  }
                  break;
                case 5:
                  mr(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    ed(ne);
                    continue;
                  }
              }
              me !== null ? (me.return = K, ye = me) : ed(ne);
            }
            Z = Z.sibling;
          }
          e: for (Z = null, ne = e; ; ) {
            if (ne.tag === 5) {
              if (Z === null) {
                Z = ne;
                try {
                  i = ne.stateNode, F ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (g = ne.stateNode, b = ne.memoizedProps.style, l = b != null && b.hasOwnProperty("display") ? b.display : null, g.style.display = Ie("display", l));
                } catch (be) {
                  rt(e, e.return, be);
                }
              }
            } else if (ne.tag === 6) {
              if (Z === null) try {
                ne.stateNode.nodeValue = F ? "" : ne.memoizedProps;
              } catch (be) {
                rt(e, e.return, be);
              }
            } else if ((ne.tag !== 22 && ne.tag !== 23 || ne.memoizedState === null || ne === e) && ne.child !== null) {
              ne.child.return = ne, ne = ne.child;
              continue;
            }
            if (ne === e) break e;
            for (; ne.sibling === null; ) {
              if (ne.return === null || ne.return === e) break e;
              Z === ne && (Z = null), ne = ne.return;
            }
            Z === ne && (Z = null), ne.sibling.return = ne.return, ne = ne.sibling;
          }
        }
        break;
      case 19:
        Gt(t, e), Zt(e), r & 4 && Xu(e);
        break;
      case 21:
        break;
      default:
        Gt(
          t,
          e
        ), Zt(e);
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if ($u(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (q(i, ""), r.flags &= -33);
            var a = Qu(e);
            ns(e, a, i);
            break;
          case 3:
          case 4:
            var l = r.stateNode.containerInfo, g = Qu(e);
            ts(e, g, l);
            break;
          default:
            throw Error(o(161));
        }
      } catch (b) {
        rt(e, e.return, b);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $f(e, t, n) {
    ye = e, Zu(e);
  }
  function Zu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ye !== null; ) {
      var i = ye, a = i.child;
      if (i.tag === 22 && r) {
        var l = i.memoizedState !== null || oa;
        if (!l) {
          var g = i.alternate, b = g !== null && g.memoizedState !== null || yt;
          g = oa;
          var F = yt;
          if (oa = l, (yt = b) && !F) for (ye = i; ye !== null; ) l = ye, b = l.child, l.tag === 22 && l.memoizedState !== null ? td(i) : b !== null ? (b.return = l, ye = b) : td(i);
          for (; a !== null; ) ye = a, Zu(a), a = a.sibling;
          ye = i, oa = g, yt = F;
        }
        Ju(e);
      } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, ye = a) : Ju(e);
    }
  }
  function Ju(e) {
    for (; ye !== null; ) {
      var t = ye;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || sa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var a = t.updateQueue;
              a !== null && eu(t, a, r);
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
                eu(t, l, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var b = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    b.autoFocus && n.focus();
                    break;
                  case "img":
                    b.src && (n.src = b.src);
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
                var F = t.alternate;
                if (F !== null) {
                  var Z = F.memoizedState;
                  if (Z !== null) {
                    var ne = Z.dehydrated;
                    ne !== null && Ar(ne);
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
              throw Error(o(163));
          }
          yt || t.flags & 512 && es(t);
        } catch (K) {
          rt(t, t.return, K);
        }
      }
      if (t === e) {
        ye = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ye = n;
        break;
      }
      ye = t.return;
    }
  }
  function ed(e) {
    for (; ye !== null; ) {
      var t = ye;
      if (t === e) {
        ye = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ye = n;
        break;
      }
      ye = t.return;
    }
  }
  function td(e) {
    for (; ye !== null; ) {
      var t = ye;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              sa(4, t);
            } catch (b) {
              rt(t, n, b);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (b) {
                rt(t, i, b);
              }
            }
            var a = t.return;
            try {
              es(t);
            } catch (b) {
              rt(t, a, b);
            }
            break;
          case 5:
            var l = t.return;
            try {
              es(t);
            } catch (b) {
              rt(t, l, b);
            }
        }
      } catch (b) {
        rt(t, t.return, b);
      }
      if (t === e) {
        ye = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, ye = g;
        break;
      }
      ye = t.return;
    }
  }
  var Qf = Math.ceil, la = f.ReactCurrentDispatcher, rs = f.ReactCurrentOwner, Mt = f.ReactCurrentBatchConfig, qe = 0, dt = null, ot = null, ht = 0, jt = 0, gr = wn(0), lt = 0, ni = null, Bn = 0, ua = 0, is = 0, ri = null, kt = null, as = 0, vr = 1 / 0, ln = null, da = !1, os = null, zn = null, ca = !1, En = null, fa = 0, ii = 0, ss = null, pa = -1, ha = 0;
  function St() {
    return qe & 6 ? it() : pa !== -1 ? pa : pa = it();
  }
  function Pn(e) {
    return e.mode & 1 ? qe & 2 && ht !== 0 ? ht & -ht : jf.transition !== null ? (ha === 0 && (ha = Qs()), ha) : (e = $e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rl(e.type)), e) : 1;
  }
  function Vt(e, t, n, r) {
    if (50 < ii) throw ii = 0, ss = null, Error(o(185));
    Or(e, n, r), (!(qe & 2) || e !== dt) && (e === dt && (!(qe & 2) && (ua |= n), lt === 4 && On(e, ht)), zt(e, r), n === 1 && qe === 0 && !(t.mode & 1) && (vr = it() + 500, qi && xn()));
  }
  function zt(e, t) {
    var n = e.callbackNode;
    Rc(e, t);
    var r = _i(e, e === dt ? ht : 0);
    if (r === 0) n !== null && Gs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Gs(n), t === 1) e.tag === 0 ? Rf(rd.bind(null, e)) : ql(rd.bind(null, e)), Ef(function() {
        !(qe & 6) && xn();
      }), n = null;
      else {
        switch (Ys(r)) {
          case 1:
            n = Ha;
            break;
          case 4:
            n = Vs;
            break;
          case 16:
            n = wi;
            break;
          case 536870912:
            n = $s;
            break;
          default:
            n = wi;
        }
        n = cd(n, nd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function nd(e, t) {
    if (pa = -1, ha = 0, qe & 6) throw Error(o(327));
    var n = e.callbackNode;
    if (yr() && e.callbackNode !== n) return null;
    var r = _i(e, e === dt ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ma(e, r);
    else {
      t = r;
      var i = qe;
      qe |= 2;
      var a = ad();
      (dt !== e || ht !== t) && (ln = null, vr = it() + 500, Gn(e, t));
      do
        try {
          Kf();
          break;
        } catch (g) {
          id(e, g);
        }
      while (!0);
      zo(), la.current = a, qe = i, ot !== null ? t = 0 : (dt = null, ht = 0, t = lt);
    }
    if (t !== 0) {
      if (t === 2 && (i = Wa(e), i !== 0 && (r = i, t = ls(e, i))), t === 1) throw n = ni, Gn(e, 0), On(e, r), zt(e, it()), n;
      if (t === 6) On(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Yf(i) && (t = ma(e, r), t === 2 && (a = Wa(e), a !== 0 && (r = a, t = ls(e, a))), t === 1)) throw n = ni, Gn(e, 0), On(e, r), zt(e, it()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Vn(e, kt, ln);
            break;
          case 3:
            if (On(e, r), (r & 130023424) === r && (t = as + 500 - it(), 10 < t)) {
              if (_i(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                St(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = ho(Vn.bind(null, e, kt, ln), t);
              break;
            }
            Vn(e, kt, ln);
            break;
          case 4:
            if (On(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var l = 31 - Wt(r);
              a = 1 << l, l = t[l], l > i && (i = l), r &= ~a;
            }
            if (r = i, r = it() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ho(Vn.bind(null, e, kt, ln), r);
              break;
            }
            Vn(e, kt, ln);
            break;
          case 5:
            Vn(e, kt, ln);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return zt(e, it()), e.callbackNode === n ? nd.bind(null, e) : null;
  }
  function ls(e, t) {
    var n = ri;
    return e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256), e = ma(e, t), e !== 2 && (t = kt, kt = n, t !== null && us(t)), e;
  }
  function us(e) {
    kt === null ? kt = e : kt.push.apply(kt, e);
  }
  function Yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], a = i.getSnapshot;
          i = i.value;
          try {
            if (!Ft(a(), i)) return !1;
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
    for (t &= ~is, t &= ~ua, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function rd(e) {
    if (qe & 6) throw Error(o(327));
    yr();
    var t = _i(e, 0);
    if (!(t & 1)) return zt(e, it()), null;
    var n = ma(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Wa(e);
      r !== 0 && (t = r, n = ls(e, r));
    }
    if (n === 1) throw n = ni, Gn(e, 0), On(e, t), zt(e, it()), n;
    if (n === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, kt, ln), zt(e, it()), null;
  }
  function ds(e, t) {
    var n = qe;
    qe |= 1;
    try {
      return e(t);
    } finally {
      qe = n, qe === 0 && (vr = it() + 500, qi && xn());
    }
  }
  function Un(e) {
    En !== null && En.tag === 0 && !(qe & 6) && yr();
    var t = qe;
    qe |= 1;
    var n = Mt.transition, r = $e;
    try {
      if (Mt.transition = null, $e = 1, e) return e();
    } finally {
      $e = r, Mt.transition = n, qe = t, !(qe & 6) && xn();
    }
  }
  function cs() {
    jt = gr.current, Ke(gr);
  }
  function Gn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, zf(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var r = n;
      switch (So(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wi();
          break;
        case 3:
          pr(), Ke(xt), Ke(mt), Ao();
          break;
        case 5:
          jo(r);
          break;
        case 4:
          pr();
          break;
        case 13:
          Ke(tt);
          break;
        case 19:
          Ke(tt);
          break;
        case 10:
          Eo(r.type._context);
          break;
        case 22:
        case 23:
          cs();
      }
      n = n.return;
    }
    if (dt = e, ot = e = Cn(e.current, null), ht = jt = t, lt = 0, ni = null, is = ua = Bn = 0, kt = ri = null, Wn !== null) {
      for (t = 0; t < Wn.length; t++) if (n = Wn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, a = n.pending;
        if (a !== null) {
          var l = a.next;
          a.next = i, r.next = l;
        }
        n.pending = r;
      }
      Wn = null;
    }
    return e;
  }
  function id(e, t) {
    do {
      var n = ot;
      try {
        if (zo(), Zi.current = na, Ji) {
          for (var r = nt.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ji = !1;
        }
        if (qn = 0, ut = st = nt = null, Xr = !1, Kr = 0, rs.current = null, n === null || n.return === null) {
          lt = 1, ni = t, ot = null;
          break;
        }
        e: {
          var a = e, l = n.return, g = n, b = t;
          if (t = ht, g.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var F = b, Z = g, ne = Z.tag;
            if (!(Z.mode & 1) && (ne === 0 || ne === 11 || ne === 15)) {
              var K = Z.alternate;
              K ? (Z.updateQueue = K.updateQueue, Z.memoizedState = K.memoizedState, Z.lanes = K.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var me = Cu(l);
            if (me !== null) {
              me.flags &= -257, Ru(me, l, g, a, t), me.mode & 1 && Ou(a, F, t), t = me, b = F;
              var Se = t.updateQueue;
              if (Se === null) {
                var be = /* @__PURE__ */ new Set();
                be.add(b), t.updateQueue = be;
              } else Se.add(b);
              break e;
            } else {
              if (!(t & 1)) {
                Ou(a, F, t), fs();
                break e;
              }
              b = Error(o(426));
            }
          } else if (Je && g.mode & 1) {
            var at = Cu(l);
            if (at !== null) {
              !(at.flags & 65536) && (at.flags |= 256), Ru(at, l, g, a, t), _o(hr(b, g));
              break e;
            }
          }
          a = b = hr(b, g), lt !== 4 && (lt = 2), ri === null ? ri = [a] : ri.push(a), a = l;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var M = Eu(a, b, t);
                Jl(a, M);
                break e;
              case 1:
                g = b;
                var k = a.type, H = a.stateNode;
                if (!(a.flags & 128) && (typeof k.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (zn === null || !zn.has(H)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var ae = Pu(a, g, t);
                  Jl(a, ae);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        sd(n);
      } catch (ke) {
        t = ke, ot === n && n !== null && (ot = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ad() {
    var e = la.current;
    return la.current = na, e === null ? na : e;
  }
  function fs() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), dt === null || !(Bn & 268435455) && !(ua & 268435455) || On(dt, ht);
  }
  function ma(e, t) {
    var n = qe;
    qe |= 2;
    var r = ad();
    (dt !== e || ht !== t) && (ln = null, Gn(e, t));
    do
      try {
        Xf();
        break;
      } catch (i) {
        id(e, i);
      }
    while (!0);
    if (zo(), qe = n, la.current = r, ot !== null) throw Error(o(261));
    return dt = null, ht = 0, lt;
  }
  function Xf() {
    for (; ot !== null; ) od(ot);
  }
  function Kf() {
    for (; ot !== null && !xc(); ) od(ot);
  }
  function od(e) {
    var t = dd(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps, t === null ? sd(e) : ot = t, rs.current = null;
  }
  function sd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Uf(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          lt = 6, ot = null;
          return;
        }
      } else if (n = Bf(n, t, jt), n !== null) {
        ot = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ot = t;
        return;
      }
      ot = t = e;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function Vn(e, t, n) {
    var r = $e, i = Mt.transition;
    try {
      Mt.transition = null, $e = 1, Zf(e, t, n, r);
    } finally {
      Mt.transition = i, $e = r;
    }
    return null;
  }
  function Zf(e, t, n, r) {
    do
      yr();
    while (En !== null);
    if (qe & 6) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (jc(e, a), e === dt && (ot = dt = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ca || (ca = !0, cd(wi, function() {
      return yr(), null;
    })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
      a = Mt.transition, Mt.transition = null;
      var l = $e;
      $e = 1;
      var g = qe;
      qe |= 4, rs.current = null, Vf(e, n), Ku(n, e), yf(fo), Ei = !!co, fo = co = null, e.current = n, $f(n), bc(), qe = g, $e = l, Mt.transition = a;
    } else e.current = n;
    if (ca && (ca = !1, En = e, fa = i), a = e.pendingLanes, a === 0 && (zn = null), zc(n.stateNode), zt(e, it()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (da) throw da = !1, e = os, os = null, e;
    return fa & 1 && e.tag !== 0 && yr(), a = e.pendingLanes, a & 1 ? e === ss ? ii++ : (ii = 0, ss = e) : ii = 0, xn(), null;
  }
  function yr() {
    if (En !== null) {
      var e = Ys(fa), t = Mt.transition, n = $e;
      try {
        if (Mt.transition = null, $e = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, fa = 0, qe & 6) throw Error(o(331));
          var i = qe;
          for (qe |= 4, ye = e.current; ye !== null; ) {
            var a = ye, l = a.child;
            if (ye.flags & 16) {
              var g = a.deletions;
              if (g !== null) {
                for (var b = 0; b < g.length; b++) {
                  var F = g[b];
                  for (ye = F; ye !== null; ) {
                    var Z = ye;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ti(8, Z, a);
                    }
                    var ne = Z.child;
                    if (ne !== null) ne.return = Z, ye = ne;
                    else for (; ye !== null; ) {
                      Z = ye;
                      var K = Z.sibling, me = Z.return;
                      if (Vu(Z), Z === F) {
                        ye = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = me, ye = K;
                        break;
                      }
                      ye = me;
                    }
                  }
                }
                var Se = a.alternate;
                if (Se !== null) {
                  var be = Se.child;
                  if (be !== null) {
                    Se.child = null;
                    do {
                      var at = be.sibling;
                      be.sibling = null, be = at;
                    } while (be !== null);
                  }
                }
                ye = a;
              }
            }
            if (a.subtreeFlags & 2064 && l !== null) l.return = a, ye = l;
            else e: for (; ye !== null; ) {
              if (a = ye, a.flags & 2048) switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ti(9, a, a.return);
              }
              var M = a.sibling;
              if (M !== null) {
                M.return = a.return, ye = M;
                break e;
              }
              ye = a.return;
            }
          }
          var k = e.current;
          for (ye = k; ye !== null; ) {
            l = ye;
            var H = l.child;
            if (l.subtreeFlags & 2064 && H !== null) H.return = l, ye = H;
            else e: for (l = k; ye !== null; ) {
              if (g = ye, g.flags & 2048) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sa(9, g);
                }
              } catch (ke) {
                rt(g, g.return, ke);
              }
              if (g === l) {
                ye = null;
                break e;
              }
              var ae = g.sibling;
              if (ae !== null) {
                ae.return = g.return, ye = ae;
                break e;
              }
              ye = g.return;
            }
          }
          if (qe = i, xn(), Qt && typeof Qt.onPostCommitFiberRoot == "function") try {
            Qt.onPostCommitFiberRoot(Si, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        $e = n, Mt.transition = t;
      }
    }
    return !1;
  }
  function ld(e, t, n) {
    t = hr(n, t), t = Eu(e, t, 1), e = _n(e, t, 1), t = St(), e !== null && (Or(e, 1, t), zt(e, t));
  }
  function rt(e, t, n) {
    if (e.tag === 3) ld(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ld(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r))) {
          e = hr(n, e), e = Pu(t, e, 1), t = _n(t, e, 1), e = St(), t !== null && (Or(t, 1, e), zt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Jf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = St(), e.pingedLanes |= e.suspendedLanes & n, dt === e && (ht & n) === n && (lt === 4 || lt === 3 && (ht & 130023424) === ht && 500 > it() - as ? Gn(e, 0) : is |= n), zt(e, t);
  }
  function ud(e, t) {
    t === 0 && (e.mode & 1 ? (t = bi, bi <<= 1, !(bi & 130023424) && (bi = 4194304)) : t = 1);
    var n = St();
    e = an(e, t), e !== null && (Or(e, t, n), zt(e, n));
  }
  function ep(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ud(e, n);
  }
  function tp(e, t) {
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
        throw Error(o(314));
    }
    r !== null && r.delete(t), ud(e, n);
  }
  var dd;
  dd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || xt.current) _t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return _t = !1, qf(e, t, n);
      _t = !!(e.flags & 131072);
    }
    else _t = !1, Je && t.flags & 1048576 && Bl(t, Ui, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        aa(e, t), e = t.pendingProps;
        var i = or(t, mt.current);
        fr(t, n), i = Mo(null, t, r, e, i, n);
        var a = Lo();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(r) ? (a = !0, Fi(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Co(t), i.updater = ra, t.stateNode = i, i._reactInternals = t, Bo(t, r, e, n), t = $o(null, t, r, !0, a, n)) : (t.tag = 0, Je && a && wo(t), wt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (aa(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = rp(r), e = Bt(r, e), i) {
            case 0:
              t = Vo(null, t, r, e, n);
              break e;
            case 1:
              t = Mu(null, t, r, e, n);
              break e;
            case 11:
              t = ju(null, t, r, e, n);
              break e;
            case 14:
              t = Nu(null, t, r, Bt(r.type, e), n);
              break e;
          }
          throw Error(o(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Vo(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Mu(e, t, r, i, n);
      case 3:
        e: {
          if (Lu(t), e === null) throw Error(o(387));
          r = t.pendingProps, a = t.memoizedState, i = a.element, Zl(e, t), Xi(t, r, null, n);
          var l = t.memoizedState;
          if (r = l.element, a.isDehydrated) if (a = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
            i = hr(Error(o(423)), t), t = Iu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = hr(Error(o(424)), t), t = Iu(e, t, r, n, i);
            break e;
          } else for (Rt = yn(t.stateNode.containerInfo.firstChild), Ct = t, Je = !0, qt = null, n = Xl(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ur(), r === i) {
              t = sn(e, t, n);
              break e;
            }
            wt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return tu(t), e === null && bo(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, l = i.children, po(r, i) ? l = null : a !== null && po(r, a) && (t.flags |= 32), Tu(e, t), wt(e, t, l, n), t.child;
      case 6:
        return e === null && bo(t), null;
      case 13:
        return Hu(e, t, n);
      case 4:
        return Ro(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dr(t, null, r, n) : wt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), ju(e, t, r, i, n);
      case 7:
        return wt(e, t, t.pendingProps, n), t.child;
      case 8:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, l = i.value, Ye($i, r._currentValue), r._currentValue = l, a !== null) if (Ft(a.value, l)) {
            if (a.children === i.children && !xt.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
            var g = a.dependencies;
            if (g !== null) {
              l = a.child;
              for (var b = g.firstContext; b !== null; ) {
                if (b.context === r) {
                  if (a.tag === 1) {
                    b = on(-1, n & -n), b.tag = 2;
                    var F = a.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var Z = F.pending;
                      Z === null ? b.next = b : (b.next = Z.next, Z.next = b), F.pending = b;
                    }
                  }
                  a.lanes |= n, b = a.alternate, b !== null && (b.lanes |= n), Po(
                    a.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                b = b.next;
              }
            } else if (a.tag === 10) l = a.type === t.type ? null : a.child;
            else if (a.tag === 18) {
              if (l = a.return, l === null) throw Error(o(341));
              l.lanes |= n, g = l.alternate, g !== null && (g.lanes |= n), Po(l, n, t), l = a.sibling;
            } else l = a.child;
            if (l !== null) l.return = a;
            else for (l = a; l !== null; ) {
              if (l === t) {
                l = null;
                break;
              }
              if (a = l.sibling, a !== null) {
                a.return = l.return, l = a;
                break;
              }
              l = l.return;
            }
            a = l;
          }
          wt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, fr(t, n), i = Dt(i), r = r(i), t.flags |= 1, wt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), Nu(e, t, r, i, n);
      case 15:
        return Au(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), aa(e, t), t.tag = 1, bt(r) ? (e = !0, Fi(t)) : e = !1, fr(t, n), ku(t, r, i), Bo(t, r, i, n), $o(null, t, r, !0, e, n);
      case 19:
        return Fu(e, t, n);
      case 22:
        return Du(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function cd(e, t) {
    return Us(e, t);
  }
  function np(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, r) {
    return new np(e, t, n, r);
  }
  function ps(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function rp(e) {
    if (typeof e == "function") return ps(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === se) return 11;
      if (e === _e) return 14;
    }
    return 2;
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ga(e, t, n, r, i, a) {
    var l = 2;
    if (r = e, typeof e == "function") ps(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
      case _:
        return $n(n.children, i, a, t);
      case B:
        l = 8, i |= 8;
        break;
      case V:
        return e = Lt(12, n, t, i | 2), e.elementType = V, e.lanes = a, e;
      case ie:
        return e = Lt(13, n, t, i), e.elementType = ie, e.lanes = a, e;
      case ve:
        return e = Lt(19, n, t, i), e.elementType = ve, e.lanes = a, e;
      case pe:
        return va(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case J:
            l = 10;
            break e;
          case le:
            l = 9;
            break e;
          case se:
            l = 11;
            break e;
          case _e:
            l = 14;
            break e;
          case oe:
            l = 16, r = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = Lt(l, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
  }
  function $n(e, t, n, r) {
    return e = Lt(7, e, r, t), e.lanes = n, e;
  }
  function va(e, t, n, r) {
    return e = Lt(22, e, r, t), e.elementType = pe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function hs(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function ms(e, t, n) {
    return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ip(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fa(0), this.expirationTimes = Fa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fa(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function gs(e, t, n, r, i, a, l, g, b) {
    return e = new ip(e, t, n, g, b), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Lt(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Co(a), e;
  }
  function ap(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: w, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function fd(e) {
    if (!e) return Sn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (bt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (bt(n)) return Wl(e, n, t);
    }
    return t;
  }
  function pd(e, t, n, r, i, a, l, g, b) {
    return e = gs(n, r, !0, e, i, a, l, g, b), e.context = fd(null), n = e.current, r = St(), i = Pn(n), a = on(r, i), a.callback = t ?? null, _n(n, a, i), e.current.lanes = i, Or(e, i, r), zt(e, r), e;
  }
  function ya(e, t, n, r) {
    var i = t.current, a = St(), l = Pn(i);
    return n = fd(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(a, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _n(i, t, l), e !== null && (Vt(e, i, l, a), Yi(e, i, l)), l;
  }
  function wa(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function hd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function vs(e, t) {
    hd(e, t), (e = e.alternate) && hd(e, t);
  }
  function op() {
    return null;
  }
  var md = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ys(e) {
    this._internalRoot = e;
  }
  Sa.prototype.render = ys.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    ya(e, t, null, null);
  }, Sa.prototype.unmount = ys.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Un(function() {
        ya(null, e, null, null);
      }), t[en] = null;
    }
  };
  function Sa(e) {
    this._internalRoot = e;
  }
  Sa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Zs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++) ;
      mn.splice(n, 0, e), n === 0 && tl(e);
    }
  };
  function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gd() {
  }
  function sp(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var a = r;
        r = function() {
          var F = wa(l);
          a.call(F);
        };
      }
      var l = pd(t, r, e, 0, null, !1, !1, "", gd);
      return e._reactRootContainer = l, e[en] = l.current, qr(e.nodeType === 8 ? e.parentNode : e), Un(), l;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var F = wa(b);
        g.call(F);
      };
    }
    var b = gs(e, 0, !1, null, null, !1, !1, "", gd);
    return e._reactRootContainer = b, e[en] = b.current, qr(e.nodeType === 8 ? e.parentNode : e), Un(function() {
      ya(t, b, n, r);
    }), b;
  }
  function ba(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
      var l = a;
      if (typeof i == "function") {
        var g = i;
        i = function() {
          var b = wa(l);
          g.call(b);
        };
      }
      ya(t, l, e, i);
    } else l = sp(n, t, e, i, r);
    return wa(l);
  }
  Xs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Pr(t.pendingLanes);
          n !== 0 && (qa(t, n | 1), zt(t, it()), !(qe & 6) && (vr = it() + 500, xn()));
        }
        break;
      case 13:
        Un(function() {
          var r = an(e, 1);
          if (r !== null) {
            var i = St();
            Vt(r, e, 1, i);
          }
        }), vs(e, 1);
    }
  }, Ba = function(e) {
    if (e.tag === 13) {
      var t = an(e, 134217728);
      if (t !== null) {
        var n = St();
        Vt(t, e, 134217728, n);
      }
      vs(e, 134217728);
    }
  }, Ks = function(e) {
    if (e.tag === 13) {
      var t = Pn(e), n = an(e, t);
      if (n !== null) {
        var r = St();
        Vt(n, e, t, r);
      }
      vs(e, t);
    }
  }, Zs = function() {
    return $e;
  }, Js = function(e, t) {
    var n = $e;
    try {
      return $e = e, t();
    } finally {
      $e = n;
    }
  }, Yn = function(e, t, n) {
    switch (t) {
      case "input":
        if (E(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Hi(r);
              if (!i) throw Error(o(90));
              De(r), E(r, i);
            }
          }
        }
        break;
      case "textarea":
        Me(e, n);
        break;
      case "select":
        t = n.value, t != null && xe(e, !!n.multiple, t, !1);
    }
  }, gi = ds, Is = Un;
  var lp = { usingClientEntryPoint: !1, Events: [Gr, ir, Hi, _r, Xn, ds] }, ai = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, up = { bundleType: ai.bundleType, version: ai.version, rendererPackageName: ai.rendererPackageName, rendererConfig: ai.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: f.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = qs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ai.findFiberByHostInstance || op, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_a.isDisabled && _a.supportsFiber) try {
      Si = _a.inject(up), Qt = _a;
    } catch {
    }
  }
  return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp, Et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(t)) throw Error(o(200));
    return ap(e, t, null, n);
  }, Et.createRoot = function(e, t) {
    if (!ws(e)) throw Error(o(299));
    var n = !1, r = "", i = md;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = gs(e, 1, !1, null, null, n, !1, r, i), e[en] = t.current, qr(e.nodeType === 8 ? e.parentNode : e), new ys(t);
  }, Et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = qs(t), e = e === null ? null : e.stateNode, e;
  }, Et.flushSync = function(e) {
    return Un(e);
  }, Et.hydrate = function(e, t, n) {
    if (!xa(t)) throw Error(o(200));
    return ba(null, e, t, !0, n);
  }, Et.hydrateRoot = function(e, t, n) {
    if (!ws(e)) throw Error(o(405));
    var r = n != null && n.hydratedSources || null, i = !1, a = "", l = md;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = pd(t, null, e, 1, n ?? null, i, !1, a, l), e[en] = t.current, qr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new Sa(t);
  }, Et.render = function(e, t, n) {
    if (!xa(t)) throw Error(o(200));
    return ba(null, e, t, !1, n);
  }, Et.unmountComponentAtNode = function(e) {
    if (!xa(e)) throw Error(o(40));
    return e._reactRootContainer ? (Un(function() {
      ba(null, null, e, !1, function() {
        e._reactRootContainer = null, e[en] = null;
      });
    }), !0) : !1;
  }, Et.unstable_batchedUpdates = ds, Et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xa(n)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return ba(e, t, n, !1, r);
  }, Et.version = "18.3.1-next-f1338f8080-20240426", Et;
}
var bd;
function Ca() {
  if (bd) return xs.exports;
  bd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return s(), xs.exports = mp(), xs.exports;
}
var _d;
function gp() {
  if (_d) return ka;
  _d = 1;
  var s = Ca();
  return ka.createRoot = s.createRoot, ka.hydrateRoot = s.hydrateRoot, ka;
}
var vp = gp(), ks = { exports: {} }, oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function yp() {
  if (kd) return oi;
  kd = 1;
  var s = Pt(), c = Symbol.for("react.element"), o = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, z = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(R, j, I) {
    var $, O = {}, G = null, ge = null;
    I !== void 0 && (G = "" + I), j.key !== void 0 && (G = "" + j.key), j.ref !== void 0 && (ge = j.ref);
    for ($ in j) u.call(j, $) && !C.hasOwnProperty($) && (O[$] = j[$]);
    if (R && R.defaultProps) for ($ in j = R.defaultProps, j) O[$] === void 0 && (O[$] = j[$]);
    return { $$typeof: c, type: R, key: G, ref: ge, props: O, _owner: z.current };
  }
  return oi.Fragment = o, oi.jsx = W, oi.jsxs = W, oi;
}
var zd;
function wp() {
  return zd || (zd = 1, ks.exports = yp()), ks.exports;
}
var S = wp();
const Sp = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', xp = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}";
class Ed extends de.Component {
  state = {
    hasError: !1,
    error: null
  };
  static getDerivedStateFromError(c) {
    return { hasError: !0, error: c };
  }
  componentDidCatch(c, o) {
    console.error("ArgusDashboard ErrorBoundary caught an error:", c, o);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ S.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ S.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ S.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ S.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var zs = { exports: {} }, si = {}, mi = { exports: {} }, bp = mi.exports, Pd;
function Ts() {
  return Pd || (Pd = 1, function(s, c) {
    (function(o, u) {
      u(c);
    })(bp, function(o) {
      function u(X) {
        return function(Re, Ae, De, Be, Ve, et, x) {
          return X(Re, Ae, x);
        };
      }
      function z(X) {
        return function(Re, Ae, De, Be) {
          if (!Re || !Ae || typeof Re != "object" || typeof Ae != "object")
            return X(Re, Ae, De, Be);
          var Ve = Be.get(Re), et = Be.get(Ae);
          if (Ve && et)
            return Ve === Ae && et === Re;
          Be.set(Re, Ae), Be.set(Ae, Re);
          var x = X(Re, Ae, De, Be);
          return Be.delete(Re), Be.delete(Ae), x;
        };
      }
      function C(X, he) {
        var Re = {};
        for (var Ae in X)
          Re[Ae] = X[Ae];
        for (var Ae in he)
          Re[Ae] = he[Ae];
        return Re;
      }
      function W(X) {
        return X.constructor === Object || X.constructor == null;
      }
      function R(X) {
        return typeof X.then == "function";
      }
      function j(X, he) {
        return X === he || X !== X && he !== he;
      }
      var I = "[object Arguments]", $ = "[object Boolean]", O = "[object Date]", G = "[object RegExp]", ge = "[object Map]", we = "[object Number]", Y = "[object Object]", L = "[object Set]", v = "[object String]", d = Object.prototype.toString;
      function m(X) {
        var he = X.areArraysEqual, Re = X.areDatesEqual, Ae = X.areMapsEqual, De = X.areObjectsEqual, Be = X.areRegExpsEqual, Ve = X.areSetsEqual, et = X.createIsNestedEqual, x = et(E);
        function E(T, Q, ue) {
          if (T === Q)
            return !0;
          if (!T || !Q || typeof T != "object" || typeof Q != "object")
            return T !== T && Q !== Q;
          if (W(T) && W(Q))
            return De(T, Q, x, ue);
          var xe = Array.isArray(T), ze = Array.isArray(Q);
          if (xe || ze)
            return xe === ze && he(T, Q, x, ue);
          var Ne = d.call(T);
          return Ne !== d.call(Q) ? !1 : Ne === O ? Re(T, Q, x, ue) : Ne === G ? Be(T, Q, x, ue) : Ne === ge ? Ae(T, Q, x, ue) : Ne === L ? Ve(T, Q, x, ue) : Ne === Y || Ne === I ? R(T) || R(Q) ? !1 : De(T, Q, x, ue) : Ne === $ || Ne === we || Ne === v ? j(T.valueOf(), Q.valueOf()) : !1;
        }
        return E;
      }
      function f(X, he, Re, Ae) {
        var De = X.length;
        if (he.length !== De)
          return !1;
        for (; De-- > 0; )
          if (!Re(X[De], he[De], De, De, X, he, Ae))
            return !1;
        return !0;
      }
      var h = z(f);
      function w(X, he) {
        return j(X.valueOf(), he.valueOf());
      }
      function _(X, he, Re, Ae) {
        var De = X.size === he.size;
        if (!De)
          return !1;
        if (!X.size)
          return !0;
        var Be = {}, Ve = 0;
        return X.forEach(function(et, x) {
          if (De) {
            var E = !1, T = 0;
            he.forEach(function(Q, ue) {
              !E && !Be[T] && (E = Re(x, ue, Ve, T, X, he, Ae) && Re(et, Q, x, ue, X, he, Ae)) && (Be[T] = !0), T++;
            }), Ve++, De = E;
          }
        }), De;
      }
      var B = z(_), V = "_owner", J = Object.prototype.hasOwnProperty;
      function le(X, he, Re, Ae) {
        var De = Object.keys(X), Be = De.length;
        if (Object.keys(he).length !== Be)
          return !1;
        for (var Ve; Be-- > 0; ) {
          if (Ve = De[Be], Ve === V) {
            var et = !!X.$$typeof, x = !!he.$$typeof;
            if ((et || x) && et !== x)
              return !1;
          }
          if (!J.call(he, Ve) || !Re(X[Ve], he[Ve], Ve, Ve, X, he, Ae))
            return !1;
        }
        return !0;
      }
      var se = z(le);
      function ie(X, he) {
        return X.source === he.source && X.flags === he.flags;
      }
      function ve(X, he, Re, Ae) {
        var De = X.size === he.size;
        if (!De)
          return !1;
        if (!X.size)
          return !0;
        var Be = {};
        return X.forEach(function(Ve, et) {
          if (De) {
            var x = !1, E = 0;
            he.forEach(function(T, Q) {
              !x && !Be[E] && (x = Re(Ve, T, et, Q, X, he, Ae)) && (Be[E] = !0), E++;
            }), De = x;
          }
        }), De;
      }
      var _e = z(ve), oe = Object.freeze({
        areArraysEqual: f,
        areDatesEqual: w,
        areMapsEqual: _,
        areObjectsEqual: le,
        areRegExpsEqual: ie,
        areSetsEqual: ve,
        createIsNestedEqual: u
      }), pe = Object.freeze({
        areArraysEqual: h,
        areDatesEqual: w,
        areMapsEqual: B,
        areObjectsEqual: se,
        areRegExpsEqual: ie,
        areSetsEqual: _e,
        createIsNestedEqual: u
      }), N = m(oe);
      function ee(X, he) {
        return N(X, he, void 0);
      }
      var D = m(C(oe, { createIsNestedEqual: function() {
        return j;
      } }));
      function y(X, he) {
        return D(X, he, void 0);
      }
      var A = m(pe);
      function fe(X, he) {
        return A(X, he, /* @__PURE__ */ new WeakMap());
      }
      var re = m(C(pe, {
        createIsNestedEqual: function() {
          return j;
        }
      }));
      function Oe(X, he) {
        return re(X, he, /* @__PURE__ */ new WeakMap());
      }
      function Ce(X) {
        return m(C(oe, X(oe)));
      }
      function Te(X) {
        var he = m(C(pe, X(pe)));
        return function(Re, Ae, De) {
          return De === void 0 && (De = /* @__PURE__ */ new WeakMap()), he(Re, Ae, De);
        };
      }
      o.circularDeepEqual = fe, o.circularShallowEqual = Oe, o.createCustomCircularEqual = Te, o.createCustomEqual = Ce, o.deepEqual = ee, o.sameValueZeroEqual = j, o.shallowEqual = y, Object.defineProperty(o, "__esModule", { value: !0 });
    });
  }(mi, mi.exports)), mi.exports;
}
var za = { exports: {} }, Od;
function Da() {
  if (Od) return za.exports;
  Od = 1;
  function s(o) {
    var u, z, C = "";
    if (typeof o == "string" || typeof o == "number") C += o;
    else if (typeof o == "object") if (Array.isArray(o)) {
      var W = o.length;
      for (u = 0; u < W; u++) o[u] && (z = s(o[u])) && (C && (C += " "), C += z);
    } else for (z in o) o[z] && (C && (C += " "), C += z);
    return C;
  }
  function c() {
    for (var o, u, z = 0, C = "", W = arguments.length; z < W; z++) (o = arguments[z]) && (u = s(o)) && (C && (C += " "), C += u);
    return C;
  }
  return za.exports = c, za.exports.clsx = c, za.exports;
}
var Fe = {}, Es, Cd;
function _p() {
  return Cd || (Cd = 1, Es = function(c, o, u) {
    return c === o ? !0 : c.className === o.className && u(c.style, o.style) && c.width === o.width && c.autoSize === o.autoSize && c.cols === o.cols && c.draggableCancel === o.draggableCancel && c.draggableHandle === o.draggableHandle && u(c.verticalCompact, o.verticalCompact) && u(c.compactType, o.compactType) && u(c.layout, o.layout) && u(c.margin, o.margin) && u(c.containerPadding, o.containerPadding) && c.rowHeight === o.rowHeight && c.maxRows === o.maxRows && c.isBounded === o.isBounded && c.isDraggable === o.isDraggable && c.isResizable === o.isResizable && c.allowOverlap === o.allowOverlap && c.preventCollision === o.preventCollision && c.useCSSTransforms === o.useCSSTransforms && c.transformScale === o.transformScale && c.isDroppable === o.isDroppable && u(c.resizeHandles, o.resizeHandles) && u(c.resizeHandle, o.resizeHandle) && c.onLayoutChange === o.onLayoutChange && c.onDragStart === o.onDragStart && c.onDrag === o.onDrag && c.onDragStop === o.onDragStop && c.onResizeStart === o.onResizeStart && c.onResize === o.onResize && c.onResizeStop === o.onResizeStop && c.onDrop === o.onDrop && u(c.droppingItem, o.droppingItem) && u(c.innerRef, o.innerRef);
  }), Es;
}
var Rd;
function xr() {
  if (Rd) return Fe;
  Rd = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  }), Fe.bottom = j, Fe.childrenEqual = ge, Fe.cloneLayout = I, Fe.cloneLayoutItem = G, Fe.collides = Y, Fe.compact = L, Fe.compactItem = m, Fe.compactType = Be, Fe.correctBounds = f, Fe.fastPositionEqual = we, Fe.fastRGLPropsEqual = void 0, Fe.getAllCollisions = _, Fe.getFirstCollision = w, Fe.getLayoutItem = h, Fe.getStatics = B, Fe.modifyLayout = $, Fe.moveElement = V, Fe.moveElementAwayFromCollision = J, Fe.noop = void 0, Fe.perc = le, Fe.resizeItemInDirection = Oe, Fe.setTopLeft = Te, Fe.setTransform = Ce, Fe.sortLayoutItems = X, Fe.sortLayoutItemsByColRow = Re, Fe.sortLayoutItemsByRowCol = he, Fe.synchronizeLayoutWithChildren = Ae, Fe.validateLayout = De, Fe.withLayoutItem = O;
  var s = /* @__PURE__ */ Ts(), c = o(Pt());
  function o(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function u(x, E) {
    var T = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var Q = Object.getOwnPropertySymbols(x);
      E && (Q = Q.filter(function(ue) {
        return Object.getOwnPropertyDescriptor(x, ue).enumerable;
      })), T.push.apply(T, Q);
    }
    return T;
  }
  function z(x) {
    for (var E = 1; E < arguments.length; E++) {
      var T = arguments[E] != null ? arguments[E] : {};
      E % 2 ? u(Object(T), !0).forEach(function(Q) {
        C(x, Q, T[Q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(T)) : u(Object(T)).forEach(function(Q) {
        Object.defineProperty(x, Q, Object.getOwnPropertyDescriptor(T, Q));
      });
    }
    return x;
  }
  function C(x, E, T) {
    return (E = W(E)) in x ? Object.defineProperty(x, E, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : x[E] = T, x;
  }
  function W(x) {
    var E = R(x, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function R(x, E) {
    if (typeof x != "object" || !x) return x;
    var T = x[Symbol.toPrimitive];
    if (T !== void 0) {
      var Q = T.call(x, E);
      if (typeof Q != "object") return Q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(x);
  }
  function j(x) {
    let E = 0, T;
    for (let Q = 0, ue = x.length; Q < ue; Q++)
      T = x[Q].y + x[Q].h, T > E && (E = T);
    return E;
  }
  function I(x) {
    const E = Array(x.length);
    for (let T = 0, Q = x.length; T < Q; T++)
      E[T] = G(x[T]);
    return E;
  }
  function $(x, E) {
    const T = Array(x.length);
    for (let Q = 0, ue = x.length; Q < ue; Q++)
      E.i === x[Q].i ? T[Q] = E : T[Q] = x[Q];
    return T;
  }
  function O(x, E, T) {
    let Q = h(x, E);
    return Q ? (Q = T(G(Q)), x = $(x, Q), [x, Q]) : [x, null];
  }
  function G(x) {
    return {
      w: x.w,
      h: x.h,
      x: x.x,
      y: x.y,
      i: x.i,
      minW: x.minW,
      maxW: x.maxW,
      minH: x.minH,
      maxH: x.maxH,
      moved: !!x.moved,
      static: !!x.static,
      // These can be null/undefined
      isDraggable: x.isDraggable,
      isResizable: x.isResizable,
      resizeHandles: x.resizeHandles,
      isBounded: x.isBounded
    };
  }
  function ge(x, E) {
    return (0, s.deepEqual)(c.default.Children.map(x, (T) => T?.key), c.default.Children.map(E, (T) => T?.key)) && (0, s.deepEqual)(c.default.Children.map(x, (T) => T?.props["data-grid"]), c.default.Children.map(E, (T) => T?.props["data-grid"]));
  }
  Fe.fastRGLPropsEqual = _p();
  function we(x, E) {
    return x.left === E.left && x.top === E.top && x.width === E.width && x.height === E.height;
  }
  function Y(x, E) {
    return !(x.i === E.i || x.x + x.w <= E.x || x.x >= E.x + E.w || x.y + x.h <= E.y || x.y >= E.y + E.h);
  }
  function L(x, E, T, Q) {
    const ue = B(x);
    let xe = j(ue);
    const ze = X(x, E), Ne = Array(x.length);
    for (let Me = 0, Ge = ze.length; Me < Ge; Me++) {
      let Qe = G(ze[Me]);
      Qe.static || (Qe = m(ue, Qe, E, T, ze, Q, xe), xe = Math.max(xe, Qe.y + Qe.h), ue.push(Qe)), Ne[x.indexOf(ze[Me])] = Qe, Qe.moved = !1;
    }
    return Ne;
  }
  const v = {
    x: "w",
    y: "h"
  };
  function d(x, E, T, Q) {
    const ue = v[Q];
    E[Q] += 1;
    const xe = x.map((ze) => ze.i).indexOf(E.i);
    for (let ze = xe + 1; ze < x.length; ze++) {
      const Ne = x[ze];
      if (!Ne.static) {
        if (Ne.y > E.y + E.h) break;
        Y(E, Ne) && d(x, Ne, T + E[ue], Q);
      }
    }
    E[Q] = T;
  }
  function m(x, E, T, Q, ue, xe, ze) {
    const Ne = T === "vertical", Me = T === "horizontal";
    if (Ne)
      for (typeof ze == "number" ? E.y = Math.min(ze, E.y) : E.y = Math.min(j(x), E.y); E.y > 0 && !w(x, E); )
        E.y--;
    else if (Me)
      for (; E.x > 0 && !w(x, E); )
        E.x--;
    let Ge;
    for (; (Ge = w(x, E)) && !(T === null && xe); )
      if (Me ? d(ue, E, Ge.x + Ge.w, "x") : d(ue, E, Ge.y + Ge.h, "y"), Me && E.x + E.w > Q)
        for (E.x = Q - E.w, E.y++; E.x > 0 && !w(x, E); )
          E.x--;
    return E.y = Math.max(E.y, 0), E.x = Math.max(E.x, 0), E;
  }
  function f(x, E) {
    const T = B(x);
    for (let Q = 0, ue = x.length; Q < ue; Q++) {
      const xe = x[Q];
      if (xe.x + xe.w > E.cols && (xe.x = E.cols - xe.w), xe.x < 0 && (xe.x = 0, xe.w = E.cols), !xe.static) T.push(xe);
      else
        for (; w(T, xe); )
          xe.y++;
    }
    return x;
  }
  function h(x, E) {
    for (let T = 0, Q = x.length; T < Q; T++)
      if (x[T].i === E) return x[T];
  }
  function w(x, E) {
    for (let T = 0, Q = x.length; T < Q; T++)
      if (Y(x[T], E)) return x[T];
  }
  function _(x, E) {
    return x.filter((T) => Y(T, E));
  }
  function B(x) {
    return x.filter((E) => E.static);
  }
  function V(x, E, T, Q, ue, xe, ze, Ne, Me) {
    if (E.static && E.isDraggable !== !0 || E.y === Q && E.x === T) return x;
    "Moving element ".concat(E.i, " to [").concat(String(T), ",").concat(String(Q), "] from [").concat(E.x, ",").concat(E.y, "]");
    const Ge = E.x, Qe = E.y;
    typeof T == "number" && (E.x = T), typeof Q == "number" && (E.y = Q), E.moved = !0;
    let U = X(x, ze);
    (ze === "vertical" && typeof Q == "number" ? Qe >= Q : ze === "horizontal" && typeof T == "number" ? Ge >= T : !1) && (U = U.reverse());
    const P = _(U, E), q = P.length > 0;
    if (q && Me)
      return I(x);
    if (q && xe)
      return "Collision prevented on ".concat(E.i, ", reverting."), E.x = Ge, E.y = Qe, E.moved = !1, x;
    for (let te = 0, ce = P.length; te < ce; te++) {
      const Ie = P[te];
      "Resolving collision between ".concat(E.i, " at [").concat(E.x, ",").concat(E.y, "] and ").concat(Ie.i, " at [").concat(Ie.x, ",").concat(Ie.y, "]"), !Ie.moved && (Ie.static ? x = J(x, Ie, E, ue, ze) : x = J(x, E, Ie, ue, ze));
    }
    return x;
  }
  function J(x, E, T, Q, ue, xe) {
    const ze = ue === "horizontal", Ne = ue === "vertical", Me = E.static;
    if (Q) {
      Q = !1;
      const U = {
        x: ze ? Math.max(E.x - T.w, 0) : T.x,
        y: Ne ? Math.max(E.y - T.h, 0) : T.y,
        w: T.w,
        h: T.h,
        i: "-1"
      }, p = w(x, U), P = p && p.y + p.h > E.y, q = p && E.x + E.w > p.x;
      if (p) {
        if (P && Ne)
          return V(x, T, void 0, T.y + 1, Q, Me, ue);
        if (P && ue == null)
          return E.y = T.y, T.y = T.y + T.h, x;
        if (q && ze)
          return V(x, E, T.x, void 0, Q, Me, ue);
      } else return "Doing reverse collision on ".concat(T.i, " up to [").concat(U.x, ",").concat(U.y, "]."), V(x, T, ze ? U.x : void 0, Ne ? U.y : void 0, Q, Me, ue);
    }
    const Ge = ze ? T.x + 1 : void 0, Qe = Ne ? T.y + 1 : void 0;
    return Ge == null && Qe == null ? x : V(x, T, ze ? T.x + 1 : void 0, Ne ? T.y + 1 : void 0, Q, Me, ue);
  }
  function le(x) {
    return x * 100 + "%";
  }
  const se = (x, E, T, Q) => x + T > Q ? E : T, ie = (x, E, T) => x < 0 ? E : T, ve = (x) => Math.max(0, x), _e = (x) => Math.max(0, x), oe = (x, E, T) => {
    let {
      left: Q,
      height: ue,
      width: xe
    } = E;
    const ze = x.top - (ue - x.height);
    return {
      left: Q,
      width: xe,
      height: ie(ze, x.height, ue),
      top: _e(ze)
    };
  }, pe = (x, E, T) => {
    let {
      top: Q,
      left: ue,
      height: xe,
      width: ze
    } = E;
    return {
      top: Q,
      height: xe,
      width: se(x.left, x.width, ze, T),
      left: ve(ue)
    };
  }, N = (x, E, T) => {
    let {
      top: Q,
      height: ue,
      width: xe
    } = E;
    const ze = x.left - (xe - x.width);
    return {
      height: ue,
      width: ze < 0 ? x.width : se(x.left, x.width, xe, T),
      top: _e(Q),
      left: ve(ze)
    };
  }, ee = (x, E, T) => {
    let {
      top: Q,
      left: ue,
      height: xe,
      width: ze
    } = E;
    return {
      width: ze,
      left: ue,
      height: ie(Q, x.height, xe),
      top: _e(Q)
    };
  }, re = {
    n: oe,
    ne: function() {
      return oe(arguments.length <= 0 ? void 0 : arguments[0], pe(...arguments));
    },
    e: pe,
    se: function() {
      return ee(arguments.length <= 0 ? void 0 : arguments[0], pe(...arguments));
    },
    s: ee,
    sw: function() {
      return ee(arguments.length <= 0 ? void 0 : arguments[0], N(...arguments));
    },
    w: N,
    nw: function() {
      return oe(arguments.length <= 0 ? void 0 : arguments[0], N(...arguments));
    }
  };
  function Oe(x, E, T, Q) {
    const ue = re[x];
    return ue ? ue(E, z(z({}, E), T), Q) : T;
  }
  function Ce(x) {
    let {
      top: E,
      left: T,
      width: Q,
      height: ue
    } = x;
    const xe = "translate(".concat(T, "px,").concat(E, "px)");
    return {
      transform: xe,
      WebkitTransform: xe,
      MozTransform: xe,
      msTransform: xe,
      OTransform: xe,
      width: "".concat(Q, "px"),
      height: "".concat(ue, "px"),
      position: "absolute"
    };
  }
  function Te(x) {
    let {
      top: E,
      left: T,
      width: Q,
      height: ue
    } = x;
    return {
      top: "".concat(E, "px"),
      left: "".concat(T, "px"),
      width: "".concat(Q, "px"),
      height: "".concat(ue, "px"),
      position: "absolute"
    };
  }
  function X(x, E) {
    return E === "horizontal" ? Re(x) : E === "vertical" ? he(x) : x;
  }
  function he(x) {
    return x.slice(0).sort(function(E, T) {
      return E.y > T.y || E.y === T.y && E.x > T.x ? 1 : E.y === T.y && E.x === T.x ? 0 : -1;
    });
  }
  function Re(x) {
    return x.slice(0).sort(function(E, T) {
      return E.x > T.x || E.x === T.x && E.y > T.y ? 1 : -1;
    });
  }
  function Ae(x, E, T, Q, ue) {
    x = x || [];
    const xe = [];
    c.default.Children.forEach(E, (Ne) => {
      if (Ne?.key == null) return;
      const Me = h(x, String(Ne.key)), Ge = Ne.props["data-grid"];
      Me && Ge == null ? xe.push(G(Me)) : Ge ? xe.push(G(z(z({}, Ge), {}, {
        i: Ne.key
      }))) : xe.push(G({
        w: 1,
        h: 1,
        x: 0,
        y: j(xe),
        i: String(Ne.key)
      }));
    });
    const ze = f(xe, {
      cols: T
    });
    return ue ? ze : L(ze, Q, T);
  }
  function De(x) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const T = ["x", "y", "w", "h"];
    if (!Array.isArray(x)) throw new Error(E + " must be an array!");
    for (let Q = 0, ue = x.length; Q < ue; Q++) {
      const xe = x[Q];
      for (let ze = 0; ze < T.length; ze++) {
        const Ne = T[ze], Me = xe[Ne];
        if (typeof Me != "number" || Number.isNaN(Me))
          throw new Error("ReactGridLayout: ".concat(E, "[").concat(Q, "].").concat(Ne, " must be a number! Received: ").concat(Me, " (").concat(typeof Me, ")"));
      }
      if (typeof xe.i < "u" && typeof xe.i != "string")
        throw new Error("ReactGridLayout: ".concat(E, "[").concat(Q, "].i must be a string! Received: ").concat(xe.i, " (").concat(typeof xe.i, ")"));
    }
  }
  function Be(x) {
    const {
      verticalCompact: E,
      compactType: T
    } = x || {};
    return E === !1 ? null : T;
  }
  function Ve() {
  }
  const et = () => {
  };
  return Fe.noop = et, Fe;
}
var un = {}, jd;
function Ms() {
  if (jd) return un;
  jd = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.calcGridColWidth = s, un.calcGridItemPosition = o, un.calcGridItemWHPx = c, un.calcWH = z, un.calcXY = u, un.clamp = C;
  function s(W) {
    const {
      margin: R,
      containerPadding: j,
      containerWidth: I,
      cols: $
    } = W;
    return (I - R[0] * ($ - 1) - j[0] * 2) / $;
  }
  function c(W, R, j) {
    return Number.isFinite(W) ? Math.round(R * W + Math.max(0, W - 1) * j) : W;
  }
  function o(W, R, j, I, $, O) {
    const {
      margin: G,
      containerPadding: ge,
      rowHeight: we
    } = W, Y = s(W), L = {};
    return O && O.resizing ? (L.width = Math.round(O.resizing.width), L.height = Math.round(O.resizing.height)) : (L.width = c(I, Y, G[0]), L.height = c($, we, G[1])), O && O.dragging ? (L.top = Math.round(O.dragging.top), L.left = Math.round(O.dragging.left)) : O && O.resizing && typeof O.resizing.top == "number" && typeof O.resizing.left == "number" ? (L.top = Math.round(O.resizing.top), L.left = Math.round(O.resizing.left)) : (L.top = Math.round((we + G[1]) * j + ge[1]), L.left = Math.round((Y + G[0]) * R + ge[0])), L;
  }
  function u(W, R, j, I, $) {
    const {
      margin: O,
      containerPadding: G,
      cols: ge,
      rowHeight: we,
      maxRows: Y
    } = W, L = s(W);
    let v = Math.round((j - G[0]) / (L + O[0])), d = Math.round((R - G[1]) / (we + O[1]));
    return v = C(v, 0, ge - I), d = C(d, 0, Y - $), {
      x: v,
      y: d
    };
  }
  function z(W, R, j, I, $, O) {
    const {
      margin: G,
      maxRows: ge,
      cols: we,
      rowHeight: Y
    } = W, L = s(W);
    let v = Math.round((R + G[0]) / (L + G[0])), d = Math.round((j + G[1]) / (Y + G[1])), m = C(v, 0, we - I), f = C(d, 0, ge - $);
    return ["sw", "w", "nw"].indexOf(O) !== -1 && (m = C(v, 0, we)), ["nw", "n", "ne"].indexOf(O) !== -1 && (f = C(d, 0, ge)), {
      w: m,
      h: f
    };
  }
  function C(W, R, j) {
    return Math.max(Math.min(W, j), R);
  }
  return un;
}
var li = {}, Ps = { exports: {} }, Os, Nd;
function kp() {
  if (Nd) return Os;
  Nd = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Os = s, Os;
}
var Cs, Ad;
function zp() {
  if (Ad) return Cs;
  Ad = 1;
  var s = /* @__PURE__ */ kp();
  function c() {
  }
  function o() {
  }
  return o.resetWarningCache = c, Cs = function() {
    function u(W, R, j, I, $, O) {
      if (O !== s) {
        var G = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw G.name = "Invariant Violation", G;
      }
    }
    u.isRequired = u;
    function z() {
      return u;
    }
    var C = {
      array: u,
      bigint: u,
      bool: u,
      func: u,
      number: u,
      object: u,
      string: u,
      symbol: u,
      any: u,
      arrayOf: z,
      element: u,
      elementType: u,
      instanceOf: z,
      node: u,
      objectOf: z,
      oneOf: z,
      oneOfType: z,
      shape: z,
      exact: z,
      checkPropTypes: o,
      resetWarningCache: c
    };
    return C.PropTypes = C, C;
  }, Cs;
}
var Dd;
function Nn() {
  return Dd || (Dd = 1, Ps.exports = /* @__PURE__ */ zp()()), Ps.exports;
}
var ui = { exports: {} }, Rs, Td;
function Ep() {
  if (Td) return Rs;
  Td = 1;
  var s = Object.create, c = Object.defineProperty, o = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyNames, z = Object.getPrototypeOf, C = Object.prototype.hasOwnProperty, W = (p, P) => {
    for (var q in P)
      c(p, q, { get: P[q], enumerable: !0 });
  }, R = (p, P, q, te) => {
    if (P && typeof P == "object" || typeof P == "function")
      for (let ce of u(P))
        !C.call(p, ce) && ce !== q && c(p, ce, { get: () => P[ce], enumerable: !(te = o(P, ce)) || te.enumerable });
    return p;
  }, j = (p, P, q) => (q = p != null ? s(z(p)) : {}, R(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !p || !p.__esModule ? c(q, "default", { value: p, enumerable: !0 }) : q,
    p
  )), I = (p) => R(c({}, "__esModule", { value: !0 }), p), $ = {};
  W($, {
    DraggableCore: () => Qe,
    default: () => U
  }), Rs = I($);
  var O = j(Pt()), G = j(/* @__PURE__ */ Nn()), ge = j(Ca()), we = Da();
  function Y(p, P) {
    for (let q = 0, te = p.length; q < te; q++)
      if (P.apply(P, [p[q], q, p])) return p[q];
  }
  function L(p) {
    return typeof p == "function" || Object.prototype.toString.call(p) === "[object Function]";
  }
  function v(p) {
    return typeof p == "number" && !isNaN(p);
  }
  function d(p) {
    return parseInt(p, 10);
  }
  function m(p, P, q) {
    if (p[P])
      return new Error(`Invalid prop ${P} passed to ${q} - do not set this, set it on the child.`);
  }
  var f = ["Moz", "Webkit", "O", "ms"];
  function h(p = "transform") {
    var P, q;
    if (typeof window > "u") return "";
    const te = (q = (P = window.document) == null ? void 0 : P.documentElement) == null ? void 0 : q.style;
    if (!te || p in te) return "";
    for (let ce = 0; ce < f.length; ce++)
      if (w(p, f[ce]) in te) return f[ce];
    return "";
  }
  function w(p, P) {
    return P ? `${P}${_(p)}` : p;
  }
  function _(p) {
    let P = "", q = !0;
    for (let te = 0; te < p.length; te++)
      q ? (P += p[te].toUpperCase(), q = !1) : p[te] === "-" ? q = !0 : P += p[te];
    return P;
  }
  var B = h(), V = "";
  function J(p, P) {
    var q;
    V || (V = (q = Y([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(ce) {
      return L(p[ce]);
    })) != null ? q : "");
    const te = p[V];
    return L(te) ? !!te.call(p, P) : !1;
  }
  function le(p, P, q) {
    let te = p;
    do {
      if (J(te, P)) return !0;
      if (te === q) return !1;
      te = te.parentNode;
    } while (te);
    return !1;
  }
  function se(p, P, q, te) {
    if (!p) return;
    const ce = { capture: !0, ...te }, Ie = q;
    p.addEventListener ? p.addEventListener(P, Ie, ce) : p.attachEvent ? p.attachEvent("on" + P, Ie) : p["on" + P] = Ie;
  }
  function ie(p, P, q, te) {
    if (!p) return;
    const ce = { capture: !0, ...te }, Ie = q;
    p.removeEventListener ? p.removeEventListener(P, Ie, ce) : p.detachEvent ? p.detachEvent("on" + P, Ie) : p["on" + P] = null;
  }
  function ve(p) {
    let P = p.clientHeight;
    const q = p.ownerDocument.defaultView.getComputedStyle(p);
    return P += d(q.borderTopWidth), P += d(q.borderBottomWidth), P;
  }
  function _e(p) {
    let P = p.clientWidth;
    const q = p.ownerDocument.defaultView.getComputedStyle(p);
    return P += d(q.borderLeftWidth), P += d(q.borderRightWidth), P;
  }
  function oe(p) {
    let P = p.clientHeight;
    const q = p.ownerDocument.defaultView.getComputedStyle(p);
    return P -= d(q.paddingTop), P -= d(q.paddingBottom), P;
  }
  function pe(p) {
    let P = p.clientWidth;
    const q = p.ownerDocument.defaultView.getComputedStyle(p);
    return P -= d(q.paddingLeft), P -= d(q.paddingRight), P;
  }
  function N(p, P, q) {
    const ce = P === P.ownerDocument.body ? { left: 0, top: 0 } : P.getBoundingClientRect(), Ie = (p.clientX + P.scrollLeft - ce.left) / q, He = (p.clientY + P.scrollTop - ce.top) / q;
    return { x: Ie, y: He };
  }
  function ee(p, P) {
    const q = y(p, P, "px");
    return { [w("transform", B)]: q };
  }
  function D(p, P) {
    return y(p, P, "");
  }
  function y({ x: p, y: P }, q, te) {
    let ce = `translate(${p}${te},${P}${te})`;
    if (q) {
      const Ie = `${typeof q.x == "string" ? q.x : q.x + te}`, He = `${typeof q.y == "string" ? q.y : q.y + te}`;
      ce = `translate(${Ie}, ${He})` + ce;
    }
    return ce;
  }
  function A(p, P) {
    return p.targetTouches && Y(p.targetTouches, (q) => P === q.identifier) || p.changedTouches && Y(p.changedTouches, (q) => P === q.identifier);
  }
  function fe(p) {
    if (p.targetTouches && p.targetTouches[0]) return p.targetTouches[0].identifier;
    if (p.changedTouches && p.changedTouches[0]) return p.changedTouches[0].identifier;
  }
  function re() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Oe(p, P) {
    if (!p) return;
    let q = p.getElementById("react-draggable-style-el");
    if (!q) {
      q = p.createElement("style"), q.type = "text/css", q.id = "react-draggable-style-el";
      const te = P ?? re();
      te && q.setAttribute("nonce", te), q.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, q.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, p.getElementsByTagName("head")[0].appendChild(q);
    }
    p.body && X(p.body, "react-draggable-transparent-selection");
  }
  function Ce(p) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Te(p);
    }) : Te(p);
  }
  function Te(p) {
    if (p)
      try {
        p.body && he(p.body, "react-draggable-transparent-selection");
        const P = p.selection;
        if (P)
          P.empty();
        else {
          const q = (p.defaultView || window).getSelection();
          q && q.type !== "Caret" && q.removeAllRanges();
        }
      } catch {
      }
  }
  function X(p, P) {
    p.classList ? p.classList.add(P) : p.className.match(new RegExp(`(?:^|\\s)${P}(?!\\S)`)) || (p.className += ` ${P}`);
  }
  function he(p, P) {
    p.classList ? p.classList.remove(P) : p.className = p.className.replace(new RegExp(`(?:^|\\s)${P}(?!\\S)`, "g"), "");
  }
  function Re(p, P, q) {
    if (!p.props.bounds) return [P, q];
    let { bounds: te } = p.props;
    te = typeof te == "string" ? te : E(te);
    const ce = T(p);
    if (typeof te == "string") {
      const { ownerDocument: Ie } = ce, He = Ie.defaultView;
      if (!He)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Ze;
      if (te === "parent" ? Ze = ce.parentNode : Ze = ce.getRootNode().querySelector(te), !(Ze instanceof He.HTMLElement))
        throw new Error('Bounds selector "' + te + '" could not find an element.');
      const ft = Ze, Ht = He.getComputedStyle(ce), $t = He.getComputedStyle(ft);
      te = {
        left: -ce.offsetLeft + d($t.paddingLeft) + d(Ht.marginLeft),
        top: -ce.offsetTop + d($t.paddingTop) + d(Ht.marginTop),
        right: pe(ft) - _e(ce) - ce.offsetLeft + d($t.paddingRight) - d(Ht.marginRight),
        bottom: oe(ft) - ve(ce) - ce.offsetTop + d($t.paddingBottom) - d(Ht.marginBottom)
      };
    }
    return v(te.right) && (P = Math.min(P, te.right)), v(te.bottom) && (q = Math.min(q, te.bottom)), v(te.left) && (P = Math.max(P, te.left)), v(te.top) && (q = Math.max(q, te.top)), [P, q];
  }
  function Ae(p, P, q) {
    const te = Math.round(P / p[0]) * p[0], ce = Math.round(q / p[1]) * p[1];
    return [te, ce];
  }
  function De(p) {
    return p.props.axis === "both" || p.props.axis === "x";
  }
  function Be(p) {
    return p.props.axis === "both" || p.props.axis === "y";
  }
  function Ve(p, P, q) {
    const te = typeof P == "number" ? A(p, P) : null;
    if (typeof P == "number" && !te) return null;
    const ce = T(q), Ie = q.props.offsetParent || ce.offsetParent || ce.ownerDocument.body;
    return N(te || p, Ie, q.props.scale);
  }
  function et(p, P, q) {
    const te = !v(p.lastX), ce = T(p);
    return te ? {
      node: ce,
      deltaX: 0,
      deltaY: 0,
      lastX: P,
      lastY: q,
      x: P,
      y: q
    } : {
      node: ce,
      deltaX: P - p.lastX,
      deltaY: q - p.lastY,
      lastX: p.lastX,
      lastY: p.lastY,
      x: P,
      y: q
    };
  }
  function x(p, P) {
    const q = p.props.scale;
    return {
      node: P.node,
      x: p.state.x + P.deltaX / q,
      y: p.state.y + P.deltaY / q,
      deltaX: P.deltaX / q,
      deltaY: P.deltaY / q,
      lastX: p.state.x,
      lastY: p.state.y
    };
  }
  function E(p) {
    return {
      left: p.left,
      top: p.top,
      right: p.right,
      bottom: p.bottom
    };
  }
  function T(p) {
    const P = p.findDOMNode();
    if (!P)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return P;
  }
  var Q = j(Pt()), ue = j(/* @__PURE__ */ Nn()), xe = j(Ca()), ze = function() {
  }, Ne = ze, Me = {
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
  }, Ge = Me.mouse, Qe = class extends Q.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (p) => {
        if (this.props.onMouseDown(p), !this.props.allowAnyClick && (typeof p.button == "number" && p.button !== 0 || p.ctrlKey)) return !1;
        const P = this.findDOMNode();
        if (!P || !P.ownerDocument || !P.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: q } = P;
        if (this.props.disabled || !(p.target instanceof q.defaultView.Node) || this.props.handle && !le(p.target, this.props.handle, P) || this.props.cancel && le(p.target, this.props.cancel, P))
          return;
        p.type === "touchstart" && !this.props.allowMobileScroll && p.preventDefault();
        const te = fe(p);
        this.touchIdentifier = te;
        const ce = Ve(p, te, this);
        if (ce == null) return;
        const { x: Ie, y: He } = ce, Ze = et(this, Ie, He);
        Ne("calling", this.props.onStart), !(this.props.onStart(p, Ze) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Oe(q, this.props.nonce), this.dragging = !0, this.lastX = Ie, this.lastY = He, se(q, Ge.move, this.handleDrag), se(q, Ge.stop, this.handleDragStop));
      }, this.handleDrag = (p) => {
        const P = Ve(p, this.touchIdentifier, this);
        if (P == null) return;
        let { x: q, y: te } = P;
        if (Array.isArray(this.props.grid)) {
          let He = q - this.lastX, Ze = te - this.lastY;
          if ([He, Ze] = Ae(this.props.grid, He, Ze), !He && !Ze) return;
          q = this.lastX + He, te = this.lastY + Ze;
        }
        const ce = et(this, q, te);
        if (this.props.onDrag(p, ce) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const He = document.createEvent("MouseEvents");
            He.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(He);
          }
          return;
        }
        this.lastX = q, this.lastY = te;
      }, this.handleDragStop = (p) => {
        if (!this.dragging) return;
        const P = Ve(p, this.touchIdentifier, this);
        if (P == null) return;
        let { x: q, y: te } = P;
        if (Array.isArray(this.props.grid)) {
          let Ze = q - this.lastX || 0, ft = te - this.lastY || 0;
          [Ze, ft] = Ae(this.props.grid, Ze, ft), q = this.lastX + Ze, te = this.lastY + ft;
        }
        const ce = et(this, q, te);
        if (this.props.onStop(p, ce) === !1 || this.mounted === !1) return !1;
        const He = this.findDOMNode();
        He && this.props.enableUserSelectHack && Ce(He.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, He && (ie(He.ownerDocument, Ge.move, this.handleDrag), ie(He.ownerDocument, Ge.stop, this.handleDragStop));
      }, this.onMouseDown = (p) => (Ge = Me.mouse, this.handleDragStart(p)), this.onMouseUp = (p) => (Ge = Me.mouse, this.handleDragStop(p)), this.onTouchStart = (p) => (Ge = Me.touch, this.handleDragStart(p)), this.onTouchEnd = (p) => (Ge = Me.touch, this.handleDragStop(p));
    }
    componentDidMount() {
      this.mounted = !0;
      const p = this.findDOMNode();
      p && se(p, Me.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const p = this.findDOMNode();
      if (p) {
        const { ownerDocument: P } = p;
        ie(P, Me.mouse.move, this.handleDrag), ie(P, Me.touch.move, this.handleDrag), ie(P, Me.mouse.stop, this.handleDragStop), ie(P, Me.touch.stop, this.handleDragStop), ie(p, Me.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Ce(P);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var p;
      if ((p = this.props) != null && p.nodeRef)
        return this.props.nodeRef.current;
      const P = xe.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      return Q.cloneElement(Q.Children.only(this.props.children), {
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
    allowAnyClick: ue.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: ue.default.bool,
    children: ue.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: ue.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: ue.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(p, P) {
      if (p[P] && p[P].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: ue.default.arrayOf(ue.default.number),
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
    handle: ue.default.string,
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
    cancel: ue.default.string,
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
    nodeRef: ue.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: ue.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: ue.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: ue.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: ue.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: ue.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: ue.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: m,
    style: m,
    transform: m
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
  var U = class extends O.Component {
    constructor(p) {
      super(p), this.onDragStart = (P, q) => {
        if (this.props.onStart(P, x(this, q)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (P, q) => {
        if (!this.state.dragging) return !1;
        const te = x(this, q), ce = {
          x: te.x,
          y: te.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: He, y: Ze } = ce;
          ce.x += this.state.slackX, ce.y += this.state.slackY;
          const [ft, Ht] = Re(this, ce.x, ce.y);
          ce.x = ft, ce.y = Ht, ce.slackX = this.state.slackX + (He - ce.x), ce.slackY = this.state.slackY + (Ze - ce.y), te.x = ce.x, te.y = ce.y, te.deltaX = ce.x - this.state.x, te.deltaY = ce.y - this.state.y;
        }
        if (this.props.onDrag(P, te) === !1) return !1;
        this.setState(ce);
      }, this.onDragStop = (P, q) => {
        if (!this.state.dragging || this.props.onStop(P, x(this, q)) === !1) return !1;
        const ce = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: He, y: Ze } = this.props.position;
          ce.x = He, ce.y = Ze;
        }
        this.setState(ce);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: p.position ? p.position.x : p.defaultPosition.x,
        y: p.position ? p.position.y : p.defaultPosition.y,
        prevPropsPosition: { ...p.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, p.position && !(p.onDrag || p.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: p }, { prevPropsPosition: P }) {
      return p && (!P || p.x !== P.x || p.y !== P.y) ? {
        x: p.x,
        y: p.y,
        prevPropsPosition: { ...p }
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
      var p;
      if ((p = this.props) != null && p.nodeRef)
        return this.props.nodeRef.current;
      const P = ge.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: p,
        bounds: P,
        children: q,
        defaultPosition: te,
        defaultClassName: ce,
        defaultClassNameDragging: Ie,
        defaultClassNameDragged: He,
        position: Ze,
        positionOffset: ft,
        scale: Ht,
        ...$t
      } = this.props;
      let An = {}, Yn = null;
      const Jt = !!!Ze || this.state.dragging, br = Ze || te, _r = {
        // Set left if horizontal drag is enabled
        x: De(this) && Jt ? this.state.x : br.x,
        // Set top if vertical drag is enabled
        y: Be(this) && Jt ? this.state.y : br.y
      };
      this.state.isElementSVG ? Yn = D(_r, ft) : An = ee(_r, ft);
      const Xn = O.Children.only(q), gi = (0, we.clsx)(Xn.props.className || "", ce, {
        [Ie]: this.state.dragging,
        [He]: this.state.dragged
      });
      return /* @__PURE__ */ O.createElement(Qe, { ...$t, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, O.cloneElement(Xn, {
        className: gi,
        style: { ...Xn.props.style, ...An },
        transform: Yn
      }));
    }
  };
  return U.displayName = "Draggable", U.propTypes = {
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
    axis: G.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: G.default.oneOfType([
      G.default.shape({
        left: G.default.number,
        right: G.default.number,
        top: G.default.number,
        bottom: G.default.number
      }),
      G.default.string,
      G.default.oneOf([!1])
    ]),
    defaultClassName: G.default.string,
    defaultClassNameDragging: G.default.string,
    defaultClassNameDragged: G.default.string,
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
    defaultPosition: G.default.shape({
      x: G.default.number,
      y: G.default.number
    }),
    positionOffset: G.default.shape({
      x: G.default.oneOfType([G.default.number, G.default.string]),
      y: G.default.oneOfType([G.default.number, G.default.string])
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
    position: G.default.shape({
      x: G.default.number,
      y: G.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: m,
    style: m,
    transform: m
  }, U.defaultProps = {
    ...Qe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, Rs;
}
var Md;
function Ls() {
  if (Md) return ui.exports;
  Md = 1;
  const s = Ep(), c = s.DraggableCore, o = s.default || s;
  return ui.exports = o, ui.exports.default = o, ui.exports.DraggableCore = c, ui.exports;
}
var di = { exports: {} }, ci = {}, Ea = {}, Ld;
function Pp() {
  if (Ld) return Ea;
  Ld = 1, Ea.__esModule = !0, Ea.cloneElement = R;
  var s = c(Pt());
  function c(j) {
    return j && j.__esModule ? j : { default: j };
  }
  function o(j, I) {
    var $ = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(j);
      I && (O = O.filter(function(G) {
        return Object.getOwnPropertyDescriptor(j, G).enumerable;
      })), $.push.apply($, O);
    }
    return $;
  }
  function u(j) {
    for (var I = 1; I < arguments.length; I++) {
      var $ = arguments[I] != null ? arguments[I] : {};
      I % 2 ? o(Object($), !0).forEach(function(O) {
        z(j, O, $[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors($)) : o(Object($)).forEach(function(O) {
        Object.defineProperty(j, O, Object.getOwnPropertyDescriptor($, O));
      });
    }
    return j;
  }
  function z(j, I, $) {
    return I = C(I), I in j ? Object.defineProperty(j, I, { value: $, enumerable: !0, configurable: !0, writable: !0 }) : j[I] = $, j;
  }
  function C(j) {
    var I = W(j, "string");
    return typeof I == "symbol" ? I : String(I);
  }
  function W(j, I) {
    if (typeof j != "object" || j === null) return j;
    var $ = j[Symbol.toPrimitive];
    if ($ !== void 0) {
      var O = $.call(j, I);
      if (typeof O != "object") return O;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (I === "string" ? String : Number)(j);
  }
  function R(j, I) {
    return I.style && j.props.style && (I.style = u(u({}, j.props.style), I.style)), I.className && j.props.className && (I.className = j.props.className + " " + I.className), /* @__PURE__ */ s.default.cloneElement(j, I);
  }
  return Ea;
}
var fi = {}, Id;
function ec() {
  if (Id) return fi;
  Id = 1, fi.__esModule = !0, fi.resizableProps = void 0;
  var s = c(/* @__PURE__ */ Nn());
  Ls();
  function c(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var o = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: s.default.oneOf(["both", "x", "y", "none"]),
    className: s.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: s.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: s.default.shape({
      allowAnyClick: s.default.bool,
      cancel: s.default.string,
      children: s.default.node,
      disabled: s.default.bool,
      enableUserSelectHack: s.default.bool,
      offsetParent: s.default.node,
      grid: s.default.arrayOf(s.default.number),
      handle: s.default.string,
      nodeRef: s.default.object,
      onStart: s.default.func,
      onDrag: s.default.func,
      onStop: s.default.func,
      onMouseDown: s.default.func,
      scale: s.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var z = arguments.length, C = new Array(z), W = 0; W < z; W++)
        C[W] = arguments[W];
      var R = C[0];
      if (R.axis === "both" || R.axis === "y") {
        var j;
        return (j = s.default.number).isRequired.apply(j, C);
      }
      return s.default.number.apply(s.default, C);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: s.default.oneOfType([s.default.node, s.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: s.default.arrayOf(s.default.number),
    lockAspectRatio: s.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: s.default.arrayOf(s.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: s.default.arrayOf(s.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: s.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: s.default.func,
    /*
    * Called on resize event
    * */
    onResize: s.default.func,
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
    resizeHandles: s.default.arrayOf(s.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: s.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var z = arguments.length, C = new Array(z), W = 0; W < z; W++)
        C[W] = arguments[W];
      var R = C[0];
      if (R.axis === "both" || R.axis === "x") {
        var j;
        return (j = s.default.number).isRequired.apply(j, C);
      }
      return s.default.number.apply(s.default, C);
    }
  };
  return fi.resizableProps = o, fi;
}
var Hd;
function tc() {
  if (Hd) return ci;
  Hd = 1, ci.__esModule = !0, ci.default = void 0;
  var s = W(Pt()), c = Ls(), o = Pp(), u = ec(), z = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function C(v) {
    if (typeof WeakMap != "function") return null;
    var d = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (C = function(h) {
      return h ? m : d;
    })(v);
  }
  function W(v, d) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var m = C(d);
    if (m && m.has(v))
      return m.get(v);
    var f = {}, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in v)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(v, w)) {
        var _ = h ? Object.getOwnPropertyDescriptor(v, w) : null;
        _ && (_.get || _.set) ? Object.defineProperty(f, w, _) : f[w] = v[w];
      }
    return f.default = v, m && m.set(v, f), f;
  }
  function R() {
    return R = Object.assign ? Object.assign.bind() : function(v) {
      for (var d = 1; d < arguments.length; d++) {
        var m = arguments[d];
        for (var f in m)
          Object.prototype.hasOwnProperty.call(m, f) && (v[f] = m[f]);
      }
      return v;
    }, R.apply(this, arguments);
  }
  function j(v, d) {
    if (v == null) return {};
    var m = {}, f = Object.keys(v), h, w;
    for (w = 0; w < f.length; w++)
      h = f[w], !(d.indexOf(h) >= 0) && (m[h] = v[h]);
    return m;
  }
  function I(v, d) {
    var m = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      d && (f = f.filter(function(h) {
        return Object.getOwnPropertyDescriptor(v, h).enumerable;
      })), m.push.apply(m, f);
    }
    return m;
  }
  function $(v) {
    for (var d = 1; d < arguments.length; d++) {
      var m = arguments[d] != null ? arguments[d] : {};
      d % 2 ? I(Object(m), !0).forEach(function(f) {
        O(v, f, m[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(m)) : I(Object(m)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(m, f));
      });
    }
    return v;
  }
  function O(v, d, m) {
    return d = G(d), d in v ? Object.defineProperty(v, d, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : v[d] = m, v;
  }
  function G(v) {
    var d = ge(v, "string");
    return typeof d == "symbol" ? d : String(d);
  }
  function ge(v, d) {
    if (typeof v != "object" || v === null) return v;
    var m = v[Symbol.toPrimitive];
    if (m !== void 0) {
      var f = m.call(v, d);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(v);
  }
  function we(v, d) {
    v.prototype = Object.create(d.prototype), v.prototype.constructor = v, Y(v, d);
  }
  function Y(v, d) {
    return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, h) {
      return f.__proto__ = h, f;
    }, Y(v, d);
  }
  var L = /* @__PURE__ */ function(v) {
    we(d, v);
    function d() {
      for (var f, h = arguments.length, w = new Array(h), _ = 0; _ < h; _++)
        w[_] = arguments[_];
      return f = v.call.apply(v, [this].concat(w)) || this, f.handleRefs = {}, f.lastHandleRect = null, f.slack = null, f;
    }
    var m = d.prototype;
    return m.componentWillUnmount = function() {
      this.resetData();
    }, m.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, m.runConstraints = function(h, w) {
      var _ = this.props, B = _.minConstraints, V = _.maxConstraints, J = _.lockAspectRatio;
      if (!B && !V && !J) return [h, w];
      if (J) {
        var le = this.props.width / this.props.height, se = h - this.props.width, ie = w - this.props.height;
        Math.abs(se) > Math.abs(ie * le) ? w = h / le : h = w * le;
      }
      var ve = h, _e = w, oe = this.slack || [0, 0], pe = oe[0], N = oe[1];
      return h += pe, w += N, B && (h = Math.max(B[0], h), w = Math.max(B[1], w)), V && (h = Math.min(V[0], h), w = Math.min(V[1], w)), this.slack = [pe + (ve - h), N + (_e - w)], [h, w];
    }, m.resizeHandler = function(h, w) {
      var _ = this;
      return function(B, V) {
        var J = V.node, le = V.deltaX, se = V.deltaY;
        h === "onResizeStart" && _.resetData();
        var ie = (_.props.axis === "both" || _.props.axis === "x") && w !== "n" && w !== "s", ve = (_.props.axis === "both" || _.props.axis === "y") && w !== "e" && w !== "w";
        if (!(!ie && !ve)) {
          var _e = w[0], oe = w[w.length - 1], pe = J.getBoundingClientRect();
          if (_.lastHandleRect != null) {
            if (oe === "w") {
              var N = pe.left - _.lastHandleRect.left;
              le += N;
            }
            if (_e === "n") {
              var ee = pe.top - _.lastHandleRect.top;
              se += ee;
            }
          }
          _.lastHandleRect = pe, oe === "w" && (le = -le), _e === "n" && (se = -se);
          var D = _.props.width + (ie ? le / _.props.transformScale : 0), y = _.props.height + (ve ? se / _.props.transformScale : 0), A = _.runConstraints(D, y);
          D = A[0], y = A[1];
          var fe = D !== _.props.width || y !== _.props.height, re = typeof _.props[h] == "function" ? _.props[h] : null, Oe = h === "onResize" && !fe;
          re && !Oe && (B.persist == null || B.persist(), re(B, {
            node: J,
            size: {
              width: D,
              height: y
            },
            handle: w
          })), h === "onResizeStop" && _.resetData();
        }
      };
    }, m.renderResizeHandle = function(h, w) {
      var _ = this.props.handle;
      if (!_)
        return /* @__PURE__ */ s.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + h,
          ref: w
        });
      if (typeof _ == "function")
        return _(h, w);
      var B = typeof _.type == "string", V = $({
        ref: w
      }, B ? {} : {
        handleAxis: h
      });
      return /* @__PURE__ */ s.cloneElement(_, V);
    }, m.render = function() {
      var h = this, w = this.props, _ = w.children, B = w.className, V = w.draggableOpts;
      w.width, w.height, w.handle, w.handleSize, w.lockAspectRatio, w.axis, w.minConstraints, w.maxConstraints, w.onResize, w.onResizeStop, w.onResizeStart;
      var J = w.resizeHandles;
      w.transformScale;
      var le = j(w, z);
      return (0, o.cloneElement)(_, $($({}, le), {}, {
        className: (B ? B + " " : "") + "react-resizable",
        children: [].concat(_.props.children, J.map(function(se) {
          var ie, ve = (ie = h.handleRefs[se]) != null ? ie : h.handleRefs[se] = /* @__PURE__ */ s.createRef();
          return /* @__PURE__ */ s.createElement(c.DraggableCore, R({}, V, {
            nodeRef: ve,
            key: "resizableHandle-" + se,
            onStop: h.resizeHandler("onResizeStop", se),
            onStart: h.resizeHandler("onResizeStart", se),
            onDrag: h.resizeHandler("onResize", se)
          }), h.renderResizeHandle(se, ve));
        }))
      }));
    }, d;
  }(s.Component);
  return ci.default = L, L.propTypes = u.resizableProps, L.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, ci;
}
var pi = {}, Wd;
function Op() {
  if (Wd) return pi;
  Wd = 1, pi.__esModule = !0, pi.default = void 0;
  var s = R(Pt()), c = C(/* @__PURE__ */ Nn()), o = C(tc()), u = ec(), z = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function C(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function W(d) {
    if (typeof WeakMap != "function") return null;
    var m = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (W = function(w) {
      return w ? f : m;
    })(d);
  }
  function R(d, m) {
    if (d && d.__esModule)
      return d;
    if (d === null || typeof d != "object" && typeof d != "function")
      return { default: d };
    var f = W(m);
    if (f && f.has(d))
      return f.get(d);
    var h = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var _ in d)
      if (_ !== "default" && Object.prototype.hasOwnProperty.call(d, _)) {
        var B = w ? Object.getOwnPropertyDescriptor(d, _) : null;
        B && (B.get || B.set) ? Object.defineProperty(h, _, B) : h[_] = d[_];
      }
    return h.default = d, f && f.set(d, h), h;
  }
  function j() {
    return j = Object.assign ? Object.assign.bind() : function(d) {
      for (var m = 1; m < arguments.length; m++) {
        var f = arguments[m];
        for (var h in f)
          Object.prototype.hasOwnProperty.call(f, h) && (d[h] = f[h]);
      }
      return d;
    }, j.apply(this, arguments);
  }
  function I(d, m) {
    var f = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(d);
      m && (h = h.filter(function(w) {
        return Object.getOwnPropertyDescriptor(d, w).enumerable;
      })), f.push.apply(f, h);
    }
    return f;
  }
  function $(d) {
    for (var m = 1; m < arguments.length; m++) {
      var f = arguments[m] != null ? arguments[m] : {};
      m % 2 ? I(Object(f), !0).forEach(function(h) {
        O(d, h, f[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f)) : I(Object(f)).forEach(function(h) {
        Object.defineProperty(d, h, Object.getOwnPropertyDescriptor(f, h));
      });
    }
    return d;
  }
  function O(d, m, f) {
    return m = G(m), m in d ? Object.defineProperty(d, m, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : d[m] = f, d;
  }
  function G(d) {
    var m = ge(d, "string");
    return typeof m == "symbol" ? m : String(m);
  }
  function ge(d, m) {
    if (typeof d != "object" || d === null) return d;
    var f = d[Symbol.toPrimitive];
    if (f !== void 0) {
      var h = f.call(d, m);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(d);
  }
  function we(d, m) {
    if (d == null) return {};
    var f = {}, h = Object.keys(d), w, _;
    for (_ = 0; _ < h.length; _++)
      w = h[_], !(m.indexOf(w) >= 0) && (f[w] = d[w]);
    return f;
  }
  function Y(d, m) {
    d.prototype = Object.create(m.prototype), d.prototype.constructor = d, L(d, m);
  }
  function L(d, m) {
    return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, w) {
      return h.__proto__ = w, h;
    }, L(d, m);
  }
  var v = /* @__PURE__ */ function(d) {
    Y(m, d);
    function m() {
      for (var h, w = arguments.length, _ = new Array(w), B = 0; B < w; B++)
        _[B] = arguments[B];
      return h = d.call.apply(d, [this].concat(_)) || this, h.state = {
        width: h.props.width,
        height: h.props.height,
        propsWidth: h.props.width,
        propsHeight: h.props.height
      }, h.onResize = function(V, J) {
        var le = J.size;
        h.props.onResize ? (V.persist == null || V.persist(), h.setState(le, function() {
          return h.props.onResize && h.props.onResize(V, J);
        })) : h.setState(le);
      }, h;
    }
    m.getDerivedStateFromProps = function(w, _) {
      return _.propsWidth !== w.width || _.propsHeight !== w.height ? {
        width: w.width,
        height: w.height,
        propsWidth: w.width,
        propsHeight: w.height
      } : null;
    };
    var f = m.prototype;
    return f.render = function() {
      var w = this.props, _ = w.handle, B = w.handleSize;
      w.onResize;
      var V = w.onResizeStart, J = w.onResizeStop, le = w.draggableOpts, se = w.minConstraints, ie = w.maxConstraints, ve = w.lockAspectRatio, _e = w.axis;
      w.width, w.height;
      var oe = w.resizeHandles, pe = w.style, N = w.transformScale, ee = we(w, z);
      return /* @__PURE__ */ s.createElement(o.default, {
        axis: _e,
        draggableOpts: le,
        handle: _,
        handleSize: B,
        height: this.state.height,
        lockAspectRatio: ve,
        maxConstraints: ie,
        minConstraints: se,
        onResizeStart: V,
        onResize: this.onResize,
        onResizeStop: J,
        resizeHandles: oe,
        transformScale: N,
        width: this.state.width
      }, /* @__PURE__ */ s.createElement("div", j({}, ee, {
        style: $($({}, pe), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, m;
  }(s.Component);
  return pi.default = v, v.propTypes = $($({}, u.resizableProps), {}, {
    children: c.default.element
  }), pi;
}
var Fd;
function Cp() {
  return Fd || (Fd = 1, di.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, di.exports.Resizable = tc().default, di.exports.ResizableBox = Op().default), di.exports;
}
var dn = {}, qd;
function nc() {
  if (qd) return dn;
  qd = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.resizeHandleType = dn.resizeHandleAxesType = dn.default = void 0;
  var s = o(/* @__PURE__ */ Nn()), c = o(Pt());
  function o(C) {
    return C && C.__esModule ? C : { default: C };
  }
  const u = dn.resizeHandleAxesType = s.default.arrayOf(s.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), z = dn.resizeHandleType = s.default.oneOfType([s.default.node, s.default.func]);
  return dn.default = {
    //
    // Basic props
    //
    className: s.default.string,
    style: s.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: s.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: s.default.bool,
    // # of cols.
    cols: s.default.number,
    // A selector that will not be draggable.
    draggableCancel: s.default.string,
    // A selector for the draggable handler
    draggableHandle: s.default.string,
    // Deprecated
    verticalCompact: function(C) {
      C.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: s.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(C) {
      var W = C.layout;
      W !== void 0 && xr().validateLayout(W, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: s.default.arrayOf(s.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: s.default.arrayOf(s.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: s.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: s.default.number,
    //
    // Flags
    //
    isBounded: s.default.bool,
    isDraggable: s.default.bool,
    isResizable: s.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: s.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: s.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: s.default.bool,
    // parent layout transform scale
    transformScale: s.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: s.default.bool,
    // Resize handle options
    resizeHandles: u,
    resizeHandle: z,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: s.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: s.default.func,
    // Calls on each drag movement.
    onDrag: s.default.func,
    // Calls when drag is complete.
    onDragStop: s.default.func,
    //Calls when resize starts.
    onResizeStart: s.default.func,
    // Calls when resize movement happens.
    onResize: s.default.func,
    // Calls when resize is complete.
    onResizeStop: s.default.func,
    // Calls when some element is dropped.
    onDrop: s.default.func,
    //
    // Other validations
    //
    droppingItem: s.default.shape({
      i: s.default.string.isRequired,
      w: s.default.number.isRequired,
      h: s.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(C, W) {
      const R = C[W], j = {};
      c.default.Children.forEach(R, function(I) {
        if (I?.key != null) {
          if (j[I.key])
            throw new Error('Duplicate child key "' + I.key + '" found! This will cause problems in ReactGridLayout.');
          j[I.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: s.default.any
  }, dn;
}
var Bd;
function Rp() {
  if (Bd) return li;
  Bd = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var s = I(Pt()), c = Ca(), o = I(/* @__PURE__ */ Nn()), u = Ls(), z = Cp(), C = xr(), W = Ms(), R = nc(), j = I(Da());
  function I(L) {
    return L && L.__esModule ? L : { default: L };
  }
  function $(L, v) {
    var d = Object.keys(L);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(L);
      v && (m = m.filter(function(f) {
        return Object.getOwnPropertyDescriptor(L, f).enumerable;
      })), d.push.apply(d, m);
    }
    return d;
  }
  function O(L) {
    for (var v = 1; v < arguments.length; v++) {
      var d = arguments[v] != null ? arguments[v] : {};
      v % 2 ? $(Object(d), !0).forEach(function(m) {
        G(L, m, d[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(d)) : $(Object(d)).forEach(function(m) {
        Object.defineProperty(L, m, Object.getOwnPropertyDescriptor(d, m));
      });
    }
    return L;
  }
  function G(L, v, d) {
    return (v = ge(v)) in L ? Object.defineProperty(L, v, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : L[v] = d, L;
  }
  function ge(L) {
    var v = we(L, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function we(L, v) {
    if (typeof L != "object" || !L) return L;
    var d = L[Symbol.toPrimitive];
    if (d !== void 0) {
      var m = d.call(L, v);
      if (typeof m != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(L);
  }
  let Y = class extends s.default.Component {
    constructor() {
      super(...arguments), G(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), G(this, "elementRef", /* @__PURE__ */ s.default.createRef()), G(this, "onDragStart", (v, d) => {
        let {
          node: m
        } = d;
        const {
          onDragStart: f,
          transformScale: h
        } = this.props;
        if (!f) return;
        const w = {
          top: 0,
          left: 0
        }, {
          offsetParent: _
        } = m;
        if (!_) return;
        const B = _.getBoundingClientRect(), V = m.getBoundingClientRect(), J = V.left / h, le = B.left / h, se = V.top / h, ie = B.top / h;
        w.left = J - le + _.scrollLeft, w.top = se - ie + _.scrollTop, this.setState({
          dragging: w
        });
        const {
          x: ve,
          y: _e
        } = (0, W.calcXY)(this.getPositionParams(), w.top, w.left, this.props.w, this.props.h);
        return f.call(this, this.props.i, ve, _e, {
          e: v,
          node: m,
          newPosition: w
        });
      }), G(this, "onDrag", (v, d, m) => {
        let {
          node: f,
          deltaX: h,
          deltaY: w
        } = d;
        const {
          onDrag: _
        } = this.props;
        if (!_) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let B = this.state.dragging.top + w, V = this.state.dragging.left + h;
        const {
          isBounded: J,
          i: le,
          w: se,
          h: ie,
          containerWidth: ve
        } = this.props, _e = this.getPositionParams();
        if (J) {
          const {
            offsetParent: ee
          } = f;
          if (ee) {
            const {
              margin: D,
              rowHeight: y
            } = this.props, A = ee.clientHeight - (0, W.calcGridItemWHPx)(ie, y, D[1]);
            B = (0, W.clamp)(B, 0, A);
            const fe = (0, W.calcGridColWidth)(_e), re = ve - (0, W.calcGridItemWHPx)(se, fe, D[0]);
            V = (0, W.clamp)(V, 0, re);
          }
        }
        const oe = {
          top: B,
          left: V
        };
        m ? this.setState({
          dragging: oe
        }) : (0, c.flushSync)(() => {
          this.setState({
            dragging: oe
          });
        });
        const {
          x: pe,
          y: N
        } = (0, W.calcXY)(_e, B, V, se, ie);
        return _.call(this, le, pe, N, {
          e: v,
          node: f,
          newPosition: oe
        });
      }), G(this, "onDragStop", (v, d) => {
        let {
          node: m
        } = d;
        const {
          onDragStop: f
        } = this.props;
        if (!f) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: h,
          h: w,
          i: _
        } = this.props, {
          left: B,
          top: V
        } = this.state.dragging, J = {
          top: V,
          left: B
        };
        this.setState({
          dragging: null
        });
        const {
          x: le,
          y: se
        } = (0, W.calcXY)(this.getPositionParams(), V, B, h, w);
        return f.call(this, _, le, se, {
          e: v,
          node: m,
          newPosition: J
        });
      }), G(this, "onResizeStop", (v, d, m) => this.onResizeHandler(v, d, m, "onResizeStop")), G(this, "onResizeStart", (v, d, m) => this.onResizeHandler(v, d, m, "onResizeStart")), G(this, "onResize", (v, d, m) => this.onResizeHandler(v, d, m, "onResize"));
    }
    shouldComponentUpdate(v, d) {
      if (this.props.children !== v.children || this.props.droppingPosition !== v.droppingPosition) return !0;
      const m = (0, W.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), f = (0, W.calcGridItemPosition)(this.getPositionParams(v), v.x, v.y, v.w, v.h, d);
      return !(0, C.fastPositionEqual)(m, f) || this.props.useCSSTransforms !== v.useCSSTransforms;
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
        droppingPosition: d
      } = this.props;
      if (!d) return;
      const m = this.elementRef.current;
      if (!m) return;
      const f = v.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: h
      } = this.state, w = h && d.left !== f.left || d.top !== f.top;
      if (!h)
        this.onDragStart(d.e, {
          node: m,
          deltaX: d.left,
          deltaY: d.top
        });
      else if (w) {
        const _ = d.left - h.left, B = d.top - h.top;
        this.onDrag(
          d.e,
          {
            node: m,
            deltaX: _,
            deltaY: B
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
        usePercentages: d,
        containerWidth: m,
        useCSSTransforms: f
      } = this.props;
      let h;
      return f ? h = (0, C.setTransform)(v) : (h = (0, C.setTopLeft)(v), d && (h.left = (0, C.perc)(v.left / m), h.width = (0, C.perc)(v.width / m))), h;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(v, d) {
      return /* @__PURE__ */ s.default.createElement(u.DraggableCore, {
        disabled: !d,
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
    curryResizeHandler(v, d) {
      return (m, f) => (
        /*: Function*/
        d(m, f, v)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(v, d, m) {
      const {
        cols: f,
        minW: h,
        minH: w,
        maxW: _,
        maxH: B,
        transformScale: V,
        resizeHandles: J,
        resizeHandle: le
      } = this.props, se = this.getPositionParams(), ie = (0, W.calcGridItemPosition)(se, 0, 0, f, 0).width, ve = (0, W.calcGridItemPosition)(se, 0, 0, h, w), _e = (0, W.calcGridItemPosition)(se, 0, 0, _, B), oe = [ve.width, ve.height], pe = [Math.min(_e.width, ie), Math.min(_e.height, 1 / 0)];
      return /* @__PURE__ */ s.default.createElement(
        z.Resizable,
        {
          draggableOpts: {
            disabled: !m
          },
          className: m ? void 0 : "react-resizable-hide",
          width: d.width,
          height: d.height,
          minConstraints: oe,
          maxConstraints: pe,
          onResizeStop: this.curryResizeHandler(d, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(d, this.onResizeStart),
          onResize: this.curryResizeHandler(d, this.onResize),
          transformScale: V,
          resizeHandles: J,
          handle: le
        },
        v
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(v, d, m, f) {
      let {
        node: h,
        size: w,
        handle: _
      } = d;
      const B = this.props[f];
      if (!B) return;
      const {
        x: V,
        y: J,
        i: le,
        maxH: se,
        minH: ie,
        containerWidth: ve
      } = this.props, {
        minW: _e,
        maxW: oe
      } = this.props;
      let pe = w;
      h && (pe = (0, C.resizeItemInDirection)(_, m, w, ve), (0, c.flushSync)(() => {
        this.setState({
          resizing: f === "onResizeStop" ? null : pe
        });
      }));
      let {
        w: N,
        h: ee
      } = (0, W.calcWH)(this.getPositionParams(), pe.width, pe.height, V, J, _);
      N = (0, W.clamp)(N, Math.max(_e, 1), oe), ee = (0, W.clamp)(ee, ie, se), B.call(this, le, N, ee, {
        e: v,
        node: h,
        size: pe,
        handle: _
      });
    }
    render() {
      const {
        x: v,
        y: d,
        w: m,
        h: f,
        isDraggable: h,
        isResizable: w,
        droppingPosition: _,
        useCSSTransforms: B
      } = this.props, V = (0, W.calcGridItemPosition)(this.getPositionParams(), v, d, m, f, this.state), J = s.default.Children.only(this.props.children);
      let le = /* @__PURE__ */ s.default.cloneElement(J, {
        ref: this.elementRef,
        className: (0, j.default)("react-grid-item", J.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": h,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!_,
          cssTransforms: B
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: O(O(O({}, this.props.style), J.props.style), this.createStyle(V))
      });
      return le = this.mixinResizable(le, V, w), le = this.mixinDraggable(le, h), le;
    }
  };
  return li.default = Y, G(Y, "propTypes", {
    // Children must be only a single element
    children: o.default.element,
    // General grid attributes
    cols: o.default.number.isRequired,
    containerWidth: o.default.number.isRequired,
    rowHeight: o.default.number.isRequired,
    margin: o.default.array.isRequired,
    maxRows: o.default.number.isRequired,
    containerPadding: o.default.array.isRequired,
    // These are all in grid units
    x: o.default.number.isRequired,
    y: o.default.number.isRequired,
    w: o.default.number.isRequired,
    h: o.default.number.isRequired,
    // All optional
    minW: function(L, v) {
      const d = L[v];
      if (typeof d != "number") return new Error("minWidth not Number");
      if (d > L.w || d > L.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(L, v) {
      const d = L[v];
      if (typeof d != "number") return new Error("maxWidth not Number");
      if (d < L.w || d < L.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(L, v) {
      const d = L[v];
      if (typeof d != "number") return new Error("minHeight not Number");
      if (d > L.h || d > L.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(L, v) {
      const d = L[v];
      if (typeof d != "number") return new Error("maxHeight not Number");
      if (d < L.h || d < L.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: o.default.string.isRequired,
    // Resize handle options
    resizeHandles: R.resizeHandleAxesType,
    resizeHandle: R.resizeHandleType,
    // Functions
    onDragStop: o.default.func,
    onDragStart: o.default.func,
    onDrag: o.default.func,
    onResizeStop: o.default.func,
    onResizeStart: o.default.func,
    onResize: o.default.func,
    // Flags
    isDraggable: o.default.bool.isRequired,
    isResizable: o.default.bool.isRequired,
    isBounded: o.default.bool.isRequired,
    static: o.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: o.default.bool.isRequired,
    transformScale: o.default.number,
    // Others
    className: o.default.string,
    // Selector for draggable handle
    handle: o.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: o.default.string,
    // Current position of a dropping element
    droppingPosition: o.default.shape({
      e: o.default.object.isRequired,
      left: o.default.number.isRequired,
      top: o.default.number.isRequired
    })
  }), G(Y, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), li;
}
var Ud;
function rc() {
  if (Ud) return si;
  Ud = 1, Object.defineProperty(si, "__esModule", {
    value: !0
  }), si.default = void 0;
  var s = j(Pt()), c = /* @__PURE__ */ Ts(), o = R(Da()), u = xr(), z = Ms(), C = R(Rp()), W = R(nc());
  function R(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function j(v, d) {
    if (typeof WeakMap == "function") var m = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (j = function(h, w) {
      if (!w && h && h.__esModule) return h;
      var _, B, V = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return V;
      if (_ = w ? f : m) {
        if (_.has(h)) return _.get(h);
        _.set(h, V);
      }
      for (const J in h) J !== "default" && {}.hasOwnProperty.call(h, J) && ((B = (_ = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, J)) && (B.get || B.set) ? _(V, J, B) : V[J] = h[J]);
      return V;
    })(v, d);
  }
  function I(v, d) {
    var m = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      d && (f = f.filter(function(h) {
        return Object.getOwnPropertyDescriptor(v, h).enumerable;
      })), m.push.apply(m, f);
    }
    return m;
  }
  function $(v) {
    for (var d = 1; d < arguments.length; d++) {
      var m = arguments[d] != null ? arguments[d] : {};
      d % 2 ? I(Object(m), !0).forEach(function(f) {
        O(v, f, m[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(m)) : I(Object(m)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(m, f));
      });
    }
    return v;
  }
  function O(v, d, m) {
    return (d = G(d)) in v ? Object.defineProperty(v, d, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : v[d] = m, v;
  }
  function G(v) {
    var d = ge(v, "string");
    return typeof d == "symbol" ? d : d + "";
  }
  function ge(v, d) {
    if (typeof v != "object" || !v) return v;
    var m = v[Symbol.toPrimitive];
    if (m !== void 0) {
      var f = m.call(v, d);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(v);
  }
  const we = "react-grid-layout";
  let Y = !1;
  try {
    Y = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let L = class extends s.Component {
    constructor() {
      super(...arguments), O(this, "state", {
        activeDrag: null,
        layout: (0, u.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, u.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), O(this, "dragEnterCounter", 0), O(this, "onDragStart", (d, m, f, h) => {
        let {
          e: w,
          node: _
        } = h;
        const {
          layout: B
        } = this.state, V = (0, u.getLayoutItem)(B, d);
        if (!V) return;
        const J = {
          w: V.w,
          h: V.h,
          x: V.x,
          y: V.y,
          placeholder: !0,
          i: d
        };
        return this.setState({
          oldDragItem: (0, u.cloneLayoutItem)(V),
          oldLayout: B,
          activeDrag: J
        }), this.props.onDragStart(B, V, V, null, w, _);
      }), O(this, "onDrag", (d, m, f, h) => {
        let {
          e: w,
          node: _
        } = h;
        const {
          oldDragItem: B
        } = this.state;
        let {
          layout: V
        } = this.state;
        const {
          cols: J,
          allowOverlap: le,
          preventCollision: se
        } = this.props, ie = (0, u.getLayoutItem)(V, d);
        if (!ie) return;
        const ve = {
          w: ie.w,
          h: ie.h,
          x: ie.x,
          y: ie.y,
          placeholder: !0,
          i: d
        };
        V = (0, u.moveElement)(V, ie, m, f, !0, se, (0, u.compactType)(this.props), J, le), this.props.onDrag(V, B, ie, ve, w, _), this.setState({
          layout: le ? V : (0, u.compact)(V, (0, u.compactType)(this.props), J),
          activeDrag: ve
        });
      }), O(this, "onDragStop", (d, m, f, h) => {
        let {
          e: w,
          node: _
        } = h;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: B
        } = this.state;
        let {
          layout: V
        } = this.state;
        const {
          cols: J,
          preventCollision: le,
          allowOverlap: se
        } = this.props, ie = (0, u.getLayoutItem)(V, d);
        if (!ie) return;
        V = (0, u.moveElement)(V, ie, m, f, !0, le, (0, u.compactType)(this.props), J, se);
        const _e = se ? V : (0, u.compact)(V, (0, u.compactType)(this.props), J);
        this.props.onDragStop(_e, B, ie, null, w, _);
        const {
          oldLayout: oe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: _e,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(_e, oe);
      }), O(this, "onResizeStart", (d, m, f, h) => {
        let {
          e: w,
          node: _
        } = h;
        const {
          layout: B
        } = this.state, V = (0, u.getLayoutItem)(B, d);
        V && (this.setState({
          oldResizeItem: (0, u.cloneLayoutItem)(V),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(B, V, V, null, w, _));
      }), O(this, "onResize", (d, m, f, h) => {
        let {
          e: w,
          node: _,
          size: B,
          handle: V
        } = h;
        const {
          oldResizeItem: J
        } = this.state, {
          layout: le
        } = this.state, {
          cols: se,
          preventCollision: ie,
          allowOverlap: ve
        } = this.props;
        let _e = !1, oe, pe, N;
        const [ee, D] = (0, u.withLayoutItem)(le, d, (A) => {
          let fe;
          return pe = A.x, N = A.y, ["sw", "w", "nw", "n", "ne"].indexOf(V) !== -1 && (["sw", "nw", "w"].indexOf(V) !== -1 && (pe = A.x + (A.w - m), m = A.x !== pe && pe < 0 ? A.w : m, pe = pe < 0 ? 0 : pe), ["ne", "n", "nw"].indexOf(V) !== -1 && (N = A.y + (A.h - f), f = A.y !== N && N < 0 ? A.h : f, N = N < 0 ? 0 : N), _e = !0), ie && !ve && (fe = (0, u.getAllCollisions)(le, $($({}, A), {}, {
            w: m,
            h: f,
            x: pe,
            y: N
          })).filter((Oe) => Oe.i !== A.i).length > 0, fe && (N = A.y, f = A.h, pe = A.x, m = A.w, _e = !1)), A.w = m, A.h = f, A;
        });
        if (!D) return;
        oe = ee, _e && (oe = (0, u.moveElement)(ee, D, pe, N, !0, this.props.preventCollision, (0, u.compactType)(this.props), se, ve));
        const y = {
          w: D.w,
          h: D.h,
          x: D.x,
          y: D.y,
          static: !0,
          i: d
        };
        this.props.onResize(oe, J, D, y, w, _), this.setState({
          layout: ve ? oe : (0, u.compact)(oe, (0, u.compactType)(this.props), se),
          activeDrag: y
        });
      }), O(this, "onResizeStop", (d, m, f, h) => {
        let {
          e: w,
          node: _
        } = h;
        const {
          layout: B,
          oldResizeItem: V
        } = this.state, {
          cols: J,
          allowOverlap: le
        } = this.props, se = (0, u.getLayoutItem)(B, d), ie = le ? B : (0, u.compact)(B, (0, u.compactType)(this.props), J);
        this.props.onResizeStop(ie, V, se, null, w, _);
        const {
          oldLayout: ve
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: ie,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(ie, ve);
      }), O(this, "onDragOver", (d) => {
        var m;
        if (d.preventDefault(), d.stopPropagation(), Y && // $FlowIgnore can't figure this out
        !((m = d.nativeEvent.target) !== null && m !== void 0 && m.classList.contains(we)))
          return !1;
        const {
          droppingItem: f,
          onDropDragOver: h,
          margin: w,
          cols: _,
          rowHeight: B,
          maxRows: V,
          width: J,
          containerPadding: le,
          transformScale: se
        } = this.props, ie = h?.(d);
        if (ie === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const ve = $($({}, f), ie), {
          layout: _e
        } = this.state, oe = d.currentTarget.getBoundingClientRect(), pe = d.clientX - oe.left, N = d.clientY - oe.top, ee = {
          left: pe / se,
          top: N / se,
          e: d
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: D,
              top: y
            } = this.state.droppingPosition;
            (D != pe || y != N) && this.setState({
              droppingPosition: ee
            });
          }
        } else {
          const D = {
            cols: _,
            margin: w,
            maxRows: V,
            rowHeight: B,
            containerWidth: J,
            containerPadding: le || w
          }, y = (0, z.calcXY)(D, N, pe, ve.w, ve.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ s.createElement("div", {
              key: ve.i
            }),
            droppingPosition: ee,
            layout: [..._e, $($({}, ve), {}, {
              x: y.x,
              y: y.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), O(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: d,
          cols: m
        } = this.props, {
          layout: f
        } = this.state, h = (0, u.compact)(f.filter((w) => w.i !== d.i), (0, u.compactType)(this.props), m, this.props.allowOverlap);
        this.setState({
          layout: h,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), O(this, "onDragLeave", (d) => {
        d.preventDefault(), d.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), O(this, "onDragEnter", (d) => {
        d.preventDefault(), d.stopPropagation(), this.dragEnterCounter++;
      }), O(this, "onDrop", (d) => {
        d.preventDefault(), d.stopPropagation();
        const {
          droppingItem: m
        } = this.props, {
          layout: f
        } = this.state, h = f.find((w) => w.i === m.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(f, h, d);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(d, m) {
      let f;
      return m.activeDrag ? null : (!(0, c.deepEqual)(d.layout, m.propsLayout) || d.compactType !== m.compactType ? f = d.layout : (0, u.childrenEqual)(d.children, m.children) || (f = m.layout), f ? {
        layout: (0, u.synchronizeLayoutWithChildren)(f, d.children, d.cols, (0, u.compactType)(d), d.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: d.compactType,
        children: d.children,
        propsLayout: d.layout
      } : null);
    }
    shouldComponentUpdate(d, m) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== d.children || !(0, u.fastRGLPropsEqual)(this.props, d, c.deepEqual) || this.state.activeDrag !== m.activeDrag || this.state.mounted !== m.mounted || this.state.droppingPosition !== m.droppingPosition
      );
    }
    componentDidUpdate(d, m) {
      if (!this.state.activeDrag) {
        const f = this.state.layout, h = m.layout;
        this.onLayoutMaybeChanged(f, h);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const d = (0, u.bottom)(this.state.layout), m = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return d * this.props.rowHeight + (d - 1) * this.props.margin[1] + m * 2 + "px";
    }
    onLayoutMaybeChanged(d, m) {
      m || (m = this.state.layout), (0, c.deepEqual)(m, d) || this.props.onLayoutChange(d);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: d
      } = this.state;
      if (!d) return null;
      const {
        width: m,
        cols: f,
        margin: h,
        containerPadding: w,
        rowHeight: _,
        maxRows: B,
        useCSSTransforms: V,
        transformScale: J
      } = this.props;
      return /* @__PURE__ */ s.createElement(C.default, {
        w: d.w,
        h: d.h,
        x: d.x,
        y: d.y,
        i: d.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: m,
        cols: f,
        margin: h,
        containerPadding: w || h,
        maxRows: B,
        rowHeight: _,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: V,
        transformScale: J
      }, /* @__PURE__ */ s.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(d, m) {
      if (!d || !d.key) return;
      const f = (0, u.getLayoutItem)(this.state.layout, String(d.key));
      if (!f) return null;
      const {
        width: h,
        cols: w,
        margin: _,
        containerPadding: B,
        rowHeight: V,
        maxRows: J,
        isDraggable: le,
        isResizable: se,
        isBounded: ie,
        useCSSTransforms: ve,
        transformScale: _e,
        draggableCancel: oe,
        draggableHandle: pe,
        resizeHandles: N,
        resizeHandle: ee
      } = this.props, {
        mounted: D,
        droppingPosition: y
      } = this.state, A = typeof f.isDraggable == "boolean" ? f.isDraggable : !f.static && le, fe = typeof f.isResizable == "boolean" ? f.isResizable : !f.static && se, re = f.resizeHandles || N, Oe = A && ie && f.isBounded !== !1;
      return /* @__PURE__ */ s.createElement(C.default, {
        containerWidth: h,
        cols: w,
        margin: _,
        containerPadding: B || _,
        maxRows: J,
        rowHeight: V,
        cancel: oe,
        handle: pe,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: A,
        isResizable: fe,
        isBounded: Oe,
        useCSSTransforms: ve && D,
        usePercentages: !D,
        transformScale: _e,
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
        droppingPosition: m ? y : void 0,
        resizeHandles: re,
        resizeHandle: ee
      }, d);
    }
    render() {
      const {
        className: d,
        style: m,
        isDroppable: f,
        innerRef: h
      } = this.props, w = (0, o.default)(we, d), _ = $({
        height: this.containerHeight()
      }, m);
      return /* @__PURE__ */ s.createElement("div", {
        ref: h,
        className: w,
        style: _,
        onDrop: f ? this.onDrop : u.noop,
        onDragLeave: f ? this.onDragLeave : u.noop,
        onDragEnter: f ? this.onDragEnter : u.noop,
        onDragOver: f ? this.onDragOver : u.noop
      }, s.Children.map(this.props.children, (B) => this.processGridItem(B)), f && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return si.default = L, O(L, "displayName", "ReactGridLayout"), O(L, "propTypes", W.default), O(L, "defaultProps", {
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
    onLayoutChange: u.noop,
    onDragStart: u.noop,
    onDrag: u.noop,
    onDragStop: u.noop,
    onResizeStart: u.noop,
    onResize: u.noop,
    onResizeStop: u.noop,
    onDrop: u.noop,
    onDropDragOver: u.noop
  }), si;
}
var hi = {}, Qn = {}, Gd;
function ic() {
  if (Gd) return Qn;
  Gd = 1, Object.defineProperty(Qn, "__esModule", {
    value: !0
  }), Qn.findOrGenerateResponsiveLayout = u, Qn.getBreakpointFromWidth = c, Qn.getColsFromBreakpoint = o, Qn.sortBreakpoints = z;
  var s = xr();
  function c(C, W) {
    const R = z(C);
    let j = R[0];
    for (let I = 1, $ = R.length; I < $; I++) {
      const O = R[I];
      W > C[O] && (j = O);
    }
    return j;
  }
  function o(C, W) {
    if (!W[C])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + C + " is missing!");
    return W[C];
  }
  function u(C, W, R, j, I, $) {
    if (C[R]) return (0, s.cloneLayout)(C[R]);
    let O = C[j];
    const G = z(W), ge = G.slice(G.indexOf(R));
    for (let we = 0, Y = ge.length; we < Y; we++) {
      const L = ge[we];
      if (C[L]) {
        O = C[L];
        break;
      }
    }
    return O = (0, s.cloneLayout)(O || []), (0, s.compact)((0, s.correctBounds)(O, {
      cols: I
    }), $, I);
  }
  function z(C) {
    return Object.keys(C).sort(function(R, j) {
      return C[R] - C[j];
    });
  }
  return Qn;
}
var Vd;
function jp() {
  if (Vd) return hi;
  Vd = 1, Object.defineProperty(hi, "__esModule", {
    value: !0
  }), hi.default = void 0;
  var s = j(Pt()), c = R(/* @__PURE__ */ Nn()), o = /* @__PURE__ */ Ts(), u = xr(), z = ic(), C = R(rc());
  const W = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function R(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function j(f, h) {
    if (typeof WeakMap == "function") var w = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap();
    return (j = function(B, V) {
      if (!V && B && B.__esModule) return B;
      var J, le, se = { __proto__: null, default: B };
      if (B === null || typeof B != "object" && typeof B != "function") return se;
      if (J = V ? _ : w) {
        if (J.has(B)) return J.get(B);
        J.set(B, se);
      }
      for (const ie in B) ie !== "default" && {}.hasOwnProperty.call(B, ie) && ((le = (J = Object.defineProperty) && Object.getOwnPropertyDescriptor(B, ie)) && (le.get || le.set) ? J(se, ie, le) : se[ie] = B[ie]);
      return se;
    })(f, h);
  }
  function I() {
    return I = Object.assign ? Object.assign.bind() : function(f) {
      for (var h = 1; h < arguments.length; h++) {
        var w = arguments[h];
        for (var _ in w) ({}).hasOwnProperty.call(w, _) && (f[_] = w[_]);
      }
      return f;
    }, I.apply(null, arguments);
  }
  function $(f, h) {
    if (f == null) return {};
    var w, _, B = O(f, h);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(f);
      for (_ = 0; _ < V.length; _++) w = V[_], h.indexOf(w) === -1 && {}.propertyIsEnumerable.call(f, w) && (B[w] = f[w]);
    }
    return B;
  }
  function O(f, h) {
    if (f == null) return {};
    var w = {};
    for (var _ in f) if ({}.hasOwnProperty.call(f, _)) {
      if (h.indexOf(_) !== -1) continue;
      w[_] = f[_];
    }
    return w;
  }
  function G(f, h) {
    var w = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(f);
      h && (_ = _.filter(function(B) {
        return Object.getOwnPropertyDescriptor(f, B).enumerable;
      })), w.push.apply(w, _);
    }
    return w;
  }
  function ge(f) {
    for (var h = 1; h < arguments.length; h++) {
      var w = arguments[h] != null ? arguments[h] : {};
      h % 2 ? G(Object(w), !0).forEach(function(_) {
        we(f, _, w[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(w)) : G(Object(w)).forEach(function(_) {
        Object.defineProperty(f, _, Object.getOwnPropertyDescriptor(w, _));
      });
    }
    return f;
  }
  function we(f, h, w) {
    return (h = Y(h)) in f ? Object.defineProperty(f, h, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = w, f;
  }
  function Y(f) {
    var h = L(f, "string");
    return typeof h == "symbol" ? h : h + "";
  }
  function L(f, h) {
    if (typeof f != "object" || !f) return f;
    var w = f[Symbol.toPrimitive];
    if (w !== void 0) {
      var _ = w.call(f, h);
      if (typeof _ != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(f);
  }
  const v = (f) => Object.prototype.toString.call(f);
  function d(f, h) {
    return f == null ? null : Array.isArray(f) ? f : f[h];
  }
  let m = class extends s.Component {
    constructor() {
      super(...arguments), we(this, "state", this.generateInitialState()), we(this, "onLayoutChange", (h) => {
        this.props.onLayoutChange(h, ge(ge({}, this.props.layouts), {}, {
          [this.state.breakpoint]: h
        }));
      });
    }
    generateInitialState() {
      const {
        width: h,
        breakpoints: w,
        layouts: _,
        cols: B
      } = this.props, V = (0, z.getBreakpointFromWidth)(w, h), J = (0, z.getColsFromBreakpoint)(V, B), le = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, z.findOrGenerateResponsiveLayout)(_, w, V, V, J, le),
        breakpoint: V,
        cols: J
      };
    }
    static getDerivedStateFromProps(h, w) {
      if (!(0, o.deepEqual)(h.layouts, w.layouts)) {
        const {
          breakpoint: _,
          cols: B
        } = w;
        return {
          layout: (0, z.findOrGenerateResponsiveLayout)(h.layouts, h.breakpoints, _, _, B, h.compactType),
          layouts: h.layouts
        };
      }
      return null;
    }
    componentDidUpdate(h) {
      (this.props.width != h.width || this.props.breakpoint !== h.breakpoint || !(0, o.deepEqual)(this.props.breakpoints, h.breakpoints) || !(0, o.deepEqual)(this.props.cols, h.cols)) && this.onWidthChange(h);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(h) {
      const {
        breakpoints: w,
        cols: _,
        layouts: B,
        compactType: V
      } = this.props, J = this.props.breakpoint || (0, z.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), le = this.state.breakpoint, se = (0, z.getColsFromBreakpoint)(J, _), ie = ge({}, B);
      if (le !== J || h.breakpoints !== w || h.cols !== _) {
        le in ie || (ie[le] = (0, u.cloneLayout)(this.state.layout));
        let oe = (0, z.findOrGenerateResponsiveLayout)(ie, w, J, le, se, V);
        oe = (0, u.synchronizeLayoutWithChildren)(oe, this.props.children, se, V, this.props.allowOverlap), ie[J] = oe, this.props.onBreakpointChange(J, se), this.props.onLayoutChange(oe, ie), this.setState({
          breakpoint: J,
          layout: oe,
          cols: se
        });
      }
      const ve = d(this.props.margin, J), _e = d(this.props.containerPadding, J);
      this.props.onWidthChange(this.props.width, ve, se, _e);
    }
    render() {
      const h = this.props, {
        breakpoint: w,
        breakpoints: _,
        cols: B,
        layouts: V,
        margin: J,
        containerPadding: le,
        onBreakpointChange: se,
        onLayoutChange: ie,
        onWidthChange: ve
      } = h, _e = $(h, W);
      return /* @__PURE__ */ s.createElement(C.default, I({}, _e, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: d(J, this.state.breakpoint),
        containerPadding: d(le, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return hi.default = m, we(m, "propTypes", {
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
    layouts(f, h) {
      if (v(f[h]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + v(f[h]));
      Object.keys(f[h]).forEach((w) => {
        if (!(w in f.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, u.validateLayout)(f.layouts[w], "layouts." + w);
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
  }), we(m, "defaultProps", {
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
    onBreakpointChange: u.noop,
    onLayoutChange: u.noop,
    onWidthChange: u.noop
  }), hi;
}
var Pa = {}, ac = function() {
  if (typeof Map < "u")
    return Map;
  function s(c, o) {
    var u = -1;
    return c.some(function(z, C) {
      return z[0] === o ? (u = C, !0) : !1;
    }), u;
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
      }), c.prototype.get = function(o) {
        var u = s(this.__entries__, o), z = this.__entries__[u];
        return z && z[1];
      }, c.prototype.set = function(o, u) {
        var z = s(this.__entries__, o);
        ~z ? this.__entries__[z][1] = u : this.__entries__.push([o, u]);
      }, c.prototype.delete = function(o) {
        var u = this.__entries__, z = s(u, o);
        ~z && u.splice(z, 1);
      }, c.prototype.has = function(o) {
        return !!~s(this.__entries__, o);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(o, u) {
        u === void 0 && (u = null);
        for (var z = 0, C = this.__entries__; z < C.length; z++) {
          var W = C[z];
          o.call(u, W[1], W[0]);
        }
      }, c;
    }()
  );
}(), js = typeof window < "u" && typeof document < "u" && window.document === document, Ra = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Np = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ra) : function(s) {
    return setTimeout(function() {
      return s(Date.now());
    }, 1e3 / 60);
  };
}(), Ap = 2;
function Dp(s, c) {
  var o = !1, u = !1, z = 0;
  function C() {
    o && (o = !1, s()), u && R();
  }
  function W() {
    Np(C);
  }
  function R() {
    var j = Date.now();
    if (o) {
      if (j - z < Ap)
        return;
      u = !0;
    } else
      o = !0, u = !1, setTimeout(W, c);
    z = j;
  }
  return R;
}
var Tp = 20, Mp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Lp = typeof MutationObserver < "u", Ip = (
  /** @class */
  function() {
    function s() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Dp(this.refresh.bind(this), Tp);
    }
    return s.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, s.prototype.removeObserver = function(c) {
      var o = this.observers_, u = o.indexOf(c);
      ~u && o.splice(u, 1), !o.length && this.connected_ && this.disconnect_();
    }, s.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, s.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(o) {
        return o.gatherActive(), o.hasActive();
      });
      return c.forEach(function(o) {
        return o.broadcastActive();
      }), c.length > 0;
    }, s.prototype.connect_ = function() {
      !js || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Lp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, s.prototype.disconnect_ = function() {
      !js || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, s.prototype.onTransitionEnd_ = function(c) {
      var o = c.propertyName, u = o === void 0 ? "" : o, z = Mp.some(function(C) {
        return !!~u.indexOf(C);
      });
      z && this.refresh();
    }, s.getInstance = function() {
      return this.instance_ || (this.instance_ = new s()), this.instance_;
    }, s.instance_ = null, s;
  }()
), oc = function(s, c) {
  for (var o = 0, u = Object.keys(c); o < u.length; o++) {
    var z = u[o];
    Object.defineProperty(s, z, {
      value: c[z],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return s;
}, wr = function(s) {
  var c = s && s.ownerDocument && s.ownerDocument.defaultView;
  return c || Ra;
}, sc = Ta(0, 0, 0, 0);
function ja(s) {
  return parseFloat(s) || 0;
}
function $d(s) {
  for (var c = [], o = 1; o < arguments.length; o++)
    c[o - 1] = arguments[o];
  return c.reduce(function(u, z) {
    var C = s["border-" + z + "-width"];
    return u + ja(C);
  }, 0);
}
function Hp(s) {
  for (var c = ["top", "right", "bottom", "left"], o = {}, u = 0, z = c; u < z.length; u++) {
    var C = z[u], W = s["padding-" + C];
    o[C] = ja(W);
  }
  return o;
}
function Wp(s) {
  var c = s.getBBox();
  return Ta(0, 0, c.width, c.height);
}
function Fp(s) {
  var c = s.clientWidth, o = s.clientHeight;
  if (!c && !o)
    return sc;
  var u = wr(s).getComputedStyle(s), z = Hp(u), C = z.left + z.right, W = z.top + z.bottom, R = ja(u.width), j = ja(u.height);
  if (u.boxSizing === "border-box" && (Math.round(R + C) !== c && (R -= $d(u, "left", "right") + C), Math.round(j + W) !== o && (j -= $d(u, "top", "bottom") + W)), !Bp(s)) {
    var I = Math.round(R + C) - c, $ = Math.round(j + W) - o;
    Math.abs(I) !== 1 && (R -= I), Math.abs($) !== 1 && (j -= $);
  }
  return Ta(z.left, z.top, R, j);
}
var qp = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(s) {
    return s instanceof wr(s).SVGGraphicsElement;
  } : function(s) {
    return s instanceof wr(s).SVGElement && typeof s.getBBox == "function";
  };
}();
function Bp(s) {
  return s === wr(s).document.documentElement;
}
function Up(s) {
  return js ? qp(s) ? Wp(s) : Fp(s) : sc;
}
function Gp(s) {
  var c = s.x, o = s.y, u = s.width, z = s.height, C = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, W = Object.create(C.prototype);
  return oc(W, {
    x: c,
    y: o,
    width: u,
    height: z,
    top: o,
    right: c + u,
    bottom: z + o,
    left: c
  }), W;
}
function Ta(s, c, o, u) {
  return { x: s, y: c, width: o, height: u };
}
var Vp = (
  /** @class */
  function() {
    function s(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ta(0, 0, 0, 0), this.target = c;
    }
    return s.prototype.isActive = function() {
      var c = Up(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, s.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, s;
  }()
), $p = (
  /** @class */
  /* @__PURE__ */ function() {
    function s(c, o) {
      var u = Gp(o);
      oc(this, { target: c, contentRect: u });
    }
    return s;
  }()
), Qp = (
  /** @class */
  function() {
    function s(c, o, u) {
      if (this.activeObservations_ = [], this.observations_ = new ac(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = o, this.callbackCtx_ = u;
    }
    return s.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof wr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var o = this.observations_;
        o.has(c) || (o.set(c, new Vp(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, s.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof wr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var o = this.observations_;
        o.has(c) && (o.delete(c), o.size || this.controller_.removeObserver(this));
      }
    }, s.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, s.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(o) {
        o.isActive() && c.activeObservations_.push(o);
      });
    }, s.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, o = this.activeObservations_.map(function(u) {
          return new $p(u.target, u.broadcastRect());
        });
        this.callback_.call(c, o, c), this.clearActive();
      }
    }, s.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, s.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, s;
  }()
), lc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ac(), uc = (
  /** @class */
  /* @__PURE__ */ function() {
    function s(c) {
      if (!(this instanceof s))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var o = Ip.getInstance(), u = new Qp(c, o, this);
      lc.set(this, u);
    }
    return s;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(s) {
  uc.prototype[s] = function() {
    var c;
    return (c = lc.get(this))[s].apply(c, arguments);
  };
});
var Yp = function() {
  return typeof Ra.ResizeObserver < "u" ? Ra.ResizeObserver : uc;
}();
const Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yp
}, Symbol.toStringTag, { value: "Module" })), Kp = /* @__PURE__ */ cp(Xp);
var Qd;
function Zp() {
  if (Qd) return Pa;
  Qd = 1, Object.defineProperty(Pa, "__esModule", {
    value: !0
  }), Pa.default = we;
  var s = W(Pt()), c = C(/* @__PURE__ */ Nn()), o = C(Kp), u = C(Da());
  const z = ["measureBeforeMount"];
  function C(Y) {
    return Y && Y.__esModule ? Y : { default: Y };
  }
  function W(Y, L) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (W = function(m, f) {
      if (!f && m && m.__esModule) return m;
      var h, w, _ = { __proto__: null, default: m };
      if (m === null || typeof m != "object" && typeof m != "function") return _;
      if (h = f ? d : v) {
        if (h.has(m)) return h.get(m);
        h.set(m, _);
      }
      for (const B in m) B !== "default" && {}.hasOwnProperty.call(m, B) && ((w = (h = Object.defineProperty) && Object.getOwnPropertyDescriptor(m, B)) && (w.get || w.set) ? h(_, B, w) : _[B] = m[B]);
      return _;
    })(Y, L);
  }
  function R() {
    return R = Object.assign ? Object.assign.bind() : function(Y) {
      for (var L = 1; L < arguments.length; L++) {
        var v = arguments[L];
        for (var d in v) ({}).hasOwnProperty.call(v, d) && (Y[d] = v[d]);
      }
      return Y;
    }, R.apply(null, arguments);
  }
  function j(Y, L) {
    if (Y == null) return {};
    var v, d, m = I(Y, L);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(Y);
      for (d = 0; d < f.length; d++) v = f[d], L.indexOf(v) === -1 && {}.propertyIsEnumerable.call(Y, v) && (m[v] = Y[v]);
    }
    return m;
  }
  function I(Y, L) {
    if (Y == null) return {};
    var v = {};
    for (var d in Y) if ({}.hasOwnProperty.call(Y, d)) {
      if (L.indexOf(d) !== -1) continue;
      v[d] = Y[d];
    }
    return v;
  }
  function $(Y, L, v) {
    return (L = O(L)) in Y ? Object.defineProperty(Y, L, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : Y[L] = v, Y;
  }
  function O(Y) {
    var L = G(Y, "string");
    return typeof L == "symbol" ? L : L + "";
  }
  function G(Y, L) {
    if (typeof Y != "object" || !Y) return Y;
    var v = Y[Symbol.toPrimitive];
    if (v !== void 0) {
      var d = v.call(Y, L);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (L === "string" ? String : Number)(Y);
  }
  const ge = "react-grid-layout";
  function we(Y) {
    var L;
    return L = class extends s.Component {
      constructor() {
        super(...arguments), $(this, "state", {
          width: 1280
        }), $(this, "elementRef", /* @__PURE__ */ s.createRef()), $(this, "mounted", !1), $(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new o.default((m) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const h = m[0].contentRect.width;
            this.setState({
              width: h
            });
          }
        });
        const d = this.elementRef.current;
        d instanceof HTMLElement && this.resizeObserver.observe(d);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const d = this.elementRef.current;
        d instanceof HTMLElement && this.resizeObserver.unobserve(d), this.resizeObserver.disconnect();
      }
      render() {
        const d = this.props, {
          measureBeforeMount: m
        } = d, f = j(d, z);
        return m && !this.mounted ? /* @__PURE__ */ s.createElement("div", {
          className: (0, u.default)(this.props.className, ge),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ s.createElement(Y, R({
          innerRef: this.elementRef
        }, f, this.state));
      }
    }, $(L, "defaultProps", {
      measureBeforeMount: !1
    }), $(L, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), L;
  }
  return Pa;
}
var Yd;
function Jp() {
  return Yd || (Yd = 1, function(s) {
    s.exports = rc().default, s.exports.utils = xr(), s.exports.calculateUtils = Ms(), s.exports.Responsive = jp().default, s.exports.Responsive.utils = ic(), s.exports.WidthProvider = Zp().default;
  }(zs)), zs.exports;
}
var Xd = Jp();
const eh = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, dc = { XS: { w: 2, h: 2 }, S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, We = (s, c, o, u, z) => ({ i: s, x: c, y: o, w: u, h: z, minW: 1, minH: 1, maxW: 12, maxH: 12 }), Oa = {
  lg: [We("activity-history", 0, 0, 3, 4), We("automations", 3, 0, 3, 4), We("backup-restore", 6, 0, 3, 4), We("support-argus", 9, 0, 2, 2), We("security-status", 9, 2, 3, 3), We("access-control", 0, 5, 6, 3), We("alarm-configuration", 6, 5, 6, 8)],
  md: [We("activity-history", 0, 0, 4, 4), We("automations", 4, 0, 4, 4), We("backup-restore", 0, 4, 4, 4), We("support-argus", 4, 4, 2, 2), We("access-control", 4, 6, 4, 3), We("alarm-configuration", 0, 9, 8, 8), We("security-status", 0, 17, 4, 3)],
  sm: [We("activity-history", 0, 0, 4, 4), We("automations", 0, 4, 4, 4), We("backup-restore", 0, 8, 4, 4), We("support-argus", 0, 12, 2, 2), We("access-control", 0, 14, 4, 3), We("alarm-configuration", 0, 17, 4, 8), We("security-status", 0, 25, 4, 3)],
  xs: [We("activity-history", 0, 0, 2, 4), We("automations", 0, 4, 2, 4), We("backup-restore", 0, 8, 2, 4), We("support-argus", 0, 12, 2, 2), We("access-control", 0, 14, 2, 3), We("alarm-configuration", 0, 17, 2, 8), We("security-status", 0, 25, 2, 3)],
  xxs: [We("activity-history", 0, 0, 2, 4), We("automations", 0, 4, 2, 4), We("backup-restore", 0, 8, 2, 4), We("support-argus", 0, 12, 2, 2), We("access-control", 0, 14, 2, 3), We("alarm-configuration", 0, 17, 2, 8), We("security-status", 0, 25, 2, 3)]
};
function Ns(s, c, o) {
  return Object.entries(dc).map(([u, z]) => ({ size: u, distance: Math.abs(Math.min(z.w, o) - s) + Math.abs(z.h - c) })).sort((u, z) => u.distance - z.distance)[0]?.size ?? "S";
}
function cc(s, c) {
  const o = dc[s];
  return { w: Math.min(o.w, c), h: o.h };
}
function th(s, c) {
  const o = Ns(s.w, s.h, c), u = cc(o, c);
  return { ...s, w: u.w, h: u.h, x: Math.max(0, Math.min(s.x, c - u.w)), size: o };
}
function As(s, c) {
  return s.some((o) => o.i !== c.i && c.x < o.x + o.w && c.x + c.w > o.x && c.y < o.y + o.h && c.y + c.h > o.y);
}
function nh(s, c, o) {
  for (let u = 0; u < 240; u++) for (let z = 0; z <= o - c.w; z++) {
    const C = { ...c, x: z, y: u };
    if (!As(s, C)) return C;
  }
  return { ...c, x: 0, y: Math.max(0, ...s.map((u) => u.y + u.h)) };
}
function Sr(s) {
  const c = {};
  return Object.keys(cn).forEach((o) => {
    const u = cn[o], z = Array.isArray(s?.[o]) ? s[o] : [], C = new Map(z.map((I) => [I.i, I])), W = (Oa[o] || []).map((I) => {
      const $ = C.get(I.i);
      if (!$) return { ...I };
      const O = Math.min(Math.max(1, $.w), u);
      return { ...I, ...$, w: O, x: Math.max(0, Math.min($.x, u - O)), y: Math.max(0, $.y) };
    }), R = new Set(W.map((I) => I.i)), j = z.filter((I) => !R.has(I.i)).map((I) => ({ ...I, w: Math.min(Math.max(1, I.w), u), x: Math.max(0, Math.min(I.x, u - Math.min(I.w, u))), y: Math.max(0, I.y) }));
    c[o] = [...W, ...j];
  }), c;
}
class rh {
  key(c, o) {
    return `argus:dashboard-layout:${c}:${o}`;
  }
  read(c, o) {
    try {
      const u = JSON.parse(localStorage.getItem(this.key(c, o)) || "null");
      return u?.layoutVersion != null && u.layoutVersion >= 1 ? u : null;
    } catch {
      return null;
    }
  }
  write(c, o, u) {
    localStorage.setItem(this.key(c, o), JSON.stringify(u));
  }
  async load(c, o) {
    const u = this.read(c, o);
    return u ? Sr(u.layouts) : null;
  }
  async save(c, o, u) {
    const z = this.read(c, o);
    this.write(c, o, { layoutVersion: 1, layouts: u, visibility: z?.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(c, o) {
    return this.read(c, o)?.visibility ?? null;
  }
  async saveVisibility(c, o, u) {
    const z = this.read(c, o);
    this.write(c, o, { layoutVersion: 1, layouts: z?.layouts ?? Sr(null), visibility: u, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(c, o) {
    localStorage.removeItem(this.key(c, o));
  }
}
const Na = ["es", "en", "fr", "pt", "it", "zh-Hans", "zh-Hant", "hi", "ar", "ko", "ja", "uk"], fc = {
  es: "Español",
  en: "English",
  fr: "Français",
  pt: "Português",
  it: "Italiano",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  hi: "हिन्दी",
  ar: "العربية",
  ko: "한국어",
  ja: "日本語",
  uk: "Українська"
}, pc = {
  "app.panel": "Panel de seguridad",
  "app.instance": "Instancia",
  "app.language": "Idioma",
  "app.none": "No hay instancias Argus configuradas.",
  "app.setup": "Configura Argus",
  "app.profile": "Selecciona un perfil",
  "app.complete": "Completar configuración inicial",
  "widget.security": "Estado de seguridad",
  "widget.activity": "Actividad",
  "widget.automations": "Automatizaciones",
  "widget.access": "Acceso y SOS",
  "widget.alarm": "Configuración de alarma",
  "widget.backup": "Respaldo",
  "widget.support": "Apoya a Argus",
  "action.home": "Armar casa",
  "action.away": "Armar fuera",
  "action.disarm": "Desarmar",
  "action.refresh": "Actualizar",
  "action.export": "Exportar",
  "action.restore": "Restaurar",
  "action.logout": "Cerrar sesión",
  "action.save": "Guardar",
  "action.delete": "Eliminar",
  "action.enable": "Activar",
  "action.disable": "Desactivar",
  "action.open": "Abrir en Home Assistant",
  "action.manage": "Gestionar automatizaciones en Home Assistant",
  "action.addProfile": "Añadir perfil",
  "action.addRule": "Añadir regla",
  "action.saveMode": "Guardar modo",
  "action.saveName": "Guardar nombre",
  "action.saveAdvanced": "Guardar controles avanzados",
  "action.clear": "Borrar registro",
  "status.review": "Estado en revisión",
  "status.unavailable": "no disponible",
  "status.active": "activo",
  "status.disabled": "desactivado",
  "status.enabled": "Activa",
  "status.inactive": "Desactivada",
  "status.configured": "(configurado)",
  "status.empty": "Sin actividad reciente",
  "status.event": "Evento",
  "status.incident": "Incidencia",
  "status.open": "abierta",
  "sos.title": "Acciones SOS",
  "sos.save": "Guardar acciones SOS",
  "sos.saving": "Guardando…",
  "sos.none": "No hay salidas SOS compatibles.",
  "sos.saved": "Acciones SOS guardadas para esta instancia.",
  "sos.permission": "Tu perfil necesita el permiso «Gestionar SOS» para guardar estas salidas.",
  "sos.failed": "No se pudieron guardar las acciones SOS. Verifica el permiso Gestionar SOS.",
  "automation.readOnly": "Automatizaciones de Home Assistant relacionadas con esta instancia (solo lectura).",
  "automation.empty": "No hay automatizaciones de Home Assistant relacionadas con esta instancia.",
  "automation.noCrud": "Argus no crea ni modifica automatizaciones. Esta lista es solo de lectura para la instancia seleccionada.",
  "automation.dashboard": "Abrir Automatizaciones de Home Assistant",
  "admin.title": "Administración avanzada",
  "admin.users": "Usuarios, PIN y presencia",
  "admin.modes": "Modos, sensores y sirenas",
  "admin.automations": "Automatizaciones de Home Assistant",
  "admin.personalization": "Personalización multimedia y temas",
  "admin.forensics": "Incidencias y forense",
  "admin.advanced": "Configuración avanzada",
  "admin.profiles": "Perfiles y permisos",
  "admin.presence": "Presencia",
  "admin.incidents": "Incidencias",
  "admin.audit": "Auditoría",
  "field.name": "Nombre",
  "field.rule": "Nombre de regla",
  "field.home": "Nombre del hogar",
  "field.noHa": "Sin cuenta HA",
  "field.standard": "Estándar",
  "field.admin": "Administrador",
  "field.arming": "Retardo de armado (segundos)",
  "field.entry": "Retardo de entrada (segundos)",
  "field.closed": "Exigir sensores cerrados antes de armar",
  "field.mqtt": "Publicar estado MQTT",
  "field.people": "Personas que activan la regla",
  "field.sensors": "Sensores activos",
  "field.bypassed": "Sensores en bypass",
  "field.entrySensors": "Sensores con retraso de entrada",
  "field.sirens": "Sirenas y salidas",
  "field.panels": "Paneles externos",
  "field.lights": "Luces de alarma",
  "field.lightOptions": "Color y destello de luces de alarma",
  "field.color": "Color de {entity}",
  "field.noFlash": "Sin destello",
  "field.gentle": "Destello suave",
  "field.rapid": "Destello rápido",
  "field.background": "Argus usa un único fondo predeterminado fijo. Los fondos personalizados y el clima animado no se ejecutan ni se guardan.",
  "field.codes": "Los códigos existentes no se exponen. Escribe un valor sólo para sustituirlo; deja el campo vacío para conservarlo.",
  "field.armCode": "Requerir código para armar",
  "field.guest": "Habilitar código de invitado",
  "field.newGuest": "Nuevo código de invitado",
  "field.duress": "PIN de coacción {configured}",
  "dashboard.loading": "Cargando tablero…",
  "dashboard.edit": "✥ Editar tablero",
  "dashboard.done": "✓ Listo",
  "dashboard.reset": "Restablecer diseño",
  "dashboard.resetWidget": "Restablecer widget",
  "dashboard.hide": "Ocultar widget",
  "dashboard.size": "Tamaño",
  "dashboard.options": "Opciones",
  "dashboard.drag": "Arrastrar para mover",
  "dashboard.move": "Mover {widget}",
  "dashboard.hidden": "Widgets ocultos",
  "dashboard.show": "Mostrar {widget}",
  "dashboard.finished": "Edición finalizada",
  "dashboard.restored": "Diseño predeterminado restaurado",
  "dashboard.saved": "Posición guardada",
  "dashboard.blocked": "Posición bloqueada por colisión",
  "dashboard.resized": "Tamaño {size}",
  "dashboard.widgetRestored": "Widget restablecido",
  "dashboard.visible": "Widget visible",
  "dashboard.invisible": "Widget oculto",
  "dashboard.confirm": "¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?",
  "dashboard.toolbar": "Edición del tablero",
  "profile.active": "Perfil activo: {name}",
  "profile.accessPin": "PIN de acceso para {name}",
  "profile.removePin": "PIN para {name}; vacío elimina",
  "profile.adminName": "Nombre del administrador Argus",
  "profile.disarmPin": "PIN de desarmado (si aplica)",
  "error.unknown": "Se produjo un error inesperado.",
  "error.permission": "No tienes permiso para realizar esta acción.",
  "error.notFound": "No se encontró la instancia de Argus.",
  "error.light": "La luz seleccionada no está disponible en Home Assistant.",
  "error.background": "Argus utiliza un fondo predeterminado fijo.",
  "error.widgetTitle": "⚠️ Error del widget",
  "error.widgetBody": "No se pudo renderizar un componente.",
  "activity.armed": "Sistema armado",
  "activity.disarmed": "Sistema desarmado",
  "activity.cancelled": "Armado cancelado",
  "activity.rejected": "Armado rechazado",
  "activity.restored": "Configuración restaurada",
  "activity.cleared": "Registro de auditoría borrado",
  "activity.automation": "Automatización ejecutada",
  "activity.updated": "Configuración actualizada",
  "activity.historic": "Evento histórico"
}, ih = {
  "app.panel": "Security panel",
  "app.instance": "Instance",
  "app.language": "Language",
  "app.none": "No Argus instances are configured.",
  "app.setup": "Set up Argus",
  "app.profile": "Select a profile",
  "app.complete": "Complete initial setup",
  "widget.security": "Security status",
  "widget.activity": "Activity",
  "widget.automations": "Automations",
  "widget.access": "Access and SOS",
  "widget.alarm": "Alarm configuration",
  "widget.backup": "Backup",
  "widget.support": "Support Argus",
  "action.home": "Arm home",
  "action.away": "Arm away",
  "action.disarm": "Disarm",
  "action.refresh": "Refresh",
  "action.export": "Export",
  "action.restore": "Restore",
  "action.logout": "Sign out",
  "action.save": "Save",
  "action.delete": "Delete",
  "action.enable": "Enable",
  "action.disable": "Disable",
  "action.open": "Open in Home Assistant",
  "action.manage": "Manage automations in Home Assistant",
  "action.addProfile": "Add profile",
  "action.addRule": "Add rule",
  "action.saveMode": "Save mode",
  "action.saveName": "Save name",
  "action.saveAdvanced": "Save advanced controls",
  "action.clear": "Clear log",
  "status.review": "Status under review",
  "status.unavailable": "unavailable",
  "status.active": "active",
  "status.disabled": "disabled",
  "status.enabled": "Enabled",
  "status.inactive": "Disabled",
  "status.configured": "(configured)",
  "status.empty": "No recent activity",
  "status.event": "Event",
  "status.incident": "Incident",
  "status.open": "open",
  "sos.title": "SOS actions",
  "sos.save": "Save SOS actions",
  "sos.saving": "Saving…",
  "sos.none": "No compatible SOS outputs.",
  "sos.saved": "SOS actions saved for this instance.",
  "sos.permission": "Your profile needs the “Manage SOS” permission to save these outputs.",
  "sos.failed": "Could not save SOS actions. Check the Manage SOS permission.",
  "automation.readOnly": "Home Assistant automations related to this instance (read-only).",
  "automation.empty": "No Home Assistant automations are related to this instance.",
  "automation.noCrud": "Argus does not create or modify automations. This list is read-only for the selected instance.",
  "automation.dashboard": "Open Home Assistant Automations",
  "admin.title": "Advanced administration",
  "admin.users": "Users, PIN and presence",
  "admin.modes": "Modes, sensors and sirens",
  "admin.automations": "Home Assistant automations",
  "admin.personalization": "Multimedia and themes",
  "admin.forensics": "Incidents and forensics",
  "admin.advanced": "Advanced configuration",
  "admin.profiles": "Profiles and permissions",
  "admin.presence": "Presence",
  "admin.incidents": "Incidents",
  "admin.audit": "Audit",
  "field.name": "Name",
  "field.rule": "Rule name",
  "field.home": "Home name",
  "field.noHa": "No HA account",
  "field.standard": "Standard",
  "field.admin": "Administrator",
  "field.arming": "Arming delay (seconds)",
  "field.entry": "Entry delay (seconds)",
  "field.closed": "Require closed sensors before arming",
  "field.mqtt": "Publish MQTT status",
  "field.people": "People that trigger the rule",
  "field.sensors": "Active sensors",
  "field.bypassed": "Bypassed sensors",
  "field.entrySensors": "Sensors with entry delay",
  "field.sirens": "Sirens and outputs",
  "field.panels": "External panels",
  "field.lights": "Alarm lights",
  "field.lightOptions": "Alarm light colour and flash",
  "field.color": "Colour for {entity}",
  "field.noFlash": "No flash",
  "field.gentle": "Gentle flash",
  "field.rapid": "Rapid flash",
  "field.background": "Argus uses one fixed default background. Custom backgrounds and animated weather do not run or persist.",
  "field.codes": "Existing codes are not displayed. Enter a value only to replace it; leave it empty to keep it.",
  "field.armCode": "Require a code to arm",
  "field.guest": "Enable guest code",
  "field.newGuest": "New guest code",
  "field.duress": "Duress PIN {configured}",
  "dashboard.loading": "Loading dashboard…",
  "dashboard.edit": "✥ Edit dashboard",
  "dashboard.done": "✓ Done",
  "dashboard.reset": "Reset layout",
  "dashboard.resetWidget": "Reset widget",
  "dashboard.hide": "Hide widget",
  "dashboard.size": "Size",
  "dashboard.options": "Options",
  "dashboard.drag": "Drag to move",
  "dashboard.move": "Move {widget}",
  "dashboard.hidden": "Hidden widgets",
  "dashboard.show": "Show {widget}",
  "dashboard.finished": "Editing finished",
  "dashboard.restored": "Default layout restored",
  "dashboard.saved": "Position saved",
  "dashboard.blocked": "Position blocked by collision",
  "dashboard.resized": "Size {size}",
  "dashboard.widgetRestored": "Widget restored",
  "dashboard.visible": "Widget visible",
  "dashboard.invisible": "Widget hidden",
  "dashboard.confirm": "Reset only the dashboard positions, sizes, and visibility?",
  "dashboard.toolbar": "Dashboard editing",
  "profile.active": "Active profile: {name}",
  "profile.accessPin": "Access PIN for {name}",
  "profile.removePin": "PIN for {name}; leave empty to remove",
  "profile.adminName": "Argus administrator name",
  "profile.disarmPin": "Disarm PIN (if applicable)",
  "error.unknown": "An unexpected error occurred.",
  "error.permission": "You do not have permission to perform this action.",
  "error.notFound": "Argus instance was not found.",
  "error.light": "The selected light is not available in Home Assistant.",
  "error.background": "Argus uses a fixed default background.",
  "error.widgetTitle": "⚠️ Widget error",
  "error.widgetBody": "A component could not be rendered.",
  "activity.armed": "System armed",
  "activity.disarmed": "System disarmed",
  "activity.cancelled": "Arming cancelled",
  "activity.rejected": "Arming rejected",
  "activity.restored": "Configuration restored",
  "activity.cleared": "Audit log cleared",
  "activity.automation": "Automation executed",
  "activity.updated": "Configuration updated",
  "activity.historic": "Historical event"
}, ah = {
  "app.panel": "Panneau de sécurité",
  "app.instance": "Instance",
  "app.language": "Langue",
  "app.none": "Aucune instance Argus n’est configurée.",
  "app.setup": "Configurer Argus",
  "app.profile": "Sélectionnez un profil",
  "app.complete": "Terminer la configuration initiale",
  "widget.security": "État de sécurité",
  "widget.activity": "Activité",
  "widget.automations": "Automatisations",
  "widget.access": "Accès et SOS",
  "widget.alarm": "Configuration de l’alarme",
  "widget.backup": "Sauvegarde",
  "widget.support": "Soutenir Argus",
  "action.home": "Armer à domicile",
  "action.away": "Armer à l’extérieur",
  "action.disarm": "Désarmer",
  "action.refresh": "Actualiser",
  "action.export": "Exporter",
  "action.restore": "Restaurer",
  "action.logout": "Se déconnecter",
  "action.save": "Enregistrer",
  "action.delete": "Supprimer",
  "action.enable": "Activer",
  "action.disable": "Désactiver",
  "action.open": "Ouvrir dans Home Assistant",
  "action.manage": "Gérer les automatisations dans Home Assistant",
  "action.addProfile": "Ajouter un profil",
  "action.addRule": "Ajouter une règle",
  "action.saveMode": "Enregistrer le mode",
  "action.saveName": "Enregistrer le nom",
  "action.saveAdvanced": "Enregistrer les paramètres avancés",
  "action.clear": "Effacer le journal",
  "status.review": "État en cours d’examen",
  "status.unavailable": "indisponible",
  "status.active": "actif",
  "status.disabled": "désactivé",
  "status.enabled": "Activée",
  "status.inactive": "Désactivée",
  "status.configured": "(configuré)",
  "status.empty": "Aucune activité récente",
  "status.event": "Événement",
  "status.incident": "Incident",
  "status.open": "ouvert",
  "sos.title": "Actions SOS",
  "sos.save": "Enregistrer les actions SOS",
  "sos.saving": "Enregistrement…",
  "sos.none": "Aucune sortie SOS compatible.",
  "sos.saved": "Actions SOS enregistrées pour cette instance.",
  "sos.permission": "Votre profil nécessite la permission « Gérer SOS » pour enregistrer ces sorties.",
  "sos.failed": "Impossible d’enregistrer les actions SOS. Vérifiez la permission Gérer SOS.",
  "automation.readOnly": "Automatisations Home Assistant associées à cette instance (lecture seule).",
  "automation.empty": "Aucune automatisation Home Assistant n’est associée à cette instance.",
  "automation.noCrud": "Argus ne crée ni ne modifie d’automatisations. Cette liste est en lecture seule pour l’instance sélectionnée.",
  "automation.dashboard": "Ouvrir les Automatisations Home Assistant",
  "admin.title": "Administration avancée",
  "admin.users": "Utilisateurs, PIN et présence",
  "admin.modes": "Modes, capteurs et sirènes",
  "admin.automations": "Automatisations Home Assistant",
  "admin.personalization": "Multimédia et thèmes",
  "admin.forensics": "Incidents et criminalistique",
  "admin.advanced": "Configuration avancée",
  "admin.profiles": "Profils et permissions",
  "admin.presence": "Présence",
  "admin.incidents": "Incidents",
  "admin.audit": "Audit",
  "field.name": "Nom",
  "field.rule": "Nom de la règle",
  "field.home": "Nom du domicile",
  "field.noHa": "Aucun compte HA",
  "field.standard": "Standard",
  "field.admin": "Administrateur",
  "field.arming": "Délai d’armement (secondes)",
  "field.entry": "Délai d’entrée (secondes)",
  "field.closed": "Exiger la fermeture des capteurs avant l’armement",
  "field.mqtt": "Publier l’état MQTT",
  "field.people": "Personnes déclenchant la règle",
  "field.sensors": "Capteurs actifs",
  "field.bypassed": "Capteurs contournés",
  "field.entrySensors": "Capteurs avec délai d’entrée",
  "field.sirens": "Sirènes et sorties",
  "field.panels": "Panneaux externes",
  "field.lights": "Lumières d’alarme",
  "field.lightOptions": "Couleur et clignotement des lumières",
  "field.color": "Couleur de {entity}",
  "field.noFlash": "Sans clignotement",
  "field.gentle": "Clignotement doux",
  "field.rapid": "Clignotement rapide",
  "field.background": "Argus utilise un arrière-plan fixe par défaut. Les fonds personnalisés et la météo animée ne sont pas exécutés ni enregistrés.",
  "field.codes": "Les codes existants ne sont pas affichés. Saisissez une valeur uniquement pour la remplacer ; laissez vide pour la conserver.",
  "field.armCode": "Exiger un code pour armer",
  "field.guest": "Activer le code invité",
  "field.newGuest": "Nouveau code invité",
  "field.duress": "PIN sous contrainte {configured}",
  "dashboard.loading": "Chargement du tableau de bord…",
  "dashboard.edit": "✥ Modifier le tableau",
  "dashboard.done": "✓ Terminé",
  "dashboard.reset": "Réinitialiser la disposition",
  "dashboard.resetWidget": "Réinitialiser le widget",
  "dashboard.hide": "Masquer le widget",
  "dashboard.size": "Taille",
  "dashboard.options": "Options",
  "dashboard.drag": "Faire glisser pour déplacer",
  "dashboard.move": "Déplacer {widget}",
  "dashboard.hidden": "Widgets masqués",
  "dashboard.show": "Afficher {widget}",
  "dashboard.finished": "Modification terminée",
  "dashboard.restored": "Disposition par défaut restaurée",
  "dashboard.saved": "Position enregistrée",
  "dashboard.blocked": "Position bloquée par collision",
  "dashboard.resized": "Taille {size}",
  "dashboard.widgetRestored": "Widget réinitialisé",
  "dashboard.visible": "Widget visible",
  "dashboard.invisible": "Widget masqué",
  "dashboard.confirm": "Réinitialiser uniquement les positions, tailles et visibilité du tableau ?",
  "dashboard.toolbar": "Édition du tableau de bord",
  "profile.active": "Profil actif : {name}",
  "profile.accessPin": "PIN d’accès pour {name}",
  "profile.removePin": "PIN pour {name} ; laisser vide pour supprimer",
  "profile.adminName": "Nom de l’administrateur Argus",
  "profile.disarmPin": "PIN de désarmement (si applicable)",
  "error.unknown": "Une erreur inattendue est survenue.",
  "error.permission": "Vous n’avez pas la permission d’effectuer cette action.",
  "error.notFound": "L’instance Argus est introuvable.",
  "error.light": "La lumière sélectionnée n’est pas disponible dans Home Assistant.",
  "error.background": "Argus utilise un arrière-plan par défaut fixe.",
  "error.widgetTitle": "⚠️ Erreur du widget",
  "error.widgetBody": "Impossible de restituer un composant.",
  "activity.armed": "Système armé",
  "activity.disarmed": "Système désarmé",
  "activity.cancelled": "Armement annulé",
  "activity.rejected": "Armement rejeté",
  "activity.restored": "Configuration restaurée",
  "activity.cleared": "Journal d’audit effacé",
  "activity.automation": "Automatisation exécutée",
  "activity.updated": "Configuration mise à jour",
  "activity.historic": "Événement historique"
}, oh = {
  "app.panel": "Painel de segurança",
  "app.instance": "Instância",
  "app.language": "Idioma",
  "app.none": "Nenhuma instância Argus está configurada.",
  "app.setup": "Configurar Argus",
  "app.profile": "Selecione um perfil",
  "app.complete": "Concluir configuração inicial",
  "widget.security": "Estado de segurança",
  "widget.activity": "Atividade",
  "widget.automations": "Automações",
  "widget.access": "Acesso e SOS",
  "widget.alarm": "Configuração do alarme",
  "widget.backup": "Backup",
  "widget.support": "Apoie o Argus",
  "action.home": "Armar em casa",
  "action.away": "Armar fora",
  "action.disarm": "Desarmar",
  "action.refresh": "Atualizar",
  "action.export": "Exportar",
  "action.restore": "Restaurar",
  "action.logout": "Sair",
  "action.save": "Salvar",
  "action.delete": "Excluir",
  "action.enable": "Ativar",
  "action.disable": "Desativar",
  "action.open": "Abrir no Home Assistant",
  "action.manage": "Gerenciar automações no Home Assistant",
  "action.addProfile": "Adicionar perfil",
  "action.addRule": "Adicionar regra",
  "action.saveMode": "Salvar modo",
  "action.saveName": "Salvar nome",
  "action.saveAdvanced": "Salvar controles avançados",
  "action.clear": "Limpar registro",
  "status.review": "Estado em revisão",
  "status.unavailable": "indisponível",
  "status.active": "ativo",
  "status.disabled": "desativado",
  "status.enabled": "Ativada",
  "status.inactive": "Desativada",
  "status.configured": "(configurado)",
  "status.empty": "Sem atividade recente",
  "status.event": "Evento",
  "status.incident": "Incidente",
  "status.open": "aberto",
  "sos.title": "Ações SOS",
  "sos.save": "Salvar ações SOS",
  "sos.saving": "Salvando…",
  "sos.none": "Nenhuma saída SOS compatível.",
  "sos.saved": "Ações SOS salvas para esta instância.",
  "sos.permission": "Seu perfil precisa da permissão “Gerenciar SOS” para salvar essas saídas.",
  "sos.failed": "Não foi possível salvar as ações SOS. Verifique a permissão Gerenciar SOS.",
  "automation.readOnly": "Automações do Home Assistant relacionadas a esta instância (somente leitura).",
  "automation.empty": "Nenhuma automação do Home Assistant relacionada a esta instância.",
  "automation.noCrud": "O Argus não cria nem edita automações. Esta lista é apenas para leitura da instância selecionada.",
  "automation.dashboard": "Abrir Automações do Home Assistant",
  "admin.title": "Administração avançada",
  "admin.users": "Usuários, PIN e presença",
  "admin.modes": "Modos, sensores e sirenes",
  "admin.automations": "Automações do Home Assistant",
  "admin.personalization": "Multimídia e temas",
  "admin.forensics": "Incidentes e perícia",
  "admin.advanced": "Configuração avançada",
  "admin.profiles": "Perfis e permissões",
  "admin.presence": "Presença",
  "admin.incidents": "Incidentes",
  "admin.audit": "Auditoria",
  "field.name": "Nome",
  "field.rule": "Nome da regra",
  "field.home": "Nome da casa",
  "field.noHa": "Sem conta HA",
  "field.standard": "Padrão",
  "field.admin": "Administrador",
  "field.arming": "Atraso de armação (segundos)",
  "field.entry": "Atraso de entrada (segundos)",
  "field.closed": "Exigir sensores fechados antes de armar",
  "field.mqtt": "Publicar estado MQTT",
  "field.people": "Pessoas que acionam a regra",
  "field.sensors": "Sensores ativos",
  "field.bypassed": "Sensores ignorados (bypass)",
  "field.entrySensors": "Sensores com atraso de entrada",
  "field.sirens": "Sirenes e saídas",
  "field.panels": "Painéis externos",
  "field.lights": "Luzes de alarme",
  "field.lightOptions": "Cor e intermitência das luzes",
  "field.color": "Cor de {entity}",
  "field.noFlash": "Sem piscar",
  "field.gentle": "Piscar suave",
  "field.rapid": "Piscar rápido",
  "field.background": "O Argus utiliza um plano de fundo padrão fixo. Planos de fundo personalizados e clima animado não são executados nem salvos.",
  "field.codes": "Códigos existentes não são exibidos. Digite um valor apenas para substituí-lo; deixe em branco para manter.",
  "field.armCode": "Exigir código para armar",
  "field.guest": "Habilitar código de convidado",
  "field.newGuest": "Novo código de convidado",
  "field.duress": "PIN de coação {configured}",
  "dashboard.loading": "Carregando painel…",
  "dashboard.edit": "✥ Editar painel",
  "dashboard.done": "✓ Concluído",
  "dashboard.reset": "Redefinir layout",
  "dashboard.resetWidget": "Redefinir widget",
  "dashboard.hide": "Ocultar widget",
  "dashboard.size": "Tamanho",
  "dashboard.options": "Opções",
  "dashboard.drag": "Arrastar para mover",
  "dashboard.move": "Mover {widget}",
  "dashboard.hidden": "Widgets ocultos",
  "dashboard.show": "Mostrar {widget}",
  "dashboard.finished": "Edição concluída",
  "dashboard.restored": "Layout padrão restaurado",
  "dashboard.saved": "Posição salva",
  "dashboard.blocked": "Posição bloqueada por colisão",
  "dashboard.resized": "Tamanho {size}",
  "dashboard.widgetRestored": "Widget redefinido",
  "dashboard.visible": "Widget visível",
  "dashboard.invisible": "Widget oculto",
  "dashboard.confirm": "Redefinir apenas posições, tamanhos e visibilidade do painel?",
  "dashboard.toolbar": "Edição do painel",
  "profile.active": "Perfil ativo: {name}",
  "profile.accessPin": "PIN de acesso para {name}",
  "profile.removePin": "PIN para {name}; deixe vazio para remover",
  "profile.adminName": "Nome do administrador Argus",
  "profile.disarmPin": "PIN de desarmar (se aplicável)",
  "error.unknown": "Ocorreu um erro inesperado.",
  "error.permission": "Você não tem permissão para realizar esta ação.",
  "error.notFound": "Instância do Argus não encontrada.",
  "error.light": "A luz selecionada não está disponível no Home Assistant.",
  "error.background": "O Argus usa um plano de fundo padrão fixo.",
  "error.widgetTitle": "⚠️ Erro no widget",
  "error.widgetBody": "Não foi possível renderizar um componente.",
  "activity.armed": "Sistema armado",
  "activity.disarmed": "Sistema desarmado",
  "activity.cancelled": "Armação cancelada",
  "activity.rejected": "Armação rejeitada",
  "activity.restored": "Configuração restaurada",
  "activity.cleared": "Registro de auditoria limpo",
  "activity.automation": "Automação executada",
  "activity.updated": "Configuração atualizada",
  "activity.historic": "Evento histórico"
}, sh = {
  "app.panel": "Pannello di sicurezza",
  "app.instance": "Istanza",
  "app.language": "Lingua",
  "app.none": "Nessuna istanza Argus è configurata.",
  "app.setup": "Configura Argus",
  "app.profile": "Seleziona un profilo",
  "app.complete": "Completa configurazione iniziale",
  "widget.security": "Stato di sicurezza",
  "widget.activity": "Attività",
  "widget.automations": "Automazioni",
  "widget.access": "Accesso e SOS",
  "widget.alarm": "Configurazione allarme",
  "widget.backup": "Backup",
  "widget.support": "Sostieni Argus",
  "action.home": "Inserisci a casa",
  "action.away": "Inserisci fuori casa",
  "action.disarm": "Disinserisci",
  "action.refresh": "Aggiorna",
  "action.export": "Esporta",
  "action.restore": "Ripristina",
  "action.logout": "Esci",
  "action.save": "Salva",
  "action.delete": "Elimina",
  "action.enable": "Attiva",
  "action.disable": "Disattiva",
  "action.open": "Apri in Home Assistant",
  "action.manage": "Gestisci automazioni in Home Assistant",
  "action.addProfile": "Aggiungi profilo",
  "action.addRule": "Aggiungi regola",
  "action.saveMode": "Salva modalità",
  "action.saveName": "Salva nome",
  "action.saveAdvanced": "Salva impostazioni avanzate",
  "action.clear": "Cancella registro",
  "status.review": "Stato in revisione",
  "status.unavailable": "non disponibile",
  "status.active": "attivo",
  "status.disabled": "disattivato",
  "status.enabled": "Attiva",
  "status.inactive": "Disattivata",
  "status.configured": "(configurato)",
  "status.empty": "Nessuna attività recente",
  "status.event": "Evento",
  "status.incident": "Incidente",
  "status.open": "aperto",
  "sos.title": "Azioni SOS",
  "sos.save": "Salva azioni SOS",
  "sos.saving": "Salvataggio…",
  "sos.none": "Nessuna uscita SOS compatibile.",
  "sos.saved": "Azioni SOS salvate per questa istanza.",
  "sos.permission": "Il tuo profilo necessita del permesso «Gestisci SOS» per salvare queste uscite.",
  "sos.failed": "Impossibile salvare le azioni SOS. Verifica il permesso Gestisci SOS.",
  "automation.readOnly": "Automazioni Home Assistant correlate a questa istanza (sola lettura).",
  "automation.empty": "Nessuna automazione Home Assistant correlata a questa istanza.",
  "automation.noCrud": "Argus non crea né modifica automazioni. Questo elenco è in sola lettura per l’istanza selezionata.",
  "automation.dashboard": "Apri Automazioni di Home Assistant",
  "admin.title": "Amministrazione avanzata",
  "admin.users": "Utenti, PIN e presenza",
  "admin.modes": "Modalità, sensori e sirene",
  "admin.automations": "Automazioni Home Assistant",
  "admin.personalization": "Contenuti multimediali e temi",
  "admin.forensics": "Incidenti e perizia",
  "admin.advanced": "Configurazione avanzata",
  "admin.profiles": "Profili e permessi",
  "admin.presence": "Presenza",
  "admin.incidents": "Incidenti",
  "admin.audit": "Audit",
  "field.name": "Nome",
  "field.rule": "Nome della regola",
  "field.home": "Nome della casa",
  "field.noHa": "Nessun account HA",
  "field.standard": "Standard",
  "field.admin": "Amministratore",
  "field.arming": "Ritardo inserimento (secondi)",
  "field.entry": "Ritardo ingresso (secondi)",
  "field.closed": "Richiedi sensori chiusi prima di inserire",
  "field.mqtt": "Pubblica stato MQTT",
  "field.people": "Persone che attivano la regola",
  "field.sensors": "Sensori attivi",
  "field.bypassed": "Sensori esclusi (bypass)",
  "field.entrySensors": "Sensori con ritardo ingresso",
  "field.sirens": "Sirene e uscite",
  "field.panels": "Pannelli esterni",
  "field.lights": "Luci di allarme",
  "field.lightOptions": "Colore e lampeggio delle luci",
  "field.color": "Colore di {entity}",
  "field.noFlash": "Nessun lampeggio",
  "field.gentle": "Lampeggio delicato",
  "field.rapid": "Lampeggio rapido",
  "field.background": "Argus utilizza un unico sfondo predefinito fisso. Sfondi personalizzati e meteo animato non sono supportati né salvati.",
  "field.codes": "I codici esistenti non vengono mostrati. Inserisci un valore solo per sostituirlo; lascia vuoto per conservare.",
  "field.armCode": "Richiedi codice per inserire",
  "field.guest": "Abilita codice ospite",
  "field.newGuest": "Nuovo codice ospite",
  "field.duress": "PIN di coercizione {configured}",
  "dashboard.loading": "Caricamento dashboard…",
  "dashboard.edit": "✥ Modifica dashboard",
  "dashboard.done": "✓ Fatto",
  "dashboard.reset": "Reimposta layout",
  "dashboard.resetWidget": "Reimposta widget",
  "dashboard.hide": "Nascondi widget",
  "dashboard.size": "Dimensione",
  "dashboard.options": "Opzioni",
  "dashboard.drag": "Trascina per spostare",
  "dashboard.move": "Sposta {widget}",
  "dashboard.hidden": "Widget nascosti",
  "dashboard.show": "Mostra {widget}",
  "dashboard.finished": "Modifica terminata",
  "dashboard.restored": "Layout predefinito ripristinato",
  "dashboard.saved": "Posizione salvata",
  "dashboard.blocked": "Posizione bloccata da collisione",
  "dashboard.resized": "Dimensione {size}",
  "dashboard.widgetRestored": "Widget reimpostato",
  "dashboard.visible": "Widget visibile",
  "dashboard.invisible": "Widget nascosto",
  "dashboard.confirm": "Reimpostare solo posizioni, dimensioni e visibilità della dashboard?",
  "dashboard.toolbar": "Modifica della dashboard",
  "profile.active": "Profilo attivo: {name}",
  "profile.accessPin": "PIN di accesso per {name}",
  "profile.removePin": "PIN per {name}; lascia vuoto per eliminare",
  "profile.adminName": "Nome dell’amministratore Argus",
  "profile.disarmPin": "PIN di disinserimento (se applicabile)",
  "error.unknown": "Si è verificato un errore imprevisto.",
  "error.permission": "Non hai il permesso di eseguire questa azione.",
  "error.notFound": "Istanza Argus non trovata.",
  "error.light": "La luce selezionata non è disponibile in Home Assistant.",
  "error.background": "Argus utilizza uno sfondo predefinito fisso.",
  "error.widgetTitle": "⚠️ Errore del widget",
  "error.widgetBody": "Impossibile visualizzare un componente.",
  "activity.armed": "Sistema inserito",
  "activity.disarmed": "Sistema disinserito",
  "activity.cancelled": "Inserimento annullato",
  "activity.rejected": "Inserimento rifiutato",
  "activity.restored": "Configurazione ripristinata",
  "activity.cleared": "Registro audit cancellato",
  "activity.automation": "Automazione eseguita",
  "activity.updated": "Configurazione aggiornata",
  "activity.historic": "Evento storico"
}, lh = {
  "app.panel": "安全面板",
  "app.instance": "实例",
  "app.language": "语言",
  "app.none": "未配置 Argus 实例。",
  "app.setup": "设置 Argus",
  "app.profile": "选择配置文件",
  "app.complete": "完成初始设置",
  "widget.security": "安全状态",
  "widget.activity": "活动",
  "widget.automations": "自动化",
  "widget.access": "访问和 SOS",
  "widget.alarm": "警报配置",
  "widget.backup": "备份",
  "widget.support": "支持 Argus",
  "action.home": "在家布防",
  "action.away": "外出布防",
  "action.disarm": "撤防",
  "action.refresh": "刷新",
  "action.export": "导出",
  "action.restore": "恢复",
  "action.logout": "退出登录",
  "action.save": "保存",
  "action.delete": "删除",
  "action.enable": "启用",
  "action.disable": "停用",
  "action.open": "在 Home Assistant 中打开",
  "action.manage": "在 Home Assistant 中管理自动化",
  "action.addProfile": "添加用户档案",
  "action.addRule": "添加规则",
  "action.saveMode": "保存模式",
  "action.saveName": "保存名称",
  "action.saveAdvanced": "保存高级控制",
  "action.clear": "清除日志",
  "status.review": "状态审核中",
  "status.unavailable": "不可用",
  "status.active": "已启用",
  "status.disabled": "已停用",
  "status.enabled": "已启用",
  "status.inactive": "已停用",
  "status.configured": "(已配置)",
  "status.empty": "没有最近活动",
  "status.event": "事件",
  "status.incident": "事故",
  "status.open": "开启",
  "sos.title": "SOS 紧急动作",
  "sos.save": "保存 SOS 动作",
  "sos.saving": "正在保存…",
  "sos.none": "没有兼容的 SOS 输出。",
  "sos.saved": "已为此实例保存 SOS 动作。",
  "sos.permission": "您的档案需要“管理 SOS”权限才能保存这些输出。",
  "sos.failed": "无法保存 SOS 动作。请检查管理 SOS 权限。",
  "automation.readOnly": "与此实例相关的 Home Assistant 自动化（只读）。",
  "automation.empty": "没有与此实例相关的 Home Assistant 自动化。",
  "automation.noCrud": "Argus 不创建或修改自动化。此列表针对所选实例为只读。",
  "automation.dashboard": "打开 Home Assistant 自动化面板",
  "admin.title": "高级管理",
  "admin.users": "用户、PIN 和在家状态",
  "admin.modes": "模式、传感器和警报器",
  "admin.automations": "Home Assistant 自动化",
  "admin.personalization": "多媒体与主题",
  "admin.forensics": "事故与取证",
  "admin.advanced": "高级配置",
  "admin.profiles": "档案与权限",
  "admin.presence": "在场规则",
  "admin.incidents": "事故记录",
  "admin.audit": "审计日志",
  "field.name": "名称",
  "field.rule": "规则名称",
  "field.home": "家庭名称",
  "field.noHa": "无 HA 账号",
  "field.standard": "标准用户",
  "field.admin": "管理员",
  "field.arming": "布防延迟 (秒)",
  "field.entry": "进入延迟 (秒)",
  "field.closed": "布防前要求传感器处于关闭状态",
  "field.mqtt": "发布 MQTT 状态",
  "field.people": "触发规则的人员",
  "field.sensors": "活动传感器",
  "field.bypassed": "旁路传感器",
  "field.entrySensors": "具有进入延迟的传感器",
  "field.sirens": "警报器与输出",
  "field.panels": "外部面板",
  "field.lights": "警报灯光",
  "field.lightOptions": "警报灯光颜色与闪烁",
  "field.color": "{entity} 的颜色",
  "field.noFlash": "无闪烁",
  "field.gentle": "柔和闪烁",
  "field.rapid": "快速闪烁",
  "field.background": "Argus 使用固定的默认背景。不支持或保存自定义背景与动态天气。",
  "field.codes": "现有密码不会显示。仅在需要替换时输入值；留空表示保留原值。",
  "field.armCode": "布防需要密码",
  "field.guest": "启用访客密码",
  "field.newGuest": "新访客密码",
  "field.duress": "胁迫 PIN {configured}",
  "dashboard.loading": "正在加载仪表板…",
  "dashboard.edit": "✥ 编辑仪表板",
  "dashboard.done": "✓ 完成",
  "dashboard.reset": "重置布局",
  "dashboard.resetWidget": "重置组件",
  "dashboard.hide": "隐藏组件",
  "dashboard.size": "尺寸",
  "dashboard.options": "选项",
  "dashboard.drag": "拖动以移动",
  "dashboard.move": "移动 {widget}",
  "dashboard.hidden": "隐藏的组件",
  "dashboard.show": "显示 {widget}",
  "dashboard.finished": "编辑已完成",
  "dashboard.restored": "已恢复默认布局",
  "dashboard.saved": "位置已保存",
  "dashboard.blocked": "位置因重叠碰撞受阻",
  "dashboard.resized": "尺寸已调整为 {size}",
  "dashboard.widgetRestored": "组件已重置",
  "dashboard.visible": "组件已显示",
  "dashboard.invisible": "组件已隐藏",
  "dashboard.confirm": "仅重置仪表板的位置、大小和可见性？",
  "dashboard.toolbar": "仪表板编辑工具栏",
  "profile.active": "当前档案: {name}",
  "profile.accessPin": "{name} 的访问 PIN",
  "profile.removePin": "{name} 的 PIN；留空则删除",
  "profile.adminName": "Argus 管理员名称",
  "profile.disarmPin": "撤防 PIN (如适用)",
  "error.unknown": "发生意外错误。",
  "error.permission": "您无权执行此操作。",
  "error.notFound": "未找到 Argus 实例。",
  "error.light": "所选灯光在 Home Assistant 中不可用。",
  "error.background": "Argus 使用固定的默认背景。",
  "error.widgetTitle": "⚠️ 组件错误",
  "error.widgetBody": "无法渲染该组件。",
  "activity.armed": "系统已布防",
  "activity.disarmed": "系统已撤防",
  "activity.cancelled": "布防已取消",
  "activity.rejected": "布防被拒绝",
  "activity.restored": "配置已恢复",
  "activity.cleared": "审计日志已清除",
  "activity.automation": "自动化已执行",
  "activity.updated": "配置已更新",
  "activity.historic": "历史事件"
}, uh = {
  "app.panel": "安全面板",
  "app.instance": "執行個體",
  "app.language": "語言",
  "app.none": "未設定 Argus 執行個體。",
  "app.setup": "設定 Argus",
  "app.profile": "選取設定檔",
  "app.complete": "完成初始設定",
  "widget.security": "安全狀態",
  "widget.activity": "活動",
  "widget.automations": "自動化",
  "widget.access": "存取與 SOS",
  "widget.alarm": "警報設定",
  "widget.backup": "備份",
  "widget.support": "支持 Argus",
  "action.home": "在家佈防",
  "action.away": "外出佈防",
  "action.disarm": "解除警戒",
  "action.refresh": "重新整理",
  "action.export": "匯出",
  "action.restore": "還原",
  "action.logout": "登出",
  "action.save": "儲存",
  "action.delete": "刪除",
  "action.enable": "啟用",
  "action.disable": "停用",
  "action.open": "在 Home Assistant 中開啟",
  "action.manage": "在 Home Assistant 中管理自動化",
  "action.addProfile": "新增設定檔",
  "action.addRule": "新增規則",
  "action.saveMode": "儲存模式",
  "action.saveName": "儲存名稱",
  "action.saveAdvanced": "儲存進階控制",
  "action.clear": "清除記錄",
  "status.review": "狀態審核中",
  "status.unavailable": "無法使用",
  "status.active": "使用中",
  "status.disabled": "已停用",
  "status.enabled": "已啟用",
  "status.inactive": "已停用",
  "status.configured": "(已設定)",
  "status.empty": "沒有近期活動",
  "status.event": "事件",
  "status.incident": "事故",
  "status.open": "開啟",
  "sos.title": "SOS 緊急動作",
  "sos.save": "儲存 SOS 動作",
  "sos.saving": "正在儲存…",
  "sos.none": "沒有相容的 SOS 輸出。",
  "sos.saved": "已為此執行個體儲存 SOS 動作。",
  "sos.permission": "您的設定檔需要「管理 SOS」權限才能儲存這些輸出。",
  "sos.failed": "無法儲存 SOS 動作。請檢查管理 SOS 權限。",
  "automation.readOnly": "與此執行個體關聯的 Home Assistant 自動化（唯讀）。",
  "automation.empty": "沒有與此執行個體關聯的 Home Assistant 自動化。",
  "automation.noCrud": "Argus 不會建立或修改自動化。此清單對所選執行個體為唯讀。",
  "automation.dashboard": "開啟 Home Assistant 自動化面板",
  "admin.title": "進階管理",
  "admin.users": "使用者、PIN 與在家狀態",
  "admin.modes": "模式、感測器與警報器",
  "admin.automations": "Home Assistant 自動化",
  "admin.personalization": "多媒體與佈景主題",
  "admin.forensics": "事故與鑑識",
  "admin.advanced": "進階設定",
  "admin.profiles": "設定檔與權限",
  "admin.presence": "在場規則",
  "admin.incidents": "事故記錄",
  "admin.audit": "稽核記錄",
  "field.name": "名稱",
  "field.rule": "規則名稱",
  "field.home": "住家名稱",
  "field.noHa": "無 HA 帳號",
  "field.standard": "一般使用者",
  "field.admin": "管理員",
  "field.arming": "佈防延遲 (秒)",
  "field.entry": "進入延遲 (秒)",
  "field.closed": "佈防前要求感測器處於關閉狀態",
  "field.mqtt": "發布 MQTT 狀態",
  "field.people": "觸發規則的人員",
  "field.sensors": "使用中感測器",
  "field.bypassed": "略過 (Bypass) 感測器",
  "field.entrySensors": "具備進入延遲的感測器",
  "field.sirens": "警報器與輸出",
  "field.panels": "外部面板",
  "field.lights": "警報燈光",
  "field.lightOptions": "警報燈光顏色與閃爍",
  "field.color": "{entity} 的顏色",
  "field.noFlash": "不閃爍",
  "field.gentle": "緩和閃爍",
  "field.rapid": "快速閃爍",
  "field.background": "Argus 使用固定的預設背景。不支援或儲存自訂背景與動態天氣。",
  "field.codes": "現有代碼不會顯示。僅在需取代時輸入；留空表示保留原值。",
  "field.armCode": "佈防需要代碼",
  "field.guest": "啟用訪客代碼",
  "field.newGuest": "新訪客代碼",
  "field.duress": "脅迫 PIN {configured}",
  "dashboard.loading": "正在載入儀表板…",
  "dashboard.edit": "✥ 編輯儀表板",
  "dashboard.done": "✓ 完成",
  "dashboard.reset": "重設版面配置",
  "dashboard.resetWidget": "重設小工具",
  "dashboard.hide": "隱藏小工具",
  "dashboard.size": "尺寸",
  "dashboard.options": "選項",
  "dashboard.drag": "拖曳以移動",
  "dashboard.move": "移動 {widget}",
  "dashboard.hidden": "隱藏的小工具",
  "dashboard.show": "顯示 {widget}",
  "dashboard.finished": "編輯已完成",
  "dashboard.restored": "已還原預設版面配置",
  "dashboard.saved": "位置已儲存",
  "dashboard.blocked": "位置因重疊碰撞受阻",
  "dashboard.resized": "尺寸已調整為 {size}",
  "dashboard.widgetRestored": "小工具已重設",
  "dashboard.visible": "小工具已顯示",
  "dashboard.invisible": "小工具已隱藏",
  "dashboard.confirm": "僅重設儀表板的位置、大小與可見度？",
  "dashboard.toolbar": "儀表板編輯工具列",
  "profile.active": "使用中設定檔: {name}",
  "profile.accessPin": "{name} 的存取 PIN",
  "profile.removePin": "{name} 的 PIN；留空則移除",
  "profile.adminName": "Argus 管理員名稱",
  "profile.disarmPin": "解除警戒 PIN (如適用)",
  "error.unknown": "發生未預期的錯誤。",
  "error.permission": "您沒有權限執行此操作。",
  "error.notFound": "找不到 Argus 執行個體。",
  "error.light": "所選燈光在 Home Assistant 中無法使用。",
  "error.background": "Argus 使用固定的預設背景。",
  "error.widgetTitle": "⚠️ 小工具錯誤",
  "error.widgetBody": "無法轉譯該元件。",
  "activity.armed": "系統已佈防",
  "activity.disarmed": "系統已解除警戒",
  "activity.cancelled": "佈防已取消",
  "activity.rejected": "佈防遭拒絕",
  "activity.restored": "設定已還原",
  "activity.cleared": "稽核記錄已清除",
  "activity.automation": "自動化已執行",
  "activity.updated": "設定已更新",
  "activity.historic": "歷史事件"
}, dh = {
  "app.panel": "सुरक्षा पैनल",
  "app.instance": "इंस्टेंस",
  "app.language": "भाषा",
  "app.none": "कोई Argus इंस्टेंस कॉन्फ़िगर नहीं है।",
  "app.setup": "Argus सेट करें",
  "app.profile": "प्रोफ़ाइल चुनें",
  "app.complete": "प्रारंभिक सेटअप पूरा करें",
  "widget.security": "सुरक्षा स्थिति",
  "widget.activity": "गतिविधि",
  "widget.automations": "स्वचालन",
  "widget.access": "पहुँच और SOS",
  "widget.alarm": "अलार्म कॉन्फ़िगरेशन",
  "widget.backup": "बैकअप",
  "widget.support": "Argus का समर्थन करें",
  "action.home": "घर पर आर्म करें",
  "action.away": "बाहर आर्म करें",
  "action.disarm": "निष्क्रिय करें",
  "action.refresh": "रीफ़्रेश",
  "action.export": "निर्यात",
  "action.restore": "पुनर्स्थापित करें",
  "action.logout": "साइन आउट",
  "action.save": "सहेजें",
  "action.delete": "हटाएँ",
  "action.enable": "सक्षम करें",
  "action.disable": "अक्षम करें",
  "action.open": "Home Assistant में खोलें",
  "action.manage": "Home Assistant में स्वचालन प्रबंधित करें",
  "action.addProfile": "प्रोफ़ाइल जोड़ें",
  "action.addRule": "नियम जोड़ें",
  "action.saveMode": "मोड सहेजें",
  "action.saveName": "नाम सहेजें",
  "action.saveAdvanced": "उन्नत नियंत्रण सहेजें",
  "action.clear": "लॉग साफ़ करें",
  "status.review": "समीक्षाधीन स्थिति",
  "status.unavailable": "अनुपलब्ध",
  "status.active": "सक्रिय",
  "status.disabled": "निष्क्रिय",
  "status.enabled": "सक्षम",
  "status.inactive": "अक्षम",
  "status.configured": "(कॉन्फ़िगर किया गया)",
  "status.empty": "हाल की कोई गतिविधि नहीं",
  "status.event": "इवेंट",
  "status.incident": "घटना",
  "status.open": "खुला",
  "sos.title": "SOS कार्रवाइयाँ",
  "sos.save": "SOS कार्रवाइयाँ सहेजें",
  "sos.saving": "सहेजा जा रहा है…",
  "sos.none": "कोई संगत SOS आउटपुट नहीं है।",
  "sos.saved": "इस इंस्टेंस के लिए SOS कार्रवाइयाँ सहेजी गईं।",
  "sos.permission": "इन आउटपुट को सहेजने के लिए आपकी प्रोफ़ाइल को «SOS प्रबंधित करें» अनुमति की आवश्यकता है।",
  "sos.failed": "SOS कार्रवाइयाँ सहेजी नहीं जा सकीं। SOS प्रबंधित करें अनुमति जांचें।",
  "automation.readOnly": "इस इंस्टेंस से संबंधित Home Assistant स्वचालन (केवल पढ़ने के लिए)।",
  "automation.empty": "इस इंस्टेंस से संबंधित कोई Home Assistant स्वचालन नहीं है।",
  "automation.noCrud": "Argus स्वचालन बनाता या संशोधित नहीं करता है। यह सूची केवल चयनित इंस्टेंस के लिए पढ़ने के लिए है।",
  "automation.dashboard": "Home Assistant स्वचालन डैशबोर्ड खोलें",
  "admin.title": "उन्नत प्रशासन",
  "admin.users": "उपयोगकर्ता, PIN और उपस्थिति",
  "admin.modes": "मोड, सेंसर और सायरन",
  "admin.automations": "Home Assistant स्वचालन",
  "admin.personalization": "मल्टीमीडिया और थीम",
  "admin.forensics": "घटनाएँ और फोरेंसिक",
  "admin.advanced": "उन्नत कॉन्फ़िगरेशन",
  "admin.profiles": "प्रोफ़ाइल और अनुमतियाँ",
  "admin.presence": "उपस्थिति",
  "admin.incidents": "घटनाएँ",
  "admin.audit": "ऑडिट",
  "field.name": "नाम",
  "field.rule": "नियम का नाम",
  "field.home": "घर का नाम",
  "field.noHa": "कोई HA खाता नहीं",
  "field.standard": "मानक",
  "field.admin": "व्यवस्थापक",
  "field.arming": "आर्मिंग विलंब (सेकंड)",
  "field.entry": "प्रवेश विलंब (सेकंड)",
  "field.closed": "आर्म करने से पहले बंद सेंसर की आवश्यकता है",
  "field.mqtt": "MQTT स्थिति प्रकाशित करें",
  "field.people": "नियम को ट्रिगर करने वाले लोग",
  "field.sensors": "सक्रिय सेंसर",
  "field.bypassed": "बाईपास किए गए सेंसर",
  "field.entrySensors": "प्रवेश विलंब वाले सेंसर",
  "field.sirens": "सायरन और आउटपुट",
  "field.panels": "बाहरी पैनल",
  "field.lights": "अलार्म लाइटें",
  "field.lightOptions": "अलार्म लाइट का रंग और फ़्लैश",
  "field.color": "{entity} का रंग",
  "field.noFlash": "कोई फ़्लैश नहीं",
  "field.gentle": "धीमी फ़्लैश",
  "field.rapid": "तेज़ फ़्लैश",
  "field.background": "Argus एक निश्चित डिफ़ॉल्ट पृष्ठभूमि का उपयोग करता है। कस्टम पृष्ठभूमि और एनिमेटेड मौसम सहेजे नहीं जाते हैं।",
  "field.codes": "मौजूदा कोड प्रदर्शित नहीं किए जाते हैं। बदलने के लिए केवल एक नया मान दर्ज करें; बनाए रखने के लिए खाली छोड़ें।",
  "field.armCode": "आर्म करने के लिए कोड आवश्यक है",
  "field.guest": "अतिथि कोड सक्षम करें",
  "field.newGuest": "नया अतिथि कोड",
  "field.duress": "दबाव PIN {configured}",
  "dashboard.loading": "डैशबोर्ड लोड हो रहा है…",
  "dashboard.edit": "✥ डैशबोर्ड संपादित करें",
  "dashboard.done": "✓ संपन्न",
  "dashboard.reset": "लेआउट रीसेट करें",
  "dashboard.resetWidget": "विजेट रीसेट करें",
  "dashboard.hide": "विजेट छुपाएं",
  "dashboard.size": "आकार",
  "dashboard.options": "विकल्प",
  "dashboard.drag": "स्थानांतरित करने के लिए खींचें",
  "dashboard.move": "{widget} को स्थानांतरित करें",
  "dashboard.hidden": "छिपे हुए विजेट",
  "dashboard.show": "{widget} दिखाएं",
  "dashboard.finished": "संपादन समाप्त हुआ",
  "dashboard.restored": "डिफ़ॉल्ट लेआउट पुनर्स्थापित किया गया",
  "dashboard.saved": "स्थिति सहेजी गई",
  "dashboard.blocked": "टकराव के कारण स्थिति अवरुद्ध",
  "dashboard.resized": "आकार {size}",
  "dashboard.widgetRestored": "विजेट रीसेट किया गया",
  "dashboard.visible": "विजेट दृश्यमान",
  "dashboard.invisible": "विजेट छिपा हुआ",
  "dashboard.confirm": "केवल डैशबोर्ड की स्थिति, आकार और दृश्यता रीसेट करें?",
  "dashboard.toolbar": "डैशबोर्ड संपादन",
  "profile.active": "सक्रिय प्रोफ़ाइल: {name}",
  "profile.accessPin": "{name} के लिए एक्सेस PIN",
  "profile.removePin": "{name} के लिए PIN; हटाने के लिए खाली छोड़ें",
  "profile.adminName": "Argus व्यवस्थापक का नाम",
  "profile.disarmPin": "डिसआर्म PIN (यदि लागू हो)",
  "error.unknown": "एक अनपेक्षित त्रुटि हुई।",
  "error.permission": "आपके पास इस कार्रवाई को करने की अनुमति नहीं है।",
  "error.notFound": "Argus इंस्टेंस नहीं मिला।",
  "error.light": "चयनित लाइट Home Assistant में उपलब्ध नहीं है।",
  "error.background": "Argus एक निश्चित डिफ़ॉल्ट पृष्ठभूमि का उपयोग करता है।",
  "error.widgetTitle": "⚠️ विजेट त्रुटि",
  "error.widgetBody": "एक घटक रेंडर नहीं किया जा सका।",
  "activity.armed": "सिस्टम आर्म किया गया",
  "activity.disarmed": "सिस्टम निष्क्रिय किया गया",
  "activity.cancelled": "आर्मिंग रद्द की गई",
  "activity.rejected": "आर्मिंग अस्वीकार की गई",
  "activity.restored": "कॉन्फ़िगरेशन पुनर्स्थापित किया गया",
  "activity.cleared": "ऑडिट लॉग साफ़ किया गया",
  "activity.automation": "स्वचालन निष्पादित किया गया",
  "activity.updated": "कॉन्फ़िगरेशन अद्यतन किया गया",
  "activity.historic": "ऐतिहासिक घटना"
}, ch = {
  "app.panel": "لوحة الأمان",
  "app.instance": "المثيل",
  "app.language": "اللغة",
  "app.none": "لا توجد مثيلات Argus مهيأة.",
  "app.setup": "إعداد Argus",
  "app.profile": "اختر ملفاً شخصياً",
  "app.complete": "إكمال الإعداد الأولي",
  "widget.security": "حالة الأمان",
  "widget.activity": "النشاط",
  "widget.automations": "الأتمتة",
  "widget.access": "الوصول وSOS",
  "widget.alarm": "إعدادات الإنذار",
  "widget.backup": "نسخة احتياطية",
  "widget.support": "ادعم Argus",
  "action.home": "تسليح المنزل",
  "action.away": "تسليح خارج المنزل",
  "action.disarm": "إلغاء التسليح",
  "action.refresh": "تحديث",
  "action.export": "تصدير",
  "action.restore": "استعادة",
  "action.logout": "تسجيل الخروج",
  "action.save": "حفظ",
  "action.delete": "حذف",
  "action.enable": "تفعيل",
  "action.disable": "تعطيل",
  "action.open": "فتح في Home Assistant",
  "action.manage": "إدارة الأتمتة في Home Assistant",
  "action.addProfile": "إضافة ملف شخصي",
  "action.addRule": "إضافة قاعدة",
  "action.saveMode": "حفظ الوضع",
  "action.saveName": "حفظ الاسم",
  "action.saveAdvanced": "حفظ عناصر التحكم المتقدمة",
  "action.clear": "مسح السجل",
  "status.review": "الحالة قيد المراجعة",
  "status.unavailable": "غير متوفر",
  "status.active": "نشط",
  "status.disabled": "معطل",
  "status.enabled": "مفعل",
  "status.inactive": "معطل",
  "status.configured": "(مهيأ)",
  "status.empty": "لا يوجد نشاط حديث",
  "status.event": "حدث",
  "status.incident": "حادثة",
  "status.open": "مفتوح",
  "sos.title": "إجراءات SOS",
  "sos.save": "حفظ إجراءات SOS",
  "sos.saving": "جارٍ الحفظ…",
  "sos.none": "لا توجد مخارج SOS متوافقة.",
  "sos.saved": "تم حفظ إجراءات SOS لهذا المثيل.",
  "sos.permission": "يحتاج ملفك الشخصي إلى إذن «إدارة SOS» لحفظ هذه المخارج.",
  "sos.failed": "تعذر حفظ إجراءات SOS. تحقق من إذن إدارة SOS.",
  "automation.readOnly": "أتمتة Home Assistant المرتبطة بهذا المثيل (للقراءة فقط).",
  "automation.empty": "لا توجد أتمتة من Home Assistant مرتبطة بهذا المثيل.",
  "automation.noCrud": "لا ينشئ Argus الأتمتة أو يعدلها. هذه القائمة للقراءة فقط للمثيل المحدد.",
  "automation.dashboard": "فتح لوحة تحكم أتمتة Home Assistant",
  "admin.title": "إدارة متقدمة",
  "admin.users": "المستخدمون وPIN والحضور",
  "admin.modes": "الأوضاع والحساسات والصفارات",
  "admin.automations": "أتمتة Home Assistant",
  "admin.personalization": "الوسائط والسمات",
  "admin.forensics": "الحوادث والتحليل الجنائي",
  "admin.advanced": "إعدادات متقدمة",
  "admin.profiles": "الملفات الشخصية والأذونات",
  "admin.presence": "الحضور",
  "admin.incidents": "الحوادث",
  "admin.audit": "التدقيق",
  "field.name": "الاسم",
  "field.rule": "اسم القاعدة",
  "field.home": "اسم المنزل",
  "field.noHa": "لا يوجد حساب HA",
  "field.standard": "قياسي",
  "field.admin": "مسؤول",
  "field.arming": "تأخير التسليح (بالثواني)",
  "field.entry": "تأخير الدخول (بالثواني)",
  "field.closed": "طلب إغلاق الحساسات قبل التسليح",
  "field.mqtt": "نشر حالة MQTT",
  "field.people": "الأشخاص الذين يشغلون القاعدة",
  "field.sensors": "الحساسات النشطة",
  "field.bypassed": "الحساسات المتجاوزة",
  "field.entrySensors": "حساسات بتأخير دخول",
  "field.sirens": "الصفارات والمخارج",
  "field.panels": "اللوحات الخارجية",
  "field.lights": "أضواء الإنذار",
  "field.lightOptions": "لون وميض أضواء الإنذار",
  "field.color": "لون {entity}",
  "field.noFlash": "بدون وميض",
  "field.gentle": "وميض هادئ",
  "field.rapid": "وميض سريع",
  "field.background": "يستخدم Argus خلفية افتراضية ثابتة واحدة. لا يتم تشغيل أو حفظ الخلفيات المخصصة والطقس المتحرك.",
  "field.codes": "الرموز الحالية لا يتم عرضها. اكتب قيمة فقط لاستبدالها؛ اترك الحقل فارغاً للاحتفاظ بها.",
  "field.armCode": "طلب رمز للتسليح",
  "field.guest": "تمكين رمز الضيف",
  "field.newGuest": "رمز ضيف جديد",
  "field.duress": "رمز الإكراه PIN {configured}",
  "dashboard.loading": "جارٍ تحميل لوحة التحكم…",
  "dashboard.edit": "✥ تعديل اللوحة",
  "dashboard.done": "✓ تم",
  "dashboard.reset": "إعادة تعيين المخطط",
  "dashboard.resetWidget": "إعادة تعيين الأداة",
  "dashboard.hide": "إخفاء الأداة",
  "dashboard.size": "الحجم",
  "dashboard.options": "خيارات",
  "dashboard.drag": "اسحب للتحريك",
  "dashboard.move": "تحريك {widget}",
  "dashboard.hidden": "الأدوات المخفية",
  "dashboard.show": "إظهار {widget}",
  "dashboard.finished": "تم الانتهاء من التعديل",
  "dashboard.restored": "تمت استعادة المخطط الافتراضي",
  "dashboard.saved": "تم حفظ الموضع",
  "dashboard.blocked": "الموضع محجوب بسبب التصادم",
  "dashboard.resized": "الحجم {size}",
  "dashboard.widgetRestored": "تمت إعادة تعيين الأداة",
  "dashboard.visible": "الأداة مرئية",
  "dashboard.invisible": "الأداة مخفية",
  "dashboard.confirm": "هل تريد إعادة تعيين مواضع وأحجام ورؤية اللوحة فقط؟",
  "dashboard.toolbar": "شريط تحرير اللوحة",
  "profile.active": "الملف الشخصي النشط: {name}",
  "profile.accessPin": "رمز PIN للوصول لـ {name}",
  "profile.removePin": "رمز PIN لـ {name}؛ اتركه فارغاً للحذف",
  "profile.adminName": "اسم مسؤول Argus",
  "profile.disarmPin": "رمز PIN لإلغاء التسليح (إن وجد)",
  "error.unknown": "حدث خطأ غير متوقع.",
  "error.permission": "ليس لديك إذن لتنفيذ هذا الإجراء.",
  "error.notFound": "لم يتم العثور على مثيل Argus.",
  "error.light": "الضوء المحدد غير متوفر في Home Assistant.",
  "error.background": "يستخدم Argus خلفية افتراضية ثابتة.",
  "error.widgetTitle": "⚠️ خطأ في الأداة",
  "error.widgetBody": "تعذر عرض أحد المكونات.",
  "activity.armed": "تم تسليح النظام",
  "activity.disarmed": "تم إلغاء تسليح النظام",
  "activity.cancelled": "تم إلغاء التسليح",
  "activity.rejected": "تم رفض التسليح",
  "activity.restored": "تمت استعادة التكوين",
  "activity.cleared": "تم مسح سجل التدقيق",
  "activity.automation": "تم تنفيذ الأتمتة",
  "activity.updated": "تم تحديث التكوين",
  "activity.historic": "حدث تاريخي"
}, fh = {
  "app.panel": "보안 패널",
  "app.instance": "인스턴스",
  "app.language": "언어",
  "app.none": "구성된 Argus 인스턴스가 없습니다.",
  "app.setup": "Argus 설정",
  "app.profile": "프로필 선택",
  "app.complete": "초기 설정 완료",
  "widget.security": "보안 상태",
  "widget.activity": "활동",
  "widget.automations": "자동화",
  "widget.access": "접근 및 SOS",
  "widget.alarm": "경보 구성",
  "widget.backup": "백업",
  "widget.support": "Argus 후원",
  "action.home": "재택 경계",
  "action.away": "외출 경계",
  "action.disarm": "경계 해제",
  "action.refresh": "새로 고침",
  "action.export": "내보내기",
  "action.restore": "복원",
  "action.logout": "로그아웃",
  "action.save": "저장",
  "action.delete": "삭제",
  "action.enable": "활성화",
  "action.disable": "비활성화",
  "action.open": "Home Assistant에서 열기",
  "action.manage": "Home Assistant에서 자동화 관리",
  "action.addProfile": "프로필 추가",
  "action.addRule": "규칙 추가",
  "action.saveMode": "모드 저장",
  "action.saveName": "이름 저장",
  "action.saveAdvanced": "고급 제어 저장",
  "action.clear": "로그 삭제",
  "status.review": "상태 검토 중",
  "status.unavailable": "사용 불가",
  "status.active": "활성",
  "status.disabled": "비활성",
  "status.enabled": "활성화됨",
  "status.inactive": "비활성화됨",
  "status.configured": "(구성됨)",
  "status.empty": "최근 활동 없음",
  "status.event": "이벤트",
  "status.incident": "사고",
  "status.open": "열림",
  "sos.title": "SOS 동작",
  "sos.save": "SOS 동작 저장",
  "sos.saving": "저장 중…",
  "sos.none": "호환되는 SOS 출력이 없습니다.",
  "sos.saved": "이 인스턴스에 대한 SOS 동작이 저장되었습니다.",
  "sos.permission": "이 출력을 저장하려면 프로필에 «SOS 관리» 권한이 필요합니다.",
  "sos.failed": "SOS 동작을 저장하지 못했습니다. SOS 관리 권한을 확인하세요.",
  "automation.readOnly": "이 인스턴스와 관련된 Home Assistant 자동화 (읽기 전용).",
  "automation.empty": "이 인스턴스와 관련된 Home Assistant 자동화가 없습니다.",
  "automation.noCrud": "Argus는 자동화를 생성하거나 수정하지 않습니다. 이 목록은 선택한 인스턴스에 대해 읽기 전용입니다.",
  "automation.dashboard": "Home Assistant 자동화 대시보드 열기",
  "admin.title": "고급 관리",
  "admin.users": "사용자, PIN 및 재실",
  "admin.modes": "모드, 센서 및 사이렌",
  "admin.automations": "Home Assistant 자동화",
  "admin.personalization": "멀티미디어 및 테마",
  "admin.forensics": "사고 및 포렌식",
  "admin.advanced": "고급 구성",
  "admin.profiles": "프로필 및 권한",
  "admin.presence": "재실",
  "admin.incidents": "사고 내역",
  "admin.audit": "감사 로그",
  "field.name": "이름",
  "field.rule": "규칙 이름",
  "field.home": "홈 이름",
  "field.noHa": "HA 계정 없음",
  "field.standard": "일반",
  "field.admin": "관리자",
  "field.arming": "경계 설정 지연 (초)",
  "field.entry": "진입 지연 (초)",
  "field.closed": "경계 설정 전 센서 닫힘 필수",
  "field.mqtt": "MQTT 상태 게시",
  "field.people": "규칙을 트리거하는 사용자",
  "field.sensors": "활성 센서",
  "field.bypassed": "우회된 센서",
  "field.entrySensors": "진입 지연 센서",
  "field.sirens": "사이렌 및 출력",
  "field.panels": "외부 패널",
  "field.lights": "경보 조명",
  "field.lightOptions": "경보 조명 색상 및 점멸",
  "field.color": "{entity} 색상",
  "field.noFlash": "점멸 없음",
  "field.gentle": "부드러운 점멸",
  "field.rapid": "빠른 점멸",
  "field.background": "Argus는 단일 고정 기본 배경을 사용합니다. 사용자 지정 배경 및 애니메이션 날씨는 실행되거나 저장되지 않습니다.",
  "field.codes": "기존 코드는 표시되지 않습니다. 교체할 때만 값을 입력하고, 유지하려면 비워 두세요.",
  "field.armCode": "경계 설정 시 코드 필요",
  "field.guest": "게스트 코드 활성화",
  "field.newGuest": "새 게스트 코드",
  "field.duress": "협박 PIN {configured}",
  "dashboard.loading": "대시보드 불러오는 중…",
  "dashboard.edit": "✥ 대시보드 편집",
  "dashboard.done": "✓ 완료",
  "dashboard.reset": "레이아웃 재설정",
  "dashboard.resetWidget": "위젯 재설정",
  "dashboard.hide": "위젯 숨기기",
  "dashboard.size": "크기",
  "dashboard.options": "옵션",
  "dashboard.drag": "드래그하여 이동",
  "dashboard.move": "{widget} 이동",
  "dashboard.hidden": "숨겨진 위젯",
  "dashboard.show": "{widget} 표시",
  "dashboard.finished": "편집 완료",
  "dashboard.restored": "기본 레이아웃 복원됨",
  "dashboard.saved": "위치 저장됨",
  "dashboard.blocked": "충돌로 인해 위치 차단됨",
  "dashboard.resized": "크기 {size}",
  "dashboard.widgetRestored": "위젯 초기화됨",
  "dashboard.visible": "위젯 표시됨",
  "dashboard.invisible": "위젯 숨겨짐",
  "dashboard.confirm": "대시보드의 위치, 크기 및 표시 여부만 재설정하시겠습니까?",
  "dashboard.toolbar": "대시보드 편집",
  "profile.active": "활성 프로필: {name}",
  "profile.accessPin": "{name} 액세스 PIN",
  "profile.removePin": "{name} PIN (삭제하려면 비워 둠)",
  "profile.adminName": "Argus 관리자 이름",
  "profile.disarmPin": "경계 해제 PIN (해당되는 경우)",
  "error.unknown": "예기치 않은 오류가 발생했습니다.",
  "error.permission": "이 작업을 수행할 권한이 없습니다.",
  "error.notFound": "Argus 인스턴스를 찾을 수 없습니다.",
  "error.light": "선택한 조명을 Home Assistant에서 사용할 수 없습니다.",
  "error.background": "Argus는 고정 기본 배경을 사용합니다.",
  "error.widgetTitle": "⚠️ 위젯 오류",
  "error.widgetBody": "구성 요소를 렌더링할 수 없습니다.",
  "activity.armed": "시스템 경계 설정됨",
  "activity.disarmed": "시스템 경계 해제됨",
  "activity.cancelled": "경계 설정 취소됨",
  "activity.rejected": "경계 설정 거부됨",
  "activity.restored": "구성 복원됨",
  "activity.cleared": "감사 로그 삭제됨",
  "activity.automation": "자동화 실행됨",
  "activity.updated": "구성 업데이트됨",
  "activity.historic": "과거 기록 이벤트"
}, ph = {
  "app.panel": "セキュリティパネル",
  "app.instance": "インスタンス",
  "app.language": "言語",
  "app.none": "Argus インスタンスが設定されていません。",
  "app.setup": "Argus を設定",
  "app.profile": "プロファイルを選択",
  "app.complete": "初期設定を完了",
  "widget.security": "セキュリティ状態",
  "widget.activity": "アクティビティ",
  "widget.automations": "自動化",
  "widget.access": "アクセスとSOS",
  "widget.alarm": "アラーム設定",
  "widget.backup": "バックアップ",
  "widget.support": "Argus を支援",
  "action.home": "在宅警戒",
  "action.away": "外出警戒",
  "action.disarm": "警戒解除",
  "action.refresh": "更新",
  "action.export": "エクスポート",
  "action.restore": "復元",
  "action.logout": "ログアウト",
  "action.save": "保存",
  "action.delete": "削除",
  "action.enable": "有効化",
  "action.disable": "無効化",
  "action.open": "Home Assistant で開く",
  "action.manage": "Home Assistant で自動化を管理",
  "action.addProfile": "プロファイルを追加",
  "action.addRule": "ルールを追加",
  "action.saveMode": "モードを保存",
  "action.saveName": "名前を保存",
  "action.saveAdvanced": "詳細制御を保存",
  "action.clear": "ログを消去",
  "status.review": "確認中",
  "status.unavailable": "利用不可",
  "status.active": "有効",
  "status.disabled": "無効",
  "status.enabled": "有効",
  "status.inactive": "無効",
  "status.configured": "(設定済み)",
  "status.empty": "最近のアクティビティはありません",
  "status.event": "イベント",
  "status.incident": "インシデント",
  "status.open": "オープン",
  "sos.title": "SOS アクション",
  "sos.save": "SOS アクションを保存",
  "sos.saving": "保存中…",
  "sos.none": "互換性のある SOS 出力がありません。",
  "sos.saved": "このインスタンスの SOS アクションが保存されました。",
  "sos.permission": "これらの出力を保存するにはプロファイルに「SOS 管理」権限が必要です。",
  "sos.failed": "SOS アクションを保存できませんでした。SOS 管理権限を確認してください。",
  "automation.readOnly": "このインスタンスに関連する Home Assistant 自動化 (読み取り専用)。",
  "automation.empty": "このインスタンスに関連する Home Assistant 自動化はありません。",
  "automation.noCrud": "Argus は自動化の作成や変更を行いません。この一覧は選択されたインスタンスに対して読み取り専用です。",
  "automation.dashboard": "Home Assistant 自動化ダッシュボードを開く",
  "admin.title": "詳細管理",
  "admin.users": "ユーザー、PIN、在宅",
  "admin.modes": "モード、センサー、サイレン",
  "admin.automations": "Home Assistant 自動化",
  "admin.personalization": "マルチメディアとテーマ",
  "admin.forensics": "インシデントとフォレンジック",
  "admin.advanced": "詳細設定",
  "admin.profiles": "プロファイルと権限",
  "admin.presence": "在宅ルール",
  "admin.incidents": "インシデント",
  "admin.audit": "監査ログ",
  "field.name": "名前",
  "field.rule": "ルール名",
  "field.home": "ホーム名",
  "field.noHa": "HA アカウントなし",
  "field.standard": "標準",
  "field.admin": "管理者",
  "field.arming": "警戒開始遅延 (秒)",
  "field.entry": "侵入遅延 (秒)",
  "field.closed": "警戒開始前にセンサーの閉鎖を必須とする",
  "field.mqtt": "MQTT ステータスを発行",
  "field.people": "ルールをトリガーするユーザー",
  "field.sensors": "アクティブセンサー",
  "field.bypassed": "バイパスされたセンサー",
  "field.entrySensors": "侵入遅延のあるセンサー",
  "field.sirens": "サイレンと出力",
  "field.panels": "外部パネル",
  "field.lights": "アラームライト",
  "field.lightOptions": "アラームライトの色と点滅",
  "field.color": "{entity} の色",
  "field.noFlash": "点滅なし",
  "field.gentle": "穏やかな点滅",
  "field.rapid": "高速点滅",
  "field.background": "Argus は単一の固定デフォルト背景を使用します。カスタム背景やアニメーション天気は実行および保存されません。",
  "field.codes": "既存のコードは表示されません。置換する場合のみ値を入力してください。保持する場合は空のままにしてください。",
  "field.armCode": "警戒開始にコードを要求",
  "field.guest": "ゲストコードを有効化",
  "field.newGuest": "新しいゲストコード",
  "field.duress": "脅迫 PIN {configured}",
  "dashboard.loading": "ダッシュボードを読み込み中…",
  "dashboard.edit": "✥ ダッシュボードを編集",
  "dashboard.done": "✓ 完了",
  "dashboard.reset": "レイアウトをリセット",
  "dashboard.resetWidget": "ウィジェットをリセット",
  "dashboard.hide": "ウィジェットを非表示",
  "dashboard.size": "サイズ",
  "dashboard.options": "オプション",
  "dashboard.drag": "ドラッグして移動",
  "dashboard.move": "{widget} を移動",
  "dashboard.hidden": "非表示のウィジェット",
  "dashboard.show": "{widget} を表示",
  "dashboard.finished": "編集が完了しました",
  "dashboard.restored": "デフォルトのレイアウトに戻しました",
  "dashboard.saved": "位置が保存されました",
  "dashboard.blocked": "衝突のため位置がブロックされました",
  "dashboard.resized": "サイズ {size}",
  "dashboard.widgetRestored": "ウィジェットがリセットされました",
  "dashboard.visible": "ウィジェットを表示",
  "dashboard.invisible": "ウィジェットを非表示",
  "dashboard.confirm": "ダッシュボードの位置、サイズ、表示状態のみをリセットしますか？",
  "dashboard.toolbar": "ダッシュボード編集",
  "profile.active": "アクティブなプロファイル: {name}",
  "profile.accessPin": "{name} のアクセス PIN",
  "profile.removePin": "{name} の PIN (削除する場合は空に設定)",
  "profile.adminName": "Argus 管理者名",
  "profile.disarmPin": "警戒解除 PIN (該当する場合)",
  "error.unknown": "予期しないエラーが発生しました。",
  "error.permission": "この操作を実行する権限がありません。",
  "error.notFound": "Argus インスタンスが見つかりません。",
  "error.light": "選択したライトは Home Assistant で使用できません。",
  "error.background": "Argus は固定のデフォルト背景を使用します。",
  "error.widgetTitle": "⚠️ ウィジェットエラー",
  "error.widgetBody": "コンポーネントをレンダリングできませんでした。",
  "activity.armed": "システム警戒開始",
  "activity.disarmed": "システム警戒解除",
  "activity.cancelled": "警戒開始がキャンセルされました",
  "activity.rejected": "警戒開始が拒否されました",
  "activity.restored": "設定が復元されました",
  "activity.cleared": "監査ログが消去されました",
  "activity.automation": "自動化が実行されました",
  "activity.updated": "設定が更新されました",
  "activity.historic": "履歴イベント"
}, hh = {
  "app.panel": "Панель безпеки",
  "app.instance": "Екземпляр",
  "app.language": "Мова",
  "app.none": "Екземпляри Argus не налаштовано.",
  "app.setup": "Налаштувати Argus",
  "app.profile": "Виберіть профіль",
  "app.complete": "Завершити початкове налаштування",
  "widget.security": "Стан безпеки",
  "widget.activity": "Активність",
  "widget.automations": "Автоматизації",
  "widget.access": "Доступ і SOS",
  "widget.alarm": "Налаштування сигналізації",
  "widget.backup": "Резервна копія",
  "widget.support": "Підтримати Argus",
  "action.home": "Увімкнути охорону вдома",
  "action.away": "Увімкнути охорону поза домом",
  "action.disarm": "Зняти з охорони",
  "action.refresh": "Оновити",
  "action.export": "Експортувати",
  "action.restore": "Відновити",
  "action.logout": "Вийти",
  "action.save": "Зберегти",
  "action.delete": "Видалити",
  "action.enable": "Увімкнути",
  "action.disable": "Вимкнути",
  "action.open": "Відкрити в Home Assistant",
  "action.manage": "Керувати автоматизаціями в Home Assistant",
  "action.addProfile": "Додати профіль",
  "action.addRule": "Додати правило",
  "action.saveMode": "Зберегти режим",
  "action.saveName": "Зберегти назву",
  "action.saveAdvanced": "Зберегти розширені параметри",
  "action.clear": "Очистити журнал",
  "status.review": "Стан на перевірці",
  "status.unavailable": "недоступно",
  "status.active": "активний",
  "status.disabled": "вимкнено",
  "status.enabled": "Увімкнено",
  "status.inactive": "Вимкнено",
  "status.configured": "(налаштовано)",
  "status.empty": "Немає недавньої активності",
  "status.event": "Подія",
  "status.incident": "Інцидент",
  "status.open": "відкрито",
  "sos.title": "Дії SOS",
  "sos.save": "Зберегти дії SOS",
  "sos.saving": "Збереження…",
  "sos.none": "Немає сумісних виходів SOS.",
  "sos.saved": "Дії SOS збережено для цього екземпляра.",
  "sos.permission": "Ваш профіль потребує дозволу «Керування SOS» для збереження цих виходів.",
  "sos.failed": "Не вдалося зберегти дії SOS. Перевірте дозвіл Керування SOS.",
  "automation.readOnly": "Автоматизації Home Assistant, пов’язані з цим екземпляром (тільки читання).",
  "automation.empty": "Немає автоматизацій Home Assistant, пов’язаних з цим екземпляром.",
  "automation.noCrud": "Argus не створює та не змінює автоматизації. Цей список доступний лише для читання обраного екземпляра.",
  "automation.dashboard": "Відкрити панель автоматизацій Home Assistant",
  "admin.title": "Розширене адміністрування",
  "admin.users": "Користувачі, PIN і присутність",
  "admin.modes": "Режими, датчики та сирени",
  "admin.automations": "Автоматизації Home Assistant",
  "admin.personalization": "Мультимедіа та теми",
  "admin.forensics": "Інциденти та криміналістика",
  "admin.advanced": "Розширена конфігурація",
  "admin.profiles": "Профілі та дозволи",
  "admin.presence": "Присутність",
  "admin.incidents": "Інциденти",
  "admin.audit": "Аудит",
  "field.name": "Назва",
  "field.rule": "Назва правила",
  "field.home": "Назва дому",
  "field.noHa": "Без облікового запису HA",
  "field.standard": "Стандартний",
  "field.admin": "Адміністратор",
  "field.arming": "Затримка постановки (секунди)",
  "field.entry": "Затримка входу (секунди)",
  "field.closed": "Вимагати закриття датчиків перед постановкою",
  "field.mqtt": "Публікувати стан MQTT",
  "field.people": "Особи, які активують правило",
  "field.sensors": "Активні датчики",
  "field.bypassed": "Обійдені датчики (байпас)",
  "field.entrySensors": "Датчики із затримкою входу",
  "field.sirens": "Сирени та виходи",
  "field.panels": "Зовнішні панелі",
  "field.lights": "Сигнальні лампи",
  "field.lightOptions": "Колір і миготіння ламп",
  "field.color": "Колір {entity}",
  "field.noFlash": "Без миготіння",
  "field.gentle": "М’яке миготіння",
  "field.rapid": "Швидке миготіння",
  "field.background": "Argus використовує єдиний фіксований фон за замовчуванням. Власні фони та анімована погода не підтримуються.",
  "field.codes": "Існуючі коди не відображаються. Введіть значення лише для заміни; залиште порожнім для збереження.",
  "field.armCode": "Вимагати код для постановки",
  "field.guest": "Увімкнути гостьовий код",
  "field.newGuest": "Новий гостьовий код",
  "field.duress": "PIN під примусом {configured}",
  "dashboard.loading": "Завантаження панелі…",
  "dashboard.edit": "✥ Редагувати панель",
  "dashboard.done": "✓ Готово",
  "dashboard.reset": "Скинути макет",
  "dashboard.resetWidget": "Скинути віджет",
  "dashboard.hide": "Сховати віджет",
  "dashboard.size": "Розмір",
  "dashboard.options": "Параметри",
  "dashboard.drag": "Перетягніть для переміщення",
  "dashboard.move": "Перемістити {widget}",
  "dashboard.hidden": "Приховані віджети",
  "dashboard.show": "Показати {widget}",
  "dashboard.finished": "Редагування завершено",
  "dashboard.restored": "Відновлено макет за замовчуванням",
  "dashboard.saved": "Позицію збережено",
  "dashboard.blocked": "Позицію заблоковано через зіткнення",
  "dashboard.resized": "Розмір {size}",
  "dashboard.widgetRestored": "Віджет скинуто",
  "dashboard.visible": "Віджет відображається",
  "dashboard.invisible": "Віджет приховано",
  "dashboard.confirm": "Скинути лише позиції, розміри та видимість панелі?",
  "dashboard.toolbar": "Редагування панелі",
  "profile.active": "Активний профіль: {name}",
  "profile.accessPin": "PIN доступу для {name}",
  "profile.removePin": "PIN для {name}; залиште порожнім для видалення",
  "profile.adminName": "Ім’я адміністратора Argus",
  "profile.disarmPin": "PIN для зняття з охорони (якщо застосовно)",
  "error.unknown": "Сталася неочікувана помилка.",
  "error.permission": "У вас немає дозволу на виконання цієї дії.",
  "error.notFound": "Екземпляр Argus не знайдено.",
  "error.light": "Обране світло недоступне в Home Assistant.",
  "error.background": "Argus використовує фіксований стандартний фон.",
  "error.widgetTitle": "⚠️ Помилка віджета",
  "error.widgetBody": "Не вдалося відрендерити компонент.",
  "activity.armed": "Систему поставлено на охорону",
  "activity.disarmed": "Систему знято з охорони",
  "activity.cancelled": "Постановку на охорону скасовано",
  "activity.rejected": "Постановку на охорону відхилено",
  "activity.restored": "Конфігурацію відновлено",
  "activity.cleared": "Журнал аудиту очищено",
  "activity.automation": "Автоматизацію виконано",
  "activity.updated": "Конфігурацію оновлено",
  "activity.historic": "Історична подія"
}, mh = { es: pc, en: ih, fr: ah, pt: oh, it: sh, "zh-Hans": lh, "zh-Hant": uh, hi: dh, ar: ch, ko: fh, ja: ph, uk: hh }, Kd = { unauthorized: "error.permission", not_found: "error.notFound", invalid_light: "error.light", light_unavailable: "error.light", unsupported: "error.background", "Requires Home Assistant administrator privileges": "error.permission", "Requires Argus administrator privileges": "error.permission", "Valid Argus session required": "error.permission", "Argus profile is disabled or deleted": "error.permission", "Argus entry not found": "error.notFound", "Argus uses a fixed default background": "error.background" }, gh = (s, c) => Object.entries(c || {}).reduce((o, [u, z]) => o.replaceAll(`{${u}}`, String(z)), s), Aa = (s, c, o) => gh(mh[s][c] ?? pc[c], o), vh = (s, c) => {
  const o = c;
  return Aa(s, Kd[o?.code || ""] || Kd[o?.message || ""] || "error.unknown");
}, hc = de.createContext(null);
function yh({ hass: s, children: c }) {
  const o = s.config?.language === "zh" ? "zh-Hans" : s.config?.language, u = Na.includes(o) ? o : "es", [z, C] = de.useState(u), W = de.useMemo(() => ({ locale: z, setLocale: C, t: (R, j) => Aa(z, R, j), error: (R) => vh(z, R) }), [z]);
  return /* @__PURE__ */ S.jsx(hc.Provider, { value: W, children: /* @__PURE__ */ S.jsx("div", { dir: z === "ar" ? "rtl" : "ltr", lang: z, "data-argus-locale": z, children: c }) });
}
function It() {
  const s = de.useContext(hc);
  if (!s) throw new Error("Argus I18nProvider is required");
  return s;
}
const wh = Xd.WidthProvider(Xd.Responsive);
function Sh({ widget: s, content: c, editing: o, size: u, bouncing: z, onSize: C, onHide: W, onReset: R }) {
  const { t: j } = It();
  return /* @__PURE__ */ S.jsxs("article", { className: `argus-widget argus-widget--size-${u.toLowerCase()}${z ? " argus-widget--settled" : ""}`, children: [
    /* @__PURE__ */ S.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ S.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": j("dashboard.move", { widget: s.title }), title: j("dashboard.drag"), children: "⋮⋮" }),
      /* @__PURE__ */ S.jsx("strong", { children: s.title }),
      /* @__PURE__ */ S.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ S.jsx("summary", { "aria-label": j("dashboard.options"), title: j("dashboard.options"), children: "•••" }),
        /* @__PURE__ */ S.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ S.jsx("span", { children: j("dashboard.size") }),
          /* @__PURE__ */ S.jsx("div", { children: ["XS", "S", "M", "L", "XL"].map((I) => /* @__PURE__ */ S.jsx("button", { type: "button", className: I === u ? "active" : "", onClick: () => C(I), children: I }, I)) }),
          /* @__PURE__ */ S.jsx("button", { type: "button", onClick: R, children: j("dashboard.resetWidget") }),
          /* @__PURE__ */ S.jsx("button", { type: "button", onClick: W, children: j("dashboard.hide") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: `argus-widget__content${s.kind === "access-control" ? " argus-widget__content--access" : ""}`, children: c })
  ] });
}
function xh({ widgets: s, storage: c, userId: o, dashboardId: u, onEditing: z, registerEditor: C, renderWidget: W }) {
  const { t: R } = It(), j = de.useMemo(() => Object.fromEntries(s.map((D) => [D.id, D.visible])), [s]), [I, $] = de.useState(Oa), [O, G] = de.useState(j), [ge, we] = de.useState(!1), [Y, L] = de.useState(!1), [v, d] = de.useState("lg"), [m, f] = de.useState(""), [h, w] = de.useState(""), _ = de.useRef(Oa), B = de.useRef(), V = de.useRef(), J = de.useRef(!1);
  de.useEffect(() => {
    C(we);
  }, [C]), de.useEffect(() => {
    let D = !0;
    return L(!1), Promise.all([c.load(o, u), c.loadVisibility?.(o, u)]).then(([y, A]) => {
      if (!D) return;
      const fe = Sr(y);
      $(fe), _.current = fe, A && G({ ...j, ...A }), L(!0);
    }), () => {
      D = !1;
    };
  }, [c, o, u, j]), de.useEffect(() => {
    z(ge), Y && J.current && !ge && c.save(o, u, _.current), J.current = ge;
  }, [ge, Y, z, c, o, u]), de.useEffect(() => {
    const D = (y) => {
      ge && (y.key === "Escape" ? (we(!1), f(R("dashboard.finished"))) : y.key === "Enter" && y.target === document.body && we(!1));
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [ge, R]), de.useEffect(() => () => {
    clearTimeout(B.current), clearTimeout(V.current);
  }, []);
  const le = (D, y = !1) => {
    $(D), _.current = D, clearTimeout(B.current), B.current = window.setTimeout(() => c.save(o, u, D), y ? 0 : 550);
  }, se = (D) => {
    w(D), clearTimeout(V.current), V.current = window.setTimeout(() => w(""), 260);
  }, ie = (D, y) => {
    const A = { ...O, [D]: y };
    G(A), c.saveVisibility?.(o, u, A), f(R(y ? "dashboard.visible" : "dashboard.invisible"));
  }, ve = (D, y, A) => {
    const fe = _.current, re = fe[v] || [], Oe = re.filter((X) => X.i !== D), Ce = As(Oe, y) ? nh(Oe, y, cn[v]) : y, Te = { ...fe, [v]: re.map((X) => X.i === D ? Ce : X) };
    le(Te, !0), f(A);
  }, _e = (D, y) => {
    const A = (_.current[v] || []).find((re) => re.i === D);
    if (!A) return;
    const fe = cc(y, cn[v]);
    ve(D, { ...A, ...fe, x: Math.max(0, Math.min(A.x, cn[v] - fe.w)) }, R("dashboard.resized", { size: y })), se(D);
  }, oe = (D) => {
    const y = (Oa[v] || []).find((A) => A.i === D);
    y && ve(D, { ...y }, R("dashboard.widgetRestored"));
  }, pe = (D, y, A) => {
    const fe = th(A, cn[v]), re = Ns(fe.w, fe.h, cn[v]);
    ve(A.i, fe, R("dashboard.resized", { size: re })), se(A.i);
  }, N = async () => {
    if (!confirm(R("dashboard.confirm"))) return;
    await c.reset(o, u);
    const D = Sr(null);
    G(j), le(D, !0), f(R("dashboard.restored"));
  }, ee = I[v] || [];
  return Y ? /* @__PURE__ */ S.jsxs("section", { className: `argus-dashboard ${ge ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ S.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: m }),
    /* @__PURE__ */ S.jsx(Ed, { children: /* @__PURE__ */ S.jsx(wh, { className: "argus-dashboard-grid", layouts: I, breakpoints: eh, cols: cn, rowHeight: 84, margin: [12, 12], containerPadding: [12, 12], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: ge, isResizable: ge, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (D) => d(D), onLayoutChange: (D, y) => {
      ge && ($(y), _.current = y);
    }, onResizeStop: pe, onDragStop: (D, y, A) => {
      const fe = (_.current[v] || []).filter((re) => re.i !== A.i);
      if (As(fe, A)) {
        $({ ..._.current }), f(R("dashboard.blocked"));
        return;
      }
      ve(A.i, A, R("dashboard.saved"));
    }, useCSSTransforms: !0, children: s.filter((D) => O[D.id] !== !1).map((D) => {
      const y = ee.find((fe) => fe.i === D.id), A = y ? Ns(y.w, y.h, cn[v]) : D.size;
      return /* @__PURE__ */ S.jsx("div", { children: /* @__PURE__ */ S.jsx(Ed, { children: /* @__PURE__ */ S.jsx(Sh, { widget: D, content: W(D), editing: ge, size: A, bouncing: h === D.id, onSize: (fe) => _e(D.id, fe), onHide: () => ie(D.id, !1), onReset: () => oe(D.id) }) }) }, D.id);
    }) }) }),
    /* @__PURE__ */ S.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": R("dashboard.toolbar"), children: [
      /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => we((D) => !D), children: ge ? window._argusDashboardReadyBtn || R("dashboard.done") : window._argusDashboardEditBtn || R("dashboard.edit") }),
      ge && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", onClick: N, children: window._argusDashboardResetBtn || R("dashboard.reset") }),
        /* @__PURE__ */ S.jsx("div", { className: "argus-dashboard__visibility", "aria-label": R("dashboard.hidden"), children: s.filter((D) => O[D.id] === !1).map((D) => /* @__PURE__ */ S.jsx("button", { type: "button", onClick: () => ie(D.id, !0), children: R("dashboard.show", { widget: D.title }) }, D.id)) })
      ] })
    ] })
  ] }) : /* @__PURE__ */ S.jsx("section", { className: "argus-dashboard", children: /* @__PURE__ */ S.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: R("dashboard.loading") }) });
}
const bh = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}", _h = ":host{display:block;min-height:100%;color:#f7f9ff;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:radial-gradient(circle at 20% 0,#263b65 0,transparent 34%),#0d1422}.argus-react-app{min-height:100vh;padding:24px;box-sizing:border-box}.argus-react-header{display:flex;align-items:center;justify-content:space-between;gap:20px;max-width:1480px;margin:0 auto 16px}.argus-react-header h1{margin:0;font-size:32px}.argus-react-header p{margin:4px 0;color:#b9c5dd}.argus-react-header label{display:grid;gap:5px;font-size:12px;font-weight:700}.argus-react-header select{min-width:220px;padding:10px 12px;border:1px solid #52617d;border-radius:10px;color:inherit;background:#172236}.argus-react-card{height:100%;box-sizing:border-box;padding:16px;color:#eef4ff}.argus-react-card h3{margin:18px 0 8px}.argus-react-card button,.argus-react-button{display:inline-flex;align-items:center;justify-content:center;margin:3px;padding:8px 11px;border:1px solid #7185a6;border-radius:10px;background:#213654;color:#fff;cursor:pointer}.argus-react-card button.danger{background:#8d293d}.argus-react-state{margin:0;text-transform:uppercase;font-size:22px;font-weight:800}.argus-react-actions{display:flex;flex-wrap:wrap;gap:6px}.argus-react-list{display:grid;gap:9px;margin:12px 0;padding:0;list-style:none}.argus-react-list li{display:grid;gap:3px;padding:9px;border-radius:10px;background:#ffffff12}.argus-react-list small{color:#b7c3d5}.argus-react-code{max-height:440px;overflow:auto;padding:12px;border-radius:12px;background:#09101c;color:#c7e4ff;font-size:12px}.argus-react-login{max-width:820px;margin:8vh auto;padding:28px;border:1px solid rgb(255 255 255 / 15%);border-radius:22px;background:#101c31e0;box-shadow:0 20px 60px #00000040}.argus-react-login button{padding:13px 16px;border:1px solid #6684b6;border-radius:12px;background:#23426e;color:#fff;cursor:pointer}.argus-react-profiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}.argus-react-profiles button{display:grid;gap:4px;text-align:left}.argus-react-profiles img{width:42px;height:42px;border-radius:50%;object-fit:cover}.argus-react-error{max-width:1480px;margin:12px auto;padding:12px;border-radius:10px;background:#6e1f32;color:#fff}.argus-react-sos{display:grid;gap:6px;max-height:240px;overflow:auto}.argus-react-sos label{display:flex;gap:8px;padding:7px;border-radius:8px;background:#ffffff0f}@media (max-width:700px){.argus-react-app{padding:14px}.argus-react-header{align-items:flex-start;flex-direction:column}.argus-react-header select{min-width:0;width:100%}}.argus-react-admin{max-width:1480px;margin:26px auto}.argus-react-admin>details{margin:10px 0;padding:14px;border:1px solid rgb(255 255 255 / 13%);border-radius:14px;background:#111d31c7}.argus-react-admin summary{cursor:pointer;font-weight:800}.argus-react-admin h3{margin:14px 0 7px}.argus-react-admin button{margin:3px;padding:7px 10px;border:1px solid #7185a6;border-radius:9px;background:#213654;color:#fff;cursor:pointer}.argus-react-admin button.danger{background:#8d293d}.argus-react-admin-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.argus-react-admin-grid fieldset{display:grid;gap:7px;max-height:330px;overflow:auto}.argus-react-admin-grid fieldset label{display:flex;gap:7px;padding:6px;background:#ffffff0d}.argus-react-form{display:grid;gap:9px;margin:12px 0}.argus-react-form input,.argus-react-form select,.argus-react-form textarea{padding:9px;border:1px solid #52617d;border-radius:9px;background:#101c2f;color:#fff}.argus-react-form textarea{min-height:100px;resize:vertical}@media (max-width:700px){.argus-react-admin-grid{grid-template-columns:1fr}}", kh = ":host,.argus-react-app{background:#101a2b!important;background-image:none!important}.argus-react-app{--argus-glass:linear-gradient(145deg,rgb(37 53 79 / 88%),rgb(18 29 48 / 92%));--argus-border:rgb(203 225 255 / 18%);--argus-highlight:rgb(255 255 255 / 12%)}.argus-widget,.argus-react-card,.argus-react-login,.argus-react-admin>details{background:var(--argus-glass)!important;border-color:var(--argus-border)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:inset 0 1px 0 var(--argus-highlight),0 12px 30px #0000002e!important}.argus-widget--size-xs .argus-react-card{padding:10px}.argus-widget--size-xs .argus-react-list,.argus-widget--size-xs .argus-react-actions{margin:4px 0;gap:3px}.argus-widget--size-xs .argus-react-list li{padding:5px}.argus-widget--size-xs .argus-react-code{max-height:120px;padding:6px;font-size:10px}.argus-widget--size-xs .argus-react-card p{display:none}.argus-react-support{display:grid;min-height:100%;place-content:center;gap:7px;text-align:center}.argus-react-support strong{font-size:clamp(12px,2vw,16px)}.argus-react-support a{display:inline-flex;justify-content:center;padding:6px 9px;border:1px solid var(--argus-border);border-radius:9px;color:#fff;background:#ffffff14;text-decoration:none}.argus-language-picker{position:fixed;right:14px;bottom:14px;z-index:500;display:flex;gap:6px;align-items:center;padding:7px 9px;border:1px solid var(--argus-border);border-radius:10px;color:#fff;background:#142238;box-shadow:0 8px 24px #00000047;font-size:12px}.argus-language-picker select{border:0;border-radius:6px;color:inherit;background:#243958;padding:3px}.dashboard-instances,#entries{animation:none!important;transition:none!important}.argus-dashboard-grid .react-grid-item{transition:transform .15s cubic-bezier(.2,.8,.2,1),width .15s cubic-bezier(.2,.8,.2,1),height .15s cubic-bezier(.2,.8,.2,1)!important}.argus-dashboard-grid .react-grid-item.react-resizable-resizing{transition:none!important}.argus-widget--settled{animation:argus-settle .23s cubic-bezier(.28,1.35,.55,1)}@keyframes argus-settle{0%{transform:scale(1)}55%{transform:scale(1.012)}to{transform:scale(1)}}@media (prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}[dir=rtl] .argus-react-app,[dir=rtl] .argus-widget{text-align:right}[dir=rtl] .argus-react-header,[dir=rtl] .argus-react-actions,[dir=rtl] .argus-react-support{flex-direction:row-reverse}[dir=rtl] input,[dir=rtl] select,[dir=rtl] textarea{direction:rtl;text-align:right}[dir=rtl] .argus-widget__drag-handle{direction:ltr}[dir=rtl] .react-resizable-handle{right:auto;left:0;transform:rotate(90deg)}", zh = { armed: "activity.armed", disarmed: "activity.disarmed", arming_cancelled: "activity.cancelled", arm_rejected: "activity.rejected", configuration_restored: "activity.restored", audit_log_cleared: "activity.cleared", automation_executed: "activity.automation", ui_configuration_updated: "activity.updated" };
function Eh(s, c) {
  const o = s.message_key || zh[s.action || ""];
  return o ? Aa(c, o, s.message_params) : Aa(c, "activity.historic");
}
function Ph(s, c, o = Date.now()) {
  const u = s.ts || s.timestamp;
  if (!u) return "";
  const z = new Date(u);
  if (Number.isNaN(z.getTime())) return "";
  const C = Math.round((z.getTime() - o) / 1e3), W = [["year", 31536e3], ["month", 2592e3], ["day", 86400], ["hour", 3600], ["minute", 60]], [R, j] = W.find(([, I]) => Math.abs(C) >= I) || ["second", 1];
  return `${new Intl.RelativeTimeFormat(c, { numeric: "auto" }).format(Math.round(C / j), R)} · ${new Intl.DateTimeFormat(c, { dateStyle: "medium", timeStyle: "short" }).format(z)}`;
}
function Zd(s) {
  return s.message_key ? s.detail || "" : s.detail || s.message || "";
}
const Oh = [
  { id: "security-status", kind: "security-status", title: "widget.security", size: "S", visible: !0 },
  { id: "activity-history", kind: "activity-history", title: "widget.activity", size: "M", visible: !0 },
  { id: "automations", kind: "automations", title: "widget.automations", size: "M", visible: !0 },
  { id: "access-control", kind: "access-control", title: "widget.access", size: "L", visible: !0 },
  { id: "alarm-configuration", kind: "alarm-configuration", title: "widget.alarm", size: "XL", visible: !0 },
  { id: "backup-restore", kind: "backup-restore", title: "widget.backup", size: "M", visible: !0 },
  { id: "support-argus", kind: "custom", title: "widget.support", size: "XS", minSize: "XS", visible: !0 }
], Ch = /* @__PURE__ */ new Set(["alarm_control_panel", "fan", "input_boolean", "light", "script", "siren", "switch"]), Jd = (s) => `argus:selected-entry:${s}`, Rh = /* @__PURE__ */ new Set(["entity_id", "device_id", "area_id", "config_entry_id", "service", "domain", "target"]);
function Ds(s, c, o = "") {
  return typeof s == "string" ? !!(c.has(s) || (o === "service" || o === "domain") && (s.startsWith("argus.") || s.startsWith("argus/"))) : Array.isArray(s) ? s.some((u) => Ds(u, c, o)) : !s || typeof s != "object" ? !1 : Object.entries(s).some(([u, z]) => Rh.has(u) && Ds(z, c, u));
}
async function jh(s, c, o, u) {
  const z = new Set(o.map((I) => I.entity_id).filter((I) => !!I)), C = u.filter((I) => z.has(I.entity_id)), W = /* @__PURE__ */ new Set([c, ...z, ...C.map((I) => I.device_id || ""), ...C.map((I) => I.area || "")]);
  W.delete("");
  const R = Object.values(s.states).filter((I) => I.entity_id.startsWith("automation.")), j = [];
  for (let I = 0; I < R.length; I += 8) {
    const $ = await Promise.all(R.slice(I, I + 8).map(async (O) => {
      const G = typeof O.attributes.id == "string" ? O.attributes.id : O.entity_id.slice(11);
      try {
        const ge = await s.callWS({ type: "config/automation/config", id: G });
        return Ds(ge, W) ? { id: G, name: String(O.attributes.friendly_name || O.entity_id), enabled: O.state !== "off" } : null;
      } catch {
        return null;
      }
    }));
    j.push(...$.filter((O) => O !== null));
  }
  return j;
}
class Nh extends rh {
  constructor(c, o, u) {
    super(), this.entryId = c, this.getUi = o, this.send = u;
  }
  async remote(c) {
    const o = this.getUi(), u = o.dashboard?.react_layout_v2 || {}, z = { ...o.dashboard || {}, react_layout_v2: { ...u, ...c, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } };
    await this.send("argus/save_ui", { dashboard: z }), o.dashboard = z;
  }
  async load(c, o) {
    const u = this.getUi().dashboard?.react_layout_v2 || {};
    return u.layouts ? Sr(u.layouts) : super.load(c, o);
  }
  async save(c, o, u) {
    await super.save(c, o, u), await this.remote({ layouts: u });
  }
  async loadVisibility(c, o) {
    return (this.getUi().dashboard?.react_layout_v2 || {}).visibility || super.loadVisibility(c, o);
  }
  async saveVisibility(c, o, u) {
    await super.saveVisibility(c, o, u), await this.remote({ visibility: u });
  }
  async reset(c, o) {
    await super.reset(c, o), await this.remote({ layouts: Sr(null), visibility: {} });
  }
}
function jn({ children: s }) {
  return /* @__PURE__ */ S.jsx("div", { className: "argus-react-card", children: s });
}
function Ah({ message: s }) {
  const { error: c } = It();
  return /* @__PURE__ */ S.jsx("p", { className: "argus-react-error", role: "alert", children: c(new Error(s)) });
}
function Dh({ hass: s }) {
  const { locale: c, setLocale: o, t: u, error: z } = It(), [C, W] = de.useState([]), [R, j] = de.useState(""), [I, $] = de.useState(null), [O, G] = de.useState(null), [ge, we] = de.useState([]), [Y, L] = de.useState([]), [v, d] = de.useState({}), [m, f] = de.useState({}), [h, w] = de.useState({}), [_, B] = de.useState([]), [V, J] = de.useState([]), [le, se] = de.useState([]), [ie, ve] = de.useState([]), [_e, oe] = de.useState(""), [pe, N] = de.useState(!1), ee = de.useMemo(() => Oh.map((U) => ({ ...U, title: u(U.title) })), [u]), D = s.user?.id || "anonymous", y = de.useRef({}), A = de.useRef("");
  y.current = O?.ui || y.current;
  const fe = de.useCallback(async (U, p = {}) => s.callWS({ type: U, ...p }), [s]), re = de.useCallback((U, p = {}) => R ? fe(U, { ...p, entry_id: R }) : Promise.reject(new Error("Selecciona una instancia Argus")), [R, fe]), Oe = de.useCallback(async () => {
    try {
      oe("");
      const U = await fe("argus/list_entries");
      W(U.entries);
      const p = localStorage.getItem(Jd(D)), P = [R, p, U.entries[0]?.entry_id].find((q) => q && U.entries.some((te) => te.entry_id === q)) || "";
      j(P);
    } catch (U) {
      oe(U instanceof Error ? U.message : "No se pudieron cargar las instancias");
    }
  }, [R, D, fe]);
  de.useEffect(() => {
    Oe();
  }, [Oe]);
  const Ce = de.useCallback(async () => {
    if (R)
      try {
        oe("");
        const U = await re("argus/login_bootstrap");
        if ($(U), U.has_active_session) {
          const p = await re("argus/dashboard");
          G(p);
        }
      } catch (U) {
        oe(U instanceof Error ? U.message : u("error.startArgus"));
      }
  }, [R, re, u]);
  de.useEffect(() => {
    R && (localStorage.setItem(Jd(D), R), Ce());
  }, [R, Ce, D]), de.useEffect(() => {
    const U = O?.ui.language === "zh" ? "zh-Hans" : O?.ui.language;
    if (!(!R || !O)) {
      if (A.current !== R && typeof U == "string" && Na.includes(U) && U !== c) {
        o(U);
        return;
      }
      A.current = R;
    }
  }, [O, R, c, o]), de.useEffect(() => {
    !O || A.current !== R || O.ui.language === c || re("argus/save_ui", { language: c }).then(() => G({ ...O, ui: { ...O.ui, language: c } })).catch((U) => oe(U instanceof Error ? U.message : u("error.saveLanguage")));
  }, [O, R, c, re, u]);
  const Te = de.useCallback(async () => {
    if (O)
      try {
        const [U, p, P, q, te, ce, Ie, He] = await Promise.all([re("argus/get_forensic_timeline", { limit: 40 }), re("argus/get_health"), re("argus/get_mode_config"), re("argus/get_advanced_config"), re("argus/get_incidents"), re("argus/get_audit_log"), re("argus/get_ha_users"), re("argus/get_ha_persons")]);
        we(U.timeline || []), d(p), f(P), w(q), B(te.incidents || []), J(ce.log || []), se(Ie.ha_users || []), ve(He.ha_persons || []), jh(s, R, O.entries, O.available_entities).then(L).catch(() => L([]));
      } catch (U) {
        oe(U instanceof Error ? U.message : u("error.updateDashboard"));
      }
  }, [O, R, s, re, u]);
  de.useEffect(() => {
    Te();
  }, [Te]);
  const X = (U) => {
    j(U), $(null), G(null), we([]), L([]);
  }, he = async (U) => {
    try {
      if (N(!0), U.access_pin_configured) {
        const p = window.prompt(u("profile.accessPin", { name: U.name }));
        if (!p) return;
        await re("argus/verify_access_pin", { argus_user_id: U.id, pin: p });
      } else await re("argus/select_profile", { argus_user_id: U.id });
      await Ce();
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.selectProfile"));
    } finally {
      N(!1);
    }
  }, Re = async () => {
    const U = window.prompt(u("profile.adminName"));
    if (U)
      try {
        N(!0), await re("argus/complete_first_run", { admin_name: U }), await Ce();
      } catch (p) {
        oe(p instanceof Error ? p.message : u("error.setupFailed"));
      } finally {
        N(!1);
      }
  }, Ae = async () => {
    try {
      await re("argus/logout_profile"), await Ce();
    } catch (U) {
      oe(U instanceof Error ? U.message : u("error.logoutFailed"));
    }
  }, De = async (U) => {
    try {
      const p = U === "disarm" && window.prompt(u("profile.disarmPin")) || void 0;
      await re("argus/perform_alarm_action", { action: U, ...p ? { code: p } : {} }), await Ce();
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.actionRejected"));
    }
  }, Be = async (U) => {
    if (O)
      try {
        const p = { ...O.ui.panic_output_settings || {} };
        Object.keys(p).forEach((q) => {
          U.includes(q) || delete p[q];
        }), U.forEach((q) => {
          p[q] ??= { flash_mode: "none" };
        });
        const P = await re("argus/save_panic_output_profile", { outputs: U, settings: p });
        G({ ...O, ui: { ...O.ui, panic_outputs: P.outputs || U, panic_output_settings: P.settings || p } });
      } catch (p) {
        const P = p instanceof Error ? p.message : u("error.saveSos");
        throw oe(P), new Error(P);
      }
  }, Ve = async () => {
    try {
      const U = await re("argus/export_config"), p = new Blob([JSON.stringify(U.config, null, 2)], { type: "application/json" }), P = URL.createObjectURL(p), q = document.createElement("a");
      q.href = P, q.download = `argus-${R}.json`, q.click(), URL.revokeObjectURL(P);
    } catch (U) {
      oe(U instanceof Error ? U.message : u("error.exportFailed"));
    }
  }, et = async (U) => {
    try {
      const p = JSON.parse(await U.text());
      await re("argus/restore_config", { config: p }), await Ce();
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.restoreFailed"));
    }
  }, x = async (U) => {
    try {
      await re("argus/save_ui", { users: U }), O && G({ ...O, ui: { ...O.ui, users: U } });
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.saveUsers"));
    }
  }, E = async (U, p) => {
    try {
      await re("argus/save_user_access_pin", { argus_user_id: U, pin: p }), await Te();
    } catch (P) {
      oe(P instanceof Error ? P.message : u("error.savePin"));
    }
  }, T = async (U) => {
    try {
      await re("argus/sync_presence_rules", { rules: U }), O && G({ ...O, ui: { ...O.ui, presence_rules: U } });
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.savePresence"));
    }
  }, Q = de.useCallback((U) => {
    if (s.navigate) {
      s.navigate(U);
      return;
    }
    window.location.assign(U);
  }, [s]), ue = async (U, p) => {
    try {
      const P = await re("argus/save_mode_config", { mode: U, config: p });
      f(P.modes);
    } catch (P) {
      oe(P instanceof Error ? P.message : u("error.saveMode"));
    }
  }, xe = async (U) => {
    try {
      await re("argus/save_advanced_config", { config: U }), w(U);
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.saveAdvanced"));
    }
  }, ze = async (U) => {
    try {
      await re("argus/save_ui", U), O && G({ ...O, ui: { ...O.ui, ...U } });
    } catch (p) {
      oe(p instanceof Error ? p.message : u("error.savePersonalization"));
    }
  }, Ne = async (U, p) => {
    try {
      await re("argus/update_incident", { incident_id: U, action: p }), await Te();
    } catch (P) {
      oe(P instanceof Error ? P.message : u("error.updateIncident"));
    }
  }, Me = async () => {
    if (window.confirm(u("action.clear") + "?"))
      try {
        await re("argus/clear_audit_log"), J([]);
      } catch (U) {
        oe(U instanceof Error ? U.message : u("error.clearAudit"));
      }
  }, Ge = de.useMemo(() => new Nh(R, () => y.current, re), [R, re]), Qe = (U) => O ? U.id === "security-status" ? /* @__PURE__ */ S.jsxs(jn, { children: [
    /* @__PURE__ */ S.jsx("p", { className: "argus-react-state", children: O.entries[0]?.state || u("status.unavailable") }),
    /* @__PURE__ */ S.jsxs("p", { children: [
      v.status || u("status.review"),
      " · ",
      v.readiness_score ?? "—",
      "%"
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "argus-react-actions", children: [
      /* @__PURE__ */ S.jsx("button", { onClick: () => void De("arm_home"), children: u("action.home") }),
      /* @__PURE__ */ S.jsx("button", { onClick: () => void De("arm_away"), children: u("action.away") }),
      /* @__PURE__ */ S.jsx("button", { onClick: () => void De("disarm"), children: u("action.disarm") }),
      /* @__PURE__ */ S.jsx("button", { className: "danger", onClick: () => void De("sos"), children: "SOS" })
    ] })
  ] }) : U.id === "activity-history" ? /* @__PURE__ */ S.jsxs(jn, { children: [
    /* @__PURE__ */ S.jsx("button", { onClick: () => void Te(), children: u("action.refresh") }),
    /* @__PURE__ */ S.jsx("ul", { className: "argus-react-list", children: ge.length ? ge.map((p, P) => /* @__PURE__ */ S.jsxs("li", { children: [
      /* @__PURE__ */ S.jsx("strong", { children: Eh(p, c) }),
      Zd(p) && /* @__PURE__ */ S.jsx("span", { children: Zd(p) }),
      /* @__PURE__ */ S.jsxs("small", { children: [
        p.user || "",
        " ",
        Ph(p, c)
      ] })
    ] }, `${p.ts || p.timestamp || ""}-${P}`)) : /* @__PURE__ */ S.jsx("li", { children: u("status.empty") }) })
  ] }) : U.id === "automations" ? /* @__PURE__ */ S.jsxs(jn, { children: [
    /* @__PURE__ */ S.jsx("p", { children: u("automation.readOnly") }),
    /* @__PURE__ */ S.jsx(mc, { items: Y, onOpen: (p) => Q(`/config/automation/edit/${encodeURIComponent(p)}`) }),
    /* @__PURE__ */ S.jsx("button", { onClick: () => Q("/config/automation/dashboard"), children: u("action.manage") })
  ] }) : U.id === "access-control" ? /* @__PURE__ */ S.jsxs(jn, { children: [
    /* @__PURE__ */ S.jsx("p", { children: u("profile.active", { name: O.current_profile?.name || "—" }) }),
    /* @__PURE__ */ S.jsx("button", { onClick: () => void Ae(), children: u("action.logout") }),
    /* @__PURE__ */ S.jsx("h3", { children: u("sos.title") }),
    /* @__PURE__ */ S.jsx(Th, { entities: O.available_entities, selected: O.ui.panic_outputs || [], canManage: O.current_profile?.role === "admin" || !!O.current_profile?.permissions?.manage_sos, onChange: Be })
  ] }) : U.id === "alarm-configuration" ? /* @__PURE__ */ S.jsxs(jn, { children: [
    /* @__PURE__ */ S.jsx("p", { children: u("widget.alarm") }),
    /* @__PURE__ */ S.jsx("pre", { className: "argus-react-code", children: JSON.stringify(m, null, 2) })
  ] }) : U.id === "support-argus" ? /* @__PURE__ */ S.jsx(jn, { children: /* @__PURE__ */ S.jsxs("div", { className: "argus-react-support", children: [
    /* @__PURE__ */ S.jsx("strong", { children: u("widget.support") }),
    /* @__PURE__ */ S.jsxs("div", { className: "argus-react-support-links", children: [
      /* @__PURE__ */ S.jsx("a", { href: "https://github.com/Chrisalvir1/Argus", target: "_blank", rel: "noreferrer", children: "★ GitHub" }),
      /* @__PURE__ */ S.jsx("a", { href: "https://paypal.me/CEstradaAlvir", target: "_blank", rel: "noreferrer", children: "☕ PayPal" })
    ] })
  ] }) }) : /* @__PURE__ */ S.jsxs(jn, { children: [
    /* @__PURE__ */ S.jsx("p", { children: u("widget.backup") }),
    /* @__PURE__ */ S.jsxs("div", { className: "argus-react-actions", children: [
      /* @__PURE__ */ S.jsx("button", { onClick: () => void Ve(), children: u("action.export") }),
      /* @__PURE__ */ S.jsxs("label", { className: "argus-react-button", children: [
        u("action.restore"),
        /* @__PURE__ */ S.jsx("input", { type: "file", accept: "application/json", hidden: !0, onChange: (p) => {
          const P = p.target.files?.[0];
          P && et(P);
        } })
      ] })
    ] })
  ] }) : null;
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx("style", { children: Sp + xp + bh + _h + kh }),
    /* @__PURE__ */ S.jsxs("main", { className: "argus-react-app", children: [
      /* @__PURE__ */ S.jsxs("header", { className: "argus-react-header", children: [
        /* @__PURE__ */ S.jsxs("div", { children: [
          /* @__PURE__ */ S.jsx("h1", { children: "Argus" }),
          /* @__PURE__ */ S.jsx("p", { children: u("app.panel") })
        ] }),
        /* @__PURE__ */ S.jsxs("label", { children: [
          u("app.instance"),
          /* @__PURE__ */ S.jsx("select", { value: R, onChange: (U) => X(U.target.value), disabled: !C.length, children: C.map((U) => /* @__PURE__ */ S.jsx("option", { value: U.entry_id, children: U.title || U.entity_id || U.entry_id }, U.entry_id)) })
        ] }),
        /* @__PURE__ */ S.jsxs("label", { children: [
          u("app.language"),
          /* @__PURE__ */ S.jsx("select", { value: c, onChange: (U) => o(U.target.value), children: Na.map((U) => /* @__PURE__ */ S.jsxs("option", { value: U, children: [
            fc[U],
            " (",
            U,
            ")"
          ] }, U)) })
        ] })
      ] }),
      _e && /* @__PURE__ */ S.jsx(Ah, { message: _e }),
      " ",
      !C.length && !_e && /* @__PURE__ */ S.jsx(jn, { children: u("app.none") }),
      I && !O && /* @__PURE__ */ S.jsxs("section", { className: "argus-react-login", children: [
        /* @__PURE__ */ S.jsx("h2", { children: I.first_run ? u("app.setup") : u("app.profile") }),
        I.first_run ? /* @__PURE__ */ S.jsx("button", { disabled: pe, onClick: () => void Re(), children: u("app.complete") }) : /* @__PURE__ */ S.jsx("div", { className: "argus-react-profiles", children: I.users.map((U) => /* @__PURE__ */ S.jsxs("button", { disabled: pe, onClick: () => void he(U), children: [
          U.picture && /* @__PURE__ */ S.jsx("img", { src: U.picture, alt: "" }),
          /* @__PURE__ */ S.jsx("strong", { children: U.name }),
          /* @__PURE__ */ S.jsxs("span", { children: [
            U.role === "admin" ? u("field.admin") : u("field.standard"),
            U.access_pin_configured ? " · PIN" : ""
          ] })
        ] }, U.id)) })
      ] }),
      O && Ge && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx(xh, { widgets: ee, storage: Ge, userId: O.current_profile?.id || D, dashboardId: R, onEditing: () => {
        }, registerEditor: () => {
        }, renderWidget: Qe }),
        /* @__PURE__ */ S.jsx(Mh, { dashboard: O, entities: O.available_entities, relatedAutomations: Y, modes: m, advanced: h, incidents: _, audit: V, haUsers: le, persons: ie, onUsers: x, onPin: E, onPresence: T, onNavigateAutomations: Q, onMode: ue, onAdvanced: xe, onPersonalization: ze, onIncident: Ne, onClearAudit: Me })
      ] })
    ] })
  ] });
}
function Th({ entities: s, selected: c, canManage: o, onChange: u }) {
  const { t: z, error: C } = It(), [W, R] = de.useState(c), [j, I] = de.useState(!1), [$, O] = de.useState("");
  de.useEffect(() => R(c), [c]);
  const G = s.filter((Y) => Ch.has(Y.entity_id.split(".", 1)[0] || "")), ge = (Y) => R((L) => L.includes(Y) ? L.filter((v) => v !== Y) : [...L, Y]), we = async () => {
    try {
      I(!0), O(""), await u(W), O(z("sos.saved"));
    } catch (Y) {
      O(C(Y));
    } finally {
      I(!1);
    }
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "argus-react-sos", children: [
    G.length ? G.map((Y) => /* @__PURE__ */ S.jsxs("label", { children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: W.includes(Y.entity_id), disabled: !o || j, onChange: () => ge(Y.entity_id) }),
      Y.name
    ] }, Y.entity_id)) : /* @__PURE__ */ S.jsx("p", { children: z("sos.none") }),
    o ? /* @__PURE__ */ S.jsx("button", { disabled: j, onClick: () => void we(), children: z(j ? "sos.saving" : "sos.save") }) : /* @__PURE__ */ S.jsx("p", { role: "alert", children: z("sos.permission") }),
    $ && /* @__PURE__ */ S.jsx("p", { role: "status", children: $ })
  ] });
}
function Mh(s) {
  const { t: c } = It();
  return s.dashboard.current_profile?.role !== "admin" ? null : /* @__PURE__ */ S.jsxs("section", { className: "argus-react-admin", children: [
    /* @__PURE__ */ S.jsx("h2", { children: c("admin.title") }),
    /* @__PURE__ */ S.jsxs("details", { children: [
      /* @__PURE__ */ S.jsx("summary", { children: c("admin.users") }),
      /* @__PURE__ */ S.jsx(Lh, { users: s.dashboard.ui.users || [], haUsers: s.haUsers, persons: s.persons, rules: s.dashboard.ui.presence_rules || [], onUsers: s.onUsers, onPin: s.onPin, onPresence: s.onPresence })
    ] }),
    /* @__PURE__ */ S.jsxs("details", { children: [
      /* @__PURE__ */ S.jsx("summary", { children: c("admin.modes") }),
      /* @__PURE__ */ S.jsx(Ih, { entities: s.entities, modes: s.modes, onSave: s.onMode })
    ] }),
    /* @__PURE__ */ S.jsxs("details", { children: [
      /* @__PURE__ */ S.jsx("summary", { children: c("admin.automations") }),
      /* @__PURE__ */ S.jsx("p", { children: c("automation.noCrud") }),
      /* @__PURE__ */ S.jsx(mc, { items: s.relatedAutomations, onOpen: (o) => s.onNavigateAutomations(`/config/automation/edit/${encodeURIComponent(o)}`) }),
      /* @__PURE__ */ S.jsx("button", { onClick: () => s.onNavigateAutomations("/config/automation/dashboard"), children: c("automation.dashboard") })
    ] }),
    /* @__PURE__ */ S.jsxs("details", { children: [
      /* @__PURE__ */ S.jsx("summary", { children: c("admin.personalization") }),
      /* @__PURE__ */ S.jsx(Hh, { ui: s.dashboard.ui, onSave: s.onPersonalization })
    ] }),
    /* @__PURE__ */ S.jsxs("details", { children: [
      /* @__PURE__ */ S.jsx("summary", { children: c("admin.forensics") }),
      /* @__PURE__ */ S.jsx(Wh, { incidents: s.incidents, audit: s.audit, onIncident: s.onIncident, onClear: s.onClearAudit })
    ] }),
    /* @__PURE__ */ S.jsxs("details", { children: [
      /* @__PURE__ */ S.jsx("summary", { children: c("admin.advanced") }),
      /* @__PURE__ */ S.jsx(Fh, { value: s.advanced, onSave: s.onAdvanced })
    ] })
  ] });
}
function Lh({ users: s, haUsers: c, persons: o, rules: u, onUsers: z, onPin: C, onPresence: W }) {
  const { t: R } = It(), [j, I] = de.useState(""), [$, O] = de.useState(""), [G, ge] = de.useState("standard"), [we, Y] = de.useState(""), [L, v] = de.useState([]), d = (f, h, w) => w(h.includes(f) ? h.filter((_) => _ !== f) : [...h, f]), m = () => {
    j.trim() && z([...s, { id: crypto.randomUUID(), name: j.trim(), role: G, ha_user_id: $ || void 0, enabled: !0, permissions: { view_status: !0, view_history: !0 } }]).then(() => {
      I(""), O("");
    });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "argus-react-admin-grid", children: [
    /* @__PURE__ */ S.jsxs("div", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: R("admin.profiles") }),
      /* @__PURE__ */ S.jsxs("div", { className: "argus-react-form", children: [
        /* @__PURE__ */ S.jsx("input", { value: j, placeholder: R("field.name"), onChange: (f) => I(f.target.value) }),
        /* @__PURE__ */ S.jsxs("select", { value: $, onChange: (f) => O(f.target.value), children: [
          /* @__PURE__ */ S.jsx("option", { value: "", children: R("field.noHa") }),
          c.map((f) => /* @__PURE__ */ S.jsx("option", { value: f.id, children: f.name }, f.id))
        ] }),
        /* @__PURE__ */ S.jsxs("select", { value: G, onChange: (f) => ge(f.target.value), children: [
          /* @__PURE__ */ S.jsx("option", { value: "standard", children: R("field.standard") }),
          /* @__PURE__ */ S.jsx("option", { value: "admin", children: R("field.admin") })
        ] }),
        /* @__PURE__ */ S.jsx("button", { onClick: m, children: R("action.addProfile") })
      ] }),
      /* @__PURE__ */ S.jsx("ul", { className: "argus-react-list", children: s.map((f) => /* @__PURE__ */ S.jsxs("li", { children: [
        /* @__PURE__ */ S.jsx("strong", { children: f.name }),
        /* @__PURE__ */ S.jsxs("span", { children: [
          f.enabled === !1 ? R("status.disabled") : R("status.active"),
          " · ",
          f.role === "admin" ? R("field.admin") : R("field.standard")
        ] }),
        /* @__PURE__ */ S.jsxs("div", { children: [
          /* @__PURE__ */ S.jsx("button", { onClick: () => void z(s.map((h) => h.id === f.id ? { ...h, enabled: !h.enabled } : h)), children: f.enabled === !1 ? R("action.enable") : R("action.disable") }),
          /* @__PURE__ */ S.jsx("button", { onClick: () => {
            const h = window.prompt(R("profile.removePin", { name: f.name }));
            h !== null && C(f.id, h);
          }, children: "PIN" }),
          /* @__PURE__ */ S.jsx("button", { className: "danger", onClick: () => void z(s.filter((h) => h.id !== f.id)), children: R("action.delete") })
        ] })
      ] }, f.id)) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: R("admin.presence") }),
      /* @__PURE__ */ S.jsx("input", { value: we, placeholder: R("field.rule"), onChange: (f) => Y(f.target.value) }),
      /* @__PURE__ */ S.jsxs("fieldset", { children: [
        /* @__PURE__ */ S.jsx("legend", { children: R("field.people") }),
        o.map((f) => /* @__PURE__ */ S.jsxs("label", { children: [
          /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: L.includes(f.entity_id), onChange: () => d(f.entity_id, L, v) }),
          f.name
        ] }, f.entity_id))
      ] }),
      /* @__PURE__ */ S.jsx("button", { onClick: () => {
        we.trim() && W([...u, { id: crypto.randomUUID(), name: we.trim(), enabled: !0, persons: L }]);
      }, children: R("action.addRule") })
    ] })
  ] });
}
function Ih({ entities: s, modes: c, onSave: o }) {
  const { t: u } = It(), [z, C] = de.useState("home"), [W, R] = de.useState([]), [j, I] = de.useState([]), [$, O] = de.useState([]), [G, ge] = de.useState([]), [we, Y] = de.useState([]), [L, v] = de.useState([]), [d, m] = de.useState({}), [f, h] = de.useState(!1), [w, _] = de.useState(""), [B, V] = de.useState(""), [J, le] = de.useState(!1), se = c[z] || {};
  de.useEffect(() => {
    const N = c[z] || {}, ee = (y) => Array.isArray(N[y]) ? N[y] : [], D = N.light_siren_settings || {};
    R(ee("sensors")), I(ee("bypassed_sensors")), O(ee("entry_sensors")), ge(ee("sirens")), Y(ee("external_panels")), v(Object.keys(D)), m(Object.fromEntries(Object.entries(D).map(([y, A]) => [y, { rgb_color: A.rgb_color || [255, 0, 0], flash_mode: A.flash_mode || "gentle" }]))), h(!!N.require_closed), _(N.arming_time == null ? "" : String(N.arming_time)), V(N.entry_delay == null ? "" : String(N.entry_delay)), le(!!N.mqtt_enabled);
  }, [z, c]);
  const ie = (N, ee, D) => D(ee.includes(N) ? ee.filter((y) => y !== N) : [...ee, N]), ve = [["field.sensors", s.filter((N) => N.entity_id.startsWith("binary_sensor.")), W, R], ["field.bypassed", s.filter((N) => N.entity_id.startsWith("binary_sensor.")), j, I], ["field.entrySensors", s.filter((N) => N.entity_id.startsWith("binary_sensor.")), $, O], ["field.sirens", s.filter((N) => ["siren", "switch"].includes(N.entity_id.split(".", 1)[0] || "")), G, ge], ["field.panels", s.filter((N) => N.entity_id.startsWith("alarm_control_panel.")), we, Y], ["field.lights", s.filter((N) => N.entity_id.startsWith("light.")), L, v]], _e = Object.fromEntries(L.map((N) => [N, d[N] || { rgb_color: [255, 0, 0], flash_mode: "gentle" }])), oe = (N, ee) => m((D) => ({ ...D, [N]: { rgb_color: [255, 0, 0], flash_mode: "gentle", ...D[N], ...ee } })), pe = (N) => `#${N.map((ee) => ee.toString(16).padStart(2, "0")).join("")}`;
  return /* @__PURE__ */ S.jsxs("div", { children: [
    /* @__PURE__ */ S.jsxs("div", { className: "argus-react-form", children: [
      /* @__PURE__ */ S.jsx("select", { "aria-label": u("admin.modes"), value: z, onChange: (N) => C(N.target.value), children: ["home", "away", "night", "vacation", "disarmed"].map((N) => /* @__PURE__ */ S.jsx("option", { children: N }, N)) }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        u("field.arming"),
        /* @__PURE__ */ S.jsx("input", { type: "number", min: "0", value: w, onChange: (N) => _(N.target.value) })
      ] }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        u("field.entry"),
        /* @__PURE__ */ S.jsx("input", { type: "number", min: "0", value: B, onChange: (N) => V(N.target.value) })
      ] }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: f, onChange: (N) => h(N.target.checked) }),
        " ",
        u("field.closed")
      ] }),
      /* @__PURE__ */ S.jsxs("label", { children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: J, onChange: (N) => le(N.target.checked) }),
        " ",
        u("field.mqtt")
      ] }),
      /* @__PURE__ */ S.jsx("button", { onClick: () => void o(z, { ...se, sensors: W, bypassed_sensors: j, entry_sensors: $, sirens: G, external_panels: we, light_siren_settings: _e, require_closed: f, arming_time: w === "" ? null : Number(w), entry_delay: B === "" ? null : Number(B), mqtt_enabled: J }), children: u("action.saveMode") })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "argus-react-admin-grid", children: ve.map(([N, ee, D, y]) => /* @__PURE__ */ S.jsxs("fieldset", { children: [
      /* @__PURE__ */ S.jsx("legend", { children: u(N) }),
      ee.map((A) => /* @__PURE__ */ S.jsxs("label", { children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: D.includes(A.entity_id), onChange: () => ie(A.entity_id, D, y) }),
        A.name
      ] }, A.entity_id))
    ] }, N)) }),
    L.length > 0 && /* @__PURE__ */ S.jsxs("fieldset", { children: [
      /* @__PURE__ */ S.jsx("legend", { children: u("field.lightOptions") }),
      L.map((N) => {
        const ee = d[N] || { rgb_color: [255, 0, 0], flash_mode: "gentle" };
        return /* @__PURE__ */ S.jsxs("label", { children: [
          N,
          /* @__PURE__ */ S.jsx("input", { "aria-label": u("field.color", { entity: N }), type: "color", value: pe(ee.rgb_color), onChange: (D) => {
            const y = D.target.value;
            oe(N, { rgb_color: [parseInt(y.slice(1, 3), 16), parseInt(y.slice(3, 5), 16), parseInt(y.slice(5, 7), 16)] });
          } }),
          /* @__PURE__ */ S.jsxs("select", { "aria-label": u("field.lightOptions"), value: ee.flash_mode, onChange: (D) => oe(N, { flash_mode: D.target.value }), children: [
            /* @__PURE__ */ S.jsx("option", { value: "none", children: u("field.noFlash") }),
            /* @__PURE__ */ S.jsx("option", { value: "gentle", children: u("field.gentle") }),
            /* @__PURE__ */ S.jsx("option", { value: "rapid", children: u("field.rapid") })
          ] })
        ] }, N);
      })
    ] })
  ] });
}
function mc({ items: s, onOpen: c }) {
  const { t: o } = It();
  return /* @__PURE__ */ S.jsx("ul", { className: "argus-react-list", children: s.length ? s.map((u) => /* @__PURE__ */ S.jsxs("li", { children: [
    /* @__PURE__ */ S.jsx("strong", { children: u.name }),
    /* @__PURE__ */ S.jsx("span", { children: u.enabled ? o("status.enabled") : o("status.inactive") }),
    /* @__PURE__ */ S.jsx("button", { onClick: () => c(u.id), children: o("action.open") })
  ] }, u.id)) : /* @__PURE__ */ S.jsx("li", { children: o("automation.empty") }) });
}
function Hh({ ui: s, onSave: c }) {
  const { t: o, locale: u, setLocale: z } = It(), [C, W] = de.useState(s.home_name || ""), [R, j] = de.useState(s.language || u), I = async () => {
    z(R), await c({ home_name: C, language: R });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "argus-react-form", children: [
    /* @__PURE__ */ S.jsx("p", { children: o("field.background") }),
    /* @__PURE__ */ S.jsx("input", { value: C, placeholder: o("field.home"), onChange: ($) => W($.target.value) }),
    /* @__PURE__ */ S.jsxs("label", { children: [
      o("app.language"),
      ": ",
      /* @__PURE__ */ S.jsx("select", { value: R, onChange: ($) => j($.target.value), children: Na.map(($) => /* @__PURE__ */ S.jsxs("option", { value: $, children: [
        fc[$],
        " (",
        $,
        ")"
      ] }, $)) })
    ] }),
    /* @__PURE__ */ S.jsx("button", { onClick: () => void I(), children: o("action.save") })
  ] });
}
function Wh({ incidents: s, audit: c, onIncident: o, onClear: u }) {
  const { t: z } = It();
  return /* @__PURE__ */ S.jsxs("div", { className: "argus-react-admin-grid", children: [
    /* @__PURE__ */ S.jsxs("div", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: z("admin.incidents") }),
      /* @__PURE__ */ S.jsx("ul", { className: "argus-react-list", children: s.map((C) => /* @__PURE__ */ S.jsxs("li", { children: [
        /* @__PURE__ */ S.jsx("strong", { children: String(C.title || C.id || z("status.incident")) }),
        /* @__PURE__ */ S.jsx("span", { children: String(C.status || z("status.open")) }),
        /* @__PURE__ */ S.jsx("div", { children: ["confirm", "false_alarm", "silence_siren", "resolve"].map((W) => /* @__PURE__ */ S.jsx("button", { onClick: () => void o(String(C.id), W), children: W }, W)) })
      ] }, String(C.id))) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { children: [
      /* @__PURE__ */ S.jsx("h3", { children: z("admin.audit") }),
      /* @__PURE__ */ S.jsx("button", { className: "danger", onClick: () => void u(), children: z("action.clear") }),
      /* @__PURE__ */ S.jsx("ul", { className: "argus-react-list", children: c.slice(0, 50).map((C, W) => /* @__PURE__ */ S.jsxs("li", { children: [
        /* @__PURE__ */ S.jsx("strong", { children: String(C.action || z("status.event")) }),
        /* @__PURE__ */ S.jsx("span", { children: String(C.message || "") }),
        /* @__PURE__ */ S.jsx("small", { children: String(C.ts || "") })
      ] }, String(C.ts || W))) })
    ] })
  ] });
}
function Fh({ value: s, onSave: c }) {
  const { t: o } = It(), [u, z] = de.useState(""), [C, W] = de.useState(""), [R, j] = de.useState(!!s.guest_code_enabled), [I, $] = de.useState(!!s.code_arm_required);
  return de.useEffect(() => {
    j(!!s.guest_code_enabled), $(!!s.code_arm_required);
  }, [s]), /* @__PURE__ */ S.jsxs("div", { className: "argus-react-form", children: [
    /* @__PURE__ */ S.jsx("p", { children: o("field.codes") }),
    /* @__PURE__ */ S.jsxs("label", { children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: I, onChange: (O) => $(O.target.checked) }),
      " ",
      o("field.armCode")
    ] }),
    /* @__PURE__ */ S.jsxs("label", { children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: R, onChange: (O) => j(O.target.checked) }),
      " ",
      o("field.guest"),
      " ",
      s.guest_code_configured ? o("status.configured") : ""
    ] }),
    /* @__PURE__ */ S.jsx("input", { type: "password", inputMode: "numeric", value: u, placeholder: o("field.newGuest"), onChange: (O) => z(O.target.value) }),
    /* @__PURE__ */ S.jsx("input", { type: "password", inputMode: "numeric", value: C, placeholder: o("field.duress", { configured: s.duress_pin_configured ? o("status.configured") : "" }), onChange: (O) => W(O.target.value) }),
    /* @__PURE__ */ S.jsx("button", { onClick: () => void c({ ...s, code_arm_required: I, guest_code_enabled: R, ...u ? { guest_code: u } : {}, ...C ? { duress_pin: C } : {} }), children: o("action.saveAdvanced") })
  ] });
}
class qh extends HTMLElement {
  root;
  value;
  set hass(c) {
    this.value = c, this.render();
  }
  get hass() {
    return this.value;
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = void 0;
  }
  render() {
    if (!this.isConnected || !this.value) return;
    const c = this.shadowRoot || this.attachShadow({ mode: "open" });
    this.root ??= vp.createRoot(c), this.root.render(de.createElement(yh, { hass: this.value }, de.createElement(Dh, { hass: this.value })));
  }
}
function $h() {
  customElements.get("argus-panel-v2018") || customElements.define("argus-panel-v2018", qh);
}
export {
  $h as applyArgusFrontend
};
