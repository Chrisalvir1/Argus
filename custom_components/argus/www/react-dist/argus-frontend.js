function tp(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function np(u) {
  if (u.__esModule) return u;
  var c = u.default;
  if (typeof c == "function") {
    var l = function f() {
      return this instanceof f ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    l.prototype = c.prototype;
  } else l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(u).forEach(function(f) {
    var k = Object.getOwnPropertyDescriptor(u, f);
    Object.defineProperty(l, f, k.get ? k : {
      enumerable: !0,
      get: function() {
        return u[f];
      }
    });
  }), l;
}
var Eo = {}, ms = { exports: {} }, zt = {}, ys = { exports: {} }, Te = {};
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
function rp() {
  if (pc) return Te;
  pc = 1;
  var u = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), I = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), F = Symbol.iterator;
  function $(w) {
    return w === null || typeof w != "object" ? null : (w = F && w[F] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var ke = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, be = Object.assign, K = {};
  function N(w, D, ye) {
    this.props = w, this.context = D, this.refs = K, this.updater = ye || ke;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(w, D) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, D, "setState");
  }, N.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function x() {
  }
  x.prototype = N.prototype;
  function a(w, D, ye) {
    this.props = w, this.context = D, this.refs = K, this.updater = ye || ke;
  }
  var h = a.prototype = new x();
  h.constructor = a, be(h, N.prototype), h.isPureReactComponent = !0;
  var d = Array.isArray, p = Object.prototype.hasOwnProperty, m = { current: null }, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(w, D, ye) {
    var we, Re = {}, Pe = null, De = null;
    if (D != null) for (we in D.ref !== void 0 && (De = D.ref), D.key !== void 0 && (Pe = "" + D.key), D) p.call(D, we) && !z.hasOwnProperty(we) && (Re[we] = D[we]);
    var Z = arguments.length - 2;
    if (Z === 1) Re.children = ye;
    else if (1 < Z) {
      for (var ae = Array(Z), ze = 0; ze < Z; ze++) ae[ze] = arguments[ze + 2];
      Re.children = ae;
    }
    if (w && w.defaultProps) for (we in Z = w.defaultProps, Z) Re[we] === void 0 && (Re[we] = Z[we]);
    return { $$typeof: u, type: w, key: Pe, ref: De, props: Re, _owner: m.current };
  }
  function B(w, D) {
    return { $$typeof: u, type: w.type, key: D, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function te(w) {
    return typeof w == "object" && w !== null && w.$$typeof === u;
  }
  function le(w) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ye) {
      return D[ye];
    });
  }
  var ie = /\/+/g;
  function re(w, D) {
    return typeof w == "object" && w !== null && w.key != null ? le("" + w.key) : D.toString(36);
  }
  function me(w, D, ye, we, Re) {
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
          case u:
          case c:
            De = !0;
        }
    }
    if (De) return De = w, Re = Re(De), w = we === "" ? "." + re(De, 0) : we, d(Re) ? (ye = "", w != null && (ye = w.replace(ie, "$&/") + "/"), me(Re, D, ye, "", function(ze) {
      return ze;
    })) : Re != null && (te(Re) && (Re = B(Re, ye + (!Re.key || De && De.key === Re.key ? "" : ("" + Re.key).replace(ie, "$&/") + "/") + w)), D.push(Re)), 1;
    if (De = 0, we = we === "" ? "." : we + ":", d(w)) for (var Z = 0; Z < w.length; Z++) {
      Pe = w[Z];
      var ae = we + re(Pe, Z);
      De += me(Pe, D, ye, ae, Re);
    }
    else if (ae = $(w), typeof ae == "function") for (w = ae.call(w), Z = 0; !(Pe = w.next()).done; ) Pe = Pe.value, ae = we + re(Pe, Z++), De += me(Pe, D, ye, ae, Re);
    else if (Pe === "object") throw D = String(w), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return De;
  }
  function xe(w, D, ye) {
    if (w == null) return w;
    var we = [], Re = 0;
    return me(w, we, "", "", function(Pe) {
      return D.call(ye, Pe, Re++);
    }), we;
  }
  function pe(w) {
    if (w._status === -1) {
      var D = w._result;
      D = D(), D.then(function(ye) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ye);
      }, function(ye) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ye);
      }), w._status === -1 && (w._status = 0, w._result = D);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ue = { current: null }, G = { transition: null }, W = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: G, ReactCurrentOwner: m };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Te.Children = { map: xe, forEach: function(w, D, ye) {
    xe(w, function() {
      D.apply(this, arguments);
    }, ye);
  }, count: function(w) {
    var D = 0;
    return xe(w, function() {
      D++;
    }), D;
  }, toArray: function(w) {
    return xe(w, function(D) {
      return D;
    }) || [];
  }, only: function(w) {
    if (!te(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Te.Component = N, Te.Fragment = l, Te.Profiler = k, Te.PureComponent = a, Te.StrictMode = f, Te.Suspense = M, Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, Te.act = U, Te.cloneElement = function(w, D, ye) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var we = be({}, w.props), Re = w.key, Pe = w.ref, De = w._owner;
    if (D != null) {
      if (D.ref !== void 0 && (Pe = D.ref, De = m.current), D.key !== void 0 && (Re = "" + D.key), w.type && w.type.defaultProps) var Z = w.type.defaultProps;
      for (ae in D) p.call(D, ae) && !z.hasOwnProperty(ae) && (we[ae] = D[ae] === void 0 && Z !== void 0 ? Z[ae] : D[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) we.children = ye;
    else if (1 < ae) {
      Z = Array(ae);
      for (var ze = 0; ze < ae; ze++) Z[ze] = arguments[ze + 2];
      we.children = Z;
    }
    return { $$typeof: u, type: w.type, key: Re, ref: Pe, props: we, _owner: De };
  }, Te.createContext = function(w) {
    return w = { $$typeof: I, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: P, _context: w }, w.Consumer = w;
  }, Te.createElement = L, Te.createFactory = function(w) {
    var D = L.bind(null, w);
    return D.type = w, D;
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(w) {
    return { $$typeof: Y, render: w };
  }, Te.isValidElement = te, Te.lazy = function(w) {
    return { $$typeof: V, _payload: { _status: -1, _result: w }, _init: pe };
  }, Te.memo = function(w, D) {
    return { $$typeof: A, type: w, compare: D === void 0 ? null : D };
  }, Te.startTransition = function(w) {
    var D = G.transition;
    G.transition = {};
    try {
      w();
    } finally {
      G.transition = D;
    }
  }, Te.unstable_act = U, Te.useCallback = function(w, D) {
    return ue.current.useCallback(w, D);
  }, Te.useContext = function(w) {
    return ue.current.useContext(w);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(w) {
    return ue.current.useDeferredValue(w);
  }, Te.useEffect = function(w, D) {
    return ue.current.useEffect(w, D);
  }, Te.useId = function() {
    return ue.current.useId();
  }, Te.useImperativeHandle = function(w, D, ye) {
    return ue.current.useImperativeHandle(w, D, ye);
  }, Te.useInsertionEffect = function(w, D) {
    return ue.current.useInsertionEffect(w, D);
  }, Te.useLayoutEffect = function(w, D) {
    return ue.current.useLayoutEffect(w, D);
  }, Te.useMemo = function(w, D) {
    return ue.current.useMemo(w, D);
  }, Te.useReducer = function(w, D, ye) {
    return ue.current.useReducer(w, D, ye);
  }, Te.useRef = function(w) {
    return ue.current.useRef(w);
  }, Te.useState = function(w) {
    return ue.current.useState(w);
  }, Te.useSyncExternalStore = function(w, D, ye) {
    return ue.current.useSyncExternalStore(w, D, ye);
  }, Te.useTransition = function() {
    return ue.current.useTransition();
  }, Te.version = "18.3.1", Te;
}
var hc;
function Ct() {
  return hc || (hc = 1, ys.exports = rp()), ys.exports;
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
var gc;
function ip() {
  return gc || (gc = 1, function(u) {
    function c(G, W) {
      var U = G.length;
      G.push(W);
      e: for (; 0 < U; ) {
        var w = U - 1 >>> 1, D = G[w];
        if (0 < k(D, W)) G[w] = W, G[U] = D, U = w;
        else break e;
      }
    }
    function l(G) {
      return G.length === 0 ? null : G[0];
    }
    function f(G) {
      if (G.length === 0) return null;
      var W = G[0], U = G.pop();
      if (U !== W) {
        G[0] = U;
        e: for (var w = 0, D = G.length, ye = D >>> 1; w < ye; ) {
          var we = 2 * (w + 1) - 1, Re = G[we], Pe = we + 1, De = G[Pe];
          if (0 > k(Re, U)) Pe < D && 0 > k(De, Re) ? (G[w] = De, G[Pe] = U, w = Pe) : (G[w] = Re, G[we] = U, w = we);
          else if (Pe < D && 0 > k(De, U)) G[w] = De, G[Pe] = U, w = Pe;
          else break e;
        }
      }
      return W;
    }
    function k(G, W) {
      var U = G.sortIndex - W.sortIndex;
      return U !== 0 ? U : G.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      u.unstable_now = function() {
        return P.now();
      };
    } else {
      var I = Date, Y = I.now();
      u.unstable_now = function() {
        return I.now() - Y;
      };
    }
    var M = [], A = [], V = 1, F = null, $ = 3, ke = !1, be = !1, K = !1, N = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(G) {
      for (var W = l(A); W !== null; ) {
        if (W.callback === null) f(A);
        else if (W.startTime <= G) f(A), W.sortIndex = W.expirationTime, c(M, W);
        else break;
        W = l(A);
      }
    }
    function d(G) {
      if (K = !1, h(G), !be) if (l(M) !== null) be = !0, pe(p);
      else {
        var W = l(A);
        W !== null && ue(d, W.startTime - G);
      }
    }
    function p(G, W) {
      be = !1, K && (K = !1, x(L), L = -1), ke = !0;
      var U = $;
      try {
        for (h(W), F = l(M); F !== null && (!(F.expirationTime > W) || G && !le()); ) {
          var w = F.callback;
          if (typeof w == "function") {
            F.callback = null, $ = F.priorityLevel;
            var D = w(F.expirationTime <= W);
            W = u.unstable_now(), typeof D == "function" ? F.callback = D : F === l(M) && f(M), h(W);
          } else f(M);
          F = l(M);
        }
        if (F !== null) var ye = !0;
        else {
          var we = l(A);
          we !== null && ue(d, we.startTime - W), ye = !1;
        }
        return ye;
      } finally {
        F = null, $ = U, ke = !1;
      }
    }
    var m = !1, z = null, L = -1, B = 5, te = -1;
    function le() {
      return !(u.unstable_now() - te < B);
    }
    function ie() {
      if (z !== null) {
        var G = u.unstable_now();
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
    if (typeof a == "function") re = function() {
      a(ie);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), xe = me.port2;
      me.port1.onmessage = ie, re = function() {
        xe.postMessage(null);
      };
    } else re = function() {
      N(ie, 0);
    };
    function pe(G) {
      z = G, m || (m = !0, re());
    }
    function ue(G, W) {
      L = N(function() {
        G(u.unstable_now());
      }, W);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, u.unstable_continueExecution = function() {
      be || ke || (be = !0, pe(p));
    }, u.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < G ? Math.floor(1e3 / G) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, u.unstable_getFirstCallbackNode = function() {
      return l(M);
    }, u.unstable_next = function(G) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = $;
      }
      var U = $;
      $ = W;
      try {
        return G();
      } finally {
        $ = U;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(G, W) {
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
      var U = $;
      $ = G;
      try {
        return W();
      } finally {
        $ = U;
      }
    }, u.unstable_scheduleCallback = function(G, W, U) {
      var w = u.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? w + U : w) : U = w, G) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = U + D, G = { id: V++, callback: W, priorityLevel: G, startTime: U, expirationTime: D, sortIndex: -1 }, U > w ? (G.sortIndex = U, c(A, G), l(M) === null && G === l(A) && (K ? (x(L), L = -1) : K = !0, ue(d, U - w))) : (G.sortIndex = D, c(M, G), be || ke || (be = !0, pe(p))), G;
    }, u.unstable_shouldYield = le, u.unstable_wrapCallback = function(G) {
      var W = $;
      return function() {
        var U = $;
        $ = W;
        try {
          return G.apply(this, arguments);
        } finally {
          $ = U;
        }
      };
    };
  }(xs)), xs;
}
var mc;
function op() {
  return mc || (mc = 1, vs.exports = ip()), vs.exports;
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
var yc;
function lp() {
  if (yc) return zt;
  yc = 1;
  var u = Ct(), c = op();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = /* @__PURE__ */ new Set(), k = {};
  function P(e, t) {
    I(e, t), I(e + "Capture", t);
  }
  function I(e, t) {
    for (k[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var Y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), M = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, V = {}, F = {};
  function $(e) {
    return M.call(F, e) ? !0 : M.call(V, e) ? !1 : A.test(e) ? F[e] = !0 : (V[e] = !0, !1);
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
  function be(e, t, n, r) {
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
  function K(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new K(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new K(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new K(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new K(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new K(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new K(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var x = /[\-:]([a-z])/g;
  function a(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      x,
      a
    );
    N[t] = new K(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(x, a);
    N[t] = new K(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(x, a);
    N[t] = new K(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = N.hasOwnProperty(t) ? N[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (be(t, n, i, r) && (n = null), r || i === null ? $(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = Symbol.for("react.element"), m = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), le = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), xe = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), G = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = G && e[G] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var U = Object.assign, w;
  function D(e) {
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
  function we(e, t) {
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
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function Re(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = we(e.type, !1), e;
      case 11:
        return e = we(e.type.render, !1), e;
      case 1:
        return e = we(e.type, !0), e;
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
      case B:
        return "Profiler";
      case L:
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
      case xe:
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
        return t === L ? "StrictMode" : "Mode";
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
  function Me(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ae(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Fe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function $e(e, t) {
    var n = t.checked;
    return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function nt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function _(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function b(e, t) {
    _(e, t);
    var n = Z(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? q(e, t.type, n) : t.hasOwnProperty("defaultValue") && q(e, t.type, Z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function C(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function q(e, t, n) {
    (t !== "number" || Fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
    return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
  function Ne(e, t) {
    var n = Z(t.value), r = Z(t.defaultValue);
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
  var y, O = function(e) {
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
  function Le(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ee.hasOwnProperty(e) && ee[e] ? ("" + t).trim() : t + "px";
  }
  function Ie(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Le(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Ke = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Gt = null;
  function jn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Vn = null, Dn = null, Zt = null;
  function xr(e) {
    if (e = Br(e)) {
      if (typeof Vn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Ai(t), Vn(e.stateNode, e.type, t));
    }
  }
  function wr(e) {
    Dn ? Zt ? Zt.push(e) : Zt = [e] : Dn = e;
  }
  function Yn() {
    if (Dn) {
      var e = Dn, t = Zt;
      if (Zt = Dn = null, xr(e), t) for (e = 0; e < t.length; e++) xr(t[e]);
    }
  }
  function gi(e, t) {
    return e(t);
  }
  function Ts() {
  }
  var No = !1;
  function Ms(e, t, n) {
    if (No) return e(t, n);
    No = !0;
    try {
      return gi(e, t, n);
    } finally {
      No = !1, (Dn !== null || Zt !== null) && (Ts(), Yn());
    }
  }
  function Sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ai(n);
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
  var To = !1;
  if (Y) try {
    var _r = {};
    Object.defineProperty(_r, "passive", { get: function() {
      To = !0;
    } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    To = !1;
  }
  function ld(e, t, n, r, i, o, s, g, S) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var kr = !1, mi = null, yi = !1, Mo = null, sd = { onError: function(e) {
    kr = !0, mi = e;
  } };
  function ad(e, t, n, r, i, o, s, g, S) {
    kr = !1, mi = null, ld.apply(sd, arguments);
  }
  function ud(e, t, n, r, i, o, s, g, S) {
    if (ad.apply(this, arguments), kr) {
      if (kr) {
        var T = mi;
        kr = !1, mi = null;
      } else throw Error(l(198));
      yi || (yi = !0, Mo = T);
    }
  }
  function Nn(e) {
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
  function Ls(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Is(e) {
    if (Nn(e) !== e) throw Error(l(188));
  }
  function cd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(l(188));
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
  function As(e) {
    return e = cd(e), e !== null ? Ws(e) : null;
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
  var Hs = c.unstable_scheduleCallback, Fs = c.unstable_cancelCallback, dd = c.unstable_shouldYield, fd = c.unstable_requestPaint, rt = c.unstable_now, pd = c.unstable_getCurrentPriorityLevel, Lo = c.unstable_ImmediatePriority, Bs = c.unstable_UserBlockingPriority, vi = c.unstable_NormalPriority, hd = c.unstable_LowPriority, Us = c.unstable_IdlePriority, xi = null, Vt = null;
  function gd(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
      Vt.onCommitFiberRoot(xi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : vd, md = Math.log, yd = Math.LN2;
  function vd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (md(e) / yd | 0) | 0;
  }
  var wi = 64, Si = 4194304;
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
  function _i(e, t) {
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
  function xd(e, t) {
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
  function wd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - Wt(o), g = 1 << s, S = i[s];
      S === -1 ? (!(g & n) || g & r) && (i[s] = xd(g, t)) : S <= t && (e.expiredLanes |= g), o &= ~g;
    }
  }
  function Io(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function qs() {
    var e = wi;
    return wi <<= 1, !(wi & 4194240) && (wi = 64), e;
  }
  function Ao(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function br(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
  }
  function Sd(e, t) {
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
  var Ue = 0;
  function $s(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gs, Ho, Vs, Ys, Xs, Fo = !1, ki = [], dn = null, fn = null, pn = null, zr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), hn = [], _d = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qs(e, t) {
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
        zr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cr.delete(t.pointerId);
    }
  }
  function Rr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && Ho(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function kd(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = Rr(dn, e, t, n, r, i), !0;
      case "dragenter":
        return fn = Rr(fn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = Rr(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return zr.set(o, Rr(zr.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Cr.set(o, Rr(Cr.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Ks(e) {
    var t = Tn(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ls(n), t !== null) {
            e.blockedOn = t, Xs(e.priority, function() {
              Vs(n);
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
  function Ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Gt = r, n.target.dispatchEvent(r), Gt = null;
      } else return t = Br(n), t !== null && Ho(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Zs(e, t, n) {
    Ei(e) && n.delete(t);
  }
  function Ed() {
    Fo = !1, dn !== null && Ei(dn) && (dn = null), fn !== null && Ei(fn) && (fn = null), pn !== null && Ei(pn) && (pn = null), zr.forEach(Zs), Cr.forEach(Zs);
  }
  function Or(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Ed)));
  }
  function Pr(e) {
    function t(i) {
      return Or(i, e);
    }
    if (0 < ki.length) {
      Or(ki[0], e);
      for (var n = 1; n < ki.length; n++) {
        var r = ki[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && Or(dn, e), fn !== null && Or(fn, e), pn !== null && Or(pn, e), zr.forEach(t), Cr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Ks(n), n.blockedOn === null && hn.shift();
  }
  var Xn = d.ReactCurrentBatchConfig, bi = !0;
  function bd(e, t, n, r) {
    var i = Ue, o = Xn.transition;
    Xn.transition = null;
    try {
      Ue = 1, Bo(e, t, n, r);
    } finally {
      Ue = i, Xn.transition = o;
    }
  }
  function zd(e, t, n, r) {
    var i = Ue, o = Xn.transition;
    Xn.transition = null;
    try {
      Ue = 4, Bo(e, t, n, r);
    } finally {
      Ue = i, Xn.transition = o;
    }
  }
  function Bo(e, t, n, r) {
    if (bi) {
      var i = Uo(e, t, n, r);
      if (i === null) ll(e, t, r, zi, n), Qs(e, r);
      else if (kd(i, e, t, n, r)) r.stopPropagation();
      else if (Qs(e, r), t & 4 && -1 < _d.indexOf(e)) {
        for (; i !== null; ) {
          var o = Br(i);
          if (o !== null && Gs(o), o = Uo(e, t, n, r), o === null && ll(e, t, r, zi, n), o === i) break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else ll(e, t, r, null, n);
    }
  }
  var zi = null;
  function Uo(e, t, n, r) {
    if (zi = null, e = jn(r), e = Tn(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ls(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return zi = e, null;
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
        switch (pd()) {
          case Lo:
            return 1;
          case Bs:
            return 4;
          case vi:
          case hd:
            return 16;
          case Us:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, qo = null, Ci = null;
  function ea() {
    if (Ci) return Ci;
    var e, t = qo, n = t.length, r, i = "value" in gn ? gn.value : gn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
    return Ci = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ri(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Oi() {
    return !0;
  }
  function ta() {
    return !1;
  }
  function Rt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(o) : o[g]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Oi : ta, this.isPropagationStopped = ta, this;
    }
    return U(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, $o = Rt(Qn), jr = U({}, Qn, { view: 0, detail: 0 }), Cd = Rt(jr), Go, Vo, Dr, Pi = U({}, jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (Go = e.screenX - Dr.screenX, Vo = e.screenY - Dr.screenY) : Vo = Go = 0, Dr = e), Go);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Vo;
  } }), na = Rt(Pi), Rd = U({}, Pi, { dataTransfer: 0 }), Od = Rt(Rd), Pd = U({}, jr, { relatedTarget: 0 }), Yo = Rt(Pd), jd = U({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dd = Rt(jd), Nd = U({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Td = Rt(Nd), Md = U({}, Qn, { data: 0 }), ra = Rt(Md), Ld = {
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
  }, Id = {
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
  }, Ad = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1;
  }
  function Xo() {
    return Wd;
  }
  var Hd = U({}, jr, { key: function(e) {
    if (e.key) {
      var t = Ld[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ri(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Id[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xo, charCode: function(e) {
    return e.type === "keypress" ? Ri(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Fd = Rt(Hd), Bd = U({}, Pi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ia = Rt(Bd), Ud = U({}, jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xo }), qd = Rt(Ud), $d = U({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = Rt($d), Vd = U({}, Pi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yd = Rt(Vd), Xd = [9, 13, 27, 32], Qo = Y && "CompositionEvent" in window, Nr = null;
  Y && "documentMode" in document && (Nr = document.documentMode);
  var Qd = Y && "TextEvent" in window && !Nr, oa = Y && (!Qo || Nr && 8 < Nr && 11 >= Nr), la = " ", sa = !1;
  function aa(e, t) {
    switch (e) {
      case "keyup":
        return Xd.indexOf(t.keyCode) !== -1;
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
  function Kd(e, t) {
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
  function Zd(e, t) {
    if (Kn) return e === "compositionend" || !Qo && aa(e, t) ? (e = ea(), Ci = qo = gn = null, Kn = !1, e) : null;
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
  var Jd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jd[e.type] : t === "textarea";
  }
  function da(e, t, n, r) {
    wr(r), t = Mi(t, "onChange"), 0 < t.length && (n = new $o("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Tr = null, Mr = null;
  function ef(e) {
    Oa(e, 0);
  }
  function ji(e) {
    var t = nr(e);
    if (Me(t)) return e;
  }
  function tf(e, t) {
    if (e === "change") return t;
  }
  var fa = !1;
  if (Y) {
    var Ko;
    if (Y) {
      var Zo = "oninput" in document;
      if (!Zo) {
        var pa = document.createElement("div");
        pa.setAttribute("oninput", "return;"), Zo = typeof pa.oninput == "function";
      }
      Ko = Zo;
    } else Ko = !1;
    fa = Ko && (!document.documentMode || 9 < document.documentMode);
  }
  function ha() {
    Tr && (Tr.detachEvent("onpropertychange", ga), Mr = Tr = null);
  }
  function ga(e) {
    if (e.propertyName === "value" && ji(Mr)) {
      var t = [];
      da(t, Mr, e, jn(e)), Ms(ef, t);
    }
  }
  function nf(e, t, n) {
    e === "focusin" ? (ha(), Tr = t, Mr = n, Tr.attachEvent("onpropertychange", ga)) : e === "focusout" && ha();
  }
  function rf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ji(Mr);
  }
  function of(e, t) {
    if (e === "click") return ji(t);
  }
  function lf(e, t) {
    if (e === "input" || e === "change") return ji(t);
  }
  function sf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : sf;
  function Lr(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!M.call(t, i) || !Ht(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ma(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ya(e, t) {
    var n = ma(e);
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
      n = ma(n);
    }
  }
  function va(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? va(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function xa() {
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
  function af(e) {
    var t = xa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && va(n.ownerDocument.documentElement, n)) {
      if (r !== null && Jo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ya(n, o);
          var s = ya(
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
  var uf = Y && "documentMode" in document && 11 >= document.documentMode, Zn = null, el = null, Ir = null, tl = !1;
  function wa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tl || Zn == null || Zn !== Fe(r) || (r = Zn, "selectionStart" in r && Jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Lr(Ir, r) || (Ir = r, r = Mi(el, "onSelect"), 0 < r.length && (t = new $o("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Di("Animation", "AnimationEnd"), animationiteration: Di("Animation", "AnimationIteration"), animationstart: Di("Animation", "AnimationStart"), transitionend: Di("Transition", "TransitionEnd") }, nl = {}, Sa = {};
  Y && (Sa = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Ni(e) {
    if (nl[e]) return nl[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Sa) return nl[e] = t[n];
    return e;
  }
  var _a = Ni("animationend"), ka = Ni("animationiteration"), Ea = Ni("animationstart"), ba = Ni("transitionend"), za = /* @__PURE__ */ new Map(), Ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    za.set(e, t), P(t, [e]);
  }
  for (var rl = 0; rl < Ca.length; rl++) {
    var il = Ca[rl], cf = il.toLowerCase(), df = il[0].toUpperCase() + il.slice(1);
    mn(cf, "on" + df);
  }
  mn(_a, "onAnimationEnd"), mn(ka, "onAnimationIteration"), mn(Ea, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(ba, "onTransitionEnd"), I("onMouseEnter", ["mouseout", "mouseover"]), I("onMouseLeave", ["mouseout", "mouseover"]), I("onPointerEnter", ["pointerout", "pointerover"]), I("onPointerLeave", ["pointerout", "pointerover"]), P("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), P("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), P("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), P("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), P("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), P("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ff = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
  function Ra(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ud(r, t, void 0, e), e.currentTarget = null;
  }
  function Oa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var g = r[s], S = g.instance, T = g.currentTarget;
          if (g = g.listener, S !== o && i.isPropagationStopped()) break e;
          Ra(i, g, T), o = S;
        }
        else for (s = 0; s < r.length; s++) {
          if (g = r[s], S = g.instance, T = g.currentTarget, g = g.listener, S !== o && i.isPropagationStopped()) break e;
          Ra(i, g, T), o = S;
        }
      }
    }
    if (yi) throw e = Mo, yi = !1, Mo = null, e;
  }
  function Ye(e, t) {
    var n = t[fl];
    n === void 0 && (n = t[fl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Pa(t, e, 2, !1), n.add(r));
  }
  function ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Pa(n, e, r, t);
  }
  var Ti = "_reactListening" + Math.random().toString(36).slice(2);
  function Wr(e) {
    if (!e[Ti]) {
      e[Ti] = !0, f.forEach(function(n) {
        n !== "selectionchange" && (ff.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ti] || (t[Ti] = !0, ol("selectionchange", !1, t));
    }
  }
  function Pa(e, t, n, r) {
    switch (Js(t)) {
      case 1:
        var i = bd;
        break;
      case 4:
        i = zd;
        break;
      default:
        i = Bo;
    }
    n = i.bind(null, t, n, e), i = void 0, !To || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
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
          var S = s.tag;
          if ((S === 3 || S === 4) && (S = s.stateNode.containerInfo, S === i || S.nodeType === 8 && S.parentNode === i)) return;
          s = s.return;
        }
        for (; g !== null; ) {
          if (s = Tn(g), s === null) return;
          if (S = s.tag, S === 5 || S === 6) {
            r = o = s;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ms(function() {
      var T = o, Q = jn(n), J = [];
      e: {
        var X = za.get(e);
        if (X !== void 0) {
          var ce = $o, fe = e;
          switch (e) {
            case "keypress":
              if (Ri(n) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Fd;
              break;
            case "focusin":
              fe = "focus", ce = Yo;
              break;
            case "focusout":
              fe = "blur", ce = Yo;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Yo;
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
              ce = na;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Od;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = qd;
              break;
            case _a:
            case ka:
            case Ea:
              ce = Dd;
              break;
            case ba:
              ce = Gd;
              break;
            case "scroll":
              ce = Cd;
              break;
            case "wheel":
              ce = Yd;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Td;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = ia;
          }
          var he = (t & 4) !== 0, it = !he && e === "scroll", R = he ? X !== null ? X + "Capture" : null : X;
          he = [];
          for (var E = T, j; E !== null; ) {
            j = E;
            var ne = j.stateNode;
            if (j.tag === 5 && ne !== null && (j = ne, R !== null && (ne = Sr(E, R), ne != null && he.push(Hr(E, ne, j)))), it) break;
            E = E.return;
          }
          0 < he.length && (X = new ce(X, fe, null, n, Q), J.push({ event: X, listeners: he }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", X && n !== Gt && (fe = n.relatedTarget || n.fromElement) && (Tn(fe) || fe[Jt])) break e;
          if ((ce || X) && (X = Q.window === Q ? Q : (X = Q.ownerDocument) ? X.defaultView || X.parentWindow : window, ce ? (fe = n.relatedTarget || n.toElement, ce = T, fe = fe ? Tn(fe) : null, fe !== null && (it = Nn(fe), fe !== it || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ce = null, fe = T), ce !== fe)) {
            if (he = na, ne = "onMouseLeave", R = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (he = ia, ne = "onPointerLeave", R = "onPointerEnter", E = "pointer"), it = ce == null ? X : nr(ce), j = fe == null ? X : nr(fe), X = new he(ne, E + "leave", ce, n, Q), X.target = it, X.relatedTarget = j, ne = null, Tn(Q) === T && (he = new he(R, E + "enter", fe, n, Q), he.target = j, he.relatedTarget = it, ne = he), it = ne, ce && fe) t: {
              for (he = ce, R = fe, E = 0, j = he; j; j = er(j)) E++;
              for (j = 0, ne = R; ne; ne = er(ne)) j++;
              for (; 0 < E - j; ) he = er(he), E--;
              for (; 0 < j - E; ) R = er(R), j--;
              for (; E--; ) {
                if (he === R || R !== null && he === R.alternate) break t;
                he = er(he), R = er(R);
              }
              he = null;
            }
            else he = null;
            ce !== null && ja(J, X, ce, he, !1), fe !== null && it !== null && ja(J, it, fe, he, !0);
          }
        }
        e: {
          if (X = T ? nr(T) : window, ce = X.nodeName && X.nodeName.toLowerCase(), ce === "select" || ce === "input" && X.type === "file") var ve = tf;
          else if (ca(X)) if (fa) ve = lf;
          else {
            ve = rf;
            var Se = nf;
          }
          else (ce = X.nodeName) && ce.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (ve = of);
          if (ve && (ve = ve(e, T))) {
            da(J, ve, n, Q);
            break e;
          }
          Se && Se(e, X, T), e === "focusout" && (Se = X._wrapperState) && Se.controlled && X.type === "number" && q(X, "number", X.value);
        }
        switch (Se = T ? nr(T) : window, e) {
          case "focusin":
            (ca(Se) || Se.contentEditable === "true") && (Zn = Se, el = T, Ir = null);
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
            tl = !1, wa(J, n, Q);
            break;
          case "selectionchange":
            if (uf) break;
          case "keydown":
          case "keyup":
            wa(J, n, Q);
        }
        var _e;
        if (Qo) e: {
          switch (e) {
            case "compositionstart":
              var Ce = "onCompositionStart";
              break e;
            case "compositionend":
              Ce = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ce = "onCompositionUpdate";
              break e;
          }
          Ce = void 0;
        }
        else Kn ? aa(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (oa && n.locale !== "ko" && (Kn || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Kn && (_e = ea()) : (gn = Q, qo = "value" in gn ? gn.value : gn.textContent, Kn = !0)), Se = Mi(T, Ce), 0 < Se.length && (Ce = new ra(Ce, e, null, n, Q), J.push({ event: Ce, listeners: Se }), _e ? Ce.data = _e : (_e = ua(n), _e !== null && (Ce.data = _e)))), (_e = Qd ? Kd(e, n) : Zd(e, n)) && (T = Mi(T, "onBeforeInput"), 0 < T.length && (Q = new ra("onBeforeInput", "beforeinput", null, n, Q), J.push({ event: Q, listeners: T }), Q.data = _e));
      }
      Oa(J, t);
    });
  }
  function Hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Mi(e, t) {
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
      var g = n, S = g.alternate, T = g.stateNode;
      if (S !== null && S === r) break;
      g.tag === 5 && T !== null && (g = T, i ? (S = Sr(n, o), S != null && s.unshift(Hr(n, S, g))) : i || (S = Sr(n, o), S != null && s.push(Hr(n, S, g)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var pf = /\r\n?/g, hf = /\u0000|\uFFFD/g;
  function Da(e) {
    return (typeof e == "string" ? e : "" + e).replace(pf, `
`).replace(hf, "");
  }
  function Li(e, t, n) {
    if (t = Da(t), Da(e) !== t && n) throw Error(l(425));
  }
  function Ii() {
  }
  var sl = null, al = null;
  function ul(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, gf = typeof clearTimeout == "function" ? clearTimeout : void 0, Na = typeof Promise == "function" ? Promise : void 0, mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Na < "u" ? function(e) {
    return Na.resolve(null).then(e).catch(yf);
  } : cl;
  function yf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function dl(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Pr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Pr(t);
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
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Fr = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, fl = "__reactEvents$" + tr, vf = "__reactListeners$" + tr, xf = "__reactHandles$" + tr;
  function Tn(e) {
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
  function Ai(e) {
    return e[Fr] || null;
  }
  var pl = [], rr = -1;
  function vn(e) {
    return { current: e };
  }
  function Xe(e) {
    0 > rr || (e.current = pl[rr], pl[rr] = null, rr--);
  }
  function Ve(e, t) {
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
  function _t(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wi() {
    Xe(St), Xe(gt);
  }
  function Ma(e, t, n) {
    if (gt.current !== xn) throw Error(l(168));
    Ve(gt, t), Ve(St, n);
  }
  function La(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(l(108, De(e) || "Unknown", i));
    return U({}, n, r);
  }
  function Hi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Mn = gt.current, Ve(gt, e), Ve(St, St.current), !0;
  }
  function Ia(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = La(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, Xe(St), Xe(gt), Ve(gt, e)) : Xe(St), Ve(St, n);
  }
  var en = null, Fi = !1, hl = !1;
  function Aa(e) {
    en === null ? en = [e] : en.push(e);
  }
  function wf(e) {
    Fi = !0, Aa(e);
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
        en = null, Fi = !1;
      } catch (i) {
        throw en !== null && (en = en.slice(e + 1)), Hs(Lo, wn), i;
      } finally {
        Ue = t, hl = !1;
      }
    }
    return null;
  }
  var or = [], lr = 0, Bi = null, Ui = 0, Dt = [], Nt = 0, Ln = null, tn = 1, nn = "";
  function In(e, t) {
    or[lr++] = Ui, or[lr++] = Bi, Bi = e, Ui = t;
  }
  function Wa(e, t, n) {
    Dt[Nt++] = tn, Dt[Nt++] = nn, Dt[Nt++] = Ln, Ln = e;
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
  function gl(e) {
    e.return !== null && (In(e, 1), Wa(e, 1, 0));
  }
  function ml(e) {
    for (; e === Bi; ) Bi = or[--lr], or[lr] = null, Ui = or[--lr], or[lr] = null;
    for (; e === Ln; ) Ln = Dt[--Nt], Dt[Nt] = null, nn = Dt[--Nt], Dt[Nt] = null, tn = Dt[--Nt], Dt[Nt] = null;
  }
  var Ot = null, Pt = null, Ze = !1, Ft = null;
  function Ha(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ot = e, Pt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ot = e, Pt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ot = e, Pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (Ze) {
      var t = Pt;
      if (t) {
        var n = t;
        if (!Fa(e, t)) {
          if (yl(e)) throw Error(l(418));
          t = yn(n.nextSibling);
          var r = Ot;
          t && Fa(e, t) ? Ha(r, n) : (e.flags = e.flags & -4097 | 2, Ze = !1, Ot = e);
        }
      } else {
        if (yl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ze = !1, Ot = e;
      }
    }
  }
  function Ba(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ot = e;
  }
  function qi(e) {
    if (e !== Ot) return !1;
    if (!Ze) return Ba(e), Ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps)), t && (t = Pt)) {
      if (yl(e)) throw Ua(), Error(l(418));
      for (; t; ) Ha(e, t), t = yn(t.nextSibling);
    }
    if (Ba(e), e.tag === 13) {
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
  function Ua() {
    for (var e = Pt; e; ) e = yn(e.nextSibling);
  }
  function sr() {
    Pt = Ot = null, Ze = !1;
  }
  function xl(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var Sf = d.ReactCurrentBatchConfig;
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
  function $i(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $a(e) {
    function t(R, E) {
      if (e) {
        var j = R.deletions;
        j === null ? (R.deletions = [E], R.flags |= 16) : j.push(E);
      }
    }
    function n(R, E) {
      if (!e) return null;
      for (; E !== null; ) t(R, E), E = E.sibling;
      return null;
    }
    function r(R, E) {
      for (R = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? R.set(E.key, E) : R.set(E.index, E), E = E.sibling;
      return R;
    }
    function i(R, E) {
      return R = Rn(R, E), R.index = 0, R.sibling = null, R;
    }
    function o(R, E, j) {
      return R.index = j, e ? (j = R.alternate, j !== null ? (j = j.index, j < E ? (R.flags |= 2, E) : j) : (R.flags |= 2, E)) : (R.flags |= 1048576, E);
    }
    function s(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function g(R, E, j, ne) {
      return E === null || E.tag !== 6 ? (E = cs(j, R.mode, ne), E.return = R, E) : (E = i(E, j), E.return = R, E);
    }
    function S(R, E, j, ne) {
      var ve = j.type;
      return ve === z ? Q(R, E, j.props.children, ne, j.key) : E !== null && (E.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && qa(ve) === E.type) ? (ne = i(E, j.props), ne.ref = Ur(R, E, j), ne.return = R, ne) : (ne = mo(j.type, j.key, j.props, null, R.mode, ne), ne.ref = Ur(R, E, j), ne.return = R, ne);
    }
    function T(R, E, j, ne) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== j.containerInfo || E.stateNode.implementation !== j.implementation ? (E = ds(j, R.mode, ne), E.return = R, E) : (E = i(E, j.children || []), E.return = R, E);
    }
    function Q(R, E, j, ne, ve) {
      return E === null || E.tag !== 7 ? (E = $n(j, R.mode, ne, ve), E.return = R, E) : (E = i(E, j), E.return = R, E);
    }
    function J(R, E, j) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return E = cs("" + E, R.mode, j), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case p:
            return j = mo(E.type, E.key, E.props, null, R.mode, j), j.ref = Ur(R, null, E), j.return = R, j;
          case m:
            return E = ds(E, R.mode, j), E.return = R, E;
          case pe:
            var ne = E._init;
            return J(R, ne(E._payload), j);
        }
        if (oe(E) || W(E)) return E = $n(E, R.mode, j, null), E.return = R, E;
        $i(R, E);
      }
      return null;
    }
    function X(R, E, j, ne) {
      var ve = E !== null ? E.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return ve !== null ? null : g(R, E, "" + j, ne);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case p:
            return j.key === ve ? S(R, E, j, ne) : null;
          case m:
            return j.key === ve ? T(R, E, j, ne) : null;
          case pe:
            return ve = j._init, X(
              R,
              E,
              ve(j._payload),
              ne
            );
        }
        if (oe(j) || W(j)) return ve !== null ? null : Q(R, E, j, ne, null);
        $i(R, j);
      }
      return null;
    }
    function ce(R, E, j, ne, ve) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return R = R.get(j) || null, g(E, R, "" + ne, ve);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case p:
            return R = R.get(ne.key === null ? j : ne.key) || null, S(E, R, ne, ve);
          case m:
            return R = R.get(ne.key === null ? j : ne.key) || null, T(E, R, ne, ve);
          case pe:
            var Se = ne._init;
            return ce(R, E, j, Se(ne._payload), ve);
        }
        if (oe(ne) || W(ne)) return R = R.get(j) || null, Q(E, R, ne, ve, null);
        $i(E, ne);
      }
      return null;
    }
    function fe(R, E, j, ne) {
      for (var ve = null, Se = null, _e = E, Ce = E = 0, dt = null; _e !== null && Ce < j.length; Ce++) {
        _e.index > Ce ? (dt = _e, _e = null) : dt = _e.sibling;
        var He = X(R, _e, j[Ce], ne);
        if (He === null) {
          _e === null && (_e = dt);
          break;
        }
        e && _e && He.alternate === null && t(R, _e), E = o(He, E, Ce), Se === null ? ve = He : Se.sibling = He, Se = He, _e = dt;
      }
      if (Ce === j.length) return n(R, _e), Ze && In(R, Ce), ve;
      if (_e === null) {
        for (; Ce < j.length; Ce++) _e = J(R, j[Ce], ne), _e !== null && (E = o(_e, E, Ce), Se === null ? ve = _e : Se.sibling = _e, Se = _e);
        return Ze && In(R, Ce), ve;
      }
      for (_e = r(R, _e); Ce < j.length; Ce++) dt = ce(_e, R, Ce, j[Ce], ne), dt !== null && (e && dt.alternate !== null && _e.delete(dt.key === null ? Ce : dt.key), E = o(dt, E, Ce), Se === null ? ve = dt : Se.sibling = dt, Se = dt);
      return e && _e.forEach(function(On) {
        return t(R, On);
      }), Ze && In(R, Ce), ve;
    }
    function he(R, E, j, ne) {
      var ve = W(j);
      if (typeof ve != "function") throw Error(l(150));
      if (j = ve.call(j), j == null) throw Error(l(151));
      for (var Se = ve = null, _e = E, Ce = E = 0, dt = null, He = j.next(); _e !== null && !He.done; Ce++, He = j.next()) {
        _e.index > Ce ? (dt = _e, _e = null) : dt = _e.sibling;
        var On = X(R, _e, He.value, ne);
        if (On === null) {
          _e === null && (_e = dt);
          break;
        }
        e && _e && On.alternate === null && t(R, _e), E = o(On, E, Ce), Se === null ? ve = On : Se.sibling = On, Se = On, _e = dt;
      }
      if (He.done) return n(
        R,
        _e
      ), Ze && In(R, Ce), ve;
      if (_e === null) {
        for (; !He.done; Ce++, He = j.next()) He = J(R, He.value, ne), He !== null && (E = o(He, E, Ce), Se === null ? ve = He : Se.sibling = He, Se = He);
        return Ze && In(R, Ce), ve;
      }
      for (_e = r(R, _e); !He.done; Ce++, He = j.next()) He = ce(_e, R, Ce, He.value, ne), He !== null && (e && He.alternate !== null && _e.delete(He.key === null ? Ce : He.key), E = o(He, E, Ce), Se === null ? ve = He : Se.sibling = He, Se = He);
      return e && _e.forEach(function(ep) {
        return t(R, ep);
      }), Ze && In(R, Ce), ve;
    }
    function it(R, E, j, ne) {
      if (typeof j == "object" && j !== null && j.type === z && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case p:
            e: {
              for (var ve = j.key, Se = E; Se !== null; ) {
                if (Se.key === ve) {
                  if (ve = j.type, ve === z) {
                    if (Se.tag === 7) {
                      n(R, Se.sibling), E = i(Se, j.props.children), E.return = R, R = E;
                      break e;
                    }
                  } else if (Se.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && qa(ve) === Se.type) {
                    n(R, Se.sibling), E = i(Se, j.props), E.ref = Ur(R, Se, j), E.return = R, R = E;
                    break e;
                  }
                  n(R, Se);
                  break;
                } else t(R, Se);
                Se = Se.sibling;
              }
              j.type === z ? (E = $n(j.props.children, R.mode, ne, j.key), E.return = R, R = E) : (ne = mo(j.type, j.key, j.props, null, R.mode, ne), ne.ref = Ur(R, E, j), ne.return = R, R = ne);
            }
            return s(R);
          case m:
            e: {
              for (Se = j.key; E !== null; ) {
                if (E.key === Se) if (E.tag === 4 && E.stateNode.containerInfo === j.containerInfo && E.stateNode.implementation === j.implementation) {
                  n(R, E.sibling), E = i(E, j.children || []), E.return = R, R = E;
                  break e;
                } else {
                  n(R, E);
                  break;
                }
                else t(R, E);
                E = E.sibling;
              }
              E = ds(j, R.mode, ne), E.return = R, R = E;
            }
            return s(R);
          case pe:
            return Se = j._init, it(R, E, Se(j._payload), ne);
        }
        if (oe(j)) return fe(R, E, j, ne);
        if (W(j)) return he(R, E, j, ne);
        $i(R, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, E !== null && E.tag === 6 ? (n(R, E.sibling), E = i(E, j), E.return = R, R = E) : (n(R, E), E = cs(j, R.mode, ne), E.return = R, R = E), s(R)) : n(R, E);
    }
    return it;
  }
  var ar = $a(!0), Ga = $a(!1), Gi = vn(null), Vi = null, ur = null, wl = null;
  function Sl() {
    wl = ur = Vi = null;
  }
  function _l(e) {
    var t = Gi.current;
    Xe(Gi), e._currentValue = t;
  }
  function kl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    Vi = e, wl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (kt = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (wl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if (Vi === null) throw Error(l(308));
      ur = e, Vi.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var An = null;
  function El(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Va(e, t, n, r) {
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
  function bl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ya(e, t) {
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
    return i = r.interleaved, i === null ? (t.next = t, El(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function Yi(e, t, n) {
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
  function Xi(e, t, n, r) {
    var i = e.updateQueue;
    Sn = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var S = g, T = S.next;
      S.next = null, s === null ? o = T : s.next = T, s = S;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, g = Q.lastBaseUpdate, g !== s && (g === null ? Q.firstBaseUpdate = T : g.next = T, Q.lastBaseUpdate = S));
    }
    if (o !== null) {
      var J = i.baseState;
      s = 0, Q = T = S = null, g = o;
      do {
        var X = g.lane, ce = g.eventTime;
        if ((r & X) === X) {
          Q !== null && (Q = Q.next = {
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
                J = U({}, J, X);
                break e;
              case 2:
                Sn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, X = i.effects, X === null ? i.effects = [g] : X.push(g));
        } else ce = { eventTime: ce, lane: X, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, Q === null ? (T = Q = ce, S = J) : Q = Q.next = ce, s |= X;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null) break;
          X = g, g = X.next, X.next = null, i.lastBaseUpdate = X, i.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (S = J), i.baseState = S, i.firstBaseUpdate = T, i.lastBaseUpdate = Q, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      Fn |= s, e.lanes = s, e.memoizedState = J;
    }
  }
  function Qa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(l(191, i));
        i.call(r);
      }
    }
  }
  var qr = {}, Xt = vn(qr), $r = vn(qr), Gr = vn(qr);
  function Wn(e) {
    if (e === qr) throw Error(l(174));
    return e;
  }
  function zl(e, t) {
    switch (Ve(Gr, t), Ve($r, e), Ve(Xt, qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : at(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = at(t, e);
    }
    Xe(Xt), Ve(Xt, t);
  }
  function dr() {
    Xe(Xt), Xe($r), Xe(Gr);
  }
  function Ka(e) {
    Wn(Gr.current);
    var t = Wn(Xt.current), n = at(t, e.type);
    t !== n && (Ve($r, e), Ve(Xt, n));
  }
  function Cl(e) {
    $r.current === e && (Xe(Xt), Xe($r));
  }
  var Je = vn(0);
  function Qi(e) {
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
  var Rl = [];
  function Ol() {
    for (var e = 0; e < Rl.length; e++) Rl[e]._workInProgressVersionPrimary = null;
    Rl.length = 0;
  }
  var Ki = d.ReactCurrentDispatcher, Pl = d.ReactCurrentBatchConfig, Hn = 0, et = null, lt = null, ut = null, Zi = !1, Vr = !1, Yr = 0, _f = 0;
  function mt() {
    throw Error(l(321));
  }
  function jl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Dl(e, t, n, r, i, o) {
    if (Hn = o, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ki.current = e === null || e.memoizedState === null ? zf : Cf, e = n(r, i), Vr) {
      o = 0;
      do {
        if (Vr = !1, Yr = 0, 25 <= o) throw Error(l(301));
        o += 1, ut = lt = null, t.updateQueue = null, Ki.current = Rf, e = n(r, i);
      } while (Vr);
    }
    if (Ki.current = to, t = lt !== null && lt.next !== null, Hn = 0, ut = lt = et = null, Zi = !1, t) throw Error(l(300));
    return e;
  }
  function Nl() {
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
  function Tl(e) {
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
      var g = s = null, S = null, T = o;
      do {
        var Q = T.lane;
        if ((Hn & Q) === Q) S !== null && (S = S.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), r = T.hasEagerState ? T.eagerState : e(r, T.action);
        else {
          var J = {
            lane: Q,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          S === null ? (g = S = J, s = r) : S = S.next = J, et.lanes |= Q, Fn |= Q;
        }
        T = T.next;
      } while (T !== null && T !== o);
      S === null ? s = r : S.next = g, Ht(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = S, n.lastRenderedState = r;
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
      Ht(o, t.memoizedState) || (kt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Za() {
  }
  function Ja(e, t) {
    var n = et, r = Mt(), i = t(), o = !Ht(r.memoizedState, i);
    if (o && (r.memoizedState = i, kt = !0), r = r.queue, Ll(nu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ut !== null && ut.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qr(9, tu.bind(null, n, r, i, t), void 0, null), ct === null) throw Error(l(349));
      Hn & 30 || eu(n, t, i);
    }
    return i;
  }
  function eu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function iu(e) {
    var t = rn(e, 1);
    t !== null && $t(t, e, 1, -1);
  }
  function ou(e) {
    var t = Qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = bf.bind(null, et, e), [t.memoizedState, e];
  }
  function Qr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function lu() {
    return Mt().memoizedState;
  }
  function Ji(e, t, n, r) {
    var i = Qt();
    et.flags |= e, i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function eo(e, t, n, r) {
    var i = Mt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (lt !== null) {
      var s = lt.memoizedState;
      if (o = s.destroy, r !== null && jl(r, s.deps)) {
        i.memoizedState = Qr(t, n, o, r);
        return;
      }
    }
    et.flags |= e, i.memoizedState = Qr(1 | t, n, o, r);
  }
  function su(e, t) {
    return Ji(8390656, 8, e, t);
  }
  function Ll(e, t) {
    return eo(2048, 8, e, t);
  }
  function au(e, t) {
    return eo(4, 2, e, t);
  }
  function uu(e, t) {
    return eo(4, 4, e, t);
  }
  function cu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function du(e, t, n) {
    return n = n != null ? n.concat([e]) : null, eo(4, 4, cu.bind(null, t, e), n);
  }
  function Il() {
  }
  function fu(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function pu(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && jl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function hu(e, t, n) {
    return Hn & 21 ? (Ht(n, t) || (n = qs(), et.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n);
  }
  function kf(e, t) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Pl.transition;
    Pl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = n, Pl.transition = r;
    }
  }
  function gu() {
    return Mt().memoizedState;
  }
  function Ef(e, t, n) {
    var r = zn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mu(e)) yu(t, n);
    else if (n = Va(e, t, n, r), n !== null) {
      var i = wt();
      $t(n, e, r, i), vu(n, t, r);
    }
  }
  function bf(e, t, n) {
    var r = zn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mu(e)) yu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var s = t.lastRenderedState, g = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = g, Ht(g, s)) {
          var S = t.interleaved;
          S === null ? (i.next = i, El(t)) : (i.next = S.next, S.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = Va(e, t, i, r), n !== null && (i = wt(), $t(n, e, r, i), vu(n, t, r));
    }
  }
  function mu(e) {
    var t = e.alternate;
    return e === et || t !== null && t === et;
  }
  function yu(e, t) {
    Vr = Zi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wo(e, n);
    }
  }
  var to = { readContext: Tt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, zf = { readContext: Tt, useCallback: function(e, t) {
    return Qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: su, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ji(
      4194308,
      4,
      cu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ji(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ji(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ef.bind(null, et, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ou, useDebugValue: Il, useDeferredValue: function(e) {
    return Qt().memoizedState = e;
  }, useTransition: function() {
    var e = ou(!1), t = e[0];
    return e = kf.bind(null, e[1]), Qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = et, i = Qt();
    if (Ze) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), ct === null) throw Error(l(349));
      Hn & 30 || eu(r, t, n);
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
    var e = Qt(), t = ct.identifierPrefix;
    if (Ze) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = _f++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Cf = {
    readContext: Tt,
    useCallback: fu,
    useContext: Tt,
    useEffect: Ll,
    useImperativeHandle: du,
    useInsertionEffect: au,
    useLayoutEffect: uu,
    useMemo: pu,
    useReducer: Tl,
    useRef: lu,
    useState: function() {
      return Tl(Xr);
    },
    useDebugValue: Il,
    useDeferredValue: function(e) {
      var t = Mt();
      return hu(t, lt.memoizedState, e);
    },
    useTransition: function() {
      var e = Tl(Xr)[0], t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Za,
    useSyncExternalStore: Ja,
    useId: gu,
    unstable_isNewReconciler: !1
  }, Rf = { readContext: Tt, useCallback: fu, useContext: Tt, useEffect: Ll, useImperativeHandle: du, useInsertionEffect: au, useLayoutEffect: uu, useMemo: pu, useReducer: Ml, useRef: lu, useState: function() {
    return Ml(Xr);
  }, useDebugValue: Il, useDeferredValue: function(e) {
    var t = Mt();
    return lt === null ? t.memoizedState = e : hu(t, lt.memoizedState, e);
  }, useTransition: function() {
    var e = Ml(Xr)[0], t = Mt().memoizedState;
    return [e, t];
  }, useMutableSource: Za, useSyncExternalStore: Ja, useId: gu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = U({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Al(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var no = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = zn(e), o = on(r, i);
    o.payload = t, n != null && (o.callback = n), t = _n(e, o, i), t !== null && ($t(t, e, i, r), Yi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = zn(e), o = on(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = _n(e, o, i), t !== null && ($t(t, e, i, r), Yi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = wt(), r = zn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = _n(e, i, r), t !== null && ($t(t, e, r, n), Yi(t, e, r));
  } };
  function xu(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(i, o) : !0;
  }
  function wu(e, t, n) {
    var r = !1, i = xn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Tt(o) : (i = _t(t) ? Mn : gt.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : xn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = no, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Su(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && no.enqueueReplaceState(t, t.state, null);
  }
  function Wl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, bl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Tt(o) : (o = _t(t) ? Mn : gt.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Al(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && no.enqueueReplaceState(i, i.state, null), Xi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Re(r), r = r.return;
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
  var Of = typeof WeakMap == "function" ? WeakMap : Map;
  function _u(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      uo || (uo = !0, ns = r), Fl(e, t);
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
  function Eu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Of();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Uf.bind(null, e, t, n), t.then(e, e));
  }
  function bu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function zu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, _n(n, t, 1))), n.lanes |= 1), e);
  }
  var Pf = d.ReactCurrentOwner, kt = !1;
  function xt(e, t, n, r) {
    t.child = e === null ? Ga(t, null, n, r) : ar(t, e.child, n, r);
  }
  function Cu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = Dl(e, t, n, r, o, i), n = Nl(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && n && gl(t), t.flags |= 1, xt(e, t, r, i), t.child);
  }
  function Ru(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !us(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ou(e, t, o, r, i)) : (e = mo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Lr, n(s, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Rn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ou(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Lr(o, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (kt = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return Bl(e, t, n, r, i);
  }
  function Pu(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(hr, jt), jt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ve(hr, jt), jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ve(hr, jt), jt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ve(hr, jt), jt |= r;
    return xt(e, t, i, n), t.child;
  }
  function ju(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, r, i) {
    var o = _t(n) ? Mn : gt.current;
    return o = ir(t, o), cr(t, i), n = Dl(e, t, n, r, o, i), r = Nl(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && r && gl(t), t.flags |= 1, xt(e, t, n, i), t.child);
  }
  function Du(e, t, n, r, i) {
    if (_t(n)) {
      var o = !0;
      Hi(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) io(e, t), wu(t, n, r), Wl(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, g = t.memoizedProps;
      s.props = g;
      var S = s.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = Tt(T) : (T = _t(n) ? Mn : gt.current, T = ir(t, T));
      var Q = n.getDerivedStateFromProps, J = typeof Q == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      J || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== r || S !== T) && Su(t, s, r, T), Sn = !1;
      var X = t.memoizedState;
      s.state = X, Xi(t, r, s, i), S = t.memoizedState, g !== r || X !== S || St.current || Sn ? (typeof Q == "function" && (Al(t, n, Q, r), S = t.memoizedState), (g = Sn || xu(t, n, g, r, X, S, T)) ? (J || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = T, r = g) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Ya(e, t), g = t.memoizedProps, T = t.type === t.elementType ? g : Bt(t.type, g), s.props = T, J = t.pendingProps, X = s.context, S = n.contextType, typeof S == "object" && S !== null ? S = Tt(S) : (S = _t(n) ? Mn : gt.current, S = ir(t, S));
      var ce = n.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== J || X !== S) && Su(t, s, r, S), Sn = !1, X = t.memoizedState, s.state = X, Xi(t, r, s, i);
      var fe = t.memoizedState;
      g !== J || X !== fe || St.current || Sn ? (typeof ce == "function" && (Al(t, n, ce, r), fe = t.memoizedState), (T = Sn || xu(t, n, T, r, X, fe, S) || !1) ? (Q || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, fe, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, fe, S)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = fe), s.props = r, s.state = fe, s.context = S, r = T) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ul(e, t, n, r, o, i);
  }
  function Ul(e, t, n, r, i, o) {
    ju(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Ia(t, n, !1), ln(e, t, o);
    r = t.stateNode, Pf.current = t;
    var g = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, g, o)) : xt(e, t, g, o), t.memoizedState = r.state, i && Ia(t, n, !0), t.child;
  }
  function Nu(e) {
    var t = e.stateNode;
    t.pendingContext ? Ma(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(e, t.context, !1), zl(e, t.containerInfo);
  }
  function Tu(e, t, n, r, i) {
    return sr(), xl(i), t.flags |= 256, xt(e, t, n, r), t.child;
  }
  var ql = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $l(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mu(e, t, n) {
    var r = t.pendingProps, i = Je.current, o = !1, s = (t.flags & 128) !== 0, g;
    if ((g = s) || (g = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), g ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ve(Je, i & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = yo(s, r, 0, null), e = $n(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $l(n), t.memoizedState = ql, e) : Gl(t, s));
    if (i = e.memoizedState, i !== null && (g = i.dehydrated, g !== null)) return jf(e, t, s, r, g, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, g = i.sibling;
      var S = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = S, t.deletions = null) : (r = Rn(i, S), r.subtreeFlags = i.subtreeFlags & 14680064), g !== null ? o = Rn(g, o) : (o = $n(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? $l(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ql, r;
    }
    return o = e.child, e = o.sibling, r = Rn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Gl(e, t) {
    return t = yo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ro(e, t, n, r) {
    return r !== null && xl(r), ar(t, e.child, null, n), e = Gl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function jf(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Hl(Error(l(422))), ro(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = yo({ mode: "visible", children: r.children }, i, 0, null), o = $n(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = $l(s), t.memoizedState = ql, o);
    if (!(t.mode & 1)) return ro(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var g = r.dgst;
      return r = g, o = Error(l(419)), r = Hl(o, r, void 0), ro(e, t, s, r);
    }
    if (g = (s & e.childLanes) !== 0, kt || g) {
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
      return as(), r = Hl(Error(l(421))), ro(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qf.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Pt = yn(i.nextSibling), Ot = t, Ze = !0, Ft = null, e !== null && (Dt[Nt++] = tn, Dt[Nt++] = nn, Dt[Nt++] = Ln, tn = e.id, nn = e.overflow, Ln = t), t = Gl(t, r.children), t.flags |= 4096, t);
  }
  function Lu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), kl(e.return, t, n);
  }
  function Vl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Iu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (xt(e, t, r.children, n), r = Je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lu(e, n, t);
        else if (e.tag === 19) Lu(e, n, t);
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
    if (Ve(Je, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Qi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Vl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Qi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Vl(t, !0, n, null, o);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function io(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Df(e, t, n) {
    switch (t.tag) {
      case 3:
        Nu(t), sr();
        break;
      case 5:
        Ka(t);
        break;
      case 1:
        _t(t.type) && Hi(t);
        break;
      case 4:
        zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ve(Gi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ve(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mu(e, t, n) : (Ve(Je, Je.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
        Ve(Je, Je.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Iu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ve(Je, Je.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Pu(e, t, n);
    }
    return ln(e, t, n);
  }
  var Au, Yl, Wu, Hu;
  Au = function(e, t) {
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
          i = $e(e, i), r = $e(e, r), o = [];
          break;
        case "select":
          i = U({}, i, { value: void 0 }), r = U({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Ee(e, i), r = Ee(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ii);
      }
      ft(n, r);
      var s;
      n = null;
      for (T in i) if (!r.hasOwnProperty(T) && i.hasOwnProperty(T) && i[T] != null) if (T === "style") {
        var g = i[T];
        for (s in g) g.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (k.hasOwnProperty(T) ? o || (o = []) : (o = o || []).push(T, null));
      for (T in r) {
        var S = r[T];
        if (g = i?.[T], r.hasOwnProperty(T) && S !== g && (S != null || g != null)) if (T === "style") if (g) {
          for (s in g) !g.hasOwnProperty(s) || S && S.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in S) S.hasOwnProperty(s) && g[s] !== S[s] && (n || (n = {}), n[s] = S[s]);
        } else n || (o || (o = []), o.push(
          T,
          n
        )), n = S;
        else T === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, g = g ? g.__html : void 0, S != null && g !== S && (o = o || []).push(T, S)) : T === "children" ? typeof S != "string" && typeof S != "number" || (o = o || []).push(T, "" + S) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (k.hasOwnProperty(T) ? (S != null && T === "onScroll" && Ye("scroll", e), o || g === S || (o = [])) : (o = o || []).push(T, S));
      }
      n && (o = o || []).push("style", n);
      var T = o;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Hu = function(e, t, n, r) {
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
  function Nf(e, t, n) {
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
        return _t(t.type) && Wi(), yt(t), null;
      case 3:
        return r = t.stateNode, dr(), Xe(St), Xe(gt), Ol(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (os(Ft), Ft = null))), Yl(e, t), yt(t), null;
      case 5:
        Cl(t);
        var i = Wn(Gr.current);
        if (n = t.type, e !== null && t.stateNode != null) Wu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return yt(t), null;
          }
          if (e = Wn(Xt.current), qi(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Yt] = t, r[Fr] = o, e = (t.mode & 1) !== 0, n) {
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
                for (i = 0; i < Ar.length; i++) Ye(Ar[i], r);
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
              s === "children" ? typeof g == "string" ? r.textContent !== g && (o.suppressHydrationWarning !== !0 && Li(r.textContent, g, e), i = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (o.suppressHydrationWarning !== !0 && Li(
                r.textContent,
                g,
                e
              ), i = ["children", "" + g]) : k.hasOwnProperty(s) && g != null && s === "onScroll" && Ye("scroll", r);
            }
            switch (n) {
              case "input":
                je(r), C(r, o, !0);
                break;
              case "textarea":
                je(r), qe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Ii);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Yt] = t, e[Fr] = r, Au(e, t, !1, !1), t.stateNode = e;
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
                  for (i = 0; i < Ar.length; i++) Ye(Ar[i], e);
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
                  nt(e, r), i = $e(e, r), Ye("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = U({}, r, { value: void 0 }), Ye("invalid", e);
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
                o === "style" ? Ie(e, S) : o === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && O(e, S)) : o === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && H(e, S) : typeof S == "number" && H(e, "" + S) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (k.hasOwnProperty(o) ? S != null && o === "onScroll" && Ye("scroll", e) : S != null && h(e, o, S, s));
              }
              switch (n) {
                case "input":
                  je(e), C(e, r, !1);
                  break;
                case "textarea":
                  je(e), qe(e);
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
        return yt(t), null;
      case 6:
        if (e && t.stateNode != null) Hu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = Wn(Gr.current), Wn(Xt.current), qi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = Ot, e !== null)) switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return yt(t), null;
      case 13:
        if (Xe(Je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && Pt !== null && t.mode & 1 && !(t.flags & 128)) Ua(), sr(), t.flags |= 98560, o = !1;
          else if (o = qi(t), r !== null && r.dehydrated !== null) {
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
        return dr(), Yl(e, t), e === null && Wr(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return _l(t.type._context), yt(t), null;
      case 17:
        return _t(t.type) && Wi(), yt(t), null;
      case 19:
        if (Xe(Je), o = t.memoizedState, o === null) return yt(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Kr(o, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (s = Qi(e), s !== null) {
              for (t.flags |= 128, Kr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ve(Je, Je.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && rt() > gr && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Qi(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ze) return yt(t), null;
          } else 2 * rt() - o.renderingStartTime > gr && n !== 1073741824 && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = rt(), t.sibling = null, n = Je.current, Ve(Je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return ss(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? jt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Tf(e, t) {
    switch (ml(t), t.tag) {
      case 1:
        return _t(t.type) && Wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dr(), Xe(St), Xe(gt), Ol(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Cl(t), null;
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
        return _l(t.type._context), null;
      case 22:
      case 23:
        return ss(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oo = !1, vt = !1, Mf = typeof WeakSet == "function" ? WeakSet : Set, de = null;
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
  var Fu = !1;
  function Lf(e, t) {
    if (sl = bi, e = xa(), Jo(e)) {
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
          var s = 0, g = -1, S = -1, T = 0, Q = 0, J = e, X = null;
          t: for (; ; ) {
            for (var ce; J !== n || i !== 0 && J.nodeType !== 3 || (g = s + i), J !== o || r !== 0 && J.nodeType !== 3 || (S = s + r), J.nodeType === 3 && (s += J.nodeValue.length), (ce = J.firstChild) !== null; )
              X = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (X === n && ++T === i && (g = s), X === o && ++Q === r && (S = s), (ce = J.nextSibling) !== null) break;
              J = X, X = J.parentNode;
            }
            J = ce;
          }
          n = g === -1 || S === -1 ? null : { start: g, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (al = { focusedElem: e, selectionRange: n }, bi = !1, de = t; de !== null; ) if (t = de, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, de = e;
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
              var he = fe.memoizedProps, it = fe.memoizedState, R = t.stateNode, E = R.getSnapshotBeforeUpdate(t.elementType === t.type ? he : Bt(t.type, he), it);
              R.__reactInternalSnapshotBeforeUpdate = E;
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
      } catch (ne) {
        tt(t, t.return, ne);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, de = e;
        break;
      }
      de = t.return;
    }
    return fe = Fu, Fu = !1, fe;
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
  function lo(e, t) {
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
    t !== null && (e.alternate = null, Bu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Fr], delete t[fl], delete t[vf], delete t[xf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Uu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uu(e.return)) return null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ii));
    else if (r !== 4 && (e = e.child, e !== null)) for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), e = e.sibling;
  }
  function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
  }
  var pt = null, Ut = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) $u(e, t, n), n = n.sibling;
  }
  function $u(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(xi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || pr(n, t);
      case 6:
        var r = pt, i = Ut;
        pt = null, kn(e, t, n), pt = r, Ut = i, pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? dl(e.parentNode, n) : e.nodeType === 1 && dl(e, n), Pr(e)) : dl(pt, n.stateNode));
        break;
      case 4:
        r = pt, i = Ut, pt = n.stateNode.containerInfo, Ut = !0, kn(e, t, n), pt = r, Ut = i;
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
        kn(e, t, n);
        break;
      case 1:
        if (!vt && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          tt(n, t, g);
        }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (r = vt) || n.memoizedState !== null, kn(e, t, n), vt = r) : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function Gu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Mf()), t.forEach(function(r) {
        var i = $f.bind(null, e, r);
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
        $u(o, s, i), pt = null, Ut = !1;
        var S = i.alternate;
        S !== null && (S.return = null), i.return = null;
      } catch (T) {
        tt(i, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Vu(t, e), t = t.sibling;
  }
  function Vu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qt(t, e), Kt(e), r & 4) {
          try {
            Zr(3, e, e.return), lo(3, e);
          } catch (he) {
            tt(e, e.return, he);
          }
          try {
            Zr(5, e, e.return);
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
            var T = At(g, o);
            for (s = 0; s < S.length; s += 2) {
              var Q = S[s], J = S[s + 1];
              Q === "style" ? Ie(i, J) : Q === "dangerouslySetInnerHTML" ? O(i, J) : Q === "children" ? H(i, J) : h(i, Q, J, T);
            }
            switch (g) {
              case "input":
                b(i, o);
                break;
              case "textarea":
                Ne(i, o);
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
            i[Fr] = o;
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
          Pr(t.containerInfo);
        } catch (he) {
          tt(e, e.return, he);
        }
        break;
      case 4:
        qt(t, e), Kt(e);
        break;
      case 13:
        qt(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ts = rt())), r & 4 && Gu(e);
        break;
      case 22:
        if (Q = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (T = vt) || Q, qt(t, e), vt = T) : qt(t, e), Kt(e), r & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !Q && e.mode & 1) for (de = e, Q = e.child; Q !== null; ) {
            for (J = de = Q; de !== null; ) {
              switch (X = de, ce = X.child, X.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, X, X.return);
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
                    Qu(J);
                    continue;
                  }
              }
              ce !== null ? (ce.return = X, de = ce) : Qu(J);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, J = e; ; ) {
            if (J.tag === 5) {
              if (Q === null) {
                Q = J;
                try {
                  i = J.stateNode, T ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (g = J.stateNode, S = J.memoizedProps.style, s = S != null && S.hasOwnProperty("display") ? S.display : null, g.style.display = Le("display", s));
                } catch (he) {
                  tt(e, e.return, he);
                }
              }
            } else if (J.tag === 6) {
              if (Q === null) try {
                J.stateNode.nodeValue = T ? "" : J.memoizedProps;
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
              Q === J && (Q = null), J = J.return;
            }
            Q === J && (Q = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        qt(t, e), Kt(e), r & 4 && Gu(e);
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
            if (Uu(n)) {
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
            var o = qu(e);
            Zl(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, g = qu(e);
            Kl(e, g, s);
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
  function If(e, t, n) {
    de = e, Yu(e);
  }
  function Yu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; de !== null; ) {
      var i = de, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || oo;
        if (!s) {
          var g = i.alternate, S = g !== null && g.memoizedState !== null || vt;
          g = oo;
          var T = vt;
          if (oo = s, (vt = S) && !T) for (de = i; de !== null; ) s = de, S = s.child, s.tag === 22 && s.memoizedState !== null ? Ku(i) : S !== null ? (S.return = s, de = S) : Ku(i);
          for (; o !== null; ) de = o, Yu(o), o = o.sibling;
          de = i, oo = g, vt = T;
        }
        Xu(e);
      } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, de = o) : Xu(e);
    }
  }
  function Xu(e) {
    for (; de !== null; ) {
      var t = de;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              vt || lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !vt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Qa(t, o, r);
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
                Qa(t, s, n);
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
                var T = t.alternate;
                if (T !== null) {
                  var Q = T.memoizedState;
                  if (Q !== null) {
                    var J = Q.dehydrated;
                    J !== null && Pr(J);
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
  function Qu(e) {
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
  function Ku(e) {
    for (; de !== null; ) {
      var t = de;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              lo(4, t);
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
              Ql(t);
            } catch (S) {
              tt(t, o, S);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Ql(t);
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
  var Af = Math.ceil, so = d.ReactCurrentDispatcher, Jl = d.ReactCurrentOwner, Lt = d.ReactCurrentBatchConfig, We = 0, ct = null, ot = null, ht = 0, jt = 0, hr = vn(0), st = 0, Jr = null, Fn = 0, ao = 0, es = 0, ei = null, Et = null, ts = 0, gr = 1 / 0, sn = null, uo = !1, ns = null, En = null, co = !1, bn = null, fo = 0, ti = 0, rs = null, po = -1, ho = 0;
  function wt() {
    return We & 6 ? rt() : po !== -1 ? po : po = rt();
  }
  function zn(e) {
    return e.mode & 1 ? We & 2 && ht !== 0 ? ht & -ht : Sf.transition !== null ? (ho === 0 && (ho = qs()), ho) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Js(e.type)), e) : 1;
  }
  function $t(e, t, n, r) {
    if (50 < ti) throw ti = 0, rs = null, Error(l(185));
    br(e, n, r), (!(We & 2) || e !== ct) && (e === ct && (!(We & 2) && (ao |= n), st === 4 && Cn(e, ht)), bt(e, r), n === 1 && We === 0 && !(t.mode & 1) && (gr = rt() + 500, Fi && wn()));
  }
  function bt(e, t) {
    var n = e.callbackNode;
    wd(e, t);
    var r = _i(e, e === ct ? ht : 0);
    if (r === 0) n !== null && Fs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fs(n), t === 1) e.tag === 0 ? wf(Ju.bind(null, e)) : Aa(Ju.bind(null, e)), mf(function() {
        !(We & 6) && wn();
      }), n = null;
      else {
        switch ($s(r)) {
          case 1:
            n = Lo;
            break;
          case 4:
            n = Bs;
            break;
          case 16:
            n = vi;
            break;
          case 536870912:
            n = Us;
            break;
          default:
            n = vi;
        }
        n = sc(n, Zu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Zu(e, t) {
    if (po = -1, ho = 0, We & 6) throw Error(l(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = _i(e, e === ct ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = go(e, r);
    else {
      t = r;
      var i = We;
      We |= 2;
      var o = tc();
      (ct !== e || ht !== t) && (sn = null, gr = rt() + 500, Un(e, t));
      do
        try {
          Ff();
          break;
        } catch (g) {
          ec(e, g);
        }
      while (!0);
      Sl(), so.current = o, We = i, ot !== null ? t = 0 : (ct = null, ht = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (i = Io(e), i !== 0 && (r = i, t = is(e, i))), t === 1) throw n = Jr, Un(e, 0), Cn(e, r), bt(e, rt()), n;
      if (t === 6) Cn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Wf(i) && (t = go(e, r), t === 2 && (o = Io(e), o !== 0 && (r = o, t = is(e, o))), t === 1)) throw n = Jr, Un(e, 0), Cn(e, r), bt(e, rt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            qn(e, Et, sn);
            break;
          case 3:
            if (Cn(e, r), (r & 130023424) === r && (t = ts + 500 - rt(), 10 < t)) {
              if (_i(e, 0) !== 0) break;
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
            if (Cn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - Wt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = rt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Af(r / 1960)) - r, 10 < r) {
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
    return bt(e, rt()), e.callbackNode === n ? Zu.bind(null, e) : null;
  }
  function is(e, t) {
    var n = ei;
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = go(e, t), e !== 2 && (t = Et, Et = n, t !== null && os(t)), e;
  }
  function os(e) {
    Et === null ? Et = e : Et.push.apply(Et, e);
  }
  function Wf(e) {
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
  function Cn(e, t) {
    for (t &= ~es, t &= ~ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ju(e) {
    if (We & 6) throw Error(l(327));
    mr();
    var t = _i(e, 0);
    if (!(t & 1)) return bt(e, rt()), null;
    var n = go(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Io(e);
      r !== 0 && (t = r, n = is(e, r));
    }
    if (n === 1) throw n = Jr, Un(e, 0), Cn(e, t), bt(e, rt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, Et, sn), bt(e, rt()), null;
  }
  function ls(e, t) {
    var n = We;
    We |= 1;
    try {
      return e(t);
    } finally {
      We = n, We === 0 && (gr = rt() + 500, Fi && wn());
    }
  }
  function Bn(e) {
    bn !== null && bn.tag === 0 && !(We & 6) && mr();
    var t = We;
    We |= 1;
    var n = Lt.transition, r = Ue;
    try {
      if (Lt.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = r, Lt.transition = n, We = t, !(We & 6) && wn();
    }
  }
  function ss() {
    jt = hr.current, Xe(hr);
  }
  function Un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gf(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var r = n;
      switch (ml(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wi();
          break;
        case 3:
          dr(), Xe(St), Xe(gt), Ol();
          break;
        case 5:
          Cl(r);
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
          _l(r.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
    if (ct = e, ot = e = Rn(e.current, null), ht = jt = t, st = 0, Jr = null, es = ao = Fn = 0, Et = ei = null, An !== null) {
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
  function ec(e, t) {
    do {
      var n = ot;
      try {
        if (Sl(), Ki.current = to, Zi) {
          for (var r = et.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Zi = !1;
        }
        if (Hn = 0, ut = lt = et = null, Vr = !1, Yr = 0, Jl.current = null, n === null || n.return === null) {
          st = 1, Jr = t, ot = null;
          break;
        }
        e: {
          var o = e, s = n.return, g = n, S = t;
          if (t = ht, g.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var T = S, Q = g, J = Q.tag;
            if (!(Q.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var X = Q.alternate;
              X ? (Q.updateQueue = X.updateQueue, Q.memoizedState = X.memoizedState, Q.lanes = X.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = bu(s);
            if (ce !== null) {
              ce.flags &= -257, zu(ce, s, g, o, t), ce.mode & 1 && Eu(o, T, t), t = ce, S = T;
              var fe = t.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(S), t.updateQueue = he;
              } else fe.add(S);
              break e;
            } else {
              if (!(t & 1)) {
                Eu(o, T, t), as();
                break e;
              }
              S = Error(l(426));
            }
          } else if (Ze && g.mode & 1) {
            var it = bu(s);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), zu(it, s, g, o, t), xl(fr(S, g));
              break e;
            }
          }
          o = S = fr(S, g), st !== 4 && (st = 2), ei === null ? ei = [o] : ei.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var R = _u(o, S, t);
                Xa(o, R);
                break e;
              case 1:
                g = S;
                var E = o.type, j = o.stateNode;
                if (!(o.flags & 128) && (typeof E.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (En === null || !En.has(j)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var ne = ku(o, g, t);
                  Xa(o, ne);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        rc(n);
      } catch (ve) {
        t = ve, ot === n && n !== null && (ot = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tc() {
    var e = so.current;
    return so.current = to, e === null ? to : e;
  }
  function as() {
    (st === 0 || st === 3 || st === 2) && (st = 4), ct === null || !(Fn & 268435455) && !(ao & 268435455) || Cn(ct, ht);
  }
  function go(e, t) {
    var n = We;
    We |= 2;
    var r = tc();
    (ct !== e || ht !== t) && (sn = null, Un(e, t));
    do
      try {
        Hf();
        break;
      } catch (i) {
        ec(e, i);
      }
    while (!0);
    if (Sl(), We = n, so.current = r, ot !== null) throw Error(l(261));
    return ct = null, ht = 0, st;
  }
  function Hf() {
    for (; ot !== null; ) nc(ot);
  }
  function Ff() {
    for (; ot !== null && !dd(); ) nc(ot);
  }
  function nc(e) {
    var t = lc(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps, t === null ? rc(e) : ot = t, Jl.current = null;
  }
  function rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Tf(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (n = Nf(n, t, jt), n !== null) {
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
      Lt.transition = null, Ue = 1, Bf(e, t, n, r);
    } finally {
      Lt.transition = i, Ue = r;
    }
    return null;
  }
  function Bf(e, t, n, r) {
    do
      mr();
    while (bn !== null);
    if (We & 6) throw Error(l(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Sd(e, o), e === ct && (ot = ct = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || co || (co = !0, sc(vi, function() {
      return mr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Lt.transition, Lt.transition = null;
      var s = Ue;
      Ue = 1;
      var g = We;
      We |= 4, Jl.current = null, Lf(e, n), Vu(n, e), af(al), bi = !!sl, al = sl = null, e.current = n, If(n), fd(), We = g, Ue = s, Lt.transition = o;
    } else e.current = n;
    if (co && (co = !1, bn = e, fo = i), o = e.pendingLanes, o === 0 && (En = null), gd(n.stateNode), bt(e, rt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (uo) throw uo = !1, e = ns, ns = null, e;
    return fo & 1 && e.tag !== 0 && mr(), o = e.pendingLanes, o & 1 ? e === rs ? ti++ : (ti = 0, rs = e) : ti = 0, wn(), null;
  }
  function mr() {
    if (bn !== null) {
      var e = $s(fo), t = Lt.transition, n = Ue;
      try {
        if (Lt.transition = null, Ue = 16 > e ? 16 : e, bn === null) var r = !1;
        else {
          if (e = bn, bn = null, fo = 0, We & 6) throw Error(l(331));
          var i = We;
          for (We |= 4, de = e.current; de !== null; ) {
            var o = de, s = o.child;
            if (de.flags & 16) {
              var g = o.deletions;
              if (g !== null) {
                for (var S = 0; S < g.length; S++) {
                  var T = g[S];
                  for (de = T; de !== null; ) {
                    var Q = de;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, Q, o);
                    }
                    var J = Q.child;
                    if (J !== null) J.return = Q, de = J;
                    else for (; de !== null; ) {
                      Q = de;
                      var X = Q.sibling, ce = Q.return;
                      if (Bu(Q), Q === T) {
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
                  Zr(9, o, o.return);
              }
              var R = o.sibling;
              if (R !== null) {
                R.return = o.return, de = R;
                break e;
              }
              de = o.return;
            }
          }
          var E = e.current;
          for (de = E; de !== null; ) {
            s = de;
            var j = s.child;
            if (s.subtreeFlags & 2064 && j !== null) j.return = s, de = j;
            else e: for (s = E; de !== null; ) {
              if (g = de, g.flags & 2048) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lo(9, g);
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
          if (We = i, wn(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
            Vt.onPostCommitFiberRoot(xi, e);
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
  function ic(e, t, n) {
    t = fr(n, t), t = _u(e, t, 1), e = _n(e, t, 1), t = wt(), e !== null && (br(e, 1, t), bt(e, t));
  }
  function tt(e, t, n) {
    if (e.tag === 3) ic(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
          e = fr(n, e), e = ku(t, e, 1), t = _n(t, e, 1), e = wt(), t !== null && (br(t, 1, e), bt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Uf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = wt(), e.pingedLanes |= e.suspendedLanes & n, ct === e && (ht & n) === n && (st === 4 || st === 3 && (ht & 130023424) === ht && 500 > rt() - ts ? Un(e, 0) : es |= n), bt(e, t);
  }
  function oc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Si, Si <<= 1, !(Si & 130023424) && (Si = 4194304)) : t = 1);
    var n = wt();
    e = rn(e, t), e !== null && (br(e, t, n), bt(e, n));
  }
  function qf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), oc(e, n);
  }
  function $f(e, t) {
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
    r !== null && r.delete(t), oc(e, n);
  }
  var lc;
  lc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || St.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return kt = !1, Df(e, t, n);
      kt = !!(e.flags & 131072);
    }
    else kt = !1, Ze && t.flags & 1048576 && Wa(t, Ui, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        io(e, t), e = t.pendingProps;
        var i = ir(t, gt.current);
        cr(t, n), i = Dl(null, t, r, e, i, n);
        var o = Nl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _t(r) ? (o = !0, Hi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, bl(t), i.updater = no, t.stateNode = i, i._reactInternals = t, Wl(t, r, e, n), t = Ul(null, t, r, !0, o, n)) : (t.tag = 0, Ze && o && gl(t), xt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (io(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Vf(r), e = Bt(r, e), i) {
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
              t = Ru(null, t, r, Bt(r.type, e), n);
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
          if (Nu(t), e === null) throw Error(l(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Ya(e, t), Xi(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = fr(Error(l(423)), t), t = Tu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(l(424)), t), t = Tu(e, t, r, n, i);
            break e;
          } else for (Pt = yn(t.stateNode.containerInfo.firstChild), Ot = t, Ze = !0, Ft = null, n = Ga(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return Ka(t), e === null && vl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ul(r, i) ? s = null : o !== null && ul(r, o) && (t.flags |= 32), ju(e, t), xt(e, t, s, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Mu(e, t, n);
      case 4:
        return zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : xt(e, t, r, n), t.child;
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
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Ve(Gi, r._currentValue), r._currentValue = s, o !== null) if (Ht(o.value, s)) {
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
                    var T = o.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var Q = T.pending;
                      Q === null ? S.next = S : (S.next = Q.next, Q.next = S), T.pending = S;
                    }
                  }
                  o.lanes |= n, S = o.alternate, S !== null && (S.lanes |= n), kl(
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
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), kl(s, n, t), s = o.sibling;
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
        return i = t.type, r = t.pendingProps.children, cr(t, n), i = Tt(i), r = r(i), t.flags |= 1, xt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), Ru(e, t, r, i, n);
      case 15:
        return Ou(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), io(e, t), t.tag = 1, _t(r) ? (e = !0, Hi(t)) : e = !1, cr(t, n), wu(t, r, i), Wl(t, r, i, n), Ul(null, t, r, !0, e, n);
      case 19:
        return Iu(e, t, n);
      case 22:
        return Pu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function sc(e, t) {
    return Hs(e, t);
  }
  function Gf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, r) {
    return new Gf(e, t, n, r);
  }
  function us(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Vf(e) {
    if (typeof e == "function") return us(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ie) return 11;
      if (e === xe) return 14;
    }
    return 2;
  }
  function Rn(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function mo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") us(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case z:
        return $n(n.children, i, o, t);
      case L:
        s = 8, i |= 8;
        break;
      case B:
        return e = It(12, n, t, i | 2), e.elementType = B, e.lanes = o, e;
      case re:
        return e = It(13, n, t, i), e.elementType = re, e.lanes = o, e;
      case me:
        return e = It(19, n, t, i), e.elementType = me, e.lanes = o, e;
      case ue:
        return yo(n, i, o, t);
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
          case xe:
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
  function yo(e, t, n, r) {
    return e = It(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function cs(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function ds(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Yf(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ao(0), this.expirationTimes = Ao(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ao(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function fs(e, t, n, r, i, o, s, g, S) {
    return e = new Yf(e, t, n, g, S), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = It(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bl(o), e;
  }
  function Xf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: m, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ac(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(l(170));
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
      if (_t(n)) return La(e, n, t);
    }
    return t;
  }
  function uc(e, t, n, r, i, o, s, g, S) {
    return e = fs(n, r, !0, e, i, o, s, g, S), e.context = ac(null), n = e.current, r = wt(), i = zn(n), o = on(r, i), o.callback = t ?? null, _n(n, o, i), e.current.lanes = i, br(e, i, r), bt(e, r), e;
  }
  function vo(e, t, n, r) {
    var i = t.current, o = wt(), s = zn(i);
    return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _n(i, t, s), e !== null && ($t(e, i, s, o), Yi(e, i, s)), s;
  }
  function xo(e) {
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
  function Qf() {
    return null;
  }
  var dc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function hs(e) {
    this._internalRoot = e;
  }
  wo.prototype.render = hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    vo(e, t, null, null);
  }, wo.prototype.unmount = hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        vo(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function wo(e) {
    this._internalRoot = e;
  }
  wo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ys();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Ks(e);
    }
  };
  function gs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function So(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fc() {
  }
  function Kf(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var T = xo(s);
          o.call(T);
        };
      }
      var s = uc(t, r, e, 0, null, !1, !1, "", fc);
      return e._reactRootContainer = s, e[Jt] = s.current, Wr(e.nodeType === 8 ? e.parentNode : e), Bn(), s;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var T = xo(S);
        g.call(T);
      };
    }
    var S = fs(e, 0, !1, null, null, !1, !1, "", fc);
    return e._reactRootContainer = S, e[Jt] = S.current, Wr(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      vo(t, S, n, r);
    }), S;
  }
  function _o(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var g = i;
        i = function() {
          var S = xo(s);
          g.call(S);
        };
      }
      vo(t, s, e, i);
    } else s = Kf(n, t, e, i, r);
    return xo(s);
  }
  Gs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Er(t.pendingLanes);
          n !== 0 && (Wo(t, n | 1), bt(t, rt()), !(We & 6) && (gr = rt() + 500, wn()));
        }
        break;
      case 13:
        Bn(function() {
          var r = rn(e, 1);
          if (r !== null) {
            var i = wt();
            $t(r, e, 1, i);
          }
        }), ps(e, 1);
    }
  }, Ho = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = wt();
        $t(t, e, 134217728, n);
      }
      ps(e, 134217728);
    }
  }, Vs = function(e) {
    if (e.tag === 13) {
      var t = zn(e), n = rn(e, t);
      if (n !== null) {
        var r = wt();
        $t(n, e, t, r);
      }
      ps(e, t);
    }
  }, Ys = function() {
    return Ue;
  }, Xs = function(e, t) {
    var n = Ue;
    try {
      return Ue = e, t();
    } finally {
      Ue = n;
    }
  }, Vn = function(e, t, n) {
    switch (t) {
      case "input":
        if (b(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Ai(r);
              if (!i) throw Error(l(90));
              Me(r), b(r, i);
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
  }, gi = ls, Ts = Bn;
  var Zf = { usingClientEntryPoint: !1, Events: [Br, nr, Ai, wr, Yn, ls] }, ni = { findFiberByHostInstance: Tn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jf = { bundleType: ni.bundleType, version: ni.version, rendererPackageName: ni.rendererPackageName, rendererConfig: ni.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: d.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = As(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ni.findFiberByHostInstance || Qf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ko.isDisabled && ko.supportsFiber) try {
      xi = ko.inject(Jf), Vt = ko;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zf, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gs(t)) throw Error(l(200));
    return Xf(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!gs(e)) throw Error(l(299));
    var n = !1, r = "", i = dc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = fs(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new hs(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = As(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return Bn(e);
  }, zt.hydrate = function(e, t, n) {
    if (!So(t)) throw Error(l(200));
    return _o(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!gs(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = dc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, i, !1, o, s), e[Jt] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new wo(t);
  }, zt.render = function(e, t, n) {
    if (!So(t)) throw Error(l(200));
    return _o(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!So(e)) throw Error(l(40));
    return e._reactRootContainer ? (Bn(function() {
      _o(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = ls, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!So(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return _o(e, t, n, !1, r);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var vc;
function hi() {
  if (vc) return ms.exports;
  vc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), ms.exports = lp(), ms.exports;
}
var xc;
function sp() {
  if (xc) return Eo;
  xc = 1;
  var u = hi();
  return Eo.createRoot = u.createRoot, Eo.hydrateRoot = u.hydrateRoot, Eo;
}
var ap = sp(), Ge = Ct();
const up = /* @__PURE__ */ tp(Ge);
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
var wc;
function cp() {
  if (wc) return ri;
  wc = 1;
  var u = Ct(), c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, k = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(Y, M, A) {
    var V, F = {}, $ = null, ke = null;
    A !== void 0 && ($ = "" + A), M.key !== void 0 && ($ = "" + M.key), M.ref !== void 0 && (ke = M.ref);
    for (V in M) f.call(M, V) && !P.hasOwnProperty(V) && (F[V] = M[V]);
    if (Y && Y.defaultProps) for (V in M = Y.defaultProps, M) F[V] === void 0 && (F[V] = M[V]);
    return { $$typeof: c, type: Y, key: $, ref: ke, props: F, _owner: k.current };
  }
  return ri.Fragment = l, ri.jsx = I, ri.jsxs = I, ri;
}
var Sc;
function dp() {
  return Sc || (Sc = 1, ws.exports = cp()), ws.exports;
}
var v = dp();
class _c extends Ge.Component {
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
var Ss = { exports: {} }, ii = {}, fi = { exports: {} }, fp = fi.exports, kc;
function Ps() {
  return kc || (kc = 1, function(u, c) {
    (function(l, f) {
      f(c);
    })(fp, function(l) {
      function f(Z) {
        return function(ze, je, Me, Fe, $e, nt, _) {
          return Z(ze, je, _);
        };
      }
      function k(Z) {
        return function(ze, je, Me, Fe) {
          if (!ze || !je || typeof ze != "object" || typeof je != "object")
            return Z(ze, je, Me, Fe);
          var $e = Fe.get(ze), nt = Fe.get(je);
          if ($e && nt)
            return $e === je && nt === ze;
          Fe.set(ze, je), Fe.set(je, ze);
          var _ = Z(ze, je, Me, Fe);
          return Fe.delete(ze), Fe.delete(je), _;
        };
      }
      function P(Z, ae) {
        var ze = {};
        for (var je in Z)
          ze[je] = Z[je];
        for (var je in ae)
          ze[je] = ae[je];
        return ze;
      }
      function I(Z) {
        return Z.constructor === Object || Z.constructor == null;
      }
      function Y(Z) {
        return typeof Z.then == "function";
      }
      function M(Z, ae) {
        return Z === ae || Z !== Z && ae !== ae;
      }
      var A = "[object Arguments]", V = "[object Boolean]", F = "[object Date]", $ = "[object RegExp]", ke = "[object Map]", be = "[object Number]", K = "[object Object]", N = "[object Set]", x = "[object String]", a = Object.prototype.toString;
      function h(Z) {
        var ae = Z.areArraysEqual, ze = Z.areDatesEqual, je = Z.areMapsEqual, Me = Z.areObjectsEqual, Fe = Z.areRegExpsEqual, $e = Z.areSetsEqual, nt = Z.createIsNestedEqual, _ = nt(b);
        function b(C, q, oe) {
          if (C === q)
            return !0;
          if (!C || !q || typeof C != "object" || typeof q != "object")
            return C !== C && q !== q;
          if (I(C) && I(q))
            return Me(C, q, _, oe);
          var ge = Array.isArray(C), Ee = Array.isArray(q);
          if (ge || Ee)
            return ge === Ee && ae(C, q, _, oe);
          var Oe = a.call(C);
          return Oe !== a.call(q) ? !1 : Oe === F ? ze(C, q, _, oe) : Oe === $ ? Fe(C, q, _, oe) : Oe === ke ? je(C, q, _, oe) : Oe === N ? $e(C, q, _, oe) : Oe === K || Oe === A ? Y(C) || Y(q) ? !1 : Me(C, q, _, oe) : Oe === V || Oe === be || Oe === x ? M(C.valueOf(), q.valueOf()) : !1;
        }
        return b;
      }
      function d(Z, ae, ze, je) {
        var Me = Z.length;
        if (ae.length !== Me)
          return !1;
        for (; Me-- > 0; )
          if (!ze(Z[Me], ae[Me], Me, Me, Z, ae, je))
            return !1;
        return !0;
      }
      var p = k(d);
      function m(Z, ae) {
        return M(Z.valueOf(), ae.valueOf());
      }
      function z(Z, ae, ze, je) {
        var Me = Z.size === ae.size;
        if (!Me)
          return !1;
        if (!Z.size)
          return !0;
        var Fe = {}, $e = 0;
        return Z.forEach(function(nt, _) {
          if (Me) {
            var b = !1, C = 0;
            ae.forEach(function(q, oe) {
              !b && !Fe[C] && (b = ze(_, oe, $e, C, Z, ae, je) && ze(nt, q, _, oe, Z, ae, je)) && (Fe[C] = !0), C++;
            }), $e++, Me = b;
          }
        }), Me;
      }
      var L = k(z), B = "_owner", te = Object.prototype.hasOwnProperty;
      function le(Z, ae, ze, je) {
        var Me = Object.keys(Z), Fe = Me.length;
        if (Object.keys(ae).length !== Fe)
          return !1;
        for (var $e; Fe-- > 0; ) {
          if ($e = Me[Fe], $e === B) {
            var nt = !!Z.$$typeof, _ = !!ae.$$typeof;
            if ((nt || _) && nt !== _)
              return !1;
          }
          if (!te.call(ae, $e) || !ze(Z[$e], ae[$e], $e, $e, Z, ae, je))
            return !1;
        }
        return !0;
      }
      var ie = k(le);
      function re(Z, ae) {
        return Z.source === ae.source && Z.flags === ae.flags;
      }
      function me(Z, ae, ze, je) {
        var Me = Z.size === ae.size;
        if (!Me)
          return !1;
        if (!Z.size)
          return !0;
        var Fe = {};
        return Z.forEach(function($e, nt) {
          if (Me) {
            var _ = !1, b = 0;
            ae.forEach(function(C, q) {
              !_ && !Fe[b] && (_ = ze($e, C, nt, q, Z, ae, je)) && (Fe[b] = !0), b++;
            }), Me = _;
          }
        }), Me;
      }
      var xe = k(me), pe = Object.freeze({
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
        areMapsEqual: L,
        areObjectsEqual: ie,
        areRegExpsEqual: re,
        areSetsEqual: xe,
        createIsNestedEqual: f
      }), G = h(pe);
      function W(Z, ae) {
        return G(Z, ae, void 0);
      }
      var U = h(P(pe, { createIsNestedEqual: function() {
        return M;
      } }));
      function w(Z, ae) {
        return U(Z, ae, void 0);
      }
      var D = h(ue);
      function ye(Z, ae) {
        return D(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      var we = h(P(ue, {
        createIsNestedEqual: function() {
          return M;
        }
      }));
      function Re(Z, ae) {
        return we(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      function Pe(Z) {
        return h(P(pe, Z(pe)));
      }
      function De(Z) {
        var ae = h(P(ue, Z(ue)));
        return function(ze, je, Me) {
          return Me === void 0 && (Me = /* @__PURE__ */ new WeakMap()), ae(ze, je, Me);
        };
      }
      l.circularDeepEqual = ye, l.circularShallowEqual = Re, l.createCustomCircularEqual = De, l.createCustomEqual = Pe, l.deepEqual = W, l.sameValueZeroEqual = M, l.shallowEqual = w, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(fi, fi.exports)), fi.exports;
}
var bo = { exports: {} }, Ec;
function jo() {
  if (Ec) return bo.exports;
  Ec = 1;
  function u(l) {
    var f, k, P = "";
    if (typeof l == "string" || typeof l == "number") P += l;
    else if (typeof l == "object") if (Array.isArray(l)) {
      var I = l.length;
      for (f = 0; f < I; f++) l[f] && (k = u(l[f])) && (P && (P += " "), P += k);
    } else for (k in l) l[k] && (P && (P += " "), P += k);
    return P;
  }
  function c() {
    for (var l, f, k = 0, P = "", I = arguments.length; k < I; k++) (l = arguments[k]) && (f = u(l)) && (P && (P += " "), P += f);
    return P;
  }
  return bo.exports = c, bo.exports.clsx = c, bo.exports;
}
var Ae = {}, _s, bc;
function pp() {
  return bc || (bc = 1, _s = function(c, l, f) {
    return c === l ? !0 : c.className === l.className && f(c.style, l.style) && c.width === l.width && c.autoSize === l.autoSize && c.cols === l.cols && c.draggableCancel === l.draggableCancel && c.draggableHandle === l.draggableHandle && f(c.verticalCompact, l.verticalCompact) && f(c.compactType, l.compactType) && f(c.layout, l.layout) && f(c.margin, l.margin) && f(c.containerPadding, l.containerPadding) && c.rowHeight === l.rowHeight && c.maxRows === l.maxRows && c.isBounded === l.isBounded && c.isDraggable === l.isDraggable && c.isResizable === l.isResizable && c.allowOverlap === l.allowOverlap && c.preventCollision === l.preventCollision && c.useCSSTransforms === l.useCSSTransforms && c.transformScale === l.transformScale && c.isDroppable === l.isDroppable && f(c.resizeHandles, l.resizeHandles) && f(c.resizeHandle, l.resizeHandle) && c.onLayoutChange === l.onLayoutChange && c.onDragStart === l.onDragStart && c.onDrag === l.onDrag && c.onDragStop === l.onDragStop && c.onResizeStart === l.onResizeStart && c.onResize === l.onResize && c.onResizeStop === l.onResizeStop && c.onDrop === l.onDrop && f(c.droppingItem, l.droppingItem) && f(c.innerRef, l.innerRef);
  }), _s;
}
var zc;
function vr() {
  if (zc) return Ae;
  zc = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.bottom = M, Ae.childrenEqual = ke, Ae.cloneLayout = A, Ae.cloneLayoutItem = $, Ae.collides = K, Ae.compact = N, Ae.compactItem = h, Ae.compactType = Fe, Ae.correctBounds = d, Ae.fastPositionEqual = be, Ae.fastRGLPropsEqual = void 0, Ae.getAllCollisions = z, Ae.getFirstCollision = m, Ae.getLayoutItem = p, Ae.getStatics = L, Ae.modifyLayout = V, Ae.moveElement = B, Ae.moveElementAwayFromCollision = te, Ae.noop = void 0, Ae.perc = le, Ae.resizeItemInDirection = Re, Ae.setTopLeft = De, Ae.setTransform = Pe, Ae.sortLayoutItems = Z, Ae.sortLayoutItemsByColRow = ze, Ae.sortLayoutItemsByRowCol = ae, Ae.synchronizeLayoutWithChildren = je, Ae.validateLayout = Me, Ae.withLayoutItem = F;
  var u = /* @__PURE__ */ Ps(), c = l(Ct());
  function l(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function f(_, b) {
    var C = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(_);
      b && (q = q.filter(function(oe) {
        return Object.getOwnPropertyDescriptor(_, oe).enumerable;
      })), C.push.apply(C, q);
    }
    return C;
  }
  function k(_) {
    for (var b = 1; b < arguments.length; b++) {
      var C = arguments[b] != null ? arguments[b] : {};
      b % 2 ? f(Object(C), !0).forEach(function(q) {
        P(_, q, C[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(C)) : f(Object(C)).forEach(function(q) {
        Object.defineProperty(_, q, Object.getOwnPropertyDescriptor(C, q));
      });
    }
    return _;
  }
  function P(_, b, C) {
    return (b = I(b)) in _ ? Object.defineProperty(_, b, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : _[b] = C, _;
  }
  function I(_) {
    var b = Y(_, "string");
    return typeof b == "symbol" ? b : b + "";
  }
  function Y(_, b) {
    if (typeof _ != "object" || !_) return _;
    var C = _[Symbol.toPrimitive];
    if (C !== void 0) {
      var q = C.call(_, b);
      if (typeof q != "object") return q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(_);
  }
  function M(_) {
    let b = 0, C;
    for (let q = 0, oe = _.length; q < oe; q++)
      C = _[q].y + _[q].h, C > b && (b = C);
    return b;
  }
  function A(_) {
    const b = Array(_.length);
    for (let C = 0, q = _.length; C < q; C++)
      b[C] = $(_[C]);
    return b;
  }
  function V(_, b) {
    const C = Array(_.length);
    for (let q = 0, oe = _.length; q < oe; q++)
      b.i === _[q].i ? C[q] = b : C[q] = _[q];
    return C;
  }
  function F(_, b, C) {
    let q = p(_, b);
    return q ? (q = C($(q)), _ = V(_, q), [_, q]) : [_, null];
  }
  function $(_) {
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
  function ke(_, b) {
    return (0, u.deepEqual)(c.default.Children.map(_, (C) => C?.key), c.default.Children.map(b, (C) => C?.key)) && (0, u.deepEqual)(c.default.Children.map(_, (C) => C?.props["data-grid"]), c.default.Children.map(b, (C) => C?.props["data-grid"]));
  }
  Ae.fastRGLPropsEqual = pp();
  function be(_, b) {
    return _.left === b.left && _.top === b.top && _.width === b.width && _.height === b.height;
  }
  function K(_, b) {
    return !(_.i === b.i || _.x + _.w <= b.x || _.x >= b.x + b.w || _.y + _.h <= b.y || _.y >= b.y + b.h);
  }
  function N(_, b, C, q) {
    const oe = L(_);
    let ge = M(oe);
    const Ee = Z(_, b), Oe = Array(_.length);
    for (let Ne = 0, qe = Ee.length; Ne < qe; Ne++) {
      let Qe = $(Ee[Ne]);
      Qe.static || (Qe = h(oe, Qe, b, C, Ee, q, ge), ge = Math.max(ge, Qe.y + Qe.h), oe.push(Qe)), Oe[_.indexOf(Ee[Ne])] = Qe, Qe.moved = !1;
    }
    return Oe;
  }
  const x = {
    x: "w",
    y: "h"
  };
  function a(_, b, C, q) {
    const oe = x[q];
    b[q] += 1;
    const ge = _.map((Ee) => Ee.i).indexOf(b.i);
    for (let Ee = ge + 1; Ee < _.length; Ee++) {
      const Oe = _[Ee];
      if (!Oe.static) {
        if (Oe.y > b.y + b.h) break;
        K(b, Oe) && a(_, Oe, C + b[oe], q);
      }
    }
    b[q] = C;
  }
  function h(_, b, C, q, oe, ge, Ee) {
    const Oe = C === "vertical", Ne = C === "horizontal";
    if (Oe)
      for (typeof Ee == "number" ? b.y = Math.min(Ee, b.y) : b.y = Math.min(M(_), b.y); b.y > 0 && !m(_, b); )
        b.y--;
    else if (Ne)
      for (; b.x > 0 && !m(_, b); )
        b.x--;
    let qe;
    for (; (qe = m(_, b)) && !(C === null && ge); )
      if (Ne ? a(oe, b, qe.x + qe.w, "x") : a(oe, b, qe.y + qe.h, "y"), Ne && b.x + b.w > q)
        for (b.x = q - b.w, b.y++; b.x > 0 && !m(_, b); )
          b.x--;
    return b.y = Math.max(b.y, 0), b.x = Math.max(b.x, 0), b;
  }
  function d(_, b) {
    const C = L(_);
    for (let q = 0, oe = _.length; q < oe; q++) {
      const ge = _[q];
      if (ge.x + ge.w > b.cols && (ge.x = b.cols - ge.w), ge.x < 0 && (ge.x = 0, ge.w = b.cols), !ge.static) C.push(ge);
      else
        for (; m(C, ge); )
          ge.y++;
    }
    return _;
  }
  function p(_, b) {
    for (let C = 0, q = _.length; C < q; C++)
      if (_[C].i === b) return _[C];
  }
  function m(_, b) {
    for (let C = 0, q = _.length; C < q; C++)
      if (K(_[C], b)) return _[C];
  }
  function z(_, b) {
    return _.filter((C) => K(C, b));
  }
  function L(_) {
    return _.filter((b) => b.static);
  }
  function B(_, b, C, q, oe, ge, Ee, Oe, Ne) {
    if (b.static && b.isDraggable !== !0 || b.y === q && b.x === C) return _;
    "Moving element ".concat(b.i, " to [").concat(String(C), ",").concat(String(q), "] from [").concat(b.x, ",").concat(b.y, "]");
    const qe = b.x, Qe = b.y;
    typeof C == "number" && (b.x = C), typeof q == "number" && (b.y = q), b.moved = !0;
    let at = Z(_, Ee);
    (Ee === "vertical" && typeof q == "number" ? Qe >= q : Ee === "horizontal" && typeof C == "number" ? qe >= C : !1) && (at = at.reverse());
    const O = z(at, b), H = O.length > 0;
    if (H && Ne)
      return A(_);
    if (H && ge)
      return "Collision prevented on ".concat(b.i, ", reverting."), b.x = qe, b.y = Qe, b.moved = !1, _;
    for (let ee = 0, se = O.length; ee < se; ee++) {
      const Le = O[ee];
      "Resolving collision between ".concat(b.i, " at [").concat(b.x, ",").concat(b.y, "] and ").concat(Le.i, " at [").concat(Le.x, ",").concat(Le.y, "]"), !Le.moved && (Le.static ? _ = te(_, Le, b, oe, Ee) : _ = te(_, b, Le, oe, Ee));
    }
    return _;
  }
  function te(_, b, C, q, oe, ge) {
    const Ee = oe === "horizontal", Oe = oe === "vertical", Ne = b.static;
    if (q) {
      q = !1;
      const at = {
        x: Ee ? Math.max(b.x - C.w, 0) : C.x,
        y: Oe ? Math.max(b.y - C.h, 0) : C.y,
        w: C.w,
        h: C.h,
        i: "-1"
      }, y = m(_, at), O = y && y.y + y.h > b.y, H = y && b.x + b.w > y.x;
      if (y) {
        if (O && Oe)
          return B(_, C, void 0, C.y + 1, q, Ne, oe);
        if (O && oe == null)
          return b.y = C.y, C.y = C.y + C.h, _;
        if (H && Ee)
          return B(_, b, C.x, void 0, q, Ne, oe);
      } else return "Doing reverse collision on ".concat(C.i, " up to [").concat(at.x, ",").concat(at.y, "]."), B(_, C, Ee ? at.x : void 0, Oe ? at.y : void 0, q, Ne, oe);
    }
    const qe = Ee ? C.x + 1 : void 0, Qe = Oe ? C.y + 1 : void 0;
    return qe == null && Qe == null ? _ : B(_, C, Ee ? C.x + 1 : void 0, Oe ? C.y + 1 : void 0, q, Ne, oe);
  }
  function le(_) {
    return _ * 100 + "%";
  }
  const ie = (_, b, C, q) => _ + C > q ? b : C, re = (_, b, C) => _ < 0 ? b : C, me = (_) => Math.max(0, _), xe = (_) => Math.max(0, _), pe = (_, b, C) => {
    let {
      left: q,
      height: oe,
      width: ge
    } = b;
    const Ee = _.top - (oe - _.height);
    return {
      left: q,
      width: ge,
      height: re(Ee, _.height, oe),
      top: xe(Ee)
    };
  }, ue = (_, b, C) => {
    let {
      top: q,
      left: oe,
      height: ge,
      width: Ee
    } = b;
    return {
      top: q,
      height: ge,
      width: ie(_.left, _.width, Ee, C),
      left: me(oe)
    };
  }, G = (_, b, C) => {
    let {
      top: q,
      height: oe,
      width: ge
    } = b;
    const Ee = _.left - (ge - _.width);
    return {
      height: oe,
      width: Ee < 0 ? _.width : ie(_.left, _.width, ge, C),
      top: xe(q),
      left: me(Ee)
    };
  }, W = (_, b, C) => {
    let {
      top: q,
      left: oe,
      height: ge,
      width: Ee
    } = b;
    return {
      width: Ee,
      left: oe,
      height: re(q, _.height, ge),
      top: xe(q)
    };
  }, we = {
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
  function Re(_, b, C, q) {
    const oe = we[_];
    return oe ? oe(b, k(k({}, b), C), q) : C;
  }
  function Pe(_) {
    let {
      top: b,
      left: C,
      width: q,
      height: oe
    } = _;
    const ge = "translate(".concat(C, "px,").concat(b, "px)");
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
  function De(_) {
    let {
      top: b,
      left: C,
      width: q,
      height: oe
    } = _;
    return {
      top: "".concat(b, "px"),
      left: "".concat(C, "px"),
      width: "".concat(q, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function Z(_, b) {
    return b === "horizontal" ? ze(_) : b === "vertical" ? ae(_) : _;
  }
  function ae(_) {
    return _.slice(0).sort(function(b, C) {
      return b.y > C.y || b.y === C.y && b.x > C.x ? 1 : b.y === C.y && b.x === C.x ? 0 : -1;
    });
  }
  function ze(_) {
    return _.slice(0).sort(function(b, C) {
      return b.x > C.x || b.x === C.x && b.y > C.y ? 1 : -1;
    });
  }
  function je(_, b, C, q, oe) {
    _ = _ || [];
    const ge = [];
    c.default.Children.forEach(b, (Oe) => {
      if (Oe?.key == null) return;
      const Ne = p(_, String(Oe.key)), qe = Oe.props["data-grid"];
      Ne && qe == null ? ge.push($(Ne)) : qe ? ge.push($(k(k({}, qe), {}, {
        i: Oe.key
      }))) : ge.push($({
        w: 1,
        h: 1,
        x: 0,
        y: M(ge),
        i: String(Oe.key)
      }));
    });
    const Ee = d(ge, {
      cols: C
    });
    return oe ? Ee : N(Ee, q, C);
  }
  function Me(_) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const C = ["x", "y", "w", "h"];
    if (!Array.isArray(_)) throw new Error(b + " must be an array!");
    for (let q = 0, oe = _.length; q < oe; q++) {
      const ge = _[q];
      for (let Ee = 0; Ee < C.length; Ee++) {
        const Oe = C[Ee], Ne = ge[Oe];
        if (typeof Ne != "number" || Number.isNaN(Ne))
          throw new Error("ReactGridLayout: ".concat(b, "[").concat(q, "].").concat(Oe, " must be a number! Received: ").concat(Ne, " (").concat(typeof Ne, ")"));
      }
      if (typeof ge.i < "u" && typeof ge.i != "string")
        throw new Error("ReactGridLayout: ".concat(b, "[").concat(q, "].i must be a string! Received: ").concat(ge.i, " (").concat(typeof ge.i, ")"));
    }
  }
  function Fe(_) {
    const {
      verticalCompact: b,
      compactType: C
    } = _ || {};
    return b === !1 ? null : C;
  }
  function $e() {
  }
  const nt = () => {
  };
  return Ae.noop = nt, Ae;
}
var an = {}, Cc;
function js() {
  if (Cc) return an;
  Cc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = u, an.calcGridItemPosition = l, an.calcGridItemWHPx = c, an.calcWH = k, an.calcXY = f, an.clamp = P;
  function u(I) {
    const {
      margin: Y,
      containerPadding: M,
      containerWidth: A,
      cols: V
    } = I;
    return (A - Y[0] * (V - 1) - M[0] * 2) / V;
  }
  function c(I, Y, M) {
    return Number.isFinite(I) ? Math.round(Y * I + Math.max(0, I - 1) * M) : I;
  }
  function l(I, Y, M, A, V, F) {
    const {
      margin: $,
      containerPadding: ke,
      rowHeight: be
    } = I, K = u(I), N = {};
    return F && F.resizing ? (N.width = Math.round(F.resizing.width), N.height = Math.round(F.resizing.height)) : (N.width = c(A, K, $[0]), N.height = c(V, be, $[1])), F && F.dragging ? (N.top = Math.round(F.dragging.top), N.left = Math.round(F.dragging.left)) : F && F.resizing && typeof F.resizing.top == "number" && typeof F.resizing.left == "number" ? (N.top = Math.round(F.resizing.top), N.left = Math.round(F.resizing.left)) : (N.top = Math.round((be + $[1]) * M + ke[1]), N.left = Math.round((K + $[0]) * Y + ke[0])), N;
  }
  function f(I, Y, M, A, V) {
    const {
      margin: F,
      containerPadding: $,
      cols: ke,
      rowHeight: be,
      maxRows: K
    } = I, N = u(I);
    let x = Math.round((M - $[0]) / (N + F[0])), a = Math.round((Y - $[1]) / (be + F[1]));
    return x = P(x, 0, ke - A), a = P(a, 0, K - V), {
      x,
      y: a
    };
  }
  function k(I, Y, M, A, V, F) {
    const {
      margin: $,
      maxRows: ke,
      cols: be,
      rowHeight: K
    } = I, N = u(I);
    let x = Math.round((Y + $[0]) / (N + $[0])), a = Math.round((M + $[1]) / (K + $[1])), h = P(x, 0, be - A), d = P(a, 0, ke - V);
    return ["sw", "w", "nw"].indexOf(F) !== -1 && (h = P(x, 0, be)), ["nw", "n", "ne"].indexOf(F) !== -1 && (d = P(a, 0, ke)), {
      w: h,
      h: d
    };
  }
  function P(I, Y, M) {
    return Math.max(Math.min(I, M), Y);
  }
  return an;
}
var oi = {}, ks = { exports: {} }, Es, Rc;
function hp() {
  if (Rc) return Es;
  Rc = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Es = u, Es;
}
var bs, Oc;
function gp() {
  if (Oc) return bs;
  Oc = 1;
  var u = /* @__PURE__ */ hp();
  function c() {
  }
  function l() {
  }
  return l.resetWarningCache = c, bs = function() {
    function f(I, Y, M, A, V, F) {
      if (F !== u) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    f.isRequired = f;
    function k() {
      return f;
    }
    var P = {
      array: f,
      bigint: f,
      bool: f,
      func: f,
      number: f,
      object: f,
      string: f,
      symbol: f,
      any: f,
      arrayOf: k,
      element: f,
      elementType: f,
      instanceOf: k,
      node: f,
      objectOf: k,
      oneOf: k,
      oneOfType: k,
      shape: k,
      exact: k,
      checkPropTypes: l,
      resetWarningCache: c
    };
    return P.PropTypes = P, P;
  }, bs;
}
var Pc;
function Pn() {
  return Pc || (Pc = 1, ks.exports = /* @__PURE__ */ gp()()), ks.exports;
}
var li = { exports: {} }, zs, jc;
function mp() {
  if (jc) return zs;
  jc = 1;
  var u = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, k = Object.getPrototypeOf, P = Object.prototype.hasOwnProperty, I = (y, O) => {
    for (var H in O)
      c(y, H, { get: O[H], enumerable: !0 });
  }, Y = (y, O, H, ee) => {
    if (O && typeof O == "object" || typeof O == "function")
      for (let se of f(O))
        !P.call(y, se) && se !== H && c(y, se, { get: () => O[se], enumerable: !(ee = l(O, se)) || ee.enumerable });
    return y;
  }, M = (y, O, H) => (H = y != null ? u(k(y)) : {}, Y(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !y || !y.__esModule ? c(H, "default", { value: y, enumerable: !0 }) : H,
    y
  )), A = (y) => Y(c({}, "__esModule", { value: !0 }), y), V = {};
  I(V, {
    DraggableCore: () => Qe,
    default: () => at
  }), zs = A(V);
  var F = M(Ct()), $ = M(/* @__PURE__ */ Pn()), ke = M(hi()), be = jo();
  function K(y, O) {
    for (let H = 0, ee = y.length; H < ee; H++)
      if (O.apply(O, [y[H], H, y])) return y[H];
  }
  function N(y) {
    return typeof y == "function" || Object.prototype.toString.call(y) === "[object Function]";
  }
  function x(y) {
    return typeof y == "number" && !isNaN(y);
  }
  function a(y) {
    return parseInt(y, 10);
  }
  function h(y, O, H) {
    if (y[O])
      return new Error(`Invalid prop ${O} passed to ${H} - do not set this, set it on the child.`);
  }
  var d = ["Moz", "Webkit", "O", "ms"];
  function p(y = "transform") {
    var O, H;
    if (typeof window > "u") return "";
    const ee = (H = (O = window.document) == null ? void 0 : O.documentElement) == null ? void 0 : H.style;
    if (!ee || y in ee) return "";
    for (let se = 0; se < d.length; se++)
      if (m(y, d[se]) in ee) return d[se];
    return "";
  }
  function m(y, O) {
    return O ? `${O}${z(y)}` : y;
  }
  function z(y) {
    let O = "", H = !0;
    for (let ee = 0; ee < y.length; ee++)
      H ? (O += y[ee].toUpperCase(), H = !1) : y[ee] === "-" ? H = !0 : O += y[ee];
    return O;
  }
  var L = p(), B = "";
  function te(y, O) {
    var H;
    B || (B = (H = K([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(se) {
      return N(y[se]);
    })) != null ? H : "");
    const ee = y[B];
    return N(ee) ? !!ee.call(y, O) : !1;
  }
  function le(y, O, H) {
    let ee = y;
    do {
      if (te(ee, O)) return !0;
      if (ee === H) return !1;
      ee = ee.parentNode;
    } while (ee);
    return !1;
  }
  function ie(y, O, H, ee) {
    if (!y) return;
    const se = { capture: !0, ...ee }, Le = H;
    y.addEventListener ? y.addEventListener(O, Le, se) : y.attachEvent ? y.attachEvent("on" + O, Le) : y["on" + O] = Le;
  }
  function re(y, O, H, ee) {
    if (!y) return;
    const se = { capture: !0, ...ee }, Le = H;
    y.removeEventListener ? y.removeEventListener(O, Le, se) : y.detachEvent ? y.detachEvent("on" + O, Le) : y["on" + O] = null;
  }
  function me(y) {
    let O = y.clientHeight;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return O += a(H.borderTopWidth), O += a(H.borderBottomWidth), O;
  }
  function xe(y) {
    let O = y.clientWidth;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return O += a(H.borderLeftWidth), O += a(H.borderRightWidth), O;
  }
  function pe(y) {
    let O = y.clientHeight;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return O -= a(H.paddingTop), O -= a(H.paddingBottom), O;
  }
  function ue(y) {
    let O = y.clientWidth;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return O -= a(H.paddingLeft), O -= a(H.paddingRight), O;
  }
  function G(y, O, H) {
    const se = O === O.ownerDocument.body ? { left: 0, top: 0 } : O.getBoundingClientRect(), Le = (y.clientX + O.scrollLeft - se.left) / H, Ie = (y.clientY + O.scrollTop - se.top) / H;
    return { x: Le, y: Ie };
  }
  function W(y, O) {
    const H = w(y, O, "px");
    return { [m("transform", L)]: H };
  }
  function U(y, O) {
    return w(y, O, "");
  }
  function w({ x: y, y: O }, H, ee) {
    let se = `translate(${y}${ee},${O}${ee})`;
    if (H) {
      const Le = `${typeof H.x == "string" ? H.x : H.x + ee}`, Ie = `${typeof H.y == "string" ? H.y : H.y + ee}`;
      se = `translate(${Le}, ${Ie})` + se;
    }
    return se;
  }
  function D(y, O) {
    return y.targetTouches && K(y.targetTouches, (H) => O === H.identifier) || y.changedTouches && K(y.changedTouches, (H) => O === H.identifier);
  }
  function ye(y) {
    if (y.targetTouches && y.targetTouches[0]) return y.targetTouches[0].identifier;
    if (y.changedTouches && y.changedTouches[0]) return y.changedTouches[0].identifier;
  }
  function we() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Re(y, O) {
    if (!y) return;
    let H = y.getElementById("react-draggable-style-el");
    if (!H) {
      H = y.createElement("style"), H.type = "text/css", H.id = "react-draggable-style-el";
      const ee = O ?? we();
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
        const O = y.selection;
        if (O)
          O.empty();
        else {
          const H = (y.defaultView || window).getSelection();
          H && H.type !== "Caret" && H.removeAllRanges();
        }
      } catch {
      }
  }
  function Z(y, O) {
    y.classList ? y.classList.add(O) : y.className.match(new RegExp(`(?:^|\\s)${O}(?!\\S)`)) || (y.className += ` ${O}`);
  }
  function ae(y, O) {
    y.classList ? y.classList.remove(O) : y.className = y.className.replace(new RegExp(`(?:^|\\s)${O}(?!\\S)`, "g"), "");
  }
  function ze(y, O, H) {
    if (!y.props.bounds) return [O, H];
    let { bounds: ee } = y.props;
    ee = typeof ee == "string" ? ee : b(ee);
    const se = C(y);
    if (typeof ee == "string") {
      const { ownerDocument: Le } = se, Ie = Le.defaultView;
      if (!Ie)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Ke;
      if (ee === "parent" ? Ke = se.parentNode : Ke = se.getRootNode().querySelector(ee), !(Ke instanceof Ie.HTMLElement))
        throw new Error('Bounds selector "' + ee + '" could not find an element.');
      const ft = Ke, At = Ie.getComputedStyle(se), Gt = Ie.getComputedStyle(ft);
      ee = {
        left: -se.offsetLeft + a(Gt.paddingLeft) + a(At.marginLeft),
        top: -se.offsetTop + a(Gt.paddingTop) + a(At.marginTop),
        right: ue(ft) - xe(se) - se.offsetLeft + a(Gt.paddingRight) - a(At.marginRight),
        bottom: pe(ft) - me(se) - se.offsetTop + a(Gt.paddingBottom) - a(At.marginBottom)
      };
    }
    return x(ee.right) && (O = Math.min(O, ee.right)), x(ee.bottom) && (H = Math.min(H, ee.bottom)), x(ee.left) && (O = Math.max(O, ee.left)), x(ee.top) && (H = Math.max(H, ee.top)), [O, H];
  }
  function je(y, O, H) {
    const ee = Math.round(O / y[0]) * y[0], se = Math.round(H / y[1]) * y[1];
    return [ee, se];
  }
  function Me(y) {
    return y.props.axis === "both" || y.props.axis === "x";
  }
  function Fe(y) {
    return y.props.axis === "both" || y.props.axis === "y";
  }
  function $e(y, O, H) {
    const ee = typeof O == "number" ? D(y, O) : null;
    if (typeof O == "number" && !ee) return null;
    const se = C(H), Le = H.props.offsetParent || se.offsetParent || se.ownerDocument.body;
    return G(ee || y, Le, H.props.scale);
  }
  function nt(y, O, H) {
    const ee = !x(y.lastX), se = C(y);
    return ee ? {
      node: se,
      deltaX: 0,
      deltaY: 0,
      lastX: O,
      lastY: H,
      x: O,
      y: H
    } : {
      node: se,
      deltaX: O - y.lastX,
      deltaY: H - y.lastY,
      lastX: y.lastX,
      lastY: y.lastY,
      x: O,
      y: H
    };
  }
  function _(y, O) {
    const H = y.props.scale;
    return {
      node: O.node,
      x: y.state.x + O.deltaX / H,
      y: y.state.y + O.deltaY / H,
      deltaX: O.deltaX / H,
      deltaY: O.deltaY / H,
      lastX: y.state.x,
      lastY: y.state.y
    };
  }
  function b(y) {
    return {
      left: y.left,
      top: y.top,
      right: y.right,
      bottom: y.bottom
    };
  }
  function C(y) {
    const O = y.findDOMNode();
    if (!O)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return O;
  }
  var q = M(Ct()), oe = M(/* @__PURE__ */ Pn()), ge = M(hi()), Ee = function() {
  }, Oe = Ee, Ne = {
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
  }, qe = Ne.mouse, Qe = class extends q.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (y) => {
        if (this.props.onMouseDown(y), !this.props.allowAnyClick && (typeof y.button == "number" && y.button !== 0 || y.ctrlKey)) return !1;
        const O = this.findDOMNode();
        if (!O || !O.ownerDocument || !O.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: H } = O;
        if (this.props.disabled || !(y.target instanceof H.defaultView.Node) || this.props.handle && !le(y.target, this.props.handle, O) || this.props.cancel && le(y.target, this.props.cancel, O))
          return;
        y.type === "touchstart" && !this.props.allowMobileScroll && y.preventDefault();
        const ee = ye(y);
        this.touchIdentifier = ee;
        const se = $e(y, ee, this);
        if (se == null) return;
        const { x: Le, y: Ie } = se, Ke = nt(this, Le, Ie);
        Oe("calling", this.props.onStart), !(this.props.onStart(y, Ke) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Re(H, this.props.nonce), this.dragging = !0, this.lastX = Le, this.lastY = Ie, ie(H, qe.move, this.handleDrag), ie(H, qe.stop, this.handleDragStop));
      }, this.handleDrag = (y) => {
        const O = $e(y, this.touchIdentifier, this);
        if (O == null) return;
        let { x: H, y: ee } = O;
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
        const O = $e(y, this.touchIdentifier, this);
        if (O == null) return;
        let { x: H, y: ee } = O;
        if (Array.isArray(this.props.grid)) {
          let Ke = H - this.lastX || 0, ft = ee - this.lastY || 0;
          [Ke, ft] = je(this.props.grid, Ke, ft), H = this.lastX + Ke, ee = this.lastY + ft;
        }
        const se = nt(this, H, ee);
        if (this.props.onStop(y, se) === !1 || this.mounted === !1) return !1;
        const Ie = this.findDOMNode();
        Ie && this.props.enableUserSelectHack && Pe(Ie.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Ie && (re(Ie.ownerDocument, qe.move, this.handleDrag), re(Ie.ownerDocument, qe.stop, this.handleDragStop));
      }, this.onMouseDown = (y) => (qe = Ne.mouse, this.handleDragStart(y)), this.onMouseUp = (y) => (qe = Ne.mouse, this.handleDragStop(y)), this.onTouchStart = (y) => (qe = Ne.touch, this.handleDragStart(y)), this.onTouchEnd = (y) => (qe = Ne.touch, this.handleDragStop(y));
    }
    componentDidMount() {
      this.mounted = !0;
      const y = this.findDOMNode();
      y && ie(y, Ne.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const y = this.findDOMNode();
      if (y) {
        const { ownerDocument: O } = y;
        re(O, Ne.mouse.move, this.handleDrag), re(O, Ne.touch.move, this.handleDrag), re(O, Ne.mouse.stop, this.handleDragStop), re(O, Ne.touch.stop, this.handleDragStop), re(y, Ne.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Pe(O);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var y;
      if ((y = this.props) != null && y.nodeRef)
        return this.props.nodeRef.current;
      const O = ge.default;
      return typeof O.findDOMNode == "function" ? O.findDOMNode(this) : null;
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
    offsetParent: function(y, O) {
      if (y[O] && y[O].nodeType !== 1)
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
  var at = class extends F.Component {
    constructor(y) {
      super(y), this.onDragStart = (O, H) => {
        if (this.props.onStart(O, _(this, H)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (O, H) => {
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
        if (this.props.onDrag(O, ee) === !1) return !1;
        this.setState(se);
      }, this.onDragStop = (O, H) => {
        if (!this.state.dragging || this.props.onStop(O, _(this, H)) === !1) return !1;
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
    static getDerivedStateFromProps({ position: y }, { prevPropsPosition: O }) {
      return y && (!O || y.x !== O.x || y.y !== O.y) ? {
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
      const O = ke.default;
      return typeof O.findDOMNode == "function" ? O.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: y,
        bounds: O,
        children: H,
        defaultPosition: ee,
        defaultClassName: se,
        defaultClassNameDragging: Le,
        defaultClassNameDragged: Ie,
        position: Ke,
        positionOffset: ft,
        scale: At,
        ...Gt
      } = this.props;
      let jn = {}, Vn = null;
      const Zt = !!!Ke || this.state.dragging, xr = Ke || ee, wr = {
        // Set left if horizontal drag is enabled
        x: Me(this) && Zt ? this.state.x : xr.x,
        // Set top if vertical drag is enabled
        y: Fe(this) && Zt ? this.state.y : xr.y
      };
      this.state.isElementSVG ? Vn = U(wr, ft) : jn = W(wr, ft);
      const Yn = F.Children.only(H), gi = (0, be.clsx)(Yn.props.className || "", se, {
        [Le]: this.state.dragging,
        [Ie]: this.state.dragged
      });
      return /* @__PURE__ */ F.createElement(Qe, { ...Gt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, F.cloneElement(Yn, {
        className: gi,
        style: { ...Yn.props.style, ...jn },
        transform: Vn
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
    axis: $.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: $.default.oneOfType([
      $.default.shape({
        left: $.default.number,
        right: $.default.number,
        top: $.default.number,
        bottom: $.default.number
      }),
      $.default.string,
      $.default.oneOf([!1])
    ]),
    defaultClassName: $.default.string,
    defaultClassNameDragging: $.default.string,
    defaultClassNameDragged: $.default.string,
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
    defaultPosition: $.default.shape({
      x: $.default.number,
      y: $.default.number
    }),
    positionOffset: $.default.shape({
      x: $.default.oneOfType([$.default.number, $.default.string]),
      y: $.default.oneOfType([$.default.number, $.default.string])
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
    position: $.default.shape({
      x: $.default.number,
      y: $.default.number
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
  }, zs;
}
var Dc;
function Ds() {
  if (Dc) return li.exports;
  Dc = 1;
  const u = mp(), c = u.DraggableCore, l = u.default || u;
  return li.exports = l, li.exports.default = l, li.exports.DraggableCore = c, li.exports;
}
var si = { exports: {} }, ai = {}, zo = {}, Nc;
function yp() {
  if (Nc) return zo;
  Nc = 1, zo.__esModule = !0, zo.cloneElement = Y;
  var u = c(Ct());
  function c(M) {
    return M && M.__esModule ? M : { default: M };
  }
  function l(M, A) {
    var V = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(M);
      A && (F = F.filter(function($) {
        return Object.getOwnPropertyDescriptor(M, $).enumerable;
      })), V.push.apply(V, F);
    }
    return V;
  }
  function f(M) {
    for (var A = 1; A < arguments.length; A++) {
      var V = arguments[A] != null ? arguments[A] : {};
      A % 2 ? l(Object(V), !0).forEach(function(F) {
        k(M, F, V[F]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(V)) : l(Object(V)).forEach(function(F) {
        Object.defineProperty(M, F, Object.getOwnPropertyDescriptor(V, F));
      });
    }
    return M;
  }
  function k(M, A, V) {
    return A = P(A), A in M ? Object.defineProperty(M, A, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : M[A] = V, M;
  }
  function P(M) {
    var A = I(M, "string");
    return typeof A == "symbol" ? A : String(A);
  }
  function I(M, A) {
    if (typeof M != "object" || M === null) return M;
    var V = M[Symbol.toPrimitive];
    if (V !== void 0) {
      var F = V.call(M, A);
      if (typeof F != "object") return F;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (A === "string" ? String : Number)(M);
  }
  function Y(M, A) {
    return A.style && M.props.style && (A.style = f(f({}, M.props.style), A.style)), A.className && M.props.className && (A.className = M.props.className + " " + A.className), /* @__PURE__ */ u.default.cloneElement(M, A);
  }
  return zo;
}
var ui = {}, Tc;
function Vc() {
  if (Tc) return ui;
  Tc = 1, ui.__esModule = !0, ui.resizableProps = void 0;
  var u = c(/* @__PURE__ */ Pn());
  Ds();
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
      for (var k = arguments.length, P = new Array(k), I = 0; I < k; I++)
        P[I] = arguments[I];
      var Y = P[0];
      if (Y.axis === "both" || Y.axis === "y") {
        var M;
        return (M = u.default.number).isRequired.apply(M, P);
      }
      return u.default.number.apply(u.default, P);
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
      for (var k = arguments.length, P = new Array(k), I = 0; I < k; I++)
        P[I] = arguments[I];
      var Y = P[0];
      if (Y.axis === "both" || Y.axis === "x") {
        var M;
        return (M = u.default.number).isRequired.apply(M, P);
      }
      return u.default.number.apply(u.default, P);
    }
  };
  return ui.resizableProps = l, ui;
}
var Mc;
function Yc() {
  if (Mc) return ai;
  Mc = 1, ai.__esModule = !0, ai.default = void 0;
  var u = I(Ct()), c = Ds(), l = yp(), f = Vc(), k = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function P(x) {
    if (typeof WeakMap != "function") return null;
    var a = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (P = function(p) {
      return p ? h : a;
    })(x);
  }
  function I(x, a) {
    if (x && x.__esModule)
      return x;
    if (x === null || typeof x != "object" && typeof x != "function")
      return { default: x };
    var h = P(a);
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
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(x) {
      for (var a = 1; a < arguments.length; a++) {
        var h = arguments[a];
        for (var d in h)
          Object.prototype.hasOwnProperty.call(h, d) && (x[d] = h[d]);
      }
      return x;
    }, Y.apply(this, arguments);
  }
  function M(x, a) {
    if (x == null) return {};
    var h = {}, d = Object.keys(x), p, m;
    for (m = 0; m < d.length; m++)
      p = d[m], !(a.indexOf(p) >= 0) && (h[p] = x[p]);
    return h;
  }
  function A(x, a) {
    var h = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(x);
      a && (d = d.filter(function(p) {
        return Object.getOwnPropertyDescriptor(x, p).enumerable;
      })), h.push.apply(h, d);
    }
    return h;
  }
  function V(x) {
    for (var a = 1; a < arguments.length; a++) {
      var h = arguments[a] != null ? arguments[a] : {};
      a % 2 ? A(Object(h), !0).forEach(function(d) {
        F(x, d, h[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(d) {
        Object.defineProperty(x, d, Object.getOwnPropertyDescriptor(h, d));
      });
    }
    return x;
  }
  function F(x, a, h) {
    return a = $(a), a in x ? Object.defineProperty(x, a, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : x[a] = h, x;
  }
  function $(x) {
    var a = ke(x, "string");
    return typeof a == "symbol" ? a : String(a);
  }
  function ke(x, a) {
    if (typeof x != "object" || x === null) return x;
    var h = x[Symbol.toPrimitive];
    if (h !== void 0) {
      var d = h.call(x, a);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(x);
  }
  function be(x, a) {
    x.prototype = Object.create(a.prototype), x.prototype.constructor = x, K(x, a);
  }
  function K(x, a) {
    return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, p) {
      return d.__proto__ = p, d;
    }, K(x, a);
  }
  var N = /* @__PURE__ */ function(x) {
    be(a, x);
    function a() {
      for (var d, p = arguments.length, m = new Array(p), z = 0; z < p; z++)
        m[z] = arguments[z];
      return d = x.call.apply(x, [this].concat(m)) || this, d.handleRefs = {}, d.lastHandleRect = null, d.slack = null, d;
    }
    var h = a.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(p, m) {
      var z = this.props, L = z.minConstraints, B = z.maxConstraints, te = z.lockAspectRatio;
      if (!L && !B && !te) return [p, m];
      if (te) {
        var le = this.props.width / this.props.height, ie = p - this.props.width, re = m - this.props.height;
        Math.abs(ie) > Math.abs(re * le) ? m = p / le : p = m * le;
      }
      var me = p, xe = m, pe = this.slack || [0, 0], ue = pe[0], G = pe[1];
      return p += ue, m += G, L && (p = Math.max(L[0], p), m = Math.max(L[1], m)), B && (p = Math.min(B[0], p), m = Math.min(B[1], m)), this.slack = [ue + (me - p), G + (xe - m)], [p, m];
    }, h.resizeHandler = function(p, m) {
      var z = this;
      return function(L, B) {
        var te = B.node, le = B.deltaX, ie = B.deltaY;
        p === "onResizeStart" && z.resetData();
        var re = (z.props.axis === "both" || z.props.axis === "x") && m !== "n" && m !== "s", me = (z.props.axis === "both" || z.props.axis === "y") && m !== "e" && m !== "w";
        if (!(!re && !me)) {
          var xe = m[0], pe = m[m.length - 1], ue = te.getBoundingClientRect();
          if (z.lastHandleRect != null) {
            if (pe === "w") {
              var G = ue.left - z.lastHandleRect.left;
              le += G;
            }
            if (xe === "n") {
              var W = ue.top - z.lastHandleRect.top;
              ie += W;
            }
          }
          z.lastHandleRect = ue, pe === "w" && (le = -le), xe === "n" && (ie = -ie);
          var U = z.props.width + (re ? le / z.props.transformScale : 0), w = z.props.height + (me ? ie / z.props.transformScale : 0), D = z.runConstraints(U, w);
          U = D[0], w = D[1];
          var ye = U !== z.props.width || w !== z.props.height, we = typeof z.props[p] == "function" ? z.props[p] : null, Re = p === "onResize" && !ye;
          we && !Re && (L.persist == null || L.persist(), we(L, {
            node: te,
            size: {
              width: U,
              height: w
            },
            handle: m
          })), p === "onResizeStop" && z.resetData();
        }
      };
    }, h.renderResizeHandle = function(p, m) {
      var z = this.props.handle;
      if (!z)
        return /* @__PURE__ */ u.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + p,
          ref: m
        });
      if (typeof z == "function")
        return z(p, m);
      var L = typeof z.type == "string", B = V({
        ref: m
      }, L ? {} : {
        handleAxis: p
      });
      return /* @__PURE__ */ u.cloneElement(z, B);
    }, h.render = function() {
      var p = this, m = this.props, z = m.children, L = m.className, B = m.draggableOpts;
      m.width, m.height, m.handle, m.handleSize, m.lockAspectRatio, m.axis, m.minConstraints, m.maxConstraints, m.onResize, m.onResizeStop, m.onResizeStart;
      var te = m.resizeHandles;
      m.transformScale;
      var le = M(m, k);
      return (0, l.cloneElement)(z, V(V({}, le), {}, {
        className: (L ? L + " " : "") + "react-resizable",
        children: [].concat(z.props.children, te.map(function(ie) {
          var re, me = (re = p.handleRefs[ie]) != null ? re : p.handleRefs[ie] = /* @__PURE__ */ u.createRef();
          return /* @__PURE__ */ u.createElement(c.DraggableCore, Y({}, B, {
            nodeRef: me,
            key: "resizableHandle-" + ie,
            onStop: p.resizeHandler("onResizeStop", ie),
            onStart: p.resizeHandler("onResizeStart", ie),
            onDrag: p.resizeHandler("onResize", ie)
          }), p.renderResizeHandle(ie, me));
        }))
      }));
    }, a;
  }(u.Component);
  return ai.default = N, N.propTypes = f.resizableProps, N.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, ai;
}
var ci = {}, Lc;
function vp() {
  if (Lc) return ci;
  Lc = 1, ci.__esModule = !0, ci.default = void 0;
  var u = Y(Ct()), c = P(/* @__PURE__ */ Pn()), l = P(Yc()), f = Vc(), k = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function P(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function I(a) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (I = function(m) {
      return m ? d : h;
    })(a);
  }
  function Y(a, h) {
    if (a && a.__esModule)
      return a;
    if (a === null || typeof a != "object" && typeof a != "function")
      return { default: a };
    var d = I(h);
    if (d && d.has(a))
      return d.get(a);
    var p = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var z in a)
      if (z !== "default" && Object.prototype.hasOwnProperty.call(a, z)) {
        var L = m ? Object.getOwnPropertyDescriptor(a, z) : null;
        L && (L.get || L.set) ? Object.defineProperty(p, z, L) : p[z] = a[z];
      }
    return p.default = a, d && d.set(a, p), p;
  }
  function M() {
    return M = Object.assign ? Object.assign.bind() : function(a) {
      for (var h = 1; h < arguments.length; h++) {
        var d = arguments[h];
        for (var p in d)
          Object.prototype.hasOwnProperty.call(d, p) && (a[p] = d[p]);
      }
      return a;
    }, M.apply(this, arguments);
  }
  function A(a, h) {
    var d = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(a);
      h && (p = p.filter(function(m) {
        return Object.getOwnPropertyDescriptor(a, m).enumerable;
      })), d.push.apply(d, p);
    }
    return d;
  }
  function V(a) {
    for (var h = 1; h < arguments.length; h++) {
      var d = arguments[h] != null ? arguments[h] : {};
      h % 2 ? A(Object(d), !0).forEach(function(p) {
        F(a, p, d[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(d)) : A(Object(d)).forEach(function(p) {
        Object.defineProperty(a, p, Object.getOwnPropertyDescriptor(d, p));
      });
    }
    return a;
  }
  function F(a, h, d) {
    return h = $(h), h in a ? Object.defineProperty(a, h, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : a[h] = d, a;
  }
  function $(a) {
    var h = ke(a, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function ke(a, h) {
    if (typeof a != "object" || a === null) return a;
    var d = a[Symbol.toPrimitive];
    if (d !== void 0) {
      var p = d.call(a, h);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(a);
  }
  function be(a, h) {
    if (a == null) return {};
    var d = {}, p = Object.keys(a), m, z;
    for (z = 0; z < p.length; z++)
      m = p[z], !(h.indexOf(m) >= 0) && (d[m] = a[m]);
    return d;
  }
  function K(a, h) {
    a.prototype = Object.create(h.prototype), a.prototype.constructor = a, N(a, h);
  }
  function N(a, h) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, m) {
      return p.__proto__ = m, p;
    }, N(a, h);
  }
  var x = /* @__PURE__ */ function(a) {
    K(h, a);
    function h() {
      for (var p, m = arguments.length, z = new Array(m), L = 0; L < m; L++)
        z[L] = arguments[L];
      return p = a.call.apply(a, [this].concat(z)) || this, p.state = {
        width: p.props.width,
        height: p.props.height,
        propsWidth: p.props.width,
        propsHeight: p.props.height
      }, p.onResize = function(B, te) {
        var le = te.size;
        p.props.onResize ? (B.persist == null || B.persist(), p.setState(le, function() {
          return p.props.onResize && p.props.onResize(B, te);
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
      var m = this.props, z = m.handle, L = m.handleSize;
      m.onResize;
      var B = m.onResizeStart, te = m.onResizeStop, le = m.draggableOpts, ie = m.minConstraints, re = m.maxConstraints, me = m.lockAspectRatio, xe = m.axis;
      m.width, m.height;
      var pe = m.resizeHandles, ue = m.style, G = m.transformScale, W = be(m, k);
      return /* @__PURE__ */ u.createElement(l.default, {
        axis: xe,
        draggableOpts: le,
        handle: z,
        handleSize: L,
        height: this.state.height,
        lockAspectRatio: me,
        maxConstraints: re,
        minConstraints: ie,
        onResizeStart: B,
        onResize: this.onResize,
        onResizeStop: te,
        resizeHandles: pe,
        transformScale: G,
        width: this.state.width
      }, /* @__PURE__ */ u.createElement("div", M({}, W, {
        style: V(V({}, ue), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(u.Component);
  return ci.default = x, x.propTypes = V(V({}, f.resizableProps), {}, {
    children: c.default.element
  }), ci;
}
var Ic;
function xp() {
  return Ic || (Ic = 1, si.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, si.exports.Resizable = Yc().default, si.exports.ResizableBox = vp().default), si.exports;
}
var un = {}, Ac;
function Xc() {
  if (Ac) return un;
  Ac = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var u = l(/* @__PURE__ */ Pn()), c = l(Ct());
  function l(P) {
    return P && P.__esModule ? P : { default: P };
  }
  const f = un.resizeHandleAxesType = u.default.arrayOf(u.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), k = un.resizeHandleType = u.default.oneOfType([u.default.node, u.default.func]);
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
    verticalCompact: function(P) {
      P.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: u.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(P) {
      var I = P.layout;
      I !== void 0 && vr().validateLayout(I, "layout");
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
    resizeHandles: f,
    resizeHandle: k,
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
    children: function(P, I) {
      const Y = P[I], M = {};
      c.default.Children.forEach(Y, function(A) {
        if (A?.key != null) {
          if (M[A.key])
            throw new Error('Duplicate child key "' + A.key + '" found! This will cause problems in ReactGridLayout.');
          M[A.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: u.default.any
  }, un;
}
var Wc;
function wp() {
  if (Wc) return oi;
  Wc = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var u = A(Ct()), c = hi(), l = A(/* @__PURE__ */ Pn()), f = Ds(), k = xp(), P = vr(), I = js(), Y = Xc(), M = A(jo());
  function A(N) {
    return N && N.__esModule ? N : { default: N };
  }
  function V(N, x) {
    var a = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(N);
      x && (h = h.filter(function(d) {
        return Object.getOwnPropertyDescriptor(N, d).enumerable;
      })), a.push.apply(a, h);
    }
    return a;
  }
  function F(N) {
    for (var x = 1; x < arguments.length; x++) {
      var a = arguments[x] != null ? arguments[x] : {};
      x % 2 ? V(Object(a), !0).forEach(function(h) {
        $(N, h, a[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(a)) : V(Object(a)).forEach(function(h) {
        Object.defineProperty(N, h, Object.getOwnPropertyDescriptor(a, h));
      });
    }
    return N;
  }
  function $(N, x, a) {
    return (x = ke(x)) in N ? Object.defineProperty(N, x, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : N[x] = a, N;
  }
  function ke(N) {
    var x = be(N, "string");
    return typeof x == "symbol" ? x : x + "";
  }
  function be(N, x) {
    if (typeof N != "object" || !N) return N;
    var a = N[Symbol.toPrimitive];
    if (a !== void 0) {
      var h = a.call(N, x);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(N);
  }
  let K = class extends u.default.Component {
    constructor() {
      super(...arguments), $(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), $(this, "elementRef", /* @__PURE__ */ u.default.createRef()), $(this, "onDragStart", (x, a) => {
        let {
          node: h
        } = a;
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
        const L = z.getBoundingClientRect(), B = h.getBoundingClientRect(), te = B.left / p, le = L.left / p, ie = B.top / p, re = L.top / p;
        m.left = te - le + z.scrollLeft, m.top = ie - re + z.scrollTop, this.setState({
          dragging: m
        });
        const {
          x: me,
          y: xe
        } = (0, I.calcXY)(this.getPositionParams(), m.top, m.left, this.props.w, this.props.h);
        return d.call(this, this.props.i, me, xe, {
          e: x,
          node: h,
          newPosition: m
        });
      }), $(this, "onDrag", (x, a, h) => {
        let {
          node: d,
          deltaX: p,
          deltaY: m
        } = a;
        const {
          onDrag: z
        } = this.props;
        if (!z) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let L = this.state.dragging.top + m, B = this.state.dragging.left + p;
        const {
          isBounded: te,
          i: le,
          w: ie,
          h: re,
          containerWidth: me
        } = this.props, xe = this.getPositionParams();
        if (te) {
          const {
            offsetParent: W
          } = d;
          if (W) {
            const {
              margin: U,
              rowHeight: w
            } = this.props, D = W.clientHeight - (0, I.calcGridItemWHPx)(re, w, U[1]);
            L = (0, I.clamp)(L, 0, D);
            const ye = (0, I.calcGridColWidth)(xe), we = me - (0, I.calcGridItemWHPx)(ie, ye, U[0]);
            B = (0, I.clamp)(B, 0, we);
          }
        }
        const pe = {
          top: L,
          left: B
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
        } = (0, I.calcXY)(xe, L, B, ie, re);
        return z.call(this, le, ue, G, {
          e: x,
          node: d,
          newPosition: pe
        });
      }), $(this, "onDragStop", (x, a) => {
        let {
          node: h
        } = a;
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
          left: L,
          top: B
        } = this.state.dragging, te = {
          top: B,
          left: L
        };
        this.setState({
          dragging: null
        });
        const {
          x: le,
          y: ie
        } = (0, I.calcXY)(this.getPositionParams(), B, L, p, m);
        return d.call(this, z, le, ie, {
          e: x,
          node: h,
          newPosition: te
        });
      }), $(this, "onResizeStop", (x, a, h) => this.onResizeHandler(x, a, h, "onResizeStop")), $(this, "onResizeStart", (x, a, h) => this.onResizeHandler(x, a, h, "onResizeStart")), $(this, "onResize", (x, a, h) => this.onResizeHandler(x, a, h, "onResize"));
    }
    shouldComponentUpdate(x, a) {
      if (this.props.children !== x.children || this.props.droppingPosition !== x.droppingPosition) return !0;
      const h = (0, I.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), d = (0, I.calcGridItemPosition)(this.getPositionParams(x), x.x, x.y, x.w, x.h, a);
      return !(0, P.fastPositionEqual)(h, d) || this.props.useCSSTransforms !== x.useCSSTransforms;
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
        droppingPosition: a
      } = this.props;
      if (!a) return;
      const h = this.elementRef.current;
      if (!h) return;
      const d = x.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: p
      } = this.state, m = p && a.left !== d.left || a.top !== d.top;
      if (!p)
        this.onDragStart(a.e, {
          node: h,
          deltaX: a.left,
          deltaY: a.top
        });
      else if (m) {
        const z = a.left - p.left, L = a.top - p.top;
        this.onDrag(
          a.e,
          {
            node: h,
            deltaX: z,
            deltaY: L
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
        usePercentages: a,
        containerWidth: h,
        useCSSTransforms: d
      } = this.props;
      let p;
      return d ? p = (0, P.setTransform)(x) : (p = (0, P.setTopLeft)(x), a && (p.left = (0, P.perc)(x.left / h), p.width = (0, P.perc)(x.width / h))), p;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(x, a) {
      return /* @__PURE__ */ u.default.createElement(f.DraggableCore, {
        disabled: !a,
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
    curryResizeHandler(x, a) {
      return (h, d) => (
        /*: Function*/
        a(h, d, x)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(x, a, h) {
      const {
        cols: d,
        minW: p,
        minH: m,
        maxW: z,
        maxH: L,
        transformScale: B,
        resizeHandles: te,
        resizeHandle: le
      } = this.props, ie = this.getPositionParams(), re = (0, I.calcGridItemPosition)(ie, 0, 0, d, 0).width, me = (0, I.calcGridItemPosition)(ie, 0, 0, p, m), xe = (0, I.calcGridItemPosition)(ie, 0, 0, z, L), pe = [me.width, me.height], ue = [Math.min(xe.width, re), Math.min(xe.height, 1 / 0)];
      return /* @__PURE__ */ u.default.createElement(
        k.Resizable,
        {
          draggableOpts: {
            disabled: !h
          },
          className: h ? void 0 : "react-resizable-hide",
          width: a.width,
          height: a.height,
          minConstraints: pe,
          maxConstraints: ue,
          onResizeStop: this.curryResizeHandler(a, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(a, this.onResizeStart),
          onResize: this.curryResizeHandler(a, this.onResize),
          transformScale: B,
          resizeHandles: te,
          handle: le
        },
        x
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(x, a, h, d) {
      let {
        node: p,
        size: m,
        handle: z
      } = a;
      const L = this.props[d];
      if (!L) return;
      const {
        x: B,
        y: te,
        i: le,
        maxH: ie,
        minH: re,
        containerWidth: me
      } = this.props, {
        minW: xe,
        maxW: pe
      } = this.props;
      let ue = m;
      p && (ue = (0, P.resizeItemInDirection)(z, h, m, me), (0, c.flushSync)(() => {
        this.setState({
          resizing: d === "onResizeStop" ? null : ue
        });
      }));
      let {
        w: G,
        h: W
      } = (0, I.calcWH)(this.getPositionParams(), ue.width, ue.height, B, te, z);
      G = (0, I.clamp)(G, Math.max(xe, 1), pe), W = (0, I.clamp)(W, re, ie), L.call(this, le, G, W, {
        e: x,
        node: p,
        size: ue,
        handle: z
      });
    }
    render() {
      const {
        x,
        y: a,
        w: h,
        h: d,
        isDraggable: p,
        isResizable: m,
        droppingPosition: z,
        useCSSTransforms: L
      } = this.props, B = (0, I.calcGridItemPosition)(this.getPositionParams(), x, a, h, d, this.state), te = u.default.Children.only(this.props.children);
      let le = /* @__PURE__ */ u.default.cloneElement(te, {
        ref: this.elementRef,
        className: (0, M.default)("react-grid-item", te.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": p,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!z,
          cssTransforms: L
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: F(F(F({}, this.props.style), te.props.style), this.createStyle(B))
      });
      return le = this.mixinResizable(le, B, m), le = this.mixinDraggable(le, p), le;
    }
  };
  return oi.default = K, $(K, "propTypes", {
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
      const a = N[x];
      if (typeof a != "number") return new Error("minWidth not Number");
      if (a > N.w || a > N.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(N, x) {
      const a = N[x];
      if (typeof a != "number") return new Error("maxWidth not Number");
      if (a < N.w || a < N.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(N, x) {
      const a = N[x];
      if (typeof a != "number") return new Error("minHeight not Number");
      if (a > N.h || a > N.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(N, x) {
      const a = N[x];
      if (typeof a != "number") return new Error("maxHeight not Number");
      if (a < N.h || a < N.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: l.default.string.isRequired,
    // Resize handle options
    resizeHandles: Y.resizeHandleAxesType,
    resizeHandle: Y.resizeHandleType,
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
  }), $(K, "defaultProps", {
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
var Hc;
function Qc() {
  if (Hc) return ii;
  Hc = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.default = void 0;
  var u = M(Ct()), c = /* @__PURE__ */ Ps(), l = Y(jo()), f = vr(), k = js(), P = Y(wp()), I = Y(Xc());
  function Y(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function M(x, a) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (M = function(p, m) {
      if (!m && p && p.__esModule) return p;
      var z, L, B = { __proto__: null, default: p };
      if (p === null || typeof p != "object" && typeof p != "function") return B;
      if (z = m ? d : h) {
        if (z.has(p)) return z.get(p);
        z.set(p, B);
      }
      for (const te in p) te !== "default" && {}.hasOwnProperty.call(p, te) && ((L = (z = Object.defineProperty) && Object.getOwnPropertyDescriptor(p, te)) && (L.get || L.set) ? z(B, te, L) : B[te] = p[te]);
      return B;
    })(x, a);
  }
  function A(x, a) {
    var h = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(x);
      a && (d = d.filter(function(p) {
        return Object.getOwnPropertyDescriptor(x, p).enumerable;
      })), h.push.apply(h, d);
    }
    return h;
  }
  function V(x) {
    for (var a = 1; a < arguments.length; a++) {
      var h = arguments[a] != null ? arguments[a] : {};
      a % 2 ? A(Object(h), !0).forEach(function(d) {
        F(x, d, h[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(d) {
        Object.defineProperty(x, d, Object.getOwnPropertyDescriptor(h, d));
      });
    }
    return x;
  }
  function F(x, a, h) {
    return (a = $(a)) in x ? Object.defineProperty(x, a, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : x[a] = h, x;
  }
  function $(x) {
    var a = ke(x, "string");
    return typeof a == "symbol" ? a : a + "";
  }
  function ke(x, a) {
    if (typeof x != "object" || !x) return x;
    var h = x[Symbol.toPrimitive];
    if (h !== void 0) {
      var d = h.call(x, a);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(x);
  }
  const be = "react-grid-layout";
  let K = !1;
  try {
    K = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let N = class extends u.Component {
    constructor() {
      super(...arguments), F(this, "state", {
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
      }), F(this, "dragEnterCounter", 0), F(this, "onDragStart", (a, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          layout: L
        } = this.state, B = (0, f.getLayoutItem)(L, a);
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
          oldDragItem: (0, f.cloneLayoutItem)(B),
          oldLayout: L,
          activeDrag: te
        }), this.props.onDragStart(L, B, B, null, m, z);
      }), F(this, "onDrag", (a, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          oldDragItem: L
        } = this.state;
        let {
          layout: B
        } = this.state;
        const {
          cols: te,
          allowOverlap: le,
          preventCollision: ie
        } = this.props, re = (0, f.getLayoutItem)(B, a);
        if (!re) return;
        const me = {
          w: re.w,
          h: re.h,
          x: re.x,
          y: re.y,
          placeholder: !0,
          i: a
        };
        B = (0, f.moveElement)(B, re, h, d, !0, ie, (0, f.compactType)(this.props), te, le), this.props.onDrag(B, L, re, me, m, z), this.setState({
          layout: le ? B : (0, f.compact)(B, (0, f.compactType)(this.props), te),
          activeDrag: me
        });
      }), F(this, "onDragStop", (a, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: L
        } = this.state;
        let {
          layout: B
        } = this.state;
        const {
          cols: te,
          preventCollision: le,
          allowOverlap: ie
        } = this.props, re = (0, f.getLayoutItem)(B, a);
        if (!re) return;
        B = (0, f.moveElement)(B, re, h, d, !0, le, (0, f.compactType)(this.props), te, ie);
        const xe = ie ? B : (0, f.compact)(B, (0, f.compactType)(this.props), te);
        this.props.onDragStop(xe, L, re, null, m, z);
        const {
          oldLayout: pe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: xe,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(xe, pe);
      }), F(this, "onResizeStart", (a, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          layout: L
        } = this.state, B = (0, f.getLayoutItem)(L, a);
        B && (this.setState({
          oldResizeItem: (0, f.cloneLayoutItem)(B),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(L, B, B, null, m, z));
      }), F(this, "onResize", (a, h, d, p) => {
        let {
          e: m,
          node: z,
          size: L,
          handle: B
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
        let xe = !1, pe, ue, G;
        const [W, U] = (0, f.withLayoutItem)(le, a, (D) => {
          let ye;
          return ue = D.x, G = D.y, ["sw", "w", "nw", "n", "ne"].indexOf(B) !== -1 && (["sw", "nw", "w"].indexOf(B) !== -1 && (ue = D.x + (D.w - h), h = D.x !== ue && ue < 0 ? D.w : h, ue = ue < 0 ? 0 : ue), ["ne", "n", "nw"].indexOf(B) !== -1 && (G = D.y + (D.h - d), d = D.y !== G && G < 0 ? D.h : d, G = G < 0 ? 0 : G), xe = !0), re && !me && (ye = (0, f.getAllCollisions)(le, V(V({}, D), {}, {
            w: h,
            h: d,
            x: ue,
            y: G
          })).filter((Re) => Re.i !== D.i).length > 0, ye && (G = D.y, d = D.h, ue = D.x, h = D.w, xe = !1)), D.w = h, D.h = d, D;
        });
        if (!U) return;
        pe = W, xe && (pe = (0, f.moveElement)(W, U, ue, G, !0, this.props.preventCollision, (0, f.compactType)(this.props), ie, me));
        const w = {
          w: U.w,
          h: U.h,
          x: U.x,
          y: U.y,
          static: !0,
          i: a
        };
        this.props.onResize(pe, te, U, w, m, z), this.setState({
          layout: me ? pe : (0, f.compact)(pe, (0, f.compactType)(this.props), ie),
          activeDrag: w
        });
      }), F(this, "onResizeStop", (a, h, d, p) => {
        let {
          e: m,
          node: z
        } = p;
        const {
          layout: L,
          oldResizeItem: B
        } = this.state, {
          cols: te,
          allowOverlap: le
        } = this.props, ie = (0, f.getLayoutItem)(L, a), re = le ? L : (0, f.compact)(L, (0, f.compactType)(this.props), te);
        this.props.onResizeStop(re, B, ie, null, m, z);
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
      }), F(this, "onDragOver", (a) => {
        var h;
        if (a.preventDefault(), a.stopPropagation(), K && // $FlowIgnore can't figure this out
        !((h = a.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(be)))
          return !1;
        const {
          droppingItem: d,
          onDropDragOver: p,
          margin: m,
          cols: z,
          rowHeight: L,
          maxRows: B,
          width: te,
          containerPadding: le,
          transformScale: ie
        } = this.props, re = p?.(a);
        if (re === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const me = V(V({}, d), re), {
          layout: xe
        } = this.state, pe = a.currentTarget.getBoundingClientRect(), ue = a.clientX - pe.left, G = a.clientY - pe.top, W = {
          left: ue / ie,
          top: G / ie,
          e: a
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: U,
              top: w
            } = this.state.droppingPosition;
            (U != ue || w != G) && this.setState({
              droppingPosition: W
            });
          }
        } else {
          const U = {
            cols: z,
            margin: m,
            maxRows: B,
            rowHeight: L,
            containerWidth: te,
            containerPadding: le || m
          }, w = (0, k.calcXY)(U, G, ue, me.w, me.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ u.createElement("div", {
              key: me.i
            }),
            droppingPosition: W,
            layout: [...xe, V(V({}, me), {}, {
              x: w.x,
              y: w.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), F(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: a,
          cols: h
        } = this.props, {
          layout: d
        } = this.state, p = (0, f.compact)(d.filter((m) => m.i !== a.i), (0, f.compactType)(this.props), h, this.props.allowOverlap);
        this.setState({
          layout: p,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), F(this, "onDragLeave", (a) => {
        a.preventDefault(), a.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), F(this, "onDragEnter", (a) => {
        a.preventDefault(), a.stopPropagation(), this.dragEnterCounter++;
      }), F(this, "onDrop", (a) => {
        a.preventDefault(), a.stopPropagation();
        const {
          droppingItem: h
        } = this.props, {
          layout: d
        } = this.state, p = d.find((m) => m.i === h.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(d, p, a);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(a, h) {
      let d;
      return h.activeDrag ? null : (!(0, c.deepEqual)(a.layout, h.propsLayout) || a.compactType !== h.compactType ? d = a.layout : (0, f.childrenEqual)(a.children, h.children) || (d = h.layout), d ? {
        layout: (0, f.synchronizeLayoutWithChildren)(d, a.children, a.cols, (0, f.compactType)(a), a.allowOverlap),
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
        this.props.children !== a.children || !(0, f.fastRGLPropsEqual)(this.props, a, c.deepEqual) || this.state.activeDrag !== h.activeDrag || this.state.mounted !== h.mounted || this.state.droppingPosition !== h.droppingPosition
      );
    }
    componentDidUpdate(a, h) {
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
      const a = (0, f.bottom)(this.state.layout), h = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
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
        cols: d,
        margin: p,
        containerPadding: m,
        rowHeight: z,
        maxRows: L,
        useCSSTransforms: B,
        transformScale: te
      } = this.props;
      return /* @__PURE__ */ u.createElement(P.default, {
        w: a.w,
        h: a.h,
        x: a.x,
        y: a.y,
        i: a.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: h,
        cols: d,
        margin: p,
        containerPadding: m || p,
        maxRows: L,
        rowHeight: z,
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
      const d = (0, f.getLayoutItem)(this.state.layout, String(a.key));
      if (!d) return null;
      const {
        width: p,
        cols: m,
        margin: z,
        containerPadding: L,
        rowHeight: B,
        maxRows: te,
        isDraggable: le,
        isResizable: ie,
        isBounded: re,
        useCSSTransforms: me,
        transformScale: xe,
        draggableCancel: pe,
        draggableHandle: ue,
        resizeHandles: G,
        resizeHandle: W
      } = this.props, {
        mounted: U,
        droppingPosition: w
      } = this.state, D = typeof d.isDraggable == "boolean" ? d.isDraggable : !d.static && le, ye = typeof d.isResizable == "boolean" ? d.isResizable : !d.static && ie, we = d.resizeHandles || G, Re = D && re && d.isBounded !== !1;
      return /* @__PURE__ */ u.createElement(P.default, {
        containerWidth: p,
        cols: m,
        margin: z,
        containerPadding: L || z,
        maxRows: te,
        rowHeight: B,
        cancel: pe,
        handle: ue,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: D,
        isResizable: ye,
        isBounded: Re,
        useCSSTransforms: me && U,
        usePercentages: !U,
        transformScale: xe,
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
        resizeHandles: we,
        resizeHandle: W
      }, a);
    }
    render() {
      const {
        className: a,
        style: h,
        isDroppable: d,
        innerRef: p
      } = this.props, m = (0, l.default)(be, a), z = V({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ u.createElement("div", {
        ref: p,
        className: m,
        style: z,
        onDrop: d ? this.onDrop : f.noop,
        onDragLeave: d ? this.onDragLeave : f.noop,
        onDragEnter: d ? this.onDragEnter : f.noop,
        onDragOver: d ? this.onDragOver : f.noop
      }, u.Children.map(this.props.children, (L) => this.processGridItem(L)), d && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ii.default = N, F(N, "displayName", "ReactGridLayout"), F(N, "propTypes", I.default), F(N, "defaultProps", {
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
  }), ii;
}
var di = {}, Gn = {}, Fc;
function Kc() {
  if (Fc) return Gn;
  Fc = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.findOrGenerateResponsiveLayout = f, Gn.getBreakpointFromWidth = c, Gn.getColsFromBreakpoint = l, Gn.sortBreakpoints = k;
  var u = vr();
  function c(P, I) {
    const Y = k(P);
    let M = Y[0];
    for (let A = 1, V = Y.length; A < V; A++) {
      const F = Y[A];
      I > P[F] && (M = F);
    }
    return M;
  }
  function l(P, I) {
    if (!I[P])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + P + " is missing!");
    return I[P];
  }
  function f(P, I, Y, M, A, V) {
    if (P[Y]) return (0, u.cloneLayout)(P[Y]);
    let F = P[M];
    const $ = k(I), ke = $.slice($.indexOf(Y));
    for (let be = 0, K = ke.length; be < K; be++) {
      const N = ke[be];
      if (P[N]) {
        F = P[N];
        break;
      }
    }
    return F = (0, u.cloneLayout)(F || []), (0, u.compact)((0, u.correctBounds)(F, {
      cols: A
    }), V, A);
  }
  function k(P) {
    return Object.keys(P).sort(function(Y, M) {
      return P[Y] - P[M];
    });
  }
  return Gn;
}
var Bc;
function Sp() {
  if (Bc) return di;
  Bc = 1, Object.defineProperty(di, "__esModule", {
    value: !0
  }), di.default = void 0;
  var u = M(Ct()), c = Y(/* @__PURE__ */ Pn()), l = /* @__PURE__ */ Ps(), f = vr(), k = Kc(), P = Y(Qc());
  const I = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function Y(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function M(d, p) {
    if (typeof WeakMap == "function") var m = /* @__PURE__ */ new WeakMap(), z = /* @__PURE__ */ new WeakMap();
    return (M = function(L, B) {
      if (!B && L && L.__esModule) return L;
      var te, le, ie = { __proto__: null, default: L };
      if (L === null || typeof L != "object" && typeof L != "function") return ie;
      if (te = B ? z : m) {
        if (te.has(L)) return te.get(L);
        te.set(L, ie);
      }
      for (const re in L) re !== "default" && {}.hasOwnProperty.call(L, re) && ((le = (te = Object.defineProperty) && Object.getOwnPropertyDescriptor(L, re)) && (le.get || le.set) ? te(ie, re, le) : ie[re] = L[re]);
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
  function V(d, p) {
    if (d == null) return {};
    var m, z, L = F(d, p);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(d);
      for (z = 0; z < B.length; z++) m = B[z], p.indexOf(m) === -1 && {}.propertyIsEnumerable.call(d, m) && (L[m] = d[m]);
    }
    return L;
  }
  function F(d, p) {
    if (d == null) return {};
    var m = {};
    for (var z in d) if ({}.hasOwnProperty.call(d, z)) {
      if (p.indexOf(z) !== -1) continue;
      m[z] = d[z];
    }
    return m;
  }
  function $(d, p) {
    var m = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(d);
      p && (z = z.filter(function(L) {
        return Object.getOwnPropertyDescriptor(d, L).enumerable;
      })), m.push.apply(m, z);
    }
    return m;
  }
  function ke(d) {
    for (var p = 1; p < arguments.length; p++) {
      var m = arguments[p] != null ? arguments[p] : {};
      p % 2 ? $(Object(m), !0).forEach(function(z) {
        be(d, z, m[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(m)) : $(Object(m)).forEach(function(z) {
        Object.defineProperty(d, z, Object.getOwnPropertyDescriptor(m, z));
      });
    }
    return d;
  }
  function be(d, p, m) {
    return (p = K(p)) in d ? Object.defineProperty(d, p, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : d[p] = m, d;
  }
  function K(d) {
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
  function a(d, p) {
    return d == null ? null : Array.isArray(d) ? d : d[p];
  }
  let h = class extends u.Component {
    constructor() {
      super(...arguments), be(this, "state", this.generateInitialState()), be(this, "onLayoutChange", (p) => {
        this.props.onLayoutChange(p, ke(ke({}, this.props.layouts), {}, {
          [this.state.breakpoint]: p
        }));
      });
    }
    generateInitialState() {
      const {
        width: p,
        breakpoints: m,
        layouts: z,
        cols: L
      } = this.props, B = (0, k.getBreakpointFromWidth)(m, p), te = (0, k.getColsFromBreakpoint)(B, L), le = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, k.findOrGenerateResponsiveLayout)(z, m, B, B, te, le),
        breakpoint: B,
        cols: te
      };
    }
    static getDerivedStateFromProps(p, m) {
      if (!(0, l.deepEqual)(p.layouts, m.layouts)) {
        const {
          breakpoint: z,
          cols: L
        } = m;
        return {
          layout: (0, k.findOrGenerateResponsiveLayout)(p.layouts, p.breakpoints, z, z, L, p.compactType),
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
        layouts: L,
        compactType: B
      } = this.props, te = this.props.breakpoint || (0, k.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), le = this.state.breakpoint, ie = (0, k.getColsFromBreakpoint)(te, z), re = ke({}, L);
      if (le !== te || p.breakpoints !== m || p.cols !== z) {
        le in re || (re[le] = (0, f.cloneLayout)(this.state.layout));
        let pe = (0, k.findOrGenerateResponsiveLayout)(re, m, te, le, ie, B);
        pe = (0, f.synchronizeLayoutWithChildren)(pe, this.props.children, ie, B, this.props.allowOverlap), re[te] = pe, this.props.onBreakpointChange(te, ie), this.props.onLayoutChange(pe, re), this.setState({
          breakpoint: te,
          layout: pe,
          cols: ie
        });
      }
      const me = a(this.props.margin, te), xe = a(this.props.containerPadding, te);
      this.props.onWidthChange(this.props.width, me, ie, xe);
    }
    render() {
      const p = this.props, {
        breakpoint: m,
        breakpoints: z,
        cols: L,
        layouts: B,
        margin: te,
        containerPadding: le,
        onBreakpointChange: ie,
        onLayoutChange: re,
        onWidthChange: me
      } = p, xe = V(p, I);
      return /* @__PURE__ */ u.createElement(P.default, A({}, xe, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: a(te, this.state.breakpoint),
        containerPadding: a(le, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return di.default = h, be(h, "propTypes", {
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
  }), be(h, "defaultProps", {
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
  }), di;
}
var Co = {}, Zc = function() {
  if (typeof Map < "u")
    return Map;
  function u(c, l) {
    var f = -1;
    return c.some(function(k, P) {
      return k[0] === l ? (f = P, !0) : !1;
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
        var f = u(this.__entries__, l), k = this.__entries__[f];
        return k && k[1];
      }, c.prototype.set = function(l, f) {
        var k = u(this.__entries__, l);
        ~k ? this.__entries__[k][1] = f : this.__entries__.push([l, f]);
      }, c.prototype.delete = function(l) {
        var f = this.__entries__, k = u(f, l);
        ~k && f.splice(k, 1);
      }, c.prototype.has = function(l) {
        return !!~u(this.__entries__, l);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(l, f) {
        f === void 0 && (f = null);
        for (var k = 0, P = this.__entries__; k < P.length; k++) {
          var I = P[k];
          l.call(f, I[1], I[0]);
        }
      }, c;
    }()
  );
}(), Cs = typeof window < "u" && typeof document < "u" && window.document === document, Oo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), _p = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Oo) : function(u) {
    return setTimeout(function() {
      return u(Date.now());
    }, 1e3 / 60);
  };
}(), kp = 2;
function Ep(u, c) {
  var l = !1, f = !1, k = 0;
  function P() {
    l && (l = !1, u()), f && Y();
  }
  function I() {
    _p(P);
  }
  function Y() {
    var M = Date.now();
    if (l) {
      if (M - k < kp)
        return;
      f = !0;
    } else
      l = !0, f = !1, setTimeout(I, c);
    k = M;
  }
  return Y;
}
var bp = 20, zp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Cp = typeof MutationObserver < "u", Rp = (
  /** @class */
  function() {
    function u() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ep(this.refresh.bind(this), bp);
    }
    return u.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, u.prototype.removeObserver = function(c) {
      var l = this.observers_, f = l.indexOf(c);
      ~f && l.splice(f, 1), !l.length && this.connected_ && this.disconnect_();
    }, u.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, u.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(l) {
        return l.gatherActive(), l.hasActive();
      });
      return c.forEach(function(l) {
        return l.broadcastActive();
      }), c.length > 0;
    }, u.prototype.connect_ = function() {
      !Cs || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Cp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, u.prototype.disconnect_ = function() {
      !Cs || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, u.prototype.onTransitionEnd_ = function(c) {
      var l = c.propertyName, f = l === void 0 ? "" : l, k = zp.some(function(P) {
        return !!~f.indexOf(P);
      });
      k && this.refresh();
    }, u.getInstance = function() {
      return this.instance_ || (this.instance_ = new u()), this.instance_;
    }, u.instance_ = null, u;
  }()
), Jc = function(u, c) {
  for (var l = 0, f = Object.keys(c); l < f.length; l++) {
    var k = f[l];
    Object.defineProperty(u, k, {
      value: c[k],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return u;
}, yr = function(u) {
  var c = u && u.ownerDocument && u.ownerDocument.defaultView;
  return c || Oo;
}, ed = Do(0, 0, 0, 0);
function Po(u) {
  return parseFloat(u) || 0;
}
function Uc(u) {
  for (var c = [], l = 1; l < arguments.length; l++)
    c[l - 1] = arguments[l];
  return c.reduce(function(f, k) {
    var P = u["border-" + k + "-width"];
    return f + Po(P);
  }, 0);
}
function Op(u) {
  for (var c = ["top", "right", "bottom", "left"], l = {}, f = 0, k = c; f < k.length; f++) {
    var P = k[f], I = u["padding-" + P];
    l[P] = Po(I);
  }
  return l;
}
function Pp(u) {
  var c = u.getBBox();
  return Do(0, 0, c.width, c.height);
}
function jp(u) {
  var c = u.clientWidth, l = u.clientHeight;
  if (!c && !l)
    return ed;
  var f = yr(u).getComputedStyle(u), k = Op(f), P = k.left + k.right, I = k.top + k.bottom, Y = Po(f.width), M = Po(f.height);
  if (f.boxSizing === "border-box" && (Math.round(Y + P) !== c && (Y -= Uc(f, "left", "right") + P), Math.round(M + I) !== l && (M -= Uc(f, "top", "bottom") + I)), !Np(u)) {
    var A = Math.round(Y + P) - c, V = Math.round(M + I) - l;
    Math.abs(A) !== 1 && (Y -= A), Math.abs(V) !== 1 && (M -= V);
  }
  return Do(k.left, k.top, Y, M);
}
var Dp = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(u) {
    return u instanceof yr(u).SVGGraphicsElement;
  } : function(u) {
    return u instanceof yr(u).SVGElement && typeof u.getBBox == "function";
  };
}();
function Np(u) {
  return u === yr(u).document.documentElement;
}
function Tp(u) {
  return Cs ? Dp(u) ? Pp(u) : jp(u) : ed;
}
function Mp(u) {
  var c = u.x, l = u.y, f = u.width, k = u.height, P = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, I = Object.create(P.prototype);
  return Jc(I, {
    x: c,
    y: l,
    width: f,
    height: k,
    top: l,
    right: c + f,
    bottom: k + l,
    left: c
  }), I;
}
function Do(u, c, l, f) {
  return { x: u, y: c, width: l, height: f };
}
var Lp = (
  /** @class */
  function() {
    function u(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Do(0, 0, 0, 0), this.target = c;
    }
    return u.prototype.isActive = function() {
      var c = Tp(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, u.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, u;
  }()
), Ip = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(c, l) {
      var f = Mp(l);
      Jc(this, { target: c, contentRect: f });
    }
    return u;
  }()
), Ap = (
  /** @class */
  function() {
    function u(c, l, f) {
      if (this.activeObservations_ = [], this.observations_ = new Zc(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = l, this.callbackCtx_ = f;
    }
    return u.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) || (l.set(c, new Lp(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, u.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) && (l.delete(c), l.size || this.controller_.removeObserver(this));
      }
    }, u.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, u.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(l) {
        l.isActive() && c.activeObservations_.push(l);
      });
    }, u.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, l = this.activeObservations_.map(function(f) {
          return new Ip(f.target, f.broadcastRect());
        });
        this.callback_.call(c, l, c), this.clearActive();
      }
    }, u.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, u.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, u;
  }()
), td = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Zc(), nd = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(c) {
      if (!(this instanceof u))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var l = Rp.getInstance(), f = new Ap(c, l, this);
      td.set(this, f);
    }
    return u;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(u) {
  nd.prototype[u] = function() {
    var c;
    return (c = td.get(this))[u].apply(c, arguments);
  };
});
var Wp = function() {
  return typeof Oo.ResizeObserver < "u" ? Oo.ResizeObserver : nd;
}();
const Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wp
}, Symbol.toStringTag, { value: "Module" })), Fp = /* @__PURE__ */ np(Hp);
var qc;
function Bp() {
  if (qc) return Co;
  qc = 1, Object.defineProperty(Co, "__esModule", {
    value: !0
  }), Co.default = be;
  var u = I(Ct()), c = P(/* @__PURE__ */ Pn()), l = P(Fp), f = P(jo());
  const k = ["measureBeforeMount"];
  function P(K) {
    return K && K.__esModule ? K : { default: K };
  }
  function I(K, N) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (I = function(h, d) {
      if (!d && h && h.__esModule) return h;
      var p, m, z = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return z;
      if (p = d ? a : x) {
        if (p.has(h)) return p.get(h);
        p.set(h, z);
      }
      for (const L in h) L !== "default" && {}.hasOwnProperty.call(h, L) && ((m = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, L)) && (m.get || m.set) ? p(z, L, m) : z[L] = h[L]);
      return z;
    })(K, N);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(K) {
      for (var N = 1; N < arguments.length; N++) {
        var x = arguments[N];
        for (var a in x) ({}).hasOwnProperty.call(x, a) && (K[a] = x[a]);
      }
      return K;
    }, Y.apply(null, arguments);
  }
  function M(K, N) {
    if (K == null) return {};
    var x, a, h = A(K, N);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(K);
      for (a = 0; a < d.length; a++) x = d[a], N.indexOf(x) === -1 && {}.propertyIsEnumerable.call(K, x) && (h[x] = K[x]);
    }
    return h;
  }
  function A(K, N) {
    if (K == null) return {};
    var x = {};
    for (var a in K) if ({}.hasOwnProperty.call(K, a)) {
      if (N.indexOf(a) !== -1) continue;
      x[a] = K[a];
    }
    return x;
  }
  function V(K, N, x) {
    return (N = F(N)) in K ? Object.defineProperty(K, N, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : K[N] = x, K;
  }
  function F(K) {
    var N = $(K, "string");
    return typeof N == "symbol" ? N : N + "";
  }
  function $(K, N) {
    if (typeof K != "object" || !K) return K;
    var x = K[Symbol.toPrimitive];
    if (x !== void 0) {
      var a = x.call(K, N);
      if (typeof a != "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (N === "string" ? String : Number)(K);
  }
  const ke = "react-grid-layout";
  function be(K) {
    var N;
    return N = class extends u.Component {
      constructor() {
        super(...arguments), V(this, "state", {
          width: 1280
        }), V(this, "elementRef", /* @__PURE__ */ u.createRef()), V(this, "mounted", !1), V(this, "resizeObserver", void 0);
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
        } = a, d = M(a, k);
        return h && !this.mounted ? /* @__PURE__ */ u.createElement("div", {
          className: (0, f.default)(this.props.className, ke),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ u.createElement(K, Y({
          innerRef: this.elementRef
        }, d, this.state));
      }
    }, V(N, "defaultProps", {
      measureBeforeMount: !1
    }), V(N, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), N;
  }
  return Co;
}
var $c;
function Up() {
  return $c || ($c = 1, function(u) {
    u.exports = Qc().default, u.exports.utils = vr(), u.exports.calculateUtils = js(), u.exports.Responsive = Sp().default, u.exports.Responsive.utils = Kc(), u.exports.WidthProvider = Bp().default;
  }(Ss)), Ss.exports;
}
var Gc = Up();
const qp = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, rd = {
  XS: { w: 2, h: 2 },
  S: { w: 3, h: 3 },
  M: { w: 3, h: 4 },
  L: { w: 6, h: 4 },
  XL: { w: 6, h: 8 }
}, Be = (u, c, l, f, k) => ({
  i: u,
  x: c,
  y: l,
  w: f,
  h: k,
  minW: 2,
  minH: 2,
  maxW: 12,
  maxH: 12
}), Ro = {
  lg: [
    Be("modes", 0, 0, 6, 4),
    Be("active-instances", 6, 0, 6, 4),
    Be("sos", 0, 4, 4, 4),
    Be("history", 4, 4, 4, 4),
    Be("automations", 8, 4, 4, 4),
    Be("access", 0, 8, 12, 4)
  ],
  md: [
    Be("modes", 0, 0, 4, 4),
    Be("active-instances", 4, 0, 4, 4),
    Be("sos", 0, 4, 4, 4),
    Be("history", 4, 4, 4, 4),
    Be("automations", 0, 8, 8, 4),
    Be("access", 0, 12, 8, 4)
  ],
  sm: [
    Be("modes", 0, 0, 4, 4),
    Be("active-instances", 0, 4, 4, 4),
    Be("sos", 0, 8, 4, 4),
    Be("history", 0, 12, 4, 4),
    Be("automations", 0, 16, 4, 4),
    Be("access", 0, 20, 4, 4)
  ],
  xs: [
    Be("modes", 0, 0, 2, 4),
    Be("active-instances", 0, 4, 2, 4),
    Be("sos", 0, 8, 2, 4),
    Be("history", 0, 12, 2, 4),
    Be("automations", 0, 16, 2, 4),
    Be("access", 0, 20, 2, 4)
  ],
  xxs: [
    Be("modes", 0, 0, 2, 4),
    Be("active-instances", 0, 4, 2, 4),
    Be("sos", 0, 8, 2, 4),
    Be("history", 0, 12, 2, 4),
    Be("automations", 0, 16, 2, 4),
    Be("access", 0, 20, 2, 4)
  ]
};
function Rs(u, c, l) {
  return Object.entries(rd).map(([f, k]) => ({
    size: f,
    distance: Math.abs(Math.min(k.w, l) - u) + Math.abs(k.h - c)
  })).sort((f, k) => f.distance - k.distance)[0]?.size ?? "S";
}
function id(u, c) {
  const l = rd[u];
  return { w: Math.min(l.w, c), h: l.h };
}
function $p(u, c) {
  const l = Rs(u.w, u.h, c), f = id(l, c);
  return {
    ...u,
    w: f.w,
    h: f.h,
    x: Math.max(0, Math.min(u.x, c - f.w)),
    size: l
  };
}
function Os(u, c) {
  return u.some(
    (l) => l.i !== c.i && c.x < l.x + l.w && c.x + c.w > l.x && c.y < l.y + l.h && c.y + c.h > l.y
  );
}
function Gp(u, c, l) {
  for (let f = 0; f < 240; f++)
    for (let k = 0; k <= l - c.w; k++) {
      const P = { ...c, x: k, y: f };
      if (!Os(u, P)) return P;
    }
  return { ...c, x: 0, y: Math.max(0, ...u.map((f) => f.y + f.h)) };
}
function pi(u) {
  const c = {};
  return Object.keys(cn).forEach((l) => {
    const f = cn[l], k = Array.isArray(u?.[l]) ? u[l] : [], P = new Map(k.map((A) => [A.i, A])), I = (Ro[l] || []).map((A) => {
      const V = P.get(A.i);
      if (!V) return { ...A };
      const F = Math.min(Math.max(1, V.w), f);
      return {
        ...A,
        ...V,
        w: F,
        x: Math.max(0, Math.min(V.x, f - F)),
        y: Math.max(0, V.y),
        minW: 2,
        minH: 2
      };
    }), Y = new Set(I.map((A) => A.i)), M = k.filter((A) => !Y.has(A.i)).map((A) => ({
      ...A,
      w: Math.min(Math.max(1, A.w), f),
      x: Math.max(0, Math.min(A.x, f - Math.min(A.w, f))),
      y: Math.max(0, A.y),
      minW: 2,
      minH: 2
    }));
    c[l] = [...I, ...M];
  }), c;
}
class Vp {
  key(c, l) {
    return `argus:dashboard-layout-v2:${c}:${l}`;
  }
  read(c, l) {
    try {
      const f = localStorage.getItem(this.key(c, l));
      if (!f) return null;
      const k = JSON.parse(f);
      return k?.layoutVersion != null && k.layoutVersion >= 1 ? k : null;
    } catch {
      return null;
    }
  }
  write(c, l, f) {
    localStorage.setItem(this.key(c, l), JSON.stringify(f));
  }
  async load(c, l) {
    const f = this.read(c, l);
    return pi(f ? f.layouts : null);
  }
  async save(c, l, f) {
    const k = this.read(c, l);
    this.write(c, l, {
      layoutVersion: 1,
      layouts: f,
      visibility: k?.visibility,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async loadVisibility(c, l) {
    return this.read(c, l)?.visibility ?? null;
  }
  async saveVisibility(c, l, f) {
    const k = this.read(c, l);
    this.write(c, l, {
      layoutVersion: 1,
      layouts: k?.layouts ?? pi(null),
      visibility: f,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async reset(c, l) {
    localStorage.removeItem(this.key(c, l)), localStorage.removeItem(`argus:dashboard-layout:${c}:${l}`);
  }
}
const Yp = Gc.WidthProvider(Gc.Responsive);
function Xp({ widget: u, editing: c, size: l, onSize: f, onHide: k, onReset: P, children: I }) {
  return /* @__PURE__ */ v.jsxs(
    "article",
    {
      className: "argus-widget",
      "data-size": l,
      "data-widget-id": u.id,
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
              "aria-label": `Mover ${u.title}`,
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
          /* @__PURE__ */ v.jsx("strong", { style: { fontSize: "12px", opacity: 0.8 }, children: u.title }),
          /* @__PURE__ */ v.jsxs("details", { className: "argus-widget__options", style: { position: "relative" }, children: [
            /* @__PURE__ */ v.jsx("summary", { "aria-label": `Opciones de ${u.title}`, style: { cursor: "pointer", listStyle: "none", fontSize: "14px" }, children: "•••" }),
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
              /* @__PURE__ */ v.jsx("div", { style: { display: "flex", gap: "2px" }, children: ["XS", "S", "M", "L", "XL"].map((Y) => /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  style: {
                    background: Y === l ? "#1E88E5" : "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "10px",
                    padding: "4px",
                    flex: 1,
                    cursor: "pointer"
                  },
                  onClick: () => f(Y),
                  children: Y
                },
                Y
              )) }),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  type: "button",
                  onClick: P,
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
                  onClick: k,
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
        /* @__PURE__ */ v.jsx("div", { style: { flex: 1, height: "100%", overflow: "hidden", pointerEvents: c ? "none" : "auto" }, children: I })
      ]
    }
  );
}
function Qp({
  widgets: u,
  widgetComponents: c,
  storage: l,
  userId: f,
  dashboardId: k,
  onEditing: P,
  registerEditor: I,
  isEditing: Y,
  onToggleEditing: M
}) {
  const A = Ge.useMemo(() => Object.fromEntries(u.map((W) => [W.id, W.visible])), [u]), [V, F] = Ge.useState(Ro), [$, ke] = Ge.useState(A), [be, K] = Ge.useState(!1), [N, x] = Ge.useState(!1), [a, h] = Ge.useState("lg"), [d, p] = Ge.useState(""), m = Y !== void 0 ? Y : be, z = (W) => {
    K(W), P(W), M && W !== Y && M();
  }, L = Ge.useRef(Ro), B = Ge.useRef(), te = Ge.useRef(!1);
  Ge.useEffect(() => {
    I(K);
  }, [I]), Ge.useEffect(() => {
    let W = !0;
    return x(!1), Promise.all([
      l.load(f, k),
      l.loadVisibility?.(f, k)
    ]).then(([U, w]) => {
      if (!W) return;
      const D = pi(U);
      F(D), L.current = D, w && ke({ ...A, ...w }), x(!0);
    }), () => {
      W = !1;
    };
  }, [l, f, k, A]), Ge.useEffect(() => {
    P(m), N && te.current && !m && l.save(f, k, L.current), te.current = m;
  }, [m, N, P, l, f, k]), Ge.useEffect(() => {
    const W = (U) => {
      m && U.key === "Escape" && (z(!1), p("Edición finalizada"));
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [m]), Ge.useEffect(() => () => clearTimeout(B.current), []);
  const le = (W, U = !1) => {
    F(W), L.current = W, clearTimeout(B.current), B.current = window.setTimeout(() => l.save(f, k, W), U ? 0 : 550);
  }, ie = (W, U) => {
    const w = { ...$, [W]: U };
    ke(w), l.saveVisibility?.(f, k, w), p(U ? "Widget visible" : "Widget oculto");
  }, re = (W, U, w) => {
    const D = L.current, ye = D[a] || [], we = ye.filter((De) => De.i !== W), Re = Os(we, U) ? Gp(we, U, cn[a]) : U, Pe = { ...D, [a]: ye.map((De) => De.i === W ? Re : De) };
    le(Pe, !0), p(w);
  }, me = (W, U) => {
    const w = (L.current[a] || []).find((ye) => ye.i === W);
    if (!w) return;
    const D = id(U, cn[a]);
    re(W, { ...w, ...D, x: Math.max(0, Math.min(w.x, cn[a] - D.w)) }, `Tamaño ${U}`);
  }, xe = (W) => {
    const U = (Ro[a] || []).find((w) => w.i === W);
    U && re(W, { ...U }, "Widget restablecido");
  }, pe = (W, U, w) => {
    const D = $p(w, cn[a]);
    re(w.i, D, `Tamaño ${Rs(D.w, D.h, cn[a])}`);
  }, ue = async () => {
    if (!confirm("¿Restablecer el diseño predeterminado?")) return;
    await l.reset(f, k);
    const W = pi(null);
    ke(A), le(W, !0), p("Diseño predeterminado restaurado");
  }, G = V[a] || [];
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
    /* @__PURE__ */ v.jsx(_c, { children: /* @__PURE__ */ v.jsx(
      Yp,
      {
        className: "argus-dashboard-grid",
        layouts: V,
        breakpoints: qp,
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
        onLayoutChange: (W, U) => {
          m && (F(U), L.current = U);
        },
        onResizeStop: pe,
        onDragStop: (W, U, w) => {
          const D = (L.current[a] || []).filter((ye) => ye.i !== w.i);
          if (Os(D, w)) {
            F({ ...L.current }), p("Posición bloqueada por colisión");
            return;
          }
          re(w.i, w, "Posición guardada");
        },
        useCSSTransforms: !0,
        children: u.filter((W) => $[W.id] !== !1 && c[W.id] !== void 0).map((W) => {
          const U = G.find((D) => D.i === W.id), w = U ? Rs(U.w, U.h, cn[a]) : W.size;
          return /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(_c, { children: /* @__PURE__ */ v.jsx(
            Xp,
            {
              widget: W,
              editing: m,
              size: w,
              onSize: (D) => me(W.id, D),
              onHide: () => ie(W.id, !1),
              onReset: () => xe(W.id),
              children: c[W.id]
            }
          ) }) }, W.id);
        })
      }
    ) }),
    m && u.filter((W) => $[W.id] === !1).length > 0 && /* @__PURE__ */ v.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }, children: u.filter((W) => $[W.id] === !1).map((W) => /* @__PURE__ */ v.jsx(
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
function Kp({ hass: u }) {
  const c = u?.states || {}, l = Object.values(c).filter(
    (A) => A.entity_id.startsWith("binary_sensor.") && (A.attributes.device_class === "door" || A.attributes.device_class === "window" || A.attributes.device_class === "motion")
  ).slice(0, 4), k = Object.values(c).find((A) => A.entity_id.startsWith("alarm_control_panel.argus"))?.state || "disarmed", P = k === "triggered", I = k === "arming" || k === "pending", Y = () => /* @__PURE__ */ v.jsxs("svg", { viewBox: "0 0 200 200", width: "100%", height: "100%", style: { filter: "drop-shadow(0 18px 28px rgba(0,0,0,.34))", maxWidth: "140px", margin: "auto", display: "block", overflow: "visible" }, children: [
    /* @__PURE__ */ v.jsxs("defs", { children: [
      /* @__PURE__ */ v.jsxs("linearGradient", { id: "premium-shield", x1: "20%", y1: "10%", x2: "85%", y2: "100%", children: [
        /* @__PURE__ */ v.jsx("stop", { stopColor: "#fff", stopOpacity: ".38" }),
        /* @__PURE__ */ v.jsx("stop", { offset: ".25", stopColor: I ? "#f5b041" : "#43A047", stopOpacity: ".78" }),
        /* @__PURE__ */ v.jsx("stop", { offset: "1", stopColor: I ? "#f5b041" : "#43A047", stopOpacity: ".18" })
      ] }),
      /* @__PURE__ */ v.jsxs("filter", { id: "premium-glow", filterUnits: "userSpaceOnUse", x: "-80", y: "-80", width: "360", height: "360", colorInterpolationFilters: "sRGB", children: [
        /* @__PURE__ */ v.jsx("feGaussianBlur", { stdDeviation: "4", result: "blur" }),
        /* @__PURE__ */ v.jsxs("feMerge", { children: [
          /* @__PURE__ */ v.jsx("feMergeNode", { in: "blur" }),
          /* @__PURE__ */ v.jsx("feMergeNode", { in: "SourceGraphic" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ v.jsx("path", { d: "M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z", fill: "url(#premium-shield)", stroke: I ? "#f5b041" : "#43A047", strokeWidth: "3", filter: "url(#premium-glow)" }),
    /* @__PURE__ */ v.jsx("path", { d: "M100 31 148 51", stroke: "#fff", strokeOpacity: ".45", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ v.jsx("circle", { cx: "100", cy: "105", r: "43", fill: "rgba(5,12,23,.3)", stroke: "rgba(255,255,255,.22)", strokeWidth: "2" }),
    /* @__PURE__ */ v.jsx("g", { fill: "none", stroke: "#fff", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round", filter: "url(#premium-glow)", children: I ? /* @__PURE__ */ v.jsx("path", { d: "M100 80 v25 l15 15" }) : /* @__PURE__ */ v.jsx("path", { d: "M85 105 l10 10 l20 -20" }) }),
    /* @__PURE__ */ v.jsxs("circle", { cx: "100", cy: "105", r: "55", fill: "none", stroke: I ? "#f5b041" : "#43A047", strokeOpacity: ".42", strokeWidth: "2", children: [
      /* @__PURE__ */ v.jsx("animate", { attributeName: "r", values: "51;60;51", dur: "3.5s", repeatCount: "indefinite" }),
      /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: ".6;.08;.6", dur: "3.5s", repeatCount: "indefinite" })
    ] })
  ] }), M = () => /* @__PURE__ */ v.jsxs("svg", { viewBox: "0 0 200 200", width: "100%", height: "100%", style: { filter: "drop-shadow(0 18px 30px rgba(255, 0, 0, 0.6))", maxWidth: "140px", margin: "auto", display: "block", overflow: "visible" }, children: [
    /* @__PURE__ */ v.jsxs("defs", { children: [
      /* @__PURE__ */ v.jsxs("linearGradient", { id: "siren-grad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ v.jsx("stop", { stopColor: "#ff4b4b", offset: "0%" }),
        /* @__PURE__ */ v.jsx("stop", { stopColor: "#c62828", offset: "100%" })
      ] }),
      /* @__PURE__ */ v.jsxs("filter", { id: "siren-glow", children: [
        /* @__PURE__ */ v.jsx("feGaussianBlur", { stdDeviation: "8", result: "blur" }),
        /* @__PURE__ */ v.jsxs("feMerge", { children: [
          /* @__PURE__ */ v.jsx("feMergeNode", { in: "blur" }),
          /* @__PURE__ */ v.jsx("feMergeNode", { in: "SourceGraphic" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ v.jsx("path", { d: "M60 140 h80 v15 c0 8 -8 15 -15 15 h-50 c-7 0 -15 -7 -15 -15 z", fill: "#333", stroke: "#222", strokeWidth: "2" }),
    /* @__PURE__ */ v.jsx("path", { d: "M70 140 v-30 c0 -30 15 -45 30 -45 c15 0 30 15 30 45 v30 z", fill: "url(#siren-grad)", stroke: "#ff8a8a", strokeWidth: "2", filter: "url(#siren-glow)", children: /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: "0.4;1;0.4", dur: "0.8s", repeatCount: "indefinite" }) }),
    /* @__PURE__ */ v.jsx("path", { d: "M85 130 v-20 c0 -10 5 -15 15 -15", fill: "none", stroke: "#fff", strokeOpacity: "0.6", strokeWidth: "4", strokeLinecap: "round", children: /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: "0.2;0.8;0.2", dur: "0.8s", repeatCount: "indefinite" }) }),
    /* @__PURE__ */ v.jsxs("circle", { cx: "100", cy: "100", r: "50", fill: "none", stroke: "#ff0000", strokeWidth: "4", children: [
      /* @__PURE__ */ v.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.8s", repeatCount: "indefinite" }),
      /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.8s", repeatCount: "indefinite" })
    ] }),
    /* @__PURE__ */ v.jsxs("circle", { cx: "100", cy: "100", r: "50", fill: "none", stroke: "#ff0000", strokeWidth: "4", children: [
      /* @__PURE__ */ v.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.8s", begin: "0.4s", repeatCount: "indefinite" }),
      /* @__PURE__ */ v.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.8s", begin: "0.4s", repeatCount: "indefinite" })
    ] })
  ] });
  return /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ v.jsx("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: /* @__PURE__ */ v.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Instancias Activas" }) }),
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flex: 1, gap: "20px" }, children: [
      /* @__PURE__ */ v.jsxs("div", { style: { flex: "0 0 160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: [
        P ? /* @__PURE__ */ v.jsx(M, {}) : /* @__PURE__ */ v.jsx(Y, {}),
        /* @__PURE__ */ v.jsx("div", { style: {
          marginTop: "16px",
          fontSize: "12px",
          fontWeight: 800,
          textAlign: "center",
          color: P ? "#ff4b4b" : I ? "#f5b041" : "#43A047",
          background: P ? "rgba(255, 75, 75, 0.15)" : I ? "rgba(245, 176, 65, 0.15)" : "rgba(67, 160, 71, 0.15)",
          padding: "6px 12px",
          borderRadius: "12px"
        }, children: P ? "¡ALARMA DISPARADA!" : I ? "ESPERANDO SENSORES..." : "SISTEMA PROTEGIDO" })
      ] }),
      /* @__PURE__ */ v.jsx("div", { style: {
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: "12px",
        overflowY: "auto",
        alignContent: "start"
      }, children: l.length === 0 ? /* @__PURE__ */ v.jsx("div", { style: { display: "flex", height: "100%", alignItems: "center", justifyContent: "center", opacity: 0.5, fontSize: "13px", fontWeight: 600 }, children: "No hay sensores detectados" }) : l.map((A) => {
        const V = A.state === "on";
        return /* @__PURE__ */ v.jsxs("div", { style: {
          background: V ? "rgba(255, 138, 31, 0.15)" : "rgba(255, 255, 255, 0.08)",
          border: `1px solid ${V ? "rgba(255, 138, 31, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
          borderRadius: "16px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          transition: "all 0.3s ease"
        }, children: [
          /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "20px" }, children: A.attributes.device_class === "motion" ? "🏃‍♂️" : "🚪" }),
            /* @__PURE__ */ v.jsx("span", { style: {
              fontSize: "10px",
              fontWeight: 900,
              padding: "2px 6px",
              borderRadius: "6px",
              background: V ? "rgba(255, 138, 31, 0.2)" : "rgba(255, 255, 255, 0.1)",
              color: V ? "#ff8a1f" : "rgba(255,255,255,0.7)"
            }, children: V ? "ABIERTO" : "CERRADO" })
          ] }),
          /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 700, lineHeight: 1.2 }, children: A.attributes.friendly_name || A.entity_id })
        ] }, A.entity_id);
      }) })
    ] })
  ] });
}
var od = hi();
function Ns({ isOpen: u, onClose: c, title: l, children: f }) {
  return Ge.useEffect(() => (u ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [u]), u ? od.createPortal(
    /* @__PURE__ */ v.jsxs("div", { style: {
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
      /* @__PURE__ */ v.jsx(
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
      /* @__PURE__ */ v.jsxs("div", { style: {
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
        /* @__PURE__ */ v.jsx("style", { children: `
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
        /* @__PURE__ */ v.jsxs("header", { style: {
          padding: "24px 24px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }, children: [
          /* @__PURE__ */ v.jsx("h2", { style: { margin: 0, fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff" }, children: l }),
          /* @__PURE__ */ v.jsx(
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
              onMouseOver: (k) => k.currentTarget.style.background = "rgba(255,255,255,0.2)",
              onMouseOut: (k) => k.currentTarget.style.background = "rgba(255,255,255,0.1)",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx("div", { style: {
          padding: "24px",
          overflowY: "auto",
          flex: 1,
          color: "rgba(255,255,255,0.9)"
        }, children: f })
      ] })
    ] }),
    document.body
  ) : null;
}
function Zp({ hass: u }) {
  const [c, l] = Ge.useState(null), f = u?.states || {}, k = Object.values(f).find((F) => F.entity_id?.startsWith("alarm_control_panel.argus")), P = k?.state || "disarmed", I = [
    { id: "armed_home", service: "alarm_arm_home", icon: "🏠", label: "EN CASA", color: "#1E88E5" },
    { id: "armed_away", service: "alarm_arm_away", icon: "🔒", label: "AUSENTE", color: "#E53935" },
    { id: "armed_night", service: "alarm_arm_night", icon: "🌙", label: "NOCHE", color: "#8E24AA" },
    { id: "armed_vacation", service: "alarm_arm_vacation", icon: "✈️", label: "VACACIONES", color: "#00897B" }
  ], Y = (F) => {
    P === F.id ? l(F) : u && k && u.callService("alarm_control_panel", F.service, { entity_id: k.entity_id });
  }, M = () => {
    u && k && u.callService("alarm_control_panel", "alarm_disarm", { entity_id: k.entity_id });
  }, V = (() => {
    switch (P) {
      case "armed_home":
        return { text: "EN CASA", color: "#1E88E5", bg: "rgba(30, 136, 229, 0.2)" };
      case "armed_away":
        return { text: "AUSENTE", color: "#E53935", bg: "rgba(229, 57, 53, 0.2)" };
      case "armed_night":
        return { text: "NOCHE", color: "#8E24AA", bg: "rgba(142, 36, 170, 0.2)" };
      case "armed_vacation":
        return { text: "VACACIONES", color: "#00897B", bg: "rgba(0, 137, 123, 0.2)" };
      case "triggered":
        return { text: "DISPARADA", color: "#FF3B30", bg: "rgba(255, 59, 48, 0.2)" };
      case "arming":
        return { text: "ARMANDO...", color: "#F5B041", bg: "rgba(245, 176, 65, 0.2)" };
      case "pending":
        return { text: "PENDIENTE", color: "#F5B041", bg: "rgba(245, 176, 65, 0.2)" };
      default:
        return { text: "DESARMADO", color: "#43A047", bg: "rgba(67, 160, 71, 0.2)" };
    }
  })();
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Modos de Alarma" }),
        /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 800, padding: "4px 8px", borderRadius: "8px", background: V.bg, color: V.color }, children: V.text }),
          P !== "disarmed" && /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: M,
              style: {
                background: "rgba(67, 160, 71, 0.2)",
                border: "1px solid rgba(67, 160, 71, 0.4)",
                borderRadius: "8px",
                padding: "4px 8px",
                color: "#43A047",
                fontSize: "11px",
                fontWeight: 800,
                cursor: "pointer"
              },
              children: "Desarmar"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        flex: 1
      }, children: I.map((F) => {
        const $ = P === F.id;
        return /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            className: "argus-mode-btn",
            onClick: () => Y(F),
            style: {
              background: $ ? `${F.color}25` : "rgba(255, 255, 255, 0.05)",
              border: `1.5px solid ${$ ? F.color : "rgba(255, 255, 255, 0.1)"}`,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              color: "white",
              padding: "12px 6px"
            },
            onMouseEnter: (ke) => {
              ke.currentTarget.style.transform = "scale(1.04)";
            },
            onMouseLeave: (ke) => {
              ke.currentTarget.style.transform = "scale(1)";
            },
            children: [
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "24px", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }, children: F.icon }),
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 800, letterSpacing: "0.5px", color: F.color }, children: F.label })
            ]
          },
          F.id
        );
      }) })
    ] }),
    /* @__PURE__ */ v.jsx(
      Ns,
      {
        isOpen: !!c,
        onClose: () => l(null),
        title: `Configurar Modo ${c?.label || ""}`,
        children: /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
          /* @__PURE__ */ v.jsxs("p", { style: { margin: 0, fontSize: "14px", opacity: 0.8 }, children: [
            "Configuración de sensores y temporizadores para el modo ",
            /* @__PURE__ */ v.jsx("strong", { children: c?.label }),
            "."
          ] }),
          /* @__PURE__ */ v.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "12px" }, children: [
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 700 }, children: "Tiempo de Salida / Armado (segundos)" }),
            /* @__PURE__ */ v.jsx("input", { type: "number", defaultValue: "30", style: { width: "100%", marginTop: "6px", padding: "8px", borderRadius: "8px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.2)", color: "white" } })
          ] }),
          /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: () => l(null),
              style: { background: "#1E88E5", border: "none", borderRadius: "10px", padding: "12px", color: "white", fontWeight: 800, cursor: "pointer" },
              children: "Guardar"
            }
          )
        ] })
      }
    )
  ] });
}
function Jp({ hass: u }) {
  const [c, l] = Ge.useState(!1), f = () => {
    confirm("¿Estás seguro de que quieres activar el pánico SOS? Las sirenas se dispararán inmediatamente.") && console.log("SOS Activado");
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Acciones SOS" }),
        /* @__PURE__ */ v.jsx(
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
      /* @__PURE__ */ v.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ v.jsxs(
        "button",
        {
          type: "button",
          onClick: f,
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
          onMouseDown: (k) => k.currentTarget.style.transform = "scale(0.95)",
          onMouseUp: (k) => k.currentTarget.style.transform = "scale(1)",
          children: [
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "40px", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }, children: "🚨" }),
            "ACTIVAR PÁNICO"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ v.jsx(
      Ns,
      {
        isOpen: c,
        onClose: () => l(!1),
        title: "Configuración SOS",
        children: /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
          /* @__PURE__ */ v.jsx("p", { style: { margin: 0, fontSize: "14px", opacity: 0.8, lineHeight: 1.5 }, children: "Aquí puedes configurar qué acciones ocurren cuando presionas el botón de pánico en el dashboard." }),
          /* @__PURE__ */ v.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "16px" }, children: [
            /* @__PURE__ */ v.jsx("h4", { style: { margin: "0 0 12px 0", fontSize: "14px", color: "#ff8a1f" }, children: "Acciones Automáticas" }),
            /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", cursor: "pointer" }, children: [
              /* @__PURE__ */ v.jsx("input", { type: "checkbox", defaultChecked: !0, style: { width: "18px", height: "18px" } }),
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Disparar todas las sirenas" })
            ] }),
            /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", cursor: "pointer" }, children: [
              /* @__PURE__ */ v.jsx("input", { type: "checkbox", defaultChecked: !0, style: { width: "18px", height: "18px" } }),
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Parpadear luces rojas" })
            ] }),
            /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }, children: [
              /* @__PURE__ */ v.jsx("input", { type: "checkbox", style: { width: "18px", height: "18px" } }),
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Notificar administradores" })
            ] })
          ] }),
          /* @__PURE__ */ v.jsx(
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
function eh({ hass: u }) {
  const [c, l] = Ge.useState(!1);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
      /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Control de Acceso" }),
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 800, padding: "4px 8px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.1)", color: "white" }, children: "ACTIVO" })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }, children: [
        /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", background: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: "16px" }, children: [
          /* @__PURE__ */ v.jsx("span", { style: { fontSize: "24px" }, children: "🛡️" }),
          /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 700 }, children: "PIN Maestro Requerido" }),
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "12px", opacity: 0.6 }, children: "Protección global activada" })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs(
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
            onMouseOver: (f) => f.currentTarget.style.background = "rgba(255,255,255,0.15)",
            onMouseOut: (f) => f.currentTarget.style.background = "rgba(255,255,255,0.1)",
            children: [
              /* @__PURE__ */ v.jsx("span", { children: "👥" }),
              " Gestionar Usuarios y Permisos"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsx(
      Ns,
      {
        isOpen: c,
        onClose: () => l(!1),
        title: "Control de Acceso & Usuarios",
        children: /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
          /* @__PURE__ */ v.jsx("p", { style: { margin: 0, fontSize: "14px", opacity: 0.8, lineHeight: 1.5 }, children: "Gestión global de seguridad, PIN maestro y administradores." }),
          /* @__PURE__ */ v.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "16px" }, children: [
            /* @__PURE__ */ v.jsx("h4", { style: { margin: "0 0 16px 0", fontSize: "14px", color: "#1E88E5" }, children: "Usuarios Registrados" }),
            /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", marginBottom: "8px" }, children: [
              /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                /* @__PURE__ */ v.jsx("div", { style: { width: "32px", height: "32px", borderRadius: "50%", background: "#43A047", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }, children: "C" }),
                /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                  /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Chris (Tú)" }),
                  /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", color: "#43A047", fontWeight: 800 }, children: "ADMINISTRADOR" })
                ] })
              ] }),
              /* @__PURE__ */ v.jsx("button", { style: { background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "8px", padding: "6px 12px", cursor: "pointer", fontSize: "12px" }, children: "Editar" })
            ] }),
            /* @__PURE__ */ v.jsx("button", { style: { width: "100%", padding: "12px", background: "transparent", border: "1px dashed rgba(255,255,255,0.3)", borderRadius: "12px", color: "rgba(255,255,255,0.7)", cursor: "pointer", fontWeight: 600, marginTop: "8px" }, children: "+ Añadir Usuario" })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "16px" }, children: [
            /* @__PURE__ */ v.jsx("h4", { style: { margin: "0 0 12px 0", fontSize: "14px" }, children: "Configuración Global" }),
            /* @__PURE__ */ v.jsxs("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Requerir PIN para desarmar" }),
              /* @__PURE__ */ v.jsx("input", { type: "checkbox", defaultChecked: !0, style: { width: "18px", height: "18px" } })
            ] })
          ] }),
          /* @__PURE__ */ v.jsx(
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
function th({ hass: u }) {
  const c = [
    { id: "1", time: "12:05 PM", action: "Alarma disparada por Sensor Puerta Principal", type: "triggered", icon: "🚨" },
    { id: "2", time: "12:00 PM", action: "Armando sistema (Ausente)...", type: "pending", icon: "⏳" },
    { id: "3", time: "11:30 AM", action: "Sistema desarmado por Chris", type: "disarmed", icon: "🔓" },
    { id: "4", time: "10:00 AM", action: "Configuración de PIN guardada", type: "config", icon: "⚙️" }
  ], l = (k) => {
    switch (k) {
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
  }, f = (k) => {
    switch (k) {
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
  return /* @__PURE__ */ v.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
      /* @__PURE__ */ v.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Historial de Actividad" }),
      /* @__PURE__ */ v.jsx(
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
    /* @__PURE__ */ v.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((k) => /* @__PURE__ */ v.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px"
    }, children: [
      /* @__PURE__ */ v.jsx("div", { style: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: f(k.type),
        color: l(k.type),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        boxShadow: `0 0 10px ${f(k.type)}`
      }, children: k.icon }),
      /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column", flex: 1 }, children: [
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }, children: k.action }),
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", opacity: 0.5, marginTop: "2px", fontWeight: 600 }, children: k.time })
      ] })
    ] }, k.id)) })
  ] });
}
function nh({ hass: u }) {
  const c = [
    { id: "1", name: "Encender luces si hay intrusión", status: "enabled", type: "triggered", icon: "🚨" },
    { id: "2", name: "Apagar todo al Armar Ausente", status: "enabled", type: "pending", icon: "⏳" },
    { id: "3", name: "Enviar notificación al Desarmar", status: "disabled", type: "disarmed", icon: "🔓" }
  ], l = (k) => {
    switch (k) {
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
  }, f = (k) => {
    switch (k) {
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
    /* @__PURE__ */ v.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((k) => /* @__PURE__ */ v.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px",
      opacity: k.status === "enabled" ? 1 : 0.5
    }, children: [
      /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ v.jsx("div", { style: {
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: f(k.type),
          color: l(k.type),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          boxShadow: `0 0 8px ${f(k.type)}`
        }, children: k.icon }),
        /* @__PURE__ */ v.jsx("span", { style: { fontSize: "13px", fontWeight: 600 }, children: k.name })
      ] }),
      /* @__PURE__ */ v.jsx("div", { style: {
        width: "36px",
        height: "20px",
        background: k.status === "enabled" ? "#43A047" : "rgba(255,255,255,0.2)",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer"
      }, children: /* @__PURE__ */ v.jsx("div", { style: {
        position: "absolute",
        top: "2px",
        left: k.status === "enabled" ? "18px" : "2px",
        width: "16px",
        height: "16px",
        background: "white",
        borderRadius: "50%",
        transition: "left 0.2s ease"
      } }) })
    ] }, k.id)) })
  ] });
}
function rh({ userName: u }) {
  const [c, l] = Ge.useState(!0), [f, k] = Ge.useState(!1);
  return Ge.useEffect(() => {
    const P = setTimeout(() => {
      k(!0);
    }, 1200), I = setTimeout(() => {
      l(!1);
    }, 2e3);
    return () => {
      clearTimeout(P), clearTimeout(I);
    };
  }, []), c ? od.createPortal(
    /* @__PURE__ */ v.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          background: f ? "transparent" : "rgba(15, 20, 30, 0.95)",
          backdropFilter: f ? "none" : "blur(40px)",
          WebkitBackdropFilter: f ? "none" : "blur(40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          pointerEvents: f ? "none" : "auto",
          // Evitar bloquear clics mientras se encoge
          // Cuando isShrinking es true, encogemos el contenedor hacia la esquina superior izquierda
          // (donde está la foto de perfil en el TopBar: aprox x: 20px, y: 16px)
          transformOrigin: "top left",
          transform: f ? "translate(20px, 16px) scale(0)" : "translate(0, 0) scale(1)",
          opacity: f ? 0 : 1
        },
        children: /* @__PURE__ */ v.jsxs(
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
              /* @__PURE__ */ v.jsx("style", { children: `
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
              /* @__PURE__ */ v.jsx("div", { className: "tvos-profile", children: /* @__PURE__ */ v.jsx("img", { src: `https://ui-avatars.com/api/?name=${encodeURIComponent(u)}&background=1E88E5&color=fff&size=200`, alt: "Profile" }) }),
              /* @__PURE__ */ v.jsxs("div", { style: { textAlign: "center", color: "white", marginTop: "8px" }, children: [
                /* @__PURE__ */ v.jsxs("h1", { style: { margin: "0 0 8px 0", fontSize: "32px", fontWeight: 900, letterSpacing: "-0.02em", textShadow: "0 4px 12px rgba(0,0,0,0.5)" }, children: [
                  "Bienvenido, ",
                  u
                ] }),
                /* @__PURE__ */ v.jsx("div", { style: {
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
const ih = new Vp();
function oh({ hass: u, config: c }) {
  const [l, f] = Ge.useState(/* @__PURE__ */ new Date()), [k, P] = Ge.useState(!1);
  Ge.useEffect(() => {
    const V = setInterval(() => f(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(V);
  }, []);
  const I = u?.user?.name || "Chris", Y = u?.user?.name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(u.user.name)}&background=random` : "", M = [
    { id: "modes", title: "Modos", size: "L", kind: "alarm-configuration", visible: !0 },
    { id: "active-instances", title: "Instancias Activas", size: "M", kind: "security-status", visible: !0 },
    { id: "sos", title: "Acciones SOS", size: "M", kind: "custom", visible: !0 },
    { id: "history", title: "Historial", size: "L", kind: "activity-history", visible: !0 },
    { id: "automations", title: "Automatizaciones", size: "L", kind: "automations", visible: !0 },
    { id: "access", title: "Control de Acceso", size: "XL", kind: "access-control", visible: !0 }
  ], A = {
    modes: /* @__PURE__ */ v.jsx(Zp, { hass: u }),
    "active-instances": /* @__PURE__ */ v.jsx(Kp, { hass: u }),
    sos: /* @__PURE__ */ v.jsx(Jp, { hass: u }),
    history: /* @__PURE__ */ v.jsx(th, { hass: u }),
    automations: /* @__PURE__ */ v.jsx(nh, { hass: u }),
    access: /* @__PURE__ */ v.jsx(eh, { hass: u })
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(rh, { userName: I }),
    /* @__PURE__ */ v.jsxs("div", { style: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(135deg, #0b0f19 0%, #111827 50%, #0d1322 100%)",
      color: "white",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      boxSizing: "border-box"
    }, children: [
      /* @__PURE__ */ v.jsxs("header", { style: {
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
        /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "14px" }, children: [
          Y ? /* @__PURE__ */ v.jsx(
            "img",
            {
              src: Y,
              alt: "Profile",
              style: { width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.2)" }
            }
          ) : /* @__PURE__ */ v.jsx("div", { style: { width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" } }),
          /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "11px", fontWeight: 800, textTransform: "uppercase", opacity: 0.6, letterSpacing: "0.5px" }, children: "Argus Home Hub" }),
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "18px", fontWeight: 900, marginTop: "2px", letterSpacing: "-0.02em" }, children: c?.name || "Mi Casa" })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ v.jsxs("div", { style: { textAlign: "right", display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "12px", fontWeight: 700, opacity: 0.8 }, children: u ? "Conectado" : "Desconectado" }),
            /* @__PURE__ */ v.jsx("span", { style: { fontSize: "14px", fontWeight: 800 }, children: l.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
          ] }),
          /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: () => P((V) => !V),
              style: {
                background: k ? "#1E88E5" : "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "8px",
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              },
              title: k ? "Guardar y salir de edición" : "Editar tablero",
              children: /* @__PURE__ */ v.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: k ? /* @__PURE__ */ v.jsx("path", { d: "M20 6L9 17l-5-5" }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                /* @__PURE__ */ v.jsx("path", { d: "M12 20h9" }),
                /* @__PURE__ */ v.jsx("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
              ] }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ v.jsx("main", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ v.jsx(
        Qp,
        {
          widgets: M,
          widgetComponents: A,
          storage: ih,
          userId: u?.user?.id || "default_user",
          dashboardId: "main",
          isEditing: k,
          onToggleEditing: () => P((V) => !V),
          onEditing: P,
          registerEditor: () => {
          }
        }
      ) })
    ] })
  ] });
}
const lh = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', sh = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", ah = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:230px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}.argus-dashboard__toolbar{display:none!important}";
class uh extends HTMLElement {
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
          ${lh}
          ${sh}
          ${ah}
          body, html { margin: 0; padding: 0; background-color: #0b0f19 !important; }
        `, document.head.appendChild(c);
      }
      this.container = document.createElement("div"), this.container.style.width = "100%", this.container.style.minHeight = "100vh", this.container.style.backgroundColor = "#0b0f19", this.appendChild(this.container), this.root = ap.createRoot(this.container);
    }
    this.render();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null, this.container = null);
  }
  render() {
    this.root && this.root.render(
      up.createElement(oh, {
        hass: this._hass,
        config: this._config || {}
      })
    );
  }
}
function hh(u) {
  const c = ["argus-panel-v2018", "argus-panel", "argus-card"];
  for (const l of c)
    customElements.get(l) || customElements.define(l, class extends uh {
    });
}
export {
  hh as applyArgusFrontend
};
