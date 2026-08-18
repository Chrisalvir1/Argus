function sp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function ap(s) {
  if (s.__esModule) return s;
  var c = s.default;
  if (typeof c == "function") {
    var l = function d() {
      return this instanceof d ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    l.prototype = c.prototype;
  } else l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(s).forEach(function(d) {
    var w = Object.getOwnPropertyDescriptor(s, d);
    Object.defineProperty(l, d, w.get ? w : {
      enumerable: !0,
      get: function() {
        return s[d];
      }
    });
  }), l;
}
var zo = {}, xs = { exports: {} }, zt = {}, ws = { exports: {} }, Me = {};
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
function up() {
  if (mc) return Me;
  mc = 1;
  var s = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), j = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), B = Symbol.iterator;
  function $(S) {
    return S === null || typeof S != "object" ? null : (S = B && S[B] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var we = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, xe = Object.assign, X = {};
  function M(S, N, ye) {
    this.props = S, this.context = N, this.refs = X, this.updater = ye || we;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(S, N) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, N, "setState");
  }, M.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function x() {
  }
  x.prototype = M.prototype;
  function u(S, N, ye) {
    this.props = S, this.context = N, this.refs = X, this.updater = ye || we;
  }
  var h = u.prototype = new x();
  h.constructor = u, xe(h, M.prototype), h.isPureReactComponent = !0;
  var f = Array.isArray, p = Object.prototype.hasOwnProperty, g = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(S, N, ye) {
    var _e, Oe = {}, Pe = null, Te = null;
    if (N != null) for (_e in N.ref !== void 0 && (Te = N.ref), N.key !== void 0 && (Pe = "" + N.key), N) p.call(N, _e) && !R.hasOwnProperty(_e) && (Oe[_e] = N[_e]);
    var Z = arguments.length - 2;
    if (Z === 1) Oe.children = ye;
    else if (1 < Z) {
      for (var ae = Array(Z), Re = 0; Re < Z; Re++) ae[Re] = arguments[Re + 2];
      Oe.children = ae;
    }
    if (S && S.defaultProps) for (_e in Z = S.defaultProps, Z) Oe[_e] === void 0 && (Oe[_e] = Z[_e]);
    return { $$typeof: s, type: S, key: Pe, ref: Te, props: Oe, _owner: g.current };
  }
  function U(S, N) {
    return { $$typeof: s, type: S.type, key: N, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function te(S) {
    return typeof S == "object" && S !== null && S.$$typeof === s;
  }
  function le(S) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(ye) {
      return N[ye];
    });
  }
  var ie = /\/+/g;
  function re(S, N) {
    return typeof S == "object" && S !== null && S.key != null ? le("" + S.key) : N.toString(36);
  }
  function me(S, N, ye, _e, Oe) {
    var Pe = typeof S;
    (Pe === "undefined" || Pe === "boolean") && (S = null);
    var Te = !1;
    if (S === null) Te = !0;
    else switch (Pe) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case s:
          case c:
            Te = !0;
        }
    }
    if (Te) return Te = S, Oe = Oe(Te), S = _e === "" ? "." + re(Te, 0) : _e, f(Oe) ? (ye = "", S != null && (ye = S.replace(ie, "$&/") + "/"), me(Oe, N, ye, "", function(Re) {
      return Re;
    })) : Oe != null && (te(Oe) && (Oe = U(Oe, ye + (!Oe.key || Te && Te.key === Oe.key ? "" : ("" + Oe.key).replace(ie, "$&/") + "/") + S)), N.push(Oe)), 1;
    if (Te = 0, _e = _e === "" ? "." : _e + ":", f(S)) for (var Z = 0; Z < S.length; Z++) {
      Pe = S[Z];
      var ae = _e + re(Pe, Z);
      Te += me(Pe, N, ye, ae, Oe);
    }
    else if (ae = $(S), typeof ae == "function") for (S = ae.call(S), Z = 0; !(Pe = S.next()).done; ) Pe = Pe.value, ae = _e + re(Pe, Z++), Te += me(Pe, N, ye, ae, Oe);
    else if (Pe === "object") throw N = String(S), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function Se(S, N, ye) {
    if (S == null) return S;
    var _e = [], Oe = 0;
    return me(S, _e, "", "", function(Pe) {
      return N.call(ye, Pe, Oe++);
    }), _e;
  }
  function pe(S) {
    if (S._status === -1) {
      var N = S._result;
      N = N(), N.then(function(ye) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ye);
      }, function(ye) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ye);
      }), S._status === -1 && (S._status = 0, S._result = N);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ue = { current: null }, Y = { transition: null }, W = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Y, ReactCurrentOwner: g };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Me.Children = { map: Se, forEach: function(S, N, ye) {
    Se(S, function() {
      N.apply(this, arguments);
    }, ye);
  }, count: function(S) {
    var N = 0;
    return Se(S, function() {
      N++;
    }), N;
  }, toArray: function(S) {
    return Se(S, function(N) {
      return N;
    }) || [];
  }, only: function(S) {
    if (!te(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, Me.Component = M, Me.Fragment = l, Me.Profiler = w, Me.PureComponent = u, Me.StrictMode = d, Me.Suspense = P, Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, Me.act = q, Me.cloneElement = function(S, N, ye) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var _e = xe({}, S.props), Oe = S.key, Pe = S.ref, Te = S._owner;
    if (N != null) {
      if (N.ref !== void 0 && (Pe = N.ref, Te = g.current), N.key !== void 0 && (Oe = "" + N.key), S.type && S.type.defaultProps) var Z = S.type.defaultProps;
      for (ae in N) p.call(N, ae) && !R.hasOwnProperty(ae) && (_e[ae] = N[ae] === void 0 && Z !== void 0 ? Z[ae] : N[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) _e.children = ye;
    else if (1 < ae) {
      Z = Array(ae);
      for (var Re = 0; Re < ae; Re++) Z[Re] = arguments[Re + 2];
      _e.children = Z;
    }
    return { $$typeof: s, type: S.type, key: Oe, ref: Pe, props: _e, _owner: Te };
  }, Me.createContext = function(S) {
    return S = { $$typeof: j, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: E, _context: S }, S.Consumer = S;
  }, Me.createElement = I, Me.createFactory = function(S) {
    var N = I.bind(null, S);
    return N.type = S, N;
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(S) {
    return { $$typeof: F, render: S };
  }, Me.isValidElement = te, Me.lazy = function(S) {
    return { $$typeof: G, _payload: { _status: -1, _result: S }, _init: pe };
  }, Me.memo = function(S, N) {
    return { $$typeof: A, type: S, compare: N === void 0 ? null : N };
  }, Me.startTransition = function(S) {
    var N = Y.transition;
    Y.transition = {};
    try {
      S();
    } finally {
      Y.transition = N;
    }
  }, Me.unstable_act = q, Me.useCallback = function(S, N) {
    return ue.current.useCallback(S, N);
  }, Me.useContext = function(S) {
    return ue.current.useContext(S);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(S) {
    return ue.current.useDeferredValue(S);
  }, Me.useEffect = function(S, N) {
    return ue.current.useEffect(S, N);
  }, Me.useId = function() {
    return ue.current.useId();
  }, Me.useImperativeHandle = function(S, N, ye) {
    return ue.current.useImperativeHandle(S, N, ye);
  }, Me.useInsertionEffect = function(S, N) {
    return ue.current.useInsertionEffect(S, N);
  }, Me.useLayoutEffect = function(S, N) {
    return ue.current.useLayoutEffect(S, N);
  }, Me.useMemo = function(S, N) {
    return ue.current.useMemo(S, N);
  }, Me.useReducer = function(S, N, ye) {
    return ue.current.useReducer(S, N, ye);
  }, Me.useRef = function(S) {
    return ue.current.useRef(S);
  }, Me.useState = function(S) {
    return ue.current.useState(S);
  }, Me.useSyncExternalStore = function(S, N, ye) {
    return ue.current.useSyncExternalStore(S, N, ye);
  }, Me.useTransition = function() {
    return ue.current.useTransition();
  }, Me.version = "18.3.1", Me;
}
var yc;
function Rt() {
  return yc || (yc = 1, ws.exports = up()), ws.exports;
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
function cp() {
  return vc || (vc = 1, function(s) {
    function c(Y, W) {
      var q = Y.length;
      Y.push(W);
      e: for (; 0 < q; ) {
        var S = q - 1 >>> 1, N = Y[S];
        if (0 < w(N, W)) Y[S] = W, Y[q] = N, q = S;
        else break e;
      }
    }
    function l(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function d(Y) {
      if (Y.length === 0) return null;
      var W = Y[0], q = Y.pop();
      if (q !== W) {
        Y[0] = q;
        e: for (var S = 0, N = Y.length, ye = N >>> 1; S < ye; ) {
          var _e = 2 * (S + 1) - 1, Oe = Y[_e], Pe = _e + 1, Te = Y[Pe];
          if (0 > w(Oe, q)) Pe < N && 0 > w(Te, Oe) ? (Y[S] = Te, Y[Pe] = q, S = Pe) : (Y[S] = Oe, Y[_e] = q, S = _e);
          else if (Pe < N && 0 > w(Te, q)) Y[S] = Te, Y[Pe] = q, S = Pe;
          else break e;
        }
      }
      return W;
    }
    function w(Y, W) {
      var q = Y.sortIndex - W.sortIndex;
      return q !== 0 ? q : Y.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      s.unstable_now = function() {
        return E.now();
      };
    } else {
      var j = Date, F = j.now();
      s.unstable_now = function() {
        return j.now() - F;
      };
    }
    var P = [], A = [], G = 1, B = null, $ = 3, we = !1, xe = !1, X = !1, M = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(Y) {
      for (var W = l(A); W !== null; ) {
        if (W.callback === null) d(A);
        else if (W.startTime <= Y) d(A), W.sortIndex = W.expirationTime, c(P, W);
        else break;
        W = l(A);
      }
    }
    function f(Y) {
      if (X = !1, h(Y), !xe) if (l(P) !== null) xe = !0, pe(p);
      else {
        var W = l(A);
        W !== null && ue(f, W.startTime - Y);
      }
    }
    function p(Y, W) {
      xe = !1, X && (X = !1, x(I), I = -1), we = !0;
      var q = $;
      try {
        for (h(W), B = l(P); B !== null && (!(B.expirationTime > W) || Y && !le()); ) {
          var S = B.callback;
          if (typeof S == "function") {
            B.callback = null, $ = B.priorityLevel;
            var N = S(B.expirationTime <= W);
            W = s.unstable_now(), typeof N == "function" ? B.callback = N : B === l(P) && d(P), h(W);
          } else d(P);
          B = l(P);
        }
        if (B !== null) var ye = !0;
        else {
          var _e = l(A);
          _e !== null && ue(f, _e.startTime - W), ye = !1;
        }
        return ye;
      } finally {
        B = null, $ = q, we = !1;
      }
    }
    var g = !1, R = null, I = -1, U = 5, te = -1;
    function le() {
      return !(s.unstable_now() - te < U);
    }
    function ie() {
      if (R !== null) {
        var Y = s.unstable_now();
        te = Y;
        var W = !0;
        try {
          W = R(!0, Y);
        } finally {
          W ? re() : (g = !1, R = null);
        }
      } else g = !1;
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
      M(ie, 0);
    };
    function pe(Y) {
      R = Y, g || (g = !0, re());
    }
    function ue(Y, W) {
      I = M(function() {
        Y(s.unstable_now());
      }, W);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, s.unstable_continueExecution = function() {
      xe || we || (xe = !0, pe(p));
    }, s.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, s.unstable_getFirstCallbackNode = function() {
      return l(P);
    }, s.unstable_next = function(Y) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = $;
      }
      var q = $;
      $ = W;
      try {
        return Y();
      } finally {
        $ = q;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(Y, W) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var q = $;
      $ = Y;
      try {
        return W();
      } finally {
        $ = q;
      }
    }, s.unstable_scheduleCallback = function(Y, W, q) {
      var S = s.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? S + q : S) : q = S, Y) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = q + N, Y = { id: G++, callback: W, priorityLevel: Y, startTime: q, expirationTime: N, sortIndex: -1 }, q > S ? (Y.sortIndex = q, c(A, Y), l(P) === null && Y === l(A) && (X ? (x(I), I = -1) : X = !0, ue(f, q - S))) : (Y.sortIndex = N, c(P, Y), xe || we || (xe = !0, pe(p))), Y;
    }, s.unstable_shouldYield = le, s.unstable_wrapCallback = function(Y) {
      var W = $;
      return function() {
        var q = $;
        $ = W;
        try {
          return Y.apply(this, arguments);
        } finally {
          $ = q;
        }
      };
    };
  }(_s)), _s;
}
var xc;
function dp() {
  return xc || (xc = 1, Ss.exports = cp()), Ss.exports;
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
function fp() {
  if (wc) return zt;
  wc = 1;
  var s = Rt(), c = dp();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), w = {};
  function E(e, t) {
    j(e, t), j(e + "Capture", t);
  }
  function j(e, t) {
    for (w[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var F = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), P = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, G = {}, B = {};
  function $(e) {
    return P.call(B, e) ? !0 : P.call(G, e) ? !1 : A.test(e) ? B[e] = !0 : (G[e] = !0, !1);
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
  function X(e, t, n, r, i, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    M[e] = new X(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    M[t] = new X(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    M[e] = new X(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    M[e] = new X(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    M[e] = new X(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    M[e] = new X(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    M[e] = new X(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    M[e] = new X(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    M[e] = new X(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    M[t] = new X(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(x, u);
    M[t] = new X(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(x, u);
    M[t] = new X(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    M[e] = new X(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    M[e] = new X(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = M.hasOwnProperty(t) ? M[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xe(t, n, i, r) && (n = null), r || i === null ? $(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = Symbol.for("react.element"), g = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), le = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Se = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, S;
  function N(e) {
    if (S === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      S = t && t[1] || "";
    }
    return `
` + S + e;
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
`), a = i.length - 1, m = o.length - 1; 1 <= a && 0 <= m && i[a] !== o[m]; ) m--;
        for (; 1 <= a && 0 <= m; a--, m--) if (i[a] !== o[m]) {
          if (a !== 1 || m !== 1)
            do
              if (a--, m--, 0 > m || i[a] !== o[m]) {
                var _ = `
` + i[a].replace(" at new ", " at ");
                return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
              }
            while (1 <= a && 0 <= m);
          break;
        }
      }
    } finally {
      ye = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function Oe(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
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
      case R:
        return "Fragment";
      case g:
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
  function Re(e) {
    var t = ae(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(a) {
        r = "" + a, o.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function De(e) {
    e._valueTracker || (e._valueTracker = Re(e));
  }
  function Le(e) {
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
  function Ve(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function nt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function k(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function z(e, t) {
    k(e, t);
    var n = Z(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? V(e, t.type, n) : t.hasOwnProperty("defaultValue") && V(e, t.type, Z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function C(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function V(e, t, n) {
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
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function je(e, t) {
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
  var v, D = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (v = v || document.createElement("div"), v.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = v.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  function Ae(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ee.hasOwnProperty(e) && ee[e] ? ("" + t).trim() : t + "px";
  }
  function Ie(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Ae(n, t[n], r);
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
  function It(e, t) {
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
  function Pn(e) {
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
  function As() {
  }
  var Lo = !1;
  function Is(e, t, n) {
    if (Lo) return e(t, n);
    Lo = !0;
    try {
      return yi(e, t, n);
    } finally {
      Lo = !1, (Dn !== null || Zt !== null) && (As(), Yn());
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
  var Ao = !1;
  if (F) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      Ao = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    Ao = !1;
  }
  function fd(e, t, n, r, i, o, a, m, _) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (K) {
      this.onError(K);
    }
  }
  var br = !1, vi = null, xi = !1, Io = null, pd = { onError: function(e) {
    br = !0, vi = e;
  } };
  function hd(e, t, n, r, i, o, a, m, _) {
    br = !1, vi = null, fd.apply(pd, arguments);
  }
  function gd(e, t, n, r, i, o, a, m, _) {
    if (hd.apply(this, arguments), br) {
      if (br) {
        var L = vi;
        br = !1, vi = null;
      } else throw Error(l(198));
      xi || (xi = !0, Io = L);
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
  function md(e) {
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
        for (var a = !1, m = i.child; m; ) {
          if (m === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (m === r) {
            a = !0, r = i, n = o;
            break;
          }
          m = m.sibling;
        }
        if (!a) {
          for (m = o.child; m; ) {
            if (m === n) {
              a = !0, n = o, r = i;
              break;
            }
            if (m === r) {
              a = !0, r = o, n = i;
              break;
            }
            m = m.sibling;
          }
          if (!a) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Bs(e) {
    return e = md(e), e !== null ? Fs(e) : null;
  }
  function Fs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Us = c.unstable_scheduleCallback, qs = c.unstable_cancelCallback, yd = c.unstable_shouldYield, vd = c.unstable_requestPaint, rt = c.unstable_now, xd = c.unstable_getCurrentPriorityLevel, Wo = c.unstable_ImmediatePriority, $s = c.unstable_UserBlockingPriority, wi = c.unstable_NormalPriority, wd = c.unstable_LowPriority, Vs = c.unstable_IdlePriority, Si = null, Gt = null;
  function Sd(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : bd, _d = Math.log, kd = Math.LN2;
  function bd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_d(e) / kd | 0) | 0;
  }
  var _i = 64, ki = 4194304;
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
  function bi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var m = a & ~i;
      m !== 0 ? r = Er(m) : (o &= a, o !== 0 && (r = Er(o)));
    } else a = n & ~i, a !== 0 ? r = Er(a) : o !== 0 && (r = Er(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function Ed(e, t) {
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
  function zd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var a = 31 - Wt(o), m = 1 << a, _ = i[a];
      _ === -1 ? (!(m & n) || m & r) && (i[a] = Ed(m, t)) : _ <= t && (e.expiredLanes |= m), o &= ~m;
    }
  }
  function Ho(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Gs() {
    var e = _i;
    return _i <<= 1, !(_i & 4194240) && (_i = 64), e;
  }
  function Bo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function zr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
  }
  function Rd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Wt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Fo(e, t) {
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
  var Xs, Uo, Qs, Ks, Zs, qo = !1, Ei = [], dn = null, fn = null, pn = null, Rr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), hn = [], Cd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
  function Od(e, t, n, r, i) {
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
  function jd() {
    qo = !1, dn !== null && zi(dn) && (dn = null), fn !== null && zi(fn) && (fn = null), pn !== null && zi(pn) && (pn = null), Rr.forEach(ta), Cr.forEach(ta);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qo || (qo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, jd)));
  }
  function Pr(e) {
    function t(i) {
      return jr(i, e);
    }
    if (0 < Ei.length) {
      jr(Ei[0], e);
      for (var n = 1; n < Ei.length; n++) {
        var r = Ei[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && jr(dn, e), fn !== null && jr(fn, e), pn !== null && jr(pn, e), Rr.forEach(t), Cr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) ea(n), n.blockedOn === null && hn.shift();
  }
  var Xn = f.ReactCurrentBatchConfig, Ri = !0;
  function Pd(e, t, n, r) {
    var i = qe, o = Xn.transition;
    Xn.transition = null;
    try {
      qe = 1, $o(e, t, n, r);
    } finally {
      qe = i, Xn.transition = o;
    }
  }
  function Dd(e, t, n, r) {
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
      else if (Od(i, e, t, n, r)) r.stopPropagation();
      else if (Js(e, r), t & 4 && -1 < Cd.indexOf(e)) {
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
    if (Ci = null, e = Pn(r), e = Nn(e), e !== null) if (t = Tn(e), t === null) e = null;
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
        switch (xd()) {
          case Wo:
            return 1;
          case $s:
            return 4;
          case wi:
          case wd:
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
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[o - r]; r++) ;
    return Oi = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ji(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pi() {
    return !0;
  }
  function ia() {
    return !1;
  }
  function Ct(e) {
    function t(n, r, i, o, a) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(o) : o[m]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pi : ia, this.isPropagationStopped = ia, this;
    }
    return q(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Yo = Ct(Qn), Dr = q({}, Qn, { view: 0, detail: 0 }), Td = Ct(Dr), Xo, Qo, Tr, Di = q({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (Xo = e.screenX - Tr.screenX, Qo = e.screenY - Tr.screenY) : Qo = Xo = 0, Tr = e), Xo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qo;
  } }), oa = Ct(Di), Nd = q({}, Di, { dataTransfer: 0 }), Md = Ct(Nd), Ld = q({}, Dr, { relatedTarget: 0 }), Ko = Ct(Ld), Ad = q({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Id = Ct(Ad), Wd = q({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Hd = Ct(Wd), Bd = q({}, Qn, { data: 0 }), la = Ct(Bd), Fd = {
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
  }, Ud = {
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
  }, qd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $d(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qd[e]) ? !!t[e] : !1;
  }
  function Zo() {
    return $d;
  }
  var Vd = q({}, Dr, { key: function(e) {
    if (e.key) {
      var t = Fd[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ud[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zo, charCode: function(e) {
    return e.type === "keypress" ? ji(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gd = Ct(Vd), Yd = q({}, Di, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sa = Ct(Yd), Xd = q({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zo }), Qd = Ct(Xd), Kd = q({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zd = Ct(Kd), Jd = q({}, Di, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ef = Ct(Jd), tf = [9, 13, 27, 32], Jo = F && "CompositionEvent" in window, Nr = null;
  F && "documentMode" in document && (Nr = document.documentMode);
  var nf = F && "TextEvent" in window && !Nr, aa = F && (!Jo || Nr && 8 < Nr && 11 >= Nr), ua = " ", ca = !1;
  function da(e, t) {
    switch (e) {
      case "keyup":
        return tf.indexOf(t.keyCode) !== -1;
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
  function rf(e, t) {
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
  function of(e, t) {
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
  var lf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lf[e.type] : t === "textarea";
  }
  function ha(e, t, n, r) {
    Sr(r), t = Ai(t, "onChange"), 0 < t.length && (n = new Yo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Mr = null, Lr = null;
  function sf(e) {
    Da(e, 0);
  }
  function Ti(e) {
    var t = nr(e);
    if (Le(t)) return e;
  }
  function af(e, t) {
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
    Mr && (Mr.detachEvent("onpropertychange", va), Lr = Mr = null);
  }
  function va(e) {
    if (e.propertyName === "value" && Ti(Lr)) {
      var t = [];
      ha(t, Lr, e, Pn(e)), Is(sf, t);
    }
  }
  function uf(e, t, n) {
    e === "focusin" ? (ya(), Mr = t, Lr = n, Mr.attachEvent("onpropertychange", va)) : e === "focusout" && ya();
  }
  function cf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ti(Lr);
  }
  function df(e, t) {
    if (e === "click") return Ti(t);
  }
  function ff(e, t) {
    if (e === "input" || e === "change") return Ti(t);
  }
  function pf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : pf;
  function Ar(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!P.call(t, i) || !Ht(e[i], t[i])) return !1;
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
  function nl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function hf(e) {
    var t = _a(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Sa(n.ownerDocument.documentElement, n)) {
      if (r !== null && nl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = wa(n, o);
          var a = wa(
            n,
            r
          );
          i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var gf = F && "documentMode" in document && 11 >= document.documentMode, Zn = null, rl = null, Ir = null, il = !1;
  function ka(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    il || Zn == null || Zn !== Fe(r) || (r = Zn, "selectionStart" in r && nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Ar(Ir, r) || (Ir = r, r = Ai(rl, "onSelect"), 0 < r.length && (t = new Yo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Ni("Animation", "AnimationEnd"), animationiteration: Ni("Animation", "AnimationIteration"), animationstart: Ni("Animation", "AnimationStart"), transitionend: Ni("Transition", "TransitionEnd") }, ol = {}, ba = {};
  F && (ba = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Mi(e) {
    if (ol[e]) return ol[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ba) return ol[e] = t[n];
    return e;
  }
  var Ea = Mi("animationend"), za = Mi("animationiteration"), Ra = Mi("animationstart"), Ca = Mi("transitionend"), Oa = /* @__PURE__ */ new Map(), ja = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    Oa.set(e, t), E(t, [e]);
  }
  for (var ll = 0; ll < ja.length; ll++) {
    var sl = ja[ll], mf = sl.toLowerCase(), yf = sl[0].toUpperCase() + sl.slice(1);
    mn(mf, "on" + yf);
  }
  mn(Ea, "onAnimationEnd"), mn(za, "onAnimationIteration"), mn(Ra, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Ca, "onTransitionEnd"), j("onMouseEnter", ["mouseout", "mouseover"]), j("onMouseLeave", ["mouseout", "mouseover"]), j("onPointerEnter", ["pointerout", "pointerover"]), j("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Pa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, gd(r, t, void 0, e), e.currentTarget = null;
  }
  function Da(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var m = r[a], _ = m.instance, L = m.currentTarget;
          if (m = m.listener, _ !== o && i.isPropagationStopped()) break e;
          Pa(i, m, L), o = _;
        }
        else for (a = 0; a < r.length; a++) {
          if (m = r[a], _ = m.instance, L = m.currentTarget, m = m.listener, _ !== o && i.isPropagationStopped()) break e;
          Pa(i, m, L), o = _;
        }
      }
    }
    if (xi) throw e = Io, xi = !1, Io = null, e;
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
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Li]) {
      e[Li] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (vf.has(n) || al(n, !1, e), al(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Li] || (t[Li] = !0, al("selectionchange", !1, t));
    }
  }
  function Ta(e, t, n, r) {
    switch (na(t)) {
      case 1:
        var i = Pd;
        break;
      case 4:
        i = Dd;
        break;
      default:
        i = $o;
    }
    n = i.bind(null, t, n, e), i = void 0, !Ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function ul(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var m = r.stateNode.containerInfo;
        if (m === i || m.nodeType === 8 && m.parentNode === i) break;
        if (a === 4) for (a = r.return; a !== null; ) {
          var _ = a.tag;
          if ((_ === 3 || _ === 4) && (_ = a.stateNode.containerInfo, _ === i || _.nodeType === 8 && _.parentNode === i)) return;
          a = a.return;
        }
        for (; m !== null; ) {
          if (a = Nn(m), a === null) return;
          if (_ = a.tag, _ === 5 || _ === 6) {
            r = o = a;
            continue e;
          }
          m = m.parentNode;
        }
      }
      r = r.return;
    }
    Is(function() {
      var L = o, K = Pn(n), J = [];
      e: {
        var Q = Oa.get(e);
        if (Q !== void 0) {
          var ce = Yo, fe = e;
          switch (e) {
            case "keypress":
              if (ji(n) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Gd;
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
              ce = Md;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Qd;
              break;
            case Ea:
            case za:
            case Ra:
              ce = Id;
              break;
            case Ca:
              ce = Zd;
              break;
            case "scroll":
              ce = Td;
              break;
            case "wheel":
              ce = ef;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Hd;
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
          var he = (t & 4) !== 0, it = !he && e === "scroll", O = he ? Q !== null ? Q + "Capture" : null : Q;
          he = [];
          for (var b = L, T; b !== null; ) {
            T = b;
            var ne = T.stateNode;
            if (T.tag === 5 && ne !== null && (T = ne, O !== null && (ne = _r(b, O), ne != null && he.push(Br(b, ne, T)))), it) break;
            b = b.return;
          }
          0 < he.length && (Q = new ce(Q, fe, null, n, K), J.push({ event: Q, listeners: he }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", Q && n !== Vt && (fe = n.relatedTarget || n.fromElement) && (Nn(fe) || fe[Jt])) break e;
          if ((ce || Q) && (Q = K.window === K ? K : (Q = K.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ce ? (fe = n.relatedTarget || n.toElement, ce = L, fe = fe ? Nn(fe) : null, fe !== null && (it = Tn(fe), fe !== it || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ce = null, fe = L), ce !== fe)) {
            if (he = oa, ne = "onMouseLeave", O = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (he = sa, ne = "onPointerLeave", O = "onPointerEnter", b = "pointer"), it = ce == null ? Q : nr(ce), T = fe == null ? Q : nr(fe), Q = new he(ne, b + "leave", ce, n, K), Q.target = it, Q.relatedTarget = T, ne = null, Nn(K) === L && (he = new he(O, b + "enter", fe, n, K), he.target = T, he.relatedTarget = it, ne = he), it = ne, ce && fe) t: {
              for (he = ce, O = fe, b = 0, T = he; T; T = er(T)) b++;
              for (T = 0, ne = O; ne; ne = er(ne)) T++;
              for (; 0 < b - T; ) he = er(he), b--;
              for (; 0 < T - b; ) O = er(O), T--;
              for (; b--; ) {
                if (he === O || O !== null && he === O.alternate) break t;
                he = er(he), O = er(O);
              }
              he = null;
            }
            else he = null;
            ce !== null && Na(J, Q, ce, he, !1), fe !== null && it !== null && Na(J, it, fe, he, !0);
          }
        }
        e: {
          if (Q = L ? nr(L) : window, ce = Q.nodeName && Q.nodeName.toLowerCase(), ce === "select" || ce === "input" && Q.type === "file") var ve = af;
          else if (pa(Q)) if (ga) ve = ff;
          else {
            ve = cf;
            var ke = uf;
          }
          else (ce = Q.nodeName) && ce.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (ve = df);
          if (ve && (ve = ve(e, L))) {
            ha(J, ve, n, K);
            break e;
          }
          ke && ke(e, Q, L), e === "focusout" && (ke = Q._wrapperState) && ke.controlled && Q.type === "number" && V(Q, "number", Q.value);
        }
        switch (ke = L ? nr(L) : window, e) {
          case "focusin":
            (pa(ke) || ke.contentEditable === "true") && (Zn = ke, rl = L, Ir = null);
            break;
          case "focusout":
            Ir = rl = Zn = null;
            break;
          case "mousedown":
            il = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            il = !1, ka(J, n, K);
            break;
          case "selectionchange":
            if (gf) break;
          case "keydown":
          case "keyup":
            ka(J, n, K);
        }
        var be;
        if (Jo) e: {
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
        else Kn ? da(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (aa && n.locale !== "ko" && (Kn || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Kn && (be = ra()) : (gn = K, Go = "value" in gn ? gn.value : gn.textContent, Kn = !0)), ke = Ai(L, Ce), 0 < ke.length && (Ce = new la(Ce, e, null, n, K), J.push({ event: Ce, listeners: ke }), be ? Ce.data = be : (be = fa(n), be !== null && (Ce.data = be)))), (be = nf ? rf(e, n) : of(e, n)) && (L = Ai(L, "onBeforeInput"), 0 < L.length && (K = new la("onBeforeInput", "beforeinput", null, n, K), J.push({ event: K, listeners: L }), K.data = be));
      }
      Da(J, t);
    });
  }
  function Br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = _r(e, n), o != null && r.unshift(Br(e, o, i)), o = _r(e, t), o != null && r.push(Br(e, o, i))), e = e.return;
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
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
      var m = n, _ = m.alternate, L = m.stateNode;
      if (_ !== null && _ === r) break;
      m.tag === 5 && L !== null && (m = L, i ? (_ = _r(n, o), _ != null && a.unshift(Br(n, _, m))) : i || (_ = _r(n, o), _ != null && a.push(Br(n, _, m)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var xf = /\r\n?/g, wf = /\u0000|\uFFFD/g;
  function Ma(e) {
    return (typeof e == "string" ? e : "" + e).replace(xf, `
`).replace(wf, "");
  }
  function Ii(e, t, n) {
    if (t = Ma(t), Ma(e) !== t && n) throw Error(l(425));
  }
  function Wi() {
  }
  var cl = null, dl = null;
  function fl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pl = typeof setTimeout == "function" ? setTimeout : void 0, Sf = typeof clearTimeout == "function" ? clearTimeout : void 0, La = typeof Promise == "function" ? Promise : void 0, _f = typeof queueMicrotask == "function" ? queueMicrotask : typeof La < "u" ? function(e) {
    return La.resolve(null).then(e).catch(kf);
  } : pl;
  function kf(e) {
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
  function Aa(e) {
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
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Fr = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, gl = "__reactEvents$" + tr, bf = "__reactListeners$" + tr, Ef = "__reactHandles$" + tr;
  function Nn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jt] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Aa(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = Aa(e);
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
    return e[Fr] || null;
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
  function Bi() {
    Xe(St), Xe(gt);
  }
  function Ia(e, t, n) {
    if (gt.current !== xn) throw Error(l(168));
    Ge(gt, t), Ge(St, n);
  }
  function Wa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(l(108, Te(e) || "Unknown", i));
    return q({}, n, r);
  }
  function Fi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Mn = gt.current, Ge(gt, e), Ge(St, St.current), !0;
  }
  function Ha(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Wa(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, Xe(St), Xe(gt), Ge(gt, e)) : Xe(St), Ge(St, n);
  }
  var en = null, Ui = !1, yl = !1;
  function Ba(e) {
    en === null ? en = [e] : en.push(e);
  }
  function zf(e) {
    Ui = !0, Ba(e);
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
  var or = [], lr = 0, qi = null, $i = 0, Dt = [], Tt = 0, Ln = null, tn = 1, nn = "";
  function An(e, t) {
    or[lr++] = $i, or[lr++] = qi, qi = e, $i = t;
  }
  function Fa(e, t, n) {
    Dt[Tt++] = tn, Dt[Tt++] = nn, Dt[Tt++] = Ln, Ln = e;
    var r = tn;
    e = nn;
    var i = 32 - Wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Wt(t) + i;
    if (30 < o) {
      var a = i - i % 5;
      o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, tn = 1 << 32 - Wt(t) + i | n << i | r, nn = o + e;
    } else tn = 1 << o | n << i | r, nn = e;
  }
  function vl(e) {
    e.return !== null && (An(e, 1), Fa(e, 1, 0));
  }
  function xl(e) {
    for (; e === qi; ) qi = or[--lr], or[lr] = null, $i = or[--lr], or[lr] = null;
    for (; e === Ln; ) Ln = Dt[--Tt], Dt[Tt] = null, nn = Dt[--Tt], Dt[Tt] = null, tn = Dt[--Tt], Dt[Tt] = null;
  }
  var Ot = null, jt = null, Ze = !1, Bt = null;
  function Ua(e, t) {
    var n = At(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function qa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ot = e, jt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ot = e, jt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = At(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ot = e, jt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function wl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Sl(e) {
    if (Ze) {
      var t = jt;
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
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fl(e.type, e.memoizedProps)), t && (t = jt)) {
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
    } else jt = Ot ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Va() {
    for (var e = jt; e; ) e = yn(e.nextSibling);
  }
  function sr() {
    jt = Ot = null, Ze = !1;
  }
  function _l(e) {
    Bt === null ? Bt = [e] : Bt.push(e);
  }
  var Rf = f.ReactCurrentBatchConfig;
  function qr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
          var m = i.refs;
          a === null ? delete m[o] : m[o] = a;
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
    function t(O, b) {
      if (e) {
        var T = O.deletions;
        T === null ? (O.deletions = [b], O.flags |= 16) : T.push(b);
      }
    }
    function n(O, b) {
      if (!e) return null;
      for (; b !== null; ) t(O, b), b = b.sibling;
      return null;
    }
    function r(O, b) {
      for (O = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? O.set(b.key, b) : O.set(b.index, b), b = b.sibling;
      return O;
    }
    function i(O, b) {
      return O = Cn(O, b), O.index = 0, O.sibling = null, O;
    }
    function o(O, b, T) {
      return O.index = T, e ? (T = O.alternate, T !== null ? (T = T.index, T < b ? (O.flags |= 2, b) : T) : (O.flags |= 2, b)) : (O.flags |= 1048576, b);
    }
    function a(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function m(O, b, T, ne) {
      return b === null || b.tag !== 6 ? (b = ps(T, O.mode, ne), b.return = O, b) : (b = i(b, T), b.return = O, b);
    }
    function _(O, b, T, ne) {
      var ve = T.type;
      return ve === R ? K(O, b, T.props.children, ne, T.key) : b !== null && (b.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && Ga(ve) === b.type) ? (ne = i(b, T.props), ne.ref = qr(O, b, T), ne.return = O, ne) : (ne = vo(T.type, T.key, T.props, null, O.mode, ne), ne.ref = qr(O, b, T), ne.return = O, ne);
    }
    function L(O, b, T, ne) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== T.containerInfo || b.stateNode.implementation !== T.implementation ? (b = hs(T, O.mode, ne), b.return = O, b) : (b = i(b, T.children || []), b.return = O, b);
    }
    function K(O, b, T, ne, ve) {
      return b === null || b.tag !== 7 ? (b = $n(T, O.mode, ne, ve), b.return = O, b) : (b = i(b, T), b.return = O, b);
    }
    function J(O, b, T) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = ps("" + b, O.mode, T), b.return = O, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case p:
            return T = vo(b.type, b.key, b.props, null, O.mode, T), T.ref = qr(O, null, b), T.return = O, T;
          case g:
            return b = hs(b, O.mode, T), b.return = O, b;
          case pe:
            var ne = b._init;
            return J(O, ne(b._payload), T);
        }
        if (oe(b) || W(b)) return b = $n(b, O.mode, T, null), b.return = O, b;
        Gi(O, b);
      }
      return null;
    }
    function Q(O, b, T, ne) {
      var ve = b !== null ? b.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number") return ve !== null ? null : m(O, b, "" + T, ne);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case p:
            return T.key === ve ? _(O, b, T, ne) : null;
          case g:
            return T.key === ve ? L(O, b, T, ne) : null;
          case pe:
            return ve = T._init, Q(
              O,
              b,
              ve(T._payload),
              ne
            );
        }
        if (oe(T) || W(T)) return ve !== null ? null : K(O, b, T, ne, null);
        Gi(O, T);
      }
      return null;
    }
    function ce(O, b, T, ne, ve) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return O = O.get(T) || null, m(b, O, "" + ne, ve);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case p:
            return O = O.get(ne.key === null ? T : ne.key) || null, _(b, O, ne, ve);
          case g:
            return O = O.get(ne.key === null ? T : ne.key) || null, L(b, O, ne, ve);
          case pe:
            var ke = ne._init;
            return ce(O, b, T, ke(ne._payload), ve);
        }
        if (oe(ne) || W(ne)) return O = O.get(T) || null, K(b, O, ne, ve, null);
        Gi(b, ne);
      }
      return null;
    }
    function fe(O, b, T, ne) {
      for (var ve = null, ke = null, be = b, Ce = b = 0, dt = null; be !== null && Ce < T.length; Ce++) {
        be.index > Ce ? (dt = be, be = null) : dt = be.sibling;
        var Be = Q(O, be, T[Ce], ne);
        if (Be === null) {
          be === null && (be = dt);
          break;
        }
        e && be && Be.alternate === null && t(O, be), b = o(Be, b, Ce), ke === null ? ve = Be : ke.sibling = Be, ke = Be, be = dt;
      }
      if (Ce === T.length) return n(O, be), Ze && An(O, Ce), ve;
      if (be === null) {
        for (; Ce < T.length; Ce++) be = J(O, T[Ce], ne), be !== null && (b = o(be, b, Ce), ke === null ? ve = be : ke.sibling = be, ke = be);
        return Ze && An(O, Ce), ve;
      }
      for (be = r(O, be); Ce < T.length; Ce++) dt = ce(be, O, Ce, T[Ce], ne), dt !== null && (e && dt.alternate !== null && be.delete(dt.key === null ? Ce : dt.key), b = o(dt, b, Ce), ke === null ? ve = dt : ke.sibling = dt, ke = dt);
      return e && be.forEach(function(On) {
        return t(O, On);
      }), Ze && An(O, Ce), ve;
    }
    function he(O, b, T, ne) {
      var ve = W(T);
      if (typeof ve != "function") throw Error(l(150));
      if (T = ve.call(T), T == null) throw Error(l(151));
      for (var ke = ve = null, be = b, Ce = b = 0, dt = null, Be = T.next(); be !== null && !Be.done; Ce++, Be = T.next()) {
        be.index > Ce ? (dt = be, be = null) : dt = be.sibling;
        var On = Q(O, be, Be.value, ne);
        if (On === null) {
          be === null && (be = dt);
          break;
        }
        e && be && On.alternate === null && t(O, be), b = o(On, b, Ce), ke === null ? ve = On : ke.sibling = On, ke = On, be = dt;
      }
      if (Be.done) return n(
        O,
        be
      ), Ze && An(O, Ce), ve;
      if (be === null) {
        for (; !Be.done; Ce++, Be = T.next()) Be = J(O, Be.value, ne), Be !== null && (b = o(Be, b, Ce), ke === null ? ve = Be : ke.sibling = Be, ke = Be);
        return Ze && An(O, Ce), ve;
      }
      for (be = r(O, be); !Be.done; Ce++, Be = T.next()) Be = ce(be, O, Ce, Be.value, ne), Be !== null && (e && Be.alternate !== null && be.delete(Be.key === null ? Ce : Be.key), b = o(Be, b, Ce), ke === null ? ve = Be : ke.sibling = Be, ke = Be);
      return e && be.forEach(function(lp) {
        return t(O, lp);
      }), Ze && An(O, Ce), ve;
    }
    function it(O, b, T, ne) {
      if (typeof T == "object" && T !== null && T.type === R && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case p:
            e: {
              for (var ve = T.key, ke = b; ke !== null; ) {
                if (ke.key === ve) {
                  if (ve = T.type, ve === R) {
                    if (ke.tag === 7) {
                      n(O, ke.sibling), b = i(ke, T.props.children), b.return = O, O = b;
                      break e;
                    }
                  } else if (ke.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && Ga(ve) === ke.type) {
                    n(O, ke.sibling), b = i(ke, T.props), b.ref = qr(O, ke, T), b.return = O, O = b;
                    break e;
                  }
                  n(O, ke);
                  break;
                } else t(O, ke);
                ke = ke.sibling;
              }
              T.type === R ? (b = $n(T.props.children, O.mode, ne, T.key), b.return = O, O = b) : (ne = vo(T.type, T.key, T.props, null, O.mode, ne), ne.ref = qr(O, b, T), ne.return = O, O = ne);
            }
            return a(O);
          case g:
            e: {
              for (ke = T.key; b !== null; ) {
                if (b.key === ke) if (b.tag === 4 && b.stateNode.containerInfo === T.containerInfo && b.stateNode.implementation === T.implementation) {
                  n(O, b.sibling), b = i(b, T.children || []), b.return = O, O = b;
                  break e;
                } else {
                  n(O, b);
                  break;
                }
                else t(O, b);
                b = b.sibling;
              }
              b = hs(T, O.mode, ne), b.return = O, O = b;
            }
            return a(O);
          case pe:
            return ke = T._init, it(O, b, ke(T._payload), ne);
        }
        if (oe(T)) return fe(O, b, T, ne);
        if (W(T)) return he(O, b, T, ne);
        Gi(O, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" ? (T = "" + T, b !== null && b.tag === 6 ? (n(O, b.sibling), b = i(b, T), b.return = O, O = b) : (n(O, b), b = ps(T, O.mode, ne), b.return = O, O = b), a(O)) : n(O, b);
    }
    return it;
  }
  var ar = Ya(!0), Xa = Ya(!1), Yi = vn(null), Xi = null, ur = null, kl = null;
  function bl() {
    kl = ur = Xi = null;
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
    Xi = e, kl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (kt = !0), e.firstContext = null);
  }
  function Nt(e) {
    var t = e._currentValue;
    if (kl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if (Xi === null) throw Error(l(308));
      ur = e, Xi.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var In = null;
  function Rl(e) {
    In === null ? In = [e] : In.push(e);
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
    if (r = r.shared, He & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Rl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function Qi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fo(e, n);
    }
  }
  function Za(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? i = o = a : o = o.next = a, n = n.next;
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
    var o = i.firstBaseUpdate, a = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var _ = m, L = _.next;
      _.next = null, a === null ? o = L : a.next = L, a = _;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, m = K.lastBaseUpdate, m !== a && (m === null ? K.firstBaseUpdate = L : m.next = L, K.lastBaseUpdate = _));
    }
    if (o !== null) {
      var J = i.baseState;
      a = 0, K = L = _ = null, m = o;
      do {
        var Q = m.lane, ce = m.eventTime;
        if ((r & Q) === Q) {
          K !== null && (K = K.next = {
            eventTime: ce,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var fe = e, he = m;
            switch (Q = t, ce = n, he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  J = fe.call(ce, J, Q);
                  break e;
                }
                J = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, Q = typeof fe == "function" ? fe.call(ce, J, Q) : fe, Q == null) break e;
                J = q({}, J, Q);
                break e;
              case 2:
                Sn = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, Q = i.effects, Q === null ? i.effects = [m] : Q.push(m));
        } else ce = { eventTime: ce, lane: Q, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, K === null ? (L = K = ce, _ = J) : K = K.next = ce, a |= Q;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null) break;
          Q = m, m = Q.next, Q.next = null, i.lastBaseUpdate = Q, i.shared.pending = null;
        }
      } while (!0);
      if (K === null && (_ = J), i.baseState = _, i.firstBaseUpdate = L, i.lastBaseUpdate = K, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          a |= i.lane, i = i.next;
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      Bn |= a, e.lanes = a, e.memoizedState = J;
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
  function jl(e) {
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
  var Pl = [];
  function Dl() {
    for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0;
  }
  var Ji = f.ReactCurrentDispatcher, Tl = f.ReactCurrentBatchConfig, Hn = 0, et = null, lt = null, ut = null, eo = !1, Yr = !1, Xr = 0, Cf = 0;
  function mt() {
    throw Error(l(321));
  }
  function Nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, r, i, o) {
    if (Hn = o, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ji.current = e === null || e.memoizedState === null ? Df : Tf, e = n(r, i), Yr) {
      o = 0;
      do {
        if (Yr = !1, Xr = 0, 25 <= o) throw Error(l(301));
        o += 1, ut = lt = null, t.updateQueue = null, Ji.current = Nf, e = n(r, i);
      } while (Yr);
    }
    if (Ji.current = ro, t = lt !== null && lt.next !== null, Hn = 0, ut = lt = et = null, eo = !1, t) throw Error(l(300));
    return e;
  }
  function Ll() {
    var e = Xr !== 0;
    return Xr = 0, e;
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
  function Qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Al(e) {
    var t = Mt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = lt, i = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var a = i.next;
        i.next = o.next, o.next = a;
      }
      r.baseQueue = i = o, n.pending = null;
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var m = a = null, _ = null, L = o;
      do {
        var K = L.lane;
        if ((Hn & K) === K) _ !== null && (_ = _.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), r = L.hasEagerState ? L.eagerState : e(r, L.action);
        else {
          var J = {
            lane: K,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          _ === null ? (m = _ = J, a = r) : _ = _.next = J, et.lanes |= K, Bn |= K;
        }
        L = L.next;
      } while (L !== null && L !== o);
      _ === null ? a = r : _.next = m, Ht(r, t.memoizedState) || (kt = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = _, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, et.lanes |= o, Bn |= o, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Il(e) {
    var t = Mt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var a = i = i.next;
      do
        o = e(o, a.action), a = a.next;
      while (a !== i);
      Ht(o, t.memoizedState) || (kt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function tu() {
  }
  function nu(e, t) {
    var n = et, r = Mt(), i = t(), o = !Ht(r.memoizedState, i);
    if (o && (r.memoizedState = i, kt = !0), r = r.queue, Wl(ou.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ut !== null && ut.memoizedState.tag & 1) {
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
    return Mt().memoizedState;
  }
  function to(e, t, n, r) {
    var i = Qt();
    et.flags |= e, i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function no(e, t, n, r) {
    var i = Mt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (lt !== null) {
      var a = lt.memoizedState;
      if (o = a.destroy, r !== null && Nl(r, a.deps)) {
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
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function mu(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function yu(e, t, n) {
    return Hn & 21 ? (Ht(n, t) || (n = Gs(), et.lanes |= n, Bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n);
  }
  function Of(e, t) {
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
    return Mt().memoizedState;
  }
  function jf(e, t, n) {
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
        var a = t.lastRenderedState, m = o(a, n);
        if (i.hasEagerState = !0, i.eagerState = m, Ht(m, a)) {
          var _ = t.interleaved;
          _ === null ? (i.next = i, Rl(t)) : (i.next = _.next, _.next = i), t.interleaved = i;
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
      r &= e.pendingLanes, n |= r, t.lanes = n, Fo(e, n);
    }
  }
  var ro = { readContext: Nt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, Df = { readContext: Nt, useCallback: function(e, t) {
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jf.bind(null, et, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: au, useDebugValue: Hl, useDeferredValue: function(e) {
    return Qt().memoizedState = e;
  }, useTransition: function() {
    var e = au(!1), t = e[0];
    return e = Of.bind(null, e[1]), Qt().memoizedState = e, [t, e];
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
    } else n = Cf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Tf = {
    readContext: Nt,
    useCallback: gu,
    useContext: Nt,
    useEffect: Wl,
    useImperativeHandle: hu,
    useInsertionEffect: du,
    useLayoutEffect: fu,
    useMemo: mu,
    useReducer: Al,
    useRef: uu,
    useState: function() {
      return Al(Qr);
    },
    useDebugValue: Hl,
    useDeferredValue: function(e) {
      var t = Mt();
      return yu(t, lt.memoizedState, e);
    },
    useTransition: function() {
      var e = Al(Qr)[0], t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: tu,
    useSyncExternalStore: nu,
    useId: vu,
    unstable_isNewReconciler: !1
  }, Nf = { readContext: Nt, useCallback: gu, useContext: Nt, useEffect: Wl, useImperativeHandle: hu, useInsertionEffect: du, useLayoutEffect: fu, useMemo: mu, useReducer: Il, useRef: uu, useState: function() {
    return Il(Qr);
  }, useDebugValue: Hl, useDeferredValue: function(e) {
    var t = Mt();
    return lt === null ? t.memoizedState = e : yu(t, lt.memoizedState, e);
  }, useTransition: function() {
    var e = Il(Qr)[0], t = Mt().memoizedState;
    return [e, t];
  }, useMutableSource: tu, useSyncExternalStore: nu, useId: vu, unstable_isNewReconciler: !1 };
  function Ft(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Bl(e, t, n, r) {
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
  function _u(e, t, n, r, i, o, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(i, o) : !0;
  }
  function ku(e, t, n) {
    var r = !1, i = xn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Nt(o) : (i = _t(t) ? Mn : gt.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : xn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function bu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && io.enqueueReplaceState(t, t.state, null);
  }
  function Fl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Cl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Nt(o) : (o = _t(t) ? Mn : gt.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Bl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && io.enqueueReplaceState(i, i.state, null), Ki(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
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
  var Mf = typeof WeakMap == "function" ? WeakMap : Map;
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
      ql(e, t), typeof r != "function" && (bn === null ? bn = /* @__PURE__ */ new Set([this]) : bn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function Ru(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Mf();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Xf.bind(null, e, t, n), t.then(e, e));
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
  var Lf = f.ReactCurrentOwner, kt = !1;
  function xt(e, t, n, r) {
    t.child = e === null ? Xa(t, null, n, r) : ar(t, e.child, n, r);
  }
  function ju(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = Ml(e, t, n, r, o, i), n = Ll(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && n && vl(t), t.flags |= 1, xt(e, t, r, i), t.child);
  }
  function Pu(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !fs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Du(e, t, o, r, i)) : (e = vo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var a = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ar, n(a, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Cn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Du(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ar(o, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (kt = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return $l(e, t, n, r, i);
  }
  function Tu(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(hr, Pt), Pt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ge(hr, Pt), Pt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ge(hr, Pt), Pt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ge(hr, Pt), Pt |= r;
    return xt(e, t, i, n), t.child;
  }
  function Nu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function $l(e, t, n, r, i) {
    var o = _t(n) ? Mn : gt.current;
    return o = ir(t, o), cr(t, i), n = Ml(e, t, n, r, o, i), r = Ll(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && r && vl(t), t.flags |= 1, xt(e, t, n, i), t.child);
  }
  function Mu(e, t, n, r, i) {
    if (_t(n)) {
      var o = !0;
      Fi(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) lo(e, t), ku(t, n, r), Fl(t, n, r, i), r = !0;
    else if (e === null) {
      var a = t.stateNode, m = t.memoizedProps;
      a.props = m;
      var _ = a.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = Nt(L) : (L = _t(n) ? Mn : gt.current, L = ir(t, L));
      var K = n.getDerivedStateFromProps, J = typeof K == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      J || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (m !== r || _ !== L) && bu(t, a, r, L), Sn = !1;
      var Q = t.memoizedState;
      a.state = Q, Ki(t, r, a, i), _ = t.memoizedState, m !== r || Q !== _ || St.current || Sn ? (typeof K == "function" && (Bl(t, n, K, r), _ = t.memoizedState), (m = Sn || _u(t, n, m, r, Q, _, L)) ? (J || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = _), a.props = r, a.state = _, a.context = L, r = m) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, Ka(e, t), m = t.memoizedProps, L = t.type === t.elementType ? m : Ft(t.type, m), a.props = L, J = t.pendingProps, Q = a.context, _ = n.contextType, typeof _ == "object" && _ !== null ? _ = Nt(_) : (_ = _t(n) ? Mn : gt.current, _ = ir(t, _));
      var ce = n.getDerivedStateFromProps;
      (K = typeof ce == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (m !== J || Q !== _) && bu(t, a, r, _), Sn = !1, Q = t.memoizedState, a.state = Q, Ki(t, r, a, i);
      var fe = t.memoizedState;
      m !== J || Q !== fe || St.current || Sn ? (typeof ce == "function" && (Bl(t, n, ce, r), fe = t.memoizedState), (L = Sn || _u(t, n, L, r, Q, fe, _) || !1) ? (K || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, fe, _), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, fe, _)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || m === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = fe), a.props = r, a.state = fe, a.context = _, r = L) : (typeof a.componentDidUpdate != "function" || m === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vl(e, t, n, r, o, i);
  }
  function Vl(e, t, n, r, i, o) {
    Nu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && Ha(t, n, !1), ln(e, t, o);
    r = t.stateNode, Lf.current = t;
    var m = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, m, o)) : xt(e, t, m, o), t.memoizedState = r.state, i && Ha(t, n, !0), t.child;
  }
  function Lu(e) {
    var t = e.stateNode;
    t.pendingContext ? Ia(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ia(e, t.context, !1), Ol(e, t.containerInfo);
  }
  function Au(e, t, n, r, i) {
    return sr(), _l(i), t.flags |= 256, xt(e, t, n, r), t.child;
  }
  var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Iu(e, t, n) {
    var r = t.pendingProps, i = Je.current, o = !1, a = (t.flags & 128) !== 0, m;
    if ((m = a) || (m = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), m ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ge(Je, i & 1), e === null)
      return Sl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = xo(a, r, 0, null), e = $n(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Yl(n), t.memoizedState = Gl, e) : Xl(t, a));
    if (i = e.memoizedState, i !== null && (m = i.dehydrated, m !== null)) return Af(e, t, a, r, m, i, n);
    if (o) {
      o = r.fallback, a = t.mode, i = e.child, m = i.sibling;
      var _ = { mode: "hidden", children: r.children };
      return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = _, t.deletions = null) : (r = Cn(i, _), r.subtreeFlags = i.subtreeFlags & 14680064), m !== null ? o = Cn(m, o) : (o = $n(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? Yl(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = Gl, r;
    }
    return o = e.child, e = o.sibling, r = Cn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Xl(e, t) {
    return t = xo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oo(e, t, n, r) {
    return r !== null && _l(r), ar(t, e.child, null, n), e = Xl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Af(e, t, n, r, i, o, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ul(Error(l(422))), oo(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = xo({ mode: "visible", children: r.children }, i, 0, null), o = $n(o, i, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, a), t.child.memoizedState = Yl(a), t.memoizedState = Gl, o);
    if (!(t.mode & 1)) return oo(e, t, a, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var m = r.dgst;
      return r = m, o = Error(l(419)), r = Ul(o, r, void 0), oo(e, t, a, r);
    }
    if (m = (a & e.childLanes) !== 0, kt || m) {
      if (r = ct, r !== null) {
        switch (a & -a) {
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
        i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, rn(e, i), $t(r, e, i, -1));
      }
      return ds(), r = Ul(Error(l(421))), oo(e, t, a, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qf.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, jt = yn(i.nextSibling), Ot = t, Ze = !0, Bt = null, e !== null && (Dt[Tt++] = tn, Dt[Tt++] = nn, Dt[Tt++] = Ln, tn = e.id, nn = e.overflow, Ln = t), t = Xl(t, r.children), t.flags |= 4096, t);
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
    if (e !== null && (t.dependencies = e.dependencies), Bn |= t.lanes, !(n & t.childLanes)) return null;
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
        Lu(t), sr();
        break;
      case 5:
        eu(t);
        break;
      case 1:
        _t(t.type) && Fi(t);
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
          return r.dehydrated !== null ? (Ge(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Iu(e, t, n) : (Ge(Je, Je.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
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
  var Bu, Kl, Fu, Uu;
  Bu = function(e, t) {
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
  }, Fu = function(e, t, n, r) {
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
      var a;
      n = null;
      for (L in i) if (!r.hasOwnProperty(L) && i.hasOwnProperty(L) && i[L] != null) if (L === "style") {
        var m = i[L];
        for (a in m) m.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (w.hasOwnProperty(L) ? o || (o = []) : (o = o || []).push(L, null));
      for (L in r) {
        var _ = r[L];
        if (m = i?.[L], r.hasOwnProperty(L) && _ !== m && (_ != null || m != null)) if (L === "style") if (m) {
          for (a in m) !m.hasOwnProperty(a) || _ && _.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in _) _.hasOwnProperty(a) && m[a] !== _[a] && (n || (n = {}), n[a] = _[a]);
        } else n || (o || (o = []), o.push(
          L,
          n
        )), n = _;
        else L === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, m = m ? m.__html : void 0, _ != null && m !== _ && (o = o || []).push(L, _)) : L === "children" ? typeof _ != "string" && typeof _ != "number" || (o = o || []).push(L, "" + _) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (w.hasOwnProperty(L) ? (_ != null && L === "onScroll" && Ye("scroll", e), o || m === _ || (o = [])) : (o = o || []).push(L, _));
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
  function Wf(e, t, n) {
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
        return _t(t.type) && Bi(), yt(t), null;
      case 3:
        return r = t.stateNode, dr(), Xe(St), Xe(gt), Dl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Bt !== null && (as(Bt), Bt = null))), Kl(e, t), yt(t), null;
      case 5:
        jl(t);
        var i = Wn(Gr.current);
        if (n = t.type, e !== null && t.stateNode != null) Fu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return yt(t), null;
          }
          if (e = Wn(Xt.current), Vi(t)) {
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
                je(r, o), Ye("invalid", r);
            }
            ft(n, o), i = null;
            for (var a in o) if (o.hasOwnProperty(a)) {
              var m = o[a];
              a === "children" ? typeof m == "string" ? r.textContent !== m && (o.suppressHydrationWarning !== !0 && Ii(r.textContent, m, e), i = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (o.suppressHydrationWarning !== !0 && Ii(
                r.textContent,
                m,
                e
              ), i = ["children", "" + m]) : w.hasOwnProperty(a) && m != null && a === "onScroll" && Ye("scroll", r);
            }
            switch (n) {
              case "input":
                De(r), C(r, o, !0);
                break;
              case "textarea":
                De(r), $e(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Wi);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yt] = t, e[Fr] = r, Bu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = It(n, r), n) {
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
                  je(e, r), i = Ee(e, r), Ye("invalid", e);
                  break;
                default:
                  i = r;
              }
              ft(n, i), m = i;
              for (o in m) if (m.hasOwnProperty(o)) {
                var _ = m[o];
                o === "style" ? Ie(e, _) : o === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && D(e, _)) : o === "children" ? typeof _ == "string" ? (n !== "textarea" || _ !== "") && H(e, _) : typeof _ == "number" && H(e, "" + _) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (w.hasOwnProperty(o) ? _ != null && o === "onScroll" && Ye("scroll", e) : _ != null && h(e, o, _, a));
              }
              switch (n) {
                case "input":
                  De(e), C(e, r, !1);
                  break;
                case "textarea":
                  De(e), $e(e);
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
                Ii(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ii(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return yt(t), null;
      case 13:
        if (Xe(Je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && jt !== null && t.mode & 1 && !(t.flags & 128)) Va(), sr(), t.flags |= 98560, o = !1;
          else if (o = Vi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
              o[Yt] = t;
            } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            yt(t), o = !1;
          } else Bt !== null && (as(Bt), Bt = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Je.current & 1 ? st === 0 && (st = 3) : ds())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
      case 4:
        return dr(), Kl(e, t), e === null && Hr(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return El(t.type._context), yt(t), null;
      case 17:
        return _t(t.type) && Bi(), yt(t), null;
      case 19:
        if (Xe(Je), o = t.memoizedState, o === null) return yt(t), null;
        if (r = (t.flags & 128) !== 0, a = o.rendering, a === null) if (r) Zr(o, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (a = Zi(e), a !== null) {
              for (t.flags |= 128, Zr(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ge(Je, Je.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && rt() > gr && (t.flags |= 128, r = !0, Zr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zi(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !Ze) return yt(t), null;
          } else 2 * rt() - o.renderingStartTime > gr && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = rt(), t.sibling = null, n = Je.current, Ge(Je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return cs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Hf(e, t) {
    switch (xl(t), t.tag) {
      case 1:
        return _t(t.type) && Bi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dr(), Xe(St), Xe(gt), Dl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return jl(t), null;
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
  var so = !1, vt = !1, Bf = typeof WeakSet == "function" ? WeakSet : Set, de = null;
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
          var a = 0, m = -1, _ = -1, L = 0, K = 0, J = e, Q = null;
          t: for (; ; ) {
            for (var ce; J !== n || i !== 0 && J.nodeType !== 3 || (m = a + i), J !== o || r !== 0 && J.nodeType !== 3 || (_ = a + r), J.nodeType === 3 && (a += J.nodeValue.length), (ce = J.firstChild) !== null; )
              Q = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (Q === n && ++L === i && (m = a), Q === o && ++K === r && (_ = a), (ce = J.nextSibling) !== null) break;
              J = Q, Q = J.parentNode;
            }
            J = ce;
          }
          n = m === -1 || _ === -1 ? null : { start: m, end: _ };
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
              var he = fe.memoizedProps, it = fe.memoizedState, O = t.stateNode, b = O.getSnapshotBeforeUpdate(t.elementType === t.type ? he : Ft(t.type, he), it);
              O.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var T = t.stateNode.containerInfo;
            T.nodeType === 1 ? T.textContent = "" : T.nodeType === 9 && T.documentElement && T.removeChild(T.documentElement);
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
    t !== null && (e.alternate = null, $u(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Fr], delete t[gl], delete t[bf], delete t[Ef])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function kn(e, t, n) {
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
        pt = null, kn(e, t, n), pt = r, Ut = i, pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n), Pr(e)) : hl(pt, n.stateNode));
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
            var o = i, a = o.destroy;
            o = o.tag, a !== void 0 && (o & 2 || o & 4) && Zl(n, t, a), i = i.next;
          } while (i !== r);
        }
        kn(e, t, n);
        break;
      case 1:
        if (!vt && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (m) {
          tt(n, t, m);
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
  function Xu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Bf()), t.forEach(function(r) {
        var i = Kf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function qt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, a = t, m = a;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              pt = m.stateNode, Ut = !1;
              break e;
            case 3:
              pt = m.stateNode.containerInfo, Ut = !0;
              break e;
            case 4:
              pt = m.stateNode.containerInfo, Ut = !0;
              break e;
          }
          m = m.return;
        }
        if (pt === null) throw Error(l(160));
        Yu(o, a, i), pt = null, Ut = !1;
        var _ = i.alternate;
        _ !== null && (_.return = null), i.return = null;
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
          var o = e.memoizedProps, a = n !== null ? n.memoizedProps : o, m = e.type, _ = e.updateQueue;
          if (e.updateQueue = null, _ !== null) try {
            m === "input" && o.type === "radio" && o.name != null && k(i, o), It(m, a);
            var L = It(m, o);
            for (a = 0; a < _.length; a += 2) {
              var K = _[a], J = _[a + 1];
              K === "style" ? Ie(i, J) : K === "dangerouslySetInnerHTML" ? D(i, J) : K === "children" ? H(i, J) : h(i, K, J, L);
            }
            switch (m) {
              case "input":
                z(i, o);
                break;
              case "textarea":
                Ne(i, o);
                break;
              case "select":
                var Q = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var ce = o.value;
                ce != null ? ge(i, !!o.multiple, ce, !1) : Q !== !!o.multiple && (o.defaultValue != null ? ge(
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
        qt(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (is = rt())), r & 4 && Xu(e);
        break;
      case 22:
        if (K = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (L = vt) || K, qt(t, e), vt = L) : qt(t, e), Kt(e), r & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !K && e.mode & 1) for (de = e, K = e.child; K !== null; ) {
            for (J = de = K; de !== null; ) {
              switch (Q = de, ce = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, Q, Q.return);
                  break;
                case 1:
                  pr(Q, Q.return);
                  var fe = Q.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    r = Q, n = Q.return;
                    try {
                      t = r, fe.props = t.memoizedProps, fe.state = t.memoizedState, fe.componentWillUnmount();
                    } catch (he) {
                      tt(r, n, he);
                    }
                  }
                  break;
                case 5:
                  pr(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Ju(J);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Q, de = ce) : Ju(J);
            }
            K = K.sibling;
          }
          e: for (K = null, J = e; ; ) {
            if (J.tag === 5) {
              if (K === null) {
                K = J;
                try {
                  i = J.stateNode, L ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (m = J.stateNode, _ = J.memoizedProps.style, a = _ != null && _.hasOwnProperty("display") ? _.display : null, m.style.display = Ae("display", a));
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
            var a = r.stateNode.containerInfo, m = Gu(e);
            es(e, m, a);
            break;
          default:
            throw Error(l(161));
        }
      } catch (_) {
        tt(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Uf(e, t, n) {
    de = e, Ku(e);
  }
  function Ku(e, t, n) {
    for (var r = (e.mode & 1) !== 0; de !== null; ) {
      var i = de, o = i.child;
      if (i.tag === 22 && r) {
        var a = i.memoizedState !== null || so;
        if (!a) {
          var m = i.alternate, _ = m !== null && m.memoizedState !== null || vt;
          m = so;
          var L = vt;
          if (so = a, (vt = _) && !L) for (de = i; de !== null; ) a = de, _ = a.child, a.tag === 22 && a.memoizedState !== null ? ec(i) : _ !== null ? (_.return = a, de = _) : ec(i);
          for (; o !== null; ) de = o, Ku(o), o = o.sibling;
          de = i, so = m, vt = L;
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
                var i = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Ja(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ja(t, a, n);
              }
              break;
            case 5:
              var m = t.stateNode;
              if (n === null && t.flags & 4) {
                n = m;
                var _ = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    _.autoFocus && n.focus();
                    break;
                  case "img":
                    _.src && (n.src = _.src);
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
          vt || t.flags & 512 && Jl(t);
        } catch (Q) {
          tt(t, t.return, Q);
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
            } catch (_) {
              tt(t, n, _);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (_) {
                tt(t, i, _);
              }
            }
            var o = t.return;
            try {
              Jl(t);
            } catch (_) {
              tt(t, o, _);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Jl(t);
            } catch (_) {
              tt(t, a, _);
            }
        }
      } catch (_) {
        tt(t, t.return, _);
      }
      if (t === e) {
        de = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        m.return = t.return, de = m;
        break;
      }
      de = t.return;
    }
  }
  var qf = Math.ceil, uo = f.ReactCurrentDispatcher, ns = f.ReactCurrentOwner, Lt = f.ReactCurrentBatchConfig, He = 0, ct = null, ot = null, ht = 0, Pt = 0, hr = vn(0), st = 0, ei = null, Bn = 0, co = 0, rs = 0, ti = null, bt = null, is = 0, gr = 1 / 0, sn = null, fo = !1, os = null, bn = null, po = !1, En = null, ho = 0, ni = 0, ls = null, go = -1, mo = 0;
  function wt() {
    return He & 6 ? rt() : go !== -1 ? go : go = rt();
  }
  function zn(e) {
    return e.mode & 1 ? He & 2 && ht !== 0 ? ht & -ht : Rf.transition !== null ? (mo === 0 && (mo = Gs()), mo) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : na(e.type)), e) : 1;
  }
  function $t(e, t, n, r) {
    if (50 < ni) throw ni = 0, ls = null, Error(l(185));
    zr(e, n, r), (!(He & 2) || e !== ct) && (e === ct && (!(He & 2) && (co |= n), st === 4 && Rn(e, ht)), Et(e, r), n === 1 && He === 0 && !(t.mode & 1) && (gr = rt() + 500, Ui && wn()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    zd(e, t);
    var r = bi(e, e === ct ? ht : 0);
    if (r === 0) n !== null && qs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && qs(n), t === 1) e.tag === 0 ? zf(nc.bind(null, e)) : Ba(nc.bind(null, e)), _f(function() {
        !(He & 6) && wn();
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
    if (go = -1, mo = 0, He & 6) throw Error(l(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = bi(e, e === ct ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
    else {
      t = r;
      var i = He;
      He |= 2;
      var o = ic();
      (ct !== e || ht !== t) && (sn = null, gr = rt() + 500, Un(e, t));
      do
        try {
          Gf();
          break;
        } catch (m) {
          rc(e, m);
        }
      while (!0);
      bl(), uo.current = o, He = i, ot !== null ? t = 0 : (ct = null, ht = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (i = Ho(e), i !== 0 && (r = i, t = ss(e, i))), t === 1) throw n = ei, Un(e, 0), Rn(e, r), Et(e, rt()), n;
      if (t === 6) Rn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !$f(i) && (t = yo(e, r), t === 2 && (o = Ho(e), o !== 0 && (r = o, t = ss(e, o))), t === 1)) throw n = ei, Un(e, 0), Rn(e, r), Et(e, rt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            qn(e, bt, sn);
            break;
          case 3:
            if (Rn(e, r), (r & 130023424) === r && (t = is + 500 - rt(), 10 < t)) {
              if (bi(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                wt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = pl(qn.bind(null, e, bt, sn), t);
              break;
            }
            qn(e, bt, sn);
            break;
          case 4:
            if (Rn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - Wt(r);
              o = 1 << a, a = t[a], a > i && (i = a), r &= ~o;
            }
            if (r = i, r = rt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = pl(qn.bind(null, e, bt, sn), r);
              break;
            }
            qn(e, bt, sn);
            break;
          case 5:
            qn(e, bt, sn);
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
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = yo(e, t), e !== 2 && (t = bt, bt = n, t !== null && as(t)), e;
  }
  function as(e) {
    bt === null ? bt = e : bt.push.apply(bt, e);
  }
  function $f(e) {
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
    if (He & 6) throw Error(l(327));
    mr();
    var t = bi(e, 0);
    if (!(t & 1)) return Et(e, rt()), null;
    var n = yo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ho(e);
      r !== 0 && (t = r, n = ss(e, r));
    }
    if (n === 1) throw n = ei, Un(e, 0), Rn(e, t), Et(e, rt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, bt, sn), Et(e, rt()), null;
  }
  function us(e, t) {
    var n = He;
    He |= 1;
    try {
      return e(t);
    } finally {
      He = n, He === 0 && (gr = rt() + 500, Ui && wn());
    }
  }
  function Fn(e) {
    En !== null && En.tag === 0 && !(He & 6) && mr();
    var t = He;
    He |= 1;
    var n = Lt.transition, r = qe;
    try {
      if (Lt.transition = null, qe = 1, e) return e();
    } finally {
      qe = r, Lt.transition = n, He = t, !(He & 6) && wn();
    }
  }
  function cs() {
    Pt = hr.current, Xe(hr);
  }
  function Un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Sf(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var r = n;
      switch (xl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Bi();
          break;
        case 3:
          dr(), Xe(St), Xe(gt), Dl();
          break;
        case 5:
          jl(r);
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
    if (ct = e, ot = e = Cn(e.current, null), ht = Pt = t, st = 0, ei = null, rs = co = Bn = 0, bt = ti = null, In !== null) {
      for (t = 0; t < In.length; t++) if (n = In[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var a = o.next;
          o.next = i, r.next = a;
        }
        n.pending = r;
      }
      In = null;
    }
    return e;
  }
  function rc(e, t) {
    do {
      var n = ot;
      try {
        if (bl(), Ji.current = ro, eo) {
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
          var o = e, a = n.return, m = n, _ = t;
          if (t = ht, m.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var L = _, K = m, J = K.tag;
            if (!(K.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var Q = K.alternate;
              Q ? (K.updateQueue = Q.updateQueue, K.memoizedState = Q.memoizedState, K.lanes = Q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var ce = Cu(a);
            if (ce !== null) {
              ce.flags &= -257, Ou(ce, a, m, o, t), ce.mode & 1 && Ru(o, L, t), t = ce, _ = L;
              var fe = t.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(_), t.updateQueue = he;
              } else fe.add(_);
              break e;
            } else {
              if (!(t & 1)) {
                Ru(o, L, t), ds();
                break e;
              }
              _ = Error(l(426));
            }
          } else if (Ze && m.mode & 1) {
            var it = Cu(a);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), Ou(it, a, m, o, t), _l(fr(_, m));
              break e;
            }
          }
          o = _ = fr(_, m), st !== 4 && (st = 2), ti === null ? ti = [o] : ti.push(o), o = a;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var O = Eu(o, _, t);
                Za(o, O);
                break e;
              case 1:
                m = _;
                var b = o.type, T = o.stateNode;
                if (!(o.flags & 128) && (typeof b.getDerivedStateFromError == "function" || T !== null && typeof T.componentDidCatch == "function" && (bn === null || !bn.has(T)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var ne = zu(o, m, t);
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
    (st === 0 || st === 3 || st === 2) && (st = 4), ct === null || !(Bn & 268435455) && !(co & 268435455) || Rn(ct, ht);
  }
  function yo(e, t) {
    var n = He;
    He |= 2;
    var r = ic();
    (ct !== e || ht !== t) && (sn = null, Un(e, t));
    do
      try {
        Vf();
        break;
      } catch (i) {
        rc(e, i);
      }
    while (!0);
    if (bl(), He = n, uo.current = r, ot !== null) throw Error(l(261));
    return ct = null, ht = 0, st;
  }
  function Vf() {
    for (; ot !== null; ) oc(ot);
  }
  function Gf() {
    for (; ot !== null && !yd(); ) oc(ot);
  }
  function oc(e) {
    var t = uc(e.alternate, e, Pt);
    e.memoizedProps = e.pendingProps, t === null ? lc(e) : ot = t, ns.current = null;
  }
  function lc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Hf(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (n = Wf(n, t, Pt), n !== null) {
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
    var r = qe, i = Lt.transition;
    try {
      Lt.transition = null, qe = 1, Yf(e, t, n, r);
    } finally {
      Lt.transition = i, qe = r;
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do
      mr();
    while (En !== null);
    if (He & 6) throw Error(l(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Rd(e, o), e === ct && (ot = ct = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || po || (po = !0, cc(wi, function() {
      return mr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Lt.transition, Lt.transition = null;
      var a = qe;
      qe = 1;
      var m = He;
      He |= 4, ns.current = null, Ff(e, n), Qu(n, e), hf(dl), Ri = !!cl, dl = cl = null, e.current = n, Uf(n), vd(), He = m, qe = a, Lt.transition = o;
    } else e.current = n;
    if (po && (po = !1, En = e, ho = i), o = e.pendingLanes, o === 0 && (bn = null), Sd(n.stateNode), Et(e, rt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (fo) throw fo = !1, e = os, os = null, e;
    return ho & 1 && e.tag !== 0 && mr(), o = e.pendingLanes, o & 1 ? e === ls ? ni++ : (ni = 0, ls = e) : ni = 0, wn(), null;
  }
  function mr() {
    if (En !== null) {
      var e = Ys(ho), t = Lt.transition, n = qe;
      try {
        if (Lt.transition = null, qe = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, ho = 0, He & 6) throw Error(l(331));
          var i = He;
          for (He |= 4, de = e.current; de !== null; ) {
            var o = de, a = o.child;
            if (de.flags & 16) {
              var m = o.deletions;
              if (m !== null) {
                for (var _ = 0; _ < m.length; _++) {
                  var L = m[_];
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
                      var Q = K.sibling, ce = K.return;
                      if ($u(K), K === L) {
                        de = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = ce, de = Q;
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
            if (o.subtreeFlags & 2064 && a !== null) a.return = o, de = a;
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
          var b = e.current;
          for (de = b; de !== null; ) {
            a = de;
            var T = a.child;
            if (a.subtreeFlags & 2064 && T !== null) T.return = a, de = T;
            else e: for (a = b; de !== null; ) {
              if (m = de, m.flags & 2048) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ao(9, m);
                }
              } catch (ve) {
                tt(m, m.return, ve);
              }
              if (m === a) {
                de = null;
                break e;
              }
              var ne = m.sibling;
              if (ne !== null) {
                ne.return = m.return, de = ne;
                break e;
              }
              de = m.return;
            }
          }
          if (He = i, wn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(Si, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        qe = n, Lt.transition = t;
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
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r))) {
          e = fr(n, e), e = zu(t, e, 1), t = _n(t, e, 1), e = wt(), t !== null && (zr(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Xf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = wt(), e.pingedLanes |= e.suspendedLanes & n, ct === e && (ht & n) === n && (st === 4 || st === 3 && (ht & 130023424) === ht && 500 > rt() - is ? Un(e, 0) : rs |= n), Et(e, t);
  }
  function ac(e, t) {
    t === 0 && (e.mode & 1 ? (t = ki, ki <<= 1, !(ki & 130023424) && (ki = 4194304)) : t = 1);
    var n = wt();
    e = rn(e, t), e !== null && (zr(e, t, n), Et(e, n));
  }
  function Qf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ac(e, n);
  }
  function Kf(e, t) {
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || St.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return kt = !1, If(e, t, n);
      kt = !!(e.flags & 131072);
    }
    else kt = !1, Ze && t.flags & 1048576 && Fa(t, $i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        lo(e, t), e = t.pendingProps;
        var i = ir(t, gt.current);
        cr(t, n), i = Ml(null, t, r, e, i, n);
        var o = Ll();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _t(r) ? (o = !0, Fi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cl(t), i.updater = io, t.stateNode = i, i._reactInternals = t, Fl(t, r, e, n), t = Vl(null, t, r, !0, o, n)) : (t.tag = 0, Ze && o && vl(t), xt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (lo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Jf(r), e = Ft(r, e), i) {
            case 0:
              t = $l(null, t, r, e, n);
              break e;
            case 1:
              t = Mu(null, t, r, e, n);
              break e;
            case 11:
              t = ju(null, t, r, e, n);
              break e;
            case 14:
              t = Pu(null, t, r, Ft(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), $l(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), Mu(e, t, r, i, n);
      case 3:
        e: {
          if (Lu(t), e === null) throw Error(l(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Ka(e, t), Ki(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = fr(Error(l(423)), t), t = Au(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = fr(Error(l(424)), t), t = Au(e, t, r, n, i);
            break e;
          } else for (jt = yn(t.stateNode.containerInfo.firstChild), Ot = t, Ze = !0, Bt = null, n = Xa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return eu(t), e === null && Sl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, fl(r, i) ? a = null : o !== null && fl(r, o) && (t.flags |= 32), Nu(e, t), xt(e, t, a, n), t.child;
      case 6:
        return e === null && Sl(t), null;
      case 13:
        return Iu(e, t, n);
      case 4:
        return Ol(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : xt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), ju(e, t, r, i, n);
      case 7:
        return xt(e, t, t.pendingProps, n), t.child;
      case 8:
        return xt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return xt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, Ge(Yi, r._currentValue), r._currentValue = a, o !== null) if (Ht(o.value, a)) {
            if (o.children === i.children && !St.current) {
              t = ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var m = o.dependencies;
            if (m !== null) {
              a = o.child;
              for (var _ = m.firstContext; _ !== null; ) {
                if (_.context === r) {
                  if (o.tag === 1) {
                    _ = on(-1, n & -n), _.tag = 2;
                    var L = o.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var K = L.pending;
                      K === null ? _.next = _ : (_.next = K.next, K.next = _), L.pending = _;
                    }
                  }
                  o.lanes |= n, _ = o.alternate, _ !== null && (_.lanes |= n), zl(
                    o.return,
                    n,
                    t
                  ), m.lanes |= n;
                  break;
                }
                _ = _.next;
              }
            } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (a = o.return, a === null) throw Error(l(341));
              a.lanes |= n, m = a.alternate, m !== null && (m.lanes |= n), zl(a, n, t), a = o.sibling;
            } else a = o.child;
            if (a !== null) a.return = o;
            else for (a = o; a !== null; ) {
              if (a === t) {
                a = null;
                break;
              }
              if (o = a.sibling, o !== null) {
                o.return = a.return, a = o;
                break;
              }
              a = a.return;
            }
            o = a;
          }
          xt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, cr(t, n), i = Nt(i), r = r(i), t.flags |= 1, xt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Ft(r, t.pendingProps), i = Ft(r.type, i), Pu(e, t, r, i, n);
      case 15:
        return Du(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ft(r, i), lo(e, t), t.tag = 1, _t(r) ? (e = !0, Fi(t)) : e = !1, cr(t, n), ku(t, r, i), Fl(t, r, i, n), Vl(null, t, r, !0, e, n);
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
  function Zf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, n, r) {
    return new Zf(e, t, n, r);
  }
  function fs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jf(e) {
    if (typeof e == "function") return fs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ie) return 11;
      if (e === Se) return 14;
    }
    return 2;
  }
  function Cn(e, t) {
    var n = e.alternate;
    return n === null ? (n = At(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function vo(e, t, n, r, i, o) {
    var a = 2;
    if (r = e, typeof e == "function") fs(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case R:
        return $n(n.children, i, o, t);
      case I:
        a = 8, i |= 8;
        break;
      case U:
        return e = At(12, n, t, i | 2), e.elementType = U, e.lanes = o, e;
      case re:
        return e = At(13, n, t, i), e.elementType = re, e.lanes = o, e;
      case me:
        return e = At(19, n, t, i), e.elementType = me, e.lanes = o, e;
      case ue:
        return xo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case te:
            a = 10;
            break e;
          case le:
            a = 9;
            break e;
          case ie:
            a = 11;
            break e;
          case Se:
            a = 14;
            break e;
          case pe:
            a = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = At(a, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function $n(e, t, n, r) {
    return e = At(7, e, r, t), e.lanes = n, e;
  }
  function xo(e, t, n, r) {
    return e = At(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ps(e, t, n) {
    return e = At(6, e, null, t), e.lanes = n, e;
  }
  function hs(e, t, n) {
    return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ep(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bo(0), this.expirationTimes = Bo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function gs(e, t, n, r, i, o, a, m, _) {
    return e = new ep(e, t, n, m, _), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = At(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(o), e;
  }
  function tp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
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
  function fc(e, t, n, r, i, o, a, m, _) {
    return e = gs(n, r, !0, e, i, o, a, m, _), e.context = dc(null), n = e.current, r = wt(), i = zn(n), o = on(r, i), o.callback = t ?? null, _n(n, o, i), e.current.lanes = i, zr(e, i, r), Et(e, r), e;
  }
  function wo(e, t, n, r) {
    var i = t.current, o = wt(), a = zn(i);
    return n = dc(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(o, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _n(i, t, a), e !== null && ($t(e, i, a, o), Qi(e, i, a)), a;
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
  function np() {
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
      Fn(function() {
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
  function ko(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gc() {
  }
  function rp(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var L = So(a);
          o.call(L);
        };
      }
      var a = fc(t, r, e, 0, null, !1, !1, "", gc);
      return e._reactRootContainer = a, e[Jt] = a.current, Hr(e.nodeType === 8 ? e.parentNode : e), Fn(), a;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var m = r;
      r = function() {
        var L = So(_);
        m.call(L);
      };
    }
    var _ = gs(e, 0, !1, null, null, !1, !1, "", gc);
    return e._reactRootContainer = _, e[Jt] = _.current, Hr(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
      wo(t, _, n, r);
    }), _;
  }
  function bo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof i == "function") {
        var m = i;
        i = function() {
          var _ = So(a);
          m.call(_);
        };
      }
      wo(t, a, e, i);
    } else a = rp(n, t, e, i, r);
    return So(a);
  }
  Xs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Er(t.pendingLanes);
          n !== 0 && (Fo(t, n | 1), Et(t, rt()), !(He & 6) && (gr = rt() + 500, wn()));
        }
        break;
      case 13:
        Fn(function() {
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
        if (z(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Hi(r);
              if (!i) throw Error(l(90));
              Le(r), z(r, i);
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
  }, yi = us, As = Fn;
  var ip = { usingClientEntryPoint: !1, Events: [Ur, nr, Hi, Sr, Yn, us] }, ri = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, op = { bundleType: ri.bundleType, version: ri.version, rendererPackageName: ri.rendererPackageName, rendererConfig: ri.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: f.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ri.findFiberByHostInstance || np, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Eo.isDisabled && Eo.supportsFiber) try {
      Si = Eo.inject(op), Gt = Eo;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vs(t)) throw Error(l(200));
    return tp(e, t, null, n);
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
    return e = Bs(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return Fn(e);
  }, zt.hydrate = function(e, t, n) {
    if (!ko(t)) throw Error(l(200));
    return bo(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!vs(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", a = hc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = fc(t, null, e, 1, n ?? null, i, !1, o, a), e[Jt] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new _o(t);
  }, zt.render = function(e, t, n) {
    if (!ko(t)) throw Error(l(200));
    return bo(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!ko(e)) throw Error(l(40));
    return e._reactRootContainer ? (Fn(function() {
      bo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = us, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ko(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return bo(e, t, n, !1, r);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Sc;
function mi() {
  if (Sc) return xs.exports;
  Sc = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return s(), xs.exports = fp(), xs.exports;
}
var _c;
function pp() {
  if (_c) return zo;
  _c = 1;
  var s = mi();
  return zo.createRoot = s.createRoot, zo.hydrateRoot = s.hydrateRoot, zo;
}
var hp = pp(), ze = Rt();
const gp = /* @__PURE__ */ sp(ze);
var ks = { exports: {} }, ii = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc;
function mp() {
  if (kc) return ii;
  kc = 1;
  var s = Rt(), c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, w = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(F, P, A) {
    var G, B = {}, $ = null, we = null;
    A !== void 0 && ($ = "" + A), P.key !== void 0 && ($ = "" + P.key), P.ref !== void 0 && (we = P.ref);
    for (G in P) d.call(P, G) && !E.hasOwnProperty(G) && (B[G] = P[G]);
    if (F && F.defaultProps) for (G in P = F.defaultProps, P) B[G] === void 0 && (B[G] = P[G]);
    return { $$typeof: c, type: F, key: $, ref: we, props: B, _owner: w.current };
  }
  return ii.Fragment = l, ii.jsx = j, ii.jsxs = j, ii;
}
var bc;
function yp() {
  return bc || (bc = 1, ks.exports = mp()), ks.exports;
}
var y = yp();
class Ec extends ze.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ y.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ y.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ y.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ y.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var bs = { exports: {} }, oi = {}, hi = { exports: {} }, vp = hi.exports, zc;
function Ns() {
  return zc || (zc = 1, function(s, c) {
    (function(l, d) {
      d(c);
    })(vp, function(l) {
      function d(Z) {
        return function(Re, De, Le, Fe, Ve, nt, k) {
          return Z(Re, De, k);
        };
      }
      function w(Z) {
        return function(Re, De, Le, Fe) {
          if (!Re || !De || typeof Re != "object" || typeof De != "object")
            return Z(Re, De, Le, Fe);
          var Ve = Fe.get(Re), nt = Fe.get(De);
          if (Ve && nt)
            return Ve === De && nt === Re;
          Fe.set(Re, De), Fe.set(De, Re);
          var k = Z(Re, De, Le, Fe);
          return Fe.delete(Re), Fe.delete(De), k;
        };
      }
      function E(Z, ae) {
        var Re = {};
        for (var De in Z)
          Re[De] = Z[De];
        for (var De in ae)
          Re[De] = ae[De];
        return Re;
      }
      function j(Z) {
        return Z.constructor === Object || Z.constructor == null;
      }
      function F(Z) {
        return typeof Z.then == "function";
      }
      function P(Z, ae) {
        return Z === ae || Z !== Z && ae !== ae;
      }
      var A = "[object Arguments]", G = "[object Boolean]", B = "[object Date]", $ = "[object RegExp]", we = "[object Map]", xe = "[object Number]", X = "[object Object]", M = "[object Set]", x = "[object String]", u = Object.prototype.toString;
      function h(Z) {
        var ae = Z.areArraysEqual, Re = Z.areDatesEqual, De = Z.areMapsEqual, Le = Z.areObjectsEqual, Fe = Z.areRegExpsEqual, Ve = Z.areSetsEqual, nt = Z.createIsNestedEqual, k = nt(z);
        function z(C, V, oe) {
          if (C === V)
            return !0;
          if (!C || !V || typeof C != "object" || typeof V != "object")
            return C !== C && V !== V;
          if (j(C) && j(V))
            return Le(C, V, k, oe);
          var ge = Array.isArray(C), Ee = Array.isArray(V);
          if (ge || Ee)
            return ge === Ee && ae(C, V, k, oe);
          var je = u.call(C);
          return je !== u.call(V) ? !1 : je === B ? Re(C, V, k, oe) : je === $ ? Fe(C, V, k, oe) : je === we ? De(C, V, k, oe) : je === M ? Ve(C, V, k, oe) : je === X || je === A ? F(C) || F(V) ? !1 : Le(C, V, k, oe) : je === G || je === xe || je === x ? P(C.valueOf(), V.valueOf()) : !1;
        }
        return z;
      }
      function f(Z, ae, Re, De) {
        var Le = Z.length;
        if (ae.length !== Le)
          return !1;
        for (; Le-- > 0; )
          if (!Re(Z[Le], ae[Le], Le, Le, Z, ae, De))
            return !1;
        return !0;
      }
      var p = w(f);
      function g(Z, ae) {
        return P(Z.valueOf(), ae.valueOf());
      }
      function R(Z, ae, Re, De) {
        var Le = Z.size === ae.size;
        if (!Le)
          return !1;
        if (!Z.size)
          return !0;
        var Fe = {}, Ve = 0;
        return Z.forEach(function(nt, k) {
          if (Le) {
            var z = !1, C = 0;
            ae.forEach(function(V, oe) {
              !z && !Fe[C] && (z = Re(k, oe, Ve, C, Z, ae, De) && Re(nt, V, k, oe, Z, ae, De)) && (Fe[C] = !0), C++;
            }), Ve++, Le = z;
          }
        }), Le;
      }
      var I = w(R), U = "_owner", te = Object.prototype.hasOwnProperty;
      function le(Z, ae, Re, De) {
        var Le = Object.keys(Z), Fe = Le.length;
        if (Object.keys(ae).length !== Fe)
          return !1;
        for (var Ve; Fe-- > 0; ) {
          if (Ve = Le[Fe], Ve === U) {
            var nt = !!Z.$$typeof, k = !!ae.$$typeof;
            if ((nt || k) && nt !== k)
              return !1;
          }
          if (!te.call(ae, Ve) || !Re(Z[Ve], ae[Ve], Ve, Ve, Z, ae, De))
            return !1;
        }
        return !0;
      }
      var ie = w(le);
      function re(Z, ae) {
        return Z.source === ae.source && Z.flags === ae.flags;
      }
      function me(Z, ae, Re, De) {
        var Le = Z.size === ae.size;
        if (!Le)
          return !1;
        if (!Z.size)
          return !0;
        var Fe = {};
        return Z.forEach(function(Ve, nt) {
          if (Le) {
            var k = !1, z = 0;
            ae.forEach(function(C, V) {
              !k && !Fe[z] && (k = Re(Ve, C, nt, V, Z, ae, De)) && (Fe[z] = !0), z++;
            }), Le = k;
          }
        }), Le;
      }
      var Se = w(me), pe = Object.freeze({
        areArraysEqual: f,
        areDatesEqual: g,
        areMapsEqual: R,
        areObjectsEqual: le,
        areRegExpsEqual: re,
        areSetsEqual: me,
        createIsNestedEqual: d
      }), ue = Object.freeze({
        areArraysEqual: p,
        areDatesEqual: g,
        areMapsEqual: I,
        areObjectsEqual: ie,
        areRegExpsEqual: re,
        areSetsEqual: Se,
        createIsNestedEqual: d
      }), Y = h(pe);
      function W(Z, ae) {
        return Y(Z, ae, void 0);
      }
      var q = h(E(pe, { createIsNestedEqual: function() {
        return P;
      } }));
      function S(Z, ae) {
        return q(Z, ae, void 0);
      }
      var N = h(ue);
      function ye(Z, ae) {
        return N(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      var _e = h(E(ue, {
        createIsNestedEqual: function() {
          return P;
        }
      }));
      function Oe(Z, ae) {
        return _e(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      function Pe(Z) {
        return h(E(pe, Z(pe)));
      }
      function Te(Z) {
        var ae = h(E(ue, Z(ue)));
        return function(Re, De, Le) {
          return Le === void 0 && (Le = /* @__PURE__ */ new WeakMap()), ae(Re, De, Le);
        };
      }
      l.circularDeepEqual = ye, l.circularShallowEqual = Oe, l.createCustomCircularEqual = Te, l.createCustomEqual = Pe, l.deepEqual = W, l.sameValueZeroEqual = P, l.shallowEqual = S, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(hi, hi.exports)), hi.exports;
}
var Ro = { exports: {} }, Rc;
function No() {
  if (Rc) return Ro.exports;
  Rc = 1;
  function s(l) {
    var d, w, E = "";
    if (typeof l == "string" || typeof l == "number") E += l;
    else if (typeof l == "object") if (Array.isArray(l)) {
      var j = l.length;
      for (d = 0; d < j; d++) l[d] && (w = s(l[d])) && (E && (E += " "), E += w);
    } else for (w in l) l[w] && (E && (E += " "), E += w);
    return E;
  }
  function c() {
    for (var l, d, w = 0, E = "", j = arguments.length; w < j; w++) (l = arguments[w]) && (d = s(l)) && (E && (E += " "), E += d);
    return E;
  }
  return Ro.exports = c, Ro.exports.clsx = c, Ro.exports;
}
var We = {}, Es, Cc;
function xp() {
  return Cc || (Cc = 1, Es = function(c, l, d) {
    return c === l ? !0 : c.className === l.className && d(c.style, l.style) && c.width === l.width && c.autoSize === l.autoSize && c.cols === l.cols && c.draggableCancel === l.draggableCancel && c.draggableHandle === l.draggableHandle && d(c.verticalCompact, l.verticalCompact) && d(c.compactType, l.compactType) && d(c.layout, l.layout) && d(c.margin, l.margin) && d(c.containerPadding, l.containerPadding) && c.rowHeight === l.rowHeight && c.maxRows === l.maxRows && c.isBounded === l.isBounded && c.isDraggable === l.isDraggable && c.isResizable === l.isResizable && c.allowOverlap === l.allowOverlap && c.preventCollision === l.preventCollision && c.useCSSTransforms === l.useCSSTransforms && c.transformScale === l.transformScale && c.isDroppable === l.isDroppable && d(c.resizeHandles, l.resizeHandles) && d(c.resizeHandle, l.resizeHandle) && c.onLayoutChange === l.onLayoutChange && c.onDragStart === l.onDragStart && c.onDrag === l.onDrag && c.onDragStop === l.onDragStop && c.onResizeStart === l.onResizeStart && c.onResize === l.onResize && c.onResizeStop === l.onResizeStop && c.onDrop === l.onDrop && d(c.droppingItem, l.droppingItem) && d(c.innerRef, l.innerRef);
  }), Es;
}
var Oc;
function xr() {
  if (Oc) return We;
  Oc = 1, Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.bottom = P, We.childrenEqual = we, We.cloneLayout = A, We.cloneLayoutItem = $, We.collides = X, We.compact = M, We.compactItem = h, We.compactType = Fe, We.correctBounds = f, We.fastPositionEqual = xe, We.fastRGLPropsEqual = void 0, We.getAllCollisions = R, We.getFirstCollision = g, We.getLayoutItem = p, We.getStatics = I, We.modifyLayout = G, We.moveElement = U, We.moveElementAwayFromCollision = te, We.noop = void 0, We.perc = le, We.resizeItemInDirection = Oe, We.setTopLeft = Te, We.setTransform = Pe, We.sortLayoutItems = Z, We.sortLayoutItemsByColRow = Re, We.sortLayoutItemsByRowCol = ae, We.synchronizeLayoutWithChildren = De, We.validateLayout = Le, We.withLayoutItem = B;
  var s = /* @__PURE__ */ Ns(), c = l(Rt());
  function l(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function d(k, z) {
    var C = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(k);
      z && (V = V.filter(function(oe) {
        return Object.getOwnPropertyDescriptor(k, oe).enumerable;
      })), C.push.apply(C, V);
    }
    return C;
  }
  function w(k) {
    for (var z = 1; z < arguments.length; z++) {
      var C = arguments[z] != null ? arguments[z] : {};
      z % 2 ? d(Object(C), !0).forEach(function(V) {
        E(k, V, C[V]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(C)) : d(Object(C)).forEach(function(V) {
        Object.defineProperty(k, V, Object.getOwnPropertyDescriptor(C, V));
      });
    }
    return k;
  }
  function E(k, z, C) {
    return (z = j(z)) in k ? Object.defineProperty(k, z, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : k[z] = C, k;
  }
  function j(k) {
    var z = F(k, "string");
    return typeof z == "symbol" ? z : z + "";
  }
  function F(k, z) {
    if (typeof k != "object" || !k) return k;
    var C = k[Symbol.toPrimitive];
    if (C !== void 0) {
      var V = C.call(k, z);
      if (typeof V != "object") return V;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (z === "string" ? String : Number)(k);
  }
  function P(k) {
    let z = 0, C;
    for (let V = 0, oe = k.length; V < oe; V++)
      C = k[V].y + k[V].h, C > z && (z = C);
    return z;
  }
  function A(k) {
    const z = Array(k.length);
    for (let C = 0, V = k.length; C < V; C++)
      z[C] = $(k[C]);
    return z;
  }
  function G(k, z) {
    const C = Array(k.length);
    for (let V = 0, oe = k.length; V < oe; V++)
      z.i === k[V].i ? C[V] = z : C[V] = k[V];
    return C;
  }
  function B(k, z, C) {
    let V = p(k, z);
    return V ? (V = C($(V)), k = G(k, V), [k, V]) : [k, null];
  }
  function $(k) {
    return {
      w: k.w,
      h: k.h,
      x: k.x,
      y: k.y,
      i: k.i,
      minW: k.minW,
      maxW: k.maxW,
      minH: k.minH,
      maxH: k.maxH,
      moved: !!k.moved,
      static: !!k.static,
      // These can be null/undefined
      isDraggable: k.isDraggable,
      isResizable: k.isResizable,
      resizeHandles: k.resizeHandles,
      isBounded: k.isBounded
    };
  }
  function we(k, z) {
    return (0, s.deepEqual)(c.default.Children.map(k, (C) => C?.key), c.default.Children.map(z, (C) => C?.key)) && (0, s.deepEqual)(c.default.Children.map(k, (C) => C?.props["data-grid"]), c.default.Children.map(z, (C) => C?.props["data-grid"]));
  }
  We.fastRGLPropsEqual = xp();
  function xe(k, z) {
    return k.left === z.left && k.top === z.top && k.width === z.width && k.height === z.height;
  }
  function X(k, z) {
    return !(k.i === z.i || k.x + k.w <= z.x || k.x >= z.x + z.w || k.y + k.h <= z.y || k.y >= z.y + z.h);
  }
  function M(k, z, C, V) {
    const oe = I(k);
    let ge = P(oe);
    const Ee = Z(k, z), je = Array(k.length);
    for (let Ne = 0, $e = Ee.length; Ne < $e; Ne++) {
      let Qe = $(Ee[Ne]);
      Qe.static || (Qe = h(oe, Qe, z, C, Ee, V, ge), ge = Math.max(ge, Qe.y + Qe.h), oe.push(Qe)), je[k.indexOf(Ee[Ne])] = Qe, Qe.moved = !1;
    }
    return je;
  }
  const x = {
    x: "w",
    y: "h"
  };
  function u(k, z, C, V) {
    const oe = x[V];
    z[V] += 1;
    const ge = k.map((Ee) => Ee.i).indexOf(z.i);
    for (let Ee = ge + 1; Ee < k.length; Ee++) {
      const je = k[Ee];
      if (!je.static) {
        if (je.y > z.y + z.h) break;
        X(z, je) && u(k, je, C + z[oe], V);
      }
    }
    z[V] = C;
  }
  function h(k, z, C, V, oe, ge, Ee) {
    const je = C === "vertical", Ne = C === "horizontal";
    if (je)
      for (typeof Ee == "number" ? z.y = Math.min(Ee, z.y) : z.y = Math.min(P(k), z.y); z.y > 0 && !g(k, z); )
        z.y--;
    else if (Ne)
      for (; z.x > 0 && !g(k, z); )
        z.x--;
    let $e;
    for (; ($e = g(k, z)) && !(C === null && ge); )
      if (Ne ? u(oe, z, $e.x + $e.w, "x") : u(oe, z, $e.y + $e.h, "y"), Ne && z.x + z.w > V)
        for (z.x = V - z.w, z.y++; z.x > 0 && !g(k, z); )
          z.x--;
    return z.y = Math.max(z.y, 0), z.x = Math.max(z.x, 0), z;
  }
  function f(k, z) {
    const C = I(k);
    for (let V = 0, oe = k.length; V < oe; V++) {
      const ge = k[V];
      if (ge.x + ge.w > z.cols && (ge.x = z.cols - ge.w), ge.x < 0 && (ge.x = 0, ge.w = z.cols), !ge.static) C.push(ge);
      else
        for (; g(C, ge); )
          ge.y++;
    }
    return k;
  }
  function p(k, z) {
    for (let C = 0, V = k.length; C < V; C++)
      if (k[C].i === z) return k[C];
  }
  function g(k, z) {
    for (let C = 0, V = k.length; C < V; C++)
      if (X(k[C], z)) return k[C];
  }
  function R(k, z) {
    return k.filter((C) => X(C, z));
  }
  function I(k) {
    return k.filter((z) => z.static);
  }
  function U(k, z, C, V, oe, ge, Ee, je, Ne) {
    if (z.static && z.isDraggable !== !0 || z.y === V && z.x === C) return k;
    "Moving element ".concat(z.i, " to [").concat(String(C), ",").concat(String(V), "] from [").concat(z.x, ",").concat(z.y, "]");
    const $e = z.x, Qe = z.y;
    typeof C == "number" && (z.x = C), typeof V == "number" && (z.y = V), z.moved = !0;
    let at = Z(k, Ee);
    (Ee === "vertical" && typeof V == "number" ? Qe >= V : Ee === "horizontal" && typeof C == "number" ? $e >= C : !1) && (at = at.reverse());
    const D = R(at, z), H = D.length > 0;
    if (H && Ne)
      return A(k);
    if (H && ge)
      return "Collision prevented on ".concat(z.i, ", reverting."), z.x = $e, z.y = Qe, z.moved = !1, k;
    for (let ee = 0, se = D.length; ee < se; ee++) {
      const Ae = D[ee];
      "Resolving collision between ".concat(z.i, " at [").concat(z.x, ",").concat(z.y, "] and ").concat(Ae.i, " at [").concat(Ae.x, ",").concat(Ae.y, "]"), !Ae.moved && (Ae.static ? k = te(k, Ae, z, oe, Ee) : k = te(k, z, Ae, oe, Ee));
    }
    return k;
  }
  function te(k, z, C, V, oe, ge) {
    const Ee = oe === "horizontal", je = oe === "vertical", Ne = z.static;
    if (V) {
      V = !1;
      const at = {
        x: Ee ? Math.max(z.x - C.w, 0) : C.x,
        y: je ? Math.max(z.y - C.h, 0) : C.y,
        w: C.w,
        h: C.h,
        i: "-1"
      }, v = g(k, at), D = v && v.y + v.h > z.y, H = v && z.x + z.w > v.x;
      if (v) {
        if (D && je)
          return U(k, C, void 0, C.y + 1, V, Ne, oe);
        if (D && oe == null)
          return z.y = C.y, C.y = C.y + C.h, k;
        if (H && Ee)
          return U(k, z, C.x, void 0, V, Ne, oe);
      } else return "Doing reverse collision on ".concat(C.i, " up to [").concat(at.x, ",").concat(at.y, "]."), U(k, C, Ee ? at.x : void 0, je ? at.y : void 0, V, Ne, oe);
    }
    const $e = Ee ? C.x + 1 : void 0, Qe = je ? C.y + 1 : void 0;
    return $e == null && Qe == null ? k : U(k, C, Ee ? C.x + 1 : void 0, je ? C.y + 1 : void 0, V, Ne, oe);
  }
  function le(k) {
    return k * 100 + "%";
  }
  const ie = (k, z, C, V) => k + C > V ? z : C, re = (k, z, C) => k < 0 ? z : C, me = (k) => Math.max(0, k), Se = (k) => Math.max(0, k), pe = (k, z, C) => {
    let {
      left: V,
      height: oe,
      width: ge
    } = z;
    const Ee = k.top - (oe - k.height);
    return {
      left: V,
      width: ge,
      height: re(Ee, k.height, oe),
      top: Se(Ee)
    };
  }, ue = (k, z, C) => {
    let {
      top: V,
      left: oe,
      height: ge,
      width: Ee
    } = z;
    return {
      top: V,
      height: ge,
      width: ie(k.left, k.width, Ee, C),
      left: me(oe)
    };
  }, Y = (k, z, C) => {
    let {
      top: V,
      height: oe,
      width: ge
    } = z;
    const Ee = k.left - (ge - k.width);
    return {
      height: oe,
      width: Ee < 0 ? k.width : ie(k.left, k.width, ge, C),
      top: Se(V),
      left: me(Ee)
    };
  }, W = (k, z, C) => {
    let {
      top: V,
      left: oe,
      height: ge,
      width: Ee
    } = z;
    return {
      width: Ee,
      left: oe,
      height: re(V, k.height, ge),
      top: Se(V)
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
      return W(arguments.length <= 0 ? void 0 : arguments[0], Y(...arguments));
    },
    w: Y,
    nw: function() {
      return pe(arguments.length <= 0 ? void 0 : arguments[0], Y(...arguments));
    }
  };
  function Oe(k, z, C, V) {
    const oe = _e[k];
    return oe ? oe(z, w(w({}, z), C), V) : C;
  }
  function Pe(k) {
    let {
      top: z,
      left: C,
      width: V,
      height: oe
    } = k;
    const ge = "translate(".concat(C, "px,").concat(z, "px)");
    return {
      transform: ge,
      WebkitTransform: ge,
      MozTransform: ge,
      msTransform: ge,
      OTransform: ge,
      width: "".concat(V, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function Te(k) {
    let {
      top: z,
      left: C,
      width: V,
      height: oe
    } = k;
    return {
      top: "".concat(z, "px"),
      left: "".concat(C, "px"),
      width: "".concat(V, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function Z(k, z) {
    return z === "horizontal" ? Re(k) : z === "vertical" ? ae(k) : k;
  }
  function ae(k) {
    return k.slice(0).sort(function(z, C) {
      return z.y > C.y || z.y === C.y && z.x > C.x ? 1 : z.y === C.y && z.x === C.x ? 0 : -1;
    });
  }
  function Re(k) {
    return k.slice(0).sort(function(z, C) {
      return z.x > C.x || z.x === C.x && z.y > C.y ? 1 : -1;
    });
  }
  function De(k, z, C, V, oe) {
    k = k || [];
    const ge = [];
    c.default.Children.forEach(z, (je) => {
      if (je?.key == null) return;
      const Ne = p(k, String(je.key)), $e = je.props["data-grid"];
      Ne && $e == null ? ge.push($(Ne)) : $e ? ge.push($(w(w({}, $e), {}, {
        i: je.key
      }))) : ge.push($({
        w: 1,
        h: 1,
        x: 0,
        y: P(ge),
        i: String(je.key)
      }));
    });
    const Ee = f(ge, {
      cols: C
    });
    return oe ? Ee : M(Ee, V, C);
  }
  function Le(k) {
    let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const C = ["x", "y", "w", "h"];
    if (!Array.isArray(k)) throw new Error(z + " must be an array!");
    for (let V = 0, oe = k.length; V < oe; V++) {
      const ge = k[V];
      for (let Ee = 0; Ee < C.length; Ee++) {
        const je = C[Ee], Ne = ge[je];
        if (typeof Ne != "number" || Number.isNaN(Ne))
          throw new Error("ReactGridLayout: ".concat(z, "[").concat(V, "].").concat(je, " must be a number! Received: ").concat(Ne, " (").concat(typeof Ne, ")"));
      }
      if (typeof ge.i < "u" && typeof ge.i != "string")
        throw new Error("ReactGridLayout: ".concat(z, "[").concat(V, "].i must be a string! Received: ").concat(ge.i, " (").concat(typeof ge.i, ")"));
    }
  }
  function Fe(k) {
    const {
      verticalCompact: z,
      compactType: C
    } = k || {};
    return z === !1 ? null : C;
  }
  function Ve() {
  }
  const nt = () => {
  };
  return We.noop = nt, We;
}
var an = {}, jc;
function Ms() {
  if (jc) return an;
  jc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = s, an.calcGridItemPosition = l, an.calcGridItemWHPx = c, an.calcWH = w, an.calcXY = d, an.clamp = E;
  function s(j) {
    const {
      margin: F,
      containerPadding: P,
      containerWidth: A,
      cols: G
    } = j;
    return (A - F[0] * (G - 1) - P[0] * 2) / G;
  }
  function c(j, F, P) {
    return Number.isFinite(j) ? Math.round(F * j + Math.max(0, j - 1) * P) : j;
  }
  function l(j, F, P, A, G, B) {
    const {
      margin: $,
      containerPadding: we,
      rowHeight: xe
    } = j, X = s(j), M = {};
    return B && B.resizing ? (M.width = Math.round(B.resizing.width), M.height = Math.round(B.resizing.height)) : (M.width = c(A, X, $[0]), M.height = c(G, xe, $[1])), B && B.dragging ? (M.top = Math.round(B.dragging.top), M.left = Math.round(B.dragging.left)) : B && B.resizing && typeof B.resizing.top == "number" && typeof B.resizing.left == "number" ? (M.top = Math.round(B.resizing.top), M.left = Math.round(B.resizing.left)) : (M.top = Math.round((xe + $[1]) * P + we[1]), M.left = Math.round((X + $[0]) * F + we[0])), M;
  }
  function d(j, F, P, A, G) {
    const {
      margin: B,
      containerPadding: $,
      cols: we,
      rowHeight: xe,
      maxRows: X
    } = j, M = s(j);
    let x = Math.round((P - $[0]) / (M + B[0])), u = Math.round((F - $[1]) / (xe + B[1]));
    return x = E(x, 0, we - A), u = E(u, 0, X - G), {
      x,
      y: u
    };
  }
  function w(j, F, P, A, G, B) {
    const {
      margin: $,
      maxRows: we,
      cols: xe,
      rowHeight: X
    } = j, M = s(j);
    let x = Math.round((F + $[0]) / (M + $[0])), u = Math.round((P + $[1]) / (X + $[1])), h = E(x, 0, xe - A), f = E(u, 0, we - G);
    return ["sw", "w", "nw"].indexOf(B) !== -1 && (h = E(x, 0, xe)), ["nw", "n", "ne"].indexOf(B) !== -1 && (f = E(u, 0, we)), {
      w: h,
      h: f
    };
  }
  function E(j, F, P) {
    return Math.max(Math.min(j, P), F);
  }
  return an;
}
var li = {}, zs = { exports: {} }, Rs, Pc;
function wp() {
  if (Pc) return Rs;
  Pc = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rs = s, Rs;
}
var Cs, Dc;
function Sp() {
  if (Dc) return Cs;
  Dc = 1;
  var s = /* @__PURE__ */ wp();
  function c() {
  }
  function l() {
  }
  return l.resetWarningCache = c, Cs = function() {
    function d(j, F, P, A, G, B) {
      if (B !== s) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    d.isRequired = d;
    function w() {
      return d;
    }
    var E = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: w,
      element: d,
      elementType: d,
      instanceOf: w,
      node: d,
      objectOf: w,
      oneOf: w,
      oneOfType: w,
      shape: w,
      exact: w,
      checkPropTypes: l,
      resetWarningCache: c
    };
    return E.PropTypes = E, E;
  }, Cs;
}
var Tc;
function jn() {
  return Tc || (Tc = 1, zs.exports = /* @__PURE__ */ Sp()()), zs.exports;
}
var si = { exports: {} }, Os, Nc;
function _p() {
  if (Nc) return Os;
  Nc = 1;
  var s = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyNames, w = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty, j = (v, D) => {
    for (var H in D)
      c(v, H, { get: D[H], enumerable: !0 });
  }, F = (v, D, H, ee) => {
    if (D && typeof D == "object" || typeof D == "function")
      for (let se of d(D))
        !E.call(v, se) && se !== H && c(v, se, { get: () => D[se], enumerable: !(ee = l(D, se)) || ee.enumerable });
    return v;
  }, P = (v, D, H) => (H = v != null ? s(w(v)) : {}, F(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !v || !v.__esModule ? c(H, "default", { value: v, enumerable: !0 }) : H,
    v
  )), A = (v) => F(c({}, "__esModule", { value: !0 }), v), G = {};
  j(G, {
    DraggableCore: () => Qe,
    default: () => at
  }), Os = A(G);
  var B = P(Rt()), $ = P(/* @__PURE__ */ jn()), we = P(mi()), xe = No();
  function X(v, D) {
    for (let H = 0, ee = v.length; H < ee; H++)
      if (D.apply(D, [v[H], H, v])) return v[H];
  }
  function M(v) {
    return typeof v == "function" || Object.prototype.toString.call(v) === "[object Function]";
  }
  function x(v) {
    return typeof v == "number" && !isNaN(v);
  }
  function u(v) {
    return parseInt(v, 10);
  }
  function h(v, D, H) {
    if (v[D])
      return new Error(`Invalid prop ${D} passed to ${H} - do not set this, set it on the child.`);
  }
  var f = ["Moz", "Webkit", "O", "ms"];
  function p(v = "transform") {
    var D, H;
    if (typeof window > "u") return "";
    const ee = (H = (D = window.document) == null ? void 0 : D.documentElement) == null ? void 0 : H.style;
    if (!ee || v in ee) return "";
    for (let se = 0; se < f.length; se++)
      if (g(v, f[se]) in ee) return f[se];
    return "";
  }
  function g(v, D) {
    return D ? `${D}${R(v)}` : v;
  }
  function R(v) {
    let D = "", H = !0;
    for (let ee = 0; ee < v.length; ee++)
      H ? (D += v[ee].toUpperCase(), H = !1) : v[ee] === "-" ? H = !0 : D += v[ee];
    return D;
  }
  var I = p(), U = "";
  function te(v, D) {
    var H;
    U || (U = (H = X([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(se) {
      return M(v[se]);
    })) != null ? H : "");
    const ee = v[U];
    return M(ee) ? !!ee.call(v, D) : !1;
  }
  function le(v, D, H) {
    let ee = v;
    do {
      if (te(ee, D)) return !0;
      if (ee === H) return !1;
      ee = ee.parentNode;
    } while (ee);
    return !1;
  }
  function ie(v, D, H, ee) {
    if (!v) return;
    const se = { capture: !0, ...ee }, Ae = H;
    v.addEventListener ? v.addEventListener(D, Ae, se) : v.attachEvent ? v.attachEvent("on" + D, Ae) : v["on" + D] = Ae;
  }
  function re(v, D, H, ee) {
    if (!v) return;
    const se = { capture: !0, ...ee }, Ae = H;
    v.removeEventListener ? v.removeEventListener(D, Ae, se) : v.detachEvent ? v.detachEvent("on" + D, Ae) : v["on" + D] = null;
  }
  function me(v) {
    let D = v.clientHeight;
    const H = v.ownerDocument.defaultView.getComputedStyle(v);
    return D += u(H.borderTopWidth), D += u(H.borderBottomWidth), D;
  }
  function Se(v) {
    let D = v.clientWidth;
    const H = v.ownerDocument.defaultView.getComputedStyle(v);
    return D += u(H.borderLeftWidth), D += u(H.borderRightWidth), D;
  }
  function pe(v) {
    let D = v.clientHeight;
    const H = v.ownerDocument.defaultView.getComputedStyle(v);
    return D -= u(H.paddingTop), D -= u(H.paddingBottom), D;
  }
  function ue(v) {
    let D = v.clientWidth;
    const H = v.ownerDocument.defaultView.getComputedStyle(v);
    return D -= u(H.paddingLeft), D -= u(H.paddingRight), D;
  }
  function Y(v, D, H) {
    const se = D === D.ownerDocument.body ? { left: 0, top: 0 } : D.getBoundingClientRect(), Ae = (v.clientX + D.scrollLeft - se.left) / H, Ie = (v.clientY + D.scrollTop - se.top) / H;
    return { x: Ae, y: Ie };
  }
  function W(v, D) {
    const H = S(v, D, "px");
    return { [g("transform", I)]: H };
  }
  function q(v, D) {
    return S(v, D, "");
  }
  function S({ x: v, y: D }, H, ee) {
    let se = `translate(${v}${ee},${D}${ee})`;
    if (H) {
      const Ae = `${typeof H.x == "string" ? H.x : H.x + ee}`, Ie = `${typeof H.y == "string" ? H.y : H.y + ee}`;
      se = `translate(${Ae}, ${Ie})` + se;
    }
    return se;
  }
  function N(v, D) {
    return v.targetTouches && X(v.targetTouches, (H) => D === H.identifier) || v.changedTouches && X(v.changedTouches, (H) => D === H.identifier);
  }
  function ye(v) {
    if (v.targetTouches && v.targetTouches[0]) return v.targetTouches[0].identifier;
    if (v.changedTouches && v.changedTouches[0]) return v.changedTouches[0].identifier;
  }
  function _e() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Oe(v, D) {
    if (!v) return;
    let H = v.getElementById("react-draggable-style-el");
    if (!H) {
      H = v.createElement("style"), H.type = "text/css", H.id = "react-draggable-style-el";
      const ee = D ?? _e();
      ee && H.setAttribute("nonce", ee), H.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, H.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, v.getElementsByTagName("head")[0].appendChild(H);
    }
    v.body && Z(v.body, "react-draggable-transparent-selection");
  }
  function Pe(v) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Te(v);
    }) : Te(v);
  }
  function Te(v) {
    if (v)
      try {
        v.body && ae(v.body, "react-draggable-transparent-selection");
        const D = v.selection;
        if (D)
          D.empty();
        else {
          const H = (v.defaultView || window).getSelection();
          H && H.type !== "Caret" && H.removeAllRanges();
        }
      } catch {
      }
  }
  function Z(v, D) {
    v.classList ? v.classList.add(D) : v.className.match(new RegExp(`(?:^|\\s)${D}(?!\\S)`)) || (v.className += ` ${D}`);
  }
  function ae(v, D) {
    v.classList ? v.classList.remove(D) : v.className = v.className.replace(new RegExp(`(?:^|\\s)${D}(?!\\S)`, "g"), "");
  }
  function Re(v, D, H) {
    if (!v.props.bounds) return [D, H];
    let { bounds: ee } = v.props;
    ee = typeof ee == "string" ? ee : z(ee);
    const se = C(v);
    if (typeof ee == "string") {
      const { ownerDocument: Ae } = se, Ie = Ae.defaultView;
      if (!Ie)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Ke;
      if (ee === "parent" ? Ke = se.parentNode : Ke = se.getRootNode().querySelector(ee), !(Ke instanceof Ie.HTMLElement))
        throw new Error('Bounds selector "' + ee + '" could not find an element.');
      const ft = Ke, It = Ie.getComputedStyle(se), Vt = Ie.getComputedStyle(ft);
      ee = {
        left: -se.offsetLeft + u(Vt.paddingLeft) + u(It.marginLeft),
        top: -se.offsetTop + u(Vt.paddingTop) + u(It.marginTop),
        right: ue(ft) - Se(se) - se.offsetLeft + u(Vt.paddingRight) - u(It.marginRight),
        bottom: pe(ft) - me(se) - se.offsetTop + u(Vt.paddingBottom) - u(It.marginBottom)
      };
    }
    return x(ee.right) && (D = Math.min(D, ee.right)), x(ee.bottom) && (H = Math.min(H, ee.bottom)), x(ee.left) && (D = Math.max(D, ee.left)), x(ee.top) && (H = Math.max(H, ee.top)), [D, H];
  }
  function De(v, D, H) {
    const ee = Math.round(D / v[0]) * v[0], se = Math.round(H / v[1]) * v[1];
    return [ee, se];
  }
  function Le(v) {
    return v.props.axis === "both" || v.props.axis === "x";
  }
  function Fe(v) {
    return v.props.axis === "both" || v.props.axis === "y";
  }
  function Ve(v, D, H) {
    const ee = typeof D == "number" ? N(v, D) : null;
    if (typeof D == "number" && !ee) return null;
    const se = C(H), Ae = H.props.offsetParent || se.offsetParent || se.ownerDocument.body;
    return Y(ee || v, Ae, H.props.scale);
  }
  function nt(v, D, H) {
    const ee = !x(v.lastX), se = C(v);
    return ee ? {
      node: se,
      deltaX: 0,
      deltaY: 0,
      lastX: D,
      lastY: H,
      x: D,
      y: H
    } : {
      node: se,
      deltaX: D - v.lastX,
      deltaY: H - v.lastY,
      lastX: v.lastX,
      lastY: v.lastY,
      x: D,
      y: H
    };
  }
  function k(v, D) {
    const H = v.props.scale;
    return {
      node: D.node,
      x: v.state.x + D.deltaX / H,
      y: v.state.y + D.deltaY / H,
      deltaX: D.deltaX / H,
      deltaY: D.deltaY / H,
      lastX: v.state.x,
      lastY: v.state.y
    };
  }
  function z(v) {
    return {
      left: v.left,
      top: v.top,
      right: v.right,
      bottom: v.bottom
    };
  }
  function C(v) {
    const D = v.findDOMNode();
    if (!D)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return D;
  }
  var V = P(Rt()), oe = P(/* @__PURE__ */ jn()), ge = P(mi()), Ee = function() {
  }, je = Ee, Ne = {
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
  }, $e = Ne.mouse, Qe = class extends V.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (v) => {
        if (this.props.onMouseDown(v), !this.props.allowAnyClick && (typeof v.button == "number" && v.button !== 0 || v.ctrlKey)) return !1;
        const D = this.findDOMNode();
        if (!D || !D.ownerDocument || !D.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: H } = D;
        if (this.props.disabled || !(v.target instanceof H.defaultView.Node) || this.props.handle && !le(v.target, this.props.handle, D) || this.props.cancel && le(v.target, this.props.cancel, D))
          return;
        v.type === "touchstart" && !this.props.allowMobileScroll && v.preventDefault();
        const ee = ye(v);
        this.touchIdentifier = ee;
        const se = Ve(v, ee, this);
        if (se == null) return;
        const { x: Ae, y: Ie } = se, Ke = nt(this, Ae, Ie);
        je("calling", this.props.onStart), !(this.props.onStart(v, Ke) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Oe(H, this.props.nonce), this.dragging = !0, this.lastX = Ae, this.lastY = Ie, ie(H, $e.move, this.handleDrag), ie(H, $e.stop, this.handleDragStop));
      }, this.handleDrag = (v) => {
        const D = Ve(v, this.touchIdentifier, this);
        if (D == null) return;
        let { x: H, y: ee } = D;
        if (Array.isArray(this.props.grid)) {
          let Ie = H - this.lastX, Ke = ee - this.lastY;
          if ([Ie, Ke] = De(this.props.grid, Ie, Ke), !Ie && !Ke) return;
          H = this.lastX + Ie, ee = this.lastY + Ke;
        }
        const se = nt(this, H, ee);
        if (this.props.onDrag(v, se) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const Ie = document.createEvent("MouseEvents");
            Ie.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(Ie);
          }
          return;
        }
        this.lastX = H, this.lastY = ee;
      }, this.handleDragStop = (v) => {
        if (!this.dragging) return;
        const D = Ve(v, this.touchIdentifier, this);
        if (D == null) return;
        let { x: H, y: ee } = D;
        if (Array.isArray(this.props.grid)) {
          let Ke = H - this.lastX || 0, ft = ee - this.lastY || 0;
          [Ke, ft] = De(this.props.grid, Ke, ft), H = this.lastX + Ke, ee = this.lastY + ft;
        }
        const se = nt(this, H, ee);
        if (this.props.onStop(v, se) === !1 || this.mounted === !1) return !1;
        const Ie = this.findDOMNode();
        Ie && this.props.enableUserSelectHack && Pe(Ie.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Ie && (re(Ie.ownerDocument, $e.move, this.handleDrag), re(Ie.ownerDocument, $e.stop, this.handleDragStop));
      }, this.onMouseDown = (v) => ($e = Ne.mouse, this.handleDragStart(v)), this.onMouseUp = (v) => ($e = Ne.mouse, this.handleDragStop(v)), this.onTouchStart = (v) => ($e = Ne.touch, this.handleDragStart(v)), this.onTouchEnd = (v) => ($e = Ne.touch, this.handleDragStop(v));
    }
    componentDidMount() {
      this.mounted = !0;
      const v = this.findDOMNode();
      v && ie(v, Ne.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const v = this.findDOMNode();
      if (v) {
        const { ownerDocument: D } = v;
        re(D, Ne.mouse.move, this.handleDrag), re(D, Ne.touch.move, this.handleDrag), re(D, Ne.mouse.stop, this.handleDragStop), re(D, Ne.touch.stop, this.handleDragStop), re(v, Ne.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Pe(D);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var v;
      if ((v = this.props) != null && v.nodeRef)
        return this.props.nodeRef.current;
      const D = ge.default;
      return typeof D.findDOMNode == "function" ? D.findDOMNode(this) : null;
    }
    render() {
      return V.cloneElement(V.Children.only(this.props.children), {
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
    offsetParent: function(v, D) {
      if (v[D] && v[D].nodeType !== 1)
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
    constructor(v) {
      super(v), this.onDragStart = (D, H) => {
        if (this.props.onStart(D, k(this, H)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (D, H) => {
        if (!this.state.dragging) return !1;
        const ee = k(this, H), se = {
          x: ee.x,
          y: ee.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: Ie, y: Ke } = se;
          se.x += this.state.slackX, se.y += this.state.slackY;
          const [ft, It] = Re(this, se.x, se.y);
          se.x = ft, se.y = It, se.slackX = this.state.slackX + (Ie - se.x), se.slackY = this.state.slackY + (Ke - se.y), ee.x = se.x, ee.y = se.y, ee.deltaX = se.x - this.state.x, ee.deltaY = se.y - this.state.y;
        }
        if (this.props.onDrag(D, ee) === !1) return !1;
        this.setState(se);
      }, this.onDragStop = (D, H) => {
        if (!this.state.dragging || this.props.onStop(D, k(this, H)) === !1) return !1;
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
        x: v.position ? v.position.x : v.defaultPosition.x,
        y: v.position ? v.position.y : v.defaultPosition.y,
        prevPropsPosition: { ...v.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, v.position && !(v.onDrag || v.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: v }, { prevPropsPosition: D }) {
      return v && (!D || v.x !== D.x || v.y !== D.y) ? {
        x: v.x,
        y: v.y,
        prevPropsPosition: { ...v }
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
      var v;
      if ((v = this.props) != null && v.nodeRef)
        return this.props.nodeRef.current;
      const D = we.default;
      return typeof D.findDOMNode == "function" ? D.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: v,
        bounds: D,
        children: H,
        defaultPosition: ee,
        defaultClassName: se,
        defaultClassNameDragging: Ae,
        defaultClassNameDragged: Ie,
        position: Ke,
        positionOffset: ft,
        scale: It,
        ...Vt
      } = this.props;
      let Pn = {}, Gn = null;
      const Zt = !!!Ke || this.state.dragging, wr = Ke || ee, Sr = {
        // Set left if horizontal drag is enabled
        x: Le(this) && Zt ? this.state.x : wr.x,
        // Set top if vertical drag is enabled
        y: Fe(this) && Zt ? this.state.y : wr.y
      };
      this.state.isElementSVG ? Gn = q(Sr, ft) : Pn = W(Sr, ft);
      const Yn = B.Children.only(H), yi = (0, xe.clsx)(Yn.props.className || "", se, {
        [Ae]: this.state.dragging,
        [Ie]: this.state.dragged
      });
      return /* @__PURE__ */ B.createElement(Qe, { ...Vt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, B.cloneElement(Yn, {
        className: yi,
        style: { ...Yn.props.style, ...Pn },
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
  }, Os;
}
var Mc;
function Ls() {
  if (Mc) return si.exports;
  Mc = 1;
  const s = _p(), c = s.DraggableCore, l = s.default || s;
  return si.exports = l, si.exports.default = l, si.exports.DraggableCore = c, si.exports;
}
var ai = { exports: {} }, ui = {}, Co = {}, Lc;
function kp() {
  if (Lc) return Co;
  Lc = 1, Co.__esModule = !0, Co.cloneElement = F;
  var s = c(Rt());
  function c(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function l(P, A) {
    var G = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(P);
      A && (B = B.filter(function($) {
        return Object.getOwnPropertyDescriptor(P, $).enumerable;
      })), G.push.apply(G, B);
    }
    return G;
  }
  function d(P) {
    for (var A = 1; A < arguments.length; A++) {
      var G = arguments[A] != null ? arguments[A] : {};
      A % 2 ? l(Object(G), !0).forEach(function(B) {
        w(P, B, G[B]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(G)) : l(Object(G)).forEach(function(B) {
        Object.defineProperty(P, B, Object.getOwnPropertyDescriptor(G, B));
      });
    }
    return P;
  }
  function w(P, A, G) {
    return A = E(A), A in P ? Object.defineProperty(P, A, { value: G, enumerable: !0, configurable: !0, writable: !0 }) : P[A] = G, P;
  }
  function E(P) {
    var A = j(P, "string");
    return typeof A == "symbol" ? A : String(A);
  }
  function j(P, A) {
    if (typeof P != "object" || P === null) return P;
    var G = P[Symbol.toPrimitive];
    if (G !== void 0) {
      var B = G.call(P, A);
      if (typeof B != "object") return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (A === "string" ? String : Number)(P);
  }
  function F(P, A) {
    return A.style && P.props.style && (A.style = d(d({}, P.props.style), A.style)), A.className && P.props.className && (A.className = P.props.className + " " + A.className), /* @__PURE__ */ s.default.cloneElement(P, A);
  }
  return Co;
}
var ci = {}, Ac;
function ed() {
  if (Ac) return ci;
  Ac = 1, ci.__esModule = !0, ci.resizableProps = void 0;
  var s = c(/* @__PURE__ */ jn());
  Ls();
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
      for (var w = arguments.length, E = new Array(w), j = 0; j < w; j++)
        E[j] = arguments[j];
      var F = E[0];
      if (F.axis === "both" || F.axis === "y") {
        var P;
        return (P = s.default.number).isRequired.apply(P, E);
      }
      return s.default.number.apply(s.default, E);
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
      for (var w = arguments.length, E = new Array(w), j = 0; j < w; j++)
        E[j] = arguments[j];
      var F = E[0];
      if (F.axis === "both" || F.axis === "x") {
        var P;
        return (P = s.default.number).isRequired.apply(P, E);
      }
      return s.default.number.apply(s.default, E);
    }
  };
  return ci.resizableProps = l, ci;
}
var Ic;
function td() {
  if (Ic) return ui;
  Ic = 1, ui.__esModule = !0, ui.default = void 0;
  var s = j(Rt()), c = Ls(), l = kp(), d = ed(), w = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function E(x) {
    if (typeof WeakMap != "function") return null;
    var u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (E = function(p) {
      return p ? h : u;
    })(x);
  }
  function j(x, u) {
    if (x && x.__esModule)
      return x;
    if (x === null || typeof x != "object" && typeof x != "function")
      return { default: x };
    var h = E(u);
    if (h && h.has(x))
      return h.get(x);
    var f = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var g in x)
      if (g !== "default" && Object.prototype.hasOwnProperty.call(x, g)) {
        var R = p ? Object.getOwnPropertyDescriptor(x, g) : null;
        R && (R.get || R.set) ? Object.defineProperty(f, g, R) : f[g] = x[g];
      }
    return f.default = x, h && h.set(x, f), f;
  }
  function F() {
    return F = Object.assign ? Object.assign.bind() : function(x) {
      for (var u = 1; u < arguments.length; u++) {
        var h = arguments[u];
        for (var f in h)
          Object.prototype.hasOwnProperty.call(h, f) && (x[f] = h[f]);
      }
      return x;
    }, F.apply(this, arguments);
  }
  function P(x, u) {
    if (x == null) return {};
    var h = {}, f = Object.keys(x), p, g;
    for (g = 0; g < f.length; g++)
      p = f[g], !(u.indexOf(p) >= 0) && (h[p] = x[p]);
    return h;
  }
  function A(x, u) {
    var h = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(x);
      u && (f = f.filter(function(p) {
        return Object.getOwnPropertyDescriptor(x, p).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function G(x) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? A(Object(h), !0).forEach(function(f) {
        B(x, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(f) {
        Object.defineProperty(x, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return x;
  }
  function B(x, u, h) {
    return u = $(u), u in x ? Object.defineProperty(x, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : x[u] = h, x;
  }
  function $(x) {
    var u = we(x, "string");
    return typeof u == "symbol" ? u : String(u);
  }
  function we(x, u) {
    if (typeof x != "object" || x === null) return x;
    var h = x[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(x, u);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(x);
  }
  function xe(x, u) {
    x.prototype = Object.create(u.prototype), x.prototype.constructor = x, X(x, u);
  }
  function X(x, u) {
    return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, p) {
      return f.__proto__ = p, f;
    }, X(x, u);
  }
  var M = /* @__PURE__ */ function(x) {
    xe(u, x);
    function u() {
      for (var f, p = arguments.length, g = new Array(p), R = 0; R < p; R++)
        g[R] = arguments[R];
      return f = x.call.apply(x, [this].concat(g)) || this, f.handleRefs = {}, f.lastHandleRect = null, f.slack = null, f;
    }
    var h = u.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(p, g) {
      var R = this.props, I = R.minConstraints, U = R.maxConstraints, te = R.lockAspectRatio;
      if (!I && !U && !te) return [p, g];
      if (te) {
        var le = this.props.width / this.props.height, ie = p - this.props.width, re = g - this.props.height;
        Math.abs(ie) > Math.abs(re * le) ? g = p / le : p = g * le;
      }
      var me = p, Se = g, pe = this.slack || [0, 0], ue = pe[0], Y = pe[1];
      return p += ue, g += Y, I && (p = Math.max(I[0], p), g = Math.max(I[1], g)), U && (p = Math.min(U[0], p), g = Math.min(U[1], g)), this.slack = [ue + (me - p), Y + (Se - g)], [p, g];
    }, h.resizeHandler = function(p, g) {
      var R = this;
      return function(I, U) {
        var te = U.node, le = U.deltaX, ie = U.deltaY;
        p === "onResizeStart" && R.resetData();
        var re = (R.props.axis === "both" || R.props.axis === "x") && g !== "n" && g !== "s", me = (R.props.axis === "both" || R.props.axis === "y") && g !== "e" && g !== "w";
        if (!(!re && !me)) {
          var Se = g[0], pe = g[g.length - 1], ue = te.getBoundingClientRect();
          if (R.lastHandleRect != null) {
            if (pe === "w") {
              var Y = ue.left - R.lastHandleRect.left;
              le += Y;
            }
            if (Se === "n") {
              var W = ue.top - R.lastHandleRect.top;
              ie += W;
            }
          }
          R.lastHandleRect = ue, pe === "w" && (le = -le), Se === "n" && (ie = -ie);
          var q = R.props.width + (re ? le / R.props.transformScale : 0), S = R.props.height + (me ? ie / R.props.transformScale : 0), N = R.runConstraints(q, S);
          q = N[0], S = N[1];
          var ye = q !== R.props.width || S !== R.props.height, _e = typeof R.props[p] == "function" ? R.props[p] : null, Oe = p === "onResize" && !ye;
          _e && !Oe && (I.persist == null || I.persist(), _e(I, {
            node: te,
            size: {
              width: q,
              height: S
            },
            handle: g
          })), p === "onResizeStop" && R.resetData();
        }
      };
    }, h.renderResizeHandle = function(p, g) {
      var R = this.props.handle;
      if (!R)
        return /* @__PURE__ */ s.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + p,
          ref: g
        });
      if (typeof R == "function")
        return R(p, g);
      var I = typeof R.type == "string", U = G({
        ref: g
      }, I ? {} : {
        handleAxis: p
      });
      return /* @__PURE__ */ s.cloneElement(R, U);
    }, h.render = function() {
      var p = this, g = this.props, R = g.children, I = g.className, U = g.draggableOpts;
      g.width, g.height, g.handle, g.handleSize, g.lockAspectRatio, g.axis, g.minConstraints, g.maxConstraints, g.onResize, g.onResizeStop, g.onResizeStart;
      var te = g.resizeHandles;
      g.transformScale;
      var le = P(g, w);
      return (0, l.cloneElement)(R, G(G({}, le), {}, {
        className: (I ? I + " " : "") + "react-resizable",
        children: [].concat(R.props.children, te.map(function(ie) {
          var re, me = (re = p.handleRefs[ie]) != null ? re : p.handleRefs[ie] = /* @__PURE__ */ s.createRef();
          return /* @__PURE__ */ s.createElement(c.DraggableCore, F({}, U, {
            nodeRef: me,
            key: "resizableHandle-" + ie,
            onStop: p.resizeHandler("onResizeStop", ie),
            onStart: p.resizeHandler("onResizeStart", ie),
            onDrag: p.resizeHandler("onResize", ie)
          }), p.renderResizeHandle(ie, me));
        }))
      }));
    }, u;
  }(s.Component);
  return ui.default = M, M.propTypes = d.resizableProps, M.defaultProps = {
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
  var s = F(Rt()), c = E(/* @__PURE__ */ jn()), l = E(td()), d = ed(), w = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function E(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function j(u) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (j = function(g) {
      return g ? f : h;
    })(u);
  }
  function F(u, h) {
    if (u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var f = j(h);
    if (f && f.has(u))
      return f.get(u);
    var p = {}, g = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in u)
      if (R !== "default" && Object.prototype.hasOwnProperty.call(u, R)) {
        var I = g ? Object.getOwnPropertyDescriptor(u, R) : null;
        I && (I.get || I.set) ? Object.defineProperty(p, R, I) : p[R] = u[R];
      }
    return p.default = u, f && f.set(u, p), p;
  }
  function P() {
    return P = Object.assign ? Object.assign.bind() : function(u) {
      for (var h = 1; h < arguments.length; h++) {
        var f = arguments[h];
        for (var p in f)
          Object.prototype.hasOwnProperty.call(f, p) && (u[p] = f[p]);
      }
      return u;
    }, P.apply(this, arguments);
  }
  function A(u, h) {
    var f = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(u);
      h && (p = p.filter(function(g) {
        return Object.getOwnPropertyDescriptor(u, g).enumerable;
      })), f.push.apply(f, p);
    }
    return f;
  }
  function G(u) {
    for (var h = 1; h < arguments.length; h++) {
      var f = arguments[h] != null ? arguments[h] : {};
      h % 2 ? A(Object(f), !0).forEach(function(p) {
        B(u, p, f[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : A(Object(f)).forEach(function(p) {
        Object.defineProperty(u, p, Object.getOwnPropertyDescriptor(f, p));
      });
    }
    return u;
  }
  function B(u, h, f) {
    return h = $(h), h in u ? Object.defineProperty(u, h, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : u[h] = f, u;
  }
  function $(u) {
    var h = we(u, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function we(u, h) {
    if (typeof u != "object" || u === null) return u;
    var f = u[Symbol.toPrimitive];
    if (f !== void 0) {
      var p = f.call(u, h);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(u);
  }
  function xe(u, h) {
    if (u == null) return {};
    var f = {}, p = Object.keys(u), g, R;
    for (R = 0; R < p.length; R++)
      g = p[R], !(h.indexOf(g) >= 0) && (f[g] = u[g]);
    return f;
  }
  function X(u, h) {
    u.prototype = Object.create(h.prototype), u.prototype.constructor = u, M(u, h);
  }
  function M(u, h) {
    return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, g) {
      return p.__proto__ = g, p;
    }, M(u, h);
  }
  var x = /* @__PURE__ */ function(u) {
    X(h, u);
    function h() {
      for (var p, g = arguments.length, R = new Array(g), I = 0; I < g; I++)
        R[I] = arguments[I];
      return p = u.call.apply(u, [this].concat(R)) || this, p.state = {
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
    h.getDerivedStateFromProps = function(g, R) {
      return R.propsWidth !== g.width || R.propsHeight !== g.height ? {
        width: g.width,
        height: g.height,
        propsWidth: g.width,
        propsHeight: g.height
      } : null;
    };
    var f = h.prototype;
    return f.render = function() {
      var g = this.props, R = g.handle, I = g.handleSize;
      g.onResize;
      var U = g.onResizeStart, te = g.onResizeStop, le = g.draggableOpts, ie = g.minConstraints, re = g.maxConstraints, me = g.lockAspectRatio, Se = g.axis;
      g.width, g.height;
      var pe = g.resizeHandles, ue = g.style, Y = g.transformScale, W = xe(g, w);
      return /* @__PURE__ */ s.createElement(l.default, {
        axis: Se,
        draggableOpts: le,
        handle: R,
        handleSize: I,
        height: this.state.height,
        lockAspectRatio: me,
        maxConstraints: re,
        minConstraints: ie,
        onResizeStart: U,
        onResize: this.onResize,
        onResizeStop: te,
        resizeHandles: pe,
        transformScale: Y,
        width: this.state.width
      }, /* @__PURE__ */ s.createElement("div", P({}, W, {
        style: G(G({}, ue), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(s.Component);
  return di.default = x, x.propTypes = G(G({}, d.resizableProps), {}, {
    children: c.default.element
  }), di;
}
var Hc;
function Ep() {
  return Hc || (Hc = 1, ai.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, ai.exports.Resizable = td().default, ai.exports.ResizableBox = bp().default), ai.exports;
}
var un = {}, Bc;
function nd() {
  if (Bc) return un;
  Bc = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var s = l(/* @__PURE__ */ jn()), c = l(Rt());
  function l(E) {
    return E && E.__esModule ? E : { default: E };
  }
  const d = un.resizeHandleAxesType = s.default.arrayOf(s.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), w = un.resizeHandleType = s.default.oneOfType([s.default.node, s.default.func]);
  return un.default = {
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
    verticalCompact: function(E) {
      E.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: s.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(E) {
      var j = E.layout;
      j !== void 0 && xr().validateLayout(j, "layout");
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
    resizeHandles: d,
    resizeHandle: w,
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
    children: function(E, j) {
      const F = E[j], P = {};
      c.default.Children.forEach(F, function(A) {
        if (A?.key != null) {
          if (P[A.key])
            throw new Error('Duplicate child key "' + A.key + '" found! This will cause problems in ReactGridLayout.');
          P[A.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: s.default.any
  }, un;
}
var Fc;
function zp() {
  if (Fc) return li;
  Fc = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var s = A(Rt()), c = mi(), l = A(/* @__PURE__ */ jn()), d = Ls(), w = Ep(), E = xr(), j = Ms(), F = nd(), P = A(No());
  function A(M) {
    return M && M.__esModule ? M : { default: M };
  }
  function G(M, x) {
    var u = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(M);
      x && (h = h.filter(function(f) {
        return Object.getOwnPropertyDescriptor(M, f).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function B(M) {
    for (var x = 1; x < arguments.length; x++) {
      var u = arguments[x] != null ? arguments[x] : {};
      x % 2 ? G(Object(u), !0).forEach(function(h) {
        $(M, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(u)) : G(Object(u)).forEach(function(h) {
        Object.defineProperty(M, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return M;
  }
  function $(M, x, u) {
    return (x = we(x)) in M ? Object.defineProperty(M, x, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : M[x] = u, M;
  }
  function we(M) {
    var x = xe(M, "string");
    return typeof x == "symbol" ? x : x + "";
  }
  function xe(M, x) {
    if (typeof M != "object" || !M) return M;
    var u = M[Symbol.toPrimitive];
    if (u !== void 0) {
      var h = u.call(M, x);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(M);
  }
  let X = class extends s.default.Component {
    constructor() {
      super(...arguments), $(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), $(this, "elementRef", /* @__PURE__ */ s.default.createRef()), $(this, "onDragStart", (x, u) => {
        let {
          node: h
        } = u;
        const {
          onDragStart: f,
          transformScale: p
        } = this.props;
        if (!f) return;
        const g = {
          top: 0,
          left: 0
        }, {
          offsetParent: R
        } = h;
        if (!R) return;
        const I = R.getBoundingClientRect(), U = h.getBoundingClientRect(), te = U.left / p, le = I.left / p, ie = U.top / p, re = I.top / p;
        g.left = te - le + R.scrollLeft, g.top = ie - re + R.scrollTop, this.setState({
          dragging: g
        });
        const {
          x: me,
          y: Se
        } = (0, j.calcXY)(this.getPositionParams(), g.top, g.left, this.props.w, this.props.h);
        return f.call(this, this.props.i, me, Se, {
          e: x,
          node: h,
          newPosition: g
        });
      }), $(this, "onDrag", (x, u, h) => {
        let {
          node: f,
          deltaX: p,
          deltaY: g
        } = u;
        const {
          onDrag: R
        } = this.props;
        if (!R) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let I = this.state.dragging.top + g, U = this.state.dragging.left + p;
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
          } = f;
          if (W) {
            const {
              margin: q,
              rowHeight: S
            } = this.props, N = W.clientHeight - (0, j.calcGridItemWHPx)(re, S, q[1]);
            I = (0, j.clamp)(I, 0, N);
            const ye = (0, j.calcGridColWidth)(Se), _e = me - (0, j.calcGridItemWHPx)(ie, ye, q[0]);
            U = (0, j.clamp)(U, 0, _e);
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
          y: Y
        } = (0, j.calcXY)(Se, I, U, ie, re);
        return R.call(this, le, ue, Y, {
          e: x,
          node: f,
          newPosition: pe
        });
      }), $(this, "onDragStop", (x, u) => {
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
          h: g,
          i: R
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
        } = (0, j.calcXY)(this.getPositionParams(), U, I, p, g);
        return f.call(this, R, le, ie, {
          e: x,
          node: h,
          newPosition: te
        });
      }), $(this, "onResizeStop", (x, u, h) => this.onResizeHandler(x, u, h, "onResizeStop")), $(this, "onResizeStart", (x, u, h) => this.onResizeHandler(x, u, h, "onResizeStart")), $(this, "onResize", (x, u, h) => this.onResizeHandler(x, u, h, "onResize"));
    }
    shouldComponentUpdate(x, u) {
      if (this.props.children !== x.children || this.props.droppingPosition !== x.droppingPosition) return !0;
      const h = (0, j.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), f = (0, j.calcGridItemPosition)(this.getPositionParams(x), x.x, x.y, x.w, x.h, u);
      return !(0, E.fastPositionEqual)(h, f) || this.props.useCSSTransforms !== x.useCSSTransforms;
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
      const f = x.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: p
      } = this.state, g = p && u.left !== f.left || u.top !== f.top;
      if (!p)
        this.onDragStart(u.e, {
          node: h,
          deltaX: u.left,
          deltaY: u.top
        });
      else if (g) {
        const R = u.left - p.left, I = u.top - p.top;
        this.onDrag(
          u.e,
          {
            node: h,
            deltaX: R,
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
        useCSSTransforms: f
      } = this.props;
      let p;
      return f ? p = (0, E.setTransform)(x) : (p = (0, E.setTopLeft)(x), u && (p.left = (0, E.perc)(x.left / h), p.width = (0, E.perc)(x.width / h))), p;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(x, u) {
      return /* @__PURE__ */ s.default.createElement(d.DraggableCore, {
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
      return (h, f) => (
        /*: Function*/
        u(h, f, x)
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
        cols: f,
        minW: p,
        minH: g,
        maxW: R,
        maxH: I,
        transformScale: U,
        resizeHandles: te,
        resizeHandle: le
      } = this.props, ie = this.getPositionParams(), re = (0, j.calcGridItemPosition)(ie, 0, 0, f, 0).width, me = (0, j.calcGridItemPosition)(ie, 0, 0, p, g), Se = (0, j.calcGridItemPosition)(ie, 0, 0, R, I), pe = [me.width, me.height], ue = [Math.min(Se.width, re), Math.min(Se.height, 1 / 0)];
      return /* @__PURE__ */ s.default.createElement(
        w.Resizable,
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
    onResizeHandler(x, u, h, f) {
      let {
        node: p,
        size: g,
        handle: R
      } = u;
      const I = this.props[f];
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
      let ue = g;
      p && (ue = (0, E.resizeItemInDirection)(R, h, g, me), (0, c.flushSync)(() => {
        this.setState({
          resizing: f === "onResizeStop" ? null : ue
        });
      }));
      let {
        w: Y,
        h: W
      } = (0, j.calcWH)(this.getPositionParams(), ue.width, ue.height, U, te, R);
      Y = (0, j.clamp)(Y, Math.max(Se, 1), pe), W = (0, j.clamp)(W, re, ie), I.call(this, le, Y, W, {
        e: x,
        node: p,
        size: ue,
        handle: R
      });
    }
    render() {
      const {
        x,
        y: u,
        w: h,
        h: f,
        isDraggable: p,
        isResizable: g,
        droppingPosition: R,
        useCSSTransforms: I
      } = this.props, U = (0, j.calcGridItemPosition)(this.getPositionParams(), x, u, h, f, this.state), te = s.default.Children.only(this.props.children);
      let le = /* @__PURE__ */ s.default.cloneElement(te, {
        ref: this.elementRef,
        className: (0, P.default)("react-grid-item", te.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": p,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!R,
          cssTransforms: I
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: B(B(B({}, this.props.style), te.props.style), this.createStyle(U))
      });
      return le = this.mixinResizable(le, U, g), le = this.mixinDraggable(le, p), le;
    }
  };
  return li.default = X, $(X, "propTypes", {
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
    minW: function(M, x) {
      const u = M[x];
      if (typeof u != "number") return new Error("minWidth not Number");
      if (u > M.w || u > M.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(M, x) {
      const u = M[x];
      if (typeof u != "number") return new Error("maxWidth not Number");
      if (u < M.w || u < M.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(M, x) {
      const u = M[x];
      if (typeof u != "number") return new Error("minHeight not Number");
      if (u > M.h || u > M.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(M, x) {
      const u = M[x];
      if (typeof u != "number") return new Error("maxHeight not Number");
      if (u < M.h || u < M.minH) return new Error("maxHeight smaller than item height/minHeight");
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
  }), $(X, "defaultProps", {
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
function rd() {
  if (Uc) return oi;
  Uc = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var s = P(Rt()), c = /* @__PURE__ */ Ns(), l = F(No()), d = xr(), w = Ms(), E = F(zp()), j = F(nd());
  function F(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function P(x, u) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (P = function(p, g) {
      if (!g && p && p.__esModule) return p;
      var R, I, U = { __proto__: null, default: p };
      if (p === null || typeof p != "object" && typeof p != "function") return U;
      if (R = g ? f : h) {
        if (R.has(p)) return R.get(p);
        R.set(p, U);
      }
      for (const te in p) te !== "default" && {}.hasOwnProperty.call(p, te) && ((I = (R = Object.defineProperty) && Object.getOwnPropertyDescriptor(p, te)) && (I.get || I.set) ? R(U, te, I) : U[te] = p[te]);
      return U;
    })(x, u);
  }
  function A(x, u) {
    var h = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(x);
      u && (f = f.filter(function(p) {
        return Object.getOwnPropertyDescriptor(x, p).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function G(x) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? A(Object(h), !0).forEach(function(f) {
        B(x, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(f) {
        Object.defineProperty(x, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return x;
  }
  function B(x, u, h) {
    return (u = $(u)) in x ? Object.defineProperty(x, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : x[u] = h, x;
  }
  function $(x) {
    var u = we(x, "string");
    return typeof u == "symbol" ? u : u + "";
  }
  function we(x, u) {
    if (typeof x != "object" || !x) return x;
    var h = x[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(x, u);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(x);
  }
  const xe = "react-grid-layout";
  let X = !1;
  try {
    X = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let M = class extends s.Component {
    constructor() {
      super(...arguments), B(this, "state", {
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
      }), B(this, "dragEnterCounter", 0), B(this, "onDragStart", (u, h, f, p) => {
        let {
          e: g,
          node: R
        } = p;
        const {
          layout: I
        } = this.state, U = (0, d.getLayoutItem)(I, u);
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
          oldDragItem: (0, d.cloneLayoutItem)(U),
          oldLayout: I,
          activeDrag: te
        }), this.props.onDragStart(I, U, U, null, g, R);
      }), B(this, "onDrag", (u, h, f, p) => {
        let {
          e: g,
          node: R
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
        } = this.props, re = (0, d.getLayoutItem)(U, u);
        if (!re) return;
        const me = {
          w: re.w,
          h: re.h,
          x: re.x,
          y: re.y,
          placeholder: !0,
          i: u
        };
        U = (0, d.moveElement)(U, re, h, f, !0, ie, (0, d.compactType)(this.props), te, le), this.props.onDrag(U, I, re, me, g, R), this.setState({
          layout: le ? U : (0, d.compact)(U, (0, d.compactType)(this.props), te),
          activeDrag: me
        });
      }), B(this, "onDragStop", (u, h, f, p) => {
        let {
          e: g,
          node: R
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
        } = this.props, re = (0, d.getLayoutItem)(U, u);
        if (!re) return;
        U = (0, d.moveElement)(U, re, h, f, !0, le, (0, d.compactType)(this.props), te, ie);
        const Se = ie ? U : (0, d.compact)(U, (0, d.compactType)(this.props), te);
        this.props.onDragStop(Se, I, re, null, g, R);
        const {
          oldLayout: pe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Se,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(Se, pe);
      }), B(this, "onResizeStart", (u, h, f, p) => {
        let {
          e: g,
          node: R
        } = p;
        const {
          layout: I
        } = this.state, U = (0, d.getLayoutItem)(I, u);
        U && (this.setState({
          oldResizeItem: (0, d.cloneLayoutItem)(U),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(I, U, U, null, g, R));
      }), B(this, "onResize", (u, h, f, p) => {
        let {
          e: g,
          node: R,
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
        let Se = !1, pe, ue, Y;
        const [W, q] = (0, d.withLayoutItem)(le, u, (N) => {
          let ye;
          return ue = N.x, Y = N.y, ["sw", "w", "nw", "n", "ne"].indexOf(U) !== -1 && (["sw", "nw", "w"].indexOf(U) !== -1 && (ue = N.x + (N.w - h), h = N.x !== ue && ue < 0 ? N.w : h, ue = ue < 0 ? 0 : ue), ["ne", "n", "nw"].indexOf(U) !== -1 && (Y = N.y + (N.h - f), f = N.y !== Y && Y < 0 ? N.h : f, Y = Y < 0 ? 0 : Y), Se = !0), re && !me && (ye = (0, d.getAllCollisions)(le, G(G({}, N), {}, {
            w: h,
            h: f,
            x: ue,
            y: Y
          })).filter((Oe) => Oe.i !== N.i).length > 0, ye && (Y = N.y, f = N.h, ue = N.x, h = N.w, Se = !1)), N.w = h, N.h = f, N;
        });
        if (!q) return;
        pe = W, Se && (pe = (0, d.moveElement)(W, q, ue, Y, !0, this.props.preventCollision, (0, d.compactType)(this.props), ie, me));
        const S = {
          w: q.w,
          h: q.h,
          x: q.x,
          y: q.y,
          static: !0,
          i: u
        };
        this.props.onResize(pe, te, q, S, g, R), this.setState({
          layout: me ? pe : (0, d.compact)(pe, (0, d.compactType)(this.props), ie),
          activeDrag: S
        });
      }), B(this, "onResizeStop", (u, h, f, p) => {
        let {
          e: g,
          node: R
        } = p;
        const {
          layout: I,
          oldResizeItem: U
        } = this.state, {
          cols: te,
          allowOverlap: le
        } = this.props, ie = (0, d.getLayoutItem)(I, u), re = le ? I : (0, d.compact)(I, (0, d.compactType)(this.props), te);
        this.props.onResizeStop(re, U, ie, null, g, R);
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
        if (u.preventDefault(), u.stopPropagation(), X && // $FlowIgnore can't figure this out
        !((h = u.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(xe)))
          return !1;
        const {
          droppingItem: f,
          onDropDragOver: p,
          margin: g,
          cols: R,
          rowHeight: I,
          maxRows: U,
          width: te,
          containerPadding: le,
          transformScale: ie
        } = this.props, re = p?.(u);
        if (re === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const me = G(G({}, f), re), {
          layout: Se
        } = this.state, pe = u.currentTarget.getBoundingClientRect(), ue = u.clientX - pe.left, Y = u.clientY - pe.top, W = {
          left: ue / ie,
          top: Y / ie,
          e: u
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: q,
              top: S
            } = this.state.droppingPosition;
            (q != ue || S != Y) && this.setState({
              droppingPosition: W
            });
          }
        } else {
          const q = {
            cols: R,
            margin: g,
            maxRows: U,
            rowHeight: I,
            containerWidth: te,
            containerPadding: le || g
          }, S = (0, w.calcXY)(q, Y, ue, me.w, me.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ s.createElement("div", {
              key: me.i
            }),
            droppingPosition: W,
            layout: [...Se, G(G({}, me), {}, {
              x: S.x,
              y: S.y,
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
          layout: f
        } = this.state, p = (0, d.compact)(f.filter((g) => g.i !== u.i), (0, d.compactType)(this.props), h, this.props.allowOverlap);
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
          layout: f
        } = this.state, p = f.find((g) => g.i === h.i);
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
        containerPadding: g,
        rowHeight: R,
        maxRows: I,
        useCSSTransforms: U,
        transformScale: te
      } = this.props;
      return /* @__PURE__ */ s.createElement(E.default, {
        w: u.w,
        h: u.h,
        x: u.x,
        y: u.y,
        i: u.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: h,
        cols: f,
        margin: p,
        containerPadding: g || p,
        maxRows: I,
        rowHeight: R,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: U,
        transformScale: te
      }, /* @__PURE__ */ s.createElement("div", null));
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
        cols: g,
        margin: R,
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
        resizeHandles: Y,
        resizeHandle: W
      } = this.props, {
        mounted: q,
        droppingPosition: S
      } = this.state, N = typeof f.isDraggable == "boolean" ? f.isDraggable : !f.static && le, ye = typeof f.isResizable == "boolean" ? f.isResizable : !f.static && ie, _e = f.resizeHandles || Y, Oe = N && re && f.isBounded !== !1;
      return /* @__PURE__ */ s.createElement(E.default, {
        containerWidth: p,
        cols: g,
        margin: R,
        containerPadding: I || R,
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
        isDraggable: N,
        isResizable: ye,
        isBounded: Oe,
        useCSSTransforms: me && q,
        usePercentages: !q,
        transformScale: Se,
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
        droppingPosition: h ? S : void 0,
        resizeHandles: _e,
        resizeHandle: W
      }, u);
    }
    render() {
      const {
        className: u,
        style: h,
        isDroppable: f,
        innerRef: p
      } = this.props, g = (0, l.default)(xe, u), R = G({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ s.createElement("div", {
        ref: p,
        className: g,
        style: R,
        onDrop: f ? this.onDrop : d.noop,
        onDragLeave: f ? this.onDragLeave : d.noop,
        onDragEnter: f ? this.onDragEnter : d.noop,
        onDragOver: f ? this.onDragOver : d.noop
      }, s.Children.map(this.props.children, (I) => this.processGridItem(I)), f && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return oi.default = M, B(M, "displayName", "ReactGridLayout"), B(M, "propTypes", j.default), B(M, "defaultProps", {
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
  }), oi;
}
var fi = {}, Vn = {}, qc;
function id() {
  if (qc) return Vn;
  qc = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.findOrGenerateResponsiveLayout = d, Vn.getBreakpointFromWidth = c, Vn.getColsFromBreakpoint = l, Vn.sortBreakpoints = w;
  var s = xr();
  function c(E, j) {
    const F = w(E);
    let P = F[0];
    for (let A = 1, G = F.length; A < G; A++) {
      const B = F[A];
      j > E[B] && (P = B);
    }
    return P;
  }
  function l(E, j) {
    if (!j[E])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + E + " is missing!");
    return j[E];
  }
  function d(E, j, F, P, A, G) {
    if (E[F]) return (0, s.cloneLayout)(E[F]);
    let B = E[P];
    const $ = w(j), we = $.slice($.indexOf(F));
    for (let xe = 0, X = we.length; xe < X; xe++) {
      const M = we[xe];
      if (E[M]) {
        B = E[M];
        break;
      }
    }
    return B = (0, s.cloneLayout)(B || []), (0, s.compact)((0, s.correctBounds)(B, {
      cols: A
    }), G, A);
  }
  function w(E) {
    return Object.keys(E).sort(function(F, P) {
      return E[F] - E[P];
    });
  }
  return Vn;
}
var $c;
function Rp() {
  if ($c) return fi;
  $c = 1, Object.defineProperty(fi, "__esModule", {
    value: !0
  }), fi.default = void 0;
  var s = P(Rt()), c = F(/* @__PURE__ */ jn()), l = /* @__PURE__ */ Ns(), d = xr(), w = id(), E = F(rd());
  const j = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function F(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function P(f, p) {
    if (typeof WeakMap == "function") var g = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (P = function(I, U) {
      if (!U && I && I.__esModule) return I;
      var te, le, ie = { __proto__: null, default: I };
      if (I === null || typeof I != "object" && typeof I != "function") return ie;
      if (te = U ? R : g) {
        if (te.has(I)) return te.get(I);
        te.set(I, ie);
      }
      for (const re in I) re !== "default" && {}.hasOwnProperty.call(I, re) && ((le = (te = Object.defineProperty) && Object.getOwnPropertyDescriptor(I, re)) && (le.get || le.set) ? te(ie, re, le) : ie[re] = I[re]);
      return ie;
    })(f, p);
  }
  function A() {
    return A = Object.assign ? Object.assign.bind() : function(f) {
      for (var p = 1; p < arguments.length; p++) {
        var g = arguments[p];
        for (var R in g) ({}).hasOwnProperty.call(g, R) && (f[R] = g[R]);
      }
      return f;
    }, A.apply(null, arguments);
  }
  function G(f, p) {
    if (f == null) return {};
    var g, R, I = B(f, p);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(f);
      for (R = 0; R < U.length; R++) g = U[R], p.indexOf(g) === -1 && {}.propertyIsEnumerable.call(f, g) && (I[g] = f[g]);
    }
    return I;
  }
  function B(f, p) {
    if (f == null) return {};
    var g = {};
    for (var R in f) if ({}.hasOwnProperty.call(f, R)) {
      if (p.indexOf(R) !== -1) continue;
      g[R] = f[R];
    }
    return g;
  }
  function $(f, p) {
    var g = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(f);
      p && (R = R.filter(function(I) {
        return Object.getOwnPropertyDescriptor(f, I).enumerable;
      })), g.push.apply(g, R);
    }
    return g;
  }
  function we(f) {
    for (var p = 1; p < arguments.length; p++) {
      var g = arguments[p] != null ? arguments[p] : {};
      p % 2 ? $(Object(g), !0).forEach(function(R) {
        xe(f, R, g[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(g)) : $(Object(g)).forEach(function(R) {
        Object.defineProperty(f, R, Object.getOwnPropertyDescriptor(g, R));
      });
    }
    return f;
  }
  function xe(f, p, g) {
    return (p = X(p)) in f ? Object.defineProperty(f, p, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : f[p] = g, f;
  }
  function X(f) {
    var p = M(f, "string");
    return typeof p == "symbol" ? p : p + "";
  }
  function M(f, p) {
    if (typeof f != "object" || !f) return f;
    var g = f[Symbol.toPrimitive];
    if (g !== void 0) {
      var R = g.call(f, p);
      if (typeof R != "object") return R;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(f);
  }
  const x = (f) => Object.prototype.toString.call(f);
  function u(f, p) {
    return f == null ? null : Array.isArray(f) ? f : f[p];
  }
  let h = class extends s.Component {
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
        breakpoints: g,
        layouts: R,
        cols: I
      } = this.props, U = (0, w.getBreakpointFromWidth)(g, p), te = (0, w.getColsFromBreakpoint)(U, I), le = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, w.findOrGenerateResponsiveLayout)(R, g, U, U, te, le),
        breakpoint: U,
        cols: te
      };
    }
    static getDerivedStateFromProps(p, g) {
      if (!(0, l.deepEqual)(p.layouts, g.layouts)) {
        const {
          breakpoint: R,
          cols: I
        } = g;
        return {
          layout: (0, w.findOrGenerateResponsiveLayout)(p.layouts, p.breakpoints, R, R, I, p.compactType),
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
        breakpoints: g,
        cols: R,
        layouts: I,
        compactType: U
      } = this.props, te = this.props.breakpoint || (0, w.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), le = this.state.breakpoint, ie = (0, w.getColsFromBreakpoint)(te, R), re = we({}, I);
      if (le !== te || p.breakpoints !== g || p.cols !== R) {
        le in re || (re[le] = (0, d.cloneLayout)(this.state.layout));
        let pe = (0, w.findOrGenerateResponsiveLayout)(re, g, te, le, ie, U);
        pe = (0, d.synchronizeLayoutWithChildren)(pe, this.props.children, ie, U, this.props.allowOverlap), re[te] = pe, this.props.onBreakpointChange(te, ie), this.props.onLayoutChange(pe, re), this.setState({
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
        breakpoint: g,
        breakpoints: R,
        cols: I,
        layouts: U,
        margin: te,
        containerPadding: le,
        onBreakpointChange: ie,
        onLayoutChange: re,
        onWidthChange: me
      } = p, Se = G(p, j);
      return /* @__PURE__ */ s.createElement(E.default, A({}, Se, {
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
    layouts(f, p) {
      if (x(f[p]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + x(f[p]));
      Object.keys(f[p]).forEach((g) => {
        if (!(g in f.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, d.validateLayout)(f.layouts[g], "layouts." + g);
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
    onBreakpointChange: d.noop,
    onLayoutChange: d.noop,
    onWidthChange: d.noop
  }), fi;
}
var Oo = {}, od = function() {
  if (typeof Map < "u")
    return Map;
  function s(c, l) {
    var d = -1;
    return c.some(function(w, E) {
      return w[0] === l ? (d = E, !0) : !1;
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
        var d = s(this.__entries__, l), w = this.__entries__[d];
        return w && w[1];
      }, c.prototype.set = function(l, d) {
        var w = s(this.__entries__, l);
        ~w ? this.__entries__[w][1] = d : this.__entries__.push([l, d]);
      }, c.prototype.delete = function(l) {
        var d = this.__entries__, w = s(d, l);
        ~w && d.splice(w, 1);
      }, c.prototype.has = function(l) {
        return !!~s(this.__entries__, l);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(l, d) {
        d === void 0 && (d = null);
        for (var w = 0, E = this.__entries__; w < E.length; w++) {
          var j = E[w];
          l.call(d, j[1], j[0]);
        }
      }, c;
    }()
  );
}(), Ps = typeof window < "u" && typeof document < "u" && window.document === document, Do = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Cp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Do) : function(s) {
    return setTimeout(function() {
      return s(Date.now());
    }, 1e3 / 60);
  };
}(), Op = 2;
function jp(s, c) {
  var l = !1, d = !1, w = 0;
  function E() {
    l && (l = !1, s()), d && F();
  }
  function j() {
    Cp(E);
  }
  function F() {
    var P = Date.now();
    if (l) {
      if (P - w < Op)
        return;
      d = !0;
    } else
      l = !0, d = !1, setTimeout(j, c);
    w = P;
  }
  return F;
}
var Pp = 20, Dp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Tp = typeof MutationObserver < "u", Np = (
  /** @class */
  function() {
    function s() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = jp(this.refresh.bind(this), Pp);
    }
    return s.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, s.prototype.removeObserver = function(c) {
      var l = this.observers_, d = l.indexOf(c);
      ~d && l.splice(d, 1), !l.length && this.connected_ && this.disconnect_();
    }, s.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, s.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(l) {
        return l.gatherActive(), l.hasActive();
      });
      return c.forEach(function(l) {
        return l.broadcastActive();
      }), c.length > 0;
    }, s.prototype.connect_ = function() {
      !Ps || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Tp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, s.prototype.disconnect_ = function() {
      !Ps || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, s.prototype.onTransitionEnd_ = function(c) {
      var l = c.propertyName, d = l === void 0 ? "" : l, w = Dp.some(function(E) {
        return !!~d.indexOf(E);
      });
      w && this.refresh();
    }, s.getInstance = function() {
      return this.instance_ || (this.instance_ = new s()), this.instance_;
    }, s.instance_ = null, s;
  }()
), ld = function(s, c) {
  for (var l = 0, d = Object.keys(c); l < d.length; l++) {
    var w = d[l];
    Object.defineProperty(s, w, {
      value: c[w],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return s;
}, vr = function(s) {
  var c = s && s.ownerDocument && s.ownerDocument.defaultView;
  return c || Do;
}, sd = Mo(0, 0, 0, 0);
function To(s) {
  return parseFloat(s) || 0;
}
function Vc(s) {
  for (var c = [], l = 1; l < arguments.length; l++)
    c[l - 1] = arguments[l];
  return c.reduce(function(d, w) {
    var E = s["border-" + w + "-width"];
    return d + To(E);
  }, 0);
}
function Mp(s) {
  for (var c = ["top", "right", "bottom", "left"], l = {}, d = 0, w = c; d < w.length; d++) {
    var E = w[d], j = s["padding-" + E];
    l[E] = To(j);
  }
  return l;
}
function Lp(s) {
  var c = s.getBBox();
  return Mo(0, 0, c.width, c.height);
}
function Ap(s) {
  var c = s.clientWidth, l = s.clientHeight;
  if (!c && !l)
    return sd;
  var d = vr(s).getComputedStyle(s), w = Mp(d), E = w.left + w.right, j = w.top + w.bottom, F = To(d.width), P = To(d.height);
  if (d.boxSizing === "border-box" && (Math.round(F + E) !== c && (F -= Vc(d, "left", "right") + E), Math.round(P + j) !== l && (P -= Vc(d, "top", "bottom") + j)), !Wp(s)) {
    var A = Math.round(F + E) - c, G = Math.round(P + j) - l;
    Math.abs(A) !== 1 && (F -= A), Math.abs(G) !== 1 && (P -= G);
  }
  return Mo(w.left, w.top, F, P);
}
var Ip = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(s) {
    return s instanceof vr(s).SVGGraphicsElement;
  } : function(s) {
    return s instanceof vr(s).SVGElement && typeof s.getBBox == "function";
  };
}();
function Wp(s) {
  return s === vr(s).document.documentElement;
}
function Hp(s) {
  return Ps ? Ip(s) ? Lp(s) : Ap(s) : sd;
}
function Bp(s) {
  var c = s.x, l = s.y, d = s.width, w = s.height, E = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, j = Object.create(E.prototype);
  return ld(j, {
    x: c,
    y: l,
    width: d,
    height: w,
    top: l,
    right: c + d,
    bottom: w + l,
    left: c
  }), j;
}
function Mo(s, c, l, d) {
  return { x: s, y: c, width: l, height: d };
}
var Fp = (
  /** @class */
  function() {
    function s(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mo(0, 0, 0, 0), this.target = c;
    }
    return s.prototype.isActive = function() {
      var c = Hp(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, s.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, s;
  }()
), Up = (
  /** @class */
  /* @__PURE__ */ function() {
    function s(c, l) {
      var d = Bp(l);
      ld(this, { target: c, contentRect: d });
    }
    return s;
  }()
), qp = (
  /** @class */
  function() {
    function s(c, l, d) {
      if (this.activeObservations_ = [], this.observations_ = new od(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = l, this.callbackCtx_ = d;
    }
    return s.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof vr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) || (l.set(c, new Fp(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, s.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof vr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) && (l.delete(c), l.size || this.controller_.removeObserver(this));
      }
    }, s.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, s.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(l) {
        l.isActive() && c.activeObservations_.push(l);
      });
    }, s.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, l = this.activeObservations_.map(function(d) {
          return new Up(d.target, d.broadcastRect());
        });
        this.callback_.call(c, l, c), this.clearActive();
      }
    }, s.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, s.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, s;
  }()
), ad = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new od(), ud = (
  /** @class */
  /* @__PURE__ */ function() {
    function s(c) {
      if (!(this instanceof s))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var l = Np.getInstance(), d = new qp(c, l, this);
      ad.set(this, d);
    }
    return s;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(s) {
  ud.prototype[s] = function() {
    var c;
    return (c = ad.get(this))[s].apply(c, arguments);
  };
});
var $p = function() {
  return typeof Do.ResizeObserver < "u" ? Do.ResizeObserver : ud;
}();
const Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $p
}, Symbol.toStringTag, { value: "Module" })), Gp = /* @__PURE__ */ ap(Vp);
var Gc;
function Yp() {
  if (Gc) return Oo;
  Gc = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = xe;
  var s = j(Rt()), c = E(/* @__PURE__ */ jn()), l = E(Gp), d = E(No());
  const w = ["measureBeforeMount"];
  function E(X) {
    return X && X.__esModule ? X : { default: X };
  }
  function j(X, M) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (j = function(h, f) {
      if (!f && h && h.__esModule) return h;
      var p, g, R = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return R;
      if (p = f ? u : x) {
        if (p.has(h)) return p.get(h);
        p.set(h, R);
      }
      for (const I in h) I !== "default" && {}.hasOwnProperty.call(h, I) && ((g = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, I)) && (g.get || g.set) ? p(R, I, g) : R[I] = h[I]);
      return R;
    })(X, M);
  }
  function F() {
    return F = Object.assign ? Object.assign.bind() : function(X) {
      for (var M = 1; M < arguments.length; M++) {
        var x = arguments[M];
        for (var u in x) ({}).hasOwnProperty.call(x, u) && (X[u] = x[u]);
      }
      return X;
    }, F.apply(null, arguments);
  }
  function P(X, M) {
    if (X == null) return {};
    var x, u, h = A(X, M);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(X);
      for (u = 0; u < f.length; u++) x = f[u], M.indexOf(x) === -1 && {}.propertyIsEnumerable.call(X, x) && (h[x] = X[x]);
    }
    return h;
  }
  function A(X, M) {
    if (X == null) return {};
    var x = {};
    for (var u in X) if ({}.hasOwnProperty.call(X, u)) {
      if (M.indexOf(u) !== -1) continue;
      x[u] = X[u];
    }
    return x;
  }
  function G(X, M, x) {
    return (M = B(M)) in X ? Object.defineProperty(X, M, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : X[M] = x, X;
  }
  function B(X) {
    var M = $(X, "string");
    return typeof M == "symbol" ? M : M + "";
  }
  function $(X, M) {
    if (typeof X != "object" || !X) return X;
    var x = X[Symbol.toPrimitive];
    if (x !== void 0) {
      var u = x.call(X, M);
      if (typeof u != "object") return u;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (M === "string" ? String : Number)(X);
  }
  const we = "react-grid-layout";
  function xe(X) {
    var M;
    return M = class extends s.Component {
      constructor() {
        super(...arguments), G(this, "state", {
          width: 1280
        }), G(this, "elementRef", /* @__PURE__ */ s.createRef()), G(this, "mounted", !1), G(this, "resizeObserver", void 0);
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
        } = u, f = P(u, w);
        return h && !this.mounted ? /* @__PURE__ */ s.createElement("div", {
          className: (0, d.default)(this.props.className, we),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ s.createElement(X, F({
          innerRef: this.elementRef
        }, f, this.state));
      }
    }, G(M, "defaultProps", {
      measureBeforeMount: !1
    }), G(M, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), M;
  }
  return Oo;
}
var Yc;
function Xp() {
  return Yc || (Yc = 1, function(s) {
    s.exports = rd().default, s.exports.utils = xr(), s.exports.calculateUtils = Ms(), s.exports.Responsive = Rp().default, s.exports.Responsive.utils = id(), s.exports.WidthProvider = Yp().default;
  }(bs)), bs.exports;
}
var Xc = Xp();
const Qp = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, cd = {
  XS: { w: 2, h: 2 },
  S: { w: 3, h: 3 },
  M: { w: 3, h: 4 },
  L: { w: 6, h: 4 },
  XL: { w: 6, h: 8 }
}, Ue = (s, c, l, d, w) => ({
  i: s,
  x: c,
  y: l,
  w: d,
  h: w,
  minW: 2,
  minH: 2,
  maxW: 12,
  maxH: 16
}), Po = {
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
function Ds(s, c, l) {
  return Object.entries(cd).map(([d, w]) => ({
    size: d,
    distance: Math.abs(Math.min(w.w, l) - s) + Math.abs(w.h - c)
  })).sort((d, w) => d.distance - w.distance)[0]?.size ?? "S";
}
function dd(s, c) {
  const l = cd[s];
  return { w: Math.min(l.w, c), h: l.h };
}
function Kp(s, c) {
  const l = Ds(s.w, s.h, c), d = dd(l, c);
  return {
    ...s,
    w: d.w,
    h: d.h,
    x: Math.max(0, Math.min(s.x, c - d.w)),
    size: l
  };
}
function Ts(s, c) {
  return s.some(
    (l) => l.i !== c.i && c.x < l.x + l.w && c.x + c.w > l.x && c.y < l.y + l.h && c.y + c.h > l.y
  );
}
function Zp(s, c, l) {
  for (let d = 0; d < 240; d++)
    for (let w = 0; w <= l - c.w; w++) {
      const E = { ...c, x: w, y: d };
      if (!Ts(s, E)) return E;
    }
  return { ...c, x: 0, y: Math.max(0, ...s.map((d) => d.y + d.h)) };
}
function gi(s) {
  const c = {};
  return Object.keys(cn).forEach((l) => {
    const d = cn[l], w = Array.isArray(s?.[l]) ? s[l] : [], E = new Map(w.map((A) => [A.i, A])), j = (Po[l] || []).map((A) => {
      const G = E.get(A.i);
      if (!G) return { ...A };
      const B = Math.min(Math.max(1, G.w), d);
      return {
        ...A,
        ...G,
        w: B,
        x: Math.max(0, Math.min(G.x, d - B)),
        y: Math.max(0, G.y),
        minW: 2,
        minH: 2
      };
    }), F = new Set(j.map((A) => A.i)), P = w.filter((A) => !F.has(A.i)).map((A) => ({
      ...A,
      w: Math.min(Math.max(1, A.w), d),
      x: Math.max(0, Math.min(A.x, d - Math.min(A.w, d))),
      y: Math.max(0, A.y),
      minW: 2,
      minH: 2
    }));
    c[l] = [...j, ...P];
  }), c;
}
class Jp {
  key(c, l) {
    return `argus:dashboard-layout-v3:${c}:${l}`;
  }
  read(c, l) {
    try {
      const d = localStorage.getItem(this.key(c, l));
      if (!d) return null;
      const w = JSON.parse(d);
      return w?.layoutVersion != null && w.layoutVersion >= 1 ? w : null;
    } catch {
      return null;
    }
  }
  write(c, l, d) {
    localStorage.setItem(this.key(c, l), JSON.stringify(d));
  }
  async load(c, l) {
    const d = this.read(c, l);
    return gi(d ? d.layouts : null);
  }
  async save(c, l, d) {
    const w = this.read(c, l);
    this.write(c, l, {
      layoutVersion: 1,
      layouts: d,
      visibility: w?.visibility,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async loadVisibility(c, l) {
    return this.read(c, l)?.visibility ?? null;
  }
  async saveVisibility(c, l, d) {
    const w = this.read(c, l);
    this.write(c, l, {
      layoutVersion: 1,
      layouts: w?.layouts ?? gi(null),
      visibility: d,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async reset(c, l) {
    localStorage.removeItem(this.key(c, l)), localStorage.removeItem(`argus:dashboard-layout-v2:${c}:${l}`), localStorage.removeItem(`argus:dashboard-layout:${c}:${l}`);
  }
}
const eh = Xc.WidthProvider(Xc.Responsive);
function th({ widget: s, editing: c, size: l, onSize: d, onHide: w, onReset: E, children: j }) {
  return /* @__PURE__ */ y.jsxs(
    "article",
    {
      className: "argus-widget",
      "data-size": l,
      "data-widget-id": s.id,
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
        c && /* @__PURE__ */ y.jsxs("header", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }, children: [
          /* @__PURE__ */ y.jsx(
            "button",
            {
              type: "button",
              className: "argus-widget__drag-handle",
              "aria-label": `Mover ${s.title}`,
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
          /* @__PURE__ */ y.jsx("strong", { style: { fontSize: "12px", opacity: 0.8 }, children: s.title }),
          /* @__PURE__ */ y.jsxs("details", { className: "argus-widget__options", style: { position: "relative" }, children: [
            /* @__PURE__ */ y.jsx("summary", { "aria-label": `Opciones de ${s.title}`, style: { cursor: "pointer", listStyle: "none", fontSize: "14px" }, children: "•••" }),
            /* @__PURE__ */ y.jsxs("div", { style: {
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
              /* @__PURE__ */ y.jsx("span", { style: { fontSize: "11px", opacity: 0.6 }, children: "Tamaño" }),
              /* @__PURE__ */ y.jsx("div", { style: { display: "flex", gap: "2px" }, children: ["XS", "S", "M", "L", "XL"].map((F) => /* @__PURE__ */ y.jsx(
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
                  onClick: () => d(F),
                  children: F
                },
                F
              )) }),
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  type: "button",
                  onClick: E,
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
              /* @__PURE__ */ y.jsx(
                "button",
                {
                  type: "button",
                  onClick: w,
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
        /* @__PURE__ */ y.jsx("div", { style: { flex: 1, height: "100%", overflow: "hidden", pointerEvents: c ? "none" : "auto" }, children: j })
      ]
    }
  );
}
function nh({
  widgets: s,
  widgetComponents: c,
  storage: l,
  userId: d,
  dashboardId: w,
  onEditing: E,
  registerEditor: j,
  isEditing: F,
  onToggleEditing: P
}) {
  const A = ze.useMemo(() => Object.fromEntries(s.map((W) => [W.id, W.visible])), [s]), [G, B] = ze.useState(Po), [$, we] = ze.useState(A), [xe, X] = ze.useState(!1), [M, x] = ze.useState(!1), [u, h] = ze.useState("lg"), [f, p] = ze.useState(""), g = F !== void 0 ? F : xe, R = (W) => {
    X(W), E(W), P && W !== F && P();
  }, I = ze.useRef(Po), U = ze.useRef(), te = ze.useRef(!1);
  ze.useEffect(() => {
    j(X);
  }, [j]), ze.useEffect(() => {
    let W = !0;
    return x(!1), Promise.all([
      l.load(d, w),
      l.loadVisibility?.(d, w)
    ]).then(([q, S]) => {
      if (!W) return;
      const N = gi(q);
      B(N), I.current = N, S && we({ ...A, ...S }), x(!0);
    }), () => {
      W = !1;
    };
  }, [l, d, w, A]), ze.useEffect(() => {
    E(g), M && te.current && !g && l.save(d, w, I.current), te.current = g;
  }, [g, M, E, l, d, w]), ze.useEffect(() => {
    const W = (q) => {
      g && q.key === "Escape" && (R(!1), p("Edición finalizada"));
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [g]), ze.useEffect(() => () => clearTimeout(U.current), []);
  const le = (W, q = !1) => {
    B(W), I.current = W, clearTimeout(U.current), U.current = window.setTimeout(() => l.save(d, w, W), q ? 0 : 550);
  }, ie = (W, q) => {
    const S = { ...$, [W]: q };
    we(S), l.saveVisibility?.(d, w, S), p(q ? "Widget visible" : "Widget oculto");
  }, re = (W, q, S) => {
    const N = I.current, ye = N[u] || [], _e = ye.filter((Te) => Te.i !== W), Oe = Ts(_e, q) ? Zp(_e, q, cn[u]) : q, Pe = { ...N, [u]: ye.map((Te) => Te.i === W ? Oe : Te) };
    le(Pe, !0), p(S);
  }, me = (W, q) => {
    const S = (I.current[u] || []).find((ye) => ye.i === W);
    if (!S) return;
    const N = dd(q, cn[u]);
    re(W, { ...S, ...N, x: Math.max(0, Math.min(S.x, cn[u] - N.w)) }, `Tamaño ${q}`);
  }, Se = (W) => {
    const q = (Po[u] || []).find((S) => S.i === W);
    q && re(W, { ...q }, "Widget restablecido");
  }, pe = (W, q, S) => {
    const N = Kp(S, cn[u]);
    re(S.i, N, `Tamaño ${Ds(N.w, N.h, cn[u])}`);
  }, ue = async () => {
    if (!confirm("¿Restablecer el diseño predeterminado?")) return;
    await l.reset(d, w);
    const W = gi(null);
    we(A), le(W, !0), p("Diseño predeterminado restaurado");
  }, Y = G[u] || [];
  return M ? /* @__PURE__ */ y.jsxs("section", { className: `argus-dashboard ${g ? "argus-dashboard--editing" : ""}`, style: { padding: "20px", boxSizing: "border-box", overflowY: "auto", overflowX: "hidden", height: "100%" }, children: [
    g && f && /* @__PURE__ */ y.jsxs("div", { "aria-live": "polite", style: { padding: "8px 16px", background: "rgba(30, 136, 229, 0.2)", border: "1px solid rgba(30, 136, 229, 0.4)", borderRadius: "12px", marginBottom: "16px", fontSize: "13px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ y.jsx("span", { children: f }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          onClick: ue,
          style: { background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "8px", padding: "4px 8px", fontSize: "11px", cursor: "pointer" },
          children: "Restablecer diseño"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(Ec, { children: /* @__PURE__ */ y.jsx(
      eh,
      {
        className: "argus-dashboard-grid",
        layouts: G,
        breakpoints: Qp,
        cols: cn,
        rowHeight: 84,
        margin: [16, 16],
        containerPadding: [0, 0],
        compactType: null,
        preventCollision: !0,
        allowOverlap: !1,
        isBounded: !0,
        isDraggable: g,
        isResizable: g,
        draggableHandle: ".argus-widget__drag-handle",
        resizeHandles: ["se"],
        onBreakpointChange: (W) => h(W),
        onLayoutChange: (W, q) => {
          g && (B(q), I.current = q);
        },
        onResizeStop: pe,
        onDragStop: (W, q, S) => {
          const N = (I.current[u] || []).filter((ye) => ye.i !== S.i);
          if (Ts(N, S)) {
            B({ ...I.current }), p("Posición bloqueada por colisión");
            return;
          }
          re(S.i, S, "Posición guardada");
        },
        useCSSTransforms: !0,
        children: s.filter((W) => $[W.id] !== !1 && c[W.id] !== void 0).map((W) => {
          const q = Y.find((N) => N.i === W.id), S = q ? Ds(q.w, q.h, cn[u]) : W.size;
          return /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx(Ec, { children: /* @__PURE__ */ y.jsx(
            th,
            {
              widget: W,
              editing: g,
              size: S,
              onSize: (N) => me(W.id, N),
              onHide: () => ie(W.id, !1),
              onReset: () => Se(W.id),
              children: c[W.id]
            }
          ) }) }, W.id);
        })
      }
    ) }),
    g && s.filter((W) => $[W.id] === !1).length > 0 && /* @__PURE__ */ y.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }, children: s.filter((W) => $[W.id] === !1).map((W) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        onClick: () => ie(W.id, !0),
        style: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "white", fontSize: "12px", padding: "6px 12px", cursor: "pointer" },
        children: `Mostrar ${W.title}`
      },
      W.id
    )) })
  ] }) : /* @__PURE__ */ y.jsx("section", { className: "argus-dashboard", style: { padding: "24px", textAlign: "center", opacity: 0.6 }, children: "Cargando Argus Hub..." });
}
const Qc = ze.memo(function({
  label: c,
  subLabel: l,
  color: d,
  onAction: w,
  icon: E = "›",
  disabled: j = !1
}) {
  const F = ze.useRef(null), [P, A] = ze.useState(0), G = ze.useRef(!1), B = ze.useRef(0), $ = 50, we = 4, xe = ze.useCallback(() => Math.max(0, (F.current?.offsetWidth ?? 200) - $ - we * 2), []), X = xe() > 0 ? P / xe() : 0, M = ze.useCallback(() => {
    G.current = !1, A(0);
  }, []), x = ze.useCallback((f) => {
    j || (f.currentTarget.setPointerCapture(f.pointerId), G.current = !0, B.current = f.clientX - P);
  }, [j, P]), u = ze.useCallback((f) => {
    if (!G.current) return;
    const p = Math.max(0, Math.min(xe(), f.clientX - B.current));
    A(p), p >= xe() * 0.82 && (G.current = !1, A(0), w());
  }, [xe, w]), h = ze.useCallback(() => M(), [M]);
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      ref: F,
      style: {
        position: "relative",
        height: "50px",
        borderRadius: "25px",
        background: j ? "rgba(255,255,255,0.04)" : `linear-gradient(90deg, ${d}22 0%, ${d}0a 100%)`,
        border: `1.5px solid ${j ? "rgba(255,255,255,0.08)" : d + "55"}`,
        overflow: "hidden",
        flexShrink: 0,
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      children: [
        /* @__PURE__ */ y.jsx("div", { style: {
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: `${we + $ + P}px`,
          background: `linear-gradient(90deg, ${d}55, ${d}22)`,
          borderRadius: "25px",
          pointerEvents: "none",
          transition: G.current ? "none" : "width 0.35s cubic-bezier(0.34,1.56,0.64,1)"
        } }),
        /* @__PURE__ */ y.jsxs("div", { style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          transition: "opacity 0.2s",
          opacity: j ? 0.4 : 0.7 + X * 0.3
        }, children: [
          /* @__PURE__ */ y.jsx("span", { style: { fontSize: "12px", fontWeight: 900, letterSpacing: "0.05em", color: j ? "rgba(255,255,255,0.3)" : d, lineHeight: 1 }, children: c }),
          l && /* @__PURE__ */ y.jsx("span", { style: { fontSize: "10px", fontWeight: 600, opacity: 0.55, marginTop: "1px" }, children: l })
        ] }),
        /* @__PURE__ */ y.jsx(
          "div",
          {
            onPointerDown: x,
            onPointerMove: u,
            onPointerUp: h,
            onPointerCancel: h,
            style: {
              position: "absolute",
              left: `${we + P}px`,
              top: `${we}px`,
              width: `${$}px`,
              height: `${50 - we * 2}px`,
              borderRadius: "21px",
              background: j ? "rgba(255,255,255,0.12)" : d,
              boxShadow: j ? "none" : `0 4px 20px ${d}88`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              color: "white",
              fontWeight: 900,
              cursor: j ? "not-allowed" : "grab",
              touchAction: "none",
              transition: G.current ? "none" : "left 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              userSelect: "none",
              WebkitUserSelect: "none"
            },
            children: E
          }
        )
      ]
    }
  );
}), rh = ze.memo(function({ entity: c }) {
  const l = c.state === "on" || c.state === "open" || c.state === "unlocked", d = c.state === "locked", w = c.attributes?.device_class ?? "", E = (c.attributes?.friendly_name ?? c.entity_id).replace(/binary_sensor\./i, "").replace(/_/g, " ").toUpperCase().slice(0, 22), j = c.attributes?.battery_level ?? c.attributes?.battery ?? null, F = w === "motion" ? "🏃‍♂️" : w === "window" ? "🪟" : w === "garage_door" ? "🚘" : w === "lock" ? "🔒" : w === "smoke" ? "🔥" : w === "vibration" ? "📳" : "🚪", P = l ? "#FF6B6B" : "#66BB6A", A = l ? "rgba(229,57,53,0.15)" : "rgba(67,160,71,0.12)", G = d ? "BLOQUEADO" : l ? "ABIERTO" : "CERRADO";
  return /* @__PURE__ */ y.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "7px 10px",
    borderRadius: "11px",
    background: l ? "rgba(229,57,53,0.1)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${l ? "rgba(229,57,53,0.3)" : "rgba(255,255,255,0.07)"}`,
    transition: "background 0.3s, border-color 0.3s"
  }, children: [
    /* @__PURE__ */ y.jsx("span", { style: { fontSize: "15px", flexShrink: 0 }, children: F }),
    /* @__PURE__ */ y.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "1px", overflow: "hidden" }, children: [
      /* @__PURE__ */ y.jsx("span", { style: { fontSize: "10px", fontWeight: 800, letterSpacing: "0.04em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", lineHeight: 1 }, children: E }),
      j !== null && /* @__PURE__ */ y.jsxs("span", { style: { fontSize: "9px", fontWeight: 600, opacity: 0.5 }, children: [
        "🔋 ",
        j,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ y.jsx("span", { style: {
      fontSize: "9px",
      fontWeight: 900,
      padding: "2px 6px",
      borderRadius: "6px",
      background: A,
      color: P,
      letterSpacing: "0.04em",
      flexShrink: 0
    }, children: G })
  ] });
}), ih = ze.memo(function({ alarmState: c }) {
  const l = c === "triggered", d = c === "arming" || c === "pending", w = c.startsWith("armed_"), E = l ? "#FF3B30" : d ? "#F5B041" : w ? "#F5A623" : "#43A047";
  return /* @__PURE__ */ y.jsxs(
    "svg",
    {
      viewBox: "0 0 200 220",
      width: "100%",
      height: "100%",
      style: { filter: `drop-shadow(0 10px 24px ${E}55)`, maxWidth: "130px", maxHeight: "155px", margin: "auto", display: "block", overflow: "visible" },
      children: [
        /* @__PURE__ */ y.jsxs("defs", { children: [
          /* @__PURE__ */ y.jsxs("linearGradient", { id: "sg", x1: "20%", y1: "5%", x2: "85%", y2: "100%", children: [
            /* @__PURE__ */ y.jsx("stop", { stopColor: "#fff", stopOpacity: ".28" }),
            /* @__PURE__ */ y.jsx("stop", { offset: ".3", stopColor: E, stopOpacity: ".8" }),
            /* @__PURE__ */ y.jsx("stop", { offset: "1", stopColor: E, stopOpacity: ".15" })
          ] }),
          /* @__PURE__ */ y.jsxs("filter", { id: "sglow", filterUnits: "userSpaceOnUse", x: "-60", y: "-60", width: "320", height: "340", children: [
            /* @__PURE__ */ y.jsx("feGaussianBlur", { stdDeviation: "4", result: "b" }),
            /* @__PURE__ */ y.jsxs("feMerge", { children: [
              /* @__PURE__ */ y.jsx("feMergeNode", { in: "b" }),
              /* @__PURE__ */ y.jsx("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ y.jsx(
          "path",
          {
            d: "M100 18 L158 44 v46 c0 46-26 73-58 91 C68 163 42 136 42 90 V44 z",
            fill: "url(#sg)",
            stroke: E,
            strokeWidth: "2.5",
            filter: "url(#sglow)"
          }
        ),
        /* @__PURE__ */ y.jsx("path", { d: "M100 28 L150 50", stroke: "#fff", strokeOpacity: ".38", strokeWidth: "2", strokeLinecap: "round" }),
        /* @__PURE__ */ y.jsx("circle", { cx: "100", cy: "108", r: "44", fill: "rgba(0,8,20,.28)", stroke: "rgba(255,255,255,.15)", strokeWidth: "1.5" }),
        /* @__PURE__ */ y.jsx("g", { fill: "none", stroke: "#fff", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round", filter: "url(#sglow)", children: l ? /* @__PURE__ */ y.jsx("path", { d: "M86 94 L114 122 M114 94 L86 122" }) : d ? /* @__PURE__ */ y.jsx("path", { d: "M100 86 v24 l14 14" }) : w ? /* @__PURE__ */ y.jsx("path", { d: "M100 86 v24 l14 14" }) : /* @__PURE__ */ y.jsx("path", { d: "M83 108 l12 12 l22-22" }) }),
        !l && /* @__PURE__ */ y.jsxs("circle", { cx: "100", cy: "108", r: "56", fill: "none", stroke: E, strokeOpacity: ".35", strokeWidth: "1.8", children: [
          /* @__PURE__ */ y.jsx("animate", { attributeName: "r", values: "50;66;50", dur: d ? "1.5s" : "3.5s", repeatCount: "indefinite" }),
          /* @__PURE__ */ y.jsx("animate", { attributeName: "opacity", values: ".6;.05;.6", dur: d ? "1.5s" : "3.5s", repeatCount: "indefinite" })
        ] }),
        l && [0, 0.4].map((j, F) => /* @__PURE__ */ y.jsxs("circle", { cx: "100", cy: "108", r: "55", fill: "none", stroke: "#FF3B30", strokeWidth: "3.5", children: [
          /* @__PURE__ */ y.jsx("animate", { attributeName: "r", values: "42;90", dur: "0.7s", begin: `${j}s`, repeatCount: "indefinite" }),
          /* @__PURE__ */ y.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.7s", begin: `${j}s`, repeatCount: "indefinite" })
        ] }, F))
      ]
    }
  );
});
function oh({ hass: s }) {
  const c = s?.states ?? {}, l = Object.values(c).find((f) => f.entity_id?.startsWith("alarm_control_panel.argus")) ?? Object.values(c).find((f) => f.entity_id?.startsWith("alarm_control_panel.")), d = l?.state ?? "disarmed", w = l?.attributes ?? {}, E = (w.friendly_name ?? l?.attributes?.name ?? s?.config?.location_name ?? "MI HOGAR").toUpperCase(), j = !!s, F = d === "disarmed", P = d.startsWith("armed_"), A = d === "arming" || d === "pending", B = (() => {
    const p = {
      armed_away: w.sensors_away ?? [],
      armed_home: w.sensors_home ?? [],
      armed_night: w.sensors_night ?? [],
      armed_vacation: w.sensors_vacation ?? []
    }[d] ?? [];
    if (p.length > 0) return p;
    const g = w.sensors ?? w.open_sensors ?? w.sensor_ids ?? [];
    return Array.isArray(g) ? g : typeof g == "object" ? Object.keys(g) : w.entry_sensors ?? [];
  })().map((f) => c[f]).filter(Boolean).slice(0, 6), $ = w.open_sensors ?? {};
  new Set(
    typeof $ == "object" && !Array.isArray($) ? Object.keys($) : Array.isArray($) ? $ : []
  );
  const we = B.length === 0 ? Object.values(c).filter(
    (f) => f.entity_id.startsWith("binary_sensor.") && ["door", "window", "motion", "garage_door", "lock", "smoke", "vibration"].includes(
      f.attributes?.device_class ?? ""
    )
  ).slice(0, 6) : [], xe = B.length > 0 ? B : we, X = {
    disarmed: { text: "SISTEMA DESARMADO", color: "#43A047", bg: "rgba(67,160,71,0.15)", border: "rgba(67,160,71,0.4)" },
    armed_home: { text: "SISTEMA ARMADO · EN CASA", color: "#F5A623", bg: "rgba(245,166,35,0.15)", border: "rgba(245,166,35,0.4)" },
    armed_away: { text: "SISTEMA ARMADO · AUSENTE", color: "#EF5350", bg: "rgba(229,57,53,0.15)", border: "rgba(229,57,53,0.4)" },
    armed_night: { text: "SISTEMA ARMADO · NOCHE", color: "#AB47BC", bg: "rgba(142,36,170,0.15)", border: "rgba(142,36,170,0.4)" },
    armed_vacation: { text: "SISTEMA ARMADO · VACACIONES", color: "#26A69A", bg: "rgba(0,137,123,0.15)", border: "rgba(0,137,123,0.4)" },
    triggered: { text: "¡ALARMA DISPARADA!", color: "#FF3B30", bg: "rgba(255,59,48,0.18)", border: "rgba(255,59,48,0.5)" },
    arming: { text: "ARMANDO...", color: "#F5B041", bg: "rgba(245,176,65,0.15)", border: "rgba(245,176,65,0.4)" },
    pending: { text: "ENTRADA DETECTADA...", color: "#F5B041", bg: "rgba(245,176,65,0.15)", border: "rgba(245,176,65,0.4)" }
  }[d] ?? { text: d.toUpperCase(), color: "rgba(255,255,255,0.5)", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.15)" }, M = [
    { id: "armed_home", service: "alarm_arm_home", icon: "🏠", label: "EN CASA", color: "#1E88E5" },
    { id: "armed_away", service: "alarm_arm_away", icon: "🔒", label: "AUSENTE", color: "#E53935" },
    { id: "armed_night", service: "alarm_arm_night", icon: "🌙", label: "NOCHE", color: "#8E24AA" },
    { id: "armed_vacation", service: "alarm_arm_vacation", icon: "✈️", label: "VACACIONES", color: "#00897B" }
  ], x = ze.useCallback((f) => {
    s && l && s.callService("alarm_control_panel", f, { entity_id: l.entity_id });
  }, [s, l]), u = ze.useCallback(() => x("alarm_disarm"), [x]), h = ze.useCallback(() => {
    s && l && s.callService("alarm_control_panel", "alarm_trigger", { entity_id: l.entity_id });
  }, [s, l]);
  return /* @__PURE__ */ y.jsxs("div", { style: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "14px 16px",
    boxSizing: "border-box",
    gap: "10px"
  }, children: [
    /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ y.jsxs("span", { style: { fontSize: "12px", fontWeight: 900, letterSpacing: "0.05em", opacity: 0.9 }, children: [
        "🏠 ",
        E
      ] }),
      /* @__PURE__ */ y.jsxs("span", { style: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "11px",
        fontWeight: 700,
        color: j ? "#66BB6A" : "#EF5350",
        background: j ? "rgba(67,160,71,0.12)" : "rgba(229,57,53,0.12)",
        padding: "3px 8px",
        borderRadius: "20px"
      }, children: [
        /* @__PURE__ */ y.jsx("span", { style: { width: "6px", height: "6px", borderRadius: "50%", background: "currentColor", display: "inline-block" } }),
        j ? "Conectado" : "Desconectado"
      ] }),
      /* @__PURE__ */ y.jsx("div", { style: { marginLeft: "auto" }, children: /* @__PURE__ */ y.jsx("span", { style: {
        fontSize: "10px",
        fontWeight: 900,
        padding: "4px 10px",
        borderRadius: "8px",
        background: X.bg,
        color: X.color,
        border: `1px solid ${X.border}`,
        letterSpacing: "0.03em"
      }, children: X.text }) })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { style: { flex: 1, display: "flex", gap: "12px", overflow: "hidden", minHeight: 0 }, children: [
      /* @__PURE__ */ y.jsxs("div", { style: { width: "185px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7px" }, children: [
        /* @__PURE__ */ y.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", flex: 1 }, children: M.map((f) => {
          const p = d === f.id;
          return /* @__PURE__ */ y.jsxs(
            "button",
            {
              type: "button",
              onClick: () => x(f.service),
              style: {
                background: p ? `${f.color}22` : "rgba(255,255,255,0.05)",
                border: `1.5px solid ${p ? f.color : "rgba(255,255,255,0.1)"}`,
                borderRadius: "13px",
                color: "white",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                padding: "9px 5px",
                transition: "all 0.2s cubic-bezier(0.175,0.885,0.32,1.275)",
                position: "relative"
              },
              onMouseEnter: (g) => {
                g.currentTarget.style.transform = "scale(1.05)";
              },
              onMouseLeave: (g) => {
                g.currentTarget.style.transform = "scale(1)";
              },
              children: [
                p && /* @__PURE__ */ y.jsx("span", { style: {
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: f.color
                } }),
                /* @__PURE__ */ y.jsx("span", { style: { fontSize: "20px" }, children: f.icon }),
                /* @__PURE__ */ y.jsx("span", { style: { fontSize: "9px", fontWeight: 900, letterSpacing: "0.04em", color: p ? f.color : "rgba(255,255,255,0.7)" }, children: f.label })
              ]
            },
            f.id
          );
        }) }),
        P && /* @__PURE__ */ y.jsx(
          Qc,
          {
            label: "Desliza para desarmar",
            icon: "🔓",
            color: "#43A047",
            onAction: u
          }
        ),
        F && /* @__PURE__ */ y.jsxs("div", { style: {
          height: "50px",
          borderRadius: "25px",
          flexShrink: 0,
          background: "rgba(67,160,71,0.12)",
          border: "1.5px solid rgba(67,160,71,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }, children: [
          /* @__PURE__ */ y.jsx("span", { style: { fontSize: "16px" }, children: "🔓" }),
          /* @__PURE__ */ y.jsx("span", { style: { fontSize: "12px", fontWeight: 900, letterSpacing: "0.04em", color: "#43A047" }, children: "DESARMADO" })
        ] }),
        A && /* @__PURE__ */ y.jsxs("div", { style: {
          height: "50px",
          borderRadius: "25px",
          flexShrink: 0,
          background: "rgba(245,176,65,0.12)",
          border: "1.5px solid rgba(245,176,65,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }, children: [
          /* @__PURE__ */ y.jsx("span", { style: { fontSize: "16px" }, children: "⏳" }),
          /* @__PURE__ */ y.jsx("span", { style: { fontSize: "12px", fontWeight: 900, color: "#F5B041" }, children: "ARMANDO..." })
        ] }),
        /* @__PURE__ */ y.jsx(
          Qc,
          {
            label: "Desliza para activar SOS",
            subLabel: "Sirenas se dispararán",
            icon: "🔴",
            color: "#E53935",
            onAction: h
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx("div", { style: { width: "135px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ y.jsx(ih, { alarmState: d }) }),
      /* @__PURE__ */ y.jsx("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "5px", overflowY: "auto", minWidth: 0 }, children: xe.length === 0 ? /* @__PURE__ */ y.jsxs("div", { style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "8px",
        opacity: 0.35
      }, children: [
        /* @__PURE__ */ y.jsx("span", { style: { fontSize: "22px" }, children: "🔍" }),
        /* @__PURE__ */ y.jsx("span", { style: { fontSize: "11px", fontWeight: 600, textAlign: "center", lineHeight: 1.4 }, children: "No hay sensores configurados en Argus" })
      ] }) : xe.map((f) => /* @__PURE__ */ y.jsx(rh, { entity: f }, f.entity_id)) })
    ] })
  ] });
}
const js = [
  { id: "disarmed", label: "Desarmado", icon: "🔓", color: "#43A047" },
  { id: "armed_home", label: "En Casa", icon: "🏠", color: "#1E88E5" },
  { id: "armed_away", label: "Ausente", icon: "🔴", color: "#E53935" },
  { id: "armed_night", label: "Noche", icon: "🌙", color: "#8E24AA" },
  { id: "armed_vacation", label: "Vacaciones", icon: "✈️", color: "#00897B" }
];
function yr({ icon: s, title: c, children: l }) {
  return /* @__PURE__ */ y.jsxs(
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
        /* @__PURE__ */ y.jsxs("span", { style: { fontSize: "12px", fontWeight: 900, letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ y.jsx("span", { children: s }),
          " ",
          c
        ] }),
        l
      ]
    }
  );
}
function jo({ label: s }) {
  return /* @__PURE__ */ y.jsx(
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
function pi({ label: s, onClick: c }) {
  return /* @__PURE__ */ y.jsx(
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
      children: s
    }
  );
}
function Kc({ label: s, defaultVal: c }) {
  return /* @__PURE__ */ y.jsxs("label", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
    /* @__PURE__ */ y.jsx("span", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.6 }, children: s }),
    /* @__PURE__ */ y.jsx(
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
function lh({ hass: s }) {
  const [c, l] = ze.useState("armed_home"), d = js.find((w) => w.id === c) || js[1];
  return /* @__PURE__ */ y.jsxs(
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
        /* @__PURE__ */ y.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0 }, children: "📋 Modos" }),
        /* @__PURE__ */ y.jsx(
          "div",
          {
            style: {
              display: "flex",
              gap: "4px",
              overflowX: "auto",
              flexShrink: 0,
              paddingBottom: "2px"
            },
            children: js.map((w) => {
              const E = c === w.id;
              return /* @__PURE__ */ y.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => l(w.id),
                  style: {
                    background: E ? `${w.color}22` : "transparent",
                    border: `1.5px solid ${E ? w.color : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "10px",
                    color: E ? w.color : "rgba(255,255,255,0.6)",
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
                    /* @__PURE__ */ y.jsx("span", { children: w.icon }),
                    /* @__PURE__ */ y.jsx("span", { children: w.label })
                  ]
                },
                w.id
              );
            })
          }
        ),
        /* @__PURE__ */ y.jsxs(
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
              /* @__PURE__ */ y.jsxs(yr, { icon: "🔴", title: "SENSORES DE INTRUSIÓN", children: [
                /* @__PURE__ */ y.jsx(jo, { label: "sensores" }),
                /* @__PURE__ */ y.jsx(pi, { label: "+ Seleccionar" }),
                /* @__PURE__ */ y.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                  /* @__PURE__ */ y.jsx("input", { type: "checkbox", style: { accentColor: d.color } }),
                  "Bloquear si abiertos"
                ] }),
                /* @__PURE__ */ y.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                  /* @__PURE__ */ y.jsx("input", { type: "checkbox", style: { accentColor: d.color } }),
                  "Esperar armado en espera"
                ] })
              ] }),
              /* @__PURE__ */ y.jsxs(yr, { icon: "🚫", title: "OMITIR", children: [
                /* @__PURE__ */ y.jsx(jo, { label: "omitidos" }),
                /* @__PURE__ */ y.jsx(pi, { label: "+ Añadir" })
              ] }),
              /* @__PURE__ */ y.jsxs(yr, { icon: "📢", title: "SIRENAS", children: [
                /* @__PURE__ */ y.jsx(jo, { label: "sirenas" }),
                /* @__PURE__ */ y.jsx(pi, { label: "+ Seleccionar" })
              ] }),
              /* @__PURE__ */ y.jsxs(yr, { icon: "⏱", title: "TIEMPOS", children: [
                /* @__PURE__ */ y.jsx(Kc, { label: "Armado (s)", defaultVal: 0 }),
                /* @__PURE__ */ y.jsx(Kc, { label: "Retraso de entrada (s)", defaultVal: 60 })
              ] }),
              /* @__PURE__ */ y.jsxs(yr, { icon: "🔗", title: "PANELES EXTERNOS", children: [
                /* @__PURE__ */ y.jsx(jo, { label: "paneles" }),
                /* @__PURE__ */ y.jsx(pi, { label: "+ Seleccionar" }),
                /* @__PURE__ */ y.jsx(pi, { label: "+ Añadir" })
              ] }),
              /* @__PURE__ */ y.jsx(yr, { icon: "📡", title: "MQTT", children: /* @__PURE__ */ y.jsxs("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                /* @__PURE__ */ y.jsx("span", { children: "Activar MQTT" }),
                /* @__PURE__ */ y.jsx("input", { type: "checkbox", style: { accentColor: d.color, width: "16px", height: "16px" } })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function sh({ hass: s }) {
  const [c, l] = ze.useState("idle"), d = s?.states || {}, w = Object.values(d).find(
    (F) => F.entity_id?.startsWith("alarm_control_panel.argus")
  ), E = () => {
    c === "idle" ? (l("confirm"), setTimeout(() => l("idle"), 4e3)) : c === "confirm" && (s && w && s.callService("alarm_control_panel", "alarm_trigger", {
      entity_id: w.entity_id
    }), l("activated"), setTimeout(() => l("idle"), 5e3));
  }, j = c === "activated" ? {
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
  return /* @__PURE__ */ y.jsxs(
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
        /* @__PURE__ */ y.jsx(
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
        /* @__PURE__ */ y.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }, children: [
          /* @__PURE__ */ y.jsxs(
            "button",
            {
              type: "button",
              onClick: E,
              style: {
                ...j,
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
                /* @__PURE__ */ y.jsx("span", { style: { fontSize: "22px" }, children: c === "activated" ? "🚨" : c === "confirm" ? "⚠️" : "🔴" }),
                /* @__PURE__ */ y.jsx("span", { children: c === "activated" ? "¡SOS ACTIVADO!" : c === "confirm" ? "¡CONFIRMAR SOS PÁNICO!" : "SOS / PÁNICO" })
              ]
            }
          ),
          c === "confirm" && /* @__PURE__ */ y.jsx(
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
          c === "idle" && /* @__PURE__ */ y.jsx(
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
        /* @__PURE__ */ y.jsx("style", { children: `
        @keyframes argus-sos-pulse {
          from { box-shadow: 0 0 20px rgba(244,67,54,0.4); }
          to   { box-shadow: 0 0 40px rgba(244,67,54,0.85); }
        }
      ` })
      ]
    }
  );
}
function ah(s) {
  const c = s?.user?.name || "Chris";
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
const uh = {
  admin: "⭐ ADMINISTRADOR DE ARGUS",
  standard: "👤 USUARIO ESTÁNDAR"
}, ch = {
  admin: "#F5A623",
  standard: "#42A5F5"
}, dh = {
  admin: "rgba(245,166,35,0.18)",
  standard: "rgba(30,136,229,0.18)"
};
function fh({ hass: s }) {
  const [c] = ze.useState(() => ah(s)), l = (d, w, E = !1) => /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      title: w,
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
        color: E ? "#EF5350" : "white",
        transition: "background 0.2s"
      },
      onMouseEnter: (j) => {
        j.currentTarget.style.background = E ? "rgba(229,57,53,0.2)" : "rgba(255,255,255,0.14)";
      },
      onMouseLeave: (j) => {
        j.currentTarget.style.background = "rgba(255,255,255,0.07)";
      },
      children: d
    },
    d
  );
  return /* @__PURE__ */ y.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "14px 16px", boxSizing: "border-box", gap: "12px" }, children: [
    /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }, children: [
      /* @__PURE__ */ y.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase" }, children: "🛡️ Control de Acceso" }),
      /* @__PURE__ */ y.jsx(
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
    /* @__PURE__ */ y.jsxs("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }, children: [
      c.map((d) => /* @__PURE__ */ y.jsxs(
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
            /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: "12px" }, children: [
              /* @__PURE__ */ y.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "6px" }, children: [
                /* @__PURE__ */ y.jsx(
                  "div",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      background: dh[d.role],
                      color: ch[d.role],
                      fontSize: "11px",
                      fontWeight: 900,
                      letterSpacing: "0.03em",
                      alignSelf: "flex-start"
                    },
                    children: uh[d.role]
                  }
                ),
                /* @__PURE__ */ y.jsx("span", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.6, letterSpacing: "0.03em", textTransform: "uppercase" }, children: d.haAccount })
              ] }),
              /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", gap: "5px", flexShrink: 0 }, children: [
                l("✏️", "Editar usuario"),
                l("🔑", "Cambiar PIN"),
                l("⭐", "Cambiar rol"),
                l("🗑️", "Eliminar usuario", !0)
              ] })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
              /* @__PURE__ */ y.jsxs(
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
                    color: d.pin ? "#66BB6A" : "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,255,255,0.1)"
                  },
                  children: [
                    "🔒 ",
                    d.pin ? "PIN ACTIVO" : "SIN PIN"
                  ]
                }
              ),
              /* @__PURE__ */ y.jsxs(
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
                    d.expiry
                  ]
                }
              )
            ] })
          ]
        },
        d.id
      )),
      /* @__PURE__ */ y.jsx(
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
          onMouseEnter: (d) => {
            d.currentTarget.style.background = "rgba(255,255,255,0.04)", d.currentTarget.style.color = "white";
          },
          onMouseLeave: (d) => {
            d.currentTarget.style.background = "transparent", d.currentTarget.style.color = "rgba(255,255,255,0.55)";
          },
          children: "+ Añadir Usuario"
        }
      )
    ] })
  ] });
}
const Zc = {
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
function ph(s) {
  return Zc[s] || Zc.default;
}
function Jc(s) {
  const c = s?.states || {}, d = Object.values(c).find((P) => P.entity_id?.startsWith("alarm_control_panel.argus"))?.state || "disarmed", w = s?.user?.name || "Chris", E = /* @__PURE__ */ new Date(), j = (P) => P.toLocaleString("es", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }), F = [
    {
      id: "1",
      type: "login",
      title: "CONEXIÓN USUARIO",
      detail: "Conexión usuario",
      time: j(new Date(E.getTime() - 2 * 6e4)),
      source: w
    },
    {
      id: "2",
      type: "restored",
      title: "ESTADO LOCAL RESTAURADO",
      detail: `Estado local restaurado: ${d === "disarmed" ? "Desarmado" : d.replace("armed_", "").toUpperCase()}`,
      time: j(new Date(E.getTime() - 5 * 6e4)),
      source: "Argus"
    }
  ];
  return d !== "disarmed" && F.unshift({
    id: "0",
    type: d,
    title: "CAMBIO DE ESTADO",
    detail: `Sistema ${d.replace("armed_", "armado · ").replace("_", " ")}`,
    time: j(new Date(E.getTime() - 1 * 6e4)),
    source: w
  }), F;
}
function hh({ hass: s }) {
  const [c, l] = ze.useState(() => Jc(s)), [d, w] = ze.useState(!1), E = ze.useCallback(() => {
    w(!0), setTimeout(() => {
      l(Jc(s)), w(!1);
    }, 600);
  }, [s]), j = ze.useCallback(() => {
    confirm("¿Limpiar el historial local?") && l([]);
  }, []), F = ze.useCallback(() => {
    const A = new Blob([JSON.stringify(c, null, 2)], { type: "application/json" }), G = URL.createObjectURL(A), B = document.createElement("a");
    B.href = G, B.download = "argus-history.json", B.click(), URL.revokeObjectURL(G);
  }, [c]), P = {
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
  return /* @__PURE__ */ y.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "14px 16px", boxSizing: "border-box", gap: "12px" }, children: [
    /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ y.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", flex: 1 }, children: "📋 Historial de Actividad" }),
      /* @__PURE__ */ y.jsxs(
        "button",
        {
          type: "button",
          onClick: E,
          style: P,
          title: "Actualizar",
          children: [
            d ? "⏳" : "🔄",
            " Actualizar"
          ]
        }
      ),
      /* @__PURE__ */ y.jsx("button", { type: "button", onClick: F, style: P, title: "Exportar JSON", children: "JSON" }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "button",
          onClick: j,
          style: { ...P, color: "#EF5350", borderColor: "rgba(229,57,53,0.3)" },
          title: "Borrar historial",
          children: "BORRAR"
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "7px", paddingRight: "2px" }, children: c.length === 0 ? /* @__PURE__ */ y.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4, fontSize: "13px", fontWeight: 600 }, children: "Sin entradas de historial" }) : c.map((A) => {
      const G = ph(A.type);
      return /* @__PURE__ */ y.jsxs(
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
            /* @__PURE__ */ y.jsx(
              "div",
              {
                style: {
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: G.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17px",
                  flexShrink: 0,
                  boxShadow: `0 0 10px ${G.bg}`
                },
                children: G.icon
              }
            ),
            /* @__PURE__ */ y.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }, children: [
              /* @__PURE__ */ y.jsx("span", { style: { fontSize: "11px", fontWeight: 900, color: G.color, letterSpacing: "0.04em" }, children: A.title }),
              /* @__PURE__ */ y.jsx("span", { style: { fontSize: "12px", fontWeight: 600, opacity: 0.85, lineHeight: 1.3 }, children: A.detail }),
              /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }, children: [
                /* @__PURE__ */ y.jsx("span", { style: { fontSize: "10px", fontWeight: 600, opacity: 0.45 }, children: A.time }),
                /* @__PURE__ */ y.jsx("span", { style: { fontSize: "10px", opacity: 0.3 }, children: "·" }),
                /* @__PURE__ */ y.jsxs("span", { style: { fontSize: "10px", fontWeight: 700, opacity: 0.55 }, children: [
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
function gh({ hass: s }) {
  const c = [
    { id: "1", name: "Encender luces si hay intrusión", status: "enabled", type: "triggered", icon: "🚨" },
    { id: "2", name: "Apagar todo al Armar Ausente", status: "enabled", type: "pending", icon: "⏳" },
    { id: "3", name: "Enviar notificación al Desarmar", status: "disabled", type: "disarmed", icon: "🔓" }
  ], l = (w) => {
    switch (w) {
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
  }, d = (w) => {
    switch (w) {
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
  return /* @__PURE__ */ y.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
      /* @__PURE__ */ y.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Automatizaciones" }),
      /* @__PURE__ */ y.jsxs(
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
            /* @__PURE__ */ y.jsx("span", { children: "+" }),
            " Crear con HA"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx("p", { style: { margin: "0 0 12px 0", fontSize: "13px", opacity: 0.7, lineHeight: 1.4 }, children: "Reglas configuradas en Home Assistant que utilizan el panel de Argus como disparador o condición." }),
    /* @__PURE__ */ y.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((w) => /* @__PURE__ */ y.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px",
      opacity: w.status === "enabled" ? 1 : 0.5
    }, children: [
      /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ y.jsx("div", { style: {
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: d(w.type),
          color: l(w.type),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          boxShadow: `0 0 8px ${d(w.type)}`
        }, children: w.icon }),
        /* @__PURE__ */ y.jsx("span", { style: { fontSize: "13px", fontWeight: 600 }, children: w.name })
      ] }),
      /* @__PURE__ */ y.jsx("div", { style: {
        width: "36px",
        height: "20px",
        background: w.status === "enabled" ? "#43A047" : "rgba(255,255,255,0.2)",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer"
      }, children: /* @__PURE__ */ y.jsx("div", { style: {
        position: "absolute",
        top: "2px",
        left: w.status === "enabled" ? "18px" : "2px",
        width: "16px",
        height: "16px",
        background: "white",
        borderRadius: "50%",
        transition: "left 0.2s ease"
      } }) })
    ] }, w.id)) })
  ] });
}
var mh = mi();
function yh({ userName: s, isAdmin: c = !0, avatarUrl: l }) {
  const [d, w] = ze.useState(!0), [E, j] = ze.useState(!1);
  if (ze.useEffect(() => {
    const P = setTimeout(() => j(!0), 1400), A = setTimeout(() => w(!1), 2300);
    return () => {
      clearTimeout(P), clearTimeout(A);
    };
  }, []), !d) return null;
  const F = l || `https://ui-avatars.com/api/?name=${encodeURIComponent(s)}&background=1E88E5&color=fff&size=200&bold=true`;
  return mh.createPortal(
    /* @__PURE__ */ y.jsxs(
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
          background: E ? "rgba(11,15,25,0)" : "rgba(11,15,25,0.96)",
          backdropFilter: E ? "none" : "blur(40px) saturate(120%)",
          WebkitBackdropFilter: E ? "none" : "blur(40px) saturate(120%)",
          // Shrink toward top-right corner where the avatar lives in the top bar
          // avatar is approx 42px from right edge at 14px from top
          transformOrigin: "calc(100% - 82px) 35px",
          transform: E ? "scale(0)" : "scale(1)",
          opacity: E ? 0 : 1,
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease, background 0.4s ease, backdrop-filter 0.4s ease",
          pointerEvents: E ? "none" : "auto"
        },
        children: [
          /* @__PURE__ */ y.jsx("style", { children: `
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
          /* @__PURE__ */ y.jsxs("div", { className: "argus-intro-content", children: [
            /* @__PURE__ */ y.jsx("div", { className: "argus-intro-avatar", children: /* @__PURE__ */ y.jsx("img", { src: F, alt: s }) }),
            /* @__PURE__ */ y.jsxs("div", { style: { textAlign: "center", color: "white" }, children: [
              /* @__PURE__ */ y.jsxs(
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
                    s
                  ]
                }
              ),
              /* @__PURE__ */ y.jsx(
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
const vh = new Jp();
function xh({ name: s, size: c = 42 }) {
  const l = s.split(/\s+/).map((E) => E[0] ?? "").join("").toUpperCase().slice(0, 2);
  let d = 0;
  for (let E = 0; E < s.length; E++) d = s.charCodeAt(E) + ((d << 5) - d);
  const w = Math.abs(d) % 360;
  return /* @__PURE__ */ y.jsxs(
    "svg",
    {
      width: c,
      height: c,
      viewBox: "0 0 42 42",
      style: { borderRadius: "50%", flexShrink: 0, display: "block" },
      children: [
        /* @__PURE__ */ y.jsxs("defs", { children: [
          /* @__PURE__ */ y.jsxs("linearGradient", { id: `av-${l}`, x1: "0", y1: "0", x2: "1", y2: "1", children: [
            /* @__PURE__ */ y.jsx("stop", { offset: "0%", stopColor: `hsl(${w},70%,55%)` }),
            /* @__PURE__ */ y.jsx("stop", { offset: "100%", stopColor: `hsl(${(w + 40) % 360},65%,38%)` })
          ] }),
          /* @__PURE__ */ y.jsx("clipPath", { id: "circ", children: /* @__PURE__ */ y.jsx("circle", { cx: "21", cy: "21", r: "21" }) })
        ] }),
        /* @__PURE__ */ y.jsx("circle", { cx: "21", cy: "21", r: "21", fill: `url(#av-${l})` }),
        /* @__PURE__ */ y.jsx(
          "text",
          {
            x: "21",
            y: "21",
            textAnchor: "middle",
            dominantBaseline: "central",
            fontSize: l.length === 1 ? "18" : "14",
            fontWeight: "800",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fill: "white",
            clipPath: "url(#circ)",
            children: l
          }
        ),
        /* @__PURE__ */ y.jsx("circle", { cx: "21", cy: "21", r: "20.5", fill: "none", stroke: "rgba(255,255,255,0.22)", strokeWidth: "1" })
      ]
    }
  );
}
const wh = ze.memo(function() {
  const [c, l] = ze.useState(() => /* @__PURE__ */ new Date());
  ze.useEffect(() => {
    const E = setInterval(() => l(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(E);
  }, []);
  const d = c.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), w = c.toLocaleDateString("es", { weekday: "short", day: "2-digit", month: "short" }).toUpperCase();
  return /* @__PURE__ */ y.jsxs("div", { style: { textAlign: "right", display: "flex", flexDirection: "column", gap: "1px", flexShrink: 0 }, children: [
    /* @__PURE__ */ y.jsx("span", { style: { fontSize: "22px", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }, children: d }),
    /* @__PURE__ */ y.jsx("span", { style: { fontSize: "10px", fontWeight: 700, opacity: 0.45, letterSpacing: "0.07em" }, children: w })
  ] });
}), Sh = ze.memo(function() {
  return /* @__PURE__ */ y.jsxs("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", style: { flexShrink: 0 }, children: [
    /* @__PURE__ */ y.jsx("circle", { cx: "25", cy: "25", r: "24", fill: "rgba(30,136,229,0.15)", stroke: "rgba(30,136,229,0.4)", strokeWidth: "1.5" }),
    /* @__PURE__ */ y.jsx(
      "path",
      {
        d: "M25 9 L38 15 v11 c0 9-6 16-13 20 C17 42 11 35 11 26 V15 z",
        fill: "rgba(30,136,229,0.3)",
        stroke: "rgba(30,136,229,0.8)",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ y.jsx("path", { d: "M18 26 l5 5 l10-10", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
  ] });
});
function _h({ hass: s, config: c }) {
  const [l, d] = ze.useState(!1), w = ze.useCallback(() => d((G) => !G), []), E = s?.user?.name || "Chris", j = s?.user?.is_admin ?? !0, F = ze.useMemo(() => [
    { id: "modes", title: "Modos", size: "L", kind: "alarm-configuration", visible: !0 },
    { id: "active-instances", title: "Instancias Activas", size: "M", kind: "security-status", visible: !0 },
    { id: "sos", title: "Acciones SOS", size: "M", kind: "custom", visible: !0 },
    { id: "history", title: "Historial", size: "L", kind: "activity-history", visible: !0 },
    { id: "automations", title: "Automatizaciones", size: "L", kind: "automations", visible: !0 },
    { id: "access", title: "Control de Acceso", size: "XL", kind: "access-control", visible: !0 }
  ], []), P = ze.useMemo(() => ({
    modes: /* @__PURE__ */ y.jsx(lh, { hass: s }),
    "active-instances": /* @__PURE__ */ y.jsx(oh, { hass: s }),
    sos: /* @__PURE__ */ y.jsx(sh, { hass: s }),
    history: /* @__PURE__ */ y.jsx(hh, { hass: s }),
    automations: /* @__PURE__ */ y.jsx(gh, { hass: s }),
    access: /* @__PURE__ */ y.jsx(fh, { hass: s })
  }), [s]), A = s?.user?.id || "default_user";
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(yh, { userName: E, isAdmin: j }),
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        style: {
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(160deg, #0b0f19 0%, #0d1526 50%, #111827 100%)",
          color: "white",
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ y.jsxs(
            "header",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 100%)",
                backdropFilter: "blur(30px) saturate(140%)",
                WebkitBackdropFilter: "blur(30px) saturate(140%)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                zIndex: 100,
                position: "sticky",
                top: 0,
                gap: "12px"
              },
              children: [
                /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "13px", minWidth: 0, flex: 1 }, children: [
                  /* @__PURE__ */ y.jsx(Sh, {}),
                  /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", flexDirection: "column", minWidth: 0 }, children: [
                    /* @__PURE__ */ y.jsx("span", { style: { fontSize: "21px", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, whiteSpace: "nowrap" }, children: "Argus Home Hub" }),
                    /* @__PURE__ */ y.jsx("span", { style: { fontSize: "11px", fontWeight: 500, opacity: 0.5, marginTop: "3px", letterSpacing: "0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: "Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit." })
                  ] })
                ] }),
                /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }, children: [
                  /* @__PURE__ */ y.jsx(wh, {}),
                  /* @__PURE__ */ y.jsx("div", { style: { width: "1px", height: "34px", background: "rgba(255,255,255,0.1)", flexShrink: 0 } }),
                  /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "9px", flexShrink: 0 }, children: [
                    /* @__PURE__ */ y.jsx(xh, { name: E, size: 42 }),
                    /* @__PURE__ */ y.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "3px" }, children: [
                      /* @__PURE__ */ y.jsx("span", { style: { fontSize: "13px", fontWeight: 800, lineHeight: 1, whiteSpace: "nowrap" }, children: E }),
                      /* @__PURE__ */ y.jsx(
                        "span",
                        {
                          style: {
                            fontSize: "9px",
                            fontWeight: 900,
                            letterSpacing: "0.08em",
                            padding: "2px 7px",
                            borderRadius: "6px",
                            background: j ? "rgba(245,166,35,0.2)" : "rgba(30,136,229,0.2)",
                            color: j ? "#F5A623" : "#42A5F5",
                            border: `1px solid ${j ? "rgba(245,166,35,0.35)" : "rgba(30,136,229,0.35)"}`,
                            textTransform: "uppercase",
                            alignSelf: "flex-start"
                          },
                          children: j ? "Admin" : "Estándar"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ y.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: w,
                      title: l ? "Guardar y salir de edición" : "Editar tablero",
                      style: {
                        background: l ? "rgba(30,136,229,0.3)" : "rgba(255,255,255,0.07)",
                        border: `1px solid ${l ? "rgba(30,136,229,0.55)" : "rgba(255,255,255,0.13)"}`,
                        borderRadius: "11px",
                        padding: "8px",
                        cursor: "pointer",
                        color: l ? "#42A5F5" : "rgba(255,255,255,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s ease",
                        flexShrink: 0
                      },
                      children: /* @__PURE__ */ y.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: l ? /* @__PURE__ */ y.jsx("path", { d: "M20 6L9 17l-5-5" }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                        /* @__PURE__ */ y.jsx("path", { d: "M12 20h9" }),
                        /* @__PURE__ */ y.jsx("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
                      ] }) })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ y.jsx("main", { style: { flex: 1, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ y.jsx(
            nh,
            {
              widgets: F,
              widgetComponents: P,
              storage: vh,
              userId: A,
              dashboardId: "main",
              isEditing: l,
              onToggleEditing: w,
              onEditing: d,
              registerEditor: () => {
              }
            }
          ) })
        ]
      }
    )
  ] });
}
const kh = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', bh = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", Eh = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:230px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}.argus-dashboard__toolbar{display:none!important}";
class zh extends HTMLElement {
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
          ${kh}
          ${bh}
          ${Eh}
          body, html { margin: 0; padding: 0; background-color: #0b0f19 !important; }
        `, document.head.appendChild(c);
      }
      this.container = document.createElement("div"), this.container.style.width = "100%", this.container.style.minHeight = "100vh", this.container.style.backgroundColor = "#0b0f19", this.appendChild(this.container), this.root = hp.createRoot(this.container);
    }
    this.render();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null, this.container = null);
  }
  render() {
    this.root && this.root.render(
      gp.createElement(_h, {
        hass: this._hass,
        config: this._config || {}
      })
    );
  }
}
function Ph(s) {
  const c = ["argus-panel-v2018", "argus-panel", "argus-card"];
  for (const l of c)
    customElements.get(l) || customElements.define(l, class extends zh {
    });
}
export {
  Ph as applyArgusFrontend
};
