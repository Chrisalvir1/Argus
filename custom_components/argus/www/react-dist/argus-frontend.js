function $h(r) {
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
var Ws = { exports: {} }, ui = {}, $s = { exports: {} }, De = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd;
function Uh() {
  if (pd) return De;
  pd = 1;
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.iterator;
  function O(L) {
    return L === null || typeof L != "object" ? null : (L = P && L[P] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var X = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, V = Object.assign, F = {};
  function z(L, H, _e) {
    this.props = L, this.context = H, this.refs = F, this.updater = _e || X;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(L, H) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, H, "setState");
  }, z.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function b() {
  }
  b.prototype = z.prototype;
  function d(L, H, _e) {
    this.props = L, this.context = H, this.refs = F, this.updater = _e || X;
  }
  var v = d.prototype = new b();
  v.constructor = d, V(v, z.prototype), v.isPureReactComponent = !0;
  var g = Array.isArray, _ = Object.prototype.hasOwnProperty, E = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(L, H, _e) {
    var Se, Re = {}, Pe = null, Ie = null;
    if (H != null) for (Se in H.ref !== void 0 && (Ie = H.ref), H.key !== void 0 && (Pe = "" + H.key), H) _.call(H, Se) && !M.hasOwnProperty(Se) && (Re[Se] = H[Se]);
    var ee = arguments.length - 2;
    if (ee === 1) Re.children = _e;
    else if (1 < ee) {
      for (var pe = Array(ee), ke = 0; ke < ee; ke++) pe[ke] = arguments[ke + 2];
      Re.children = pe;
    }
    if (L && L.defaultProps) for (Se in ee = L.defaultProps, ee) Re[Se] === void 0 && (Re[Se] = ee[Se]);
    return { $$typeof: r, type: L, key: Pe, ref: Ie, props: Re, _owner: E.current };
  }
  function W(L, H) {
    return { $$typeof: r, type: L.type, key: H, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function te(L) {
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
  function fe(L, H, _e, Se, Re) {
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
    if (Ie) return Ie = L, Re = Re(Ie), L = Se === "" ? "." + oe(Ie, 0) : Se, g(Re) ? (_e = "", L != null && (_e = L.replace(se, "$&/") + "/"), fe(Re, H, _e, "", function(ke) {
      return ke;
    })) : Re != null && (te(Re) && (Re = W(Re, _e + (!Re.key || Ie && Ie.key === Re.key ? "" : ("" + Re.key).replace(se, "$&/") + "/") + L)), H.push(Re)), 1;
    if (Ie = 0, Se = Se === "" ? "." : Se + ":", g(L)) for (var ee = 0; ee < L.length; ee++) {
      Pe = L[ee];
      var pe = Se + oe(Pe, ee);
      Ie += fe(Pe, H, _e, pe, Re);
    }
    else if (pe = O(L), typeof pe == "function") for (L = pe.call(L), ee = 0; !(Pe = L.next()).done; ) Pe = Pe.value, pe = Se + oe(Pe, ee++), Ie += fe(Pe, H, _e, pe, Re);
    else if (Pe === "object") throw H = String(L), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function Y(L, H, _e) {
    if (L == null) return L;
    var Se = [], Re = 0;
    return fe(L, Se, "", "", function(Pe) {
      return H.call(_e, Pe, Re++);
    }), Se;
  }
  function Z(L) {
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
  var J = { current: null }, U = { transition: null }, le = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: U, ReactCurrentOwner: E };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return De.Children = { map: Y, forEach: function(L, H, _e) {
    Y(L, function() {
      H.apply(this, arguments);
    }, _e);
  }, count: function(L) {
    var H = 0;
    return Y(L, function() {
      H++;
    }), H;
  }, toArray: function(L) {
    return Y(L, function(H) {
      return H;
    }) || [];
  }, only: function(L) {
    if (!te(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, De.Component = z, De.Fragment = a, De.Profiler = c, De.PureComponent = d, De.StrictMode = u, De.Suspense = m, De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, De.act = ne, De.cloneElement = function(L, H, _e) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var Se = V({}, L.props), Re = L.key, Pe = L.ref, Ie = L._owner;
    if (H != null) {
      if (H.ref !== void 0 && (Pe = H.ref, Ie = E.current), H.key !== void 0 && (Re = "" + H.key), L.type && L.type.defaultProps) var ee = L.type.defaultProps;
      for (pe in H) _.call(H, pe) && !M.hasOwnProperty(pe) && (Se[pe] = H[pe] === void 0 && ee !== void 0 ? ee[pe] : H[pe]);
    }
    var pe = arguments.length - 2;
    if (pe === 1) Se.children = _e;
    else if (1 < pe) {
      ee = Array(pe);
      for (var ke = 0; ke < pe; ke++) ee[ke] = arguments[ke + 2];
      Se.children = ee;
    }
    return { $$typeof: r, type: L.type, key: Re, ref: Pe, props: Se, _owner: Ie };
  }, De.createContext = function(L) {
    return L = { $$typeof: y, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: p, _context: L }, L.Consumer = L;
  }, De.createElement = q, De.createFactory = function(L) {
    var H = q.bind(null, L);
    return H.type = L, H;
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(L) {
    return { $$typeof: h, render: L };
  }, De.isValidElement = te, De.lazy = function(L) {
    return { $$typeof: w, _payload: { _status: -1, _result: L }, _init: Z };
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
  }, De.unstable_act = ne, De.useCallback = function(L, H) {
    return J.current.useCallback(L, H);
  }, De.useContext = function(L) {
    return J.current.useContext(L);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(L) {
    return J.current.useDeferredValue(L);
  }, De.useEffect = function(L, H) {
    return J.current.useEffect(L, H);
  }, De.useId = function() {
    return J.current.useId();
  }, De.useImperativeHandle = function(L, H, _e) {
    return J.current.useImperativeHandle(L, H, _e);
  }, De.useInsertionEffect = function(L, H) {
    return J.current.useInsertionEffect(L, H);
  }, De.useLayoutEffect = function(L, H) {
    return J.current.useLayoutEffect(L, H);
  }, De.useMemo = function(L, H) {
    return J.current.useMemo(L, H);
  }, De.useReducer = function(L, H, _e) {
    return J.current.useReducer(L, H, _e);
  }, De.useRef = function(L) {
    return J.current.useRef(L);
  }, De.useState = function(L) {
    return J.current.useState(L);
  }, De.useSyncExternalStore = function(L, H, _e) {
    return J.current.useSyncExternalStore(L, H, _e);
  }, De.useTransition = function() {
    return J.current.useTransition();
  }, De.version = "18.3.1", De;
}
var hd;
function Rt() {
  return hd || (hd = 1, $s.exports = Uh()), $s.exports;
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
var md;
function Vh() {
  if (md) return ui;
  md = 1;
  var r = Rt(), o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(h, m, x) {
    var w, P = {}, O = null, X = null;
    x !== void 0 && (O = "" + x), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (X = m.ref);
    for (w in m) u.call(m, w) && !p.hasOwnProperty(w) && (P[w] = m[w]);
    if (h && h.defaultProps) for (w in m = h.defaultProps, m) P[w] === void 0 && (P[w] = m[w]);
    return { $$typeof: o, type: h, key: O, ref: X, props: P, _owner: c.current };
  }
  return ui.Fragment = a, ui.jsx = y, ui.jsxs = y, ui;
}
var gd;
function Gh() {
  return gd || (gd = 1, Ws.exports = Vh()), Ws.exports;
}
var $e = Gh(), Ao = {}, Us = { exports: {} }, Ct = {}, Vs = { exports: {} }, Gs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function Yh() {
  return yd || (yd = 1, function(r) {
    function o(U, le) {
      var ne = U.length;
      U.push(le);
      e: for (; 0 < ne; ) {
        var L = ne - 1 >>> 1, H = U[L];
        if (0 < c(H, le)) U[L] = le, U[ne] = H, ne = L;
        else break e;
      }
    }
    function a(U) {
      return U.length === 0 ? null : U[0];
    }
    function u(U) {
      if (U.length === 0) return null;
      var le = U[0], ne = U.pop();
      if (ne !== le) {
        U[0] = ne;
        e: for (var L = 0, H = U.length, _e = H >>> 1; L < _e; ) {
          var Se = 2 * (L + 1) - 1, Re = U[Se], Pe = Se + 1, Ie = U[Pe];
          if (0 > c(Re, ne)) Pe < H && 0 > c(Ie, Re) ? (U[L] = Ie, U[Pe] = ne, L = Pe) : (U[L] = Re, U[Se] = ne, L = Se);
          else if (Pe < H && 0 > c(Ie, ne)) U[L] = Ie, U[Pe] = ne, L = Pe;
          else break e;
        }
      }
      return le;
    }
    function c(U, le) {
      var ne = U.sortIndex - le.sortIndex;
      return ne !== 0 ? ne : U.id - le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var y = Date, h = y.now();
      r.unstable_now = function() {
        return y.now() - h;
      };
    }
    var m = [], x = [], w = 1, P = null, O = 3, X = !1, V = !1, F = !1, z = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(U) {
      for (var le = a(x); le !== null; ) {
        if (le.callback === null) u(x);
        else if (le.startTime <= U) u(x), le.sortIndex = le.expirationTime, o(m, le);
        else break;
        le = a(x);
      }
    }
    function g(U) {
      if (F = !1, v(U), !V) if (a(m) !== null) V = !0, Z(_);
      else {
        var le = a(x);
        le !== null && J(g, le.startTime - U);
      }
    }
    function _(U, le) {
      V = !1, F && (F = !1, b(q), q = -1), X = !0;
      var ne = O;
      try {
        for (v(le), P = a(m); P !== null && (!(P.expirationTime > le) || U && !ce()); ) {
          var L = P.callback;
          if (typeof L == "function") {
            P.callback = null, O = P.priorityLevel;
            var H = L(P.expirationTime <= le);
            le = r.unstable_now(), typeof H == "function" ? P.callback = H : P === a(m) && u(m), v(le);
          } else u(m);
          P = a(m);
        }
        if (P !== null) var _e = !0;
        else {
          var Se = a(x);
          Se !== null && J(g, Se.startTime - le), _e = !1;
        }
        return _e;
      } finally {
        P = null, O = ne, X = !1;
      }
    }
    var E = !1, M = null, q = -1, W = 5, te = -1;
    function ce() {
      return !(r.unstable_now() - te < W);
    }
    function se() {
      if (M !== null) {
        var U = r.unstable_now();
        te = U;
        var le = !0;
        try {
          le = M(!0, U);
        } finally {
          le ? oe() : (E = !1, M = null);
        }
      } else E = !1;
    }
    var oe;
    if (typeof d == "function") oe = function() {
      d(se);
    };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), Y = fe.port2;
      fe.port1.onmessage = se, oe = function() {
        Y.postMessage(null);
      };
    } else oe = function() {
      z(se, 0);
    };
    function Z(U) {
      M = U, E || (E = !0, oe());
    }
    function J(U, le) {
      q = z(function() {
        U(r.unstable_now());
      }, le);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_continueExecution = function() {
      V || X || (V = !0, Z(_));
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, r.unstable_getFirstCallbackNode = function() {
      return a(m);
    }, r.unstable_next = function(U) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var le = 3;
          break;
        default:
          le = O;
      }
      var ne = O;
      O = le;
      try {
        return U();
      } finally {
        O = ne;
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
      var ne = O;
      O = U;
      try {
        return le();
      } finally {
        O = ne;
      }
    }, r.unstable_scheduleCallback = function(U, le, ne) {
      var L = r.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? L + ne : L) : ne = L, U) {
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
      return H = ne + H, U = { id: w++, callback: le, priorityLevel: U, startTime: ne, expirationTime: H, sortIndex: -1 }, ne > L ? (U.sortIndex = ne, o(x, U), a(m) === null && U === a(x) && (F ? (b(q), q = -1) : F = !0, J(g, ne - L))) : (U.sortIndex = H, o(m, U), V || X || (V = !0, Z(_))), U;
    }, r.unstable_shouldYield = ce, r.unstable_wrapCallback = function(U) {
      var le = O;
      return function() {
        var ne = O;
        O = le;
        try {
          return U.apply(this, arguments);
        } finally {
          O = ne;
        }
      };
    };
  }(Gs)), Gs;
}
var vd;
function Xh() {
  return vd || (vd = 1, Vs.exports = Yh()), Vs.exports;
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
var wd;
function Qh() {
  if (wd) return Ct;
  wd = 1;
  var r = Rt(), o = Xh();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), c = {};
  function p(e, t) {
    y(e, t), y(e + "Capture", t);
  }
  function y(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = {}, P = {};
  function O(e) {
    return m.call(P, e) ? !0 : m.call(w, e) ? !1 : x.test(e) ? P[e] = !0 : (w[e] = !0, !1);
  }
  function X(e, t, n, i) {
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
  function V(e, t, n, i) {
    if (t === null || typeof t > "u" || X(e, t, n, i)) return !0;
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
  function F(e, t, n, i, s, l, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = f;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    z[e] = new F(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    z[t] = new F(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    z[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    z[e] = new F(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    z[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    z[e] = new F(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    z[e] = new F(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    z[e] = new F(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    z[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function d(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      b,
      d
    );
    z[t] = new F(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(b, d);
    z[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(b, d);
    z[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    z[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    z[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function v(e, t, n, i) {
    var s = z.hasOwnProperty(t) ? z[t] : null;
    (s !== null ? s.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (V(t, n, s, i) && (n = null), i || s === null ? O(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, i = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = Symbol.for("react.element"), E = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ce = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = Object.assign, L;
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
        } catch (j) {
          var i = j;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (j) {
          i = j;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (j) {
          i = j;
        }
        e();
      }
    } catch (j) {
      if (j && i && typeof j.stack == "string") {
        for (var s = j.stack.split(`
`), l = i.stack.split(`
`), f = s.length - 1, S = l.length - 1; 1 <= f && 0 <= S && s[f] !== l[S]; ) S--;
        for (; 1 <= f && 0 <= S; f--, S--) if (s[f] !== l[S]) {
          if (f !== 1 || S !== 1)
            do
              if (f--, S--, 0 > S || s[f] !== l[S]) {
                var C = `
` + s[f].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= f && 0 <= S);
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
      case E:
        return "Portal";
      case W:
        return "Profiler";
      case q:
        return "StrictMode";
      case oe:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return (e.displayName || "Context") + ".Consumer";
      case te:
        return (e._context.displayName || "Context") + ".Provider";
      case se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Y:
        return t = e.displayName || null, t !== null ? t : Pe(e.type) || "Memo";
      case Z:
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
  function ee(e) {
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
  function pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ke(e) {
    var t = pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(f) {
        i = "" + f, l.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return i;
      }, setValue: function(f) {
        i = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Oe(e) {
    e._valueTracker || (e._valueTracker = ke(e));
  }
  function Me(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = pe(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
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
    return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function tt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function R(e, t) {
    t = t.checked, t != null && v(e, "checked", t, !1);
  }
  function T(e, t) {
    R(e, t);
    var n = ee(t.value), i = t.type;
    if (n != null) i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? G(e, t.type, n) : t.hasOwnProperty("defaultValue") && G(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
      for (n = "" + ee(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, i && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ee(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
    e._wrapperState = { initialValue: ee(n) };
  }
  function Le(e, t) {
    var n = ee(t.value), i = ee(t.defaultValue);
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
  var k, I = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, i, s);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (k = k || document.createElement("div"), k.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = k.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  var Qe = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  function jt(e, t) {
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
  function kr(e) {
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
      if (Jt = Mn = null, kr(e), t) for (e = 0; e < t.length; e++) kr(t[e]);
    }
  }
  function Ri(e, t) {
    return e(t);
  }
  function Tl() {
  }
  var aa = !1;
  function Nl(e, t, n) {
    if (aa) return e(t, n);
    aa = !0;
    try {
      return Ri(e, t, n);
    } finally {
      aa = !1, (Mn !== null || Jt !== null) && (Tl(), Qn());
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
  var sa = !1;
  if (h) try {
    var zr = {};
    Object.defineProperty(zr, "passive", { get: function() {
      sa = !0;
    } }), window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr);
  } catch {
    sa = !1;
  }
  function Qf(e, t, n, i, s, l, f, S, C) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (K) {
      this.onError(K);
    }
  }
  var Or = !1, zi = null, Oi = !1, la = null, Kf = { onError: function(e) {
    Or = !0, zi = e;
  } };
  function Zf(e, t, n, i, s, l, f, S, C) {
    Or = !1, zi = null, Qf.apply(Kf, arguments);
  }
  function Jf(e, t, n, i, s, l, f, S, C) {
    if (Zf.apply(this, arguments), Or) {
      if (Or) {
        var j = zi;
        Or = !1, zi = null;
      } else throw Error(a(198));
      Oi || (Oi = !0, la = j);
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
  function Al(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Il(e) {
    if (Tn(e) !== e) throw Error(a(188));
  }
  function ep(e) {
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
          if (l === n) return Il(s), e;
          if (l === i) return Il(s), t;
          l = l.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== i.return) n = s, i = l;
      else {
        for (var f = !1, S = s.child; S; ) {
          if (S === n) {
            f = !0, n = s, i = l;
            break;
          }
          if (S === i) {
            f = !0, i = s, n = l;
            break;
          }
          S = S.sibling;
        }
        if (!f) {
          for (S = l.child; S; ) {
            if (S === n) {
              f = !0, n = l, i = s;
              break;
            }
            if (S === i) {
              f = !0, i = l, n = s;
              break;
            }
            S = S.sibling;
          }
          if (!f) throw Error(a(189));
        }
      }
      if (n.alternate !== i) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Bl(e) {
    return e = ep(e), e !== null ? jl(e) : null;
  }
  function jl(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = jl(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Fl = o.unstable_scheduleCallback, ql = o.unstable_cancelCallback, tp = o.unstable_shouldYield, np = o.unstable_requestPaint, nt = o.unstable_now, rp = o.unstable_getCurrentPriorityLevel, ua = o.unstable_ImmediatePriority, Hl = o.unstable_UserBlockingPriority, Pi = o.unstable_NormalPriority, ip = o.unstable_LowPriority, Wl = o.unstable_IdlePriority, Li = null, Yt = null;
  function op(e) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function") try {
      Yt.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : lp, ap = Math.log, sp = Math.LN2;
  function lp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ap(e) / sp | 0) | 0;
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
    var i = 0, s = e.suspendedLanes, l = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var S = f & ~s;
      S !== 0 ? i = Pr(S) : (l &= f, l !== 0 && (i = Pr(l)));
    } else f = n & ~s, f !== 0 ? i = Pr(f) : l !== 0 && (i = Pr(l));
    if (i === 0) return 0;
    if (t !== 0 && t !== i && !(t & s) && (s = i & -i, l = t & -t, s >= l || s === 16 && (l & 4194240) !== 0)) return t;
    if (i & 4 && (i |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= i; 0 < t; ) n = 31 - Ft(t), s = 1 << n, i |= e[n], t &= ~s;
    return i;
  }
  function up(e, t) {
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
  function cp(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, s = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var f = 31 - Ft(l), S = 1 << f, C = s[f];
      C === -1 ? (!(S & n) || S & i) && (s[f] = up(S, t)) : C <= t && (e.expiredLanes |= S), l &= ~S;
    }
  }
  function ca(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function $l() {
    var e = Di;
    return Di <<= 1, !(Di & 4194240) && (Di = 64), e;
  }
  function da(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Lr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ft(t), e[t] = n;
  }
  function dp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - Ft(n), l = 1 << s;
      t[s] = 0, i[s] = -1, e[s] = -1, n &= ~l;
    }
  }
  function fa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Ft(n), s = 1 << i;
      s & t | e[i] & t && (e[i] |= t), n &= ~s;
    }
  }
  var He = 0;
  function Ul(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Vl, pa, Gl, Yl, Xl, ha = !1, Ni = [], fn = null, pn = null, hn = null, Dr = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), mn = [], fp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ql(e, t) {
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
        Dr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mr.delete(t.pointerId);
    }
  }
  function Tr(e, t, n, i, s, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: l, targetContainers: [s] }, t !== null && (t = Yr(t), t !== null && pa(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function pp(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return fn = Tr(fn, e, t, n, i, s), !0;
      case "dragenter":
        return pn = Tr(pn, e, t, n, i, s), !0;
      case "mouseover":
        return hn = Tr(hn, e, t, n, i, s), !0;
      case "pointerover":
        var l = s.pointerId;
        return Dr.set(l, Tr(Dr.get(l) || null, e, t, n, i, s)), !0;
      case "gotpointercapture":
        return l = s.pointerId, Mr.set(l, Tr(Mr.get(l) || null, e, t, n, i, s)), !0;
    }
    return !1;
  }
  function Kl(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Al(n), t !== null) {
            e.blockedOn = t, Xl(e.priority, function() {
              Gl(n);
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
      var n = ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        Gt = i, n.target.dispatchEvent(i), Gt = null;
      } else return t = Yr(n), t !== null && pa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Zl(e, t, n) {
    Ai(e) && n.delete(t);
  }
  function hp() {
    ha = !1, fn !== null && Ai(fn) && (fn = null), pn !== null && Ai(pn) && (pn = null), hn !== null && Ai(hn) && (hn = null), Dr.forEach(Zl), Mr.forEach(Zl);
  }
  function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ha || (ha = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, hp)));
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
    for (fn !== null && Nr(fn, e), pn !== null && Nr(pn, e), hn !== null && Nr(hn, e), Dr.forEach(t), Mr.forEach(t), n = 0; n < mn.length; n++) i = mn[n], i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < mn.length && (n = mn[0], n.blockedOn === null); ) Kl(n), n.blockedOn === null && mn.shift();
  }
  var Kn = g.ReactCurrentBatchConfig, Ii = !0;
  function mp(e, t, n, i) {
    var s = He, l = Kn.transition;
    Kn.transition = null;
    try {
      He = 1, ma(e, t, n, i);
    } finally {
      He = s, Kn.transition = l;
    }
  }
  function gp(e, t, n, i) {
    var s = He, l = Kn.transition;
    Kn.transition = null;
    try {
      He = 4, ma(e, t, n, i);
    } finally {
      He = s, Kn.transition = l;
    }
  }
  function ma(e, t, n, i) {
    if (Ii) {
      var s = ga(e, t, n, i);
      if (s === null) Ma(e, t, i, Bi, n), Ql(e, i);
      else if (pp(s, e, t, n, i)) i.stopPropagation();
      else if (Ql(e, i), t & 4 && -1 < fp.indexOf(e)) {
        for (; s !== null; ) {
          var l = Yr(s);
          if (l !== null && Vl(l), l = ga(e, t, n, i), l === null && Ma(e, t, i, Bi, n), l === s) break;
          s = l;
        }
        s !== null && i.stopPropagation();
      } else Ma(e, t, i, null, n);
    }
  }
  var Bi = null;
  function ga(e, t, n, i) {
    if (Bi = null, e = Dn(i), e = Nn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Al(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Bi = e, null;
  }
  function Jl(e) {
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
        switch (rp()) {
          case ua:
            return 1;
          case Hl:
            return 4;
          case Pi:
          case ip:
            return 16;
          case Wl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, ya = null, ji = null;
  function eu() {
    if (ji) return ji;
    var e, t = ya, n = t.length, i, s = "value" in gn ? gn.value : gn.textContent, l = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var f = n - e;
    for (i = 1; i <= f && t[n - i] === s[l - i]; i++) ;
    return ji = s.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Fi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qi() {
    return !0;
  }
  function tu() {
    return !1;
  }
  function zt(e) {
    function t(n, i, s, l, f) {
      this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = l, this.target = f, this.currentTarget = null;
      for (var S in e) e.hasOwnProperty(S) && (n = e[S], this[S] = n ? n(l) : l[S]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? qi : tu, this.isPropagationStopped = tu, this;
    }
    return ne(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, va = zt(Zn), Ir = ne({}, Zn, { view: 0, detail: 0 }), yp = zt(Ir), wa, _a, Br, Hi = ne({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Br && (Br && e.type === "mousemove" ? (wa = e.screenX - Br.screenX, _a = e.screenY - Br.screenY) : _a = wa = 0, Br = e), wa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : _a;
  } }), nu = zt(Hi), vp = ne({}, Hi, { dataTransfer: 0 }), wp = zt(vp), _p = ne({}, Ir, { relatedTarget: 0 }), ba = zt(_p), bp = ne({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xp = zt(bp), Sp = ne({}, Zn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ep = zt(Sp), kp = ne({}, Zn, { data: 0 }), ru = zt(kp), Cp = {
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
  }, Rp = {
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
  }, zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Op(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zp[e]) ? !!t[e] : !1;
  }
  function xa() {
    return Op;
  }
  var Pp = ne({}, Ir, { key: function(e) {
    if (e.key) {
      var t = Cp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xa, charCode: function(e) {
    return e.type === "keypress" ? Fi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Lp = zt(Pp), Dp = ne({}, Hi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iu = zt(Dp), Mp = ne({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xa }), Tp = zt(Mp), Np = ne({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ap = zt(Np), Ip = ne({}, Hi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bp = zt(Ip), jp = [9, 13, 27, 32], Sa = h && "CompositionEvent" in window, jr = null;
  h && "documentMode" in document && (jr = document.documentMode);
  var Fp = h && "TextEvent" in window && !jr, ou = h && (!Sa || jr && 8 < jr && 11 >= jr), au = " ", su = !1;
  function lu(e, t) {
    switch (e) {
      case "keyup":
        return jp.indexOf(t.keyCode) !== -1;
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
  function uu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Jn = !1;
  function qp(e, t) {
    switch (e) {
      case "compositionend":
        return uu(t);
      case "keypress":
        return t.which !== 32 ? null : (su = !0, au);
      case "textInput":
        return e = t.data, e === au && su ? null : e;
      default:
        return null;
    }
  }
  function Hp(e, t) {
    if (Jn) return e === "compositionend" || !Sa && lu(e, t) ? (e = eu(), ji = ya = gn = null, Jn = !1, e) : null;
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
        return ou && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wp[e.type] : t === "textarea";
  }
  function du(e, t, n, i) {
    Cr(i), t = Gi(t, "onChange"), 0 < t.length && (n = new va("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
  }
  var Fr = null, qr = null;
  function $p(e) {
    Ou(e, 0);
  }
  function Wi(e) {
    var t = ir(e);
    if (Me(t)) return e;
  }
  function Up(e, t) {
    if (e === "change") return t;
  }
  var fu = !1;
  if (h) {
    var Ea;
    if (h) {
      var ka = "oninput" in document;
      if (!ka) {
        var pu = document.createElement("div");
        pu.setAttribute("oninput", "return;"), ka = typeof pu.oninput == "function";
      }
      Ea = ka;
    } else Ea = !1;
    fu = Ea && (!document.documentMode || 9 < document.documentMode);
  }
  function hu() {
    Fr && (Fr.detachEvent("onpropertychange", mu), qr = Fr = null);
  }
  function mu(e) {
    if (e.propertyName === "value" && Wi(qr)) {
      var t = [];
      du(t, qr, e, Dn(e)), Nl($p, t);
    }
  }
  function Vp(e, t, n) {
    e === "focusin" ? (hu(), Fr = t, qr = n, Fr.attachEvent("onpropertychange", mu)) : e === "focusout" && hu();
  }
  function Gp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wi(qr);
  }
  function Yp(e, t) {
    if (e === "click") return Wi(t);
  }
  function Xp(e, t) {
    if (e === "input" || e === "change") return Wi(t);
  }
  function Qp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var qt = typeof Object.is == "function" ? Object.is : Qp;
  function Hr(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!m.call(t, s) || !qt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function gu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yu(e, t) {
    var n = gu(e);
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
      n = gu(n);
    }
  }
  function vu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function wu() {
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
  function Ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Kp(e) {
    var t = wu(), n = e.focusedElem, i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && vu(n.ownerDocument.documentElement, n)) {
      if (i !== null && Ca(n)) {
        if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, l = Math.min(i.start, s);
          i = i.end === void 0 ? l : Math.min(i.end, s), !e.extend && l > i && (s = i, i = l, l = s), s = yu(n, l);
          var f = yu(
            n,
            i
          );
          s && f && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), l > i ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Zp = h && "documentMode" in document && 11 >= document.documentMode, er = null, Ra = null, Wr = null, za = !1;
  function _u(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    za || er == null || er !== Fe(i) || (i = er, "selectionStart" in i && Ca(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Wr && Hr(Wr, i) || (Wr = i, i = Gi(Ra, "onSelect"), 0 < i.length && (t = new va("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = er)));
  }
  function $i(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var tr = { animationend: $i("Animation", "AnimationEnd"), animationiteration: $i("Animation", "AnimationIteration"), animationstart: $i("Animation", "AnimationStart"), transitionend: $i("Transition", "TransitionEnd") }, Oa = {}, bu = {};
  h && (bu = document.createElement("div").style, "AnimationEvent" in window || (delete tr.animationend.animation, delete tr.animationiteration.animation, delete tr.animationstart.animation), "TransitionEvent" in window || delete tr.transitionend.transition);
  function Ui(e) {
    if (Oa[e]) return Oa[e];
    if (!tr[e]) return e;
    var t = tr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in bu) return Oa[e] = t[n];
    return e;
  }
  var xu = Ui("animationend"), Su = Ui("animationiteration"), Eu = Ui("animationstart"), ku = Ui("transitionend"), Cu = /* @__PURE__ */ new Map(), Ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yn(e, t) {
    Cu.set(e, t), p(t, [e]);
  }
  for (var Pa = 0; Pa < Ru.length; Pa++) {
    var La = Ru[Pa], Jp = La.toLowerCase(), eh = La[0].toUpperCase() + La.slice(1);
    yn(Jp, "on" + eh);
  }
  yn(xu, "onAnimationEnd"), yn(Su, "onAnimationIteration"), yn(Eu, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(ku, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), p("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), p("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), p("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), th = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
  function zu(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n, Jf(i, t, void 0, e), e.currentTarget = null;
  }
  function Ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], s = i.event;
      i = i.listeners;
      e: {
        var l = void 0;
        if (t) for (var f = i.length - 1; 0 <= f; f--) {
          var S = i[f], C = S.instance, j = S.currentTarget;
          if (S = S.listener, C !== l && s.isPropagationStopped()) break e;
          zu(s, S, j), l = C;
        }
        else for (f = 0; f < i.length; f++) {
          if (S = i[f], C = S.instance, j = S.currentTarget, S = S.listener, C !== l && s.isPropagationStopped()) break e;
          zu(s, S, j), l = C;
        }
      }
    }
    if (Oi) throw e = la, Oi = !1, la = null, e;
  }
  function Ge(e, t) {
    var n = t[ja];
    n === void 0 && (n = t[ja] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Pu(t, e, 2, !1), n.add(i));
  }
  function Da(e, t, n) {
    var i = 0;
    t && (i |= 4), Pu(n, e, i, t);
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Vi]) {
      e[Vi] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (th.has(n) || Da(n, !1, e), Da(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vi] || (t[Vi] = !0, Da("selectionchange", !1, t));
    }
  }
  function Pu(e, t, n, i) {
    switch (Jl(t)) {
      case 1:
        var s = mp;
        break;
      case 4:
        s = gp;
        break;
      default:
        s = ma;
    }
    n = s.bind(null, t, n, e), s = void 0, !sa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), i ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function Ma(e, t, n, i, s) {
    var l = i;
    if (!(t & 1) && !(t & 2) && i !== null) e: for (; ; ) {
      if (i === null) return;
      var f = i.tag;
      if (f === 3 || f === 4) {
        var S = i.stateNode.containerInfo;
        if (S === s || S.nodeType === 8 && S.parentNode === s) break;
        if (f === 4) for (f = i.return; f !== null; ) {
          var C = f.tag;
          if ((C === 3 || C === 4) && (C = f.stateNode.containerInfo, C === s || C.nodeType === 8 && C.parentNode === s)) return;
          f = f.return;
        }
        for (; S !== null; ) {
          if (f = Nn(S), f === null) return;
          if (C = f.tag, C === 5 || C === 6) {
            i = l = f;
            continue e;
          }
          S = S.parentNode;
        }
      }
      i = i.return;
    }
    Nl(function() {
      var j = l, K = Dn(n), re = [];
      e: {
        var Q = Cu.get(e);
        if (Q !== void 0) {
          var he = va, ge = e;
          switch (e) {
            case "keypress":
              if (Fi(n) === 0) break e;
            case "keydown":
            case "keyup":
              he = Lp;
              break;
            case "focusin":
              ge = "focus", he = ba;
              break;
            case "focusout":
              ge = "blur", he = ba;
              break;
            case "beforeblur":
            case "afterblur":
              he = ba;
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
              he = nu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = Tp;
              break;
            case xu:
            case Su:
            case Eu:
              he = xp;
              break;
            case ku:
              he = Ap;
              break;
            case "scroll":
              he = yp;
              break;
            case "wheel":
              he = Bp;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Ep;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = iu;
          }
          var ye = (t & 4) !== 0, rt = !ye && e === "scroll", A = ye ? Q !== null ? Q + "Capture" : null : Q;
          ye = [];
          for (var D = j, B; D !== null; ) {
            B = D;
            var ae = B.stateNode;
            if (B.tag === 5 && ae !== null && (B = ae, A !== null && (ae = Rr(D, A), ae != null && ye.push(Vr(D, ae, B)))), rt) break;
            D = D.return;
          }
          0 < ye.length && (Q = new he(Q, ge, null, n, K), re.push({ event: Q, listeners: ye }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", he = e === "mouseout" || e === "pointerout", Q && n !== Gt && (ge = n.relatedTarget || n.fromElement) && (Nn(ge) || ge[en])) break e;
          if ((he || Q) && (Q = K.window === K ? K : (Q = K.ownerDocument) ? Q.defaultView || Q.parentWindow : window, he ? (ge = n.relatedTarget || n.toElement, he = j, ge = ge ? Nn(ge) : null, ge !== null && (rt = Tn(ge), ge !== rt || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (he = null, ge = j), he !== ge)) {
            if (ye = nu, ae = "onMouseLeave", A = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (ye = iu, ae = "onPointerLeave", A = "onPointerEnter", D = "pointer"), rt = he == null ? Q : ir(he), B = ge == null ? Q : ir(ge), Q = new ye(ae, D + "leave", he, n, K), Q.target = rt, Q.relatedTarget = B, ae = null, Nn(K) === j && (ye = new ye(A, D + "enter", ge, n, K), ye.target = B, ye.relatedTarget = rt, ae = ye), rt = ae, he && ge) t: {
              for (ye = he, A = ge, D = 0, B = ye; B; B = nr(B)) D++;
              for (B = 0, ae = A; ae; ae = nr(ae)) B++;
              for (; 0 < D - B; ) ye = nr(ye), D--;
              for (; 0 < B - D; ) A = nr(A), B--;
              for (; D--; ) {
                if (ye === A || A !== null && ye === A.alternate) break t;
                ye = nr(ye), A = nr(A);
              }
              ye = null;
            }
            else ye = null;
            he !== null && Lu(re, Q, he, ye, !1), ge !== null && rt !== null && Lu(re, rt, ge, ye, !0);
          }
        }
        e: {
          if (Q = j ? ir(j) : window, he = Q.nodeName && Q.nodeName.toLowerCase(), he === "select" || he === "input" && Q.type === "file") var we = Up;
          else if (cu(Q)) if (fu) we = Xp;
          else {
            we = Gp;
            var be = Vp;
          }
          else (he = Q.nodeName) && he.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (we = Yp);
          if (we && (we = we(e, j))) {
            du(re, we, n, K);
            break e;
          }
          be && be(e, Q, j), e === "focusout" && (be = Q._wrapperState) && be.controlled && Q.type === "number" && G(Q, "number", Q.value);
        }
        switch (be = j ? ir(j) : window, e) {
          case "focusin":
            (cu(be) || be.contentEditable === "true") && (er = be, Ra = j, Wr = null);
            break;
          case "focusout":
            Wr = Ra = er = null;
            break;
          case "mousedown":
            za = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            za = !1, _u(re, n, K);
            break;
          case "selectionchange":
            if (Zp) break;
          case "keydown":
          case "keyup":
            _u(re, n, K);
        }
        var xe;
        if (Sa) e: {
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
        else Jn ? lu(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (ou && n.locale !== "ko" && (Jn || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Jn && (xe = eu()) : (gn = K, ya = "value" in gn ? gn.value : gn.textContent, Jn = !0)), be = Gi(j, Ce), 0 < be.length && (Ce = new ru(Ce, e, null, n, K), re.push({ event: Ce, listeners: be }), xe ? Ce.data = xe : (xe = uu(n), xe !== null && (Ce.data = xe)))), (xe = Fp ? qp(e, n) : Hp(e, n)) && (j = Gi(j, "onBeforeInput"), 0 < j.length && (K = new ru("onBeforeInput", "beforeinput", null, n, K), re.push({ event: K, listeners: j }), K.data = xe));
      }
      Ou(re, t);
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
  function Lu(e, t, n, i, s) {
    for (var l = t._reactName, f = []; n !== null && n !== i; ) {
      var S = n, C = S.alternate, j = S.stateNode;
      if (C !== null && C === i) break;
      S.tag === 5 && j !== null && (S = j, s ? (C = Rr(n, l), C != null && f.unshift(Vr(n, C, S))) : s || (C = Rr(n, l), C != null && f.push(Vr(n, C, S)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var nh = /\r\n?/g, rh = /\u0000|\uFFFD/g;
  function Du(e) {
    return (typeof e == "string" ? e : "" + e).replace(nh, `
`).replace(rh, "");
  }
  function Yi(e, t, n) {
    if (t = Du(t), Du(e) !== t && n) throw Error(a(425));
  }
  function Xi() {
  }
  var Ta = null, Na = null;
  function Aa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ia = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, Mu = typeof Promise == "function" ? Promise : void 0, oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mu < "u" ? function(e) {
    return Mu.resolve(null).then(e).catch(ah);
  } : Ia;
  function ah(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ba(e, t) {
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
  function Tu(e) {
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
  var rr = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + rr, Gr = "__reactProps$" + rr, en = "__reactContainer$" + rr, ja = "__reactEvents$" + rr, sh = "__reactListeners$" + rr, lh = "__reactHandles$" + rr;
  function Nn(e) {
    var t = e[Xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[en] || n[Xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Tu(e); e !== null; ) {
          if (n = e[Xt]) return n;
          e = Tu(e);
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
  var Fa = [], or = -1;
  function wn(e) {
    return { current: e };
  }
  function Ye(e) {
    0 > or || (e.current = Fa[or], Fa[or] = null, or--);
  }
  function Ve(e, t) {
    or++, Fa[or] = e.current, e.current = t;
  }
  var _n = {}, mt = wn(_n), bt = wn(!1), An = _n;
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
    Ye(bt), Ye(mt);
  }
  function Nu(e, t, n) {
    if (mt.current !== _n) throw Error(a(168));
    Ve(mt, t), Ve(bt, n);
  }
  function Au(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var s in i) if (!(s in t)) throw Error(a(108, Ie(e) || "Unknown", s));
    return ne({}, n, i);
  }
  function Zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, An = mt.current, Ve(mt, e), Ve(bt, bt.current), !0;
  }
  function Iu(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(a(169));
    n ? (e = Au(e, t, An), i.__reactInternalMemoizedMergedChildContext = e, Ye(bt), Ye(mt), Ve(mt, e)) : Ye(bt), Ve(bt, n);
  }
  var tn = null, Ji = !1, qa = !1;
  function Bu(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function uh(e) {
    Ji = !0, Bu(e);
  }
  function bn() {
    if (!qa && tn !== null) {
      qa = !0;
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
        throw tn !== null && (tn = tn.slice(e + 1)), Fl(ua, bn), s;
      } finally {
        He = t, qa = !1;
      }
    }
    return null;
  }
  var sr = [], lr = 0, eo = null, to = 0, Dt = [], Mt = 0, In = null, nn = 1, rn = "";
  function Bn(e, t) {
    sr[lr++] = to, sr[lr++] = eo, eo = e, to = t;
  }
  function ju(e, t, n) {
    Dt[Mt++] = nn, Dt[Mt++] = rn, Dt[Mt++] = In, In = e;
    var i = nn;
    e = rn;
    var s = 32 - Ft(i) - 1;
    i &= ~(1 << s), n += 1;
    var l = 32 - Ft(t) + s;
    if (30 < l) {
      var f = s - s % 5;
      l = (i & (1 << f) - 1).toString(32), i >>= f, s -= f, nn = 1 << 32 - Ft(t) + s | n << s | i, rn = l + e;
    } else nn = 1 << l | n << s | i, rn = e;
  }
  function Ha(e) {
    e.return !== null && (Bn(e, 1), ju(e, 1, 0));
  }
  function Wa(e) {
    for (; e === eo; ) eo = sr[--lr], sr[lr] = null, to = sr[--lr], sr[lr] = null;
    for (; e === In; ) In = Dt[--Mt], Dt[Mt] = null, rn = Dt[--Mt], Dt[Mt] = null, nn = Dt[--Mt], Dt[Mt] = null;
  }
  var Ot = null, Pt = null, Ke = !1, Ht = null;
  function Fu(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function qu(e, t) {
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
  function $a(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ua(e) {
    if (Ke) {
      var t = Pt;
      if (t) {
        var n = t;
        if (!qu(e, t)) {
          if ($a(e)) throw Error(a(418));
          t = vn(n.nextSibling);
          var i = Ot;
          t && qu(e, t) ? Fu(i, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, Ot = e);
        }
      } else {
        if ($a(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, Ke = !1, Ot = e;
      }
    }
  }
  function Hu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ot = e;
  }
  function no(e) {
    if (e !== Ot) return !1;
    if (!Ke) return Hu(e), Ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Aa(e.type, e.memoizedProps)), t && (t = Pt)) {
      if ($a(e)) throw Wu(), Error(a(418));
      for (; t; ) Fu(e, t), t = vn(t.nextSibling);
    }
    if (Hu(e), e.tag === 13) {
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
  function Wu() {
    for (var e = Pt; e; ) e = vn(e.nextSibling);
  }
  function ur() {
    Pt = Ot = null, Ke = !1;
  }
  function Va(e) {
    Ht === null ? Ht = [e] : Ht.push(e);
  }
  var ch = g.ReactCurrentBatchConfig;
  function Xr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(a(147, e));
        var s = i, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(f) {
          var S = s.refs;
          f === null ? delete S[l] : S[l] = f;
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
  function $u(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uu(e) {
    function t(A, D) {
      if (e) {
        var B = A.deletions;
        B === null ? (A.deletions = [D], A.flags |= 16) : B.push(D);
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
    function l(A, D, B) {
      return A.index = B, e ? (B = A.alternate, B !== null ? (B = B.index, B < D ? (A.flags |= 2, D) : B) : (A.flags |= 2, D)) : (A.flags |= 1048576, D);
    }
    function f(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function S(A, D, B, ae) {
      return D === null || D.tag !== 6 ? (D = Is(B, A.mode, ae), D.return = A, D) : (D = s(D, B), D.return = A, D);
    }
    function C(A, D, B, ae) {
      var we = B.type;
      return we === M ? K(A, D, B.props.children, ae, B.key) : D !== null && (D.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Z && $u(we) === D.type) ? (ae = s(D, B.props), ae.ref = Xr(A, D, B), ae.return = A, ae) : (ae = zo(B.type, B.key, B.props, null, A.mode, ae), ae.ref = Xr(A, D, B), ae.return = A, ae);
    }
    function j(A, D, B, ae) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== B.containerInfo || D.stateNode.implementation !== B.implementation ? (D = Bs(B, A.mode, ae), D.return = A, D) : (D = s(D, B.children || []), D.return = A, D);
    }
    function K(A, D, B, ae, we) {
      return D === null || D.tag !== 7 ? (D = Vn(B, A.mode, ae, we), D.return = A, D) : (D = s(D, B), D.return = A, D);
    }
    function re(A, D, B) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Is("" + D, A.mode, B), D.return = A, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case _:
            return B = zo(D.type, D.key, D.props, null, A.mode, B), B.ref = Xr(A, null, D), B.return = A, B;
          case E:
            return D = Bs(D, A.mode, B), D.return = A, D;
          case Z:
            var ae = D._init;
            return re(A, ae(D._payload), B);
        }
        if (ue(D) || le(D)) return D = Vn(D, A.mode, B, null), D.return = A, D;
        ro(A, D);
      }
      return null;
    }
    function Q(A, D, B, ae) {
      var we = D !== null ? D.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number") return we !== null ? null : S(A, D, "" + B, ae);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _:
            return B.key === we ? C(A, D, B, ae) : null;
          case E:
            return B.key === we ? j(A, D, B, ae) : null;
          case Z:
            return we = B._init, Q(
              A,
              D,
              we(B._payload),
              ae
            );
        }
        if (ue(B) || le(B)) return we !== null ? null : K(A, D, B, ae, null);
        ro(A, B);
      }
      return null;
    }
    function he(A, D, B, ae, we) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return A = A.get(B) || null, S(D, A, "" + ae, we);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case _:
            return A = A.get(ae.key === null ? B : ae.key) || null, C(D, A, ae, we);
          case E:
            return A = A.get(ae.key === null ? B : ae.key) || null, j(D, A, ae, we);
          case Z:
            var be = ae._init;
            return he(A, D, B, be(ae._payload), we);
        }
        if (ue(ae) || le(ae)) return A = A.get(B) || null, K(D, A, ae, we, null);
        ro(D, ae);
      }
      return null;
    }
    function ge(A, D, B, ae) {
      for (var we = null, be = null, xe = D, Ce = D = 0, ct = null; xe !== null && Ce < B.length; Ce++) {
        xe.index > Ce ? (ct = xe, xe = null) : ct = xe.sibling;
        var je = Q(A, xe, B[Ce], ae);
        if (je === null) {
          xe === null && (xe = ct);
          break;
        }
        e && xe && je.alternate === null && t(A, xe), D = l(je, D, Ce), be === null ? we = je : be.sibling = je, be = je, xe = ct;
      }
      if (Ce === B.length) return n(A, xe), Ke && Bn(A, Ce), we;
      if (xe === null) {
        for (; Ce < B.length; Ce++) xe = re(A, B[Ce], ae), xe !== null && (D = l(xe, D, Ce), be === null ? we = xe : be.sibling = xe, be = xe);
        return Ke && Bn(A, Ce), we;
      }
      for (xe = i(A, xe); Ce < B.length; Ce++) ct = he(xe, A, Ce, B[Ce], ae), ct !== null && (e && ct.alternate !== null && xe.delete(ct.key === null ? Ce : ct.key), D = l(ct, D, Ce), be === null ? we = ct : be.sibling = ct, be = ct);
      return e && xe.forEach(function(Pn) {
        return t(A, Pn);
      }), Ke && Bn(A, Ce), we;
    }
    function ye(A, D, B, ae) {
      var we = le(B);
      if (typeof we != "function") throw Error(a(150));
      if (B = we.call(B), B == null) throw Error(a(151));
      for (var be = we = null, xe = D, Ce = D = 0, ct = null, je = B.next(); xe !== null && !je.done; Ce++, je = B.next()) {
        xe.index > Ce ? (ct = xe, xe = null) : ct = xe.sibling;
        var Pn = Q(A, xe, je.value, ae);
        if (Pn === null) {
          xe === null && (xe = ct);
          break;
        }
        e && xe && Pn.alternate === null && t(A, xe), D = l(Pn, D, Ce), be === null ? we = Pn : be.sibling = Pn, be = Pn, xe = ct;
      }
      if (je.done) return n(
        A,
        xe
      ), Ke && Bn(A, Ce), we;
      if (xe === null) {
        for (; !je.done; Ce++, je = B.next()) je = re(A, je.value, ae), je !== null && (D = l(je, D, Ce), be === null ? we = je : be.sibling = je, be = je);
        return Ke && Bn(A, Ce), we;
      }
      for (xe = i(A, xe); !je.done; Ce++, je = B.next()) je = he(xe, A, Ce, je.value, ae), je !== null && (e && je.alternate !== null && xe.delete(je.key === null ? Ce : je.key), D = l(je, D, Ce), be === null ? we = je : be.sibling = je, be = je);
      return e && xe.forEach(function(Wh) {
        return t(A, Wh);
      }), Ke && Bn(A, Ce), we;
    }
    function rt(A, D, B, ae) {
      if (typeof B == "object" && B !== null && B.type === M && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _:
            e: {
              for (var we = B.key, be = D; be !== null; ) {
                if (be.key === we) {
                  if (we = B.type, we === M) {
                    if (be.tag === 7) {
                      n(A, be.sibling), D = s(be, B.props.children), D.return = A, A = D;
                      break e;
                    }
                  } else if (be.elementType === we || typeof we == "object" && we !== null && we.$$typeof === Z && $u(we) === be.type) {
                    n(A, be.sibling), D = s(be, B.props), D.ref = Xr(A, be, B), D.return = A, A = D;
                    break e;
                  }
                  n(A, be);
                  break;
                } else t(A, be);
                be = be.sibling;
              }
              B.type === M ? (D = Vn(B.props.children, A.mode, ae, B.key), D.return = A, A = D) : (ae = zo(B.type, B.key, B.props, null, A.mode, ae), ae.ref = Xr(A, D, B), ae.return = A, A = ae);
            }
            return f(A);
          case E:
            e: {
              for (be = B.key; D !== null; ) {
                if (D.key === be) if (D.tag === 4 && D.stateNode.containerInfo === B.containerInfo && D.stateNode.implementation === B.implementation) {
                  n(A, D.sibling), D = s(D, B.children || []), D.return = A, A = D;
                  break e;
                } else {
                  n(A, D);
                  break;
                }
                else t(A, D);
                D = D.sibling;
              }
              D = Bs(B, A.mode, ae), D.return = A, A = D;
            }
            return f(A);
          case Z:
            return be = B._init, rt(A, D, be(B._payload), ae);
        }
        if (ue(B)) return ge(A, D, B, ae);
        if (le(B)) return ye(A, D, B, ae);
        ro(A, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, D !== null && D.tag === 6 ? (n(A, D.sibling), D = s(D, B), D.return = A, A = D) : (n(A, D), D = Is(B, A.mode, ae), D.return = A, A = D), f(A)) : n(A, D);
    }
    return rt;
  }
  var cr = Uu(!0), Vu = Uu(!1), io = wn(null), oo = null, dr = null, Ga = null;
  function Ya() {
    Ga = dr = oo = null;
  }
  function Xa(e) {
    var t = io.current;
    Ye(io), e._currentValue = t;
  }
  function Qa(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function fr(e, t) {
    oo = e, Ga = dr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (St = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (Ga !== e) if (e = { context: e, memoizedValue: t, next: null }, dr === null) {
      if (oo === null) throw Error(a(308));
      dr = e, oo.dependencies = { lanes: 0, firstContext: e };
    } else dr = dr.next = e;
    return t;
  }
  var jn = null;
  function Ka(e) {
    jn === null ? jn = [e] : jn.push(e);
  }
  function Gu(e, t, n, i) {
    var s = t.interleaved;
    return s === null ? (n.next = n, Ka(t)) : (n.next = s.next, s.next = n), t.interleaved = n, on(e, i);
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var xn = !1;
  function Za(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Yu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function an(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, Be & 2) {
      var s = i.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), i.pending = t, on(e, n);
    }
    return s = i.interleaved, s === null ? (t.next = t, Ka(i)) : (t.next = s.next, s.next = t), i.interleaved = t, on(e, n);
  }
  function ao(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, fa(e, n);
    }
  }
  function Xu(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var s = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? s = l = f : l = l.next = f, n = n.next;
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
    var l = s.firstBaseUpdate, f = s.lastBaseUpdate, S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var C = S, j = C.next;
      C.next = null, f === null ? l = j : f.next = j, f = C;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, S = K.lastBaseUpdate, S !== f && (S === null ? K.firstBaseUpdate = j : S.next = j, K.lastBaseUpdate = C));
    }
    if (l !== null) {
      var re = s.baseState;
      f = 0, K = j = C = null, S = l;
      do {
        var Q = S.lane, he = S.eventTime;
        if ((i & Q) === Q) {
          K !== null && (K = K.next = {
            eventTime: he,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var ge = e, ye = S;
            switch (Q = t, he = n, ye.tag) {
              case 1:
                if (ge = ye.payload, typeof ge == "function") {
                  re = ge.call(he, re, Q);
                  break e;
                }
                re = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = ye.payload, Q = typeof ge == "function" ? ge.call(he, re, Q) : ge, Q == null) break e;
                re = ne({}, re, Q);
                break e;
              case 2:
                xn = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (e.flags |= 64, Q = s.effects, Q === null ? s.effects = [S] : Q.push(S));
        } else he = { eventTime: he, lane: Q, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, K === null ? (j = K = he, C = re) : K = K.next = he, f |= Q;
        if (S = S.next, S === null) {
          if (S = s.shared.pending, S === null) break;
          Q = S, S = Q.next, Q.next = null, s.lastBaseUpdate = Q, s.shared.pending = null;
        }
      } while (!0);
      if (K === null && (C = re), s.baseState = C, s.firstBaseUpdate = j, s.lastBaseUpdate = K, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          f |= s.lane, s = s.next;
        while (s !== t);
      } else l === null && (s.shared.lanes = 0);
      Hn |= f, e.lanes = f, e.memoizedState = re;
    }
  }
  function Qu(e, t, n) {
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
  function Ja(e, t) {
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
  function pr() {
    Ye(Qt), Ye(Kr), Ye(Zr);
  }
  function Ku(e) {
    Fn(Zr.current);
    var t = Fn(Qt.current), n = st(t, e.type);
    t !== n && (Ve(Kr, e), Ve(Qt, n));
  }
  function es(e) {
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
  var ts = [];
  function ns() {
    for (var e = 0; e < ts.length; e++) ts[e]._workInProgressVersionPrimary = null;
    ts.length = 0;
  }
  var uo = g.ReactCurrentDispatcher, rs = g.ReactCurrentBatchConfig, qn = 0, Je = null, ot = null, lt = null, co = !1, Jr = !1, ei = 0, dh = 0;
  function gt() {
    throw Error(a(321));
  }
  function is(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!qt(e[n], t[n])) return !1;
    return !0;
  }
  function os(e, t, n, i, s, l) {
    if (qn = l, Je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, uo.current = e === null || e.memoizedState === null ? mh : gh, e = n(i, s), Jr) {
      l = 0;
      do {
        if (Jr = !1, ei = 0, 25 <= l) throw Error(a(301));
        l += 1, lt = ot = null, t.updateQueue = null, uo.current = yh, e = n(i, s);
      } while (Jr);
    }
    if (uo.current = ho, t = ot !== null && ot.next !== null, qn = 0, lt = ot = Je = null, co = !1, t) throw Error(a(300));
    return e;
  }
  function as() {
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
  function ss(e) {
    var t = Nt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = ot, s = i.baseQueue, l = n.pending;
    if (l !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = l.next, l.next = f;
      }
      i.baseQueue = s = l, n.pending = null;
    }
    if (s !== null) {
      l = s.next, i = i.baseState;
      var S = f = null, C = null, j = l;
      do {
        var K = j.lane;
        if ((qn & K) === K) C !== null && (C = C.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), i = j.hasEagerState ? j.eagerState : e(i, j.action);
        else {
          var re = {
            lane: K,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          C === null ? (S = C = re, f = i) : C = C.next = re, Je.lanes |= K, Hn |= K;
        }
        j = j.next;
      } while (j !== null && j !== l);
      C === null ? f = i : C.next = S, qt(i, t.memoizedState) || (St = !0), t.memoizedState = i, t.baseState = f, t.baseQueue = C, n.lastRenderedState = i;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        l = s.lane, Je.lanes |= l, Hn |= l, s = s.next;
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ls(e) {
    var t = Nt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, s = n.pending, l = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        l = e(l, f.action), f = f.next;
      while (f !== s);
      qt(l, t.memoizedState) || (St = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, i];
  }
  function Zu() {
  }
  function Ju(e, t) {
    var n = Je, i = Nt(), s = t(), l = !qt(i.memoizedState, s);
    if (l && (i.memoizedState = s, St = !0), i = i.queue, us(nc.bind(null, n, i, e), [e]), i.getSnapshot !== t || l || lt !== null && lt.memoizedState.tag & 1) {
      if (n.flags |= 2048, ni(9, tc.bind(null, n, i, s, t), void 0, null), ut === null) throw Error(a(349));
      qn & 30 || ec(n, t, s);
    }
    return s;
  }
  function ec(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function tc(e, t, n, i) {
    t.value = n, t.getSnapshot = i, rc(t) && ic(e);
  }
  function nc(e, t, n) {
    return n(function() {
      rc(t) && ic(e);
    });
  }
  function rc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !qt(e, n);
    } catch {
      return !0;
    }
  }
  function ic(e) {
    var t = on(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function oc(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ti, lastRenderedState: e }, t.queue = e, e = e.dispatch = hh.bind(null, Je, e), [t.memoizedState, e];
  }
  function ni(e, t, n, i) {
    return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
  }
  function ac() {
    return Nt().memoizedState;
  }
  function fo(e, t, n, i) {
    var s = Kt();
    Je.flags |= e, s.memoizedState = ni(1 | t, n, void 0, i === void 0 ? null : i);
  }
  function po(e, t, n, i) {
    var s = Nt();
    i = i === void 0 ? null : i;
    var l = void 0;
    if (ot !== null) {
      var f = ot.memoizedState;
      if (l = f.destroy, i !== null && is(i, f.deps)) {
        s.memoizedState = ni(t, n, l, i);
        return;
      }
    }
    Je.flags |= e, s.memoizedState = ni(1 | t, n, l, i);
  }
  function sc(e, t) {
    return fo(8390656, 8, e, t);
  }
  function us(e, t) {
    return po(2048, 8, e, t);
  }
  function lc(e, t) {
    return po(4, 2, e, t);
  }
  function uc(e, t) {
    return po(4, 4, e, t);
  }
  function cc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function dc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, po(4, 4, cc.bind(null, t, e), n);
  }
  function cs() {
  }
  function fc(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && is(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function pc(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && is(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function hc(e, t, n) {
    return qn & 21 ? (qt(n, t) || (n = $l(), Je.lanes |= n, Hn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = n);
  }
  function fh(e, t) {
    var n = He;
    He = n !== 0 && 4 > n ? n : 4, e(!0);
    var i = rs.transition;
    rs.transition = {};
    try {
      e(!1), t();
    } finally {
      He = n, rs.transition = i;
    }
  }
  function mc() {
    return Nt().memoizedState;
  }
  function ph(e, t, n) {
    var i = Rn(e);
    if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, gc(e)) yc(t, n);
    else if (n = Gu(e, t, n, i), n !== null) {
      var s = _t();
      Vt(n, e, i, s), vc(n, t, i);
    }
  }
  function hh(e, t, n) {
    var i = Rn(e), s = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (gc(e)) yc(t, s);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var f = t.lastRenderedState, S = l(f, n);
        if (s.hasEagerState = !0, s.eagerState = S, qt(S, f)) {
          var C = t.interleaved;
          C === null ? (s.next = s, Ka(t)) : (s.next = C.next, C.next = s), t.interleaved = s;
          return;
        }
      } catch {
      } finally {
      }
      n = Gu(e, t, s, i), n !== null && (s = _t(), Vt(n, e, i, s), vc(n, t, i));
    }
  }
  function gc(e) {
    var t = e.alternate;
    return e === Je || t !== null && t === Je;
  }
  function yc(e, t) {
    Jr = co = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vc(e, t, n) {
    if (n & 4194240) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, fa(e, n);
    }
  }
  var ho = { readContext: Tt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, mh = { readContext: Tt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: sc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, fo(
      4194308,
      4,
      cc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return fo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return fo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Kt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var i = Kt();
    return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = ph.bind(null, Je, e), [i.memoizedState, e];
  }, useRef: function(e) {
    var t = Kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: oc, useDebugValue: cs, useDeferredValue: function(e) {
    return Kt().memoizedState = e;
  }, useTransition: function() {
    var e = oc(!1), t = e[0];
    return e = fh.bind(null, e[1]), Kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var i = Je, s = Kt();
    if (Ke) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), ut === null) throw Error(a(349));
      qn & 30 || ec(i, t, n);
    }
    s.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return s.queue = l, sc(nc.bind(
      null,
      i,
      l,
      e
    ), [e]), i.flags |= 2048, ni(9, tc.bind(null, i, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = Kt(), t = ut.identifierPrefix;
    if (Ke) {
      var n = rn, i = nn;
      n = (i & ~(1 << 32 - Ft(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ei++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = dh++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, gh = {
    readContext: Tt,
    useCallback: fc,
    useContext: Tt,
    useEffect: us,
    useImperativeHandle: dc,
    useInsertionEffect: lc,
    useLayoutEffect: uc,
    useMemo: pc,
    useReducer: ss,
    useRef: ac,
    useState: function() {
      return ss(ti);
    },
    useDebugValue: cs,
    useDeferredValue: function(e) {
      var t = Nt();
      return hc(t, ot.memoizedState, e);
    },
    useTransition: function() {
      var e = ss(ti)[0], t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zu,
    useSyncExternalStore: Ju,
    useId: mc,
    unstable_isNewReconciler: !1
  }, yh = { readContext: Tt, useCallback: fc, useContext: Tt, useEffect: us, useImperativeHandle: dc, useInsertionEffect: lc, useLayoutEffect: uc, useMemo: pc, useReducer: ls, useRef: ac, useState: function() {
    return ls(ti);
  }, useDebugValue: cs, useDeferredValue: function(e) {
    var t = Nt();
    return ot === null ? t.memoizedState = e : hc(t, ot.memoizedState, e);
  }, useTransition: function() {
    var e = ls(ti)[0], t = Nt().memoizedState;
    return [e, t];
  }, useMutableSource: Zu, useSyncExternalStore: Ju, useId: mc, unstable_isNewReconciler: !1 };
  function Wt(e, t) {
    if (e && e.defaultProps) {
      t = ne({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ds(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var mo = { isMounted: function(e) {
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
  function wc(e, t, n, i, s, l, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, l, f) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, i) || !Hr(s, l) : !0;
  }
  function _c(e, t, n) {
    var i = !1, s = _n, l = t.contextType;
    return typeof l == "object" && l !== null ? l = Tt(l) : (s = xt(t) ? An : mt.current, i = t.contextTypes, l = (i = i != null) ? ar(e, s) : _n), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = mo, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function bc(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && mo.enqueueReplaceState(t, t.state, null);
  }
  function fs(e, t, n, i) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = {}, Za(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? s.context = Tt(l) : (l = xt(t) ? An : mt.current, s.context = ar(e, l)), s.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ds(e, t, l, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && mo.enqueueReplaceState(s, s.state, null), so(e, n, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function hr(e, t) {
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
  function ps(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function hs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var vh = typeof WeakMap == "function" ? WeakMap : Map;
  function xc(e, t, n) {
    n = an(-1, n), n.tag = 3, n.payload = { element: null };
    var i = t.value;
    return n.callback = function() {
      xo || (xo = !0, Os = i), hs(e, t);
    }, n;
  }
  function Sc(e, t, n) {
    n = an(-1, n), n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = t.value;
      n.payload = function() {
        return i(s);
      }, n.callback = function() {
        hs(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      hs(e, t), typeof i != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function Ec(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new vh();
      var s = /* @__PURE__ */ new Set();
      i.set(t, s);
    } else s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s));
    s.has(n) || (s.add(n), e = Dh.bind(null, e, t, n), t.then(e, e));
  }
  function kc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Cc(e, t, n, i, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = an(-1, 1), t.tag = 2, Sn(n, t, 1))), n.lanes |= 1), e);
  }
  var wh = g.ReactCurrentOwner, St = !1;
  function wt(e, t, n, i) {
    t.child = e === null ? Vu(t, null, n, i) : cr(t, e.child, n, i);
  }
  function Rc(e, t, n, i, s) {
    n = n.render;
    var l = t.ref;
    return fr(t, s), i = os(e, t, n, i, l, s), n = as(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, sn(e, t, s)) : (Ke && n && Ha(t), t.flags |= 1, wt(e, t, i, s), t.child);
  }
  function zc(e, t, n, i, s) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !As(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Oc(e, t, l, i, s)) : (e = zo(n.type, null, i, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !(e.lanes & s)) {
      var f = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Hr, n(f, i) && e.ref === t.ref) return sn(e, t, s);
    }
    return t.flags |= 1, e = On(l, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Oc(e, t, n, i, s) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Hr(l, i) && e.ref === t.ref) if (St = !1, t.pendingProps = i = l, (e.lanes & s) !== 0) e.flags & 131072 && (St = !0);
      else return t.lanes = e.lanes, sn(e, t, s);
    }
    return ms(e, t, n, i, s);
  }
  function Pc(e, t, n) {
    var i = t.pendingProps, s = i.children, l = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(gr, Lt), Lt |= n;
    else {
      if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ve(gr, Lt), Lt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = l !== null ? l.baseLanes : n, Ve(gr, Lt), Lt |= i;
    }
    else l !== null ? (i = l.baseLanes | n, t.memoizedState = null) : i = n, Ve(gr, Lt), Lt |= i;
    return wt(e, t, s, n), t.child;
  }
  function Lc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ms(e, t, n, i, s) {
    var l = xt(n) ? An : mt.current;
    return l = ar(t, l), fr(t, s), n = os(e, t, n, i, l, s), i = as(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, sn(e, t, s)) : (Ke && i && Ha(t), t.flags |= 1, wt(e, t, n, s), t.child);
  }
  function Dc(e, t, n, i, s) {
    if (xt(n)) {
      var l = !0;
      Zi(t);
    } else l = !1;
    if (fr(t, s), t.stateNode === null) yo(e, t), _c(t, n, i), fs(t, n, i, s), i = !0;
    else if (e === null) {
      var f = t.stateNode, S = t.memoizedProps;
      f.props = S;
      var C = f.context, j = n.contextType;
      typeof j == "object" && j !== null ? j = Tt(j) : (j = xt(n) ? An : mt.current, j = ar(t, j));
      var K = n.getDerivedStateFromProps, re = typeof K == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      re || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S !== i || C !== j) && bc(t, f, i, j), xn = !1;
      var Q = t.memoizedState;
      f.state = Q, so(t, i, f, s), C = t.memoizedState, S !== i || Q !== C || bt.current || xn ? (typeof K == "function" && (ds(t, n, K, i), C = t.memoizedState), (S = xn || wc(t, n, S, i, Q, C, j)) ? (re || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = C), f.props = i, f.state = C, f.context = j, i = S) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Yu(e, t), S = t.memoizedProps, j = t.type === t.elementType ? S : Wt(t.type, S), f.props = j, re = t.pendingProps, Q = f.context, C = n.contextType, typeof C == "object" && C !== null ? C = Tt(C) : (C = xt(n) ? An : mt.current, C = ar(t, C));
      var he = n.getDerivedStateFromProps;
      (K = typeof he == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S !== re || Q !== C) && bc(t, f, i, C), xn = !1, Q = t.memoizedState, f.state = Q, so(t, i, f, s);
      var ge = t.memoizedState;
      S !== re || Q !== ge || bt.current || xn ? (typeof he == "function" && (ds(t, n, he, i), ge = t.memoizedState), (j = xn || wc(t, n, j, i, Q, ge, C) || !1) ? (K || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, ge, C), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, ge, C)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ge), f.props = i, f.state = ge, f.context = C, i = j) : (typeof f.componentDidUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return gs(e, t, n, i, l, s);
  }
  function gs(e, t, n, i, s, l) {
    Lc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!i && !f) return s && Iu(t, n, !1), sn(e, t, l);
    i = t.stateNode, wh.current = t;
    var S = f && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1, e !== null && f ? (t.child = cr(t, e.child, null, l), t.child = cr(t, null, S, l)) : wt(e, t, S, l), t.memoizedState = i.state, s && Iu(t, n, !0), t.child;
  }
  function Mc(e) {
    var t = e.stateNode;
    t.pendingContext ? Nu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nu(e, t.context, !1), Ja(e, t.containerInfo);
  }
  function Tc(e, t, n, i, s) {
    return ur(), Va(s), t.flags |= 256, wt(e, t, n, i), t.child;
  }
  var ys = { dehydrated: null, treeContext: null, retryLane: 0 };
  function vs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nc(e, t, n) {
    var i = t.pendingProps, s = Ze.current, l = !1, f = (t.flags & 128) !== 0, S;
    if ((S = f) || (S = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), S ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Ve(Ze, s & 1), e === null)
      return Ua(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (f = i.children, e = i.fallback, l ? (i = t.mode, l = t.child, f = { mode: "hidden", children: f }, !(i & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = f) : l = Oo(f, i, 0, null), e = Vn(e, i, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = vs(n), t.memoizedState = ys, e) : ws(t, f));
    if (s = e.memoizedState, s !== null && (S = s.dehydrated, S !== null)) return _h(e, t, f, i, S, s, n);
    if (l) {
      l = i.fallback, f = t.mode, s = e.child, S = s.sibling;
      var C = { mode: "hidden", children: i.children };
      return !(f & 1) && t.child !== s ? (i = t.child, i.childLanes = 0, i.pendingProps = C, t.deletions = null) : (i = On(s, C), i.subtreeFlags = s.subtreeFlags & 14680064), S !== null ? l = On(S, l) : (l = Vn(l, f, n, null), l.flags |= 2), l.return = t, i.return = t, i.sibling = l, t.child = i, i = l, l = t.child, f = e.child.memoizedState, f = f === null ? vs(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, l.memoizedState = f, l.childLanes = e.childLanes & ~n, t.memoizedState = ys, i;
    }
    return l = e.child, e = l.sibling, i = On(l, { mode: "visible", children: i.children }), !(t.mode & 1) && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
  }
  function ws(e, t) {
    return t = Oo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function go(e, t, n, i) {
    return i !== null && Va(i), cr(t, e.child, null, n), e = ws(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function _h(e, t, n, i, s, l, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, i = ps(Error(a(422))), go(e, t, f, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = i.fallback, s = t.mode, i = Oo({ mode: "visible", children: i.children }, s, 0, null), l = Vn(l, s, f, null), l.flags |= 2, i.return = t, l.return = t, i.sibling = l, t.child = i, t.mode & 1 && cr(t, e.child, null, f), t.child.memoizedState = vs(f), t.memoizedState = ys, l);
    if (!(t.mode & 1)) return go(e, t, f, null);
    if (s.data === "$!") {
      if (i = s.nextSibling && s.nextSibling.dataset, i) var S = i.dgst;
      return i = S, l = Error(a(419)), i = ps(l, i, void 0), go(e, t, f, i);
    }
    if (S = (f & e.childLanes) !== 0, St || S) {
      if (i = ut, i !== null) {
        switch (f & -f) {
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
        s = s & (i.suspendedLanes | f) ? 0 : s, s !== 0 && s !== l.retryLane && (l.retryLane = s, on(e, s), Vt(i, e, s, -1));
      }
      return Ns(), i = ps(Error(a(421))), go(e, t, f, i);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mh.bind(null, e), s._reactRetry = t, null) : (e = l.treeContext, Pt = vn(s.nextSibling), Ot = t, Ke = !0, Ht = null, e !== null && (Dt[Mt++] = nn, Dt[Mt++] = rn, Dt[Mt++] = In, nn = e.id, rn = e.overflow, In = t), t = ws(t, i.children), t.flags |= 4096, t);
  }
  function Ac(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Qa(e.return, t, n);
  }
  function _s(e, t, n, i, s) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: s } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = i, l.tail = n, l.tailMode = s);
  }
  function Ic(e, t, n) {
    var i = t.pendingProps, s = i.revealOrder, l = i.tail;
    if (wt(e, t, i.children, n), i = Ze.current, i & 2) i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ac(e, n, t);
        else if (e.tag === 19) Ac(e, n, t);
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
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), _s(t, !1, s, n, l);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && lo(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        _s(t, !0, n, null, l);
        break;
      case "together":
        _s(t, !1, null, null, void 0);
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
  function bh(e, t, n) {
    switch (t.tag) {
      case 3:
        Mc(t), ur();
        break;
      case 5:
        Ku(t);
        break;
      case 1:
        xt(t.type) && Zi(t);
        break;
      case 4:
        Ja(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context, s = t.memoizedProps.value;
        Ve(io, i._currentValue), i._currentValue = s;
        break;
      case 13:
        if (i = t.memoizedState, i !== null)
          return i.dehydrated !== null ? (Ve(Ze, Ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nc(e, t, n) : (Ve(Ze, Ze.current & 1), e = sn(e, t, n), e !== null ? e.sibling : null);
        Ve(Ze, Ze.current & 1);
        break;
      case 19:
        if (i = (n & t.childLanes) !== 0, e.flags & 128) {
          if (i) return Ic(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ve(Ze, Ze.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Pc(e, t, n);
    }
    return sn(e, t, n);
  }
  var Bc, bs, jc, Fc;
  Bc = function(e, t) {
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
  }, bs = function() {
  }, jc = function(e, t, n, i) {
    var s = e.memoizedProps;
    if (s !== i) {
      e = t.stateNode, Fn(Qt.current);
      var l = null;
      switch (n) {
        case "input":
          s = Ue(e, s), i = Ue(e, i), l = [];
          break;
        case "select":
          s = ne({}, s, { value: void 0 }), i = ne({}, i, { value: void 0 }), l = [];
          break;
        case "textarea":
          s = Ee(e, s), i = Ee(e, i), l = [];
          break;
        default:
          typeof s.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Xi);
      }
      dt(n, i);
      var f;
      n = null;
      for (j in s) if (!i.hasOwnProperty(j) && s.hasOwnProperty(j) && s[j] != null) if (j === "style") {
        var S = s[j];
        for (f in S) S.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (c.hasOwnProperty(j) ? l || (l = []) : (l = l || []).push(j, null));
      for (j in i) {
        var C = i[j];
        if (S = s?.[j], i.hasOwnProperty(j) && C !== S && (C != null || S != null)) if (j === "style") if (S) {
          for (f in S) !S.hasOwnProperty(f) || C && C.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in C) C.hasOwnProperty(f) && S[f] !== C[f] && (n || (n = {}), n[f] = C[f]);
        } else n || (l || (l = []), l.push(
          j,
          n
        )), n = C;
        else j === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (l = l || []).push(j, C)) : j === "children" ? typeof C != "string" && typeof C != "number" || (l = l || []).push(j, "" + C) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (c.hasOwnProperty(j) ? (C != null && j === "onScroll" && Ge("scroll", e), l || S === C || (l = [])) : (l = l || []).push(j, C));
      }
      n && (l = l || []).push("style", n);
      var j = l;
      (t.updateQueue = j) && (t.flags |= 4);
    }
  }, Fc = function(e, t, n, i) {
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
  function xh(e, t, n) {
    var i = t.pendingProps;
    switch (Wa(t), t.tag) {
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
        return i = t.stateNode, pr(), Ye(bt), Ye(mt), ns(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (no(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ht !== null && (Ds(Ht), Ht = null))), bs(e, t), yt(t), null;
      case 5:
        es(t);
        var s = Fn(Zr.current);
        if (n = t.type, e !== null && t.stateNode != null) jc(e, t, n, i, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
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
            for (var f in l) if (l.hasOwnProperty(f)) {
              var S = l[f];
              f === "children" ? typeof S == "string" ? i.textContent !== S && (l.suppressHydrationWarning !== !0 && Yi(i.textContent, S, e), s = ["children", S]) : typeof S == "number" && i.textContent !== "" + S && (l.suppressHydrationWarning !== !0 && Yi(
                i.textContent,
                S,
                e
              ), s = ["children", "" + S]) : c.hasOwnProperty(f) && S != null && f === "onScroll" && Ge("scroll", i);
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
            f = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = f.createElement(n, { is: i.is }) : (e = f.createElement(n), n === "select" && (f = e, i.multiple ? f.multiple = !0 : i.size && (f.size = i.size))) : e = f.createElementNS(e, n), e[Xt] = t, e[Gr] = i, Bc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = jt(n, i), n) {
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
                  e._wrapperState = { wasMultiple: !!i.multiple }, s = ne({}, i, { value: void 0 }), Ge("invalid", e);
                  break;
                case "textarea":
                  ze(e, i), s = Ee(e, i), Ge("invalid", e);
                  break;
                default:
                  s = i;
              }
              dt(n, s), S = s;
              for (l in S) if (S.hasOwnProperty(l)) {
                var C = S[l];
                l === "style" ? Ne(e, C) : l === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && I(e, C)) : l === "children" ? typeof C == "string" ? (n !== "textarea" || C !== "") && $(e, C) : typeof C == "number" && $(e, "" + C) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (c.hasOwnProperty(l) ? C != null && l === "onScroll" && Ge("scroll", e) : C != null && v(e, l, C, f));
              }
              switch (n) {
                case "input":
                  Oe(e), N(e, i, !1);
                  break;
                case "textarea":
                  Oe(e), We(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ee(i.value));
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
        if (e && t.stateNode != null) Fc(e, t, e.memoizedProps, i);
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
          if (Ke && Pt !== null && t.mode & 1 && !(t.flags & 128)) Wu(), ur(), t.flags |= 98560, l = !1;
          else if (l = no(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(a(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(a(317));
              l[Xt] = t;
            } else ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            yt(t), l = !1;
          } else Ht !== null && (Ds(Ht), Ht = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ze.current & 1 ? at === 0 && (at = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
      case 4:
        return pr(), bs(e, t), e === null && Ur(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return Xa(t.type._context), yt(t), null;
      case 17:
        return xt(t.type) && Ki(), yt(t), null;
      case 19:
        if (Ye(Ze), l = t.memoizedState, l === null) return yt(t), null;
        if (i = (t.flags & 128) !== 0, f = l.rendering, f === null) if (i) ri(l, !1);
        else {
          if (at !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (f = lo(e), f !== null) {
              for (t.flags |= 128, ri(l, !1), i = f.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; ) l = n, e = i, l.flags &= 14680066, f = l.alternate, f === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = f.childLanes, l.lanes = f.lanes, l.child = f.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = f.memoizedProps, l.memoizedState = f.memoizedState, l.updateQueue = f.updateQueue, l.type = f.type, e = f.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ve(Ze, Ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && nt() > yr && (t.flags |= 128, i = !0, ri(l, !1), t.lanes = 4194304);
        }
        else {
          if (!i) if (e = lo(f), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ri(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !Ke) return yt(t), null;
          } else 2 * nt() - l.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128, i = !0, ri(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (n = l.last, n !== null ? n.sibling = f : t.child = f, l.last = f);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = nt(), t.sibling = null, n = Ze.current, Ve(Ze, i ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return Ts(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Lt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Sh(e, t) {
    switch (Wa(t), t.tag) {
      case 1:
        return xt(t.type) && Ki(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pr(), Ye(bt), Ye(mt), ns(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return es(t), null;
      case 13:
        if (Ye(Ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          ur();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ye(Ze), null;
      case 4:
        return pr(), null;
      case 10:
        return Xa(t.type._context), null;
      case 22:
      case 23:
        return Ts(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vo = !1, vt = !1, Eh = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function mr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (i) {
      et(e, t, i);
    }
    else n.current = null;
  }
  function xs(e, t, n) {
    try {
      n();
    } catch (i) {
      et(e, t, i);
    }
  }
  var qc = !1;
  function kh(e, t) {
    if (Ta = Ii, e = wu(), Ca(e)) {
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
          var f = 0, S = -1, C = -1, j = 0, K = 0, re = e, Q = null;
          t: for (; ; ) {
            for (var he; re !== n || s !== 0 && re.nodeType !== 3 || (S = f + s), re !== l || i !== 0 && re.nodeType !== 3 || (C = f + i), re.nodeType === 3 && (f += re.nodeValue.length), (he = re.firstChild) !== null; )
              Q = re, re = he;
            for (; ; ) {
              if (re === e) break t;
              if (Q === n && ++j === s && (S = f), Q === l && ++K === i && (C = f), (he = re.nextSibling) !== null) break;
              re = Q, Q = re.parentNode;
            }
            re = he;
          }
          n = S === -1 || C === -1 ? null : { start: S, end: C };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Na = { focusedElem: e, selectionRange: n }, Ii = !1, me = t; me !== null; ) if (t = me, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, me = e;
    else for (; me !== null; ) {
      t = me;
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
            var B = t.stateNode.containerInfo;
            B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
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
        e.return = t.return, me = e;
        break;
      }
      me = t.return;
    }
    return ge = qc, qc = !1, ge;
  }
  function ii(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
      var s = i = i.next;
      do {
        if ((s.tag & e) === e) {
          var l = s.destroy;
          s.destroy = void 0, l !== void 0 && xs(t, n, l);
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
  function Ss(e) {
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
  function Hc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Hc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[Gr], delete t[ja], delete t[sh], delete t[lh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Wc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $c(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Es(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xi));
    else if (i !== 4 && (e = e.child, e !== null)) for (Es(e, t, n), e = e.sibling; e !== null; ) Es(e, t, n), e = e.sibling;
  }
  function ks(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child, e !== null)) for (ks(e, t, n), e = e.sibling; e !== null; ) ks(e, t, n), e = e.sibling;
  }
  var ft = null, $t = !1;
  function En(e, t, n) {
    for (n = n.child; n !== null; ) Uc(e, t, n), n = n.sibling;
  }
  function Uc(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function") try {
      Yt.onCommitFiberUnmount(Li, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || mr(n, t);
      case 6:
        var i = ft, s = $t;
        ft = null, En(e, t, n), ft = i, $t = s, ft !== null && ($t ? (e = ft, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ft.removeChild(n.stateNode));
        break;
      case 18:
        ft !== null && ($t ? (e = ft, n = n.stateNode, e.nodeType === 8 ? Ba(e.parentNode, n) : e.nodeType === 1 && Ba(e, n), Ar(e)) : Ba(ft, n.stateNode));
        break;
      case 4:
        i = ft, s = $t, ft = n.stateNode.containerInfo, $t = !0, En(e, t, n), ft = i, $t = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
          s = i = i.next;
          do {
            var l = s, f = l.destroy;
            l = l.tag, f !== void 0 && (l & 2 || l & 4) && xs(n, t, f), s = s.next;
          } while (s !== i);
        }
        En(e, t, n);
        break;
      case 1:
        if (!vt && (mr(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (S) {
          et(n, t, S);
        }
        En(e, t, n);
        break;
      case 21:
        En(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (i = vt) || n.memoizedState !== null, En(e, t, n), vt = i) : En(e, t, n);
        break;
      default:
        En(e, t, n);
    }
  }
  function Vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Eh()), t.forEach(function(i) {
        var s = Th.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(s, s));
      });
    }
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null) for (var i = 0; i < n.length; i++) {
      var s = n[i];
      try {
        var l = e, f = t, S = f;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              ft = S.stateNode, $t = !1;
              break e;
            case 3:
              ft = S.stateNode.containerInfo, $t = !0;
              break e;
            case 4:
              ft = S.stateNode.containerInfo, $t = !0;
              break e;
          }
          S = S.return;
        }
        if (ft === null) throw Error(a(160));
        Uc(l, f, s), ft = null, $t = !1;
        var C = s.alternate;
        C !== null && (C.return = null), s.return = null;
      } catch (j) {
        et(s, t, j);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gc(t, e), t = t.sibling;
  }
  function Gc(e, t) {
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
        Ut(t, e), Zt(e), i & 512 && n !== null && mr(n, n.return);
        break;
      case 5:
        if (Ut(t, e), Zt(e), i & 512 && n !== null && mr(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            $(s, "");
          } catch (ye) {
            et(e, e.return, ye);
          }
        }
        if (i & 4 && (s = e.stateNode, s != null)) {
          var l = e.memoizedProps, f = n !== null ? n.memoizedProps : l, S = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            S === "input" && l.type === "radio" && l.name != null && R(s, l), jt(S, f);
            var j = jt(S, l);
            for (f = 0; f < C.length; f += 2) {
              var K = C[f], re = C[f + 1];
              K === "style" ? Ne(s, re) : K === "dangerouslySetInnerHTML" ? I(s, re) : K === "children" ? $(s, re) : v(s, K, re, j);
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
                var he = l.value;
                he != null ? ve(s, !!l.multiple, he, !1) : Q !== !!l.multiple && (l.defaultValue != null ? ve(
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
        Ut(t, e), Zt(e), s = e.child, s.flags & 8192 && (l = s.memoizedState !== null, s.stateNode.isHidden = l, !l || s.alternate !== null && s.alternate.memoizedState !== null || (zs = nt())), i & 4 && Vc(e);
        break;
      case 22:
        if (K = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (j = vt) || K, Ut(t, e), vt = j) : Ut(t, e), Zt(e), i & 8192) {
          if (j = e.memoizedState !== null, (e.stateNode.isHidden = j) && !K && e.mode & 1) for (me = e, K = e.child; K !== null; ) {
            for (re = me = K; me !== null; ) {
              switch (Q = me, he = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ii(4, Q, Q.return);
                  break;
                case 1:
                  mr(Q, Q.return);
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
                  mr(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Qc(re);
                    continue;
                  }
              }
              he !== null ? (he.return = Q, me = he) : Qc(re);
            }
            K = K.sibling;
          }
          e: for (K = null, re = e; ; ) {
            if (re.tag === 5) {
              if (K === null) {
                K = re;
                try {
                  s = re.stateNode, j ? (l = s.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (S = re.stateNode, C = re.memoizedProps.style, f = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Te("display", f));
                } catch (ye) {
                  et(e, e.return, ye);
                }
              }
            } else if (re.tag === 6) {
              if (K === null) try {
                re.stateNode.nodeValue = j ? "" : re.memoizedProps;
              } catch (ye) {
                et(e, e.return, ye);
              }
            } else if ((re.tag !== 22 && re.tag !== 23 || re.memoizedState === null || re === e) && re.child !== null) {
              re.child.return = re, re = re.child;
              continue;
            }
            if (re === e) break e;
            for (; re.sibling === null; ) {
              if (re.return === null || re.return === e) break e;
              K === re && (K = null), re = re.return;
            }
            K === re && (K = null), re.sibling.return = re.return, re = re.sibling;
          }
        }
        break;
      case 19:
        Ut(t, e), Zt(e), i & 4 && Vc(e);
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
            if (Wc(n)) {
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
            var l = $c(e);
            ks(e, l, s);
            break;
          case 3:
          case 4:
            var f = i.stateNode.containerInfo, S = $c(e);
            Es(e, S, f);
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
  function Ch(e, t, n) {
    me = e, Yc(e);
  }
  function Yc(e, t, n) {
    for (var i = (e.mode & 1) !== 0; me !== null; ) {
      var s = me, l = s.child;
      if (s.tag === 22 && i) {
        var f = s.memoizedState !== null || vo;
        if (!f) {
          var S = s.alternate, C = S !== null && S.memoizedState !== null || vt;
          S = vo;
          var j = vt;
          if (vo = f, (vt = C) && !j) for (me = s; me !== null; ) f = me, C = f.child, f.tag === 22 && f.memoizedState !== null ? Kc(s) : C !== null ? (C.return = f, me = C) : Kc(s);
          for (; l !== null; ) me = l, Yc(l), l = l.sibling;
          me = s, vo = S, vt = j;
        }
        Xc(e);
      } else s.subtreeFlags & 8772 && l !== null ? (l.return = s, me = l) : Xc(e);
    }
  }
  function Xc(e) {
    for (; me !== null; ) {
      var t = me;
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
              l !== null && Qu(t, l, i);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Qu(t, f, n);
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
                var j = t.alternate;
                if (j !== null) {
                  var K = j.memoizedState;
                  if (K !== null) {
                    var re = K.dehydrated;
                    re !== null && Ar(re);
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
          vt || t.flags & 512 && Ss(t);
        } catch (Q) {
          et(t, t.return, Q);
        }
      }
      if (t === e) {
        me = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, me = n;
        break;
      }
      me = t.return;
    }
  }
  function Qc(e) {
    for (; me !== null; ) {
      var t = me;
      if (t === e) {
        me = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, me = n;
        break;
      }
      me = t.return;
    }
  }
  function Kc(e) {
    for (; me !== null; ) {
      var t = me;
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
              Ss(t);
            } catch (C) {
              et(t, l, C);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Ss(t);
            } catch (C) {
              et(t, f, C);
            }
        }
      } catch (C) {
        et(t, t.return, C);
      }
      if (t === e) {
        me = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        S.return = t.return, me = S;
        break;
      }
      me = t.return;
    }
  }
  var Rh = Math.ceil, _o = g.ReactCurrentDispatcher, Cs = g.ReactCurrentOwner, At = g.ReactCurrentBatchConfig, Be = 0, ut = null, it = null, pt = 0, Lt = 0, gr = wn(0), at = 0, oi = null, Hn = 0, bo = 0, Rs = 0, ai = null, Et = null, zs = 0, yr = 1 / 0, ln = null, xo = !1, Os = null, kn = null, So = !1, Cn = null, Eo = 0, si = 0, Ps = null, ko = -1, Co = 0;
  function _t() {
    return Be & 6 ? nt() : ko !== -1 ? ko : ko = nt();
  }
  function Rn(e) {
    return e.mode & 1 ? Be & 2 && pt !== 0 ? pt & -pt : ch.transition !== null ? (Co === 0 && (Co = $l()), Co) : (e = He, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jl(e.type)), e) : 1;
  }
  function Vt(e, t, n, i) {
    if (50 < si) throw si = 0, Ps = null, Error(a(185));
    Lr(e, n, i), (!(Be & 2) || e !== ut) && (e === ut && (!(Be & 2) && (bo |= n), at === 4 && zn(e, pt)), kt(e, i), n === 1 && Be === 0 && !(t.mode & 1) && (yr = nt() + 500, Ji && bn()));
  }
  function kt(e, t) {
    var n = e.callbackNode;
    cp(e, t);
    var i = Ti(e, e === ut ? pt : 0);
    if (i === 0) n !== null && ql(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = i & -i, e.callbackPriority !== t) {
      if (n != null && ql(n), t === 1) e.tag === 0 ? uh(Jc.bind(null, e)) : Bu(Jc.bind(null, e)), oh(function() {
        !(Be & 6) && bn();
      }), n = null;
      else {
        switch (Ul(i)) {
          case 1:
            n = ua;
            break;
          case 4:
            n = Hl;
            break;
          case 16:
            n = Pi;
            break;
          case 536870912:
            n = Wl;
            break;
          default:
            n = Pi;
        }
        n = sd(n, Zc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Zc(e, t) {
    if (ko = -1, Co = 0, Be & 6) throw Error(a(327));
    var n = e.callbackNode;
    if (vr() && e.callbackNode !== n) return null;
    var i = Ti(e, e === ut ? pt : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = Ro(e, i);
    else {
      t = i;
      var s = Be;
      Be |= 2;
      var l = td();
      (ut !== e || pt !== t) && (ln = null, yr = nt() + 500, $n(e, t));
      do
        try {
          Ph();
          break;
        } catch (S) {
          ed(e, S);
        }
      while (!0);
      Ya(), _o.current = l, Be = s, it !== null ? t = 0 : (ut = null, pt = 0, t = at);
    }
    if (t !== 0) {
      if (t === 2 && (s = ca(e), s !== 0 && (i = s, t = Ls(e, s))), t === 1) throw n = oi, $n(e, 0), zn(e, i), kt(e, nt()), n;
      if (t === 6) zn(e, i);
      else {
        if (s = e.current.alternate, !(i & 30) && !zh(s) && (t = Ro(e, i), t === 2 && (l = ca(e), l !== 0 && (i = l, t = Ls(e, l))), t === 1)) throw n = oi, $n(e, 0), zn(e, i), kt(e, nt()), n;
        switch (e.finishedWork = s, e.finishedLanes = i, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Un(e, Et, ln);
            break;
          case 3:
            if (zn(e, i), (i & 130023424) === i && (t = zs + 500 - nt(), 10 < t)) {
              if (Ti(e, 0) !== 0) break;
              if (s = e.suspendedLanes, (s & i) !== i) {
                _t(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = Ia(Un.bind(null, e, Et, ln), t);
              break;
            }
            Un(e, Et, ln);
            break;
          case 4:
            if (zn(e, i), (i & 4194240) === i) break;
            for (t = e.eventTimes, s = -1; 0 < i; ) {
              var f = 31 - Ft(i);
              l = 1 << f, f = t[f], f > s && (s = f), i &= ~l;
            }
            if (i = s, i = nt() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Rh(i / 1960)) - i, 10 < i) {
              e.timeoutHandle = Ia(Un.bind(null, e, Et, ln), i);
              break;
            }
            Un(e, Et, ln);
            break;
          case 5:
            Un(e, Et, ln);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return kt(e, nt()), e.callbackNode === n ? Zc.bind(null, e) : null;
  }
  function Ls(e, t) {
    var n = ai;
    return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = Ro(e, t), e !== 2 && (t = Et, Et = n, t !== null && Ds(t)), e;
  }
  function Ds(e) {
    Et === null ? Et = e : Et.push.apply(Et, e);
  }
  function zh(e) {
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
    for (t &= ~Rs, t &= ~bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ft(t), i = 1 << n;
      e[n] = -1, t &= ~i;
    }
  }
  function Jc(e) {
    if (Be & 6) throw Error(a(327));
    vr();
    var t = Ti(e, 0);
    if (!(t & 1)) return kt(e, nt()), null;
    var n = Ro(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = ca(e);
      i !== 0 && (t = i, n = Ls(e, i));
    }
    if (n === 1) throw n = oi, $n(e, 0), zn(e, t), kt(e, nt()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, Et, ln), kt(e, nt()), null;
  }
  function Ms(e, t) {
    var n = Be;
    Be |= 1;
    try {
      return e(t);
    } finally {
      Be = n, Be === 0 && (yr = nt() + 500, Ji && bn());
    }
  }
  function Wn(e) {
    Cn !== null && Cn.tag === 0 && !(Be & 6) && vr();
    var t = Be;
    Be |= 1;
    var n = At.transition, i = He;
    try {
      if (At.transition = null, He = 1, e) return e();
    } finally {
      He = i, At.transition = n, Be = t, !(Be & 6) && bn();
    }
  }
  function Ts() {
    Lt = gr.current, Ye(gr);
  }
  function $n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ih(n)), it !== null) for (n = it.return; n !== null; ) {
      var i = n;
      switch (Wa(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Ki();
          break;
        case 3:
          pr(), Ye(bt), Ye(mt), ns();
          break;
        case 5:
          es(i);
          break;
        case 4:
          pr();
          break;
        case 13:
          Ye(Ze);
          break;
        case 19:
          Ye(Ze);
          break;
        case 10:
          Xa(i.type._context);
          break;
        case 22:
        case 23:
          Ts();
      }
      n = n.return;
    }
    if (ut = e, it = e = On(e.current, null), pt = Lt = t, at = 0, oi = null, Rs = bo = Hn = 0, Et = ai = null, jn !== null) {
      for (t = 0; t < jn.length; t++) if (n = jn[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var s = i.next, l = n.pending;
        if (l !== null) {
          var f = l.next;
          l.next = s, i.next = f;
        }
        n.pending = i;
      }
      jn = null;
    }
    return e;
  }
  function ed(e, t) {
    do {
      var n = it;
      try {
        if (Ya(), uo.current = ho, co) {
          for (var i = Je.memoizedState; i !== null; ) {
            var s = i.queue;
            s !== null && (s.pending = null), i = i.next;
          }
          co = !1;
        }
        if (qn = 0, lt = ot = Je = null, Jr = !1, ei = 0, Cs.current = null, n === null || n.return === null) {
          at = 1, oi = t, it = null;
          break;
        }
        e: {
          var l = e, f = n.return, S = n, C = t;
          if (t = pt, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var j = C, K = S, re = K.tag;
            if (!(K.mode & 1) && (re === 0 || re === 11 || re === 15)) {
              var Q = K.alternate;
              Q ? (K.updateQueue = Q.updateQueue, K.memoizedState = Q.memoizedState, K.lanes = Q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var he = kc(f);
            if (he !== null) {
              he.flags &= -257, Cc(he, f, S, l, t), he.mode & 1 && Ec(l, j, t), t = he, C = j;
              var ge = t.updateQueue;
              if (ge === null) {
                var ye = /* @__PURE__ */ new Set();
                ye.add(C), t.updateQueue = ye;
              } else ge.add(C);
              break e;
            } else {
              if (!(t & 1)) {
                Ec(l, j, t), Ns();
                break e;
              }
              C = Error(a(426));
            }
          } else if (Ke && S.mode & 1) {
            var rt = kc(f);
            if (rt !== null) {
              !(rt.flags & 65536) && (rt.flags |= 256), Cc(rt, f, S, l, t), Va(hr(C, S));
              break e;
            }
          }
          l = C = hr(C, S), at !== 4 && (at = 2), ai === null ? ai = [l] : ai.push(l), l = f;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var A = xc(l, C, t);
                Xu(l, A);
                break e;
              case 1:
                S = C;
                var D = l.type, B = l.stateNode;
                if (!(l.flags & 128) && (typeof D.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (kn === null || !kn.has(B)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var ae = Sc(l, S, t);
                  Xu(l, ae);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        rd(n);
      } catch (we) {
        t = we, it === n && n !== null && (it = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function td() {
    var e = _o.current;
    return _o.current = ho, e === null ? ho : e;
  }
  function Ns() {
    (at === 0 || at === 3 || at === 2) && (at = 4), ut === null || !(Hn & 268435455) && !(bo & 268435455) || zn(ut, pt);
  }
  function Ro(e, t) {
    var n = Be;
    Be |= 2;
    var i = td();
    (ut !== e || pt !== t) && (ln = null, $n(e, t));
    do
      try {
        Oh();
        break;
      } catch (s) {
        ed(e, s);
      }
    while (!0);
    if (Ya(), Be = n, _o.current = i, it !== null) throw Error(a(261));
    return ut = null, pt = 0, at;
  }
  function Oh() {
    for (; it !== null; ) nd(it);
  }
  function Ph() {
    for (; it !== null && !tp(); ) nd(it);
  }
  function nd(e) {
    var t = ad(e.alternate, e, Lt);
    e.memoizedProps = e.pendingProps, t === null ? rd(e) : it = t, Cs.current = null;
  }
  function rd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Sh(n, t), n !== null) {
          n.flags &= 32767, it = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          at = 6, it = null;
          return;
        }
      } else if (n = xh(n, t, Lt), n !== null) {
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
      At.transition = null, He = 1, Lh(e, t, n, i);
    } finally {
      At.transition = s, He = i;
    }
    return null;
  }
  function Lh(e, t, n, i) {
    do
      vr();
    while (Cn !== null);
    if (Be & 6) throw Error(a(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (dp(e, l), e === ut && (it = ut = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || So || (So = !0, sd(Pi, function() {
      return vr(), null;
    })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
      l = At.transition, At.transition = null;
      var f = He;
      He = 1;
      var S = Be;
      Be |= 4, Cs.current = null, kh(e, n), Gc(n, e), Kp(Na), Ii = !!Ta, Na = Ta = null, e.current = n, Ch(n), np(), Be = S, He = f, At.transition = l;
    } else e.current = n;
    if (So && (So = !1, Cn = e, Eo = s), l = e.pendingLanes, l === 0 && (kn = null), op(n.stateNode), kt(e, nt()), t !== null) for (i = e.onRecoverableError, n = 0; n < t.length; n++) s = t[n], i(s.value, { componentStack: s.stack, digest: s.digest });
    if (xo) throw xo = !1, e = Os, Os = null, e;
    return Eo & 1 && e.tag !== 0 && vr(), l = e.pendingLanes, l & 1 ? e === Ps ? si++ : (si = 0, Ps = e) : si = 0, bn(), null;
  }
  function vr() {
    if (Cn !== null) {
      var e = Ul(Eo), t = At.transition, n = He;
      try {
        if (At.transition = null, He = 16 > e ? 16 : e, Cn === null) var i = !1;
        else {
          if (e = Cn, Cn = null, Eo = 0, Be & 6) throw Error(a(331));
          var s = Be;
          for (Be |= 4, me = e.current; me !== null; ) {
            var l = me, f = l.child;
            if (me.flags & 16) {
              var S = l.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var j = S[C];
                  for (me = j; me !== null; ) {
                    var K = me;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ii(8, K, l);
                    }
                    var re = K.child;
                    if (re !== null) re.return = K, me = re;
                    else for (; me !== null; ) {
                      K = me;
                      var Q = K.sibling, he = K.return;
                      if (Hc(K), K === j) {
                        me = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = he, me = Q;
                        break;
                      }
                      me = he;
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
                me = l;
              }
            }
            if (l.subtreeFlags & 2064 && f !== null) f.return = l, me = f;
            else e: for (; me !== null; ) {
              if (l = me, l.flags & 2048) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ii(9, l, l.return);
              }
              var A = l.sibling;
              if (A !== null) {
                A.return = l.return, me = A;
                break e;
              }
              me = l.return;
            }
          }
          var D = e.current;
          for (me = D; me !== null; ) {
            f = me;
            var B = f.child;
            if (f.subtreeFlags & 2064 && B !== null) B.return = f, me = B;
            else e: for (f = D; me !== null; ) {
              if (S = me, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, S);
                }
              } catch (we) {
                et(S, S.return, we);
              }
              if (S === f) {
                me = null;
                break e;
              }
              var ae = S.sibling;
              if (ae !== null) {
                ae.return = S.return, me = ae;
                break e;
              }
              me = S.return;
            }
          }
          if (Be = s, bn(), Yt && typeof Yt.onPostCommitFiberRoot == "function") try {
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
  function id(e, t, n) {
    t = hr(n, t), t = xc(e, t, 1), e = Sn(e, t, 1), t = _t(), e !== null && (Lr(e, 1, t), kt(e, t));
  }
  function et(e, t, n) {
    if (e.tag === 3) id(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        id(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (kn === null || !kn.has(i))) {
          e = hr(n, e), e = Sc(t, e, 1), t = Sn(t, e, 1), e = _t(), t !== null && (Lr(t, 1, e), kt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dh(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), t = _t(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (pt & n) === n && (at === 4 || at === 3 && (pt & 130023424) === pt && 500 > nt() - zs ? $n(e, 0) : Rs |= n), kt(e, t);
  }
  function od(e, t) {
    t === 0 && (e.mode & 1 ? (t = Mi, Mi <<= 1, !(Mi & 130023424) && (Mi = 4194304)) : t = 1);
    var n = _t();
    e = on(e, t), e !== null && (Lr(e, t, n), kt(e, n));
  }
  function Mh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), od(e, n);
  }
  function Th(e, t) {
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
    i !== null && i.delete(t), od(e, n);
  }
  var ad;
  ad = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || bt.current) St = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return St = !1, bh(e, t, n);
      St = !!(e.flags & 131072);
    }
    else St = !1, Ke && t.flags & 1048576 && ju(t, to, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var i = t.type;
        yo(e, t), e = t.pendingProps;
        var s = ar(t, mt.current);
        fr(t, n), s = os(null, t, i, e, s, n);
        var l = as();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(i) ? (l = !0, Zi(t)) : l = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, Za(t), s.updater = mo, t.stateNode = s, s._reactInternals = t, fs(t, i, e, n), t = gs(null, t, i, !0, l, n)) : (t.tag = 0, Ke && l && Ha(t), wt(null, t, s, n), t = t.child), t;
      case 16:
        i = t.elementType;
        e: {
          switch (yo(e, t), e = t.pendingProps, s = i._init, i = s(i._payload), t.type = i, s = t.tag = Ah(i), e = Wt(i, e), s) {
            case 0:
              t = ms(null, t, i, e, n);
              break e;
            case 1:
              t = Dc(null, t, i, e, n);
              break e;
            case 11:
              t = Rc(null, t, i, e, n);
              break e;
            case 14:
              t = zc(null, t, i, Wt(i.type, e), n);
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
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), ms(e, t, i, s, n);
      case 1:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), Dc(e, t, i, s, n);
      case 3:
        e: {
          if (Mc(t), e === null) throw Error(a(387));
          i = t.pendingProps, l = t.memoizedState, s = l.element, Yu(e, t), so(t, i, null, n);
          var f = t.memoizedState;
          if (i = f.element, l.isDehydrated) if (l = { element: i, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            s = hr(Error(a(423)), t), t = Tc(e, t, i, n, s);
            break e;
          } else if (i !== s) {
            s = hr(Error(a(424)), t), t = Tc(e, t, i, n, s);
            break e;
          } else for (Pt = vn(t.stateNode.containerInfo.firstChild), Ot = t, Ke = !0, Ht = null, n = Vu(t, null, i, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return Ku(t), e === null && Ua(t), i = t.type, s = t.pendingProps, l = e !== null ? e.memoizedProps : null, f = s.children, Aa(i, s) ? f = null : l !== null && Aa(i, l) && (t.flags |= 32), Lc(e, t), wt(e, t, f, n), t.child;
      case 6:
        return e === null && Ua(t), null;
      case 13:
        return Nc(e, t, n);
      case 4:
        return Ja(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = cr(t, null, i, n) : wt(e, t, i, n), t.child;
      case 11:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), Rc(e, t, i, s, n);
      case 7:
        return wt(e, t, t.pendingProps, n), t.child;
      case 8:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (i = t.type._context, s = t.pendingProps, l = t.memoizedProps, f = s.value, Ve(io, i._currentValue), i._currentValue = f, l !== null) if (qt(l.value, f)) {
            if (l.children === s.children && !bt.current) {
              t = sn(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var S = l.dependencies;
            if (S !== null) {
              f = l.child;
              for (var C = S.firstContext; C !== null; ) {
                if (C.context === i) {
                  if (l.tag === 1) {
                    C = an(-1, n & -n), C.tag = 2;
                    var j = l.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var K = j.pending;
                      K === null ? C.next = C : (C.next = K.next, K.next = C), j.pending = C;
                    }
                  }
                  l.lanes |= n, C = l.alternate, C !== null && (C.lanes |= n), Qa(
                    l.return,
                    n,
                    t
                  ), S.lanes |= n;
                  break;
                }
                C = C.next;
              }
            } else if (l.tag === 10) f = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (f = l.return, f === null) throw Error(a(341));
              f.lanes |= n, S = f.alternate, S !== null && (S.lanes |= n), Qa(f, n, t), f = l.sibling;
            } else f = l.child;
            if (f !== null) f.return = l;
            else for (f = l; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (l = f.sibling, l !== null) {
                l.return = f.return, f = l;
                break;
              }
              f = f.return;
            }
            l = f;
          }
          wt(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, i = t.pendingProps.children, fr(t, n), s = Tt(s), i = i(s), t.flags |= 1, wt(e, t, i, n), t.child;
      case 14:
        return i = t.type, s = Wt(i, t.pendingProps), s = Wt(i.type, s), zc(e, t, i, s, n);
      case 15:
        return Oc(e, t, t.type, t.pendingProps, n);
      case 17:
        return i = t.type, s = t.pendingProps, s = t.elementType === i ? s : Wt(i, s), yo(e, t), t.tag = 1, xt(i) ? (e = !0, Zi(t)) : e = !1, fr(t, n), _c(t, i, s), fs(t, i, s, n), gs(null, t, i, !0, e, n);
      case 19:
        return Ic(e, t, n);
      case 22:
        return Pc(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function sd(e, t) {
    return Fl(e, t);
  }
  function Nh(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, i) {
    return new Nh(e, t, n, i);
  }
  function As(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ah(e) {
    if (typeof e == "function") return As(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === se) return 11;
      if (e === Y) return 14;
    }
    return 2;
  }
  function On(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function zo(e, t, n, i, s, l) {
    var f = 2;
    if (i = e, typeof e == "function") As(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case M:
        return Vn(n.children, s, l, t);
      case q:
        f = 8, s |= 8;
        break;
      case W:
        return e = It(12, n, t, s | 2), e.elementType = W, e.lanes = l, e;
      case oe:
        return e = It(13, n, t, s), e.elementType = oe, e.lanes = l, e;
      case fe:
        return e = It(19, n, t, s), e.elementType = fe, e.lanes = l, e;
      case J:
        return Oo(n, s, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case te:
            f = 10;
            break e;
          case ce:
            f = 9;
            break e;
          case se:
            f = 11;
            break e;
          case Y:
            f = 14;
            break e;
          case Z:
            f = 16, i = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = It(f, n, t, s), t.elementType = e, t.type = i, t.lanes = l, t;
  }
  function Vn(e, t, n, i) {
    return e = It(7, e, i, t), e.lanes = n, e;
  }
  function Oo(e, t, n, i) {
    return e = It(22, e, i, t), e.elementType = J, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Is(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function Bs(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Ih(e, t, n, i, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = da(0), this.expirationTimes = da(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = da(0), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function js(e, t, n, i, s, l, f, S, C) {
    return e = new Ih(e, t, n, S, C), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = It(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Za(l), e;
  }
  function Bh(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: E, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
  }
  function ld(e) {
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
      if (xt(n)) return Au(e, n, t);
    }
    return t;
  }
  function ud(e, t, n, i, s, l, f, S, C) {
    return e = js(n, i, !0, e, s, l, f, S, C), e.context = ld(null), n = e.current, i = _t(), s = Rn(n), l = an(i, s), l.callback = t ?? null, Sn(n, l, s), e.current.lanes = s, Lr(e, s, i), kt(e, i), e;
  }
  function Po(e, t, n, i) {
    var s = t.current, l = _t(), f = Rn(s);
    return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = an(l, f), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = Sn(s, t, f), e !== null && (Vt(e, s, f, l), ao(e, s, f)), f;
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
  function cd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fs(e, t) {
    cd(e, t), (e = e.alternate) && cd(e, t);
  }
  function jh() {
    return null;
  }
  var dd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function qs(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = qs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Po(e, t, null, null);
  }, Do.prototype.unmount = qs.prototype.unmount = function() {
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
      var t = Yl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++) ;
      mn.splice(n, 0, e), n === 0 && Kl(e);
    }
  };
  function Hs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Mo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fd() {
  }
  function Fh(e, t, n, i, s) {
    if (s) {
      if (typeof i == "function") {
        var l = i;
        i = function() {
          var j = Lo(f);
          l.call(j);
        };
      }
      var f = ud(t, i, e, 0, null, !1, !1, "", fd);
      return e._reactRootContainer = f, e[en] = f.current, Ur(e.nodeType === 8 ? e.parentNode : e), Wn(), f;
    }
    for (; s = e.lastChild; ) e.removeChild(s);
    if (typeof i == "function") {
      var S = i;
      i = function() {
        var j = Lo(C);
        S.call(j);
      };
    }
    var C = js(e, 0, !1, null, null, !1, !1, "", fd);
    return e._reactRootContainer = C, e[en] = C.current, Ur(e.nodeType === 8 ? e.parentNode : e), Wn(function() {
      Po(t, C, n, i);
    }), C;
  }
  function To(e, t, n, i, s) {
    var l = n._reactRootContainer;
    if (l) {
      var f = l;
      if (typeof s == "function") {
        var S = s;
        s = function() {
          var C = Lo(f);
          S.call(C);
        };
      }
      Po(t, f, e, s);
    } else f = Fh(n, t, e, s, i);
    return Lo(f);
  }
  Vl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Pr(t.pendingLanes);
          n !== 0 && (fa(t, n | 1), kt(t, nt()), !(Be & 6) && (yr = nt() + 500, bn()));
        }
        break;
      case 13:
        Wn(function() {
          var i = on(e, 1);
          if (i !== null) {
            var s = _t();
            Vt(i, e, 1, s);
          }
        }), Fs(e, 1);
    }
  }, pa = function(e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var n = _t();
        Vt(t, e, 134217728, n);
      }
      Fs(e, 134217728);
    }
  }, Gl = function(e) {
    if (e.tag === 13) {
      var t = Rn(e), n = on(e, t);
      if (n !== null) {
        var i = _t();
        Vt(n, e, t, i);
      }
      Fs(e, t);
    }
  }, Yl = function() {
    return He;
  }, Xl = function(e, t) {
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
  }, Ri = Ms, Tl = Wn;
  var qh = { usingClientEntryPoint: !1, Events: [Yr, ir, Qi, Cr, Qn, Ms] }, li = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hh = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: g.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: li.findFiberByHostInstance || jh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber) try {
      Li = No.inject(Hh), Yt = No;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qh, Ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hs(t)) throw Error(a(200));
    return Bh(e, t, null, n);
  }, Ct.createRoot = function(e, t) {
    if (!Hs(e)) throw Error(a(299));
    var n = !1, i = "", s = dd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = js(e, 1, !1, null, null, n, !1, i, s), e[en] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new qs(t);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Bl(t), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return Wn(e);
  }, Ct.hydrate = function(e, t, n) {
    if (!Mo(t)) throw Error(a(200));
    return To(null, e, t, !0, n);
  }, Ct.hydrateRoot = function(e, t, n) {
    if (!Hs(e)) throw Error(a(405));
    var i = n != null && n.hydratedSources || null, s = !1, l = "", f = dd;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = ud(t, null, e, 1, n ?? null, s, !1, l, f), e[en] = t.current, Ur(e), i) for (e = 0; e < i.length; e++) n = i[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
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
  }, Ct.unstable_batchedUpdates = Ms, Ct.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!Mo(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return To(e, t, n, !1, i);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var _d;
function Xo() {
  if (_d) return Us.exports;
  _d = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), Us.exports = Qh(), Us.exports;
}
var bd;
function Kh() {
  if (bd) return Ao;
  bd = 1;
  var r = Xo();
  return Ao.createRoot = r.createRoot, Ao.hydrateRoot = r.hydrateRoot, Ao;
}
var Zh = Kh();
const Jh = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', em = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", tm = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var ht = Rt(), Ys = { exports: {} }, ci = {}, bi = { exports: {} }, nm = bi.exports, xd;
function kl() {
  return xd || (xd = 1, function(r, o) {
    (function(a, u) {
      u(o);
    })(nm, function(a) {
      function u(ee) {
        return function(ke, Oe, Me, Fe, Ue, tt, R) {
          return ee(ke, Oe, R);
        };
      }
      function c(ee) {
        return function(ke, Oe, Me, Fe) {
          if (!ke || !Oe || typeof ke != "object" || typeof Oe != "object")
            return ee(ke, Oe, Me, Fe);
          var Ue = Fe.get(ke), tt = Fe.get(Oe);
          if (Ue && tt)
            return Ue === Oe && tt === ke;
          Fe.set(ke, Oe), Fe.set(Oe, ke);
          var R = ee(ke, Oe, Me, Fe);
          return Fe.delete(ke), Fe.delete(Oe), R;
        };
      }
      function p(ee, pe) {
        var ke = {};
        for (var Oe in ee)
          ke[Oe] = ee[Oe];
        for (var Oe in pe)
          ke[Oe] = pe[Oe];
        return ke;
      }
      function y(ee) {
        return ee.constructor === Object || ee.constructor == null;
      }
      function h(ee) {
        return typeof ee.then == "function";
      }
      function m(ee, pe) {
        return ee === pe || ee !== ee && pe !== pe;
      }
      var x = "[object Arguments]", w = "[object Boolean]", P = "[object Date]", O = "[object RegExp]", X = "[object Map]", V = "[object Number]", F = "[object Object]", z = "[object Set]", b = "[object String]", d = Object.prototype.toString;
      function v(ee) {
        var pe = ee.areArraysEqual, ke = ee.areDatesEqual, Oe = ee.areMapsEqual, Me = ee.areObjectsEqual, Fe = ee.areRegExpsEqual, Ue = ee.areSetsEqual, tt = ee.createIsNestedEqual, R = tt(T);
        function T(N, G, ue) {
          if (N === G)
            return !0;
          if (!N || !G || typeof N != "object" || typeof G != "object")
            return N !== N && G !== G;
          if (y(N) && y(G))
            return Me(N, G, R, ue);
          var ve = Array.isArray(N), Ee = Array.isArray(G);
          if (ve || Ee)
            return ve === Ee && pe(N, G, R, ue);
          var ze = d.call(N);
          return ze !== d.call(G) ? !1 : ze === P ? ke(N, G, R, ue) : ze === O ? Fe(N, G, R, ue) : ze === X ? Oe(N, G, R, ue) : ze === z ? Ue(N, G, R, ue) : ze === F || ze === x ? h(N) || h(G) ? !1 : Me(N, G, R, ue) : ze === w || ze === V || ze === b ? m(N.valueOf(), G.valueOf()) : !1;
        }
        return T;
      }
      function g(ee, pe, ke, Oe) {
        var Me = ee.length;
        if (pe.length !== Me)
          return !1;
        for (; Me-- > 0; )
          if (!ke(ee[Me], pe[Me], Me, Me, ee, pe, Oe))
            return !1;
        return !0;
      }
      var _ = c(g);
      function E(ee, pe) {
        return m(ee.valueOf(), pe.valueOf());
      }
      function M(ee, pe, ke, Oe) {
        var Me = ee.size === pe.size;
        if (!Me)
          return !1;
        if (!ee.size)
          return !0;
        var Fe = {}, Ue = 0;
        return ee.forEach(function(tt, R) {
          if (Me) {
            var T = !1, N = 0;
            pe.forEach(function(G, ue) {
              !T && !Fe[N] && (T = ke(R, ue, Ue, N, ee, pe, Oe) && ke(tt, G, R, ue, ee, pe, Oe)) && (Fe[N] = !0), N++;
            }), Ue++, Me = T;
          }
        }), Me;
      }
      var q = c(M), W = "_owner", te = Object.prototype.hasOwnProperty;
      function ce(ee, pe, ke, Oe) {
        var Me = Object.keys(ee), Fe = Me.length;
        if (Object.keys(pe).length !== Fe)
          return !1;
        for (var Ue; Fe-- > 0; ) {
          if (Ue = Me[Fe], Ue === W) {
            var tt = !!ee.$$typeof, R = !!pe.$$typeof;
            if ((tt || R) && tt !== R)
              return !1;
          }
          if (!te.call(pe, Ue) || !ke(ee[Ue], pe[Ue], Ue, Ue, ee, pe, Oe))
            return !1;
        }
        return !0;
      }
      var se = c(ce);
      function oe(ee, pe) {
        return ee.source === pe.source && ee.flags === pe.flags;
      }
      function fe(ee, pe, ke, Oe) {
        var Me = ee.size === pe.size;
        if (!Me)
          return !1;
        if (!ee.size)
          return !0;
        var Fe = {};
        return ee.forEach(function(Ue, tt) {
          if (Me) {
            var R = !1, T = 0;
            pe.forEach(function(N, G) {
              !R && !Fe[T] && (R = ke(Ue, N, tt, G, ee, pe, Oe)) && (Fe[T] = !0), T++;
            }), Me = R;
          }
        }), Me;
      }
      var Y = c(fe), Z = Object.freeze({
        areArraysEqual: g,
        areDatesEqual: E,
        areMapsEqual: M,
        areObjectsEqual: ce,
        areRegExpsEqual: oe,
        areSetsEqual: fe,
        createIsNestedEqual: u
      }), J = Object.freeze({
        areArraysEqual: _,
        areDatesEqual: E,
        areMapsEqual: q,
        areObjectsEqual: se,
        areRegExpsEqual: oe,
        areSetsEqual: Y,
        createIsNestedEqual: u
      }), U = v(Z);
      function le(ee, pe) {
        return U(ee, pe, void 0);
      }
      var ne = v(p(Z, { createIsNestedEqual: function() {
        return m;
      } }));
      function L(ee, pe) {
        return ne(ee, pe, void 0);
      }
      var H = v(J);
      function _e(ee, pe) {
        return H(ee, pe, /* @__PURE__ */ new WeakMap());
      }
      var Se = v(p(J, {
        createIsNestedEqual: function() {
          return m;
        }
      }));
      function Re(ee, pe) {
        return Se(ee, pe, /* @__PURE__ */ new WeakMap());
      }
      function Pe(ee) {
        return v(p(Z, ee(Z)));
      }
      function Ie(ee) {
        var pe = v(p(J, ee(J)));
        return function(ke, Oe, Me) {
          return Me === void 0 && (Me = /* @__PURE__ */ new WeakMap()), pe(ke, Oe, Me);
        };
      }
      a.circularDeepEqual = _e, a.circularShallowEqual = Re, a.createCustomCircularEqual = Ie, a.createCustomEqual = Pe, a.deepEqual = le, a.sameValueZeroEqual = m, a.shallowEqual = L, Object.defineProperty(a, "__esModule", { value: !0 });
    });
  }(bi, bi.exports)), bi.exports;
}
var Io = { exports: {} }, Sd;
function na() {
  if (Sd) return Io.exports;
  Sd = 1;
  function r(a) {
    var u, c, p = "";
    if (typeof a == "string" || typeof a == "number") p += a;
    else if (typeof a == "object") if (Array.isArray(a)) {
      var y = a.length;
      for (u = 0; u < y; u++) a[u] && (c = r(a[u])) && (p && (p += " "), p += c);
    } else for (c in a) a[c] && (p && (p += " "), p += c);
    return p;
  }
  function o() {
    for (var a, u, c = 0, p = "", y = arguments.length; c < y; c++) (a = arguments[c]) && (u = r(a)) && (p && (p += " "), p += u);
    return p;
  }
  return Io.exports = o, Io.exports.clsx = o, Io.exports;
}
var Ae = {}, Xs, Ed;
function rm() {
  return Ed || (Ed = 1, Xs = function(o, a, u) {
    return o === a ? !0 : o.className === a.className && u(o.style, a.style) && o.width === a.width && o.autoSize === a.autoSize && o.cols === a.cols && o.draggableCancel === a.draggableCancel && o.draggableHandle === a.draggableHandle && u(o.verticalCompact, a.verticalCompact) && u(o.compactType, a.compactType) && u(o.layout, a.layout) && u(o.margin, a.margin) && u(o.containerPadding, a.containerPadding) && o.rowHeight === a.rowHeight && o.maxRows === a.maxRows && o.isBounded === a.isBounded && o.isDraggable === a.isDraggable && o.isResizable === a.isResizable && o.allowOverlap === a.allowOverlap && o.preventCollision === a.preventCollision && o.useCSSTransforms === a.useCSSTransforms && o.transformScale === a.transformScale && o.isDroppable === a.isDroppable && u(o.resizeHandles, a.resizeHandles) && u(o.resizeHandle, a.resizeHandle) && o.onLayoutChange === a.onLayoutChange && o.onDragStart === a.onDragStart && o.onDrag === a.onDrag && o.onDragStop === a.onDragStop && o.onResizeStart === a.onResizeStart && o.onResize === a.onResize && o.onResizeStop === a.onResizeStop && o.onDrop === a.onDrop && u(o.droppingItem, a.droppingItem) && u(o.innerRef, a.innerRef);
  }), Xs;
}
var kd;
function Er() {
  if (kd) return Ae;
  kd = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.bottom = m, Ae.childrenEqual = X, Ae.cloneLayout = x, Ae.cloneLayoutItem = O, Ae.collides = F, Ae.compact = z, Ae.compactItem = v, Ae.compactType = Fe, Ae.correctBounds = g, Ae.fastPositionEqual = V, Ae.fastRGLPropsEqual = void 0, Ae.getAllCollisions = M, Ae.getFirstCollision = E, Ae.getLayoutItem = _, Ae.getStatics = q, Ae.modifyLayout = w, Ae.moveElement = W, Ae.moveElementAwayFromCollision = te, Ae.noop = void 0, Ae.perc = ce, Ae.resizeItemInDirection = Re, Ae.setTopLeft = Ie, Ae.setTransform = Pe, Ae.sortLayoutItems = ee, Ae.sortLayoutItemsByColRow = ke, Ae.sortLayoutItemsByRowCol = pe, Ae.synchronizeLayoutWithChildren = Oe, Ae.validateLayout = Me, Ae.withLayoutItem = P;
  var r = /* @__PURE__ */ kl(), o = a(Rt());
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
        p(R, G, N[G]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(N)) : u(Object(N)).forEach(function(G) {
        Object.defineProperty(R, G, Object.getOwnPropertyDescriptor(N, G));
      });
    }
    return R;
  }
  function p(R, T, N) {
    return (T = y(T)) in R ? Object.defineProperty(R, T, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : R[T] = N, R;
  }
  function y(R) {
    var T = h(R, "string");
    return typeof T == "symbol" ? T : T + "";
  }
  function h(R, T) {
    if (typeof R != "object" || !R) return R;
    var N = R[Symbol.toPrimitive];
    if (N !== void 0) {
      var G = N.call(R, T);
      if (typeof G != "object") return G;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (T === "string" ? String : Number)(R);
  }
  function m(R) {
    let T = 0, N;
    for (let G = 0, ue = R.length; G < ue; G++)
      N = R[G].y + R[G].h, N > T && (T = N);
    return T;
  }
  function x(R) {
    const T = Array(R.length);
    for (let N = 0, G = R.length; N < G; N++)
      T[N] = O(R[N]);
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
    return G ? (G = N(O(G)), R = w(R, G), [R, G]) : [R, null];
  }
  function O(R) {
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
  function X(R, T) {
    return (0, r.deepEqual)(o.default.Children.map(R, (N) => N?.key), o.default.Children.map(T, (N) => N?.key)) && (0, r.deepEqual)(o.default.Children.map(R, (N) => N?.props["data-grid"]), o.default.Children.map(T, (N) => N?.props["data-grid"]));
  }
  Ae.fastRGLPropsEqual = rm();
  function V(R, T) {
    return R.left === T.left && R.top === T.top && R.width === T.width && R.height === T.height;
  }
  function F(R, T) {
    return !(R.i === T.i || R.x + R.w <= T.x || R.x >= T.x + T.w || R.y + R.h <= T.y || R.y >= T.y + T.h);
  }
  function z(R, T, N, G) {
    const ue = q(R);
    let ve = m(ue);
    const Ee = ee(R, T), ze = Array(R.length);
    for (let Le = 0, We = Ee.length; Le < We; Le++) {
      let Xe = O(Ee[Le]);
      Xe.static || (Xe = v(ue, Xe, T, N, Ee, G, ve), ve = Math.max(ve, Xe.y + Xe.h), ue.push(Xe)), ze[R.indexOf(Ee[Le])] = Xe, Xe.moved = !1;
    }
    return ze;
  }
  const b = {
    x: "w",
    y: "h"
  };
  function d(R, T, N, G) {
    const ue = b[G];
    T[G] += 1;
    const ve = R.map((Ee) => Ee.i).indexOf(T.i);
    for (let Ee = ve + 1; Ee < R.length; Ee++) {
      const ze = R[Ee];
      if (!ze.static) {
        if (ze.y > T.y + T.h) break;
        F(T, ze) && d(R, ze, N + T[ue], G);
      }
    }
    T[G] = N;
  }
  function v(R, T, N, G, ue, ve, Ee) {
    const ze = N === "vertical", Le = N === "horizontal";
    if (ze)
      for (typeof Ee == "number" ? T.y = Math.min(Ee, T.y) : T.y = Math.min(m(R), T.y); T.y > 0 && !E(R, T); )
        T.y--;
    else if (Le)
      for (; T.x > 0 && !E(R, T); )
        T.x--;
    let We;
    for (; (We = E(R, T)) && !(N === null && ve); )
      if (Le ? d(ue, T, We.x + We.w, "x") : d(ue, T, We.y + We.h, "y"), Le && T.x + T.w > G)
        for (T.x = G - T.w, T.y++; T.x > 0 && !E(R, T); )
          T.x--;
    return T.y = Math.max(T.y, 0), T.x = Math.max(T.x, 0), T;
  }
  function g(R, T) {
    const N = q(R);
    for (let G = 0, ue = R.length; G < ue; G++) {
      const ve = R[G];
      if (ve.x + ve.w > T.cols && (ve.x = T.cols - ve.w), ve.x < 0 && (ve.x = 0, ve.w = T.cols), !ve.static) N.push(ve);
      else
        for (; E(N, ve); )
          ve.y++;
    }
    return R;
  }
  function _(R, T) {
    for (let N = 0, G = R.length; N < G; N++)
      if (R[N].i === T) return R[N];
  }
  function E(R, T) {
    for (let N = 0, G = R.length; N < G; N++)
      if (F(R[N], T)) return R[N];
  }
  function M(R, T) {
    return R.filter((N) => F(N, T));
  }
  function q(R) {
    return R.filter((T) => T.static);
  }
  function W(R, T, N, G, ue, ve, Ee, ze, Le) {
    if (T.static && T.isDraggable !== !0 || T.y === G && T.x === N) return R;
    "Moving element ".concat(T.i, " to [").concat(String(N), ",").concat(String(G), "] from [").concat(T.x, ",").concat(T.y, "]");
    const We = T.x, Xe = T.y;
    typeof N == "number" && (T.x = N), typeof G == "number" && (T.y = G), T.moved = !0;
    let st = ee(R, Ee);
    (Ee === "vertical" && typeof G == "number" ? Xe >= G : Ee === "horizontal" && typeof N == "number" ? We >= N : !1) && (st = st.reverse());
    const I = M(st, T), $ = I.length > 0;
    if ($ && Le)
      return x(R);
    if ($ && ve)
      return "Collision prevented on ".concat(T.i, ", reverting."), T.x = We, T.y = Xe, T.moved = !1, R;
    for (let ie = 0, de = I.length; ie < de; ie++) {
      const Te = I[ie];
      "Resolving collision between ".concat(T.i, " at [").concat(T.x, ",").concat(T.y, "] and ").concat(Te.i, " at [").concat(Te.x, ",").concat(Te.y, "]"), !Te.moved && (Te.static ? R = te(R, Te, T, ue, Ee) : R = te(R, T, Te, ue, Ee));
    }
    return R;
  }
  function te(R, T, N, G, ue, ve) {
    const Ee = ue === "horizontal", ze = ue === "vertical", Le = T.static;
    if (G) {
      G = !1;
      const st = {
        x: Ee ? Math.max(T.x - N.w, 0) : N.x,
        y: ze ? Math.max(T.y - N.h, 0) : N.y,
        w: N.w,
        h: N.h,
        i: "-1"
      }, k = E(R, st), I = k && k.y + k.h > T.y, $ = k && T.x + T.w > k.x;
      if (k) {
        if (I && ze)
          return W(R, N, void 0, N.y + 1, G, Le, ue);
        if (I && ue == null)
          return T.y = N.y, N.y = N.y + N.h, R;
        if ($ && Ee)
          return W(R, T, N.x, void 0, G, Le, ue);
      } else return "Doing reverse collision on ".concat(N.i, " up to [").concat(st.x, ",").concat(st.y, "]."), W(R, N, Ee ? st.x : void 0, ze ? st.y : void 0, G, Le, ue);
    }
    const We = Ee ? N.x + 1 : void 0, Xe = ze ? N.y + 1 : void 0;
    return We == null && Xe == null ? R : W(R, N, Ee ? N.x + 1 : void 0, ze ? N.y + 1 : void 0, G, Le, ue);
  }
  function ce(R) {
    return R * 100 + "%";
  }
  const se = (R, T, N, G) => R + N > G ? T : N, oe = (R, T, N) => R < 0 ? T : N, fe = (R) => Math.max(0, R), Y = (R) => Math.max(0, R), Z = (R, T, N) => {
    let {
      left: G,
      height: ue,
      width: ve
    } = T;
    const Ee = R.top - (ue - R.height);
    return {
      left: G,
      width: ve,
      height: oe(Ee, R.height, ue),
      top: Y(Ee)
    };
  }, J = (R, T, N) => {
    let {
      top: G,
      left: ue,
      height: ve,
      width: Ee
    } = T;
    return {
      top: G,
      height: ve,
      width: se(R.left, R.width, Ee, N),
      left: fe(ue)
    };
  }, U = (R, T, N) => {
    let {
      top: G,
      height: ue,
      width: ve
    } = T;
    const Ee = R.left - (ve - R.width);
    return {
      height: ue,
      width: Ee < 0 ? R.width : se(R.left, R.width, ve, N),
      top: Y(G),
      left: fe(Ee)
    };
  }, le = (R, T, N) => {
    let {
      top: G,
      left: ue,
      height: ve,
      width: Ee
    } = T;
    return {
      width: Ee,
      left: ue,
      height: oe(G, R.height, ve),
      top: Y(G)
    };
  }, Se = {
    n: Z,
    ne: function() {
      return Z(arguments.length <= 0 ? void 0 : arguments[0], J(...arguments));
    },
    e: J,
    se: function() {
      return le(arguments.length <= 0 ? void 0 : arguments[0], J(...arguments));
    },
    s: le,
    sw: function() {
      return le(arguments.length <= 0 ? void 0 : arguments[0], U(...arguments));
    },
    w: U,
    nw: function() {
      return Z(arguments.length <= 0 ? void 0 : arguments[0], U(...arguments));
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
  function ee(R, T) {
    return T === "horizontal" ? ke(R) : T === "vertical" ? pe(R) : R;
  }
  function pe(R) {
    return R.slice(0).sort(function(T, N) {
      return T.y > N.y || T.y === N.y && T.x > N.x ? 1 : T.y === N.y && T.x === N.x ? 0 : -1;
    });
  }
  function ke(R) {
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
      Le && We == null ? ve.push(O(Le)) : We ? ve.push(O(c(c({}, We), {}, {
        i: ze.key
      }))) : ve.push(O({
        w: 1,
        h: 1,
        x: 0,
        y: m(ve),
        i: String(ze.key)
      }));
    });
    const Ee = g(ve, {
      cols: N
    });
    return ue ? Ee : z(Ee, G, N);
  }
  function Me(R) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const N = ["x", "y", "w", "h"];
    if (!Array.isArray(R)) throw new Error(T + " must be an array!");
    for (let G = 0, ue = R.length; G < ue; G++) {
      const ve = R[G];
      for (let Ee = 0; Ee < N.length; Ee++) {
        const ze = N[Ee], Le = ve[ze];
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
var un = {}, Cd;
function Cl() {
  if (Cd) return un;
  Cd = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.calcGridColWidth = r, un.calcGridItemPosition = a, un.calcGridItemWHPx = o, un.calcWH = c, un.calcXY = u, un.clamp = p;
  function r(y) {
    const {
      margin: h,
      containerPadding: m,
      containerWidth: x,
      cols: w
    } = y;
    return (x - h[0] * (w - 1) - m[0] * 2) / w;
  }
  function o(y, h, m) {
    return Number.isFinite(y) ? Math.round(h * y + Math.max(0, y - 1) * m) : y;
  }
  function a(y, h, m, x, w, P) {
    const {
      margin: O,
      containerPadding: X,
      rowHeight: V
    } = y, F = r(y), z = {};
    return P && P.resizing ? (z.width = Math.round(P.resizing.width), z.height = Math.round(P.resizing.height)) : (z.width = o(x, F, O[0]), z.height = o(w, V, O[1])), P && P.dragging ? (z.top = Math.round(P.dragging.top), z.left = Math.round(P.dragging.left)) : P && P.resizing && typeof P.resizing.top == "number" && typeof P.resizing.left == "number" ? (z.top = Math.round(P.resizing.top), z.left = Math.round(P.resizing.left)) : (z.top = Math.round((V + O[1]) * m + X[1]), z.left = Math.round((F + O[0]) * h + X[0])), z;
  }
  function u(y, h, m, x, w) {
    const {
      margin: P,
      containerPadding: O,
      cols: X,
      rowHeight: V,
      maxRows: F
    } = y, z = r(y);
    let b = Math.round((m - O[0]) / (z + P[0])), d = Math.round((h - O[1]) / (V + P[1]));
    return b = p(b, 0, X - x), d = p(d, 0, F - w), {
      x: b,
      y: d
    };
  }
  function c(y, h, m, x, w, P) {
    const {
      margin: O,
      maxRows: X,
      cols: V,
      rowHeight: F
    } = y, z = r(y);
    let b = Math.round((h + O[0]) / (z + O[0])), d = Math.round((m + O[1]) / (F + O[1])), v = p(b, 0, V - x), g = p(d, 0, X - w);
    return ["sw", "w", "nw"].indexOf(P) !== -1 && (v = p(b, 0, V)), ["nw", "n", "ne"].indexOf(P) !== -1 && (g = p(d, 0, X)), {
      w: v,
      h: g
    };
  }
  function p(y, h, m) {
    return Math.max(Math.min(y, m), h);
  }
  return un;
}
var di = {}, Qs = { exports: {} }, Ks, Rd;
function im() {
  if (Rd) return Ks;
  Rd = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ks = r, Ks;
}
var Zs, zd;
function om() {
  if (zd) return Zs;
  zd = 1;
  var r = /* @__PURE__ */ im();
  function o() {
  }
  function a() {
  }
  return a.resetWarningCache = o, Zs = function() {
    function u(y, h, m, x, w, P) {
      if (P !== r) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    u.isRequired = u;
    function c() {
      return u;
    }
    var p = {
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
    return p.PropTypes = p, p;
  }, Zs;
}
var Od;
function Ln() {
  return Od || (Od = 1, Qs.exports = /* @__PURE__ */ om()()), Qs.exports;
}
var fi = { exports: {} }, Js, Pd;
function am() {
  if (Pd) return Js;
  Pd = 1;
  var r = Object.create, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyNames, c = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty, y = (k, I) => {
    for (var $ in I)
      o(k, $, { get: I[$], enumerable: !0 });
  }, h = (k, I, $, ie) => {
    if (I && typeof I == "object" || typeof I == "function")
      for (let de of u(I))
        !p.call(k, de) && de !== $ && o(k, de, { get: () => I[de], enumerable: !(ie = a(I, de)) || ie.enumerable });
    return k;
  }, m = (k, I, $) => ($ = k != null ? r(c(k)) : {}, h(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !k || !k.__esModule ? o($, "default", { value: k, enumerable: !0 }) : $,
    k
  )), x = (k) => h(o({}, "__esModule", { value: !0 }), k), w = {};
  y(w, {
    DraggableCore: () => Xe,
    default: () => st
  }), Js = x(w);
  var P = m(Rt()), O = m(/* @__PURE__ */ Ln()), X = m(Xo()), V = na();
  function F(k, I) {
    for (let $ = 0, ie = k.length; $ < ie; $++)
      if (I.apply(I, [k[$], $, k])) return k[$];
  }
  function z(k) {
    return typeof k == "function" || Object.prototype.toString.call(k) === "[object Function]";
  }
  function b(k) {
    return typeof k == "number" && !isNaN(k);
  }
  function d(k) {
    return parseInt(k, 10);
  }
  function v(k, I, $) {
    if (k[I])
      return new Error(`Invalid prop ${I} passed to ${$} - do not set this, set it on the child.`);
  }
  var g = ["Moz", "Webkit", "O", "ms"];
  function _(k = "transform") {
    var I, $;
    if (typeof window > "u") return "";
    const ie = ($ = (I = window.document) == null ? void 0 : I.documentElement) == null ? void 0 : $.style;
    if (!ie || k in ie) return "";
    for (let de = 0; de < g.length; de++)
      if (E(k, g[de]) in ie) return g[de];
    return "";
  }
  function E(k, I) {
    return I ? `${I}${M(k)}` : k;
  }
  function M(k) {
    let I = "", $ = !0;
    for (let ie = 0; ie < k.length; ie++)
      $ ? (I += k[ie].toUpperCase(), $ = !1) : k[ie] === "-" ? $ = !0 : I += k[ie];
    return I;
  }
  var q = _(), W = "";
  function te(k, I) {
    var $;
    W || (W = ($ = F([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(de) {
      return z(k[de]);
    })) != null ? $ : "");
    const ie = k[W];
    return z(ie) ? !!ie.call(k, I) : !1;
  }
  function ce(k, I, $) {
    let ie = k;
    do {
      if (te(ie, I)) return !0;
      if (ie === $) return !1;
      ie = ie.parentNode;
    } while (ie);
    return !1;
  }
  function se(k, I, $, ie) {
    if (!k) return;
    const de = { capture: !0, ...ie }, Te = $;
    k.addEventListener ? k.addEventListener(I, Te, de) : k.attachEvent ? k.attachEvent("on" + I, Te) : k["on" + I] = Te;
  }
  function oe(k, I, $, ie) {
    if (!k) return;
    const de = { capture: !0, ...ie }, Te = $;
    k.removeEventListener ? k.removeEventListener(I, Te, de) : k.detachEvent ? k.detachEvent("on" + I, Te) : k["on" + I] = null;
  }
  function fe(k) {
    let I = k.clientHeight;
    const $ = k.ownerDocument.defaultView.getComputedStyle(k);
    return I += d($.borderTopWidth), I += d($.borderBottomWidth), I;
  }
  function Y(k) {
    let I = k.clientWidth;
    const $ = k.ownerDocument.defaultView.getComputedStyle(k);
    return I += d($.borderLeftWidth), I += d($.borderRightWidth), I;
  }
  function Z(k) {
    let I = k.clientHeight;
    const $ = k.ownerDocument.defaultView.getComputedStyle(k);
    return I -= d($.paddingTop), I -= d($.paddingBottom), I;
  }
  function J(k) {
    let I = k.clientWidth;
    const $ = k.ownerDocument.defaultView.getComputedStyle(k);
    return I -= d($.paddingLeft), I -= d($.paddingRight), I;
  }
  function U(k, I, $) {
    const de = I === I.ownerDocument.body ? { left: 0, top: 0 } : I.getBoundingClientRect(), Te = (k.clientX + I.scrollLeft - de.left) / $, Ne = (k.clientY + I.scrollTop - de.top) / $;
    return { x: Te, y: Ne };
  }
  function le(k, I) {
    const $ = L(k, I, "px");
    return { [E("transform", q)]: $ };
  }
  function ne(k, I) {
    return L(k, I, "");
  }
  function L({ x: k, y: I }, $, ie) {
    let de = `translate(${k}${ie},${I}${ie})`;
    if ($) {
      const Te = `${typeof $.x == "string" ? $.x : $.x + ie}`, Ne = `${typeof $.y == "string" ? $.y : $.y + ie}`;
      de = `translate(${Te}, ${Ne})` + de;
    }
    return de;
  }
  function H(k, I) {
    return k.targetTouches && F(k.targetTouches, ($) => I === $.identifier) || k.changedTouches && F(k.changedTouches, ($) => I === $.identifier);
  }
  function _e(k) {
    if (k.targetTouches && k.targetTouches[0]) return k.targetTouches[0].identifier;
    if (k.changedTouches && k.changedTouches[0]) return k.changedTouches[0].identifier;
  }
  function Se() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Re(k, I) {
    if (!k) return;
    let $ = k.getElementById("react-draggable-style-el");
    if (!$) {
      $ = k.createElement("style"), $.type = "text/css", $.id = "react-draggable-style-el";
      const ie = I ?? Se();
      ie && $.setAttribute("nonce", ie), $.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, $.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, k.getElementsByTagName("head")[0].appendChild($);
    }
    k.body && ee(k.body, "react-draggable-transparent-selection");
  }
  function Pe(k) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Ie(k);
    }) : Ie(k);
  }
  function Ie(k) {
    if (k)
      try {
        k.body && pe(k.body, "react-draggable-transparent-selection");
        const I = k.selection;
        if (I)
          I.empty();
        else {
          const $ = (k.defaultView || window).getSelection();
          $ && $.type !== "Caret" && $.removeAllRanges();
        }
      } catch {
      }
  }
  function ee(k, I) {
    k.classList ? k.classList.add(I) : k.className.match(new RegExp(`(?:^|\\s)${I}(?!\\S)`)) || (k.className += ` ${I}`);
  }
  function pe(k, I) {
    k.classList ? k.classList.remove(I) : k.className = k.className.replace(new RegExp(`(?:^|\\s)${I}(?!\\S)`, "g"), "");
  }
  function ke(k, I, $) {
    if (!k.props.bounds) return [I, $];
    let { bounds: ie } = k.props;
    ie = typeof ie == "string" ? ie : T(ie);
    const de = N(k);
    if (typeof ie == "string") {
      const { ownerDocument: Te } = de, Ne = Te.defaultView;
      if (!Ne)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Qe;
      if (ie === "parent" ? Qe = de.parentNode : Qe = de.getRootNode().querySelector(ie), !(Qe instanceof Ne.HTMLElement))
        throw new Error('Bounds selector "' + ie + '" could not find an element.');
      const dt = Qe, jt = Ne.getComputedStyle(de), Gt = Ne.getComputedStyle(dt);
      ie = {
        left: -de.offsetLeft + d(Gt.paddingLeft) + d(jt.marginLeft),
        top: -de.offsetTop + d(Gt.paddingTop) + d(jt.marginTop),
        right: J(dt) - Y(de) - de.offsetLeft + d(Gt.paddingRight) - d(jt.marginRight),
        bottom: Z(dt) - fe(de) - de.offsetTop + d(Gt.paddingBottom) - d(jt.marginBottom)
      };
    }
    return b(ie.right) && (I = Math.min(I, ie.right)), b(ie.bottom) && ($ = Math.min($, ie.bottom)), b(ie.left) && (I = Math.max(I, ie.left)), b(ie.top) && ($ = Math.max($, ie.top)), [I, $];
  }
  function Oe(k, I, $) {
    const ie = Math.round(I / k[0]) * k[0], de = Math.round($ / k[1]) * k[1];
    return [ie, de];
  }
  function Me(k) {
    return k.props.axis === "both" || k.props.axis === "x";
  }
  function Fe(k) {
    return k.props.axis === "both" || k.props.axis === "y";
  }
  function Ue(k, I, $) {
    const ie = typeof I == "number" ? H(k, I) : null;
    if (typeof I == "number" && !ie) return null;
    const de = N($), Te = $.props.offsetParent || de.offsetParent || de.ownerDocument.body;
    return U(ie || k, Te, $.props.scale);
  }
  function tt(k, I, $) {
    const ie = !b(k.lastX), de = N(k);
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
      deltaX: I - k.lastX,
      deltaY: $ - k.lastY,
      lastX: k.lastX,
      lastY: k.lastY,
      x: I,
      y: $
    };
  }
  function R(k, I) {
    const $ = k.props.scale;
    return {
      node: I.node,
      x: k.state.x + I.deltaX / $,
      y: k.state.y + I.deltaY / $,
      deltaX: I.deltaX / $,
      deltaY: I.deltaY / $,
      lastX: k.state.x,
      lastY: k.state.y
    };
  }
  function T(k) {
    return {
      left: k.left,
      top: k.top,
      right: k.right,
      bottom: k.bottom
    };
  }
  function N(k) {
    const I = k.findDOMNode();
    if (!I)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return I;
  }
  var G = m(Rt()), ue = m(/* @__PURE__ */ Ln()), ve = m(Xo()), Ee = function() {
  }, ze = Ee, Le = {
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
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (k) => {
        if (this.props.onMouseDown(k), !this.props.allowAnyClick && (typeof k.button == "number" && k.button !== 0 || k.ctrlKey)) return !1;
        const I = this.findDOMNode();
        if (!I || !I.ownerDocument || !I.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: $ } = I;
        if (this.props.disabled || !(k.target instanceof $.defaultView.Node) || this.props.handle && !ce(k.target, this.props.handle, I) || this.props.cancel && ce(k.target, this.props.cancel, I))
          return;
        k.type === "touchstart" && !this.props.allowMobileScroll && k.preventDefault();
        const ie = _e(k);
        this.touchIdentifier = ie;
        const de = Ue(k, ie, this);
        if (de == null) return;
        const { x: Te, y: Ne } = de, Qe = tt(this, Te, Ne);
        ze("calling", this.props.onStart), !(this.props.onStart(k, Qe) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Re($, this.props.nonce), this.dragging = !0, this.lastX = Te, this.lastY = Ne, se($, We.move, this.handleDrag), se($, We.stop, this.handleDragStop));
      }, this.handleDrag = (k) => {
        const I = Ue(k, this.touchIdentifier, this);
        if (I == null) return;
        let { x: $, y: ie } = I;
        if (Array.isArray(this.props.grid)) {
          let Ne = $ - this.lastX, Qe = ie - this.lastY;
          if ([Ne, Qe] = Oe(this.props.grid, Ne, Qe), !Ne && !Qe) return;
          $ = this.lastX + Ne, ie = this.lastY + Qe;
        }
        const de = tt(this, $, ie);
        if (this.props.onDrag(k, de) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const Ne = document.createEvent("MouseEvents");
            Ne.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(Ne);
          }
          return;
        }
        this.lastX = $, this.lastY = ie;
      }, this.handleDragStop = (k) => {
        if (!this.dragging) return;
        const I = Ue(k, this.touchIdentifier, this);
        if (I == null) return;
        let { x: $, y: ie } = I;
        if (Array.isArray(this.props.grid)) {
          let Qe = $ - this.lastX || 0, dt = ie - this.lastY || 0;
          [Qe, dt] = Oe(this.props.grid, Qe, dt), $ = this.lastX + Qe, ie = this.lastY + dt;
        }
        const de = tt(this, $, ie);
        if (this.props.onStop(k, de) === !1 || this.mounted === !1) return !1;
        const Ne = this.findDOMNode();
        Ne && this.props.enableUserSelectHack && Pe(Ne.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Ne && (oe(Ne.ownerDocument, We.move, this.handleDrag), oe(Ne.ownerDocument, We.stop, this.handleDragStop));
      }, this.onMouseDown = (k) => (We = Le.mouse, this.handleDragStart(k)), this.onMouseUp = (k) => (We = Le.mouse, this.handleDragStop(k)), this.onTouchStart = (k) => (We = Le.touch, this.handleDragStart(k)), this.onTouchEnd = (k) => (We = Le.touch, this.handleDragStop(k));
    }
    componentDidMount() {
      this.mounted = !0;
      const k = this.findDOMNode();
      k && se(k, Le.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const k = this.findDOMNode();
      if (k) {
        const { ownerDocument: I } = k;
        oe(I, Le.mouse.move, this.handleDrag), oe(I, Le.touch.move, this.handleDrag), oe(I, Le.mouse.stop, this.handleDragStop), oe(I, Le.touch.stop, this.handleDragStop), oe(k, Le.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Pe(I);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var k;
      if ((k = this.props) != null && k.nodeRef)
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
    offsetParent: function(k, I) {
      if (k[I] && k[I].nodeType !== 1)
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
    constructor(k) {
      super(k), this.onDragStart = (I, $) => {
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
          const [dt, jt] = ke(this, de.x, de.y);
          de.x = dt, de.y = jt, de.slackX = this.state.slackX + (Ne - de.x), de.slackY = this.state.slackY + (Qe - de.y), ie.x = de.x, ie.y = de.y, ie.deltaX = de.x - this.state.x, ie.deltaY = de.y - this.state.y;
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
        x: k.position ? k.position.x : k.defaultPosition.x,
        y: k.position ? k.position.y : k.defaultPosition.y,
        prevPropsPosition: { ...k.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, k.position && !(k.onDrag || k.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: k }, { prevPropsPosition: I }) {
      return k && (!I || k.x !== I.x || k.y !== I.y) ? {
        x: k.x,
        y: k.y,
        prevPropsPosition: { ...k }
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
      var k;
      if ((k = this.props) != null && k.nodeRef)
        return this.props.nodeRef.current;
      const I = X.default;
      return typeof I.findDOMNode == "function" ? I.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: k,
        bounds: I,
        children: $,
        defaultPosition: ie,
        defaultClassName: de,
        defaultClassNameDragging: Te,
        defaultClassNameDragged: Ne,
        position: Qe,
        positionOffset: dt,
        scale: jt,
        ...Gt
      } = this.props;
      let Dn = {}, Xn = null;
      const Jt = !!!Qe || this.state.dragging, kr = Qe || ie, Cr = {
        // Set left if horizontal drag is enabled
        x: Me(this) && Jt ? this.state.x : kr.x,
        // Set top if vertical drag is enabled
        y: Fe(this) && Jt ? this.state.y : kr.y
      };
      this.state.isElementSVG ? Xn = ne(Cr, dt) : Dn = le(Cr, dt);
      const Qn = P.Children.only($), Ri = (0, V.clsx)(Qn.props.className || "", de, {
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
    axis: O.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: O.default.oneOfType([
      O.default.shape({
        left: O.default.number,
        right: O.default.number,
        top: O.default.number,
        bottom: O.default.number
      }),
      O.default.string,
      O.default.oneOf([!1])
    ]),
    defaultClassName: O.default.string,
    defaultClassNameDragging: O.default.string,
    defaultClassNameDragged: O.default.string,
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
    defaultPosition: O.default.shape({
      x: O.default.number,
      y: O.default.number
    }),
    positionOffset: O.default.shape({
      x: O.default.oneOfType([O.default.number, O.default.string]),
      y: O.default.oneOfType([O.default.number, O.default.string])
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
    position: O.default.shape({
      x: O.default.number,
      y: O.default.number
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
  }, Js;
}
var Ld;
function Rl() {
  if (Ld) return fi.exports;
  Ld = 1;
  const r = am(), o = r.DraggableCore, a = r.default || r;
  return fi.exports = a, fi.exports.default = a, fi.exports.DraggableCore = o, fi.exports;
}
var pi = { exports: {} }, hi = {}, Bo = {}, Dd;
function sm() {
  if (Dd) return Bo;
  Dd = 1, Bo.__esModule = !0, Bo.cloneElement = h;
  var r = o(Rt());
  function o(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function a(m, x) {
    var w = Object.keys(m);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(m);
      x && (P = P.filter(function(O) {
        return Object.getOwnPropertyDescriptor(m, O).enumerable;
      })), w.push.apply(w, P);
    }
    return w;
  }
  function u(m) {
    for (var x = 1; x < arguments.length; x++) {
      var w = arguments[x] != null ? arguments[x] : {};
      x % 2 ? a(Object(w), !0).forEach(function(P) {
        c(m, P, w[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(w)) : a(Object(w)).forEach(function(P) {
        Object.defineProperty(m, P, Object.getOwnPropertyDescriptor(w, P));
      });
    }
    return m;
  }
  function c(m, x, w) {
    return x = p(x), x in m ? Object.defineProperty(m, x, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : m[x] = w, m;
  }
  function p(m) {
    var x = y(m, "string");
    return typeof x == "symbol" ? x : String(x);
  }
  function y(m, x) {
    if (typeof m != "object" || m === null) return m;
    var w = m[Symbol.toPrimitive];
    if (w !== void 0) {
      var P = w.call(m, x);
      if (typeof P != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(m);
  }
  function h(m, x) {
    return x.style && m.props.style && (x.style = u(u({}, m.props.style), x.style)), x.className && m.props.className && (x.className = m.props.className + " " + x.className), /* @__PURE__ */ r.default.cloneElement(m, x);
  }
  return Bo;
}
var mi = {}, Md;
function Ef() {
  if (Md) return mi;
  Md = 1, mi.__esModule = !0, mi.resizableProps = void 0;
  var r = o(/* @__PURE__ */ Ln());
  Rl();
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
      for (var c = arguments.length, p = new Array(c), y = 0; y < c; y++)
        p[y] = arguments[y];
      var h = p[0];
      if (h.axis === "both" || h.axis === "y") {
        var m;
        return (m = r.default.number).isRequired.apply(m, p);
      }
      return r.default.number.apply(r.default, p);
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
      for (var c = arguments.length, p = new Array(c), y = 0; y < c; y++)
        p[y] = arguments[y];
      var h = p[0];
      if (h.axis === "both" || h.axis === "x") {
        var m;
        return (m = r.default.number).isRequired.apply(m, p);
      }
      return r.default.number.apply(r.default, p);
    }
  };
  return mi.resizableProps = a, mi;
}
var Td;
function kf() {
  if (Td) return hi;
  Td = 1, hi.__esModule = !0, hi.default = void 0;
  var r = y(Rt()), o = Rl(), a = sm(), u = Ef(), c = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function p(b) {
    if (typeof WeakMap != "function") return null;
    var d = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
    return (p = function(_) {
      return _ ? v : d;
    })(b);
  }
  function y(b, d) {
    if (b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var v = p(d);
    if (v && v.has(b))
      return v.get(b);
    var g = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in b)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(b, E)) {
        var M = _ ? Object.getOwnPropertyDescriptor(b, E) : null;
        M && (M.get || M.set) ? Object.defineProperty(g, E, M) : g[E] = b[E];
      }
    return g.default = b, v && v.set(b, g), g;
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(b) {
      for (var d = 1; d < arguments.length; d++) {
        var v = arguments[d];
        for (var g in v)
          Object.prototype.hasOwnProperty.call(v, g) && (b[g] = v[g]);
      }
      return b;
    }, h.apply(this, arguments);
  }
  function m(b, d) {
    if (b == null) return {};
    var v = {}, g = Object.keys(b), _, E;
    for (E = 0; E < g.length; E++)
      _ = g[E], !(d.indexOf(_) >= 0) && (v[_] = b[_]);
    return v;
  }
  function x(b, d) {
    var v = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(b);
      d && (g = g.filter(function(_) {
        return Object.getOwnPropertyDescriptor(b, _).enumerable;
      })), v.push.apply(v, g);
    }
    return v;
  }
  function w(b) {
    for (var d = 1; d < arguments.length; d++) {
      var v = arguments[d] != null ? arguments[d] : {};
      d % 2 ? x(Object(v), !0).forEach(function(g) {
        P(b, g, v[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : x(Object(v)).forEach(function(g) {
        Object.defineProperty(b, g, Object.getOwnPropertyDescriptor(v, g));
      });
    }
    return b;
  }
  function P(b, d, v) {
    return d = O(d), d in b ? Object.defineProperty(b, d, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[d] = v, b;
  }
  function O(b) {
    var d = X(b, "string");
    return typeof d == "symbol" ? d : String(d);
  }
  function X(b, d) {
    if (typeof b != "object" || b === null) return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var g = v.call(b, d);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(b);
  }
  function V(b, d) {
    b.prototype = Object.create(d.prototype), b.prototype.constructor = b, F(b, d);
  }
  function F(b, d) {
    return F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, _) {
      return g.__proto__ = _, g;
    }, F(b, d);
  }
  var z = /* @__PURE__ */ function(b) {
    V(d, b);
    function d() {
      for (var g, _ = arguments.length, E = new Array(_), M = 0; M < _; M++)
        E[M] = arguments[M];
      return g = b.call.apply(b, [this].concat(E)) || this, g.handleRefs = {}, g.lastHandleRect = null, g.slack = null, g;
    }
    var v = d.prototype;
    return v.componentWillUnmount = function() {
      this.resetData();
    }, v.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, v.runConstraints = function(_, E) {
      var M = this.props, q = M.minConstraints, W = M.maxConstraints, te = M.lockAspectRatio;
      if (!q && !W && !te) return [_, E];
      if (te) {
        var ce = this.props.width / this.props.height, se = _ - this.props.width, oe = E - this.props.height;
        Math.abs(se) > Math.abs(oe * ce) ? E = _ / ce : _ = E * ce;
      }
      var fe = _, Y = E, Z = this.slack || [0, 0], J = Z[0], U = Z[1];
      return _ += J, E += U, q && (_ = Math.max(q[0], _), E = Math.max(q[1], E)), W && (_ = Math.min(W[0], _), E = Math.min(W[1], E)), this.slack = [J + (fe - _), U + (Y - E)], [_, E];
    }, v.resizeHandler = function(_, E) {
      var M = this;
      return function(q, W) {
        var te = W.node, ce = W.deltaX, se = W.deltaY;
        _ === "onResizeStart" && M.resetData();
        var oe = (M.props.axis === "both" || M.props.axis === "x") && E !== "n" && E !== "s", fe = (M.props.axis === "both" || M.props.axis === "y") && E !== "e" && E !== "w";
        if (!(!oe && !fe)) {
          var Y = E[0], Z = E[E.length - 1], J = te.getBoundingClientRect();
          if (M.lastHandleRect != null) {
            if (Z === "w") {
              var U = J.left - M.lastHandleRect.left;
              ce += U;
            }
            if (Y === "n") {
              var le = J.top - M.lastHandleRect.top;
              se += le;
            }
          }
          M.lastHandleRect = J, Z === "w" && (ce = -ce), Y === "n" && (se = -se);
          var ne = M.props.width + (oe ? ce / M.props.transformScale : 0), L = M.props.height + (fe ? se / M.props.transformScale : 0), H = M.runConstraints(ne, L);
          ne = H[0], L = H[1];
          var _e = ne !== M.props.width || L !== M.props.height, Se = typeof M.props[_] == "function" ? M.props[_] : null, Re = _ === "onResize" && !_e;
          Se && !Re && (q.persist == null || q.persist(), Se(q, {
            node: te,
            size: {
              width: ne,
              height: L
            },
            handle: E
          })), _ === "onResizeStop" && M.resetData();
        }
      };
    }, v.renderResizeHandle = function(_, E) {
      var M = this.props.handle;
      if (!M)
        return /* @__PURE__ */ r.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + _,
          ref: E
        });
      if (typeof M == "function")
        return M(_, E);
      var q = typeof M.type == "string", W = w({
        ref: E
      }, q ? {} : {
        handleAxis: _
      });
      return /* @__PURE__ */ r.cloneElement(M, W);
    }, v.render = function() {
      var _ = this, E = this.props, M = E.children, q = E.className, W = E.draggableOpts;
      E.width, E.height, E.handle, E.handleSize, E.lockAspectRatio, E.axis, E.minConstraints, E.maxConstraints, E.onResize, E.onResizeStop, E.onResizeStart;
      var te = E.resizeHandles;
      E.transformScale;
      var ce = m(E, c);
      return (0, a.cloneElement)(M, w(w({}, ce), {}, {
        className: (q ? q + " " : "") + "react-resizable",
        children: [].concat(M.props.children, te.map(function(se) {
          var oe, fe = (oe = _.handleRefs[se]) != null ? oe : _.handleRefs[se] = /* @__PURE__ */ r.createRef();
          return /* @__PURE__ */ r.createElement(o.DraggableCore, h({}, W, {
            nodeRef: fe,
            key: "resizableHandle-" + se,
            onStop: _.resizeHandler("onResizeStop", se),
            onStart: _.resizeHandler("onResizeStart", se),
            onDrag: _.resizeHandler("onResize", se)
          }), _.renderResizeHandle(se, fe));
        }))
      }));
    }, d;
  }(r.Component);
  return hi.default = z, z.propTypes = u.resizableProps, z.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, hi;
}
var gi = {}, Nd;
function lm() {
  if (Nd) return gi;
  Nd = 1, gi.__esModule = !0, gi.default = void 0;
  var r = h(Rt()), o = p(/* @__PURE__ */ Ln()), a = p(kf()), u = Ef(), c = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function p(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function y(d) {
    if (typeof WeakMap != "function") return null;
    var v = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (y = function(E) {
      return E ? g : v;
    })(d);
  }
  function h(d, v) {
    if (d && d.__esModule)
      return d;
    if (d === null || typeof d != "object" && typeof d != "function")
      return { default: d };
    var g = y(v);
    if (g && g.has(d))
      return g.get(d);
    var _ = {}, E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var M in d)
      if (M !== "default" && Object.prototype.hasOwnProperty.call(d, M)) {
        var q = E ? Object.getOwnPropertyDescriptor(d, M) : null;
        q && (q.get || q.set) ? Object.defineProperty(_, M, q) : _[M] = d[M];
      }
    return _.default = d, g && g.set(d, _), _;
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(d) {
      for (var v = 1; v < arguments.length; v++) {
        var g = arguments[v];
        for (var _ in g)
          Object.prototype.hasOwnProperty.call(g, _) && (d[_] = g[_]);
      }
      return d;
    }, m.apply(this, arguments);
  }
  function x(d, v) {
    var g = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(d);
      v && (_ = _.filter(function(E) {
        return Object.getOwnPropertyDescriptor(d, E).enumerable;
      })), g.push.apply(g, _);
    }
    return g;
  }
  function w(d) {
    for (var v = 1; v < arguments.length; v++) {
      var g = arguments[v] != null ? arguments[v] : {};
      v % 2 ? x(Object(g), !0).forEach(function(_) {
        P(d, _, g[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(g)) : x(Object(g)).forEach(function(_) {
        Object.defineProperty(d, _, Object.getOwnPropertyDescriptor(g, _));
      });
    }
    return d;
  }
  function P(d, v, g) {
    return v = O(v), v in d ? Object.defineProperty(d, v, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : d[v] = g, d;
  }
  function O(d) {
    var v = X(d, "string");
    return typeof v == "symbol" ? v : String(v);
  }
  function X(d, v) {
    if (typeof d != "object" || d === null) return d;
    var g = d[Symbol.toPrimitive];
    if (g !== void 0) {
      var _ = g.call(d, v);
      if (typeof _ != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(d);
  }
  function V(d, v) {
    if (d == null) return {};
    var g = {}, _ = Object.keys(d), E, M;
    for (M = 0; M < _.length; M++)
      E = _[M], !(v.indexOf(E) >= 0) && (g[E] = d[E]);
    return g;
  }
  function F(d, v) {
    d.prototype = Object.create(v.prototype), d.prototype.constructor = d, z(d, v);
  }
  function z(d, v) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, E) {
      return _.__proto__ = E, _;
    }, z(d, v);
  }
  var b = /* @__PURE__ */ function(d) {
    F(v, d);
    function v() {
      for (var _, E = arguments.length, M = new Array(E), q = 0; q < E; q++)
        M[q] = arguments[q];
      return _ = d.call.apply(d, [this].concat(M)) || this, _.state = {
        width: _.props.width,
        height: _.props.height,
        propsWidth: _.props.width,
        propsHeight: _.props.height
      }, _.onResize = function(W, te) {
        var ce = te.size;
        _.props.onResize ? (W.persist == null || W.persist(), _.setState(ce, function() {
          return _.props.onResize && _.props.onResize(W, te);
        })) : _.setState(ce);
      }, _;
    }
    v.getDerivedStateFromProps = function(E, M) {
      return M.propsWidth !== E.width || M.propsHeight !== E.height ? {
        width: E.width,
        height: E.height,
        propsWidth: E.width,
        propsHeight: E.height
      } : null;
    };
    var g = v.prototype;
    return g.render = function() {
      var E = this.props, M = E.handle, q = E.handleSize;
      E.onResize;
      var W = E.onResizeStart, te = E.onResizeStop, ce = E.draggableOpts, se = E.minConstraints, oe = E.maxConstraints, fe = E.lockAspectRatio, Y = E.axis;
      E.width, E.height;
      var Z = E.resizeHandles, J = E.style, U = E.transformScale, le = V(E, c);
      return /* @__PURE__ */ r.createElement(a.default, {
        axis: Y,
        draggableOpts: ce,
        handle: M,
        handleSize: q,
        height: this.state.height,
        lockAspectRatio: fe,
        maxConstraints: oe,
        minConstraints: se,
        onResizeStart: W,
        onResize: this.onResize,
        onResizeStop: te,
        resizeHandles: Z,
        transformScale: U,
        width: this.state.width
      }, /* @__PURE__ */ r.createElement("div", m({}, le, {
        style: w(w({}, J), {}, {
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
var Ad;
function um() {
  return Ad || (Ad = 1, pi.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, pi.exports.Resizable = kf().default, pi.exports.ResizableBox = lm().default), pi.exports;
}
var cn = {}, Id;
function Cf() {
  if (Id) return cn;
  Id = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.resizeHandleType = cn.resizeHandleAxesType = cn.default = void 0;
  var r = a(/* @__PURE__ */ Ln()), o = a(Rt());
  function a(p) {
    return p && p.__esModule ? p : { default: p };
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
    verticalCompact: function(p) {
      p.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: r.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(p) {
      var y = p.layout;
      y !== void 0 && Er().validateLayout(y, "layout");
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
    children: function(p, y) {
      const h = p[y], m = {};
      o.default.Children.forEach(h, function(x) {
        if (x?.key != null) {
          if (m[x.key])
            throw new Error('Duplicate child key "' + x.key + '" found! This will cause problems in ReactGridLayout.');
          m[x.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: r.default.any
  }, cn;
}
var Bd;
function cm() {
  if (Bd) return di;
  Bd = 1, Object.defineProperty(di, "__esModule", {
    value: !0
  }), di.default = void 0;
  var r = x(Rt()), o = Xo(), a = x(/* @__PURE__ */ Ln()), u = Rl(), c = um(), p = Er(), y = Cl(), h = Cf(), m = x(na());
  function x(z) {
    return z && z.__esModule ? z : { default: z };
  }
  function w(z, b) {
    var d = Object.keys(z);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(z);
      b && (v = v.filter(function(g) {
        return Object.getOwnPropertyDescriptor(z, g).enumerable;
      })), d.push.apply(d, v);
    }
    return d;
  }
  function P(z) {
    for (var b = 1; b < arguments.length; b++) {
      var d = arguments[b] != null ? arguments[b] : {};
      b % 2 ? w(Object(d), !0).forEach(function(v) {
        O(z, v, d[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(d)) : w(Object(d)).forEach(function(v) {
        Object.defineProperty(z, v, Object.getOwnPropertyDescriptor(d, v));
      });
    }
    return z;
  }
  function O(z, b, d) {
    return (b = X(b)) in z ? Object.defineProperty(z, b, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : z[b] = d, z;
  }
  function X(z) {
    var b = V(z, "string");
    return typeof b == "symbol" ? b : b + "";
  }
  function V(z, b) {
    if (typeof z != "object" || !z) return z;
    var d = z[Symbol.toPrimitive];
    if (d !== void 0) {
      var v = d.call(z, b);
      if (typeof v != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(z);
  }
  let F = class extends r.default.Component {
    constructor() {
      super(...arguments), O(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), O(this, "elementRef", /* @__PURE__ */ r.default.createRef()), O(this, "onDragStart", (b, d) => {
        let {
          node: v
        } = d;
        const {
          onDragStart: g,
          transformScale: _
        } = this.props;
        if (!g) return;
        const E = {
          top: 0,
          left: 0
        }, {
          offsetParent: M
        } = v;
        if (!M) return;
        const q = M.getBoundingClientRect(), W = v.getBoundingClientRect(), te = W.left / _, ce = q.left / _, se = W.top / _, oe = q.top / _;
        E.left = te - ce + M.scrollLeft, E.top = se - oe + M.scrollTop, this.setState({
          dragging: E
        });
        const {
          x: fe,
          y: Y
        } = (0, y.calcXY)(this.getPositionParams(), E.top, E.left, this.props.w, this.props.h);
        return g.call(this, this.props.i, fe, Y, {
          e: b,
          node: v,
          newPosition: E
        });
      }), O(this, "onDrag", (b, d, v) => {
        let {
          node: g,
          deltaX: _,
          deltaY: E
        } = d;
        const {
          onDrag: M
        } = this.props;
        if (!M) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let q = this.state.dragging.top + E, W = this.state.dragging.left + _;
        const {
          isBounded: te,
          i: ce,
          w: se,
          h: oe,
          containerWidth: fe
        } = this.props, Y = this.getPositionParams();
        if (te) {
          const {
            offsetParent: le
          } = g;
          if (le) {
            const {
              margin: ne,
              rowHeight: L
            } = this.props, H = le.clientHeight - (0, y.calcGridItemWHPx)(oe, L, ne[1]);
            q = (0, y.clamp)(q, 0, H);
            const _e = (0, y.calcGridColWidth)(Y), Se = fe - (0, y.calcGridItemWHPx)(se, _e, ne[0]);
            W = (0, y.clamp)(W, 0, Se);
          }
        }
        const Z = {
          top: q,
          left: W
        };
        v ? this.setState({
          dragging: Z
        }) : (0, o.flushSync)(() => {
          this.setState({
            dragging: Z
          });
        });
        const {
          x: J,
          y: U
        } = (0, y.calcXY)(Y, q, W, se, oe);
        return M.call(this, ce, J, U, {
          e: b,
          node: g,
          newPosition: Z
        });
      }), O(this, "onDragStop", (b, d) => {
        let {
          node: v
        } = d;
        const {
          onDragStop: g
        } = this.props;
        if (!g) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: _,
          h: E,
          i: M
        } = this.props, {
          left: q,
          top: W
        } = this.state.dragging, te = {
          top: W,
          left: q
        };
        this.setState({
          dragging: null
        });
        const {
          x: ce,
          y: se
        } = (0, y.calcXY)(this.getPositionParams(), W, q, _, E);
        return g.call(this, M, ce, se, {
          e: b,
          node: v,
          newPosition: te
        });
      }), O(this, "onResizeStop", (b, d, v) => this.onResizeHandler(b, d, v, "onResizeStop")), O(this, "onResizeStart", (b, d, v) => this.onResizeHandler(b, d, v, "onResizeStart")), O(this, "onResize", (b, d, v) => this.onResizeHandler(b, d, v, "onResize"));
    }
    shouldComponentUpdate(b, d) {
      if (this.props.children !== b.children || this.props.droppingPosition !== b.droppingPosition) return !0;
      const v = (0, y.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), g = (0, y.calcGridItemPosition)(this.getPositionParams(b), b.x, b.y, b.w, b.h, d);
      return !(0, p.fastPositionEqual)(v, g) || this.props.useCSSTransforms !== b.useCSSTransforms;
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
        droppingPosition: d
      } = this.props;
      if (!d) return;
      const v = this.elementRef.current;
      if (!v) return;
      const g = b.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: _
      } = this.state, E = _ && d.left !== g.left || d.top !== g.top;
      if (!_)
        this.onDragStart(d.e, {
          node: v,
          deltaX: d.left,
          deltaY: d.top
        });
      else if (E) {
        const M = d.left - _.left, q = d.top - _.top;
        this.onDrag(
          d.e,
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
        usePercentages: d,
        containerWidth: v,
        useCSSTransforms: g
      } = this.props;
      let _;
      return g ? _ = (0, p.setTransform)(b) : (_ = (0, p.setTopLeft)(b), d && (_.left = (0, p.perc)(b.left / v), _.width = (0, p.perc)(b.width / v))), _;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(b, d) {
      return /* @__PURE__ */ r.default.createElement(u.DraggableCore, {
        disabled: !d,
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
    curryResizeHandler(b, d) {
      return (v, g) => (
        /*: Function*/
        d(v, g, b)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(b, d, v) {
      const {
        cols: g,
        minW: _,
        minH: E,
        maxW: M,
        maxH: q,
        transformScale: W,
        resizeHandles: te,
        resizeHandle: ce
      } = this.props, se = this.getPositionParams(), oe = (0, y.calcGridItemPosition)(se, 0, 0, g, 0).width, fe = (0, y.calcGridItemPosition)(se, 0, 0, _, E), Y = (0, y.calcGridItemPosition)(se, 0, 0, M, q), Z = [fe.width, fe.height], J = [Math.min(Y.width, oe), Math.min(Y.height, 1 / 0)];
      return /* @__PURE__ */ r.default.createElement(
        c.Resizable,
        {
          draggableOpts: {
            disabled: !v
          },
          className: v ? void 0 : "react-resizable-hide",
          width: d.width,
          height: d.height,
          minConstraints: Z,
          maxConstraints: J,
          onResizeStop: this.curryResizeHandler(d, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(d, this.onResizeStart),
          onResize: this.curryResizeHandler(d, this.onResize),
          transformScale: W,
          resizeHandles: te,
          handle: ce
        },
        b
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(b, d, v, g) {
      let {
        node: _,
        size: E,
        handle: M
      } = d;
      const q = this.props[g];
      if (!q) return;
      const {
        x: W,
        y: te,
        i: ce,
        maxH: se,
        minH: oe,
        containerWidth: fe
      } = this.props, {
        minW: Y,
        maxW: Z
      } = this.props;
      let J = E;
      _ && (J = (0, p.resizeItemInDirection)(M, v, E, fe), (0, o.flushSync)(() => {
        this.setState({
          resizing: g === "onResizeStop" ? null : J
        });
      }));
      let {
        w: U,
        h: le
      } = (0, y.calcWH)(this.getPositionParams(), J.width, J.height, W, te, M);
      U = (0, y.clamp)(U, Math.max(Y, 1), Z), le = (0, y.clamp)(le, oe, se), q.call(this, ce, U, le, {
        e: b,
        node: _,
        size: J,
        handle: M
      });
    }
    render() {
      const {
        x: b,
        y: d,
        w: v,
        h: g,
        isDraggable: _,
        isResizable: E,
        droppingPosition: M,
        useCSSTransforms: q
      } = this.props, W = (0, y.calcGridItemPosition)(this.getPositionParams(), b, d, v, g, this.state), te = r.default.Children.only(this.props.children);
      let ce = /* @__PURE__ */ r.default.cloneElement(te, {
        ref: this.elementRef,
        className: (0, m.default)("react-grid-item", te.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": _,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!M,
          cssTransforms: q
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: P(P(P({}, this.props.style), te.props.style), this.createStyle(W))
      });
      return ce = this.mixinResizable(ce, W, E), ce = this.mixinDraggable(ce, _), ce;
    }
  };
  return di.default = F, O(F, "propTypes", {
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
    minW: function(z, b) {
      const d = z[b];
      if (typeof d != "number") return new Error("minWidth not Number");
      if (d > z.w || d > z.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(z, b) {
      const d = z[b];
      if (typeof d != "number") return new Error("maxWidth not Number");
      if (d < z.w || d < z.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(z, b) {
      const d = z[b];
      if (typeof d != "number") return new Error("minHeight not Number");
      if (d > z.h || d > z.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(z, b) {
      const d = z[b];
      if (typeof d != "number") return new Error("maxHeight not Number");
      if (d < z.h || d < z.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: a.default.string.isRequired,
    // Resize handle options
    resizeHandles: h.resizeHandleAxesType,
    resizeHandle: h.resizeHandleType,
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
  }), O(F, "defaultProps", {
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
var jd;
function Rf() {
  if (jd) return ci;
  jd = 1, Object.defineProperty(ci, "__esModule", {
    value: !0
  }), ci.default = void 0;
  var r = m(Rt()), o = /* @__PURE__ */ kl(), a = h(na()), u = Er(), c = Cl(), p = h(cm()), y = h(Cf());
  function h(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function m(b, d) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (m = function(_, E) {
      if (!E && _ && _.__esModule) return _;
      var M, q, W = { __proto__: null, default: _ };
      if (_ === null || typeof _ != "object" && typeof _ != "function") return W;
      if (M = E ? g : v) {
        if (M.has(_)) return M.get(_);
        M.set(_, W);
      }
      for (const te in _) te !== "default" && {}.hasOwnProperty.call(_, te) && ((q = (M = Object.defineProperty) && Object.getOwnPropertyDescriptor(_, te)) && (q.get || q.set) ? M(W, te, q) : W[te] = _[te]);
      return W;
    })(b, d);
  }
  function x(b, d) {
    var v = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(b);
      d && (g = g.filter(function(_) {
        return Object.getOwnPropertyDescriptor(b, _).enumerable;
      })), v.push.apply(v, g);
    }
    return v;
  }
  function w(b) {
    for (var d = 1; d < arguments.length; d++) {
      var v = arguments[d] != null ? arguments[d] : {};
      d % 2 ? x(Object(v), !0).forEach(function(g) {
        P(b, g, v[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(v)) : x(Object(v)).forEach(function(g) {
        Object.defineProperty(b, g, Object.getOwnPropertyDescriptor(v, g));
      });
    }
    return b;
  }
  function P(b, d, v) {
    return (d = O(d)) in b ? Object.defineProperty(b, d, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : b[d] = v, b;
  }
  function O(b) {
    var d = X(b, "string");
    return typeof d == "symbol" ? d : d + "";
  }
  function X(b, d) {
    if (typeof b != "object" || !b) return b;
    var v = b[Symbol.toPrimitive];
    if (v !== void 0) {
      var g = v.call(b, d);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(b);
  }
  const V = "react-grid-layout";
  let F = !1;
  try {
    F = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let z = class extends r.Component {
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
      }), P(this, "dragEnterCounter", 0), P(this, "onDragStart", (d, v, g, _) => {
        let {
          e: E,
          node: M
        } = _;
        const {
          layout: q
        } = this.state, W = (0, u.getLayoutItem)(q, d);
        if (!W) return;
        const te = {
          w: W.w,
          h: W.h,
          x: W.x,
          y: W.y,
          placeholder: !0,
          i: d
        };
        return this.setState({
          oldDragItem: (0, u.cloneLayoutItem)(W),
          oldLayout: q,
          activeDrag: te
        }), this.props.onDragStart(q, W, W, null, E, M);
      }), P(this, "onDrag", (d, v, g, _) => {
        let {
          e: E,
          node: M
        } = _;
        const {
          oldDragItem: q
        } = this.state;
        let {
          layout: W
        } = this.state;
        const {
          cols: te,
          allowOverlap: ce,
          preventCollision: se
        } = this.props, oe = (0, u.getLayoutItem)(W, d);
        if (!oe) return;
        const fe = {
          w: oe.w,
          h: oe.h,
          x: oe.x,
          y: oe.y,
          placeholder: !0,
          i: d
        };
        W = (0, u.moveElement)(W, oe, v, g, !0, se, (0, u.compactType)(this.props), te, ce), this.props.onDrag(W, q, oe, fe, E, M), this.setState({
          layout: ce ? W : (0, u.compact)(W, (0, u.compactType)(this.props), te),
          activeDrag: fe
        });
      }), P(this, "onDragStop", (d, v, g, _) => {
        let {
          e: E,
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
          cols: te,
          preventCollision: ce,
          allowOverlap: se
        } = this.props, oe = (0, u.getLayoutItem)(W, d);
        if (!oe) return;
        W = (0, u.moveElement)(W, oe, v, g, !0, ce, (0, u.compactType)(this.props), te, se);
        const Y = se ? W : (0, u.compact)(W, (0, u.compactType)(this.props), te);
        this.props.onDragStop(Y, q, oe, null, E, M);
        const {
          oldLayout: Z
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Y,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(Y, Z);
      }), P(this, "onResizeStart", (d, v, g, _) => {
        let {
          e: E,
          node: M
        } = _;
        const {
          layout: q
        } = this.state, W = (0, u.getLayoutItem)(q, d);
        W && (this.setState({
          oldResizeItem: (0, u.cloneLayoutItem)(W),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(q, W, W, null, E, M));
      }), P(this, "onResize", (d, v, g, _) => {
        let {
          e: E,
          node: M,
          size: q,
          handle: W
        } = _;
        const {
          oldResizeItem: te
        } = this.state, {
          layout: ce
        } = this.state, {
          cols: se,
          preventCollision: oe,
          allowOverlap: fe
        } = this.props;
        let Y = !1, Z, J, U;
        const [le, ne] = (0, u.withLayoutItem)(ce, d, (H) => {
          let _e;
          return J = H.x, U = H.y, ["sw", "w", "nw", "n", "ne"].indexOf(W) !== -1 && (["sw", "nw", "w"].indexOf(W) !== -1 && (J = H.x + (H.w - v), v = H.x !== J && J < 0 ? H.w : v, J = J < 0 ? 0 : J), ["ne", "n", "nw"].indexOf(W) !== -1 && (U = H.y + (H.h - g), g = H.y !== U && U < 0 ? H.h : g, U = U < 0 ? 0 : U), Y = !0), oe && !fe && (_e = (0, u.getAllCollisions)(ce, w(w({}, H), {}, {
            w: v,
            h: g,
            x: J,
            y: U
          })).filter((Re) => Re.i !== H.i).length > 0, _e && (U = H.y, g = H.h, J = H.x, v = H.w, Y = !1)), H.w = v, H.h = g, H;
        });
        if (!ne) return;
        Z = le, Y && (Z = (0, u.moveElement)(le, ne, J, U, !0, this.props.preventCollision, (0, u.compactType)(this.props), se, fe));
        const L = {
          w: ne.w,
          h: ne.h,
          x: ne.x,
          y: ne.y,
          static: !0,
          i: d
        };
        this.props.onResize(Z, te, ne, L, E, M), this.setState({
          layout: fe ? Z : (0, u.compact)(Z, (0, u.compactType)(this.props), se),
          activeDrag: L
        });
      }), P(this, "onResizeStop", (d, v, g, _) => {
        let {
          e: E,
          node: M
        } = _;
        const {
          layout: q,
          oldResizeItem: W
        } = this.state, {
          cols: te,
          allowOverlap: ce
        } = this.props, se = (0, u.getLayoutItem)(q, d), oe = ce ? q : (0, u.compact)(q, (0, u.compactType)(this.props), te);
        this.props.onResizeStop(oe, W, se, null, E, M);
        const {
          oldLayout: fe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: oe,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(oe, fe);
      }), P(this, "onDragOver", (d) => {
        var v;
        if (d.preventDefault(), d.stopPropagation(), F && // $FlowIgnore can't figure this out
        !((v = d.nativeEvent.target) !== null && v !== void 0 && v.classList.contains(V)))
          return !1;
        const {
          droppingItem: g,
          onDropDragOver: _,
          margin: E,
          cols: M,
          rowHeight: q,
          maxRows: W,
          width: te,
          containerPadding: ce,
          transformScale: se
        } = this.props, oe = _?.(d);
        if (oe === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const fe = w(w({}, g), oe), {
          layout: Y
        } = this.state, Z = d.currentTarget.getBoundingClientRect(), J = d.clientX - Z.left, U = d.clientY - Z.top, le = {
          left: J / se,
          top: U / se,
          e: d
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: ne,
              top: L
            } = this.state.droppingPosition;
            (ne != J || L != U) && this.setState({
              droppingPosition: le
            });
          }
        } else {
          const ne = {
            cols: M,
            margin: E,
            maxRows: W,
            rowHeight: q,
            containerWidth: te,
            containerPadding: ce || E
          }, L = (0, c.calcXY)(ne, U, J, fe.w, fe.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ r.createElement("div", {
              key: fe.i
            }),
            droppingPosition: le,
            layout: [...Y, w(w({}, fe), {}, {
              x: L.x,
              y: L.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), P(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: d,
          cols: v
        } = this.props, {
          layout: g
        } = this.state, _ = (0, u.compact)(g.filter((E) => E.i !== d.i), (0, u.compactType)(this.props), v, this.props.allowOverlap);
        this.setState({
          layout: _,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), P(this, "onDragLeave", (d) => {
        d.preventDefault(), d.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), P(this, "onDragEnter", (d) => {
        d.preventDefault(), d.stopPropagation(), this.dragEnterCounter++;
      }), P(this, "onDrop", (d) => {
        d.preventDefault(), d.stopPropagation();
        const {
          droppingItem: v
        } = this.props, {
          layout: g
        } = this.state, _ = g.find((E) => E.i === v.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(g, _, d);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(d, v) {
      let g;
      return v.activeDrag ? null : (!(0, o.deepEqual)(d.layout, v.propsLayout) || d.compactType !== v.compactType ? g = d.layout : (0, u.childrenEqual)(d.children, v.children) || (g = v.layout), g ? {
        layout: (0, u.synchronizeLayoutWithChildren)(g, d.children, d.cols, (0, u.compactType)(d), d.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: d.compactType,
        children: d.children,
        propsLayout: d.layout
      } : null);
    }
    shouldComponentUpdate(d, v) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== d.children || !(0, u.fastRGLPropsEqual)(this.props, d, o.deepEqual) || this.state.activeDrag !== v.activeDrag || this.state.mounted !== v.mounted || this.state.droppingPosition !== v.droppingPosition
      );
    }
    componentDidUpdate(d, v) {
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
      const d = (0, u.bottom)(this.state.layout), v = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return d * this.props.rowHeight + (d - 1) * this.props.margin[1] + v * 2 + "px";
    }
    onLayoutMaybeChanged(d, v) {
      v || (v = this.state.layout), (0, o.deepEqual)(v, d) || this.props.onLayoutChange(d);
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
        width: v,
        cols: g,
        margin: _,
        containerPadding: E,
        rowHeight: M,
        maxRows: q,
        useCSSTransforms: W,
        transformScale: te
      } = this.props;
      return /* @__PURE__ */ r.createElement(p.default, {
        w: d.w,
        h: d.h,
        x: d.x,
        y: d.y,
        i: d.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: v,
        cols: g,
        margin: _,
        containerPadding: E || _,
        maxRows: q,
        rowHeight: M,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: W,
        transformScale: te
      }, /* @__PURE__ */ r.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(d, v) {
      if (!d || !d.key) return;
      const g = (0, u.getLayoutItem)(this.state.layout, String(d.key));
      if (!g) return null;
      const {
        width: _,
        cols: E,
        margin: M,
        containerPadding: q,
        rowHeight: W,
        maxRows: te,
        isDraggable: ce,
        isResizable: se,
        isBounded: oe,
        useCSSTransforms: fe,
        transformScale: Y,
        draggableCancel: Z,
        draggableHandle: J,
        resizeHandles: U,
        resizeHandle: le
      } = this.props, {
        mounted: ne,
        droppingPosition: L
      } = this.state, H = typeof g.isDraggable == "boolean" ? g.isDraggable : !g.static && ce, _e = typeof g.isResizable == "boolean" ? g.isResizable : !g.static && se, Se = g.resizeHandles || U, Re = H && oe && g.isBounded !== !1;
      return /* @__PURE__ */ r.createElement(p.default, {
        containerWidth: _,
        cols: E,
        margin: M,
        containerPadding: q || M,
        maxRows: te,
        rowHeight: W,
        cancel: Z,
        handle: J,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: H,
        isResizable: _e,
        isBounded: Re,
        useCSSTransforms: fe && ne,
        usePercentages: !ne,
        transformScale: Y,
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
      }, d);
    }
    render() {
      const {
        className: d,
        style: v,
        isDroppable: g,
        innerRef: _
      } = this.props, E = (0, a.default)(V, d), M = w({
        height: this.containerHeight()
      }, v);
      return /* @__PURE__ */ r.createElement("div", {
        ref: _,
        className: E,
        style: M,
        onDrop: g ? this.onDrop : u.noop,
        onDragLeave: g ? this.onDragLeave : u.noop,
        onDragEnter: g ? this.onDragEnter : u.noop,
        onDragOver: g ? this.onDragOver : u.noop
      }, r.Children.map(this.props.children, (q) => this.processGridItem(q)), g && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ci.default = z, P(z, "displayName", "ReactGridLayout"), P(z, "propTypes", y.default), P(z, "defaultProps", {
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
var yi = {}, Gn = {}, Fd;
function zf() {
  if (Fd) return Gn;
  Fd = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.findOrGenerateResponsiveLayout = u, Gn.getBreakpointFromWidth = o, Gn.getColsFromBreakpoint = a, Gn.sortBreakpoints = c;
  var r = Er();
  function o(p, y) {
    const h = c(p);
    let m = h[0];
    for (let x = 1, w = h.length; x < w; x++) {
      const P = h[x];
      y > p[P] && (m = P);
    }
    return m;
  }
  function a(p, y) {
    if (!y[p])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + p + " is missing!");
    return y[p];
  }
  function u(p, y, h, m, x, w) {
    if (p[h]) return (0, r.cloneLayout)(p[h]);
    let P = p[m];
    const O = c(y), X = O.slice(O.indexOf(h));
    for (let V = 0, F = X.length; V < F; V++) {
      const z = X[V];
      if (p[z]) {
        P = p[z];
        break;
      }
    }
    return P = (0, r.cloneLayout)(P || []), (0, r.compact)((0, r.correctBounds)(P, {
      cols: x
    }), w, x);
  }
  function c(p) {
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  return Gn;
}
var qd;
function dm() {
  if (qd) return yi;
  qd = 1, Object.defineProperty(yi, "__esModule", {
    value: !0
  }), yi.default = void 0;
  var r = m(Rt()), o = h(/* @__PURE__ */ Ln()), a = /* @__PURE__ */ kl(), u = Er(), c = zf(), p = h(Rf());
  const y = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function h(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function m(g, _) {
    if (typeof WeakMap == "function") var E = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
    return (m = function(q, W) {
      if (!W && q && q.__esModule) return q;
      var te, ce, se = { __proto__: null, default: q };
      if (q === null || typeof q != "object" && typeof q != "function") return se;
      if (te = W ? M : E) {
        if (te.has(q)) return te.get(q);
        te.set(q, se);
      }
      for (const oe in q) oe !== "default" && {}.hasOwnProperty.call(q, oe) && ((ce = (te = Object.defineProperty) && Object.getOwnPropertyDescriptor(q, oe)) && (ce.get || ce.set) ? te(se, oe, ce) : se[oe] = q[oe]);
      return se;
    })(g, _);
  }
  function x() {
    return x = Object.assign ? Object.assign.bind() : function(g) {
      for (var _ = 1; _ < arguments.length; _++) {
        var E = arguments[_];
        for (var M in E) ({}).hasOwnProperty.call(E, M) && (g[M] = E[M]);
      }
      return g;
    }, x.apply(null, arguments);
  }
  function w(g, _) {
    if (g == null) return {};
    var E, M, q = P(g, _);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(g);
      for (M = 0; M < W.length; M++) E = W[M], _.indexOf(E) === -1 && {}.propertyIsEnumerable.call(g, E) && (q[E] = g[E]);
    }
    return q;
  }
  function P(g, _) {
    if (g == null) return {};
    var E = {};
    for (var M in g) if ({}.hasOwnProperty.call(g, M)) {
      if (_.indexOf(M) !== -1) continue;
      E[M] = g[M];
    }
    return E;
  }
  function O(g, _) {
    var E = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(g);
      _ && (M = M.filter(function(q) {
        return Object.getOwnPropertyDescriptor(g, q).enumerable;
      })), E.push.apply(E, M);
    }
    return E;
  }
  function X(g) {
    for (var _ = 1; _ < arguments.length; _++) {
      var E = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? O(Object(E), !0).forEach(function(M) {
        V(g, M, E[M]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(E)) : O(Object(E)).forEach(function(M) {
        Object.defineProperty(g, M, Object.getOwnPropertyDescriptor(E, M));
      });
    }
    return g;
  }
  function V(g, _, E) {
    return (_ = F(_)) in g ? Object.defineProperty(g, _, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = E, g;
  }
  function F(g) {
    var _ = z(g, "string");
    return typeof _ == "symbol" ? _ : _ + "";
  }
  function z(g, _) {
    if (typeof g != "object" || !g) return g;
    var E = g[Symbol.toPrimitive];
    if (E !== void 0) {
      var M = E.call(g, _);
      if (typeof M != "object") return M;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(g);
  }
  const b = (g) => Object.prototype.toString.call(g);
  function d(g, _) {
    return g == null ? null : Array.isArray(g) ? g : g[_];
  }
  let v = class extends r.Component {
    constructor() {
      super(...arguments), V(this, "state", this.generateInitialState()), V(this, "onLayoutChange", (_) => {
        this.props.onLayoutChange(_, X(X({}, this.props.layouts), {}, {
          [this.state.breakpoint]: _
        }));
      });
    }
    generateInitialState() {
      const {
        width: _,
        breakpoints: E,
        layouts: M,
        cols: q
      } = this.props, W = (0, c.getBreakpointFromWidth)(E, _), te = (0, c.getColsFromBreakpoint)(W, q), ce = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, c.findOrGenerateResponsiveLayout)(M, E, W, W, te, ce),
        breakpoint: W,
        cols: te
      };
    }
    static getDerivedStateFromProps(_, E) {
      if (!(0, a.deepEqual)(_.layouts, E.layouts)) {
        const {
          breakpoint: M,
          cols: q
        } = E;
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
        breakpoints: E,
        cols: M,
        layouts: q,
        compactType: W
      } = this.props, te = this.props.breakpoint || (0, c.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), ce = this.state.breakpoint, se = (0, c.getColsFromBreakpoint)(te, M), oe = X({}, q);
      if (ce !== te || _.breakpoints !== E || _.cols !== M) {
        ce in oe || (oe[ce] = (0, u.cloneLayout)(this.state.layout));
        let Z = (0, c.findOrGenerateResponsiveLayout)(oe, E, te, ce, se, W);
        Z = (0, u.synchronizeLayoutWithChildren)(Z, this.props.children, se, W, this.props.allowOverlap), oe[te] = Z, this.props.onBreakpointChange(te, se), this.props.onLayoutChange(Z, oe), this.setState({
          breakpoint: te,
          layout: Z,
          cols: se
        });
      }
      const fe = d(this.props.margin, te), Y = d(this.props.containerPadding, te);
      this.props.onWidthChange(this.props.width, fe, se, Y);
    }
    render() {
      const _ = this.props, {
        breakpoint: E,
        breakpoints: M,
        cols: q,
        layouts: W,
        margin: te,
        containerPadding: ce,
        onBreakpointChange: se,
        onLayoutChange: oe,
        onWidthChange: fe
      } = _, Y = w(_, y);
      return /* @__PURE__ */ r.createElement(p.default, x({}, Y, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: d(te, this.state.breakpoint),
        containerPadding: d(ce, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return yi.default = v, V(v, "propTypes", {
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
      Object.keys(g[_]).forEach((E) => {
        if (!(E in g.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, u.validateLayout)(g.layouts[E], "layouts." + E);
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
  }), V(v, "defaultProps", {
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
var jo = {}, Of = function() {
  if (typeof Map < "u")
    return Map;
  function r(o, a) {
    var u = -1;
    return o.some(function(c, p) {
      return c[0] === a ? (u = p, !0) : !1;
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
        for (var c = 0, p = this.__entries__; c < p.length; c++) {
          var y = p[c];
          a.call(u, y[1], y[0]);
        }
      }, o;
    }()
  );
}(), ml = typeof window < "u" && typeof document < "u" && window.document === document, Qo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), fm = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Qo) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), pm = 2;
function hm(r, o) {
  var a = !1, u = !1, c = 0;
  function p() {
    a && (a = !1, r()), u && h();
  }
  function y() {
    fm(p);
  }
  function h() {
    var m = Date.now();
    if (a) {
      if (m - c < pm)
        return;
      u = !0;
    } else
      a = !0, u = !1, setTimeout(y, o);
    c = m;
  }
  return h;
}
var mm = 20, gm = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ym = typeof MutationObserver < "u", vm = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = hm(this.refresh.bind(this), mm);
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
      !ml || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ym ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !ml || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(o) {
      var a = o.propertyName, u = a === void 0 ? "" : a, c = gm.some(function(p) {
        return !!~u.indexOf(p);
      });
      c && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), Pf = function(r, o) {
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
  return o || Qo;
}, Lf = ra(0, 0, 0, 0);
function Ko(r) {
  return parseFloat(r) || 0;
}
function Hd(r) {
  for (var o = [], a = 1; a < arguments.length; a++)
    o[a - 1] = arguments[a];
  return o.reduce(function(u, c) {
    var p = r["border-" + c + "-width"];
    return u + Ko(p);
  }, 0);
}
function wm(r) {
  for (var o = ["top", "right", "bottom", "left"], a = {}, u = 0, c = o; u < c.length; u++) {
    var p = c[u], y = r["padding-" + p];
    a[p] = Ko(y);
  }
  return a;
}
function _m(r) {
  var o = r.getBBox();
  return ra(0, 0, o.width, o.height);
}
function bm(r) {
  var o = r.clientWidth, a = r.clientHeight;
  if (!o && !a)
    return Lf;
  var u = xr(r).getComputedStyle(r), c = wm(u), p = c.left + c.right, y = c.top + c.bottom, h = Ko(u.width), m = Ko(u.height);
  if (u.boxSizing === "border-box" && (Math.round(h + p) !== o && (h -= Hd(u, "left", "right") + p), Math.round(m + y) !== a && (m -= Hd(u, "top", "bottom") + y)), !Sm(r)) {
    var x = Math.round(h + p) - o, w = Math.round(m + y) - a;
    Math.abs(x) !== 1 && (h -= x), Math.abs(w) !== 1 && (m -= w);
  }
  return ra(c.left, c.top, h, m);
}
var xm = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof xr(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof xr(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function Sm(r) {
  return r === xr(r).document.documentElement;
}
function Em(r) {
  return ml ? xm(r) ? _m(r) : bm(r) : Lf;
}
function km(r) {
  var o = r.x, a = r.y, u = r.width, c = r.height, p = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, y = Object.create(p.prototype);
  return Pf(y, {
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
function ra(r, o, a, u) {
  return { x: r, y: o, width: a, height: u };
}
var Cm = (
  /** @class */
  function() {
    function r(o) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ra(0, 0, 0, 0), this.target = o;
    }
    return r.prototype.isActive = function() {
      var o = Em(this.target);
      return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var o = this.contentRect_;
      return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
    }, r;
  }()
), Rm = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o, a) {
      var u = km(a);
      Pf(this, { target: o, contentRect: u });
    }
    return r;
  }()
), zm = (
  /** @class */
  function() {
    function r(o, a, u) {
      if (this.activeObservations_ = [], this.observations_ = new Of(), typeof o != "function")
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
        a.has(o) || (a.set(o, new Cm(o)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Rm(u.target, u.broadcastRect());
        });
        this.callback_.call(o, a, o), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), Df = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Of(), Mf = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var a = vm.getInstance(), u = new zm(o, a, this);
      Df.set(this, u);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  Mf.prototype[r] = function() {
    var o;
    return (o = Df.get(this))[r].apply(o, arguments);
  };
});
var Om = function() {
  return typeof Qo.ResizeObserver < "u" ? Qo.ResizeObserver : Mf;
}();
const Pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Om
}, Symbol.toStringTag, { value: "Module" })), Lm = /* @__PURE__ */ $h(Pm);
var Wd;
function Dm() {
  if (Wd) return jo;
  Wd = 1, Object.defineProperty(jo, "__esModule", {
    value: !0
  }), jo.default = V;
  var r = y(Rt()), o = p(/* @__PURE__ */ Ln()), a = p(Lm), u = p(na());
  const c = ["measureBeforeMount"];
  function p(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function y(F, z) {
    if (typeof WeakMap == "function") var b = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (y = function(v, g) {
      if (!g && v && v.__esModule) return v;
      var _, E, M = { __proto__: null, default: v };
      if (v === null || typeof v != "object" && typeof v != "function") return M;
      if (_ = g ? d : b) {
        if (_.has(v)) return _.get(v);
        _.set(v, M);
      }
      for (const q in v) q !== "default" && {}.hasOwnProperty.call(v, q) && ((E = (_ = Object.defineProperty) && Object.getOwnPropertyDescriptor(v, q)) && (E.get || E.set) ? _(M, q, E) : M[q] = v[q]);
      return M;
    })(F, z);
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(F) {
      for (var z = 1; z < arguments.length; z++) {
        var b = arguments[z];
        for (var d in b) ({}).hasOwnProperty.call(b, d) && (F[d] = b[d]);
      }
      return F;
    }, h.apply(null, arguments);
  }
  function m(F, z) {
    if (F == null) return {};
    var b, d, v = x(F, z);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(F);
      for (d = 0; d < g.length; d++) b = g[d], z.indexOf(b) === -1 && {}.propertyIsEnumerable.call(F, b) && (v[b] = F[b]);
    }
    return v;
  }
  function x(F, z) {
    if (F == null) return {};
    var b = {};
    for (var d in F) if ({}.hasOwnProperty.call(F, d)) {
      if (z.indexOf(d) !== -1) continue;
      b[d] = F[d];
    }
    return b;
  }
  function w(F, z, b) {
    return (z = P(z)) in F ? Object.defineProperty(F, z, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : F[z] = b, F;
  }
  function P(F) {
    var z = O(F, "string");
    return typeof z == "symbol" ? z : z + "";
  }
  function O(F, z) {
    if (typeof F != "object" || !F) return F;
    var b = F[Symbol.toPrimitive];
    if (b !== void 0) {
      var d = b.call(F, z);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (z === "string" ? String : Number)(F);
  }
  const X = "react-grid-layout";
  function V(F) {
    var z;
    return z = class extends r.Component {
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
          measureBeforeMount: v
        } = d, g = m(d, c);
        return v && !this.mounted ? /* @__PURE__ */ r.createElement("div", {
          className: (0, u.default)(this.props.className, X),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ r.createElement(F, h({
          innerRef: this.elementRef
        }, g, this.state));
      }
    }, w(z, "defaultProps", {
      measureBeforeMount: !1
    }), w(z, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: o.default.bool
    }), z;
  }
  return jo;
}
var $d;
function Mm() {
  return $d || ($d = 1, function(r) {
    r.exports = Rf().default, r.exports.utils = Er(), r.exports.calculateUtils = Cl(), r.exports.Responsive = dm().default, r.exports.Responsive.utils = zf(), r.exports.WidthProvider = Dm().default;
  }(Ys)), Ys.exports;
}
var Ud = Mm();
const Tm = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, dn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, Tf = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, qe = (r, o, a, u, c) => ({ i: r, x: o, y: a, w: u, h: c, minW: Math.min(u, 3), minH: 2, maxW: 12, maxH: 12 }), Wo = { lg: [qe("activity-history", 0, 0, 3, 4), qe("automations", 3, 0, 3, 4), qe("backup-restore", 6, 0, 3, 4), qe("security-status", 9, 0, 3, 3), qe("access-control", 0, 5, 6, 3), qe("alarm-configuration", 6, 4, 6, 8)], md: [qe("activity-history", 0, 0, 4, 4), qe("automations", 4, 0, 4, 4), qe("backup-restore", 0, 4, 4, 4), qe("access-control", 4, 4, 4, 3), qe("alarm-configuration", 0, 8, 8, 8), qe("security-status", 0, 16, 4, 3)], sm: [qe("activity-history", 0, 0, 4, 4), qe("automations", 0, 4, 4, 4), qe("backup-restore", 0, 8, 4, 4), qe("access-control", 0, 12, 4, 3), qe("alarm-configuration", 0, 15, 4, 8), qe("security-status", 0, 23, 4, 3)], xs: [qe("activity-history", 0, 0, 2, 4), qe("automations", 0, 4, 2, 4), qe("backup-restore", 0, 8, 2, 4), qe("access-control", 0, 12, 2, 3), qe("alarm-configuration", 0, 15, 2, 8), qe("security-status", 0, 23, 2, 3)], xxs: [qe("activity-history", 0, 0, 2, 4), qe("automations", 0, 4, 2, 4), qe("backup-restore", 0, 8, 2, 4), qe("access-control", 0, 12, 2, 3), qe("alarm-configuration", 0, 15, 2, 8), qe("security-status", 0, 23, 2, 3)] };
function gl(r, o, a) {
  return Object.entries(Tf).map(([u, c]) => ({ size: u, distance: Math.abs(Math.min(c.w, a) - r) + Math.abs(c.h - o) })).sort((u, c) => u.distance - c.distance)[0]?.size ?? "S";
}
function Nf(r, o) {
  const a = Tf[r];
  return { w: Math.min(a.w, o), h: a.h };
}
function Nm(r, o) {
  const a = gl(r.w, r.h, o), u = Nf(a, o);
  return { ...r, w: u.w, h: u.h, x: Math.max(0, Math.min(r.x, o - u.w)), size: a };
}
function yl(r, o) {
  return r.some((a) => a.i !== o.i && o.x < a.x + a.w && o.x + o.w > a.x && o.y < a.y + a.h && o.y + o.h > a.y);
}
function Am(r, o, a) {
  for (let u = 0; u < 240; u++) for (let c = 0; c <= a - o.w; c++) {
    const p = { ...o, x: c, y: u };
    if (!yl(r, p)) return p;
  }
  return { ...o, x: 0, y: Math.max(0, ...r.map((u) => u.y + u.h)) };
}
function Sr(r) {
  const o = {};
  return Object.keys(dn).forEach((a) => {
    const u = dn[a], c = Array.isArray(r?.[a]) ? r[a] : [], p = new Map(c.map((x) => [x.i, x])), y = (Wo[a] || []).map((x) => {
      const w = p.get(x.i);
      if (!w) return { ...x };
      const P = Math.min(Math.max(1, w.w), u);
      return { ...x, ...w, w: P, x: Math.max(0, Math.min(w.x, u - P)), y: Math.max(0, w.y) };
    }), h = new Set(y.map((x) => x.i)), m = c.filter((x) => !h.has(x.i)).map((x) => ({ ...x, w: Math.min(Math.max(1, x.w), u), x: Math.max(0, Math.min(x.x, u - Math.min(x.w, u))), y: Math.max(0, x.y) }));
    o[a] = [...y, ...m];
  }), o;
}
class Im {
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
const Bm = Ud.WidthProvider(Ud.Responsive);
function jm({ widget: r, node: o, editing: a, size: u, onSize: c, onHide: p, onReset: y }) {
  const h = ht.useRef(null);
  return ht.useLayoutEffect(() => {
    h.current?.appendChild(o), o.draggable = !1, o.querySelector(":scope > .panel-edit-overlay")?.remove(), a ? o.setAttribute("inert", "") : o.removeAttribute("inert");
  }, [o, a]), /* @__PURE__ */ $e.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ $e.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ $e.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${r.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ $e.jsx("strong", { children: r.title }),
      /* @__PURE__ */ $e.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ $e.jsx("summary", { "aria-label": `Opciones de ${r.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ $e.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ $e.jsx("span", { children: "Tamaño" }),
          /* @__PURE__ */ $e.jsx("div", { children: ["S", "M", "L", "XL"].map((m) => /* @__PURE__ */ $e.jsx("button", { type: "button", className: m === u ? "active" : "", onClick: () => c(m), children: m }, m)) }),
          /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: y, children: "Restablecer widget" }),
          /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: p, children: "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ $e.jsx("div", { className: "argus-widget__content", ref: h })
  ] });
}
function Fm({ widgets: r, nodes: o, storage: a, userId: u, dashboardId: c, onEditing: p, registerEditor: y }) {
  const h = ht.useMemo(() => Object.fromEntries(r.map((Y) => [Y.id, Y.visible])), [r]), [m, x] = ht.useState(Wo), [w, P] = ht.useState(h), [O, X] = ht.useState(!1), [V, F] = ht.useState(!1), [z, b] = ht.useState("lg"), [d, v] = ht.useState(""), g = ht.useRef(Wo), _ = ht.useRef(), E = ht.useRef(!1);
  ht.useEffect(() => {
    y(X);
  }, [y]), ht.useEffect(() => {
    let Y = !0;
    return F(!1), Promise.all([a.load(u, c), a.loadVisibility?.(u, c)]).then(([Z, J]) => {
      if (!Y) return;
      const U = Sr(Z);
      x(U), g.current = U, J && P({ ...h, ...J }), F(!0);
    }), () => {
      Y = !1;
    };
  }, [a, u, c, h]), ht.useEffect(() => {
    p(O), V && E.current && !O && a.save(u, c, g.current), E.current = O;
  }, [O, V, p, a, u, c]), ht.useEffect(() => {
    const Y = (Z) => {
      O && (Z.key === "Escape" ? (X(!1), v("Edición finalizada")) : Z.key === "Enter" && Z.target === document.body && X(!1));
    };
    return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
  }, [O]), ht.useEffect(() => () => clearTimeout(_.current), []);
  const M = (Y, Z = !1) => {
    x(Y), g.current = Y, clearTimeout(_.current), _.current = window.setTimeout(() => a.save(u, c, Y), Z ? 0 : 550);
  }, q = (Y, Z) => {
    const J = { ...w, [Y]: Z };
    P(J), a.saveVisibility?.(u, c, J), v(Z ? "Widget visible" : "Widget oculto");
  }, W = (Y, Z, J) => {
    const U = g.current, le = U[z] || [], ne = le.filter((_e) => _e.i !== Y), L = yl(ne, Z) ? Am(ne, Z, dn[z]) : Z, H = { ...U, [z]: le.map((_e) => _e.i === Y ? L : _e) };
    M(H, !0), v(J);
  }, te = (Y, Z) => {
    const J = (g.current[z] || []).find((le) => le.i === Y);
    if (!J) return;
    const U = Nf(Z, dn[z]);
    W(Y, { ...J, ...U, x: Math.max(0, Math.min(J.x, dn[z] - U.w)) }, `Tamaño ${Z}`);
  }, ce = (Y) => {
    const Z = (Wo[z] || []).find((J) => J.i === Y);
    Z && W(Y, { ...Z }, "Widget restablecido");
  }, se = (Y, Z, J) => {
    const U = Nm(J, dn[z]);
    W(J.i, U, `Tamaño ${gl(U.w, U.h, dn[z])}`);
  }, oe = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await a.reset(u, c);
    const Y = Sr(null);
    P(h), M(Y, !0), v("Diseño predeterminado restaurado");
  }, fe = m[z] || [];
  return V ? /* @__PURE__ */ $e.jsxs("section", { className: `argus-dashboard ${O ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ $e.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: () => X((Y) => !Y), children: O ? "✓ Listo" : "✥ Editar tablero" }),
      O && /* @__PURE__ */ $e.jsxs($e.Fragment, { children: [
        /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: oe, children: "Restablecer diseño" }),
        /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: r.filter((Y) => w[Y.id] === !1).map((Y) => /* @__PURE__ */ $e.jsxs("button", { type: "button", onClick: () => q(Y.id, !0), children: [
          "Mostrar ",
          Y.title
        ] }, Y.id)) })
      ] })
    ] }),
    /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: d }),
    /* @__PURE__ */ $e.jsx(Bm, { className: "argus-dashboard-grid", layouts: m, breakpoints: Tm, cols: dn, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: O, isResizable: O, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (Y) => b(Y), onLayoutChange: (Y, Z) => {
      O && (x(Z), g.current = Z);
    }, onResizeStop: se, onDragStop: (Y, Z, J) => {
      const U = (g.current[z] || []).filter((le) => le.i !== J.i);
      if (yl(U, J)) {
        x({ ...g.current }), v("Posición bloqueada por colisión");
        return;
      }
      W(J.i, J, "Posición guardada");
    }, useCSSTransforms: !0, children: r.filter((Y) => w[Y.id] !== !1 && o.has(Y.id)).map((Y) => {
      const Z = fe.find((U) => U.i === Y.id), J = Z ? gl(Z.w, Z.h, dn[z]) : Y.size;
      return /* @__PURE__ */ $e.jsx("div", { children: /* @__PURE__ */ $e.jsx(jm, { widget: Y, node: o.get(Y.id), editing: O, size: J, onSize: (U) => te(Y.id, U), onHide: () => q(Y.id, !1), onReset: () => ce(Y.id) }) }, Y.id);
    }) })
  ] }) : /* @__PURE__ */ $e.jsx("section", { className: "argus-dashboard", children: /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: "Cargando tablero…" }) });
}
const Vd = [
  { id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 },
  { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 },
  { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 },
  { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 },
  { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 },
  { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }
];
class qm extends Im {
  constructor(o) {
    super(), this.panel = o;
  }
  record() {
    return this.panel._ui?.dashboard?.react_layout_v2 || {};
  }
  async remote(o) {
    if (!this.panel._send) return;
    const u = { ...this.record(), ...o, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, c = { ...this.panel._ui?.dashboard || {}, react_layout_v2: u }, p = this.panel._dashboard?.entry_id || this.panel._dashboard?.entries?.[0]?.entry_id;
    await this.panel._send("argus/save_ui", { dashboard: c, ...p ? { entry_id: p } : {} }), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = c;
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
function Af(r) {
  const o = r.shadowRoot?.getElementById("edit-widgets-label");
  (o?.closest("button") || o)?.remove(), r.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((u) => u.remove());
  let a = r.shadowRoot?.getElementById("argus-react-editor-only");
  a || (a = document.createElement("style"), a.id = "argus-react-editor-only", a.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", r.shadowRoot.appendChild(a));
}
function Hm(r) {
  Af(r);
  const o = r.shadowRoot?.getElementById("widget-grid"), a = r._dashboard?.entry_id || r._dashboard?.entries?.[0]?.entry_id;
  if (!o || !a || r._argusReactRoot) return;
  let u = r.shadowRoot.getElementById("argus-react-dashboard-style");
  u || (u = document.createElement("style"), u.id = "argus-react-dashboard-style", u.textContent = Jh + em + tm, r.shadowRoot.appendChild(u));
  const c = /* @__PURE__ */ new Map();
  Vd.forEach((h) => {
    const m = r.shadowRoot.getElementById(h.nativeId);
    m && c.set(h.id, m);
  });
  const p = document.createElement("div");
  p.id = "argus-react-dashboard-root", o.appendChild(p);
  const y = Zh.createRoot(p);
  r._argusReactRoot = y, y.render(/* @__PURE__ */ $e.jsx(Fm, { widgets: Vd, nodes: c, storage: new qm(r), userId: r._currentProfile?.id || r._hass?.user?.id || "anonymous", dashboardId: a, onEditing: (h) => {
    r._widgetEditing = h, o.classList.toggle("editing", h);
  }, registerEditor: (h) => {
    r._argusReactSetEditing = h;
  } }));
}
function Wm(r) {
  if (!r || r.__argusReactDashboard) return;
  r.__argusReactDashboard = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load;
  o.connectedCallback = function() {
    const c = a?.call(this);
    return Af(this), c;
  }, o._load = async function() {
    const c = await u?.call(this);
    return Hm(this), c;
  }, o._toggleWidgetEditing = function() {
    this._argusReactSetEditing?.(!this._widgetEditing);
  };
}
function Gd(r) {
  const o = r._hass?.auth?.accessToken;
  return o ? { Authorization: `Bearer ${o}` } : {};
}
function $m(r) {
  const o = r?.prototype;
  !o || o.__argusMediaClient || (o.__argusMediaClient = !0, o._loadUploadedFiles = async function() {
    try {
      const a = await fetch("/api/argus/media", { headers: Gd(this), credentials: "same-origin" });
      if (!a.ok) throw new Error(`HTTP ${a.status}`);
      const u = await a.json();
      this._uploadedFiles = Array.isArray(u.files) ? u.files : [];
    } catch (a) {
      console.error("Private Argus media listing failed", a), this._uploadedFiles = [];
    }
    this._renderUploadedFiles?.();
  }, o._deleteUploadedFile = async function(a) {
    try {
      const u = await fetch(`/api/argus/media/${encodeURIComponent(a)}`, { method: "DELETE", headers: Gd(this), credentials: "same-origin" });
      if (!u.ok) throw new Error(`HTTP ${u.status}`);
      this._uploadedFiles = (this._uploadedFiles ?? []).filter((p) => p.name !== a);
      const c = [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]];
      for (const [p, y] of c) {
        const h = this.shadowRoot.getElementById(p);
        h?.value.includes(`/${a}?`) && (h.value = "", this[y] = "");
      }
      this._renderUploadedFiles?.();
    } catch (u) {
      const c = u instanceof Error ? u.message : String(u);
      console.error("Private Argus media deletion failed", u), window.alert(this._format?.("delete_file_error", { error: c }) ?? c);
    }
  });
}
const Fo = (r, o) => r.getElementById(o), qo = (r, o, a) => r._t?.(o) ?? a;
function Um(r) {
  const o = r?.prototype;
  !o || o.__argusSecurityClient || (o.__argusSecurityClient = !0, o._savePin = async function() {
    const a = this.shadowRoot.getElementById("pin-status"), c = this._dashboard?.entries?.[0], p = Fo(this.shadowRoot, "current-pin")?.value ?? "", y = Fo(this.shadowRoot, "new-pin-1")?.value ?? "", h = Fo(this.shadowRoot, "new-pin-2")?.value ?? "", m = (x) => {
      a && (a.textContent = x, a.className = "status err");
    };
    if (!c?.entry_id) return m("No Argus config entry is available");
    if (c.pin_configured && !p) return m(qo(this, "pin_incorrect", "PIN incorrecto"));
    if (y !== h) return m(qo(this, "pin_mismatch", "Los PIN no coinciden"));
    if (y && !/^\d{4,12}$/.test(y)) return m("PIN: se requieren entre 4 y 12 dígitos");
    if (!this._send) return m("Argus WebSocket is unavailable");
    try {
      await this._send("argus/update_master_pin", { entry_id: c.entry_id, pin: y, current_pin: p }), c.pin_configured = !!y, a && (a.textContent = y ? qo(this, "pin_updated", "PIN actualizado") : qo(this, "pin_deleted", "PIN eliminado"), a.className = "status ok");
      for (const x of ["current-pin", "new-pin-1", "new-pin-2"]) {
        const w = Fo(this.shadowRoot, x);
        w && (w.value = "");
      }
      this._syncAccessSummary?.(), window.setTimeout(() => {
        this._load?.();
      }, 800);
    } catch (x) {
      m(x instanceof Error ? x.message : String(x));
    }
  }, o._handleForgotPin = function() {
    const a = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", u = this.shadowRoot.getElementById("pin-status");
    u ? (u.textContent = a, u.className = "status err") : window.alert(a);
  });
}
const Vm = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block}.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;
function Gm(r) {
  const o = r.__argusWebgl;
  if (!o) return;
  cancelAnimationFrame(o.frame), o.observer?.disconnect(), document.removeEventListener("visibilitychange", o.visibility), o.gl.deleteBuffer(o.buffer), o.gl.deleteProgram(o.program);
  const a = o.gl.getExtension("WEBGL_lose_context");
  a && a.loseContext(), delete r.__argusWebgl;
}
function Ym(r) {
  const o = r?.prototype;
  if (!o || o.__argusPremiumExperience) return;
  o.__argusPremiumExperience = !0;
  const a = o.connectedCallback;
  o.connectedCallback = function() {
    const c = a?.call(this);
    return queueMicrotask(() => {
      if (this.shadowRoot && !this.shadowRoot.getElementById("argus-premium-style")) {
        const p = document.createElement("style");
        p.id = "argus-premium-style", p.textContent = Vm, this.shadowRoot.append(p);
      }
    }), c;
  };
  const u = o.disconnectedCallback;
  o.disconnectedCallback = function() {
    const c = this.shadowRoot;
    return c && c.querySelectorAll(".wx-webgl").forEach(Gm), u?.call(this);
  };
}
const vl = "argus-motion-system-v2049", $o = "__argusMotionV2049", Yd = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", el = `
:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;
function Xm(r) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
  const o = String(r._argusPerfProfile || r.dataset?.argusPerf || "").toLowerCase();
  return o === "essential" || r.classList.contains("argus-perf-essential") ? "essential" : o === "light" ? "light" : "full";
}
function Xd(r) {
  if (r[$o]) return r[$o];
  const o = {
    panel: r,
    active: !1,
    observer: null,
    observerFrame: 0,
    rafs: /* @__PURE__ */ new Set(),
    timers: /* @__PURE__ */ new Set(),
    cleanups: /* @__PURE__ */ new Set(),
    pressed: /* @__PURE__ */ new Set(),
    profileControl: null,
    api: null
  };
  return Object.defineProperty(r, $o, { value: o, writable: !0, configurable: !0 }), o;
}
function Qm(r, o) {
  const a = requestAnimationFrame(() => {
    r.rafs.delete(a), r.active && o();
  });
  return r.rafs.add(a), a;
}
function tl(r, o, a, u, c) {
  o.addEventListener(a, u, c), r.cleanups.add(() => o.removeEventListener(a, u, c));
}
function zl(r) {
  const o = r.shadowRoot;
  if (!o) return;
  let a = o.getElementById(vl);
  a ? a.textContent !== el && (a.textContent = el) : (a = document.createElement("style"), a.id = vl, a.textContent = el, o.appendChild(a));
}
function ki(r) {
  r.profileControl?.classList.remove("is-entering"), r.profileControl = null, r.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function Qd(r, o) {
  ki(r), r.profileControl = o, o?.classList.add("is-entering"), r.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function Km(r) {
  r.observer || !r.panel.shadowRoot || (r.observer = new MutationObserver((o) => {
    o.some((a) => [...a.addedNodes].some((u) => u instanceof Element && u.id !== vl)) && (r.observerFrame || (r.observerFrame = Qm(r, () => {
      r.observerFrame = 0, zl(r.panel);
    })));
  }), r.observer.observe(r.panel.shadowRoot, { childList: !0, subtree: !0, attributes: !1 }));
}
function Zm(r) {
  const o = r.panel.shadowRoot;
  if (!o) return;
  const a = (u) => {
    u && (u.classList.remove("argus-motion-press"), r.pressed.delete(u));
  };
  tl(r, o, "pointerdown", (u) => {
    if (Xm(r.panel) === "essential") return;
    const p = u.target?.closest?.(Yd);
    !p || p.disabled || (p.classList.add("argus-motion-press"), r.pressed.add(p));
  }, !0), ["pointerup", "pointercancel", "pointerleave"].forEach((u) => tl(r, o, u, (c) => {
    const p = c.target;
    a(p?.closest?.(Yd));
  }, !0)), tl(r, o, "click", (u) => {
    const c = u.target, p = c?.closest?.(".user-card");
    p && p.dataset.isOwn === "true" && p.dataset.pinRequired !== "true" && Qd(r, p), c?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && Qd(r, c.closest("button")), c?.closest?.("#btn-cancel-login") && ki(r);
  }, !0);
}
function nl(r) {
  r.active || !r.panel.shadowRoot || (r.active = !0, zl(r.panel), Zm(r), Km(r), r.api = Object.freeze({ animateView: () => {
  }, stagger: () => {
  }, transitionBackground: () => () => {
  }, animateDashboard: () => {
  } }));
}
function Jm(r) {
  r.active = !1, r.observer?.disconnect(), r.observer = null, r.observerFrame && cancelAnimationFrame(r.observerFrame), r.observerFrame = 0, r.rafs.forEach(cancelAnimationFrame), r.rafs.clear(), r.timers.forEach(clearTimeout), r.timers.clear(), r.cleanups.forEach((o) => o()), r.cleanups.clear(), r.pressed.forEach((o) => o.classList.remove("argus-motion-press")), r.pressed.clear(), ki(r);
}
function eg(r) {
  const o = r?.prototype;
  if (!o || o.__argusMotionSystemV2049) return;
  o.__argusMotionSystemV2049 = !0;
  const a = o.connectedCallback, u = o.disconnectedCallback, c = o._load;
  o.connectedCallback = function() {
    const p = a?.call(this), y = Xd(this);
    return this.shadowRoot ? nl(y) : queueMicrotask(() => nl(y)), p;
  }, o.disconnectedCallback = function() {
    const p = this[$o];
    return p && Jm(p), u?.call(this);
  }, o._load = async function(...p) {
    const y = Xd(this);
    try {
      const h = await c?.apply(this, p);
      return !y.active && this.isConnected && nl(y), zl(this), ki(y), h;
    } catch (h) {
      throw ki(y), h;
    }
  };
}
const Kd = "__argusStableRenderV2050";
function Yn(r) {
  const o = r.shadowRoot;
  if (!o) return;
  const a = /* @__PURE__ */ new Date(), u = a.toLocaleTimeString(r._getLocale?.() || void 0, { hour: "2-digit", minute: "2-digit" }), c = a.toLocaleDateString(r._getLocale?.() || void 0, { weekday: "short", month: "short", day: "numeric" }), p = o.getElementById("hero-clock-time"), y = o.getElementById("hero-clock-date");
  p && p.textContent !== u && (p.textContent = u), y && y.textContent !== c && (y.textContent = c), o.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((h) => {
    h && h.textContent !== u && (h.textContent = u);
  });
}
function Zd(r, o, a, u, c, p, y) {
  return [
    o?.entity_id || "",
    o?.entry_id || "",
    a || "",
    p ? "1" : "0",
    y ? "1" : "0",
    c || "",
    u?.arming_waiting_for_sensors ? "1" : "0",
    JSON.stringify(u?.arming_blocking_sensors || []),
    JSON.stringify(u?.triggered_sensors || []),
    r._backgroundMode || "",
    r._panelBgFile || "",
    r._getWeatherEntity?.()?.state || "",
    r._hass?.states?.["sun.sun"]?.state || "",
    r._getDisplayedTemperature?.() || "",
    r._homeName || "",
    r._kioskLocked ? "1" : "0"
  ].join("|");
}
function rl(r, o) {
  !o || o._argusDelegated || (o._argusDelegated = !0, o.addEventListener("click", (a) => {
    const u = a.target;
    if (u.closest?.('button[data-action="unlock-kiosk"]')) {
      r._requestKioskUnlock?.();
      return;
    }
    const p = u.closest?.('button[data-action="sos"]');
    if (p) {
      r._sosEntryIdx = Number(p.dataset.idx), r.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
      return;
    }
    const y = u.closest?.('button[data-action="stop-sos"]');
    if (y) {
      r._stopSOS?.(Number(y.dataset.idx));
      return;
    }
    const h = u.closest?.("button[data-fullscreen]");
    if (h) {
      r._toggleFullscreen?.(h.closest(".entry"));
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
function tg(r) {
  const o = r?.prototype;
  if (!o || o[Kd]) return;
  o[Kd] = !0;
  const a = o._renderEntries, u = Object.getOwnPropertyDescriptor(o, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o), "hass");
  o._updateLiveClocks = function() {
    Yn(this);
  }, o._startClock = function() {
    this._clockInterval && clearInterval(this._clockInterval), Yn(this), this._clockInterval = setInterval(() => {
      this._dashboard && Yn(this);
    }, 1e3);
  }, o._renderEntries = function(h = !1) {
    const m = this.shadowRoot;
    if (!m) return a?.call(this, h);
    const x = m.getElementById("entries"), w = this._dashboard?.entries || [];
    if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !x || !w.length) {
      const F = a?.call(this, h);
      return rl(this, m.getElementById("entries")), Yn(this), F;
    }
    const P = [...x.querySelectorAll("article.entry")];
    if (!(h || P.length !== w.length || !P.every((F) => F.querySelector(".entry-content")))) {
      let F = !0;
      for (let z = 0; z < w.length; z++) {
        const b = w[z], d = this._hass?.states?.[b.entity_id], v = d?.state || b.state || "unavailable", g = d?.attributes || {}, _ = !!g.argus_panic_active, E = this._fullscreenIdx === z || !!this._kioskLocked && (this._kioskEntryId === b.entry_id || w.length === 1), M = String(v).replace("armed_", "");
        let q = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[M] || this._ui?.modes?.[M] || {}, W = q.sensors || [];
        if (v === "disarmed" || !W.length) {
          const fe = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, Y = /* @__PURE__ */ new Set();
          ["away", "home", "night", "vacation"].forEach((Z) => {
            (fe[Z]?.sensors || []).forEach((J) => Y.add(J));
          }), W = [...Y];
        }
        const te = q.bypassed_sensors || [], se = W.filter((fe) => !te.includes(fe)).map((fe) => {
          const Y = this._hass?.states?.[fe], Z = Y?.attributes?.battery_level ?? Y?.attributes?.battery_percentage ?? "";
          return `${fe}:${Y?.state || ""}:${Z}`;
        }).join(","), oe = Zd(this, b, v, g, se, _, E);
        if (this._instanceSignatures.get(z) !== oe) {
          F = !1;
          break;
        }
      }
      if (F) {
        const b = w.map((g) => this._hass?.states?.[g.entity_id]?.state || "unavailable").some((g) => String(g).startsWith("armed") || g === "triggered" || g === "pending"), d = m.getElementById("global-status");
        if (d) {
          const g = (E) => this._t?.(E) || E, _ = `<span class="badge ${b ? "armed_away" : "disarmed"}">${g(b ? "system_armed" : "system_disarmed")}</span>`;
          d.innerHTML !== _ && (d.innerHTML = _);
        }
        const v = m.getElementById("hero-security-pill");
        if (v) {
          const g = (M) => this._t?.(M) || M, _ = g(b ? "system_armed" : "system_disarmed"), E = `<i class="hero-live" style="background:${b ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${b ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(_) || _}`;
          v.innerHTML !== E && (v.innerHTML = E);
        }
        Yn(this), rl(this, x);
        return;
      }
    }
    const X = a?.call(this, h === !0 ? !0 : void 0);
    return [...x.querySelectorAll("article.entry")].forEach((F, z) => {
      const b = w[z];
      if (!b) return;
      const d = this._hass?.states?.[b.entity_id], v = d?.state || b.state || "unavailable", g = d?.attributes || {}, _ = !!g.argus_panic_active, E = this._fullscreenIdx === z || !!this._kioskLocked && (this._kioskEntryId === b.entry_id || w.length === 1), M = String(v).replace("armed_", "");
      let q = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[M] || this._ui?.modes?.[M] || {}, W = q.sensors || [];
      if (v === "disarmed" || !W.length) {
        const fe = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, Y = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((Z) => {
          (fe[Z]?.sensors || []).forEach((J) => Y.add(J));
        }), W = [...Y];
      }
      const te = q.bypassed_sensors || [], se = W.filter((fe) => !te.includes(fe)).map((fe) => {
        const Y = this._hass?.states?.[fe], Z = Y?.attributes?.battery_level ?? Y?.attributes?.battery_percentage ?? "";
        return `${fe}:${Y?.state || ""}:${Z}`;
      }).join(","), oe = Zd(this, b, v, g, se, _, E);
      this._instanceSignatures.set(z, oe), F.dataset.renderSig = oe;
    }), rl(this, x), Yn(this), X;
  };
  const c = u?.get, p = u?.set;
  p && Object.defineProperty(o, "hass", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return c ? c.call(this) : this._hass;
    },
    set: function(h) {
      const m = this._hass;
      if (m && this._dashboard?.entries?.length) {
        const x = /* @__PURE__ */ new Set(), w = (v) => {
          !v || typeof v != "object" || (Array.isArray(v.sensors) && v.sensors.forEach((g) => x.add(g)), Object.values(v).forEach((g) => {
            g && typeof g == "object" && w(g);
          }));
        };
        w(this._ui?.modes);
        const P = m.language !== h.language;
        P && !this._manualLang && this._refreshLocalizedUi?.();
        const O = this._dashboard.entries.some((v) => v.entity_id && m.states[v.entity_id]?.state !== h.states[v.entity_id]?.state), X = [...x].some(
          (v) => m.states[v]?.state !== h.states[v]?.state || m.states[v]?.attributes?.battery_level !== h.states[v]?.attributes?.battery_level || m.states[v]?.attributes?.battery_percentage !== h.states[v]?.attributes?.battery_percentage
        ), V = this._temperatureSource === "auto" ? null : this._temperatureSource, F = V && m.states[V]?.state !== h.states[V]?.state, z = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(h.states).find((v) => v.entity_id?.startsWith("weather."))?.entity_id, b = z && (m.states[z]?.state !== h.states[z]?.state || m.states[z]?.attributes?.temperature !== h.states[z]?.attributes?.temperature), d = O || X || F || b || P;
        this._hass = h, this._updateTheme?.(), d ? (this._renderEntries?.(P), this._renderActivityLog?.()) : Yn(this);
        return;
      }
      return p.call(this, h);
    }
  });
  const y = o.connectedCallback;
  o.connectedCallback = function() {
    const h = y?.call(this);
    return this._startClock?.(), h;
  };
}
const Jd = "argus-v2050-alarm-visuals", ng = {
  armed_home: /EN CASA|HOME/i,
  armed_away: /AUSENTE|AWAY/i,
  armed_night: /NOCHE|NIGHT/i,
  armed_vacation: /VACACIONES|VACATION/i
};
function rg(r, o) {
  const a = o?.entity_id || o?.alarm_entity_id;
  return String(o?.state || o?.alarm_state || o?.attributes?.state || r._hass?.states?.[a]?.state || "").toLowerCase();
}
function il(r, o, a) {
  r.classList.toggle("argus-action-active", a), r.dataset.argusAction = o;
  const u = o === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : o === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  r.style.setProperty("background", a ? u : "rgba(255,255,255,.105)", "important"), r.style.setProperty("background-image", a ? u : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), r.style.setProperty("border", a ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), r.style.setProperty("box-shadow", a ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important");
}
function ig(r) {
  const o = r.shadowRoot;
  if (!o) return;
  let a = o.getElementById(Jd);
  a || (a = document.createElement("style"), a.id = Jd, o.appendChild(a)), a.textContent = `
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
function ol(r) {
  if (!r.shadowRoot) return;
  ig(r);
  const o = r.shadowRoot.querySelectorAll(".entry");
  Array.from(o).forEach((a, u) => {
    const c = r._dashboard?.entries?.[u] || {}, p = c.attributes || r._hass?.states?.[c.entity_id]?.attributes || {}, y = rg(r, c), h = p.arming_blocking_sensors || [], m = y === "arming" || !!p.arming_waiting_for_sensors || !!h.length;
    a.classList.toggle("argus-arming", m), a.classList.toggle("argus-waiting", m);
    const x = a.querySelector(".entry-icon");
    let w = a.querySelector(".argus-shield-status");
    m && x ? (w || (w = document.createElement("span"), w.className = "argus-shield-status", x.insertAdjacentElement("afterend", w)), w.textContent = h.length ? `ESPERANDO ${h.length} SENSOR(ES)` : y === "arming" ? "ARMANDO…" : "ESPERANDO SENSORES") : w?.remove();
    const P = a.querySelector(".liquid-stack");
    if (P) {
      let V = P.querySelector(".argus-disarm-btn");
      if (!V) {
        V = document.createElement("button"), V.type = "button", V.className = "liquid-btn argus-disarm-btn", V.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", V.onclick = async () => {
          if (c.entry_id) {
            V.disabled = !0;
            try {
              await r._send?.("argus/perform_alarm_action", { entry_id: c.entry_id, action: "disarm" }), await r._load?.();
            } finally {
              V.disabled = !1;
            }
          }
        };
        const F = Array.from(P.children).find((z) => /SOS|PÁNICO|PANIC/i.test(z.textContent || ""));
        F ? P.insertBefore(V, F) : P.appendChild(V);
      }
      Array.from(P.querySelectorAll(".liquid-btn,button")).forEach((F) => {
        const z = F, b = String(z.textContent || "");
        if (/SOS|PÁNICO|PANIC/i.test(b)) il(z, "sos", !!p.argus_panic_active);
        else if (/DESARMAR|DISARM|OFF/i.test(b)) il(z, "disarm", y === "disarmed");
        else {
          const d = Object.entries(ng).find(([, v]) => v.test(b));
          d && il(z, d[0], y === d[0]);
        }
      });
    }
    const O = new Set((p.triggered_sensors || []).map(String)), X = new Set(h.map((V) => String(r._dashboard?.available_entities?.find((F) => F.entity_id === V)?.name || V).toLocaleLowerCase()));
    a.querySelectorAll(".console-sensor").forEach((V) => {
      const F = String(V.querySelector(".console-sensor-name")?.textContent || V.textContent || "").toLocaleLowerCase(), z = Array.from(X).some((d) => F.includes(d) || d.includes(F)), b = Array.from(O).some((d) => F.includes(String(d).toLocaleLowerCase()));
      V.classList.toggle("argus-blocking", z), V.classList.toggle("argus-triggered-sensor", b);
    });
  });
}
function og(r) {
  const o = r?.prototype;
  if (!o || o.__v2050AlarmVisuals) return;
  o.__v2050AlarmVisuals = !0;
  const a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const p = a?.call(this);
    return ol(this), p;
  }, o._load = async function(...p) {
    const y = await u?.apply(this, p);
    return ol(this), y;
  }, o._renderEntries = function(...p) {
    const y = c?.apply(this, p);
    return ol(this), y;
  };
}
const ag = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], ef = { es: ["Configurar widgets", "Arrastrar", "Ocultar", "Mostrar", "Conectado", "Sin sensores configurados", "Todos los sensores están omitidos"], en: ["Configure widgets", "Drag", "Hide", "Show", "Connected", "No sensors configured", "All sensors are bypassed"], fr: ["Configurer les widgets", "Déplacer", "Masquer", "Afficher", "Connecté", "Aucun capteur configuré", "Tous les capteurs sont ignorés"], pt: ["Configurar widgets", "Arrastar", "Ocultar", "Mostrar", "Conectado", "Nenhum sensor configurado", "Todos os sensores estão ignorados"], it: ["Configura widget", "Trascina", "Nascondi", "Mostra", "Connesso", "Nessun sensore configurato", "Tutti i sensori sono esclusi"], zh: ["配置小组件", "拖动", "隐藏", "显示", "已连接", "未配置传感器", "所有传感器均已绕过"], ru: ["Настроить виджеты", "Перетащить", "Скрыть", "Показать", "Подключено", "Датчики не настроены", "Все датчики исключены"] }, sg = (r) => {
  const o = String(r._manualLang || r._hass?.language || "en").toLowerCase().split(/[-_]/)[0];
  return ef[o] || ef.en;
}, tf = (r) => [...r?.children || []].filter((o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")), al = (r, o) => {
  if (!r) return;
  const a = r.querySelector("[data-fullscreen]");
  let u = r.querySelector("[data-exit-fullscreen]");
  u || (u = document.createElement("button"), u.className = "ghost entry-exit-fs", u.dataset.exitFullscreen = "", u.textContent = "×", u.style.cssText = "position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25)", u.onclick = () => r.getRootNode().host._exitFullscreenView(), r.appendChild(u)), a && (a.style.display = o ? "none" : "block"), u.style.display = o ? "block" : "none";
};
function nf(r) {
  if (r.shadowRoot?.getElementById("argus-ui-fix")) return;
  const o = document.createElement("style");
  o.id = "argus-ui-fix", o.textContent = ".grid.editing .panel.widget-hidden-preview{opacity:.48!important}.widget-drag-handle{min-height:44px;display:flex;align-items:center;justify-content:center}.ios-fullscreen .entry-content.security-console{display:grid!important;grid-template-columns:minmax(230px,340px) minmax(150px,1fr) minmax(230px,380px)!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;gap:20px 32px!important;padding:56px 48px 32px!important;overflow:hidden!important}.ios-fullscreen .console-hud{grid-area:hud!important}.ios-fullscreen .liquid-stack{grid-area:modes!important;width:100%!important}.ios-fullscreen .entry-icon{grid-area:icon!important}.ios-fullscreen .console-sensors{grid-area:sensors!important;max-height:60vh!important;overflow:auto!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console{grid-template-columns:1fr!important;grid-template-rows:auto auto auto auto!important;grid-template-areas:'hud' 'icon' 'modes' 'sensors'!important;padding:64px 18px 22px!important;overflow-y:auto!important}.ios-fullscreen .liquid-stack,.ios-fullscreen .console-sensors{max-width:420px!important;margin:auto!important}}", r.shadowRoot.appendChild(o);
}
function sl(r) {
  const o = sg(r), a = r.shadowRoot;
  if (!a) return;
  const u = a.getElementById("edit-widgets-label");
  u && (u.textContent = r._widgetEditing ? "✓ " + (r._t?.("done") || "Done") : "⚙️ " + o[0]), a.querySelectorAll(".widget-drag-handle").forEach((c) => c.textContent = "⋮⋮ " + o[1]), a.querySelectorAll(".widget-toggle-btn").forEach((c) => c.textContent = /mostrar|show|afficher|mostra|显示|показ/i.test(c.textContent) ? o[3] : o[2]), a.querySelectorAll(".console-empty").forEach((c) => c.textContent = /omit|bypass|ignor|exclu|绕过|исключ/i.test(c.textContent) ? o[6] : o[5]), a.querySelectorAll(".entry").forEach((c) => [...c.children].filter((p) => ["CONECTADO", "CONNECTED"].includes(p.textContent?.trim())).forEach((p) => {
    const y = p.firstElementChild;
    p.textContent = "", y && p.appendChild(y), p.append(o[4]);
  }));
}
function lg(r) {
  if (!r || r.__uiAudit) return;
  r.__uiAudit = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._applyTranslations, c = o._renderEntries, p = o._initWidgetGrid, y = o._saveWidgetLayout;
  o.connectedCallback = function() {
    return nf(this), a?.call(this);
  }, o._applyTranslations = function() {
    const h = u?.call(this);
    return sl(this), h;
  }, o._renderEntries = function() {
    const h = c?.call(this);
    return nf(this), this.shadowRoot?.querySelectorAll(".entry").forEach((m, x) => al(m, this._fullscreenIdx === x || m.classList.contains("ios-fullscreen"))), sl(this), h;
  }, o._toggleFullscreen = function(h) {
    if (h = h || this.shadowRoot?.querySelector(".entry"), !h) return;
    this._fullscreenIdx = Number(h.querySelector("[data-fullscreen]")?.dataset.fullscreen || 0), this._kioskLocked = !1, this._kioskTarget = h, this.classList.add("fullscreen-active"), h.classList.add("ios-fullscreen"), al(h, !0), document.body.style.overflow = "hidden", (h.requestFullscreen || h.webkitRequestFullscreen)?.call(h).catch?.(() => {
    });
  }, o._exitFullscreenView = async function() {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : document.webkitExitFullscreen?.();
    } catch {
    }
    this.shadowRoot?.querySelectorAll(".entry.ios-fullscreen").forEach((h) => {
      h.classList.remove("ios-fullscreen"), al(h, !1);
    }), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskTarget = null, document.body.style.overflow = "";
  }, o._initWidgetGrid = function() {
    if (!this._widgetConfigLoaded) {
      const m = this._ui?.dashboard?.widget_layout;
      if (m) try {
        localStorage.setItem("argus-widgets-v1", JSON.stringify(m));
      } catch {
      }
      this._widgetConfigLoaded = !0;
    }
    p?.call(this);
    const h = this.shadowRoot?.getElementById("widget-grid");
    tf(h).forEach((m) => m.draggable = !!this._widgetEditing), h && !h._auditDrag && (h._auditDrag = !0, h.addEventListener("dragover", (m) => {
      if (!this._widgetEditing) return;
      m.preventDefault();
      const x = h.querySelector(".dragging");
      if (!x) return;
      let w = null, P = 1 / 0;
      if (tf(h).filter((O) => O !== x).forEach((O) => {
        const X = O.getBoundingClientRect(), V = Math.hypot(m.clientX - X.x - X.width / 2, m.clientY - X.y - X.height / 2);
        V < P && (P = V, w = O);
      }), w) {
        const O = w.getBoundingClientRect();
        w[m.clientX > O.x + O.width / 2 || m.clientY > O.y + O.height / 2 ? "after" : "before"](x);
      }
    })), sl(this);
  }, o._saveWidgetLayout = function() {
    y?.call(this);
    const h = this._widgetConfig || ag;
    this._ui = this._ui || {};
    const m = { ...this._ui.dashboard || {}, widget_layout: h };
    this._ui.dashboard = m, clearTimeout(this._widgetSaveTimer), this._widgetSaveTimer = setTimeout(() => this._send("argus/save_ui", { dashboard: m }).catch((x) => console.error("Widget layout save failed", x)), 180);
  }, o._changeWidgetSize = function(h, m) {
    const x = (this._widgetConfig || []).find((P) => P.id === h);
    if (!x) return;
    x.size = m;
    const w = this.shadowRoot?.getElementById("w-" + h);
    w && (w.dataset.size = m), this._renderWidgetLayout(), this._saveWidgetLayout();
  }, o._toggleWidgetVisibility = function(h) {
    const m = (this._widgetConfig || []).find((w) => w.id === h);
    if (!m) return;
    m.hidden = !m.hidden;
    const x = this.shadowRoot?.getElementById("w-" + h);
    x && (x.classList.toggle("widget-hidden-preview", m.hidden && this._widgetEditing), x.style.display = m.hidden && !this._widgetEditing ? "none" : ""), this._renderWidgetLayout(), this._saveWidgetLayout();
  };
}
function rf(r) {
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
function ug(r) {
  if (!r || r.__gridPolish) return;
  r.__gridPolish = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._initWidgetGrid;
  o.connectedCallback = function() {
    return rf(this), a?.call(this);
  }, o._initWidgetGrid = function() {
    const c = u?.call(this);
    return rf(this), c;
  };
}
const of = { es: { on: "Conectado", off: "Argus desconectado · HA sin conexión" }, en: { on: "Connected", off: "Argus disconnected · HA offline" }, fr: { on: "Connecté", off: "Argus déconnecté · HA hors ligne" }, pt: { on: "Conectado", off: "Argus desconectado · HA sem conexão" }, it: { on: "Connesso", off: "Argus disconnesso · HA offline" }, zh: { on: "已连接", off: "Argus 已断开 · HA 离线" }, ru: { on: "Подключено", off: "Argus отключён · HA не в сети" } }, cg = (r) => {
  const o = String(r._manualLang || r._hass?.language || r._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
  return of[o] || of.en;
};
function dg(r) {
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
function fg(r) {
  let o = r.querySelector(".argus-connection-pill");
  if (o) return o;
  if (o = [...r.children].find((c) => c.tagName === "DIV" && (c.getAttribute("style") || "").includes("left:50%") && (c.getAttribute("style") || "").includes("top:12px")), !o) return null;
  o.className = "argus-connection-pill", o.removeAttribute("style");
  const a = r.querySelector(".console-hud"), u = a?.querySelector(".console-hud-right");
  return a && a.insertBefore(o, u || null), o;
}
function pg(r) {
  const o = !!r._hass && r._hass?.connection?.connected !== !1;
  return navigator.onLine !== !1 && o;
}
function Uo(r) {
  const o = cg(r), a = pg(r);
  r.shadowRoot?.querySelectorAll(".entry").forEach((u) => {
    const c = fg(u);
    if (!c) return;
    c.dataset.online = String(a), c.setAttribute("role", "status"), c.setAttribute("aria-live", "polite"), c.replaceChildren();
    const p = document.createElement("i");
    p.className = "argus-connection-dot";
    const y = document.createElement("span");
    y.className = "argus-connection-label", y.textContent = a ? o.on : o.off, c.append(p, y);
  });
}
function af(r) {
  dg(r), Uo(r);
}
function hg(r) {
  if (!r || r.__fullscreenPolish) return;
  r.__fullscreenPolish = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._renderEntries, p = Object.getOwnPropertyDescriptor(o, "hass");
  o.connectedCallback = function() {
    const y = a?.call(this);
    return this._argusOnlineHandler = () => Uo(this), window.addEventListener("online", this._argusOnlineHandler), window.addEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), this._argusConnectivityTimer = setInterval(() => Uo(this), 2500), queueMicrotask(() => af(this)), y;
  }, o.disconnectedCallback = function() {
    return window.removeEventListener("online", this._argusOnlineHandler), window.removeEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), u?.call(this);
  }, o._renderEntries = function() {
    const y = c?.call(this);
    return af(this), y;
  }, p?.set && Object.defineProperty(o, "hass", { configurable: !0, enumerable: p.enumerable, get: p.get, set(y) {
    p.set.call(this, y), queueMicrotask(() => Uo(this));
  } });
}
const Zo = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], wl = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), sf = { es: ["Formato de hora", "Automático (Home Assistant)", "12 horas (AM/PM)", "24 horas"], en: ["Time format", "Automatic (Home Assistant)", "12-hour (AM/PM)", "24-hour"], fr: ["Format de l’heure", "Automatique (Home Assistant)", "12 heures (AM/PM)", "24 heures"], pt: ["Formato de hora", "Automático (Home Assistant)", "12 horas (AM/PM)", "24 horas"], it: ["Formato ora", "Automatico (Home Assistant)", "12 ore (AM/PM)", "24 ore"], zh: ["时间格式", "自动（Home Assistant）", "12 小时（AM/PM）", "24 小时"], ru: ["Формат времени", "Автоматически (Home Assistant)", "12 часов (AM/PM)", "24 часа"] }, mg = (r) => String(r._manualLang || r._hass?.language || r._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0], Ci = (r) => JSON.parse(JSON.stringify(r));
function Jo(r) {
  if (!Array.isArray(r)) return null;
  const o = /* @__PURE__ */ new Set(), a = [];
  return r.forEach((u) => {
    const c = String(u?.id || "");
    !c || o.has(c) || (o.add(c), a.push({ id: c, size: wl.has(u?.size) ? u.size : "M", hidden: !!u?.hidden }));
  }), Zo.forEach((u) => {
    o.has(u.id) || a.push({ ...u });
  }), a.length ? a : null;
}
function gg() {
  try {
    return Jo(JSON.parse(localStorage.getItem("argus-widgets-v2") || localStorage.getItem("argus-widgets-v1") || "null"));
  } catch {
    return null;
  }
}
function If(r) {
  try {
    const o = JSON.stringify(r);
    localStorage.setItem("argus-widgets-v2", o), localStorage.setItem("argus-widgets-v1", o);
  } catch {
  }
}
function ll(r) {
  const o = r.shadowRoot, a = o?.querySelector(".personalize-grid");
  if (!a) return;
  let u = o.getElementById("argus-clock-format-field");
  u || (u = document.createElement("div"), u.id = "argus-clock-format-field", u.className = "personalize-field pf-clock", u.innerHTML = '<label class="setting-label" id="argus-clock-format-label" for="argus-clock-format-select"></label><select id="argus-clock-format-select" class="glass-control"><option value="auto"></option><option value="12h"></option><option value="24h"></option></select>', a.appendChild(u), u.querySelector("select")?.addEventListener("change", (m) => {
    r._clockFormat = m.target.value, r._ui = r._ui || {}, r._ui.clock_format = m.target.value, r._lastClockUpdate = 0, r._updateHeroContext?.(), r._renderEntries?.();
  }));
  const c = sf[mg(r)] || sf.en, p = u.querySelector("label"), y = u.querySelectorAll("option");
  p && (p.textContent = "🕐 " + c[0]), y.forEach((m, x) => {
    m.textContent = c[x + 1];
  });
  const h = u.querySelector("select");
  h && (h.value = r._clockFormat || r._ui?.clock_format || "auto");
}
function lf(r) {
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
function yg(r) {
  return [...r.shadowRoot?.querySelectorAll(".entry") || []].map((o) => o.querySelector(".entry-icon>svg")?.outerHTML || null);
}
function vg(r, o) {
  r.shadowRoot?.querySelectorAll(".entry").forEach((a, u) => {
    const c = a.querySelector(".entry-icon"), p = c?.querySelector(":scope>svg"), y = o[u];
    if (!c || !p || !y || y === p.outerHTML) return;
    c.querySelector(".argus-old-shield")?.remove();
    const h = document.createElement("div");
    h.className = "argus-old-shield", h.innerHTML = y, c.prepend(h), c.classList.remove("argus-shield-changing"), c.offsetWidth, c.classList.add("argus-shield-changing"), setTimeout(() => {
      h.remove(), c.classList.remove("argus-shield-changing");
    }, 560);
  });
}
function wg(r) {
  const o = r.shadowRoot?.getElementById("widget-grid");
  if (!o) return Jo(r._widgetConfig) || Ci(Zo);
  const a = new Map((r._widgetConfig || []).map((c) => [c.id, c])), u = [...o.children].filter((c) => c.classList.contains("panel") && !c.classList.contains("dashboard-instances")).map((c) => {
    const p = c.id.replace(/^w-/, ""), y = a.get(p) || {};
    return { id: p, size: wl.has(c.dataset.size) ? c.dataset.size : wl.has(y.size) ? y.size : "M", hidden: c.classList.contains("widget-hidden-preview") || c.style.display === "none" || !!y.hidden };
  });
  return Jo(u) || Ci(Zo);
}
function _g(r, o) {
  r._widgetConfig = Ci(o), If(o), r._ui = r._ui || {};
  const a = { ...r._ui.dashboard || {}, widget_layout: Ci(o) };
  r._ui.dashboard = a;
  const u = { dashboard: a };
  r._dashboard?.entry_id && (u.entry_id = r._dashboard.entry_id), r._widgetSaveChain = (r._widgetSaveChain || Promise.resolve()).catch(() => {
  }).then(() => r._send("argus/save_ui", u)).then((c) => {
    c?.ui?.dashboard && (r._ui.dashboard = c.ui.dashboard), r.dataset.widgetSave = "saved";
  }).catch((c) => {
    r.dataset.widgetSave = "local", console.error("Argus widget layout saved locally; server save failed", c);
  });
}
function bg(r) {
  if (!r || r.__v2012AuditFixes) return;
  r.__v2012AuditFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, p = o._renderEntries, y = o._initWidgetGrid, h = o._saveWidgetLayout, m = o._persistPersonalization, x = o._applyTranslations, w = o._exitFullscreenView;
  o.connectedCallback = function() {
    lf(this);
    const P = a?.call(this);
    return this._argusExitCapture = (O) => {
      this._argusExiting && O.stopImmediatePropagation();
    }, document.addEventListener("fullscreenchange", this._argusExitCapture, !0), document.addEventListener("webkitfullscreenchange", this._argusExitCapture, !0), P;
  }, o.disconnectedCallback = function() {
    return document.removeEventListener("fullscreenchange", this._argusExitCapture, !0), document.removeEventListener("webkitfullscreenchange", this._argusExitCapture, !0), u?.call(this);
  }, o._load = async function() {
    const P = await c?.call(this);
    return this._ui && (this._clockFormat = this._ui.clock_format || "auto", ll(this)), P;
  }, o._applyTranslations = function() {
    const P = x?.call(this);
    return ll(this), P;
  }, o._renderEntries = function() {
    const P = yg(this), O = p?.call(this);
    return lf(this), requestAnimationFrame(() => vg(this, P)), O;
  }, o._initWidgetGrid = function() {
    const P = Jo(this._ui?.dashboard?.widget_layout), O = gg();
    this._widgetConfig = Ci(P || O || Zo), If(this._widgetConfig), this._widgetConfigLoaded = !0;
    const X = y?.call(this);
    return this._renderWidgetLayout?.(), X;
  }, o._saveWidgetLayout = function() {
    h?.call(this), _g(this, wg(this));
  }, o._persistPersonalization = async function() {
    this._clockFormat = this.shadowRoot?.getElementById("argus-clock-format-select")?.value || this._clockFormat || "auto";
    const P = await m?.call(this);
    this._ui = this._ui || {}, this._ui.clock_format = this._clockFormat;
    const O = { clock_format: this._clockFormat };
    this._dashboard?.entry_id && (O.entry_id = this._dashboard.entry_id);
    const X = await this._send("argus/save_ui", O);
    return X?.ui && (this._ui = { ...this._ui, ...X.ui }), ll(this), this._lastClockUpdate = 0, this._updateHeroContext?.(), this._renderEntries?.(), P;
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
const ea = ["essential", "light", "balanced", "full"], Bf = "argus-performance-v1", xg = 6e3, Sg = 18, Eg = 3, kg = 25e3, uf = {
  es: ["Rendimiento del dispositivo", "Automático (recomendado)", "Completo", "Equilibrado", "Ligero", "Esencial", "Ejecutar diagnóstico", "Esto solo ajusta la presentación visual. Las funciones de seguridad de Argus no se ven afectadas.", "Medido en este navegador y dispositivo de visualización; no identifica ni supone el modelo del host de Home Assistant."],
  en: ["Device performance", "Automatic (recommended)", "Full", "Balanced", "Light", "Essential", "Run diagnostics", "This only adjusts the visual presentation. Argus security functions are never affected.", "Measured in this browser and display device; it does not identify or assume the Home Assistant host model."],
  fr: ["Performance de l’appareil", "Automatique (recommandé)", "Complet", "Équilibré", "Léger", "Essentiel", "Lancer le diagnostic", "Cela ajuste uniquement la présentation visuelle. Les fonctions de sécurité d’Argus ne sont jamais affectées.", "Mesuré dans ce navigateur et cet appareil d’affichage, sans supposer le modèle de l’hôte Home Assistant."],
  pt: ["Desempenho do dispositivo", "Automático (recomendado)", "Completo", "Equilibrado", "Leve", "Essencial", "Executar diagnóstico", "Isso ajusta apenas a apresentação visual. As funções de segurança do Argus nunca são afetadas.", "Medido neste navegador e dispositivo de exibição, sem presumir o modelo do host Home Assistant."],
  it: ["Prestazioni del dispositivo", "Automatico (consigliato)", "Completo", "Bilanciato", "Leggero", "Essenziale", "Esegui diagnostica", "Questo regola solo la presentazione visiva. Le funzioni di sicurezza di Argus non vengono mai influenzate.", "Misurato nel browser e dispositivo di visualizzazione, senza presumere il modello host Home Assistant."],
  zh: ["设备性能", "自动（推荐）", "完整", "均衡", "轻量", "基础", "运行诊断", "这仅调整视觉呈现，绝不会影响 Argus 的安防功能。", "结果来自当前浏览器和显示设备，不识别或假设 Home Assistant 主机型号。"],
  ru: ["Производительность устройства", "Автоматически (рекомендуется)", "Полный", "Сбалансированный", "Легкий", "Базовый", "Запустить диагностику", "Это влияет только на визуальное отображение. Функции безопасности Argus никогда не затрагиваются.", "Измеряется в текущем браузере и устройстве отображения без предположения о модели хоста Home Assistant."]
}, jf = (r) => String(r._manualLang || r._hass?.language || r._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
function Ol() {
  try {
    const r = navigator.userAgent || "", o = navigator.platform || "", a = navigator.hardwareConcurrency || 0, u = navigator.deviceMemory || 0;
    let c = 0;
    const p = `${r}|${o}|${a}|${u}`;
    for (let y = 0; y < p.length; y++) c = c * 31 + p.charCodeAt(y) | 0;
    return String(c);
  } catch {
    return "default";
  }
}
function Pl() {
  try {
    return JSON.parse(localStorage.getItem(Bf) || "{}");
  } catch {
    return {};
  }
}
function Ff(r) {
  try {
    localStorage.setItem(Bf, JSON.stringify(r));
  } catch {
  }
}
function Cg() {
  const r = navigator.hardwareConcurrency || 2, o = navigator.deviceMemory || null, a = window.devicePixelRatio || 1, u = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || !1;
  let c = !1, p = !1;
  try {
    p = !!document.createElement("canvas").getContext("webgl2");
  } catch {
  }
  try {
    const y = document.createElement("canvas");
    c = !!(y.getContext("webgl") || y.getContext("experimental-webgl"));
  } catch {
  }
  return { cores: r, memory: o, dpr: a, reducedMotion: u, webgl1: c, webgl2: p, width: window.innerWidth || 0, height: window.innerHeight || 0 };
}
function Rg(r = 900) {
  return new Promise((o) => {
    let a = 0;
    const u = performance.now();
    function c(p) {
      a++, p - u < r ? requestAnimationFrame(c) : o(Math.round(a * 1e3 / Math.max(1, p - u)));
    }
    requestAnimationFrame(c);
  });
}
function zg(r, o) {
  let a = 0;
  return a += Math.min(r.cores || 2, 8) * 8, a += r.memory ? Math.min(r.memory, 8) * 6 : 18, r.webgl2 ? a += 30 : r.webgl1 && (a += 14), a += Math.min(o, 60) * 1.2, o >= 55 && (r.cores || 0) >= 4 && (a += 8), r.reducedMotion && (a -= 20), Math.max(r.width, r.height) < 800 && (a -= 10), a >= 170 ? "full" : a >= 120 ? "balanced" : a >= 70 ? "light" : "essential";
}
function _l(r) {
  return ea.includes(r) ? r : null;
}
function Og(r) {
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
function ia(r, o, a) {
  r._argusPerfProfile = o, r.dataset.argusPerf = o, r.dataset.argusPerfSource = a || "auto", ea.forEach((u) => r.classList.remove("argus-perf-" + u)), r.classList.add("argus-perf-" + o), r.dispatchEvent(new CustomEvent("argus-performance-profile", { bubbles: !0, composed: !0, detail: { profile: o, source: a || "auto", capabilities: r._argusPerfCaps || null, fps: r._argusPerfFps || null } }));
}
function qf(r, o) {
  const a = uf[jf(r)] || uf.en, u = o.querySelector("#argus-performance-label"), c = o.querySelectorAll("option"), p = o.querySelector("#argus-performance-diagnose"), y = o.querySelector(".argus-performance-note"), h = o.querySelector(".argus-performance-context");
  u && (u.textContent = "⚙️ " + a[0]), [a[1], a[2], a[3], a[4], a[5]].forEach((x, w) => {
    c[w] && (c[w].textContent = x);
  }), p && (p.textContent = a[6]), y && (y.textContent = a[7]), h && (h.textContent = a[8]);
  const m = o.querySelector("select");
  m && (m.value = r._argusPerfPreference || "auto");
}
function Ll(r, o) {
  const a = o.querySelector(".argus-performance-readout");
  if (!a) return;
  const u = r._argusPerfCaps;
  if (!u) {
    a.textContent = "";
    return;
  }
  const c = jf(r), p = c === "es" ? "sí" : "yes", y = "no", h = u.memory ? `${u.memory} GB` : c === "es" ? "no expuesta por el navegador" : "not exposed by browser", m = r.dataset.argusPerfSource || "auto", x = m === "manual" ? "manual" : m;
  a.textContent = [`WebGL2: ${u.webgl2 ? p : y} · WebGL1: ${u.webgl1 ? p : y}`, `Núcleos: ${u.cores} · Memoria: ${h}`, `FPS medidos: ${r._argusPerfFps ?? "—"} · Perfil recomendado: ${r._argusPerfAuto || "—"}`, `Perfil activo: ${r._argusPerfProfile || "—"} (${x})`].join(`
`);
}
function cf(r) {
  const o = r.shadowRoot, a = o?.querySelector(".personalize-grid");
  if (!a) return null;
  let u = o.getElementById("argus-performance-field");
  return u || (u = document.createElement("div"), u.id = "argus-performance-field", u.className = "personalize-field pf-performance", u.innerHTML = '<label class="setting-label" id="argus-performance-label" for="argus-performance-select"></label><select id="argus-performance-select" class="glass-control"><option value="auto"></option><option value="full"></option><option value="balanced"></option><option value="light"></option><option value="essential"></option></select><button type="button" id="argus-performance-diagnose" class="glass-control argus-performance-diagnose"></button><p class="argus-performance-readout"></p><p class="argus-performance-context"></p><p class="argus-performance-note"></p>', a.appendChild(u), u.querySelector("select").addEventListener("change", (c) => Pg(r, c.target.value)), u.querySelector("#argus-performance-diagnose").addEventListener("click", () => Hf(r, !0))), qf(r, u), Ll(r, u), u;
}
function Pg(r, o) {
  const a = Pl(), u = Ol();
  r._argusPerfPreference = o === "auto" ? null : _l(o), a[u] = { ...a[u] || {}, preference: r._argusPerfPreference }, Ff(a);
  const c = r._argusPerfPreference || r._argusPerfAuto || "balanced";
  ia(r, c, r._argusPerfPreference ? "manual" : "auto");
  const p = r.shadowRoot?.getElementById("argus-performance-field");
  p && Ll(r, p);
}
async function Hf(r, o) {
  const a = Cg(), u = await Rg();
  r._argusPerfCaps = a, r._argusPerfFps = u, r._argusPerfAuto = zg(a, u);
  const c = Pl(), p = Ol();
  c[p] = { ...c[p] || {}, auto: r._argusPerfAuto, checkedAt: Date.now() }, Ff(c), (o || !r._argusPerfPreference) && ia(r, r._argusPerfPreference || r._argusPerfAuto, r._argusPerfPreference ? "manual" : "auto");
  const y = r.shadowRoot?.getElementById("argus-performance-field");
  y && (qf(r, y), Ll(r, y));
}
function Lg(r) {
  Wf(r);
  let o = performance.now(), a = o, u = 0, c = 0;
  function p(y) {
    const h = y - a;
    if (a = y, h > 0) {
      const m = 1e3 / h;
      if (y - o >= xg && (o = y, m < Sg ? u++ : u = 0, u >= Eg && !r._argusPerfPreference && y - c > kg)) {
        const x = Math.max(0, ea.indexOf(r._argusPerfProfile || "balanced") - 1), w = ea[x];
        w && w !== r._argusPerfProfile && (r._argusPerfAuto = w, ia(r, w, "auto-downgrade"), c = y), u = 0;
      }
    }
    r._argusPerfMonitorFrame = requestAnimationFrame(p);
  }
  r._argusPerfMonitorFrame = requestAnimationFrame(p);
}
function Wf(r) {
  r._argusPerfMonitorFrame && (cancelAnimationFrame(r._argusPerfMonitorFrame), r._argusPerfMonitorFrame = null);
}
function Dg(r) {
  if (!r || r.__argusPerformanceProfile) return;
  r.__argusPerformanceProfile = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, p = o._applyTranslations;
  o.connectedCallback = function() {
    Og(this);
    const y = Pl()[Ol()] || {};
    this._argusPerfPreference = _l(y.preference), this._argusPerfAuto = _l(y.auto) || "balanced", ia(this, this._argusPerfPreference || this._argusPerfAuto, this._argusPerfPreference ? "manual" : "auto");
    const h = a?.call(this);
    return Hf(this, !1), Lg(this), h;
  }, o.disconnectedCallback = function() {
    return Wf(this), u?.call(this);
  }, o._load = async function() {
    const y = await c?.call(this);
    return cf(this), y;
  }, o._applyTranslations = function() {
    const y = p?.call(this);
    return cf(this), y;
  };
}
function df(r) {
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
function Vo(r) {
  const o = r.shadowRoot?.querySelector(".dashboard-instances");
  o && (o.draggable = !1, o.removeAttribute("hidden"), o.classList.remove("widget-hidden-preview", "dragging"), o.querySelector(":scope > .panel-edit-overlay")?.remove(), o.style.setProperty("display", "block", "important"), o.style.setProperty("visibility", "visible", "important"), o.style.setProperty("opacity", "1", "important"));
}
function Mg(r) {
  !r.shadowRoot?.getElementById("widget-grid") || r._argusWidgetLayoutRestored || (r._argusWidgetLayoutRestored = !0, r._widgetConfigLoaded ? r._renderWidgetLayout?.() : r._initWidgetGrid?.(), Vo(r));
}
function Tg(r) {
  if (!r || r.__argusVisualContainerFixes) return;
  r.__argusVisualContainerFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries, p = o._toggleWidgetEditing;
  o.connectedCallback = function() {
    return df(this), a?.call(this);
  }, o._load = async function() {
    this._argusWidgetLayoutRestored = !1;
    const y = await u?.call(this);
    return Mg(this), Vo(this), y;
  }, o._renderEntries = function() {
    const y = c?.call(this);
    return df(this), Vo(this), y;
  }, o._toggleWidgetEditing = function() {
    const y = p?.call(this);
    return Vo(this), y;
  };
}
function ff(r, o, a, u) {
  const c = r.shadowRoot?.getElementById(o), p = c?.getAttribute("data-size");
  if (p !== "S") return a?.apply(r, u);
  c.setAttribute("data-size", "M");
  try {
    return a?.apply(r, u);
  } finally {
    c.setAttribute("data-size", p);
  }
}
function Ng(r) {
  if (!r || r.__argusCompleteContentFixes) return;
  r.__argusCompleteContentFixes = !0;
  const o = r.prototype, a = o._renderActivityLog, u = o._renderAutomations;
  o._renderActivityLog = function(...c) {
    return ff(this, "w-activity", a, c);
  }, o._renderAutomations = function(...c) {
    return ff(this, "w-automations", u, c);
  };
}
const Ag = 15e3;
function Ig(r, o) {
  const a = r._getLocale?.() || void 0, u = r._getTimeZone?.(), c = { weekday: "short", month: "short", day: "numeric" };
  u && (c.timeZone = u);
  try {
    return new Intl.DateTimeFormat(a, c).format(o);
  } catch {
    return o.toLocaleDateString(a, c);
  }
}
function bl(r) {
  const o = /* @__PURE__ */ new Date(), a = r._formatTime?.(o) || o.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), u = r.shadowRoot?.getElementById("hero-clock-time"), c = r.shadowRoot?.getElementById("hero-clock-date");
  u && (u.textContent = a), c && (c.textContent = Ig(r, o)), r.shadowRoot?.querySelectorAll(".console-hud-time").forEach((p) => {
    p.textContent = a;
  });
}
function Bg(r) {
  r.shadowRoot?.querySelectorAll(".entry-icon svg").forEach((o) => {
    o.style.overflow = "visible", o.querySelectorAll("filter").forEach((a) => {
      a.setAttribute("filterUnits", "userSpaceOnUse"), a.setAttribute("x", "-80"), a.setAttribute("y", "-80"), a.setAttribute("width", "360"), a.setAttribute("height", "360"), a.setAttribute("color-interpolation-filters", "sRGB");
    });
  });
}
function jg(r) {
  const o = r.shadowRoot;
  o && (o.querySelectorAll('input[type="file"]').forEach((a) => {
    a.setAttribute("accept", "image/*,video/*,.gif"), a.removeAttribute("capture");
  }), o.querySelectorAll("button,ha-button,mwc-button").forEach((a) => {
    const u = (a.textContent || a.getAttribute("aria-label") || "").toLowerCase();
    /predeterminado|default|argus/.test(u) && /fondo|background|argus/.test(u) && (a.dataset.argusDefaultBackground = "true");
  }));
}
function Fg(r) {
  const o = r.shadowRoot;
  if (!o) return;
  o.querySelectorAll("#w-activity .entry,#w-activity .log-entry,#w-activity li,.activity-log .entry,.activity-log li").forEach((u, c) => {
    c > 39 ? u.classList.add("argus-mobile-history-overflow-item") : u.classList.remove("argus-mobile-history-overflow-item");
  });
}
function qg(r) {
  const o = r.shadowRoot;
  o && o.querySelectorAll(".dashboard-instances .entry button,.dashboard-instances .entry .badge,.dashboard-instances .entry .status,.dashboard-instances .entry h3,.dashboard-instances .entry h4").forEach((a) => {
    const u = (a.textContent || "").trim().toLowerCase();
    /^(sistema\s+desarmado|system\s+disarmed|desarmado|disarmed)$/.test(u) && a.classList.add("argus-instance-duplicate-status");
  });
}
function Hg(r) {
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
function ul(r) {
  Hg(r), bl(r), Bg(r), jg(r), Fg(r), qg(r);
}
function Wg(r) {
  if (!r || r.__argusRuntimeVisualFixes) return;
  r.__argusRuntimeVisualFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o.disconnectedCallback, c = o._load, p = o._renderEntries, y = o._applyTranslations;
  o.connectedCallback = function() {
    const h = a?.call(this);
    return clearInterval(this._argusClockTimer), this._argusClockTimer = setInterval(() => bl(this), Ag), queueMicrotask(() => ul(this)), h;
  }, o.disconnectedCallback = function() {
    return clearInterval(this._argusClockTimer), this._argusClockTimer = null, u?.call(this);
  }, o._load = async function() {
    const h = await c?.call(this);
    return ul(this), h;
  }, o._renderEntries = function() {
    const h = p?.call(this);
    return ul(this), h;
  }, o._applyTranslations = function() {
    const h = y?.call(this);
    return bl(this), h;
  };
}
const $g = /* @__PURE__ */ new Set(["unavailable", "unknown"]), pf = {
  es: { status_unavailable: "Sin conexión", status_unavailable_hint: "El dispositivo perdió conexión en Home Assistant y necesita revisión." },
  en: { status_unavailable: "Unavailable", status_unavailable_hint: "The device lost connection in Home Assistant and needs review." },
  fr: { status_unavailable: "Indisponible", status_unavailable_hint: "L'appareil a perdu la connexion dans Home Assistant et doit être vérifié." },
  pt: { status_unavailable: "Indisponível", status_unavailable_hint: "O dispositivo perdeu a conexão no Home Assistant e precisa de revisão." },
  it: { status_unavailable: "Non disponibile", status_unavailable_hint: "Il dispositivo ha perso la connessione in Home Assistant e richiede una verifica." },
  zh: { status_unavailable: "不可用", status_unavailable_hint: "设备在 Home Assistant 中失去连接，需要检查。" },
  ru: { status_unavailable: "Недоступно", status_unavailable_hint: "Устройство потеряло связь в Home Assistant и требует проверки." }
};
function xl(r) {
  return r ? $g.has(String(r.state ?? "").toLowerCase()) : !0;
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
function hf(r) {
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
function Ug(r) {
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
function mf(r) {
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
function Vg(r) {
  const o = r.shadowRoot;
  if (!o || !r._hass?.states) return;
  const a = r._dashboard?.entries || [];
  o.querySelectorAll(".entry").forEach((u, c) => {
    const p = a[c];
    if (!p) return;
    const y = r._hass.states[p.entity_id], h = String(y?.state || "disarmed"), m = h.replace("armed_", "");
    let x = r._ui?.modes?.__by_entity__?.[p.entity_id]?.[m] || r._ui?.modes?.[m] || {}, w = x.sensors || [];
    if (h === "disarmed" || !w.length) {
      const V = r._ui?.modes?.__by_entity__?.[p.entity_id] || r._ui?.modes || {}, F = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((z) => {
        V[z]?.sensors && V[z].sensors.forEach((b) => F.add(b));
      }), w = Array.from(F);
    }
    const P = x.bypassed_sensors || [], O = w.filter((V) => !P.includes(V) && r._hass.states[V]), X = u.querySelectorAll(".console-sensors .console-sensor");
    X.length && X.forEach((V, F) => {
      const z = O[F];
      if (!z) return;
      const b = r._hass.states[z];
      if (!xl(b)) return;
      V.classList.add("unavailable"), V.classList.remove("open"), V.title = r._t("status_unavailable_hint");
      const d = V.querySelector(".console-sensor-icon");
      d && (d.textContent = "❓", d.style.color = "#ffcf8a", d.style.animation = "none");
      const v = V.querySelector(".console-sensor-state");
      v && (v.textContent = r._t("status_unavailable"), v.style.color = "#ffcf8a");
    });
  });
}
function Gg(r) {
  if (!r || r.__argusBgSensorAvailabilityFixes) return;
  r.__argusBgSensorAvailabilityFixes = !0;
  const o = r.prototype;
  async function a(w) {
    if (!(!w._currentProfile || !w._currentProfile.id))
      try {
        const P = await w._send("argus/get_profile_theme");
        if (P && P.theme && Object.keys(P.theme).length > 0) {
          const O = P.theme;
          O.background_mode !== void 0 && (w._backgroundMode = O.background_mode), O.background_images !== void 0 && (w._backgroundImages = O.background_images), O.panel_bg_file !== void 0 && (w._panelBgFile = O.panel_bg_file || ""), O.panel_bg_sound !== void 0 && (w._panelBgSound = O.panel_bg_sound), O.hub_bg_mode !== void 0 && (w._hubBgMode = O.hub_bg_mode === "none" || O.hub_bg_mode === "default" ? "default" : O.hub_bg_mode), O.hub_bg_file !== void 0 && (w._hubBgFile = O.hub_bg_file || ""), O.hub_bg_sound !== void 0 && (w._hubBgSound = O.hub_bg_sound), w._ui || (w._ui = {}), w._ui.background_mode = w._backgroundMode, w._ui.background_images = w._backgroundImages, w._ui.panel_bg_file = w._panelBgFile, w._ui.panel_bg_sound = w._panelBgSound, w._ui.hub_bg_mode = w._hubBgMode, w._ui.hub_bg_file = w._hubBgFile, w._ui.hub_bg_sound = w._hubBgSound;
          const X = w.shadowRoot;
          if (X) {
            const V = X.getElementById("bg-mode-select-standalone");
            V && (V.value = w._backgroundMode);
            const F = X.getElementById("hub-bg-mode-select");
            F && (F.value = w._hubBgMode);
            const z = X.getElementById("panel-bg-url-input");
            z && !w._panelBgFile.startsWith("data:") && (z.value = w._panelBgFile);
            const b = X.getElementById("hub-bg-url-input");
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
        let O = w._backgroundMode, X = w._hubBgMode;
        if (P) {
          const z = P.getElementById("bg-mode-select-standalone");
          z && (O = z.value);
          const b = P.getElementById("hub-bg-mode-select");
          b && (X = b.value);
        }
        const V = {
          background_mode: O,
          hub_bg_mode: X === "default" ? "none" : X,
          panel_bg_file: ["photo", "collage", "video"].includes(O) && w._panelBgFile || "",
          hub_bg_file: X === "image" && w._hubBgFile || "",
          background_images: w._backgroundImages || [],
          panel_bg_sound: !!w._panelBgSound,
          hub_bg_sound: !!w._hubBgSound
        }, F = await w._send("argus/save_profile_theme", { theme: V });
        F && F.theme && (w._currentProfile.theme = F.theme);
      } catch (P) {
        console.warn("Failed to save profile theme", P);
      }
  }
  const c = o._t;
  o._t = function(w) {
    if (w === "status_unavailable" || w === "status_unavailable_hint") {
      const P = String(this._getLocale?.() || this._hass?.language || "en").split("-")[0];
      return (pf[P] || pf.en)[w];
    }
    return c.call(this, w);
  };
  const p = o._persistPersonalization;
  o._persistPersonalization = async function() {
    Ug(this);
    const w = await p.call(this);
    return await u(this), w;
  };
  const y = o._chip;
  o._chip = function(w, P) {
    const O = this._hass?.states?.[w];
    if (!(P === "sensor" || P === "bypass" || P === "entry") || !xl(O))
      return y.call(this, w, P);
    const V = O?.attributes?.friendly_name || w, F = this._t("status_unavailable_hint");
    return `
      <span class="sensor-pill sensor-unavailable" title="${vi(F)}">
        <span class="pill-dot"></span>
        <span class="pill-content">
          <span class="pill-name">${vi(V)}</span>
          <span class="pill-status">❓ ${vi(this._t("status_unavailable"))}</span>
        </span>
        ${this._isAdmin ? `<button data-remove="${P}:${vi(w)}" title="${vi(F)}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>` : ""}
      </span>
    `;
  };
  const h = o._deviceFacts;
  o._deviceFacts = function(w, P, O = !0) {
    if (O && xl(P)) {
      const X = [{ text: `❓ ${this._t("status_unavailable")}`, className: "status-unavailable" }], V = this._getDevicePower(w, P);
      return V.mains && X.push({ text: "🔌 AC", className: "power-mains" }), V.battery !== null && X.push({ text: `🔋 ${V.battery}%`, className: V.battery <= 20 ? "power-low" : "" }), X;
    }
    return h.call(this, w, P, O);
  };
  const m = o._renderEntries;
  o._renderEntries = function() {
    const w = m.call(this);
    return mf(this), Vg(this), hf(this), w;
  };
  const x = o._load;
  o._load = async function() {
    const w = await x?.call(this);
    return await a(this), mf(this), hf(this), w;
  };
}
function Yg(r) {
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
function Xg(r) {
  const o = r.shadowRoot;
  if (!o || !r._hass?.states) return;
  const a = r._dashboard?.entries || [];
  o.querySelectorAll(".entry").forEach((u, c) => {
    const p = a[c];
    if (!p) return;
    const y = r._hass.states[p.entity_id], h = String(y?.state || "disarmed"), m = h.replace("armed_", "");
    let x = r._ui?.modes?.__by_entity__?.[p.entity_id]?.[m] || r._ui?.modes?.[m] || {}, w = x.sensors || [];
    if (h === "disarmed" || !w.length) {
      const V = r._ui?.modes?.__by_entity__?.[p.entity_id] || r._ui?.modes || {}, F = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((z) => {
        V[z]?.sensors && V[z].sensors.forEach((b) => F.add(b));
      }), w = Array.from(F);
    }
    const P = x.bypassed_sensors || [], O = w.filter((V) => !P.includes(V) && r._hass.states[V]), X = u.querySelectorAll(".console-sensors .console-sensor");
    X.length && X.forEach((V, F) => {
      const z = O[F];
      if (!z) return;
      const b = r._hass.states[z];
      if (!b || V.querySelector(".console-sensor-battery")) return;
      const d = r._getSensorBattery(z, b);
      if (d != null && typeof d == "number") {
        const v = V.querySelector(".console-sensor-state");
        if (v) {
          const g = d === 0, _ = d <= 10 && !g;
          let E = g ? "🔋 ❌" : `🔋 ${d}%`;
          const W = `<span class="console-sensor-battery ${g ? "dead" : _ ? "low" : ""}" title="${g ? "Sin conexión (Batería agotada)" : _ ? "Batería crítica - Reemplazar ya" : "Nivel de batería"}">${E}</span>`;
          v.insertAdjacentHTML("beforebegin", W);
        }
      }
    });
  });
}
function Qg(r) {
  if (!r || r.__argusBatteryUiFixes) return;
  r.__argusBatteryUiFixes = !0;
  const o = r.prototype, a = o._renderEntries;
  o._renderEntries = function() {
    const u = a.call(this);
    return Yg(this), Xg(this), u;
  };
}
const ta = /* @__PURE__ */ new Set(["weather", "none", "photo", "collage", "video"]), Dl = /* @__PURE__ */ new Set(["default", "image"]);
function wr(r) {
  return String(r ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
}
function Kg(r) {
  const o = /^#[0-9a-f]{6}$/i.test(r || "") ? r : "#ff0000";
  return [1, 3, 5].map((a) => parseInt(o.slice(a, a + 2), 16));
}
function gf(r) {
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
function yf(r = {}, o = {}) {
  const a = o?.background_mode, u = o?.background_file || "";
  let c = r.background_mode;
  ta.has(c) || (c = ta.has(a) ? a : "weather");
  let p = r.panel_bg_file;
  p === void 0 && (p = u), p = String(p || ""), ["photo", "collage", "video"].includes(c) || (p = "");
  let y = r.hub_bg_mode;
  y = y === "none" ? "default" : y, Dl.has(y) || (y = "default");
  let h = String(r.hub_bg_file || "");
  return y !== "image" && (h = ""), { background_mode: c, background_images: Array.isArray(r.background_images) ? r.background_images : p ? [p] : [], panel_bg_file: p, panel_bg_sound: !!r.panel_bg_sound, hub_bg_mode: y, hub_bg_file: h, hub_bg_sound: !!r.hub_bg_sound };
}
function vf(r, o) {
  r._backgroundMode = o.background_mode, r._backgroundImages = o.background_images, r._panelBgFile = o.panel_bg_file, r._panelBgSound = o.panel_bg_sound, r._hubBgMode = o.hub_bg_mode, r._hubBgFile = o.hub_bg_file, r._hubBgSound = o.hub_bg_sound;
  const a = r.shadowRoot, u = a?.getElementById("bg-mode-select-standalone"), c = a?.getElementById("panel-bg-url-input"), p = a?.getElementById("chk-panel-bg-sound"), y = a?.getElementById("hub-bg-mode-select"), h = a?.getElementById("hub-bg-url-input"), m = a?.getElementById("chk-hub-bg-sound");
  u && (u.value = o.background_mode), c && (c.value = o.panel_bg_file), p && (p.checked = o.panel_bg_sound), y && (y.value = o.hub_bg_mode), h && (h.value = o.hub_bg_file), m && (m.checked = o.hub_bg_sound), r._updateBgFieldsVisibility?.(), r._updateCanvasBackground?.(), r._updateTheme?.(), r._renderEntries?.();
}
function wf(r) {
  const o = r.shadowRoot;
  if (!o) return;
  const a = (u, c, p) => {
    u && !u.dataset[c] && (u.dataset[c] = "1", u.addEventListener("change", p));
  };
  a(o.getElementById("bg-mode-select-standalone"), "deepBg", (u) => {
    const c = ta.has(u.target.value) ? u.target.value : "weather";
    if (r._backgroundMode = c, !["photo", "collage", "video"].includes(c)) {
      r._panelBgFile = "", r._backgroundImages = [];
      const p = o.getElementById("panel-bg-url-input");
      p && (p.value = "");
    }
    r._updateBgFieldsVisibility?.(), r._updateTheme?.(), r._renderEntries?.();
  }), a(o.getElementById("hub-bg-mode-select"), "deepBg", (u) => {
    const c = Dl.has(u.target.value) ? u.target.value : "default";
    if (r._hubBgMode = c, c === "default") {
      r._hubBgFile = "";
      const p = o.getElementById("hub-bg-url-input");
      p && (p.value = "");
    }
    r._updateBgFieldsVisibility?.(), r._updateCanvasBackground?.(), r._updateTheme?.();
  }), a(o.getElementById("panel-bg-url-input"), "deepBg", (u) => {
    r._panelBgFile = String(u.target.value || "").trim(), r._panelBgFile && (r._backgroundImages = [r._panelBgFile]), r._renderEntries?.();
  }), a(o.getElementById("hub-bg-url-input"), "deepBg", (u) => {
    r._hubBgFile = String(u.target.value || "").trim(), r._updateCanvasBackground?.(), r._updateTheme?.();
  });
}
function Go(r) {
  const o = r.shadowRoot?.getElementById("sos-output-chips");
  if (!o) return;
  const a = Array.isArray(r._panicOutputs) ? r._panicOutputs : [], u = r._panicOutputSettings || {};
  o.innerHTML = a.length ? a.map((c) => {
    const p = r._hass?.states?.[c], y = p?.attributes?.friendly_name || c, h = c.startsWith("light."), m = u[c] || {}, x = ["none", "gentle", "rapid"].includes(m.flash_mode) ? m.flash_mode : m.gentle_flash ? "gentle" : "none";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${wr(y)}"><span>${wr(y)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${wr(c)}" aria-label="Eliminar">✕</button>${h ? `<details class="sos-output-settings"><summary>🎨 Color y destello</summary><label>Color <input type="color" data-sos-output-color="${wr(c)}" value="${w = m.rgb_color, `#${(Array.isArray(w) && w.length === 3 ? w : [255, 0, 0]).map((P) => Math.max(0, Math.min(255, Number(P) || 0)).toString(16).padStart(2, "0")).join("")}`}"></label><label>Destello <select data-sos-output-flash="${wr(c)}"><option value="none" ${x === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${x === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${x === "rapid" ? "selected" : ""}>Rápido</option></select></label></details>` : ""}</div>`;
    var w;
  }).join("") : `<div class="mode-sensor-none">${wr(r._t("sos_no_outputs"))}</div>`, o.querySelectorAll("[data-remove-sos-output]").forEach((c) => {
    c.addEventListener("click", () => {
      r._panicOutputs = a.filter((p) => p !== c.dataset.removeSosOutput), delete r._panicOutputSettings?.[c.dataset.removeSosOutput], Go(r);
    });
  });
}
function Zg(r) {
  if (!r || r.__argusDeepRepair) return;
  r.__argusDeepRepair = !0;
  const o = r.prototype, a = o._load;
  o._load = async function() {
    const h = await a.call(this);
    if (gf(this), this._panicOutputSettings = this._dashboard?.ui?.panic_output_settings || {}, this._currentProfile?.id) try {
      const m = await this._send("argus/get_profile_theme");
      vf(this, yf(m?.theme || {}, this._currentUserTheme || {}));
    } catch (m) {
      console.warn("Argus profile theme load failed:", m);
    }
    return wf(this), Go(this), h;
  };
  const u = o._renderEntries;
  o._renderEntries = function() {
    const h = u.call(this);
    return gf(this), wf(this), h;
  }, o._renderSosOutputs = function() {
    Go(this);
  };
  const c = o._acceptSelection;
  o._acceptSelection = function() {
    if (this._selectorTarget !== "panic") return c.call(this);
    this._panicOutputs = [...new Set(this._selected || [])], this._panicOutputSettings = this._panicOutputSettings || {}, this._panicOutputs.forEach((h) => {
      this._panicOutputSettings[h] ||= { flash_mode: "none" };
    }), Go(this), this._closeModal?.();
  };
  const p = o._handlePanelBgFile;
  o._handlePanelBgFile = async function(h) {
    if (await p.call(this, h), this._panelBgFile) {
      this._backgroundMode = "photo", this._backgroundImages = [this._panelBgFile];
      const m = this.shadowRoot?.getElementById("bg-mode-select-standalone");
      m && (m.value = "photo"), this._updateBgFieldsVisibility?.(), this._renderEntries?.();
    }
  };
  const y = o._handleHubBgFile;
  o._handleHubBgFile = async function(h) {
    if (await y.call(this, h), this._hubBgFile) {
      this._hubBgMode = "image";
      const m = this.shadowRoot?.getElementById("hub-bg-mode-select");
      m && (m.value = "image"), this._updateBgFieldsVisibility?.(), this._updateCanvasBackground?.(), this._updateTheme?.();
    }
  }, o._persistPersonalization = async function() {
    const h = this.shadowRoot, m = ta.has(h?.getElementById("bg-mode-select-standalone")?.value) ? h.getElementById("bg-mode-select-standalone").value : "weather", x = Dl.has(h?.getElementById("hub-bg-mode-select")?.value) ? h.getElementById("hub-bg-mode-select").value : "default", w = ["photo", "collage", "video"].includes(m) ? String(h?.getElementById("panel-bg-url-input")?.value || this._panelBgFile || "").trim() : "", P = x === "image" ? String(h?.getElementById("hub-bg-url-input")?.value || this._hubBgFile || "").trim() : "", O = { background_mode: m, background_images: m === "collage" ? this._backgroundImages || [] : w ? [w] : [], panel_bg_file: w, panel_bg_sound: !!h?.getElementById("chk-panel-bg-sound")?.checked, hub_bg_mode: x === "default" ? "none" : "image", hub_bg_file: P, hub_bg_sound: !!h?.getElementById("chk-hub-bg-sound")?.checked }, X = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, V = this._normaliseEmergencyNumber(h?.getElementById("emergency-number-input")?.value), F = { ...X ? { entry_id: X } : {}, home_name: this._homeName, temperature_source: h?.getElementById("temp-source-select-standalone")?.value || "auto", weather_source: h?.getElementById("weather-source-select")?.value || "auto", emergency_number: V, panic_outputs: this._panicOutputs || [] };
    try {
      const z = function(d) {
        const v = { ...d._panicOutputSettings || {} };
        return d.shadowRoot?.querySelectorAll("[data-sos-output-color]").forEach((g) => {
          const _ = g.dataset.sosOutputColor;
          v[_] = { ...v[_] || {}, rgb_color: Kg(g.value), flash_mode: d.shadowRoot.querySelector(`[data-sos-output-flash="${CSS.escape(_)}"]`)?.value || "none" };
        }), d._panicOutputSettings = Object.fromEntries((d._panicOutputs || []).map((g) => [g, v[g] || { flash_mode: "none" }])), d._panicOutputSettings;
      }(this);
      await this._send("argus/save_profile_theme", { ...X ? { entry_id: X } : {}, theme: O }), await this._send("argus/save_panic_output_profile", { ...X ? { entry_id: X } : {}, outputs: this._panicOutputs || [], settings: z }), await this._send("argus/save_ui", F), vf(this, yf(O)), this._temperatureSource = F.temperature_source, this._weatherSource = F.weather_source, this._emergencyNumber = V, this._configureEmergencyCall?.();
      const b = h?.getElementById("btn-save-personalization-standalone");
      if (b) {
        const d = b.textContent;
        b.textContent = this._t("saved"), b.style.background = "#43a047", setTimeout(() => {
          b.textContent = d, b.style.background = "";
        }, 3e3);
      }
    } catch (z) {
      throw alert(this._format("generic_error", { error: z?.message || z })), z;
    }
  };
}
const Jg = /* @__PURE__ */ new Set(["hs", "xy", "rgb", "rgbw", "rgbww"]), ey = /* @__PURE__ */ new Set(["flash", "slow flash", "slow_flash", "blink", "strobe", "police"]);
function Bt(r) {
  return String(r ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
}
function oa(r, o) {
  const a = r?._hass?.states?.[o], u = a?.attributes || {}, c = Array.isArray(u.supported_color_modes) ? [...new Set(u.supported_color_modes.map((w) => String(w).toLowerCase()).filter(Boolean))] : [], p = Array.isArray(u.effect_list) ? u.effect_list.map((w) => String(w).toLowerCase()) : [], y = !!a && String(o).startsWith("light."), h = y && (c.some((w) => w !== "onoff") || Number.isFinite(Number(u.brightness))), m = y && p.some((w) => ey.has(w)), x = y && (Number(u.supported_features) & 8) === 8;
  return {
    exists: !!a,
    isLight: y,
    modes: c,
    color: y && c.some((w) => Jg.has(w)),
    brightness: h,
    nativeEffect: m,
    nativeFlash: x,
    safeFlash: m || x || h,
    flashMethod: m ? "native_effect" : x ? "native_flash" : h ? "brightness_pulse" : "steady_safe"
  };
}
function ty(r, o) {
  return oa(r, o).color;
}
function ny(r) {
  return `#${(Array.isArray(r) && r.length === 3 ? r : [255, 0, 0]).map((a) => Math.max(0, Math.min(255, Number(a) || 0)).toString(16).padStart(2, "0")).join("")}`;
}
function Ml(r) {
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
async function $f(r, o, a, u, c) {
  if (!a || u === "none") return;
  const p = o.textContent;
  o.disabled = !0, o.textContent = "Probando de forma segura…";
  try {
    const y = { entity_id: a, flash_mode: u };
    ty(r, a) && Array.isArray(c) && (y.rgb_color = c);
    const h = await r._send("argus/test_light_output", y), m = { brightness_pulse: "pulso de brillo sin apagar", native_flash: "flash nativo", native_effect: "efecto nativo", steady_safe: "luz fija; destello bloqueado por seguridad", steady: "luz fija" }[h?.method] || "servicio seguro de luz";
    o.textContent = `✓ ${m}`;
  } catch (y) {
    o.textContent = `✗ ${y?.message || "No respondió la luz"}`;
  } finally {
    setTimeout(() => {
      o.disabled = !1, o.textContent = p;
    }, 4e3);
  }
}
function Uf(r, o) {
  return r.safeFlash ? `${r.color ? "🎨 Color y destello seguro" : "✨ Destello seguro"} — ${Bt(o)}` : `💡 Luz fija segura — ${Bt(o)}`;
}
function Yo(r) {
  xi(r);
  const o = r.shadowRoot?.getElementById("sos-output-chips");
  if (!o) return;
  const a = Array.isArray(r._panicOutputs) ? r._panicOutputs : [], u = r._panicOutputSettings || {};
  o.innerHTML = a.length ? a.map((c) => {
    const y = r._hass?.states?.[c]?.attributes?.friendly_name || c, h = oa(r, c), m = u[c] || {}, x = h.safeFlash && ["none", "gentle", "rapid"].includes(m.flash_mode) ? m.flash_mode : h.safeFlash && m.gentle_flash ? "gentle" : "none", w = h.modes.length ? h.modes.join(", ") : "sin capacidad declarada";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${Bt(c)}"><span>${Bt(y)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${Bt(c)}" aria-label="Eliminar">✕</button>${h.isLight ? `<details class="sos-output-settings"><summary>${Uf(h, y)} <span class="argus-ha-capability">HA: ${Bt(w)}</span></summary>${h.color ? `<label>Color <input type="color" data-sos-output-color="${Bt(c)}" value="${ny(m.rgb_color)}"></label>` : `<input type="hidden" data-sos-output-color="${Bt(c)}" value="#ffffff">`}${h.safeFlash ? `<label>Destello <select data-sos-output-flash="${Bt(c)}"><option value="none" ${x === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${x === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${x === "rapid" ? "selected" : ""}>Rápido</option></select></label><button type="button" class="argus-test-flash" data-test-sos-flash="${Bt(c)}">Probar destello seguro</button>` : '<div class="argus-safe-note">Esta entidad solo admite encendido/apagado. Argus la mantendrá encendida de forma fija y nunca hará ciclos repetidos que puedan restablecer el bombillo o el plug.</div>'}</details>` : ""}</div>`;
  }).join("") : `<div class="mode-sensor-none">${Bt(r._t("sos_no_outputs"))}</div>`, o.querySelectorAll("[data-remove-sos-output]").forEach((c) => c.addEventListener("click", () => {
    r._panicOutputs = a.filter((p) => p !== c.dataset.removeSosOutput), delete r._panicOutputSettings?.[c.dataset.removeSosOutput], Yo(r);
  })), o.querySelectorAll("[data-test-sos-flash]").forEach((c) => c.addEventListener("click", () => {
    const p = c.dataset.testSosFlash, y = c.closest(".sos-output-settings"), h = y?.querySelector("[data-sos-output-flash]")?.value || "none", m = y?.querySelector('input[type="color"][data-sos-output-color]');
    $f(r, c, p, h, m ? Ml(m.value) : null);
  }));
}
function _f(r) {
  xi(r);
  const o = r.shadowRoot;
  o && o.querySelectorAll("[data-light-siren-color]").forEach((a) => {
    const u = a.dataset.lightSirenColor, c = oa(r, u), p = a.closest(".light-siren-settings"), y = a.closest("label");
    !c.color && y && y.remove();
    const h = p?.querySelector("summary"), m = r._hass?.states?.[u]?.attributes?.friendly_name || u, x = c.modes.length ? c.modes.join(", ") : "sin capacidad declarada";
    h && (h.innerHTML = `${Uf(c, m)} <span class="argus-ha-capability">HA: ${Bt(x)}</span>`);
    const w = p?.querySelector("[data-light-siren-flash]");
    if (!c.safeFlash && w) {
      w.checked = !1, w.disabled = !0;
      const P = w.closest("label");
      P && (P.innerHTML = '<span class="argus-safe-note">Sin destello: luz fija para evitar ciclos de alimentación.</span>');
    }
    if (c.safeFlash && p && !p.querySelector("[data-test-mode-flash]")) {
      const P = document.createElement("button");
      P.type = "button", P.className = "argus-test-flash", P.dataset.testModeFlash = u, P.textContent = "Probar destello seguro", P.addEventListener("click", () => {
        const O = p.querySelector("[data-light-siren-flash]")?.checked, X = c.color ? p.querySelector("[data-light-siren-color]") : null;
        $f(r, P, u, O ? "gentle" : "none", X ? Ml(X.value) : null);
      }), p.appendChild(P);
    }
  });
}
function ry(r) {
  const o = r._currentModeConfig(), a = r.shadowRoot, u = a.getElementById("mode-require-closed"), c = a.getElementById("mode-arming-time"), p = a.getElementById("mode-entry-delay"), y = a.getElementById("mode-mqtt-enabled");
  u && (o.require_closed = u.checked), c && (o.arming_time = c.value ? parseInt(c.value, 10) : 0), p && (o.entry_delay = p.value ? parseInt(p.value, 10) : 0), y && (o.mqtt_enabled = y.checked), o.light_siren_settings = {}, a.querySelectorAll("[data-light-siren-flash]").forEach((h) => {
    const m = h.dataset.lightSirenFlash, x = oa(r, m), w = x.safeFlash && !!h.checked, P = { gentle_flash: w, flash_mode: w ? "gentle" : "none" };
    if (x.color) {
      const O = a.querySelector(`[data-light-siren-color="${CSS.escape(m)}"]`);
      O && (P.rgb_color = Ml(O.value));
    }
    o.light_siren_settings[m] = P;
  }), r._runWithPin(async () => {
    const h = r._modeEntryId || r._dashboard?.entries?.[0]?.entity_id || "default";
    r._ui.modes ||= {}, r._ui.modes.__by_entity__ ||= {}, r._ui.modes.__by_entity__[h] ||= {}, r._ui.modes.__by_entity__[h][r._mode] = { ...o };
    const m = a.getElementById("mode-status");
    m && (m.textContent = "…", m.className = "status");
    try {
      await r._send("argus/save_mode_config", { entity_id: h, mode: r._mode, config: o }), m && (m.textContent = r._t("saved"), m.className = "status ok show"), setTimeout(() => {
        m && (m.textContent = "", m.className = "status");
      }, 3e3);
    } catch (x) {
      m && (m.textContent = `✗ ${x?.message || "Error"}`, m.className = "status err show");
    }
  });
}
function iy(r) {
  if (!r || r.__argusLightCapabilityFixes) return;
  r.__argusLightCapabilityFixes = !0;
  const o = r.prototype, a = o.connectedCallback;
  o.connectedCallback = function() {
    return xi(this), a?.call(this);
  };
  const u = o._load;
  o._load = async function() {
    const h = await u.call(this);
    return xi(this), Yo(this), _f(this), h;
  }, o._renderSosOutputs = function() {
    Yo(this);
  };
  const c = o._acceptSelection;
  o._acceptSelection = function() {
    const h = c.call(this);
    return this._selectorTarget === "panic" && Yo(this), h;
  };
  const p = o._renderModeView;
  o._renderModeView = function() {
    const h = p.call(this);
    return _f(this), h;
  };
  const y = o._renderEntries;
  o._renderEntries = function() {
    const h = y.call(this);
    return xi(this), h;
  }, o._saveMode = function() {
    return ry(this);
  };
}
function bf(r) {
  const o = r.shadowRoot, a = o?.getElementById("lbl-aesthetic-custom"), u = o?.getElementById("personalize-workspace");
  if (!o || !a || !u || a.dataset.argusPersonalizationToggle === "1") return;
  const c = a.cloneNode(!0);
  a.replaceWith(c), c.dataset.argusPersonalizationToggle = "1", c.setAttribute("role", "button"), c.setAttribute("tabindex", "0");
  const p = o.getElementById("btn-edit-home-name-standalone"), y = o.getElementById("btn-save-personalization-standalone"), h = (x) => {
    u.hidden = !x, u.classList.toggle("collapsed", !x), c.setAttribute("aria-expanded", String(x));
    const w = c.querySelector("#personalize-chevron");
    w && (w.style.transform = "none", w.textContent = x ? "▲ Ocultar" : "▼ Desplegar"), p && (p.hidden = !x), y && (y.hidden = !x);
  };
  h(!1);
  const m = () => h(c.getAttribute("aria-expanded") !== "true");
  c.addEventListener("click", m), c.addEventListener("keydown", (x) => {
    x.key !== "Enter" && x.key !== " " || (x.preventDefault(), m());
  });
}
function oy(r) {
  if (!r || r.__argusPersonalizationToggleFix) return;
  r.__argusPersonalizationToggleFix = !0;
  const o = r.prototype, a = o.connectedCallback;
  o.connectedCallback = function() {
    const c = a?.call(this);
    return queueMicrotask(() => bf(this)), c;
  };
  const u = o._load;
  o._load = async function() {
    const c = await u?.call(this);
    return bf(this), c;
  };
}
function cl(r) {
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
function ay(r) {
  if (!r || r.__argusDashboardScrollFixes) return;
  r.__argusDashboardScrollFixes = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    return cl(this), a?.call(this);
  }, o._load = async function() {
    const p = await u?.call(this);
    return cl(this), p;
  }, o._renderEntries = function() {
    const p = c?.call(this);
    return cl(this), p;
  };
}
const Vf = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Si = (r) => JSON.parse(JSON.stringify(r));
function Sl(r) {
  if (!Array.isArray(r)) return null;
  const o = /* @__PURE__ */ new Set(), a = [];
  for (const u of r) {
    const c = String(u?.id || "");
    !c || o.has(c) || (o.add(c), a.push({ id: c, size: Vf.has(u?.size) ? u.size : "M", hidden: !!u?.hidden }));
  }
  return a.length ? a : null;
}
function xf(r) {
  try {
    return Sl(JSON.parse(localStorage.getItem("argus-widgets-v4") || localStorage.getItem("argus-widgets-v2") || "null"));
  } catch {
    return null;
  }
}
function sy(r) {
  const o = r.shadowRoot?.getElementById("widget-grid"), a = new Map((r._widgetConfig || []).map((u) => [u.id, u]));
  return Sl(o ? [...o.children].filter((u) => u.classList.contains("panel") && !u.classList.contains("dashboard-instances")).map((u) => {
    const c = u.id.replace(/^w-/, "");
    return { id: c, size: Vf.has(u.dataset.size) ? u.dataset.size : a.get(c)?.size || "M", hidden: !!a.get(c)?.hidden };
  }) : r._widgetConfig);
}
function Gf(r) {
  const o = sy(r);
  if (!o) return;
  r._widgetConfig = Si(o), localStorage.setItem("argus-widgets-v4", JSON.stringify(o)), r._ui = r._ui || {};
  const a = { ...r._ui.dashboard || {}, widget_layout: Si(o) };
  r._ui.dashboard = a;
  const u = r._dashboard?.entry_id || r._dashboard?.entries?.[0]?.entry_id, c = { dashboard: a, ...u ? { entry_id: u } : {} };
  r._v2041Save = (r._v2041Save || Promise.resolve()).catch(() => {
  }).then(() => r._send("argus/save_ui", c)).catch((p) => console.error("Argus layout save failed", p));
}
function ly(r) {
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
  ly(r), [...r.shadowRoot?.querySelectorAll(".entry") || []].forEach((c, p) => {
    const y = c.querySelector(".liquid-stack");
    if (!y || y.querySelector(".argus-disarm-btn")) return;
    const h = document.createElement("button");
    h.type = "button", h.className = "liquid-btn argus-disarm-btn", h.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", h.addEventListener("click", async () => {
      const m = r._dashboard?.entries?.[p] || r._dashboard?.entries?.find((x) => x.entity_id === c.dataset.entityId);
      if (m) {
        h.disabled = !0;
        try {
          await r._send("argus/perform_alarm_action", { entry_id: m.entry_id, action: "disarm" }), await r._load?.();
        } catch (x) {
          console.error("Argus disarm failed", x);
        } finally {
          h.disabled = !1;
        }
      }
    }), y.prepend(h);
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
      r._widgetEditing && setTimeout(() => Gf(r), 0);
    }, !0);
  }
}
function uy(r) {
  if (!r || r.__v2041AuditRepair) return;
  r.__v2041AuditRepair = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries, p = o._saveWidgetLayout, y = o._initWidgetGrid;
  o.connectedCallback = function() {
    const h = a?.call(this);
    return wi(this), this._v2041Observer = new MutationObserver(() => wi(this)), this._v2041Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), h;
  }, o._initWidgetGrid = function() {
    const h = xf();
    h && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: Si(h) });
    const m = y?.call(this);
    return h && (this._widgetConfig = Si(h), this._renderWidgetLayout?.()), wi(this), m;
  }, o._load = async function() {
    const h = await u?.call(this), m = xf();
    return m && (this._widgetConfig = Si(m), this._renderWidgetLayout?.()), wi(this), h;
  }, o._renderEntries = function() {
    const h = c?.call(this);
    return wi(this), h;
  }, o._saveWidgetLayout = function() {
    const h = p?.call(this);
    return setTimeout(() => Gf(this), 0), h;
  };
}
const Yf = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Xf = "argus-widgets-stable-v5", _r = (r) => JSON.parse(JSON.stringify(r));
function El(r) {
  if (!Array.isArray(r)) return null;
  const o = /* @__PURE__ */ new Set(), a = [];
  for (const u of r) {
    const c = String(u?.id || "");
    !c || o.has(c) || (o.add(c), a.push({ id: c, size: Yf.has(u?.size) ? u.size : "M", hidden: !!u?.hidden }));
  }
  return a.length ? a : null;
}
function Sf() {
  try {
    return El(JSON.parse(localStorage.getItem(Xf) || localStorage.getItem("argus-widgets-v4") || "null"));
  } catch {
    return null;
  }
}
function br(r) {
  const o = r.shadowRoot?.getElementById("widget-grid"), a = new Map((r._widgetConfig || []).map((u) => [u.id, u]));
  return El(o ? [...o.children].filter((u) => u.classList.contains("panel") && !u.classList.contains("dashboard-instances")).map((u) => {
    const c = u.id.replace(/^w-/, "");
    return { id: c, size: Yf.has(u.dataset.size) ? u.dataset.size : a.get(c)?.size || "M", hidden: !!a.get(c)?.hidden };
  }) : r._widgetConfig);
}
function Ei(r, o = br(r)) {
  if (!o) return;
  localStorage.setItem(Xf, JSON.stringify(o)), r._widgetConfig = _r(o), r._ui = r._ui || {};
  const a = { ...r._ui.dashboard || {}, widget_layout: _r(o) };
  r._ui.dashboard = a;
  const u = r._dashboard?.entry_id || r._dashboard?.entries?.[0]?.entry_id, c = { dashboard: a, ...u ? { entry_id: u } : {} };
  r._stableSave = (r._stableSave || Promise.resolve()).catch(() => {
  }).then(() => r._send("argus/save_ui", c)).catch((p) => console.error("Argus server layout save failed; stable local layout retained", p));
}
function cy(r) {
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
  cy(r), [...r.shadowRoot?.querySelectorAll(".entry") || []].forEach((c, p) => {
    const y = r._dashboard?.entries?.[p], h = y?.attributes || {}, m = h.arming_blocking_sensors || [], x = !!(h.arming_waiting_for_sensors || m.length);
    c.classList.toggle("argus-waiting", x);
    const w = c.querySelector(".liquid-stack");
    if (w) {
      let O = w.querySelector(".argus-disarm-btn");
      O || (O = document.createElement("button"), O.type = "button", O.className = "liquid-btn argus-disarm-btn", O.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", O.onclick = async () => {
        if (y) {
          O.disabled = !0;
          try {
            await r._send("argus/perform_alarm_action", { entry_id: y.entry_id, action: "disarm" }), await r._load?.();
          } finally {
            O.disabled = !1;
          }
        }
      });
      const X = [...w.children].find((V) => /SOS|PÁNICO|PANIC/i.test(V.textContent || ""));
      X ? w.insertBefore(O, X) : w.appendChild(O);
    }
    const P = new Set(m.map((O) => {
      const X = r._dashboard?.available_entities?.find?.((V) => V.entity_id === O);
      return String(X?.name || O).toLocaleLowerCase();
    }));
    c.querySelectorAll(".console-sensor").forEach((O) => {
      const X = String(O.querySelector(".console-sensor-name")?.textContent || O.textContent || "").toLocaleLowerCase();
      O.classList.toggle("argus-blocking", [...P].some((V) => X.includes(V) || V.includes(X)));
    });
  });
  const a = r.shadowRoot?.getElementById("w-access");
  if (a) {
    const c = a.querySelector(".panel-body,#access-view,.access-view,.access-content,.access-body");
    c && !c.textContent.trim() && [...a.querySelectorAll("button,[role=tab]")].find((p) => /usuarios|users/i.test(p.textContent || ""))?.click();
  }
  const u = r.shadowRoot?.getElementById("widget-grid");
  u && !u._stableLayout && (u._stableLayout = !0, u.addEventListener("dragend", () => {
    r._widgetEditing && Ei(r, br(r));
  }, !0), u.addEventListener("drop", () => queueMicrotask(() => {
    r._widgetEditing && Ei(r, br(r));
  }), !1), new MutationObserver(() => {
    r._widgetEditing && (clearTimeout(r._stableMutation), r._stableMutation = setTimeout(() => Ei(r, br(r)), 80));
  }).observe(u, { childList: !0 }));
}
function dy(r) {
  if (!r || r.__v2042Stability) return;
  r.__v2042Stability = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries, p = o._initWidgetGrid, y = o._toggleWidgetEditing, h = o._saveWidgetLayout;
  o.connectedCallback = function() {
    const m = a?.call(this);
    return _i(this), m;
  }, o._initWidgetGrid = function() {
    const m = Sf();
    m && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: _r(m) });
    const x = p?.call(this);
    return m && (this._widgetConfig = _r(m), this._renderWidgetLayout?.()), _i(this), x;
  }, o._load = async function() {
    const m = await u?.call(this), x = Sf();
    return x && (this._widgetConfig = _r(x), this._renderWidgetLayout?.(), requestAnimationFrame(() => {
      this._widgetConfig = _r(x), this._renderWidgetLayout?.();
    })), _i(this), m;
  }, o._renderEntries = function() {
    const m = c?.call(this);
    return _i(this), m;
  }, o._toggleWidgetEditing = function() {
    const m = this._widgetEditing, x = m ? br(this) : null, w = y?.call(this);
    return m && x && Ei(this, x), _i(this), w;
  }, o._saveWidgetLayout = function() {
    const m = br(this), x = h?.call(this);
    return Ei(this, m), x;
  };
}
function fy(r) {
  if (r.shadowRoot?.getElementById("argus-v2043-visual-fix")) return;
  const o = document.createElement("style");
  o.id = "argus-v2043-visual-fix", o.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:#22a447!important;background-image:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important;box-shadow:0 8px 22px rgba(34,197,94,.3)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important}
`, r.shadowRoot.appendChild(o);
}
function dl(r) {
  fy(r), [...r.shadowRoot?.querySelectorAll(".entry") || []].forEach((o, a) => {
    const u = r._dashboard?.entries?.[a], c = u?.attributes || {}, p = c.arming_blocking_sensors || [], y = !!(c.arming_waiting_for_sensors || p.length);
    o.classList.toggle("argus-waiting", y);
    const h = o.querySelector(".liquid-stack");
    if (h) {
      let x = h.querySelector(".argus-disarm-btn");
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
      const w = [...h.children].find((P) => /SOS|PÁNICO|PANIC/i.test(P.textContent || ""));
      w ? h.insertBefore(x, w) : h.appendChild(x);
    }
    const m = new Set(p.map((x) => String(r._dashboard?.available_entities?.find?.((w) => w.entity_id === x)?.name || x).toLocaleLowerCase()));
    o.querySelectorAll(".console-sensor").forEach((x) => {
      const w = String(x.querySelector(".console-sensor-name")?.textContent || x.textContent || "").toLocaleLowerCase();
      x.classList.toggle("argus-blocking", [...m].some((P) => w.includes(P) || P.includes(w)));
    });
  });
}
function py(r) {
  if (!r || r.__v2043VisualFix) return;
  r.__v2043VisualFix = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const p = a?.call(this);
    return dl(this), p;
  }, o._load = async function() {
    const p = await u?.call(this);
    return dl(this), p;
  }, o._renderEntries = function() {
    const p = c?.call(this);
    return dl(this), p;
  };
}
function Ho(r) {
  return String(r || "").trim().toLocaleLowerCase();
}
function fl(r) {
  if (!r.shadowRoot) return;
  let o = r.shadowRoot.getElementById("argus-v2045-trigger-sensors");
  o || (o = document.createElement("style"), o.id = "argus-v2045-trigger-sensors", o.textContent = ".entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;color:#fff!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;box-shadow:0 0 18px rgba(249,115,22,.55)!important}@keyframes argusTriggeredSensor{0%,100%{opacity:.62;box-shadow:0 0 8px rgba(249,115,22,.35)}50%{opacity:1;box-shadow:0 0 26px rgba(251,146,60,.9)}}", r.shadowRoot.appendChild(o)), [...r.shadowRoot.querySelectorAll(".entry") || []].forEach((a, u) => {
    const c = r._dashboard?.entries?.[u], p = c?.attributes || {}, y = p.triggered_sensors || [], h = new Set(y.flatMap((m) => {
      const x = r._dashboard?.available_entities?.find?.((w) => w.entity_id === m);
      return [Ho(m), Ho(x?.name), Ho(x?.friendly_name)];
    }).filter(Boolean));
    a.querySelectorAll(".console-sensor").forEach((m) => {
      const x = Ho(m.querySelector(".console-sensor-name")?.textContent || m.textContent);
      m.classList.toggle("argus-triggered-sensor", [...h].some((w) => x.includes(w) || w.includes(x)));
    });
  });
}
function hy(r) {
  if (!r || r.__v2045TriggerSensors) return;
  r.__v2045TriggerSensors = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const p = a?.call(this);
    return fl(this), p;
  }, o._load = async function() {
    const p = await u?.call(this);
    return fl(this), p;
  }, o._renderEntries = function() {
    const p = c?.call(this);
    return fl(this), p;
  };
}
const my = { armed_home: /EN CASA|HOME/i, armed_away: /AUSENTE|AWAY/i, armed_night: /NOCHE|NIGHT/i, armed_vacation: /VACACIONES|VACATION/i };
function gy(r, o) {
  const a = o?.entity_id || o?.alarm_entity_id;
  return String(o?.state || o?.alarm_state || o?.attributes?.state || r._hass?.states?.[a]?.state || "").toLowerCase();
}
function pl(r, o, a) {
  r.classList.toggle("argus-action-active", a), r.dataset.argusAction = o;
  const u = o === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : o === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  r.style.setProperty("background", a ? u : "rgba(255,255,255,.105)", "important"), r.style.setProperty("background-image", a ? u : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), r.style.setProperty("border", a ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), r.style.setProperty("box-shadow", a ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important"), r.style.setProperty("backdrop-filter", "blur(16px) saturate(1.2)", "important");
}
function hl(r) {
  if (!r.shadowRoot) return;
  let o = r.shadowRoot.getElementById("argus-v2046-active-visuals");
  o || (o = document.createElement("style"), o.id = "argus-v2046-active-visuals", o.textContent = ".entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important;transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease!important}.entry .liquid-stack .liquid-btn:not(.argus-action-active):hover{background:rgba(255,255,255,.16)!important;transform:translateY(-1px)}.entry.argus-arming .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}", r.shadowRoot.appendChild(o)), [...r.shadowRoot.querySelectorAll(".entry") || []].forEach((a, u) => {
    const c = r._dashboard?.entries?.[u] || {}, p = c.attributes || {}, y = gy(r, c), h = y === "arming" || !!p.arming_waiting_for_sensors || !!(p.arming_blocking_sensors || []).length;
    a.classList.toggle("argus-arming", h);
    const m = a.querySelector(".entry-icon");
    let x = a.querySelector(".argus-shield-status");
    h && m ? (x || (x = document.createElement("span"), x.className = "argus-shield-status", m.insertAdjacentElement("afterend", x)), x.textContent = (p.arming_blocking_sensors || []).length ? "ESPERANDO SENSORES" : "ARMANDO…") : x?.remove();
    const w = a.querySelector(".liquid-stack");
    w && [...w.querySelectorAll(".liquid-btn,button")].forEach((P) => {
      const O = String(P.textContent || "");
      if (/SOS|PÁNICO|PANIC/i.test(O)) pl(P, "sos", !!p.argus_panic_active);
      else if (/DESARMAR|DISARM|OFF/i.test(O)) pl(P, "disarm", y === "disarmed");
      else {
        const X = Object.entries(my).find(([, V]) => V.test(O));
        X && pl(P, X[0], y === X[0]);
      }
    });
  });
}
function yy(r) {
  if (!r || r.__v2046ActiveVisuals) return;
  r.__v2046ActiveVisuals = !0;
  const o = r.prototype, a = o.connectedCallback, u = o._load, c = o._renderEntries;
  o.connectedCallback = function() {
    const p = a?.call(this);
    return hl(this), p;
  }, o._load = async function() {
    const p = await u?.call(this);
    return hl(this), p;
  }, o._renderEntries = function() {
    const p = c?.call(this);
    return hl(this), p;
  };
}
function vy(r) {
  lg(r);
}
function wy(r) {
  ug(r), hg(r), bg(r), Dg(r), Tg(r), Ng(r), Wg(r), Gg(r), Qg(r), Zg(r), iy(r), oy(r), ay(r), uy(r), dy(r), py(r), hy(r), yy(r);
}
function Ey(r) {
  const o = r;
  !o || o.__argusTypedFrontend || (o.__argusTypedFrontend = !0, vy(o), Um(o), $m(o), Ym(o), eg(o), tg(o), og(o), applyV2049ResponsiveWidgets(o), applyV2050WidgetLayouts(o), wy(o), Wm(o));
}
export {
  Ey as applyArgusFrontend
};
