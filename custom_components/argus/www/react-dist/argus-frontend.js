function Ym(r) {
  if (r.__esModule) return r;
  var o = r.default;
  if (typeof o == "function") {
    var a = function u() {
      return this instanceof u ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    a.prototype = o.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(r).forEach(function(u) {
    var c = Object.getOwnPropertyDescriptor(r, u);
    Object.defineProperty(a, u, c.get ? c : {
      enumerable: !0,
      get: function() {
        return r[u];
      }
    });
  }), a;
}
var Us = { exports: {} }, ui = {}, Vs = { exports: {} }, De = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function Xm() {
  if (hd) return De;
  hd = 1;
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.iterator;
  function z(L) {
    return L === null || typeof L != "object" ? null : (L = P && L[P] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Y = Object.assign, F = {};
  function O(L, H, _e) {
    this.props = L, this.context = H, this.refs = F, this.updater = _e || V;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(L, H) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, H, "setState");
  }, O.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function b() {
  }
  b.prototype = O.prototype;
  function p(L, H, _e) {
    this.props = L, this.context = H, this.refs = F, this.updater = _e || V;
  }
  var v = p.prototype = new b();
  v.constructor = p, Y(v, O.prototype), v.isPureReactComponent = !0;
  var g = Array.isArray, _ = Object.prototype.hasOwnProperty, k = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(L, H, _e) {
    var Se, Re = {}, Pe = null, Ie = null;
    if (H != null) for (Se in H.ref !== void 0 && (Ie = H.ref), H.key !== void 0 && (Pe = "" + H.key), H) _.call(H, Se) && !M.hasOwnProperty(Se) && (Re[Se] = H[Se]);
    var Z = arguments.length - 2;
    if (Z === 1) Re.children = _e;
    else if (1 < Z) {
      for (var fe = Array(Z), Ee = 0; Ee < Z; Ee++) fe[Ee] = arguments[Ee + 2];
      Re.children = fe;
    }
    if (L && L.defaultProps) for (Se in Z = L.defaultProps, Z) Re[Se] === void 0 && (Re[Se] = Z[Se]);
    return { $$typeof: r, type: L, key: Pe, ref: Ie, props: Re, _owner: k.current };
  }
  function W(L, H) {
    return { $$typeof: r, type: L.type, key: H, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function J(L) {
    return typeof L == "object" && L !== null && L.$$typeof === r;
  }
  function ce(L) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(_e) {
      return H[_e];
    });
  }
  var se = /\/+/g;
  function oe(L, H) {
    return typeof L == "object" && L !== null && L.key != null ? ce("" + L.key) : H.toString(36);
  }
  function pe(L, H, _e, Se, Re) {
    var Pe = typeof L;
    (Pe === "undefined" || Pe === "boolean") && (L = null);
    var Ie = !1;
    if (L === null) Ie = !0;
    else switch (Pe) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case r:
          case o:
            Ie = !0;
        }
    }
    if (Ie) return Ie = L, Re = Re(Ie), L = Se === "" ? "." + oe(Ie, 0) : Se, g(Re) ? (_e = "", L != null && (_e = L.replace(se, "$&/") + "/"), pe(Re, H, _e, "", function(Ee) {
      return Ee;
    })) : Re != null && (J(Re) && (Re = W(Re, _e + (!Re.key || Ie && Ie.key === Re.key ? "" : ("" + Re.key).replace(se, "$&/") + "/") + L)), H.push(Re)), 1;
    if (Ie = 0, Se = Se === "" ? "." : Se + ":", g(L)) for (var Z = 0; Z < L.length; Z++) {
      Pe = L[Z];
      var fe = Se + oe(Pe, Z);
      Ie += pe(Pe, H, _e, fe, Re);
    }
    else if (fe = z(L), typeof fe == "function") for (L = fe.call(L), Z = 0; !(Pe = L.next()).done; ) Pe = Pe.value, fe = Se + oe(Pe, Z++), Ie += pe(Pe, H, _e, fe, Re);
    else if (Pe === "object") throw H = String(L), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function X(L, H, _e) {
    if (L == null) return L;
    var Se = [], Re = 0;
    return pe(L, Se, "", "", function(Pe) {
      return H.call(_e, Pe, Re++);
    }), Se;
  }
  function ee(L) {
    if (L._status === -1) {
      var H = L._result;
      H = H(), H.then(function(_e) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = _e);
      }, function(_e) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = _e);
      }), L._status === -1 && (L._status = 0, L._result = H);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var re = { current: null }, U = { transition: null }, le = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: U, ReactCurrentOwner: k };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return De.Children = { map: X, forEach: function(L, H, _e) {
    X(L, function() {
      H.apply(this, arguments);
    }, _e);
  }, count: function(L) {
    var H = 0;
    return X(L, function() {
      H++;
    }), H;
  }, toArray: function(L) {
    return X(L, function(H) {
      return H;
    }) || [];
  }, only: function(L) {
    if (!J(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, De.Component = O, De.Fragment = a, De.Profiler = c, De.PureComponent = p, De.StrictMode = u, De.Suspense = h, De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, De.act = te, De.cloneElement = function(L, H, _e) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var Se = Y({}, L.props), Re = L.key, Pe = L.ref, Ie = L._owner;
    if (H != null) {
      if (H.ref !== void 0 && (Pe = H.ref, Ie = k.current), H.key !== void 0 && (Re = "" + H.key), L.type && L.type.defaultProps) var Z = L.type.defaultProps;
      for (fe in H) _.call(H, fe) && !M.hasOwnProperty(fe) && (Se[fe] = H[fe] === void 0 && Z !== void 0 ? Z[fe] : H[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1) Se.children = _e;
    else if (1 < fe) {
      Z = Array(fe);
      for (var Ee = 0; Ee < fe; Ee++) Z[Ee] = arguments[Ee + 2];
      Se.children = Z;
    }
    return { $$typeof: r, type: L.type, key: Re, ref: Pe, props: Se, _owner: Ie };
  }, De.createContext = function(L) {
    return L = { $$typeof: y, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: f, _context: L }, L.Consumer = L;
  }, De.createElement = q, De.createFactory = function(L) {
    var H = q.bind(null, L);
    return H.type = L, H;
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(L) {
    return { $$typeof: m, render: L };
  }, De.isValidElement = J, De.lazy = function(L) {
    return { $$typeof: w, _payload: { _status: -1, _result: L }, _init: ee };
  }, De.memo = function(L, H) {
    return { $$typeof: x, type: L, compare: H === void 0 ? null : H };
  }, De.startTransition = function(L) {
    var H = U.transition;
    U.transition = {};
    try {
      L();
    } finally {
      U.transition = H;
    }
  }, De.unstable_act = te, De.useCallback = function(L, H) {
    return re.current.useCallback(L, H);
  }, De.useContext = function(L) {
    return re.current.useContext(L);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(L) {
    return re.current.useDeferredValue(L);
  }, De.useEffect = function(L, H) {
    return re.current.useEffect(L, H);
  }, De.useId = function() {
    return re.current.useId();
  }, De.useImperativeHandle = function(L, H, _e) {
    return re.current.useImperativeHandle(L, H, _e);
  }, De.useInsertionEffect = function(L, H) {
    return re.current.useInsertionEffect(L, H);
  }, De.useLayoutEffect = function(L, H) {
    return re.current.useLayoutEffect(L, H);
  }, De.useMemo = function(L, H) {
    return re.current.useMemo(L, H);
  }, De.useReducer = function(L, H, _e) {
    return re.current.useReducer(L, H, _e);
  }, De.useRef = function(L) {
    return re.current.useRef(L);
  }, De.useState = function(L) {
    return re.current.useState(L);
  }, De.useSyncExternalStore = function(L, H, _e) {
    return re.current.useSyncExternalStore(L, H, _e);
  }, De.useTransition = function() {
    return re.current.useTransition();
  }, De.version = "18.3.1", De;
}
var gd;
function Rt() {
  return gd || (gd = 1, Vs.exports = Xm()), Vs.exports;
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
var yd;
function Qm() {
  if (yd) return ui;
  yd = 1;
  var r = Rt(), o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(m, h, x) {
    var w, P = {}, z = null, V = null;
    x !== void 0 && (z = "" + x), h.key !== void 0 && (z = "" + h.key), h.ref !== void 0 && (V = h.ref);
    for (w in h) u.call(h, w) && !f.hasOwnProperty(w) && (P[w] = h[w]);
    if (m && m.defaultProps) for (w in h = m.defaultProps, h) P[w] === void 0 && (P[w] = h[w]);
    return { $$typeof: o, type: m, key: z, ref: V, props: P, _owner: c.current };
  }
  return ui.Fragment = a, ui.jsx = y, ui.jsxs = y, ui;
}
var vd;
function Km() {
  return vd || (vd = 1, Us.exports = Qm()), Us.exports;
}
var $e = Km(), Ao = {}, Gs = { exports: {} }, Ct = {}, Ys = { exports: {} }, Xs = {};
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
function Zm() {
  return wd || (wd = 1, function(r) {
    function o(U, le) {
      var te = U.length;
      U.push(le);
      e: for (; 0 < te; ) {
        var L = te - 1 >>> 1, H = U[L];
        if (0 < c(H, le)) U[L] = le, U[te] = H, te = L;
        else break e;
      }
    }
    function a(U) {
      return U.length === 0 ? null : U[0];
    }
    function u(U) {
      if (U.length === 0) return null;
      var le = U[0], te = U.pop();
      if (te !== le) {
        U[0] = te;
        e: for (var L = 0, H = U.length, _e = H >>> 1; L < _e; ) {
          var Se = 2 * (L + 1) - 1, Re = U[Se], Pe = Se + 1, Ie = U[Pe];
          if (0 > c(Re, te)) Pe < H && 0 > c(Ie, Re) ? (U[L] = Ie, U[Pe] = te, L = Pe) : (U[L] = Re, U[Se] = te, L = Se);
          else if (Pe < H && 0 > c(Ie, te)) U[L] = Ie, U[Pe] = te, L = Pe;
          else break e;
        }
      }
      return le;
    }
    function c(U, le) {
      var te = U.sortIndex - le.sortIndex;
      return te !== 0 ? te : U.id - le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var y = Date, m = y.now();
      r.unstable_now = function() {
        return y.now() - m;
      };
    }
    var h = [], x = [], w = 1, P = null, z = 3, V = !1, Y = !1, F = !1, O = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(U) {
      for (var le = a(x); le !== null; ) {
        if (le.callback === null) u(x);
        else if (le.startTime <= U) u(x), le.sortIndex = le.expirationTime, o(h, le);
        else break;
        le = a(x);
      }
    }
    function g(U) {
      if (F = !1, v(U), !Y) if (a(h) !== null) Y = !0, ee(_);
      else {
        var le = a(x);
        le !== null && re(g, le.startTime - U);
      }
    }
    function _(U, le) {
      Y = !1, F && (F = !1, b(q), q = -1), V = !0;
      var te = z;
      try {
        for (v(le), P = a(h); P !== null && (!(P.expirationTime > le) || U && !ce()); ) {
          var L = P.callback;
          if (typeof L == "function") {
            P.callback = null, z = P.priorityLevel;
            var H = L(P.expirationTime <= le);
            le = r.unstable_now(), typeof H == "function" ? P.callback = H : P === a(h) && u(h), v(le);
          } else u(h);
          P = a(h);
        }
        if (P !== null) var _e = !0;
        else {
          var Se = a(x);
          Se !== null && re(g, Se.startTime - le), _e = !1;
        }
        return _e;
      } finally {
        P = null, z = te, V = !1;
      }
    }
    var k = !1, M = null, q = -1, W = 5, J = -1;
    function ce() {
      return !(r.unstable_now() - J < W);
    }
    function se() {
      if (M !== null) {
        var U = r.unstable_now();
        J = U;
        var le = !0;
        try {
          le = M(!0, U);
        } finally {
          le ? oe() : (k = !1, M = null);
        }
      } else k = !1;
    }
    var oe;
    if (typeof p == "function") oe = function() {
      p(se);
    };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), X = pe.port2;
      pe.port1.onmessage = se, oe = function() {
        X.postMessage(null);
      };
    } else oe = function() {
      O(se, 0);
    };
    function ee(U) {
      M = U, k || (k = !0, oe());
    }
    function re(U, le) {
      q = O(function() {
        U(r.unstable_now());
      }, le);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_continueExecution = function() {
      Y || V || (Y = !0, ee(_));
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, r.unstable_getFirstCallbackNode = function() {
      return a(h);
    }, r.unstable_next = function(U) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var le = 3;
          break;
        default:
          le = z;
      }
      var te = z;
      z = le;
      try {
        return U();
      } finally {
        z = te;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(U, le) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var te = z;
      z = U;
      try {
        return le();
      } finally {
        z = te;
      }
    }, r.unstable_scheduleCallback = function(U, le, te) {
      var L = r.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? L + te : L) : te = L, U) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = te + H, U = { id: w++, callback: le, priorityLevel: U, startTime: te, expirationTime: H, sortIndex: -1 }, te > L ? (U.sortIndex = te, o(x, U), a(h) === null && U === a(x) && (F ? (b(q), q = -1) : F = !0, re(g, te - L))) : (U.sortIndex = H, o(h, U), Y || V || (Y = !0, ee(_))), U;
    }, r.unstable_shouldYield = ce, r.unstable_wrapCallback = function(U) {
      var le = z;
      return function() {
        var te = z;
        z = le;
        try {
          return U.apply(this, arguments);
        } finally {
          z = te;
        }
      };
    };
  }(Xs)), Xs;
}
var _d;
function Jm() {
  return _d || (_d = 1, Ys.exports = Zm()), Ys.exports;
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
var bd;
function eh() {
  if (bd) return Ct;
  bd = 1;
  var r = Rt(), o = Jm();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), c = {};
  function f(e, t) {
    y(e, t), y(e + "Capture", t);
  }
  function y(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = {}, P = {};
  function z(e) {
    return h.call(P, e) ? !0 : h.call(w, e) ? !1 : x.test(e) ? P[e] = !0 : (w[e] = !0, !1);
  }
  function V(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Y(e, t, n, i) {
    if (t === null || typeof t > "u" || V(e, t, n, i)) return !0;
    if (i) return !1;
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
  function F(e, t, n, i, s, l, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = d;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new F(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    O[t] = new F(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new F(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new F(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new F(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new F(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function p(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      b,
      p
    );
    O[t] = new F(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(b, p);
    O[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(b, p);
    O[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function v(e, t, n, i) {
    var s = O.hasOwnProperty(t) ? O[t] : null;
    (s !== null ? s.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Y(t, n, s, i) && (n = null), i || s === null ? z(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, i = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = Symbol.for("react.element"), k = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), ce = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var te = Object.assign, L;
  function H(e) {
    if (L === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      L = t && t[1] || "";
    }
    return `
` + L + e;
  }
  var _e = !1;
  function Se(e, t) {
    if (!e || _e) return "";
    _e = !0;
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
        } catch (B) {
          var i = B;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (B) {
          i = B;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (B) {
          i = B;
        }
        e();
      }
    } catch (B) {
      if (B && i && typeof B.stack == "string") {
        for (var s = B.stack.split(`
`), l = i.stack.split(`
`), d = s.length - 1, S = l.length - 1; 1 <= d && 0 <= S && s[d] !== l[S]; ) S--;
        for (; 1 <= d && 0 <= S; d--, S--) if (s[d] !== l[S]) {
          if (d !== 1 || S !== 1)
            do
              if (d--, S--, 0 > S || s[d] !== l[S]) {
                var C = `
` + s[d].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= d && 0 <= S);
          break;
        }
      }
    } finally {
      _e = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function Re(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Se(e.type, !1), e;
      case 11:
        return e = Se(e.type.render, !1), e;
      case 1:
        return e = Se(e.type, !0), e;
      default:
        return "";
    }
  }
  function Pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case k:
        return "Portal";
      case W:
        return "Profiler";
      case q:
        return "StrictMode";
      case oe:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return (e.displayName || "Context") + ".Consumer";
      case J:
        return (e._context.displayName || "Context") + ".Provider";
      case se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
        return t = e.displayName || null, t !== null ? t : Pe(e.type) || "Memo";
      case ee:
        t = e._payload, e = e._init;
        try {
          return Pe(e(t));
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
        return Pe(t);
      case 8:
        return t === q ? "StrictMode" : "Mode";
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
  function fe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ee(e) {
    var t = fe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(d) {
        i = "" + d, l.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(d) {
        i = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Oe(e) {
    e._valueTracker || (e._valueTracker = Ee(e));
  }
  function Me(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = fe(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Fe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, t) {
    var n = t.checked;
    return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function tt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = Z(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function R(e, t) {
    t = t.checked, t != null && v(e, "checked", t, !1);
  }
  function T(e, t) {
    R(e, t);
    var n = Z(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? G(e, t.type, n) : t.hasOwnProperty("defaultValue") && G(e, t.type, Z(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function N(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function G(e, t, n) {
    (t !== "number" || Fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ue = Array.isArray;
  function ve(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Z(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, i && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ke(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ze(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (ue(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Z(n) };
  }
  function Le(e, t) {
    var n = Z(t.value), i = Z(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
  }
  function We(e) {
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
  var E, I = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, s);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (E = E || document.createElement("div"), E.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = E.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function $(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ie = {
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
  }, de = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(e) {
    de.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ie[t] = ie[e];
    });
  });
  function Te(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ie.hasOwnProperty(e) && ie[e] ? ("" + t).trim() : t + "px";
  }
  function Ne(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, s = Te(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, s) : e[n] = s;
    }
  }
  var Qe = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function dt(e, t) {
    if (t) {
      if (Qe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Bt(e, t) {
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
  function Dn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xn = null, Mn = null, Jt = null;
  function Er(e) {
    if (e = Yr(e)) {
      if (typeof Xn != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = Qi(t), Xn(e.stateNode, e.type, t));
    }
  }
  function Cr(e) {
    Mn ? Jt ? Jt.push(e) : Jt = [e] : Mn = e;
  }
  function Qn() {
    if (Mn) {
      var e = Mn, t = Jt;
      if (Jt = Mn = null, Er(e), t) for (e = 0; e < t.length; e++) Er(t[e]);
    }
  }
  function Ri(e, t) {
    return e(t);
  }
  function Al() {
  }
  var la = !1;
  function Il(e, t, n) {
    if (la) return e(t, n);
    la = !0;
    try {
      return Ri(e, t, n);
    } finally {
      la = !1, (Mn !== null || Jt !== null) && (Al(), Qn());
    }
  }
  function Rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = Qi(n);
    if (i === null) return null;
    n = i[t];
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
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var ua = !1;
  if (m) try {
    var zr = {};
    Object.defineProperty(zr, "passive", { get: function() {
      ua = !0;
    } }), window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr);
  } catch {
    ua = !1;
  }
  function Jp(e, t, n, i, s, l, d, S, C) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, B);
    } catch (K) {
      this.onError(K);
    }
  }
  var Or = !1, zi = null, Oi = !1, ca = null, ef = { onError: function(e) {
    Or = !0, zi = e;
  } };
  function tf(e, t, n, i, s, l, d, S, C) {
    Or = !1, zi = null, Jp.apply(ef, arguments);
  }
  function nf(e, t, n, i, s, l, d, S, C) {
    if (tf.apply(this, arguments), Or) {
      if (Or) {
        var B = zi;
        Or = !1, zi = null;
      } else throw Error(a(198));
      Oi || (Oi = !0, ca = B);
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
  function jl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Bl(e) {
    if (Tn(e) !== e) throw Error(a(188));
  }
  function rf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var l = s.alternate;
      if (l === null) {
        if (i = s.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === l.child) {
        for (l = s.child; l; ) {
          if (l === n) return Bl(s), e;
          if (l === i) return Bl(s), t;
          l = l.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== i.return) n = s, i = l;
      else {
        for (var d = !1, S = s.child; S; ) {
          if (S === n) {
            d = !0, n = s, i = l;
            break;
          }
          if (S === i) {
            d = !0, i = s, n = l;
            break;
          }
          S = S.sibling;
        }
        if (!d) {
          for (S = l.child; S; ) {
            if (S === n) {
              d = !0, n = l, i = s;
              break;
            }
            if (S === i) {
              d = !0, i = l, n = s;
              break;
            }
            S = S.sibling;
          }
          if (!d) throw Error(a(189));
        }
      }
      if (n.alternate !== i) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Fl(e) {
    return e = rf(e), e !== null ? ql(e) : null;
  }
  function ql(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ql(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Hl = o.unstable_scheduleCallback, Wl = o.unstable_cancelCallback, of = o.unstable_shouldYield, af = o.unstable_requestPaint, nt = o.unstable_now, sf = o.unstable_getCurrentPriorityLevel, da = o.unstable_ImmediatePriority, $l = o.unstable_UserBlockingPriority, Pi = o.unstable_NormalPriority, lf = o.unstable_LowPriority, Ul = o.unstable_IdlePriority, Li = null, Yt = null;
  function uf(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : pf, cf = Math.log, df = Math.LN2;
  function pf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cf(e) / df | 0) | 0;
  }
  var Di = 64, Mi = 4194304;
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
  function Ti(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, s = e.suspendedLanes, l = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var S = d & ~s;
      S !== 0 ? i = Pr(S) : (l &= d, l !== 0 && (i = Pr(l)));
    } else d = n & ~s, d !== 0 ? i = Pr(d) : l !== 0 && (i = Pr(l));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && !(t & s) && (s = i & -i, l = t & -t, s >= l || s === 16 && (l & 4194240) !== 0)) return t;
    if (i & 4 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - Ft(t), s = 1 << n, i |= e[n], t &= ~s;
    return i;
  }
  function ff(e, t) {
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
  function mf(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, s = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var d = 31 - Ft(l), S = 1 << d, C = s[d];
      C === -1 ? (!(S & n) || S & i) && (s[d] = ff(S, t)) : C <= t && (e.expiredLanes |= S), l &= ~S;
    }
  }
  function pa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Vl() {
    var e = Di;
    return Di <<= 1, !(Di & 4194240) && (Di = 64), e;
  }
  function fa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Lr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
  }
  function hf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Ft(n), l = 1 << s;
      t[s] = 0, i[s] = -1, e[s] = -1, n &= ~l;
    }
  }
  function ma(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Ft(n), s = 1 << i;
      s & t | e[i] & t && (e[i] |= t), n &= ~s;
    }
  }
  var He = 0;
  function Gl(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Yl, ha, Xl, Ql, Kl, ga = !1, Ni = [], pn = null, fn = null, mn = null, Dr = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), hn = [], gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Dr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mr.delete(t.pointerId);
    }
  }
  function Tr(e, t, n, i, s, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: l, targetContainers: [s] }, t !== null && (t = Yr(t), t !== null && ha(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function yf(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return pn = Tr(pn, e, t, n, i, s), !0;
      case "dragenter":
        return fn = Tr(fn, e, t, n, i, s), !0;
      case "mouseover":
        return mn = Tr(mn, e, t, n, i, s), !0;
      case "pointerover":
        var l = s.pointerId;
        return Dr.set(l, Tr(Dr.get(l) || null, e, t, n, i, s)), !0;
      case "gotpointercapture":
        return l = s.pointerId, Mr.set(l, Tr(Mr.get(l) || null, e, t, n, i, s)), !0;
    }
    return !1;
  }
  function Jl(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = jl(n), t !== null) {
            e.blockedOn = t, Kl(e.priority, function() {
              Xl(n);
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
  function Ai(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Gt = i, n.target.dispatchEvent(i), Gt = null;
      } else return t = Yr(n), t !== null && ha(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function eu(e, t, n) {
    Ai(e) && n.delete(t);
  }
  function vf() {
    ga = !1, pn !== null && Ai(pn) && (pn = null), fn !== null && Ai(fn) && (fn = null), mn !== null && Ai(mn) && (mn = null), Dr.forEach(eu), Mr.forEach(eu);
  }
  function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ga || (ga = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, vf)));
  }
  function Ar(e) {
    function t(s) {
      return Nr(s, e);
    }
    if (0 < Ni.length) {
      Nr(Ni[0], e);
      for (var n = 1; n < Ni.length; n++) {
        var i = Ni[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (pn !== null && Nr(pn, e), fn !== null && Nr(fn, e), mn !== null && Nr(mn, e), Dr.forEach(t), Mr.forEach(t), n = 0; n < hn.length; n++) i = hn[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Jl(n), n.blockedOn === null && hn.shift();
  }
  var Kn = g.ReactCurrentBatchConfig, Ii = !0;
  function wf(e, t, n, i) {
    var s = He, l = Kn.transition;
    Kn.transition = null;
    try {
      He = 1, ya(e, t, n, i);
    } finally {
      He = s, Kn.transition = l;
    }
  }
  function _f(e, t, n, i) {
    var s = He, l = Kn.transition;
    Kn.transition = null;
    try {
      He = 4, ya(e, t, n, i);
    } finally {
      He = s, Kn.transition = l;
    }
  }
  function ya(e, t, n, i) {
    if (Ii) {
      var s = va(e, t, n, i);
      if (s === null) Na(e, t, i, ji, n), Zl(e, i);
      else if (yf(s, e, t, n, i)) i.stopPropagation();
      else if (Zl(e, i), t & 4 && -1 < gf.indexOf(e)) {
        for (; s !== null; ) {
          var l = Yr(s);
          if (l !== null && Yl(l), l = va(e, t, n, i), l === null && Na(e, t, i, ji, n), l === s) break;
          s = l;
        }
        s !== null && i.stopPropagation();
      } else Na(e, t, i, null, n);
    }
  }
  var ji = null;
  function va(e, t, n, i) {
    if (ji = null, e = Dn(i), e = Nn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = jl(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ji = e, null;
  }
  function tu(e) {
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
        switch (sf()) {
          case da:
            return 1;
          case $l:
            return 4;
          case Pi:
          case lf:
            return 16;
          case Ul:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, wa = null, Bi = null;
  function nu() {
    if (Bi) return Bi;
    var e, t = wa, n = t.length, i, s = "value" in gn ? gn.value : gn.textContent, l = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var d = n - e;
    for (i = 1; i <= d && t[n - i] === s[l - i]; i++) ;
    return Bi = s.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Fi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qi() {
    return !0;
  }
  function ru() {
    return !1;
  }
  function zt(e) {
    function t(n, i, s, l, d) {
      this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = l, this.target = d, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(l) : l[S]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? qi : ru, this.isPropagationStopped = ru, this;
    }
    return te(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qi);
    }, persist: function() {
    }, isPersistent: qi }), t;
  }
  var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, _a = zt(Zn), Ir = te({}, Zn, { view: 0, detail: 0 }), bf = zt(Ir), ba, xa, jr, Hi = te({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ka, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== jr && (jr && e.type === "mousemove" ? (ba = e.screenX - jr.screenX, xa = e.screenY - jr.screenY) : xa = ba = 0, jr = e), ba);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : xa;
  } }), iu = zt(Hi), xf = te({}, Hi, { dataTransfer: 0 }), Sf = zt(xf), kf = te({}, Ir, { relatedTarget: 0 }), Sa = zt(kf), Ef = te({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = zt(Ef), Rf = te({}, Zn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), zf = zt(Rf), Of = te({}, Zn, { data: 0 }), ou = zt(Of), Pf = {
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
  }, Lf = {
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
  }, Df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Mf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Df[e]) ? !!t[e] : !1;
  }
  function ka() {
    return Mf;
  }
  var Tf = te({}, Ir, { key: function(e) {
    if (e.key) {
      var t = Pf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ka, charCode: function(e) {
    return e.type === "keypress" ? Fi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Nf = zt(Tf), Af = te({}, Hi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), au = zt(Af), If = te({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ka }), jf = zt(If), Bf = te({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ff = zt(Bf), qf = te({}, Hi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hf = zt(qf), Wf = [9, 13, 27, 32], Ea = m && "CompositionEvent" in window, Br = null;
  m && "documentMode" in document && (Br = document.documentMode);
  var $f = m && "TextEvent" in window && !Br, su = m && (!Ea || Br && 8 < Br && 11 >= Br), lu = " ", uu = !1;
  function cu(e, t) {
    switch (e) {
      case "keyup":
        return Wf.indexOf(t.keyCode) !== -1;
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
  function du(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jn = !1;
  function Uf(e, t) {
    switch (e) {
      case "compositionend":
        return du(t);
      case "keypress":
        return t.which !== 32 ? null : (uu = !0, lu);
      case "textInput":
        return e = t.data, e === lu && uu ? null : e;
      default:
        return null;
    }
  }
  function Vf(e, t) {
    if (Jn) return e === "compositionend" || !Ea && cu(e, t) ? (e = nu(), Bi = wa = gn = null, Jn = !1, e) : null;
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
        return su && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gf[e.type] : t === "textarea";
  }
  function fu(e, t, n, i) {
    Cr(i), t = Gi(t, "onChange"), 0 < t.length && (n = new _a("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Fr = null, qr = null;
  function Yf(e) {
    Lu(e, 0);
  }
  function Wi(e) {
    var t = ir(e);
    if (Me(t)) return e;
  }
  function Xf(e, t) {
    if (e === "change") return t;
  }
  var mu = !1;
  if (m) {
    var Ca;
    if (m) {
      var Ra = "oninput" in document;
      if (!Ra) {
        var hu = document.createElement("div");
        hu.setAttribute("oninput", "return;"), Ra = typeof hu.oninput == "function";
      }
      Ca = Ra;
    } else Ca = !1;
    mu = Ca && (!document.documentMode || 9 < document.documentMode);
  }
  function gu() {
    Fr && (Fr.detachEvent("onpropertychange", yu), qr = Fr = null);
  }
  function yu(e) {
    if (e.propertyName === "value" && Wi(qr)) {
      var t = [];
      fu(t, qr, e, Dn(e)), Il(Yf, t);
    }
  }
  function Qf(e, t, n) {
    e === "focusin" ? (gu(), Fr = t, qr = n, Fr.attachEvent("onpropertychange", yu)) : e === "focusout" && gu();
  }
  function Kf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wi(qr);
  }
  function Zf(e, t) {
    if (e === "click") return Wi(t);
  }
  function Jf(e, t) {
    if (e === "input" || e === "change") return Wi(t);
  }
  function em(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var qt = typeof Object.is == "function" ? Object.is : em;
  function Hr(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!h.call(t, s) || !qt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function vu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wu(e, t) {
    var n = vu(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t) return { node: n, offset: t - e };
        e = i;
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
      n = vu(n);
    }
  }
  function _u(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _u(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bu() {
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
  function za(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function tm(e) {
    var t = bu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _u(n.ownerDocument.documentElement, n)) {
      if (i !== null && za(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, l = Math.min(i.start, s);
          i = i.end === void 0 ? l : Math.min(i.end, s), !e.extend && l > i && (s = i, i = l, l = s), s = wu(n, l);
          var d = wu(
            n,
            i
          );
          s && d && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), l > i ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var nm = m && "documentMode" in document && 11 >= document.documentMode, er = null, Oa = null, Wr = null, Pa = !1;
  function xu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pa || er == null || er !== Fe(i) || (i = er, "selectionStart" in i && za(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Wr && Hr(Wr, i) || (Wr = i, i = Gi(Oa, "onSelect"), 0 < i.length && (t = new _a("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = er)));
  }
  function $i(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var tr = { animationend: $i("Animation", "AnimationEnd"), animationiteration: $i("Animation", "AnimationIteration"), animationstart: $i("Animation", "AnimationStart"), transitionend: $i("Transition", "TransitionEnd") }, La = {}, Su = {};
  m && (Su = document.createElement("div").style, "AnimationEvent" in window || (delete tr.animationend.animation, delete tr.animationiteration.animation, delete tr.animationstart.animation), "TransitionEvent" in window || delete tr.transitionend.transition);
  function Ui(e) {
    if (La[e]) return La[e];
    if (!tr[e]) return e;
    var t = tr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Su) return La[e] = t[n];
    return e;
  }
  var ku = Ui("animationend"), Eu = Ui("animationiteration"), Cu = Ui("animationstart"), Ru = Ui("transitionend"), zu = /* @__PURE__ */ new Map(), Ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yn(e, t) {
    zu.set(e, t), f(t, [e]);
  }
  for (var Da = 0; Da < Ou.length; Da++) {
    var Ma = Ou[Da], rm = Ma.toLowerCase(), im = Ma[0].toUpperCase() + Ma.slice(1);
    yn(rm, "on" + im);
  }
  yn(ku, "onAnimationEnd"), yn(Eu, "onAnimationIteration"), yn(Cu, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(Ru, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), om = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
  function Pu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, nf(i, t, void 0, e), e.currentTarget = null;
  }
  function Lu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], s = i.event;
      i = i.listeners;
      e: {
        var l = void 0;
        if (t) for (var d = i.length - 1; 0 <= d; d--) {
          var S = i[d], C = S.instance, B = S.currentTarget;
          if (S = S.listener, C !== l && s.isPropagationStopped()) break e;
          Pu(s, S, B), l = C;
        }
        else for (d = 0; d < i.length; d++) {
          if (S = i[d], C = S.instance, B = S.currentTarget, S = S.listener, C !== l && s.isPropagationStopped()) break e;
          Pu(s, S, B), l = C;
        }
      }
    }
    if (Oi) throw e = ca, Oi = !1, ca = null, e;
  }
  function Ge(e, t) {
    var n = t[qa];
    n === void 0 && (n = t[qa] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Du(t, e, 2, !1), n.add(i));
  }
  function Ta(e, t, n) {
    var i = 0;
    t && (i |= 4), Du(n, e, i, t);
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Vi]) {
      e[Vi] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (om.has(n) || Ta(n, !1, e), Ta(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vi] || (t[Vi] = !0, Ta("selectionchange", !1, t));
    }
  }
  function Du(e, t, n, i) {
    switch (tu(t)) {
      case 1:
        var s = wf;
        break;
      case 4:
        s = _f;
        break;
      default:
        s = ya;
    }
    n = s.bind(null, t, n, e), s = void 0, !ua || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), i ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function Na(e, t, n, i, s) {
    var l = i;
    if (!(t & 1) && !(t & 2) && i !== null) e: for (; ; ) {
      if (i === null) return;
      var d = i.tag;
      if (d === 3 || d === 4) {
        var S = i.stateNode.containerInfo;
        if (S === s || S.nodeType === 8 && S.parentNode === s) break;
        if (d === 4) for (d = i.return; d !== null; ) {
          var C = d.tag;
          if ((C === 3 || C === 4) && (C = d.stateNode.containerInfo, C === s || C.nodeType === 8 && C.parentNode === s)) return;
          d = d.return;
        }
        for (; S !== null; ) {
          if (d = Nn(S), d === null) return;
          if (C = d.tag, C === 5 || C === 6) {
            i = l = d;
            continue e;
          }
          S = S.parentNode;
        }
      }
      i = i.return;
    }
    Il(function() {
      var B = l, K = Dn(n), ne = [];
      e: {
        var Q = zu.get(e);
        if (Q !== void 0) {
          var me = _a, ge = e;
          switch (e) {
            case "keypress":
              if (Fi(n) === 0) break e;
            case "keydown":
            case "keyup":
              me = Nf;
              break;
            case "focusin":
              ge = "focus", me = Sa;
              break;
            case "focusout":
              ge = "blur", me = Sa;
              break;
            case "beforeblur":
            case "afterblur":
              me = Sa;
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
              me = iu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = Sf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = jf;
              break;
            case ku:
            case Eu:
            case Cu:
              me = Cf;
              break;
            case Ru:
              me = Ff;
              break;
            case "scroll":
              me = bf;
              break;
            case "wheel":
              me = Hf;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = au;
          }
          var ye = (t & 4) !== 0, rt = !ye && e === "scroll", A = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var D = B, j; D !== null; ) {
            j = D;
            var ae = j.stateNode;
            if (j.tag === 5 && ae !== null && (j = ae, A !== null && (ae = Rr(D, A), ae != null && ye.push(Vr(D, ae, j)))), rt) break;
            D = D.return;
          }
          0 < ye.length && (Q = new me(Q, ge, null, n, K), ne.push({ event: Q, listeners: ye }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", me = e === "mouseout" || e === "pointerout", Q && n !== Gt && (ge = n.relatedTarget || n.fromElement) && (Nn(ge) || ge[en])) break e;
          if ((me || Q) && (Q = K.window === K ? K : (Q = K.ownerDocument) ? Q.defaultView || Q.parentWindow : window, me ? (ge = n.relatedTarget || n.toElement, me = B, ge = ge ? Nn(ge) : null, ge !== null && (rt = Tn(ge), ge !== rt || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (me = null, ge = B), me !== ge)) {
            if (ye = iu, ae = "onMouseLeave", A = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (ye = au, ae = "onPointerLeave", A = "onPointerEnter", D = "pointer"), rt = me == null ? Q : ir(me), j = ge == null ? Q : ir(ge), Q = new ye(ae, D + "leave", me, n, K), Q.target = rt, Q.relatedTarget = j, ae = null, Nn(K) === B && (ye = new ye(A, D + "enter", ge, n, K), ye.target = j, ye.relatedTarget = rt, ae = ye), rt = ae, me && ge) t: {
              for (ye = me, A = ge, D = 0, j = ye; j; j = nr(j)) D++;
              for (j = 0, ae = A; ae; ae = nr(ae)) j++;
              for (; 0 < D - j; ) ye = nr(ye), D--;
              for (; 0 < j - D; ) A = nr(A), j--;
              for (; D--; ) {
                if (ye === A || A !== null && ye === A.alternate) break t;
                ye = nr(ye), A = nr(A);
              }
              ye = null;
            }
            else ye = null;
            me !== null && Mu(ne, Q, me, ye, !1), ge !== null && rt !== null && Mu(ne, rt, ge, ye, !0);
          }
        }
        e: {
          if (Q = B ? ir(B) : window, me = Q.nodeName && Q.nodeName.toLowerCase(), me === "select" || me === "input" && Q.type === "file") var we = Xf;
          else if (pu(Q)) if (mu) we = Jf;
          else {
            we = Kf;
            var be = Qf;
          }
          else (me = Q.nodeName) && me.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (we = Zf);
          if (we && (we = we(e, B))) {
            fu(ne, we, n, K);
            break e;
          }
          be && be(e, Q, B), e === "focusout" && (be = Q._wrapperState) && be.controlled && Q.type === "number" && G(Q, "number", Q.value);
        }
        switch (be = B ? ir(B) : window, e) {
          case "focusin":
            (pu(be) || be.contentEditable === "true") && (er = be, Oa = B, Wr = null);
            break;
          case "focusout":
            Wr = Oa = er = null;
            break;
          case "mousedown":
            Pa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pa = !1, xu(ne, n, K);
            break;
          case "selectionchange":
            if (nm) break;
          case "keydown":
          case "keyup":
            xu(ne, n, K);
        }
        var xe;
        if (Ea) e: {
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
        else Jn ? cu(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (su && n.locale !== "ko" && (Jn || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Jn && (xe = nu()) : (gn = K, wa = "value" in gn ? gn.value : gn.textContent, Jn = !0)), be = Gi(B, Ce), 0 < be.length && (Ce = new ou(Ce, e, null, n, K), ne.push({ event: Ce, listeners: be }), xe ? Ce.data = xe : (xe = du(n), xe !== null && (Ce.data = xe)))), (xe = $f ? Uf(e, n) : Vf(e, n)) && (B = Gi(B, "onBeforeInput"), 0 < B.length && (K = new ou("onBeforeInput", "beforeinput", null, n, K), ne.push({ event: K, listeners: B }), K.data = xe));
      }
      Lu(ne, t);
    });
  }
  function Vr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Gi(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var s = e, l = s.stateNode;
      s.tag === 5 && l !== null && (s = l, l = Rr(e, n), l != null && i.unshift(Vr(e, l, s)), l = Rr(e, t), l != null && i.push(Vr(e, l, s))), e = e.return;
    }
    return i;
  }
  function nr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Mu(e, t, n, i, s) {
    for (var l = t._reactName, d = []; n !== null && n !== i; ) {
      var S = n, C = S.alternate, B = S.stateNode;
      if (C !== null && C === i) break;
      S.tag === 5 && B !== null && (S = B, s ? (C = Rr(n, l), C != null && d.unshift(Vr(n, C, S))) : s || (C = Rr(n, l), C != null && d.push(Vr(n, C, S)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var am = /\r\n?/g, sm = /\u0000|\uFFFD/g;
  function Tu(e) {
    return (typeof e == "string" ? e : "" + e).replace(am, `
`).replace(sm, "");
  }
  function Yi(e, t, n) {
    if (t = Tu(t), Tu(e) !== t && n) throw Error(a(425));
  }
  function Xi() {
  }
  var Aa = null, Ia = null;
  function ja(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ba = typeof setTimeout == "function" ? setTimeout : void 0, lm = typeof clearTimeout == "function" ? clearTimeout : void 0, Nu = typeof Promise == "function" ? Promise : void 0, um = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nu < "u" ? function(e) {
    return Nu.resolve(null).then(e).catch(cm);
  } : Ba;
  function cm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fa(e, t) {
    var n = t, i = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$") {
        if (i === 0) {
          e.removeChild(s), Ar(t);
          return;
        }
        i--;
      } else n !== "$" && n !== "$?" && n !== "$!" || i++;
      n = s;
    } while (n);
    Ar(t);
  }
  function vn(e) {
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
  function Au(e) {
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
  var rr = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + rr, Gr = "__reactProps$" + rr, en = "__reactContainer$" + rr, qa = "__reactEvents$" + rr, dm = "__reactListeners$" + rr, pm = "__reactHandles$" + rr;
  function Nn(e) {
    var t = e[Xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[en] || n[Xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Au(e); e !== null; ) {
          if (n = e[Xt]) return n;
          e = Au(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Yr(e) {
    return e = e[Xt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Qi(e) {
    return e[Gr] || null;
  }
  var Ha = [], or = -1;
  function wn(e) {
    return { current: e };
  }
  function Ye(e) {
    0 > or || (e.current = Ha[or], Ha[or] = null, or--);
  }
  function Ve(e, t) {
    or++, Ha[or] = e.current, e.current = t;
  }
  var _n = {}, ht = wn(_n), bt = wn(!1), An = _n;
  function ar(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _n;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
    var s = {}, l;
    for (l in n) s[l] = t[l];
    return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function xt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ki() {
    Ye(bt), Ye(ht);
  }
  function Iu(e, t, n) {
    if (ht.current !== _n) throw Error(a(168));
    Ve(ht, t), Ve(bt, n);
  }
  function ju(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var s in i) if (!(s in t)) throw Error(a(108, Ie(e) || "Unknown", s));
    return te({}, n, i);
  }
  function Zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, An = ht.current, Ve(ht, e), Ve(bt, bt.current), !0;
  }
  function Bu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(a(169));
    n ? (e = ju(e, t, An), i.__reactInternalMemoizedMergedChildContext = e, Ye(bt), Ye(ht), Ve(ht, e)) : Ye(bt), Ve(bt, n);
  }
  var tn = null, Ji = !1, Wa = !1;
  function Fu(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function fm(e) {
    Ji = !0, Fu(e);
  }
  function bn() {
    if (!Wa && tn !== null) {
      Wa = !0;
      var e = 0, t = He;
      try {
        var n = tn;
        for (He = 1; e < n.length; e++) {
          var i = n[e];
          do
            i = i(!0);
          while (i !== null);
        }
        tn = null, Ji = !1;
      } catch (s) {
        throw tn !== null && (tn = tn.slice(e + 1)), Hl(da, bn), s;
      } finally {
        He = t, Wa = !1;
      }
    }
    return null;
  }
  var sr = [], lr = 0, eo = null, to = 0, Dt = [], Mt = 0, In = null, nn = 1, rn = "";
  function jn(e, t) {
    sr[lr++] = to, sr[lr++] = eo, eo = e, to = t;
  }
  function qu(e, t, n) {
    Dt[Mt++] = nn, Dt[Mt++] = rn, Dt[Mt++] = In, In = e;
    var i = nn;
    e = rn;
    var s = 32 - Ft(i) - 1;
    i &= ~(1 << s), n += 1;
    var l = 32 - Ft(t) + s;
    if (30 < l) {
      var d = s - s % 5;
      l = (i & (1 << d) - 1).toString(32), i >>= d, s -= d, nn = 1 << 32 - Ft(t) + s | n << s | i, rn = l + e;
    } else nn = 1 << l | n << s | i, rn = e;
  }
  function $a(e) {
    e.return !== null && (jn(e, 1), qu(e, 1, 0));
  }
  function Ua(e) {
    for (; e === eo; ) eo = sr[--lr], sr[lr] = null, to = sr[--lr], sr[lr] = null;
    for (; e === In; ) In = Dt[--Mt], Dt[Mt] = null, rn = Dt[--Mt], Dt[Mt] = null, nn = Dt[--Mt], Dt[Mt] = null;
  }
  var Ot = null, Pt = null, Ke = !1, Ht = null;
  function Hu(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Wu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ot = e, Pt = vn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ot = e, Pt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? { id: nn, overflow: rn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ot = e, Pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Va(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ga(e) {
    if (Ke) {
      var t = Pt;
      if (t) {
        var n = t;
        if (!Wu(e, t)) {
          if (Va(e)) throw Error(a(418));
          t = vn(n.nextSibling);
          var i = Ot;
          t && Wu(e, t) ? Hu(i, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, Ot = e);
        }
      } else {
        if (Va(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Ke = !1, Ot = e;
      }
    }
  }
  function $u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ot = e;
  }
  function no(e) {
    if (e !== Ot) return !1;
    if (!Ke) return $u(e), Ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ja(e.type, e.memoizedProps)), t && (t = Pt)) {
      if (Va(e)) throw Uu(), Error(a(418));
      for (; t; ) Hu(e, t), t = vn(t.nextSibling);
    }
    if ($u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Pt = vn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Pt = null;
      }
    } else Pt = Ot ? vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uu() {
    for (var e = Pt; e; ) e = vn(e.nextSibling);
  }
  function ur() {
    Pt = Ot = null, Ke = !1;
  }
  function Ya(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  var mm = g.ReactCurrentBatchConfig;
  function Xr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(a(147, e));
        var s = i, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(d) {
          var S = s.refs;
          d === null ? delete S[l] : S[l] = d;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function ro(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Vu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Gu(e) {
    function t(A, D) {
      if (e) {
        var j = A.deletions;
        j === null ? (A.deletions = [D], A.flags |= 16) : j.push(D);
      }
    }
    function n(A, D) {
      if (!e) return null;
      for (; D !== null; ) t(A, D), D = D.sibling;
      return null;
    }
    function i(A, D) {
      for (A = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? A.set(D.key, D) : A.set(D.index, D), D = D.sibling;
      return A;
    }
    function s(A, D) {
      return A = On(A, D), A.index = 0, A.sibling = null, A;
    }
    function l(A, D, j) {
      return A.index = j, e ? (j = A.alternate, j !== null ? (j = j.index, j < D ? (A.flags |= 2, D) : j) : (A.flags |= 2, D)) : (A.flags |= 1048576, D);
    }
    function d(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function S(A, D, j, ae) {
      return D === null || D.tag !== 6 ? (D = Bs(j, A.mode, ae), D.return = A, D) : (D = s(D, j), D.return = A, D);
    }
    function C(A, D, j, ae) {
      var we = j.type;
      return we === M ? K(A, D, j.props.children, ae, j.key) : D !== null && (D.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ee && Vu(we) === D.type) ? (ae = s(D, j.props), ae.ref = Xr(A, D, j), ae.return = A, ae) : (ae = zo(j.type, j.key, j.props, null, A.mode, ae), ae.ref = Xr(A, D, j), ae.return = A, ae);
    }
    function B(A, D, j, ae) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== j.containerInfo || D.stateNode.implementation !== j.implementation ? (D = Fs(j, A.mode, ae), D.return = A, D) : (D = s(D, j.children || []), D.return = A, D);
    }
    function K(A, D, j, ae, we) {
      return D === null || D.tag !== 7 ? (D = Vn(j, A.mode, ae, we), D.return = A, D) : (D = s(D, j), D.return = A, D);
    }
    function ne(A, D, j) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Bs("" + D, A.mode, j), D.return = A, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case _:
            return j = zo(D.type, D.key, D.props, null, A.mode, j), j.ref = Xr(A, null, D), j.return = A, j;
          case k:
            return D = Fs(D, A.mode, j), D.return = A, D;
          case ee:
            var ae = D._init;
            return ne(A, ae(D._payload), j);
        }
        if (ue(D) || le(D)) return D = Vn(D, A.mode, j, null), D.return = A, D;
        ro(A, D);
      }
      return null;
    }
    function Q(A, D, j, ae) {
      var we = D !== null ? D.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return we !== null ? null : S(A, D, "" + j, ae);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case _:
            return j.key === we ? C(A, D, j, ae) : null;
          case k:
            return j.key === we ? B(A, D, j, ae) : null;
          case ee:
            return we = j._init, Q(
              A,
              D,
              we(j._payload),
              ae
            );
        }
        if (ue(j) || le(j)) return we !== null ? null : K(A, D, j, ae, null);
        ro(A, j);
      }
      return null;
    }
    function me(A, D, j, ae, we) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return A = A.get(j) || null, S(D, A, "" + ae, we);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case _:
            return A = A.get(ae.key === null ? j : ae.key) || null, C(D, A, ae, we);
          case k:
            return A = A.get(ae.key === null ? j : ae.key) || null, B(D, A, ae, we);
          case ee:
            var be = ae._init;
            return me(A, D, j, be(ae._payload), we);
        }
        if (ue(ae) || le(ae)) return A = A.get(j) || null, K(D, A, ae, we, null);
        ro(D, ae);
      }
      return null;
    }
    function ge(A, D, j, ae) {
      for (var we = null, be = null, xe = D, Ce = D = 0, ct = null; xe !== null && Ce < j.length; Ce++) {
        xe.index > Ce ? (ct = xe, xe = null) : ct = xe.sibling;
        var Be = Q(A, xe, j[Ce], ae);
        if (Be === null) {
          xe === null && (xe = ct);
          break;
        }
        e && xe && Be.alternate === null && t(A, xe), D = l(Be, D, Ce), be === null ? we = Be : be.sibling = Be, be = Be, xe = ct;
      }
      if (Ce === j.length) return n(A, xe), Ke && jn(A, Ce), we;
      if (xe === null) {
        for (; Ce < j.length; Ce++) xe = ne(A, j[Ce], ae), xe !== null && (D = l(xe, D, Ce), be === null ? we = xe : be.sibling = xe, be = xe);
        return Ke && jn(A, Ce), we;
      }
      for (xe = i(A, xe); Ce < j.length; Ce++) ct = me(xe, A, Ce, j[Ce], ae), ct !== null && (e && ct.alternate !== null && xe.delete(ct.key === null ? Ce : ct.key), D = l(ct, D, Ce), be === null ? we = ct : be.sibling = ct, be = ct);
      return e && xe.forEach(function(Pn) {
        return t(A, Pn);
      }), Ke && jn(A, Ce), we;
    }
    function ye(A, D, j, ae) {
      var we = le(j);
      if (typeof we != "function") throw Error(a(150));
      if (j = we.call(j), j == null) throw Error(a(151));
      for (var be = we = null, xe = D, Ce = D = 0, ct = null, Be = j.next(); xe !== null && !Be.done; Ce++, Be = j.next()) {
        xe.index > Ce ? (ct = xe, xe = null) : ct = xe.sibling;
        var Pn = Q(A, xe, Be.value, ae);
        if (Pn === null) {
          xe === null && (xe = ct);
          break;
        }
        e && xe && Pn.alternate === null && t(A, xe), D = l(Pn, D, Ce), be === null ? we = Pn : be.sibling = Pn, be = Pn, xe = ct;
      }
      if (Be.done) return n(
        A,
        xe
      ), Ke && jn(A, Ce), we;
      if (xe === null) {
        for (; !Be.done; Ce++, Be = j.next()) Be = ne(A, Be.value, ae), Be !== null && (D = l(Be, D, Ce), be === null ? we = Be : be.sibling = Be, be = Be);
        return Ke && jn(A, Ce), we;
      }
      for (xe = i(A, xe); !Be.done; Ce++, Be = j.next()) Be = me(xe, A, Ce, Be.value, ae), Be !== null && (e && Be.alternate !== null && xe.delete(Be.key === null ? Ce : Be.key), D = l(Be, D, Ce), be === null ? we = Be : be.sibling = Be, be = Be);
      return e && xe.forEach(function(Gm) {
        return t(A, Gm);
      }), Ke && jn(A, Ce), we;
    }
    function rt(A, D, j, ae) {
      if (typeof j == "object" && j !== null && j.type === M && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case _:
            e: {
              for (var we = j.key, be = D; be !== null; ) {
                if (be.key === we) {
                  if (we = j.type, we === M) {
                    if (be.tag === 7) {
                      n(A, be.sibling), D = s(be, j.props.children), D.return = A, A = D;
                      break e;
                    }
                  } else if (be.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ee && Vu(we) === be.type) {
                    n(A, be.sibling), D = s(be, j.props), D.ref = Xr(A, be, j), D.return = A, A = D;
                    break e;
                  }
                  n(A, be);
                  break;
                } else t(A, be);
                be = be.sibling;
              }
              j.type === M ? (D = Vn(j.props.children, A.mode, ae, j.key), D.return = A, A = D) : (ae = zo(j.type, j.key, j.props, null, A.mode, ae), ae.ref = Xr(A, D, j), ae.return = A, A = ae);
            }
            return d(A);
          case k:
            e: {
              for (be = j.key; D !== null; ) {
                if (D.key === be) if (D.tag === 4 && D.stateNode.containerInfo === j.containerInfo && D.stateNode.implementation === j.implementation) {
                  n(A, D.sibling), D = s(D, j.children || []), D.return = A, A = D;
                  break e;
                } else {
                  n(A, D);
                  break;
                }
                else t(A, D);
                D = D.sibling;
              }
              D = Fs(j, A.mode, ae), D.return = A, A = D;
            }
            return d(A);
          case ee:
            return be = j._init, rt(A, D, be(j._payload), ae);
        }
        if (ue(j)) return ge(A, D, j, ae);
        if (le(j)) return ye(A, D, j, ae);
        ro(A, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, D !== null && D.tag === 6 ? (n(A, D.sibling), D = s(D, j), D.return = A, A = D) : (n(A, D), D = Bs(j, A.mode, ae), D.return = A, A = D), d(A)) : n(A, D);
    }
    return rt;
  }
  var cr = Gu(!0), Yu = Gu(!1), io = wn(null), oo = null, dr = null, Xa = null;
  function Qa() {
    Xa = dr = oo = null;
  }
  function Ka(e) {
    var t = io.current;
    Ye(io), e._currentValue = t;
  }
  function Za(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function pr(e, t) {
    oo = e, Xa = dr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (St = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (Xa !== e) if (e = { context: e, memoizedValue: t, next: null }, dr === null) {
      if (oo === null) throw Error(a(308));
      dr = e, oo.dependencies = { lanes: 0, firstContext: e };
    } else dr = dr.next = e;
    return t;
  }
  var Bn = null;
  function Ja(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  function Xu(e, t, n, i) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Ja(t)) : (n.next = s.next, s.next = n), t.interleaved = n, on(e, i);
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var xn = !1;
  function es(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Qu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function an(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, je & 2) {
      var s = i.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), i.pending = t, on(e, n);
    }
    return s = i.interleaved, s === null ? (t.next = t, Ja(i)) : (t.next = s.next, s.next = t), i.interleaved = t, on(e, n);
  }
  function ao(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, ma(e, n);
    }
  }
  function Ku(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var s = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? s = l = d : l = l.next = d, n = n.next;
        } while (n !== null);
        l === null ? s = l = t : l = l.next = t;
      } else s = l = t;
      n = { baseState: i.baseState, firstBaseUpdate: s, lastBaseUpdate: l, shared: i.shared, effects: i.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function so(e, t, n, i) {
    var s = e.updateQueue;
    xn = !1;
    var l = s.firstBaseUpdate, d = s.lastBaseUpdate, S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var C = S, B = C.next;
      C.next = null, d === null ? l = B : d.next = B, d = C;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, S = K.lastBaseUpdate, S !== d && (S === null ? K.firstBaseUpdate = B : S.next = B, K.lastBaseUpdate = C));
    }
    if (l !== null) {
      var ne = s.baseState;
      d = 0, K = B = C = null, S = l;
      do {
        var Q = S.lane, me = S.eventTime;
        if ((i & Q) === Q) {
          K !== null && (K = K.next = {
            eventTime: me,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ge = e, ye = S;
            switch (Q = t, me = n, ye.tag) {
              case 1:
                if (ge = ye.payload, typeof ge == "function") {
                  ne = ge.call(me, ne, Q);
                  break e;
                }
                ne = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = ye.payload, Q = typeof ge == "function" ? ge.call(me, ne, Q) : ge, Q == null) break e;
                ne = te({}, ne, Q);
                break e;
              case 2:
                xn = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, Q = s.effects, Q === null ? s.effects = [S] : Q.push(S));
        } else me = { eventTime: me, lane: Q, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, K === null ? (B = K = me, C = ne) : K = K.next = me, d |= Q;
        if (S = S.next, S === null) {
          if (S = s.shared.pending, S === null) break;
          Q = S, S = Q.next, Q.next = null, s.lastBaseUpdate = Q, s.shared.pending = null;
        }
      } while (!0);
      if (K === null && (C = ne), s.baseState = C, s.firstBaseUpdate = B, s.lastBaseUpdate = K, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          d |= s.lane, s = s.next;
        while (s !== t);
      } else l === null && (s.shared.lanes = 0);
      Hn |= d, e.lanes = d, e.memoizedState = ne;
    }
  }
  function Zu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var i = e[t], s = i.callback;
      if (s !== null) {
        if (i.callback = null, i = n, typeof s != "function") throw Error(a(191, s));
        s.call(i);
      }
    }
  }
  var Qr = {}, Qt = wn(Qr), Kr = wn(Qr), Zr = wn(Qr);
  function Fn(e) {
    if (e === Qr) throw Error(a(174));
    return e;
  }
  function ts(e, t) {
    switch (Ve(Zr, t), Ve(Kr, e), Ve(Qt, Qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : st(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = st(t, e);
    }
    Ye(Qt), Ve(Qt, t);
  }
  function fr() {
    Ye(Qt), Ye(Kr), Ye(Zr);
  }
  function Ju(e) {
    Fn(Zr.current);
    var t = Fn(Qt.current), n = st(t, e.type);
    t !== n && (Ve(Kr, e), Ve(Qt, n));
  }
  function ns(e) {
    Kr.current === e && (Ye(Qt), Ye(Kr));
  }
  var Ze = wn(0);
  function lo(e) {
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
  var rs = [];
  function is() {
    for (var e = 0; e < rs.length; e++) rs[e]._workInProgressVersionPrimary = null;
    rs.length = 0;
  }
  var uo = g.ReactCurrentDispatcher, os = g.ReactCurrentBatchConfig, qn = 0, Je = null, ot = null, lt = null, co = !1, Jr = !1, ei = 0, hm = 0;
  function gt() {
    throw Error(a(321));
  }
  function as(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!qt(e[n], t[n])) return !1;
    return !0;
  }
  function ss(e, t, n, i, s, l) {
    if (qn = l, Je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, uo.current = e === null || e.memoizedState === null ? wm : _m, e = n(i, s), Jr) {
      l = 0;
      do {
        if (Jr = !1, ei = 0, 25 <= l) throw Error(a(301));
        l += 1, lt = ot = null, t.updateQueue = null, uo.current = bm, e = n(i, s);
      } while (Jr);
    }
    if (uo.current = mo, t = ot !== null && ot.next !== null, qn = 0, lt = ot = Je = null, co = !1, t) throw Error(a(300));
    return e;
  }
  function ls() {
    var e = ei !== 0;
    return ei = 0, e;
  }
  function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Je.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function Nt() {
    if (ot === null) {
      var e = Je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ot.next;
    var t = lt === null ? Je.memoizedState : lt.next;
    if (t !== null) lt = t, ot = e;
    else {
      if (e === null) throw Error(a(310));
      ot = e, e = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, lt === null ? Je.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function ti(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function us(e) {
    var t = Nt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = ot, s = i.baseQueue, l = n.pending;
    if (l !== null) {
      if (s !== null) {
        var d = s.next;
        s.next = l.next, l.next = d;
      }
      i.baseQueue = s = l, n.pending = null;
    }
    if (s !== null) {
      l = s.next, i = i.baseState;
      var S = d = null, C = null, B = l;
      do {
        var K = B.lane;
        if ((qn & K) === K) C !== null && (C = C.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), i = B.hasEagerState ? B.eagerState : e(i, B.action);
        else {
          var ne = {
            lane: K,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          C === null ? (S = C = ne, d = i) : C = C.next = ne, Je.lanes |= K, Hn |= K;
        }
        B = B.next;
      } while (B !== null && B !== l);
      C === null ? d = i : C.next = S, qt(i, t.memoizedState) || (St = !0), t.memoizedState = i, t.baseState = d, t.baseQueue = C, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        l = s.lane, Je.lanes |= l, Hn |= l, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function cs(e) {
    var t = Nt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, s = n.pending, l = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = s = s.next;
      do
        l = e(l, d.action), d = d.next;
      while (d !== s);
      qt(l, t.memoizedState) || (St = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, i];
  }
  function ec() {
  }
  function tc(e, t) {
    var n = Je, i = Nt(), s = t(), l = !qt(i.memoizedState, s);
    if (l && (i.memoizedState = s, St = !0), i = i.queue, ds(ic.bind(null, n, i, e), [e]), i.getSnapshot !== t || l || lt !== null && lt.memoizedState.tag & 1) {
      if (n.flags |= 2048, ni(9, rc.bind(null, n, i, s, t), void 0, null), ut === null) throw Error(a(349));
      qn & 30 || nc(n, t, s);
    }
    return s;
  }
  function nc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function rc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, oc(t) && ac(e);
  }
  function ic(e, t, n) {
    return n(function() {
      oc(t) && ac(e);
    });
  }
  function oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !qt(e, n);
    } catch {
      return !0;
    }
  }
  function ac(e) {
    var t = on(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function sc(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ti, lastRenderedState: e }, t.queue = e, e = e.dispatch = vm.bind(null, Je, e), [t.memoizedState, e];
  }
  function ni(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function lc() {
    return Nt().memoizedState;
  }
  function po(e, t, n, i) {
    var s = Kt();
    Je.flags |= e, s.memoizedState = ni(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function fo(e, t, n, i) {
    var s = Nt();
    i = i === void 0 ? null : i;
    var l = void 0;
    if (ot !== null) {
      var d = ot.memoizedState;
      if (l = d.destroy, i !== null && as(i, d.deps)) {
        s.memoizedState = ni(t, n, l, i);
        return;
      }
    }
    Je.flags |= e, s.memoizedState = ni(1 | t, n, l, i);
  }
  function uc(e, t) {
    return po(8390656, 8, e, t);
  }
  function ds(e, t) {
    return fo(2048, 8, e, t);
  }
  function cc(e, t) {
    return fo(4, 2, e, t);
  }
  function dc(e, t) {
    return fo(4, 4, e, t);
  }
  function pc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function fc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fo(4, 4, pc.bind(null, t, e), n);
  }
  function ps() {
  }
  function mc(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && as(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function hc(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && as(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function gc(e, t, n) {
    return qn & 21 ? (qt(n, t) || (n = Vl(), Je.lanes |= n, Hn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = n);
  }
  function gm(e, t) {
    var n = He;
    He = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = os.transition;
    os.transition = {};
    try {
      e(!1), t();
    } finally {
      He = n, os.transition = i;
    }
  }
  function yc() {
    return Nt().memoizedState;
  }
  function ym(e, t, n) {
    var i = Rn(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, vc(e)) wc(t, n);
    else if (n = Xu(e, t, n, i), n !== null) {
      var s = _t();
      Vt(n, e, i, s), _c(n, t, i);
    }
  }
  function vm(e, t, n) {
    var i = Rn(e), s = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (vc(e)) wc(t, s);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var d = t.lastRenderedState, S = l(d, n);
        if (s.hasEagerState = !0, s.eagerState = S, qt(S, d)) {
          var C = t.interleaved;
          C === null ? (s.next = s, Ja(t)) : (s.next = C.next, C.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = Xu(e, t, s, i), n !== null && (s = _t(), Vt(n, e, i, s), _c(n, t, i));
    }
  }
  function vc(e) {
    var t = e.alternate;
    return e === Je || t !== null && t === Je;
  }
  function wc(e, t) {
    Jr = co = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function _c(e, t, n) {
    if (n & 4194240) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, ma(e, n);
    }
  }
  var mo = { readContext: Tt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, wm = { readContext: Tt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: uc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, po(
      4194308,
      4,
      pc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return po(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return po(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Kt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Kt();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = ym.bind(null, Je, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: sc, useDebugValue: ps, useDeferredValue: function(e) {
    return Kt().memoizedState = e;
  }, useTransition: function() {
    var e = sc(!1), t = e[0];
    return e = gm.bind(null, e[1]), Kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = Je, s = Kt();
    if (Ke) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), ut === null) throw Error(a(349));
      qn & 30 || nc(i, t, n);
    }
    s.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return s.queue = l, uc(ic.bind(
      null,
      i,
      l,
      e
    ), [e]), i.flags |= 2048, ni(9, rc.bind(null, i, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = Kt(), t = ut.identifierPrefix;
    if (Ke) {
      var n = rn, i = nn;
      n = (i & ~(1 << 32 - Ft(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ei++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = hm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, _m = {
    readContext: Tt,
    useCallback: mc,
    useContext: Tt,
    useEffect: ds,
    useImperativeHandle: fc,
    useInsertionEffect: cc,
    useLayoutEffect: dc,
    useMemo: hc,
    useReducer: us,
    useRef: lc,
    useState: function() {
      return us(ti);
    },
    useDebugValue: ps,
    useDeferredValue: function(e) {
      var t = Nt();
      return gc(t, ot.memoizedState, e);
    },
    useTransition: function() {
      var e = us(ti)[0], t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: ec,
    useSyncExternalStore: tc,
    useId: yc,
    unstable_isNewReconciler: !1
  }, bm = { readContext: Tt, useCallback: mc, useContext: Tt, useEffect: ds, useImperativeHandle: fc, useInsertionEffect: cc, useLayoutEffect: dc, useMemo: hc, useReducer: cs, useRef: lc, useState: function() {
    return cs(ti);
  }, useDebugValue: ps, useDeferredValue: function(e) {
    var t = Nt();
    return ot === null ? t.memoizedState = e : gc(t, ot.memoizedState, e);
  }, useTransition: function() {
    var e = cs(ti)[0], t = Nt().memoizedState;
    return [e, t];
  }, useMutableSource: ec, useSyncExternalStore: tc, useId: yc, unstable_isNewReconciler: !1 };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      t = te({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function fs(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ho = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var i = _t(), s = Rn(e), l = an(i, s);
    l.payload = t, n != null && (l.callback = n), t = Sn(e, l, s), t !== null && (Vt(t, e, s, i), ao(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var i = _t(), s = Rn(e), l = an(i, s);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Sn(e, l, s), t !== null && (Vt(t, e, s, i), ao(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = _t(), i = Rn(e), s = an(n, i);
    s.tag = 2, t != null && (s.callback = t), t = Sn(e, s, i), t !== null && (Vt(t, e, i, n), ao(t, e, i));
  } };
  function bc(e, t, n, i, s, l, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, l, d) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, i) || !Hr(s, l) : !0;
  }
  function xc(e, t, n) {
    var i = !1, s = _n, l = t.contextType;
    return typeof l == "object" && l !== null ? l = Tt(l) : (s = xt(t) ? An : ht.current, i = t.contextTypes, l = (i = i != null) ? ar(e, s) : _n), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ho, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function Sc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && ho.enqueueReplaceState(t, t.state, null);
  }
  function ms(e, t, n, i) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, es(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? s.context = Tt(l) : (l = xt(t) ? An : ht.current, s.context = ar(e, l)), s.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (fs(e, t, l, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && ho.enqueueReplaceState(s, s.state, null), so(e, n, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function mr(e, t) {
    try {
      var n = "", i = t;
      do
        n += Re(i), i = i.return;
      while (i);
      var s = n;
    } catch (l) {
      s = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function hs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function gs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var xm = typeof WeakMap == "function" ? WeakMap : Map;
  function kc(e, t, n) {
    n = an(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      xo || (xo = !0, Ls = i), gs(e, t);
    }, n;
  }
  function Ec(e, t, n) {
    n = an(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = t.value;
      n.payload = function() {
        return i(s);
      }, n.callback = function() {
        gs(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      gs(e, t), typeof i != "function" && (En === null ? En = /* @__PURE__ */ new Set([this]) : En.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function Cc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new xm();
      var s = /* @__PURE__ */ new Set();
      i.set(t, s);
    } else s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s));
    s.has(n) || (s.add(n), e = Am.bind(null, e, t, n), t.then(e, e));
  }
  function Rc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function zc(e, t, n, i, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e);
  }
  var Sm = g.ReactCurrentOwner, St = !1;
  function wt(e, t, n, i) {
    t.child = e === null ? Yu(t, null, n, i) : cr(t, e.child, n, i);
  }
  function Oc(e, t, n, i, s) {
    n = n.render;
    var l = t.ref;
    return pr(t, s), i = ss(e, t, n, i, l, s), n = ls(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, sn(e, t, s)) : (Ke && n && $a(t), t.flags |= 1, wt(e, t, i, s), t.child);
  }
  function Pc(e, t, n, i, s) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !js(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Lc(e, t, l, i, s)) : (e = zo(n.type, null, i, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !(e.lanes & s)) {
      var d = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Hr, n(d, i) && e.ref === t.ref) return sn(e, t, s);
    }
    return t.flags |= 1, e = On(l, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Lc(e, t, n, i, s) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Hr(l, i) && e.ref === t.ref) if (St = !1, t.pendingProps = i = l, (e.lanes & s) !== 0) e.flags & 131072 && (St = !0);
      else return t.lanes = e.lanes, sn(e, t, s);
    }
    return ys(e, t, n, i, s);
  }
  function Dc(e, t, n) {
    var i = t.pendingProps, s = i.children, l = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(gr, Lt), Lt |= n;
    else {
      if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ve(gr, Lt), Lt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = l !== null ? l.baseLanes : n, Ve(gr, Lt), Lt |= i;
    }
    else l !== null ? (i = l.baseLanes | n, t.memoizedState = null) : i = n, Ve(gr, Lt), Lt |= i;
    return wt(e, t, s, n), t.child;
  }
  function Mc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ys(e, t, n, i, s) {
    var l = xt(n) ? An : ht.current;
    return l = ar(t, l), pr(t, s), n = ss(e, t, n, i, l, s), i = ls(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, sn(e, t, s)) : (Ke && i && $a(t), t.flags |= 1, wt(e, t, n, s), t.child);
  }
  function Tc(e, t, n, i, s) {
    if (xt(n)) {
      var l = !0;
      Zi(t);
    } else l = !1;
    if (pr(t, s), t.stateNode === null) yo(e, t), xc(t, n, i), ms(t, n, i, s), i = !0;
    else if (e === null) {
      var d = t.stateNode, S = t.memoizedProps;
      d.props = S;
      var C = d.context, B = n.contextType;
      typeof B == "object" && B !== null ? B = Tt(B) : (B = xt(n) ? An : ht.current, B = ar(t, B));
      var K = n.getDerivedStateFromProps, ne = typeof K == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      ne || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (S !== i || C !== B) && Sc(t, d, i, B), xn = !1;
      var Q = t.memoizedState;
      d.state = Q, so(t, i, d, s), C = t.memoizedState, S !== i || Q !== C || bt.current || xn ? (typeof K == "function" && (fs(t, n, K, i), C = t.memoizedState), (S = xn || bc(t, n, S, i, Q, C, B)) ? (ne || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = C), d.props = i, d.state = C, d.context = B, i = S) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      d = t.stateNode, Qu(e, t), S = t.memoizedProps, B = t.type === t.elementType ? S : Wt(t.type, S), d.props = B, ne = t.pendingProps, Q = d.context, C = n.contextType, typeof C == "object" && C !== null ? C = Tt(C) : (C = xt(n) ? An : ht.current, C = ar(t, C));
      var me = n.getDerivedStateFromProps;
      (K = typeof me == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (S !== ne || Q !== C) && Sc(t, d, i, C), xn = !1, Q = t.memoizedState, d.state = Q, so(t, i, d, s);
      var ge = t.memoizedState;
      S !== ne || Q !== ge || bt.current || xn ? (typeof me == "function" && (fs(t, n, me, i), ge = t.memoizedState), (B = xn || bc(t, n, B, i, Q, ge, C) || !1) ? (K || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, ge, C), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, ge, C)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ge), d.props = i, d.state = ge, d.context = C, i = B) : (typeof d.componentDidUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return vs(e, t, n, i, l, s);
  }
  function vs(e, t, n, i, s, l) {
    Mc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!i && !d) return s && Bu(t, n, !1), sn(e, t, l);
    i = t.stateNode, Sm.current = t;
    var S = d && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && d ? (t.child = cr(t, e.child, null, l), t.child = cr(t, null, S, l)) : wt(e, t, S, l), t.memoizedState = i.state, s && Bu(t, n, !0), t.child;
  }
  function Nc(e) {
    var t = e.stateNode;
    t.pendingContext ? Iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Iu(e, t.context, !1), ts(e, t.containerInfo);
  }
  function Ac(e, t, n, i, s) {
    return ur(), Ya(s), t.flags |= 256, wt(e, t, n, i), t.child;
  }
  var ws = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _s(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ic(e, t, n) {
    var i = t.pendingProps, s = Ze.current, l = !1, d = (t.flags & 128) !== 0, S;
    if ((S = d) || (S = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), S ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Ve(Ze, s & 1), e === null)
      return Ga(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (d = i.children, e = i.fallback, l ? (i = t.mode, l = t.child, d = { mode: "hidden", children: d }, !(i & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = d) : l = Oo(d, i, 0, null), e = Vn(e, i, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = _s(n), t.memoizedState = ws, e) : bs(t, d));
    if (s = e.memoizedState, s !== null && (S = s.dehydrated, S !== null)) return km(e, t, d, i, S, s, n);
    if (l) {
      l = i.fallback, d = t.mode, s = e.child, S = s.sibling;
      var C = { mode: "hidden", children: i.children };
      return !(d & 1) && t.child !== s ? (i = t.child, i.childLanes = 0, i.pendingProps = C, t.deletions = null) : (i = On(s, C), i.subtreeFlags = s.subtreeFlags & 14680064), S !== null ? l = On(S, l) : (l = Vn(l, d, n, null), l.flags |= 2), l.return = t, i.return = t, i.sibling = l, t.child = i, i = l, l = t.child, d = e.child.memoizedState, d = d === null ? _s(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, l.memoizedState = d, l.childLanes = e.childLanes & ~n, t.memoizedState = ws, i;
    }
    return l = e.child, e = l.sibling, i = On(l, { mode: "visible", children: i.children }), !(t.mode & 1) && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function bs(e, t) {
    return t = Oo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function go(e, t, n, i) {
    return i !== null && Ya(i), cr(t, e.child, null, n), e = bs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function km(e, t, n, i, s, l, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = hs(Error(a(422))), go(e, t, d, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = i.fallback, s = t.mode, i = Oo({ mode: "visible", children: i.children }, s, 0, null), l = Vn(l, s, d, null), l.flags |= 2, i.return = t, l.return = t, i.sibling = l, t.child = i, t.mode & 1 && cr(t, e.child, null, d), t.child.memoizedState = _s(d), t.memoizedState = ws, l);
    if (!(t.mode & 1)) return go(e, t, d, null);
    if (s.data === "$!") {
      if (i = s.nextSibling && s.nextSibling.dataset, i) var S = i.dgst;
      return i = S, l = Error(a(419)), i = hs(l, i, void 0), go(e, t, d, i);
    }
    if (S = (d & e.childLanes) !== 0, St || S) {
      if (i = ut, i !== null) {
        switch (d & -d) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
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
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = s & (i.suspendedLanes | d) ? 0 : s, s !== 0 && s !== l.retryLane && (l.retryLane = s, on(e, s), Vt(i, e, s, -1));
      }
      return Is(), i = hs(Error(a(421))), go(e, t, d, i);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Im.bind(null, e), s._reactRetry = t, null) : (e = l.treeContext, Pt = vn(s.nextSibling), Ot = t, Ke = !0, Ht = null, e !== null && (Dt[Mt++] = nn, Dt[Mt++] = rn, Dt[Mt++] = In, nn = e.id, rn = e.overflow, In = t), t = bs(t, i.children), t.flags |= 4096, t);
  }
  function jc(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Za(e.return, t, n);
  }
  function xs(e, t, n, i, s) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: s } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = i, l.tail = n, l.tailMode = s);
  }
  function Bc(e, t, n) {
    var i = t.pendingProps, s = i.revealOrder, l = i.tail;
    if (wt(e, t, i.children, n), i = Ze.current, i & 2) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
        else if (e.tag === 19) jc(e, n, t);
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
      i &= 1;
    }
    if (Ve(Ze, i), !(t.mode & 1)) t.memoizedState = null;
    else switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; ) e = n.alternate, e !== null && lo(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), xs(t, !1, s, n, l);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && lo(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        xs(t, !0, n, null, l);
        break;
      case "together":
        xs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function yo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Hn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = On(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Em(e, t, n) {
    switch (t.tag) {
      case 3:
        Nc(t), ur();
        break;
      case 5:
        Ju(t);
        break;
      case 1:
        xt(t.type) && Zi(t);
        break;
      case 4:
        ts(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, s = t.memoizedProps.value;
        Ve(io, i._currentValue), i._currentValue = s;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ve(Ze, Ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ic(e, t, n) : (Ve(Ze, Ze.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Ve(Ze, Ze.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, e.flags & 128) {
          if (i) return Bc(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ve(Ze, Ze.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Dc(e, t, n);
    }
    return sn(e, t, n);
  }
  var Fc, Ss, qc, Hc;
  Fc = function(e, t) {
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
  }, Ss = function() {
  }, qc = function(e, t, n, i) {
    var s = e.memoizedProps;
    if (s !== i) {
      e = t.stateNode, Fn(Qt.current);
      var l = null;
      switch (n) {
        case "input":
          s = Ue(e, s), i = Ue(e, i), l = [];
          break;
        case "select":
          s = te({}, s, { value: void 0 }), i = te({}, i, { value: void 0 }), l = [];
          break;
        case "textarea":
          s = ke(e, s), i = ke(e, i), l = [];
          break;
        default:
          typeof s.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Xi);
      }
      dt(n, i);
      var d;
      n = null;
      for (B in s) if (!i.hasOwnProperty(B) && s.hasOwnProperty(B) && s[B] != null) if (B === "style") {
        var S = s[B];
        for (d in S) S.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (c.hasOwnProperty(B) ? l || (l = []) : (l = l || []).push(B, null));
      for (B in i) {
        var C = i[B];
        if (S = s?.[B], i.hasOwnProperty(B) && C !== S && (C != null || S != null)) if (B === "style") if (S) {
          for (d in S) !S.hasOwnProperty(d) || C && C.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in C) C.hasOwnProperty(d) && S[d] !== C[d] && (n || (n = {}), n[d] = C[d]);
        } else n || (l || (l = []), l.push(
          B,
          n
        )), n = C;
        else B === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (l = l || []).push(B, C)) : B === "children" ? typeof C != "string" && typeof C != "number" || (l = l || []).push(B, "" + C) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (c.hasOwnProperty(B) ? (C != null && B === "onScroll" && Ge("scroll", e), l || S === C || (l = [])) : (l = l || []).push(B, C));
      }
      n && (l = l || []).push("style", n);
      var B = l;
      (t.updateQueue = B) && (t.flags |= 4);
    }
  }, Hc = function(e, t, n, i) {
    n !== i && (t.flags |= 4);
  };
  function ri(e, t) {
    if (!Ke) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
  }
  function yt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 14680064, i |= s.flags & 14680064, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Cm(e, t, n) {
    var i = t.pendingProps;
    switch (Ua(t), t.tag) {
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
        return xt(t.type) && Ki(), yt(t), null;
      case 3:
        return i = t.stateNode, fr(), Ye(bt), Ye(ht), is(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (no(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ht !== null && (Ts(Ht), Ht = null))), Ss(e, t), yt(t), null;
      case 5:
        ns(t);
        var s = Fn(Zr.current);
        if (n = t.type, e !== null && t.stateNode != null) qc(e, t, n, i, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(a(166));
            return yt(t), null;
          }
          if (e = Fn(Qt.current), no(t)) {
            i = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (i[Xt] = t, i[Gr] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ge("cancel", i), Ge("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ge("load", i);
                break;
              case "video":
              case "audio":
                for (s = 0; s < $r.length; s++) Ge($r[s], i);
                break;
              case "source":
                Ge("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Ge(
                  "error",
                  i
                ), Ge("load", i);
                break;
              case "details":
                Ge("toggle", i);
                break;
              case "input":
                tt(i, l), Ge("invalid", i);
                break;
              case "select":
                i._wrapperState = { wasMultiple: !!l.multiple }, Ge("invalid", i);
                break;
              case "textarea":
                ze(i, l), Ge("invalid", i);
            }
            dt(n, l), s = null;
            for (var d in l) if (l.hasOwnProperty(d)) {
              var S = l[d];
              d === "children" ? typeof S == "string" ? i.textContent !== S && (l.suppressHydrationWarning !== !0 && Yi(i.textContent, S, e), s = ["children", S]) : typeof S == "number" && i.textContent !== "" + S && (l.suppressHydrationWarning !== !0 && Yi(
                i.textContent,
                S,
                e
              ), s = ["children", "" + S]) : c.hasOwnProperty(d) && S != null && d === "onScroll" && Ge("scroll", i);
            }
            switch (n) {
              case "input":
                Oe(i), N(i, l, !0);
                break;
              case "textarea":
                Oe(i), We(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (i.onclick = Xi);
            }
            i = s, t.updateQueue = i, i !== null && (t.flags |= 4);
          } else {
            d = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = d.createElement(n, { is: i.is }) : (e = d.createElement(n), n === "select" && (d = e, i.multiple ? d.multiple = !0 : i.size && (d.size = i.size))) : e = d.createElementNS(e, n), e[Xt] = t, e[Gr] = i, Fc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Bt(n, i), n) {
                case "dialog":
                  Ge("cancel", e), Ge("close", e), s = i;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ge("load", e), s = i;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < $r.length; s++) Ge($r[s], e);
                  s = i;
                  break;
                case "source":
                  Ge("error", e), s = i;
                  break;
                case "img":
                case "image":
                case "link":
                  Ge(
                    "error",
                    e
                  ), Ge("load", e), s = i;
                  break;
                case "details":
                  Ge("toggle", e), s = i;
                  break;
                case "input":
                  tt(e, i), s = Ue(e, i), Ge("invalid", e);
                  break;
                case "option":
                  s = i;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!i.multiple }, s = te({}, i, { value: void 0 }), Ge("invalid", e);
                  break;
                case "textarea":
                  ze(e, i), s = ke(e, i), Ge("invalid", e);
                  break;
                default:
                  s = i;
              }
              dt(n, s), S = s;
              for (l in S) if (S.hasOwnProperty(l)) {
                var C = S[l];
                l === "style" ? Ne(e, C) : l === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && I(e, C)) : l === "children" ? typeof C == "string" ? (n !== "textarea" || C !== "") && $(e, C) : typeof C == "number" && $(e, "" + C) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (c.hasOwnProperty(l) ? C != null && l === "onScroll" && Ge("scroll", e) : C != null && v(e, l, C, d));
              }
              switch (n) {
                case "input":
                  Oe(e), N(e, i, !1);
                  break;
                case "textarea":
                  Oe(e), We(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + Z(i.value));
                  break;
                case "select":
                  e.multiple = !!i.multiple, l = i.value, l != null ? ve(e, !!i.multiple, l, !1) : i.defaultValue != null && ve(
                    e,
                    !!i.multiple,
                    i.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = Xi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return yt(t), null;
      case 6:
        if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(a(166));
          if (n = Fn(Zr.current), Fn(Qt.current), no(t)) {
            if (i = t.stateNode, n = t.memoizedProps, i[Xt] = t, (l = i.nodeValue !== n) && (e = Ot, e !== null)) switch (e.tag) {
              case 3:
                Yi(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yi(i.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Xt] = t, t.stateNode = i;
        }
        return yt(t), null;
      case 13:
        if (Ye(Ze), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ke && Pt !== null && t.mode & 1 && !(t.flags & 128)) Uu(), ur(), t.flags |= 98560, l = !1;
          else if (l = no(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(a(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(a(317));
              l[Xt] = t;
            } else ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            yt(t), l = !1;
          } else Ht !== null && (Ts(Ht), Ht = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ze.current & 1 ? at === 0 && (at = 3) : Is())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
      case 4:
        return fr(), Ss(e, t), e === null && Ur(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return Ka(t.type._context), yt(t), null;
      case 17:
        return xt(t.type) && Ki(), yt(t), null;
      case 19:
        if (Ye(Ze), l = t.memoizedState, l === null) return yt(t), null;
        if (i = (t.flags & 128) !== 0, d = l.rendering, d === null) if (i) ri(l, !1);
        else {
          if (at !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (d = lo(e), d !== null) {
              for (t.flags |= 128, ri(l, !1), i = d.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) l = n, e = i, l.flags &= 14680066, d = l.alternate, d === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = d.childLanes, l.lanes = d.lanes, l.child = d.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = d.memoizedProps, l.memoizedState = d.memoizedState, l.updateQueue = d.updateQueue, l.type = d.type, e = d.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ve(Ze, Ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && nt() > yr && (t.flags |= 128, i = !0, ri(l, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = lo(d), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ri(l, !0), l.tail === null && l.tailMode === "hidden" && !d.alternate && !Ke) return yt(t), null;
          } else 2 * nt() - l.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128, i = !0, ri(l, !1), t.lanes = 4194304);
          l.isBackwards ? (d.sibling = t.child, t.child = d) : (n = l.last, n !== null ? n.sibling = d : t.child = d, l.last = d);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = nt(), t.sibling = null, n = Ze.current, Ve(Ze, i ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return As(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Lt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Rm(e, t) {
    switch (Ua(t), t.tag) {
      case 1:
        return xt(t.type) && Ki(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fr(), Ye(bt), Ye(ht), is(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ns(t), null;
      case 13:
        if (Ye(Ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          ur();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ye(Ze), null;
      case 4:
        return fr(), null;
      case 10:
        return Ka(t.type._context), null;
      case 22:
      case 23:
        return As(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vo = !1, vt = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function hr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      et(e, t, i);
    }
    else n.current = null;
  }
  function ks(e, t, n) {
    try {
      n();
    } catch (i) {
      et(e, t, i);
    }
  }
  var Wc = !1;
  function Om(e, t) {
    if (Aa = Ii, e = bu(), za(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var s = i.anchorOffset, l = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, S = -1, C = -1, B = 0, K = 0, ne = e, Q = null;
          t: for (; ; ) {
            for (var me; ne !== n || s !== 0 && ne.nodeType !== 3 || (S = d + s), ne !== l || i !== 0 && ne.nodeType !== 3 || (C = d + i), ne.nodeType === 3 && (d += ne.nodeValue.length), (me = ne.firstChild) !== null; )
              Q = ne, ne = me;
            for (; ; ) {
              if (ne === e) break t;
              if (Q === n && ++B === s && (S = d), Q === l && ++K === i && (C = d), (me = ne.nextSibling) !== null) break;
              ne = Q, Q = ne.parentNode;
            }
            ne = me;
          }
          n = S === -1 || C === -1 ? null : { start: S, end: C };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ia = { focusedElem: e, selectionRange: n }, Ii = !1, he = t; he !== null; ) if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, he = e;
    else for (; he !== null; ) {
      t = he;
      try {
        var ge = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ge !== null) {
              var ye = ge.memoizedProps, rt = ge.memoizedState, A = t.stateNode, D = A.getSnapshotBeforeUpdate(t.elementType === t.type ? ye : Wt(t.type, ye), rt);
              A.__reactInternalSnapshotBeforeUpdate = D;
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
            throw Error(a(163));
        }
      } catch (ae) {
        et(t, t.return, ae);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, he = e;
        break;
      }
      he = t.return;
    }
    return ge = Wc, Wc = !1, ge;
  }
  function ii(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var s = i = i.next;
      do {
        if ((s.tag & e) === e) {
          var l = s.destroy;
          s.destroy = void 0, l !== void 0 && ks(t, n, l);
        }
        s = s.next;
      } while (s !== i);
    }
  }
  function wo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Es(e) {
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
  function $c(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[Gr], delete t[qa], delete t[dm], delete t[pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cs(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xi));
    else if (i !== 4 && (e = e.child, e !== null)) for (Cs(e, t, n), e = e.sibling; e !== null; ) Cs(e, t, n), e = e.sibling;
  }
  function Rs(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (Rs(e, t, n), e = e.sibling; e !== null; ) Rs(e, t, n), e = e.sibling;
  }
  var pt = null, $t = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) Gc(e, t, n), n = n.sibling;
  }
  function Gc(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(Li, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || hr(n, t);
      case 6:
        var i = pt, s = $t;
        pt = null, kn(e, t, n), pt = i, $t = s, pt !== null && ($t ? (e = pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null && ($t ? (e = pt, n = n.stateNode, e.nodeType === 8 ? Fa(e.parentNode, n) : e.nodeType === 1 && Fa(e, n), Ar(e)) : Fa(pt, n.stateNode));
        break;
      case 4:
        i = pt, s = $t, pt = n.stateNode.containerInfo, $t = !0, kn(e, t, n), pt = i, $t = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          s = i = i.next;
          do {
            var l = s, d = l.destroy;
            l = l.tag, d !== void 0 && (l & 2 || l & 4) && ks(n, t, d), s = s.next;
          } while (s !== i);
        }
        kn(e, t, n);
        break;
      case 1:
        if (!vt && (hr(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (S) {
          et(n, t, S);
        }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (i = vt) || n.memoizedState !== null, kn(e, t, n), vt = i) : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function Yc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zm()), t.forEach(function(i) {
        var s = jm.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(s, s));
      });
    }
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var s = n[i];
      try {
        var l = e, d = t, S = d;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              pt = S.stateNode, $t = !1;
              break e;
            case 3:
              pt = S.stateNode.containerInfo, $t = !0;
              break e;
            case 4:
              pt = S.stateNode.containerInfo, $t = !0;
              break e;
          }
          S = S.return;
        }
        if (pt === null) throw Error(a(160));
        Gc(l, d, s), pt = null, $t = !1;
        var C = s.alternate;
        C !== null && (C.return = null), s.return = null;
      } catch (B) {
        et(s, t, B);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xc(t, e), t = t.sibling;
  }
  function Xc(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ut(t, e), Zt(e), i & 4) {
          try {
            ii(3, e, e.return), wo(3, e);
          } catch (ye) {
            et(e, e.return, ye);
          }
          try {
            ii(5, e, e.return);
          } catch (ye) {
            et(e, e.return, ye);
          }
        }
        break;
      case 1:
        Ut(t, e), Zt(e), i & 512 && n !== null && hr(n, n.return);
        break;
      case 5:
        if (Ut(t, e), Zt(e), i & 512 && n !== null && hr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            $(s, "");
          } catch (ye) {
            et(e, e.return, ye);
          }
        }
        if (i & 4 && (s = e.stateNode, s != null)) {
          var l = e.memoizedProps, d = n !== null ? n.memoizedProps : l, S = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            S === "input" && l.type === "radio" && l.name != null && R(s, l), Bt(S, d);
            var B = Bt(S, l);
            for (d = 0; d < C.length; d += 2) {
              var K = C[d], ne = C[d + 1];
              K === "style" ? Ne(s, ne) : K === "dangerouslySetInnerHTML" ? I(s, ne) : K === "children" ? $(s, ne) : v(s, K, ne, B);
            }
            switch (S) {
              case "input":
                T(s, l);
                break;
              case "textarea":
                Le(s, l);
                break;
              case "select":
                var Q = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!l.multiple;
                var me = l.value;
                me != null ? ve(s, !!l.multiple, me, !1) : Q !== !!l.multiple && (l.defaultValue != null ? ve(
                  s,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : ve(s, !!l.multiple, l.multiple ? [] : "", !1));
            }
            s[Gr] = l;
          } catch (ye) {
            et(e, e.return, ye);
          }
        }
        break;
      case 6:
        if (Ut(t, e), Zt(e), i & 4) {
          if (e.stateNode === null) throw Error(a(162));
          s = e.stateNode, l = e.memoizedProps;
          try {
            s.nodeValue = l;
          } catch (ye) {
            et(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (Ut(t, e), Zt(e), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (ye) {
          et(e, e.return, ye);
        }
        break;
      case 4:
        Ut(t, e), Zt(e);
        break;
      case 13:
        Ut(t, e), Zt(e), s = e.child, s.flags & 8192 && (l = s.memoizedState !== null, s.stateNode.isHidden = l, !l || s.alternate !== null && s.alternate.memoizedState !== null || (Ps = nt())), i & 4 && Yc(e);
        break;
      case 22:
        if (K = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (B = vt) || K, Ut(t, e), vt = B) : Ut(t, e), Zt(e), i & 8192) {
          if (B = e.memoizedState !== null, (e.stateNode.isHidden = B) && !K && e.mode & 1) for (he = e, K = e.child; K !== null; ) {
            for (ne = he = K; he !== null; ) {
              switch (Q = he, me = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ii(4, Q, Q.return);
                  break;
                case 1:
                  hr(Q, Q.return);
                  var ge = Q.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    i = Q, n = Q.return;
                    try {
                      t = i, ge.props = t.memoizedProps, ge.state = t.memoizedState, ge.componentWillUnmount();
                    } catch (ye) {
                      et(i, n, ye);
                    }
                  }
                  break;
                case 5:
                  hr(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Zc(ne);
                    continue;
                  }
              }
              me !== null ? (me.return = Q, he = me) : Zc(ne);
            }
            K = K.sibling;
          }
          e: for (K = null, ne = e; ; ) {
            if (ne.tag === 5) {
              if (K === null) {
                K = ne;
                try {
                  s = ne.stateNode, B ? (l = s.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (S = ne.stateNode, C = ne.memoizedProps.style, d = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Te("display", d));
                } catch (ye) {
                  et(e, e.return, ye);
                }
              }
            } else if (ne.tag === 6) {
              if (K === null) try {
                ne.stateNode.nodeValue = B ? "" : ne.memoizedProps;
              } catch (ye) {
                et(e, e.return, ye);
              }
            } else if ((ne.tag !== 22 && ne.tag !== 23 || ne.memoizedState === null || ne === e) && ne.child !== null) {
              ne.child.return = ne, ne = ne.child;
              continue;
            }
            if (ne === e) break e;
            for (; ne.sibling === null; ) {
              if (ne.return === null || ne.return === e) break e;
              K === ne && (K = null), ne = ne.return;
            }
            K === ne && (K = null), ne.sibling.return = ne.return, ne = ne.sibling;
          }
        }
        break;
      case 19:
        Ut(t, e), Zt(e), i & 4 && Yc(e);
        break;
      case 21:
        break;
      default:
        Ut(
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
            if (Uc(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (i.tag) {
          case 5:
            var s = i.stateNode;
            i.flags & 32 && ($(s, ""), i.flags &= -33);
            var l = Vc(e);
            Rs(e, l, s);
            break;
          case 3:
          case 4:
            var d = i.stateNode.containerInfo, S = Vc(e);
            Cs(e, S, d);
            break;
          default:
            throw Error(a(161));
        }
      } catch (C) {
        et(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pm(e, t, n) {
    he = e, Qc(e);
  }
  function Qc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; he !== null; ) {
      var s = he, l = s.child;
      if (s.tag === 22 && i) {
        var d = s.memoizedState !== null || vo;
        if (!d) {
          var S = s.alternate, C = S !== null && S.memoizedState !== null || vt;
          S = vo;
          var B = vt;
          if (vo = d, (vt = C) && !B) for (he = s; he !== null; ) d = he, C = d.child, d.tag === 22 && d.memoizedState !== null ? Jc(s) : C !== null ? (C.return = d, he = C) : Jc(s);
          for (; l !== null; ) he = l, Qc(l), l = l.sibling;
          he = s, vo = S, vt = B;
        }
        Kc(e);
      } else s.subtreeFlags & 8772 && l !== null ? (l.return = s, he = l) : Kc(e);
    }
  }
  function Kc(e) {
    for (; he !== null; ) {
      var t = he;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              vt || wo(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !vt) if (n === null) i.componentDidMount();
              else {
                var s = t.elementType === t.type ? n.memoizedProps : Wt(t.type, n.memoizedProps);
                i.componentDidUpdate(s, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && Zu(t, l, i);
              break;
            case 3:
              var d = t.updateQueue;
              if (d !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Zu(t, d, n);
              }
              break;
            case 5:
              var S = t.stateNode;
              if (n === null && t.flags & 4) {
                n = S;
                var C = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && n.focus();
                    break;
                  case "img":
                    C.src && (n.src = C.src);
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
                var B = t.alternate;
                if (B !== null) {
                  var K = B.memoizedState;
                  if (K !== null) {
                    var ne = K.dehydrated;
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
              throw Error(a(163));
          }
          vt || t.flags & 512 && Es(t);
        } catch (Q) {
          et(t, t.return, Q);
        }
      }
      if (t === e) {
        he = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function Zc(e) {
    for (; he !== null; ) {
      var t = he;
      if (t === e) {
        he = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function Jc(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              wo(4, t);
            } catch (C) {
              et(t, n, C);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var s = t.return;
              try {
                i.componentDidMount();
              } catch (C) {
                et(t, s, C);
              }
            }
            var l = t.return;
            try {
              Es(t);
            } catch (C) {
              et(t, l, C);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Es(t);
            } catch (C) {
              et(t, d, C);
            }
        }
      } catch (C) {
        et(t, t.return, C);
      }
      if (t === e) {
        he = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        S.return = t.return, he = S;
        break;
      }
      he = t.return;
    }
  }
  var Lm = Math.ceil, _o = g.ReactCurrentDispatcher, zs = g.ReactCurrentOwner, At = g.ReactCurrentBatchConfig, je = 0, ut = null, it = null, ft = 0, Lt = 0, gr = wn(0), at = 0, oi = null, Hn = 0, bo = 0, Os = 0, ai = null, kt = null, Ps = 0, yr = 1 / 0, ln = null, xo = !1, Ls = null, En = null, So = !1, Cn = null, ko = 0, si = 0, Ds = null, Eo = -1, Co = 0;
  function _t() {
    return je & 6 ? nt() : Eo !== -1 ? Eo : Eo = nt();
  }
  function Rn(e) {
    return e.mode & 1 ? je & 2 && ft !== 0 ? ft & -ft : mm.transition !== null ? (Co === 0 && (Co = Vl()), Co) : (e = He, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tu(e.type)), e) : 1;
  }
  function Vt(e, t, n, i) {
    if (50 < si) throw si = 0, Ds = null, Error(a(185));
    Lr(e, n, i), (!(je & 2) || e !== ut) && (e === ut && (!(je & 2) && (bo |= n), at === 4 && zn(e, ft)), Et(e, i), n === 1 && je === 0 && !(t.mode & 1) && (yr = nt() + 500, Ji && bn()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    mf(e, t);
    var i = Ti(e, e === ut ? ft : 0);
    if (i === 0) n !== null && Wl(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && Wl(n), t === 1) e.tag === 0 ? fm(td.bind(null, e)) : Fu(td.bind(null, e)), um(function() {
        !(je & 6) && bn();
      }), n = null;
      else {
        switch (Gl(i)) {
          case 1:
            n = da;
            break;
          case 4:
            n = $l;
            break;
          case 16:
            n = Pi;
            break;
          case 536870912:
            n = Ul;
            break;
          default:
            n = Pi;
        }
        n = ud(n, ed.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ed(e, t) {
    if (Eo = -1, Co = 0, je & 6) throw Error(a(327));
    var n = e.callbackNode;
    if (vr() && e.callbackNode !== n) return null;
    var i = Ti(e, e === ut ? ft : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = Ro(e, i);
    else {
      t = i;
      var s = je;
      je |= 2;
      var l = rd();
      (ut !== e || ft !== t) && (ln = null, yr = nt() + 500, $n(e, t));
      do
        try {
          Tm();
          break;
        } catch (S) {
          nd(e, S);
        }
      while (!0);
      Qa(), _o.current = l, je = s, it !== null ? t = 0 : (ut = null, ft = 0, t = at);
    }
    if (t !== 0) {
      if (t === 2 && (s = pa(e), s !== 0 && (i = s, t = Ms(e, s))), t === 1) throw n = oi, $n(e, 0), zn(e, i), Et(e, nt()), n;
      if (t === 6) zn(e, i);
      else {
        if (s = e.current.alternate, !(i & 30) && !Dm(s) && (t = Ro(e, i), t === 2 && (l = pa(e), l !== 0 && (i = l, t = Ms(e, l))), t === 1)) throw n = oi, $n(e, 0), zn(e, i), Et(e, nt()), n;
        switch (e.finishedWork = s, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Un(e, kt, ln);
            break;
          case 3:
            if (zn(e, i), (i & 130023424) === i && (t = Ps + 500 - nt(), 10 < t)) {
              if (Ti(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & i) !== i) {
                _t(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Ba(Un.bind(null, e, kt, ln), t);
              break;
            }
            Un(e, kt, ln);
            break;
          case 4:
            if (zn(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, s = -1; 0 < i; ) {
              var d = 31 - Ft(i);
              l = 1 << d, d = t[d], d > s && (s = d), i &= ~l;
            }
            if (i = s, i = nt() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Lm(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Ba(Un.bind(null, e, kt, ln), i);
              break;
            }
            Un(e, kt, ln);
            break;
          case 5:
            Un(e, kt, ln);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Et(e, nt()), e.callbackNode === n ? ed.bind(null, e) : null;
  }
  function Ms(e, t) {
    var n = ai;
    return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = Ro(e, t), e !== 2 && (t = kt, kt = n, t !== null && Ts(t)), e;
  }
  function Ts(e) {
    kt === null ? kt = e : kt.push.apply(kt, e);
  }
  function Dm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) {
          var s = n[i], l = s.getSnapshot;
          s = s.value;
          try {
            if (!qt(l(), s)) return !1;
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
  function zn(e, t) {
    for (t &= ~Os, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ft(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function td(e) {
    if (je & 6) throw Error(a(327));
    vr();
    var t = Ti(e, 0);
    if (!(t & 1)) return Et(e, nt()), null;
    var n = Ro(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = pa(e);
      i !== 0 && (t = i, n = Ms(e, i));
    }
    if (n === 1) throw n = oi, $n(e, 0), zn(e, t), Et(e, nt()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, kt, ln), Et(e, nt()), null;
  }
  function Ns(e, t) {
    var n = je;
    je |= 1;
    try {
      return e(t);
    } finally {
      je = n, je === 0 && (yr = nt() + 500, Ji && bn());
    }
  }
  function Wn(e) {
    Cn !== null && Cn.tag === 0 && !(je & 6) && vr();
    var t = je;
    je |= 1;
    var n = At.transition, i = He;
    try {
      if (At.transition = null, He = 1, e) return e();
    } finally {
      He = i, At.transition = n, je = t, !(je & 6) && bn();
    }
  }
  function As() {
    Lt = gr.current, Ye(gr);
  }
  function $n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, lm(n)), it !== null) for (n = it.return; n !== null; ) {
      var i = n;
      switch (Ua(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ki();
          break;
        case 3:
          fr(), Ye(bt), Ye(ht), is();
          break;
        case 5:
          ns(i);
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
          Ka(i.type._context);
          break;
        case 22:
        case 23:
          As();
      }
      n = n.return;
    }
    if (ut = e, it = e = On(e.current, null), ft = Lt = t, at = 0, oi = null, Os = bo = Hn = 0, kt = ai = null, Bn !== null) {
      for (t = 0; t < Bn.length; t++) if (n = Bn[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var s = i.next, l = n.pending;
        if (l !== null) {
          var d = l.next;
          l.next = s, i.next = d;
        }
        n.pending = i;
      }
      Bn = null;
    }
    return e;
  }
  function nd(e, t) {
    do {
      var n = it;
      try {
        if (Qa(), uo.current = mo, co) {
          for (var i = Je.memoizedState; i !== null; ) {
            var s = i.queue;
            s !== null && (s.pending = null), i = i.next;
          }
          co = !1;
        }
        if (qn = 0, lt = ot = Je = null, Jr = !1, ei = 0, zs.current = null, n === null || n.return === null) {
          at = 1, oi = t, it = null;
          break;
        }
        e: {
          var l = e, d = n.return, S = n, C = t;
          if (t = ft, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var B = C, K = S, ne = K.tag;
            if (!(K.mode & 1) && (ne === 0 || ne === 11 || ne === 15)) {
              var Q = K.alternate;
              Q ? (K.updateQueue = Q.updateQueue, K.memoizedState = Q.memoizedState, K.lanes = Q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var me = Rc(d);
            if (me !== null) {
              me.flags &= -257, zc(me, d, S, l, t), me.mode & 1 && Cc(l, B, t), t = me, C = B;
              var ge = t.updateQueue;
              if (ge === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(C), t.updateQueue = ye;
              } else ge.add(C);
              break e;
            } else {
              if (!(t & 1)) {
                Cc(l, B, t), Is();
                break e;
              }
              C = Error(a(426));
            }
          } else if (Ke && S.mode & 1) {
            var rt = Rc(d);
            if (rt !== null) {
              !(rt.flags & 65536) && (rt.flags |= 256), zc(rt, d, S, l, t), Ya(mr(C, S));
              break e;
            }
          }
          l = C = mr(C, S), at !== 4 && (at = 2), ai === null ? ai = [l] : ai.push(l), l = d;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var A = kc(l, C, t);
                Ku(l, A);
                break e;
              case 1:
                S = C;
                var D = l.type, j = l.stateNode;
                if (!(l.flags & 128) && (typeof D.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (En === null || !En.has(j)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var ae = Ec(l, S, t);
                  Ku(l, ae);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        od(n);
      } catch (we) {
        t = we, it === n && n !== null && (it = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rd() {
    var e = _o.current;
    return _o.current = mo, e === null ? mo : e;
  }
  function Is() {
    (at === 0 || at === 3 || at === 2) && (at = 4), ut === null || !(Hn & 268435455) && !(bo & 268435455) || zn(ut, ft);
  }
  function Ro(e, t) {
    var n = je;
    je |= 2;
    var i = rd();
    (ut !== e || ft !== t) && (ln = null, $n(e, t));
    do
      try {
        Mm();
        break;
      } catch (s) {
        nd(e, s);
      }
    while (!0);
    if (Qa(), je = n, _o.current = i, it !== null) throw Error(a(261));
    return ut = null, ft = 0, at;
  }
  function Mm() {
    for (; it !== null; ) id(it);
  }
  function Tm() {
    for (; it !== null && !of(); ) id(it);
  }
  function id(e) {
    var t = ld(e.alternate, e, Lt);
    e.memoizedProps = e.pendingProps, t === null ? od(e) : it = t, zs.current = null;
  }
  function od(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Rm(n, t), n !== null) {
          n.flags &= 32767, it = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          at = 6, it = null;
          return;
        }
      } else if (n = Cm(n, t, Lt), n !== null) {
        it = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        it = t;
        return;
      }
      it = t = e;
    } while (t !== null);
    at === 0 && (at = 5);
  }
  function Un(e, t, n) {
    var i = He, s = At.transition;
    try {
      At.transition = null, He = 1, Nm(e, t, n, i);
    } finally {
      At.transition = s, He = i;
    }
    return null;
  }
  function Nm(e, t, n, i) {
    do
      vr();
    while (Cn !== null);
    if (je & 6) throw Error(a(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (hf(e, l), e === ut && (it = ut = null, ft = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || So || (So = !0, ud(Pi, function() {
      return vr(), null;
    })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
      l = At.transition, At.transition = null;
      var d = He;
      He = 1;
      var S = je;
      je |= 4, zs.current = null, Om(e, n), Xc(n, e), tm(Ia), Ii = !!Aa, Ia = Aa = null, e.current = n, Pm(n), af(), je = S, He = d, At.transition = l;
    } else e.current = n;
    if (So && (So = !1, Cn = e, ko = s), l = e.pendingLanes, l === 0 && (En = null), uf(n.stateNode), Et(e, nt()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], i(s.value, { componentStack: s.stack, digest: s.digest });
    if (xo) throw xo = !1, e = Ls, Ls = null, e;
    return ko & 1 && e.tag !== 0 && vr(), l = e.pendingLanes, l & 1 ? e === Ds ? si++ : (si = 0, Ds = e) : si = 0, bn(), null;
  }
  function vr() {
    if (Cn !== null) {
      var e = Gl(ko), t = At.transition, n = He;
      try {
        if (At.transition = null, He = 16 > e ? 16 : e, Cn === null) var i = !1;
        else {
          if (e = Cn, Cn = null, ko = 0, je & 6) throw Error(a(331));
          var s = je;
          for (je |= 4, he = e.current; he !== null; ) {
            var l = he, d = l.child;
            if (he.flags & 16) {
              var S = l.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var B = S[C];
                  for (he = B; he !== null; ) {
                    var K = he;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ii(8, K, l);
                    }
                    var ne = K.child;
                    if (ne !== null) ne.return = K, he = ne;
                    else for (; he !== null; ) {
                      K = he;
                      var Q = K.sibling, me = K.return;
                      if ($c(K), K === B) {
                        he = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = me, he = Q;
                        break;
                      }
                      he = me;
                    }
                  }
                }
                var ge = l.alternate;
                if (ge !== null) {
                  var ye = ge.child;
                  if (ye !== null) {
                    ge.child = null;
                    do {
                      var rt = ye.sibling;
                      ye.sibling = null, ye = rt;
                    } while (ye !== null);
                  }
                }
                he = l;
              }
            }
            if (l.subtreeFlags & 2064 && d !== null) d.return = l, he = d;
            else e: for (; he !== null; ) {
              if (l = he, l.flags & 2048) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ii(9, l, l.return);
              }
              var A = l.sibling;
              if (A !== null) {
                A.return = l.return, he = A;
                break e;
              }
              he = l.return;
            }
          }
          var D = e.current;
          for (he = D; he !== null; ) {
            d = he;
            var j = d.child;
            if (d.subtreeFlags & 2064 && j !== null) j.return = d, he = j;
            else e: for (d = D; he !== null; ) {
              if (S = he, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, S);
                }
              } catch (we) {
                et(S, S.return, we);
              }
              if (S === d) {
                he = null;
                break e;
              }
              var ae = S.sibling;
              if (ae !== null) {
                ae.return = S.return, he = ae;
                break e;
              }
              he = S.return;
            }
          }
          if (je = s, bn(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
            Yt.onPostCommitFiberRoot(Li, e);
          } catch {
          }
          i = !0;
        }
        return i;
      } finally {
        He = n, At.transition = t;
      }
    }
    return !1;
  }
  function ad(e, t, n) {
    t = mr(n, t), t = kc(e, t, 1), e = Sn(e, t, 1), t = _t(), e !== null && (Lr(e, 1, t), Et(e, t));
  }
  function et(e, t, n) {
    if (e.tag === 3) ad(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ad(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (En === null || !En.has(i))) {
          e = mr(n, e), e = Ec(t, e, 1), t = Sn(t, e, 1), e = _t(), t !== null && (Lr(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Am(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = _t(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (ft & n) === n && (at === 4 || at === 3 && (ft & 130023424) === ft && 500 > nt() - Ps ? $n(e, 0) : Os |= n), Et(e, t);
  }
  function sd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mi, Mi <<= 1, !(Mi & 130023424) && (Mi = 4194304)) : t = 1);
    var n = _t();
    e = on(e, t), e !== null && (Lr(e, t, n), Et(e, n));
  }
  function Im(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), sd(e, n);
  }
  function jm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    i !== null && i.delete(t), sd(e, n);
  }
  var ld;
  ld = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || bt.current) St = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return St = !1, Em(e, t, n);
      St = !!(e.flags & 131072);
    }
    else St = !1, Ke && t.flags & 1048576 && qu(t, to, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        yo(e, t), e = t.pendingProps;
        var s = ar(t, ht.current);
        pr(t, n), s = ss(null, t, i, e, s, n);
        var l = ls();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(i) ? (l = !0, Zi(t)) : l = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, es(t), s.updater = ho, t.stateNode = s, s._reactInternals = t, ms(t, i, e, n), t = vs(null, t, i, !0, l, n)) : (t.tag = 0, Ke && l && $a(t), wt(null, t, s, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (yo(e, t), e = t.pendingProps, s = i._init, i = s(i._payload), t.type = i, s = t.tag = Fm(i), e = Wt(i, e), s) {
            case 0:
              t = ys(null, t, i, e, n);
              break e;
            case 1:
              t = Tc(null, t, i, e, n);
              break e;
            case 11:
              t = Oc(null, t, i, e, n);
              break e;
            case 14:
              t = Pc(null, t, i, Wt(i.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            i,
            ""
          ));
        }
        return t;
      case 0:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), ys(e, t, i, s, n);
      case 1:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), Tc(e, t, i, s, n);
      case 3:
        e: {
          if (Nc(t), e === null) throw Error(a(387));
          i = t.pendingProps, l = t.memoizedState, s = l.element, Qu(e, t), so(t, i, null, n);
          var d = t.memoizedState;
          if (i = d.element, l.isDehydrated) if (l = { element: i, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            s = mr(Error(a(423)), t), t = Ac(e, t, i, n, s);
            break e;
          } else if (i !== s) {
            s = mr(Error(a(424)), t), t = Ac(e, t, i, n, s);
            break e;
          } else for (Pt = vn(t.stateNode.containerInfo.firstChild), Ot = t, Ke = !0, Ht = null, n = Yu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ur(), i === s) {
              t = sn(e, t, n);
              break e;
            }
            wt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ju(t), e === null && Ga(t), i = t.type, s = t.pendingProps, l = e !== null ? e.memoizedProps : null, d = s.children, ja(i, s) ? d = null : l !== null && ja(i, l) && (t.flags |= 32), Mc(e, t), wt(e, t, d, n), t.child;
      case 6:
        return e === null && Ga(t), null;
      case 13:
        return Ic(e, t, n);
      case 4:
        return ts(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = cr(t, null, i, n) : wt(e, t, i, n), t.child;
      case 11:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), Oc(e, t, i, s, n);
      case 7:
        return wt(e, t, t.pendingProps, n), t.child;
      case 8:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, s = t.pendingProps, l = t.memoizedProps, d = s.value, Ve(io, i._currentValue), i._currentValue = d, l !== null) if (qt(l.value, d)) {
            if (l.children === s.children && !bt.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var S = l.dependencies;
            if (S !== null) {
              d = l.child;
              for (var C = S.firstContext; C !== null; ) {
                if (C.context === i) {
                  if (l.tag === 1) {
                    C = an(-1, n & -n), C.tag = 2;
                    var B = l.updateQueue;
                    if (B !== null) {
                      B = B.shared;
                      var K = B.pending;
                      K === null ? C.next = C : (C.next = K.next, K.next = C), B.pending = C;
                    }
                  }
                  l.lanes |= n, C = l.alternate, C !== null && (C.lanes |= n), Za(
                    l.return,
                    n,
                    t
                  ), S.lanes |= n;
                  break;
                }
                C = C.next;
              }
            } else if (l.tag === 10) d = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (d = l.return, d === null) throw Error(a(341));
              d.lanes |= n, S = d.alternate, S !== null && (S.lanes |= n), Za(d, n, t), d = l.sibling;
            } else d = l.child;
            if (d !== null) d.return = l;
            else for (d = l; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (l = d.sibling, l !== null) {
                l.return = d.return, d = l;
                break;
              }
              d = d.return;
            }
            l = d;
          }
          wt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, i = t.pendingProps.children, pr(t, n), s = Tt(s), i = i(s), t.flags |= 1, wt(e, t, i, n), t.child;
      case 14:
        return i = t.type, s = Wt(i, t.pendingProps), s = Wt(i.type, s), Pc(e, t, i, s, n);
      case 15:
        return Lc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), yo(e, t), t.tag = 1, xt(i) ? (e = !0, Zi(t)) : e = !1, pr(t, n), xc(t, i, s), ms(t, i, s, n), vs(null, t, i, !0, e, n);
      case 19:
        return Bc(e, t, n);
      case 22:
        return Dc(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function ud(e, t) {
    return Hl(e, t);
  }
  function Bm(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, i) {
    return new Bm(e, t, n, i);
  }
  function js(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Fm(e) {
    if (typeof e == "function") return js(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === se) return 11;
      if (e === X) return 14;
    }
    return 2;
  }
  function On(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function zo(e, t, n, i, s, l) {
    var d = 2;
    if (i = e, typeof e == "function") js(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case M:
        return Vn(n.children, s, l, t);
      case q:
        d = 8, s |= 8;
        break;
      case W:
        return e = It(12, n, t, s | 2), e.elementType = W, e.lanes = l, e;
      case oe:
        return e = It(13, n, t, s), e.elementType = oe, e.lanes = l, e;
      case pe:
        return e = It(19, n, t, s), e.elementType = pe, e.lanes = l, e;
      case re:
        return Oo(n, s, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case J:
            d = 10;
            break e;
          case ce:
            d = 9;
            break e;
          case se:
            d = 11;
            break e;
          case X:
            d = 14;
            break e;
          case ee:
            d = 16, i = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = It(d, n, t, s), t.elementType = e, t.type = i, t.lanes = l, t;
  }
  function Vn(e, t, n, i) {
    return e = It(7, e, i, t), e.lanes = n, e;
  }
  function Oo(e, t, n, i) {
    return e = It(22, e, i, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Bs(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function Fs(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function qm(e, t, n, i, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fa(0), this.expirationTimes = fa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fa(0), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function qs(e, t, n, i, s, l, d, S, C) {
    return e = new qm(e, t, n, S, C), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = It(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, es(l), e;
  }
  function Hm(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: k, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function cd(e) {
    if (!e) return _n;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(a(170));
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
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (xt(n)) return ju(e, n, t);
    }
    return t;
  }
  function dd(e, t, n, i, s, l, d, S, C) {
    return e = qs(n, i, !0, e, s, l, d, S, C), e.context = cd(null), n = e.current, i = _t(), s = Rn(n), l = an(i, s), l.callback = t ?? null, Sn(n, l, s), e.current.lanes = s, Lr(e, s, i), Et(e, i), e;
  }
  function Po(e, t, n, i) {
    var s = t.current, l = _t(), d = Rn(s);
    return n = cd(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(l, d), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Sn(s, t, d), e !== null && (Vt(e, s, d, l), ao(e, s, d)), d;
  }
  function Lo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function pd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Hs(e, t) {
    pd(e, t), (e = e.alternate) && pd(e, t);
  }
  function Wm() {
    return null;
  }
  var fd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ws(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = Ws.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Po(e, t, null, null);
  }, Do.prototype.unmount = Ws.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wn(function() {
        Po(null, e, null, null);
      }), t[en] = null;
    }
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ql();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Jl(e);
    }
  };
  function $s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function md() {
  }
  function $m(e, t, n, i, s) {
    if (s) {
      if (typeof i == "function") {
        var l = i;
        i = function() {
          var B = Lo(d);
          l.call(B);
        };
      }
      var d = dd(t, i, e, 0, null, !1, !1, "", md);
      return e._reactRootContainer = d, e[en] = d.current, Ur(e.nodeType === 8 ? e.parentNode : e), Wn(), d;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof i == "function") {
      var S = i;
      i = function() {
        var B = Lo(C);
        S.call(B);
      };
    }
    var C = qs(e, 0, !1, null, null, !1, !1, "", md);
    return e._reactRootContainer = C, e[en] = C.current, Ur(e.nodeType === 8 ? e.parentNode : e), Wn(function() {
      Po(t, C, n, i);
    }), C;
  }
  function To(e, t, n, i, s) {
    var l = n._reactRootContainer;
    if (l) {
      var d = l;
      if (typeof s == "function") {
        var S = s;
        s = function() {
          var C = Lo(d);
          S.call(C);
        };
      }
      Po(t, d, e, s);
    } else d = $m(n, t, e, s, i);
    return Lo(d);
  }
  Yl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Pr(t.pendingLanes);
          n !== 0 && (ma(t, n | 1), Et(t, nt()), !(je & 6) && (yr = nt() + 500, bn()));
        }
        break;
      case 13:
        Wn(function() {
          var i = on(e, 1);
          if (i !== null) {
            var s = _t();
            Vt(i, e, 1, s);
          }
        }), Hs(e, 1);
    }
  }, ha = function(e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var n = _t();
        Vt(t, e, 134217728, n);
      }
      Hs(e, 134217728);
    }
  }, Xl = function(e) {
    if (e.tag === 13) {
      var t = Rn(e), n = on(e, t);
      if (n !== null) {
        var i = _t();
        Vt(n, e, t, i);
      }
      Hs(e, t);
    }
  }, Ql = function() {
    return He;
  }, Kl = function(e, t) {
    var n = He;
    try {
      return He = e, t();
    } finally {
      He = n;
    }
  }, Xn = function(e, t, n) {
    switch (t) {
      case "input":
        if (T(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var i = n[t];
            if (i !== e && i.form === e.form) {
              var s = Qi(i);
              if (!s) throw Error(a(90));
              Me(i), T(i, s);
            }
          }
        }
        break;
      case "textarea":
        Le(e, n);
        break;
      case "select":
        t = n.value, t != null && ve(e, !!n.multiple, t, !1);
    }
  }, Ri = Ns, Al = Wn;
  var Um = { usingClientEntryPoint: !1, Events: [Yr, ir, Qi, Cr, Qn, Ns] }, li = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vm = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: g.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Fl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: li.findFiberByHostInstance || Wm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber) try {
      Li = No.inject(Vm), Yt = No;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um, Ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$s(t)) throw Error(a(200));
    return Hm(e, t, null, n);
  }, Ct.createRoot = function(e, t) {
    if (!$s(e)) throw Error(a(299));
    var n = !1, i = "", s = fd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = qs(e, 1, !1, null, null, n, !1, i, s), e[en] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new Ws(t);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Fl(t), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return Wn(e);
  }, Ct.hydrate = function(e, t, n) {
    if (!Mo(t)) throw Error(a(200));
    return To(null, e, t, !0, n);
  }, Ct.hydrateRoot = function(e, t, n) {
    if (!$s(e)) throw Error(a(405));
    var i = n != null && n.hydratedSources || null, s = !1, l = "", d = fd;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = dd(t, null, e, 1, n ?? null, s, !1, l, d), e[en] = t.current, Ur(e), i) for (e = 0; e < i.length; e++) n = i[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
      n,
      s
    );
    return new Do(t);
  }, Ct.render = function(e, t, n) {
    if (!Mo(t)) throw Error(a(200));
    return To(null, e, t, !1, n);
  }, Ct.unmountComponentAtNode = function(e) {
    if (!Mo(e)) throw Error(a(40));
    return e._reactRootContainer ? (Wn(function() {
      To(null, null, e, !1, function() {
        e._reactRootContainer = null, e[en] = null;
      });
    }), !0) : !1;
  }, Ct.unstable_batchedUpdates = Ns, Ct.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!Mo(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return To(e, t, n, !1, i);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var xd;
function Ko() {
  if (xd) return Gs.exports;
  xd = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), Gs.exports = eh(), Gs.exports;
}
var Sd;
function th() {
  if (Sd) return Ao;
  Sd = 1;
  var r = Ko();
  return Ao.createRoot = r.createRoot, Ao.hydrateRoot = r.hydrateRoot, Ao;
}
var nh = th();
const rh = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', ih = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", oh = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var mt = Rt(), Qs = { exports: {} }, ci = {}, bi = { exports: {} }, ah = bi.exports, kd;
function Rl() {
  return kd || (kd = 1, function(r, o) {
    (function(a, u) {
      u(o);
    })(ah, function(a) {
      function u(Z) {
        return function(Ee, Oe, Me, Fe, Ue, tt, R) {
          return Z(Ee, Oe, R);
        };
      }
      function c(Z) {
        return function(Ee, Oe, Me, Fe) {
          if (!Ee || !Oe || typeof Ee != "object" || typeof Oe != "object")
            return Z(Ee, Oe, Me, Fe);
          var Ue = Fe.get(Ee), tt = Fe.get(Oe);
          if (Ue && tt)
            return Ue === Oe && tt === Ee;
          Fe.set(Ee, Oe), Fe.set(Oe, Ee);
          var R = Z(Ee, Oe, Me, Fe);
          return Fe.delete(Ee), Fe.delete(Oe), R;
        };
      }
      function f(Z, fe) {
        var Ee = {};
        for (var Oe in Z)
          Ee[Oe] = Z[Oe];
        for (var Oe in fe)
          Ee[Oe] = fe[Oe];
        return Ee;
      }
      function y(Z) {
        return Z.constructor === Object || Z.constructor == null;
      }
      function m(Z) {
        return typeof Z.then == "function";
      }
      function h(Z, fe) {
        return Z === fe || Z !== Z && fe !== fe;
      }
      var x = "[object Arguments]", w = "[object Boolean]", P = "[object Date]", z = "[object RegExp]", V = "[object Map]", Y = "[object Number]", F = "[object Object]", O = "[object Set]", b = "[object String]", p = Object.prototype.toString;
      function v(Z) {
        var fe = Z.areArraysEqual, Ee = Z.areDatesEqual, Oe = Z.areMapsEqual, Me = Z.areObjectsEqual, Fe = Z.areRegExpsEqual, Ue = Z.areSetsEqual, tt = Z.createIsNestedEqual, R = tt(T);
        function T(N, G, ue) {
          if (N === G)
            return !0;
          if (!N || !G || typeof N != "object" || typeof G != "object")
            return N !== N && G !== G;
          if (y(N) && y(G))
            return Me(N, G, R, ue);
          var ve = Array.isArray(N), ke = Array.isArray(G);
          if (ve || ke)
            return ve === ke && fe(N, G, R, ue);
          var ze = p.call(N);
          return ze !== p.call(G) ? !1 : ze === P ? Ee(N, G, R, ue) : ze === z ? Fe(N, G, R, ue) : ze === V ? Oe(N, G, R, ue) : ze === O ? Ue(N, G, R, ue) : ze === F || ze === x ? m(N) || m(G) ? !1 : Me(N, G, R, ue) : ze === w || ze === Y || ze === b ? h(N.valueOf(), G.valueOf()) : !1;
        }
        return T;
      }
      function g(Z, fe, Ee, Oe) {
        var Me = Z.length;
        if (fe.length !== Me)
          return !1;
        for (; Me-- > 0; )
          if (!Ee(Z[Me], fe[Me], Me, Me, Z, fe, Oe))
            return !1;
        return !0;
      }
      var _ = c(g);
      function k(Z, fe) {
        return h(Z.valueOf(), fe.valueOf());
      }
      function M(Z, fe, Ee, Oe) {
        var Me = Z.size === fe.size;
        if (!Me)
          return !1;
        if (!Z.size)
          return !0;
        var Fe = {}, Ue = 0;
        return Z.forEach(function(tt, R) {
          if (Me) {
            var T = !1, N = 0;
            fe.forEach(function(G, ue) {
              !T && !Fe[N] && (T = Ee(R, ue, Ue, N, Z, fe, Oe) && Ee(tt, G, R, ue, Z, fe, Oe)) && (Fe[N] = !0), N++;
            }), Ue++, Me = T;
          }
        }), Me;
      }
      var q = c(M), W = "_owner", J = Object.prototype.hasOwnProperty;
      function ce(Z, fe, Ee, Oe) {
        var Me = Object.keys(Z), Fe = Me.length;
        if (Object.keys(fe).length !== Fe)
          return !1;
        for (var Ue; Fe-- > 0; ) {
          if (Ue = Me[Fe], Ue === W) {
            var tt = !!Z.$$typeof, R = !!fe.$$typeof;
            if ((tt || R) && tt !== R)
              return !1;
          }
          if (!J.call(fe, Ue) || !Ee(Z[Ue], fe[Ue], Ue, Ue, Z, fe, Oe))
            return !1;
        }
        return !0;
      }
      var se = c(ce);
      function oe(Z, fe) {
        return Z.source === fe.source && Z.flags === fe.flags;
      }
      function pe(Z, fe, Ee, Oe) {
        var Me = Z.size === fe.size;
        if (!Me)
          return !1;
        if (!Z.size)
          return !0;
        var Fe = {};
        return Z.forEach(function(Ue, tt) {
          if (Me) {
            var R = !1, T = 0;
            fe.forEach(function(N, G) {
              !R && !Fe[T] && (R = Ee(Ue, N, tt, G, Z, fe, Oe)) && (Fe[T] = !0), T++;
            }), Me = R;
          }
        }), Me;
      }
      var X = c(pe), ee = Object.freeze({
        areArraysEqual: g,
        areDatesEqual: k,
        areMapsEqual: M,
        areObjectsEqual: ce,
        areRegExpsEqual: oe,
        areSetsEqual: pe,
        createIsNestedEqual: u
      }), re = Object.freeze({
        areArraysEqual: _,
        areDatesEqual: k,
        areMapsEqual: q,
        areObjectsEqual: se,
        areRegExpsEqual: oe,
        areSetsEqual: X,
        createIsNestedEqual: u
      }), U = v(ee);
      function le(Z, fe) {
        return U(Z, fe, void 0);
      }
      var te = v(f(ee, { createIsNestedEqual: function() {
        return h;
      } }));
      function L(Z, fe) {
        return te(Z, fe, void 0);
      }
      var H = v(re);
      function _e(Z, fe) {
        return H(Z, fe, /* @__PURE__ */ new WeakMap());
      }
      var Se = v(f(re, {
        createIsNestedEqual: function() {
          return h;
        }
      }));
      function Re(Z, fe) {
        return Se(Z, fe, /* @__PURE__ */ new WeakMap());
      }
      function Pe(Z) {
        return v(f(ee, Z(ee)));
      }
      function Ie(Z) {
        var fe = v(f(re, Z(re)));
        return function(Ee, Oe, Me) {
          return Me === void 0 && (Me = /* @__PURE__ */ new WeakMap()), fe(Ee, Oe, Me);
        };
      }
      a.circularDeepEqual = _e, a.circularShallowEqual = Re, a.createCustomCircularEqual = Ie, a.createCustomEqual = Pe, a.deepEqual = le, a.sameValueZeroEqual = h, a.shallowEqual = L, Object.defineProperty(a, "__esModule", { value: !0 });
    });
  }(bi, bi.exports)), bi.exports;
}
var Io = { exports: {} }, Ed;
function ia() {
  if (Ed) return Io.exports;
  Ed = 1;
  function r(a) {
    var u, c, f = "";
    if (typeof a == "string" || typeof a == "number") f += a;
    else if (typeof a == "object") if (Array.isArray(a)) {
      var y = a.length;
      for (u = 0; u < y; u++) a[u] && (c = r(a[u])) && (f && (f += " "), f += c);
    } else for (c in a) a[c] && (f && (f += " "), f += c);
    return f;
  }
  function o() {
    for (var a, u, c = 0, f = "", y = arguments.length; c < y; c++) (a = arguments[c]) && (u = r(a)) && (f && (f += " "), f += u);
    return f;
  }
  return Io.exports = o, Io.exports.clsx = o, Io.exports;
}
var Ae = {}, Ks, Cd;
function sh() {
  return Cd || (Cd = 1, Ks = function(o, a, u) {
    return o === a ? !0 : o.className === a.className && u(o.style, a.style) && o.width === a.width && o.autoSize === a.autoSize && o.cols === a.cols && o.draggableCancel === a.draggableCancel && o.draggableHandle === a.draggableHandle && u(o.verticalCompact, a.verticalCompact) && u(o.compactType, a.compactType) && u(o.layout, a.layout) && u(o.margin, a.margin) && u(o.containerPadding, a.containerPadding) && o.rowHeight === a.rowHeight && o.maxRows === a.maxRows && o.isBounded === a.isBounded && o.isDraggable === a.isDraggable && o.isResizable === a.isResizable && o.allowOverlap === a.allowOverlap && o.preventCollision === a.preventCollision && o.useCSSTransforms === a.useCSSTransforms && o.transformScale === a.transformScale && o.isDroppable === a.isDroppable && u(o.resizeHandles, a.resizeHandles) && u(o.resizeHandle, a.resizeHandle) && o.onLayoutChange === a.onLayoutChange && o.onDragStart === a.onDragStart && o.onDrag === a.onDrag && o.onDragStop === a.onDragStop && o.onResizeStart === a.onResizeStart && o.onResize === a.onResize && o.onResizeStop === a.onResizeStop && o.onDrop === a.onDrop && u(o.droppingItem, a.droppingItem) && u(o.innerRef, a.innerRef);
  }), Ks;
}
var Rd;
function kr() {
  if (Rd) return Ae;
  Rd = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.bottom = h, Ae.childrenEqual = V, Ae.cloneLayout = x, Ae.cloneLayoutItem = z, Ae.collides = F, Ae.compact = O, Ae.compactItem = v, Ae.compactType = Fe, Ae.correctBounds = g, Ae.fastPositionEqual = Y, Ae.fastRGLPropsEqual = void 0, Ae.getAllCollisions = M, Ae.getFirstCollision = k, Ae.getLayoutItem = _, Ae.getStatics = q, Ae.modifyLayout = w, Ae.moveElement = W, Ae.moveElementAwayFromCollision = J, Ae.noop = void 0, Ae.perc = ce, Ae.resizeItemInDirection = Re, Ae.setTopLeft = Ie, Ae.setTransform = Pe, Ae.sortLayoutItems = Z, Ae.sortLayoutItemsByColRow = Ee, Ae.sortLayoutItemsByRowCol = fe, Ae.synchronizeLayoutWithChildren = Oe, Ae.validateLayout = Me, Ae.withLayoutItem = P;
  var r = /* @__PURE__ */ Rl(), o = a(Rt());
  function a(R) {
    return R && R.__esModule ? R : { default: R };
  }
  function u(R, T) {
    var N = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var G = Object.getOwnPropertySymbols(R);
      T && (G = G.filter(function(ue) {
        return Object.getOwnPropertyDescriptor(R, ue).enumerable;
      })), N.push.apply(N, G);
    }
    return N;
  }
  function c(R) {
    for (var T = 1; T < arguments.length; T++) {
      var N = arguments[T] != null ? arguments[T] : {};
      T % 2 ? u(Object(N), !0).forEach(function(G) {
        f(R, G, N[G]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(N)) : u(Object(N)).forEach(function(G) {
        Object.defineProperty(R, G, Object.getOwnPropertyDescriptor(N, G));
      });
    }
    return R;
  }
  function f(R, T, N) {
    return (T = y(T)) in R ? Object.defineProperty(R, T, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : R[T] = N, R;
  }
  function y(R) {
    var T = m(R, "string");
    return typeof T == "symbol" ? T : T + "";
  }
  function m(R, T) {
    if (typeof R != "object" || !R) return R;
    var N = R[Symbol.toPrimitive];
    if (N !== void 0) {
      var G = N.call(R, T);
      if (typeof G != "object") return G;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (T === "string" ? String : Number)(R);
  }
  function h(R) {
    let T = 0, N;
    for (let G = 0, ue = R.length; G < ue; G++)
      N = R[G].y + R[G].h, N > T && (T = N);
    return T;
  }
  function x(R) {
    const T = Array(R.length);
    for (let N = 0, G = R.length; N < G; N++)
      T[N] = z(R[N]);
    return T;
  }
  function w(R, T) {
    const N = Array(R.length);
    for (let G = 0, ue = R.length; G < ue; G++)
      T.i === R[G].i ? N[G] = T : N[G] = R[G];
    return N;
  }
  function P(R, T, N) {
    let G = _(R, T);
    return G ? (G = N(z(G)), R = w(R, G), [R, G]) : [R, null];
  }
  function z(R) {
    return {
      w: R.w,
      h: R.h,
      x: R.x,
      y: R.y,
      i: R.i,
      minW: R.minW,
      maxW: R.maxW,
      minH: R.minH,
      maxH: R.maxH,
      moved: !!R.moved,
      static: !!R.static,
      // These can be null/undefined
      isDraggable: R.isDraggable,
      isResizable: R.isResizable,
      resizeHandles: R.resizeHandles,
      isBounded: R.isBounded
    };
  }
  function V(R, T) {
    return (0, r.deepEqual)(o.default.Children.map(R, (N) => N?.key), o.default.Children.map(T, (N) => N?.key)) && (0, r.deepEqual)(o.default.Children.map(R, (N) => N?.props["data-grid"]), o.default.Children.map(T, (N) => N?.props["data-grid"]));
  }
  Ae.fastRGLPropsEqual = sh();
  function Y(R, T) {
    return R.left === T.left && R.top === T.top && R.width === T.width && R.height === T.height;
  }
  function F(R, T) {
    return !(R.i === T.i || R.x + R.w <= T.x || R.x >= T.x + T.w || R.y + R.h <= T.y || R.y >= T.y + T.h);
  }
  function O(R, T, N, G) {
    const ue = q(R);
    let ve = h(ue);
    const ke = Z(R, T), ze = Array(R.length);
    for (let Le = 0, We = ke.length; Le < We; Le++) {
      let Xe = z(ke[Le]);
      Xe.static || (Xe = v(ue, Xe, T, N, ke, G, ve), ve = Math.max(ve, Xe.y + Xe.h), ue.push(Xe)), ze[R.indexOf(ke[Le])] = Xe, Xe.moved = !1;
    }
    return ze;
  }
  const b = {
    x: "w",
    y: "h"
  };
  function p(R, T, N, G) {
    const ue = b[G];
    T[G] += 1;
    const ve = R.map((ke) => ke.i).indexOf(T.i);
    for (let ke = ve + 1; ke < R.length; ke++) {
      const ze = R[ke];
      if (!ze.static) {
        if (ze.y > T.y + T.h) break;
        F(T, ze) && p(R, ze, N + T[ue], G);
      }
    }
    T[G] = N;
  }
  function v(R, T, N, G, ue, ve, ke) {
    const ze = N === "vertical", Le = N === "horizontal";
    if (ze)
      for (typeof ke == "number" ? T.y = Math.min(ke, T.y) : T.y = Math.min(h(R), T.y); T.y > 0 && !k(R, T); )
        T.y--;
    else if (Le)
      for (; T.x > 0 && !k(R, T); )
        T.x--;
    let We;
    for (; (We = k(R, T)) && !(N === null && ve); )
      if (Le ? p(ue, T, We.x + We.w, "x") : p(ue, T, We.y + We.h, "y"), Le && T.x + T.w > G)
        for (T.x = G - T.w, T.y++; T.x > 0 && !k(R, T); )
          T.x--;
    return T.y = Math.max(T.y, 0), T.x = Math.max(T.x, 0), T;
  }
  function g(R, T) {
    const N = q(R);
    for (let G = 0, ue = R.length; G < ue; G++) {
      const ve = R[G];
      if (ve.x + ve.w > T.cols && (ve.x = T.cols - ve.w), ve.x < 0 && (ve.x = 0, ve.w = T.cols), !ve.static) N.push(ve);
      else
        for (; k(N, ve); )
          ve.y++;
    }
    return R;
  }
  function _(R, T) {
    for (let N = 0, G = R.length; N < G; N++)
      if (R[N].i === T) return R[N];
  }
  function k(R, T) {
    for (let N = 0, G = R.length; N < G; N++)
      if (F(R[N], T)) return R[N];
  }
  function M(R, T) {
    return R.filter((N) => F(N, T));
  }
  function q(R) {
    return R.filter((T) => T.static);
  }
  function W(R, T, N, G, ue, ve, ke, ze, Le) {
    if (T.static && T.isDraggable !== !0 || T.y === G && T.x === N) return R;
    "Moving element ".concat(T.i, " to [").concat(String(N), ",").concat(String(G), "] from [").concat(T.x, ",").concat(T.y, "]");
    const We = T.x, Xe = T.y;
    typeof N == "number" && (T.x = N), typeof G == "number" && (T.y = G), T.moved = !0;
    let st = Z(R, ke);
    (ke === "vertical" && typeof G == "number" ? Xe >= G : ke === "horizontal" && typeof N == "number" ? We >= N : !1) && (st = st.reverse());
    const I = M(st, T), $ = I.length > 0;
    if ($ && Le)
      return x(R);
    if ($ && ve)
      return "Collision prevented on ".concat(T.i, ", reverting."), T.x = We, T.y = Xe, T.moved = !1, R;
    for (let ie = 0, de = I.length; ie < de; ie++) {
      const Te = I[ie];
      "Resolving collision between ".concat(T.i, " at [").concat(T.x, ",").concat(T.y, "] and ").concat(Te.i, " at [").concat(Te.x, ",").concat(Te.y, "]"), !Te.moved && (Te.static ? R = J(R, Te, T, ue, ke) : R = J(R, T, Te, ue, ke));
    }
    return R;
  }
  function J(R, T, N, G, ue, ve) {
    const ke = ue === "horizontal", ze = ue === "vertical", Le = T.static;
    if (G) {
      G = !1;
      const st = {
        x: ke ? Math.max(T.x - N.w, 0) : N.x,
        y: ze ? Math.max(T.y - N.h, 0) : N.y,
        w: N.w,
        h: N.h,
        i: "-1"
      }, E = k(R, st), I = E && E.y + E.h > T.y, $ = E && T.x + T.w > E.x;
      if (E) {
        if (I && ze)
          return W(R, N, void 0, N.y + 1, G, Le, ue);
        if (I && ue == null)
          return T.y = N.y, N.y = N.y + N.h, R;
        if ($ && ke)
          return W(R, T, N.x, void 0, G, Le, ue);
      } else return "Doing reverse collision on ".concat(N.i, " up to [").concat(st.x, ",").concat(st.y, "]."), W(R, N, ke ? st.x : void 0, ze ? st.y : void 0, G, Le, ue);
    }
    const We = ke ? N.x + 1 : void 0, Xe = ze ? N.y + 1 : void 0;
    return We == null && Xe == null ? R : W(R, N, ke ? N.x + 1 : void 0, ze ? N.y + 1 : void 0, G, Le, ue);
  }
  function ce(R) {
    return R * 100 + "%";
  }
  const se = (R, T, N, G) => R + N > G ? T : N, oe = (R, T, N) => R < 0 ? T : N, pe = (R) => Math.max(0, R), X = (R) => Math.max(0, R), ee = (R, T, N) => {
    let {
      left: G,
      height: ue,
      width: ve
    } = T;
    const ke = R.top - (ue - R.height);
    return {
      left: G,
      width: ve,
      height: oe(ke, R.height, ue),
      top: X(ke)
    };
  }, re = (R, T, N) => {
    let {
      top: G,
      left: ue,
      height: ve,
      width: ke
    } = T;
    return {
      top: G,
      height: ve,
      width: se(R.left, R.width, ke, N),
      left: pe(ue)
    };
  }, U = (R, T, N) => {
    let {
      top: G,
      height: ue,
      width: ve
    } = T;
    const ke = R.left - (ve - R.width);
    return {
      height: ue,
      width: ke < 0 ? R.width : se(R.left, R.width, ve, N),
      top: X(G),
      left: pe(ke)
    };
  }, le = (R, T, N) => {
    let {
      top: G,
      left: ue,
      height: ve,
      width: ke
    } = T;
    return {
      width: ke,
      left: ue,
      height: oe(G, R.height, ve),
      top: X(G)
    };
  }, Se = {
    n: ee,
    ne: function() {
      return ee(arguments.length <= 0 ? void 0 : arguments[0], re(...arguments));
    },
    e: re,
    se: function() {
      return le(arguments.length <= 0 ? void 0 : arguments[0], re(...arguments));
    },
    s: le,
    sw: function() {
      return le(arguments.length <= 0 ? void 0 : arguments[0], U(...arguments));
    },
    w: U,
    nw: function() {
      return ee(arguments.length <= 0 ? void 0 : arguments[0], U(...arguments));
    }
  };
  function Re(R, T, N, G) {
    const ue = Se[R];
    return ue ? ue(T, c(c({}, T), N), G) : N;
  }
  function Pe(R) {
    let {
      top: T,
      left: N,
      width: G,
      height: ue
    } = R;
    const ve = "translate(".concat(N, "px,").concat(T, "px)");
    return {
      transform: ve,
      WebkitTransform: ve,
      MozTransform: ve,
      msTransform: ve,
      OTransform: ve,
      width: "".concat(G, "px"),
      height: "".concat(ue, "px"),
      position: "absolute"
    };
  }
  function Ie(R) {
    let {
      top: T,
      left: N,
      width: G,
      height: ue
    } = R;
    return {
      top: "".concat(T, "px"),
      left: "".concat(N, "px"),
      width: "".concat(G, "px"),
      height: "".concat(ue, "px"),
      position: "absolute"
    };
  }
  function Z(R, T) {
    return T === "horizontal" ? Ee(R) : T === "vertical" ? fe(R) : R;
  }
  function fe(R) {
    return R.slice(0).sort(function(T, N) {
      return T.y > N.y || T.y === N.y && T.x > N.x ? 1 : T.y === N.y && T.x === N.x ? 0 : -1;
    });
  }
  function Ee(R) {
    return R.slice(0).sort(function(T, N) {
      return T.x > N.x || T.x === N.x && T.y > N.y ? 1 : -1;
    });
  }
  function Oe(R, T, N, G, ue) {
    R = R || [];
    const ve = [];
    o.default.Children.forEach(T, (ze) => {
      if (ze?.key == null) return;
      const Le = _(R, String(ze.key)), We = ze.props["data-grid"];
      Le && We == null ? ve.push(z(Le)) : We ? ve.push(z(c(c({}, We), {}, {
        i: ze.key
      }))) : ve.push(z({
        w: 1,
        h: 1,
        x: 0,
        y: h(ve),
        i: String(ze.key)
      }));
    });
    const ke = g(ve, {
      cols: N
    });
    return ue ? ke : O(ke, G, N);
  }
  function Me(R) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const N = ["x", "y", "w", "h"];
    if (!Array.isArray(R)) throw new Error(T + " must be an array!");
    for (let G = 0, ue = R.length; G < ue; G++) {
      const ve = R[G];
      for (let ke = 0; ke < N.length; ke++) {
        const ze = N[ke], Le = ve[ze];
        if (typeof Le != "number" || Number.isNaN(Le))
          throw new Error("ReactGridLayout: ".concat(T, "[").concat(G, "].").concat(ze, " must be a number! Received: ").concat(Le, " (").concat(typeof Le, ")"));
      }
      if (typeof ve.i < "u" && typeof ve.i != "string")
        throw new Error("ReactGridLayout: ".concat(T, "[").concat(G, "].i must be a string! Received: ").concat(ve.i, " (").concat(typeof ve.i, ")"));
    }
  }
  function Fe(R) {
    const {
      verticalCompact: T,
      compactType: N
    } = R || {};
    return T === !1 ? null : N;
  }
  function Ue() {
  }
  const tt = () => {
  };
  return Ae.noop = tt, Ae;
}
var un = {}, zd;
function zl() {
  if (zd) return un;
  zd = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.calcGridColWidth = r, un.calcGridItemPosition = a, un.calcGridItemWHPx = o, un.calcWH = c, un.calcXY = u, un.clamp = f;
  function r(y) {
    const {
      margin: m,
      containerPadding: h,
      containerWidth: x,
      cols: w
    } = y;
    return (x - m[0] * (w - 1) - h[0] * 2) / w;
  }
  function o(y, m, h) {
    return Number.isFinite(y) ? Math.round(m * y + Math.max(0, y - 1) * h) : y;
  }
  function a(y, m, h, x, w, P) {
    const {
      margin: z,
      containerPadding: V,
      rowHeight: Y
    } = y, F = r(y), O = {};
    return P && P.resizing ? (O.width = Math.round(P.resizing.width), O.height = Math.round(P.resizing.height)) : (O.width = o(x, F, z[0]), O.height = o(w, Y, z[1])), P && P.dragging ? (O.top = Math.round(P.dragging.top), O.left = Math.round(P.dragging.left)) : P && P.resizing && typeof P.resizing.top == "number" && typeof P.resizing.left == "number" ? (O.top = Math.round(P.resizing.top), O.left = Math.round(P.resizing.left)) : (O.top = Math.round((Y + z[1]) * h + V[1]), O.left = Math.round((F + z[0]) * m + V[0])), O;
  }
  function u(y, m, h, x, w) {
    const {
      margin: P,
      containerPadding: z,
      cols: V,
      rowHeight: Y,
      maxRows: F
    } = y, O = r(y);
    let b = Math.round((h - z[0]) / (O + P[0])), p = Math.round((m - z[1]) / (Y + P[1]));
    return b = f(b, 0, V - x), p = f(p, 0, F - w), {
      x: b,
      y: p
    };
  }
  function c(y, m, h, x, w, P) {
    const {
      margin: z,
      maxRows: V,
      cols: Y,
      rowHeight: F
    } = y, O = r(y);
    let b = Math.round((m + z[0]) / (O + z[0])), p = Math.round((h + z[1]) / (F + z[1])), v = f(b, 0, Y - x), g = f(p, 0, V - w);
    return ["sw", "w", "nw"].indexOf(P) !== -1 && (v = f(b, 0, Y)), ["nw", "n", "ne"].indexOf(P) !== -1 && (g = f(p, 0, V)), {
      w: v,
      h: g
    };
  }
  function f(y, m, h) {
    return Math.max(Math.min(y, h), m);
  }
  return un;
}
var di = {}, Zs = { exports: {} }, Js, Od;
function lh() {
  if (Od) return Js;
  Od = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Js = r, Js;
}
var el, Pd;
function uh() {
  if (Pd) return el;
  Pd = 1;
  var r = /* @__PURE__ */ lh();
  function o() {
  }
  function a() {
  }
  return a.resetWarningCache = o, el = function() {
    function u(y, m, h, x, w, P) {
      if (P !== r) {
        var z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw z.name = "Invariant Violation", z;
      }
    }
    u.isRequired = u;
    function c() {
      return u;
    }
    var f = {
      array: u,
      bigint: u,
      bool: u,
      func: u,
      number: u,
      object: u,
      string: u,
      symbol: u,
      any: u,
      arrayOf: c,
      element: u,
      elementType: u,
      instanceOf: c,
      node: u,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: o
    };
    return f.PropTypes = f, f;
  }, el;
}
var Ld;
function Ln() {
  return Ld || (Ld = 1, Zs.exports = /* @__PURE__ */ uh()()), Zs.exports;
}
var pi = { exports: {} }, tl, Dd;
function ch() {
  if (Dd) return tl;
  Dd = 1;
  var r = Object.create, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyNames, c = Object.getPrototypeOf, f = Object.prototype.hasOwnProperty, y = (E, I) => {
    for (var $ in I)
      o(E, $, { get: I[$], enumerable: !0 });
  }, m = (E, I, $, ie) => {
    if (I && typeof I == "object" || typeof I == "function")
      for (let de of u(I))
        !f.call(E, de) && de !== $ && o(E, de, { get: () => I[de], enumerable: !(ie = a(I, de)) || ie.enumerable });
    return E;
  }, h = (E, I, $) => ($ = E != null ? r(c(E)) : {}, m(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !E || !E.__esModule ? o($, "default", { value: E, enumerable: !0 }) : $,
    E
  )), x = (E) => m(o({}, "__esModule", { value: !0 }), E), w = {};
  y(w, {
    DraggableCore: () => Xe,
    default: () => st
  }), tl = x(w);
  var P = h(Rt()), z = h(/* @__PURE__ */ Ln()), V = h(Ko()), Y = ia();
  function F(E, I) {
    for (let $ = 0, ie = E.length; $ < ie; $++)
      if (I.apply(I, [E[$], $, E])) return E[$];
  }
  function O(E) {
    return typeof E == "function" || Object.prototype.toString.call(E) === "[object Function]";
  }
  function b(E) {
    return typeof E == "number" && !isNaN(E);
  }
  function p(E) {
    return parseInt(E, 10);
  }
  function v(E, I, $) {
    if (E[I])
      return new Error(`Invalid prop ${I} passed to ${$} - do not set this, set it on the child.`);
  }
  var g = ["Moz", "Webkit", "O", "ms"];
  function _(E = "transform") {
    var I, $;
    if (typeof window > "u") return "";
    const ie = ($ = (I = window.document) == null ? void 0 : I.documentElement) == null ? void 0 : $.style;
    if (!ie || E in ie) return "";
    for (let de = 0; de < g.length; de++)
      if (k(E, g[de]) in ie) return g[de];
    return "";
  }
  function k(E, I) {
    return I ? `${I}${M(E)}` : E;
  }
  function M(E) {
    let I = "", $ = !0;
    for (let ie = 0; ie < E.length; ie++)
      $ ? (I += E[ie].toUpperCase(), $ = !1) : E[ie] === "-" ? $ = !0 : I += E[ie];
    return I;
  }
  var q = _(), W = "";
  function J(E, I) {
    var $;
    W || (W = ($ = F([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(de) {
      return O(E[de]);
    })) != null ? $ : "");
    const ie = E[W];
    return O(ie) ? !!ie.call(E, I) : !1;
  }
  function ce(E, I, $) {
    let ie = E;
    do {
      if (J(ie, I)) return !0;
      if (ie === $) return !1;
      ie = ie.parentNode;
    } while (ie);
    return !1;
  }
  function se(E, I, $, ie) {
    if (!E) return;
    const de = { capture: !0, ...ie }, Te = $;
    E.addEventListener ? E.addEventListener(I, Te, de) : E.attachEvent ? E.attachEvent("on" + I, Te) : E["on" + I] = Te;
  }
  function oe(E, I, $, ie) {
    if (!E) return;
    const de = { capture: !0, ...ie }, Te = $;
    E.removeEventListener ? E.removeEventListener(I, Te, de) : E.detachEvent ? E.detachEvent("on" + I, Te) : E["on" + I] = null;
  }
  function pe(E) {
    let I = E.clientHeight;
    const $ = E.ownerDocument.defaultView.getComputedStyle(E);
    return I += p($.borderTopWidth), I += p($.borderBottomWidth), I;
  }
  function X(E) {
    let I = E.clientWidth;
    const $ = E.ownerDocument.defaultView.getComputedStyle(E);
    return I += p($.borderLeftWidth), I += p($.borderRightWidth), I;
  }
  function ee(E) {
    let I = E.clientHeight;
    const $ = E.ownerDocument.defaultView.getComputedStyle(E);
    return I -= p($.paddingTop), I -= p($.paddingBottom), I;
  }
  function re(E) {
    let I = E.clientWidth;
    const $ = E.ownerDocument.defaultView.getComputedStyle(E);
    return I -= p($.paddingLeft), I -= p($.paddingRight), I;
  }
  function U(E, I, $) {
    const de = I === I.ownerDocument.body ? { left: 0, top: 0 } : I.getBoundingClientRect(), Te = (E.clientX + I.scrollLeft - de.left) / $, Ne = (E.clientY + I.scrollTop - de.top) / $;
    return { x: Te, y: Ne };
  }
  function le(E, I) {
    const $ = L(E, I, "px");
    return { [k("transform", q)]: $ };
  }
  function te(E, I) {
    return L(E, I, "");
  }
  function L({ x: E, y: I }, $, ie) {
    let de = `translate(${E}${ie},${I}${ie})`;
    if ($) {
      const Te = `${typeof $.x == "string" ? $.x : $.x + ie}`, Ne = `${typeof $.y == "string" ? $.y : $.y + ie}`;
      de = `translate(${Te}, ${Ne})` + de;
    }
    return de;
  }
  function H(E, I) {
    return E.targetTouches && F(E.targetTouches, ($) => I === $.identifier) || E.changedTouches && F(E.changedTouches, ($) => I === $.identifier);
  }
  function _e(E) {
    if (E.targetTouches && E.targetTouches[0]) return E.targetTouches[0].identifier;
    if (E.changedTouches && E.changedTouches[0]) return E.changedTouches[0].identifier;
  }
  function Se() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Re(E, I) {
    if (!E) return;
    let $ = E.getElementById("react-draggable-style-el");
    if (!$) {
      $ = E.createElement("style"), $.type = "text/css", $.id = "react-draggable-style-el";
      const ie = I ?? Se();
      ie && $.setAttribute("nonce", ie), $.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, $.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, E.getElementsByTagName("head")[0].appendChild($);
    }
    E.body && Z(E.body, "react-draggable-transparent-selection");
  }
  function Pe(E) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Ie(E);
    }) : Ie(E);
  }
  function Ie(E) {
    if (E)
      try {
        E.body && fe(E.body, "react-draggable-transparent-selection");
        const I = E.selection;
        if (I)
          I.empty();
        else {
          const $ = (E.defaultView || window).getSelection();
          $ && $.type !== "Caret" && $.removeAllRanges();
        }
      } catch {
      }
  }
  function Z(E, I) {
    E.classList ? E.classList.add(I) : E.className.match(new RegExp(`(?:^|\\s)${I}(?!\\S)`)) || (E.className += ` ${I}`);
  }
  function fe(E, I) {
    E.classList ? E.classList.remove(I) : E.className = E.className.replace(new RegExp(`(?:^|\\s)${I}(?!\\S)`, "g"), "");
  }
  function Ee(E, I, $) {
    if (!E.props.bounds) return [I, $];
    let { bounds: ie } = E.props;
    ie = typeof ie == "string" ? ie : T(ie);
    const de = N(E);
    if (typeof ie == "string") {
      const { ownerDocument: Te } = de, Ne = Te.defaultView;
      if (!Ne)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Qe;
      if (ie === "parent" ? Qe = de.parentNode : Qe = de.getRootNode().querySelector(ie), !(Qe instanceof Ne.HTMLElement))
        throw new Error('Bounds selector "' + ie + '" could not find an element.');
      const dt = Qe, Bt = Ne.getComputedStyle(de), Gt = Ne.getComputedStyle(dt);
      ie = {
        left: -de.offsetLeft + p(Gt.paddingLeft) + p(Bt.marginLeft),
        top: -de.offsetTop + p(Gt.paddingTop) + p(Bt.marginTop),
        right: re(dt) - X(de) - de.offsetLeft + p(Gt.paddingRight) - p(Bt.marginRight),
        bottom: ee(dt) - pe(de) - de.offsetTop + p(Gt.paddingBottom) - p(Bt.marginBottom)
      };
    }
    return b(ie.right) && (I = Math.min(I, ie.right)), b(ie.bottom) && ($ = Math.min($, ie.bottom)), b(ie.left) && (I = Math.max(I, ie.left)), b(ie.top) && ($ = Math.max($, ie.top)), [I, $];
  }
  function Oe(E, I, $) {
    const ie = Math.round(I / E[0]) * E[0], de = Math.round($ / E[1]) * E[1];
    return [ie, de];
  }
  function Me(E) {
    return E.props.axis === "both" || E.props.axis === "x";
  }
  function Fe(E) {
    return E.props.axis === "both" || E.props.axis === "y";
  }
  function Ue(E, I, $) {
    const ie = typeof I == "number" ? H(E, I) : null;
    if (typeof I == "number" && !ie) return null;
    const de = N($), Te = $.props.offsetParent || de.offsetParent || de.ownerDocument.body;
    return U(ie || E, Te, $.props.scale);
  }
  function tt(E, I, $) {
    const ie = !b(E.lastX), de = N(E);
    return ie ? {
      node: de,
      deltaX: 0,
      deltaY: 0,
      lastX: I,
      lastY: $,
      x: I,
      y: $
    } : {
      node: de,
      deltaX: I - E.lastX,
      deltaY: $ - E.lastY,
      lastX: E.lastX,
      lastY: E.lastY,
      x: I,
      y: $
    };
  }
  function R(E, I) {
    const $ = E.props.scale;
    return {
      node: I.node,
      x: E.state.x + I.deltaX / $,
      y: E.state.y + I.deltaY / $,
      deltaX: I.deltaX / $,
      deltaY: I.deltaY / $,
      lastX: E.state.x,
      lastY: E.state.y
    };
  }
  function T(E) {
    return {
      left: E.left,
      top: E.top,
      right: E.right,
      bottom: E.bottom
    };
  }
  function N(E) {
    const I = E.findDOMNode();
    if (!I)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return I;
  }
  var G = h(Rt()), ue = h(/* @__PURE__ */ Ln()), ve = h(Ko()), ke = function() {
  }, ze = ke, Le = {
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
  }, We = Le.mouse, Xe = class extends G.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (E) => {
        if (this.props.onMouseDown(E), !this.props.allowAnyClick && (typeof E.button == "number" && E.button !== 0 || E.ctrlKey)) return !1;
        const I = this.findDOMNode();
        if (!I || !I.ownerDocument || !I.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: $ } = I;
        if (this.props.disabled || !(E.target instanceof $.defaultView.Node) || this.props.handle && !ce(E.target, this.props.handle, I) || this.props.cancel && ce(E.target, this.props.cancel, I))
          return;
        E.type === "touchstart" && !this.props.allowMobileScroll && E.preventDefault();
        const ie = _e(E);
        this.touchIdentifier = ie;
        const de = Ue(E, ie, this);
        if (de == null) return;
        const { x: Te, y: Ne } = de, Qe = tt(this, Te, Ne);
        ze("calling", this.props.onStart), !(this.props.onStart(E, Qe) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Re($, this.props.nonce), this.dragging = !0, this.lastX = Te, this.lastY = Ne, se($, We.move, this.handleDrag), se($, We.stop, this.handleDragStop));
      }, this.handleDrag = (E) => {
        const I = Ue(E, this.touchIdentifier, this);
        if (I == null) return;
        let { x: $, y: ie } = I;
        if (Array.isArray(this.props.grid)) {
          let Ne = $ - this.lastX, Qe = ie - this.lastY;
          if ([Ne, Qe] = Oe(this.props.grid, Ne, Qe), !Ne && !Qe) return;
          $ = this.lastX + Ne, ie = this.lastY + Qe;
        }
        const de = tt(this, $, ie);
        if (this.props.onDrag(E, de) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const Ne = document.createEvent("MouseEvents");
            Ne.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(Ne);
          }
          return;
        }
        this.lastX = $, this.lastY = ie;
      }, this.handleDragStop = (E) => {
        if (!this.dragging) return;
        const I = Ue(E, this.touchIdentifier, this);
        if (I == null) return;
        let { x: $, y: ie } = I;
        if (Array.isArray(this.props.grid)) {
          let Qe = $ - this.lastX || 0, dt = ie - this.lastY || 0;
          [Qe, dt] = Oe(this.props.grid, Qe, dt), $ = this.lastX + Qe, ie = this.lastY + dt;
        }
        const de = tt(this, $, ie);
        if (this.props.onStop(E, de) === !1 || this.mounted === !1) return !1;
        const Ne = this.findDOMNode();
        Ne && this.props.enableUserSelectHack && Pe(Ne.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Ne && (oe(Ne.ownerDocument, We.move, this.handleDrag), oe(Ne.ownerDocument, We.stop, this.handleDragStop));
      }, this.onMouseDown = (E) => (We = Le.mouse, this.handleDragStart(E)), this.onMouseUp = (E) => (We = Le.mouse, this.handleDragStop(E)), this.onTouchStart = (E) => (We = Le.touch, this.handleDragStart(E)), this.onTouchEnd = (E) => (We = Le.touch, this.handleDragStop(E));
    }
    componentDidMount() {
      this.mounted = !0;
      const E = this.findDOMNode();
      E && se(E, Le.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const E = this.findDOMNode();
      if (E) {
        const { ownerDocument: I } = E;
        oe(I, Le.mouse.move, this.handleDrag), oe(I, Le.touch.move, this.handleDrag), oe(I, Le.mouse.stop, this.handleDragStop), oe(I, Le.touch.stop, this.handleDragStop), oe(E, Le.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Pe(I);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var E;
      if ((E = this.props) != null && E.nodeRef)
        return this.props.nodeRef.current;
      const I = ve.default;
      return typeof I.findDOMNode == "function" ? I.findDOMNode(this) : null;
    }
    render() {
      return G.cloneElement(G.Children.only(this.props.children), {
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
    offsetParent: function(E, I) {
      if (E[I] && E[I].nodeType !== 1)
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
    className: v,
    style: v,
    transform: v
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
  var st = class extends P.Component {
    constructor(E) {
      super(E), this.onDragStart = (I, $) => {
        if (this.props.onStart(I, R(this, $)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (I, $) => {
        if (!this.state.dragging) return !1;
        const ie = R(this, $), de = {
          x: ie.x,
          y: ie.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: Ne, y: Qe } = de;
          de.x += this.state.slackX, de.y += this.state.slackY;
          const [dt, Bt] = Ee(this, de.x, de.y);
          de.x = dt, de.y = Bt, de.slackX = this.state.slackX + (Ne - de.x), de.slackY = this.state.slackY + (Qe - de.y), ie.x = de.x, ie.y = de.y, ie.deltaX = de.x - this.state.x, ie.deltaY = de.y - this.state.y;
        }
        if (this.props.onDrag(I, ie) === !1) return !1;
        this.setState(de);
      }, this.onDragStop = (I, $) => {
        if (!this.state.dragging || this.props.onStop(I, R(this, $)) === !1) return !1;
        const de = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: Ne, y: Qe } = this.props.position;
          de.x = Ne, de.y = Qe;
        }
        this.setState(de);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: E.position ? E.position.x : E.defaultPosition.x,
        y: E.position ? E.position.y : E.defaultPosition.y,
        prevPropsPosition: { ...E.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, E.position && !(E.onDrag || E.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: E }, { prevPropsPosition: I }) {
      return E && (!I || E.x !== I.x || E.y !== I.y) ? {
        x: E.x,
        y: E.y,
        prevPropsPosition: { ...E }
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
      var E;
      if ((E = this.props) != null && E.nodeRef)
        return this.props.nodeRef.current;
      const I = V.default;
      return typeof I.findDOMNode == "function" ? I.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: E,
        bounds: I,
        children: $,
        defaultPosition: ie,
        defaultClassName: de,
        defaultClassNameDragging: Te,
        defaultClassNameDragged: Ne,
        position: Qe,
        positionOffset: dt,
        scale: Bt,
        ...Gt
      } = this.props;
      let Dn = {}, Xn = null;
      const Jt = !!!Qe || this.state.dragging, Er = Qe || ie, Cr = {
        // Set left if horizontal drag is enabled
        x: Me(this) && Jt ? this.state.x : Er.x,
        // Set top if vertical drag is enabled
        y: Fe(this) && Jt ? this.state.y : Er.y
      };
      this.state.isElementSVG ? Xn = te(Cr, dt) : Dn = le(Cr, dt);
      const Qn = P.Children.only($), Ri = (0, Y.clsx)(Qn.props.className || "", de, {
        [Te]: this.state.dragging,
        [Ne]: this.state.dragged
      });
      return /* @__PURE__ */ P.createElement(Xe, { ...Gt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, P.cloneElement(Qn, {
        className: Ri,
        style: { ...Qn.props.style, ...Dn },
        transform: Xn
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
    axis: z.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: z.default.oneOfType([
      z.default.shape({
        left: z.default.number,
        right: z.default.number,
        top: z.default.number,
        bottom: z.default.number
      }),
      z.default.string,
      z.default.oneOf([!1])
    ]),
    defaultClassName: z.default.string,
    defaultClassNameDragging: z.default.string,
    defaultClassNameDragged: z.default.string,
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
    defaultPosition: z.default.shape({
      x: z.default.number,
      y: z.default.number
    }),
    positionOffset: z.default.shape({
      x: z.default.oneOfType([z.default.number, z.default.string]),
      y: z.default.oneOfType([z.default.number, z.default.string])
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
    position: z.default.shape({
      x: z.default.number,
      y: z.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: v,
    style: v,
    transform: v
  }, st.defaultProps = {
    ...Xe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, tl;
}
var Md;
function Ol() {
  if (Md) return pi.exports;
  Md = 1;
  const r = ch(), o = r.DraggableCore, a = r.default || r;
  return pi.exports = a, pi.exports.default = a, pi.exports.DraggableCore = o, pi.exports;
}
var fi = { exports: {} }, mi = {}, jo = {}, Td;
function dh() {
  if (Td) return jo;
  Td = 1, jo.__esModule = !0, jo.cloneElement = m;
  var r = o(Rt());
  function o(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function a(h, x) {
    var w = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(h);
      x && (P = P.filter(function(z) {
        return Object.getOwnPropertyDescriptor(h, z).enumerable;
      })), w.push.apply(w, P);
    }
    return w;
  }
  function u(h) {
    for (var x = 1; x < arguments.length; x++) {
      var w = arguments[x] != null ? arguments[x] : {};
      x % 2 ? a(Object(w), !0).forEach(function(P) {
        c(h, P, w[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(w)) : a(Object(w)).forEach(function(P) {
        Object.defineProperty(h, P, Object.getOwnPropertyDescriptor(w, P));
      });
    }
    return h;
  }
  function c(h, x, w) {
    return x = f(x), x in h ? Object.defineProperty(h, x, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : h[x] = w, h;
  }
  function f(h) {
    var x = y(h, "string");
    return typeof x == "symbol" ? x : String(x);
  }
  function y(h, x) {
    if (typeof h != "object" || h === null) return h;
    var w = h[Symbol.toPrimitive];
    if (w !== void 0) {
      var P = w.call(h, x);
      if (typeof P != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(h);
  }
  function m(h, x) {
    return x.style && h.props.style && (x.style = u(u({}, h.props.style), x.style)), x.className && h.props.className && (x.className = h.props.className + " " + x.className), /* @__PURE__ */ r.default.cloneElement(h, x);
  }
  return jo;
}
var hi = {}, Nd;
function Rp() {
  if (Nd) return hi;
  Nd = 1, hi.__esModule = !0, hi.resizableProps = void 0;
  var r = o(/* @__PURE__ */ Ln());
  Ol();
  function o(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    className: r.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: r.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: r.default.shape({
      allowAnyClick: r.default.bool,
      cancel: r.default.string,
      children: r.default.node,
      disabled: r.default.bool,
      enableUserSelectHack: r.default.bool,
      offsetParent: r.default.node,
      grid: r.default.arrayOf(r.default.number),
      handle: r.default.string,
      nodeRef: r.default.object,
      onStart: r.default.func,
      onDrag: r.default.func,
      onStop: r.default.func,
      onMouseDown: r.default.func,
      scale: r.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var c = arguments.length, f = new Array(c), y = 0; y < c; y++)
        f[y] = arguments[y];
      var m = f[0];
      if (m.axis === "both" || m.axis === "y") {
        var h;
        return (h = r.default.number).isRequired.apply(h, f);
      }
      return r.default.number.apply(r.default, f);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: r.default.oneOfType([r.default.node, r.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: r.default.arrayOf(r.default.number),
    lockAspectRatio: r.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: r.default.arrayOf(r.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: r.default.arrayOf(r.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: r.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: r.default.func,
    /*
    * Called on resize event
    * */
    onResize: r.default.func,
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
    resizeHandles: r.default.arrayOf(r.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: r.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var c = arguments.length, f = new Array(c), y = 0; y < c; y++)
        f[y] = arguments[y];
      var m = f[0];
      if (m.axis === "both" || m.axis === "x") {
        var h;
        return (h = r.default.number).isRequired.apply(h, f);
      }
      return r.default.number.apply(r.default, f);
    }
  };
  return hi.resizableProps = a, hi;
}
var Ad;
function zp() {
  if (Ad) return mi;
  Ad = 1, mi.__esModule = !0, mi.default = void 0;
  var r = y(Rt()), o = Ol(), a = dh(), u = Rp(), c = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function f(b) {
    if (typeof WeakMap != "function") return null;
    var p = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (f = function(_) {
      return _ ? v : p;
    })(b);
  }
  function y(b, p) {
    if (b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var v = f(p);
    if (v && v.has(b))
      return v.get(b);
    var g = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in b)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(b, k)) {
        var M = _ ? Object.getOwnPropertyDescriptor(b, k) : null;
        M && (M.get || M.set) ? Object.defineProperty(g, k, M) : g[k] = b[k];
      }
    return g.default = b, v && v.set(b, g), g;
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(b) {
      for (var p = 1; p < arguments.length; p++) {
        var v = arguments[p];
        for (var g in v)
          Object.prototype.hasOwnProperty.call(v, g) && (b[g] = v[g]);
      }
      return b;
    }, m.apply(this, arguments);
  }
  function h(b, p) {
    if (b == null) return {};
    var v = {}, g = Object.keys(b), _, k;
    for (k = 0; k < g.length; k++)
      _ = g[k], !(p.indexOf(_) >= 0) && (v[_] = b[_]);
    return v;
  }
  function x(b, p) {
    var v = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(b);
      p && (g = g.filter(function(_) {
        return Object.getOwnPropertyDescriptor(b, _).enumerable;
      })), v.push.apply(v, g);
    }
    return v;
  }
  function w(b) {
    for (var p = 1; p < arguments.length; p++) {
      var v = arguments[p] != null ? arguments[p] : {};
      p % 2 ? x(Object(v), !0).forEach(function(g) {
        P(b, g, v[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : x(Object(v)).forEach(function(g) {
        Object.defineProperty(b, g, Object.getOwnPropertyDescriptor(v, g));
      });
    }
    return b;
  }
  function P(b, p, v) {
    return p = z(p), p in b ? Object.defineProperty(b, p, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[p] = v, b;
  }
  function z(b) {
    var p = V(b, "string");
    return typeof p == "symbol" ? p : String(p);
  }
  function V(b, p) {
    if (typeof b != "object" || b === null) return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var g = v.call(b, p);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(b);
  }
  function Y(b, p) {
    b.prototype = Object.create(p.prototype), b.prototype.constructor = b, F(b, p);
  }
  function F(b, p) {
    return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, _) {
      return g.__proto__ = _, g;
    }, F(b, p);
  }
  var O = /* @__PURE__ */ function(b) {
    Y(p, b);
    function p() {
      for (var g, _ = arguments.length, k = new Array(_), M = 0; M < _; M++)
        k[M] = arguments[M];
      return g = b.call.apply(b, [this].concat(k)) || this, g.handleRefs = {}, g.lastHandleRect = null, g.slack = null, g;
    }
    var v = p.prototype;
    return v.componentWillUnmount = function() {
      this.resetData();
    }, v.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, v.runConstraints = function(_, k) {
      var M = this.props, q = M.minConstraints, W = M.maxConstraints, J = M.lockAspectRatio;
      if (!q && !W && !J) return [_, k];
      if (J) {
        var ce = this.props.width / this.props.height, se = _ - this.props.width, oe = k - this.props.height;
        Math.abs(se) > Math.abs(oe * ce) ? k = _ / ce : _ = k * ce;
      }
      var pe = _, X = k, ee = this.slack || [0, 0], re = ee[0], U = ee[1];
      return _ += re, k += U, q && (_ = Math.max(q[0], _), k = Math.max(q[1], k)), W && (_ = Math.min(W[0], _), k = Math.min(W[1], k)), this.slack = [re + (pe - _), U + (X - k)], [_, k];
    }, v.resizeHandler = function(_, k) {
      var M = this;
      return function(q, W) {
        var J = W.node, ce = W.deltaX, se = W.deltaY;
        _ === "onResizeStart" && M.resetData();
        var oe = (M.props.axis === "both" || M.props.axis === "x") && k !== "n" && k !== "s", pe = (M.props.axis === "both" || M.props.axis === "y") && k !== "e" && k !== "w";
        if (!(!oe && !pe)) {
          var X = k[0], ee = k[k.length - 1], re = J.getBoundingClientRect();
          if (M.lastHandleRect != null) {
            if (ee === "w") {
              var U = re.left - M.lastHandleRect.left;
              ce += U;
            }
            if (X === "n") {
              var le = re.top - M.lastHandleRect.top;
              se += le;
            }
          }
          M.lastHandleRect = re, ee === "w" && (ce = -ce), X === "n" && (se = -se);
          var te = M.props.width + (oe ? ce / M.props.transformScale : 0), L = M.props.height + (pe ? se / M.props.transformScale : 0), H = M.runConstraints(te, L);
          te = H[0], L = H[1];
          var _e = te !== M.props.width || L !== M.props.height, Se = typeof M.props[_] == "function" ? M.props[_] : null, Re = _ === "onResize" && !_e;
          Se && !Re && (q.persist == null || q.persist(), Se(q, {
            node: J,
            size: {
              width: te,
              height: L
            },
            handle: k
          })), _ === "onResizeStop" && M.resetData();
        }
      };
    }, v.renderResizeHandle = function(_, k) {
      var M = this.props.handle;
      if (!M)
        return /* @__PURE__ */ r.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + _,
          ref: k
        });
      if (typeof M == "function")
        return M(_, k);
      var q = typeof M.type == "string", W = w({
        ref: k
      }, q ? {} : {
        handleAxis: _
      });
      return /* @__PURE__ */ r.cloneElement(M, W);
    }, v.render = function() {
      var _ = this, k = this.props, M = k.children, q = k.className, W = k.draggableOpts;
      k.width, k.height, k.handle, k.handleSize, k.lockAspectRatio, k.axis, k.minConstraints, k.maxConstraints, k.onResize, k.onResizeStop, k.onResizeStart;
      var J = k.resizeHandles;
      k.transformScale;
      var ce = h(k, c);
      return (0, a.cloneElement)(M, w(w({}, ce), {}, {
        className: (q ? q + " " : "") + "react-resizable",
        children: [].concat(M.props.children, J.map(function(se) {
          var oe, pe = (oe = _.handleRefs[se]) != null ? oe : _.handleRefs[se] = /* @__PURE__ */ r.createRef();
          return /* @__PURE__ */ r.createElement(o.DraggableCore, m({}, W, {
            nodeRef: pe,
            key: "resizableHandle-" + se,
            onStop: _.resizeHandler("onResizeStop", se),
            onStart: _.resizeHandler("onResizeStart", se),
            onDrag: _.resizeHandler("onResize", se)
          }), _.renderResizeHandle(se, pe));
        }))
      }));
    }, p;
  }(r.Component);
  return mi.default = O, O.propTypes = u.resizableProps, O.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, mi;
}
var gi = {}, Id;
function ph() {
  if (Id) return gi;
  Id = 1, gi.__esModule = !0, gi.default = void 0;
  var r = m(Rt()), o = f(/* @__PURE__ */ Ln()), a = f(zp()), u = Rp(), c = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function f(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function y(p) {
    if (typeof WeakMap != "function") return null;
    var v = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (y = function(k) {
      return k ? g : v;
    })(p);
  }
  function m(p, v) {
    if (p && p.__esModule)
      return p;
    if (p === null || typeof p != "object" && typeof p != "function")
      return { default: p };
    var g = y(v);
    if (g && g.has(p))
      return g.get(p);
    var _ = {}, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in p)
      if (M !== "default" && Object.prototype.hasOwnProperty.call(p, M)) {
        var q = k ? Object.getOwnPropertyDescriptor(p, M) : null;
        q && (q.get || q.set) ? Object.defineProperty(_, M, q) : _[M] = p[M];
      }
    return _.default = p, g && g.set(p, _), _;
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(p) {
      for (var v = 1; v < arguments.length; v++) {
        var g = arguments[v];
        for (var _ in g)
          Object.prototype.hasOwnProperty.call(g, _) && (p[_] = g[_]);
      }
      return p;
    }, h.apply(this, arguments);
  }
  function x(p, v) {
    var g = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(p);
      v && (_ = _.filter(function(k) {
        return Object.getOwnPropertyDescriptor(p, k).enumerable;
      })), g.push.apply(g, _);
    }
    return g;
  }
  function w(p) {
    for (var v = 1; v < arguments.length; v++) {
      var g = arguments[v] != null ? arguments[v] : {};
      v % 2 ? x(Object(g), !0).forEach(function(_) {
        P(p, _, g[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(g)) : x(Object(g)).forEach(function(_) {
        Object.defineProperty(p, _, Object.getOwnPropertyDescriptor(g, _));
      });
    }
    return p;
  }
  function P(p, v, g) {
    return v = z(v), v in p ? Object.defineProperty(p, v, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : p[v] = g, p;
  }
  function z(p) {
    var v = V(p, "string");
    return typeof v == "symbol" ? v : String(v);
  }
  function V(p, v) {
    if (typeof p != "object" || p === null) return p;
    var g = p[Symbol.toPrimitive];
    if (g !== void 0) {
      var _ = g.call(p, v);
      if (typeof _ != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(p);
  }
  function Y(p, v) {
    if (p == null) return {};
    var g = {}, _ = Object.keys(p), k, M;
    for (M = 0; M < _.length; M++)
      k = _[M], !(v.indexOf(k) >= 0) && (g[k] = p[k]);
    return g;
  }
  function F(p, v) {
    p.prototype = Object.create(v.prototype), p.prototype.constructor = p, O(p, v);
  }
  function O(p, v) {
    return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, k) {
      return _.__proto__ = k, _;
    }, O(p, v);
  }
  var b = /* @__PURE__ */ function(p) {
    F(v, p);
    function v() {
      for (var _, k = arguments.length, M = new Array(k), q = 0; q < k; q++)
        M[q] = arguments[q];
      return _ = p.call.apply(p, [this].concat(M)) || this, _.state = {
        width: _.props.width,
        height: _.props.height,
        propsWidth: _.props.width,
        propsHeight: _.props.height
      }, _.onResize = function(W, J) {
        var ce = J.size;
        _.props.onResize ? (W.persist == null || W.persist(), _.setState(ce, function() {
          return _.props.onResize && _.props.onResize(W, J);
        })) : _.setState(ce);
      }, _;
    }
    v.getDerivedStateFromProps = function(k, M) {
      return M.propsWidth !== k.width || M.propsHeight !== k.height ? {
        width: k.width,
        height: k.height,
        propsWidth: k.width,
        propsHeight: k.height
      } : null;
    };
    var g = v.prototype;
    return g.render = function() {
      var k = this.props, M = k.handle, q = k.handleSize;
      k.onResize;
      var W = k.onResizeStart, J = k.onResizeStop, ce = k.draggableOpts, se = k.minConstraints, oe = k.maxConstraints, pe = k.lockAspectRatio, X = k.axis;
      k.width, k.height;
      var ee = k.resizeHandles, re = k.style, U = k.transformScale, le = Y(k, c);
      return /* @__PURE__ */ r.createElement(a.default, {
        axis: X,
        draggableOpts: ce,
        handle: M,
        handleSize: q,
        height: this.state.height,
        lockAspectRatio: pe,
        maxConstraints: oe,
        minConstraints: se,
        onResizeStart: W,
        onResize: this.onResize,
        onResizeStop: J,
        resizeHandles: ee,
        transformScale: U,
        width: this.state.width
      }, /* @__PURE__ */ r.createElement("div", h({}, le, {
        style: w(w({}, re), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, v;
  }(r.Component);
  return gi.default = b, b.propTypes = w(w({}, u.resizableProps), {}, {
    children: o.default.element
  }), gi;
}
var jd;
function fh() {
  return jd || (jd = 1, fi.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, fi.exports.Resizable = zp().default, fi.exports.ResizableBox = ph().default), fi.exports;
}
var cn = {}, Bd;
function Op() {
  if (Bd) return cn;
  Bd = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.resizeHandleType = cn.resizeHandleAxesType = cn.default = void 0;
  var r = a(/* @__PURE__ */ Ln()), o = a(Rt());
  function a(f) {
    return f && f.__esModule ? f : { default: f };
  }
  const u = cn.resizeHandleAxesType = r.default.arrayOf(r.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), c = cn.resizeHandleType = r.default.oneOfType([r.default.node, r.default.func]);
  return cn.default = {
    //
    // Basic props
    //
    className: r.default.string,
    style: r.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: r.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: r.default.bool,
    // # of cols.
    cols: r.default.number,
    // A selector that will not be draggable.
    draggableCancel: r.default.string,
    // A selector for the draggable handler
    draggableHandle: r.default.string,
    // Deprecated
    verticalCompact: function(f) {
      f.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: r.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(f) {
      var y = f.layout;
      y !== void 0 && kr().validateLayout(y, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: r.default.arrayOf(r.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: r.default.arrayOf(r.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: r.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: r.default.number,
    //
    // Flags
    //
    isBounded: r.default.bool,
    isDraggable: r.default.bool,
    isResizable: r.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: r.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: r.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: r.default.bool,
    // parent layout transform scale
    transformScale: r.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: r.default.bool,
    // Resize handle options
    resizeHandles: u,
    resizeHandle: c,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: r.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: r.default.func,
    // Calls on each drag movement.
    onDrag: r.default.func,
    // Calls when drag is complete.
    onDragStop: r.default.func,
    //Calls when resize starts.
    onResizeStart: r.default.func,
    // Calls when resize movement happens.
    onResize: r.default.func,
    // Calls when resize is complete.
    onResizeStop: r.default.func,
    // Calls when some element is dropped.
    onDrop: r.default.func,
    //
    // Other validations
    //
    droppingItem: r.default.shape({
      i: r.default.string.isRequired,
      w: r.default.number.isRequired,
      h: r.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(f, y) {
      const m = f[y], h = {};
      o.default.Children.forEach(m, function(x) {
        if (x?.key != null) {
          if (h[x.key])
            throw new Error('Duplicate child key "' + x.key + '" found! This will cause problems in ReactGridLayout.');
          h[x.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: r.default.any
  }, cn;
}
var Fd;
function mh() {
  if (Fd) return di;
  Fd = 1, Object.defineProperty(di, "__esModule", {
    value: !0
  }), di.default = void 0;
  var r = x(Rt()), o = Ko(), a = x(/* @__PURE__ */ Ln()), u = Ol(), c = fh(), f = kr(), y = zl(), m = Op(), h = x(ia());
  function x(O) {
    return O && O.__esModule ? O : { default: O };
  }
  function w(O, b) {
    var p = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(O);
      b && (v = v.filter(function(g) {
        return Object.getOwnPropertyDescriptor(O, g).enumerable;
      })), p.push.apply(p, v);
    }
    return p;
  }
  function P(O) {
    for (var b = 1; b < arguments.length; b++) {
      var p = arguments[b] != null ? arguments[b] : {};
      b % 2 ? w(Object(p), !0).forEach(function(v) {
        z(O, v, p[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(p)) : w(Object(p)).forEach(function(v) {
        Object.defineProperty(O, v, Object.getOwnPropertyDescriptor(p, v));
      });
    }
    return O;
  }
  function z(O, b, p) {
    return (b = V(b)) in O ? Object.defineProperty(O, b, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : O[b] = p, O;
  }
  function V(O) {
    var b = Y(O, "string");
    return typeof b == "symbol" ? b : b + "";
  }
  function Y(O, b) {
    if (typeof O != "object" || !O) return O;
    var p = O[Symbol.toPrimitive];
    if (p !== void 0) {
      var v = p.call(O, b);
      if (typeof v != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(O);
  }
  let F = class extends r.default.Component {
    constructor() {
      super(...arguments), z(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), z(this, "elementRef", /* @__PURE__ */ r.default.createRef()), z(this, "onDragStart", (b, p) => {
        let {
          node: v
        } = p;
        const {
          onDragStart: g,
          transformScale: _
        } = this.props;
        if (!g) return;
        const k = {
          top: 0,
          left: 0
        }, {
          offsetParent: M
        } = v;
        if (!M) return;
        const q = M.getBoundingClientRect(), W = v.getBoundingClientRect(), J = W.left / _, ce = q.left / _, se = W.top / _, oe = q.top / _;
        k.left = J - ce + M.scrollLeft, k.top = se - oe + M.scrollTop, this.setState({
          dragging: k
        });
        const {
          x: pe,
          y: X
        } = (0, y.calcXY)(this.getPositionParams(), k.top, k.left, this.props.w, this.props.h);
        return g.call(this, this.props.i, pe, X, {
          e: b,
          node: v,
          newPosition: k
        });
      }), z(this, "onDrag", (b, p, v) => {
        let {
          node: g,
          deltaX: _,
          deltaY: k
        } = p;
        const {
          onDrag: M
        } = this.props;
        if (!M) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let q = this.state.dragging.top + k, W = this.state.dragging.left + _;
        const {
          isBounded: J,
          i: ce,
          w: se,
          h: oe,
          containerWidth: pe
        } = this.props, X = this.getPositionParams();
        if (J) {
          const {
            offsetParent: le
          } = g;
          if (le) {
            const {
              margin: te,
              rowHeight: L
            } = this.props, H = le.clientHeight - (0, y.calcGridItemWHPx)(oe, L, te[1]);
            q = (0, y.clamp)(q, 0, H);
            const _e = (0, y.calcGridColWidth)(X), Se = pe - (0, y.calcGridItemWHPx)(se, _e, te[0]);
            W = (0, y.clamp)(W, 0, Se);
          }
        }
        const ee = {
          top: q,
          left: W
        };
        v ? this.setState({
          dragging: ee
        }) : (0, o.flushSync)(() => {
          this.setState({
            dragging: ee
          });
        });
        const {
          x: re,
          y: U
        } = (0, y.calcXY)(X, q, W, se, oe);
        return M.call(this, ce, re, U, {
          e: b,
          node: g,
          newPosition: ee
        });
      }), z(this, "onDragStop", (b, p) => {
        let {
          node: v
        } = p;
        const {
          onDragStop: g
        } = this.props;
        if (!g) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: _,
          h: k,
          i: M
        } = this.props, {
          left: q,
          top: W
        } = this.state.dragging, J = {
          top: W,
          left: q
        };
        this.setState({
          dragging: null
        });
        const {
          x: ce,
          y: se
        } = (0, y.calcXY)(this.getPositionParams(), W, q, _, k);
        return g.call(this, M, ce, se, {
          e: b,
          node: v,
          newPosition: J
        });
      }), z(this, "onResizeStop", (b, p, v) => this.onResizeHandler(b, p, v, "onResizeStop")), z(this, "onResizeStart", (b, p, v) => this.onResizeHandler(b, p, v, "onResizeStart")), z(this, "onResize", (b, p, v) => this.onResizeHandler(b, p, v, "onResize"));
    }
    shouldComponentUpdate(b, p) {
      if (this.props.children !== b.children || this.props.droppingPosition !== b.droppingPosition) return !0;
      const v = (0, y.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), g = (0, y.calcGridItemPosition)(this.getPositionParams(b), b.x, b.y, b.w, b.h, p);
      return !(0, f.fastPositionEqual)(v, g) || this.props.useCSSTransforms !== b.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(b) {
      this.moveDroppingItem(b);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(b) {
      const {
        droppingPosition: p
      } = this.props;
      if (!p) return;
      const v = this.elementRef.current;
      if (!v) return;
      const g = b.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: _
      } = this.state, k = _ && p.left !== g.left || p.top !== g.top;
      if (!_)
        this.onDragStart(p.e, {
          node: v,
          deltaX: p.left,
          deltaY: p.top
        });
      else if (k) {
        const M = p.left - _.left, q = p.top - _.top;
        this.onDrag(
          p.e,
          {
            node: v,
            deltaX: M,
            deltaY: q
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: b.cols,
        containerPadding: b.containerPadding,
        containerWidth: b.containerWidth,
        margin: b.margin,
        maxRows: b.maxRows,
        rowHeight: b.rowHeight
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
    createStyle(b) {
      const {
        usePercentages: p,
        containerWidth: v,
        useCSSTransforms: g
      } = this.props;
      let _;
      return g ? _ = (0, f.setTransform)(b) : (_ = (0, f.setTopLeft)(b), p && (_.left = (0, f.perc)(b.left / v), _.width = (0, f.perc)(b.width / v))), _;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(b, p) {
      return /* @__PURE__ */ r.default.createElement(u.DraggableCore, {
        disabled: !p,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, b);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(b, p) {
      return (v, g) => (
        /*: Function*/
        p(v, g, b)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(b, p, v) {
      const {
        cols: g,
        minW: _,
        minH: k,
        maxW: M,
        maxH: q,
        transformScale: W,
        resizeHandles: J,
        resizeHandle: ce
      } = this.props, se = this.getPositionParams(), oe = (0, y.calcGridItemPosition)(se, 0, 0, g, 0).width, pe = (0, y.calcGridItemPosition)(se, 0, 0, _, k), X = (0, y.calcGridItemPosition)(se, 0, 0, M, q), ee = [pe.width, pe.height], re = [Math.min(X.width, oe), Math.min(X.height, 1 / 0)];
      return /* @__PURE__ */ r.default.createElement(
        c.Resizable,
        {
          draggableOpts: {
            disabled: !v
          },
          className: v ? void 0 : "react-resizable-hide",
          width: p.width,
          height: p.height,
          minConstraints: ee,
          maxConstraints: re,
          onResizeStop: this.curryResizeHandler(p, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(p, this.onResizeStart),
          onResize: this.curryResizeHandler(p, this.onResize),
          transformScale: W,
          resizeHandles: J,
          handle: ce
        },
        b
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(b, p, v, g) {
      let {
        node: _,
        size: k,
        handle: M
      } = p;
      const q = this.props[g];
      if (!q) return;
      const {
        x: W,
        y: J,
        i: ce,
        maxH: se,
        minH: oe,
        containerWidth: pe
      } = this.props, {
        minW: X,
        maxW: ee
      } = this.props;
      let re = k;
      _ && (re = (0, f.resizeItemInDirection)(M, v, k, pe), (0, o.flushSync)(() => {
        this.setState({
          resizing: g === "onResizeStop" ? null : re
        });
      }));
      let {
        w: U,
        h: le
      } = (0, y.calcWH)(this.getPositionParams(), re.width, re.height, W, J, M);
      U = (0, y.clamp)(U, Math.max(X, 1), ee), le = (0, y.clamp)(le, oe, se), q.call(this, ce, U, le, {
        e: b,
        node: _,
        size: re,
        handle: M
      });
    }
    render() {
      const {
        x: b,
        y: p,
        w: v,
        h: g,
        isDraggable: _,
        isResizable: k,
        droppingPosition: M,
        useCSSTransforms: q
      } = this.props, W = (0, y.calcGridItemPosition)(this.getPositionParams(), b, p, v, g, this.state), J = r.default.Children.only(this.props.children);
      let ce = /* @__PURE__ */ r.default.cloneElement(J, {
        ref: this.elementRef,
        className: (0, h.default)("react-grid-item", J.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": _,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!M,
          cssTransforms: q
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: P(P(P({}, this.props.style), J.props.style), this.createStyle(W))
      });
      return ce = this.mixinResizable(ce, W, k), ce = this.mixinDraggable(ce, _), ce;
    }
  };
  return di.default = F, z(F, "propTypes", {
    // Children must be only a single element
    children: a.default.element,
    // General grid attributes
    cols: a.default.number.isRequired,
    containerWidth: a.default.number.isRequired,
    rowHeight: a.default.number.isRequired,
    margin: a.default.array.isRequired,
    maxRows: a.default.number.isRequired,
    containerPadding: a.default.array.isRequired,
    // These are all in grid units
    x: a.default.number.isRequired,
    y: a.default.number.isRequired,
    w: a.default.number.isRequired,
    h: a.default.number.isRequired,
    // All optional
    minW: function(O, b) {
      const p = O[b];
      if (typeof p != "number") return new Error("minWidth not Number");
      if (p > O.w || p > O.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(O, b) {
      const p = O[b];
      if (typeof p != "number") return new Error("maxWidth not Number");
      if (p < O.w || p < O.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(O, b) {
      const p = O[b];
      if (typeof p != "number") return new Error("minHeight not Number");
      if (p > O.h || p > O.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(O, b) {
      const p = O[b];
      if (typeof p != "number") return new Error("maxHeight not Number");
      if (p < O.h || p < O.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: a.default.string.isRequired,
    // Resize handle options
    resizeHandles: m.resizeHandleAxesType,
    resizeHandle: m.resizeHandleType,
    // Functions
    onDragStop: a.default.func,
    onDragStart: a.default.func,
    onDrag: a.default.func,
    onResizeStop: a.default.func,
    onResizeStart: a.default.func,
    onResize: a.default.func,
    // Flags
    isDraggable: a.default.bool.isRequired,
    isResizable: a.default.bool.isRequired,
    isBounded: a.default.bool.isRequired,
    static: a.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: a.default.bool.isRequired,
    transformScale: a.default.number,
    // Others
    className: a.default.string,
    // Selector for draggable handle
    handle: a.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: a.default.string,
    // Current position of a dropping element
    droppingPosition: a.default.shape({
      e: a.default.object.isRequired,
      left: a.default.number.isRequired,
      top: a.default.number.isRequired
    })
  }), z(F, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), di;
}
var qd;
function Pp() {
  if (qd) return ci;
  qd = 1, Object.defineProperty(ci, "__esModule", {
    value: !0
  }), ci.default = void 0;
  var r = h(Rt()), o = /* @__PURE__ */ Rl(), a = m(ia()), u = kr(), c = zl(), f = m(mh()), y = m(Op());
  function m(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function h(b, p) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (h = function(_, k) {
      if (!k && _ && _.__esModule) return _;
      var M, q, W = { __proto__: null, default: _ };
      if (_ === null || typeof _ != "object" && typeof _ != "function") return W;
      if (M = k ? g : v) {
        if (M.has(_)) return M.get(_);
        M.set(_, W);
      }
      for (const J in _) J !== "default" && {}.hasOwnProperty.call(_, J) && ((q = (M = Object.defineProperty) && Object.getOwnPropertyDescriptor(_, J)) && (q.get || q.set) ? M(W, J, q) : W[J] = _[J]);
      return W;
    })(b, p);
  }
  function x(b, p) {
    var v = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(b);
      p && (g = g.filter(function(_) {
        return Object.getOwnPropertyDescriptor(b, _).enumerable;
      })), v.push.apply(v, g);
    }
    return v;
  }
  function w(b) {
    for (var p = 1; p < arguments.length; p++) {
      var v = arguments[p] != null ? arguments[p] : {};
      p % 2 ? x(Object(v), !0).forEach(function(g) {
        P(b, g, v[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : x(Object(v)).forEach(function(g) {
        Object.defineProperty(b, g, Object.getOwnPropertyDescriptor(v, g));
      });
    }
    return b;
  }
  function P(b, p, v) {
    return (p = z(p)) in b ? Object.defineProperty(b, p, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[p] = v, b;
  }
  function z(b) {
    var p = V(b, "string");
    return typeof p == "symbol" ? p : p + "";
  }
  function V(b, p) {
    if (typeof b != "object" || !b) return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var g = v.call(b, p);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(b);
  }
  const Y = "react-grid-layout";
  let F = !1;
  try {
    F = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let O = class extends r.Component {
    constructor() {
      super(...arguments), P(this, "state", {
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
      }), P(this, "dragEnterCounter", 0), P(this, "onDragStart", (p, v, g, _) => {
        let {
          e: k,
          node: M
        } = _;
        const {
          layout: q
        } = this.state, W = (0, u.getLayoutItem)(q, p);
        if (!W) return;
        const J = {
          w: W.w,
          h: W.h,
          x: W.x,
          y: W.y,
          placeholder: !0,
          i: p
        };
        return this.setState({
          oldDragItem: (0, u.cloneLayoutItem)(W),
          oldLayout: q,
          activeDrag: J
        }), this.props.onDragStart(q, W, W, null, k, M);
      }), P(this, "onDrag", (p, v, g, _) => {
        let {
          e: k,
          node: M
        } = _;
        const {
          oldDragItem: q
        } = this.state;
        let {
          layout: W
        } = this.state;
        const {
          cols: J,
          allowOverlap: ce,
          preventCollision: se
        } = this.props, oe = (0, u.getLayoutItem)(W, p);
        if (!oe) return;
        const pe = {
          w: oe.w,
          h: oe.h,
          x: oe.x,
          y: oe.y,
          placeholder: !0,
          i: p
        };
        W = (0, u.moveElement)(W, oe, v, g, !0, se, (0, u.compactType)(this.props), J, ce), this.props.onDrag(W, q, oe, pe, k, M), this.setState({
          layout: ce ? W : (0, u.compact)(W, (0, u.compactType)(this.props), J),
          activeDrag: pe
        });
      }), P(this, "onDragStop", (p, v, g, _) => {
        let {
          e: k,
          node: M
        } = _;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: q
        } = this.state;
        let {
          layout: W
        } = this.state;
        const {
          cols: J,
          preventCollision: ce,
          allowOverlap: se
        } = this.props, oe = (0, u.getLayoutItem)(W, p);
        if (!oe) return;
        W = (0, u.moveElement)(W, oe, v, g, !0, ce, (0, u.compactType)(this.props), J, se);
        const X = se ? W : (0, u.compact)(W, (0, u.compactType)(this.props), J);
        this.props.onDragStop(X, q, oe, null, k, M);
        const {
          oldLayout: ee
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: X,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(X, ee);
      }), P(this, "onResizeStart", (p, v, g, _) => {
        let {
          e: k,
          node: M
        } = _;
        const {
          layout: q
        } = this.state, W = (0, u.getLayoutItem)(q, p);
        W && (this.setState({
          oldResizeItem: (0, u.cloneLayoutItem)(W),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(q, W, W, null, k, M));
      }), P(this, "onResize", (p, v, g, _) => {
        let {
          e: k,
          node: M,
          size: q,
          handle: W
        } = _;
        const {
          oldResizeItem: J
        } = this.state, {
          layout: ce
        } = this.state, {
          cols: se,
          preventCollision: oe,
          allowOverlap: pe
        } = this.props;
        let X = !1, ee, re, U;
        const [le, te] = (0, u.withLayoutItem)(ce, p, (H) => {
          let _e;
          return re = H.x, U = H.y, ["sw", "w", "nw", "n", "ne"].indexOf(W) !== -1 && (["sw", "nw", "w"].indexOf(W) !== -1 && (re = H.x + (H.w - v), v = H.x !== re && re < 0 ? H.w : v, re = re < 0 ? 0 : re), ["ne", "n", "nw"].indexOf(W) !== -1 && (U = H.y + (H.h - g), g = H.y !== U && U < 0 ? H.h : g, U = U < 0 ? 0 : U), X = !0), oe && !pe && (_e = (0, u.getAllCollisions)(ce, w(w({}, H), {}, {
            w: v,
            h: g,
            x: re,
            y: U
          })).filter((Re) => Re.i !== H.i).length > 0, _e && (U = H.y, g = H.h, re = H.x, v = H.w, X = !1)), H.w = v, H.h = g, H;
        });
        if (!te) return;
        ee = le, X && (ee = (0, u.moveElement)(le, te, re, U, !0, this.props.preventCollision, (0, u.compactType)(this.props), se, pe));
        const L = {
          w: te.w,
          h: te.h,
          x: te.x,
          y: te.y,
          static: !0,
          i: p
        };
        this.props.onResize(ee, J, te, L, k, M), this.setState({
          layout: pe ? ee : (0, u.compact)(ee, (0, u.compactType)(this.props), se),
          activeDrag: L
        });
      }), P(this, "onResizeStop", (p, v, g, _) => {
        let {
          e: k,
          node: M
        } = _;
        const {
          layout: q,
          oldResizeItem: W
        } = this.state, {
          cols: J,
          allowOverlap: ce
        } = this.props, se = (0, u.getLayoutItem)(q, p), oe = ce ? q : (0, u.compact)(q, (0, u.compactType)(this.props), J);
        this.props.onResizeStop(oe, W, se, null, k, M);
        const {
          oldLayout: pe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: oe,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(oe, pe);
      }), P(this, "onDragOver", (p) => {
        var v;
        if (p.preventDefault(), p.stopPropagation(), F && // $FlowIgnore can't figure this out
        !((v = p.nativeEvent.target) !== null && v !== void 0 && v.classList.contains(Y)))
          return !1;
        const {
          droppingItem: g,
          onDropDragOver: _,
          margin: k,
          cols: M,
          rowHeight: q,
          maxRows: W,
          width: J,
          containerPadding: ce,
          transformScale: se
        } = this.props, oe = _?.(p);
        if (oe === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const pe = w(w({}, g), oe), {
          layout: X
        } = this.state, ee = p.currentTarget.getBoundingClientRect(), re = p.clientX - ee.left, U = p.clientY - ee.top, le = {
          left: re / se,
          top: U / se,
          e: p
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: te,
              top: L
            } = this.state.droppingPosition;
            (te != re || L != U) && this.setState({
              droppingPosition: le
            });
          }
        } else {
          const te = {
            cols: M,
            margin: k,
            maxRows: W,
            rowHeight: q,
            containerWidth: J,
            containerPadding: ce || k
          }, L = (0, c.calcXY)(te, U, re, pe.w, pe.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ r.createElement("div", {
              key: pe.i
            }),
            droppingPosition: le,
            layout: [...X, w(w({}, pe), {}, {
              x: L.x,
              y: L.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), P(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: p,
          cols: v
        } = this.props, {
          layout: g
        } = this.state, _ = (0, u.compact)(g.filter((k) => k.i !== p.i), (0, u.compactType)(this.props), v, this.props.allowOverlap);
        this.setState({
          layout: _,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), P(this, "onDragLeave", (p) => {
        p.preventDefault(), p.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), P(this, "onDragEnter", (p) => {
        p.preventDefault(), p.stopPropagation(), this.dragEnterCounter++;
      }), P(this, "onDrop", (p) => {
        p.preventDefault(), p.stopPropagation();
        const {
          droppingItem: v
        } = this.props, {
          layout: g
        } = this.state, _ = g.find((k) => k.i === v.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(g, _, p);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(p, v) {
      let g;
      return v.activeDrag ? null : (!(0, o.deepEqual)(p.layout, v.propsLayout) || p.compactType !== v.compactType ? g = p.layout : (0, u.childrenEqual)(p.children, v.children) || (g = v.layout), g ? {
        layout: (0, u.synchronizeLayoutWithChildren)(g, p.children, p.cols, (0, u.compactType)(p), p.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: p.compactType,
        children: p.children,
        propsLayout: p.layout
      } : null);
    }
    shouldComponentUpdate(p, v) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== p.children || !(0, u.fastRGLPropsEqual)(this.props, p, o.deepEqual) || this.state.activeDrag !== v.activeDrag || this.state.mounted !== v.mounted || this.state.droppingPosition !== v.droppingPosition
      );
    }
    componentDidUpdate(p, v) {
      if (!this.state.activeDrag) {
        const g = this.state.layout, _ = v.layout;
        this.onLayoutMaybeChanged(g, _);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const p = (0, u.bottom)(this.state.layout), v = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return p * this.props.rowHeight + (p - 1) * this.props.margin[1] + v * 2 + "px";
    }
    onLayoutMaybeChanged(p, v) {
      v || (v = this.state.layout), (0, o.deepEqual)(v, p) || this.props.onLayoutChange(p);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: p
      } = this.state;
      if (!p) return null;
      const {
        width: v,
        cols: g,
        margin: _,
        containerPadding: k,
        rowHeight: M,
        maxRows: q,
        useCSSTransforms: W,
        transformScale: J
      } = this.props;
      return /* @__PURE__ */ r.createElement(f.default, {
        w: p.w,
        h: p.h,
        x: p.x,
        y: p.y,
        i: p.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: v,
        cols: g,
        margin: _,
        containerPadding: k || _,
        maxRows: q,
        rowHeight: M,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: W,
        transformScale: J
      }, /* @__PURE__ */ r.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(p, v) {
      if (!p || !p.key) return;
      const g = (0, u.getLayoutItem)(this.state.layout, String(p.key));
      if (!g) return null;
      const {
        width: _,
        cols: k,
        margin: M,
        containerPadding: q,
        rowHeight: W,
        maxRows: J,
        isDraggable: ce,
        isResizable: se,
        isBounded: oe,
        useCSSTransforms: pe,
        transformScale: X,
        draggableCancel: ee,
        draggableHandle: re,
        resizeHandles: U,
        resizeHandle: le
      } = this.props, {
        mounted: te,
        droppingPosition: L
      } = this.state, H = typeof g.isDraggable == "boolean" ? g.isDraggable : !g.static && ce, _e = typeof g.isResizable == "boolean" ? g.isResizable : !g.static && se, Se = g.resizeHandles || U, Re = H && oe && g.isBounded !== !1;
      return /* @__PURE__ */ r.createElement(f.default, {
        containerWidth: _,
        cols: k,
        margin: M,
        containerPadding: q || M,
        maxRows: J,
        rowHeight: W,
        cancel: ee,
        handle: re,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: H,
        isResizable: _e,
        isBounded: Re,
        useCSSTransforms: pe && te,
        usePercentages: !te,
        transformScale: X,
        w: g.w,
        h: g.h,
        x: g.x,
        y: g.y,
        i: g.i,
        minH: g.minH,
        minW: g.minW,
        maxH: g.maxH,
        maxW: g.maxW,
        static: g.static,
        droppingPosition: v ? L : void 0,
        resizeHandles: Se,
        resizeHandle: le
      }, p);
    }
    render() {
      const {
        className: p,
        style: v,
        isDroppable: g,
        innerRef: _
      } = this.props, k = (0, a.default)(Y, p), M = w({
        height: this.containerHeight()
      }, v);
      return /* @__PURE__ */ r.createElement("div", {
        ref: _,
        className: k,
        style: M,
        onDrop: g ? this.onDrop : u.noop,
        onDragLeave: g ? this.onDragLeave : u.noop,
        onDragEnter: g ? this.onDragEnter : u.noop,
        onDragOver: g ? this.onDragOver : u.noop
      }, r.Children.map(this.props.children, (q) => this.processGridItem(q)), g && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ci.default = O, P(O, "displayName", "ReactGridLayout"), P(O, "propTypes", y.default), P(O, "defaultProps", {
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
  }), ci;
}
var yi = {}, Gn = {}, Hd;
function Lp() {
  if (Hd) return Gn;
  Hd = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.findOrGenerateResponsiveLayout = u, Gn.getBreakpointFromWidth = o, Gn.getColsFromBreakpoint = a, Gn.sortBreakpoints = c;
  var r = kr();
  function o(f, y) {
    const m = c(f);
    let h = m[0];
    for (let x = 1, w = m.length; x < w; x++) {
      const P = m[x];
      y > f[P] && (h = P);
    }
    return h;
  }
  function a(f, y) {
    if (!y[f])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + f + " is missing!");
    return y[f];
  }
  function u(f, y, m, h, x, w) {
    if (f[m]) return (0, r.cloneLayout)(f[m]);
    let P = f[h];
    const z = c(y), V = z.slice(z.indexOf(m));
    for (let Y = 0, F = V.length; Y < F; Y++) {
      const O = V[Y];
      if (f[O]) {
        P = f[O];
        break;
      }
    }
    return P = (0, r.cloneLayout)(P || []), (0, r.compact)((0, r.correctBounds)(P, {
      cols: x
    }), w, x);
  }
  function c(f) {
    return Object.keys(f).sort(function(m, h) {
      return f[m] - f[h];
    });
  }
  return Gn;
}
var Wd;
function hh() {
  if (Wd) return yi;
  Wd = 1, Object.defineProperty(yi, "__esModule", {
    value: !0
  }), yi.default = void 0;
  var r = h(Rt()), o = m(/* @__PURE__ */ Ln()), a = /* @__PURE__ */ Rl(), u = kr(), c = Lp(), f = m(Pp());
  const y = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function m(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function h(g, _) {
    if (typeof WeakMap == "function") var k = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
    return (h = function(q, W) {
      if (!W && q && q.__esModule) return q;
      var J, ce, se = { __proto__: null, default: q };
      if (q === null || typeof q != "object" && typeof q != "function") return se;
      if (J = W ? M : k) {
        if (J.has(q)) return J.get(q);
        J.set(q, se);
      }
      for (const oe in q) oe !== "default" && {}.hasOwnProperty.call(q, oe) && ((ce = (J = Object.defineProperty) && Object.getOwnPropertyDescriptor(q, oe)) && (ce.get || ce.set) ? J(se, oe, ce) : se[oe] = q[oe]);
      return se;
    })(g, _);
  }
  function x() {
    return x = Object.assign ? Object.assign.bind() : function(g) {
      for (var _ = 1; _ < arguments.length; _++) {
        var k = arguments[_];
        for (var M in k) ({}).hasOwnProperty.call(k, M) && (g[M] = k[M]);
      }
      return g;
    }, x.apply(null, arguments);
  }
  function w(g, _) {
    if (g == null) return {};
    var k, M, q = P(g, _);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(g);
      for (M = 0; M < W.length; M++) k = W[M], _.indexOf(k) === -1 && {}.propertyIsEnumerable.call(g, k) && (q[k] = g[k]);
    }
    return q;
  }
  function P(g, _) {
    if (g == null) return {};
    var k = {};
    for (var M in g) if ({}.hasOwnProperty.call(g, M)) {
      if (_.indexOf(M) !== -1) continue;
      k[M] = g[M];
    }
    return k;
  }
  function z(g, _) {
    var k = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(g);
      _ && (M = M.filter(function(q) {
        return Object.getOwnPropertyDescriptor(g, q).enumerable;
      })), k.push.apply(k, M);
    }
    return k;
  }
  function V(g) {
    for (var _ = 1; _ < arguments.length; _++) {
      var k = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? z(Object(k), !0).forEach(function(M) {
        Y(g, M, k[M]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(k)) : z(Object(k)).forEach(function(M) {
        Object.defineProperty(g, M, Object.getOwnPropertyDescriptor(k, M));
      });
    }
    return g;
  }
  function Y(g, _, k) {
    return (_ = F(_)) in g ? Object.defineProperty(g, _, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = k, g;
  }
  function F(g) {
    var _ = O(g, "string");
    return typeof _ == "symbol" ? _ : _ + "";
  }
  function O(g, _) {
    if (typeof g != "object" || !g) return g;
    var k = g[Symbol.toPrimitive];
    if (k !== void 0) {
      var M = k.call(g, _);
      if (typeof M != "object") return M;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(g);
  }
  const b = (g) => Object.prototype.toString.call(g);
  function p(g, _) {
    return g == null ? null : Array.isArray(g) ? g : g[_];
  }
  let v = class extends r.Component {
    constructor() {
      super(...arguments), Y(this, "state", this.generateInitialState()), Y(this, "onLayoutChange", (_) => {
        this.props.onLayoutChange(_, V(V({}, this.props.layouts), {}, {
          [this.state.breakpoint]: _
        }));
      });
    }
    generateInitialState() {
      const {
        width: _,
        breakpoints: k,
        layouts: M,
        cols: q
      } = this.props, W = (0, c.getBreakpointFromWidth)(k, _), J = (0, c.getColsFromBreakpoint)(W, q), ce = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, c.findOrGenerateResponsiveLayout)(M, k, W, W, J, ce),
        breakpoint: W,
        cols: J
      };
    }
    static getDerivedStateFromProps(_, k) {
      if (!(0, a.deepEqual)(_.layouts, k.layouts)) {
        const {
          breakpoint: M,
          cols: q
        } = k;
        return {
          layout: (0, c.findOrGenerateResponsiveLayout)(_.layouts, _.breakpoints, M, M, q, _.compactType),
          layouts: _.layouts
        };
      }
      return null;
    }
    componentDidUpdate(_) {
      (this.props.width != _.width || this.props.breakpoint !== _.breakpoint || !(0, a.deepEqual)(this.props.breakpoints, _.breakpoints) || !(0, a.deepEqual)(this.props.cols, _.cols)) && this.onWidthChange(_);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(_) {
      const {
        breakpoints: k,
        cols: M,
        layouts: q,
        compactType: W
      } = this.props, J = this.props.breakpoint || (0, c.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), ce = this.state.breakpoint, se = (0, c.getColsFromBreakpoint)(J, M), oe = V({}, q);
      if (ce !== J || _.breakpoints !== k || _.cols !== M) {
        ce in oe || (oe[ce] = (0, u.cloneLayout)(this.state.layout));
        let ee = (0, c.findOrGenerateResponsiveLayout)(oe, k, J, ce, se, W);
        ee = (0, u.synchronizeLayoutWithChildren)(ee, this.props.children, se, W, this.props.allowOverlap), oe[J] = ee, this.props.onBreakpointChange(J, se), this.props.onLayoutChange(ee, oe), this.setState({
          breakpoint: J,
          layout: ee,
          cols: se
        });
      }
      const pe = p(this.props.margin, J), X = p(this.props.containerPadding, J);
      this.props.onWidthChange(this.props.width, pe, se, X);
    }
    render() {
      const _ = this.props, {
        breakpoint: k,
        breakpoints: M,
        cols: q,
        layouts: W,
        margin: J,
        containerPadding: ce,
        onBreakpointChange: se,
        onLayoutChange: oe,
        onWidthChange: pe
      } = _, X = w(_, y);
      return /* @__PURE__ */ r.createElement(f.default, x({}, X, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: p(J, this.state.breakpoint),
        containerPadding: p(ce, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return yi.default = v, Y(v, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: o.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: o.default.object,
    allowOverlap: o.default.bool,
    // # of cols. This is a breakpoint -> cols map
    cols: o.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: o.default.oneOfType([o.default.array, o.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: o.default.oneOfType([o.default.array, o.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts(g, _) {
      if (b(g[_]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + b(g[_]));
      Object.keys(g[_]).forEach((k) => {
        if (!(k in g.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, u.validateLayout)(g.layouts[k], "layouts." + k);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: o.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: o.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: o.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: o.default.func
  }), Y(v, "defaultProps", {
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
  }), yi;
}
var Bo = {}, Dp = function() {
  if (typeof Map < "u")
    return Map;
  function r(o, a) {
    var u = -1;
    return o.some(function(c, f) {
      return c[0] === a ? (u = f, !0) : !1;
    }), u;
  }
  return (
    /** @class */
    function() {
      function o() {
        this.__entries__ = [];
      }
      return Object.defineProperty(o.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), o.prototype.get = function(a) {
        var u = r(this.__entries__, a), c = this.__entries__[u];
        return c && c[1];
      }, o.prototype.set = function(a, u) {
        var c = r(this.__entries__, a);
        ~c ? this.__entries__[c][1] = u : this.__entries__.push([a, u]);
      }, o.prototype.delete = function(a) {
        var u = this.__entries__, c = r(u, a);
        ~c && u.splice(c, 1);
      }, o.prototype.has = function(a) {
        return !!~r(this.__entries__, a);
      }, o.prototype.clear = function() {
        this.__entries__.splice(0);
      }, o.prototype.forEach = function(a, u) {
        u === void 0 && (u = null);
        for (var c = 0, f = this.__entries__; c < f.length; c++) {
          var y = f[c];
          a.call(u, y[1], y[0]);
        }
      }, o;
    }()
  );
}(), yl = typeof window < "u" && typeof document < "u" && window.document === document, Zo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), gh = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Zo) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), yh = 2;
function vh(r, o) {
  var a = !1, u = !1, c = 0;
  function f() {
    a && (a = !1, r()), u && m();
  }
  function y() {
    gh(f);
  }
  function m() {
    var h = Date.now();
    if (a) {
      if (h - c < yh)
        return;
      u = !0;
    } else
      a = !0, u = !1, setTimeout(y, o);
    c = h;
  }
  return m;
}
var wh = 20, _h = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], bh = typeof MutationObserver < "u", xh = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = vh(this.refresh.bind(this), wh);
    }
    return r.prototype.addObserver = function(o) {
      ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(o) {
      var a = this.observers_, u = a.indexOf(o);
      ~u && a.splice(u, 1), !a.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var o = this.updateObservers_();
      o && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var o = this.observers_.filter(function(a) {
        return a.gatherActive(), a.hasActive();
      });
      return o.forEach(function(a) {
        return a.broadcastActive();
      }), o.length > 0;
    }, r.prototype.connect_ = function() {
      !yl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), bh ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !yl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(o) {
      var a = o.propertyName, u = a === void 0 ? "" : a, c = _h.some(function(f) {
        return !!~u.indexOf(f);
      });
      c && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), Mp = function(r, o) {
  for (var a = 0, u = Object.keys(o); a < u.length; a++) {
    var c = u[a];
    Object.defineProperty(r, c, {
      value: o[c],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return r;
}, xr = function(r) {
  var o = r && r.ownerDocument && r.ownerDocument.defaultView;
  return o || Zo;
}, Tp = oa(0, 0, 0, 0);
function Jo(r) {
  return parseFloat(r) || 0;
}
function $d(r) {
  for (var o = [], a = 1; a < arguments.length; a++)
    o[a - 1] = arguments[a];
  return o.reduce(function(u, c) {
    var f = r["border-" + c + "-width"];
    return u + Jo(f);
  }, 0);
}
function Sh(r) {
  for (var o = ["top", "right", "bottom", "left"], a = {}, u = 0, c = o; u < c.length; u++) {
    var f = c[u], y = r["padding-" + f];
    a[f] = Jo(y);
  }
  return a;
}
function kh(r) {
  var o = r.getBBox();
  return oa(0, 0, o.width, o.height);
}
function Eh(r) {
  var o = r.clientWidth, a = r.clientHeight;
  if (!o && !a)
    return Tp;
  var u = xr(r).getComputedStyle(r), c = Sh(u), f = c.left + c.right, y = c.top + c.bottom, m = Jo(u.width), h = Jo(u.height);
  if (u.boxSizing === "border-box" && (Math.round(m + f) !== o && (m -= $d(u, "left", "right") + f), Math.round(h + y) !== a && (h -= $d(u, "top", "bottom") + y)), !Rh(r)) {
    var x = Math.round(m + f) - o, w = Math.round(h + y) - a;
    Math.abs(x) !== 1 && (m -= x), Math.abs(w) !== 1 && (h -= w);
  }
  return oa(c.left, c.top, m, h);
}
var Ch = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof xr(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof xr(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function Rh(r) {
  return r === xr(r).document.documentElement;
}
function zh(r) {
  return yl ? Ch(r) ? kh(r) : Eh(r) : Tp;
}
function Oh(r) {
  var o = r.x, a = r.y, u = r.width, c = r.height, f = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, y = Object.create(f.prototype);
  return Mp(y, {
    x: o,
    y: a,
    width: u,
    height: c,
    top: a,
    right: o + u,
    bottom: c + a,
    left: o
  }), y;
}
function oa(r, o, a, u) {
  return { x: r, y: o, width: a, height: u };
}
var Ph = (
  /** @class */
  function() {
    function r(o) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = oa(0, 0, 0, 0), this.target = o;
    }
    return r.prototype.isActive = function() {
      var o = zh(this.target);
      return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var o = this.contentRect_;
      return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
    }, r;
  }()
), Lh = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o, a) {
      var u = Oh(a);
      Mp(this, { target: o, contentRect: u });
    }
    return r;
  }()
), Dh = (
  /** @class */
  function() {
    function r(o, a, u) {
      if (this.activeObservations_ = [], this.observations_ = new Dp(), typeof o != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = o, this.controller_ = a, this.callbackCtx_ = u;
    }
    return r.prototype.observe = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(o instanceof xr(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var a = this.observations_;
        a.has(o) || (a.set(o, new Ph(o)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(o instanceof xr(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var a = this.observations_;
        a.has(o) && (a.delete(o), a.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var o = this;
      this.clearActive(), this.observations_.forEach(function(a) {
        a.isActive() && o.activeObservations_.push(a);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var o = this.callbackCtx_, a = this.activeObservations_.map(function(u) {
          return new Lh(u.target, u.broadcastRect());
        });
        this.callback_.call(o, a, o), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), Np = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Dp(), Ap = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var a = xh.getInstance(), u = new Dh(o, a, this);
      Np.set(this, u);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  Ap.prototype[r] = function() {
    var o;
    return (o = Np.get(this))[r].apply(o, arguments);
  };
});
var Mh = function() {
  return typeof Zo.ResizeObserver < "u" ? Zo.ResizeObserver : Ap;
}();
const Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mh
}, Symbol.toStringTag, { value: "Module" })), Nh = /* @__PURE__ */ Ym(Th);
var Ud;
function Ah() {
  if (Ud) return Bo;
  Ud = 1, Object.defineProperty(Bo, "__esModule", {
    value: !0
  }), Bo.default = Y;
  var r = y(Rt()), o = f(/* @__PURE__ */ Ln()), a = f(Nh), u = f(ia());
  const c = ["measureBeforeMount"];
  function f(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function y(F, O) {
    if (typeof WeakMap == "function") var b = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
    return (y = function(v, g) {
      if (!g && v && v.__esModule) return v;
      var _, k, M = { __proto__: null, default: v };
      if (v === null || typeof v != "object" && typeof v != "function") return M;
      if (_ = g ? p : b) {
        if (_.has(v)) return _.get(v);
        _.set(v, M);
      }
      for (const q in v) q !== "default" && {}.hasOwnProperty.call(v, q) && ((k = (_ = Object.defineProperty) && Object.getOwnPropertyDescriptor(v, q)) && (k.get || k.set) ? _(M, q, k) : M[q] = v[q]);
      return M;
    })(F, O);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(F) {
      for (var O = 1; O < arguments.length; O++) {
        var b = arguments[O];
        for (var p in b) ({}).hasOwnProperty.call(b, p) && (F[p] = b[p]);
      }
      return F;
    }, m.apply(null, arguments);
  }
  function h(F, O) {
    if (F == null) return {};
    var b, p, v = x(F, O);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(F);
      for (p = 0; p < g.length; p++) b = g[p], O.indexOf(b) === -1 && {}.propertyIsEnumerable.call(F, b) && (v[b] = F[b]);
    }
    return v;
  }
  function x(F, O) {
    if (F == null) return {};
    var b = {};
    for (var p in F) if ({}.hasOwnProperty.call(F, p)) {
      if (O.indexOf(p) !== -1) continue;
      b[p] = F[p];
    }
    return b;
  }
  function w(F, O, b) {
    return (O = P(O)) in F ? Object.defineProperty(F, O, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : F[O] = b, F;
  }
  function P(F) {
    var O = z(F, "string");
    return typeof O == "symbol" ? O : O + "";
  }
  function z(F, O) {
    if (typeof F != "object" || !F) return F;
    var b = F[Symbol.toPrimitive];
    if (b !== void 0) {
      var p = b.call(F, O);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (O === "string" ? String : Number)(F);
  }
  const V = "react-grid-layout";
  function Y(F) {
    var O;
    return O = class extends r.Component {
      constructor() {
        super(...arguments), w(this, "state", {
          width: 1280
        }), w(this, "elementRef", /* @__PURE__ */ r.createRef()), w(this, "mounted", !1), w(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new a.default((v) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const _ = v[0].contentRect.width;
            this.setState({
              width: _
            });
          }
        });
        const p = this.elementRef.current;
        p instanceof HTMLElement && this.resizeObserver.observe(p);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const p = this.elementRef.current;
        p instanceof HTMLElement && this.resizeObserver.unobserve(p), this.resizeObserver.disconnect();
      }
      render() {
        const p = this.props, {
          measureBeforeMount: v
        } = p, g = h(p, c);
        return v && !this.mounted ? /* @__PURE__ */ r.createElement("div", {
          className: (0, u.default)(this.props.className, V),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ r.createElement(F, m({
          innerRef: this.elementRef
        }, g, this.state));
      }
    }, w(O, "defaultProps", {
      measureBeforeMount: !1
    }), w(O, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: o.default.bool
    }), O;
  }
  return Bo;
}
var Vd;
function Ih() {
  return Vd || (Vd = 1, function(r) {
    r.exports = Pp().default, r.exports.utils = kr(), r.exports.calculateUtils = zl(), r.exports.Responsive = hh().default, r.exports.Responsive.utils = Lp(), r.exports.WidthProvider = Ah().default;
  }(Qs)), Qs.exports;
}
var Gd = Ih();
const jh = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, dn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, Ip = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, qe = (r, o, a, u, c) => ({ i: r, x: o, y: a, w: u, h: c, minW: Math.min(u, 3), minH: 2, maxW: 12, maxH: 12 }), Uo = { lg: [qe("activity-history", 0, 0, 3, 4), qe("automations", 3, 0, 3, 4), qe("backup-restore", 6, 0, 3, 4), qe("security-status", 9, 0, 3, 3), qe("access-control", 0, 5, 6, 3), qe("alarm-configuration", 6, 4, 6, 8)], md: [qe("activity-history", 0, 0, 4, 4), qe("automations", 4, 0, 4, 4), qe("backup-restore", 0, 4, 4, 4), qe("access-control", 4, 4, 4, 3), qe("alarm-configuration", 0, 8, 8, 8), qe("security-status", 0, 16, 4, 3)], sm: [qe("activity-history", 0, 0, 4, 4), qe("automations", 0, 4, 4, 4), qe("backup-restore", 0, 8, 4, 4), qe("access-control", 0, 12, 4, 3), qe("alarm-configuration", 0, 15, 4, 8), qe("security-status", 0, 23, 4, 3)], xs: [qe("activity-history", 0, 0, 2, 4), qe("automations", 0, 4, 2, 4), qe("backup-restore", 0, 8, 2, 4), qe("access-control", 0, 12, 2, 3), qe("alarm-configuration", 0, 15, 2, 8), qe("security-status", 0, 23, 2, 3)], xxs: [qe("activity-history", 0, 0, 2, 4), qe("automations", 0, 4, 2, 4), qe("backup-restore", 0, 8, 2, 4), qe("access-control", 0, 12, 2, 3), qe("alarm-configuration", 0, 15, 2, 8), qe("security-status", 0, 23, 2, 3)] };
function vl(r, o, a) {
  return Object.entries(Ip).map(([u, c]) => ({ size: u, distance: Math.abs(Math.min(c.w, a) - r) + Math.abs(c.h - o) })).sort((u, c) => u.distance - c.distance)[0]?.size ?? "S";
}
function jp(r, o) {
  const a = Ip[r];
  return { w: Math.min(a.w, o), h: a.h };
}
function Bh(r, o) {
  const a = vl(r.w, r.h, o), u = jp(a, o);
  return { ...r, w: u.w, h: u.h, x: Math.max(0, Math.min(r.x, o - u.w)), size: a };
}
function wl(r, o) {
  return r.some((a) => a.i !== o.i && o.x < a.x + a.w && o.x + o.w > a.x && o.y < a.y + a.h && o.y + o.h > a.y);
}
function Fh(r, o, a) {
  for (let u = 0; u < 240; u++) for (let c = 0; c <= a - o.w; c++) {
    const f = { ...o, x: c, y: u };
    if (!wl(r, f)) return f;
  }
  return { ...o, x: 0, y: Math.max(0, ...r.map((u) => u.y + u.h)) };
}
function Sr(r) {
  const o = {};
  return Object.keys(dn).forEach((a) => {
    const u = dn[a], c = Array.isArray(r?.[a]) ? r[a] : [], f = new Map(c.map((x) => [x.i, x])), y = (Uo[a] || []).map((x) => {
      const w = f.get(x.i);
      if (!w) return { ...x };
      const P = Math.min(Math.max(1, w.w), u);
      return { ...x, ...w, w: P, x: Math.max(0, Math.min(w.x, u - P)), y: Math.max(0, w.y) };
    }), m = new Set(y.map((x) => x.i)), h = c.filter((x) => !m.has(x.i)).map((x) => ({ ...x, w: Math.min(Math.max(1, x.w), u), x: Math.max(0, Math.min(x.x, u - Math.min(x.w, u))), y: Math.max(0, x.y) }));
    o[a] = [...y, ...h];
  }), o;
}
class qh {
  key(o, a) {
    return `argus:dashboard-layout:${o}:${a}`;
  }
  read(o, a) {
    try {
      const u = JSON.parse(localStorage.getItem(this.key(o, a)) || "null");
      return u?.layoutVersion === 1 ? u : null;
    } catch {
      return null;
    }
  }
  write(o, a, u) {
    localStorage.setItem(this.key(o, a), JSON.stringify(u));
  }
  async load(o, a) {
    const u = this.read(o, a);
    return u ? Sr(u.layouts) : null;
  }
  async save(o, a, u) {
    const c = this.read(o, a);
    this.write(o, a, { layoutVersion: 1, layouts: u, visibility: c?.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(o, a) {
    return this.read(o, a)?.visibility ?? null;
  }
  async saveVisibility(o, a, u) {
    const c = this.read(o, a);
    this.write(o, a, { layoutVersion: 1, layouts: c?.layouts ?? Sr(null), visibility: u, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(o, a) {
    localStorage.removeItem(this.key(o, a));
  }
}
const Hh = Gd.WidthProvider(Gd.Responsive);
function Wh({ widget: r, node: o, editing: a, size: u, onSize: c, onHide: f, onReset: y }) {
  const m = mt.useRef(null);
  return mt.useLayoutEffect(() => {
    m.current?.appendChild(o), o.draggable = !1, o.querySelector(":scope > .panel-edit-overlay")?.remove(), a ? o.setAttribute("inert", "") : o.removeAttribute("inert");
  }, [o, a]), /* @__PURE__ */ $e.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ $e.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ $e.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${r.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ $e.jsx("strong", { children: r.title }),
      /* @__PURE__ */ $e.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ $e.jsx("summary", { "aria-label": `Opciones de ${r.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ $e.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ $e.jsx("span", { children: "Tamaño" }),
          /* @__PURE__ */ $e.jsx("div", { children: ["S", "M", "L", "XL"].map((h) => /* @__PURE__ */ $e.jsx("button", { type: "button", className: h === u ? "active" : "", onClick: () => c(h), children: h }, h)) }),
          /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: y, children: "Restablecer widget" }),
          /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: f, children: "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ $e.jsx("div", { className: "argus-widget__content", ref: m })
  ] });
}
function $h({ widgets: r, nodes: o, storage: a, userId: u, dashboardId: c, onEditing: f, registerEditor: y }) {
  const m = mt.useMemo(() => Object.fromEntries(r.map((X) => [X.id, X.visible])), [r]), [h, x] = mt.useState(Uo), [w, P] = mt.useState(m), [z, V] = mt.useState(!1), [Y, F] = mt.useState(!1), [O, b] = mt.useState("lg"), [p, v] = mt.useState(""), g = mt.useRef(Uo), _ = mt.useRef(), k = mt.useRef(!1);
  mt.useEffect(() => {
    y(V);
  }, [y]), mt.useEffect(() => {
    let X = !0;
    return F(!1), Promise.all([a.load(u, c), a.loadVisibility?.(u, c)]).then(([ee, re]) => {
      if (!X) return;
      const U = Sr(ee);
      x(U), g.current = U, re && P({ ...m, ...re }), F(!0);
    }), () => {
      X = !1;
    };
  }, [a, u, c, m]), mt.useEffect(() => {
    f(z), Y && k.current && !z && a.save(u, c, g.current), k.current = z;
  }, [z, Y, f, a, u, c]), mt.useEffect(() => {
    const X = (ee) => {
      z && (ee.key === "Escape" ? (V(!1), v("Edición finalizada")) : ee.key === "Enter" && ee.target === document.body && V(!1));
    };
    return window.addEventListener("keydown", X), () => window.removeEventListener("keydown", X);
  }, [z]), mt.useEffect(() => () => clearTimeout(_.current), []);
  const M = (X, ee = !1) => {
    x(X), g.current = X, clearTimeout(_.current), _.current = window.setTimeout(() => a.save(u, c, X), ee ? 0 : 550);
  }, q = (X, ee) => {
    const re = { ...w, [X]: ee };
    P(re), a.saveVisibility?.(u, c, re), v(ee ? "Widget visible" : "Widget oculto");
  }, W = (X, ee, re) => {
    const U = g.current, le = U[O] || [], te = le.filter((_e) => _e.i !== X), L = wl(te, ee) ? Fh(te, ee, dn[O]) : ee, H = { ...U, [O]: le.map((_e) => _e.i === X ? L : _e) };
    M(H, !0), v(re);
  }, J = (X, ee) => {
    const re = (g.current[O] || []).find((le) => le.i === X);
    if (!re) return;
    const U = jp(ee, dn[O]);
    W(X, { ...re, ...U, x: Math.max(0, Math.min(re.x, dn[O] - U.w)) }, `Tamaño ${ee}`);
  }, ce = (X) => {
    const ee = (Uo[O] || []).find((re) => re.i === X);
    ee && W(X, { ...ee }, "Widget restablecido");
  }, se = (X, ee, re) => {
    const U = Bh(re, dn[O]);
    W(re.i, U, `Tamaño ${vl(U.w, U.h, dn[O])}`);
  }, oe = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await a.reset(u, c);
    const X = Sr(null);
    P(m), M(X, !0), v("Diseño predeterminado restaurado");
  }, pe = h[O] || [];
  return Y ? /* @__PURE__ */ $e.jsxs("section", { className: `argus-dashboard ${z ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ $e.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: () => V((X) => !X), children: z ? "✓ Listo" : "✥ Editar tablero" }),
      z && /* @__PURE__ */ $e.jsxs($e.Fragment, { children: [
        /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: oe, children: "Restablecer diseño" }),
        /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: r.filter((X) => w[X.id] === !1).map((X) => /* @__PURE__ */ $e.jsxs("button", { type: "button", onClick: () => q(X.id, !0), children: [
          "Mostrar ",
          X.title
        ] }, X.id)) })
      ] })
    ] }),
    /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: p }),
    /* @__PURE__ */ $e.jsx(Hh, { className: "argus-dashboard-grid", layouts: h, breakpoints: jh, cols: dn, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: z, isResizable: z, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (X) => b(X), onLayoutChange: (X, ee) => {
      z && (x(ee), g.current = ee);
    }, onResizeStop: se, onDragStop: (X, ee, re) => {
      const U = (g.current[O] || []).filter((le) => le.i !== re.i);
      if (wl(U, re)) {
        x({ ...g.current }), v("Posición bloqueada por colisión");
        return;
      }
      W(re.i, re, "Posición guardada");
    }, useCSSTransforms: !0, children: r.filter((X) => w[X.id] !== !1 && o.has(X.id)).map((X) => {
      const ee = pe.find((U) => U.i === X.id), re = ee ? vl(ee.w, ee.h, dn[O]) : X.size;
      return /* @__PURE__ */ $e.jsx("div", { children: /* @__PURE__ */ $e.jsx(Wh, { widget: X, node: o.get(X.id), editing: z, size: re, onSize: (U) => J(X.id, U), onHide: () => q(X.id, !1), onReset: () => ce(X.id) }) }, X.id);
    }) })
  ] }) : /* @__PURE__ */ $e.jsx("section", { className: "argus-dashboard", children: /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: "Cargando tablero…" }) });
}
const Yd = [
  { id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 },
  { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 },
  { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 },
  { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 },
  { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 },
  { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }
];
class Uh extends qh {
  constructor(o) {
    super(), this.panel = o;
  }
  record() {
    return this.panel._ui?.dashboard?.react_layout_v2 || {};
  }
  async remote(o) {
    if (!this.panel._send) return;
    const u = { ...this.record(), ...o, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, c = { ...this.panel._ui?.dashboard || {}, react_layout_v2: u }, f = this.panel._dashboard?.entry_id || this.panel._dashboard?.entries?.[0]?.entry_id;
    await this.panel._send("argus/save_ui", { dashboard: c, ...f ? { entry_id: f } : {} }), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = c;
  }
  async load(o, a) {
    const u = this.record().layouts;
    return u ? Sr(u) : super.load(o, a);
  }
  async save(o, a, u) {
    await super.save(o, a, u), await this.remote({ layouts: u });
  }
  async loadVisibility(o, a) {
    return this.record().visibility || await super.loadVisibility(o, a);
  }
  async saveVisibility(o, a, u) {
    await super.saveVisibility(o, a, u), await this.remote({ visibility: u });
  }
  async reset(o, a) {
    await super.reset(o, a), await this.remote({ layouts: Sr(null), visibility: {} });
  }
}
function Bp(r) {
  const o = r.shadowRoot?.getElementById("edit-widgets-label");
  (o?.closest("button") || o)?.remove(), r.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((u) => u.remove());
  let a = r.shadowRoot?.getElementById("argus-react-editor-only");
  a || (a = document.createElement("style"), a.id = "argus-react-editor-only", a.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", r.shadowRoot.appendChild(a));
}
function Vh(r) {
  Bp(r);
  const o = r.shadowRoot?.getElementById("widget-grid"), a = r._dashboard?.entry_id || r._dashboard?.entries?.[0]?.entry_id;
  if (!o || !a || r._argusReactRoot) return;
  let u = r.shadowRoot.getElementById("argus-react-dashboard-style");
  u || (u = document.createElement("style"), u.id = "argus-react-dashboard-style", u.textContent = rh + ih + oh, r.shadowRoot.appendChild(u));
  const c = /* @__PURE__ */ new Map();
  Yd.forEach((m) => {
    const h = r.shadowRoot.getElementById(m.nativeId);
    h && c.set(m.id, h);
  });
  const f = document.createElement("div");
  f.id = "argus-react-dashboard-root", o.appendChild(f);
  const y = nh.createRoot(f);
  r._argusReactRoot = y, y.render(/* @__PURE__ */ $e.jsx($h, { widgets: Yd, nodes: c, storage: new Uh(r), userId: r._currentProfile?.id || r._hass?.user?.id || "anonymous", dashboardId: a, onEditing: (m) => {
    r._widgetEditing = m, o.classList.toggle("editing", m);
  }, registerEditor: (m) => {
    r._argusReactSetEditing = m;
  } }));
}
function Gh(r) {
  if (!r || r.__argusReactDashboard) return;
  r.__argusReactDashboard = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load;
  o.connectedCallback = function() {
    const c = a?.call(this);
    return Bp(this), c;
  }, o._load = async function() {
    const c = await u?.call(this);
    return Vh(this), c;
  }, o._toggleWidgetEditing = function() {
    this._argusReactSetEditing?.(!this._widgetEditing);
  };
}
function Xd(r) {
  const o = r._hass?.auth?.accessToken;
  return o ? { Authorization: `Bearer ${o}` } : {};
}
function Yh(r) {
  const o = r?.prototype;
  !o || o.__argusMediaClient || (o.__argusMediaClient = !0, o._loadUploadedFiles = async function() {
    try {
      const a = await fetch("/api/argus/media", { headers: Xd(this), credentials: "same-origin" });
      if (!a.ok) throw new Error(`HTTP ${a.status}`);
      const u = await a.json();
      this._uploadedFiles = Array.isArray(u.files) ? u.files : [];
    } catch (a) {
      console.error("Private Argus media listing failed", a), this._uploadedFiles = [];
    }
    this._renderUploadedFiles?.();
  }, o._deleteUploadedFile = async function(a) {
    try {
      const u = await fetch(`/api/argus/media/${encodeURIComponent(a)}`, { method: "DELETE", headers: Xd(this), credentials: "same-origin" });
      if (!u.ok) throw new Error(`HTTP ${u.status}`);
      this._uploadedFiles = (this._uploadedFiles ?? []).filter((f) => f.name !== a);
      const c = [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]];
      for (const [f, y] of c) {
        const m = this.shadowRoot.getElementById(f);
        m?.value.includes(`/${a}?`) && (m.value = "", this[y] = "");
      }
      this._renderUploadedFiles?.();
    } catch (u) {
      const c = u instanceof Error ? u.message : String(u);
      console.error("Private Argus media deletion failed", u), window.alert(this._format?.("delete_file_error", { error: c }) ?? c);
    }
  });
}
const Fo = (r, o) => r.getElementById(o), qo = (r, o, a) => r._t?.(o) ?? a;
function Xh(r) {
  const o = r?.prototype;
  !o || o.__argusSecurityClient || (o.__argusSecurityClient = !0, o._savePin = async function() {
    const a = this.shadowRoot.getElementById("pin-status"), c = this._dashboard?.entries?.[0], f = Fo(this.shadowRoot, "current-pin")?.value ?? "", y = Fo(this.shadowRoot, "new-pin-1")?.value ?? "", m = Fo(this.shadowRoot, "new-pin-2")?.value ?? "", h = (x) => {
      a && (a.textContent = x, a.className = "status err");
    };
    if (!c?.entry_id) return h("No Argus config entry is available");
    if (c.pin_configured && !f) return h(qo(this, "pin_incorrect", "PIN incorrecto"));
    if (y !== m) return h(qo(this, "pin_mismatch", "Los PIN no coinciden"));
    if (y && !/^\d{4,12}$/.test(y)) return h("PIN: se requieren entre 4 y 12 dígitos");
    if (!this._send) return h("Argus WebSocket is unavailable");
    try {
      await this._send("argus/update_master_pin", { entry_id: c.entry_id, pin: y, current_pin: f }), c.pin_configured = !!y, a && (a.textContent = y ? qo(this, "pin_updated", "PIN actualizado") : qo(this, "pin_deleted", "PIN eliminado"), a.className = "status ok");
      for (const x of ["current-pin", "new-pin-1", "new-pin-2"]) {
        const w = Fo(this.shadowRoot, x);
        w && (w.value = "");
      }
      this._syncAccessSummary?.(), window.setTimeout(() => {
        this._load?.();
      }, 800);
    } catch (x) {
      h(x instanceof Error ? x.message : String(x));
    }
  }, o._handleForgotPin = function() {
    const a = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", u = this.shadowRoot.getElementById("pin-status");
    u ? (u.textContent = a, u.className = "status err") : window.alert(a);
  });
}
const Qh = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], Qd = { es: ["Configurar widgets", "Arrastrar", "Ocultar", "Mostrar", "Conectado", "Sin sensores configurados", "Todos los sensores están omitidos"], en: ["Configure widgets", "Drag", "Hide", "Show", "Connected", "No sensors configured", "All sensors are bypassed"], fr: ["Configurer les widgets", "Déplacer", "Masquer", "Afficher", "Connecté", "Aucun capteur configuré", "Tous les capteurs sont ignorés"], pt: ["Configurar widgets", "Arrastar", "Ocultar", "Mostrar", "Conectado", "Nenhum sensor configurado", "Todos os sensores estão ignorados"], it: ["Configura widget", "Trascina", "Nascondi", "Mostra", "Connesso", "Nessun sensore configurato", "Tutti i sensori sono esclusi"], zh: ["配置小组件", "拖动", "隐藏", "显示", "已连接", "未配置传感器", "所有传感器均已绕过"], ru: ["Настроить виджеты", "Перетащить", "Скрыть", "Показать", "Подключено", "Датчики не настроены", "Все датчики исключены"] }, Kh = (r) => {
  const o = String(r._manualLang || r._hass?.language || "en").toLowerCase().split(/[-_]/)[0];
  return Qd[o] || Qd.en;
}, Kd = (r) => [...r?.children || []].filter((o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")), nl = (r, o) => {
  if (!r) return;
  const a = r.querySelector("[data-fullscreen]");
  let u = r.querySelector("[data-exit-fullscreen]");
  u || (u = document.createElement("button"), u.className = "ghost entry-exit-fs", u.dataset.exitFullscreen = "", u.textContent = "×", u.style.cssText = "position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25)", u.onclick = () => r.getRootNode().host._exitFullscreenView(), r.appendChild(u)), a && (a.style.display = o ? "none" : "block"), u.style.display = o ? "block" : "none";
};
function Zd(r) {
  if (r.shadowRoot?.getElementById("argus-ui-fix")) return;
  const o = document.createElement("style");
  o.id = "argus-ui-fix", o.textContent = ".grid.editing .panel.widget-hidden-preview{opacity:.48!important}.widget-drag-handle{min-height:44px;display:flex;align-items:center;justify-content:center}.ios-fullscreen .entry-content.security-console{display:grid!important;grid-template-columns:minmax(230px,340px) minmax(150px,1fr) minmax(230px,380px)!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;gap:20px 32px!important;padding:56px 48px 32px!important;overflow:hidden!important}.ios-fullscreen .console-hud{grid-area:hud!important}.ios-fullscreen .liquid-stack{grid-area:modes!important;width:100%!important}.ios-fullscreen .entry-icon{grid-area:icon!important}.ios-fullscreen .console-sensors{grid-area:sensors!important;max-height:60vh!important;overflow:auto!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console{grid-template-columns:1fr!important;grid-template-rows:auto auto auto auto!important;grid-template-areas:'hud' 'icon' 'modes' 'sensors'!important;padding:64px 18px 22px!important;overflow-y:auto!important}.ios-fullscreen .liquid-stack,.ios-fullscreen .console-sensors{max-width:420px!important;margin:auto!important}}", r.shadowRoot.appendChild(o);
}
function rl(r) {
  const o = Kh(r), a = r.shadowRoot;
  if (!a) return;
  const u = a.getElementById("edit-widgets-label");
  u && (u.textContent = r._widgetEditing ? "✓ " + (r._t?.("done") || "Done") : "⚙️ " + o[0]), a.querySelectorAll(".widget-drag-handle").forEach((c) => c.textContent = "⋮⋮ " + o[1]), a.querySelectorAll(".widget-toggle-btn").forEach((c) => c.textContent = /mostrar|show|afficher|mostra|显示|показ/i.test(c.textContent) ? o[3] : o[2]), a.querySelectorAll(".console-empty").forEach((c) => c.textContent = /omit|bypass|ignor|exclu|绕过|исключ/i.test(c.textContent) ? o[6] : o[5]), a.querySelectorAll(".entry").forEach((c) => [...c.children].filter((f) => ["CONECTADO", "CONNECTED"].includes(f.textContent?.trim())).forEach((f) => {
    const y = f.firstElementChild;
    f.textContent = "", y && f.appendChild(y), f.append(o[4]);
  }));
}
function Zh(r) {
  if (!r || r.__uiAudit) return;
  r.__uiAudit = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._applyTranslations, c = o._renderEntries, f = o._initWidgetGrid, y = o._saveWidgetLayout;
  o.connectedCallback = function() {
    return Zd(this), a?.call(this);
  }, o._applyTranslations = function() {
    const m = u?.call(this);
    return rl(this), m;
  }, o._renderEntries = function() {
    const m = c?.call(this);
    return Zd(this), this.shadowRoot?.querySelectorAll(".entry").forEach((h, x) => nl(h, this._fullscreenIdx === x || h.classList.contains("ios-fullscreen"))), rl(this), m;
  }, o._toggleFullscreen = function(m) {
    if (m = m || this.shadowRoot?.querySelector(".entry"), !m) return;
    this._fullscreenIdx = Number(m.querySelector("[data-fullscreen]")?.dataset.fullscreen || 0), this._kioskLocked = !1, this._kioskTarget = m, this.classList.add("fullscreen-active"), m.classList.add("ios-fullscreen"), nl(m, !0), document.body.style.overflow = "hidden", (m.requestFullscreen || m.webkitRequestFullscreen)?.call(m).catch?.(() => {
    });
  }, o._exitFullscreenView = async function() {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : document.webkitExitFullscreen?.();
    } catch {
    }
    this.shadowRoot?.querySelectorAll(".entry.ios-fullscreen").forEach((m) => {
      m.classList.remove("ios-fullscreen"), nl(m, !1);
    }), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskTarget = null, document.body.style.overflow = "";
  }, o._initWidgetGrid = function() {
    if (!this._widgetConfigLoaded) {
      const h = this._ui?.dashboard?.widget_layout;
      if (h) try {
        localStorage.setItem("argus-widgets-v1", JSON.stringify(h));
      } catch {
      }
      this._widgetConfigLoaded = !0;
    }
    f?.call(this);
    const m = this.shadowRoot?.getElementById("widget-grid");
    Kd(m).forEach((h) => h.draggable = !!this._widgetEditing), m && !m._auditDrag && (m._auditDrag = !0, m.addEventListener("dragover", (h) => {
      if (!this._widgetEditing) return;
      h.preventDefault();
      const x = m.querySelector(".dragging");
      if (!x) return;
      let w = null, P = 1 / 0;
      if (Kd(m).filter((z) => z !== x).forEach((z) => {
        const V = z.getBoundingClientRect(), Y = Math.hypot(h.clientX - V.x - V.width / 2, h.clientY - V.y - V.height / 2);
        Y < P && (P = Y, w = z);
      }), w) {
        const z = w.getBoundingClientRect();
        w[h.clientX > z.x + z.width / 2 || h.clientY > z.y + z.height / 2 ? "after" : "before"](x);
      }
    })), rl(this);
  }, o._saveWidgetLayout = function() {
    y?.call(this);
    const m = this._widgetConfig || Qh;
    this._ui = this._ui || {};
    const h = { ...this._ui.dashboard || {}, widget_layout: m };
    this._ui.dashboard = h, clearTimeout(this._widgetSaveTimer), this._widgetSaveTimer = setTimeout(() => this._send("argus/save_ui", { dashboard: h }).catch((x) => console.error("Widget layout save failed", x)), 180);
  }, o._changeWidgetSize = function(m, h) {
    const x = (this._widgetConfig || []).find((P) => P.id === m);
    if (!x) return;
    x.size = h;
    const w = this.shadowRoot?.getElementById("w-" + m);
    w && (w.dataset.size = h), this._renderWidgetLayout(), this._saveWidgetLayout();
  }, o._toggleWidgetVisibility = function(m) {
    const h = (this._widgetConfig || []).find((w) => w.id === m);
    if (!h) return;
    h.hidden = !h.hidden;
    const x = this.shadowRoot?.getElementById("w-" + m);
    x && (x.classList.toggle("widget-hidden-preview", h.hidden && this._widgetEditing), x.style.display = h.hidden && !this._widgetEditing ? "none" : ""), this._renderWidgetLayout(), this._saveWidgetLayout();
  };
}
const Jh = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block}.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;
function eg(r) {
  const o = r?.__argusWebgl;
  o && (cancelAnimationFrame(o.frame), o.observer?.disconnect(), document.removeEventListener("visibilitychange", o.visibility), o.gl.deleteBuffer(o.buffer), o.gl.deleteProgram(o.program), o.gl.getExtension("WEBGL_lose_context")?.loseContext(), delete r.__argusWebgl);
}
function tg(r) {
  const o = r?.prototype;
  if (!o || o.__argusPremiumExperience) return;
  o.__argusPremiumExperience = !0;
  const a = o.connectedCallback;
  o.connectedCallback = function() {
    const c = a?.call(this);
    return queueMicrotask(() => {
      if (this.shadowRoot && !this.shadowRoot.getElementById("argus-premium-style")) {
        const f = document.createElement("style");
        f.id = "argus-premium-style", f.textContent = Jh, this.shadowRoot.append(f);
      }
    }), c;
  };
  const u = o.disconnectedCallback;
  o.disconnectedCallback = function() {
    return this.shadowRoot?.querySelectorAll(".wx-webgl").forEach(eg), u?.call(this);
  };
}
function Jd(r) {
  if (r.shadowRoot?.getElementById("argus-grid-polish-style")) return;
  const o = document.createElement("style");
  o.id = "argus-grid-polish-style", o.textContent = `
#widget-grid.grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-template-rows:auto!important;grid-auto-flow:dense!important;grid-auto-rows:clamp(190px,22vw,280px)!important;align-items:stretch!important;gap:clamp(10px,1.5vw,20px)!important}
#widget-grid>.panel:not(.dashboard-instances){min-width:0!important;min-height:0!important;height:auto!important;overflow:hidden!important;align-self:stretch!important}
#widget-grid>.panel[data-size="S"]{grid-column:span 1!important;grid-row:span 1!important}
#widget-grid>.panel[data-size="M"]{grid-column:span 2!important;grid-row:span 1!important}
#widget-grid>.panel[data-size="L"]{grid-column:span 2!important;grid-row:span 2!important}
#widget-grid>.panel[data-size="XL"]{grid-column:span 4!important;grid-row:span 2!important}
#widget-grid>#w-activity[data-size="S"],#widget-grid>#w-automations[data-size="S"]{grid-row:span 2!important}
#widget-grid>#w-instances.dashboard-instances{grid-column:1/-1!important;grid-row:1!important;height:auto!important;min-height:max-content!important;align-self:start!important}
#widget-grid.editing .panel.widget-hidden-preview{opacity:.48!important}
#widget-grid>.panel[data-size="S"]{padding:clamp(10px,1.2vw,16px)!important}
#widget-grid>.panel[data-size="S"] .panel-head{margin-bottom:8px!important;gap:6px!important;flex-wrap:nowrap!important}
#widget-grid>.panel[data-size="S"] h2{font-size:clamp(9px,1vw,12px)!important;line-height:1.15!important}
#widget-grid>.panel[data-size="S"] .tabs{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:5px!important;overflow-x:auto!important}
#w-modes[data-size="S"] #mode-tabs{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-auto-flow:column!important;gap:5px!important;overflow-x:auto!important}
#w-modes[data-size="S"] #mode-tabs>*{min-width:0!important;width:auto!important;padding:7px 4px!important}
#w-modes[data-size="S"] #mode-view{min-height:0!important;max-height:calc(100% - 58px)!important;overflow:auto!important}
#w-activity,#w-automations{display:flex!important;flex-direction:column!important}
#w-activity #activity-log{height:auto!important;min-height:0!important;flex:1 1 auto!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-automations #auto-view{min-height:0!important;flex:1 1 auto!important;overflow:hidden!important}
#w-automations #auto-view>div{height:100%!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
@media(min-width:761px) and (max-width:900px){#widget-grid.grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:auto!important;grid-auto-rows:clamp(190px,30vw,260px)!important;gap:12px!important}#widget-grid>.panel[data-size="S"]{grid-column:span 1!important;grid-row:span 1!important}#widget-grid>.panel[data-size="M"],#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"]{grid-column:span 2!important}#widget-grid>.panel[data-size="M"]{grid-row:span 1!important}#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"]{grid-row:span 2!important}}
@media(max-width:760px){#widget-grid.grid{grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto!important;grid-auto-rows:auto!important;grid-auto-flow:row!important;gap:12px!important}#widget-grid>.panel[data-size="S"],#widget-grid>.panel[data-size="M"],#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"]{grid-column:1!important;grid-row:auto!important;width:100%!important;box-sizing:border-box!important}#widget-grid>#w-activity,#widget-grid>#w-automations{min-height:360px!important}#widget-grid>#w-modes,#widget-grid>#w-access{min-height:280px!important}#widget-grid>.panel[data-size="S"]{padding:14px!important}}
@media(orientation:landscape) and (max-height:560px) and (max-width:950px){#widget-grid.grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-auto-rows:auto!important}#widget-grid>.panel[data-size="S"]{grid-column:span 1!important}#widget-grid>.panel[data-size="M"],#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"],#widget-grid>#w-activity,#widget-grid>#w-automations{grid-column:span 2!important}}
`, r.shadowRoot?.appendChild(o);
}
function ng(r) {
  if (!r || r.__gridPolish) return;
  r.__gridPolish = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._initWidgetGrid;
  o.connectedCallback = function() {
    return Jd(this), a?.call(this);
  }, o._initWidgetGrid = function() {
    const c = u?.call(this);
    return Jd(this), c;
  };
}
const ep = { es: { on: "Conectado", off: "Argus desconectado · HA sin conexión" }, en: { on: "Connected", off: "Argus disconnected · HA offline" }, fr: { on: "Connecté", off: "Argus déconnecté · HA hors ligne" }, pt: { on: "Conectado", off: "Argus desconectado · HA sem conexão" }, it: { on: "Connesso", off: "Argus disconnesso · HA offline" }, zh: { on: "已连接", off: "Argus 已断开 · HA 离线" }, ru: { on: "Подключено", off: "Argus отключён · HA не в сети" } }, rg = (r) => {
  const o = String(r._manualLang || r._hass?.language || r._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
  return ep[o] || ep.en;
};
function ig(r) {
  if (r.shadowRoot?.getElementById("argus-fullscreen-polish-style")) return;
  const o = document.createElement("style");
  o.id = "argus-fullscreen-polish-style", o.textContent = `
.console-hud{display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:center!important;gap:12px!important;padding:0!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;overflow:visible!important}
.console-hud-loc{justify-self:start!important;max-width:100%!important;padding:9px 14px!important;border-radius:999px!important;background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.07))!important;border:1px solid rgba(255,255,255,.24)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 8px 22px rgba(0,0,0,.16)!important;backdrop-filter:blur(20px) saturate(145%)!important;-webkit-backdrop-filter:blur(20px) saturate(145%)!important}
.console-hud-right{justify-self:end!important;display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:7px!important;min-width:0!important;background:transparent!important;border:0!important;box-shadow:none!important}
.console-hud-time,.console-hud-temp,.console-hud-tpill{display:inline-flex!important;align-items:center!important;min-height:30px!important;box-sizing:border-box!important;padding:6px 10px!important;border-radius:999px!important;background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.07))!important;border:1px solid rgba(255,255,255,.24)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 8px 22px rgba(0,0,0,.14)!important;backdrop-filter:blur(20px) saturate(145%)!important;-webkit-backdrop-filter:blur(20px) saturate(145%)!important}
.console-hud-temps{display:flex!important;gap:7px!important;flex-wrap:nowrap!important}
.argus-connection-pill{position:static!important;inset:auto!important;transform:none!important;grid-column:2!important;justify-self:center!important;z-index:30!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;min-height:30px!important;box-sizing:border-box!important;padding:6px 12px!important;border-radius:999px!important;white-space:nowrap!important;font-size:11px!important;font-weight:800!important;letter-spacing:.02em!important;backdrop-filter:blur(20px) saturate(150%)!important;-webkit-backdrop-filter:blur(20px) saturate(150%)!important;transition:color .25s ease,background .25s ease,border-color .25s ease,box-shadow .25s ease!important}
.argus-connection-pill[data-online="true"]{color:#7ff8bd!important;background:linear-gradient(135deg,rgba(36,188,129,.28),rgba(36,188,129,.10))!important;border:1px solid rgba(78,231,163,.48)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.24),0 0 20px rgba(36,188,129,.20)!important}
.argus-connection-pill[data-online="false"]{color:#ffd09a!important;background:linear-gradient(135deg,rgba(255,145,43,.32),rgba(130,66,8,.18))!important;border:1px solid rgba(255,171,76,.62)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 0 22px rgba(255,132,28,.28)!important}
.argus-connection-dot{width:7px!important;height:7px!important;flex:0 0 7px!important;border-radius:50%!important;background:currentColor!important;box-shadow:0 0 9px currentColor!important}
.console-sensors{position:relative!important;isolation:isolate!important;display:grid!important;grid-auto-rows:minmax(48px,auto)!important;align-content:start!important;gap:10px!important;padding:8px 7px!important;max-height:min(64vh,560px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important;background:transparent!important;border:0!important;box-shadow:none!important;filter:none!important;transform:none!important;contain:layout paint!important}
.console-sensors::before,.console-sensors::after{display:none!important;content:none!important}
.console-sensor{position:relative!important;z-index:1!important;min-width:0!important;margin:0!important;overflow:hidden!important;isolation:isolate!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.20),inset 0 0 0 1px rgba(255,255,255,.04)!important;transform:translateZ(0)!important}
.console-sensor.open{box-shadow:inset 0 1px 0 rgba(255,255,255,.18),inset 0 0 0 1px rgba(255,102,92,.16)!important}
.console-sensors::-webkit-scrollbar{width:6px}.console-sensors::-webkit-scrollbar-track{background:transparent}.console-sensors::-webkit-scrollbar-thumb{background:rgba(255,255,255,.25);border-radius:999px}
@media(min-width:901px){.ios-fullscreen .entry-content.security-console{grid-template-columns:minmax(210px,260px) minmax(280px,1fr) minmax(250px,340px)!important;gap:18px 20px!important;padding:48px 32px 28px!important}.ios-fullscreen .entry-content.security-console .entry-icon{min-width:280px!important;min-height:300px!important;overflow:visible!important}.ios-fullscreen .entry-content.security-console .entry-icon svg{width:clamp(280px,34vw,500px)!important;max-width:500px!important;min-width:280px!important;filter:drop-shadow(0 0 46px rgba(94,255,167,.30))!important}.ios-fullscreen .entry-content.security-console .console-sensors{width:100%!important;max-width:340px!important}}
@media(max-width:900px){.console-hud{grid-template-columns:minmax(0,1fr) auto!important;grid-template-areas:'location connection' 'readings readings'!important}.console-hud-loc{grid-area:location!important}.argus-connection-pill{grid-area:connection!important}.console-hud-right{grid-area:readings!important;justify-self:stretch!important;justify-content:flex-start!important;overflow-x:auto!important}.ios-fullscreen .entry-content.security-console .entry-icon{display:flex!important;min-height:190px!important}.ios-fullscreen .entry-content.security-console .entry-icon svg{display:block!important;width:clamp(180px,46vw,300px)!important;max-width:300px!important}.console-sensors{width:100%!important;max-width:460px!important;max-height:42vh!important}}
`, r.shadowRoot?.appendChild(o);
}
function og(r) {
  let o = r.querySelector(".argus-connection-pill");
  if (o) return o;
  if (o = [...r.children].find((c) => c.tagName === "DIV" && (c.getAttribute("style") || "").includes("left:50%") && (c.getAttribute("style") || "").includes("top:12px")), !o) return null;
  o.className = "argus-connection-pill", o.removeAttribute("style");
  const a = r.querySelector(".console-hud"), u = a?.querySelector(".console-hud-right");
  return a && a.insertBefore(o, u || null), o;
}
function ag(r) {
  const o = !!r._hass && r._hass?.connection?.connected !== !1;
  return navigator.onLine !== !1 && o;
}
function Vo(r) {
  const o = rg(r), a = ag(r);
  r.shadowRoot?.querySelectorAll(".entry").forEach((u) => {
    const c = og(u);
    if (!c) return;
    c.dataset.online = String(a), c.setAttribute("role", "status"), c.setAttribute("aria-live", "polite"), c.replaceChildren();
    const f = document.createElement("i");
    f.className = "argus-connection-dot";
    const y = document.createElement("span");
    y.className = "argus-connection-label", y.textContent = a ? o.on : o.off, c.append(f, y);
  });
}
function tp(r) {
  ig(r), Vo(r);
}
function sg(r) {
  if (!r || r.__fullscreenPolish) return;
  r.__fullscreenPolish = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._renderEntries, f = Object.getOwnPropertyDescriptor(o, "hass");
  o.connectedCallback = function() {
    const y = a?.call(this);
    return this._argusOnlineHandler = () => Vo(this), window.addEventListener("online", this._argusOnlineHandler), window.addEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), this._argusConnectivityTimer = setInterval(() => Vo(this), 2500), queueMicrotask(() => tp(this)), y;
  }, o.disconnectedCallback = function() {
    return window.removeEventListener("online", this._argusOnlineHandler), window.removeEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), u?.call(this);
  }, o._renderEntries = function() {
    const y = c?.call(this);
    return tp(this), y;
  }, f?.set && Object.defineProperty(o, "hass", { configurable: !0, enumerable: f.enumerable, get: f.get, set(y) {
    f.set.call(this, y), queueMicrotask(() => Vo(this));
  } });
}
const ea = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], _l = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), np = { es: ["Formato de hora", "Automático (Home Assistant)", "12 horas (AM/PM)", "24 horas"], en: ["Time format", "Automatic (Home Assistant)", "12-hour (AM/PM)", "24-hour"], fr: ["Format de l’heure", "Automatique (Home Assistant)", "12 heures (AM/PM)", "24 heures"], pt: ["Formato de hora", "Automático (Home Assistant)", "12 horas (AM/PM)", "24 horas"], it: ["Formato ora", "Automatico (Home Assistant)", "12 ore (AM/PM)", "24 ore"], zh: ["时间格式", "自动（Home Assistant）", "12 小时（AM/PM）", "24 小时"], ru: ["Формат времени", "Автоматически (Home Assistant)", "12 часов (AM/PM)", "24 часа"] }, lg = (r) => String(r._manualLang || r._hass?.language || r._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0], Ei = (r) => JSON.parse(JSON.stringify(r));
function ta(r) {
  if (!Array.isArray(r)) return null;
  const o = /* @__PURE__ */ new Set(), a = [];
  return r.forEach((u) => {
    const c = String(u?.id || "");
    !c || o.has(c) || (o.add(c), a.push({ id: c, size: _l.has(u?.size) ? u.size : "M", hidden: !!u?.hidden }));
  }), ea.forEach((u) => {
    o.has(u.id) || a.push({ ...u });
  }), a.length ? a : null;
}
function ug() {
  try {
    return ta(JSON.parse(localStorage.getItem("argus-widgets-v2") || localStorage.getItem("argus-widgets-v1") || "null"));
  } catch {
    return null;
  }
}
function Fp(r) {
  try {
    const o = JSON.stringify(r);
    localStorage.setItem("argus-widgets-v2", o), localStorage.setItem("argus-widgets-v1", o);
  } catch {
  }
}
function il(r) {
  const o = r.shadowRoot, a = o?.querySelector(".personalize-grid");
  if (!a) return;
  let u = o.getElementById("argus-clock-format-field");
  u || (u = document.createElement("div"), u.id = "argus-clock-format-field", u.className = "personalize-field pf-clock", u.innerHTML = '<label class="setting-label" id="argus-clock-format-label" for="argus-clock-format-select"></label><select id="argus-clock-format-select" class="glass-control"><option value="auto"></option><option value="12h"></option><option value="24h"></option></select>', a.appendChild(u), u.querySelector("select")?.addEventListener("change", (h) => {
    r._clockFormat = h.target.value, r._ui = r._ui || {}, r._ui.clock_format = h.target.value, r._lastClockUpdate = 0, r._updateHeroContext?.(), r._renderEntries?.();
  }));
  const c = np[lg(r)] || np.en, f = u.querySelector("label"), y = u.querySelectorAll("option");
  f && (f.textContent = "🕐 " + c[0]), y.forEach((h, x) => {
    h.textContent = c[x + 1];
  });
  const m = u.querySelector("select");
  m && (m.value = r._clockFormat || r._ui?.clock_format || "auto");
}
function rp(r) {
  if (r.shadowRoot?.getElementById("argus-v2012-audit-style")) return;
  const o = document.createElement("style");
  o.id = "argus-v2012-audit-style", o.textContent = `
:host{--argus-clear-bg:linear-gradient(105deg,rgba(30,62,78,.34),rgba(9,25,37,.50));--argus-clear-border:rgba(255,255,255,.18)}
.entry,.entry-bg,.entry-bg>*:first-child,.entry .wx,.entry .wx-atmosphere,.entry-content{border-radius:32px!important}.entry{isolation:isolate;overflow:hidden!important;transition:border-radius .28s ease,box-shadow .28s ease,transform .28s ease,opacity .2s ease!important}.entry::after{border-radius:32px!important}
.entry-content.security-console{display:grid!important;grid-template-columns:minmax(220px,1fr) minmax(160px,220px) minmax(260px,1fr)!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;align-items:center!important;gap:18px 24px!important;padding:24px!important}.security-console .console-hud{grid-area:hud!important}.security-console .liquid-stack{grid-area:modes!important;width:100%!important;max-width:none!important}.security-console .entry-icon{grid-area:icon!important;width:100%!important;justify-self:center!important}.security-console .console-sensors{grid-area:sensors!important;width:100%!important;max-width:none!important}
.security-console .liquid-btn,.security-console .console-keypad,.console-hud-loc,.console-hud-time,.console-hud-temp,.console-hud-tpill,.argus-connection-pill{background:var(--argus-clear-bg)!important;border:1px solid var(--argus-clear-border)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 7px 18px rgba(0,0,0,.12)!important}.security-console .liquid-btn.active{background:linear-gradient(105deg,color-mix(in srgb,var(--btn-bg,#34c759) 58%,transparent),rgba(8,25,36,.44))!important}.security-console .liquid-btn{transition:transform .28s cubic-bezier(.2,.8,.2,1),background .35s ease,border-color .35s ease,box-shadow .35s ease,color .25s ease!important}.security-console .liquid-btn:hover{transform:translateY(-2px)!important}.security-console .liquid-btn:active{transform:scale(.975)!important}
.entry-icon{position:relative!important;contain:layout paint;transform:translateZ(0)}.entry-icon>svg{position:relative;z-index:2;transform-origin:center;transition:filter .5s ease,opacity .35s ease!important}.entry-icon.argus-shield-changing>svg{animation:argusShieldIn .52s cubic-bezier(.2,.82,.2,1) both!important}.argus-old-shield{position:absolute;inset:0;z-index:3;display:grid;place-items:center;pointer-events:none;animation:argusShieldOut .5s cubic-bezier(.4,0,.2,1) both}.argus-old-shield svg{width:100%;height:auto;max-width:inherit}@keyframes argusShieldIn{0%{opacity:.15;transform:scale(.94);filter:blur(4px)}55%{opacity:1;transform:scale(1.025);filter:blur(0)}100%{opacity:1;transform:scale(1)}}@keyframes argusShieldOut{0%{opacity:1;transform:scale(1);filter:blur(0)}100%{opacity:0;transform:scale(1.045);filter:blur(5px)}}
.console-hud{grid-template-columns:minmax(0,1fr) minmax(150px,220px) minmax(0,1fr)!important}.console-hud-loc{grid-column:1!important;justify-self:start!important;min-width:0!important;max-width:100%!important}.argus-connection-pill{grid-column:2!important;justify-self:center!important}.console-hud-right{grid-column:3!important;justify-self:end!important;min-width:0!important;max-width:100%!important}
.hero-context{display:grid!important;grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important;gap:12px!important;min-width:0!important}.hero-clock{display:grid!important;grid-template-rows:auto auto!important;align-content:center!important;justify-items:end!important;min-width:76px!important;padding-right:12px!important}.hero-clock strong,.hero-clock span{width:100%!important;text-align:right!important;white-space:nowrap!important;font-variant-numeric:tabular-nums!important}.hero-clock span{overflow:hidden!important;text-overflow:ellipsis!important;max-width:14ch!important}.hero-pills{min-width:0!important;flex-wrap:wrap!important}
.pf-clock{grid-area:clock}.personalize-grid{grid-template-areas:'home temp' 'panel weather' 'hub clock' 'emergency emergency'!important}.ios-fullscreen .entry-content.security-console{grid-template-columns:minmax(230px,340px) minmax(280px,1fr) minmax(250px,340px)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;align-items:center!important;overflow:hidden!important}.ios-fullscreen .entry-icon{justify-self:center!important;align-self:center!important}.ios-fullscreen .entry-icon svg{will-change:transform,opacity,filter}:host(.argus-exiting-fullscreen) .entry{pointer-events:none!important;transition:none!important}
@media(max-width:900px){.entry-content.security-console,.ios-fullscreen .entry-content.security-console{grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto auto auto auto!important;grid-template-areas:'hud' 'icon' 'modes' 'sensors'!important;justify-items:center!important;padding:68px 16px 24px!important;gap:16px!important;overflow-y:auto!important;align-content:start!important}.console-hud{width:100%!important;grid-template-columns:minmax(0,1fr) auto!important;grid-template-areas:'location connection' 'readings readings'!important;gap:8px!important}.console-hud-loc{grid-area:location!important}.argus-connection-pill{grid-area:connection!important}.console-hud-right{grid-area:readings!important;justify-self:stretch!important;justify-content:flex-start!important;overflow-x:auto!important}.security-console .entry-icon{display:flex!important;min-height:150px!important;max-width:280px!important}.security-console .entry-icon svg{width:min(58vw,260px)!important;max-width:260px!important;min-width:0!important}.security-console .liquid-stack,.security-console .console-sensors{width:100%!important;max-width:440px!important;margin:0 auto!important}.security-console .console-sensors{max-height:none!important;overflow:visible!important}.hero-context{width:100%!important;grid-template-columns:auto minmax(0,1fr)!important}.hero-clock{justify-items:start!important;padding:0 12px 0 0!important}.hero-clock strong,.hero-clock span{text-align:left!important}.hero-pills{justify-content:flex-start!important}.personalize-grid{grid-template-columns:1fr!important;grid-template-areas:'home' 'temp' 'weather' 'clock' 'panel' 'hub' 'emergency'!important}}
@media(max-width:520px){.entry,.entry-bg,.entry-bg>*:first-child,.entry .wx,.entry-content{border-radius:26px!important}.entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding:72px 12px 20px!important}.security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important}.security-console .liquid-btn{min-width:0!important;white-space:normal!important}.console-hud-loc{font-size:10px!important}.console-hud-right{scrollbar-width:none}.hero-context{grid-template-columns:1fr!important}.hero-clock{border:0!important;padding:0!important;justify-items:start!important}.hero-pills{width:100%!important}.ios-fullscreen{overflow:hidden!important}.ios-fullscreen .entry-content.security-console{height:100dvh!important;max-height:100dvh!important}.ios-fullscreen .console-sensors{padding-bottom:28px!important}}
@media(prefers-reduced-motion:reduce){.argus-old-shield{display:none!important}.entry-icon.argus-shield-changing>svg{animation:none!important}}
`, r.shadowRoot.appendChild(o);
}
function cg(r) {
  return [...r.shadowRoot?.querySelectorAll(".entry") || []].map((o) => o.querySelector(".entry-icon>svg")?.outerHTML || null);
}
function dg(r, o) {
  r.shadowRoot?.querySelectorAll(".entry").forEach((a, u) => {
    const c = a.querySelector(".entry-icon"), f = c?.querySelector(":scope>svg"), y = o[u];
    if (!c || !f || !y || y === f.outerHTML) return;
    c.querySelector(".argus-old-shield")?.remove();
    const m = document.createElement("div");
    m.className = "argus-old-shield", m.innerHTML = y, c.prepend(m), c.classList.remove("argus-shield-changing"), c.offsetWidth, c.classList.add("argus-shield-changing"), setTimeout(() => {
      m.remove(), c.classList.remove("argus-shield-changing");
    }, 560);
  });
}
function pg(r) {
  const o = r.shadowRoot?.getElementById("widget-grid");
  if (!o) return ta(r._widgetConfig) || Ei(ea);
  const a = new Map((r._widgetConfig || []).map((c) => [c.id, c])), u = [...o.children].filter((c) => c.classList.contains("panel") && !c.classList.contains("dashboard-instances")).map((c) => {
    const f = c.id.replace(/^w-/, ""), y = a.get(f) || {};
    return { id: f, size: _l.has(c.dataset.size) ? c.dataset.size : _l.has(y.size) ? y.size : "M", hidden: c.classList.contains("widget-hidden-preview") || c.style.display === "none" || !!y.hidden };
  });
  return ta(u) || Ei(ea);
}
function fg(r, o) {
  r._widgetConfig = Ei(o), Fp(o), r._ui = r._ui || {};
  const a = { ...r._ui.dashboard || {}, widget_layout: Ei(o) };
  r._ui.dashboard = a;
  const u = { dashboard: a };
  r._dashboard?.entry_id && (u.entry_id = r._dashboard.entry_id), r._widgetSaveChain = (r._widgetSaveChain || Promise.resolve()).catch(() => {
  }).then(() => r._send("argus/save_ui", u)).then((c) => {
    c?.ui?.dashboard && (r._ui.dashboard = c.ui.dashboard), r.dataset.widgetSave = "saved";
  }).catch((c) => {
    r.dataset.widgetSave = "local", console.error("Argus widget layout saved locally; server save failed", c);
  });
}
function mg(r) {
  if (!r || r.__v2012AuditFixes) return;
  r.__v2012AuditFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, f = o._renderEntries, y = o._initWidgetGrid, m = o._saveWidgetLayout, h = o._persistPersonalization, x = o._applyTranslations, w = o._exitFullscreenView;
  o.connectedCallback = function() {
    rp(this);
    const P = a?.call(this);
    return this._argusExitCapture = (z) => {
      this._argusExiting && z.stopImmediatePropagation();
    }, document.addEventListener("fullscreenchange", this._argusExitCapture, !0), document.addEventListener("webkitfullscreenchange", this._argusExitCapture, !0), P;
  }, o.disconnectedCallback = function() {
    return document.removeEventListener("fullscreenchange", this._argusExitCapture, !0), document.removeEventListener("webkitfullscreenchange", this._argusExitCapture, !0), u?.call(this);
  }, o._load = async function() {
    const P = await c?.call(this);
    return this._ui && (this._clockFormat = this._ui.clock_format || "auto", il(this)), P;
  }, o._applyTranslations = function() {
    const P = x?.call(this);
    return il(this), P;
  }, o._renderEntries = function() {
    const P = cg(this), z = f?.call(this);
    return rp(this), requestAnimationFrame(() => dg(this, P)), z;
  }, o._initWidgetGrid = function() {
    const P = ta(this._ui?.dashboard?.widget_layout), z = ug();
    this._widgetConfig = Ei(P || z || ea), Fp(this._widgetConfig), this._widgetConfigLoaded = !0;
    const V = y?.call(this);
    return this._renderWidgetLayout?.(), V;
  }, o._saveWidgetLayout = function() {
    m?.call(this), fg(this, pg(this));
  }, o._persistPersonalization = async function() {
    this._clockFormat = this.shadowRoot?.getElementById("argus-clock-format-select")?.value || this._clockFormat || "auto";
    const P = await h?.call(this);
    this._ui = this._ui || {}, this._ui.clock_format = this._clockFormat;
    const z = { clock_format: this._clockFormat };
    this._dashboard?.entry_id && (z.entry_id = this._dashboard.entry_id);
    const V = await this._send("argus/save_ui", z);
    return V?.ui && (this._ui = { ...this._ui, ...V.ui }), il(this), this._lastClockUpdate = 0, this._updateHeroContext?.(), this._renderEntries?.(), P;
  }, o._exitFullscreenView = async function() {
    this._argusExiting = !0, this.classList.add("argus-exiting-fullscreen");
    try {
      return await w?.call(this);
    } finally {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        this._argusExiting = !1, this.classList.remove("argus-exiting-fullscreen");
      }));
    }
  };
}
const na = ["essential", "light", "balanced", "full"], qp = "argus-performance-v1", hg = 6e3, gg = 18, yg = 3, vg = 25e3, ip = {
  es: ["Rendimiento del dispositivo", "Automático (recomendado)", "Completo", "Equilibrado", "Ligero", "Esencial", "Ejecutar diagnóstico", "Esto solo ajusta la presentación visual. Las funciones de seguridad de Argus no se ven afectadas.", "Medido en este navegador y dispositivo de visualización; no identifica ni supone el modelo del host de Home Assistant."],
  en: ["Device performance", "Automatic (recommended)", "Full", "Balanced", "Light", "Essential", "Run diagnostics", "This only adjusts the visual presentation. Argus security functions are never affected.", "Measured in this browser and display device; it does not identify or assume the Home Assistant host model."],
  fr: ["Performance de l’appareil", "Automatique (recommandé)", "Complet", "Équilibré", "Léger", "Essentiel", "Lancer le diagnostic", "Cela ajuste uniquement la présentation visuelle. Les fonctions de sécurité d’Argus ne sont jamais affectées.", "Mesuré dans ce navigateur et cet appareil d’affichage, sans supposer le modèle de l’hôte Home Assistant."],
  pt: ["Desempenho do dispositivo", "Automático (recomendado)", "Completo", "Equilibrado", "Leve", "Essencial", "Executar diagnóstico", "Isso ajusta apenas a apresentação visual. As funções de segurança do Argus nunca são afetadas.", "Medido neste navegador e dispositivo de exibição, sem presumir o modelo do host Home Assistant."],
  it: ["Prestazioni del dispositivo", "Automatico (consigliato)", "Completo", "Bilanciato", "Leggero", "Essenziale", "Esegui diagnostica", "Questo regola solo la presentazione visiva. Le funzioni di sicurezza di Argus non vengono mai influenzate.", "Misurato nel browser e dispositivo di visualizzazione, senza presumere il modello host Home Assistant."],
  zh: ["设备性能", "自动（推荐）", "完整", "均衡", "轻量", "基础", "运行诊断", "这仅调整视觉呈现，绝不会影响 Argus 的安防功能。", "结果来自当前浏览器和显示设备，不识别或假设 Home Assistant 主机型号。"],
  ru: ["Производительность устройства", "Автоматически (рекомендуется)", "Полный", "Сбалансированный", "Легкий", "Базовый", "Запустить диагностику", "Это влияет только на визуальное отображение. Функции безопасности Argus никогда не затрагиваются.", "Измеряется в текущем браузере и устройстве отображения без предположения о модели хоста Home Assistant."]
}, Hp = (r) => String(r._manualLang || r._hass?.language || r._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
function Pl() {
  try {
    const r = navigator.userAgent || "", o = navigator.platform || "", a = navigator.hardwareConcurrency || 0, u = navigator.deviceMemory || 0;
    let c = 0;
    const f = `${r}|${o}|${a}|${u}`;
    for (let y = 0; y < f.length; y++) c = c * 31 + f.charCodeAt(y) | 0;
    return String(c);
  } catch {
    return "default";
  }
}
function Ll() {
  try {
    return JSON.parse(localStorage.getItem(qp) || "{}");
  } catch {
    return {};
  }
}
function Wp(r) {
  try {
    localStorage.setItem(qp, JSON.stringify(r));
  } catch {
  }
}
function wg() {
  const r = navigator.hardwareConcurrency || 2, o = navigator.deviceMemory || null, a = window.devicePixelRatio || 1, u = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || !1;
  let c = !1, f = !1;
  try {
    f = !!document.createElement("canvas").getContext("webgl2");
  } catch {
  }
  try {
    const y = document.createElement("canvas");
    c = !!(y.getContext("webgl") || y.getContext("experimental-webgl"));
  } catch {
  }
  return { cores: r, memory: o, dpr: a, reducedMotion: u, webgl1: c, webgl2: f, width: window.innerWidth || 0, height: window.innerHeight || 0 };
}
function _g(r = 900) {
  return new Promise((o) => {
    let a = 0;
    const u = performance.now();
    function c(f) {
      a++, f - u < r ? requestAnimationFrame(c) : o(Math.round(a * 1e3 / Math.max(1, f - u)));
    }
    requestAnimationFrame(c);
  });
}
function bg(r, o) {
  let a = 0;
  return a += Math.min(r.cores || 2, 8) * 8, a += r.memory ? Math.min(r.memory, 8) * 6 : 18, r.webgl2 ? a += 30 : r.webgl1 && (a += 14), a += Math.min(o, 60) * 1.2, o >= 55 && (r.cores || 0) >= 4 && (a += 8), r.reducedMotion && (a -= 20), Math.max(r.width, r.height) < 800 && (a -= 10), a >= 170 ? "full" : a >= 120 ? "balanced" : a >= 70 ? "light" : "essential";
}
function bl(r) {
  return na.includes(r) ? r : null;
}
function xg(r) {
  if (r.shadowRoot?.getElementById("argus-perf-style")) return;
  const o = document.createElement("style");
  o.id = "argus-perf-style", o.textContent = `
:host(.argus-perf-light) .entry,:host(.argus-perf-essential) .entry{transition-duration:.16s!important}
:host(.argus-perf-essential) .argus-old-shield{display:none!important}
:host(.argus-perf-essential) .entry-icon.argus-shield-changing>svg{animation:none!important}
:host(.argus-perf-light) .entry-icon.argus-shield-changing>svg{animation-duration:.22s!important}
:host(.argus-perf-essential) .liquid-btn,:host(.argus-perf-essential) .console-keypad,:host(.argus-perf-light) .liquid-btn{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
:host(.argus-perf-essential) .liquid-btn:hover,:host(.argus-perf-light) .liquid-btn:hover{transform:none!important}
:host(.argus-perf-essential) .entry::after{display:none!important}
.pf-performance{grid-area:performance}.personalize-grid{grid-template-areas:'home temp' 'panel weather' 'hub clock' 'performance performance' 'emergency emergency'!important}
.argus-performance-readout{font-size:11px;opacity:.78;white-space:pre-wrap;margin:6px 0 0}.argus-performance-context{font-size:10px;opacity:.62;margin:5px 0 0;line-height:1.35}.argus-performance-note{font-size:11px;opacity:.66;margin:5px 0 0}
@media(max-width:900px){.personalize-grid{grid-template-areas:'home' 'temp' 'weather' 'clock' 'performance' 'panel' 'hub' 'emergency'!important}}
`, r.shadowRoot.appendChild(o);
}
function aa(r, o, a) {
  r._argusPerfProfile = o, r.dataset.argusPerf = o, r.dataset.argusPerfSource = a || "auto", na.forEach((u) => r.classList.remove("argus-perf-" + u)), r.classList.add("argus-perf-" + o), r.dispatchEvent(new CustomEvent("argus-performance-profile", { bubbles: !0, composed: !0, detail: { profile: o, source: a || "auto", capabilities: r._argusPerfCaps || null, fps: r._argusPerfFps || null } }));
}
function $p(r, o) {
  const a = ip[Hp(r)] || ip.en, u = o.querySelector("#argus-performance-label"), c = o.querySelectorAll("option"), f = o.querySelector("#argus-performance-diagnose"), y = o.querySelector(".argus-performance-note"), m = o.querySelector(".argus-performance-context");
  u && (u.textContent = "⚙️ " + a[0]), [a[1], a[2], a[3], a[4], a[5]].forEach((x, w) => {
    c[w] && (c[w].textContent = x);
  }), f && (f.textContent = a[6]), y && (y.textContent = a[7]), m && (m.textContent = a[8]);
  const h = o.querySelector("select");
  h && (h.value = r._argusPerfPreference || "auto");
}
function Dl(r, o) {
  const a = o.querySelector(".argus-performance-readout");
  if (!a) return;
  const u = r._argusPerfCaps;
  if (!u) {
    a.textContent = "";
    return;
  }
  const c = Hp(r), f = c === "es" ? "sí" : "yes", y = "no", m = u.memory ? `${u.memory} GB` : c === "es" ? "no expuesta por el navegador" : "not exposed by browser", h = r.dataset.argusPerfSource || "auto", x = h === "manual" ? "manual" : h;
  a.textContent = [`WebGL2: ${u.webgl2 ? f : y} · WebGL1: ${u.webgl1 ? f : y}`, `Núcleos: ${u.cores} · Memoria: ${m}`, `FPS medidos: ${r._argusPerfFps ?? "—"} · Perfil recomendado: ${r._argusPerfAuto || "—"}`, `Perfil activo: ${r._argusPerfProfile || "—"} (${x})`].join(`
`);
}
function op(r) {
  const o = r.shadowRoot, a = o?.querySelector(".personalize-grid");
  if (!a) return null;
  let u = o.getElementById("argus-performance-field");
  return u || (u = document.createElement("div"), u.id = "argus-performance-field", u.className = "personalize-field pf-performance", u.innerHTML = '<label class="setting-label" id="argus-performance-label" for="argus-performance-select"></label><select id="argus-performance-select" class="glass-control"><option value="auto"></option><option value="full"></option><option value="balanced"></option><option value="light"></option><option value="essential"></option></select><button type="button" id="argus-performance-diagnose" class="glass-control argus-performance-diagnose"></button><p class="argus-performance-readout"></p><p class="argus-performance-context"></p><p class="argus-performance-note"></p>', a.appendChild(u), u.querySelector("select").addEventListener("change", (c) => Sg(r, c.target.value)), u.querySelector("#argus-performance-diagnose").addEventListener("click", () => Up(r, !0))), $p(r, u), Dl(r, u), u;
}
function Sg(r, o) {
  const a = Ll(), u = Pl();
  r._argusPerfPreference = o === "auto" ? null : bl(o), a[u] = { ...a[u] || {}, preference: r._argusPerfPreference }, Wp(a);
  const c = r._argusPerfPreference || r._argusPerfAuto || "balanced";
  aa(r, c, r._argusPerfPreference ? "manual" : "auto");
  const f = r.shadowRoot?.getElementById("argus-performance-field");
  f && Dl(r, f);
}
async function Up(r, o) {
  const a = wg(), u = await _g();
  r._argusPerfCaps = a, r._argusPerfFps = u, r._argusPerfAuto = bg(a, u);
  const c = Ll(), f = Pl();
  c[f] = { ...c[f] || {}, auto: r._argusPerfAuto, checkedAt: Date.now() }, Wp(c), (o || !r._argusPerfPreference) && aa(r, r._argusPerfPreference || r._argusPerfAuto, r._argusPerfPreference ? "manual" : "auto");
  const y = r.shadowRoot?.getElementById("argus-performance-field");
  y && ($p(r, y), Dl(r, y));
}
function kg(r) {
  Vp(r);
  let o = performance.now(), a = o, u = 0, c = 0;
  function f(y) {
    const m = y - a;
    if (a = y, m > 0) {
      const h = 1e3 / m;
      if (y - o >= hg && (o = y, h < gg ? u++ : u = 0, u >= yg && !r._argusPerfPreference && y - c > vg)) {
        const x = Math.max(0, na.indexOf(r._argusPerfProfile || "balanced") - 1), w = na[x];
        w && w !== r._argusPerfProfile && (r._argusPerfAuto = w, aa(r, w, "auto-downgrade"), c = y), u = 0;
      }
    }
    r._argusPerfMonitorFrame = requestAnimationFrame(f);
  }
  r._argusPerfMonitorFrame = requestAnimationFrame(f);
}
function Vp(r) {
  r._argusPerfMonitorFrame && (cancelAnimationFrame(r._argusPerfMonitorFrame), r._argusPerfMonitorFrame = null);
}
function Eg(r) {
  if (!r || r.__argusPerformanceProfile) return;
  r.__argusPerformanceProfile = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, f = o._applyTranslations;
  o.connectedCallback = function() {
    xg(this);
    const y = Ll()[Pl()] || {};
    this._argusPerfPreference = bl(y.preference), this._argusPerfAuto = bl(y.auto) || "balanced", aa(this, this._argusPerfPreference || this._argusPerfAuto, this._argusPerfPreference ? "manual" : "auto");
    const m = a?.call(this);
    return Up(this, !1), kg(this), m;
  }, o.disconnectedCallback = function() {
    return Vp(this), u?.call(this);
  }, o._load = async function() {
    const y = await c?.call(this);
    return op(this), y;
  }, o._applyTranslations = function() {
    const y = f?.call(this);
    return op(this), y;
  };
}
function ap(r) {
  if (r.shadowRoot?.getElementById("argus-visual-container-fixes")) return;
  const o = document.createElement("style");
  o.id = "argus-visual-container-fixes", o.textContent = `
:host{
  --argus-container-radius:28px;
  --argus-title-color:var(--primary-text-color,rgba(255,255,255,.96));
  --argus-title-shadow:0 1px 2px rgba(0,0,0,.22);
}
.panel,.dashboard-instances,.entry{
  border-radius:var(--argus-container-radius)!important;
  background-clip:padding-box!important;
}
.dashboard-instances{
  display:block!important;
  visibility:visible!important;
  opacity:1!important;
  grid-column:1/-1!important;
  min-height:clamp(138px,16vw,210px)!important;
  position:relative!important;
  z-index:2!important;
}
.dashboard-instances::before,.dashboard-instances::after,
.entry::before,.entry::after,.panel>.panel-bg,.dashboard-instances>.panel-bg{
  border-radius:inherit!important;
}
.grid.editing .dashboard-instances .panel-edit-overlay,
#widget-grid.editing .dashboard-instances .panel-edit-overlay,
.dashboard-instances>.panel-edit-overlay{display:none!important}
.panel h2,.dashboard-instances h2,.panel-title,.section-title,
.mode-section-title,.widget-title,.settings-section-title,.access-section-title{
  color:var(--argus-title-color)!important;
  -webkit-text-fill-color:var(--argus-title-color)!important;
  text-shadow:var(--argus-title-shadow)!important;
  opacity:1!important;
}
#widget-grid>.panel:not(.dashboard-instances){
  overflow:auto!important;
  overscroll-behavior:contain!important;
  scrollbar-gutter:stable!important;
}
#widget-grid>.panel:not(.dashboard-instances)::-webkit-scrollbar{width:6px;height:6px}
#widget-grid>.panel:not(.dashboard-instances)::-webkit-scrollbar-thumb{background:rgba(255,255,255,.24);border-radius:999px}
.entry-icon{background:none!important;background-image:none!important;box-shadow:none!important}
.entry-icon::before,.entry-icon::after{content:none!important;display:none!important;background:none!important;box-shadow:none!important}
.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{background:none!important;background-image:none!important;box-shadow:none!important}
.entry-icon>svg{filter:drop-shadow(0 0 18px rgba(94,255,167,.25))!important}
@media (orientation:landscape) and (max-height:820px){
  .ios-fullscreen .entry-content.security-console{
    display:grid!important;box-sizing:border-box!important;width:100vw!important;
    height:100dvh!important;min-height:0!important;max-height:100dvh!important;
    grid-template-columns:minmax(160px,28vw) minmax(130px,1fr) minmax(210px,34vw)!important;
    grid-template-rows:auto minmax(0,1fr)!important;
    grid-template-areas:'hud hud hud' 'modes icon sensors'!important;
    align-items:stretch!important;align-content:stretch!important;gap:10px 14px!important;
    padding:58px 14px 12px!important;overflow:hidden!important;
  }
  .ios-fullscreen .console-hud{grid-area:hud!important;min-width:0!important}
  .ios-fullscreen .liquid-stack{
    grid-area:modes!important;align-self:stretch!important;width:100%!important;
    min-width:0!important;min-height:0!important;max-height:none!important;margin:0!important;
    overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
  }
  .ios-fullscreen .entry-icon{
    grid-area:icon!important;align-self:center!important;justify-self:center!important;
    display:flex!important;width:100%!important;min-width:0!important;min-height:0!important;
    max-width:none!important;max-height:calc(100dvh - 128px)!important;overflow:visible!important;
  }
  .ios-fullscreen .entry-icon>svg{
    display:block!important;width:clamp(130px,22vw,220px)!important;min-width:0!important;
    max-width:220px!important;max-height:calc(100dvh - 140px)!important;margin:auto!important;
  }
  .ios-fullscreen .console-sensors{
    grid-area:sensors!important;align-self:stretch!important;width:100%!important;
    min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;
    margin:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
  }
}
@media (orientation:landscape) and (max-height:560px){
  .ios-fullscreen .entry-content.security-console{
    grid-template-columns:minmax(150px,27vw) minmax(120px,1fr) minmax(200px,35vw)!important;
    gap:8px 10px!important;padding:52px 10px 8px!important;
  }
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .console-hud-time,
  .ios-fullscreen .console-hud-temp,.ios-fullscreen .console-hud-tpill,
  .ios-fullscreen .argus-connection-pill{min-height:26px!important;padding:4px 8px!important;font-size:9px!important}
  .ios-fullscreen .entry-icon>svg{width:clamp(120px,20vw,190px)!important;max-height:calc(100dvh - 124px)!important}
}
@media (prefers-color-scheme:light){
  :host{--argus-title-color:var(--primary-text-color,#172033);--argus-title-shadow:0 1px 1px rgba(255,255,255,.55)}
}
@media (max-width:520px) and (orientation:portrait){:host{--argus-container-radius:24px}}
`, r.shadowRoot.appendChild(o);
}
function Go(r) {
  const o = r.shadowRoot?.querySelector(".dashboard-instances");
  o && (o.draggable = !1, o.removeAttribute("hidden"), o.classList.remove("widget-hidden-preview", "dragging"), o.querySelector(":scope > .panel-edit-overlay")?.remove(), o.style.setProperty("display", "block", "important"), o.style.setProperty("visibility", "visible", "important"), o.style.setProperty("opacity", "1", "important"));
}
function Cg(r) {
  !r.shadowRoot?.getElementById("widget-grid") || r._argusWidgetLayoutRestored || (r._argusWidgetLayoutRestored = !0, r._widgetConfigLoaded ? r._renderWidgetLayout?.() : r._initWidgetGrid?.(), Go(r));
}
function Rg(r) {
  if (!r || r.__argusVisualContainerFixes) return;
  r.__argusVisualContainerFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries, f = o._toggleWidgetEditing;
  o.connectedCallback = function() {
    return ap(this), a?.call(this);
  }, o._load = async function() {
    this._argusWidgetLayoutRestored = !1;
    const y = await u?.call(this);
    return Cg(this), Go(this), y;
  }, o._renderEntries = function() {
    const y = c?.call(this);
    return ap(this), Go(this), y;
  }, o._toggleWidgetEditing = function() {
    const y = f?.call(this);
    return Go(this), y;
  };
}
function sp(r, o, a, u) {
  const c = r.shadowRoot?.getElementById(o), f = c?.getAttribute("data-size");
  if (f !== "S") return a?.apply(r, u);
  c.setAttribute("data-size", "M");
  try {
    return a?.apply(r, u);
  } finally {
    c.setAttribute("data-size", f);
  }
}
function zg(r) {
  if (!r || r.__argusCompleteContentFixes) return;
  r.__argusCompleteContentFixes = !0;
  const o = r.prototype, a = o._renderActivityLog, u = o._renderAutomations;
  o._renderActivityLog = function(...c) {
    return sp(this, "w-activity", a, c);
  }, o._renderAutomations = function(...c) {
    return sp(this, "w-automations", u, c);
  };
}
const Og = 15e3;
function Pg(r, o) {
  const a = r._getLocale?.() || void 0, u = r._getTimeZone?.(), c = { weekday: "short", month: "short", day: "numeric" };
  u && (c.timeZone = u);
  try {
    return new Intl.DateTimeFormat(a, c).format(o);
  } catch {
    return o.toLocaleDateString(a, c);
  }
}
function xl(r) {
  const o = /* @__PURE__ */ new Date(), a = r._formatTime?.(o) || o.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), u = r.shadowRoot?.getElementById("hero-clock-time"), c = r.shadowRoot?.getElementById("hero-clock-date");
  u && (u.textContent = a), c && (c.textContent = Pg(r, o)), r.shadowRoot?.querySelectorAll(".console-hud-time").forEach((f) => {
    f.textContent = a;
  });
}
function Lg(r) {
  r.shadowRoot?.querySelectorAll(".entry-icon svg").forEach((o) => {
    o.style.overflow = "visible", o.querySelectorAll("filter").forEach((a) => {
      a.setAttribute("filterUnits", "userSpaceOnUse"), a.setAttribute("x", "-80"), a.setAttribute("y", "-80"), a.setAttribute("width", "360"), a.setAttribute("height", "360"), a.setAttribute("color-interpolation-filters", "sRGB");
    });
  });
}
function Dg(r) {
  const o = r.shadowRoot;
  o && (o.querySelectorAll('input[type="file"]').forEach((a) => {
    a.setAttribute("accept", "image/*,video/*,.gif"), a.removeAttribute("capture");
  }), o.querySelectorAll("button,ha-button,mwc-button").forEach((a) => {
    const u = (a.textContent || a.getAttribute("aria-label") || "").toLowerCase();
    /predeterminado|default|argus/.test(u) && /fondo|background|argus/.test(u) && (a.dataset.argusDefaultBackground = "true");
  }));
}
function Mg(r) {
  const o = r.shadowRoot;
  if (!o) return;
  o.querySelectorAll("#w-activity .entry,#w-activity .log-entry,#w-activity li,.activity-log .entry,.activity-log li").forEach((u, c) => {
    c > 39 ? u.classList.add("argus-mobile-history-overflow-item") : u.classList.remove("argus-mobile-history-overflow-item");
  });
}
function Tg(r) {
  const o = r.shadowRoot;
  o && o.querySelectorAll(".dashboard-instances .entry button,.dashboard-instances .entry .badge,.dashboard-instances .entry .status,.dashboard-instances .entry h3,.dashboard-instances .entry h4").forEach((a) => {
    const u = (a.textContent || "").trim().toLowerCase();
    /^(sistema\s+desarmado|system\s+disarmed|desarmado|disarmed)$/.test(u) && a.classList.add("argus-instance-duplicate-status");
  });
}
function Ng(r) {
  if (r.shadowRoot?.getElementById("argus-runtime-visual-style")) return;
  const o = document.createElement("style");
  o.id = "argus-runtime-visual-style", o.textContent = `
.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}
.entry-icon{contain:layout!important}
#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}
.argus-instance-duplicate-status{display:none!important}
.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}
.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}
.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}
#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}
@media(max-width:760px){
  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:14px!important;padding:18px 14px!important}
  .hero-left{width:100%!important;min-width:0!important;align-items:center!important}
  .hero-context{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;margin:4px 0 0!important;justify-items:center!important;align-items:center!important;gap:10px!important}
  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:grid!important;grid-template-columns:1fr!important;justify-items:center!important;align-items:center!important;gap:3px!important;line-height:1.12!important}
  .hero-clock strong,.hero-clock span{width:auto!important;max-width:100%!important;text-align:center!important;margin:0!important;line-height:1.12!important}
  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}
  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}
  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}
  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}
  .entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding-left:10px!important;padding-right:10px!important}
  .console-hud{grid-template-columns:minmax(0,1fr)!important;grid-template-areas:'location' 'connection' 'readings'!important;justify-items:center!important;align-items:center!important;gap:8px!important;text-align:center!important}
  .console-hud-loc,.argus-connection-pill,.console-hud-right{width:100%!important;max-width:100%!important;box-sizing:border-box!important;justify-self:center!important;justify-content:center!important;text-align:center!important;margin:0!important}
  .console-hud-right{display:flex!important;flex-wrap:wrap!important;overflow:visible!important;gap:6px!important}
  .security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important;align-items:stretch!important}
  .security-console .liquid-btn{min-width:0!important;white-space:normal!important;line-height:1.2!important;min-height:46px!important}
  #w-activity,.activity-log{max-height:46vh!important;overflow-y:auto!important}
  .argus-mobile-history-overflow-item{display:list-item!important}
  #w-performance,.performance-card,.device-performance{display:grid!important;grid-template-columns:minmax(0,1fr)!important;justify-items:stretch!important;align-items:center!important;text-align:center!important;gap:10px!important}
  #w-performance *,.performance-card *,.device-performance *{max-width:100%!important;box-sizing:border-box!important}
  #w-access .panel-body,#w-settings .panel-body,.sos-actions,.panic-actions{overflow:visible!important;max-height:none!important}
  .sos-actions button,.panic-actions button,[data-action*="sos"],[data-action*="panic"]{min-height:48px!important;touch-action:manipulation!important}
  input[type="file"]{max-width:100%!important;width:100%!important;color:#fff!important}
}
@media(orientation:landscape) and (max-height:560px) and (max-width:950px){
  .hero{padding:14px!important;gap:10px!important}
  .hero-context{grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important}
  .hero-clock{width:auto!important;justify-items:start!important}
  .hero-pills{justify-content:flex-start!important}
  .ios-fullscreen .console-hud{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;grid-template-areas:'location connection readings'!important}
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .argus-connection-pill,.ios-fullscreen .console-hud-right{width:auto!important}
}
`, r.shadowRoot?.appendChild(o);
}
function ol(r) {
  Ng(r), xl(r), Lg(r), Dg(r), Mg(r), Tg(r);
}
function Ag(r) {
  if (!r || r.__argusRuntimeVisualFixes) return;
  r.__argusRuntimeVisualFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, f = o._renderEntries, y = o._applyTranslations;
  o.connectedCallback = function() {
    const m = a?.call(this);
    return clearInterval(this._argusClockTimer), this._argusClockTimer = setInterval(() => xl(this), Og), queueMicrotask(() => ol(this)), m;
  }, o.disconnectedCallback = function() {
    return clearInterval(this._argusClockTimer), this._argusClockTimer = null, u?.call(this);
  }, o._load = async function() {
    const m = await c?.call(this);
    return ol(this), m;
  }, o._renderEntries = function() {
    const m = f?.call(this);
    return ol(this), m;
  }, o._applyTranslations = function() {
    const m = y?.call(this);
    return xl(this), m;
  };
}
const Ig = /* @__PURE__ */ new Set(["unavailable", "unknown"]), lp = {
  es: { status_unavailable: "Sin conexión", status_unavailable_hint: "El dispositivo perdió conexión en Home Assistant y necesita revisión." },
  en: { status_unavailable: "Unavailable", status_unavailable_hint: "The device lost connection in Home Assistant and needs review." },
  fr: { status_unavailable: "Indisponible", status_unavailable_hint: "L'appareil a perdu la connexion dans Home Assistant et doit être vérifié." },
  pt: { status_unavailable: "Indisponível", status_unavailable_hint: "O dispositivo perdeu a conexão no Home Assistant e precisa de revisão." },
  it: { status_unavailable: "Non disponibile", status_unavailable_hint: "Il dispositivo ha perso la connessione in Home Assistant e richiede una verifica." },
  zh: { status_unavailable: "不可用", status_unavailable_hint: "设备在 Home Assistant 中失去连接，需要检查。" },
  ru: { status_unavailable: "Недоступно", status_unavailable_hint: "Устройство потеряло связь в Home Assistant и требует проверки." }
};
function Sl(r) {
  return r ? Ig.has(String(r.state ?? "").toLowerCase()) : !0;
}
function vi(r) {
  return String(r ?? "").replace(/[&<>'"]/g, (o) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[o]);
}
function up(r) {
  const o = r.shadowRoot;
  if (!o) return;
  const a = o.getElementById("bg-mode-select-standalone");
  a && !a.dataset.argusBgFixBound && (a.dataset.argusBgFixBound = "1", a.addEventListener("change", () => {
    if (r._backgroundMode = a.value, !["photo", "collage", "video"].includes(a.value)) {
      r._panelBgFile = "";
      const c = o.getElementById("panel-bg-url-input");
      c && (c.value = "");
    }
    r._updateBgFieldsVisibility?.(), r._updateTheme?.(), r._renderEntries?.();
  }));
  const u = o.getElementById("hub-bg-mode-select");
  u && !u.dataset.argusBgFixBound && (u.dataset.argusBgFixBound = "1", u.addEventListener("change", () => {
    if (r._hubBgMode = u.value, u.value !== "image") {
      r._hubBgFile = "";
      const c = o.getElementById("hub-bg-url-input");
      c && (c.value = "");
    }
    r._updateBgFieldsVisibility?.(), r._updateCanvasBackground?.(), r._updateTheme?.();
  }));
}
function jg(r) {
  const o = r.shadowRoot, a = o?.getElementById("bg-mode-select-standalone")?.value ?? r._backgroundMode, u = o?.getElementById("hub-bg-mode-select")?.value ?? r._hubBgMode;
  if (!["photo", "collage", "video"].includes(a)) {
    r._panelBgFile = "";
    const c = o?.getElementById("panel-bg-url-input");
    c && (c.value = "");
  }
  if (u !== "image") {
    r._hubBgFile = "";
    const c = o?.getElementById("hub-bg-url-input");
    c && (c.value = "");
  }
}
function cp(r) {
  const o = r.shadowRoot;
  if (!o || o.getElementById("argus-availability-style")) return;
  const a = document.createElement("style");
  a.id = "argus-availability-style", a.textContent = `
.sensor-pill.sensor-unavailable{border-color:rgba(255,180,60,.65)!important;background:rgba(120,72,8,.28)!important}
.sensor-pill.sensor-unavailable .pill-dot{background:#ffb43c!important;box-shadow:0 0 8px rgba(255,180,60,.85)!important}
.sensor-pill.sensor-unavailable .pill-status{color:#ffcf8a!important;opacity:1!important;font-weight:900!important}
.console-sensor.unavailable{background:linear-gradient(100deg,rgba(255,170,40,.22),rgba(40,26,8,.62))!important;border-color:rgba(255,190,80,.65)!important}
.console-sensor.unavailable .console-sensor-state{color:#ffcf8a!important}
.status-unavailable{color:#ffcf8a!important;font-weight:900!important}
`, o.appendChild(a);
}
function Bg(r) {
  const o = r.shadowRoot;
  if (!o || !r._hass?.states) return;
  const a = r._dashboard?.entries || [];
  o.querySelectorAll(".entry").forEach((u, c) => {
    const f = a[c];
    if (!f) return;
    const y = r._hass.states[f.entity_id], m = String(y?.state || "disarmed"), h = m.replace("armed_", "");
    let x = r._ui?.modes?.__by_entity__?.[f.entity_id]?.[h] || r._ui?.modes?.[h] || {}, w = x.sensors || [];
    if (m === "disarmed" || !w.length) {
      const Y = r._ui?.modes?.__by_entity__?.[f.entity_id] || r._ui?.modes || {}, F = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((O) => {
        Y[O]?.sensors && Y[O].sensors.forEach((b) => F.add(b));
      }), w = Array.from(F);
    }
    const P = x.bypassed_sensors || [], z = w.filter((Y) => !P.includes(Y) && r._hass.states[Y]), V = u.querySelectorAll(".console-sensors .console-sensor");
    V.length && V.forEach((Y, F) => {
      const O = z[F];
      if (!O) return;
      const b = r._hass.states[O];
      if (!Sl(b)) return;
      Y.classList.add("unavailable"), Y.classList.remove("open"), Y.title = r._t("status_unavailable_hint");
      const p = Y.querySelector(".console-sensor-icon");
      p && (p.textContent = "❓", p.style.color = "#ffcf8a", p.style.animation = "none");
      const v = Y.querySelector(".console-sensor-state");
      v && (v.textContent = r._t("status_unavailable"), v.style.color = "#ffcf8a");
    });
  });
}
function Fg(r) {
  if (!r || r.__argusBgSensorAvailabilityFixes) return;
  r.__argusBgSensorAvailabilityFixes = !0;
  const o = r.prototype;
  async function a(w) {
    if (!(!w._currentProfile || !w._currentProfile.id))
      try {
        const P = await w._send("argus/get_profile_theme");
        if (P && P.theme && Object.keys(P.theme).length > 0) {
          const z = P.theme;
          z.background_mode !== void 0 && (w._backgroundMode = z.background_mode), z.background_images !== void 0 && (w._backgroundImages = z.background_images), z.panel_bg_file !== void 0 && (w._panelBgFile = z.panel_bg_file || ""), z.panel_bg_sound !== void 0 && (w._panelBgSound = z.panel_bg_sound), z.hub_bg_mode !== void 0 && (w._hubBgMode = z.hub_bg_mode === "none" || z.hub_bg_mode === "default" ? "default" : z.hub_bg_mode), z.hub_bg_file !== void 0 && (w._hubBgFile = z.hub_bg_file || ""), z.hub_bg_sound !== void 0 && (w._hubBgSound = z.hub_bg_sound), w._ui || (w._ui = {}), w._ui.background_mode = w._backgroundMode, w._ui.background_images = w._backgroundImages, w._ui.panel_bg_file = w._panelBgFile, w._ui.panel_bg_sound = w._panelBgSound, w._ui.hub_bg_mode = w._hubBgMode, w._ui.hub_bg_file = w._hubBgFile, w._ui.hub_bg_sound = w._hubBgSound;
          const V = w.shadowRoot;
          if (V) {
            const Y = V.getElementById("bg-mode-select-standalone");
            Y && (Y.value = w._backgroundMode);
            const F = V.getElementById("hub-bg-mode-select");
            F && (F.value = w._hubBgMode);
            const O = V.getElementById("panel-bg-url-input");
            O && !w._panelBgFile.startsWith("data:") && (O.value = w._panelBgFile);
            const b = V.getElementById("hub-bg-url-input");
            b && !w._hubBgFile.startsWith("data:") && (b.value = w._hubBgFile);
          }
          typeof w._updateBgFieldsVisibility == "function" && w._updateBgFieldsVisibility(), typeof w._updateCanvasBackground == "function" && w._updateCanvasBackground(), typeof w._updateTheme == "function" && w._updateTheme(), typeof w._renderEntries == "function" && w._renderEntries();
        }
      } catch (P) {
        console.warn("Failed to load profile theme", P);
      }
  }
  async function u(w) {
    if (!(!w._currentProfile || !w._currentProfile.id))
      try {
        const P = w.shadowRoot;
        let z = w._backgroundMode, V = w._hubBgMode;
        if (P) {
          const O = P.getElementById("bg-mode-select-standalone");
          O && (z = O.value);
          const b = P.getElementById("hub-bg-mode-select");
          b && (V = b.value);
        }
        const Y = {
          background_mode: z,
          hub_bg_mode: V === "default" ? "none" : V,
          panel_bg_file: ["photo", "collage", "video"].includes(z) && w._panelBgFile || "",
          hub_bg_file: V === "image" && w._hubBgFile || "",
          background_images: w._backgroundImages || [],
          panel_bg_sound: !!w._panelBgSound,
          hub_bg_sound: !!w._hubBgSound
        }, F = await w._send("argus/save_profile_theme", { theme: Y });
        F && F.theme && (w._currentProfile.theme = F.theme);
      } catch (P) {
        console.warn("Failed to save profile theme", P);
      }
  }
  const c = o._t;
  o._t = function(w) {
    if (w === "status_unavailable" || w === "status_unavailable_hint") {
      const P = String(this._getLocale?.() || this._hass?.language || "en").split("-")[0];
      return (lp[P] || lp.en)[w];
    }
    return c.call(this, w);
  };
  const f = o._persistPersonalization;
  o._persistPersonalization = async function() {
    jg(this);
    const w = await f.call(this);
    return await u(this), w;
  };
  const y = o._chip;
  o._chip = function(w, P) {
    const z = this._hass?.states?.[w];
    if (!(P === "sensor" || P === "bypass" || P === "entry") || !Sl(z))
      return y.call(this, w, P);
    const Y = z?.attributes?.friendly_name || w, F = this._t("status_unavailable_hint");
    return `
      <span class="sensor-pill sensor-unavailable" title="${vi(F)}">
        <span class="pill-dot"></span>
        <span class="pill-content">
          <span class="pill-name">${vi(Y)}</span>
          <span class="pill-status">❓ ${vi(this._t("status_unavailable"))}</span>
        </span>
        ${this._isAdmin ? `<button data-remove="${P}:${vi(w)}" title="${vi(F)}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>` : ""}
      </span>
    `;
  };
  const m = o._deviceFacts;
  o._deviceFacts = function(w, P, z = !0) {
    if (z && Sl(P)) {
      const V = [{ text: `❓ ${this._t("status_unavailable")}`, className: "status-unavailable" }], Y = this._getDevicePower(w, P);
      return Y.mains && V.push({ text: "🔌 AC", className: "power-mains" }), Y.battery !== null && V.push({ text: `🔋 ${Y.battery}%`, className: Y.battery <= 20 ? "power-low" : "" }), V;
    }
    return m.call(this, w, P, z);
  };
  const h = o._renderEntries;
  o._renderEntries = function() {
    const w = h.call(this);
    return cp(this), Bg(this), up(this), w;
  };
  const x = o._load;
  o._load = async function() {
    const w = await x?.call(this);
    return await a(this), cp(this), up(this), w;
  };
}
function qg(r) {
  const o = r.shadowRoot;
  if (!o || o.getElementById("argus-battery-ui-style")) return;
  const a = document.createElement("style");
  a.id = "argus-battery-ui-style", a.textContent = `
    .console-sensor-battery {
      font-size: 9px;
      font-weight: 800;
      margin-left: 8px;
      padding: 3px 6px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #e2e8f0;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
    .console-sensor-battery.low {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: rgba(239, 68, 68, 0.4) !important;
      color: #fca5a5 !important;
      animation: pulse 2s infinite;
    }
    .console-sensor-battery.dead {
      background: rgba(220, 38, 38, 0.3) !important;
      border-color: rgba(220, 38, 38, 0.6) !important;
      color: #f87171 !important;
    }
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.6; }
      100% { opacity: 1; }
    }
    .sensor-pill .pill-power, .device-fact.pill-power {
      font-size: 9px;
      font-weight: 800;
      padding: 2px 5px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #e2e8f0;
    }
    .sensor-pill .pill-power.low, .device-fact.pill-power.low {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: rgba(239, 68, 68, 0.4) !important;
      color: #fca5a5 !important;
      animation: pulse 2s infinite;
    }
    .sensor-pill .pill-power.dead, .device-fact.pill-power.dead {
      background: rgba(220, 38, 38, 0.3) !important;
      border-color: rgba(220, 38, 38, 0.6) !important;
      color: #f87171 !important;
    }
  `, o.appendChild(a);
}
function Hg(r) {
  const o = r.shadowRoot;
  if (!o || !r._hass?.states) return;
  const a = r._dashboard?.entries || [];
  o.querySelectorAll(".entry").forEach((u, c) => {
    const f = a[c];
    if (!f) return;
    const y = r._hass.states[f.entity_id], m = String(y?.state || "disarmed"), h = m.replace("armed_", "");
    let x = r._ui?.modes?.__by_entity__?.[f.entity_id]?.[h] || r._ui?.modes?.[h] || {}, w = x.sensors || [];
    if (m === "disarmed" || !w.length) {
      const Y = r._ui?.modes?.__by_entity__?.[f.entity_id] || r._ui?.modes || {}, F = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((O) => {
        Y[O]?.sensors && Y[O].sensors.forEach((b) => F.add(b));
      }), w = Array.from(F);
    }
    const P = x.bypassed_sensors || [], z = w.filter((Y) => !P.includes(Y) && r._hass.states[Y]), V = u.querySelectorAll(".console-sensors .console-sensor");
    V.length && V.forEach((Y, F) => {
      const O = z[F];
      if (!O) return;
      const b = r._hass.states[O];
      if (!b || Y.querySelector(".console-sensor-battery")) return;
      const p = r._getSensorBattery(O, b);
      if (p != null && typeof p == "number") {
        const v = Y.querySelector(".console-sensor-state");
        if (v) {
          const g = p === 0, _ = p <= 10 && !g;
          let k = g ? "🔋 ❌" : `🔋 ${p}%`;
          const W = `<span class="console-sensor-battery ${g ? "dead" : _ ? "low" : ""}" title="${g ? "Sin conexión (Batería agotada)" : _ ? "Batería crítica - Reemplazar ya" : "Nivel de batería"}">${k}</span>`;
          v.insertAdjacentHTML("beforebegin", W);
        }
      }
    });
  });
}
function Wg(r) {
  if (!r || r.__argusBatteryUiFixes) return;
  r.__argusBatteryUiFixes = !0;
  const o = r.prototype, a = o._renderEntries;
  o._renderEntries = function() {
    const u = a.call(this);
    return qg(this), Hg(this), u;
  };
}
const ra = /* @__PURE__ */ new Set(["weather", "none", "photo", "collage", "video"]), Ml = /* @__PURE__ */ new Set(["default", "image"]);
function wr(r) {
  return String(r ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
}
function $g(r) {
  const o = /^#[0-9a-f]{6}$/i.test(r || "") ? r : "#ff0000";
  return [1, 3, 5].map((a) => parseInt(o.slice(a, a + 2), 16));
}
function dp(r) {
  const o = r.shadowRoot;
  if (!o || o.getElementById("argus-deep-repair-style")) return;
  const a = document.createElement("style");
  a.id = "argus-deep-repair-style", a.textContent = `
.security-console .console-sensors{flex:0 1 276px!important;max-width:292px!important;min-width:210px!important;gap:7px!important;align-content:center!important;margin-inline:auto!important}
.security-console .console-sensor{min-height:0!important;padding:8px 10px!important;gap:8px!important;border-radius:12px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 4px 12px rgba(0,0,0,.16)!important}
.security-console .console-sensor-icon{font-size:15px!important;line-height:1!important}.security-console .console-sensor-name{font-size:11px!important;font-weight:800!important}.security-console .console-sensor-state{font-size:9px!important;letter-spacing:.035em!important}.security-console .console-sensor-battery{font-size:8px!important;margin-left:2px!important;padding:2px 4px!important}
.light-siren-settings,.sos-output-settings{margin-top:8px;padding:9px 10px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(0,0,0,.12)}.light-siren-settings summary,.sos-output-settings summary{cursor:pointer;font-size:11px;font-weight:850}.light-siren-settings label,.sos-output-settings label{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:9px;font-size:11px}.sos-output-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px;align-items:start}.sos-output-row>.sensor-pill{width:100%!important;justify-content:flex-start!important}.sos-remove-output{border:0;border-radius:9px;padding:7px 9px;background:rgba(239,68,68,.18);color:#fca5a5;cursor:pointer}.sos-output-settings{grid-column:1/-1;margin-top:0}.sos-output-settings input[type=color]{width:44px;height:28px;padding:1px;border:0;border-radius:8px;background:transparent}.sos-output-settings select{min-width:120px;padding:6px;border-radius:8px;background:rgba(10,20,34,.8);color:inherit;border:1px solid rgba(255,255,255,.14)}
@media(max-width:950px){.security-console .console-sensors{width:min(100%,292px)!important;max-width:292px!important;min-width:0!important}}.ios-fullscreen .entry-content.security-console .console-sensors{flex-basis:292px!important;max-width:310px!important;min-width:220px!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console .console-sensors{width:min(100%,310px)!important;max-width:310px!important}}`, o.appendChild(a);
}
function pp(r = {}, o = {}) {
  const a = o?.background_mode, u = o?.background_file || "";
  let c = r.background_mode;
  ra.has(c) || (c = ra.has(a) ? a : "weather");
  let f = r.panel_bg_file;
  f === void 0 && (f = u), f = String(f || ""), ["photo", "collage", "video"].includes(c) || (f = "");
  let y = r.hub_bg_mode;
  y = y === "none" ? "default" : y, Ml.has(y) || (y = "default");
  let m = String(r.hub_bg_file || "");
  return y !== "image" && (m = ""), { background_mode: c, background_images: Array.isArray(r.background_images) ? r.background_images : f ? [f] : [], panel_bg_file: f, panel_bg_sound: !!r.panel_bg_sound, hub_bg_mode: y, hub_bg_file: m, hub_bg_sound: !!r.hub_bg_sound };
}
function fp(r, o) {
  r._backgroundMode = o.background_mode, r._backgroundImages = o.background_images, r._panelBgFile = o.panel_bg_file, r._panelBgSound = o.panel_bg_sound, r._hubBgMode = o.hub_bg_mode, r._hubBgFile = o.hub_bg_file, r._hubBgSound = o.hub_bg_sound;
  const a = r.shadowRoot, u = a?.getElementById("bg-mode-select-standalone"), c = a?.getElementById("panel-bg-url-input"), f = a?.getElementById("chk-panel-bg-sound"), y = a?.getElementById("hub-bg-mode-select"), m = a?.getElementById("hub-bg-url-input"), h = a?.getElementById("chk-hub-bg-sound");
  u && (u.value = o.background_mode), c && (c.value = o.panel_bg_file), f && (f.checked = o.panel_bg_sound), y && (y.value = o.hub_bg_mode), m && (m.value = o.hub_bg_file), h && (h.checked = o.hub_bg_sound), r._updateBgFieldsVisibility?.(), r._updateCanvasBackground?.(), r._updateTheme?.(), r._renderEntries?.();
}
function mp(r) {
  const o = r.shadowRoot;
  if (!o) return;
  const a = (u, c, f) => {
    u && !u.dataset[c] && (u.dataset[c] = "1", u.addEventListener("change", f));
  };
  a(o.getElementById("bg-mode-select-standalone"), "deepBg", (u) => {
    const c = ra.has(u.target.value) ? u.target.value : "weather";
    if (r._backgroundMode = c, !["photo", "collage", "video"].includes(c)) {
      r._panelBgFile = "", r._backgroundImages = [];
      const f = o.getElementById("panel-bg-url-input");
      f && (f.value = "");
    }
    r._updateBgFieldsVisibility?.(), r._updateTheme?.(), r._renderEntries?.();
  }), a(o.getElementById("hub-bg-mode-select"), "deepBg", (u) => {
    const c = Ml.has(u.target.value) ? u.target.value : "default";
    if (r._hubBgMode = c, c === "default") {
      r._hubBgFile = "";
      const f = o.getElementById("hub-bg-url-input");
      f && (f.value = "");
    }
    r._updateBgFieldsVisibility?.(), r._updateCanvasBackground?.(), r._updateTheme?.();
  }), a(o.getElementById("panel-bg-url-input"), "deepBg", (u) => {
    r._panelBgFile = String(u.target.value || "").trim(), r._panelBgFile && (r._backgroundImages = [r._panelBgFile]), r._renderEntries?.();
  }), a(o.getElementById("hub-bg-url-input"), "deepBg", (u) => {
    r._hubBgFile = String(u.target.value || "").trim(), r._updateCanvasBackground?.(), r._updateTheme?.();
  });
}
function Yo(r) {
  const o = r.shadowRoot?.getElementById("sos-output-chips");
  if (!o) return;
  const a = Array.isArray(r._panicOutputs) ? r._panicOutputs : [], u = r._panicOutputSettings || {};
  o.innerHTML = a.length ? a.map((c) => {
    const f = r._hass?.states?.[c], y = f?.attributes?.friendly_name || c, m = c.startsWith("light."), h = u[c] || {}, x = ["none", "gentle", "rapid"].includes(h.flash_mode) ? h.flash_mode : h.gentle_flash ? "gentle" : "none";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${wr(y)}"><span>${wr(y)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${wr(c)}" aria-label="Eliminar">✕</button>${m ? `<details class="sos-output-settings"><summary>🎨 Color y destello</summary><label>Color <input type="color" data-sos-output-color="${wr(c)}" value="${w = h.rgb_color, `#${(Array.isArray(w) && w.length === 3 ? w : [255, 0, 0]).map((P) => Math.max(0, Math.min(255, Number(P) || 0)).toString(16).padStart(2, "0")).join("")}`}"></label><label>Destello <select data-sos-output-flash="${wr(c)}"><option value="none" ${x === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${x === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${x === "rapid" ? "selected" : ""}>Rápido</option></select></label></details>` : ""}</div>`;
    var w;
  }).join("") : `<div class="mode-sensor-none">${wr(r._t("sos_no_outputs"))}</div>`, o.querySelectorAll("[data-remove-sos-output]").forEach((c) => {
    c.addEventListener("click", () => {
      r._panicOutputs = a.filter((f) => f !== c.dataset.removeSosOutput), delete r._panicOutputSettings?.[c.dataset.removeSosOutput], Yo(r);
    });
  });
}
function Ug(r) {
  if (!r || r.__argusDeepRepair) return;
  r.__argusDeepRepair = !0;
  const o = r.prototype, a = o._load;
  o._load = async function() {
    const m = await a.call(this);
    if (dp(this), this._panicOutputSettings = this._dashboard?.ui?.panic_output_settings || {}, this._currentProfile?.id) try {
      const h = await this._send("argus/get_profile_theme");
      fp(this, pp(h?.theme || {}, this._currentUserTheme || {}));
    } catch (h) {
      console.warn("Argus profile theme load failed:", h);
    }
    return mp(this), Yo(this), m;
  };
  const u = o._renderEntries;
  o._renderEntries = function() {
    const m = u.call(this);
    return dp(this), mp(this), m;
  }, o._renderSosOutputs = function() {
    Yo(this);
  };
  const c = o._acceptSelection;
  o._acceptSelection = function() {
    if (this._selectorTarget !== "panic") return c.call(this);
    this._panicOutputs = [...new Set(this._selected || [])], this._panicOutputSettings = this._panicOutputSettings || {}, this._panicOutputs.forEach((m) => {
      this._panicOutputSettings[m] ||= { flash_mode: "none" };
    }), Yo(this), this._closeModal?.();
  };
  const f = o._handlePanelBgFile;
  o._handlePanelBgFile = async function(m) {
    if (await f.call(this, m), this._panelBgFile) {
      this._backgroundMode = "photo", this._backgroundImages = [this._panelBgFile];
      const h = this.shadowRoot?.getElementById("bg-mode-select-standalone");
      h && (h.value = "photo"), this._updateBgFieldsVisibility?.(), this._renderEntries?.();
    }
  };
  const y = o._handleHubBgFile;
  o._handleHubBgFile = async function(m) {
    if (await y.call(this, m), this._hubBgFile) {
      this._hubBgMode = "image";
      const h = this.shadowRoot?.getElementById("hub-bg-mode-select");
      h && (h.value = "image"), this._updateBgFieldsVisibility?.(), this._updateCanvasBackground?.(), this._updateTheme?.();
    }
  }, o._persistPersonalization = async function() {
    const m = this.shadowRoot, h = ra.has(m?.getElementById("bg-mode-select-standalone")?.value) ? m.getElementById("bg-mode-select-standalone").value : "weather", x = Ml.has(m?.getElementById("hub-bg-mode-select")?.value) ? m.getElementById("hub-bg-mode-select").value : "default", w = ["photo", "collage", "video"].includes(h) ? String(m?.getElementById("panel-bg-url-input")?.value || this._panelBgFile || "").trim() : "", P = x === "image" ? String(m?.getElementById("hub-bg-url-input")?.value || this._hubBgFile || "").trim() : "", z = { background_mode: h, background_images: h === "collage" ? this._backgroundImages || [] : w ? [w] : [], panel_bg_file: w, panel_bg_sound: !!m?.getElementById("chk-panel-bg-sound")?.checked, hub_bg_mode: x === "default" ? "none" : "image", hub_bg_file: P, hub_bg_sound: !!m?.getElementById("chk-hub-bg-sound")?.checked }, V = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, Y = this._normaliseEmergencyNumber(m?.getElementById("emergency-number-input")?.value), F = { ...V ? { entry_id: V } : {}, home_name: this._homeName, temperature_source: m?.getElementById("temp-source-select-standalone")?.value || "auto", weather_source: m?.getElementById("weather-source-select")?.value || "auto", emergency_number: Y, panic_outputs: this._panicOutputs || [] };
    try {
      const O = function(p) {
        const v = { ...p._panicOutputSettings || {} };
        return p.shadowRoot?.querySelectorAll("[data-sos-output-color]").forEach((g) => {
          const _ = g.dataset.sosOutputColor;
          v[_] = { ...v[_] || {}, rgb_color: $g(g.value), flash_mode: p.shadowRoot.querySelector(`[data-sos-output-flash="${CSS.escape(_)}"]`)?.value || "none" };
        }), p._panicOutputSettings = Object.fromEntries((p._panicOutputs || []).map((g) => [g, v[g] || { flash_mode: "none" }])), p._panicOutputSettings;
      }(this);
      await this._send("argus/save_profile_theme", { ...V ? { entry_id: V } : {}, theme: z }), await this._send("argus/save_panic_output_profile", { ...V ? { entry_id: V } : {}, outputs: this._panicOutputs || [], settings: O }), await this._send("argus/save_ui", F), fp(this, pp(z)), this._temperatureSource = F.temperature_source, this._weatherSource = F.weather_source, this._emergencyNumber = Y, this._configureEmergencyCall?.();
      const b = m?.getElementById("btn-save-personalization-standalone");
      if (b) {
        const p = b.textContent;
        b.textContent = this._t("saved"), b.style.background = "#43a047", setTimeout(() => {
          b.textContent = p, b.style.background = "";
        }, 3e3);
      }
    } catch (O) {
      throw alert(this._format("generic_error", { error: O?.message || O })), O;
    }
  };
}
const Vg = /* @__PURE__ */ new Set(["hs", "xy", "rgb", "rgbw", "rgbww"]), Gg = /* @__PURE__ */ new Set(["flash", "slow flash", "slow_flash", "blink", "strobe", "police"]);
function jt(r) {
  return String(r ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
}
function sa(r, o) {
  const a = r?._hass?.states?.[o], u = a?.attributes || {}, c = Array.isArray(u.supported_color_modes) ? [...new Set(u.supported_color_modes.map((w) => String(w).toLowerCase()).filter(Boolean))] : [], f = Array.isArray(u.effect_list) ? u.effect_list.map((w) => String(w).toLowerCase()) : [], y = !!a && String(o).startsWith("light."), m = y && (c.some((w) => w !== "onoff") || Number.isFinite(Number(u.brightness))), h = y && f.some((w) => Gg.has(w)), x = y && (Number(u.supported_features) & 8) === 8;
  return {
    exists: !!a,
    isLight: y,
    modes: c,
    color: y && c.some((w) => Vg.has(w)),
    brightness: m,
    nativeEffect: h,
    nativeFlash: x,
    safeFlash: h || x || m,
    flashMethod: h ? "native_effect" : x ? "native_flash" : m ? "brightness_pulse" : "steady_safe"
  };
}
function Yg(r, o) {
  return sa(r, o).color;
}
function Xg(r) {
  return `#${(Array.isArray(r) && r.length === 3 ? r : [255, 0, 0]).map((a) => Math.max(0, Math.min(255, Number(a) || 0)).toString(16).padStart(2, "0")).join("")}`;
}
function Tl(r) {
  const o = /^#[0-9a-f]{6}$/i.test(r || "") ? r : "#ff0000";
  return [1, 3, 5].map((a) => parseInt(o.slice(a, a + 2), 16));
}
function xi(r) {
  const o = r.shadowRoot;
  if (!o || o.getElementById("argus-entity-truth-style")) return;
  const a = document.createElement("style");
  a.id = "argus-entity-truth-style", a.textContent = `
[hidden]{display:none!important}.sos-output-row{grid-template-columns:minmax(0,1fr) auto!important;padding:6px 8px!important;border:1px solid rgba(255,255,255,.09);border-radius:16px;background:rgba(5,15,28,.16)}
.sos-output-settings summary,.light-siren-settings summary{white-space:normal!important}.argus-ha-capability{display:inline-flex;margin-left:6px;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.08);font-size:8px;font-weight:750;opacity:.72;text-transform:none;letter-spacing:0}
.argus-safe-note{margin-top:8px;padding:8px;border-radius:10px;background:rgba(255,183,77,.10);font-size:9px;line-height:1.35;opacity:.85}.argus-test-flash{width:100%;margin-top:8px;padding:7px 9px;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(46,168,255,.12);color:inherit;font-size:10px;font-weight:850;cursor:pointer}.argus-test-flash:disabled{opacity:.55;cursor:wait}
#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{flex:0 1 248px!important;width:248px!important;max-width:248px!important;min-width:205px!important;gap:6px!important;margin-inline:0!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor{min-height:34px!important;padding:6px 10px!important;gap:7px!important;border-radius:999px!important;box-sizing:border-box!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-icon{font-size:16px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-name{font-size:10px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-state{font-size:8px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-battery{font-size:9px!important;padding:2px 5px!important;border-radius:999px!important}
#widget-grid>#w-access{align-self:start!important;height:max-content!important;min-height:0!important;max-height:none!important}#widget-grid>#w-access .access-workspace:not(.open){display:none!important}#widget-grid>#w-access .access-workspace.open{max-height:430px!important;overflow:auto!important;overscroll-behavior:contain}#widget-grid>#w-activity,#widget-grid>#w-automations{grid-row:span 1!important;height:clamp(270px,32vh,340px)!important;min-height:270px!important;max-height:340px!important;align-self:start!important}#widget-grid>#w-activity #activity-log,#widget-grid>#w-automations #auto-view,#widget-grid>#w-automations #auto-view>div{min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}@media(max-width:760px){#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{width:min(100%,248px)!important;max-width:248px!important}#widget-grid>#w-activity,#widget-grid>#w-automations{height:360px!important;min-height:360px!important;max-height:360px!important}}`, o.appendChild(a);
}
async function Gp(r, o, a, u, c) {
  if (!a || u === "none") return;
  const f = o.textContent;
  o.disabled = !0, o.textContent = "Probando de forma segura…";
  try {
    const y = { entity_id: a, flash_mode: u };
    Yg(r, a) && Array.isArray(c) && (y.rgb_color = c);
    const m = await r._send("argus/test_light_output", y), h = { brightness_pulse: "pulso de brillo sin apagar", native_flash: "flash nativo", native_effect: "efecto nativo", steady_safe: "luz fija; destello bloqueado por seguridad", steady: "luz fija" }[m?.method] || "servicio seguro de luz";
    o.textContent = `✓ ${h}`;
  } catch (y) {
    o.textContent = `✗ ${y?.message || "No respondió la luz"}`;
  } finally {
    setTimeout(() => {
      o.disabled = !1, o.textContent = f;
    }, 4e3);
  }
}
function Yp(r, o) {
  return r.safeFlash ? `${r.color ? "🎨 Color y destello seguro" : "✨ Destello seguro"} — ${jt(o)}` : `💡 Luz fija segura — ${jt(o)}`;
}
function Xo(r) {
  xi(r);
  const o = r.shadowRoot?.getElementById("sos-output-chips");
  if (!o) return;
  const a = Array.isArray(r._panicOutputs) ? r._panicOutputs : [], u = r._panicOutputSettings || {};
  o.innerHTML = a.length ? a.map((c) => {
    const y = r._hass?.states?.[c]?.attributes?.friendly_name || c, m = sa(r, c), h = u[c] || {}, x = m.safeFlash && ["none", "gentle", "rapid"].includes(h.flash_mode) ? h.flash_mode : m.safeFlash && h.gentle_flash ? "gentle" : "none", w = m.modes.length ? m.modes.join(", ") : "sin capacidad declarada";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${jt(c)}"><span>${jt(y)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${jt(c)}" aria-label="Eliminar">✕</button>${m.isLight ? `<details class="sos-output-settings"><summary>${Yp(m, y)} <span class="argus-ha-capability">HA: ${jt(w)}</span></summary>${m.color ? `<label>Color <input type="color" data-sos-output-color="${jt(c)}" value="${Xg(h.rgb_color)}"></label>` : `<input type="hidden" data-sos-output-color="${jt(c)}" value="#ffffff">`}${m.safeFlash ? `<label>Destello <select data-sos-output-flash="${jt(c)}"><option value="none" ${x === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${x === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${x === "rapid" ? "selected" : ""}>Rápido</option></select></label><button type="button" class="argus-test-flash" data-test-sos-flash="${jt(c)}">Probar destello seguro</button>` : '<div class="argus-safe-note">Esta entidad solo admite encendido/apagado. Argus la mantendrá encendida de forma fija y nunca hará ciclos repetidos que puedan restablecer el bombillo o el plug.</div>'}</details>` : ""}</div>`;
  }).join("") : `<div class="mode-sensor-none">${jt(r._t("sos_no_outputs"))}</div>`, o.querySelectorAll("[data-remove-sos-output]").forEach((c) => c.addEventListener("click", () => {
    r._panicOutputs = a.filter((f) => f !== c.dataset.removeSosOutput), delete r._panicOutputSettings?.[c.dataset.removeSosOutput], Xo(r);
  })), o.querySelectorAll("[data-test-sos-flash]").forEach((c) => c.addEventListener("click", () => {
    const f = c.dataset.testSosFlash, y = c.closest(".sos-output-settings"), m = y?.querySelector("[data-sos-output-flash]")?.value || "none", h = y?.querySelector('input[type="color"][data-sos-output-color]');
    Gp(r, c, f, m, h ? Tl(h.value) : null);
  }));
}
function hp(r) {
  xi(r);
  const o = r.shadowRoot;
  o && o.querySelectorAll("[data-light-siren-color]").forEach((a) => {
    const u = a.dataset.lightSirenColor, c = sa(r, u), f = a.closest(".light-siren-settings"), y = a.closest("label");
    !c.color && y && y.remove();
    const m = f?.querySelector("summary"), h = r._hass?.states?.[u]?.attributes?.friendly_name || u, x = c.modes.length ? c.modes.join(", ") : "sin capacidad declarada";
    m && (m.innerHTML = `${Yp(c, h)} <span class="argus-ha-capability">HA: ${jt(x)}</span>`);
    const w = f?.querySelector("[data-light-siren-flash]");
    if (!c.safeFlash && w) {
      w.checked = !1, w.disabled = !0;
      const P = w.closest("label");
      P && (P.innerHTML = '<span class="argus-safe-note">Sin destello: luz fija para evitar ciclos de alimentación.</span>');
    }
    if (c.safeFlash && f && !f.querySelector("[data-test-mode-flash]")) {
      const P = document.createElement("button");
      P.type = "button", P.className = "argus-test-flash", P.dataset.testModeFlash = u, P.textContent = "Probar destello seguro", P.addEventListener("click", () => {
        const z = f.querySelector("[data-light-siren-flash]")?.checked, V = c.color ? f.querySelector("[data-light-siren-color]") : null;
        Gp(r, P, u, z ? "gentle" : "none", V ? Tl(V.value) : null);
      }), f.appendChild(P);
    }
  });
}
function Qg(r) {
  const o = r._currentModeConfig(), a = r.shadowRoot, u = a.getElementById("mode-require-closed"), c = a.getElementById("mode-arming-time"), f = a.getElementById("mode-entry-delay"), y = a.getElementById("mode-mqtt-enabled");
  u && (o.require_closed = u.checked), c && (o.arming_time = c.value ? parseInt(c.value, 10) : 0), f && (o.entry_delay = f.value ? parseInt(f.value, 10) : 0), y && (o.mqtt_enabled = y.checked), o.light_siren_settings = {}, a.querySelectorAll("[data-light-siren-flash]").forEach((m) => {
    const h = m.dataset.lightSirenFlash, x = sa(r, h), w = x.safeFlash && !!m.checked, P = { gentle_flash: w, flash_mode: w ? "gentle" : "none" };
    if (x.color) {
      const z = a.querySelector(`[data-light-siren-color="${CSS.escape(h)}"]`);
      z && (P.rgb_color = Tl(z.value));
    }
    o.light_siren_settings[h] = P;
  }), r._runWithPin(async () => {
    const m = r._modeEntryId || r._dashboard?.entries?.[0]?.entity_id || "default";
    r._ui.modes ||= {}, r._ui.modes.__by_entity__ ||= {}, r._ui.modes.__by_entity__[m] ||= {}, r._ui.modes.__by_entity__[m][r._mode] = { ...o };
    const h = a.getElementById("mode-status");
    h && (h.textContent = "…", h.className = "status");
    try {
      await r._send("argus/save_mode_config", { entity_id: m, mode: r._mode, config: o }), h && (h.textContent = r._t("saved"), h.className = "status ok show"), setTimeout(() => {
        h && (h.textContent = "", h.className = "status");
      }, 3e3);
    } catch (x) {
      h && (h.textContent = `✗ ${x?.message || "Error"}`, h.className = "status err show");
    }
  });
}
function Kg(r) {
  if (!r || r.__argusLightCapabilityFixes) return;
  r.__argusLightCapabilityFixes = !0;
  const o = r.prototype, a = o.connectedCallback;
  o.connectedCallback = function() {
    return xi(this), a?.call(this);
  };
  const u = o._load;
  o._load = async function() {
    const m = await u.call(this);
    return xi(this), Xo(this), hp(this), m;
  }, o._renderSosOutputs = function() {
    Xo(this);
  };
  const c = o._acceptSelection;
  o._acceptSelection = function() {
    const m = c.call(this);
    return this._selectorTarget === "panic" && Xo(this), m;
  };
  const f = o._renderModeView;
  o._renderModeView = function() {
    const m = f.call(this);
    return hp(this), m;
  };
  const y = o._renderEntries;
  o._renderEntries = function() {
    const m = y.call(this);
    return xi(this), m;
  }, o._saveMode = function() {
    return Qg(this);
  };
}
function gp(r) {
  const o = r.shadowRoot, a = o?.getElementById("lbl-aesthetic-custom"), u = o?.getElementById("personalize-workspace");
  if (!o || !a || !u || a.dataset.argusPersonalizationToggle === "1") return;
  const c = a.cloneNode(!0);
  a.replaceWith(c), c.dataset.argusPersonalizationToggle = "1", c.setAttribute("role", "button"), c.setAttribute("tabindex", "0");
  const f = o.getElementById("btn-edit-home-name-standalone"), y = o.getElementById("btn-save-personalization-standalone"), m = (x) => {
    u.hidden = !x, u.classList.toggle("collapsed", !x), c.setAttribute("aria-expanded", String(x));
    const w = c.querySelector("#personalize-chevron");
    w && (w.style.transform = "none", w.textContent = x ? "▲ Ocultar" : "▼ Desplegar"), f && (f.hidden = !x), y && (y.hidden = !x);
  };
  m(!1);
  const h = () => m(c.getAttribute("aria-expanded") !== "true");
  c.addEventListener("click", h), c.addEventListener("keydown", (x) => {
    x.key !== "Enter" && x.key !== " " || (x.preventDefault(), h());
  });
}
function Zg(r) {
  if (!r || r.__argusPersonalizationToggleFix) return;
  r.__argusPersonalizationToggleFix = !0;
  const o = r.prototype, a = o.connectedCallback;
  o.connectedCallback = function() {
    const c = a?.call(this);
    return queueMicrotask(() => gp(this)), c;
  };
  const u = o._load;
  o._load = async function() {
    const c = await u?.call(this);
    return gp(this), c;
  };
}
function al(r) {
  if (r.shadowRoot?.getElementById("argus-dashboard-scroll-fixes")) return;
  const o = document.createElement("style");
  o.id = "argus-dashboard-scroll-fixes", o.textContent = `
#w-modes,#w-access{display:flex!important;flex-direction:column!important;min-height:0!important;overflow:hidden!important}
#w-modes .panel-head,#w-access .panel-head{flex:0 0 auto!important}
#w-modes #mode-tabs,#w-access .tabs{flex:0 0 auto!important;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:thin!important}
#w-modes #mode-view,#w-modes .mode-view,#w-modes .mode-config,#w-modes .mode-content,
#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list,#w-access .users-grid,#w-access .access-list{
 flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important;-webkit-overflow-scrolling:touch!important
}
#w-modes #mode-view::-webkit-scrollbar,#w-access #access-view::-webkit-scrollbar,#w-access .access-content::-webkit-scrollbar,#w-access .users-list::-webkit-scrollbar,#w-access .user-list::-webkit-scrollbar{width:7px}
#w-modes #mode-view::-webkit-scrollbar-thumb,#w-access #access-view::-webkit-scrollbar-thumb,#w-access .access-content::-webkit-scrollbar-thumb,#w-access .users-list::-webkit-scrollbar-thumb,#w-access .user-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:999px}
@media(max-width:760px){#w-modes,#w-access{min-height:420px!important;max-height:70dvh!important}#w-modes #mode-view,#w-access #access-view,#w-access .access-content{padding-bottom:28px!important}}
`, r.shadowRoot?.appendChild(o);
}
function Jg(r) {
  if (!r || r.__argusDashboardScrollFixes) return;
  r.__argusDashboardScrollFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    return al(this), a?.call(this);
  }, o._load = async function() {
    const f = await u?.call(this);
    return al(this), f;
  }, o._renderEntries = function() {
    const f = c?.call(this);
    return al(this), f;
  };
}
const Xp = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Si = (r) => JSON.parse(JSON.stringify(r));
function kl(r) {
  if (!Array.isArray(r)) return null;
  const o = /* @__PURE__ */ new Set(), a = [];
  for (const u of r) {
    const c = String(u?.id || "");
    !c || o.has(c) || (o.add(c), a.push({ id: c, size: Xp.has(u?.size) ? u.size : "M", hidden: !!u?.hidden }));
  }
  return a.length ? a : null;
}
function yp(r) {
  try {
    return kl(JSON.parse(localStorage.getItem("argus-widgets-v4") || localStorage.getItem("argus-widgets-v2") || "null"));
  } catch {
    return null;
  }
}
function ey(r) {
  const o = r.shadowRoot?.getElementById("widget-grid"), a = new Map((r._widgetConfig || []).map((u) => [u.id, u]));
  return kl(o ? [...o.children].filter((u) => u.classList.contains("panel") && !u.classList.contains("dashboard-instances")).map((u) => {
    const c = u.id.replace(/^w-/, "");
    return { id: c, size: Xp.has(u.dataset.size) ? u.dataset.size : a.get(c)?.size || "M", hidden: !!a.get(c)?.hidden };
  }) : r._widgetConfig);
}
function Qp(r) {
  const o = ey(r);
  if (!o) return;
  r._widgetConfig = Si(o), localStorage.setItem("argus-widgets-v4", JSON.stringify(o)), r._ui = r._ui || {};
  const a = { ...r._ui.dashboard || {}, widget_layout: Si(o) };
  r._ui.dashboard = a;
  const u = r._dashboard?.entry_id || r._dashboard?.entries?.[0]?.entry_id, c = { dashboard: a, ...u ? { entry_id: u } : {} };
  r._v2041Save = (r._v2041Save || Promise.resolve()).catch(() => {
  }).then(() => r._send("argus/save_ui", c)).catch((f) => console.error("Argus layout save failed", f));
}
function ty(r) {
  if (r.shadowRoot?.getElementById("argus-v2041-audit-repair")) return;
  const o = document.createElement("style");
  o.id = "argus-v2041-audit-repair", o.textContent = `
#w-modes,#w-access{display:flex!important;flex-direction:column!important;overflow:hidden!important;min-height:320px!important}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid{flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-access [role=tabpanel]{min-height:220px!important;max-height:none!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important}
.argus-disarm-btn{--btn-bg:#64748b!important;background:linear-gradient(110deg,rgba(100,116,139,.58),rgba(30,41,59,.72))!important;border-color:rgba(255,255,255,.2)!important}
@media(max-width:760px){#w-modes,#w-access{min-height:440px!important;max-height:75dvh!important}}
`, r.shadowRoot?.appendChild(o);
}
function wi(r) {
  ty(r), [...r.shadowRoot?.querySelectorAll(".entry") || []].forEach((c, f) => {
    const y = c.querySelector(".liquid-stack");
    if (!y || y.querySelector(".argus-disarm-btn")) return;
    const m = document.createElement("button");
    m.type = "button", m.className = "liquid-btn argus-disarm-btn", m.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", m.addEventListener("click", async () => {
      const h = r._dashboard?.entries?.[f] || r._dashboard?.entries?.find((x) => x.entity_id === c.dataset.entityId);
      if (h) {
        m.disabled = !0;
        try {
          await r._send("argus/perform_alarm_action", { entry_id: h.entry_id, action: "disarm" }), await r._load?.();
        } catch (x) {
          console.error("Argus disarm failed", x);
        } finally {
          m.disabled = !1;
        }
      }
    }), y.prepend(m);
  });
  const a = r.shadowRoot?.getElementById("w-access");
  if (a) {
    const c = a.querySelector(".panel-body,#access-view,.access-view,.access-content");
    c && !c.textContent.trim() && [...a.querySelectorAll("button,[role=tab]")].find((y) => /usuarios|users/i.test(y.textContent || ""))?.click();
  }
  const u = r.shadowRoot?.getElementById("widget-grid");
  if (u && !u._v2041) {
    u._v2041 = !0;
    for (const c of ["drop", "dragend"]) u.addEventListener(c, () => {
      r._widgetEditing && setTimeout(() => Qp(r), 0);
    }, !0);
  }
}
function ny(r) {
  if (!r || r.__v2041AuditRepair) return;
  r.__v2041AuditRepair = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries, f = o._saveWidgetLayout, y = o._initWidgetGrid;
  o.connectedCallback = function() {
    const m = a?.call(this);
    return wi(this), this._v2041Observer = new MutationObserver(() => wi(this)), this._v2041Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), m;
  }, o._initWidgetGrid = function() {
    const m = yp();
    m && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: Si(m) });
    const h = y?.call(this);
    return m && (this._widgetConfig = Si(m), this._renderWidgetLayout?.()), wi(this), h;
  }, o._load = async function() {
    const m = await u?.call(this), h = yp();
    return h && (this._widgetConfig = Si(h), this._renderWidgetLayout?.()), wi(this), m;
  }, o._renderEntries = function() {
    const m = c?.call(this);
    return wi(this), m;
  }, o._saveWidgetLayout = function() {
    const m = f?.call(this);
    return setTimeout(() => Qp(this), 0), m;
  };
}
const Kp = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Zp = "argus-widgets-stable-v5", _r = (r) => JSON.parse(JSON.stringify(r));
function El(r) {
  if (!Array.isArray(r)) return null;
  const o = /* @__PURE__ */ new Set(), a = [];
  for (const u of r) {
    const c = String(u?.id || "");
    !c || o.has(c) || (o.add(c), a.push({ id: c, size: Kp.has(u?.size) ? u.size : "M", hidden: !!u?.hidden }));
  }
  return a.length ? a : null;
}
function vp() {
  try {
    return El(JSON.parse(localStorage.getItem(Zp) || localStorage.getItem("argus-widgets-v4") || "null"));
  } catch {
    return null;
  }
}
function br(r) {
  const o = r.shadowRoot?.getElementById("widget-grid"), a = new Map((r._widgetConfig || []).map((u) => [u.id, u]));
  return El(o ? [...o.children].filter((u) => u.classList.contains("panel") && !u.classList.contains("dashboard-instances")).map((u) => {
    const c = u.id.replace(/^w-/, "");
    return { id: c, size: Kp.has(u.dataset.size) ? u.dataset.size : a.get(c)?.size || "M", hidden: !!a.get(c)?.hidden };
  }) : r._widgetConfig);
}
function ki(r, o = br(r)) {
  if (!o) return;
  localStorage.setItem(Zp, JSON.stringify(o)), r._widgetConfig = _r(o), r._ui = r._ui || {};
  const a = { ...r._ui.dashboard || {}, widget_layout: _r(o) };
  r._ui.dashboard = a;
  const u = r._dashboard?.entry_id || r._dashboard?.entries?.[0]?.entry_id, c = { dashboard: a, ...u ? { entry_id: u } : {} };
  r._stableSave = (r._stableSave || Promise.resolve()).catch(() => {
  }).then(() => r._send("argus/save_ui", c)).catch((f) => console.error("Argus server layout save failed; stable local layout retained", f));
}
function ry(r) {
  if (r.shadowRoot?.getElementById("argus-v2042-stability")) return;
  const o = document.createElement("style");
  o.id = "argus-v2042-stability", o.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:linear-gradient(110deg,#22c55e,#15803d)!important;border-color:rgba(134,239,172,.65)!important;color:white!important;box-shadow:0 8px 22px rgba(34,197,94,.22)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}
.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}
@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes,#w-access{display:flex!important;flex-direction:column!important;overflow:hidden!important;min-height:360px!important}#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
@media(max-width:760px){#w-modes,#w-access{min-height:480px!important;max-height:78dvh!important}}
`, r.shadowRoot?.appendChild(o);
}
function _i(r) {
  ry(r), [...r.shadowRoot?.querySelectorAll(".entry") || []].forEach((c, f) => {
    const y = r._dashboard?.entries?.[f], m = y?.attributes || {}, h = m.arming_blocking_sensors || [], x = !!(m.arming_waiting_for_sensors || h.length);
    c.classList.toggle("argus-waiting", x);
    const w = c.querySelector(".liquid-stack");
    if (w) {
      let z = w.querySelector(".argus-disarm-btn");
      z || (z = document.createElement("button"), z.type = "button", z.className = "liquid-btn argus-disarm-btn", z.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", z.onclick = async () => {
        if (y) {
          z.disabled = !0;
          try {
            await r._send("argus/perform_alarm_action", { entry_id: y.entry_id, action: "disarm" }), await r._load?.();
          } finally {
            z.disabled = !1;
          }
        }
      });
      const V = [...w.children].find((Y) => /SOS|PÁNICO|PANIC/i.test(Y.textContent || ""));
      V ? w.insertBefore(z, V) : w.appendChild(z);
    }
    const P = new Set(h.map((z) => {
      const V = r._dashboard?.available_entities?.find?.((Y) => Y.entity_id === z);
      return String(V?.name || z).toLocaleLowerCase();
    }));
    c.querySelectorAll(".console-sensor").forEach((z) => {
      const V = String(z.querySelector(".console-sensor-name")?.textContent || z.textContent || "").toLocaleLowerCase();
      z.classList.toggle("argus-blocking", [...P].some((Y) => V.includes(Y) || Y.includes(V)));
    });
  });
  const a = r.shadowRoot?.getElementById("w-access");
  if (a) {
    const c = a.querySelector(".panel-body,#access-view,.access-view,.access-content,.access-body");
    c && !c.textContent.trim() && [...a.querySelectorAll("button,[role=tab]")].find((f) => /usuarios|users/i.test(f.textContent || ""))?.click();
  }
  const u = r.shadowRoot?.getElementById("widget-grid");
  u && !u._stableLayout && (u._stableLayout = !0, u.addEventListener("dragend", () => {
    r._widgetEditing && ki(r, br(r));
  }, !0), u.addEventListener("drop", () => queueMicrotask(() => {
    r._widgetEditing && ki(r, br(r));
  }), !1), new MutationObserver(() => {
    r._widgetEditing && (clearTimeout(r._stableMutation), r._stableMutation = setTimeout(() => ki(r, br(r)), 80));
  }).observe(u, { childList: !0 }));
}
function iy(r) {
  if (!r || r.__v2042Stability) return;
  r.__v2042Stability = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries, f = o._initWidgetGrid, y = o._toggleWidgetEditing, m = o._saveWidgetLayout;
  o.connectedCallback = function() {
    const h = a?.call(this);
    return _i(this), h;
  }, o._initWidgetGrid = function() {
    const h = vp();
    h && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: _r(h) });
    const x = f?.call(this);
    return h && (this._widgetConfig = _r(h), this._renderWidgetLayout?.()), _i(this), x;
  }, o._load = async function() {
    const h = await u?.call(this), x = vp();
    return x && (this._widgetConfig = _r(x), this._renderWidgetLayout?.(), requestAnimationFrame(() => {
      this._widgetConfig = _r(x), this._renderWidgetLayout?.();
    })), _i(this), h;
  }, o._renderEntries = function() {
    const h = c?.call(this);
    return _i(this), h;
  }, o._toggleWidgetEditing = function() {
    const h = this._widgetEditing, x = h ? br(this) : null, w = y?.call(this);
    return h && x && ki(this, x), _i(this), w;
  }, o._saveWidgetLayout = function() {
    const h = br(this), x = m?.call(this);
    return ki(this, h), x;
  };
}
function oy(r) {
  if (r.shadowRoot?.getElementById("argus-v2043-visual-fix")) return;
  const o = document.createElement("style");
  o.id = "argus-v2043-visual-fix", o.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:#22a447!important;background-image:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important;box-shadow:0 8px 22px rgba(34,197,94,.3)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important}
`, r.shadowRoot.appendChild(o);
}
function sl(r) {
  oy(r), [...r.shadowRoot?.querySelectorAll(".entry") || []].forEach((o, a) => {
    const u = r._dashboard?.entries?.[a], c = u?.attributes || {}, f = c.arming_blocking_sensors || [], y = !!(c.arming_waiting_for_sensors || f.length);
    o.classList.toggle("argus-waiting", y);
    const m = o.querySelector(".liquid-stack");
    if (m) {
      let x = m.querySelector(".argus-disarm-btn");
      x || (x = document.createElement("button"), x.type = "button", x.className = "liquid-btn argus-disarm-btn", x.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", x.onclick = async () => {
        if (u) {
          x.disabled = !0;
          try {
            await r._send("argus/perform_alarm_action", { entry_id: u.entry_id, action: "disarm" }), await r._load?.();
          } finally {
            x.disabled = !1;
          }
        }
      }), x.style.setProperty("grid-column", "1 / -1", "important"), x.style.setProperty("width", "100%", "important"), x.style.setProperty("background", "#22a447", "important"), x.style.setProperty("background-image", "linear-gradient(110deg,#34c759,#16863a)", "important"), x.style.setProperty("color", "#fff", "important");
      const w = [...m.children].find((P) => /SOS|PÁNICO|PANIC/i.test(P.textContent || ""));
      w ? m.insertBefore(x, w) : m.appendChild(x);
    }
    const h = new Set(f.map((x) => String(r._dashboard?.available_entities?.find?.((w) => w.entity_id === x)?.name || x).toLocaleLowerCase()));
    o.querySelectorAll(".console-sensor").forEach((x) => {
      const w = String(x.querySelector(".console-sensor-name")?.textContent || x.textContent || "").toLocaleLowerCase();
      x.classList.toggle("argus-blocking", [...h].some((P) => w.includes(P) || P.includes(w)));
    });
  });
}
function ay(r) {
  if (!r || r.__v2043VisualFix) return;
  r.__v2043VisualFix = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const f = a?.call(this);
    return sl(this), f;
  }, o._load = async function() {
    const f = await u?.call(this);
    return sl(this), f;
  }, o._renderEntries = function() {
    const f = c?.call(this);
    return sl(this), f;
  };
}
function Ho(r) {
  return String(r || "").trim().toLocaleLowerCase();
}
function ll(r) {
  if (!r.shadowRoot) return;
  let o = r.shadowRoot.getElementById("argus-v2045-trigger-sensors");
  o || (o = document.createElement("style"), o.id = "argus-v2045-trigger-sensors", o.textContent = ".entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;color:#fff!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;box-shadow:0 0 18px rgba(249,115,22,.55)!important}@keyframes argusTriggeredSensor{0%,100%{opacity:.62;box-shadow:0 0 8px rgba(249,115,22,.35)}50%{opacity:1;box-shadow:0 0 26px rgba(251,146,60,.9)}}", r.shadowRoot.appendChild(o)), [...r.shadowRoot.querySelectorAll(".entry") || []].forEach((a, u) => {
    const c = r._dashboard?.entries?.[u], f = c?.attributes || {}, y = f.triggered_sensors || [], m = new Set(y.flatMap((h) => {
      const x = r._dashboard?.available_entities?.find?.((w) => w.entity_id === h);
      return [Ho(h), Ho(x?.name), Ho(x?.friendly_name)];
    }).filter(Boolean));
    a.querySelectorAll(".console-sensor").forEach((h) => {
      const x = Ho(h.querySelector(".console-sensor-name")?.textContent || h.textContent);
      h.classList.toggle("argus-triggered-sensor", [...m].some((w) => x.includes(w) || w.includes(x)));
    });
  });
}
function sy(r) {
  if (!r || r.__v2045TriggerSensors) return;
  r.__v2045TriggerSensors = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const f = a?.call(this);
    return ll(this), f;
  }, o._load = async function() {
    const f = await u?.call(this);
    return ll(this), f;
  }, o._renderEntries = function() {
    const f = c?.call(this);
    return ll(this), f;
  };
}
const ly = { armed_home: /EN CASA|HOME/i, armed_away: /AUSENTE|AWAY/i, armed_night: /NOCHE|NIGHT/i, armed_vacation: /VACACIONES|VACATION/i };
function uy(r, o) {
  const a = o?.entity_id || o?.alarm_entity_id;
  return String(o?.state || o?.alarm_state || o?.attributes?.state || r._hass?.states?.[a]?.state || "").toLowerCase();
}
function ul(r, o, a) {
  r.classList.toggle("argus-action-active", a), r.dataset.argusAction = o;
  const u = o === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : o === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  r.style.setProperty("background", a ? u : "rgba(255,255,255,.105)", "important"), r.style.setProperty("background-image", a ? u : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), r.style.setProperty("border", a ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), r.style.setProperty("box-shadow", a ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important"), r.style.setProperty("backdrop-filter", "blur(16px) saturate(1.2)", "important");
}
function cl(r) {
  if (!r.shadowRoot) return;
  let o = r.shadowRoot.getElementById("argus-v2046-active-visuals");
  o || (o = document.createElement("style"), o.id = "argus-v2046-active-visuals", o.textContent = ".entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important;transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease!important}.entry .liquid-stack .liquid-btn:not(.argus-action-active):hover{background:rgba(255,255,255,.16)!important;transform:translateY(-1px)}.entry.argus-arming .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}", r.shadowRoot.appendChild(o)), [...r.shadowRoot.querySelectorAll(".entry") || []].forEach((a, u) => {
    const c = r._dashboard?.entries?.[u] || {}, f = c.attributes || {}, y = uy(r, c), m = y === "arming" || !!f.arming_waiting_for_sensors || !!(f.arming_blocking_sensors || []).length;
    a.classList.toggle("argus-arming", m);
    const h = a.querySelector(".entry-icon");
    let x = a.querySelector(".argus-shield-status");
    m && h ? (x || (x = document.createElement("span"), x.className = "argus-shield-status", h.insertAdjacentElement("afterend", x)), x.textContent = (f.arming_blocking_sensors || []).length ? "ESPERANDO SENSORES" : "ARMANDO…") : x?.remove();
    const w = a.querySelector(".liquid-stack");
    w && [...w.querySelectorAll(".liquid-btn,button")].forEach((P) => {
      const z = String(P.textContent || "");
      if (/SOS|PÁNICO|PANIC/i.test(z)) ul(P, "sos", !!f.argus_panic_active);
      else if (/DESARMAR|DISARM|OFF/i.test(z)) ul(P, "disarm", y === "disarmed");
      else {
        const V = Object.entries(ly).find(([, Y]) => Y.test(z));
        V && ul(P, V[0], y === V[0]);
      }
    });
  });
}
function cy(r) {
  if (!r || r.__v2046ActiveVisuals) return;
  r.__v2046ActiveVisuals = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const f = a?.call(this);
    return cl(this), f;
  }, o._load = async function() {
    const f = await u?.call(this);
    return cl(this), f;
  }, o._renderEntries = function() {
    const f = c?.call(this);
    return cl(this), f;
  };
}
const wp = "argus-v2049-responsive-widgets", dy = '#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"],.users-modal,.access-modal,.argus-users-modal';
function py(r) {
  const o = r.shadowRoot;
  if (!o) return;
  let a = o.getElementById(wp);
  a || (a = document.createElement("style"), a.id = wp, o.appendChild(a)), a.textContent = `
#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}
#w-access>.panel-head,#w-access>.access-summary,#w-access>.tabs{flex:0 0 auto!important}
#w-access :is(.panel-body,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"]){flex:1 1 auto!important;min-width:0!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;scrollbar-gutter:stable!important;box-sizing:border-box!important}
:is(.users-modal,.access-modal,.argus-users-modal,.modal,[role="dialog"]){max-width:min(94vw,760px)!important;max-height:min(88dvh,720px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}
/* Backup: title plus an explicit responsive button grid. */
#w-backup{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-auto-rows:max-content!important;place-content:center!important;align-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:16px!important;gap:12px!important;text-align:center!important}
#w-backup>h2,#w-backup>.panel-head,#w-backup>.panel-title{grid-column:1/-1!important;width:100%!important;margin:0 0 2px!important;text-align:center!important}
#w-backup>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;box-sizing:border-box!important;margin-top:0!important;margin-bottom:0!important}
#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-column:1/-1!important;gap:12px!important;width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}
#w-backup :is(button,a,ha-button,mwc-button){width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;padding-inline:8px!important;white-space:normal!important;overflow-wrap:anywhere!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important;font-size:clamp(11px,1.1vw,14px)!important}
/* Support: compact centered group; no inherited space-between or auto margins. */
#w-github{display:grid!important;grid-template-columns:minmax(0,1fr)!important;grid-auto-rows:max-content!important;place-content:center!important;justify-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:18px!important;row-gap:18px!important;text-align:center!important}
#w-github>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important}
#w-github :is(h2,.panel-head,.panel-title){width:100%!important;margin:0!important;text-align:center!important}
#w-github :is(.panel-body,.actions,.support-actions,.button-row,.controls){display:grid!important;place-items:center!important;width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}
#w-github :is(button,a,ha-button,mwc-button){width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important}
#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay{position:absolute!important;inset:0!important;margin:0!important;max-width:none!important}
@media(max-width:460px){#w-backup{grid-template-columns:1fr!important;overflow-y:auto!important}#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){grid-template-columns:1fr!important}#w-backup :is(button,a,ha-button,mwc-button){font-size:13px!important}#w-github{padding:14px!important;row-gap:12px!important}}
`;
}
function fy(r) {
  const o = r.shadowRoot;
  o && o.querySelectorAll(dy).forEach((a) => {
    a.style.touchAction = "pan-y", a.style.webkitOverflowScrolling = "touch", a.scrollHeight > a.clientHeight && (a.style.overflowY = "auto");
  });
}
function Wo(r) {
  py(r), fy(r);
}
function my(r) {
  if (!r || r.__v2049ResponsiveWidgets) return;
  r.__v2049ResponsiveWidgets = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, f = o._renderEntries;
  o.connectedCallback = function() {
    const y = a?.call(this);
    return Wo(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
      this._v2049Frame || (this._v2049Frame = requestAnimationFrame(() => {
        this._v2049Frame = 0, Wo(this);
      }));
    }), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), y;
  }, o.disconnectedCallback = function() {
    return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, u?.call(this);
  }, o._load = async function(...y) {
    const m = await c?.apply(this, y);
    return Wo(this), m;
  }, o._renderEntries = function(...y) {
    const m = f?.apply(this, y);
    return Wo(this), m;
  };
}
const Cl = "argus-motion-system-v2049", Qo = "__argusMotionV2049", _p = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", dl = `:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
/* Dashboard data is frequently rebuilt. Never animate those rebuilds. */
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
/* Login feedback remains local to the pressed control; no full-screen welcome layer. */
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;
function hy(r) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
  const o = String(r._argusPerfProfile || r.dataset?.argusPerf || "").toLowerCase();
  return o === "essential" || r.classList.contains("argus-perf-essential") ? "essential" : o === "light" ? "light" : "full";
}
function bp(r) {
  if (r[Qo]) return r[Qo];
  const o = { panel: r, active: !1, observer: null, observerFrame: 0, rafs: /* @__PURE__ */ new Set(), timers: /* @__PURE__ */ new Set(), cleanups: /* @__PURE__ */ new Set(), pressed: /* @__PURE__ */ new Set(), profileControl: null, api: null };
  return Object.defineProperty(r, Qo, { value: o, writable: !0, configurable: !0 }), o;
}
function gy(r, o) {
  const a = requestAnimationFrame(() => {
    r.rafs.delete(a), r.active && o();
  });
  return r.rafs.add(a), a;
}
function pl(r, o, a, u, c) {
  o.addEventListener(a, u, c), r.cleanups.add(() => o.removeEventListener(a, u, c));
}
function Nl(r) {
  const o = r.shadowRoot;
  if (!o) return;
  let a = o.getElementById(Cl);
  a ? a.textContent !== dl && (a.textContent = dl) : (a = document.createElement("style"), a.id = Cl, a.textContent = dl, o.appendChild(a));
}
function Ci(r) {
  r.profileControl?.classList.remove("is-entering"), r.profileControl = null, r.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function xp(r, o) {
  Ci(r), r.profileControl = o || null, o?.classList.add("is-entering"), r.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function yy(r) {
  r.observer || !r.panel.shadowRoot || (r.observer = new MutationObserver((o) => {
    o.some((a) => [...a.addedNodes].some((u) => u instanceof Element && u.id !== Cl)) && (r.observerFrame || (r.observerFrame = gy(r, () => {
      r.observerFrame = 0, Nl(r.panel);
    })));
  }), r.observer.observe(r.panel.shadowRoot, { childList: !0, subtree: !0, attributes: !1 }));
}
function vy(r) {
  const o = r.panel.shadowRoot, a = (u) => {
    u && (u.classList.remove("argus-motion-press"), r.pressed.delete(u));
  };
  pl(r, o, "pointerdown", (u) => {
    if (hy(r.panel) === "essential") return;
    const c = u.target?.closest?.(_p);
    !c || c.disabled || (c.classList.add("argus-motion-press"), r.pressed.add(c));
  }, !0), ["pointerup", "pointercancel", "pointerleave"].forEach((u) => pl(r, o, u, (c) => a(c.target?.closest?.(_p)), !0)), pl(r, o, "click", (u) => {
    const c = u.target, f = c?.closest?.(".user-card");
    f && f.dataset.isOwn === "true" && f.dataset.pinRequired !== "true" && xp(r, f), c?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && xp(r, c.closest("button")), c?.closest?.("#btn-cancel-login") && Ci(r);
  }, !0);
}
function fl(r) {
  r.active || !r.panel.shadowRoot || (r.active = !0, Nl(r.panel), vy(r), yy(r), r.api = Object.freeze({ animateView: () => {
  }, stagger: () => {
  }, transitionBackground: () => () => {
  }, animateDashboard: () => {
  } }));
}
function wy(r) {
  r.active = !1, r.observer?.disconnect(), r.observer = null, r.observerFrame && cancelAnimationFrame(r.observerFrame), r.observerFrame = 0, r.rafs.forEach(cancelAnimationFrame), r.rafs.clear(), r.timers.forEach(clearTimeout), r.timers.clear(), r.cleanups.forEach((o) => o()), r.cleanups.clear(), r.pressed.forEach((o) => o.classList.remove("argus-motion-press")), r.pressed.clear(), Ci(r);
}
function _y(r) {
  if (!r || r.__argusMotionSystemV2049) return;
  r.__argusMotionSystemV2049 = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load;
  o.connectedCallback = function() {
    const f = a?.call(this), y = bp(this);
    return this.shadowRoot ? fl(y) : queueMicrotask(() => fl(y)), f;
  }, o.disconnectedCallback = function() {
    const f = this[Qo];
    return f && wy(f), u?.call(this);
  }, o._load = async function(...f) {
    const y = bp(this);
    try {
      const m = await c?.apply(this, f);
      return !y.active && this.isConnected && fl(y), Nl(this), Ci(y), m;
    } catch (m) {
      throw Ci(y), m;
    }
  };
}
const Sp = "__argusStableRenderV2050";
function Yn(r) {
  const o = r.shadowRoot;
  if (!o) return;
  const a = /* @__PURE__ */ new Date(), u = a.toLocaleTimeString(r._getLocale?.() || void 0, { hour: "2-digit", minute: "2-digit" }), c = a.toLocaleDateString(r._getLocale?.() || void 0, { weekday: "short", month: "short", day: "numeric" }), f = o.getElementById("hero-clock-time"), y = o.getElementById("hero-clock-date");
  f && f.textContent !== u && (f.textContent = u), y && y.textContent !== c && (y.textContent = c), o.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((m) => {
    m && m.textContent !== u && (m.textContent = u);
  });
}
function kp(r, o, a, u, c, f, y) {
  return [o?.entity_id || "", o?.entry_id || "", a || "", f ? "1" : "0", y ? "1" : "0", c || "", u?.arming_waiting_for_sensors ? "1" : "0", JSON.stringify(u?.arming_blocking_sensors || []), JSON.stringify(u?.triggered_sensors || []), r._backgroundMode || "", r._panelBgFile || "", r._getWeatherEntity?.()?.state || "", r._hass?.states?.["sun.sun"]?.state || "", r._getDisplayedTemperature?.() || "", r._homeName || "", r._kioskLocked ? "1" : "0"].join("|");
}
function ml(r, o) {
  !o || o._argusDelegated || (o._argusDelegated = !0, o.addEventListener("click", (a) => {
    const u = a.target;
    if (u.closest?.('button[data-action="unlock-kiosk"]')) {
      r._requestKioskUnlock?.();
      return;
    }
    const f = u.closest?.('button[data-action="sos"]');
    if (f) {
      r._sosEntryIdx = Number(f.dataset.idx), r.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
      return;
    }
    const y = u.closest?.('button[data-action="stop-sos"]');
    if (y) {
      r._stopSOS?.(Number(y.dataset.idx));
      return;
    }
    const m = u.closest?.("button[data-fullscreen]");
    if (m) {
      r._toggleFullscreen?.(m.closest(".entry"));
      return;
    }
    if (u.closest?.("button[data-exit-fullscreen]")) {
      r._exitFullscreenView?.();
      return;
    }
    const x = u.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])');
    x?.dataset?.idx != null && x?.dataset?.action && r._handleAction?.(x.dataset.idx, x.dataset.action);
  }));
}
function by(r) {
  if (!r || r[Sp]) return;
  r[Sp] = !0;
  const o = r.prototype, a = o._renderEntries, u = Object.getOwnPropertyDescriptor(o, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o), "hass");
  o._updateLiveClocks = function() {
    Yn(this);
  }, o._startClock = function() {
    this._clockInterval && clearInterval(this._clockInterval), Yn(this), this._clockInterval = setInterval(() => {
      this._dashboard && Yn(this);
    }, 1e3);
  }, o._renderEntries = function(m = !1) {
    const h = this.shadowRoot;
    if (!h) return a?.call(this, m);
    const x = h.getElementById("entries"), w = this._dashboard?.entries || [];
    if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !x || !w.length) {
      const F = a?.call(this, m);
      return ml(this, h.getElementById("entries")), Yn(this), F;
    }
    const P = [...x.querySelectorAll("article.entry")];
    if (!(m || P.length !== w.length || !P.every((F) => F.querySelector(".entry-content")))) {
      let F = !0;
      for (let O = 0; O < w.length; O++) {
        const b = w[O], p = this._hass?.states?.[b.entity_id], v = p?.state || b.state || "unavailable", g = p?.attributes || {}, _ = !!g.argus_panic_active, k = this._fullscreenIdx === O || this._kioskLocked && (this._kioskEntryId === b.entry_id || w.length === 1), M = String(v).replace("armed_", "");
        let q = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[M] || this._ui?.modes?.[M] || {}, W = q.sensors || [];
        if (v === "disarmed" || !W.length) {
          const pe = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, X = /* @__PURE__ */ new Set();
          ["away", "home", "night", "vacation"].forEach((ee) => {
            (pe[ee]?.sensors || []).forEach((re) => X.add(re));
          }), W = [...X];
        }
        const J = q.bypassed_sensors || [], se = W.filter((pe) => !J.includes(pe)).map((pe) => {
          const X = this._hass?.states?.[pe], ee = X?.attributes?.battery_level ?? X?.attributes?.battery_percentage ?? "";
          return `${pe}:${X?.state || ""}:${ee}`;
        }).join(","), oe = kp(this, b, v, g, se, _, k);
        if (this._instanceSignatures.get(O) !== oe) {
          F = !1;
          break;
        }
      }
      if (F) {
        const b = w.map((g) => this._hass?.states?.[g.entity_id]?.state || "unavailable").some((g) => String(g).startsWith("armed") || g === "triggered" || g === "pending"), p = h.getElementById("global-status");
        if (p) {
          const g = (k) => this._t?.(k) || k, _ = `<span class="badge ${b ? "armed_away" : "disarmed"}">${g(b ? "system_armed" : "system_disarmed")}</span>`;
          p.innerHTML !== _ && (p.innerHTML = _);
        }
        const v = h.getElementById("hero-security-pill");
        if (v) {
          const g = (M) => this._t?.(M) || M, _ = g(b ? "system_armed" : "system_disarmed"), k = `<i class="hero-live" style="background:${b ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${b ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(_) || _}`;
          v.innerHTML !== k && (v.innerHTML = k);
        }
        Yn(this), ml(this, x);
        return;
      }
    }
    const V = a?.call(this, m === !0 ? !0 : void 0);
    return [...x.querySelectorAll("article.entry")].forEach((F, O) => {
      const b = w[O];
      if (!b) return;
      const p = this._hass?.states?.[b.entity_id], v = p?.state || b.state || "unavailable", g = p?.attributes || {}, _ = !!g.argus_panic_active, k = this._fullscreenIdx === O || this._kioskLocked && (this._kioskEntryId === b.entry_id || w.length === 1), M = String(v).replace("armed_", "");
      let q = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[M] || this._ui?.modes?.[M] || {}, W = q.sensors || [];
      if (v === "disarmed" || !W.length) {
        const oe = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, pe = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((X) => {
          (oe[X]?.sensors || []).forEach((ee) => pe.add(ee));
        }), W = [...pe];
      }
      const J = q.bypassed_sensors || [], se = W.filter((oe) => !J.includes(oe)).map((oe) => {
        const pe = this._hass?.states?.[oe], X = pe?.attributes?.battery_level ?? pe?.attributes?.battery_percentage ?? "";
        return `${oe}:${pe?.state || ""}:${X}`;
      }).join(",");
      this._instanceSignatures.set(O, kp(this, b, v, g, se, _, k)), F.dataset.renderSig = this._instanceSignatures.get(O);
    }), ml(this, x), Yn(this), V;
  };
  const c = u?.get, f = u?.set;
  f && Object.defineProperty(o, "hass", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return c ? c.call(this) : this._hass;
    },
    set: function(m) {
      const h = this._hass;
      if (h && this._dashboard?.entries?.length) {
        const x = /* @__PURE__ */ new Set(), w = (v) => {
          !v || typeof v != "object" || (Array.isArray(v.sensors) && v.sensors.forEach((g) => x.add(g)), Object.values(v).forEach((g) => {
            g && typeof g == "object" && w(g);
          }));
        };
        w(this._ui?.modes);
        const P = h.language !== m.language;
        P && !this._manualLang && this._refreshLocalizedUi?.();
        const z = this._dashboard.entries.some((v) => v.entity_id && h.states[v.entity_id]?.state !== m.states[v.entity_id]?.state), V = [...x].some((v) => h.states[v]?.state !== m.states[v]?.state || h.states[v]?.attributes?.battery_level !== m.states[v]?.attributes?.battery_level || h.states[v]?.attributes?.battery_percentage !== m.states[v]?.attributes?.battery_percentage), Y = this._temperatureSource === "auto" ? null : this._temperatureSource, F = Y && h.states[Y]?.state !== m.states[Y]?.state, O = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(m.states).find((v) => v.entity_id?.startsWith("weather."))?.entity_id, b = O && (h.states[O]?.state !== m.states[O]?.state || h.states[O]?.attributes?.temperature !== m.states[O]?.attributes?.temperature), p = z || V || F || b || P;
        this._hass = m, this._updateTheme?.(), p ? (this._renderEntries?.(P), this._renderActivityLog?.()) : Yn(this);
        return;
      }
      return f.call(this, m);
    }
  });
  const y = o.connectedCallback;
  o.connectedCallback = function() {
    const m = y?.call(this);
    return this._startClock?.(), m;
  };
}
const Ep = "argus-v2050-alarm-visuals", xy = { armed_home: /EN CASA|HOME/i, armed_away: /AUSENTE|AWAY/i, armed_night: /NOCHE|NIGHT/i, armed_vacation: /VACACIONES|VACATION/i };
function Sy(r, o) {
  const a = o?.entity_id || o?.alarm_entity_id;
  return String(o?.state || o?.alarm_state || o?.attributes?.state || r._hass?.states?.[a]?.state || "").toLowerCase();
}
function hl(r, o, a) {
  r.classList.toggle("argus-action-active", a), r.dataset.argusAction = o;
  const u = o === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : o === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  r.style.setProperty("background", a ? u : "rgba(255,255,255,.105)", "important"), r.style.setProperty("background-image", a ? u : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), r.style.setProperty("border", a ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), r.style.setProperty("box-shadow", a ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important");
}
function ky(r) {
  const o = r.shadowRoot;
  if (!o) return;
  let a = o.getElementById(Ep);
  a || (a = document.createElement("style"), a.id = Ep, o.appendChild(a)), a.textContent = `
.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important}
.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}
.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}
.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important}
@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}
@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}
@keyframes argusTriggeredSensor{0%,100%{opacity:.62}50%{opacity:1}}
`;
}
function gl(r) {
  r.shadowRoot && (ky(r), [...r.shadowRoot.querySelectorAll(".entry") || []].forEach((o, a) => {
    const u = r._dashboard?.entries?.[a] || {}, c = u.attributes || r._hass?.states?.[u.entity_id]?.attributes || {}, f = Sy(r, u), y = c.arming_blocking_sensors || [], m = f === "arming" || !!c.arming_waiting_for_sensors || !!y.length;
    o.classList.toggle("argus-arming", m), o.classList.toggle("argus-waiting", m);
    const h = o.querySelector(".entry-icon");
    let x = o.querySelector(".argus-shield-status");
    m && h ? (x || (x = document.createElement("span"), x.className = "argus-shield-status", h.insertAdjacentElement("afterend", x)), x.textContent = y.length ? `ESPERANDO ${y.length} SENSOR(ES)` : f === "arming" ? "ARMANDO…" : "ESPERANDO SENSORES") : x?.remove();
    const w = o.querySelector(".liquid-stack");
    if (w) {
      let V = w.querySelector(".argus-disarm-btn");
      if (!V) {
        V = document.createElement("button"), V.type = "button", V.className = "liquid-btn argus-disarm-btn", V.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", V.onclick = async () => {
          if (u) {
            V.disabled = !0;
            try {
              await r._send("argus/perform_alarm_action", { entry_id: u.entry_id, action: "disarm" }), await r._load?.();
            } finally {
              V.disabled = !1;
            }
          }
        };
        const Y = [...w.children].find((F) => /SOS|PÁNICO|PANIC/i.test(F.textContent || ""));
        Y ? w.insertBefore(V, Y) : w.appendChild(V);
      }
      [...w.querySelectorAll(".liquid-btn,button")].forEach((Y) => {
        const F = String(Y.textContent || "");
        if (/SOS|PÁNICO|PANIC/i.test(F)) hl(Y, "sos", !!c.argus_panic_active);
        else if (/DESARMAR|DISARM|OFF/i.test(F)) hl(Y, "disarm", f === "disarmed");
        else {
          const O = Object.entries(xy).find(([, b]) => b.test(F));
          O && hl(Y, O[0], f === O[0]);
        }
      });
    }
    const P = new Set((c.triggered_sensors || []).map(String)), z = new Set(y.map((V) => String(r._dashboard?.available_entities?.find?.((Y) => Y.entity_id === V)?.name || V).toLocaleLowerCase()));
    o.querySelectorAll(".console-sensor").forEach((V) => {
      const Y = String(V.querySelector(".console-sensor-name")?.textContent || V.textContent || "").toLocaleLowerCase(), F = [...z].some((b) => Y.includes(b) || b.includes(Y)), O = [...P].some((b) => Y.includes(String(b).toLocaleLowerCase()));
      V.classList.toggle("argus-blocking", F), V.classList.toggle("argus-triggered-sensor", O);
    });
  }));
}
function Ey(r) {
  if (!r || r.__v2050AlarmVisuals) return;
  r.__v2050AlarmVisuals = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const f = a?.call(this);
    return gl(this), f;
  }, o._load = async function(...f) {
    const y = await u?.apply(this, f);
    return gl(this), y;
  }, o._renderEntries = function(...f) {
    const y = c?.apply(this, f);
    return gl(this), y;
  };
}
const Cp = "argus-v2050-widget-layouts";
function Cy(r) {
  const o = r.shadowRoot;
  if (!o) return;
  let a = o.getElementById(Cp);
  a || (a = document.createElement("style"), a.id = Cp, o.appendChild(a)), a.textContent = `
#w-access{display:flex!important;flex-direction:column!important;min-width:0!important;min-height:0!important;height:100%!important;overflow:hidden!important}
#w-access .panel-body,#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;overscroll-behavior:contain!important}
#w-backup{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:14px!important;padding:16px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}
#w-backup h2,#w-backup .panel-head,#w-backup .panel-title{margin:0!important;width:100%!important;text-align:center!important;flex:0 0 auto!important}
#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}
#w-backup button,#w-backup a,#w-backup ha-button,#w-backup mwc-button{width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important;justify-content:center!important;text-align:center!important;font-size:clamp(11px,1.1vw,14px)!important;box-sizing:border-box!important}
#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:16px!important;padding:18px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}
#w-github h2,#w-github .panel-head,#w-github .panel-title{margin:0!important;width:100%!important;text-align:center!important}
#w-github .panel-body,#w-github .actions,#w-github .support-actions{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:12px!important;width:auto!important;max-width:100%!important;margin:0!important;padding:0!important}
#w-github button,#w-github a,#w-github ha-button,#w-github mwc-button{width:auto!important;max-width:100%!important;margin:0!important;justify-content:center!important}
#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay,#w-access .panel-edit-overlay{position:absolute!important;inset:0!important}
@media(max-width:520px){#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{grid-template-columns:1fr!important}#w-backup{overflow-y:auto!important}}
`;
}
function Ry(r) {
  const o = r.shadowRoot;
  o && o.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((a) => {
    a.style.touchAction = "pan-y", a.style.webkitOverflowScrolling = "touch", a.scrollHeight > a.clientHeight && (a.style.overflowY = "auto");
  });
}
function $o(r) {
  Cy(r), Ry(r);
}
function zy(r) {
  if (!r || r.__v2050WidgetLayouts) return;
  r.__v2050WidgetLayouts = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, f = o._renderEntries;
  o.connectedCallback = function() {
    const y = a?.call(this);
    return $o(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
      this._v2050LayoutFrame || (this._v2050LayoutFrame = requestAnimationFrame(() => {
        this._v2050LayoutFrame = 0, $o(this);
      }));
    }), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, { childList: !0, subtree: !0 }), y;
  }, o.disconnectedCallback = function() {
    return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, u?.call(this);
  }, o._load = async function(...y) {
    const m = await c?.apply(this, y);
    return $o(this), m;
  }, o._renderEntries = function(...y) {
    const m = f?.apply(this, y);
    return $o(this), m;
  };
}
function Oy(r) {
  Zh(r);
}
function Py(r) {
  tg(r), ng(r), sg(r), mg(r), Eg(r), Rg(r), zg(r), Ag(r), Fg(r), Wg(r), Ug(r), Kg(r), Zg(r), Jg(r), ny(r), iy(r), ay(r), sy(r), cy(r), my(r), _y(r), by(r), Ey(r), zy(r);
}
function Ny(r) {
  const o = r;
  !o || o.__argusTypedFrontend || (o.__argusTypedFrontend = !0, Oy(o), Xh(o), Yh(o), Py(o), Gh(o));
}
export {
  Ny as applyArgusFrontend
};
