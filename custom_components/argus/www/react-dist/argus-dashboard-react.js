function AD(y) {
  if (y.__esModule) return y;
  var w = y.default;
  if (typeof w == "function") {
    var h = function _() {
      return this instanceof _ ? Reflect.construct(w, arguments, this.constructor) : w.apply(this, arguments);
    };
    h.prototype = w.prototype;
  } else h = {};
  return Object.defineProperty(h, "__esModule", { value: !0 }), Object.keys(y).forEach(function(_) {
    var $ = Object.getOwnPropertyDescriptor(y, _);
    Object.defineProperty(h, _, $.get ? $ : {
      enumerable: !0,
      get: function() {
        return y[_];
      }
    });
  }), h;
}
var py = { exports: {} }, cv = {}, vy = { exports: {} }, Kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $R;
function jD() {
  if ($R) return Kt;
  $R = 1;
  var y = Symbol.for("react.element"), w = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), g = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), V = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), I = Symbol.iterator;
  function J(O) {
    return O === null || typeof O != "object" ? null : (O = I && O[I] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ke = Object.assign, be = {};
  function K(O, Q, He) {
    this.props = O, this.context = Q, this.refs = be, this.updater = He || ye;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(O, Q) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, Q, "setState");
  }, K.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function k() {
  }
  k.prototype = K.prototype;
  function b(O, Q, He) {
    this.props = O, this.context = Q, this.refs = be, this.updater = He || ye;
  }
  var x = b.prototype = new k();
  x.constructor = b, ke(x, K.prototype), x.isPureReactComponent = !0;
  var C = Array.isArray, E = Object.prototype.hasOwnProperty, D = { current: null }, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(O, Q, He) {
    var ze, Ge = {}, qe = null, Ye = null;
    if (Q != null) for (ze in Q.ref !== void 0 && (Ye = Q.ref), Q.key !== void 0 && (qe = "" + Q.key), Q) E.call(Q, ze) && !P.hasOwnProperty(ze) && (Ge[ze] = Q[ze]);
    var he = arguments.length - 2;
    if (he === 1) Ge.children = He;
    else if (1 < he) {
      for (var Re = Array(he), Be = 0; Be < he; Be++) Re[Be] = arguments[Be + 2];
      Ge.children = Re;
    }
    if (O && O.defaultProps) for (ze in he = O.defaultProps, he) Ge[ze] === void 0 && (Ge[ze] = he[ze]);
    return { $$typeof: y, type: O, key: qe, ref: Ye, props: Ge, _owner: D.current };
  }
  function ve(O, Q) {
    return { $$typeof: y, type: O.type, key: Q, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function Oe(O) {
    return typeof O == "object" && O !== null && O.$$typeof === y;
  }
  function Pe(O) {
    var Q = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(He) {
      return Q[He];
    });
  }
  var ie = /\/+/g;
  function re(O, Q) {
    return typeof O == "object" && O !== null && O.key != null ? Pe("" + O.key) : Q.toString(36);
  }
  function De(O, Q, He, ze, Ge) {
    var qe = typeof O;
    (qe === "undefined" || qe === "boolean") && (O = null);
    var Ye = !1;
    if (O === null) Ye = !0;
    else switch (qe) {
      case "string":
      case "number":
        Ye = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case y:
          case w:
            Ye = !0;
        }
    }
    if (Ye) return Ye = O, Ge = Ge(Ye), O = ze === "" ? "." + re(Ye, 0) : ze, C(Ge) ? (He = "", O != null && (He = O.replace(ie, "$&/") + "/"), De(Ge, Q, He, "", function(Be) {
      return Be;
    })) : Ge != null && (Oe(Ge) && (Ge = ve(Ge, He + (!Ge.key || Ye && Ye.key === Ge.key ? "" : ("" + Ge.key).replace(ie, "$&/") + "/") + O)), Q.push(Ge)), 1;
    if (Ye = 0, ze = ze === "" ? "." : ze + ":", C(O)) for (var he = 0; he < O.length; he++) {
      qe = O[he];
      var Re = ze + re(qe, he);
      Ye += De(qe, Q, He, Re, Ge);
    }
    else if (Re = J(O), typeof Re == "function") for (O = Re.call(O), he = 0; !(qe = O.next()).done; ) qe = qe.value, Re = ze + re(qe, he++), Ye += De(qe, Q, He, Re, Ge);
    else if (qe === "object") throw Q = String(O), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
    return Ye;
  }
  function Ue(O, Q, He) {
    if (O == null) return O;
    var ze = [], Ge = 0;
    return De(O, ze, "", "", function(qe) {
      return Q.call(He, qe, Ge++);
    }), ze;
  }
  function Fe(O) {
    if (O._status === -1) {
      var Q = O._result;
      Q = Q(), Q.then(function(He) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = He);
      }, function(He) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = He);
      }), O._status === -1 && (O._status = 0, O._result = Q);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var Te = { current: null }, ge = { transition: null }, $e = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: ge, ReactCurrentOwner: D };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Kt.Children = { map: Ue, forEach: function(O, Q, He) {
    Ue(O, function() {
      Q.apply(this, arguments);
    }, He);
  }, count: function(O) {
    var Q = 0;
    return Ue(O, function() {
      Q++;
    }), Q;
  }, toArray: function(O) {
    return Ue(O, function(Q) {
      return Q;
    }) || [];
  }, only: function(O) {
    if (!Oe(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Kt.Component = K, Kt.Fragment = h, Kt.Profiler = $, Kt.PureComponent = b, Kt.StrictMode = _, Kt.Suspense = A, Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $e, Kt.act = W, Kt.cloneElement = function(O, Q, He) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var ze = ke({}, O.props), Ge = O.key, qe = O.ref, Ye = O._owner;
    if (Q != null) {
      if (Q.ref !== void 0 && (qe = Q.ref, Ye = D.current), Q.key !== void 0 && (Ge = "" + Q.key), O.type && O.type.defaultProps) var he = O.type.defaultProps;
      for (Re in Q) E.call(Q, Re) && !P.hasOwnProperty(Re) && (ze[Re] = Q[Re] === void 0 && he !== void 0 ? he[Re] : Q[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) ze.children = He;
    else if (1 < Re) {
      he = Array(Re);
      for (var Be = 0; Be < Re; Be++) he[Be] = arguments[Be + 2];
      ze.children = he;
    }
    return { $$typeof: y, type: O.type, key: Ge, ref: qe, props: ze, _owner: Ye };
  }, Kt.createContext = function(O) {
    return O = { $$typeof: g, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: H, _context: O }, O.Consumer = O;
  }, Kt.createElement = ce, Kt.createFactory = function(O) {
    var Q = ce.bind(null, O);
    return Q.type = O, Q;
  }, Kt.createRef = function() {
    return { current: null };
  }, Kt.forwardRef = function(O) {
    return { $$typeof: pe, render: O };
  }, Kt.isValidElement = Oe, Kt.lazy = function(O) {
    return { $$typeof: oe, _payload: { _status: -1, _result: O }, _init: Fe };
  }, Kt.memo = function(O, Q) {
    return { $$typeof: V, type: O, compare: Q === void 0 ? null : Q };
  }, Kt.startTransition = function(O) {
    var Q = ge.transition;
    ge.transition = {};
    try {
      O();
    } finally {
      ge.transition = Q;
    }
  }, Kt.unstable_act = W, Kt.useCallback = function(O, Q) {
    return Te.current.useCallback(O, Q);
  }, Kt.useContext = function(O) {
    return Te.current.useContext(O);
  }, Kt.useDebugValue = function() {
  }, Kt.useDeferredValue = function(O) {
    return Te.current.useDeferredValue(O);
  }, Kt.useEffect = function(O, Q) {
    return Te.current.useEffect(O, Q);
  }, Kt.useId = function() {
    return Te.current.useId();
  }, Kt.useImperativeHandle = function(O, Q, He) {
    return Te.current.useImperativeHandle(O, Q, He);
  }, Kt.useInsertionEffect = function(O, Q) {
    return Te.current.useInsertionEffect(O, Q);
  }, Kt.useLayoutEffect = function(O, Q) {
    return Te.current.useLayoutEffect(O, Q);
  }, Kt.useMemo = function(O, Q) {
    return Te.current.useMemo(O, Q);
  }, Kt.useReducer = function(O, Q, He) {
    return Te.current.useReducer(O, Q, He);
  }, Kt.useRef = function(O) {
    return Te.current.useRef(O);
  }, Kt.useState = function(O) {
    return Te.current.useState(O);
  }, Kt.useSyncExternalStore = function(O, Q, He) {
    return Te.current.useSyncExternalStore(O, Q, He);
  }, Kt.useTransition = function() {
    return Te.current.useTransition();
  }, Kt.version = "18.3.1", Kt;
}
var bv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
bv.exports;
var WR;
function UD() {
  return WR || (WR = 1, function(y, w) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = "18.3.1", _ = Symbol.for("react.element"), $ = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), V = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), be = Symbol.for("react.offscreen"), K = Symbol.iterator, k = "@@iterator";
      function b(m) {
        if (m === null || typeof m != "object")
          return null;
        var L = K && m[K] || m[k];
        return typeof L == "function" ? L : null;
      }
      var x = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, C = {
        transition: null
      }, E = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, D = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, P = {}, ce = null;
      function ve(m) {
        ce = m;
      }
      P.setExtraStackFrame = function(m) {
        ce = m;
      }, P.getCurrentStack = null, P.getStackAddendum = function() {
        var m = "";
        ce && (m += ce);
        var L = P.getCurrentStack;
        return L && (m += L() || ""), m;
      };
      var Oe = !1, Pe = !1, ie = !1, re = !1, De = !1, Ue = {
        ReactCurrentDispatcher: x,
        ReactCurrentBatchConfig: C,
        ReactCurrentOwner: D
      };
      Ue.ReactDebugCurrentFrame = P, Ue.ReactCurrentActQueue = E;
      function Fe(m) {
        {
          for (var L = arguments.length, se = new Array(L > 1 ? L - 1 : 0), Se = 1; Se < L; Se++)
            se[Se - 1] = arguments[Se];
          ge("warn", m, se);
        }
      }
      function Te(m) {
        {
          for (var L = arguments.length, se = new Array(L > 1 ? L - 1 : 0), Se = 1; Se < L; Se++)
            se[Se - 1] = arguments[Se];
          ge("error", m, se);
        }
      }
      function ge(m, L, se) {
        {
          var Se = Ue.ReactDebugCurrentFrame, We = Se.getStackAddendum();
          We !== "" && (L += "%s", se = se.concat([We]));
          var Et = se.map(function(Ke) {
            return String(Ke);
          });
          Et.unshift("Warning: " + L), Function.prototype.apply.call(console[m], console, Et);
        }
      }
      var $e = {};
      function W(m, L) {
        {
          var se = m.constructor, Se = se && (se.displayName || se.name) || "ReactClass", We = Se + "." + L;
          if ($e[We])
            return;
          Te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, Se), $e[We] = !0;
        }
      }
      var O = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(m) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(m, L, se) {
          W(m, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(m, L, se, Se) {
          W(m, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(m, L, se, Se) {
          W(m, "setState");
        }
      }, Q = Object.assign, He = {};
      Object.freeze(He);
      function ze(m, L, se) {
        this.props = m, this.context = L, this.refs = He, this.updater = se || O;
      }
      ze.prototype.isReactComponent = {}, ze.prototype.setState = function(m, L) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, m, L, "setState");
      }, ze.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      {
        var Ge = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, qe = function(m, L) {
          Object.defineProperty(ze.prototype, m, {
            get: function() {
              Fe("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var Ye in Ge)
          Ge.hasOwnProperty(Ye) && qe(Ye, Ge[Ye]);
      }
      function he() {
      }
      he.prototype = ze.prototype;
      function Re(m, L, se) {
        this.props = m, this.context = L, this.refs = He, this.updater = se || O;
      }
      var Be = Re.prototype = new he();
      Be.constructor = Re, Q(Be, ze.prototype), Be.isPureReactComponent = !0;
      function rt() {
        var m = {
          current: null
        };
        return Object.seal(m), m;
      }
      var xe = Array.isArray;
      function ht(m) {
        return xe(m);
      }
      function zt(m) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, se = L && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return se;
        }
      }
      function $t(m) {
        try {
          return Mt(m), !1;
        } catch {
          return !0;
        }
      }
      function Mt(m) {
        return "" + m;
      }
      function B(m) {
        if ($t(m))
          return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zt(m)), Mt(m);
      }
      function F(m, L, se) {
        var Se = m.displayName;
        if (Se)
          return Se;
        var We = L.displayName || L.name || "";
        return We !== "" ? se + "(" + We + ")" : se;
      }
      function X(m) {
        return m.displayName || "Context";
      }
      function me(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case H:
            return "Fragment";
          case $:
            return "Portal";
          case pe:
            return "Profiler";
          case g:
            return "StrictMode";
          case I:
            return "Suspense";
          case J:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case V:
              var L = m;
              return X(L) + ".Consumer";
            case A:
              var se = m;
              return X(se._context) + ".Provider";
            case oe:
              return F(m, m.render, "ForwardRef");
            case ye:
              var Se = m.displayName || null;
              return Se !== null ? Se : me(m.type) || "Memo";
            case ke: {
              var We = m, Et = We._payload, Ke = We._init;
              try {
                return me(Ke(Et));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Je = Object.prototype.hasOwnProperty, et = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Qe, _t, Rt;
      Rt = {};
      function Bt(m) {
        if (Je.call(m, "ref")) {
          var L = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function ln(m) {
        if (Je.call(m, "key")) {
          var L = Object.getOwnPropertyDescriptor(m, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function z(m, L) {
        var se = function() {
          Qe || (Qe = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        se.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: se,
          configurable: !0
        });
      }
      function Z(m, L) {
        var se = function() {
          _t || (_t = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        se.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: se,
          configurable: !0
        });
      }
      function j(m) {
        if (typeof m.ref == "string" && D.current && m.__self && D.current.stateNode !== m.__self) {
          var L = me(D.current.type);
          Rt[L] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, m.ref), Rt[L] = !0);
        }
      }
      var le = function(m, L, se, Se, We, Et, Ke) {
        var xt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: m,
          key: L,
          ref: se,
          props: Ke,
          // Record the component responsible for creating this element.
          _owner: Et
        };
        return xt._store = {}, Object.defineProperty(xt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(xt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Se
        }), Object.defineProperty(xt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: We
        }), Object.freeze && (Object.freeze(xt.props), Object.freeze(xt)), xt;
      };
      function Ce(m, L, se) {
        var Se, We = {}, Et = null, Ke = null, xt = null, Qt = null;
        if (L != null) {
          Bt(L) && (Ke = L.ref, j(L)), ln(L) && (B(L.key), Et = "" + L.key), xt = L.__self === void 0 ? null : L.__self, Qt = L.__source === void 0 ? null : L.__source;
          for (Se in L)
            Je.call(L, Se) && !et.hasOwnProperty(Se) && (We[Se] = L[Se]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          We.children = se;
        else if (rn > 1) {
          for (var zn = Array(rn), bn = 0; bn < rn; bn++)
            zn[bn] = arguments[bn + 2];
          Object.freeze && Object.freeze(zn), We.children = zn;
        }
        if (m && m.defaultProps) {
          var It = m.defaultProps;
          for (Se in It)
            We[Se] === void 0 && (We[Se] = It[Se]);
        }
        if (Et || Ke) {
          var En = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          Et && z(We, En), Ke && Z(We, En);
        }
        return le(m, Et, Ke, xt, Qt, D.current, We);
      }
      function gt(m, L) {
        var se = le(m.type, L, m.ref, m._self, m._source, m._owner, m.props);
        return se;
      }
      function ct(m, L, se) {
        if (m == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
        var Se, We = Q({}, m.props), Et = m.key, Ke = m.ref, xt = m._self, Qt = m._source, rn = m._owner;
        if (L != null) {
          Bt(L) && (Ke = L.ref, rn = D.current), ln(L) && (B(L.key), Et = "" + L.key);
          var zn;
          m.type && m.type.defaultProps && (zn = m.type.defaultProps);
          for (Se in L)
            Je.call(L, Se) && !et.hasOwnProperty(Se) && (L[Se] === void 0 && zn !== void 0 ? We[Se] = zn[Se] : We[Se] = L[Se]);
        }
        var bn = arguments.length - 2;
        if (bn === 1)
          We.children = se;
        else if (bn > 1) {
          for (var It = Array(bn), En = 0; En < bn; En++)
            It[En] = arguments[En + 2];
          We.children = It;
        }
        return le(m.type, Et, Ke, xt, Qt, rn, We);
      }
      function Lt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === _;
      }
      var Yt = ".", Dn = ":";
      function an(m) {
        var L = /[=:]/g, se = {
          "=": "=0",
          ":": "=2"
        }, Se = m.replace(L, function(We) {
          return se[We];
        });
        return "$" + Se;
      }
      var un = !1, mn = /\/+/g;
      function na(m) {
        return m.replace(mn, "$&/");
      }
      function lr(m, L) {
        return typeof m == "object" && m !== null && m.key != null ? (B(m.key), an("" + m.key)) : L.toString(36);
      }
      function jr(m, L, se, Se, We) {
        var Et = typeof m;
        (Et === "undefined" || Et === "boolean") && (m = null);
        var Ke = !1;
        if (m === null)
          Ke = !0;
        else
          switch (Et) {
            case "string":
            case "number":
              Ke = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case _:
                case $:
                  Ke = !0;
              }
          }
        if (Ke) {
          var xt = m, Qt = We(xt), rn = Se === "" ? Yt + lr(xt, 0) : Se;
          if (ht(Qt)) {
            var zn = "";
            rn != null && (zn = na(rn) + "/"), jr(Qt, L, zn, "", function(ud) {
              return ud;
            });
          } else Qt != null && (Lt(Qt) && (Qt.key && (!xt || xt.key !== Qt.key) && B(Qt.key), Qt = gt(
            Qt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            se + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Qt.key && (!xt || xt.key !== Qt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              na("" + Qt.key) + "/"
            ) : "") + rn
          )), L.push(Qt));
          return 1;
        }
        var bn, It, En = 0, Hn = Se === "" ? Yt : Se + Dn;
        if (ht(m))
          for (var ko = 0; ko < m.length; ko++)
            bn = m[ko], It = Hn + lr(bn, ko), En += jr(bn, L, se, It, We);
        else {
          var as = b(m);
          if (typeof as == "function") {
            var Qi = m;
            as === Qi.entries && (un || Fe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), un = !0);
            for (var is = as.call(Qi), vl, ld = 0; !(vl = is.next()).done; )
              bn = vl.value, It = Hn + lr(bn, ld++), En += jr(bn, L, se, It, We);
          } else if (Et === "object") {
            var gc = String(m);
            throw new Error("Objects are not valid as a React child (found: " + (gc === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : gc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return En;
      }
      function Na(m, L, se) {
        if (m == null)
          return m;
        var Se = [], We = 0;
        return jr(m, Se, "", "", function(Et) {
          return L.call(se, Et, We++);
        }), Se;
      }
      function ti(m) {
        var L = 0;
        return Na(m, function() {
          L++;
        }), L;
      }
      function qi(m, L, se) {
        Na(m, function() {
          L.apply(this, arguments);
        }, se);
      }
      function Eo(m) {
        return Na(m, function(L) {
          return L;
        }) || [];
      }
      function wo(m) {
        if (!Lt(m))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return m;
      }
      function ll(m) {
        var L = {
          $$typeof: V,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: m,
          _currentValue2: m,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        L.Provider = {
          $$typeof: A,
          _context: L
        };
        var se = !1, Se = !1, We = !1;
        {
          var Et = {
            $$typeof: V,
            _context: L
          };
          Object.defineProperties(Et, {
            Provider: {
              get: function() {
                return Se || (Se = !0, Te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(Ke) {
                L.Provider = Ke;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(Ke) {
                L._currentValue = Ke;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(Ke) {
                L._currentValue2 = Ke;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(Ke) {
                L._threadCount = Ke;
              }
            },
            Consumer: {
              get: function() {
                return se || (se = !0, Te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Ke) {
                We || (Fe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ke), We = !0);
              }
            }
          }), L.Consumer = Et;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Ur = -1, Hr = 0, gr = 1, Si = 2;
      function ni(m) {
        if (m._status === Ur) {
          var L = m._result, se = L();
          if (se.then(function(Et) {
            if (m._status === Hr || m._status === Ur) {
              var Ke = m;
              Ke._status = gr, Ke._result = Et;
            }
          }, function(Et) {
            if (m._status === Hr || m._status === Ur) {
              var Ke = m;
              Ke._status = Si, Ke._result = Et;
            }
          }), m._status === Ur) {
            var Se = m;
            Se._status = Hr, Se._result = se;
          }
        }
        if (m._status === gr) {
          var We = m._result;
          return We === void 0 && Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, We), "default" in We || Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, We), We.default;
        } else
          throw m._result;
      }
      function bi(m) {
        var L = {
          // We use these fields to store the result.
          _status: Ur,
          _result: m
        }, se = {
          $$typeof: ke,
          _payload: L,
          _init: ni
        };
        {
          var Se, We;
          Object.defineProperties(se, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Se;
              },
              set: function(Et) {
                Te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Se = Et, Object.defineProperty(se, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return We;
              },
              set: function(Et) {
                Te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), We = Et, Object.defineProperty(se, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return se;
      }
      function Ei(m) {
        m != null && m.$$typeof === ye ? Te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof m != "function" ? Te("forwardRef requires a render function but was given %s.", m === null ? "null" : typeof m) : m.length !== 0 && m.length !== 2 && Te("forwardRef render functions accept exactly two parameters: props and ref. %s", m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), m != null && (m.defaultProps != null || m.propTypes != null) && Te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: oe,
          render: m
        };
        {
          var se;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return se;
            },
            set: function(Se) {
              se = Se, !m.name && !m.displayName && (m.displayName = Se);
            }
          });
        }
        return L;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function Me(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === H || m === pe || De || m === g || m === I || m === J || re || m === be || Oe || Pe || ie || typeof m == "object" && m !== null && (m.$$typeof === ke || m.$$typeof === ye || m.$$typeof === A || m.$$typeof === V || m.$$typeof === oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        m.$$typeof === N || m.getModuleId !== void 0));
      }
      function Ze(m, L) {
        Me(m) || Te("memo: The first argument must be a component. Instead received: %s", m === null ? "null" : typeof m);
        var se = {
          $$typeof: ye,
          type: m,
          compare: L === void 0 ? null : L
        };
        {
          var Se;
          Object.defineProperty(se, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Se;
            },
            set: function(We) {
              Se = We, !m.name && !m.displayName && (m.displayName = We);
            }
          });
        }
        return se;
      }
      function st() {
        var m = x.current;
        return m === null && Te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), m;
      }
      function Ut(m) {
        var L = st();
        if (m._context !== void 0) {
          var se = m._context;
          se.Consumer === m ? Te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : se.Provider === m && Te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(m);
      }
      function Pt(m) {
        var L = st();
        return L.useState(m);
      }
      function Gt(m, L, se) {
        var Se = st();
        return Se.useReducer(m, L, se);
      }
      function Wt(m) {
        var L = st();
        return L.useRef(m);
      }
      function Wn(m, L) {
        var se = st();
        return se.useEffect(m, L);
      }
      function kn(m, L) {
        var se = st();
        return se.useInsertionEffect(m, L);
      }
      function Ln(m, L) {
        var se = st();
        return se.useLayoutEffect(m, L);
      }
      function Sr(m, L) {
        var se = st();
        return se.useCallback(m, L);
      }
      function ri(m, L) {
        var se = st();
        return se.useMemo(m, L);
      }
      function ai(m, L, se) {
        var Se = st();
        return Se.useImperativeHandle(m, L, se);
      }
      function Ht(m, L) {
        {
          var se = st();
          return se.useDebugValue(m, L);
        }
      }
      function Vt() {
        var m = st();
        return m.useTransition();
      }
      function ii(m) {
        var L = st();
        return L.useDeferredValue(m);
      }
      function ul() {
        var m = st();
        return m.useId();
      }
      function sl(m, L, se) {
        var Se = st();
        return Se.useSyncExternalStore(m, L, se);
      }
      var Ro = 0, nu, Co, ra, es, Fr, mc, yc;
      function ru() {
      }
      ru.__reactDisabledLog = !0;
      function xo() {
        {
          if (Ro === 0) {
            nu = console.log, Co = console.info, ra = console.warn, es = console.error, Fr = console.group, mc = console.groupCollapsed, yc = console.groupEnd;
            var m = {
              configurable: !0,
              enumerable: !0,
              value: ru,
              writable: !0
            };
            Object.defineProperties(console, {
              info: m,
              log: m,
              warn: m,
              error: m,
              group: m,
              groupCollapsed: m,
              groupEnd: m
            });
          }
          Ro++;
        }
      }
      function Ea() {
        {
          if (Ro--, Ro === 0) {
            var m = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Q({}, m, {
                value: nu
              }),
              info: Q({}, m, {
                value: Co
              }),
              warn: Q({}, m, {
                value: ra
              }),
              error: Q({}, m, {
                value: es
              }),
              group: Q({}, m, {
                value: Fr
              }),
              groupCollapsed: Q({}, m, {
                value: mc
              }),
              groupEnd: Q({}, m, {
                value: yc
              })
            });
          }
          Ro < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oi = Ue.ReactCurrentDispatcher, li;
      function au(m, L, se) {
        {
          if (li === void 0)
            try {
              throw Error();
            } catch (We) {
              var Se = We.stack.trim().match(/\n( *(at )?)/);
              li = Se && Se[1] || "";
            }
          return `
` + li + m;
        }
      }
      var cl = !1, To;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        To = new iu();
      }
      function ou(m, L) {
        if (!m || cl)
          return "";
        {
          var se = To.get(m);
          if (se !== void 0)
            return se;
        }
        var Se;
        cl = !0;
        var We = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Et;
        Et = oi.current, oi.current = null, xo();
        try {
          if (L) {
            var Ke = function() {
              throw Error();
            };
            if (Object.defineProperty(Ke.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ke, []);
              } catch (Hn) {
                Se = Hn;
              }
              Reflect.construct(m, [], Ke);
            } else {
              try {
                Ke.call();
              } catch (Hn) {
                Se = Hn;
              }
              m.call(Ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Hn) {
              Se = Hn;
            }
            m();
          }
        } catch (Hn) {
          if (Hn && Se && typeof Hn.stack == "string") {
            for (var xt = Hn.stack.split(`
`), Qt = Se.stack.split(`
`), rn = xt.length - 1, zn = Qt.length - 1; rn >= 1 && zn >= 0 && xt[rn] !== Qt[zn]; )
              zn--;
            for (; rn >= 1 && zn >= 0; rn--, zn--)
              if (xt[rn] !== Qt[zn]) {
                if (rn !== 1 || zn !== 1)
                  do
                    if (rn--, zn--, zn < 0 || xt[rn] !== Qt[zn]) {
                      var bn = `
` + xt[rn].replace(" at new ", " at ");
                      return m.displayName && bn.includes("<anonymous>") && (bn = bn.replace("<anonymous>", m.displayName)), typeof m == "function" && To.set(m, bn), bn;
                    }
                  while (rn >= 1 && zn >= 0);
                break;
              }
          }
        } finally {
          cl = !1, oi.current = Et, Ea(), Error.prepareStackTrace = We;
        }
        var It = m ? m.displayName || m.name : "", En = It ? au(It) : "";
        return typeof m == "function" && To.set(m, En), En;
      }
      function Yi(m, L, se) {
        return ou(m, !1);
      }
      function id(m) {
        var L = m.prototype;
        return !!(L && L.isReactComponent);
      }
      function Gi(m, L, se) {
        if (m == null)
          return "";
        if (typeof m == "function")
          return ou(m, id(m));
        if (typeof m == "string")
          return au(m);
        switch (m) {
          case I:
            return au("Suspense");
          case J:
            return au("SuspenseList");
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case oe:
              return Yi(m.render);
            case ye:
              return Gi(m.type, L, se);
            case ke: {
              var Se = m, We = Se._payload, Et = Se._init;
              try {
                return Gi(Et(We), L, se);
              } catch {
              }
            }
          }
        return "";
      }
      var sn = {}, lu = Ue.ReactDebugCurrentFrame;
      function nn(m) {
        if (m) {
          var L = m._owner, se = Gi(m.type, m._source, L ? L.type : null);
          lu.setExtraStackFrame(se);
        } else
          lu.setExtraStackFrame(null);
      }
      function ts(m, L, se, Se, We) {
        {
          var Et = Function.call.bind(Je);
          for (var Ke in m)
            if (Et(m, Ke)) {
              var xt = void 0;
              try {
                if (typeof m[Ke] != "function") {
                  var Qt = Error((Se || "React class") + ": " + se + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Qt.name = "Invariant Violation", Qt;
                }
                xt = m[Ke](L, Ke, Se, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (rn) {
                xt = rn;
              }
              xt && !(xt instanceof Error) && (nn(We), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", se, Ke, typeof xt), nn(null)), xt instanceof Error && !(xt.message in sn) && (sn[xt.message] = !0, nn(We), Te("Failed %s type: %s", se, xt.message), nn(null));
            }
        }
      }
      function wi(m) {
        if (m) {
          var L = m._owner, se = Gi(m.type, m._source, L ? L.type : null);
          ve(se);
        } else
          ve(null);
      }
      var Nt;
      Nt = !1;
      function uu() {
        if (D.current) {
          var m = me(D.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
      function br(m) {
        if (m !== void 0) {
          var L = m.fileName.replace(/^.*[\\\/]/, ""), se = m.lineNumber;
          return `

Check your code at ` + L + ":" + se + ".";
        }
        return "";
      }
      function Ri(m) {
        return m != null ? br(m.__source) : "";
      }
      var Br = {};
      function Ci(m) {
        var L = uu();
        if (!L) {
          var se = typeof m == "string" ? m : m.displayName || m.name;
          se && (L = `

Check the top-level render call using <` + se + ">.");
        }
        return L;
      }
      function Nn(m, L) {
        if (!(!m._store || m._store.validated || m.key != null)) {
          m._store.validated = !0;
          var se = Ci(L);
          if (!Br[se]) {
            Br[se] = !0;
            var Se = "";
            m && m._owner && m._owner !== D.current && (Se = " It was passed a child from " + me(m._owner.type) + "."), wi(m), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, Se), wi(null);
          }
        }
      }
      function Sn(m, L) {
        if (typeof m == "object") {
          if (ht(m))
            for (var se = 0; se < m.length; se++) {
              var Se = m[se];
              Lt(Se) && Nn(Se, L);
            }
          else if (Lt(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var We = b(m);
            if (typeof We == "function" && We !== m.entries)
              for (var Et = We.call(m), Ke; !(Ke = Et.next()).done; )
                Lt(Ke.value) && Nn(Ke.value, L);
          }
        }
      }
      function _o(m) {
        {
          var L = m.type;
          if (L == null || typeof L == "string")
            return;
          var se;
          if (typeof L == "function")
            se = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === oe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === ye))
            se = L.propTypes;
          else
            return;
          if (se) {
            var Se = me(L);
            ts(se, m.props, "prop", Se, m);
          } else if (L.PropTypes !== void 0 && !Nt) {
            Nt = !0;
            var We = me(L);
            Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", We || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ur(m) {
        {
          for (var L = Object.keys(m.props), se = 0; se < L.length; se++) {
            var Se = L[se];
            if (Se !== "children" && Se !== "key") {
              wi(m), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), wi(null);
              break;
            }
          }
          m.ref !== null && (wi(m), Te("Invalid attribute `ref` supplied to `React.Fragment`."), wi(null));
        }
      }
      function Vr(m, L, se) {
        var Se = Me(m);
        if (!Se) {
          var We = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (We += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = Ri(L);
          Et ? We += Et : We += uu();
          var Ke;
          m === null ? Ke = "null" : ht(m) ? Ke = "array" : m !== void 0 && m.$$typeof === _ ? (Ke = "<" + (me(m.type) || "Unknown") + " />", We = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof m, Te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, We);
        }
        var xt = Ce.apply(this, arguments);
        if (xt == null)
          return xt;
        if (Se)
          for (var Qt = 2; Qt < arguments.length; Qt++)
            Sn(arguments[Qt], m);
        return m === H ? ur(xt) : _o(xt), xt;
      }
      var Pa = !1;
      function fl(m) {
        var L = Vr.bind(null, m);
        return L.type = m, Pa || (Pa = !0, Fe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return Fe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: m
            }), m;
          }
        }), L;
      }
      function ns(m, L, se) {
        for (var Se = ct.apply(this, arguments), We = 2; We < arguments.length; We++)
          Sn(arguments[We], Se.type);
        return _o(Se), Se;
      }
      function rs(m, L) {
        var se = C.transition;
        C.transition = {};
        var Se = C.transition;
        C.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          m();
        } finally {
          if (C.transition = se, se === null && Se._updatedFibers) {
            var We = Se._updatedFibers.size;
            We > 10 && Fe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Se._updatedFibers.clear();
          }
        }
      }
      var Oo = !1, dl = null;
      function od(m) {
        if (dl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), se = y && y[L];
            dl = se.call(y, "timers").setImmediate;
          } catch {
            dl = function(We) {
              Oo === !1 && (Oo = !0, typeof MessageChannel > "u" && Te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Et = new MessageChannel();
              Et.port1.onmessage = We, Et.port2.postMessage(void 0);
            };
          }
        return dl(m);
      }
      var Aa = 0, ui = !1;
      function xi(m) {
        {
          var L = Aa;
          Aa++, E.current === null && (E.current = []);
          var se = E.isBatchingLegacy, Se;
          try {
            if (E.isBatchingLegacy = !0, Se = m(), !se && E.didScheduleLegacyUpdate) {
              var We = E.current;
              We !== null && (E.didScheduleLegacyUpdate = !1, Do(We));
            }
          } catch (It) {
            throw ja(L), It;
          } finally {
            E.isBatchingLegacy = se;
          }
          if (Se !== null && typeof Se == "object" && typeof Se.then == "function") {
            var Et = Se, Ke = !1, xt = {
              then: function(It, En) {
                Ke = !0, Et.then(function(Hn) {
                  ja(L), Aa === 0 ? su(Hn, It, En) : It(Hn);
                }, function(Hn) {
                  ja(L), En(Hn);
                });
              }
            };
            return !ui && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ke || (ui = !0, Te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), xt;
          } else {
            var Qt = Se;
            if (ja(L), Aa === 0) {
              var rn = E.current;
              rn !== null && (Do(rn), E.current = null);
              var zn = {
                then: function(It, En) {
                  E.current === null ? (E.current = [], su(Qt, It, En)) : It(Qt);
                }
              };
              return zn;
            } else {
              var bn = {
                then: function(It, En) {
                  It(Qt);
                }
              };
              return bn;
            }
          }
        }
      }
      function ja(m) {
        m !== Aa - 1 && Te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Aa = m;
      }
      function su(m, L, se) {
        {
          var Se = E.current;
          if (Se !== null)
            try {
              Do(Se), od(function() {
                Se.length === 0 ? (E.current = null, L(m)) : su(m, L, se);
              });
            } catch (We) {
              se(We);
            }
          else
            L(m);
        }
      }
      var cu = !1;
      function Do(m) {
        if (!cu) {
          cu = !0;
          var L = 0;
          try {
            for (; L < m.length; L++) {
              var se = m[L];
              do
                se = se(!0);
              while (se !== null);
            }
            m.length = 0;
          } catch (Se) {
            throw m = m.slice(L + 1), Se;
          } finally {
            cu = !1;
          }
        }
      }
      var pl = Vr, fu = ns, du = fl, si = {
        map: Na,
        forEach: qi,
        count: ti,
        toArray: Eo,
        only: wo
      };
      w.Children = si, w.Component = ze, w.Fragment = H, w.Profiler = pe, w.PureComponent = Re, w.StrictMode = g, w.Suspense = I, w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ue, w.act = xi, w.cloneElement = fu, w.createContext = ll, w.createElement = pl, w.createFactory = du, w.createRef = rt, w.forwardRef = Ei, w.isValidElement = Lt, w.lazy = bi, w.memo = Ze, w.startTransition = rs, w.unstable_act = xi, w.useCallback = Sr, w.useContext = Ut, w.useDebugValue = Ht, w.useDeferredValue = ii, w.useEffect = Wn, w.useId = ul, w.useImperativeHandle = ai, w.useInsertionEffect = kn, w.useLayoutEffect = Ln, w.useMemo = ri, w.useReducer = Gt, w.useRef = Wt, w.useState = Pt, w.useSyncExternalStore = sl, w.useTransition = Vt, w.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(bv, bv.exports)), bv.exports;
}
var qR;
function ba() {
  return qR || (qR = 1, process.env.NODE_ENV === "production" ? vy.exports = jD() : vy.exports = UD()), vy.exports;
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
var YR;
function HD() {
  if (YR) return cv;
  YR = 1;
  var y = ba(), w = Symbol.for("react.element"), h = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, $ = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(pe, A, V) {
    var oe, I = {}, J = null, ye = null;
    V !== void 0 && (J = "" + V), A.key !== void 0 && (J = "" + A.key), A.ref !== void 0 && (ye = A.ref);
    for (oe in A) _.call(A, oe) && !H.hasOwnProperty(oe) && (I[oe] = A[oe]);
    if (pe && pe.defaultProps) for (oe in A = pe.defaultProps, A) I[oe] === void 0 && (I[oe] = A[oe]);
    return { $$typeof: w, type: pe, key: J, ref: ye, props: I, _owner: $.current };
  }
  return cv.Fragment = h, cv.jsx = g, cv.jsxs = g, cv;
}
var fv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GR;
function FD() {
  return GR || (GR = 1, process.env.NODE_ENV !== "production" && function() {
    var y = ba(), w = Symbol.for("react.element"), h = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), pe = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), ke = Symbol.iterator, be = "@@iterator";
    function K(N) {
      if (N === null || typeof N != "object")
        return null;
      var Me = ke && N[ke] || N[be];
      return typeof Me == "function" ? Me : null;
    }
    var k = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(N) {
      {
        for (var Me = arguments.length, Ze = new Array(Me > 1 ? Me - 1 : 0), st = 1; st < Me; st++)
          Ze[st - 1] = arguments[st];
        x("error", N, Ze);
      }
    }
    function x(N, Me, Ze) {
      {
        var st = k.ReactDebugCurrentFrame, Ut = st.getStackAddendum();
        Ut !== "" && (Me += "%s", Ze = Ze.concat([Ut]));
        var Pt = Ze.map(function(Gt) {
          return String(Gt);
        });
        Pt.unshift("Warning: " + Me), Function.prototype.apply.call(console[N], console, Pt);
      }
    }
    var C = !1, E = !1, D = !1, P = !1, ce = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Oe(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === _ || N === H || ce || N === $ || N === V || N === oe || P || N === ye || C || E || D || typeof N == "object" && N !== null && (N.$$typeof === J || N.$$typeof === I || N.$$typeof === g || N.$$typeof === pe || N.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === ve || N.getModuleId !== void 0));
    }
    function Pe(N, Me, Ze) {
      var st = N.displayName;
      if (st)
        return st;
      var Ut = Me.displayName || Me.name || "";
      return Ut !== "" ? Ze + "(" + Ut + ")" : Ze;
    }
    function ie(N) {
      return N.displayName || "Context";
    }
    function re(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case _:
          return "Fragment";
        case h:
          return "Portal";
        case H:
          return "Profiler";
        case $:
          return "StrictMode";
        case V:
          return "Suspense";
        case oe:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case pe:
            var Me = N;
            return ie(Me) + ".Consumer";
          case g:
            var Ze = N;
            return ie(Ze._context) + ".Provider";
          case A:
            return Pe(N, N.render, "ForwardRef");
          case I:
            var st = N.displayName || null;
            return st !== null ? st : re(N.type) || "Memo";
          case J: {
            var Ut = N, Pt = Ut._payload, Gt = Ut._init;
            try {
              return re(Gt(Pt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var De = Object.assign, Ue = 0, Fe, Te, ge, $e, W, O, Q;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function ze() {
      {
        if (Ue === 0) {
          Fe = console.log, Te = console.info, ge = console.warn, $e = console.error, W = console.group, O = console.groupCollapsed, Q = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        Ue++;
      }
    }
    function Ge() {
      {
        if (Ue--, Ue === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: De({}, N, {
              value: Fe
            }),
            info: De({}, N, {
              value: Te
            }),
            warn: De({}, N, {
              value: ge
            }),
            error: De({}, N, {
              value: $e
            }),
            group: De({}, N, {
              value: W
            }),
            groupCollapsed: De({}, N, {
              value: O
            }),
            groupEnd: De({}, N, {
              value: Q
            })
          });
        }
        Ue < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qe = k.ReactCurrentDispatcher, Ye;
    function he(N, Me, Ze) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (Ut) {
            var st = Ut.stack.trim().match(/\n( *(at )?)/);
            Ye = st && st[1] || "";
          }
        return `
` + Ye + N;
      }
    }
    var Re = !1, Be;
    {
      var rt = typeof WeakMap == "function" ? WeakMap : Map;
      Be = new rt();
    }
    function xe(N, Me) {
      if (!N || Re)
        return "";
      {
        var Ze = Be.get(N);
        if (Ze !== void 0)
          return Ze;
      }
      var st;
      Re = !0;
      var Ut = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pt;
      Pt = qe.current, qe.current = null, ze();
      try {
        if (Me) {
          var Gt = function() {
            throw Error();
          };
          if (Object.defineProperty(Gt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Gt, []);
            } catch (Ht) {
              st = Ht;
            }
            Reflect.construct(N, [], Gt);
          } else {
            try {
              Gt.call();
            } catch (Ht) {
              st = Ht;
            }
            N.call(Gt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            st = Ht;
          }
          N();
        }
      } catch (Ht) {
        if (Ht && st && typeof Ht.stack == "string") {
          for (var Wt = Ht.stack.split(`
`), Wn = st.stack.split(`
`), kn = Wt.length - 1, Ln = Wn.length - 1; kn >= 1 && Ln >= 0 && Wt[kn] !== Wn[Ln]; )
            Ln--;
          for (; kn >= 1 && Ln >= 0; kn--, Ln--)
            if (Wt[kn] !== Wn[Ln]) {
              if (kn !== 1 || Ln !== 1)
                do
                  if (kn--, Ln--, Ln < 0 || Wt[kn] !== Wn[Ln]) {
                    var Sr = `
` + Wt[kn].replace(" at new ", " at ");
                    return N.displayName && Sr.includes("<anonymous>") && (Sr = Sr.replace("<anonymous>", N.displayName)), typeof N == "function" && Be.set(N, Sr), Sr;
                  }
                while (kn >= 1 && Ln >= 0);
              break;
            }
        }
      } finally {
        Re = !1, qe.current = Pt, Ge(), Error.prepareStackTrace = Ut;
      }
      var ri = N ? N.displayName || N.name : "", ai = ri ? he(ri) : "";
      return typeof N == "function" && Be.set(N, ai), ai;
    }
    function ht(N, Me, Ze) {
      return xe(N, !1);
    }
    function zt(N) {
      var Me = N.prototype;
      return !!(Me && Me.isReactComponent);
    }
    function $t(N, Me, Ze) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return xe(N, zt(N));
      if (typeof N == "string")
        return he(N);
      switch (N) {
        case V:
          return he("Suspense");
        case oe:
          return he("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case A:
            return ht(N.render);
          case I:
            return $t(N.type, Me, Ze);
          case J: {
            var st = N, Ut = st._payload, Pt = st._init;
            try {
              return $t(Pt(Ut), Me, Ze);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, B = {}, F = k.ReactDebugCurrentFrame;
    function X(N) {
      if (N) {
        var Me = N._owner, Ze = $t(N.type, N._source, Me ? Me.type : null);
        F.setExtraStackFrame(Ze);
      } else
        F.setExtraStackFrame(null);
    }
    function me(N, Me, Ze, st, Ut) {
      {
        var Pt = Function.call.bind(Mt);
        for (var Gt in N)
          if (Pt(N, Gt)) {
            var Wt = void 0;
            try {
              if (typeof N[Gt] != "function") {
                var Wn = Error((st || "React class") + ": " + Ze + " type `" + Gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wn.name = "Invariant Violation", Wn;
              }
              Wt = N[Gt](Me, Gt, st, Ze, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (kn) {
              Wt = kn;
            }
            Wt && !(Wt instanceof Error) && (X(Ut), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", st || "React class", Ze, Gt, typeof Wt), X(null)), Wt instanceof Error && !(Wt.message in B) && (B[Wt.message] = !0, X(Ut), b("Failed %s type: %s", Ze, Wt.message), X(null));
          }
      }
    }
    var Je = Array.isArray;
    function et(N) {
      return Je(N);
    }
    function Qe(N) {
      {
        var Me = typeof Symbol == "function" && Symbol.toStringTag, Ze = Me && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Ze;
      }
    }
    function _t(N) {
      try {
        return Rt(N), !1;
      } catch {
        return !0;
      }
    }
    function Rt(N) {
      return "" + N;
    }
    function Bt(N) {
      if (_t(N))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(N)), Rt(N);
    }
    var ln = k.ReactCurrentOwner, z = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Z, j;
    function le(N) {
      if (Mt.call(N, "ref")) {
        var Me = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (Me && Me.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Ce(N) {
      if (Mt.call(N, "key")) {
        var Me = Object.getOwnPropertyDescriptor(N, "key").get;
        if (Me && Me.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function gt(N, Me) {
      typeof N.ref == "string" && ln.current;
    }
    function ct(N, Me) {
      {
        var Ze = function() {
          Z || (Z = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Me));
        };
        Ze.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Ze,
          configurable: !0
        });
      }
    }
    function Lt(N, Me) {
      {
        var Ze = function() {
          j || (j = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Me));
        };
        Ze.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Ze,
          configurable: !0
        });
      }
    }
    var Yt = function(N, Me, Ze, st, Ut, Pt, Gt) {
      var Wt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: N,
        key: Me,
        ref: Ze,
        props: Gt,
        // Record the component responsible for creating this element.
        _owner: Pt
      };
      return Wt._store = {}, Object.defineProperty(Wt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Wt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.defineProperty(Wt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ut
      }), Object.freeze && (Object.freeze(Wt.props), Object.freeze(Wt)), Wt;
    };
    function Dn(N, Me, Ze, st, Ut) {
      {
        var Pt, Gt = {}, Wt = null, Wn = null;
        Ze !== void 0 && (Bt(Ze), Wt = "" + Ze), Ce(Me) && (Bt(Me.key), Wt = "" + Me.key), le(Me) && (Wn = Me.ref, gt(Me, Ut));
        for (Pt in Me)
          Mt.call(Me, Pt) && !z.hasOwnProperty(Pt) && (Gt[Pt] = Me[Pt]);
        if (N && N.defaultProps) {
          var kn = N.defaultProps;
          for (Pt in kn)
            Gt[Pt] === void 0 && (Gt[Pt] = kn[Pt]);
        }
        if (Wt || Wn) {
          var Ln = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Wt && ct(Gt, Ln), Wn && Lt(Gt, Ln);
        }
        return Yt(N, Wt, Wn, Ut, st, ln.current, Gt);
      }
    }
    var an = k.ReactCurrentOwner, un = k.ReactDebugCurrentFrame;
    function mn(N) {
      if (N) {
        var Me = N._owner, Ze = $t(N.type, N._source, Me ? Me.type : null);
        un.setExtraStackFrame(Ze);
      } else
        un.setExtraStackFrame(null);
    }
    var na;
    na = !1;
    function lr(N) {
      return typeof N == "object" && N !== null && N.$$typeof === w;
    }
    function jr() {
      {
        if (an.current) {
          var N = re(an.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Na(N) {
      return "";
    }
    var ti = {};
    function qi(N) {
      {
        var Me = jr();
        if (!Me) {
          var Ze = typeof N == "string" ? N : N.displayName || N.name;
          Ze && (Me = `

Check the top-level render call using <` + Ze + ">.");
        }
        return Me;
      }
    }
    function Eo(N, Me) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Ze = qi(Me);
        if (ti[Ze])
          return;
        ti[Ze] = !0;
        var st = "";
        N && N._owner && N._owner !== an.current && (st = " It was passed a child from " + re(N._owner.type) + "."), mn(N), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ze, st), mn(null);
      }
    }
    function wo(N, Me) {
      {
        if (typeof N != "object")
          return;
        if (et(N))
          for (var Ze = 0; Ze < N.length; Ze++) {
            var st = N[Ze];
            lr(st) && Eo(st, Me);
          }
        else if (lr(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var Ut = K(N);
          if (typeof Ut == "function" && Ut !== N.entries)
            for (var Pt = Ut.call(N), Gt; !(Gt = Pt.next()).done; )
              lr(Gt.value) && Eo(Gt.value, Me);
        }
      }
    }
    function ll(N) {
      {
        var Me = N.type;
        if (Me == null || typeof Me == "string")
          return;
        var Ze;
        if (typeof Me == "function")
          Ze = Me.propTypes;
        else if (typeof Me == "object" && (Me.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Me.$$typeof === I))
          Ze = Me.propTypes;
        else
          return;
        if (Ze) {
          var st = re(Me);
          me(Ze, N.props, "prop", st, N);
        } else if (Me.PropTypes !== void 0 && !na) {
          na = !0;
          var Ut = re(Me);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ut || "Unknown");
        }
        typeof Me.getDefaultProps == "function" && !Me.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(N) {
      {
        for (var Me = Object.keys(N.props), Ze = 0; Ze < Me.length; Ze++) {
          var st = Me[Ze];
          if (st !== "children" && st !== "key") {
            mn(N), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", st), mn(null);
            break;
          }
        }
        N.ref !== null && (mn(N), b("Invalid attribute `ref` supplied to `React.Fragment`."), mn(null));
      }
    }
    var Hr = {};
    function gr(N, Me, Ze, st, Ut, Pt) {
      {
        var Gt = Oe(N);
        if (!Gt) {
          var Wt = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Wt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wn = Na();
          Wn ? Wt += Wn : Wt += jr();
          var kn;
          N === null ? kn = "null" : et(N) ? kn = "array" : N !== void 0 && N.$$typeof === w ? (kn = "<" + (re(N.type) || "Unknown") + " />", Wt = " Did you accidentally export a JSX literal instead of a component?") : kn = typeof N, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", kn, Wt);
        }
        var Ln = Dn(N, Me, Ze, Ut, Pt);
        if (Ln == null)
          return Ln;
        if (Gt) {
          var Sr = Me.children;
          if (Sr !== void 0)
            if (st)
              if (et(Sr)) {
                for (var ri = 0; ri < Sr.length; ri++)
                  wo(Sr[ri], N);
                Object.freeze && Object.freeze(Sr);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wo(Sr, N);
        }
        if (Mt.call(Me, "key")) {
          var ai = re(N), Ht = Object.keys(Me).filter(function(ul) {
            return ul !== "key";
          }), Vt = Ht.length > 0 ? "{key: someKey, " + Ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Hr[ai + Vt]) {
            var ii = Ht.length > 0 ? "{" + Ht.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vt, ai, ii, ai), Hr[ai + Vt] = !0;
          }
        }
        return N === _ ? Ur(Ln) : ll(Ln), Ln;
      }
    }
    function Si(N, Me, Ze) {
      return gr(N, Me, Ze, !0);
    }
    function ni(N, Me, Ze) {
      return gr(N, Me, Ze, !1);
    }
    var bi = ni, Ei = Si;
    fv.Fragment = _, fv.jsx = bi, fv.jsxs = Ei;
  }()), fv;
}
var QR;
function BD() {
  return QR || (QR = 1, process.env.NODE_ENV === "production" ? py.exports = HD() : py.exports = FD()), py.exports;
}
var Un = BD(), nd = {}, hy = { exports: {} }, Ja = {}, my = { exports: {} }, Wb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function VD() {
  return XR || (XR = 1, function(y) {
    function w(ge, $e) {
      var W = ge.length;
      ge.push($e);
      e: for (; 0 < W; ) {
        var O = W - 1 >>> 1, Q = ge[O];
        if (0 < $(Q, $e)) ge[O] = $e, ge[W] = Q, W = O;
        else break e;
      }
    }
    function h(ge) {
      return ge.length === 0 ? null : ge[0];
    }
    function _(ge) {
      if (ge.length === 0) return null;
      var $e = ge[0], W = ge.pop();
      if (W !== $e) {
        ge[0] = W;
        e: for (var O = 0, Q = ge.length, He = Q >>> 1; O < He; ) {
          var ze = 2 * (O + 1) - 1, Ge = ge[ze], qe = ze + 1, Ye = ge[qe];
          if (0 > $(Ge, W)) qe < Q && 0 > $(Ye, Ge) ? (ge[O] = Ye, ge[qe] = W, O = qe) : (ge[O] = Ge, ge[ze] = W, O = ze);
          else if (qe < Q && 0 > $(Ye, W)) ge[O] = Ye, ge[qe] = W, O = qe;
          else break e;
        }
      }
      return $e;
    }
    function $(ge, $e) {
      var W = ge.sortIndex - $e.sortIndex;
      return W !== 0 ? W : ge.id - $e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      y.unstable_now = function() {
        return H.now();
      };
    } else {
      var g = Date, pe = g.now();
      y.unstable_now = function() {
        return g.now() - pe;
      };
    }
    var A = [], V = [], oe = 1, I = null, J = 3, ye = !1, ke = !1, be = !1, K = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(ge) {
      for (var $e = h(V); $e !== null; ) {
        if ($e.callback === null) _(V);
        else if ($e.startTime <= ge) _(V), $e.sortIndex = $e.expirationTime, w(A, $e);
        else break;
        $e = h(V);
      }
    }
    function C(ge) {
      if (be = !1, x(ge), !ke) if (h(A) !== null) ke = !0, Fe(E);
      else {
        var $e = h(V);
        $e !== null && Te(C, $e.startTime - ge);
      }
    }
    function E(ge, $e) {
      ke = !1, be && (be = !1, k(ce), ce = -1), ye = !0;
      var W = J;
      try {
        for (x($e), I = h(A); I !== null && (!(I.expirationTime > $e) || ge && !Pe()); ) {
          var O = I.callback;
          if (typeof O == "function") {
            I.callback = null, J = I.priorityLevel;
            var Q = O(I.expirationTime <= $e);
            $e = y.unstable_now(), typeof Q == "function" ? I.callback = Q : I === h(A) && _(A), x($e);
          } else _(A);
          I = h(A);
        }
        if (I !== null) var He = !0;
        else {
          var ze = h(V);
          ze !== null && Te(C, ze.startTime - $e), He = !1;
        }
        return He;
      } finally {
        I = null, J = W, ye = !1;
      }
    }
    var D = !1, P = null, ce = -1, ve = 5, Oe = -1;
    function Pe() {
      return !(y.unstable_now() - Oe < ve);
    }
    function ie() {
      if (P !== null) {
        var ge = y.unstable_now();
        Oe = ge;
        var $e = !0;
        try {
          $e = P(!0, ge);
        } finally {
          $e ? re() : (D = !1, P = null);
        }
      } else D = !1;
    }
    var re;
    if (typeof b == "function") re = function() {
      b(ie);
    };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), Ue = De.port2;
      De.port1.onmessage = ie, re = function() {
        Ue.postMessage(null);
      };
    } else re = function() {
      K(ie, 0);
    };
    function Fe(ge) {
      P = ge, D || (D = !0, re());
    }
    function Te(ge, $e) {
      ce = K(function() {
        ge(y.unstable_now());
      }, $e);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(ge) {
      ge.callback = null;
    }, y.unstable_continueExecution = function() {
      ke || ye || (ke = !0, Fe(E));
    }, y.unstable_forceFrameRate = function(ge) {
      0 > ge || 125 < ge ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ve = 0 < ge ? Math.floor(1e3 / ge) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, y.unstable_getFirstCallbackNode = function() {
      return h(A);
    }, y.unstable_next = function(ge) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var $e = 3;
          break;
        default:
          $e = J;
      }
      var W = J;
      J = $e;
      try {
        return ge();
      } finally {
        J = W;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(ge, $e) {
      switch (ge) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ge = 3;
      }
      var W = J;
      J = ge;
      try {
        return $e();
      } finally {
        J = W;
      }
    }, y.unstable_scheduleCallback = function(ge, $e, W) {
      var O = y.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? O + W : O) : W = O, ge) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return Q = W + Q, ge = { id: oe++, callback: $e, priorityLevel: ge, startTime: W, expirationTime: Q, sortIndex: -1 }, W > O ? (ge.sortIndex = W, w(V, ge), h(A) === null && ge === h(V) && (be ? (k(ce), ce = -1) : be = !0, Te(C, W - O))) : (ge.sortIndex = Q, w(A, ge), ke || ye || (ke = !0, Fe(E))), ge;
    }, y.unstable_shouldYield = Pe, y.unstable_wrapCallback = function(ge) {
      var $e = J;
      return function() {
        var W = J;
        J = $e;
        try {
          return ge.apply(this, arguments);
        } finally {
          J = W;
        }
      };
    };
  }(Wb)), Wb;
}
var qb = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function ID() {
  return KR || (KR = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, h = 5;
      function _(j, le) {
        var Ce = j.length;
        j.push(le), g(j, le, Ce);
      }
      function $(j) {
        return j.length === 0 ? null : j[0];
      }
      function H(j) {
        if (j.length === 0)
          return null;
        var le = j[0], Ce = j.pop();
        return Ce !== le && (j[0] = Ce, pe(j, Ce, 0)), le;
      }
      function g(j, le, Ce) {
        for (var gt = Ce; gt > 0; ) {
          var ct = gt - 1 >>> 1, Lt = j[ct];
          if (A(Lt, le) > 0)
            j[ct] = le, j[gt] = Lt, gt = ct;
          else
            return;
        }
      }
      function pe(j, le, Ce) {
        for (var gt = Ce, ct = j.length, Lt = ct >>> 1; gt < Lt; ) {
          var Yt = (gt + 1) * 2 - 1, Dn = j[Yt], an = Yt + 1, un = j[an];
          if (A(Dn, le) < 0)
            an < ct && A(un, Dn) < 0 ? (j[gt] = un, j[an] = le, gt = an) : (j[gt] = Dn, j[Yt] = le, gt = Yt);
          else if (an < ct && A(un, le) < 0)
            j[gt] = un, j[an] = le, gt = an;
          else
            return;
        }
      }
      function A(j, le) {
        var Ce = j.sortIndex - le.sortIndex;
        return Ce !== 0 ? Ce : j.id - le.id;
      }
      var V = 1, oe = 2, I = 3, J = 4, ye = 5;
      function ke(j, le) {
      }
      var be = typeof performance == "object" && typeof performance.now == "function";
      if (be) {
        var K = performance;
        y.unstable_now = function() {
          return K.now();
        };
      } else {
        var k = Date, b = k.now();
        y.unstable_now = function() {
          return k.now() - b;
        };
      }
      var x = 1073741823, C = -1, E = 250, D = 5e3, P = 1e4, ce = x, ve = [], Oe = [], Pe = 1, ie = null, re = I, De = !1, Ue = !1, Fe = !1, Te = typeof setTimeout == "function" ? setTimeout : null, ge = typeof clearTimeout == "function" ? clearTimeout : null, $e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function W(j) {
        for (var le = $(Oe); le !== null; ) {
          if (le.callback === null)
            H(Oe);
          else if (le.startTime <= j)
            H(Oe), le.sortIndex = le.expirationTime, _(ve, le);
          else
            return;
          le = $(Oe);
        }
      }
      function O(j) {
        if (Fe = !1, W(j), !Ue)
          if ($(ve) !== null)
            Ue = !0, Rt(Q);
          else {
            var le = $(Oe);
            le !== null && Bt(O, le.startTime - j);
          }
      }
      function Q(j, le) {
        Ue = !1, Fe && (Fe = !1, ln()), De = !0;
        var Ce = re;
        try {
          var gt;
          if (!w) return He(j, le);
        } finally {
          ie = null, re = Ce, De = !1;
        }
      }
      function He(j, le) {
        var Ce = le;
        for (W(Ce), ie = $(ve); ie !== null && !(ie.expirationTime > Ce && (!j || F())); ) {
          var gt = ie.callback;
          if (typeof gt == "function") {
            ie.callback = null, re = ie.priorityLevel;
            var ct = ie.expirationTime <= Ce, Lt = gt(ct);
            Ce = y.unstable_now(), typeof Lt == "function" ? ie.callback = Lt : ie === $(ve) && H(ve), W(Ce);
          } else
            H(ve);
          ie = $(ve);
        }
        if (ie !== null)
          return !0;
        var Yt = $(Oe);
        return Yt !== null && Bt(O, Yt.startTime - Ce), !1;
      }
      function ze(j, le) {
        switch (j) {
          case V:
          case oe:
          case I:
          case J:
          case ye:
            break;
          default:
            j = I;
        }
        var Ce = re;
        re = j;
        try {
          return le();
        } finally {
          re = Ce;
        }
      }
      function Ge(j) {
        var le;
        switch (re) {
          case V:
          case oe:
          case I:
            le = I;
            break;
          default:
            le = re;
            break;
        }
        var Ce = re;
        re = le;
        try {
          return j();
        } finally {
          re = Ce;
        }
      }
      function qe(j) {
        var le = re;
        return function() {
          var Ce = re;
          re = le;
          try {
            return j.apply(this, arguments);
          } finally {
            re = Ce;
          }
        };
      }
      function Ye(j, le, Ce) {
        var gt = y.unstable_now(), ct;
        if (typeof Ce == "object" && Ce !== null) {
          var Lt = Ce.delay;
          typeof Lt == "number" && Lt > 0 ? ct = gt + Lt : ct = gt;
        } else
          ct = gt;
        var Yt;
        switch (j) {
          case V:
            Yt = C;
            break;
          case oe:
            Yt = E;
            break;
          case ye:
            Yt = ce;
            break;
          case J:
            Yt = P;
            break;
          case I:
          default:
            Yt = D;
            break;
        }
        var Dn = ct + Yt, an = {
          id: Pe++,
          callback: le,
          priorityLevel: j,
          startTime: ct,
          expirationTime: Dn,
          sortIndex: -1
        };
        return ct > gt ? (an.sortIndex = ct, _(Oe, an), $(ve) === null && an === $(Oe) && (Fe ? ln() : Fe = !0, Bt(O, ct - gt))) : (an.sortIndex = Dn, _(ve, an), !Ue && !De && (Ue = !0, Rt(Q))), an;
      }
      function he() {
      }
      function Re() {
        !Ue && !De && (Ue = !0, Rt(Q));
      }
      function Be() {
        return $(ve);
      }
      function rt(j) {
        j.callback = null;
      }
      function xe() {
        return re;
      }
      var ht = !1, zt = null, $t = -1, Mt = h, B = -1;
      function F() {
        var j = y.unstable_now() - B;
        return !(j < Mt);
      }
      function X() {
      }
      function me(j) {
        if (j < 0 || j > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        j > 0 ? Mt = Math.floor(1e3 / j) : Mt = h;
      }
      var Je = function() {
        if (zt !== null) {
          var j = y.unstable_now();
          B = j;
          var le = !0, Ce = !0;
          try {
            Ce = zt(le, j);
          } finally {
            Ce ? et() : (ht = !1, zt = null);
          }
        } else
          ht = !1;
      }, et;
      if (typeof $e == "function")
        et = function() {
          $e(Je);
        };
      else if (typeof MessageChannel < "u") {
        var Qe = new MessageChannel(), _t = Qe.port2;
        Qe.port1.onmessage = Je, et = function() {
          _t.postMessage(null);
        };
      } else
        et = function() {
          Te(Je, 0);
        };
      function Rt(j) {
        zt = j, ht || (ht = !0, et());
      }
      function Bt(j, le) {
        $t = Te(function() {
          j(y.unstable_now());
        }, le);
      }
      function ln() {
        ge($t), $t = -1;
      }
      var z = X, Z = null;
      y.unstable_IdlePriority = ye, y.unstable_ImmediatePriority = V, y.unstable_LowPriority = J, y.unstable_NormalPriority = I, y.unstable_Profiling = Z, y.unstable_UserBlockingPriority = oe, y.unstable_cancelCallback = rt, y.unstable_continueExecution = Re, y.unstable_forceFrameRate = me, y.unstable_getCurrentPriorityLevel = xe, y.unstable_getFirstCallbackNode = Be, y.unstable_next = Ge, y.unstable_pauseExecution = he, y.unstable_requestPaint = z, y.unstable_runWithPriority = ze, y.unstable_scheduleCallback = Ye, y.unstable_shouldYield = F, y.unstable_wrapCallback = qe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(qb)), qb;
}
var ZR;
function PC() {
  return ZR || (ZR = 1, process.env.NODE_ENV === "production" ? my.exports = VD() : my.exports = ID()), my.exports;
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
var JR;
function $D() {
  if (JR) return Ja;
  JR = 1;
  var y = ba(), w = PC();
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), $ = {};
  function H(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for ($[n] = r, n = 0; n < r.length; n++) _.add(r[n]);
  }
  var pe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), A = Object.prototype.hasOwnProperty, V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = {}, I = {};
  function J(n) {
    return A.call(I, n) ? !0 : A.call(oe, n) ? !1 : V.test(n) ? I[n] = !0 : (oe[n] = !0, !1);
  }
  function ye(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ke(n, r, o, u) {
    if (r === null || typeof r > "u" || ye(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function be(n, r, o, u, c, d, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = S;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    K[n] = new be(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    K[r] = new be(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    K[n] = new be(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    K[n] = new be(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    K[n] = new be(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    K[n] = new be(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    K[n] = new be(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    K[n] = new be(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    K[n] = new be(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var k = /[\-:]([a-z])/g;
  function b(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      k,
      b
    );
    K[r] = new be(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(k, b);
    K[r] = new be(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(k, b);
    K[r] = new be(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    K[n] = new be(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    K[n] = new be(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function x(n, r, o, u) {
    var c = K.hasOwnProperty(r) ? K[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ke(r, o, c, u) && (o = null), u || c === null ? J(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var C = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = Symbol.for("react.element"), D = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), Pe = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), ge = Symbol.iterator;
  function $e(n) {
    return n === null || typeof n != "object" ? null : (n = ge && n[ge] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var W = Object.assign, O;
  function Q(n) {
    if (O === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var He = !1;
  function ze(n, r) {
    if (!n || He) return "";
    He = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (fe) {
          var u = fe;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (fe) {
          u = fe;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (fe) {
          u = fe;
        }
        n();
      }
    } catch (fe) {
      if (fe && u && typeof fe.stack == "string") {
        for (var c = fe.stack.split(`
`), d = u.stack.split(`
`), S = c.length - 1, M = d.length - 1; 1 <= S && 0 <= M && c[S] !== d[M]; ) M--;
        for (; 1 <= S && 0 <= M; S--, M--) if (c[S] !== d[M]) {
          if (S !== 1 || M !== 1)
            do
              if (S--, M--, 0 > M || c[S] !== d[M]) {
                var U = `
` + c[S].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= S && 0 <= M);
          break;
        }
      }
    } finally {
      He = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Q(n) : "";
  }
  function Ge(n) {
    switch (n.tag) {
      case 5:
        return Q(n.type);
      case 16:
        return Q("Lazy");
      case 13:
        return Q("Suspense");
      case 19:
        return Q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ze(n.type, !1), n;
      case 11:
        return n = ze(n.type.render, !1), n;
      case 1:
        return n = ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function qe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case P:
        return "Fragment";
      case D:
        return "Portal";
      case ve:
        return "Profiler";
      case ce:
        return "StrictMode";
      case re:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Pe:
        return (n.displayName || "Context") + ".Consumer";
      case Oe:
        return (n._context.displayName || "Context") + ".Provider";
      case ie:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ue:
        return r = n.displayName || null, r !== null ? r : qe(n.type) || "Memo";
      case Fe:
        r = n._payload, n = n._init;
        try {
          return qe(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ye(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return qe(r);
      case 8:
        return r === ce ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function he(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Re(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Be(n) {
    var r = Re(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, d = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(S) {
        u = "" + S, d.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(S) {
        u = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function rt(n) {
    n._valueTracker || (n._valueTracker = Be(n));
  }
  function xe(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = Re(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function ht(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function zt(n, r) {
    var o = r.checked;
    return W({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function $t(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = he(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Mt(n, r) {
    r = r.checked, r != null && x(n, "checked", r, !1);
  }
  function B(n, r) {
    Mt(n, r);
    var o = he(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? X(n, r.type, o) : r.hasOwnProperty("defaultValue") && X(n, r.type, he(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function F(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function X(n, r, o) {
    (r !== "number" || ht(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var me = Array.isArray;
  function Je(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + he(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function et(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(h(91));
    return W({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Qe(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(h(92));
        if (me(o)) {
          if (1 < o.length) throw Error(h(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: he(o) };
  }
  function _t(n, r) {
    var o = he(r.value), u = he(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Rt(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Bt(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ln(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Bt(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var z, Z = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (z = z || document.createElement("div"), z.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = z.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function j(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var le = {
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
  }, Ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(le).forEach(function(n) {
    Ce.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), le[r] = le[n];
    });
  });
  function gt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || le.hasOwnProperty(n) && le[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = gt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var Lt = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Yt(n, r) {
    if (r) {
      if (Lt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(h(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(h(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(h(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(h(62));
    }
  }
  function Dn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var an = null;
  function un(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var mn = null, na = null, lr = null;
  function jr(n) {
    if (n = St(n)) {
      if (typeof mn != "function") throw Error(h(280));
      var r = n.stateNode;
      r && (r = Fn(r), mn(n.stateNode, n.type, r));
    }
  }
  function Na(n) {
    na ? lr ? lr.push(n) : lr = [n] : na = n;
  }
  function ti() {
    if (na) {
      var n = na, r = lr;
      if (lr = na = null, jr(n), r) for (n = 0; n < r.length; n++) jr(r[n]);
    }
  }
  function qi(n, r) {
    return n(r);
  }
  function Eo() {
  }
  var wo = !1;
  function ll(n, r, o) {
    if (wo) return n(r, o);
    wo = !0;
    try {
      return qi(n, r, o);
    } finally {
      wo = !1, (na !== null || lr !== null) && (Eo(), ti());
    }
  }
  function Ur(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Fn(o);
    if (u === null) return null;
    o = u[r];
    e: switch (r) {
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
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(h(231, r, typeof o));
    return o;
  }
  var Hr = !1;
  if (pe) try {
    var gr = {};
    Object.defineProperty(gr, "passive", { get: function() {
      Hr = !0;
    } }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr);
  } catch {
    Hr = !1;
  }
  function Si(n, r, o, u, c, d, S, M, U) {
    var fe = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, fe);
    } catch (Ae) {
      this.onError(Ae);
    }
  }
  var ni = !1, bi = null, Ei = !1, N = null, Me = { onError: function(n) {
    ni = !0, bi = n;
  } };
  function Ze(n, r, o, u, c, d, S, M, U) {
    ni = !1, bi = null, Si.apply(Me, arguments);
  }
  function st(n, r, o, u, c, d, S, M, U) {
    if (Ze.apply(this, arguments), ni) {
      if (ni) {
        var fe = bi;
        ni = !1, bi = null;
      } else throw Error(h(198));
      Ei || (Ei = !0, N = fe);
    }
  }
  function Ut(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Gt(n) {
    if (Ut(n) !== n) throw Error(h(188));
  }
  function Wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ut(n), r === null) throw Error(h(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === o) return Gt(c), n;
          if (d === u) return Gt(c), r;
          d = d.sibling;
        }
        throw Error(h(188));
      }
      if (o.return !== u.return) o = c, u = d;
      else {
        for (var S = !1, M = c.child; M; ) {
          if (M === o) {
            S = !0, o = c, u = d;
            break;
          }
          if (M === u) {
            S = !0, u = c, o = d;
            break;
          }
          M = M.sibling;
        }
        if (!S) {
          for (M = d.child; M; ) {
            if (M === o) {
              S = !0, o = d, u = c;
              break;
            }
            if (M === u) {
              S = !0, u = d, o = c;
              break;
            }
            M = M.sibling;
          }
          if (!S) throw Error(h(189));
        }
      }
      if (o.alternate !== u) throw Error(h(190));
    }
    if (o.tag !== 3) throw Error(h(188));
    return o.stateNode.current === o ? n : r;
  }
  function Wn(n) {
    return n = Wt(n), n !== null ? kn(n) : null;
  }
  function kn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = kn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Ln = w.unstable_scheduleCallback, Sr = w.unstable_cancelCallback, ri = w.unstable_shouldYield, ai = w.unstable_requestPaint, Ht = w.unstable_now, Vt = w.unstable_getCurrentPriorityLevel, ii = w.unstable_ImmediatePriority, ul = w.unstable_UserBlockingPriority, sl = w.unstable_NormalPriority, Ro = w.unstable_LowPriority, nu = w.unstable_IdlePriority, Co = null, ra = null;
  function es(n) {
    if (ra && typeof ra.onCommitFiberRoot == "function") try {
      ra.onCommitFiberRoot(Co, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Fr = Math.clz32 ? Math.clz32 : ru, mc = Math.log, yc = Math.LN2;
  function ru(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (mc(n) / yc | 0) | 0;
  }
  var xo = 64, Ea = 4194304;
  function oi(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function li(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, S = o & 268435455;
    if (S !== 0) {
      var M = S & ~c;
      M !== 0 ? u = oi(M) : (d &= S, d !== 0 && (u = oi(d)));
    } else S = o & ~c, S !== 0 ? u = oi(S) : d !== 0 && (u = oi(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Fr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function au(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function cl(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var S = 31 - Fr(d), M = 1 << S, U = c[S];
      U === -1 ? (!(M & o) || M & u) && (c[S] = au(M, r)) : U <= r && (n.expiredLanes |= M), d &= ~M;
    }
  }
  function To(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = xo;
    return xo <<= 1, !(xo & 4194240) && (xo = 64), n;
  }
  function ou(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function Yi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Fr(r), n[r] = o;
  }
  function id(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Fr(o), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~d;
    }
  }
  function Gi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Fr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var sn = 0;
  function lu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nn, ts, wi, Nt, uu, br = !1, Ri = [], Br = null, Ci = null, Nn = null, Sn = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), ur = [], Vr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Pa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Br = null;
        break;
      case "dragenter":
      case "dragleave":
        Ci = null;
        break;
      case "mouseover":
      case "mouseout":
        Nn = null;
        break;
      case "pointerover":
      case "pointerout":
        Sn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _o.delete(r.pointerId);
    }
  }
  function fl(n, r, o, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = St(r), r !== null && ts(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ns(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Br = fl(Br, n, r, o, u, c), !0;
      case "dragenter":
        return Ci = fl(Ci, n, r, o, u, c), !0;
      case "mouseover":
        return Nn = fl(Nn, n, r, o, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Sn.set(d, fl(Sn.get(d) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, _o.set(d, fl(_o.get(d) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function rs(n) {
    var r = bl(n.target);
    if (r !== null) {
      var o = Ut(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Pt(o), r !== null) {
            n.blockedOn = r, uu(n.priority, function() {
              wi(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Oo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = fu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        an = u, o.target.dispatchEvent(u), an = null;
      } else return r = St(o), r !== null && ts(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function dl(n, r, o) {
    Oo(n) && o.delete(r);
  }
  function od() {
    br = !1, Br !== null && Oo(Br) && (Br = null), Ci !== null && Oo(Ci) && (Ci = null), Nn !== null && Oo(Nn) && (Nn = null), Sn.forEach(dl), _o.forEach(dl);
  }
  function Aa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, br || (br = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, od)));
  }
  function ui(n) {
    function r(c) {
      return Aa(c, n);
    }
    if (0 < Ri.length) {
      Aa(Ri[0], n);
      for (var o = 1; o < Ri.length; o++) {
        var u = Ri[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Br !== null && Aa(Br, n), Ci !== null && Aa(Ci, n), Nn !== null && Aa(Nn, n), Sn.forEach(r), _o.forEach(r), o = 0; o < ur.length; o++) u = ur[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ur.length && (o = ur[0], o.blockedOn === null); ) rs(o), o.blockedOn === null && ur.shift();
  }
  var xi = C.ReactCurrentBatchConfig, ja = !0;
  function su(n, r, o, u) {
    var c = sn, d = xi.transition;
    xi.transition = null;
    try {
      sn = 1, Do(n, r, o, u);
    } finally {
      sn = c, xi.transition = d;
    }
  }
  function cu(n, r, o, u) {
    var c = sn, d = xi.transition;
    xi.transition = null;
    try {
      sn = 4, Do(n, r, o, u);
    } finally {
      sn = c, xi.transition = d;
    }
  }
  function Do(n, r, o, u) {
    if (ja) {
      var c = fu(n, r, o, u);
      if (c === null) Dc(n, r, u, pl, o), Pa(n, u);
      else if (ns(c, n, r, o, u)) u.stopPropagation();
      else if (Pa(n, u), r & 4 && -1 < Vr.indexOf(n)) {
        for (; c !== null; ) {
          var d = St(c);
          if (d !== null && nn(d), d = fu(n, r, o, u), d === null && Dc(n, r, u, pl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Dc(n, r, u, null, o);
    }
  }
  var pl = null;
  function fu(n, r, o, u) {
    if (pl = null, n = un(u), n = bl(n), n !== null) if (r = Ut(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Pt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return pl = n, null;
  }
  function du(n) {
    switch (n) {
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
        switch (Vt()) {
          case ii:
            return 1;
          case ul:
            return 4;
          case sl:
          case Ro:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var si = null, m = null, L = null;
  function se() {
    if (L) return L;
    var n, r = m, o = r.length, u, c = "value" in si ? si.value : si.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var S = o - n;
    for (u = 1; u <= S && r[o - u] === c[d - u]; u++) ;
    return L = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Se(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function We() {
    return !0;
  }
  function Et() {
    return !1;
  }
  function Ke(n) {
    function r(o, u, c, d, S) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = S, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (o = n[M], this[M] = o ? o(d) : d[M]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? We : Et, this.isPropagationStopped = Et, this;
    }
    return W(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = We);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = We);
    }, persist: function() {
    }, isPersistent: We }), r;
  }
  var xt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qt = Ke(xt), rn = W({}, xt, { view: 0, detail: 0 }), zn = Ke(rn), bn, It, En, Hn = W({}, rn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== En && (En && n.type === "mousemove" ? (bn = n.screenX - En.screenX, It = n.screenY - En.screenY) : It = bn = 0, En = n), bn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : It;
  } }), ko = Ke(Hn), as = W({}, Hn, { dataTransfer: 0 }), Qi = Ke(as), is = W({}, rn, { relatedTarget: 0 }), vl = Ke(is), ld = W({}, xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gc = Ke(ld), ud = W({}, xt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), wv = Ke(ud), sd = W({}, xt, { data: 0 }), cd = Ke(sd), Rv = {
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
  }, Cv = {
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
  }, Dy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Dy[n]) ? !!r[n] : !1;
  }
  function fd() {
    return Xi;
  }
  var dd = W({}, rn, { key: function(n) {
    if (n.key) {
      var r = Rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Se(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fd, charCode: function(n) {
    return n.type === "keypress" ? Se(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Se(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), pd = Ke(dd), vd = W({}, Hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xv = Ke(vd), Sc = W({}, rn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fd }), Tv = Ke(Sc), aa = W({}, xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ki = Ke(aa), Zn = W({}, Hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zi = Ke(Zn), hd = [9, 13, 27, 32], pu = pe && "CompositionEvent" in window, os = null;
  pe && "documentMode" in document && (os = document.documentMode);
  var ls = pe && "TextEvent" in window && !os, _v = pe && (!pu || os && 8 < os && 11 >= os), Ov = " ", bc = !1;
  function Dv(n, r) {
    switch (n) {
      case "keyup":
        return hd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function kv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var vu = !1;
  function zv(n, r) {
    switch (n) {
      case "compositionend":
        return kv(r);
      case "keypress":
        return r.which !== 32 ? null : (bc = !0, Ov);
      case "textInput":
        return n = r.data, n === Ov && bc ? null : n;
      default:
        return null;
    }
  }
  function ky(n, r) {
    if (vu) return n === "compositionend" || !pu && Dv(n, r) ? (n = se(), L = m = si = null, vu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return _v && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var zy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!zy[n.type] : r === "textarea";
  }
  function md(n, r, o, u) {
    Na(u), r = ps(r, "onChange"), 0 < r.length && (o = new Qt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ti = null, hl = null;
  function Lv(n) {
    gl(n, 0);
  }
  function us(n) {
    var r = fi(n);
    if (xe(r)) return n;
  }
  function My(n, r) {
    if (n === "change") return r;
  }
  var Nv = !1;
  if (pe) {
    var yd;
    if (pe) {
      var gd = "oninput" in document;
      if (!gd) {
        var Pv = document.createElement("div");
        Pv.setAttribute("oninput", "return;"), gd = typeof Pv.oninput == "function";
      }
      yd = gd;
    } else yd = !1;
    Nv = yd && (!document.documentMode || 9 < document.documentMode);
  }
  function Av() {
    Ti && (Ti.detachEvent("onpropertychange", jv), hl = Ti = null);
  }
  function jv(n) {
    if (n.propertyName === "value" && us(hl)) {
      var r = [];
      md(r, hl, n, un(n)), ll(Lv, r);
    }
  }
  function Ly(n, r, o) {
    n === "focusin" ? (Av(), Ti = r, hl = o, Ti.attachEvent("onpropertychange", jv)) : n === "focusout" && Av();
  }
  function Uv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return us(hl);
  }
  function Ny(n, r) {
    if (n === "click") return us(r);
  }
  function Hv(n, r) {
    if (n === "input" || n === "change") return us(r);
  }
  function Py(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ci = typeof Object.is == "function" ? Object.is : Py;
  function ss(n, r) {
    if (ci(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!A.call(r, c) || !ci(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ec(n, r) {
    var o = Fv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Fv(o);
    }
  }
  function zo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? zo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cs() {
    for (var n = window, r = ht(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = ht(n.document);
    }
    return r;
  }
  function wc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function hu(n) {
    var r = cs(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && zo(o.ownerDocument.documentElement, o)) {
      if (u !== null && wc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Ec(o, d);
          var S = Ec(
            o,
            u
          );
          c && S && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ay = pe && "documentMode" in document && 11 >= document.documentMode, mu = null, Sd = null, fs = null, bd = !1;
  function Ed(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    bd || mu == null || mu !== ht(u) || (u = mu, "selectionStart" in u && wc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), fs && ss(fs, u) || (fs = u, u = ps(Sd, "onSelect"), 0 < u.length && (r = new Qt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = mu)));
  }
  function Rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ml = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, Er = {}, wd = {};
  pe && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete ml.animationend.animation, delete ml.animationiteration.animation, delete ml.animationstart.animation), "TransitionEvent" in window || delete ml.transitionend.transition);
  function Cc(n) {
    if (Er[n]) return Er[n];
    if (!ml[n]) return n;
    var r = ml[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in wd) return Er[n] = r[o];
    return n;
  }
  var Bv = Cc("animationend"), Vv = Cc("animationiteration"), Iv = Cc("animationstart"), $v = Cc("transitionend"), Rd = /* @__PURE__ */ new Map(), xc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    Rd.set(n, r), H(r, [n]);
  }
  for (var Cd = 0; Cd < xc.length; Cd++) {
    var yl = xc[Cd], jy = yl.toLowerCase(), Uy = yl[0].toUpperCase() + yl.slice(1);
    Ua(jy, "on" + Uy);
  }
  Ua(Bv, "onAnimationEnd"), Ua(Vv, "onAnimationIteration"), Ua(Iv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua($v, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), H("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), H("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), H("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), H("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
  function Tc(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, st(u, r, void 0, n), n.currentTarget = null;
  }
  function gl(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var S = u.length - 1; 0 <= S; S--) {
          var M = u[S], U = M.instance, fe = M.currentTarget;
          if (M = M.listener, U !== d && c.isPropagationStopped()) break e;
          Tc(c, M, fe), d = U;
        }
        else for (S = 0; S < u.length; S++) {
          if (M = u[S], U = M.instance, fe = M.currentTarget, M = M.listener, U !== d && c.isPropagationStopped()) break e;
          Tc(c, M, fe), d = U;
        }
      }
    }
    if (Ei) throw n = N, Ei = !1, N = null, n;
  }
  function yn(n, r) {
    var o = r[ms];
    o === void 0 && (o = r[ms] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Wv(r, n, 2, !1), o.add(u));
  }
  function _c(n, r, o) {
    var u = 0;
    r && (u |= 4), Wv(o, n, u, r);
  }
  var Oc = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[Oc]) {
      n[Oc] = !0, _.forEach(function(o) {
        o !== "selectionchange" && (xd.has(o) || _c(o, !1, n), _c(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Oc] || (r[Oc] = !0, _c("selectionchange", !1, r));
    }
  }
  function Wv(n, r, o, u) {
    switch (du(r)) {
      case 1:
        var c = su;
        break;
      case 4:
        c = cu;
        break;
      default:
        c = Do;
    }
    o = c.bind(null, r, o, n), c = void 0, !Hr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Dc(n, r, o, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var S = u.tag;
      if (S === 3 || S === 4) {
        var M = u.stateNode.containerInfo;
        if (M === c || M.nodeType === 8 && M.parentNode === c) break;
        if (S === 4) for (S = u.return; S !== null; ) {
          var U = S.tag;
          if ((U === 3 || U === 4) && (U = S.stateNode.containerInfo, U === c || U.nodeType === 8 && U.parentNode === c)) return;
          S = S.return;
        }
        for (; M !== null; ) {
          if (S = bl(M), S === null) return;
          if (U = S.tag, U === 5 || U === 6) {
            u = d = S;
            continue e;
          }
          M = M.parentNode;
        }
      }
      u = u.return;
    }
    ll(function() {
      var fe = d, Ae = un(o), Ve = [];
      e: {
        var Ne = Rd.get(n);
        if (Ne !== void 0) {
          var it = Qt, ft = n;
          switch (n) {
            case "keypress":
              if (Se(o) === 0) break e;
            case "keydown":
            case "keyup":
              it = pd;
              break;
            case "focusin":
              ft = "focus", it = vl;
              break;
            case "focusout":
              ft = "blur", it = vl;
              break;
            case "beforeblur":
            case "afterblur":
              it = vl;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              it = ko;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              it = Qi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              it = Tv;
              break;
            case Bv:
            case Vv:
            case Iv:
              it = gc;
              break;
            case $v:
              it = Ki;
              break;
            case "scroll":
              it = zn;
              break;
            case "wheel":
              it = Zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              it = wv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              it = xv;
          }
          var vt = (r & 4) !== 0, Xn = !vt && n === "scroll", ee = vt ? Ne !== null ? Ne + "Capture" : null : Ne;
          vt = [];
          for (var Y = fe, ae; Y !== null; ) {
            ae = Y;
            var je = ae.stateNode;
            if (ae.tag === 5 && je !== null && (ae = je, ee !== null && (je = Ur(Y, ee), je != null && vt.push(gu(Y, je, ae)))), Xn) break;
            Y = Y.return;
          }
          0 < vt.length && (Ne = new it(Ne, ft, null, o, Ae), Ve.push({ event: Ne, listeners: vt }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Ne = n === "mouseover" || n === "pointerover", it = n === "mouseout" || n === "pointerout", Ne && o !== an && (ft = o.relatedTarget || o.fromElement) && (bl(ft) || ft[Ji])) break e;
          if ((it || Ne) && (Ne = Ae.window === Ae ? Ae : (Ne = Ae.ownerDocument) ? Ne.defaultView || Ne.parentWindow : window, it ? (ft = o.relatedTarget || o.toElement, it = fe, ft = ft ? bl(ft) : null, ft !== null && (Xn = Ut(ft), ft !== Xn || ft.tag !== 5 && ft.tag !== 6) && (ft = null)) : (it = null, ft = fe), it !== ft)) {
            if (vt = ko, je = "onMouseLeave", ee = "onMouseEnter", Y = "mouse", (n === "pointerout" || n === "pointerover") && (vt = xv, je = "onPointerLeave", ee = "onPointerEnter", Y = "pointer"), Xn = it == null ? Ne : fi(it), ae = ft == null ? Ne : fi(ft), Ne = new vt(je, Y + "leave", it, o, Ae), Ne.target = Xn, Ne.relatedTarget = ae, je = null, bl(Ae) === fe && (vt = new vt(ee, Y + "enter", ft, o, Ae), vt.target = ae, vt.relatedTarget = Xn, je = vt), Xn = je, it && ft) t: {
              for (vt = it, ee = ft, Y = 0, ae = vt; ae; ae = Mo(ae)) Y++;
              for (ae = 0, je = ee; je; je = Mo(je)) ae++;
              for (; 0 < Y - ae; ) vt = Mo(vt), Y--;
              for (; 0 < ae - Y; ) ee = Mo(ee), ae--;
              for (; Y--; ) {
                if (vt === ee || ee !== null && vt === ee.alternate) break t;
                vt = Mo(vt), ee = Mo(ee);
              }
              vt = null;
            }
            else vt = null;
            it !== null && qv(Ve, Ne, it, vt, !1), ft !== null && Xn !== null && qv(Ve, Xn, ft, vt, !0);
          }
        }
        e: {
          if (Ne = fe ? fi(fe) : window, it = Ne.nodeName && Ne.nodeName.toLowerCase(), it === "select" || it === "input" && Ne.type === "file") var dt = My;
          else if (Mv(Ne)) if (Nv) dt = Hv;
          else {
            dt = Uv;
            var Ct = Ly;
          }
          else (it = Ne.nodeName) && it.toLowerCase() === "input" && (Ne.type === "checkbox" || Ne.type === "radio") && (dt = Ny);
          if (dt && (dt = dt(n, fe))) {
            md(Ve, dt, o, Ae);
            break e;
          }
          Ct && Ct(n, Ne, fe), n === "focusout" && (Ct = Ne._wrapperState) && Ct.controlled && Ne.type === "number" && X(Ne, "number", Ne.value);
        }
        switch (Ct = fe ? fi(fe) : window, n) {
          case "focusin":
            (Mv(Ct) || Ct.contentEditable === "true") && (mu = Ct, Sd = fe, fs = null);
            break;
          case "focusout":
            fs = Sd = mu = null;
            break;
          case "mousedown":
            bd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bd = !1, Ed(Ve, o, Ae);
            break;
          case "selectionchange":
            if (Ay) break;
          case "keydown":
          case "keyup":
            Ed(Ve, o, Ae);
        }
        var Tt;
        if (pu) e: {
          switch (n) {
            case "compositionstart":
              var kt = "onCompositionStart";
              break e;
            case "compositionend":
              kt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              kt = "onCompositionUpdate";
              break e;
          }
          kt = void 0;
        }
        else vu ? Dv(n, o) && (kt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (kt = "onCompositionStart");
        kt && (_v && o.locale !== "ko" && (vu || kt !== "onCompositionStart" ? kt === "onCompositionEnd" && vu && (Tt = se()) : (si = Ae, m = "value" in si ? si.value : si.textContent, vu = !0)), Ct = ps(fe, kt), 0 < Ct.length && (kt = new cd(kt, n, null, o, Ae), Ve.push({ event: kt, listeners: Ct }), Tt ? kt.data = Tt : (Tt = kv(o), Tt !== null && (kt.data = Tt)))), (Tt = ls ? zv(n, o) : ky(n, o)) && (fe = ps(fe, "onBeforeInput"), 0 < fe.length && (Ae = new cd("onBeforeInput", "beforeinput", null, o, Ae), Ve.push({ event: Ae, listeners: fe }), Ae.data = Tt));
      }
      gl(Ve, r);
    });
  }
  function gu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ps(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ur(n, o), d != null && u.unshift(gu(n, d, c)), d = Ur(n, r), d != null && u.push(gu(n, d, c))), n = n.return;
    }
    return u;
  }
  function Mo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function qv(n, r, o, u, c) {
    for (var d = r._reactName, S = []; o !== null && o !== u; ) {
      var M = o, U = M.alternate, fe = M.stateNode;
      if (U !== null && U === u) break;
      M.tag === 5 && fe !== null && (M = fe, c ? (U = Ur(o, d), U != null && S.unshift(gu(o, U, M))) : c || (U = Ur(o, d), U != null && S.push(gu(o, U, M)))), o = o.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var Yv = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function Gv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Yv, `
`).replace(Hy, "");
  }
  function kc(n, r, o) {
    if (r = Gv(r), Gv(n) !== r && o) throw Error(h(425));
  }
  function Lo() {
  }
  var vs = null, Sl = null;
  function zc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Mc = typeof setTimeout == "function" ? setTimeout : void 0, Td = typeof clearTimeout == "function" ? clearTimeout : void 0, Qv = typeof Promise == "function" ? Promise : void 0, Su = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qv < "u" ? function(n) {
    return Qv.resolve(null).then(n).catch(Lc);
  } : Mc;
  function Lc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function bu(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), ui(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    ui(r);
  }
  function _i(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Xv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var No = Math.random().toString(36).slice(2), Oi = "__reactFiber$" + No, hs = "__reactProps$" + No, Ji = "__reactContainer$" + No, ms = "__reactEvents$" + No, Eu = "__reactListeners$" + No, Fy = "__reactHandles$" + No;
  function bl(n) {
    var r = n[Oi];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ji] || o[Oi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Xv(n); n !== null; ) {
          if (o = n[Oi]) return o;
          n = Xv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function St(n) {
    return n = n[Oi] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(h(33));
  }
  function Fn(n) {
    return n[hs] || null;
  }
  var Zt = [], Ha = -1;
  function Fa(n) {
    return { current: n };
  }
  function Mn(n) {
    0 > Ha || (n.current = Zt[Ha], Zt[Ha] = null, Ha--);
  }
  function yt(n, r) {
    Ha++, Zt[Ha] = n.current, n.current = r;
  }
  var Lr = {}, $n = Fa(Lr), sr = Fa(!1), ia = Lr;
  function oa(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Lr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function wu() {
    Mn(sr), Mn($n);
  }
  function Kv(n, r, o) {
    if ($n.current !== Lr) throw Error(h(168));
    yt($n, r), yt(sr, o);
  }
  function ys(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(h(108, Ye(n) || "Unknown", c));
    return W({}, o, u);
  }
  function pr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Lr, ia = $n.current, yt($n, n), yt(sr, sr.current), !0;
  }
  function Nc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(h(169));
    o ? (n = ys(n, r, ia), u.__reactInternalMemoizedMergedChildContext = n, Mn(sr), Mn($n), yt($n, n)) : Mn(sr), yt(sr, o);
  }
  var Di = null, Ru = !1, eo = !1;
  function Pc(n) {
    Di === null ? Di = [n] : Di.push(n);
  }
  function Po(n) {
    Ru = !0, Pc(n);
  }
  function ki() {
    if (!eo && Di !== null) {
      eo = !0;
      var n = 0, r = sn;
      try {
        var o = Di;
        for (sn = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Di = null, Ru = !1;
      } catch (c) {
        throw Di !== null && (Di = Di.slice(n + 1)), Ln(ii, ki), c;
      } finally {
        sn = r, eo = !1;
      }
    }
    return null;
  }
  var Ao = [], jo = 0, Uo = null, to = 0, er = [], Ba = 0, wa = null, zi = 1, Mi = "";
  function El(n, r) {
    Ao[jo++] = to, Ao[jo++] = Uo, Uo = n, to = r;
  }
  function Zv(n, r, o) {
    er[Ba++] = zi, er[Ba++] = Mi, er[Ba++] = wa, wa = n;
    var u = zi;
    n = Mi;
    var c = 32 - Fr(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - Fr(r) + c;
    if (30 < d) {
      var S = c - c % 5;
      d = (u & (1 << S) - 1).toString(32), u >>= S, c -= S, zi = 1 << 32 - Fr(r) + c | o << c | u, Mi = d + n;
    } else zi = 1 << d | o << c | u, Mi = n;
  }
  function Ac(n) {
    n.return !== null && (El(n, 1), Zv(n, 1, 0));
  }
  function jc(n) {
    for (; n === Uo; ) Uo = Ao[--jo], Ao[jo] = null, to = Ao[--jo], Ao[jo] = null;
    for (; n === wa; ) wa = er[--Ba], er[Ba] = null, Mi = er[--Ba], er[Ba] = null, zi = er[--Ba], er[Ba] = null;
  }
  var la = null, ua = null, An = !1, Va = null;
  function _d(n, r) {
    var o = Ya(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Jv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, la = n, ua = _i(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, la = n, ua = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = wa !== null ? { id: zi, overflow: Mi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ya(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, la = n, ua = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Od(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Dd(n) {
    if (An) {
      var r = ua;
      if (r) {
        var o = r;
        if (!Jv(n, r)) {
          if (Od(n)) throw Error(h(418));
          r = _i(o.nextSibling);
          var u = la;
          r && Jv(n, r) ? _d(u, o) : (n.flags = n.flags & -4097 | 2, An = !1, la = n);
        }
      } else {
        if (Od(n)) throw Error(h(418));
        n.flags = n.flags & -4097 | 2, An = !1, la = n;
      }
    }
  }
  function cr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    la = n;
  }
  function Uc(n) {
    if (n !== la) return !1;
    if (!An) return cr(n), An = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !zc(n.type, n.memoizedProps)), r && (r = ua)) {
      if (Od(n)) throw gs(), Error(h(418));
      for (; r; ) _d(n, r), r = _i(r.nextSibling);
    }
    if (cr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(h(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                ua = _i(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ua = null;
      }
    } else ua = la ? _i(n.stateNode.nextSibling) : null;
    return !0;
  }
  function gs() {
    for (var n = ua; n; ) n = _i(n.nextSibling);
  }
  function Ho() {
    ua = la = null, An = !1;
  }
  function no(n) {
    Va === null ? Va = [n] : Va.push(n);
  }
  var By = C.ReactCurrentBatchConfig;
  function wl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(h(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(h(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(S) {
          var M = c.refs;
          S === null ? delete M[d] : M[d] = S;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(h(284));
      if (!o._owner) throw Error(h(290, n));
    }
    return n;
  }
  function Hc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function eh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Rl(n) {
    function r(ee, Y) {
      if (n) {
        var ae = ee.deletions;
        ae === null ? (ee.deletions = [Y], ee.flags |= 16) : ae.push(Y);
      }
    }
    function o(ee, Y) {
      if (!n) return null;
      for (; Y !== null; ) r(ee, Y), Y = Y.sibling;
      return null;
    }
    function u(ee, Y) {
      for (ee = /* @__PURE__ */ new Map(); Y !== null; ) Y.key !== null ? ee.set(Y.key, Y) : ee.set(Y.index, Y), Y = Y.sibling;
      return ee;
    }
    function c(ee, Y) {
      return ee = Yo(ee, Y), ee.index = 0, ee.sibling = null, ee;
    }
    function d(ee, Y, ae) {
      return ee.index = ae, n ? (ae = ee.alternate, ae !== null ? (ae = ae.index, ae < Y ? (ee.flags |= 2, Y) : ae) : (ee.flags |= 2, Y)) : (ee.flags |= 1048576, Y);
    }
    function S(ee) {
      return n && ee.alternate === null && (ee.flags |= 2), ee;
    }
    function M(ee, Y, ae, je) {
      return Y === null || Y.tag !== 6 ? (Y = op(ae, ee.mode, je), Y.return = ee, Y) : (Y = c(Y, ae), Y.return = ee, Y);
    }
    function U(ee, Y, ae, je) {
      var dt = ae.type;
      return dt === P ? Ae(ee, Y, ae.props.children, je, ae.key) : Y !== null && (Y.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Fe && eh(dt) === Y.type) ? (je = c(Y, ae.props), je.ref = wl(ee, Y, ae), je.return = ee, je) : (je = Gs(ae.type, ae.key, ae.props, null, ee.mode, je), je.ref = wl(ee, Y, ae), je.return = ee, je);
    }
    function fe(ee, Y, ae, je) {
      return Y === null || Y.tag !== 4 || Y.stateNode.containerInfo !== ae.containerInfo || Y.stateNode.implementation !== ae.implementation ? (Y = Sf(ae, ee.mode, je), Y.return = ee, Y) : (Y = c(Y, ae.children || []), Y.return = ee, Y);
    }
    function Ae(ee, Y, ae, je, dt) {
      return Y === null || Y.tag !== 7 ? (Y = uo(ae, ee.mode, je, dt), Y.return = ee, Y) : (Y = c(Y, ae), Y.return = ee, Y);
    }
    function Ve(ee, Y, ae) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return Y = op("" + Y, ee.mode, ae), Y.return = ee, Y;
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case E:
            return ae = Gs(Y.type, Y.key, Y.props, null, ee.mode, ae), ae.ref = wl(ee, null, Y), ae.return = ee, ae;
          case D:
            return Y = Sf(Y, ee.mode, ae), Y.return = ee, Y;
          case Fe:
            var je = Y._init;
            return Ve(ee, je(Y._payload), ae);
        }
        if (me(Y) || $e(Y)) return Y = uo(Y, ee.mode, ae, null), Y.return = ee, Y;
        Hc(ee, Y);
      }
      return null;
    }
    function Ne(ee, Y, ae, je) {
      var dt = Y !== null ? Y.key : null;
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return dt !== null ? null : M(ee, Y, "" + ae, je);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case E:
            return ae.key === dt ? U(ee, Y, ae, je) : null;
          case D:
            return ae.key === dt ? fe(ee, Y, ae, je) : null;
          case Fe:
            return dt = ae._init, Ne(
              ee,
              Y,
              dt(ae._payload),
              je
            );
        }
        if (me(ae) || $e(ae)) return dt !== null ? null : Ae(ee, Y, ae, je, null);
        Hc(ee, ae);
      }
      return null;
    }
    function it(ee, Y, ae, je, dt) {
      if (typeof je == "string" && je !== "" || typeof je == "number") return ee = ee.get(ae) || null, M(Y, ee, "" + je, dt);
      if (typeof je == "object" && je !== null) {
        switch (je.$$typeof) {
          case E:
            return ee = ee.get(je.key === null ? ae : je.key) || null, U(Y, ee, je, dt);
          case D:
            return ee = ee.get(je.key === null ? ae : je.key) || null, fe(Y, ee, je, dt);
          case Fe:
            var Ct = je._init;
            return it(ee, Y, ae, Ct(je._payload), dt);
        }
        if (me(je) || $e(je)) return ee = ee.get(ae) || null, Ae(Y, ee, je, dt, null);
        Hc(Y, je);
      }
      return null;
    }
    function ft(ee, Y, ae, je) {
      for (var dt = null, Ct = null, Tt = Y, kt = Y = 0, mr = null; Tt !== null && kt < ae.length; kt++) {
        Tt.index > kt ? (mr = Tt, Tt = null) : mr = Tt.sibling;
        var dn = Ne(ee, Tt, ae[kt], je);
        if (dn === null) {
          Tt === null && (Tt = mr);
          break;
        }
        n && Tt && dn.alternate === null && r(ee, Tt), Y = d(dn, Y, kt), Ct === null ? dt = dn : Ct.sibling = dn, Ct = dn, Tt = mr;
      }
      if (kt === ae.length) return o(ee, Tt), An && El(ee, kt), dt;
      if (Tt === null) {
        for (; kt < ae.length; kt++) Tt = Ve(ee, ae[kt], je), Tt !== null && (Y = d(Tt, Y, kt), Ct === null ? dt = Tt : Ct.sibling = Tt, Ct = Tt);
        return An && El(ee, kt), dt;
      }
      for (Tt = u(ee, Tt); kt < ae.length; kt++) mr = it(Tt, ee, kt, ae[kt], je), mr !== null && (n && mr.alternate !== null && Tt.delete(mr.key === null ? kt : mr.key), Y = d(mr, Y, kt), Ct === null ? dt = mr : Ct.sibling = mr, Ct = mr);
      return n && Tt.forEach(function(Xo) {
        return r(ee, Xo);
      }), An && El(ee, kt), dt;
    }
    function vt(ee, Y, ae, je) {
      var dt = $e(ae);
      if (typeof dt != "function") throw Error(h(150));
      if (ae = dt.call(ae), ae == null) throw Error(h(151));
      for (var Ct = dt = null, Tt = Y, kt = Y = 0, mr = null, dn = ae.next(); Tt !== null && !dn.done; kt++, dn = ae.next()) {
        Tt.index > kt ? (mr = Tt, Tt = null) : mr = Tt.sibling;
        var Xo = Ne(ee, Tt, dn.value, je);
        if (Xo === null) {
          Tt === null && (Tt = mr);
          break;
        }
        n && Tt && Xo.alternate === null && r(ee, Tt), Y = d(Xo, Y, kt), Ct === null ? dt = Xo : Ct.sibling = Xo, Ct = Xo, Tt = mr;
      }
      if (dn.done) return o(
        ee,
        Tt
      ), An && El(ee, kt), dt;
      if (Tt === null) {
        for (; !dn.done; kt++, dn = ae.next()) dn = Ve(ee, dn.value, je), dn !== null && (Y = d(dn, Y, kt), Ct === null ? dt = dn : Ct.sibling = dn, Ct = dn);
        return An && El(ee, kt), dt;
      }
      for (Tt = u(ee, Tt); !dn.done; kt++, dn = ae.next()) dn = it(Tt, ee, kt, dn.value, je), dn !== null && (n && dn.alternate !== null && Tt.delete(dn.key === null ? kt : dn.key), Y = d(dn, Y, kt), Ct === null ? dt = dn : Ct.sibling = dn, Ct = dn);
      return n && Tt.forEach(function(Ah) {
        return r(ee, Ah);
      }), An && El(ee, kt), dt;
    }
    function Xn(ee, Y, ae, je) {
      if (typeof ae == "object" && ae !== null && ae.type === P && ae.key === null && (ae = ae.props.children), typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case E:
            e: {
              for (var dt = ae.key, Ct = Y; Ct !== null; ) {
                if (Ct.key === dt) {
                  if (dt = ae.type, dt === P) {
                    if (Ct.tag === 7) {
                      o(ee, Ct.sibling), Y = c(Ct, ae.props.children), Y.return = ee, ee = Y;
                      break e;
                    }
                  } else if (Ct.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Fe && eh(dt) === Ct.type) {
                    o(ee, Ct.sibling), Y = c(Ct, ae.props), Y.ref = wl(ee, Ct, ae), Y.return = ee, ee = Y;
                    break e;
                  }
                  o(ee, Ct);
                  break;
                } else r(ee, Ct);
                Ct = Ct.sibling;
              }
              ae.type === P ? (Y = uo(ae.props.children, ee.mode, je, ae.key), Y.return = ee, ee = Y) : (je = Gs(ae.type, ae.key, ae.props, null, ee.mode, je), je.ref = wl(ee, Y, ae), je.return = ee, ee = je);
            }
            return S(ee);
          case D:
            e: {
              for (Ct = ae.key; Y !== null; ) {
                if (Y.key === Ct) if (Y.tag === 4 && Y.stateNode.containerInfo === ae.containerInfo && Y.stateNode.implementation === ae.implementation) {
                  o(ee, Y.sibling), Y = c(Y, ae.children || []), Y.return = ee, ee = Y;
                  break e;
                } else {
                  o(ee, Y);
                  break;
                }
                else r(ee, Y);
                Y = Y.sibling;
              }
              Y = Sf(ae, ee.mode, je), Y.return = ee, ee = Y;
            }
            return S(ee);
          case Fe:
            return Ct = ae._init, Xn(ee, Y, Ct(ae._payload), je);
        }
        if (me(ae)) return ft(ee, Y, ae, je);
        if ($e(ae)) return vt(ee, Y, ae, je);
        Hc(ee, ae);
      }
      return typeof ae == "string" && ae !== "" || typeof ae == "number" ? (ae = "" + ae, Y !== null && Y.tag === 6 ? (o(ee, Y.sibling), Y = c(Y, ae), Y.return = ee, ee = Y) : (o(ee, Y), Y = op(ae, ee.mode, je), Y.return = ee, ee = Y), S(ee)) : o(ee, Y);
    }
    return Xn;
  }
  var qn = Rl(!0), tt = Rl(!1), Ra = Fa(null), sa = null, Cu = null, kd = null;
  function zd() {
    kd = Cu = sa = null;
  }
  function Md(n) {
    var r = Ra.current;
    Mn(Ra), n._currentValue = r;
  }
  function Ld(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function Bn(n, r) {
    sa = n, kd = Cu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (nr = !0), n.firstContext = null);
  }
  function Ia(n) {
    var r = n._currentValue;
    if (kd !== n) if (n = { context: n, memoizedValue: r, next: null }, Cu === null) {
      if (sa === null) throw Error(h(308));
      Cu = n, sa.dependencies = { lanes: 0, firstContext: n };
    } else Cu = Cu.next = n;
    return r;
  }
  var Cl = null;
  function Nd(n) {
    Cl === null ? Cl = [n] : Cl.push(n);
  }
  function Pd(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Nd(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Ca(n, u);
  }
  function Ca(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var xa = !1;
  function Ad(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function th(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ro(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fo(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Jt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ca(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Nd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ca(n, o);
  }
  function Fc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Gi(n, o);
    }
  }
  function nh(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, d = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var S = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          d === null ? c = d = S : d = d.next = S, o = o.next;
        } while (o !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Ss(n, r, o, u) {
    var c = n.updateQueue;
    xa = !1;
    var d = c.firstBaseUpdate, S = c.lastBaseUpdate, M = c.shared.pending;
    if (M !== null) {
      c.shared.pending = null;
      var U = M, fe = U.next;
      U.next = null, S === null ? d = fe : S.next = fe, S = U;
      var Ae = n.alternate;
      Ae !== null && (Ae = Ae.updateQueue, M = Ae.lastBaseUpdate, M !== S && (M === null ? Ae.firstBaseUpdate = fe : M.next = fe, Ae.lastBaseUpdate = U));
    }
    if (d !== null) {
      var Ve = c.baseState;
      S = 0, Ae = fe = U = null, M = d;
      do {
        var Ne = M.lane, it = M.eventTime;
        if ((u & Ne) === Ne) {
          Ae !== null && (Ae = Ae.next = {
            eventTime: it,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var ft = n, vt = M;
            switch (Ne = r, it = o, vt.tag) {
              case 1:
                if (ft = vt.payload, typeof ft == "function") {
                  Ve = ft.call(it, Ve, Ne);
                  break e;
                }
                Ve = ft;
                break e;
              case 3:
                ft.flags = ft.flags & -65537 | 128;
              case 0:
                if (ft = vt.payload, Ne = typeof ft == "function" ? ft.call(it, Ve, Ne) : ft, Ne == null) break e;
                Ve = W({}, Ve, Ne);
                break e;
              case 2:
                xa = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, Ne = c.effects, Ne === null ? c.effects = [M] : Ne.push(M));
        } else it = { eventTime: it, lane: Ne, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, Ae === null ? (fe = Ae = it, U = Ve) : Ae = Ae.next = it, S |= Ne;
        if (M = M.next, M === null) {
          if (M = c.shared.pending, M === null) break;
          Ne = M, M = Ne.next, Ne.next = null, c.lastBaseUpdate = Ne, c.shared.pending = null;
        }
      } while (!0);
      if (Ae === null && (U = Ve), c.baseState = U, c.firstBaseUpdate = fe, c.lastBaseUpdate = Ae, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      ji |= S, n.lanes = S, n.memoizedState = Ve;
    }
  }
  function jd(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(h(191, c));
        c.call(u);
      }
    }
  }
  var bs = {}, Li = Fa(bs), Es = Fa(bs), ws = Fa(bs);
  function xl(n) {
    if (n === bs) throw Error(h(174));
    return n;
  }
  function Ud(n, r) {
    switch (yt(ws, r), yt(Es, n), yt(Li, bs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ln(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ln(r, n);
    }
    Mn(Li), yt(Li, r);
  }
  function Tl() {
    Mn(Li), Mn(Es), Mn(ws);
  }
  function rh(n) {
    xl(ws.current);
    var r = xl(Li.current), o = ln(r, n.type);
    r !== o && (yt(Es, n), yt(Li, o));
  }
  function Bc(n) {
    Es.current === n && (Mn(Li), Mn(Es));
  }
  var Vn = Fa(0);
  function Vc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Rs = [];
  function bt() {
    for (var n = 0; n < Rs.length; n++) Rs[n]._workInProgressVersionPrimary = null;
    Rs.length = 0;
  }
  var qt = C.ReactCurrentDispatcher, cn = C.ReactCurrentBatchConfig, wn = 0, fn = null, tr = null, vr = null, Ic = !1, Cs = !1, _l = 0, Le = 0;
  function on() {
    throw Error(h(321));
  }
  function Ot(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ci(n[o], r[o])) return !1;
    return !0;
  }
  function Bo(n, r, o, u, c, d) {
    if (wn = d, fn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, qt.current = n === null || n.memoizedState === null ? af : ks, n = o(u, c), Cs) {
      d = 0;
      do {
        if (Cs = !1, _l = 0, 25 <= d) throw Error(h(301));
        d += 1, vr = tr = null, r.updateQueue = null, qt.current = of, n = o(u, c);
      } while (Cs);
    }
    if (qt.current = Ml, r = tr !== null && tr.next !== null, wn = 0, vr = tr = fn = null, Ic = !1, r) throw Error(h(300));
    return n;
  }
  function di() {
    var n = _l !== 0;
    return _l = 0, n;
  }
  function Nr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return vr === null ? fn.memoizedState = vr = n : vr = vr.next = n, vr;
  }
  function Yn() {
    if (tr === null) {
      var n = fn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = tr.next;
    var r = vr === null ? fn.memoizedState : vr.next;
    if (r !== null) vr = r, tr = n;
    else {
      if (n === null) throw Error(h(310));
      tr = n, n = { memoizedState: tr.memoizedState, baseState: tr.baseState, baseQueue: tr.baseQueue, queue: tr.queue, next: null }, vr === null ? fn.memoizedState = vr = n : vr = vr.next = n;
    }
    return vr;
  }
  function ao(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Vo(n) {
    var r = Yn(), o = r.queue;
    if (o === null) throw Error(h(311));
    o.lastRenderedReducer = n;
    var u = tr, c = u.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = d.next, d.next = S;
      }
      u.baseQueue = c = d, o.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var M = S = null, U = null, fe = d;
      do {
        var Ae = fe.lane;
        if ((wn & Ae) === Ae) U !== null && (U = U.next = { lane: 0, action: fe.action, hasEagerState: fe.hasEagerState, eagerState: fe.eagerState, next: null }), u = fe.hasEagerState ? fe.eagerState : n(u, fe.action);
        else {
          var Ve = {
            lane: Ae,
            action: fe.action,
            hasEagerState: fe.hasEagerState,
            eagerState: fe.eagerState,
            next: null
          };
          U === null ? (M = U = Ve, S = u) : U = U.next = Ve, fn.lanes |= Ae, ji |= Ae;
        }
        fe = fe.next;
      } while (fe !== null && fe !== d);
      U === null ? S = u : U.next = M, ci(u, r.memoizedState) || (nr = !0), r.memoizedState = u, r.baseState = S, r.baseQueue = U, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, fn.lanes |= d, ji |= d, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ol(n) {
    var r = Yn(), o = r.queue;
    if (o === null) throw Error(h(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, d = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var S = c = c.next;
      do
        d = n(d, S.action), S = S.next;
      while (S !== c);
      ci(d, r.memoizedState) || (nr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), o.lastRenderedState = d;
    }
    return [d, u];
  }
  function $c() {
  }
  function Wc(n, r) {
    var o = fn, u = Yn(), c = r(), d = !ci(u.memoizedState, c);
    if (d && (u.memoizedState = c, nr = !0), u = u.queue, xs(Gc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || vr !== null && vr.memoizedState.tag & 1) {
      if (o.flags |= 2048, Dl(9, Yc.bind(null, o, u, c, r), void 0, null), fr === null) throw Error(h(349));
      wn & 30 || qc(o, r, c);
    }
    return c;
  }
  function qc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = fn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, fn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Yc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Qc(r) && Xc(n);
  }
  function Gc(n, r, o) {
    return o(function() {
      Qc(r) && Xc(n);
    });
  }
  function Qc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ci(n, o);
    } catch {
      return !0;
    }
  }
  function Xc(n) {
    var r = Ca(n, 1);
    r !== null && qr(r, n, 1, -1);
  }
  function Kc(n) {
    var r = Nr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ao, lastRenderedState: n }, r.queue = n, n = n.dispatch = zl.bind(null, fn, n), [r.memoizedState, n];
  }
  function Dl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = fn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, fn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Zc() {
    return Yn().memoizedState;
  }
  function xu(n, r, o, u) {
    var c = Nr();
    fn.flags |= n, c.memoizedState = Dl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Tu(n, r, o, u) {
    var c = Yn();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (tr !== null) {
      var S = tr.memoizedState;
      if (d = S.destroy, u !== null && Ot(u, S.deps)) {
        c.memoizedState = Dl(r, o, d, u);
        return;
      }
    }
    fn.flags |= n, c.memoizedState = Dl(1 | r, o, d, u);
  }
  function Jc(n, r) {
    return xu(8390656, 8, n, r);
  }
  function xs(n, r) {
    return Tu(2048, 8, n, r);
  }
  function ef(n, r) {
    return Tu(4, 2, n, r);
  }
  function Ts(n, r) {
    return Tu(4, 4, n, r);
  }
  function kl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function tf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Tu(4, 4, kl.bind(null, r, n), o);
  }
  function _s() {
  }
  function nf(n, r) {
    var o = Yn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Ot(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function rf(n, r) {
    var o = Yn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Ot(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Hd(n, r, o) {
    return wn & 21 ? (ci(o, r) || (o = iu(), fn.lanes |= o, ji |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, nr = !0), n.memoizedState = o);
  }
  function Os(n, r) {
    var o = sn;
    sn = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = cn.transition;
    cn.transition = {};
    try {
      n(!1), r();
    } finally {
      sn = o, cn.transition = u;
    }
  }
  function Fd() {
    return Yn().memoizedState;
  }
  function Ds(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, ca(n)) ah(r, o);
    else if (o = Pd(n, r, o, u), o !== null) {
      var c = ir();
      qr(o, n, u, c), On(o, r, u);
    }
  }
  function zl(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (ca(n)) ah(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var S = r.lastRenderedState, M = d(S, o);
        if (c.hasEagerState = !0, c.eagerState = M, ci(M, S)) {
          var U = r.interleaved;
          U === null ? (c.next = c, Nd(r)) : (c.next = U.next, U.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = Pd(n, r, c, u), o !== null && (c = ir(), qr(o, n, u, c), On(o, r, u));
    }
  }
  function ca(n) {
    var r = n.alternate;
    return n === fn || r !== null && r === fn;
  }
  function ah(n, r) {
    Cs = Ic = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function On(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Gi(n, o);
    }
  }
  var Ml = { readContext: Ia, useCallback: on, useContext: on, useEffect: on, useImperativeHandle: on, useInsertionEffect: on, useLayoutEffect: on, useMemo: on, useReducer: on, useRef: on, useState: on, useDebugValue: on, useDeferredValue: on, useTransition: on, useMutableSource: on, useSyncExternalStore: on, useId: on, unstable_isNewReconciler: !1 }, af = { readContext: Ia, useCallback: function(n, r) {
    return Nr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ia, useEffect: Jc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, xu(
      4194308,
      4,
      kl.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return xu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return xu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Nr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Nr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Ds.bind(null, fn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Nr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Kc, useDebugValue: _s, useDeferredValue: function(n) {
    return Nr().memoizedState = n;
  }, useTransition: function() {
    var n = Kc(!1), r = n[0];
    return n = Os.bind(null, n[1]), Nr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = fn, c = Nr();
    if (An) {
      if (o === void 0) throw Error(h(407));
      o = o();
    } else {
      if (o = r(), fr === null) throw Error(h(349));
      wn & 30 || qc(u, r, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: r };
    return c.queue = d, Jc(Gc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Dl(9, Yc.bind(null, u, d, o, r), void 0, null), o;
  }, useId: function() {
    var n = Nr(), r = fr.identifierPrefix;
    if (An) {
      var o = Mi, u = zi;
      o = (u & ~(1 << 32 - Fr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = _l++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Le++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ks = {
    readContext: Ia,
    useCallback: nf,
    useContext: Ia,
    useEffect: xs,
    useImperativeHandle: tf,
    useInsertionEffect: ef,
    useLayoutEffect: Ts,
    useMemo: rf,
    useReducer: Vo,
    useRef: Zc,
    useState: function() {
      return Vo(ao);
    },
    useDebugValue: _s,
    useDeferredValue: function(n) {
      var r = Yn();
      return Hd(r, tr.memoizedState, n);
    },
    useTransition: function() {
      var n = Vo(ao)[0], r = Yn().memoizedState;
      return [n, r];
    },
    useMutableSource: $c,
    useSyncExternalStore: Wc,
    useId: Fd,
    unstable_isNewReconciler: !1
  }, of = { readContext: Ia, useCallback: nf, useContext: Ia, useEffect: xs, useImperativeHandle: tf, useInsertionEffect: ef, useLayoutEffect: Ts, useMemo: rf, useReducer: Ol, useRef: Zc, useState: function() {
    return Ol(ao);
  }, useDebugValue: _s, useDeferredValue: function(n) {
    var r = Yn();
    return tr === null ? r.memoizedState = n : Hd(r, tr.memoizedState, n);
  }, useTransition: function() {
    var n = Ol(ao)[0], r = Yn().memoizedState;
    return [n, r];
  }, useMutableSource: $c, useSyncExternalStore: Wc, useId: Fd, unstable_isNewReconciler: !1 };
  function pi(n, r) {
    if (n && n.defaultProps) {
      r = W({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Bd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : W({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var lf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ut(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = ir(), c = Ui(n), d = ro(u, c);
    d.payload = r, o != null && (d.callback = o), r = Fo(n, d, c), r !== null && (qr(r, n, c, u), Fc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = ir(), c = Ui(n), d = ro(u, c);
    d.tag = 1, d.payload = r, o != null && (d.callback = o), r = Fo(n, d, c), r !== null && (qr(r, n, c, u), Fc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = ir(), u = Ui(n), c = ro(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Fo(n, c, u), r !== null && (qr(r, n, u, o), Fc(r, n, u));
  } };
  function ih(n, r, o, u, c, d, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, S) : r.prototype && r.prototype.isPureReactComponent ? !ss(o, u) || !ss(c, d) : !0;
  }
  function uf(n, r, o) {
    var u = !1, c = Lr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ia(d) : (c = Jn(r) ? ia : $n.current, u = r.contextTypes, d = (u = u != null) ? oa(n, c) : Lr), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = lf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function oh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && lf.enqueueReplaceState(r, r.state, null);
  }
  function zs(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Ad(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ia(d) : (d = Jn(r) ? ia : $n.current, c.context = oa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Bd(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && lf.enqueueReplaceState(c, c.state, null), Ss(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ll(n, r) {
    try {
      var o = "", u = r;
      do
        o += Ge(u), u = u.return;
      while (u);
      var c = o;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Vd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Id(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var sf = typeof WeakMap == "function" ? WeakMap : Map;
  function lh(n, r, o) {
    o = ro(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Mu || (Mu = !0, Al = u), Id(n, r);
    }, o;
  }
  function $d(n, r, o) {
    o = ro(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Id(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
      Id(n, r), typeof u != "function" && (Wo === null ? Wo = /* @__PURE__ */ new Set([this]) : Wo.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), o;
  }
  function Wd(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new sf();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = Gy.bind(null, n, r, o), r.then(n, n));
  }
  function uh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Io(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = ro(-1, 1), r.tag = 2, Fo(o, r, 1))), o.lanes |= 1), n);
  }
  var Ms = C.ReactCurrentOwner, nr = !1;
  function wr(n, r, o, u) {
    r.child = n === null ? tt(r, null, o, u) : qn(r, n.child, o, u);
  }
  function fa(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return Bn(r, c), u = Bo(n, r, o, u, d, c), o = di(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wa(n, r, c)) : (An && o && Ac(r), r.flags |= 1, wr(n, r, u, c), r.child);
  }
  function Nl(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !ip(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ft(n, r, d, u, c)) : (n = Gs(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var S = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ss, o(S, u) && n.ref === r.ref) return Wa(n, r, c);
    }
    return r.flags |= 1, n = Yo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ft(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ss(d, u) && n.ref === r.ref) if (nr = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (nr = !0);
      else return r.lanes = n.lanes, Wa(n, r, c);
    }
    return sh(n, r, o, u, c);
  }
  function Ls(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, yt(Du, Ta), Ta |= o;
    else {
      if (!(o & 1073741824)) return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, yt(Du, Ta), Ta |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, yt(Du, Ta), Ta |= u;
    }
    else d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, yt(Du, Ta), Ta |= u;
    return wr(n, r, c, o), r.child;
  }
  function qd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function sh(n, r, o, u, c) {
    var d = Jn(o) ? ia : $n.current;
    return d = oa(r, d), Bn(r, c), o = Bo(n, r, o, u, d, c), u = di(), n !== null && !nr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Wa(n, r, c)) : (An && u && Ac(r), r.flags |= 1, wr(n, r, o, c), r.child);
  }
  function ch(n, r, o, u, c) {
    if (Jn(o)) {
      var d = !0;
      pr(r);
    } else d = !1;
    if (Bn(r, c), r.stateNode === null) $a(n, r), uf(r, o, u), zs(r, o, u, c), u = !0;
    else if (n === null) {
      var S = r.stateNode, M = r.memoizedProps;
      S.props = M;
      var U = S.context, fe = o.contextType;
      typeof fe == "object" && fe !== null ? fe = Ia(fe) : (fe = Jn(o) ? ia : $n.current, fe = oa(r, fe));
      var Ae = o.getDerivedStateFromProps, Ve = typeof Ae == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      Ve || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (M !== u || U !== fe) && oh(r, S, u, fe), xa = !1;
      var Ne = r.memoizedState;
      S.state = Ne, Ss(r, u, S, c), U = r.memoizedState, M !== u || Ne !== U || sr.current || xa ? (typeof Ae == "function" && (Bd(r, o, Ae, u), U = r.memoizedState), (M = xa || ih(r, o, M, u, Ne, U, fe)) ? (Ve || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = U), S.props = u, S.state = U, S.context = fe, u = M) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      S = r.stateNode, th(n, r), M = r.memoizedProps, fe = r.type === r.elementType ? M : pi(r.type, M), S.props = fe, Ve = r.pendingProps, Ne = S.context, U = o.contextType, typeof U == "object" && U !== null ? U = Ia(U) : (U = Jn(o) ? ia : $n.current, U = oa(r, U));
      var it = o.getDerivedStateFromProps;
      (Ae = typeof it == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (M !== Ve || Ne !== U) && oh(r, S, u, U), xa = !1, Ne = r.memoizedState, S.state = Ne, Ss(r, u, S, c);
      var ft = r.memoizedState;
      M !== Ve || Ne !== ft || sr.current || xa ? (typeof it == "function" && (Bd(r, o, it, u), ft = r.memoizedState), (fe = xa || ih(r, o, fe, u, Ne, ft, U) || !1) ? (Ae || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, ft, U), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, ft, U)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || M === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = ft), S.props = u, S.state = ft, S.context = U, u = fe) : (typeof S.componentDidUpdate != "function" || M === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Ne === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ns(n, r, o, u, d, c);
  }
  function Ns(n, r, o, u, c, d) {
    qd(n, r);
    var S = (r.flags & 128) !== 0;
    if (!u && !S) return c && Nc(r, o, !1), Wa(n, r, d);
    u = r.stateNode, Ms.current = r;
    var M = S && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && S ? (r.child = qn(r, n.child, null, d), r.child = qn(r, null, M, d)) : wr(n, r, M, d), r.memoizedState = u.state, c && Nc(r, o, !0), r.child;
  }
  function _u(n) {
    var r = n.stateNode;
    r.pendingContext ? Kv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Kv(n, r.context, !1), Ud(n, r.containerInfo);
  }
  function fh(n, r, o, u, c) {
    return Ho(), no(c), r.flags |= 256, wr(n, r, o, u), r.child;
  }
  var cf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ff(n, r, o) {
    var u = r.pendingProps, c = Vn.current, d = !1, S = (r.flags & 128) !== 0, M;
    if ((M = S) || (M = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), M ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), yt(Vn, c & 1), n === null)
      return Dd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, S = { mode: "hidden", children: S }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = S) : d = Go(S, u, 0, null), n = uo(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Yd(o), r.memoizedState = cf, n) : Gd(r, S));
    if (c = n.memoizedState, c !== null && (M = c.dehydrated, M !== null)) return dh(n, r, S, u, M, c, o);
    if (d) {
      d = u.fallback, S = r.mode, c = n.child, M = c.sibling;
      var U = { mode: "hidden", children: u.children };
      return !(S & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = U, r.deletions = null) : (u = Yo(c, U), u.subtreeFlags = c.subtreeFlags & 14680064), M !== null ? d = Yo(M, d) : (d = uo(d, S, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, S = n.child.memoizedState, S = S === null ? Yd(o) : { baseLanes: S.baseLanes | o, cachePool: null, transitions: S.transitions }, d.memoizedState = S, d.childLanes = n.childLanes & ~o, r.memoizedState = cf, u;
    }
    return d = n.child, n = d.sibling, u = Yo(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Gd(n, r) {
    return r = Go({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ps(n, r, o, u) {
    return u !== null && no(u), qn(r, n.child, null, o), n = Gd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function dh(n, r, o, u, c, d, S) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Vd(Error(h(422))), Ps(n, r, S, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Go({ mode: "visible", children: u.children }, c, 0, null), d = uo(d, c, S, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && qn(r, n.child, null, S), r.child.memoizedState = Yd(S), r.memoizedState = cf, d);
    if (!(r.mode & 1)) return Ps(n, r, S, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var M = u.dgst;
      return u = M, d = Error(h(419)), u = Vd(d, u, void 0), Ps(n, r, S, u);
    }
    if (M = (S & n.childLanes) !== 0, nr || M) {
      if (u = fr, u !== null) {
        switch (S & -S) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | S) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ca(n, c), qr(u, n, c, -1));
      }
      return ap(), u = Vd(Error(h(421))), Ps(n, r, S, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Qy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ua = _i(c.nextSibling), la = r, An = !0, Va = null, n !== null && (er[Ba++] = zi, er[Ba++] = Mi, er[Ba++] = wa, zi = n.id, Mi = n.overflow, wa = r), r = Gd(r, u.children), r.flags |= 4096, r);
  }
  function Qd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Ld(n.return, r, o);
  }
  function Ir(n, r, o, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = o, d.tailMode = c);
  }
  function Ni(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (wr(n, r, u.children, o), u = Vn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Qd(n, o, r);
        else if (n.tag === 19) Qd(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (yt(Vn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Vc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Ir(r, !1, c, o, d);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Vc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        Ir(r, !0, o, null, d);
        break;
      case "together":
        Ir(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function $a(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Wa(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), ji |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(h(153));
    if (r.child !== null) {
      for (n = r.child, o = Yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function As(n, r, o) {
    switch (r.tag) {
      case 3:
        _u(r), Ho();
        break;
      case 5:
        rh(r);
        break;
      case 1:
        Jn(r.type) && pr(r);
        break;
      case 4:
        Ud(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        yt(Ra, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (yt(Vn, Vn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? ff(n, r, o) : (yt(Vn, Vn.current & 1), n = Wa(n, r, o), n !== null ? n.sibling : null);
        yt(Vn, Vn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Ni(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), yt(Vn, Vn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ls(n, r, o);
    }
    return Wa(n, r, o);
  }
  var qa, rr, ph, vh;
  qa = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, rr = function() {
  }, ph = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, xl(Li.current);
      var d = null;
      switch (o) {
        case "input":
          c = zt(n, c), u = zt(n, u), d = [];
          break;
        case "select":
          c = W({}, c, { value: void 0 }), u = W({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = et(n, c), u = et(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Lo);
      }
      Yt(o, u);
      var S;
      o = null;
      for (fe in c) if (!u.hasOwnProperty(fe) && c.hasOwnProperty(fe) && c[fe] != null) if (fe === "style") {
        var M = c[fe];
        for (S in M) M.hasOwnProperty(S) && (o || (o = {}), o[S] = "");
      } else fe !== "dangerouslySetInnerHTML" && fe !== "children" && fe !== "suppressContentEditableWarning" && fe !== "suppressHydrationWarning" && fe !== "autoFocus" && ($.hasOwnProperty(fe) ? d || (d = []) : (d = d || []).push(fe, null));
      for (fe in u) {
        var U = u[fe];
        if (M = c != null ? c[fe] : void 0, u.hasOwnProperty(fe) && U !== M && (U != null || M != null)) if (fe === "style") if (M) {
          for (S in M) !M.hasOwnProperty(S) || U && U.hasOwnProperty(S) || (o || (o = {}), o[S] = "");
          for (S in U) U.hasOwnProperty(S) && M[S] !== U[S] && (o || (o = {}), o[S] = U[S]);
        } else o || (d || (d = []), d.push(
          fe,
          o
        )), o = U;
        else fe === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, M = M ? M.__html : void 0, U != null && M !== U && (d = d || []).push(fe, U)) : fe === "children" ? typeof U != "string" && typeof U != "number" || (d = d || []).push(fe, "" + U) : fe !== "suppressContentEditableWarning" && fe !== "suppressHydrationWarning" && ($.hasOwnProperty(fe) ? (U != null && fe === "onScroll" && yn("scroll", n), d || M === U || (d = [])) : (d = d || []).push(fe, U));
      }
      o && (d = d || []).push("style", o);
      var fe = d;
      (r.updateQueue = fe) && (r.flags |= 4);
    }
  }, vh = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function js(n, r) {
    if (!An) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function hr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function hh(n, r, o) {
    var u = r.pendingProps;
    switch (jc(r), r.tag) {
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
        return hr(r), null;
      case 1:
        return Jn(r.type) && wu(), hr(r), null;
      case 3:
        return u = r.stateNode, Tl(), Mn(sr), Mn($n), bt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Va !== null && (jl(Va), Va = null))), rr(n, r), hr(r), null;
      case 5:
        Bc(r);
        var c = xl(ws.current);
        if (o = r.type, n !== null && r.stateNode != null) ph(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(h(166));
            return hr(r), null;
          }
          if (n = xl(Li.current), Uc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[Oi] = r, u[hs] = d, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                yn("cancel", u), yn("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                yn("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ds.length; c++) yn(ds[c], u);
                break;
              case "source":
                yn("error", u);
                break;
              case "img":
              case "image":
              case "link":
                yn(
                  "error",
                  u
                ), yn("load", u);
                break;
              case "details":
                yn("toggle", u);
                break;
              case "input":
                $t(u, d), yn("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, yn("invalid", u);
                break;
              case "textarea":
                Qe(u, d), yn("invalid", u);
            }
            Yt(o, d), c = null;
            for (var S in d) if (d.hasOwnProperty(S)) {
              var M = d[S];
              S === "children" ? typeof M == "string" ? u.textContent !== M && (d.suppressHydrationWarning !== !0 && kc(u.textContent, M, n), c = ["children", M]) : typeof M == "number" && u.textContent !== "" + M && (d.suppressHydrationWarning !== !0 && kc(
                u.textContent,
                M,
                n
              ), c = ["children", "" + M]) : $.hasOwnProperty(S) && M != null && S === "onScroll" && yn("scroll", u);
            }
            switch (o) {
              case "input":
                rt(u), F(u, d, !0);
                break;
              case "textarea":
                rt(u), Rt(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Lo);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Bt(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = S.createElement(o, { is: u.is }) : (n = S.createElement(o), o === "select" && (S = n, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : n = S.createElementNS(n, o), n[Oi] = r, n[hs] = u, qa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = Dn(o, u), o) {
                case "dialog":
                  yn("cancel", n), yn("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  yn("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ds.length; c++) yn(ds[c], n);
                  c = u;
                  break;
                case "source":
                  yn("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  yn(
                    "error",
                    n
                  ), yn("load", n), c = u;
                  break;
                case "details":
                  yn("toggle", n), c = u;
                  break;
                case "input":
                  $t(n, u), c = zt(n, u), yn("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = W({}, u, { value: void 0 }), yn("invalid", n);
                  break;
                case "textarea":
                  Qe(n, u), c = et(n, u), yn("invalid", n);
                  break;
                default:
                  c = u;
              }
              Yt(o, c), M = c;
              for (d in M) if (M.hasOwnProperty(d)) {
                var U = M[d];
                d === "style" ? ct(n, U) : d === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Z(n, U)) : d === "children" ? typeof U == "string" ? (o !== "textarea" || U !== "") && j(n, U) : typeof U == "number" && j(n, "" + U) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && ($.hasOwnProperty(d) ? U != null && d === "onScroll" && yn("scroll", n) : U != null && x(n, d, U, S));
              }
              switch (o) {
                case "input":
                  rt(n), F(n, u, !1);
                  break;
                case "textarea":
                  rt(n), Rt(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + he(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Je(n, !!u.multiple, d, !1) : u.defaultValue != null && Je(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Lo);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return hr(r), null;
      case 6:
        if (n && r.stateNode != null) vh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(h(166));
          if (o = xl(ws.current), xl(Li.current), Uc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Oi] = r, (d = u.nodeValue !== o) && (n = la, n !== null)) switch (n.tag) {
              case 3:
                kc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && kc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Oi] = r, r.stateNode = u;
        }
        return hr(r), null;
      case 13:
        if (Mn(Vn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (An && ua !== null && r.mode & 1 && !(r.flags & 128)) gs(), Ho(), r.flags |= 98560, d = !1;
          else if (d = Uc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(h(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(h(317));
              d[Oi] = r;
            } else Ho(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            hr(r), d = !1;
          } else Va !== null && (jl(Va), Va = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Vn.current & 1 ? Qn === 0 && (Qn = 3) : ap())), r.updateQueue !== null && (r.flags |= 4), hr(r), null);
      case 4:
        return Tl(), rr(n, r), n === null && yu(r.stateNode.containerInfo), hr(r), null;
      case 10:
        return Md(r.type._context), hr(r), null;
      case 17:
        return Jn(r.type) && wu(), hr(r), null;
      case 19:
        if (Mn(Vn), d = r.memoizedState, d === null) return hr(r), null;
        if (u = (r.flags & 128) !== 0, S = d.rendering, S === null) if (u) js(d, !1);
        else {
          if (Qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (S = Vc(n), S !== null) {
              for (r.flags |= 128, js(d, !1), u = S.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, S = d.alternate, S === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = S.childLanes, d.lanes = S.lanes, d.child = S.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = S.memoizedProps, d.memoizedState = S.memoizedState, d.updateQueue = S.updateQueue, d.type = S.type, n = S.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return yt(Vn, Vn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ht() > zu && (r.flags |= 128, u = !0, js(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Vc(S), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), js(d, !0), d.tail === null && d.tailMode === "hidden" && !S.alternate && !An) return hr(r), null;
          } else 2 * Ht() - d.renderingStartTime > zu && o !== 1073741824 && (r.flags |= 128, u = !0, js(d, !1), r.lanes = 4194304);
          d.isBackwards ? (S.sibling = r.child, r.child = S) : (o = d.last, o !== null ? o.sibling = S : r.child = S, d.last = S);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ht(), r.sibling = null, o = Vn.current, yt(Vn, u ? o & 1 | 2 : o & 1), r) : (hr(r), null);
      case 22:
      case 23:
        return rp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ta & 1073741824 && (hr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : hr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function df(n, r) {
    switch (jc(r), r.tag) {
      case 1:
        return Jn(r.type) && wu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Tl(), Mn(sr), Mn($n), bt(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Bc(r), null;
      case 13:
        if (Mn(Vn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(h(340));
          Ho();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Mn(Vn), null;
      case 4:
        return Tl(), null;
      case 10:
        return Md(r.type._context), null;
      case 22:
      case 23:
        return rp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Us = !1, Pr = !1, Vy = typeof WeakSet == "function" ? WeakSet : Set, ut = null;
  function Ou(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      jn(n, r, u);
    }
    else o.current = null;
  }
  function pf(n, r, o) {
    try {
      o();
    } catch (u) {
      jn(n, r, u);
    }
  }
  var mh = !1;
  function yh(n, r) {
    if (vs = ja, n = cs(), wc(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, d.nodeType;
          } catch {
            o = null;
            break e;
          }
          var S = 0, M = -1, U = -1, fe = 0, Ae = 0, Ve = n, Ne = null;
          t: for (; ; ) {
            for (var it; Ve !== o || c !== 0 && Ve.nodeType !== 3 || (M = S + c), Ve !== d || u !== 0 && Ve.nodeType !== 3 || (U = S + u), Ve.nodeType === 3 && (S += Ve.nodeValue.length), (it = Ve.firstChild) !== null; )
              Ne = Ve, Ve = it;
            for (; ; ) {
              if (Ve === n) break t;
              if (Ne === o && ++fe === c && (M = S), Ne === d && ++Ae === u && (U = S), (it = Ve.nextSibling) !== null) break;
              Ve = Ne, Ne = Ve.parentNode;
            }
            Ve = it;
          }
          o = M === -1 || U === -1 ? null : { start: M, end: U };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Sl = { focusedElem: n, selectionRange: o }, ja = !1, ut = r; ut !== null; ) if (r = ut, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ut = n;
    else for (; ut !== null; ) {
      r = ut;
      try {
        var ft = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ft !== null) {
              var vt = ft.memoizedProps, Xn = ft.memoizedState, ee = r.stateNode, Y = ee.getSnapshotBeforeUpdate(r.elementType === r.type ? vt : pi(r.type, vt), Xn);
              ee.__reactInternalSnapshotBeforeUpdate = Y;
            }
            break;
          case 3:
            var ae = r.stateNode.containerInfo;
            ae.nodeType === 1 ? ae.textContent = "" : ae.nodeType === 9 && ae.documentElement && ae.removeChild(ae.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(h(163));
        }
      } catch (je) {
        jn(r, r.return, je);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ut = n;
        break;
      }
      ut = r.return;
    }
    return ft = mh, mh = !1, ft;
  }
  function Hs(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && pf(r, o, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Xd(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function vf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, vf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oi], delete r[hs], delete r[ms], delete r[Eu], delete r[Fy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Bs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function io(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Bs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Pi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Lo));
    else if (u !== 4 && (n = n.child, n !== null)) for (Pi(n, r, o), n = n.sibling; n !== null; ) Pi(n, r, o), n = n.sibling;
  }
  function Ai(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Ai(n, r, o), n = n.sibling; n !== null; ) Ai(n, r, o), n = n.sibling;
  }
  var Gn = null, $r = !1;
  function Wr(n, r, o) {
    for (o = o.child; o !== null; ) gh(n, r, o), o = o.sibling;
  }
  function gh(n, r, o) {
    if (ra && typeof ra.onCommitFiberUnmount == "function") try {
      ra.onCommitFiberUnmount(Co, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Pr || Ou(o, r);
      case 6:
        var u = Gn, c = $r;
        Gn = null, Wr(n, r, o), Gn = u, $r = c, Gn !== null && ($r ? (n = Gn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Gn.removeChild(o.stateNode));
        break;
      case 18:
        Gn !== null && ($r ? (n = Gn, o = o.stateNode, n.nodeType === 8 ? bu(n.parentNode, o) : n.nodeType === 1 && bu(n, o), ui(n)) : bu(Gn, o.stateNode));
        break;
      case 4:
        u = Gn, c = $r, Gn = o.stateNode.containerInfo, $r = !0, Wr(n, r, o), Gn = u, $r = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, S = d.destroy;
            d = d.tag, S !== void 0 && (d & 2 || d & 4) && pf(o, r, S), c = c.next;
          } while (c !== u);
        }
        Wr(n, r, o);
        break;
      case 1:
        if (!Pr && (Ou(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (M) {
          jn(o, r, M);
        }
        Wr(n, r, o);
        break;
      case 21:
        Wr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Pr = (u = Pr) || o.memoizedState !== null, Wr(n, r, o), Pr = u) : Wr(n, r, o);
        break;
      default:
        Wr(n, r, o);
    }
  }
  function Sh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Vy()), r.forEach(function(u) {
        var c = Oh.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function vi(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var d = n, S = r, M = S;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 5:
              Gn = M.stateNode, $r = !1;
              break e;
            case 3:
              Gn = M.stateNode.containerInfo, $r = !0;
              break e;
            case 4:
              Gn = M.stateNode.containerInfo, $r = !0;
              break e;
          }
          M = M.return;
        }
        if (Gn === null) throw Error(h(160));
        gh(d, S, c), Gn = null, $r = !1;
        var U = c.alternate;
        U !== null && (U.return = null), c.return = null;
      } catch (fe) {
        jn(c, r, fe);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Kd(r, n), r = r.sibling;
  }
  function Kd(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (vi(r, n), da(n), u & 4) {
          try {
            Hs(3, n, n.return), Fs(3, n);
          } catch (vt) {
            jn(n, n.return, vt);
          }
          try {
            Hs(5, n, n.return);
          } catch (vt) {
            jn(n, n.return, vt);
          }
        }
        break;
      case 1:
        vi(r, n), da(n), u & 512 && o !== null && Ou(o, o.return);
        break;
      case 5:
        if (vi(r, n), da(n), u & 512 && o !== null && Ou(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            j(c, "");
          } catch (vt) {
            jn(n, n.return, vt);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, S = o !== null ? o.memoizedProps : d, M = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            M === "input" && d.type === "radio" && d.name != null && Mt(c, d), Dn(M, S);
            var fe = Dn(M, d);
            for (S = 0; S < U.length; S += 2) {
              var Ae = U[S], Ve = U[S + 1];
              Ae === "style" ? ct(c, Ve) : Ae === "dangerouslySetInnerHTML" ? Z(c, Ve) : Ae === "children" ? j(c, Ve) : x(c, Ae, Ve, fe);
            }
            switch (M) {
              case "input":
                B(c, d);
                break;
              case "textarea":
                _t(c, d);
                break;
              case "select":
                var Ne = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var it = d.value;
                it != null ? Je(c, !!d.multiple, it, !1) : Ne !== !!d.multiple && (d.defaultValue != null ? Je(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Je(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[hs] = d;
          } catch (vt) {
            jn(n, n.return, vt);
          }
        }
        break;
      case 6:
        if (vi(r, n), da(n), u & 4) {
          if (n.stateNode === null) throw Error(h(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (vt) {
            jn(n, n.return, vt);
          }
        }
        break;
      case 3:
        if (vi(r, n), da(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          ui(r.containerInfo);
        } catch (vt) {
          jn(n, n.return, vt);
        }
        break;
      case 4:
        vi(r, n), da(n);
        break;
      case 13:
        vi(r, n), da(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ep = Ht())), u & 4 && Sh(n);
        break;
      case 22:
        if (Ae = o !== null && o.memoizedState !== null, n.mode & 1 ? (Pr = (fe = Pr) || Ae, vi(r, n), Pr = fe) : vi(r, n), da(n), u & 8192) {
          if (fe = n.memoizedState !== null, (n.stateNode.isHidden = fe) && !Ae && n.mode & 1) for (ut = n, Ae = n.child; Ae !== null; ) {
            for (Ve = ut = Ae; ut !== null; ) {
              switch (Ne = ut, it = Ne.child, Ne.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hs(4, Ne, Ne.return);
                  break;
                case 1:
                  Ou(Ne, Ne.return);
                  var ft = Ne.stateNode;
                  if (typeof ft.componentWillUnmount == "function") {
                    u = Ne, o = Ne.return;
                    try {
                      r = u, ft.props = r.memoizedProps, ft.state = r.memoizedState, ft.componentWillUnmount();
                    } catch (vt) {
                      jn(u, o, vt);
                    }
                  }
                  break;
                case 5:
                  Ou(Ne, Ne.return);
                  break;
                case 22:
                  if (Ne.memoizedState !== null) {
                    Vs(Ve);
                    continue;
                  }
              }
              it !== null ? (it.return = Ne, ut = it) : Vs(Ve);
            }
            Ae = Ae.sibling;
          }
          e: for (Ae = null, Ve = n; ; ) {
            if (Ve.tag === 5) {
              if (Ae === null) {
                Ae = Ve;
                try {
                  c = Ve.stateNode, fe ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (M = Ve.stateNode, U = Ve.memoizedProps.style, S = U != null && U.hasOwnProperty("display") ? U.display : null, M.style.display = gt("display", S));
                } catch (vt) {
                  jn(n, n.return, vt);
                }
              }
            } else if (Ve.tag === 6) {
              if (Ae === null) try {
                Ve.stateNode.nodeValue = fe ? "" : Ve.memoizedProps;
              } catch (vt) {
                jn(n, n.return, vt);
              }
            } else if ((Ve.tag !== 22 && Ve.tag !== 23 || Ve.memoizedState === null || Ve === n) && Ve.child !== null) {
              Ve.child.return = Ve, Ve = Ve.child;
              continue;
            }
            if (Ve === n) break e;
            for (; Ve.sibling === null; ) {
              if (Ve.return === null || Ve.return === n) break e;
              Ae === Ve && (Ae = null), Ve = Ve.return;
            }
            Ae === Ve && (Ae = null), Ve.sibling.return = Ve.return, Ve = Ve.sibling;
          }
        }
        break;
      case 19:
        vi(r, n), da(n), u & 4 && Sh(n);
        break;
      case 21:
        break;
      default:
        vi(
          r,
          n
        ), da(n);
    }
  }
  function da(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Bs(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(h(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (j(c, ""), u.flags &= -33);
            var d = io(n);
            Ai(n, d, c);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, M = io(n);
            Pi(n, M, S);
            break;
          default:
            throw Error(h(161));
        }
      } catch (U) {
        jn(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Iy(n, r, o) {
    ut = n, Zd(n);
  }
  function Zd(n, r, o) {
    for (var u = (n.mode & 1) !== 0; ut !== null; ) {
      var c = ut, d = c.child;
      if (c.tag === 22 && u) {
        var S = c.memoizedState !== null || Us;
        if (!S) {
          var M = c.alternate, U = M !== null && M.memoizedState !== null || Pr;
          M = Us;
          var fe = Pr;
          if (Us = S, (Pr = U) && !fe) for (ut = c; ut !== null; ) S = ut, U = S.child, S.tag === 22 && S.memoizedState !== null ? Jd(c) : U !== null ? (U.return = S, ut = U) : Jd(c);
          for (; d !== null; ) ut = d, Zd(d), d = d.sibling;
          ut = c, Us = M, Pr = fe;
        }
        bh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ut = d) : bh(n);
    }
  }
  function bh(n) {
    for (; ut !== null; ) {
      var r = ut;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Pr || Fs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Pr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : pi(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && jd(r, d, u);
              break;
            case 3:
              var S = r.updateQueue;
              if (S !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                jd(r, S, o);
              }
              break;
            case 5:
              var M = r.stateNode;
              if (o === null && r.flags & 4) {
                o = M;
                var U = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    U.autoFocus && o.focus();
                    break;
                  case "img":
                    U.src && (o.src = U.src);
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
              if (r.memoizedState === null) {
                var fe = r.alternate;
                if (fe !== null) {
                  var Ae = fe.memoizedState;
                  if (Ae !== null) {
                    var Ve = Ae.dehydrated;
                    Ve !== null && ui(Ve);
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
              throw Error(h(163));
          }
          Pr || r.flags & 512 && Xd(r);
        } catch (Ne) {
          jn(r, r.return, Ne);
        }
      }
      if (r === n) {
        ut = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, ut = o;
        break;
      }
      ut = r.return;
    }
  }
  function Vs(n) {
    for (; ut !== null; ) {
      var r = ut;
      if (r === n) {
        ut = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, ut = o;
        break;
      }
      ut = r.return;
    }
  }
  function Jd(n) {
    for (; ut !== null; ) {
      var r = ut;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Fs(4, r);
            } catch (U) {
              jn(r, o, U);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (U) {
                jn(r, c, U);
              }
            }
            var d = r.return;
            try {
              Xd(r);
            } catch (U) {
              jn(r, d, U);
            }
            break;
          case 5:
            var S = r.return;
            try {
              Xd(r);
            } catch (U) {
              jn(r, S, U);
            }
        }
      } catch (U) {
        jn(r, r.return, U);
      }
      if (r === n) {
        ut = null;
        break;
      }
      var M = r.sibling;
      if (M !== null) {
        M.return = r.return, ut = M;
        break;
      }
      ut = r.return;
    }
  }
  var $y = Math.ceil, $o = C.ReactCurrentDispatcher, Pl = C.ReactCurrentOwner, Rr = C.ReactCurrentBatchConfig, Jt = 0, fr = null, ar = null, Cr = 0, Ta = 0, Du = Fa(0), Qn = 0, Is = null, ji = 0, ku = 0, hf = 0, $s = null, pa = null, ep = 0, zu = 1 / 0, _a = null, Mu = !1, Al = null, Wo = null, mf = !1, oo = null, Ws = 0, qo = 0, Lu = null, qs = -1, Ar = 0;
  function ir() {
    return Jt & 6 ? Ht() : qs !== -1 ? qs : qs = Ht();
  }
  function Ui(n) {
    return n.mode & 1 ? Jt & 2 && Cr !== 0 ? Cr & -Cr : By.transition !== null ? (Ar === 0 && (Ar = iu()), Ar) : (n = sn, n !== 0 || (n = window.event, n = n === void 0 ? 16 : du(n.type)), n) : 1;
  }
  function qr(n, r, o, u) {
    if (50 < qo) throw qo = 0, Lu = null, Error(h(185));
    Yi(n, o, u), (!(Jt & 2) || n !== fr) && (n === fr && (!(Jt & 2) && (ku |= o), Qn === 4 && hi(n, Cr)), va(n, u), o === 1 && Jt === 0 && !(r.mode & 1) && (zu = Ht() + 500, Ru && ki()));
  }
  function va(n, r) {
    var o = n.callbackNode;
    cl(n, r);
    var u = li(n, n === fr ? Cr : 0);
    if (u === 0) o !== null && Sr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && Sr(o), r === 1) n.tag === 0 ? Po(tp.bind(null, n)) : Pc(tp.bind(null, n)), Su(function() {
        !(Jt & 6) && ki();
      }), o = null;
      else {
        switch (lu(u)) {
          case 1:
            o = ii;
            break;
          case 4:
            o = ul;
            break;
          case 16:
            o = sl;
            break;
          case 536870912:
            o = nu;
            break;
          default:
            o = sl;
        }
        o = kh(o, yf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function yf(n, r) {
    if (qs = -1, Ar = 0, Jt & 6) throw Error(h(327));
    var o = n.callbackNode;
    if (Nu() && n.callbackNode !== o) return null;
    var u = li(n, n === fr ? Cr : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = gf(n, u);
    else {
      r = u;
      var c = Jt;
      Jt |= 2;
      var d = wh();
      (fr !== n || Cr !== r) && (_a = null, zu = Ht() + 500, lo(n, r));
      do
        try {
          Rh();
          break;
        } catch (M) {
          Eh(n, M);
        }
      while (!0);
      zd(), $o.current = d, Jt = c, ar !== null ? r = 0 : (fr = null, Cr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = To(n), c !== 0 && (u = c, r = Ys(n, c))), r === 1) throw o = Is, lo(n, 0), hi(n, u), va(n, Ht()), o;
      if (r === 6) hi(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Wy(c) && (r = gf(n, u), r === 2 && (d = To(n), d !== 0 && (u = d, r = Ys(n, d))), r === 1)) throw o = Is, lo(n, 0), hi(n, u), va(n, Ht()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Hl(n, pa, _a);
            break;
          case 3:
            if (hi(n, u), (u & 130023424) === u && (r = ep + 500 - Ht(), 10 < r)) {
              if (li(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                ir(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Mc(Hl.bind(null, n, pa, _a), r);
              break;
            }
            Hl(n, pa, _a);
            break;
          case 4:
            if (hi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var S = 31 - Fr(u);
              d = 1 << S, S = r[S], S > c && (c = S), u &= ~d;
            }
            if (u = c, u = Ht() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * $y(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Mc(Hl.bind(null, n, pa, _a), u);
              break;
            }
            Hl(n, pa, _a);
            break;
          case 5:
            Hl(n, pa, _a);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return va(n, Ht()), n.callbackNode === o ? yf.bind(null, n) : null;
  }
  function Ys(n, r) {
    var o = $s;
    return n.current.memoizedState.isDehydrated && (lo(n, r).flags |= 256), n = gf(n, r), n !== 2 && (r = pa, pa = o, r !== null && jl(r)), n;
  }
  function jl(n) {
    pa === null ? pa = n : pa.push.apply(pa, n);
  }
  function Wy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ci(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function hi(n, r) {
    for (r &= ~hf, r &= ~ku, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Fr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function tp(n) {
    if (Jt & 6) throw Error(h(327));
    Nu();
    var r = li(n, 0);
    if (!(r & 1)) return va(n, Ht()), null;
    var o = gf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = To(n);
      u !== 0 && (r = u, o = Ys(n, u));
    }
    if (o === 1) throw o = Is, lo(n, 0), hi(n, r), va(n, Ht()), o;
    if (o === 6) throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Hl(n, pa, _a), va(n, Ht()), null;
  }
  function np(n, r) {
    var o = Jt;
    Jt |= 1;
    try {
      return n(r);
    } finally {
      Jt = o, Jt === 0 && (zu = Ht() + 500, Ru && ki());
    }
  }
  function Ul(n) {
    oo !== null && oo.tag === 0 && !(Jt & 6) && Nu();
    var r = Jt;
    Jt |= 1;
    var o = Rr.transition, u = sn;
    try {
      if (Rr.transition = null, sn = 1, n) return n();
    } finally {
      sn = u, Rr.transition = o, Jt = r, !(Jt & 6) && ki();
    }
  }
  function rp() {
    Ta = Du.current, Mn(Du);
  }
  function lo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Td(o)), ar !== null) for (o = ar.return; o !== null; ) {
      var u = o;
      switch (jc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && wu();
          break;
        case 3:
          Tl(), Mn(sr), Mn($n), bt();
          break;
        case 5:
          Bc(u);
          break;
        case 4:
          Tl();
          break;
        case 13:
          Mn(Vn);
          break;
        case 19:
          Mn(Vn);
          break;
        case 10:
          Md(u.type._context);
          break;
        case 22:
        case 23:
          rp();
      }
      o = o.return;
    }
    if (fr = n, ar = n = Yo(n.current, null), Cr = Ta = r, Qn = 0, Is = null, hf = ku = ji = 0, pa = $s = null, Cl !== null) {
      for (r = 0; r < Cl.length; r++) if (o = Cl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, d = o.pending;
        if (d !== null) {
          var S = d.next;
          d.next = c, u.next = S;
        }
        o.pending = u;
      }
      Cl = null;
    }
    return n;
  }
  function Eh(n, r) {
    do {
      var o = ar;
      try {
        if (zd(), qt.current = Ml, Ic) {
          for (var u = fn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Ic = !1;
        }
        if (wn = 0, vr = tr = fn = null, Cs = !1, _l = 0, Pl.current = null, o === null || o.return === null) {
          Qn = 1, Is = r, ar = null;
          break;
        }
        e: {
          var d = n, S = o.return, M = o, U = r;
          if (r = Cr, M.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var fe = U, Ae = M, Ve = Ae.tag;
            if (!(Ae.mode & 1) && (Ve === 0 || Ve === 11 || Ve === 15)) {
              var Ne = Ae.alternate;
              Ne ? (Ae.updateQueue = Ne.updateQueue, Ae.memoizedState = Ne.memoizedState, Ae.lanes = Ne.lanes) : (Ae.updateQueue = null, Ae.memoizedState = null);
            }
            var it = uh(S);
            if (it !== null) {
              it.flags &= -257, Io(it, S, M, d, r), it.mode & 1 && Wd(d, fe, r), r = it, U = fe;
              var ft = r.updateQueue;
              if (ft === null) {
                var vt = /* @__PURE__ */ new Set();
                vt.add(U), r.updateQueue = vt;
              } else ft.add(U);
              break e;
            } else {
              if (!(r & 1)) {
                Wd(d, fe, r), ap();
                break e;
              }
              U = Error(h(426));
            }
          } else if (An && M.mode & 1) {
            var Xn = uh(S);
            if (Xn !== null) {
              !(Xn.flags & 65536) && (Xn.flags |= 256), Io(Xn, S, M, d, r), no(Ll(U, M));
              break e;
            }
          }
          d = U = Ll(U, M), Qn !== 4 && (Qn = 2), $s === null ? $s = [d] : $s.push(d), d = S;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var ee = lh(d, U, r);
                nh(d, ee);
                break e;
              case 1:
                M = U;
                var Y = d.type, ae = d.stateNode;
                if (!(d.flags & 128) && (typeof Y.getDerivedStateFromError == "function" || ae !== null && typeof ae.componentDidCatch == "function" && (Wo === null || !Wo.has(ae)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var je = $d(d, M, r);
                  nh(d, je);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        xh(o);
      } catch (dt) {
        r = dt, ar === o && o !== null && (ar = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function wh() {
    var n = $o.current;
    return $o.current = Ml, n === null ? Ml : n;
  }
  function ap() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), fr === null || !(ji & 268435455) && !(ku & 268435455) || hi(fr, Cr);
  }
  function gf(n, r) {
    var o = Jt;
    Jt |= 2;
    var u = wh();
    (fr !== n || Cr !== r) && (_a = null, lo(n, r));
    do
      try {
        qy();
        break;
      } catch (c) {
        Eh(n, c);
      }
    while (!0);
    if (zd(), Jt = o, $o.current = u, ar !== null) throw Error(h(261));
    return fr = null, Cr = 0, Qn;
  }
  function qy() {
    for (; ar !== null; ) Ch(ar);
  }
  function Rh() {
    for (; ar !== null && !ri(); ) Ch(ar);
  }
  function Ch(n) {
    var r = Dh(n.alternate, n, Ta);
    n.memoizedProps = n.pendingProps, r === null ? xh(n) : ar = r, Pl.current = null;
  }
  function xh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = df(o, r), o !== null) {
          o.flags &= 32767, ar = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, ar = null;
          return;
        }
      } else if (o = hh(o, r, Ta), o !== null) {
        ar = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        ar = r;
        return;
      }
      ar = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function Hl(n, r, o) {
    var u = sn, c = Rr.transition;
    try {
      Rr.transition = null, sn = 1, Yy(n, r, o, u);
    } finally {
      Rr.transition = c, sn = u;
    }
    return null;
  }
  function Yy(n, r, o, u) {
    do
      Nu();
    while (oo !== null);
    if (Jt & 6) throw Error(h(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (id(n, d), n === fr && (ar = fr = null, Cr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || mf || (mf = !0, kh(sl, function() {
      return Nu(), null;
    })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
      d = Rr.transition, Rr.transition = null;
      var S = sn;
      sn = 1;
      var M = Jt;
      Jt |= 4, Pl.current = null, yh(n, o), Kd(o, n), hu(Sl), ja = !!vs, Sl = vs = null, n.current = o, Iy(o), ai(), Jt = M, sn = S, Rr.transition = d;
    } else n.current = o;
    if (mf && (mf = !1, oo = n, Ws = c), d = n.pendingLanes, d === 0 && (Wo = null), es(o.stateNode), va(n, Ht()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Mu) throw Mu = !1, n = Al, Al = null, n;
    return Ws & 1 && n.tag !== 0 && Nu(), d = n.pendingLanes, d & 1 ? n === Lu ? qo++ : (qo = 0, Lu = n) : qo = 0, ki(), null;
  }
  function Nu() {
    if (oo !== null) {
      var n = lu(Ws), r = Rr.transition, o = sn;
      try {
        if (Rr.transition = null, sn = 16 > n ? 16 : n, oo === null) var u = !1;
        else {
          if (n = oo, oo = null, Ws = 0, Jt & 6) throw Error(h(331));
          var c = Jt;
          for (Jt |= 4, ut = n.current; ut !== null; ) {
            var d = ut, S = d.child;
            if (ut.flags & 16) {
              var M = d.deletions;
              if (M !== null) {
                for (var U = 0; U < M.length; U++) {
                  var fe = M[U];
                  for (ut = fe; ut !== null; ) {
                    var Ae = ut;
                    switch (Ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hs(8, Ae, d);
                    }
                    var Ve = Ae.child;
                    if (Ve !== null) Ve.return = Ae, ut = Ve;
                    else for (; ut !== null; ) {
                      Ae = ut;
                      var Ne = Ae.sibling, it = Ae.return;
                      if (vf(Ae), Ae === fe) {
                        ut = null;
                        break;
                      }
                      if (Ne !== null) {
                        Ne.return = it, ut = Ne;
                        break;
                      }
                      ut = it;
                    }
                  }
                }
                var ft = d.alternate;
                if (ft !== null) {
                  var vt = ft.child;
                  if (vt !== null) {
                    ft.child = null;
                    do {
                      var Xn = vt.sibling;
                      vt.sibling = null, vt = Xn;
                    } while (vt !== null);
                  }
                }
                ut = d;
              }
            }
            if (d.subtreeFlags & 2064 && S !== null) S.return = d, ut = S;
            else e: for (; ut !== null; ) {
              if (d = ut, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Hs(9, d, d.return);
              }
              var ee = d.sibling;
              if (ee !== null) {
                ee.return = d.return, ut = ee;
                break e;
              }
              ut = d.return;
            }
          }
          var Y = n.current;
          for (ut = Y; ut !== null; ) {
            S = ut;
            var ae = S.child;
            if (S.subtreeFlags & 2064 && ae !== null) ae.return = S, ut = ae;
            else e: for (S = Y; ut !== null; ) {
              if (M = ut, M.flags & 2048) try {
                switch (M.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, M);
                }
              } catch (dt) {
                jn(M, M.return, dt);
              }
              if (M === S) {
                ut = null;
                break e;
              }
              var je = M.sibling;
              if (je !== null) {
                je.return = M.return, ut = je;
                break e;
              }
              ut = M.return;
            }
          }
          if (Jt = c, ki(), ra && typeof ra.onPostCommitFiberRoot == "function") try {
            ra.onPostCommitFiberRoot(Co, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        sn = o, Rr.transition = r;
      }
    }
    return !1;
  }
  function Th(n, r, o) {
    r = Ll(o, r), r = lh(n, r, 1), n = Fo(n, r, 1), r = ir(), n !== null && (Yi(n, 1, r), va(n, r));
  }
  function jn(n, r, o) {
    if (n.tag === 3) Th(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Th(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Wo === null || !Wo.has(u))) {
          n = Ll(o, n), n = $d(r, n, 1), r = Fo(r, n, 1), n = ir(), r !== null && (Yi(r, 1, n), va(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Gy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = ir(), n.pingedLanes |= n.suspendedLanes & o, fr === n && (Cr & o) === o && (Qn === 4 || Qn === 3 && (Cr & 130023424) === Cr && 500 > Ht() - ep ? lo(n, 0) : hf |= o), va(n, r);
  }
  function _h(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ea, Ea <<= 1, !(Ea & 130023424) && (Ea = 4194304)) : r = 1);
    var o = ir();
    n = Ca(n, r), n !== null && (Yi(n, r, o), va(n, o));
  }
  function Qy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), _h(n, o);
  }
  function Oh(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(r), _h(n, o);
  }
  var Dh;
  Dh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || sr.current) nr = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return nr = !1, As(n, r, o);
      nr = !!(n.flags & 131072);
    }
    else nr = !1, An && r.flags & 1048576 && Zv(r, to, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        $a(n, r), n = r.pendingProps;
        var c = oa(r, $n.current);
        Bn(r, o), c = Bo(null, r, u, n, c, o);
        var d = di();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Jn(u) ? (d = !0, pr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ad(r), c.updater = lf, r.stateNode = c, c._reactInternals = r, zs(r, u, n, o), r = Ns(null, r, u, !0, d, o)) : (r.tag = 0, An && d && Ac(r), wr(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch ($a(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Ky(u), n = pi(u, n), c) {
            case 0:
              r = sh(null, r, u, n, o);
              break e;
            case 1:
              r = ch(null, r, u, n, o);
              break e;
            case 11:
              r = fa(null, r, u, n, o);
              break e;
            case 14:
              r = Nl(null, r, u, pi(u.type, n), o);
              break e;
          }
          throw Error(h(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), sh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), ch(n, r, u, c, o);
      case 3:
        e: {
          if (_u(r), n === null) throw Error(h(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, th(n, r), Ss(r, u, null, o);
          var S = r.memoizedState;
          if (u = S.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ll(Error(h(423)), r), r = fh(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Ll(Error(h(424)), r), r = fh(n, r, u, o, c);
            break e;
          } else for (ua = _i(r.stateNode.containerInfo.firstChild), la = r, An = !0, Va = null, o = tt(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Ho(), u === c) {
              r = Wa(n, r, o);
              break e;
            }
            wr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return rh(r), n === null && Dd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, S = c.children, zc(u, c) ? S = null : d !== null && zc(u, d) && (r.flags |= 32), qd(n, r), wr(n, r, S, o), r.child;
      case 6:
        return n === null && Dd(r), null;
      case 13:
        return ff(n, r, o);
      case 4:
        return Ud(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = qn(r, null, u, o) : wr(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), fa(n, r, u, c, o);
      case 7:
        return wr(n, r, r.pendingProps, o), r.child;
      case 8:
        return wr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return wr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, S = c.value, yt(Ra, u._currentValue), u._currentValue = S, d !== null) if (ci(d.value, S)) {
            if (d.children === c.children && !sr.current) {
              r = Wa(n, r, o);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var M = d.dependencies;
            if (M !== null) {
              S = d.child;
              for (var U = M.firstContext; U !== null; ) {
                if (U.context === u) {
                  if (d.tag === 1) {
                    U = ro(-1, o & -o), U.tag = 2;
                    var fe = d.updateQueue;
                    if (fe !== null) {
                      fe = fe.shared;
                      var Ae = fe.pending;
                      Ae === null ? U.next = U : (U.next = Ae.next, Ae.next = U), fe.pending = U;
                    }
                  }
                  d.lanes |= o, U = d.alternate, U !== null && (U.lanes |= o), Ld(
                    d.return,
                    o,
                    r
                  ), M.lanes |= o;
                  break;
                }
                U = U.next;
              }
            } else if (d.tag === 10) S = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (S = d.return, S === null) throw Error(h(341));
              S.lanes |= o, M = S.alternate, M !== null && (M.lanes |= o), Ld(S, o, r), S = d.sibling;
            } else S = d.child;
            if (S !== null) S.return = d;
            else for (S = d; S !== null; ) {
              if (S === r) {
                S = null;
                break;
              }
              if (d = S.sibling, d !== null) {
                d.return = S.return, S = d;
                break;
              }
              S = S.return;
            }
            d = S;
          }
          wr(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, Bn(r, o), c = Ia(c), u = u(c), r.flags |= 1, wr(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = pi(u, r.pendingProps), c = pi(u.type, c), Nl(n, r, u, c, o);
      case 15:
        return Ft(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : pi(u, c), $a(n, r), r.tag = 1, Jn(u) ? (n = !0, pr(r)) : n = !1, Bn(r, o), uf(r, u, c), zs(r, u, c, o), Ns(null, r, u, !0, n, o);
      case 19:
        return Ni(n, r, o);
      case 22:
        return Ls(n, r, o);
    }
    throw Error(h(156, r.tag));
  };
  function kh(n, r) {
    return Ln(n, r);
  }
  function Xy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, o, u) {
    return new Xy(n, r, o, u);
  }
  function ip(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ky(n) {
    if (typeof n == "function") return ip(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ie) return 11;
      if (n === Ue) return 14;
    }
    return 2;
  }
  function Yo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ya(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Gs(n, r, o, u, c, d) {
    var S = 2;
    if (u = n, typeof n == "function") ip(n) && (S = 1);
    else if (typeof n == "string") S = 5;
    else e: switch (n) {
      case P:
        return uo(o.children, c, d, r);
      case ce:
        S = 8, c |= 8;
        break;
      case ve:
        return n = Ya(12, o, r, c | 2), n.elementType = ve, n.lanes = d, n;
      case re:
        return n = Ya(13, o, r, c), n.elementType = re, n.lanes = d, n;
      case De:
        return n = Ya(19, o, r, c), n.elementType = De, n.lanes = d, n;
      case Te:
        return Go(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Oe:
            S = 10;
            break e;
          case Pe:
            S = 9;
            break e;
          case ie:
            S = 11;
            break e;
          case Ue:
            S = 14;
            break e;
          case Fe:
            S = 16, u = null;
            break e;
        }
        throw Error(h(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(S, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function uo(n, r, o, u) {
    return n = Ya(7, n, u, r), n.lanes = o, n;
  }
  function Go(n, r, o, u) {
    return n = Ya(22, n, u, r), n.elementType = Te, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function op(n, r, o) {
    return n = Ya(6, n, null, r), n.lanes = o, n;
  }
  function Sf(n, r, o) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function zh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function bf(n, r, o, u, c, d, S, M, U) {
    return n = new zh(n, r, o, M, U), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ad(d), n;
  }
  function Zy(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function lp(n) {
    if (!n) return Lr;
    n = n._reactInternals;
    e: {
      if (Ut(n) !== n || n.tag !== 1) throw Error(h(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Jn(o)) return ys(n, o, r);
    }
    return r;
  }
  function Mh(n, r, o, u, c, d, S, M, U) {
    return n = bf(o, u, !0, n, c, d, S, M, U), n.context = lp(null), o = n.current, u = ir(), c = Ui(o), d = ro(u, c), d.callback = r ?? null, Fo(o, d, c), n.current.lanes = c, Yi(n, c, u), va(n, u), n;
  }
  function Ef(n, r, o, u) {
    var c = r.current, d = ir(), S = Ui(c);
    return o = lp(o), r.context === null ? r.context = o : r.pendingContext = o, r = ro(d, S), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fo(c, r, S), n !== null && (qr(n, c, S, d), Fc(n, c, S)), S;
  }
  function wf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function up(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Rf(n, r) {
    up(n, r), (n = n.alternate) && up(n, r);
  }
  function Lh() {
    return null;
  }
  var Fl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function sp(n) {
    this._internalRoot = n;
  }
  Cf.prototype.render = sp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(h(409));
    Ef(n, r, null, null);
  }, Cf.prototype.unmount = sp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ul(function() {
        Ef(null, n, null, null);
      }), r[Ji] = null;
    }
  };
  function Cf(n) {
    this._internalRoot = n;
  }
  Cf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Nt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < ur.length && r !== 0 && r < ur[o].priority; o++) ;
      ur.splice(o, 0, n), o === 0 && rs(n);
    }
  };
  function cp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function xf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Nh() {
  }
  function Jy(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var fe = wf(S);
          d.call(fe);
        };
      }
      var S = Mh(r, u, n, 0, null, !1, !1, "", Nh);
      return n._reactRootContainer = S, n[Ji] = S.current, yu(n.nodeType === 8 ? n.parentNode : n), Ul(), S;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var M = u;
      u = function() {
        var fe = wf(U);
        M.call(fe);
      };
    }
    var U = bf(n, 0, !1, null, null, !1, !1, "", Nh);
    return n._reactRootContainer = U, n[Ji] = U.current, yu(n.nodeType === 8 ? n.parentNode : n), Ul(function() {
      Ef(r, U, o, u);
    }), U;
  }
  function Qs(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var S = d;
      if (typeof c == "function") {
        var M = c;
        c = function() {
          var U = wf(S);
          M.call(U);
        };
      }
      Ef(r, S, n, c);
    } else S = Jy(o, r, n, c, u);
    return wf(S);
  }
  nn = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = oi(r.pendingLanes);
          o !== 0 && (Gi(r, o | 1), va(r, Ht()), !(Jt & 6) && (zu = Ht() + 500, ki()));
        }
        break;
      case 13:
        Ul(function() {
          var u = Ca(n, 1);
          if (u !== null) {
            var c = ir();
            qr(u, n, 1, c);
          }
        }), Rf(n, 1);
    }
  }, ts = function(n) {
    if (n.tag === 13) {
      var r = Ca(n, 134217728);
      if (r !== null) {
        var o = ir();
        qr(r, n, 134217728, o);
      }
      Rf(n, 134217728);
    }
  }, wi = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), o = Ca(n, r);
      if (o !== null) {
        var u = ir();
        qr(o, n, r, u);
      }
      Rf(n, r);
    }
  }, Nt = function() {
    return sn;
  }, uu = function(n, r) {
    var o = sn;
    try {
      return sn = n, r();
    } finally {
      sn = o;
    }
  }, mn = function(n, r, o) {
    switch (r) {
      case "input":
        if (B(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Fn(u);
              if (!c) throw Error(h(90));
              xe(u), B(u, c);
            }
          }
        }
        break;
      case "textarea":
        _t(n, o);
        break;
      case "select":
        r = o.value, r != null && Je(n, !!o.multiple, r, !1);
    }
  }, qi = np, Eo = Ul;
  var eg = { usingClientEntryPoint: !1, Events: [St, fi, Fn, Na, ti, np] }, Xs = { findFiberByHostInstance: bl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ph = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: C.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Xs.findFiberByHostInstance || Lh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber) try {
      Co = Qo.inject(Ph), ra = Qo;
    } catch {
    }
  }
  return Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg, Ja.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cp(r)) throw Error(h(200));
    return Zy(n, r, null, o);
  }, Ja.createRoot = function(n, r) {
    if (!cp(n)) throw Error(h(299));
    var o = !1, u = "", c = Fl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = bf(n, 1, !1, null, null, o, !1, u, c), n[Ji] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new sp(r);
  }, Ja.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = Wn(r), n = n === null ? null : n.stateNode, n;
  }, Ja.flushSync = function(n) {
    return Ul(n);
  }, Ja.hydrate = function(n, r, o) {
    if (!xf(r)) throw Error(h(200));
    return Qs(null, n, r, !0, o);
  }, Ja.hydrateRoot = function(n, r, o) {
    if (!cp(n)) throw Error(h(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", S = Fl;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (S = o.onRecoverableError)), r = Mh(r, null, n, 1, o ?? null, c, !1, d, S), n[Ji] = r.current, yu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new Cf(r);
  }, Ja.render = function(n, r, o) {
    if (!xf(r)) throw Error(h(200));
    return Qs(null, n, r, !1, o);
  }, Ja.unmountComponentAtNode = function(n) {
    if (!xf(n)) throw Error(h(40));
    return n._reactRootContainer ? (Ul(function() {
      Qs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, Ja.unstable_batchedUpdates = np, Ja.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!xf(o)) throw Error(h(200));
    if (n == null || n._reactInternals === void 0) throw Error(h(38));
    return Qs(n, r, o, !1, u);
  }, Ja.version = "18.3.1-next-f1338f8080-20240426", Ja;
}
var ei = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eC;
function WD() {
  return eC || (eC = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var y = ba(), w = PC(), h = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function $(e) {
      _ = e;
    }
    function H(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        pe("warn", e, a);
      }
    }
    function g(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        pe("error", e, a);
      }
    }
    function pe(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var A = 0, V = 1, oe = 2, I = 3, J = 4, ye = 5, ke = 6, be = 7, K = 8, k = 9, b = 10, x = 11, C = 12, E = 13, D = 14, P = 15, ce = 16, ve = 17, Oe = 18, Pe = 19, ie = 21, re = 22, De = 23, Ue = 24, Fe = 25, Te = !0, ge = !1, $e = !1, W = !1, O = !1, Q = !0, He = !0, ze = !0, Ge = !0, qe = /* @__PURE__ */ new Set(), Ye = {}, he = {};
    function Re(e, t) {
      Be(e, t), Be(e + "Capture", t);
    }
    function Be(e, t) {
      Ye[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ye[e] = t;
      {
        var a = e.toLowerCase();
        he[a] = e, e === "onDoubleClick" && (he.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        qe.add(t[i]);
    }
    var rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xe = Object.prototype.hasOwnProperty;
    function ht(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zt(e) {
      try {
        return $t(e), !1;
      } catch {
        return !0;
      }
    }
    function $t(e) {
      return "" + e;
    }
    function Mt(e, t) {
      if (zt(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ht(e)), $t(e);
    }
    function B(e) {
      if (zt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), $t(e);
    }
    function F(e, t) {
      if (zt(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ht(e)), $t(e);
    }
    function X(e, t) {
      if (zt(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ht(e)), $t(e);
    }
    function me(e) {
      if (zt(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), $t(e);
    }
    function Je(e) {
      if (zt(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", ht(e)), $t(e);
    }
    var et = 0, Qe = 1, _t = 2, Rt = 3, Bt = 4, ln = 5, z = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", j = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", le = new RegExp("^[" + Z + "][" + j + "]*$"), Ce = {}, gt = {};
    function ct(e) {
      return xe.call(gt, e) ? !0 : xe.call(Ce, e) ? !1 : le.test(e) ? (gt[e] = !0, !0) : (Ce[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Lt(e, t, a) {
      return t !== null ? t.type === et : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Yt(e, t, a, i) {
      if (a !== null && a.type === et)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Dn(e, t, a, i) {
      if (t === null || typeof t > "u" || Yt(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Rt:
            return !t;
          case Bt:
            return t === !1;
          case ln:
            return isNaN(t);
          case z:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return mn.hasOwnProperty(e) ? mn[e] : null;
    }
    function un(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === _t || t === Rt || t === Bt, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var mn = {}, na = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    na.forEach(function(e) {
      mn[e] = new un(
        e,
        et,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      mn[t] = new un(
        t,
        Qe,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      mn[e] = new un(
        e,
        _t,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      mn[e] = new un(
        e,
        _t,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      mn[e] = new un(
        e,
        Rt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      mn[e] = new un(
        e,
        Rt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      mn[e] = new un(
        e,
        Bt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      mn[e] = new un(
        e,
        z,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      mn[e] = new un(
        e,
        ln,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var lr = /[\-\:]([a-z])/g, jr = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(lr, jr);
      mn[t] = new un(
        t,
        Qe,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(lr, jr);
      mn[t] = new un(
        t,
        Qe,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(lr, jr);
      mn[t] = new un(
        t,
        Qe,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      mn[e] = new un(
        e,
        Qe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Na = "xlinkHref";
    mn[Na] = new un(
      "xlinkHref",
      Qe,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      mn[e] = new un(
        e,
        Qe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ti = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, qi = !1;
    function Eo(e) {
      !qi && ti.test(e) && (qi = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function wo(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Mt(a, t), i.sanitizeURL && Eo("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Bt) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Dn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Dn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Rt)
            return a;
          f = e.getAttribute(s);
        }
        return Dn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ll(e, t, a, i) {
      {
        if (!ct(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Mt(a, t), l === "" + a ? a : l;
      }
    }
    function Ur(e, t, a, i) {
      var l = an(t);
      if (!Lt(t, l, i)) {
        if (Dn(t, a, l, i) && (a = null), i || l === null) {
          if (ct(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Mt(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var p = l.propertyName;
          if (a === null) {
            var v = l.type;
            e[p] = v === Rt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var R = l.attributeName, T = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var G = l.type, q;
          G === Rt || G === Bt && a === !0 ? q = "" : (Mt(a, R), q = "" + a, l.sanitizeURL && Eo(q.toString())), T ? e.setAttributeNS(T, R, q) : e.setAttribute(R, q);
        }
      }
    }
    var Hr = Symbol.for("react.element"), gr = Symbol.for("react.portal"), Si = Symbol.for("react.fragment"), ni = Symbol.for("react.strict_mode"), bi = Symbol.for("react.profiler"), Ei = Symbol.for("react.provider"), N = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Gt = Symbol.for("react.scope"), Wt = Symbol.for("react.debug_trace_mode"), Wn = Symbol.for("react.offscreen"), kn = Symbol.for("react.legacy_hidden"), Ln = Symbol.for("react.cache"), Sr = Symbol.for("react.tracing_marker"), ri = Symbol.iterator, ai = "@@iterator";
    function Ht(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ri && e[ri] || e[ai];
      return typeof t == "function" ? t : null;
    }
    var Vt = Object.assign, ii = 0, ul, sl, Ro, nu, Co, ra, es;
    function Fr() {
    }
    Fr.__reactDisabledLog = !0;
    function mc() {
      {
        if (ii === 0) {
          ul = console.log, sl = console.info, Ro = console.warn, nu = console.error, Co = console.group, ra = console.groupCollapsed, es = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Fr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ii++;
      }
    }
    function yc() {
      {
        if (ii--, ii === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Vt({}, e, {
              value: ul
            }),
            info: Vt({}, e, {
              value: sl
            }),
            warn: Vt({}, e, {
              value: Ro
            }),
            error: Vt({}, e, {
              value: nu
            }),
            group: Vt({}, e, {
              value: Co
            }),
            groupCollapsed: Vt({}, e, {
              value: ra
            }),
            groupEnd: Vt({}, e, {
              value: es
            })
          });
        }
        ii < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ru = h.ReactCurrentDispatcher, xo;
    function Ea(e, t, a) {
      {
        if (xo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            xo = i && i[1] || "";
          }
        return `
` + xo + e;
      }
    }
    var oi = !1, li;
    {
      var au = typeof WeakMap == "function" ? WeakMap : Map;
      li = new au();
    }
    function cl(e, t) {
      if (!e || oi)
        return "";
      {
        var a = li.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      oi = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ru.current, ru.current = null, mc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (de) {
              i = de;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (de) {
              i = de;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            i = de;
          }
          e();
        }
      } catch (de) {
        if (de && i && typeof de.stack == "string") {
          for (var p = de.stack.split(`
`), v = i.stack.split(`
`), R = p.length - 1, T = v.length - 1; R >= 1 && T >= 0 && p[R] !== v[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (p[R] !== v[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || p[R] !== v[T]) {
                    var G = `
` + p[R].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && li.set(e, G), G;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        oi = !1, ru.current = s, yc(), Error.prepareStackTrace = l;
      }
      var q = e ? e.displayName || e.name : "", ue = q ? Ea(q) : "";
      return typeof e == "function" && li.set(e, ue), ue;
    }
    function To(e, t, a) {
      return cl(e, !0);
    }
    function iu(e, t, a) {
      return cl(e, !1);
    }
    function ou(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return cl(e, ou(e));
      if (typeof e == "string")
        return Ea(e);
      switch (e) {
        case Ze:
          return Ea("Suspense");
        case st:
          return Ea("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Me:
            return iu(e.render);
          case Ut:
            return Yi(e.type, t, a);
          case Pt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Yi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function id(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ye:
          return Ea(e.type);
        case ce:
          return Ea("Lazy");
        case E:
          return Ea("Suspense");
        case Pe:
          return Ea("SuspenseList");
        case A:
        case oe:
        case P:
          return iu(e.type);
        case x:
          return iu(e.type.render);
        case V:
          return To(e.type);
        default:
          return "";
      }
    }
    function Gi(e) {
      try {
        var t = "", a = e;
        do
          t += id(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function sn(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function lu(e) {
      return e.displayName || "Context";
    }
    function nn(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Si:
          return "Fragment";
        case gr:
          return "Portal";
        case bi:
          return "Profiler";
        case ni:
          return "StrictMode";
        case Ze:
          return "Suspense";
        case st:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return lu(t) + ".Consumer";
          case Ei:
            var a = e;
            return lu(a._context) + ".Provider";
          case Me:
            return sn(e, e.render, "ForwardRef");
          case Ut:
            var i = e.displayName || null;
            return i !== null ? i : nn(e.type) || "Memo";
          case Pt: {
            var l = e, s = l._payload, f = l._init;
            try {
              return nn(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ts(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function wi(e) {
      return e.displayName || "Context";
    }
    function Nt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ue:
          return "Cache";
        case k:
          var i = a;
          return wi(i) + ".Consumer";
        case b:
          var l = a;
          return wi(l._context) + ".Provider";
        case Oe:
          return "DehydratedFragment";
        case x:
          return ts(a, a.render, "ForwardRef");
        case be:
          return "Fragment";
        case ye:
          return a;
        case J:
          return "Portal";
        case I:
          return "Root";
        case ke:
          return "Text";
        case ce:
          return nn(a);
        case K:
          return a === ni ? "StrictMode" : "Mode";
        case re:
          return "Offscreen";
        case C:
          return "Profiler";
        case ie:
          return "Scope";
        case E:
          return "Suspense";
        case Pe:
          return "SuspenseList";
        case Fe:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case V:
        case A:
        case ve:
        case oe:
        case D:
        case P:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var uu = h.ReactDebugCurrentFrame, br = null, Ri = !1;
    function Br() {
      {
        if (br === null)
          return null;
        var e = br._debugOwner;
        if (e !== null && typeof e < "u")
          return Nt(e);
      }
      return null;
    }
    function Ci() {
      return br === null ? "" : Gi(br);
    }
    function Nn() {
      uu.getCurrentStack = null, br = null, Ri = !1;
    }
    function Sn(e) {
      uu.getCurrentStack = e === null ? null : Ci, br = e, Ri = !1;
    }
    function _o() {
      return br;
    }
    function ur(e) {
      Ri = e;
    }
    function Vr(e) {
      return "" + e;
    }
    function Pa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Je(e), e;
        default:
          return "";
      }
    }
    var fl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ns(e, t) {
      fl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function rs(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Oo(e) {
      return e._valueTracker;
    }
    function dl(e) {
      e._valueTracker = null;
    }
    function od(e) {
      var t = "";
      return e && (rs(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Aa(e) {
      var t = rs(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Je(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(p) {
            Je(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Je(p), i = "" + p;
          },
          stopTracking: function() {
            dl(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ui(e) {
      Oo(e) || (e._valueTracker = Aa(e));
    }
    function xi(e) {
      if (!e)
        return !1;
      var t = Oo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = od(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ja(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var su = !1, cu = !1, Do = !1, pl = !1;
    function fu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function du(e, t) {
      var a = e, i = t.checked, l = Vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function si(e, t) {
      ns("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), cu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !su && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), su = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Pa(t.value != null ? t.value : i),
        controlled: fu(t)
      };
    }
    function m(e, t) {
      var a = e, i = t.checked;
      i != null && Ur(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = fu(t);
        !a._wrapperState.controlled && i && !pl && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), pl = !0), a._wrapperState.controlled && !i && !Do && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Do = !0);
      }
      m(e, t);
      var l = Pa(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Vr(l)) : a.value !== Vr(l) && (a.value = Vr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Et(a, t.type, l) : t.hasOwnProperty("defaultValue") && Et(a, t.type, Pa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function se(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Vr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Se(e, t) {
      var a = e;
      L(a, t), We(a, t);
    }
    function We(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Mt(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Jh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            xi(f), L(f, p);
          }
        }
      }
    }
    function Et(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ja(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Vr(e._wrapperState.initialValue) : e.defaultValue !== Vr(a) && (e.defaultValue = Vr(a)));
    }
    var Ke = !1, xt = !1, Qt = !1;
    function rn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? y.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ke && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ke = !0);
    }
    function zn(e, t) {
      t.value != null && e.setAttribute("value", Vr(Pa(t.value)));
    }
    var bn = Array.isArray;
    function It(e) {
      return bn(e);
    }
    var En;
    En = !1;
    function Hn() {
      var e = Br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ko = ["value", "defaultValue"];
    function as(e) {
      {
        ns("select", e);
        for (var t = 0; t < ko.length; t++) {
          var a = ko[t];
          if (e[a] != null) {
            var i = It(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Hn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Hn());
          }
        }
      }
    }
    function Qi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < l.length; v++) {
          var R = f.hasOwnProperty("$" + l[v].value);
          l[v].selected !== R && (l[v].selected = R), R && i && (l[v].defaultSelected = !0);
        }
      } else {
        for (var T = Vr(Pa(a)), G = null, q = 0; q < l.length; q++) {
          if (l[q].value === T) {
            l[q].selected = !0, i && (l[q].defaultSelected = !0);
            return;
          }
          G === null && !l[q].disabled && (G = l[q]);
        }
        G !== null && (G.selected = !0);
      }
    }
    function is(e, t) {
      return Vt({}, t, {
        value: void 0
      });
    }
    function vl(e, t) {
      var a = e;
      as(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !En && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), En = !0);
    }
    function ld(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Qi(a, !!t.multiple, i, !1) : t.defaultValue != null && Qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function gc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Qi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Qi(a, !!t.multiple, t.defaultValue, !0) : Qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ud(e, t) {
      var a = e, i = t.value;
      i != null && Qi(a, !!t.multiple, i, !1);
    }
    var wv = !1;
    function sd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Vr(a._wrapperState.initialValue)
      });
      return i;
    }
    function cd(e, t) {
      var a = e;
      ns("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !wv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component"), wv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (It(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Pa(i)
      };
    }
    function Rv(e, t) {
      var a = e, i = Pa(t.value), l = Pa(t.defaultValue);
      if (i != null) {
        var s = Vr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Vr(l));
    }
    function Cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Dy(e, t) {
      Rv(e, t);
    }
    var Xi = "http://www.w3.org/1999/xhtml", fd = "http://www.w3.org/1998/Math/MathML", dd = "http://www.w3.org/2000/svg";
    function pd(e) {
      switch (e) {
        case "svg":
          return dd;
        case "math":
          return fd;
        default:
          return Xi;
      }
    }
    function vd(e, t) {
      return e == null || e === Xi ? pd(t) : e === dd && t === "foreignObject" ? Xi : e;
    }
    var xv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Sc, Tv = xv(function(e, t) {
      if (e.namespaceURI === dd && !("innerHTML" in e)) {
        Sc = Sc || document.createElement("div"), Sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), aa = 1, Ki = 3, Zn = 8, Zi = 9, hd = 11, pu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, os = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, ls = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function _v(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ls).forEach(function(e) {
      Ov.forEach(function(t) {
        ls[_v(t, e)] = ls[e];
      });
    });
    function bc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ls.hasOwnProperty(e) && ls[e]) ? t + "px" : (X(t, e), ("" + t).trim());
    }
    var Dv = /([A-Z])/g, kv = /^ms-/;
    function vu(e) {
      return e.replace(Dv, "-$1").toLowerCase().replace(kv, "-ms-");
    }
    var zv = function() {
    };
    {
      var ky = /^(?:webkit|moz|o)[A-Z]/, zy = /^-ms-/, Mv = /-(.)/g, md = /;\s*$/, Ti = {}, hl = {}, Lv = !1, us = !1, My = function(e) {
        return e.replace(Mv, function(t, a) {
          return a.toUpperCase();
        });
      }, Nv = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          My(e.replace(zy, "ms-"))
        ));
      }, yd = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, gd = function(e, t) {
        hl.hasOwnProperty(t) && hl[t] || (hl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(md, "")));
      }, Pv = function(e, t) {
        Lv || (Lv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Av = function(e, t) {
        us || (us = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      zv = function(e, t) {
        e.indexOf("-") > -1 ? Nv(e) : ky.test(e) ? yd(e) : md.test(t) && gd(e, t), typeof t == "number" && (isNaN(t) ? Pv(e, t) : isFinite(t) || Av(e, t));
      };
    }
    var jv = zv;
    function Ly(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : vu(i)) + ":", t += bc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || jv(i, t[i]);
          var s = bc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Hv(e) {
      var t = {};
      for (var a in e)
        for (var i = os[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Py(e, t) {
      {
        if (!t)
          return;
        var a = Hv(e), i = Hv(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (l[v])
              continue;
            l[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ci = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ss = Vt({
      menuitem: !0
    }, ci), Fv = "__html";
    function Ec(e, t) {
      if (t) {
        if (ss[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function zo(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var cs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, wc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, hu = {}, Ay = new RegExp("^(aria)-[" + j + "]*$"), mu = new RegExp("^(aria)[A-Z][" + j + "]*$");
    function Sd(e, t) {
      {
        if (xe.call(hu, t) && hu[t])
          return !0;
        if (mu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = wc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), hu[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), hu[t] = !0, !0;
        }
        if (Ay.test(t)) {
          var l = t.toLowerCase(), s = wc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return hu[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), hu[t] = !0, !0;
        }
      }
      return !0;
    }
    function fs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Sd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function bd(e, t) {
      zo(e, t) || fs(e, t);
    }
    var Ed = !1;
    function Rc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ed && (Ed = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ml = function() {
    };
    {
      var Er = {}, wd = /^on./, Cc = /^on[^A-Z]/, Bv = new RegExp("^(aria)-[" + j + "]*$"), Vv = new RegExp("^(aria)[A-Z][" + j + "]*$");
      ml = function(e, t, a, i) {
        if (xe.call(Er, t) && Er[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Er[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Er[t] = !0, !0;
          if (wd.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Er[t] = !0, !0;
        } else if (wd.test(t))
          return Cc.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Er[t] = !0, !0;
        if (Bv.test(t) || Vv.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Er[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Er[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Er[t] = !0, !0;
        var v = an(t), R = v !== null && v.type === et;
        if (cs.hasOwnProperty(l)) {
          var T = cs[l];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Er[t] = !0, !0;
        } else if (!R && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Er[t] = !0, !0;
        return typeof a == "boolean" && Yt(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Er[t] = !0, !0) : R ? !0 : Yt(t, a, v, !1) ? (Er[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Rt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Er[t] = !0), !0);
      };
    }
    var Iv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = ml(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function $v(e, t, a) {
      zo(e, t) || Iv(e, t, a);
    }
    var Rd = 1, xc = 2, Ua = 4, Cd = Rd | xc | Ua, yl = null;
    function jy(e) {
      yl !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), yl = e;
    }
    function Uy() {
      yl === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), yl = null;
    }
    function ds(e) {
      return e === yl;
    }
    function xd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ki ? t.parentNode : t;
    }
    var Tc = null, gl = null, yn = null;
    function _c(e) {
      var t = ju(e);
      if (t) {
        if (typeof Tc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Jh(a);
          Tc(t.stateNode, t.type, i);
        }
      }
    }
    function Oc(e) {
      Tc = e;
    }
    function yu(e) {
      gl ? yn ? yn.push(e) : yn = [e] : gl = e;
    }
    function Wv() {
      return gl !== null || yn !== null;
    }
    function Dc() {
      if (gl) {
        var e = gl, t = yn;
        if (gl = null, yn = null, _c(e), t)
          for (var a = 0; a < t.length; a++)
            _c(t[a]);
      }
    }
    var gu = function(e, t) {
      return e(t);
    }, ps = function() {
    }, Mo = !1;
    function qv() {
      var e = Wv();
      e && (ps(), Dc());
    }
    function Yv(e, t, a) {
      if (Mo)
        return e(t, a);
      Mo = !0;
      try {
        return gu(e, t, a);
      } finally {
        Mo = !1, qv();
      }
    }
    function Hy(e, t, a) {
      gu = e, ps = a;
    }
    function Gv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function kc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Gv(t));
        default:
          return !1;
      }
    }
    function Lo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Jh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (kc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var vs = !1;
    if (rt)
      try {
        var Sl = {};
        Object.defineProperty(Sl, "passive", {
          get: function() {
            vs = !0;
          }
        }), window.addEventListener("test", Sl, Sl), window.removeEventListener("test", Sl, Sl);
      } catch {
        vs = !1;
      }
    function zc(e, t, a, i, l, s, f, p, v) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (T) {
        this.onError(T);
      }
    }
    var Mc = zc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Td = document.createElement("react");
      Mc = function(t, a, i, l, s, f, p, v, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), G = !1, q = !0, ue = window.event, de = Object.getOwnPropertyDescriptor(window, "event");
        function Ee() {
          Td.removeEventListener(we, wt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = ue);
        }
        var nt = Array.prototype.slice.call(arguments, 3);
        function wt() {
          G = !0, Ee(), a.apply(i, nt), q = !1;
        }
        var mt, tn = !1, Xt = !1;
        function te(ne) {
          if (mt = ne.error, tn = !0, mt === null && ne.colno === 0 && ne.lineno === 0 && (Xt = !0), ne.defaultPrevented && mt != null && typeof mt == "object")
            try {
              mt._suppressLogging = !0;
            } catch {
            }
        }
        var we = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", te), Td.addEventListener(we, wt, !1), T.initEvent(we, !1, !1), Td.dispatchEvent(T), de && Object.defineProperty(window, "event", de), G && q && (tn ? Xt && (mt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : mt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(mt)), window.removeEventListener("error", te), !G)
          return Ee(), zc.apply(this, arguments);
      };
    }
    var Qv = Mc, Su = !1, Lc = null, bu = !1, _i = null, Xv = {
      onError: function(e) {
        Su = !0, Lc = e;
      }
    };
    function No(e, t, a, i, l, s, f, p, v) {
      Su = !1, Lc = null, Qv.apply(Xv, arguments);
    }
    function Oi(e, t, a, i, l, s, f, p, v) {
      if (No.apply(this, arguments), Su) {
        var R = ms();
        bu || (bu = !0, _i = R);
      }
    }
    function hs() {
      if (bu) {
        var e = _i;
        throw bu = !1, _i = null, e;
      }
    }
    function Ji() {
      return Su;
    }
    function ms() {
      if (Su) {
        var e = Lc;
        return Su = !1, Lc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Eu(e) {
      return e._reactInternals;
    }
    function Fy(e) {
      return e._reactInternals !== void 0;
    }
    function bl(e, t) {
      e._reactInternals = t;
    }
    var St = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), Fn = (
      /*                    */
      2
    ), Zt = (
      /*                       */
      4
    ), Ha = (
      /*                */
      16
    ), Fa = (
      /*                 */
      32
    ), Mn = (
      /*                     */
      64
    ), yt = (
      /*                   */
      128
    ), Lr = (
      /*            */
      256
    ), $n = (
      /*                          */
      512
    ), sr = (
      /*                     */
      1024
    ), ia = (
      /*                      */
      2048
    ), oa = (
      /*                    */
      4096
    ), Jn = (
      /*                   */
      8192
    ), wu = (
      /*             */
      16384
    ), Kv = (
      /*               */
      32767
    ), ys = (
      /*                   */
      32768
    ), pr = (
      /*                */
      65536
    ), Nc = (
      /* */
      131072
    ), Di = (
      /*                       */
      1048576
    ), Ru = (
      /*                    */
      2097152
    ), eo = (
      /*                 */
      4194304
    ), Pc = (
      /*                */
      8388608
    ), Po = (
      /*               */
      16777216
    ), ki = (
      /*              */
      33554432
    ), Ao = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Zt | sr | 0
    ), jo = Fn | Zt | Ha | Fa | $n | oa | Jn, Uo = Zt | Mn | $n | Jn, to = ia | Ha, er = eo | Pc | Ru, Ba = h.ReactCurrentOwner;
    function wa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Fn | oa)) !== St && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function zi(e) {
      if (e.tag === E) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Mi(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function El(e) {
      return wa(e) === e;
    }
    function Zv(e) {
      {
        var t = Ba.current;
        if (t !== null && t.tag === V) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Eu(e);
      return l ? wa(l) === l : !1;
    }
    function Ac(e) {
      if (wa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function jc(e) {
      var t = e.alternate;
      if (!t) {
        var a = wa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = l = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Ac(s), e;
            if (v === l)
              return Ac(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var R = !1, T = s.child; T; ) {
            if (T === i) {
              R = !0, i = s, l = f;
              break;
            }
            if (T === l) {
              R = !0, l = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!R) {
            for (T = f.child; T; ) {
              if (T === i) {
                R = !0, i = f, l = s;
                break;
              }
              if (T === l) {
                R = !0, l = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function la(e) {
      var t = jc(e);
      return t !== null ? ua(t) : null;
    }
    function ua(e) {
      if (e.tag === ye || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ua(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function An(e) {
      var t = jc(e);
      return t !== null ? Va(t) : null;
    }
    function Va(e) {
      if (e.tag === ye || e.tag === ke)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== J) {
          var a = Va(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var _d = w.unstable_scheduleCallback, Jv = w.unstable_cancelCallback, Od = w.unstable_shouldYield, Dd = w.unstable_requestPaint, cr = w.unstable_now, Uc = w.unstable_getCurrentPriorityLevel, gs = w.unstable_ImmediatePriority, Ho = w.unstable_UserBlockingPriority, no = w.unstable_NormalPriority, By = w.unstable_LowPriority, wl = w.unstable_IdlePriority, Hc = w.unstable_yieldValue, eh = w.unstable_setDisableYieldValue, Rl = null, qn = null, tt = null, Ra = !1, sa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Cu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = Vt({}, e, {
          getLaneLabelMap: Cl,
          injectProfilingHooks: Ia
        })), Rl = t.inject(e), qn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function kd(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(Rl, e, t);
        } catch (a) {
          Ra || (Ra = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function zd(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & yt) === yt;
          if (ze) {
            var i;
            switch (t) {
              case Ir:
                i = gs;
                break;
              case Ni:
                i = Ho;
                break;
              case $a:
                i = no;
                break;
              case Wa:
                i = wl;
                break;
              default:
                i = no;
                break;
            }
            qn.onCommitFiberRoot(Rl, e, i, a);
          }
        } catch (l) {
          Ra || (Ra = !0, g("React instrumentation encountered an error: %s", l));
        }
    }
    function Md(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(Rl, e);
        } catch (t) {
          Ra || (Ra = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ld(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(Rl, e);
        } catch (t) {
          Ra || (Ra = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Bn(e) {
      if (typeof Hc == "function" && (eh(e), $(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(Rl, e);
        } catch (t) {
          Ra || (Ra = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ia(e) {
      tt = e;
    }
    function Cl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _l; a++) {
          var i = ah(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Nd(e) {
      tt !== null && typeof tt.markCommitStarted == "function" && tt.markCommitStarted(e);
    }
    function Pd() {
      tt !== null && typeof tt.markCommitStopped == "function" && tt.markCommitStopped();
    }
    function Ca(e) {
      tt !== null && typeof tt.markComponentRenderStarted == "function" && tt.markComponentRenderStarted(e);
    }
    function xa() {
      tt !== null && typeof tt.markComponentRenderStopped == "function" && tt.markComponentRenderStopped();
    }
    function Ad(e) {
      tt !== null && typeof tt.markComponentPassiveEffectMountStarted == "function" && tt.markComponentPassiveEffectMountStarted(e);
    }
    function th() {
      tt !== null && typeof tt.markComponentPassiveEffectMountStopped == "function" && tt.markComponentPassiveEffectMountStopped();
    }
    function ro(e) {
      tt !== null && typeof tt.markComponentPassiveEffectUnmountStarted == "function" && tt.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fo() {
      tt !== null && typeof tt.markComponentPassiveEffectUnmountStopped == "function" && tt.markComponentPassiveEffectUnmountStopped();
    }
    function Fc(e) {
      tt !== null && typeof tt.markComponentLayoutEffectMountStarted == "function" && tt.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      tt !== null && typeof tt.markComponentLayoutEffectMountStopped == "function" && tt.markComponentLayoutEffectMountStopped();
    }
    function Ss(e) {
      tt !== null && typeof tt.markComponentLayoutEffectUnmountStarted == "function" && tt.markComponentLayoutEffectUnmountStarted(e);
    }
    function jd() {
      tt !== null && typeof tt.markComponentLayoutEffectUnmountStopped == "function" && tt.markComponentLayoutEffectUnmountStopped();
    }
    function bs(e, t, a) {
      tt !== null && typeof tt.markComponentErrored == "function" && tt.markComponentErrored(e, t, a);
    }
    function Li(e, t, a) {
      tt !== null && typeof tt.markComponentSuspended == "function" && tt.markComponentSuspended(e, t, a);
    }
    function Es(e) {
      tt !== null && typeof tt.markLayoutEffectsStarted == "function" && tt.markLayoutEffectsStarted(e);
    }
    function ws() {
      tt !== null && typeof tt.markLayoutEffectsStopped == "function" && tt.markLayoutEffectsStopped();
    }
    function xl(e) {
      tt !== null && typeof tt.markPassiveEffectsStarted == "function" && tt.markPassiveEffectsStarted(e);
    }
    function Ud() {
      tt !== null && typeof tt.markPassiveEffectsStopped == "function" && tt.markPassiveEffectsStopped();
    }
    function Tl(e) {
      tt !== null && typeof tt.markRenderStarted == "function" && tt.markRenderStarted(e);
    }
    function rh() {
      tt !== null && typeof tt.markRenderYielded == "function" && tt.markRenderYielded();
    }
    function Bc() {
      tt !== null && typeof tt.markRenderStopped == "function" && tt.markRenderStopped();
    }
    function Vn(e) {
      tt !== null && typeof tt.markRenderScheduled == "function" && tt.markRenderScheduled(e);
    }
    function Vc(e, t) {
      tt !== null && typeof tt.markForceUpdateScheduled == "function" && tt.markForceUpdateScheduled(e, t);
    }
    function Rs(e, t) {
      tt !== null && typeof tt.markStateUpdateScheduled == "function" && tt.markStateUpdateScheduled(e, t);
    }
    var bt = (
      /*                         */
      0
    ), qt = (
      /*                 */
      1
    ), cn = (
      /*                    */
      2
    ), wn = (
      /*               */
      8
    ), fn = (
      /*              */
      16
    ), tr = Math.clz32 ? Math.clz32 : Cs, vr = Math.log, Ic = Math.LN2;
    function Cs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (vr(t) / Ic | 0) | 0;
    }
    var _l = 31, Le = (
      /*                        */
      0
    ), on = (
      /*                          */
      0
    ), Ot = (
      /*                        */
      1
    ), Bo = (
      /*    */
      2
    ), di = (
      /*             */
      4
    ), Nr = (
      /*            */
      8
    ), Yn = (
      /*                     */
      16
    ), ao = (
      /*                */
      32
    ), Vo = (
      /*                       */
      4194240
    ), Ol = (
      /*                        */
      64
    ), $c = (
      /*                        */
      128
    ), Wc = (
      /*                        */
      256
    ), qc = (
      /*                        */
      512
    ), Yc = (
      /*                        */
      1024
    ), Gc = (
      /*                        */
      2048
    ), Qc = (
      /*                        */
      4096
    ), Xc = (
      /*                        */
      8192
    ), Kc = (
      /*                        */
      16384
    ), Dl = (
      /*                       */
      32768
    ), Zc = (
      /*                       */
      65536
    ), xu = (
      /*                       */
      131072
    ), Tu = (
      /*                       */
      262144
    ), Jc = (
      /*                       */
      524288
    ), xs = (
      /*                       */
      1048576
    ), ef = (
      /*                       */
      2097152
    ), Ts = (
      /*                            */
      130023424
    ), kl = (
      /*                             */
      4194304
    ), tf = (
      /*                             */
      8388608
    ), _s = (
      /*                             */
      16777216
    ), nf = (
      /*                             */
      33554432
    ), rf = (
      /*                             */
      67108864
    ), Hd = kl, Os = (
      /*          */
      134217728
    ), Fd = (
      /*                          */
      268435455
    ), Ds = (
      /*               */
      268435456
    ), zl = (
      /*                        */
      536870912
    ), ca = (
      /*                   */
      1073741824
    );
    function ah(e) {
      {
        if (e & Ot)
          return "Sync";
        if (e & Bo)
          return "InputContinuousHydration";
        if (e & di)
          return "InputContinuous";
        if (e & Nr)
          return "DefaultHydration";
        if (e & Yn)
          return "Default";
        if (e & ao)
          return "TransitionHydration";
        if (e & Vo)
          return "Transition";
        if (e & Ts)
          return "Retry";
        if (e & Os)
          return "SelectiveHydration";
        if (e & Ds)
          return "IdleHydration";
        if (e & zl)
          return "Idle";
        if (e & ca)
          return "Offscreen";
      }
    }
    var On = -1, Ml = Ol, af = kl;
    function ks(e) {
      switch (Io(e)) {
        case Ot:
          return Ot;
        case Bo:
          return Bo;
        case di:
          return di;
        case Nr:
          return Nr;
        case Yn:
          return Yn;
        case ao:
          return ao;
        case Ol:
        case $c:
        case Wc:
        case qc:
        case Yc:
        case Gc:
        case Qc:
        case Xc:
        case Kc:
        case Dl:
        case Zc:
        case xu:
        case Tu:
        case Jc:
        case xs:
        case ef:
          return e & Vo;
        case kl:
        case tf:
        case _s:
        case nf:
        case rf:
          return e & Ts;
        case Os:
          return Os;
        case Ds:
          return Ds;
        case zl:
          return zl;
        case ca:
          return ca;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function of(e, t) {
      var a = e.pendingLanes;
      if (a === Le)
        return Le;
      var i = Le, l = e.suspendedLanes, s = e.pingedLanes, f = a & Fd;
      if (f !== Le) {
        var p = f & ~l;
        if (p !== Le)
          i = ks(p);
        else {
          var v = f & s;
          v !== Le && (i = ks(v));
        }
      } else {
        var R = a & ~l;
        R !== Le ? i = ks(R) : s !== Le && (i = ks(s));
      }
      if (i === Le)
        return Le;
      if (t !== Le && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === Le) {
        var T = Io(i), G = Io(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= G || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Yn && (G & Vo) !== Le
        )
          return t;
      }
      (i & di) !== Le && (i |= a & Yn);
      var q = e.entangledLanes;
      if (q !== Le)
        for (var ue = e.entanglements, de = i & q; de > 0; ) {
          var Ee = nr(de), nt = 1 << Ee;
          i |= ue[Ee], de &= ~nt;
        }
      return i;
    }
    function pi(e, t) {
      for (var a = e.eventTimes, i = On; t > 0; ) {
        var l = nr(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Bd(e, t) {
      switch (e) {
        case Ot:
        case Bo:
        case di:
          return t + 250;
        case Nr:
        case Yn:
        case ao:
        case Ol:
        case $c:
        case Wc:
        case qc:
        case Yc:
        case Gc:
        case Qc:
        case Xc:
        case Kc:
        case Dl:
        case Zc:
        case xu:
        case Tu:
        case Jc:
        case xs:
        case ef:
          return t + 5e3;
        case kl:
        case tf:
        case _s:
        case nf:
        case rf:
          return On;
        case Os:
        case Ds:
        case zl:
        case ca:
          return On;
        default:
          return g("Should have found matching lanes. This is a bug in React."), On;
      }
    }
    function lf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = nr(f), v = 1 << p, R = s[p];
        R === On ? ((v & i) === Le || (v & l) !== Le) && (s[p] = Bd(v, t)) : R <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ih(e) {
      return ks(e.pendingLanes);
    }
    function uf(e) {
      var t = e.pendingLanes & ~ca;
      return t !== Le ? t : t & ca ? ca : Le;
    }
    function oh(e) {
      return (e & Ot) !== Le;
    }
    function zs(e) {
      return (e & Fd) !== Le;
    }
    function Ll(e) {
      return (e & Ts) === e;
    }
    function Vd(e) {
      var t = Ot | di | Yn;
      return (e & t) === Le;
    }
    function Id(e) {
      return (e & Vo) === e;
    }
    function sf(e, t) {
      var a = Bo | di | Nr | Yn;
      return (t & a) !== Le;
    }
    function lh(e, t) {
      return (t & e.expiredLanes) !== Le;
    }
    function $d(e) {
      return (e & Vo) !== Le;
    }
    function Wd() {
      var e = Ml;
      return Ml <<= 1, (Ml & Vo) === Le && (Ml = Ol), e;
    }
    function uh() {
      var e = af;
      return af <<= 1, (af & Ts) === Le && (af = kl), e;
    }
    function Io(e) {
      return e & -e;
    }
    function Ms(e) {
      return Io(e);
    }
    function nr(e) {
      return 31 - tr(e);
    }
    function wr(e) {
      return nr(e);
    }
    function fa(e, t) {
      return (e & t) !== Le;
    }
    function Nl(e, t) {
      return (e & t) === t;
    }
    function Ft(e, t) {
      return e | t;
    }
    function Ls(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== on && e < t ? e : t;
    }
    function Ns(e) {
      for (var t = [], a = 0; a < _l; a++)
        t.push(e);
      return t;
    }
    function _u(e, t, a) {
      e.pendingLanes |= t, t !== zl && (e.suspendedLanes = Le, e.pingedLanes = Le);
      var i = e.eventTimes, l = wr(t);
      i[l] = a;
    }
    function fh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = nr(i), s = 1 << l;
        a[l] = On, i &= ~s;
      }
    }
    function cf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Yd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Le, e.pingedLanes = Le, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = nr(f), v = 1 << p;
        i[p] = Le, l[p] = On, s[p] = On, f &= ~v;
      }
    }
    function ff(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = nr(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Gd(e, t) {
      var a = Io(t), i;
      switch (a) {
        case di:
          i = Bo;
          break;
        case Yn:
          i = Nr;
          break;
        case Ol:
        case $c:
        case Wc:
        case qc:
        case Yc:
        case Gc:
        case Qc:
        case Xc:
        case Kc:
        case Dl:
        case Zc:
        case xu:
        case Tu:
        case Jc:
        case xs:
        case ef:
        case kl:
        case tf:
        case _s:
        case nf:
        case rf:
          i = ao;
          break;
        case zl:
          i = Ds;
          break;
        default:
          i = on;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== on ? on : i;
    }
    function Ps(e, t, a) {
      if (sa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = wr(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function dh(e, t) {
      if (sa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = wr(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Qd(e, t) {
      return null;
    }
    var Ir = Ot, Ni = di, $a = Yn, Wa = zl, As = on;
    function qa() {
      return As;
    }
    function rr(e) {
      As = e;
    }
    function ph(e, t) {
      var a = As;
      try {
        return As = e, t();
      } finally {
        As = a;
      }
    }
    function vh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function js(e, t) {
      return e > t ? e : t;
    }
    function hr(e, t) {
      return e !== 0 && e < t;
    }
    function hh(e) {
      var t = Io(e);
      return hr(Ir, t) ? hr(Ni, t) ? zs(t) ? $a : Wa : Ni : Ir;
    }
    function df(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Us;
    function Pr(e) {
      Us = e;
    }
    function Vy(e) {
      Us(e);
    }
    var ut;
    function Ou(e) {
      ut = e;
    }
    var pf;
    function mh(e) {
      pf = e;
    }
    var yh;
    function Hs(e) {
      yh = e;
    }
    var Fs;
    function Xd(e) {
      Fs = e;
    }
    var vf = !1, Bs = [], io = null, Pi = null, Ai = null, Gn = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), Wr = [], gh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Sh(e) {
      return gh.indexOf(e) > -1;
    }
    function vi(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Kd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          io = null;
          break;
        case "dragenter":
        case "dragleave":
          Pi = null;
          break;
        case "mouseover":
        case "mouseout":
          Ai = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Gn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          $r.delete(i);
          break;
        }
      }
    }
    function da(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = vi(t, a, i, l, s);
        if (t !== null) {
          var p = ju(t);
          p !== null && ut(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return l !== null && v.indexOf(l) === -1 && v.push(l), e;
    }
    function Iy(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return io = da(io, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Pi = da(Pi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Ai = da(Ai, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = l, R = v.pointerId;
          return Gn.set(R, da(Gn.get(R) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var T = l, G = T.pointerId;
          return $r.set(G, da($r.get(G) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function Zd(e) {
      var t = Js(e.target);
      if (t !== null) {
        var a = wa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === E) {
            var l = zi(a);
            if (l !== null) {
              e.blockedOn = l, Fs(e.priority, function() {
                pf(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if (df(s)) {
              e.blockedOn = Mi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function bh(e) {
      for (var t = yh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Wr.length && hr(t, Wr[i].priority); i++)
        ;
      Wr.splice(i, 0, a), i === 0 && Zd(a);
    }
    function Vs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ku(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          jy(s), l.target.dispatchEvent(s), Uy();
        } else {
          var f = ju(i);
          return f !== null && ut(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Jd(e, t, a) {
      Vs(e) && a.delete(t);
    }
    function $y() {
      vf = !1, io !== null && Vs(io) && (io = null), Pi !== null && Vs(Pi) && (Pi = null), Ai !== null && Vs(Ai) && (Ai = null), Gn.forEach(Jd), $r.forEach(Jd);
    }
    function $o(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, $y)));
    }
    function Pl(e) {
      if (Bs.length > 0) {
        $o(Bs[0], e);
        for (var t = 1; t < Bs.length; t++) {
          var a = Bs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      io !== null && $o(io, e), Pi !== null && $o(Pi, e), Ai !== null && $o(Ai, e);
      var i = function(p) {
        return $o(p, e);
      };
      Gn.forEach(i), $r.forEach(i);
      for (var l = 0; l < Wr.length; l++) {
        var s = Wr[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Wr.length > 0; ) {
        var f = Wr[0];
        if (f.blockedOn !== null)
          break;
        Zd(f), f.blockedOn === null && Wr.shift();
      }
    }
    var Rr = h.ReactCurrentBatchConfig, Jt = !0;
    function fr(e) {
      Jt = !!e;
    }
    function ar() {
      return Jt;
    }
    function Cr(e, t, a) {
      var i = hf(t), l;
      switch (i) {
        case Ir:
          l = Ta;
          break;
        case Ni:
          l = Du;
          break;
        case $a:
        default:
          l = Qn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ta(e, t, a, i) {
      var l = qa(), s = Rr.transition;
      Rr.transition = null;
      try {
        rr(Ir), Qn(e, t, a, i);
      } finally {
        rr(l), Rr.transition = s;
      }
    }
    function Du(e, t, a, i) {
      var l = qa(), s = Rr.transition;
      Rr.transition = null;
      try {
        rr(Ni), Qn(e, t, a, i);
      } finally {
        rr(l), Rr.transition = s;
      }
    }
    function Qn(e, t, a, i) {
      Jt && Is(e, t, a, i);
    }
    function Is(e, t, a, i) {
      var l = ku(e, t, a, i);
      if (l === null) {
        lg(e, t, i, ji, a), Kd(e, i);
        return;
      }
      if (Iy(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Kd(e, i), t & Ua && Sh(e)) {
        for (; l !== null; ) {
          var s = ju(l);
          s !== null && Vy(s);
          var f = ku(e, t, a, i);
          if (f === null && lg(e, t, i, ji, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      lg(e, t, i, null, a);
    }
    var ji = null;
    function ku(e, t, a, i) {
      ji = null;
      var l = xd(i), s = Js(l);
      if (s !== null) {
        var f = wa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === E) {
            var v = zi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === I) {
            var R = f.stateNode;
            if (df(R))
              return Mi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return ji = s, null;
    }
    function hf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ir;
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
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ni;
        case "message": {
          var t = Uc();
          switch (t) {
            case gs:
              return Ir;
            case Ho:
              return Ni;
            case no:
            case By:
              return $a;
            case wl:
              return Wa;
            default:
              return $a;
          }
        }
        default:
          return $a;
      }
    }
    function $s(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function pa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ep(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function zu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var _a = null, Mu = null, Al = null;
    function Wo(e) {
      return _a = e, Mu = Ws(), !0;
    }
    function mf() {
      _a = null, Mu = null, Al = null;
    }
    function oo() {
      if (Al)
        return Al;
      var e, t = Mu, a = t.length, i, l = Ws(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Al = l.slice(e, p), Al;
    }
    function Ws() {
      return "value" in _a ? _a.value : _a.textContent;
    }
    function qo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Lu() {
      return !0;
    }
    function qs() {
      return !1;
    }
    function Ar(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = Lu : this.isDefaultPrevented = qs, this.isPropagationStopped = qs, this;
      }
      return Vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Lu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Lu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Lu
      }), t;
    }
    var ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ui = Ar(ir), qr = Vt({}, ir, {
      view: 0,
      detail: 0
    }), va = Ar(qr), yf, Ys, jl;
    function Wy(e) {
      e !== jl && (jl && e.type === "mousemove" ? (yf = e.screenX - jl.screenX, Ys = e.screenY - jl.screenY) : (yf = 0, Ys = 0), jl = e);
    }
    var hi = Vt({}, qr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Wy(e), yf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ys;
      }
    }), tp = Ar(hi), np = Vt({}, hi, {
      dataTransfer: 0
    }), Ul = Ar(np), rp = Vt({}, qr, {
      relatedTarget: 0
    }), lo = Ar(rp), Eh = Vt({}, ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), wh = Ar(Eh), ap = Vt({}, ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), gf = Ar(ap), qy = Vt({}, ir, {
      data: 0
    }), Rh = Ar(qy), Ch = Rh, xh = {
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
    }, Hl = {
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
    };
    function Yy(e) {
      if (e.key) {
        var t = xh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = qo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Hl[e.keyCode] || "Unidentified" : "";
    }
    var Nu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Th(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Nu[e];
      return i ? !!a[i] : !1;
    }
    function jn(e) {
      return Th;
    }
    var Gy = Vt({}, qr, {
      key: Yy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? qo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), _h = Ar(Gy), Qy = Vt({}, hi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Oh = Ar(Qy), Dh = Vt({}, qr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jn
    }), kh = Ar(Dh), Xy = Vt({}, ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ya = Ar(Xy), ip = Vt({}, hi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ky = Ar(ip), Yo = [9, 13, 27, 32], Gs = 229, uo = rt && "CompositionEvent" in window, Go = null;
    rt && "documentMode" in document && (Go = document.documentMode);
    var op = rt && "TextEvent" in window && !Go, Sf = rt && (!uo || Go && Go > 8 && Go <= 11), zh = 32, bf = String.fromCharCode(zh);
    function Zy() {
      Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Re("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Re("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Re("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var lp = !1;
    function Mh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ef(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function wf(e, t) {
      return e === "keydown" && t.keyCode === Gs;
    }
    function up(e, t) {
      switch (e) {
        case "keyup":
          return Yo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Gs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Rf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Lh(e) {
      return e.locale === "ko";
    }
    var Fl = !1;
    function sp(e, t, a, i, l) {
      var s, f;
      if (uo ? s = Ef(t) : Fl ? up(t, i) && (s = "onCompositionEnd") : wf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Sf && !Lh(i) && (!Fl && s === "onCompositionStart" ? Fl = Wo(l) : s === "onCompositionEnd" && Fl && (f = oo()));
      var p = Fh(a, s);
      if (p.length > 0) {
        var v = new Rh(s, t, null, i, l);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var R = Rf(i);
          R !== null && (v.data = R);
        }
      }
    }
    function Cf(e, t) {
      switch (e) {
        case "compositionend":
          return Rf(t);
        case "keypress":
          var a = t.which;
          return a !== zh ? null : (lp = !0, bf);
        case "textInput":
          var i = t.data;
          return i === bf && lp ? null : i;
        default:
          return null;
      }
    }
    function cp(e, t) {
      if (Fl) {
        if (e === "compositionend" || !uo && up(e, t)) {
          var a = oo();
          return mf(), Fl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Mh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Sf && !Lh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function xf(e, t, a, i, l) {
      var s;
      if (op ? s = Cf(t, i) : s = cp(t, i), !s)
        return null;
      var f = Fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ch("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Nh(e, t, a, i, l, s, f) {
      sp(e, t, a, i, l), xf(e, t, a, i, l);
    }
    var Jy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Qs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Jy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function eg(e) {
      if (!rt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Xs() {
      Re("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ph(e, t, a, i) {
      yu(i);
      var l = Fh(t, "onChange");
      if (l.length > 0) {
        var s = new Ui("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var Qo = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Ph(t, n, e, xd(e)), Yv(u, t);
    }
    function u(e) {
      EE(e, 0);
    }
    function c(e) {
      var t = zf(e);
      if (xi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var S = !1;
    rt && (S = eg("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      Qo = e, n = t, Qo.attachEvent("onpropertychange", fe);
    }
    function U() {
      Qo && (Qo.detachEvent("onpropertychange", fe), Qo = null, n = null);
    }
    function fe(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function Ae(e, t, a) {
      e === "focusin" ? (U(), M(t, a)) : e === "focusout" && U();
    }
    function Ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function Ne(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function it(e, t) {
      if (e === "click")
        return c(t);
    }
    function ft(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function vt(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Et(e, "number", e.value);
    }
    function Xn(e, t, a, i, l, s, f) {
      var p = a ? zf(a) : window, v, R;
      if (r(p) ? v = d : Qs(p) ? S ? v = ft : (v = Ve, R = Ae) : Ne(p) && (v = it), v) {
        var T = v(t, a);
        if (T) {
          Ph(e, T, i, l);
          return;
        }
      }
      R && R(t, p, a), t === "focusout" && vt(p);
    }
    function ee() {
      Be("onMouseEnter", ["mouseout", "mouseover"]), Be("onMouseLeave", ["mouseout", "mouseover"]), Be("onPointerEnter", ["pointerout", "pointerover"]), Be("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Y(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ds(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (Js(R) || Cp(R)))
          return;
      }
      if (!(!v && !p)) {
        var T;
        if (l.window === l)
          T = l;
        else {
          var G = l.ownerDocument;
          G ? T = G.defaultView || G.parentWindow : T = window;
        }
        var q, ue;
        if (v) {
          var de = i.relatedTarget || i.toElement;
          if (q = a, ue = de ? Js(de) : null, ue !== null) {
            var Ee = wa(ue);
            (ue !== Ee || ue.tag !== ye && ue.tag !== ke) && (ue = null);
          }
        } else
          q = null, ue = a;
        if (q !== ue) {
          var nt = tp, wt = "onMouseLeave", mt = "onMouseEnter", tn = "mouse";
          (t === "pointerout" || t === "pointerover") && (nt = Oh, wt = "onPointerLeave", mt = "onPointerEnter", tn = "pointer");
          var Xt = q == null ? T : zf(q), te = ue == null ? T : zf(ue), we = new nt(wt, tn + "leave", q, i, l);
          we.target = Xt, we.relatedTarget = te;
          var ne = null, Ie = Js(l);
          if (Ie === a) {
            var lt = new nt(mt, tn + "enter", ue, i, l);
            lt.target = te, lt.relatedTarget = Xt, ne = lt;
          }
          vx(e, we, ne, q, ue);
        }
      }
    }
    function ae(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var je = typeof Object.is == "function" ? Object.is : ae;
    function dt(e, t) {
      if (je(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!xe.call(t, s) || !je(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ct(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Tt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function kt(e, t) {
      for (var a = Ct(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Ki) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = Ct(Tt(a));
      }
    }
    function mr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return dn(e, l, s, f, p);
    }
    function dn(e, t, a, i, l) {
      var s = 0, f = -1, p = -1, v = 0, R = 0, T = e, G = null;
      e: for (; ; ) {
        for (var q = null; T === t && (a === 0 || T.nodeType === Ki) && (f = s + a), T === i && (l === 0 || T.nodeType === Ki) && (p = s + l), T.nodeType === Ki && (s += T.nodeValue.length), (q = T.firstChild) !== null; )
          G = T, T = q;
        for (; ; ) {
          if (T === e)
            break e;
          if (G === t && ++v === a && (f = s), G === i && ++R === l && (p = s), (q = T.nextSibling) !== null)
            break;
          T = G, G = T.parentNode;
        }
        T = q;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Xo(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var R = kt(e, f), T = kt(e, p);
        if (R && T) {
          if (l.rangeCount === 1 && l.anchorNode === R.node && l.anchorOffset === R.offset && l.focusNode === T.node && l.focusOffset === T.offset)
            return;
          var G = a.createRange();
          G.setStart(R.node, R.offset), l.removeAllRanges(), f > p ? (l.addRange(G), l.extend(T.node, T.offset)) : (G.setEnd(T.node, T.offset), l.addRange(G));
        }
      }
    }
    function Ah(e) {
      return e && e.nodeType === Ki;
    }
    function cE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ah(e) ? !1 : Ah(t) ? cE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function XC(e) {
      return e && e.ownerDocument && cE(e.ownerDocument.documentElement, e);
    }
    function KC(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function fE() {
      for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
        if (KC(t))
          e = t.contentWindow;
        else
          return t;
        t = ja(e.document);
      }
      return t;
    }
    function tg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ZC() {
      var e = fE();
      return {
        focusedElem: e,
        selectionRange: tg(e) ? ex(e) : null
      };
    }
    function JC(e) {
      var t = fE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && XC(a)) {
        i !== null && tg(a) && tx(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === aa && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var p = l[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function ex(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = mr(e), t || {
        start: 0,
        end: 0
      };
    }
    function tx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Xo(e, t);
    }
    var nx = rt && "documentMode" in document && document.documentMode <= 11;
    function rx() {
      Re("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Tf = null, ng = null, fp = null, rg = !1;
    function ax(e) {
      if ("selectionStart" in e && tg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function ix(e) {
      return e.window === e ? e.document : e.nodeType === Zi ? e : e.ownerDocument;
    }
    function dE(e, t, a) {
      var i = ix(a);
      if (!(rg || Tf == null || Tf !== ja(i))) {
        var l = ax(Tf);
        if (!fp || !dt(fp, l)) {
          fp = l;
          var s = Fh(ng, "onSelect");
          if (s.length > 0) {
            var f = new Ui("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Tf;
          }
        }
      }
    }
    function ox(e, t, a, i, l, s, f) {
      var p = a ? zf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Qs(p) || p.contentEditable === "true") && (Tf = p, ng = a, fp = null);
          break;
        case "focusout":
          Tf = null, ng = null, fp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          rg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          rg = !1, dE(e, i, l);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (nx)
            break;
        // falls through
        case "keydown":
        case "keyup":
          dE(e, i, l);
      }
    }
    function jh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var _f = {
      animationend: jh("Animation", "AnimationEnd"),
      animationiteration: jh("Animation", "AnimationIteration"),
      animationstart: jh("Animation", "AnimationStart"),
      transitionend: jh("Transition", "TransitionEnd")
    }, ag = {}, pE = {};
    rt && (pE = document.createElement("div").style, "AnimationEvent" in window || (delete _f.animationend.animation, delete _f.animationiteration.animation, delete _f.animationstart.animation), "TransitionEvent" in window || delete _f.transitionend.transition);
    function Uh(e) {
      if (ag[e])
        return ag[e];
      if (!_f[e])
        return e;
      var t = _f[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in pE)
          return ag[e] = t[a];
      return e;
    }
    var vE = Uh("animationend"), hE = Uh("animationiteration"), mE = Uh("animationstart"), yE = Uh("transitionend"), gE = /* @__PURE__ */ new Map(), SE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Pu(e, t) {
      gE.set(e, t), Re(t, [e]);
    }
    function lx() {
      for (var e = 0; e < SE.length; e++) {
        var t = SE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Pu(a, "on" + i);
      }
      Pu(vE, "onAnimationEnd"), Pu(hE, "onAnimationIteration"), Pu(mE, "onAnimationStart"), Pu("dblclick", "onDoubleClick"), Pu("focusin", "onFocus"), Pu("focusout", "onBlur"), Pu(yE, "onTransitionEnd");
    }
    function ux(e, t, a, i, l, s, f) {
      var p = gE.get(t);
      if (p !== void 0) {
        var v = Ui, R = t;
        switch (t) {
          case "keypress":
            if (qo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = _h;
            break;
          case "focusin":
            R = "focus", v = lo;
            break;
          case "focusout":
            R = "blur", v = lo;
            break;
          case "beforeblur":
          case "afterblur":
            v = lo;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = tp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ul;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = kh;
            break;
          case vE:
          case hE:
          case mE:
            v = wh;
            break;
          case yE:
            v = Ya;
            break;
          case "scroll":
            v = va;
            break;
          case "wheel":
            v = Ky;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Oh;
            break;
        }
        var T = (s & Ua) !== 0;
        {
          var G = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", q = dx(a, p, i.type, T, G);
          if (q.length > 0) {
            var ue = new v(p, R, null, i, l);
            e.push({
              event: ue,
              listeners: q
            });
          }
        }
      }
    }
    lx(), ee(), Xs(), rx(), Zy();
    function sx(e, t, a, i, l, s, f) {
      ux(e, t, a, i, l, s);
      var p = (s & Cd) === 0;
      p && (Y(e, t, a, i, l), Xn(e, t, a, i, l), ox(e, t, a, i, l), Nh(e, t, a, i, l));
    }
    var dp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ig = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(dp));
    function bE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Oi(i, t, void 0, e), e.currentTarget = null;
    }
    function cx(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          bE(e, v, p), i = f;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], G = T.instance, q = T.currentTarget, ue = T.listener;
          if (G !== i && e.isPropagationStopped())
            return;
          bE(e, ue, q), i = G;
        }
    }
    function EE(e, t) {
      for (var a = (t & Ua) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        cx(s, f, a);
      }
      hs();
    }
    function fx(e, t, a, i, l) {
      var s = xd(a), f = [];
      sx(f, e, i, a, s, t), EE(f, t);
    }
    function In(e, t) {
      ig.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = BT(t), l = hx(e);
      i.has(l) || (wE(t, e, xc, a), i.add(l));
    }
    function og(e, t, a) {
      ig.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ua), wE(a, e, i, t);
    }
    var Hh = "_reactListening" + Math.random().toString(36).slice(2);
    function pp(e) {
      if (!e[Hh]) {
        e[Hh] = !0, qe.forEach(function(a) {
          a !== "selectionchange" && (ig.has(a) || og(a, !1, e), og(a, !0, e));
        });
        var t = e.nodeType === Zi ? e : e.ownerDocument;
        t !== null && (t[Hh] || (t[Hh] = !0, og("selectionchange", !1, t)));
      }
    }
    function wE(e, t, a, i, l) {
      var s = Cr(e, t, a), f = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ep(e, t, s, f) : pa(e, t, s) : f !== void 0 ? zu(e, t, s, f) : $s(e, t, s);
    }
    function RE(e, t) {
      return e === t || e.nodeType === Zn && e.parentNode === t;
    }
    function lg(e, t, a, i, l) {
      var s = i;
      if (!(t & Rd) && !(t & xc)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === I || v === J) {
              var R = p.stateNode.containerInfo;
              if (RE(R, f))
                break;
              if (v === J)
                for (var T = p.return; T !== null; ) {
                  var G = T.tag;
                  if (G === I || G === J) {
                    var q = T.stateNode.containerInfo;
                    if (RE(q, f))
                      return;
                  }
                  T = T.return;
                }
              for (; R !== null; ) {
                var ue = Js(R);
                if (ue === null)
                  return;
                var de = ue.tag;
                if (de === ye || de === ke) {
                  p = s = ue;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Yv(function() {
        return fx(e, t, a, s);
      });
    }
    function vp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function dx(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], R = e, T = null; R !== null; ) {
        var G = R, q = G.stateNode, ue = G.tag;
        if (ue === ye && q !== null && (T = q, p !== null)) {
          var de = Lo(R, p);
          de != null && v.push(vp(R, de, T));
        }
        if (l)
          break;
        R = R.return;
      }
      return v;
    }
    function Fh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === ye && f !== null) {
          var v = f, R = Lo(l, a);
          R != null && i.unshift(vp(l, R, v));
          var T = Lo(l, t);
          T != null && i.push(vp(l, T, v));
        }
        l = l.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ye);
      return e || null;
    }
    function px(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Of(s))
        l++;
      for (var f = 0, p = i; p; p = Of(p))
        f++;
      for (; l - f > 0; )
        a = Of(a), l--;
      for (; f - l > 0; )
        i = Of(i), f--;
      for (var v = l; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function CE(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, R = v.alternate, T = v.stateNode, G = v.tag;
        if (R !== null && R === i)
          break;
        if (G === ye && T !== null) {
          var q = T;
          if (l) {
            var ue = Lo(p, s);
            ue != null && f.unshift(vp(p, ue, q));
          } else if (!l) {
            var de = Lo(p, s);
            de != null && f.push(vp(p, de, q));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function vx(e, t, a, i, l) {
      var s = i && l ? px(i, l) : null;
      i !== null && CE(e, t, i, s, !1), l !== null && a !== null && CE(e, a, l, s, !0);
    }
    function hx(e, t) {
      return e + "__bubble";
    }
    var Ga = !1, hp = "dangerouslySetInnerHTML", Bh = "suppressContentEditableWarning", Au = "suppressHydrationWarning", xE = "autoFocus", Ks = "children", Zs = "style", Vh = "__html", ug, Ih, mp, TE, $h, _E, OE;
    ug = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ih = function(e, t) {
      bd(e, t), Rc(e, t), $v(e, t, {
        registrationNameDependencies: Ye,
        possibleRegistrationNames: he
      });
    }, _E = rt && !document.documentMode, mp = function(e, t, a) {
      if (!Ga) {
        var i = Wh(a), l = Wh(t);
        l !== i && (Ga = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, TE = function(e) {
      if (!Ga) {
        Ga = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, $h = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, OE = function(e, t) {
      var a = e.namespaceURI === Xi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var mx = /\r\n?/g, yx = /\u0000|\uFFFD/g;
    function Wh(e) {
      me(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(mx, `
`).replace(yx, "");
    }
    function qh(e, t, a, i) {
      var l = Wh(t), s = Wh(e);
      if (s !== l && (i && (Ga || (Ga = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Te))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function DE(e) {
      return e.nodeType === Zi ? e : e.ownerDocument;
    }
    function gx() {
    }
    function Yh(e) {
      e.onclick = gx;
    }
    function Sx(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), Uv(t, f);
          else if (s === hp) {
            var p = f ? f[Vh] : void 0;
            p != null && Tv(t, p);
          } else if (s === Ks)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pu(t, f);
            } else typeof f == "number" && pu(t, "" + f);
          else s === Bh || s === Au || s === xE || (Ye.hasOwnProperty(s) ? f != null && (typeof f != "function" && $h(s, f), s === "onScroll" && In("scroll", t)) : f != null && Ur(t, s, f, l));
        }
    }
    function bx(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Zs ? Uv(e, f) : s === hp ? Tv(e, f) : s === Ks ? pu(e, f) : Ur(e, s, f, i);
      }
    }
    function Ex(e, t, a, i) {
      var l, s = DE(a), f, p = i;
      if (p === Xi && (p = pd(e)), p === Xi) {
        if (l = zo(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var R = v.firstChild;
          f = v.removeChild(R);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Xi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !xe.call(ug, e) && (ug[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function wx(e, t) {
      return DE(t).createTextNode(e);
    }
    function Rx(e, t, a, i) {
      var l = zo(t, a);
      Ih(t, a);
      var s;
      switch (t) {
        case "dialog":
          In("cancel", e), In("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          In("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < dp.length; f++)
            In(dp[f], e);
          s = a;
          break;
        case "source":
          In("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          In("error", e), In("load", e), s = a;
          break;
        case "details":
          In("toggle", e), s = a;
          break;
        case "input":
          si(e, a), s = du(e, a), In("invalid", e);
          break;
        case "option":
          rn(e, a), s = a;
          break;
        case "select":
          vl(e, a), s = is(e, a), In("invalid", e);
          break;
        case "textarea":
          cd(e, a), s = sd(e, a), In("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ec(t, s), Sx(t, e, i, s, l), t) {
        case "input":
          ui(e), se(e, a, !1);
          break;
        case "textarea":
          ui(e), Cv(e);
          break;
        case "option":
          zn(e, a);
          break;
        case "select":
          ld(e, a);
          break;
        default:
          typeof s.onClick == "function" && Yh(e);
          break;
      }
    }
    function Cx(e, t, a, i, l) {
      Ih(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = du(e, a), p = du(e, i), s = [];
          break;
        case "select":
          f = is(e, a), p = is(e, i), s = [];
          break;
        case "textarea":
          f = sd(e, a), p = sd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Yh(e);
          break;
      }
      Ec(t, p);
      var v, R, T = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Zs) {
            var G = f[v];
            for (R in G)
              G.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else v === hp || v === Ks || v === Bh || v === Au || v === xE || (Ye.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var q = p[v], ue = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || q === ue || q == null && ue == null))
          if (v === Zs)
            if (q && Object.freeze(q), ue) {
              for (R in ue)
                ue.hasOwnProperty(R) && (!q || !q.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in q)
                q.hasOwnProperty(R) && ue[R] !== q[R] && (T || (T = {}), T[R] = q[R]);
            } else
              T || (s || (s = []), s.push(v, T)), T = q;
          else if (v === hp) {
            var de = q ? q[Vh] : void 0, Ee = ue ? ue[Vh] : void 0;
            de != null && Ee !== de && (s = s || []).push(v, de);
          } else v === Ks ? (typeof q == "string" || typeof q == "number") && (s = s || []).push(v, "" + q) : v === Bh || v === Au || (Ye.hasOwnProperty(v) ? (q != null && (typeof q != "function" && $h(v, q), v === "onScroll" && In("scroll", e)), !s && ue !== q && (s = [])) : (s = s || []).push(v, q));
      }
      return T && (Py(T, p[Zs]), (s = s || []).push(Zs, T)), s;
    }
    function xx(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && m(e, l);
      var s = zo(a, i), f = zo(a, l);
      switch (bx(e, t, s, f), a) {
        case "input":
          L(e, l);
          break;
        case "textarea":
          Rv(e, l);
          break;
        case "select":
          gc(e, l);
          break;
      }
    }
    function Tx(e) {
      {
        var t = e.toLowerCase();
        return cs.hasOwnProperty(t) && cs[t] || null;
      }
    }
    function _x(e, t, a, i, l, s, f) {
      var p, v;
      switch (p = zo(t, a), Ih(t, a), t) {
        case "dialog":
          In("cancel", e), In("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          In("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < dp.length; R++)
            In(dp[R], e);
          break;
        case "source":
          In("error", e);
          break;
        case "img":
        case "image":
        case "link":
          In("error", e), In("load", e);
          break;
        case "details":
          In("toggle", e);
          break;
        case "input":
          si(e, a), In("invalid", e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          vl(e, a), In("invalid", e);
          break;
        case "textarea":
          cd(e, a), In("invalid", e);
          break;
      }
      Ec(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var T = e.attributes, G = 0; G < T.length; G++) {
          var q = T[G].name.toLowerCase();
          switch (q) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(T[G].name);
          }
        }
      }
      var ue = null;
      for (var de in a)
        if (a.hasOwnProperty(de)) {
          var Ee = a[de];
          if (de === Ks)
            typeof Ee == "string" ? e.textContent !== Ee && (a[Au] !== !0 && qh(e.textContent, Ee, s, f), ue = [Ks, Ee]) : typeof Ee == "number" && e.textContent !== "" + Ee && (a[Au] !== !0 && qh(e.textContent, Ee, s, f), ue = [Ks, "" + Ee]);
          else if (Ye.hasOwnProperty(de))
            Ee != null && (typeof Ee != "function" && $h(de, Ee), de === "onScroll" && In("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var nt = void 0, wt = an(de);
            if (a[Au] !== !0) {
              if (!(de === Bh || de === Au || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              de === "value" || de === "checked" || de === "selected")) {
                if (de === hp) {
                  var mt = e.innerHTML, tn = Ee ? Ee[Vh] : void 0;
                  if (tn != null) {
                    var Xt = OE(e, tn);
                    Xt !== mt && mp(de, mt, Xt);
                  }
                } else if (de === Zs) {
                  if (v.delete(de), _E) {
                    var te = Ly(Ee);
                    nt = e.getAttribute("style"), te !== nt && mp(de, nt, te);
                  }
                } else if (p && !O)
                  v.delete(de.toLowerCase()), nt = ll(e, de, Ee), Ee !== nt && mp(de, nt, Ee);
                else if (!Lt(de, wt, p) && !Dn(de, Ee, wt, p)) {
                  var we = !1;
                  if (wt !== null)
                    v.delete(wt.attributeName), nt = wo(e, de, Ee, wt);
                  else {
                    var ne = i;
                    if (ne === Xi && (ne = pd(t)), ne === Xi)
                      v.delete(de.toLowerCase());
                    else {
                      var Ie = Tx(de);
                      Ie !== null && Ie !== de && (we = !0, v.delete(Ie)), v.delete(de);
                    }
                    nt = ll(e, de, Ee);
                  }
                  var lt = O;
                  !lt && Ee !== nt && !we && mp(de, nt, Ee);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Au] !== !0 && TE(v), t) {
        case "input":
          ui(e), se(e, a, !0);
          break;
        case "textarea":
          ui(e), Cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Yh(e);
          break;
      }
      return ue;
    }
    function Ox(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function sg(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function cg(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function fg(e, t, a) {
      {
        if (Ga)
          return;
        Ga = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function dg(e, t) {
      {
        if (t === "" || Ga)
          return;
        Ga = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Dx(e, t, a) {
      switch (t) {
        case "input":
          Se(e, a);
          return;
        case "textarea":
          Dy(e, a);
          return;
        case "select":
          ud(e, a);
          return;
      }
    }
    var yp = function() {
    }, gp = function() {
    };
    {
      var kx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], kE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], zx = kE.concat(["button"]), Mx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], zE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      gp = function(e, t) {
        var a = Vt({}, e || zE), i = {
          tag: t
        };
        return kE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), zx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), kx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Lx = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Mx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Nx = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, ME = {};
      yp = function(e, t, a) {
        a = a || zE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Lx(e, l) ? null : i, f = s ? null : Nx(e, a), p = s || f;
        if (p) {
          var v = p.tag, R = !!s + "|" + e + "|" + v;
          if (!ME[R]) {
            ME[R] = !0;
            var T = e, G = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", G = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var q = "";
              v === "table" && e === "tr" && (q += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, v, G, q);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, v);
          }
        }
      };
    }
    var Gh = "suppressHydrationWarning", Qh = "$", Xh = "/$", Sp = "$?", bp = "$!", Px = "style", pg = null, vg = null;
    function Ax(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Zi:
        case hd: {
          t = i === Zi ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : vd(null, "");
          break;
        }
        default: {
          var s = i === Zn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = vd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = gp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function jx(e, t, a) {
      {
        var i = e, l = vd(i.namespace, t), s = gp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function Fk(e) {
      return e;
    }
    function Ux(e) {
      pg = ar(), vg = ZC();
      var t = null;
      return fr(!1), t;
    }
    function Hx(e) {
      JC(vg), fr(pg), pg = null, vg = null;
    }
    function Fx(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (yp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = gp(f.ancestorInfo, e);
          yp(null, p, v);
        }
        s = f.namespace;
      }
      var R = Ex(e, t, a, s);
      return Rp(l, R), wg(R, t), R;
    }
    function Bx(e, t) {
      e.appendChild(t);
    }
    function Vx(e, t, a, i, l) {
      switch (Rx(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Ix(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = gp(f.ancestorInfo, t);
          yp(null, p, v);
        }
      }
      return Cx(e, t, a, i);
    }
    function hg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $x(e, t, a, i) {
      {
        var l = a;
        yp(null, e, l.ancestorInfo);
      }
      var s = wx(e, t);
      return Rp(i, s), s;
    }
    function Wx() {
      var e = window.event;
      return e === void 0 ? $a : hf(e.type);
    }
    var mg = typeof setTimeout == "function" ? setTimeout : void 0, qx = typeof clearTimeout == "function" ? clearTimeout : void 0, yg = -1, LE = typeof Promise == "function" ? Promise : void 0, Yx = typeof queueMicrotask == "function" ? queueMicrotask : typeof LE < "u" ? function(e) {
      return LE.resolve(null).then(e).catch(Gx);
    } : mg;
    function Gx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Qx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Xx(e, t, a, i, l, s) {
      xx(e, t, a, i, l), wg(e, l);
    }
    function NE(e) {
      pu(e, "");
    }
    function Kx(e, t, a) {
      e.nodeValue = a;
    }
    function Zx(e, t) {
      e.appendChild(t);
    }
    function Jx(e, t) {
      var a;
      e.nodeType === Zn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Yh(a);
    }
    function eT(e, t, a) {
      e.insertBefore(t, a);
    }
    function tT(e, t, a) {
      e.nodeType === Zn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function nT(e, t) {
      e.removeChild(t);
    }
    function rT(e, t) {
      e.nodeType === Zn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function gg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Zn) {
          var s = l.data;
          if (s === Xh)
            if (i === 0) {
              e.removeChild(l), Pl(t);
              return;
            } else
              i--;
          else (s === Qh || s === Sp || s === bp) && i++;
        }
        a = l;
      } while (a);
      Pl(t);
    }
    function aT(e, t) {
      e.nodeType === Zn ? gg(e.parentNode, t) : e.nodeType === aa && gg(e, t), Pl(e);
    }
    function iT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function oT(e) {
      e.nodeValue = "";
    }
    function lT(e, t) {
      e = e;
      var a = t[Px], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bc("display", i);
    }
    function uT(e, t) {
      e.nodeValue = t;
    }
    function sT(e) {
      e.nodeType === aa ? e.textContent = "" : e.nodeType === Zi && e.documentElement && e.removeChild(e.documentElement);
    }
    function cT(e, t, a) {
      return e.nodeType !== aa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function fT(e, t) {
      return t === "" || e.nodeType !== Ki ? null : e;
    }
    function dT(e) {
      return e.nodeType !== Zn ? null : e;
    }
    function PE(e) {
      return e.data === Sp;
    }
    function Sg(e) {
      return e.data === bp;
    }
    function pT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function vT(e, t) {
      e._reactRetry = t;
    }
    function Kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === aa || t === Ki)
          break;
        if (t === Zn) {
          var a = e.data;
          if (a === Qh || a === bp || a === Sp)
            break;
          if (a === Xh)
            return null;
        }
      }
      return e;
    }
    function Ep(e) {
      return Kh(e.nextSibling);
    }
    function hT(e) {
      return Kh(e.firstChild);
    }
    function mT(e) {
      return Kh(e.firstChild);
    }
    function yT(e) {
      return Kh(e.nextSibling);
    }
    function gT(e, t, a, i, l, s, f) {
      Rp(s, e), wg(e, a);
      var p;
      {
        var v = l;
        p = v.namespace;
      }
      var R = (s.mode & qt) !== bt;
      return _x(e, t, a, p, i, R, f);
    }
    function ST(e, t, a, i) {
      return Rp(a, e), a.mode & qt, Ox(e, t);
    }
    function bT(e, t) {
      Rp(t, e);
    }
    function ET(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Zn) {
          var i = t.data;
          if (i === Xh) {
            if (a === 0)
              return Ep(t);
            a--;
          } else (i === Qh || i === bp || i === Sp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function AE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Zn) {
          var i = t.data;
          if (i === Qh || i === bp || i === Sp) {
            if (a === 0)
              return t;
            a--;
          } else i === Xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function wT(e) {
      Pl(e);
    }
    function RT(e) {
      Pl(e);
    }
    function CT(e) {
      return e !== "head" && e !== "body";
    }
    function xT(e, t, a, i) {
      var l = !0;
      qh(t.nodeValue, a, i, l);
    }
    function TT(e, t, a, i, l, s) {
      if (t[Gh] !== !0) {
        var f = !0;
        qh(i.nodeValue, l, s, f);
      }
    }
    function _T(e, t) {
      t.nodeType === aa ? sg(e, t) : t.nodeType === Zn || cg(e, t);
    }
    function OT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === aa ? sg(a, t) : t.nodeType === Zn || cg(a, t));
      }
    }
    function DT(e, t, a, i, l) {
      (l || t[Gh] !== !0) && (i.nodeType === aa ? sg(a, i) : i.nodeType === Zn || cg(a, i));
    }
    function kT(e, t, a) {
      fg(e, t);
    }
    function zT(e, t) {
      dg(e, t);
    }
    function MT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && fg(i, t);
      }
    }
    function LT(e, t) {
      {
        var a = e.parentNode;
        a !== null && dg(a, t);
      }
    }
    function NT(e, t, a, i, l, s) {
      (s || t[Gh] !== !0) && fg(a, i);
    }
    function PT(e, t, a, i, l) {
      (l || t[Gh] !== !0) && dg(a, i);
    }
    function AT(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function jT(e) {
      pp(e);
    }
    var Df = Math.random().toString(36).slice(2), kf = "__reactFiber$" + Df, bg = "__reactProps$" + Df, wp = "__reactContainer$" + Df, Eg = "__reactEvents$" + Df, UT = "__reactListeners$" + Df, HT = "__reactHandles$" + Df;
    function FT(e) {
      delete e[kf], delete e[bg], delete e[Eg], delete e[UT], delete e[HT];
    }
    function Rp(e, t) {
      t[kf] = e;
    }
    function Zh(e, t) {
      t[wp] = e;
    }
    function jE(e) {
      e[wp] = null;
    }
    function Cp(e) {
      return !!e[wp];
    }
    function Js(e) {
      var t = e[kf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[wp] || a[kf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = AE(e); l !== null; ) {
              var s = l[kf];
              if (s)
                return s;
              l = AE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ju(e) {
      var t = e[kf] || e[wp];
      return t && (t.tag === ye || t.tag === ke || t.tag === E || t.tag === I) ? t : null;
    }
    function zf(e) {
      if (e.tag === ye || e.tag === ke)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Jh(e) {
      return e[bg] || null;
    }
    function wg(e, t) {
      e[bg] = t;
    }
    function BT(e) {
      var t = e[Eg];
      return t === void 0 && (t = e[Eg] = /* @__PURE__ */ new Set()), t;
    }
    var UE = {}, HE = h.ReactDebugCurrentFrame;
    function em(e) {
      if (e) {
        var t = e._owner, a = Yi(e.type, e._source, t ? t.type : null);
        HE.setExtraStackFrame(a);
      } else
        HE.setExtraStackFrame(null);
    }
    function so(e, t, a, i, l) {
      {
        var s = Function.call.bind(xe);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (em(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), em(null)), p instanceof Error && !(p.message in UE) && (UE[p.message] = !0, em(l), g("Failed %s type: %s", a, p.message), em(null));
          }
      }
    }
    var Rg = [], tm;
    tm = [];
    var Bl = -1;
    function Uu(e) {
      return {
        current: e
      };
    }
    function ha(e, t) {
      if (Bl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== tm[Bl] && g("Unexpected Fiber popped."), e.current = Rg[Bl], Rg[Bl] = null, tm[Bl] = null, Bl--;
    }
    function ma(e, t, a) {
      Bl++, Rg[Bl] = e.current, tm[Bl] = a, e.current = t;
    }
    var Cg;
    Cg = {};
    var mi = {};
    Object.freeze(mi);
    var Vl = Uu(mi), Ko = Uu(!1), xg = mi;
    function Mf(e, t, a) {
      return a && Zo(t) ? xg : Vl.current;
    }
    function FE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Lf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return mi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Nt(e) || "Unknown";
          so(i, s, "context", p);
        }
        return l && FE(e, t, s), s;
      }
    }
    function nm() {
      return Ko.current;
    }
    function Zo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rm(e) {
      ha(Ko, e), ha(Vl, e);
    }
    function Tg(e) {
      ha(Ko, e), ha(Vl, e);
    }
    function BE(e, t, a) {
      {
        if (Vl.current !== mi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ma(Vl, t, e), ma(Ko, a, e);
      }
    }
    function VE(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Nt(e) || "Unknown";
            Cg[s] || (Cg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((Nt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Nt(e) || "Unknown";
          so(l, f, "child context", v);
        }
        return Vt({}, a, f);
      }
    }
    function am(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || mi;
        return xg = Vl.current, ma(Vl, a, e), ma(Ko, Ko.current, e), !0;
      }
    }
    function IE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = VE(e, t, xg);
          i.__reactInternalMemoizedMergedChildContext = l, ha(Ko, e), ha(Vl, e), ma(Vl, l, e), ma(Ko, a, e);
        } else
          ha(Ko, e), ma(Ko, a, e);
      }
    }
    function VT(e) {
      {
        if (!El(e) || e.tag !== V)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case V: {
              var a = t.type;
              if (Zo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Hu = 0, im = 1, Il = null, _g = !1, Og = !1;
    function $E(e) {
      Il === null ? Il = [e] : Il.push(e);
    }
    function IT(e) {
      _g = !0, $E(e);
    }
    function WE() {
      _g && Fu();
    }
    function Fu() {
      if (!Og && Il !== null) {
        Og = !0;
        var e = 0, t = qa();
        try {
          var a = !0, i = Il;
          for (rr(Ir); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Il = null, _g = !1;
        } catch (s) {
          throw Il !== null && (Il = Il.slice(e + 1)), _d(gs, Fu), s;
        } finally {
          rr(t), Og = !1;
        }
      }
      return null;
    }
    var Nf = [], Pf = 0, om = null, lm = 0, Hi = [], Fi = 0, ec = null, $l = 1, Wl = "";
    function $T(e) {
      return nc(), (e.flags & Di) !== St;
    }
    function WT(e) {
      return nc(), lm;
    }
    function qT() {
      var e = Wl, t = $l, a = t & ~YT(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), Nf[Pf++] = lm, Nf[Pf++] = om, om = e, lm = t;
    }
    function qE(e, t, a) {
      nc(), Hi[Fi++] = $l, Hi[Fi++] = Wl, Hi[Fi++] = ec, ec = e;
      var i = $l, l = Wl, s = um(i) - 1, f = i & ~(1 << s), p = a + 1, v = um(t) + s;
      if (v > 30) {
        var R = s - s % 5, T = (1 << R) - 1, G = (f & T).toString(32), q = f >> R, ue = s - R, de = um(t) + ue, Ee = p << ue, nt = Ee | q, wt = G + l;
        $l = 1 << de | nt, Wl = wt;
      } else {
        var mt = p << s, tn = mt | f, Xt = l;
        $l = 1 << v | tn, Wl = Xt;
      }
    }
    function Dg(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), qE(e, a, i);
      }
    }
    function um(e) {
      return 32 - tr(e);
    }
    function YT(e) {
      return 1 << um(e) - 1;
    }
    function kg(e) {
      for (; e === om; )
        om = Nf[--Pf], Nf[Pf] = null, lm = Nf[--Pf], Nf[Pf] = null;
      for (; e === ec; )
        ec = Hi[--Fi], Hi[Fi] = null, Wl = Hi[--Fi], Hi[Fi] = null, $l = Hi[--Fi], Hi[Fi] = null;
    }
    function GT() {
      return nc(), ec !== null ? {
        id: $l,
        overflow: Wl
      } : null;
    }
    function QT(e, t) {
      nc(), Hi[Fi++] = $l, Hi[Fi++] = Wl, Hi[Fi++] = ec, $l = t.id, Wl = t.overflow, ec = e;
    }
    function nc() {
      Gr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Yr = null, Bi = null, co = !1, rc = !1, Bu = null;
    function XT() {
      co && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function YE() {
      rc = !0;
    }
    function KT() {
      return rc;
    }
    function ZT(e) {
      var t = e.stateNode.containerInfo;
      return Bi = mT(t), Yr = e, co = !0, Bu = null, rc = !1, !0;
    }
    function JT(e, t, a) {
      return Bi = yT(t), Yr = e, co = !0, Bu = null, rc = !1, a !== null && QT(e, a), !0;
    }
    function GE(e, t) {
      switch (e.tag) {
        case I: {
          _T(e.stateNode.containerInfo, t);
          break;
        }
        case ye: {
          var a = (e.mode & qt) !== bt;
          DT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case E: {
          var i = e.memoizedState;
          i.dehydrated !== null && OT(i.dehydrated, t);
          break;
        }
      }
    }
    function QE(e, t) {
      GE(e, t);
      var a = rD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ha) : i.push(a);
    }
    function zg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ye:
                var i = t.type;
                t.pendingProps, kT(a, i);
                break;
              case ke:
                var l = t.pendingProps;
                zT(a, l);
                break;
            }
            break;
          }
          case ye: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ye: {
                var v = t.type, R = t.pendingProps, T = (e.mode & qt) !== bt;
                NT(
                  s,
                  f,
                  p,
                  v,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ke: {
                var G = t.pendingProps, q = (e.mode & qt) !== bt;
                PT(
                  s,
                  f,
                  p,
                  G,
                  // TODO: Delete this argument when we remove the legacy root API.
                  q
                );
                break;
              }
            }
            break;
          }
          case E: {
            var ue = e.memoizedState, de = ue.dehydrated;
            if (de !== null) switch (t.tag) {
              case ye:
                var Ee = t.type;
                t.pendingProps, MT(de, Ee);
                break;
              case ke:
                var nt = t.pendingProps;
                LT(de, nt);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function XE(e, t) {
      t.flags = t.flags & ~oa | Fn, zg(e, t);
    }
    function KE(e, t) {
      switch (e.tag) {
        case ye: {
          var a = e.type;
          e.pendingProps;
          var i = cT(t, a);
          return i !== null ? (e.stateNode = i, Yr = e, Bi = hT(i), !0) : !1;
        }
        case ke: {
          var l = e.pendingProps, s = fT(t, l);
          return s !== null ? (e.stateNode = s, Yr = e, Bi = null, !0) : !1;
        }
        case E: {
          var f = dT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: GT(),
              retryLane: ca
            };
            e.memoizedState = p;
            var v = aD(f);
            return v.return = e, e.child = v, Yr = e, Bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Mg(e) {
      return (e.mode & qt) !== bt && (e.flags & yt) === St;
    }
    function Lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ng(e) {
      if (co) {
        var t = Bi;
        if (!t) {
          Mg(e) && (zg(Yr, e), Lg()), XE(Yr, e), co = !1, Yr = e;
          return;
        }
        var a = t;
        if (!KE(e, t)) {
          Mg(e) && (zg(Yr, e), Lg()), t = Ep(a);
          var i = Yr;
          if (!t || !KE(e, t)) {
            XE(Yr, e), co = !1, Yr = e;
            return;
          }
          QE(i, a);
        }
      }
    }
    function e_(e, t, a) {
      var i = e.stateNode, l = !rc, s = gT(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function t_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ST(t, a, e);
      if (i) {
        var l = Yr;
        if (l !== null)
          switch (l.tag) {
            case I: {
              var s = l.stateNode.containerInfo, f = (l.mode & qt) !== bt;
              xT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ye: {
              var p = l.type, v = l.memoizedProps, R = l.stateNode, T = (l.mode & qt) !== bt;
              TT(
                p,
                v,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function n_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      bT(a, e);
    }
    function r_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ET(a);
    }
    function ZE(e) {
      for (var t = e.return; t !== null && t.tag !== ye && t.tag !== I && t.tag !== E; )
        t = t.return;
      Yr = t;
    }
    function sm(e) {
      if (e !== Yr)
        return !1;
      if (!co)
        return ZE(e), co = !0, !1;
      if (e.tag !== I && (e.tag !== ye || CT(e.type) && !hg(e.type, e.memoizedProps))) {
        var t = Bi;
        if (t)
          if (Mg(e))
            JE(e), Lg();
          else
            for (; t; )
              QE(e, t), t = Ep(t);
      }
      return ZE(e), e.tag === E ? Bi = r_(e) : Bi = Yr ? Ep(e.stateNode) : null, !0;
    }
    function a_() {
      return co && Bi !== null;
    }
    function JE(e) {
      for (var t = Bi; t; )
        GE(e, t), t = Ep(t);
    }
    function Af() {
      Yr = null, Bi = null, co = !1, rc = !1;
    }
    function e0() {
      Bu !== null && (Yw(Bu), Bu = null);
    }
    function Gr() {
      return co;
    }
    function Pg(e) {
      Bu === null ? Bu = [e] : Bu.push(e);
    }
    var i_ = h.ReactCurrentBatchConfig, o_ = null;
    function l_() {
      return i_.transition;
    }
    var fo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var u_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & wn && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, xp = [], Tp = [], _p = [], Op = [], Dp = [], kp = [], ic = /* @__PURE__ */ new Set();
      fo.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & wn && typeof t.UNSAFE_componentWillMount == "function" && Tp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & wn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Op.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Dp.push(e), e.mode & wn && typeof t.UNSAFE_componentWillUpdate == "function" && kp.push(e));
      }, fo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(q) {
          e.add(Nt(q) || "Component"), ic.add(q.type);
        }), xp = []);
        var t = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(q) {
          t.add(Nt(q) || "Component"), ic.add(q.type);
        }), Tp = []);
        var a = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(q) {
          a.add(Nt(q) || "Component"), ic.add(q.type);
        }), _p = []);
        var i = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(q) {
          i.add(Nt(q) || "Component"), ic.add(q.type);
        }), Op = []);
        var l = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function(q) {
          l.add(Nt(q) || "Component"), ic.add(q.type);
        }), Dp = []);
        var s = /* @__PURE__ */ new Set();
        if (kp.length > 0 && (kp.forEach(function(q) {
          s.add(Nt(q) || "Component"), ic.add(q.type);
        }), kp = []), t.size > 0) {
          var f = ac(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ac(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ac(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var R = ac(e);
          H(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = ac(a);
          H(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (l.size > 0) {
          var G = ac(l);
          H(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, G);
        }
      };
      var cm = /* @__PURE__ */ new Map(), t0 = /* @__PURE__ */ new Set();
      fo.recordLegacyContextWarning = function(e, t) {
        var a = u_(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!t0.has(e.type)) {
          var i = cm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cm.set(a, i)), i.push(e));
        }
      }, fo.flushLegacyContextWarning = function() {
        cm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Nt(s) || "Component"), t0.add(s.type);
            });
            var l = ac(i);
            try {
              Sn(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Nn();
            }
          }
        });
      }, fo.discardPendingWarnings = function() {
        xp = [], Tp = [], _p = [], Op = [], Dp = [], kp = [], cm = /* @__PURE__ */ new Map();
      };
    }
    var Ag, jg, Ug, Hg, Fg, n0 = function(e, t) {
    };
    Ag = !1, jg = !1, Ug = {}, Hg = {}, Fg = {}, n0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Nt(t) || "Component";
        Hg[a] || (Hg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function s_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function zp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & wn || Q) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== V) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !s_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = Nt(e) || "Component";
          Ug[l] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Ug[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== V)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          F(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(G) {
            var q = v.refs;
            G === null ? delete q[R] : q[R] = G;
          };
          return T._stringRef = R, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function fm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dm(e) {
      {
        var t = Nt(e) || "Component";
        if (Fg[t])
          return;
        Fg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function r0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function a0(e) {
      function t(te, we) {
        if (e) {
          var ne = te.deletions;
          ne === null ? (te.deletions = [we], te.flags |= Ha) : ne.push(we);
        }
      }
      function a(te, we) {
        if (!e)
          return null;
        for (var ne = we; ne !== null; )
          t(te, ne), ne = ne.sibling;
        return null;
      }
      function i(te, we) {
        for (var ne = /* @__PURE__ */ new Map(), Ie = we; Ie !== null; )
          Ie.key !== null ? ne.set(Ie.key, Ie) : ne.set(Ie.index, Ie), Ie = Ie.sibling;
        return ne;
      }
      function l(te, we) {
        var ne = vc(te, we);
        return ne.index = 0, ne.sibling = null, ne;
      }
      function s(te, we, ne) {
        if (te.index = ne, !e)
          return te.flags |= Di, we;
        var Ie = te.alternate;
        if (Ie !== null) {
          var lt = Ie.index;
          return lt < we ? (te.flags |= Fn, we) : lt;
        } else
          return te.flags |= Fn, we;
      }
      function f(te) {
        return e && te.alternate === null && (te.flags |= Fn), te;
      }
      function p(te, we, ne, Ie) {
        if (we === null || we.tag !== ke) {
          var lt = Pb(ne, te.mode, Ie);
          return lt.return = te, lt;
        } else {
          var at = l(we, ne);
          return at.return = te, at;
        }
      }
      function v(te, we, ne, Ie) {
        var lt = ne.type;
        if (lt === Si)
          return T(te, we, ne.props.children, Ie, ne.key);
        if (we !== null && (we.elementType === lt || // Keep this check inline so it only runs on the false path:
        sR(we, ne) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof lt == "object" && lt !== null && lt.$$typeof === Pt && r0(lt) === we.type)) {
          var at = l(we, ne.props);
          return at.ref = zp(te, we, ne), at.return = te, at._debugSource = ne._source, at._debugOwner = ne._owner, at;
        }
        var Dt = Nb(ne, te.mode, Ie);
        return Dt.ref = zp(te, we, ne), Dt.return = te, Dt;
      }
      function R(te, we, ne, Ie) {
        if (we === null || we.tag !== J || we.stateNode.containerInfo !== ne.containerInfo || we.stateNode.implementation !== ne.implementation) {
          var lt = Ab(ne, te.mode, Ie);
          return lt.return = te, lt;
        } else {
          var at = l(we, ne.children || []);
          return at.return = te, at;
        }
      }
      function T(te, we, ne, Ie, lt) {
        if (we === null || we.tag !== be) {
          var at = Zu(ne, te.mode, Ie, lt);
          return at.return = te, at;
        } else {
          var Dt = l(we, ne);
          return Dt.return = te, Dt;
        }
      }
      function G(te, we, ne) {
        if (typeof we == "string" && we !== "" || typeof we == "number") {
          var Ie = Pb("" + we, te.mode, ne);
          return Ie.return = te, Ie;
        }
        if (typeof we == "object" && we !== null) {
          switch (we.$$typeof) {
            case Hr: {
              var lt = Nb(we, te.mode, ne);
              return lt.ref = zp(te, null, we), lt.return = te, lt;
            }
            case gr: {
              var at = Ab(we, te.mode, ne);
              return at.return = te, at;
            }
            case Pt: {
              var Dt = we._payload, jt = we._init;
              return G(te, jt(Dt), ne);
            }
          }
          if (It(we) || Ht(we)) {
            var Cn = Zu(we, te.mode, ne, null);
            return Cn.return = te, Cn;
          }
          fm(te, we);
        }
        return typeof we == "function" && dm(te), null;
      }
      function q(te, we, ne, Ie) {
        var lt = we !== null ? we.key : null;
        if (typeof ne == "string" && ne !== "" || typeof ne == "number")
          return lt !== null ? null : p(te, we, "" + ne, Ie);
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Hr:
              return ne.key === lt ? v(te, we, ne, Ie) : null;
            case gr:
              return ne.key === lt ? R(te, we, ne, Ie) : null;
            case Pt: {
              var at = ne._payload, Dt = ne._init;
              return q(te, we, Dt(at), Ie);
            }
          }
          if (It(ne) || Ht(ne))
            return lt !== null ? null : T(te, we, ne, Ie, null);
          fm(te, ne);
        }
        return typeof ne == "function" && dm(te), null;
      }
      function ue(te, we, ne, Ie, lt) {
        if (typeof Ie == "string" && Ie !== "" || typeof Ie == "number") {
          var at = te.get(ne) || null;
          return p(we, at, "" + Ie, lt);
        }
        if (typeof Ie == "object" && Ie !== null) {
          switch (Ie.$$typeof) {
            case Hr: {
              var Dt = te.get(Ie.key === null ? ne : Ie.key) || null;
              return v(we, Dt, Ie, lt);
            }
            case gr: {
              var jt = te.get(Ie.key === null ? ne : Ie.key) || null;
              return R(we, jt, Ie, lt);
            }
            case Pt:
              var Cn = Ie._payload, pn = Ie._init;
              return ue(te, we, ne, pn(Cn), lt);
          }
          if (It(Ie) || Ht(Ie)) {
            var dr = te.get(ne) || null;
            return T(we, dr, Ie, lt, null);
          }
          fm(we, Ie);
        }
        return typeof Ie == "function" && dm(we), null;
      }
      function de(te, we, ne) {
        {
          if (typeof te != "object" || te === null)
            return we;
          switch (te.$$typeof) {
            case Hr:
            case gr:
              n0(te, ne);
              var Ie = te.key;
              if (typeof Ie != "string")
                break;
              if (we === null) {
                we = /* @__PURE__ */ new Set(), we.add(Ie);
                break;
              }
              if (!we.has(Ie)) {
                we.add(Ie);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ie);
              break;
            case Pt:
              var lt = te._payload, at = te._init;
              de(at(lt), we, ne);
              break;
          }
        }
        return we;
      }
      function Ee(te, we, ne, Ie) {
        for (var lt = null, at = 0; at < ne.length; at++) {
          var Dt = ne[at];
          lt = de(Dt, lt, te);
        }
        for (var jt = null, Cn = null, pn = we, dr = 0, vn = 0, or = null; pn !== null && vn < ne.length; vn++) {
          pn.index > vn ? (or = pn, pn = null) : or = pn.sibling;
          var ga = q(te, pn, ne[vn], Ie);
          if (ga === null) {
            pn === null && (pn = or);
            break;
          }
          e && pn && ga.alternate === null && t(te, pn), dr = s(ga, dr, vn), Cn === null ? jt = ga : Cn.sibling = ga, Cn = ga, pn = or;
        }
        if (vn === ne.length) {
          if (a(te, pn), Gr()) {
            var ta = vn;
            tc(te, ta);
          }
          return jt;
        }
        if (pn === null) {
          for (; vn < ne.length; vn++) {
            var gi = G(te, ne[vn], Ie);
            gi !== null && (dr = s(gi, dr, vn), Cn === null ? jt = gi : Cn.sibling = gi, Cn = gi);
          }
          if (Gr()) {
            var za = vn;
            tc(te, za);
          }
          return jt;
        }
        for (var Ma = i(te, pn); vn < ne.length; vn++) {
          var Sa = ue(Ma, te, vn, ne[vn], Ie);
          Sa !== null && (e && Sa.alternate !== null && Ma.delete(Sa.key === null ? vn : Sa.key), dr = s(Sa, dr, vn), Cn === null ? jt = Sa : Cn.sibling = Sa, Cn = Sa);
        }
        if (e && Ma.forEach(function(td) {
          return t(te, td);
        }), Gr()) {
          var Zl = vn;
          tc(te, Zl);
        }
        return jt;
      }
      function nt(te, we, ne, Ie) {
        var lt = Ht(ne);
        if (typeof lt != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          ne[Symbol.toStringTag] === "Generator" && (jg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), jg = !0), ne.entries === lt && (Ag || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ag = !0);
          var at = lt.call(ne);
          if (at)
            for (var Dt = null, jt = at.next(); !jt.done; jt = at.next()) {
              var Cn = jt.value;
              Dt = de(Cn, Dt, te);
            }
        }
        var pn = lt.call(ne);
        if (pn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var dr = null, vn = null, or = we, ga = 0, ta = 0, gi = null, za = pn.next(); or !== null && !za.done; ta++, za = pn.next()) {
          or.index > ta ? (gi = or, or = null) : gi = or.sibling;
          var Ma = q(te, or, za.value, Ie);
          if (Ma === null) {
            or === null && (or = gi);
            break;
          }
          e && or && Ma.alternate === null && t(te, or), ga = s(Ma, ga, ta), vn === null ? dr = Ma : vn.sibling = Ma, vn = Ma, or = gi;
        }
        if (za.done) {
          if (a(te, or), Gr()) {
            var Sa = ta;
            tc(te, Sa);
          }
          return dr;
        }
        if (or === null) {
          for (; !za.done; ta++, za = pn.next()) {
            var Zl = G(te, za.value, Ie);
            Zl !== null && (ga = s(Zl, ga, ta), vn === null ? dr = Zl : vn.sibling = Zl, vn = Zl);
          }
          if (Gr()) {
            var td = ta;
            tc(te, td);
          }
          return dr;
        }
        for (var sv = i(te, or); !za.done; ta++, za = pn.next()) {
          var ol = ue(sv, te, ta, za.value, Ie);
          ol !== null && (e && ol.alternate !== null && sv.delete(ol.key === null ? ta : ol.key), ga = s(ol, ga, ta), vn === null ? dr = ol : vn.sibling = ol, vn = ol);
        }
        if (e && sv.forEach(function(PD) {
          return t(te, PD);
        }), Gr()) {
          var ND = ta;
          tc(te, ND);
        }
        return dr;
      }
      function wt(te, we, ne, Ie) {
        if (we !== null && we.tag === ke) {
          a(te, we.sibling);
          var lt = l(we, ne);
          return lt.return = te, lt;
        }
        a(te, we);
        var at = Pb(ne, te.mode, Ie);
        return at.return = te, at;
      }
      function mt(te, we, ne, Ie) {
        for (var lt = ne.key, at = we; at !== null; ) {
          if (at.key === lt) {
            var Dt = ne.type;
            if (Dt === Si) {
              if (at.tag === be) {
                a(te, at.sibling);
                var jt = l(at, ne.props.children);
                return jt.return = te, jt._debugSource = ne._source, jt._debugOwner = ne._owner, jt;
              }
            } else if (at.elementType === Dt || // Keep this check inline so it only runs on the false path:
            sR(at, ne) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Dt == "object" && Dt !== null && Dt.$$typeof === Pt && r0(Dt) === at.type) {
              a(te, at.sibling);
              var Cn = l(at, ne.props);
              return Cn.ref = zp(te, at, ne), Cn.return = te, Cn._debugSource = ne._source, Cn._debugOwner = ne._owner, Cn;
            }
            a(te, at);
            break;
          } else
            t(te, at);
          at = at.sibling;
        }
        if (ne.type === Si) {
          var pn = Zu(ne.props.children, te.mode, Ie, ne.key);
          return pn.return = te, pn;
        } else {
          var dr = Nb(ne, te.mode, Ie);
          return dr.ref = zp(te, we, ne), dr.return = te, dr;
        }
      }
      function tn(te, we, ne, Ie) {
        for (var lt = ne.key, at = we; at !== null; ) {
          if (at.key === lt)
            if (at.tag === J && at.stateNode.containerInfo === ne.containerInfo && at.stateNode.implementation === ne.implementation) {
              a(te, at.sibling);
              var Dt = l(at, ne.children || []);
              return Dt.return = te, Dt;
            } else {
              a(te, at);
              break;
            }
          else
            t(te, at);
          at = at.sibling;
        }
        var jt = Ab(ne, te.mode, Ie);
        return jt.return = te, jt;
      }
      function Xt(te, we, ne, Ie) {
        var lt = typeof ne == "object" && ne !== null && ne.type === Si && ne.key === null;
        if (lt && (ne = ne.props.children), typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Hr:
              return f(mt(te, we, ne, Ie));
            case gr:
              return f(tn(te, we, ne, Ie));
            case Pt:
              var at = ne._payload, Dt = ne._init;
              return Xt(te, we, Dt(at), Ie);
          }
          if (It(ne))
            return Ee(te, we, ne, Ie);
          if (Ht(ne))
            return nt(te, we, ne, Ie);
          fm(te, ne);
        }
        return typeof ne == "string" && ne !== "" || typeof ne == "number" ? f(wt(te, we, "" + ne, Ie)) : (typeof ne == "function" && dm(te), a(te, we));
      }
      return Xt;
    }
    var jf = a0(!0), i0 = a0(!1);
    function c_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function f_(e, t) {
      for (var a = e.child; a !== null; )
        ZO(a, t), a = a.sibling;
    }
    var Bg = Uu(null), Vg;
    Vg = {};
    var pm = null, Uf = null, Ig = null, vm = !1;
    function hm() {
      pm = null, Uf = null, Ig = null, vm = !1;
    }
    function o0() {
      vm = !0;
    }
    function l0() {
      vm = !1;
    }
    function u0(e, t, a) {
      ma(Bg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Vg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Vg;
    }
    function $g(e, t) {
      var a = Bg.current;
      ha(Bg, t), e._currentValue = a;
    }
    function Wg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Nl(i.childLanes, t) ? l !== null && !Nl(l.childLanes, t) && (l.childLanes = Ft(l.childLanes, t)) : (i.childLanes = Ft(i.childLanes, t), l !== null && (l.childLanes = Ft(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function d_(e, t, a) {
      p_(e, t, a);
    }
    function p_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === V) {
                var p = Ms(a), v = ql(On, p);
                v.tag = ym;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, G = T.pending;
                  G === null ? v.next = v : (v.next = G.next, G.next = v), T.pending = v;
                }
              }
              i.lanes = Ft(i.lanes, a);
              var q = i.alternate;
              q !== null && (q.lanes = Ft(q.lanes, a)), Wg(i.return, a, e), s.lanes = Ft(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === b)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Oe) {
          var ue = i.return;
          if (ue === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          ue.lanes = Ft(ue.lanes, a);
          var de = ue.alternate;
          de !== null && (de.lanes = Ft(de.lanes, a)), Wg(ue, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var Ee = l.sibling;
            if (Ee !== null) {
              Ee.return = l.return, l = Ee;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Hf(e, t) {
      pm = e, Uf = null, Ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (fa(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function yr(e) {
      vm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uf === null) {
          if (pm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uf = a, pm.dependencies = {
            lanes: Le,
            firstContext: a
          };
        } else
          Uf = Uf.next = a;
      }
      return t;
    }
    var oc = null;
    function qg(e) {
      oc === null ? oc = [e] : oc.push(e);
    }
    function v_() {
      if (oc !== null) {
        for (var e = 0; e < oc.length; e++) {
          var t = oc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        oc = null;
      }
    }
    function s0(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, mm(e, i);
    }
    function h_(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function m_(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, mm(e, i);
    }
    function Qa(e, t) {
      return mm(e, t);
    }
    var y_ = mm;
    function mm(e, t) {
      e.lanes = Ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ft(a.lanes, t)), a === null && (e.flags & (Fn | oa)) !== St && iR(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ft(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ft(a.childLanes, t) : (l.flags & (Fn | oa)) !== St && iR(e), i = l, l = l.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var c0 = 0, f0 = 1, ym = 2, Yg = 3, gm = !1, Gg, Sm;
    Gg = !1, Sm = null;
    function Qg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Le
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function d0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function ql(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: c0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (Sm === l && !Gg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Gg = !0), hO()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, y_(e, a);
      } else
        return m_(e, l, t, a);
    }
    function bm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if ($d(a)) {
          var s = l.lanes;
          s = qd(s, e.pendingLanes);
          var f = Ft(s, a);
          l.lanes = f, ff(e, f);
        }
      }
    }
    function Xg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var R = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = R : (f.next = R, f = R), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function g_(e, t, a, i, l, s) {
      switch (a.tag) {
        case f0: {
          var f = a.payload;
          if (typeof f == "function") {
            o0();
            var p = f.call(s, i, l);
            {
              if (e.mode & wn) {
                Bn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  Bn(!1);
                }
              }
              l0();
            }
            return p;
          }
          return f;
        }
        case Yg:
          e.flags = e.flags & ~pr | yt;
        // Intentional fallthrough
        case c0: {
          var v = a.payload, R;
          if (typeof v == "function") {
            o0(), R = v.call(s, i, l);
            {
              if (e.mode & wn) {
                Bn(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  Bn(!1);
                }
              }
              l0();
            }
          } else
            R = v;
          return R == null ? i : Vt({}, i, R);
        }
        case ym:
          return gm = !0, i;
      }
      return i;
    }
    function Em(e, t, a, i) {
      var l = e.updateQueue;
      gm = !1, Sm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var v = p, R = v.next;
        v.next = null, f === null ? s = R : f.next = R, f = v;
        var T = e.alternate;
        if (T !== null) {
          var G = T.updateQueue, q = G.lastBaseUpdate;
          q !== f && (q === null ? G.firstBaseUpdate = R : q.next = R, G.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var ue = l.baseState, de = Le, Ee = null, nt = null, wt = null, mt = s;
        do {
          var tn = mt.lane, Xt = mt.eventTime;
          if (Nl(i, tn)) {
            if (wt !== null) {
              var we = {
                eventTime: Xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: on,
                tag: mt.tag,
                payload: mt.payload,
                callback: mt.callback,
                next: null
              };
              wt = wt.next = we;
            }
            ue = g_(e, l, mt, ue, t, a);
            var ne = mt.callback;
            if (ne !== null && // If the update was already committed, we should not queue its
            // callback again.
            mt.lane !== on) {
              e.flags |= Mn;
              var Ie = l.effects;
              Ie === null ? l.effects = [mt] : Ie.push(mt);
            }
          } else {
            var te = {
              eventTime: Xt,
              lane: tn,
              tag: mt.tag,
              payload: mt.payload,
              callback: mt.callback,
              next: null
            };
            wt === null ? (nt = wt = te, Ee = ue) : wt = wt.next = te, de = Ft(de, tn);
          }
          if (mt = mt.next, mt === null) {
            if (p = l.shared.pending, p === null)
              break;
            var lt = p, at = lt.next;
            lt.next = null, mt = at, l.lastBaseUpdate = lt, l.shared.pending = null;
          }
        } while (!0);
        wt === null && (Ee = ue), l.baseState = Ee, l.firstBaseUpdate = nt, l.lastBaseUpdate = wt;
        var Dt = l.shared.interleaved;
        if (Dt !== null) {
          var jt = Dt;
          do
            de = Ft(de, jt.lane), jt = jt.next;
          while (jt !== Dt);
        } else s === null && (l.shared.lanes = Le);
        av(de), e.lanes = de, e.memoizedState = ue;
      }
      Sm = null;
    }
    function S_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function p0() {
      gm = !1;
    }
    function wm() {
      return gm;
    }
    function v0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, S_(f, a));
        }
    }
    var Mp = {}, Iu = Uu(Mp), Lp = Uu(Mp), Rm = Uu(Mp);
    function Cm(e) {
      if (e === Mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function h0() {
      var e = Cm(Rm.current);
      return e;
    }
    function Kg(e, t) {
      ma(Rm, t, e), ma(Lp, e, e), ma(Iu, Mp, e);
      var a = Ax(t);
      ha(Iu, e), ma(Iu, a, e);
    }
    function Ff(e) {
      ha(Iu, e), ha(Lp, e), ha(Rm, e);
    }
    function Zg() {
      var e = Cm(Iu.current);
      return e;
    }
    function m0(e) {
      Cm(Rm.current);
      var t = Cm(Iu.current), a = jx(t, e.type);
      t !== a && (ma(Lp, e, e), ma(Iu, a, e));
    }
    function Jg(e) {
      Lp.current === e && (ha(Iu, e), ha(Lp, e));
    }
    var b_ = 0, y0 = 1, g0 = 1, Np = 2, po = Uu(b_);
    function eS(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & y0;
    }
    function tS(e, t) {
      return e & y0 | t;
    }
    function E_(e, t) {
      return e | t;
    }
    function $u(e, t) {
      ma(po, t, e);
    }
    function Vf(e) {
      ha(po, e);
    }
    function w_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function xm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === E) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Sg(i))
              return t;
          }
        } else if (t.tag === Pe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & yt) !== St;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Xa = (
      /*   */
      0
    ), xr = (
      /* */
      1
    ), Jo = (
      /*  */
      2
    ), Tr = (
      /*    */
      4
    ), Qr = (
      /*   */
      8
    ), nS = [];
    function rS() {
      for (var e = 0; e < nS.length; e++) {
        var t = nS[e];
        t._workInProgressVersionPrimary = null;
      }
      nS.length = 0;
    }
    function R_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ot = h.ReactCurrentDispatcher, Pp = h.ReactCurrentBatchConfig, aS, If;
    aS = /* @__PURE__ */ new Set();
    var lc = Le, Rn = null, _r = null, Or = null, Tm = !1, Ap = !1, jp = 0, C_ = 0, x_ = 25, _e = null, Vi = null, Wu = -1, iS = !1;
    function gn() {
      {
        var e = _e;
        Vi === null ? Vi = [e] : Vi.push(e);
      }
    }
    function Xe() {
      {
        var e = _e;
        Vi !== null && (Wu++, Vi[Wu] !== e && T_(e));
      }
    }
    function $f(e) {
      e != null && !It(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", _e, typeof e);
    }
    function T_(e) {
      {
        var t = Nt(Rn);
        if (!aS.has(t) && (aS.add(t), Vi !== null)) {
          for (var a = "", i = 30, l = 0; l <= Wu; l++) {
            for (var s = Vi[l], f = l === Wu ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ya() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function oS(e, t) {
      if (iS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", _e), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, _e, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!je(e[a], t[a]))
          return !1;
      return !0;
    }
    function Wf(e, t, a, i, l, s) {
      lc = s, Rn = t, Vi = e !== null ? e._debugHookTypes : null, Wu = -1, iS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Le, e !== null && e.memoizedState !== null ? ot.current = F0 : Vi !== null ? ot.current = H0 : ot.current = U0;
      var f = a(i, l);
      if (Ap) {
        var p = 0;
        do {
          if (Ap = !1, jp = 0, p >= x_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, iS = !1, _r = null, Or = null, t.updateQueue = null, Wu = -1, ot.current = B0, f = a(i, l);
        } while (Ap);
      }
      ot.current = Hm, t._debugHookTypes = Vi;
      var v = _r !== null && _r.next !== null;
      if (lc = Le, Rn = null, _r = null, Or = null, _e = null, Vi = null, Wu = -1, e !== null && (e.flags & er) !== (t.flags & er) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & qt) !== bt && g("Internal React error: Expected static flag was missing. Please notify the React team."), Tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function qf() {
      var e = jp !== 0;
      return jp = 0, e;
    }
    function S0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & fn) !== bt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ls(e.lanes, a);
    }
    function b0() {
      if (ot.current = Hm, Tm) {
        for (var e = Rn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Tm = !1;
      }
      lc = Le, Rn = null, _r = null, Or = null, Vi = null, Wu = -1, _e = null, L0 = !1, Ap = !1, jp = 0;
    }
    function el() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Or === null ? Rn.memoizedState = Or = e : Or = Or.next = e, Or;
    }
    function Ii() {
      var e;
      if (_r === null) {
        var t = Rn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = _r.next;
      var a;
      if (Or === null ? a = Rn.memoizedState : a = Or.next, a !== null)
        Or = a, a = Or.next, _r = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        _r = e;
        var i = {
          memoizedState: _r.memoizedState,
          baseState: _r.baseState,
          baseQueue: _r.baseQueue,
          queue: _r.queue,
          next: null
        };
        Or === null ? Rn.memoizedState = Or = i : Or = Or.next = i;
      }
      return Or;
    }
    function E0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function lS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function uS(e, t, a) {
      var i = el(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Le,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = k_.bind(null, Rn, s);
      return [i.memoizedState, f];
    }
    function sS(e, t, a) {
      var i = Ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = _r, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, R = p.next;
          f.next = R, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var T = f.next, G = s.baseState, q = null, ue = null, de = null, Ee = T;
        do {
          var nt = Ee.lane;
          if (Nl(lc, nt)) {
            if (de !== null) {
              var mt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: on,
                action: Ee.action,
                hasEagerState: Ee.hasEagerState,
                eagerState: Ee.eagerState,
                next: null
              };
              de = de.next = mt;
            }
            if (Ee.hasEagerState)
              G = Ee.eagerState;
            else {
              var tn = Ee.action;
              G = e(G, tn);
            }
          } else {
            var wt = {
              lane: nt,
              action: Ee.action,
              hasEagerState: Ee.hasEagerState,
              eagerState: Ee.eagerState,
              next: null
            };
            de === null ? (ue = de = wt, q = G) : de = de.next = wt, Rn.lanes = Ft(Rn.lanes, nt), av(nt);
          }
          Ee = Ee.next;
        } while (Ee !== null && Ee !== T);
        de === null ? q = G : de.next = ue, je(G, i.memoizedState) || qp(), i.memoizedState = G, i.baseState = q, i.baseQueue = de, l.lastRenderedState = G;
      }
      var Xt = l.interleaved;
      if (Xt !== null) {
        var te = Xt;
        do {
          var we = te.lane;
          Rn.lanes = Ft(Rn.lanes, we), av(we), te = te.next;
        } while (te !== Xt);
      } else f === null && (l.lanes = Le);
      var ne = l.dispatch;
      return [i.memoizedState, ne];
    }
    function cS(e, t, a) {
      var i = Ii(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var v = f.next, R = v;
        do {
          var T = R.action;
          p = e(p, T), R = R.next;
        } while (R !== v);
        je(p, i.memoizedState) || qp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function Bk(e, t, a) {
    }
    function Vk(e, t, a) {
    }
    function fS(e, t, a) {
      var i = Rn, l = el(), s, f = Gr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), If || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), If = !0);
      } else {
        if (s = t(), !If) {
          var p = t();
          je(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), If = !0);
        }
        var v = ay();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        sf(v, lc) || w0(i, t, s);
      }
      l.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return l.queue = R, zm(C0.bind(null, i, R, e), [e]), i.flags |= ia, Up(xr | Qr, R0.bind(null, i, R, s, t), void 0, null), s;
    }
    function _m(e, t, a) {
      var i = Rn, l = Ii(), s = t();
      if (!If) {
        var f = t();
        je(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), If = !0);
      }
      var p = l.memoizedState, v = !je(p, s);
      v && (l.memoizedState = s, qp());
      var R = l.queue;
      if (Fp(C0.bind(null, i, R, e), [e]), R.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Or !== null && Or.memoizedState.tag & xr) {
        i.flags |= ia, Up(xr | Qr, R0.bind(null, i, R, s, t), void 0, null);
        var T = ay();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        sf(T, lc) || w0(i, t, s);
      }
      return s;
    }
    function w0(e, t, a) {
      e.flags |= wu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Rn.updateQueue;
      if (l === null)
        l = E0(), Rn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function R0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, x0(t) && T0(e);
    }
    function C0(e, t, a) {
      var i = function() {
        x0(t) && T0(e);
      };
      return a(i);
    }
    function x0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !je(a, i);
      } catch {
        return !0;
      }
    }
    function T0(e) {
      var t = Qa(e, Ot);
      t !== null && Mr(t, e, Ot, On);
    }
    function Om(e) {
      var t = el();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Le,
        dispatch: null,
        lastRenderedReducer: lS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = z_.bind(null, Rn, a);
      return [t.memoizedState, i];
    }
    function dS(e) {
      return sS(lS);
    }
    function pS(e) {
      return cS(lS);
    }
    function Up(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Rn.updateQueue;
      if (s === null)
        s = E0(), Rn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var p = f.next;
          f.next = l, l.next = p, s.lastEffect = l;
        }
      }
      return l;
    }
    function vS(e) {
      var t = el();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Dm(e) {
      var t = Ii();
      return t.memoizedState;
    }
    function Hp(e, t, a, i) {
      var l = el(), s = i === void 0 ? null : i;
      Rn.flags |= e, l.memoizedState = Up(xr | t, a, void 0, s);
    }
    function km(e, t, a, i) {
      var l = Ii(), s = i === void 0 ? null : i, f = void 0;
      if (_r !== null) {
        var p = _r.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (oS(s, v)) {
            l.memoizedState = Up(t, a, f, s);
            return;
          }
        }
      }
      Rn.flags |= e, l.memoizedState = Up(xr | t, a, f, s);
    }
    function zm(e, t) {
      return (Rn.mode & fn) !== bt ? Hp(ki | ia | Pc, Qr, e, t) : Hp(ia | Pc, Qr, e, t);
    }
    function Fp(e, t) {
      return km(ia, Qr, e, t);
    }
    function hS(e, t) {
      return Hp(Zt, Jo, e, t);
    }
    function Mm(e, t) {
      return km(Zt, Jo, e, t);
    }
    function mS(e, t) {
      var a = Zt;
      return a |= eo, (Rn.mode & fn) !== bt && (a |= Po), Hp(a, Tr, e, t);
    }
    function Lm(e, t) {
      return km(Zt, Tr, e, t);
    }
    function _0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function yS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Zt;
      return l |= eo, (Rn.mode & fn) !== bt && (l |= Po), Hp(l, Tr, _0.bind(null, t, e), i);
    }
    function Nm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return km(Zt, Tr, _0.bind(null, t, e), i);
    }
    function __(e, t) {
    }
    var Pm = __;
    function gS(e, t) {
      var a = el(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Am(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (oS(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function SS(e, t) {
      var a = el(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function jm(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (oS(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function bS(e) {
      var t = el();
      return t.memoizedState = e, e;
    }
    function O0(e) {
      var t = Ii(), a = _r, i = a.memoizedState;
      return k0(t, i, e);
    }
    function D0(e) {
      var t = Ii();
      if (_r === null)
        return t.memoizedState = e, e;
      var a = _r.memoizedState;
      return k0(t, a, e);
    }
    function k0(e, t, a) {
      var i = !Vd(lc);
      if (i) {
        if (!je(a, t)) {
          var l = Wd();
          Rn.lanes = Ft(Rn.lanes, l), av(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function O_(e, t, a) {
      var i = qa();
      rr(vh(i, Ni)), e(!0);
      var l = Pp.transition;
      Pp.transition = {};
      var s = Pp.transition;
      Pp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (rr(i), Pp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && H("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function ES() {
      var e = Om(!1), t = e[0], a = e[1], i = O_.bind(null, a), l = el();
      return l.memoizedState = i, [t, i];
    }
    function z0() {
      var e = dS(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    function M0() {
      var e = pS(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    var L0 = !1;
    function D_() {
      return L0;
    }
    function wS() {
      var e = el(), t = ay(), a = t.identifierPrefix, i;
      if (Gr()) {
        var l = qT();
        i = ":" + a + "R" + l;
        var s = jp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = C_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Um() {
      var e = Ii(), t = e.memoizedState;
      return t;
    }
    function k_(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (N0(e))
        P0(t, l);
      else {
        var s = s0(e, t, l, i);
        if (s !== null) {
          var f = ka();
          Mr(s, e, i, f), A0(s, t, i);
        }
      }
      j0(e, i);
    }
    function z_(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (N0(e))
        P0(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === Le && (s === null || s.lanes === Le)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ot.current, ot.current = vo;
            try {
              var v = t.lastRenderedState, R = f(v, a);
              if (l.hasEagerState = !0, l.eagerState = R, je(R, v)) {
                h_(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ot.current = p;
            }
          }
        }
        var T = s0(e, t, l, i);
        if (T !== null) {
          var G = ka();
          Mr(T, e, i, G), A0(T, t, i);
        }
      }
      j0(e, i);
    }
    function N0(e) {
      var t = e.alternate;
      return e === Rn || t !== null && t === Rn;
    }
    function P0(e, t) {
      Ap = Tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function A0(e, t, a) {
      if ($d(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var l = Ft(i, a);
        t.lanes = l, ff(e, l);
      }
    }
    function j0(e, t, a) {
      Rs(e, t);
    }
    var Hm = {
      readContext: yr,
      useCallback: ya,
      useContext: ya,
      useEffect: ya,
      useImperativeHandle: ya,
      useInsertionEffect: ya,
      useLayoutEffect: ya,
      useMemo: ya,
      useReducer: ya,
      useRef: ya,
      useState: ya,
      useDebugValue: ya,
      useDeferredValue: ya,
      useTransition: ya,
      useMutableSource: ya,
      useSyncExternalStore: ya,
      useId: ya,
      unstable_isNewReconciler: ge
    }, U0 = null, H0 = null, F0 = null, B0 = null, tl = null, vo = null, Fm = null;
    {
      var RS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, At = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      U0 = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", gn(), $f(t), gS(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", gn(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", gn(), $f(t), zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", gn(), $f(a), yS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", gn(), $f(t), hS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", gn(), $f(t), mS(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", gn(), $f(t);
          var a = ot.current;
          ot.current = tl;
          try {
            return SS(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", gn();
          var i = ot.current;
          ot.current = tl;
          try {
            return uS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", gn(), vS(e);
        },
        useState: function(e) {
          _e = "useState", gn();
          var t = ot.current;
          ot.current = tl;
          try {
            return Om(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", gn(), void 0;
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", gn(), bS(e);
        },
        useTransition: function() {
          return _e = "useTransition", gn(), ES();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", gn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", gn(), fS(e, t, a);
        },
        useId: function() {
          return _e = "useId", gn(), wS();
        },
        unstable_isNewReconciler: ge
      }, H0 = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", Xe(), gS(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", Xe(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", Xe(), zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", Xe(), yS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", Xe(), hS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", Xe(), mS(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", Xe();
          var a = ot.current;
          ot.current = tl;
          try {
            return SS(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", Xe();
          var i = ot.current;
          ot.current = tl;
          try {
            return uS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", Xe(), vS(e);
        },
        useState: function(e) {
          _e = "useState", Xe();
          var t = ot.current;
          ot.current = tl;
          try {
            return Om(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", Xe(), void 0;
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", Xe(), bS(e);
        },
        useTransition: function() {
          return _e = "useTransition", Xe(), ES();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", Xe(), fS(e, t, a);
        },
        useId: function() {
          return _e = "useId", Xe(), wS();
        },
        unstable_isNewReconciler: ge
      }, F0 = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", Xe(), Am(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", Xe(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", Xe(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", Xe(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", Xe(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", Xe(), Lm(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", Xe();
          var a = ot.current;
          ot.current = vo;
          try {
            return jm(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", Xe();
          var i = ot.current;
          ot.current = vo;
          try {
            return sS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", Xe(), Dm();
        },
        useState: function(e) {
          _e = "useState", Xe();
          var t = ot.current;
          ot.current = vo;
          try {
            return dS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", Xe(), Pm();
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", Xe(), O0(e);
        },
        useTransition: function() {
          return _e = "useTransition", Xe(), z0();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", Xe(), _m(e, t);
        },
        useId: function() {
          return _e = "useId", Xe(), Um();
        },
        unstable_isNewReconciler: ge
      }, B0 = {
        readContext: function(e) {
          return yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", Xe(), Am(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", Xe(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", Xe(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", Xe(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", Xe(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", Xe(), Lm(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", Xe();
          var a = ot.current;
          ot.current = Fm;
          try {
            return jm(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", Xe();
          var i = ot.current;
          ot.current = Fm;
          try {
            return cS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", Xe(), Dm();
        },
        useState: function(e) {
          _e = "useState", Xe();
          var t = ot.current;
          ot.current = Fm;
          try {
            return pS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", Xe(), Pm();
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", Xe(), D0(e);
        },
        useTransition: function() {
          return _e = "useTransition", Xe(), M0();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", Xe(), _m(e, t);
        },
        useId: function() {
          return _e = "useId", Xe(), Um();
        },
        unstable_isNewReconciler: ge
      }, tl = {
        readContext: function(e) {
          return RS(), yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", At(), gn(), gS(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", At(), gn(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", At(), gn(), zm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", At(), gn(), yS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", At(), gn(), hS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", At(), gn(), mS(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", At(), gn();
          var a = ot.current;
          ot.current = tl;
          try {
            return SS(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", At(), gn();
          var i = ot.current;
          ot.current = tl;
          try {
            return uS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", At(), gn(), vS(e);
        },
        useState: function(e) {
          _e = "useState", At(), gn();
          var t = ot.current;
          ot.current = tl;
          try {
            return Om(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", At(), gn(), void 0;
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", At(), gn(), bS(e);
        },
        useTransition: function() {
          return _e = "useTransition", At(), gn(), ES();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", At(), gn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", At(), gn(), fS(e, t, a);
        },
        useId: function() {
          return _e = "useId", At(), gn(), wS();
        },
        unstable_isNewReconciler: ge
      }, vo = {
        readContext: function(e) {
          return RS(), yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", At(), Xe(), Am(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", At(), Xe(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", At(), Xe(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", At(), Xe(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", At(), Xe(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", At(), Xe(), Lm(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", At(), Xe();
          var a = ot.current;
          ot.current = vo;
          try {
            return jm(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", At(), Xe();
          var i = ot.current;
          ot.current = vo;
          try {
            return sS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", At(), Xe(), Dm();
        },
        useState: function(e) {
          _e = "useState", At(), Xe();
          var t = ot.current;
          ot.current = vo;
          try {
            return dS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", At(), Xe(), Pm();
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", At(), Xe(), O0(e);
        },
        useTransition: function() {
          return _e = "useTransition", At(), Xe(), z0();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", At(), Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", At(), Xe(), _m(e, t);
        },
        useId: function() {
          return _e = "useId", At(), Xe(), Um();
        },
        unstable_isNewReconciler: ge
      }, Fm = {
        readContext: function(e) {
          return RS(), yr(e);
        },
        useCallback: function(e, t) {
          return _e = "useCallback", At(), Xe(), Am(e, t);
        },
        useContext: function(e) {
          return _e = "useContext", At(), Xe(), yr(e);
        },
        useEffect: function(e, t) {
          return _e = "useEffect", At(), Xe(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return _e = "useImperativeHandle", At(), Xe(), Nm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return _e = "useInsertionEffect", At(), Xe(), Mm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return _e = "useLayoutEffect", At(), Xe(), Lm(e, t);
        },
        useMemo: function(e, t) {
          _e = "useMemo", At(), Xe();
          var a = ot.current;
          ot.current = vo;
          try {
            return jm(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          _e = "useReducer", At(), Xe();
          var i = ot.current;
          ot.current = vo;
          try {
            return cS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return _e = "useRef", At(), Xe(), Dm();
        },
        useState: function(e) {
          _e = "useState", At(), Xe();
          var t = ot.current;
          ot.current = vo;
          try {
            return pS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return _e = "useDebugValue", At(), Xe(), Pm();
        },
        useDeferredValue: function(e) {
          return _e = "useDeferredValue", At(), Xe(), D0(e);
        },
        useTransition: function() {
          return _e = "useTransition", At(), Xe(), M0();
        },
        useMutableSource: function(e, t, a) {
          return _e = "useMutableSource", At(), Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return _e = "useSyncExternalStore", At(), Xe(), _m(e, t);
        },
        useId: function() {
          return _e = "useId", At(), Xe(), Um();
        },
        unstable_isNewReconciler: ge
      };
    }
    var qu = w.unstable_now, V0 = 0, Bm = -1, Bp = -1, Vm = -1, CS = !1, Im = !1;
    function I0() {
      return CS;
    }
    function M_() {
      Im = !0;
    }
    function L_() {
      CS = !1, Im = !1;
    }
    function N_() {
      CS = Im, Im = !1;
    }
    function $0() {
      return V0;
    }
    function W0() {
      V0 = qu();
    }
    function xS(e) {
      Bp = qu(), e.actualStartTime < 0 && (e.actualStartTime = qu());
    }
    function q0(e) {
      Bp = -1;
    }
    function $m(e, t) {
      if (Bp >= 0) {
        var a = qu() - Bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Bp = -1;
      }
    }
    function nl(e) {
      if (Bm >= 0) {
        var t = qu() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case C:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function TS(e) {
      if (Vm >= 0) {
        var t = qu() - Vm;
        Vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case C:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function rl() {
      Bm = qu();
    }
    function _S() {
      Vm = qu();
    }
    function OS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ho(e, t) {
      if (e && e.defaultProps) {
        var a = Vt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var DS = {}, kS, zS, MS, LS, NS, Y0, Wm, PS, AS, jS, Vp;
    {
      kS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), MS = /* @__PURE__ */ new Set(), LS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), AS = /* @__PURE__ */ new Set(), jS = /* @__PURE__ */ new Set(), Vp = /* @__PURE__ */ new Set();
      var G0 = /* @__PURE__ */ new Set();
      Wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          G0.has(a) || (G0.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Y0 = function(e, t) {
        if (t === void 0) {
          var a = nn(e) || "Component";
          NS.has(a) || (NS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(DS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(DS);
    }
    function US(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & wn) {
          Bn(!0);
          try {
            s = a(i, l);
          } finally {
            Bn(!1);
          }
        }
        Y0(t, s);
      }
      var f = s == null ? l : Vt({}, l, s);
      if (e.memoizedState = f, e.lanes === Le) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var HS = {
      isMounted: Zv,
      enqueueSetState: function(e, t, a) {
        var i = Eu(e), l = ka(), s = Xu(i), f = ql(l, s);
        f.payload = t, a != null && (Wm(a, "setState"), f.callback = a);
        var p = Vu(i, f, s);
        p !== null && (Mr(p, i, s, l), bm(p, i, s)), Rs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Eu(e), l = ka(), s = Xu(i), f = ql(l, s);
        f.tag = f0, f.payload = t, a != null && (Wm(a, "replaceState"), f.callback = a);
        var p = Vu(i, f, s);
        p !== null && (Mr(p, i, s, l), bm(p, i, s)), Rs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Eu(e), i = ka(), l = Xu(a), s = ql(i, l);
        s.tag = ym, t != null && (Wm(t, "forceUpdate"), s.callback = t);
        var f = Vu(a, s, l);
        f !== null && (Mr(f, a, l, i), bm(f, a, l)), Vc(a, l);
      }
    };
    function Q0(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & wn) {
            Bn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Bn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", nn(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !dt(a, i) || !dt(l, s) : !0;
    }
    function P_(e, t, a) {
      var i = e.stateNode;
      {
        var l = nn(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & wn) === bt && (Vp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Vp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & wn) === bt && (Vp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !AS.has(t) && (AS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nn(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !MS.has(t) && (MS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nn(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || It(p)) && g("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function X0(e, t) {
      t.updater = HS, e.stateNode = t, bl(t, e), t._reactInternalInstance = DS;
    }
    function K0(e, t, a) {
      var i = !1, l = mi, s = mi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === N && f._context === void 0
        );
        if (!p && !jS.has(t)) {
          jS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ei ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nn(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = yr(f);
      else {
        l = Mf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? Lf(e, l) : mi;
      }
      var T = new t(a, s);
      if (e.mode & wn) {
        Bn(!0);
        try {
          T = new t(a, s);
        } finally {
          Bn(!1);
        }
      }
      var G = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      X0(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && G === null) {
          var q = nn(t) || "Component";
          zS.has(q) || (zS.add(q), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", q, T.state === null ? "null" : "undefined", q));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var ue = null, de = null, Ee = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? ue = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (ue = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? de = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (de = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ee = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (Ee = "UNSAFE_componentWillUpdate"), ue !== null || de !== null || Ee !== null) {
            var nt = nn(t) || "Component", wt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            LS.has(nt) || (LS.add(nt), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, nt, wt, ue !== null ? `
  ` + ue : "", de !== null ? `
  ` + de : "", Ee !== null ? `
  ` + Ee : ""));
          }
        }
      }
      return i && FE(e, l, s), T;
    }
    function A_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Nt(e) || "Component"), HS.enqueueReplaceState(t, t.state, null));
    }
    function Z0(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = Nt(e) || "Component";
          kS.has(s) || (kS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        HS.enqueueReplaceState(t, t.state, null);
      }
    }
    function FS(e, t, a, i) {
      P_(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Qg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = yr(s);
      else {
        var f = Mf(e, t, !0);
        l.context = Lf(e, f);
      }
      {
        if (l.state === a) {
          var p = nn(t) || "Component";
          PS.has(p) || (PS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & wn && fo.recordLegacyContextWarning(e, l), fo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (US(e, t, v, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (A_(e, l), Em(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var R = Zt;
        R |= eo, (e.mode & fn) !== bt && (R |= Po), e.flags |= R;
      }
    }
    function j_(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, v = mi;
      if (typeof p == "object" && p !== null)
        v = yr(p);
      else {
        var R = Mf(e, t, !0);
        v = Lf(e, R);
      }
      var T = t.getDerivedStateFromProps, G = typeof T == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !G && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== v) && Z0(e, l, a, v), p0();
      var q = e.memoizedState, ue = l.state = q;
      if (Em(e, a, l, i), ue = e.memoizedState, s === a && q === ue && !nm() && !wm()) {
        if (typeof l.componentDidMount == "function") {
          var de = Zt;
          de |= eo, (e.mode & fn) !== bt && (de |= Po), e.flags |= de;
        }
        return !1;
      }
      typeof T == "function" && (US(e, t, T, a), ue = e.memoizedState);
      var Ee = wm() || Q0(e, t, s, a, q, ue, v);
      if (Ee) {
        if (!G && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var nt = Zt;
          nt |= eo, (e.mode & fn) !== bt && (nt |= Po), e.flags |= nt;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var wt = Zt;
          wt |= eo, (e.mode & fn) !== bt && (wt |= Po), e.flags |= wt;
        }
        e.memoizedProps = a, e.memoizedState = ue;
      }
      return l.props = a, l.state = ue, l.context = v, Ee;
    }
    function U_(e, t, a, i, l) {
      var s = t.stateNode;
      d0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ho(t.type, f);
      s.props = p;
      var v = t.pendingProps, R = s.context, T = a.contextType, G = mi;
      if (typeof T == "object" && T !== null)
        G = yr(T);
      else {
        var q = Mf(t, a, !0);
        G = Lf(t, q);
      }
      var ue = a.getDerivedStateFromProps, de = typeof ue == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !de && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || R !== G) && Z0(t, s, i, G), p0();
      var Ee = t.memoizedState, nt = s.state = Ee;
      if (Em(t, i, s, l), nt = t.memoizedState, f === v && Ee === nt && !nm() && !wm() && !$e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= Zt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= sr), !1;
      typeof ue == "function" && (US(t, a, ue, i), nt = t.memoizedState);
      var wt = wm() || Q0(t, a, p, i, Ee, nt, G) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      $e;
      return wt ? (!de && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, nt, G), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, nt, G)), typeof s.componentDidUpdate == "function" && (t.flags |= Zt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= sr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= Zt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= sr), t.memoizedProps = i, t.memoizedState = nt), s.props = i, s.state = nt, s.context = G, wt;
    }
    function uc(e, t) {
      return {
        value: e,
        source: t,
        stack: Gi(t),
        digest: null
      };
    }
    function BS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function H_(e, t) {
      return !0;
    }
    function VS(e, t) {
      try {
        var a = H_(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === V)
            return;
          console.error(i);
        }
        var p = l ? Nt(l) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === I)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = Nt(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var G = v + `
` + f + `

` + ("" + R);
        console.error(G);
      } catch (q) {
        setTimeout(function() {
          throw q;
        });
      }
    }
    var F_ = typeof WeakMap == "function" ? WeakMap : Map;
    function J0(e, t, a) {
      var i = ql(On, a);
      i.tag = Yg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        MO(l), VS(e, t);
      }, i;
    }
    function IS(e, t, a) {
      var i = ql(On, a);
      i.tag = Yg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          cR(e), VS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        cR(e), VS(e, t), typeof l != "function" && kO(this);
        var v = t.value, R = t.stack;
        this.componentDidCatch(v, {
          componentStack: R !== null ? R : ""
        }), typeof l != "function" && (fa(e.lanes, Ot) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Nt(e) || "Unknown"));
      }), i;
    }
    function ew(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new F_(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = LO.bind(null, e, t, a);
        sa && iv(e, a), t.then(s, s);
      }
    }
    function B_(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function V_(e, t) {
      var a = e.tag;
      if ((e.mode & qt) === bt && (a === A || a === x || a === P)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function tw(e) {
      var t = e;
      do {
        if (t.tag === E && w_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function nw(e, t, a, i, l) {
      if ((e.mode & qt) === bt) {
        if (e === t)
          e.flags |= pr;
        else {
          if (e.flags |= yt, a.flags |= Nc, a.flags &= -52805, a.tag === V) {
            var s = a.alternate;
            if (s === null)
              a.tag = ve;
            else {
              var f = ql(On, Ot);
              f.tag = ym, Vu(a, f, Ot);
            }
          }
          a.lanes = Ft(a.lanes, Ot);
        }
        return e;
      }
      return e.flags |= pr, e.lanes = l, e;
    }
    function I_(e, t, a, i, l) {
      if (a.flags |= ys, sa && iv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        V_(a), Gr() && a.mode & qt && YE();
        var f = tw(t);
        if (f !== null) {
          f.flags &= ~Lr, nw(f, t, a, e, l), f.mode & qt && ew(e, s, l), B_(f, e, s);
          return;
        } else {
          if (!oh(l)) {
            ew(e, s, l), wb();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Gr() && a.mode & qt) {
        YE();
        var v = tw(t);
        if (v !== null) {
          (v.flags & pr) === St && (v.flags |= Lr), nw(v, t, a, e, l), Pg(uc(i, a));
          return;
        }
      }
      i = uc(i, a), wO(i);
      var R = t;
      do {
        switch (R.tag) {
          case I: {
            var T = i;
            R.flags |= pr;
            var G = Ms(l);
            R.lanes = Ft(R.lanes, G);
            var q = J0(R, T, G);
            Xg(R, q);
            return;
          }
          case V:
            var ue = i, de = R.type, Ee = R.stateNode;
            if ((R.flags & yt) === St && (typeof de.getDerivedStateFromError == "function" || Ee !== null && typeof Ee.componentDidCatch == "function" && !tR(Ee))) {
              R.flags |= pr;
              var nt = Ms(l);
              R.lanes = Ft(R.lanes, nt);
              var wt = IS(R, ue, nt);
              Xg(R, wt);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function $_() {
      return null;
    }
    var Ip = h.ReactCurrentOwner, mo = !1, $S, $p, WS, qS, YS, sc, GS, qm, Wp;
    $S = {}, $p = {}, WS = {}, qS = {}, YS = {}, sc = !1, GS = {}, qm = {}, Wp = {};
    function Oa(e, t, a, i) {
      e === null ? t.child = i0(t, null, a, i) : t.child = jf(t, e.child, a, i);
    }
    function W_(e, t, a, i) {
      t.child = jf(t, e.child, null, i), t.child = jf(t, null, a, i);
    }
    function rw(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && so(
          s,
          i,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var f = a.render, p = t.ref, v, R;
      Hf(t, l), Ca(t);
      {
        if (Ip.current = t, ur(!0), v = Wf(e, t, f, i, p, l), R = qf(), t.mode & wn) {
          Bn(!0);
          try {
            v = Wf(e, t, f, i, p, l), R = qf();
          } finally {
            Bn(!1);
          }
        }
        ur(!1);
      }
      return xa(), e !== null && !mo ? (S0(e, t, l), Yl(e, t, l)) : (Gr() && R && Dg(t), t.flags |= fi, Oa(e, t, v, l), t.child);
    }
    function aw(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (XO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = ed(s), t.tag = P, t.type = f, KS(t, s), iw(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          if (p && so(
            p,
            i,
            // Resolved props
            "prop",
            nn(s)
          ), a.defaultProps !== void 0) {
            var v = nn(s) || "Unknown";
            Wp[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Wp[v] = !0);
          }
        }
        var R = Lb(a.type, null, i, t, t.mode, l);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var T = a.type, G = T.propTypes;
        G && so(
          G,
          i,
          // Resolved props
          "prop",
          nn(T)
        );
      }
      var q = e.child, ue = rb(e, l);
      if (!ue) {
        var de = q.memoizedProps, Ee = a.compare;
        if (Ee = Ee !== null ? Ee : dt, Ee(de, i) && e.ref === t.ref)
          return Yl(e, t, l);
      }
      t.flags |= fi;
      var nt = vc(q, i);
      return nt.ref = t.ref, nt.return = t, t.child = nt, nt;
    }
    function iw(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Pt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && so(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            nn(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (dt(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (mo = !1, t.pendingProps = i = T, rb(e, l))
            (e.flags & Nc) !== St && (mo = !0);
          else return t.lanes = e.lanes, Yl(e, t, l);
      }
      return QS(e, t, a, i, l);
    }
    function ow(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || W)
        if ((t.mode & qt) === bt) {
          var f = {
            baseLanes: Le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, iy(t, a);
        } else if (fa(a, ca)) {
          var G = {
            baseLanes: Le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = G;
          var q = s !== null ? s.baseLanes : a;
          iy(t, q);
        } else {
          var p = null, v;
          if (s !== null) {
            var R = s.baseLanes;
            v = Ft(R, a);
          } else
            v = a;
          t.lanes = t.childLanes = ca;
          var T = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, iy(t, v), null;
        }
      else {
        var ue;
        s !== null ? (ue = Ft(s.baseLanes, a), t.memoizedState = null) : ue = a, iy(t, ue);
      }
      return Oa(e, t, l, a), t.child;
    }
    function q_(e, t, a) {
      var i = t.pendingProps;
      return Oa(e, t, i, a), t.child;
    }
    function Y_(e, t, a) {
      var i = t.pendingProps.children;
      return Oa(e, t, i, a), t.child;
    }
    function G_(e, t, a) {
      {
        t.flags |= Zt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Oa(e, t, s, a), t.child;
    }
    function lw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= $n, t.flags |= Ru);
    }
    function QS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && so(
          s,
          i,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var f;
      {
        var p = Mf(t, a, !0);
        f = Lf(t, p);
      }
      var v, R;
      Hf(t, l), Ca(t);
      {
        if (Ip.current = t, ur(!0), v = Wf(e, t, a, i, f, l), R = qf(), t.mode & wn) {
          Bn(!0);
          try {
            v = Wf(e, t, a, i, f, l), R = qf();
          } finally {
            Bn(!1);
          }
        }
        ur(!1);
      }
      return xa(), e !== null && !mo ? (S0(e, t, l), Yl(e, t, l)) : (Gr() && R && Dg(t), t.flags |= fi, Oa(e, t, v, l), t.child);
    }
    function uw(e, t, a, i, l) {
      {
        switch (fD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= yt, t.flags |= pr;
            var R = new Error("Simulated error coming from DevTools"), T = Ms(l);
            t.lanes = Ft(t.lanes, T);
            var G = IS(t, uc(R, t), T);
            Xg(t, G);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var q = a.propTypes;
          q && so(
            q,
            i,
            // Resolved props
            "prop",
            nn(a)
          );
        }
      }
      var ue;
      Zo(a) ? (ue = !0, am(t)) : ue = !1, Hf(t, l);
      var de = t.stateNode, Ee;
      de === null ? (Gm(e, t), K0(t, a, i), FS(t, a, i, l), Ee = !0) : e === null ? Ee = j_(t, a, i, l) : Ee = U_(e, t, a, i, l);
      var nt = XS(e, t, a, Ee, ue, l);
      {
        var wt = t.stateNode;
        Ee && wt.props !== i && (sc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Nt(t) || "a component"), sc = !0);
      }
      return nt;
    }
    function XS(e, t, a, i, l, s) {
      lw(e, t);
      var f = (t.flags & yt) !== St;
      if (!i && !f)
        return l && IE(t, a, !1), Yl(e, t, s);
      var p = t.stateNode;
      Ip.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, q0();
      else {
        Ca(t);
        {
          if (ur(!0), v = p.render(), t.mode & wn) {
            Bn(!0);
            try {
              p.render();
            } finally {
              Bn(!1);
            }
          }
          ur(!1);
        }
        xa();
      }
      return t.flags |= fi, e !== null && f ? W_(e, t, v, s) : Oa(e, t, v, s), t.memoizedState = p.state, l && IE(t, a, !0), t.child;
    }
    function sw(e) {
      var t = e.stateNode;
      t.pendingContext ? BE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && BE(e, t.context, !1), Kg(e, t.containerInfo);
    }
    function Q_(e, t, a) {
      if (sw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      d0(e, t), Em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (l.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, R = t.updateQueue;
        if (R.baseState = v, t.memoizedState = v, t.flags & Lr) {
          var T = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return cw(e, t, p, a, T);
        } else if (p !== s) {
          var G = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return cw(e, t, p, a, G);
        } else {
          ZT(t);
          var q = i0(t, null, p, a);
          t.child = q;
          for (var ue = q; ue; )
            ue.flags = ue.flags & ~Fn | oa, ue = ue.sibling;
        }
      } else {
        if (Af(), p === s)
          return Yl(e, t, a);
        Oa(e, t, p, a);
      }
      return t.child;
    }
    function cw(e, t, a, i, l) {
      return Af(), Pg(l), t.flags |= Lr, Oa(e, t, a, i), t.child;
    }
    function X_(e, t, a) {
      m0(t), e === null && Ng(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = hg(i, l);
      return p ? f = null : s !== null && hg(i, s) && (t.flags |= Fa), lw(e, t), Oa(e, t, f, a), t.child;
    }
    function K_(e, t) {
      return e === null && Ng(t), null;
    }
    function Z_(e, t, a, i) {
      Gm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var R = t.tag = KO(v), T = ho(v, l), G;
      switch (R) {
        case A:
          return KS(t, v), t.type = v = ed(v), G = QS(null, t, v, T, i), G;
        case V:
          return t.type = v = _b(v), G = uw(null, t, v, T, i), G;
        case x:
          return t.type = v = Ob(v), G = rw(null, t, v, T, i), G;
        case D: {
          if (t.type !== t.elementType) {
            var q = v.propTypes;
            q && so(
              q,
              T,
              // Resolved for outer only
              "prop",
              nn(v)
            );
          }
          return G = aw(
            null,
            t,
            v,
            ho(v.type, T),
            // The inner type can have defaults too
            i
          ), G;
        }
      }
      var ue = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Pt && (ue = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + ue));
    }
    function J_(e, t, a, i, l) {
      Gm(e, t), t.tag = V;
      var s;
      return Zo(a) ? (s = !0, am(t)) : s = !1, Hf(t, l), K0(t, a, i), FS(t, a, i, l), XS(null, t, a, !0, s, l);
    }
    function e1(e, t, a, i) {
      Gm(e, t);
      var l = t.pendingProps, s;
      {
        var f = Mf(t, a, !1);
        s = Lf(t, f);
      }
      Hf(t, i);
      var p, v;
      Ca(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = nn(a) || "Unknown";
          $S[R] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), $S[R] = !0);
        }
        t.mode & wn && fo.recordLegacyContextWarning(t, null), ur(!0), Ip.current = t, p = Wf(null, t, a, l, s, i), v = qf(), ur(!1);
      }
      if (xa(), t.flags |= fi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var T = nn(a) || "Unknown";
        $p[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), $p[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var G = nn(a) || "Unknown";
          $p[G] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", G, G, G), $p[G] = !0);
        }
        t.tag = V, t.memoizedState = null, t.updateQueue = null;
        var q = !1;
        return Zo(a) ? (q = !0, am(t)) : q = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Qg(t), X0(t, p), FS(t, a, l, i), XS(null, t, a, !0, q, i);
      } else {
        if (t.tag = A, t.mode & wn) {
          Bn(!0);
          try {
            p = Wf(null, t, a, l, s, i), v = qf();
          } finally {
            Bn(!1);
          }
        }
        return Gr() && v && Dg(t), Oa(null, t, p, i), KS(t, a), t.child;
      }
    }
    function KS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), YS[l] || (YS[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = nn(t) || "Unknown";
          Wp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Wp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = nn(t) || "Unknown";
          qS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), qS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = nn(t) || "Unknown";
          WS[v] || (g("%s: Function components do not support contextType.", v), WS[v] = !0);
        }
      }
    }
    var ZS = {
      dehydrated: null,
      treeContext: null,
      retryLane: on
    };
    function JS(e) {
      return {
        baseLanes: e,
        cachePool: $_(),
        transitions: null
      };
    }
    function t1(e, t) {
      var a = null;
      return {
        baseLanes: Ft(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function n1(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return eS(e, Np);
    }
    function r1(e, t) {
      return Ls(e.childLanes, t);
    }
    function fw(e, t, a) {
      var i = t.pendingProps;
      dD(t) && (t.flags |= yt);
      var l = po.current, s = !1, f = (t.flags & yt) !== St;
      if (f || n1(l, e) ? (s = !0, t.flags &= ~yt) : (e === null || e.memoizedState !== null) && (l = E_(l, g0)), l = Bf(l), $u(t, l), e === null) {
        Ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return u1(t, v);
        }
        var R = i.children, T = i.fallback;
        if (s) {
          var G = a1(t, R, T, a), q = t.child;
          return q.memoizedState = JS(a), t.memoizedState = ZS, G;
        } else
          return eb(t, R);
      } else {
        var ue = e.memoizedState;
        if (ue !== null) {
          var de = ue.dehydrated;
          if (de !== null)
            return s1(e, t, f, i, de, ue, a);
        }
        if (s) {
          var Ee = i.fallback, nt = i.children, wt = o1(e, t, nt, Ee, a), mt = t.child, tn = e.child.memoizedState;
          return mt.memoizedState = tn === null ? JS(a) : t1(tn, a), mt.childLanes = r1(e, a), t.memoizedState = ZS, wt;
        } else {
          var Xt = i.children, te = i1(e, t, Xt, a);
          return t.memoizedState = null, te;
        }
      }
    }
    function eb(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = tb(l, i);
      return s.return = e, e.child = s, s;
    }
    function a1(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (l & qt) === bt && s !== null ? (p = s, p.childLanes = Le, p.pendingProps = f, e.mode & cn && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Zu(a, l, i, null)) : (p = tb(f, l), v = Zu(a, l, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function tb(e, t, a) {
      return dR(e, t, Le, null);
    }
    function dw(e, t) {
      return vc(e, t);
    }
    function i1(e, t, a, i) {
      var l = e.child, s = l.sibling, f = dw(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & qt) === bt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ha) : p.push(s);
      }
      return t.child = f, f;
    }
    function o1(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & qt) === bt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        R = T, R.childLanes = Le, R.pendingProps = v, t.mode & cn && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = f.selfBaseDuration, R.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        R = dw(f, v), R.subtreeFlags = f.subtreeFlags & er;
      var G;
      return p !== null ? G = vc(p, i) : (G = Zu(i, s, l, null), G.flags |= Fn), G.return = t, R.return = t, R.sibling = G, t.child = R, G;
    }
    function Ym(e, t, a, i) {
      i !== null && Pg(i), jf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = eb(t, s);
      return f.flags |= Fn, t.memoizedState = null, f;
    }
    function l1(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = tb(f, s), v = Zu(i, s, l, null);
      return v.flags |= Fn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & qt) !== bt && jf(t, e.child, null, l), v;
    }
    function u1(e, t, a) {
      return (e.mode & qt) === bt ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ot) : Sg(t) ? e.lanes = Nr : e.lanes = ca, null;
    }
    function s1(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Lr) {
          t.flags &= ~Lr;
          var te = BS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Ym(e, t, f, te);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= yt, null;
          var we = i.children, ne = i.fallback, Ie = l1(e, t, we, ne, f), lt = t.child;
          return lt.memoizedState = JS(f), t.memoizedState = ZS, Ie;
        }
      else {
        if (XT(), (t.mode & qt) === bt)
          return Ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Sg(l)) {
          var p, v, R;
          {
            var T = pT(l);
            p = T.digest, v = T.message, R = T.stack;
          }
          var G;
          v ? G = new Error(v) : G = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var q = BS(G, p, R);
          return Ym(e, t, f, q);
        }
        var ue = fa(f, e.childLanes);
        if (mo || ue) {
          var de = ay();
          if (de !== null) {
            var Ee = Gd(de, f);
            if (Ee !== on && Ee !== s.retryLane) {
              s.retryLane = Ee;
              var nt = On;
              Qa(e, Ee), Mr(de, e, Ee, nt);
            }
          }
          wb();
          var wt = BS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Ym(e, t, f, wt);
        } else if (PE(l)) {
          t.flags |= yt, t.child = e.child;
          var mt = NO.bind(null, e);
          return vT(l, mt), null;
        } else {
          JT(t, l, s.treeContext);
          var tn = i.children, Xt = eb(t, tn);
          return Xt.flags |= oa, Xt;
        }
      }
    }
    function pw(e, t, a) {
      e.lanes = Ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ft(i.lanes, t)), Wg(e.return, t, a);
    }
    function c1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === E) {
          var l = i.memoizedState;
          l !== null && pw(i, a, e);
        } else if (i.tag === Pe)
          pw(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function f1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && xm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function d1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !GS[e])
        if (GS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function p1(e, t) {
      e !== void 0 && !qm[e] && (e !== "collapsed" && e !== "hidden" ? (qm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vw(e, t) {
      {
        var a = It(e), i = !a && typeof Ht(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function v1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (It(e)) {
          for (var a = 0; a < e.length; a++)
            if (!vw(e[a], a))
              return;
        } else {
          var i = Ht(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!vw(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function nb(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function hw(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      d1(l), p1(s, l), v1(f, l), Oa(e, t, f, a);
      var p = po.current, v = eS(p, Np);
      if (v)
        p = tS(p, Np), t.flags |= yt;
      else {
        var R = e !== null && (e.flags & yt) !== St;
        R && c1(t, t.child, a), p = Bf(p);
      }
      if ($u(t, p), (t.mode & qt) === bt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var T = f1(t.child), G;
            T === null ? (G = t.child, t.child = null) : (G = T.sibling, T.sibling = null), nb(
              t,
              !1,
              // isBackwards
              G,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var q = null, ue = t.child;
            for (t.child = null; ue !== null; ) {
              var de = ue.alternate;
              if (de !== null && xm(de) === null) {
                t.child = ue;
                break;
              }
              var Ee = ue.sibling;
              ue.sibling = q, q = ue, ue = Ee;
            }
            nb(
              t,
              !0,
              // isBackwards
              q,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            nb(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function h1(e, t, a) {
      Kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = jf(t, null, i, a) : Oa(e, t, i, a), t.child;
    }
    var mw = !1;
    function m1(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || mw || (mw = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && so(v, s, "prop", "Context.Provider");
      }
      if (u0(t, l, p), f !== null) {
        var R = f.value;
        if (je(R, p)) {
          if (f.children === s.children && !nm())
            return Yl(e, t, a);
        } else
          d_(t, l, a);
      }
      var T = s.children;
      return Oa(e, t, T, a), t.child;
    }
    var yw = !1;
    function y1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (yw || (yw = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Hf(t, a);
      var f = yr(i);
      Ca(t);
      var p;
      return Ip.current = t, ur(!0), p = s(f), ur(!1), xa(), t.flags |= fi, Oa(e, t, p, a), t.child;
    }
    function qp() {
      mo = !0;
    }
    function Gm(e, t) {
      (t.mode & qt) === bt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Fn);
    }
    function Yl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), q0(), av(t.lanes), fa(a, t.childLanes) ? (c_(e, t), t.child) : null;
    }
    function g1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ha) : s.push(e), a.flags |= Fn, a;
      }
    }
    function rb(e, t) {
      var a = e.lanes;
      return !!fa(a, t);
    }
    function S1(e, t, a) {
      switch (t.tag) {
        case I:
          sw(t), t.stateNode, Af();
          break;
        case ye:
          m0(t);
          break;
        case V: {
          var i = t.type;
          Zo(i) && am(t);
          break;
        }
        case J:
          Kg(t, t.stateNode.containerInfo);
          break;
        case b: {
          var l = t.memoizedProps.value, s = t.type._context;
          u0(t, s, l);
          break;
        }
        case C:
          {
            var f = fa(a, t.childLanes);
            f && (t.flags |= Zt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case E: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return $u(t, Bf(po.current)), t.flags |= yt, null;
            var R = t.child, T = R.childLanes;
            if (fa(a, T))
              return fw(e, t, a);
            $u(t, Bf(po.current));
            var G = Yl(e, t, a);
            return G !== null ? G.sibling : null;
          } else
            $u(t, Bf(po.current));
          break;
        }
        case Pe: {
          var q = (e.flags & yt) !== St, ue = fa(a, t.childLanes);
          if (q) {
            if (ue)
              return hw(e, t, a);
            t.flags |= yt;
          }
          var de = t.memoizedState;
          if (de !== null && (de.rendering = null, de.tail = null, de.lastEffect = null), $u(t, po.current), ue)
            break;
          return null;
        }
        case re:
        case De:
          return t.lanes = Le, ow(e, t, a);
      }
      return Yl(e, t, a);
    }
    function gw(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return g1(e, t, Lb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          mo = !0;
        else {
          var s = rb(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & yt) === St)
            return mo = !1, S1(e, t, a);
          (e.flags & Nc) !== St ? mo = !0 : mo = !1;
        }
      } else if (mo = !1, Gr() && $T(t)) {
        var f = t.index, p = WT();
        qE(t, p, f);
      }
      switch (t.lanes = Le, t.tag) {
        case oe:
          return e1(e, t, t.type, a);
        case ce: {
          var v = t.elementType;
          return Z_(e, t, v, a);
        }
        case A: {
          var R = t.type, T = t.pendingProps, G = t.elementType === R ? T : ho(R, T);
          return QS(e, t, R, G, a);
        }
        case V: {
          var q = t.type, ue = t.pendingProps, de = t.elementType === q ? ue : ho(q, ue);
          return uw(e, t, q, de, a);
        }
        case I:
          return Q_(e, t, a);
        case ye:
          return X_(e, t, a);
        case ke:
          return K_(e, t);
        case E:
          return fw(e, t, a);
        case J:
          return h1(e, t, a);
        case x: {
          var Ee = t.type, nt = t.pendingProps, wt = t.elementType === Ee ? nt : ho(Ee, nt);
          return rw(e, t, Ee, wt, a);
        }
        case be:
          return q_(e, t, a);
        case K:
          return Y_(e, t, a);
        case C:
          return G_(e, t, a);
        case b:
          return m1(e, t, a);
        case k:
          return y1(e, t, a);
        case D: {
          var mt = t.type, tn = t.pendingProps, Xt = ho(mt, tn);
          if (t.type !== t.elementType) {
            var te = mt.propTypes;
            te && so(
              te,
              Xt,
              // Resolved for outer only
              "prop",
              nn(mt)
            );
          }
          return Xt = ho(mt.type, Xt), aw(e, t, mt, Xt, a);
        }
        case P:
          return iw(e, t, t.type, t.pendingProps, a);
        case ve: {
          var we = t.type, ne = t.pendingProps, Ie = t.elementType === we ? ne : ho(we, ne);
          return J_(e, t, we, Ie, a);
        }
        case Pe:
          return hw(e, t, a);
        case ie:
          break;
        case re:
          return ow(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yf(e) {
      e.flags |= Zt;
    }
    function Sw(e) {
      e.flags |= $n, e.flags |= Ru;
    }
    var bw, ab, Ew, ww;
    bw = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === ye || l.tag === ke)
          Bx(e, l.stateNode);
        else if (l.tag !== J) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, ab = function(e, t) {
    }, Ew = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Zg(), v = Ix(f, a, s, i, l, p);
        t.updateQueue = v, v && Yf(t);
      }
    }, ww = function(e, t, a, i) {
      a !== i && Yf(t);
    };
    function Yp(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Le, i = St;
      if (t) {
        if ((e.mode & cn) !== bt) {
          for (var v = e.selfBaseDuration, R = e.child; R !== null; )
            a = Ft(a, Ft(R.lanes, R.childLanes)), i |= R.subtreeFlags & er, i |= R.flags & er, v += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = v;
        } else
          for (var T = e.child; T !== null; )
            a = Ft(a, Ft(T.lanes, T.childLanes)), i |= T.subtreeFlags & er, i |= T.flags & er, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & cn) !== bt) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ft(a, Ft(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ft(a, Ft(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function b1(e, t, a) {
      if (a_() && (t.mode & qt) !== bt && (t.flags & yt) === St)
        return JE(t), Af(), t.flags |= Lr | ys | pr, !1;
      var i = sm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (n_(t), Xr(t), (t.mode & cn) !== bt) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Af(), (t.flags & yt) === St && (t.memoizedState = null), t.flags |= Zt, Xr(t), (t.mode & cn) !== bt) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return e0(), !0;
    }
    function Rw(e, t, a) {
      var i = t.pendingProps;
      switch (kg(t), t.tag) {
        case oe:
        case ce:
        case P:
        case A:
        case x:
        case be:
        case K:
        case C:
        case k:
        case D:
          return Xr(t), null;
        case V: {
          var l = t.type;
          return Zo(l) && rm(t), Xr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (Ff(t), Tg(t), rS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = sm(t);
            if (f)
              Yf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Lr) !== St) && (t.flags |= sr, e0());
            }
          }
          return ab(e, t), Xr(t), null;
        }
        case ye: {
          Jg(t);
          var v = h0(), R = t.type;
          if (e !== null && t.stateNode != null)
            Ew(e, t, R, i, v), e.ref !== t.ref && Sw(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Xr(t), null;
            }
            var T = Zg(), G = sm(t);
            if (G)
              e_(t, v, T) && Yf(t);
            else {
              var q = Fx(R, i, v, T, t);
              bw(q, t, !1, !1), t.stateNode = q, Vx(q, R, i, v) && Yf(t);
            }
            t.ref !== null && Sw(t);
          }
          return Xr(t), null;
        }
        case ke: {
          var ue = i;
          if (e && t.stateNode != null) {
            var de = e.memoizedProps;
            ww(e, t, de, ue);
          } else {
            if (typeof ue != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Ee = h0(), nt = Zg(), wt = sm(t);
            wt ? t_(t) && Yf(t) : t.stateNode = $x(ue, Ee, nt, t);
          }
          return Xr(t), null;
        }
        case E: {
          Vf(t);
          var mt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var tn = b1(e, t, mt);
            if (!tn)
              return t.flags & pr ? t : null;
          }
          if ((t.flags & yt) !== St)
            return t.lanes = a, (t.mode & cn) !== bt && OS(t), t;
          var Xt = mt !== null, te = e !== null && e.memoizedState !== null;
          if (Xt !== te && Xt) {
            var we = t.child;
            if (we.flags |= Jn, (t.mode & qt) !== bt) {
              var ne = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              ne || eS(po.current, g0) ? EO() : wb();
            }
          }
          var Ie = t.updateQueue;
          if (Ie !== null && (t.flags |= Zt), Xr(t), (t.mode & cn) !== bt && Xt) {
            var lt = t.child;
            lt !== null && (t.treeBaseDuration -= lt.treeBaseDuration);
          }
          return null;
        }
        case J:
          return Ff(t), ab(e, t), e === null && jT(t.stateNode.containerInfo), Xr(t), null;
        case b:
          var at = t.type._context;
          return $g(at, t), Xr(t), null;
        case ve: {
          var Dt = t.type;
          return Zo(Dt) && rm(t), Xr(t), null;
        }
        case Pe: {
          Vf(t);
          var jt = t.memoizedState;
          if (jt === null)
            return Xr(t), null;
          var Cn = (t.flags & yt) !== St, pn = jt.rendering;
          if (pn === null)
            if (Cn)
              Yp(jt, !1);
            else {
              var dr = RO() && (e === null || (e.flags & yt) === St);
              if (!dr)
                for (var vn = t.child; vn !== null; ) {
                  var or = xm(vn);
                  if (or !== null) {
                    Cn = !0, t.flags |= yt, Yp(jt, !1);
                    var ga = or.updateQueue;
                    return ga !== null && (t.updateQueue = ga, t.flags |= Zt), t.subtreeFlags = St, f_(t, a), $u(t, tS(po.current, Np)), t.child;
                  }
                  vn = vn.sibling;
                }
              jt.tail !== null && cr() > $w() && (t.flags |= yt, Cn = !0, Yp(jt, !1), t.lanes = Hd);
            }
          else {
            if (!Cn) {
              var ta = xm(pn);
              if (ta !== null) {
                t.flags |= yt, Cn = !0;
                var gi = ta.updateQueue;
                if (gi !== null && (t.updateQueue = gi, t.flags |= Zt), Yp(jt, !0), jt.tail === null && jt.tailMode === "hidden" && !pn.alternate && !Gr())
                  return Xr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              cr() * 2 - jt.renderingStartTime > $w() && a !== ca && (t.flags |= yt, Cn = !0, Yp(jt, !1), t.lanes = Hd);
            }
            if (jt.isBackwards)
              pn.sibling = t.child, t.child = pn;
            else {
              var za = jt.last;
              za !== null ? za.sibling = pn : t.child = pn, jt.last = pn;
            }
          }
          if (jt.tail !== null) {
            var Ma = jt.tail;
            jt.rendering = Ma, jt.tail = Ma.sibling, jt.renderingStartTime = cr(), Ma.sibling = null;
            var Sa = po.current;
            return Cn ? Sa = tS(Sa, Np) : Sa = Bf(Sa), $u(t, Sa), Ma;
          }
          return Xr(t), null;
        }
        case ie:
          break;
        case re:
        case De: {
          Eb(t);
          var Zl = t.memoizedState, td = Zl !== null;
          if (e !== null) {
            var sv = e.memoizedState, ol = sv !== null;
            ol !== td && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !W && (t.flags |= Jn);
          }
          return !td || (t.mode & qt) === bt ? Xr(t) : fa(il, ca) && (Xr(t), t.subtreeFlags & (Fn | Zt) && (t.flags |= Jn)), null;
        }
        case Ue:
          return null;
        case Fe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function E1(e, t, a) {
      switch (kg(t), t.tag) {
        case V: {
          var i = t.type;
          Zo(i) && rm(t);
          var l = t.flags;
          return l & pr ? (t.flags = l & ~pr | yt, (t.mode & cn) !== bt && OS(t), t) : null;
        }
        case I: {
          t.stateNode, Ff(t), Tg(t), rS();
          var s = t.flags;
          return (s & pr) !== St && (s & yt) === St ? (t.flags = s & ~pr | yt, t) : null;
        }
        case ye:
          return Jg(t), null;
        case E: {
          Vf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Af();
          }
          var p = t.flags;
          return p & pr ? (t.flags = p & ~pr | yt, (t.mode & cn) !== bt && OS(t), t) : null;
        }
        case Pe:
          return Vf(t), null;
        case J:
          return Ff(t), null;
        case b:
          var v = t.type._context;
          return $g(v, t), null;
        case re:
        case De:
          return Eb(t), null;
        case Ue:
          return null;
        default:
          return null;
      }
    }
    function Cw(e, t, a) {
      switch (kg(t), t.tag) {
        case V: {
          var i = t.type.childContextTypes;
          i != null && rm(t);
          break;
        }
        case I: {
          t.stateNode, Ff(t), Tg(t), rS();
          break;
        }
        case ye: {
          Jg(t);
          break;
        }
        case J:
          Ff(t);
          break;
        case E:
          Vf(t);
          break;
        case Pe:
          Vf(t);
          break;
        case b:
          var l = t.type._context;
          $g(l, t);
          break;
        case re:
        case De:
          Eb(t);
          break;
      }
    }
    var xw = null;
    xw = /* @__PURE__ */ new Set();
    var Qm = !1, Kr = !1, w1 = typeof WeakSet == "function" ? WeakSet : Set, pt = null, Gf = null, Qf = null;
    function R1(e) {
      No(null, function() {
        throw e;
      }), ms();
    }
    var C1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & cn)
        try {
          rl(), t.componentWillUnmount();
        } finally {
          nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Tw(e, t) {
      try {
        Yu(Tr, e);
      } catch (a) {
        Pn(e, t, a);
      }
    }
    function ib(e, t, a) {
      try {
        C1(e, a);
      } catch (i) {
        Pn(e, t, i);
      }
    }
    function x1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Pn(e, t, i);
      }
    }
    function _w(e, t) {
      try {
        Dw(e);
      } catch (a) {
        Pn(e, t, a);
      }
    }
    function Xf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ze && Ge && e.mode & cn)
              try {
                rl(), i = a(null);
              } finally {
                nl(e);
              }
            else
              i = a(null);
          } catch (l) {
            Pn(e, t, l);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Nt(e));
        } else
          a.current = null;
    }
    function Xm(e, t, a) {
      try {
        a();
      } catch (i) {
        Pn(e, t, i);
      }
    }
    var Ow = !1;
    function T1(e, t) {
      Ux(e.containerInfo), pt = t, _1();
      var a = Ow;
      return Ow = !1, a;
    }
    function _1() {
      for (; pt !== null; ) {
        var e = pt, t = e.child;
        (e.subtreeFlags & Ao) !== St && t !== null ? (t.return = e, pt = t) : O1();
      }
    }
    function O1() {
      for (; pt !== null; ) {
        var e = pt;
        Sn(e);
        try {
          D1(e);
        } catch (a) {
          Pn(e, e.return, a);
        }
        Nn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pt = t;
          return;
        }
        pt = e.return;
      }
    }
    function D1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & sr) !== St) {
        switch (Sn(e), e.tag) {
          case A:
          case x:
          case P:
            break;
          case V: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ho(e.type, i), l);
              {
                var p = xw;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Nt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case I: {
            {
              var v = e.stateNode;
              sT(v.containerInfo);
            }
            break;
          }
          case ye:
          case ke:
          case J:
          case ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Nn();
      }
    }
    function yo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Qr) !== Xa ? ro(t) : (e & Tr) !== Xa && Ss(t), (e & Jo) !== Xa && ov(!0), Xm(t, a, p), (e & Jo) !== Xa && ov(!1), (e & Qr) !== Xa ? Fo() : (e & Tr) !== Xa && jd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Yu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Qr) !== Xa ? Ad(t) : (e & Tr) !== Xa && Fc(t);
            var f = s.create;
            (e & Jo) !== Xa && ov(!0), s.destroy = f(), (e & Jo) !== Xa && ov(!1), (e & Qr) !== Xa ? th() : (e & Tr) !== Xa && nh();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Tr) !== St ? v = "useLayoutEffect" : (s.tag & Jo) !== St ? v = "useInsertionEffect" : v = "useEffect";
                var R = void 0;
                p === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? R = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, R);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function k1(e, t) {
      if ((t.flags & Zt) !== St)
        switch (t.tag) {
          case C: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = $0(), p = t.alternate === null ? "mount" : "update";
            I0() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case I:
                  var R = v.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case C:
                  var T = v.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function z1(e, t, a, i) {
      if ((a.flags & Uo) !== St)
        switch (a.tag) {
          case A:
          case x:
          case P: {
            if (!Kr)
              if (a.mode & cn)
                try {
                  rl(), Yu(Tr | xr, a);
                } finally {
                  nl(a);
                }
              else
                Yu(Tr | xr, a);
            break;
          }
          case V: {
            var l = a.stateNode;
            if (a.flags & Zt && !Kr)
              if (t === null)
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(a) || "instance")), a.mode & cn)
                  try {
                    rl(), l.componentDidMount();
                  } finally {
                    nl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ho(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(a) || "instance")), a.mode & cn)
                  try {
                    rl(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nl(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !sc && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(a) || "instance")), v0(a, p, l));
            break;
          }
          case I: {
            var v = a.updateQueue;
            if (v !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ye:
                    R = a.child.stateNode;
                    break;
                  case V:
                    R = a.child.stateNode;
                    break;
                }
              v0(a, v, R);
            }
            break;
          }
          case ye: {
            var T = a.stateNode;
            if (t === null && a.flags & Zt) {
              var G = a.type, q = a.memoizedProps;
              Qx(T, G, q);
            }
            break;
          }
          case ke:
            break;
          case J:
            break;
          case C: {
            {
              var ue = a.memoizedProps, de = ue.onCommit, Ee = ue.onRender, nt = a.stateNode.effectDuration, wt = $0(), mt = t === null ? "mount" : "update";
              I0() && (mt = "nested-update"), typeof Ee == "function" && Ee(a.memoizedProps.id, mt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, wt);
              {
                typeof de == "function" && de(a.memoizedProps.id, mt, nt, wt), OO(a);
                var tn = a.return;
                e: for (; tn !== null; ) {
                  switch (tn.tag) {
                    case I:
                      var Xt = tn.stateNode;
                      Xt.effectDuration += nt;
                      break e;
                    case C:
                      var te = tn.stateNode;
                      te.effectDuration += nt;
                      break e;
                  }
                  tn = tn.return;
                }
              }
            }
            break;
          }
          case E: {
            H1(e, a);
            break;
          }
          case Pe:
          case ve:
          case ie:
          case re:
          case De:
          case Fe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Kr || a.flags & $n && Dw(a);
    }
    function M1(e) {
      switch (e.tag) {
        case A:
        case x:
        case P: {
          if (e.mode & cn)
            try {
              rl(), Tw(e, e.return);
            } finally {
              nl(e);
            }
          else
            Tw(e, e.return);
          break;
        }
        case V: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && x1(e, e.return, t), _w(e, e.return);
          break;
        }
        case ye: {
          _w(e, e.return);
          break;
        }
      }
    }
    function L1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ye) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? iT(l) : lT(i.stateNode, i.memoizedProps);
            } catch (f) {
              Pn(e, e.return, f);
            }
          }
        } else if (i.tag === ke) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? oT(s) : uT(s, i.memoizedProps);
            } catch (f) {
              Pn(e, e.return, f);
            }
        } else if (!((i.tag === re || i.tag === De) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Dw(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ye:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & cn)
            try {
              rl(), l = t(i);
            } finally {
              nl(e);
            }
          else
            l = t(i);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Nt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Nt(e)), t.current = i;
      }
    }
    function N1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function kw(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, kw(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ye) {
          var a = e.stateNode;
          a !== null && FT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function P1(e) {
      for (var t = e.return; t !== null; ) {
        if (zw(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zw(e) {
      return e.tag === ye || e.tag === I || e.tag === J;
    }
    function Mw(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || zw(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ye && t.tag !== ke && t.tag !== Oe; ) {
          if (t.flags & Fn || t.child === null || t.tag === J)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Fn))
          return t.stateNode;
      }
    }
    function A1(e) {
      var t = P1(e);
      switch (t.tag) {
        case ye: {
          var a = t.stateNode;
          t.flags & Fa && (NE(a), t.flags &= ~Fa);
          var i = Mw(e);
          lb(e, i, a);
          break;
        }
        case I:
        case J: {
          var l = t.stateNode.containerInfo, s = Mw(e);
          ob(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ob(e, t, a) {
      var i = e.tag, l = i === ye || i === ke;
      if (l) {
        var s = e.stateNode;
        t ? tT(a, s, t) : Jx(a, s);
      } else if (i !== J) {
        var f = e.child;
        if (f !== null) {
          ob(f, t, a);
          for (var p = f.sibling; p !== null; )
            ob(p, t, a), p = p.sibling;
        }
      }
    }
    function lb(e, t, a) {
      var i = e.tag, l = i === ye || i === ke;
      if (l) {
        var s = e.stateNode;
        t ? eT(a, s, t) : Zx(a, s);
      } else if (i !== J) {
        var f = e.child;
        if (f !== null) {
          lb(f, t, a);
          for (var p = f.sibling; p !== null; )
            lb(p, t, a), p = p.sibling;
        }
      }
    }
    var Zr = null, go = !1;
    function j1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ye: {
              Zr = i.stateNode, go = !1;
              break e;
            }
            case I: {
              Zr = i.stateNode.containerInfo, go = !0;
              break e;
            }
            case J: {
              Zr = i.stateNode.containerInfo, go = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Zr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Lw(e, t, a), Zr = null, go = !1;
      }
      N1(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        Lw(e, t, i), i = i.sibling;
    }
    function Lw(e, t, a) {
      switch (Ld(a), a.tag) {
        case ye:
          Kr || Xf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ke: {
          {
            var i = Zr, l = go;
            Zr = null, Gu(e, t, a), Zr = i, go = l, Zr !== null && (go ? rT(Zr, a.stateNode) : nT(Zr, a.stateNode));
          }
          return;
        }
        case Oe: {
          Zr !== null && (go ? aT(Zr, a.stateNode) : gg(Zr, a.stateNode));
          return;
        }
        case J: {
          {
            var s = Zr, f = go;
            Zr = a.stateNode.containerInfo, go = !0, Gu(e, t, a), Zr = s, go = f;
          }
          return;
        }
        case A:
        case x:
        case D:
        case P: {
          if (!Kr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var R = v.next, T = R;
                do {
                  var G = T, q = G.destroy, ue = G.tag;
                  q !== void 0 && ((ue & Jo) !== Xa ? Xm(a, t, q) : (ue & Tr) !== Xa && (Ss(a), a.mode & cn ? (rl(), Xm(a, t, q), nl(a)) : Xm(a, t, q), jd())), T = T.next;
                } while (T !== R);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case V: {
          if (!Kr) {
            Xf(a, t);
            var de = a.stateNode;
            typeof de.componentWillUnmount == "function" && ib(a, t, de);
          }
          Gu(e, t, a);
          return;
        }
        case ie: {
          Gu(e, t, a);
          return;
        }
        case re: {
          if (
            // TODO: Remove this dead flag
            a.mode & qt
          ) {
            var Ee = Kr;
            Kr = Ee || a.memoizedState !== null, Gu(e, t, a), Kr = Ee;
          } else
            Gu(e, t, a);
          break;
        }
        default: {
          Gu(e, t, a);
          return;
        }
      }
    }
    function U1(e) {
      e.memoizedState;
    }
    function H1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && RT(s);
          }
        }
      }
    }
    function Nw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new w1()), t.forEach(function(i) {
          var l = PO.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), sa)
              if (Gf !== null && Qf !== null)
                iv(Qf, Gf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function F1(e, t, a) {
      Gf = a, Qf = e, Sn(t), Pw(t, e), Sn(t), Gf = null, Qf = null;
    }
    function So(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            j1(e, t, s);
          } catch (v) {
            Pn(s, t, v);
          }
        }
      var f = _o();
      if (t.subtreeFlags & jo)
        for (var p = t.child; p !== null; )
          Sn(p), Pw(p, e), p = p.sibling;
      Sn(f);
    }
    function Pw(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case A:
        case x:
        case D:
        case P: {
          if (So(t, e), al(e), l & Zt) {
            try {
              yo(Jo | xr, e, e.return), Yu(Jo | xr, e);
            } catch (Dt) {
              Pn(e, e.return, Dt);
            }
            if (e.mode & cn) {
              try {
                rl(), yo(Tr | xr, e, e.return);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
              nl(e);
            } else
              try {
                yo(Tr | xr, e, e.return);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
          }
          return;
        }
        case V: {
          So(t, e), al(e), l & $n && i !== null && Xf(i, i.return);
          return;
        }
        case ye: {
          So(t, e), al(e), l & $n && i !== null && Xf(i, i.return);
          {
            if (e.flags & Fa) {
              var s = e.stateNode;
              try {
                NE(s);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
            }
            if (l & Zt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Xx(f, T, R, v, p, e);
                  } catch (Dt) {
                    Pn(e, e.return, Dt);
                  }
              }
            }
          }
          return;
        }
        case ke: {
          if (So(t, e), al(e), l & Zt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var G = e.stateNode, q = e.memoizedProps, ue = i !== null ? i.memoizedProps : q;
            try {
              Kx(G, ue, q);
            } catch (Dt) {
              Pn(e, e.return, Dt);
            }
          }
          return;
        }
        case I: {
          if (So(t, e), al(e), l & Zt && i !== null) {
            var de = i.memoizedState;
            if (de.isDehydrated)
              try {
                wT(t.containerInfo);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
          }
          return;
        }
        case J: {
          So(t, e), al(e);
          return;
        }
        case E: {
          So(t, e), al(e);
          var Ee = e.child;
          if (Ee.flags & Jn) {
            var nt = Ee.stateNode, wt = Ee.memoizedState, mt = wt !== null;
            if (nt.isHidden = mt, mt) {
              var tn = Ee.alternate !== null && Ee.alternate.memoizedState !== null;
              tn || bO();
            }
          }
          if (l & Zt) {
            try {
              U1(e);
            } catch (Dt) {
              Pn(e, e.return, Dt);
            }
            Nw(e);
          }
          return;
        }
        case re: {
          var Xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & qt
          ) {
            var te = Kr;
            Kr = te || Xt, So(t, e), Kr = te;
          } else
            So(t, e);
          if (al(e), l & Jn) {
            var we = e.stateNode, ne = e.memoizedState, Ie = ne !== null, lt = e;
            if (we.isHidden = Ie, Ie && !Xt && (lt.mode & qt) !== bt) {
              pt = lt;
              for (var at = lt.child; at !== null; )
                pt = at, V1(at), at = at.sibling;
            }
            L1(lt, Ie);
          }
          return;
        }
        case Pe: {
          So(t, e), al(e), l & Zt && Nw(e);
          return;
        }
        case ie:
          return;
        default: {
          So(t, e), al(e);
          return;
        }
      }
    }
    function al(e) {
      var t = e.flags;
      if (t & Fn) {
        try {
          A1(e);
        } catch (a) {
          Pn(e, e.return, a);
        }
        e.flags &= ~Fn;
      }
      t & oa && (e.flags &= ~oa);
    }
    function B1(e, t, a) {
      Gf = a, Qf = t, pt = e, Aw(e, t, a), Gf = null, Qf = null;
    }
    function Aw(e, t, a) {
      for (var i = (e.mode & qt) !== bt; pt !== null; ) {
        var l = pt, s = l.child;
        if (l.tag === re && i) {
          var f = l.memoizedState !== null, p = f || Qm;
          if (p) {
            ub(e, t, a);
            continue;
          } else {
            var v = l.alternate, R = v !== null && v.memoizedState !== null, T = R || Kr, G = Qm, q = Kr;
            Qm = p, Kr = T, Kr && !q && (pt = l, I1(l));
            for (var ue = s; ue !== null; )
              pt = ue, Aw(
                ue,
                // New root; bubble back up to here and stop.
                t,
                a
              ), ue = ue.sibling;
            pt = l, Qm = G, Kr = q, ub(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Uo) !== St && s !== null ? (s.return = l, pt = s) : ub(e, t, a);
      }
    }
    function ub(e, t, a) {
      for (; pt !== null; ) {
        var i = pt;
        if ((i.flags & Uo) !== St) {
          var l = i.alternate;
          Sn(i);
          try {
            z1(t, l, i, a);
          } catch (f) {
            Pn(i, i.return, f);
          }
          Nn();
        }
        if (i === e) {
          pt = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, pt = s;
          return;
        }
        pt = i.return;
      }
    }
    function V1(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.child;
        switch (t.tag) {
          case A:
          case x:
          case D:
          case P: {
            if (t.mode & cn)
              try {
                rl(), yo(Tr, t, t.return);
              } finally {
                nl(t);
              }
            else
              yo(Tr, t, t.return);
            break;
          }
          case V: {
            Xf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && ib(t, t.return, i);
            break;
          }
          case ye: {
            Xf(t, t.return);
            break;
          }
          case re: {
            var l = t.memoizedState !== null;
            if (l) {
              jw(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, pt = a) : jw(e);
      }
    }
    function jw(e) {
      for (; pt !== null; ) {
        var t = pt;
        if (t === e) {
          pt = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, pt = a;
          return;
        }
        pt = t.return;
      }
    }
    function I1(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.child;
        if (t.tag === re) {
          var i = t.memoizedState !== null;
          if (i) {
            Uw(e);
            continue;
          }
        }
        a !== null ? (a.return = t, pt = a) : Uw(e);
      }
    }
    function Uw(e) {
      for (; pt !== null; ) {
        var t = pt;
        Sn(t);
        try {
          M1(t);
        } catch (i) {
          Pn(t, t.return, i);
        }
        if (Nn(), t === e) {
          pt = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, pt = a;
          return;
        }
        pt = t.return;
      }
    }
    function $1(e, t, a, i) {
      pt = t, W1(t, e, a, i);
    }
    function W1(e, t, a, i) {
      for (; pt !== null; ) {
        var l = pt, s = l.child;
        (l.subtreeFlags & to) !== St && s !== null ? (s.return = l, pt = s) : q1(e, t, a, i);
      }
    }
    function q1(e, t, a, i) {
      for (; pt !== null; ) {
        var l = pt;
        if ((l.flags & ia) !== St) {
          Sn(l);
          try {
            Y1(t, l, a, i);
          } catch (f) {
            Pn(l, l.return, f);
          }
          Nn();
        }
        if (l === e) {
          pt = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, pt = s;
          return;
        }
        pt = l.return;
      }
    }
    function Y1(e, t, a, i) {
      switch (t.tag) {
        case A:
        case x:
        case P: {
          if (t.mode & cn) {
            _S();
            try {
              Yu(Qr | xr, t);
            } finally {
              TS(t);
            }
          } else
            Yu(Qr | xr, t);
          break;
        }
      }
    }
    function G1(e) {
      pt = e, Q1();
    }
    function Q1() {
      for (; pt !== null; ) {
        var e = pt, t = e.child;
        if ((pt.flags & Ha) !== St) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              pt = l, Z1(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            pt = e;
          }
        }
        (e.subtreeFlags & to) !== St && t !== null ? (t.return = e, pt = t) : X1();
      }
    }
    function X1() {
      for (; pt !== null; ) {
        var e = pt;
        (e.flags & ia) !== St && (Sn(e), K1(e), Nn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pt = t;
          return;
        }
        pt = e.return;
      }
    }
    function K1(e) {
      switch (e.tag) {
        case A:
        case x:
        case P: {
          e.mode & cn ? (_S(), yo(Qr | xr, e, e.return), TS(e)) : yo(Qr | xr, e, e.return);
          break;
        }
      }
    }
    function Z1(e, t) {
      for (; pt !== null; ) {
        var a = pt;
        Sn(a), eO(a, t), Nn();
        var i = a.child;
        i !== null ? (i.return = a, pt = i) : J1(e);
      }
    }
    function J1(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.sibling, i = t.return;
        if (kw(t), t === e) {
          pt = null;
          return;
        }
        if (a !== null) {
          a.return = i, pt = a;
          return;
        }
        pt = i;
      }
    }
    function eO(e, t) {
      switch (e.tag) {
        case A:
        case x:
        case P: {
          e.mode & cn ? (_S(), yo(Qr, e, t), TS(e)) : yo(Qr, e, t);
          break;
        }
      }
    }
    function tO(e) {
      switch (e.tag) {
        case A:
        case x:
        case P: {
          try {
            Yu(Tr | xr, e);
          } catch (a) {
            Pn(e, e.return, a);
          }
          break;
        }
        case V: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Pn(e, e.return, a);
          }
          break;
        }
      }
    }
    function nO(e) {
      switch (e.tag) {
        case A:
        case x:
        case P: {
          try {
            Yu(Qr | xr, e);
          } catch (t) {
            Pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function rO(e) {
      switch (e.tag) {
        case A:
        case x:
        case P: {
          try {
            yo(Tr | xr, e, e.return);
          } catch (a) {
            Pn(e, e.return, a);
          }
          break;
        }
        case V: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ib(e, e.return, t);
          break;
        }
      }
    }
    function aO(e) {
      switch (e.tag) {
        case A:
        case x:
        case P:
          try {
            yo(Qr | xr, e, e.return);
          } catch (t) {
            Pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Gp = Symbol.for;
      Gp("selector.component"), Gp("selector.has_pseudo_class"), Gp("selector.role"), Gp("selector.test_id"), Gp("selector.text");
    }
    var iO = [];
    function oO() {
      iO.forEach(function(e) {
        return e();
      });
    }
    var lO = h.ReactCurrentActQueue;
    function uO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Hw() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && lO.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var sO = Math.ceil, sb = h.ReactCurrentDispatcher, cb = h.ReactCurrentOwner, Jr = h.ReactCurrentBatchConfig, bo = h.ReactCurrentActQueue, Dr = (
      /*             */
      0
    ), Fw = (
      /*               */
      1
    ), ea = (
      /*                */
      2
    ), $i = (
      /*                */
      4
    ), Gl = 0, Qp = 1, cc = 2, Km = 3, Xp = 4, Bw = 5, fb = 6, en = Dr, Da = null, Kn = null, kr = Le, il = Le, db = Uu(Le), zr = Gl, Kp = null, Zm = Le, Zp = Le, Jm = Le, Jp = null, Ka = null, pb = 0, Vw = 500, Iw = 1 / 0, cO = 500, Ql = null;
    function ev() {
      Iw = cr() + cO;
    }
    function $w() {
      return Iw;
    }
    var ey = !1, vb = null, Kf = null, fc = !1, Qu = null, tv = Le, hb = [], mb = null, fO = 50, nv = 0, yb = null, gb = !1, ty = !1, dO = 50, Zf = 0, ny = null, rv = On, ry = Le, Ww = !1;
    function ay() {
      return Da;
    }
    function ka() {
      return (en & (ea | $i)) !== Dr ? cr() : (rv !== On || (rv = cr()), rv);
    }
    function Xu(e) {
      var t = e.mode;
      if ((t & qt) === bt)
        return Ot;
      if ((en & ea) !== Dr && kr !== Le)
        return Ms(kr);
      var a = l_() !== o_;
      if (a) {
        if (Jr.transition !== null) {
          var i = Jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ry === on && (ry = Wd()), ry;
      }
      var l = qa();
      if (l !== on)
        return l;
      var s = Wx();
      return s;
    }
    function pO(e) {
      var t = e.mode;
      return (t & qt) === bt ? Ot : uh();
    }
    function Mr(e, t, a, i) {
      jO(), Ww && g("useInsertionEffect must not schedule updates."), gb && (ty = !0), _u(e, a, i), (en & ea) !== Le && e === Da ? FO(t) : (sa && Ps(e, t, a), BO(t), e === Da && ((en & ea) === Dr && (Zp = Ft(Zp, a)), zr === Xp && Ku(e, kr)), Za(e, i), a === Ot && en === Dr && (t.mode & qt) === bt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !bo.isBatchingLegacy && (ev(), WE()));
    }
    function vO(e, t, a) {
      var i = e.current;
      i.lanes = t, _u(e, t, a), Za(e, a);
    }
    function hO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (en & ea) !== Dr
      );
    }
    function Za(e, t) {
      var a = e.callbackNode;
      lf(e, t);
      var i = of(e, e === Da ? kr : Le);
      if (i === Le) {
        a !== null && lR(a), e.callbackNode = null, e.callbackPriority = on;
        return;
      }
      var l = Io(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(bo.current !== null && a !== xb)) {
        a == null && s !== Ot && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && lR(a);
      var f;
      if (l === Ot)
        e.tag === Hu ? (bo.isBatchingLegacy !== null && (bo.didScheduleLegacyUpdate = !0), IT(Gw.bind(null, e))) : $E(Gw.bind(null, e)), bo.current !== null ? bo.current.push(Fu) : Yx(function() {
          (en & (ea | $i)) === Dr && Fu();
        }), f = null;
      else {
        var p;
        switch (hh(i)) {
          case Ir:
            p = gs;
            break;
          case Ni:
            p = Ho;
            break;
          case $a:
            p = no;
            break;
          case Wa:
            p = wl;
            break;
          default:
            p = no;
            break;
        }
        f = Tb(p, qw.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function qw(e, t) {
      if (L_(), rv = On, ry = Le, (en & (ea | $i)) !== Dr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Kl();
      if (i && e.callbackNode !== a)
        return null;
      var l = of(e, e === Da ? kr : Le);
      if (l === Le)
        return null;
      var s = !sf(e, l) && !lh(e, l) && !t, f = s ? xO(e, l) : oy(e, l);
      if (f !== Gl) {
        if (f === cc) {
          var p = uf(e);
          p !== Le && (l = p, f = Sb(e, p));
        }
        if (f === Qp) {
          var v = Kp;
          throw dc(e, Le), Ku(e, l), Za(e, cr()), v;
        }
        if (f === fb)
          Ku(e, l);
        else {
          var R = !sf(e, l), T = e.current.alternate;
          if (R && !yO(T)) {
            if (f = oy(e, l), f === cc) {
              var G = uf(e);
              G !== Le && (l = G, f = Sb(e, G));
            }
            if (f === Qp) {
              var q = Kp;
              throw dc(e, Le), Ku(e, l), Za(e, cr()), q;
            }
          }
          e.finishedWork = T, e.finishedLanes = l, mO(e, f, l);
        }
      }
      return Za(e, cr()), e.callbackNode === a ? qw.bind(null, e) : null;
    }
    function Sb(e, t) {
      var a = Jp;
      if (df(e)) {
        var i = dc(e, t);
        i.flags |= Lr, AT(e.containerInfo);
      }
      var l = oy(e, t);
      if (l !== cc) {
        var s = Ka;
        Ka = a, s !== null && Yw(s);
      }
      return l;
    }
    function Yw(e) {
      Ka === null ? Ka = e : Ka.push.apply(Ka, e);
    }
    function mO(e, t, a) {
      switch (t) {
        case Gl:
        case Qp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cc: {
          pc(e, Ka, Ql);
          break;
        }
        case Km: {
          if (Ku(e, a), Ll(a) && // do not delay if we're inside an act() scope
          !uR()) {
            var i = pb + Vw - cr();
            if (i > 10) {
              var l = of(e, Le);
              if (l !== Le)
                break;
              var s = e.suspendedLanes;
              if (!Nl(s, a)) {
                ka(), cf(e, s);
                break;
              }
              e.timeoutHandle = mg(pc.bind(null, e, Ka, Ql), i);
              break;
            }
          }
          pc(e, Ka, Ql);
          break;
        }
        case Xp: {
          if (Ku(e, a), Id(a))
            break;
          if (!uR()) {
            var f = pi(e, a), p = f, v = cr() - p, R = AO(v) - v;
            if (R > 10) {
              e.timeoutHandle = mg(pc.bind(null, e, Ka, Ql), R);
              break;
            }
          }
          pc(e, Ka, Ql);
          break;
        }
        case Bw: {
          pc(e, Ka, Ql);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function yO(e) {
      for (var t = e; ; ) {
        if (t.flags & wu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!je(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & wu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ku(e, t) {
      t = Ls(t, Jm), t = Ls(t, Zp), fh(e, t);
    }
    function Gw(e) {
      if (N_(), (en & (ea | $i)) !== Dr)
        throw new Error("Should not already be working.");
      Kl();
      var t = of(e, Le);
      if (!fa(t, Ot))
        return Za(e, cr()), null;
      var a = oy(e, t);
      if (e.tag !== Hu && a === cc) {
        var i = uf(e);
        i !== Le && (t = i, a = Sb(e, i));
      }
      if (a === Qp) {
        var l = Kp;
        throw dc(e, Le), Ku(e, t), Za(e, cr()), l;
      }
      if (a === fb)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, Ka, Ql), Za(e, cr()), null;
    }
    function gO(e, t) {
      t !== Le && (ff(e, Ft(t, Ot)), Za(e, cr()), (en & (ea | $i)) === Dr && (ev(), Fu()));
    }
    function bb(e, t) {
      var a = en;
      en |= Fw;
      try {
        return e(t);
      } finally {
        en = a, en === Dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !bo.isBatchingLegacy && (ev(), WE());
      }
    }
    function SO(e, t, a, i, l) {
      var s = qa(), f = Jr.transition;
      try {
        return Jr.transition = null, rr(Ir), e(t, a, i, l);
      } finally {
        rr(s), Jr.transition = f, en === Dr && ev();
      }
    }
    function Xl(e) {
      Qu !== null && Qu.tag === Hu && (en & (ea | $i)) === Dr && Kl();
      var t = en;
      en |= Fw;
      var a = Jr.transition, i = qa();
      try {
        return Jr.transition = null, rr(Ir), e ? e() : void 0;
      } finally {
        rr(i), Jr.transition = a, en = t, (en & (ea | $i)) === Dr && Fu();
      }
    }
    function Qw() {
      return (en & (ea | $i)) !== Dr;
    }
    function iy(e, t) {
      ma(db, il, e), il = Ft(il, t);
    }
    function Eb(e) {
      il = db.current, ha(db, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = Le;
      var a = e.timeoutHandle;
      if (a !== yg && (e.timeoutHandle = yg, qx(a)), Kn !== null)
        for (var i = Kn.return; i !== null; ) {
          var l = i.alternate;
          Cw(l, i), i = i.return;
        }
      Da = e;
      var s = vc(e.current, null);
      return Kn = s, kr = il = t, zr = Gl, Kp = null, Zm = Le, Zp = Le, Jm = Le, Jp = null, Ka = null, v_(), fo.discardPendingWarnings(), s;
    }
    function Xw(e, t) {
      do {
        var a = Kn;
        try {
          if (hm(), b0(), Nn(), cb.current = null, a === null || a.return === null) {
            zr = Qp, Kp = t, Kn = null;
            return;
          }
          if (ze && a.mode & cn && $m(a, !0), He)
            if (xa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Li(a, i, kr);
            } else
              bs(a, t, kr);
          I_(e, a.return, a, t, kr), eR(a);
        } catch (l) {
          t = l, Kn === a && a !== null ? (a = a.return, Kn = a) : a = Kn;
          continue;
        }
        return;
      } while (!0);
    }
    function Kw() {
      var e = sb.current;
      return sb.current = Hm, e === null ? Hm : e;
    }
    function Zw(e) {
      sb.current = e;
    }
    function bO() {
      pb = cr();
    }
    function av(e) {
      Zm = Ft(e, Zm);
    }
    function EO() {
      zr === Gl && (zr = Km);
    }
    function wb() {
      (zr === Gl || zr === Km || zr === cc) && (zr = Xp), Da !== null && (zs(Zm) || zs(Zp)) && Ku(Da, kr);
    }
    function wO(e) {
      zr !== Xp && (zr = cc), Jp === null ? Jp = [e] : Jp.push(e);
    }
    function RO() {
      return zr === Gl;
    }
    function oy(e, t) {
      var a = en;
      en |= ea;
      var i = Kw();
      if (Da !== e || kr !== t) {
        if (sa) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (iv(e, kr), l.clear()), dh(e, t);
        }
        Ql = Qd(), dc(e, t);
      }
      Tl(t);
      do
        try {
          CO();
          break;
        } catch (s) {
          Xw(e, s);
        }
      while (!0);
      if (hm(), en = a, Zw(i), Kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Bc(), Da = null, kr = Le, zr;
    }
    function CO() {
      for (; Kn !== null; )
        Jw(Kn);
    }
    function xO(e, t) {
      var a = en;
      en |= ea;
      var i = Kw();
      if (Da !== e || kr !== t) {
        if (sa) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (iv(e, kr), l.clear()), dh(e, t);
        }
        Ql = Qd(), ev(), dc(e, t);
      }
      Tl(t);
      do
        try {
          TO();
          break;
        } catch (s) {
          Xw(e, s);
        }
      while (!0);
      return hm(), Zw(i), en = a, Kn !== null ? (rh(), Gl) : (Bc(), Da = null, kr = Le, zr);
    }
    function TO() {
      for (; Kn !== null && !Od(); )
        Jw(Kn);
    }
    function Jw(e) {
      var t = e.alternate;
      Sn(e);
      var a;
      (e.mode & cn) !== bt ? (xS(e), a = Rb(t, e, il), $m(e, !0)) : a = Rb(t, e, il), Nn(), e.memoizedProps = e.pendingProps, a === null ? eR(e) : Kn = a, cb.current = null;
    }
    function eR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ys) === St) {
          Sn(t);
          var l = void 0;
          if ((t.mode & cn) === bt ? l = Rw(a, t, il) : (xS(t), l = Rw(a, t, il), $m(t, !1)), Nn(), l !== null) {
            Kn = l;
            return;
          }
        } else {
          var s = E1(a, t);
          if (s !== null) {
            s.flags &= Kv, Kn = s;
            return;
          }
          if ((t.mode & cn) !== bt) {
            $m(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ys, i.subtreeFlags = St, i.deletions = null;
          else {
            zr = fb, Kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Kn = v;
          return;
        }
        t = i, Kn = t;
      } while (t !== null);
      zr === Gl && (zr = Bw);
    }
    function pc(e, t, a) {
      var i = qa(), l = Jr.transition;
      try {
        Jr.transition = null, rr(Ir), _O(e, t, a, i);
      } finally {
        Jr.transition = l, rr(i);
      }
      return null;
    }
    function _O(e, t, a, i) {
      do
        Kl();
      while (Qu !== null);
      if (UO(), (en & (ea | $i)) !== Dr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Nd(s), l === null)
        return Pd(), null;
      if (s === Le && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Le, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = on;
      var f = Ft(l.lanes, l.childLanes);
      Yd(e, f), e === Da && (Da = null, Kn = null, kr = Le), ((l.subtreeFlags & to) !== St || (l.flags & to) !== St) && (fc || (fc = !0, mb = a, Tb(no, function() {
        return Kl(), null;
      })));
      var p = (l.subtreeFlags & (Ao | jo | Uo | to)) !== St, v = (l.flags & (Ao | jo | Uo | to)) !== St;
      if (p || v) {
        var R = Jr.transition;
        Jr.transition = null;
        var T = qa();
        rr(Ir);
        var G = en;
        en |= $i, cb.current = null, T1(e, l), W0(), F1(e, l, s), Hx(e.containerInfo), e.current = l, Es(s), B1(l, e, s), ws(), Dd(), en = G, rr(T), Jr.transition = R;
      } else
        e.current = l, W0();
      var q = fc;
      if (fc ? (fc = !1, Qu = e, tv = s) : (Zf = 0, ny = null), f = e.pendingLanes, f === Le && (Kf = null), q || aR(e.current, !1), zd(l.stateNode, i), sa && e.memoizedUpdaters.clear(), oO(), Za(e, cr()), t !== null)
        for (var ue = e.onRecoverableError, de = 0; de < t.length; de++) {
          var Ee = t[de], nt = Ee.stack, wt = Ee.digest;
          ue(Ee.value, {
            componentStack: nt,
            digest: wt
          });
        }
      if (ey) {
        ey = !1;
        var mt = vb;
        throw vb = null, mt;
      }
      return fa(tv, Ot) && e.tag !== Hu && Kl(), f = e.pendingLanes, fa(f, Ot) ? (M_(), e === yb ? nv++ : (nv = 0, yb = e)) : nv = 0, Fu(), Pd(), null;
    }
    function Kl() {
      if (Qu !== null) {
        var e = hh(tv), t = js($a, e), a = Jr.transition, i = qa();
        try {
          return Jr.transition = null, rr(t), DO();
        } finally {
          rr(i), Jr.transition = a;
        }
      }
      return !1;
    }
    function OO(e) {
      hb.push(e), fc || (fc = !0, Tb(no, function() {
        return Kl(), null;
      }));
    }
    function DO() {
      if (Qu === null)
        return !1;
      var e = mb;
      mb = null;
      var t = Qu, a = tv;
      if (Qu = null, tv = Le, (en & (ea | $i)) !== Dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      gb = !0, ty = !1, xl(a);
      var i = en;
      en |= $i, G1(t.current), $1(t, t.current, a, e);
      {
        var l = hb;
        hb = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          k1(t, f);
        }
      }
      Ud(), aR(t.current, !0), en = i, Fu(), ty ? t === ny ? Zf++ : (Zf = 0, ny = t) : Zf = 0, gb = !1, ty = !1, Md(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function tR(e) {
      return Kf !== null && Kf.has(e);
    }
    function kO(e) {
      Kf === null ? Kf = /* @__PURE__ */ new Set([e]) : Kf.add(e);
    }
    function zO(e) {
      ey || (ey = !0, vb = e);
    }
    var MO = zO;
    function nR(e, t, a) {
      var i = uc(a, t), l = J0(e, i, Ot), s = Vu(e, l, Ot), f = ka();
      s !== null && (_u(s, Ot, f), Za(s, f));
    }
    function Pn(e, t, a) {
      if (R1(a), ov(!1), e.tag === I) {
        nR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          nR(i, e, a);
          return;
        } else if (i.tag === V) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !tR(s)) {
            var f = uc(a, e), p = IS(i, f, Ot), v = Vu(i, p, Ot), R = ka();
            v !== null && (_u(v, Ot, R), Za(v, R));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function LO(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = ka();
      cf(e, a), VO(e), Da === e && Nl(kr, a) && (zr === Xp || zr === Km && Ll(kr) && cr() - pb < Vw ? dc(e, Le) : Jm = Ft(Jm, a)), Za(e, l);
    }
    function rR(e, t) {
      t === on && (t = pO(e));
      var a = ka(), i = Qa(e, t);
      i !== null && (_u(i, t, a), Za(i, a));
    }
    function NO(e) {
      var t = e.memoizedState, a = on;
      t !== null && (a = t.retryLane), rR(e, a);
    }
    function PO(e, t) {
      var a = on, i;
      switch (e.tag) {
        case E:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Pe:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), rR(e, a);
    }
    function AO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : sO(e / 1960) * 1960;
    }
    function jO() {
      if (nv > fO)
        throw nv = 0, yb = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Zf > dO && (Zf = 0, ny = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function UO() {
      fo.flushLegacyContextWarning(), fo.flushPendingUnsafeLifecycleWarnings();
    }
    function aR(e, t) {
      Sn(e), ly(e, Po, rO), t && ly(e, ki, aO), ly(e, Po, tO), t && ly(e, ki, nO), Nn();
    }
    function ly(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== St ? i = i.child : ((i.flags & t) !== St && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var uy = null;
    function iR(e) {
      {
        if ((en & ea) !== Dr || !(e.mode & qt))
          return;
        var t = e.tag;
        if (t !== oe && t !== I && t !== V && t !== A && t !== x && t !== D && t !== P)
          return;
        var a = Nt(e) || "ReactComponent";
        if (uy !== null) {
          if (uy.has(a))
            return;
          uy.add(a);
        } else
          uy = /* @__PURE__ */ new Set([a]);
        var i = br;
        try {
          Sn(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Sn(e) : Nn();
        }
      }
    }
    var Rb;
    {
      var HO = null;
      Rb = function(e, t, a) {
        var i = pR(HO, t);
        try {
          return gw(e, t, a);
        } catch (s) {
          if (KT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (hm(), b0(), Cw(e, t), pR(t, i), t.mode & cn && xS(t), No(null, gw, null, e, t, a), Ji()) {
            var l = ms();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var oR = !1, Cb;
    Cb = /* @__PURE__ */ new Set();
    function FO(e) {
      if (Ri && !D_())
        switch (e.tag) {
          case A:
          case x:
          case P: {
            var t = Kn && Nt(Kn) || "Unknown", a = t;
            if (!Cb.has(a)) {
              Cb.add(a);
              var i = Nt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case V: {
            oR || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), oR = !0);
            break;
          }
        }
    }
    function iv(e, t) {
      if (sa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ps(e, i, t);
        });
      }
    }
    var xb = {};
    function Tb(e, t) {
      {
        var a = bo.current;
        return a !== null ? (a.push(t), xb) : _d(e, t);
      }
    }
    function lR(e) {
      if (e !== xb)
        return Jv(e);
    }
    function uR() {
      return bo.current !== null;
    }
    function BO(e) {
      {
        if (e.mode & qt) {
          if (!Hw())
            return;
        } else if (!uO() || en !== Dr || e.tag !== A && e.tag !== x && e.tag !== P)
          return;
        if (bo.current === null) {
          var t = br;
          try {
            Sn(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Nt(e));
          } finally {
            t ? Sn(e) : Nn();
          }
        }
      }
    }
    function VO(e) {
      e.tag !== Hu && Hw() && bo.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ov(e) {
      Ww = e;
    }
    var Wi = null, Jf = null, IO = function(e) {
      Wi = e;
    };
    function ed(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function _b(e) {
      return ed(e);
    }
    function Ob(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ed(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Me,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function sR(e, t) {
      {
        if (Wi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case V: {
            typeof i == "function" && (l = !0);
            break;
          }
          case A: {
            (typeof i == "function" || s === Pt) && (l = !0);
            break;
          }
          case x: {
            (s === Me || s === Pt) && (l = !0);
            break;
          }
          case D:
          case P: {
            (s === Ut || s === Pt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Wi(a);
          if (f !== void 0 && f === Wi(i))
            return !0;
        }
        return !1;
      }
    }
    function cR(e) {
      {
        if (Wi === null || typeof WeakSet != "function")
          return;
        Jf === null && (Jf = /* @__PURE__ */ new WeakSet()), Jf.add(e);
      }
    }
    var $O = function(e, t) {
      {
        if (Wi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Kl(), Xl(function() {
          Db(e.current, i, a);
        });
      }
    }, WO = function(e, t) {
      {
        if (e.context !== mi)
          return;
        Kl(), Xl(function() {
          lv(t, e, null, null);
        });
      }
    };
    function Db(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case A:
          case P:
          case V:
            v = p;
            break;
          case x:
            v = p.render;
            break;
        }
        if (Wi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (v !== null) {
          var G = Wi(v);
          G !== void 0 && (a.has(G) ? T = !0 : t.has(G) && (f === V ? T = !0 : R = !0));
        }
        if (Jf !== null && (Jf.has(e) || i !== null && Jf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var q = Qa(e, Ot);
          q !== null && Mr(q, e, Ot, On);
        }
        l !== null && !T && Db(l, t, a), s !== null && Db(s, t, a);
      }
    }
    var qO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return kb(e.current, i, a), a;
      }
    };
    function kb(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case A:
          case P:
          case V:
            p = f;
            break;
          case x:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? YO(e, a) : i !== null && kb(i, t, a), l !== null && kb(l, t, a);
      }
    }
    function YO(e, t) {
      {
        var a = GO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ye:
              t.add(i.stateNode);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function GO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ye)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var zb;
    {
      zb = !1;
      try {
        var fR = Object.preventExtensions({});
      } catch {
        zb = !0;
      }
    }
    function QO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = St, this.subtreeFlags = St, this.deletions = null, this.lanes = Le, this.childLanes = Le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !zb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var yi = function(e, t, a, i) {
      return new QO(e, t, a, i);
    };
    function Mb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function XO(e) {
      return typeof e == "function" && !Mb(e) && e.defaultProps === void 0;
    }
    function KO(e) {
      if (typeof e == "function")
        return Mb(e) ? V : A;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Me)
          return x;
        if (t === Ut)
          return D;
      }
      return oe;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = yi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = St, a.subtreeFlags = St, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & er, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case oe:
        case A:
        case P:
          a.type = ed(e.type);
          break;
        case V:
          a.type = _b(e.type);
          break;
        case x:
          a.type = Ob(e.type);
          break;
      }
      return a;
    }
    function ZO(e, t) {
      e.flags &= er | Fn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Le, e.lanes = t, e.child = null, e.subtreeFlags = St, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = St, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function JO(e, t, a) {
      var i;
      return e === im ? (i = qt, t === !0 && (i |= wn, i |= fn)) : i = bt, sa && (i |= cn), yi(I, null, null, i);
    }
    function Lb(e, t, a, i, l, s) {
      var f = oe, p = e;
      if (typeof e == "function")
        Mb(e) ? (f = V, p = _b(p)) : p = ed(p);
      else if (typeof e == "string")
        f = ye;
      else
        e: switch (e) {
          case Si:
            return Zu(a.children, l, s, t);
          case ni:
            f = K, l |= wn, (l & qt) !== bt && (l |= fn);
            break;
          case bi:
            return eD(a, l, s, t);
          case Ze:
            return tD(a, l, s, t);
          case st:
            return nD(a, l, s, t);
          case Wn:
            return dR(a, l, s, t);
          case kn:
          // eslint-disable-next-line no-fallthrough
          case Gt:
          // eslint-disable-next-line no-fallthrough
          case Ln:
          // eslint-disable-next-line no-fallthrough
          case Sr:
          // eslint-disable-next-line no-fallthrough
          case Wt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ei:
                  f = b;
                  break e;
                case N:
                  f = k;
                  break e;
                case Me:
                  f = x, p = Ob(p);
                  break e;
                case Ut:
                  f = D;
                  break e;
                case Pt:
                  f = ce, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? Nt(i) : null;
              R && (v += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var T = yi(f, a, t, l);
      return T.elementType = e, T.type = p, T.lanes = s, T._debugOwner = i, T;
    }
    function Nb(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = Lb(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Zu(e, t, a, i) {
      var l = yi(be, e, i, t);
      return l.lanes = a, l;
    }
    function eD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = yi(C, e, i, t | cn);
      return l.elementType = bi, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function tD(e, t, a, i) {
      var l = yi(E, e, i, t);
      return l.elementType = Ze, l.lanes = a, l;
    }
    function nD(e, t, a, i) {
      var l = yi(Pe, e, i, t);
      return l.elementType = st, l.lanes = a, l;
    }
    function dR(e, t, a, i) {
      var l = yi(re, e, i, t);
      l.elementType = Wn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function Pb(e, t, a) {
      var i = yi(ke, e, null, t);
      return i.lanes = a, i;
    }
    function rD() {
      var e = yi(ye, null, null, bt);
      return e.elementType = "DELETED", e;
    }
    function aD(e) {
      var t = yi(Oe, null, null, bt);
      return t.stateNode = e, t;
    }
    function Ab(e, t, a) {
      var i = e.children !== null ? e.children : [], l = yi(J, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function pR(e, t) {
      return e === null && (e = yi(oe, null, null, bt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function iD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = yg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = on, this.eventTimes = Ns(Le), this.expirationTimes = Ns(On), this.pendingLanes = Le, this.suspendedLanes = Le, this.pingedLanes = Le, this.expiredLanes = Le, this.mutableReadLanes = Le, this.finishedLanes = Le, this.entangledLanes = Le, this.entanglements = Ns(Le), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _l; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Hu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function vR(e, t, a, i, l, s, f, p, v, R) {
      var T = new iD(e, t, a, p, v), G = JO(t, s);
      T.current = G, G.stateNode = T;
      {
        var q = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        G.memoizedState = q;
      }
      return Qg(G), T;
    }
    var jb = "18.3.1";
    function oD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return B(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: gr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Ub, Hb;
    Ub = !1, Hb = {};
    function hR(e) {
      if (!e)
        return mi;
      var t = Eu(e), a = VT(t);
      if (t.tag === V) {
        var i = t.type;
        if (Zo(i))
          return VE(t, i, a);
      }
      return a;
    }
    function lD(e, t) {
      {
        var a = Eu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = la(a);
        if (l === null)
          return null;
        if (l.mode & wn) {
          var s = Nt(a) || "Component";
          if (!Hb[s]) {
            Hb[s] = !0;
            var f = br;
            try {
              Sn(l), a.mode & wn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Sn(f) : Nn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function mR(e, t, a, i, l, s, f, p) {
      var v = !1, R = null;
      return vR(e, t, v, R, a, i, l, s, f);
    }
    function yR(e, t, a, i, l, s, f, p, v, R) {
      var T = !0, G = vR(a, i, T, e, l, s, f, p, v);
      G.context = hR(null);
      var q = G.current, ue = ka(), de = Xu(q), Ee = ql(ue, de);
      return Ee.callback = t ?? null, Vu(q, Ee, de), vO(G, de, ue), G;
    }
    function lv(e, t, a, i) {
      kd(t, e);
      var l = t.current, s = ka(), f = Xu(l);
      Vn(f);
      var p = hR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Ri && br !== null && !Ub && (Ub = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Nt(br) || "Unknown"));
      var v = ql(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var R = Vu(l, v, f);
      return R !== null && (Mr(R, l, f, s), bm(R, l, f)), f;
    }
    function sy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ye:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function uD(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (df(t)) {
            var a = ih(t);
            gO(t, a);
          }
          break;
        }
        case E: {
          Xl(function() {
            var l = Qa(e, Ot);
            if (l !== null) {
              var s = ka();
              Mr(l, e, Ot, s);
            }
          });
          var i = Ot;
          Fb(e, i);
          break;
        }
      }
    }
    function gR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function Fb(e, t) {
      gR(e, t);
      var a = e.alternate;
      a && gR(a, t);
    }
    function sD(e) {
      if (e.tag === E) {
        var t = Os, a = Qa(e, t);
        if (a !== null) {
          var i = ka();
          Mr(a, e, t, i);
        }
        Fb(e, t);
      }
    }
    function cD(e) {
      if (e.tag === E) {
        var t = Xu(e), a = Qa(e, t);
        if (a !== null) {
          var i = ka();
          Mr(a, e, t, i);
        }
        Fb(e, t);
      }
    }
    function SR(e) {
      var t = An(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function fD(e) {
      return bR(e);
    }
    var ER = function(e) {
      return !1;
    };
    function dD(e) {
      return ER(e);
    }
    var wR = null, RR = null, CR = null, xR = null, TR = null, _R = null, OR = null, DR = null, kR = null;
    {
      var zR = function(e, t, a) {
        var i = t[a], l = It(e) ? e.slice() : Vt({}, e);
        return a + 1 === t.length ? (It(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = zR(e[i], t, a + 1), l);
      }, MR = function(e, t) {
        return zR(e, t, 0);
      }, LR = function(e, t, a, i) {
        var l = t[i], s = It(e) ? e.slice() : Vt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], It(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = LR(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, NR = function(e, t, a) {
        if (t.length !== a.length) {
          H("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              H("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return LR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = It(e) ? e.slice() : Vt({}, e);
        return s[l] = PR(e[l], t, a + 1, i), s;
      }, AR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, Bb = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      wR = function(e, t, a, i) {
        var l = Bb(e, t);
        if (l !== null) {
          var s = AR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Vt({}, e.memoizedProps);
          var f = Qa(e, Ot);
          f !== null && Mr(f, e, Ot, On);
        }
      }, RR = function(e, t, a) {
        var i = Bb(e, t);
        if (i !== null) {
          var l = MR(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Vt({}, e.memoizedProps);
          var s = Qa(e, Ot);
          s !== null && Mr(s, e, Ot, On);
        }
      }, CR = function(e, t, a, i) {
        var l = Bb(e, t);
        if (l !== null) {
          var s = NR(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Vt({}, e.memoizedProps);
          var f = Qa(e, Ot);
          f !== null && Mr(f, e, Ot, On);
        }
      }, xR = function(e, t, a) {
        e.pendingProps = AR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, Ot);
        i !== null && Mr(i, e, Ot, On);
      }, TR = function(e, t) {
        e.pendingProps = MR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, Ot);
        a !== null && Mr(a, e, Ot, On);
      }, _R = function(e, t, a) {
        e.pendingProps = NR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, Ot);
        i !== null && Mr(i, e, Ot, On);
      }, OR = function(e) {
        var t = Qa(e, Ot);
        t !== null && Mr(t, e, Ot, On);
      }, DR = function(e) {
        bR = e;
      }, kR = function(e) {
        ER = e;
      };
    }
    function pD(e) {
      var t = la(e);
      return t === null ? null : t.stateNode;
    }
    function vD(e) {
      return null;
    }
    function hD() {
      return br;
    }
    function mD(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return Cu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: wR,
        overrideHookStateDeletePath: RR,
        overrideHookStateRenamePath: CR,
        overrideProps: xR,
        overridePropsDeletePath: TR,
        overridePropsRenamePath: _R,
        setErrorHandler: DR,
        setSuspenseHandler: kR,
        scheduleUpdate: OR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: pD,
        findFiberByHostInstance: t || vD,
        // React Refresh
        findHostInstancesForRefresh: qO,
        scheduleRefresh: $O,
        scheduleRoot: WO,
        setRefreshHandler: IO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: hD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: jb
      });
    }
    var jR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Vb(e) {
      this._internalRoot = e;
    }
    cy.prototype.render = Vb.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fy(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Zn) {
          var i = SR(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      lv(e, t, null, null);
    }, cy.prototype.unmount = Vb.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Qw() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xl(function() {
          lv(null, e, null, null);
        }), jE(t);
      }
    };
    function yD(e, t) {
      if (!fy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      UR(e);
      var a = !1, i = !1, l = "", s = jR;
      t != null && (t.hydrate ? H("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Hr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = mR(e, im, null, a, i, l, s);
      Zh(f.current, e);
      var p = e.nodeType === Zn ? e.parentNode : e;
      return pp(p), new Vb(f);
    }
    function cy(e) {
      this._internalRoot = e;
    }
    function gD(e) {
      e && bh(e);
    }
    cy.prototype.unstable_scheduleHydration = gD;
    function SD(e, t, a) {
      if (!fy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      UR(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = jR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var R = yR(t, null, e, im, i, s, f, p, v);
      if (Zh(R.current, e), pp(e), l)
        for (var T = 0; T < l.length; T++) {
          var G = l[T];
          R_(R, G);
        }
      return new cy(R);
    }
    function fy(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === Zi || e.nodeType === hd));
    }
    function uv(e) {
      return !!(e && (e.nodeType === aa || e.nodeType === Zi || e.nodeType === hd || e.nodeType === Zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function UR(e) {
      e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Cp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var bD = h.ReactCurrentOwner, HR;
    HR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Zn) {
        var t = SR(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Ib(e), l = !!(i && ju(i));
      l && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === aa && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Ib(e) {
      return e ? e.nodeType === Zi ? e.documentElement : e.firstChild : null;
    }
    function FR() {
    }
    function ED(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var q = sy(f);
            s.call(q);
          };
        }
        var f = yR(
          t,
          i,
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FR
        );
        e._reactRootContainer = f, Zh(f.current, e);
        var p = e.nodeType === Zn ? e.parentNode : e;
        return pp(p), Xl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var q = sy(T);
            R.call(q);
          };
        }
        var T = mR(
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          FR
        );
        e._reactRootContainer = T, Zh(T.current, e);
        var G = e.nodeType === Zn ? e.parentNode : e;
        return pp(G), Xl(function() {
          lv(t, T, a, i);
        }), T;
      }
    }
    function wD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dy(e, t, a, i, l) {
      HR(a), wD(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = ED(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var v = sy(f);
            p.call(v);
          };
        }
        lv(t, f, e, l);
      }
      return sy(f);
    }
    var BR = !1;
    function RD(e) {
      {
        BR || (BR = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = bD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nn(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === aa ? e : lD(e, "findDOMNode");
    }
    function CD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !uv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dy(null, e, t, !0, a);
    }
    function xD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !uv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dy(null, e, t, !1, a);
    }
    function TD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !uv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Fy(e))
        throw new Error("parentComponent must be a valid React Component");
      return dy(e, t, a, !1, i);
    }
    var VR = !1;
    function _D(e) {
      if (VR || (VR = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !uv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Cp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Ib(e), i = a && !ju(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xl(function() {
          dy(null, null, e, !1, function() {
            e._reactRootContainer = null, jE(e);
          });
        }), !0;
      } else {
        {
          var l = Ib(e), s = !!(l && ju(l)), f = e.nodeType === aa && uv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Pr(uD), Ou(sD), mh(cD), Hs(qa), Xd(ph), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Oc(Dx), Hy(bb, SO, Xl);
    function OD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fy(t))
        throw new Error("Target container is not a DOM element.");
      return oD(e, t, null, a);
    }
    function DD(e, t, a, i) {
      return TD(e, t, a, i);
    }
    var $b = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ju, zf, Jh, yu, Dc, bb]
    };
    function kD(e, t) {
      return $b.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), yD(e, t);
    }
    function zD(e, t, a) {
      return $b.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), SD(e, t, a);
    }
    function MD(e) {
      return Qw() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xl(e);
    }
    var LD = mD({
      findFiberByHostInstance: Js,
      bundleType: 1,
      version: jb,
      rendererPackageName: "react-dom"
    });
    if (!LD && rt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var IR = window.location.protocol;
      /^(https?|file):$/.test(IR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (IR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $b, ei.createPortal = OD, ei.createRoot = kD, ei.findDOMNode = RD, ei.flushSync = MD, ei.hydrate = CD, ei.hydrateRoot = zD, ei.render = xD, ei.unmountComponentAtNode = _D, ei.unstable_batchedUpdates = bb, ei.unstable_renderSubtreeIntoContainer = DD, ei.version = jb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ei;
}
var tC;
function Ry() {
  if (tC) return hy.exports;
  tC = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (w) {
        console.error(w);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (y(), hy.exports = $D()) : hy.exports = WD(), hy.exports;
}
var nC;
function qD() {
  if (nC) return nd;
  nC = 1;
  var y = Ry();
  if (process.env.NODE_ENV === "production")
    nd.createRoot = y.createRoot, nd.hydrateRoot = y.hydrateRoot;
  else {
    var w = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    nd.createRoot = function(h, _) {
      w.usingClientEntryPoint = !0;
      try {
        return y.createRoot(h, _);
      } finally {
        w.usingClientEntryPoint = !1;
      }
    }, nd.hydrateRoot = function(h, _, $) {
      w.usingClientEntryPoint = !0;
      try {
        return y.hydrateRoot(h, _, $);
      } finally {
        w.usingClientEntryPoint = !1;
      }
    };
  }
  return nd;
}
var YD = qD();
const GD = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;-webkit-user-select:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', QD = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", XD = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;right:16px;left:16px;top:auto;bottom:16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var La = ba(), Yb = { exports: {} }, dv = {}, Ev = { exports: {} }, KD = Ev.exports, rC;
function oE() {
  return rC || (rC = 1, function(y, w) {
    (function(h, _) {
      _(w);
    })(KD, function(h) {
      function _(he) {
        return function(Be, rt, xe, ht, zt, $t, Mt) {
          return he(Be, rt, Mt);
        };
      }
      function $(he) {
        return function(Be, rt, xe, ht) {
          if (!Be || !rt || typeof Be != "object" || typeof rt != "object")
            return he(Be, rt, xe, ht);
          var zt = ht.get(Be), $t = ht.get(rt);
          if (zt && $t)
            return zt === rt && $t === Be;
          ht.set(Be, rt), ht.set(rt, Be);
          var Mt = he(Be, rt, xe, ht);
          return ht.delete(Be), ht.delete(rt), Mt;
        };
      }
      function H(he, Re) {
        var Be = {};
        for (var rt in he)
          Be[rt] = he[rt];
        for (var rt in Re)
          Be[rt] = Re[rt];
        return Be;
      }
      function g(he) {
        return he.constructor === Object || he.constructor == null;
      }
      function pe(he) {
        return typeof he.then == "function";
      }
      function A(he, Re) {
        return he === Re || he !== he && Re !== Re;
      }
      var V = "[object Arguments]", oe = "[object Boolean]", I = "[object Date]", J = "[object RegExp]", ye = "[object Map]", ke = "[object Number]", be = "[object Object]", K = "[object Set]", k = "[object String]", b = Object.prototype.toString;
      function x(he) {
        var Re = he.areArraysEqual, Be = he.areDatesEqual, rt = he.areMapsEqual, xe = he.areObjectsEqual, ht = he.areRegExpsEqual, zt = he.areSetsEqual, $t = he.createIsNestedEqual, Mt = $t(B);
        function B(F, X, me) {
          if (F === X)
            return !0;
          if (!F || !X || typeof F != "object" || typeof X != "object")
            return F !== F && X !== X;
          if (g(F) && g(X))
            return xe(F, X, Mt, me);
          var Je = Array.isArray(F), et = Array.isArray(X);
          if (Je || et)
            return Je === et && Re(F, X, Mt, me);
          var Qe = b.call(F);
          return Qe !== b.call(X) ? !1 : Qe === I ? Be(F, X, Mt, me) : Qe === J ? ht(F, X, Mt, me) : Qe === ye ? rt(F, X, Mt, me) : Qe === K ? zt(F, X, Mt, me) : Qe === be || Qe === V ? pe(F) || pe(X) ? !1 : xe(F, X, Mt, me) : Qe === oe || Qe === ke || Qe === k ? A(F.valueOf(), X.valueOf()) : !1;
        }
        return B;
      }
      function C(he, Re, Be, rt) {
        var xe = he.length;
        if (Re.length !== xe)
          return !1;
        for (; xe-- > 0; )
          if (!Be(he[xe], Re[xe], xe, xe, he, Re, rt))
            return !1;
        return !0;
      }
      var E = $(C);
      function D(he, Re) {
        return A(he.valueOf(), Re.valueOf());
      }
      function P(he, Re, Be, rt) {
        var xe = he.size === Re.size;
        if (!xe)
          return !1;
        if (!he.size)
          return !0;
        var ht = {}, zt = 0;
        return he.forEach(function($t, Mt) {
          if (xe) {
            var B = !1, F = 0;
            Re.forEach(function(X, me) {
              !B && !ht[F] && (B = Be(Mt, me, zt, F, he, Re, rt) && Be($t, X, Mt, me, he, Re, rt)) && (ht[F] = !0), F++;
            }), zt++, xe = B;
          }
        }), xe;
      }
      var ce = $(P), ve = "_owner", Oe = Object.prototype.hasOwnProperty;
      function Pe(he, Re, Be, rt) {
        var xe = Object.keys(he), ht = xe.length;
        if (Object.keys(Re).length !== ht)
          return !1;
        for (var zt; ht-- > 0; ) {
          if (zt = xe[ht], zt === ve) {
            var $t = !!he.$$typeof, Mt = !!Re.$$typeof;
            if (($t || Mt) && $t !== Mt)
              return !1;
          }
          if (!Oe.call(Re, zt) || !Be(he[zt], Re[zt], zt, zt, he, Re, rt))
            return !1;
        }
        return !0;
      }
      var ie = $(Pe);
      function re(he, Re) {
        return he.source === Re.source && he.flags === Re.flags;
      }
      function De(he, Re, Be, rt) {
        var xe = he.size === Re.size;
        if (!xe)
          return !1;
        if (!he.size)
          return !0;
        var ht = {};
        return he.forEach(function(zt, $t) {
          if (xe) {
            var Mt = !1, B = 0;
            Re.forEach(function(F, X) {
              !Mt && !ht[B] && (Mt = Be(zt, F, $t, X, he, Re, rt)) && (ht[B] = !0), B++;
            }), xe = Mt;
          }
        }), xe;
      }
      var Ue = $(De), Fe = Object.freeze({
        areArraysEqual: C,
        areDatesEqual: D,
        areMapsEqual: P,
        areObjectsEqual: Pe,
        areRegExpsEqual: re,
        areSetsEqual: De,
        createIsNestedEqual: _
      }), Te = Object.freeze({
        areArraysEqual: E,
        areDatesEqual: D,
        areMapsEqual: ce,
        areObjectsEqual: ie,
        areRegExpsEqual: re,
        areSetsEqual: Ue,
        createIsNestedEqual: _
      }), ge = x(Fe);
      function $e(he, Re) {
        return ge(he, Re, void 0);
      }
      var W = x(H(Fe, { createIsNestedEqual: function() {
        return A;
      } }));
      function O(he, Re) {
        return W(he, Re, void 0);
      }
      var Q = x(Te);
      function He(he, Re) {
        return Q(he, Re, /* @__PURE__ */ new WeakMap());
      }
      var ze = x(H(Te, {
        createIsNestedEqual: function() {
          return A;
        }
      }));
      function Ge(he, Re) {
        return ze(he, Re, /* @__PURE__ */ new WeakMap());
      }
      function qe(he) {
        return x(H(Fe, he(Fe)));
      }
      function Ye(he) {
        var Re = x(H(Te, he(Te)));
        return function(Be, rt, xe) {
          return xe === void 0 && (xe = /* @__PURE__ */ new WeakMap()), Re(Be, rt, xe);
        };
      }
      h.circularDeepEqual = He, h.circularShallowEqual = Ge, h.createCustomCircularEqual = Ye, h.createCustomEqual = qe, h.deepEqual = $e, h.sameValueZeroEqual = A, h.shallowEqual = O, Object.defineProperty(h, "__esModule", { value: !0 });
    });
  }(Ev, Ev.exports)), Ev.exports;
}
var yy = { exports: {} }, aC;
function _y() {
  if (aC) return yy.exports;
  aC = 1;
  function y(h) {
    var _, $, H = "";
    if (typeof h == "string" || typeof h == "number") H += h;
    else if (typeof h == "object") if (Array.isArray(h)) {
      var g = h.length;
      for (_ = 0; _ < g; _++) h[_] && ($ = y(h[_])) && (H && (H += " "), H += $);
    } else for ($ in h) h[$] && (H && (H += " "), H += $);
    return H;
  }
  function w() {
    for (var h, _, $ = 0, H = "", g = arguments.length; $ < g; $++) (h = arguments[$]) && (_ = y(h)) && (H && (H += " "), H += _);
    return H;
  }
  return yy.exports = w, yy.exports.clsx = w, yy.exports;
}
var hn = {}, Gb, iC;
function ZD() {
  return iC || (iC = 1, Gb = function(w, h, _) {
    return w === h ? !0 : w.className === h.className && _(w.style, h.style) && w.width === h.width && w.autoSize === h.autoSize && w.cols === h.cols && w.draggableCancel === h.draggableCancel && w.draggableHandle === h.draggableHandle && _(w.verticalCompact, h.verticalCompact) && _(w.compactType, h.compactType) && _(w.layout, h.layout) && _(w.margin, h.margin) && _(w.containerPadding, h.containerPadding) && w.rowHeight === h.rowHeight && w.maxRows === h.maxRows && w.isBounded === h.isBounded && w.isDraggable === h.isDraggable && w.isResizable === h.isResizable && w.allowOverlap === h.allowOverlap && w.preventCollision === h.preventCollision && w.useCSSTransforms === h.useCSSTransforms && w.transformScale === h.transformScale && w.isDroppable === h.isDroppable && _(w.resizeHandles, h.resizeHandles) && _(w.resizeHandle, h.resizeHandle) && w.onLayoutChange === h.onLayoutChange && w.onDragStart === h.onDragStart && w.onDrag === h.onDrag && w.onDragStop === h.onDragStop && w.onResizeStart === h.onResizeStart && w.onResize === h.onResize && w.onResizeStop === h.onResizeStop && w.onDrop === h.onDrop && _(w.droppingItem, h.droppingItem) && _(w.innerRef, h.innerRef);
  }), Gb;
}
var oC;
function ad() {
  if (oC) return hn;
  oC = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.bottom = V, hn.childrenEqual = ke, hn.cloneLayout = oe, hn.cloneLayoutItem = ye, hn.collides = K, hn.compact = k, hn.compactItem = C, hn.compactType = zt, hn.correctBounds = E, hn.fastPositionEqual = be, hn.fastRGLPropsEqual = void 0, hn.getAllCollisions = ce, hn.getFirstCollision = P, hn.getLayoutItem = D, hn.getStatics = ve, hn.modifyLayout = I, hn.moveElement = Oe, hn.moveElementAwayFromCollision = Pe, hn.noop = void 0, hn.perc = ie, hn.resizeItemInDirection = qe, hn.setTopLeft = he, hn.setTransform = Ye, hn.sortLayoutItems = Re, hn.sortLayoutItemsByColRow = rt, hn.sortLayoutItemsByRowCol = Be, hn.synchronizeLayoutWithChildren = xe, hn.validateLayout = ht, hn.withLayoutItem = J;
  var y = /* @__PURE__ */ oE(), w = h(ba());
  function h(B) {
    return B && B.__esModule ? B : { default: B };
  }
  function _(B, F) {
    var X = Object.keys(B);
    if (Object.getOwnPropertySymbols) {
      var me = Object.getOwnPropertySymbols(B);
      F && (me = me.filter(function(Je) {
        return Object.getOwnPropertyDescriptor(B, Je).enumerable;
      })), X.push.apply(X, me);
    }
    return X;
  }
  function $(B) {
    for (var F = 1; F < arguments.length; F++) {
      var X = arguments[F] != null ? arguments[F] : {};
      F % 2 ? _(Object(X), !0).forEach(function(me) {
        H(B, me, X[me]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(X)) : _(Object(X)).forEach(function(me) {
        Object.defineProperty(B, me, Object.getOwnPropertyDescriptor(X, me));
      });
    }
    return B;
  }
  function H(B, F, X) {
    return (F = g(F)) in B ? Object.defineProperty(B, F, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : B[F] = X, B;
  }
  function g(B) {
    var F = pe(B, "string");
    return typeof F == "symbol" ? F : F + "";
  }
  function pe(B, F) {
    if (typeof B != "object" || !B) return B;
    var X = B[Symbol.toPrimitive];
    if (X !== void 0) {
      var me = X.call(B, F);
      if (typeof me != "object") return me;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (F === "string" ? String : Number)(B);
  }
  const A = process.env.NODE_ENV === "production";
  function V(B) {
    let F = 0, X;
    for (let me = 0, Je = B.length; me < Je; me++)
      X = B[me].y + B[me].h, X > F && (F = X);
    return F;
  }
  function oe(B) {
    const F = Array(B.length);
    for (let X = 0, me = B.length; X < me; X++)
      F[X] = ye(B[X]);
    return F;
  }
  function I(B, F) {
    const X = Array(B.length);
    for (let me = 0, Je = B.length; me < Je; me++)
      F.i === B[me].i ? X[me] = F : X[me] = B[me];
    return X;
  }
  function J(B, F, X) {
    let me = D(B, F);
    return me ? (me = X(ye(me)), B = I(B, me), [B, me]) : [B, null];
  }
  function ye(B) {
    return {
      w: B.w,
      h: B.h,
      x: B.x,
      y: B.y,
      i: B.i,
      minW: B.minW,
      maxW: B.maxW,
      minH: B.minH,
      maxH: B.maxH,
      moved: !!B.moved,
      static: !!B.static,
      // These can be null/undefined
      isDraggable: B.isDraggable,
      isResizable: B.isResizable,
      resizeHandles: B.resizeHandles,
      isBounded: B.isBounded
    };
  }
  function ke(B, F) {
    return (0, y.deepEqual)(w.default.Children.map(B, (X) => X == null ? void 0 : X.key), w.default.Children.map(F, (X) => X == null ? void 0 : X.key)) && (0, y.deepEqual)(w.default.Children.map(B, (X) => X == null ? void 0 : X.props["data-grid"]), w.default.Children.map(F, (X) => X == null ? void 0 : X.props["data-grid"]));
  }
  hn.fastRGLPropsEqual = ZD();
  function be(B, F) {
    return B.left === F.left && B.top === F.top && B.width === F.width && B.height === F.height;
  }
  function K(B, F) {
    return !(B.i === F.i || B.x + B.w <= F.x || B.x >= F.x + F.w || B.y + B.h <= F.y || B.y >= F.y + F.h);
  }
  function k(B, F, X, me) {
    const Je = ve(B);
    let et = V(Je);
    const Qe = Re(B, F), _t = Array(B.length);
    for (let Rt = 0, Bt = Qe.length; Rt < Bt; Rt++) {
      let ln = ye(Qe[Rt]);
      ln.static || (ln = C(Je, ln, F, X, Qe, me, et), et = Math.max(et, ln.y + ln.h), Je.push(ln)), _t[B.indexOf(Qe[Rt])] = ln, ln.moved = !1;
    }
    return _t;
  }
  const b = {
    x: "w",
    y: "h"
  };
  function x(B, F, X, me) {
    const Je = b[me];
    F[me] += 1;
    const et = B.map((Qe) => Qe.i).indexOf(F.i);
    for (let Qe = et + 1; Qe < B.length; Qe++) {
      const _t = B[Qe];
      if (!_t.static) {
        if (_t.y > F.y + F.h) break;
        K(F, _t) && x(B, _t, X + F[Je], me);
      }
    }
    F[me] = X;
  }
  function C(B, F, X, me, Je, et, Qe) {
    const _t = X === "vertical", Rt = X === "horizontal";
    if (_t)
      for (typeof Qe == "number" ? F.y = Math.min(Qe, F.y) : F.y = Math.min(V(B), F.y); F.y > 0 && !P(B, F); )
        F.y--;
    else if (Rt)
      for (; F.x > 0 && !P(B, F); )
        F.x--;
    let Bt;
    for (; (Bt = P(B, F)) && !(X === null && et); )
      if (Rt ? x(Je, F, Bt.x + Bt.w, "x") : x(Je, F, Bt.y + Bt.h, "y"), Rt && F.x + F.w > me)
        for (F.x = me - F.w, F.y++; F.x > 0 && !P(B, F); )
          F.x--;
    return F.y = Math.max(F.y, 0), F.x = Math.max(F.x, 0), F;
  }
  function E(B, F) {
    const X = ve(B);
    for (let me = 0, Je = B.length; me < Je; me++) {
      const et = B[me];
      if (et.x + et.w > F.cols && (et.x = F.cols - et.w), et.x < 0 && (et.x = 0, et.w = F.cols), !et.static) X.push(et);
      else
        for (; P(X, et); )
          et.y++;
    }
    return B;
  }
  function D(B, F) {
    for (let X = 0, me = B.length; X < me; X++)
      if (B[X].i === F) return B[X];
  }
  function P(B, F) {
    for (let X = 0, me = B.length; X < me; X++)
      if (K(B[X], F)) return B[X];
  }
  function ce(B, F) {
    return B.filter((X) => K(X, F));
  }
  function ve(B) {
    return B.filter((F) => F.static);
  }
  function Oe(B, F, X, me, Je, et, Qe, _t, Rt) {
    if (F.static && F.isDraggable !== !0 || F.y === me && F.x === X) return B;
    "Moving element ".concat(F.i, " to [").concat(String(X), ",").concat(String(me), "] from [").concat(F.x, ",").concat(F.y, "]");
    const Bt = F.x, ln = F.y;
    typeof X == "number" && (F.x = X), typeof me == "number" && (F.y = me), F.moved = !0;
    let z = Re(B, Qe);
    (Qe === "vertical" && typeof me == "number" ? ln >= me : Qe === "horizontal" && typeof X == "number" ? Bt >= X : !1) && (z = z.reverse());
    const j = ce(z, F), le = j.length > 0;
    if (le && Rt)
      return oe(B);
    if (le && et)
      return "Collision prevented on ".concat(F.i, ", reverting."), F.x = Bt, F.y = ln, F.moved = !1, B;
    for (let Ce = 0, gt = j.length; Ce < gt; Ce++) {
      const ct = j[Ce];
      "Resolving collision between ".concat(F.i, " at [").concat(F.x, ",").concat(F.y, "] and ").concat(ct.i, " at [").concat(ct.x, ",").concat(ct.y, "]"), !ct.moved && (ct.static ? B = Pe(B, ct, F, Je, Qe) : B = Pe(B, F, ct, Je, Qe));
    }
    return B;
  }
  function Pe(B, F, X, me, Je, et) {
    const Qe = Je === "horizontal", _t = Je === "vertical", Rt = F.static;
    if (me) {
      me = !1;
      const z = {
        x: Qe ? Math.max(F.x - X.w, 0) : X.x,
        y: _t ? Math.max(F.y - X.h, 0) : X.y,
        w: X.w,
        h: X.h,
        i: "-1"
      }, Z = P(B, z), j = Z && Z.y + Z.h > F.y, le = Z && F.x + F.w > Z.x;
      if (Z) {
        if (j && _t)
          return Oe(B, X, void 0, X.y + 1, me, Rt, Je);
        if (j && Je == null)
          return F.y = X.y, X.y = X.y + X.h, B;
        if (le && Qe)
          return Oe(B, F, X.x, void 0, me, Rt, Je);
      } else return "Doing reverse collision on ".concat(X.i, " up to [").concat(z.x, ",").concat(z.y, "]."), Oe(B, X, Qe ? z.x : void 0, _t ? z.y : void 0, me, Rt, Je);
    }
    const Bt = Qe ? X.x + 1 : void 0, ln = _t ? X.y + 1 : void 0;
    return Bt == null && ln == null ? B : Oe(B, X, Qe ? X.x + 1 : void 0, _t ? X.y + 1 : void 0, me, Rt, Je);
  }
  function ie(B) {
    return B * 100 + "%";
  }
  const re = (B, F, X, me) => B + X > me ? F : X, De = (B, F, X) => B < 0 ? F : X, Ue = (B) => Math.max(0, B), Fe = (B) => Math.max(0, B), Te = (B, F, X) => {
    let {
      left: me,
      height: Je,
      width: et
    } = F;
    const Qe = B.top - (Je - B.height);
    return {
      left: me,
      width: et,
      height: De(Qe, B.height, Je),
      top: Fe(Qe)
    };
  }, ge = (B, F, X) => {
    let {
      top: me,
      left: Je,
      height: et,
      width: Qe
    } = F;
    return {
      top: me,
      height: et,
      width: re(B.left, B.width, Qe, X),
      left: Ue(Je)
    };
  }, $e = (B, F, X) => {
    let {
      top: me,
      height: Je,
      width: et
    } = F;
    const Qe = B.left - (et - B.width);
    return {
      height: Je,
      width: Qe < 0 ? B.width : re(B.left, B.width, et, X),
      top: Fe(me),
      left: Ue(Qe)
    };
  }, W = (B, F, X) => {
    let {
      top: me,
      left: Je,
      height: et,
      width: Qe
    } = F;
    return {
      width: Qe,
      left: Je,
      height: De(me, B.height, et),
      top: Fe(me)
    };
  }, Ge = {
    n: Te,
    ne: function() {
      return Te(arguments.length <= 0 ? void 0 : arguments[0], ge(...arguments));
    },
    e: ge,
    se: function() {
      return W(arguments.length <= 0 ? void 0 : arguments[0], ge(...arguments));
    },
    s: W,
    sw: function() {
      return W(arguments.length <= 0 ? void 0 : arguments[0], $e(...arguments));
    },
    w: $e,
    nw: function() {
      return Te(arguments.length <= 0 ? void 0 : arguments[0], $e(...arguments));
    }
  };
  function qe(B, F, X, me) {
    const Je = Ge[B];
    return Je ? Je(F, $($({}, F), X), me) : X;
  }
  function Ye(B) {
    let {
      top: F,
      left: X,
      width: me,
      height: Je
    } = B;
    const et = "translate(".concat(X, "px,").concat(F, "px)");
    return {
      transform: et,
      WebkitTransform: et,
      MozTransform: et,
      msTransform: et,
      OTransform: et,
      width: "".concat(me, "px"),
      height: "".concat(Je, "px"),
      position: "absolute"
    };
  }
  function he(B) {
    let {
      top: F,
      left: X,
      width: me,
      height: Je
    } = B;
    return {
      top: "".concat(F, "px"),
      left: "".concat(X, "px"),
      width: "".concat(me, "px"),
      height: "".concat(Je, "px"),
      position: "absolute"
    };
  }
  function Re(B, F) {
    return F === "horizontal" ? rt(B) : F === "vertical" ? Be(B) : B;
  }
  function Be(B) {
    return B.slice(0).sort(function(F, X) {
      return F.y > X.y || F.y === X.y && F.x > X.x ? 1 : F.y === X.y && F.x === X.x ? 0 : -1;
    });
  }
  function rt(B) {
    return B.slice(0).sort(function(F, X) {
      return F.x > X.x || F.x === X.x && F.y > X.y ? 1 : -1;
    });
  }
  function xe(B, F, X, me, Je) {
    B = B || [];
    const et = [];
    w.default.Children.forEach(F, (_t) => {
      if ((_t == null ? void 0 : _t.key) == null) return;
      const Rt = D(B, String(_t.key)), Bt = _t.props["data-grid"];
      Rt && Bt == null ? et.push(ye(Rt)) : Bt ? (A || ht([Bt], "ReactGridLayout.children"), et.push(ye($($({}, Bt), {}, {
        i: _t.key
      })))) : et.push(ye({
        w: 1,
        h: 1,
        x: 0,
        y: V(et),
        i: String(_t.key)
      }));
    });
    const Qe = E(et, {
      cols: X
    });
    return Je ? Qe : k(Qe, me, X);
  }
  function ht(B) {
    let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const X = ["x", "y", "w", "h"];
    if (!Array.isArray(B)) throw new Error(F + " must be an array!");
    for (let me = 0, Je = B.length; me < Je; me++) {
      const et = B[me];
      for (let Qe = 0; Qe < X.length; Qe++) {
        const _t = X[Qe], Rt = et[_t];
        if (typeof Rt != "number" || Number.isNaN(Rt))
          throw new Error("ReactGridLayout: ".concat(F, "[").concat(me, "].").concat(_t, " must be a number! Received: ").concat(Rt, " (").concat(typeof Rt, ")"));
      }
      if (typeof et.i < "u" && typeof et.i != "string")
        throw new Error("ReactGridLayout: ".concat(F, "[").concat(me, "].i must be a string! Received: ").concat(et.i, " (").concat(typeof et.i, ")"));
    }
  }
  function zt(B) {
    const {
      verticalCompact: F,
      compactType: X
    } = B || {};
    return F === !1 ? null : X;
  }
  function $t() {
  }
  const Mt = () => {
  };
  return hn.noop = Mt, hn;
}
var Jl = {}, lC;
function lE() {
  if (lC) return Jl;
  lC = 1, Object.defineProperty(Jl, "__esModule", {
    value: !0
  }), Jl.calcGridColWidth = y, Jl.calcGridItemPosition = h, Jl.calcGridItemWHPx = w, Jl.calcWH = $, Jl.calcXY = _, Jl.clamp = H;
  function y(g) {
    const {
      margin: pe,
      containerPadding: A,
      containerWidth: V,
      cols: oe
    } = g;
    return (V - pe[0] * (oe - 1) - A[0] * 2) / oe;
  }
  function w(g, pe, A) {
    return Number.isFinite(g) ? Math.round(pe * g + Math.max(0, g - 1) * A) : g;
  }
  function h(g, pe, A, V, oe, I) {
    const {
      margin: J,
      containerPadding: ye,
      rowHeight: ke
    } = g, be = y(g), K = {};
    return I && I.resizing ? (K.width = Math.round(I.resizing.width), K.height = Math.round(I.resizing.height)) : (K.width = w(V, be, J[0]), K.height = w(oe, ke, J[1])), I && I.dragging ? (K.top = Math.round(I.dragging.top), K.left = Math.round(I.dragging.left)) : I && I.resizing && typeof I.resizing.top == "number" && typeof I.resizing.left == "number" ? (K.top = Math.round(I.resizing.top), K.left = Math.round(I.resizing.left)) : (K.top = Math.round((ke + J[1]) * A + ye[1]), K.left = Math.round((be + J[0]) * pe + ye[0])), K;
  }
  function _(g, pe, A, V, oe) {
    const {
      margin: I,
      containerPadding: J,
      cols: ye,
      rowHeight: ke,
      maxRows: be
    } = g, K = y(g);
    let k = Math.round((A - J[0]) / (K + I[0])), b = Math.round((pe - J[1]) / (ke + I[1]));
    return k = H(k, 0, ye - V), b = H(b, 0, be - oe), {
      x: k,
      y: b
    };
  }
  function $(g, pe, A, V, oe, I) {
    const {
      margin: J,
      maxRows: ye,
      cols: ke,
      rowHeight: be
    } = g, K = y(g);
    let k = Math.round((pe + J[0]) / (K + J[0])), b = Math.round((A + J[1]) / (be + J[1])), x = H(k, 0, ke - V), C = H(b, 0, ye - oe);
    return ["sw", "w", "nw"].indexOf(I) !== -1 && (x = H(k, 0, ke)), ["nw", "n", "ne"].indexOf(I) !== -1 && (C = H(b, 0, ye)), {
      w: x,
      h: C
    };
  }
  function H(g, pe, A) {
    return Math.max(Math.min(g, A), pe);
  }
  return Jl;
}
var pv = {}, gy = { exports: {} }, Sy = { exports: {} }, xn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uC;
function JD() {
  if (uC) return xn;
  uC = 1;
  var y = typeof Symbol == "function" && Symbol.for, w = y ? Symbol.for("react.element") : 60103, h = y ? Symbol.for("react.portal") : 60106, _ = y ? Symbol.for("react.fragment") : 60107, $ = y ? Symbol.for("react.strict_mode") : 60108, H = y ? Symbol.for("react.profiler") : 60114, g = y ? Symbol.for("react.provider") : 60109, pe = y ? Symbol.for("react.context") : 60110, A = y ? Symbol.for("react.async_mode") : 60111, V = y ? Symbol.for("react.concurrent_mode") : 60111, oe = y ? Symbol.for("react.forward_ref") : 60112, I = y ? Symbol.for("react.suspense") : 60113, J = y ? Symbol.for("react.suspense_list") : 60120, ye = y ? Symbol.for("react.memo") : 60115, ke = y ? Symbol.for("react.lazy") : 60116, be = y ? Symbol.for("react.block") : 60121, K = y ? Symbol.for("react.fundamental") : 60117, k = y ? Symbol.for("react.responder") : 60118, b = y ? Symbol.for("react.scope") : 60119;
  function x(E) {
    if (typeof E == "object" && E !== null) {
      var D = E.$$typeof;
      switch (D) {
        case w:
          switch (E = E.type, E) {
            case A:
            case V:
            case _:
            case H:
            case $:
            case I:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case pe:
                case oe:
                case ke:
                case ye:
                case g:
                  return E;
                default:
                  return D;
              }
          }
        case h:
          return D;
      }
    }
  }
  function C(E) {
    return x(E) === V;
  }
  return xn.AsyncMode = A, xn.ConcurrentMode = V, xn.ContextConsumer = pe, xn.ContextProvider = g, xn.Element = w, xn.ForwardRef = oe, xn.Fragment = _, xn.Lazy = ke, xn.Memo = ye, xn.Portal = h, xn.Profiler = H, xn.StrictMode = $, xn.Suspense = I, xn.isAsyncMode = function(E) {
    return C(E) || x(E) === A;
  }, xn.isConcurrentMode = C, xn.isContextConsumer = function(E) {
    return x(E) === pe;
  }, xn.isContextProvider = function(E) {
    return x(E) === g;
  }, xn.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === w;
  }, xn.isForwardRef = function(E) {
    return x(E) === oe;
  }, xn.isFragment = function(E) {
    return x(E) === _;
  }, xn.isLazy = function(E) {
    return x(E) === ke;
  }, xn.isMemo = function(E) {
    return x(E) === ye;
  }, xn.isPortal = function(E) {
    return x(E) === h;
  }, xn.isProfiler = function(E) {
    return x(E) === H;
  }, xn.isStrictMode = function(E) {
    return x(E) === $;
  }, xn.isSuspense = function(E) {
    return x(E) === I;
  }, xn.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === _ || E === V || E === H || E === $ || E === I || E === J || typeof E == "object" && E !== null && (E.$$typeof === ke || E.$$typeof === ye || E.$$typeof === g || E.$$typeof === pe || E.$$typeof === oe || E.$$typeof === K || E.$$typeof === k || E.$$typeof === b || E.$$typeof === be);
  }, xn.typeOf = x, xn;
}
var Tn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sC;
function ek() {
  return sC || (sC = 1, process.env.NODE_ENV !== "production" && function() {
    var y = typeof Symbol == "function" && Symbol.for, w = y ? Symbol.for("react.element") : 60103, h = y ? Symbol.for("react.portal") : 60106, _ = y ? Symbol.for("react.fragment") : 60107, $ = y ? Symbol.for("react.strict_mode") : 60108, H = y ? Symbol.for("react.profiler") : 60114, g = y ? Symbol.for("react.provider") : 60109, pe = y ? Symbol.for("react.context") : 60110, A = y ? Symbol.for("react.async_mode") : 60111, V = y ? Symbol.for("react.concurrent_mode") : 60111, oe = y ? Symbol.for("react.forward_ref") : 60112, I = y ? Symbol.for("react.suspense") : 60113, J = y ? Symbol.for("react.suspense_list") : 60120, ye = y ? Symbol.for("react.memo") : 60115, ke = y ? Symbol.for("react.lazy") : 60116, be = y ? Symbol.for("react.block") : 60121, K = y ? Symbol.for("react.fundamental") : 60117, k = y ? Symbol.for("react.responder") : 60118, b = y ? Symbol.for("react.scope") : 60119;
    function x(xe) {
      return typeof xe == "string" || typeof xe == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      xe === _ || xe === V || xe === H || xe === $ || xe === I || xe === J || typeof xe == "object" && xe !== null && (xe.$$typeof === ke || xe.$$typeof === ye || xe.$$typeof === g || xe.$$typeof === pe || xe.$$typeof === oe || xe.$$typeof === K || xe.$$typeof === k || xe.$$typeof === b || xe.$$typeof === be);
    }
    function C(xe) {
      if (typeof xe == "object" && xe !== null) {
        var ht = xe.$$typeof;
        switch (ht) {
          case w:
            var zt = xe.type;
            switch (zt) {
              case A:
              case V:
              case _:
              case H:
              case $:
              case I:
                return zt;
              default:
                var $t = zt && zt.$$typeof;
                switch ($t) {
                  case pe:
                  case oe:
                  case ke:
                  case ye:
                  case g:
                    return $t;
                  default:
                    return ht;
                }
            }
          case h:
            return ht;
        }
      }
    }
    var E = A, D = V, P = pe, ce = g, ve = w, Oe = oe, Pe = _, ie = ke, re = ye, De = h, Ue = H, Fe = $, Te = I, ge = !1;
    function $e(xe) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), W(xe) || C(xe) === A;
    }
    function W(xe) {
      return C(xe) === V;
    }
    function O(xe) {
      return C(xe) === pe;
    }
    function Q(xe) {
      return C(xe) === g;
    }
    function He(xe) {
      return typeof xe == "object" && xe !== null && xe.$$typeof === w;
    }
    function ze(xe) {
      return C(xe) === oe;
    }
    function Ge(xe) {
      return C(xe) === _;
    }
    function qe(xe) {
      return C(xe) === ke;
    }
    function Ye(xe) {
      return C(xe) === ye;
    }
    function he(xe) {
      return C(xe) === h;
    }
    function Re(xe) {
      return C(xe) === H;
    }
    function Be(xe) {
      return C(xe) === $;
    }
    function rt(xe) {
      return C(xe) === I;
    }
    Tn.AsyncMode = E, Tn.ConcurrentMode = D, Tn.ContextConsumer = P, Tn.ContextProvider = ce, Tn.Element = ve, Tn.ForwardRef = Oe, Tn.Fragment = Pe, Tn.Lazy = ie, Tn.Memo = re, Tn.Portal = De, Tn.Profiler = Ue, Tn.StrictMode = Fe, Tn.Suspense = Te, Tn.isAsyncMode = $e, Tn.isConcurrentMode = W, Tn.isContextConsumer = O, Tn.isContextProvider = Q, Tn.isElement = He, Tn.isForwardRef = ze, Tn.isFragment = Ge, Tn.isLazy = qe, Tn.isMemo = Ye, Tn.isPortal = he, Tn.isProfiler = Re, Tn.isStrictMode = Be, Tn.isSuspense = rt, Tn.isValidElementType = x, Tn.typeOf = C;
  }()), Tn;
}
var cC;
function AC() {
  return cC || (cC = 1, process.env.NODE_ENV === "production" ? Sy.exports = JD() : Sy.exports = ek()), Sy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Qb, fC;
function tk() {
  if (fC) return Qb;
  fC = 1;
  var y = Object.getOwnPropertySymbols, w = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function _(H) {
    if (H == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(H);
  }
  function $() {
    try {
      if (!Object.assign)
        return !1;
      var H = new String("abc");
      if (H[5] = "de", Object.getOwnPropertyNames(H)[0] === "5")
        return !1;
      for (var g = {}, pe = 0; pe < 10; pe++)
        g["_" + String.fromCharCode(pe)] = pe;
      var A = Object.getOwnPropertyNames(g).map(function(oe) {
        return g[oe];
      });
      if (A.join("") !== "0123456789")
        return !1;
      var V = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(oe) {
        V[oe] = oe;
      }), Object.keys(Object.assign({}, V)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Qb = $() ? Object.assign : function(H, g) {
    for (var pe, A = _(H), V, oe = 1; oe < arguments.length; oe++) {
      pe = Object(arguments[oe]);
      for (var I in pe)
        w.call(pe, I) && (A[I] = pe[I]);
      if (y) {
        V = y(pe);
        for (var J = 0; J < V.length; J++)
          h.call(pe, V[J]) && (A[V[J]] = pe[V[J]]);
      }
    }
    return A;
  }, Qb;
}
var Xb, dC;
function uE() {
  if (dC) return Xb;
  dC = 1;
  var y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xb = y, Xb;
}
var Kb, pC;
function jC() {
  return pC || (pC = 1, Kb = Function.call.bind(Object.prototype.hasOwnProperty)), Kb;
}
var Zb, vC;
function nk() {
  if (vC) return Zb;
  vC = 1;
  var y = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var w = /* @__PURE__ */ uE(), h = {}, _ = /* @__PURE__ */ jC();
    y = function(H) {
      var g = "Warning: " + H;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function $(H, g, pe, A, V) {
    if (process.env.NODE_ENV !== "production") {
      for (var oe in H)
        if (_(H, oe)) {
          var I;
          try {
            if (typeof H[oe] != "function") {
              var J = Error(
                (A || "React class") + ": " + pe + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof H[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw J.name = "Invariant Violation", J;
            }
            I = H[oe](g, oe, A, pe, null, w);
          } catch (ke) {
            I = ke;
          }
          if (I && !(I instanceof Error) && y(
            (A || "React class") + ": type specification of " + pe + " `" + oe + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in h)) {
            h[I.message] = !0;
            var ye = V ? V() : "";
            y(
              "Failed " + pe + " type: " + I.message + (ye ?? "")
            );
          }
        }
    }
  }
  return $.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (h = {});
  }, Zb = $, Zb;
}
var Jb, hC;
function rk() {
  if (hC) return Jb;
  hC = 1;
  var y = AC(), w = tk(), h = /* @__PURE__ */ uE(), _ = /* @__PURE__ */ jC(), $ = /* @__PURE__ */ nk(), H = function() {
  };
  process.env.NODE_ENV !== "production" && (H = function(pe) {
    var A = "Warning: " + pe;
    typeof console < "u" && console.error(A);
    try {
      throw new Error(A);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return Jb = function(pe, A) {
    var V = typeof Symbol == "function" && Symbol.iterator, oe = "@@iterator";
    function I(W) {
      var O = W && (V && W[V] || W[oe]);
      if (typeof O == "function")
        return O;
    }
    var J = "<<anonymous>>", ye = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: b(),
      arrayOf: x,
      element: C(),
      elementType: E(),
      instanceOf: D,
      node: Oe(),
      objectOf: ce,
      oneOf: P,
      oneOfType: ve,
      shape: ie,
      exact: re
    };
    function ke(W, O) {
      return W === O ? W !== 0 || 1 / W === 1 / O : W !== W && O !== O;
    }
    function be(W, O) {
      this.message = W, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    be.prototype = Error.prototype;
    function K(W) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, Q = 0;
      function He(Ge, qe, Ye, he, Re, Be, rt) {
        if (he = he || J, Be = Be || Ye, rt !== h) {
          if (A) {
            var xe = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw xe.name = "Invariant Violation", xe;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ht = he + ":" + Ye;
            !O[ht] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (H(
              "You are manually calling a React.PropTypes validation function for the `" + Be + "` prop on `" + he + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ht] = !0, Q++);
          }
        }
        return qe[Ye] == null ? Ge ? qe[Ye] === null ? new be("The " + Re + " `" + Be + "` is marked as required " + ("in `" + he + "`, but its value is `null`.")) : new be("The " + Re + " `" + Be + "` is marked as required in " + ("`" + he + "`, but its value is `undefined`.")) : null : W(qe, Ye, he, Re, Be);
      }
      var ze = He.bind(null, !1);
      return ze.isRequired = He.bind(null, !0), ze;
    }
    function k(W) {
      function O(Q, He, ze, Ge, qe, Ye) {
        var he = Q[He], Re = Fe(he);
        if (Re !== W) {
          var Be = Te(he);
          return new be(
            "Invalid " + Ge + " `" + qe + "` of type " + ("`" + Be + "` supplied to `" + ze + "`, expected ") + ("`" + W + "`."),
            { expectedType: W }
          );
        }
        return null;
      }
      return K(O);
    }
    function b() {
      return K(g);
    }
    function x(W) {
      function O(Q, He, ze, Ge, qe) {
        if (typeof W != "function")
          return new be("Property `" + qe + "` of component `" + ze + "` has invalid PropType notation inside arrayOf.");
        var Ye = Q[He];
        if (!Array.isArray(Ye)) {
          var he = Fe(Ye);
          return new be("Invalid " + Ge + " `" + qe + "` of type " + ("`" + he + "` supplied to `" + ze + "`, expected an array."));
        }
        for (var Re = 0; Re < Ye.length; Re++) {
          var Be = W(Ye, Re, ze, Ge, qe + "[" + Re + "]", h);
          if (Be instanceof Error)
            return Be;
        }
        return null;
      }
      return K(O);
    }
    function C() {
      function W(O, Q, He, ze, Ge) {
        var qe = O[Q];
        if (!pe(qe)) {
          var Ye = Fe(qe);
          return new be("Invalid " + ze + " `" + Ge + "` of type " + ("`" + Ye + "` supplied to `" + He + "`, expected a single ReactElement."));
        }
        return null;
      }
      return K(W);
    }
    function E() {
      function W(O, Q, He, ze, Ge) {
        var qe = O[Q];
        if (!y.isValidElementType(qe)) {
          var Ye = Fe(qe);
          return new be("Invalid " + ze + " `" + Ge + "` of type " + ("`" + Ye + "` supplied to `" + He + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return K(W);
    }
    function D(W) {
      function O(Q, He, ze, Ge, qe) {
        if (!(Q[He] instanceof W)) {
          var Ye = W.name || J, he = $e(Q[He]);
          return new be("Invalid " + Ge + " `" + qe + "` of type " + ("`" + he + "` supplied to `" + ze + "`, expected ") + ("instance of `" + Ye + "`."));
        }
        return null;
      }
      return K(O);
    }
    function P(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? H(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : H("Invalid argument supplied to oneOf, expected an array.")), g;
      function O(Q, He, ze, Ge, qe) {
        for (var Ye = Q[He], he = 0; he < W.length; he++)
          if (ke(Ye, W[he]))
            return null;
        var Re = JSON.stringify(W, function(rt, xe) {
          var ht = Te(xe);
          return ht === "symbol" ? String(xe) : xe;
        });
        return new be("Invalid " + Ge + " `" + qe + "` of value `" + String(Ye) + "` " + ("supplied to `" + ze + "`, expected one of " + Re + "."));
      }
      return K(O);
    }
    function ce(W) {
      function O(Q, He, ze, Ge, qe) {
        if (typeof W != "function")
          return new be("Property `" + qe + "` of component `" + ze + "` has invalid PropType notation inside objectOf.");
        var Ye = Q[He], he = Fe(Ye);
        if (he !== "object")
          return new be("Invalid " + Ge + " `" + qe + "` of type " + ("`" + he + "` supplied to `" + ze + "`, expected an object."));
        for (var Re in Ye)
          if (_(Ye, Re)) {
            var Be = W(Ye, Re, ze, Ge, qe + "." + Re, h);
            if (Be instanceof Error)
              return Be;
          }
        return null;
      }
      return K(O);
    }
    function ve(W) {
      if (!Array.isArray(W))
        return process.env.NODE_ENV !== "production" && H("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var O = 0; O < W.length; O++) {
        var Q = W[O];
        if (typeof Q != "function")
          return H(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(Q) + " at index " + O + "."
          ), g;
      }
      function He(ze, Ge, qe, Ye, he) {
        for (var Re = [], Be = 0; Be < W.length; Be++) {
          var rt = W[Be], xe = rt(ze, Ge, qe, Ye, he, h);
          if (xe == null)
            return null;
          xe.data && _(xe.data, "expectedType") && Re.push(xe.data.expectedType);
        }
        var ht = Re.length > 0 ? ", expected one of type [" + Re.join(", ") + "]" : "";
        return new be("Invalid " + Ye + " `" + he + "` supplied to " + ("`" + qe + "`" + ht + "."));
      }
      return K(He);
    }
    function Oe() {
      function W(O, Q, He, ze, Ge) {
        return De(O[Q]) ? null : new be("Invalid " + ze + " `" + Ge + "` supplied to " + ("`" + He + "`, expected a ReactNode."));
      }
      return K(W);
    }
    function Pe(W, O, Q, He, ze) {
      return new be(
        (W || "React class") + ": " + O + " type `" + Q + "." + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ze + "`."
      );
    }
    function ie(W) {
      function O(Q, He, ze, Ge, qe) {
        var Ye = Q[He], he = Fe(Ye);
        if (he !== "object")
          return new be("Invalid " + Ge + " `" + qe + "` of type `" + he + "` " + ("supplied to `" + ze + "`, expected `object`."));
        for (var Re in W) {
          var Be = W[Re];
          if (typeof Be != "function")
            return Pe(ze, Ge, qe, Re, Te(Be));
          var rt = Be(Ye, Re, ze, Ge, qe + "." + Re, h);
          if (rt)
            return rt;
        }
        return null;
      }
      return K(O);
    }
    function re(W) {
      function O(Q, He, ze, Ge, qe) {
        var Ye = Q[He], he = Fe(Ye);
        if (he !== "object")
          return new be("Invalid " + Ge + " `" + qe + "` of type `" + he + "` " + ("supplied to `" + ze + "`, expected `object`."));
        var Re = w({}, Q[He], W);
        for (var Be in Re) {
          var rt = W[Be];
          if (_(W, Be) && typeof rt != "function")
            return Pe(ze, Ge, qe, Be, Te(rt));
          if (!rt)
            return new be(
              "Invalid " + Ge + " `" + qe + "` key `" + Be + "` supplied to `" + ze + "`.\nBad object: " + JSON.stringify(Q[He], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(W), null, "  ")
            );
          var xe = rt(Ye, Be, ze, Ge, qe + "." + Be, h);
          if (xe)
            return xe;
        }
        return null;
      }
      return K(O);
    }
    function De(W) {
      switch (typeof W) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !W;
        case "object":
          if (Array.isArray(W))
            return W.every(De);
          if (W === null || pe(W))
            return !0;
          var O = I(W);
          if (O) {
            var Q = O.call(W), He;
            if (O !== W.entries) {
              for (; !(He = Q.next()).done; )
                if (!De(He.value))
                  return !1;
            } else
              for (; !(He = Q.next()).done; ) {
                var ze = He.value;
                if (ze && !De(ze[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ue(W, O) {
      return W === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function Fe(W) {
      var O = typeof W;
      return Array.isArray(W) ? "array" : W instanceof RegExp ? "object" : Ue(O, W) ? "symbol" : O;
    }
    function Te(W) {
      if (typeof W > "u" || W === null)
        return "" + W;
      var O = Fe(W);
      if (O === "object") {
        if (W instanceof Date)
          return "date";
        if (W instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function ge(W) {
      var O = Te(W);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function $e(W) {
      return !W.constructor || !W.constructor.name ? J : W.constructor.name;
    }
    return ye.checkPropTypes = $, ye.resetWarningCache = $.resetWarningCache, ye.PropTypes = ye, ye;
  }, Jb;
}
var eE, mC;
function ak() {
  if (mC) return eE;
  mC = 1;
  var y = /* @__PURE__ */ uE();
  function w() {
  }
  function h() {
  }
  return h.resetWarningCache = w, eE = function() {
    function _(g, pe, A, V, oe, I) {
      if (I !== y) {
        var J = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw J.name = "Invariant Violation", J;
      }
    }
    _.isRequired = _;
    function $() {
      return _;
    }
    var H = {
      array: _,
      bigint: _,
      bool: _,
      func: _,
      number: _,
      object: _,
      string: _,
      symbol: _,
      any: _,
      arrayOf: $,
      element: _,
      elementType: _,
      instanceOf: $,
      node: _,
      objectOf: $,
      oneOf: $,
      oneOfType: $,
      shape: $,
      exact: $,
      checkPropTypes: h,
      resetWarningCache: w
    };
    return H.PropTypes = H, H;
  }, eE;
}
var yC;
function Ju() {
  if (yC) return gy.exports;
  if (yC = 1, process.env.NODE_ENV !== "production") {
    var y = AC(), w = !0;
    gy.exports = /* @__PURE__ */ rk()(y.isElement, w);
  } else
    gy.exports = /* @__PURE__ */ ak()();
  return gy.exports;
}
var vv = { exports: {} }, tE, gC;
function ik() {
  if (gC) return tE;
  gC = 1;
  var y = Object.create, w = Object.defineProperty, h = Object.getOwnPropertyDescriptor, _ = Object.getOwnPropertyNames, $ = Object.getPrototypeOf, H = Object.prototype.hasOwnProperty, g = (z, Z) => {
    for (var j in Z)
      w(z, j, { get: Z[j], enumerable: !0 });
  }, pe = (z, Z, j, le) => {
    if (Z && typeof Z == "object" || typeof Z == "function")
      for (let Ce of _(Z))
        !H.call(z, Ce) && Ce !== j && w(z, Ce, { get: () => Z[Ce], enumerable: !(le = h(Z, Ce)) || le.enumerable });
    return z;
  }, A = (z, Z, j) => (j = z != null ? y($(z)) : {}, pe(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !z || !z.__esModule ? w(j, "default", { value: z, enumerable: !0 }) : j,
    z
  )), V = (z) => pe(w({}, "__esModule", { value: !0 }), z), oe = {};
  g(oe, {
    DraggableCore: () => Bt,
    default: () => ln
  }), tE = V(oe);
  var I = A(ba()), J = A(/* @__PURE__ */ Ju()), ye = A(Ry()), ke = _y();
  function be(z, Z) {
    for (let j = 0, le = z.length; j < le; j++)
      if (Z.apply(Z, [z[j], j, z])) return z[j];
  }
  function K(z) {
    return typeof z == "function" || Object.prototype.toString.call(z) === "[object Function]";
  }
  function k(z) {
    return typeof z == "number" && !isNaN(z);
  }
  function b(z) {
    return parseInt(z, 10);
  }
  function x(z, Z, j) {
    if (z[Z])
      return new Error(`Invalid prop ${Z} passed to ${j} - do not set this, set it on the child.`);
  }
  var C = ["Moz", "Webkit", "O", "ms"];
  function E(z = "transform") {
    var Z, j;
    if (typeof window > "u") return "";
    const le = (j = (Z = window.document) == null ? void 0 : Z.documentElement) == null ? void 0 : j.style;
    if (!le || z in le) return "";
    for (let Ce = 0; Ce < C.length; Ce++)
      if (D(z, C[Ce]) in le) return C[Ce];
    return "";
  }
  function D(z, Z) {
    return Z ? `${Z}${P(z)}` : z;
  }
  function P(z) {
    let Z = "", j = !0;
    for (let le = 0; le < z.length; le++)
      j ? (Z += z[le].toUpperCase(), j = !1) : z[le] === "-" ? j = !0 : Z += z[le];
    return Z;
  }
  var ce = E(), ve = "";
  function Oe(z, Z) {
    var j;
    ve || (ve = (j = be([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(Ce) {
      return K(z[Ce]);
    })) != null ? j : "");
    const le = z[ve];
    return K(le) ? !!le.call(z, Z) : !1;
  }
  function Pe(z, Z, j) {
    let le = z;
    do {
      if (Oe(le, Z)) return !0;
      if (le === j) return !1;
      le = le.parentNode;
    } while (le);
    return !1;
  }
  function ie(z, Z, j, le) {
    if (!z) return;
    const Ce = { capture: !0, ...le }, gt = j;
    z.addEventListener ? z.addEventListener(Z, gt, Ce) : z.attachEvent ? z.attachEvent("on" + Z, gt) : z["on" + Z] = gt;
  }
  function re(z, Z, j, le) {
    if (!z) return;
    const Ce = { capture: !0, ...le }, gt = j;
    z.removeEventListener ? z.removeEventListener(Z, gt, Ce) : z.detachEvent ? z.detachEvent("on" + Z, gt) : z["on" + Z] = null;
  }
  function De(z) {
    let Z = z.clientHeight;
    const j = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z += b(j.borderTopWidth), Z += b(j.borderBottomWidth), Z;
  }
  function Ue(z) {
    let Z = z.clientWidth;
    const j = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z += b(j.borderLeftWidth), Z += b(j.borderRightWidth), Z;
  }
  function Fe(z) {
    let Z = z.clientHeight;
    const j = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z -= b(j.paddingTop), Z -= b(j.paddingBottom), Z;
  }
  function Te(z) {
    let Z = z.clientWidth;
    const j = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z -= b(j.paddingLeft), Z -= b(j.paddingRight), Z;
  }
  function ge(z, Z, j) {
    const Ce = Z === Z.ownerDocument.body ? { left: 0, top: 0 } : Z.getBoundingClientRect(), gt = (z.clientX + Z.scrollLeft - Ce.left) / j, ct = (z.clientY + Z.scrollTop - Ce.top) / j;
    return { x: gt, y: ct };
  }
  function $e(z, Z) {
    const j = O(z, Z, "px");
    return { [D("transform", ce)]: j };
  }
  function W(z, Z) {
    return O(z, Z, "");
  }
  function O({ x: z, y: Z }, j, le) {
    let Ce = `translate(${z}${le},${Z}${le})`;
    if (j) {
      const gt = `${typeof j.x == "string" ? j.x : j.x + le}`, ct = `${typeof j.y == "string" ? j.y : j.y + le}`;
      Ce = `translate(${gt}, ${ct})` + Ce;
    }
    return Ce;
  }
  function Q(z, Z) {
    return z.targetTouches && be(z.targetTouches, (j) => Z === j.identifier) || z.changedTouches && be(z.changedTouches, (j) => Z === j.identifier);
  }
  function He(z) {
    if (z.targetTouches && z.targetTouches[0]) return z.targetTouches[0].identifier;
    if (z.changedTouches && z.changedTouches[0]) return z.changedTouches[0].identifier;
  }
  function ze() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Ge(z, Z) {
    if (!z) return;
    let j = z.getElementById("react-draggable-style-el");
    if (!j) {
      j = z.createElement("style"), j.type = "text/css", j.id = "react-draggable-style-el";
      const le = Z ?? ze();
      le && j.setAttribute("nonce", le), j.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, j.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, z.getElementsByTagName("head")[0].appendChild(j);
    }
    z.body && he(z.body, "react-draggable-transparent-selection");
  }
  function qe(z) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Ye(z);
    }) : Ye(z);
  }
  function Ye(z) {
    if (z)
      try {
        z.body && Re(z.body, "react-draggable-transparent-selection");
        const Z = z.selection;
        if (Z)
          Z.empty();
        else {
          const j = (z.defaultView || window).getSelection();
          j && j.type !== "Caret" && j.removeAllRanges();
        }
      } catch {
      }
  }
  function he(z, Z) {
    z.classList ? z.classList.add(Z) : z.className.match(new RegExp(`(?:^|\\s)${Z}(?!\\S)`)) || (z.className += ` ${Z}`);
  }
  function Re(z, Z) {
    z.classList ? z.classList.remove(Z) : z.className = z.className.replace(new RegExp(`(?:^|\\s)${Z}(?!\\S)`, "g"), "");
  }
  function Be(z, Z, j) {
    if (!z.props.bounds) return [Z, j];
    let { bounds: le } = z.props;
    le = typeof le == "string" ? le : B(le);
    const Ce = F(z);
    if (typeof le == "string") {
      const { ownerDocument: gt } = Ce, ct = gt.defaultView;
      if (!ct)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Lt;
      if (le === "parent" ? Lt = Ce.parentNode : Lt = Ce.getRootNode().querySelector(le), !(Lt instanceof ct.HTMLElement))
        throw new Error('Bounds selector "' + le + '" could not find an element.');
      const Yt = Lt, Dn = ct.getComputedStyle(Ce), an = ct.getComputedStyle(Yt);
      le = {
        left: -Ce.offsetLeft + b(an.paddingLeft) + b(Dn.marginLeft),
        top: -Ce.offsetTop + b(an.paddingTop) + b(Dn.marginTop),
        right: Te(Yt) - Ue(Ce) - Ce.offsetLeft + b(an.paddingRight) - b(Dn.marginRight),
        bottom: Fe(Yt) - De(Ce) - Ce.offsetTop + b(an.paddingBottom) - b(Dn.marginBottom)
      };
    }
    return k(le.right) && (Z = Math.min(Z, le.right)), k(le.bottom) && (j = Math.min(j, le.bottom)), k(le.left) && (Z = Math.max(Z, le.left)), k(le.top) && (j = Math.max(j, le.top)), [Z, j];
  }
  function rt(z, Z, j) {
    const le = Math.round(Z / z[0]) * z[0], Ce = Math.round(j / z[1]) * z[1];
    return [le, Ce];
  }
  function xe(z) {
    return z.props.axis === "both" || z.props.axis === "x";
  }
  function ht(z) {
    return z.props.axis === "both" || z.props.axis === "y";
  }
  function zt(z, Z, j) {
    const le = typeof Z == "number" ? Q(z, Z) : null;
    if (typeof Z == "number" && !le) return null;
    const Ce = F(j), gt = j.props.offsetParent || Ce.offsetParent || Ce.ownerDocument.body;
    return ge(le || z, gt, j.props.scale);
  }
  function $t(z, Z, j) {
    const le = !k(z.lastX), Ce = F(z);
    return le ? {
      node: Ce,
      deltaX: 0,
      deltaY: 0,
      lastX: Z,
      lastY: j,
      x: Z,
      y: j
    } : {
      node: Ce,
      deltaX: Z - z.lastX,
      deltaY: j - z.lastY,
      lastX: z.lastX,
      lastY: z.lastY,
      x: Z,
      y: j
    };
  }
  function Mt(z, Z) {
    const j = z.props.scale;
    return {
      node: Z.node,
      x: z.state.x + Z.deltaX / j,
      y: z.state.y + Z.deltaY / j,
      deltaX: Z.deltaX / j,
      deltaY: Z.deltaY / j,
      lastX: z.state.x,
      lastY: z.state.y
    };
  }
  function B(z) {
    return {
      left: z.left,
      top: z.top,
      right: z.right,
      bottom: z.bottom
    };
  }
  function F(z) {
    const Z = z.findDOMNode();
    if (!Z)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return Z;
  }
  var X = A(ba()), me = A(/* @__PURE__ */ Ju()), Je = A(Ry()), et = typeof process < "u" && process.env.DRAGGABLE_DEBUG ? console.log.bind(console) : function() {
  }, Qe = et, _t = {
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
  }, Rt = _t.mouse, Bt = class extends X.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (z) => {
        if (this.props.onMouseDown(z), !this.props.allowAnyClick && (typeof z.button == "number" && z.button !== 0 || z.ctrlKey)) return !1;
        const Z = this.findDOMNode();
        if (!Z || !Z.ownerDocument || !Z.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: j } = Z;
        if (this.props.disabled || !(z.target instanceof j.defaultView.Node) || this.props.handle && !Pe(z.target, this.props.handle, Z) || this.props.cancel && Pe(z.target, this.props.cancel, Z))
          return;
        z.type === "touchstart" && !this.props.allowMobileScroll && z.preventDefault();
        const le = He(z);
        this.touchIdentifier = le;
        const Ce = zt(z, le, this);
        if (Ce == null) return;
        const { x: gt, y: ct } = Ce, Lt = $t(this, gt, ct);
        Qe("DraggableCore: handleDragStart: %j", Lt), Qe("calling", this.props.onStart), !(this.props.onStart(z, Lt) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Ge(j, this.props.nonce), this.dragging = !0, this.lastX = gt, this.lastY = ct, ie(j, Rt.move, this.handleDrag), ie(j, Rt.stop, this.handleDragStop));
      }, this.handleDrag = (z) => {
        const Z = zt(z, this.touchIdentifier, this);
        if (Z == null) return;
        let { x: j, y: le } = Z;
        if (Array.isArray(this.props.grid)) {
          let ct = j - this.lastX, Lt = le - this.lastY;
          if ([ct, Lt] = rt(this.props.grid, ct, Lt), !ct && !Lt) return;
          j = this.lastX + ct, le = this.lastY + Lt;
        }
        const Ce = $t(this, j, le);
        if (Qe("DraggableCore: handleDrag: %j", Ce), this.props.onDrag(z, Ce) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const ct = document.createEvent("MouseEvents");
            ct.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(ct);
          }
          return;
        }
        this.lastX = j, this.lastY = le;
      }, this.handleDragStop = (z) => {
        if (!this.dragging) return;
        const Z = zt(z, this.touchIdentifier, this);
        if (Z == null) return;
        let { x: j, y: le } = Z;
        if (Array.isArray(this.props.grid)) {
          let Lt = j - this.lastX || 0, Yt = le - this.lastY || 0;
          [Lt, Yt] = rt(this.props.grid, Lt, Yt), j = this.lastX + Lt, le = this.lastY + Yt;
        }
        const Ce = $t(this, j, le);
        if (this.props.onStop(z, Ce) === !1 || this.mounted === !1) return !1;
        const ct = this.findDOMNode();
        ct && this.props.enableUserSelectHack && qe(ct.ownerDocument), Qe("DraggableCore: handleDragStop: %j", Ce), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, ct && (Qe("DraggableCore: Removing handlers"), re(ct.ownerDocument, Rt.move, this.handleDrag), re(ct.ownerDocument, Rt.stop, this.handleDragStop));
      }, this.onMouseDown = (z) => (Rt = _t.mouse, this.handleDragStart(z)), this.onMouseUp = (z) => (Rt = _t.mouse, this.handleDragStop(z)), this.onTouchStart = (z) => (Rt = _t.touch, this.handleDragStart(z)), this.onTouchEnd = (z) => (Rt = _t.touch, this.handleDragStop(z));
    }
    componentDidMount() {
      this.mounted = !0;
      const z = this.findDOMNode();
      z && ie(z, _t.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const z = this.findDOMNode();
      if (z) {
        const { ownerDocument: Z } = z;
        re(Z, _t.mouse.move, this.handleDrag), re(Z, _t.touch.move, this.handleDrag), re(Z, _t.mouse.stop, this.handleDragStop), re(Z, _t.touch.stop, this.handleDragStop), re(z, _t.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && qe(Z);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var z;
      if ((z = this.props) != null && z.nodeRef)
        return this.props.nodeRef.current;
      const Z = Je.default;
      return typeof Z.findDOMNode == "function" ? Z.findDOMNode(this) : (Qe(
        "react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef"
      ), null);
    }
    render() {
      return X.cloneElement(X.Children.only(this.props.children), {
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
  Bt.displayName = "DraggableCore", Bt.propTypes = {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: me.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: me.default.bool,
    children: me.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: me.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: me.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(z, Z) {
      if (z[Z] && z[Z].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: me.default.arrayOf(me.default.number),
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
    handle: me.default.string,
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
    cancel: me.default.string,
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
    nodeRef: me.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: me.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: me.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: me.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: me.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: me.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: me.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: x,
    style: x,
    transform: x
  }, Bt.defaultProps = {
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
  var ln = class extends I.Component {
    constructor(z) {
      super(z), this.onDragStart = (Z, j) => {
        if (Qe("Draggable: onDragStart: %j", j), this.props.onStart(Z, Mt(this, j)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (Z, j) => {
        if (!this.state.dragging) return !1;
        Qe("Draggable: onDrag: %j", j);
        const le = Mt(this, j), Ce = {
          x: le.x,
          y: le.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: ct, y: Lt } = Ce;
          Ce.x += this.state.slackX, Ce.y += this.state.slackY;
          const [Yt, Dn] = Be(this, Ce.x, Ce.y);
          Ce.x = Yt, Ce.y = Dn, Ce.slackX = this.state.slackX + (ct - Ce.x), Ce.slackY = this.state.slackY + (Lt - Ce.y), le.x = Ce.x, le.y = Ce.y, le.deltaX = Ce.x - this.state.x, le.deltaY = Ce.y - this.state.y;
        }
        if (this.props.onDrag(Z, le) === !1) return !1;
        this.setState(Ce);
      }, this.onDragStop = (Z, j) => {
        if (!this.state.dragging || this.props.onStop(Z, Mt(this, j)) === !1) return !1;
        Qe("Draggable: onDragStop: %j", j);
        const Ce = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: ct, y: Lt } = this.props.position;
          Ce.x = ct, Ce.y = Lt;
        }
        this.setState(Ce);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: z.position ? z.position.x : z.defaultPosition.x,
        y: z.position ? z.position.y : z.defaultPosition.y,
        prevPropsPosition: { ...z.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, z.position && !(z.onDrag || z.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: z }, { prevPropsPosition: Z }) {
      return z && (!Z || z.x !== Z.x || z.y !== Z.y) ? (Qe("Draggable: getDerivedStateFromProps %j", { position: z, prevPropsPosition: Z }), {
        x: z.x,
        y: z.y,
        prevPropsPosition: { ...z }
      }) : null;
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
      var z;
      if ((z = this.props) != null && z.nodeRef)
        return this.props.nodeRef.current;
      const Z = ye.default;
      return typeof Z.findDOMNode == "function" ? Z.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: z,
        bounds: Z,
        children: j,
        defaultPosition: le,
        defaultClassName: Ce,
        defaultClassNameDragging: gt,
        defaultClassNameDragged: ct,
        position: Lt,
        positionOffset: Yt,
        scale: Dn,
        ...an
      } = this.props;
      let un = {}, mn = null;
      const lr = !!!Lt || this.state.dragging, jr = Lt || le, Na = {
        // Set left if horizontal drag is enabled
        x: xe(this) && lr ? this.state.x : jr.x,
        // Set top if vertical drag is enabled
        y: ht(this) && lr ? this.state.y : jr.y
      };
      this.state.isElementSVG ? mn = W(Na, Yt) : un = $e(Na, Yt);
      const ti = I.Children.only(j), qi = (0, ke.clsx)(ti.props.className || "", Ce, {
        [gt]: this.state.dragging,
        [ct]: this.state.dragged
      });
      return /* @__PURE__ */ I.createElement(Bt, { ...an, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, I.cloneElement(ti, {
        className: qi,
        style: { ...ti.props.style, ...un },
        transform: mn
      }));
    }
  };
  return ln.displayName = "Draggable", ln.propTypes = {
    // Accepts all props <DraggableCore> accepts.
    ...Bt.propTypes,
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
    axis: J.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: J.default.oneOfType([
      J.default.shape({
        left: J.default.number,
        right: J.default.number,
        top: J.default.number,
        bottom: J.default.number
      }),
      J.default.string,
      J.default.oneOf([!1])
    ]),
    defaultClassName: J.default.string,
    defaultClassNameDragging: J.default.string,
    defaultClassNameDragged: J.default.string,
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
    defaultPosition: J.default.shape({
      x: J.default.number,
      y: J.default.number
    }),
    positionOffset: J.default.shape({
      x: J.default.oneOfType([J.default.number, J.default.string]),
      y: J.default.oneOfType([J.default.number, J.default.string])
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
    position: J.default.shape({
      x: J.default.number,
      y: J.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: x,
    style: x,
    transform: x
  }, ln.defaultProps = {
    ...Bt.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, tE;
}
var SC;
function sE() {
  if (SC) return vv.exports;
  SC = 1;
  const y = ik(), w = y.DraggableCore, h = y.default || y;
  return vv.exports = h, vv.exports.default = h, vv.exports.DraggableCore = w, vv.exports;
}
var hv = { exports: {} }, mv = {}, by = {}, bC;
function ok() {
  if (bC) return by;
  bC = 1, by.__esModule = !0, by.cloneElement = pe;
  var y = w(ba());
  function w(A) {
    return A && A.__esModule ? A : { default: A };
  }
  function h(A, V) {
    var oe = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(A);
      V && (I = I.filter(function(J) {
        return Object.getOwnPropertyDescriptor(A, J).enumerable;
      })), oe.push.apply(oe, I);
    }
    return oe;
  }
  function _(A) {
    for (var V = 1; V < arguments.length; V++) {
      var oe = arguments[V] != null ? arguments[V] : {};
      V % 2 ? h(Object(oe), !0).forEach(function(I) {
        $(A, I, oe[I]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(oe)) : h(Object(oe)).forEach(function(I) {
        Object.defineProperty(A, I, Object.getOwnPropertyDescriptor(oe, I));
      });
    }
    return A;
  }
  function $(A, V, oe) {
    return V = H(V), V in A ? Object.defineProperty(A, V, { value: oe, enumerable: !0, configurable: !0, writable: !0 }) : A[V] = oe, A;
  }
  function H(A) {
    var V = g(A, "string");
    return typeof V == "symbol" ? V : String(V);
  }
  function g(A, V) {
    if (typeof A != "object" || A === null) return A;
    var oe = A[Symbol.toPrimitive];
    if (oe !== void 0) {
      var I = oe.call(A, V);
      if (typeof I != "object") return I;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (V === "string" ? String : Number)(A);
  }
  function pe(A, V) {
    return V.style && A.props.style && (V.style = _(_({}, A.props.style), V.style)), V.className && A.props.className && (V.className = A.props.className + " " + V.className), /* @__PURE__ */ y.default.cloneElement(A, V);
  }
  return by;
}
var yv = {}, EC;
function UC() {
  if (EC) return yv;
  EC = 1, yv.__esModule = !0, yv.resizableProps = void 0;
  var y = w(/* @__PURE__ */ Ju());
  sE();
  function w(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var h = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: y.default.oneOf(["both", "x", "y", "none"]),
    className: y.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: y.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: y.default.shape({
      allowAnyClick: y.default.bool,
      cancel: y.default.string,
      children: y.default.node,
      disabled: y.default.bool,
      enableUserSelectHack: y.default.bool,
      offsetParent: y.default.node,
      grid: y.default.arrayOf(y.default.number),
      handle: y.default.string,
      nodeRef: y.default.object,
      onStart: y.default.func,
      onDrag: y.default.func,
      onStop: y.default.func,
      onMouseDown: y.default.func,
      scale: y.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var $ = arguments.length, H = new Array($), g = 0; g < $; g++)
        H[g] = arguments[g];
      var pe = H[0];
      if (pe.axis === "both" || pe.axis === "y") {
        var A;
        return (A = y.default.number).isRequired.apply(A, H);
      }
      return y.default.number.apply(y.default, H);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: y.default.oneOfType([y.default.node, y.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: y.default.arrayOf(y.default.number),
    lockAspectRatio: y.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: y.default.arrayOf(y.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: y.default.arrayOf(y.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: y.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: y.default.func,
    /*
    * Called on resize event
    * */
    onResize: y.default.func,
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
    resizeHandles: y.default.arrayOf(y.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: y.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var $ = arguments.length, H = new Array($), g = 0; g < $; g++)
        H[g] = arguments[g];
      var pe = H[0];
      if (pe.axis === "both" || pe.axis === "x") {
        var A;
        return (A = y.default.number).isRequired.apply(A, H);
      }
      return y.default.number.apply(y.default, H);
    }
  };
  return yv.resizableProps = h, yv;
}
var wC;
function HC() {
  if (wC) return mv;
  wC = 1, mv.__esModule = !0, mv.default = void 0;
  var y = g(ba()), w = sE(), h = ok(), _ = UC(), $ = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function H(k) {
    if (typeof WeakMap != "function") return null;
    var b = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (H = function(E) {
      return E ? x : b;
    })(k);
  }
  function g(k, b) {
    if (k && k.__esModule)
      return k;
    if (k === null || typeof k != "object" && typeof k != "function")
      return { default: k };
    var x = H(b);
    if (x && x.has(k))
      return x.get(k);
    var C = {}, E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in k)
      if (D !== "default" && Object.prototype.hasOwnProperty.call(k, D)) {
        var P = E ? Object.getOwnPropertyDescriptor(k, D) : null;
        P && (P.get || P.set) ? Object.defineProperty(C, D, P) : C[D] = k[D];
      }
    return C.default = k, x && x.set(k, C), C;
  }
  function pe() {
    return pe = Object.assign ? Object.assign.bind() : function(k) {
      for (var b = 1; b < arguments.length; b++) {
        var x = arguments[b];
        for (var C in x)
          Object.prototype.hasOwnProperty.call(x, C) && (k[C] = x[C]);
      }
      return k;
    }, pe.apply(this, arguments);
  }
  function A(k, b) {
    if (k == null) return {};
    var x = {}, C = Object.keys(k), E, D;
    for (D = 0; D < C.length; D++)
      E = C[D], !(b.indexOf(E) >= 0) && (x[E] = k[E]);
    return x;
  }
  function V(k, b) {
    var x = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(k);
      b && (C = C.filter(function(E) {
        return Object.getOwnPropertyDescriptor(k, E).enumerable;
      })), x.push.apply(x, C);
    }
    return x;
  }
  function oe(k) {
    for (var b = 1; b < arguments.length; b++) {
      var x = arguments[b] != null ? arguments[b] : {};
      b % 2 ? V(Object(x), !0).forEach(function(C) {
        I(k, C, x[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(x)) : V(Object(x)).forEach(function(C) {
        Object.defineProperty(k, C, Object.getOwnPropertyDescriptor(x, C));
      });
    }
    return k;
  }
  function I(k, b, x) {
    return b = J(b), b in k ? Object.defineProperty(k, b, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : k[b] = x, k;
  }
  function J(k) {
    var b = ye(k, "string");
    return typeof b == "symbol" ? b : String(b);
  }
  function ye(k, b) {
    if (typeof k != "object" || k === null) return k;
    var x = k[Symbol.toPrimitive];
    if (x !== void 0) {
      var C = x.call(k, b);
      if (typeof C != "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(k);
  }
  function ke(k, b) {
    k.prototype = Object.create(b.prototype), k.prototype.constructor = k, be(k, b);
  }
  function be(k, b) {
    return be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, E) {
      return C.__proto__ = E, C;
    }, be(k, b);
  }
  var K = /* @__PURE__ */ function(k) {
    ke(b, k);
    function b() {
      for (var C, E = arguments.length, D = new Array(E), P = 0; P < E; P++)
        D[P] = arguments[P];
      return C = k.call.apply(k, [this].concat(D)) || this, C.handleRefs = {}, C.lastHandleRect = null, C.slack = null, C;
    }
    var x = b.prototype;
    return x.componentWillUnmount = function() {
      this.resetData();
    }, x.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, x.runConstraints = function(E, D) {
      var P = this.props, ce = P.minConstraints, ve = P.maxConstraints, Oe = P.lockAspectRatio;
      if (!ce && !ve && !Oe) return [E, D];
      if (Oe) {
        var Pe = this.props.width / this.props.height, ie = E - this.props.width, re = D - this.props.height;
        Math.abs(ie) > Math.abs(re * Pe) ? D = E / Pe : E = D * Pe;
      }
      var De = E, Ue = D, Fe = this.slack || [0, 0], Te = Fe[0], ge = Fe[1];
      return E += Te, D += ge, ce && (E = Math.max(ce[0], E), D = Math.max(ce[1], D)), ve && (E = Math.min(ve[0], E), D = Math.min(ve[1], D)), this.slack = [Te + (De - E), ge + (Ue - D)], [E, D];
    }, x.resizeHandler = function(E, D) {
      var P = this;
      return function(ce, ve) {
        var Oe = ve.node, Pe = ve.deltaX, ie = ve.deltaY;
        E === "onResizeStart" && P.resetData();
        var re = (P.props.axis === "both" || P.props.axis === "x") && D !== "n" && D !== "s", De = (P.props.axis === "both" || P.props.axis === "y") && D !== "e" && D !== "w";
        if (!(!re && !De)) {
          var Ue = D[0], Fe = D[D.length - 1], Te = Oe.getBoundingClientRect();
          if (P.lastHandleRect != null) {
            if (Fe === "w") {
              var ge = Te.left - P.lastHandleRect.left;
              Pe += ge;
            }
            if (Ue === "n") {
              var $e = Te.top - P.lastHandleRect.top;
              ie += $e;
            }
          }
          P.lastHandleRect = Te, Fe === "w" && (Pe = -Pe), Ue === "n" && (ie = -ie);
          var W = P.props.width + (re ? Pe / P.props.transformScale : 0), O = P.props.height + (De ? ie / P.props.transformScale : 0), Q = P.runConstraints(W, O);
          W = Q[0], O = Q[1];
          var He = W !== P.props.width || O !== P.props.height, ze = typeof P.props[E] == "function" ? P.props[E] : null, Ge = E === "onResize" && !He;
          ze && !Ge && (ce.persist == null || ce.persist(), ze(ce, {
            node: Oe,
            size: {
              width: W,
              height: O
            },
            handle: D
          })), E === "onResizeStop" && P.resetData();
        }
      };
    }, x.renderResizeHandle = function(E, D) {
      var P = this.props.handle;
      if (!P)
        return /* @__PURE__ */ y.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + E,
          ref: D
        });
      if (typeof P == "function")
        return P(E, D);
      var ce = typeof P.type == "string", ve = oe({
        ref: D
      }, ce ? {} : {
        handleAxis: E
      });
      return /* @__PURE__ */ y.cloneElement(P, ve);
    }, x.render = function() {
      var E = this, D = this.props, P = D.children, ce = D.className, ve = D.draggableOpts;
      D.width, D.height, D.handle, D.handleSize, D.lockAspectRatio, D.axis, D.minConstraints, D.maxConstraints, D.onResize, D.onResizeStop, D.onResizeStart;
      var Oe = D.resizeHandles;
      D.transformScale;
      var Pe = A(D, $);
      return (0, h.cloneElement)(P, oe(oe({}, Pe), {}, {
        className: (ce ? ce + " " : "") + "react-resizable",
        children: [].concat(P.props.children, Oe.map(function(ie) {
          var re, De = (re = E.handleRefs[ie]) != null ? re : E.handleRefs[ie] = /* @__PURE__ */ y.createRef();
          return /* @__PURE__ */ y.createElement(w.DraggableCore, pe({}, ve, {
            nodeRef: De,
            key: "resizableHandle-" + ie,
            onStop: E.resizeHandler("onResizeStop", ie),
            onStart: E.resizeHandler("onResizeStart", ie),
            onDrag: E.resizeHandler("onResize", ie)
          }), E.renderResizeHandle(ie, De));
        }))
      }));
    }, b;
  }(y.Component);
  return mv.default = K, K.propTypes = _.resizableProps, K.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, mv;
}
var gv = {}, RC;
function lk() {
  if (RC) return gv;
  RC = 1, gv.__esModule = !0, gv.default = void 0;
  var y = pe(ba()), w = H(/* @__PURE__ */ Ju()), h = H(HC()), _ = UC(), $ = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function H(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function g(b) {
    if (typeof WeakMap != "function") return null;
    var x = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (g = function(D) {
      return D ? C : x;
    })(b);
  }
  function pe(b, x) {
    if (b && b.__esModule)
      return b;
    if (b === null || typeof b != "object" && typeof b != "function")
      return { default: b };
    var C = g(x);
    if (C && C.has(b))
      return C.get(b);
    var E = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in b)
      if (P !== "default" && Object.prototype.hasOwnProperty.call(b, P)) {
        var ce = D ? Object.getOwnPropertyDescriptor(b, P) : null;
        ce && (ce.get || ce.set) ? Object.defineProperty(E, P, ce) : E[P] = b[P];
      }
    return E.default = b, C && C.set(b, E), E;
  }
  function A() {
    return A = Object.assign ? Object.assign.bind() : function(b) {
      for (var x = 1; x < arguments.length; x++) {
        var C = arguments[x];
        for (var E in C)
          Object.prototype.hasOwnProperty.call(C, E) && (b[E] = C[E]);
      }
      return b;
    }, A.apply(this, arguments);
  }
  function V(b, x) {
    var C = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var E = Object.getOwnPropertySymbols(b);
      x && (E = E.filter(function(D) {
        return Object.getOwnPropertyDescriptor(b, D).enumerable;
      })), C.push.apply(C, E);
    }
    return C;
  }
  function oe(b) {
    for (var x = 1; x < arguments.length; x++) {
      var C = arguments[x] != null ? arguments[x] : {};
      x % 2 ? V(Object(C), !0).forEach(function(E) {
        I(b, E, C[E]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(C)) : V(Object(C)).forEach(function(E) {
        Object.defineProperty(b, E, Object.getOwnPropertyDescriptor(C, E));
      });
    }
    return b;
  }
  function I(b, x, C) {
    return x = J(x), x in b ? Object.defineProperty(b, x, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : b[x] = C, b;
  }
  function J(b) {
    var x = ye(b, "string");
    return typeof x == "symbol" ? x : String(x);
  }
  function ye(b, x) {
    if (typeof b != "object" || b === null) return b;
    var C = b[Symbol.toPrimitive];
    if (C !== void 0) {
      var E = C.call(b, x);
      if (typeof E != "object") return E;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(b);
  }
  function ke(b, x) {
    if (b == null) return {};
    var C = {}, E = Object.keys(b), D, P;
    for (P = 0; P < E.length; P++)
      D = E[P], !(x.indexOf(D) >= 0) && (C[D] = b[D]);
    return C;
  }
  function be(b, x) {
    b.prototype = Object.create(x.prototype), b.prototype.constructor = b, K(b, x);
  }
  function K(b, x) {
    return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, D) {
      return E.__proto__ = D, E;
    }, K(b, x);
  }
  var k = /* @__PURE__ */ function(b) {
    be(x, b);
    function x() {
      for (var E, D = arguments.length, P = new Array(D), ce = 0; ce < D; ce++)
        P[ce] = arguments[ce];
      return E = b.call.apply(b, [this].concat(P)) || this, E.state = {
        width: E.props.width,
        height: E.props.height,
        propsWidth: E.props.width,
        propsHeight: E.props.height
      }, E.onResize = function(ve, Oe) {
        var Pe = Oe.size;
        E.props.onResize ? (ve.persist == null || ve.persist(), E.setState(Pe, function() {
          return E.props.onResize && E.props.onResize(ve, Oe);
        })) : E.setState(Pe);
      }, E;
    }
    x.getDerivedStateFromProps = function(D, P) {
      return P.propsWidth !== D.width || P.propsHeight !== D.height ? {
        width: D.width,
        height: D.height,
        propsWidth: D.width,
        propsHeight: D.height
      } : null;
    };
    var C = x.prototype;
    return C.render = function() {
      var D = this.props, P = D.handle, ce = D.handleSize;
      D.onResize;
      var ve = D.onResizeStart, Oe = D.onResizeStop, Pe = D.draggableOpts, ie = D.minConstraints, re = D.maxConstraints, De = D.lockAspectRatio, Ue = D.axis;
      D.width, D.height;
      var Fe = D.resizeHandles, Te = D.style, ge = D.transformScale, $e = ke(D, $);
      return /* @__PURE__ */ y.createElement(h.default, {
        axis: Ue,
        draggableOpts: Pe,
        handle: P,
        handleSize: ce,
        height: this.state.height,
        lockAspectRatio: De,
        maxConstraints: re,
        minConstraints: ie,
        onResizeStart: ve,
        onResize: this.onResize,
        onResizeStop: Oe,
        resizeHandles: Fe,
        transformScale: ge,
        width: this.state.width
      }, /* @__PURE__ */ y.createElement("div", A({}, $e, {
        style: oe(oe({}, Te), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, x;
  }(y.Component);
  return gv.default = k, k.propTypes = oe(oe({}, _.resizableProps), {}, {
    children: w.default.element
  }), gv;
}
var CC;
function uk() {
  return CC || (CC = 1, hv.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, hv.exports.Resizable = HC().default, hv.exports.ResizableBox = lk().default), hv.exports;
}
var eu = {}, xC;
function FC() {
  if (xC) return eu;
  xC = 1, Object.defineProperty(eu, "__esModule", {
    value: !0
  }), eu.resizeHandleType = eu.resizeHandleAxesType = eu.default = void 0;
  var y = h(/* @__PURE__ */ Ju()), w = h(ba());
  function h(H) {
    return H && H.__esModule ? H : { default: H };
  }
  const _ = eu.resizeHandleAxesType = y.default.arrayOf(y.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), $ = eu.resizeHandleType = y.default.oneOfType([y.default.node, y.default.func]);
  return eu.default = {
    //
    // Basic props
    //
    className: y.default.string,
    style: y.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: y.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: y.default.bool,
    // # of cols.
    cols: y.default.number,
    // A selector that will not be draggable.
    draggableCancel: y.default.string,
    // A selector for the draggable handler
    draggableHandle: y.default.string,
    // Deprecated
    verticalCompact: function(H) {
      H.verticalCompact === !1 && process.env.NODE_ENV !== "production" && console.warn(
        // eslint-disable-line no-console
        '`verticalCompact` on <ReactGridLayout> is deprecated and will be removed soon. Use `compactType`: "horizontal" | "vertical" | null.'
      );
    },
    // Choose vertical or hotizontal compaction
    compactType: y.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(H) {
      var g = H.layout;
      g !== void 0 && ad().validateLayout(g, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: y.default.arrayOf(y.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: y.default.arrayOf(y.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: y.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: y.default.number,
    //
    // Flags
    //
    isBounded: y.default.bool,
    isDraggable: y.default.bool,
    isResizable: y.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: y.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: y.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: y.default.bool,
    // parent layout transform scale
    transformScale: y.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: y.default.bool,
    // Resize handle options
    resizeHandles: _,
    resizeHandle: $,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: y.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: y.default.func,
    // Calls on each drag movement.
    onDrag: y.default.func,
    // Calls when drag is complete.
    onDragStop: y.default.func,
    //Calls when resize starts.
    onResizeStart: y.default.func,
    // Calls when resize movement happens.
    onResize: y.default.func,
    // Calls when resize is complete.
    onResizeStop: y.default.func,
    // Calls when some element is dropped.
    onDrop: y.default.func,
    //
    // Other validations
    //
    droppingItem: y.default.shape({
      i: y.default.string.isRequired,
      w: y.default.number.isRequired,
      h: y.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(H, g) {
      const pe = H[g], A = {};
      w.default.Children.forEach(pe, function(V) {
        if ((V == null ? void 0 : V.key) != null) {
          if (A[V.key])
            throw new Error('Duplicate child key "' + V.key + '" found! This will cause problems in ReactGridLayout.');
          A[V.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: y.default.any
  }, eu;
}
var TC;
function sk() {
  if (TC) return pv;
  TC = 1, Object.defineProperty(pv, "__esModule", {
    value: !0
  }), pv.default = void 0;
  var y = V(ba()), w = Ry(), h = V(/* @__PURE__ */ Ju()), _ = sE(), $ = uk(), H = ad(), g = lE(), pe = FC(), A = V(_y());
  function V(K) {
    return K && K.__esModule ? K : { default: K };
  }
  function oe(K, k) {
    var b = Object.keys(K);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(K);
      k && (x = x.filter(function(C) {
        return Object.getOwnPropertyDescriptor(K, C).enumerable;
      })), b.push.apply(b, x);
    }
    return b;
  }
  function I(K) {
    for (var k = 1; k < arguments.length; k++) {
      var b = arguments[k] != null ? arguments[k] : {};
      k % 2 ? oe(Object(b), !0).forEach(function(x) {
        J(K, x, b[x]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(K, Object.getOwnPropertyDescriptors(b)) : oe(Object(b)).forEach(function(x) {
        Object.defineProperty(K, x, Object.getOwnPropertyDescriptor(b, x));
      });
    }
    return K;
  }
  function J(K, k, b) {
    return (k = ye(k)) in K ? Object.defineProperty(K, k, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : K[k] = b, K;
  }
  function ye(K) {
    var k = ke(K, "string");
    return typeof k == "symbol" ? k : k + "";
  }
  function ke(K, k) {
    if (typeof K != "object" || !K) return K;
    var b = K[Symbol.toPrimitive];
    if (b !== void 0) {
      var x = b.call(K, k);
      if (typeof x != "object") return x;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (k === "string" ? String : Number)(K);
  }
  let be = class extends y.default.Component {
    constructor() {
      super(...arguments), J(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), J(this, "elementRef", /* @__PURE__ */ y.default.createRef()), J(this, "onDragStart", (k, b) => {
        let {
          node: x
        } = b;
        const {
          onDragStart: C,
          transformScale: E
        } = this.props;
        if (!C) return;
        const D = {
          top: 0,
          left: 0
        }, {
          offsetParent: P
        } = x;
        if (!P) return;
        const ce = P.getBoundingClientRect(), ve = x.getBoundingClientRect(), Oe = ve.left / E, Pe = ce.left / E, ie = ve.top / E, re = ce.top / E;
        D.left = Oe - Pe + P.scrollLeft, D.top = ie - re + P.scrollTop, this.setState({
          dragging: D
        });
        const {
          x: De,
          y: Ue
        } = (0, g.calcXY)(this.getPositionParams(), D.top, D.left, this.props.w, this.props.h);
        return C.call(this, this.props.i, De, Ue, {
          e: k,
          node: x,
          newPosition: D
        });
      }), J(this, "onDrag", (k, b, x) => {
        let {
          node: C,
          deltaX: E,
          deltaY: D
        } = b;
        const {
          onDrag: P
        } = this.props;
        if (!P) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let ce = this.state.dragging.top + D, ve = this.state.dragging.left + E;
        const {
          isBounded: Oe,
          i: Pe,
          w: ie,
          h: re,
          containerWidth: De
        } = this.props, Ue = this.getPositionParams();
        if (Oe) {
          const {
            offsetParent: $e
          } = C;
          if ($e) {
            const {
              margin: W,
              rowHeight: O
            } = this.props, Q = $e.clientHeight - (0, g.calcGridItemWHPx)(re, O, W[1]);
            ce = (0, g.clamp)(ce, 0, Q);
            const He = (0, g.calcGridColWidth)(Ue), ze = De - (0, g.calcGridItemWHPx)(ie, He, W[0]);
            ve = (0, g.clamp)(ve, 0, ze);
          }
        }
        const Fe = {
          top: ce,
          left: ve
        };
        x ? this.setState({
          dragging: Fe
        }) : (0, w.flushSync)(() => {
          this.setState({
            dragging: Fe
          });
        });
        const {
          x: Te,
          y: ge
        } = (0, g.calcXY)(Ue, ce, ve, ie, re);
        return P.call(this, Pe, Te, ge, {
          e: k,
          node: C,
          newPosition: Fe
        });
      }), J(this, "onDragStop", (k, b) => {
        let {
          node: x
        } = b;
        const {
          onDragStop: C
        } = this.props;
        if (!C) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: E,
          h: D,
          i: P
        } = this.props, {
          left: ce,
          top: ve
        } = this.state.dragging, Oe = {
          top: ve,
          left: ce
        };
        this.setState({
          dragging: null
        });
        const {
          x: Pe,
          y: ie
        } = (0, g.calcXY)(this.getPositionParams(), ve, ce, E, D);
        return C.call(this, P, Pe, ie, {
          e: k,
          node: x,
          newPosition: Oe
        });
      }), J(this, "onResizeStop", (k, b, x) => this.onResizeHandler(k, b, x, "onResizeStop")), J(this, "onResizeStart", (k, b, x) => this.onResizeHandler(k, b, x, "onResizeStart")), J(this, "onResize", (k, b, x) => this.onResizeHandler(k, b, x, "onResize"));
    }
    shouldComponentUpdate(k, b) {
      if (this.props.children !== k.children || this.props.droppingPosition !== k.droppingPosition) return !0;
      const x = (0, g.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), C = (0, g.calcGridItemPosition)(this.getPositionParams(k), k.x, k.y, k.w, k.h, b);
      return !(0, H.fastPositionEqual)(x, C) || this.props.useCSSTransforms !== k.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(k) {
      this.moveDroppingItem(k);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(k) {
      const {
        droppingPosition: b
      } = this.props;
      if (!b) return;
      const x = this.elementRef.current;
      if (!x) return;
      const C = k.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: E
      } = this.state, D = E && b.left !== C.left || b.top !== C.top;
      if (!E)
        this.onDragStart(b.e, {
          node: x,
          deltaX: b.left,
          deltaY: b.top
        });
      else if (D) {
        const P = b.left - E.left, ce = b.top - E.top;
        this.onDrag(
          b.e,
          {
            node: x,
            deltaX: P,
            deltaY: ce
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: k.cols,
        containerPadding: k.containerPadding,
        containerWidth: k.containerWidth,
        margin: k.margin,
        maxRows: k.maxRows,
        rowHeight: k.rowHeight
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
    createStyle(k) {
      const {
        usePercentages: b,
        containerWidth: x,
        useCSSTransforms: C
      } = this.props;
      let E;
      return C ? E = (0, H.setTransform)(k) : (E = (0, H.setTopLeft)(k), b && (E.left = (0, H.perc)(k.left / x), E.width = (0, H.perc)(k.width / x))), E;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(k, b) {
      return /* @__PURE__ */ y.default.createElement(_.DraggableCore, {
        disabled: !b,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, k);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(k, b) {
      return (x, C) => (
        /*: Function*/
        b(x, C, k)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(k, b, x) {
      const {
        cols: C,
        minW: E,
        minH: D,
        maxW: P,
        maxH: ce,
        transformScale: ve,
        resizeHandles: Oe,
        resizeHandle: Pe
      } = this.props, ie = this.getPositionParams(), re = (0, g.calcGridItemPosition)(ie, 0, 0, C, 0).width, De = (0, g.calcGridItemPosition)(ie, 0, 0, E, D), Ue = (0, g.calcGridItemPosition)(ie, 0, 0, P, ce), Fe = [De.width, De.height], Te = [Math.min(Ue.width, re), Math.min(Ue.height, 1 / 0)];
      return /* @__PURE__ */ y.default.createElement(
        $.Resizable,
        {
          draggableOpts: {
            disabled: !x
          },
          className: x ? void 0 : "react-resizable-hide",
          width: b.width,
          height: b.height,
          minConstraints: Fe,
          maxConstraints: Te,
          onResizeStop: this.curryResizeHandler(b, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(b, this.onResizeStart),
          onResize: this.curryResizeHandler(b, this.onResize),
          transformScale: ve,
          resizeHandles: Oe,
          handle: Pe
        },
        k
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(k, b, x, C) {
      let {
        node: E,
        size: D,
        handle: P
      } = b;
      const ce = this.props[C];
      if (!ce) return;
      const {
        x: ve,
        y: Oe,
        i: Pe,
        maxH: ie,
        minH: re,
        containerWidth: De
      } = this.props, {
        minW: Ue,
        maxW: Fe
      } = this.props;
      let Te = D;
      E && (Te = (0, H.resizeItemInDirection)(P, x, D, De), (0, w.flushSync)(() => {
        this.setState({
          resizing: C === "onResizeStop" ? null : Te
        });
      }));
      let {
        w: ge,
        h: $e
      } = (0, g.calcWH)(this.getPositionParams(), Te.width, Te.height, ve, Oe, P);
      ge = (0, g.clamp)(ge, Math.max(Ue, 1), Fe), $e = (0, g.clamp)($e, re, ie), ce.call(this, Pe, ge, $e, {
        e: k,
        node: E,
        size: Te,
        handle: P
      });
    }
    render() {
      const {
        x: k,
        y: b,
        w: x,
        h: C,
        isDraggable: E,
        isResizable: D,
        droppingPosition: P,
        useCSSTransforms: ce
      } = this.props, ve = (0, g.calcGridItemPosition)(this.getPositionParams(), k, b, x, C, this.state), Oe = y.default.Children.only(this.props.children);
      let Pe = /* @__PURE__ */ y.default.cloneElement(Oe, {
        ref: this.elementRef,
        className: (0, A.default)("react-grid-item", Oe.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": E,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!P,
          cssTransforms: ce
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: I(I(I({}, this.props.style), Oe.props.style), this.createStyle(ve))
      });
      return Pe = this.mixinResizable(Pe, ve, D), Pe = this.mixinDraggable(Pe, E), Pe;
    }
  };
  return pv.default = be, J(be, "propTypes", {
    // Children must be only a single element
    children: h.default.element,
    // General grid attributes
    cols: h.default.number.isRequired,
    containerWidth: h.default.number.isRequired,
    rowHeight: h.default.number.isRequired,
    margin: h.default.array.isRequired,
    maxRows: h.default.number.isRequired,
    containerPadding: h.default.array.isRequired,
    // These are all in grid units
    x: h.default.number.isRequired,
    y: h.default.number.isRequired,
    w: h.default.number.isRequired,
    h: h.default.number.isRequired,
    // All optional
    minW: function(K, k) {
      const b = K[k];
      if (typeof b != "number") return new Error("minWidth not Number");
      if (b > K.w || b > K.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(K, k) {
      const b = K[k];
      if (typeof b != "number") return new Error("maxWidth not Number");
      if (b < K.w || b < K.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(K, k) {
      const b = K[k];
      if (typeof b != "number") return new Error("minHeight not Number");
      if (b > K.h || b > K.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(K, k) {
      const b = K[k];
      if (typeof b != "number") return new Error("maxHeight not Number");
      if (b < K.h || b < K.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: h.default.string.isRequired,
    // Resize handle options
    resizeHandles: pe.resizeHandleAxesType,
    resizeHandle: pe.resizeHandleType,
    // Functions
    onDragStop: h.default.func,
    onDragStart: h.default.func,
    onDrag: h.default.func,
    onResizeStop: h.default.func,
    onResizeStart: h.default.func,
    onResize: h.default.func,
    // Flags
    isDraggable: h.default.bool.isRequired,
    isResizable: h.default.bool.isRequired,
    isBounded: h.default.bool.isRequired,
    static: h.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: h.default.bool.isRequired,
    transformScale: h.default.number,
    // Others
    className: h.default.string,
    // Selector for draggable handle
    handle: h.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: h.default.string,
    // Current position of a dropping element
    droppingPosition: h.default.shape({
      e: h.default.object.isRequired,
      left: h.default.number.isRequired,
      top: h.default.number.isRequired
    })
  }), J(be, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), pv;
}
var _C;
function BC() {
  if (_C) return dv;
  _C = 1, Object.defineProperty(dv, "__esModule", {
    value: !0
  }), dv.default = void 0;
  var y = A(ba()), w = /* @__PURE__ */ oE(), h = pe(_y()), _ = ad(), $ = lE(), H = pe(sk()), g = pe(FC());
  function pe(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function A(k, b) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (A = function(E, D) {
      if (!D && E && E.__esModule) return E;
      var P, ce, ve = { __proto__: null, default: E };
      if (E === null || typeof E != "object" && typeof E != "function") return ve;
      if (P = D ? C : x) {
        if (P.has(E)) return P.get(E);
        P.set(E, ve);
      }
      for (const Oe in E) Oe !== "default" && {}.hasOwnProperty.call(E, Oe) && ((ce = (P = Object.defineProperty) && Object.getOwnPropertyDescriptor(E, Oe)) && (ce.get || ce.set) ? P(ve, Oe, ce) : ve[Oe] = E[Oe]);
      return ve;
    })(k, b);
  }
  function V(k, b) {
    var x = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(k);
      b && (C = C.filter(function(E) {
        return Object.getOwnPropertyDescriptor(k, E).enumerable;
      })), x.push.apply(x, C);
    }
    return x;
  }
  function oe(k) {
    for (var b = 1; b < arguments.length; b++) {
      var x = arguments[b] != null ? arguments[b] : {};
      b % 2 ? V(Object(x), !0).forEach(function(C) {
        I(k, C, x[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(x)) : V(Object(x)).forEach(function(C) {
        Object.defineProperty(k, C, Object.getOwnPropertyDescriptor(x, C));
      });
    }
    return k;
  }
  function I(k, b, x) {
    return (b = J(b)) in k ? Object.defineProperty(k, b, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : k[b] = x, k;
  }
  function J(k) {
    var b = ye(k, "string");
    return typeof b == "symbol" ? b : b + "";
  }
  function ye(k, b) {
    if (typeof k != "object" || !k) return k;
    var x = k[Symbol.toPrimitive];
    if (x !== void 0) {
      var C = x.call(k, b);
      if (typeof C != "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(k);
  }
  const ke = "react-grid-layout";
  let be = !1;
  try {
    be = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let K = class extends y.Component {
    constructor() {
      super(...arguments), I(this, "state", {
        activeDrag: null,
        layout: (0, _.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, _.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), I(this, "dragEnterCounter", 0), I(this, "onDragStart", (b, x, C, E) => {
        let {
          e: D,
          node: P
        } = E;
        const {
          layout: ce
        } = this.state, ve = (0, _.getLayoutItem)(ce, b);
        if (!ve) return;
        const Oe = {
          w: ve.w,
          h: ve.h,
          x: ve.x,
          y: ve.y,
          placeholder: !0,
          i: b
        };
        return this.setState({
          oldDragItem: (0, _.cloneLayoutItem)(ve),
          oldLayout: ce,
          activeDrag: Oe
        }), this.props.onDragStart(ce, ve, ve, null, D, P);
      }), I(this, "onDrag", (b, x, C, E) => {
        let {
          e: D,
          node: P
        } = E;
        const {
          oldDragItem: ce
        } = this.state;
        let {
          layout: ve
        } = this.state;
        const {
          cols: Oe,
          allowOverlap: Pe,
          preventCollision: ie
        } = this.props, re = (0, _.getLayoutItem)(ve, b);
        if (!re) return;
        const De = {
          w: re.w,
          h: re.h,
          x: re.x,
          y: re.y,
          placeholder: !0,
          i: b
        };
        ve = (0, _.moveElement)(ve, re, x, C, !0, ie, (0, _.compactType)(this.props), Oe, Pe), this.props.onDrag(ve, ce, re, De, D, P), this.setState({
          layout: Pe ? ve : (0, _.compact)(ve, (0, _.compactType)(this.props), Oe),
          activeDrag: De
        });
      }), I(this, "onDragStop", (b, x, C, E) => {
        let {
          e: D,
          node: P
        } = E;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: ce
        } = this.state;
        let {
          layout: ve
        } = this.state;
        const {
          cols: Oe,
          preventCollision: Pe,
          allowOverlap: ie
        } = this.props, re = (0, _.getLayoutItem)(ve, b);
        if (!re) return;
        ve = (0, _.moveElement)(ve, re, x, C, !0, Pe, (0, _.compactType)(this.props), Oe, ie);
        const Ue = ie ? ve : (0, _.compact)(ve, (0, _.compactType)(this.props), Oe);
        this.props.onDragStop(Ue, ce, re, null, D, P);
        const {
          oldLayout: Fe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Ue,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(Ue, Fe);
      }), I(this, "onResizeStart", (b, x, C, E) => {
        let {
          e: D,
          node: P
        } = E;
        const {
          layout: ce
        } = this.state, ve = (0, _.getLayoutItem)(ce, b);
        ve && (this.setState({
          oldResizeItem: (0, _.cloneLayoutItem)(ve),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(ce, ve, ve, null, D, P));
      }), I(this, "onResize", (b, x, C, E) => {
        let {
          e: D,
          node: P,
          size: ce,
          handle: ve
        } = E;
        const {
          oldResizeItem: Oe
        } = this.state, {
          layout: Pe
        } = this.state, {
          cols: ie,
          preventCollision: re,
          allowOverlap: De
        } = this.props;
        let Ue = !1, Fe, Te, ge;
        const [$e, W] = (0, _.withLayoutItem)(Pe, b, (Q) => {
          let He;
          return Te = Q.x, ge = Q.y, ["sw", "w", "nw", "n", "ne"].indexOf(ve) !== -1 && (["sw", "nw", "w"].indexOf(ve) !== -1 && (Te = Q.x + (Q.w - x), x = Q.x !== Te && Te < 0 ? Q.w : x, Te = Te < 0 ? 0 : Te), ["ne", "n", "nw"].indexOf(ve) !== -1 && (ge = Q.y + (Q.h - C), C = Q.y !== ge && ge < 0 ? Q.h : C, ge = ge < 0 ? 0 : ge), Ue = !0), re && !De && (He = (0, _.getAllCollisions)(Pe, oe(oe({}, Q), {}, {
            w: x,
            h: C,
            x: Te,
            y: ge
          })).filter((Ge) => Ge.i !== Q.i).length > 0, He && (ge = Q.y, C = Q.h, Te = Q.x, x = Q.w, Ue = !1)), Q.w = x, Q.h = C, Q;
        });
        if (!W) return;
        Fe = $e, Ue && (Fe = (0, _.moveElement)($e, W, Te, ge, !0, this.props.preventCollision, (0, _.compactType)(this.props), ie, De));
        const O = {
          w: W.w,
          h: W.h,
          x: W.x,
          y: W.y,
          static: !0,
          i: b
        };
        this.props.onResize(Fe, Oe, W, O, D, P), this.setState({
          layout: De ? Fe : (0, _.compact)(Fe, (0, _.compactType)(this.props), ie),
          activeDrag: O
        });
      }), I(this, "onResizeStop", (b, x, C, E) => {
        let {
          e: D,
          node: P
        } = E;
        const {
          layout: ce,
          oldResizeItem: ve
        } = this.state, {
          cols: Oe,
          allowOverlap: Pe
        } = this.props, ie = (0, _.getLayoutItem)(ce, b), re = Pe ? ce : (0, _.compact)(ce, (0, _.compactType)(this.props), Oe);
        this.props.onResizeStop(re, ve, ie, null, D, P);
        const {
          oldLayout: De
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: re,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(re, De);
      }), I(this, "onDragOver", (b) => {
        var x;
        if (b.preventDefault(), b.stopPropagation(), be && // $FlowIgnore can't figure this out
        !((x = b.nativeEvent.target) !== null && x !== void 0 && x.classList.contains(ke)))
          return !1;
        const {
          droppingItem: C,
          onDropDragOver: E,
          margin: D,
          cols: P,
          rowHeight: ce,
          maxRows: ve,
          width: Oe,
          containerPadding: Pe,
          transformScale: ie
        } = this.props, re = E == null ? void 0 : E(b);
        if (re === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const De = oe(oe({}, C), re), {
          layout: Ue
        } = this.state, Fe = b.currentTarget.getBoundingClientRect(), Te = b.clientX - Fe.left, ge = b.clientY - Fe.top, $e = {
          left: Te / ie,
          top: ge / ie,
          e: b
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: W,
              top: O
            } = this.state.droppingPosition;
            (W != Te || O != ge) && this.setState({
              droppingPosition: $e
            });
          }
        } else {
          const W = {
            cols: P,
            margin: D,
            maxRows: ve,
            rowHeight: ce,
            containerWidth: Oe,
            containerPadding: Pe || D
          }, O = (0, $.calcXY)(W, ge, Te, De.w, De.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ y.createElement("div", {
              key: De.i
            }),
            droppingPosition: $e,
            layout: [...Ue, oe(oe({}, De), {}, {
              x: O.x,
              y: O.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), I(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: b,
          cols: x
        } = this.props, {
          layout: C
        } = this.state, E = (0, _.compact)(C.filter((D) => D.i !== b.i), (0, _.compactType)(this.props), x, this.props.allowOverlap);
        this.setState({
          layout: E,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), I(this, "onDragLeave", (b) => {
        b.preventDefault(), b.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), I(this, "onDragEnter", (b) => {
        b.preventDefault(), b.stopPropagation(), this.dragEnterCounter++;
      }), I(this, "onDrop", (b) => {
        b.preventDefault(), b.stopPropagation();
        const {
          droppingItem: x
        } = this.props, {
          layout: C
        } = this.state, E = C.find((D) => D.i === x.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(C, E, b);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(b, x) {
      let C;
      return x.activeDrag ? null : (!(0, w.deepEqual)(b.layout, x.propsLayout) || b.compactType !== x.compactType ? C = b.layout : (0, _.childrenEqual)(b.children, x.children) || (C = x.layout), C ? {
        layout: (0, _.synchronizeLayoutWithChildren)(C, b.children, b.cols, (0, _.compactType)(b), b.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: b.compactType,
        children: b.children,
        propsLayout: b.layout
      } : null);
    }
    shouldComponentUpdate(b, x) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== b.children || !(0, _.fastRGLPropsEqual)(this.props, b, w.deepEqual) || this.state.activeDrag !== x.activeDrag || this.state.mounted !== x.mounted || this.state.droppingPosition !== x.droppingPosition
      );
    }
    componentDidUpdate(b, x) {
      if (!this.state.activeDrag) {
        const C = this.state.layout, E = x.layout;
        this.onLayoutMaybeChanged(C, E);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const b = (0, _.bottom)(this.state.layout), x = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return b * this.props.rowHeight + (b - 1) * this.props.margin[1] + x * 2 + "px";
    }
    onLayoutMaybeChanged(b, x) {
      x || (x = this.state.layout), (0, w.deepEqual)(x, b) || this.props.onLayoutChange(b);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: b
      } = this.state;
      if (!b) return null;
      const {
        width: x,
        cols: C,
        margin: E,
        containerPadding: D,
        rowHeight: P,
        maxRows: ce,
        useCSSTransforms: ve,
        transformScale: Oe
      } = this.props;
      return /* @__PURE__ */ y.createElement(H.default, {
        w: b.w,
        h: b.h,
        x: b.x,
        y: b.y,
        i: b.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: x,
        cols: C,
        margin: E,
        containerPadding: D || E,
        maxRows: ce,
        rowHeight: P,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: ve,
        transformScale: Oe
      }, /* @__PURE__ */ y.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(b, x) {
      if (!b || !b.key) return;
      const C = (0, _.getLayoutItem)(this.state.layout, String(b.key));
      if (!C) return null;
      const {
        width: E,
        cols: D,
        margin: P,
        containerPadding: ce,
        rowHeight: ve,
        maxRows: Oe,
        isDraggable: Pe,
        isResizable: ie,
        isBounded: re,
        useCSSTransforms: De,
        transformScale: Ue,
        draggableCancel: Fe,
        draggableHandle: Te,
        resizeHandles: ge,
        resizeHandle: $e
      } = this.props, {
        mounted: W,
        droppingPosition: O
      } = this.state, Q = typeof C.isDraggable == "boolean" ? C.isDraggable : !C.static && Pe, He = typeof C.isResizable == "boolean" ? C.isResizable : !C.static && ie, ze = C.resizeHandles || ge, Ge = Q && re && C.isBounded !== !1;
      return /* @__PURE__ */ y.createElement(H.default, {
        containerWidth: E,
        cols: D,
        margin: P,
        containerPadding: ce || P,
        maxRows: Oe,
        rowHeight: ve,
        cancel: Fe,
        handle: Te,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: Q,
        isResizable: He,
        isBounded: Ge,
        useCSSTransforms: De && W,
        usePercentages: !W,
        transformScale: Ue,
        w: C.w,
        h: C.h,
        x: C.x,
        y: C.y,
        i: C.i,
        minH: C.minH,
        minW: C.minW,
        maxH: C.maxH,
        maxW: C.maxW,
        static: C.static,
        droppingPosition: x ? O : void 0,
        resizeHandles: ze,
        resizeHandle: $e
      }, b);
    }
    render() {
      const {
        className: b,
        style: x,
        isDroppable: C,
        innerRef: E
      } = this.props, D = (0, h.default)(ke, b), P = oe({
        height: this.containerHeight()
      }, x);
      return /* @__PURE__ */ y.createElement("div", {
        ref: E,
        className: D,
        style: P,
        onDrop: C ? this.onDrop : _.noop,
        onDragLeave: C ? this.onDragLeave : _.noop,
        onDragEnter: C ? this.onDragEnter : _.noop,
        onDragOver: C ? this.onDragOver : _.noop
      }, y.Children.map(this.props.children, (ce) => this.processGridItem(ce)), C && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return dv.default = K, I(K, "displayName", "ReactGridLayout"), I(K, "propTypes", g.default), I(K, "defaultProps", {
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
    onLayoutChange: _.noop,
    onDragStart: _.noop,
    onDrag: _.noop,
    onDragStop: _.noop,
    onResizeStart: _.noop,
    onResize: _.noop,
    onResizeStop: _.noop,
    onDrop: _.noop,
    onDropDragOver: _.noop
  }), dv;
}
var Sv = {}, hc = {}, OC;
function VC() {
  if (OC) return hc;
  OC = 1, Object.defineProperty(hc, "__esModule", {
    value: !0
  }), hc.findOrGenerateResponsiveLayout = _, hc.getBreakpointFromWidth = w, hc.getColsFromBreakpoint = h, hc.sortBreakpoints = $;
  var y = ad();
  function w(H, g) {
    const pe = $(H);
    let A = pe[0];
    for (let V = 1, oe = pe.length; V < oe; V++) {
      const I = pe[V];
      g > H[I] && (A = I);
    }
    return A;
  }
  function h(H, g) {
    if (!g[H])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + H + " is missing!");
    return g[H];
  }
  function _(H, g, pe, A, V, oe) {
    if (H[pe]) return (0, y.cloneLayout)(H[pe]);
    let I = H[A];
    const J = $(g), ye = J.slice(J.indexOf(pe));
    for (let ke = 0, be = ye.length; ke < be; ke++) {
      const K = ye[ke];
      if (H[K]) {
        I = H[K];
        break;
      }
    }
    return I = (0, y.cloneLayout)(I || []), (0, y.compact)((0, y.correctBounds)(I, {
      cols: V
    }), oe, V);
  }
  function $(H) {
    return Object.keys(H).sort(function(pe, A) {
      return H[pe] - H[A];
    });
  }
  return hc;
}
var DC;
function ck() {
  if (DC) return Sv;
  DC = 1, Object.defineProperty(Sv, "__esModule", {
    value: !0
  }), Sv.default = void 0;
  var y = A(ba()), w = pe(/* @__PURE__ */ Ju()), h = /* @__PURE__ */ oE(), _ = ad(), $ = VC(), H = pe(BC());
  const g = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function pe(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function A(C, E) {
    if (typeof WeakMap == "function") var D = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap();
    return (A = function(ce, ve) {
      if (!ve && ce && ce.__esModule) return ce;
      var Oe, Pe, ie = { __proto__: null, default: ce };
      if (ce === null || typeof ce != "object" && typeof ce != "function") return ie;
      if (Oe = ve ? P : D) {
        if (Oe.has(ce)) return Oe.get(ce);
        Oe.set(ce, ie);
      }
      for (const re in ce) re !== "default" && {}.hasOwnProperty.call(ce, re) && ((Pe = (Oe = Object.defineProperty) && Object.getOwnPropertyDescriptor(ce, re)) && (Pe.get || Pe.set) ? Oe(ie, re, Pe) : ie[re] = ce[re]);
      return ie;
    })(C, E);
  }
  function V() {
    return V = Object.assign ? Object.assign.bind() : function(C) {
      for (var E = 1; E < arguments.length; E++) {
        var D = arguments[E];
        for (var P in D) ({}).hasOwnProperty.call(D, P) && (C[P] = D[P]);
      }
      return C;
    }, V.apply(null, arguments);
  }
  function oe(C, E) {
    if (C == null) return {};
    var D, P, ce = I(C, E);
    if (Object.getOwnPropertySymbols) {
      var ve = Object.getOwnPropertySymbols(C);
      for (P = 0; P < ve.length; P++) D = ve[P], E.indexOf(D) === -1 && {}.propertyIsEnumerable.call(C, D) && (ce[D] = C[D]);
    }
    return ce;
  }
  function I(C, E) {
    if (C == null) return {};
    var D = {};
    for (var P in C) if ({}.hasOwnProperty.call(C, P)) {
      if (E.indexOf(P) !== -1) continue;
      D[P] = C[P];
    }
    return D;
  }
  function J(C, E) {
    var D = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(C);
      E && (P = P.filter(function(ce) {
        return Object.getOwnPropertyDescriptor(C, ce).enumerable;
      })), D.push.apply(D, P);
    }
    return D;
  }
  function ye(C) {
    for (var E = 1; E < arguments.length; E++) {
      var D = arguments[E] != null ? arguments[E] : {};
      E % 2 ? J(Object(D), !0).forEach(function(P) {
        ke(C, P, D[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(D)) : J(Object(D)).forEach(function(P) {
        Object.defineProperty(C, P, Object.getOwnPropertyDescriptor(D, P));
      });
    }
    return C;
  }
  function ke(C, E, D) {
    return (E = be(E)) in C ? Object.defineProperty(C, E, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : C[E] = D, C;
  }
  function be(C) {
    var E = K(C, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function K(C, E) {
    if (typeof C != "object" || !C) return C;
    var D = C[Symbol.toPrimitive];
    if (D !== void 0) {
      var P = D.call(C, E);
      if (typeof P != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(C);
  }
  const k = (C) => Object.prototype.toString.call(C);
  function b(C, E) {
    return C == null ? null : Array.isArray(C) ? C : C[E];
  }
  let x = class extends y.Component {
    constructor() {
      super(...arguments), ke(this, "state", this.generateInitialState()), ke(this, "onLayoutChange", (E) => {
        this.props.onLayoutChange(E, ye(ye({}, this.props.layouts), {}, {
          [this.state.breakpoint]: E
        }));
      });
    }
    generateInitialState() {
      const {
        width: E,
        breakpoints: D,
        layouts: P,
        cols: ce
      } = this.props, ve = (0, $.getBreakpointFromWidth)(D, E), Oe = (0, $.getColsFromBreakpoint)(ve, ce), Pe = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, $.findOrGenerateResponsiveLayout)(P, D, ve, ve, Oe, Pe),
        breakpoint: ve,
        cols: Oe
      };
    }
    static getDerivedStateFromProps(E, D) {
      if (!(0, h.deepEqual)(E.layouts, D.layouts)) {
        const {
          breakpoint: P,
          cols: ce
        } = D;
        return {
          layout: (0, $.findOrGenerateResponsiveLayout)(E.layouts, E.breakpoints, P, P, ce, E.compactType),
          layouts: E.layouts
        };
      }
      return null;
    }
    componentDidUpdate(E) {
      (this.props.width != E.width || this.props.breakpoint !== E.breakpoint || !(0, h.deepEqual)(this.props.breakpoints, E.breakpoints) || !(0, h.deepEqual)(this.props.cols, E.cols)) && this.onWidthChange(E);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(E) {
      const {
        breakpoints: D,
        cols: P,
        layouts: ce,
        compactType: ve
      } = this.props, Oe = this.props.breakpoint || (0, $.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), Pe = this.state.breakpoint, ie = (0, $.getColsFromBreakpoint)(Oe, P), re = ye({}, ce);
      if (Pe !== Oe || E.breakpoints !== D || E.cols !== P) {
        Pe in re || (re[Pe] = (0, _.cloneLayout)(this.state.layout));
        let Fe = (0, $.findOrGenerateResponsiveLayout)(re, D, Oe, Pe, ie, ve);
        Fe = (0, _.synchronizeLayoutWithChildren)(Fe, this.props.children, ie, ve, this.props.allowOverlap), re[Oe] = Fe, this.props.onBreakpointChange(Oe, ie), this.props.onLayoutChange(Fe, re), this.setState({
          breakpoint: Oe,
          layout: Fe,
          cols: ie
        });
      }
      const De = b(this.props.margin, Oe), Ue = b(this.props.containerPadding, Oe);
      this.props.onWidthChange(this.props.width, De, ie, Ue);
    }
    render() {
      const E = this.props, {
        breakpoint: D,
        breakpoints: P,
        cols: ce,
        layouts: ve,
        margin: Oe,
        containerPadding: Pe,
        onBreakpointChange: ie,
        onLayoutChange: re,
        onWidthChange: De
      } = E, Ue = oe(E, g);
      return /* @__PURE__ */ y.createElement(H.default, V({}, Ue, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: b(Oe, this.state.breakpoint),
        containerPadding: b(Pe, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return Sv.default = x, ke(x, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: w.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: w.default.object,
    allowOverlap: w.default.bool,
    // # of cols. This is a breakpoint -> cols map
    cols: w.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: w.default.oneOfType([w.default.array, w.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: w.default.oneOfType([w.default.array, w.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts(C, E) {
      if (k(C[E]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + k(C[E]));
      Object.keys(C[E]).forEach((D) => {
        if (!(D in C.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, _.validateLayout)(C.layouts[D], "layouts." + D);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: w.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: w.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: w.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: w.default.func
  }), ke(x, "defaultProps", {
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
    onBreakpointChange: _.noop,
    onLayoutChange: _.noop,
    onWidthChange: _.noop
  }), Sv;
}
var Ey = {}, IC = function() {
  if (typeof Map < "u")
    return Map;
  function y(w, h) {
    var _ = -1;
    return w.some(function($, H) {
      return $[0] === h ? (_ = H, !0) : !1;
    }), _;
  }
  return (
    /** @class */
    function() {
      function w() {
        this.__entries__ = [];
      }
      return Object.defineProperty(w.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), w.prototype.get = function(h) {
        var _ = y(this.__entries__, h), $ = this.__entries__[_];
        return $ && $[1];
      }, w.prototype.set = function(h, _) {
        var $ = y(this.__entries__, h);
        ~$ ? this.__entries__[$][1] = _ : this.__entries__.push([h, _]);
      }, w.prototype.delete = function(h) {
        var _ = this.__entries__, $ = y(_, h);
        ~$ && _.splice($, 1);
      }, w.prototype.has = function(h) {
        return !!~y(this.__entries__, h);
      }, w.prototype.clear = function() {
        this.__entries__.splice(0);
      }, w.prototype.forEach = function(h, _) {
        _ === void 0 && (_ = null);
        for (var $ = 0, H = this.__entries__; $ < H.length; $++) {
          var g = H[$];
          h.call(_, g[1], g[0]);
        }
      }, w;
    }()
  );
}(), rE = typeof window < "u" && typeof document < "u" && window.document === document, Cy = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), fk = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Cy) : function(y) {
    return setTimeout(function() {
      return y(Date.now());
    }, 1e3 / 60);
  };
}(), dk = 2;
function pk(y, w) {
  var h = !1, _ = !1, $ = 0;
  function H() {
    h && (h = !1, y()), _ && pe();
  }
  function g() {
    fk(H);
  }
  function pe() {
    var A = Date.now();
    if (h) {
      if (A - $ < dk)
        return;
      _ = !0;
    } else
      h = !0, _ = !1, setTimeout(g, w);
    $ = A;
  }
  return pe;
}
var vk = 20, hk = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], mk = typeof MutationObserver < "u", yk = (
  /** @class */
  function() {
    function y() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = pk(this.refresh.bind(this), vk);
    }
    return y.prototype.addObserver = function(w) {
      ~this.observers_.indexOf(w) || this.observers_.push(w), this.connected_ || this.connect_();
    }, y.prototype.removeObserver = function(w) {
      var h = this.observers_, _ = h.indexOf(w);
      ~_ && h.splice(_, 1), !h.length && this.connected_ && this.disconnect_();
    }, y.prototype.refresh = function() {
      var w = this.updateObservers_();
      w && this.refresh();
    }, y.prototype.updateObservers_ = function() {
      var w = this.observers_.filter(function(h) {
        return h.gatherActive(), h.hasActive();
      });
      return w.forEach(function(h) {
        return h.broadcastActive();
      }), w.length > 0;
    }, y.prototype.connect_ = function() {
      !rE || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), mk ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, y.prototype.disconnect_ = function() {
      !rE || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, y.prototype.onTransitionEnd_ = function(w) {
      var h = w.propertyName, _ = h === void 0 ? "" : h, $ = hk.some(function(H) {
        return !!~_.indexOf(H);
      });
      $ && this.refresh();
    }, y.getInstance = function() {
      return this.instance_ || (this.instance_ = new y()), this.instance_;
    }, y.instance_ = null, y;
  }()
), $C = function(y, w) {
  for (var h = 0, _ = Object.keys(w); h < _.length; h++) {
    var $ = _[h];
    Object.defineProperty(y, $, {
      value: w[$],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return y;
}, rd = function(y) {
  var w = y && y.ownerDocument && y.ownerDocument.defaultView;
  return w || Cy;
}, WC = Oy(0, 0, 0, 0);
function xy(y) {
  return parseFloat(y) || 0;
}
function kC(y) {
  for (var w = [], h = 1; h < arguments.length; h++)
    w[h - 1] = arguments[h];
  return w.reduce(function(_, $) {
    var H = y["border-" + $ + "-width"];
    return _ + xy(H);
  }, 0);
}
function gk(y) {
  for (var w = ["top", "right", "bottom", "left"], h = {}, _ = 0, $ = w; _ < $.length; _++) {
    var H = $[_], g = y["padding-" + H];
    h[H] = xy(g);
  }
  return h;
}
function Sk(y) {
  var w = y.getBBox();
  return Oy(0, 0, w.width, w.height);
}
function bk(y) {
  var w = y.clientWidth, h = y.clientHeight;
  if (!w && !h)
    return WC;
  var _ = rd(y).getComputedStyle(y), $ = gk(_), H = $.left + $.right, g = $.top + $.bottom, pe = xy(_.width), A = xy(_.height);
  if (_.boxSizing === "border-box" && (Math.round(pe + H) !== w && (pe -= kC(_, "left", "right") + H), Math.round(A + g) !== h && (A -= kC(_, "top", "bottom") + g)), !wk(y)) {
    var V = Math.round(pe + H) - w, oe = Math.round(A + g) - h;
    Math.abs(V) !== 1 && (pe -= V), Math.abs(oe) !== 1 && (A -= oe);
  }
  return Oy($.left, $.top, pe, A);
}
var Ek = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(y) {
    return y instanceof rd(y).SVGGraphicsElement;
  } : function(y) {
    return y instanceof rd(y).SVGElement && typeof y.getBBox == "function";
  };
}();
function wk(y) {
  return y === rd(y).document.documentElement;
}
function Rk(y) {
  return rE ? Ek(y) ? Sk(y) : bk(y) : WC;
}
function Ck(y) {
  var w = y.x, h = y.y, _ = y.width, $ = y.height, H = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, g = Object.create(H.prototype);
  return $C(g, {
    x: w,
    y: h,
    width: _,
    height: $,
    top: h,
    right: w + _,
    bottom: $ + h,
    left: w
  }), g;
}
function Oy(y, w, h, _) {
  return { x: y, y: w, width: h, height: _ };
}
var xk = (
  /** @class */
  function() {
    function y(w) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Oy(0, 0, 0, 0), this.target = w;
    }
    return y.prototype.isActive = function() {
      var w = Rk(this.target);
      return this.contentRect_ = w, w.width !== this.broadcastWidth || w.height !== this.broadcastHeight;
    }, y.prototype.broadcastRect = function() {
      var w = this.contentRect_;
      return this.broadcastWidth = w.width, this.broadcastHeight = w.height, w;
    }, y;
  }()
), Tk = (
  /** @class */
  /* @__PURE__ */ function() {
    function y(w, h) {
      var _ = Ck(h);
      $C(this, { target: w, contentRect: _ });
    }
    return y;
  }()
), _k = (
  /** @class */
  function() {
    function y(w, h, _) {
      if (this.activeObservations_ = [], this.observations_ = new IC(), typeof w != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = w, this.controller_ = h, this.callbackCtx_ = _;
    }
    return y.prototype.observe = function(w) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(w instanceof rd(w).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(w) || (h.set(w, new xk(w)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, y.prototype.unobserve = function(w) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(w instanceof rd(w).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var h = this.observations_;
        h.has(w) && (h.delete(w), h.size || this.controller_.removeObserver(this));
      }
    }, y.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, y.prototype.gatherActive = function() {
      var w = this;
      this.clearActive(), this.observations_.forEach(function(h) {
        h.isActive() && w.activeObservations_.push(h);
      });
    }, y.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var w = this.callbackCtx_, h = this.activeObservations_.map(function(_) {
          return new Tk(_.target, _.broadcastRect());
        });
        this.callback_.call(w, h, w), this.clearActive();
      }
    }, y.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, y.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, y;
  }()
), qC = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new IC(), YC = (
  /** @class */
  /* @__PURE__ */ function() {
    function y(w) {
      if (!(this instanceof y))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var h = yk.getInstance(), _ = new _k(w, h, this);
      qC.set(this, _);
    }
    return y;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(y) {
  YC.prototype[y] = function() {
    var w;
    return (w = qC.get(this))[y].apply(w, arguments);
  };
});
var Ok = function() {
  return typeof Cy.ResizeObserver < "u" ? Cy.ResizeObserver : YC;
}();
const Dk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ok
}, Symbol.toStringTag, { value: "Module" })), kk = /* @__PURE__ */ AD(Dk);
var zC;
function zk() {
  if (zC) return Ey;
  zC = 1, Object.defineProperty(Ey, "__esModule", {
    value: !0
  }), Ey.default = ke;
  var y = g(ba()), w = H(/* @__PURE__ */ Ju()), h = H(kk), _ = H(_y());
  const $ = ["measureBeforeMount"];
  function H(be) {
    return be && be.__esModule ? be : { default: be };
  }
  function g(be, K) {
    if (typeof WeakMap == "function") var k = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (g = function(x, C) {
      if (!C && x && x.__esModule) return x;
      var E, D, P = { __proto__: null, default: x };
      if (x === null || typeof x != "object" && typeof x != "function") return P;
      if (E = C ? b : k) {
        if (E.has(x)) return E.get(x);
        E.set(x, P);
      }
      for (const ce in x) ce !== "default" && {}.hasOwnProperty.call(x, ce) && ((D = (E = Object.defineProperty) && Object.getOwnPropertyDescriptor(x, ce)) && (D.get || D.set) ? E(P, ce, D) : P[ce] = x[ce]);
      return P;
    })(be, K);
  }
  function pe() {
    return pe = Object.assign ? Object.assign.bind() : function(be) {
      for (var K = 1; K < arguments.length; K++) {
        var k = arguments[K];
        for (var b in k) ({}).hasOwnProperty.call(k, b) && (be[b] = k[b]);
      }
      return be;
    }, pe.apply(null, arguments);
  }
  function A(be, K) {
    if (be == null) return {};
    var k, b, x = V(be, K);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(be);
      for (b = 0; b < C.length; b++) k = C[b], K.indexOf(k) === -1 && {}.propertyIsEnumerable.call(be, k) && (x[k] = be[k]);
    }
    return x;
  }
  function V(be, K) {
    if (be == null) return {};
    var k = {};
    for (var b in be) if ({}.hasOwnProperty.call(be, b)) {
      if (K.indexOf(b) !== -1) continue;
      k[b] = be[b];
    }
    return k;
  }
  function oe(be, K, k) {
    return (K = I(K)) in be ? Object.defineProperty(be, K, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : be[K] = k, be;
  }
  function I(be) {
    var K = J(be, "string");
    return typeof K == "symbol" ? K : K + "";
  }
  function J(be, K) {
    if (typeof be != "object" || !be) return be;
    var k = be[Symbol.toPrimitive];
    if (k !== void 0) {
      var b = k.call(be, K);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (K === "string" ? String : Number)(be);
  }
  const ye = "react-grid-layout";
  function ke(be) {
    var K;
    return K = class extends y.Component {
      constructor() {
        super(...arguments), oe(this, "state", {
          width: 1280
        }), oe(this, "elementRef", /* @__PURE__ */ y.createRef()), oe(this, "mounted", !1), oe(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new h.default((x) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const E = x[0].contentRect.width;
            this.setState({
              width: E
            });
          }
        });
        const b = this.elementRef.current;
        b instanceof HTMLElement && this.resizeObserver.observe(b);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const b = this.elementRef.current;
        b instanceof HTMLElement && this.resizeObserver.unobserve(b), this.resizeObserver.disconnect();
      }
      render() {
        const b = this.props, {
          measureBeforeMount: x
        } = b, C = A(b, $);
        return x && !this.mounted ? /* @__PURE__ */ y.createElement("div", {
          className: (0, _.default)(this.props.className, ye),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ y.createElement(be, pe({
          innerRef: this.elementRef
        }, C, this.state));
      }
    }, oe(K, "defaultProps", {
      measureBeforeMount: !1
    }), oe(K, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: w.default.bool
    }), K;
  }
  return Ey;
}
var MC;
function Mk() {
  return MC || (MC = 1, function(y) {
    y.exports = BC().default, y.exports.utils = ad(), y.exports.calculateUtils = lE(), y.exports.Responsive = ck().default, y.exports.Responsive.utils = VC(), y.exports.WidthProvider = zk().default;
  }(Yb)), Yb.exports;
}
var LC = Mk();
const Lk = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, tu = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, GC = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, _n = (y, w, h, _, $) => ({ i: y, x: w, y: h, w: _, h: $, minW: Math.min(_, 3), minH: 2, maxW: 12, maxH: 12 }), wy = { lg: [_n("activity-history", 0, 0, 3, 4), _n("automations", 3, 0, 3, 4), _n("backup-restore", 6, 0, 3, 4), _n("security-status", 9, 0, 3, 3), _n("access-control", 0, 5, 6, 3), _n("alarm-configuration", 6, 4, 6, 8)], md: [_n("activity-history", 0, 0, 4, 4), _n("automations", 4, 0, 4, 4), _n("backup-restore", 0, 4, 4, 4), _n("access-control", 4, 4, 4, 3), _n("alarm-configuration", 0, 8, 8, 8), _n("security-status", 0, 16, 4, 3)], sm: [_n("activity-history", 0, 0, 4, 4), _n("automations", 0, 4, 4, 4), _n("backup-restore", 0, 8, 4, 4), _n("access-control", 0, 12, 4, 3), _n("alarm-configuration", 0, 15, 4, 8), _n("security-status", 0, 23, 4, 3)], xs: [_n("activity-history", 0, 0, 2, 4), _n("automations", 0, 4, 2, 4), _n("backup-restore", 0, 8, 2, 4), _n("access-control", 0, 12, 2, 3), _n("alarm-configuration", 0, 15, 2, 8), _n("security-status", 0, 23, 2, 3)], xxs: [_n("activity-history", 0, 0, 2, 4), _n("automations", 0, 4, 2, 4), _n("backup-restore", 0, 8, 2, 4), _n("access-control", 0, 12, 2, 3), _n("alarm-configuration", 0, 15, 2, 8), _n("security-status", 0, 23, 2, 3)] };
function aE(y, w, h) {
  var _;
  return ((_ = Object.entries(GC).map(([$, H]) => ({ size: $, distance: Math.abs(Math.min(H.w, h) - y) + Math.abs(H.h - w) })).sort(($, H) => $.distance - H.distance)[0]) == null ? void 0 : _.size) ?? "S";
}
function QC(y, w) {
  const h = GC[y];
  return { w: Math.min(h.w, w), h: h.h };
}
function Nk(y, w) {
  const h = aE(y.w, y.h, w), _ = QC(h, w);
  return { ...y, w: _.w, h: _.h, x: Math.max(0, Math.min(y.x, w - _.w)), size: h };
}
function iE(y, w) {
  return y.some((h) => h.i !== w.i && w.x < h.x + h.w && w.x + w.w > h.x && w.y < h.y + h.h && w.y + w.h > h.y);
}
function Pk(y, w, h) {
  for (let _ = 0; _ < 240; _++) for (let $ = 0; $ <= h - w.w; $++) {
    const H = { ...w, x: $, y: _ };
    if (!iE(y, H)) return H;
  }
  return { ...w, x: 0, y: Math.max(0, ...y.map((_) => _.y + _.h)) };
}
function Ty(y) {
  const w = {};
  return Object.keys(tu).forEach((h) => {
    const _ = tu[h], $ = Array.isArray(y == null ? void 0 : y[h]) ? y[h] : [], H = new Map($.map((V) => [V.i, V])), g = (wy[h] || []).map((V) => {
      const oe = H.get(V.i);
      if (!oe) return { ...V };
      const I = Math.min(Math.max(1, oe.w), _);
      return { ...V, ...oe, w: I, x: Math.max(0, Math.min(oe.x, _ - I)), y: Math.max(0, oe.y) };
    }), pe = new Set(g.map((V) => V.i)), A = $.filter((V) => !pe.has(V.i)).map((V) => ({ ...V, w: Math.min(Math.max(1, V.w), _), x: Math.max(0, Math.min(V.x, _ - Math.min(V.w, _))), y: Math.max(0, V.y) }));
    w[h] = [...g, ...A];
  }), w;
}
class Ak {
  key(w, h) {
    return `argus:dashboard-layout:${w}:${h}`;
  }
  read(w, h) {
    try {
      const _ = JSON.parse(localStorage.getItem(this.key(w, h)) || "null");
      return (_ == null ? void 0 : _.layoutVersion) === 1 ? _ : null;
    } catch {
      return null;
    }
  }
  write(w, h, _) {
    localStorage.setItem(this.key(w, h), JSON.stringify(_));
  }
  async load(w, h) {
    const _ = this.read(w, h);
    return _ ? Ty(_.layouts) : null;
  }
  async save(w, h, _) {
    const $ = this.read(w, h);
    this.write(w, h, { layoutVersion: 1, layouts: _, visibility: $ == null ? void 0 : $.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(w, h) {
    var _;
    return ((_ = this.read(w, h)) == null ? void 0 : _.visibility) ?? null;
  }
  async saveVisibility(w, h, _) {
    const $ = this.read(w, h);
    this.write(w, h, { layoutVersion: 1, layouts: ($ == null ? void 0 : $.layouts) ?? Ty(null), visibility: _, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(w, h) {
    localStorage.removeItem(this.key(w, h));
  }
}
const jk = LC.WidthProvider(LC.Responsive);
function Uk({ widget: y, node: w, editing: h, size: _, onSize: $, onHide: H, onReset: g }) {
  const pe = La.useRef(null);
  return La.useLayoutEffect(() => {
    var A, V;
    (A = pe.current) == null || A.appendChild(w), w.draggable = !1, (V = w.querySelector(":scope > .panel-edit-overlay")) == null || V.remove(), h ? w.setAttribute("inert", "") : w.removeAttribute("inert");
  }, [w, h]), /* @__PURE__ */ Un.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ Un.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ Un.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${y.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ Un.jsx("strong", { children: y.title }),
      /* @__PURE__ */ Un.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ Un.jsx("summary", { "aria-label": `Opciones de ${y.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ Un.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ Un.jsx("span", { children: "Tamaño" }),
          /* @__PURE__ */ Un.jsx("div", { children: ["S", "M", "L", "XL"].map((A) => /* @__PURE__ */ Un.jsx("button", { type: "button", className: A === _ ? "active" : "", onClick: () => $(A), children: A }, A)) }),
          /* @__PURE__ */ Un.jsx("button", { type: "button", onClick: g, children: "Restablecer widget" }),
          /* @__PURE__ */ Un.jsx("button", { type: "button", onClick: H, children: "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ Un.jsx("div", { className: "argus-widget__content", ref: pe })
  ] });
}
function Hk({ widgets: y, nodes: w, storage: h, userId: _, dashboardId: $, onEditing: H, registerEditor: g }) {
  const pe = La.useMemo(() => Object.fromEntries(y.map((ie) => [ie.id, ie.visible])), [y]), [A, V] = La.useState(wy), [oe, I] = La.useState(pe), [J, ye] = La.useState(!1), [ke, be] = La.useState("lg"), [K, k] = La.useState(""), b = La.useRef(wy), x = La.useRef();
  La.useEffect(() => {
    g(ye);
  }, [g]), La.useEffect(() => {
    var ie;
    Promise.all([h.load(_, $), (ie = h.loadVisibility) == null ? void 0 : ie.call(h, _, $)]).then(([re, De]) => {
      const Ue = Ty(re);
      V(Ue), b.current = Ue, De && I({ ...pe, ...De });
    });
  }, [h, _, $, pe]), La.useEffect(() => {
    H(J), J || h.save(_, $, A);
  }, [J]), La.useEffect(() => {
    const ie = (re) => {
      J && (re.key === "Escape" ? (ye(!1), k("Edición finalizada")) : re.key === "Enter" && re.target === document.body && ye(!1));
    };
    return window.addEventListener("keydown", ie), () => window.removeEventListener("keydown", ie);
  }, [J]), La.useEffect(() => () => clearTimeout(x.current), []);
  const C = (ie, re = !1) => {
    V(ie), b.current = ie, clearTimeout(x.current), x.current = window.setTimeout(() => h.save(_, $, ie), re ? 0 : 550);
  }, E = (ie, re) => {
    var Ue;
    const De = { ...oe, [ie]: re };
    I(De), (Ue = h.saveVisibility) == null || Ue.call(h, _, $, De), k(re ? "Widget visible" : "Widget oculto");
  }, D = (ie, re, De) => {
    const Ue = A[ke] || [], Fe = Ue.filter(($e) => $e.i !== ie), Te = iE(Fe, re) ? Pk(Fe, re, tu[ke]) : re, ge = { ...A, [ke]: Ue.map(($e) => $e.i === ie ? Te : $e) };
    C(ge, !0), k(De);
  }, P = (ie, re) => {
    const De = (A[ke] || []).find((Fe) => Fe.i === ie);
    if (!De) return;
    const Ue = QC(re, tu[ke]);
    D(ie, { ...De, ...Ue, x: Math.max(0, Math.min(De.x, tu[ke] - Ue.w)) }, `Tamaño ${re}`);
  }, ce = (ie) => {
    const re = (wy[ke] || []).find((De) => De.i === ie);
    re && D(ie, { ...re }, "Widget restablecido");
  }, ve = (ie, re, De) => {
    const Ue = Nk(De, tu[ke]);
    D(De.i, Ue, `Tamaño ${aE(Ue.w, Ue.h, tu[ke])}`);
  }, Oe = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await h.reset(_, $);
    const ie = Ty(null);
    I(pe), C(ie, !0), k("Diseño predeterminado restaurado");
  }, Pe = A[ke] || [];
  return /* @__PURE__ */ Un.jsxs("section", { className: `argus-dashboard ${J ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ Un.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ Un.jsx("button", { type: "button", onClick: () => ye((ie) => !ie), children: J ? "✓ Listo" : "✥ Editar tablero" }),
      J && /* @__PURE__ */ Un.jsxs(Un.Fragment, { children: [
        /* @__PURE__ */ Un.jsx("button", { type: "button", onClick: Oe, children: "Restablecer diseño" }),
        /* @__PURE__ */ Un.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: y.filter((ie) => oe[ie.id] === !1).map((ie) => /* @__PURE__ */ Un.jsxs("button", { type: "button", onClick: () => E(ie.id, !0), children: [
          "Mostrar ",
          ie.title
        ] }, ie.id)) })
      ] })
    ] }),
    /* @__PURE__ */ Un.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: K }),
    /* @__PURE__ */ Un.jsx(jk, { className: "argus-dashboard-grid", layouts: A, breakpoints: Lk, cols: tu, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: J, isResizable: J, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (ie) => be(ie), onLayoutChange: (ie, re) => {
      J && V(re);
    }, onResizeStop: ve, onDragStop: (ie, re, De) => {
      const Ue = (A[ke] || []).filter((Fe) => Fe.i !== De.i);
      if (iE(Ue, De)) {
        V({ ...b.current }), k("Posición bloqueada por colisión");
        return;
      }
      D(De.i, De, "Posición guardada");
    }, useCSSTransforms: !0, children: y.filter((ie) => oe[ie.id] !== !1 && w.has(ie.id)).map((ie) => {
      const re = Pe.find((Ue) => Ue.i === ie.id), De = re ? aE(re.w, re.h, tu[ke]) : ie.size;
      return /* @__PURE__ */ Un.jsx("div", { children: /* @__PURE__ */ Un.jsx(Uk, { widget: ie, node: w.get(ie.id), editing: J, size: De, onSize: (Ue) => P(ie.id, Ue), onHide: () => E(ie.id, !1), onReset: () => ce(ie.id) }) }, ie.id);
    }) })
  ] });
}
const NC = [{ id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 }, { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 }, { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 }, { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 }, { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 }, { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }];
function nE(y) {
  var g, pe, A, V, oe;
  const w = (g = y.shadowRoot) == null ? void 0 : g.getElementById("widget-grid");
  if (!w || y._argusReactRoot) return;
  let h = y.shadowRoot.getElementById("argus-react-dashboard-style");
  h || (h = document.createElement("style"), h.id = "argus-react-dashboard-style", h.textContent = GD + QD + XD, y.shadowRoot.appendChild(h));
  const _ = /* @__PURE__ */ new Map();
  NC.forEach((I) => {
    const J = y.shadowRoot.getElementById(I.nativeId);
    J && _.set(I.id, J);
  });
  const $ = document.createElement("div");
  $.id = "argus-react-dashboard-root", w.appendChild($);
  const H = YD.createRoot($);
  y._argusReactRoot = H, H.render(/* @__PURE__ */ Un.jsx(Hk, { widgets: NC, nodes: _, storage: new Ak(), userId: ((pe = y._currentProfile) == null ? void 0 : pe.id) || ((V = (A = y._hass) == null ? void 0 : A.user) == null ? void 0 : V.id) || "anonymous", dashboardId: ((oe = y._dashboard) == null ? void 0 : oe.entry_id) || "default", onEditing: (I) => {
    y._widgetEditing = I, w.classList.toggle("editing", I);
  }, registerEditor: (I) => {
    y._argusReactSetEditing = I;
  } }));
}
function Yk(y) {
  if (!y || y.__argusReactDashboard) return;
  y.__argusReactDashboard = !0;
  const w = y.prototype, h = w.connectedCallback, _ = w._load, $ = w._initWidgetGrid;
  w.connectedCallback = function() {
    const H = h == null ? void 0 : h.call(this);
    return queueMicrotask(() => nE(this)), H;
  }, w._load = async function() {
    const H = await (_ == null ? void 0 : _.call(this));
    return nE(this), H;
  }, w._initWidgetGrid = function() {
    const H = $ == null ? void 0 : $.call(this);
    return nE(this), H;
  }, w._toggleWidgetEditing = function() {
    var H;
    (H = this._argusReactSetEditing) == null || H.call(this, !this._widgetEditing);
  };
}
export {
  Yk as applyReactDashboardLayout
};
