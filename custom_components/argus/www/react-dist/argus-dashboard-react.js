function ep(u) {
  if (u.__esModule) return u;
  var c = u.default;
  if (typeof c == "function") {
    var l = function d() {
      return this instanceof d ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    l.prototype = c.prototype;
  } else l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(u).forEach(function(d) {
    var R = Object.getOwnPropertyDescriptor(u, d);
    Object.defineProperty(l, d, R.get ? R : {
      enumerable: !0,
      get: function() {
        return u[d];
      }
    });
  }), l;
}
var gs = { exports: {} }, ii = {}, ys = { exports: {} }, Le = {};
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
function tp() {
  if (dc) return Le;
  dc = 1;
  var u = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), H = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), q = Symbol.iterator;
  function F(_) {
    return _ === null || typeof _ != "object" ? null : (_ = q && _[q] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var xe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, we = Object.assign, U = {};
  function P(_, M, ve) {
    this.props = _, this.context = M, this.refs = U, this.updater = ve || xe;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(_, M) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, M, "setState");
  }, P.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function v() {
  }
  v.prototype = P.prototype;
  function a(_, M, ve) {
    this.props = _, this.context = M, this.refs = U, this.updater = ve || xe;
  }
  var h = a.prototype = new v();
  h.constructor = a, we(h, P.prototype), h.isPureReactComponent = !0;
  var f = Array.isArray, p = Object.prototype.hasOwnProperty, y = { current: null }, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(_, M, ve) {
    var Ee, Oe = {}, De = null, Ie = null;
    if (M != null) for (Ee in M.ref !== void 0 && (Ie = M.ref), M.key !== void 0 && (De = "" + M.key), M) p.call(M, Ee) && !k.hasOwnProperty(Ee) && (Oe[Ee] = M[Ee]);
    var Q = arguments.length - 2;
    if (Q === 1) Oe.children = ve;
    else if (1 < Q) {
      for (var ce = Array(Q), Re = 0; Re < Q; Re++) ce[Re] = arguments[Re + 2];
      Oe.children = ce;
    }
    if (_ && _.defaultProps) for (Ee in Q = _.defaultProps, Q) Oe[Ee] === void 0 && (Oe[Ee] = Q[Ee]);
    return { $$typeof: u, type: _, key: De, ref: Ie, props: Oe, _owner: y.current };
  }
  function A(_, M) {
    return { $$typeof: u, type: _.type, key: M, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function ee(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === u;
  }
  function ae(_) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(ve) {
      return M[ve];
    });
  }
  var se = /\/+/g;
  function oe(_, M) {
    return typeof _ == "object" && _ !== null && _.key != null ? ae("" + _.key) : M.toString(36);
  }
  function ge(_, M, ve, Ee, Oe) {
    var De = typeof _;
    (De === "undefined" || De === "boolean") && (_ = null);
    var Ie = !1;
    if (_ === null) Ie = !0;
    else switch (De) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case u:
          case c:
            Ie = !0;
        }
    }
    if (Ie) return Ie = _, Oe = Oe(Ie), _ = Ee === "" ? "." + oe(Ie, 0) : Ee, f(Oe) ? (ve = "", _ != null && (ve = _.replace(se, "$&/") + "/"), ge(Oe, M, ve, "", function(Re) {
      return Re;
    })) : Oe != null && (ee(Oe) && (Oe = A(Oe, ve + (!Oe.key || Ie && Ie.key === Oe.key ? "" : ("" + Oe.key).replace(se, "$&/") + "/") + _)), M.push(Oe)), 1;
    if (Ie = 0, Ee = Ee === "" ? "." : Ee + ":", f(_)) for (var Q = 0; Q < _.length; Q++) {
      De = _[Q];
      var ce = Ee + oe(De, Q);
      Ie += ge(De, M, ve, ce, Oe);
    }
    else if (ce = F(_), typeof ce == "function") for (_ = ce.call(_), Q = 0; !(De = _.next()).done; ) De = De.value, ce = Ee + oe(De, Q++), Ie += ge(De, M, ve, ce, Oe);
    else if (De === "object") throw M = String(_), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function $(_, M, ve) {
    if (_ == null) return _;
    var Ee = [], Oe = 0;
    return ge(_, Ee, "", "", function(De) {
      return M.call(ve, De, Oe++);
    }), Ee;
  }
  function ne(_) {
    if (_._status === -1) {
      var M = _._result;
      M = M(), M.then(function(ve) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ve);
      }, function(ve) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ve);
      }), _._status === -1 && (_._status = 0, _._result = M);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var te = { current: null }, b = { transition: null }, ie = { ReactCurrentDispatcher: te, ReactCurrentBatchConfig: b, ReactCurrentOwner: y };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: $, forEach: function(_, M, ve) {
    $(_, function() {
      M.apply(this, arguments);
    }, ve);
  }, count: function(_) {
    var M = 0;
    return $(_, function() {
      M++;
    }), M;
  }, toArray: function(_) {
    return $(_, function(M) {
      return M;
    }) || [];
  }, only: function(_) {
    if (!ee(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Le.Component = P, Le.Fragment = l, Le.Profiler = R, Le.PureComponent = a, Le.StrictMode = d, Le.Suspense = L, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, Le.act = K, Le.cloneElement = function(_, M, ve) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ee = we({}, _.props), Oe = _.key, De = _.ref, Ie = _._owner;
    if (M != null) {
      if (M.ref !== void 0 && (De = M.ref, Ie = y.current), M.key !== void 0 && (Oe = "" + M.key), _.type && _.type.defaultProps) var Q = _.type.defaultProps;
      for (ce in M) p.call(M, ce) && !k.hasOwnProperty(ce) && (Ee[ce] = M[ce] === void 0 && Q !== void 0 ? Q[ce] : M[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) Ee.children = ve;
    else if (1 < ce) {
      Q = Array(ce);
      for (var Re = 0; Re < ce; Re++) Q[Re] = arguments[Re + 2];
      Ee.children = Q;
    }
    return { $$typeof: u, type: _.type, key: Oe, ref: De, props: Ee, _owner: Ie };
  }, Le.createContext = function(_) {
    return _ = { $$typeof: H, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: N, _context: _ }, _.Consumer = _;
  }, Le.createElement = j, Le.createFactory = function(_) {
    var M = j.bind(null, _);
    return M.type = _, M;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(_) {
    return { $$typeof: V, render: _ };
  }, Le.isValidElement = ee, Le.lazy = function(_) {
    return { $$typeof: Y, _payload: { _status: -1, _result: _ }, _init: ne };
  }, Le.memo = function(_, M) {
    return { $$typeof: W, type: _, compare: M === void 0 ? null : M };
  }, Le.startTransition = function(_) {
    var M = b.transition;
    b.transition = {};
    try {
      _();
    } finally {
      b.transition = M;
    }
  }, Le.unstable_act = K, Le.useCallback = function(_, M) {
    return te.current.useCallback(_, M);
  }, Le.useContext = function(_) {
    return te.current.useContext(_);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(_) {
    return te.current.useDeferredValue(_);
  }, Le.useEffect = function(_, M) {
    return te.current.useEffect(_, M);
  }, Le.useId = function() {
    return te.current.useId();
  }, Le.useImperativeHandle = function(_, M, ve) {
    return te.current.useImperativeHandle(_, M, ve);
  }, Le.useInsertionEffect = function(_, M) {
    return te.current.useInsertionEffect(_, M);
  }, Le.useLayoutEffect = function(_, M) {
    return te.current.useLayoutEffect(_, M);
  }, Le.useMemo = function(_, M) {
    return te.current.useMemo(_, M);
  }, Le.useReducer = function(_, M, ve) {
    return te.current.useReducer(_, M, ve);
  }, Le.useRef = function(_) {
    return te.current.useRef(_);
  }, Le.useState = function(_) {
    return te.current.useState(_);
  }, Le.useSyncExternalStore = function(_, M, ve) {
    return te.current.useSyncExternalStore(_, M, ve);
  }, Le.useTransition = function() {
    return te.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var pc;
function Ot() {
  return pc || (pc = 1, ys.exports = tp()), ys.exports;
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
var hc;
function np() {
  if (hc) return ii;
  hc = 1;
  var u = Ot(), c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, R = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(V, L, W) {
    var Y, q = {}, F = null, xe = null;
    W !== void 0 && (F = "" + W), L.key !== void 0 && (F = "" + L.key), L.ref !== void 0 && (xe = L.ref);
    for (Y in L) d.call(L, Y) && !N.hasOwnProperty(Y) && (q[Y] = L[Y]);
    if (V && V.defaultProps) for (Y in L = V.defaultProps, L) q[Y] === void 0 && (q[Y] = L[Y]);
    return { $$typeof: c, type: V, key: F, ref: xe, props: q, _owner: R.current };
  }
  return ii.Fragment = l, ii.jsx = H, ii.jsxs = H, ii;
}
var mc;
function rp() {
  return mc || (mc = 1, gs.exports = np()), gs.exports;
}
var Ue = rp(), Eo = {}, vs = { exports: {} }, zt = {}, ws = { exports: {} }, Ss = {};
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
    function c(b, ie) {
      var K = b.length;
      b.push(ie);
      e: for (; 0 < K; ) {
        var _ = K - 1 >>> 1, M = b[_];
        if (0 < R(M, ie)) b[_] = ie, b[K] = M, K = _;
        else break e;
      }
    }
    function l(b) {
      return b.length === 0 ? null : b[0];
    }
    function d(b) {
      if (b.length === 0) return null;
      var ie = b[0], K = b.pop();
      if (K !== ie) {
        b[0] = K;
        e: for (var _ = 0, M = b.length, ve = M >>> 1; _ < ve; ) {
          var Ee = 2 * (_ + 1) - 1, Oe = b[Ee], De = Ee + 1, Ie = b[De];
          if (0 > R(Oe, K)) De < M && 0 > R(Ie, Oe) ? (b[_] = Ie, b[De] = K, _ = De) : (b[_] = Oe, b[Ee] = K, _ = Ee);
          else if (De < M && 0 > R(Ie, K)) b[_] = Ie, b[De] = K, _ = De;
          else break e;
        }
      }
      return ie;
    }
    function R(b, ie) {
      var K = b.sortIndex - ie.sortIndex;
      return K !== 0 ? K : b.id - ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      u.unstable_now = function() {
        return N.now();
      };
    } else {
      var H = Date, V = H.now();
      u.unstable_now = function() {
        return H.now() - V;
      };
    }
    var L = [], W = [], Y = 1, q = null, F = 3, xe = !1, we = !1, U = !1, P = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(b) {
      for (var ie = l(W); ie !== null; ) {
        if (ie.callback === null) d(W);
        else if (ie.startTime <= b) d(W), ie.sortIndex = ie.expirationTime, c(L, ie);
        else break;
        ie = l(W);
      }
    }
    function f(b) {
      if (U = !1, h(b), !we) if (l(L) !== null) we = !0, ne(p);
      else {
        var ie = l(W);
        ie !== null && te(f, ie.startTime - b);
      }
    }
    function p(b, ie) {
      we = !1, U && (U = !1, v(j), j = -1), xe = !0;
      var K = F;
      try {
        for (h(ie), q = l(L); q !== null && (!(q.expirationTime > ie) || b && !ae()); ) {
          var _ = q.callback;
          if (typeof _ == "function") {
            q.callback = null, F = q.priorityLevel;
            var M = _(q.expirationTime <= ie);
            ie = u.unstable_now(), typeof M == "function" ? q.callback = M : q === l(L) && d(L), h(ie);
          } else d(L);
          q = l(L);
        }
        if (q !== null) var ve = !0;
        else {
          var Ee = l(W);
          Ee !== null && te(f, Ee.startTime - ie), ve = !1;
        }
        return ve;
      } finally {
        q = null, F = K, xe = !1;
      }
    }
    var y = !1, k = null, j = -1, A = 5, ee = -1;
    function ae() {
      return !(u.unstable_now() - ee < A);
    }
    function se() {
      if (k !== null) {
        var b = u.unstable_now();
        ee = b;
        var ie = !0;
        try {
          ie = k(!0, b);
        } finally {
          ie ? oe() : (y = !1, k = null);
        }
      } else y = !1;
    }
    var oe;
    if (typeof a == "function") oe = function() {
      a(se);
    };
    else if (typeof MessageChannel < "u") {
      var ge = new MessageChannel(), $ = ge.port2;
      ge.port1.onmessage = se, oe = function() {
        $.postMessage(null);
      };
    } else oe = function() {
      P(se, 0);
    };
    function ne(b) {
      k = b, y || (y = !0, oe());
    }
    function te(b, ie) {
      j = P(function() {
        b(u.unstable_now());
      }, ie);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, u.unstable_continueExecution = function() {
      we || xe || (we = !0, ne(p));
    }, u.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < b ? Math.floor(1e3 / b) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, u.unstable_getFirstCallbackNode = function() {
      return l(L);
    }, u.unstable_next = function(b) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = F;
      }
      var K = F;
      F = ie;
      try {
        return b();
      } finally {
        F = K;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(b, ie) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var K = F;
      F = b;
      try {
        return ie();
      } finally {
        F = K;
      }
    }, u.unstable_scheduleCallback = function(b, ie, K) {
      var _ = u.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? _ + K : _) : K = _, b) {
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
      return M = K + M, b = { id: Y++, callback: ie, priorityLevel: b, startTime: K, expirationTime: M, sortIndex: -1 }, K > _ ? (b.sortIndex = K, c(W, b), l(L) === null && b === l(W) && (U ? (v(j), j = -1) : U = !0, te(f, K - _))) : (b.sortIndex = M, c(L, b), we || xe || (we = !0, ne(p))), b;
    }, u.unstable_shouldYield = ae, u.unstable_wrapCallback = function(b) {
      var ie = F;
      return function() {
        var K = F;
        F = ie;
        try {
          return b.apply(this, arguments);
        } finally {
          F = K;
        }
      };
    };
  }(Ss)), Ss;
}
var yc;
function op() {
  return yc || (yc = 1, ws.exports = ip()), ws.exports;
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
var vc;
function lp() {
  if (vc) return zt;
  vc = 1;
  var u = Ot(), c = op();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), R = {};
  function N(e, t) {
    H(e, t), H(e + "Capture", t);
  }
  function H(e, t) {
    for (R[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var V = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, q = {};
  function F(e) {
    return L.call(q, e) ? !0 : L.call(Y, e) ? !1 : W.test(e) ? q[e] = !0 : (Y[e] = !0, !1);
  }
  function xe(e, t, n, r) {
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
    if (t === null || typeof t > "u" || xe(e, t, n, r)) return !0;
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
  function U(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    P[e] = new U(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    P[t] = new U(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    P[e] = new U(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    P[e] = new U(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    P[e] = new U(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    P[e] = new U(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    P[e] = new U(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    P[e] = new U(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    P[e] = new U(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    P[t] = new U(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(v, a);
    P[t] = new U(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(v, a);
    P[t] = new U(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    P[e] = new U(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new U("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    P[e] = new U(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = P.hasOwnProperty(t) ? P[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (we(t, n, i, r) && (n = null), r || i === null ? F(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = Symbol.for("react.element"), y = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), ae = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), b = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object" ? null : (e = b && e[b] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign, _;
  function M(e) {
    if (_ === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      _ = t && t[1] || "";
    }
    return `
` + _ + e;
  }
  var ve = !1;
  function Ee(e, t) {
    if (!e || ve) return "";
    ve = !0;
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
`), s = i.length - 1, m = o.length - 1; 1 <= s && 0 <= m && i[s] !== o[m]; ) m--;
        for (; 1 <= s && 0 <= m; s--, m--) if (i[s] !== o[m]) {
          if (s !== 1 || m !== 1)
            do
              if (s--, m--, 0 > m || i[s] !== o[m]) {
                var w = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= s && 0 <= m);
          break;
        }
      }
    } finally {
      ve = !1, Error.prepareStackTrace = n;
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
        return e = Ee(e.type, !1), e;
      case 11:
        return e = Ee(e.type.render, !1), e;
      case 1:
        return e = Ee(e.type, !0), e;
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
      case A:
        return "Profiler";
      case j:
        return "StrictMode";
      case oe:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ae:
        return (e.displayName || "Context") + ".Consumer";
      case ee:
        return (e._context.displayName || "Context") + ".Provider";
      case se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $:
        return t = e.displayName || null, t !== null ? t : De(e.type) || "Memo";
      case ne:
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
  function Q(e) {
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
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Re(e) {
    var t = ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Ce(e) {
    e._valueTracker || (e._valueTracker = Re(e));
  }
  function Te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ae(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ve(e, t) {
    var n = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function tt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function S(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function E(e, t) {
    S(e, t);
    var n = Q(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? B(e, t.type, n) : t.hasOwnProperty("defaultValue") && B(e, t.type, Q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function z(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function B(e, t, n) {
    (t !== "number" || Ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var le = Array.isArray;
  function me(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Q(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ke(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Pe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (le(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Ne(e, t) {
    var n = Q(t.value), r = Q(t.defaultValue);
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
  var g, C = function(e) {
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
  function I(e, t) {
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
  }, ue = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(e) {
    ue.forEach(function(t) {
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
  var Qe = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ft(e, t) {
    if (t) {
      if (Qe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
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
  function Sr(e) {
    if (e = qr(e)) {
      if (typeof Gn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Ii(t), Gn(e.stateNode, e.type, t));
    }
  }
  function _r(e) {
    Ln ? Zt ? Zt.push(e) : Zt = [e] : Ln = e;
  }
  function Yn() {
    if (Ln) {
      var e = Ln, t = Zt;
      if (Zt = Ln = null, Sr(e), t) for (e = 0; e < t.length; e++) Sr(t[e]);
    }
  }
  function hi(e, t) {
    return e(t);
  }
  function Ts() {
  }
  var To = !1;
  function Ms(e, t, n) {
    if (To) return e(t, n);
    To = !0;
    try {
      return hi(e, t, n);
    } finally {
      To = !1, (Ln !== null || Zt !== null) && (Ts(), Yn());
    }
  }
  function xr(e, t) {
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
  var Mo = !1;
  if (V) try {
    var Er = {};
    Object.defineProperty(Er, "passive", { get: function() {
      Mo = !0;
    } }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
  } catch {
    Mo = !1;
  }
  function lf(e, t, n, r, i, o, s, m, w) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (X) {
      this.onError(X);
    }
  }
  var kr = !1, mi = null, gi = !1, jo = null, sf = { onError: function(e) {
    kr = !0, mi = e;
  } };
  function af(e, t, n, r, i, o, s, m, w) {
    kr = !1, mi = null, lf.apply(sf, arguments);
  }
  function uf(e, t, n, r, i, o, s, m, w) {
    if (af.apply(this, arguments), kr) {
      if (kr) {
        var T = mi;
        kr = !1, mi = null;
      } else throw Error(l(198));
      gi || (gi = !0, jo = T);
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
  function js(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function bs(e) {
    if (Tn(e) !== e) throw Error(l(188));
  }
  function cf(e) {
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
          if (o === n) return bs(i), e;
          if (o === r) return bs(i), t;
          o = o.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = i, r = o;
      else {
        for (var s = !1, m = i.child; m; ) {
          if (m === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (m === r) {
            s = !0, r = i, n = o;
            break;
          }
          m = m.sibling;
        }
        if (!s) {
          for (m = o.child; m; ) {
            if (m === n) {
              s = !0, n = o, r = i;
              break;
            }
            if (m === r) {
              s = !0, r = o, n = i;
              break;
            }
            m = m.sibling;
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
    return e = cf(e), e !== null ? Hs(e) : null;
  }
  function Hs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Hs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ws = c.unstable_scheduleCallback, As = c.unstable_cancelCallback, ff = c.unstable_shouldYield, df = c.unstable_requestPaint, nt = c.unstable_now, pf = c.unstable_getCurrentPriorityLevel, bo = c.unstable_ImmediatePriority, Fs = c.unstable_UserBlockingPriority, yi = c.unstable_NormalPriority, hf = c.unstable_LowPriority, Bs = c.unstable_IdlePriority, vi = null, Gt = null;
  function mf(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : vf, gf = Math.log, yf = Math.LN2;
  function vf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gf(e) / yf | 0) | 0;
  }
  var wi = 64, Si = 4194304;
  function Rr(e) {
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
      var m = s & ~i;
      m !== 0 ? r = Rr(m) : (o &= s, o !== 0 && (r = Rr(o)));
    } else s = n & ~i, s !== 0 ? r = Rr(s) : o !== 0 && (r = Rr(o));
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
      var s = 31 - Wt(o), m = 1 << s, w = i[s];
      w === -1 ? (!(m & n) || m & r) && (i[s] = wf(m, t)) : w <= t && (e.expiredLanes |= m), o &= ~m;
    }
  }
  function Io(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function qs() {
    var e = wi;
    return wi <<= 1, !(wi & 4194240) && (wi = 64), e;
  }
  function Ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function zr(e, t, n) {
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
  function Us(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Vs, Ao, $s, Gs, Ys, Fo = !1, xi = [], fn = null, dn = null, pn = null, Or = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), hn = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Or.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pr.delete(t.pointerId);
    }
  }
  function Cr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = qr(t), t !== null && Ao(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Ef(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return fn = Cr(fn, e, t, n, r, i), !0;
      case "dragenter":
        return dn = Cr(dn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = Cr(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Or.set(o, Cr(Or.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Pr.set(o, Cr(Pr.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Qs(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = js(n), t !== null) {
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
  function Ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $t = r, n.target.dispatchEvent(r), $t = null;
      } else return t = qr(n), t !== null && Ao(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ks(e, t, n) {
    Ei(e) && n.delete(t);
  }
  function kf() {
    Fo = !1, fn !== null && Ei(fn) && (fn = null), dn !== null && Ei(dn) && (dn = null), pn !== null && Ei(pn) && (pn = null), Or.forEach(Ks), Pr.forEach(Ks);
  }
  function Dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, kf)));
  }
  function Nr(e) {
    function t(i) {
      return Dr(i, e);
    }
    if (0 < xi.length) {
      Dr(xi[0], e);
      for (var n = 1; n < xi.length; n++) {
        var r = xi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && Dr(fn, e), dn !== null && Dr(dn, e), pn !== null && Dr(pn, e), Or.forEach(t), Pr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Qs(n), n.blockedOn === null && hn.shift();
  }
  var Xn = f.ReactCurrentBatchConfig, ki = !0;
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
    if (ki) {
      var i = qo(e, t, n, r);
      if (i === null) ll(e, t, r, Ri, n), Xs(e, r);
      else if (Ef(i, e, t, n, r)) r.stopPropagation();
      else if (Xs(e, r), t & 4 && -1 < xf.indexOf(e)) {
        for (; i !== null; ) {
          var o = qr(i);
          if (o !== null && Vs(o), o = qo(e, t, n, r), o === null && ll(e, t, r, Ri, n), o === i) break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else ll(e, t, r, null, n);
    }
  }
  var Ri = null;
  function qo(e, t, n, r) {
    if (Ri = null, e = Nn(r), e = Mn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = js(t), e !== null) return e;
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
        switch (pf()) {
          case bo:
            return 1;
          case Fs:
            return 4;
          case yi:
          case hf:
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
  var mn = null, Uo = null, zi = null;
  function Js() {
    if (zi) return zi;
    var e, t = Uo, n = t.length, r, i = "value" in mn ? mn.value : mn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
    return zi = i.slice(e, 1 < r ? 1 - r : void 0);
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
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(o) : o[m]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pi : ea, this.isPropagationStopped = ea, this;
    }
    return K(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Vo = Pt(Qn), Lr = K({}, Qn, { view: 0, detail: 0 }), Of = Pt(Lr), $o, Go, Tr, Ci = K({}, Lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? ($o = e.screenX - Tr.screenX, Go = e.screenY - Tr.screenY) : Go = $o = 0, Tr = e), $o);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Go;
  } }), ta = Pt(Ci), Pf = K({}, Ci, { dataTransfer: 0 }), Cf = Pt(Pf), Df = K({}, Lr, { relatedTarget: 0 }), Yo = Pt(Df), Nf = K({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = Pt(Nf), Tf = K({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Mf = Pt(Tf), jf = K({}, Qn, { data: 0 }), na = Pt(jf), bf = {
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
  var Af = K({}, Lr, { key: function(e) {
    if (e.key) {
      var t = bf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xo, charCode: function(e) {
    return e.type === "keypress" ? Oi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ff = Pt(Af), Bf = K({}, Ci, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ra = Pt(Bf), qf = K({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xo }), Uf = Pt(qf), Vf = K({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = Pt(Vf), Gf = K({}, Ci, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yf = Pt(Gf), Xf = [9, 13, 27, 32], Qo = V && "CompositionEvent" in window, Mr = null;
  V && "documentMode" in document && (Mr = document.documentMode);
  var Qf = V && "TextEvent" in window && !Mr, ia = V && (!Qo || Mr && 8 < Mr && 11 >= Mr), oa = " ", la = !1;
  function sa(e, t) {
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
  function aa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Kn = !1;
  function Kf(e, t) {
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
  function Zf(e, t) {
    if (Kn) return e === "compositionend" || !Qo && sa(e, t) ? (e = Js(), zi = Uo = mn = null, Kn = !1, e) : null;
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
  var Jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ua(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jf[e.type] : t === "textarea";
  }
  function ca(e, t, n, r) {
    _r(r), t = Mi(t, "onChange"), 0 < t.length && (n = new Vo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var jr = null, br = null;
  function ed(e) {
    Pa(e, 0);
  }
  function Di(e) {
    var t = nr(e);
    if (Te(t)) return e;
  }
  function td(e, t) {
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
    jr && (jr.detachEvent("onpropertychange", ha), br = jr = null);
  }
  function ha(e) {
    if (e.propertyName === "value" && Di(br)) {
      var t = [];
      ca(t, br, e, Nn(e)), Ms(ed, t);
    }
  }
  function nd(e, t, n) {
    e === "focusin" ? (pa(), jr = t, br = n, jr.attachEvent("onpropertychange", ha)) : e === "focusout" && pa();
  }
  function rd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Di(br);
  }
  function id(e, t) {
    if (e === "click") return Di(t);
  }
  function od(e, t) {
    if (e === "input" || e === "change") return Di(t);
  }
  function ld(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var At = typeof Object.is == "function" ? Object.is : ld;
  function Ir(e, t) {
    if (At(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!L.call(t, i) || !At(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ma(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ga(e, t) {
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
  function ya(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ya(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function va() {
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
    var t = va(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ya(n.ownerDocument.documentElement, n)) {
      if (r !== null && Jo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ga(n, o);
          var s = ga(
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
  var ad = V && "documentMode" in document && 11 >= document.documentMode, Zn = null, el = null, Hr = null, tl = !1;
  function wa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tl || Zn == null || Zn !== Ae(r) || (r = Zn, "selectionStart" in r && Jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hr && Ir(Hr, r) || (Hr = r, r = Mi(el, "onSelect"), 0 < r.length && (t = new Vo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Ni("Animation", "AnimationEnd"), animationiteration: Ni("Animation", "AnimationIteration"), animationstart: Ni("Animation", "AnimationStart"), transitionend: Ni("Transition", "TransitionEnd") }, nl = {}, Sa = {};
  V && (Sa = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Li(e) {
    if (nl[e]) return nl[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Sa) return nl[e] = t[n];
    return e;
  }
  var _a = Li("animationend"), xa = Li("animationiteration"), Ea = Li("animationstart"), ka = Li("transitionend"), Ra = /* @__PURE__ */ new Map(), za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gn(e, t) {
    Ra.set(e, t), N(t, [e]);
  }
  for (var rl = 0; rl < za.length; rl++) {
    var il = za[rl], ud = il.toLowerCase(), cd = il[0].toUpperCase() + il.slice(1);
    gn(ud, "on" + cd);
  }
  gn(_a, "onAnimationEnd"), gn(xa, "onAnimationIteration"), gn(Ea, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(ka, "onTransitionEnd"), H("onMouseEnter", ["mouseout", "mouseover"]), H("onMouseLeave", ["mouseout", "mouseover"]), H("onPointerEnter", ["pointerout", "pointerover"]), H("onPointerLeave", ["pointerout", "pointerover"]), N("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), N("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), N("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), N("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), N("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Oa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, uf(r, t, void 0, e), e.currentTarget = null;
  }
  function Pa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var m = r[s], w = m.instance, T = m.currentTarget;
          if (m = m.listener, w !== o && i.isPropagationStopped()) break e;
          Oa(i, m, T), o = w;
        }
        else for (s = 0; s < r.length; s++) {
          if (m = r[s], w = m.instance, T = m.currentTarget, m = m.listener, w !== o && i.isPropagationStopped()) break e;
          Oa(i, m, T), o = w;
        }
      }
    }
    if (gi) throw e = jo, gi = !1, jo = null, e;
  }
  function Ge(e, t) {
    var n = t[dl];
    n === void 0 && (n = t[dl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ca(t, e, 2, !1), n.add(r));
  }
  function ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Ca(n, e, r, t);
  }
  var Ti = "_reactListening" + Math.random().toString(36).slice(2);
  function Ar(e) {
    if (!e[Ti]) {
      e[Ti] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (fd.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ti] || (t[Ti] = !0, ol("selectionchange", !1, t));
    }
  }
  function Ca(e, t, n, r) {
    switch (Zs(t)) {
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
      var s = r.tag;
      if (s === 3 || s === 4) {
        var m = r.stateNode.containerInfo;
        if (m === i || m.nodeType === 8 && m.parentNode === i) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var w = s.tag;
          if ((w === 3 || w === 4) && (w = s.stateNode.containerInfo, w === i || w.nodeType === 8 && w.parentNode === i)) return;
          s = s.return;
        }
        for (; m !== null; ) {
          if (s = Mn(m), s === null) return;
          if (w = s.tag, w === 5 || w === 6) {
            r = o = s;
            continue e;
          }
          m = m.parentNode;
        }
      }
      r = r.return;
    }
    Ms(function() {
      var T = o, X = Nn(n), Z = [];
      e: {
        var G = Ra.get(e);
        if (G !== void 0) {
          var fe = Vo, pe = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Ff;
              break;
            case "focusin":
              pe = "focus", fe = Yo;
              break;
            case "focusout":
              pe = "blur", fe = Yo;
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
              fe = ta;
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
            case _a:
            case xa:
            case Ea:
              fe = Lf;
              break;
            case ka:
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
              fe = ra;
          }
          var he = (t & 4) !== 0, rt = !he && e === "scroll", O = he ? G !== null ? G + "Capture" : null : G;
          he = [];
          for (var x = T, D; x !== null; ) {
            D = x;
            var re = D.stateNode;
            if (D.tag === 5 && re !== null && (D = re, O !== null && (re = xr(x, O), re != null && he.push(Fr(x, re, D)))), rt) break;
            x = x.return;
          }
          0 < he.length && (G = new fe(G, pe, null, n, X), Z.push({ event: G, listeners: he }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", fe = e === "mouseout" || e === "pointerout", G && n !== $t && (pe = n.relatedTarget || n.fromElement) && (Mn(pe) || pe[Jt])) break e;
          if ((fe || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, fe ? (pe = n.relatedTarget || n.toElement, fe = T, pe = pe ? Mn(pe) : null, pe !== null && (rt = Tn(pe), pe !== rt || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (fe = null, pe = T), fe !== pe)) {
            if (he = ta, re = "onMouseLeave", O = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (he = ra, re = "onPointerLeave", O = "onPointerEnter", x = "pointer"), rt = fe == null ? G : nr(fe), D = pe == null ? G : nr(pe), G = new he(re, x + "leave", fe, n, X), G.target = rt, G.relatedTarget = D, re = null, Mn(X) === T && (he = new he(O, x + "enter", pe, n, X), he.target = D, he.relatedTarget = rt, re = he), rt = re, fe && pe) t: {
              for (he = fe, O = pe, x = 0, D = he; D; D = er(D)) x++;
              for (D = 0, re = O; re; re = er(re)) D++;
              for (; 0 < x - D; ) he = er(he), x--;
              for (; 0 < D - x; ) O = er(O), D--;
              for (; x--; ) {
                if (he === O || O !== null && he === O.alternate) break t;
                he = er(he), O = er(O);
              }
              he = null;
            }
            else he = null;
            fe !== null && Da(Z, G, fe, he, !1), pe !== null && rt !== null && Da(Z, rt, pe, he, !0);
          }
        }
        e: {
          if (G = T ? nr(T) : window, fe = G.nodeName && G.nodeName.toLowerCase(), fe === "select" || fe === "input" && G.type === "file") var ye = td;
          else if (ua(G)) if (fa) ye = od;
          else {
            ye = rd;
            var Se = nd;
          }
          else (fe = G.nodeName) && fe.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (ye = id);
          if (ye && (ye = ye(e, T))) {
            ca(Z, ye, n, X);
            break e;
          }
          Se && Se(e, G, T), e === "focusout" && (Se = G._wrapperState) && Se.controlled && G.type === "number" && B(G, "number", G.value);
        }
        switch (Se = T ? nr(T) : window, e) {
          case "focusin":
            (ua(Se) || Se.contentEditable === "true") && (Zn = Se, el = T, Hr = null);
            break;
          case "focusout":
            Hr = el = Zn = null;
            break;
          case "mousedown":
            tl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tl = !1, wa(Z, n, X);
            break;
          case "selectionchange":
            if (ad) break;
          case "keydown":
          case "keyup":
            wa(Z, n, X);
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
        else Kn ? sa(e, n) && (ze = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ze = "onCompositionStart");
        ze && (ia && n.locale !== "ko" && (Kn || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Kn && (_e = Js()) : (mn = X, Uo = "value" in mn ? mn.value : mn.textContent, Kn = !0)), Se = Mi(T, ze), 0 < Se.length && (ze = new na(ze, e, null, n, X), Z.push({ event: ze, listeners: Se }), _e ? ze.data = _e : (_e = aa(n), _e !== null && (ze.data = _e)))), (_e = Qf ? Kf(e, n) : Zf(e, n)) && (T = Mi(T, "onBeforeInput"), 0 < T.length && (X = new na("onBeforeInput", "beforeinput", null, n, X), Z.push({ event: X, listeners: T }), X.data = _e));
      }
      Pa(Z, t);
    });
  }
  function Fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = xr(e, n), o != null && r.unshift(Fr(e, o, i)), o = xr(e, t), o != null && r.push(Fr(e, o, i))), e = e.return;
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
  function Da(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var m = n, w = m.alternate, T = m.stateNode;
      if (w !== null && w === r) break;
      m.tag === 5 && T !== null && (m = T, i ? (w = xr(n, o), w != null && s.unshift(Fr(n, w, m))) : i || (w = xr(n, o), w != null && s.push(Fr(n, w, m)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var dd = /\r\n?/g, pd = /\u0000|\uFFFD/g;
  function Na(e) {
    return (typeof e == "string" ? e : "" + e).replace(dd, `
`).replace(pd, "");
  }
  function ji(e, t, n) {
    if (t = Na(t), Na(e) !== t && n) throw Error(l(425));
  }
  function bi() {
  }
  var sl = null, al = null;
  function ul(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, hd = typeof clearTimeout == "function" ? clearTimeout : void 0, La = typeof Promise == "function" ? Promise : void 0, md = typeof queueMicrotask == "function" ? queueMicrotask : typeof La < "u" ? function(e) {
    return La.resolve(null).then(e).catch(gd);
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
          e.removeChild(i), Nr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Nr(t);
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
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Br = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, dl = "__reactEvents$" + tr, yd = "__reactListeners$" + tr, vd = "__reactHandles$" + tr;
  function Mn(e) {
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
  function qr(e) {
    return e = e[Yt] || e[Jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ii(e) {
    return e[Br] || null;
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
  var wn = {}, mt = vn(wn), _t = vn(!1), jn = wn;
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
  function Hi() {
    Ye(_t), Ye(mt);
  }
  function Ma(e, t, n) {
    if (mt.current !== wn) throw Error(l(168));
    $e(mt, t), $e(_t, n);
  }
  function ja(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(l(108, Ie(e) || "Unknown", i));
    return K({}, n, r);
  }
  function Wi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, jn = mt.current, $e(mt, e), $e(_t, _t.current), !0;
  }
  function ba(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = ja(e, t, jn), r.__reactInternalMemoizedMergedChildContext = e, Ye(_t), Ye(mt), $e(mt, e)) : Ye(_t), $e(_t, n);
  }
  var en = null, Ai = !1, hl = !1;
  function Ia(e) {
    en === null ? en = [e] : en.push(e);
  }
  function wd(e) {
    Ai = !0, Ia(e);
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
        en = null, Ai = !1;
      } catch (i) {
        throw en !== null && (en = en.slice(e + 1)), Ws(bo, Sn), i;
      } finally {
        Be = t, hl = !1;
      }
    }
    return null;
  }
  var or = [], lr = 0, Fi = null, Bi = 0, Lt = [], Tt = 0, bn = null, tn = 1, nn = "";
  function In(e, t) {
    or[lr++] = Bi, or[lr++] = Fi, Fi = e, Bi = t;
  }
  function Ha(e, t, n) {
    Lt[Tt++] = tn, Lt[Tt++] = nn, Lt[Tt++] = bn, bn = e;
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
  function ml(e) {
    e.return !== null && (In(e, 1), Ha(e, 1, 0));
  }
  function gl(e) {
    for (; e === Fi; ) Fi = or[--lr], or[lr] = null, Bi = or[--lr], or[lr] = null;
    for (; e === bn; ) bn = Lt[--Tt], Lt[Tt] = null, nn = Lt[--Tt], Lt[Tt] = null, tn = Lt[--Tt], Lt[Tt] = null;
  }
  var Ct = null, Dt = null, Ke = !1, Ft = null;
  function Wa(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Aa(e, t) {
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
        if (!Aa(e, t)) {
          if (yl(e)) throw Error(l(418));
          t = yn(n.nextSibling);
          var r = Ct;
          t && Aa(e, t) ? Wa(r, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, Ct = e);
        }
      } else {
        if (yl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ke = !1, Ct = e;
      }
    }
  }
  function Fa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ct = e;
  }
  function qi(e) {
    if (e !== Ct) return !1;
    if (!Ke) return Fa(e), Ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps)), t && (t = Dt)) {
      if (yl(e)) throw Ba(), Error(l(418));
      for (; t; ) Wa(e, t), t = yn(t.nextSibling);
    }
    if (Fa(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
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
  function Ba() {
    for (var e = Dt; e; ) e = yn(e.nextSibling);
  }
  function sr() {
    Dt = Ct = null, Ke = !1;
  }
  function wl(e) {
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
          var m = i.refs;
          s === null ? delete m[o] : m[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Ui(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ua(e) {
    function t(O, x) {
      if (e) {
        var D = O.deletions;
        D === null ? (O.deletions = [x], O.flags |= 16) : D.push(x);
      }
    }
    function n(O, x) {
      if (!e) return null;
      for (; x !== null; ) t(O, x), x = x.sibling;
      return null;
    }
    function r(O, x) {
      for (O = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? O.set(x.key, x) : O.set(x.index, x), x = x.sibling;
      return O;
    }
    function i(O, x) {
      return O = Pn(O, x), O.index = 0, O.sibling = null, O;
    }
    function o(O, x, D) {
      return O.index = D, e ? (D = O.alternate, D !== null ? (D = D.index, D < x ? (O.flags |= 2, x) : D) : (O.flags |= 2, x)) : (O.flags |= 1048576, x);
    }
    function s(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function m(O, x, D, re) {
      return x === null || x.tag !== 6 ? (x = cs(D, O.mode, re), x.return = O, x) : (x = i(x, D), x.return = O, x);
    }
    function w(O, x, D, re) {
      var ye = D.type;
      return ye === k ? X(O, x, D.props.children, re, D.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ne && qa(ye) === x.type) ? (re = i(x, D.props), re.ref = Ur(O, x, D), re.return = O, re) : (re = mo(D.type, D.key, D.props, null, O.mode, re), re.ref = Ur(O, x, D), re.return = O, re);
    }
    function T(O, x, D, re) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== D.containerInfo || x.stateNode.implementation !== D.implementation ? (x = fs(D, O.mode, re), x.return = O, x) : (x = i(x, D.children || []), x.return = O, x);
    }
    function X(O, x, D, re, ye) {
      return x === null || x.tag !== 7 ? (x = Vn(D, O.mode, re, ye), x.return = O, x) : (x = i(x, D), x.return = O, x);
    }
    function Z(O, x, D) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = cs("" + x, O.mode, D), x.return = O, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case p:
            return D = mo(x.type, x.key, x.props, null, O.mode, D), D.ref = Ur(O, null, x), D.return = O, D;
          case y:
            return x = fs(x, O.mode, D), x.return = O, x;
          case ne:
            var re = x._init;
            return Z(O, re(x._payload), D);
        }
        if (le(x) || ie(x)) return x = Vn(x, O.mode, D, null), x.return = O, x;
        Ui(O, x);
      }
      return null;
    }
    function G(O, x, D, re) {
      var ye = x !== null ? x.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ye !== null ? null : m(O, x, "" + D, re);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case p:
            return D.key === ye ? w(O, x, D, re) : null;
          case y:
            return D.key === ye ? T(O, x, D, re) : null;
          case ne:
            return ye = D._init, G(
              O,
              x,
              ye(D._payload),
              re
            );
        }
        if (le(D) || ie(D)) return ye !== null ? null : X(O, x, D, re, null);
        Ui(O, D);
      }
      return null;
    }
    function fe(O, x, D, re, ye) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return O = O.get(D) || null, m(x, O, "" + re, ye);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case p:
            return O = O.get(re.key === null ? D : re.key) || null, w(x, O, re, ye);
          case y:
            return O = O.get(re.key === null ? D : re.key) || null, T(x, O, re, ye);
          case ne:
            var Se = re._init;
            return fe(O, x, D, Se(re._payload), ye);
        }
        if (le(re) || ie(re)) return O = O.get(D) || null, X(x, O, re, ye, null);
        Ui(x, re);
      }
      return null;
    }
    function pe(O, x, D, re) {
      for (var ye = null, Se = null, _e = x, ze = x = 0, ct = null; _e !== null && ze < D.length; ze++) {
        _e.index > ze ? (ct = _e, _e = null) : ct = _e.sibling;
        var We = G(O, _e, D[ze], re);
        if (We === null) {
          _e === null && (_e = ct);
          break;
        }
        e && _e && We.alternate === null && t(O, _e), x = o(We, x, ze), Se === null ? ye = We : Se.sibling = We, Se = We, _e = ct;
      }
      if (ze === D.length) return n(O, _e), Ke && In(O, ze), ye;
      if (_e === null) {
        for (; ze < D.length; ze++) _e = Z(O, D[ze], re), _e !== null && (x = o(_e, x, ze), Se === null ? ye = _e : Se.sibling = _e, Se = _e);
        return Ke && In(O, ze), ye;
      }
      for (_e = r(O, _e); ze < D.length; ze++) ct = fe(_e, O, ze, D[ze], re), ct !== null && (e && ct.alternate !== null && _e.delete(ct.key === null ? ze : ct.key), x = o(ct, x, ze), Se === null ? ye = ct : Se.sibling = ct, Se = ct);
      return e && _e.forEach(function(Cn) {
        return t(O, Cn);
      }), Ke && In(O, ze), ye;
    }
    function he(O, x, D, re) {
      var ye = ie(D);
      if (typeof ye != "function") throw Error(l(150));
      if (D = ye.call(D), D == null) throw Error(l(151));
      for (var Se = ye = null, _e = x, ze = x = 0, ct = null, We = D.next(); _e !== null && !We.done; ze++, We = D.next()) {
        _e.index > ze ? (ct = _e, _e = null) : ct = _e.sibling;
        var Cn = G(O, _e, We.value, re);
        if (Cn === null) {
          _e === null && (_e = ct);
          break;
        }
        e && _e && Cn.alternate === null && t(O, _e), x = o(Cn, x, ze), Se === null ? ye = Cn : Se.sibling = Cn, Se = Cn, _e = ct;
      }
      if (We.done) return n(
        O,
        _e
      ), Ke && In(O, ze), ye;
      if (_e === null) {
        for (; !We.done; ze++, We = D.next()) We = Z(O, We.value, re), We !== null && (x = o(We, x, ze), Se === null ? ye = We : Se.sibling = We, Se = We);
        return Ke && In(O, ze), ye;
      }
      for (_e = r(O, _e); !We.done; ze++, We = D.next()) We = fe(_e, O, ze, We.value, re), We !== null && (e && We.alternate !== null && _e.delete(We.key === null ? ze : We.key), x = o(We, x, ze), Se === null ? ye = We : Se.sibling = We, Se = We);
      return e && _e.forEach(function(Jd) {
        return t(O, Jd);
      }), Ke && In(O, ze), ye;
    }
    function rt(O, x, D, re) {
      if (typeof D == "object" && D !== null && D.type === k && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case p:
            e: {
              for (var ye = D.key, Se = x; Se !== null; ) {
                if (Se.key === ye) {
                  if (ye = D.type, ye === k) {
                    if (Se.tag === 7) {
                      n(O, Se.sibling), x = i(Se, D.props.children), x.return = O, O = x;
                      break e;
                    }
                  } else if (Se.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ne && qa(ye) === Se.type) {
                    n(O, Se.sibling), x = i(Se, D.props), x.ref = Ur(O, Se, D), x.return = O, O = x;
                    break e;
                  }
                  n(O, Se);
                  break;
                } else t(O, Se);
                Se = Se.sibling;
              }
              D.type === k ? (x = Vn(D.props.children, O.mode, re, D.key), x.return = O, O = x) : (re = mo(D.type, D.key, D.props, null, O.mode, re), re.ref = Ur(O, x, D), re.return = O, O = re);
            }
            return s(O);
          case y:
            e: {
              for (Se = D.key; x !== null; ) {
                if (x.key === Se) if (x.tag === 4 && x.stateNode.containerInfo === D.containerInfo && x.stateNode.implementation === D.implementation) {
                  n(O, x.sibling), x = i(x, D.children || []), x.return = O, O = x;
                  break e;
                } else {
                  n(O, x);
                  break;
                }
                else t(O, x);
                x = x.sibling;
              }
              x = fs(D, O.mode, re), x.return = O, O = x;
            }
            return s(O);
          case ne:
            return Se = D._init, rt(O, x, Se(D._payload), re);
        }
        if (le(D)) return pe(O, x, D, re);
        if (ie(D)) return he(O, x, D, re);
        Ui(O, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, x !== null && x.tag === 6 ? (n(O, x.sibling), x = i(x, D), x.return = O, O = x) : (n(O, x), x = cs(D, O.mode, re), x.return = O, O = x), s(O)) : n(O, x);
    }
    return rt;
  }
  var ar = Ua(!0), Va = Ua(!1), Vi = vn(null), $i = null, ur = null, Sl = null;
  function _l() {
    Sl = ur = $i = null;
  }
  function xl(e) {
    var t = Vi.current;
    Ye(Vi), e._currentValue = t;
  }
  function El(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    $i = e, Sl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Et = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (Sl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if ($i === null) throw Error(l(308));
      ur = e, $i.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var Hn = null;
  function kl(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function $a(e, t, n, r) {
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
  function Ga(e, t) {
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
  function Gi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wo(e, n);
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
    _n = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var w = m, T = w.next;
      w.next = null, s === null ? o = T : s.next = T, s = w;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, m = X.lastBaseUpdate, m !== s && (m === null ? X.firstBaseUpdate = T : m.next = T, X.lastBaseUpdate = w));
    }
    if (o !== null) {
      var Z = i.baseState;
      s = 0, X = T = w = null, m = o;
      do {
        var G = m.lane, fe = m.eventTime;
        if ((r & G) === G) {
          X !== null && (X = X.next = {
            eventTime: fe,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var pe = e, he = m;
            switch (G = t, fe = n, he.tag) {
              case 1:
                if (pe = he.payload, typeof pe == "function") {
                  Z = pe.call(fe, Z, G);
                  break e;
                }
                Z = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = he.payload, G = typeof pe == "function" ? pe.call(fe, Z, G) : pe, G == null) break e;
                Z = K({}, Z, G);
                break e;
              case 2:
                _n = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, G = i.effects, G === null ? i.effects = [m] : G.push(m));
        } else fe = { eventTime: fe, lane: G, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, X === null ? (T = X = fe, w = Z) : X = X.next = fe, s |= G;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null) break;
          G = m, m = G.next, G.next = null, i.lastBaseUpdate = G, i.shared.pending = null;
        }
      } while (!0);
      if (X === null && (w = Z), i.baseState = w, i.firstBaseUpdate = T, i.lastBaseUpdate = X, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      Fn |= s, e.lanes = s, e.memoizedState = Z;
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
  var Vr = {}, Xt = vn(Vr), $r = vn(Vr), Gr = vn(Vr);
  function Wn(e) {
    if (e === Vr) throw Error(l(174));
    return e;
  }
  function zl(e, t) {
    switch ($e(Gr, t), $e($r, e), $e(Xt, Vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : st(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = st(t, e);
    }
    Ye(Xt), $e(Xt, t);
  }
  function fr() {
    Ye(Xt), Ye($r), Ye(Gr);
  }
  function Qa(e) {
    Wn(Gr.current);
    var t = Wn(Xt.current), n = st(t, e.type);
    t !== n && ($e($r, e), $e(Xt, n));
  }
  function Ol(e) {
    $r.current === e && (Ye(Xt), Ye($r));
  }
  var Ze = vn(0);
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
  function Cl() {
    for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0;
  }
  var Qi = f.ReactCurrentDispatcher, Dl = f.ReactCurrentBatchConfig, An = 0, Je = null, ot = null, at = null, Ki = !1, Yr = !1, Xr = 0, _d = 0;
  function gt() {
    throw Error(l(321));
  }
  function Nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
    return !0;
  }
  function Ll(e, t, n, r, i, o) {
    if (An = o, Je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qi.current = e === null || e.memoizedState === null ? Rd : zd, e = n(r, i), Yr) {
      o = 0;
      do {
        if (Yr = !1, Xr = 0, 25 <= o) throw Error(l(301));
        o += 1, at = ot = null, t.updateQueue = null, Qi.current = Od, e = n(r, i);
      } while (Yr);
    }
    if (Qi.current = eo, t = ot !== null && ot.next !== null, An = 0, at = ot = Je = null, Ki = !1, t) throw Error(l(300));
    return e;
  }
  function Tl() {
    var e = Xr !== 0;
    return Xr = 0, e;
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
      if (e === null) throw Error(l(310));
      ot = e, e = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, at === null ? Je.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function Qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ml(e) {
    var t = jt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = ot, i = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = o.next, o.next = s;
      }
      r.baseQueue = i = o, n.pending = null;
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var m = s = null, w = null, T = o;
      do {
        var X = T.lane;
        if ((An & X) === X) w !== null && (w = w.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), r = T.hasEagerState ? T.eagerState : e(r, T.action);
        else {
          var Z = {
            lane: X,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          w === null ? (m = w = Z, s = r) : w = w.next = Z, Je.lanes |= X, Fn |= X;
        }
        T = T.next;
      } while (T !== null && T !== o);
      w === null ? s = r : w.next = m, At(r, t.memoizedState) || (Et = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = w, n.lastRenderedState = r;
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
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        o = e(o, s.action), s = s.next;
      while (s !== i);
      At(o, t.memoizedState) || (Et = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Ka() {
  }
  function Za(e, t) {
    var n = Je, r = jt(), i = t(), o = !At(r.memoizedState, i);
    if (o && (r.memoizedState = i, Et = !0), r = r.queue, bl(tu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || at !== null && at.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kr(9, eu.bind(null, n, r, i, t), void 0, null), ut === null) throw Error(l(349));
      An & 30 || Ja(n, t, i);
    }
    return i;
  }
  function Ja(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !At(e, n);
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
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = kd.bind(null, Je, e), [t.memoizedState, e];
  }
  function Kr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ou() {
    return jt().memoizedState;
  }
  function Zi(e, t, n, r) {
    var i = Qt();
    Je.flags |= e, i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ji(e, t, n, r) {
    var i = jt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ot !== null) {
      var s = ot.memoizedState;
      if (o = s.destroy, r !== null && Nl(r, s.deps)) {
        i.memoizedState = Kr(t, n, o, r);
        return;
      }
    }
    Je.flags |= e, i.memoizedState = Kr(1 | t, n, o, r);
  }
  function lu(e, t) {
    return Zi(8390656, 8, e, t);
  }
  function bl(e, t) {
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
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function du(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function pu(e, t, n) {
    return An & 21 ? (At(n, t) || (n = qs(), Je.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Et = !0), e.memoizedState = n);
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
  function hu() {
    return jt().memoizedState;
  }
  function Ed(e, t, n) {
    var r = zn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mu(e)) gu(t, n);
    else if (n = $a(e, t, n, r), n !== null) {
      var i = St();
      Vt(n, e, r, i), yu(n, t, r);
    }
  }
  function kd(e, t, n) {
    var r = zn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mu(e)) gu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var s = t.lastRenderedState, m = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = m, At(m, s)) {
          var w = t.interleaved;
          w === null ? (i.next = i, kl(t)) : (i.next = w.next, w.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = $a(e, t, i, r), n !== null && (i = St(), Vt(n, e, r, i), yu(n, t, r));
    }
  }
  function mu(e) {
    var t = e.alternate;
    return e === Je || t !== null && t === Je;
  }
  function gu(e, t) {
    Yr = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function yu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wo(e, n);
    }
  }
  var eo = { readContext: Mt, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, Rd = { readContext: Mt, useCallback: function(e, t) {
    return Qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Mt, useEffect: lu, useImperativeHandle: function(e, t, n) {
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ed.bind(null, Je, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: iu, useDebugValue: Il, useDeferredValue: function(e) {
    return Qt().memoizedState = e;
  }, useTransition: function() {
    var e = iu(!1), t = e[0];
    return e = xd.bind(null, e[1]), Qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Je, i = Qt();
    if (Ke) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), ut === null) throw Error(l(349));
      An & 30 || Ja(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, lu(tu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Kr(9, eu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Qt(), t = ut.identifierPrefix;
    if (Ke) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = _d++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zd = {
    readContext: Mt,
    useCallback: fu,
    useContext: Mt,
    useEffect: bl,
    useImperativeHandle: cu,
    useInsertionEffect: su,
    useLayoutEffect: au,
    useMemo: du,
    useReducer: Ml,
    useRef: ou,
    useState: function() {
      return Ml(Qr);
    },
    useDebugValue: Il,
    useDeferredValue: function(e) {
      var t = jt();
      return pu(t, ot.memoizedState, e);
    },
    useTransition: function() {
      var e = Ml(Qr)[0], t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Za,
    useId: hu,
    unstable_isNewReconciler: !1
  }, Od = { readContext: Mt, useCallback: fu, useContext: Mt, useEffect: bl, useImperativeHandle: cu, useInsertionEffect: su, useLayoutEffect: au, useMemo: du, useReducer: jl, useRef: ou, useState: function() {
    return jl(Qr);
  }, useDebugValue: Il, useDeferredValue: function(e) {
    var t = jt();
    return ot === null ? t.memoizedState = e : pu(t, ot.memoizedState, e);
  }, useTransition: function() {
    var e = jl(Qr)[0], t = jt().memoizedState;
    return [e, t];
  }, useMutableSource: Ka, useSyncExternalStore: Za, useId: hu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Hl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var to = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = St(), i = zn(e), o = on(r, i);
    o.payload = t, n != null && (o.callback = n), t = xn(e, o, i), t !== null && (Vt(t, e, i, r), Gi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = St(), i = zn(e), o = on(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = xn(e, o, i), t !== null && (Vt(t, e, i, r), Gi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = St(), r = zn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = xn(e, i, r), t !== null && (Vt(t, e, r, n), Gi(t, e, r));
  } };
  function vu(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(i, o) : !0;
  }
  function wu(e, t, n) {
    var r = !1, i = wn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Mt(o) : (i = xt(t) ? jn : mt.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : wn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = to, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Su(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && to.enqueueReplaceState(t, t.state, null);
  }
  function Wl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Rl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Mt(o) : (o = xt(t) ? jn : mt.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Hl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && to.enqueueReplaceState(i, i.state, null), Yi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
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
  function _u(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ao || (ao = !0, ns = r), Fl(e, t);
    }, n;
  }
  function xu(e, t, n) {
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
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function Eu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Pd();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Bd.bind(null, e, t, n), t.then(e, e));
  }
  function ku(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ru(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, xn(n, t, 1))), n.lanes |= 1), e);
  }
  var Cd = f.ReactCurrentOwner, Et = !1;
  function wt(e, t, n, r) {
    t.child = e === null ? Va(t, null, n, r) : ar(t, e.child, n, r);
  }
  function zu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = Ll(e, t, n, r, o, i), n = Tl(), e !== null && !Et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ke && n && ml(t), t.flags |= 1, wt(e, t, r, i), t.child);
  }
  function Ou(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !us(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Pu(e, t, o, r, i)) : (e = mo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ir, n(s, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Pn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pu(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ir(o, r) && e.ref === t.ref) if (Et = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Et = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return Bl(e, t, n, r, i);
  }
  function Cu(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(hr, Nt), Nt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(hr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $e(hr, Nt), Nt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $e(hr, Nt), Nt |= r;
    return wt(e, t, i, n), t.child;
  }
  function Du(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, r, i) {
    var o = xt(n) ? jn : mt.current;
    return o = ir(t, o), cr(t, i), n = Ll(e, t, n, r, o, i), r = Tl(), e !== null && !Et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ke && r && ml(t), t.flags |= 1, wt(e, t, n, i), t.child);
  }
  function Nu(e, t, n, r, i) {
    if (xt(n)) {
      var o = !0;
      Wi(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) ro(e, t), wu(t, n, r), Wl(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, m = t.memoizedProps;
      s.props = m;
      var w = s.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = Mt(T) : (T = xt(n) ? jn : mt.current, T = ir(t, T));
      var X = n.getDerivedStateFromProps, Z = typeof X == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      Z || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== r || w !== T) && Su(t, s, r, T), _n = !1;
      var G = t.memoizedState;
      s.state = G, Yi(t, r, s, i), w = t.memoizedState, m !== r || G !== w || _t.current || _n ? (typeof X == "function" && (Hl(t, n, X, r), w = t.memoizedState), (m = _n || vu(t, n, m, r, G, w, T)) ? (Z || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = T, r = m) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Ga(e, t), m = t.memoizedProps, T = t.type === t.elementType ? m : Bt(t.type, m), s.props = T, Z = t.pendingProps, G = s.context, w = n.contextType, typeof w == "object" && w !== null ? w = Mt(w) : (w = xt(n) ? jn : mt.current, w = ir(t, w));
      var fe = n.getDerivedStateFromProps;
      (X = typeof fe == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== Z || G !== w) && Su(t, s, r, w), _n = !1, G = t.memoizedState, s.state = G, Yi(t, r, s, i);
      var pe = t.memoizedState;
      m !== Z || G !== pe || _t.current || _n ? (typeof fe == "function" && (Hl(t, n, fe, r), pe = t.memoizedState), (T = _n || vu(t, n, T, r, G, pe, w) || !1) ? (X || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, pe, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, pe, w)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = pe), s.props = r, s.state = pe, s.context = w, r = T) : (typeof s.componentDidUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ql(e, t, n, r, o, i);
  }
  function ql(e, t, n, r, i, o) {
    Du(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && ba(t, n, !1), ln(e, t, o);
    r = t.stateNode, Cd.current = t;
    var m = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, m, o)) : wt(e, t, m, o), t.memoizedState = r.state, i && ba(t, n, !0), t.child;
  }
  function Lu(e) {
    var t = e.stateNode;
    t.pendingContext ? Ma(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ma(e, t.context, !1), zl(e, t.containerInfo);
  }
  function Tu(e, t, n, r, i) {
    return sr(), wl(i), t.flags |= 256, wt(e, t, n, r), t.child;
  }
  var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mu(e, t, n) {
    var r = t.pendingProps, i = Ze.current, o = !1, s = (t.flags & 128) !== 0, m;
    if ((m = s) || (m = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), m ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), $e(Ze, i & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = go(s, r, 0, null), e = Vn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vl(n), t.memoizedState = Ul, e) : $l(t, s));
    if (i = e.memoizedState, i !== null && (m = i.dehydrated, m !== null)) return Dd(e, t, s, r, m, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, m = i.sibling;
      var w = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = Pn(i, w), r.subtreeFlags = i.subtreeFlags & 14680064), m !== null ? o = Pn(m, o) : (o = Vn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Vl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ul, r;
    }
    return o = e.child, e = o.sibling, r = Pn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function $l(e, t) {
    return t = go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function no(e, t, n, r) {
    return r !== null && wl(r), ar(t, e.child, null, n), e = $l(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Dd(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Al(Error(l(422))), no(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = go({ mode: "visible", children: r.children }, i, 0, null), o = Vn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Vl(s), t.memoizedState = Ul, o);
    if (!(t.mode & 1)) return no(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var m = r.dgst;
      return r = m, o = Error(l(419)), r = Al(o, r, void 0), no(e, t, s, r);
    }
    if (m = (s & e.childLanes) !== 0, Et || m) {
      if (r = ut, r !== null) {
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
      return as(), r = Al(Error(l(421))), no(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qd.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Dt = yn(i.nextSibling), Ct = t, Ke = !0, Ft = null, e !== null && (Lt[Tt++] = tn, Lt[Tt++] = nn, Lt[Tt++] = bn, tn = e.id, nn = e.overflow, bn = t), t = $l(t, r.children), t.flags |= 4096, t);
  }
  function ju(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), El(e.return, t, n);
  }
  function Gl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function bu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (wt(e, t, r.children, n), r = Ze.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ju(e, n, t);
        else if (e.tag === 19) ju(e, n, t);
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
    if ($e(Ze, r), !(t.mode & 1)) t.memoizedState = null;
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
  function Nd(e, t, n) {
    switch (t.tag) {
      case 3:
        Lu(t), sr();
        break;
      case 5:
        Qa(t);
        break;
      case 1:
        xt(t.type) && Wi(t);
        break;
      case 4:
        zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        $e(Vi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? ($e(Ze, Ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mu(e, t, n) : ($e(Ze, Ze.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
        $e(Ze, Ze.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return bu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $e(Ze, Ze.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Cu(e, t, n);
    }
    return ln(e, t, n);
  }
  var Iu, Yl, Hu, Wu;
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
  }, Hu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Wn(Xt.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ve(e, i), r = Ve(e, r), o = [];
          break;
        case "select":
          i = K({}, i, { value: void 0 }), r = K({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = ke(e, i), r = ke(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bi);
      }
      ft(n, r);
      var s;
      n = null;
      for (T in i) if (!r.hasOwnProperty(T) && i.hasOwnProperty(T) && i[T] != null) if (T === "style") {
        var m = i[T];
        for (s in m) m.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (R.hasOwnProperty(T) ? o || (o = []) : (o = o || []).push(T, null));
      for (T in r) {
        var w = r[T];
        if (m = i != null ? i[T] : void 0, r.hasOwnProperty(T) && w !== m && (w != null || m != null)) if (T === "style") if (m) {
          for (s in m) !m.hasOwnProperty(s) || w && w.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in w) w.hasOwnProperty(s) && m[s] !== w[s] && (n || (n = {}), n[s] = w[s]);
        } else n || (o || (o = []), o.push(
          T,
          n
        )), n = w;
        else T === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, m = m ? m.__html : void 0, w != null && m !== w && (o = o || []).push(T, w)) : T === "children" ? typeof w != "string" && typeof w != "number" || (o = o || []).push(T, "" + w) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (R.hasOwnProperty(T) ? (w != null && T === "onScroll" && Ge("scroll", e), o || m === w || (o = [])) : (o = o || []).push(T, w));
      }
      n && (o = o || []).push("style", n);
      var T = o;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Wu = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zr(e, t) {
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
  function yt(e) {
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
        return yt(t), null;
      case 1:
        return xt(t.type) && Hi(), yt(t), null;
      case 3:
        return r = t.stateNode, fr(), Ye(_t), Ye(mt), Cl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (os(Ft), Ft = null))), Yl(e, t), yt(t), null;
      case 5:
        Ol(t);
        var i = Wn(Gr.current);
        if (n = t.type, e !== null && t.stateNode != null) Hu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return yt(t), null;
          }
          if (e = Wn(Xt.current), qi(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Yt] = t, r[Br] = o, e = (t.mode & 1) !== 0, n) {
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
                tt(r, o), Ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ge("invalid", r);
                break;
              case "textarea":
                Pe(r, o), Ge("invalid", r);
            }
            ft(n, o), i = null;
            for (var s in o) if (o.hasOwnProperty(s)) {
              var m = o[s];
              s === "children" ? typeof m == "string" ? r.textContent !== m && (o.suppressHydrationWarning !== !0 && ji(r.textContent, m, e), i = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (o.suppressHydrationWarning !== !0 && ji(
                r.textContent,
                m,
                e
              ), i = ["children", "" + m]) : R.hasOwnProperty(s) && m != null && s === "onScroll" && Ge("scroll", r);
            }
            switch (n) {
              case "input":
                Ce(r), z(r, o, !0);
                break;
              case "textarea":
                Ce(r), qe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = bi);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Yt] = t, e[Br] = r, Iu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Ht(n, r), n) {
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
                  tt(e, r), i = Ve(e, r), Ge("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = K({}, r, { value: void 0 }), Ge("invalid", e);
                  break;
                case "textarea":
                  Pe(e, r), i = ke(e, r), Ge("invalid", e);
                  break;
                default:
                  i = r;
              }
              ft(n, i), m = i;
              for (o in m) if (m.hasOwnProperty(o)) {
                var w = m[o];
                o === "style" ? je(e, w) : o === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && C(e, w)) : o === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && I(e, w) : typeof w == "number" && I(e, "" + w) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (R.hasOwnProperty(o) ? w != null && o === "onScroll" && Ge("scroll", e) : w != null && h(e, o, w, s));
              }
              switch (n) {
                case "input":
                  Ce(e), z(e, r, !1);
                  break;
                case "textarea":
                  Ce(e), qe(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
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
                  typeof i.onClick == "function" && (e.onclick = bi);
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
        if (e && t.stateNode != null) Wu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = Wn(Gr.current), Wn(Xt.current), qi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = Ct, e !== null)) switch (e.tag) {
              case 3:
                ji(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ji(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return yt(t), null;
      case 13:
        if (Ye(Ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ke && Dt !== null && t.mode & 1 && !(t.flags & 128)) Ba(), sr(), t.flags |= 98560, o = !1;
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
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ze.current & 1 ? lt === 0 && (lt = 3) : as())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
      case 4:
        return fr(), Yl(e, t), e === null && Ar(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return xl(t.type._context), yt(t), null;
      case 17:
        return xt(t.type) && Hi(), yt(t), null;
      case 19:
        if (Ye(Ze), o = t.memoizedState, o === null) return yt(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Zr(o, !1);
        else {
          if (lt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (s = Xi(e), s !== null) {
              for (t.flags |= 128, Zr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return $e(Ze, Ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && nt() > mr && (t.flags |= 128, r = !0, Zr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Xi(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ke) return yt(t), null;
          } else 2 * nt() - o.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = nt(), t.sibling = null, n = Ze.current, $e(Ze, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return ss(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Nt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Td(e, t) {
    switch (gl(t), t.tag) {
      case 1:
        return xt(t.type) && Hi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fr(), Ye(_t), Ye(mt), Cl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ol(t), null;
      case 13:
        if (Ye(Ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
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
  var io = !1, vt = !1, Md = typeof WeakSet == "function" ? WeakSet : Set, de = null;
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
  var Au = !1;
  function jd(e, t) {
    if (sl = ki, e = va(), Jo(e)) {
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
          var s = 0, m = -1, w = -1, T = 0, X = 0, Z = e, G = null;
          t: for (; ; ) {
            for (var fe; Z !== n || i !== 0 && Z.nodeType !== 3 || (m = s + i), Z !== o || r !== 0 && Z.nodeType !== 3 || (w = s + r), Z.nodeType === 3 && (s += Z.nodeValue.length), (fe = Z.firstChild) !== null; )
              G = Z, Z = fe;
            for (; ; ) {
              if (Z === e) break t;
              if (G === n && ++T === i && (m = s), G === o && ++X === r && (w = s), (fe = Z.nextSibling) !== null) break;
              Z = G, G = Z.parentNode;
            }
            Z = fe;
          }
          n = m === -1 || w === -1 ? null : { start: m, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (al = { focusedElem: e, selectionRange: n }, ki = !1, de = t; de !== null; ) if (t = de, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, de = e;
    else for (; de !== null; ) {
      t = de;
      try {
        var pe = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (pe !== null) {
              var he = pe.memoizedProps, rt = pe.memoizedState, O = t.stateNode, x = O.getSnapshotBeforeUpdate(t.elementType === t.type ? he : Bt(t.type, he), rt);
              O.__reactInternalSnapshotBeforeUpdate = x;
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
      } catch (re) {
        et(t, t.return, re);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, de = e;
        break;
      }
      de = t.return;
    }
    return pe = Au, Au = !1, pe;
  }
  function Jr(e, t, n) {
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
    t !== null && (e.alternate = null, Fu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Br], delete t[dl], delete t[yd], delete t[vd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Bu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qu(e) {
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bi));
    else if (r !== 4 && (e = e.child, e !== null)) for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), e = e.sibling;
  }
  function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
  }
  var dt = null, qt = !1;
  function En(e, t, n) {
    for (n = n.child; n !== null; ) Uu(e, t, n), n = n.sibling;
  }
  function Uu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(vi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || pr(n, t);
      case 6:
        var r = dt, i = qt;
        dt = null, En(e, t, n), dt = r, qt = i, dt !== null && (qt ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
        break;
      case 18:
        dt !== null && (qt ? (e = dt, n = n.stateNode, e.nodeType === 8 ? fl(e.parentNode, n) : e.nodeType === 1 && fl(e, n), Nr(e)) : fl(dt, n.stateNode));
        break;
      case 4:
        r = dt, i = qt, dt = n.stateNode.containerInfo, qt = !0, En(e, t, n), dt = r, qt = i;
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
        En(e, t, n);
        break;
      case 1:
        if (!vt && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
        n.mode & 1 ? (vt = (r = vt) || n.memoizedState !== null, En(e, t, n), vt = r) : En(e, t, n);
        break;
      default:
        En(e, t, n);
    }
  }
  function Vu(e) {
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
        var o = e, s = t, m = s;
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
        if (dt === null) throw Error(l(160));
        Uu(o, s, i), dt = null, qt = !1;
        var w = i.alternate;
        w !== null && (w.return = null), i.return = null;
      } catch (T) {
        et(i, t, T);
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
        if (Ut(t, e), Kt(e), r & 4) {
          try {
            Jr(3, e, e.return), oo(3, e);
          } catch (he) {
            et(e, e.return, he);
          }
          try {
            Jr(5, e, e.return);
          } catch (he) {
            et(e, e.return, he);
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
            I(i, "");
          } catch (he) {
            et(e, e.return, he);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, m = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            m === "input" && o.type === "radio" && o.name != null && S(i, o), Ht(m, s);
            var T = Ht(m, o);
            for (s = 0; s < w.length; s += 2) {
              var X = w[s], Z = w[s + 1];
              X === "style" ? je(i, Z) : X === "dangerouslySetInnerHTML" ? C(i, Z) : X === "children" ? I(i, Z) : h(i, X, Z, T);
            }
            switch (m) {
              case "input":
                E(i, o);
                break;
              case "textarea":
                Ne(i, o);
                break;
              case "select":
                var G = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var fe = o.value;
                fe != null ? me(i, !!o.multiple, fe, !1) : G !== !!o.multiple && (o.defaultValue != null ? me(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : me(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Br] = o;
          } catch (he) {
            et(e, e.return, he);
          }
        }
        break;
      case 6:
        if (Ut(t, e), Kt(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (he) {
            et(e, e.return, he);
          }
        }
        break;
      case 3:
        if (Ut(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Nr(t.containerInfo);
        } catch (he) {
          et(e, e.return, he);
        }
        break;
      case 4:
        Ut(t, e), Kt(e);
        break;
      case 13:
        Ut(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ts = nt())), r & 4 && Vu(e);
        break;
      case 22:
        if (X = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (T = vt) || X, Ut(t, e), vt = T) : Ut(t, e), Kt(e), r & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !X && e.mode & 1) for (de = e, X = e.child; X !== null; ) {
            for (Z = de = X; de !== null; ) {
              switch (G = de, fe = G.child, G.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, G, G.return);
                  break;
                case 1:
                  pr(G, G.return);
                  var pe = G.stateNode;
                  if (typeof pe.componentWillUnmount == "function") {
                    r = G, n = G.return;
                    try {
                      t = r, pe.props = t.memoizedProps, pe.state = t.memoizedState, pe.componentWillUnmount();
                    } catch (he) {
                      et(r, n, he);
                    }
                  }
                  break;
                case 5:
                  pr(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    Xu(Z);
                    continue;
                  }
              }
              fe !== null ? (fe.return = G, de = fe) : Xu(Z);
            }
            X = X.sibling;
          }
          e: for (X = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (X === null) {
                X = Z;
                try {
                  i = Z.stateNode, T ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (m = Z.stateNode, w = Z.memoizedProps.style, s = w != null && w.hasOwnProperty("display") ? w.display : null, m.style.display = Me("display", s));
                } catch (he) {
                  et(e, e.return, he);
                }
              }
            } else if (Z.tag === 6) {
              if (X === null) try {
                Z.stateNode.nodeValue = T ? "" : Z.memoizedProps;
              } catch (he) {
                et(e, e.return, he);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === e) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === e) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === e) break e;
              X === Z && (X = null), Z = Z.return;
            }
            X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        Ut(t, e), Kt(e), r & 4 && Vu(e);
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
            r.flags & 32 && (I(i, ""), r.flags &= -33);
            var o = qu(e);
            Zl(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, m = qu(e);
            Kl(e, m, s);
            break;
          default:
            throw Error(l(161));
        }
      } catch (w) {
        et(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bd(e, t, n) {
    de = e, Gu(e);
  }
  function Gu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; de !== null; ) {
      var i = de, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || io;
        if (!s) {
          var m = i.alternate, w = m !== null && m.memoizedState !== null || vt;
          m = io;
          var T = vt;
          if (io = s, (vt = w) && !T) for (de = i; de !== null; ) s = de, w = s.child, s.tag === 22 && s.memoizedState !== null ? Qu(i) : w !== null ? (w.return = s, de = w) : Qu(i);
          for (; o !== null; ) de = o, Gu(o), o = o.sibling;
          de = i, io = m, vt = T;
        }
        Yu(e);
      } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, de = o) : Yu(e);
    }
  }
  function Yu(e) {
    for (; de !== null; ) {
      var t = de;
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
                var T = t.alternate;
                if (T !== null) {
                  var X = T.memoizedState;
                  if (X !== null) {
                    var Z = X.dehydrated;
                    Z !== null && Nr(Z);
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
          et(t, t.return, G);
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
  function Xu(e) {
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
  function Qu(e) {
    for (; de !== null; ) {
      var t = de;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              oo(4, t);
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
            var s = t.return;
            try {
              Ql(t);
            } catch (w) {
              et(t, s, w);
            }
        }
      } catch (w) {
        et(t, t.return, w);
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
  var Id = Math.ceil, lo = f.ReactCurrentDispatcher, Jl = f.ReactCurrentOwner, bt = f.ReactCurrentBatchConfig, He = 0, ut = null, it = null, pt = 0, Nt = 0, hr = vn(0), lt = 0, ei = null, Fn = 0, so = 0, es = 0, ti = null, kt = null, ts = 0, mr = 1 / 0, sn = null, ao = !1, ns = null, kn = null, uo = !1, Rn = null, co = 0, ni = 0, rs = null, fo = -1, po = 0;
  function St() {
    return He & 6 ? nt() : fo !== -1 ? fo : fo = nt();
  }
  function zn(e) {
    return e.mode & 1 ? He & 2 && pt !== 0 ? pt & -pt : Sd.transition !== null ? (po === 0 && (po = qs()), po) : (e = Be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zs(e.type)), e) : 1;
  }
  function Vt(e, t, n, r) {
    if (50 < ni) throw ni = 0, rs = null, Error(l(185));
    zr(e, n, r), (!(He & 2) || e !== ut) && (e === ut && (!(He & 2) && (so |= n), lt === 4 && On(e, pt)), Rt(e, r), n === 1 && He === 0 && !(t.mode & 1) && (mr = nt() + 500, Ai && Sn()));
  }
  function Rt(e, t) {
    var n = e.callbackNode;
    Sf(e, t);
    var r = _i(e, e === ut ? pt : 0);
    if (r === 0) n !== null && As(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && As(n), t === 1) e.tag === 0 ? wd(Zu.bind(null, e)) : Ia(Zu.bind(null, e)), md(function() {
        !(He & 6) && Sn();
      }), n = null;
      else {
        switch (Us(r)) {
          case 1:
            n = bo;
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
    if (fo = -1, po = 0, He & 6) throw Error(l(327));
    var n = e.callbackNode;
    if (gr() && e.callbackNode !== n) return null;
    var r = _i(e, e === ut ? pt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ho(e, r);
    else {
      t = r;
      var i = He;
      He |= 2;
      var o = ec();
      (ut !== e || pt !== t) && (sn = null, mr = nt() + 500, qn(e, t));
      do
        try {
          Ad();
          break;
        } catch (m) {
          Ju(e, m);
        }
      while (!0);
      _l(), lo.current = o, He = i, it !== null ? t = 0 : (ut = null, pt = 0, t = lt);
    }
    if (t !== 0) {
      if (t === 2 && (i = Io(e), i !== 0 && (r = i, t = is(e, i))), t === 1) throw n = ei, qn(e, 0), On(e, r), Rt(e, nt()), n;
      if (t === 6) On(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Hd(i) && (t = ho(e, r), t === 2 && (o = Io(e), o !== 0 && (r = o, t = is(e, o))), t === 1)) throw n = ei, qn(e, 0), On(e, r), Rt(e, nt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Un(e, kt, sn);
            break;
          case 3:
            if (On(e, r), (r & 130023424) === r && (t = ts + 500 - nt(), 10 < t)) {
              if (_i(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                St(), e.pingedLanes |= e.suspendedLanes & i;
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
              var s = 31 - Wt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
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
            throw Error(l(329));
        }
      }
    }
    return Rt(e, nt()), e.callbackNode === n ? Ku.bind(null, e) : null;
  }
  function is(e, t) {
    var n = ti;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = ho(e, t), e !== 2 && (t = kt, kt = n, t !== null && os(t)), e;
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
    for (t &= ~es, t &= ~so, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Zu(e) {
    if (He & 6) throw Error(l(327));
    gr();
    var t = _i(e, 0);
    if (!(t & 1)) return Rt(e, nt()), null;
    var n = ho(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Io(e);
      r !== 0 && (t = r, n = is(e, r));
    }
    if (n === 1) throw n = ei, qn(e, 0), On(e, t), Rt(e, nt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, kt, sn), Rt(e, nt()), null;
  }
  function ls(e, t) {
    var n = He;
    He |= 1;
    try {
      return e(t);
    } finally {
      He = n, He === 0 && (mr = nt() + 500, Ai && Sn());
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
          r = r.type.childContextTypes, r != null && Hi();
          break;
        case 3:
          fr(), Ye(_t), Ye(mt), Cl();
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
    if (ut = e, it = e = Pn(e.current, null), pt = Nt = t, lt = 0, ei = null, es = so = Fn = 0, kt = ti = null, Hn !== null) {
      for (t = 0; t < Hn.length; t++) if (n = Hn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var s = o.next;
          o.next = i, r.next = s;
        }
        n.pending = r;
      }
      Hn = null;
    }
    return e;
  }
  function Ju(e, t) {
    do {
      var n = it;
      try {
        if (_l(), Qi.current = eo, Ki) {
          for (var r = Je.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ki = !1;
        }
        if (An = 0, at = ot = Je = null, Yr = !1, Xr = 0, Jl.current = null, n === null || n.return === null) {
          lt = 1, ei = t, it = null;
          break;
        }
        e: {
          var o = e, s = n.return, m = n, w = t;
          if (t = pt, m.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var T = w, X = m, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var G = X.alternate;
              G ? (X.updateQueue = G.updateQueue, X.memoizedState = G.memoizedState, X.lanes = G.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var fe = ku(s);
            if (fe !== null) {
              fe.flags &= -257, Ru(fe, s, m, o, t), fe.mode & 1 && Eu(o, T, t), t = fe, w = T;
              var pe = t.updateQueue;
              if (pe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(w), t.updateQueue = he;
              } else pe.add(w);
              break e;
            } else {
              if (!(t & 1)) {
                Eu(o, T, t), as();
                break e;
              }
              w = Error(l(426));
            }
          } else if (Ke && m.mode & 1) {
            var rt = ku(s);
            if (rt !== null) {
              !(rt.flags & 65536) && (rt.flags |= 256), Ru(rt, s, m, o, t), wl(dr(w, m));
              break e;
            }
          }
          o = w = dr(w, m), lt !== 4 && (lt = 2), ti === null ? ti = [o] : ti.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var O = _u(o, w, t);
                Ya(o, O);
                break e;
              case 1:
                m = w;
                var x = o.type, D = o.stateNode;
                if (!(o.flags & 128) && (typeof x.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (kn === null || !kn.has(D)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var re = xu(o, m, t);
                  Ya(o, re);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        nc(n);
      } catch (ye) {
        t = ye, it === n && n !== null && (it = n = n.return);
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
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), ut === null || !(Fn & 268435455) && !(so & 268435455) || On(ut, pt);
  }
  function ho(e, t) {
    var n = He;
    He |= 2;
    var r = ec();
    (ut !== e || pt !== t) && (sn = null, qn(e, t));
    do
      try {
        Wd();
        break;
      } catch (i) {
        Ju(e, i);
      }
    while (!0);
    if (_l(), He = n, lo.current = r, it !== null) throw Error(l(261));
    return ut = null, pt = 0, lt;
  }
  function Wd() {
    for (; it !== null; ) tc(it);
  }
  function Ad() {
    for (; it !== null && !ff(); ) tc(it);
  }
  function tc(e) {
    var t = oc(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? nc(e) : it = t, Jl.current = null;
  }
  function nc(e) {
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
    if (He & 6) throw Error(l(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_f(e, o), e === ut && (it = ut = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || uo || (uo = !0, lc(yi, function() {
      return gr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = bt.transition, bt.transition = null;
      var s = Be;
      Be = 1;
      var m = He;
      He |= 4, Jl.current = null, jd(e, n), $u(n, e), sd(al), ki = !!sl, al = sl = null, e.current = n, bd(n), df(), He = m, Be = s, bt.transition = o;
    } else e.current = n;
    if (uo && (uo = !1, Rn = e, co = i), o = e.pendingLanes, o === 0 && (kn = null), mf(n.stateNode), Rt(e, nt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ao) throw ao = !1, e = ns, ns = null, e;
    return co & 1 && e.tag !== 0 && gr(), o = e.pendingLanes, o & 1 ? e === rs ? ni++ : (ni = 0, rs = e) : ni = 0, Sn(), null;
  }
  function gr() {
    if (Rn !== null) {
      var e = Us(co), t = bt.transition, n = Be;
      try {
        if (bt.transition = null, Be = 16 > e ? 16 : e, Rn === null) var r = !1;
        else {
          if (e = Rn, Rn = null, co = 0, He & 6) throw Error(l(331));
          var i = He;
          for (He |= 4, de = e.current; de !== null; ) {
            var o = de, s = o.child;
            if (de.flags & 16) {
              var m = o.deletions;
              if (m !== null) {
                for (var w = 0; w < m.length; w++) {
                  var T = m[w];
                  for (de = T; de !== null; ) {
                    var X = de;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, X, o);
                    }
                    var Z = X.child;
                    if (Z !== null) Z.return = X, de = Z;
                    else for (; de !== null; ) {
                      X = de;
                      var G = X.sibling, fe = X.return;
                      if (Fu(X), X === T) {
                        de = null;
                        break;
                      }
                      if (G !== null) {
                        G.return = fe, de = G;
                        break;
                      }
                      de = fe;
                    }
                  }
                }
                var pe = o.alternate;
                if (pe !== null) {
                  var he = pe.child;
                  if (he !== null) {
                    pe.child = null;
                    do {
                      var rt = he.sibling;
                      he.sibling = null, he = rt;
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
          var x = e.current;
          for (de = x; de !== null; ) {
            s = de;
            var D = s.child;
            if (s.subtreeFlags & 2064 && D !== null) D.return = s, de = D;
            else e: for (s = x; de !== null; ) {
              if (m = de, m.flags & 2048) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    oo(9, m);
                }
              } catch (ye) {
                et(m, m.return, ye);
              }
              if (m === s) {
                de = null;
                break e;
              }
              var re = m.sibling;
              if (re !== null) {
                re.return = m.return, de = re;
                break e;
              }
              de = m.return;
            }
          }
          if (He = i, Sn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(vi, e);
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
  function rc(e, t, n) {
    t = dr(n, t), t = _u(e, t, 1), e = xn(e, t, 1), t = St(), e !== null && (zr(e, 1, t), Rt(e, t));
  }
  function et(e, t, n) {
    if (e.tag === 3) rc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        rc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
          e = dr(n, e), e = xu(t, e, 1), t = xn(t, e, 1), e = St(), t !== null && (zr(t, 1, e), Rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Bd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = St(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (pt & n) === n && (lt === 4 || lt === 3 && (pt & 130023424) === pt && 500 > nt() - ts ? qn(e, 0) : es |= n), Rt(e, t);
  }
  function ic(e, t) {
    t === 0 && (e.mode & 1 ? (t = Si, Si <<= 1, !(Si & 130023424) && (Si = 4194304)) : t = 1);
    var n = St();
    e = rn(e, t), e !== null && (zr(e, t, n), Rt(e, n));
  }
  function qd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ic(e, n);
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
        throw Error(l(314));
    }
    r !== null && r.delete(t), ic(e, n);
  }
  var oc;
  oc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || _t.current) Et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Et = !1, Nd(e, t, n);
      Et = !!(e.flags & 131072);
    }
    else Et = !1, Ke && t.flags & 1048576 && Ha(t, Bi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ro(e, t), e = t.pendingProps;
        var i = ir(t, mt.current);
        cr(t, n), i = Ll(null, t, r, e, i, n);
        var o = Tl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (o = !0, Wi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Rl(t), i.updater = to, t.stateNode = i, i._reactInternals = t, Wl(t, r, e, n), t = ql(null, t, r, !0, o, n)) : (t.tag = 0, Ke && o && ml(t), wt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ro(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = $d(r), e = Bt(r, e), i) {
            case 0:
              t = Bl(null, t, r, e, n);
              break e;
            case 1:
              t = Nu(null, t, r, e, n);
              break e;
            case 11:
              t = zu(null, t, r, e, n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Nu(e, t, r, i, n);
      case 3:
        e: {
          if (Lu(t), e === null) throw Error(l(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Ga(e, t), Yi(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = dr(Error(l(423)), t), t = Tu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = dr(Error(l(424)), t), t = Tu(e, t, r, n, i);
            break e;
          } else for (Dt = yn(t.stateNode.containerInfo.firstChild), Ct = t, Ke = !0, Ft = null, n = Va(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sr(), r === i) {
              t = ln(e, t, n);
              break e;
            }
            wt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Qa(t), e === null && vl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ul(r, i) ? s = null : o !== null && ul(r, o) && (t.flags |= 32), Du(e, t), wt(e, t, s, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Mu(e, t, n);
      case 4:
        return zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : wt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), zu(e, t, r, i, n);
      case 7:
        return wt(e, t, t.pendingProps, n), t.child;
      case 8:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, $e(Vi, r._currentValue), r._currentValue = s, o !== null) if (At(o.value, s)) {
            if (o.children === i.children && !_t.current) {
              t = ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var m = o.dependencies;
            if (m !== null) {
              s = o.child;
              for (var w = m.firstContext; w !== null; ) {
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
                  o.lanes |= n, w = o.alternate, w !== null && (w.lanes |= n), El(
                    o.return,
                    n,
                    t
                  ), m.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (s = o.return, s === null) throw Error(l(341));
              s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), El(s, n, t), s = o.sibling;
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
          wt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, cr(t, n), i = Mt(i), r = r(i), t.flags |= 1, wt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), Ou(e, t, r, i, n);
      case 15:
        return Pu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), ro(e, t), t.tag = 1, xt(r) ? (e = !0, Wi(t)) : e = !1, cr(t, n), wu(t, r, i), Wl(t, r, i, n), ql(null, t, r, !0, e, n);
      case 19:
        return bu(e, t, n);
      case 22:
        return Cu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function lc(e, t) {
    return Ws(e, t);
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
      if (e = e.$$typeof, e === se) return 11;
      if (e === $) return 14;
    }
    return 2;
  }
  function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function mo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") us(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case k:
        return Vn(n.children, i, o, t);
      case j:
        s = 8, i |= 8;
        break;
      case A:
        return e = It(12, n, t, i | 2), e.elementType = A, e.lanes = o, e;
      case oe:
        return e = It(13, n, t, i), e.elementType = oe, e.lanes = o, e;
      case ge:
        return e = It(19, n, t, i), e.elementType = ge, e.lanes = o, e;
      case te:
        return go(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ee:
            s = 10;
            break e;
          case ae:
            s = 9;
            break e;
          case se:
            s = 11;
            break e;
          case $:
            s = 14;
            break e;
          case ne:
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
  function go(e, t, n, r) {
    return e = It(22, e, r, t), e.elementType = te, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
  function ds(e, t, n, r, i, o, s, m, w) {
    return e = new Gd(e, t, n, m, w), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = It(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(o), e;
  }
  function Yd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: y, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function sc(e) {
    if (!e) return wn;
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
            if (xt(t.type)) {
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
      if (xt(n)) return ja(e, n, t);
    }
    return t;
  }
  function ac(e, t, n, r, i, o, s, m, w) {
    return e = ds(n, r, !0, e, i, o, s, m, w), e.context = sc(null), n = e.current, r = St(), i = zn(n), o = on(r, i), o.callback = t ?? null, xn(n, o, i), e.current.lanes = i, zr(e, i, r), Rt(e, r), e;
  }
  function yo(e, t, n, r) {
    var i = t.current, o = St(), s = zn(i);
    return n = sc(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xn(i, t, s), e !== null && (Vt(e, i, s, o), Gi(e, i, s)), s;
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
  function Xd() {
    return null;
  }
  var cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function hs(e) {
    this._internalRoot = e;
  }
  wo.prototype.render = hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    yo(e, t, null, null);
  }, wo.prototype.unmount = hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        yo(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function wo(e) {
    this._internalRoot = e;
  }
  wo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Gs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Qs(e);
    }
  };
  function ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function So(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fc() {
  }
  function Qd(e, t, n, r, i) {
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
      var m = r;
      r = function() {
        var T = vo(w);
        m.call(T);
      };
    }
    var w = ds(e, 0, !1, null, null, !1, !1, "", fc);
    return e._reactRootContainer = w, e[Jt] = w.current, Ar(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      yo(t, w, n, r);
    }), w;
  }
  function _o(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var m = i;
        i = function() {
          var w = vo(s);
          m.call(w);
        };
      }
      yo(t, s, e, i);
    } else s = Qd(n, t, e, i, r);
    return vo(s);
  }
  Vs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Rr(t.pendingLanes);
          n !== 0 && (Wo(t, n | 1), Rt(t, nt()), !(He & 6) && (mr = nt() + 500, Sn()));
        }
        break;
      case 13:
        Bn(function() {
          var r = rn(e, 1);
          if (r !== null) {
            var i = St();
            Vt(r, e, 1, i);
          }
        }), ps(e, 1);
    }
  }, Ao = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = St();
        Vt(t, e, 134217728, n);
      }
      ps(e, 134217728);
    }
  }, $s = function(e) {
    if (e.tag === 13) {
      var t = zn(e), n = rn(e, t);
      if (n !== null) {
        var r = St();
        Vt(n, e, t, r);
      }
      ps(e, t);
    }
  }, Gs = function() {
    return Be;
  }, Ys = function(e, t) {
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
              var i = Ii(r);
              if (!i) throw Error(l(90));
              Te(r), E(r, i);
            }
          }
        }
        break;
      case "textarea":
        Ne(e, n);
        break;
      case "select":
        t = n.value, t != null && me(e, !!n.multiple, t, !1);
    }
  }, hi = ls, Ts = Bn;
  var Kd = { usingClientEntryPoint: !1, Events: [qr, nr, Ii, _r, Yn, ls] }, ri = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zd = { bundleType: ri.bundleType, version: ri.version, rendererPackageName: ri.rendererPackageName, rendererConfig: ri.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: f.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Is(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ri.findFiberByHostInstance || Xd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xo.isDisabled && xo.supportsFiber) try {
      vi = xo.inject(Zd), Gt = xo;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kd, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ms(t)) throw Error(l(200));
    return Yd(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!ms(e)) throw Error(l(299));
    var n = !1, r = "", i = cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ds(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new hs(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Is(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return Bn(e);
  }, zt.hydrate = function(e, t, n) {
    if (!So(t)) throw Error(l(200));
    return _o(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!ms(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = cc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ac(t, null, e, 1, n ?? null, i, !1, o, s), e[Jt] = t.current, Ar(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
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
var wc;
function Po() {
  if (wc) return vs.exports;
  wc = 1;
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
var Sc;
function sp() {
  if (Sc) return Eo;
  Sc = 1;
  var u = Po();
  return Eo.createRoot = u.createRoot, Eo.hydrateRoot = u.hydrateRoot, Eo;
}
var ap = sp();
const up = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;-webkit-user-select:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', cp = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", fp = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;right:16px;left:16px;top:auto;bottom:16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var ht = Ot(), _s = { exports: {} }, oi = {}, pi = { exports: {} }, dp = pi.exports, _c;
function Ds() {
  return _c || (_c = 1, function(u, c) {
    (function(l, d) {
      d(c);
    })(dp, function(l) {
      function d(Q) {
        return function(Re, Ce, Te, Ae, Ve, tt, S) {
          return Q(Re, Ce, S);
        };
      }
      function R(Q) {
        return function(Re, Ce, Te, Ae) {
          if (!Re || !Ce || typeof Re != "object" || typeof Ce != "object")
            return Q(Re, Ce, Te, Ae);
          var Ve = Ae.get(Re), tt = Ae.get(Ce);
          if (Ve && tt)
            return Ve === Ce && tt === Re;
          Ae.set(Re, Ce), Ae.set(Ce, Re);
          var S = Q(Re, Ce, Te, Ae);
          return Ae.delete(Re), Ae.delete(Ce), S;
        };
      }
      function N(Q, ce) {
        var Re = {};
        for (var Ce in Q)
          Re[Ce] = Q[Ce];
        for (var Ce in ce)
          Re[Ce] = ce[Ce];
        return Re;
      }
      function H(Q) {
        return Q.constructor === Object || Q.constructor == null;
      }
      function V(Q) {
        return typeof Q.then == "function";
      }
      function L(Q, ce) {
        return Q === ce || Q !== Q && ce !== ce;
      }
      var W = "[object Arguments]", Y = "[object Boolean]", q = "[object Date]", F = "[object RegExp]", xe = "[object Map]", we = "[object Number]", U = "[object Object]", P = "[object Set]", v = "[object String]", a = Object.prototype.toString;
      function h(Q) {
        var ce = Q.areArraysEqual, Re = Q.areDatesEqual, Ce = Q.areMapsEqual, Te = Q.areObjectsEqual, Ae = Q.areRegExpsEqual, Ve = Q.areSetsEqual, tt = Q.createIsNestedEqual, S = tt(E);
        function E(z, B, le) {
          if (z === B)
            return !0;
          if (!z || !B || typeof z != "object" || typeof B != "object")
            return z !== z && B !== B;
          if (H(z) && H(B))
            return Te(z, B, S, le);
          var me = Array.isArray(z), ke = Array.isArray(B);
          if (me || ke)
            return me === ke && ce(z, B, S, le);
          var Pe = a.call(z);
          return Pe !== a.call(B) ? !1 : Pe === q ? Re(z, B, S, le) : Pe === F ? Ae(z, B, S, le) : Pe === xe ? Ce(z, B, S, le) : Pe === P ? Ve(z, B, S, le) : Pe === U || Pe === W ? V(z) || V(B) ? !1 : Te(z, B, S, le) : Pe === Y || Pe === we || Pe === v ? L(z.valueOf(), B.valueOf()) : !1;
        }
        return E;
      }
      function f(Q, ce, Re, Ce) {
        var Te = Q.length;
        if (ce.length !== Te)
          return !1;
        for (; Te-- > 0; )
          if (!Re(Q[Te], ce[Te], Te, Te, Q, ce, Ce))
            return !1;
        return !0;
      }
      var p = R(f);
      function y(Q, ce) {
        return L(Q.valueOf(), ce.valueOf());
      }
      function k(Q, ce, Re, Ce) {
        var Te = Q.size === ce.size;
        if (!Te)
          return !1;
        if (!Q.size)
          return !0;
        var Ae = {}, Ve = 0;
        return Q.forEach(function(tt, S) {
          if (Te) {
            var E = !1, z = 0;
            ce.forEach(function(B, le) {
              !E && !Ae[z] && (E = Re(S, le, Ve, z, Q, ce, Ce) && Re(tt, B, S, le, Q, ce, Ce)) && (Ae[z] = !0), z++;
            }), Ve++, Te = E;
          }
        }), Te;
      }
      var j = R(k), A = "_owner", ee = Object.prototype.hasOwnProperty;
      function ae(Q, ce, Re, Ce) {
        var Te = Object.keys(Q), Ae = Te.length;
        if (Object.keys(ce).length !== Ae)
          return !1;
        for (var Ve; Ae-- > 0; ) {
          if (Ve = Te[Ae], Ve === A) {
            var tt = !!Q.$$typeof, S = !!ce.$$typeof;
            if ((tt || S) && tt !== S)
              return !1;
          }
          if (!ee.call(ce, Ve) || !Re(Q[Ve], ce[Ve], Ve, Ve, Q, ce, Ce))
            return !1;
        }
        return !0;
      }
      var se = R(ae);
      function oe(Q, ce) {
        return Q.source === ce.source && Q.flags === ce.flags;
      }
      function ge(Q, ce, Re, Ce) {
        var Te = Q.size === ce.size;
        if (!Te)
          return !1;
        if (!Q.size)
          return !0;
        var Ae = {};
        return Q.forEach(function(Ve, tt) {
          if (Te) {
            var S = !1, E = 0;
            ce.forEach(function(z, B) {
              !S && !Ae[E] && (S = Re(Ve, z, tt, B, Q, ce, Ce)) && (Ae[E] = !0), E++;
            }), Te = S;
          }
        }), Te;
      }
      var $ = R(ge), ne = Object.freeze({
        areArraysEqual: f,
        areDatesEqual: y,
        areMapsEqual: k,
        areObjectsEqual: ae,
        areRegExpsEqual: oe,
        areSetsEqual: ge,
        createIsNestedEqual: d
      }), te = Object.freeze({
        areArraysEqual: p,
        areDatesEqual: y,
        areMapsEqual: j,
        areObjectsEqual: se,
        areRegExpsEqual: oe,
        areSetsEqual: $,
        createIsNestedEqual: d
      }), b = h(ne);
      function ie(Q, ce) {
        return b(Q, ce, void 0);
      }
      var K = h(N(ne, { createIsNestedEqual: function() {
        return L;
      } }));
      function _(Q, ce) {
        return K(Q, ce, void 0);
      }
      var M = h(te);
      function ve(Q, ce) {
        return M(Q, ce, /* @__PURE__ */ new WeakMap());
      }
      var Ee = h(N(te, {
        createIsNestedEqual: function() {
          return L;
        }
      }));
      function Oe(Q, ce) {
        return Ee(Q, ce, /* @__PURE__ */ new WeakMap());
      }
      function De(Q) {
        return h(N(ne, Q(ne)));
      }
      function Ie(Q) {
        var ce = h(N(te, Q(te)));
        return function(Re, Ce, Te) {
          return Te === void 0 && (Te = /* @__PURE__ */ new WeakMap()), ce(Re, Ce, Te);
        };
      }
      l.circularDeepEqual = ve, l.circularShallowEqual = Oe, l.createCustomCircularEqual = Ie, l.createCustomEqual = De, l.deepEqual = ie, l.sameValueZeroEqual = L, l.shallowEqual = _, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(pi, pi.exports)), pi.exports;
}
var ko = { exports: {} }, xc;
function No() {
  if (xc) return ko.exports;
  xc = 1;
  function u(l) {
    var d, R, N = "";
    if (typeof l == "string" || typeof l == "number") N += l;
    else if (typeof l == "object") if (Array.isArray(l)) {
      var H = l.length;
      for (d = 0; d < H; d++) l[d] && (R = u(l[d])) && (N && (N += " "), N += R);
    } else for (R in l) l[R] && (N && (N += " "), N += R);
    return N;
  }
  function c() {
    for (var l, d, R = 0, N = "", H = arguments.length; R < H; R++) (l = arguments[R]) && (d = u(l)) && (N && (N += " "), N += d);
    return N;
  }
  return ko.exports = c, ko.exports.clsx = c, ko.exports;
}
var be = {}, xs, Ec;
function pp() {
  return Ec || (Ec = 1, xs = function(c, l, d) {
    return c === l ? !0 : c.className === l.className && d(c.style, l.style) && c.width === l.width && c.autoSize === l.autoSize && c.cols === l.cols && c.draggableCancel === l.draggableCancel && c.draggableHandle === l.draggableHandle && d(c.verticalCompact, l.verticalCompact) && d(c.compactType, l.compactType) && d(c.layout, l.layout) && d(c.margin, l.margin) && d(c.containerPadding, l.containerPadding) && c.rowHeight === l.rowHeight && c.maxRows === l.maxRows && c.isBounded === l.isBounded && c.isDraggable === l.isDraggable && c.isResizable === l.isResizable && c.allowOverlap === l.allowOverlap && c.preventCollision === l.preventCollision && c.useCSSTransforms === l.useCSSTransforms && c.transformScale === l.transformScale && c.isDroppable === l.isDroppable && d(c.resizeHandles, l.resizeHandles) && d(c.resizeHandle, l.resizeHandle) && c.onLayoutChange === l.onLayoutChange && c.onDragStart === l.onDragStart && c.onDrag === l.onDrag && c.onDragStop === l.onDragStop && c.onResizeStart === l.onResizeStart && c.onResize === l.onResize && c.onResizeStop === l.onResizeStop && c.onDrop === l.onDrop && d(c.droppingItem, l.droppingItem) && d(c.innerRef, l.innerRef);
  }), xs;
}
var kc;
function wr() {
  if (kc) return be;
  kc = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.bottom = L, be.childrenEqual = xe, be.cloneLayout = W, be.cloneLayoutItem = F, be.collides = U, be.compact = P, be.compactItem = h, be.compactType = Ae, be.correctBounds = f, be.fastPositionEqual = we, be.fastRGLPropsEqual = void 0, be.getAllCollisions = k, be.getFirstCollision = y, be.getLayoutItem = p, be.getStatics = j, be.modifyLayout = Y, be.moveElement = A, be.moveElementAwayFromCollision = ee, be.noop = void 0, be.perc = ae, be.resizeItemInDirection = Oe, be.setTopLeft = Ie, be.setTransform = De, be.sortLayoutItems = Q, be.sortLayoutItemsByColRow = Re, be.sortLayoutItemsByRowCol = ce, be.synchronizeLayoutWithChildren = Ce, be.validateLayout = Te, be.withLayoutItem = q;
  var u = /* @__PURE__ */ Ds(), c = l(Ot());
  function l(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function d(S, E) {
    var z = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(S);
      E && (B = B.filter(function(le) {
        return Object.getOwnPropertyDescriptor(S, le).enumerable;
      })), z.push.apply(z, B);
    }
    return z;
  }
  function R(S) {
    for (var E = 1; E < arguments.length; E++) {
      var z = arguments[E] != null ? arguments[E] : {};
      E % 2 ? d(Object(z), !0).forEach(function(B) {
        N(S, B, z[B]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(z)) : d(Object(z)).forEach(function(B) {
        Object.defineProperty(S, B, Object.getOwnPropertyDescriptor(z, B));
      });
    }
    return S;
  }
  function N(S, E, z) {
    return (E = H(E)) in S ? Object.defineProperty(S, E, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : S[E] = z, S;
  }
  function H(S) {
    var E = V(S, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function V(S, E) {
    if (typeof S != "object" || !S) return S;
    var z = S[Symbol.toPrimitive];
    if (z !== void 0) {
      var B = z.call(S, E);
      if (typeof B != "object") return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(S);
  }
  function L(S) {
    let E = 0, z;
    for (let B = 0, le = S.length; B < le; B++)
      z = S[B].y + S[B].h, z > E && (E = z);
    return E;
  }
  function W(S) {
    const E = Array(S.length);
    for (let z = 0, B = S.length; z < B; z++)
      E[z] = F(S[z]);
    return E;
  }
  function Y(S, E) {
    const z = Array(S.length);
    for (let B = 0, le = S.length; B < le; B++)
      E.i === S[B].i ? z[B] = E : z[B] = S[B];
    return z;
  }
  function q(S, E, z) {
    let B = p(S, E);
    return B ? (B = z(F(B)), S = Y(S, B), [S, B]) : [S, null];
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
  function xe(S, E) {
    return (0, u.deepEqual)(c.default.Children.map(S, (z) => z == null ? void 0 : z.key), c.default.Children.map(E, (z) => z == null ? void 0 : z.key)) && (0, u.deepEqual)(c.default.Children.map(S, (z) => z == null ? void 0 : z.props["data-grid"]), c.default.Children.map(E, (z) => z == null ? void 0 : z.props["data-grid"]));
  }
  be.fastRGLPropsEqual = pp();
  function we(S, E) {
    return S.left === E.left && S.top === E.top && S.width === E.width && S.height === E.height;
  }
  function U(S, E) {
    return !(S.i === E.i || S.x + S.w <= E.x || S.x >= E.x + E.w || S.y + S.h <= E.y || S.y >= E.y + E.h);
  }
  function P(S, E, z, B) {
    const le = j(S);
    let me = L(le);
    const ke = Q(S, E), Pe = Array(S.length);
    for (let Ne = 0, qe = ke.length; Ne < qe; Ne++) {
      let Xe = F(ke[Ne]);
      Xe.static || (Xe = h(le, Xe, E, z, ke, B, me), me = Math.max(me, Xe.y + Xe.h), le.push(Xe)), Pe[S.indexOf(ke[Ne])] = Xe, Xe.moved = !1;
    }
    return Pe;
  }
  const v = {
    x: "w",
    y: "h"
  };
  function a(S, E, z, B) {
    const le = v[B];
    E[B] += 1;
    const me = S.map((ke) => ke.i).indexOf(E.i);
    for (let ke = me + 1; ke < S.length; ke++) {
      const Pe = S[ke];
      if (!Pe.static) {
        if (Pe.y > E.y + E.h) break;
        U(E, Pe) && a(S, Pe, z + E[le], B);
      }
    }
    E[B] = z;
  }
  function h(S, E, z, B, le, me, ke) {
    const Pe = z === "vertical", Ne = z === "horizontal";
    if (Pe)
      for (typeof ke == "number" ? E.y = Math.min(ke, E.y) : E.y = Math.min(L(S), E.y); E.y > 0 && !y(S, E); )
        E.y--;
    else if (Ne)
      for (; E.x > 0 && !y(S, E); )
        E.x--;
    let qe;
    for (; (qe = y(S, E)) && !(z === null && me); )
      if (Ne ? a(le, E, qe.x + qe.w, "x") : a(le, E, qe.y + qe.h, "y"), Ne && E.x + E.w > B)
        for (E.x = B - E.w, E.y++; E.x > 0 && !y(S, E); )
          E.x--;
    return E.y = Math.max(E.y, 0), E.x = Math.max(E.x, 0), E;
  }
  function f(S, E) {
    const z = j(S);
    for (let B = 0, le = S.length; B < le; B++) {
      const me = S[B];
      if (me.x + me.w > E.cols && (me.x = E.cols - me.w), me.x < 0 && (me.x = 0, me.w = E.cols), !me.static) z.push(me);
      else
        for (; y(z, me); )
          me.y++;
    }
    return S;
  }
  function p(S, E) {
    for (let z = 0, B = S.length; z < B; z++)
      if (S[z].i === E) return S[z];
  }
  function y(S, E) {
    for (let z = 0, B = S.length; z < B; z++)
      if (U(S[z], E)) return S[z];
  }
  function k(S, E) {
    return S.filter((z) => U(z, E));
  }
  function j(S) {
    return S.filter((E) => E.static);
  }
  function A(S, E, z, B, le, me, ke, Pe, Ne) {
    if (E.static && E.isDraggable !== !0 || E.y === B && E.x === z) return S;
    "Moving element ".concat(E.i, " to [").concat(String(z), ",").concat(String(B), "] from [").concat(E.x, ",").concat(E.y, "]");
    const qe = E.x, Xe = E.y;
    typeof z == "number" && (E.x = z), typeof B == "number" && (E.y = B), E.moved = !0;
    let st = Q(S, ke);
    (ke === "vertical" && typeof B == "number" ? Xe >= B : ke === "horizontal" && typeof z == "number" ? qe >= z : !1) && (st = st.reverse());
    const C = k(st, E), I = C.length > 0;
    if (I && Ne)
      return W(S);
    if (I && me)
      return "Collision prevented on ".concat(E.i, ", reverting."), E.x = qe, E.y = Xe, E.moved = !1, S;
    for (let J = 0, ue = C.length; J < ue; J++) {
      const Me = C[J];
      "Resolving collision between ".concat(E.i, " at [").concat(E.x, ",").concat(E.y, "] and ").concat(Me.i, " at [").concat(Me.x, ",").concat(Me.y, "]"), !Me.moved && (Me.static ? S = ee(S, Me, E, le, ke) : S = ee(S, E, Me, le, ke));
    }
    return S;
  }
  function ee(S, E, z, B, le, me) {
    const ke = le === "horizontal", Pe = le === "vertical", Ne = E.static;
    if (B) {
      B = !1;
      const st = {
        x: ke ? Math.max(E.x - z.w, 0) : z.x,
        y: Pe ? Math.max(E.y - z.h, 0) : z.y,
        w: z.w,
        h: z.h,
        i: "-1"
      }, g = y(S, st), C = g && g.y + g.h > E.y, I = g && E.x + E.w > g.x;
      if (g) {
        if (C && Pe)
          return A(S, z, void 0, z.y + 1, B, Ne, le);
        if (C && le == null)
          return E.y = z.y, z.y = z.y + z.h, S;
        if (I && ke)
          return A(S, E, z.x, void 0, B, Ne, le);
      } else return "Doing reverse collision on ".concat(z.i, " up to [").concat(st.x, ",").concat(st.y, "]."), A(S, z, ke ? st.x : void 0, Pe ? st.y : void 0, B, Ne, le);
    }
    const qe = ke ? z.x + 1 : void 0, Xe = Pe ? z.y + 1 : void 0;
    return qe == null && Xe == null ? S : A(S, z, ke ? z.x + 1 : void 0, Pe ? z.y + 1 : void 0, B, Ne, le);
  }
  function ae(S) {
    return S * 100 + "%";
  }
  const se = (S, E, z, B) => S + z > B ? E : z, oe = (S, E, z) => S < 0 ? E : z, ge = (S) => Math.max(0, S), $ = (S) => Math.max(0, S), ne = (S, E, z) => {
    let {
      left: B,
      height: le,
      width: me
    } = E;
    const ke = S.top - (le - S.height);
    return {
      left: B,
      width: me,
      height: oe(ke, S.height, le),
      top: $(ke)
    };
  }, te = (S, E, z) => {
    let {
      top: B,
      left: le,
      height: me,
      width: ke
    } = E;
    return {
      top: B,
      height: me,
      width: se(S.left, S.width, ke, z),
      left: ge(le)
    };
  }, b = (S, E, z) => {
    let {
      top: B,
      height: le,
      width: me
    } = E;
    const ke = S.left - (me - S.width);
    return {
      height: le,
      width: ke < 0 ? S.width : se(S.left, S.width, me, z),
      top: $(B),
      left: ge(ke)
    };
  }, ie = (S, E, z) => {
    let {
      top: B,
      left: le,
      height: me,
      width: ke
    } = E;
    return {
      width: ke,
      left: le,
      height: oe(B, S.height, me),
      top: $(B)
    };
  }, Ee = {
    n: ne,
    ne: function() {
      return ne(arguments.length <= 0 ? void 0 : arguments[0], te(...arguments));
    },
    e: te,
    se: function() {
      return ie(arguments.length <= 0 ? void 0 : arguments[0], te(...arguments));
    },
    s: ie,
    sw: function() {
      return ie(arguments.length <= 0 ? void 0 : arguments[0], b(...arguments));
    },
    w: b,
    nw: function() {
      return ne(arguments.length <= 0 ? void 0 : arguments[0], b(...arguments));
    }
  };
  function Oe(S, E, z, B) {
    const le = Ee[S];
    return le ? le(E, R(R({}, E), z), B) : z;
  }
  function De(S) {
    let {
      top: E,
      left: z,
      width: B,
      height: le
    } = S;
    const me = "translate(".concat(z, "px,").concat(E, "px)");
    return {
      transform: me,
      WebkitTransform: me,
      MozTransform: me,
      msTransform: me,
      OTransform: me,
      width: "".concat(B, "px"),
      height: "".concat(le, "px"),
      position: "absolute"
    };
  }
  function Ie(S) {
    let {
      top: E,
      left: z,
      width: B,
      height: le
    } = S;
    return {
      top: "".concat(E, "px"),
      left: "".concat(z, "px"),
      width: "".concat(B, "px"),
      height: "".concat(le, "px"),
      position: "absolute"
    };
  }
  function Q(S, E) {
    return E === "horizontal" ? Re(S) : E === "vertical" ? ce(S) : S;
  }
  function ce(S) {
    return S.slice(0).sort(function(E, z) {
      return E.y > z.y || E.y === z.y && E.x > z.x ? 1 : E.y === z.y && E.x === z.x ? 0 : -1;
    });
  }
  function Re(S) {
    return S.slice(0).sort(function(E, z) {
      return E.x > z.x || E.x === z.x && E.y > z.y ? 1 : -1;
    });
  }
  function Ce(S, E, z, B, le) {
    S = S || [];
    const me = [];
    c.default.Children.forEach(E, (Pe) => {
      if ((Pe == null ? void 0 : Pe.key) == null) return;
      const Ne = p(S, String(Pe.key)), qe = Pe.props["data-grid"];
      Ne && qe == null ? me.push(F(Ne)) : qe ? me.push(F(R(R({}, qe), {}, {
        i: Pe.key
      }))) : me.push(F({
        w: 1,
        h: 1,
        x: 0,
        y: L(me),
        i: String(Pe.key)
      }));
    });
    const ke = f(me, {
      cols: z
    });
    return le ? ke : P(ke, B, z);
  }
  function Te(S) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const z = ["x", "y", "w", "h"];
    if (!Array.isArray(S)) throw new Error(E + " must be an array!");
    for (let B = 0, le = S.length; B < le; B++) {
      const me = S[B];
      for (let ke = 0; ke < z.length; ke++) {
        const Pe = z[ke], Ne = me[Pe];
        if (typeof Ne != "number" || Number.isNaN(Ne))
          throw new Error("ReactGridLayout: ".concat(E, "[").concat(B, "].").concat(Pe, " must be a number! Received: ").concat(Ne, " (").concat(typeof Ne, ")"));
      }
      if (typeof me.i < "u" && typeof me.i != "string")
        throw new Error("ReactGridLayout: ".concat(E, "[").concat(B, "].i must be a string! Received: ").concat(me.i, " (").concat(typeof me.i, ")"));
    }
  }
  function Ae(S) {
    const {
      verticalCompact: E,
      compactType: z
    } = S || {};
    return E === !1 ? null : z;
  }
  function Ve() {
  }
  const tt = () => {
  };
  return be.noop = tt, be;
}
var an = {}, Rc;
function Ns() {
  if (Rc) return an;
  Rc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = u, an.calcGridItemPosition = l, an.calcGridItemWHPx = c, an.calcWH = R, an.calcXY = d, an.clamp = N;
  function u(H) {
    const {
      margin: V,
      containerPadding: L,
      containerWidth: W,
      cols: Y
    } = H;
    return (W - V[0] * (Y - 1) - L[0] * 2) / Y;
  }
  function c(H, V, L) {
    return Number.isFinite(H) ? Math.round(V * H + Math.max(0, H - 1) * L) : H;
  }
  function l(H, V, L, W, Y, q) {
    const {
      margin: F,
      containerPadding: xe,
      rowHeight: we
    } = H, U = u(H), P = {};
    return q && q.resizing ? (P.width = Math.round(q.resizing.width), P.height = Math.round(q.resizing.height)) : (P.width = c(W, U, F[0]), P.height = c(Y, we, F[1])), q && q.dragging ? (P.top = Math.round(q.dragging.top), P.left = Math.round(q.dragging.left)) : q && q.resizing && typeof q.resizing.top == "number" && typeof q.resizing.left == "number" ? (P.top = Math.round(q.resizing.top), P.left = Math.round(q.resizing.left)) : (P.top = Math.round((we + F[1]) * L + xe[1]), P.left = Math.round((U + F[0]) * V + xe[0])), P;
  }
  function d(H, V, L, W, Y) {
    const {
      margin: q,
      containerPadding: F,
      cols: xe,
      rowHeight: we,
      maxRows: U
    } = H, P = u(H);
    let v = Math.round((L - F[0]) / (P + q[0])), a = Math.round((V - F[1]) / (we + q[1]));
    return v = N(v, 0, xe - W), a = N(a, 0, U - Y), {
      x: v,
      y: a
    };
  }
  function R(H, V, L, W, Y, q) {
    const {
      margin: F,
      maxRows: xe,
      cols: we,
      rowHeight: U
    } = H, P = u(H);
    let v = Math.round((V + F[0]) / (P + F[0])), a = Math.round((L + F[1]) / (U + F[1])), h = N(v, 0, we - W), f = N(a, 0, xe - Y);
    return ["sw", "w", "nw"].indexOf(q) !== -1 && (h = N(v, 0, we)), ["nw", "n", "ne"].indexOf(q) !== -1 && (f = N(a, 0, xe)), {
      w: h,
      h: f
    };
  }
  function N(H, V, L) {
    return Math.max(Math.min(H, L), V);
  }
  return an;
}
var li = {}, Es = { exports: {} }, ks, zc;
function hp() {
  if (zc) return ks;
  zc = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ks = u, ks;
}
var Rs, Oc;
function mp() {
  if (Oc) return Rs;
  Oc = 1;
  var u = /* @__PURE__ */ hp();
  function c() {
  }
  function l() {
  }
  return l.resetWarningCache = c, Rs = function() {
    function d(H, V, L, W, Y, q) {
      if (q !== u) {
        var F = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw F.name = "Invariant Violation", F;
      }
    }
    d.isRequired = d;
    function R() {
      return d;
    }
    var N = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: R,
      element: d,
      elementType: d,
      instanceOf: R,
      node: d,
      objectOf: R,
      oneOf: R,
      oneOfType: R,
      shape: R,
      exact: R,
      checkPropTypes: l,
      resetWarningCache: c
    };
    return N.PropTypes = N, N;
  }, Rs;
}
var Pc;
function Dn() {
  return Pc || (Pc = 1, Es.exports = /* @__PURE__ */ mp()()), Es.exports;
}
var si = { exports: {} }, zs, Cc;
function gp() {
  if (Cc) return zs;
  Cc = 1;
  var u = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyNames, R = Object.getPrototypeOf, N = Object.prototype.hasOwnProperty, H = (g, C) => {
    for (var I in C)
      c(g, I, { get: C[I], enumerable: !0 });
  }, V = (g, C, I, J) => {
    if (C && typeof C == "object" || typeof C == "function")
      for (let ue of d(C))
        !N.call(g, ue) && ue !== I && c(g, ue, { get: () => C[ue], enumerable: !(J = l(C, ue)) || J.enumerable });
    return g;
  }, L = (g, C, I) => (I = g != null ? u(R(g)) : {}, V(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !g || !g.__esModule ? c(I, "default", { value: g, enumerable: !0 }) : I,
    g
  )), W = (g) => V(c({}, "__esModule", { value: !0 }), g), Y = {};
  H(Y, {
    DraggableCore: () => Xe,
    default: () => st
  }), zs = W(Y);
  var q = L(Ot()), F = L(/* @__PURE__ */ Dn()), xe = L(Po()), we = No();
  function U(g, C) {
    for (let I = 0, J = g.length; I < J; I++)
      if (C.apply(C, [g[I], I, g])) return g[I];
  }
  function P(g) {
    return typeof g == "function" || Object.prototype.toString.call(g) === "[object Function]";
  }
  function v(g) {
    return typeof g == "number" && !isNaN(g);
  }
  function a(g) {
    return parseInt(g, 10);
  }
  function h(g, C, I) {
    if (g[C])
      return new Error(`Invalid prop ${C} passed to ${I} - do not set this, set it on the child.`);
  }
  var f = ["Moz", "Webkit", "O", "ms"];
  function p(g = "transform") {
    var C, I;
    if (typeof window > "u") return "";
    const J = (I = (C = window.document) == null ? void 0 : C.documentElement) == null ? void 0 : I.style;
    if (!J || g in J) return "";
    for (let ue = 0; ue < f.length; ue++)
      if (y(g, f[ue]) in J) return f[ue];
    return "";
  }
  function y(g, C) {
    return C ? `${C}${k(g)}` : g;
  }
  function k(g) {
    let C = "", I = !0;
    for (let J = 0; J < g.length; J++)
      I ? (C += g[J].toUpperCase(), I = !1) : g[J] === "-" ? I = !0 : C += g[J];
    return C;
  }
  var j = p(), A = "";
  function ee(g, C) {
    var I;
    A || (A = (I = U([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(ue) {
      return P(g[ue]);
    })) != null ? I : "");
    const J = g[A];
    return P(J) ? !!J.call(g, C) : !1;
  }
  function ae(g, C, I) {
    let J = g;
    do {
      if (ee(J, C)) return !0;
      if (J === I) return !1;
      J = J.parentNode;
    } while (J);
    return !1;
  }
  function se(g, C, I, J) {
    if (!g) return;
    const ue = { capture: !0, ...J }, Me = I;
    g.addEventListener ? g.addEventListener(C, Me, ue) : g.attachEvent ? g.attachEvent("on" + C, Me) : g["on" + C] = Me;
  }
  function oe(g, C, I, J) {
    if (!g) return;
    const ue = { capture: !0, ...J }, Me = I;
    g.removeEventListener ? g.removeEventListener(C, Me, ue) : g.detachEvent ? g.detachEvent("on" + C, Me) : g["on" + C] = null;
  }
  function ge(g) {
    let C = g.clientHeight;
    const I = g.ownerDocument.defaultView.getComputedStyle(g);
    return C += a(I.borderTopWidth), C += a(I.borderBottomWidth), C;
  }
  function $(g) {
    let C = g.clientWidth;
    const I = g.ownerDocument.defaultView.getComputedStyle(g);
    return C += a(I.borderLeftWidth), C += a(I.borderRightWidth), C;
  }
  function ne(g) {
    let C = g.clientHeight;
    const I = g.ownerDocument.defaultView.getComputedStyle(g);
    return C -= a(I.paddingTop), C -= a(I.paddingBottom), C;
  }
  function te(g) {
    let C = g.clientWidth;
    const I = g.ownerDocument.defaultView.getComputedStyle(g);
    return C -= a(I.paddingLeft), C -= a(I.paddingRight), C;
  }
  function b(g, C, I) {
    const ue = C === C.ownerDocument.body ? { left: 0, top: 0 } : C.getBoundingClientRect(), Me = (g.clientX + C.scrollLeft - ue.left) / I, je = (g.clientY + C.scrollTop - ue.top) / I;
    return { x: Me, y: je };
  }
  function ie(g, C) {
    const I = _(g, C, "px");
    return { [y("transform", j)]: I };
  }
  function K(g, C) {
    return _(g, C, "");
  }
  function _({ x: g, y: C }, I, J) {
    let ue = `translate(${g}${J},${C}${J})`;
    if (I) {
      const Me = `${typeof I.x == "string" ? I.x : I.x + J}`, je = `${typeof I.y == "string" ? I.y : I.y + J}`;
      ue = `translate(${Me}, ${je})` + ue;
    }
    return ue;
  }
  function M(g, C) {
    return g.targetTouches && U(g.targetTouches, (I) => C === I.identifier) || g.changedTouches && U(g.changedTouches, (I) => C === I.identifier);
  }
  function ve(g) {
    if (g.targetTouches && g.targetTouches[0]) return g.targetTouches[0].identifier;
    if (g.changedTouches && g.changedTouches[0]) return g.changedTouches[0].identifier;
  }
  function Ee() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Oe(g, C) {
    if (!g) return;
    let I = g.getElementById("react-draggable-style-el");
    if (!I) {
      I = g.createElement("style"), I.type = "text/css", I.id = "react-draggable-style-el";
      const J = C ?? Ee();
      J && I.setAttribute("nonce", J), I.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, I.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, g.getElementsByTagName("head")[0].appendChild(I);
    }
    g.body && Q(g.body, "react-draggable-transparent-selection");
  }
  function De(g) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Ie(g);
    }) : Ie(g);
  }
  function Ie(g) {
    if (g)
      try {
        g.body && ce(g.body, "react-draggable-transparent-selection");
        const C = g.selection;
        if (C)
          C.empty();
        else {
          const I = (g.defaultView || window).getSelection();
          I && I.type !== "Caret" && I.removeAllRanges();
        }
      } catch {
      }
  }
  function Q(g, C) {
    g.classList ? g.classList.add(C) : g.className.match(new RegExp(`(?:^|\\s)${C}(?!\\S)`)) || (g.className += ` ${C}`);
  }
  function ce(g, C) {
    g.classList ? g.classList.remove(C) : g.className = g.className.replace(new RegExp(`(?:^|\\s)${C}(?!\\S)`, "g"), "");
  }
  function Re(g, C, I) {
    if (!g.props.bounds) return [C, I];
    let { bounds: J } = g.props;
    J = typeof J == "string" ? J : E(J);
    const ue = z(g);
    if (typeof J == "string") {
      const { ownerDocument: Me } = ue, je = Me.defaultView;
      if (!je)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Qe;
      if (J === "parent" ? Qe = ue.parentNode : Qe = ue.getRootNode().querySelector(J), !(Qe instanceof je.HTMLElement))
        throw new Error('Bounds selector "' + J + '" could not find an element.');
      const ft = Qe, Ht = je.getComputedStyle(ue), $t = je.getComputedStyle(ft);
      J = {
        left: -ue.offsetLeft + a($t.paddingLeft) + a(Ht.marginLeft),
        top: -ue.offsetTop + a($t.paddingTop) + a(Ht.marginTop),
        right: te(ft) - $(ue) - ue.offsetLeft + a($t.paddingRight) - a(Ht.marginRight),
        bottom: ne(ft) - ge(ue) - ue.offsetTop + a($t.paddingBottom) - a(Ht.marginBottom)
      };
    }
    return v(J.right) && (C = Math.min(C, J.right)), v(J.bottom) && (I = Math.min(I, J.bottom)), v(J.left) && (C = Math.max(C, J.left)), v(J.top) && (I = Math.max(I, J.top)), [C, I];
  }
  function Ce(g, C, I) {
    const J = Math.round(C / g[0]) * g[0], ue = Math.round(I / g[1]) * g[1];
    return [J, ue];
  }
  function Te(g) {
    return g.props.axis === "both" || g.props.axis === "x";
  }
  function Ae(g) {
    return g.props.axis === "both" || g.props.axis === "y";
  }
  function Ve(g, C, I) {
    const J = typeof C == "number" ? M(g, C) : null;
    if (typeof C == "number" && !J) return null;
    const ue = z(I), Me = I.props.offsetParent || ue.offsetParent || ue.ownerDocument.body;
    return b(J || g, Me, I.props.scale);
  }
  function tt(g, C, I) {
    const J = !v(g.lastX), ue = z(g);
    return J ? {
      node: ue,
      deltaX: 0,
      deltaY: 0,
      lastX: C,
      lastY: I,
      x: C,
      y: I
    } : {
      node: ue,
      deltaX: C - g.lastX,
      deltaY: I - g.lastY,
      lastX: g.lastX,
      lastY: g.lastY,
      x: C,
      y: I
    };
  }
  function S(g, C) {
    const I = g.props.scale;
    return {
      node: C.node,
      x: g.state.x + C.deltaX / I,
      y: g.state.y + C.deltaY / I,
      deltaX: C.deltaX / I,
      deltaY: C.deltaY / I,
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
  function z(g) {
    const C = g.findDOMNode();
    if (!C)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return C;
  }
  var B = L(Ot()), le = L(/* @__PURE__ */ Dn()), me = L(Po()), ke = function() {
  }, Pe = ke, Ne = {
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
  }, qe = Ne.mouse, Xe = class extends B.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (g) => {
        if (this.props.onMouseDown(g), !this.props.allowAnyClick && (typeof g.button == "number" && g.button !== 0 || g.ctrlKey)) return !1;
        const C = this.findDOMNode();
        if (!C || !C.ownerDocument || !C.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: I } = C;
        if (this.props.disabled || !(g.target instanceof I.defaultView.Node) || this.props.handle && !ae(g.target, this.props.handle, C) || this.props.cancel && ae(g.target, this.props.cancel, C))
          return;
        g.type === "touchstart" && !this.props.allowMobileScroll && g.preventDefault();
        const J = ve(g);
        this.touchIdentifier = J;
        const ue = Ve(g, J, this);
        if (ue == null) return;
        const { x: Me, y: je } = ue, Qe = tt(this, Me, je);
        Pe("calling", this.props.onStart), !(this.props.onStart(g, Qe) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Oe(I, this.props.nonce), this.dragging = !0, this.lastX = Me, this.lastY = je, se(I, qe.move, this.handleDrag), se(I, qe.stop, this.handleDragStop));
      }, this.handleDrag = (g) => {
        const C = Ve(g, this.touchIdentifier, this);
        if (C == null) return;
        let { x: I, y: J } = C;
        if (Array.isArray(this.props.grid)) {
          let je = I - this.lastX, Qe = J - this.lastY;
          if ([je, Qe] = Ce(this.props.grid, je, Qe), !je && !Qe) return;
          I = this.lastX + je, J = this.lastY + Qe;
        }
        const ue = tt(this, I, J);
        if (this.props.onDrag(g, ue) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const je = document.createEvent("MouseEvents");
            je.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(je);
          }
          return;
        }
        this.lastX = I, this.lastY = J;
      }, this.handleDragStop = (g) => {
        if (!this.dragging) return;
        const C = Ve(g, this.touchIdentifier, this);
        if (C == null) return;
        let { x: I, y: J } = C;
        if (Array.isArray(this.props.grid)) {
          let Qe = I - this.lastX || 0, ft = J - this.lastY || 0;
          [Qe, ft] = Ce(this.props.grid, Qe, ft), I = this.lastX + Qe, J = this.lastY + ft;
        }
        const ue = tt(this, I, J);
        if (this.props.onStop(g, ue) === !1 || this.mounted === !1) return !1;
        const je = this.findDOMNode();
        je && this.props.enableUserSelectHack && De(je.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, je && (oe(je.ownerDocument, qe.move, this.handleDrag), oe(je.ownerDocument, qe.stop, this.handleDragStop));
      }, this.onMouseDown = (g) => (qe = Ne.mouse, this.handleDragStart(g)), this.onMouseUp = (g) => (qe = Ne.mouse, this.handleDragStop(g)), this.onTouchStart = (g) => (qe = Ne.touch, this.handleDragStart(g)), this.onTouchEnd = (g) => (qe = Ne.touch, this.handleDragStop(g));
    }
    componentDidMount() {
      this.mounted = !0;
      const g = this.findDOMNode();
      g && se(g, Ne.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const g = this.findDOMNode();
      if (g) {
        const { ownerDocument: C } = g;
        oe(C, Ne.mouse.move, this.handleDrag), oe(C, Ne.touch.move, this.handleDrag), oe(C, Ne.mouse.stop, this.handleDragStop), oe(C, Ne.touch.stop, this.handleDragStop), oe(g, Ne.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && De(C);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var g;
      if ((g = this.props) != null && g.nodeRef)
        return this.props.nodeRef.current;
      const C = me.default;
      return typeof C.findDOMNode == "function" ? C.findDOMNode(this) : null;
    }
    render() {
      return B.cloneElement(B.Children.only(this.props.children), {
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
    allowAnyClick: le.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: le.default.bool,
    children: le.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: le.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: le.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(g, C) {
      if (g[C] && g[C].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: le.default.arrayOf(le.default.number),
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
    handle: le.default.string,
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
    cancel: le.default.string,
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
    nodeRef: le.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: le.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: le.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: le.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: le.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: le.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: le.default.number,
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
  var st = class extends q.Component {
    constructor(g) {
      super(g), this.onDragStart = (C, I) => {
        if (this.props.onStart(C, S(this, I)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (C, I) => {
        if (!this.state.dragging) return !1;
        const J = S(this, I), ue = {
          x: J.x,
          y: J.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: je, y: Qe } = ue;
          ue.x += this.state.slackX, ue.y += this.state.slackY;
          const [ft, Ht] = Re(this, ue.x, ue.y);
          ue.x = ft, ue.y = Ht, ue.slackX = this.state.slackX + (je - ue.x), ue.slackY = this.state.slackY + (Qe - ue.y), J.x = ue.x, J.y = ue.y, J.deltaX = ue.x - this.state.x, J.deltaY = ue.y - this.state.y;
        }
        if (this.props.onDrag(C, J) === !1) return !1;
        this.setState(ue);
      }, this.onDragStop = (C, I) => {
        if (!this.state.dragging || this.props.onStop(C, S(this, I)) === !1) return !1;
        const ue = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: je, y: Qe } = this.props.position;
          ue.x = je, ue.y = Qe;
        }
        this.setState(ue);
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
    static getDerivedStateFromProps({ position: g }, { prevPropsPosition: C }) {
      return g && (!C || g.x !== C.x || g.y !== C.y) ? {
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
      const C = xe.default;
      return typeof C.findDOMNode == "function" ? C.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: g,
        bounds: C,
        children: I,
        defaultPosition: J,
        defaultClassName: ue,
        defaultClassNameDragging: Me,
        defaultClassNameDragged: je,
        position: Qe,
        positionOffset: ft,
        scale: Ht,
        ...$t
      } = this.props;
      let Nn = {}, Gn = null;
      const Zt = !!!Qe || this.state.dragging, Sr = Qe || J, _r = {
        // Set left if horizontal drag is enabled
        x: Te(this) && Zt ? this.state.x : Sr.x,
        // Set top if vertical drag is enabled
        y: Ae(this) && Zt ? this.state.y : Sr.y
      };
      this.state.isElementSVG ? Gn = K(_r, ft) : Nn = ie(_r, ft);
      const Yn = q.Children.only(I), hi = (0, we.clsx)(Yn.props.className || "", ue, {
        [Me]: this.state.dragging,
        [je]: this.state.dragged
      });
      return /* @__PURE__ */ q.createElement(Xe, { ...$t, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, q.cloneElement(Yn, {
        className: hi,
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
var Dc;
function Ls() {
  if (Dc) return si.exports;
  Dc = 1;
  const u = gp(), c = u.DraggableCore, l = u.default || u;
  return si.exports = l, si.exports.default = l, si.exports.DraggableCore = c, si.exports;
}
var ai = { exports: {} }, ui = {}, Ro = {}, Nc;
function yp() {
  if (Nc) return Ro;
  Nc = 1, Ro.__esModule = !0, Ro.cloneElement = V;
  var u = c(Ot());
  function c(L) {
    return L && L.__esModule ? L : { default: L };
  }
  function l(L, W) {
    var Y = Object.keys(L);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(L);
      W && (q = q.filter(function(F) {
        return Object.getOwnPropertyDescriptor(L, F).enumerable;
      })), Y.push.apply(Y, q);
    }
    return Y;
  }
  function d(L) {
    for (var W = 1; W < arguments.length; W++) {
      var Y = arguments[W] != null ? arguments[W] : {};
      W % 2 ? l(Object(Y), !0).forEach(function(q) {
        R(L, q, Y[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(Y)) : l(Object(Y)).forEach(function(q) {
        Object.defineProperty(L, q, Object.getOwnPropertyDescriptor(Y, q));
      });
    }
    return L;
  }
  function R(L, W, Y) {
    return W = N(W), W in L ? Object.defineProperty(L, W, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : L[W] = Y, L;
  }
  function N(L) {
    var W = H(L, "string");
    return typeof W == "symbol" ? W : String(W);
  }
  function H(L, W) {
    if (typeof L != "object" || L === null) return L;
    var Y = L[Symbol.toPrimitive];
    if (Y !== void 0) {
      var q = Y.call(L, W);
      if (typeof q != "object") return q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (W === "string" ? String : Number)(L);
  }
  function V(L, W) {
    return W.style && L.props.style && (W.style = d(d({}, L.props.style), W.style)), W.className && L.props.className && (W.className = L.props.className + " " + W.className), /* @__PURE__ */ u.default.cloneElement(L, W);
  }
  return Ro;
}
var ci = {}, Lc;
function $c() {
  if (Lc) return ci;
  Lc = 1, ci.__esModule = !0, ci.resizableProps = void 0;
  var u = c(/* @__PURE__ */ Dn());
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
      for (var R = arguments.length, N = new Array(R), H = 0; H < R; H++)
        N[H] = arguments[H];
      var V = N[0];
      if (V.axis === "both" || V.axis === "y") {
        var L;
        return (L = u.default.number).isRequired.apply(L, N);
      }
      return u.default.number.apply(u.default, N);
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
      for (var R = arguments.length, N = new Array(R), H = 0; H < R; H++)
        N[H] = arguments[H];
      var V = N[0];
      if (V.axis === "both" || V.axis === "x") {
        var L;
        return (L = u.default.number).isRequired.apply(L, N);
      }
      return u.default.number.apply(u.default, N);
    }
  };
  return ci.resizableProps = l, ci;
}
var Tc;
function Gc() {
  if (Tc) return ui;
  Tc = 1, ui.__esModule = !0, ui.default = void 0;
  var u = H(Ot()), c = Ls(), l = yp(), d = $c(), R = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function N(v) {
    if (typeof WeakMap != "function") return null;
    var a = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (N = function(p) {
      return p ? h : a;
    })(v);
  }
  function H(v, a) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var h = N(a);
    if (h && h.has(v))
      return h.get(v);
    var f = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var y in v)
      if (y !== "default" && Object.prototype.hasOwnProperty.call(v, y)) {
        var k = p ? Object.getOwnPropertyDescriptor(v, y) : null;
        k && (k.get || k.set) ? Object.defineProperty(f, y, k) : f[y] = v[y];
      }
    return f.default = v, h && h.set(v, f), f;
  }
  function V() {
    return V = Object.assign ? Object.assign.bind() : function(v) {
      for (var a = 1; a < arguments.length; a++) {
        var h = arguments[a];
        for (var f in h)
          Object.prototype.hasOwnProperty.call(h, f) && (v[f] = h[f]);
      }
      return v;
    }, V.apply(this, arguments);
  }
  function L(v, a) {
    if (v == null) return {};
    var h = {}, f = Object.keys(v), p, y;
    for (y = 0; y < f.length; y++)
      p = f[y], !(a.indexOf(p) >= 0) && (h[p] = v[p]);
    return h;
  }
  function W(v, a) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      a && (f = f.filter(function(p) {
        return Object.getOwnPropertyDescriptor(v, p).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function Y(v) {
    for (var a = 1; a < arguments.length; a++) {
      var h = arguments[a] != null ? arguments[a] : {};
      a % 2 ? W(Object(h), !0).forEach(function(f) {
        q(v, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : W(Object(h)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return v;
  }
  function q(v, a, h) {
    return a = F(a), a in v ? Object.defineProperty(v, a, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[a] = h, v;
  }
  function F(v) {
    var a = xe(v, "string");
    return typeof a == "symbol" ? a : String(a);
  }
  function xe(v, a) {
    if (typeof v != "object" || v === null) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(v, a);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(v);
  }
  function we(v, a) {
    v.prototype = Object.create(a.prototype), v.prototype.constructor = v, U(v, a);
  }
  function U(v, a) {
    return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, p) {
      return f.__proto__ = p, f;
    }, U(v, a);
  }
  var P = /* @__PURE__ */ function(v) {
    we(a, v);
    function a() {
      for (var f, p = arguments.length, y = new Array(p), k = 0; k < p; k++)
        y[k] = arguments[k];
      return f = v.call.apply(v, [this].concat(y)) || this, f.handleRefs = {}, f.lastHandleRect = null, f.slack = null, f;
    }
    var h = a.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(p, y) {
      var k = this.props, j = k.minConstraints, A = k.maxConstraints, ee = k.lockAspectRatio;
      if (!j && !A && !ee) return [p, y];
      if (ee) {
        var ae = this.props.width / this.props.height, se = p - this.props.width, oe = y - this.props.height;
        Math.abs(se) > Math.abs(oe * ae) ? y = p / ae : p = y * ae;
      }
      var ge = p, $ = y, ne = this.slack || [0, 0], te = ne[0], b = ne[1];
      return p += te, y += b, j && (p = Math.max(j[0], p), y = Math.max(j[1], y)), A && (p = Math.min(A[0], p), y = Math.min(A[1], y)), this.slack = [te + (ge - p), b + ($ - y)], [p, y];
    }, h.resizeHandler = function(p, y) {
      var k = this;
      return function(j, A) {
        var ee = A.node, ae = A.deltaX, se = A.deltaY;
        p === "onResizeStart" && k.resetData();
        var oe = (k.props.axis === "both" || k.props.axis === "x") && y !== "n" && y !== "s", ge = (k.props.axis === "both" || k.props.axis === "y") && y !== "e" && y !== "w";
        if (!(!oe && !ge)) {
          var $ = y[0], ne = y[y.length - 1], te = ee.getBoundingClientRect();
          if (k.lastHandleRect != null) {
            if (ne === "w") {
              var b = te.left - k.lastHandleRect.left;
              ae += b;
            }
            if ($ === "n") {
              var ie = te.top - k.lastHandleRect.top;
              se += ie;
            }
          }
          k.lastHandleRect = te, ne === "w" && (ae = -ae), $ === "n" && (se = -se);
          var K = k.props.width + (oe ? ae / k.props.transformScale : 0), _ = k.props.height + (ge ? se / k.props.transformScale : 0), M = k.runConstraints(K, _);
          K = M[0], _ = M[1];
          var ve = K !== k.props.width || _ !== k.props.height, Ee = typeof k.props[p] == "function" ? k.props[p] : null, Oe = p === "onResize" && !ve;
          Ee && !Oe && (j.persist == null || j.persist(), Ee(j, {
            node: ee,
            size: {
              width: K,
              height: _
            },
            handle: y
          })), p === "onResizeStop" && k.resetData();
        }
      };
    }, h.renderResizeHandle = function(p, y) {
      var k = this.props.handle;
      if (!k)
        return /* @__PURE__ */ u.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + p,
          ref: y
        });
      if (typeof k == "function")
        return k(p, y);
      var j = typeof k.type == "string", A = Y({
        ref: y
      }, j ? {} : {
        handleAxis: p
      });
      return /* @__PURE__ */ u.cloneElement(k, A);
    }, h.render = function() {
      var p = this, y = this.props, k = y.children, j = y.className, A = y.draggableOpts;
      y.width, y.height, y.handle, y.handleSize, y.lockAspectRatio, y.axis, y.minConstraints, y.maxConstraints, y.onResize, y.onResizeStop, y.onResizeStart;
      var ee = y.resizeHandles;
      y.transformScale;
      var ae = L(y, R);
      return (0, l.cloneElement)(k, Y(Y({}, ae), {}, {
        className: (j ? j + " " : "") + "react-resizable",
        children: [].concat(k.props.children, ee.map(function(se) {
          var oe, ge = (oe = p.handleRefs[se]) != null ? oe : p.handleRefs[se] = /* @__PURE__ */ u.createRef();
          return /* @__PURE__ */ u.createElement(c.DraggableCore, V({}, A, {
            nodeRef: ge,
            key: "resizableHandle-" + se,
            onStop: p.resizeHandler("onResizeStop", se),
            onStart: p.resizeHandler("onResizeStart", se),
            onDrag: p.resizeHandler("onResize", se)
          }), p.renderResizeHandle(se, ge));
        }))
      }));
    }, a;
  }(u.Component);
  return ui.default = P, P.propTypes = d.resizableProps, P.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, ui;
}
var fi = {}, Mc;
function vp() {
  if (Mc) return fi;
  Mc = 1, fi.__esModule = !0, fi.default = void 0;
  var u = V(Ot()), c = N(/* @__PURE__ */ Dn()), l = N(Gc()), d = $c(), R = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function N(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function H(a) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (H = function(y) {
      return y ? f : h;
    })(a);
  }
  function V(a, h) {
    if (a && a.__esModule)
      return a;
    if (a === null || typeof a != "object" && typeof a != "function")
      return { default: a };
    var f = H(h);
    if (f && f.has(a))
      return f.get(a);
    var p = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in a)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(a, k)) {
        var j = y ? Object.getOwnPropertyDescriptor(a, k) : null;
        j && (j.get || j.set) ? Object.defineProperty(p, k, j) : p[k] = a[k];
      }
    return p.default = a, f && f.set(a, p), p;
  }
  function L() {
    return L = Object.assign ? Object.assign.bind() : function(a) {
      for (var h = 1; h < arguments.length; h++) {
        var f = arguments[h];
        for (var p in f)
          Object.prototype.hasOwnProperty.call(f, p) && (a[p] = f[p]);
      }
      return a;
    }, L.apply(this, arguments);
  }
  function W(a, h) {
    var f = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(a);
      h && (p = p.filter(function(y) {
        return Object.getOwnPropertyDescriptor(a, y).enumerable;
      })), f.push.apply(f, p);
    }
    return f;
  }
  function Y(a) {
    for (var h = 1; h < arguments.length; h++) {
      var f = arguments[h] != null ? arguments[h] : {};
      h % 2 ? W(Object(f), !0).forEach(function(p) {
        q(a, p, f[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : W(Object(f)).forEach(function(p) {
        Object.defineProperty(a, p, Object.getOwnPropertyDescriptor(f, p));
      });
    }
    return a;
  }
  function q(a, h, f) {
    return h = F(h), h in a ? Object.defineProperty(a, h, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[h] = f, a;
  }
  function F(a) {
    var h = xe(a, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function xe(a, h) {
    if (typeof a != "object" || a === null) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var p = f.call(a, h);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(a);
  }
  function we(a, h) {
    if (a == null) return {};
    var f = {}, p = Object.keys(a), y, k;
    for (k = 0; k < p.length; k++)
      y = p[k], !(h.indexOf(y) >= 0) && (f[y] = a[y]);
    return f;
  }
  function U(a, h) {
    a.prototype = Object.create(h.prototype), a.prototype.constructor = a, P(a, h);
  }
  function P(a, h) {
    return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, y) {
      return p.__proto__ = y, p;
    }, P(a, h);
  }
  var v = /* @__PURE__ */ function(a) {
    U(h, a);
    function h() {
      for (var p, y = arguments.length, k = new Array(y), j = 0; j < y; j++)
        k[j] = arguments[j];
      return p = a.call.apply(a, [this].concat(k)) || this, p.state = {
        width: p.props.width,
        height: p.props.height,
        propsWidth: p.props.width,
        propsHeight: p.props.height
      }, p.onResize = function(A, ee) {
        var ae = ee.size;
        p.props.onResize ? (A.persist == null || A.persist(), p.setState(ae, function() {
          return p.props.onResize && p.props.onResize(A, ee);
        })) : p.setState(ae);
      }, p;
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
      var A = y.onResizeStart, ee = y.onResizeStop, ae = y.draggableOpts, se = y.minConstraints, oe = y.maxConstraints, ge = y.lockAspectRatio, $ = y.axis;
      y.width, y.height;
      var ne = y.resizeHandles, te = y.style, b = y.transformScale, ie = we(y, R);
      return /* @__PURE__ */ u.createElement(l.default, {
        axis: $,
        draggableOpts: ae,
        handle: k,
        handleSize: j,
        height: this.state.height,
        lockAspectRatio: ge,
        maxConstraints: oe,
        minConstraints: se,
        onResizeStart: A,
        onResize: this.onResize,
        onResizeStop: ee,
        resizeHandles: ne,
        transformScale: b,
        width: this.state.width
      }, /* @__PURE__ */ u.createElement("div", L({}, ie, {
        style: Y(Y({}, te), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(u.Component);
  return fi.default = v, v.propTypes = Y(Y({}, d.resizableProps), {}, {
    children: c.default.element
  }), fi;
}
var jc;
function wp() {
  return jc || (jc = 1, ai.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, ai.exports.Resizable = Gc().default, ai.exports.ResizableBox = vp().default), ai.exports;
}
var un = {}, bc;
function Yc() {
  if (bc) return un;
  bc = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var u = l(/* @__PURE__ */ Dn()), c = l(Ot());
  function l(N) {
    return N && N.__esModule ? N : { default: N };
  }
  const d = un.resizeHandleAxesType = u.default.arrayOf(u.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), R = un.resizeHandleType = u.default.oneOfType([u.default.node, u.default.func]);
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
    verticalCompact: function(N) {
      N.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: u.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(N) {
      var H = N.layout;
      H !== void 0 && wr().validateLayout(H, "layout");
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
    resizeHandles: d,
    resizeHandle: R,
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
    children: function(N, H) {
      const V = N[H], L = {};
      c.default.Children.forEach(V, function(W) {
        if ((W == null ? void 0 : W.key) != null) {
          if (L[W.key])
            throw new Error('Duplicate child key "' + W.key + '" found! This will cause problems in ReactGridLayout.');
          L[W.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: u.default.any
  }, un;
}
var Ic;
function Sp() {
  if (Ic) return li;
  Ic = 1, Object.defineProperty(li, "__esModule", {
    value: !0
  }), li.default = void 0;
  var u = W(Ot()), c = Po(), l = W(/* @__PURE__ */ Dn()), d = Ls(), R = wp(), N = wr(), H = Ns(), V = Yc(), L = W(No());
  function W(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function Y(P, v) {
    var a = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(P);
      v && (h = h.filter(function(f) {
        return Object.getOwnPropertyDescriptor(P, f).enumerable;
      })), a.push.apply(a, h);
    }
    return a;
  }
  function q(P) {
    for (var v = 1; v < arguments.length; v++) {
      var a = arguments[v] != null ? arguments[v] : {};
      v % 2 ? Y(Object(a), !0).forEach(function(h) {
        F(P, h, a[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(a)) : Y(Object(a)).forEach(function(h) {
        Object.defineProperty(P, h, Object.getOwnPropertyDescriptor(a, h));
      });
    }
    return P;
  }
  function F(P, v, a) {
    return (v = xe(v)) in P ? Object.defineProperty(P, v, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : P[v] = a, P;
  }
  function xe(P) {
    var v = we(P, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function we(P, v) {
    if (typeof P != "object" || !P) return P;
    var a = P[Symbol.toPrimitive];
    if (a !== void 0) {
      var h = a.call(P, v);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(P);
  }
  let U = class extends u.default.Component {
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
          transformScale: p
        } = this.props;
        if (!f) return;
        const y = {
          top: 0,
          left: 0
        }, {
          offsetParent: k
        } = h;
        if (!k) return;
        const j = k.getBoundingClientRect(), A = h.getBoundingClientRect(), ee = A.left / p, ae = j.left / p, se = A.top / p, oe = j.top / p;
        y.left = ee - ae + k.scrollLeft, y.top = se - oe + k.scrollTop, this.setState({
          dragging: y
        });
        const {
          x: ge,
          y: $
        } = (0, H.calcXY)(this.getPositionParams(), y.top, y.left, this.props.w, this.props.h);
        return f.call(this, this.props.i, ge, $, {
          e: v,
          node: h,
          newPosition: y
        });
      }), F(this, "onDrag", (v, a, h) => {
        let {
          node: f,
          deltaX: p,
          deltaY: y
        } = a;
        const {
          onDrag: k
        } = this.props;
        if (!k) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let j = this.state.dragging.top + y, A = this.state.dragging.left + p;
        const {
          isBounded: ee,
          i: ae,
          w: se,
          h: oe,
          containerWidth: ge
        } = this.props, $ = this.getPositionParams();
        if (ee) {
          const {
            offsetParent: ie
          } = f;
          if (ie) {
            const {
              margin: K,
              rowHeight: _
            } = this.props, M = ie.clientHeight - (0, H.calcGridItemWHPx)(oe, _, K[1]);
            j = (0, H.clamp)(j, 0, M);
            const ve = (0, H.calcGridColWidth)($), Ee = ge - (0, H.calcGridItemWHPx)(se, ve, K[0]);
            A = (0, H.clamp)(A, 0, Ee);
          }
        }
        const ne = {
          top: j,
          left: A
        };
        h ? this.setState({
          dragging: ne
        }) : (0, c.flushSync)(() => {
          this.setState({
            dragging: ne
          });
        });
        const {
          x: te,
          y: b
        } = (0, H.calcXY)($, j, A, se, oe);
        return k.call(this, ae, te, b, {
          e: v,
          node: f,
          newPosition: ne
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
          w: p,
          h: y,
          i: k
        } = this.props, {
          left: j,
          top: A
        } = this.state.dragging, ee = {
          top: A,
          left: j
        };
        this.setState({
          dragging: null
        });
        const {
          x: ae,
          y: se
        } = (0, H.calcXY)(this.getPositionParams(), A, j, p, y);
        return f.call(this, k, ae, se, {
          e: v,
          node: h,
          newPosition: ee
        });
      }), F(this, "onResizeStop", (v, a, h) => this.onResizeHandler(v, a, h, "onResizeStop")), F(this, "onResizeStart", (v, a, h) => this.onResizeHandler(v, a, h, "onResizeStart")), F(this, "onResize", (v, a, h) => this.onResizeHandler(v, a, h, "onResize"));
    }
    shouldComponentUpdate(v, a) {
      if (this.props.children !== v.children || this.props.droppingPosition !== v.droppingPosition) return !0;
      const h = (0, H.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), f = (0, H.calcGridItemPosition)(this.getPositionParams(v), v.x, v.y, v.w, v.h, a);
      return !(0, N.fastPositionEqual)(h, f) || this.props.useCSSTransforms !== v.useCSSTransforms;
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
        dragging: p
      } = this.state, y = p && a.left !== f.left || a.top !== f.top;
      if (!p)
        this.onDragStart(a.e, {
          node: h,
          deltaX: a.left,
          deltaY: a.top
        });
      else if (y) {
        const k = a.left - p.left, j = a.top - p.top;
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
      let p;
      return f ? p = (0, N.setTransform)(v) : (p = (0, N.setTopLeft)(v), a && (p.left = (0, N.perc)(v.left / h), p.width = (0, N.perc)(v.width / h))), p;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(v, a) {
      return /* @__PURE__ */ u.default.createElement(d.DraggableCore, {
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
        minW: p,
        minH: y,
        maxW: k,
        maxH: j,
        transformScale: A,
        resizeHandles: ee,
        resizeHandle: ae
      } = this.props, se = this.getPositionParams(), oe = (0, H.calcGridItemPosition)(se, 0, 0, f, 0).width, ge = (0, H.calcGridItemPosition)(se, 0, 0, p, y), $ = (0, H.calcGridItemPosition)(se, 0, 0, k, j), ne = [ge.width, ge.height], te = [Math.min($.width, oe), Math.min($.height, 1 / 0)];
      return /* @__PURE__ */ u.default.createElement(
        R.Resizable,
        {
          draggableOpts: {
            disabled: !h
          },
          className: h ? void 0 : "react-resizable-hide",
          width: a.width,
          height: a.height,
          minConstraints: ne,
          maxConstraints: te,
          onResizeStop: this.curryResizeHandler(a, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(a, this.onResizeStart),
          onResize: this.curryResizeHandler(a, this.onResize),
          transformScale: A,
          resizeHandles: ee,
          handle: ae
        },
        v
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(v, a, h, f) {
      let {
        node: p,
        size: y,
        handle: k
      } = a;
      const j = this.props[f];
      if (!j) return;
      const {
        x: A,
        y: ee,
        i: ae,
        maxH: se,
        minH: oe,
        containerWidth: ge
      } = this.props, {
        minW: $,
        maxW: ne
      } = this.props;
      let te = y;
      p && (te = (0, N.resizeItemInDirection)(k, h, y, ge), (0, c.flushSync)(() => {
        this.setState({
          resizing: f === "onResizeStop" ? null : te
        });
      }));
      let {
        w: b,
        h: ie
      } = (0, H.calcWH)(this.getPositionParams(), te.width, te.height, A, ee, k);
      b = (0, H.clamp)(b, Math.max($, 1), ne), ie = (0, H.clamp)(ie, oe, se), j.call(this, ae, b, ie, {
        e: v,
        node: p,
        size: te,
        handle: k
      });
    }
    render() {
      const {
        x: v,
        y: a,
        w: h,
        h: f,
        isDraggable: p,
        isResizable: y,
        droppingPosition: k,
        useCSSTransforms: j
      } = this.props, A = (0, H.calcGridItemPosition)(this.getPositionParams(), v, a, h, f, this.state), ee = u.default.Children.only(this.props.children);
      let ae = /* @__PURE__ */ u.default.cloneElement(ee, {
        ref: this.elementRef,
        className: (0, L.default)("react-grid-item", ee.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": p,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!k,
          cssTransforms: j
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: q(q(q({}, this.props.style), ee.props.style), this.createStyle(A))
      });
      return ae = this.mixinResizable(ae, A, y), ae = this.mixinDraggable(ae, p), ae;
    }
  };
  return li.default = U, F(U, "propTypes", {
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
    minW: function(P, v) {
      const a = P[v];
      if (typeof a != "number") return new Error("minWidth not Number");
      if (a > P.w || a > P.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(P, v) {
      const a = P[v];
      if (typeof a != "number") return new Error("maxWidth not Number");
      if (a < P.w || a < P.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(P, v) {
      const a = P[v];
      if (typeof a != "number") return new Error("minHeight not Number");
      if (a > P.h || a > P.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(P, v) {
      const a = P[v];
      if (typeof a != "number") return new Error("maxHeight not Number");
      if (a < P.h || a < P.minH) return new Error("maxHeight smaller than item height/minHeight");
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
  }), F(U, "defaultProps", {
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
var Hc;
function Xc() {
  if (Hc) return oi;
  Hc = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var u = L(Ot()), c = /* @__PURE__ */ Ds(), l = V(No()), d = wr(), R = Ns(), N = V(Sp()), H = V(Yc());
  function V(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function L(v, a) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (L = function(p, y) {
      if (!y && p && p.__esModule) return p;
      var k, j, A = { __proto__: null, default: p };
      if (p === null || typeof p != "object" && typeof p != "function") return A;
      if (k = y ? f : h) {
        if (k.has(p)) return k.get(p);
        k.set(p, A);
      }
      for (const ee in p) ee !== "default" && {}.hasOwnProperty.call(p, ee) && ((j = (k = Object.defineProperty) && Object.getOwnPropertyDescriptor(p, ee)) && (j.get || j.set) ? k(A, ee, j) : A[ee] = p[ee]);
      return A;
    })(v, a);
  }
  function W(v, a) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      a && (f = f.filter(function(p) {
        return Object.getOwnPropertyDescriptor(v, p).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function Y(v) {
    for (var a = 1; a < arguments.length; a++) {
      var h = arguments[a] != null ? arguments[a] : {};
      a % 2 ? W(Object(h), !0).forEach(function(f) {
        q(v, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : W(Object(h)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return v;
  }
  function q(v, a, h) {
    return (a = F(a)) in v ? Object.defineProperty(v, a, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[a] = h, v;
  }
  function F(v) {
    var a = xe(v, "string");
    return typeof a == "symbol" ? a : a + "";
  }
  function xe(v, a) {
    if (typeof v != "object" || !v) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(v, a);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(v);
  }
  const we = "react-grid-layout";
  let U = !1;
  try {
    U = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let P = class extends u.Component {
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
      }), q(this, "dragEnterCounter", 0), q(this, "onDragStart", (a, h, f, p) => {
        let {
          e: y,
          node: k
        } = p;
        const {
          layout: j
        } = this.state, A = (0, d.getLayoutItem)(j, a);
        if (!A) return;
        const ee = {
          w: A.w,
          h: A.h,
          x: A.x,
          y: A.y,
          placeholder: !0,
          i: a
        };
        return this.setState({
          oldDragItem: (0, d.cloneLayoutItem)(A),
          oldLayout: j,
          activeDrag: ee
        }), this.props.onDragStart(j, A, A, null, y, k);
      }), q(this, "onDrag", (a, h, f, p) => {
        let {
          e: y,
          node: k
        } = p;
        const {
          oldDragItem: j
        } = this.state;
        let {
          layout: A
        } = this.state;
        const {
          cols: ee,
          allowOverlap: ae,
          preventCollision: se
        } = this.props, oe = (0, d.getLayoutItem)(A, a);
        if (!oe) return;
        const ge = {
          w: oe.w,
          h: oe.h,
          x: oe.x,
          y: oe.y,
          placeholder: !0,
          i: a
        };
        A = (0, d.moveElement)(A, oe, h, f, !0, se, (0, d.compactType)(this.props), ee, ae), this.props.onDrag(A, j, oe, ge, y, k), this.setState({
          layout: ae ? A : (0, d.compact)(A, (0, d.compactType)(this.props), ee),
          activeDrag: ge
        });
      }), q(this, "onDragStop", (a, h, f, p) => {
        let {
          e: y,
          node: k
        } = p;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: j
        } = this.state;
        let {
          layout: A
        } = this.state;
        const {
          cols: ee,
          preventCollision: ae,
          allowOverlap: se
        } = this.props, oe = (0, d.getLayoutItem)(A, a);
        if (!oe) return;
        A = (0, d.moveElement)(A, oe, h, f, !0, ae, (0, d.compactType)(this.props), ee, se);
        const $ = se ? A : (0, d.compact)(A, (0, d.compactType)(this.props), ee);
        this.props.onDragStop($, j, oe, null, y, k);
        const {
          oldLayout: ne
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: $,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged($, ne);
      }), q(this, "onResizeStart", (a, h, f, p) => {
        let {
          e: y,
          node: k
        } = p;
        const {
          layout: j
        } = this.state, A = (0, d.getLayoutItem)(j, a);
        A && (this.setState({
          oldResizeItem: (0, d.cloneLayoutItem)(A),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(j, A, A, null, y, k));
      }), q(this, "onResize", (a, h, f, p) => {
        let {
          e: y,
          node: k,
          size: j,
          handle: A
        } = p;
        const {
          oldResizeItem: ee
        } = this.state, {
          layout: ae
        } = this.state, {
          cols: se,
          preventCollision: oe,
          allowOverlap: ge
        } = this.props;
        let $ = !1, ne, te, b;
        const [ie, K] = (0, d.withLayoutItem)(ae, a, (M) => {
          let ve;
          return te = M.x, b = M.y, ["sw", "w", "nw", "n", "ne"].indexOf(A) !== -1 && (["sw", "nw", "w"].indexOf(A) !== -1 && (te = M.x + (M.w - h), h = M.x !== te && te < 0 ? M.w : h, te = te < 0 ? 0 : te), ["ne", "n", "nw"].indexOf(A) !== -1 && (b = M.y + (M.h - f), f = M.y !== b && b < 0 ? M.h : f, b = b < 0 ? 0 : b), $ = !0), oe && !ge && (ve = (0, d.getAllCollisions)(ae, Y(Y({}, M), {}, {
            w: h,
            h: f,
            x: te,
            y: b
          })).filter((Oe) => Oe.i !== M.i).length > 0, ve && (b = M.y, f = M.h, te = M.x, h = M.w, $ = !1)), M.w = h, M.h = f, M;
        });
        if (!K) return;
        ne = ie, $ && (ne = (0, d.moveElement)(ie, K, te, b, !0, this.props.preventCollision, (0, d.compactType)(this.props), se, ge));
        const _ = {
          w: K.w,
          h: K.h,
          x: K.x,
          y: K.y,
          static: !0,
          i: a
        };
        this.props.onResize(ne, ee, K, _, y, k), this.setState({
          layout: ge ? ne : (0, d.compact)(ne, (0, d.compactType)(this.props), se),
          activeDrag: _
        });
      }), q(this, "onResizeStop", (a, h, f, p) => {
        let {
          e: y,
          node: k
        } = p;
        const {
          layout: j,
          oldResizeItem: A
        } = this.state, {
          cols: ee,
          allowOverlap: ae
        } = this.props, se = (0, d.getLayoutItem)(j, a), oe = ae ? j : (0, d.compact)(j, (0, d.compactType)(this.props), ee);
        this.props.onResizeStop(oe, A, se, null, y, k);
        const {
          oldLayout: ge
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: oe,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(oe, ge);
      }), q(this, "onDragOver", (a) => {
        var h;
        if (a.preventDefault(), a.stopPropagation(), U && // $FlowIgnore can't figure this out
        !((h = a.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(we)))
          return !1;
        const {
          droppingItem: f,
          onDropDragOver: p,
          margin: y,
          cols: k,
          rowHeight: j,
          maxRows: A,
          width: ee,
          containerPadding: ae,
          transformScale: se
        } = this.props, oe = p == null ? void 0 : p(a);
        if (oe === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const ge = Y(Y({}, f), oe), {
          layout: $
        } = this.state, ne = a.currentTarget.getBoundingClientRect(), te = a.clientX - ne.left, b = a.clientY - ne.top, ie = {
          left: te / se,
          top: b / se,
          e: a
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: K,
              top: _
            } = this.state.droppingPosition;
            (K != te || _ != b) && this.setState({
              droppingPosition: ie
            });
          }
        } else {
          const K = {
            cols: k,
            margin: y,
            maxRows: A,
            rowHeight: j,
            containerWidth: ee,
            containerPadding: ae || y
          }, _ = (0, R.calcXY)(K, b, te, ge.w, ge.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ u.createElement("div", {
              key: ge.i
            }),
            droppingPosition: ie,
            layout: [...$, Y(Y({}, ge), {}, {
              x: _.x,
              y: _.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), q(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: a,
          cols: h
        } = this.props, {
          layout: f
        } = this.state, p = (0, d.compact)(f.filter((y) => y.i !== a.i), (0, d.compactType)(this.props), h, this.props.allowOverlap);
        this.setState({
          layout: p,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), q(this, "onDragLeave", (a) => {
        a.preventDefault(), a.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), q(this, "onDragEnter", (a) => {
        a.preventDefault(), a.stopPropagation(), this.dragEnterCounter++;
      }), q(this, "onDrop", (a) => {
        a.preventDefault(), a.stopPropagation();
        const {
          droppingItem: h
        } = this.props, {
          layout: f
        } = this.state, p = f.find((y) => y.i === h.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(f, p, a);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(a, h) {
      let f;
      return h.activeDrag ? null : (!(0, c.deepEqual)(a.layout, h.propsLayout) || a.compactType !== h.compactType ? f = a.layout : (0, d.childrenEqual)(a.children, h.children) || (f = h.layout), f ? {
        layout: (0, d.synchronizeLayoutWithChildren)(f, a.children, a.cols, (0, d.compactType)(a), a.allowOverlap),
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
        this.props.children !== a.children || !(0, d.fastRGLPropsEqual)(this.props, a, c.deepEqual) || this.state.activeDrag !== h.activeDrag || this.state.mounted !== h.mounted || this.state.droppingPosition !== h.droppingPosition
      );
    }
    componentDidUpdate(a, h) {
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
      const a = (0, d.bottom)(this.state.layout), h = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
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
        margin: p,
        containerPadding: y,
        rowHeight: k,
        maxRows: j,
        useCSSTransforms: A,
        transformScale: ee
      } = this.props;
      return /* @__PURE__ */ u.createElement(N.default, {
        w: a.w,
        h: a.h,
        x: a.x,
        y: a.y,
        i: a.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: h,
        cols: f,
        margin: p,
        containerPadding: y || p,
        maxRows: j,
        rowHeight: k,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: A,
        transformScale: ee
      }, /* @__PURE__ */ u.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(a, h) {
      if (!a || !a.key) return;
      const f = (0, d.getLayoutItem)(this.state.layout, String(a.key));
      if (!f) return null;
      const {
        width: p,
        cols: y,
        margin: k,
        containerPadding: j,
        rowHeight: A,
        maxRows: ee,
        isDraggable: ae,
        isResizable: se,
        isBounded: oe,
        useCSSTransforms: ge,
        transformScale: $,
        draggableCancel: ne,
        draggableHandle: te,
        resizeHandles: b,
        resizeHandle: ie
      } = this.props, {
        mounted: K,
        droppingPosition: _
      } = this.state, M = typeof f.isDraggable == "boolean" ? f.isDraggable : !f.static && ae, ve = typeof f.isResizable == "boolean" ? f.isResizable : !f.static && se, Ee = f.resizeHandles || b, Oe = M && oe && f.isBounded !== !1;
      return /* @__PURE__ */ u.createElement(N.default, {
        containerWidth: p,
        cols: y,
        margin: k,
        containerPadding: j || k,
        maxRows: ee,
        rowHeight: A,
        cancel: ne,
        handle: te,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: M,
        isResizable: ve,
        isBounded: Oe,
        useCSSTransforms: ge && K,
        usePercentages: !K,
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
        droppingPosition: h ? _ : void 0,
        resizeHandles: Ee,
        resizeHandle: ie
      }, a);
    }
    render() {
      const {
        className: a,
        style: h,
        isDroppable: f,
        innerRef: p
      } = this.props, y = (0, l.default)(we, a), k = Y({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ u.createElement("div", {
        ref: p,
        className: y,
        style: k,
        onDrop: f ? this.onDrop : d.noop,
        onDragLeave: f ? this.onDragLeave : d.noop,
        onDragEnter: f ? this.onDragEnter : d.noop,
        onDragOver: f ? this.onDragOver : d.noop
      }, u.Children.map(this.props.children, (j) => this.processGridItem(j)), f && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return oi.default = P, q(P, "displayName", "ReactGridLayout"), q(P, "propTypes", H.default), q(P, "defaultProps", {
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
var di = {}, $n = {}, Wc;
function Qc() {
  if (Wc) return $n;
  Wc = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.findOrGenerateResponsiveLayout = d, $n.getBreakpointFromWidth = c, $n.getColsFromBreakpoint = l, $n.sortBreakpoints = R;
  var u = wr();
  function c(N, H) {
    const V = R(N);
    let L = V[0];
    for (let W = 1, Y = V.length; W < Y; W++) {
      const q = V[W];
      H > N[q] && (L = q);
    }
    return L;
  }
  function l(N, H) {
    if (!H[N])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + N + " is missing!");
    return H[N];
  }
  function d(N, H, V, L, W, Y) {
    if (N[V]) return (0, u.cloneLayout)(N[V]);
    let q = N[L];
    const F = R(H), xe = F.slice(F.indexOf(V));
    for (let we = 0, U = xe.length; we < U; we++) {
      const P = xe[we];
      if (N[P]) {
        q = N[P];
        break;
      }
    }
    return q = (0, u.cloneLayout)(q || []), (0, u.compact)((0, u.correctBounds)(q, {
      cols: W
    }), Y, W);
  }
  function R(N) {
    return Object.keys(N).sort(function(V, L) {
      return N[V] - N[L];
    });
  }
  return $n;
}
var Ac;
function _p() {
  if (Ac) return di;
  Ac = 1, Object.defineProperty(di, "__esModule", {
    value: !0
  }), di.default = void 0;
  var u = L(Ot()), c = V(/* @__PURE__ */ Dn()), l = /* @__PURE__ */ Ds(), d = wr(), R = Qc(), N = V(Xc());
  const H = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function V(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function L(f, p) {
    if (typeof WeakMap == "function") var y = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap();
    return (L = function(j, A) {
      if (!A && j && j.__esModule) return j;
      var ee, ae, se = { __proto__: null, default: j };
      if (j === null || typeof j != "object" && typeof j != "function") return se;
      if (ee = A ? k : y) {
        if (ee.has(j)) return ee.get(j);
        ee.set(j, se);
      }
      for (const oe in j) oe !== "default" && {}.hasOwnProperty.call(j, oe) && ((ae = (ee = Object.defineProperty) && Object.getOwnPropertyDescriptor(j, oe)) && (ae.get || ae.set) ? ee(se, oe, ae) : se[oe] = j[oe]);
      return se;
    })(f, p);
  }
  function W() {
    return W = Object.assign ? Object.assign.bind() : function(f) {
      for (var p = 1; p < arguments.length; p++) {
        var y = arguments[p];
        for (var k in y) ({}).hasOwnProperty.call(y, k) && (f[k] = y[k]);
      }
      return f;
    }, W.apply(null, arguments);
  }
  function Y(f, p) {
    if (f == null) return {};
    var y, k, j = q(f, p);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(f);
      for (k = 0; k < A.length; k++) y = A[k], p.indexOf(y) === -1 && {}.propertyIsEnumerable.call(f, y) && (j[y] = f[y]);
    }
    return j;
  }
  function q(f, p) {
    if (f == null) return {};
    var y = {};
    for (var k in f) if ({}.hasOwnProperty.call(f, k)) {
      if (p.indexOf(k) !== -1) continue;
      y[k] = f[k];
    }
    return y;
  }
  function F(f, p) {
    var y = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(f);
      p && (k = k.filter(function(j) {
        return Object.getOwnPropertyDescriptor(f, j).enumerable;
      })), y.push.apply(y, k);
    }
    return y;
  }
  function xe(f) {
    for (var p = 1; p < arguments.length; p++) {
      var y = arguments[p] != null ? arguments[p] : {};
      p % 2 ? F(Object(y), !0).forEach(function(k) {
        we(f, k, y[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(y)) : F(Object(y)).forEach(function(k) {
        Object.defineProperty(f, k, Object.getOwnPropertyDescriptor(y, k));
      });
    }
    return f;
  }
  function we(f, p, y) {
    return (p = U(p)) in f ? Object.defineProperty(f, p, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : f[p] = y, f;
  }
  function U(f) {
    var p = P(f, "string");
    return typeof p == "symbol" ? p : p + "";
  }
  function P(f, p) {
    if (typeof f != "object" || !f) return f;
    var y = f[Symbol.toPrimitive];
    if (y !== void 0) {
      var k = y.call(f, p);
      if (typeof k != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(f);
  }
  const v = (f) => Object.prototype.toString.call(f);
  function a(f, p) {
    return f == null ? null : Array.isArray(f) ? f : f[p];
  }
  let h = class extends u.Component {
    constructor() {
      super(...arguments), we(this, "state", this.generateInitialState()), we(this, "onLayoutChange", (p) => {
        this.props.onLayoutChange(p, xe(xe({}, this.props.layouts), {}, {
          [this.state.breakpoint]: p
        }));
      });
    }
    generateInitialState() {
      const {
        width: p,
        breakpoints: y,
        layouts: k,
        cols: j
      } = this.props, A = (0, R.getBreakpointFromWidth)(y, p), ee = (0, R.getColsFromBreakpoint)(A, j), ae = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, R.findOrGenerateResponsiveLayout)(k, y, A, A, ee, ae),
        breakpoint: A,
        cols: ee
      };
    }
    static getDerivedStateFromProps(p, y) {
      if (!(0, l.deepEqual)(p.layouts, y.layouts)) {
        const {
          breakpoint: k,
          cols: j
        } = y;
        return {
          layout: (0, R.findOrGenerateResponsiveLayout)(p.layouts, p.breakpoints, k, k, j, p.compactType),
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
        cols: k,
        layouts: j,
        compactType: A
      } = this.props, ee = this.props.breakpoint || (0, R.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), ae = this.state.breakpoint, se = (0, R.getColsFromBreakpoint)(ee, k), oe = xe({}, j);
      if (ae !== ee || p.breakpoints !== y || p.cols !== k) {
        ae in oe || (oe[ae] = (0, d.cloneLayout)(this.state.layout));
        let ne = (0, R.findOrGenerateResponsiveLayout)(oe, y, ee, ae, se, A);
        ne = (0, d.synchronizeLayoutWithChildren)(ne, this.props.children, se, A, this.props.allowOverlap), oe[ee] = ne, this.props.onBreakpointChange(ee, se), this.props.onLayoutChange(ne, oe), this.setState({
          breakpoint: ee,
          layout: ne,
          cols: se
        });
      }
      const ge = a(this.props.margin, ee), $ = a(this.props.containerPadding, ee);
      this.props.onWidthChange(this.props.width, ge, se, $);
    }
    render() {
      const p = this.props, {
        breakpoint: y,
        breakpoints: k,
        cols: j,
        layouts: A,
        margin: ee,
        containerPadding: ae,
        onBreakpointChange: se,
        onLayoutChange: oe,
        onWidthChange: ge
      } = p, $ = Y(p, H);
      return /* @__PURE__ */ u.createElement(N.default, W({}, $, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: a(ee, this.state.breakpoint),
        containerPadding: a(ae, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return di.default = h, we(h, "propTypes", {
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
  }), we(h, "defaultProps", {
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
  }), di;
}
var zo = {}, Kc = function() {
  if (typeof Map < "u")
    return Map;
  function u(c, l) {
    var d = -1;
    return c.some(function(R, N) {
      return R[0] === l ? (d = N, !0) : !1;
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
        var d = u(this.__entries__, l), R = this.__entries__[d];
        return R && R[1];
      }, c.prototype.set = function(l, d) {
        var R = u(this.__entries__, l);
        ~R ? this.__entries__[R][1] = d : this.__entries__.push([l, d]);
      }, c.prototype.delete = function(l) {
        var d = this.__entries__, R = u(d, l);
        ~R && d.splice(R, 1);
      }, c.prototype.has = function(l) {
        return !!~u(this.__entries__, l);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(l, d) {
        d === void 0 && (d = null);
        for (var R = 0, N = this.__entries__; R < N.length; R++) {
          var H = N[R];
          l.call(d, H[1], H[0]);
        }
      }, c;
    }()
  );
}(), Os = typeof window < "u" && typeof document < "u" && window.document === document, Co = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), xp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Co) : function(u) {
    return setTimeout(function() {
      return u(Date.now());
    }, 1e3 / 60);
  };
}(), Ep = 2;
function kp(u, c) {
  var l = !1, d = !1, R = 0;
  function N() {
    l && (l = !1, u()), d && V();
  }
  function H() {
    xp(N);
  }
  function V() {
    var L = Date.now();
    if (l) {
      if (L - R < Ep)
        return;
      d = !0;
    } else
      l = !0, d = !1, setTimeout(H, c);
    R = L;
  }
  return V;
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
      var l = this.observers_, d = l.indexOf(c);
      ~d && l.splice(d, 1), !l.length && this.connected_ && this.disconnect_();
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
      !Os || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Op ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, u.prototype.disconnect_ = function() {
      !Os || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, u.prototype.onTransitionEnd_ = function(c) {
      var l = c.propertyName, d = l === void 0 ? "" : l, R = zp.some(function(N) {
        return !!~d.indexOf(N);
      });
      R && this.refresh();
    }, u.getInstance = function() {
      return this.instance_ || (this.instance_ = new u()), this.instance_;
    }, u.instance_ = null, u;
  }()
), Zc = function(u, c) {
  for (var l = 0, d = Object.keys(c); l < d.length; l++) {
    var R = d[l];
    Object.defineProperty(u, R, {
      value: c[R],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return u;
}, yr = function(u) {
  var c = u && u.ownerDocument && u.ownerDocument.defaultView;
  return c || Co;
}, Jc = Lo(0, 0, 0, 0);
function Do(u) {
  return parseFloat(u) || 0;
}
function Fc(u) {
  for (var c = [], l = 1; l < arguments.length; l++)
    c[l - 1] = arguments[l];
  return c.reduce(function(d, R) {
    var N = u["border-" + R + "-width"];
    return d + Do(N);
  }, 0);
}
function Cp(u) {
  for (var c = ["top", "right", "bottom", "left"], l = {}, d = 0, R = c; d < R.length; d++) {
    var N = R[d], H = u["padding-" + N];
    l[N] = Do(H);
  }
  return l;
}
function Dp(u) {
  var c = u.getBBox();
  return Lo(0, 0, c.width, c.height);
}
function Np(u) {
  var c = u.clientWidth, l = u.clientHeight;
  if (!c && !l)
    return Jc;
  var d = yr(u).getComputedStyle(u), R = Cp(d), N = R.left + R.right, H = R.top + R.bottom, V = Do(d.width), L = Do(d.height);
  if (d.boxSizing === "border-box" && (Math.round(V + N) !== c && (V -= Fc(d, "left", "right") + N), Math.round(L + H) !== l && (L -= Fc(d, "top", "bottom") + H)), !Tp(u)) {
    var W = Math.round(V + N) - c, Y = Math.round(L + H) - l;
    Math.abs(W) !== 1 && (V -= W), Math.abs(Y) !== 1 && (L -= Y);
  }
  return Lo(R.left, R.top, V, L);
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
  return Os ? Lp(u) ? Dp(u) : Np(u) : Jc;
}
function jp(u) {
  var c = u.x, l = u.y, d = u.width, R = u.height, N = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, H = Object.create(N.prototype);
  return Zc(H, {
    x: c,
    y: l,
    width: d,
    height: R,
    top: l,
    right: c + d,
    bottom: R + l,
    left: c
  }), H;
}
function Lo(u, c, l, d) {
  return { x: u, y: c, width: l, height: d };
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
    function u(c, l) {
      var d = jp(l);
      Zc(this, { target: c, contentRect: d });
    }
    return u;
  }()
), Hp = (
  /** @class */
  function() {
    function u(c, l, d) {
      if (this.activeObservations_ = [], this.observations_ = new Kc(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = l, this.callbackCtx_ = d;
    }
    return u.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) || (l.set(c, new bp(c)), this.controller_.addObserver(this), this.controller_.refresh());
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
        var c = this.callbackCtx_, l = this.activeObservations_.map(function(d) {
          return new Ip(d.target, d.broadcastRect());
        });
        this.callback_.call(c, l, c), this.clearActive();
      }
    }, u.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, u.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, u;
  }()
), ef = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Kc(), tf = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(c) {
      if (!(this instanceof u))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var l = Pp.getInstance(), d = new Hp(c, l, this);
      ef.set(this, d);
    }
    return u;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(u) {
  tf.prototype[u] = function() {
    var c;
    return (c = ef.get(this))[u].apply(c, arguments);
  };
});
var Wp = function() {
  return typeof Co.ResizeObserver < "u" ? Co.ResizeObserver : tf;
}();
const Ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wp
}, Symbol.toStringTag, { value: "Module" })), Fp = /* @__PURE__ */ ep(Ap);
var Bc;
function Bp() {
  if (Bc) return zo;
  Bc = 1, Object.defineProperty(zo, "__esModule", {
    value: !0
  }), zo.default = we;
  var u = H(Ot()), c = N(/* @__PURE__ */ Dn()), l = N(Fp), d = N(No());
  const R = ["measureBeforeMount"];
  function N(U) {
    return U && U.__esModule ? U : { default: U };
  }
  function H(U, P) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (H = function(h, f) {
      if (!f && h && h.__esModule) return h;
      var p, y, k = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return k;
      if (p = f ? a : v) {
        if (p.has(h)) return p.get(h);
        p.set(h, k);
      }
      for (const j in h) j !== "default" && {}.hasOwnProperty.call(h, j) && ((y = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, j)) && (y.get || y.set) ? p(k, j, y) : k[j] = h[j]);
      return k;
    })(U, P);
  }
  function V() {
    return V = Object.assign ? Object.assign.bind() : function(U) {
      for (var P = 1; P < arguments.length; P++) {
        var v = arguments[P];
        for (var a in v) ({}).hasOwnProperty.call(v, a) && (U[a] = v[a]);
      }
      return U;
    }, V.apply(null, arguments);
  }
  function L(U, P) {
    if (U == null) return {};
    var v, a, h = W(U, P);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(U);
      for (a = 0; a < f.length; a++) v = f[a], P.indexOf(v) === -1 && {}.propertyIsEnumerable.call(U, v) && (h[v] = U[v]);
    }
    return h;
  }
  function W(U, P) {
    if (U == null) return {};
    var v = {};
    for (var a in U) if ({}.hasOwnProperty.call(U, a)) {
      if (P.indexOf(a) !== -1) continue;
      v[a] = U[a];
    }
    return v;
  }
  function Y(U, P, v) {
    return (P = q(P)) in U ? Object.defineProperty(U, P, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : U[P] = v, U;
  }
  function q(U) {
    var P = F(U, "string");
    return typeof P == "symbol" ? P : P + "";
  }
  function F(U, P) {
    if (typeof U != "object" || !U) return U;
    var v = U[Symbol.toPrimitive];
    if (v !== void 0) {
      var a = v.call(U, P);
      if (typeof a != "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (P === "string" ? String : Number)(U);
  }
  const xe = "react-grid-layout";
  function we(U) {
    var P;
    return P = class extends u.Component {
      constructor() {
        super(...arguments), Y(this, "state", {
          width: 1280
        }), Y(this, "elementRef", /* @__PURE__ */ u.createRef()), Y(this, "mounted", !1), Y(this, "resizeObserver", void 0);
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
        } = a, f = L(a, R);
        return h && !this.mounted ? /* @__PURE__ */ u.createElement("div", {
          className: (0, d.default)(this.props.className, xe),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ u.createElement(U, V({
          innerRef: this.elementRef
        }, f, this.state));
      }
    }, Y(P, "defaultProps", {
      measureBeforeMount: !1
    }), Y(P, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), P;
  }
  return zo;
}
var qc;
function qp() {
  return qc || (qc = 1, function(u) {
    u.exports = Xc().default, u.exports.utils = wr(), u.exports.calculateUtils = Ns(), u.exports.Responsive = _p().default, u.exports.Responsive.utils = Qc(), u.exports.WidthProvider = Bp().default;
  }(_s)), _s.exports;
}
var Uc = qp();
const Up = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, nf = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, Fe = (u, c, l, d, R) => ({ i: u, x: c, y: l, w: d, h: R, minW: Math.min(d, 3), minH: 2, maxW: 12, maxH: 12 }), Oo = { lg: [Fe("activity-history", 0, 0, 3, 4), Fe("automations", 3, 0, 3, 4), Fe("backup-restore", 6, 0, 3, 4), Fe("security-status", 9, 0, 3, 3), Fe("access-control", 0, 5, 6, 3), Fe("alarm-configuration", 6, 4, 6, 8)], md: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 4, 0, 4, 4), Fe("backup-restore", 0, 4, 4, 4), Fe("access-control", 4, 4, 4, 3), Fe("alarm-configuration", 0, 8, 8, 8), Fe("security-status", 0, 16, 4, 3)], sm: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 0, 4, 4, 4), Fe("backup-restore", 0, 8, 4, 4), Fe("access-control", 0, 12, 4, 3), Fe("alarm-configuration", 0, 15, 4, 8), Fe("security-status", 0, 23, 4, 3)], xs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 3), Fe("alarm-configuration", 0, 15, 2, 8), Fe("security-status", 0, 23, 2, 3)], xxs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 3), Fe("alarm-configuration", 0, 15, 2, 8), Fe("security-status", 0, 23, 2, 3)] };
function Ps(u, c, l) {
  var d;
  return ((d = Object.entries(nf).map(([R, N]) => ({ size: R, distance: Math.abs(Math.min(N.w, l) - u) + Math.abs(N.h - c) })).sort((R, N) => R.distance - N.distance)[0]) == null ? void 0 : d.size) ?? "S";
}
function rf(u, c) {
  const l = nf[u];
  return { w: Math.min(l.w, c), h: l.h };
}
function Vp(u, c) {
  const l = Ps(u.w, u.h, c), d = rf(l, c);
  return { ...u, w: d.w, h: d.h, x: Math.max(0, Math.min(u.x, c - d.w)), size: l };
}
function Cs(u, c) {
  return u.some((l) => l.i !== c.i && c.x < l.x + l.w && c.x + c.w > l.x && c.y < l.y + l.h && c.y + c.h > l.y);
}
function $p(u, c, l) {
  for (let d = 0; d < 240; d++) for (let R = 0; R <= l - c.w; R++) {
    const N = { ...c, x: R, y: d };
    if (!Cs(u, N)) return N;
  }
  return { ...c, x: 0, y: Math.max(0, ...u.map((d) => d.y + d.h)) };
}
function vr(u) {
  const c = {};
  return Object.keys(cn).forEach((l) => {
    const d = cn[l], R = Array.isArray(u == null ? void 0 : u[l]) ? u[l] : [], N = new Map(R.map((W) => [W.i, W])), H = (Oo[l] || []).map((W) => {
      const Y = N.get(W.i);
      if (!Y) return { ...W };
      const q = Math.min(Math.max(1, Y.w), d);
      return { ...W, ...Y, w: q, x: Math.max(0, Math.min(Y.x, d - q)), y: Math.max(0, Y.y) };
    }), V = new Set(H.map((W) => W.i)), L = R.filter((W) => !V.has(W.i)).map((W) => ({ ...W, w: Math.min(Math.max(1, W.w), d), x: Math.max(0, Math.min(W.x, d - Math.min(W.w, d))), y: Math.max(0, W.y) }));
    c[l] = [...H, ...L];
  }), c;
}
class Gp {
  key(c, l) {
    return `argus:dashboard-layout:${c}:${l}`;
  }
  read(c, l) {
    try {
      const d = JSON.parse(localStorage.getItem(this.key(c, l)) || "null");
      return (d == null ? void 0 : d.layoutVersion) === 1 ? d : null;
    } catch {
      return null;
    }
  }
  write(c, l, d) {
    localStorage.setItem(this.key(c, l), JSON.stringify(d));
  }
  async load(c, l) {
    const d = this.read(c, l);
    return d ? vr(d.layouts) : null;
  }
  async save(c, l, d) {
    const R = this.read(c, l);
    this.write(c, l, { layoutVersion: 1, layouts: d, visibility: R == null ? void 0 : R.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(c, l) {
    var d;
    return ((d = this.read(c, l)) == null ? void 0 : d.visibility) ?? null;
  }
  async saveVisibility(c, l, d) {
    const R = this.read(c, l);
    this.write(c, l, { layoutVersion: 1, layouts: (R == null ? void 0 : R.layouts) ?? vr(null), visibility: d, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(c, l) {
    localStorage.removeItem(this.key(c, l));
  }
}
const Yp = Uc.WidthProvider(Uc.Responsive);
function Xp({ widget: u, node: c, editing: l, size: d, onSize: R, onHide: N, onReset: H }) {
  const V = ht.useRef(null);
  return ht.useLayoutEffect(() => {
    var L, W;
    (L = V.current) == null || L.appendChild(c), c.draggable = !1, (W = c.querySelector(":scope > .panel-edit-overlay")) == null || W.remove(), l ? c.setAttribute("inert", "") : c.removeAttribute("inert");
  }, [c, l]), /* @__PURE__ */ Ue.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ Ue.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ Ue.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${u.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ Ue.jsx("strong", { children: u.title }),
      /* @__PURE__ */ Ue.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ Ue.jsx("summary", { "aria-label": `Opciones de ${u.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ Ue.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ Ue.jsx("span", { children: "Tamaño" }),
          /* @__PURE__ */ Ue.jsx("div", { children: ["S", "M", "L", "XL"].map((L) => /* @__PURE__ */ Ue.jsx("button", { type: "button", className: L === d ? "active" : "", onClick: () => R(L), children: L }, L)) }),
          /* @__PURE__ */ Ue.jsx("button", { type: "button", onClick: H, children: "Restablecer widget" }),
          /* @__PURE__ */ Ue.jsx("button", { type: "button", onClick: N, children: "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ Ue.jsx("div", { className: "argus-widget__content", ref: V })
  ] });
}
function Qp({ widgets: u, nodes: c, storage: l, userId: d, dashboardId: R, onEditing: N, registerEditor: H }) {
  const V = ht.useMemo(() => Object.fromEntries(u.map(($) => [$.id, $.visible])), [u]), [L, W] = ht.useState(Oo), [Y, q] = ht.useState(V), [F, xe] = ht.useState(!1), [we, U] = ht.useState(!1), [P, v] = ht.useState("lg"), [a, h] = ht.useState(""), f = ht.useRef(Oo), p = ht.useRef(), y = ht.useRef(!1);
  ht.useEffect(() => {
    H(xe);
  }, [H]), ht.useEffect(() => {
    var ne;
    let $ = !0;
    return U(!1), Promise.all([l.load(d, R), (ne = l.loadVisibility) == null ? void 0 : ne.call(l, d, R)]).then(([te, b]) => {
      if (!$) return;
      const ie = vr(te);
      W(ie), f.current = ie, b && q({ ...V, ...b }), U(!0);
    }), () => {
      $ = !1;
    };
  }, [l, d, R, V]), ht.useEffect(() => {
    N(F), we && y.current && !F && l.save(d, R, f.current), y.current = F;
  }, [F, we, N, l, d, R]), ht.useEffect(() => {
    const $ = (ne) => {
      F && (ne.key === "Escape" ? (xe(!1), h("Edición finalizada")) : ne.key === "Enter" && ne.target === document.body && xe(!1));
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [F]), ht.useEffect(() => () => clearTimeout(p.current), []);
  const k = ($, ne = !1) => {
    W($), f.current = $, clearTimeout(p.current), p.current = window.setTimeout(() => l.save(d, R, $), ne ? 0 : 550);
  }, j = ($, ne) => {
    var b;
    const te = { ...Y, [$]: ne };
    q(te), (b = l.saveVisibility) == null || b.call(l, d, R, te), h(ne ? "Widget visible" : "Widget oculto");
  }, A = ($, ne, te) => {
    const b = f.current, ie = b[P] || [], K = ie.filter((ve) => ve.i !== $), _ = Cs(K, ne) ? $p(K, ne, cn[P]) : ne, M = { ...b, [P]: ie.map((ve) => ve.i === $ ? _ : ve) };
    k(M, !0), h(te);
  }, ee = ($, ne) => {
    const te = (f.current[P] || []).find((ie) => ie.i === $);
    if (!te) return;
    const b = rf(ne, cn[P]);
    A($, { ...te, ...b, x: Math.max(0, Math.min(te.x, cn[P] - b.w)) }, `Tamaño ${ne}`);
  }, ae = ($) => {
    const ne = (Oo[P] || []).find((te) => te.i === $);
    ne && A($, { ...ne }, "Widget restablecido");
  }, se = ($, ne, te) => {
    const b = Vp(te, cn[P]);
    A(te.i, b, `Tamaño ${Ps(b.w, b.h, cn[P])}`);
  }, oe = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await l.reset(d, R);
    const $ = vr(null);
    q(V), k($, !0), h("Diseño predeterminado restaurado");
  }, ge = L[P] || [];
  return we ? /* @__PURE__ */ Ue.jsxs("section", { className: `argus-dashboard ${F ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ Ue.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ Ue.jsx("button", { type: "button", onClick: () => xe(($) => !$), children: F ? "✓ Listo" : "✥ Editar tablero" }),
      F && /* @__PURE__ */ Ue.jsxs(Ue.Fragment, { children: [
        /* @__PURE__ */ Ue.jsx("button", { type: "button", onClick: oe, children: "Restablecer diseño" }),
        /* @__PURE__ */ Ue.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: u.filter(($) => Y[$.id] === !1).map(($) => /* @__PURE__ */ Ue.jsxs("button", { type: "button", onClick: () => j($.id, !0), children: [
          "Mostrar ",
          $.title
        ] }, $.id)) })
      ] })
    ] }),
    /* @__PURE__ */ Ue.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: a }),
    /* @__PURE__ */ Ue.jsx(Yp, { className: "argus-dashboard-grid", layouts: L, breakpoints: Up, cols: cn, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: F, isResizable: F, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: ($) => v($), onLayoutChange: ($, ne) => {
      F && (W(ne), f.current = ne);
    }, onResizeStop: se, onDragStop: ($, ne, te) => {
      const b = (f.current[P] || []).filter((ie) => ie.i !== te.i);
      if (Cs(b, te)) {
        W({ ...f.current }), h("Posición bloqueada por colisión");
        return;
      }
      A(te.i, te, "Posición guardada");
    }, useCSSTransforms: !0, children: u.filter(($) => Y[$.id] !== !1 && c.has($.id)).map(($) => {
      const ne = ge.find((b) => b.i === $.id), te = ne ? Ps(ne.w, ne.h, cn[P]) : $.size;
      return /* @__PURE__ */ Ue.jsx("div", { children: /* @__PURE__ */ Ue.jsx(Xp, { widget: $, node: c.get($.id), editing: F, size: te, onSize: (b) => ee($.id, b), onHide: () => j($.id, !1), onReset: () => ae($.id) }) }, $.id);
    }) })
  ] }) : /* @__PURE__ */ Ue.jsx("section", { className: "argus-dashboard", children: /* @__PURE__ */ Ue.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: "Cargando tablero…" }) });
}
const Vc = [
  { id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 },
  { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 },
  { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 },
  { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 },
  { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 },
  { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }
];
class Kp extends Gp {
  constructor(c) {
    super(), this.panel = c;
  }
  record() {
    var c, l;
    return ((l = (c = this.panel._ui) == null ? void 0 : c.dashboard) == null ? void 0 : l.react_layout_v2) || {};
  }
  async remote(c) {
    var H, V, L, W, Y;
    if (!this.panel._send) return;
    const d = { ...this.record(), ...c, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, R = { ...((H = this.panel._ui) == null ? void 0 : H.dashboard) || {}, react_layout_v2: d }, N = ((V = this.panel._dashboard) == null ? void 0 : V.entry_id) || ((Y = (W = (L = this.panel._dashboard) == null ? void 0 : L.entries) == null ? void 0 : W[0]) == null ? void 0 : Y.entry_id);
    await this.panel._send("argus/save_ui", { dashboard: R, ...N ? { entry_id: N } : {} }), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = R;
  }
  async load(c, l) {
    const d = this.record().layouts;
    return d ? vr(d) : super.load(c, l);
  }
  async save(c, l, d) {
    await super.save(c, l, d), await this.remote({ layouts: d });
  }
  async loadVisibility(c, l) {
    return this.record().visibility || await super.loadVisibility(c, l);
  }
  async saveVisibility(c, l, d) {
    await super.saveVisibility(c, l, d), await this.remote({ visibility: d });
  }
  async reset(c, l) {
    await super.reset(c, l), await this.remote({ layouts: vr(null), visibility: {} });
  }
}
function of(u) {
  var d, R, N, H;
  const c = (d = u.shadowRoot) == null ? void 0 : d.getElementById("edit-widgets-label");
  (R = (c == null ? void 0 : c.closest("button")) || c) == null || R.remove(), (N = u.shadowRoot) == null || N.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((V) => V.remove());
  let l = (H = u.shadowRoot) == null ? void 0 : H.getElementById("argus-react-editor-only");
  l || (l = document.createElement("style"), l.id = "argus-react-editor-only", l.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", u.shadowRoot.appendChild(l));
}
function Zp(u) {
  var V, L, W, Y, q, F, xe, we;
  of(u);
  const c = (V = u.shadowRoot) == null ? void 0 : V.getElementById("widget-grid"), l = ((L = u._dashboard) == null ? void 0 : L.entry_id) || ((q = (Y = (W = u._dashboard) == null ? void 0 : W.entries) == null ? void 0 : Y[0]) == null ? void 0 : q.entry_id);
  if (!c || !l || u._argusReactRoot) return;
  let d = u.shadowRoot.getElementById("argus-react-dashboard-style");
  d || (d = document.createElement("style"), d.id = "argus-react-dashboard-style", d.textContent = up + cp + fp, u.shadowRoot.appendChild(d));
  const R = /* @__PURE__ */ new Map();
  Vc.forEach((U) => {
    const P = u.shadowRoot.getElementById(U.nativeId);
    P && R.set(U.id, P);
  });
  const N = document.createElement("div");
  N.id = "argus-react-dashboard-root", c.appendChild(N);
  const H = ap.createRoot(N);
  u._argusReactRoot = H, H.render(/* @__PURE__ */ Ue.jsx(Qp, { widgets: Vc, nodes: R, storage: new Kp(u), userId: ((F = u._currentProfile) == null ? void 0 : F.id) || ((we = (xe = u._hass) == null ? void 0 : xe.user) == null ? void 0 : we.id) || "anonymous", dashboardId: l, onEditing: (U) => {
    u._widgetEditing = U, c.classList.toggle("editing", U);
  }, registerEditor: (U) => {
    u._argusReactSetEditing = U;
  } }));
}
function rh(u) {
  if (!u || u.__argusReactDashboard) return;
  u.__argusReactDashboard = !0;
  const c = u.prototype, l = c.connectedCallback, d = c._load;
  c.connectedCallback = function() {
    const R = l == null ? void 0 : l.call(this);
    return of(this), R;
  }, c._load = async function() {
    const R = await (d == null ? void 0 : d.call(this));
    return Zp(this), R;
  }, c._toggleWidgetEditing = function() {
    var R;
    (R = this._argusReactSetEditing) == null || R.call(this, !this._widgetEditing);
  };
}
export {
  rh as applyReactDashboardLayout
};
