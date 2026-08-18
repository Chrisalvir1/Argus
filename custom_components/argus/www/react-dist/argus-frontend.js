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
    var k = Object.getOwnPropertyDescriptor(a, f);
    Object.defineProperty(l, f, k.get ? k : {
      enumerable: !0,
      get: function() {
        return a[f];
      }
    });
  }), l;
}
var Ro = {}, xs = { exports: {} }, Rt = {}, ws = { exports: {} }, Ne = {};
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
  var a = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), I = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), B = Symbol.iterator;
  function G(w) {
    return w === null || typeof w != "object" ? null : (w = B && w[B] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var Se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, be = Object.assign, Q = {};
  function N(w, j, ye) {
    this.props = w, this.context = j, this.refs = Q, this.updater = ye || Se;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(w, j) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, j, "setState");
  }, N.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function v() {
  }
  v.prototype = N.prototype;
  function u(w, j, ye) {
    this.props = w, this.context = j, this.refs = Q, this.updater = ye || Se;
  }
  var h = u.prototype = new v();
  h.constructor = u, be(h, N.prototype), h.isPureReactComponent = !0;
  var d = Array.isArray, p = Object.prototype.hasOwnProperty, m = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(w, j, ye) {
    var we, Ce = {}, Pe = null, je = null;
    if (j != null) for (we in j.ref !== void 0 && (je = j.ref), j.key !== void 0 && (Pe = "" + j.key), j) p.call(j, we) && !R.hasOwnProperty(we) && (Ce[we] = j[we]);
    var Z = arguments.length - 2;
    if (Z === 1) Ce.children = ye;
    else if (1 < Z) {
      for (var ae = Array(Z), Re = 0; Re < Z; Re++) ae[Re] = arguments[Re + 2];
      Ce.children = ae;
    }
    if (w && w.defaultProps) for (we in Z = w.defaultProps, Z) Ce[we] === void 0 && (Ce[we] = Z[we]);
    return { $$typeof: a, type: w, key: Pe, ref: je, props: Ce, _owner: m.current };
  }
  function F(w, j) {
    return { $$typeof: a, type: w.type, key: j, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function te(w) {
    return typeof w == "object" && w !== null && w.$$typeof === a;
  }
  function le(w) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ye) {
      return j[ye];
    });
  }
  var ie = /\/+/g;
  function re(w, j) {
    return typeof w == "object" && w !== null && w.key != null ? le("" + w.key) : j.toString(36);
  }
  function me(w, j, ye, we, Ce) {
    var Pe = typeof w;
    (Pe === "undefined" || Pe === "boolean") && (w = null);
    var je = !1;
    if (w === null) je = !0;
    else switch (Pe) {
      case "string":
      case "number":
        je = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case a:
          case c:
            je = !0;
        }
    }
    if (je) return je = w, Ce = Ce(je), w = we === "" ? "." + re(je, 0) : we, d(Ce) ? (ye = "", w != null && (ye = w.replace(ie, "$&/") + "/"), me(Ce, j, ye, "", function(Re) {
      return Re;
    })) : Ce != null && (te(Ce) && (Ce = F(Ce, ye + (!Ce.key || je && je.key === Ce.key ? "" : ("" + Ce.key).replace(ie, "$&/") + "/") + w)), j.push(Ce)), 1;
    if (je = 0, we = we === "" ? "." : we + ":", d(w)) for (var Z = 0; Z < w.length; Z++) {
      Pe = w[Z];
      var ae = we + re(Pe, Z);
      je += me(Pe, j, ye, ae, Ce);
    }
    else if (ae = G(w), typeof ae == "function") for (w = ae.call(w), Z = 0; !(Pe = w.next()).done; ) Pe = Pe.value, ae = we + re(Pe, Z++), je += me(Pe, j, ye, ae, Ce);
    else if (Pe === "object") throw j = String(w), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return je;
  }
  function xe(w, j, ye) {
    if (w == null) return w;
    var we = [], Ce = 0;
    return me(w, we, "", "", function(Pe) {
      return j.call(ye, Pe, Ce++);
    }), we;
  }
  function pe(w) {
    if (w._status === -1) {
      var j = w._result;
      j = j(), j.then(function(ye) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ye);
      }, function(ye) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ye);
      }), w._status === -1 && (w._status = 0, w._result = j);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ue = { current: null }, Y = { transition: null }, W = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Y, ReactCurrentOwner: m };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ne.Children = { map: xe, forEach: function(w, j, ye) {
    xe(w, function() {
      j.apply(this, arguments);
    }, ye);
  }, count: function(w) {
    var j = 0;
    return xe(w, function() {
      j++;
    }), j;
  }, toArray: function(w) {
    return xe(w, function(j) {
      return j;
    }) || [];
  }, only: function(w) {
    if (!te(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Ne.Component = N, Ne.Fragment = l, Ne.Profiler = k, Ne.PureComponent = u, Ne.StrictMode = f, Ne.Suspense = T, Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, Ne.act = q, Ne.cloneElement = function(w, j, ye) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var we = be({}, w.props), Ce = w.key, Pe = w.ref, je = w._owner;
    if (j != null) {
      if (j.ref !== void 0 && (Pe = j.ref, je = m.current), j.key !== void 0 && (Ce = "" + j.key), w.type && w.type.defaultProps) var Z = w.type.defaultProps;
      for (ae in j) p.call(j, ae) && !R.hasOwnProperty(ae) && (we[ae] = j[ae] === void 0 && Z !== void 0 ? Z[ae] : j[ae]);
    }
    var ae = arguments.length - 2;
    if (ae === 1) we.children = ye;
    else if (1 < ae) {
      Z = Array(ae);
      for (var Re = 0; Re < ae; Re++) Z[Re] = arguments[Re + 2];
      we.children = Z;
    }
    return { $$typeof: a, type: w.type, key: Ce, ref: Pe, props: we, _owner: je };
  }, Ne.createContext = function(w) {
    return w = { $$typeof: I, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: z, _context: w }, w.Consumer = w;
  }, Ne.createElement = L, Ne.createFactory = function(w) {
    var j = L.bind(null, w);
    return j.type = w, j;
  }, Ne.createRef = function() {
    return { current: null };
  }, Ne.forwardRef = function(w) {
    return { $$typeof: U, render: w };
  }, Ne.isValidElement = te, Ne.lazy = function(w) {
    return { $$typeof: V, _payload: { _status: -1, _result: w }, _init: pe };
  }, Ne.memo = function(w, j) {
    return { $$typeof: A, type: w, compare: j === void 0 ? null : j };
  }, Ne.startTransition = function(w) {
    var j = Y.transition;
    Y.transition = {};
    try {
      w();
    } finally {
      Y.transition = j;
    }
  }, Ne.unstable_act = q, Ne.useCallback = function(w, j) {
    return ue.current.useCallback(w, j);
  }, Ne.useContext = function(w) {
    return ue.current.useContext(w);
  }, Ne.useDebugValue = function() {
  }, Ne.useDeferredValue = function(w) {
    return ue.current.useDeferredValue(w);
  }, Ne.useEffect = function(w, j) {
    return ue.current.useEffect(w, j);
  }, Ne.useId = function() {
    return ue.current.useId();
  }, Ne.useImperativeHandle = function(w, j, ye) {
    return ue.current.useImperativeHandle(w, j, ye);
  }, Ne.useInsertionEffect = function(w, j) {
    return ue.current.useInsertionEffect(w, j);
  }, Ne.useLayoutEffect = function(w, j) {
    return ue.current.useLayoutEffect(w, j);
  }, Ne.useMemo = function(w, j) {
    return ue.current.useMemo(w, j);
  }, Ne.useReducer = function(w, j, ye) {
    return ue.current.useReducer(w, j, ye);
  }, Ne.useRef = function(w) {
    return ue.current.useRef(w);
  }, Ne.useState = function(w) {
    return ue.current.useState(w);
  }, Ne.useSyncExternalStore = function(w, j, ye) {
    return ue.current.useSyncExternalStore(w, j, ye);
  }, Ne.useTransition = function() {
    return ue.current.useTransition();
  }, Ne.version = "18.3.1", Ne;
}
var yc;
function zt() {
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
    function c(Y, W) {
      var q = Y.length;
      Y.push(W);
      e: for (; 0 < q; ) {
        var w = q - 1 >>> 1, j = Y[w];
        if (0 < k(j, W)) Y[w] = W, Y[q] = j, q = w;
        else break e;
      }
    }
    function l(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function f(Y) {
      if (Y.length === 0) return null;
      var W = Y[0], q = Y.pop();
      if (q !== W) {
        Y[0] = q;
        e: for (var w = 0, j = Y.length, ye = j >>> 1; w < ye; ) {
          var we = 2 * (w + 1) - 1, Ce = Y[we], Pe = we + 1, je = Y[Pe];
          if (0 > k(Ce, q)) Pe < j && 0 > k(je, Ce) ? (Y[w] = je, Y[Pe] = q, w = Pe) : (Y[w] = Ce, Y[we] = q, w = we);
          else if (Pe < j && 0 > k(je, q)) Y[w] = je, Y[Pe] = q, w = Pe;
          else break e;
        }
      }
      return W;
    }
    function k(Y, W) {
      var q = Y.sortIndex - W.sortIndex;
      return q !== 0 ? q : Y.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var z = performance;
      a.unstable_now = function() {
        return z.now();
      };
    } else {
      var I = Date, U = I.now();
      a.unstable_now = function() {
        return I.now() - U;
      };
    }
    var T = [], A = [], V = 1, B = null, G = 3, Se = !1, be = !1, Q = !1, N = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(Y) {
      for (var W = l(A); W !== null; ) {
        if (W.callback === null) f(A);
        else if (W.startTime <= Y) f(A), W.sortIndex = W.expirationTime, c(T, W);
        else break;
        W = l(A);
      }
    }
    function d(Y) {
      if (Q = !1, h(Y), !be) if (l(T) !== null) be = !0, pe(p);
      else {
        var W = l(A);
        W !== null && ue(d, W.startTime - Y);
      }
    }
    function p(Y, W) {
      be = !1, Q && (Q = !1, v(L), L = -1), Se = !0;
      var q = G;
      try {
        for (h(W), B = l(T); B !== null && (!(B.expirationTime > W) || Y && !le()); ) {
          var w = B.callback;
          if (typeof w == "function") {
            B.callback = null, G = B.priorityLevel;
            var j = w(B.expirationTime <= W);
            W = a.unstable_now(), typeof j == "function" ? B.callback = j : B === l(T) && f(T), h(W);
          } else f(T);
          B = l(T);
        }
        if (B !== null) var ye = !0;
        else {
          var we = l(A);
          we !== null && ue(d, we.startTime - W), ye = !1;
        }
        return ye;
      } finally {
        B = null, G = q, Se = !1;
      }
    }
    var m = !1, R = null, L = -1, F = 5, te = -1;
    function le() {
      return !(a.unstable_now() - te < F);
    }
    function ie() {
      if (R !== null) {
        var Y = a.unstable_now();
        te = Y;
        var W = !0;
        try {
          W = R(!0, Y);
        } finally {
          W ? re() : (m = !1, R = null);
        }
      } else m = !1;
    }
    var re;
    if (typeof u == "function") re = function() {
      u(ie);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), xe = me.port2;
      me.port1.onmessage = ie, re = function() {
        xe.postMessage(null);
      };
    } else re = function() {
      N(ie, 0);
    };
    function pe(Y) {
      R = Y, m || (m = !0, re());
    }
    function ue(Y, W) {
      L = N(function() {
        Y(a.unstable_now());
      }, W);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, a.unstable_continueExecution = function() {
      be || Se || (be = !0, pe(p));
    }, a.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, a.unstable_getFirstCallbackNode = function() {
      return l(T);
    }, a.unstable_next = function(Y) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = G;
      }
      var q = G;
      G = W;
      try {
        return Y();
      } finally {
        G = q;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(Y, W) {
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
      var q = G;
      G = Y;
      try {
        return W();
      } finally {
        G = q;
      }
    }, a.unstable_scheduleCallback = function(Y, W, q) {
      var w = a.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? w + q : w) : q = w, Y) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = q + j, Y = { id: V++, callback: W, priorityLevel: Y, startTime: q, expirationTime: j, sortIndex: -1 }, q > w ? (Y.sortIndex = q, c(A, Y), l(T) === null && Y === l(A) && (Q ? (v(L), L = -1) : Q = !0, ue(d, q - w))) : (Y.sortIndex = j, c(T, Y), be || Se || (be = !0, pe(p))), Y;
    }, a.unstable_shouldYield = le, a.unstable_wrapCallback = function(Y) {
      var W = G;
      return function() {
        var q = G;
        G = W;
        try {
          return Y.apply(this, arguments);
        } finally {
          G = q;
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
  if (wc) return Rt;
  wc = 1;
  var a = zt(), c = cp();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = /* @__PURE__ */ new Set(), k = {};
  function z(e, t) {
    I(e, t), I(e + "Capture", t);
  }
  function I(e, t) {
    for (k[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var U = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), T = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, V = {}, B = {};
  function G(e) {
    return T.call(B, e) ? !0 : T.call(V, e) ? !1 : A.test(e) ? B[e] = !0 : (V[e] = !0, !1);
  }
  function Se(e, t, n, r) {
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
    if (t === null || typeof t > "u" || Se(e, t, n, r)) return !0;
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
  var v = /[\-:]([a-z])/g;
  function u(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      v,
      u
    );
    N[t] = new Q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(v, u);
    N[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(v, u);
    N[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = N.hasOwnProperty(t) ? N[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (be(t, n, i, r) && (n = null), r || i === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = Symbol.for("react.element"), m = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), le = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), xe = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, w;
  function j(e) {
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
        } catch (M) {
          var r = M;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (M) {
          r = M;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (M) {
          r = M;
        }
        e();
      }
    } catch (M) {
      if (M && r && typeof M.stack == "string") {
        for (var i = M.stack.split(`
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
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function Ce(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
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
      case R:
        return "Fragment";
      case m:
        return "Portal";
      case F:
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
  function je(e) {
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
  function Re(e) {
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
  function De(e) {
    e._valueTracker || (e._valueTracker = Re(e));
  }
  function Me(e) {
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
  function Dn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gn = null, jn = null, Zt = null;
  function wr(e) {
    if (e = Ur(e)) {
      if (typeof Gn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Hi(t), Gn(e.stateNode, e.type, t));
    }
  }
  function Sr(e) {
    jn ? Zt ? Zt.push(e) : Zt = [e] : jn = e;
  }
  function Yn() {
    if (jn) {
      var e = jn, t = Zt;
      if (Zt = jn = null, wr(e), t) for (e = 0; e < t.length; e++) wr(t[e]);
    }
  }
  function yi(e, t) {
    return e(t);
  }
  function Is() {
  }
  var Lo = !1;
  function As(e, t, n) {
    if (Lo) return e(t, n);
    Lo = !0;
    try {
      return yi(e, t, n);
    } finally {
      Lo = !1, (jn !== null || Zt !== null) && (Is(), Yn());
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
  if (U) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      Io = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    Io = !1;
  }
  function dd(e, t, n, r, i, o, s, g, S) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, M);
    } catch (K) {
      this.onError(K);
    }
  }
  var br = !1, vi = null, xi = !1, Ao = null, fd = { onError: function(e) {
    br = !0, vi = e;
  } };
  function pd(e, t, n, r, i, o, s, g, S) {
    br = !1, vi = null, dd.apply(fd, arguments);
  }
  function hd(e, t, n, r, i, o, s, g, S) {
    if (pd.apply(this, arguments), br) {
      if (br) {
        var M = vi;
        br = !1, vi = null;
      } else throw Error(l(198));
      xi || (xi = !0, Ao = M);
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
  var Wt = Math.clz32 ? Math.clz32 : kd, Sd = Math.log, _d = Math.LN2;
  function kd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sd(e) / _d | 0) | 0;
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
  function bd(e, t) {
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
      S === -1 ? (!(g & n) || g & r) && (i[s] = bd(g, t)) : S <= t && (e.expiredLanes |= g), o &= ~g;
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
  function Rr(e, t, n) {
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
  var Xs, Uo, Qs, Ks, Zs, qo = !1, Ei = [], dn = null, fn = null, pn = null, zr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), hn = [], zd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        zr.delete(t.pointerId);
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
        return zr.set(o, Or(zr.get(o) || null, e, t, n, r, i)), !0;
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
  function Ri(e) {
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
    Ri(e) && n.delete(t);
  }
  function Od() {
    qo = !1, dn !== null && Ri(dn) && (dn = null), fn !== null && Ri(fn) && (fn = null), pn !== null && Ri(pn) && (pn = null), zr.forEach(ta), Cr.forEach(ta);
  }
  function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qo || (qo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Od)));
  }
  function Dr(e) {
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
    for (dn !== null && Pr(dn, e), fn !== null && Pr(fn, e), pn !== null && Pr(pn, e), zr.forEach(t), Cr.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) ea(n), n.blockedOn === null && hn.shift();
  }
  var Xn = d.ReactCurrentBatchConfig, zi = !0;
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
    if (zi) {
      var i = Vo(e, t, n, r);
      if (i === null) ul(e, t, r, Ci, n), Js(e, r);
      else if (Cd(i, e, t, n, r)) r.stopPropagation();
      else if (Js(e, r), t & 4 && -1 < zd.indexOf(e)) {
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
    if (Ci = null, e = Dn(r), e = Nn(e), e !== null) if (t = Tn(e), t === null) e = null;
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
  function Di() {
    return !0;
  }
  function ia() {
    return !1;
  }
  function Ct(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(o) : o[g]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Di : ia, this.isPropagationStopped = ia, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Di);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Di);
    }, persist: function() {
    }, isPersistent: Di }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Yo = Ct(Qn), jr = q({}, Qn, { view: 0, detail: 0 }), jd = Ct(jr), Xo, Qo, Tr, ji = q({}, jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (Xo = e.screenX - Tr.screenX, Qo = e.screenY - Tr.screenY) : Qo = Xo = 0, Tr = e), Xo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qo;
  } }), oa = Ct(ji), Td = q({}, ji, { dataTransfer: 0 }), Nd = Ct(Td), Md = q({}, jr, { relatedTarget: 0 }), Ko = Ct(Md), Ld = q({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Id = Ct(Ld), Ad = q({}, Qn, { clipboardData: function(e) {
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
  var $d = q({}, jr, { key: function(e) {
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
  } }), Vd = Ct($d), Gd = q({}, ji, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sa = Ct(Gd), Yd = q({}, jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zo }), Xd = Ct(Yd), Qd = q({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kd = Ct(Qd), Zd = q({}, ji, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jd = Ct(Zd), ef = [9, 13, 27, 32], Jo = U && "CompositionEvent" in window, Nr = null;
  U && "documentMode" in document && (Nr = document.documentMode);
  var tf = U && "TextEvent" in window && !Nr, aa = U && (!Jo || Nr && 8 < Nr && 11 >= Nr), ua = " ", ca = !1;
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
  var Mr = null, Lr = null;
  function lf(e) {
    ja(e, 0);
  }
  function Ti(e) {
    var t = nr(e);
    if (Me(t)) return e;
  }
  function sf(e, t) {
    if (e === "change") return t;
  }
  var ga = !1;
  if (U) {
    var el;
    if (U) {
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
      ha(t, Lr, e, Dn(e)), As(lf, t);
    }
  }
  function af(e, t, n) {
    e === "focusin" ? (ya(), Mr = t, Lr = n, Mr.attachEvent("onpropertychange", va)) : e === "focusout" && ya();
  }
  function uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ti(Lr);
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
      if (!T.call(t, i) || !Ht(e[i], t[i])) return !1;
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
  var hf = U && "documentMode" in document && 11 >= document.documentMode, Zn = null, rl = null, Ar = null, il = !1;
  function ka(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    il || Zn == null || Zn !== Be(r) || (r = Zn, "selectionStart" in r && nl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ar && Ir(Ar, r) || (Ar = r, r = Ii(rl, "onSelect"), 0 < r.length && (t = new Yo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Ni("Animation", "AnimationEnd"), animationiteration: Ni("Animation", "AnimationIteration"), animationstart: Ni("Animation", "AnimationStart"), transitionend: Ni("Transition", "TransitionEnd") }, ol = {}, ba = {};
  U && (ba = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Mi(e) {
    if (ol[e]) return ol[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ba) return ol[e] = t[n];
    return e;
  }
  var Ea = Mi("animationend"), Ra = Mi("animationiteration"), za = Mi("animationstart"), Ca = Mi("transitionend"), Oa = /* @__PURE__ */ new Map(), Pa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    Oa.set(e, t), z(t, [e]);
  }
  for (var ll = 0; ll < Pa.length; ll++) {
    var sl = Pa[ll], gf = sl.toLowerCase(), mf = sl[0].toUpperCase() + sl.slice(1);
    mn(gf, "on" + mf);
  }
  mn(Ea, "onAnimationEnd"), mn(Ra, "onAnimationIteration"), mn(za, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Ca, "onTransitionEnd"), I("onMouseEnter", ["mouseout", "mouseover"]), I("onMouseLeave", ["mouseout", "mouseover"]), I("onPointerEnter", ["pointerout", "pointerover"]), I("onPointerLeave", ["pointerout", "pointerover"]), z("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), z("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), z("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), z("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), z("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), z("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Da(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, hd(r, t, void 0, e), e.currentTarget = null;
  }
  function ja(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var g = r[s], S = g.instance, M = g.currentTarget;
          if (g = g.listener, S !== o && i.isPropagationStopped()) break e;
          Da(i, g, M), o = S;
        }
        else for (s = 0; s < r.length; s++) {
          if (g = r[s], S = g.instance, M = g.currentTarget, g = g.listener, S !== o && i.isPropagationStopped()) break e;
          Da(i, g, M), o = S;
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
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Li]) {
      e[Li] = !0, f.forEach(function(n) {
        n !== "selectionchange" && (yf.has(n) || al(n, !1, e), al(n, !0, e));
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
      var M = o, K = Dn(n), J = [];
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
            case Ra:
            case za:
              ce = Id;
              break;
            case Ca:
              ce = Kd;
              break;
            case "scroll":
              ce = jd;
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
          for (var b = M, D; b !== null; ) {
            D = b;
            var ne = D.stateNode;
            if (D.tag === 5 && ne !== null && (D = ne, O !== null && (ne = _r(b, O), ne != null && he.push(Fr(b, ne, D)))), it) break;
            b = b.return;
          }
          0 < he.length && (X = new ce(X, fe, null, n, K), J.push({ event: X, listeners: he }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (X = e === "mouseover" || e === "pointerover", ce = e === "mouseout" || e === "pointerout", X && n !== Vt && (fe = n.relatedTarget || n.fromElement) && (Nn(fe) || fe[Jt])) break e;
          if ((ce || X) && (X = K.window === K ? K : (X = K.ownerDocument) ? X.defaultView || X.parentWindow : window, ce ? (fe = n.relatedTarget || n.toElement, ce = M, fe = fe ? Nn(fe) : null, fe !== null && (it = Tn(fe), fe !== it || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ce = null, fe = M), ce !== fe)) {
            if (he = oa, ne = "onMouseLeave", O = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (he = sa, ne = "onPointerLeave", O = "onPointerEnter", b = "pointer"), it = ce == null ? X : nr(ce), D = fe == null ? X : nr(fe), X = new he(ne, b + "leave", ce, n, K), X.target = it, X.relatedTarget = D, ne = null, Nn(K) === M && (he = new he(O, b + "enter", fe, n, K), he.target = D, he.relatedTarget = it, ne = he), it = ne, ce && fe) t: {
              for (he = ce, O = fe, b = 0, D = he; D; D = er(D)) b++;
              for (D = 0, ne = O; ne; ne = er(ne)) D++;
              for (; 0 < b - D; ) he = er(he), b--;
              for (; 0 < D - b; ) O = er(O), D--;
              for (; b--; ) {
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
          if (X = M ? nr(M) : window, ce = X.nodeName && X.nodeName.toLowerCase(), ce === "select" || ce === "input" && X.type === "file") var ve = sf;
          else if (pa(X)) if (ga) ve = df;
          else {
            ve = uf;
            var _e = af;
          }
          else (ce = X.nodeName) && ce.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (ve = cf);
          if (ve && (ve = ve(e, M))) {
            ha(J, ve, n, K);
            break e;
          }
          _e && _e(e, X, M), e === "focusout" && (_e = X._wrapperState) && _e.controlled && X.type === "number" && $(X, "number", X.value);
        }
        switch (_e = M ? nr(M) : window, e) {
          case "focusin":
            (pa(_e) || _e.contentEditable === "true") && (Zn = _e, rl = M, Ar = null);
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
            il = !1, ka(J, n, K);
            break;
          case "selectionchange":
            if (hf) break;
          case "keydown":
          case "keyup":
            ka(J, n, K);
        }
        var ke;
        if (Jo) e: {
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
        else Kn ? da(e, n) && (ze = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ze = "onCompositionStart");
        ze && (aa && n.locale !== "ko" && (Kn || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Kn && (ke = ra()) : (gn = K, Go = "value" in gn ? gn.value : gn.textContent, Kn = !0)), _e = Ii(M, ze), 0 < _e.length && (ze = new la(ze, e, null, n, K), J.push({ event: ze, listeners: _e }), ke ? ze.data = ke : (ke = fa(n), ke !== null && (ze.data = ke)))), (ke = tf ? nf(e, n) : rf(e, n)) && (M = Ii(M, "onBeforeInput"), 0 < M.length && (K = new la("onBeforeInput", "beforeinput", null, n, K), J.push({ event: K, listeners: M }), K.data = ke));
      }
      ja(J, t);
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
      var g = n, S = g.alternate, M = g.stateNode;
      if (S !== null && S === r) break;
      g.tag === 5 && M !== null && (g = M, i ? (S = _r(n, o), S != null && s.unshift(Fr(n, S, g))) : i || (S = _r(n, o), S != null && s.push(Fr(n, S, g)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var vf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
  function Ma(e) {
    return (typeof e == "string" ? e : "" + e).replace(vf, `
`).replace(xf, "");
  }
  function Ai(e, t, n) {
    if (t = Ma(t), Ma(e) !== t && n) throw Error(l(425));
  }
  function Wi() {
  }
  var cl = null, dl = null;
  function fl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pl = typeof setTimeout == "function" ? setTimeout : void 0, wf = typeof clearTimeout == "function" ? clearTimeout : void 0, La = typeof Promise == "function" ? Promise : void 0, Sf = typeof queueMicrotask == "function" ? queueMicrotask : typeof La < "u" ? function(e) {
    return La.resolve(null).then(e).catch(_f);
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
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Br = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, gl = "__reactEvents$" + tr, kf = "__reactListeners$" + tr, bf = "__reactHandles$" + tr;
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
    for (var i in r) if (!(i in t)) throw Error(l(108, je(e) || "Unknown", i));
    return q({}, n, r);
  }
  function Bi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Mn = gt.current, Ge(gt, e), Ge(St, St.current), !0;
  }
  function Ha(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Wa(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, Xe(St), Xe(gt), Ge(gt, e)) : Xe(St), Ge(St, n);
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
  var or = [], lr = 0, qi = null, $i = 0, jt = [], Tt = 0, Ln = null, tn = 1, nn = "";
  function In(e, t) {
    or[lr++] = $i, or[lr++] = qi, qi = e, $i = t;
  }
  function Ba(e, t, n) {
    jt[Tt++] = tn, jt[Tt++] = nn, jt[Tt++] = Ln, Ln = e;
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
    for (; e === Ln; ) Ln = jt[--Tt], jt[Tt] = null, nn = jt[--Tt], jt[Tt] = null, tn = jt[--Tt], jt[Tt] = null;
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
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ot = e, Pt = null, !0) : !1;
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
  var Rf = d.ReactCurrentBatchConfig;
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
    function t(O, b) {
      if (e) {
        var D = O.deletions;
        D === null ? (O.deletions = [b], O.flags |= 16) : D.push(b);
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
    function o(O, b, D) {
      return O.index = D, e ? (D = O.alternate, D !== null ? (D = D.index, D < b ? (O.flags |= 2, b) : D) : (O.flags |= 2, b)) : (O.flags |= 1048576, b);
    }
    function s(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function g(O, b, D, ne) {
      return b === null || b.tag !== 6 ? (b = ps(D, O.mode, ne), b.return = O, b) : (b = i(b, D), b.return = O, b);
    }
    function S(O, b, D, ne) {
      var ve = D.type;
      return ve === R ? K(O, b, D.props.children, ne, D.key) : b !== null && (b.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && Ga(ve) === b.type) ? (ne = i(b, D.props), ne.ref = qr(O, b, D), ne.return = O, ne) : (ne = vo(D.type, D.key, D.props, null, O.mode, ne), ne.ref = qr(O, b, D), ne.return = O, ne);
    }
    function M(O, b, D, ne) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== D.containerInfo || b.stateNode.implementation !== D.implementation ? (b = hs(D, O.mode, ne), b.return = O, b) : (b = i(b, D.children || []), b.return = O, b);
    }
    function K(O, b, D, ne, ve) {
      return b === null || b.tag !== 7 ? (b = $n(D, O.mode, ne, ve), b.return = O, b) : (b = i(b, D), b.return = O, b);
    }
    function J(O, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = ps("" + b, O.mode, D), b.return = O, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case p:
            return D = vo(b.type, b.key, b.props, null, O.mode, D), D.ref = qr(O, null, b), D.return = O, D;
          case m:
            return b = hs(b, O.mode, D), b.return = O, b;
          case pe:
            var ne = b._init;
            return J(O, ne(b._payload), D);
        }
        if (oe(b) || W(b)) return b = $n(b, O.mode, D, null), b.return = O, b;
        Gi(O, b);
      }
      return null;
    }
    function X(O, b, D, ne) {
      var ve = b !== null ? b.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ve !== null ? null : g(O, b, "" + D, ne);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case p:
            return D.key === ve ? S(O, b, D, ne) : null;
          case m:
            return D.key === ve ? M(O, b, D, ne) : null;
          case pe:
            return ve = D._init, X(
              O,
              b,
              ve(D._payload),
              ne
            );
        }
        if (oe(D) || W(D)) return ve !== null ? null : K(O, b, D, ne, null);
        Gi(O, D);
      }
      return null;
    }
    function ce(O, b, D, ne, ve) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return O = O.get(D) || null, g(b, O, "" + ne, ve);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case p:
            return O = O.get(ne.key === null ? D : ne.key) || null, S(b, O, ne, ve);
          case m:
            return O = O.get(ne.key === null ? D : ne.key) || null, M(b, O, ne, ve);
          case pe:
            var _e = ne._init;
            return ce(O, b, D, _e(ne._payload), ve);
        }
        if (oe(ne) || W(ne)) return O = O.get(D) || null, K(b, O, ne, ve, null);
        Gi(b, ne);
      }
      return null;
    }
    function fe(O, b, D, ne) {
      for (var ve = null, _e = null, ke = b, ze = b = 0, dt = null; ke !== null && ze < D.length; ze++) {
        ke.index > ze ? (dt = ke, ke = null) : dt = ke.sibling;
        var He = X(O, ke, D[ze], ne);
        if (He === null) {
          ke === null && (ke = dt);
          break;
        }
        e && ke && He.alternate === null && t(O, ke), b = o(He, b, ze), _e === null ? ve = He : _e.sibling = He, _e = He, ke = dt;
      }
      if (ze === D.length) return n(O, ke), Ze && In(O, ze), ve;
      if (ke === null) {
        for (; ze < D.length; ze++) ke = J(O, D[ze], ne), ke !== null && (b = o(ke, b, ze), _e === null ? ve = ke : _e.sibling = ke, _e = ke);
        return Ze && In(O, ze), ve;
      }
      for (ke = r(O, ke); ze < D.length; ze++) dt = ce(ke, O, ze, D[ze], ne), dt !== null && (e && dt.alternate !== null && ke.delete(dt.key === null ? ze : dt.key), b = o(dt, b, ze), _e === null ? ve = dt : _e.sibling = dt, _e = dt);
      return e && ke.forEach(function(On) {
        return t(O, On);
      }), Ze && In(O, ze), ve;
    }
    function he(O, b, D, ne) {
      var ve = W(D);
      if (typeof ve != "function") throw Error(l(150));
      if (D = ve.call(D), D == null) throw Error(l(151));
      for (var _e = ve = null, ke = b, ze = b = 0, dt = null, He = D.next(); ke !== null && !He.done; ze++, He = D.next()) {
        ke.index > ze ? (dt = ke, ke = null) : dt = ke.sibling;
        var On = X(O, ke, He.value, ne);
        if (On === null) {
          ke === null && (ke = dt);
          break;
        }
        e && ke && On.alternate === null && t(O, ke), b = o(On, b, ze), _e === null ? ve = On : _e.sibling = On, _e = On, ke = dt;
      }
      if (He.done) return n(
        O,
        ke
      ), Ze && In(O, ze), ve;
      if (ke === null) {
        for (; !He.done; ze++, He = D.next()) He = J(O, He.value, ne), He !== null && (b = o(He, b, ze), _e === null ? ve = He : _e.sibling = He, _e = He);
        return Ze && In(O, ze), ve;
      }
      for (ke = r(O, ke); !He.done; ze++, He = D.next()) He = ce(ke, O, ze, He.value, ne), He !== null && (e && He.alternate !== null && ke.delete(He.key === null ? ze : He.key), b = o(He, b, ze), _e === null ? ve = He : _e.sibling = He, _e = He);
      return e && ke.forEach(function(op) {
        return t(O, op);
      }), Ze && In(O, ze), ve;
    }
    function it(O, b, D, ne) {
      if (typeof D == "object" && D !== null && D.type === R && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case p:
            e: {
              for (var ve = D.key, _e = b; _e !== null; ) {
                if (_e.key === ve) {
                  if (ve = D.type, ve === R) {
                    if (_e.tag === 7) {
                      n(O, _e.sibling), b = i(_e, D.props.children), b.return = O, O = b;
                      break e;
                    }
                  } else if (_e.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === pe && Ga(ve) === _e.type) {
                    n(O, _e.sibling), b = i(_e, D.props), b.ref = qr(O, _e, D), b.return = O, O = b;
                    break e;
                  }
                  n(O, _e);
                  break;
                } else t(O, _e);
                _e = _e.sibling;
              }
              D.type === R ? (b = $n(D.props.children, O.mode, ne, D.key), b.return = O, O = b) : (ne = vo(D.type, D.key, D.props, null, O.mode, ne), ne.ref = qr(O, b, D), ne.return = O, O = ne);
            }
            return s(O);
          case m:
            e: {
              for (_e = D.key; b !== null; ) {
                if (b.key === _e) if (b.tag === 4 && b.stateNode.containerInfo === D.containerInfo && b.stateNode.implementation === D.implementation) {
                  n(O, b.sibling), b = i(b, D.children || []), b.return = O, O = b;
                  break e;
                } else {
                  n(O, b);
                  break;
                }
                else t(O, b);
                b = b.sibling;
              }
              b = hs(D, O.mode, ne), b.return = O, O = b;
            }
            return s(O);
          case pe:
            return _e = D._init, it(O, b, _e(D._payload), ne);
        }
        if (oe(D)) return fe(O, b, D, ne);
        if (W(D)) return he(O, b, D, ne);
        Gi(O, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, b !== null && b.tag === 6 ? (n(O, b.sibling), b = i(b, D), b.return = O, O = b) : (n(O, b), b = ps(D, O.mode, ne), b.return = O, O = b), s(O)) : n(O, b);
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
  function Rl(e, t, n) {
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
  var An = null;
  function zl(e) {
    An === null ? An = [e] : An.push(e);
  }
  function Qa(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, zl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rn(e, r);
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
    return i = r.interleaved, i === null ? (t.next = t, zl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
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
      var S = g, M = S.next;
      S.next = null, s === null ? o = M : s.next = M, s = S;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, g = K.lastBaseUpdate, g !== s && (g === null ? K.firstBaseUpdate = M : g.next = M, K.lastBaseUpdate = S));
    }
    if (o !== null) {
      var J = i.baseState;
      s = 0, K = M = S = null, g = o;
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
        } else ce = { eventTime: ce, lane: X, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, K === null ? (M = K = ce, S = J) : K = K.next = ce, s |= X;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null) break;
          X = g, g = X.next, X.next = null, i.lastBaseUpdate = X, i.shared.pending = null;
        }
      } while (!0);
      if (K === null && (S = J), i.baseState = S, i.firstBaseUpdate = M, i.lastBaseUpdate = K, t = i.shared.interleaved, t !== null) {
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
  var Dl = [];
  function jl() {
    for (var e = 0; e < Dl.length; e++) Dl[e]._workInProgressVersionPrimary = null;
    Dl.length = 0;
  }
  var Ji = d.ReactCurrentDispatcher, Tl = d.ReactCurrentBatchConfig, Hn = 0, et = null, lt = null, ut = null, eo = !1, Yr = !1, Xr = 0, zf = 0;
  function mt() {
    throw Error(l(321));
  }
  function Nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function Ml(e, t, n, r, i, o) {
    if (Hn = o, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ji.current = e === null || e.memoizedState === null ? Df : jf, e = n(r, i), Yr) {
      o = 0;
      do {
        if (Yr = !1, Xr = 0, 25 <= o) throw Error(l(301));
        o += 1, ut = lt = null, t.updateQueue = null, Ji.current = Tf, e = n(r, i);
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
  function Il(e) {
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
      var g = s = null, S = null, M = o;
      do {
        var K = M.lane;
        if ((Hn & K) === K) S !== null && (S = S.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), r = M.hasEagerState ? M.eagerState : e(r, M.action);
        else {
          var J = {
            lane: K,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          S === null ? (g = S = J, s = r) : S = S.next = J, et.lanes |= K, Fn |= K;
        }
        M = M.next;
      } while (M !== null && M !== o);
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
  function Al(e) {
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
    return Hn & 21 ? (Ht(n, t) || (n = Gs(), et.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n);
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
    return Mt().memoizedState;
  }
  function Of(e, t, n) {
    var r = Rn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xu(e)) wu(t, n);
    else if (n = Qa(e, t, n, r), n !== null) {
      var i = wt();
      $t(n, e, r, i), Su(n, t, r);
    }
  }
  function Pf(e, t, n) {
    var r = Rn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (xu(e)) wu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var s = t.lastRenderedState, g = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = g, Ht(g, s)) {
          var S = t.interleaved;
          S === null ? (i.next = i, zl(t)) : (i.next = S.next, S.next = i), t.interleaved = i;
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
    } else n = zf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, jf = {
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
      var t = Mt();
      return yu(t, lt.memoizedState, e);
    },
    useTransition: function() {
      var e = Il(Qr)[0], t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: tu,
    useSyncExternalStore: nu,
    useId: vu,
    unstable_isNewReconciler: !1
  }, Tf = { readContext: Nt, useCallback: gu, useContext: Nt, useEffect: Wl, useImperativeHandle: hu, useInsertionEffect: du, useLayoutEffect: fu, useMemo: mu, useReducer: Al, useRef: uu, useState: function() {
    return Al(Qr);
  }, useDebugValue: Hl, useDeferredValue: function(e) {
    var t = Mt();
    return lt === null ? t.memoizedState = e : yu(t, lt.memoizedState, e);
  }, useTransition: function() {
    var e = Al(Qr)[0], t = Mt().memoizedState;
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
    var r = wt(), i = Rn(e), o = on(r, i);
    o.payload = t, n != null && (o.callback = n), t = _n(e, o, i), t !== null && ($t(t, e, i, r), Qi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = Rn(e), o = on(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = _n(e, o, i), t !== null && ($t(t, e, i, r), Qi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = wt(), r = Rn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = _n(e, i, r), t !== null && ($t(t, e, r, n), Qi(t, e, r));
  } };
  function _u(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ir(n, r) || !Ir(i, o) : !0;
  }
  function ku(e, t, n) {
    var r = !1, i = xn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Nt(o) : (i = _t(t) ? Mn : gt.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : xn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function bu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && io.enqueueReplaceState(t, t.state, null);
  }
  function Bl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Cl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Nt(o) : (o = _t(t) ? Mn : gt.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Fl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && io.enqueueReplaceState(i, i.state, null), Ki(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
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
  function Ru(e, t, n) {
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
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function zu(e, t, n) {
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
  var Mf = d.ReactCurrentOwner, kt = !1;
  function xt(e, t, n, r) {
    t.child = e === null ? Xa(t, null, n, r) : ar(t, e.child, n, r);
  }
  function Pu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = Ml(e, t, n, r, o, i), n = Ll(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && n && vl(t), t.flags |= 1, xt(e, t, r, i), t.child);
  }
  function Du(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !fs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ju(e, t, o, r, i)) : (e = vo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ir, n(s, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Cn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ju(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ir(o, r) && e.ref === t.ref) if (kt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (kt = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return $l(e, t, n, r, i);
  }
  function Tu(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(hr, Dt), Dt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ge(hr, Dt), Dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ge(hr, Dt), Dt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ge(hr, Dt), Dt |= r;
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
      Bi(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) lo(e, t), ku(t, n, r), Bl(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, g = t.memoizedProps;
      s.props = g;
      var S = s.context, M = n.contextType;
      typeof M == "object" && M !== null ? M = Nt(M) : (M = _t(n) ? Mn : gt.current, M = ir(t, M));
      var K = n.getDerivedStateFromProps, J = typeof K == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      J || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== r || S !== M) && bu(t, s, r, M), Sn = !1;
      var X = t.memoizedState;
      s.state = X, Ki(t, r, s, i), S = t.memoizedState, g !== r || X !== S || St.current || Sn ? (typeof K == "function" && (Fl(t, n, K, r), S = t.memoizedState), (g = Sn || _u(t, n, g, r, X, S, M)) ? (J || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = M, r = g) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Ka(e, t), g = t.memoizedProps, M = t.type === t.elementType ? g : Bt(t.type, g), s.props = M, J = t.pendingProps, X = s.context, S = n.contextType, typeof S == "object" && S !== null ? S = Nt(S) : (S = _t(n) ? Mn : gt.current, S = ir(t, S));
      var ce = n.getDerivedStateFromProps;
      (K = typeof ce == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== J || X !== S) && bu(t, s, r, S), Sn = !1, X = t.memoizedState, s.state = X, Ki(t, r, s, i);
      var fe = t.memoizedState;
      g !== J || X !== fe || St.current || Sn ? (typeof ce == "function" && (Fl(t, n, ce, r), fe = t.memoizedState), (M = Sn || _u(t, n, M, r, X, fe, S) || !1) ? (K || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, fe, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, fe, S)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = fe), s.props = r, s.state = fe, s.context = S, r = M) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && X === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vl(e, t, n, r, o, i);
  }
  function Vl(e, t, n, r, i, o) {
    Nu(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Ha(t, n, !1), ln(e, t, o);
    r = t.stateNode, Mf.current = t;
    var g = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, g, o)) : xt(e, t, g, o), t.memoizedState = r.state, i && Ha(t, n, !0), t.child;
  }
  function Lu(e) {
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
    if (i = e.memoizedState, i !== null && (g = i.dehydrated, g !== null)) return Lf(e, t, s, r, g, i, n);
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
  function Lf(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Ul(Error(l(422))), oo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = xo({ mode: "visible", children: r.children }, i, 0, null), o = $n(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Yl(s), t.memoizedState = Gl, o);
    if (!(t.mode & 1)) return oo(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var g = r.dgst;
      return r = g, o = Error(l(419)), r = Ul(o, r, void 0), oo(e, t, s, r);
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
      return ds(), r = Ul(Error(l(421))), oo(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xf.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Pt = yn(i.nextSibling), Ot = t, Ze = !0, Ft = null, e !== null && (jt[Tt++] = tn, jt[Tt++] = nn, jt[Tt++] = Ln, tn = e.id, nn = e.overflow, Ln = t), t = Xl(t, r.children), t.flags |= 4096, t);
  }
  function Wu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Rl(e.return, t, n);
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
        Lu(t), sr();
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
      for (M in i) if (!r.hasOwnProperty(M) && i.hasOwnProperty(M) && i[M] != null) if (M === "style") {
        var g = i[M];
        for (s in g) g.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (k.hasOwnProperty(M) ? o || (o = []) : (o = o || []).push(M, null));
      for (M in r) {
        var S = r[M];
        if (g = i?.[M], r.hasOwnProperty(M) && S !== g && (S != null || g != null)) if (M === "style") if (g) {
          for (s in g) !g.hasOwnProperty(s) || S && S.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in S) S.hasOwnProperty(s) && g[s] !== S[s] && (n || (n = {}), n[s] = S[s]);
        } else n || (o || (o = []), o.push(
          M,
          n
        )), n = S;
        else M === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, g = g ? g.__html : void 0, S != null && g !== S && (o = o || []).push(M, S)) : M === "children" ? typeof S != "string" && typeof S != "number" || (o = o || []).push(M, "" + S) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (k.hasOwnProperty(M) ? (S != null && M === "onScroll" && Ye("scroll", e), o || g === S || (o = [])) : (o = o || []).push(M, S));
      }
      n && (o = o || []).push("style", n);
      var M = o;
      (t.updateQueue = M) && (t.flags |= 4);
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
        return r = t.stateNode, dr(), Xe(St), Xe(gt), jl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (as(Ft), Ft = null))), Kl(e, t), yt(t), null;
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
              ), i = ["children", "" + g]) : k.hasOwnProperty(s) && g != null && s === "onScroll" && Ye("scroll", r);
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
                o === "style" ? Ie(e, S) : o === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && P(e, S)) : o === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && H(e, S) : typeof S == "number" && H(e, "" + S) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (k.hasOwnProperty(o) ? S != null && o === "onScroll" && Ye("scroll", e) : S != null && h(e, o, S, s));
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
        return cs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Dt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
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
        return dr(), Xe(St), Xe(gt), jl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
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
    if (cl = zi, e = _a(), nl(e)) {
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
          var s = 0, g = -1, S = -1, M = 0, K = 0, J = e, X = null;
          t: for (; ; ) {
            for (var ce; J !== n || i !== 0 && J.nodeType !== 3 || (g = s + i), J !== o || r !== 0 && J.nodeType !== 3 || (S = s + r), J.nodeType === 3 && (s += J.nodeValue.length), (ce = J.firstChild) !== null; )
              X = J, J = ce;
            for (; ; ) {
              if (J === e) break t;
              if (X === n && ++M === i && (g = s), X === o && ++K === r && (S = s), (ce = J.nextSibling) !== null) break;
              J = X, X = J.parentNode;
            }
            J = ce;
          }
          n = g === -1 || S === -1 ? null : { start: g, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (dl = { focusedElem: e, selectionRange: n }, zi = !1, de = t; de !== null; ) if (t = de, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, de = e;
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
              var he = fe.memoizedProps, it = fe.memoizedState, O = t.stateNode, b = O.getSnapshotBeforeUpdate(t.elementType === t.type ? he : Bt(t.type, he), it);
              O.__reactInternalSnapshotBeforeUpdate = b;
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
    t !== null && (e.alternate = null, $u(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Br], delete t[gl], delete t[kf], delete t[bf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
        pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n), Dr(e)) : hl(pt, n.stateNode));
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
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && Zl(n, t, s), i = i.next;
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
      } catch (M) {
        tt(i, t, M);
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
            var M = At(g, o);
            for (s = 0; s < S.length; s += 2) {
              var K = S[s], J = S[s + 1];
              K === "style" ? Ie(i, J) : K === "dangerouslySetInnerHTML" ? P(i, J) : K === "children" ? H(i, J) : h(i, K, J, M);
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
          Dr(t.containerInfo);
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
        if (K = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (M = vt) || K, qt(t, e), vt = M) : qt(t, e), Kt(e), r & 8192) {
          if (M = e.memoizedState !== null, (e.stateNode.isHidden = M) && !K && e.mode & 1) for (de = e, K = e.child; K !== null; ) {
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
                  i = J.stateNode, M ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (g = J.stateNode, S = J.memoizedProps.style, s = S != null && S.hasOwnProperty("display") ? S.display : null, g.style.display = Le("display", s));
                } catch (he) {
                  tt(e, e.return, he);
                }
              }
            } else if (J.tag === 6) {
              if (K === null) try {
                J.stateNode.nodeValue = M ? "" : J.memoizedProps;
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
          var M = vt;
          if (so = s, (vt = S) && !M) for (de = i; de !== null; ) s = de, S = s.child, s.tag === 22 && s.memoizedState !== null ? ec(i) : S !== null ? (S.return = s, de = S) : ec(i);
          for (; o !== null; ) de = o, Ku(o), o = o.sibling;
          de = i, so = g, vt = M;
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
                var M = t.alternate;
                if (M !== null) {
                  var K = M.memoizedState;
                  if (K !== null) {
                    var J = K.dehydrated;
                    J !== null && Dr(J);
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
  var Uf = Math.ceil, uo = d.ReactCurrentDispatcher, ns = d.ReactCurrentOwner, Lt = d.ReactCurrentBatchConfig, We = 0, ct = null, ot = null, ht = 0, Dt = 0, hr = vn(0), st = 0, ei = null, Fn = 0, co = 0, rs = 0, ti = null, bt = null, is = 0, gr = 1 / 0, sn = null, fo = !1, os = null, bn = null, po = !1, En = null, ho = 0, ni = 0, ls = null, go = -1, mo = 0;
  function wt() {
    return We & 6 ? rt() : go !== -1 ? go : go = rt();
  }
  function Rn(e) {
    return e.mode & 1 ? We & 2 && ht !== 0 ? ht & -ht : Rf.transition !== null ? (mo === 0 && (mo = Gs()), mo) : (e = qe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : na(e.type)), e) : 1;
  }
  function $t(e, t, n, r) {
    if (50 < ni) throw ni = 0, ls = null, Error(l(185));
    Rr(e, n, r), (!(We & 2) || e !== ct) && (e === ct && (!(We & 2) && (co |= n), st === 4 && zn(e, ht)), Et(e, r), n === 1 && We === 0 && !(t.mode & 1) && (gr = rt() + 500, Ui && wn()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    Ed(e, t);
    var r = bi(e, e === ct ? ht : 0);
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
    var r = bi(e, e === ct ? ht : 0);
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
      bl(), uo.current = o, We = i, ot !== null ? t = 0 : (ct = null, ht = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (i = Ho(e), i !== 0 && (r = i, t = ss(e, i))), t === 1) throw n = ei, Un(e, 0), zn(e, r), Et(e, rt()), n;
      if (t === 6) zn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !qf(i) && (t = yo(e, r), t === 2 && (o = Ho(e), o !== 0 && (r = o, t = ss(e, o))), t === 1)) throw n = ei, Un(e, 0), zn(e, r), Et(e, rt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            qn(e, bt, sn);
            break;
          case 3:
            if (zn(e, r), (r & 130023424) === r && (t = is + 500 - rt(), 10 < t)) {
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
            if (zn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - Wt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = rt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uf(r / 1960)) - r, 10 < r) {
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
  function zn(e, t) {
    for (t &= ~rs, t &= ~co, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function nc(e) {
    if (We & 6) throw Error(l(327));
    mr();
    var t = bi(e, 0);
    if (!(t & 1)) return Et(e, rt()), null;
    var n = yo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ho(e);
      r !== 0 && (t = r, n = ss(e, r));
    }
    if (n === 1) throw n = ei, Un(e, 0), zn(e, t), Et(e, rt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, bt, sn), Et(e, rt()), null;
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
    var n = Lt.transition, r = qe;
    try {
      if (Lt.transition = null, qe = 1, e) return e();
    } finally {
      qe = r, Lt.transition = n, We = t, !(We & 6) && wn();
    }
  }
  function cs() {
    Dt = hr.current, Xe(hr);
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
          dr(), Xe(St), Xe(gt), jl();
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
    if (ct = e, ot = e = Cn(e.current, null), ht = Dt = t, st = 0, ei = null, rs = co = Fn = 0, bt = ti = null, An !== null) {
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
          var o = e, s = n.return, g = n, S = t;
          if (t = ht, g.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var M = S, K = g, J = K.tag;
            if (!(K.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var X = K.alternate;
              X ? (K.updateQueue = X.updateQueue, K.memoizedState = X.memoizedState, K.lanes = X.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var ce = Cu(s);
            if (ce !== null) {
              ce.flags &= -257, Ou(ce, s, g, o, t), ce.mode & 1 && zu(o, M, t), t = ce, S = M;
              var fe = t.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(S), t.updateQueue = he;
              } else fe.add(S);
              break e;
            } else {
              if (!(t & 1)) {
                zu(o, M, t), ds();
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
                var b = o.type, D = o.stateNode;
                if (!(o.flags & 128) && (typeof b.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (bn === null || !bn.has(D)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var ne = Ru(o, g, t);
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
    (st === 0 || st === 3 || st === 2) && (st = 4), ct === null || !(Fn & 268435455) && !(co & 268435455) || zn(ct, ht);
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
    if (bl(), We = n, uo.current = r, ot !== null) throw Error(l(261));
    return ct = null, ht = 0, st;
  }
  function $f() {
    for (; ot !== null; ) oc(ot);
  }
  function Vf() {
    for (; ot !== null && !md(); ) oc(ot);
  }
  function oc(e) {
    var t = uc(e.alternate, e, Dt);
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
      } else if (n = Af(n, t, Dt), n !== null) {
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
      Lt.transition = null, qe = 1, Gf(e, t, n, r);
    } finally {
      Lt.transition = i, qe = r;
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
    if (Rd(e, o), e === ct && (ot = ct = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || po || (po = !0, cc(wi, function() {
      return mr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Lt.transition, Lt.transition = null;
      var s = qe;
      qe = 1;
      var g = We;
      We |= 4, ns.current = null, Ff(e, n), Qu(n, e), pf(dl), zi = !!cl, dl = cl = null, e.current = n, Bf(n), yd(), We = g, qe = s, Lt.transition = o;
    } else e.current = n;
    if (po && (po = !1, En = e, ho = i), o = e.pendingLanes, o === 0 && (bn = null), wd(n.stateNode), Et(e, rt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (fo) throw fo = !1, e = os, os = null, e;
    return ho & 1 && e.tag !== 0 && mr(), o = e.pendingLanes, o & 1 ? e === ls ? ni++ : (ni = 0, ls = e) : ni = 0, wn(), null;
  }
  function mr() {
    if (En !== null) {
      var e = Ys(ho), t = Lt.transition, n = qe;
      try {
        if (Lt.transition = null, qe = 16 > e ? 16 : e, En === null) var r = !1;
        else {
          if (e = En, En = null, ho = 0, We & 6) throw Error(l(331));
          var i = We;
          for (We |= 4, de = e.current; de !== null; ) {
            var o = de, s = o.child;
            if (de.flags & 16) {
              var g = o.deletions;
              if (g !== null) {
                for (var S = 0; S < g.length; S++) {
                  var M = g[S];
                  for (de = M; de !== null; ) {
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
                      if ($u(K), K === M) {
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
          var b = e.current;
          for (de = b; de !== null; ) {
            s = de;
            var D = s.child;
            if (s.subtreeFlags & 2064 && D !== null) D.return = s, de = D;
            else e: for (s = b; de !== null; ) {
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
        qe = n, Lt.transition = t;
      }
    }
    return !1;
  }
  function sc(e, t, n) {
    t = fr(n, t), t = Eu(e, t, 1), e = _n(e, t, 1), t = wt(), e !== null && (Rr(e, 1, t), Et(e, t));
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
          e = fr(n, e), e = Ru(t, e, 1), t = _n(t, e, 1), e = wt(), t !== null && (Rr(t, 1, e), Et(t, e));
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
    t === 0 && (e.mode & 1 ? (t = ki, ki <<= 1, !(ki & 130023424) && (ki = 4194304)) : t = 1);
    var n = wt();
    e = rn(e, t), e !== null && (Rr(e, t, n), Et(e, n));
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
    if (e !== null) if (e.memoizedProps !== t.pendingProps || St.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return kt = !1, If(e, t, n);
      kt = !!(e.flags & 131072);
    }
    else kt = !1, Ze && t.flags & 1048576 && Ba(t, $i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        lo(e, t), e = t.pendingProps;
        var i = ir(t, gt.current);
        cr(t, n), i = Ml(null, t, r, e, i, n);
        var o = Ll();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _t(r) ? (o = !0, Bi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cl(t), i.updater = io, t.stateNode = i, i._reactInternals = t, Bl(t, r, e, n), t = Vl(null, t, r, !0, o, n)) : (t.tag = 0, Ze && o && vl(t), xt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (lo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Zf(r), e = Bt(r, e), i) {
            case 0:
              t = $l(null, t, r, e, n);
              break e;
            case 1:
              t = Mu(null, t, r, e, n);
              break e;
            case 11:
              t = Pu(null, t, r, e, n);
              break e;
            case 14:
              t = Du(null, t, r, Bt(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Mu(e, t, r, i, n);
      case 3:
        e: {
          if (Lu(t), e === null) throw Error(l(387));
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
                    var M = o.updateQueue;
                    if (M !== null) {
                      M = M.shared;
                      var K = M.pending;
                      K === null ? S.next = S : (S.next = K.next, K.next = S), M.pending = S;
                    }
                  }
                  o.lanes |= n, S = o.alternate, S !== null && (S.lanes |= n), Rl(
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
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), Rl(s, n, t), s = o.sibling;
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
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), Du(e, t, r, i, n);
      case 15:
        return ju(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), lo(e, t), t.tag = 1, _t(r) ? (e = !0, Bi(t)) : e = !1, cr(t, n), ku(t, r, i), Bl(t, r, i, n), Vl(null, t, r, !0, e, n);
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
      if (e === xe) return 14;
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
      case R:
        return $n(n.children, i, o, t);
      case L:
        s = 8, i |= 8;
        break;
      case F:
        return e = It(12, n, t, i | 2), e.elementType = F, e.lanes = o, e;
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
    return e = gs(n, r, !0, e, i, o, s, g, S), e.context = dc(null), n = e.current, r = wt(), i = Rn(n), o = on(r, i), o.callback = t ?? null, _n(n, o, i), e.current.lanes = i, Rr(e, i, r), Et(e, r), e;
  }
  function wo(e, t, n, r) {
    var i = t.current, o = wt(), s = Rn(i);
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
  function ko(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gc() {
  }
  function np(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var M = So(s);
          o.call(M);
        };
      }
      var s = fc(t, r, e, 0, null, !1, !1, "", gc);
      return e._reactRootContainer = s, e[Jt] = s.current, Hr(e.nodeType === 8 ? e.parentNode : e), Bn(), s;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var M = So(S);
        g.call(M);
      };
    }
    var S = gs(e, 0, !1, null, null, !1, !1, "", gc);
    return e._reactRootContainer = S, e[Jt] = S.current, Hr(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      wo(t, S, n, r);
    }), S;
  }
  function bo(e, t, n, r, i) {
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
      var t = Rn(e), n = rn(e, t);
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
              Me(r), E(r, i);
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
  return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp, Rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vs(t)) throw Error(l(200));
    return ep(e, t, null, n);
  }, Rt.createRoot = function(e, t) {
    if (!vs(e)) throw Error(l(299));
    var n = !1, r = "", i = hc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = gs(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new ys(t);
  }, Rt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Fs(t), e = e === null ? null : e.stateNode, e;
  }, Rt.flushSync = function(e) {
    return Bn(e);
  }, Rt.hydrate = function(e, t, n) {
    if (!ko(t)) throw Error(l(200));
    return bo(null, e, t, !0, n);
  }, Rt.hydrateRoot = function(e, t, n) {
    if (!vs(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = hc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = fc(t, null, e, 1, n ?? null, i, !1, o, s), e[Jt] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new _o(t);
  }, Rt.render = function(e, t, n) {
    if (!ko(t)) throw Error(l(200));
    return bo(null, e, t, !1, n);
  }, Rt.unmountComponentAtNode = function(e) {
    if (!ko(e)) throw Error(l(40));
    return e._reactRootContainer ? (Bn(function() {
      bo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, Rt.unstable_batchedUpdates = us, Rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ko(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return bo(e, t, n, !1, r);
  }, Rt.version = "18.3.1-next-f1338f8080-20240426", Rt;
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
  if (_c) return Ro;
  _c = 1;
  var a = mi();
  return Ro.createRoot = a.createRoot, Ro.hydrateRoot = a.hydrateRoot, Ro;
}
var pp = fp(), Fe = zt();
const hp = /* @__PURE__ */ lp(Fe);
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
function gp() {
  if (kc) return ii;
  kc = 1;
  var a = zt(), c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(U, T, A) {
    var V, B = {}, G = null, Se = null;
    A !== void 0 && (G = "" + A), T.key !== void 0 && (G = "" + T.key), T.ref !== void 0 && (Se = T.ref);
    for (V in T) f.call(T, V) && !z.hasOwnProperty(V) && (B[V] = T[V]);
    if (U && U.defaultProps) for (V in T = U.defaultProps, T) B[V] === void 0 && (B[V] = T[V]);
    return { $$typeof: c, type: U, key: G, ref: Se, props: B, _owner: k.current };
  }
  return ii.Fragment = l, ii.jsx = I, ii.jsxs = I, ii;
}
var bc;
function mp() {
  return bc || (bc = 1, ks.exports = gp()), ks.exports;
}
var x = mp();
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ x.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ x.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ x.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ x.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var bs = { exports: {} }, oi = {}, hi = { exports: {} }, yp = hi.exports, Rc;
function Ns() {
  return Rc || (Rc = 1, function(a, c) {
    (function(l, f) {
      f(c);
    })(yp, function(l) {
      function f(Z) {
        return function(Re, De, Me, Be, Ve, nt, _) {
          return Z(Re, De, _);
        };
      }
      function k(Z) {
        return function(Re, De, Me, Be) {
          if (!Re || !De || typeof Re != "object" || typeof De != "object")
            return Z(Re, De, Me, Be);
          var Ve = Be.get(Re), nt = Be.get(De);
          if (Ve && nt)
            return Ve === De && nt === Re;
          Be.set(Re, De), Be.set(De, Re);
          var _ = Z(Re, De, Me, Be);
          return Be.delete(Re), Be.delete(De), _;
        };
      }
      function z(Z, ae) {
        var Re = {};
        for (var De in Z)
          Re[De] = Z[De];
        for (var De in ae)
          Re[De] = ae[De];
        return Re;
      }
      function I(Z) {
        return Z.constructor === Object || Z.constructor == null;
      }
      function U(Z) {
        return typeof Z.then == "function";
      }
      function T(Z, ae) {
        return Z === ae || Z !== Z && ae !== ae;
      }
      var A = "[object Arguments]", V = "[object Boolean]", B = "[object Date]", G = "[object RegExp]", Se = "[object Map]", be = "[object Number]", Q = "[object Object]", N = "[object Set]", v = "[object String]", u = Object.prototype.toString;
      function h(Z) {
        var ae = Z.areArraysEqual, Re = Z.areDatesEqual, De = Z.areMapsEqual, Me = Z.areObjectsEqual, Be = Z.areRegExpsEqual, Ve = Z.areSetsEqual, nt = Z.createIsNestedEqual, _ = nt(E);
        function E(C, $, oe) {
          if (C === $)
            return !0;
          if (!C || !$ || typeof C != "object" || typeof $ != "object")
            return C !== C && $ !== $;
          if (I(C) && I($))
            return Me(C, $, _, oe);
          var ge = Array.isArray(C), Ee = Array.isArray($);
          if (ge || Ee)
            return ge === Ee && ae(C, $, _, oe);
          var Oe = u.call(C);
          return Oe !== u.call($) ? !1 : Oe === B ? Re(C, $, _, oe) : Oe === G ? Be(C, $, _, oe) : Oe === Se ? De(C, $, _, oe) : Oe === N ? Ve(C, $, _, oe) : Oe === Q || Oe === A ? U(C) || U($) ? !1 : Me(C, $, _, oe) : Oe === V || Oe === be || Oe === v ? T(C.valueOf(), $.valueOf()) : !1;
        }
        return E;
      }
      function d(Z, ae, Re, De) {
        var Me = Z.length;
        if (ae.length !== Me)
          return !1;
        for (; Me-- > 0; )
          if (!Re(Z[Me], ae[Me], Me, Me, Z, ae, De))
            return !1;
        return !0;
      }
      var p = k(d);
      function m(Z, ae) {
        return T(Z.valueOf(), ae.valueOf());
      }
      function R(Z, ae, Re, De) {
        var Me = Z.size === ae.size;
        if (!Me)
          return !1;
        if (!Z.size)
          return !0;
        var Be = {}, Ve = 0;
        return Z.forEach(function(nt, _) {
          if (Me) {
            var E = !1, C = 0;
            ae.forEach(function($, oe) {
              !E && !Be[C] && (E = Re(_, oe, Ve, C, Z, ae, De) && Re(nt, $, _, oe, Z, ae, De)) && (Be[C] = !0), C++;
            }), Ve++, Me = E;
          }
        }), Me;
      }
      var L = k(R), F = "_owner", te = Object.prototype.hasOwnProperty;
      function le(Z, ae, Re, De) {
        var Me = Object.keys(Z), Be = Me.length;
        if (Object.keys(ae).length !== Be)
          return !1;
        for (var Ve; Be-- > 0; ) {
          if (Ve = Me[Be], Ve === F) {
            var nt = !!Z.$$typeof, _ = !!ae.$$typeof;
            if ((nt || _) && nt !== _)
              return !1;
          }
          if (!te.call(ae, Ve) || !Re(Z[Ve], ae[Ve], Ve, Ve, Z, ae, De))
            return !1;
        }
        return !0;
      }
      var ie = k(le);
      function re(Z, ae) {
        return Z.source === ae.source && Z.flags === ae.flags;
      }
      function me(Z, ae, Re, De) {
        var Me = Z.size === ae.size;
        if (!Me)
          return !1;
        if (!Z.size)
          return !0;
        var Be = {};
        return Z.forEach(function(Ve, nt) {
          if (Me) {
            var _ = !1, E = 0;
            ae.forEach(function(C, $) {
              !_ && !Be[E] && (_ = Re(Ve, C, nt, $, Z, ae, De)) && (Be[E] = !0), E++;
            }), Me = _;
          }
        }), Me;
      }
      var xe = k(me), pe = Object.freeze({
        areArraysEqual: d,
        areDatesEqual: m,
        areMapsEqual: R,
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
      }), Y = h(pe);
      function W(Z, ae) {
        return Y(Z, ae, void 0);
      }
      var q = h(z(pe, { createIsNestedEqual: function() {
        return T;
      } }));
      function w(Z, ae) {
        return q(Z, ae, void 0);
      }
      var j = h(ue);
      function ye(Z, ae) {
        return j(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      var we = h(z(ue, {
        createIsNestedEqual: function() {
          return T;
        }
      }));
      function Ce(Z, ae) {
        return we(Z, ae, /* @__PURE__ */ new WeakMap());
      }
      function Pe(Z) {
        return h(z(pe, Z(pe)));
      }
      function je(Z) {
        var ae = h(z(ue, Z(ue)));
        return function(Re, De, Me) {
          return Me === void 0 && (Me = /* @__PURE__ */ new WeakMap()), ae(Re, De, Me);
        };
      }
      l.circularDeepEqual = ye, l.circularShallowEqual = Ce, l.createCustomCircularEqual = je, l.createCustomEqual = Pe, l.deepEqual = W, l.sameValueZeroEqual = T, l.shallowEqual = w, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(hi, hi.exports)), hi.exports;
}
var zo = { exports: {} }, zc;
function No() {
  if (zc) return zo.exports;
  zc = 1;
  function a(l) {
    var f, k, z = "";
    if (typeof l == "string" || typeof l == "number") z += l;
    else if (typeof l == "object") if (Array.isArray(l)) {
      var I = l.length;
      for (f = 0; f < I; f++) l[f] && (k = a(l[f])) && (z && (z += " "), z += k);
    } else for (k in l) l[k] && (z && (z += " "), z += k);
    return z;
  }
  function c() {
    for (var l, f, k = 0, z = "", I = arguments.length; k < I; k++) (l = arguments[k]) && (f = a(l)) && (z && (z += " "), z += f);
    return z;
  }
  return zo.exports = c, zo.exports.clsx = c, zo.exports;
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
  }), Ae.bottom = T, Ae.childrenEqual = Se, Ae.cloneLayout = A, Ae.cloneLayoutItem = G, Ae.collides = Q, Ae.compact = N, Ae.compactItem = h, Ae.compactType = Be, Ae.correctBounds = d, Ae.fastPositionEqual = be, Ae.fastRGLPropsEqual = void 0, Ae.getAllCollisions = R, Ae.getFirstCollision = m, Ae.getLayoutItem = p, Ae.getStatics = L, Ae.modifyLayout = V, Ae.moveElement = F, Ae.moveElementAwayFromCollision = te, Ae.noop = void 0, Ae.perc = le, Ae.resizeItemInDirection = Ce, Ae.setTopLeft = je, Ae.setTransform = Pe, Ae.sortLayoutItems = Z, Ae.sortLayoutItemsByColRow = Re, Ae.sortLayoutItemsByRowCol = ae, Ae.synchronizeLayoutWithChildren = De, Ae.validateLayout = Me, Ae.withLayoutItem = B;
  var a = /* @__PURE__ */ Ns(), c = l(zt());
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
  function k(_) {
    for (var E = 1; E < arguments.length; E++) {
      var C = arguments[E] != null ? arguments[E] : {};
      E % 2 ? f(Object(C), !0).forEach(function($) {
        z(_, $, C[$]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(C)) : f(Object(C)).forEach(function($) {
        Object.defineProperty(_, $, Object.getOwnPropertyDescriptor(C, $));
      });
    }
    return _;
  }
  function z(_, E, C) {
    return (E = I(E)) in _ ? Object.defineProperty(_, E, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : _[E] = C, _;
  }
  function I(_) {
    var E = U(_, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function U(_, E) {
    if (typeof _ != "object" || !_) return _;
    var C = _[Symbol.toPrimitive];
    if (C !== void 0) {
      var $ = C.call(_, E);
      if (typeof $ != "object") return $;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(_);
  }
  function T(_) {
    let E = 0, C;
    for (let $ = 0, oe = _.length; $ < oe; $++)
      C = _[$].y + _[$].h, C > E && (E = C);
    return E;
  }
  function A(_) {
    const E = Array(_.length);
    for (let C = 0, $ = _.length; C < $; C++)
      E[C] = G(_[C]);
    return E;
  }
  function V(_, E) {
    const C = Array(_.length);
    for (let $ = 0, oe = _.length; $ < oe; $++)
      E.i === _[$].i ? C[$] = E : C[$] = _[$];
    return C;
  }
  function B(_, E, C) {
    let $ = p(_, E);
    return $ ? ($ = C(G($)), _ = V(_, $), [_, $]) : [_, null];
  }
  function G(_) {
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
  function Se(_, E) {
    return (0, a.deepEqual)(c.default.Children.map(_, (C) => C?.key), c.default.Children.map(E, (C) => C?.key)) && (0, a.deepEqual)(c.default.Children.map(_, (C) => C?.props["data-grid"]), c.default.Children.map(E, (C) => C?.props["data-grid"]));
  }
  Ae.fastRGLPropsEqual = vp();
  function be(_, E) {
    return _.left === E.left && _.top === E.top && _.width === E.width && _.height === E.height;
  }
  function Q(_, E) {
    return !(_.i === E.i || _.x + _.w <= E.x || _.x >= E.x + E.w || _.y + _.h <= E.y || _.y >= E.y + E.h);
  }
  function N(_, E, C, $) {
    const oe = L(_);
    let ge = T(oe);
    const Ee = Z(_, E), Oe = Array(_.length);
    for (let Te = 0, $e = Ee.length; Te < $e; Te++) {
      let Qe = G(Ee[Te]);
      Qe.static || (Qe = h(oe, Qe, E, C, Ee, $, ge), ge = Math.max(ge, Qe.y + Qe.h), oe.push(Qe)), Oe[_.indexOf(Ee[Te])] = Qe, Qe.moved = !1;
    }
    return Oe;
  }
  const v = {
    x: "w",
    y: "h"
  };
  function u(_, E, C, $) {
    const oe = v[$];
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
      for (typeof Ee == "number" ? E.y = Math.min(Ee, E.y) : E.y = Math.min(T(_), E.y); E.y > 0 && !m(_, E); )
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
    const C = L(_);
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
  function R(_, E) {
    return _.filter((C) => Q(C, E));
  }
  function L(_) {
    return _.filter((E) => E.static);
  }
  function F(_, E, C, $, oe, ge, Ee, Oe, Te) {
    if (E.static && E.isDraggable !== !0 || E.y === $ && E.x === C) return _;
    "Moving element ".concat(E.i, " to [").concat(String(C), ",").concat(String($), "] from [").concat(E.x, ",").concat(E.y, "]");
    const $e = E.x, Qe = E.y;
    typeof C == "number" && (E.x = C), typeof $ == "number" && (E.y = $), E.moved = !0;
    let at = Z(_, Ee);
    (Ee === "vertical" && typeof $ == "number" ? Qe >= $ : Ee === "horizontal" && typeof C == "number" ? $e >= C : !1) && (at = at.reverse());
    const P = R(at, E), H = P.length > 0;
    if (H && Te)
      return A(_);
    if (H && ge)
      return "Collision prevented on ".concat(E.i, ", reverting."), E.x = $e, E.y = Qe, E.moved = !1, _;
    for (let ee = 0, se = P.length; ee < se; ee++) {
      const Le = P[ee];
      "Resolving collision between ".concat(E.i, " at [").concat(E.x, ",").concat(E.y, "] and ").concat(Le.i, " at [").concat(Le.x, ",").concat(Le.y, "]"), !Le.moved && (Le.static ? _ = te(_, Le, E, oe, Ee) : _ = te(_, E, Le, oe, Ee));
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
          return F(_, C, void 0, C.y + 1, $, Te, oe);
        if (P && oe == null)
          return E.y = C.y, C.y = C.y + C.h, _;
        if (H && Ee)
          return F(_, E, C.x, void 0, $, Te, oe);
      } else return "Doing reverse collision on ".concat(C.i, " up to [").concat(at.x, ",").concat(at.y, "]."), F(_, C, Ee ? at.x : void 0, Oe ? at.y : void 0, $, Te, oe);
    }
    const $e = Ee ? C.x + 1 : void 0, Qe = Oe ? C.y + 1 : void 0;
    return $e == null && Qe == null ? _ : F(_, C, Ee ? C.x + 1 : void 0, Oe ? C.y + 1 : void 0, $, Te, oe);
  }
  function le(_) {
    return _ * 100 + "%";
  }
  const ie = (_, E, C, $) => _ + C > $ ? E : C, re = (_, E, C) => _ < 0 ? E : C, me = (_) => Math.max(0, _), xe = (_) => Math.max(0, _), pe = (_, E, C) => {
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
      top: xe(Ee)
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
  }, Y = (_, E, C) => {
    let {
      top: $,
      height: oe,
      width: ge
    } = E;
    const Ee = _.left - (ge - _.width);
    return {
      height: oe,
      width: Ee < 0 ? _.width : ie(_.left, _.width, ge, C),
      top: xe($),
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
      top: xe($)
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
      return W(arguments.length <= 0 ? void 0 : arguments[0], Y(...arguments));
    },
    w: Y,
    nw: function() {
      return pe(arguments.length <= 0 ? void 0 : arguments[0], Y(...arguments));
    }
  };
  function Ce(_, E, C, $) {
    const oe = we[_];
    return oe ? oe(E, k(k({}, E), C), $) : C;
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
  function je(_) {
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
    return E === "horizontal" ? Re(_) : E === "vertical" ? ae(_) : _;
  }
  function ae(_) {
    return _.slice(0).sort(function(E, C) {
      return E.y > C.y || E.y === C.y && E.x > C.x ? 1 : E.y === C.y && E.x === C.x ? 0 : -1;
    });
  }
  function Re(_) {
    return _.slice(0).sort(function(E, C) {
      return E.x > C.x || E.x === C.x && E.y > C.y ? 1 : -1;
    });
  }
  function De(_, E, C, $, oe) {
    _ = _ || [];
    const ge = [];
    c.default.Children.forEach(E, (Oe) => {
      if (Oe?.key == null) return;
      const Te = p(_, String(Oe.key)), $e = Oe.props["data-grid"];
      Te && $e == null ? ge.push(G(Te)) : $e ? ge.push(G(k(k({}, $e), {}, {
        i: Oe.key
      }))) : ge.push(G({
        w: 1,
        h: 1,
        x: 0,
        y: T(ge),
        i: String(Oe.key)
      }));
    });
    const Ee = d(ge, {
      cols: C
    });
    return oe ? Ee : N(Ee, $, C);
  }
  function Me(_) {
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
function Ms() {
  if (Pc) return an;
  Pc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = a, an.calcGridItemPosition = l, an.calcGridItemWHPx = c, an.calcWH = k, an.calcXY = f, an.clamp = z;
  function a(I) {
    const {
      margin: U,
      containerPadding: T,
      containerWidth: A,
      cols: V
    } = I;
    return (A - U[0] * (V - 1) - T[0] * 2) / V;
  }
  function c(I, U, T) {
    return Number.isFinite(I) ? Math.round(U * I + Math.max(0, I - 1) * T) : I;
  }
  function l(I, U, T, A, V, B) {
    const {
      margin: G,
      containerPadding: Se,
      rowHeight: be
    } = I, Q = a(I), N = {};
    return B && B.resizing ? (N.width = Math.round(B.resizing.width), N.height = Math.round(B.resizing.height)) : (N.width = c(A, Q, G[0]), N.height = c(V, be, G[1])), B && B.dragging ? (N.top = Math.round(B.dragging.top), N.left = Math.round(B.dragging.left)) : B && B.resizing && typeof B.resizing.top == "number" && typeof B.resizing.left == "number" ? (N.top = Math.round(B.resizing.top), N.left = Math.round(B.resizing.left)) : (N.top = Math.round((be + G[1]) * T + Se[1]), N.left = Math.round((Q + G[0]) * U + Se[0])), N;
  }
  function f(I, U, T, A, V) {
    const {
      margin: B,
      containerPadding: G,
      cols: Se,
      rowHeight: be,
      maxRows: Q
    } = I, N = a(I);
    let v = Math.round((T - G[0]) / (N + B[0])), u = Math.round((U - G[1]) / (be + B[1]));
    return v = z(v, 0, Se - A), u = z(u, 0, Q - V), {
      x: v,
      y: u
    };
  }
  function k(I, U, T, A, V, B) {
    const {
      margin: G,
      maxRows: Se,
      cols: be,
      rowHeight: Q
    } = I, N = a(I);
    let v = Math.round((U + G[0]) / (N + G[0])), u = Math.round((T + G[1]) / (Q + G[1])), h = z(v, 0, be - A), d = z(u, 0, Se - V);
    return ["sw", "w", "nw"].indexOf(B) !== -1 && (h = z(v, 0, be)), ["nw", "n", "ne"].indexOf(B) !== -1 && (d = z(u, 0, Se)), {
      w: h,
      h: d
    };
  }
  function z(I, U, T) {
    return Math.max(Math.min(I, T), U);
  }
  return an;
}
var li = {}, Rs = { exports: {} }, zs, Dc;
function xp() {
  if (Dc) return zs;
  Dc = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zs = a, zs;
}
var Cs, jc;
function wp() {
  if (jc) return Cs;
  jc = 1;
  var a = /* @__PURE__ */ xp();
  function c() {
  }
  function l() {
  }
  return l.resetWarningCache = c, Cs = function() {
    function f(I, U, T, A, V, B) {
      if (B !== a) {
        var G = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw G.name = "Invariant Violation", G;
      }
    }
    f.isRequired = f;
    function k() {
      return f;
    }
    var z = {
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
    return z.PropTypes = z, z;
  }, Cs;
}
var Tc;
function Pn() {
  return Tc || (Tc = 1, Rs.exports = /* @__PURE__ */ wp()()), Rs.exports;
}
var si = { exports: {} }, Os, Nc;
function Sp() {
  if (Nc) return Os;
  Nc = 1;
  var a = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyNames, k = Object.getPrototypeOf, z = Object.prototype.hasOwnProperty, I = (y, P) => {
    for (var H in P)
      c(y, H, { get: P[H], enumerable: !0 });
  }, U = (y, P, H, ee) => {
    if (P && typeof P == "object" || typeof P == "function")
      for (let se of f(P))
        !z.call(y, se) && se !== H && c(y, se, { get: () => P[se], enumerable: !(ee = l(P, se)) || ee.enumerable });
    return y;
  }, T = (y, P, H) => (H = y != null ? a(k(y)) : {}, U(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !y || !y.__esModule ? c(H, "default", { value: y, enumerable: !0 }) : H,
    y
  )), A = (y) => U(c({}, "__esModule", { value: !0 }), y), V = {};
  I(V, {
    DraggableCore: () => Qe,
    default: () => at
  }), Os = A(V);
  var B = T(zt()), G = T(/* @__PURE__ */ Pn()), Se = T(mi()), be = No();
  function Q(y, P) {
    for (let H = 0, ee = y.length; H < ee; H++)
      if (P.apply(P, [y[H], H, y])) return y[H];
  }
  function N(y) {
    return typeof y == "function" || Object.prototype.toString.call(y) === "[object Function]";
  }
  function v(y) {
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
    return P ? `${P}${R(y)}` : y;
  }
  function R(y) {
    let P = "", H = !0;
    for (let ee = 0; ee < y.length; ee++)
      H ? (P += y[ee].toUpperCase(), H = !1) : y[ee] === "-" ? H = !0 : P += y[ee];
    return P;
  }
  var L = p(), F = "";
  function te(y, P) {
    var H;
    F || (F = (H = Q([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(se) {
      return N(y[se]);
    })) != null ? H : "");
    const ee = y[F];
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
    const se = { capture: !0, ...ee }, Le = H;
    y.addEventListener ? y.addEventListener(P, Le, se) : y.attachEvent ? y.attachEvent("on" + P, Le) : y["on" + P] = Le;
  }
  function re(y, P, H, ee) {
    if (!y) return;
    const se = { capture: !0, ...ee }, Le = H;
    y.removeEventListener ? y.removeEventListener(P, Le, se) : y.detachEvent ? y.detachEvent("on" + P, Le) : y["on" + P] = null;
  }
  function me(y) {
    let P = y.clientHeight;
    const H = y.ownerDocument.defaultView.getComputedStyle(y);
    return P += u(H.borderTopWidth), P += u(H.borderBottomWidth), P;
  }
  function xe(y) {
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
  function Y(y, P, H) {
    const se = P === P.ownerDocument.body ? { left: 0, top: 0 } : P.getBoundingClientRect(), Le = (y.clientX + P.scrollLeft - se.left) / H, Ie = (y.clientY + P.scrollTop - se.top) / H;
    return { x: Le, y: Ie };
  }
  function W(y, P) {
    const H = w(y, P, "px");
    return { [m("transform", L)]: H };
  }
  function q(y, P) {
    return w(y, P, "");
  }
  function w({ x: y, y: P }, H, ee) {
    let se = `translate(${y}${ee},${P}${ee})`;
    if (H) {
      const Le = `${typeof H.x == "string" ? H.x : H.x + ee}`, Ie = `${typeof H.y == "string" ? H.y : H.y + ee}`;
      se = `translate(${Le}, ${Ie})` + se;
    }
    return se;
  }
  function j(y, P) {
    return y.targetTouches && Q(y.targetTouches, (H) => P === H.identifier) || y.changedTouches && Q(y.changedTouches, (H) => P === H.identifier);
  }
  function ye(y) {
    if (y.targetTouches && y.targetTouches[0]) return y.targetTouches[0].identifier;
    if (y.changedTouches && y.changedTouches[0]) return y.changedTouches[0].identifier;
  }
  function we() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Ce(y, P) {
    if (!y) return;
    let H = y.getElementById("react-draggable-style-el");
    if (!H) {
      H = y.createElement("style"), H.type = "text/css", H.id = "react-draggable-style-el";
      const ee = P ?? we();
      ee && H.setAttribute("nonce", ee), H.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, H.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, y.getElementsByTagName("head")[0].appendChild(H);
    }
    y.body && Z(y.body, "react-draggable-transparent-selection");
  }
  function Pe(y) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      je(y);
    }) : je(y);
  }
  function je(y) {
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
  function Re(y, P, H) {
    if (!y.props.bounds) return [P, H];
    let { bounds: ee } = y.props;
    ee = typeof ee == "string" ? ee : E(ee);
    const se = C(y);
    if (typeof ee == "string") {
      const { ownerDocument: Le } = se, Ie = Le.defaultView;
      if (!Ie)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Ke;
      if (ee === "parent" ? Ke = se.parentNode : Ke = se.getRootNode().querySelector(ee), !(Ke instanceof Ie.HTMLElement))
        throw new Error('Bounds selector "' + ee + '" could not find an element.');
      const ft = Ke, At = Ie.getComputedStyle(se), Vt = Ie.getComputedStyle(ft);
      ee = {
        left: -se.offsetLeft + u(Vt.paddingLeft) + u(At.marginLeft),
        top: -se.offsetTop + u(Vt.paddingTop) + u(At.marginTop),
        right: ue(ft) - xe(se) - se.offsetLeft + u(Vt.paddingRight) - u(At.marginRight),
        bottom: pe(ft) - me(se) - se.offsetTop + u(Vt.paddingBottom) - u(At.marginBottom)
      };
    }
    return v(ee.right) && (P = Math.min(P, ee.right)), v(ee.bottom) && (H = Math.min(H, ee.bottom)), v(ee.left) && (P = Math.max(P, ee.left)), v(ee.top) && (H = Math.max(H, ee.top)), [P, H];
  }
  function De(y, P, H) {
    const ee = Math.round(P / y[0]) * y[0], se = Math.round(H / y[1]) * y[1];
    return [ee, se];
  }
  function Me(y) {
    return y.props.axis === "both" || y.props.axis === "x";
  }
  function Be(y) {
    return y.props.axis === "both" || y.props.axis === "y";
  }
  function Ve(y, P, H) {
    const ee = typeof P == "number" ? j(y, P) : null;
    if (typeof P == "number" && !ee) return null;
    const se = C(H), Le = H.props.offsetParent || se.offsetParent || se.ownerDocument.body;
    return Y(ee || y, Le, H.props.scale);
  }
  function nt(y, P, H) {
    const ee = !v(y.lastX), se = C(y);
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
  var $ = T(zt()), oe = T(/* @__PURE__ */ Pn()), ge = T(mi()), Ee = function() {
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
        const { x: Le, y: Ie } = se, Ke = nt(this, Le, Ie);
        Oe("calling", this.props.onStart), !(this.props.onStart(y, Ke) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Ce(H, this.props.nonce), this.dragging = !0, this.lastX = Le, this.lastY = Ie, ie(H, $e.move, this.handleDrag), ie(H, $e.stop, this.handleDragStop));
      }, this.handleDrag = (y) => {
        const P = Ve(y, this.touchIdentifier, this);
        if (P == null) return;
        let { x: H, y: ee } = P;
        if (Array.isArray(this.props.grid)) {
          let Ie = H - this.lastX, Ke = ee - this.lastY;
          if ([Ie, Ke] = De(this.props.grid, Ie, Ke), !Ie && !Ke) return;
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
          [Ke, ft] = De(this.props.grid, Ke, ft), H = this.lastX + Ke, ee = this.lastY + ft;
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
          const [ft, At] = Re(this, se.x, se.y);
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
      const P = Se.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: y,
        bounds: P,
        children: H,
        defaultPosition: ee,
        defaultClassName: se,
        defaultClassNameDragging: Le,
        defaultClassNameDragged: Ie,
        position: Ke,
        positionOffset: ft,
        scale: At,
        ...Vt
      } = this.props;
      let Dn = {}, Gn = null;
      const Zt = !!!Ke || this.state.dragging, wr = Ke || ee, Sr = {
        // Set left if horizontal drag is enabled
        x: Me(this) && Zt ? this.state.x : wr.x,
        // Set top if vertical drag is enabled
        y: Be(this) && Zt ? this.state.y : wr.y
      };
      this.state.isElementSVG ? Gn = q(Sr, ft) : Dn = W(Sr, ft);
      const Yn = B.Children.only(H), yi = (0, be.clsx)(Yn.props.className || "", se, {
        [Le]: this.state.dragging,
        [Ie]: this.state.dragged
      });
      return /* @__PURE__ */ B.createElement(Qe, { ...Vt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, B.cloneElement(Yn, {
        className: yi,
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
  const a = Sp(), c = a.DraggableCore, l = a.default || a;
  return si.exports = l, si.exports.default = l, si.exports.DraggableCore = c, si.exports;
}
var ai = { exports: {} }, ui = {}, Co = {}, Lc;
function _p() {
  if (Lc) return Co;
  Lc = 1, Co.__esModule = !0, Co.cloneElement = U;
  var a = c(zt());
  function c(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function l(T, A) {
    var V = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(T);
      A && (B = B.filter(function(G) {
        return Object.getOwnPropertyDescriptor(T, G).enumerable;
      })), V.push.apply(V, B);
    }
    return V;
  }
  function f(T) {
    for (var A = 1; A < arguments.length; A++) {
      var V = arguments[A] != null ? arguments[A] : {};
      A % 2 ? l(Object(V), !0).forEach(function(B) {
        k(T, B, V[B]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(V)) : l(Object(V)).forEach(function(B) {
        Object.defineProperty(T, B, Object.getOwnPropertyDescriptor(V, B));
      });
    }
    return T;
  }
  function k(T, A, V) {
    return A = z(A), A in T ? Object.defineProperty(T, A, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : T[A] = V, T;
  }
  function z(T) {
    var A = I(T, "string");
    return typeof A == "symbol" ? A : String(A);
  }
  function I(T, A) {
    if (typeof T != "object" || T === null) return T;
    var V = T[Symbol.toPrimitive];
    if (V !== void 0) {
      var B = V.call(T, A);
      if (typeof B != "object") return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (A === "string" ? String : Number)(T);
  }
  function U(T, A) {
    return A.style && T.props.style && (A.style = f(f({}, T.props.style), A.style)), A.className && T.props.className && (A.className = T.props.className + " " + A.className), /* @__PURE__ */ a.default.cloneElement(T, A);
  }
  return Co;
}
var ci = {}, Ic;
function Jc() {
  if (Ic) return ci;
  Ic = 1, ci.__esModule = !0, ci.resizableProps = void 0;
  var a = c(/* @__PURE__ */ Pn());
  Ls();
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
      for (var k = arguments.length, z = new Array(k), I = 0; I < k; I++)
        z[I] = arguments[I];
      var U = z[0];
      if (U.axis === "both" || U.axis === "y") {
        var T;
        return (T = a.default.number).isRequired.apply(T, z);
      }
      return a.default.number.apply(a.default, z);
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
      for (var k = arguments.length, z = new Array(k), I = 0; I < k; I++)
        z[I] = arguments[I];
      var U = z[0];
      if (U.axis === "both" || U.axis === "x") {
        var T;
        return (T = a.default.number).isRequired.apply(T, z);
      }
      return a.default.number.apply(a.default, z);
    }
  };
  return ci.resizableProps = l, ci;
}
var Ac;
function ed() {
  if (Ac) return ui;
  Ac = 1, ui.__esModule = !0, ui.default = void 0;
  var a = I(zt()), c = Ls(), l = _p(), f = Jc(), k = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function z(v) {
    if (typeof WeakMap != "function") return null;
    var u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (z = function(p) {
      return p ? h : u;
    })(v);
  }
  function I(v, u) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var h = z(u);
    if (h && h.has(v))
      return h.get(v);
    var d = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var m in v)
      if (m !== "default" && Object.prototype.hasOwnProperty.call(v, m)) {
        var R = p ? Object.getOwnPropertyDescriptor(v, m) : null;
        R && (R.get || R.set) ? Object.defineProperty(d, m, R) : d[m] = v[m];
      }
    return d.default = v, h && h.set(v, d), d;
  }
  function U() {
    return U = Object.assign ? Object.assign.bind() : function(v) {
      for (var u = 1; u < arguments.length; u++) {
        var h = arguments[u];
        for (var d in h)
          Object.prototype.hasOwnProperty.call(h, d) && (v[d] = h[d]);
      }
      return v;
    }, U.apply(this, arguments);
  }
  function T(v, u) {
    if (v == null) return {};
    var h = {}, d = Object.keys(v), p, m;
    for (m = 0; m < d.length; m++)
      p = d[m], !(u.indexOf(p) >= 0) && (h[p] = v[p]);
    return h;
  }
  function A(v, u) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(v);
      u && (d = d.filter(function(p) {
        return Object.getOwnPropertyDescriptor(v, p).enumerable;
      })), h.push.apply(h, d);
    }
    return h;
  }
  function V(v) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? A(Object(h), !0).forEach(function(d) {
        B(v, d, h[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(d) {
        Object.defineProperty(v, d, Object.getOwnPropertyDescriptor(h, d));
      });
    }
    return v;
  }
  function B(v, u, h) {
    return u = G(u), u in v ? Object.defineProperty(v, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[u] = h, v;
  }
  function G(v) {
    var u = Se(v, "string");
    return typeof u == "symbol" ? u : String(u);
  }
  function Se(v, u) {
    if (typeof v != "object" || v === null) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var d = h.call(v, u);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(v);
  }
  function be(v, u) {
    v.prototype = Object.create(u.prototype), v.prototype.constructor = v, Q(v, u);
  }
  function Q(v, u) {
    return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, p) {
      return d.__proto__ = p, d;
    }, Q(v, u);
  }
  var N = /* @__PURE__ */ function(v) {
    be(u, v);
    function u() {
      for (var d, p = arguments.length, m = new Array(p), R = 0; R < p; R++)
        m[R] = arguments[R];
      return d = v.call.apply(v, [this].concat(m)) || this, d.handleRefs = {}, d.lastHandleRect = null, d.slack = null, d;
    }
    var h = u.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(p, m) {
      var R = this.props, L = R.minConstraints, F = R.maxConstraints, te = R.lockAspectRatio;
      if (!L && !F && !te) return [p, m];
      if (te) {
        var le = this.props.width / this.props.height, ie = p - this.props.width, re = m - this.props.height;
        Math.abs(ie) > Math.abs(re * le) ? m = p / le : p = m * le;
      }
      var me = p, xe = m, pe = this.slack || [0, 0], ue = pe[0], Y = pe[1];
      return p += ue, m += Y, L && (p = Math.max(L[0], p), m = Math.max(L[1], m)), F && (p = Math.min(F[0], p), m = Math.min(F[1], m)), this.slack = [ue + (me - p), Y + (xe - m)], [p, m];
    }, h.resizeHandler = function(p, m) {
      var R = this;
      return function(L, F) {
        var te = F.node, le = F.deltaX, ie = F.deltaY;
        p === "onResizeStart" && R.resetData();
        var re = (R.props.axis === "both" || R.props.axis === "x") && m !== "n" && m !== "s", me = (R.props.axis === "both" || R.props.axis === "y") && m !== "e" && m !== "w";
        if (!(!re && !me)) {
          var xe = m[0], pe = m[m.length - 1], ue = te.getBoundingClientRect();
          if (R.lastHandleRect != null) {
            if (pe === "w") {
              var Y = ue.left - R.lastHandleRect.left;
              le += Y;
            }
            if (xe === "n") {
              var W = ue.top - R.lastHandleRect.top;
              ie += W;
            }
          }
          R.lastHandleRect = ue, pe === "w" && (le = -le), xe === "n" && (ie = -ie);
          var q = R.props.width + (re ? le / R.props.transformScale : 0), w = R.props.height + (me ? ie / R.props.transformScale : 0), j = R.runConstraints(q, w);
          q = j[0], w = j[1];
          var ye = q !== R.props.width || w !== R.props.height, we = typeof R.props[p] == "function" ? R.props[p] : null, Ce = p === "onResize" && !ye;
          we && !Ce && (L.persist == null || L.persist(), we(L, {
            node: te,
            size: {
              width: q,
              height: w
            },
            handle: m
          })), p === "onResizeStop" && R.resetData();
        }
      };
    }, h.renderResizeHandle = function(p, m) {
      var R = this.props.handle;
      if (!R)
        return /* @__PURE__ */ a.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + p,
          ref: m
        });
      if (typeof R == "function")
        return R(p, m);
      var L = typeof R.type == "string", F = V({
        ref: m
      }, L ? {} : {
        handleAxis: p
      });
      return /* @__PURE__ */ a.cloneElement(R, F);
    }, h.render = function() {
      var p = this, m = this.props, R = m.children, L = m.className, F = m.draggableOpts;
      m.width, m.height, m.handle, m.handleSize, m.lockAspectRatio, m.axis, m.minConstraints, m.maxConstraints, m.onResize, m.onResizeStop, m.onResizeStart;
      var te = m.resizeHandles;
      m.transformScale;
      var le = T(m, k);
      return (0, l.cloneElement)(R, V(V({}, le), {}, {
        className: (L ? L + " " : "") + "react-resizable",
        children: [].concat(R.props.children, te.map(function(ie) {
          var re, me = (re = p.handleRefs[ie]) != null ? re : p.handleRefs[ie] = /* @__PURE__ */ a.createRef();
          return /* @__PURE__ */ a.createElement(c.DraggableCore, U({}, F, {
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
function kp() {
  if (Wc) return di;
  Wc = 1, di.__esModule = !0, di.default = void 0;
  var a = U(zt()), c = z(/* @__PURE__ */ Pn()), l = z(ed()), f = Jc(), k = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function z(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function I(u) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (I = function(m) {
      return m ? d : h;
    })(u);
  }
  function U(u, h) {
    if (u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var d = I(h);
    if (d && d.has(u))
      return d.get(u);
    var p = {}, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in u)
      if (R !== "default" && Object.prototype.hasOwnProperty.call(u, R)) {
        var L = m ? Object.getOwnPropertyDescriptor(u, R) : null;
        L && (L.get || L.set) ? Object.defineProperty(p, R, L) : p[R] = u[R];
      }
    return p.default = u, d && d.set(u, p), p;
  }
  function T() {
    return T = Object.assign ? Object.assign.bind() : function(u) {
      for (var h = 1; h < arguments.length; h++) {
        var d = arguments[h];
        for (var p in d)
          Object.prototype.hasOwnProperty.call(d, p) && (u[p] = d[p]);
      }
      return u;
    }, T.apply(this, arguments);
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
  function V(u) {
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
    return h = G(h), h in u ? Object.defineProperty(u, h, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : u[h] = d, u;
  }
  function G(u) {
    var h = Se(u, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function Se(u, h) {
    if (typeof u != "object" || u === null) return u;
    var d = u[Symbol.toPrimitive];
    if (d !== void 0) {
      var p = d.call(u, h);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(u);
  }
  function be(u, h) {
    if (u == null) return {};
    var d = {}, p = Object.keys(u), m, R;
    for (R = 0; R < p.length; R++)
      m = p[R], !(h.indexOf(m) >= 0) && (d[m] = u[m]);
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
  var v = /* @__PURE__ */ function(u) {
    Q(h, u);
    function h() {
      for (var p, m = arguments.length, R = new Array(m), L = 0; L < m; L++)
        R[L] = arguments[L];
      return p = u.call.apply(u, [this].concat(R)) || this, p.state = {
        width: p.props.width,
        height: p.props.height,
        propsWidth: p.props.width,
        propsHeight: p.props.height
      }, p.onResize = function(F, te) {
        var le = te.size;
        p.props.onResize ? (F.persist == null || F.persist(), p.setState(le, function() {
          return p.props.onResize && p.props.onResize(F, te);
        })) : p.setState(le);
      }, p;
    }
    h.getDerivedStateFromProps = function(m, R) {
      return R.propsWidth !== m.width || R.propsHeight !== m.height ? {
        width: m.width,
        height: m.height,
        propsWidth: m.width,
        propsHeight: m.height
      } : null;
    };
    var d = h.prototype;
    return d.render = function() {
      var m = this.props, R = m.handle, L = m.handleSize;
      m.onResize;
      var F = m.onResizeStart, te = m.onResizeStop, le = m.draggableOpts, ie = m.minConstraints, re = m.maxConstraints, me = m.lockAspectRatio, xe = m.axis;
      m.width, m.height;
      var pe = m.resizeHandles, ue = m.style, Y = m.transformScale, W = be(m, k);
      return /* @__PURE__ */ a.createElement(l.default, {
        axis: xe,
        draggableOpts: le,
        handle: R,
        handleSize: L,
        height: this.state.height,
        lockAspectRatio: me,
        maxConstraints: re,
        minConstraints: ie,
        onResizeStart: F,
        onResize: this.onResize,
        onResizeStop: te,
        resizeHandles: pe,
        transformScale: Y,
        width: this.state.width
      }, /* @__PURE__ */ a.createElement("div", T({}, W, {
        style: V(V({}, ue), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(a.Component);
  return di.default = v, v.propTypes = V(V({}, f.resizableProps), {}, {
    children: c.default.element
  }), di;
}
var Hc;
function bp() {
  return Hc || (Hc = 1, ai.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, ai.exports.Resizable = ed().default, ai.exports.ResizableBox = kp().default), ai.exports;
}
var un = {}, Fc;
function td() {
  if (Fc) return un;
  Fc = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var a = l(/* @__PURE__ */ Pn()), c = l(zt());
  function l(z) {
    return z && z.__esModule ? z : { default: z };
  }
  const f = un.resizeHandleAxesType = a.default.arrayOf(a.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), k = un.resizeHandleType = a.default.oneOfType([a.default.node, a.default.func]);
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
    verticalCompact: function(z) {
      z.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: a.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(z) {
      var I = z.layout;
      I !== void 0 && xr().validateLayout(I, "layout");
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
    resizeHandle: k,
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
    children: function(z, I) {
      const U = z[I], T = {};
      c.default.Children.forEach(U, function(A) {
        if (A?.key != null) {
          if (T[A.key])
            throw new Error('Duplicate child key "' + A.key + '" found! This will cause problems in ReactGridLayout.');
          T[A.key] = !0;
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
  var a = A(zt()), c = mi(), l = A(/* @__PURE__ */ Pn()), f = Ls(), k = bp(), z = xr(), I = Ms(), U = td(), T = A(No());
  function A(N) {
    return N && N.__esModule ? N : { default: N };
  }
  function V(N, v) {
    var u = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(N);
      v && (h = h.filter(function(d) {
        return Object.getOwnPropertyDescriptor(N, d).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function B(N) {
    for (var v = 1; v < arguments.length; v++) {
      var u = arguments[v] != null ? arguments[v] : {};
      v % 2 ? V(Object(u), !0).forEach(function(h) {
        G(N, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(u)) : V(Object(u)).forEach(function(h) {
        Object.defineProperty(N, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return N;
  }
  function G(N, v, u) {
    return (v = Se(v)) in N ? Object.defineProperty(N, v, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : N[v] = u, N;
  }
  function Se(N) {
    var v = be(N, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function be(N, v) {
    if (typeof N != "object" || !N) return N;
    var u = N[Symbol.toPrimitive];
    if (u !== void 0) {
      var h = u.call(N, v);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(N);
  }
  let Q = class extends a.default.Component {
    constructor() {
      super(...arguments), G(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), G(this, "elementRef", /* @__PURE__ */ a.default.createRef()), G(this, "onDragStart", (v, u) => {
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
          offsetParent: R
        } = h;
        if (!R) return;
        const L = R.getBoundingClientRect(), F = h.getBoundingClientRect(), te = F.left / p, le = L.left / p, ie = F.top / p, re = L.top / p;
        m.left = te - le + R.scrollLeft, m.top = ie - re + R.scrollTop, this.setState({
          dragging: m
        });
        const {
          x: me,
          y: xe
        } = (0, I.calcXY)(this.getPositionParams(), m.top, m.left, this.props.w, this.props.h);
        return d.call(this, this.props.i, me, xe, {
          e: v,
          node: h,
          newPosition: m
        });
      }), G(this, "onDrag", (v, u, h) => {
        let {
          node: d,
          deltaX: p,
          deltaY: m
        } = u;
        const {
          onDrag: R
        } = this.props;
        if (!R) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let L = this.state.dragging.top + m, F = this.state.dragging.left + p;
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
              margin: q,
              rowHeight: w
            } = this.props, j = W.clientHeight - (0, I.calcGridItemWHPx)(re, w, q[1]);
            L = (0, I.clamp)(L, 0, j);
            const ye = (0, I.calcGridColWidth)(xe), we = me - (0, I.calcGridItemWHPx)(ie, ye, q[0]);
            F = (0, I.clamp)(F, 0, we);
          }
        }
        const pe = {
          top: L,
          left: F
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
        } = (0, I.calcXY)(xe, L, F, ie, re);
        return R.call(this, le, ue, Y, {
          e: v,
          node: d,
          newPosition: pe
        });
      }), G(this, "onDragStop", (v, u) => {
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
          i: R
        } = this.props, {
          left: L,
          top: F
        } = this.state.dragging, te = {
          top: F,
          left: L
        };
        this.setState({
          dragging: null
        });
        const {
          x: le,
          y: ie
        } = (0, I.calcXY)(this.getPositionParams(), F, L, p, m);
        return d.call(this, R, le, ie, {
          e: v,
          node: h,
          newPosition: te
        });
      }), G(this, "onResizeStop", (v, u, h) => this.onResizeHandler(v, u, h, "onResizeStop")), G(this, "onResizeStart", (v, u, h) => this.onResizeHandler(v, u, h, "onResizeStart")), G(this, "onResize", (v, u, h) => this.onResizeHandler(v, u, h, "onResize"));
    }
    shouldComponentUpdate(v, u) {
      if (this.props.children !== v.children || this.props.droppingPosition !== v.droppingPosition) return !0;
      const h = (0, I.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), d = (0, I.calcGridItemPosition)(this.getPositionParams(v), v.x, v.y, v.w, v.h, u);
      return !(0, z.fastPositionEqual)(h, d) || this.props.useCSSTransforms !== v.useCSSTransforms;
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
      const d = v.droppingPosition || {
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
        const R = u.left - p.left, L = u.top - p.top;
        this.onDrag(
          u.e,
          {
            node: h,
            deltaX: R,
            deltaY: L
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
        useCSSTransforms: d
      } = this.props;
      let p;
      return d ? p = (0, z.setTransform)(v) : (p = (0, z.setTopLeft)(v), u && (p.left = (0, z.perc)(v.left / h), p.width = (0, z.perc)(v.width / h))), p;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(v, u) {
      return /* @__PURE__ */ a.default.createElement(f.DraggableCore, {
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
      return (h, d) => (
        /*: Function*/
        u(h, d, v)
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
        cols: d,
        minW: p,
        minH: m,
        maxW: R,
        maxH: L,
        transformScale: F,
        resizeHandles: te,
        resizeHandle: le
      } = this.props, ie = this.getPositionParams(), re = (0, I.calcGridItemPosition)(ie, 0, 0, d, 0).width, me = (0, I.calcGridItemPosition)(ie, 0, 0, p, m), xe = (0, I.calcGridItemPosition)(ie, 0, 0, R, L), pe = [me.width, me.height], ue = [Math.min(xe.width, re), Math.min(xe.height, 1 / 0)];
      return /* @__PURE__ */ a.default.createElement(
        k.Resizable,
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
          transformScale: F,
          resizeHandles: te,
          handle: le
        },
        v
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(v, u, h, d) {
      let {
        node: p,
        size: m,
        handle: R
      } = u;
      const L = this.props[d];
      if (!L) return;
      const {
        x: F,
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
      p && (ue = (0, z.resizeItemInDirection)(R, h, m, me), (0, c.flushSync)(() => {
        this.setState({
          resizing: d === "onResizeStop" ? null : ue
        });
      }));
      let {
        w: Y,
        h: W
      } = (0, I.calcWH)(this.getPositionParams(), ue.width, ue.height, F, te, R);
      Y = (0, I.clamp)(Y, Math.max(xe, 1), pe), W = (0, I.clamp)(W, re, ie), L.call(this, le, Y, W, {
        e: v,
        node: p,
        size: ue,
        handle: R
      });
    }
    render() {
      const {
        x: v,
        y: u,
        w: h,
        h: d,
        isDraggable: p,
        isResizable: m,
        droppingPosition: R,
        useCSSTransforms: L
      } = this.props, F = (0, I.calcGridItemPosition)(this.getPositionParams(), v, u, h, d, this.state), te = a.default.Children.only(this.props.children);
      let le = /* @__PURE__ */ a.default.cloneElement(te, {
        ref: this.elementRef,
        className: (0, T.default)("react-grid-item", te.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": p,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!R,
          cssTransforms: L
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: B(B(B({}, this.props.style), te.props.style), this.createStyle(F))
      });
      return le = this.mixinResizable(le, F, m), le = this.mixinDraggable(le, p), le;
    }
  };
  return li.default = Q, G(Q, "propTypes", {
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
    minW: function(N, v) {
      const u = N[v];
      if (typeof u != "number") return new Error("minWidth not Number");
      if (u > N.w || u > N.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(N, v) {
      const u = N[v];
      if (typeof u != "number") return new Error("maxWidth not Number");
      if (u < N.w || u < N.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(N, v) {
      const u = N[v];
      if (typeof u != "number") return new Error("minHeight not Number");
      if (u > N.h || u > N.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(N, v) {
      const u = N[v];
      if (typeof u != "number") return new Error("maxHeight not Number");
      if (u < N.h || u < N.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: l.default.string.isRequired,
    // Resize handle options
    resizeHandles: U.resizeHandleAxesType,
    resizeHandle: U.resizeHandleType,
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
  }), G(Q, "defaultProps", {
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
  var a = T(zt()), c = /* @__PURE__ */ Ns(), l = U(No()), f = xr(), k = Ms(), z = U(Ep()), I = U(td());
  function U(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function T(v, u) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
    return (T = function(p, m) {
      if (!m && p && p.__esModule) return p;
      var R, L, F = { __proto__: null, default: p };
      if (p === null || typeof p != "object" && typeof p != "function") return F;
      if (R = m ? d : h) {
        if (R.has(p)) return R.get(p);
        R.set(p, F);
      }
      for (const te in p) te !== "default" && {}.hasOwnProperty.call(p, te) && ((L = (R = Object.defineProperty) && Object.getOwnPropertyDescriptor(p, te)) && (L.get || L.set) ? R(F, te, L) : F[te] = p[te]);
      return F;
    })(v, u);
  }
  function A(v, u) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(v);
      u && (d = d.filter(function(p) {
        return Object.getOwnPropertyDescriptor(v, p).enumerable;
      })), h.push.apply(h, d);
    }
    return h;
  }
  function V(v) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? A(Object(h), !0).forEach(function(d) {
        B(v, d, h[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : A(Object(h)).forEach(function(d) {
        Object.defineProperty(v, d, Object.getOwnPropertyDescriptor(h, d));
      });
    }
    return v;
  }
  function B(v, u, h) {
    return (u = G(u)) in v ? Object.defineProperty(v, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[u] = h, v;
  }
  function G(v) {
    var u = Se(v, "string");
    return typeof u == "symbol" ? u : u + "";
  }
  function Se(v, u) {
    if (typeof v != "object" || !v) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var d = h.call(v, u);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(v);
  }
  const be = "react-grid-layout";
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
          node: R
        } = p;
        const {
          layout: L
        } = this.state, F = (0, f.getLayoutItem)(L, u);
        if (!F) return;
        const te = {
          w: F.w,
          h: F.h,
          x: F.x,
          y: F.y,
          placeholder: !0,
          i: u
        };
        return this.setState({
          oldDragItem: (0, f.cloneLayoutItem)(F),
          oldLayout: L,
          activeDrag: te
        }), this.props.onDragStart(L, F, F, null, m, R);
      }), B(this, "onDrag", (u, h, d, p) => {
        let {
          e: m,
          node: R
        } = p;
        const {
          oldDragItem: L
        } = this.state;
        let {
          layout: F
        } = this.state;
        const {
          cols: te,
          allowOverlap: le,
          preventCollision: ie
        } = this.props, re = (0, f.getLayoutItem)(F, u);
        if (!re) return;
        const me = {
          w: re.w,
          h: re.h,
          x: re.x,
          y: re.y,
          placeholder: !0,
          i: u
        };
        F = (0, f.moveElement)(F, re, h, d, !0, ie, (0, f.compactType)(this.props), te, le), this.props.onDrag(F, L, re, me, m, R), this.setState({
          layout: le ? F : (0, f.compact)(F, (0, f.compactType)(this.props), te),
          activeDrag: me
        });
      }), B(this, "onDragStop", (u, h, d, p) => {
        let {
          e: m,
          node: R
        } = p;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: L
        } = this.state;
        let {
          layout: F
        } = this.state;
        const {
          cols: te,
          preventCollision: le,
          allowOverlap: ie
        } = this.props, re = (0, f.getLayoutItem)(F, u);
        if (!re) return;
        F = (0, f.moveElement)(F, re, h, d, !0, le, (0, f.compactType)(this.props), te, ie);
        const xe = ie ? F : (0, f.compact)(F, (0, f.compactType)(this.props), te);
        this.props.onDragStop(xe, L, re, null, m, R);
        const {
          oldLayout: pe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: xe,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(xe, pe);
      }), B(this, "onResizeStart", (u, h, d, p) => {
        let {
          e: m,
          node: R
        } = p;
        const {
          layout: L
        } = this.state, F = (0, f.getLayoutItem)(L, u);
        F && (this.setState({
          oldResizeItem: (0, f.cloneLayoutItem)(F),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(L, F, F, null, m, R));
      }), B(this, "onResize", (u, h, d, p) => {
        let {
          e: m,
          node: R,
          size: L,
          handle: F
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
        let xe = !1, pe, ue, Y;
        const [W, q] = (0, f.withLayoutItem)(le, u, (j) => {
          let ye;
          return ue = j.x, Y = j.y, ["sw", "w", "nw", "n", "ne"].indexOf(F) !== -1 && (["sw", "nw", "w"].indexOf(F) !== -1 && (ue = j.x + (j.w - h), h = j.x !== ue && ue < 0 ? j.w : h, ue = ue < 0 ? 0 : ue), ["ne", "n", "nw"].indexOf(F) !== -1 && (Y = j.y + (j.h - d), d = j.y !== Y && Y < 0 ? j.h : d, Y = Y < 0 ? 0 : Y), xe = !0), re && !me && (ye = (0, f.getAllCollisions)(le, V(V({}, j), {}, {
            w: h,
            h: d,
            x: ue,
            y: Y
          })).filter((Ce) => Ce.i !== j.i).length > 0, ye && (Y = j.y, d = j.h, ue = j.x, h = j.w, xe = !1)), j.w = h, j.h = d, j;
        });
        if (!q) return;
        pe = W, xe && (pe = (0, f.moveElement)(W, q, ue, Y, !0, this.props.preventCollision, (0, f.compactType)(this.props), ie, me));
        const w = {
          w: q.w,
          h: q.h,
          x: q.x,
          y: q.y,
          static: !0,
          i: u
        };
        this.props.onResize(pe, te, q, w, m, R), this.setState({
          layout: me ? pe : (0, f.compact)(pe, (0, f.compactType)(this.props), ie),
          activeDrag: w
        });
      }), B(this, "onResizeStop", (u, h, d, p) => {
        let {
          e: m,
          node: R
        } = p;
        const {
          layout: L,
          oldResizeItem: F
        } = this.state, {
          cols: te,
          allowOverlap: le
        } = this.props, ie = (0, f.getLayoutItem)(L, u), re = le ? L : (0, f.compact)(L, (0, f.compactType)(this.props), te);
        this.props.onResizeStop(re, F, ie, null, m, R);
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
        !((h = u.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(be)))
          return !1;
        const {
          droppingItem: d,
          onDropDragOver: p,
          margin: m,
          cols: R,
          rowHeight: L,
          maxRows: F,
          width: te,
          containerPadding: le,
          transformScale: ie
        } = this.props, re = p?.(u);
        if (re === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const me = V(V({}, d), re), {
          layout: xe
        } = this.state, pe = u.currentTarget.getBoundingClientRect(), ue = u.clientX - pe.left, Y = u.clientY - pe.top, W = {
          left: ue / ie,
          top: Y / ie,
          e: u
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: q,
              top: w
            } = this.state.droppingPosition;
            (q != ue || w != Y) && this.setState({
              droppingPosition: W
            });
          }
        } else {
          const q = {
            cols: R,
            margin: m,
            maxRows: F,
            rowHeight: L,
            containerWidth: te,
            containerPadding: le || m
          }, w = (0, k.calcXY)(q, Y, ue, me.w, me.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ a.createElement("div", {
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
        rowHeight: R,
        maxRows: L,
        useCSSTransforms: F,
        transformScale: te
      } = this.props;
      return /* @__PURE__ */ a.createElement(z.default, {
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
        maxRows: L,
        rowHeight: R,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: F,
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
        margin: R,
        containerPadding: L,
        rowHeight: F,
        maxRows: te,
        isDraggable: le,
        isResizable: ie,
        isBounded: re,
        useCSSTransforms: me,
        transformScale: xe,
        draggableCancel: pe,
        draggableHandle: ue,
        resizeHandles: Y,
        resizeHandle: W
      } = this.props, {
        mounted: q,
        droppingPosition: w
      } = this.state, j = typeof d.isDraggable == "boolean" ? d.isDraggable : !d.static && le, ye = typeof d.isResizable == "boolean" ? d.isResizable : !d.static && ie, we = d.resizeHandles || Y, Ce = j && re && d.isBounded !== !1;
      return /* @__PURE__ */ a.createElement(z.default, {
        containerWidth: p,
        cols: m,
        margin: R,
        containerPadding: L || R,
        maxRows: te,
        rowHeight: F,
        cancel: pe,
        handle: ue,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: j,
        isResizable: ye,
        isBounded: Ce,
        useCSSTransforms: me && q,
        usePercentages: !q,
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
      }, u);
    }
    render() {
      const {
        className: u,
        style: h,
        isDroppable: d,
        innerRef: p
      } = this.props, m = (0, l.default)(be, u), R = V({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ a.createElement("div", {
        ref: p,
        className: m,
        style: R,
        onDrop: d ? this.onDrop : f.noop,
        onDragLeave: d ? this.onDragLeave : f.noop,
        onDragEnter: d ? this.onDragEnter : f.noop,
        onDragOver: d ? this.onDragOver : f.noop
      }, a.Children.map(this.props.children, (L) => this.processGridItem(L)), d && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return oi.default = N, B(N, "displayName", "ReactGridLayout"), B(N, "propTypes", I.default), B(N, "defaultProps", {
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
  }), Vn.findOrGenerateResponsiveLayout = f, Vn.getBreakpointFromWidth = c, Vn.getColsFromBreakpoint = l, Vn.sortBreakpoints = k;
  var a = xr();
  function c(z, I) {
    const U = k(z);
    let T = U[0];
    for (let A = 1, V = U.length; A < V; A++) {
      const B = U[A];
      I > z[B] && (T = B);
    }
    return T;
  }
  function l(z, I) {
    if (!I[z])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + z + " is missing!");
    return I[z];
  }
  function f(z, I, U, T, A, V) {
    if (z[U]) return (0, a.cloneLayout)(z[U]);
    let B = z[T];
    const G = k(I), Se = G.slice(G.indexOf(U));
    for (let be = 0, Q = Se.length; be < Q; be++) {
      const N = Se[be];
      if (z[N]) {
        B = z[N];
        break;
      }
    }
    return B = (0, a.cloneLayout)(B || []), (0, a.compact)((0, a.correctBounds)(B, {
      cols: A
    }), V, A);
  }
  function k(z) {
    return Object.keys(z).sort(function(U, T) {
      return z[U] - z[T];
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
  var a = T(zt()), c = U(/* @__PURE__ */ Pn()), l = /* @__PURE__ */ Ns(), f = xr(), k = rd(), z = U(nd());
  const I = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function U(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function T(d, p) {
    if (typeof WeakMap == "function") var m = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (T = function(L, F) {
      if (!F && L && L.__esModule) return L;
      var te, le, ie = { __proto__: null, default: L };
      if (L === null || typeof L != "object" && typeof L != "function") return ie;
      if (te = F ? R : m) {
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
        for (var R in m) ({}).hasOwnProperty.call(m, R) && (d[R] = m[R]);
      }
      return d;
    }, A.apply(null, arguments);
  }
  function V(d, p) {
    if (d == null) return {};
    var m, R, L = B(d, p);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(d);
      for (R = 0; R < F.length; R++) m = F[R], p.indexOf(m) === -1 && {}.propertyIsEnumerable.call(d, m) && (L[m] = d[m]);
    }
    return L;
  }
  function B(d, p) {
    if (d == null) return {};
    var m = {};
    for (var R in d) if ({}.hasOwnProperty.call(d, R)) {
      if (p.indexOf(R) !== -1) continue;
      m[R] = d[R];
    }
    return m;
  }
  function G(d, p) {
    var m = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(d);
      p && (R = R.filter(function(L) {
        return Object.getOwnPropertyDescriptor(d, L).enumerable;
      })), m.push.apply(m, R);
    }
    return m;
  }
  function Se(d) {
    for (var p = 1; p < arguments.length; p++) {
      var m = arguments[p] != null ? arguments[p] : {};
      p % 2 ? G(Object(m), !0).forEach(function(R) {
        be(d, R, m[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(m)) : G(Object(m)).forEach(function(R) {
        Object.defineProperty(d, R, Object.getOwnPropertyDescriptor(m, R));
      });
    }
    return d;
  }
  function be(d, p, m) {
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
      var R = m.call(d, p);
      if (typeof R != "object") return R;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(d);
  }
  const v = (d) => Object.prototype.toString.call(d);
  function u(d, p) {
    return d == null ? null : Array.isArray(d) ? d : d[p];
  }
  let h = class extends a.Component {
    constructor() {
      super(...arguments), be(this, "state", this.generateInitialState()), be(this, "onLayoutChange", (p) => {
        this.props.onLayoutChange(p, Se(Se({}, this.props.layouts), {}, {
          [this.state.breakpoint]: p
        }));
      });
    }
    generateInitialState() {
      const {
        width: p,
        breakpoints: m,
        layouts: R,
        cols: L
      } = this.props, F = (0, k.getBreakpointFromWidth)(m, p), te = (0, k.getColsFromBreakpoint)(F, L), le = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, k.findOrGenerateResponsiveLayout)(R, m, F, F, te, le),
        breakpoint: F,
        cols: te
      };
    }
    static getDerivedStateFromProps(p, m) {
      if (!(0, l.deepEqual)(p.layouts, m.layouts)) {
        const {
          breakpoint: R,
          cols: L
        } = m;
        return {
          layout: (0, k.findOrGenerateResponsiveLayout)(p.layouts, p.breakpoints, R, R, L, p.compactType),
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
        cols: R,
        layouts: L,
        compactType: F
      } = this.props, te = this.props.breakpoint || (0, k.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), le = this.state.breakpoint, ie = (0, k.getColsFromBreakpoint)(te, R), re = Se({}, L);
      if (le !== te || p.breakpoints !== m || p.cols !== R) {
        le in re || (re[le] = (0, f.cloneLayout)(this.state.layout));
        let pe = (0, k.findOrGenerateResponsiveLayout)(re, m, te, le, ie, F);
        pe = (0, f.synchronizeLayoutWithChildren)(pe, this.props.children, ie, F, this.props.allowOverlap), re[te] = pe, this.props.onBreakpointChange(te, ie), this.props.onLayoutChange(pe, re), this.setState({
          breakpoint: te,
          layout: pe,
          cols: ie
        });
      }
      const me = u(this.props.margin, te), xe = u(this.props.containerPadding, te);
      this.props.onWidthChange(this.props.width, me, ie, xe);
    }
    render() {
      const p = this.props, {
        breakpoint: m,
        breakpoints: R,
        cols: L,
        layouts: F,
        margin: te,
        containerPadding: le,
        onBreakpointChange: ie,
        onLayoutChange: re,
        onWidthChange: me
      } = p, xe = V(p, I);
      return /* @__PURE__ */ a.createElement(z.default, A({}, xe, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: u(te, this.state.breakpoint),
        containerPadding: u(le, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return fi.default = h, be(h, "propTypes", {
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
      if (v(d[p]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + v(d[p]));
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
  }), fi;
}
var Oo = {}, id = function() {
  if (typeof Map < "u")
    return Map;
  function a(c, l) {
    var f = -1;
    return c.some(function(k, z) {
      return k[0] === l ? (f = z, !0) : !1;
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
        var f = a(this.__entries__, l), k = this.__entries__[f];
        return k && k[1];
      }, c.prototype.set = function(l, f) {
        var k = a(this.__entries__, l);
        ~k ? this.__entries__[k][1] = f : this.__entries__.push([l, f]);
      }, c.prototype.delete = function(l) {
        var f = this.__entries__, k = a(f, l);
        ~k && f.splice(k, 1);
      }, c.prototype.has = function(l) {
        return !!~a(this.__entries__, l);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(l, f) {
        f === void 0 && (f = null);
        for (var k = 0, z = this.__entries__; k < z.length; k++) {
          var I = z[k];
          l.call(f, I[1], I[0]);
        }
      }, c;
    }()
  );
}(), Ds = typeof window < "u" && typeof document < "u" && window.document === document, jo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), zp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(jo) : function(a) {
    return setTimeout(function() {
      return a(Date.now());
    }, 1e3 / 60);
  };
}(), Cp = 2;
function Op(a, c) {
  var l = !1, f = !1, k = 0;
  function z() {
    l && (l = !1, a()), f && U();
  }
  function I() {
    zp(z);
  }
  function U() {
    var T = Date.now();
    if (l) {
      if (T - k < Cp)
        return;
      f = !0;
    } else
      l = !0, f = !1, setTimeout(I, c);
    k = T;
  }
  return U;
}
var Pp = 20, Dp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], jp = typeof MutationObserver < "u", Tp = (
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
      !Ds || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, a.prototype.disconnect_ = function() {
      !Ds || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, a.prototype.onTransitionEnd_ = function(c) {
      var l = c.propertyName, f = l === void 0 ? "" : l, k = Dp.some(function(z) {
        return !!~f.indexOf(z);
      });
      k && this.refresh();
    }, a.getInstance = function() {
      return this.instance_ || (this.instance_ = new a()), this.instance_;
    }, a.instance_ = null, a;
  }()
), od = function(a, c) {
  for (var l = 0, f = Object.keys(c); l < f.length; l++) {
    var k = f[l];
    Object.defineProperty(a, k, {
      value: c[k],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return a;
}, vr = function(a) {
  var c = a && a.ownerDocument && a.ownerDocument.defaultView;
  return c || jo;
}, ld = Mo(0, 0, 0, 0);
function To(a) {
  return parseFloat(a) || 0;
}
function Vc(a) {
  for (var c = [], l = 1; l < arguments.length; l++)
    c[l - 1] = arguments[l];
  return c.reduce(function(f, k) {
    var z = a["border-" + k + "-width"];
    return f + To(z);
  }, 0);
}
function Np(a) {
  for (var c = ["top", "right", "bottom", "left"], l = {}, f = 0, k = c; f < k.length; f++) {
    var z = k[f], I = a["padding-" + z];
    l[z] = To(I);
  }
  return l;
}
function Mp(a) {
  var c = a.getBBox();
  return Mo(0, 0, c.width, c.height);
}
function Lp(a) {
  var c = a.clientWidth, l = a.clientHeight;
  if (!c && !l)
    return ld;
  var f = vr(a).getComputedStyle(a), k = Np(f), z = k.left + k.right, I = k.top + k.bottom, U = To(f.width), T = To(f.height);
  if (f.boxSizing === "border-box" && (Math.round(U + z) !== c && (U -= Vc(f, "left", "right") + z), Math.round(T + I) !== l && (T -= Vc(f, "top", "bottom") + I)), !Ap(a)) {
    var A = Math.round(U + z) - c, V = Math.round(T + I) - l;
    Math.abs(A) !== 1 && (U -= A), Math.abs(V) !== 1 && (T -= V);
  }
  return Mo(k.left, k.top, U, T);
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
  return Ds ? Ip(a) ? Mp(a) : Lp(a) : ld;
}
function Hp(a) {
  var c = a.x, l = a.y, f = a.width, k = a.height, z = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, I = Object.create(z.prototype);
  return od(I, {
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
function Mo(a, c, l, f) {
  return { x: a, y: c, width: l, height: f };
}
var Fp = (
  /** @class */
  function() {
    function a(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mo(0, 0, 0, 0), this.target = c;
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
  return typeof jo.ResizeObserver < "u" ? jo.ResizeObserver : ad;
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
  }), Oo.default = be;
  var a = I(zt()), c = z(/* @__PURE__ */ Pn()), l = z(Vp), f = z(No());
  const k = ["measureBeforeMount"];
  function z(Q) {
    return Q && Q.__esModule ? Q : { default: Q };
  }
  function I(Q, N) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (I = function(h, d) {
      if (!d && h && h.__esModule) return h;
      var p, m, R = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return R;
      if (p = d ? u : v) {
        if (p.has(h)) return p.get(h);
        p.set(h, R);
      }
      for (const L in h) L !== "default" && {}.hasOwnProperty.call(h, L) && ((m = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, L)) && (m.get || m.set) ? p(R, L, m) : R[L] = h[L]);
      return R;
    })(Q, N);
  }
  function U() {
    return U = Object.assign ? Object.assign.bind() : function(Q) {
      for (var N = 1; N < arguments.length; N++) {
        var v = arguments[N];
        for (var u in v) ({}).hasOwnProperty.call(v, u) && (Q[u] = v[u]);
      }
      return Q;
    }, U.apply(null, arguments);
  }
  function T(Q, N) {
    if (Q == null) return {};
    var v, u, h = A(Q, N);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(Q);
      for (u = 0; u < d.length; u++) v = d[u], N.indexOf(v) === -1 && {}.propertyIsEnumerable.call(Q, v) && (h[v] = Q[v]);
    }
    return h;
  }
  function A(Q, N) {
    if (Q == null) return {};
    var v = {};
    for (var u in Q) if ({}.hasOwnProperty.call(Q, u)) {
      if (N.indexOf(u) !== -1) continue;
      v[u] = Q[u];
    }
    return v;
  }
  function V(Q, N, v) {
    return (N = B(N)) in Q ? Object.defineProperty(Q, N, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : Q[N] = v, Q;
  }
  function B(Q) {
    var N = G(Q, "string");
    return typeof N == "symbol" ? N : N + "";
  }
  function G(Q, N) {
    if (typeof Q != "object" || !Q) return Q;
    var v = Q[Symbol.toPrimitive];
    if (v !== void 0) {
      var u = v.call(Q, N);
      if (typeof u != "object") return u;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (N === "string" ? String : Number)(Q);
  }
  const Se = "react-grid-layout";
  function be(Q) {
    var N;
    return N = class extends a.Component {
      constructor() {
        super(...arguments), V(this, "state", {
          width: 1280
        }), V(this, "elementRef", /* @__PURE__ */ a.createRef()), V(this, "mounted", !1), V(this, "resizeObserver", void 0);
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
        } = u, d = T(u, k);
        return h && !this.mounted ? /* @__PURE__ */ a.createElement("div", {
          className: (0, f.default)(this.props.className, Se),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ a.createElement(Q, U({
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
  return Oo;
}
var Yc;
function Yp() {
  return Yc || (Yc = 1, function(a) {
    a.exports = nd().default, a.exports.utils = xr(), a.exports.calculateUtils = Ms(), a.exports.Responsive = Rp().default, a.exports.Responsive.utils = rd(), a.exports.WidthProvider = Gp().default;
  }(bs)), bs.exports;
}
var Xc = Yp();
const Xp = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, ud = {
  XS: { w: 2, h: 2 },
  S: { w: 3, h: 3 },
  M: { w: 3, h: 4 },
  L: { w: 6, h: 4 },
  XL: { w: 6, h: 8 }
}, Ue = (a, c, l, f, k) => ({
  i: a,
  x: c,
  y: l,
  w: f,
  h: k,
  minW: 2,
  minH: 2,
  maxW: 12,
  maxH: 16
}), Do = {
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
function js(a, c, l) {
  return Object.entries(ud).map(([f, k]) => ({
    size: f,
    distance: Math.abs(Math.min(k.w, l) - a) + Math.abs(k.h - c)
  })).sort((f, k) => f.distance - k.distance)[0]?.size ?? "S";
}
function cd(a, c) {
  const l = ud[a];
  return { w: Math.min(l.w, c), h: l.h };
}
function Qp(a, c) {
  const l = js(a.w, a.h, c), f = cd(l, c);
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
    for (let k = 0; k <= l - c.w; k++) {
      const z = { ...c, x: k, y: f };
      if (!Ts(a, z)) return z;
    }
  return { ...c, x: 0, y: Math.max(0, ...a.map((f) => f.y + f.h)) };
}
function gi(a) {
  const c = {};
  return Object.keys(cn).forEach((l) => {
    const f = cn[l], k = Array.isArray(a?.[l]) ? a[l] : [], z = new Map(k.map((A) => [A.i, A])), I = (Do[l] || []).map((A) => {
      const V = z.get(A.i);
      if (!V) return { ...A };
      const B = Math.min(Math.max(1, V.w), f);
      return {
        ...A,
        ...V,
        w: B,
        x: Math.max(0, Math.min(V.x, f - B)),
        y: Math.max(0, V.y),
        minW: 2,
        minH: 2
      };
    }), U = new Set(I.map((A) => A.i)), T = k.filter((A) => !U.has(A.i)).map((A) => ({
      ...A,
      w: Math.min(Math.max(1, A.w), f),
      x: Math.max(0, Math.min(A.x, f - Math.min(A.w, f))),
      y: Math.max(0, A.y),
      minW: 2,
      minH: 2
    }));
    c[l] = [...I, ...T];
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
    return gi(f ? f.layouts : null);
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
      layouts: k?.layouts ?? gi(null),
      visibility: f,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  async reset(c, l) {
    localStorage.removeItem(this.key(c, l)), localStorage.removeItem(`argus:dashboard-layout-v2:${c}:${l}`), localStorage.removeItem(`argus:dashboard-layout:${c}:${l}`);
  }
}
const Jp = Xc.WidthProvider(Xc.Responsive);
function eh({ widget: a, editing: c, size: l, onSize: f, onHide: k, onReset: z, children: I }) {
  return /* @__PURE__ */ x.jsxs(
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
        c && /* @__PURE__ */ x.jsxs("header", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }, children: [
          /* @__PURE__ */ x.jsx(
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
          /* @__PURE__ */ x.jsx("strong", { style: { fontSize: "12px", opacity: 0.8 }, children: a.title }),
          /* @__PURE__ */ x.jsxs("details", { className: "argus-widget__options", style: { position: "relative" }, children: [
            /* @__PURE__ */ x.jsx("summary", { "aria-label": `Opciones de ${a.title}`, style: { cursor: "pointer", listStyle: "none", fontSize: "14px" }, children: "•••" }),
            /* @__PURE__ */ x.jsxs("div", { style: {
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
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", opacity: 0.6 }, children: "Tamaño" }),
              /* @__PURE__ */ x.jsx("div", { style: { display: "flex", gap: "2px" }, children: ["XS", "S", "M", "L", "XL"].map((U) => /* @__PURE__ */ x.jsx(
                "button",
                {
                  type: "button",
                  style: {
                    background: U === l ? "#1E88E5" : "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "10px",
                    padding: "4px",
                    flex: 1,
                    cursor: "pointer"
                  },
                  onClick: () => f(U),
                  children: U
                },
                U
              )) }),
              /* @__PURE__ */ x.jsx(
                "button",
                {
                  type: "button",
                  onClick: z,
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
              /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx("div", { style: { flex: 1, height: "100%", overflow: "hidden", pointerEvents: c ? "none" : "auto" }, children: I })
      ]
    }
  );
}
function th({
  widgets: a,
  widgetComponents: c,
  storage: l,
  userId: f,
  dashboardId: k,
  onEditing: z,
  registerEditor: I,
  isEditing: U,
  onToggleEditing: T
}) {
  const A = Fe.useMemo(() => Object.fromEntries(a.map((W) => [W.id, W.visible])), [a]), [V, B] = Fe.useState(Do), [G, Se] = Fe.useState(A), [be, Q] = Fe.useState(!1), [N, v] = Fe.useState(!1), [u, h] = Fe.useState("lg"), [d, p] = Fe.useState(""), m = U !== void 0 ? U : be, R = (W) => {
    Q(W), z(W), T && W !== U && T();
  }, L = Fe.useRef(Do), F = Fe.useRef(), te = Fe.useRef(!1);
  Fe.useEffect(() => {
    I(Q);
  }, [I]), Fe.useEffect(() => {
    let W = !0;
    return v(!1), Promise.all([
      l.load(f, k),
      l.loadVisibility?.(f, k)
    ]).then(([q, w]) => {
      if (!W) return;
      const j = gi(q);
      B(j), L.current = j, w && Se({ ...A, ...w }), v(!0);
    }), () => {
      W = !1;
    };
  }, [l, f, k, A]), Fe.useEffect(() => {
    z(m), N && te.current && !m && l.save(f, k, L.current), te.current = m;
  }, [m, N, z, l, f, k]), Fe.useEffect(() => {
    const W = (q) => {
      m && q.key === "Escape" && (R(!1), p("Edición finalizada"));
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [m]), Fe.useEffect(() => () => clearTimeout(F.current), []);
  const le = (W, q = !1) => {
    B(W), L.current = W, clearTimeout(F.current), F.current = window.setTimeout(() => l.save(f, k, W), q ? 0 : 550);
  }, ie = (W, q) => {
    const w = { ...G, [W]: q };
    Se(w), l.saveVisibility?.(f, k, w), p(q ? "Widget visible" : "Widget oculto");
  }, re = (W, q, w) => {
    const j = L.current, ye = j[u] || [], we = ye.filter((je) => je.i !== W), Ce = Ts(we, q) ? Kp(we, q, cn[u]) : q, Pe = { ...j, [u]: ye.map((je) => je.i === W ? Ce : je) };
    le(Pe, !0), p(w);
  }, me = (W, q) => {
    const w = (L.current[u] || []).find((ye) => ye.i === W);
    if (!w) return;
    const j = cd(q, cn[u]);
    re(W, { ...w, ...j, x: Math.max(0, Math.min(w.x, cn[u] - j.w)) }, `Tamaño ${q}`);
  }, xe = (W) => {
    const q = (Do[u] || []).find((w) => w.i === W);
    q && re(W, { ...q }, "Widget restablecido");
  }, pe = (W, q, w) => {
    const j = Qp(w, cn[u]);
    re(w.i, j, `Tamaño ${js(j.w, j.h, cn[u])}`);
  }, ue = async () => {
    if (!confirm("¿Restablecer el diseño predeterminado?")) return;
    await l.reset(f, k);
    const W = gi(null);
    Se(A), le(W, !0), p("Diseño predeterminado restaurado");
  }, Y = V[u] || [];
  return N ? /* @__PURE__ */ x.jsxs("section", { className: `argus-dashboard ${m ? "argus-dashboard--editing" : ""}`, style: { padding: "20px", minHeight: "calc(100vh - 80px)" }, children: [
    m && d && /* @__PURE__ */ x.jsxs("div", { "aria-live": "polite", style: { padding: "8px 16px", background: "rgba(30, 136, 229, 0.2)", border: "1px solid rgba(30, 136, 229, 0.4)", borderRadius: "12px", marginBottom: "16px", fontSize: "13px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ x.jsx("span", { children: d }),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          onClick: ue,
          style: { background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "8px", padding: "4px 8px", fontSize: "11px", cursor: "pointer" },
          children: "Restablecer diseño"
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx(Ec, { children: /* @__PURE__ */ x.jsx(
      Jp,
      {
        className: "argus-dashboard-grid",
        layouts: V,
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
          m && (B(q), L.current = q);
        },
        onResizeStop: pe,
        onDragStop: (W, q, w) => {
          const j = (L.current[u] || []).filter((ye) => ye.i !== w.i);
          if (Ts(j, w)) {
            B({ ...L.current }), p("Posición bloqueada por colisión");
            return;
          }
          re(w.i, w, "Posición guardada");
        },
        useCSSTransforms: !0,
        children: a.filter((W) => G[W.id] !== !1 && c[W.id] !== void 0).map((W) => {
          const q = Y.find((j) => j.i === W.id), w = q ? js(q.w, q.h, cn[u]) : W.size;
          return /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(Ec, { children: /* @__PURE__ */ x.jsx(
            eh,
            {
              widget: W,
              editing: m,
              size: w,
              onSize: (j) => me(W.id, j),
              onHide: () => ie(W.id, !1),
              onReset: () => xe(W.id),
              children: c[W.id]
            }
          ) }) }, W.id);
        })
      }
    ) }),
    m && a.filter((W) => G[W.id] === !1).length > 0 && /* @__PURE__ */ x.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }, children: a.filter((W) => G[W.id] === !1).map((W) => /* @__PURE__ */ x.jsx(
      "button",
      {
        type: "button",
        onClick: () => ie(W.id, !0),
        style: { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", color: "white", fontSize: "12px", padding: "6px 12px", cursor: "pointer" },
        children: `Mostrar ${W.title}`
      },
      W.id
    )) })
  ] }) : /* @__PURE__ */ x.jsx("section", { className: "argus-dashboard", style: { padding: "24px", textAlign: "center", opacity: 0.6 }, children: "Cargando Argus Hub..." });
}
function nh({ hass: a }) {
  const [c, l] = Fe.useState(!1), f = a?.states || {}, k = Object.values(f).find(
    (d) => d.entity_id?.startsWith("alarm_control_panel.argus")
  ), z = k?.state || "disarmed", I = k?.attributes?.friendly_name?.toUpperCase() || a?.config?.location_name?.toUpperCase() || "MI HOGAR", U = z === "disarmed", T = z === "triggered", A = z === "arming" || z === "pending", V = !U && !T && !A, B = !!a, G = Object.values(f).filter(
    (d) => d.entity_id.startsWith("binary_sensor.") && ["door", "window", "motion", "garage_door"].includes(
      d.attributes.device_class
    )
  ).slice(0, 5), Se = (() => {
    switch (z) {
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
  })(), be = [
    { id: "armed_home", service: "alarm_arm_home", icon: "🏠", label: "EN CASA", color: "#1E88E5" },
    { id: "armed_away", service: "alarm_arm_away", icon: "🔒", label: "AUSENTE", color: "#E53935" },
    { id: "armed_night", service: "alarm_arm_night", icon: "🌙", label: "NOCHE", color: "#8E24AA" },
    { id: "armed_vacation", service: "alarm_arm_vacation", icon: "✈️", label: "VACACIONES", color: "#00897B" }
  ], Q = (d) => {
    a && k && a.callService("alarm_control_panel", d, {
      entity_id: k.entity_id
    });
  }, N = () => {
    c ? (a && k && a.callService("alarm_control_panel", "alarm_trigger", {
      entity_id: k.entity_id
    }), l(!1)) : (l(!0), setTimeout(() => l(!1), 3e3));
  }, v = T ? "#FF3B30" : A ? "#F5B041" : V ? "#F5A623" : "#43A047", u = () => /* @__PURE__ */ x.jsxs(
    "svg",
    {
      viewBox: "0 0 200 220",
      width: "100%",
      height: "100%",
      style: {
        filter: `drop-shadow(0 12px 28px ${v}55)`,
        maxWidth: "130px",
        maxHeight: "150px",
        margin: "auto",
        display: "block",
        overflow: "visible"
      },
      children: [
        /* @__PURE__ */ x.jsxs("defs", { children: [
          /* @__PURE__ */ x.jsxs("linearGradient", { id: "sg", x1: "20%", y1: "5%", x2: "85%", y2: "100%", children: [
            /* @__PURE__ */ x.jsx("stop", { stopColor: "#fff", stopOpacity: ".32" }),
            /* @__PURE__ */ x.jsx("stop", { offset: ".28", stopColor: v, stopOpacity: ".82" }),
            /* @__PURE__ */ x.jsx("stop", { offset: "1", stopColor: v, stopOpacity: ".18" })
          ] }),
          /* @__PURE__ */ x.jsxs("filter", { id: "sglow", filterUnits: "userSpaceOnUse", x: "-60", y: "-60", width: "320", height: "340", children: [
            /* @__PURE__ */ x.jsx("feGaussianBlur", { stdDeviation: "5", result: "b" }),
            /* @__PURE__ */ x.jsxs("feMerge", { children: [
              /* @__PURE__ */ x.jsx("feMergeNode", { in: "b" }),
              /* @__PURE__ */ x.jsx("feMergeNode", { in: "SourceGraphic" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            d: "M100 18 L158 44 v46 c0 46-26 73-58 91 C68 163 42 136 42 90 V44 z",
            fill: "url(#sg)",
            stroke: v,
            strokeWidth: "3",
            filter: "url(#sglow)"
          }
        ),
        /* @__PURE__ */ x.jsx("path", { d: "M100 28 L150 50", stroke: "#fff", strokeOpacity: ".4", strokeWidth: "2.5", strokeLinecap: "round" }),
        /* @__PURE__ */ x.jsx("circle", { cx: "100", cy: "108", r: "44", fill: "rgba(0,8,20,.3)", stroke: "rgba(255,255,255,.18)", strokeWidth: "1.5" }),
        /* @__PURE__ */ x.jsx("g", { fill: "none", stroke: "#fff", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round", filter: "url(#sglow)", children: T ? /* @__PURE__ */ x.jsx("path", { d: "M88 96 L112 120 M112 96 L88 120" }) : A ? /* @__PURE__ */ x.jsx("path", { d: "M100 88 v22 l14 14" }) : V ? /* @__PURE__ */ x.jsx("path", { d: "M100 88 v22 l14 14" }) : /* @__PURE__ */ x.jsx("path", { d: "M84 108 l12 12 l22-22" }) }),
        !T && /* @__PURE__ */ x.jsxs("circle", { cx: "100", cy: "108", r: "56", fill: "none", stroke: v, strokeOpacity: ".38", strokeWidth: "2", children: [
          /* @__PURE__ */ x.jsx("animate", { attributeName: "r", values: "50;65;50", dur: "3.5s", repeatCount: "indefinite" }),
          /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: ".6;.06;.6", dur: "3.5s", repeatCount: "indefinite" })
        ] }),
        T && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsxs("circle", { cx: "100", cy: "108", r: "55", fill: "none", stroke: "#FF3B30", strokeWidth: "3.5", children: [
            /* @__PURE__ */ x.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.75s", repeatCount: "indefinite" }),
            /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.75s", repeatCount: "indefinite" })
          ] }),
          /* @__PURE__ */ x.jsxs("circle", { cx: "100", cy: "108", r: "55", fill: "none", stroke: "#FF3B30", strokeWidth: "3.5", children: [
            /* @__PURE__ */ x.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.75s", begin: "0.375s", repeatCount: "indefinite" }),
            /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.75s", begin: "0.375s", repeatCount: "indefinite" })
          ] })
        ] })
      ]
    }
  ), h = ({ sensor: d }) => {
    const p = d.state === "on", m = d.attributes?.battery_level ?? d.attributes?.battery ?? null, R = d.attributes?.device_class, L = R === "motion" ? "🏃‍♂️" : R === "window" ? "🪟" : R === "garage_door" ? "🚘" : "🚪", F = (d.attributes?.friendly_name || d.entity_id).toUpperCase().replace("BINARY_SENSOR.", "").slice(0, 20);
    return /* @__PURE__ */ x.jsxs(
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
          /* @__PURE__ */ x.jsx("span", { style: { fontSize: "16px", flexShrink: 0 }, children: L }),
          /* @__PURE__ */ x.jsx(
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
              children: F
            }
          ),
          m !== null && /* @__PURE__ */ x.jsxs("span", { style: { fontSize: "10px", fontWeight: 700, opacity: 0.6 }, children: [
            "🔋",
            m,
            "%"
          ] }),
          /* @__PURE__ */ x.jsx(
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
  return /* @__PURE__ */ x.jsxs(
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
        /* @__PURE__ */ x.jsxs(
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
              /* @__PURE__ */ x.jsxs(
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
                    I
                  ]
                }
              ),
              /* @__PURE__ */ x.jsxs(
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
                    /* @__PURE__ */ x.jsx("span", { style: { width: "7px", height: "7px", borderRadius: "50%", background: B ? "#66BB6A" : "#EF5350", display: "inline-block" } }),
                    B ? "Conectado" : "Desconectado"
                  ]
                }
              ),
              /* @__PURE__ */ x.jsx("div", { style: { marginLeft: "auto" }, children: /* @__PURE__ */ x.jsx(
                "span",
                {
                  style: {
                    fontSize: "11px",
                    fontWeight: 900,
                    padding: "4px 10px",
                    borderRadius: "8px",
                    background: Se.bg,
                    color: Se.color,
                    border: `1px solid ${Se.border}`,
                    letterSpacing: "0.03em"
                  },
                  children: Se.text
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { style: { flex: 1, display: "flex", gap: "14px", overflow: "hidden", minHeight: 0 }, children: [
          /* @__PURE__ */ x.jsxs(
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
                /* @__PURE__ */ x.jsx(
                  "div",
                  {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      flex: 1
                    },
                    children: be.map((d) => {
                      const p = z === d.id;
                      return /* @__PURE__ */ x.jsxs(
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
                            p && /* @__PURE__ */ x.jsx(
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
                            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "22px", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }, children: d.icon }),
                            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "10px", fontWeight: 900, letterSpacing: "0.04em", color: p ? d.color : "rgba(255,255,255,0.8)" }, children: d.label })
                          ]
                        },
                        d.id
                      );
                    })
                  }
                ),
                /* @__PURE__ */ x.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => Q("alarm_disarm"),
                    style: {
                      background: U ? "rgba(67,160,71,0.15)" : "linear-gradient(135deg, #2E7D32 0%, #43A047 100%)",
                      border: `1px solid ${U ? "rgba(67,160,71,0.3)" : "rgba(67,160,71,0.6)"}`,
                      borderRadius: "14px",
                      color: U ? "rgba(255,255,255,0.5)" : "#fff",
                      fontSize: "12px",
                      fontWeight: 900,
                      padding: "11px 10px",
                      cursor: U ? "default" : "pointer",
                      letterSpacing: "0.04em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.25s ease"
                    },
                    disabled: U,
                    children: [
                      /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px" }, children: U ? "🔓" : "🔒" }),
                      U ? "DESARMADO" : "Desliza para desarmar"
                    ]
                  }
                ),
                /* @__PURE__ */ x.jsxs(
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
                      /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px" }, children: "⚠️" }),
                      c ? "¡CONFIRMAR SOS!" : "🔴 SOS / PÁNICO"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ x.jsx(
            "div",
            {
              style: {
                flexShrink: 0,
                width: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ x.jsx(u, {})
            }
          ),
          /* @__PURE__ */ x.jsx(
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
              children: G.length === 0 ? /* @__PURE__ */ x.jsxs(
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
                    /* @__PURE__ */ x.jsx("span", { style: { fontSize: "24px" }, children: "🔍" }),
                    "No hay sensores detectados"
                  ]
                }
              ) : G.map((d) => /* @__PURE__ */ x.jsx(h, { sensor: d }, d.entity_id))
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
  return /* @__PURE__ */ x.jsxs(
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
        /* @__PURE__ */ x.jsxs("span", { style: { fontSize: "12px", fontWeight: 900, letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ x.jsx("span", { children: a }),
          " ",
          c
        ] }),
        l
      ]
    }
  );
}
function Po({ label: a }) {
  return /* @__PURE__ */ x.jsx(
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
  return /* @__PURE__ */ x.jsx(
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
  return /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
    /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.6 }, children: a }),
    /* @__PURE__ */ x.jsx(
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
  const [c, l] = Fe.useState("armed_home"), f = Ps.find((k) => k.id === c) || Ps[1];
  return /* @__PURE__ */ x.jsxs(
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
        /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", flexShrink: 0 }, children: "📋 Modos" }),
        /* @__PURE__ */ x.jsx(
          "div",
          {
            style: {
              display: "flex",
              gap: "4px",
              overflowX: "auto",
              flexShrink: 0,
              paddingBottom: "2px"
            },
            children: Ps.map((k) => {
              const z = c === k.id;
              return /* @__PURE__ */ x.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => l(k.id),
                  style: {
                    background: z ? `${k.color}22` : "transparent",
                    border: `1.5px solid ${z ? k.color : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "10px",
                    color: z ? k.color : "rgba(255,255,255,0.6)",
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
                    /* @__PURE__ */ x.jsx("span", { children: k.icon }),
                    /* @__PURE__ */ x.jsx("span", { children: k.label })
                  ]
                },
                k.id
              );
            })
          }
        ),
        /* @__PURE__ */ x.jsxs(
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
              /* @__PURE__ */ x.jsxs(yr, { icon: "🔴", title: "SENSORES DE INTRUSIÓN", children: [
                /* @__PURE__ */ x.jsx(Po, { label: "sensores" }),
                /* @__PURE__ */ x.jsx(pi, { label: "+ Seleccionar" }),
                /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                  /* @__PURE__ */ x.jsx("input", { type: "checkbox", style: { accentColor: f.color } }),
                  "Bloquear si abiertos"
                ] }),
                /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                  /* @__PURE__ */ x.jsx("input", { type: "checkbox", style: { accentColor: f.color } }),
                  "Esperar armado en espera"
                ] })
              ] }),
              /* @__PURE__ */ x.jsxs(yr, { icon: "🚫", title: "OMITIR", children: [
                /* @__PURE__ */ x.jsx(Po, { label: "omitidos" }),
                /* @__PURE__ */ x.jsx(pi, { label: "+ Añadir" })
              ] }),
              /* @__PURE__ */ x.jsxs(yr, { icon: "📢", title: "SIRENAS", children: [
                /* @__PURE__ */ x.jsx(Po, { label: "sirenas" }),
                /* @__PURE__ */ x.jsx(pi, { label: "+ Seleccionar" })
              ] }),
              /* @__PURE__ */ x.jsxs(yr, { icon: "⏱", title: "TIEMPOS", children: [
                /* @__PURE__ */ x.jsx(Qc, { label: "Armado (s)", defaultVal: 0 }),
                /* @__PURE__ */ x.jsx(Qc, { label: "Retraso de entrada (s)", defaultVal: 60 })
              ] }),
              /* @__PURE__ */ x.jsxs(yr, { icon: "🔗", title: "PANELES EXTERNOS", children: [
                /* @__PURE__ */ x.jsx(Po, { label: "paneles" }),
                /* @__PURE__ */ x.jsx(pi, { label: "+ Seleccionar" }),
                /* @__PURE__ */ x.jsx(pi, { label: "+ Añadir" })
              ] }),
              /* @__PURE__ */ x.jsx(yr, { icon: "📡", title: "MQTT", children: /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: "12px", fontWeight: 600 }, children: [
                /* @__PURE__ */ x.jsx("span", { children: "Activar MQTT" }),
                /* @__PURE__ */ x.jsx("input", { type: "checkbox", style: { accentColor: f.color, width: "16px", height: "16px" } })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function ih({ hass: a }) {
  const [c, l] = Fe.useState("idle"), f = a?.states || {}, k = Object.values(f).find(
    (U) => U.entity_id?.startsWith("alarm_control_panel.argus")
  ), z = () => {
    c === "idle" ? (l("confirm"), setTimeout(() => l("idle"), 4e3)) : c === "confirm" && (a && k && a.callService("alarm_control_panel", "alarm_trigger", {
      entity_id: k.entity_id
    }), l("activated"), setTimeout(() => l("idle"), 5e3));
  }, I = c === "activated" ? {
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
  return /* @__PURE__ */ x.jsxs(
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
        /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px" }, children: [
          /* @__PURE__ */ x.jsxs(
            "button",
            {
              type: "button",
              onClick: z,
              style: {
                ...I,
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
              onMouseDown: (U) => {
                U.currentTarget.style.transform = "scale(0.97)";
              },
              onMouseUp: (U) => {
                U.currentTarget.style.transform = "scale(1)";
              },
              children: [
                /* @__PURE__ */ x.jsx("span", { style: { fontSize: "22px" }, children: c === "activated" ? "🚨" : c === "confirm" ? "⚠️" : "🔴" }),
                /* @__PURE__ */ x.jsx("span", { children: c === "activated" ? "¡SOS ACTIVADO!" : c === "confirm" ? "¡CONFIRMAR SOS PÁNICO!" : "SOS / PÁNICO" })
              ]
            }
          ),
          c === "confirm" && /* @__PURE__ */ x.jsx(
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
          c === "idle" && /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx("style", { children: `
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
  const [c] = Fe.useState(() => oh(a)), l = (f, k, z = !1) => /* @__PURE__ */ x.jsx(
    "button",
    {
      type: "button",
      title: k,
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
        color: z ? "#EF5350" : "white",
        transition: "background 0.2s"
      },
      onMouseEnter: (I) => {
        I.currentTarget.style.background = z ? "rgba(229,57,53,0.2)" : "rgba(255,255,255,0.14)";
      },
      onMouseLeave: (I) => {
        I.currentTarget.style.background = "rgba(255,255,255,0.07)";
      },
      children: f
    },
    f
  );
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "14px 16px", boxSizing: "border-box", gap: "12px" }, children: [
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }, children: [
      /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase" }, children: "🛡️ Control de Acceso" }),
      /* @__PURE__ */ x.jsx(
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
    /* @__PURE__ */ x.jsxs("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }, children: [
      c.map((f) => /* @__PURE__ */ x.jsxs(
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
            /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: "12px" }, children: [
              /* @__PURE__ */ x.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "6px" }, children: [
                /* @__PURE__ */ x.jsx(
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
                /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 700, opacity: 0.6, letterSpacing: "0.03em", textTransform: "uppercase" }, children: f.haAccount })
              ] }),
              /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", gap: "5px", flexShrink: 0 }, children: [
                l("✏️", "Editar usuario"),
                l("🔑", "Cambiar PIN"),
                l("⭐", "Cambiar rol"),
                l("🗑️", "Eliminar usuario", !0)
              ] })
            ] }),
            /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
              /* @__PURE__ */ x.jsxs(
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
              /* @__PURE__ */ x.jsxs(
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
      /* @__PURE__ */ x.jsx(
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
  const c = a?.states || {}, f = Object.values(c).find((T) => T.entity_id?.startsWith("alarm_control_panel.argus"))?.state || "disarmed", k = a?.user?.name || "Chris", z = /* @__PURE__ */ new Date(), I = (T) => T.toLocaleString("es", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }), U = [
    {
      id: "1",
      type: "login",
      title: "CONEXIÓN USUARIO",
      detail: "Conexión usuario",
      time: I(new Date(z.getTime() - 2 * 6e4)),
      source: k
    },
    {
      id: "2",
      type: "restored",
      title: "ESTADO LOCAL RESTAURADO",
      detail: `Estado local restaurado: ${f === "disarmed" ? "Desarmado" : f.replace("armed_", "").toUpperCase()}`,
      time: I(new Date(z.getTime() - 5 * 6e4)),
      source: "Argus"
    }
  ];
  return f !== "disarmed" && U.unshift({
    id: "0",
    type: f,
    title: "CAMBIO DE ESTADO",
    detail: `Sistema ${f.replace("armed_", "armado · ").replace("_", " ")}`,
    time: I(new Date(z.getTime() - 1 * 6e4)),
    source: k
  }), U;
}
function dh({ hass: a }) {
  const [c, l] = Fe.useState(() => Zc(a)), [f, k] = Fe.useState(!1), z = Fe.useCallback(() => {
    k(!0), setTimeout(() => {
      l(Zc(a)), k(!1);
    }, 600);
  }, [a]), I = Fe.useCallback(() => {
    confirm("¿Limpiar el historial local?") && l([]);
  }, []), U = Fe.useCallback(() => {
    const A = new Blob([JSON.stringify(c, null, 2)], { type: "application/json" }), V = URL.createObjectURL(A), B = document.createElement("a");
    B.href = V, B.download = "argus-history.json", B.click(), URL.revokeObjectURL(V);
  }, [c]), T = {
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
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "14px 16px", boxSizing: "border-box", gap: "12px" }, children: [
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", flex: 1 }, children: "📋 Historial de Actividad" }),
      /* @__PURE__ */ x.jsxs(
        "button",
        {
          type: "button",
          onClick: z,
          style: T,
          title: "Actualizar",
          children: [
            f ? "⏳" : "🔄",
            " Actualizar"
          ]
        }
      ),
      /* @__PURE__ */ x.jsx("button", { type: "button", onClick: U, style: T, title: "Exportar JSON", children: "JSON" }),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          onClick: I,
          style: { ...T, color: "#EF5350", borderColor: "rgba(229,57,53,0.3)" },
          title: "Borrar historial",
          children: "BORRAR"
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "7px", paddingRight: "2px" }, children: c.length === 0 ? /* @__PURE__ */ x.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4, fontSize: "13px", fontWeight: 600 }, children: "Sin entradas de historial" }) : c.map((A) => {
      const V = ch(A.type);
      return /* @__PURE__ */ x.jsxs(
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
            /* @__PURE__ */ x.jsx(
              "div",
              {
                style: {
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: V.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17px",
                  flexShrink: 0,
                  boxShadow: `0 0 10px ${V.bg}`
                },
                children: V.icon
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }, children: [
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 900, color: V.color, letterSpacing: "0.04em" }, children: A.title }),
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "12px", fontWeight: 600, opacity: 0.85, lineHeight: 1.3 }, children: A.detail }),
              /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }, children: [
                /* @__PURE__ */ x.jsx("span", { style: { fontSize: "10px", fontWeight: 600, opacity: 0.45 }, children: A.time }),
                /* @__PURE__ */ x.jsx("span", { style: { fontSize: "10px", opacity: 0.3 }, children: "·" }),
                /* @__PURE__ */ x.jsxs("span", { style: { fontSize: "10px", fontWeight: 700, opacity: 0.55 }, children: [
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
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", padding: "16px", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }, children: [
      /* @__PURE__ */ x.jsx("span", { style: { fontSize: "15px", fontWeight: 800, letterSpacing: "-0.01em" }, children: "Automatizaciones" }),
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
    /* @__PURE__ */ x.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((k) => /* @__PURE__ */ x.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px",
      opacity: k.status === "enabled" ? 1 : 0.5
    }, children: [
      /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ x.jsx("div", { style: {
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
        /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 600 }, children: k.name })
      ] }),
      /* @__PURE__ */ x.jsx("div", { style: {
        width: "36px",
        height: "20px",
        background: k.status === "enabled" ? "#43A047" : "rgba(255,255,255,0.2)",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer"
      }, children: /* @__PURE__ */ x.jsx("div", { style: {
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
var ph = mi();
function hh({ userName: a }) {
  const [c, l] = Fe.useState(!0), [f, k] = Fe.useState(!1);
  return Fe.useEffect(() => {
    const z = setTimeout(() => {
      k(!0);
    }, 1200), I = setTimeout(() => {
      l(!1);
    }, 2e3);
    return () => {
      clearTimeout(z), clearTimeout(I);
    };
  }, []), c ? ph.createPortal(
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
const gh = new Zp();
function mh({ hass: a, config: c }) {
  const [l, f] = Fe.useState(/* @__PURE__ */ new Date()), [k, z] = Fe.useState(!1);
  Fe.useEffect(() => {
    const V = setInterval(() => f(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(V);
  }, []);
  const I = a?.user?.name || "Chris", U = a?.user?.name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(a.user.name)}&background=random` : "", T = [
    { id: "modes", title: "Modos", size: "L", kind: "alarm-configuration", visible: !0 },
    { id: "active-instances", title: "Instancias Activas", size: "M", kind: "security-status", visible: !0 },
    { id: "sos", title: "Acciones SOS", size: "M", kind: "custom", visible: !0 },
    { id: "history", title: "Historial", size: "L", kind: "activity-history", visible: !0 },
    { id: "automations", title: "Automatizaciones", size: "L", kind: "automations", visible: !0 },
    { id: "access", title: "Control de Acceso", size: "XL", kind: "access-control", visible: !0 }
  ], A = {
    modes: /* @__PURE__ */ x.jsx(rh, { hass: a }),
    "active-instances": /* @__PURE__ */ x.jsx(nh, { hass: a }),
    sos: /* @__PURE__ */ x.jsx(ih, { hass: a }),
    history: /* @__PURE__ */ x.jsx(dh, { hass: a }),
    automations: /* @__PURE__ */ x.jsx(fh, { hass: a }),
    access: /* @__PURE__ */ x.jsx(uh, { hass: a })
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(hh, { userName: I }),
    /* @__PURE__ */ x.jsxs("div", { style: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(135deg, #0b0f19 0%, #111827 50%, #0d1322 100%)",
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
          U ? /* @__PURE__ */ x.jsx(
            "img",
            {
              src: U,
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
              onClick: () => z((V) => !V),
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
              children: /* @__PURE__ */ x.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: k ? /* @__PURE__ */ x.jsx("path", { d: "M20 6L9 17l-5-5" }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                /* @__PURE__ */ x.jsx("path", { d: "M12 20h9" }),
                /* @__PURE__ */ x.jsx("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
              ] }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsx("main", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ x.jsx(
        th,
        {
          widgets: T,
          widgetComponents: A,
          storage: gh,
          userId: a?.user?.id || "default_user",
          dashboardId: "main",
          isEditing: k,
          onToggleEditing: () => z((V) => !V),
          onEditing: z,
          registerEditor: () => {
          }
        }
      ) })
    ] })
  ] });
}
const yh = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', vh = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", xh = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:230px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}.argus-dashboard__toolbar{display:none!important}";
class wh extends HTMLElement {
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
          ${yh}
          ${vh}
          ${xh}
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
      hp.createElement(mh, {
        hass: this._hass,
        config: this._config || {}
      })
    );
  }
}
function Eh(a) {
  const c = ["argus-panel-v2018", "argus-panel", "argus-card"];
  for (const l of c)
    customElements.get(l) || customElements.define(l, class extends wh {
    });
}
export {
  Eh as applyArgusFrontend
};
