function lp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function sp(a) {
  if (a.__esModule) return a;
  var c = a.default;
  if (typeof c == "function") {
    var l = function f() {
      return this instanceof f ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    l.prototype = c.prototype;
  } else l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(a).forEach(function(f) {
    var b = Object.getOwnPropertyDescriptor(a, f);
    Object.defineProperty(l, f, b.get ? b : {
      enumerable: !0,
      get: function() {
        return a[f];
      }
    });
  }), l;
}
var zo = {}, xs = { exports: {} }, zt = {}, ws = { exports: {} }, Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function ap() {
  if (mc) return Ne;
  mc = 1;
  var a = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), M = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), B = Symbol.iterator;
  function V(w) {
    return w === null || typeof w != "object" ? null : (w = B && w[B] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var we = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, xe = Object.assign, Q = {};
  function N(w, T, ye) {
    this.props = w, this.context = T, this.refs = Q, this.updater = ye || we;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(w, T) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, T, "setState");
  }, N.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function x() {
  }
  x.prototype = N.prototype;
  function u(w, T, ye) {
    this.props = w, this.context = T, this.refs = Q, this.updater = ye || we;
  }
  var h = u.prototype = new x();
  h.constructor = u, xe(h, N.prototype), h.isPureReactComponent = !0;
  var d = Array.isArray, p = Object.prototype.hasOwnProperty, m = { current: null }, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(w, T, ye) {
    var _e, Ce = {}, Pe = null, De = null;
    if (T != null) for (_e in T.ref !== void 0 && (De = T.ref), T.key !== void 0 && (Pe = "" + T.key), T) p.call(T, _e) && !z.hasOwnProperty(_e) && (Ce[_e] = T[_e]);
    var Z = arguments.length - 2;
    if (Z === 1) Ce.children = ye;
    else if (1 < Z) {
      for (var ae = Array(Z), ze = 0; ze < Z; ze++) ae[ze] = arguments[ze + 2];
      Ce.children = ae;
    }
    if (w && w.defaultProps) for (_e in Z = w.defaultProps, Z) Ce[_e] === void 0 && (Ce[_e] = Z[_e]);
    return { $$typeof: a, type: w, key: Pe, ref: De, props: Ce, _owner: m.current };
  }
  function U(w, T) {
    return { $$typeof: a, type: w.type, key: T, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function te(w) {
    return typeof w == "object" && w !== null && w.$$typeof === a;
  }
  function le(w) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ye) {
      return T[ye];
    });
  }
  var ie = /\/+/g;
  function re(w, T) {
    return typeof w == "object" && w !== null && w.key != null ? le("" + w.key) : T.toString(36);
  }
  function me(w, T, ye, _e, Ce) {
    var Pe = typeof w;
    (Pe === "undefined" || Pe === "boolean") && (w = null);
    var De = !1;
    if (w === null) De = !0;
    else switch (Pe) {
      case "string":
      case "number":
        De = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case a:
          case c:
            De = !0;
        }
    }
    if (De) return De = w, Ce = Ce(De), w = _e === "" ? "." + re(De, 0) : _e, d(Ce) ? (ye = "", w != null && (ye = w.replace(ie, "$&/") + "/"), me(Ce, T, ye, "", function(ze) {
      return ze;
    })) : Ce != null && (te(Ce) && (Ce = U(Ce, ye + (!Ce.key || De && De.key === Ce.key ? "" : ("" + Ce.key).replace(ie, "$&/") + "/") + w)), T.push(Ce)), 1;
    if (De = 0, _e = _e === "" ? "." : _e + ":", d(w)) for (var Z = 0; Z < w.length; Z++) {
      Pe = w[Z];
      var ae = _e + re(Pe, Z);
      De += me(Pe, T, ye, ae, Ce);
    }
    else if (ae = V(w), typeof ae == "function") for (w = ae.call(w), Z = 0; !(Pe = w.next()).done; ) Pe = Pe.value, ae = _e + re(Pe, Z++), De += me(Pe, T, ye, ae, Ce);
    else if (Pe === "object") throw T = String(w), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return De;
  }
  function Se(w, T, ye) {
    if (w == null) return w;
    var _e = [], Ce = 0;
    return me(w, _e, "", "", function(Pe) {
      return T.call(ye, Pe, Ce++);
    }), _e;
  }
  function pe(w) {
    if (w._status === -1) {
      var T = w._result;
      T = T(), T.then(function(ye) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ye);
      }, function(ye) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ye);
      }), w._status === -1 && (w._status = 0, w._result = T);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ue = { current: null }, G = { transition: null }, W = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: G, ReactCurrentOwner: m };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ne.Children = { map: Se, forEach: function(w, T, ye) {
    Se(w, function() {
      T.apply(this, arguments);
    }, ye);
  }, count: function(w) {
    var T = 0;
    return Se(w, function() {
      T++;
    }), T;
  }, toArray: function(w) {
    return Se(w, function(T) {
      return T;
    }) || [];
  }, only: function(w) {
    if (!te(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Ne.Component = N, Ne.Fragment = l, Ne.Profiler = b, Ne.PureComponent = u, Ne.StrictMode = f, Ne.Suspense = j, Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, Ne.act = q, Ne.cloneElement = function(w, T, ye) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var _e = xe({}, w.props), Ce = w.key, Pe = w.ref, De = w._owner;
    if (T != null) {
      if (T.ref !== void 0 && (Pe = T.ref, De = m.current), T.key !== void 0 && (Ce = "" + T.key), w.type && w.type.defaultProps) var Z = w.type.defaultProps;
      for (ae in T) p.call(T, ae) && !z.hasOwnProperty(ae) && (_e[ae] = T[ae] === void 0 && Z !== void 0 ? Z[ae] : T[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) _e.children = ye;
    else if (1 < ae) {
      Z = Array(ae);
      for (var ze = 0; ze < ae; ze++) Z[ze] = arguments[ze + 2];
      _e.children = Z;
    }
    return { $$typeof: a, type: w.type, key: Ce, ref: Pe, props: _e, _owner: De };
  }, Ne.createContext = function(w) {
    return w = { $$typeof: M, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: R, _context: w }, w.Consumer = w;
  }, Ne.createElement = I, Ne.createFactory = function(w) {
    var T = I.bind(null, w);
    return T.type = w, T;
  }, Ne.createRef = function() {
    return { current: null };
  }, Ne.forwardRef = function(w) {
    return { $$typeof: F, render: w };
  }, Ne.isValidElement = te, Ne.lazy = function(w) {
    return { $$typeof: Y, _payload: { _status: -1, _result: w }, _init: pe };
  }, Ne.memo = function(w, T) {
    return { $$typeof: A, type: w, compare: T === void 0 ? null : T };
  }, Ne.startTransition = function(w) {
    var T = G.transition;
    G.transition = {};
    try {
      w();
    } finally {
      G.transition = T;
    }
  }, Ne.unstable_act = q, Ne.useCallback = function(w, T) {
    return ue.current.useCallback(w, T);
  }, Ne.useContext = function(w) {
    return ue.current.useContext(w);
  }, Ne.useDebugValue = function() {
  }, Ne.useDeferredValue = function(w) {
    return ue.current.useDeferredValue(w);
  }, Ne.useEffect = function(w, T) {
    return ue.current.useEffect(w, T);
  }, Ne.useId = function() {
    return ue.current.useId();
  }, Ne.useImperativeHandle = function(w, T, ye) {
    return ue.current.useImperativeHandle(w, T, ye);
  }, Ne.useInsertionEffect = function(w, T) {
    return ue.current.useInsertionEffect(w, T);
  }, Ne.useLayoutEffect = function(w, T) {
    return ue.current.useLayoutEffect(w, T);
  }, Ne.useMemo = function(w, T) {
    return ue.current.useMemo(w, T);
  }, Ne.useReducer = function(w, T, ye) {
    return ue.current.useReducer(w, T, ye);
  }, Ne.useRef = function(w) {
    return ue.current.useRef(w);
  }, Ne.useState = function(w) {
    return ue.current.useState(w);
  }, Ne.useSyncExternalStore = function(w, T, ye) {
    return ue.current.useSyncExternalStore(w, T, ye);
  }, Ne.useTransition = function() {
    return ue.current.useTransition();
  }, Ne.version = "18.3.1", Ne;
}
var yc;
function Rt() {
  return yc || (yc = 1, ws.exports = ap()), ws.exports;
}
var Ss = { exports: {} }, _s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function up() {
  return vc || (vc = 1, function(a) {
    function c(G, W) {
      var q = G.length;
      G.push(W);
      e: for (; 0 < q; ) {
        var w = q - 1 >>> 1, T = G[w];
        if (0 < b(T, W)) G[w] = W, G[q] = T, q = w;
        else break e;
      }
    }
    function l(G) {
      return G.length === 0 ? null : G[0];
    }
    function f(G) {
      if (G.length === 0) return null;
      var W = G[0], q = G.pop();
      if (q !== W) {
        G[0] = q;
        e: for (var w = 0, T = G.length, ye = T >>> 1; w < ye; ) {
          var _e = 2 * (w + 1) - 1, Ce = G[_e], Pe = _e + 1, De = G[Pe];
          if (0 > b(Ce, q)) Pe < T && 0 > b(De, Ce) ? (G[w] = De, G[Pe] = q, w = Pe) : (G[w] = Ce, G[_e] = q, w = _e);
          else if (Pe < T && 0 > b(De, q)) G[w] = De, G[Pe] = q, w = Pe;
          else break e;
        }
      }
      return W;
    }
    function b(G, W) {
      var q = G.sortIndex - W.sortIndex;
      return q !== 0 ? q : G.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      a.unstable_now = function() {
        return R.now();
      };
    } else {
      var M = Date, F = M.now();
      a.unstable_now = function() {
        return M.now() - F;
      };
    }
    var j = [], A = [], Y = 1, B = null, V = 3, we = !1, xe = !1, Q = !1, N = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(G) {
      for (var W = l(A); W !== null; ) {
        if (W.callback === null) f(A);
        else if (W.startTime <= G) f(A), W.sortIndex = W.expirationTime, c(j, W);
        else break;
        W = l(A);
      }
    }
    function d(G) {
      if (Q = !1, h(G), !xe) if (l(j) !== null) xe = !0, pe(p);
      else {
        var W = l(A);
        W !== null && ue(d, W.startTime - G);
      }
    }
    function p(G, W) {
      xe = !1, Q && (Q = !1, x(I), I = -1), we = !0;
      var q = V;
      try {
        for (h(W), B = l(j); B !== null && (!(B.expirationTime > W) || G && !le()); ) {
          var w = B.callback;
          if (typeof w == "function") {
            B.callback = null, V = B.priorityLevel;
            var T = w(B.expirationTime <= W);
            W = a.unstable_now(), typeof T == "function" ? B.callback = T : B === l(j) && f(j), h(W);
          } else f(j);
          B = l(j);
        }
        if (B !== null) var ye = !0;
        else {
          var _e = l(A);
          _e !== null && ue(d, _e.startTime - W), ye = !1;
        }
        return ye;
      } finally {
        B = null, V = q, we = !1;
      }
    }
    var m = !1, z = null, I = -1, U = 5, te = -1;
    function le() {
      return !(a.unstable_now() - te < U);
    }
    function ie() {
      if (z !== null) {
        var G = a.unstable_now();
        te = G;
        var W = !0;
        try {
          W = z(!0, G);
        } finally {
          W ? re() : (m = !1, z = null);
        }
      } else m = !1;
    }
    var re;
    if (typeof u == "function") re = function() {
      u(ie);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), Se = me.port2;
      me.port1.onmessage = ie, re = function() {
        Se.postMessage(null);
      };
    } else re = function() {
      N(ie, 0);
    };
    function pe(G) {
      z = G, m || (m = !0, re());
    }
    function ue(G, W) {
      I = N(function() {
        G(a.unstable_now());
      }, W);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, a.unstable_continueExecution = function() {
      xe || we || (xe = !0, pe(p));
    }, a.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < G ? Math.floor(1e3 / G) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, a.unstable_getFirstCallbackNode = function() {
      return l(j);
    }, a.unstable_next = function(G) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = V;
      }
      var q = V;
      V = W;
      try {
        return G();
      } finally {
        V = q;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(G, W) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var q = V;
      V = G;
      try {
        return W();
      } finally {
        V = q;
      }
    }, a.unstable_scheduleCallback = function(G, W, q) {
      var w = a.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? w + q : w) : q = w, G) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = q + T, G = { id: Y++, callback: W, priorityLevel: G, startTime: q, expirationTime: T, sortIndex: -1 }, q > w ? (G.sortIndex = q, c(A, G), l(j) === null && G === l(A) && (Q ? (x(I), I = -1) : Q = !0, ue(d, q - w))) : (G.sortIndex = T, c(j, G), xe || we || (xe = !0, pe(p))), G;
    }, a.unstable_shouldYield = le, a.unstable_wrapCallback = function(G) {
      var W = V;
      return function() {
        var q = V;
        V = W;
        try {
          return G.apply(this, arguments);
        } finally {
          V = q;
        }
      };
    };
  }(_s)), _s;
}
var xc;
function cp() {
  return xc || (xc = 1, Ss.exports = up()), Ss.exports;
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
function dp() {
  if (wc) return zt;
  wc = 1;
  var a = Rt(), c = cp();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = /* @__PURE__ */ new Set(), b = {};
  function R(e, t) {
    M(e, t), M(e + "Capture", t);
  }
  function M(e, t) {
    for (b[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var F = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), j = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, B = {};
  function V(e) {
    return j.call(B, e) ? !0 : j.call(Y, e) ? !1 : A.test(e) ? B[e] = !0 : (Y[e] = !0, !1);
  }
  function we(e, t, n, r) {
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
  function xe(e, t, n, r) {
    if (t === null || typeof t > "u" || we(e, t, n, r)) return !0;
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
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new Q(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new Q(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new Q(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new Q(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new Q(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new Q(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var x = /[\-:]([a-z])/g;
  function u(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      x,
      u
    );
    N[t] = new Q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(x, u);
    N[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(x, u);
    N[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = N.hasOwnProperty(t) ? N[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xe(t, n, i, r) && (n = null), r || i === null ? V(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = Symbol.for("react.element"), m = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), le = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Se = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), G = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, w;
  function T(e) {
    if (w === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      w = t && t[1] || "";
    }
    return `
` + w + e;
  }
  var ye = !1;
  function _e(e, t) {
    if (!e || ye) return "";
    ye = !0;
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
`), s = i.length - 1, g = o.length - 1; 1 <= s && 0 <= g && i[s] !== o[g]; ) g--;
        for (; 1 <= s && 0 <= g; s--, g--) if (i[s] !== o[g]) {
          if (s !== 1 || g !== 1)
            do
              if (s--, g--, 0 > g || i[s] !== o[g]) {
                var S = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
              }
            while (1 <= s && 0 <= g);
          break;
        }
      }
    } finally {
      ye = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function Ce(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
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
  function Pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case m:
        return "Portal";
      case U:
        return "Profiler";
      case I:
        return "StrictMode";
      case re:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case le:
        return (e.displayName || "Context") + ".Consumer";
      case te:
        return (e._context.displayName || "Context") + ".Provider";
      case ie:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Se:
        return t = e.displayName || null, t !== null ? t : Pe(e.type) || "Memo";
      case pe:
        t = e._payload, e = e._init;
        try {
          return Pe(e(t));
        } catch {
        }
    }
    return null;
  }
  function De(e) {
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
        return Pe(t);
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
  function Z(e) {
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
  function ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ze(e) {
    var t = ae(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    e._valueTracker || (e._valueTracker = ze(e));
  }
  function Le(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ae(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function nt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function E(e, t) {
    _(e, t);
    var n = Z(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $(e, t.type, n) : t.hasOwnProperty("defaultValue") && $(e, t.type, Z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function C(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $(e, t, n) {
    (t !== "number" || Be(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var oe = Array.isArray;
  function ge(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Z(n), t = null, i = 0; i < e.length; i++) {
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
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Oe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (oe(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Z(n) };
  }
  function Te(e, t) {
    var n = Z(t.value), r = Z(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function $e(e) {
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
  var y, P = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (y = y || document.createElement("div"), y.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = y.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function H(e, t) {
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
  }, se = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(e) {
    se.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ee[t] = ee[e];
    });
  });
  function Me(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ee.hasOwnProperty(e) && ee[e] ? ("" + t).trim() : t + "px";
  }
  function Ie(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Me(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Ke = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ft(e, t) {
    if (t) {
      if (Ke[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function At(e, t) {
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
  var Vt = null;
  function jn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gn = null, Dn = null, Zt = null;
  function wr(e) {
    if (e = Ur(e)) {
      if (typeof Gn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Hi(t), Gn(e.stateNode, e.type, t));
    }
  }
  function Sr(e) {
    Dn ? Zt ? Zt.push(e) : Zt = [e] : Dn = e;
  }
  function Yn() {
    if (Dn) {
      var e = Dn, t = Zt;
      if (Zt = Dn = null, wr(e), t) for (e = 0; e < t.length; e++) wr(t[e]);
    }
  }
  function yi(e, t) {
    return e(t);
  }
  function Is() {
  }
  var Mo = !1;
  function As(e, t, n) {
    if (Mo) return e(t, n);
    Mo = !0;
    try {
      return yi(e, t, n);
    } finally {
      Mo = !1, (Dn !== null || Zt !== null) && (Is(), Yn());
    }
  }
  function _r(e, t) {
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
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var Io = !1;
  if (F) try {
    var br = {};
    Object.defineProperty(br, "passive", { get: function() {
      Io = !0;
    } }), window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
  } catch {
    Io = !1;
  }
  function dd(e, t, n, r, i, o, s, g, S) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (K) {
      this.onError(K);
    }
  }
  var kr = !1, vi = null, xi = !1, Ao = null, fd = { onError: function(e) {
    kr = !0, vi = e;
  } };
  function pd(e, t, n, r, i, o, s, g, S) {
    kr = !1, vi = null, dd.apply(fd, arguments);
  }
  function hd(e, t, n, r, i, o, s, g, S) {
    if (pd.apply(this, arguments), kr) {
      if (kr) {
        var L = vi;
        kr = !1, vi = null;
      } else throw Error(l(198));
      xi || (xi = !0, Ao = L);
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
  function Hs(e) {
    if (Tn(e) !== e) throw Error(l(188));
  }
  function gd(e) {
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
          if (o === n) return Hs(i), e;
          if (o === r) return Hs(i), t;
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
  function Fs(e) {
    return e = gd(e), e !== null ? Bs(e) : null;
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
  var Us = c.unstable_scheduleCallback, qs = c.unstable_cancelCallback, md = c.unstable_shouldYield, yd = c.unstable_requestPaint, rt = c.unstable_now, vd = c.unstable_getCurrentPriorityLevel, Wo = c.unstable_ImmediatePriority, $s = c.unstable_UserBlockingPriority, wi = c.unstable_NormalPriority, xd = c.unstable_LowPriority, Vs = c.unstable_IdlePriority, Si = null, Gt = null;
  function wd(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : bd, Sd = Math.log, _d = Math.LN2;
  function bd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sd(e) / _d | 0) | 0;
  }
  var _i = 64, bi = 4194304;
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
  function ki(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var g = s & ~i;
      g !== 0 ? r = Er(g) : (o &= s, o !== 0 && (r = Er(o)));
    } else s = n & ~i, s !== 0 ? r = Er(s) : o !== 0 && (r = Er(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function kd(e, t) {
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
  function Ed(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - Wt(o), g = 1 << s, S = i[s];
      S === -1 ? (!(g & n) || g & r) && (i[s] = kd(g, t)) : S <= t && (e.expiredLanes |= g), o &= ~g;
    }
  }
  function Ho(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Gs() {
    var e = _i;
    return _i <<= 1, !(_i & 4194240) && (_i = 64), e;
  }
  function Fo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function zr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
  }
  function zd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Wt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Bo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Wt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var qe = 0;
  function Ys(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xs, Uo, Qs, Ks, Zs, qo = !1, Ei = [], dn = null, fn = null, pn = null, Rr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), hn = [], Rd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Js(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cr.delete(t.pointerId);
    }
  }
  function Or(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Ur(t), t !== null && Uo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Cd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = Or(dn, e, t, n, r, i), !0;
      case "dragenter":
        return fn = Or(fn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = Or(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Rr.set(o, Or(Rr.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Cr.set(o, Or(Cr.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function ea(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ws(n), t !== null) {
            e.blockedOn = t, Zs(e.priority, function() {
              Qs(n);
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
      var n = Vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vt = r, n.target.dispatchEvent(r), Vt = null;
      } else return t = Ur(n), t !== null && Uo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ta(e, t, n) {
    zi(e) && n.delete(t);
  }
  function Od() {
    qo = !1, dn !== null && zi(dn) && (dn = null), fn !== null && zi(fn) && (fn = null), pn !== null && zi(pn) && (pn = null), Rr.forEach(ta), Cr.forEach(ta);
  }
  function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qo || (qo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Od)));
  }
  function jr(e) {
    function t(i) {
      return Pr(i, e);
    }
    if (0 < Ei.length) {
      Pr(Ei[0], e);
      for (var n = 1; n < Ei.length; n++) {
        var r = Ei[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && Pr(dn, e), fn !== null && Pr(fn, e), pn !== null && Pr(pn, e), Rr.forEach(t), Cr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) ea(n), n.blockedOn === null && hn.shift();
  }
  var Xn = d.ReactCurrentBatchConfig, Ri = !0;
  function Pd(e, t, n, r) {
    var i = qe, o = Xn.transition;
    Xn.transition = null;
    try {
      qe = 1, $o(e, t, n, r);
    } finally {
      qe = i, Xn.transition = o;
    }
  }
  function jd(e, t, n, r) {
    var i = qe, o = Xn.transition;
    Xn.transition = null;
    try {
      qe = 4, $o(e, t, n, r);
    } finally {
      qe = i, Xn.transition = o;
    }
  }
  function $o(e, t, n, r) {
    if (Ri) {
      var i = Vo(e, t, n, r);
      if (i === null) ul(e, t, r, Ci, n), Js(e, r);
      else if (Cd(i, e, t, n, r)) r.stopPropagation();
      else if (Js(e, r), t & 4 && -1 < Rd.indexOf(e)) {
        for (; i !== null; ) {
          var o = Ur(i);
          if (o !== null && Xs(o), o = Vo(e, t, n, r), o === null && ul(e, t, r, Ci, n), o === i) break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else ul(e, t, r, null, n);
    }
  }
  var Ci = null;
  function Vo(e, t, n, r) {
    if (Ci = null, e = jn(r), e = Nn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ws(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ci = e, null;
  }
  function na(e) {
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
        switch (vd()) {
          case Wo:
            return 1;
          case $s:
            return 4;
          case wi:
          case xd:
            return 16;
          case Vs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, Go = null, Oi = null;
  function ra() {
    if (Oi) return Oi;
    var e, t = Go, n = t.length, r, i = "value" in gn ? gn.value : gn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
    return Oi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ji() {
    return !0;
  }
  function ia() {
    return !1;
  }
  function Ct(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(o) : o[g]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ji : ia, this.isPropagationStopped = ia, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ji);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ji);
    }, persist: function() {
    }, isPersistent: ji }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Yo = Ct(Qn), Dr = q({}, Qn, { view: 0, detail: 0 }), Dd = Ct(Dr), Xo, Qo, Tr, Di = q({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (Xo = e.screenX - Tr.screenX, Qo = e.screenY - Tr.screenY) : Qo = Xo = 0, Tr = e), Xo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qo;
  } }), oa = Ct(Di), Td = q({}, Di, { dataTransfer: 0 }), Nd = Ct(Td), Ld = q({}, Dr, { relatedTarget: 0 }), Ko = Ct(Ld), Md = q({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Id = Ct(Md), Ad = q({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Wd = Ct(Ad), Hd = q({}, Qn, { data: 0 }), la = Ct(Hd), Fd = {
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
  }, Bd = {
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
  }, Ud = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ud[e]) ? !!t[e] : !1;
  }
  function Zo() {
    return qd;
  }
  var $d = q({}, Dr, { key: function(e) {
    if (e.key) {
      var t = Fd[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zo, charCode: function(e) {
    return e.type === "keypress" ? Pi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Vd = Ct($d), Gd = q({}, Di, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sa = Ct(Gd), Yd = q({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zo }), Xd = Ct(Yd), Qd = q({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kd = Ct(Qd), Zd = q({}, Di, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jd = Ct(Zd), ef = [9, 13, 27, 32], Jo = F && "CompositionEvent" in window, Nr = null;
  F && "documentMode" in document && (Nr = document.documentMode);
  var tf = F && "TextEvent" in window && !Nr, aa = F && (!Jo || Nr && 8 < Nr && 11 >= Nr), ua = " ", ca = !1;
  function da(e, t) {
    switch (e) {
      case "keyup":
        return ef.indexOf(t.keyCode) !== -1;
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
  function fa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Kn = !1;
  function nf(e, t) {
    switch (e) {
      case "compositionend":
        return fa(t);
      case "keypress":
        return t.which !== 32 ? null : (ca = !0, ua);
      case "textInput":
        return e = t.data, e === ua && ca ? null : e;
      default:
        return null;
    }
  }
  function rf(e, t) {
    if (Kn) return e === "compositionend" || !Jo && da(e, t) ? (e = ra(), Oi = Go = gn = null, Kn = !1, e) : null;
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
        return aa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!of[e.type] : t === "textarea";
  }
  function ha(e, t, n, r) {
    Sr(r), t = Ii(t, "onChange"), 0 < t.length && (n = new Yo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Lr = null, Mr = null;
  function lf(e) {
    Da(e, 0);
  }
  function Ti(e) {
    var t = nr(e);
    if (Le(t)) return e;
  }
  function sf(e, t) {
    if (e === "change") return t;
  }
  var ga = !1;
  if (F) {
    var el;
    if (F) {
      var tl = "oninput" in document;
      if (!tl) {
        var ma = document.createElement("div");
        ma.setAttribute("oninput", "return;"), tl = typeof ma.oninput == "function";
      }
      el = tl;
    } else el = !1;
    ga = el && (!document.documentMode || 9 < document.documentMode);
  }
  function ya() {
    Lr && (Lr.detachEvent("onpropertychange", va), Mr = Lr = null);
  }
  function va(e) {
    if (e.propertyName === "value" && Ti(Mr)) {
      var t = [];
      ha(t, Mr, e, jn(e)), As(lf, t);
    }
  }
  function af(e, t, n) {
    e === "focusin" ? (ya(), Lr = t, Mr = n, Lr.attachEvent("onpropertychange", va)) : e === "focusout" && ya();
  }
  function uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ti(Mr);
  }
  function cf(e, t) {
    if (e === "click") return Ti(t);
  }
  function df(e, t) {
    if (e === "input" || e === "change") return Ti(t);
  }
  function ff(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : ff;
  function Ir(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!j.call(t, i) || !Ht(e[i], t[i])) return !1;
    }
    return !0;
  }
  function xa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wa(e, t) {
    var n = xa(e);
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
      n = xa(n);
    }
  }
  function Sa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _a() {
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
  function nl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function pf(e) {
    var t = _a(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sa(n.ownerDocument.documentElement, n)) {
      if (r !== null && nl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = wa(n, o);
          var s = wa(
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
  var hf = F && "documentMode" in document && 11 >= document.documentMode, Zn = null, rl = null, Ar = null, il = !1;
  function ba(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    il || Zn == null || Zn !== Be(r) || (r = Zn, "selectionStart" in r && nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ar && Ir(Ar, r) || (Ar = r, r = Ii(rl, "onSelect"), 0 < r.length && (t = new Yo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Ni("Animation", "AnimationEnd"), animationiteration: Ni("Animation", "AnimationIteration"), animationstart: Ni("Animation", "AnimationStart"), transitionend: Ni("Transition", "TransitionEnd") }, ol = {}, ka = {};
  F && (ka = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Li(e) {
    if (ol[e]) return ol[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ka) return ol[e] = t[n];
    return e;
  }
  var Ea = Li("animationend"), za = Li("animationiteration"), Ra = Li("animationstart"), Ca = Li("transitionend"), Oa = /* @__PURE__ */ new Map(), Pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    Oa.set(e, t), R(t, [e]);
  }
  for (var ll = 0; ll < Pa.length; ll++) {
    var sl = Pa[ll], gf = sl.toLowerCase(), mf = sl[0].toUpperCase() + sl.slice(1);
    mn(gf, "on" + mf);
  }
  mn(Ea, "onAnimationEnd"), mn(za, "onAnimationIteration"), mn(Ra, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Ca, "onTransitionEnd"), M("onMouseEnter", ["mouseout", "mouseover"]), M("onMouseLeave", ["mouseout", "mouseover"]), M("onPointerEnter", ["pointerout", "pointerover"]), M("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function ja(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, hd(r, t, void 0, e), e.currentTarget = null;
  }
  function Da(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var g = r[s], S = g.instance, L = g.currentTarget;
          if (g = g.listener, S !== o && i.isPropagationStopped()) break e;
          ja(i, g, L), o = S;
        }
        else for (s = 0; s < r.length; s++) {
          if (g = r[s], S = g.instance, L = g.currentTarget, g = g.listener, S !== o && i.isPropagationStopped()) break e;
          ja(i, g, L), o = S;
        }
      }
    }
    if (xi) throw e = Ao, xi = !1, Ao = null, e;
  }
  function Ye(e, t) {
    var n = t[gl];
    n === void 0 && (n = t[gl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ta(t, e, 2, !1), n.add(r));
  }
  function al(e, t, n) {
    var r = 0;
    t && (r |= 4), Ta(n, e, r, t);
  }
  var Mi = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Mi]) {
      e[Mi] = !0, f.forEach(function(n) {
        n !== "selectionchange" && (yf.has(n) || al(n, !1, e), al(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Mi] || (t[Mi] = !0, al("selectionchange", !1, t));
    }
  }
  function Ta(e, t, n, r) {
    switch (na(t)) {
      case 1:
        var i = Pd;
        break;
      case 4:
        i = jd;
        break;
      default:
        i = $o;
    }
    n = i.bind(null, t, n, e), i = void 0, !Io || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function ul(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var g = r.stateNode.containerInfo;
        if (g === i || g.nodeType === 8 && g.parentNode === i) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var S = s.tag;
          if ((S === 3 || S === 4) && (S = s.stateNode.containerInfo, S === i || S.nodeType === 8 && S.parentNode === i)) return;
          s = s.return;
        }
        for (; g !== null; ) {
          if (s = Nn(g), s === null) return;
          if (S = s.tag, S === 5 || S === 6) {
            r = o = s;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    As(function() {
      var L = o, K = jn(n), J = [];
      e: {
        var X = Oa.get(e);
        if (X !== void 0) {
          var ce = Yo, fe = e;
          switch (e) {
            case "keypress":
              if (Pi(n) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Vd;
              break;
            case "focusin":
              fe = "focus", ce = Ko;
              break;
            case "focusout":
              fe = "blur", ce = Ko;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Ko;
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
              ce = oa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Nd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Xd;
              break;
            case Ea:
            case za:
            case Ra:
              ce = Id;
              break;
            case Ca:
              ce = Kd;
              break;
            case "scroll":
              ce = Dd;
              break;
            case "wheel":
              ce = Jd;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Wd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = sa;
          }
          var he = (t & 4) !== 0, it = !he && e === "scroll", O = he ? X !== null ? X + "Capture" : null : X;
          he = [];
          for (var k = L, D; k !== null; ) {
            D = k;
            var ne = D.stateNode;
            if (D.tag === 5 && ne !== null && (D = ne, O !== null && (ne = _r(k, O), ne != null && he.push(Fr(k, ne, D)))), it) break;
            k = k.return;
          }
          0 < he.length && (X = new ce(X, fe, null, n, K), J.push({ event: X, listeners: he }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", X && n !== Vt && (fe = n.relatedTarget || n.fromElement) && (Nn(fe) || fe[Jt])) break e;
          if ((ce || X) && (X = K.window === K ? K : (X = K.ownerDocument) ? X.defaultView || X.parentWindow : window, ce ? (fe = n.relatedTarget || n.toElement, ce = L, fe = fe ? Nn(fe) : null, fe !== null && (it = Tn(fe), fe !== it || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ce = null, fe = L), ce !== fe)) {
            if (he = oa, ne = "onMouseLeave", O = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (he = sa, ne = "onPointerLeave", O = "onPointerEnter", k = "pointer"), it = ce == null ? X : nr(ce), D = fe == null ? X : nr(fe), X = new he(ne, k + "leave", ce, n, K), X.target = it, X.relatedTarget = D, ne = null, Nn(K) === L && (he = new he(O, k + "enter", fe, n, K), he.target = D, he.relatedTarget = it, ne = he), it = ne, ce && fe) t: {
              for (he = ce, O = fe, k = 0, D = he; D; D = er(D)) k++;
              for (D = 0, ne = O; ne; ne = er(ne)) D++;
              for (; 0 < k - D; ) he = er(he), k--;
              for (; 0 < D - k; ) O = er(O), D--;
              for (; k--; ) {
                if (he === O || O !== null && he === O.alternate) break t;
                he = er(he), O = er(O);
              }
              he = null;
            }
            else he = null;
            ce !== null && Na(J, X, ce, he, !1), fe !== null && it !== null && Na(J, it, fe, he, !0);
          }
        }
        e: {
          if (X = L ? nr(L) : window, ce = X.nodeName && X.nodeName.toLowerCase(), ce === "select" || ce === "input" && X.type === "file") var ve = sf;
          else if (pa(X)) if (ga) ve = df;
          else {
            ve = uf;
            var be = af;
          }
          else (ce = X.nodeName) && ce.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (ve = cf);
          if (ve && (ve = ve(e, L))) {
            ha(J, ve, n, K);
            break e;
          }
          be && be(e, X, L), e === "focusout" && (be = X._wrapperState) && be.controlled && X.type === "number" && $(X, "number", X.value);
        }
        switch (be = L ? nr(L) : window, e) {
          case "focusin":
            (pa(be) || be.contentEditable === "true") && (Zn = be, rl = L, Ar = null);
            break;
          case "focusout":
            Ar = rl = Zn = null;
            break;
          case "mousedown":
            il = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            il = !1, ba(J, n, K);
            break;
          case "selectionchange":
            if (hf) break;
          case "keydown":
          case "keyup":
            ba(J, n, K);
        }
        var ke;
        if (Jo) e: {
          switch (e) {
            case "compositionstart":
              var Re = "onCompositionStart";
              break e;
            case "compositionend":
              Re = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Re = "onCompositionUpdate";
              break e;
          }
          Re = void 0;
        }
        else Kn ? da(e, n) && (Re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Re = "onCompositionStart");
        Re && (aa && n.locale !== "ko" && (Kn || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Kn && (ke = ra()) : (gn = K, Go = "value" in gn ? gn.value : gn.textContent, Kn = !0)), be = Ii(L, Re), 0 < be.length && (Re = new la(Re, e, null, n, K), J.push({ event: Re, listeners: be }), ke ? Re.data = ke : (ke = fa(n), ke !== null && (Re.data = ke)))), (ke = tf ? nf(e, n) : rf(e, n)) && (L = Ii(L, "onBeforeInput"), 0 < L.length && (K = new la("onBeforeInput", "beforeinput", null, n, K), J.push({ event: K, listeners: L }), K.data = ke));
      }
      Da(J, t);
    });
  }
  function Fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ii(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = _r(e, n), o != null && r.unshift(Fr(e, o, i)), o = _r(e, t), o != null && r.push(Fr(e, o, i))), e = e.return;
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
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var g = n, S = g.alternate, L = g.stateNode;
      if (S !== null && S === r) break;
      g.tag === 5 && L !== null && (g = L, i ? (S = _r(n, o), S != null && s.unshift(Fr(n, S, g))) : i || (S = _r(n, o), S != null && s.push(Fr(n, S, g)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var vf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
  function La(e) {
    return (typeof e == "string" ? e : "" + e).replace(vf, `
`).replace(xf, "");
  }
  function Ai(e, t, n) {
    if (t = La(t), La(e) !== t && n) throw Error(l(425));
  }
  function Wi() {
  }
  var cl = null, dl = null;
  function fl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pl = typeof setTimeout == "function" ? setTimeout : void 0, wf = typeof clearTimeout == "function" ? clearTimeout : void 0, Ma = typeof Promise == "function" ? Promise : void 0, Sf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ma < "u" ? function(e) {
    return Ma.resolve(null).then(e).catch(_f);
  } : pl;
  function _f(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hl(e, t) {
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
  function Ia(e) {
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
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Br = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, gl = "__reactEvents$" + tr, bf = "__reactListeners$" + tr, kf = "__reactHandles$" + tr;
  function Nn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jt] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ia(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = Ia(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ur(e) {
    return e = e[Yt] || e[Jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Hi(e) {
    return e[Br] || null;
  }
  var ml = [], rr = -1;
  function vn(e) {
    return { current: e };
  }
  function Xe(e) {
    0 > rr || (e.current = ml[rr], ml[rr] = null, rr--);
  }
  function Ge(e, t) {
    rr++, ml[rr] = e.current, e.current = t;
  }
  var xn = {}, gt = vn(xn), St = vn(!1), Ln = xn;
  function ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function _t(e) {
    return e = e.childContextTypes, e != null;
  }
  function Fi() {
    Xe(St), Xe(gt);
  }
  function Aa(e, t, n) {
    if (gt.current !== xn) throw Error(l(168));
    Ge(gt, t), Ge(St, n);
  }
  function Wa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(l(108, De(e) || "Unknown", i));
    return q({}, n, r);
  }
  function Bi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Ln = gt.current, Ge(gt, e), Ge(St, St.current), !0;
  }
  function Ha(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Wa(e, t, Ln), r.__reactInternalMemoizedMergedChildContext = e, Xe(St), Xe(gt), Ge(gt, e)) : Xe(St), Ge(St, n);
  }
  var en = null, Ui = !1, yl = !1;
  function Fa(e) {
    en === null ? en = [e] : en.push(e);
  }
  function Ef(e) {
    Ui = !0, Fa(e);
  }
  function wn() {
    if (!yl && en !== null) {
      yl = !0;
      var e = 0, t = qe;
      try {
        var n = en;
        for (qe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        en = null, Ui = !1;
      } catch (i) {
        throw en !== null && (en = en.slice(e + 1)), Us(Wo, wn), i;
      } finally {
        qe = t, yl = !1;
      }
    }
    return null;
  }
  var or = [], lr = 0, qi = null, $i = 0, Dt = [], Tt = 0, Mn = null, tn = 1, nn = "";
  function In(e, t) {
    or[lr++] = $i, or[lr++] = qi, qi = e, $i = t;
  }
  function Ba(e, t, n) {
    Dt[Tt++] = tn, Dt[Tt++] = nn, Dt[Tt++] = Mn, Mn = e;
    var r = tn;
    e = nn;
    var i = 32 - Wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Wt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, tn = 1 << 32 - Wt(t) + i | n << i | r, nn = o + e;
    } else tn = 1 << o | n << i | r, nn = e;
  }
  function vl(e) {
    e.return !== null && (In(e, 1), Ba(e, 1, 0));
  }
  function xl(e) {
    for (; e === qi; ) qi = or[--lr], or[lr] = null, $i = or[--lr], or[lr] = null;
    for (; e === Mn; ) Mn = Dt[--Tt], Dt[Tt] = null, nn = Dt[--Tt], Dt[Tt] = null, tn = Dt[--Tt], Dt[Tt] = null;
  }
  var Ot = null, Pt = null, Ze = !1, Ft = null;
  function Ua(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function qa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ot = e, Pt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ot = e, Pt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mn !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ot = e, Pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function wl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Sl(e) {
    if (Ze) {
      var t = Pt;
      if (t) {
        var n = t;
        if (!qa(e, t)) {
          if (wl(e)) throw Error(l(418));
          t = yn(n.nextSibling);
          var r = Ot;
          t && qa(e, t) ? Ua(r, n) : (e.flags = e.flags & -4097 | 2, Ze = !1, Ot = e);
        }
      } else {
        if (wl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ze = !1, Ot = e;
      }
    }
  }
  function $a(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ot = e;
  }
  function Vi(e) {
    if (e !== Ot) return !1;
    if (!Ze) return $a(e), Ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fl(e.type, e.memoizedProps)), t && (t = Pt)) {
      if (wl(e)) throw Va(), Error(l(418));
      for (; t; ) Ua(e, t), t = yn(t.nextSibling);
    }
    if ($a(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Pt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Pt = null;
      }
    } else Pt = Ot ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Va() {
    for (var e = Pt; e; ) e = yn(e.nextSibling);
  }
  function sr() {
    Pt = Ot = null, Ze = !1;
  }
  function _l(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var zf = d.ReactCurrentBatchConfig;
  function qr(e, t, n) {
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
  function Gi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ga(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ya(e) {
    function t(O, k) {
      if (e) {
        var D = O.deletions;
        D === null ? (O.deletions = [k], O.flags |= 16) : D.push(k);
      }
    }
    function n(O, k) {
      if (!e) return null;
      for (; k !== null; ) t(O, k), k = k.sibling;
      return null;
    }
    function r(O, k) {
      for (O = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? O.set(k.key, k) : O.set(k.index, k), k = k.sibling;
      return O;
    }
    function i(O, k) {
      return O = Cn(O, k), O.index = 0, O.sibling = null, O;
    }
    function o(O, k, D) {
      return O.index = D, e ? (D = O.alternate, D !== null ? (D = D.index, D < k ? (O.flags |= 2, k) : D) : (O.flags |= 2, k)) : (O.flags |= 1048576, k);
    }
    function s(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function g(O, k, D, ne) {
      return k === null || k.tag !== 6 ? (k = ps(D, O.mode, ne), k.return = O, k) : (k = i(k, D), k.return = O, k);
    }
    function S(O, k, D, ne) {
      var ve = D.type;
      return ve === z ? K(O, k, D.props.children, ne, D.key) : k !== null && (k.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && Ga(ve) === k.type) ? (ne = i(k, D.props), ne.ref = qr(O, k, D), ne.return = O, ne) : (ne = vo(D.type, D.key, D.props, null, O.mode, ne), ne.ref = qr(O, k, D), ne.return = O, ne);
    }
    function L(O, k, D, ne) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== D.containerInfo || k.stateNode.implementation !== D.implementation ? (k = hs(D, O.mode, ne), k.return = O, k) : (k = i(k, D.children || []), k.return = O, k);
    }
    function K(O, k, D, ne, ve) {
      return k === null || k.tag !== 7 ? (k = $n(D, O.mode, ne, ve), k.return = O, k) : (k = i(k, D), k.return = O, k);
    }
    function J(O, k, D) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = ps("" + k, O.mode, D), k.return = O, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case p:
            return D = vo(k.type, k.key, k.props, null, O.mode, D), D.ref = qr(O, null, k), D.return = O, D;
          case m:
            return k = hs(k, O.mode, D), k.return = O, k;
          case pe:
            var ne = k._init;
            return J(O, ne(k._payload), D);
        }
        if (oe(k) || W(k)) return k = $n(k, O.mode, D, null), k.return = O, k;
        Gi(O, k);
      }
      return null;
    }
    function X(O, k, D, ne) {
      var ve = k !== null ? k.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ve !== null ? null : g(O, k, "" + D, ne);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case p:
            return D.key === ve ? S(O, k, D, ne) : null;
          case m:
            return D.key === ve ? L(O, k, D, ne) : null;
          case pe:
            return ve = D._init, X(
              O,
              k,
              ve(D._payload),
              ne
            );
        }
        if (oe(D) || W(D)) return ve !== null ? null : K(O, k, D, ne, null);
        Gi(O, D);
      }
      return null;
    }
    function ce(O, k, D, ne, ve) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return O = O.get(D) || null, g(k, O, "" + ne, ve);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case p:
            return O = O.get(ne.key === null ? D : ne.key) || null, S(k, O, ne, ve);
          case m:
            return O = O.get(ne.key === null ? D : ne.key) || null, L(k, O, ne, ve);
          case pe:
            var be = ne._init;
            return ce(O, k, D, be(ne._payload), ve);
        }
        if (oe(ne) || W(ne)) return O = O.get(D) || null, K(k, O, ne, ve, null);
        Gi(k, ne);
      }
      return null;
    }
    function fe(O, k, D, ne) {
      for (var ve = null, be = null, ke = k, Re = k = 0, dt = null; ke !== null && Re < D.length; Re++) {
        ke.index > Re ? (dt = ke, ke = null) : dt = ke.sibling;
        var He = X(O, ke, D[Re], ne);
        if (He === null) {
          ke === null && (ke = dt);
          break;
        }
        e && ke && He.alternate === null && t(O, ke), k = o(He, k, Re), be === null ? ve = He : be.sibling = He, be = He, ke = dt;
      }
      if (Re === D.length) return n(O, ke), Ze && In(O, Re), ve;
      if (ke === null) {
        for (; Re < D.length; Re++) ke = J(O, D[Re], ne), ke !== null && (k = o(ke, k, Re), be === null ? ve = ke : be.sibling = ke, be = ke);
        return Ze && In(O, Re), ve;
      }
      for (ke = r(O, ke); Re < D.length; Re++) dt = ce(ke, O, Re, D[Re], ne), dt !== null && (e && dt.alternate !== null && ke.delete(dt.key === null ? Re : dt.key), k = o(dt, k, Re), be === null ? ve = dt : be.sibling = dt, be = dt);
      return e && ke.forEach(function(On) {
        return t(O, On);
      }), Ze && In(O, Re), ve;
    }
    function he(O, k, D, ne) {
      var ve = W(D);
      if (typeof ve != "function") throw Error(l(150));
      if (D = ve.call(D), D == null) throw Error(l(151));
      for (var be = ve = null, ke = k, Re = k = 0, dt = null, He = D.next(); ke !== null && !He.done; Re++, He = D.next()) {
        ke.index > Re ? (dt = ke, ke = null) : dt = ke.sibling;
        var On = X(O, ke, He.value, ne);
        if (On === null) {
          ke === null && (ke = dt);
          break;
        }
        e && ke && On.alternate === null && t(O, ke), k = o(On, k, Re), be === null ? ve = On : be.sibling = On, be = On, ke = dt;
      }
      if (He.done) return n(
        O,
        ke
      ), Ze && In(O, Re), ve;
      if (ke === null) {
        for (; !He.done; Re++, He = D.next()) He = J(O, He.value, ne), He !== null && (k = o(He, k, Re), be === null ? ve = He : be.sibling = He, be = He);
        return Ze && In(O, Re), ve;
      }
      for (ke = r(O, ke); !He.done; Re++, He = D.next()) He = ce(ke, O, Re, He.value, ne), He !== null && (e && He.alternate !== null && ke.delete(He.key === null ? Re : He.key), k = o(He, k, Re), be === null ? ve = He : be.sibling = He, be = He);
      return e && ke.forEach(function(op) {
        return t(O, op);
      }), Ze && In(O, Re), ve;
    }
    function it(O, k, D, ne) {
      if (typeof D == "object" && D !== null && D.type === z && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case p:
            e: {
              for (var ve = D.key, be = k; be !== null; ) {
                if (be.key === ve) {
                  if (ve = D.type, ve === z) {
                    if (be.tag === 7) {
                      n(O, be.sibling), k = i(be, D.props.children), k.return = O, O = k;
                      break e;
                    }
                  } else if (be.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && Ga(ve) === be.type) {
                    n(O, be.sibling), k = i(be, D.props), k.ref = qr(O, be, D), k.return = O, O = k;
                    break e;
                  }
                  n(O, be);
                  break;
                } else t(O, be);
                be = be.sibling;
              }
              D.type === z ? (k = $n(D.props.children, O.mode, ne, D.key), k.return = O, O = k) : (ne = vo(D.type, D.key, D.props, null, O.mode, ne), ne.ref = qr(O, k, D), ne.return = O, O = ne);
            }
            return s(O);
          case m:
            e: {
              for (be = D.key; k !== null; ) {
                if (k.key === be) if (k.tag === 4 && k.stateNode.containerInfo === D.containerInfo && k.stateNode.implementation === D.implementation) {
                  n(O, k.sibling), k = i(k, D.children || []), k.return = O, O = k;
                  break e;
                } else {
                  n(O, k);
                  break;
                }
                else t(O, k);
                k = k.sibling;
              }
              k = hs(D, O.mode, ne), k.return = O, O = k;
            }
            return s(O);
          case pe:
            return be = D._init, it(O, k, be(D._payload), ne);
        }
        if (oe(D)) return fe(O, k, D, ne);
        if (W(D)) return he(O, k, D, ne);
        Gi(O, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, k !== null && k.tag === 6 ? (n(O, k.sibling), k = i(k, D), k.return = O, O = k) : (n(O, k), k = ps(D, O.mode, ne), k.return = O, O = k), s(O)) : n(O, k);
    }
    return it;
  }
  var ar = Ya(!0), Xa = Ya(!1), Yi = vn(null), Xi = null, ur = null, bl = null;
  function kl() {
    bl = ur = Xi = null;
  }
  function El(e) {
    var t = Yi.current;
    Xe(Yi), e._currentValue = t;
  }
  function zl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    Xi = e, bl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (bt = !0), e.firstContext = null);
  }
  function Nt(e) {
    var t = e._currentValue;
    if (bl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if (Xi === null) throw Error(l(308));
      ur = e, Xi.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var An = null;
  function Rl(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Qa(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Rl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rn(e, r);
  }
  function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Sn = !1;
  function Cl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ka(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, We & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Rl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function Qi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Bo(e, n);
    }
  }
  function Za(e, t) {
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
  function Ki(e, t, n, r) {
    var i = e.updateQueue;
    Sn = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var S = g, L = S.next;
      S.next = null, s === null ? o = L : s.next = L, s = S;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, g = K.lastBaseUpdate, g !== s && (g === null ? K.firstBaseUpdate = L : g.next = L, K.lastBaseUpdate = S));
    }
    if (o !== null) {
      var J = i.baseState;
      s = 0, K = L = S = null, g = o;
      do {
        var X = g.lane, ce = g.eventTime;
        if ((r & X) === X) {
          K !== null && (K = K.next = {
            eventTime: ce,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var fe = e, he = g;
            switch (X = t, ce = n, he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  J = fe.call(ce, J, X);
                  break e;
                }
                J = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, X = typeof fe == "function" ? fe.call(ce, J, X) : fe, X == null) break e;
                J = q({}, J, X);
                break e;
              case 2:
                Sn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, X = i.effects, X === null ? i.effects = [g] : X.push(g));
        } else ce = { eventTime: ce, lane: X, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, K === null ? (L = K = ce, S = J) : K = K.next = ce, s |= X;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null) break;
          X = g, g = X.next, X.next = null, i.lastBaseUpdate = X, i.shared.pending = null;
        }
      } while (!0);
      if (K === null && (S = J), i.baseState = S, i.firstBaseUpdate = L, i.lastBaseUpdate = K, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      Fn |= s, e.lanes = s, e.memoizedState = J;
    }
  }
  function Ja(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(l(191, i));
        i.call(r);
      }
    }
  }
  var $r = {}, Xt = vn($r), Vr = vn($r), Gr = vn($r);
  function Wn(e) {
    if (e === $r) throw Error(l(174));
    return e;
  }
  function Ol(e, t) {
    switch (Ge(Gr, t), Ge(Vr, e), Ge(Xt, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : at(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = at(t, e);
    }
    Xe(Xt), Ge(Xt, t);
  }
  function dr() {
    Xe(Xt), Xe(Vr), Xe(Gr);
  }
  function eu(e) {
    Wn(Gr.current);
    var t = Wn(Xt.current), n = at(t, e.type);
    t !== n && (Ge(Vr, e), Ge(Xt, n));
  }
  function Pl(e) {
    Vr.current === e && (Xe(Xt), Xe(Vr));
  }
  var Je = vn(0);
  function Zi(e) {
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
  var jl = [];
  function Dl() {
    for (var e = 0; e < jl.length; e++) jl[e]._workInProgressVersionPrimary = null;
    jl.length = 0;
  }
  var Ji = d.ReactCurrentDispatcher, Tl = d.ReactCurrentBatchConfig, Hn = 0, et = null, lt = null, ut = null, eo = !1, Yr = !1, Xr = 0, Rf = 0;
  function mt() {
    throw Error(l(321));
  }
  function Nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Ll(e, t, n, r, i, o) {
    if (Hn = o, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ji.current = e === null || e.memoizedState === null ? jf : Df, e = n(r, i), Yr) {
      o = 0;
      do {
        if (Yr = !1, Xr = 0, 25 <= o) throw Error(l(301));
        o += 1, ut = lt = null, t.updateQueue = null, Ji.current = Tf, e = n(r, i);
      } while (Yr);
    }
    if (Ji.current = ro, t = lt !== null && lt.next !== null, Hn = 0, ut = lt = et = null, eo = !1, t) throw Error(l(300));
    return e;
  }
  function Ml() {
    var e = Xr !== 0;
    return Xr = 0, e;
  }
  function Qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ut === null ? et.memoizedState = ut = e : ut = ut.next = e, ut;
  }
  function Lt() {
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
  function Qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Il(e) {
    var t = Lt(), n = t.queue;
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
      var g = s = null, S = null, L = o;
      do {
        var K = L.lane;
        if ((Hn & K) === K) S !== null && (S = S.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), r = L.hasEagerState ? L.eagerState : e(r, L.action);
        else {
          var J = {
            lane: K,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          S === null ? (g = S = J, s = r) : S = S.next = J, et.lanes |= K, Fn |= K;
        }
        L = L.next;
      } while (L !== null && L !== o);
      S === null ? s = r : S.next = g, Ht(r, t.memoizedState) || (bt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = S, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, et.lanes |= o, Fn |= o, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Al(e) {
    var t = Lt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        o = e(o, s.action), s = s.next;
      while (s !== i);
      Ht(o, t.memoizedState) || (bt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function tu() {
  }
  function nu(e, t) {
    var n = et, r = Lt(), i = t(), o = !Ht(r.memoizedState, i);
    if (o && (r.memoizedState = i, bt = !0), r = r.queue, Wl(ou.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ut !== null && ut.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kr(9, iu.bind(null, n, r, i, t), void 0, null), ct === null) throw Error(l(349));
      Hn & 30 || ru(n, t, i);
    }
    return i;
  }
  function ru(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function iu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, lu(t) && su(e);
  }
  function ou(e, t, n) {
    return n(function() {
      lu(t) && su(e);
    });
  }
  function lu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function su(e) {
    var t = rn(e, 1);
    t !== null && $t(t, e, 1, -1);
  }
  function au(e) {
    var t = Qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Pf.bind(null, et, e), [t.memoizedState, e];
  }
  function Kr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function uu() {
    return Lt().memoizedState;
  }
  function to(e, t, n, r) {
    var i = Qt();
    et.flags |= e, i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function no(e, t, n, r) {
    var i = Lt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (lt !== null) {
      var s = lt.memoizedState;
      if (o = s.destroy, r !== null && Nl(r, s.deps)) {
        i.memoizedState = Kr(t, n, o, r);
        return;
      }
    }
    et.flags |= e, i.memoizedState = Kr(1 | t, n, o, r);
  }
  function cu(e, t) {
    return to(8390656, 8, e, t);
  }
  function Wl(e, t) {
    return no(2048, 8, e, t);
  }
  function du(e, t) {
    return no(4, 2, e, t);
  }
  function fu(e, t) {
    return no(4, 4, e, t);
  }
  function pu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function hu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, no(4, 4, pu.bind(null, t, e), n);
  }
  function Hl() {
  }
  function gu(e, t) {
    var n = Lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function mu(e, t) {
    var n = Lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function yu(e, t, n) {
    return Hn & 21 ? (Ht(n, t) || (n = Gs(), et.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bt = !0), e.memoizedState = n);
  }
  function Cf(e, t) {
    var n = qe;
    qe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Tl.transition;
    Tl.transition = {};
    try {
      e(!1), t();
    } finally {
      qe = n, Tl.transition = r;
    }
  }
  function vu() {
    return Lt().memoizedState;
  }
  function Of(e, t, n) {
    var r = zn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xu(e)) wu(t, n);
    else if (n = Qa(e, t, n, r), n !== null) {
      var i = wt();
      $t(n, e, r, i), Su(n, t, r);
    }
  }
  function Pf(e, t, n) {
    var r = zn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (xu(e)) wu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var s = t.lastRenderedState, g = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = g, Ht(g, s)) {
          var S = t.interleaved;
          S === null ? (i.next = i, Rl(t)) : (i.next = S.next, S.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = Qa(e, t, i, r), n !== null && (i = wt(), $t(n, e, r, i), Su(n, t, r));
    }
  }
  function xu(e) {
    var t = e.alternate;
    return e === et || t !== null && t === et;
  }
  function wu(e, t) {
    Yr = eo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Su(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Bo(e, n);
    }
  }
  var ro = { readContext: Nt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, jf = { readContext: Nt, useCallback: function(e, t) {
    return Qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Nt, useEffect: cu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, to(
      4194308,
      4,
      pu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return to(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return to(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Of.bind(null, et, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: au, useDebugValue: Hl, useDeferredValue: function(e) {
    return Qt().memoizedState = e;
  }, useTransition: function() {
    var e = au(!1), t = e[0];
    return e = Cf.bind(null, e[1]), Qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = et, i = Qt();
    if (Ze) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), ct === null) throw Error(l(349));
      Hn & 30 || ru(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, cu(ou.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Kr(9, iu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Qt(), t = ct.identifierPrefix;
    if (Ze) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Df = {
    readContext: Nt,
    useCallback: gu,
    useContext: Nt,
    useEffect: Wl,
    useImperativeHandle: hu,
    useInsertionEffect: du,
    useLayoutEffect: fu,
    useMemo: mu,
    useReducer: Il,
    useRef: uu,
    useState: function() {
      return Il(Qr);
    },
    useDebugValue: Hl,
    useDeferredValue: function(e) {
      var t = Lt();
      return yu(t, lt.memoizedState, e);
    },
    useTransition: function() {
      var e = Il(Qr)[0], t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: tu,
    useSyncExternalStore: nu,
    useId: vu,
    unstable_isNewReconciler: !1
  }, Tf = { readContext: Nt, useCallback: gu, useContext: Nt, useEffect: Wl, useImperativeHandle: hu, useInsertionEffect: du, useLayoutEffect: fu, useMemo: mu, useReducer: Al, useRef: uu, useState: function() {
    return Al(Qr);
  }, useDebugValue: Hl, useDeferredValue: function(e) {
    var t = Lt();
    return lt === null ? t.memoizedState = e : yu(t, lt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(Qr)[0], t = Lt().memoizedState;
    return [e, t];
  }, useMutableSource: tu, useSyncExternalStore: nu, useId: vu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Fl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var io = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = zn(e), o = on(r, i);
    o.payload = t, n != null && (o.callback = n), t = _n(e, o, i), t !== null && ($t(t, e, i, r), Qi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = zn(e), o = on(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = _n(e, o, i), t !== null && ($t(t, e, i, r), Qi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = wt(), r = zn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = _n(e, i, r), t !== null && ($t(t, e, r, n), Qi(t, e, r));
  } };
  function _u(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(i, o) : !0;
  }
  function bu(e, t, n) {
    var r = !1, i = xn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Nt(o) : (i = _t(t) ? Ln : gt.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : xn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ku(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && io.enqueueReplaceState(t, t.state, null);
  }
  function Bl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Cl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Nt(o) : (o = _t(t) ? Ln : gt.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Fl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && io.enqueueReplaceState(i, i.state, null), Ki(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Ce(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Ul(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ql(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Nf = typeof WeakMap == "function" ? WeakMap : Map;
  function Eu(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      fo || (fo = !0, os = r), ql(e, t);
    }, n;
  }
  function zu(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        ql(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ql(e, t), typeof r != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function Ru(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nf();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Yf.bind(null, e, t, n), t.then(e, e));
  }
  function Cu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ou(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, _n(n, t, 1))), n.lanes |= 1), e);
  }
  var Lf = d.ReactCurrentOwner, bt = !1;
  function xt(e, t, n, r) {
    t.child = e === null ? Xa(t, null, n, r) : ar(t, e.child, n, r);
  }
  function Pu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = Ll(e, t, n, r, o, i), n = Ml(), e !== null && !bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && n && vl(t), t.flags |= 1, xt(e, t, r, i), t.child);
  }
  function ju(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !fs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Du(e, t, o, r, i)) : (e = vo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ir, n(s, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Cn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Du(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ir(o, r) && e.ref === t.ref) if (bt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (bt = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return $l(e, t, n, r, i);
  }
  function Tu(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(hr, jt), jt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ge(hr, jt), jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ge(hr, jt), jt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ge(hr, jt), jt |= r;
    return xt(e, t, i, n), t.child;
  }
  function Nu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function $l(e, t, n, r, i) {
    var o = _t(n) ? Ln : gt.current;
    return o = ir(t, o), cr(t, i), n = Ll(e, t, n, r, o, i), r = Ml(), e !== null && !bt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && r && vl(t), t.flags |= 1, xt(e, t, n, i), t.child);
  }
  function Lu(e, t, n, r, i) {
    if (_t(n)) {
      var o = !0;
      Bi(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) lo(e, t), bu(t, n, r), Bl(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, g = t.memoizedProps;
      s.props = g;
      var S = s.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = Nt(L) : (L = _t(n) ? Ln : gt.current, L = ir(t, L));
      var K = n.getDerivedStateFromProps, J = typeof K == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      J || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== r || S !== L) && ku(t, s, r, L), Sn = !1;
      var X = t.memoizedState;
      s.state = X, Ki(t, r, s, i), S = t.memoizedState, g !== r || X !== S || St.current || Sn ? (typeof K == "function" && (Fl(t, n, K, r), S = t.memoizedState), (g = Sn || _u(t, n, g, r, X, S, L)) ? (J || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = L, r = g) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Ka(e, t), g = t.memoizedProps, L = t.type === t.elementType ? g : Bt(t.type, g), s.props = L, J = t.pendingProps, X = s.context, S = n.contextType, typeof S == "object" && S !== null ? S = Nt(S) : (S = _t(n) ? Ln : gt.current, S = ir(t, S));
      var ce = n.getDerivedStateFromProps;
      (K = typeof ce == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== J || X !== S) && ku(t, s, r, S), Sn = !1, X = t.memoizedState, s.state = X, Ki(t, r, s, i);
      var fe = t.memoizedState;
      g !== J || X !== fe || St.current || Sn ? (typeof ce == "function" && (Fl(t, n, ce, r), fe = t.memoizedState), (L = Sn || _u(t, n, L, r, X, fe, S) || !1) ? (K || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, fe, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, fe, S)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = fe), s.props = r, s.state = fe, s.context = S, r = L) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vl(e, t, n, r, o, i);
  }
  function Vl(e, t, n, r, i, o) {
    Nu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Ha(t, n, !1), ln(e, t, o);
    r = t.stateNode, Lf.current = t;
    var g = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, g, o)) : xt(e, t, g, o), t.memoizedState = r.state, i && Ha(t, n, !0), t.child;
  }
  function Mu(e) {
    var t = e.stateNode;
    t.pendingContext ? Aa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Aa(e, t.context, !1), Ol(e, t.containerInfo);
  }
  function Iu(e, t, n, r, i) {
    return sr(), _l(i), t.flags |= 256, xt(e, t, n, r), t.child;
  }
  var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Au(e, t, n) {
    var r = t.pendingProps, i = Je.current, o = !1, s = (t.flags & 128) !== 0, g;
    if ((g = s) || (g = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), g ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ge(Je, i & 1), e === null)
      return Sl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = xo(s, r, 0, null), e = $n(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Yl(n), t.memoizedState = Gl, e) : Xl(t, s));
    if (i = e.memoizedState, i !== null && (g = i.dehydrated, g !== null)) return Mf(e, t, s, r, g, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, g = i.sibling;
      var S = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = S, t.deletions = null) : (r = Cn(i, S), r.subtreeFlags = i.subtreeFlags & 14680064), g !== null ? o = Cn(g, o) : (o = $n(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Yl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Gl, r;
    }
    return o = e.child, e = o.sibling, r = Cn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Xl(e, t) {
    return t = xo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oo(e, t, n, r) {
    return r !== null && _l(r), ar(t, e.child, null, n), e = Xl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Mf(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ul(Error(l(422))), oo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = xo({ mode: "visible", children: r.children }, i, 0, null), o = $n(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Yl(s), t.memoizedState = Gl, o);
    if (!(t.mode & 1)) return oo(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var g = r.dgst;
      return r = g, o = Error(l(419)), r = Ul(o, r, void 0), oo(e, t, s, r);
    }
    if (g = (s & e.childLanes) !== 0, bt || g) {
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
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, rn(e, i), $t(r, e, i, -1));
      }
      return ds(), r = Ul(Error(l(421))), oo(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xf.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Pt = yn(i.nextSibling), Ot = t, Ze = !0, Ft = null, e !== null && (Dt[Tt++] = tn, Dt[Tt++] = nn, Dt[Tt++] = Mn, tn = e.id, nn = e.overflow, Mn = t), t = Xl(t, r.children), t.flags |= 4096, t);
  }
  function Wu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zl(e.return, t, n);
  }
  function Ql(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Hu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (xt(e, t, r.children, n), r = Je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
    if (Ge(Je, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Zi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ql(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Zi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ql(t, !0, n, null, o);
        break;
      case "together":
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function lo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function If(e, t, n) {
    switch (t.tag) {
      case 3:
        Mu(t), sr();
        break;
      case 5:
        eu(t);
        break;
      case 1:
        _t(t.type) && Bi(t);
        break;
      case 4:
        Ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ge(Yi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ge(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Au(e, t, n) : (Ge(Je, Je.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
        Ge(Je, Je.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Hu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ge(Je, Je.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Tu(e, t, n);
    }
    return ln(e, t, n);
  }
  var Fu, Kl, Bu, Uu;
  Fu = function(e, t) {
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
  }, Kl = function() {
  }, Bu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Wn(Xt.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ve(e, i), r = Ve(e, r), o = [];
          break;
        case "select":
          i = q({}, i, { value: void 0 }), r = q({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Ee(e, i), r = Ee(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wi);
      }
      ft(n, r);
      var s;
      n = null;
      for (L in i) if (!r.hasOwnProperty(L) && i.hasOwnProperty(L) && i[L] != null) if (L === "style") {
        var g = i[L];
        for (s in g) g.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (b.hasOwnProperty(L) ? o || (o = []) : (o = o || []).push(L, null));
      for (L in r) {
        var S = r[L];
        if (g = i?.[L], r.hasOwnProperty(L) && S !== g && (S != null || g != null)) if (L === "style") if (g) {
          for (s in g) !g.hasOwnProperty(s) || S && S.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in S) S.hasOwnProperty(s) && g[s] !== S[s] && (n || (n = {}), n[s] = S[s]);
        } else n || (o || (o = []), o.push(
          L,
          n
        )), n = S;
        else L === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, g = g ? g.__html : void 0, S != null && g !== S && (o = o || []).push(L, S)) : L === "children" ? typeof S != "string" && typeof S != "number" || (o = o || []).push(L, "" + S) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (b.hasOwnProperty(L) ? (S != null && L === "onScroll" && Ye("scroll", e), o || g === S || (o = [])) : (o = o || []).push(L, S));
      }
      n && (o = o || []).push("style", n);
      var L = o;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, Uu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zr(e, t) {
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
  function Af(e, t, n) {
    var r = t.pendingProps;
    switch (xl(t), t.tag) {
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
        return _t(t.type) && Fi(), yt(t), null;
      case 3:
        return r = t.stateNode, dr(), Xe(St), Xe(gt), Dl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (as(Ft), Ft = null))), Kl(e, t), yt(t), null;
      case 5:
        Pl(t);
        var i = Wn(Gr.current);
        if (n = t.type, e !== null && t.stateNode != null) Bu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return yt(t), null;
          }
          if (e = Wn(Xt.current), Vi(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Yt] = t, r[Br] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ye("cancel", r), Ye("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wr.length; i++) Ye(Wr[i], r);
                break;
              case "source":
                Ye("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ye(
                  "error",
                  r
                ), Ye("load", r);
                break;
              case "details":
                Ye("toggle", r);
                break;
              case "input":
                nt(r, o), Ye("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ye("invalid", r);
                break;
              case "textarea":
                Oe(r, o), Ye("invalid", r);
            }
            ft(n, o), i = null;
            for (var s in o) if (o.hasOwnProperty(s)) {
              var g = o[s];
              s === "children" ? typeof g == "string" ? r.textContent !== g && (o.suppressHydrationWarning !== !0 && Ai(r.textContent, g, e), i = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (o.suppressHydrationWarning !== !0 && Ai(
                r.textContent,
                g,
                e
              ), i = ["children", "" + g]) : b.hasOwnProperty(s) && g != null && s === "onScroll" && Ye("scroll", r);
            }
            switch (n) {
              case "input":
                je(r), C(r, o, !0);
                break;
              case "textarea":
                je(r), $e(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Wi);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Yt] = t, e[Br] = r, Fu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = At(n, r), n) {
                case "dialog":
                  Ye("cancel", e), Ye("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ye("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Wr.length; i++) Ye(Wr[i], e);
                  i = r;
                  break;
                case "source":
                  Ye("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ye(
                    "error",
                    e
                  ), Ye("load", e), i = r;
                  break;
                case "details":
                  Ye("toggle", e), i = r;
                  break;
                case "input":
                  nt(e, r), i = Ve(e, r), Ye("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = q({}, r, { value: void 0 }), Ye("invalid", e);
                  break;
                case "textarea":
                  Oe(e, r), i = Ee(e, r), Ye("invalid", e);
                  break;
                default:
                  i = r;
              }
              ft(n, i), g = i;
              for (o in g) if (g.hasOwnProperty(o)) {
                var S = g[o];
                o === "style" ? Ie(e, S) : o === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && P(e, S)) : o === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && H(e, S) : typeof S == "number" && H(e, "" + S) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (b.hasOwnProperty(o) ? S != null && o === "onScroll" && Ye("scroll", e) : S != null && h(e, o, S, s));
              }
              switch (n) {
                case "input":
                  je(e), C(e, r, !1);
                  break;
                case "textarea":
                  je(e), $e(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Z(r.value));
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
                  typeof i.onClick == "function" && (e.onclick = Wi);
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
        if (e && t.stateNode != null) Uu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = Wn(Gr.current), Wn(Xt.current), Vi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = Ot, e !== null)) switch (e.tag) {
              case 3:
                Ai(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ai(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return yt(t), null;
      case 13:
        if (Xe(Je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && Pt !== null && t.mode & 1 && !(t.flags & 128)) Va(), sr(), t.flags |= 98560, o = !1;
          else if (o = Vi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
              o[Yt] = t;
            } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            yt(t), o = !1;
          } else Ft !== null && (as(Ft), Ft = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Je.current & 1 ? st === 0 && (st = 3) : ds())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
      case 4:
        return dr(), Kl(e, t), e === null && Hr(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return El(t.type._context), yt(t), null;
      case 17:
        return _t(t.type) && Fi(), yt(t), null;
      case 19:
        if (Xe(Je), o = t.memoizedState, o === null) return yt(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Zr(o, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (s = Zi(e), s !== null) {
              for (t.flags |= 128, Zr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ge(Je, Je.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && rt() > gr && (t.flags |= 128, r = !0, Zr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zi(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ze) return yt(t), null;
          } else 2 * rt() - o.renderingStartTime > gr && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = rt(), t.sibling = null, n = Je.current, Ge(Je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return cs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? jt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Wf(e, t) {
    switch (xl(t), t.tag) {
      case 1:
        return _t(t.type) && Fi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dr(), Xe(St), Xe(gt), Dl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Pl(t), null;
      case 13:
        if (Xe(Je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          sr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Xe(Je), null;
      case 4:
        return dr(), null;
      case 10:
        return El(t.type._context), null;
      case 22:
      case 23:
        return cs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var so = !1, vt = !1, Hf = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function pr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      tt(e, t, r);
    }
    else n.current = null;
  }
  function Zl(e, t, n) {
    try {
      n();
    } catch (r) {
      tt(e, t, r);
    }
  }
  var qu = !1;
  function Ff(e, t) {
    if (cl = Ri, e = _a(), nl(e)) {
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
          var s = 0, g = -1, S = -1, L = 0, K = 0, J = e, X = null;
          t: for (; ; ) {
            for (var ce; J !== n || i !== 0 && J.nodeType !== 3 || (g = s + i), J !== o || r !== 0 && J.nodeType !== 3 || (S = s + r), J.nodeType === 3 && (s += J.nodeValue.length), (ce = J.firstChild) !== null; )
              X = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (X === n && ++L === i && (g = s), X === o && ++K === r && (S = s), (ce = J.nextSibling) !== null) break;
              J = X, X = J.parentNode;
            }
            J = ce;
          }
          n = g === -1 || S === -1 ? null : { start: g, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (dl = { focusedElem: e, selectionRange: n }, Ri = !1, de = t; de !== null; ) if (t = de, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, de = e;
    else for (; de !== null; ) {
      t = de;
      try {
        var fe = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (fe !== null) {
              var he = fe.memoizedProps, it = fe.memoizedState, O = t.stateNode, k = O.getSnapshotBeforeUpdate(t.elementType === t.type ? he : Bt(t.type, he), it);
              O.__reactInternalSnapshotBeforeUpdate = k;
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
            throw Error(l(163));
        }
      } catch (ne) {
        tt(t, t.return, ne);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, de = e;
        break;
      }
      de = t.return;
    }
    return fe = qu, qu = !1, fe;
  }
  function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && Zl(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function ao(e, t) {
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
  function Jl(e) {
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
  function $u(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $u(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Br], delete t[gl], delete t[bf], delete t[kf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Vu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Gu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function es(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wi));
    else if (r !== 4 && (e = e.child, e !== null)) for (es(e, t, n), e = e.sibling; e !== null; ) es(e, t, n), e = e.sibling;
  }
  function ts(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ts(e, t, n), e = e.sibling; e !== null; ) ts(e, t, n), e = e.sibling;
  }
  var pt = null, Ut = !1;
  function bn(e, t, n) {
    for (n = n.child; n !== null; ) Yu(e, t, n), n = n.sibling;
  }
  function Yu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(Si, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || pr(n, t);
      case 6:
        var r = pt, i = Ut;
        pt = null, bn(e, t, n), pt = r, Ut = i, pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n), jr(e)) : hl(pt, n.stateNode));
        break;
      case 4:
        r = pt, i = Ut, pt = n.stateNode.containerInfo, Ut = !0, bn(e, t, n), pt = r, Ut = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && Zl(n, t, s), i = i.next;
          } while (i !== r);
        }
        bn(e, t, n);
        break;
      case 1:
        if (!vt && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          tt(n, t, g);
        }
        bn(e, t, n);
        break;
      case 21:
        bn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (r = vt) || n.memoizedState !== null, bn(e, t, n), vt = r) : bn(e, t, n);
        break;
      default:
        bn(e, t, n);
    }
  }
  function Xu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Hf()), t.forEach(function(r) {
        var i = Qf.bind(null, e, r);
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
        Yu(o, s, i), pt = null, Ut = !1;
        var S = i.alternate;
        S !== null && (S.return = null), i.return = null;
      } catch (L) {
        tt(i, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qu(t, e), t = t.sibling;
  }
  function Qu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qt(t, e), Kt(e), r & 4) {
          try {
            Jr(3, e, e.return), ao(3, e);
          } catch (he) {
            tt(e, e.return, he);
          }
          try {
            Jr(5, e, e.return);
          } catch (he) {
            tt(e, e.return, he);
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
            H(i, "");
          } catch (he) {
            tt(e, e.return, he);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, g = e.type, S = e.updateQueue;
          if (e.updateQueue = null, S !== null) try {
            g === "input" && o.type === "radio" && o.name != null && _(i, o), At(g, s);
            var L = At(g, o);
            for (s = 0; s < S.length; s += 2) {
              var K = S[s], J = S[s + 1];
              K === "style" ? Ie(i, J) : K === "dangerouslySetInnerHTML" ? P(i, J) : K === "children" ? H(i, J) : h(i, K, J, L);
            }
            switch (g) {
              case "input":
                E(i, o);
                break;
              case "textarea":
                Te(i, o);
                break;
              case "select":
                var X = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var ce = o.value;
                ce != null ? ge(i, !!o.multiple, ce, !1) : X !== !!o.multiple && (o.defaultValue != null ? ge(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : ge(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Br] = o;
          } catch (he) {
            tt(e, e.return, he);
          }
        }
        break;
      case 6:
        if (qt(t, e), Kt(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (he) {
            tt(e, e.return, he);
          }
        }
        break;
      case 3:
        if (qt(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (he) {
          tt(e, e.return, he);
        }
        break;
      case 4:
        qt(t, e), Kt(e);
        break;
      case 13:
        qt(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (is = rt())), r & 4 && Xu(e);
        break;
      case 22:
        if (K = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (L = vt) || K, qt(t, e), vt = L) : qt(t, e), Kt(e), r & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !K && e.mode & 1) for (de = e, K = e.child; K !== null; ) {
            for (J = de = K; de !== null; ) {
              switch (X = de, ce = X.child, X.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, X, X.return);
                  break;
                case 1:
                  pr(X, X.return);
                  var fe = X.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    r = X, n = X.return;
                    try {
                      t = r, fe.props = t.memoizedProps, fe.state = t.memoizedState, fe.componentWillUnmount();
                    } catch (he) {
                      tt(r, n, he);
                    }
                  }
                  break;
                case 5:
                  pr(X, X.return);
                  break;
                case 22:
                  if (X.memoizedState !== null) {
                    Ju(J);
                    continue;
                  }
              }
              ce !== null ? (ce.return = X, de = ce) : Ju(J);
            }
            K = K.sibling;
          }
          e: for (K = null, J = e; ; ) {
            if (J.tag === 5) {
              if (K === null) {
                K = J;
                try {
                  i = J.stateNode, L ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (g = J.stateNode, S = J.memoizedProps.style, s = S != null && S.hasOwnProperty("display") ? S.display : null, g.style.display = Me("display", s));
                } catch (he) {
                  tt(e, e.return, he);
                }
              }
            } else if (J.tag === 6) {
              if (K === null) try {
                J.stateNode.nodeValue = L ? "" : J.memoizedProps;
              } catch (he) {
                tt(e, e.return, he);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === e) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === e) break e;
              K === J && (K = null), J = J.return;
            }
            K === J && (K = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        qt(t, e), Kt(e), r & 4 && Xu(e);
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
            if (Vu(n)) {
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
            r.flags & 32 && (H(i, ""), r.flags &= -33);
            var o = Gu(e);
            ts(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, g = Gu(e);
            es(e, g, s);
            break;
          default:
            throw Error(l(161));
        }
      } catch (S) {
        tt(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bf(e, t, n) {
    de = e, Ku(e);
  }
  function Ku(e, t, n) {
    for (var r = (e.mode & 1) !== 0; de !== null; ) {
      var i = de, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || so;
        if (!s) {
          var g = i.alternate, S = g !== null && g.memoizedState !== null || vt;
          g = so;
          var L = vt;
          if (so = s, (vt = S) && !L) for (de = i; de !== null; ) s = de, S = s.child, s.tag === 22 && s.memoizedState !== null ? ec(i) : S !== null ? (S.return = s, de = S) : ec(i);
          for (; o !== null; ) de = o, Ku(o), o = o.sibling;
          de = i, so = g, vt = L;
        }
        Zu(e);
      } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, de = o) : Zu(e);
    }
  }
  function Zu(e) {
    for (; de !== null; ) {
      var t = de;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              vt || ao(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !vt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Ja(t, o, r);
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
                Ja(t, s, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var S = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    S.autoFocus && n.focus();
                    break;
                  case "img":
                    S.src && (n.src = S.src);
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
                  var K = L.memoizedState;
                  if (K !== null) {
                    var J = K.dehydrated;
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
          vt || t.flags & 512 && Jl(t);
        } catch (X) {
          tt(t, t.return, X);
        }
      }
      if (t === e) {
        de = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, de = n;
        break;
      }
      de = t.return;
    }
  }
  function Ju(e) {
    for (; de !== null; ) {
      var t = de;
      if (t === e) {
        de = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, de = n;
        break;
      }
      de = t.return;
    }
  }
  function ec(e) {
    for (; de !== null; ) {
      var t = de;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ao(4, t);
            } catch (S) {
              tt(t, n, S);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (S) {
                tt(t, i, S);
              }
            }
            var o = t.return;
            try {
              Jl(t);
            } catch (S) {
              tt(t, o, S);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Jl(t);
            } catch (S) {
              tt(t, s, S);
            }
        }
      } catch (S) {
        tt(t, t.return, S);
      }
      if (t === e) {
        de = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, de = g;
        break;
      }
      de = t.return;
    }
  }
  var Uf = Math.ceil, uo = d.ReactCurrentDispatcher, ns = d.ReactCurrentOwner, Mt = d.ReactCurrentBatchConfig, We = 0, ct = null, ot = null, ht = 0, jt = 0, hr = vn(0), st = 0, ei = null, Fn = 0, co = 0, rs = 0, ti = null, kt = null, is = 0, gr = 1 / 0, sn = null, fo = !1, os = null, kn = null, po = !1, En = null, ho = 0, ni = 0, ls = null, go = -1, mo = 0;
  function wt() {
    return We & 6 ? rt() : go !== -1 ? go : go = rt();
  }
  function zn(e) {
    return e.mode & 1 ? We & 2 && ht !== 0 ? ht & -ht : zf.transition !== null ? (mo === 0 && (mo = Gs()), mo) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : na(e.type)), e) : 1;
  }
  function $t(e, t, n, r) {
    if (50 < ni) throw ni = 0, ls = null, Error(l(185));
    zr(e, n, r), (!(We & 2) || e !== ct) && (e === ct && (!(We & 2) && (co |= n), st === 4 && Rn(e, ht)), Et(e, r), n === 1 && We === 0 && !(t.mode & 1) && (gr = rt() + 500, Ui && wn()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    Ed(e, t);
    var r = ki(e, e === ct ? ht : 0);
    if (r === 0) n !== null && qs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && qs(n), t === 1) e.tag === 0 ? Ef(nc.bind(null, e)) : Fa(nc.bind(null, e)), Sf(function() {
        !(We & 6) && wn();
      }), n = null;
      else {
        switch (Ys(r)) {
          case 1:
            n = Wo;
            break;
          case 4:
            n = $s;
            break;
          case 16:
            n = wi;
            break;
          case 536870912:
            n = Vs;
            break;
          default:
            n = wi;
        }
        n = cc(n, tc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function tc(e, t) {
    if (go = -1, mo = 0, We & 6) throw Error(l(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = ki(e, e === ct ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
    else {
      t = r;
      var i = We;
      We |= 2;
      var o = ic();
      (ct !== e || ht !== t) && (sn = null, gr = rt() + 500, Un(e, t));
      do
        try {
          Vf();
          break;
        } catch (g) {
          rc(e, g);
        }
      while (!0);
      kl(), uo.current = o, We = i, ot !== null ? t = 0 : (ct = null, ht = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (i = Ho(e), i !== 0 && (r = i, t = ss(e, i))), t === 1) throw n = ei, Un(e, 0), Rn(e, r), Et(e, rt()), n;
      if (t === 6) Rn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !qf(i) && (t = yo(e, r), t === 2 && (o = Ho(e), o !== 0 && (r = o, t = ss(e, o))), t === 1)) throw n = ei, Un(e, 0), Rn(e, r), Et(e, rt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            qn(e, kt, sn);
            break;
          case 3:
            if (Rn(e, r), (r & 130023424) === r && (t = is + 500 - rt(), 10 < t)) {
              if (ki(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                wt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = pl(qn.bind(null, e, kt, sn), t);
              break;
            }
            qn(e, kt, sn);
            break;
          case 4:
            if (Rn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - Wt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = rt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = pl(qn.bind(null, e, kt, sn), r);
              break;
            }
            qn(e, kt, sn);
            break;
          case 5:
            qn(e, kt, sn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Et(e, rt()), e.callbackNode === n ? tc.bind(null, e) : null;
  }
  function ss(e, t) {
    var n = ti;
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = yo(e, t), e !== 2 && (t = kt, kt = n, t !== null && as(t)), e;
  }
  function as(e) {
    kt === null ? kt = e : kt.push.apply(kt, e);
  }
  function qf(e) {
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
  function Rn(e, t) {
    for (t &= ~rs, t &= ~co, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function nc(e) {
    if (We & 6) throw Error(l(327));
    mr();
    var t = ki(e, 0);
    if (!(t & 1)) return Et(e, rt()), null;
    var n = yo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ho(e);
      r !== 0 && (t = r, n = ss(e, r));
    }
    if (n === 1) throw n = ei, Un(e, 0), Rn(e, t), Et(e, rt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, kt, sn), Et(e, rt()), null;
  }
  function us(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (gr = rt() + 500, Ui && wn());
    }
  }
  function Bn(e) {
    En !== null && En.tag === 0 && !(We & 6) && mr();
    var t = We;
    We |= 1;
    var n = Mt.transition, r = qe;
    try {
      if (Mt.transition = null, qe = 1, e) return e();
    } finally {
      qe = r, Mt.transition = n, We = t, !(We & 6) && wn();
    }
  }
  function cs() {
    jt = hr.current, Xe(hr);
  }
  function Un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, wf(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var r = n;
      switch (xl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Fi();
          break;
        case 3:
          dr(), Xe(St), Xe(gt), Dl();
          break;
        case 5:
          Pl(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          Xe(Je);
          break;
        case 19:
          Xe(Je);
          break;
        case 10:
          El(r.type._context);
          break;
        case 22:
        case 23:
          cs();
      }
      n = n.return;
    }
    if (ct = e, ot = e = Cn(e.current, null), ht = jt = t, st = 0, ei = null, rs = co = Fn = 0, kt = ti = null, An !== null) {
      for (t = 0; t < An.length; t++) if (n = An[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var s = o.next;
          o.next = i, r.next = s;
        }
        n.pending = r;
      }
      An = null;
    }
    return e;
  }
  function rc(e, t) {
    do {
      var n = ot;
      try {
        if (kl(), Ji.current = ro, eo) {
          for (var r = et.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          eo = !1;
        }
        if (Hn = 0, ut = lt = et = null, Yr = !1, Xr = 0, ns.current = null, n === null || n.return === null) {
          st = 1, ei = t, ot = null;
          break;
        }
        e: {
          var o = e, s = n.return, g = n, S = t;
          if (t = ht, g.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var L = S, K = g, J = K.tag;
            if (!(K.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var X = K.alternate;
              X ? (K.updateQueue = X.updateQueue, K.memoizedState = X.memoizedState, K.lanes = X.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var ce = Cu(s);
            if (ce !== null) {
              ce.flags &= -257, Ou(ce, s, g, o, t), ce.mode & 1 && Ru(o, L, t), t = ce, S = L;
              var fe = t.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(S), t.updateQueue = he;
              } else fe.add(S);
              break e;
            } else {
              if (!(t & 1)) {
                Ru(o, L, t), ds();
                break e;
              }
              S = Error(l(426));
            }
          } else if (Ze && g.mode & 1) {
            var it = Cu(s);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), Ou(it, s, g, o, t), _l(fr(S, g));
              break e;
            }
          }
          o = S = fr(S, g), st !== 4 && (st = 2), ti === null ? ti = [o] : ti.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var O = Eu(o, S, t);
                Za(o, O);
                break e;
              case 1:
                g = S;
                var k = o.type, D = o.stateNode;
                if (!(o.flags & 128) && (typeof k.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (kn === null || !kn.has(D)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var ne = zu(o, g, t);
                  Za(o, ne);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        lc(n);
      } catch (ve) {
        t = ve, ot === n && n !== null && (ot = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ic() {
    var e = uo.current;
    return uo.current = ro, e === null ? ro : e;
  }
  function ds() {
    (st === 0 || st === 3 || st === 2) && (st = 4), ct === null || !(Fn & 268435455) && !(co & 268435455) || Rn(ct, ht);
  }
  function yo(e, t) {
    var n = We;
    We |= 2;
    var r = ic();
    (ct !== e || ht !== t) && (sn = null, Un(e, t));
    do
      try {
        $f();
        break;
      } catch (i) {
        rc(e, i);
      }
    while (!0);
    if (kl(), We = n, uo.current = r, ot !== null) throw Error(l(261));
    return ct = null, ht = 0, st;
  }
  function $f() {
    for (; ot !== null; ) oc(ot);
  }
  function Vf() {
    for (; ot !== null && !md(); ) oc(ot);
  }
  function oc(e) {
    var t = uc(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps, t === null ? lc(e) : ot = t, ns.current = null;
  }
  function lc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Wf(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (n = Af(n, t, jt), n !== null) {
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
    var r = qe, i = Mt.transition;
    try {
      Mt.transition = null, qe = 1, Gf(e, t, n, r);
    } finally {
      Mt.transition = i, qe = r;
    }
    return null;
  }
  function Gf(e, t, n, r) {
    do
      mr();
    while (En !== null);
    if (We & 6) throw Error(l(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (zd(e, o), e === ct && (ot = ct = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || po || (po = !0, cc(wi, function() {
      return mr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Mt.transition, Mt.transition = null;
      var s = qe;
      qe = 1;
      var g = We;
      We |= 4, ns.current = null, Ff(e, n), Qu(n, e), pf(dl), Ri = !!cl, dl = cl = null, e.current = n, Bf(n), yd(), We = g, qe = s, Mt.transition = o;
    } else e.current = n;
    if (po && (po = !1, En = e, ho = i), o = e.pendingLanes, o === 0 && (kn = null), wd(n.stateNode), Et(e, rt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (fo) throw fo = !1, e = os, os = null, e;
    return ho & 1 && e.tag !== 0 && mr(), o = e.pendingLanes, o & 1 ? e === ls ? ni++ : (ni = 0, ls = e) : ni = 0, wn(), null;
  }
  function mr() {
    if (En !== null) {
      var e = Ys(ho), t = Mt.transition, n = qe;
      try {
        if (Mt.transition = null, qe = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, ho = 0, We & 6) throw Error(l(331));
          var i = We;
          for (We |= 4, de = e.current; de !== null; ) {
            var o = de, s = o.child;
            if (de.flags & 16) {
              var g = o.deletions;
              if (g !== null) {
                for (var S = 0; S < g.length; S++) {
                  var L = g[S];
                  for (de = L; de !== null; ) {
                    var K = de;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, K, o);
                    }
                    var J = K.child;
                    if (J !== null) J.return = K, de = J;
                    else for (; de !== null; ) {
                      K = de;
                      var X = K.sibling, ce = K.return;
                      if ($u(K), K === L) {
                        de = null;
                        break;
                      }
                      if (X !== null) {
                        X.return = ce, de = X;
                        break;
                      }
                      de = ce;
                    }
                  }
                }
                var fe = o.alternate;
                if (fe !== null) {
                  var he = fe.child;
                  if (he !== null) {
                    fe.child = null;
                    do {
                      var it = he.sibling;
                      he.sibling = null, he = it;
                    } while (he !== null);
                  }
                }
                de = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) s.return = o, de = s;
            else e: for (; de !== null; ) {
              if (o = de, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Jr(9, o, o.return);
              }
              var O = o.sibling;
              if (O !== null) {
                O.return = o.return, de = O;
                break e;
              }
              de = o.return;
            }
          }
          var k = e.current;
          for (de = k; de !== null; ) {
            s = de;
            var D = s.child;
            if (s.subtreeFlags & 2064 && D !== null) D.return = s, de = D;
            else e: for (s = k; de !== null; ) {
              if (g = de, g.flags & 2048) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ao(9, g);
                }
              } catch (ve) {
                tt(g, g.return, ve);
              }
              if (g === s) {
                de = null;
                break e;
              }
              var ne = g.sibling;
              if (ne !== null) {
                ne.return = g.return, de = ne;
                break e;
              }
              de = g.return;
            }
          }
          if (We = i, wn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(Si, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        qe = n, Mt.transition = t;
      }
    }
    return !1;
  }
  function sc(e, t, n) {
    t = fr(n, t), t = Eu(e, t, 1), e = _n(e, t, 1), t = wt(), e !== null && (zr(e, 1, t), Et(e, t));
  }
  function tt(e, t, n) {
    if (e.tag === 3) sc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
          e = fr(n, e), e = zu(t, e, 1), t = _n(t, e, 1), e = wt(), t !== null && (zr(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Yf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = wt(), e.pingedLanes |= e.suspendedLanes & n, ct === e && (ht & n) === n && (st === 4 || st === 3 && (ht & 130023424) === ht && 500 > rt() - is ? Un(e, 0) : rs |= n), Et(e, t);
  }
  function ac(e, t) {
    t === 0 && (e.mode & 1 ? (t = bi, bi <<= 1, !(bi & 130023424) && (bi = 4194304)) : t = 1);
    var n = wt();
    e = rn(e, t), e !== null && (zr(e, t, n), Et(e, n));
  }
  function Xf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ac(e, n);
  }
  function Qf(e, t) {
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
    r !== null && r.delete(t), ac(e, n);
  }
  var uc;
  uc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || St.current) bt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return bt = !1, If(e, t, n);
      bt = !!(e.flags & 131072);
    }
    else bt = !1, Ze && t.flags & 1048576 && Ba(t, $i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        lo(e, t), e = t.pendingProps;
        var i = ir(t, gt.current);
        cr(t, n), i = Ll(null, t, r, e, i, n);
        var o = Ml();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _t(r) ? (o = !0, Bi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cl(t), i.updater = io, t.stateNode = i, i._reactInternals = t, Bl(t, r, e, n), t = Vl(null, t, r, !0, o, n)) : (t.tag = 0, Ze && o && vl(t), xt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (lo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Zf(r), e = Bt(r, e), i) {
            case 0:
              t = $l(null, t, r, e, n);
              break e;
            case 1:
              t = Lu(null, t, r, e, n);
              break e;
            case 11:
              t = Pu(null, t, r, e, n);
              break e;
            case 14:
              t = ju(null, t, r, Bt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), $l(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Lu(e, t, r, i, n);
      case 3:
        e: {
          if (Mu(t), e === null) throw Error(l(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Ka(e, t), Ki(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = fr(Error(l(423)), t), t = Iu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(l(424)), t), t = Iu(e, t, r, n, i);
            break e;
          } else for (Pt = yn(t.stateNode.containerInfo.firstChild), Ot = t, Ze = !0, Ft = null, n = Xa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return eu(t), e === null && Sl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, fl(r, i) ? s = null : o !== null && fl(r, o) && (t.flags |= 32), Nu(e, t), xt(e, t, s, n), t.child;
      case 6:
        return e === null && Sl(t), null;
      case 13:
        return Au(e, t, n);
      case 4:
        return Ol(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : xt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Pu(e, t, r, i, n);
      case 7:
        return xt(e, t, t.pendingProps, n), t.child;
      case 8:
        return xt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return xt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Ge(Yi, r._currentValue), r._currentValue = s, o !== null) if (Ht(o.value, s)) {
            if (o.children === i.children && !St.current) {
              t = ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var g = o.dependencies;
            if (g !== null) {
              s = o.child;
              for (var S = g.firstContext; S !== null; ) {
                if (S.context === r) {
                  if (o.tag === 1) {
                    S = on(-1, n & -n), S.tag = 2;
                    var L = o.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var K = L.pending;
                      K === null ? S.next = S : (S.next = K.next, K.next = S), L.pending = S;
                    }
                  }
                  o.lanes |= n, S = o.alternate, S !== null && (S.lanes |= n), zl(
                    o.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                S = S.next;
              }
            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (s = o.return, s === null) throw Error(l(341));
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), zl(s, n, t), s = o.sibling;
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
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), ju(e, t, r, i, n);
      case 15:
        return Du(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), lo(e, t), t.tag = 1, _t(r) ? (e = !0, Bi(t)) : e = !1, cr(t, n), bu(t, r, i), Bl(t, r, i, n), Vl(null, t, r, !0, e, n);
      case 19:
        return Hu(e, t, n);
      case 22:
        return Tu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function cc(e, t) {
    return Us(e, t);
  }
  function Kf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, r) {
    return new Kf(e, t, n, r);
  }
  function fs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Zf(e) {
    if (typeof e == "function") return fs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ie) return 11;
      if (e === Se) return 14;
    }
    return 2;
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function vo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") fs(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case z:
        return $n(n.children, i, o, t);
      case I:
        s = 8, i |= 8;
        break;
      case U:
        return e = It(12, n, t, i | 2), e.elementType = U, e.lanes = o, e;
      case re:
        return e = It(13, n, t, i), e.elementType = re, e.lanes = o, e;
      case me:
        return e = It(19, n, t, i), e.elementType = me, e.lanes = o, e;
      case ue:
        return xo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case te:
            s = 10;
            break e;
          case le:
            s = 9;
            break e;
          case ie:
            s = 11;
            break e;
          case Se:
            s = 14;
            break e;
          case pe:
            s = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = It(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function $n(e, t, n, r) {
    return e = It(7, e, r, t), e.lanes = n, e;
  }
  function xo(e, t, n, r) {
    return e = It(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ps(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function hs(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Jf(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fo(0), this.expirationTimes = Fo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function gs(e, t, n, r, i, o, s, g, S) {
    return e = new Jf(e, t, n, g, S), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = It(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(o), e;
  }
  function ep(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: m, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function dc(e) {
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
            if (_t(t.type)) {
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
      if (_t(n)) return Wa(e, n, t);
    }
    return t;
  }
  function fc(e, t, n, r, i, o, s, g, S) {
    return e = gs(n, r, !0, e, i, o, s, g, S), e.context = dc(null), n = e.current, r = wt(), i = zn(n), o = on(r, i), o.callback = t ?? null, _n(n, o, i), e.current.lanes = i, zr(e, i, r), Et(e, r), e;
  }
  function wo(e, t, n, r) {
    var i = t.current, o = wt(), s = zn(i);
    return n = dc(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _n(i, t, s), e !== null && ($t(e, i, s, o), Qi(e, i, s)), s;
  }
  function So(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function pc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ms(e, t) {
    pc(e, t), (e = e.alternate) && pc(e, t);
  }
  function tp() {
    return null;
  }
  var hc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ys(e) {
    this._internalRoot = e;
  }
  _o.prototype.render = ys.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    wo(e, t, null, null);
  }, _o.prototype.unmount = ys.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        wo(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function _o(e) {
    this._internalRoot = e;
  }
  _o.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && ea(e);
    }
  };
  function vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function bo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gc() {
  }
  function np(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var L = So(s);
          o.call(L);
        };
      }
      var s = fc(t, r, e, 0, null, !1, !1, "", gc);
      return e._reactRootContainer = s, e[Jt] = s.current, Hr(e.nodeType === 8 ? e.parentNode : e), Bn(), s;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var L = So(S);
        g.call(L);
      };
    }
    var S = gs(e, 0, !1, null, null, !1, !1, "", gc);
    return e._reactRootContainer = S, e[Jt] = S.current, Hr(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      wo(t, S, n, r);
    }), S;
  }
  function ko(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var g = i;
        i = function() {
          var S = So(s);
          g.call(S);
        };
      }
      wo(t, s, e, i);
    } else s = np(n, t, e, i, r);
    return So(s);
  }
  Xs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Er(t.pendingLanes);
          n !== 0 && (Bo(t, n | 1), Et(t, rt()), !(We & 6) && (gr = rt() + 500, wn()));
        }
        break;
      case 13:
        Bn(function() {
          var r = rn(e, 1);
          if (r !== null) {
            var i = wt();
            $t(r, e, 1, i);
          }
        }), ms(e, 1);
    }
  }, Uo = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = wt();
        $t(t, e, 134217728, n);
      }
      ms(e, 134217728);
    }
  }, Qs = function(e) {
    if (e.tag === 13) {
      var t = zn(e), n = rn(e, t);
      if (n !== null) {
        var r = wt();
        $t(n, e, t, r);
      }
      ms(e, t);
    }
  }, Ks = function() {
    return qe;
  }, Zs = function(e, t) {
    var n = qe;
    try {
      return qe = e, t();
    } finally {
      qe = n;
    }
  }, Gn = function(e, t, n) {
    switch (t) {
      case "input":
        if (E(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Hi(r);
              if (!i) throw Error(l(90));
              Le(r), E(r, i);
            }
          }
        }
        break;
      case "textarea":
        Te(e, n);
        break;
      case "select":
        t = n.value, t != null && ge(e, !!n.multiple, t, !1);
    }
  }, yi = us, Is = Bn;
  var rp = { usingClientEntryPoint: !1, Events: [Ur, nr, Hi, Sr, Yn, us] }, ri = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ip = { bundleType: ri.bundleType, version: ri.version, rendererPackageName: ri.rendererPackageName, rendererConfig: ri.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: d.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Fs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ri.findFiberByHostInstance || tp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Eo.isDisabled && Eo.supportsFiber) try {
      Si = Eo.inject(ip), Gt = Eo;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vs(t)) throw Error(l(200));
    return ep(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!vs(e)) throw Error(l(299));
    var n = !1, r = "", i = hc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = gs(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new ys(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Fs(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return Bn(e);
  }, zt.hydrate = function(e, t, n) {
    if (!bo(t)) throw Error(l(200));
    return ko(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!vs(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = hc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = fc(t, null, e, 1, n ?? null, i, !1, o, s), e[Jt] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new _o(t);
  }, zt.render = function(e, t, n) {
    if (!bo(t)) throw Error(l(200));
    return ko(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!bo(e)) throw Error(l(40));
    return e._reactRootContainer ? (Bn(function() {
      ko(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = us, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!bo(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ko(e, t, n, !1, r);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Sc;
function mi() {
  if (Sc) return xs.exports;
  Sc = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return a(), xs.exports = dp(), xs.exports;
}
var _c;
function fp() {
  if (_c) return zo;
  _c = 1;
  var a = mi();
  return zo.createRoot = a.createRoot, zo.hydrateRoot = a.hydrateRoot, zo;
}
var pp = fp(), Fe = Rt();
const hp = /* @__PURE__ */ lp(Fe);
var bs = { exports: {} }, ii = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc;
function gp() {
  if (bc) return ii;
  bc = 1;
  var a = Rt(), c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, b = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(F, j, A) {
    var Y, B = {}, V = null, we = null;
    A !== void 0 && (V = "" + A), j.key !== void 0 && (V = "" + j.key), j.ref !== void 0 && (we = j.ref);
    for (Y in j) f.call(j, Y) && !R.hasOwnProperty(Y) && (B[Y] = j[Y]);
    if (F && F.defaultProps) for (Y in j = F.defaultProps, j) B[Y] === void 0 && (B[Y] = j[Y]);
    return { $$typeof: c, type: F, key: V, ref: we, props: B, _owner: b.current };
  }
  return ii.Fragment = l, ii.jsx = M, ii.jsxs = M, ii;
}
var kc;
function mp() {
  return kc || (kc = 1, bs.exports = gp()), bs.exports;
}
var v = mp();
class Ec extends Fe.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ v.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ v.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ v.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ v.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var ks = { exports: {} }, oi = {}, hi = { exports: {} }, yp = hi.exports, zc;
function Ns() {
  return zc || (zc = 1, function(a, c) {
    (function(l, f) {
      f(c);
    })(yp, function(l) {
      function f(Z) {
        return function(ze, je, Le, Be, Ve, nt, _) {
          return Z(ze, je, _);
        };
      }
      function b(Z) {
        return function(ze, je, Le, Be) {
          if (!ze || !je || typeof ze != "object" || typeof je != "object")
            return Z(ze, je, Le, Be);
          var Ve = Be.get(ze), nt = Be.get(je);
          if (Ve && nt)
            return Ve === je && nt === ze;
          Be.set(ze, je), Be.set(je, ze);
          var _ = Z(ze, je, Le, Be);
          return Be.delete(ze), Be.delete(je), _;
        };
      }
      function R(Z, ae) {
        var ze = {};
        for (var je in Z)
          ze[je] = Z[je];
        for (var je in ae)
          ze[je] = ae[je];
        return ze;
      }
      function M(Z) {
        return Z.constructor === Object || Z.constructor == null;
      }
      function F(Z) {
        return typeof Z.then == "function";
      }
      function j(Z, ae) {
        return Z === ae || Z !== Z && ae !== ae;
      }
      var A = "[object Arguments]", Y = "[object Boolean]", B = "[object Date]", V = "[object RegExp]", we = "[object Map]", xe = "[object Number]", Q = "[object Object]", N = "[object Set]", x = "[object String]", u = Object.prototype.toString;
      function h(Z) {
        var ae = Z.areArraysEqual, ze = Z.areDatesEqual, je = Z.areMapsEqual, Le = Z.areObjectsEqual, Be = Z.areRegExpsEqual, Ve = Z.areSetsEqual, nt = Z.createIsNestedEqual, _ = nt(E);
        function E(C, $, oe) {
          if (C === $)
            return !0;
          if (!C || !$ || typeof C != "object" || typeof $ != "object")
            return C !== C && $ !== $;
          if (M(C) && M($))
            return Le(C, $, _, oe);
          var ge = Array.isArray(C), Ee = Array.isArray($);
          if (ge || Ee)
            return ge === Ee && ae(C, $, _, oe);
          var Oe = u.call(C);
          return Oe !== u.call($) ? !1 : Oe === B ? ze(C, $, _, oe) : Oe === V ? Be(C, $, _, oe) : Oe === we ? je(C, $, _, oe) : Oe === N ? Ve(C, $, _, oe) : Oe === Q || Oe === A ? F(C) || F($) ? !1 : Le(C, $, _, oe) : Oe === Y || Oe === xe || Oe === x ? j(C.valueOf(), $.valueOf()) : !1;
        }
        return E;
      }
      function d(Z, ae, ze, je) {
        var Le = Z.length;
        if (ae.length !== Le)
          return !1;
        for (; Le-- > 0; )
          if (!ze(Z[Le], ae[Le], Le, Le, Z, ae, je))
            return !1;
        return !0;
      }
      var p = b(d);
      function m(Z, ae) {
        return j(Z.valueOf(), ae.valueOf());
      }
      function z(Z, ae, ze, je) {
        var Le = Z.size === ae.size;
        if (!Le)
          return !1;
        if (!Z.size)
          return !0;
        var Be = {}, Ve = 0;
        return Z.forEach(function(nt, _) {
          if (Le) {
            var E = !1, C = 0;
            ae.forEach(function($, oe) {
              !E && !Be[C] && (E = ze(_, oe, Ve, C, Z, ae, je) && ze(nt, $, _, oe, Z, ae, je)) && (Be[C] = !0), C++;
            }), Ve++, Le = E;
          }
        }), Le;
      }
      var I = b(z), U = "_owner", te = Object.prototype.hasOwnProperty;
      function le(Z, ae, ze, je) {
        var Le = Object.keys(Z), Be = Le.length;
        if (Object.keys(ae).length !== Be)
          return !1;
        for (var Ve; Be-- > 0; ) {
          if (Ve = Le[Be], Ve === U) {
            var nt = !!Z.$$typeof, _ = !!ae.$$typeof;
            if ((nt || _) && nt !== _)
              return !1;
          }
          if (!te.call(ae, Ve) || !ze(Z[Ve], ae[Ve], Ve, Ve, Z, ae, je))
            return !1;
        }
        return !0;
      }
      var ie = b(le);
      function re(Z, ae) {
        return Z.source === ae.source && Z.flags === ae.flags;
      }
      function me(Z, ae, ze, je) {
        var Le = Z.size === ae.size;
        if (!Le)
          return !1;
        if (!Z.size)
          return !0;
        var Be = {};
        return Z.forEach(function(Ve, nt) {
          if (Le) {
            var _ = !1, E = 0;
            ae.forEach(function(C, $) {
              !_ && !Be[E] && (_ = ze(Ve, C, nt, $, Z, ae, je)) && (Be[E] = !0), E++;
            }), Le = _;
          }
        }), Le;
      }
      var Se = b(me), pe = Object.freeze({
        areArraysEqual: d,
        areDatesEqual: m,
        areMapsEqual: z,
        areObjectsEqual: le,
        areRegExpsEqual: re,
        areSetsEqual: me,
        createIsNestedEqual: f
      }), ue = Object.freeze({
        areArraysEqual: p,
        areDatesEqual: m,
        areMapsEqual: I,
        areObjectsEqual: ie,
        areRegExpsEqual: re,
        areSetsEqual: Se,
        createIsNestedEqual: f
      }), G = h(pe);
      function W(Z, ae) {
        return G(Z, ae, void 0);
      }
      var q = h(R(pe, { createIsNestedEqual: function() {
        return j;
      } }));
      function w(Z, ae) {
        return q(Z, ae, void 0);
      }
      var T = h(ue);
      function ye(Z, ae) {
        return T(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      var _e = h(R(ue, {
        createIsNestedEqual: function() {
          return j;
        }
      }));
      function Ce(Z, ae) {
        return _e(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      function Pe(Z) {
        return h(R(pe, Z(pe)));
      }
      function De(Z) {
        var ae = h(R(ue, Z(ue)));
        return function(ze, je, Le) {
          return Le === void 0 && (Le = /* @__PURE__ */ new WeakMap()), ae(ze, je, Le);
        };
      }
      l.circularDeepEqual = ye, l.circularShallowEqual = Ce, l.createCustomCircularEqual = De, l.createCustomEqual = Pe, l.deepEqual = W, l.sameValueZeroEqual = j, l.shallowEqual = w, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(hi, hi.exports)), hi.exports;
}
var Ro = { exports: {} }, Rc;
function No() {
  if (Rc) return Ro.exports;
  Rc = 1;
  function a(l) {
    var f, b, R = "";
    if (typeof l == "string" || typeof l == "number") R += l;
    else if (typeof l == "object") if (Array.isArray(l)) {
      var M = l.length;
      for (f = 0; f < M; f++) l[f] && (b = a(l[f])) && (R && (R += " "), R += b);
    } else for (b in l) l[b] && (R && (R += " "), R += b);
    return R;
  }
  function c() {
    for (var l, f, b = 0, R = "", M = arguments.length; b < M; b++) (l = arguments[b]) && (f = a(l)) && (R && (R += " "), R += f);
    return R;
  }
  return Ro.exports = c, Ro.exports.clsx = c, Ro.exports;
}
var Ae = {}, Es, Cc;
function vp() {
  return Cc || (Cc = 1, Es = function(c, l, f) {
    return c === l ? !0 : c.className === l.className && f(c.style, l.style) && c.width === l.width && c.autoSize === l.autoSize && c.cols === l.cols && c.draggableCancel === l.draggableCancel && c.draggableHandle === l.draggableHandle && f(c.verticalCompact, l.verticalCompact) && f(c.compactType, l.compactType) && f(c.layout, l.layout) && f(c.margin, l.margin) && f(c.containerPadding, l.containerPadding) && c.rowHeight === l.rowHeight && c.maxRows === l.maxRows && c.isBounded === l.isBounded && c.isDraggable === l.isDraggable && c.isResizable === l.isResizable && c.allowOverlap === l.allowOverlap && c.preventCollision === l.preventCollision && c.useCSSTransforms === l.useCSSTransforms && c.transformScale === l.transformScale && c.isDroppable === l.isDroppable && f(c.resizeHandles, l.resizeHandles) && f(c.resizeHandle, l.resizeHandle) && c.onLayoutChange === l.onLayoutChange && c.onDragStart === l.onDragStart && c.onDrag === l.onDrag && c.onDragStop === l.onDragStop && c.onResizeStart === l.onResizeStart && c.onResize === l.onResize && c.onResizeStop === l.onResizeStop && c.onDrop === l.onDrop && f(c.droppingItem, l.droppingItem) && f(c.innerRef, l.innerRef);
  }), Es;
}
var Oc;
function xr() {
  if (Oc) return Ae;
  Oc = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.bottom = j, Ae.childrenEqual = we, Ae.cloneLayout = A, Ae.cloneLayoutItem = V, Ae.collides = Q, Ae.compact = N, Ae.compactItem = h, Ae.compactType = Be, Ae.correctBounds = d, Ae.fastPositionEqual = xe, Ae.fastRGLPropsEqual = void 0, Ae.getAllCollisions = z, Ae.getFirstCollision = m, Ae.getLayoutItem = p, Ae.getStatics = I, Ae.modifyLayout = Y, Ae.moveElement = U, Ae.moveElementAwayFromCollision = te, Ae.noop = void 0, Ae.perc = le, Ae.resizeItemInDirection = Ce, Ae.setTopLeft = De, Ae.setTransform = Pe, Ae.sortLayoutItems = Z, Ae.sortLayoutItemsByColRow = ze, Ae.sortLayoutItemsByRowCol = ae, Ae.synchronizeLayoutWithChildren = je, Ae.validateLayout = Le, Ae.withLayoutItem = B;
  var a = /* @__PURE__ */ Ns(), c = l(Rt());
  function l(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function f(_, E) {
    var C = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var $ = Object.getOwnPropertySymbols(_);
      E && ($ = $.filter(function(oe) {
        return Object.getOwnPropertyDescriptor(_, oe).enumerable;
      })), C.push.apply(C, $);
    }
    return C;
  }
  function b(_) {
    for (var E = 1; E < arguments.length; E++) {
      var C = arguments[E] != null ? arguments[E] : {};
      E % 2 ? f(Object(C), !0).forEach(function($) {
        R(_, $, C[$]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(C)) : f(Object(C)).forEach(function($) {
        Object.defineProperty(_, $, Object.getOwnPropertyDescriptor(C, $));
      });
    }
    return _;
  }
  function R(_, E, C) {
    return (E = M(E)) in _ ? Object.defineProperty(_, E, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : _[E] = C, _;
  }
  function M(_) {
    var E = F(_, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function F(_, E) {
    if (typeof _ != "object" || !_) return _;
    var C = _[Symbol.toPrimitive];
    if (C !== void 0) {
      var $ = C.call(_, E);
      if (typeof $ != "object") return $;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(_);
  }
  function j(_) {
    let E = 0, C;
    for (let $ = 0, oe = _.length; $ < oe; $++)
      C = _[$].y + _[$].h, C > E && (E = C);
    return E;
  }
  function A(_) {
    const E = Array(_.length);
    for (let C = 0, $ = _.length; C < $; C++)
      E[C] = V(_[C]);
    return E;
  }
  function Y(_, E) {
    const C = Array(_.length);
    for (let $ = 0, oe = _.length; $ < oe; $++)
      E.i === _[$].i ? C[$] = E : C[$] = _[$];
    return C;
  }
  function B(_, E, C) {
    let $ = p(_, E);
    return $ ? ($ = C(V($)), _ = Y(_, $), [_, $]) : [_, null];
  }
  function V(_) {
    return {
      w: _.w,
      h: _.h,
      x: _.x,
      y: _.y,
      i: _.i,
      minW: _.minW,
      maxW: _.maxW,
      minH: _.minH,
      maxH: _.maxH,
      moved: !!_.moved,
      static: !!_.static,
      // These can be null/undefined
      isDraggable: _.isDraggable,
      isResizable: _.isResizable,
      resizeHandles: _.resizeHandles,
      isBounded: _.isBounded
    };
  }
  function we(_, E) {
    return (0, a.deepEqual)(c.default.Children.map(_, (C) => C?.key), c.default.Children.map(E, (C) => C?.key)) && (0, a.deepEqual)(c.default.Children.map(_, (C) => C?.props["data-grid"]), c.default.Children.map(E, (C) => C?.props["data-grid"]));
  }
  Ae.fastRGLPropsEqual = vp();
  function xe(_, E) {
    return _.left === E.left && _.top === E.top && _.width === E.width && _.height === E.height;
  }
  function Q(_, E) {
    return !(_.i === E.i || _.x + _.w <= E.x || _.x >= E.x + E.w || _.y + _.h <= E.y || _.y >= E.y + E.h);
  }
  function N(_, E, C, $) {
    const oe = I(_);
    let ge = j(oe);
    const Ee = Z(_, E), Oe = Array(_.length);
    for (let Te = 0, $e = Ee.length; Te < $e; Te++) {
      let Qe = V(Ee[Te]);
      Qe.static || (Qe = h(oe, Qe, E, C, Ee, $, ge), ge = Math.max(ge, Qe.y + Qe.h), oe.push(Qe)), Oe[_.indexOf(Ee[Te])] = Qe, Qe.moved = !1;
    }
    return Oe;
  }
  const x = {
    x: "w",
    y: "h"
  };
  function u(_, E, C, $) {
    const oe = x[$];
    E[$] += 1;
    const ge = _.map((Ee) => Ee.i).indexOf(E.i);
    for (let Ee = ge + 1; Ee < _.length; Ee++) {
      const Oe = _[Ee];
      if (!Oe.static) {
        if (Oe.y > E.y + E.h) break;
        Q(E, Oe) && u(_, Oe, C + E[oe], $);
      }
    }
    E[$] = C;
  }
  function h(_, E, C, $, oe, ge, Ee) {
    const Oe = C === "vertical", Te = C === "horizontal";
    if (Oe)
      for (typeof Ee == "number" ? E.y = Math.min(Ee, E.y) : E.y = Math.min(j(_), E.y); E.y > 0 && !m(_, E); )
        E.y--;
    else if (Te)
      for (; E.x > 0 && !m(_, E); )
        E.x--;
    let $e;
    for (; ($e = m(_, E)) && !(C === null && ge); )
      if (Te ? u(oe, E, $e.x + $e.w, "x") : u(oe, E, $e.y + $e.h, "y"), Te && E.x + E.w > $)
        for (E.x = $ - E.w, E.y++; E.x > 0 && !m(_, E); )
          E.x--;
    return E.y = Math.max(E.y, 0), E.x = Math.max(E.x, 0), E;
  }
  function d(_, E) {
    const C = I(_);
    for (let $ = 0, oe = _.length; $ < oe; $++) {
      const ge = _[$];
      if (ge.x + ge.w > E.cols && (ge.x = E.cols - ge.w), ge.x < 0 && (ge.x = 0, ge.w = E.cols), !ge.static) C.push(ge);
      else
        for (; m(C, ge); )
          ge.y++;
    }
    return _;
  }
  function p(_, E) {
    for (let C = 0, $ = _.length; C < $; C++)
      if (_[C].i === E) return _[C];
  }
  function m(_, E) {
    for (let C = 0, $ = _.length; C < $; C++)
      if (Q(_[C], E)) return _[C];
  }
  function z(_, E) {
    return _.filter((C) => Q(C, E));
  }
  function I(_) {
    return _.filter((E) => E.static);
  }
  function U(_, E, C, $, oe, ge, Ee, Oe, Te) {
    if (E.static && E.isDraggable !== !0 || E.y === $ && E.x === C) return _;
    "Moving element ".concat(E.i, " to [").concat(String(C), ",").concat(String($), "] from [").concat(E.x, ",").concat(E.y, "]");
    const $e = E.x, Qe = E.y;
    typeof C == "number" && (E.x = C), typeof $ == "number" && (E.y = $), E.moved = !0;
    let at = Z(_, Ee);
    (Ee === "vertical" && typeof $ == "number" ? Qe >= $ : Ee === "horizontal" && typeof C == "number" ? $e >= C : !1) && (at = at.reverse());
    const P = z(at, E), H = P.length > 0;
    if (H && Te)
      return A(_);
    if (H && ge)
      return "Collision prevented on ".concat(E.i, ", reverting."), E.x = $e, E.y = Qe, E.moved = !1, _;
    for (let ee = 0, se = P.length; ee < se; ee++) {
      const Me = P[ee];
      "Resolving collision between ".concat(E.i, " at [").concat(E.x, ",").concat(E.y, "] and ").concat(Me.i, " at [").concat(Me.x, ",").concat(Me.y, "]"), !Me.moved && (Me.static ? _ = te(_, Me, E, oe, Ee) : _ = te(_, E, Me, oe, Ee));
    }
    return _;
  }
  function te(_, E, C, $, oe, ge) {
    const Ee = oe === "horizontal", Oe = oe === "vertical", Te = E.static;
    if ($) {
      $ = !1;
      const at = {
        x: Ee ? Math.max(E.x - C.w, 0) : C.x,
        y: Oe ? Math.max(E.y - C.h, 0) : C.y,
        w: C.w,
        h: C.h,
        i: "-1"
      }, y = m(_, at), P = y && y.y + y.h > E.y, H = y && E.x + E.w > y.x;
      if (y) {
        if (P && Oe)
          return U(_, C, void 0, C.y + 1, $, Te, oe);
        if (P && oe == null)
          return E.y = C.y, C.y = C.y + C.h, _;
        if (H && Ee)
          return U(_, E, C.x, void 0, $, Te, oe);
      } else return "Doing reverse collision on ".concat(C.i, " up to [").concat(at.x, ",").concat(at.y, "]."), U(_, C, Ee ? at.x : void 0, Oe ? at.y : void 0, $, Te, oe);
    }
    const $e = Ee ? C.x + 1 : void 0, Qe = Oe ? C.y + 1 : void 0;
    return $e == null && Qe == null ? _ : U(_, C, Ee ? C.x + 1 : void 0, Oe ? C.y + 1 : void 0, $, Te, oe);
  }
  function le(_) {
    return _ * 100 + "%";
  }
  const ie = (_, E, C, $) => _ + C > $ ? E : C, re = (_, E, C) => _ < 0 ? E : C, me = (_) => Math.max(0, _), Se = (_) => Math.max(0, _), pe = (_, E, C) => {
    let {
      left: $,
      height: oe,
      width: ge
    } = E;
    const Ee = _.top - (oe - _.height);
    return {
      left: $,
      width: ge,
      height: re(Ee, _.height, oe),
      top: Se(Ee)
    };
  }, ue = (_, E, C) => {
    let {
      top: $,
      left: oe,
      height: ge,
      width: Ee
    } = E;
    return {
      top: $,
      height: ge,
      width: ie(_.left, _.width, Ee, C),
      left: me(oe)
    };
  }, G = (_, E, C) => {
    let {
      top: $,
      height: oe,
      width: ge
    } = E;
    const Ee = _.left - (ge - _.width);
    return {
      height: oe,
      width: Ee < 0 ? _.width : ie(_.left, _.width, ge, C),
      top: Se($),
      left: me(Ee)
    };
  }, W = (_, E, C) => {
    let {
      top: $,
      left: oe,
      height: ge,
      width: Ee
    } = E;
    return {
      width: Ee,
      left: oe,
      height: re($, _.height, ge),
      top: Se($)
    };
  }, _e = {
    n: pe,
    ne: function() {
      return pe(arguments.length <= 0 ? void 0 : arguments[0], ue(...arguments));
    },
    e: ue,
    se: function() {
      return W(arguments.length <= 0 ? void 0 : arguments[0], ue(...arguments));
    },
    s: W,
    sw: function() {
      return W(arguments.length <= 0 ? void 0 : arguments[0], G(...arguments));
    },
    w: G,
    nw: function() {
      return pe(arguments.length <= 0 ? void 0 : arguments[0], G(...arguments));
    }
  };
  function Ce(_, E, C, $) {
    const oe = _e[_];
    return oe ? oe(E, b(b({}, E), C), $) : C;
  }
  function Pe(_) {
    let {
      top: E,
      left: C,
      width: $,
      height: oe
    } = _;
    const ge = "translate(".concat(C, "px,").concat(E, "px)");
    return {
      transform: ge,
      WebkitTransform: ge,
      MozTransform: ge,
      msTransform: ge,
      OTransform: ge,
      width: "".concat($, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function De(_) {
    let {
      top: E,
      left: C,
      width: $,
      height: oe
    } = _;
    return {
      top: "".concat(E, "px"),
      left: "".concat(C, "px"),
      width: "".concat($, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function Z(_, E) {
    return E === "horizontal" ? ze(_) : E === "vertical" ? ae(_) : _;
  }
  function ae(_) {
    return _.slice(0).sort(function(E, C) {
      return E.y > C.y || E.y === C.y && E.x > C.x ? 1 : E.y === C.y && E.x === C.x ? 0 : -1;
    });
  }
  function ze(_) {
    return _.slice(0).sort(function(E, C) {
      return E.x > C.x || E.x === C.x && E.y > C.y ? 1 : -1;
    });
  }
  function je(_, E, C, $, oe) {
    _ = _ || [];
    const ge = [];
    c.default.Children.forEach(E, (Oe) => {
      if (Oe?.key == null) return;
      const Te = p(_, String(Oe.key)), $e = Oe.props["data-grid"];
      Te && $e == null ? ge.push(V(Te)) : $e ? ge.push(V(b(b({}, $e), {}, {
        i: Oe.key
      }))) : ge.push(V({
        w: 1,
        h: 1,
        x: 0,
        y: j(ge),
        i: String(Oe.key)
      }));
    });
    const Ee = d(ge, {
      cols: C
    });
    return oe ? Ee : N(Ee, $, C);
  }
  function Le(_) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const C = ["x", "y", "w", "h"];
    if (!Array.isArray(_)) throw new Error(E + " must be an array!");
    for (let $ = 0, oe = _.length; $ < oe; $++) {
      const ge = _[$];
      for (let Ee = 0; Ee < C.length; Ee++) {
        const Oe = C[Ee], Te = ge[Oe];
        if (typeof Te != "number" || Number.isNaN(Te))
          throw new Error("ReactGridLayout: ".concat(E, "[").concat($, "].").concat(Oe, " must be a number! Received: ").concat(Te, " (").concat(typeof Te, ")"));
      }
      if (typeof ge.i < "u" && typeof ge.i != "string")
        throw new Error("ReactGridLayout: ".concat(E, "[").concat($, "].i must be a string! Received: ").concat(ge.i, " (").concat(typeof ge.i, ")"));
    }
  }
  function Be(_) {
    const {
      verticalCompact: E,
      compactType: C
    } = _ || {};
    return E === !1 ? null : C;
  }
  function Ve() {
  }
  const nt = () => {
  };
  return Ae.noop = nt, Ae;
}
var an = {}, Pc;
function Ls() {
  if (Pc) return an;
  Pc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = a, an.calcGridItemPosition = l, an.calcGridItemWHPx = c, an.calcWH = b, an.calcXY = f, an.clamp = R;
  function a(M) {
    const {
      margin: F,
      containerPadding: j,
      containerWidth: A,
      cols: Y
    } = M;
    return (A - F[0] * (Y - 1) - j[0] * 2) / Y;
  }
  function c(M, F, j) {
    return Number.isFinite(M) ? Math.round(F * M + Math.max(0, M - 1) * j) : M;
  }
  function l(M, F, j, A, Y, B) {
    const {
      margin: V,
      containerPadding: we,
      rowHeight: xe
    } = M, Q = a(M), N = {};
    return B && B.resizing ? (N.width = Math.round(B.resizing.width), N.height = Math.round(B.resizing.height)) : (N.width = c(A, Q, V[0]), N.height = c(Y, xe, V[1])), B && B.dragging ? (N.top = Math.round(B.dragging.top), N.left = Math.round(B.dragging.left)) : B && B.resizing && typeof B.resizing.top == "number" && typeof B.resizing.left == "number" ? (N.top = Math.round(B.resizing.top), N.left = Math.round(B.resizing.left)) : (N.top = Math.round((xe + V[1]) * j + we[1]), N.left = Math.round((Q + V[0]) * F + we[0])), N;
  }
  function f(M, F, j, A, Y) {
    const {
      margin: B,
      containerPadding: V,
      cols: we,
      rowHeight: xe,
      maxRows: Q
    } = M, N = a(M);
    let x = Math.round((j - V[0]) / (N + B[0])), u = Math.round((F - V[1]) / (xe + B[1]));
    return x = R(x, 0, we - A), u = R(u, 0, Q - Y), {
      x,
      y: u
    };
  }
  function b(M, F, j, A, Y, B) {
    const {
      margin: V,
      maxRows: we,
      cols: xe,
      rowHeight: Q
    } = M, N = a(M);
    let x = Math.round((F + V[0]) / (N + V[0])), u = Math.round((j + V[1]) / (Q + V[1])), h = R(x, 0, xe - A), d = R(u, 0, we - Y);
    return ["sw", "w", "nw"].indexOf(B) !== -1 && (h = R(x, 0, xe)), ["nw", "n", "ne"].indexOf(B) !== -1 && (d = R(u, 0, we)), {
      w: h,
      h: d
    };
  }
  function R(M, F, j) {
    return Math.max(Math.min(M, j), F);
  }
  return an;
}
var li = {}, zs = { exports: {} }, Rs, jc;
function xp() {
  if (jc) return Rs;
  jc = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rs = a, Rs;
}
var Cs, Dc;
function wp() {
  if (Dc) return Cs;
  Dc = 1;
  var a = /* @__PURE__ */ xp();
  function c() {
  }
  function l() {
  }
  return l.resetWarningCache = c, Cs = function() {
    function f(M, F, j, A, Y, B) {
      if (B !== a) {
        var V = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw V.name = "Invariant Violation", V;
      }
    }
    f.isRequired = f;
    function b() {
      return f;
    }
    var R = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: b,
      element: f,
      elementType: f,
      instanceOf: b,
      node: f,
      objectOf: b,
      oneOf: b,
      oneOfType: b,
      shape: b,
      exact: b,
      checkPropTypes: l,
      resetWarningCache: c
    };
    return R.PropTypes = R, R;
  }, Cs;
}
var Tc;
function Pn() {
  return Tc || (Tc = 1, zs.exports = /* @__PURE__ */ wp()()), zs.exports;
}
var si = { exports: {} }, Os, Nc;
function Sp() {
  if (Nc) return Os;
  Nc = 1;
  var a = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, b = Object.getPrototypeOf, R = Object.prototype.hasOwnProperty, M = (y, P) => {
    for (var H in P)
      c(y, H, { get: P[H], enumerable: !0 });
  }, F = (y, P, H, ee) => {
    if (P && typeof P == "object" || typeof P == "function")
      for (let se of f(P))
        !R.call(y, se) && se !== H && c(y, se, { get: () => P[se], enumerable: !(ee = l(P, se)) || ee.enumerable });
    return y;
  }, j = (y, P, H) => (H = y != null ? a(b(y)) : {}, F(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !y || !y.__esModule ? c(H, "default", { value: y, enumerable: !0 }) : H,
    y
  )), A = (y) => F(c({}, "__esModule", { value: !0 }), y), Y = {};
  M(Y, {
    DraggableCore: () => Qe,
    default: () => at
  }), Os = A(Y);
  var B = j(Rt()), V = j(/* @__PURE__ */ Pn()), we = j(mi()), xe = No();
  function Q(y, P) {
    for (let H = 0, ee = y.length; H < ee; H++)
      if (P.apply(P, [y[H], H, y])) return y[H];
  }
  function N(y) {
    return typeof y == "function" || Object.prototype.toString.call(y) === "[object Function]";
  }
  function x(y) {
    return typeof y == "number" && !isNaN(y);
  }
  function u(y) {
    return parseInt(y, 10);
  }
  function h(y, P, H) {
    if (y[P])
      return new Error(`Invalid prop ${P} passed to ${H} - do not set this, set it on the child.`);
  }
  var d = ["Moz", "Webkit", "O", "ms"];
  function p(y = "transform") {
    var P, H;
    if (typeof window > "u") return "";
    const ee = (H = (P = window.document) == null ? void 0 : P.documentElement) == null ? void 0 : H.style;
    if (!ee || y in ee) return "";
    for (let se = 0; se < d.length; se++)
      if (m(y, d[se]) in ee) return d[se];
    return "";
  }
  function m(y, P) {
    return P ? `${P}${z(y)}` : y;
  }
  function z(y) {
    let P = "", H = !0;
    for (let ee = 0; ee < y.length; ee++)
      H ? (P += y[ee].toUpperCase(), H = !1) : y[ee] === "-" ? H = !0 : P += y[ee];
    return P;
  }
  var I = p(), U = "";
  function te(y, P) {
    var H;
    U || (U = (H = Q([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(se) {
      return N(y[se]);
    })) != null ? H : "");
    const ee = y[U];
    return N(ee) ? !!ee.call(y, P) : !1;
  }
  function le(y, P, H) {
    let ee = y;
    do {
      if (te(ee, P)) return !0;
      if (ee === H) return !1;
      ee = ee.parentNode;
    } while (ee);
    return !1;
  }
  function ie(y, P, H, ee) {
    if (!y) return;
    const se = { capture: !0, ...ee }, Me = H;
    y.addEventListener ? y.addEventListener(P, Me, se) : y.attachEvent ? y.attachEvent("on" + P, Me) : y["on" + P] = Me;
  }
  function re(y, P, H, ee) {
    if (!y) return;
    const se = { capture: !0, ...ee }, Me = H;
    y.removeEventListener ? y.removeEventListener(P, Me, se) : y.detachEvent ? y.detachEvent("on" + P, Me) : y["on" + P] = null;
  }
  function me(y) {
    let P = y.clientHeight;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return P += u(H.borderTopWidth), P += u(H.borderBottomWidth), P;
  }
  function Se(y) {
    let P = y.clientWidth;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return P += u(H.borderLeftWidth), P += u(H.borderRightWidth), P;
  }
  function pe(y) {
    let P = y.clientHeight;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return P -= u(H.paddingTop), P -= u(H.paddingBottom), P;
  }
  function ue(y) {
    let P = y.clientWidth;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return P -= u(H.paddingLeft), P -= u(H.paddingRight), P;
  }
  function G(y, P, H) {
    const se = P === P.ownerDocument.body ? { left: 0, top: 0 } : P.getBoundingClientRect(), Me = (y.clientX + P.scrollLeft - se.left) / H, Ie = (y.clientY + P.scrollTop - se.top) / H;
    return { x: Me, y: Ie };
  }
  function W(y, P) {
    const H = w(y, P, "px");
    return { [m("transform", I)]: H };
  }
  function q(y, P) {
    return w(y, P, "");
  }
  function w({ x: y, y: P }, H, ee) {
    let se = `translate(${y}${ee},${P}${ee})`;
    if (H) {
      const Me = `${typeof H.x == "string" ? H.x : H.x + ee}`, Ie = `${typeof H.y == "string" ? H.y : H.y + ee}`;
      se = `translate(${Me}, ${Ie})` + se;
    }
    return se;
  }
  function T(y, P) {
    return y.targetTouches && Q(y.targetTouches, (H) => P === H.identifier) || y.changedTouches && Q(y.changedTouches, (H) => P === H.identifier);
  }
  function ye(y) {
    if (y.targetTouches && y.targetTouches[0]) return y.targetTouches[0].identifier;
    if (y.changedTouches && y.changedTouches[0]) return y.changedTouches[0].identifier;
  }
  function _e() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Ce(y, P) {
    if (!y) return;
    let H = y.getElementById("react-draggable-style-el");
    if (!H) {
      H = y.createElement("style"), H.type = "text/css", H.id = "react-draggable-style-el";
      const ee = P ?? _e();
      ee && H.setAttribute("nonce", ee), H.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, H.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, y.getElementsByTagName("head")[0].appendChild(H);
    }
    y.body && Z(y.body, "react-draggable-transparent-selection");
  }
  function Pe(y) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      De(y);
    }) : De(y);
  }
  function De(y) {
    if (y)
      try {
        y.body && ae(y.body, "react-draggable-transparent-selection");
        const P = y.selection;
        if (P)
          P.empty();
        else {
          const H = (y.defaultView || window).getSelection();
          H && H.type !== "Caret" && H.removeAllRanges();
        }
      } catch {
      }
  }
  function Z(y, P) {
    y.classList ? y.classList.add(P) : y.className.match(new RegExp(`(?:^|\\s)${P}(?!\\S)`)) || (y.className += ` ${P}`);
  }
  function ae(y, P) {
    y.classList ? y.classList.remove(P) : y.className = y.className.replace(new RegExp(`(?:^|\\s)${P}(?!\\S)`, "g"), "");
  }
  function ze(y, P, H) {
    if (!y.props.bounds) return [P, H];
    let { bounds: ee } = y.props;
    ee = typeof ee == "string" ? ee : E(ee);
    const se = C(y);
    if (typeof ee == "string") {
      const { ownerDocument: Me } = se, Ie = Me.defaultView;
      if (!Ie)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Ke;
      if (ee === "parent" ? Ke = se.parentNode : Ke = se.getRootNode().querySelector(ee), !(Ke instanceof Ie.HTMLElement))
        throw new Error('Bounds selector "' + ee + '" could not find an element.');
      const ft = Ke, At = Ie.getComputedStyle(se), Vt = Ie.getComputedStyle(ft);
      ee = {
        left: -se.offsetLeft + u(Vt.paddingLeft) + u(At.marginLeft),
        top: -se.offsetTop + u(Vt.paddingTop) + u(At.marginTop),
        right: ue(ft) - Se(se) - se.offsetLeft + u(Vt.paddingRight) - u(At.marginRight),
        bottom: pe(ft) - me(se) - se.offsetTop + u(Vt.paddingBottom) - u(At.marginBottom)
      };
    }
    return x(ee.right) && (P = Math.min(P, ee.right)), x(ee.bottom) && (H = Math.min(H, ee.bottom)), x(ee.left) && (P = Math.max(P, ee.left)), x(ee.top) && (H = Math.max(H, ee.top)), [P, H];
  }
  function je(y, P, H) {
    const ee = Math.round(P / y[0]) * y[0], se = Math.round(H / y[1]) * y[1];
    return [ee, se];
  }
  function Le(y) {
    return y.props.axis === "both" || y.props.axis === "x";
  }
  function Be(y) {
    return y.props.axis === "both" || y.props.axis === "y";
  }
  function Ve(y, P, H) {
    const ee = typeof P == "number" ? T(y, P) : null;
    if (typeof P == "number" && !ee) return null;
    const se = C(H), Me = H.props.offsetParent || se.offsetParent || se.ownerDocument.body;
    return G(ee || y, Me, H.props.scale);
  }
  function nt(y, P, H) {
    const ee = !x(y.lastX), se = C(y);
    return ee ? {
      node: se,
      deltaX: 0,
      deltaY: 0,
      lastX: P,
      lastY: H,
      x: P,
      y: H
    } : {
      node: se,
      deltaX: P - y.lastX,
      deltaY: H - y.lastY,
      lastX: y.lastX,
      lastY: y.lastY,
      x: P,
      y: H
    };
  }
  function _(y, P) {
    const H = y.props.scale;
    return {
      node: P.node,
      x: y.state.x + P.deltaX / H,
      y: y.state.y + P.deltaY / H,
      deltaX: P.deltaX / H,
      deltaY: P.deltaY / H,
      lastX: y.state.x,
      lastY: y.state.y
    };
  }
  function E(y) {
    return {
      left: y.left,
      top: y.top,
      right: y.right,
      bottom: y.bottom
    };
  }
  function C(y) {
    const P = y.findDOMNode();
    if (!P)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return P;
  }
  var $ = j(Rt()), oe = j(/* @__PURE__ */ Pn()), ge = j(mi()), Ee = function() {
  }, Oe = Ee, Te = {
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
  }, $e = Te.mouse, Qe = class extends $.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (y) => {
        if (this.props.onMouseDown(y), !this.props.allowAnyClick && (typeof y.button == "number" && y.button !== 0 || y.ctrlKey)) return !1;
        const P = this.findDOMNode();
        if (!P || !P.ownerDocument || !P.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: H } = P;
        if (this.props.disabled || !(y.target instanceof H.defaultView.Node) || this.props.handle && !le(y.target, this.props.handle, P) || this.props.cancel && le(y.target, this.props.cancel, P))
          return;
        y.type === "touchstart" && !this.props.allowMobileScroll && y.preventDefault();
        const ee = ye(y);
        this.touchIdentifier = ee;
        const se = Ve(y, ee, this);
        if (se == null) return;
        const { x: Me, y: Ie } = se, Ke = nt(this, Me, Ie);
        Oe("calling", this.props.onStart), !(this.props.onStart(y, Ke) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Ce(H, this.props.nonce), this.dragging = !0, this.lastX = Me, this.lastY = Ie, ie(H, $e.move, this.handleDrag), ie(H, $e.stop, this.handleDragStop));
      }, this.handleDrag = (y) => {
        const P = Ve(y, this.touchIdentifier, this);
        if (P == null) return;
        let { x: H, y: ee } = P;
        if (Array.isArray(this.props.grid)) {
          let Ie = H - this.lastX, Ke = ee - this.lastY;
          if ([Ie, Ke] = je(this.props.grid, Ie, Ke), !Ie && !Ke) return;
          H = this.lastX + Ie, ee = this.lastY + Ke;
        }
        const se = nt(this, H, ee);
        if (this.props.onDrag(y, se) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const Ie = document.createEvent("MouseEvents");
            Ie.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(Ie);
          }
          return;
        }
        this.lastX = H, this.lastY = ee;
      }, this.handleDragStop = (y) => {
        if (!this.dragging) return;
        const P = Ve(y, this.touchIdentifier, this);
        if (P == null) return;
        let { x: H, y: ee } = P;
        if (Array.isArray(this.props.grid)) {
          let Ke = H - this.lastX || 0, ft = ee - this.lastY || 0;
          [Ke, ft] = je(this.props.grid, Ke, ft), H = this.lastX + Ke, ee = this.lastY + ft;
        }
        const se = nt(this, H, ee);
        if (this.props.onStop(y, se) === !1 || this.mounted === !1) return !1;
        const Ie = this.findDOMNode();
        Ie && this.props.enableUserSelectHack && Pe(Ie.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Ie && (re(Ie.ownerDocument, $e.move, this.handleDrag), re(Ie.ownerDocument, $e.stop, this.handleDragStop));
      }, this.onMouseDown = (y) => ($e = Te.mouse, this.handleDragStart(y)), this.onMouseUp = (y) => ($e = Te.mouse, this.handleDragStop(y)), this.onTouchStart = (y) => ($e = Te.touch, this.handleDragStart(y)), this.onTouchEnd = (y) => ($e = Te.touch, this.handleDragStop(y));
    }
    componentDidMount() {
      this.mounted = !0;
      const y = this.findDOMNode();
      y && ie(y, Te.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const y = this.findDOMNode();
      if (y) {
        const { ownerDocument: P } = y;
        re(P, Te.mouse.move, this.handleDrag), re(P, Te.touch.move, this.handleDrag), re(P, Te.mouse.stop, this.handleDragStop), re(P, Te.touch.stop, this.handleDragStop), re(y, Te.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Pe(P);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var y;
      if ((y = this.props) != null && y.nodeRef)
        return this.props.nodeRef.current;
      const P = ge.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      return $.cloneElement($.Children.only(this.props.children), {
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
    offsetParent: function(y, P) {
      if (y[P] && y[P].nodeType !== 1)
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
  var at = class extends B.Component {
    constructor(y) {
      super(y), this.onDragStart = (P, H) => {
        if (this.props.onStart(P, _(this, H)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (P, H) => {
        if (!this.state.dragging) return !1;
        const ee = _(this, H), se = {
          x: ee.x,
          y: ee.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: Ie, y: Ke } = se;
          se.x += this.state.slackX, se.y += this.state.slackY;
          const [ft, At] = ze(this, se.x, se.y);
          se.x = ft, se.y = At, se.slackX = this.state.slackX + (Ie - se.x), se.slackY = this.state.slackY + (Ke - se.y), ee.x = se.x, ee.y = se.y, ee.deltaX = se.x - this.state.x, ee.deltaY = se.y - this.state.y;
        }
        if (this.props.onDrag(P, ee) === !1) return !1;
        this.setState(se);
      }, this.onDragStop = (P, H) => {
        if (!this.state.dragging || this.props.onStop(P, _(this, H)) === !1) return !1;
        const se = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: Ie, y: Ke } = this.props.position;
          se.x = Ie, se.y = Ke;
        }
        this.setState(se);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: y.position ? y.position.x : y.defaultPosition.x,
        y: y.position ? y.position.y : y.defaultPosition.y,
        prevPropsPosition: { ...y.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, y.position && !(y.onDrag || y.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: y }, { prevPropsPosition: P }) {
      return y && (!P || y.x !== P.x || y.y !== P.y) ? {
        x: y.x,
        y: y.y,
        prevPropsPosition: { ...y }
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
      var y;
      if ((y = this.props) != null && y.nodeRef)
        return this.props.nodeRef.current;
      const P = we.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: y,
        bounds: P,
        children: H,
        defaultPosition: ee,
        defaultClassName: se,
        defaultClassNameDragging: Me,
        defaultClassNameDragged: Ie,
        position: Ke,
        positionOffset: ft,
        scale: At,
        ...Vt
      } = this.props;
      let jn = {}, Gn = null;
      const Zt = !!!Ke || this.state.dragging, wr = Ke || ee, Sr = {
        // Set left if horizontal drag is enabled
        x: Le(this) && Zt ? this.state.x : wr.x,
        // Set top if vertical drag is enabled
        y: Be(this) && Zt ? this.state.y : wr.y
      };
      this.state.isElementSVG ? Gn = q(Sr, ft) : jn = W(Sr, ft);
      const Yn = B.Children.only(H), yi = (0, xe.clsx)(Yn.props.className || "", se, {
        [Me]: this.state.dragging,
        [Ie]: this.state.dragged
      });
      return /* @__PURE__ */ B.createElement(Qe, { ...Vt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, B.cloneElement(Yn, {
        className: yi,
        style: { ...Yn.props.style, ...jn },
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
    axis: V.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: V.default.oneOfType([
      V.default.shape({
        left: V.default.number,
        right: V.default.number,
        top: V.default.number,
        bottom: V.default.number
      }),
      V.default.string,
      V.default.oneOf([!1])
    ]),
    defaultClassName: V.default.string,
    defaultClassNameDragging: V.default.string,
    defaultClassNameDragged: V.default.string,
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
    defaultPosition: V.default.shape({
      x: V.default.number,
      y: V.default.number
    }),
    positionOffset: V.default.shape({
      x: V.default.oneOfType([V.default.number, V.default.string]),
      y: V.default.oneOfType([V.default.number, V.default.string])
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
    position: V.default.shape({
      x: V.default.number,
      y: V.default.number
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
  }, Os;
}
var Lc;
function Ms() {
  if (Lc) return si.exports;
  Lc = 1;
  const a = Sp(), c = a.DraggableCore, l = a.default || a;
  return si.exports = l, si.exports.default = l, si.exports.DraggableCore = c, si.exports;
}
var ai = { exports: {} }, ui = {}, Co = {}, Mc;
function _p() {
  if (Mc) return Co;
  Mc = 1, Co.__esModule = !0, Co.cloneElement = F;
  var a = c(Rt());
  function c(j) {
    return j && j.__esModule ? j : { default: j };
  }
  function l(j, A) {
    var Y = Object.keys(j);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(j);
      A && (B = B.filter(function(V) {
        return Object.getOwnPropertyDescriptor(j, V).enumerable;
      })), Y.push.apply(Y, B);
    }
    return Y;
  }
  function f(j) {
    for (var A = 1; A < arguments.length; A++) {
      var Y = arguments[A] != null ? arguments[A] : {};
      A % 2 ? l(Object(Y), !0).forEach(function(B) {
        b(j, B, Y[B]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(Y)) : l(Object(Y)).forEach(function(B) {
        Object.defineProperty(j, B, Object.getOwnPropertyDescriptor(Y, B));
      });
    }
    return j;
  }
  function b(j, A, Y) {
    return A = R(A), A in j ? Object.defineProperty(j, A, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : j[A] = Y, j;
  }
  function R(j) {
    var A = M(j, "string");
    return typeof A == "symbol" ? A : String(A);
  }
  function M(j, A) {
    if (typeof j != "object" || j === null) return j;
    var Y = j[Symbol.toPrimitive];
    if (Y !== void 0) {
      var B = Y.call(j, A);
      if (typeof B != "object") return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (A === "string" ? String : Number)(j);
  }
  function F(j, A) {
    return A.style && j.props.style && (A.style = f(f({}, j.props.style), A.style)), A.className && j.props.className && (A.className = j.props.className + " " + A.className), /* @__PURE__ */ a.default.cloneElement(j, A);
  }
  return Co;
}
var ci = {}, Ic;
function Jc() {
  if (Ic) return ci;
  Ic = 1, ci.__esModule = !0, ci.resizableProps = void 0;
  var a = c(/* @__PURE__ */ Pn());
  Ms();
  function c(f) {
    return f && f.__esModule ? f : { default: f };
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
      for (var b = arguments.length, R = new Array(b), M = 0; M < b; M++)
        R[M] = arguments[M];
      var F = R[0];
      if (F.axis === "both" || F.axis === "y") {
        var j;
        return (j = a.default.number).isRequired.apply(j, R);
      }
      return a.default.number.apply(a.default, R);
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
      for (var b = arguments.length, R = new Array(b), M = 0; M < b; M++)
        R[M] = arguments[M];
      var F = R[0];
      if (F.axis === "both" || F.axis === "x") {
        var j;
        return (j = a.default.number).isRequired.apply(j, R);
      }
      return a.default.number.apply(a.default, R);
    }
  };
  return ci.resizableProps = l, ci;
}
var Ac;
function ed() {
  if (Ac) return ui;
  Ac = 1, ui.__esModule = !0, ui.default = void 0;
  var a = M(Rt()), c = Ms(), l = _p(), f = Jc(), b = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function R(x) {
    if (typeof WeakMap != "function") return null;
    var u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (R = function(p) {
      return p ? h : u;
    })(x);
  }
  function M(x, u) {
    if (x && x.__esModule)
      return x;
    if (x === null || typeof x != "object" && typeof x != "function")
      return { default: x };
    var h = R(u);
    if (h && h.has(x))
      return h.get(x);
    var d = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in x)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(x, m)) {
        var z = p ? Object.getOwnPropertyDescriptor(x, m) : null;
        z && (z.get || z.set) ? Object.defineProperty(d, m, z) : d[m] = x[m];
      }
    return d.default = x, h && h.set(x, d), d;
  }
  function F() {
    return F = Object.assign ? Object.assign.bind() : function(x) {
      for (var u = 1; u < arguments.length; u++) {
        var h = arguments[u];
        for (var d in h)
          Object.prototype.hasOwnProperty.call(h, d) && (x[d] = h[d]);
      }
      return x;
    }, F.apply(this, arguments);
  }
  function j(x, u) {
    if (x == null) return {};
    var h = {}, d = Object.keys(x), p, m;
    for (m = 0; m < d.length; m++)
      p = d[m], !(u.indexOf(p) >= 0) && (h[p] = x[p]);
    return h;
  }
  function A(x, u) {
    var h = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(x);
      u && (d = d.filter(function(p) {
        return Object.getOwnPropertyDescriptor(x, p).enumerable;
      })), h.push.apply(h, d);
    }
    return h;
  }
  function Y(x) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? A(Object(h), !0).forEach(function(d) {
        B(x, d, h[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(d) {
        Object.defineProperty(x, d, Object.getOwnPropertyDescriptor(h, d));
      });
    }
    return x;
  }
  function B(x, u, h) {
    return u = V(u), u in x ? Object.defineProperty(x, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : x[u] = h, x;
  }
  function V(x) {
    var u = we(x, "string");
    return typeof u == "symbol" ? u : String(u);
  }
  function we(x, u) {
    if (typeof x != "object" || x === null) return x;
    var h = x[Symbol.toPrimitive];
    if (h !== void 0) {
      var d = h.call(x, u);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(x);
  }
  function xe(x, u) {
    x.prototype = Object.create(u.prototype), x.prototype.constructor = x, Q(x, u);
  }
  function Q(x, u) {
    return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, p) {
      return d.__proto__ = p, d;
    }, Q(x, u);
  }
  var N = /* @__PURE__ */ function(x) {
    xe(u, x);
    function u() {
      for (var d, p = arguments.length, m = new Array(p), z = 0; z < p; z++)
        m[z] = arguments[z];
      return d = x.call.apply(x, [this].concat(m)) || this, d.handleRefs = {}, d.lastHandleRect = null, d.slack = null, d;
    }
    var h = u.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(p, m) {
      var z = this.props, I = z.minConstraints, U = z.maxConstraints, te = z.lockAspectRatio;
      if (!I && !U && !te) return [p, m];
      if (te) {
        var le = this.props.width / this.props.height, ie = p - this.props.width, re = m - this.props.height;
        Math.abs(ie) > Math.abs(re * le) ? m = p / le : p = m * le;
      }
      var me = p, Se = m, pe = this.slack || [0, 0], ue = pe[0], G = pe[1];
      return p += ue, m += G, I && (p = Math.max(I[0], p), m = Math.max(I[1], m)), U && (p = Math.min(U[0], p), m = Math.min(U[1], m)), this.slack = [ue + (me - p), G + (Se - m)], [p, m];
    }, h.resizeHandler = function(p, m) {
      var z = this;
      return function(I, U) {
        var te = U.node, le = U.deltaX, ie = U.deltaY;
        p === "onResizeStart" && z.resetData();
        var re = (z.props.axis === "both" || z.props.axis === "x") && m !== "n" && m !== "s", me = (z.props.axis === "both" || z.props.axis === "y") && m !== "e" && m !== "w";
        if (!(!re && !me)) {
          var Se = m[0], pe = m[m.length - 1], ue = te.getBoundingClientRect();
          if (z.lastHandleRect != null) {
            if (pe === "w") {
              var G = ue.left - z.lastHandleRect.left;
              le += G;
            }
            if (Se === "n") {
              var W = ue.top - z.lastHandleRect.top;
              ie += W;
            }
          }
          z.lastHandleRect = ue, pe === "w" && (le = -le), Se === "n" && (ie = -ie);
          var q = z.props.width + (re ? le / z.props.transformScale : 0), w = z.props.height + (me ? ie / z.props.transformScale : 0), T = z.runConstraints(q, w);
          q = T[0], w = T[1];
          var ye = q !== z.props.width || w !== z.props.height, _e = typeof z.props[p] == "function" ? z.props[p] : null, Ce = p === "onResize" && !ye;
          _e && !Ce && (I.persist == null || I.persist(), _e(I, {
            node: te,
            size: {
              width: q,
              height: w
            },
            handle: m
          })), p === "onResizeStop" && z.resetData();
        }
      };
    }, h.renderResizeHandle = function(p, m) {
      var z = this.props.handle;
      if (!z)
        return /* @__PURE__ */ a.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + p,
          ref: m
        });
      if (typeof z == "function")
        return z(p, m);
      var I = typeof z.type == "string", U = Y({
        ref: m
      }, I ? {} : {
        handleAxis: p
      });
      return /* @__PURE__ */ a.cloneElement(z, U);
    }, h.render = function() {
      var p = this, m = this.props, z = m.children, I = m.className, U = m.draggableOpts;
      m.width, m.height, m.handle, m.handleSize, m.lockAspectRatio, m.axis, m.minConstraints, m.maxConstraints, m.onResize, m.onResizeStop, m.onResizeStart;
      var te = m.resizeHandles;
      m.transformScale;
      var le = j(m, b);
      return (0, l.cloneElement)(z, Y(Y({}, le), {}, {
        className: (I ? I + " " : "") + "react-resizable",
        children: [].concat(z.props.children, te.map(function(ie) {
          var re, me = (re = p.handleRefs[ie]) != null ? re : p.handleRefs[ie] = /* @__PURE__ */ a.createRef();
          return /* @__PURE__ */ a.createElement(c.DraggableCore, F({}, U, {
            nodeRef: me,
            key: "resizableHandle-" + ie,
            onStop: p.resizeHandler("onResizeStop", ie),
            onStart: p.resizeHandler("onResizeStart", ie),
            onDrag: p.resizeHandler("onResize", ie)
          }), p.renderResizeHandle(ie, me));
        }))
      }));
    }, u;
  }(a.Component);
  return ui.default = N, N.propTypes = f.resizableProps, N.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, ui;
}
var di = {}, Wc;
function bp() {
  if (Wc) return di;
  Wc = 1, di.__esModule = !0, di.default = void 0;
  var a = F(Rt()), c = R(/* @__PURE__ */ Pn()), l = R(ed()), f = Jc(), b = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function R(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function M(u) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (M = function(m) {
      return m ? d : h;
    })(u);
  }
  function F(u, h) {
    if (u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var d = M(h);
    if (d && d.has(u))
      return d.get(u);
    var p = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var z in u)
      if (z !== "default" && Object.prototype.hasOwnProperty.call(u, z)) {
        var I = m ? Object.getOwnPropertyDescriptor(u, z) : null;
        I && (I.get || I.set) ? Object.defineProperty(p, z, I) : p[z] = u[z];
      }
    return p.default = u, d && d.set(u, p), p;
  }
  function j() {
    return j = Object.assign ? Object.assign.bind() : function(u) {
      for (var h = 1; h < arguments.length; h++) {
        var d = arguments[h];
        for (var p in d)
          Object.prototype.hasOwnProperty.call(d, p) && (u[p] = d[p]);
      }
      return u;
    }, j.apply(this, arguments);
  }
  function A(u, h) {
    var d = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(u);
      h && (p = p.filter(function(m) {
        return Object.getOwnPropertyDescriptor(u, m).enumerable;
      })), d.push.apply(d, p);
    }
    return d;
  }
  function Y(u) {
    for (var h = 1; h < arguments.length; h++) {
      var d = arguments[h] != null ? arguments[h] : {};
      h % 2 ? A(Object(d), !0).forEach(function(p) {
        B(u, p, d[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d)) : A(Object(d)).forEach(function(p) {
        Object.defineProperty(u, p, Object.getOwnPropertyDescriptor(d, p));
      });
    }
    return u;
  }
  function B(u, h, d) {
    return h = V(h), h in u ? Object.defineProperty(u, h, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : u[h] = d, u;
  }
  function V(u) {
    var h = we(u, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function we(u, h) {
    if (typeof u != "object" || u === null) return u;
    var d = u[Symbol.toPrimitive];
    if (d !== void 0) {
      var p = d.call(u, h);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(u);
  }
  function xe(u, h) {
    if (u == null) return {};
    var d = {}, p = Object.keys(u), m, z;
    for (z = 0; z < p.length; z++)
      m = p[z], !(h.indexOf(m) >= 0) && (d[m] = u[m]);
    return d;
  }
  function Q(u, h) {
    u.prototype = Object.create(h.prototype), u.prototype.constructor = u, N(u, h);
  }
  function N(u, h) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, m) {
      return p.__proto__ = m, p;
    }, N(u, h);
  }
  var x = /* @__PURE__ */ function(u) {
    Q(h, u);
    function h() {
      for (var p, m = arguments.length, z = new Array(m), I = 0; I < m; I++)
        z[I] = arguments[I];
      return p = u.call.apply(u, [this].concat(z)) || this, p.state = {
        width: p.props.width,
        height: p.props.height,
        propsWidth: p.props.width,
        propsHeight: p.props.height
      }, p.onResize = function(U, te) {
        var le = te.size;
        p.props.onResize ? (U.persist == null || U.persist(), p.setState(le, function() {
          return p.props.onResize && p.props.onResize(U, te);
        })) : p.setState(le);
      }, p;
    }
    h.getDerivedStateFromProps = function(m, z) {
      return z.propsWidth !== m.width || z.propsHeight !== m.height ? {
        width: m.width,
        height: m.height,
        propsWidth: m.width,
        propsHeight: m.height
      } : null;
    };
    var d = h.prototype;
    return d.render = function() {
      var m = this.props, z = m.handle, I = m.handleSize;
      m.onResize;
      var U = m.onResizeStart, te = m.onResizeStop, le = m.draggableOpts, ie = m.minConstraints, re = m.maxConstraints, me = m.lockAspectRatio, Se = m.axis;
      m.width, m.height;
      var pe = m.resizeHandles, ue = m.style, G = m.transformScale, W = xe(m, b);
      return /* @__PURE__ */ a.createElement(l.default, {
        axis: Se,
        draggableOpts: le,
        handle: z,
        handleSize: I,
        height: this.state.height,
        lockAspectRatio: me,
        maxConstraints: re,
        minConstraints: ie,
        onResizeStart: U,
        onResize: this.onResize,
        onResizeStop: te,
        resizeHandles: pe,
        transformScale: G,
        width: this.state.width
      }, /* @__PURE__ */ a.createElement("div", j({}, W, {
        style: Y(Y({}, ue), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(a.Component);
  return di.default = x, x.propTypes = Y(Y({}, f.resizableProps), {}, {
    children: c.default.element
  }), di;
}
var Hc;
function kp() {
  return Hc || (Hc = 1, ai.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, ai.exports.Resizable = ed().default, ai.exports.ResizableBox = bp().default), ai.exports;
}
var un = {}, Fc;
function td() {
  if (Fc) return un;
  Fc = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var a = l(/* @__PURE__ */ Pn()), c = l(Rt());
  function l(R) {
    return R && R.__esModule ? R : { default: R };
  }
  const f = un.resizeHandleAxesType = a.default.arrayOf(a.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), b = un.resizeHandleType = a.default.oneOfType([a.default.node, a.default.func]);
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
    verticalCompact: function(R) {
      R.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: a.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(R) {
      var M = R.layout;
      M !== void 0 && xr().validateLayout(M, "layout");
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
    resizeHandles: f,
    resizeHandle: b,
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
    children: function(R, M) {
      const F = R[M], j = {};
      c.default.Children.forEach(F, function(A) {
        if (A?.key != null) {
          if (j[A.key])
            throw new Error('Duplicate child key "' + A.key + '" found! This will cause problems in ReactGridLayout.');
          j[A.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: a.default.any
  }, un;
}
var Bc;
function Ep() {
  if (Bc) return li;
  Bc = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var a = A(Rt()), c = mi(), l = A(/* @__PURE__ */ Pn()), f = Ms(), b = kp(), R = xr(), M = Ls(), F = td(), j = A(No());
  function A(N) {
    return N && N.__esModule ? N : { default: N };
  }
  function Y(N, x) {
    var u = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(N);
      x && (h = h.filter(function(d) {
        return Object.getOwnPropertyDescriptor(N, d).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function B(N) {
    for (var x = 1; x < arguments.length; x++) {
      var u = arguments[x] != null ? arguments[x] : {};
      x % 2 ? Y(Object(u), !0).forEach(function(h) {
        V(N, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(u)) : Y(Object(u)).forEach(function(h) {
        Object.defineProperty(N, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return N;
  }
  function V(N, x, u) {
    return (x = we(x)) in N ? Object.defineProperty(N, x, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : N[x] = u, N;
  }
  function we(N) {
    var x = xe(N, "string");
    return typeof x == "symbol" ? x : x + "";
  }
  function xe(N, x) {
    if (typeof N != "object" || !N) return N;
    var u = N[Symbol.toPrimitive];
    if (u !== void 0) {
      var h = u.call(N, x);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(N);
  }
  let Q = class extends a.default.Component {
    constructor() {
      super(...arguments), V(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), V(this, "elementRef", /* @__PURE__ */ a.default.createRef()), V(this, "onDragStart", (x, u) => {
        let {
          node: h
        } = u;
        const {
          onDragStart: d,
          transformScale: p
        } = this.props;
        if (!d) return;
        const m = {
          top: 0,
          left: 0
        }, {
          offsetParent: z
        } = h;
        if (!z) return;
        const I = z.getBoundingClientRect(), U = h.getBoundingClientRect(), te = U.left / p, le = I.left / p, ie = U.top / p, re = I.top / p;
        m.left = te - le + z.scrollLeft, m.top = ie - re + z.scrollTop, this.setState({
          dragging: m
        });
        const {
          x: me,
          y: Se
        } = (0, M.calcXY)(this.getPositionParams(), m.top, m.left, this.props.w, this.props.h);
        return d.call(this, this.props.i, me, Se, {
          e: x,
          node: h,
          newPosition: m
        });
      }), V(this, "onDrag", (x, u, h) => {
        let {
          node: d,
          deltaX: p,
          deltaY: m
        } = u;
        const {
          onDrag: z
        } = this.props;
        if (!z) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let I = this.state.dragging.top + m, U = this.state.dragging.left + p;
        const {
          isBounded: te,
          i: le,
          w: ie,
          h: re,
          containerWidth: me
        } = this.props, Se = this.getPositionParams();
        if (te) {
          const {
            offsetParent: W
          } = d;
          if (W) {
            const {
              margin: q,
              rowHeight: w
            } = this.props, T = W.clientHeight - (0, M.calcGridItemWHPx)(re, w, q[1]);
            I = (0, M.clamp)(I, 0, T);
            const ye = (0, M.calcGridColWidth)(Se), _e = me - (0, M.calcGridItemWHPx)(ie, ye, q[0]);
            U = (0, M.clamp)(U, 0, _e);
          }
        }
        const pe = {
          top: I,
          left: U
        };
        h ? this.setState({
          dragging: pe
        }) : (0, c.flushSync)(() => {
          this.setState({
            dragging: pe
          });
        });
        const {
          x: ue,
          y: G
        } = (0, M.calcXY)(Se, I, U, ie, re);
        return z.call(this, le, ue, G, {
          e: x,
          node: d,
          newPosition: pe
        });
      }), V(this, "onDragStop", (x, u) => {
        let {
          node: h
        } = u;
        const {
          onDragStop: d
        } = this.props;
        if (!d) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: p,
          h: m,
          i: z
        } = this.props, {
          left: I,
          top: U
        } = this.state.dragging, te = {
          top: U,
          left: I
        };
        this.setState({
          dragging: null
        });
        const {
          x: le,
          y: ie
        } = (0, M.calcXY)(this.getPositionParams(), U, I, p, m);
        return d.call(this, z, le, ie, {
          e: x,
          node: h,
          newPosition: te
        });
      }), V(this, "onResizeStop", (x, u, h) => this.onResizeHandler(x, u, h, "onResizeStop")), V(this, "onResizeStart", (x, u, h) => this.onResizeHandler(x, u, h, "onResizeStart")), V(this, "onResize", (x, u, h) => this.onResizeHandler(x, u, h, "onResize"));
    }
    shouldComponentUpdate(x, u) {
      if (this.props.children !== x.children || this.props.droppingPosition !== x.droppingPosition) return !0;
      const h = (0, M.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), d = (0, M.calcGridItemPosition)(this.getPositionParams(x), x.x, x.y, x.w, x.h, u);
      return !(0, R.fastPositionEqual)(h, d) || this.props.useCSSTransforms !== x.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(x) {
      this.moveDroppingItem(x);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(x) {
      const {
        droppingPosition: u
      } = this.props;
      if (!u) return;
      const h = this.elementRef.current;
      if (!h) return;
      const d = x.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: p
      } = this.state, m = p && u.left !== d.left || u.top !== d.top;
      if (!p)
        this.onDragStart(u.e, {
          node: h,
          deltaX: u.left,
          deltaY: u.top
        });
      else if (m) {
        const z = u.left - p.left, I = u.top - p.top;
        this.onDrag(
          u.e,
          {
            node: h,
            deltaX: z,
            deltaY: I
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: x.cols,
        containerPadding: x.containerPadding,
        containerWidth: x.containerWidth,
        margin: x.margin,
        maxRows: x.maxRows,
        rowHeight: x.rowHeight
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
    createStyle(x) {
      const {
        usePercentages: u,
        containerWidth: h,
        useCSSTransforms: d
      } = this.props;
      let p;
      return d ? p = (0, R.setTransform)(x) : (p = (0, R.setTopLeft)(x), u && (p.left = (0, R.perc)(x.left / h), p.width = (0, R.perc)(x.width / h))), p;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(x, u) {
      return /* @__PURE__ */ a.default.createElement(f.DraggableCore, {
        disabled: !u,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, x);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(x, u) {
      return (h, d) => (
        /*: Function*/
        u(h, d, x)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(x, u, h) {
      const {
        cols: d,
        minW: p,
        minH: m,
        maxW: z,
        maxH: I,
        transformScale: U,
        resizeHandles: te,
        resizeHandle: le
      } = this.props, ie = this.getPositionParams(), re = (0, M.calcGridItemPosition)(ie, 0, 0, d, 0).width, me = (0, M.calcGridItemPosition)(ie, 0, 0, p, m), Se = (0, M.calcGridItemPosition)(ie, 0, 0, z, I), pe = [me.width, me.height], ue = [Math.min(Se.width, re), Math.min(Se.height, 1 / 0)];
      return /* @__PURE__ */ a.default.createElement(
        b.Resizable,
        {
          draggableOpts: {
            disabled: !h
          },
          className: h ? void 0 : "react-resizable-hide",
          width: u.width,
          height: u.height,
          minConstraints: pe,
          maxConstraints: ue,
          onResizeStop: this.curryResizeHandler(u, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(u, this.onResizeStart),
          onResize: this.curryResizeHandler(u, this.onResize),
          transformScale: U,
          resizeHandles: te,
          handle: le
        },
        x
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(x, u, h, d) {
      let {
        node: p,
        size: m,
        handle: z
      } = u;
      const I = this.props[d];
      if (!I) return;
      const {
        x: U,
        y: te,
        i: le,
        maxH: ie,
        minH: re,
        containerWidth: me
      } = this.props, {
        minW: Se,
        maxW: pe
      } = this.props;
      let ue = m;
      p && (ue = (0, R.resizeItemInDirection)(z, h, m, me), (0, c.flushSync)(() => {
        this.setState({
          resizing: d === "onResizeStop" ? null : ue
        });
      }));
      let {
        w: G,
        h: W
      } = (0, M.calcWH)(this.getPositionParams(), ue.width, ue.height, U, te, z);
      G = (0, M.clamp)(G, Math.max(Se, 1), pe), W = (0, M.clamp)(W, re, ie), I.call(this, le, G, W, {
        e: x,
        node: p,
        size: ue,
        handle: z
      });
    }
    render() {
      const {
        x,
        y: u,
        w: h,
        h: d,
        isDraggable: p,
        isResizable: m,
        droppingPosition: z,
        useCSSTransforms: I
      } = this.props, U = (0, M.calcGridItemPosition)(this.getPositionParams(), x, u, h, d, this.state), te = a.default.Children.only(this.props.children);
      let le = /* @__PURE__ */ a.default.cloneElement(te, {
        ref: this.elementRef,
        className: (0, j.default)("react-grid-item", te.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": p,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!z,
          cssTransforms: I
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: B(B(B({}, this.props.style), te.props.style), this.createStyle(U))
      });
      return le = this.mixinResizable(le, U, m), le = this.mixinDraggable(le, p), le;
    }
  };
  return li.default = Q, V(Q, "propTypes", {
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
    minW: function(N, x) {
      const u = N[x];
      if (typeof u != "number") return new Error("minWidth not Number");
      if (u > N.w || u > N.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(N, x) {
      const u = N[x];
      if (typeof u != "number") return new Error("maxWidth not Number");
      if (u < N.w || u < N.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(N, x) {
      const u = N[x];
      if (typeof u != "number") return new Error("minHeight not Number");
      if (u > N.h || u > N.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(N, x) {
      const u = N[x];
      if (typeof u != "number") return new Error("maxHeight not Number");
      if (u < N.h || u < N.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: l.default.string.isRequired,
    // Resize handle options
    resizeHandles: F.resizeHandleAxesType,
    resizeHandle: F.resizeHandleType,
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
  }), V(Q, "defaultProps", {
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
var Uc;
function nd() {
  if (Uc) return oi;
  Uc = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var a = j(Rt()), c = /* @__PURE__ */ Ns(), l = F(No()), f = xr(), b = Ls(), R = F(Ep()), M = F(td());
  function F(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function j(x, u) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (j = function(p, m) {
      if (!m && p && p.__esModule) return p;
      var z, I, U = { __proto__: null, default: p };
      if (p === null || typeof p != "object" && typeof p != "function") return U;
      if (z = m ? d : h) {
        if (z.has(p)) return z.get(p);
        z.set(p, U);
      }
      for (const te in p) te !== "default" && {}.hasOwnProperty.call(p, te) && ((I = (z = Object.defineProperty) && Object.getOwnPropertyDescriptor(p, te)) && (I.get || I.set) ? z(U, te, I) : U[te] = p[te]);
      return U;
    })(x, u);
  }
  function A(x, u) {
    var h = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(x);
      u && (d = d.filter(function(p) {
        return Object.getOwnPropertyDescriptor(x, p).enumerable;
      })), h.push.apply(h, d);
    }
    return h;
  }
  function Y(x) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? A(Object(h), !0).forEach(function(d) {
        B(x, d, h[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(d) {
        Object.defineProperty(x, d, Object.getOwnPropertyDescriptor(h, d));
      });
    }
    return x;
  }
  function B(x, u, h) {
    return (u = V(u)) in x ? Object.defineProperty(x, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : x[u] = h, x;
  }
  function V(x) {
    var u = we(x, "string");
    return typeof u == "symbol" ? u : u + "";
  }
  function we(x, u) {
    if (typeof x != "object" || !x) return x;
    var h = x[Symbol.toPrimitive];
    if (h !== void 0) {
      var d = h.call(x, u);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(x);
  }
  const xe = "react-grid-layout";
  let Q = !1;
  try {
    Q = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let N = class extends a.Component {
    constructor() {
      super(...arguments), B(this, "state", {
        activeDrag: null,
        layout: (0, f.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, f.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), B(this, "dragEnterCounter", 0), B(this, "onDragStart", (u, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          layout: I
        } = this.state, U = (0, f.getLayoutItem)(I, u);
        if (!U) return;
        const te = {
          w: U.w,
          h: U.h,
          x: U.x,
          y: U.y,
          placeholder: !0,
          i: u
        };
        return this.setState({
          oldDragItem: (0, f.cloneLayoutItem)(U),
          oldLayout: I,
          activeDrag: te
        }), this.props.onDragStart(I, U, U, null, m, z);
      }), B(this, "onDrag", (u, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          oldDragItem: I
        } = this.state;
        let {
          layout: U
        } = this.state;
        const {
          cols: te,
          allowOverlap: le,
          preventCollision: ie
        } = this.props, re = (0, f.getLayoutItem)(U, u);
        if (!re) return;
        const me = {
          w: re.w,
          h: re.h,
          x: re.x,
          y: re.y,
          placeholder: !0,
          i: u
        };
        U = (0, f.moveElement)(U, re, h, d, !0, ie, (0, f.compactType)(this.props), te, le), this.props.onDrag(U, I, re, me, m, z), this.setState({
          layout: le ? U : (0, f.compact)(U, (0, f.compactType)(this.props), te),
          activeDrag: me
        });
      }), B(this, "onDragStop", (u, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: I
        } = this.state;
        let {
          layout: U
        } = this.state;
        const {
          cols: te,
          preventCollision: le,
          allowOverlap: ie
        } = this.props, re = (0, f.getLayoutItem)(U, u);
        if (!re) return;
        U = (0, f.moveElement)(U, re, h, d, !0, le, (0, f.compactType)(this.props), te, ie);
        const Se = ie ? U : (0, f.compact)(U, (0, f.compactType)(this.props), te);
        this.props.onDragStop(Se, I, re, null, m, z);
        const {
          oldLayout: pe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Se,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(Se, pe);
      }), B(this, "onResizeStart", (u, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          layout: I
        } = this.state, U = (0, f.getLayoutItem)(I, u);
        U && (this.setState({
          oldResizeItem: (0, f.cloneLayoutItem)(U),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(I, U, U, null, m, z));
      }), B(this, "onResize", (u, h, d, p) => {
        let {
          e: m,
          node: z,
          size: I,
          handle: U
        } = p;
        const {
          oldResizeItem: te
        } = this.state, {
          layout: le
        } = this.state, {
          cols: ie,
          preventCollision: re,
          allowOverlap: me
        } = this.props;
        let Se = !1, pe, ue, G;
        const [W, q] = (0, f.withLayoutItem)(le, u, (T) => {
          let ye;
          return ue = T.x, G = T.y, ["sw", "w", "nw", "n", "ne"].indexOf(U) !== -1 && (["sw", "nw", "w"].indexOf(U) !== -1 && (ue = T.x + (T.w - h), h = T.x !== ue && ue < 0 ? T.w : h, ue = ue < 0 ? 0 : ue), ["ne", "n", "nw"].indexOf(U) !== -1 && (G = T.y + (T.h - d), d = T.y !== G && G < 0 ? T.h : d, G = G < 0 ? 0 : G), Se = !0), re && !me && (ye = (0, f.getAllCollisions)(le, Y(Y({}, T), {}, {
            w: h,
            h: d,
            x: ue,
            y: G
          })).filter((Ce) => Ce.i !== T.i).length > 0, ye && (G = T.y, d = T.h, ue = T.x, h = T.w, Se = !1)), T.w = h, T.h = d, T;
        });
        if (!q) return;
        pe = W, Se && (pe = (0, f.moveElement)(W, q, ue, G, !0, this.props.preventCollision, (0, f.compactType)(this.props), ie, me));
        const w = {
          w: q.w,
          h: q.h,
          x: q.x,
          y: q.y,
          static: !0,
          i: u
        };
        this.props.onResize(pe, te, q, w, m, z), this.setState({
          layout: me ? pe : (0, f.compact)(pe, (0, f.compactType)(this.props), ie),
          activeDrag: w
        });
      }), B(this, "onResizeStop", (u, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          layout: I,
          oldResizeItem: U
        } = this.state, {
          cols: te,
          allowOverlap: le
        } = this.props, ie = (0, f.getLayoutItem)(I, u), re = le ? I : (0, f.compact)(I, (0, f.compactType)(this.props), te);
        this.props.onResizeStop(re, U, ie, null, m, z);
        const {
          oldLayout: me
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: re,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(re, me);
      }), B(this, "onDragOver", (u) => {
        var h;
        if (u.preventDefault(), u.stopPropagation(), Q && // $FlowIgnore can't figure this out
        !((h = u.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(xe)))
          return !1;
        const {
          droppingItem: d,
          onDropDragOver: p,
          margin: m,
          cols: z,
          rowHeight: I,
          maxRows: U,
          width: te,
          containerPadding: le,
          transformScale: ie
        } = this.props, re = p?.(u);
        if (re === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const me = Y(Y({}, d), re), {
          layout: Se
        } = this.state, pe = u.currentTarget.getBoundingClientRect(), ue = u.clientX - pe.left, G = u.clientY - pe.top, W = {
          left: ue / ie,
          top: G / ie,
          e: u
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: q,
              top: w
            } = this.state.droppingPosition;
            (q != ue || w != G) && this.setState({
              droppingPosition: W
            });
          }
        } else {
          const q = {
            cols: z,
            margin: m,
            maxRows: U,
            rowHeight: I,
            containerWidth: te,
            containerPadding: le || m
          }, w = (0, b.calcXY)(q, G, ue, me.w, me.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ a.createElement("div", {
              key: me.i
            }),
            droppingPosition: W,
            layout: [...Se, Y(Y({}, me), {}, {
              x: w.x,
              y: w.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), B(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: u,
          cols: h
        } = this.props, {
          layout: d
        } = this.state, p = (0, f.compact)(d.filter((m) => m.i !== u.i), (0, f.compactType)(this.props), h, this.props.allowOverlap);
        this.setState({
          layout: p,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), B(this, "onDragLeave", (u) => {
        u.preventDefault(), u.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), B(this, "onDragEnter", (u) => {
        u.preventDefault(), u.stopPropagation(), this.dragEnterCounter++;
      }), B(this, "onDrop", (u) => {
        u.preventDefault(), u.stopPropagation();
        const {
          droppingItem: h
        } = this.props, {
          layout: d
        } = this.state, p = d.find((m) => m.i === h.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(d, p, u);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(u, h) {
      let d;
      return h.activeDrag ? null : (!(0, c.deepEqual)(u.layout, h.propsLayout) || u.compactType !== h.compactType ? d = u.layout : (0, f.childrenEqual)(u.children, h.children) || (d = h.layout), d ? {
        layout: (0, f.synchronizeLayoutWithChildren)(d, u.children, u.cols, (0, f.compactType)(u), u.allowOverlap),
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
        this.props.children !== u.children || !(0, f.fastRGLPropsEqual)(this.props, u, c.deepEqual) || this.state.activeDrag !== h.activeDrag || this.state.mounted !== h.mounted || this.state.droppingPosition !== h.droppingPosition
      );
    }
    componentDidUpdate(u, h) {
      if (!this.state.activeDrag) {
        const d = this.state.layout, p = h.layout;
        this.onLayoutMaybeChanged(d, p);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const u = (0, f.bottom)(this.state.layout), h = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
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
        cols: d,
        margin: p,
        containerPadding: m,
        rowHeight: z,
        maxRows: I,
        useCSSTransforms: U,
        transformScale: te
      } = this.props;
      return /* @__PURE__ */ a.createElement(R.default, {
        w: u.w,
        h: u.h,
        x: u.x,
        y: u.y,
        i: u.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: h,
        cols: d,
        margin: p,
        containerPadding: m || p,
        maxRows: I,
        rowHeight: z,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: U,
        transformScale: te
      }, /* @__PURE__ */ a.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(u, h) {
      if (!u || !u.key) return;
      const d = (0, f.getLayoutItem)(this.state.layout, String(u.key));
      if (!d) return null;
      const {
        width: p,
        cols: m,
        margin: z,
        containerPadding: I,
        rowHeight: U,
        maxRows: te,
        isDraggable: le,
        isResizable: ie,
        isBounded: re,
        useCSSTransforms: me,
        transformScale: Se,
        draggableCancel: pe,
        draggableHandle: ue,
        resizeHandles: G,
        resizeHandle: W
      } = this.props, {
        mounted: q,
        droppingPosition: w
      } = this.state, T = typeof d.isDraggable == "boolean" ? d.isDraggable : !d.static && le, ye = typeof d.isResizable == "boolean" ? d.isResizable : !d.static && ie, _e = d.resizeHandles || G, Ce = T && re && d.isBounded !== !1;
      return /* @__PURE__ */ a.createElement(R.default, {
        containerWidth: p,
        cols: m,
        margin: z,
        containerPadding: I || z,
        maxRows: te,
        rowHeight: U,
        cancel: pe,
        handle: ue,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: T,
        isResizable: ye,
        isBounded: Ce,
        useCSSTransforms: me && q,
        usePercentages: !q,
        transformScale: Se,
        w: d.w,
        h: d.h,
        x: d.x,
        y: d.y,
        i: d.i,
        minH: d.minH,
        minW: d.minW,
        maxH: d.maxH,
        maxW: d.maxW,
        static: d.static,
        droppingPosition: h ? w : void 0,
        resizeHandles: _e,
        resizeHandle: W
      }, u);
    }
    render() {
      const {
        className: u,
        style: h,
        isDroppable: d,
        innerRef: p
      } = this.props, m = (0, l.default)(xe, u), z = Y({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ a.createElement("div", {
        ref: p,
        className: m,
        style: z,
        onDrop: d ? this.onDrop : f.noop,
        onDragLeave: d ? this.onDragLeave : f.noop,
        onDragEnter: d ? this.onDragEnter : f.noop,
        onDragOver: d ? this.onDragOver : f.noop
      }, a.Children.map(this.props.children, (I) => this.processGridItem(I)), d && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return oi.default = N, B(N, "displayName", "ReactGridLayout"), B(N, "propTypes", M.default), B(N, "defaultProps", {
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
    onLayoutChange: f.noop,
    onDragStart: f.noop,
    onDrag: f.noop,
    onDragStop: f.noop,
    onResizeStart: f.noop,
    onResize: f.noop,
    onResizeStop: f.noop,
    onDrop: f.noop,
    onDropDragOver: f.noop
  }), oi;
}
var fi = {}, Vn = {}, qc;
function rd() {
  if (qc) return Vn;
  qc = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.findOrGenerateResponsiveLayout = f, Vn.getBreakpointFromWidth = c, Vn.getColsFromBreakpoint = l, Vn.sortBreakpoints = b;
  var a = xr();
  function c(R, M) {
    const F = b(R);
    let j = F[0];
    for (let A = 1, Y = F.length; A < Y; A++) {
      const B = F[A];
      M > R[B] && (j = B);
    }
    return j;
  }
  function l(R, M) {
    if (!M[R])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + R + " is missing!");
    return M[R];
  }
  function f(R, M, F, j, A, Y) {
    if (R[F]) return (0, a.cloneLayout)(R[F]);
    let B = R[j];
    const V = b(M), we = V.slice(V.indexOf(F));
    for (let xe = 0, Q = we.length; xe < Q; xe++) {
      const N = we[xe];
      if (R[N]) {
        B = R[N];
        break;
      }
    }
    return B = (0, a.cloneLayout)(B || []), (0, a.compact)((0, a.correctBounds)(B, {
      cols: A
    }), Y, A);
  }
  function b(R) {
    return Object.keys(R).sort(function(F, j) {
      return R[F] - R[j];
    });
  }
  return Vn;
}
var $c;
function zp() {
  if ($c) return fi;
  $c = 1, Object.defineProperty(fi, "__esModule", {
    value: !0
  }), fi.default = void 0;
  var a = j(Rt()), c = F(/* @__PURE__ */ Pn()), l = /* @__PURE__ */ Ns(), f = xr(), b = rd(), R = F(nd());
  const M = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function F(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function j(d, p) {
    if (typeof WeakMap == "function") var m = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap();
    return (j = function(I, U) {
      if (!U && I && I.__esModule) return I;
      var te, le, ie = { __proto__: null, default: I };
      if (I === null || typeof I != "object" && typeof I != "function") return ie;
      if (te = U ? z : m) {
        if (te.has(I)) return te.get(I);
        te.set(I, ie);
      }
      for (const re in I) re !== "default" && {}.hasOwnProperty.call(I, re) && ((le = (te = Object.defineProperty) && Object.getOwnPropertyDescriptor(I, re)) && (le.get || le.set) ? te(ie, re, le) : ie[re] = I[re]);
      return ie;
    })(d, p);
  }
  function A() {
    return A = Object.assign ? Object.assign.bind() : function(d) {
      for (var p = 1; p < arguments.length; p++) {
        var m = arguments[p];
        for (var z in m) ({}).hasOwnProperty.call(m, z) && (d[z] = m[z]);
      }
      return d;
    }, A.apply(null, arguments);
  }
  function Y(d, p) {
    if (d == null) return {};
    var m, z, I = B(d, p);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(d);
      for (z = 0; z < U.length; z++) m = U[z], p.indexOf(m) === -1 && {}.propertyIsEnumerable.call(d, m) && (I[m] = d[m]);
    }
    return I;
  }
  function B(d, p) {
    if (d == null) return {};
    var m = {};
    for (var z in d) if ({}.hasOwnProperty.call(d, z)) {
      if (p.indexOf(z) !== -1) continue;
      m[z] = d[z];
    }
    return m;
  }
  function V(d, p) {
    var m = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(d);
      p && (z = z.filter(function(I) {
        return Object.getOwnPropertyDescriptor(d, I).enumerable;
      })), m.push.apply(m, z);
    }
    return m;
  }
  function we(d) {
    for (var p = 1; p < arguments.length; p++) {
      var m = arguments[p] != null ? arguments[p] : {};
      p % 2 ? V(Object(m), !0).forEach(function(z) {
        xe(d, z, m[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(m)) : V(Object(m)).forEach(function(z) {
        Object.defineProperty(d, z, Object.getOwnPropertyDescriptor(m, z));
      });
    }
    return d;
  }
  function xe(d, p, m) {
    return (p = Q(p)) in d ? Object.defineProperty(d, p, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : d[p] = m, d;
  }
  function Q(d) {
    var p = N(d, "string");
    return typeof p == "symbol" ? p : p + "";
  }
  function N(d, p) {
    if (typeof d != "object" || !d) return d;
    var m = d[Symbol.toPrimitive];
    if (m !== void 0) {
      var z = m.call(d, p);
      if (typeof z != "object") return z;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(d);
  }
  const x = (d) => Object.prototype.toString.call(d);
  function u(d, p) {
    return d == null ? null : Array.isArray(d) ? d : d[p];
  }
  let h = class extends a.Component {
    constructor() {
      super(...arguments), xe(this, "state", this.generateInitialState()), xe(this, "onLayoutChange", (p) => {
        this.props.onLayoutChange(p, we(we({}, this.props.layouts), {}, {
          [this.state.breakpoint]: p
        }));
      });
    }
    generateInitialState() {
      const {
        width: p,
        breakpoints: m,
        layouts: z,
        cols: I
      } = this.props, U = (0, b.getBreakpointFromWidth)(m, p), te = (0, b.getColsFromBreakpoint)(U, I), le = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, b.findOrGenerateResponsiveLayout)(z, m, U, U, te, le),
        breakpoint: U,
        cols: te
      };
    }
    static getDerivedStateFromProps(p, m) {
      if (!(0, l.deepEqual)(p.layouts, m.layouts)) {
        const {
          breakpoint: z,
          cols: I
        } = m;
        return {
          layout: (0, b.findOrGenerateResponsiveLayout)(p.layouts, p.breakpoints, z, z, I, p.compactType),
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
        breakpoints: m,
        cols: z,
        layouts: I,
        compactType: U
      } = this.props, te = this.props.breakpoint || (0, b.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), le = this.state.breakpoint, ie = (0, b.getColsFromBreakpoint)(te, z), re = we({}, I);
      if (le !== te || p.breakpoints !== m || p.cols !== z) {
        le in re || (re[le] = (0, f.cloneLayout)(this.state.layout));
        let pe = (0, b.findOrGenerateResponsiveLayout)(re, m, te, le, ie, U);
        pe = (0, f.synchronizeLayoutWithChildren)(pe, this.props.children, ie, U, this.props.allowOverlap), re[te] = pe, this.props.onBreakpointChange(te, ie), this.props.onLayoutChange(pe, re), this.setState({
          breakpoint: te,
          layout: pe,
          cols: ie
        });
      }
      const me = u(this.props.margin, te), Se = u(this.props.containerPadding, te);
      this.props.onWidthChange(this.props.width, me, ie, Se);
    }
    render() {
      const p = this.props, {
        breakpoint: m,
        breakpoints: z,
        cols: I,
        layouts: U,
        margin: te,
        containerPadding: le,
        onBreakpointChange: ie,
        onLayoutChange: re,
        onWidthChange: me
      } = p, Se = Y(p, M);
      return /* @__PURE__ */ a.createElement(R.default, A({}, Se, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: u(te, this.state.breakpoint),
        containerPadding: u(le, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return fi.default = h, xe(h, "propTypes", {
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
    layouts(d, p) {
      if (x(d[p]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + x(d[p]));
      Object.keys(d[p]).forEach((m) => {
        if (!(m in d.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, f.validateLayout)(d.layouts[m], "layouts." + m);
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
  }), xe(h, "defaultProps", {
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
    onBreakpointChange: f.noop,
    onLayoutChange: f.noop,
    onWidthChange: f.noop
  }), fi;
}
var Oo = {}, id = function() {
  if (typeof Map < "u")
    return Map;
  function a(c, l) {
    var f = -1;
    return c.some(function(b, R) {
      return b[0] === l ? (f = R, !0) : !1;
    }), f;
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
        var f = a(this.__entries__, l), b = this.__entries__[f];
        return b && b[1];
      }, c.prototype.set = function(l, f) {
        var b = a(this.__entries__, l);
        ~b ? this.__entries__[b][1] = f : this.__entries__.push([l, f]);
      }, c.prototype.delete = function(l) {
        var f = this.__entries__, b = a(f, l);
        ~b && f.splice(b, 1);
      }, c.prototype.has = function(l) {
        return !!~a(this.__entries__, l);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(l, f) {
        f === void 0 && (f = null);
        for (var b = 0, R = this.__entries__; b < R.length; b++) {
          var M = R[b];
          l.call(f, M[1], M[0]);
        }
      }, c;
    }()
  );
}(), js = typeof window < "u" && typeof document < "u" && window.document === document, Do = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Rp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Do) : function(a) {
    return setTimeout(function() {
      return a(Date.now());
    }, 1e3 / 60);
  };
}(), Cp = 2;
function Op(a, c) {
  var l = !1, f = !1, b = 0;
  function R() {
    l && (l = !1, a()), f && F();
  }
  function M() {
    Rp(R);
  }
  function F() {
    var j = Date.now();
    if (l) {
      if (j - b < Cp)
        return;
      f = !0;
    } else
      l = !0, f = !1, setTimeout(M, c);
    b = j;
  }
  return F;
}
var Pp = 20, jp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Dp = typeof MutationObserver < "u", Tp = (
  /** @class */
  function() {
    function a() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Op(this.refresh.bind(this), Pp);
    }
    return a.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, a.prototype.removeObserver = function(c) {
      var l = this.observers_, f = l.indexOf(c);
      ~f && l.splice(f, 1), !l.length && this.connected_ && this.disconnect_();
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
      !js || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Dp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, a.prototype.disconnect_ = function() {
      !js || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, a.prototype.onTransitionEnd_ = function(c) {
      var l = c.propertyName, f = l === void 0 ? "" : l, b = jp.some(function(R) {
        return !!~f.indexOf(R);
      });
      b && this.refresh();
    }, a.getInstance = function() {
      return this.instance_ || (this.instance_ = new a()), this.instance_;
    }, a.instance_ = null, a;
  }()
), od = function(a, c) {
  for (var l = 0, f = Object.keys(c); l < f.length; l++) {
    var b = f[l];
    Object.defineProperty(a, b, {
      value: c[b],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return a;
}, vr = function(a) {
  var c = a && a.ownerDocument && a.ownerDocument.defaultView;
  return c || Do;
}, ld = Lo(0, 0, 0, 0);
function To(a) {
  return parseFloat(a) || 0;
}
function Vc(a) {
  for (var c = [], l = 1; l < arguments.length; l++)
    c[l - 1] = arguments[l];
  return c.reduce(function(f, b) {
    var R = a["border-" + b + "-width"];
    return f + To(R);
  }, 0);
}
function Np(a) {
  for (var c = ["top", "right", "bottom", "left"], l = {}, f = 0, b = c; f < b.length; f++) {
    var R = b[f], M = a["padding-" + R];
    l[R] = To(M);
  }
  return l;
}
function Lp(a) {
  var c = a.getBBox();
  return Lo(0, 0, c.width, c.height);
}
function Mp(a) {
  var c = a.clientWidth, l = a.clientHeight;
  if (!c && !l)
    return ld;
  var f = vr(a).getComputedStyle(a), b = Np(f), R = b.left + b.right, M = b.top + b.bottom, F = To(f.width), j = To(f.height);
  if (f.boxSizing === "border-box" && (Math.round(F + R) !== c && (F -= Vc(f, "left", "right") + R), Math.round(j + M) !== l && (j -= Vc(f, "top", "bottom") + M)), !Ap(a)) {
    var A = Math.round(F + R) - c, Y = Math.round(j + M) - l;
    Math.abs(A) !== 1 && (F -= A), Math.abs(Y) !== 1 && (j -= Y);
  }
  return Lo(b.left, b.top, F, j);
}
var Ip = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(a) {
    return a instanceof vr(a).SVGGraphicsElement;
  } : function(a) {
    return a instanceof vr(a).SVGElement && typeof a.getBBox == "function";
  };
}();
function Ap(a) {
  return a === vr(a).document.documentElement;
}
function Wp(a) {
  return js ? Ip(a) ? Lp(a) : Mp(a) : ld;
}
function Hp(a) {
  var c = a.x, l = a.y, f = a.width, b = a.height, R = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, M = Object.create(R.prototype);
  return od(M, {
    x: c,
    y: l,
    width: f,
    height: b,
    top: l,
    right: c + f,
    bottom: b + l,
    left: c
  }), M;
}
function Lo(a, c, l, f) {
  return { x: a, y: c, width: l, height: f };
}
var Fp = (
  /** @class */
  function() {
    function a(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Lo(0, 0, 0, 0), this.target = c;
    }
    return a.prototype.isActive = function() {
      var c = Wp(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, a.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, a;
  }()
), Bp = (
  /** @class */
  /* @__PURE__ */ function() {
    function a(c, l) {
      var f = Hp(l);
      od(this, { target: c, contentRect: f });
    }
    return a;
  }()
), Up = (
  /** @class */
  function() {
    function a(c, l, f) {
      if (this.activeObservations_ = [], this.observations_ = new id(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = l, this.callbackCtx_ = f;
    }
    return a.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof vr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) || (l.set(c, new Fp(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, a.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof vr(c).Element))
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
        var c = this.callbackCtx_, l = this.activeObservations_.map(function(f) {
          return new Bp(f.target, f.broadcastRect());
        });
        this.callback_.call(c, l, c), this.clearActive();
      }
    }, a.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, a.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, a;
  }()
), sd = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new id(), ad = (
  /** @class */
  /* @__PURE__ */ function() {
    function a(c) {
      if (!(this instanceof a))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var l = Tp.getInstance(), f = new Up(c, l, this);
      sd.set(this, f);
    }
    return a;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(a) {
  ad.prototype[a] = function() {
    var c;
    return (c = sd.get(this))[a].apply(c, arguments);
  };
});
var qp = function() {
  return typeof Do.ResizeObserver < "u" ? Do.ResizeObserver : ad;
}();
const $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qp
}, Symbol.toStringTag, { value: "Module" })), Vp = /* @__PURE__ */ sp($p);
var Gc;
function Gp() {
  if (Gc) return Oo;
  Gc = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = xe;
  var a = M(Rt()), c = R(/* @__PURE__ */ Pn()), l = R(Vp), f = R(No());
  const b = ["measureBeforeMount"];
  function R(Q) {
    return Q && Q.__esModule ? Q : { default: Q };
  }
  function M(Q, N) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (M = function(h, d) {
      if (!d && h && h.__esModule) return h;
      var p, m, z = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return z;
      if (p = d ? u : x) {
        if (p.has(h)) return p.get(h);
        p.set(h, z);
      }
      for (const I in h) I !== "default" && {}.hasOwnProperty.call(h, I) && ((m = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, I)) && (m.get || m.set) ? p(z, I, m) : z[I] = h[I]);
      return z;
    })(Q, N);
  }
  function F() {
    return F = Object.assign ? Object.assign.bind() : function(Q) {
      for (var N = 1; N < arguments.length; N++) {
        var x = arguments[N];
        for (var u in x) ({}).hasOwnProperty.call(x, u) && (Q[u] = x[u]);
      }
      return Q;
    }, F.apply(null, arguments);
  }
  function j(Q, N) {
    if (Q == null) return {};
    var x, u, h = A(Q, N);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(Q);
      for (u = 0; u < d.length; u++) x = d[u], N.indexOf(x) === -1 && {}.propertyIsEnumerable.call(Q, x) && (h[x] = Q[x]);
    }
    return h;
  }
  function A(Q, N) {
    if (Q == null) return {};
    var x = {};
    for (var u in Q) if ({}.hasOwnProperty.call(Q, u)) {
      if (N.indexOf(u) !== -1) continue;
      x[u] = Q[u];
    }
    return x;
  }
  function Y(Q, N, x) {
    return (N = B(N)) in Q ? Object.defineProperty(Q, N, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : Q[N] = x, Q;
  }
  function B(Q) {
    var N = V(Q, "string");
    return typeof N == "symbol" ? N : N + "";
  }
  function V(Q, N) {
    if (typeof Q != "object" || !Q) return Q;
    var x = Q[Symbol.toPrimitive];
    if (x !== void 0) {
      var u = x.call(Q, N);
      if (typeof u != "object") return u;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (N === "string" ? String : Number)(Q);
  }
  const we = "react-grid-layout";
  function xe(Q) {
    var N;
    return N = class extends a.Component {
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
        } = u, d = j(u, b);
        return h && !this.mounted ? /* @__PURE__ */ a.createElement("div", {
          className: (0, f.default)(this.props.className, we),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ a.createElement(Q, F({
          innerRef: this.elementRef
        }, d, this.state));
      }
    }, Y(N, "defaultProps", {
      measureBeforeMount: !1
    }), Y(N, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), N;
  }
  return Oo;
}
var Yc;
function Yp() {
  return Yc || (Yc = 1, function(a) {
    a.exports = nd().default, a.exports.utils = xr(), a.exports.calculateUtils = Ls(), a.exports.Responsive = zp().default, a.exports.Responsive.utils = rd(), a.exports.WidthProvider = Gp().default;
  }(ks)), ks.exports;
}
var Xc = Yp();
const Xp = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, ud = {
  XS: { w: 2, h: 2 },
  S: { w: 3, h: 3 },
  M: { w: 3, h: 4 },
  L: { w: 6, h: 4 },
  XL: { w: 6, h: 8 }
}, Ue = (a, c, l, f, b) => ({
  i: a,
  x: c,
  y: l,
  w: f,
  h: b,
  minW: 2,
  minH: 2,
  maxW: 12,
  maxH: 16
}), jo = {
  lg: [
    Ue("active-instances", 0, 0, 12, 7),
    // hero — full width
    Ue("history", 0, 7, 6, 6),
    // bottom-left
    Ue("modes", 6, 7, 6, 6),
    // bottom-right
    Ue("automations", 0, 13, 4, 5),
    Ue("access", 4, 13, 8, 5),
    Ue("sos", 0, 18, 12, 3)
  ],
  md: [
    Ue("active-instances", 0, 0, 8, 7),
    Ue("history", 0, 7, 4, 6),
    Ue("modes", 4, 7, 4, 6),
    Ue("automations", 0, 13, 4, 5),
    Ue("access", 4, 13, 4, 5),
    Ue("sos", 0, 18, 8, 3)
  ],
  sm: [
    Ue("active-instances", 0, 0, 4, 9),
    Ue("history", 0, 9, 4, 6),
    Ue("modes", 0, 15, 4, 7),
    Ue("automations", 0, 22, 4, 5),
    Ue("access", 0, 27, 4, 5),
    Ue("sos", 0, 32, 4, 3)
  ],
  xs: [
    Ue("active-instances", 0, 0, 2, 12),
    Ue("history", 0, 12, 2, 6),
    Ue("modes", 0, 18, 2, 8),
    Ue("automations", 0, 26, 2, 5),
    Ue("access", 0, 31, 2, 5),
    Ue("sos", 0, 36, 2, 3)
  ],
  xxs: [
    Ue("active-instances", 0, 0, 2, 12),
    Ue("history", 0, 12, 2, 6),
    Ue("modes", 0, 18, 2, 8),
    Ue("automations", 0, 26, 2, 5),
    Ue("access", 0, 31, 2, 5),
    Ue("sos", 0, 36, 2, 3)
  ]
};
function Ds(a, c, l) {
  return Object.entries(ud).map(([f, b]) => ({
    size: f,
    distance: Math.abs(Math.min(b.w, l) - a) + Math.abs(b.h - c)
  })).sort((f, b) => f.distance - b.distance)[0]?.size ?? "S";
}
function cd(a, c) {
  const l = ud[a];
  return { w: Math.min(l.w, c), h: l.h };
}
function Qp(a, c) {
  const l = Ds(a.w, a.h, c), f = cd(l, c);
  return {
    ...a,
    w: f.w,
    h: f.h,
    x: Math.max(0, Math.min(a.x, c - f.w)),
    size: l
  };
}
function Ts(a, c) {
  return a.some(
    (l) => l.i !== c.i && c.x < l.x + l.w && c.x + c.w > l.x && c.y < l.y + l.h && c.y + c.h > l.y
  );
}
function Kp(a, c, l) {
  for (let f = 0; f < 240; f++)
    for (let b = 0; b <= l - c.w; b++) {
      const R = { ...c, x: b, y: f };
      if (!Ts(a, R)) return R;
    }
  return { ...c, x: 0, y: Math.max(0, ...a.map((f) => f.y + f.h)) };
}
function gi(a) {
  const c = {};
  return Object.keys(cn).forEach((l) => {
    const f = cn[l], b = Array.isArray(a?.[l]) ? a[l] : [], R = new Map(b.map((A) => [A.i, A])), M = (jo[l] || []).map((A) => {
      const Y = R.get(A.i);
      if (!Y) return { ...A };
      const B = Math.min(Math.max(1, Y.w), f);
      return {
        ...A,
        ...Y,
        w: B,
        x: Math.max(0, Math.min(Y.x, f - B)),
        y: Math.max(0, Y.y),
        minW: 2,
        minH: 2
      };
    }), F = new Set(M.map((A) => A.i)), j = b.filter((A) => !F.has(A.i)).map((A) => ({
      ...A,
      w: Math.min(Math.max(1, A.w), f),
      x: Math.max(0, Math.min(A.x, f - Math.min(A.w, f))),
      y: Math.max(0, A.y),
      minW: 2,
      minH: 2
    }));
    c[l] = [...M, ...j];
  }), c;
}
class Zp {
  key(c, l) {
    return `argus:dashboard-layout-v3:${c}:${l}`;
  }
  read(c, l) {
    try {
      const f = localStorage.getItem(this.key(c, l));
      if (!f) return null;
      const b = JSON.parse(f);
      return b?.layoutVersion != null && b.layoutVersion >= 1 ? b : null;
    } catch {
      return null;
    }
  }
  write(c, l, f) {
    localStorage.setItem(this.key(c, l), JSON.stringify(f));
  }
  async load(c, l) {
    const f = this.read(c, l);
    return gi(f ? f.layouts : null);
  }
  async save(c, l, f) {
    const b = this.read(c, l);
    this.write(c, l, {
      layoutVersion: 1,
      layouts: f,
      visibility: b?.visibility,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async loadVisibility(c, l) {
    return this.read(c, l)?.visibility ?? null;
  }
  async saveVisibility(c, l, f) {
    const b = this.read(c, l);
    this.write(c, l, {
      layoutVersion: 1,
      layouts: b?.layouts ?? gi(null),
      visibility: f,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async reset(c, l) {
    localStorage.removeItem(this.key(c, l)), localStorage.removeItem(`argus:dashboard-layout-v2:${c}:${l}`), localStorage.removeItem(`argus:dashboard-layout:${c}:${l}`);
  }
}
const Jp = Xc.WidthProvider(Xc.Responsive);
function eh({ widget: a, editing: c, size: l, onSize: f, onHide: b, onReset: R, children: M }) {
  return /* @__PURE__ */ v.jsxs(
    "article",
    {
      className: "argus-widget",
      "data-size": l,
      "data-widget-id": a.id,
      style: {
        height: "100%",
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
      },
      children: [
        c && /* @__PURE__ */ v.jsxs("header", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }, children: [
          /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              className: "argus-widget__drag-handle",
              "aria-label": `Mover ${a.title}`,
              title: "Arrastrar para mover",
              style: {
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "grab",
                fontSize: "16px"
              },
              children: "⋮⋮"
            }
          ),
          /* @__PURE__ */ v.jsx("strong", { style: { fontSize: "12px", opacity: 0.8 }, children: a.title }),
          /* @__PURE__ */ v.jsxs("details", { className: "argus-widget__options", style: { position: "relative" }, children: [
            /* @__PURE__ */ v.jsx("summary", { "aria-label": `Opciones de ${a.title}`, style: { cursor: "pointer", listStyle: "none", fontSize: "14px" }, children: "•••" }),
            /* @__PURE__ */ v.jsxs("div", { style: {
              position: "absolute",
              right: 0,
              top: "24px",
              background: "#151d2c",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
              padding: "8px",
              zIndex: 1e3,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              minWidth: "140px"
            }, children: [
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", opacity: 0.6 }, children: "Tamaño" }),
              /* @__PURE__ */ v.jsx("div", { style: { display: "flex", gap: "2px" }, children: ["XS", "S", "M", "L", "XL"].map((F) => /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  style: {
                    background: F === l ? "#1E88E5" : "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "10px",
                    padding: "4px",
                    flex: 1,
                    cursor: "pointer"
                  },
                  onClick: () => f(F),
                  children: F
                },
                F
              )) }),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  onClick: R,
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "11px",
                    textAlign: "left",
                    padding: "4px",
                    cursor: "pointer"
                  },
                  children: "Restablecer widget"
                }
              ),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  onClick: b,
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "#FF3B30",
                    fontSize: "11px",
                    textAlign: "left",
                    padding: "4px",
                    cursor: "pointer"
                  },
                  children: "Ocultar widget"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsx("div", { style: { flex: 1, height: "100%", overflow: "hidden", pointerEvents: c ? "none" : "auto" }, children: M })
      ]
    }
  );
}
function th({
  widgets: a,
  widgetComponents: c,
  storage: l,
  userId: f,
  dashboardId: b,
  onEditing: R,
  registerEditor: M,
  isEditing: F,
  onToggleEditing: j
}) {
  const A = Fe.useMemo(() => Object.fromEntries(a.map((W) => [W.id, W.visible])), [a]), [Y, B] = Fe.useState(jo), [V, we] = Fe.useState(A), [xe, Q] = Fe.useState(!1), [N, x] = Fe.useState(!1), [u, h] = Fe.useState("lg"), [d, p] = Fe.useState(""), m = F !== void 0 ? F : xe, z = (W) => {
    Q(W), R(W), j && W !== F && j();
  }, I = Fe.useRef(jo), U = Fe.useRef(), te = Fe.useRef(!1);
  Fe.useEffect(() => {
    M(Q);
  }, [M]), Fe.useEffect(() => {
    let W = !0;
    return x(!1), Promise.all([
      l.load(f, b),
      l.loadVisibility?.(f, b)
    ]).then(([q, w]) => {
      if (!W) return;
      const T = gi(q);
      B(T), I.current = T, w && we({ ...A, ...w }), x(!0);
    }), () => {
      W = !1;
    };
  }, [l, f, b, A]), Fe.useEffect(() => {
    R(m), N && te.current && !m && l.save(f, b, I.current), te.current = m;
  }, [m, N, R, l, f, b]), Fe.useEffect(() => {
    const W = (q) => {
      m && q.key === "Escape" && (z(!1), p("Edición finalizada"));
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [m]), Fe.useEffect(() => () => clearTimeout(U.current), []);
  const le = (W, q = !1) => {
    B(W), I.current = W, clearTimeout(U.current), U.current = window.setTimeout(() => l.save(f, b, W), q ? 0 : 550);
  }, ie = (W, q) => {
    const w = { ...V, [W]: q };
    we(w), l.saveVisibility?.(f, b, w), p(q ? "Widget visible" : "Widget oculto");
  }, re = (W, q, w) => {
    const T = I.current, ye = T[u] || [], _e = ye.filter((De) => De.i !== W), Ce = Ts(_e, q) ? Kp(_e, q, cn[u]) : q, Pe = { ...T, [u]: ye.map((De) => De.i === W ? Ce : De) };
    le(Pe, !0), p(w);
  }, me = (W, q) => {
    const w = (I.current[u] || []).find((ye) => ye.i === W);
    if (!w) return;
    const T = cd(q, cn[u]);
    re(W, { ...w, ...T, x: Math.max(0, Math.min(w.x, cn[u] - T.w)) }, `Tamaño ${q}`);
  }, Se = (W) => {
    const q = (jo[u] || []).find((w) => w.i === W);
    q && re(W, { ...q }, "Widget restablecido");
  }, pe = (W, q, w) => {
    const T = Qp(w, cn[u]);
    re(w.i, T, `Tamaño ${Ds(T.w, T.h, cn[u])}`);
  }, ue = async () => {
    if (!confirm("¿Restablecer el diseño predeterminado?")) return;
    await l.reset(f, b);
    const W = gi(null);
    we(A), le(W, !0), p("Diseño predeterminado restaurado");
  }, G = Y[u] || [];
  return N ? /* @__PURE__ */ v.jsxs("section", { className: `argus-dashboard ${m ? "argus-dashboard--editing" : ""}`, style: { padding: "20px", minHeight: "calc(100vh - 80px)" }, children: [
    m && d && /* @__PURE__ */ v.jsxs("div", { "aria-live": "polite", style: { padding: "8px 16px", background: "rgba(30, 136, 229, 0.2)", border: "1px solid rgba(30, 136, 229, 0.4)", borderRadius: "12px", marginBottom: "16px", fontSize: "13px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ v.jsx("span", { children: d }),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "button",
          onClick: ue,
          style: { background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "8px", padding: "4px 8px", fontSize: "11px", cursor: "pointer" },
          children: "Restablecer diseño"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(Ec, { children: /* @__PURE__ */ v.jsx(
      Jp,
      {
        className: "argus-dashboard-grid",
        layouts: Y,
        breakpoints: Xp,
        cols: cn,
        rowHeight: 84,
        margin: [16, 16],
        containerPadding: [0, 0],
        compactType: null,
        preventCollision: !0,
        allowOverlap: !1,
        isBounded: !0,
        isDraggable: m,
        isResizable: m,
        draggableHandle: ".argus-widget__drag-handle",
        resizeHandles: ["se"],
        onBreakpointChange: (W) => h(W),
        onLayoutChange: (W, q) => {
          m && (B(q), I.current = q);
        },
        onResizeStop: pe,
        onDragStop: (W, q, w) => {
          const T = (I.current[u] || []).filter((ye) => ye.i !== w.i);
          if (Ts(T, w)) {
            B({ ...I.current }), p("Posición bloqueada por colisión");
            return;
          }
          re(w.i, w, "Posición guardada");
        },
        useCSSTransforms: !0,
        children: a.filter((W) => V[W.id] !== !1 && c[W.id] !== void 0).map((W) => {
          const q = G.find((T) => T.i === W.id), w = q ? Ds(q.w, q.h, cn[u]) : W.size;
          return /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(Ec, { children: /* @__PURE__ */ v.jsx(
            eh,
            {
              widget: W,
              editing: m,
              size: w,
              onSize: (T) => me(W.id, T),
              onHide: () => ie(W.id, !1),
              onReset: () => Se(W.id),
              children: c[W.id]
            }
          ) }) }, W.id);
        })
      }
    ) }),
    m && a.filter((W) => V[W.id] === !1).length > 0 && /* @__PURE__ */ v.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }, children: a.filter((W) => V[W.id] === !1).map((W) => /* @__PURE__ */ v.jsx(
      "button",
      {
        type: "button",
        onClick: () => ie(W.id, !0),
        style: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "white", fontSize: "12px", padding: "6px 12px", cursor: "pointer" },
        children: `Mostrar ${W.title}`
      },
      W.id
    )) })
  ] }) : /* @__PURE__ */ v.jsx("section", { className: "argus-dashboard", style: { padding: "24px", textAlign: "center", opacity: 0.6 }, children: "Cargando Argus Hub..." });
}
function nh({ hass: a }) {
  const [c, l] = Fe.useState(!1), f = a?.states || {}, b = Object.values(f).find(
    (d) => d.entity_id?.startsWith("alarm_control_panel.argus")
  ), R = b?.state || "disarmed", M = b?.attributes?.friendly_name?.toUpperCase() || a?.config?.location_name?.toUpperCase() || "MI HOGAR", F = R === "disarmed", j = R === "triggered", A = R === "arming" || R === "pending", Y = !F && !j && !A, B = !!a, V = Object.values(f).filter(
    (d) => d.entity_id.startsWith("binary_sensor.") && ["door", "window", "motion", "garage_door"].includes(
      d.attributes.device_class
    )
  ).slice(0, 5), we = (() => {
    switch (R) {
      case "disarmed":
        return { text: "SISTEMA DESARMADO", color: "#43A047", bg: "rgba(67,160,71,0.2)", border: "rgba(67,160,71,0.5)" };
      case "armed_home":
        return { text: "SISTEMA ARMADO · EN CASA", color: "#F5A623", bg: "rgba(245,166,35,0.2)", border: "rgba(245,166,35,0.5)" };
      case "armed_away":
        return { text: "SISTEMA ARMADO · AUSENTE", color: "#E53935", bg: "rgba(229,57,53,0.2)", border: "rgba(229,57,53,0.5)" };
      case "armed_night":
        return { text: "SISTEMA ARMADO · NOCHE", color: "#8E24AA", bg: "rgba(142,36,170,0.2)", border: "rgba(142,36,170,0.5)" };
      case "armed_vacation":
        return { text: "SISTEMA ARMADO · VACACIONES", color: "#00897B", bg: "rgba(0,137,123,0.2)", border: "rgba(0,137,123,0.5)" };
      case "triggered":
        return { text: "¡ALARMA DISPARADA!", color: "#FF3B30", bg: "rgba(255,59,48,0.2)", border: "rgba(255,59,48,0.5)" };
      case "arming":
      case "pending":
        return { text: "ARMANDO...", color: "#F5B041", bg: "rgba(245,176,65,0.2)", border: "rgba(245,176,65,0.5)" };
      default:
        return { text: "ESTADO DESCONOCIDO", color: "rgba(255,255,255,0.5)", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.15)" };
    }
  })(), xe = [
    { id: "armed_home", service: "alarm_arm_home", icon: "🏠", label: "EN CASA", color: "#1E88E5" },
    { id: "armed_away", service: "alarm_arm_away", icon: "🔒", label: "AUSENTE", color: "#E53935" },
    { id: "armed_night", service: "alarm_arm_night", icon: "🌙", label: "NOCHE", color: "#8E24AA" },
    { id: "armed_vacation", service: "alarm_arm_vacation", icon: "✈️", label: "VACACIONES", color: "#00897B" }
  ], Q = (d) => {
    a && b && a.callService("alarm_control_panel", d, {
      entity_id: b.entity_id
    });
  }, N = () => {
    c ? (a && b && a.callService("alarm_control_panel", "alarm_trigger", {
      entity_id: b.entity_id
    }), l(!1)) : (l(!0), setTimeout(() => l(!1), 3e3));
  }, x = j ? "#FF3B30" : A ? "#F5B041" : Y ? "#F5A623" : "#43A047", u = () => /* @__PURE__ */ v.jsxs(
    "svg",
    {
      viewBox: "0 0 200 220",
      width: "100%",
      height: "100%",
      style: {
        filter: `drop-shadow(0 12px 28px ${x}55)`,
        maxWidth: "130px",
        maxHeight: "150px",
        margin: "auto",
        display: "block",
        overflow: "visible"
      },
      children: [
        /* @__PURE__ */ v.jsxs("defs", { children: [
          /* @__PURE__ */ v.jsxs("linearGradient", { id: "sg", x1: "20%", y1: "5%", x2: "85%", y2: "100%", children: [
            /* @__PURE__ */ v.jsx("stop", { stopColor: "#fff", stopOpacity: ".32" }),
            /* @__PURE__ */ v.jsx("stop", { offset: ".28", stopColor: x, stopOpacity: ".82" }),
            /* @__PURE__ */ v.jsx("stop", { offset: "1", stopColor: x, stopOpacity: ".18" })
          ] }),
          /* @__PURE__ */ v.jsxs("filter", { id: "sglow", filterUnits: "userSpaceOnUse", x: "-60", y: "-60", width: "320", height: "340", children: [
            /* @__PURE__ */ v.jsx("feGaussianBlur", { stdDeviation: "5", result: "b" }),
            /* @__PURE__ */ v.jsxs("feMerge", { children: [
              /* @__PURE__ */ v.jsx("feMergeNode", { in: "b" }),
              /* @__PURE__ */ v.jsx("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsx(
          "path",
          {
            d: "M100 18 L158 44 v46 c0 46-26 73-58 91 C68 163 42 136 42 90 V44 z",
            fill: "url(#sg)",
            stroke: x,
            strokeWidth: "3",
            filter: "url(#sglow)"
          }
        ),
        /* @__PURE__ */ v.jsx("path", { d: "M100 28 L150 50", stroke: "#fff", strokeOpacity: ".4", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ v.jsx("circle", { cx: "100", cy: "108", r: "44", fill: "rgba(0,8,20,.3)", stroke: "rgba(255,255,255,.18)", strokeWidth: "1.5" }),
        /* @__PURE__ */ v.jsx("g", { fill: "none", stroke: "#fff", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round", filter: "url(#sglow)", children: j ? /* @__PURE__ */ v.jsx("path", { d: "M88 96 L112 120 M112 96 L88 120" }) : A ? /* @__PURE__ */ v.jsx("path", { d: "M100 88 v22 l14 14" }) : Y ? /* @__PURE__ */ v.jsx("path", { d: "M100 88 v22 l14 14" }) : /* @__PURE__ */ v.jsx("path", { d: "M84 108 l12 12 l22-22" }) }),
        !j && /* @__PURE__ */ v.jsxs("circle", { cx: "100", cy: "108", r: "56", fill: "none", stroke: x, strokeOpacity: ".38", strokeWidth: "2", children: [
          /* @__PURE__ */ v.jsx("animate", { attributeName: "r", values: "50;65;50", dur: "3.5s", repeatCount: "indefinite" }),
          /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: ".6;.06;.6", dur: "3.5s", repeatCount: "indefinite" })
        ] }),
        j && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsxs("circle", { cx: "100", cy: "108", r: "55", fill: "none", stroke: "#FF3B30", strokeWidth: "3.5", children: [
            /* @__PURE__ */ v.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.75s", repeatCount: "indefinite" }),
            /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.75s", repeatCount: "indefinite" })
          ] }),
          /* @__PURE__ */ v.jsxs("circle", { cx: "100", cy: "108", r: "55", fill: "none", stroke: "#FF3B30", strokeWidth: "3.5", children: [
            /* @__PURE__ */ v.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.75s", begin: "0.375s", repeatCount: "indefinite" }),
            /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.75s", begin: "0.375s", repeatCount: "indefinite" })
          ] })
        ] })
      ]
    }
  ), h = ({ sensor: d }) => {
    const p = d.state === "on", m = d.attributes?.battery_level ?? d.attributes?.battery ?? null, z = d.attributes?.device_class, I = z === "motion" ? "🏃‍♂️" : z === "window" ? "🪟" : z === "garage_door" ? "🚘" : "🚪", U = (d.attributes?.friendly_name || d.entity_id).toUpperCase().replace("BINARY_SENSOR.", "").slice(0, 20);
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 10px",
          borderRadius: "12px",
          background: p ? "rgba(229,57,53,0.13)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${p ? "rgba(229,57,53,0.35)" : "rgba(255,255,255,0.08)"}`,
          transition: "background 0.3s"
        },
        children: [
          /* @__PURE__ */ v.jsx("span", { style: { fontSize: "16px", flexShrink: 0 }, children: I }),
          /* @__PURE__ */ v.jsx(
            "span",
            {
              style: {
                flex: 1,
                fontSize: "11px",
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em"
              },
              children: U
            }
          ),
          m !== null && /* @__PURE__ */ v.jsxs("span", { style: { fontSize: "10px", fontWeight: 700, opacity: 0.6 }, children: [
            "🔋",
            m,
            "%"
          ] }),
          /* @__PURE__ */ v.jsx(
            "span",
            {
              style: {
                fontSize: "9px",
                fontWeight: 900,
                padding: "2px 6px",
                borderRadius: "6px",
                background: p ? "rgba(229,57,53,0.25)" : "rgba(67,160,71,0.2)",
                color: p ? "#FF6B6B" : "#66BB6A",
                letterSpacing: "0.04em"
              },
              children: p ? "ABIERTO" : "CERRADO"
            }
          )
        ]
      }
    );
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "14px 16px",
        boxSizing: "border-box",
        gap: "12px"
      },
      children: [
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ v.jsxs(
                "span",
                {
                  style: {
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    opacity: 0.9
                  },
                  children: [
                    "🏠 ",
                    M
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "span",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: B ? "#66BB6A" : "#EF5350",
                    background: B ? "rgba(67,160,71,0.12)" : "rgba(229,57,53,0.12)",
                    padding: "3px 8px",
                    borderRadius: "20px"
                  },
                  children: [
                    /* @__PURE__ */ v.jsx("span", { style: { width: "7px", height: "7px", borderRadius: "50%", background: B ? "#66BB6A" : "#EF5350", display: "inline-block" } }),
                    B ? "Conectado" : "Desconectado"
                  ]
                }
              ),
              /* @__PURE__ */ v.jsx("div", { style: { marginLeft: "auto" }, children: /* @__PURE__ */ v.jsx(
                "span",
                {
                  style: {
                    fontSize: "11px",
                    fontWeight: 900,
                    padding: "4px 10px",
                    borderRadius: "8px",
                    background: we.bg,
                    color: we.color,
                    border: `1px solid ${we.border}`,
                    letterSpacing: "0.03em"
                  },
                  children: we.text
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { style: { flex: 1, display: "flex", gap: "14px", overflow: "hidden", minHeight: 0 }, children: [
          /* @__PURE__ */ v.jsxs(
            "div",
            {
              style: {
                flexShrink: 0,
                width: "190px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              },
              children: [
                /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      flex: 1
                    },
                    children: xe.map((d) => {
                      const p = R === d.id;
                      return /* @__PURE__ */ v.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => Q(d.service),
                          style: {
                            background: p ? `${d.color}22` : "rgba(255,255,255,0.06)",
                            border: `1.5px solid ${p ? d.color : "rgba(255,255,255,0.12)"}`,
                            borderRadius: "14px",
                            color: "white",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            padding: "10px 6px",
                            transition: "all 0.2s cubic-bezier(0.175,0.885,0.32,1.275)",
                            position: "relative"
                          },
                          onMouseEnter: (m) => {
                            m.currentTarget.style.transform = "scale(1.05)";
                          },
                          onMouseLeave: (m) => {
                            m.currentTarget.style.transform = "scale(1)";
                          },
                          children: [
                            p && /* @__PURE__ */ v.jsx(
                              "span",
                              {
                                style: {
                                  position: "absolute",
                                  top: "6px",
                                  right: "6px",
                                  width: "7px",
                                  height: "7px",
                                  borderRadius: "50%",
                                  background: d.color
                                }
                              }
                            ),
                            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "22px", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }, children: d.icon }),
                            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "10px", fontWeight: 900, letterSpacing: "0.04em", color: p ? d.color : "rgba(255,255,255,0.8)" }, children: d.label })
                          ]
                        },
                        d.id
                      );
                    })
                  }
                ),
                /* @__PURE__ */ v.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => Q("alarm_disarm"),
                    style: {
                      background: F ? "rgba(67,160,71,0.15)" : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)",
                      border: `1px solid ${F ? "rgba(67,160,71,0.3)" : "rgba(67,160,71,0.6)"}`,
                      borderRadius: "14px",
                      color: F ? "rgba(255,255,255,0.5)" : "#fff",
                      fontSize: "12px",
                      fontWeight: 900,
                      padding: "11px 10px",
                      cursor: F ? "default" : "pointer",
                      letterSpacing: "0.04em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.25s ease"
                    },
                    disabled: F,
                    children: [
                      /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px" }, children: F ? "🔓" : "🔒" }),
                      F ? "DESARMADO" : "Desliza para desarmar"
                    ]
                  }
                ),
                /* @__PURE__ */ v.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: N,
                    style: {
                      background: c ? "linear-gradient(135deg, #B71C1C 0%, #E53935 100%)" : "rgba(20,15,25,0.7)",
                      border: `1px solid ${c ? "rgba(229,57,53,0.8)" : "rgba(255,255,255,0.15)"}`,
                      borderRadius: "14px",
                      color: c ? "#fff" : "rgba(255,255,255,0.85)",
                      fontSize: "12px",
                      fontWeight: 900,
                      padding: "11px 10px",
                      cursor: "pointer",
                      letterSpacing: "0.04em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.25s ease",
                      boxShadow: c ? "0 0 20px rgba(229,57,53,0.5)" : "none"
                    },
                    children: [
                      /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px" }, children: "⚠️" }),
                      c ? "¡CONFIRMAR SOS!" : "🔴 SOS / PÁNICO"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ v.jsx(
            "div",
            {
              style: {
                flexShrink: 0,
                width: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ v.jsx(u, {})
            }
          ),
          /* @__PURE__ */ v.jsx(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                overflowY: "auto",
                paddingRight: "2px"
              },
              children: V.length === 0 ? /* @__PURE__ */ v.jsxs(
                "div",
                {
                  style: {
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.4,
                    fontSize: "12px",
                    fontWeight: 600,
                    textAlign: "center",
                    flexDirection: "column",
                    gap: "8px"
                  },
                  children: [
                    /* @__PURE__ */ v.jsx("span", { style: { fontSize: "24px" }, children: "🔍" }),
                    "No hay sensores detectados"
                  ]
                }
              ) : V.map((d) => /* @__PURE__ */ v.jsx(h, { sensor: d }, d.entity_id))
            }
          )
        ] })
      ]
    }
  );
}
const Ps = [
  { id: "disarmed", label: "Desarmado", icon: "🔓", color: "#43A047" },
  { id: "armed_home", label: "En Casa", icon: "🏠", color: "#1E88E5" },
  { id: "armed_away", label: "Ausente", icon: "🔴", color: "#E53935" },
  { id: "armed_night", label: "Noche", icon: "🌙", color: "#8E24AA" },
  { id: "armed_vacation", label: "Vacaciones", icon: "✈️", color: "#00897B" }
];
function yr({ icon: a, title: c, children: l }) {
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: {
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      },
      children: [
        /* @__PURE__ */ v.jsxs("span", { style: { fontSize: "12px", fontWeight: 900, letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ v.jsx("span", { children: a }),
          " ",
          c
        ] }),
        l
      ]
    }
  );
}
function Po({ label: a }) {
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      style: {
        background: "rgba(255,255,255,0.03)",
        border: "1px dashed rgba(255,255,255,0.15)",
        borderRadius: "10px",
        padding: "12px",
        textAlign: "center",
        fontSize: "12px",
        color: "rgba(255,255,255,0.4)",
        fontWeight: 600
      },
      children: "Ninguno seleccionado"
    }
  );
}
function pi({ label: a, onClick: c }) {
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: c,
      style: {
        width: "100%",
        padding: "9px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "10px",
        color: "rgba(255,255,255,0.75)",
        fontSize: "12px",
        fontWeight: 700,
        cursor: "pointer",
        letterSpacing: "0.02em",
        transition: "background 0.2s"
      },
      onMouseEnter: (l) => {
        l.currentTarget.style.background = "rgba(255,255,255,0.1)";
      },
      onMouseLeave: (l) => {
        l.currentTarget.style.background = "rgba(255,255,255,0.06)";
      },
      children: a
    }
  );
}
function Qc({ label: a, defaultVal: c }) {
  return /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
    /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.6 }, children: a }),
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "number",
        defaultValue: c,
        style: {
          background: "rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "8px",
          color: "white",
          fontSize: "14px",
          fontWeight: 800,
          padding: "8px 10px",
          width: "100%",
          boxSizing: "border-box"
        }
      }
    )
  ] });
}
function rh({ hass: a }) {
  const [c, l] = Fe.useState("armed_home"), f = Ps.find((b) => b.id === c) || Ps[1];
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "14px 16px",
        boxSizing: "border-box",
        gap: "12px"
      },
      children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0 }, children: "📋 Modos" }),
        /* @__PURE__ */ v.jsx(
          "div",
          {
            style: {
              display: "flex",
              gap: "4px",
              overflowX: "auto",
              flexShrink: 0,
              paddingBottom: "2px"
            },
            children: Ps.map((b) => {
              const R = c === b.id;
              return /* @__PURE__ */ v.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => l(b.id),
                  style: {
                    background: R ? `${b.color}22` : "transparent",
                    border: `1.5px solid ${R ? b.color : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "10px",
                    color: R ? b.color : "rgba(255,255,255,0.6)",
                    fontSize: "11px",
                    fontWeight: 800,
                    padding: "6px 10px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "all 0.2s ease",
                    flexShrink: 0
                  },
                  children: [
                    /* @__PURE__ */ v.jsx("span", { children: b.icon }),
                    /* @__PURE__ */ v.jsx("span", { children: b.label })
                  ]
                },
                b.id
              );
            })
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            style: {
              flex: 1,
              overflowY: "auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              alignContent: "start"
            },
            children: [
              /* @__PURE__ */ v.jsxs(yr, { icon: "🔴", title: "SENSORES DE INTRUSIÓN", children: [
                /* @__PURE__ */ v.jsx(Po, { label: "sensores" }),
                /* @__PURE__ */ v.jsx(pi, { label: "+ Seleccionar" }),
                /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                  /* @__PURE__ */ v.jsx("input", { type: "checkbox", style: { accentColor: f.color } }),
                  "Bloquear si abiertos"
                ] }),
                /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                  /* @__PURE__ */ v.jsx("input", { type: "checkbox", style: { accentColor: f.color } }),
                  "Esperar armado en espera"
                ] })
              ] }),
              /* @__PURE__ */ v.jsxs(yr, { icon: "🚫", title: "OMITIR", children: [
                /* @__PURE__ */ v.jsx(Po, { label: "omitidos" }),
                /* @__PURE__ */ v.jsx(pi, { label: "+ Añadir" })
              ] }),
              /* @__PURE__ */ v.jsxs(yr, { icon: "📢", title: "SIRENAS", children: [
                /* @__PURE__ */ v.jsx(Po, { label: "sirenas" }),
                /* @__PURE__ */ v.jsx(pi, { label: "+ Seleccionar" })
              ] }),
              /* @__PURE__ */ v.jsxs(yr, { icon: "⏱", title: "TIEMPOS", children: [
                /* @__PURE__ */ v.jsx(Qc, { label: "Armado (s)", defaultVal: 0 }),
                /* @__PURE__ */ v.jsx(Qc, { label: "Retraso de entrada (s)", defaultVal: 60 })
              ] }),
              /* @__PURE__ */ v.jsxs(yr, { icon: "🔗", title: "PANELES EXTERNOS", children: [
                /* @__PURE__ */ v.jsx(Po, { label: "paneles" }),
                /* @__PURE__ */ v.jsx(pi, { label: "+ Seleccionar" }),
                /* @__PURE__ */ v.jsx(pi, { label: "+ Añadir" })
              ] }),
              /* @__PURE__ */ v.jsx(yr, { icon: "📡", title: "MQTT", children: /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                /* @__PURE__ */ v.jsx("span", { children: "Activar MQTT" }),
                /* @__PURE__ */ v.jsx("input", { type: "checkbox", style: { accentColor: f.color, width: "16px", height: "16px" } })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function ih({ hass: a }) {
  const [c, l] = Fe.useState("idle"), f = a?.states || {}, b = Object.values(f).find(
    (F) => F.entity_id?.startsWith("alarm_control_panel.argus")
  ), R = () => {
    c === "idle" ? (l("confirm"), setTimeout(() => l("idle"), 4e3)) : c === "confirm" && (a && b && a.callService("alarm_control_panel", "alarm_trigger", {
      entity_id: b.entity_id
    }), l("activated"), setTimeout(() => l("idle"), 5e3));
  }, M = c === "activated" ? {
    background: "linear-gradient(135deg, #B71C1C 0%, #E53935 100%)",
    border: "1px solid rgba(229,57,53,0.8)",
    boxShadow: "0 0 32px rgba(229,57,53,0.55)",
    color: "#fff"
  } : c === "confirm" ? {
    background: "linear-gradient(135deg, #D32F2F 0%, #F44336 100%)",
    border: "1px solid rgba(244,67,54,0.9)",
    boxShadow: "0 0 24px rgba(244,67,54,0.5)",
    color: "#fff",
    animation: "argus-sos-pulse 0.6s infinite alternate"
  } : {
    background: "rgba(10,8,18,0.8)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    color: "rgba(255,255,255,0.85)"
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "14px 16px",
        boxSizing: "border-box",
        gap: "12px"
      },
      children: [
        /* @__PURE__ */ v.jsx(
          "span",
          {
            style: {
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              flexShrink: 0
            },
            children: "⚡ Acciones SOS"
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }, children: [
          /* @__PURE__ */ v.jsxs(
            "button",
            {
              type: "button",
              onClick: R,
              style: {
                ...M,
                borderRadius: "18px",
                width: "100%",
                padding: "20px 16px",
                fontSize: "15px",
                fontWeight: 900,
                letterSpacing: "0.06em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)"
              },
              onMouseDown: (F) => {
                F.currentTarget.style.transform = "scale(0.97)";
              },
              onMouseUp: (F) => {
                F.currentTarget.style.transform = "scale(1)";
              },
              children: [
                /* @__PURE__ */ v.jsx("span", { style: { fontSize: "22px" }, children: c === "activated" ? "🚨" : c === "confirm" ? "⚠️" : "🔴" }),
                /* @__PURE__ */ v.jsx("span", { children: c === "activated" ? "¡SOS ACTIVADO!" : c === "confirm" ? "¡CONFIRMAR SOS PÁNICO!" : "SOS / PÁNICO" })
              ]
            }
          ),
          c === "confirm" && /* @__PURE__ */ v.jsx(
            "p",
            {
              style: {
                margin: 0,
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#EF5350",
                opacity: 0.9,
                letterSpacing: "0.02em"
              },
              children: "Toca de nuevo para confirmar. Se cancela solo en 4 seg."
            }
          ),
          c === "idle" && /* @__PURE__ */ v.jsx(
            "p",
            {
              style: {
                margin: 0,
                textAlign: "center",
                fontSize: "12px",
                fontWeight: 600,
                opacity: 0.45,
                lineHeight: 1.4
              },
              children: "Activa el pánico. Las sirenas y alarmas se disparan de inmediato."
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx("style", { children: `
        @keyframes argus-sos-pulse {
          from { box-shadow: 0 0 20px rgba(244,67,54,0.4); }
          to   { box-shadow: 0 0 40px rgba(244,67,54,0.85); }
        }
      ` })
      ]
    }
  );
}
function oh(a) {
  const c = a?.user?.name || "Chris";
  return [
    {
      id: "1",
      name: c,
      haAccount: `CUENTA DE HOME ASSISTANT: ${c.toUpperCase()}`,
      role: "admin",
      pin: !1,
      expiry: "INDEFINIDO"
    },
    {
      id: "2",
      name: "Gecko",
      haAccount: "CUENTA DE HOME ASSISTANT: JASON",
      role: "admin",
      pin: !1,
      expiry: "INDEFINIDO"
    }
  ];
}
const lh = {
  admin: "⭐ ADMINISTRADOR DE ARGUS",
  standard: "👤 USUARIO ESTÁNDAR"
}, sh = {
  admin: "#F5A623",
  standard: "#42A5F5"
}, ah = {
  admin: "rgba(245,166,35,0.18)",
  standard: "rgba(30,136,229,0.18)"
};
function uh({ hass: a }) {
  const [c] = Fe.useState(() => oh(a)), l = (f, b, R = !1) => /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      title: b,
      style: {
        width: "38px",
        height: "38px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: R ? "#EF5350" : "white",
        transition: "background 0.2s"
      },
      onMouseEnter: (M) => {
        M.currentTarget.style.background = R ? "rgba(229,57,53,0.2)" : "rgba(255,255,255,0.14)";
      },
      onMouseLeave: (M) => {
        M.currentTarget.style.background = "rgba(255,255,255,0.07)";
      },
      children: f
    },
    f
  );
  return /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "14px 16px", boxSizing: "border-box", gap: "12px" }, children: [
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }, children: [
      /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase" }, children: "🛡️ Control de Acceso" }),
      /* @__PURE__ */ v.jsx(
        "span",
        {
          style: {
            fontSize: "10px",
            fontWeight: 900,
            padding: "3px 9px",
            borderRadius: "8px",
            background: "rgba(67,160,71,0.2)",
            color: "#66BB6A",
            border: "1px solid rgba(67,160,71,0.35)",
            letterSpacing: "0.05em"
          },
          children: "ACTIVO"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }, children: [
      c.map((f) => /* @__PURE__ */ v.jsxs(
        "div",
        {
          style: {
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "18px",
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          },
          children: [
            /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: "12px" }, children: [
              /* @__PURE__ */ v.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "6px" }, children: [
                /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      background: ah[f.role],
                      color: sh[f.role],
                      fontSize: "11px",
                      fontWeight: 900,
                      letterSpacing: "0.03em",
                      alignSelf: "flex-start"
                    },
                    children: lh[f.role]
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.6, letterSpacing: "0.03em", textTransform: "uppercase" }, children: f.haAccount })
              ] }),
              /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "5px", flexShrink: 0 }, children: [
                l("✏️", "Editar usuario"),
                l("🔑", "Cambiar PIN"),
                l("⭐", "Cambiar rol"),
                l("🗑️", "Eliminar usuario", !0)
              ] })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
              /* @__PURE__ */ v.jsxs(
                "span",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)",
                    color: f.pin ? "#66BB6A" : "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,255,255,0.1)"
                  },
                  children: [
                    "🔒 ",
                    f.pin ? "PIN ACTIVO" : "SIN PIN"
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "span",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "8px",
                    background: "rgba(67,160,71,0.12)",
                    color: "#66BB6A",
                    border: "1px solid rgba(67,160,71,0.25)"
                  },
                  children: [
                    "∞ ",
                    f.expiry
                  ]
                }
              )
            ] })
          ]
        },
        f.id
      )),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "button",
          style: {
            width: "100%",
            padding: "12px",
            background: "transparent",
            border: "1px dashed rgba(255,255,255,0.2)",
            borderRadius: "16px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "all 0.2s"
          },
          onMouseEnter: (f) => {
            f.currentTarget.style.background = "rgba(255,255,255,0.04)", f.currentTarget.style.color = "white";
          },
          onMouseLeave: (f) => {
            f.currentTarget.style.background = "transparent", f.currentTarget.style.color = "rgba(255,255,255,0.55)";
          },
          children: "+ Añadir Usuario"
        }
      )
    ] })
  ] });
}
const Kc = {
  triggered: { color: "#FF6B6B", bg: "rgba(229,57,53,0.18)", icon: "🚨" },
  armed_away: { color: "#EF5350", bg: "rgba(229,57,53,0.15)", icon: "🔒" },
  armed_home: { color: "#42A5F5", bg: "rgba(30,136,229,0.15)", icon: "🏠" },
  armed_night: { color: "#AB47BC", bg: "rgba(142,36,170,0.15)", icon: "🌙" },
  disarmed: { color: "#66BB6A", bg: "rgba(67,160,71,0.18)", icon: "🔓" },
  login: { color: "rgba(255,255,255,0.6)", bg: "rgba(255,255,255,0.06)", icon: "👤" },
  config: { color: "rgba(255,255,255,0.6)", bg: "rgba(255,255,255,0.06)", icon: "⚙️" },
  restored: { color: "#66BB6A", bg: "rgba(67,160,71,0.15)", icon: "♻️" },
  default: { color: "rgba(255,255,255,0.5)", bg: "rgba(255,255,255,0.05)", icon: "📋" }
};
function ch(a) {
  return Kc[a] || Kc.default;
}
function Zc(a) {
  const c = a?.states || {}, f = Object.values(c).find((j) => j.entity_id?.startsWith("alarm_control_panel.argus"))?.state || "disarmed", b = a?.user?.name || "Chris", R = /* @__PURE__ */ new Date(), M = (j) => j.toLocaleString("es", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }), F = [
    {
      id: "1",
      type: "login",
      title: "CONEXIÓN USUARIO",
      detail: "Conexión usuario",
      time: M(new Date(R.getTime() - 2 * 6e4)),
      source: b
    },
    {
      id: "2",
      type: "restored",
      title: "ESTADO LOCAL RESTAURADO",
      detail: `Estado local restaurado: ${f === "disarmed" ? "Desarmado" : f.replace("armed_", "").toUpperCase()}`,
      time: M(new Date(R.getTime() - 5 * 6e4)),
      source: "Argus"
    }
  ];
  return f !== "disarmed" && F.unshift({
    id: "0",
    type: f,
    title: "CAMBIO DE ESTADO",
    detail: `Sistema ${f.replace("armed_", "armado · ").replace("_", " ")}`,
    time: M(new Date(R.getTime() - 1 * 6e4)),
    source: b
  }), F;
}
function dh({ hass: a }) {
  const [c, l] = Fe.useState(() => Zc(a)), [f, b] = Fe.useState(!1), R = Fe.useCallback(() => {
    b(!0), setTimeout(() => {
      l(Zc(a)), b(!1);
    }, 600);
  }, [a]), M = Fe.useCallback(() => {
    confirm("¿Limpiar el historial local?") && l([]);
  }, []), F = Fe.useCallback(() => {
    const A = new Blob([JSON.stringify(c, null, 2)], { type: "application/json" }), Y = URL.createObjectURL(A), B = document.createElement("a");
    B.href = Y, B.download = "argus-history.json", B.click(), URL.revokeObjectURL(Y);
  }, [c]), j = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "10px",
    color: "white",
    fontSize: "11px",
    fontWeight: 800,
    padding: "5px 10px",
    cursor: "pointer",
    letterSpacing: "0.03em",
    transition: "background 0.2s"
  };
  return /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "14px 16px", boxSizing: "border-box", gap: "12px" }, children: [
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", flex: 1 }, children: "📋 Historial de Actividad" }),
      /* @__PURE__ */ v.jsxs(
        "button",
        {
          type: "button",
          onClick: R,
          style: j,
          title: "Actualizar",
          children: [
            f ? "⏳" : "🔄",
            " Actualizar"
          ]
        }
      ),
      /* @__PURE__ */ v.jsx("button", { type: "button", onClick: F, style: j, title: "Exportar JSON", children: "JSON" }),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "button",
          onClick: M,
          style: { ...j, color: "#EF5350", borderColor: "rgba(229,57,53,0.3)" },
          title: "Borrar historial",
          children: "BORRAR"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "7px", paddingRight: "2px" }, children: c.length === 0 ? /* @__PURE__ */ v.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4, fontSize: "13px", fontWeight: 600 }, children: "Sin entradas de historial" }) : c.map((A) => {
      const Y = ch(A.type);
      return /* @__PURE__ */ v.jsxs(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "11px 12px",
            borderRadius: "14px"
          },
          children: [
            /* @__PURE__ */ v.jsx(
              "div",
              {
                style: {
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: Y.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17px",
                  flexShrink: 0,
                  boxShadow: `0 0 10px ${Y.bg}`
                },
                children: Y.icon
              }
            ),
            /* @__PURE__ */ v.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }, children: [
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 900, color: Y.color, letterSpacing: "0.04em" }, children: A.title }),
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "12px", fontWeight: 600, opacity: 0.85, lineHeight: 1.3 }, children: A.detail }),
              /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }, children: [
                /* @__PURE__ */ v.jsx("span", { style: { fontSize: "10px", fontWeight: 600, opacity: 0.45 }, children: A.time }),
                /* @__PURE__ */ v.jsx("span", { style: { fontSize: "10px", opacity: 0.3 }, children: "·" }),
                /* @__PURE__ */ v.jsxs("span", { style: { fontSize: "10px", fontWeight: 700, opacity: 0.55 }, children: [
                  "👤 ",
                  A.source
                ] })
              ] })
            ] })
          ]
        },
        A.id
      );
    }) })
  ] });
}
function fh({ hass: a }) {
  const c = [
    { id: "1", name: "Encender luces si hay intrusión", status: "enabled", type: "triggered", icon: "🚨" },
    { id: "2", name: "Apagar todo al Armar Ausente", status: "enabled", type: "pending", icon: "⏳" },
    { id: "3", name: "Enviar notificación al Desarmar", status: "disabled", type: "disarmed", icon: "🔓" }
  ], l = (b) => {
    switch (b) {
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
  }, f = (b) => {
    switch (b) {
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
  return /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
      /* @__PURE__ */ v.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Automatizaciones" }),
      /* @__PURE__ */ v.jsxs(
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
            /* @__PURE__ */ v.jsx("span", { children: "+" }),
            " Crear con HA"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx("p", { style: { margin: "0 0 12px 0", fontSize: "13px", opacity: 0.7, lineHeight: 1.4 }, children: "Reglas configuradas en Home Assistant que utilizan el panel de Argus como disparador o condición." }),
    /* @__PURE__ */ v.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((b) => /* @__PURE__ */ v.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px",
      opacity: b.status === "enabled" ? 1 : 0.5
    }, children: [
      /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ v.jsx("div", { style: {
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: f(b.type),
          color: l(b.type),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          boxShadow: `0 0 8px ${f(b.type)}`
        }, children: b.icon }),
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 600 }, children: b.name })
      ] }),
      /* @__PURE__ */ v.jsx("div", { style: {
        width: "36px",
        height: "20px",
        background: b.status === "enabled" ? "#43A047" : "rgba(255,255,255,0.2)",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer"
      }, children: /* @__PURE__ */ v.jsx("div", { style: {
        position: "absolute",
        top: "2px",
        left: b.status === "enabled" ? "18px" : "2px",
        width: "16px",
        height: "16px",
        background: "white",
        borderRadius: "50%",
        transition: "left 0.2s ease"
      } }) })
    ] }, b.id)) })
  ] });
}
var ph = mi();
function hh({ userName: a, isAdmin: c = !0, avatarUrl: l }) {
  const [f, b] = Fe.useState(!0), [R, M] = Fe.useState(!1);
  if (Fe.useEffect(() => {
    const j = setTimeout(() => M(!0), 1400), A = setTimeout(() => b(!1), 2300);
    return () => {
      clearTimeout(j), clearTimeout(A);
    };
  }, []), !f) return null;
  const F = l || `https://ui-avatars.com/api/?name=${encodeURIComponent(a)}&background=1E88E5&color=fff&size=200&bold=true`;
  return ph.createPortal(
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Background fades out during shrink
          background: R ? "rgba(11,15,25,0)" : "rgba(11,15,25,0.96)",
          backdropFilter: R ? "none" : "blur(40px) saturate(120%)",
          WebkitBackdropFilter: R ? "none" : "blur(40px) saturate(120%)",
          // Shrink toward top-right corner where the avatar lives in the top bar
          // avatar is approx 42px from right edge at 14px from top
          transformOrigin: "calc(100% - 82px) 35px",
          transform: R ? "scale(0)" : "scale(1)",
          opacity: R ? 0 : 1,
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, background 0.4s ease, backdrop-filter 0.4s ease",
          pointerEvents: R ? "none" : "auto"
        },
        children: [
          /* @__PURE__ */ v.jsx("style", { children: `
        @keyframes argusIntroSlideIn {
          from { opacity: 0; transform: translateY(28px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes argusIntroAvatarBounce {
          0%   { transform: scale(0.8) translateY(8px); opacity: 0; }
          55%  { transform: scale(1.06) translateY(-4px); opacity: 1; }
          75%  { transform: scale(0.97) translateY(2px); }
          88%  { transform: scale(1.02) translateY(-1px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .argus-intro-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          animation: argusIntroSlideIn 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .argus-intro-avatar {
          animation: argusIntroAvatarBounce 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s both;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          box-shadow:
            0 0 0 3px rgba(255,255,255,0.18),
            0 0 0 8px rgba(30,136,229,0.18),
            0 20px 60px rgba(0,0,0,0.55);
        }
        .argus-intro-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .argus-intro-avatar::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 60%);
          pointer-events: none;
        }
        @media (min-width: 768px) {
          .argus-intro-avatar {
            width: 185px;
            height: 185px;
          }
        }
      ` }),
          /* @__PURE__ */ v.jsxs("div", { className: "argus-intro-content", children: [
            /* @__PURE__ */ v.jsx("div", { className: "argus-intro-avatar", children: /* @__PURE__ */ v.jsx("img", { src: F, alt: a }) }),
            /* @__PURE__ */ v.jsxs("div", { style: { textAlign: "center", color: "white" }, children: [
              /* @__PURE__ */ v.jsxs(
                "h1",
                {
                  style: {
                    margin: "0 0 10px 0",
                    fontSize: "30px",
                    fontWeight: 900,
                    letterSpacing: "-0.025em",
                    textShadow: "0 4px 16px rgba(0,0,0,0.6)",
                    lineHeight: 1.1
                  },
                  children: [
                    "Hola, ",
                    a
                  ]
                }
              ),
              /* @__PURE__ */ v.jsx(
                "div",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 16px",
                    background: c ? "rgba(245,166,35,0.18)" : "rgba(30,136,229,0.18)",
                    border: `1px solid ${c ? "rgba(245,166,35,0.4)" : "rgba(30,136,229,0.4)"}`,
                    borderRadius: "20px",
                    color: c ? "#F5A623" : "#42A5F5",
                    fontSize: "11px",
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase"
                  },
                  children: c ? "⭐ Administrador" : "👤 Estándar"
                }
              )
            ] })
          ] })
        ]
      }
    ),
    document.body
  );
}
const gh = new Zp();
function mh() {
  return /* @__PURE__ */ v.jsxs(
    "svg",
    {
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      fill: "none",
      style: { flexShrink: 0 },
      children: [
        /* @__PURE__ */ v.jsx("circle", { cx: "26", cy: "26", r: "25", fill: "rgba(255,255,255,0.08)", stroke: "rgba(255,255,255,0.18)", strokeWidth: "1.5" }),
        /* @__PURE__ */ v.jsx(
          "path",
          {
            d: "M26 8 L40 14 v12 c0 10-6 17-14 21 C14 43 8 36 8 26 V14 z",
            fill: "rgba(30,136,229,0.35)",
            stroke: "rgba(30,136,229,0.7)",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "path",
          {
            d: "M19 26 l5 5 l10-10",
            stroke: "#fff",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
          }
        ),
        /* @__PURE__ */ v.jsx("circle", { cx: "26", cy: "26", r: "25", fill: "none", stroke: "rgba(30,136,229,0.25)", strokeWidth: "4" })
      ]
    }
  );
}
function yh({ hass: a, config: c }) {
  const [l, f] = Fe.useState(/* @__PURE__ */ new Date()), [b, R] = Fe.useState(!1);
  Fe.useEffect(() => {
    const xe = setInterval(() => f(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(xe);
  }, []);
  const M = a?.user?.name || "Chris", F = a?.user?.is_admin ?? !0, j = a?.user?.id || "default_user", A = `https://ui-avatars.com/api/?name=${encodeURIComponent(M)}&background=1E88E5&color=fff&size=128&bold=true`, Y = l.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), B = l.toLocaleDateString("es", {
    weekday: "short",
    day: "2-digit",
    month: "short"
  }).toUpperCase(), V = [
    { id: "modes", title: "Modos", size: "L", kind: "alarm-configuration", visible: !0 },
    { id: "active-instances", title: "Instancias Activas", size: "M", kind: "security-status", visible: !0 },
    { id: "sos", title: "Acciones SOS", size: "M", kind: "custom", visible: !0 },
    { id: "history", title: "Historial", size: "L", kind: "activity-history", visible: !0 },
    { id: "automations", title: "Automatizaciones", size: "L", kind: "automations", visible: !0 },
    { id: "access", title: "Control de Acceso", size: "XL", kind: "access-control", visible: !0 }
  ], we = {
    modes: /* @__PURE__ */ v.jsx(rh, { hass: a }),
    "active-instances": /* @__PURE__ */ v.jsx(nh, { hass: a }),
    sos: /* @__PURE__ */ v.jsx(ih, { hass: a }),
    history: /* @__PURE__ */ v.jsx(dh, { hass: a }),
    automations: /* @__PURE__ */ v.jsx(fh, { hass: a }),
    access: /* @__PURE__ */ v.jsx(uh, { hass: a })
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(hh, { userName: M, isAdmin: F, avatarUrl: A }),
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        style: {
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(160deg, #0b0f19 0%, #0d1526 45%, #111827 100%)",
          color: "white",
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ v.jsxs(
            "header",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(28px) saturate(140%)",
                WebkitBackdropFilter: "blur(28px) saturate(140%)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                zIndex: 100,
                position: "sticky",
                top: 0,
                gap: "16px"
              },
              children: [
                /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }, children: [
                  /* @__PURE__ */ v.jsx(mh, {}),
                  /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column", minWidth: 0 }, children: [
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "22px",
                          fontWeight: 900,
                          letterSpacing: "-0.025em",
                          lineHeight: 1.1,
                          whiteSpace: "nowrap"
                        },
                        children: "Argus Home Hub"
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "11px",
                          fontWeight: 500,
                          opacity: 0.55,
                          marginTop: "3px",
                          letterSpacing: "0.01em",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        children: "Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit."
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "20px", flexShrink: 0 }, children: [
                  /* @__PURE__ */ v.jsxs("div", { style: { textAlign: "right", display: "flex", flexDirection: "column", gap: "1px" }, children: [
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "22px",
                          fontWeight: 900,
                          letterSpacing: "-0.03em",
                          lineHeight: 1
                        },
                        children: Y
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "10px",
                          fontWeight: 700,
                          opacity: 0.5,
                          letterSpacing: "0.06em"
                        },
                        children: B
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      style: {
                        width: "1px",
                        height: "36px",
                        background: "rgba(255,255,255,0.12)",
                        flexShrink: 0
                      }
                    }
                  ),
                  /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                    /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: A,
                        alt: M,
                        style: {
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid rgba(255,255,255,0.2)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                          flexShrink: 0
                        }
                      }
                    ),
                    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }, children: [
                      /* @__PURE__ */ v.jsx(
                        "span",
                        {
                          style: {
                            fontSize: "13px",
                            fontWeight: 800,
                            letterSpacing: "0.01em",
                            lineHeight: 1,
                            whiteSpace: "nowrap"
                          },
                          children: M
                        }
                      ),
                      /* @__PURE__ */ v.jsx(
                        "span",
                        {
                          style: {
                            fontSize: "9px",
                            fontWeight: 900,
                            letterSpacing: "0.08em",
                            padding: "2px 7px",
                            borderRadius: "6px",
                            background: F ? "rgba(245,166,35,0.2)" : "rgba(30,136,229,0.2)",
                            color: F ? "#F5A623" : "#42A5F5",
                            border: `1px solid ${F ? "rgba(245,166,35,0.35)" : "rgba(30,136,229,0.35)"}`,
                            alignSelf: "flex-start",
                            textTransform: "uppercase"
                          },
                          children: F ? "Admin" : "Estándar"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ v.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => R((xe) => !xe),
                      style: {
                        background: b ? "rgba(30,136,229,0.3)" : "rgba(255,255,255,0.08)",
                        border: `1px solid ${b ? "rgba(30,136,229,0.6)" : "rgba(255,255,255,0.15)"}`,
                        borderRadius: "12px",
                        padding: "8px",
                        cursor: "pointer",
                        color: b ? "#42A5F5" : "rgba(255,255,255,0.75)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease",
                        flexShrink: 0
                      },
                      title: b ? "Guardar y salir de edición" : "Editar tablero",
                      children: /* @__PURE__ */ v.jsx(
                        "svg",
                        {
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          children: b ? /* @__PURE__ */ v.jsx("path", { d: "M20 6L9 17l-5-5" }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                            /* @__PURE__ */ v.jsx("path", { d: "M12 20h9" }),
                            /* @__PURE__ */ v.jsx("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
                          ] })
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ v.jsx("main", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ v.jsx(
            th,
            {
              widgets: V,
              widgetComponents: we,
              storage: gh,
              userId: j,
              dashboardId: "main",
              isEditing: b,
              onToggleEditing: () => R((xe) => !xe),
              onEditing: R,
              registerEditor: () => {
              }
            }
          ) })
        ]
      }
    )
  ] });
}
const vh = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', xh = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", wh = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:230px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}.argus-dashboard__toolbar{display:none!important}";
class Sh extends HTMLElement {
  root = null;
  _hass = null;
  _config = null;
  container = null;
  set hass(c) {
    this._hass = c, this.render();
  }
  get hass() {
    return this._hass;
  }
  set panel(c) {
    this._config = c?.config || this._config, this.render();
  }
  setConfig(c) {
    this._config = c, this.render();
  }
  connectedCallback() {
    if (!this.container) {
      if (this.style.display = "block", this.style.width = "100%", this.style.height = "100%", this.style.minHeight = "100vh", this.style.backgroundColor = "#0b0f19", this.style.color = "#ffffff", !document.getElementById("argus-global-styles")) {
        const c = document.createElement("style");
        c.id = "argus-global-styles", c.textContent = `
          ${vh}
          ${xh}
          ${wh}
          body, html { margin: 0; padding: 0; background-color: #0b0f19 !important; }
        `, document.head.appendChild(c);
      }
      this.container = document.createElement("div"), this.container.style.width = "100%", this.container.style.minHeight = "100vh", this.container.style.backgroundColor = "#0b0f19", this.appendChild(this.container), this.root = pp.createRoot(this.container);
    }
    this.render();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null, this.container = null);
  }
  render() {
    this.root && this.root.render(
      hp.createElement(yh, {
        hass: this._hass,
        config: this._config || {}
      })
    );
  }
}
function zh(a) {
  const c = ["argus-panel-v2018", "argus-panel", "argus-card"];
  for (const l of c)
    customElements.get(l) || customElements.define(l, class extends Sh {
    });
}
export {
  zh as applyArgusFrontend
};
