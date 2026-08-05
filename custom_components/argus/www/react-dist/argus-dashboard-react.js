function ND(y) {
  if (y.__esModule) return y;
  var R = y.default;
  if (typeof R == "function") {
    var m = function _() {
      return this instanceof _ ? Reflect.construct(R, arguments, this.constructor) : R.apply(this, arguments);
    };
    m.prototype = R.prototype;
  } else m = {};
  return Object.defineProperty(m, "__esModule", { value: !0 }), Object.keys(y).forEach(function(_) {
    var Q = Object.getOwnPropertyDescriptor(y, _);
    Object.defineProperty(m, _, Q.get ? Q : {
      enumerable: !0,
      get: function() {
        return y[_];
      }
    });
  }), m;
}
var dy = { exports: {} }, sv = {}, py = { exports: {} }, Kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VC;
function PD() {
  if (VC) return Kt;
  VC = 1;
  var y = Symbol.for("react.element"), R = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), S = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Y = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), V = Symbol.iterator;
  function ne(O) {
    return O === null || typeof O != "object" ? null : (O = V && O[V] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var he = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ue = Object.assign, ye = {};
  function K(O, G, Ae) {
    this.props = O, this.context = G, this.refs = ye, this.updater = Ae || he;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(O, G) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, G, "setState");
  }, K.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function k() {
  }
  k.prototype = K.prototype;
  function g(O, G, Ae) {
    this.props = O, this.context = G, this.refs = ye, this.updater = Ae || he;
  }
  var T = g.prototype = new k();
  T.constructor = g, Ue(T, K.prototype), T.isPureReactComponent = !0;
  var w = Array.isArray, b = Object.prototype.hasOwnProperty, D = { current: null }, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(O, G, Ae) {
    var Oe, Ye = {}, $e = null, We = null;
    if (G != null) for (Oe in G.ref !== void 0 && (We = G.ref), G.key !== void 0 && ($e = "" + G.key), G) b.call(G, Oe) && !P.hasOwnProperty(Oe) && (Ye[Oe] = G[Oe]);
    var pe = arguments.length - 2;
    if (pe === 1) Ye.children = Ae;
    else if (1 < pe) {
      for (var Re = Array(pe), je = 0; je < pe; je++) Re[je] = arguments[je + 2];
      Ye.children = Re;
    }
    if (O && O.defaultProps) for (Oe in pe = O.defaultProps, pe) Ye[Oe] === void 0 && (Ye[Oe] = pe[Oe]);
    return { $$typeof: y, type: O, key: $e, ref: We, props: Ye, _owner: D.current };
  }
  function de(O, G) {
    return { $$typeof: y, type: O.type, key: G, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function _e(O) {
    return typeof O == "object" && O !== null && O.$$typeof === y;
  }
  function Pe(O) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Ae) {
      return G[Ae];
    });
  }
  var ke = /\/+/g;
  function Se(O, G) {
    return typeof O == "object" && O !== null && O.key != null ? Pe("" + O.key) : G.toString(36);
  }
  function qe(O, G, Ae, Oe, Ye) {
    var $e = typeof O;
    ($e === "undefined" || $e === "boolean") && (O = null);
    var We = !1;
    if (O === null) We = !0;
    else switch ($e) {
      case "string":
      case "number":
        We = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case y:
          case R:
            We = !0;
        }
    }
    if (We) return We = O, Ye = Ye(We), O = Oe === "" ? "." + Se(We, 0) : Oe, w(Ye) ? (Ae = "", O != null && (Ae = O.replace(ke, "$&/") + "/"), qe(Ye, G, Ae, "", function(je) {
      return je;
    })) : Ye != null && (_e(Ye) && (Ye = de(Ye, Ae + (!Ye.key || We && We.key === Ye.key ? "" : ("" + Ye.key).replace(ke, "$&/") + "/") + O)), G.push(Ye)), 1;
    if (We = 0, Oe = Oe === "" ? "." : Oe + ":", w(O)) for (var pe = 0; pe < O.length; pe++) {
      $e = O[pe];
      var Re = Oe + Se($e, pe);
      We += qe($e, G, Ae, Re, Ye);
    }
    else if (Re = ne(O), typeof Re == "function") for (O = Re.call(O), pe = 0; !($e = O.next()).done; ) $e = $e.value, Re = Oe + Se($e, pe++), We += qe($e, G, Ae, Re, Ye);
    else if ($e === "object") throw G = String(O), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    return We;
  }
  function Qe(O, G, Ae) {
    if (O == null) return O;
    var Oe = [], Ye = 0;
    return qe(O, Oe, "", "", function($e) {
      return G.call(Ae, $e, Ye++);
    }), Oe;
  }
  function Ie(O) {
    if (O._status === -1) {
      var G = O._result;
      G = G(), G.then(function(Ae) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Ae);
      }, function(Ae) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Ae);
      }), O._status === -1 && (O._status = 0, O._result = G);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var xe = { current: null }, ge = { transition: null }, Be = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ge, ReactCurrentOwner: D };
  function I() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Kt.Children = { map: Qe, forEach: function(O, G, Ae) {
    Qe(O, function() {
      G.apply(this, arguments);
    }, Ae);
  }, count: function(O) {
    var G = 0;
    return Qe(O, function() {
      G++;
    }), G;
  }, toArray: function(O) {
    return Qe(O, function(G) {
      return G;
    }) || [];
  }, only: function(O) {
    if (!_e(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Kt.Component = K, Kt.Fragment = m, Kt.Profiler = Q, Kt.PureComponent = g, Kt.StrictMode = _, Kt.Suspense = B, Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Be, Kt.act = I, Kt.cloneElement = function(O, G, Ae) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var Oe = Ue({}, O.props), Ye = O.key, $e = O.ref, We = O._owner;
    if (G != null) {
      if (G.ref !== void 0 && ($e = G.ref, We = D.current), G.key !== void 0 && (Ye = "" + G.key), O.type && O.type.defaultProps) var pe = O.type.defaultProps;
      for (Re in G) b.call(G, Re) && !P.hasOwnProperty(Re) && (Oe[Re] = G[Re] === void 0 && pe !== void 0 ? pe[Re] : G[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) Oe.children = Ae;
    else if (1 < Re) {
      pe = Array(Re);
      for (var je = 0; je < Re; je++) pe[je] = arguments[je + 2];
      Oe.children = pe;
    }
    return { $$typeof: y, type: O.type, key: Ye, ref: $e, props: Oe, _owner: We };
  }, Kt.createContext = function(O) {
    return O = { $$typeof: S, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: H, _context: O }, O.Consumer = O;
  }, Kt.createElement = fe, Kt.createFactory = function(O) {
    var G = fe.bind(null, O);
    return G.type = O, G;
  }, Kt.createRef = function() {
    return { current: null };
  }, Kt.forwardRef = function(O) {
    return { $$typeof: le, render: O };
  }, Kt.isValidElement = _e, Kt.lazy = function(O) {
    return { $$typeof: ce, _payload: { _status: -1, _result: O }, _init: Ie };
  }, Kt.memo = function(O, G) {
    return { $$typeof: Y, type: O, compare: G === void 0 ? null : G };
  }, Kt.startTransition = function(O) {
    var G = ge.transition;
    ge.transition = {};
    try {
      O();
    } finally {
      ge.transition = G;
    }
  }, Kt.unstable_act = I, Kt.useCallback = function(O, G) {
    return xe.current.useCallback(O, G);
  }, Kt.useContext = function(O) {
    return xe.current.useContext(O);
  }, Kt.useDebugValue = function() {
  }, Kt.useDeferredValue = function(O) {
    return xe.current.useDeferredValue(O);
  }, Kt.useEffect = function(O, G) {
    return xe.current.useEffect(O, G);
  }, Kt.useId = function() {
    return xe.current.useId();
  }, Kt.useImperativeHandle = function(O, G, Ae) {
    return xe.current.useImperativeHandle(O, G, Ae);
  }, Kt.useInsertionEffect = function(O, G) {
    return xe.current.useInsertionEffect(O, G);
  }, Kt.useLayoutEffect = function(O, G) {
    return xe.current.useLayoutEffect(O, G);
  }, Kt.useMemo = function(O, G) {
    return xe.current.useMemo(O, G);
  }, Kt.useReducer = function(O, G, Ae) {
    return xe.current.useReducer(O, G, Ae);
  }, Kt.useRef = function(O) {
    return xe.current.useRef(O);
  }, Kt.useState = function(O) {
    return xe.current.useState(O);
  }, Kt.useSyncExternalStore = function(O, G, Ae) {
    return xe.current.useSyncExternalStore(O, G, Ae);
  }, Kt.useTransition = function() {
    return xe.current.useTransition();
  }, Kt.version = "18.3.1", Kt;
}
var Sv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Sv.exports;
var IC;
function AD() {
  return IC || (IC = 1, function(y, R) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", _ = Symbol.for("react.element"), Q = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), Y = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), he = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), K = Symbol.iterator, k = "@@iterator";
      function g(h) {
        if (h === null || typeof h != "object")
          return null;
        var L = K && h[K] || h[k];
        return typeof L == "function" ? L : null;
      }
      var T = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, w = {
        transition: null
      }, b = {
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
      }, P = {}, fe = null;
      function de(h) {
        fe = h;
      }
      P.setExtraStackFrame = function(h) {
        fe = h;
      }, P.getCurrentStack = null, P.getStackAddendum = function() {
        var h = "";
        fe && (h += fe);
        var L = P.getCurrentStack;
        return L && (h += L() || ""), h;
      };
      var _e = !1, Pe = !1, ke = !1, Se = !1, qe = !1, Qe = {
        ReactCurrentDispatcher: T,
        ReactCurrentBatchConfig: w,
        ReactCurrentOwner: D
      };
      Qe.ReactDebugCurrentFrame = P, Qe.ReactCurrentActQueue = b;
      function Ie(h) {
        {
          for (var L = arguments.length, oe = new Array(L > 1 ? L - 1 : 0), me = 1; me < L; me++)
            oe[me - 1] = arguments[me];
          ge("warn", h, oe);
        }
      }
      function xe(h) {
        {
          for (var L = arguments.length, oe = new Array(L > 1 ? L - 1 : 0), me = 1; me < L; me++)
            oe[me - 1] = arguments[me];
          ge("error", h, oe);
        }
      }
      function ge(h, L, oe) {
        {
          var me = Qe.ReactDebugCurrentFrame, Ve = me.getStackAddendum();
          Ve !== "" && (L += "%s", oe = oe.concat([Ve]));
          var bt = oe.map(function(Ke) {
            return String(Ke);
          });
          bt.unshift("Warning: " + L), Function.prototype.apply.call(console[h], console, bt);
        }
      }
      var Be = {};
      function I(h, L) {
        {
          var oe = h.constructor, me = oe && (oe.displayName || oe.name) || "ReactClass", Ve = me + "." + L;
          if (Be[Ve])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, me), Be[Ve] = !0;
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
        isMounted: function(h) {
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
        enqueueForceUpdate: function(h, L, oe) {
          I(h, "forceUpdate");
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
        enqueueReplaceState: function(h, L, oe, me) {
          I(h, "replaceState");
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
        enqueueSetState: function(h, L, oe, me) {
          I(h, "setState");
        }
      }, G = Object.assign, Ae = {};
      Object.freeze(Ae);
      function Oe(h, L, oe) {
        this.props = h, this.context = L, this.refs = Ae, this.updater = oe || O;
      }
      Oe.prototype.isReactComponent = {}, Oe.prototype.setState = function(h, L) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, L, "setState");
      }, Oe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ye = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, $e = function(h, L) {
          Object.defineProperty(Oe.prototype, h, {
            get: function() {
              Ie("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var We in Ye)
          Ye.hasOwnProperty(We) && $e(We, Ye[We]);
      }
      function pe() {
      }
      pe.prototype = Oe.prototype;
      function Re(h, L, oe) {
        this.props = h, this.context = L, this.refs = Ae, this.updater = oe || O;
      }
      var je = Re.prototype = new pe();
      je.constructor = Re, G(je, Oe.prototype), je.isPureReactComponent = !0;
      function rt() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var we = Array.isArray;
      function ht(h) {
        return we(h);
      }
      function zt(h) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, oe = L && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return oe;
        }
      }
      function $t(h) {
        try {
          return Mt(h), !1;
        } catch {
          return !0;
        }
      }
      function Mt(h) {
        return "" + h;
      }
      function F(h) {
        if ($t(h))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zt(h)), Mt(h);
      }
      function j(h, L, oe) {
        var me = h.displayName;
        if (me)
          return me;
        var Ve = L.displayName || L.name || "";
        return Ve !== "" ? oe + "(" + Ve + ")" : oe;
      }
      function X(h) {
        return h.displayName || "Context";
      }
      function ve(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case H:
            return "Fragment";
          case Q:
            return "Portal";
          case le:
            return "Profiler";
          case S:
            return "StrictMode";
          case V:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Y:
              var L = h;
              return X(L) + ".Consumer";
            case B:
              var oe = h;
              return X(oe._context) + ".Provider";
            case ce:
              return j(h, h.render, "ForwardRef");
            case he:
              var me = h.displayName || null;
              return me !== null ? me : ve(h.type) || "Memo";
            case Ue: {
              var Ve = h, bt = Ve._payload, Ke = Ve._init;
              try {
                return ve(Ke(bt));
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
      }, Ge, _t, Ct;
      Ct = {};
      function Bt(h) {
        if (Je.call(h, "ref")) {
          var L = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ln(h) {
        if (Je.call(h, "key")) {
          var L = Object.getOwnPropertyDescriptor(h, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function z(h, L) {
        var oe = function() {
          Ge || (Ge = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        oe.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: oe,
          configurable: !0
        });
      }
      function Z(h, L) {
        var oe = function() {
          _t || (_t = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        oe.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: oe,
          configurable: !0
        });
      }
      function A(h) {
        if (typeof h.ref == "string" && D.current && h.__self && D.current.stateNode !== h.__self) {
          var L = ve(D.current.type);
          Ct[L] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, h.ref), Ct[L] = !0);
        }
      }
      var ae = function(h, L, oe, me, Ve, bt, Ke) {
        var Tt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: h,
          key: L,
          ref: oe,
          props: Ke,
          // Record the component responsible for creating this element.
          _owner: bt
        };
        return Tt._store = {}, Object.defineProperty(Tt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Tt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: me
        }), Object.defineProperty(Tt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ve
        }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
      };
      function Ce(h, L, oe) {
        var me, Ve = {}, bt = null, Ke = null, Tt = null, Qt = null;
        if (L != null) {
          Bt(L) && (Ke = L.ref, A(L)), ln(L) && (F(L.key), bt = "" + L.key), Tt = L.__self === void 0 ? null : L.__self, Qt = L.__source === void 0 ? null : L.__source;
          for (me in L)
            Je.call(L, me) && !et.hasOwnProperty(me) && (Ve[me] = L[me]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          Ve.children = oe;
        else if (rn > 1) {
          for (var zn = Array(rn), En = 0; En < rn; En++)
            zn[En] = arguments[En + 2];
          Object.freeze && Object.freeze(zn), Ve.children = zn;
        }
        if (h && h.defaultProps) {
          var It = h.defaultProps;
          for (me in It)
            Ve[me] === void 0 && (Ve[me] = It[me]);
        }
        if (bt || Ke) {
          var bn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          bt && z(Ve, bn), Ke && Z(Ve, bn);
        }
        return ae(h, bt, Ke, Tt, Qt, D.current, Ve);
      }
      function gt(h, L) {
        var oe = ae(h.type, L, h.ref, h._self, h._source, h._owner, h.props);
        return oe;
      }
      function ct(h, L, oe) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var me, Ve = G({}, h.props), bt = h.key, Ke = h.ref, Tt = h._self, Qt = h._source, rn = h._owner;
        if (L != null) {
          Bt(L) && (Ke = L.ref, rn = D.current), ln(L) && (F(L.key), bt = "" + L.key);
          var zn;
          h.type && h.type.defaultProps && (zn = h.type.defaultProps);
          for (me in L)
            Je.call(L, me) && !et.hasOwnProperty(me) && (L[me] === void 0 && zn !== void 0 ? Ve[me] = zn[me] : Ve[me] = L[me]);
        }
        var En = arguments.length - 2;
        if (En === 1)
          Ve.children = oe;
        else if (En > 1) {
          for (var It = Array(En), bn = 0; bn < En; bn++)
            It[bn] = arguments[bn + 2];
          Ve.children = It;
        }
        return ae(h.type, bt, Ke, Tt, Qt, rn, Ve);
      }
      function Lt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === _;
      }
      var Yt = ".", Dn = ":";
      function an(h) {
        var L = /[=:]/g, oe = {
          "=": "=0",
          ":": "=2"
        }, me = h.replace(L, function(Ve) {
          return oe[Ve];
        });
        return "$" + me;
      }
      var un = !1, mn = /\/+/g;
      function ta(h) {
        return h.replace(mn, "$&/");
      }
      function or(h, L) {
        return typeof h == "object" && h !== null && h.key != null ? (F(h.key), an("" + h.key)) : L.toString(36);
      }
      function Ar(h, L, oe, me, Ve) {
        var bt = typeof h;
        (bt === "undefined" || bt === "boolean") && (h = null);
        var Ke = !1;
        if (h === null)
          Ke = !0;
        else
          switch (bt) {
            case "string":
            case "number":
              Ke = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case _:
                case Q:
                  Ke = !0;
              }
          }
        if (Ke) {
          var Tt = h, Qt = Ve(Tt), rn = me === "" ? Yt + or(Tt, 0) : me;
          if (ht(Qt)) {
            var zn = "";
            rn != null && (zn = ta(rn) + "/"), Ar(Qt, L, zn, "", function(ld) {
              return ld;
            });
          } else Qt != null && (Lt(Qt) && (Qt.key && (!Tt || Tt.key !== Qt.key) && F(Qt.key), Qt = gt(
            Qt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            oe + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Qt.key && (!Tt || Tt.key !== Qt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ta("" + Qt.key) + "/"
            ) : "") + rn
          )), L.push(Qt));
          return 1;
        }
        var En, It, bn = 0, jn = me === "" ? Yt : me + Dn;
        if (ht(h))
          for (var ko = 0; ko < h.length; ko++)
            En = h[ko], It = jn + or(En, ko), bn += Ar(En, L, oe, It, Ve);
        else {
          var rs = g(h);
          if (typeof rs == "function") {
            var Gi = h;
            rs === Gi.entries && (un || Ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), un = !0);
            for (var as = rs.call(Gi), vl, od = 0; !(vl = as.next()).done; )
              En = vl.value, It = jn + or(En, od++), bn += Ar(En, L, oe, It, Ve);
          } else if (bt === "object") {
            var yc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (yc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : yc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return bn;
      }
      function Ma(h, L, oe) {
        if (h == null)
          return h;
        var me = [], Ve = 0;
        return Ar(h, me, "", "", function(bt) {
          return L.call(oe, bt, Ve++);
        }), me;
      }
      function Ja(h) {
        var L = 0;
        return Ma(h, function() {
          L++;
        }), L;
      }
      function Wi(h, L, oe) {
        Ma(h, function() {
          L.apply(this, arguments);
        }, oe);
      }
      function bo(h) {
        return Ma(h, function(L) {
          return L;
        }) || [];
      }
      function Ro(h) {
        if (!Lt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ll(h) {
        var L = {
          $$typeof: Y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
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
          $$typeof: B,
          _context: L
        };
        var oe = !1, me = !1, Ve = !1;
        {
          var bt = {
            $$typeof: Y,
            _context: L
          };
          Object.defineProperties(bt, {
            Provider: {
              get: function() {
                return me || (me = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
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
                return oe || (oe = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Ke) {
                Ve || (Ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ke), Ve = !0);
              }
            }
          }), L.Consumer = bt;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Ur = -1, jr = 0, yr = 1, gi = 2;
      function ei(h) {
        if (h._status === Ur) {
          var L = h._result, oe = L();
          if (oe.then(function(bt) {
            if (h._status === jr || h._status === Ur) {
              var Ke = h;
              Ke._status = yr, Ke._result = bt;
            }
          }, function(bt) {
            if (h._status === jr || h._status === Ur) {
              var Ke = h;
              Ke._status = gi, Ke._result = bt;
            }
          }), h._status === Ur) {
            var me = h;
            me._status = jr, me._result = oe;
          }
        }
        if (h._status === yr) {
          var Ve = h._result;
          return Ve === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ve), "default" in Ve || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ve), Ve.default;
        } else
          throw h._result;
      }
      function Si(h) {
        var L = {
          // We use these fields to store the result.
          _status: Ur,
          _result: h
        }, oe = {
          $$typeof: Ue,
          _payload: L,
          _init: ei
        };
        {
          var me, Ve;
          Object.defineProperties(oe, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return me;
              },
              set: function(bt) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), me = bt, Object.defineProperty(oe, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ve;
              },
              set: function(bt) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ve = bt, Object.defineProperty(oe, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return oe;
      }
      function Ei(h) {
        h != null && h.$$typeof === he ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? xe("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: ce,
          render: h
        };
        {
          var oe;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return oe;
            },
            set: function(me) {
              oe = me, !h.name && !h.displayName && (h.displayName = me);
            }
          });
        }
        return L;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function De(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === H || h === le || qe || h === S || h === V || h === ne || Se || h === ye || _e || Pe || ke || typeof h == "object" && h !== null && (h.$$typeof === Ue || h.$$typeof === he || h.$$typeof === B || h.$$typeof === Y || h.$$typeof === ce || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === N || h.getModuleId !== void 0));
      }
      function Ze(h, L) {
        De(h) || xe("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var oe = {
          $$typeof: he,
          type: h,
          compare: L === void 0 ? null : L
        };
        {
          var me;
          Object.defineProperty(oe, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return me;
            },
            set: function(Ve) {
              me = Ve, !h.name && !h.displayName && (h.displayName = Ve);
            }
          });
        }
        return oe;
      }
      function st() {
        var h = T.current;
        return h === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function jt(h) {
        var L = st();
        if (h._context !== void 0) {
          var oe = h._context;
          oe.Consumer === h ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : oe.Provider === h && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(h);
      }
      function Pt(h) {
        var L = st();
        return L.useState(h);
      }
      function Gt(h, L, oe) {
        var me = st();
        return me.useReducer(h, L, oe);
      }
      function Wt(h) {
        var L = st();
        return L.useRef(h);
      }
      function $n(h, L) {
        var oe = st();
        return oe.useEffect(h, L);
      }
      function kn(h, L) {
        var oe = st();
        return oe.useInsertionEffect(h, L);
      }
      function Ln(h, L) {
        var oe = st();
        return oe.useLayoutEffect(h, L);
      }
      function gr(h, L) {
        var oe = st();
        return oe.useCallback(h, L);
      }
      function ti(h, L) {
        var oe = st();
        return oe.useMemo(h, L);
      }
      function ni(h, L, oe) {
        var me = st();
        return me.useImperativeHandle(h, L, oe);
      }
      function Ht(h, L) {
        {
          var oe = st();
          return oe.useDebugValue(h, L);
        }
      }
      function Vt() {
        var h = st();
        return h.useTransition();
      }
      function ri(h) {
        var L = st();
        return L.useDeferredValue(h);
      }
      function ul() {
        var h = st();
        return h.useId();
      }
      function sl(h, L, oe) {
        var me = st();
        return me.useSyncExternalStore(h, L, oe);
      }
      var Co = 0, tu, wo, na, Ju, Hr, hc, mc;
      function nu() {
      }
      nu.__reactDisabledLog = !0;
      function To() {
        {
          if (Co === 0) {
            tu = console.log, wo = console.info, na = console.warn, Ju = console.error, Hr = console.group, hc = console.groupCollapsed, mc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: nu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Co++;
        }
      }
      function Ea() {
        {
          if (Co--, Co === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: G({}, h, {
                value: tu
              }),
              info: G({}, h, {
                value: wo
              }),
              warn: G({}, h, {
                value: na
              }),
              error: G({}, h, {
                value: Ju
              }),
              group: G({}, h, {
                value: Hr
              }),
              groupCollapsed: G({}, h, {
                value: hc
              }),
              groupEnd: G({}, h, {
                value: mc
              })
            });
          }
          Co < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ai = Qe.ReactCurrentDispatcher, ii;
      function ru(h, L, oe) {
        {
          if (ii === void 0)
            try {
              throw Error();
            } catch (Ve) {
              var me = Ve.stack.trim().match(/\n( *(at )?)/);
              ii = me && me[1] || "";
            }
          return `
` + ii + h;
        }
      }
      var cl = !1, xo;
      {
        var au = typeof WeakMap == "function" ? WeakMap : Map;
        xo = new au();
      }
      function iu(h, L) {
        if (!h || cl)
          return "";
        {
          var oe = xo.get(h);
          if (oe !== void 0)
            return oe;
        }
        var me;
        cl = !0;
        var Ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var bt;
        bt = ai.current, ai.current = null, To();
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
              } catch (jn) {
                me = jn;
              }
              Reflect.construct(h, [], Ke);
            } else {
              try {
                Ke.call();
              } catch (jn) {
                me = jn;
              }
              h.call(Ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (jn) {
              me = jn;
            }
            h();
          }
        } catch (jn) {
          if (jn && me && typeof jn.stack == "string") {
            for (var Tt = jn.stack.split(`
`), Qt = me.stack.split(`
`), rn = Tt.length - 1, zn = Qt.length - 1; rn >= 1 && zn >= 0 && Tt[rn] !== Qt[zn]; )
              zn--;
            for (; rn >= 1 && zn >= 0; rn--, zn--)
              if (Tt[rn] !== Qt[zn]) {
                if (rn !== 1 || zn !== 1)
                  do
                    if (rn--, zn--, zn < 0 || Tt[rn] !== Qt[zn]) {
                      var En = `
` + Tt[rn].replace(" at new ", " at ");
                      return h.displayName && En.includes("<anonymous>") && (En = En.replace("<anonymous>", h.displayName)), typeof h == "function" && xo.set(h, En), En;
                    }
                  while (rn >= 1 && zn >= 0);
                break;
              }
          }
        } finally {
          cl = !1, ai.current = bt, Ea(), Error.prepareStackTrace = Ve;
        }
        var It = h ? h.displayName || h.name : "", bn = It ? ru(It) : "";
        return typeof h == "function" && xo.set(h, bn), bn;
      }
      function qi(h, L, oe) {
        return iu(h, !1);
      }
      function ad(h) {
        var L = h.prototype;
        return !!(L && L.isReactComponent);
      }
      function Yi(h, L, oe) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return iu(h, ad(h));
        if (typeof h == "string")
          return ru(h);
        switch (h) {
          case V:
            return ru("Suspense");
          case ne:
            return ru("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ce:
              return qi(h.render);
            case he:
              return Yi(h.type, L, oe);
            case Ue: {
              var me = h, Ve = me._payload, bt = me._init;
              try {
                return Yi(bt(Ve), L, oe);
              } catch {
              }
            }
          }
        return "";
      }
      var sn = {}, ou = Qe.ReactDebugCurrentFrame;
      function nn(h) {
        if (h) {
          var L = h._owner, oe = Yi(h.type, h._source, L ? L.type : null);
          ou.setExtraStackFrame(oe);
        } else
          ou.setExtraStackFrame(null);
      }
      function es(h, L, oe, me, Ve) {
        {
          var bt = Function.call.bind(Je);
          for (var Ke in h)
            if (bt(h, Ke)) {
              var Tt = void 0;
              try {
                if (typeof h[Ke] != "function") {
                  var Qt = Error((me || "React class") + ": " + oe + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Qt.name = "Invariant Violation", Qt;
                }
                Tt = h[Ke](L, Ke, me, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (rn) {
                Tt = rn;
              }
              Tt && !(Tt instanceof Error) && (nn(Ve), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", oe, Ke, typeof Tt), nn(null)), Tt instanceof Error && !(Tt.message in sn) && (sn[Tt.message] = !0, nn(Ve), xe("Failed %s type: %s", oe, Tt.message), nn(null));
            }
        }
      }
      function bi(h) {
        if (h) {
          var L = h._owner, oe = Yi(h.type, h._source, L ? L.type : null);
          de(oe);
        } else
          de(null);
      }
      var Nt;
      Nt = !1;
      function lu() {
        if (D.current) {
          var h = ve(D.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Sr(h) {
        if (h !== void 0) {
          var L = h.fileName.replace(/^.*[\\\/]/, ""), oe = h.lineNumber;
          return `

Check your code at ` + L + ":" + oe + ".";
        }
        return "";
      }
      function Ri(h) {
        return h != null ? Sr(h.__source) : "";
      }
      var Fr = {};
      function Ci(h) {
        var L = lu();
        if (!L) {
          var oe = typeof h == "string" ? h : h.displayName || h.name;
          oe && (L = `

Check the top-level render call using <` + oe + ">.");
        }
        return L;
      }
      function Nn(h, L) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var oe = Ci(L);
          if (!Fr[oe]) {
            Fr[oe] = !0;
            var me = "";
            h && h._owner && h._owner !== D.current && (me = " It was passed a child from " + ve(h._owner.type) + "."), bi(h), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, me), bi(null);
          }
        }
      }
      function Sn(h, L) {
        if (typeof h == "object") {
          if (ht(h))
            for (var oe = 0; oe < h.length; oe++) {
              var me = h[oe];
              Lt(me) && Nn(me, L);
            }
          else if (Lt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Ve = g(h);
            if (typeof Ve == "function" && Ve !== h.entries)
              for (var bt = Ve.call(h), Ke; !(Ke = bt.next()).done; )
                Lt(Ke.value) && Nn(Ke.value, L);
          }
        }
      }
      function _o(h) {
        {
          var L = h.type;
          if (L == null || typeof L == "string")
            return;
          var oe;
          if (typeof L == "function")
            oe = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === ce || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === he))
            oe = L.propTypes;
          else
            return;
          if (oe) {
            var me = ve(L);
            es(oe, h.props, "prop", me, h);
          } else if (L.PropTypes !== void 0 && !Nt) {
            Nt = !0;
            var Ve = ve(L);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ve || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function lr(h) {
        {
          for (var L = Object.keys(h.props), oe = 0; oe < L.length; oe++) {
            var me = L[oe];
            if (me !== "children" && me !== "key") {
              bi(h), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), bi(null);
              break;
            }
          }
          h.ref !== null && (bi(h), xe("Invalid attribute `ref` supplied to `React.Fragment`."), bi(null));
        }
      }
      function Br(h, L, oe) {
        var me = De(h);
        if (!me) {
          var Ve = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = Ri(L);
          bt ? Ve += bt : Ve += lu();
          var Ke;
          h === null ? Ke = "null" : ht(h) ? Ke = "array" : h !== void 0 && h.$$typeof === _ ? (Ke = "<" + (ve(h.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof h, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, Ve);
        }
        var Tt = Ce.apply(this, arguments);
        if (Tt == null)
          return Tt;
        if (me)
          for (var Qt = 2; Qt < arguments.length; Qt++)
            Sn(arguments[Qt], h);
        return h === H ? lr(Tt) : _o(Tt), Tt;
      }
      var La = !1;
      function fl(h) {
        var L = Br.bind(null, h);
        return L.type = h, La || (La = !0, Ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return Ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), L;
      }
      function ts(h, L, oe) {
        for (var me = ct.apply(this, arguments), Ve = 2; Ve < arguments.length; Ve++)
          Sn(arguments[Ve], me.type);
        return _o(me), me;
      }
      function ns(h, L) {
        var oe = w.transition;
        w.transition = {};
        var me = w.transition;
        w.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (w.transition = oe, oe === null && me._updatedFibers) {
            var Ve = me._updatedFibers.size;
            Ve > 10 && Ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), me._updatedFibers.clear();
          }
        }
      }
      var Oo = !1, dl = null;
      function id(h) {
        if (dl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), oe = y && y[L];
            dl = oe.call(y, "timers").setImmediate;
          } catch {
            dl = function(Ve) {
              Oo === !1 && (Oo = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var bt = new MessageChannel();
              bt.port1.onmessage = Ve, bt.port2.postMessage(void 0);
            };
          }
        return dl(h);
      }
      var Na = 0, oi = !1;
      function wi(h) {
        {
          var L = Na;
          Na++, b.current === null && (b.current = []);
          var oe = b.isBatchingLegacy, me;
          try {
            if (b.isBatchingLegacy = !0, me = h(), !oe && b.didScheduleLegacyUpdate) {
              var Ve = b.current;
              Ve !== null && (b.didScheduleLegacyUpdate = !1, Do(Ve));
            }
          } catch (It) {
            throw Pa(L), It;
          } finally {
            b.isBatchingLegacy = oe;
          }
          if (me !== null && typeof me == "object" && typeof me.then == "function") {
            var bt = me, Ke = !1, Tt = {
              then: function(It, bn) {
                Ke = !0, bt.then(function(jn) {
                  Pa(L), Na === 0 ? uu(jn, It, bn) : It(jn);
                }, function(jn) {
                  Pa(L), bn(jn);
                });
              }
            };
            return !oi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ke || (oi = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Tt;
          } else {
            var Qt = me;
            if (Pa(L), Na === 0) {
              var rn = b.current;
              rn !== null && (Do(rn), b.current = null);
              var zn = {
                then: function(It, bn) {
                  b.current === null ? (b.current = [], uu(Qt, It, bn)) : It(Qt);
                }
              };
              return zn;
            } else {
              var En = {
                then: function(It, bn) {
                  It(Qt);
                }
              };
              return En;
            }
          }
        }
      }
      function Pa(h) {
        h !== Na - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = h;
      }
      function uu(h, L, oe) {
        {
          var me = b.current;
          if (me !== null)
            try {
              Do(me), id(function() {
                me.length === 0 ? (b.current = null, L(h)) : uu(h, L, oe);
              });
            } catch (Ve) {
              oe(Ve);
            }
          else
            L(h);
        }
      }
      var su = !1;
      function Do(h) {
        if (!su) {
          su = !0;
          var L = 0;
          try {
            for (; L < h.length; L++) {
              var oe = h[L];
              do
                oe = oe(!0);
              while (oe !== null);
            }
            h.length = 0;
          } catch (me) {
            throw h = h.slice(L + 1), me;
          } finally {
            su = !1;
          }
        }
      }
      var pl = Br, cu = ts, fu = fl, li = {
        map: Ma,
        forEach: Wi,
        count: Ja,
        toArray: bo,
        only: Ro
      };
      R.Children = li, R.Component = Oe, R.Fragment = H, R.Profiler = le, R.PureComponent = Re, R.StrictMode = S, R.Suspense = V, R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qe, R.act = wi, R.cloneElement = cu, R.createContext = ll, R.createElement = pl, R.createFactory = fu, R.createRef = rt, R.forwardRef = Ei, R.isValidElement = Lt, R.lazy = Si, R.memo = Ze, R.startTransition = ns, R.unstable_act = wi, R.useCallback = gr, R.useContext = jt, R.useDebugValue = Ht, R.useDeferredValue = ri, R.useEffect = $n, R.useId = ul, R.useImperativeHandle = ni, R.useInsertionEffect = kn, R.useLayoutEffect = Ln, R.useMemo = ti, R.useReducer = Gt, R.useRef = Wt, R.useState = Pt, R.useSyncExternalStore = sl, R.useTransition = Vt, R.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Sv, Sv.exports)), Sv.exports;
}
var $C;
function Sa() {
  return $C || ($C = 1, process.env.NODE_ENV === "production" ? py.exports = PD() : py.exports = AD()), py.exports;
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
var WC;
function UD() {
  if (WC) return sv;
  WC = 1;
  var y = Sa(), R = Symbol.for("react.element"), m = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, Q = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(le, B, Y) {
    var ce, V = {}, ne = null, he = null;
    Y !== void 0 && (ne = "" + Y), B.key !== void 0 && (ne = "" + B.key), B.ref !== void 0 && (he = B.ref);
    for (ce in B) _.call(B, ce) && !H.hasOwnProperty(ce) && (V[ce] = B[ce]);
    if (le && le.defaultProps) for (ce in B = le.defaultProps, B) V[ce] === void 0 && (V[ce] = B[ce]);
    return { $$typeof: R, type: le, key: ne, ref: he, props: V, _owner: Q.current };
  }
  return sv.Fragment = m, sv.jsx = S, sv.jsxs = S, sv;
}
var cv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qC;
function jD() {
  return qC || (qC = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Sa(), R = Symbol.for("react.element"), m = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), le = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), Ue = Symbol.iterator, ye = "@@iterator";
    function K(N) {
      if (N === null || typeof N != "object")
        return null;
      var De = Ue && N[Ue] || N[ye];
      return typeof De == "function" ? De : null;
    }
    var k = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(N) {
      {
        for (var De = arguments.length, Ze = new Array(De > 1 ? De - 1 : 0), st = 1; st < De; st++)
          Ze[st - 1] = arguments[st];
        T("error", N, Ze);
      }
    }
    function T(N, De, Ze) {
      {
        var st = k.ReactDebugCurrentFrame, jt = st.getStackAddendum();
        jt !== "" && (De += "%s", Ze = Ze.concat([jt]));
        var Pt = Ze.map(function(Gt) {
          return String(Gt);
        });
        Pt.unshift("Warning: " + De), Function.prototype.apply.call(console[N], console, Pt);
      }
    }
    var w = !1, b = !1, D = !1, P = !1, fe = !1, de;
    de = Symbol.for("react.module.reference");
    function _e(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === _ || N === H || fe || N === Q || N === Y || N === ce || P || N === he || w || b || D || typeof N == "object" && N !== null && (N.$$typeof === ne || N.$$typeof === V || N.$$typeof === S || N.$$typeof === le || N.$$typeof === B || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === de || N.getModuleId !== void 0));
    }
    function Pe(N, De, Ze) {
      var st = N.displayName;
      if (st)
        return st;
      var jt = De.displayName || De.name || "";
      return jt !== "" ? Ze + "(" + jt + ")" : Ze;
    }
    function ke(N) {
      return N.displayName || "Context";
    }
    function Se(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case _:
          return "Fragment";
        case m:
          return "Portal";
        case H:
          return "Profiler";
        case Q:
          return "StrictMode";
        case Y:
          return "Suspense";
        case ce:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case le:
            var De = N;
            return ke(De) + ".Consumer";
          case S:
            var Ze = N;
            return ke(Ze._context) + ".Provider";
          case B:
            return Pe(N, N.render, "ForwardRef");
          case V:
            var st = N.displayName || null;
            return st !== null ? st : Se(N.type) || "Memo";
          case ne: {
            var jt = N, Pt = jt._payload, Gt = jt._init;
            try {
              return Se(Gt(Pt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var qe = Object.assign, Qe = 0, Ie, xe, ge, Be, I, O, G;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function Oe() {
      {
        if (Qe === 0) {
          Ie = console.log, xe = console.info, ge = console.warn, Be = console.error, I = console.group, O = console.groupCollapsed, G = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
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
        Qe++;
      }
    }
    function Ye() {
      {
        if (Qe--, Qe === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: qe({}, N, {
              value: Ie
            }),
            info: qe({}, N, {
              value: xe
            }),
            warn: qe({}, N, {
              value: ge
            }),
            error: qe({}, N, {
              value: Be
            }),
            group: qe({}, N, {
              value: I
            }),
            groupCollapsed: qe({}, N, {
              value: O
            }),
            groupEnd: qe({}, N, {
              value: G
            })
          });
        }
        Qe < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $e = k.ReactCurrentDispatcher, We;
    function pe(N, De, Ze) {
      {
        if (We === void 0)
          try {
            throw Error();
          } catch (jt) {
            var st = jt.stack.trim().match(/\n( *(at )?)/);
            We = st && st[1] || "";
          }
        return `
` + We + N;
      }
    }
    var Re = !1, je;
    {
      var rt = typeof WeakMap == "function" ? WeakMap : Map;
      je = new rt();
    }
    function we(N, De) {
      if (!N || Re)
        return "";
      {
        var Ze = je.get(N);
        if (Ze !== void 0)
          return Ze;
      }
      var st;
      Re = !0;
      var jt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pt;
      Pt = $e.current, $e.current = null, Oe();
      try {
        if (De) {
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
`), $n = st.stack.split(`
`), kn = Wt.length - 1, Ln = $n.length - 1; kn >= 1 && Ln >= 0 && Wt[kn] !== $n[Ln]; )
            Ln--;
          for (; kn >= 1 && Ln >= 0; kn--, Ln--)
            if (Wt[kn] !== $n[Ln]) {
              if (kn !== 1 || Ln !== 1)
                do
                  if (kn--, Ln--, Ln < 0 || Wt[kn] !== $n[Ln]) {
                    var gr = `
` + Wt[kn].replace(" at new ", " at ");
                    return N.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", N.displayName)), typeof N == "function" && je.set(N, gr), gr;
                  }
                while (kn >= 1 && Ln >= 0);
              break;
            }
        }
      } finally {
        Re = !1, $e.current = Pt, Ye(), Error.prepareStackTrace = jt;
      }
      var ti = N ? N.displayName || N.name : "", ni = ti ? pe(ti) : "";
      return typeof N == "function" && je.set(N, ni), ni;
    }
    function ht(N, De, Ze) {
      return we(N, !1);
    }
    function zt(N) {
      var De = N.prototype;
      return !!(De && De.isReactComponent);
    }
    function $t(N, De, Ze) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return we(N, zt(N));
      if (typeof N == "string")
        return pe(N);
      switch (N) {
        case Y:
          return pe("Suspense");
        case ce:
          return pe("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case B:
            return ht(N.render);
          case V:
            return $t(N.type, De, Ze);
          case ne: {
            var st = N, jt = st._payload, Pt = st._init;
            try {
              return $t(Pt(jt), De, Ze);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, F = {}, j = k.ReactDebugCurrentFrame;
    function X(N) {
      if (N) {
        var De = N._owner, Ze = $t(N.type, N._source, De ? De.type : null);
        j.setExtraStackFrame(Ze);
      } else
        j.setExtraStackFrame(null);
    }
    function ve(N, De, Ze, st, jt) {
      {
        var Pt = Function.call.bind(Mt);
        for (var Gt in N)
          if (Pt(N, Gt)) {
            var Wt = void 0;
            try {
              if (typeof N[Gt] != "function") {
                var $n = Error((st || "React class") + ": " + Ze + " type `" + Gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $n.name = "Invariant Violation", $n;
              }
              Wt = N[Gt](De, Gt, st, Ze, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (kn) {
              Wt = kn;
            }
            Wt && !(Wt instanceof Error) && (X(jt), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", st || "React class", Ze, Gt, typeof Wt), X(null)), Wt instanceof Error && !(Wt.message in F) && (F[Wt.message] = !0, X(jt), g("Failed %s type: %s", Ze, Wt.message), X(null));
          }
      }
    }
    var Je = Array.isArray;
    function et(N) {
      return Je(N);
    }
    function Ge(N) {
      {
        var De = typeof Symbol == "function" && Symbol.toStringTag, Ze = De && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Ze;
      }
    }
    function _t(N) {
      try {
        return Ct(N), !1;
      } catch {
        return !0;
      }
    }
    function Ct(N) {
      return "" + N;
    }
    function Bt(N) {
      if (_t(N))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(N)), Ct(N);
    }
    var ln = k.ReactCurrentOwner, z = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Z, A;
    function ae(N) {
      if (Mt.call(N, "ref")) {
        var De = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (De && De.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Ce(N) {
      if (Mt.call(N, "key")) {
        var De = Object.getOwnPropertyDescriptor(N, "key").get;
        if (De && De.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function gt(N, De) {
      typeof N.ref == "string" && ln.current;
    }
    function ct(N, De) {
      {
        var Ze = function() {
          Z || (Z = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", De));
        };
        Ze.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Ze,
          configurable: !0
        });
      }
    }
    function Lt(N, De) {
      {
        var Ze = function() {
          A || (A = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", De));
        };
        Ze.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Ze,
          configurable: !0
        });
      }
    }
    var Yt = function(N, De, Ze, st, jt, Pt, Gt) {
      var Wt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: N,
        key: De,
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
        value: jt
      }), Object.freeze && (Object.freeze(Wt.props), Object.freeze(Wt)), Wt;
    };
    function Dn(N, De, Ze, st, jt) {
      {
        var Pt, Gt = {}, Wt = null, $n = null;
        Ze !== void 0 && (Bt(Ze), Wt = "" + Ze), Ce(De) && (Bt(De.key), Wt = "" + De.key), ae(De) && ($n = De.ref, gt(De, jt));
        for (Pt in De)
          Mt.call(De, Pt) && !z.hasOwnProperty(Pt) && (Gt[Pt] = De[Pt]);
        if (N && N.defaultProps) {
          var kn = N.defaultProps;
          for (Pt in kn)
            Gt[Pt] === void 0 && (Gt[Pt] = kn[Pt]);
        }
        if (Wt || $n) {
          var Ln = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Wt && ct(Gt, Ln), $n && Lt(Gt, Ln);
        }
        return Yt(N, Wt, $n, jt, st, ln.current, Gt);
      }
    }
    var an = k.ReactCurrentOwner, un = k.ReactDebugCurrentFrame;
    function mn(N) {
      if (N) {
        var De = N._owner, Ze = $t(N.type, N._source, De ? De.type : null);
        un.setExtraStackFrame(Ze);
      } else
        un.setExtraStackFrame(null);
    }
    var ta;
    ta = !1;
    function or(N) {
      return typeof N == "object" && N !== null && N.$$typeof === R;
    }
    function Ar() {
      {
        if (an.current) {
          var N = Se(an.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Ma(N) {
      return "";
    }
    var Ja = {};
    function Wi(N) {
      {
        var De = Ar();
        if (!De) {
          var Ze = typeof N == "string" ? N : N.displayName || N.name;
          Ze && (De = `

Check the top-level render call using <` + Ze + ">.");
        }
        return De;
      }
    }
    function bo(N, De) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Ze = Wi(De);
        if (Ja[Ze])
          return;
        Ja[Ze] = !0;
        var st = "";
        N && N._owner && N._owner !== an.current && (st = " It was passed a child from " + Se(N._owner.type) + "."), mn(N), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ze, st), mn(null);
      }
    }
    function Ro(N, De) {
      {
        if (typeof N != "object")
          return;
        if (et(N))
          for (var Ze = 0; Ze < N.length; Ze++) {
            var st = N[Ze];
            or(st) && bo(st, De);
          }
        else if (or(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var jt = K(N);
          if (typeof jt == "function" && jt !== N.entries)
            for (var Pt = jt.call(N), Gt; !(Gt = Pt.next()).done; )
              or(Gt.value) && bo(Gt.value, De);
        }
      }
    }
    function ll(N) {
      {
        var De = N.type;
        if (De == null || typeof De == "string")
          return;
        var Ze;
        if (typeof De == "function")
          Ze = De.propTypes;
        else if (typeof De == "object" && (De.$$typeof === B || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        De.$$typeof === V))
          Ze = De.propTypes;
        else
          return;
        if (Ze) {
          var st = Se(De);
          ve(Ze, N.props, "prop", st, N);
        } else if (De.PropTypes !== void 0 && !ta) {
          ta = !0;
          var jt = Se(De);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", jt || "Unknown");
        }
        typeof De.getDefaultProps == "function" && !De.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(N) {
      {
        for (var De = Object.keys(N.props), Ze = 0; Ze < De.length; Ze++) {
          var st = De[Ze];
          if (st !== "children" && st !== "key") {
            mn(N), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", st), mn(null);
            break;
          }
        }
        N.ref !== null && (mn(N), g("Invalid attribute `ref` supplied to `React.Fragment`."), mn(null));
      }
    }
    var jr = {};
    function yr(N, De, Ze, st, jt, Pt) {
      {
        var Gt = _e(N);
        if (!Gt) {
          var Wt = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Wt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $n = Ma();
          $n ? Wt += $n : Wt += Ar();
          var kn;
          N === null ? kn = "null" : et(N) ? kn = "array" : N !== void 0 && N.$$typeof === R ? (kn = "<" + (Se(N.type) || "Unknown") + " />", Wt = " Did you accidentally export a JSX literal instead of a component?") : kn = typeof N, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", kn, Wt);
        }
        var Ln = Dn(N, De, Ze, jt, Pt);
        if (Ln == null)
          return Ln;
        if (Gt) {
          var gr = De.children;
          if (gr !== void 0)
            if (st)
              if (et(gr)) {
                for (var ti = 0; ti < gr.length; ti++)
                  Ro(gr[ti], N);
                Object.freeze && Object.freeze(gr);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ro(gr, N);
        }
        if (Mt.call(De, "key")) {
          var ni = Se(N), Ht = Object.keys(De).filter(function(ul) {
            return ul !== "key";
          }), Vt = Ht.length > 0 ? "{key: someKey, " + Ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!jr[ni + Vt]) {
            var ri = Ht.length > 0 ? "{" + Ht.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vt, ni, ri, ni), jr[ni + Vt] = !0;
          }
        }
        return N === _ ? Ur(Ln) : ll(Ln), Ln;
      }
    }
    function gi(N, De, Ze) {
      return yr(N, De, Ze, !0);
    }
    function ei(N, De, Ze) {
      return yr(N, De, Ze, !1);
    }
    var Si = ei, Ei = gi;
    cv.Fragment = _, cv.jsx = Si, cv.jsxs = Ei;
  }()), cv;
}
var YC;
function HD() {
  return YC || (YC = 1, process.env.NODE_ENV === "production" ? dy.exports = UD() : dy.exports = jD()), dy.exports;
}
var yi = HD(), td = {}, vy = { exports: {} }, Ka = {}, hy = { exports: {} }, IE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GC;
function FD() {
  return GC || (GC = 1, function(y) {
    function R(ge, Be) {
      var I = ge.length;
      ge.push(Be);
      e: for (; 0 < I; ) {
        var O = I - 1 >>> 1, G = ge[O];
        if (0 < Q(G, Be)) ge[O] = Be, ge[I] = G, I = O;
        else break e;
      }
    }
    function m(ge) {
      return ge.length === 0 ? null : ge[0];
    }
    function _(ge) {
      if (ge.length === 0) return null;
      var Be = ge[0], I = ge.pop();
      if (I !== Be) {
        ge[0] = I;
        e: for (var O = 0, G = ge.length, Ae = G >>> 1; O < Ae; ) {
          var Oe = 2 * (O + 1) - 1, Ye = ge[Oe], $e = Oe + 1, We = ge[$e];
          if (0 > Q(Ye, I)) $e < G && 0 > Q(We, Ye) ? (ge[O] = We, ge[$e] = I, O = $e) : (ge[O] = Ye, ge[Oe] = I, O = Oe);
          else if ($e < G && 0 > Q(We, I)) ge[O] = We, ge[$e] = I, O = $e;
          else break e;
        }
      }
      return Be;
    }
    function Q(ge, Be) {
      var I = ge.sortIndex - Be.sortIndex;
      return I !== 0 ? I : ge.id - Be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      y.unstable_now = function() {
        return H.now();
      };
    } else {
      var S = Date, le = S.now();
      y.unstable_now = function() {
        return S.now() - le;
      };
    }
    var B = [], Y = [], ce = 1, V = null, ne = 3, he = !1, Ue = !1, ye = !1, K = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function T(ge) {
      for (var Be = m(Y); Be !== null; ) {
        if (Be.callback === null) _(Y);
        else if (Be.startTime <= ge) _(Y), Be.sortIndex = Be.expirationTime, R(B, Be);
        else break;
        Be = m(Y);
      }
    }
    function w(ge) {
      if (ye = !1, T(ge), !Ue) if (m(B) !== null) Ue = !0, Ie(b);
      else {
        var Be = m(Y);
        Be !== null && xe(w, Be.startTime - ge);
      }
    }
    function b(ge, Be) {
      Ue = !1, ye && (ye = !1, k(fe), fe = -1), he = !0;
      var I = ne;
      try {
        for (T(Be), V = m(B); V !== null && (!(V.expirationTime > Be) || ge && !Pe()); ) {
          var O = V.callback;
          if (typeof O == "function") {
            V.callback = null, ne = V.priorityLevel;
            var G = O(V.expirationTime <= Be);
            Be = y.unstable_now(), typeof G == "function" ? V.callback = G : V === m(B) && _(B), T(Be);
          } else _(B);
          V = m(B);
        }
        if (V !== null) var Ae = !0;
        else {
          var Oe = m(Y);
          Oe !== null && xe(w, Oe.startTime - Be), Ae = !1;
        }
        return Ae;
      } finally {
        V = null, ne = I, he = !1;
      }
    }
    var D = !1, P = null, fe = -1, de = 5, _e = -1;
    function Pe() {
      return !(y.unstable_now() - _e < de);
    }
    function ke() {
      if (P !== null) {
        var ge = y.unstable_now();
        _e = ge;
        var Be = !0;
        try {
          Be = P(!0, ge);
        } finally {
          Be ? Se() : (D = !1, P = null);
        }
      } else D = !1;
    }
    var Se;
    if (typeof g == "function") Se = function() {
      g(ke);
    };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Qe = qe.port2;
      qe.port1.onmessage = ke, Se = function() {
        Qe.postMessage(null);
      };
    } else Se = function() {
      K(ke, 0);
    };
    function Ie(ge) {
      P = ge, D || (D = !0, Se());
    }
    function xe(ge, Be) {
      fe = K(function() {
        ge(y.unstable_now());
      }, Be);
    }
    y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(ge) {
      ge.callback = null;
    }, y.unstable_continueExecution = function() {
      Ue || he || (Ue = !0, Ie(b));
    }, y.unstable_forceFrameRate = function(ge) {
      0 > ge || 125 < ge ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < ge ? Math.floor(1e3 / ge) : 5;
    }, y.unstable_getCurrentPriorityLevel = function() {
      return ne;
    }, y.unstable_getFirstCallbackNode = function() {
      return m(B);
    }, y.unstable_next = function(ge) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var Be = 3;
          break;
        default:
          Be = ne;
      }
      var I = ne;
      ne = Be;
      try {
        return ge();
      } finally {
        ne = I;
      }
    }, y.unstable_pauseExecution = function() {
    }, y.unstable_requestPaint = function() {
    }, y.unstable_runWithPriority = function(ge, Be) {
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
      var I = ne;
      ne = ge;
      try {
        return Be();
      } finally {
        ne = I;
      }
    }, y.unstable_scheduleCallback = function(ge, Be, I) {
      var O = y.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? O + I : O) : I = O, ge) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = I + G, ge = { id: ce++, callback: Be, priorityLevel: ge, startTime: I, expirationTime: G, sortIndex: -1 }, I > O ? (ge.sortIndex = I, R(Y, ge), m(B) === null && ge === m(Y) && (ye ? (k(fe), fe = -1) : ye = !0, xe(w, I - O))) : (ge.sortIndex = G, R(B, ge), Ue || he || (Ue = !0, Ie(b))), ge;
    }, y.unstable_shouldYield = Pe, y.unstable_wrapCallback = function(ge) {
      var Be = ne;
      return function() {
        var I = ne;
        ne = Be;
        try {
          return ge.apply(this, arguments);
        } finally {
          ne = I;
        }
      };
    };
  }(IE)), IE;
}
var $E = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QC;
function BD() {
  return QC || (QC = 1, function(y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var R = !1, m = 5;
      function _(A, ae) {
        var Ce = A.length;
        A.push(ae), S(A, ae, Ce);
      }
      function Q(A) {
        return A.length === 0 ? null : A[0];
      }
      function H(A) {
        if (A.length === 0)
          return null;
        var ae = A[0], Ce = A.pop();
        return Ce !== ae && (A[0] = Ce, le(A, Ce, 0)), ae;
      }
      function S(A, ae, Ce) {
        for (var gt = Ce; gt > 0; ) {
          var ct = gt - 1 >>> 1, Lt = A[ct];
          if (B(Lt, ae) > 0)
            A[ct] = ae, A[gt] = Lt, gt = ct;
          else
            return;
        }
      }
      function le(A, ae, Ce) {
        for (var gt = Ce, ct = A.length, Lt = ct >>> 1; gt < Lt; ) {
          var Yt = (gt + 1) * 2 - 1, Dn = A[Yt], an = Yt + 1, un = A[an];
          if (B(Dn, ae) < 0)
            an < ct && B(un, Dn) < 0 ? (A[gt] = un, A[an] = ae, gt = an) : (A[gt] = Dn, A[Yt] = ae, gt = Yt);
          else if (an < ct && B(un, ae) < 0)
            A[gt] = un, A[an] = ae, gt = an;
          else
            return;
        }
      }
      function B(A, ae) {
        var Ce = A.sortIndex - ae.sortIndex;
        return Ce !== 0 ? Ce : A.id - ae.id;
      }
      var Y = 1, ce = 2, V = 3, ne = 4, he = 5;
      function Ue(A, ae) {
      }
      var ye = typeof performance == "object" && typeof performance.now == "function";
      if (ye) {
        var K = performance;
        y.unstable_now = function() {
          return K.now();
        };
      } else {
        var k = Date, g = k.now();
        y.unstable_now = function() {
          return k.now() - g;
        };
      }
      var T = 1073741823, w = -1, b = 250, D = 5e3, P = 1e4, fe = T, de = [], _e = [], Pe = 1, ke = null, Se = V, qe = !1, Qe = !1, Ie = !1, xe = typeof setTimeout == "function" ? setTimeout : null, ge = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function I(A) {
        for (var ae = Q(_e); ae !== null; ) {
          if (ae.callback === null)
            H(_e);
          else if (ae.startTime <= A)
            H(_e), ae.sortIndex = ae.expirationTime, _(de, ae);
          else
            return;
          ae = Q(_e);
        }
      }
      function O(A) {
        if (Ie = !1, I(A), !Qe)
          if (Q(de) !== null)
            Qe = !0, Ct(G);
          else {
            var ae = Q(_e);
            ae !== null && Bt(O, ae.startTime - A);
          }
      }
      function G(A, ae) {
        Qe = !1, Ie && (Ie = !1, ln()), qe = !0;
        var Ce = Se;
        try {
          var gt;
          if (!R) return Ae(A, ae);
        } finally {
          ke = null, Se = Ce, qe = !1;
        }
      }
      function Ae(A, ae) {
        var Ce = ae;
        for (I(Ce), ke = Q(de); ke !== null && !(ke.expirationTime > Ce && (!A || j())); ) {
          var gt = ke.callback;
          if (typeof gt == "function") {
            ke.callback = null, Se = ke.priorityLevel;
            var ct = ke.expirationTime <= Ce, Lt = gt(ct);
            Ce = y.unstable_now(), typeof Lt == "function" ? ke.callback = Lt : ke === Q(de) && H(de), I(Ce);
          } else
            H(de);
          ke = Q(de);
        }
        if (ke !== null)
          return !0;
        var Yt = Q(_e);
        return Yt !== null && Bt(O, Yt.startTime - Ce), !1;
      }
      function Oe(A, ae) {
        switch (A) {
          case Y:
          case ce:
          case V:
          case ne:
          case he:
            break;
          default:
            A = V;
        }
        var Ce = Se;
        Se = A;
        try {
          return ae();
        } finally {
          Se = Ce;
        }
      }
      function Ye(A) {
        var ae;
        switch (Se) {
          case Y:
          case ce:
          case V:
            ae = V;
            break;
          default:
            ae = Se;
            break;
        }
        var Ce = Se;
        Se = ae;
        try {
          return A();
        } finally {
          Se = Ce;
        }
      }
      function $e(A) {
        var ae = Se;
        return function() {
          var Ce = Se;
          Se = ae;
          try {
            return A.apply(this, arguments);
          } finally {
            Se = Ce;
          }
        };
      }
      function We(A, ae, Ce) {
        var gt = y.unstable_now(), ct;
        if (typeof Ce == "object" && Ce !== null) {
          var Lt = Ce.delay;
          typeof Lt == "number" && Lt > 0 ? ct = gt + Lt : ct = gt;
        } else
          ct = gt;
        var Yt;
        switch (A) {
          case Y:
            Yt = w;
            break;
          case ce:
            Yt = b;
            break;
          case he:
            Yt = fe;
            break;
          case ne:
            Yt = P;
            break;
          case V:
          default:
            Yt = D;
            break;
        }
        var Dn = ct + Yt, an = {
          id: Pe++,
          callback: ae,
          priorityLevel: A,
          startTime: ct,
          expirationTime: Dn,
          sortIndex: -1
        };
        return ct > gt ? (an.sortIndex = ct, _(_e, an), Q(de) === null && an === Q(_e) && (Ie ? ln() : Ie = !0, Bt(O, ct - gt))) : (an.sortIndex = Dn, _(de, an), !Qe && !qe && (Qe = !0, Ct(G))), an;
      }
      function pe() {
      }
      function Re() {
        !Qe && !qe && (Qe = !0, Ct(G));
      }
      function je() {
        return Q(de);
      }
      function rt(A) {
        A.callback = null;
      }
      function we() {
        return Se;
      }
      var ht = !1, zt = null, $t = -1, Mt = m, F = -1;
      function j() {
        var A = y.unstable_now() - F;
        return !(A < Mt);
      }
      function X() {
      }
      function ve(A) {
        if (A < 0 || A > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        A > 0 ? Mt = Math.floor(1e3 / A) : Mt = m;
      }
      var Je = function() {
        if (zt !== null) {
          var A = y.unstable_now();
          F = A;
          var ae = !0, Ce = !0;
          try {
            Ce = zt(ae, A);
          } finally {
            Ce ? et() : (ht = !1, zt = null);
          }
        } else
          ht = !1;
      }, et;
      if (typeof Be == "function")
        et = function() {
          Be(Je);
        };
      else if (typeof MessageChannel < "u") {
        var Ge = new MessageChannel(), _t = Ge.port2;
        Ge.port1.onmessage = Je, et = function() {
          _t.postMessage(null);
        };
      } else
        et = function() {
          xe(Je, 0);
        };
      function Ct(A) {
        zt = A, ht || (ht = !0, et());
      }
      function Bt(A, ae) {
        $t = xe(function() {
          A(y.unstable_now());
        }, ae);
      }
      function ln() {
        ge($t), $t = -1;
      }
      var z = X, Z = null;
      y.unstable_IdlePriority = he, y.unstable_ImmediatePriority = Y, y.unstable_LowPriority = ne, y.unstable_NormalPriority = V, y.unstable_Profiling = Z, y.unstable_UserBlockingPriority = ce, y.unstable_cancelCallback = rt, y.unstable_continueExecution = Re, y.unstable_forceFrameRate = ve, y.unstable_getCurrentPriorityLevel = we, y.unstable_getFirstCallbackNode = je, y.unstable_next = Ye, y.unstable_pauseExecution = pe, y.unstable_requestPaint = z, y.unstable_runWithPriority = Oe, y.unstable_scheduleCallback = We, y.unstable_shouldYield = j, y.unstable_wrapCallback = $e, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }($E)), $E;
}
var XC;
function Nw() {
  return XC || (XC = 1, process.env.NODE_ENV === "production" ? hy.exports = FD() : hy.exports = BD()), hy.exports;
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
var KC;
function VD() {
  if (KC) return Ka;
  KC = 1;
  var y = Sa(), R = Nw();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), Q = {};
  function H(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Q[n] = r, n = 0; n < r.length; n++) _.add(r[n]);
  }
  var le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = Object.prototype.hasOwnProperty, Y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ce = {}, V = {};
  function ne(n) {
    return B.call(V, n) ? !0 : B.call(ce, n) ? !1 : Y.test(n) ? V[n] = !0 : (ce[n] = !0, !1);
  }
  function he(n, r, o, u) {
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
  function Ue(n, r, o, u) {
    if (r === null || typeof r > "u" || he(n, r, o, u)) return !0;
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
  function ye(n, r, o, u, c, d, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = E;
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    K[n] = new ye(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    K[r] = new ye(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    K[n] = new ye(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    K[n] = new ye(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    K[n] = new ye(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    K[n] = new ye(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    K[n] = new ye(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    K[n] = new ye(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    K[n] = new ye(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var k = /[\-:]([a-z])/g;
  function g(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      k,
      g
    );
    K[r] = new ye(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(k, g);
    K[r] = new ye(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(k, g);
    K[r] = new ye(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    K[n] = new ye(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), K.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    K[n] = new ye(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function T(n, r, o, u) {
    var c = K.hasOwnProperty(r) ? K[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ue(r, o, c, u) && (o = null), u || c === null ? ne(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var w = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), D = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), Pe = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), Se = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), Qe = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ge = Symbol.iterator;
  function Be(n) {
    return n === null || typeof n != "object" ? null : (n = ge && n[ge] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var I = Object.assign, O;
  function G(n) {
    if (O === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var Ae = !1;
  function Oe(n, r) {
    if (!n || Ae) return "";
    Ae = !0;
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
        } catch (ue) {
          var u = ue;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (ue) {
          u = ue;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (ue) {
          u = ue;
        }
        n();
      }
    } catch (ue) {
      if (ue && u && typeof ue.stack == "string") {
        for (var c = ue.stack.split(`
`), d = u.stack.split(`
`), E = c.length - 1, M = d.length - 1; 1 <= E && 0 <= M && c[E] !== d[M]; ) M--;
        for (; 1 <= E && 0 <= M; E--, M--) if (c[E] !== d[M]) {
          if (E !== 1 || M !== 1)
            do
              if (E--, M--, 0 > M || c[E] !== d[M]) {
                var U = `
` + c[E].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= E && 0 <= M);
          break;
        }
      }
    } finally {
      Ae = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? G(n) : "";
  }
  function Ye(n) {
    switch (n.tag) {
      case 5:
        return G(n.type);
      case 16:
        return G("Lazy");
      case 13:
        return G("Suspense");
      case 19:
        return G("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Oe(n.type, !1), n;
      case 11:
        return n = Oe(n.type.render, !1), n;
      case 1:
        return n = Oe(n.type, !0), n;
      default:
        return "";
    }
  }
  function $e(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case P:
        return "Fragment";
      case D:
        return "Portal";
      case de:
        return "Profiler";
      case fe:
        return "StrictMode";
      case Se:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Pe:
        return (n.displayName || "Context") + ".Consumer";
      case _e:
        return (n._context.displayName || "Context") + ".Provider";
      case ke:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Qe:
        return r = n.displayName || null, r !== null ? r : $e(n.type) || "Memo";
      case Ie:
        r = n._payload, n = n._init;
        try {
          return $e(n(r));
        } catch {
        }
    }
    return null;
  }
  function We(n) {
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
        return $e(r);
      case 8:
        return r === fe ? "StrictMode" : "Mode";
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
  function pe(n) {
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
  function je(n) {
    var r = Re(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, d = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(E) {
        u = "" + E, d.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function rt(n) {
    n._valueTracker || (n._valueTracker = je(n));
  }
  function we(n) {
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
    return I({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function $t(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = pe(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Mt(n, r) {
    r = r.checked, r != null && T(n, "checked", r, !1);
  }
  function F(n, r) {
    Mt(n, r);
    var o = pe(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? X(n, r.type, o) : r.hasOwnProperty("defaultValue") && X(n, r.type, pe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function j(n, r, o) {
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
  var ve = Array.isArray;
  function Je(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++) c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + pe(o), r = null, c = 0; c < n.length; c++) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return I({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ge(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(m(92));
        if (ve(o)) {
          if (1 < o.length) throw Error(m(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: pe(o) };
  }
  function _t(n, r) {
    var o = pe(r.value), u = pe(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Ct(n) {
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
  function A(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ae = {
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
  Object.keys(ae).forEach(function(n) {
    Ce.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ae[r] = ae[n];
    });
  });
  function gt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || ae.hasOwnProperty(n) && ae[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, c = gt(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
    }
  }
  var Lt = I({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Yt(n, r) {
    if (r) {
      if (Lt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
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
  var mn = null, ta = null, or = null;
  function Ar(n) {
    if (n = St(n)) {
      if (typeof mn != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = Hn(r), mn(n.stateNode, n.type, r));
    }
  }
  function Ma(n) {
    ta ? or ? or.push(n) : or = [n] : ta = n;
  }
  function Ja() {
    if (ta) {
      var n = ta, r = or;
      if (or = ta = null, Ar(n), r) for (n = 0; n < r.length; n++) Ar(r[n]);
    }
  }
  function Wi(n, r) {
    return n(r);
  }
  function bo() {
  }
  var Ro = !1;
  function ll(n, r, o) {
    if (Ro) return n(r, o);
    Ro = !0;
    try {
      return Wi(n, r, o);
    } finally {
      Ro = !1, (ta !== null || or !== null) && (bo(), Ja());
    }
  }
  function Ur(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Hn(o);
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
    if (o && typeof o != "function") throw Error(m(231, r, typeof o));
    return o;
  }
  var jr = !1;
  if (le) try {
    var yr = {};
    Object.defineProperty(yr, "passive", { get: function() {
      jr = !0;
    } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
  } catch {
    jr = !1;
  }
  function gi(n, r, o, u, c, d, E, M, U) {
    var ue = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, ue);
    } catch (Le) {
      this.onError(Le);
    }
  }
  var ei = !1, Si = null, Ei = !1, N = null, De = { onError: function(n) {
    ei = !0, Si = n;
  } };
  function Ze(n, r, o, u, c, d, E, M, U) {
    ei = !1, Si = null, gi.apply(De, arguments);
  }
  function st(n, r, o, u, c, d, E, M, U) {
    if (Ze.apply(this, arguments), ei) {
      if (ei) {
        var ue = Si;
        ei = !1, Si = null;
      } else throw Error(m(198));
      Ei || (Ei = !0, N = ue);
    }
  }
  function jt(n) {
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
    if (jt(n) !== n) throw Error(m(188));
  }
  function Wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = jt(n), r === null) throw Error(m(188));
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
        throw Error(m(188));
      }
      if (o.return !== u.return) o = c, u = d;
      else {
        for (var E = !1, M = c.child; M; ) {
          if (M === o) {
            E = !0, o = c, u = d;
            break;
          }
          if (M === u) {
            E = !0, u = c, o = d;
            break;
          }
          M = M.sibling;
        }
        if (!E) {
          for (M = d.child; M; ) {
            if (M === o) {
              E = !0, o = d, u = c;
              break;
            }
            if (M === u) {
              E = !0, u = d, o = c;
              break;
            }
            M = M.sibling;
          }
          if (!E) throw Error(m(189));
        }
      }
      if (o.alternate !== u) throw Error(m(190));
    }
    if (o.tag !== 3) throw Error(m(188));
    return o.stateNode.current === o ? n : r;
  }
  function $n(n) {
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
  var Ln = R.unstable_scheduleCallback, gr = R.unstable_cancelCallback, ti = R.unstable_shouldYield, ni = R.unstable_requestPaint, Ht = R.unstable_now, Vt = R.unstable_getCurrentPriorityLevel, ri = R.unstable_ImmediatePriority, ul = R.unstable_UserBlockingPriority, sl = R.unstable_NormalPriority, Co = R.unstable_LowPriority, tu = R.unstable_IdlePriority, wo = null, na = null;
  function Ju(n) {
    if (na && typeof na.onCommitFiberRoot == "function") try {
      na.onCommitFiberRoot(wo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Hr = Math.clz32 ? Math.clz32 : nu, hc = Math.log, mc = Math.LN2;
  function nu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (hc(n) / mc | 0) | 0;
  }
  var To = 64, Ea = 4194304;
  function ai(n) {
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
  function ii(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, E = o & 268435455;
    if (E !== 0) {
      var M = E & ~c;
      M !== 0 ? u = ai(M) : (d &= E, d !== 0 && (u = ai(d)));
    } else E = o & ~c, E !== 0 ? u = ai(E) : d !== 0 && (u = ai(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Hr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function ru(n, r) {
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
      var E = 31 - Hr(d), M = 1 << E, U = c[E];
      U === -1 ? (!(M & o) || M & u) && (c[E] = ru(M, r)) : U <= r && (n.expiredLanes |= M), d &= ~M;
    }
  }
  function xo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function au() {
    var n = To;
    return To <<= 1, !(To & 4194240) && (To = 64), n;
  }
  function iu(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function qi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Hr(r), n[r] = o;
  }
  function ad(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Hr(o), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~d;
    }
  }
  function Yi(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Hr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var sn = 0;
  function ou(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nn, es, bi, Nt, lu, Sr = !1, Ri = [], Fr = null, Ci = null, Nn = null, Sn = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), lr = [], Br = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function La(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Fr = null;
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
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = St(r), r !== null && es(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ts(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Fr = fl(Fr, n, r, o, u, c), !0;
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
  function ns(n) {
    var r = El(n.target);
    if (r !== null) {
      var o = jt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Pt(o), r !== null) {
            n.blockedOn = r, lu(n.priority, function() {
              bi(o);
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
      var o = cu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        an = u, o.target.dispatchEvent(u), an = null;
      } else return r = St(o), r !== null && es(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function dl(n, r, o) {
    Oo(n) && o.delete(r);
  }
  function id() {
    Sr = !1, Fr !== null && Oo(Fr) && (Fr = null), Ci !== null && Oo(Ci) && (Ci = null), Nn !== null && Oo(Nn) && (Nn = null), Sn.forEach(dl), _o.forEach(dl);
  }
  function Na(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Sr || (Sr = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, id)));
  }
  function oi(n) {
    function r(c) {
      return Na(c, n);
    }
    if (0 < Ri.length) {
      Na(Ri[0], n);
      for (var o = 1; o < Ri.length; o++) {
        var u = Ri[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Fr !== null && Na(Fr, n), Ci !== null && Na(Ci, n), Nn !== null && Na(Nn, n), Sn.forEach(r), _o.forEach(r), o = 0; o < lr.length; o++) u = lr[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < lr.length && (o = lr[0], o.blockedOn === null); ) ns(o), o.blockedOn === null && lr.shift();
  }
  var wi = w.ReactCurrentBatchConfig, Pa = !0;
  function uu(n, r, o, u) {
    var c = sn, d = wi.transition;
    wi.transition = null;
    try {
      sn = 1, Do(n, r, o, u);
    } finally {
      sn = c, wi.transition = d;
    }
  }
  function su(n, r, o, u) {
    var c = sn, d = wi.transition;
    wi.transition = null;
    try {
      sn = 4, Do(n, r, o, u);
    } finally {
      sn = c, wi.transition = d;
    }
  }
  function Do(n, r, o, u) {
    if (Pa) {
      var c = cu(n, r, o, u);
      if (c === null) Oc(n, r, u, pl, o), La(n, u);
      else if (ts(c, n, r, o, u)) u.stopPropagation();
      else if (La(n, u), r & 4 && -1 < Br.indexOf(n)) {
        for (; c !== null; ) {
          var d = St(c);
          if (d !== null && nn(d), d = cu(n, r, o, u), d === null && Oc(n, r, u, pl, o), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else Oc(n, r, u, null, o);
    }
  }
  var pl = null;
  function cu(n, r, o, u) {
    if (pl = null, n = un(u), n = El(n), n !== null) if (r = jt(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = Pt(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return pl = n, null;
  }
  function fu(n) {
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
          case ri:
            return 1;
          case ul:
            return 4;
          case sl:
          case Co:
            return 16;
          case tu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var li = null, h = null, L = null;
  function oe() {
    if (L) return L;
    var n, r = h, o = r.length, u, c = "value" in li ? li.value : li.textContent, d = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++) ;
    var E = o - n;
    for (u = 1; u <= E && r[o - u] === c[d - u]; u++) ;
    return L = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function me(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ve() {
    return !0;
  }
  function bt() {
    return !1;
  }
  function Ke(n) {
    function r(o, u, c, d, E) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = E, this.currentTarget = null;
      for (var M in n) n.hasOwnProperty(M) && (o = n[M], this[M] = o ? o(d) : d[M]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ve : bt, this.isPropagationStopped = bt, this;
    }
    return I(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Ve);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Ve);
    }, persist: function() {
    }, isPersistent: Ve }), r;
  }
  var Tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qt = Ke(Tt), rn = I({}, Tt, { view: 0, detail: 0 }), zn = Ke(rn), En, It, bn, jn = I({}, rn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== bn && (bn && n.type === "mousemove" ? (En = n.screenX - bn.screenX, It = n.screenY - bn.screenY) : It = En = 0, bn = n), En);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : It;
  } }), ko = Ke(jn), rs = I({}, jn, { dataTransfer: 0 }), Gi = Ke(rs), as = I({}, rn, { relatedTarget: 0 }), vl = Ke(as), od = I({}, Tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = Ke(od), ld = I({}, Tt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), bv = Ke(ld), ud = I({}, Tt, { data: 0 }), sd = Ke(ud), Rv = {
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
  }, _y = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = _y[n]) ? !!r[n] : !1;
  }
  function cd() {
    return Qi;
  }
  var fd = I({}, rn, { key: function(n) {
    if (n.key) {
      var r = Rv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = me(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cd, charCode: function(n) {
    return n.type === "keypress" ? me(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? me(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), dd = Ke(fd), pd = I({}, jn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wv = Ke(pd), gc = I({}, rn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cd }), Tv = Ke(gc), ra = I({}, Tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xi = Ke(ra), Kn = I({}, jn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = Ke(Kn), vd = [9, 13, 27, 32], du = le && "CompositionEvent" in window, is = null;
  le && "documentMode" in document && (is = document.documentMode);
  var os = le && "TextEvent" in window && !is, xv = le && (!du || is && 8 < is && 11 >= is), _v = " ", Sc = !1;
  function Ov(n, r) {
    switch (n) {
      case "keyup":
        return vd.indexOf(r.keyCode) !== -1;
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
  function Dv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pu = !1;
  function kv(n, r) {
    switch (n) {
      case "compositionend":
        return Dv(r);
      case "keypress":
        return r.which !== 32 ? null : (Sc = !0, _v);
      case "textInput":
        return n = r.data, n === _v && Sc ? null : n;
      default:
        return null;
    }
  }
  function Oy(n, r) {
    if (pu) return n === "compositionend" || !du && Ov(n, r) ? (n = oe(), L = h = li = null, pu = !1, n) : null;
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
        return xv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Dy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Dy[n.type] : r === "textarea";
  }
  function hd(n, r, o, u) {
    Ma(u), r = ds(r, "onChange"), 0 < r.length && (o = new Qt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ti = null, hl = null;
  function Mv(n) {
    gl(n, 0);
  }
  function ls(n) {
    var r = si(n);
    if (we(r)) return n;
  }
  function ky(n, r) {
    if (n === "change") return r;
  }
  var Lv = !1;
  if (le) {
    var md;
    if (le) {
      var yd = "oninput" in document;
      if (!yd) {
        var Nv = document.createElement("div");
        Nv.setAttribute("oninput", "return;"), yd = typeof Nv.oninput == "function";
      }
      md = yd;
    } else md = !1;
    Lv = md && (!document.documentMode || 9 < document.documentMode);
  }
  function Pv() {
    Ti && (Ti.detachEvent("onpropertychange", Av), hl = Ti = null);
  }
  function Av(n) {
    if (n.propertyName === "value" && ls(hl)) {
      var r = [];
      hd(r, hl, n, un(n)), ll(Mv, r);
    }
  }
  function zy(n, r, o) {
    n === "focusin" ? (Pv(), Ti = r, hl = o, Ti.attachEvent("onpropertychange", Av)) : n === "focusout" && Pv();
  }
  function Uv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ls(hl);
  }
  function My(n, r) {
    if (n === "click") return ls(r);
  }
  function jv(n, r) {
    if (n === "input" || n === "change") return ls(r);
  }
  function Ly(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ui = typeof Object.is == "function" ? Object.is : Ly;
  function us(n, r) {
    if (ui(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!B.call(r, c) || !ui(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Hv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ec(n, r) {
    var o = Hv(n);
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
      o = Hv(o);
    }
  }
  function zo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? zo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ss() {
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
  function bc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function vu(n) {
    var r = ss(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && zo(o.ownerDocument.documentElement, o)) {
      if (u !== null && bc(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = Ec(o, d);
          var E = Ec(
            o,
            u
          );
          c && E && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ny = le && "documentMode" in document && 11 >= document.documentMode, hu = null, gd = null, cs = null, Sd = !1;
  function Ed(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Sd || hu == null || hu !== ht(u) || (u = hu, "selectionStart" in u && bc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), cs && us(cs, u) || (cs = u, u = ds(gd, "onSelect"), 0 < u.length && (r = new Qt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = hu)));
  }
  function Rc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var ml = { animationend: Rc("Animation", "AnimationEnd"), animationiteration: Rc("Animation", "AnimationIteration"), animationstart: Rc("Animation", "AnimationStart"), transitionend: Rc("Transition", "TransitionEnd") }, Er = {}, bd = {};
  le && (bd = document.createElement("div").style, "AnimationEvent" in window || (delete ml.animationend.animation, delete ml.animationiteration.animation, delete ml.animationstart.animation), "TransitionEvent" in window || delete ml.transitionend.transition);
  function Cc(n) {
    if (Er[n]) return Er[n];
    if (!ml[n]) return n;
    var r = ml[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in bd) return Er[n] = r[o];
    return n;
  }
  var Fv = Cc("animationend"), Bv = Cc("animationiteration"), Vv = Cc("animationstart"), Iv = Cc("transitionend"), Rd = /* @__PURE__ */ new Map(), wc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    Rd.set(n, r), H(r, [n]);
  }
  for (var Cd = 0; Cd < wc.length; Cd++) {
    var yl = wc[Cd], Py = yl.toLowerCase(), Ay = yl[0].toUpperCase() + yl.slice(1);
    Aa(Py, "on" + Ay);
  }
  Aa(Fv, "onAnimationEnd"), Aa(Bv, "onAnimationIteration"), Aa(Vv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Iv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), H("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), H("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), H("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), H("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), H("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));
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
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var M = u[E], U = M.instance, ue = M.currentTarget;
          if (M = M.listener, U !== d && c.isPropagationStopped()) break e;
          Tc(c, M, ue), d = U;
        }
        else for (E = 0; E < u.length; E++) {
          if (M = u[E], U = M.instance, ue = M.currentTarget, M = M.listener, U !== d && c.isPropagationStopped()) break e;
          Tc(c, M, ue), d = U;
        }
      }
    }
    if (Ei) throw n = N, Ei = !1, N = null, n;
  }
  function yn(n, r) {
    var o = r[hs];
    o === void 0 && (o = r[hs] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || ($v(r, n, 2, !1), o.add(u));
  }
  function xc(n, r, o) {
    var u = 0;
    r && (u |= 4), $v(o, n, u, r);
  }
  var _c = "_reactListening" + Math.random().toString(36).slice(2);
  function mu(n) {
    if (!n[_c]) {
      n[_c] = !0, _.forEach(function(o) {
        o !== "selectionchange" && (wd.has(o) || xc(o, !1, n), xc(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[_c] || (r[_c] = !0, xc("selectionchange", !1, r));
    }
  }
  function $v(n, r, o, u) {
    switch (fu(r)) {
      case 1:
        var c = uu;
        break;
      case 4:
        c = su;
        break;
      default:
        c = Do;
    }
    o = c.bind(null, r, o, n), c = void 0, !jr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function Oc(n, r, o, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var M = u.stateNode.containerInfo;
        if (M === c || M.nodeType === 8 && M.parentNode === c) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var U = E.tag;
          if ((U === 3 || U === 4) && (U = E.stateNode.containerInfo, U === c || U.nodeType === 8 && U.parentNode === c)) return;
          E = E.return;
        }
        for (; M !== null; ) {
          if (E = El(M), E === null) return;
          if (U = E.tag, U === 5 || U === 6) {
            u = d = E;
            continue e;
          }
          M = M.parentNode;
        }
      }
      u = u.return;
    }
    ll(function() {
      var ue = d, Le = un(o), He = [];
      e: {
        var Me = Rd.get(n);
        if (Me !== void 0) {
          var it = Qt, ft = n;
          switch (n) {
            case "keypress":
              if (me(o) === 0) break e;
            case "keydown":
            case "keyup":
              it = dd;
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
              it = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              it = Tv;
              break;
            case Fv:
            case Bv:
            case Vv:
              it = yc;
              break;
            case Iv:
              it = Xi;
              break;
            case "scroll":
              it = zn;
              break;
            case "wheel":
              it = Ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              it = bv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              it = wv;
          }
          var vt = (r & 4) !== 0, Qn = !vt && n === "scroll", J = vt ? Me !== null ? Me + "Capture" : null : Me;
          vt = [];
          for (var W = ue, re; W !== null; ) {
            re = W;
            var Ne = re.stateNode;
            if (re.tag === 5 && Ne !== null && (re = Ne, J !== null && (Ne = Ur(W, J), Ne != null && vt.push(yu(W, Ne, re)))), Qn) break;
            W = W.return;
          }
          0 < vt.length && (Me = new it(Me, ft, null, o, Le), He.push({ event: Me, listeners: vt }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Me = n === "mouseover" || n === "pointerover", it = n === "mouseout" || n === "pointerout", Me && o !== an && (ft = o.relatedTarget || o.fromElement) && (El(ft) || ft[Zi])) break e;
          if ((it || Me) && (Me = Le.window === Le ? Le : (Me = Le.ownerDocument) ? Me.defaultView || Me.parentWindow : window, it ? (ft = o.relatedTarget || o.toElement, it = ue, ft = ft ? El(ft) : null, ft !== null && (Qn = jt(ft), ft !== Qn || ft.tag !== 5 && ft.tag !== 6) && (ft = null)) : (it = null, ft = ue), it !== ft)) {
            if (vt = ko, Ne = "onMouseLeave", J = "onMouseEnter", W = "mouse", (n === "pointerout" || n === "pointerover") && (vt = wv, Ne = "onPointerLeave", J = "onPointerEnter", W = "pointer"), Qn = it == null ? Me : si(it), re = ft == null ? Me : si(ft), Me = new vt(Ne, W + "leave", it, o, Le), Me.target = Qn, Me.relatedTarget = re, Ne = null, El(Le) === ue && (vt = new vt(J, W + "enter", ft, o, Le), vt.target = re, vt.relatedTarget = Qn, Ne = vt), Qn = Ne, it && ft) t: {
              for (vt = it, J = ft, W = 0, re = vt; re; re = Mo(re)) W++;
              for (re = 0, Ne = J; Ne; Ne = Mo(Ne)) re++;
              for (; 0 < W - re; ) vt = Mo(vt), W--;
              for (; 0 < re - W; ) J = Mo(J), re--;
              for (; W--; ) {
                if (vt === J || J !== null && vt === J.alternate) break t;
                vt = Mo(vt), J = Mo(J);
              }
              vt = null;
            }
            else vt = null;
            it !== null && Wv(He, Me, it, vt, !1), ft !== null && Qn !== null && Wv(He, Qn, ft, vt, !0);
          }
        }
        e: {
          if (Me = ue ? si(ue) : window, it = Me.nodeName && Me.nodeName.toLowerCase(), it === "select" || it === "input" && Me.type === "file") var dt = ky;
          else if (zv(Me)) if (Lv) dt = jv;
          else {
            dt = Uv;
            var wt = zy;
          }
          else (it = Me.nodeName) && it.toLowerCase() === "input" && (Me.type === "checkbox" || Me.type === "radio") && (dt = My);
          if (dt && (dt = dt(n, ue))) {
            hd(He, dt, o, Le);
            break e;
          }
          wt && wt(n, Me, ue), n === "focusout" && (wt = Me._wrapperState) && wt.controlled && Me.type === "number" && X(Me, "number", Me.value);
        }
        switch (wt = ue ? si(ue) : window, n) {
          case "focusin":
            (zv(wt) || wt.contentEditable === "true") && (hu = wt, gd = ue, cs = null);
            break;
          case "focusout":
            cs = gd = hu = null;
            break;
          case "mousedown":
            Sd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sd = !1, Ed(He, o, Le);
            break;
          case "selectionchange":
            if (Ny) break;
          case "keydown":
          case "keyup":
            Ed(He, o, Le);
        }
        var xt;
        if (du) e: {
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
        else pu ? Ov(n, o) && (kt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (kt = "onCompositionStart");
        kt && (xv && o.locale !== "ko" && (pu || kt !== "onCompositionStart" ? kt === "onCompositionEnd" && pu && (xt = oe()) : (li = Le, h = "value" in li ? li.value : li.textContent, pu = !0)), wt = ds(ue, kt), 0 < wt.length && (kt = new sd(kt, n, null, o, Le), He.push({ event: kt, listeners: wt }), xt ? kt.data = xt : (xt = Dv(o), xt !== null && (kt.data = xt)))), (xt = os ? kv(n, o) : Oy(n, o)) && (ue = ds(ue, "onBeforeInput"), 0 < ue.length && (Le = new sd("onBeforeInput", "beforeinput", null, o, Le), He.push({ event: Le, listeners: ue }), Le.data = xt));
      }
      gl(He, r);
    });
  }
  function yu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ds(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ur(n, o), d != null && u.unshift(yu(n, d, c)), d = Ur(n, r), d != null && u.push(yu(n, d, c))), n = n.return;
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
  function Wv(n, r, o, u, c) {
    for (var d = r._reactName, E = []; o !== null && o !== u; ) {
      var M = o, U = M.alternate, ue = M.stateNode;
      if (U !== null && U === u) break;
      M.tag === 5 && ue !== null && (M = ue, c ? (U = Ur(o, d), U != null && E.unshift(yu(o, U, M))) : c || (U = Ur(o, d), U != null && E.push(yu(o, U, M)))), o = o.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var qv = /\r\n?/g, Uy = /\u0000|\uFFFD/g;
  function Yv(n) {
    return (typeof n == "string" ? n : "" + n).replace(qv, `
`).replace(Uy, "");
  }
  function Dc(n, r, o) {
    if (r = Yv(r), Yv(n) !== r && o) throw Error(m(425));
  }
  function Lo() {
  }
  var ps = null, Sl = null;
  function kc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var zc = typeof setTimeout == "function" ? setTimeout : void 0, Td = typeof clearTimeout == "function" ? clearTimeout : void 0, Gv = typeof Promise == "function" ? Promise : void 0, gu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gv < "u" ? function(n) {
    return Gv.resolve(null).then(n).catch(Mc);
  } : zc;
  function Mc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Su(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8) if (o = c.data, o === "/$") {
        if (u === 0) {
          n.removeChild(c), oi(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    oi(r);
  }
  function xi(n) {
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
  function Qv(n) {
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
  var No = Math.random().toString(36).slice(2), _i = "__reactFiber$" + No, vs = "__reactProps$" + No, Zi = "__reactContainer$" + No, hs = "__reactEvents$" + No, Eu = "__reactListeners$" + No, jy = "__reactHandles$" + No;
  function El(n) {
    var r = n[_i];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Zi] || o[_i]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = Qv(n); n !== null; ) {
          if (o = n[_i]) return o;
          n = Qv(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function St(n) {
    return n = n[_i] || n[Zi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function si(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
  }
  function Hn(n) {
    return n[vs] || null;
  }
  var Zt = [], Ua = -1;
  function ja(n) {
    return { current: n };
  }
  function Mn(n) {
    0 > Ua || (n.current = Zt[Ua], Zt[Ua] = null, Ua--);
  }
  function yt(n, r) {
    Ua++, Zt[Ua] = n.current, n.current = r;
  }
  var Mr = {}, In = ja(Mr), ur = ja(!1), aa = Mr;
  function ia(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Mr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in o) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function bu() {
    Mn(ur), Mn(In);
  }
  function Xv(n, r, o) {
    if (In.current !== Mr) throw Error(m(168));
    yt(In, r), yt(ur, o);
  }
  function ms(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(m(108, We(n) || "Unknown", c));
    return I({}, o, u);
  }
  function dr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Mr, aa = In.current, yt(In, n), yt(ur, ur.current), !0;
  }
  function Lc(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(m(169));
    o ? (n = ms(n, r, aa), u.__reactInternalMemoizedMergedChildContext = n, Mn(ur), Mn(In), yt(In, n)) : Mn(ur), yt(ur, o);
  }
  var Oi = null, Ru = !1, Ji = !1;
  function Nc(n) {
    Oi === null ? Oi = [n] : Oi.push(n);
  }
  function Po(n) {
    Ru = !0, Nc(n);
  }
  function Di() {
    if (!Ji && Oi !== null) {
      Ji = !0;
      var n = 0, r = sn;
      try {
        var o = Oi;
        for (sn = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Oi = null, Ru = !1;
      } catch (c) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), Ln(ri, Di), c;
      } finally {
        sn = r, Ji = !1;
      }
    }
    return null;
  }
  var Ao = [], Uo = 0, jo = null, eo = 0, Jn = [], Ha = 0, ba = null, ki = 1, zi = "";
  function bl(n, r) {
    Ao[Uo++] = eo, Ao[Uo++] = jo, jo = n, eo = r;
  }
  function Kv(n, r, o) {
    Jn[Ha++] = ki, Jn[Ha++] = zi, Jn[Ha++] = ba, ba = n;
    var u = ki;
    n = zi;
    var c = 32 - Hr(u) - 1;
    u &= ~(1 << c), o += 1;
    var d = 32 - Hr(r) + c;
    if (30 < d) {
      var E = c - c % 5;
      d = (u & (1 << E) - 1).toString(32), u >>= E, c -= E, ki = 1 << 32 - Hr(r) + c | o << c | u, zi = d + n;
    } else ki = 1 << d | o << c | u, zi = n;
  }
  function Pc(n) {
    n.return !== null && (bl(n, 1), Kv(n, 1, 0));
  }
  function Ac(n) {
    for (; n === jo; ) jo = Ao[--Uo], Ao[Uo] = null, eo = Ao[--Uo], Ao[Uo] = null;
    for (; n === ba; ) ba = Jn[--Ha], Jn[Ha] = null, zi = Jn[--Ha], Jn[Ha] = null, ki = Jn[--Ha], Jn[Ha] = null;
  }
  var oa = null, la = null, An = !1, Fa = null;
  function xd(n, r) {
    var o = Wa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Zv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, oa = n, la = xi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, oa = n, la = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = ba !== null ? { id: ki, overflow: zi } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Wa(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, oa = n, la = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _d(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Od(n) {
    if (An) {
      var r = la;
      if (r) {
        var o = r;
        if (!Zv(n, r)) {
          if (_d(n)) throw Error(m(418));
          r = xi(o.nextSibling);
          var u = oa;
          r && Zv(n, r) ? xd(u, o) : (n.flags = n.flags & -4097 | 2, An = !1, oa = n);
        }
      } else {
        if (_d(n)) throw Error(m(418));
        n.flags = n.flags & -4097 | 2, An = !1, oa = n;
      }
    }
  }
  function sr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    oa = n;
  }
  function Uc(n) {
    if (n !== oa) return !1;
    if (!An) return sr(n), An = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !kc(n.type, n.memoizedProps)), r && (r = la)) {
      if (_d(n)) throw ys(), Error(m(418));
      for (; r; ) xd(n, r), r = xi(r.nextSibling);
    }
    if (sr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                la = xi(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        la = null;
      }
    } else la = oa ? xi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ys() {
    for (var n = la; n; ) n = xi(n.nextSibling);
  }
  function Ho() {
    la = oa = null, An = !1;
  }
  function to(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var Hy = w.ReactCurrentBatchConfig;
  function Rl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(m(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(m(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(E) {
          var M = c.refs;
          E === null ? delete M[d] : M[d] = E;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(m(284));
      if (!o._owner) throw Error(m(290, n));
    }
    return n;
  }
  function jc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Jv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Cl(n) {
    function r(J, W) {
      if (n) {
        var re = J.deletions;
        re === null ? (J.deletions = [W], J.flags |= 16) : re.push(W);
      }
    }
    function o(J, W) {
      if (!n) return null;
      for (; W !== null; ) r(J, W), W = W.sibling;
      return null;
    }
    function u(J, W) {
      for (J = /* @__PURE__ */ new Map(); W !== null; ) W.key !== null ? J.set(W.key, W) : J.set(W.index, W), W = W.sibling;
      return J;
    }
    function c(J, W) {
      return J = Yo(J, W), J.index = 0, J.sibling = null, J;
    }
    function d(J, W, re) {
      return J.index = re, n ? (re = J.alternate, re !== null ? (re = re.index, re < W ? (J.flags |= 2, W) : re) : (J.flags |= 2, W)) : (J.flags |= 1048576, W);
    }
    function E(J) {
      return n && J.alternate === null && (J.flags |= 2), J;
    }
    function M(J, W, re, Ne) {
      return W === null || W.tag !== 6 ? (W = ip(re, J.mode, Ne), W.return = J, W) : (W = c(W, re), W.return = J, W);
    }
    function U(J, W, re, Ne) {
      var dt = re.type;
      return dt === P ? Le(J, W, re.props.children, Ne, re.key) : W !== null && (W.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Ie && Jv(dt) === W.type) ? (Ne = c(W, re.props), Ne.ref = Rl(J, W, re), Ne.return = J, Ne) : (Ne = Ys(re.type, re.key, re.props, null, J.mode, Ne), Ne.ref = Rl(J, W, re), Ne.return = J, Ne);
    }
    function ue(J, W, re, Ne) {
      return W === null || W.tag !== 4 || W.stateNode.containerInfo !== re.containerInfo || W.stateNode.implementation !== re.implementation ? (W = gf(re, J.mode, Ne), W.return = J, W) : (W = c(W, re.children || []), W.return = J, W);
    }
    function Le(J, W, re, Ne, dt) {
      return W === null || W.tag !== 7 ? (W = lo(re, J.mode, Ne, dt), W.return = J, W) : (W = c(W, re), W.return = J, W);
    }
    function He(J, W, re) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return W = ip("" + W, J.mode, re), W.return = J, W;
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            return re = Ys(W.type, W.key, W.props, null, J.mode, re), re.ref = Rl(J, null, W), re.return = J, re;
          case D:
            return W = gf(W, J.mode, re), W.return = J, W;
          case Ie:
            var Ne = W._init;
            return He(J, Ne(W._payload), re);
        }
        if (ve(W) || Be(W)) return W = lo(W, J.mode, re, null), W.return = J, W;
        jc(J, W);
      }
      return null;
    }
    function Me(J, W, re, Ne) {
      var dt = W !== null ? W.key : null;
      if (typeof re == "string" && re !== "" || typeof re == "number") return dt !== null ? null : M(J, W, "" + re, Ne);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case b:
            return re.key === dt ? U(J, W, re, Ne) : null;
          case D:
            return re.key === dt ? ue(J, W, re, Ne) : null;
          case Ie:
            return dt = re._init, Me(
              J,
              W,
              dt(re._payload),
              Ne
            );
        }
        if (ve(re) || Be(re)) return dt !== null ? null : Le(J, W, re, Ne, null);
        jc(J, re);
      }
      return null;
    }
    function it(J, W, re, Ne, dt) {
      if (typeof Ne == "string" && Ne !== "" || typeof Ne == "number") return J = J.get(re) || null, M(W, J, "" + Ne, dt);
      if (typeof Ne == "object" && Ne !== null) {
        switch (Ne.$$typeof) {
          case b:
            return J = J.get(Ne.key === null ? re : Ne.key) || null, U(W, J, Ne, dt);
          case D:
            return J = J.get(Ne.key === null ? re : Ne.key) || null, ue(W, J, Ne, dt);
          case Ie:
            var wt = Ne._init;
            return it(J, W, re, wt(Ne._payload), dt);
        }
        if (ve(Ne) || Be(Ne)) return J = J.get(re) || null, Le(W, J, Ne, dt, null);
        jc(W, Ne);
      }
      return null;
    }
    function ft(J, W, re, Ne) {
      for (var dt = null, wt = null, xt = W, kt = W = 0, hr = null; xt !== null && kt < re.length; kt++) {
        xt.index > kt ? (hr = xt, xt = null) : hr = xt.sibling;
        var dn = Me(J, xt, re[kt], Ne);
        if (dn === null) {
          xt === null && (xt = hr);
          break;
        }
        n && xt && dn.alternate === null && r(J, xt), W = d(dn, W, kt), wt === null ? dt = dn : wt.sibling = dn, wt = dn, xt = hr;
      }
      if (kt === re.length) return o(J, xt), An && bl(J, kt), dt;
      if (xt === null) {
        for (; kt < re.length; kt++) xt = He(J, re[kt], Ne), xt !== null && (W = d(xt, W, kt), wt === null ? dt = xt : wt.sibling = xt, wt = xt);
        return An && bl(J, kt), dt;
      }
      for (xt = u(J, xt); kt < re.length; kt++) hr = it(xt, J, kt, re[kt], Ne), hr !== null && (n && hr.alternate !== null && xt.delete(hr.key === null ? kt : hr.key), W = d(hr, W, kt), wt === null ? dt = hr : wt.sibling = hr, wt = hr);
      return n && xt.forEach(function(Xo) {
        return r(J, Xo);
      }), An && bl(J, kt), dt;
    }
    function vt(J, W, re, Ne) {
      var dt = Be(re);
      if (typeof dt != "function") throw Error(m(150));
      if (re = dt.call(re), re == null) throw Error(m(151));
      for (var wt = dt = null, xt = W, kt = W = 0, hr = null, dn = re.next(); xt !== null && !dn.done; kt++, dn = re.next()) {
        xt.index > kt ? (hr = xt, xt = null) : hr = xt.sibling;
        var Xo = Me(J, xt, dn.value, Ne);
        if (Xo === null) {
          xt === null && (xt = hr);
          break;
        }
        n && xt && Xo.alternate === null && r(J, xt), W = d(Xo, W, kt), wt === null ? dt = Xo : wt.sibling = Xo, wt = Xo, xt = hr;
      }
      if (dn.done) return o(
        J,
        xt
      ), An && bl(J, kt), dt;
      if (xt === null) {
        for (; !dn.done; kt++, dn = re.next()) dn = He(J, dn.value, Ne), dn !== null && (W = d(dn, W, kt), wt === null ? dt = dn : wt.sibling = dn, wt = dn);
        return An && bl(J, kt), dt;
      }
      for (xt = u(J, xt); !dn.done; kt++, dn = re.next()) dn = it(xt, J, kt, dn.value, Ne), dn !== null && (n && dn.alternate !== null && xt.delete(dn.key === null ? kt : dn.key), W = d(dn, W, kt), wt === null ? dt = dn : wt.sibling = dn, wt = dn);
      return n && xt.forEach(function(Ph) {
        return r(J, Ph);
      }), An && bl(J, kt), dt;
    }
    function Qn(J, W, re, Ne) {
      if (typeof re == "object" && re !== null && re.type === P && re.key === null && (re = re.props.children), typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case b:
            e: {
              for (var dt = re.key, wt = W; wt !== null; ) {
                if (wt.key === dt) {
                  if (dt = re.type, dt === P) {
                    if (wt.tag === 7) {
                      o(J, wt.sibling), W = c(wt, re.props.children), W.return = J, J = W;
                      break e;
                    }
                  } else if (wt.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Ie && Jv(dt) === wt.type) {
                    o(J, wt.sibling), W = c(wt, re.props), W.ref = Rl(J, wt, re), W.return = J, J = W;
                    break e;
                  }
                  o(J, wt);
                  break;
                } else r(J, wt);
                wt = wt.sibling;
              }
              re.type === P ? (W = lo(re.props.children, J.mode, Ne, re.key), W.return = J, J = W) : (Ne = Ys(re.type, re.key, re.props, null, J.mode, Ne), Ne.ref = Rl(J, W, re), Ne.return = J, J = Ne);
            }
            return E(J);
          case D:
            e: {
              for (wt = re.key; W !== null; ) {
                if (W.key === wt) if (W.tag === 4 && W.stateNode.containerInfo === re.containerInfo && W.stateNode.implementation === re.implementation) {
                  o(J, W.sibling), W = c(W, re.children || []), W.return = J, J = W;
                  break e;
                } else {
                  o(J, W);
                  break;
                }
                else r(J, W);
                W = W.sibling;
              }
              W = gf(re, J.mode, Ne), W.return = J, J = W;
            }
            return E(J);
          case Ie:
            return wt = re._init, Qn(J, W, wt(re._payload), Ne);
        }
        if (ve(re)) return ft(J, W, re, Ne);
        if (Be(re)) return vt(J, W, re, Ne);
        jc(J, re);
      }
      return typeof re == "string" && re !== "" || typeof re == "number" ? (re = "" + re, W !== null && W.tag === 6 ? (o(J, W.sibling), W = c(W, re), W.return = J, J = W) : (o(J, W), W = ip(re, J.mode, Ne), W.return = J, J = W), E(J)) : o(J, W);
    }
    return Qn;
  }
  var Wn = Cl(!0), tt = Cl(!1), Ra = ja(null), ua = null, Cu = null, Dd = null;
  function kd() {
    Dd = Cu = ua = null;
  }
  function zd(n) {
    var r = Ra.current;
    Mn(Ra), n._currentValue = r;
  }
  function Md(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function Fn(n, r) {
    ua = n, Dd = Cu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function Ba(n) {
    var r = n._currentValue;
    if (Dd !== n) if (n = { context: n, memoizedValue: r, next: null }, Cu === null) {
      if (ua === null) throw Error(m(308));
      Cu = n, ua.dependencies = { lanes: 0, firstContext: n };
    } else Cu = Cu.next = n;
    return r;
  }
  var wl = null;
  function Ld(n) {
    wl === null ? wl = [n] : wl.push(n);
  }
  function Nd(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Ld(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Ca(n, u);
  }
  function Ca(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var wa = !1;
  function Pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function eh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function no(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Fo(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Jt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ca(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ld(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ca(n, o);
  }
  function Hc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Yi(n, o);
    }
  }
  function th(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, d = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var E = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          d === null ? c = d = E : d = d.next = E, o = o.next;
        } while (o !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function gs(n, r, o, u) {
    var c = n.updateQueue;
    wa = !1;
    var d = c.firstBaseUpdate, E = c.lastBaseUpdate, M = c.shared.pending;
    if (M !== null) {
      c.shared.pending = null;
      var U = M, ue = U.next;
      U.next = null, E === null ? d = ue : E.next = ue, E = U;
      var Le = n.alternate;
      Le !== null && (Le = Le.updateQueue, M = Le.lastBaseUpdate, M !== E && (M === null ? Le.firstBaseUpdate = ue : M.next = ue, Le.lastBaseUpdate = U));
    }
    if (d !== null) {
      var He = c.baseState;
      E = 0, Le = ue = U = null, M = d;
      do {
        var Me = M.lane, it = M.eventTime;
        if ((u & Me) === Me) {
          Le !== null && (Le = Le.next = {
            eventTime: it,
            lane: 0,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null
          });
          e: {
            var ft = n, vt = M;
            switch (Me = r, it = o, vt.tag) {
              case 1:
                if (ft = vt.payload, typeof ft == "function") {
                  He = ft.call(it, He, Me);
                  break e;
                }
                He = ft;
                break e;
              case 3:
                ft.flags = ft.flags & -65537 | 128;
              case 0:
                if (ft = vt.payload, Me = typeof ft == "function" ? ft.call(it, He, Me) : ft, Me == null) break e;
                He = I({}, He, Me);
                break e;
              case 2:
                wa = !0;
            }
          }
          M.callback !== null && M.lane !== 0 && (n.flags |= 64, Me = c.effects, Me === null ? c.effects = [M] : Me.push(M));
        } else it = { eventTime: it, lane: Me, tag: M.tag, payload: M.payload, callback: M.callback, next: null }, Le === null ? (ue = Le = it, U = He) : Le = Le.next = it, E |= Me;
        if (M = M.next, M === null) {
          if (M = c.shared.pending, M === null) break;
          Me = M, M = Me.next, Me.next = null, c.lastBaseUpdate = Me, c.shared.pending = null;
        }
      } while (!0);
      if (Le === null && (U = He), c.baseState = U, c.firstBaseUpdate = ue, c.lastBaseUpdate = Le, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          E |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ai |= E, n.lanes = E, n.memoizedState = He;
    }
  }
  function Ad(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = o, typeof c != "function") throw Error(m(191, c));
        c.call(u);
      }
    }
  }
  var Ss = {}, Mi = ja(Ss), Es = ja(Ss), bs = ja(Ss);
  function Tl(n) {
    if (n === Ss) throw Error(m(174));
    return n;
  }
  function Ud(n, r) {
    switch (yt(bs, r), yt(Es, n), yt(Mi, Ss), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ln(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ln(r, n);
    }
    Mn(Mi), yt(Mi, r);
  }
  function xl() {
    Mn(Mi), Mn(Es), Mn(bs);
  }
  function nh(n) {
    Tl(bs.current);
    var r = Tl(Mi.current), o = ln(r, n.type);
    r !== o && (yt(Es, n), yt(Mi, o));
  }
  function Fc(n) {
    Es.current === n && (Mn(Mi), Mn(Es));
  }
  var Bn = ja(0);
  function Bc(n) {
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
  function Et() {
    for (var n = 0; n < Rs.length; n++) Rs[n]._workInProgressVersionPrimary = null;
    Rs.length = 0;
  }
  var qt = w.ReactCurrentDispatcher, cn = w.ReactCurrentBatchConfig, Rn = 0, fn = null, er = null, pr = null, Vc = !1, Cs = !1, _l = 0, ze = 0;
  function on() {
    throw Error(m(321));
  }
  function Ot(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!ui(n[o], r[o])) return !1;
    return !0;
  }
  function Bo(n, r, o, u, c, d) {
    if (Rn = d, fn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, qt.current = n === null || n.memoizedState === null ? rf : Ds, n = o(u, c), Cs) {
      d = 0;
      do {
        if (Cs = !1, _l = 0, 25 <= d) throw Error(m(301));
        d += 1, pr = er = null, r.updateQueue = null, qt.current = af, n = o(u, c);
      } while (Cs);
    }
    if (qt.current = Ml, r = er !== null && er.next !== null, Rn = 0, pr = er = fn = null, Vc = !1, r) throw Error(m(300));
    return n;
  }
  function ci() {
    var n = _l !== 0;
    return _l = 0, n;
  }
  function Lr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return pr === null ? fn.memoizedState = pr = n : pr = pr.next = n, pr;
  }
  function qn() {
    if (er === null) {
      var n = fn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = er.next;
    var r = pr === null ? fn.memoizedState : pr.next;
    if (r !== null) pr = r, er = n;
    else {
      if (n === null) throw Error(m(310));
      er = n, n = { memoizedState: er.memoizedState, baseState: er.baseState, baseQueue: er.baseQueue, queue: er.queue, next: null }, pr === null ? fn.memoizedState = pr = n : pr = pr.next = n;
    }
    return pr;
  }
  function ro(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Vo(n) {
    var r = qn(), o = r.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = er, c = u.baseQueue, d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var E = c.next;
        c.next = d.next, d.next = E;
      }
      u.baseQueue = c = d, o.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var M = E = null, U = null, ue = d;
      do {
        var Le = ue.lane;
        if ((Rn & Le) === Le) U !== null && (U = U.next = { lane: 0, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }), u = ue.hasEagerState ? ue.eagerState : n(u, ue.action);
        else {
          var He = {
            lane: Le,
            action: ue.action,
            hasEagerState: ue.hasEagerState,
            eagerState: ue.eagerState,
            next: null
          };
          U === null ? (M = U = He, E = u) : U = U.next = He, fn.lanes |= Le, Ai |= Le;
        }
        ue = ue.next;
      } while (ue !== null && ue !== d);
      U === null ? E = u : U.next = M, ui(u, r.memoizedState) || (tr = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = U, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, fn.lanes |= d, Ai |= d, c = c.next;
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Ol(n) {
    var r = qn(), o = r.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, d = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var E = c = c.next;
      do
        d = n(d, E.action), E = E.next;
      while (E !== c);
      ui(d, r.memoizedState) || (tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), o.lastRenderedState = d;
    }
    return [d, u];
  }
  function Ic() {
  }
  function $c(n, r) {
    var o = fn, u = qn(), c = r(), d = !ui(u.memoizedState, c);
    if (d && (u.memoizedState = c, tr = !0), u = u.queue, ws(Yc.bind(null, o, u, n), [n]), u.getSnapshot !== r || d || pr !== null && pr.memoizedState.tag & 1) {
      if (o.flags |= 2048, Dl(9, qc.bind(null, o, u, c, r), void 0, null), cr === null) throw Error(m(349));
      Rn & 30 || Wc(o, r, c);
    }
    return c;
  }
  function Wc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = fn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, fn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function qc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Gc(r) && Qc(n);
  }
  function Yc(n, r, o) {
    return o(function() {
      Gc(r) && Qc(n);
    });
  }
  function Gc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !ui(n, o);
    } catch {
      return !0;
    }
  }
  function Qc(n) {
    var r = Ca(n, 1);
    r !== null && Wr(r, n, 1, -1);
  }
  function Xc(n) {
    var r = Lr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ro, lastRenderedState: n }, r.queue = n, n = n.dispatch = zl.bind(null, fn, n), [r.memoizedState, n];
  }
  function Dl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = fn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, fn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Kc() {
    return qn().memoizedState;
  }
  function wu(n, r, o, u) {
    var c = Lr();
    fn.flags |= n, c.memoizedState = Dl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Tu(n, r, o, u) {
    var c = qn();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (er !== null) {
      var E = er.memoizedState;
      if (d = E.destroy, u !== null && Ot(u, E.deps)) {
        c.memoizedState = Dl(r, o, d, u);
        return;
      }
    }
    fn.flags |= n, c.memoizedState = Dl(1 | r, o, d, u);
  }
  function Zc(n, r) {
    return wu(8390656, 8, n, r);
  }
  function ws(n, r) {
    return Tu(2048, 8, n, r);
  }
  function Jc(n, r) {
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
  function ef(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Tu(4, 4, kl.bind(null, r, n), o);
  }
  function xs() {
  }
  function tf(n, r) {
    var o = qn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Ot(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function nf(n, r) {
    var o = qn();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Ot(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function jd(n, r, o) {
    return Rn & 21 ? (ui(o, r) || (o = au(), fn.lanes |= o, Ai |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = o);
  }
  function _s(n, r) {
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
  function Hd() {
    return qn().memoizedState;
  }
  function Os(n, r, o) {
    var u = Ui(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, sa(n)) rh(r, o);
    else if (o = Nd(n, r, o, u), o !== null) {
      var c = ar();
      Wr(o, n, u, c), On(o, r, u);
    }
  }
  function zl(n, r, o) {
    var u = Ui(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (sa(n)) rh(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var E = r.lastRenderedState, M = d(E, o);
        if (c.hasEagerState = !0, c.eagerState = M, ui(M, E)) {
          var U = r.interleaved;
          U === null ? (c.next = c, Ld(r)) : (c.next = U.next, U.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      o = Nd(n, r, c, u), o !== null && (c = ar(), Wr(o, n, u, c), On(o, r, u));
    }
  }
  function sa(n) {
    var r = n.alternate;
    return n === fn || r !== null && r === fn;
  }
  function rh(n, r) {
    Cs = Vc = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function On(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Yi(n, o);
    }
  }
  var Ml = { readContext: Ba, useCallback: on, useContext: on, useEffect: on, useImperativeHandle: on, useInsertionEffect: on, useLayoutEffect: on, useMemo: on, useReducer: on, useRef: on, useState: on, useDebugValue: on, useDeferredValue: on, useTransition: on, useMutableSource: on, useSyncExternalStore: on, useId: on, unstable_isNewReconciler: !1 }, rf = { readContext: Ba, useCallback: function(n, r) {
    return Lr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ba, useEffect: Zc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, wu(
      4194308,
      4,
      kl.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return wu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return wu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Lr();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Lr();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Os.bind(null, fn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Lr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: xs, useDeferredValue: function(n) {
    return Lr().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = _s.bind(null, n[1]), Lr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = fn, c = Lr();
    if (An) {
      if (o === void 0) throw Error(m(407));
      o = o();
    } else {
      if (o = r(), cr === null) throw Error(m(349));
      Rn & 30 || Wc(u, r, o);
    }
    c.memoizedState = o;
    var d = { value: o, getSnapshot: r };
    return c.queue = d, Zc(Yc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, Dl(9, qc.bind(null, u, d, o, r), void 0, null), o;
  }, useId: function() {
    var n = Lr(), r = cr.identifierPrefix;
    if (An) {
      var o = zi, u = ki;
      o = (u & ~(1 << 32 - Hr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = _l++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = ze++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ds = {
    readContext: Ba,
    useCallback: tf,
    useContext: Ba,
    useEffect: ws,
    useImperativeHandle: ef,
    useInsertionEffect: Jc,
    useLayoutEffect: Ts,
    useMemo: nf,
    useReducer: Vo,
    useRef: Kc,
    useState: function() {
      return Vo(ro);
    },
    useDebugValue: xs,
    useDeferredValue: function(n) {
      var r = qn();
      return jd(r, er.memoizedState, n);
    },
    useTransition: function() {
      var n = Vo(ro)[0], r = qn().memoizedState;
      return [n, r];
    },
    useMutableSource: Ic,
    useSyncExternalStore: $c,
    useId: Hd,
    unstable_isNewReconciler: !1
  }, af = { readContext: Ba, useCallback: tf, useContext: Ba, useEffect: ws, useImperativeHandle: ef, useInsertionEffect: Jc, useLayoutEffect: Ts, useMemo: nf, useReducer: Ol, useRef: Kc, useState: function() {
    return Ol(ro);
  }, useDebugValue: xs, useDeferredValue: function(n) {
    var r = qn();
    return er === null ? r.memoizedState = n : jd(r, er.memoizedState, n);
  }, useTransition: function() {
    var n = Ol(ro)[0], r = qn().memoizedState;
    return [n, r];
  }, useMutableSource: Ic, useSyncExternalStore: $c, useId: Hd, unstable_isNewReconciler: !1 };
  function fi(n, r) {
    if (n && n.defaultProps) {
      r = I({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function Fd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : I({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var of = { isMounted: function(n) {
    return (n = n._reactInternals) ? jt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = ar(), c = Ui(n), d = no(u, c);
    d.payload = r, o != null && (d.callback = o), r = Fo(n, d, c), r !== null && (Wr(r, n, c, u), Hc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = ar(), c = Ui(n), d = no(u, c);
    d.tag = 1, d.payload = r, o != null && (d.callback = o), r = Fo(n, d, c), r !== null && (Wr(r, n, c, u), Hc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = ar(), u = Ui(n), c = no(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Fo(n, c, u), r !== null && (Wr(r, n, u, o), Hc(r, n, u));
  } };
  function ah(n, r, o, u, c, d, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, E) : r.prototype && r.prototype.isPureReactComponent ? !us(o, u) || !us(c, d) : !0;
  }
  function lf(n, r, o) {
    var u = !1, c = Mr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ba(d) : (c = Zn(r) ? aa : In.current, u = r.contextTypes, d = (u = u != null) ? ia(n, c) : Mr), r = new r(o, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = of, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function ih(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && of.enqueueReplaceState(r, r.state, null);
  }
  function ks(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = {}, Pd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ba(d) : (d = Zn(r) ? aa : In.current, c.context = ia(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Fd(n, r, d, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && of.enqueueReplaceState(c, c.state, null), gs(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ll(n, r) {
    try {
      var o = "", u = r;
      do
        o += Ye(u), u = u.return;
      while (u);
      var c = o;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Bd(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Vd(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var uf = typeof WeakMap == "function" ? WeakMap : Map;
  function oh(n, r, o) {
    o = no(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      zu || (zu = !0, Al = u), Vd(n, r);
    }, o;
  }
  function Id(n, r, o) {
    o = no(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        Vd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (o.callback = function() {
      Vd(n, r), typeof u != "function" && (Wo === null ? Wo = /* @__PURE__ */ new Set([this]) : Wo.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  function $d(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new uf();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = qy.bind(null, n, r, o), r.then(n, n));
  }
  function lh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Io(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = no(-1, 1), r.tag = 2, Fo(o, r, 1))), o.lanes |= 1), n);
  }
  var zs = w.ReactCurrentOwner, tr = !1;
  function br(n, r, o, u) {
    r.child = n === null ? tt(r, null, o, u) : Wn(r, n.child, o, u);
  }
  function ca(n, r, o, u, c) {
    o = o.render;
    var d = r.ref;
    return Fn(r, c), u = Bo(n, r, o, u, d, c), o = ci(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ia(n, r, c)) : (An && o && Pc(r), r.flags |= 1, br(n, r, u, c), r.child);
  }
  function Nl(n, r, o, u, c) {
    if (n === null) {
      var d = o.type;
      return typeof d == "function" && !ap(d) && d.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ft(n, r, d, u, c)) : (n = Ys(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var E = d.memoizedProps;
      if (o = o.compare, o = o !== null ? o : us, o(E, u) && n.ref === r.ref) return Ia(n, r, c);
    }
    return r.flags |= 1, n = Yo(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ft(n, r, o, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (us(d, u) && n.ref === r.ref) if (tr = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, Ia(n, r, c);
    }
    return uh(n, r, o, u, c);
  }
  function Ms(n, r, o) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, yt(Ou, Ta), Ta |= o;
    else {
      if (!(o & 1073741824)) return n = d !== null ? d.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, yt(Ou, Ta), Ta |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : o, yt(Ou, Ta), Ta |= u;
    }
    else d !== null ? (u = d.baseLanes | o, r.memoizedState = null) : u = o, yt(Ou, Ta), Ta |= u;
    return br(n, r, c, o), r.child;
  }
  function Wd(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function uh(n, r, o, u, c) {
    var d = Zn(o) ? aa : In.current;
    return d = ia(r, d), Fn(r, c), o = Bo(n, r, o, u, d, c), u = ci(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ia(n, r, c)) : (An && u && Pc(r), r.flags |= 1, br(n, r, o, c), r.child);
  }
  function sh(n, r, o, u, c) {
    if (Zn(o)) {
      var d = !0;
      dr(r);
    } else d = !1;
    if (Fn(r, c), r.stateNode === null) Va(n, r), lf(r, o, u), ks(r, o, u, c), u = !0;
    else if (n === null) {
      var E = r.stateNode, M = r.memoizedProps;
      E.props = M;
      var U = E.context, ue = o.contextType;
      typeof ue == "object" && ue !== null ? ue = Ba(ue) : (ue = Zn(o) ? aa : In.current, ue = ia(r, ue));
      var Le = o.getDerivedStateFromProps, He = typeof Le == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      He || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (M !== u || U !== ue) && ih(r, E, u, ue), wa = !1;
      var Me = r.memoizedState;
      E.state = Me, gs(r, u, E, c), U = r.memoizedState, M !== u || Me !== U || ur.current || wa ? (typeof Le == "function" && (Fd(r, o, Le, u), U = r.memoizedState), (M = wa || ah(r, o, M, u, Me, U, ue)) ? (He || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = U), E.props = u, E.state = U, E.context = ue, u = M) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, eh(n, r), M = r.memoizedProps, ue = r.type === r.elementType ? M : fi(r.type, M), E.props = ue, He = r.pendingProps, Me = E.context, U = o.contextType, typeof U == "object" && U !== null ? U = Ba(U) : (U = Zn(o) ? aa : In.current, U = ia(r, U));
      var it = o.getDerivedStateFromProps;
      (Le = typeof it == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (M !== He || Me !== U) && ih(r, E, u, U), wa = !1, Me = r.memoizedState, E.state = Me, gs(r, u, E, c);
      var ft = r.memoizedState;
      M !== He || Me !== ft || ur.current || wa ? (typeof it == "function" && (Fd(r, o, it, u), ft = r.memoizedState), (ue = wa || ah(r, o, ue, u, Me, ft, U) || !1) ? (Le || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, ft, U), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, ft, U)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || M === n.memoizedProps && Me === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Me === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = ft), E.props = u, E.state = ft, E.context = U, u = ue) : (typeof E.componentDidUpdate != "function" || M === n.memoizedProps && Me === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && Me === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ls(n, r, o, u, d, c);
  }
  function Ls(n, r, o, u, c, d) {
    Wd(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return c && Lc(r, o, !1), Ia(n, r, d);
    u = r.stateNode, zs.current = r;
    var M = E && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = Wn(r, n.child, null, d), r.child = Wn(r, null, M, d)) : br(n, r, M, d), r.memoizedState = u.state, c && Lc(r, o, !0), r.child;
  }
  function xu(n) {
    var r = n.stateNode;
    r.pendingContext ? Xv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Xv(n, r.context, !1), Ud(n, r.containerInfo);
  }
  function ch(n, r, o, u, c) {
    return Ho(), to(c), r.flags |= 256, br(n, r, o, u), r.child;
  }
  var sf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function cf(n, r, o) {
    var u = r.pendingProps, c = Bn.current, d = !1, E = (r.flags & 128) !== 0, M;
    if ((M = E) || (M = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), M ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), yt(Bn, c & 1), n === null)
      return Od(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, E = { mode: "hidden", children: E }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = E) : d = Go(E, u, 0, null), n = lo(n, u, o, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = qd(o), r.memoizedState = sf, n) : Yd(r, E));
    if (c = n.memoizedState, c !== null && (M = c.dehydrated, M !== null)) return fh(n, r, E, u, M, c, o);
    if (d) {
      d = u.fallback, E = r.mode, c = n.child, M = c.sibling;
      var U = { mode: "hidden", children: u.children };
      return !(E & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = U, r.deletions = null) : (u = Yo(c, U), u.subtreeFlags = c.subtreeFlags & 14680064), M !== null ? d = Yo(M, d) : (d = lo(d, E, o, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, E = n.child.memoizedState, E = E === null ? qd(o) : { baseLanes: E.baseLanes | o, cachePool: null, transitions: E.transitions }, d.memoizedState = E, d.childLanes = n.childLanes & ~o, r.memoizedState = sf, u;
    }
    return d = n.child, n = d.sibling, u = Yo(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Yd(n, r) {
    return r = Go({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ns(n, r, o, u) {
    return u !== null && to(u), Wn(r, n.child, null, o), n = Yd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function fh(n, r, o, u, c, d, E) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Bd(Error(m(422))), Ns(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = Go({ mode: "visible", children: u.children }, c, 0, null), d = lo(d, c, E, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && Wn(r, n.child, null, E), r.child.memoizedState = qd(E), r.memoizedState = sf, d);
    if (!(r.mode & 1)) return Ns(n, r, E, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var M = u.dgst;
      return u = M, d = Error(m(419)), u = Bd(d, u, void 0), Ns(n, r, E, u);
    }
    if (M = (E & n.childLanes) !== 0, tr || M) {
      if (u = cr, u !== null) {
        switch (E & -E) {
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
        c = c & (u.suspendedLanes | E) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ca(n, c), Wr(u, n, c, -1));
      }
      return rp(), u = Bd(Error(m(421))), Ns(n, r, E, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, la = xi(c.nextSibling), oa = r, An = !0, Fa = null, n !== null && (Jn[Ha++] = ki, Jn[Ha++] = zi, Jn[Ha++] = ba, ki = n.id, zi = n.overflow, ba = r), r = Yd(r, u.children), r.flags |= 4096, r);
  }
  function Gd(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Md(n.return, r, o);
  }
  function Vr(n, r, o, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = o, d.tailMode = c);
  }
  function Li(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (br(n, r, u.children, o), u = Bn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Gd(n, o, r);
        else if (n.tag === 19) Gd(n, o, r);
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
    if (yt(Bn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (o = r.child, c = null; o !== null; ) n = o.alternate, n !== null && Bc(n) === null && (c = o), o = o.sibling;
        o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), Vr(r, !1, c, o, d);
        break;
      case "backwards":
        for (o = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Bc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = o, o = c, c = n;
        }
        Vr(r, !0, o, null, d);
        break;
      case "together":
        Vr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Va(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ia(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Ai |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, o = Yo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = Yo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Ps(n, r, o) {
    switch (r.tag) {
      case 3:
        xu(r), Ho();
        break;
      case 5:
        nh(r);
        break;
      case 1:
        Zn(r.type) && dr(r);
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
          return u.dehydrated !== null ? (yt(Bn, Bn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? cf(n, r, o) : (yt(Bn, Bn.current & 1), n = Ia(n, r, o), n !== null ? n.sibling : null);
        yt(Bn, Bn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Li(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), yt(Bn, Bn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ms(n, r, o);
    }
    return Ia(n, r, o);
  }
  var $a, nr, dh, ph;
  $a = function(n, r) {
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
  }, nr = function() {
  }, dh = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Tl(Mi.current);
      var d = null;
      switch (o) {
        case "input":
          c = zt(n, c), u = zt(n, u), d = [];
          break;
        case "select":
          c = I({}, c, { value: void 0 }), u = I({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = et(n, c), u = et(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Lo);
      }
      Yt(o, u);
      var E;
      o = null;
      for (ue in c) if (!u.hasOwnProperty(ue) && c.hasOwnProperty(ue) && c[ue] != null) if (ue === "style") {
        var M = c[ue];
        for (E in M) M.hasOwnProperty(E) && (o || (o = {}), o[E] = "");
      } else ue !== "dangerouslySetInnerHTML" && ue !== "children" && ue !== "suppressContentEditableWarning" && ue !== "suppressHydrationWarning" && ue !== "autoFocus" && (Q.hasOwnProperty(ue) ? d || (d = []) : (d = d || []).push(ue, null));
      for (ue in u) {
        var U = u[ue];
        if (M = c != null ? c[ue] : void 0, u.hasOwnProperty(ue) && U !== M && (U != null || M != null)) if (ue === "style") if (M) {
          for (E in M) !M.hasOwnProperty(E) || U && U.hasOwnProperty(E) || (o || (o = {}), o[E] = "");
          for (E in U) U.hasOwnProperty(E) && M[E] !== U[E] && (o || (o = {}), o[E] = U[E]);
        } else o || (d || (d = []), d.push(
          ue,
          o
        )), o = U;
        else ue === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, M = M ? M.__html : void 0, U != null && M !== U && (d = d || []).push(ue, U)) : ue === "children" ? typeof U != "string" && typeof U != "number" || (d = d || []).push(ue, "" + U) : ue !== "suppressContentEditableWarning" && ue !== "suppressHydrationWarning" && (Q.hasOwnProperty(ue) ? (U != null && ue === "onScroll" && yn("scroll", n), d || M === U || (d = [])) : (d = d || []).push(ue, U));
      }
      o && (d = d || []).push("style", o);
      var ue = d;
      (r.updateQueue = ue) && (r.flags |= 4);
    }
  }, ph = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function As(n, r) {
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
  function vr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function vh(n, r, o) {
    var u = r.pendingProps;
    switch (Ac(r), r.tag) {
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
        return vr(r), null;
      case 1:
        return Zn(r.type) && bu(), vr(r), null;
      case 3:
        return u = r.stateNode, xl(), Mn(ur), Mn(In), Et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Ul(Fa), Fa = null))), nr(n, r), vr(r), null;
      case 5:
        Fc(r);
        var c = Tl(bs.current);
        if (o = r.type, n !== null && r.stateNode != null) dh(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(m(166));
            return vr(r), null;
          }
          if (n = Tl(Mi.current), Uc(r)) {
            u = r.stateNode, o = r.type;
            var d = r.memoizedProps;
            switch (u[_i] = r, u[vs] = d, n = (r.mode & 1) !== 0, o) {
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
                for (c = 0; c < fs.length; c++) yn(fs[c], u);
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
                Ge(u, d), yn("invalid", u);
            }
            Yt(o, d), c = null;
            for (var E in d) if (d.hasOwnProperty(E)) {
              var M = d[E];
              E === "children" ? typeof M == "string" ? u.textContent !== M && (d.suppressHydrationWarning !== !0 && Dc(u.textContent, M, n), c = ["children", M]) : typeof M == "number" && u.textContent !== "" + M && (d.suppressHydrationWarning !== !0 && Dc(
                u.textContent,
                M,
                n
              ), c = ["children", "" + M]) : Q.hasOwnProperty(E) && M != null && E === "onScroll" && yn("scroll", u);
            }
            switch (o) {
              case "input":
                rt(u), j(u, d, !0);
                break;
              case "textarea":
                rt(u), Ct(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Lo);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Bt(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(o, { is: u.is }) : (n = E.createElement(o), o === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, o), n[_i] = r, n[vs] = u, $a(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = Dn(o, u), o) {
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
                  for (c = 0; c < fs.length; c++) yn(fs[c], n);
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
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = I({}, u, { value: void 0 }), yn("invalid", n);
                  break;
                case "textarea":
                  Ge(n, u), c = et(n, u), yn("invalid", n);
                  break;
                default:
                  c = u;
              }
              Yt(o, c), M = c;
              for (d in M) if (M.hasOwnProperty(d)) {
                var U = M[d];
                d === "style" ? ct(n, U) : d === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Z(n, U)) : d === "children" ? typeof U == "string" ? (o !== "textarea" || U !== "") && A(n, U) : typeof U == "number" && A(n, "" + U) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Q.hasOwnProperty(d) ? U != null && d === "onScroll" && yn("scroll", n) : U != null && T(n, d, U, E));
              }
              switch (o) {
                case "input":
                  rt(n), j(n, u, !1);
                  break;
                case "textarea":
                  rt(n), Ct(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + pe(u.value));
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
        return vr(r), null;
      case 6:
        if (n && r.stateNode != null) ph(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(m(166));
          if (o = Tl(bs.current), Tl(Mi.current), Uc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[_i] = r, (d = u.nodeValue !== o) && (n = oa, n !== null)) switch (n.tag) {
              case 3:
                Dc(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Dc(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[_i] = r, r.stateNode = u;
        }
        return vr(r), null;
      case 13:
        if (Mn(Bn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (An && la !== null && r.mode & 1 && !(r.flags & 128)) ys(), Ho(), r.flags |= 98560, d = !1;
          else if (d = Uc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(m(317));
              d[_i] = r;
            } else Ho(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            vr(r), d = !1;
          } else Fa !== null && (Ul(Fa), Fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Bn.current & 1 ? Gn === 0 && (Gn = 3) : rp())), r.updateQueue !== null && (r.flags |= 4), vr(r), null);
      case 4:
        return xl(), nr(n, r), n === null && mu(r.stateNode.containerInfo), vr(r), null;
      case 10:
        return zd(r.type._context), vr(r), null;
      case 17:
        return Zn(r.type) && bu(), vr(r), null;
      case 19:
        if (Mn(Bn), d = r.memoizedState, d === null) return vr(r), null;
        if (u = (r.flags & 128) !== 0, E = d.rendering, E === null) if (u) As(d, !1);
        else {
          if (Gn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (E = Bc(n), E !== null) {
              for (r.flags |= 128, As(d, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) d = o, n = u, d.flags &= 14680066, E = d.alternate, E === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = E.childLanes, d.lanes = E.lanes, d.child = E.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = E.memoizedProps, d.memoizedState = E.memoizedState, d.updateQueue = E.updateQueue, d.type = E.type, n = E.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return yt(Bn, Bn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ht() > ku && (r.flags |= 128, u = !0, As(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Bc(E), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), As(d, !0), d.tail === null && d.tailMode === "hidden" && !E.alternate && !An) return vr(r), null;
          } else 2 * Ht() - d.renderingStartTime > ku && o !== 1073741824 && (r.flags |= 128, u = !0, As(d, !1), r.lanes = 4194304);
          d.isBackwards ? (E.sibling = r.child, r.child = E) : (o = d.last, o !== null ? o.sibling = E : r.child = E, d.last = E);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ht(), r.sibling = null, o = Bn.current, yt(Bn, u ? o & 1 | 2 : o & 1), r) : (vr(r), null);
      case 22:
      case 23:
        return np(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ta & 1073741824 && (vr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : vr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function ff(n, r) {
    switch (Ac(r), r.tag) {
      case 1:
        return Zn(r.type) && bu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xl(), Mn(ur), Mn(In), Et(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Fc(r), null;
      case 13:
        if (Mn(Bn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
          Ho();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Mn(Bn), null;
      case 4:
        return xl(), null;
      case 10:
        return zd(r.type._context), null;
      case 22:
      case 23:
        return np(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Us = !1, Nr = !1, Fy = typeof WeakSet == "function" ? WeakSet : Set, ut = null;
  function _u(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      Un(n, r, u);
    }
    else o.current = null;
  }
  function df(n, r, o) {
    try {
      o();
    } catch (u) {
      Un(n, r, u);
    }
  }
  var hh = !1;
  function mh(n, r) {
    if (ps = Pa, n = ss(), bc(n)) {
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
          var E = 0, M = -1, U = -1, ue = 0, Le = 0, He = n, Me = null;
          t: for (; ; ) {
            for (var it; He !== o || c !== 0 && He.nodeType !== 3 || (M = E + c), He !== d || u !== 0 && He.nodeType !== 3 || (U = E + u), He.nodeType === 3 && (E += He.nodeValue.length), (it = He.firstChild) !== null; )
              Me = He, He = it;
            for (; ; ) {
              if (He === n) break t;
              if (Me === o && ++ue === c && (M = E), Me === d && ++Le === u && (U = E), (it = He.nextSibling) !== null) break;
              He = Me, Me = He.parentNode;
            }
            He = it;
          }
          o = M === -1 || U === -1 ? null : { start: M, end: U };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Sl = { focusedElem: n, selectionRange: o }, Pa = !1, ut = r; ut !== null; ) if (r = ut, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ut = n;
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
              var vt = ft.memoizedProps, Qn = ft.memoizedState, J = r.stateNode, W = J.getSnapshotBeforeUpdate(r.elementType === r.type ? vt : fi(r.type, vt), Qn);
              J.__reactInternalSnapshotBeforeUpdate = W;
            }
            break;
          case 3:
            var re = r.stateNode.containerInfo;
            re.nodeType === 1 ? re.textContent = "" : re.nodeType === 9 && re.documentElement && re.removeChild(re.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (Ne) {
        Un(r, r.return, Ne);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ut = n;
        break;
      }
      ut = r.return;
    }
    return ft = hh, hh = !1, ft;
  }
  function js(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && df(r, o, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Hs(n, r) {
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
  function Qd(n) {
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
  function pf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, pf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[_i], delete r[vs], delete r[hs], delete r[Eu], delete r[jy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Fs(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ao(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Fs(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ni(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Lo));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ni(n, r, o), n = n.sibling; n !== null; ) Ni(n, r, o), n = n.sibling;
  }
  function Pi(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Pi(n, r, o), n = n.sibling; n !== null; ) Pi(n, r, o), n = n.sibling;
  }
  var Yn = null, Ir = !1;
  function $r(n, r, o) {
    for (o = o.child; o !== null; ) yh(n, r, o), o = o.sibling;
  }
  function yh(n, r, o) {
    if (na && typeof na.onCommitFiberUnmount == "function") try {
      na.onCommitFiberUnmount(wo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        Nr || _u(o, r);
      case 6:
        var u = Yn, c = Ir;
        Yn = null, $r(n, r, o), Yn = u, Ir = c, Yn !== null && (Ir ? (n = Yn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Yn.removeChild(o.stateNode));
        break;
      case 18:
        Yn !== null && (Ir ? (n = Yn, o = o.stateNode, n.nodeType === 8 ? Su(n.parentNode, o) : n.nodeType === 1 && Su(n, o), oi(n)) : Su(Yn, o.stateNode));
        break;
      case 4:
        u = Yn, c = Ir, Yn = o.stateNode.containerInfo, Ir = !0, $r(n, r, o), Yn = u, Ir = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Nr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, E = d.destroy;
            d = d.tag, E !== void 0 && (d & 2 || d & 4) && df(o, r, E), c = c.next;
          } while (c !== u);
        }
        $r(n, r, o);
        break;
      case 1:
        if (!Nr && (_u(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (M) {
          Un(o, r, M);
        }
        $r(n, r, o);
        break;
      case 21:
        $r(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Nr = (u = Nr) || o.memoizedState !== null, $r(n, r, o), Nr = u) : $r(n, r, o);
        break;
      default:
        $r(n, r, o);
    }
  }
  function gh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new Fy()), r.forEach(function(u) {
        var c = _h.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function di(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var c = o[u];
      try {
        var d = n, E = r, M = E;
        e: for (; M !== null; ) {
          switch (M.tag) {
            case 5:
              Yn = M.stateNode, Ir = !1;
              break e;
            case 3:
              Yn = M.stateNode.containerInfo, Ir = !0;
              break e;
            case 4:
              Yn = M.stateNode.containerInfo, Ir = !0;
              break e;
          }
          M = M.return;
        }
        if (Yn === null) throw Error(m(160));
        yh(d, E, c), Yn = null, Ir = !1;
        var U = c.alternate;
        U !== null && (U.return = null), c.return = null;
      } catch (ue) {
        Un(c, r, ue);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Xd(r, n), r = r.sibling;
  }
  function Xd(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (di(r, n), fa(n), u & 4) {
          try {
            js(3, n, n.return), Hs(3, n);
          } catch (vt) {
            Un(n, n.return, vt);
          }
          try {
            js(5, n, n.return);
          } catch (vt) {
            Un(n, n.return, vt);
          }
        }
        break;
      case 1:
        di(r, n), fa(n), u & 512 && o !== null && _u(o, o.return);
        break;
      case 5:
        if (di(r, n), fa(n), u & 512 && o !== null && _u(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            A(c, "");
          } catch (vt) {
            Un(n, n.return, vt);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, E = o !== null ? o.memoizedProps : d, M = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            M === "input" && d.type === "radio" && d.name != null && Mt(c, d), Dn(M, E);
            var ue = Dn(M, d);
            for (E = 0; E < U.length; E += 2) {
              var Le = U[E], He = U[E + 1];
              Le === "style" ? ct(c, He) : Le === "dangerouslySetInnerHTML" ? Z(c, He) : Le === "children" ? A(c, He) : T(c, Le, He, ue);
            }
            switch (M) {
              case "input":
                F(c, d);
                break;
              case "textarea":
                _t(c, d);
                break;
              case "select":
                var Me = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var it = d.value;
                it != null ? Je(c, !!d.multiple, it, !1) : Me !== !!d.multiple && (d.defaultValue != null ? Je(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Je(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[vs] = d;
          } catch (vt) {
            Un(n, n.return, vt);
          }
        }
        break;
      case 6:
        if (di(r, n), fa(n), u & 4) {
          if (n.stateNode === null) throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (vt) {
            Un(n, n.return, vt);
          }
        }
        break;
      case 3:
        if (di(r, n), fa(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          oi(r.containerInfo);
        } catch (vt) {
          Un(n, n.return, vt);
        }
        break;
      case 4:
        di(r, n), fa(n);
        break;
      case 13:
        di(r, n), fa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Jd = Ht())), u & 4 && gh(n);
        break;
      case 22:
        if (Le = o !== null && o.memoizedState !== null, n.mode & 1 ? (Nr = (ue = Nr) || Le, di(r, n), Nr = ue) : di(r, n), fa(n), u & 8192) {
          if (ue = n.memoizedState !== null, (n.stateNode.isHidden = ue) && !Le && n.mode & 1) for (ut = n, Le = n.child; Le !== null; ) {
            for (He = ut = Le; ut !== null; ) {
              switch (Me = ut, it = Me.child, Me.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, Me, Me.return);
                  break;
                case 1:
                  _u(Me, Me.return);
                  var ft = Me.stateNode;
                  if (typeof ft.componentWillUnmount == "function") {
                    u = Me, o = Me.return;
                    try {
                      r = u, ft.props = r.memoizedProps, ft.state = r.memoizedState, ft.componentWillUnmount();
                    } catch (vt) {
                      Un(u, o, vt);
                    }
                  }
                  break;
                case 5:
                  _u(Me, Me.return);
                  break;
                case 22:
                  if (Me.memoizedState !== null) {
                    Bs(He);
                    continue;
                  }
              }
              it !== null ? (it.return = Me, ut = it) : Bs(He);
            }
            Le = Le.sibling;
          }
          e: for (Le = null, He = n; ; ) {
            if (He.tag === 5) {
              if (Le === null) {
                Le = He;
                try {
                  c = He.stateNode, ue ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (M = He.stateNode, U = He.memoizedProps.style, E = U != null && U.hasOwnProperty("display") ? U.display : null, M.style.display = gt("display", E));
                } catch (vt) {
                  Un(n, n.return, vt);
                }
              }
            } else if (He.tag === 6) {
              if (Le === null) try {
                He.stateNode.nodeValue = ue ? "" : He.memoizedProps;
              } catch (vt) {
                Un(n, n.return, vt);
              }
            } else if ((He.tag !== 22 && He.tag !== 23 || He.memoizedState === null || He === n) && He.child !== null) {
              He.child.return = He, He = He.child;
              continue;
            }
            if (He === n) break e;
            for (; He.sibling === null; ) {
              if (He.return === null || He.return === n) break e;
              Le === He && (Le = null), He = He.return;
            }
            Le === He && (Le = null), He.sibling.return = He.return, He = He.sibling;
          }
        }
        break;
      case 19:
        di(r, n), fa(n), u & 4 && gh(n);
        break;
      case 21:
        break;
      default:
        di(
          r,
          n
        ), fa(n);
    }
  }
  function fa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Fs(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (A(c, ""), u.flags &= -33);
            var d = ao(n);
            Pi(n, d, c);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, M = ao(n);
            Ni(n, M, E);
            break;
          default:
            throw Error(m(161));
        }
      } catch (U) {
        Un(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function By(n, r, o) {
    ut = n, Kd(n);
  }
  function Kd(n, r, o) {
    for (var u = (n.mode & 1) !== 0; ut !== null; ) {
      var c = ut, d = c.child;
      if (c.tag === 22 && u) {
        var E = c.memoizedState !== null || Us;
        if (!E) {
          var M = c.alternate, U = M !== null && M.memoizedState !== null || Nr;
          M = Us;
          var ue = Nr;
          if (Us = E, (Nr = U) && !ue) for (ut = c; ut !== null; ) E = ut, U = E.child, E.tag === 22 && E.memoizedState !== null ? Zd(c) : U !== null ? (U.return = E, ut = U) : Zd(c);
          for (; d !== null; ) ut = d, Kd(d), d = d.sibling;
          ut = c, Us = M, Nr = ue;
        }
        Sh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ut = d) : Sh(n);
    }
  }
  function Sh(n) {
    for (; ut !== null; ) {
      var r = ut;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Nr || Hs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Nr) if (o === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? o.memoizedProps : fi(r.type, o.memoizedProps);
                u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Ad(r, d, u);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Ad(r, E, o);
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
                var ue = r.alternate;
                if (ue !== null) {
                  var Le = ue.memoizedState;
                  if (Le !== null) {
                    var He = Le.dehydrated;
                    He !== null && oi(He);
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
              throw Error(m(163));
          }
          Nr || r.flags & 512 && Qd(r);
        } catch (Me) {
          Un(r, r.return, Me);
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
  function Bs(n) {
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
  function Zd(n) {
    for (; ut !== null; ) {
      var r = ut;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Hs(4, r);
            } catch (U) {
              Un(r, o, U);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (U) {
                Un(r, c, U);
              }
            }
            var d = r.return;
            try {
              Qd(r);
            } catch (U) {
              Un(r, d, U);
            }
            break;
          case 5:
            var E = r.return;
            try {
              Qd(r);
            } catch (U) {
              Un(r, E, U);
            }
        }
      } catch (U) {
        Un(r, r.return, U);
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
  var Vy = Math.ceil, $o = w.ReactCurrentDispatcher, Pl = w.ReactCurrentOwner, Rr = w.ReactCurrentBatchConfig, Jt = 0, cr = null, rr = null, Cr = 0, Ta = 0, Ou = ja(0), Gn = 0, Vs = null, Ai = 0, Du = 0, vf = 0, Is = null, da = null, Jd = 0, ku = 1 / 0, xa = null, zu = !1, Al = null, Wo = null, hf = !1, io = null, $s = 0, qo = 0, Mu = null, Ws = -1, Pr = 0;
  function ar() {
    return Jt & 6 ? Ht() : Ws !== -1 ? Ws : Ws = Ht();
  }
  function Ui(n) {
    return n.mode & 1 ? Jt & 2 && Cr !== 0 ? Cr & -Cr : Hy.transition !== null ? (Pr === 0 && (Pr = au()), Pr) : (n = sn, n !== 0 || (n = window.event, n = n === void 0 ? 16 : fu(n.type)), n) : 1;
  }
  function Wr(n, r, o, u) {
    if (50 < qo) throw qo = 0, Mu = null, Error(m(185));
    qi(n, o, u), (!(Jt & 2) || n !== cr) && (n === cr && (!(Jt & 2) && (Du |= o), Gn === 4 && pi(n, Cr)), pa(n, u), o === 1 && Jt === 0 && !(r.mode & 1) && (ku = Ht() + 500, Ru && Di()));
  }
  function pa(n, r) {
    var o = n.callbackNode;
    cl(n, r);
    var u = ii(n, n === cr ? Cr : 0);
    if (u === 0) o !== null && gr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && gr(o), r === 1) n.tag === 0 ? Po(ep.bind(null, n)) : Nc(ep.bind(null, n)), gu(function() {
        !(Jt & 6) && Di();
      }), o = null;
      else {
        switch (ou(u)) {
          case 1:
            o = ri;
            break;
          case 4:
            o = ul;
            break;
          case 16:
            o = sl;
            break;
          case 536870912:
            o = tu;
            break;
          default:
            o = sl;
        }
        o = Dh(o, mf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function mf(n, r) {
    if (Ws = -1, Pr = 0, Jt & 6) throw Error(m(327));
    var o = n.callbackNode;
    if (Lu() && n.callbackNode !== o) return null;
    var u = ii(n, n === cr ? Cr : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = yf(n, u);
    else {
      r = u;
      var c = Jt;
      Jt |= 2;
      var d = bh();
      (cr !== n || Cr !== r) && (xa = null, ku = Ht() + 500, oo(n, r));
      do
        try {
          Rh();
          break;
        } catch (M) {
          Eh(n, M);
        }
      while (!0);
      kd(), $o.current = d, Jt = c, rr !== null ? r = 0 : (cr = null, Cr = 0, r = Gn);
    }
    if (r !== 0) {
      if (r === 2 && (c = xo(n), c !== 0 && (u = c, r = qs(n, c))), r === 1) throw o = Vs, oo(n, 0), pi(n, u), pa(n, Ht()), o;
      if (r === 6) pi(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Iy(c) && (r = yf(n, u), r === 2 && (d = xo(n), d !== 0 && (u = d, r = qs(n, d))), r === 1)) throw o = Vs, oo(n, 0), pi(n, u), pa(n, Ht()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Hl(n, da, xa);
            break;
          case 3:
            if (pi(n, u), (u & 130023424) === u && (r = Jd + 500 - Ht(), 10 < r)) {
              if (ii(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                ar(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = zc(Hl.bind(null, n, da, xa), r);
              break;
            }
            Hl(n, da, xa);
            break;
          case 4:
            if (pi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var E = 31 - Hr(u);
              d = 1 << E, E = r[E], E > c && (c = E), u &= ~d;
            }
            if (u = c, u = Ht() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Vy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = zc(Hl.bind(null, n, da, xa), u);
              break;
            }
            Hl(n, da, xa);
            break;
          case 5:
            Hl(n, da, xa);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return pa(n, Ht()), n.callbackNode === o ? mf.bind(null, n) : null;
  }
  function qs(n, r) {
    var o = Is;
    return n.current.memoizedState.isDehydrated && (oo(n, r).flags |= 256), n = yf(n, r), n !== 2 && (r = da, da = o, r !== null && Ul(r)), n;
  }
  function Ul(n) {
    da === null ? da = n : da.push.apply(da, n);
  }
  function Iy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var c = o[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ui(d(), c)) return !1;
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
  function pi(n, r) {
    for (r &= ~vf, r &= ~Du, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Hr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function ep(n) {
    if (Jt & 6) throw Error(m(327));
    Lu();
    var r = ii(n, 0);
    if (!(r & 1)) return pa(n, Ht()), null;
    var o = yf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = xo(n);
      u !== 0 && (r = u, o = qs(n, u));
    }
    if (o === 1) throw o = Vs, oo(n, 0), pi(n, r), pa(n, Ht()), o;
    if (o === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Hl(n, da, xa), pa(n, Ht()), null;
  }
  function tp(n, r) {
    var o = Jt;
    Jt |= 1;
    try {
      return n(r);
    } finally {
      Jt = o, Jt === 0 && (ku = Ht() + 500, Ru && Di());
    }
  }
  function jl(n) {
    io !== null && io.tag === 0 && !(Jt & 6) && Lu();
    var r = Jt;
    Jt |= 1;
    var o = Rr.transition, u = sn;
    try {
      if (Rr.transition = null, sn = 1, n) return n();
    } finally {
      sn = u, Rr.transition = o, Jt = r, !(Jt & 6) && Di();
    }
  }
  function np() {
    Ta = Ou.current, Mn(Ou);
  }
  function oo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Td(o)), rr !== null) for (o = rr.return; o !== null; ) {
      var u = o;
      switch (Ac(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && bu();
          break;
        case 3:
          xl(), Mn(ur), Mn(In), Et();
          break;
        case 5:
          Fc(u);
          break;
        case 4:
          xl();
          break;
        case 13:
          Mn(Bn);
          break;
        case 19:
          Mn(Bn);
          break;
        case 10:
          zd(u.type._context);
          break;
        case 22:
        case 23:
          np();
      }
      o = o.return;
    }
    if (cr = n, rr = n = Yo(n.current, null), Cr = Ta = r, Gn = 0, Vs = null, vf = Du = Ai = 0, da = Is = null, wl !== null) {
      for (r = 0; r < wl.length; r++) if (o = wl[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var c = u.next, d = o.pending;
        if (d !== null) {
          var E = d.next;
          d.next = c, u.next = E;
        }
        o.pending = u;
      }
      wl = null;
    }
    return n;
  }
  function Eh(n, r) {
    do {
      var o = rr;
      try {
        if (kd(), qt.current = Ml, Vc) {
          for (var u = fn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Vc = !1;
        }
        if (Rn = 0, pr = er = fn = null, Cs = !1, _l = 0, Pl.current = null, o === null || o.return === null) {
          Gn = 1, Vs = r, rr = null;
          break;
        }
        e: {
          var d = n, E = o.return, M = o, U = r;
          if (r = Cr, M.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var ue = U, Le = M, He = Le.tag;
            if (!(Le.mode & 1) && (He === 0 || He === 11 || He === 15)) {
              var Me = Le.alternate;
              Me ? (Le.updateQueue = Me.updateQueue, Le.memoizedState = Me.memoizedState, Le.lanes = Me.lanes) : (Le.updateQueue = null, Le.memoizedState = null);
            }
            var it = lh(E);
            if (it !== null) {
              it.flags &= -257, Io(it, E, M, d, r), it.mode & 1 && $d(d, ue, r), r = it, U = ue;
              var ft = r.updateQueue;
              if (ft === null) {
                var vt = /* @__PURE__ */ new Set();
                vt.add(U), r.updateQueue = vt;
              } else ft.add(U);
              break e;
            } else {
              if (!(r & 1)) {
                $d(d, ue, r), rp();
                break e;
              }
              U = Error(m(426));
            }
          } else if (An && M.mode & 1) {
            var Qn = lh(E);
            if (Qn !== null) {
              !(Qn.flags & 65536) && (Qn.flags |= 256), Io(Qn, E, M, d, r), to(Ll(U, M));
              break e;
            }
          }
          d = U = Ll(U, M), Gn !== 4 && (Gn = 2), Is === null ? Is = [d] : Is.push(d), d = E;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var J = oh(d, U, r);
                th(d, J);
                break e;
              case 1:
                M = U;
                var W = d.type, re = d.stateNode;
                if (!(d.flags & 128) && (typeof W.getDerivedStateFromError == "function" || re !== null && typeof re.componentDidCatch == "function" && (Wo === null || !Wo.has(re)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Ne = Id(d, M, r);
                  th(d, Ne);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        wh(o);
      } catch (dt) {
        r = dt, rr === o && o !== null && (rr = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bh() {
    var n = $o.current;
    return $o.current = Ml, n === null ? Ml : n;
  }
  function rp() {
    (Gn === 0 || Gn === 3 || Gn === 2) && (Gn = 4), cr === null || !(Ai & 268435455) && !(Du & 268435455) || pi(cr, Cr);
  }
  function yf(n, r) {
    var o = Jt;
    Jt |= 2;
    var u = bh();
    (cr !== n || Cr !== r) && (xa = null, oo(n, r));
    do
      try {
        $y();
        break;
      } catch (c) {
        Eh(n, c);
      }
    while (!0);
    if (kd(), Jt = o, $o.current = u, rr !== null) throw Error(m(261));
    return cr = null, Cr = 0, Gn;
  }
  function $y() {
    for (; rr !== null; ) Ch(rr);
  }
  function Rh() {
    for (; rr !== null && !ti(); ) Ch(rr);
  }
  function Ch(n) {
    var r = Oh(n.alternate, n, Ta);
    n.memoizedProps = n.pendingProps, r === null ? wh(n) : rr = r, Pl.current = null;
  }
  function wh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = ff(o, r), o !== null) {
          o.flags &= 32767, rr = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Gn = 6, rr = null;
          return;
        }
      } else if (o = vh(o, r, Ta), o !== null) {
        rr = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        rr = r;
        return;
      }
      rr = r = n;
    } while (r !== null);
    Gn === 0 && (Gn = 5);
  }
  function Hl(n, r, o) {
    var u = sn, c = Rr.transition;
    try {
      Rr.transition = null, sn = 1, Wy(n, r, o, u);
    } finally {
      Rr.transition = c, sn = u;
    }
    return null;
  }
  function Wy(n, r, o, u) {
    do
      Lu();
    while (io !== null);
    if (Jt & 6) throw Error(m(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (ad(n, d), n === cr && (rr = cr = null, Cr = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || hf || (hf = !0, Dh(sl, function() {
      return Lu(), null;
    })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
      d = Rr.transition, Rr.transition = null;
      var E = sn;
      sn = 1;
      var M = Jt;
      Jt |= 4, Pl.current = null, mh(n, o), Xd(o, n), vu(Sl), Pa = !!ps, Sl = ps = null, n.current = o, By(o), ni(), Jt = M, sn = E, Rr.transition = d;
    } else n.current = o;
    if (hf && (hf = !1, io = n, $s = c), d = n.pendingLanes, d === 0 && (Wo = null), Ju(o.stateNode), pa(n, Ht()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (zu) throw zu = !1, n = Al, Al = null, n;
    return $s & 1 && n.tag !== 0 && Lu(), d = n.pendingLanes, d & 1 ? n === Mu ? qo++ : (qo = 0, Mu = n) : qo = 0, Di(), null;
  }
  function Lu() {
    if (io !== null) {
      var n = ou($s), r = Rr.transition, o = sn;
      try {
        if (Rr.transition = null, sn = 16 > n ? 16 : n, io === null) var u = !1;
        else {
          if (n = io, io = null, $s = 0, Jt & 6) throw Error(m(331));
          var c = Jt;
          for (Jt |= 4, ut = n.current; ut !== null; ) {
            var d = ut, E = d.child;
            if (ut.flags & 16) {
              var M = d.deletions;
              if (M !== null) {
                for (var U = 0; U < M.length; U++) {
                  var ue = M[U];
                  for (ut = ue; ut !== null; ) {
                    var Le = ut;
                    switch (Le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, Le, d);
                    }
                    var He = Le.child;
                    if (He !== null) He.return = Le, ut = He;
                    else for (; ut !== null; ) {
                      Le = ut;
                      var Me = Le.sibling, it = Le.return;
                      if (pf(Le), Le === ue) {
                        ut = null;
                        break;
                      }
                      if (Me !== null) {
                        Me.return = it, ut = Me;
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
                      var Qn = vt.sibling;
                      vt.sibling = null, vt = Qn;
                    } while (vt !== null);
                  }
                }
                ut = d;
              }
            }
            if (d.subtreeFlags & 2064 && E !== null) E.return = d, ut = E;
            else e: for (; ut !== null; ) {
              if (d = ut, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  js(9, d, d.return);
              }
              var J = d.sibling;
              if (J !== null) {
                J.return = d.return, ut = J;
                break e;
              }
              ut = d.return;
            }
          }
          var W = n.current;
          for (ut = W; ut !== null; ) {
            E = ut;
            var re = E.child;
            if (E.subtreeFlags & 2064 && re !== null) re.return = E, ut = re;
            else e: for (E = W; ut !== null; ) {
              if (M = ut, M.flags & 2048) try {
                switch (M.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hs(9, M);
                }
              } catch (dt) {
                Un(M, M.return, dt);
              }
              if (M === E) {
                ut = null;
                break e;
              }
              var Ne = M.sibling;
              if (Ne !== null) {
                Ne.return = M.return, ut = Ne;
                break e;
              }
              ut = M.return;
            }
          }
          if (Jt = c, Di(), na && typeof na.onPostCommitFiberRoot == "function") try {
            na.onPostCommitFiberRoot(wo, n);
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
    r = Ll(o, r), r = oh(n, r, 1), n = Fo(n, r, 1), r = ar(), n !== null && (qi(n, 1, r), pa(n, r));
  }
  function Un(n, r, o) {
    if (n.tag === 3) Th(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Th(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Wo === null || !Wo.has(u))) {
          n = Ll(o, n), n = Id(r, n, 1), r = Fo(r, n, 1), n = ar(), r !== null && (qi(r, 1, n), pa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function qy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & o, cr === n && (Cr & o) === o && (Gn === 4 || Gn === 3 && (Cr & 130023424) === Cr && 500 > Ht() - Jd ? oo(n, 0) : vf |= o), pa(n, r);
  }
  function xh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ea, Ea <<= 1, !(Ea & 130023424) && (Ea = 4194304)) : r = 1);
    var o = ar();
    n = Ca(n, r), n !== null && (qi(n, r, o), pa(n, o));
  }
  function Yy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), xh(n, o);
  }
  function _h(n, r) {
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
        throw Error(m(314));
    }
    u !== null && u.delete(r), xh(n, o);
  }
  var Oh;
  Oh = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || ur.current) tr = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return tr = !1, Ps(n, r, o);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, An && r.flags & 1048576 && Kv(r, eo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Va(n, r), n = r.pendingProps;
        var c = ia(r, In.current);
        Fn(r, o), c = Bo(null, r, u, n, c, o);
        var d = ci();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Zn(u) ? (d = !0, dr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Pd(r), c.updater = of, r.stateNode = c, c._reactInternals = r, ks(r, u, n, o), r = Ls(null, r, u, !0, d, o)) : (r.tag = 0, An && d && Pc(r), br(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Va(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Qy(u), n = fi(u, n), c) {
            case 0:
              r = uh(null, r, u, n, o);
              break e;
            case 1:
              r = sh(null, r, u, n, o);
              break e;
            case 11:
              r = ca(null, r, u, n, o);
              break e;
            case 14:
              r = Nl(null, r, u, fi(u.type, n), o);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : fi(u, c), uh(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : fi(u, c), sh(n, r, u, c, o);
      case 3:
        e: {
          if (xu(r), n === null) throw Error(m(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, eh(n, r), gs(r, u, null, o);
          var E = r.memoizedState;
          if (u = E.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ll(Error(m(423)), r), r = ch(n, r, u, o, c);
            break e;
          } else if (u !== c) {
            c = Ll(Error(m(424)), r), r = ch(n, r, u, o, c);
            break e;
          } else for (la = xi(r.stateNode.containerInfo.firstChild), oa = r, An = !0, Fa = null, o = tt(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Ho(), u === c) {
              r = Ia(n, r, o);
              break e;
            }
            br(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return nh(r), n === null && Od(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, E = c.children, kc(u, c) ? E = null : d !== null && kc(u, d) && (r.flags |= 32), Wd(n, r), br(n, r, E, o), r.child;
      case 6:
        return n === null && Od(r), null;
      case 13:
        return cf(n, r, o);
      case 4:
        return Ud(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Wn(r, null, u, o) : br(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : fi(u, c), ca(n, r, u, c, o);
      case 7:
        return br(n, r, r.pendingProps, o), r.child;
      case 8:
        return br(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return br(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, E = c.value, yt(Ra, u._currentValue), u._currentValue = E, d !== null) if (ui(d.value, E)) {
            if (d.children === c.children && !ur.current) {
              r = Ia(n, r, o);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var M = d.dependencies;
            if (M !== null) {
              E = d.child;
              for (var U = M.firstContext; U !== null; ) {
                if (U.context === u) {
                  if (d.tag === 1) {
                    U = no(-1, o & -o), U.tag = 2;
                    var ue = d.updateQueue;
                    if (ue !== null) {
                      ue = ue.shared;
                      var Le = ue.pending;
                      Le === null ? U.next = U : (U.next = Le.next, Le.next = U), ue.pending = U;
                    }
                  }
                  d.lanes |= o, U = d.alternate, U !== null && (U.lanes |= o), Md(
                    d.return,
                    o,
                    r
                  ), M.lanes |= o;
                  break;
                }
                U = U.next;
              }
            } else if (d.tag === 10) E = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (E = d.return, E === null) throw Error(m(341));
              E.lanes |= o, M = E.alternate, M !== null && (M.lanes |= o), Md(E, o, r), E = d.sibling;
            } else E = d.child;
            if (E !== null) E.return = d;
            else for (E = d; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (d = E.sibling, d !== null) {
                d.return = E.return, E = d;
                break;
              }
              E = E.return;
            }
            d = E;
          }
          br(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, Fn(r, o), c = Ba(c), u = u(c), r.flags |= 1, br(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = fi(u, r.pendingProps), c = fi(u.type, c), Nl(n, r, u, c, o);
      case 15:
        return Ft(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : fi(u, c), Va(n, r), r.tag = 1, Zn(u) ? (n = !0, dr(r)) : n = !1, Fn(r, o), lf(r, u, c), ks(r, u, c, o), Ls(null, r, u, !0, n, o);
      case 19:
        return Li(n, r, o);
      case 22:
        return Ms(n, r, o);
    }
    throw Error(m(156, r.tag));
  };
  function Dh(n, r) {
    return Ln(n, r);
  }
  function Gy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wa(n, r, o, u) {
    return new Gy(n, r, o, u);
  }
  function ap(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Qy(n) {
    if (typeof n == "function") return ap(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ke) return 11;
      if (n === Qe) return 14;
    }
    return 2;
  }
  function Yo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Wa(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ys(n, r, o, u, c, d) {
    var E = 2;
    if (u = n, typeof n == "function") ap(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case P:
        return lo(o.children, c, d, r);
      case fe:
        E = 8, c |= 8;
        break;
      case de:
        return n = Wa(12, o, r, c | 2), n.elementType = de, n.lanes = d, n;
      case Se:
        return n = Wa(13, o, r, c), n.elementType = Se, n.lanes = d, n;
      case qe:
        return n = Wa(19, o, r, c), n.elementType = qe, n.lanes = d, n;
      case xe:
        return Go(o, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case _e:
            E = 10;
            break e;
          case Pe:
            E = 9;
            break e;
          case ke:
            E = 11;
            break e;
          case Qe:
            E = 14;
            break e;
          case Ie:
            E = 16, u = null;
            break e;
        }
        throw Error(m(130, n == null ? n : typeof n, ""));
    }
    return r = Wa(E, o, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function lo(n, r, o, u) {
    return n = Wa(7, n, u, r), n.lanes = o, n;
  }
  function Go(n, r, o, u) {
    return n = Wa(22, n, u, r), n.elementType = xe, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function ip(n, r, o) {
    return n = Wa(6, n, null, r), n.lanes = o, n;
  }
  function gf(n, r, o) {
    return r = Wa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function kh(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = iu(0), this.expirationTimes = iu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = iu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Sf(n, r, o, u, c, d, E, M, U) {
    return n = new kh(n, r, o, M, U), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Wa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pd(d), n;
  }
  function Xy(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: D, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function op(n) {
    if (!n) return Mr;
    n = n._reactInternals;
    e: {
      if (jt(n) !== n || n.tag !== 1) throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Zn(o)) return ms(n, o, r);
    }
    return r;
  }
  function zh(n, r, o, u, c, d, E, M, U) {
    return n = Sf(o, u, !0, n, c, d, E, M, U), n.context = op(null), o = n.current, u = ar(), c = Ui(o), d = no(u, c), d.callback = r ?? null, Fo(o, d, c), n.current.lanes = c, qi(n, c, u), pa(n, u), n;
  }
  function Ef(n, r, o, u) {
    var c = r.current, d = ar(), E = Ui(c);
    return o = op(o), r.context === null ? r.context = o : r.pendingContext = o, r = no(d, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Fo(c, r, E), n !== null && (Wr(n, c, E, d), Hc(n, c, E)), E;
  }
  function bf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function lp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Rf(n, r) {
    lp(n, r), (n = n.alternate) && lp(n, r);
  }
  function Mh() {
    return null;
  }
  var Fl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function up(n) {
    this._internalRoot = n;
  }
  Cf.prototype.render = up.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(m(409));
    Ef(n, r, null, null);
  }, Cf.prototype.unmount = up.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      jl(function() {
        Ef(null, n, null, null);
      }), r[Zi] = null;
    }
  };
  function Cf(n) {
    this._internalRoot = n;
  }
  Cf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Nt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < lr.length && r !== 0 && r < lr[o].priority; o++) ;
      lr.splice(o, 0, n), o === 0 && ns(n);
    }
  };
  function sp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function wf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Lh() {
  }
  function Ky(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var ue = bf(E);
          d.call(ue);
        };
      }
      var E = zh(r, u, n, 0, null, !1, !1, "", Lh);
      return n._reactRootContainer = E, n[Zi] = E.current, mu(n.nodeType === 8 ? n.parentNode : n), jl(), E;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var M = u;
      u = function() {
        var ue = bf(U);
        M.call(ue);
      };
    }
    var U = Sf(n, 0, !1, null, null, !1, !1, "", Lh);
    return n._reactRootContainer = U, n[Zi] = U.current, mu(n.nodeType === 8 ? n.parentNode : n), jl(function() {
      Ef(r, U, o, u);
    }), U;
  }
  function Gs(n, r, o, u, c) {
    var d = o._reactRootContainer;
    if (d) {
      var E = d;
      if (typeof c == "function") {
        var M = c;
        c = function() {
          var U = bf(E);
          M.call(U);
        };
      }
      Ef(r, E, n, c);
    } else E = Ky(o, r, n, c, u);
    return bf(E);
  }
  nn = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ai(r.pendingLanes);
          o !== 0 && (Yi(r, o | 1), pa(r, Ht()), !(Jt & 6) && (ku = Ht() + 500, Di()));
        }
        break;
      case 13:
        jl(function() {
          var u = Ca(n, 1);
          if (u !== null) {
            var c = ar();
            Wr(u, n, 1, c);
          }
        }), Rf(n, 1);
    }
  }, es = function(n) {
    if (n.tag === 13) {
      var r = Ca(n, 134217728);
      if (r !== null) {
        var o = ar();
        Wr(r, n, 134217728, o);
      }
      Rf(n, 134217728);
    }
  }, bi = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), o = Ca(n, r);
      if (o !== null) {
        var u = ar();
        Wr(o, n, r, u);
      }
      Rf(n, r);
    }
  }, Nt = function() {
    return sn;
  }, lu = function(n, r) {
    var o = sn;
    try {
      return sn = n, r();
    } finally {
      sn = o;
    }
  }, mn = function(n, r, o) {
    switch (r) {
      case "input":
        if (F(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Hn(u);
              if (!c) throw Error(m(90));
              we(u), F(u, c);
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
  }, Wi = tp, bo = jl;
  var Zy = { usingClientEntryPoint: !1, Events: [St, si, Hn, Ma, Ja, tp] }, Qs = { findFiberByHostInstance: El, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nh = { bundleType: Qs.bundleType, version: Qs.version, rendererPackageName: Qs.rendererPackageName, rendererConfig: Qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Qs.findFiberByHostInstance || Mh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber) try {
      wo = Qo.inject(Nh), na = Qo;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zy, Ka.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sp(r)) throw Error(m(200));
    return Xy(n, r, null, o);
  }, Ka.createRoot = function(n, r) {
    if (!sp(n)) throw Error(m(299));
    var o = !1, u = "", c = Fl;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Sf(n, 1, !1, null, null, o, !1, u, c), n[Zi] = r.current, mu(n.nodeType === 8 ? n.parentNode : n), new up(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = $n(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return jl(n);
  }, Ka.hydrate = function(n, r, o) {
    if (!wf(r)) throw Error(m(200));
    return Gs(null, n, r, !0, o);
  }, Ka.hydrateRoot = function(n, r, o) {
    if (!sp(n)) throw Error(m(405));
    var u = o != null && o.hydratedSources || null, c = !1, d = "", E = Fl;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (d = o.identifierPrefix), o.onRecoverableError !== void 0 && (E = o.onRecoverableError)), r = zh(r, null, n, 1, o ?? null, c, !1, d, E), n[Zi] = r.current, mu(n), u) for (n = 0; n < u.length; n++) o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
      o,
      c
    );
    return new Cf(r);
  }, Ka.render = function(n, r, o) {
    if (!wf(r)) throw Error(m(200));
    return Gs(null, n, r, !1, o);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!wf(n)) throw Error(m(40));
    return n._reactRootContainer ? (jl(function() {
      Gs(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Zi] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = tp, Ka.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!wf(o)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return Gs(n, r, o, !1, u);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZC;
function ID() {
  return ZC || (ZC = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var y = Sa(), R = Nw(), m = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function Q(e) {
      _ = e;
    }
    function H(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        le("warn", e, a);
      }
    }
    function S(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        le("error", e, a);
      }
    }
    function le(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var B = 0, Y = 1, ce = 2, V = 3, ne = 4, he = 5, Ue = 6, ye = 7, K = 8, k = 9, g = 10, T = 11, w = 12, b = 13, D = 14, P = 15, fe = 16, de = 17, _e = 18, Pe = 19, ke = 21, Se = 22, qe = 23, Qe = 24, Ie = 25, xe = !0, ge = !1, Be = !1, I = !1, O = !1, G = !0, Ae = !0, Oe = !0, Ye = !0, $e = /* @__PURE__ */ new Set(), We = {}, pe = {};
    function Re(e, t) {
      je(e, t), je(e + "Capture", t);
    }
    function je(e, t) {
      We[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), We[e] = t;
      {
        var a = e.toLowerCase();
        pe[a] = e, e === "onDoubleClick" && (pe.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        $e.add(t[i]);
    }
    var rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", we = Object.prototype.hasOwnProperty;
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
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ht(e)), $t(e);
    }
    function F(e) {
      if (zt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), $t(e);
    }
    function j(e, t) {
      if (zt(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ht(e)), $t(e);
    }
    function X(e, t) {
      if (zt(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ht(e)), $t(e);
    }
    function ve(e) {
      if (zt(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ht(e)), $t(e);
    }
    function Je(e) {
      if (zt(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", ht(e)), $t(e);
    }
    var et = 0, Ge = 1, _t = 2, Ct = 3, Bt = 4, ln = 5, z = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", A = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ae = new RegExp("^[" + Z + "][" + A + "]*$"), Ce = {}, gt = {};
    function ct(e) {
      return we.call(gt, e) ? !0 : we.call(Ce, e) ? !1 : ae.test(e) ? (gt[e] = !0, !0) : (Ce[e] = !0, S("Invalid attribute name: `%s`", e), !1);
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
          case Ct:
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
      this.acceptsBooleans = t === _t || t === Ct || t === Bt, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var mn = {}, ta = [
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
    ta.forEach(function(e) {
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
        Ge,
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
        Ct,
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
        Ct,
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
    var or = /[\-\:]([a-z])/g, Ar = function(e) {
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
      var t = e.replace(or, Ar);
      mn[t] = new un(
        t,
        Ge,
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
      var t = e.replace(or, Ar);
      mn[t] = new un(
        t,
        Ge,
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
      var t = e.replace(or, Ar);
      mn[t] = new un(
        t,
        Ge,
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
        Ge,
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
    var Ma = "xlinkHref";
    mn[Ma] = new un(
      "xlinkHref",
      Ge,
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
        Ge,
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
    var Ja = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Wi = !1;
    function bo(e) {
      !Wi && Ja.test(e) && (Wi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ro(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Mt(a, t), i.sanitizeURL && bo("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Bt) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Dn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Dn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Ct)
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
            e[p] = v === Ct ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = l.attributeName, x = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var q = l.type, $;
          q === Ct || q === Bt && a === !0 ? $ = "" : (Mt(a, C), $ = "" + a, l.sanitizeURL && bo($.toString())), x ? e.setAttributeNS(x, C, $) : e.setAttribute(C, $);
        }
      }
    }
    var jr = Symbol.for("react.element"), yr = Symbol.for("react.portal"), gi = Symbol.for("react.fragment"), ei = Symbol.for("react.strict_mode"), Si = Symbol.for("react.profiler"), Ei = Symbol.for("react.provider"), N = Symbol.for("react.context"), De = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Gt = Symbol.for("react.scope"), Wt = Symbol.for("react.debug_trace_mode"), $n = Symbol.for("react.offscreen"), kn = Symbol.for("react.legacy_hidden"), Ln = Symbol.for("react.cache"), gr = Symbol.for("react.tracing_marker"), ti = Symbol.iterator, ni = "@@iterator";
    function Ht(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ti && e[ti] || e[ni];
      return typeof t == "function" ? t : null;
    }
    var Vt = Object.assign, ri = 0, ul, sl, Co, tu, wo, na, Ju;
    function Hr() {
    }
    Hr.__reactDisabledLog = !0;
    function hc() {
      {
        if (ri === 0) {
          ul = console.log, sl = console.info, Co = console.warn, tu = console.error, wo = console.group, na = console.groupCollapsed, Ju = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Hr,
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
        ri++;
      }
    }
    function mc() {
      {
        if (ri--, ri === 0) {
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
              value: Co
            }),
            error: Vt({}, e, {
              value: tu
            }),
            group: Vt({}, e, {
              value: wo
            }),
            groupCollapsed: Vt({}, e, {
              value: na
            }),
            groupEnd: Vt({}, e, {
              value: Ju
            })
          });
        }
        ri < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nu = m.ReactCurrentDispatcher, To;
    function Ea(e, t, a) {
      {
        if (To === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            To = i && i[1] || "";
          }
        return `
` + To + e;
      }
    }
    var ai = !1, ii;
    {
      var ru = typeof WeakMap == "function" ? WeakMap : Map;
      ii = new ru();
    }
    function cl(e, t) {
      if (!e || ai)
        return "";
      {
        var a = ii.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ai = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = nu.current, nu.current = null, hc();
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
            } catch (se) {
              i = se;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (se) {
              i = se;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            i = se;
          }
          e();
        }
      } catch (se) {
        if (se && i && typeof se.stack == "string") {
          for (var p = se.stack.split(`
`), v = i.stack.split(`
`), C = p.length - 1, x = v.length - 1; C >= 1 && x >= 0 && p[C] !== v[x]; )
            x--;
          for (; C >= 1 && x >= 0; C--, x--)
            if (p[C] !== v[x]) {
              if (C !== 1 || x !== 1)
                do
                  if (C--, x--, x < 0 || p[C] !== v[x]) {
                    var q = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && ii.set(e, q), q;
                  }
                while (C >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ai = !1, nu.current = s, mc(), Error.prepareStackTrace = l;
      }
      var $ = e ? e.displayName || e.name : "", ie = $ ? Ea($) : "";
      return typeof e == "function" && ii.set(e, ie), ie;
    }
    function xo(e, t, a) {
      return cl(e, !0);
    }
    function au(e, t, a) {
      return cl(e, !1);
    }
    function iu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return cl(e, iu(e));
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
          case De:
            return au(e.render);
          case jt:
            return qi(e.type, t, a);
          case Pt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return qi(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ad(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case he:
          return Ea(e.type);
        case fe:
          return Ea("Lazy");
        case b:
          return Ea("Suspense");
        case Pe:
          return Ea("SuspenseList");
        case B:
        case ce:
        case P:
          return au(e.type);
        case T:
          return au(e.type.render);
        case Y:
          return xo(e.type);
        default:
          return "";
      }
    }
    function Yi(e) {
      try {
        var t = "", a = e;
        do
          t += ad(a), a = a.return;
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
    function ou(e) {
      return e.displayName || "Context";
    }
    function nn(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case gi:
          return "Fragment";
        case yr:
          return "Portal";
        case Si:
          return "Profiler";
        case ei:
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
            return ou(t) + ".Consumer";
          case Ei:
            var a = e;
            return ou(a._context) + ".Provider";
          case De:
            return sn(e, e.render, "ForwardRef");
          case jt:
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
    function es(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function bi(e) {
      return e.displayName || "Context";
    }
    function Nt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Qe:
          return "Cache";
        case k:
          var i = a;
          return bi(i) + ".Consumer";
        case g:
          var l = a;
          return bi(l._context) + ".Provider";
        case _e:
          return "DehydratedFragment";
        case T:
          return es(a, a.render, "ForwardRef");
        case ye:
          return "Fragment";
        case he:
          return a;
        case ne:
          return "Portal";
        case V:
          return "Root";
        case Ue:
          return "Text";
        case fe:
          return nn(a);
        case K:
          return a === ei ? "StrictMode" : "Mode";
        case Se:
          return "Offscreen";
        case w:
          return "Profiler";
        case ke:
          return "Scope";
        case b:
          return "Suspense";
        case Pe:
          return "SuspenseList";
        case Ie:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case Y:
        case B:
        case de:
        case ce:
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
    var lu = m.ReactDebugCurrentFrame, Sr = null, Ri = !1;
    function Fr() {
      {
        if (Sr === null)
          return null;
        var e = Sr._debugOwner;
        if (e !== null && typeof e < "u")
          return Nt(e);
      }
      return null;
    }
    function Ci() {
      return Sr === null ? "" : Yi(Sr);
    }
    function Nn() {
      lu.getCurrentStack = null, Sr = null, Ri = !1;
    }
    function Sn(e) {
      lu.getCurrentStack = e === null ? null : Ci, Sr = e, Ri = !1;
    }
    function _o() {
      return Sr;
    }
    function lr(e) {
      Ri = e;
    }
    function Br(e) {
      return "" + e;
    }
    function La(e) {
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
    function ts(e, t) {
      fl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ns(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Oo(e) {
      return e._valueTracker;
    }
    function dl(e) {
      e._valueTracker = null;
    }
    function id(e) {
      var t = "";
      return e && (ns(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Na(e) {
      var t = ns(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
    function oi(e) {
      Oo(e) || (e._valueTracker = Na(e));
    }
    function wi(e) {
      if (!e)
        return !1;
      var t = Oo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = id(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Pa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var uu = !1, su = !1, Do = !1, pl = !1;
    function cu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function fu(e, t) {
      var a = e, i = t.checked, l = Vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function li(e, t) {
      ts("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !su && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), su = !0), t.value !== void 0 && t.defaultValue !== void 0 && !uu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component", t.type), uu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: La(t.value != null ? t.value : i),
        controlled: cu(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Ur(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = cu(t);
        !a._wrapperState.controlled && i && !pl && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), pl = !0), a._wrapperState.controlled && !i && !Do && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Do = !0);
      }
      h(e, t);
      var l = La(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = Br(l)) : a.value !== Br(l) && (a.value = Br(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? bt(a, t.type, l) : t.hasOwnProperty("defaultValue") && bt(a, t.type, La(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function oe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Br(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function me(e, t) {
      var a = e;
      L(a, t), Ve(a, t);
    }
    function Ve(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Mt(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Zh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            wi(f), L(f, p);
          }
        }
      }
    }
    function bt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Pa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Br(e._wrapperState.initialValue) : e.defaultValue !== Br(a) && (e.defaultValue = Br(a)));
    }
    var Ke = !1, Tt = !1, Qt = !1;
    function rn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? y.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Tt || (Tt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ke && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ke = !0);
    }
    function zn(e, t) {
      t.value != null && e.setAttribute("value", Br(La(t.value)));
    }
    var En = Array.isArray;
    function It(e) {
      return En(e);
    }
    var bn;
    bn = !1;
    function jn() {
      var e = Fr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ko = ["value", "defaultValue"];
    function rs(e) {
      {
        ts("select", e);
        for (var t = 0; t < ko.length; t++) {
          var a = ko[t];
          if (e[a] != null) {
            var i = It(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, jn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, jn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < l.length; v++) {
          var C = f.hasOwnProperty("$" + l[v].value);
          l[v].selected !== C && (l[v].selected = C), C && i && (l[v].defaultSelected = !0);
        }
      } else {
        for (var x = Br(La(a)), q = null, $ = 0; $ < l.length; $++) {
          if (l[$].value === x) {
            l[$].selected = !0, i && (l[$].defaultSelected = !0);
            return;
          }
          q === null && !l[$].disabled && (q = l[$]);
        }
        q !== null && (q.selected = !0);
      }
    }
    function as(e, t) {
      return Vt({}, t, {
        value: void 0
      });
    }
    function vl(e, t) {
      var a = e;
      rs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !bn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), bn = !0);
    }
    function od(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function yc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Gi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ld(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var bv = !1;
    function ud(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Br(a._wrapperState.initialValue)
      });
      return i;
    }
    function sd(e, t) {
      var a = e;
      ts("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Fr() || "A component"), bv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
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
        initialValue: La(i)
      };
    }
    function Rv(e, t) {
      var a = e, i = La(t.value), l = La(t.defaultValue);
      if (i != null) {
        var s = Br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = Br(l));
    }
    function Cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function _y(e, t) {
      Rv(e, t);
    }
    var Qi = "http://www.w3.org/1999/xhtml", cd = "http://www.w3.org/1998/Math/MathML", fd = "http://www.w3.org/2000/svg";
    function dd(e) {
      switch (e) {
        case "svg":
          return fd;
        case "math":
          return cd;
        default:
          return Qi;
      }
    }
    function pd(e, t) {
      return e == null || e === Qi ? dd(t) : e === fd && t === "foreignObject" ? Qi : e;
    }
    var wv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, gc, Tv = wv(function(e, t) {
      if (e.namespaceURI === fd && !("innerHTML" in e)) {
        gc = gc || document.createElement("div"), gc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = gc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ra = 1, Xi = 3, Kn = 8, Ki = 9, vd = 11, du = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, is = {
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
    }, os = {
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
    function xv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var _v = ["Webkit", "ms", "Moz", "O"];
    Object.keys(os).forEach(function(e) {
      _v.forEach(function(t) {
        os[xv(t, e)] = os[e];
      });
    });
    function Sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(os.hasOwnProperty(e) && os[e]) ? t + "px" : (X(t, e), ("" + t).trim());
    }
    var Ov = /([A-Z])/g, Dv = /^ms-/;
    function pu(e) {
      return e.replace(Ov, "-$1").toLowerCase().replace(Dv, "-ms-");
    }
    var kv = function() {
    };
    {
      var Oy = /^(?:webkit|moz|o)[A-Z]/, Dy = /^-ms-/, zv = /-(.)/g, hd = /;\s*$/, Ti = {}, hl = {}, Mv = !1, ls = !1, ky = function(e) {
        return e.replace(zv, function(t, a) {
          return a.toUpperCase();
        });
      }, Lv = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ky(e.replace(Dy, "ms-"))
        ));
      }, md = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, yd = function(e, t) {
        hl.hasOwnProperty(t) && hl[t] || (hl[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(hd, "")));
      }, Nv = function(e, t) {
        Mv || (Mv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Pv = function(e, t) {
        ls || (ls = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      kv = function(e, t) {
        e.indexOf("-") > -1 ? Lv(e) : Oy.test(e) ? md(e) : hd.test(t) && yd(e, t), typeof t == "number" && (isNaN(t) ? Nv(e, t) : isFinite(t) || Pv(e, t));
      };
    }
    var Av = kv;
    function zy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : pu(i)) + ":", t += Sc(i, l, s), a = ";";
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
          l || Av(i, t[i]);
          var s = Sc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function My(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function jv(e) {
      var t = {};
      for (var a in e)
        for (var i = is[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Ly(e, t) {
      {
        if (!t)
          return;
        var a = jv(e), i = jv(t), l = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (l[v])
              continue;
            l[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", My(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ui = {
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
    }, us = Vt({
      menuitem: !0
    }, ui), Hv = "__html";
    function Ec(e, t) {
      if (t) {
        if (us[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Hv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
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
    var ss = {
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
    }, bc = {
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
    }, vu = {}, Ny = new RegExp("^(aria)-[" + A + "]*$"), hu = new RegExp("^(aria)[A-Z][" + A + "]*$");
    function gd(e, t) {
      {
        if (we.call(vu, t) && vu[t])
          return !0;
        if (hu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = bc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), vu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), vu[t] = !0, !0;
        }
        if (Ny.test(t)) {
          var l = t.toLowerCase(), s = bc.hasOwnProperty(l) ? l : null;
          if (s == null)
            return vu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), vu[t] = !0, !0;
        }
      }
      return !0;
    }
    function cs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = gd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Sd(e, t) {
      zo(e, t) || cs(e, t);
    }
    var Ed = !1;
    function Rc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ed && (Ed = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ml = function() {
    };
    {
      var Er = {}, bd = /^on./, Cc = /^on[^A-Z]/, Fv = new RegExp("^(aria)-[" + A + "]*$"), Bv = new RegExp("^(aria)[A-Z][" + A + "]*$");
      ml = function(e, t, a, i) {
        if (we.call(Er, t) && Er[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Er[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(l) ? f[l] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Er[t] = !0, !0;
          if (bd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Er[t] = !0, !0;
        } else if (bd.test(t))
          return Cc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Er[t] = !0, !0;
        if (Fv.test(t) || Bv.test(t))
          return !0;
        if (l === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Er[t] = !0, !0;
        if (l === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Er[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Er[t] = !0, !0;
        var v = an(t), C = v !== null && v.type === et;
        if (ss.hasOwnProperty(l)) {
          var x = ss[l];
          if (x !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, x), Er[t] = !0, !0;
        } else if (!C && t !== l)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Er[t] = !0, !0;
        return typeof a == "boolean" && Yt(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Er[t] = !0, !0) : C ? !0 : Yt(t, a, v, !1) ? (Er[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Ct && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Er[t] = !0), !0);
      };
    }
    var Vv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = ml(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Iv(e, t, a) {
      zo(e, t) || Vv(e, t, a);
    }
    var Rd = 1, wc = 2, Aa = 4, Cd = Rd | wc | Aa, yl = null;
    function Py(e) {
      yl !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), yl = e;
    }
    function Ay() {
      yl === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), yl = null;
    }
    function fs(e) {
      return e === yl;
    }
    function wd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Xi ? t.parentNode : t;
    }
    var Tc = null, gl = null, yn = null;
    function xc(e) {
      var t = Au(e);
      if (t) {
        if (typeof Tc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Zh(a);
          Tc(t.stateNode, t.type, i);
        }
      }
    }
    function _c(e) {
      Tc = e;
    }
    function mu(e) {
      gl ? yn ? yn.push(e) : yn = [e] : gl = e;
    }
    function $v() {
      return gl !== null || yn !== null;
    }
    function Oc() {
      if (gl) {
        var e = gl, t = yn;
        if (gl = null, yn = null, xc(e), t)
          for (var a = 0; a < t.length; a++)
            xc(t[a]);
      }
    }
    var yu = function(e, t) {
      return e(t);
    }, ds = function() {
    }, Mo = !1;
    function Wv() {
      var e = $v();
      e && (ds(), Oc());
    }
    function qv(e, t, a) {
      if (Mo)
        return e(t, a);
      Mo = !0;
      try {
        return yu(e, t, a);
      } finally {
        Mo = !1, Wv();
      }
    }
    function Uy(e, t, a) {
      yu = e, ds = a;
    }
    function Yv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Dc(e, t, a) {
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
          return !!(a.disabled && Yv(t));
        default:
          return !1;
      }
    }
    function Lo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Zh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Dc(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ps = !1;
    if (rt)
      try {
        var Sl = {};
        Object.defineProperty(Sl, "passive", {
          get: function() {
            ps = !0;
          }
        }), window.addEventListener("test", Sl, Sl), window.removeEventListener("test", Sl, Sl);
      } catch {
        ps = !1;
      }
    function kc(e, t, a, i, l, s, f, p, v) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (x) {
        this.onError(x);
      }
    }
    var zc = kc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Td = document.createElement("react");
      zc = function(t, a, i, l, s, f, p, v, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), q = !1, $ = !0, ie = window.event, se = Object.getOwnPropertyDescriptor(window, "event");
        function Ee() {
          Td.removeEventListener(be, Rt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = ie);
        }
        var nt = Array.prototype.slice.call(arguments, 3);
        function Rt() {
          q = !0, Ee(), a.apply(i, nt), $ = !1;
        }
        var mt, tn = !1, Xt = !1;
        function ee(te) {
          if (mt = te.error, tn = !0, mt === null && te.colno === 0 && te.lineno === 0 && (Xt = !0), te.defaultPrevented && mt != null && typeof mt == "object")
            try {
              mt._suppressLogging = !0;
            } catch {
            }
        }
        var be = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", ee), Td.addEventListener(be, Rt, !1), x.initEvent(be, !1, !1), Td.dispatchEvent(x), se && Object.defineProperty(window, "event", se), q && $ && (tn ? Xt && (mt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : mt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(mt)), window.removeEventListener("error", ee), !q)
          return Ee(), kc.apply(this, arguments);
      };
    }
    var Gv = zc, gu = !1, Mc = null, Su = !1, xi = null, Qv = {
      onError: function(e) {
        gu = !0, Mc = e;
      }
    };
    function No(e, t, a, i, l, s, f, p, v) {
      gu = !1, Mc = null, Gv.apply(Qv, arguments);
    }
    function _i(e, t, a, i, l, s, f, p, v) {
      if (No.apply(this, arguments), gu) {
        var C = hs();
        Su || (Su = !0, xi = C);
      }
    }
    function vs() {
      if (Su) {
        var e = xi;
        throw Su = !1, xi = null, e;
      }
    }
    function Zi() {
      return gu;
    }
    function hs() {
      if (gu) {
        var e = Mc;
        return gu = !1, Mc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Eu(e) {
      return e._reactInternals;
    }
    function jy(e) {
      return e._reactInternals !== void 0;
    }
    function El(e, t) {
      e._reactInternals = t;
    }
    var St = (
      /*                      */
      0
    ), si = (
      /*                */
      1
    ), Hn = (
      /*                    */
      2
    ), Zt = (
      /*                       */
      4
    ), Ua = (
      /*                */
      16
    ), ja = (
      /*                 */
      32
    ), Mn = (
      /*                     */
      64
    ), yt = (
      /*                   */
      128
    ), Mr = (
      /*            */
      256
    ), In = (
      /*                          */
      512
    ), ur = (
      /*                     */
      1024
    ), aa = (
      /*                      */
      2048
    ), ia = (
      /*                    */
      4096
    ), Zn = (
      /*                   */
      8192
    ), bu = (
      /*             */
      16384
    ), Xv = (
      /*               */
      32767
    ), ms = (
      /*                   */
      32768
    ), dr = (
      /*                */
      65536
    ), Lc = (
      /* */
      131072
    ), Oi = (
      /*                       */
      1048576
    ), Ru = (
      /*                    */
      2097152
    ), Ji = (
      /*                 */
      4194304
    ), Nc = (
      /*                */
      8388608
    ), Po = (
      /*               */
      16777216
    ), Di = (
      /*              */
      33554432
    ), Ao = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Zt | ur | 0
    ), Uo = Hn | Zt | Ua | ja | In | ia | Zn, jo = Zt | Mn | In | Zn, eo = aa | Ua, Jn = Ji | Nc | Ru, Ha = m.ReactCurrentOwner;
    function ba(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Hn | ia)) !== St && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === V ? a : null;
    }
    function ki(e) {
      if (e.tag === b) {
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
    function zi(e) {
      return e.tag === V ? e.stateNode.containerInfo : null;
    }
    function bl(e) {
      return ba(e) === e;
    }
    function Kv(e) {
      {
        var t = Ha.current;
        if (t !== null && t.tag === Y) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Eu(e);
      return l ? ba(l) === l : !1;
    }
    function Pc(e) {
      if (ba(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ac(e) {
      var t = e.alternate;
      if (!t) {
        var a = ba(e);
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
              return Pc(s), e;
            if (v === l)
              return Pc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var C = !1, x = s.child; x; ) {
            if (x === i) {
              C = !0, i = s, l = f;
              break;
            }
            if (x === l) {
              C = !0, l = s, i = f;
              break;
            }
            x = x.sibling;
          }
          if (!C) {
            for (x = f.child; x; ) {
              if (x === i) {
                C = !0, i = f, l = s;
                break;
              }
              if (x === l) {
                C = !0, l = f, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== V)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function oa(e) {
      var t = Ac(e);
      return t !== null ? la(t) : null;
    }
    function la(e) {
      if (e.tag === he || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = la(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function An(e) {
      var t = Ac(e);
      return t !== null ? Fa(t) : null;
    }
    function Fa(e) {
      if (e.tag === he || e.tag === Ue)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ne) {
          var a = Fa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var xd = R.unstable_scheduleCallback, Zv = R.unstable_cancelCallback, _d = R.unstable_shouldYield, Od = R.unstable_requestPaint, sr = R.unstable_now, Uc = R.unstable_getCurrentPriorityLevel, ys = R.unstable_ImmediatePriority, Ho = R.unstable_UserBlockingPriority, to = R.unstable_NormalPriority, Hy = R.unstable_LowPriority, Rl = R.unstable_IdlePriority, jc = R.unstable_yieldValue, Jv = R.unstable_setDisableYieldValue, Cl = null, Wn = null, tt = null, Ra = !1, ua = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Cu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ae && (e = Vt({}, e, {
          getLaneLabelMap: wl,
          injectProfilingHooks: Ba
        })), Cl = t.inject(e), Wn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Dd(e, t) {
      if (Wn && typeof Wn.onScheduleFiberRoot == "function")
        try {
          Wn.onScheduleFiberRoot(Cl, e, t);
        } catch (a) {
          Ra || (Ra = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function kd(e, t) {
      if (Wn && typeof Wn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & yt) === yt;
          if (Oe) {
            var i;
            switch (t) {
              case Vr:
                i = ys;
                break;
              case Li:
                i = Ho;
                break;
              case Va:
                i = to;
                break;
              case Ia:
                i = Rl;
                break;
              default:
                i = to;
                break;
            }
            Wn.onCommitFiberRoot(Cl, e, i, a);
          }
        } catch (l) {
          Ra || (Ra = !0, S("React instrumentation encountered an error: %s", l));
        }
    }
    function zd(e) {
      if (Wn && typeof Wn.onPostCommitFiberRoot == "function")
        try {
          Wn.onPostCommitFiberRoot(Cl, e);
        } catch (t) {
          Ra || (Ra = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Md(e) {
      if (Wn && typeof Wn.onCommitFiberUnmount == "function")
        try {
          Wn.onCommitFiberUnmount(Cl, e);
        } catch (t) {
          Ra || (Ra = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Fn(e) {
      if (typeof jc == "function" && (Jv(e), Q(e)), Wn && typeof Wn.setStrictMode == "function")
        try {
          Wn.setStrictMode(Cl, e);
        } catch (t) {
          Ra || (Ra = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ba(e) {
      tt = e;
    }
    function wl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _l; a++) {
          var i = rh(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ld(e) {
      tt !== null && typeof tt.markCommitStarted == "function" && tt.markCommitStarted(e);
    }
    function Nd() {
      tt !== null && typeof tt.markCommitStopped == "function" && tt.markCommitStopped();
    }
    function Ca(e) {
      tt !== null && typeof tt.markComponentRenderStarted == "function" && tt.markComponentRenderStarted(e);
    }
    function wa() {
      tt !== null && typeof tt.markComponentRenderStopped == "function" && tt.markComponentRenderStopped();
    }
    function Pd(e) {
      tt !== null && typeof tt.markComponentPassiveEffectMountStarted == "function" && tt.markComponentPassiveEffectMountStarted(e);
    }
    function eh() {
      tt !== null && typeof tt.markComponentPassiveEffectMountStopped == "function" && tt.markComponentPassiveEffectMountStopped();
    }
    function no(e) {
      tt !== null && typeof tt.markComponentPassiveEffectUnmountStarted == "function" && tt.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fo() {
      tt !== null && typeof tt.markComponentPassiveEffectUnmountStopped == "function" && tt.markComponentPassiveEffectUnmountStopped();
    }
    function Hc(e) {
      tt !== null && typeof tt.markComponentLayoutEffectMountStarted == "function" && tt.markComponentLayoutEffectMountStarted(e);
    }
    function th() {
      tt !== null && typeof tt.markComponentLayoutEffectMountStopped == "function" && tt.markComponentLayoutEffectMountStopped();
    }
    function gs(e) {
      tt !== null && typeof tt.markComponentLayoutEffectUnmountStarted == "function" && tt.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ad() {
      tt !== null && typeof tt.markComponentLayoutEffectUnmountStopped == "function" && tt.markComponentLayoutEffectUnmountStopped();
    }
    function Ss(e, t, a) {
      tt !== null && typeof tt.markComponentErrored == "function" && tt.markComponentErrored(e, t, a);
    }
    function Mi(e, t, a) {
      tt !== null && typeof tt.markComponentSuspended == "function" && tt.markComponentSuspended(e, t, a);
    }
    function Es(e) {
      tt !== null && typeof tt.markLayoutEffectsStarted == "function" && tt.markLayoutEffectsStarted(e);
    }
    function bs() {
      tt !== null && typeof tt.markLayoutEffectsStopped == "function" && tt.markLayoutEffectsStopped();
    }
    function Tl(e) {
      tt !== null && typeof tt.markPassiveEffectsStarted == "function" && tt.markPassiveEffectsStarted(e);
    }
    function Ud() {
      tt !== null && typeof tt.markPassiveEffectsStopped == "function" && tt.markPassiveEffectsStopped();
    }
    function xl(e) {
      tt !== null && typeof tt.markRenderStarted == "function" && tt.markRenderStarted(e);
    }
    function nh() {
      tt !== null && typeof tt.markRenderYielded == "function" && tt.markRenderYielded();
    }
    function Fc() {
      tt !== null && typeof tt.markRenderStopped == "function" && tt.markRenderStopped();
    }
    function Bn(e) {
      tt !== null && typeof tt.markRenderScheduled == "function" && tt.markRenderScheduled(e);
    }
    function Bc(e, t) {
      tt !== null && typeof tt.markForceUpdateScheduled == "function" && tt.markForceUpdateScheduled(e, t);
    }
    function Rs(e, t) {
      tt !== null && typeof tt.markStateUpdateScheduled == "function" && tt.markStateUpdateScheduled(e, t);
    }
    var Et = (
      /*                         */
      0
    ), qt = (
      /*                 */
      1
    ), cn = (
      /*                    */
      2
    ), Rn = (
      /*               */
      8
    ), fn = (
      /*              */
      16
    ), er = Math.clz32 ? Math.clz32 : Cs, pr = Math.log, Vc = Math.LN2;
    function Cs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (pr(t) / Vc | 0) | 0;
    }
    var _l = 31, ze = (
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
    ), ci = (
      /*             */
      4
    ), Lr = (
      /*            */
      8
    ), qn = (
      /*                     */
      16
    ), ro = (
      /*                */
      32
    ), Vo = (
      /*                       */
      4194240
    ), Ol = (
      /*                        */
      64
    ), Ic = (
      /*                        */
      128
    ), $c = (
      /*                        */
      256
    ), Wc = (
      /*                        */
      512
    ), qc = (
      /*                        */
      1024
    ), Yc = (
      /*                        */
      2048
    ), Gc = (
      /*                        */
      4096
    ), Qc = (
      /*                        */
      8192
    ), Xc = (
      /*                        */
      16384
    ), Dl = (
      /*                       */
      32768
    ), Kc = (
      /*                       */
      65536
    ), wu = (
      /*                       */
      131072
    ), Tu = (
      /*                       */
      262144
    ), Zc = (
      /*                       */
      524288
    ), ws = (
      /*                       */
      1048576
    ), Jc = (
      /*                       */
      2097152
    ), Ts = (
      /*                            */
      130023424
    ), kl = (
      /*                             */
      4194304
    ), ef = (
      /*                             */
      8388608
    ), xs = (
      /*                             */
      16777216
    ), tf = (
      /*                             */
      33554432
    ), nf = (
      /*                             */
      67108864
    ), jd = kl, _s = (
      /*          */
      134217728
    ), Hd = (
      /*                          */
      268435455
    ), Os = (
      /*               */
      268435456
    ), zl = (
      /*                        */
      536870912
    ), sa = (
      /*                   */
      1073741824
    );
    function rh(e) {
      {
        if (e & Ot)
          return "Sync";
        if (e & Bo)
          return "InputContinuousHydration";
        if (e & ci)
          return "InputContinuous";
        if (e & Lr)
          return "DefaultHydration";
        if (e & qn)
          return "Default";
        if (e & ro)
          return "TransitionHydration";
        if (e & Vo)
          return "Transition";
        if (e & Ts)
          return "Retry";
        if (e & _s)
          return "SelectiveHydration";
        if (e & Os)
          return "IdleHydration";
        if (e & zl)
          return "Idle";
        if (e & sa)
          return "Offscreen";
      }
    }
    var On = -1, Ml = Ol, rf = kl;
    function Ds(e) {
      switch (Io(e)) {
        case Ot:
          return Ot;
        case Bo:
          return Bo;
        case ci:
          return ci;
        case Lr:
          return Lr;
        case qn:
          return qn;
        case ro:
          return ro;
        case Ol:
        case Ic:
        case $c:
        case Wc:
        case qc:
        case Yc:
        case Gc:
        case Qc:
        case Xc:
        case Dl:
        case Kc:
        case wu:
        case Tu:
        case Zc:
        case ws:
        case Jc:
          return e & Vo;
        case kl:
        case ef:
        case xs:
        case tf:
        case nf:
          return e & Ts;
        case _s:
          return _s;
        case Os:
          return Os;
        case zl:
          return zl;
        case sa:
          return sa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function af(e, t) {
      var a = e.pendingLanes;
      if (a === ze)
        return ze;
      var i = ze, l = e.suspendedLanes, s = e.pingedLanes, f = a & Hd;
      if (f !== ze) {
        var p = f & ~l;
        if (p !== ze)
          i = Ds(p);
        else {
          var v = f & s;
          v !== ze && (i = Ds(v));
        }
      } else {
        var C = a & ~l;
        C !== ze ? i = Ds(C) : s !== ze && (i = Ds(s));
      }
      if (i === ze)
        return ze;
      if (t !== ze && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === ze) {
        var x = Io(i), q = Io(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= q || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === qn && (q & Vo) !== ze
        )
          return t;
      }
      (i & ci) !== ze && (i |= a & qn);
      var $ = e.entangledLanes;
      if ($ !== ze)
        for (var ie = e.entanglements, se = i & $; se > 0; ) {
          var Ee = tr(se), nt = 1 << Ee;
          i |= ie[Ee], se &= ~nt;
        }
      return i;
    }
    function fi(e, t) {
      for (var a = e.eventTimes, i = On; t > 0; ) {
        var l = tr(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Fd(e, t) {
      switch (e) {
        case Ot:
        case Bo:
        case ci:
          return t + 250;
        case Lr:
        case qn:
        case ro:
        case Ol:
        case Ic:
        case $c:
        case Wc:
        case qc:
        case Yc:
        case Gc:
        case Qc:
        case Xc:
        case Dl:
        case Kc:
        case wu:
        case Tu:
        case Zc:
        case ws:
        case Jc:
          return t + 5e3;
        case kl:
        case ef:
        case xs:
        case tf:
        case nf:
          return On;
        case _s:
        case Os:
        case zl:
        case sa:
          return On;
        default:
          return S("Should have found matching lanes. This is a bug in React."), On;
      }
    }
    function of(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = tr(f), v = 1 << p, C = s[p];
        C === On ? ((v & i) === ze || (v & l) !== ze) && (s[p] = Fd(v, t)) : C <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ah(e) {
      return Ds(e.pendingLanes);
    }
    function lf(e) {
      var t = e.pendingLanes & ~sa;
      return t !== ze ? t : t & sa ? sa : ze;
    }
    function ih(e) {
      return (e & Ot) !== ze;
    }
    function ks(e) {
      return (e & Hd) !== ze;
    }
    function Ll(e) {
      return (e & Ts) === e;
    }
    function Bd(e) {
      var t = Ot | ci | qn;
      return (e & t) === ze;
    }
    function Vd(e) {
      return (e & Vo) === e;
    }
    function uf(e, t) {
      var a = Bo | ci | Lr | qn;
      return (t & a) !== ze;
    }
    function oh(e, t) {
      return (t & e.expiredLanes) !== ze;
    }
    function Id(e) {
      return (e & Vo) !== ze;
    }
    function $d() {
      var e = Ml;
      return Ml <<= 1, (Ml & Vo) === ze && (Ml = Ol), e;
    }
    function lh() {
      var e = rf;
      return rf <<= 1, (rf & Ts) === ze && (rf = kl), e;
    }
    function Io(e) {
      return e & -e;
    }
    function zs(e) {
      return Io(e);
    }
    function tr(e) {
      return 31 - er(e);
    }
    function br(e) {
      return tr(e);
    }
    function ca(e, t) {
      return (e & t) !== ze;
    }
    function Nl(e, t) {
      return (e & t) === t;
    }
    function Ft(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function Wd(e, t) {
      return e & t;
    }
    function uh(e) {
      return e;
    }
    function sh(e, t) {
      return e !== on && e < t ? e : t;
    }
    function Ls(e) {
      for (var t = [], a = 0; a < _l; a++)
        t.push(e);
      return t;
    }
    function xu(e, t, a) {
      e.pendingLanes |= t, t !== zl && (e.suspendedLanes = ze, e.pingedLanes = ze);
      var i = e.eventTimes, l = br(t);
      i[l] = a;
    }
    function ch(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = tr(i), s = 1 << l;
        a[l] = On, i &= ~s;
      }
    }
    function sf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function qd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ze, e.pingedLanes = ze, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = tr(f), v = 1 << p;
        i[p] = ze, l[p] = On, s[p] = On, f &= ~v;
      }
    }
    function cf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = tr(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Yd(e, t) {
      var a = Io(t), i;
      switch (a) {
        case ci:
          i = Bo;
          break;
        case qn:
          i = Lr;
          break;
        case Ol:
        case Ic:
        case $c:
        case Wc:
        case qc:
        case Yc:
        case Gc:
        case Qc:
        case Xc:
        case Dl:
        case Kc:
        case wu:
        case Tu:
        case Zc:
        case ws:
        case Jc:
        case kl:
        case ef:
        case xs:
        case tf:
        case nf:
          i = ro;
          break;
        case zl:
          i = Os;
          break;
        default:
          i = on;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== on ? on : i;
    }
    function Ns(e, t, a) {
      if (ua)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = br(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function fh(e, t) {
      if (ua)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = br(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Gd(e, t) {
      return null;
    }
    var Vr = Ot, Li = ci, Va = qn, Ia = zl, Ps = on;
    function $a() {
      return Ps;
    }
    function nr(e) {
      Ps = e;
    }
    function dh(e, t) {
      var a = Ps;
      try {
        return Ps = e, t();
      } finally {
        Ps = a;
      }
    }
    function ph(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function As(e, t) {
      return e > t ? e : t;
    }
    function vr(e, t) {
      return e !== 0 && e < t;
    }
    function vh(e) {
      var t = Io(e);
      return vr(Vr, t) ? vr(Li, t) ? ks(t) ? Va : Ia : Li : Vr;
    }
    function ff(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Us;
    function Nr(e) {
      Us = e;
    }
    function Fy(e) {
      Us(e);
    }
    var ut;
    function _u(e) {
      ut = e;
    }
    var df;
    function hh(e) {
      df = e;
    }
    var mh;
    function js(e) {
      mh = e;
    }
    var Hs;
    function Qd(e) {
      Hs = e;
    }
    var pf = !1, Fs = [], ao = null, Ni = null, Pi = null, Yn = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), $r = [], yh = [
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
    function gh(e) {
      return yh.indexOf(e) > -1;
    }
    function di(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Xd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ao = null;
          break;
        case "dragenter":
        case "dragleave":
          Ni = null;
          break;
        case "mouseover":
        case "mouseout":
          Pi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Yn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ir.delete(i);
          break;
        }
      }
    }
    function fa(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = di(t, a, i, l, s);
        if (t !== null) {
          var p = Au(t);
          p !== null && ut(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return l !== null && v.indexOf(l) === -1 && v.push(l), e;
    }
    function By(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return ao = fa(ao, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Ni = fa(Ni, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = l;
          return Pi = fa(Pi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = l, C = v.pointerId;
          return Yn.set(C, fa(Yn.get(C) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var x = l, q = x.pointerId;
          return Ir.set(q, fa(Ir.get(q) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function Kd(e) {
      var t = Zs(e.target);
      if (t !== null) {
        var a = ba(t);
        if (a !== null) {
          var i = a.tag;
          if (i === b) {
            var l = ki(a);
            if (l !== null) {
              e.blockedOn = l, Hs(e.priority, function() {
                df(a);
              });
              return;
            }
          } else if (i === V) {
            var s = a.stateNode;
            if (ff(s)) {
              e.blockedOn = zi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Sh(e) {
      for (var t = mh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < $r.length && vr(t, $r[i].priority); i++)
        ;
      $r.splice(i, 0, a), i === 0 && Kd(a);
    }
    function Bs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Du(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Py(s), l.target.dispatchEvent(s), Ay();
        } else {
          var f = Au(i);
          return f !== null && ut(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Zd(e, t, a) {
      Bs(e) && a.delete(t);
    }
    function Vy() {
      pf = !1, ao !== null && Bs(ao) && (ao = null), Ni !== null && Bs(Ni) && (Ni = null), Pi !== null && Bs(Pi) && (Pi = null), Yn.forEach(Zd), Ir.forEach(Zd);
    }
    function $o(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Vy)));
    }
    function Pl(e) {
      if (Fs.length > 0) {
        $o(Fs[0], e);
        for (var t = 1; t < Fs.length; t++) {
          var a = Fs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ao !== null && $o(ao, e), Ni !== null && $o(Ni, e), Pi !== null && $o(Pi, e);
      var i = function(p) {
        return $o(p, e);
      };
      Yn.forEach(i), Ir.forEach(i);
      for (var l = 0; l < $r.length; l++) {
        var s = $r[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $r.length > 0; ) {
        var f = $r[0];
        if (f.blockedOn !== null)
          break;
        Kd(f), f.blockedOn === null && $r.shift();
      }
    }
    var Rr = m.ReactCurrentBatchConfig, Jt = !0;
    function cr(e) {
      Jt = !!e;
    }
    function rr() {
      return Jt;
    }
    function Cr(e, t, a) {
      var i = vf(t), l;
      switch (i) {
        case Vr:
          l = Ta;
          break;
        case Li:
          l = Ou;
          break;
        case Va:
        default:
          l = Gn;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Ta(e, t, a, i) {
      var l = $a(), s = Rr.transition;
      Rr.transition = null;
      try {
        nr(Vr), Gn(e, t, a, i);
      } finally {
        nr(l), Rr.transition = s;
      }
    }
    function Ou(e, t, a, i) {
      var l = $a(), s = Rr.transition;
      Rr.transition = null;
      try {
        nr(Li), Gn(e, t, a, i);
      } finally {
        nr(l), Rr.transition = s;
      }
    }
    function Gn(e, t, a, i) {
      Jt && Vs(e, t, a, i);
    }
    function Vs(e, t, a, i) {
      var l = Du(e, t, a, i);
      if (l === null) {
        ig(e, t, i, Ai, a), Xd(e, i);
        return;
      }
      if (By(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Xd(e, i), t & Aa && gh(e)) {
        for (; l !== null; ) {
          var s = Au(l);
          s !== null && Fy(s);
          var f = Du(e, t, a, i);
          if (f === null && ig(e, t, i, Ai, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      ig(e, t, i, null, a);
    }
    var Ai = null;
    function Du(e, t, a, i) {
      Ai = null;
      var l = wd(i), s = Zs(l);
      if (s !== null) {
        var f = ba(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === b) {
            var v = ki(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === V) {
            var C = f.stateNode;
            if (ff(C))
              return zi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ai = s, null;
    }
    function vf(e) {
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
          return Vr;
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
          return Li;
        case "message": {
          var t = Uc();
          switch (t) {
            case ys:
              return Vr;
            case Ho:
              return Li;
            case to:
            case Hy:
              return Va;
            case Rl:
              return Ia;
            default:
              return Va;
          }
        }
        default:
          return Va;
      }
    }
    function Is(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function da(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Jd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function ku(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var xa = null, zu = null, Al = null;
    function Wo(e) {
      return xa = e, zu = $s(), !0;
    }
    function hf() {
      xa = null, zu = null, Al = null;
    }
    function io() {
      if (Al)
        return Al;
      var e, t = zu, a = t.length, i, l = $s(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Al = l.slice(e, p), Al;
    }
    function $s() {
      return "value" in xa ? xa.value : xa.textContent;
    }
    function qo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Mu() {
      return !0;
    }
    function Ws() {
      return !1;
    }
    function Pr(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Mu : this.isDefaultPrevented = Ws, this.isPropagationStopped = Ws, this;
      }
      return Vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Mu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Mu);
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
        isPersistent: Mu
      }), t;
    }
    var ar = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ui = Pr(ar), Wr = Vt({}, ar, {
      view: 0,
      detail: 0
    }), pa = Pr(Wr), mf, qs, Ul;
    function Iy(e) {
      e !== Ul && (Ul && e.type === "mousemove" ? (mf = e.screenX - Ul.screenX, qs = e.screenY - Ul.screenY) : (mf = 0, qs = 0), Ul = e);
    }
    var pi = Vt({}, Wr, {
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
      getModifierState: Un,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Iy(e), mf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : qs;
      }
    }), ep = Pr(pi), tp = Vt({}, pi, {
      dataTransfer: 0
    }), jl = Pr(tp), np = Vt({}, Wr, {
      relatedTarget: 0
    }), oo = Pr(np), Eh = Vt({}, ar, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bh = Pr(Eh), rp = Vt({}, ar, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), yf = Pr(rp), $y = Vt({}, ar, {
      data: 0
    }), Rh = Pr($y), Ch = Rh, wh = {
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
    function Wy(e) {
      if (e.key) {
        var t = wh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = qo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Hl[e.keyCode] || "Unidentified" : "";
    }
    var Lu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Th(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Lu[e];
      return i ? !!a[i] : !1;
    }
    function Un(e) {
      return Th;
    }
    var qy = Vt({}, Wr, {
      key: Wy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Un,
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
    }), xh = Pr(qy), Yy = Vt({}, pi, {
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
    }), _h = Pr(Yy), Oh = Vt({}, Wr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Un
    }), Dh = Pr(Oh), Gy = Vt({}, ar, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wa = Pr(Gy), ap = Vt({}, pi, {
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
    }), Qy = Pr(ap), Yo = [9, 13, 27, 32], Ys = 229, lo = rt && "CompositionEvent" in window, Go = null;
    rt && "documentMode" in document && (Go = document.documentMode);
    var ip = rt && "TextEvent" in window && !Go, gf = rt && (!lo || Go && Go > 8 && Go <= 11), kh = 32, Sf = String.fromCharCode(kh);
    function Xy() {
      Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Re("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Re("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Re("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var op = !1;
    function zh(e) {
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
    function bf(e, t) {
      return e === "keydown" && t.keyCode === Ys;
    }
    function lp(e, t) {
      switch (e) {
        case "keyup":
          return Yo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ys;
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
    function Mh(e) {
      return e.locale === "ko";
    }
    var Fl = !1;
    function up(e, t, a, i, l) {
      var s, f;
      if (lo ? s = Ef(t) : Fl ? lp(t, i) && (s = "onCompositionEnd") : bf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      gf && !Mh(i) && (!Fl && s === "onCompositionStart" ? Fl = Wo(l) : s === "onCompositionEnd" && Fl && (f = io()));
      var p = Hh(a, s);
      if (p.length > 0) {
        var v = new Rh(s, t, null, i, l);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var C = Rf(i);
          C !== null && (v.data = C);
        }
      }
    }
    function Cf(e, t) {
      switch (e) {
        case "compositionend":
          return Rf(t);
        case "keypress":
          var a = t.which;
          return a !== kh ? null : (op = !0, Sf);
        case "textInput":
          var i = t.data;
          return i === Sf && op ? null : i;
        default:
          return null;
      }
    }
    function sp(e, t) {
      if (Fl) {
        if (e === "compositionend" || !lo && lp(e, t)) {
          var a = io();
          return hf(), Fl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!zh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return gf && !Mh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function wf(e, t, a, i, l) {
      var s;
      if (ip ? s = Cf(t, i) : s = sp(t, i), !s)
        return null;
      var f = Hh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Ch("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Lh(e, t, a, i, l, s, f) {
      up(e, t, a, i, l), wf(e, t, a, i, l);
    }
    var Ky = {
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
    function Gs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ky[e.type] : t === "textarea";
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
    function Zy(e) {
      if (!rt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Qs() {
      Re("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Nh(e, t, a, i) {
      mu(i);
      var l = Hh(t, "onChange");
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
      Nh(t, n, e, wd(e)), qv(u, t);
    }
    function u(e) {
      Sb(e, 0);
    }
    function c(e) {
      var t = kf(e);
      if (wi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    rt && (E = Zy("input") && (!document.documentMode || document.documentMode > 9));
    function M(e, t) {
      Qo = e, n = t, Qo.attachEvent("onpropertychange", ue);
    }
    function U() {
      Qo && (Qo.detachEvent("onpropertychange", ue), Qo = null, n = null);
    }
    function ue(e) {
      e.propertyName === "value" && c(n) && o(e);
    }
    function Le(e, t, a) {
      e === "focusin" ? (U(), M(t, a)) : e === "focusout" && U();
    }
    function He(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function Me(e) {
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
      !t || !t.controlled || e.type !== "number" || bt(e, "number", e.value);
    }
    function Qn(e, t, a, i, l, s, f) {
      var p = a ? kf(a) : window, v, C;
      if (r(p) ? v = d : Gs(p) ? E ? v = ft : (v = He, C = Le) : Me(p) && (v = it), v) {
        var x = v(t, a);
        if (x) {
          Nh(e, x, i, l);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && vt(p);
    }
    function J() {
      je("onMouseEnter", ["mouseout", "mouseover"]), je("onMouseLeave", ["mouseout", "mouseover"]), je("onPointerEnter", ["pointerout", "pointerover"]), je("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function W(e, t, a, i, l, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !fs(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Zs(C) || Cp(C)))
          return;
      }
      if (!(!v && !p)) {
        var x;
        if (l.window === l)
          x = l;
        else {
          var q = l.ownerDocument;
          q ? x = q.defaultView || q.parentWindow : x = window;
        }
        var $, ie;
        if (v) {
          var se = i.relatedTarget || i.toElement;
          if ($ = a, ie = se ? Zs(se) : null, ie !== null) {
            var Ee = ba(ie);
            (ie !== Ee || ie.tag !== he && ie.tag !== Ue) && (ie = null);
          }
        } else
          $ = null, ie = a;
        if ($ !== ie) {
          var nt = ep, Rt = "onMouseLeave", mt = "onMouseEnter", tn = "mouse";
          (t === "pointerout" || t === "pointerover") && (nt = _h, Rt = "onPointerLeave", mt = "onPointerEnter", tn = "pointer");
          var Xt = $ == null ? x : kf($), ee = ie == null ? x : kf(ie), be = new nt(Rt, tn + "leave", $, i, l);
          be.target = Xt, be.relatedTarget = ee;
          var te = null, Fe = Zs(l);
          if (Fe === a) {
            var lt = new nt(mt, tn + "enter", ie, i, l);
            lt.target = ee, lt.relatedTarget = Xt, te = lt;
          }
          dT(e, be, te, $, ie);
        }
      }
    }
    function re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ne = typeof Object.is == "function" ? Object.is : re;
    function dt(e, t) {
      if (Ne(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!we.call(t, s) || !Ne(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function wt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function xt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function kt(e, t) {
      for (var a = wt(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Xi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = wt(xt(a));
      }
    }
    function hr(e) {
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
      var s = 0, f = -1, p = -1, v = 0, C = 0, x = e, q = null;
      e: for (; ; ) {
        for (var $ = null; x === t && (a === 0 || x.nodeType === Xi) && (f = s + a), x === i && (l === 0 || x.nodeType === Xi) && (p = s + l), x.nodeType === Xi && (s += x.nodeValue.length), ($ = x.firstChild) !== null; )
          q = x, x = $;
        for (; ; ) {
          if (x === e)
            break e;
          if (q === t && ++v === a && (f = s), q === i && ++C === l && (p = s), ($ = x.nextSibling) !== null)
            break;
          x = q, q = x.parentNode;
        }
        x = $;
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
        var C = kt(e, f), x = kt(e, p);
        if (C && x) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === x.node && l.focusOffset === x.offset)
            return;
          var q = a.createRange();
          q.setStart(C.node, C.offset), l.removeAllRanges(), f > p ? (l.addRange(q), l.extend(x.node, x.offset)) : (q.setEnd(x.node, x.offset), l.addRange(q));
        }
      }
    }
    function Ph(e) {
      return e && e.nodeType === Xi;
    }
    function ub(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ph(e) ? !1 : Ph(t) ? ub(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Gw(e) {
      return e && e.ownerDocument && ub(e.ownerDocument.documentElement, e);
    }
    function Qw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function sb() {
      for (var e = window, t = Pa(); t instanceof e.HTMLIFrameElement; ) {
        if (Qw(t))
          e = t.contentWindow;
        else
          return t;
        t = Pa(e.document);
      }
      return t;
    }
    function Jy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Xw() {
      var e = sb();
      return {
        focusedElem: e,
        selectionRange: Jy(e) ? Zw(e) : null
      };
    }
    function Kw(e) {
      var t = sb(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Gw(a)) {
        i !== null && Jy(a) && Jw(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ra && l.push({
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
    function Zw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = hr(e), t || {
        start: 0,
        end: 0
      };
    }
    function Jw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Xo(e, t);
    }
    var eT = rt && "documentMode" in document && document.documentMode <= 11;
    function tT() {
      Re("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Tf = null, eg = null, cp = null, tg = !1;
    function nT(e) {
      if ("selectionStart" in e && Jy(e))
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
    function rT(e) {
      return e.window === e ? e.document : e.nodeType === Ki ? e : e.ownerDocument;
    }
    function cb(e, t, a) {
      var i = rT(a);
      if (!(tg || Tf == null || Tf !== Pa(i))) {
        var l = nT(Tf);
        if (!cp || !dt(cp, l)) {
          cp = l;
          var s = Hh(eg, "onSelect");
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
    function aT(e, t, a, i, l, s, f) {
      var p = a ? kf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Gs(p) || p.contentEditable === "true") && (Tf = p, eg = a, cp = null);
          break;
        case "focusout":
          Tf = null, eg = null, cp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          tg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          tg = !1, cb(e, i, l);
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
          if (eT)
            break;
        // falls through
        case "keydown":
        case "keyup":
          cb(e, i, l);
      }
    }
    function Ah(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: Ah("Animation", "AnimationEnd"),
      animationiteration: Ah("Animation", "AnimationIteration"),
      animationstart: Ah("Animation", "AnimationStart"),
      transitionend: Ah("Transition", "TransitionEnd")
    }, ng = {}, fb = {};
    rt && (fb = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function Uh(e) {
      if (ng[e])
        return ng[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in fb)
          return ng[e] = t[a];
      return e;
    }
    var db = Uh("animationend"), pb = Uh("animationiteration"), vb = Uh("animationstart"), hb = Uh("transitionend"), mb = /* @__PURE__ */ new Map(), yb = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Nu(e, t) {
      mb.set(e, t), Re(t, [e]);
    }
    function iT() {
      for (var e = 0; e < yb.length; e++) {
        var t = yb[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Nu(a, "on" + i);
      }
      Nu(db, "onAnimationEnd"), Nu(pb, "onAnimationIteration"), Nu(vb, "onAnimationStart"), Nu("dblclick", "onDoubleClick"), Nu("focusin", "onFocus"), Nu("focusout", "onBlur"), Nu(hb, "onTransitionEnd");
    }
    function oT(e, t, a, i, l, s, f) {
      var p = mb.get(t);
      if (p !== void 0) {
        var v = Ui, C = t;
        switch (t) {
          case "keypress":
            if (qo(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = xh;
            break;
          case "focusin":
            C = "focus", v = oo;
            break;
          case "focusout":
            C = "blur", v = oo;
            break;
          case "beforeblur":
          case "afterblur":
            v = oo;
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
            v = ep;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = jl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Dh;
            break;
          case db:
          case pb:
          case vb:
            v = bh;
            break;
          case hb:
            v = Wa;
            break;
          case "scroll":
            v = pa;
            break;
          case "wheel":
            v = Qy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = yf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = _h;
            break;
        }
        var x = (s & Aa) !== 0;
        {
          var q = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", $ = cT(a, p, i.type, x, q);
          if ($.length > 0) {
            var ie = new v(p, C, null, i, l);
            e.push({
              event: ie,
              listeners: $
            });
          }
        }
      }
    }
    iT(), J(), Qs(), tT(), Xy();
    function lT(e, t, a, i, l, s, f) {
      oT(e, t, a, i, l, s);
      var p = (s & Cd) === 0;
      p && (W(e, t, a, i, l), Qn(e, t, a, i, l), aT(e, t, a, i, l), Lh(e, t, a, i, l));
    }
    var fp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], rg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(fp));
    function gb(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, _i(i, t, void 0, e), e.currentTarget = null;
    }
    function uT(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          gb(e, v, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var x = t[C], q = x.instance, $ = x.currentTarget, ie = x.listener;
          if (q !== i && e.isPropagationStopped())
            return;
          gb(e, ie, $), i = q;
        }
    }
    function Sb(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        uT(s, f, a);
      }
      vs();
    }
    function sT(e, t, a, i, l) {
      var s = wd(a), f = [];
      lT(f, e, i, a, s, t), Sb(f, t);
    }
    function Vn(e, t) {
      rg.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Hx(t), l = pT(e);
      i.has(l) || (Eb(t, e, wc, a), i.add(l));
    }
    function ag(e, t, a) {
      rg.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), Eb(a, e, i, t);
    }
    var jh = "_reactListening" + Math.random().toString(36).slice(2);
    function dp(e) {
      if (!e[jh]) {
        e[jh] = !0, $e.forEach(function(a) {
          a !== "selectionchange" && (rg.has(a) || ag(a, !1, e), ag(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[jh] || (t[jh] = !0, ag("selectionchange", !1, t)));
      }
    }
    function Eb(e, t, a, i, l) {
      var s = Cr(e, t, a), f = void 0;
      ps && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Jd(e, t, s, f) : da(e, t, s) : f !== void 0 ? ku(e, t, s, f) : Is(e, t, s);
    }
    function bb(e, t) {
      return e === t || e.nodeType === Kn && e.parentNode === t;
    }
    function ig(e, t, a, i, l) {
      var s = i;
      if (!(t & Rd) && !(t & wc)) {
        var f = l;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === V || v === ne) {
              var C = p.stateNode.containerInfo;
              if (bb(C, f))
                break;
              if (v === ne)
                for (var x = p.return; x !== null; ) {
                  var q = x.tag;
                  if (q === V || q === ne) {
                    var $ = x.stateNode.containerInfo;
                    if (bb($, f))
                      return;
                  }
                  x = x.return;
                }
              for (; C !== null; ) {
                var ie = Zs(C);
                if (ie === null)
                  return;
                var se = ie.tag;
                if (se === he || se === Ue) {
                  p = s = ie;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      qv(function() {
        return sT(e, t, a, s);
      });
    }
    function pp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function cT(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], C = e, x = null; C !== null; ) {
        var q = C, $ = q.stateNode, ie = q.tag;
        if (ie === he && $ !== null && (x = $, p !== null)) {
          var se = Lo(C, p);
          se != null && v.push(pp(C, se, x));
        }
        if (l)
          break;
        C = C.return;
      }
      return v;
    }
    function Hh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, p = s.tag;
        if (p === he && f !== null) {
          var v = f, C = Lo(l, a);
          C != null && i.unshift(pp(l, C, v));
          var x = Lo(l, t);
          x != null && i.push(pp(l, x, v));
        }
        l = l.return;
      }
      return i;
    }
    function _f(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== he);
      return e || null;
    }
    function fT(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = _f(s))
        l++;
      for (var f = 0, p = i; p; p = _f(p))
        f++;
      for (; l - f > 0; )
        a = _f(a), l--;
      for (; f - l > 0; )
        i = _f(i), f--;
      for (var v = l; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = _f(a), i = _f(i);
      }
      return null;
    }
    function Rb(e, t, a, i, l) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, C = v.alternate, x = v.stateNode, q = v.tag;
        if (C !== null && C === i)
          break;
        if (q === he && x !== null) {
          var $ = x;
          if (l) {
            var ie = Lo(p, s);
            ie != null && f.unshift(pp(p, ie, $));
          } else if (!l) {
            var se = Lo(p, s);
            se != null && f.push(pp(p, se, $));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function dT(e, t, a, i, l) {
      var s = i && l ? fT(i, l) : null;
      i !== null && Rb(e, t, i, s, !1), l !== null && a !== null && Rb(e, a, l, s, !0);
    }
    function pT(e, t) {
      return e + "__bubble";
    }
    var qa = !1, vp = "dangerouslySetInnerHTML", Fh = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", Cb = "autoFocus", Xs = "children", Ks = "style", Bh = "__html", og, Vh, hp, wb, Ih, Tb, xb;
    og = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Vh = function(e, t) {
      Sd(e, t), Rc(e, t), Iv(e, t, {
        registrationNameDependencies: We,
        possibleRegistrationNames: pe
      });
    }, Tb = rt && !document.documentMode, hp = function(e, t, a) {
      if (!qa) {
        var i = $h(a), l = $h(t);
        l !== i && (qa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, wb = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Ih = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, xb = function(e, t) {
      var a = e.namespaceURI === Qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var vT = /\r\n?/g, hT = /\u0000|\uFFFD/g;
    function $h(e) {
      ve(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(vT, `
`).replace(hT, "");
    }
    function Wh(e, t, a, i) {
      var l = $h(t), s = $h(e);
      if (s !== l && (i && (qa || (qa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function _b(e) {
      return e.nodeType === Ki ? e : e.ownerDocument;
    }
    function mT() {
    }
    function qh(e) {
      e.onclick = mT;
    }
    function yT(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ks)
            f && Object.freeze(f), Uv(t, f);
          else if (s === vp) {
            var p = f ? f[Bh] : void 0;
            p != null && Tv(t, p);
          } else if (s === Xs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && du(t, f);
            } else typeof f == "number" && du(t, "" + f);
          else s === Fh || s === Pu || s === Cb || (We.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ih(s, f), s === "onScroll" && Vn("scroll", t)) : f != null && Ur(t, s, f, l));
        }
    }
    function gT(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Ks ? Uv(e, f) : s === vp ? Tv(e, f) : s === Xs ? du(e, f) : Ur(e, s, f, i);
      }
    }
    function ST(e, t, a, i) {
      var l, s = _b(a), f, p = i;
      if (p === Qi && (p = dd(e)), p === Qi) {
        if (l = zo(e, t), !l && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var C = v.firstChild;
          f = v.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var x = f;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Qi && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !we.call(og, e) && (og[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function ET(e, t) {
      return _b(t).createTextNode(e);
    }
    function bT(e, t, a, i) {
      var l = zo(t, a);
      Vh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Vn("cancel", e), Vn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Vn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < fp.length; f++)
            Vn(fp[f], e);
          s = a;
          break;
        case "source":
          Vn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Vn("error", e), Vn("load", e), s = a;
          break;
        case "details":
          Vn("toggle", e), s = a;
          break;
        case "input":
          li(e, a), s = fu(e, a), Vn("invalid", e);
          break;
        case "option":
          rn(e, a), s = a;
          break;
        case "select":
          vl(e, a), s = as(e, a), Vn("invalid", e);
          break;
        case "textarea":
          sd(e, a), s = ud(e, a), Vn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ec(t, s), yT(t, e, i, s, l), t) {
        case "input":
          oi(e), oe(e, a, !1);
          break;
        case "textarea":
          oi(e), Cv(e);
          break;
        case "option":
          zn(e, a);
          break;
        case "select":
          od(e, a);
          break;
        default:
          typeof s.onClick == "function" && qh(e);
          break;
      }
    }
    function RT(e, t, a, i, l) {
      Vh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = fu(e, a), p = fu(e, i), s = [];
          break;
        case "select":
          f = as(e, a), p = as(e, i), s = [];
          break;
        case "textarea":
          f = ud(e, a), p = ud(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && qh(e);
          break;
      }
      Ec(t, p);
      var v, C, x = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ks) {
            var q = f[v];
            for (C in q)
              q.hasOwnProperty(C) && (x || (x = {}), x[C] = "");
          } else v === vp || v === Xs || v === Fh || v === Pu || v === Cb || (We.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var $ = p[v], ie = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || $ === ie || $ == null && ie == null))
          if (v === Ks)
            if ($ && Object.freeze($), ie) {
              for (C in ie)
                ie.hasOwnProperty(C) && (!$ || !$.hasOwnProperty(C)) && (x || (x = {}), x[C] = "");
              for (C in $)
                $.hasOwnProperty(C) && ie[C] !== $[C] && (x || (x = {}), x[C] = $[C]);
            } else
              x || (s || (s = []), s.push(v, x)), x = $;
          else if (v === vp) {
            var se = $ ? $[Bh] : void 0, Ee = ie ? ie[Bh] : void 0;
            se != null && Ee !== se && (s = s || []).push(v, se);
          } else v === Xs ? (typeof $ == "string" || typeof $ == "number") && (s = s || []).push(v, "" + $) : v === Fh || v === Pu || (We.hasOwnProperty(v) ? ($ != null && (typeof $ != "function" && Ih(v, $), v === "onScroll" && Vn("scroll", e)), !s && ie !== $ && (s = [])) : (s = s || []).push(v, $));
      }
      return x && (Ly(x, p[Ks]), (s = s || []).push(Ks, x)), s;
    }
    function CT(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && h(e, l);
      var s = zo(a, i), f = zo(a, l);
      switch (gT(e, t, s, f), a) {
        case "input":
          L(e, l);
          break;
        case "textarea":
          Rv(e, l);
          break;
        case "select":
          yc(e, l);
          break;
      }
    }
    function wT(e) {
      {
        var t = e.toLowerCase();
        return ss.hasOwnProperty(t) && ss[t] || null;
      }
    }
    function TT(e, t, a, i, l, s, f) {
      var p, v;
      switch (p = zo(t, a), Vh(t, a), t) {
        case "dialog":
          Vn("cancel", e), Vn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Vn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < fp.length; C++)
            Vn(fp[C], e);
          break;
        case "source":
          Vn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Vn("error", e), Vn("load", e);
          break;
        case "details":
          Vn("toggle", e);
          break;
        case "input":
          li(e, a), Vn("invalid", e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          vl(e, a), Vn("invalid", e);
          break;
        case "textarea":
          sd(e, a), Vn("invalid", e);
          break;
      }
      Ec(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var x = e.attributes, q = 0; q < x.length; q++) {
          var $ = x[q].name.toLowerCase();
          switch ($) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(x[q].name);
          }
        }
      }
      var ie = null;
      for (var se in a)
        if (a.hasOwnProperty(se)) {
          var Ee = a[se];
          if (se === Xs)
            typeof Ee == "string" ? e.textContent !== Ee && (a[Pu] !== !0 && Wh(e.textContent, Ee, s, f), ie = [Xs, Ee]) : typeof Ee == "number" && e.textContent !== "" + Ee && (a[Pu] !== !0 && Wh(e.textContent, Ee, s, f), ie = [Xs, "" + Ee]);
          else if (We.hasOwnProperty(se))
            Ee != null && (typeof Ee != "function" && Ih(se, Ee), se === "onScroll" && Vn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var nt = void 0, Rt = an(se);
            if (a[Pu] !== !0) {
              if (!(se === Fh || se === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              se === "value" || se === "checked" || se === "selected")) {
                if (se === vp) {
                  var mt = e.innerHTML, tn = Ee ? Ee[Bh] : void 0;
                  if (tn != null) {
                    var Xt = xb(e, tn);
                    Xt !== mt && hp(se, mt, Xt);
                  }
                } else if (se === Ks) {
                  if (v.delete(se), Tb) {
                    var ee = zy(Ee);
                    nt = e.getAttribute("style"), ee !== nt && hp(se, nt, ee);
                  }
                } else if (p && !O)
                  v.delete(se.toLowerCase()), nt = ll(e, se, Ee), Ee !== nt && hp(se, nt, Ee);
                else if (!Lt(se, Rt, p) && !Dn(se, Ee, Rt, p)) {
                  var be = !1;
                  if (Rt !== null)
                    v.delete(Rt.attributeName), nt = Ro(e, se, Ee, Rt);
                  else {
                    var te = i;
                    if (te === Qi && (te = dd(t)), te === Qi)
                      v.delete(se.toLowerCase());
                    else {
                      var Fe = wT(se);
                      Fe !== null && Fe !== se && (be = !0, v.delete(Fe)), v.delete(se);
                    }
                    nt = ll(e, se, Ee);
                  }
                  var lt = O;
                  !lt && Ee !== nt && !be && hp(se, nt, Ee);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Pu] !== !0 && wb(v), t) {
        case "input":
          oi(e), oe(e, a, !0);
          break;
        case "textarea":
          oi(e), Cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && qh(e);
          break;
      }
      return ie;
    }
    function xT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function lg(e, t) {
      {
        if (qa)
          return;
        qa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ug(e, t) {
      {
        if (qa)
          return;
        qa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function sg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function cg(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function _T(e, t, a) {
      switch (t) {
        case "input":
          me(e, a);
          return;
        case "textarea":
          _y(e, a);
          return;
        case "select":
          ld(e, a);
          return;
      }
    }
    var mp = function() {
    }, yp = function() {
    };
    {
      var OT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Ob = [
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
      ], DT = Ob.concat(["button"]), kT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Db = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      yp = function(e, t) {
        var a = Vt({}, e || Db), i = {
          tag: t
        };
        return Ob.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), DT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), OT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var zT = function(e, t) {
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
            return kT.indexOf(t) === -1;
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
      }, MT = function(e, t) {
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
      }, kb = {};
      mp = function(e, t, a) {
        a = a || Db;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = zT(e, l) ? null : i, f = s ? null : MT(e, a), p = s || f;
        if (p) {
          var v = p.tag, C = !!s + "|" + e + "|" + v;
          if (!kb[C]) {
            kb[C] = !0;
            var x = e, q = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", q = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var $ = "";
              v === "table" && e === "tr" && ($ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, v, q, $);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, v);
          }
        }
      };
    }
    var Yh = "suppressHydrationWarning", Gh = "$", Qh = "/$", gp = "$?", Sp = "$!", LT = "style", fg = null, dg = null;
    function NT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ki:
        case vd: {
          t = i === Ki ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : pd(null, "");
          break;
        }
        default: {
          var s = i === Kn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = pd(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = yp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function PT(e, t, a) {
      {
        var i = e, l = pd(i.namespace, t), s = yp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function Hk(e) {
      return e;
    }
    function AT(e) {
      fg = rr(), dg = Xw();
      var t = null;
      return cr(!1), t;
    }
    function UT(e) {
      Kw(dg), cr(fg), fg = null, dg = null;
    }
    function jT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (mp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = yp(f.ancestorInfo, e);
          mp(null, p, v);
        }
        s = f.namespace;
      }
      var C = ST(e, t, a, s);
      return Rp(l, C), Eg(C, t), C;
    }
    function HT(e, t) {
      e.appendChild(t);
    }
    function FT(e, t, a, i, l) {
      switch (bT(e, t, a, i), t) {
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
    function BT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = yp(f.ancestorInfo, t);
          mp(null, p, v);
        }
      }
      return RT(e, t, a, i);
    }
    function pg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function VT(e, t, a, i) {
      {
        var l = a;
        mp(null, e, l.ancestorInfo);
      }
      var s = ET(e, t);
      return Rp(i, s), s;
    }
    function IT() {
      var e = window.event;
      return e === void 0 ? Va : vf(e.type);
    }
    var vg = typeof setTimeout == "function" ? setTimeout : void 0, $T = typeof clearTimeout == "function" ? clearTimeout : void 0, hg = -1, zb = typeof Promise == "function" ? Promise : void 0, WT = typeof queueMicrotask == "function" ? queueMicrotask : typeof zb < "u" ? function(e) {
      return zb.resolve(null).then(e).catch(qT);
    } : vg;
    function qT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function YT(e, t, a, i) {
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
    function GT(e, t, a, i, l, s) {
      CT(e, t, a, i, l), Eg(e, l);
    }
    function Mb(e) {
      du(e, "");
    }
    function QT(e, t, a) {
      e.nodeValue = a;
    }
    function XT(e, t) {
      e.appendChild(t);
    }
    function KT(e, t) {
      var a;
      e.nodeType === Kn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && qh(a);
    }
    function ZT(e, t, a) {
      e.insertBefore(t, a);
    }
    function JT(e, t, a) {
      e.nodeType === Kn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ex(e, t) {
      e.removeChild(t);
    }
    function tx(e, t) {
      e.nodeType === Kn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function mg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === Kn) {
          var s = l.data;
          if (s === Qh)
            if (i === 0) {
              e.removeChild(l), Pl(t);
              return;
            } else
              i--;
          else (s === Gh || s === gp || s === Sp) && i++;
        }
        a = l;
      } while (a);
      Pl(t);
    }
    function nx(e, t) {
      e.nodeType === Kn ? mg(e.parentNode, t) : e.nodeType === ra && mg(e, t), Pl(e);
    }
    function rx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ax(e) {
      e.nodeValue = "";
    }
    function ix(e, t) {
      e = e;
      var a = t[LT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Sc("display", i);
    }
    function ox(e, t) {
      e.nodeValue = t;
    }
    function lx(e) {
      e.nodeType === ra ? e.textContent = "" : e.nodeType === Ki && e.documentElement && e.removeChild(e.documentElement);
    }
    function ux(e, t, a) {
      return e.nodeType !== ra || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function sx(e, t) {
      return t === "" || e.nodeType !== Xi ? null : e;
    }
    function cx(e) {
      return e.nodeType !== Kn ? null : e;
    }
    function Lb(e) {
      return e.data === gp;
    }
    function yg(e) {
      return e.data === Sp;
    }
    function fx(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function dx(e, t) {
      e._reactRetry = t;
    }
    function Xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ra || t === Xi)
          break;
        if (t === Kn) {
          var a = e.data;
          if (a === Gh || a === Sp || a === gp)
            break;
          if (a === Qh)
            return null;
        }
      }
      return e;
    }
    function Ep(e) {
      return Xh(e.nextSibling);
    }
    function px(e) {
      return Xh(e.firstChild);
    }
    function vx(e) {
      return Xh(e.firstChild);
    }
    function hx(e) {
      return Xh(e.nextSibling);
    }
    function mx(e, t, a, i, l, s, f) {
      Rp(s, e), Eg(e, a);
      var p;
      {
        var v = l;
        p = v.namespace;
      }
      var C = (s.mode & qt) !== Et;
      return TT(e, t, a, p, i, C, f);
    }
    function yx(e, t, a, i) {
      return Rp(a, e), a.mode & qt, xT(e, t);
    }
    function gx(e, t) {
      Rp(t, e);
    }
    function Sx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Kn) {
          var i = t.data;
          if (i === Qh) {
            if (a === 0)
              return Ep(t);
            a--;
          } else (i === Gh || i === Sp || i === gp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Nb(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Kn) {
          var i = t.data;
          if (i === Gh || i === Sp || i === gp) {
            if (a === 0)
              return t;
            a--;
          } else i === Qh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Ex(e) {
      Pl(e);
    }
    function bx(e) {
      Pl(e);
    }
    function Rx(e) {
      return e !== "head" && e !== "body";
    }
    function Cx(e, t, a, i) {
      var l = !0;
      Wh(t.nodeValue, a, i, l);
    }
    function wx(e, t, a, i, l, s) {
      if (t[Yh] !== !0) {
        var f = !0;
        Wh(i.nodeValue, l, s, f);
      }
    }
    function Tx(e, t) {
      t.nodeType === ra ? lg(e, t) : t.nodeType === Kn || ug(e, t);
    }
    function xx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ra ? lg(a, t) : t.nodeType === Kn || ug(a, t));
      }
    }
    function _x(e, t, a, i, l) {
      (l || t[Yh] !== !0) && (i.nodeType === ra ? lg(a, i) : i.nodeType === Kn || ug(a, i));
    }
    function Ox(e, t, a) {
      sg(e, t);
    }
    function Dx(e, t) {
      cg(e, t);
    }
    function kx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && sg(i, t);
      }
    }
    function zx(e, t) {
      {
        var a = e.parentNode;
        a !== null && cg(a, t);
      }
    }
    function Mx(e, t, a, i, l, s) {
      (s || t[Yh] !== !0) && sg(a, i);
    }
    function Lx(e, t, a, i, l) {
      (l || t[Yh] !== !0) && cg(a, i);
    }
    function Nx(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Px(e) {
      dp(e);
    }
    var Of = Math.random().toString(36).slice(2), Df = "__reactFiber$" + Of, gg = "__reactProps$" + Of, bp = "__reactContainer$" + Of, Sg = "__reactEvents$" + Of, Ax = "__reactListeners$" + Of, Ux = "__reactHandles$" + Of;
    function jx(e) {
      delete e[Df], delete e[gg], delete e[Sg], delete e[Ax], delete e[Ux];
    }
    function Rp(e, t) {
      t[Df] = e;
    }
    function Kh(e, t) {
      t[bp] = e;
    }
    function Pb(e) {
      e[bp] = null;
    }
    function Cp(e) {
      return !!e[bp];
    }
    function Zs(e) {
      var t = e[Df];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[bp] || a[Df], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = Nb(e); l !== null; ) {
              var s = l[Df];
              if (s)
                return s;
              l = Nb(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Au(e) {
      var t = e[Df] || e[bp];
      return t && (t.tag === he || t.tag === Ue || t.tag === b || t.tag === V) ? t : null;
    }
    function kf(e) {
      if (e.tag === he || e.tag === Ue)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Zh(e) {
      return e[gg] || null;
    }
    function Eg(e, t) {
      e[gg] = t;
    }
    function Hx(e) {
      var t = e[Sg];
      return t === void 0 && (t = e[Sg] = /* @__PURE__ */ new Set()), t;
    }
    var Ab = {}, Ub = m.ReactDebugCurrentFrame;
    function Jh(e) {
      if (e) {
        var t = e._owner, a = qi(e.type, e._source, t ? t.type : null);
        Ub.setExtraStackFrame(a);
      } else
        Ub.setExtraStackFrame(null);
    }
    function uo(e, t, a, i, l) {
      {
        var s = Function.call.bind(we);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              p = C;
            }
            p && !(p instanceof Error) && (Jh(l), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Jh(null)), p instanceof Error && !(p.message in Ab) && (Ab[p.message] = !0, Jh(l), S("Failed %s type: %s", a, p.message), Jh(null));
          }
      }
    }
    var bg = [], em;
    em = [];
    var Bl = -1;
    function Uu(e) {
      return {
        current: e
      };
    }
    function va(e, t) {
      if (Bl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== em[Bl] && S("Unexpected Fiber popped."), e.current = bg[Bl], bg[Bl] = null, em[Bl] = null, Bl--;
    }
    function ha(e, t, a) {
      Bl++, bg[Bl] = e.current, em[Bl] = a, e.current = t;
    }
    var Rg;
    Rg = {};
    var vi = {};
    Object.freeze(vi);
    var Vl = Uu(vi), Ko = Uu(!1), Cg = vi;
    function zf(e, t, a) {
      return a && Zo(t) ? Cg : Vl.current;
    }
    function jb(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Mf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return vi;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Nt(e) || "Unknown";
          uo(i, s, "context", p);
        }
        return l && jb(e, t, s), s;
      }
    }
    function tm() {
      return Ko.current;
    }
    function Zo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function nm(e) {
      va(Ko, e), va(Vl, e);
    }
    function wg(e) {
      va(Ko, e), va(Vl, e);
    }
    function Hb(e, t, a) {
      {
        if (Vl.current !== vi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ha(Vl, t, e), ha(Ko, a, e);
      }
    }
    function Fb(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Nt(e) || "Unknown";
            Rg[s] || (Rg[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in l))
            throw new Error((Nt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Nt(e) || "Unknown";
          uo(l, f, "child context", v);
        }
        return Vt({}, a, f);
      }
    }
    function rm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || vi;
        return Cg = Vl.current, ha(Vl, a, e), ha(Ko, Ko.current, e), !0;
      }
    }
    function Bb(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = Fb(e, t, Cg);
          i.__reactInternalMemoizedMergedChildContext = l, va(Ko, e), va(Vl, e), ha(Vl, l, e), ha(Ko, a, e);
        } else
          va(Ko, e), ha(Ko, a, e);
      }
    }
    function Fx(e) {
      {
        if (!bl(e) || e.tag !== Y)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case V:
              return t.stateNode.context;
            case Y: {
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
    var ju = 0, am = 1, Il = null, Tg = !1, xg = !1;
    function Vb(e) {
      Il === null ? Il = [e] : Il.push(e);
    }
    function Bx(e) {
      Tg = !0, Vb(e);
    }
    function Ib() {
      Tg && Hu();
    }
    function Hu() {
      if (!xg && Il !== null) {
        xg = !0;
        var e = 0, t = $a();
        try {
          var a = !0, i = Il;
          for (nr(Vr); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Il = null, Tg = !1;
        } catch (s) {
          throw Il !== null && (Il = Il.slice(e + 1)), xd(ys, Hu), s;
        } finally {
          nr(t), xg = !1;
        }
      }
      return null;
    }
    var Lf = [], Nf = 0, im = null, om = 0, ji = [], Hi = 0, Js = null, $l = 1, Wl = "";
    function Vx(e) {
      return tc(), (e.flags & Oi) !== St;
    }
    function Ix(e) {
      return tc(), om;
    }
    function $x() {
      var e = Wl, t = $l, a = t & ~Wx(t);
      return a.toString(32) + e;
    }
    function ec(e, t) {
      tc(), Lf[Nf++] = om, Lf[Nf++] = im, im = e, om = t;
    }
    function $b(e, t, a) {
      tc(), ji[Hi++] = $l, ji[Hi++] = Wl, ji[Hi++] = Js, Js = e;
      var i = $l, l = Wl, s = lm(i) - 1, f = i & ~(1 << s), p = a + 1, v = lm(t) + s;
      if (v > 30) {
        var C = s - s % 5, x = (1 << C) - 1, q = (f & x).toString(32), $ = f >> C, ie = s - C, se = lm(t) + ie, Ee = p << ie, nt = Ee | $, Rt = q + l;
        $l = 1 << se | nt, Wl = Rt;
      } else {
        var mt = p << s, tn = mt | f, Xt = l;
        $l = 1 << v | tn, Wl = Xt;
      }
    }
    function _g(e) {
      tc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ec(e, a), $b(e, a, i);
      }
    }
    function lm(e) {
      return 32 - er(e);
    }
    function Wx(e) {
      return 1 << lm(e) - 1;
    }
    function Og(e) {
      for (; e === im; )
        im = Lf[--Nf], Lf[Nf] = null, om = Lf[--Nf], Lf[Nf] = null;
      for (; e === Js; )
        Js = ji[--Hi], ji[Hi] = null, Wl = ji[--Hi], ji[Hi] = null, $l = ji[--Hi], ji[Hi] = null;
    }
    function qx() {
      return tc(), Js !== null ? {
        id: $l,
        overflow: Wl
      } : null;
    }
    function Yx(e, t) {
      tc(), ji[Hi++] = $l, ji[Hi++] = Wl, ji[Hi++] = Js, $l = t.id, Wl = t.overflow, Js = e;
    }
    function tc() {
      Yr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var qr = null, Fi = null, so = !1, nc = !1, Fu = null;
    function Gx() {
      so && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Wb() {
      nc = !0;
    }
    function Qx() {
      return nc;
    }
    function Xx(e) {
      var t = e.stateNode.containerInfo;
      return Fi = vx(t), qr = e, so = !0, Fu = null, nc = !1, !0;
    }
    function Kx(e, t, a) {
      return Fi = hx(t), qr = e, so = !0, Fu = null, nc = !1, a !== null && Yx(e, a), !0;
    }
    function qb(e, t) {
      switch (e.tag) {
        case V: {
          Tx(e.stateNode.containerInfo, t);
          break;
        }
        case he: {
          var a = (e.mode & qt) !== Et;
          _x(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case b: {
          var i = e.memoizedState;
          i.dehydrated !== null && xx(i.dehydrated, t);
          break;
        }
      }
    }
    function Yb(e, t) {
      qb(e, t);
      var a = tD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ua) : i.push(a);
    }
    function Dg(e, t) {
      {
        if (nc)
          return;
        switch (e.tag) {
          case V: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case he:
                var i = t.type;
                t.pendingProps, Ox(a, i);
                break;
              case Ue:
                var l = t.pendingProps;
                Dx(a, l);
                break;
            }
            break;
          }
          case he: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case he: {
                var v = t.type, C = t.pendingProps, x = (e.mode & qt) !== Et;
                Mx(
                  s,
                  f,
                  p,
                  v,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case Ue: {
                var q = t.pendingProps, $ = (e.mode & qt) !== Et;
                Lx(
                  s,
                  f,
                  p,
                  q,
                  // TODO: Delete this argument when we remove the legacy root API.
                  $
                );
                break;
              }
            }
            break;
          }
          case b: {
            var ie = e.memoizedState, se = ie.dehydrated;
            if (se !== null) switch (t.tag) {
              case he:
                var Ee = t.type;
                t.pendingProps, kx(se, Ee);
                break;
              case Ue:
                var nt = t.pendingProps;
                zx(se, nt);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function Gb(e, t) {
      t.flags = t.flags & ~ia | Hn, Dg(e, t);
    }
    function Qb(e, t) {
      switch (e.tag) {
        case he: {
          var a = e.type;
          e.pendingProps;
          var i = ux(t, a);
          return i !== null ? (e.stateNode = i, qr = e, Fi = px(i), !0) : !1;
        }
        case Ue: {
          var l = e.pendingProps, s = sx(t, l);
          return s !== null ? (e.stateNode = s, qr = e, Fi = null, !0) : !1;
        }
        case b: {
          var f = cx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: qx(),
              retryLane: sa
            };
            e.memoizedState = p;
            var v = nD(f);
            return v.return = e, e.child = v, qr = e, Fi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function kg(e) {
      return (e.mode & qt) !== Et && (e.flags & yt) === St;
    }
    function zg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Mg(e) {
      if (so) {
        var t = Fi;
        if (!t) {
          kg(e) && (Dg(qr, e), zg()), Gb(qr, e), so = !1, qr = e;
          return;
        }
        var a = t;
        if (!Qb(e, t)) {
          kg(e) && (Dg(qr, e), zg()), t = Ep(a);
          var i = qr;
          if (!t || !Qb(e, t)) {
            Gb(qr, e), so = !1, qr = e;
            return;
          }
          Yb(i, a);
        }
      }
    }
    function Zx(e, t, a) {
      var i = e.stateNode, l = !nc, s = mx(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function Jx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = yx(t, a, e);
      if (i) {
        var l = qr;
        if (l !== null)
          switch (l.tag) {
            case V: {
              var s = l.stateNode.containerInfo, f = (l.mode & qt) !== Et;
              Cx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case he: {
              var p = l.type, v = l.memoizedProps, C = l.stateNode, x = (l.mode & qt) !== Et;
              wx(
                p,
                v,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function e_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      gx(a, e);
    }
    function t_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Sx(a);
    }
    function Xb(e) {
      for (var t = e.return; t !== null && t.tag !== he && t.tag !== V && t.tag !== b; )
        t = t.return;
      qr = t;
    }
    function um(e) {
      if (e !== qr)
        return !1;
      if (!so)
        return Xb(e), so = !0, !1;
      if (e.tag !== V && (e.tag !== he || Rx(e.type) && !pg(e.type, e.memoizedProps))) {
        var t = Fi;
        if (t)
          if (kg(e))
            Kb(e), zg();
          else
            for (; t; )
              Yb(e, t), t = Ep(t);
      }
      return Xb(e), e.tag === b ? Fi = t_(e) : Fi = qr ? Ep(e.stateNode) : null, !0;
    }
    function n_() {
      return so && Fi !== null;
    }
    function Kb(e) {
      for (var t = Fi; t; )
        qb(e, t), t = Ep(t);
    }
    function Pf() {
      qr = null, Fi = null, so = !1, nc = !1;
    }
    function Zb() {
      Fu !== null && (WR(Fu), Fu = null);
    }
    function Yr() {
      return so;
    }
    function Lg(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    var r_ = m.ReactCurrentBatchConfig, a_ = null;
    function i_() {
      return r_.transition;
    }
    var co = {
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
      var o_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rn && (t = a), a = a.return;
        return t;
      }, rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, wp = [], Tp = [], xp = [], _p = [], Op = [], Dp = [], ac = /* @__PURE__ */ new Set();
      co.recordUnsafeLifecycleWarnings = function(e, t) {
        ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && wp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillMount == "function" && Tp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && _p.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillUpdate == "function" && Dp.push(e));
      }, co.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        wp.length > 0 && (wp.forEach(function($) {
          e.add(Nt($) || "Component"), ac.add($.type);
        }), wp = []);
        var t = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function($) {
          t.add(Nt($) || "Component"), ac.add($.type);
        }), Tp = []);
        var a = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function($) {
          a.add(Nt($) || "Component"), ac.add($.type);
        }), xp = []);
        var i = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function($) {
          i.add(Nt($) || "Component"), ac.add($.type);
        }), _p = []);
        var l = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function($) {
          l.add(Nt($) || "Component"), ac.add($.type);
        }), Op = []);
        var s = /* @__PURE__ */ new Set();
        if (Dp.length > 0 && (Dp.forEach(function($) {
          s.add(Nt($) || "Component"), ac.add($.type);
        }), Dp = []), t.size > 0) {
          var f = rc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = rc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = rc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var C = rc(e);
          H(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var x = rc(a);
          H(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (l.size > 0) {
          var q = rc(l);
          H(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, q);
        }
      };
      var sm = /* @__PURE__ */ new Map(), Jb = /* @__PURE__ */ new Set();
      co.recordLegacyContextWarning = function(e, t) {
        var a = o_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Jb.has(e.type)) {
          var i = sm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], sm.set(a, i)), i.push(e));
        }
      }, co.flushLegacyContextWarning = function() {
        sm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Nt(s) || "Component"), Jb.add(s.type);
            });
            var l = rc(i);
            try {
              Sn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Nn();
            }
          }
        });
      }, co.discardPendingWarnings = function() {
        wp = [], Tp = [], xp = [], _p = [], Op = [], Dp = [], sm = /* @__PURE__ */ new Map();
      };
    }
    var Ng, Pg, Ag, Ug, jg, e0 = function(e, t) {
    };
    Ng = !1, Pg = !1, Ag = {}, Ug = {}, jg = {}, e0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Nt(t) || "Component";
        Ug[a] || (Ug[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function l_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function kp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rn || G) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Y) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !l_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = Nt(e) || "Component";
          Ag[l] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), Ag[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Y)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          j(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var x = function(q) {
            var $ = v.refs;
            q === null ? delete $[C] : $[C] = q;
          };
          return x._stringRef = C, x;
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
    function cm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function fm(e) {
      {
        var t = Nt(e) || "Component";
        if (jg[t])
          return;
        jg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function t0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function n0(e) {
      function t(ee, be) {
        if (e) {
          var te = ee.deletions;
          te === null ? (ee.deletions = [be], ee.flags |= Ua) : te.push(be);
        }
      }
      function a(ee, be) {
        if (!e)
          return null;
        for (var te = be; te !== null; )
          t(ee, te), te = te.sibling;
        return null;
      }
      function i(ee, be) {
        for (var te = /* @__PURE__ */ new Map(), Fe = be; Fe !== null; )
          Fe.key !== null ? te.set(Fe.key, Fe) : te.set(Fe.index, Fe), Fe = Fe.sibling;
        return te;
      }
      function l(ee, be) {
        var te = pc(ee, be);
        return te.index = 0, te.sibling = null, te;
      }
      function s(ee, be, te) {
        if (ee.index = te, !e)
          return ee.flags |= Oi, be;
        var Fe = ee.alternate;
        if (Fe !== null) {
          var lt = Fe.index;
          return lt < be ? (ee.flags |= Hn, be) : lt;
        } else
          return ee.flags |= Hn, be;
      }
      function f(ee) {
        return e && ee.alternate === null && (ee.flags |= Hn), ee;
      }
      function p(ee, be, te, Fe) {
        if (be === null || be.tag !== Ue) {
          var lt = LE(te, ee.mode, Fe);
          return lt.return = ee, lt;
        } else {
          var at = l(be, te);
          return at.return = ee, at;
        }
      }
      function v(ee, be, te, Fe) {
        var lt = te.type;
        if (lt === gi)
          return x(ee, be, te.props.children, Fe, te.key);
        if (be !== null && (be.elementType === lt || // Keep this check inline so it only runs on the false path:
        lC(be, te) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof lt == "object" && lt !== null && lt.$$typeof === Pt && t0(lt) === be.type)) {
          var at = l(be, te.props);
          return at.ref = kp(ee, be, te), at.return = ee, at._debugSource = te._source, at._debugOwner = te._owner, at;
        }
        var Dt = ME(te, ee.mode, Fe);
        return Dt.ref = kp(ee, be, te), Dt.return = ee, Dt;
      }
      function C(ee, be, te, Fe) {
        if (be === null || be.tag !== ne || be.stateNode.containerInfo !== te.containerInfo || be.stateNode.implementation !== te.implementation) {
          var lt = NE(te, ee.mode, Fe);
          return lt.return = ee, lt;
        } else {
          var at = l(be, te.children || []);
          return at.return = ee, at;
        }
      }
      function x(ee, be, te, Fe, lt) {
        if (be === null || be.tag !== ye) {
          var at = Ku(te, ee.mode, Fe, lt);
          return at.return = ee, at;
        } else {
          var Dt = l(be, te);
          return Dt.return = ee, Dt;
        }
      }
      function q(ee, be, te) {
        if (typeof be == "string" && be !== "" || typeof be == "number") {
          var Fe = LE("" + be, ee.mode, te);
          return Fe.return = ee, Fe;
        }
        if (typeof be == "object" && be !== null) {
          switch (be.$$typeof) {
            case jr: {
              var lt = ME(be, ee.mode, te);
              return lt.ref = kp(ee, null, be), lt.return = ee, lt;
            }
            case yr: {
              var at = NE(be, ee.mode, te);
              return at.return = ee, at;
            }
            case Pt: {
              var Dt = be._payload, Ut = be._init;
              return q(ee, Ut(Dt), te);
            }
          }
          if (It(be) || Ht(be)) {
            var wn = Ku(be, ee.mode, te, null);
            return wn.return = ee, wn;
          }
          cm(ee, be);
        }
        return typeof be == "function" && fm(ee), null;
      }
      function $(ee, be, te, Fe) {
        var lt = be !== null ? be.key : null;
        if (typeof te == "string" && te !== "" || typeof te == "number")
          return lt !== null ? null : p(ee, be, "" + te, Fe);
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case jr:
              return te.key === lt ? v(ee, be, te, Fe) : null;
            case yr:
              return te.key === lt ? C(ee, be, te, Fe) : null;
            case Pt: {
              var at = te._payload, Dt = te._init;
              return $(ee, be, Dt(at), Fe);
            }
          }
          if (It(te) || Ht(te))
            return lt !== null ? null : x(ee, be, te, Fe, null);
          cm(ee, te);
        }
        return typeof te == "function" && fm(ee), null;
      }
      function ie(ee, be, te, Fe, lt) {
        if (typeof Fe == "string" && Fe !== "" || typeof Fe == "number") {
          var at = ee.get(te) || null;
          return p(be, at, "" + Fe, lt);
        }
        if (typeof Fe == "object" && Fe !== null) {
          switch (Fe.$$typeof) {
            case jr: {
              var Dt = ee.get(Fe.key === null ? te : Fe.key) || null;
              return v(be, Dt, Fe, lt);
            }
            case yr: {
              var Ut = ee.get(Fe.key === null ? te : Fe.key) || null;
              return C(be, Ut, Fe, lt);
            }
            case Pt:
              var wn = Fe._payload, pn = Fe._init;
              return ie(ee, be, te, pn(wn), lt);
          }
          if (It(Fe) || Ht(Fe)) {
            var fr = ee.get(te) || null;
            return x(be, fr, Fe, lt, null);
          }
          cm(be, Fe);
        }
        return typeof Fe == "function" && fm(be), null;
      }
      function se(ee, be, te) {
        {
          if (typeof ee != "object" || ee === null)
            return be;
          switch (ee.$$typeof) {
            case jr:
            case yr:
              e0(ee, te);
              var Fe = ee.key;
              if (typeof Fe != "string")
                break;
              if (be === null) {
                be = /* @__PURE__ */ new Set(), be.add(Fe);
                break;
              }
              if (!be.has(Fe)) {
                be.add(Fe);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Fe);
              break;
            case Pt:
              var lt = ee._payload, at = ee._init;
              se(at(lt), be, te);
              break;
          }
        }
        return be;
      }
      function Ee(ee, be, te, Fe) {
        for (var lt = null, at = 0; at < te.length; at++) {
          var Dt = te[at];
          lt = se(Dt, lt, ee);
        }
        for (var Ut = null, wn = null, pn = be, fr = 0, vn = 0, ir = null; pn !== null && vn < te.length; vn++) {
          pn.index > vn ? (ir = pn, pn = null) : ir = pn.sibling;
          var ya = $(ee, pn, te[vn], Fe);
          if (ya === null) {
            pn === null && (pn = ir);
            break;
          }
          e && pn && ya.alternate === null && t(ee, pn), fr = s(ya, fr, vn), wn === null ? Ut = ya : wn.sibling = ya, wn = ya, pn = ir;
        }
        if (vn === te.length) {
          if (a(ee, pn), Yr()) {
            var ea = vn;
            ec(ee, ea);
          }
          return Ut;
        }
        if (pn === null) {
          for (; vn < te.length; vn++) {
            var mi = q(ee, te[vn], Fe);
            mi !== null && (fr = s(mi, fr, vn), wn === null ? Ut = mi : wn.sibling = mi, wn = mi);
          }
          if (Yr()) {
            var ka = vn;
            ec(ee, ka);
          }
          return Ut;
        }
        for (var za = i(ee, pn); vn < te.length; vn++) {
          var ga = ie(za, ee, vn, te[vn], Fe);
          ga !== null && (e && ga.alternate !== null && za.delete(ga.key === null ? vn : ga.key), fr = s(ga, fr, vn), wn === null ? Ut = ga : wn.sibling = ga, wn = ga);
        }
        if (e && za.forEach(function(ed) {
          return t(ee, ed);
        }), Yr()) {
          var Zl = vn;
          ec(ee, Zl);
        }
        return Ut;
      }
      function nt(ee, be, te, Fe) {
        var lt = Ht(te);
        if (typeof lt != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          te[Symbol.toStringTag] === "Generator" && (Pg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Pg = !0), te.entries === lt && (Ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ng = !0);
          var at = lt.call(te);
          if (at)
            for (var Dt = null, Ut = at.next(); !Ut.done; Ut = at.next()) {
              var wn = Ut.value;
              Dt = se(wn, Dt, ee);
            }
        }
        var pn = lt.call(te);
        if (pn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var fr = null, vn = null, ir = be, ya = 0, ea = 0, mi = null, ka = pn.next(); ir !== null && !ka.done; ea++, ka = pn.next()) {
          ir.index > ea ? (mi = ir, ir = null) : mi = ir.sibling;
          var za = $(ee, ir, ka.value, Fe);
          if (za === null) {
            ir === null && (ir = mi);
            break;
          }
          e && ir && za.alternate === null && t(ee, ir), ya = s(za, ya, ea), vn === null ? fr = za : vn.sibling = za, vn = za, ir = mi;
        }
        if (ka.done) {
          if (a(ee, ir), Yr()) {
            var ga = ea;
            ec(ee, ga);
          }
          return fr;
        }
        if (ir === null) {
          for (; !ka.done; ea++, ka = pn.next()) {
            var Zl = q(ee, ka.value, Fe);
            Zl !== null && (ya = s(Zl, ya, ea), vn === null ? fr = Zl : vn.sibling = Zl, vn = Zl);
          }
          if (Yr()) {
            var ed = ea;
            ec(ee, ed);
          }
          return fr;
        }
        for (var uv = i(ee, ir); !ka.done; ea++, ka = pn.next()) {
          var ol = ie(uv, ee, ea, ka.value, Fe);
          ol !== null && (e && ol.alternate !== null && uv.delete(ol.key === null ? ea : ol.key), ya = s(ol, ya, ea), vn === null ? fr = ol : vn.sibling = ol, vn = ol);
        }
        if (e && uv.forEach(function(LD) {
          return t(ee, LD);
        }), Yr()) {
          var MD = ea;
          ec(ee, MD);
        }
        return fr;
      }
      function Rt(ee, be, te, Fe) {
        if (be !== null && be.tag === Ue) {
          a(ee, be.sibling);
          var lt = l(be, te);
          return lt.return = ee, lt;
        }
        a(ee, be);
        var at = LE(te, ee.mode, Fe);
        return at.return = ee, at;
      }
      function mt(ee, be, te, Fe) {
        for (var lt = te.key, at = be; at !== null; ) {
          if (at.key === lt) {
            var Dt = te.type;
            if (Dt === gi) {
              if (at.tag === ye) {
                a(ee, at.sibling);
                var Ut = l(at, te.props.children);
                return Ut.return = ee, Ut._debugSource = te._source, Ut._debugOwner = te._owner, Ut;
              }
            } else if (at.elementType === Dt || // Keep this check inline so it only runs on the false path:
            lC(at, te) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Dt == "object" && Dt !== null && Dt.$$typeof === Pt && t0(Dt) === at.type) {
              a(ee, at.sibling);
              var wn = l(at, te.props);
              return wn.ref = kp(ee, at, te), wn.return = ee, wn._debugSource = te._source, wn._debugOwner = te._owner, wn;
            }
            a(ee, at);
            break;
          } else
            t(ee, at);
          at = at.sibling;
        }
        if (te.type === gi) {
          var pn = Ku(te.props.children, ee.mode, Fe, te.key);
          return pn.return = ee, pn;
        } else {
          var fr = ME(te, ee.mode, Fe);
          return fr.ref = kp(ee, be, te), fr.return = ee, fr;
        }
      }
      function tn(ee, be, te, Fe) {
        for (var lt = te.key, at = be; at !== null; ) {
          if (at.key === lt)
            if (at.tag === ne && at.stateNode.containerInfo === te.containerInfo && at.stateNode.implementation === te.implementation) {
              a(ee, at.sibling);
              var Dt = l(at, te.children || []);
              return Dt.return = ee, Dt;
            } else {
              a(ee, at);
              break;
            }
          else
            t(ee, at);
          at = at.sibling;
        }
        var Ut = NE(te, ee.mode, Fe);
        return Ut.return = ee, Ut;
      }
      function Xt(ee, be, te, Fe) {
        var lt = typeof te == "object" && te !== null && te.type === gi && te.key === null;
        if (lt && (te = te.props.children), typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case jr:
              return f(mt(ee, be, te, Fe));
            case yr:
              return f(tn(ee, be, te, Fe));
            case Pt:
              var at = te._payload, Dt = te._init;
              return Xt(ee, be, Dt(at), Fe);
          }
          if (It(te))
            return Ee(ee, be, te, Fe);
          if (Ht(te))
            return nt(ee, be, te, Fe);
          cm(ee, te);
        }
        return typeof te == "string" && te !== "" || typeof te == "number" ? f(Rt(ee, be, "" + te, Fe)) : (typeof te == "function" && fm(ee), a(ee, be));
      }
      return Xt;
    }
    var Af = n0(!0), r0 = n0(!1);
    function u_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = pc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = pc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function s_(e, t) {
      for (var a = e.child; a !== null; )
        XO(a, t), a = a.sibling;
    }
    var Hg = Uu(null), Fg;
    Fg = {};
    var dm = null, Uf = null, Bg = null, pm = !1;
    function vm() {
      dm = null, Uf = null, Bg = null, pm = !1;
    }
    function a0() {
      pm = !0;
    }
    function i0() {
      pm = !1;
    }
    function o0(e, t, a) {
      ha(Hg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Fg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Fg;
    }
    function Vg(e, t) {
      var a = Hg.current;
      va(Hg, t), e._currentValue = a;
    }
    function Ig(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Nl(i.childLanes, t) ? l !== null && !Nl(l.childLanes, t) && (l.childLanes = Ft(l.childLanes, t)) : (i.childLanes = Ft(i.childLanes, t), l !== null && (l.childLanes = Ft(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function c_(e, t, a) {
      f_(e, t, a);
    }
    function f_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Y) {
                var p = zs(a), v = ql(On, p);
                v.tag = mm;
                var C = i.updateQueue;
                if (C !== null) {
                  var x = C.shared, q = x.pending;
                  q === null ? v.next = v : (v.next = q.next, q.next = v), x.pending = v;
                }
              }
              i.lanes = Ft(i.lanes, a);
              var $ = i.alternate;
              $ !== null && ($.lanes = Ft($.lanes, a)), Ig(i.return, a, e), s.lanes = Ft(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === g)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === _e) {
          var ie = i.return;
          if (ie === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          ie.lanes = Ft(ie.lanes, a);
          var se = ie.alternate;
          se !== null && (se.lanes = Ft(se.lanes, a)), Ig(ie, a, e), l = i.sibling;
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
    function jf(e, t) {
      dm = e, Uf = null, Bg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ca(a.lanes, t) && Wp(), a.firstContext = null);
      }
    }
    function mr(e) {
      pm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Bg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uf === null) {
          if (dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uf = a, dm.dependencies = {
            lanes: ze,
            firstContext: a
          };
        } else
          Uf = Uf.next = a;
      }
      return t;
    }
    var ic = null;
    function $g(e) {
      ic === null ? ic = [e] : ic.push(e);
    }
    function d_() {
      if (ic !== null) {
        for (var e = 0; e < ic.length; e++) {
          var t = ic[e], a = t.interleaved;
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
        ic = null;
      }
    }
    function l0(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a, hm(e, i);
    }
    function p_(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function v_(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, $g(t)) : (a.next = l.next, l.next = a), t.interleaved = a, hm(e, i);
    }
    function Ya(e, t) {
      return hm(e, t);
    }
    var h_ = hm;
    function hm(e, t) {
      e.lanes = Ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ft(a.lanes, t)), a === null && (e.flags & (Hn | ia)) !== St && rC(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ft(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ft(a.childLanes, t) : (l.flags & (Hn | ia)) !== St && rC(e), i = l, l = l.return;
      if (i.tag === V) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var u0 = 0, s0 = 1, mm = 2, Wg = 3, ym = !1, qg, gm;
    qg = !1, gm = null;
    function Yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ze
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function c0(e, t) {
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
        tag: u0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Bu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (gm === l && !qg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), qg = !0), pO()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, h_(e, a);
      } else
        return v_(e, l, t, a);
    }
    function Sm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Id(a)) {
          var s = l.lanes;
          s = Wd(s, e.pendingLanes);
          var f = Ft(s, a);
          l.lanes = f, cf(e, f);
        }
      }
    }
    function Gg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var C = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), v = v.next;
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
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function m_(e, t, a, i, l, s) {
      switch (a.tag) {
        case s0: {
          var f = a.payload;
          if (typeof f == "function") {
            a0();
            var p = f.call(s, i, l);
            {
              if (e.mode & Rn) {
                Fn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  Fn(!1);
                }
              }
              i0();
            }
            return p;
          }
          return f;
        }
        case Wg:
          e.flags = e.flags & ~dr | yt;
        // Intentional fallthrough
        case u0: {
          var v = a.payload, C;
          if (typeof v == "function") {
            a0(), C = v.call(s, i, l);
            {
              if (e.mode & Rn) {
                Fn(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  Fn(!1);
                }
              }
              i0();
            }
          } else
            C = v;
          return C == null ? i : Vt({}, i, C);
        }
        case mm:
          return ym = !0, i;
      }
      return i;
    }
    function Em(e, t, a, i) {
      var l = e.updateQueue;
      ym = !1, gm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, p = l.shared.pending;
      if (p !== null) {
        l.shared.pending = null;
        var v = p, C = v.next;
        v.next = null, f === null ? s = C : f.next = C, f = v;
        var x = e.alternate;
        if (x !== null) {
          var q = x.updateQueue, $ = q.lastBaseUpdate;
          $ !== f && ($ === null ? q.firstBaseUpdate = C : $.next = C, q.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var ie = l.baseState, se = ze, Ee = null, nt = null, Rt = null, mt = s;
        do {
          var tn = mt.lane, Xt = mt.eventTime;
          if (Nl(i, tn)) {
            if (Rt !== null) {
              var be = {
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
              Rt = Rt.next = be;
            }
            ie = m_(e, l, mt, ie, t, a);
            var te = mt.callback;
            if (te !== null && // If the update was already committed, we should not queue its
            // callback again.
            mt.lane !== on) {
              e.flags |= Mn;
              var Fe = l.effects;
              Fe === null ? l.effects = [mt] : Fe.push(mt);
            }
          } else {
            var ee = {
              eventTime: Xt,
              lane: tn,
              tag: mt.tag,
              payload: mt.payload,
              callback: mt.callback,
              next: null
            };
            Rt === null ? (nt = Rt = ee, Ee = ie) : Rt = Rt.next = ee, se = Ft(se, tn);
          }
          if (mt = mt.next, mt === null) {
            if (p = l.shared.pending, p === null)
              break;
            var lt = p, at = lt.next;
            lt.next = null, mt = at, l.lastBaseUpdate = lt, l.shared.pending = null;
          }
        } while (!0);
        Rt === null && (Ee = ie), l.baseState = Ee, l.firstBaseUpdate = nt, l.lastBaseUpdate = Rt;
        var Dt = l.shared.interleaved;
        if (Dt !== null) {
          var Ut = Dt;
          do
            se = Ft(se, Ut.lane), Ut = Ut.next;
          while (Ut !== Dt);
        } else s === null && (l.shared.lanes = ze);
        rv(se), e.lanes = se, e.memoizedState = ie;
      }
      gm = null;
    }
    function y_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function f0() {
      ym = !1;
    }
    function bm() {
      return ym;
    }
    function d0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, y_(f, a));
        }
    }
    var zp = {}, Vu = Uu(zp), Mp = Uu(zp), Rm = Uu(zp);
    function Cm(e) {
      if (e === zp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function p0() {
      var e = Cm(Rm.current);
      return e;
    }
    function Qg(e, t) {
      ha(Rm, t, e), ha(Mp, e, e), ha(Vu, zp, e);
      var a = NT(t);
      va(Vu, e), ha(Vu, a, e);
    }
    function Hf(e) {
      va(Vu, e), va(Mp, e), va(Rm, e);
    }
    function Xg() {
      var e = Cm(Vu.current);
      return e;
    }
    function v0(e) {
      Cm(Rm.current);
      var t = Cm(Vu.current), a = PT(t, e.type);
      t !== a && (ha(Mp, e, e), ha(Vu, a, e));
    }
    function Kg(e) {
      Mp.current === e && (va(Vu, e), va(Mp, e));
    }
    var g_ = 0, h0 = 1, m0 = 1, Lp = 2, fo = Uu(g_);
    function Zg(e, t) {
      return (e & t) !== 0;
    }
    function Ff(e) {
      return e & h0;
    }
    function Jg(e, t) {
      return e & h0 | t;
    }
    function S_(e, t) {
      return e | t;
    }
    function Iu(e, t) {
      ha(fo, t, e);
    }
    function Bf(e) {
      va(fo, e);
    }
    function E_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function wm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === b) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Lb(i) || yg(i))
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
    var Ga = (
      /*   */
      0
    ), wr = (
      /* */
      1
    ), Jo = (
      /*  */
      2
    ), Tr = (
      /*    */
      4
    ), Gr = (
      /*   */
      8
    ), eS = [];
    function tS() {
      for (var e = 0; e < eS.length; e++) {
        var t = eS[e];
        t._workInProgressVersionPrimary = null;
      }
      eS.length = 0;
    }
    function b_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ot = m.ReactCurrentDispatcher, Np = m.ReactCurrentBatchConfig, nS, Vf;
    nS = /* @__PURE__ */ new Set();
    var oc = ze, Cn = null, xr = null, _r = null, Tm = !1, Pp = !1, Ap = 0, R_ = 0, C_ = 25, Te = null, Bi = null, $u = -1, rS = !1;
    function gn() {
      {
        var e = Te;
        Bi === null ? Bi = [e] : Bi.push(e);
      }
    }
    function Xe() {
      {
        var e = Te;
        Bi !== null && ($u++, Bi[$u] !== e && w_(e));
      }
    }
    function If(e) {
      e != null && !It(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Te, typeof e);
    }
    function w_(e) {
      {
        var t = Nt(Cn);
        if (!nS.has(t) && (nS.add(t), Bi !== null)) {
          for (var a = "", i = 30, l = 0; l <= $u; l++) {
            for (var s = Bi[l], f = l === $u ? e : s, p = l + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ma() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function aS(e, t) {
      if (rS)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Te), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ne(e[a], t[a]))
          return !1;
      return !0;
    }
    function $f(e, t, a, i, l, s) {
      oc = s, Cn = t, Bi = e !== null ? e._debugHookTypes : null, $u = -1, rS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ze, e !== null && e.memoizedState !== null ? ot.current = j0 : Bi !== null ? ot.current = U0 : ot.current = A0;
      var f = a(i, l);
      if (Pp) {
        var p = 0;
        do {
          if (Pp = !1, Ap = 0, p >= C_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, rS = !1, xr = null, _r = null, t.updateQueue = null, $u = -1, ot.current = H0, f = a(i, l);
        } while (Pp);
      }
      ot.current = jm, t._debugHookTypes = Bi;
      var v = xr !== null && xr.next !== null;
      if (oc = ze, Cn = null, xr = null, _r = null, Te = null, Bi = null, $u = -1, e !== null && (e.flags & Jn) !== (t.flags & Jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & qt) !== Et && S("Internal React error: Expected static flag was missing. Please notify the React team."), Tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Wf() {
      var e = Ap !== 0;
      return Ap = 0, e;
    }
    function y0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & fn) !== Et ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ms(e.lanes, a);
    }
    function g0() {
      if (ot.current = jm, Tm) {
        for (var e = Cn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Tm = !1;
      }
      oc = ze, Cn = null, xr = null, _r = null, Bi = null, $u = -1, Te = null, z0 = !1, Pp = !1, Ap = 0;
    }
    function el() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return _r === null ? Cn.memoizedState = _r = e : _r = _r.next = e, _r;
    }
    function Vi() {
      var e;
      if (xr === null) {
        var t = Cn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = xr.next;
      var a;
      if (_r === null ? a = Cn.memoizedState : a = _r.next, a !== null)
        _r = a, a = _r.next, xr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        xr = e;
        var i = {
          memoizedState: xr.memoizedState,
          baseState: xr.baseState,
          baseQueue: xr.baseQueue,
          queue: xr.queue,
          next: null
        };
        _r === null ? Cn.memoizedState = _r = i : _r = _r.next = i;
      }
      return _r;
    }
    function S0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function iS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function oS(e, t, a) {
      var i = el(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ze,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = O_.bind(null, Cn, s);
      return [i.memoizedState, f];
    }
    function lS(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = xr, f = s.baseQueue, p = l.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, C = p.next;
          f.next = C, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, l.pending = null;
      }
      if (f !== null) {
        var x = f.next, q = s.baseState, $ = null, ie = null, se = null, Ee = x;
        do {
          var nt = Ee.lane;
          if (Nl(oc, nt)) {
            if (se !== null) {
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
              se = se.next = mt;
            }
            if (Ee.hasEagerState)
              q = Ee.eagerState;
            else {
              var tn = Ee.action;
              q = e(q, tn);
            }
          } else {
            var Rt = {
              lane: nt,
              action: Ee.action,
              hasEagerState: Ee.hasEagerState,
              eagerState: Ee.eagerState,
              next: null
            };
            se === null ? (ie = se = Rt, $ = q) : se = se.next = Rt, Cn.lanes = Ft(Cn.lanes, nt), rv(nt);
          }
          Ee = Ee.next;
        } while (Ee !== null && Ee !== x);
        se === null ? $ = q : se.next = ie, Ne(q, i.memoizedState) || Wp(), i.memoizedState = q, i.baseState = $, i.baseQueue = se, l.lastRenderedState = q;
      }
      var Xt = l.interleaved;
      if (Xt !== null) {
        var ee = Xt;
        do {
          var be = ee.lane;
          Cn.lanes = Ft(Cn.lanes, be), rv(be), ee = ee.next;
        } while (ee !== Xt);
      } else f === null && (l.lanes = ze);
      var te = l.dispatch;
      return [i.memoizedState, te];
    }
    function uS(e, t, a) {
      var i = Vi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, p = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var v = f.next, C = v;
        do {
          var x = C.action;
          p = e(p, x), C = C.next;
        } while (C !== v);
        Ne(p, i.memoizedState) || Wp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), l.lastRenderedState = p;
      }
      return [p, s];
    }
    function Fk(e, t, a) {
    }
    function Bk(e, t, a) {
    }
    function sS(e, t, a) {
      var i = Cn, l = el(), s, f = Yr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Vf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Vf = !0);
      } else {
        if (s = t(), !Vf) {
          var p = t();
          Ne(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Vf = !0);
        }
        var v = ry();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uf(v, oc) || E0(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, km(R0.bind(null, i, C, e), [e]), i.flags |= aa, Up(wr | Gr, b0.bind(null, i, C, s, t), void 0, null), s;
    }
    function xm(e, t, a) {
      var i = Cn, l = Vi(), s = t();
      if (!Vf) {
        var f = t();
        Ne(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Vf = !0);
      }
      var p = l.memoizedState, v = !Ne(p, s);
      v && (l.memoizedState = s, Wp());
      var C = l.queue;
      if (Hp(R0.bind(null, i, C, e), [e]), C.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      _r !== null && _r.memoizedState.tag & wr) {
        i.flags |= aa, Up(wr | Gr, b0.bind(null, i, C, s, t), void 0, null);
        var x = ry();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uf(x, oc) || E0(i, t, s);
      }
      return s;
    }
    function E0(e, t, a) {
      e.flags |= bu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = Cn.updateQueue;
      if (l === null)
        l = S0(), Cn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function b0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, C0(t) && w0(e);
    }
    function R0(e, t, a) {
      var i = function() {
        C0(t) && w0(e);
      };
      return a(i);
    }
    function C0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ne(a, i);
      } catch {
        return !0;
      }
    }
    function w0(e) {
      var t = Ya(e, Ot);
      t !== null && zr(t, e, Ot, On);
    }
    function _m(e) {
      var t = el();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ze,
        dispatch: null,
        lastRenderedReducer: iS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = D_.bind(null, Cn, a);
      return [t.memoizedState, i];
    }
    function cS(e) {
      return lS(iS);
    }
    function fS(e) {
      return uS(iS);
    }
    function Up(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Cn.updateQueue;
      if (s === null)
        s = S0(), Cn.updateQueue = s, s.lastEffect = l.next = l;
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
    function dS(e) {
      var t = el();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Om(e) {
      var t = Vi();
      return t.memoizedState;
    }
    function jp(e, t, a, i) {
      var l = el(), s = i === void 0 ? null : i;
      Cn.flags |= e, l.memoizedState = Up(wr | t, a, void 0, s);
    }
    function Dm(e, t, a, i) {
      var l = Vi(), s = i === void 0 ? null : i, f = void 0;
      if (xr !== null) {
        var p = xr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (aS(s, v)) {
            l.memoizedState = Up(t, a, f, s);
            return;
          }
        }
      }
      Cn.flags |= e, l.memoizedState = Up(wr | t, a, f, s);
    }
    function km(e, t) {
      return (Cn.mode & fn) !== Et ? jp(Di | aa | Nc, Gr, e, t) : jp(aa | Nc, Gr, e, t);
    }
    function Hp(e, t) {
      return Dm(aa, Gr, e, t);
    }
    function pS(e, t) {
      return jp(Zt, Jo, e, t);
    }
    function zm(e, t) {
      return Dm(Zt, Jo, e, t);
    }
    function vS(e, t) {
      var a = Zt;
      return a |= Ji, (Cn.mode & fn) !== Et && (a |= Po), jp(a, Tr, e, t);
    }
    function Mm(e, t) {
      return Dm(Zt, Tr, e, t);
    }
    function T0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function hS(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Zt;
      return l |= Ji, (Cn.mode & fn) !== Et && (l |= Po), jp(l, Tr, T0.bind(null, t, e), i);
    }
    function Lm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Dm(Zt, Tr, T0.bind(null, t, e), i);
    }
    function T_(e, t) {
    }
    var Nm = T_;
    function mS(e, t) {
      var a = el(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Pm(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (aS(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function yS(e, t) {
      var a = el(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Am(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (aS(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function gS(e) {
      var t = el();
      return t.memoizedState = e, e;
    }
    function x0(e) {
      var t = Vi(), a = xr, i = a.memoizedState;
      return O0(t, i, e);
    }
    function _0(e) {
      var t = Vi();
      if (xr === null)
        return t.memoizedState = e, e;
      var a = xr.memoizedState;
      return O0(t, a, e);
    }
    function O0(e, t, a) {
      var i = !Bd(oc);
      if (i) {
        if (!Ne(a, t)) {
          var l = $d();
          Cn.lanes = Ft(Cn.lanes, l), rv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Wp()), e.memoizedState = a, a;
    }
    function x_(e, t, a) {
      var i = $a();
      nr(ph(i, Li)), e(!0);
      var l = Np.transition;
      Np.transition = {};
      var s = Np.transition;
      Np.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (nr(i), Np.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && H("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function SS() {
      var e = _m(!1), t = e[0], a = e[1], i = x_.bind(null, a), l = el();
      return l.memoizedState = i, [t, i];
    }
    function D0() {
      var e = cS(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    function k0() {
      var e = fS(), t = e[0], a = Vi(), i = a.memoizedState;
      return [t, i];
    }
    var z0 = !1;
    function __() {
      return z0;
    }
    function ES() {
      var e = el(), t = ry(), a = t.identifierPrefix, i;
      if (Yr()) {
        var l = $x();
        i = ":" + a + "R" + l;
        var s = Ap++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = R_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Um() {
      var e = Vi(), t = e.memoizedState;
      return t;
    }
    function O_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (M0(e))
        L0(t, l);
      else {
        var s = l0(e, t, l, i);
        if (s !== null) {
          var f = Da();
          zr(s, e, i, f), N0(s, t, i);
        }
      }
      P0(e, i);
    }
    function D_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (M0(e))
        L0(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === ze && (s === null || s.lanes === ze)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ot.current, ot.current = po;
            try {
              var v = t.lastRenderedState, C = f(v, a);
              if (l.hasEagerState = !0, l.eagerState = C, Ne(C, v)) {
                p_(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              ot.current = p;
            }
          }
        }
        var x = l0(e, t, l, i);
        if (x !== null) {
          var q = Da();
          zr(x, e, i, q), N0(x, t, i);
        }
      }
      P0(e, i);
    }
    function M0(e) {
      var t = e.alternate;
      return e === Cn || t !== null && t === Cn;
    }
    function L0(e, t) {
      Pp = Tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function N0(e, t, a) {
      if (Id(a)) {
        var i = t.lanes;
        i = Wd(i, e.pendingLanes);
        var l = Ft(i, a);
        t.lanes = l, cf(e, l);
      }
    }
    function P0(e, t, a) {
      Rs(e, t);
    }
    var jm = {
      readContext: mr,
      useCallback: ma,
      useContext: ma,
      useEffect: ma,
      useImperativeHandle: ma,
      useInsertionEffect: ma,
      useLayoutEffect: ma,
      useMemo: ma,
      useReducer: ma,
      useRef: ma,
      useState: ma,
      useDebugValue: ma,
      useDeferredValue: ma,
      useTransition: ma,
      useMutableSource: ma,
      useSyncExternalStore: ma,
      useId: ma,
      unstable_isNewReconciler: ge
    }, A0 = null, U0 = null, j0 = null, H0 = null, tl = null, po = null, Hm = null;
    {
      var bS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, At = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      A0 = {
        readContext: function(e) {
          return mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", gn(), If(t), mS(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", gn(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", gn(), If(t), km(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", gn(), If(a), hS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", gn(), If(t), pS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", gn(), If(t), vS(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", gn(), If(t);
          var a = ot.current;
          ot.current = tl;
          try {
            return yS(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", gn();
          var i = ot.current;
          ot.current = tl;
          try {
            return oS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", gn(), dS(e);
        },
        useState: function(e) {
          Te = "useState", gn();
          var t = ot.current;
          ot.current = tl;
          try {
            return _m(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", gn(), void 0;
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", gn(), gS(e);
        },
        useTransition: function() {
          return Te = "useTransition", gn(), SS();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", gn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", gn(), sS(e, t, a);
        },
        useId: function() {
          return Te = "useId", gn(), ES();
        },
        unstable_isNewReconciler: ge
      }, U0 = {
        readContext: function(e) {
          return mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", Xe(), mS(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", Xe(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", Xe(), km(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", Xe(), hS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", Xe(), pS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", Xe(), vS(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", Xe();
          var a = ot.current;
          ot.current = tl;
          try {
            return yS(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", Xe();
          var i = ot.current;
          ot.current = tl;
          try {
            return oS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", Xe(), dS(e);
        },
        useState: function(e) {
          Te = "useState", Xe();
          var t = ot.current;
          ot.current = tl;
          try {
            return _m(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", Xe(), void 0;
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", Xe(), gS(e);
        },
        useTransition: function() {
          return Te = "useTransition", Xe(), SS();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", Xe(), sS(e, t, a);
        },
        useId: function() {
          return Te = "useId", Xe(), ES();
        },
        unstable_isNewReconciler: ge
      }, j0 = {
        readContext: function(e) {
          return mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", Xe(), Pm(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", Xe(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", Xe(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", Xe(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", Xe(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", Xe(), Mm(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", Xe();
          var a = ot.current;
          ot.current = po;
          try {
            return Am(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", Xe();
          var i = ot.current;
          ot.current = po;
          try {
            return lS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", Xe(), Om();
        },
        useState: function(e) {
          Te = "useState", Xe();
          var t = ot.current;
          ot.current = po;
          try {
            return cS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", Xe(), Nm();
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", Xe(), x0(e);
        },
        useTransition: function() {
          return Te = "useTransition", Xe(), D0();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", Xe(), xm(e, t);
        },
        useId: function() {
          return Te = "useId", Xe(), Um();
        },
        unstable_isNewReconciler: ge
      }, H0 = {
        readContext: function(e) {
          return mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", Xe(), Pm(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", Xe(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", Xe(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", Xe(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", Xe(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", Xe(), Mm(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", Xe();
          var a = ot.current;
          ot.current = Hm;
          try {
            return Am(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", Xe();
          var i = ot.current;
          ot.current = Hm;
          try {
            return uS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", Xe(), Om();
        },
        useState: function(e) {
          Te = "useState", Xe();
          var t = ot.current;
          ot.current = Hm;
          try {
            return fS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", Xe(), Nm();
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", Xe(), _0(e);
        },
        useTransition: function() {
          return Te = "useTransition", Xe(), k0();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", Xe(), xm(e, t);
        },
        useId: function() {
          return Te = "useId", Xe(), Um();
        },
        unstable_isNewReconciler: ge
      }, tl = {
        readContext: function(e) {
          return bS(), mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", At(), gn(), mS(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", At(), gn(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", At(), gn(), km(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", At(), gn(), hS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", At(), gn(), pS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", At(), gn(), vS(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", At(), gn();
          var a = ot.current;
          ot.current = tl;
          try {
            return yS(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", At(), gn();
          var i = ot.current;
          ot.current = tl;
          try {
            return oS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", At(), gn(), dS(e);
        },
        useState: function(e) {
          Te = "useState", At(), gn();
          var t = ot.current;
          ot.current = tl;
          try {
            return _m(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", At(), gn(), void 0;
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", At(), gn(), gS(e);
        },
        useTransition: function() {
          return Te = "useTransition", At(), gn(), SS();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", At(), gn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", At(), gn(), sS(e, t, a);
        },
        useId: function() {
          return Te = "useId", At(), gn(), ES();
        },
        unstable_isNewReconciler: ge
      }, po = {
        readContext: function(e) {
          return bS(), mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", At(), Xe(), Pm(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", At(), Xe(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", At(), Xe(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", At(), Xe(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", At(), Xe(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", At(), Xe(), Mm(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", At(), Xe();
          var a = ot.current;
          ot.current = po;
          try {
            return Am(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", At(), Xe();
          var i = ot.current;
          ot.current = po;
          try {
            return lS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", At(), Xe(), Om();
        },
        useState: function(e) {
          Te = "useState", At(), Xe();
          var t = ot.current;
          ot.current = po;
          try {
            return cS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", At(), Xe(), Nm();
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", At(), Xe(), x0(e);
        },
        useTransition: function() {
          return Te = "useTransition", At(), Xe(), D0();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", At(), Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", At(), Xe(), xm(e, t);
        },
        useId: function() {
          return Te = "useId", At(), Xe(), Um();
        },
        unstable_isNewReconciler: ge
      }, Hm = {
        readContext: function(e) {
          return bS(), mr(e);
        },
        useCallback: function(e, t) {
          return Te = "useCallback", At(), Xe(), Pm(e, t);
        },
        useContext: function(e) {
          return Te = "useContext", At(), Xe(), mr(e);
        },
        useEffect: function(e, t) {
          return Te = "useEffect", At(), Xe(), Hp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Te = "useImperativeHandle", At(), Xe(), Lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Te = "useInsertionEffect", At(), Xe(), zm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Te = "useLayoutEffect", At(), Xe(), Mm(e, t);
        },
        useMemo: function(e, t) {
          Te = "useMemo", At(), Xe();
          var a = ot.current;
          ot.current = po;
          try {
            return Am(e, t);
          } finally {
            ot.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Te = "useReducer", At(), Xe();
          var i = ot.current;
          ot.current = po;
          try {
            return uS(e, t, a);
          } finally {
            ot.current = i;
          }
        },
        useRef: function(e) {
          return Te = "useRef", At(), Xe(), Om();
        },
        useState: function(e) {
          Te = "useState", At(), Xe();
          var t = ot.current;
          ot.current = po;
          try {
            return fS(e);
          } finally {
            ot.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Te = "useDebugValue", At(), Xe(), Nm();
        },
        useDeferredValue: function(e) {
          return Te = "useDeferredValue", At(), Xe(), _0(e);
        },
        useTransition: function() {
          return Te = "useTransition", At(), Xe(), k0();
        },
        useMutableSource: function(e, t, a) {
          return Te = "useMutableSource", At(), Xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Te = "useSyncExternalStore", At(), Xe(), xm(e, t);
        },
        useId: function() {
          return Te = "useId", At(), Xe(), Um();
        },
        unstable_isNewReconciler: ge
      };
    }
    var Wu = R.unstable_now, F0 = 0, Fm = -1, Fp = -1, Bm = -1, RS = !1, Vm = !1;
    function B0() {
      return RS;
    }
    function k_() {
      Vm = !0;
    }
    function z_() {
      RS = !1, Vm = !1;
    }
    function M_() {
      RS = Vm, Vm = !1;
    }
    function V0() {
      return F0;
    }
    function I0() {
      F0 = Wu();
    }
    function CS(e) {
      Fp = Wu(), e.actualStartTime < 0 && (e.actualStartTime = Wu());
    }
    function $0(e) {
      Fp = -1;
    }
    function Im(e, t) {
      if (Fp >= 0) {
        var a = Wu() - Fp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Fp = -1;
      }
    }
    function nl(e) {
      if (Fm >= 0) {
        var t = Wu() - Fm;
        Fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case V:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case w:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function wS(e) {
      if (Bm >= 0) {
        var t = Wu() - Bm;
        Bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case V:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case w:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function rl() {
      Fm = Wu();
    }
    function TS() {
      Bm = Wu();
    }
    function xS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vo(e, t) {
      if (e && e.defaultProps) {
        var a = Vt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var _S = {}, OS, DS, kS, zS, MS, W0, $m, LS, NS, PS, Bp;
    {
      OS = /* @__PURE__ */ new Set(), DS = /* @__PURE__ */ new Set(), kS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set(), LS = /* @__PURE__ */ new Set(), MS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), PS = /* @__PURE__ */ new Set(), Bp = /* @__PURE__ */ new Set();
      var q0 = /* @__PURE__ */ new Set();
      $m = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          q0.has(a) || (q0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, W0 = function(e, t) {
        if (t === void 0) {
          var a = nn(e) || "Component";
          MS.has(a) || (MS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(_S, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(_S);
    }
    function AS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & Rn) {
          Fn(!0);
          try {
            s = a(i, l);
          } finally {
            Fn(!1);
          }
        }
        W0(t, s);
      }
      var f = s == null ? l : Vt({}, l, s);
      if (e.memoizedState = f, e.lanes === ze) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var US = {
      isMounted: Kv,
      enqueueSetState: function(e, t, a) {
        var i = Eu(e), l = Da(), s = Qu(i), f = ql(l, s);
        f.payload = t, a != null && ($m(a, "setState"), f.callback = a);
        var p = Bu(i, f, s);
        p !== null && (zr(p, i, s, l), Sm(p, i, s)), Rs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Eu(e), l = Da(), s = Qu(i), f = ql(l, s);
        f.tag = s0, f.payload = t, a != null && ($m(a, "replaceState"), f.callback = a);
        var p = Bu(i, f, s);
        p !== null && (zr(p, i, s, l), Sm(p, i, s)), Rs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Eu(e), i = Da(), l = Qu(a), s = ql(i, l);
        s.tag = mm, t != null && ($m(t, "forceUpdate"), s.callback = t);
        var f = Bu(a, s, l);
        f !== null && (zr(f, a, l, i), Sm(f, a, l)), Bc(a, l);
      }
    };
    function Y0(e, t, a, i, l, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Rn) {
            Fn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Fn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", nn(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !dt(a, i) || !dt(l, s) : !0;
    }
    function L_(e, t, a) {
      var i = e.stateNode;
      {
        var l = nn(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !Bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Rn) === Et && (Bp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !Bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Rn) === Et && (Bp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !NS.has(t) && (NS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nn(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !kS.has(t) && (kS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nn(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var p = i.state;
        p && (typeof p != "object" || It(p)) && S("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function G0(e, t) {
      t.updater = US, e.stateNode = t, El(t, e), t._reactInternalInstance = _S;
    }
    function Q0(e, t, a) {
      var i = !1, l = vi, s = vi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === N && f._context === void 0
        );
        if (!p && !PS.has(t)) {
          PS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ei ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nn(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = mr(f);
      else {
        l = zf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Mf(e, l) : vi;
      }
      var x = new t(a, s);
      if (e.mode & Rn) {
        Fn(!0);
        try {
          x = new t(a, s);
        } finally {
          Fn(!1);
        }
      }
      var q = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      G0(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && q === null) {
          var $ = nn(t) || "Component";
          DS.has($) || (DS.add($), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, x.state === null ? "null" : "undefined", $));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var ie = null, se = null, Ee = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? ie = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (ie = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? se = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (se = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ee = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (Ee = "UNSAFE_componentWillUpdate"), ie !== null || se !== null || Ee !== null) {
            var nt = nn(t) || "Component", Rt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            zS.has(nt) || (zS.add(nt), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, nt, Rt, ie !== null ? `
  ` + ie : "", se !== null ? `
  ` + se : "", Ee !== null ? `
  ` + Ee : ""));
          }
        }
      }
      return i && jb(e, l, s), x;
    }
    function N_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Nt(e) || "Component"), US.enqueueReplaceState(t, t.state, null));
    }
    function X0(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = Nt(e) || "Component";
          OS.has(s) || (OS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        US.enqueueReplaceState(t, t.state, null);
      }
    }
    function jS(e, t, a, i) {
      L_(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, Yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = mr(s);
      else {
        var f = zf(e, t, !0);
        l.context = Mf(e, f);
      }
      {
        if (l.state === a) {
          var p = nn(t) || "Component";
          LS.has(p) || (LS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Rn && co.recordLegacyContextWarning(e, l), co.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (AS(e, t, v, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (N_(e, l), Em(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Zt;
        C |= Ji, (e.mode & fn) !== Et && (C |= Po), e.flags |= C;
      }
    }
    function P_(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, p = t.contextType, v = vi;
      if (typeof p == "object" && p !== null)
        v = mr(p);
      else {
        var C = zf(e, t, !0);
        v = Mf(e, C);
      }
      var x = t.getDerivedStateFromProps, q = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !q && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== v) && X0(e, l, a, v), f0();
      var $ = e.memoizedState, ie = l.state = $;
      if (Em(e, a, l, i), ie = e.memoizedState, s === a && $ === ie && !tm() && !bm()) {
        if (typeof l.componentDidMount == "function") {
          var se = Zt;
          se |= Ji, (e.mode & fn) !== Et && (se |= Po), e.flags |= se;
        }
        return !1;
      }
      typeof x == "function" && (AS(e, t, x, a), ie = e.memoizedState);
      var Ee = bm() || Y0(e, t, s, a, $, ie, v);
      if (Ee) {
        if (!q && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var nt = Zt;
          nt |= Ji, (e.mode & fn) !== Et && (nt |= Po), e.flags |= nt;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var Rt = Zt;
          Rt |= Ji, (e.mode & fn) !== Et && (Rt |= Po), e.flags |= Rt;
        }
        e.memoizedProps = a, e.memoizedState = ie;
      }
      return l.props = a, l.state = ie, l.context = v, Ee;
    }
    function A_(e, t, a, i, l) {
      var s = t.stateNode;
      c0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : vo(t.type, f);
      s.props = p;
      var v = t.pendingProps, C = s.context, x = a.contextType, q = vi;
      if (typeof x == "object" && x !== null)
        q = mr(x);
      else {
        var $ = zf(t, a, !0);
        q = Mf(t, $);
      }
      var ie = a.getDerivedStateFromProps, se = typeof ie == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !se && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || C !== q) && X0(t, s, i, q), f0();
      var Ee = t.memoizedState, nt = s.state = Ee;
      if (Em(t, i, s, l), nt = t.memoizedState, f === v && Ee === nt && !tm() && !bm() && !Be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= Zt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= ur), !1;
      typeof ie == "function" && (AS(t, a, ie, i), nt = t.memoizedState);
      var Rt = bm() || Y0(t, a, p, i, Ee, nt, q) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Be;
      return Rt ? (!se && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, nt, q), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, nt, q)), typeof s.componentDidUpdate == "function" && (t.flags |= Zt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ur)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= Zt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Ee !== e.memoizedState) && (t.flags |= ur), t.memoizedProps = i, t.memoizedState = nt), s.props = i, s.state = nt, s.context = q, Rt;
    }
    function lc(e, t) {
      return {
        value: e,
        source: t,
        stack: Yi(t),
        digest: null
      };
    }
    function HS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function U_(e, t) {
      return !0;
    }
    function FS(e, t) {
      try {
        var a = U_(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Y)
            return;
          console.error(i);
        }
        var p = l ? Nt(l) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === V)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = Nt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var q = v + `
` + f + `

` + ("" + C);
        console.error(q);
      } catch ($) {
        setTimeout(function() {
          throw $;
        });
      }
    }
    var j_ = typeof WeakMap == "function" ? WeakMap : Map;
    function K0(e, t, a) {
      var i = ql(On, a);
      i.tag = Wg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        kO(l), FS(e, t);
      }, i;
    }
    function BS(e, t, a) {
      var i = ql(On, a);
      i.tag = Wg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          uC(e), FS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        uC(e), FS(e, t), typeof l != "function" && OO(this);
        var v = t.value, C = t.stack;
        this.componentDidCatch(v, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (ca(e.lanes, Ot) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Nt(e) || "Unknown"));
      }), i;
    }
    function Z0(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new j_(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = zO.bind(null, e, t, a);
        ua && av(e, a), t.then(s, s);
      }
    }
    function H_(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function F_(e, t) {
      var a = e.tag;
      if ((e.mode & qt) === Et && (a === B || a === T || a === P)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function J0(e) {
      var t = e;
      do {
        if (t.tag === b && E_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function eR(e, t, a, i, l) {
      if ((e.mode & qt) === Et) {
        if (e === t)
          e.flags |= dr;
        else {
          if (e.flags |= yt, a.flags |= Lc, a.flags &= -52805, a.tag === Y) {
            var s = a.alternate;
            if (s === null)
              a.tag = de;
            else {
              var f = ql(On, Ot);
              f.tag = mm, Bu(a, f, Ot);
            }
          }
          a.lanes = Ft(a.lanes, Ot);
        }
        return e;
      }
      return e.flags |= dr, e.lanes = l, e;
    }
    function B_(e, t, a, i, l) {
      if (a.flags |= ms, ua && av(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        F_(a), Yr() && a.mode & qt && Wb();
        var f = J0(t);
        if (f !== null) {
          f.flags &= ~Mr, eR(f, t, a, e, l), f.mode & qt && Z0(e, s, l), H_(f, e, s);
          return;
        } else {
          if (!ih(l)) {
            Z0(e, s, l), EE();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Yr() && a.mode & qt) {
        Wb();
        var v = J0(t);
        if (v !== null) {
          (v.flags & dr) === St && (v.flags |= Mr), eR(v, t, a, e, l), Lg(lc(i, a));
          return;
        }
      }
      i = lc(i, a), EO(i);
      var C = t;
      do {
        switch (C.tag) {
          case V: {
            var x = i;
            C.flags |= dr;
            var q = zs(l);
            C.lanes = Ft(C.lanes, q);
            var $ = K0(C, x, q);
            Gg(C, $);
            return;
          }
          case Y:
            var ie = i, se = C.type, Ee = C.stateNode;
            if ((C.flags & yt) === St && (typeof se.getDerivedStateFromError == "function" || Ee !== null && typeof Ee.componentDidCatch == "function" && !JR(Ee))) {
              C.flags |= dr;
              var nt = zs(l);
              C.lanes = Ft(C.lanes, nt);
              var Rt = BS(C, ie, nt);
              Gg(C, Rt);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function V_() {
      return null;
    }
    var Vp = m.ReactCurrentOwner, ho = !1, VS, Ip, IS, $S, WS, uc, qS, Wm, $p;
    VS = {}, Ip = {}, IS = {}, $S = {}, WS = {}, uc = !1, qS = {}, Wm = {}, $p = {};
    function _a(e, t, a, i) {
      e === null ? t.child = r0(t, null, a, i) : t.child = Af(t, e.child, a, i);
    }
    function I_(e, t, a, i) {
      t.child = Af(t, e.child, null, i), t.child = Af(t, null, a, i);
    }
    function tR(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && uo(
          s,
          i,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var f = a.render, p = t.ref, v, C;
      jf(t, l), Ca(t);
      {
        if (Vp.current = t, lr(!0), v = $f(e, t, f, i, p, l), C = Wf(), t.mode & Rn) {
          Fn(!0);
          try {
            v = $f(e, t, f, i, p, l), C = Wf();
          } finally {
            Fn(!1);
          }
        }
        lr(!1);
      }
      return wa(), e !== null && !ho ? (y0(e, t, l), Yl(e, t, l)) : (Yr() && C && _g(t), t.flags |= si, _a(e, t, v, l), t.child);
    }
    function nR(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (GO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Jf(s), t.tag = P, t.type = f, QS(t, s), rR(e, t, f, i, l);
        }
        {
          var p = s.propTypes;
          if (p && uo(
            p,
            i,
            // Resolved props
            "prop",
            nn(s)
          ), a.defaultProps !== void 0) {
            var v = nn(s) || "Unknown";
            $p[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), $p[v] = !0);
          }
        }
        var C = zE(a.type, null, i, t, t.mode, l);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var x = a.type, q = x.propTypes;
        q && uo(
          q,
          i,
          // Resolved props
          "prop",
          nn(x)
        );
      }
      var $ = e.child, ie = tE(e, l);
      if (!ie) {
        var se = $.memoizedProps, Ee = a.compare;
        if (Ee = Ee !== null ? Ee : dt, Ee(se, i) && e.ref === t.ref)
          return Yl(e, t, l);
      }
      t.flags |= si;
      var nt = pc($, i);
      return nt.ref = t.ref, nt.return = t, t.child = nt, nt;
    }
    function rR(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Pt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && uo(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            nn(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (dt(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ho = !1, t.pendingProps = i = x, tE(e, l))
            (e.flags & Lc) !== St && (ho = !0);
          else return t.lanes = e.lanes, Yl(e, t, l);
      }
      return YS(e, t, a, i, l);
    }
    function aR(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || I)
        if ((t.mode & qt) === Et) {
          var f = {
            baseLanes: ze,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ay(t, a);
        } else if (ca(a, sa)) {
          var q = {
            baseLanes: ze,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = q;
          var $ = s !== null ? s.baseLanes : a;
          ay(t, $);
        } else {
          var p = null, v;
          if (s !== null) {
            var C = s.baseLanes;
            v = Ft(C, a);
          } else
            v = a;
          t.lanes = t.childLanes = sa;
          var x = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, ay(t, v), null;
        }
      else {
        var ie;
        s !== null ? (ie = Ft(s.baseLanes, a), t.memoizedState = null) : ie = a, ay(t, ie);
      }
      return _a(e, t, l, a), t.child;
    }
    function $_(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function W_(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function q_(e, t, a) {
      {
        t.flags |= Zt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return _a(e, t, s, a), t.child;
    }
    function iR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= In, t.flags |= Ru);
    }
    function YS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && uo(
          s,
          i,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var f;
      {
        var p = zf(t, a, !0);
        f = Mf(t, p);
      }
      var v, C;
      jf(t, l), Ca(t);
      {
        if (Vp.current = t, lr(!0), v = $f(e, t, a, i, f, l), C = Wf(), t.mode & Rn) {
          Fn(!0);
          try {
            v = $f(e, t, a, i, f, l), C = Wf();
          } finally {
            Fn(!1);
          }
        }
        lr(!1);
      }
      return wa(), e !== null && !ho ? (y0(e, t, l), Yl(e, t, l)) : (Yr() && C && _g(t), t.flags |= si, _a(e, t, v, l), t.child);
    }
    function oR(e, t, a, i, l) {
      {
        switch (sD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= yt, t.flags |= dr;
            var C = new Error("Simulated error coming from DevTools"), x = zs(l);
            t.lanes = Ft(t.lanes, x);
            var q = BS(t, lc(C, t), x);
            Gg(t, q);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var $ = a.propTypes;
          $ && uo(
            $,
            i,
            // Resolved props
            "prop",
            nn(a)
          );
        }
      }
      var ie;
      Zo(a) ? (ie = !0, rm(t)) : ie = !1, jf(t, l);
      var se = t.stateNode, Ee;
      se === null ? (Ym(e, t), Q0(t, a, i), jS(t, a, i, l), Ee = !0) : e === null ? Ee = P_(t, a, i, l) : Ee = A_(e, t, a, i, l);
      var nt = GS(e, t, a, Ee, ie, l);
      {
        var Rt = t.stateNode;
        Ee && Rt.props !== i && (uc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Nt(t) || "a component"), uc = !0);
      }
      return nt;
    }
    function GS(e, t, a, i, l, s) {
      iR(e, t);
      var f = (t.flags & yt) !== St;
      if (!i && !f)
        return l && Bb(t, a, !1), Yl(e, t, s);
      var p = t.stateNode;
      Vp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, $0();
      else {
        Ca(t);
        {
          if (lr(!0), v = p.render(), t.mode & Rn) {
            Fn(!0);
            try {
              p.render();
            } finally {
              Fn(!1);
            }
          }
          lr(!1);
        }
        wa();
      }
      return t.flags |= si, e !== null && f ? I_(e, t, v, s) : _a(e, t, v, s), t.memoizedState = p.state, l && Bb(t, a, !0), t.child;
    }
    function lR(e) {
      var t = e.stateNode;
      t.pendingContext ? Hb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hb(e, t.context, !1), Qg(e, t.containerInfo);
    }
    function Y_(e, t, a) {
      if (lR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      c0(e, t), Em(t, i, null, a);
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
        }, C = t.updateQueue;
        if (C.baseState = v, t.memoizedState = v, t.flags & Mr) {
          var x = lc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return uR(e, t, p, a, x);
        } else if (p !== s) {
          var q = lc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return uR(e, t, p, a, q);
        } else {
          Xx(t);
          var $ = r0(t, null, p, a);
          t.child = $;
          for (var ie = $; ie; )
            ie.flags = ie.flags & ~Hn | ia, ie = ie.sibling;
        }
      } else {
        if (Pf(), p === s)
          return Yl(e, t, a);
        _a(e, t, p, a);
      }
      return t.child;
    }
    function uR(e, t, a, i, l) {
      return Pf(), Lg(l), t.flags |= Mr, _a(e, t, a, i), t.child;
    }
    function G_(e, t, a) {
      v0(t), e === null && Mg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, p = pg(i, l);
      return p ? f = null : s !== null && pg(i, s) && (t.flags |= ja), iR(e, t), _a(e, t, f, a), t.child;
    }
    function Q_(e, t) {
      return e === null && Mg(t), null;
    }
    function X_(e, t, a, i) {
      Ym(e, t);
      var l = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var C = t.tag = QO(v), x = vo(v, l), q;
      switch (C) {
        case B:
          return QS(t, v), t.type = v = Jf(v), q = YS(null, t, v, x, i), q;
        case Y:
          return t.type = v = TE(v), q = oR(null, t, v, x, i), q;
        case T:
          return t.type = v = xE(v), q = tR(null, t, v, x, i), q;
        case D: {
          if (t.type !== t.elementType) {
            var $ = v.propTypes;
            $ && uo(
              $,
              x,
              // Resolved for outer only
              "prop",
              nn(v)
            );
          }
          return q = nR(
            null,
            t,
            v,
            vo(v.type, x),
            // The inner type can have defaults too
            i
          ), q;
        }
      }
      var ie = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Pt && (ie = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + ie));
    }
    function K_(e, t, a, i, l) {
      Ym(e, t), t.tag = Y;
      var s;
      return Zo(a) ? (s = !0, rm(t)) : s = !1, jf(t, l), Q0(t, a, i), jS(t, a, i, l), GS(null, t, a, !0, s, l);
    }
    function Z_(e, t, a, i) {
      Ym(e, t);
      var l = t.pendingProps, s;
      {
        var f = zf(t, a, !1);
        s = Mf(t, f);
      }
      jf(t, i);
      var p, v;
      Ca(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = nn(a) || "Unknown";
          VS[C] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), VS[C] = !0);
        }
        t.mode & Rn && co.recordLegacyContextWarning(t, null), lr(!0), Vp.current = t, p = $f(null, t, a, l, s, i), v = Wf(), lr(!1);
      }
      if (wa(), t.flags |= si, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var x = nn(a) || "Unknown";
        Ip[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Ip[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var q = nn(a) || "Unknown";
          Ip[q] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", q, q, q), Ip[q] = !0);
        }
        t.tag = Y, t.memoizedState = null, t.updateQueue = null;
        var $ = !1;
        return Zo(a) ? ($ = !0, rm(t)) : $ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Yg(t), G0(t, p), jS(t, a, l, i), GS(null, t, a, !0, $, i);
      } else {
        if (t.tag = B, t.mode & Rn) {
          Fn(!0);
          try {
            p = $f(null, t, a, l, s, i), v = Wf();
          } finally {
            Fn(!1);
          }
        }
        return Yr() && v && _g(t), _a(null, t, p, i), QS(t, a), t.child;
      }
    }
    function QS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Fr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), WS[l] || (WS[l] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = nn(t) || "Unknown";
          $p[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), $p[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = nn(t) || "Unknown";
          $S[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), $S[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = nn(t) || "Unknown";
          IS[v] || (S("%s: Function components do not support contextType.", v), IS[v] = !0);
        }
      }
    }
    var XS = {
      dehydrated: null,
      treeContext: null,
      retryLane: on
    };
    function KS(e) {
      return {
        baseLanes: e,
        cachePool: V_(),
        transitions: null
      };
    }
    function J_(e, t) {
      var a = null;
      return {
        baseLanes: Ft(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function e1(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return Zg(e, Lp);
    }
    function t1(e, t) {
      return Ms(e.childLanes, t);
    }
    function sR(e, t, a) {
      var i = t.pendingProps;
      cD(t) && (t.flags |= yt);
      var l = fo.current, s = !1, f = (t.flags & yt) !== St;
      if (f || e1(l, e) ? (s = !0, t.flags &= ~yt) : (e === null || e.memoizedState !== null) && (l = S_(l, m0)), l = Ff(l), Iu(t, l), e === null) {
        Mg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return o1(t, v);
        }
        var C = i.children, x = i.fallback;
        if (s) {
          var q = n1(t, C, x, a), $ = t.child;
          return $.memoizedState = KS(a), t.memoizedState = XS, q;
        } else
          return ZS(t, C);
      } else {
        var ie = e.memoizedState;
        if (ie !== null) {
          var se = ie.dehydrated;
          if (se !== null)
            return l1(e, t, f, i, se, ie, a);
        }
        if (s) {
          var Ee = i.fallback, nt = i.children, Rt = a1(e, t, nt, Ee, a), mt = t.child, tn = e.child.memoizedState;
          return mt.memoizedState = tn === null ? KS(a) : J_(tn, a), mt.childLanes = t1(e, a), t.memoizedState = XS, Rt;
        } else {
          var Xt = i.children, ee = r1(e, t, Xt, a);
          return t.memoizedState = null, ee;
        }
      }
    }
    function ZS(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = JS(l, i);
      return s.return = e, e.child = s, s;
    }
    function n1(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (l & qt) === Et && s !== null ? (p = s, p.childLanes = ze, p.pendingProps = f, e.mode & cn && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Ku(a, l, i, null)) : (p = JS(f, l), v = Ku(a, l, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function JS(e, t, a) {
      return cC(e, t, ze, null);
    }
    function cR(e, t) {
      return pc(e, t);
    }
    function r1(e, t, a, i) {
      var l = e.child, s = l.sibling, f = cR(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & qt) === Et && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ua) : p.push(s);
      }
      return t.child = f, f;
    }
    function a1(e, t, a, i, l) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & qt) === Et && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var x = t.child;
        C = x, C.childLanes = ze, C.pendingProps = v, t.mode & cn && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = cR(f, v), C.subtreeFlags = f.subtreeFlags & Jn;
      var q;
      return p !== null ? q = pc(p, i) : (q = Ku(i, s, l, null), q.flags |= Hn), q.return = t, C.return = t, C.sibling = q, t.child = C, q;
    }
    function qm(e, t, a, i) {
      i !== null && Lg(i), Af(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = ZS(t, s);
      return f.flags |= Hn, t.memoizedState = null, f;
    }
    function i1(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = JS(f, s), v = Ku(i, s, l, null);
      return v.flags |= Hn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & qt) !== Et && Af(t, e.child, null, l), v;
    }
    function o1(e, t, a) {
      return (e.mode & qt) === Et ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ot) : yg(t) ? e.lanes = Lr : e.lanes = sa, null;
    }
    function l1(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Mr) {
          t.flags &= ~Mr;
          var ee = HS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return qm(e, t, f, ee);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= yt, null;
          var be = i.children, te = i.fallback, Fe = i1(e, t, be, te, f), lt = t.child;
          return lt.memoizedState = KS(f), t.memoizedState = XS, Fe;
        }
      else {
        if (Gx(), (t.mode & qt) === Et)
          return qm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (yg(l)) {
          var p, v, C;
          {
            var x = fx(l);
            p = x.digest, v = x.message, C = x.stack;
          }
          var q;
          v ? q = new Error(v) : q = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var $ = HS(q, p, C);
          return qm(e, t, f, $);
        }
        var ie = ca(f, e.childLanes);
        if (ho || ie) {
          var se = ry();
          if (se !== null) {
            var Ee = Yd(se, f);
            if (Ee !== on && Ee !== s.retryLane) {
              s.retryLane = Ee;
              var nt = On;
              Ya(e, Ee), zr(se, e, Ee, nt);
            }
          }
          EE();
          var Rt = HS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return qm(e, t, f, Rt);
        } else if (Lb(l)) {
          t.flags |= yt, t.child = e.child;
          var mt = MO.bind(null, e);
          return dx(l, mt), null;
        } else {
          Kx(t, l, s.treeContext);
          var tn = i.children, Xt = ZS(t, tn);
          return Xt.flags |= ia, Xt;
        }
      }
    }
    function fR(e, t, a) {
      e.lanes = Ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ft(i.lanes, t)), Ig(e.return, t, a);
    }
    function u1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === b) {
          var l = i.memoizedState;
          l !== null && fR(i, a, e);
        } else if (i.tag === Pe)
          fR(i, a, e);
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
    function s1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && wm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function c1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !qS[e])
        if (qS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function f1(e, t) {
      e !== void 0 && !Wm[e] && (e !== "collapsed" && e !== "hidden" ? (Wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function dR(e, t) {
      {
        var a = It(e), i = !a && typeof Ht(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function d1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (It(e)) {
          for (var a = 0; a < e.length; a++)
            if (!dR(e[a], a))
              return;
        } else {
          var i = Ht(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!dR(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function eE(e, t, a, i, l) {
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
    function pR(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      c1(l), f1(s, l), d1(f, l), _a(e, t, f, a);
      var p = fo.current, v = Zg(p, Lp);
      if (v)
        p = Jg(p, Lp), t.flags |= yt;
      else {
        var C = e !== null && (e.flags & yt) !== St;
        C && u1(t, t.child, a), p = Ff(p);
      }
      if (Iu(t, p), (t.mode & qt) === Et)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var x = s1(t.child), q;
            x === null ? (q = t.child, t.child = null) : (q = x.sibling, x.sibling = null), eE(
              t,
              !1,
              // isBackwards
              q,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var $ = null, ie = t.child;
            for (t.child = null; ie !== null; ) {
              var se = ie.alternate;
              if (se !== null && wm(se) === null) {
                t.child = ie;
                break;
              }
              var Ee = ie.sibling;
              ie.sibling = $, $ = ie, ie = Ee;
            }
            eE(
              t,
              !0,
              // isBackwards
              $,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            eE(
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
    function p1(e, t, a) {
      Qg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Af(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var vR = !1;
    function v1(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || vR || (vR = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && uo(v, s, "prop", "Context.Provider");
      }
      if (o0(t, l, p), f !== null) {
        var C = f.value;
        if (Ne(C, p)) {
          if (f.children === s.children && !tm())
            return Yl(e, t, a);
        } else
          c_(t, l, a);
      }
      var x = s.children;
      return _a(e, t, x, a), t.child;
    }
    var hR = !1;
    function h1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (hR || (hR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), jf(t, a);
      var f = mr(i);
      Ca(t);
      var p;
      return Vp.current = t, lr(!0), p = s(f), lr(!1), wa(), t.flags |= si, _a(e, t, p, a), t.child;
    }
    function Wp() {
      ho = !0;
    }
    function Ym(e, t) {
      (t.mode & qt) === Et && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Hn);
    }
    function Yl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), $0(), rv(t.lanes), ca(a, t.childLanes) ? (u_(e, t), t.child) : null;
    }
    function m1(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Ua) : s.push(e), a.flags |= Hn, a;
      }
    }
    function tE(e, t) {
      var a = e.lanes;
      return !!ca(a, t);
    }
    function y1(e, t, a) {
      switch (t.tag) {
        case V:
          lR(t), t.stateNode, Pf();
          break;
        case he:
          v0(t);
          break;
        case Y: {
          var i = t.type;
          Zo(i) && rm(t);
          break;
        }
        case ne:
          Qg(t, t.stateNode.containerInfo);
          break;
        case g: {
          var l = t.memoizedProps.value, s = t.type._context;
          o0(t, s, l);
          break;
        }
        case w:
          {
            var f = ca(a, t.childLanes);
            f && (t.flags |= Zt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case b: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Iu(t, Ff(fo.current)), t.flags |= yt, null;
            var C = t.child, x = C.childLanes;
            if (ca(a, x))
              return sR(e, t, a);
            Iu(t, Ff(fo.current));
            var q = Yl(e, t, a);
            return q !== null ? q.sibling : null;
          } else
            Iu(t, Ff(fo.current));
          break;
        }
        case Pe: {
          var $ = (e.flags & yt) !== St, ie = ca(a, t.childLanes);
          if ($) {
            if (ie)
              return pR(e, t, a);
            t.flags |= yt;
          }
          var se = t.memoizedState;
          if (se !== null && (se.rendering = null, se.tail = null, se.lastEffect = null), Iu(t, fo.current), ie)
            break;
          return null;
        }
        case Se:
        case qe:
          return t.lanes = ze, aR(e, t, a);
      }
      return Yl(e, t, a);
    }
    function mR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return m1(e, t, zE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || tm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ho = !0;
        else {
          var s = tE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & yt) === St)
            return ho = !1, y1(e, t, a);
          (e.flags & Lc) !== St ? ho = !0 : ho = !1;
        }
      } else if (ho = !1, Yr() && Vx(t)) {
        var f = t.index, p = Ix();
        $b(t, p, f);
      }
      switch (t.lanes = ze, t.tag) {
        case ce:
          return Z_(e, t, t.type, a);
        case fe: {
          var v = t.elementType;
          return X_(e, t, v, a);
        }
        case B: {
          var C = t.type, x = t.pendingProps, q = t.elementType === C ? x : vo(C, x);
          return YS(e, t, C, q, a);
        }
        case Y: {
          var $ = t.type, ie = t.pendingProps, se = t.elementType === $ ? ie : vo($, ie);
          return oR(e, t, $, se, a);
        }
        case V:
          return Y_(e, t, a);
        case he:
          return G_(e, t, a);
        case Ue:
          return Q_(e, t);
        case b:
          return sR(e, t, a);
        case ne:
          return p1(e, t, a);
        case T: {
          var Ee = t.type, nt = t.pendingProps, Rt = t.elementType === Ee ? nt : vo(Ee, nt);
          return tR(e, t, Ee, Rt, a);
        }
        case ye:
          return $_(e, t, a);
        case K:
          return W_(e, t, a);
        case w:
          return q_(e, t, a);
        case g:
          return v1(e, t, a);
        case k:
          return h1(e, t, a);
        case D: {
          var mt = t.type, tn = t.pendingProps, Xt = vo(mt, tn);
          if (t.type !== t.elementType) {
            var ee = mt.propTypes;
            ee && uo(
              ee,
              Xt,
              // Resolved for outer only
              "prop",
              nn(mt)
            );
          }
          return Xt = vo(mt.type, Xt), nR(e, t, mt, Xt, a);
        }
        case P:
          return rR(e, t, t.type, t.pendingProps, a);
        case de: {
          var be = t.type, te = t.pendingProps, Fe = t.elementType === be ? te : vo(be, te);
          return K_(e, t, be, Fe, a);
        }
        case Pe:
          return pR(e, t, a);
        case ke:
          break;
        case Se:
          return aR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= Zt;
    }
    function yR(e) {
      e.flags |= In, e.flags |= Ru;
    }
    var gR, nE, SR, ER;
    gR = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === he || l.tag === Ue)
          HT(e, l.stateNode);
        else if (l.tag !== ne) {
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
    }, nE = function(e, t) {
    }, SR = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Xg(), v = BT(f, a, s, i, l, p);
        t.updateQueue = v, v && qf(t);
      }
    }, ER = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function qp(e, t) {
      if (!Yr())
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
    function Qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ze, i = St;
      if (t) {
        if ((e.mode & cn) !== Et) {
          for (var v = e.selfBaseDuration, C = e.child; C !== null; )
            a = Ft(a, Ft(C.lanes, C.childLanes)), i |= C.subtreeFlags & Jn, i |= C.flags & Jn, v += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = v;
        } else
          for (var x = e.child; x !== null; )
            a = Ft(a, Ft(x.lanes, x.childLanes)), i |= x.subtreeFlags & Jn, i |= x.flags & Jn, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & cn) !== Et) {
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
    function g1(e, t, a) {
      if (n_() && (t.mode & qt) !== Et && (t.flags & yt) === St)
        return Kb(t), Pf(), t.flags |= Mr | ms | dr, !1;
      var i = um(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (e_(t), Qr(t), (t.mode & cn) !== Et) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Pf(), (t.flags & yt) === St && (t.memoizedState = null), t.flags |= Zt, Qr(t), (t.mode & cn) !== Et) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Zb(), !0;
    }
    function bR(e, t, a) {
      var i = t.pendingProps;
      switch (Og(t), t.tag) {
        case ce:
        case fe:
        case P:
        case B:
        case T:
        case ye:
        case K:
        case w:
        case k:
        case D:
          return Qr(t), null;
        case Y: {
          var l = t.type;
          return Zo(l) && nm(t), Qr(t), null;
        }
        case V: {
          var s = t.stateNode;
          if (Hf(t), wg(t), tS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = um(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Mr) !== St) && (t.flags |= ur, Zb());
            }
          }
          return nE(e, t), Qr(t), null;
        }
        case he: {
          Kg(t);
          var v = p0(), C = t.type;
          if (e !== null && t.stateNode != null)
            SR(e, t, C, i, v), e.ref !== t.ref && yR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Qr(t), null;
            }
            var x = Xg(), q = um(t);
            if (q)
              Zx(t, v, x) && qf(t);
            else {
              var $ = jT(C, i, v, x, t);
              gR($, t, !1, !1), t.stateNode = $, FT($, C, i, v) && qf(t);
            }
            t.ref !== null && yR(t);
          }
          return Qr(t), null;
        }
        case Ue: {
          var ie = i;
          if (e && t.stateNode != null) {
            var se = e.memoizedProps;
            ER(e, t, se, ie);
          } else {
            if (typeof ie != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Ee = p0(), nt = Xg(), Rt = um(t);
            Rt ? Jx(t) && qf(t) : t.stateNode = VT(ie, Ee, nt, t);
          }
          return Qr(t), null;
        }
        case b: {
          Bf(t);
          var mt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var tn = g1(e, t, mt);
            if (!tn)
              return t.flags & dr ? t : null;
          }
          if ((t.flags & yt) !== St)
            return t.lanes = a, (t.mode & cn) !== Et && xS(t), t;
          var Xt = mt !== null, ee = e !== null && e.memoizedState !== null;
          if (Xt !== ee && Xt) {
            var be = t.child;
            if (be.flags |= Zn, (t.mode & qt) !== Et) {
              var te = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              te || Zg(fo.current, m0) ? SO() : EE();
            }
          }
          var Fe = t.updateQueue;
          if (Fe !== null && (t.flags |= Zt), Qr(t), (t.mode & cn) !== Et && Xt) {
            var lt = t.child;
            lt !== null && (t.treeBaseDuration -= lt.treeBaseDuration);
          }
          return null;
        }
        case ne:
          return Hf(t), nE(e, t), e === null && Px(t.stateNode.containerInfo), Qr(t), null;
        case g:
          var at = t.type._context;
          return Vg(at, t), Qr(t), null;
        case de: {
          var Dt = t.type;
          return Zo(Dt) && nm(t), Qr(t), null;
        }
        case Pe: {
          Bf(t);
          var Ut = t.memoizedState;
          if (Ut === null)
            return Qr(t), null;
          var wn = (t.flags & yt) !== St, pn = Ut.rendering;
          if (pn === null)
            if (wn)
              qp(Ut, !1);
            else {
              var fr = bO() && (e === null || (e.flags & yt) === St);
              if (!fr)
                for (var vn = t.child; vn !== null; ) {
                  var ir = wm(vn);
                  if (ir !== null) {
                    wn = !0, t.flags |= yt, qp(Ut, !1);
                    var ya = ir.updateQueue;
                    return ya !== null && (t.updateQueue = ya, t.flags |= Zt), t.subtreeFlags = St, s_(t, a), Iu(t, Jg(fo.current, Lp)), t.child;
                  }
                  vn = vn.sibling;
                }
              Ut.tail !== null && sr() > VR() && (t.flags |= yt, wn = !0, qp(Ut, !1), t.lanes = jd);
            }
          else {
            if (!wn) {
              var ea = wm(pn);
              if (ea !== null) {
                t.flags |= yt, wn = !0;
                var mi = ea.updateQueue;
                if (mi !== null && (t.updateQueue = mi, t.flags |= Zt), qp(Ut, !0), Ut.tail === null && Ut.tailMode === "hidden" && !pn.alternate && !Yr())
                  return Qr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              sr() * 2 - Ut.renderingStartTime > VR() && a !== sa && (t.flags |= yt, wn = !0, qp(Ut, !1), t.lanes = jd);
            }
            if (Ut.isBackwards)
              pn.sibling = t.child, t.child = pn;
            else {
              var ka = Ut.last;
              ka !== null ? ka.sibling = pn : t.child = pn, Ut.last = pn;
            }
          }
          if (Ut.tail !== null) {
            var za = Ut.tail;
            Ut.rendering = za, Ut.tail = za.sibling, Ut.renderingStartTime = sr(), za.sibling = null;
            var ga = fo.current;
            return wn ? ga = Jg(ga, Lp) : ga = Ff(ga), Iu(t, ga), za;
          }
          return Qr(t), null;
        }
        case ke:
          break;
        case Se:
        case qe: {
          SE(t);
          var Zl = t.memoizedState, ed = Zl !== null;
          if (e !== null) {
            var uv = e.memoizedState, ol = uv !== null;
            ol !== ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !I && (t.flags |= Zn);
          }
          return !ed || (t.mode & qt) === Et ? Qr(t) : ca(il, sa) && (Qr(t), t.subtreeFlags & (Hn | Zt) && (t.flags |= Zn)), null;
        }
        case Qe:
          return null;
        case Ie:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function S1(e, t, a) {
      switch (Og(t), t.tag) {
        case Y: {
          var i = t.type;
          Zo(i) && nm(t);
          var l = t.flags;
          return l & dr ? (t.flags = l & ~dr | yt, (t.mode & cn) !== Et && xS(t), t) : null;
        }
        case V: {
          t.stateNode, Hf(t), wg(t), tS();
          var s = t.flags;
          return (s & dr) !== St && (s & yt) === St ? (t.flags = s & ~dr | yt, t) : null;
        }
        case he:
          return Kg(t), null;
        case b: {
          Bf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Pf();
          }
          var p = t.flags;
          return p & dr ? (t.flags = p & ~dr | yt, (t.mode & cn) !== Et && xS(t), t) : null;
        }
        case Pe:
          return Bf(t), null;
        case ne:
          return Hf(t), null;
        case g:
          var v = t.type._context;
          return Vg(v, t), null;
        case Se:
        case qe:
          return SE(t), null;
        case Qe:
          return null;
        default:
          return null;
      }
    }
    function RR(e, t, a) {
      switch (Og(t), t.tag) {
        case Y: {
          var i = t.type.childContextTypes;
          i != null && nm(t);
          break;
        }
        case V: {
          t.stateNode, Hf(t), wg(t), tS();
          break;
        }
        case he: {
          Kg(t);
          break;
        }
        case ne:
          Hf(t);
          break;
        case b:
          Bf(t);
          break;
        case Pe:
          Bf(t);
          break;
        case g:
          var l = t.type._context;
          Vg(l, t);
          break;
        case Se:
        case qe:
          SE(t);
          break;
      }
    }
    var CR = null;
    CR = /* @__PURE__ */ new Set();
    var Gm = !1, Xr = !1, E1 = typeof WeakSet == "function" ? WeakSet : Set, pt = null, Yf = null, Gf = null;
    function b1(e) {
      No(null, function() {
        throw e;
      }), hs();
    }
    var R1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & cn)
        try {
          rl(), t.componentWillUnmount();
        } finally {
          nl(e);
        }
      else
        t.componentWillUnmount();
    };
    function wR(e, t) {
      try {
        qu(Tr, e);
      } catch (a) {
        Pn(e, t, a);
      }
    }
    function rE(e, t, a) {
      try {
        R1(e, a);
      } catch (i) {
        Pn(e, t, i);
      }
    }
    function C1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Pn(e, t, i);
      }
    }
    function TR(e, t) {
      try {
        _R(e);
      } catch (a) {
        Pn(e, t, a);
      }
    }
    function Qf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Oe && Ye && e.mode & cn)
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
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Nt(e));
        } else
          a.current = null;
    }
    function Qm(e, t, a) {
      try {
        a();
      } catch (i) {
        Pn(e, t, i);
      }
    }
    var xR = !1;
    function w1(e, t) {
      AT(e.containerInfo), pt = t, T1();
      var a = xR;
      return xR = !1, a;
    }
    function T1() {
      for (; pt !== null; ) {
        var e = pt, t = e.child;
        (e.subtreeFlags & Ao) !== St && t !== null ? (t.return = e, pt = t) : x1();
      }
    }
    function x1() {
      for (; pt !== null; ) {
        var e = pt;
        Sn(e);
        try {
          _1(e);
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
    function _1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ur) !== St) {
        switch (Sn(e), e.tag) {
          case B:
          case T:
          case P:
            break;
          case Y: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !uc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vo(e.type, i), l);
              {
                var p = CR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Nt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case V: {
            {
              var v = e.stateNode;
              lx(v.containerInfo);
            }
            break;
          }
          case he:
          case Ue:
          case ne:
          case de:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Nn();
      }
    }
    function mo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Gr) !== Ga ? no(t) : (e & Tr) !== Ga && gs(t), (e & Jo) !== Ga && iv(!0), Qm(t, a, p), (e & Jo) !== Ga && iv(!1), (e & Gr) !== Ga ? Fo() : (e & Tr) !== Ga && Ad());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Gr) !== Ga ? Pd(t) : (e & Tr) !== Ga && Hc(t);
            var f = s.create;
            (e & Jo) !== Ga && iv(!0), s.destroy = f(), (e & Jo) !== Ga && iv(!1), (e & Gr) !== Ga ? eh() : (e & Tr) !== Ga && th();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Tr) !== St ? v = "useLayoutEffect" : (s.tag & Jo) !== St ? v = "useInsertionEffect" : v = "useEffect";
                var C = void 0;
                p === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? C = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function O1(e, t) {
      if ((t.flags & Zt) !== St)
        switch (t.tag) {
          case w: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = V0(), p = t.alternate === null ? "mount" : "update";
            B0() && (p = "nested-update"), typeof s == "function" && s(l, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case V:
                  var C = v.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case w:
                  var x = v.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function D1(e, t, a, i) {
      if ((a.flags & jo) !== St)
        switch (a.tag) {
          case B:
          case T:
          case P: {
            if (!Xr)
              if (a.mode & cn)
                try {
                  rl(), qu(Tr | wr, a);
                } finally {
                  nl(a);
                }
              else
                qu(Tr | wr, a);
            break;
          }
          case Y: {
            var l = a.stateNode;
            if (a.flags & Zt && !Xr)
              if (t === null)
                if (a.type === a.elementType && !uc && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(a) || "instance")), a.mode & cn)
                  try {
                    rl(), l.componentDidMount();
                  } finally {
                    nl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vo(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !uc && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(a) || "instance")), a.mode & cn)
                  try {
                    rl(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    nl(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !uc && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Nt(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Nt(a) || "instance")), d0(a, p, l));
            break;
          }
          case V: {
            var v = a.updateQueue;
            if (v !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case he:
                    C = a.child.stateNode;
                    break;
                  case Y:
                    C = a.child.stateNode;
                    break;
                }
              d0(a, v, C);
            }
            break;
          }
          case he: {
            var x = a.stateNode;
            if (t === null && a.flags & Zt) {
              var q = a.type, $ = a.memoizedProps;
              YT(x, q, $);
            }
            break;
          }
          case Ue:
            break;
          case ne:
            break;
          case w: {
            {
              var ie = a.memoizedProps, se = ie.onCommit, Ee = ie.onRender, nt = a.stateNode.effectDuration, Rt = V0(), mt = t === null ? "mount" : "update";
              B0() && (mt = "nested-update"), typeof Ee == "function" && Ee(a.memoizedProps.id, mt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Rt);
              {
                typeof se == "function" && se(a.memoizedProps.id, mt, nt, Rt), xO(a);
                var tn = a.return;
                e: for (; tn !== null; ) {
                  switch (tn.tag) {
                    case V:
                      var Xt = tn.stateNode;
                      Xt.effectDuration += nt;
                      break e;
                    case w:
                      var ee = tn.stateNode;
                      ee.effectDuration += nt;
                      break e;
                  }
                  tn = tn.return;
                }
              }
            }
            break;
          }
          case b: {
            U1(e, a);
            break;
          }
          case Pe:
          case de:
          case ke:
          case Se:
          case qe:
          case Ie:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || a.flags & In && _R(a);
    }
    function k1(e) {
      switch (e.tag) {
        case B:
        case T:
        case P: {
          if (e.mode & cn)
            try {
              rl(), wR(e, e.return);
            } finally {
              nl(e);
            }
          else
            wR(e, e.return);
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && C1(e, e.return, t), TR(e, e.return);
          break;
        }
        case he: {
          TR(e, e.return);
          break;
        }
      }
    }
    function z1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === he) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? rx(l) : ix(i.stateNode, i.memoizedProps);
            } catch (f) {
              Pn(e, e.return, f);
            }
          }
        } else if (i.tag === Ue) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ax(s) : ox(s, i.memoizedProps);
            } catch (f) {
              Pn(e, e.return, f);
            }
        } else if (!((i.tag === Se || i.tag === qe) && i.memoizedState !== null && i !== e)) {
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
    function _R(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case he:
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
          typeof l == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Nt(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Nt(e)), t.current = i;
      }
    }
    function M1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function OR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, OR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === he) {
          var a = e.stateNode;
          a !== null && jx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function L1(e) {
      for (var t = e.return; t !== null; ) {
        if (DR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DR(e) {
      return e.tag === he || e.tag === V || e.tag === ne;
    }
    function kR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || DR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== he && t.tag !== Ue && t.tag !== _e; ) {
          if (t.flags & Hn || t.child === null || t.tag === ne)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Hn))
          return t.stateNode;
      }
    }
    function N1(e) {
      var t = L1(e);
      switch (t.tag) {
        case he: {
          var a = t.stateNode;
          t.flags & ja && (Mb(a), t.flags &= ~ja);
          var i = kR(e);
          iE(e, i, a);
          break;
        }
        case V:
        case ne: {
          var l = t.stateNode.containerInfo, s = kR(e);
          aE(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function aE(e, t, a) {
      var i = e.tag, l = i === he || i === Ue;
      if (l) {
        var s = e.stateNode;
        t ? JT(a, s, t) : KT(a, s);
      } else if (i !== ne) {
        var f = e.child;
        if (f !== null) {
          aE(f, t, a);
          for (var p = f.sibling; p !== null; )
            aE(p, t, a), p = p.sibling;
        }
      }
    }
    function iE(e, t, a) {
      var i = e.tag, l = i === he || i === Ue;
      if (l) {
        var s = e.stateNode;
        t ? ZT(a, s, t) : XT(a, s);
      } else if (i !== ne) {
        var f = e.child;
        if (f !== null) {
          iE(f, t, a);
          for (var p = f.sibling; p !== null; )
            iE(p, t, a), p = p.sibling;
        }
      }
    }
    var Kr = null, yo = !1;
    function P1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case he: {
              Kr = i.stateNode, yo = !1;
              break e;
            }
            case V: {
              Kr = i.stateNode.containerInfo, yo = !0;
              break e;
            }
            case ne: {
              Kr = i.stateNode.containerInfo, yo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Kr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        zR(e, t, a), Kr = null, yo = !1;
      }
      M1(a);
    }
    function Yu(e, t, a) {
      for (var i = a.child; i !== null; )
        zR(e, t, i), i = i.sibling;
    }
    function zR(e, t, a) {
      switch (Md(a), a.tag) {
        case he:
          Xr || Qf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ue: {
          {
            var i = Kr, l = yo;
            Kr = null, Yu(e, t, a), Kr = i, yo = l, Kr !== null && (yo ? tx(Kr, a.stateNode) : ex(Kr, a.stateNode));
          }
          return;
        }
        case _e: {
          Kr !== null && (yo ? nx(Kr, a.stateNode) : mg(Kr, a.stateNode));
          return;
        }
        case ne: {
          {
            var s = Kr, f = yo;
            Kr = a.stateNode.containerInfo, yo = !0, Yu(e, t, a), Kr = s, yo = f;
          }
          return;
        }
        case B:
        case T:
        case D:
        case P: {
          if (!Xr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var C = v.next, x = C;
                do {
                  var q = x, $ = q.destroy, ie = q.tag;
                  $ !== void 0 && ((ie & Jo) !== Ga ? Qm(a, t, $) : (ie & Tr) !== Ga && (gs(a), a.mode & cn ? (rl(), Qm(a, t, $), nl(a)) : Qm(a, t, $), Ad())), x = x.next;
                } while (x !== C);
              }
            }
          }
          Yu(e, t, a);
          return;
        }
        case Y: {
          if (!Xr) {
            Qf(a, t);
            var se = a.stateNode;
            typeof se.componentWillUnmount == "function" && rE(a, t, se);
          }
          Yu(e, t, a);
          return;
        }
        case ke: {
          Yu(e, t, a);
          return;
        }
        case Se: {
          if (
            // TODO: Remove this dead flag
            a.mode & qt
          ) {
            var Ee = Xr;
            Xr = Ee || a.memoizedState !== null, Yu(e, t, a), Xr = Ee;
          } else
            Yu(e, t, a);
          break;
        }
        default: {
          Yu(e, t, a);
          return;
        }
      }
    }
    function A1(e) {
      e.memoizedState;
    }
    function U1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && bx(s);
          }
        }
      }
    }
    function MR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new E1()), t.forEach(function(i) {
          var l = LO.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ua)
              if (Yf !== null && Gf !== null)
                av(Gf, Yf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function j1(e, t, a) {
      Yf = a, Gf = e, Sn(t), LR(t, e), Sn(t), Yf = null, Gf = null;
    }
    function go(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            P1(e, t, s);
          } catch (v) {
            Pn(s, t, v);
          }
        }
      var f = _o();
      if (t.subtreeFlags & Uo)
        for (var p = t.child; p !== null; )
          Sn(p), LR(p, e), p = p.sibling;
      Sn(f);
    }
    function LR(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case B:
        case T:
        case D:
        case P: {
          if (go(t, e), al(e), l & Zt) {
            try {
              mo(Jo | wr, e, e.return), qu(Jo | wr, e);
            } catch (Dt) {
              Pn(e, e.return, Dt);
            }
            if (e.mode & cn) {
              try {
                rl(), mo(Tr | wr, e, e.return);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
              nl(e);
            } else
              try {
                mo(Tr | wr, e, e.return);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
          }
          return;
        }
        case Y: {
          go(t, e), al(e), l & In && i !== null && Qf(i, i.return);
          return;
        }
        case he: {
          go(t, e), al(e), l & In && i !== null && Qf(i, i.return);
          {
            if (e.flags & ja) {
              var s = e.stateNode;
              try {
                Mb(s);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
            }
            if (l & Zt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, C = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    GT(f, x, C, v, p, e);
                  } catch (Dt) {
                    Pn(e, e.return, Dt);
                  }
              }
            }
          }
          return;
        }
        case Ue: {
          if (go(t, e), al(e), l & Zt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var q = e.stateNode, $ = e.memoizedProps, ie = i !== null ? i.memoizedProps : $;
            try {
              QT(q, ie, $);
            } catch (Dt) {
              Pn(e, e.return, Dt);
            }
          }
          return;
        }
        case V: {
          if (go(t, e), al(e), l & Zt && i !== null) {
            var se = i.memoizedState;
            if (se.isDehydrated)
              try {
                Ex(t.containerInfo);
              } catch (Dt) {
                Pn(e, e.return, Dt);
              }
          }
          return;
        }
        case ne: {
          go(t, e), al(e);
          return;
        }
        case b: {
          go(t, e), al(e);
          var Ee = e.child;
          if (Ee.flags & Zn) {
            var nt = Ee.stateNode, Rt = Ee.memoizedState, mt = Rt !== null;
            if (nt.isHidden = mt, mt) {
              var tn = Ee.alternate !== null && Ee.alternate.memoizedState !== null;
              tn || gO();
            }
          }
          if (l & Zt) {
            try {
              A1(e);
            } catch (Dt) {
              Pn(e, e.return, Dt);
            }
            MR(e);
          }
          return;
        }
        case Se: {
          var Xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & qt
          ) {
            var ee = Xr;
            Xr = ee || Xt, go(t, e), Xr = ee;
          } else
            go(t, e);
          if (al(e), l & Zn) {
            var be = e.stateNode, te = e.memoizedState, Fe = te !== null, lt = e;
            if (be.isHidden = Fe, Fe && !Xt && (lt.mode & qt) !== Et) {
              pt = lt;
              for (var at = lt.child; at !== null; )
                pt = at, F1(at), at = at.sibling;
            }
            z1(lt, Fe);
          }
          return;
        }
        case Pe: {
          go(t, e), al(e), l & Zt && MR(e);
          return;
        }
        case ke:
          return;
        default: {
          go(t, e), al(e);
          return;
        }
      }
    }
    function al(e) {
      var t = e.flags;
      if (t & Hn) {
        try {
          N1(e);
        } catch (a) {
          Pn(e, e.return, a);
        }
        e.flags &= ~Hn;
      }
      t & ia && (e.flags &= ~ia);
    }
    function H1(e, t, a) {
      Yf = a, Gf = t, pt = e, NR(e, t, a), Yf = null, Gf = null;
    }
    function NR(e, t, a) {
      for (var i = (e.mode & qt) !== Et; pt !== null; ) {
        var l = pt, s = l.child;
        if (l.tag === Se && i) {
          var f = l.memoizedState !== null, p = f || Gm;
          if (p) {
            oE(e, t, a);
            continue;
          } else {
            var v = l.alternate, C = v !== null && v.memoizedState !== null, x = C || Xr, q = Gm, $ = Xr;
            Gm = p, Xr = x, Xr && !$ && (pt = l, B1(l));
            for (var ie = s; ie !== null; )
              pt = ie, NR(
                ie,
                // New root; bubble back up to here and stop.
                t,
                a
              ), ie = ie.sibling;
            pt = l, Gm = q, Xr = $, oE(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & jo) !== St && s !== null ? (s.return = l, pt = s) : oE(e, t, a);
      }
    }
    function oE(e, t, a) {
      for (; pt !== null; ) {
        var i = pt;
        if ((i.flags & jo) !== St) {
          var l = i.alternate;
          Sn(i);
          try {
            D1(t, l, i, a);
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
    function F1(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.child;
        switch (t.tag) {
          case B:
          case T:
          case D:
          case P: {
            if (t.mode & cn)
              try {
                rl(), mo(Tr, t, t.return);
              } finally {
                nl(t);
              }
            else
              mo(Tr, t, t.return);
            break;
          }
          case Y: {
            Qf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && rE(t, t.return, i);
            break;
          }
          case he: {
            Qf(t, t.return);
            break;
          }
          case Se: {
            var l = t.memoizedState !== null;
            if (l) {
              PR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, pt = a) : PR(e);
      }
    }
    function PR(e) {
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
    function B1(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.child;
        if (t.tag === Se) {
          var i = t.memoizedState !== null;
          if (i) {
            AR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, pt = a) : AR(e);
      }
    }
    function AR(e) {
      for (; pt !== null; ) {
        var t = pt;
        Sn(t);
        try {
          k1(t);
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
    function V1(e, t, a, i) {
      pt = t, I1(t, e, a, i);
    }
    function I1(e, t, a, i) {
      for (; pt !== null; ) {
        var l = pt, s = l.child;
        (l.subtreeFlags & eo) !== St && s !== null ? (s.return = l, pt = s) : $1(e, t, a, i);
      }
    }
    function $1(e, t, a, i) {
      for (; pt !== null; ) {
        var l = pt;
        if ((l.flags & aa) !== St) {
          Sn(l);
          try {
            W1(t, l, a, i);
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
    function W1(e, t, a, i) {
      switch (t.tag) {
        case B:
        case T:
        case P: {
          if (t.mode & cn) {
            TS();
            try {
              qu(Gr | wr, t);
            } finally {
              wS(t);
            }
          } else
            qu(Gr | wr, t);
          break;
        }
      }
    }
    function q1(e) {
      pt = e, Y1();
    }
    function Y1() {
      for (; pt !== null; ) {
        var e = pt, t = e.child;
        if ((pt.flags & Ua) !== St) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              pt = l, X1(l, e);
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
        (e.subtreeFlags & eo) !== St && t !== null ? (t.return = e, pt = t) : G1();
      }
    }
    function G1() {
      for (; pt !== null; ) {
        var e = pt;
        (e.flags & aa) !== St && (Sn(e), Q1(e), Nn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pt = t;
          return;
        }
        pt = e.return;
      }
    }
    function Q1(e) {
      switch (e.tag) {
        case B:
        case T:
        case P: {
          e.mode & cn ? (TS(), mo(Gr | wr, e, e.return), wS(e)) : mo(Gr | wr, e, e.return);
          break;
        }
      }
    }
    function X1(e, t) {
      for (; pt !== null; ) {
        var a = pt;
        Sn(a), Z1(a, t), Nn();
        var i = a.child;
        i !== null ? (i.return = a, pt = i) : K1(e);
      }
    }
    function K1(e) {
      for (; pt !== null; ) {
        var t = pt, a = t.sibling, i = t.return;
        if (OR(t), t === e) {
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
    function Z1(e, t) {
      switch (e.tag) {
        case B:
        case T:
        case P: {
          e.mode & cn ? (TS(), mo(Gr, e, t), wS(e)) : mo(Gr, e, t);
          break;
        }
      }
    }
    function J1(e) {
      switch (e.tag) {
        case B:
        case T:
        case P: {
          try {
            qu(Tr | wr, e);
          } catch (a) {
            Pn(e, e.return, a);
          }
          break;
        }
        case Y: {
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
    function eO(e) {
      switch (e.tag) {
        case B:
        case T:
        case P: {
          try {
            qu(Gr | wr, e);
          } catch (t) {
            Pn(e, e.return, t);
          }
          break;
        }
      }
    }
    function tO(e) {
      switch (e.tag) {
        case B:
        case T:
        case P: {
          try {
            mo(Tr | wr, e, e.return);
          } catch (a) {
            Pn(e, e.return, a);
          }
          break;
        }
        case Y: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && rE(e, e.return, t);
          break;
        }
      }
    }
    function nO(e) {
      switch (e.tag) {
        case B:
        case T:
        case P:
          try {
            mo(Gr | wr, e, e.return);
          } catch (t) {
            Pn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Yp = Symbol.for;
      Yp("selector.component"), Yp("selector.has_pseudo_class"), Yp("selector.role"), Yp("selector.test_id"), Yp("selector.text");
    }
    var rO = [];
    function aO() {
      rO.forEach(function(e) {
        return e();
      });
    }
    var iO = m.ReactCurrentActQueue;
    function oO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function UR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && iO.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var lO = Math.ceil, lE = m.ReactCurrentDispatcher, uE = m.ReactCurrentOwner, Zr = m.ReactCurrentBatchConfig, So = m.ReactCurrentActQueue, Or = (
      /*             */
      0
    ), jR = (
      /*               */
      1
    ), Jr = (
      /*                */
      2
    ), Ii = (
      /*                */
      4
    ), Gl = 0, Gp = 1, sc = 2, Xm = 3, Qp = 4, HR = 5, sE = 6, en = Or, Oa = null, Xn = null, Dr = ze, il = ze, cE = Uu(ze), kr = Gl, Xp = null, Km = ze, Kp = ze, Zm = ze, Zp = null, Qa = null, fE = 0, FR = 500, BR = 1 / 0, uO = 500, Ql = null;
    function Jp() {
      BR = sr() + uO;
    }
    function VR() {
      return BR;
    }
    var Jm = !1, dE = null, Xf = null, cc = !1, Gu = null, ev = ze, pE = [], vE = null, sO = 50, tv = 0, hE = null, mE = !1, ey = !1, cO = 50, Kf = 0, ty = null, nv = On, ny = ze, IR = !1;
    function ry() {
      return Oa;
    }
    function Da() {
      return (en & (Jr | Ii)) !== Or ? sr() : (nv !== On || (nv = sr()), nv);
    }
    function Qu(e) {
      var t = e.mode;
      if ((t & qt) === Et)
        return Ot;
      if ((en & Jr) !== Or && Dr !== ze)
        return zs(Dr);
      var a = i_() !== a_;
      if (a) {
        if (Zr.transition !== null) {
          var i = Zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ny === on && (ny = $d()), ny;
      }
      var l = $a();
      if (l !== on)
        return l;
      var s = IT();
      return s;
    }
    function fO(e) {
      var t = e.mode;
      return (t & qt) === Et ? Ot : lh();
    }
    function zr(e, t, a, i) {
      PO(), IR && S("useInsertionEffect must not schedule updates."), mE && (ey = !0), xu(e, a, i), (en & Jr) !== ze && e === Oa ? jO(t) : (ua && Ns(e, t, a), HO(t), e === Oa && ((en & Jr) === Or && (Kp = Ft(Kp, a)), kr === Qp && Xu(e, Dr)), Xa(e, i), a === Ot && en === Or && (t.mode & qt) === Et && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !So.isBatchingLegacy && (Jp(), Ib()));
    }
    function dO(e, t, a) {
      var i = e.current;
      i.lanes = t, xu(e, t, a), Xa(e, a);
    }
    function pO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (en & Jr) !== Or
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      of(e, t);
      var i = af(e, e === Oa ? Dr : ze);
      if (i === ze) {
        a !== null && iC(a), e.callbackNode = null, e.callbackPriority = on;
        return;
      }
      var l = Io(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(So.current !== null && a !== CE)) {
        a == null && s !== Ot && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && iC(a);
      var f;
      if (l === Ot)
        e.tag === ju ? (So.isBatchingLegacy !== null && (So.didScheduleLegacyUpdate = !0), Bx(qR.bind(null, e))) : Vb(qR.bind(null, e)), So.current !== null ? So.current.push(Hu) : WT(function() {
          (en & (Jr | Ii)) === Or && Hu();
        }), f = null;
      else {
        var p;
        switch (vh(i)) {
          case Vr:
            p = ys;
            break;
          case Li:
            p = Ho;
            break;
          case Va:
            p = to;
            break;
          case Ia:
            p = Rl;
            break;
          default:
            p = to;
            break;
        }
        f = wE(p, $R.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function $R(e, t) {
      if (z_(), nv = On, ny = ze, (en & (Jr | Ii)) !== Or)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Kl();
      if (i && e.callbackNode !== a)
        return null;
      var l = af(e, e === Oa ? Dr : ze);
      if (l === ze)
        return null;
      var s = !uf(e, l) && !oh(e, l) && !t, f = s ? CO(e, l) : iy(e, l);
      if (f !== Gl) {
        if (f === sc) {
          var p = lf(e);
          p !== ze && (l = p, f = yE(e, p));
        }
        if (f === Gp) {
          var v = Xp;
          throw fc(e, ze), Xu(e, l), Xa(e, sr()), v;
        }
        if (f === sE)
          Xu(e, l);
        else {
          var C = !uf(e, l), x = e.current.alternate;
          if (C && !hO(x)) {
            if (f = iy(e, l), f === sc) {
              var q = lf(e);
              q !== ze && (l = q, f = yE(e, q));
            }
            if (f === Gp) {
              var $ = Xp;
              throw fc(e, ze), Xu(e, l), Xa(e, sr()), $;
            }
          }
          e.finishedWork = x, e.finishedLanes = l, vO(e, f, l);
        }
      }
      return Xa(e, sr()), e.callbackNode === a ? $R.bind(null, e) : null;
    }
    function yE(e, t) {
      var a = Zp;
      if (ff(e)) {
        var i = fc(e, t);
        i.flags |= Mr, Nx(e.containerInfo);
      }
      var l = iy(e, t);
      if (l !== sc) {
        var s = Qa;
        Qa = a, s !== null && WR(s);
      }
      return l;
    }
    function WR(e) {
      Qa === null ? Qa = e : Qa.push.apply(Qa, e);
    }
    function vO(e, t, a) {
      switch (t) {
        case Gl:
        case Gp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case sc: {
          dc(e, Qa, Ql);
          break;
        }
        case Xm: {
          if (Xu(e, a), Ll(a) && // do not delay if we're inside an act() scope
          !oC()) {
            var i = fE + FR - sr();
            if (i > 10) {
              var l = af(e, ze);
              if (l !== ze)
                break;
              var s = e.suspendedLanes;
              if (!Nl(s, a)) {
                Da(), sf(e, s);
                break;
              }
              e.timeoutHandle = vg(dc.bind(null, e, Qa, Ql), i);
              break;
            }
          }
          dc(e, Qa, Ql);
          break;
        }
        case Qp: {
          if (Xu(e, a), Vd(a))
            break;
          if (!oC()) {
            var f = fi(e, a), p = f, v = sr() - p, C = NO(v) - v;
            if (C > 10) {
              e.timeoutHandle = vg(dc.bind(null, e, Qa, Ql), C);
              break;
            }
          }
          dc(e, Qa, Ql);
          break;
        }
        case HR: {
          dc(e, Qa, Ql);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function hO(e) {
      for (var t = e; ; ) {
        if (t.flags & bu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, p = s.value;
                try {
                  if (!Ne(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & bu && v !== null) {
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
    function Xu(e, t) {
      t = Ms(t, Zm), t = Ms(t, Kp), ch(e, t);
    }
    function qR(e) {
      if (M_(), (en & (Jr | Ii)) !== Or)
        throw new Error("Should not already be working.");
      Kl();
      var t = af(e, ze);
      if (!ca(t, Ot))
        return Xa(e, sr()), null;
      var a = iy(e, t);
      if (e.tag !== ju && a === sc) {
        var i = lf(e);
        i !== ze && (t = i, a = yE(e, i));
      }
      if (a === Gp) {
        var l = Xp;
        throw fc(e, ze), Xu(e, t), Xa(e, sr()), l;
      }
      if (a === sE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, dc(e, Qa, Ql), Xa(e, sr()), null;
    }
    function mO(e, t) {
      t !== ze && (cf(e, Ft(t, Ot)), Xa(e, sr()), (en & (Jr | Ii)) === Or && (Jp(), Hu()));
    }
    function gE(e, t) {
      var a = en;
      en |= jR;
      try {
        return e(t);
      } finally {
        en = a, en === Or && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !So.isBatchingLegacy && (Jp(), Ib());
      }
    }
    function yO(e, t, a, i, l) {
      var s = $a(), f = Zr.transition;
      try {
        return Zr.transition = null, nr(Vr), e(t, a, i, l);
      } finally {
        nr(s), Zr.transition = f, en === Or && Jp();
      }
    }
    function Xl(e) {
      Gu !== null && Gu.tag === ju && (en & (Jr | Ii)) === Or && Kl();
      var t = en;
      en |= jR;
      var a = Zr.transition, i = $a();
      try {
        return Zr.transition = null, nr(Vr), e ? e() : void 0;
      } finally {
        nr(i), Zr.transition = a, en = t, (en & (Jr | Ii)) === Or && Hu();
      }
    }
    function YR() {
      return (en & (Jr | Ii)) !== Or;
    }
    function ay(e, t) {
      ha(cE, il, e), il = Ft(il, t);
    }
    function SE(e) {
      il = cE.current, va(cE, e);
    }
    function fc(e, t) {
      e.finishedWork = null, e.finishedLanes = ze;
      var a = e.timeoutHandle;
      if (a !== hg && (e.timeoutHandle = hg, $T(a)), Xn !== null)
        for (var i = Xn.return; i !== null; ) {
          var l = i.alternate;
          RR(l, i), i = i.return;
        }
      Oa = e;
      var s = pc(e.current, null);
      return Xn = s, Dr = il = t, kr = Gl, Xp = null, Km = ze, Kp = ze, Zm = ze, Zp = null, Qa = null, d_(), co.discardPendingWarnings(), s;
    }
    function GR(e, t) {
      do {
        var a = Xn;
        try {
          if (vm(), g0(), Nn(), uE.current = null, a === null || a.return === null) {
            kr = Gp, Xp = t, Xn = null;
            return;
          }
          if (Oe && a.mode & cn && Im(a, !0), Ae)
            if (wa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Mi(a, i, Dr);
            } else
              Ss(a, t, Dr);
          B_(e, a.return, a, t, Dr), ZR(a);
        } catch (l) {
          t = l, Xn === a && a !== null ? (a = a.return, Xn = a) : a = Xn;
          continue;
        }
        return;
      } while (!0);
    }
    function QR() {
      var e = lE.current;
      return lE.current = jm, e === null ? jm : e;
    }
    function XR(e) {
      lE.current = e;
    }
    function gO() {
      fE = sr();
    }
    function rv(e) {
      Km = Ft(e, Km);
    }
    function SO() {
      kr === Gl && (kr = Xm);
    }
    function EE() {
      (kr === Gl || kr === Xm || kr === sc) && (kr = Qp), Oa !== null && (ks(Km) || ks(Kp)) && Xu(Oa, Dr);
    }
    function EO(e) {
      kr !== Qp && (kr = sc), Zp === null ? Zp = [e] : Zp.push(e);
    }
    function bO() {
      return kr === Gl;
    }
    function iy(e, t) {
      var a = en;
      en |= Jr;
      var i = QR();
      if (Oa !== e || Dr !== t) {
        if (ua) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (av(e, Dr), l.clear()), fh(e, t);
        }
        Ql = Gd(), fc(e, t);
      }
      xl(t);
      do
        try {
          RO();
          break;
        } catch (s) {
          GR(e, s);
        }
      while (!0);
      if (vm(), en = a, XR(i), Xn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Fc(), Oa = null, Dr = ze, kr;
    }
    function RO() {
      for (; Xn !== null; )
        KR(Xn);
    }
    function CO(e, t) {
      var a = en;
      en |= Jr;
      var i = QR();
      if (Oa !== e || Dr !== t) {
        if (ua) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (av(e, Dr), l.clear()), fh(e, t);
        }
        Ql = Gd(), Jp(), fc(e, t);
      }
      xl(t);
      do
        try {
          wO();
          break;
        } catch (s) {
          GR(e, s);
        }
      while (!0);
      return vm(), XR(i), en = a, Xn !== null ? (nh(), Gl) : (Fc(), Oa = null, Dr = ze, kr);
    }
    function wO() {
      for (; Xn !== null && !_d(); )
        KR(Xn);
    }
    function KR(e) {
      var t = e.alternate;
      Sn(e);
      var a;
      (e.mode & cn) !== Et ? (CS(e), a = bE(t, e, il), Im(e, !0)) : a = bE(t, e, il), Nn(), e.memoizedProps = e.pendingProps, a === null ? ZR(e) : Xn = a, uE.current = null;
    }
    function ZR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ms) === St) {
          Sn(t);
          var l = void 0;
          if ((t.mode & cn) === Et ? l = bR(a, t, il) : (CS(t), l = bR(a, t, il), Im(t, !1)), Nn(), l !== null) {
            Xn = l;
            return;
          }
        } else {
          var s = S1(a, t);
          if (s !== null) {
            s.flags &= Xv, Xn = s;
            return;
          }
          if ((t.mode & cn) !== Et) {
            Im(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ms, i.subtreeFlags = St, i.deletions = null;
          else {
            kr = sE, Xn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Xn = v;
          return;
        }
        t = i, Xn = t;
      } while (t !== null);
      kr === Gl && (kr = HR);
    }
    function dc(e, t, a) {
      var i = $a(), l = Zr.transition;
      try {
        Zr.transition = null, nr(Vr), TO(e, t, a, i);
      } finally {
        Zr.transition = l, nr(i);
      }
      return null;
    }
    function TO(e, t, a, i) {
      do
        Kl();
      while (Gu !== null);
      if (AO(), (en & (Jr | Ii)) !== Or)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Ld(s), l === null)
        return Nd(), null;
      if (s === ze && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ze, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = on;
      var f = Ft(l.lanes, l.childLanes);
      qd(e, f), e === Oa && (Oa = null, Xn = null, Dr = ze), ((l.subtreeFlags & eo) !== St || (l.flags & eo) !== St) && (cc || (cc = !0, vE = a, wE(to, function() {
        return Kl(), null;
      })));
      var p = (l.subtreeFlags & (Ao | Uo | jo | eo)) !== St, v = (l.flags & (Ao | Uo | jo | eo)) !== St;
      if (p || v) {
        var C = Zr.transition;
        Zr.transition = null;
        var x = $a();
        nr(Vr);
        var q = en;
        en |= Ii, uE.current = null, w1(e, l), I0(), j1(e, l, s), UT(e.containerInfo), e.current = l, Es(s), H1(l, e, s), bs(), Od(), en = q, nr(x), Zr.transition = C;
      } else
        e.current = l, I0();
      var $ = cc;
      if (cc ? (cc = !1, Gu = e, ev = s) : (Kf = 0, ty = null), f = e.pendingLanes, f === ze && (Xf = null), $ || nC(e.current, !1), kd(l.stateNode, i), ua && e.memoizedUpdaters.clear(), aO(), Xa(e, sr()), t !== null)
        for (var ie = e.onRecoverableError, se = 0; se < t.length; se++) {
          var Ee = t[se], nt = Ee.stack, Rt = Ee.digest;
          ie(Ee.value, {
            componentStack: nt,
            digest: Rt
          });
        }
      if (Jm) {
        Jm = !1;
        var mt = dE;
        throw dE = null, mt;
      }
      return ca(ev, Ot) && e.tag !== ju && Kl(), f = e.pendingLanes, ca(f, Ot) ? (k_(), e === hE ? tv++ : (tv = 0, hE = e)) : tv = 0, Hu(), Nd(), null;
    }
    function Kl() {
      if (Gu !== null) {
        var e = vh(ev), t = As(Va, e), a = Zr.transition, i = $a();
        try {
          return Zr.transition = null, nr(t), _O();
        } finally {
          nr(i), Zr.transition = a;
        }
      }
      return !1;
    }
    function xO(e) {
      pE.push(e), cc || (cc = !0, wE(to, function() {
        return Kl(), null;
      }));
    }
    function _O() {
      if (Gu === null)
        return !1;
      var e = vE;
      vE = null;
      var t = Gu, a = ev;
      if (Gu = null, ev = ze, (en & (Jr | Ii)) !== Or)
        throw new Error("Cannot flush passive effects while already rendering.");
      mE = !0, ey = !1, Tl(a);
      var i = en;
      en |= Ii, q1(t.current), V1(t, t.current, a, e);
      {
        var l = pE;
        pE = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          O1(t, f);
        }
      }
      Ud(), nC(t.current, !0), en = i, Hu(), ey ? t === ty ? Kf++ : (Kf = 0, ty = t) : Kf = 0, mE = !1, ey = !1, zd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function JR(e) {
      return Xf !== null && Xf.has(e);
    }
    function OO(e) {
      Xf === null ? Xf = /* @__PURE__ */ new Set([e]) : Xf.add(e);
    }
    function DO(e) {
      Jm || (Jm = !0, dE = e);
    }
    var kO = DO;
    function eC(e, t, a) {
      var i = lc(a, t), l = K0(e, i, Ot), s = Bu(e, l, Ot), f = Da();
      s !== null && (xu(s, Ot, f), Xa(s, f));
    }
    function Pn(e, t, a) {
      if (b1(a), iv(!1), e.tag === V) {
        eC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === V) {
          eC(i, e, a);
          return;
        } else if (i.tag === Y) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !JR(s)) {
            var f = lc(a, e), p = BS(i, f, Ot), v = Bu(i, p, Ot), C = Da();
            v !== null && (xu(v, Ot, C), Xa(v, C));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function zO(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Da();
      sf(e, a), FO(e), Oa === e && Nl(Dr, a) && (kr === Qp || kr === Xm && Ll(Dr) && sr() - fE < FR ? fc(e, ze) : Zm = Ft(Zm, a)), Xa(e, l);
    }
    function tC(e, t) {
      t === on && (t = fO(e));
      var a = Da(), i = Ya(e, t);
      i !== null && (xu(i, t, a), Xa(i, a));
    }
    function MO(e) {
      var t = e.memoizedState, a = on;
      t !== null && (a = t.retryLane), tC(e, a);
    }
    function LO(e, t) {
      var a = on, i;
      switch (e.tag) {
        case b:
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
      i !== null && i.delete(t), tC(e, a);
    }
    function NO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : lO(e / 1960) * 1960;
    }
    function PO() {
      if (tv > sO)
        throw tv = 0, hE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kf > cO && (Kf = 0, ty = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function AO() {
      co.flushLegacyContextWarning(), co.flushPendingUnsafeLifecycleWarnings();
    }
    function nC(e, t) {
      Sn(e), oy(e, Po, tO), t && oy(e, Di, nO), oy(e, Po, J1), t && oy(e, Di, eO), Nn();
    }
    function oy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== St ? i = i.child : ((i.flags & t) !== St && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ly = null;
    function rC(e) {
      {
        if ((en & Jr) !== Or || !(e.mode & qt))
          return;
        var t = e.tag;
        if (t !== ce && t !== V && t !== Y && t !== B && t !== T && t !== D && t !== P)
          return;
        var a = Nt(e) || "ReactComponent";
        if (ly !== null) {
          if (ly.has(a))
            return;
          ly.add(a);
        } else
          ly = /* @__PURE__ */ new Set([a]);
        var i = Sr;
        try {
          Sn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Sn(e) : Nn();
        }
      }
    }
    var bE;
    {
      var UO = null;
      bE = function(e, t, a) {
        var i = fC(UO, t);
        try {
          return mR(e, t, a);
        } catch (s) {
          if (Qx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (vm(), g0(), RR(e, t), fC(t, i), t.mode & cn && CS(t), No(null, mR, null, e, t, a), Zi()) {
            var l = hs();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var aC = !1, RE;
    RE = /* @__PURE__ */ new Set();
    function jO(e) {
      if (Ri && !__())
        switch (e.tag) {
          case B:
          case T:
          case P: {
            var t = Xn && Nt(Xn) || "Unknown", a = t;
            if (!RE.has(a)) {
              RE.add(a);
              var i = Nt(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Y: {
            aC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), aC = !0);
            break;
          }
        }
    }
    function av(e, t) {
      if (ua) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ns(e, i, t);
        });
      }
    }
    var CE = {};
    function wE(e, t) {
      {
        var a = So.current;
        return a !== null ? (a.push(t), CE) : xd(e, t);
      }
    }
    function iC(e) {
      if (e !== CE)
        return Zv(e);
    }
    function oC() {
      return So.current !== null;
    }
    function HO(e) {
      {
        if (e.mode & qt) {
          if (!UR())
            return;
        } else if (!oO() || en !== Or || e.tag !== B && e.tag !== T && e.tag !== P)
          return;
        if (So.current === null) {
          var t = Sr;
          try {
            Sn(e), S(`An update to %s inside a test was not wrapped in act(...).

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
    function FO(e) {
      e.tag !== ju && UR() && So.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function iv(e) {
      IR = e;
    }
    var $i = null, Zf = null, BO = function(e) {
      $i = e;
    };
    function Jf(e) {
      {
        if ($i === null)
          return e;
        var t = $i(e);
        return t === void 0 ? e : t.current;
      }
    }
    function TE(e) {
      return Jf(e);
    }
    function xE(e) {
      {
        if ($i === null)
          return e;
        var t = $i(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Jf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: De,
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
    function lC(e, t) {
      {
        if ($i === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Y: {
            typeof i == "function" && (l = !0);
            break;
          }
          case B: {
            (typeof i == "function" || s === Pt) && (l = !0);
            break;
          }
          case T: {
            (s === De || s === Pt) && (l = !0);
            break;
          }
          case D:
          case P: {
            (s === jt || s === Pt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = $i(a);
          if (f !== void 0 && f === $i(i))
            return !0;
        }
        return !1;
      }
    }
    function uC(e) {
      {
        if ($i === null || typeof WeakSet != "function")
          return;
        Zf === null && (Zf = /* @__PURE__ */ new WeakSet()), Zf.add(e);
      }
    }
    var VO = function(e, t) {
      {
        if ($i === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Kl(), Xl(function() {
          _E(e.current, i, a);
        });
      }
    }, IO = function(e, t) {
      {
        if (e.context !== vi)
          return;
        Kl(), Xl(function() {
          ov(t, e, null, null);
        });
      }
    };
    function _E(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case B:
          case P:
          case Y:
            v = p;
            break;
          case T:
            v = p.render;
            break;
        }
        if ($i === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, x = !1;
        if (v !== null) {
          var q = $i(v);
          q !== void 0 && (a.has(q) ? x = !0 : t.has(q) && (f === Y ? x = !0 : C = !0));
        }
        if (Zf !== null && (Zf.has(e) || i !== null && Zf.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || C) {
          var $ = Ya(e, Ot);
          $ !== null && zr($, e, Ot, On);
        }
        l !== null && !x && _E(l, t, a), s !== null && _E(s, t, a);
      }
    }
    var $O = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return OE(e.current, i, a), a;
      }
    };
    function OE(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case B:
          case P:
          case Y:
            p = f;
            break;
          case T:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? WO(e, a) : i !== null && OE(i, t, a), l !== null && OE(l, t, a);
      }
    }
    function WO(e, t) {
      {
        var a = qO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case he:
              t.add(i.stateNode);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
            case V:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function qO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === he)
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
    var DE;
    {
      DE = !1;
      try {
        var sC = Object.preventExtensions({});
      } catch {
        DE = !0;
      }
    }
    function YO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = St, this.subtreeFlags = St, this.deletions = null, this.lanes = ze, this.childLanes = ze, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !DE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var hi = function(e, t, a, i) {
      return new YO(e, t, a, i);
    };
    function kE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function GO(e) {
      return typeof e == "function" && !kE(e) && e.defaultProps === void 0;
    }
    function QO(e) {
      if (typeof e == "function")
        return kE(e) ? Y : B;
      if (e != null) {
        var t = e.$$typeof;
        if (t === De)
          return T;
        if (t === jt)
          return D;
      }
      return ce;
    }
    function pc(e, t) {
      var a = e.alternate;
      a === null ? (a = hi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = St, a.subtreeFlags = St, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ce:
        case B:
        case P:
          a.type = Jf(e.type);
          break;
        case Y:
          a.type = TE(e.type);
          break;
        case T:
          a.type = xE(e.type);
          break;
      }
      return a;
    }
    function XO(e, t) {
      e.flags &= Jn | Hn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ze, e.lanes = t, e.child = null, e.subtreeFlags = St, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function KO(e, t, a) {
      var i;
      return e === am ? (i = qt, t === !0 && (i |= Rn, i |= fn)) : i = Et, ua && (i |= cn), hi(V, null, null, i);
    }
    function zE(e, t, a, i, l, s) {
      var f = ce, p = e;
      if (typeof e == "function")
        kE(e) ? (f = Y, p = TE(p)) : p = Jf(p);
      else if (typeof e == "string")
        f = he;
      else
        e: switch (e) {
          case gi:
            return Ku(a.children, l, s, t);
          case ei:
            f = K, l |= Rn, (l & qt) !== Et && (l |= fn);
            break;
          case Si:
            return ZO(a, l, s, t);
          case Ze:
            return JO(a, l, s, t);
          case st:
            return eD(a, l, s, t);
          case $n:
            return cC(a, l, s, t);
          case kn:
          // eslint-disable-next-line no-fallthrough
          case Gt:
          // eslint-disable-next-line no-fallthrough
          case Ln:
          // eslint-disable-next-line no-fallthrough
          case gr:
          // eslint-disable-next-line no-fallthrough
          case Wt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ei:
                  f = g;
                  break e;
                case N:
                  f = k;
                  break e;
                case De:
                  f = T, p = xE(p);
                  break e;
                case jt:
                  f = D;
                  break e;
                case Pt:
                  f = fe, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? Nt(i) : null;
              C && (v += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var x = hi(f, a, t, l);
      return x.elementType = e, x.type = p, x.lanes = s, x._debugOwner = i, x;
    }
    function ME(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, p = zE(l, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ku(e, t, a, i) {
      var l = hi(ye, e, i, t);
      return l.lanes = a, l;
    }
    function ZO(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = hi(w, e, i, t | cn);
      return l.elementType = Si, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function JO(e, t, a, i) {
      var l = hi(b, e, i, t);
      return l.elementType = Ze, l.lanes = a, l;
    }
    function eD(e, t, a, i) {
      var l = hi(Pe, e, i, t);
      return l.elementType = st, l.lanes = a, l;
    }
    function cC(e, t, a, i) {
      var l = hi(Se, e, i, t);
      l.elementType = $n, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function LE(e, t, a) {
      var i = hi(Ue, e, null, t);
      return i.lanes = a, i;
    }
    function tD() {
      var e = hi(he, null, null, Et);
      return e.elementType = "DELETED", e;
    }
    function nD(e) {
      var t = hi(_e, null, null, Et);
      return t.stateNode = e, t;
    }
    function NE(e, t, a) {
      var i = e.children !== null ? e.children : [], l = hi(ne, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function fC(e, t) {
      return e === null && (e = hi(ce, null, null, Et)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function rD(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = hg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = on, this.eventTimes = Ls(ze), this.expirationTimes = Ls(On), this.pendingLanes = ze, this.suspendedLanes = ze, this.pingedLanes = ze, this.expiredLanes = ze, this.mutableReadLanes = ze, this.finishedLanes = ze, this.entangledLanes = ze, this.entanglements = Ls(ze), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _l; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case am:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ju:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function dC(e, t, a, i, l, s, f, p, v, C) {
      var x = new rD(e, t, a, p, v), q = KO(t, s);
      x.current = q, q.stateNode = x;
      {
        var $ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        q.memoizedState = $;
      }
      return Yg(q), x;
    }
    var PE = "18.3.1";
    function aD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return F(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: yr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var AE, UE;
    AE = !1, UE = {};
    function pC(e) {
      if (!e)
        return vi;
      var t = Eu(e), a = Fx(t);
      if (t.tag === Y) {
        var i = t.type;
        if (Zo(i))
          return Fb(t, i, a);
      }
      return a;
    }
    function iD(e, t) {
      {
        var a = Eu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = oa(a);
        if (l === null)
          return null;
        if (l.mode & Rn) {
          var s = Nt(a) || "Component";
          if (!UE[s]) {
            UE[s] = !0;
            var f = Sr;
            try {
              Sn(l), a.mode & Rn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Sn(f) : Nn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function vC(e, t, a, i, l, s, f, p) {
      var v = !1, C = null;
      return dC(e, t, v, C, a, i, l, s, f);
    }
    function hC(e, t, a, i, l, s, f, p, v, C) {
      var x = !0, q = dC(a, i, x, e, l, s, f, p, v);
      q.context = pC(null);
      var $ = q.current, ie = Da(), se = Qu($), Ee = ql(ie, se);
      return Ee.callback = t ?? null, Bu($, Ee, se), dO(q, se, ie), q;
    }
    function ov(e, t, a, i) {
      Dd(t, e);
      var l = t.current, s = Da(), f = Qu(l);
      Bn(f);
      var p = pC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Ri && Sr !== null && !AE && (AE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Nt(Sr) || "Unknown"));
      var v = ql(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var C = Bu(l, v, f);
      return C !== null && (zr(C, l, f, s), Sm(C, l, f)), f;
    }
    function uy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case he:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function oD(e) {
      switch (e.tag) {
        case V: {
          var t = e.stateNode;
          if (ff(t)) {
            var a = ah(t);
            mO(t, a);
          }
          break;
        }
        case b: {
          Xl(function() {
            var l = Ya(e, Ot);
            if (l !== null) {
              var s = Da();
              zr(l, e, Ot, s);
            }
          });
          var i = Ot;
          jE(e, i);
          break;
        }
      }
    }
    function mC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = sh(a.retryLane, t));
    }
    function jE(e, t) {
      mC(e, t);
      var a = e.alternate;
      a && mC(a, t);
    }
    function lD(e) {
      if (e.tag === b) {
        var t = _s, a = Ya(e, t);
        if (a !== null) {
          var i = Da();
          zr(a, e, t, i);
        }
        jE(e, t);
      }
    }
    function uD(e) {
      if (e.tag === b) {
        var t = Qu(e), a = Ya(e, t);
        if (a !== null) {
          var i = Da();
          zr(a, e, t, i);
        }
        jE(e, t);
      }
    }
    function yC(e) {
      var t = An(e);
      return t === null ? null : t.stateNode;
    }
    var gC = function(e) {
      return null;
    };
    function sD(e) {
      return gC(e);
    }
    var SC = function(e) {
      return !1;
    };
    function cD(e) {
      return SC(e);
    }
    var EC = null, bC = null, RC = null, CC = null, wC = null, TC = null, xC = null, _C = null, OC = null;
    {
      var DC = function(e, t, a) {
        var i = t[a], l = It(e) ? e.slice() : Vt({}, e);
        return a + 1 === t.length ? (It(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = DC(e[i], t, a + 1), l);
      }, kC = function(e, t) {
        return DC(e, t, 0);
      }, zC = function(e, t, a, i) {
        var l = t[i], s = It(e) ? e.slice() : Vt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], It(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = zC(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, MC = function(e, t, a) {
        if (t.length !== a.length) {
          H("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              H("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return zC(e, t, a, 0);
      }, LC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = It(e) ? e.slice() : Vt({}, e);
        return s[l] = LC(e[l], t, a + 1, i), s;
      }, NC = function(e, t, a) {
        return LC(e, t, 0, a);
      }, HE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      EC = function(e, t, a, i) {
        var l = HE(e, t);
        if (l !== null) {
          var s = NC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Vt({}, e.memoizedProps);
          var f = Ya(e, Ot);
          f !== null && zr(f, e, Ot, On);
        }
      }, bC = function(e, t, a) {
        var i = HE(e, t);
        if (i !== null) {
          var l = kC(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Vt({}, e.memoizedProps);
          var s = Ya(e, Ot);
          s !== null && zr(s, e, Ot, On);
        }
      }, RC = function(e, t, a, i) {
        var l = HE(e, t);
        if (l !== null) {
          var s = MC(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Vt({}, e.memoizedProps);
          var f = Ya(e, Ot);
          f !== null && zr(f, e, Ot, On);
        }
      }, CC = function(e, t, a) {
        e.pendingProps = NC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ot);
        i !== null && zr(i, e, Ot, On);
      }, wC = function(e, t) {
        e.pendingProps = kC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ya(e, Ot);
        a !== null && zr(a, e, Ot, On);
      }, TC = function(e, t, a) {
        e.pendingProps = MC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ya(e, Ot);
        i !== null && zr(i, e, Ot, On);
      }, xC = function(e) {
        var t = Ya(e, Ot);
        t !== null && zr(t, e, Ot, On);
      }, _C = function(e) {
        gC = e;
      }, OC = function(e) {
        SC = e;
      };
    }
    function fD(e) {
      var t = oa(e);
      return t === null ? null : t.stateNode;
    }
    function dD(e) {
      return null;
    }
    function pD() {
      return Sr;
    }
    function vD(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return Cu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: EC,
        overrideHookStateDeletePath: bC,
        overrideHookStateRenamePath: RC,
        overrideProps: CC,
        overridePropsDeletePath: wC,
        overridePropsRenamePath: TC,
        setErrorHandler: _C,
        setSuspenseHandler: OC,
        scheduleUpdate: xC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: fD,
        findFiberByHostInstance: t || dD,
        // React Refresh
        findHostInstancesForRefresh: $O,
        scheduleRefresh: VO,
        scheduleRoot: IO,
        setRefreshHandler: BO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: pD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: PE
      });
    }
    var PC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function FE(e) {
      this._internalRoot = e;
    }
    sy.prototype.render = FE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : cy(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Kn) {
          var i = yC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ov(e, t, null, null);
    }, sy.prototype.unmount = FE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        YR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xl(function() {
          ov(null, e, null, null);
        }), Pb(t);
      }
    };
    function hD(e, t) {
      if (!cy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      AC(e);
      var a = !1, i = !1, l = "", s = PC;
      t != null && (t.hydrate ? H("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = vC(e, am, null, a, i, l, s);
      Kh(f.current, e);
      var p = e.nodeType === Kn ? e.parentNode : e;
      return dp(p), new FE(f);
    }
    function sy(e) {
      this._internalRoot = e;
    }
    function mD(e) {
      e && Sh(e);
    }
    sy.prototype.unstable_scheduleHydration = mD;
    function yD(e, t, a) {
      if (!cy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      AC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = PC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var C = hC(t, null, e, am, i, s, f, p, v);
      if (Kh(C.current, e), dp(e), l)
        for (var x = 0; x < l.length; x++) {
          var q = l[x];
          b_(C, q);
        }
      return new sy(C);
    }
    function cy(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === Ki || e.nodeType === vd));
    }
    function lv(e) {
      return !!(e && (e.nodeType === ra || e.nodeType === Ki || e.nodeType === vd || e.nodeType === Kn && e.nodeValue === " react-mount-point-unstable "));
    }
    function AC(e) {
      e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var gD = m.ReactCurrentOwner, UC;
    UC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Kn) {
        var t = yC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = BE(e), l = !!(i && Au(i));
      l && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ra && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function BE(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function jC() {
    }
    function SD(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var $ = uy(f);
            s.call($);
          };
        }
        var f = hC(
          t,
          i,
          e,
          ju,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          jC
        );
        e._reactRootContainer = f, Kh(f.current, e);
        var p = e.nodeType === Kn ? e.parentNode : e;
        return dp(p), Xl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var $ = uy(x);
            C.call($);
          };
        }
        var x = vC(
          e,
          ju,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          jC
        );
        e._reactRootContainer = x, Kh(x.current, e);
        var q = e.nodeType === Kn ? e.parentNode : e;
        return dp(q), Xl(function() {
          ov(t, x, a, i);
        }), x;
      }
    }
    function ED(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function fy(e, t, a, i, l) {
      UC(a), ED(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = SD(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var p = l;
          l = function() {
            var v = uy(f);
            p.call(v);
          };
        }
        ov(t, f, e, l);
      }
      return uy(f);
    }
    var HC = !1;
    function bD(e) {
      {
        HC || (HC = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = gD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nn(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ra ? e : iD(e, "findDOMNode");
    }
    function RD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return fy(null, e, t, !0, a);
    }
    function CD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return fy(null, e, t, !1, a);
    }
    function wD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !jy(e))
        throw new Error("parentComponent must be a valid React Component");
      return fy(e, t, a, !1, i);
    }
    var FC = !1;
    function TD(e) {
      if (FC || (FC = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = BE(e), i = a && !Au(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xl(function() {
          fy(null, null, e, !1, function() {
            e._reactRootContainer = null, Pb(e);
          });
        }), !0;
      } else {
        {
          var l = BE(e), s = !!(l && Au(l)), f = e.nodeType === ra && lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Nr(oD), _u(lD), hh(uD), js($a), Qd(dh), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), _c(_T), Uy(gE, yO, Xl);
    function xD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!cy(t))
        throw new Error("Target container is not a DOM element.");
      return aD(e, t, null, a);
    }
    function _D(e, t, a, i) {
      return wD(e, t, a, i);
    }
    var VE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Au, kf, Zh, mu, Oc, gE]
    };
    function OD(e, t) {
      return VE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), hD(e, t);
    }
    function DD(e, t, a) {
      return VE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), yD(e, t, a);
    }
    function kD(e) {
      return YR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xl(e);
    }
    var zD = vD({
      findFiberByHostInstance: Zs,
      bundleType: 1,
      version: PE,
      rendererPackageName: "react-dom"
    });
    if (!zD && rt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var BC = window.location.protocol;
      /^(https?|file):$/.test(BC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (BC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VE, Za.createPortal = xD, Za.createRoot = OD, Za.findDOMNode = bD, Za.flushSync = kD, Za.hydrate = RD, Za.hydrateRoot = DD, Za.render = CD, Za.unmountComponentAtNode = TD, Za.unstable_batchedUpdates = gE, Za.unstable_renderSubtreeIntoContainer = _D, Za.version = PE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Za;
}
var JC;
function by() {
  if (JC) return vy.exports;
  JC = 1;
  function y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (R) {
        console.error(R);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (y(), vy.exports = VD()) : vy.exports = ID(), vy.exports;
}
var ew;
function $D() {
  if (ew) return td;
  ew = 1;
  var y = by();
  if (process.env.NODE_ENV === "production")
    td.createRoot = y.createRoot, td.hydrateRoot = y.hydrateRoot;
  else {
    var R = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    td.createRoot = function(m, _) {
      R.usingClientEntryPoint = !0;
      try {
        return y.createRoot(m, _);
      } finally {
        R.usingClientEntryPoint = !1;
      }
    }, td.hydrateRoot = function(m, _, Q) {
      R.usingClientEntryPoint = !0;
      try {
        return y.hydrateRoot(m, _, Q);
      } finally {
        R.usingClientEntryPoint = !1;
      }
    };
  }
  return td;
}
var WD = $D();
const qD = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;-webkit-user-select:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', YD = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", GD = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var Eo = Sa(), WE = { exports: {} }, fv = {}, Ev = { exports: {} }, QD = Ev.exports, tw;
function ab() {
  return tw || (tw = 1, function(y, R) {
    (function(m, _) {
      _(R);
    })(QD, function(m) {
      function _(pe) {
        return function(je, rt, we, ht, zt, $t, Mt) {
          return pe(je, rt, Mt);
        };
      }
      function Q(pe) {
        return function(je, rt, we, ht) {
          if (!je || !rt || typeof je != "object" || typeof rt != "object")
            return pe(je, rt, we, ht);
          var zt = ht.get(je), $t = ht.get(rt);
          if (zt && $t)
            return zt === rt && $t === je;
          ht.set(je, rt), ht.set(rt, je);
          var Mt = pe(je, rt, we, ht);
          return ht.delete(je), ht.delete(rt), Mt;
        };
      }
      function H(pe, Re) {
        var je = {};
        for (var rt in pe)
          je[rt] = pe[rt];
        for (var rt in Re)
          je[rt] = Re[rt];
        return je;
      }
      function S(pe) {
        return pe.constructor === Object || pe.constructor == null;
      }
      function le(pe) {
        return typeof pe.then == "function";
      }
      function B(pe, Re) {
        return pe === Re || pe !== pe && Re !== Re;
      }
      var Y = "[object Arguments]", ce = "[object Boolean]", V = "[object Date]", ne = "[object RegExp]", he = "[object Map]", Ue = "[object Number]", ye = "[object Object]", K = "[object Set]", k = "[object String]", g = Object.prototype.toString;
      function T(pe) {
        var Re = pe.areArraysEqual, je = pe.areDatesEqual, rt = pe.areMapsEqual, we = pe.areObjectsEqual, ht = pe.areRegExpsEqual, zt = pe.areSetsEqual, $t = pe.createIsNestedEqual, Mt = $t(F);
        function F(j, X, ve) {
          if (j === X)
            return !0;
          if (!j || !X || typeof j != "object" || typeof X != "object")
            return j !== j && X !== X;
          if (S(j) && S(X))
            return we(j, X, Mt, ve);
          var Je = Array.isArray(j), et = Array.isArray(X);
          if (Je || et)
            return Je === et && Re(j, X, Mt, ve);
          var Ge = g.call(j);
          return Ge !== g.call(X) ? !1 : Ge === V ? je(j, X, Mt, ve) : Ge === ne ? ht(j, X, Mt, ve) : Ge === he ? rt(j, X, Mt, ve) : Ge === K ? zt(j, X, Mt, ve) : Ge === ye || Ge === Y ? le(j) || le(X) ? !1 : we(j, X, Mt, ve) : Ge === ce || Ge === Ue || Ge === k ? B(j.valueOf(), X.valueOf()) : !1;
        }
        return F;
      }
      function w(pe, Re, je, rt) {
        var we = pe.length;
        if (Re.length !== we)
          return !1;
        for (; we-- > 0; )
          if (!je(pe[we], Re[we], we, we, pe, Re, rt))
            return !1;
        return !0;
      }
      var b = Q(w);
      function D(pe, Re) {
        return B(pe.valueOf(), Re.valueOf());
      }
      function P(pe, Re, je, rt) {
        var we = pe.size === Re.size;
        if (!we)
          return !1;
        if (!pe.size)
          return !0;
        var ht = {}, zt = 0;
        return pe.forEach(function($t, Mt) {
          if (we) {
            var F = !1, j = 0;
            Re.forEach(function(X, ve) {
              !F && !ht[j] && (F = je(Mt, ve, zt, j, pe, Re, rt) && je($t, X, Mt, ve, pe, Re, rt)) && (ht[j] = !0), j++;
            }), zt++, we = F;
          }
        }), we;
      }
      var fe = Q(P), de = "_owner", _e = Object.prototype.hasOwnProperty;
      function Pe(pe, Re, je, rt) {
        var we = Object.keys(pe), ht = we.length;
        if (Object.keys(Re).length !== ht)
          return !1;
        for (var zt; ht-- > 0; ) {
          if (zt = we[ht], zt === de) {
            var $t = !!pe.$$typeof, Mt = !!Re.$$typeof;
            if (($t || Mt) && $t !== Mt)
              return !1;
          }
          if (!_e.call(Re, zt) || !je(pe[zt], Re[zt], zt, zt, pe, Re, rt))
            return !1;
        }
        return !0;
      }
      var ke = Q(Pe);
      function Se(pe, Re) {
        return pe.source === Re.source && pe.flags === Re.flags;
      }
      function qe(pe, Re, je, rt) {
        var we = pe.size === Re.size;
        if (!we)
          return !1;
        if (!pe.size)
          return !0;
        var ht = {};
        return pe.forEach(function(zt, $t) {
          if (we) {
            var Mt = !1, F = 0;
            Re.forEach(function(j, X) {
              !Mt && !ht[F] && (Mt = je(zt, j, $t, X, pe, Re, rt)) && (ht[F] = !0), F++;
            }), we = Mt;
          }
        }), we;
      }
      var Qe = Q(qe), Ie = Object.freeze({
        areArraysEqual: w,
        areDatesEqual: D,
        areMapsEqual: P,
        areObjectsEqual: Pe,
        areRegExpsEqual: Se,
        areSetsEqual: qe,
        createIsNestedEqual: _
      }), xe = Object.freeze({
        areArraysEqual: b,
        areDatesEqual: D,
        areMapsEqual: fe,
        areObjectsEqual: ke,
        areRegExpsEqual: Se,
        areSetsEqual: Qe,
        createIsNestedEqual: _
      }), ge = T(Ie);
      function Be(pe, Re) {
        return ge(pe, Re, void 0);
      }
      var I = T(H(Ie, { createIsNestedEqual: function() {
        return B;
      } }));
      function O(pe, Re) {
        return I(pe, Re, void 0);
      }
      var G = T(xe);
      function Ae(pe, Re) {
        return G(pe, Re, /* @__PURE__ */ new WeakMap());
      }
      var Oe = T(H(xe, {
        createIsNestedEqual: function() {
          return B;
        }
      }));
      function Ye(pe, Re) {
        return Oe(pe, Re, /* @__PURE__ */ new WeakMap());
      }
      function $e(pe) {
        return T(H(Ie, pe(Ie)));
      }
      function We(pe) {
        var Re = T(H(xe, pe(xe)));
        return function(je, rt, we) {
          return we === void 0 && (we = /* @__PURE__ */ new WeakMap()), Re(je, rt, we);
        };
      }
      m.circularDeepEqual = Ae, m.circularShallowEqual = Ye, m.createCustomCircularEqual = We, m.createCustomEqual = $e, m.deepEqual = Be, m.sameValueZeroEqual = B, m.shallowEqual = O, Object.defineProperty(m, "__esModule", { value: !0 });
    });
  }(Ev, Ev.exports)), Ev.exports;
}
var my = { exports: {} }, nw;
function Ty() {
  if (nw) return my.exports;
  nw = 1;
  function y(m) {
    var _, Q, H = "";
    if (typeof m == "string" || typeof m == "number") H += m;
    else if (typeof m == "object") if (Array.isArray(m)) {
      var S = m.length;
      for (_ = 0; _ < S; _++) m[_] && (Q = y(m[_])) && (H && (H += " "), H += Q);
    } else for (Q in m) m[Q] && (H && (H += " "), H += Q);
    return H;
  }
  function R() {
    for (var m, _, Q = 0, H = "", S = arguments.length; Q < S; Q++) (m = arguments[Q]) && (_ = y(m)) && (H && (H += " "), H += _);
    return H;
  }
  return my.exports = R, my.exports.clsx = R, my.exports;
}
var hn = {}, qE, rw;
function XD() {
  return rw || (rw = 1, qE = function(R, m, _) {
    return R === m ? !0 : R.className === m.className && _(R.style, m.style) && R.width === m.width && R.autoSize === m.autoSize && R.cols === m.cols && R.draggableCancel === m.draggableCancel && R.draggableHandle === m.draggableHandle && _(R.verticalCompact, m.verticalCompact) && _(R.compactType, m.compactType) && _(R.layout, m.layout) && _(R.margin, m.margin) && _(R.containerPadding, m.containerPadding) && R.rowHeight === m.rowHeight && R.maxRows === m.maxRows && R.isBounded === m.isBounded && R.isDraggable === m.isDraggable && R.isResizable === m.isResizable && R.allowOverlap === m.allowOverlap && R.preventCollision === m.preventCollision && R.useCSSTransforms === m.useCSSTransforms && R.transformScale === m.transformScale && R.isDroppable === m.isDroppable && _(R.resizeHandles, m.resizeHandles) && _(R.resizeHandle, m.resizeHandle) && R.onLayoutChange === m.onLayoutChange && R.onDragStart === m.onDragStart && R.onDrag === m.onDrag && R.onDragStop === m.onDragStop && R.onResizeStart === m.onResizeStart && R.onResize === m.onResize && R.onResizeStop === m.onResizeStop && R.onDrop === m.onDrop && _(R.droppingItem, m.droppingItem) && _(R.innerRef, m.innerRef);
  }), qE;
}
var aw;
function rd() {
  if (aw) return hn;
  aw = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.bottom = Y, hn.childrenEqual = Ue, hn.cloneLayout = ce, hn.cloneLayoutItem = he, hn.collides = K, hn.compact = k, hn.compactItem = w, hn.compactType = zt, hn.correctBounds = b, hn.fastPositionEqual = ye, hn.fastRGLPropsEqual = void 0, hn.getAllCollisions = fe, hn.getFirstCollision = P, hn.getLayoutItem = D, hn.getStatics = de, hn.modifyLayout = V, hn.moveElement = _e, hn.moveElementAwayFromCollision = Pe, hn.noop = void 0, hn.perc = ke, hn.resizeItemInDirection = $e, hn.setTopLeft = pe, hn.setTransform = We, hn.sortLayoutItems = Re, hn.sortLayoutItemsByColRow = rt, hn.sortLayoutItemsByRowCol = je, hn.synchronizeLayoutWithChildren = we, hn.validateLayout = ht, hn.withLayoutItem = ne;
  var y = /* @__PURE__ */ ab(), R = m(Sa());
  function m(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function _(F, j) {
    var X = Object.keys(F);
    if (Object.getOwnPropertySymbols) {
      var ve = Object.getOwnPropertySymbols(F);
      j && (ve = ve.filter(function(Je) {
        return Object.getOwnPropertyDescriptor(F, Je).enumerable;
      })), X.push.apply(X, ve);
    }
    return X;
  }
  function Q(F) {
    for (var j = 1; j < arguments.length; j++) {
      var X = arguments[j] != null ? arguments[j] : {};
      j % 2 ? _(Object(X), !0).forEach(function(ve) {
        H(F, ve, X[ve]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(X)) : _(Object(X)).forEach(function(ve) {
        Object.defineProperty(F, ve, Object.getOwnPropertyDescriptor(X, ve));
      });
    }
    return F;
  }
  function H(F, j, X) {
    return (j = S(j)) in F ? Object.defineProperty(F, j, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : F[j] = X, F;
  }
  function S(F) {
    var j = le(F, "string");
    return typeof j == "symbol" ? j : j + "";
  }
  function le(F, j) {
    if (typeof F != "object" || !F) return F;
    var X = F[Symbol.toPrimitive];
    if (X !== void 0) {
      var ve = X.call(F, j);
      if (typeof ve != "object") return ve;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (j === "string" ? String : Number)(F);
  }
  const B = process.env.NODE_ENV === "production";
  function Y(F) {
    let j = 0, X;
    for (let ve = 0, Je = F.length; ve < Je; ve++)
      X = F[ve].y + F[ve].h, X > j && (j = X);
    return j;
  }
  function ce(F) {
    const j = Array(F.length);
    for (let X = 0, ve = F.length; X < ve; X++)
      j[X] = he(F[X]);
    return j;
  }
  function V(F, j) {
    const X = Array(F.length);
    for (let ve = 0, Je = F.length; ve < Je; ve++)
      j.i === F[ve].i ? X[ve] = j : X[ve] = F[ve];
    return X;
  }
  function ne(F, j, X) {
    let ve = D(F, j);
    return ve ? (ve = X(he(ve)), F = V(F, ve), [F, ve]) : [F, null];
  }
  function he(F) {
    return {
      w: F.w,
      h: F.h,
      x: F.x,
      y: F.y,
      i: F.i,
      minW: F.minW,
      maxW: F.maxW,
      minH: F.minH,
      maxH: F.maxH,
      moved: !!F.moved,
      static: !!F.static,
      // These can be null/undefined
      isDraggable: F.isDraggable,
      isResizable: F.isResizable,
      resizeHandles: F.resizeHandles,
      isBounded: F.isBounded
    };
  }
  function Ue(F, j) {
    return (0, y.deepEqual)(R.default.Children.map(F, (X) => X == null ? void 0 : X.key), R.default.Children.map(j, (X) => X == null ? void 0 : X.key)) && (0, y.deepEqual)(R.default.Children.map(F, (X) => X == null ? void 0 : X.props["data-grid"]), R.default.Children.map(j, (X) => X == null ? void 0 : X.props["data-grid"]));
  }
  hn.fastRGLPropsEqual = XD();
  function ye(F, j) {
    return F.left === j.left && F.top === j.top && F.width === j.width && F.height === j.height;
  }
  function K(F, j) {
    return !(F.i === j.i || F.x + F.w <= j.x || F.x >= j.x + j.w || F.y + F.h <= j.y || F.y >= j.y + j.h);
  }
  function k(F, j, X, ve) {
    const Je = de(F);
    let et = Y(Je);
    const Ge = Re(F, j), _t = Array(F.length);
    for (let Ct = 0, Bt = Ge.length; Ct < Bt; Ct++) {
      let ln = he(Ge[Ct]);
      ln.static || (ln = w(Je, ln, j, X, Ge, ve, et), et = Math.max(et, ln.y + ln.h), Je.push(ln)), _t[F.indexOf(Ge[Ct])] = ln, ln.moved = !1;
    }
    return _t;
  }
  const g = {
    x: "w",
    y: "h"
  };
  function T(F, j, X, ve) {
    const Je = g[ve];
    j[ve] += 1;
    const et = F.map((Ge) => Ge.i).indexOf(j.i);
    for (let Ge = et + 1; Ge < F.length; Ge++) {
      const _t = F[Ge];
      if (!_t.static) {
        if (_t.y > j.y + j.h) break;
        K(j, _t) && T(F, _t, X + j[Je], ve);
      }
    }
    j[ve] = X;
  }
  function w(F, j, X, ve, Je, et, Ge) {
    const _t = X === "vertical", Ct = X === "horizontal";
    if (_t)
      for (typeof Ge == "number" ? j.y = Math.min(Ge, j.y) : j.y = Math.min(Y(F), j.y); j.y > 0 && !P(F, j); )
        j.y--;
    else if (Ct)
      for (; j.x > 0 && !P(F, j); )
        j.x--;
    let Bt;
    for (; (Bt = P(F, j)) && !(X === null && et); )
      if (Ct ? T(Je, j, Bt.x + Bt.w, "x") : T(Je, j, Bt.y + Bt.h, "y"), Ct && j.x + j.w > ve)
        for (j.x = ve - j.w, j.y++; j.x > 0 && !P(F, j); )
          j.x--;
    return j.y = Math.max(j.y, 0), j.x = Math.max(j.x, 0), j;
  }
  function b(F, j) {
    const X = de(F);
    for (let ve = 0, Je = F.length; ve < Je; ve++) {
      const et = F[ve];
      if (et.x + et.w > j.cols && (et.x = j.cols - et.w), et.x < 0 && (et.x = 0, et.w = j.cols), !et.static) X.push(et);
      else
        for (; P(X, et); )
          et.y++;
    }
    return F;
  }
  function D(F, j) {
    for (let X = 0, ve = F.length; X < ve; X++)
      if (F[X].i === j) return F[X];
  }
  function P(F, j) {
    for (let X = 0, ve = F.length; X < ve; X++)
      if (K(F[X], j)) return F[X];
  }
  function fe(F, j) {
    return F.filter((X) => K(X, j));
  }
  function de(F) {
    return F.filter((j) => j.static);
  }
  function _e(F, j, X, ve, Je, et, Ge, _t, Ct) {
    if (j.static && j.isDraggable !== !0 || j.y === ve && j.x === X) return F;
    "Moving element ".concat(j.i, " to [").concat(String(X), ",").concat(String(ve), "] from [").concat(j.x, ",").concat(j.y, "]");
    const Bt = j.x, ln = j.y;
    typeof X == "number" && (j.x = X), typeof ve == "number" && (j.y = ve), j.moved = !0;
    let z = Re(F, Ge);
    (Ge === "vertical" && typeof ve == "number" ? ln >= ve : Ge === "horizontal" && typeof X == "number" ? Bt >= X : !1) && (z = z.reverse());
    const A = fe(z, j), ae = A.length > 0;
    if (ae && Ct)
      return ce(F);
    if (ae && et)
      return "Collision prevented on ".concat(j.i, ", reverting."), j.x = Bt, j.y = ln, j.moved = !1, F;
    for (let Ce = 0, gt = A.length; Ce < gt; Ce++) {
      const ct = A[Ce];
      "Resolving collision between ".concat(j.i, " at [").concat(j.x, ",").concat(j.y, "] and ").concat(ct.i, " at [").concat(ct.x, ",").concat(ct.y, "]"), !ct.moved && (ct.static ? F = Pe(F, ct, j, Je, Ge) : F = Pe(F, j, ct, Je, Ge));
    }
    return F;
  }
  function Pe(F, j, X, ve, Je, et) {
    const Ge = Je === "horizontal", _t = Je === "vertical", Ct = j.static;
    if (ve) {
      ve = !1;
      const z = {
        x: Ge ? Math.max(j.x - X.w, 0) : X.x,
        y: _t ? Math.max(j.y - X.h, 0) : X.y,
        w: X.w,
        h: X.h,
        i: "-1"
      }, Z = P(F, z), A = Z && Z.y + Z.h > j.y, ae = Z && j.x + j.w > Z.x;
      if (Z) {
        if (A && _t)
          return _e(F, X, void 0, X.y + 1, ve, Ct, Je);
        if (A && Je == null)
          return j.y = X.y, X.y = X.y + X.h, F;
        if (ae && Ge)
          return _e(F, j, X.x, void 0, ve, Ct, Je);
      } else return "Doing reverse collision on ".concat(X.i, " up to [").concat(z.x, ",").concat(z.y, "]."), _e(F, X, Ge ? z.x : void 0, _t ? z.y : void 0, ve, Ct, Je);
    }
    const Bt = Ge ? X.x + 1 : void 0, ln = _t ? X.y + 1 : void 0;
    return Bt == null && ln == null ? F : _e(F, X, Ge ? X.x + 1 : void 0, _t ? X.y + 1 : void 0, ve, Ct, Je);
  }
  function ke(F) {
    return F * 100 + "%";
  }
  const Se = (F, j, X, ve) => F + X > ve ? j : X, qe = (F, j, X) => F < 0 ? j : X, Qe = (F) => Math.max(0, F), Ie = (F) => Math.max(0, F), xe = (F, j, X) => {
    let {
      left: ve,
      height: Je,
      width: et
    } = j;
    const Ge = F.top - (Je - F.height);
    return {
      left: ve,
      width: et,
      height: qe(Ge, F.height, Je),
      top: Ie(Ge)
    };
  }, ge = (F, j, X) => {
    let {
      top: ve,
      left: Je,
      height: et,
      width: Ge
    } = j;
    return {
      top: ve,
      height: et,
      width: Se(F.left, F.width, Ge, X),
      left: Qe(Je)
    };
  }, Be = (F, j, X) => {
    let {
      top: ve,
      height: Je,
      width: et
    } = j;
    const Ge = F.left - (et - F.width);
    return {
      height: Je,
      width: Ge < 0 ? F.width : Se(F.left, F.width, et, X),
      top: Ie(ve),
      left: Qe(Ge)
    };
  }, I = (F, j, X) => {
    let {
      top: ve,
      left: Je,
      height: et,
      width: Ge
    } = j;
    return {
      width: Ge,
      left: Je,
      height: qe(ve, F.height, et),
      top: Ie(ve)
    };
  }, Ye = {
    n: xe,
    ne: function() {
      return xe(arguments.length <= 0 ? void 0 : arguments[0], ge(...arguments));
    },
    e: ge,
    se: function() {
      return I(arguments.length <= 0 ? void 0 : arguments[0], ge(...arguments));
    },
    s: I,
    sw: function() {
      return I(arguments.length <= 0 ? void 0 : arguments[0], Be(...arguments));
    },
    w: Be,
    nw: function() {
      return xe(arguments.length <= 0 ? void 0 : arguments[0], Be(...arguments));
    }
  };
  function $e(F, j, X, ve) {
    const Je = Ye[F];
    return Je ? Je(j, Q(Q({}, j), X), ve) : X;
  }
  function We(F) {
    let {
      top: j,
      left: X,
      width: ve,
      height: Je
    } = F;
    const et = "translate(".concat(X, "px,").concat(j, "px)");
    return {
      transform: et,
      WebkitTransform: et,
      MozTransform: et,
      msTransform: et,
      OTransform: et,
      width: "".concat(ve, "px"),
      height: "".concat(Je, "px"),
      position: "absolute"
    };
  }
  function pe(F) {
    let {
      top: j,
      left: X,
      width: ve,
      height: Je
    } = F;
    return {
      top: "".concat(j, "px"),
      left: "".concat(X, "px"),
      width: "".concat(ve, "px"),
      height: "".concat(Je, "px"),
      position: "absolute"
    };
  }
  function Re(F, j) {
    return j === "horizontal" ? rt(F) : j === "vertical" ? je(F) : F;
  }
  function je(F) {
    return F.slice(0).sort(function(j, X) {
      return j.y > X.y || j.y === X.y && j.x > X.x ? 1 : j.y === X.y && j.x === X.x ? 0 : -1;
    });
  }
  function rt(F) {
    return F.slice(0).sort(function(j, X) {
      return j.x > X.x || j.x === X.x && j.y > X.y ? 1 : -1;
    });
  }
  function we(F, j, X, ve, Je) {
    F = F || [];
    const et = [];
    R.default.Children.forEach(j, (_t) => {
      if ((_t == null ? void 0 : _t.key) == null) return;
      const Ct = D(F, String(_t.key)), Bt = _t.props["data-grid"];
      Ct && Bt == null ? et.push(he(Ct)) : Bt ? (B || ht([Bt], "ReactGridLayout.children"), et.push(he(Q(Q({}, Bt), {}, {
        i: _t.key
      })))) : et.push(he({
        w: 1,
        h: 1,
        x: 0,
        y: Y(et),
        i: String(_t.key)
      }));
    });
    const Ge = b(et, {
      cols: X
    });
    return Je ? Ge : k(Ge, ve, X);
  }
  function ht(F) {
    let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const X = ["x", "y", "w", "h"];
    if (!Array.isArray(F)) throw new Error(j + " must be an array!");
    for (let ve = 0, Je = F.length; ve < Je; ve++) {
      const et = F[ve];
      for (let Ge = 0; Ge < X.length; Ge++) {
        const _t = X[Ge], Ct = et[_t];
        if (typeof Ct != "number" || Number.isNaN(Ct))
          throw new Error("ReactGridLayout: ".concat(j, "[").concat(ve, "].").concat(_t, " must be a number! Received: ").concat(Ct, " (").concat(typeof Ct, ")"));
      }
      if (typeof et.i < "u" && typeof et.i != "string")
        throw new Error("ReactGridLayout: ".concat(j, "[").concat(ve, "].i must be a string! Received: ").concat(et.i, " (").concat(typeof et.i, ")"));
    }
  }
  function zt(F) {
    const {
      verticalCompact: j,
      compactType: X
    } = F || {};
    return j === !1 ? null : X;
  }
  function $t() {
  }
  const Mt = () => {
  };
  return hn.noop = Mt, hn;
}
var Jl = {}, iw;
function ib() {
  if (iw) return Jl;
  iw = 1, Object.defineProperty(Jl, "__esModule", {
    value: !0
  }), Jl.calcGridColWidth = y, Jl.calcGridItemPosition = m, Jl.calcGridItemWHPx = R, Jl.calcWH = Q, Jl.calcXY = _, Jl.clamp = H;
  function y(S) {
    const {
      margin: le,
      containerPadding: B,
      containerWidth: Y,
      cols: ce
    } = S;
    return (Y - le[0] * (ce - 1) - B[0] * 2) / ce;
  }
  function R(S, le, B) {
    return Number.isFinite(S) ? Math.round(le * S + Math.max(0, S - 1) * B) : S;
  }
  function m(S, le, B, Y, ce, V) {
    const {
      margin: ne,
      containerPadding: he,
      rowHeight: Ue
    } = S, ye = y(S), K = {};
    return V && V.resizing ? (K.width = Math.round(V.resizing.width), K.height = Math.round(V.resizing.height)) : (K.width = R(Y, ye, ne[0]), K.height = R(ce, Ue, ne[1])), V && V.dragging ? (K.top = Math.round(V.dragging.top), K.left = Math.round(V.dragging.left)) : V && V.resizing && typeof V.resizing.top == "number" && typeof V.resizing.left == "number" ? (K.top = Math.round(V.resizing.top), K.left = Math.round(V.resizing.left)) : (K.top = Math.round((Ue + ne[1]) * B + he[1]), K.left = Math.round((ye + ne[0]) * le + he[0])), K;
  }
  function _(S, le, B, Y, ce) {
    const {
      margin: V,
      containerPadding: ne,
      cols: he,
      rowHeight: Ue,
      maxRows: ye
    } = S, K = y(S);
    let k = Math.round((B - ne[0]) / (K + V[0])), g = Math.round((le - ne[1]) / (Ue + V[1]));
    return k = H(k, 0, he - Y), g = H(g, 0, ye - ce), {
      x: k,
      y: g
    };
  }
  function Q(S, le, B, Y, ce, V) {
    const {
      margin: ne,
      maxRows: he,
      cols: Ue,
      rowHeight: ye
    } = S, K = y(S);
    let k = Math.round((le + ne[0]) / (K + ne[0])), g = Math.round((B + ne[1]) / (ye + ne[1])), T = H(k, 0, Ue - Y), w = H(g, 0, he - ce);
    return ["sw", "w", "nw"].indexOf(V) !== -1 && (T = H(k, 0, Ue)), ["nw", "n", "ne"].indexOf(V) !== -1 && (w = H(g, 0, he)), {
      w: T,
      h: w
    };
  }
  function H(S, le, B) {
    return Math.max(Math.min(S, B), le);
  }
  return Jl;
}
var dv = {}, yy = { exports: {} }, gy = { exports: {} }, Tn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ow;
function KD() {
  if (ow) return Tn;
  ow = 1;
  var y = typeof Symbol == "function" && Symbol.for, R = y ? Symbol.for("react.element") : 60103, m = y ? Symbol.for("react.portal") : 60106, _ = y ? Symbol.for("react.fragment") : 60107, Q = y ? Symbol.for("react.strict_mode") : 60108, H = y ? Symbol.for("react.profiler") : 60114, S = y ? Symbol.for("react.provider") : 60109, le = y ? Symbol.for("react.context") : 60110, B = y ? Symbol.for("react.async_mode") : 60111, Y = y ? Symbol.for("react.concurrent_mode") : 60111, ce = y ? Symbol.for("react.forward_ref") : 60112, V = y ? Symbol.for("react.suspense") : 60113, ne = y ? Symbol.for("react.suspense_list") : 60120, he = y ? Symbol.for("react.memo") : 60115, Ue = y ? Symbol.for("react.lazy") : 60116, ye = y ? Symbol.for("react.block") : 60121, K = y ? Symbol.for("react.fundamental") : 60117, k = y ? Symbol.for("react.responder") : 60118, g = y ? Symbol.for("react.scope") : 60119;
  function T(b) {
    if (typeof b == "object" && b !== null) {
      var D = b.$$typeof;
      switch (D) {
        case R:
          switch (b = b.type, b) {
            case B:
            case Y:
            case _:
            case H:
            case Q:
            case V:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case le:
                case ce:
                case Ue:
                case he:
                case S:
                  return b;
                default:
                  return D;
              }
          }
        case m:
          return D;
      }
    }
  }
  function w(b) {
    return T(b) === Y;
  }
  return Tn.AsyncMode = B, Tn.ConcurrentMode = Y, Tn.ContextConsumer = le, Tn.ContextProvider = S, Tn.Element = R, Tn.ForwardRef = ce, Tn.Fragment = _, Tn.Lazy = Ue, Tn.Memo = he, Tn.Portal = m, Tn.Profiler = H, Tn.StrictMode = Q, Tn.Suspense = V, Tn.isAsyncMode = function(b) {
    return w(b) || T(b) === B;
  }, Tn.isConcurrentMode = w, Tn.isContextConsumer = function(b) {
    return T(b) === le;
  }, Tn.isContextProvider = function(b) {
    return T(b) === S;
  }, Tn.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === R;
  }, Tn.isForwardRef = function(b) {
    return T(b) === ce;
  }, Tn.isFragment = function(b) {
    return T(b) === _;
  }, Tn.isLazy = function(b) {
    return T(b) === Ue;
  }, Tn.isMemo = function(b) {
    return T(b) === he;
  }, Tn.isPortal = function(b) {
    return T(b) === m;
  }, Tn.isProfiler = function(b) {
    return T(b) === H;
  }, Tn.isStrictMode = function(b) {
    return T(b) === Q;
  }, Tn.isSuspense = function(b) {
    return T(b) === V;
  }, Tn.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === _ || b === Y || b === H || b === Q || b === V || b === ne || typeof b == "object" && b !== null && (b.$$typeof === Ue || b.$$typeof === he || b.$$typeof === S || b.$$typeof === le || b.$$typeof === ce || b.$$typeof === K || b.$$typeof === k || b.$$typeof === g || b.$$typeof === ye);
  }, Tn.typeOf = T, Tn;
}
var xn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lw;
function ZD() {
  return lw || (lw = 1, process.env.NODE_ENV !== "production" && function() {
    var y = typeof Symbol == "function" && Symbol.for, R = y ? Symbol.for("react.element") : 60103, m = y ? Symbol.for("react.portal") : 60106, _ = y ? Symbol.for("react.fragment") : 60107, Q = y ? Symbol.for("react.strict_mode") : 60108, H = y ? Symbol.for("react.profiler") : 60114, S = y ? Symbol.for("react.provider") : 60109, le = y ? Symbol.for("react.context") : 60110, B = y ? Symbol.for("react.async_mode") : 60111, Y = y ? Symbol.for("react.concurrent_mode") : 60111, ce = y ? Symbol.for("react.forward_ref") : 60112, V = y ? Symbol.for("react.suspense") : 60113, ne = y ? Symbol.for("react.suspense_list") : 60120, he = y ? Symbol.for("react.memo") : 60115, Ue = y ? Symbol.for("react.lazy") : 60116, ye = y ? Symbol.for("react.block") : 60121, K = y ? Symbol.for("react.fundamental") : 60117, k = y ? Symbol.for("react.responder") : 60118, g = y ? Symbol.for("react.scope") : 60119;
    function T(we) {
      return typeof we == "string" || typeof we == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      we === _ || we === Y || we === H || we === Q || we === V || we === ne || typeof we == "object" && we !== null && (we.$$typeof === Ue || we.$$typeof === he || we.$$typeof === S || we.$$typeof === le || we.$$typeof === ce || we.$$typeof === K || we.$$typeof === k || we.$$typeof === g || we.$$typeof === ye);
    }
    function w(we) {
      if (typeof we == "object" && we !== null) {
        var ht = we.$$typeof;
        switch (ht) {
          case R:
            var zt = we.type;
            switch (zt) {
              case B:
              case Y:
              case _:
              case H:
              case Q:
              case V:
                return zt;
              default:
                var $t = zt && zt.$$typeof;
                switch ($t) {
                  case le:
                  case ce:
                  case Ue:
                  case he:
                  case S:
                    return $t;
                  default:
                    return ht;
                }
            }
          case m:
            return ht;
        }
      }
    }
    var b = B, D = Y, P = le, fe = S, de = R, _e = ce, Pe = _, ke = Ue, Se = he, qe = m, Qe = H, Ie = Q, xe = V, ge = !1;
    function Be(we) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(we) || w(we) === B;
    }
    function I(we) {
      return w(we) === Y;
    }
    function O(we) {
      return w(we) === le;
    }
    function G(we) {
      return w(we) === S;
    }
    function Ae(we) {
      return typeof we == "object" && we !== null && we.$$typeof === R;
    }
    function Oe(we) {
      return w(we) === ce;
    }
    function Ye(we) {
      return w(we) === _;
    }
    function $e(we) {
      return w(we) === Ue;
    }
    function We(we) {
      return w(we) === he;
    }
    function pe(we) {
      return w(we) === m;
    }
    function Re(we) {
      return w(we) === H;
    }
    function je(we) {
      return w(we) === Q;
    }
    function rt(we) {
      return w(we) === V;
    }
    xn.AsyncMode = b, xn.ConcurrentMode = D, xn.ContextConsumer = P, xn.ContextProvider = fe, xn.Element = de, xn.ForwardRef = _e, xn.Fragment = Pe, xn.Lazy = ke, xn.Memo = Se, xn.Portal = qe, xn.Profiler = Qe, xn.StrictMode = Ie, xn.Suspense = xe, xn.isAsyncMode = Be, xn.isConcurrentMode = I, xn.isContextConsumer = O, xn.isContextProvider = G, xn.isElement = Ae, xn.isForwardRef = Oe, xn.isFragment = Ye, xn.isLazy = $e, xn.isMemo = We, xn.isPortal = pe, xn.isProfiler = Re, xn.isStrictMode = je, xn.isSuspense = rt, xn.isValidElementType = T, xn.typeOf = w;
  }()), xn;
}
var uw;
function Pw() {
  return uw || (uw = 1, process.env.NODE_ENV === "production" ? gy.exports = KD() : gy.exports = ZD()), gy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var YE, sw;
function JD() {
  if (sw) return YE;
  sw = 1;
  var y = Object.getOwnPropertySymbols, R = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function _(H) {
    if (H == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(H);
  }
  function Q() {
    try {
      if (!Object.assign)
        return !1;
      var H = new String("abc");
      if (H[5] = "de", Object.getOwnPropertyNames(H)[0] === "5")
        return !1;
      for (var S = {}, le = 0; le < 10; le++)
        S["_" + String.fromCharCode(le)] = le;
      var B = Object.getOwnPropertyNames(S).map(function(ce) {
        return S[ce];
      });
      if (B.join("") !== "0123456789")
        return !1;
      var Y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(ce) {
        Y[ce] = ce;
      }), Object.keys(Object.assign({}, Y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return YE = Q() ? Object.assign : function(H, S) {
    for (var le, B = _(H), Y, ce = 1; ce < arguments.length; ce++) {
      le = Object(arguments[ce]);
      for (var V in le)
        R.call(le, V) && (B[V] = le[V]);
      if (y) {
        Y = y(le);
        for (var ne = 0; ne < Y.length; ne++)
          m.call(le, Y[ne]) && (B[Y[ne]] = le[Y[ne]]);
      }
    }
    return B;
  }, YE;
}
var GE, cw;
function ob() {
  if (cw) return GE;
  cw = 1;
  var y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return GE = y, GE;
}
var QE, fw;
function Aw() {
  return fw || (fw = 1, QE = Function.call.bind(Object.prototype.hasOwnProperty)), QE;
}
var XE, dw;
function ek() {
  if (dw) return XE;
  dw = 1;
  var y = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var R = /* @__PURE__ */ ob(), m = {}, _ = /* @__PURE__ */ Aw();
    y = function(H) {
      var S = "Warning: " + H;
      typeof console < "u" && console.error(S);
      try {
        throw new Error(S);
      } catch {
      }
    };
  }
  function Q(H, S, le, B, Y) {
    if (process.env.NODE_ENV !== "production") {
      for (var ce in H)
        if (_(H, ce)) {
          var V;
          try {
            if (typeof H[ce] != "function") {
              var ne = Error(
                (B || "React class") + ": " + le + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof H[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ne.name = "Invariant Violation", ne;
            }
            V = H[ce](S, ce, B, le, null, R);
          } catch (Ue) {
            V = Ue;
          }
          if (V && !(V instanceof Error) && y(
            (B || "React class") + ": type specification of " + le + " `" + ce + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof V + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), V instanceof Error && !(V.message in m)) {
            m[V.message] = !0;
            var he = Y ? Y() : "";
            y(
              "Failed " + le + " type: " + V.message + (he ?? "")
            );
          }
        }
    }
  }
  return Q.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (m = {});
  }, XE = Q, XE;
}
var KE, pw;
function tk() {
  if (pw) return KE;
  pw = 1;
  var y = Pw(), R = JD(), m = /* @__PURE__ */ ob(), _ = /* @__PURE__ */ Aw(), Q = /* @__PURE__ */ ek(), H = function() {
  };
  process.env.NODE_ENV !== "production" && (H = function(le) {
    var B = "Warning: " + le;
    typeof console < "u" && console.error(B);
    try {
      throw new Error(B);
    } catch {
    }
  });
  function S() {
    return null;
  }
  return KE = function(le, B) {
    var Y = typeof Symbol == "function" && Symbol.iterator, ce = "@@iterator";
    function V(I) {
      var O = I && (Y && I[Y] || I[ce]);
      if (typeof O == "function")
        return O;
    }
    var ne = "<<anonymous>>", he = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: g(),
      arrayOf: T,
      element: w(),
      elementType: b(),
      instanceOf: D,
      node: _e(),
      objectOf: fe,
      oneOf: P,
      oneOfType: de,
      shape: ke,
      exact: Se
    };
    function Ue(I, O) {
      return I === O ? I !== 0 || 1 / I === 1 / O : I !== I && O !== O;
    }
    function ye(I, O) {
      this.message = I, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    ye.prototype = Error.prototype;
    function K(I) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, G = 0;
      function Ae(Ye, $e, We, pe, Re, je, rt) {
        if (pe = pe || ne, je = je || We, rt !== m) {
          if (B) {
            var we = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw we.name = "Invariant Violation", we;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ht = pe + ":" + We;
            !O[ht] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (H(
              "You are manually calling a React.PropTypes validation function for the `" + je + "` prop on `" + pe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ht] = !0, G++);
          }
        }
        return $e[We] == null ? Ye ? $e[We] === null ? new ye("The " + Re + " `" + je + "` is marked as required " + ("in `" + pe + "`, but its value is `null`.")) : new ye("The " + Re + " `" + je + "` is marked as required in " + ("`" + pe + "`, but its value is `undefined`.")) : null : I($e, We, pe, Re, je);
      }
      var Oe = Ae.bind(null, !1);
      return Oe.isRequired = Ae.bind(null, !0), Oe;
    }
    function k(I) {
      function O(G, Ae, Oe, Ye, $e, We) {
        var pe = G[Ae], Re = Ie(pe);
        if (Re !== I) {
          var je = xe(pe);
          return new ye(
            "Invalid " + Ye + " `" + $e + "` of type " + ("`" + je + "` supplied to `" + Oe + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return K(O);
    }
    function g() {
      return K(S);
    }
    function T(I) {
      function O(G, Ae, Oe, Ye, $e) {
        if (typeof I != "function")
          return new ye("Property `" + $e + "` of component `" + Oe + "` has invalid PropType notation inside arrayOf.");
        var We = G[Ae];
        if (!Array.isArray(We)) {
          var pe = Ie(We);
          return new ye("Invalid " + Ye + " `" + $e + "` of type " + ("`" + pe + "` supplied to `" + Oe + "`, expected an array."));
        }
        for (var Re = 0; Re < We.length; Re++) {
          var je = I(We, Re, Oe, Ye, $e + "[" + Re + "]", m);
          if (je instanceof Error)
            return je;
        }
        return null;
      }
      return K(O);
    }
    function w() {
      function I(O, G, Ae, Oe, Ye) {
        var $e = O[G];
        if (!le($e)) {
          var We = Ie($e);
          return new ye("Invalid " + Oe + " `" + Ye + "` of type " + ("`" + We + "` supplied to `" + Ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return K(I);
    }
    function b() {
      function I(O, G, Ae, Oe, Ye) {
        var $e = O[G];
        if (!y.isValidElementType($e)) {
          var We = Ie($e);
          return new ye("Invalid " + Oe + " `" + Ye + "` of type " + ("`" + We + "` supplied to `" + Ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return K(I);
    }
    function D(I) {
      function O(G, Ae, Oe, Ye, $e) {
        if (!(G[Ae] instanceof I)) {
          var We = I.name || ne, pe = Be(G[Ae]);
          return new ye("Invalid " + Ye + " `" + $e + "` of type " + ("`" + pe + "` supplied to `" + Oe + "`, expected ") + ("instance of `" + We + "`."));
        }
        return null;
      }
      return K(O);
    }
    function P(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? H(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : H("Invalid argument supplied to oneOf, expected an array.")), S;
      function O(G, Ae, Oe, Ye, $e) {
        for (var We = G[Ae], pe = 0; pe < I.length; pe++)
          if (Ue(We, I[pe]))
            return null;
        var Re = JSON.stringify(I, function(rt, we) {
          var ht = xe(we);
          return ht === "symbol" ? String(we) : we;
        });
        return new ye("Invalid " + Ye + " `" + $e + "` of value `" + String(We) + "` " + ("supplied to `" + Oe + "`, expected one of " + Re + "."));
      }
      return K(O);
    }
    function fe(I) {
      function O(G, Ae, Oe, Ye, $e) {
        if (typeof I != "function")
          return new ye("Property `" + $e + "` of component `" + Oe + "` has invalid PropType notation inside objectOf.");
        var We = G[Ae], pe = Ie(We);
        if (pe !== "object")
          return new ye("Invalid " + Ye + " `" + $e + "` of type " + ("`" + pe + "` supplied to `" + Oe + "`, expected an object."));
        for (var Re in We)
          if (_(We, Re)) {
            var je = I(We, Re, Oe, Ye, $e + "." + Re, m);
            if (je instanceof Error)
              return je;
          }
        return null;
      }
      return K(O);
    }
    function de(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && H("Invalid argument supplied to oneOfType, expected an instance of array."), S;
      for (var O = 0; O < I.length; O++) {
        var G = I[O];
        if (typeof G != "function")
          return H(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(G) + " at index " + O + "."
          ), S;
      }
      function Ae(Oe, Ye, $e, We, pe) {
        for (var Re = [], je = 0; je < I.length; je++) {
          var rt = I[je], we = rt(Oe, Ye, $e, We, pe, m);
          if (we == null)
            return null;
          we.data && _(we.data, "expectedType") && Re.push(we.data.expectedType);
        }
        var ht = Re.length > 0 ? ", expected one of type [" + Re.join(", ") + "]" : "";
        return new ye("Invalid " + We + " `" + pe + "` supplied to " + ("`" + $e + "`" + ht + "."));
      }
      return K(Ae);
    }
    function _e() {
      function I(O, G, Ae, Oe, Ye) {
        return qe(O[G]) ? null : new ye("Invalid " + Oe + " `" + Ye + "` supplied to " + ("`" + Ae + "`, expected a ReactNode."));
      }
      return K(I);
    }
    function Pe(I, O, G, Ae, Oe) {
      return new ye(
        (I || "React class") + ": " + O + " type `" + G + "." + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Oe + "`."
      );
    }
    function ke(I) {
      function O(G, Ae, Oe, Ye, $e) {
        var We = G[Ae], pe = Ie(We);
        if (pe !== "object")
          return new ye("Invalid " + Ye + " `" + $e + "` of type `" + pe + "` " + ("supplied to `" + Oe + "`, expected `object`."));
        for (var Re in I) {
          var je = I[Re];
          if (typeof je != "function")
            return Pe(Oe, Ye, $e, Re, xe(je));
          var rt = je(We, Re, Oe, Ye, $e + "." + Re, m);
          if (rt)
            return rt;
        }
        return null;
      }
      return K(O);
    }
    function Se(I) {
      function O(G, Ae, Oe, Ye, $e) {
        var We = G[Ae], pe = Ie(We);
        if (pe !== "object")
          return new ye("Invalid " + Ye + " `" + $e + "` of type `" + pe + "` " + ("supplied to `" + Oe + "`, expected `object`."));
        var Re = R({}, G[Ae], I);
        for (var je in Re) {
          var rt = I[je];
          if (_(I, je) && typeof rt != "function")
            return Pe(Oe, Ye, $e, je, xe(rt));
          if (!rt)
            return new ye(
              "Invalid " + Ye + " `" + $e + "` key `" + je + "` supplied to `" + Oe + "`.\nBad object: " + JSON.stringify(G[Ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var we = rt(We, je, Oe, Ye, $e + "." + je, m);
          if (we)
            return we;
        }
        return null;
      }
      return K(O);
    }
    function qe(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(qe);
          if (I === null || le(I))
            return !0;
          var O = V(I);
          if (O) {
            var G = O.call(I), Ae;
            if (O !== I.entries) {
              for (; !(Ae = G.next()).done; )
                if (!qe(Ae.value))
                  return !1;
            } else
              for (; !(Ae = G.next()).done; ) {
                var Oe = Ae.value;
                if (Oe && !qe(Oe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Qe(I, O) {
      return I === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function Ie(I) {
      var O = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : Qe(O, I) ? "symbol" : O;
    }
    function xe(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var O = Ie(I);
      if (O === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function ge(I) {
      var O = xe(I);
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
    function Be(I) {
      return !I.constructor || !I.constructor.name ? ne : I.constructor.name;
    }
    return he.checkPropTypes = Q, he.resetWarningCache = Q.resetWarningCache, he.PropTypes = he, he;
  }, KE;
}
var ZE, vw;
function nk() {
  if (vw) return ZE;
  vw = 1;
  var y = /* @__PURE__ */ ob();
  function R() {
  }
  function m() {
  }
  return m.resetWarningCache = R, ZE = function() {
    function _(S, le, B, Y, ce, V) {
      if (V !== y) {
        var ne = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ne.name = "Invariant Violation", ne;
      }
    }
    _.isRequired = _;
    function Q() {
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
      arrayOf: Q,
      element: _,
      elementType: _,
      instanceOf: Q,
      node: _,
      objectOf: Q,
      oneOf: Q,
      oneOfType: Q,
      shape: Q,
      exact: Q,
      checkPropTypes: m,
      resetWarningCache: R
    };
    return H.PropTypes = H, H;
  }, ZE;
}
var hw;
function Zu() {
  if (hw) return yy.exports;
  if (hw = 1, process.env.NODE_ENV !== "production") {
    var y = Pw(), R = !0;
    yy.exports = /* @__PURE__ */ tk()(y.isElement, R);
  } else
    yy.exports = /* @__PURE__ */ nk()();
  return yy.exports;
}
var pv = { exports: {} }, JE, mw;
function rk() {
  if (mw) return JE;
  mw = 1;
  var y = Object.create, R = Object.defineProperty, m = Object.getOwnPropertyDescriptor, _ = Object.getOwnPropertyNames, Q = Object.getPrototypeOf, H = Object.prototype.hasOwnProperty, S = (z, Z) => {
    for (var A in Z)
      R(z, A, { get: Z[A], enumerable: !0 });
  }, le = (z, Z, A, ae) => {
    if (Z && typeof Z == "object" || typeof Z == "function")
      for (let Ce of _(Z))
        !H.call(z, Ce) && Ce !== A && R(z, Ce, { get: () => Z[Ce], enumerable: !(ae = m(Z, Ce)) || ae.enumerable });
    return z;
  }, B = (z, Z, A) => (A = z != null ? y(Q(z)) : {}, le(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !z || !z.__esModule ? R(A, "default", { value: z, enumerable: !0 }) : A,
    z
  )), Y = (z) => le(R({}, "__esModule", { value: !0 }), z), ce = {};
  S(ce, {
    DraggableCore: () => Bt,
    default: () => ln
  }), JE = Y(ce);
  var V = B(Sa()), ne = B(/* @__PURE__ */ Zu()), he = B(by()), Ue = Ty();
  function ye(z, Z) {
    for (let A = 0, ae = z.length; A < ae; A++)
      if (Z.apply(Z, [z[A], A, z])) return z[A];
  }
  function K(z) {
    return typeof z == "function" || Object.prototype.toString.call(z) === "[object Function]";
  }
  function k(z) {
    return typeof z == "number" && !isNaN(z);
  }
  function g(z) {
    return parseInt(z, 10);
  }
  function T(z, Z, A) {
    if (z[Z])
      return new Error(`Invalid prop ${Z} passed to ${A} - do not set this, set it on the child.`);
  }
  var w = ["Moz", "Webkit", "O", "ms"];
  function b(z = "transform") {
    var Z, A;
    if (typeof window > "u") return "";
    const ae = (A = (Z = window.document) == null ? void 0 : Z.documentElement) == null ? void 0 : A.style;
    if (!ae || z in ae) return "";
    for (let Ce = 0; Ce < w.length; Ce++)
      if (D(z, w[Ce]) in ae) return w[Ce];
    return "";
  }
  function D(z, Z) {
    return Z ? `${Z}${P(z)}` : z;
  }
  function P(z) {
    let Z = "", A = !0;
    for (let ae = 0; ae < z.length; ae++)
      A ? (Z += z[ae].toUpperCase(), A = !1) : z[ae] === "-" ? A = !0 : Z += z[ae];
    return Z;
  }
  var fe = b(), de = "";
  function _e(z, Z) {
    var A;
    de || (de = (A = ye([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(Ce) {
      return K(z[Ce]);
    })) != null ? A : "");
    const ae = z[de];
    return K(ae) ? !!ae.call(z, Z) : !1;
  }
  function Pe(z, Z, A) {
    let ae = z;
    do {
      if (_e(ae, Z)) return !0;
      if (ae === A) return !1;
      ae = ae.parentNode;
    } while (ae);
    return !1;
  }
  function ke(z, Z, A, ae) {
    if (!z) return;
    const Ce = { capture: !0, ...ae }, gt = A;
    z.addEventListener ? z.addEventListener(Z, gt, Ce) : z.attachEvent ? z.attachEvent("on" + Z, gt) : z["on" + Z] = gt;
  }
  function Se(z, Z, A, ae) {
    if (!z) return;
    const Ce = { capture: !0, ...ae }, gt = A;
    z.removeEventListener ? z.removeEventListener(Z, gt, Ce) : z.detachEvent ? z.detachEvent("on" + Z, gt) : z["on" + Z] = null;
  }
  function qe(z) {
    let Z = z.clientHeight;
    const A = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z += g(A.borderTopWidth), Z += g(A.borderBottomWidth), Z;
  }
  function Qe(z) {
    let Z = z.clientWidth;
    const A = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z += g(A.borderLeftWidth), Z += g(A.borderRightWidth), Z;
  }
  function Ie(z) {
    let Z = z.clientHeight;
    const A = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z -= g(A.paddingTop), Z -= g(A.paddingBottom), Z;
  }
  function xe(z) {
    let Z = z.clientWidth;
    const A = z.ownerDocument.defaultView.getComputedStyle(z);
    return Z -= g(A.paddingLeft), Z -= g(A.paddingRight), Z;
  }
  function ge(z, Z, A) {
    const Ce = Z === Z.ownerDocument.body ? { left: 0, top: 0 } : Z.getBoundingClientRect(), gt = (z.clientX + Z.scrollLeft - Ce.left) / A, ct = (z.clientY + Z.scrollTop - Ce.top) / A;
    return { x: gt, y: ct };
  }
  function Be(z, Z) {
    const A = O(z, Z, "px");
    return { [D("transform", fe)]: A };
  }
  function I(z, Z) {
    return O(z, Z, "");
  }
  function O({ x: z, y: Z }, A, ae) {
    let Ce = `translate(${z}${ae},${Z}${ae})`;
    if (A) {
      const gt = `${typeof A.x == "string" ? A.x : A.x + ae}`, ct = `${typeof A.y == "string" ? A.y : A.y + ae}`;
      Ce = `translate(${gt}, ${ct})` + Ce;
    }
    return Ce;
  }
  function G(z, Z) {
    return z.targetTouches && ye(z.targetTouches, (A) => Z === A.identifier) || z.changedTouches && ye(z.changedTouches, (A) => Z === A.identifier);
  }
  function Ae(z) {
    if (z.targetTouches && z.targetTouches[0]) return z.targetTouches[0].identifier;
    if (z.changedTouches && z.changedTouches[0]) return z.changedTouches[0].identifier;
  }
  function Oe() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Ye(z, Z) {
    if (!z) return;
    let A = z.getElementById("react-draggable-style-el");
    if (!A) {
      A = z.createElement("style"), A.type = "text/css", A.id = "react-draggable-style-el";
      const ae = Z ?? Oe();
      ae && A.setAttribute("nonce", ae), A.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, A.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, z.getElementsByTagName("head")[0].appendChild(A);
    }
    z.body && pe(z.body, "react-draggable-transparent-selection");
  }
  function $e(z) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      We(z);
    }) : We(z);
  }
  function We(z) {
    if (z)
      try {
        z.body && Re(z.body, "react-draggable-transparent-selection");
        const Z = z.selection;
        if (Z)
          Z.empty();
        else {
          const A = (z.defaultView || window).getSelection();
          A && A.type !== "Caret" && A.removeAllRanges();
        }
      } catch {
      }
  }
  function pe(z, Z) {
    z.classList ? z.classList.add(Z) : z.className.match(new RegExp(`(?:^|\\s)${Z}(?!\\S)`)) || (z.className += ` ${Z}`);
  }
  function Re(z, Z) {
    z.classList ? z.classList.remove(Z) : z.className = z.className.replace(new RegExp(`(?:^|\\s)${Z}(?!\\S)`, "g"), "");
  }
  function je(z, Z, A) {
    if (!z.props.bounds) return [Z, A];
    let { bounds: ae } = z.props;
    ae = typeof ae == "string" ? ae : F(ae);
    const Ce = j(z);
    if (typeof ae == "string") {
      const { ownerDocument: gt } = Ce, ct = gt.defaultView;
      if (!ct)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Lt;
      if (ae === "parent" ? Lt = Ce.parentNode : Lt = Ce.getRootNode().querySelector(ae), !(Lt instanceof ct.HTMLElement))
        throw new Error('Bounds selector "' + ae + '" could not find an element.');
      const Yt = Lt, Dn = ct.getComputedStyle(Ce), an = ct.getComputedStyle(Yt);
      ae = {
        left: -Ce.offsetLeft + g(an.paddingLeft) + g(Dn.marginLeft),
        top: -Ce.offsetTop + g(an.paddingTop) + g(Dn.marginTop),
        right: xe(Yt) - Qe(Ce) - Ce.offsetLeft + g(an.paddingRight) - g(Dn.marginRight),
        bottom: Ie(Yt) - qe(Ce) - Ce.offsetTop + g(an.paddingBottom) - g(Dn.marginBottom)
      };
    }
    return k(ae.right) && (Z = Math.min(Z, ae.right)), k(ae.bottom) && (A = Math.min(A, ae.bottom)), k(ae.left) && (Z = Math.max(Z, ae.left)), k(ae.top) && (A = Math.max(A, ae.top)), [Z, A];
  }
  function rt(z, Z, A) {
    const ae = Math.round(Z / z[0]) * z[0], Ce = Math.round(A / z[1]) * z[1];
    return [ae, Ce];
  }
  function we(z) {
    return z.props.axis === "both" || z.props.axis === "x";
  }
  function ht(z) {
    return z.props.axis === "both" || z.props.axis === "y";
  }
  function zt(z, Z, A) {
    const ae = typeof Z == "number" ? G(z, Z) : null;
    if (typeof Z == "number" && !ae) return null;
    const Ce = j(A), gt = A.props.offsetParent || Ce.offsetParent || Ce.ownerDocument.body;
    return ge(ae || z, gt, A.props.scale);
  }
  function $t(z, Z, A) {
    const ae = !k(z.lastX), Ce = j(z);
    return ae ? {
      node: Ce,
      deltaX: 0,
      deltaY: 0,
      lastX: Z,
      lastY: A,
      x: Z,
      y: A
    } : {
      node: Ce,
      deltaX: Z - z.lastX,
      deltaY: A - z.lastY,
      lastX: z.lastX,
      lastY: z.lastY,
      x: Z,
      y: A
    };
  }
  function Mt(z, Z) {
    const A = z.props.scale;
    return {
      node: Z.node,
      x: z.state.x + Z.deltaX / A,
      y: z.state.y + Z.deltaY / A,
      deltaX: Z.deltaX / A,
      deltaY: Z.deltaY / A,
      lastX: z.state.x,
      lastY: z.state.y
    };
  }
  function F(z) {
    return {
      left: z.left,
      top: z.top,
      right: z.right,
      bottom: z.bottom
    };
  }
  function j(z) {
    const Z = z.findDOMNode();
    if (!Z)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return Z;
  }
  var X = B(Sa()), ve = B(/* @__PURE__ */ Zu()), Je = B(by()), et = typeof process < "u" && process.env.DRAGGABLE_DEBUG ? console.log.bind(console) : function() {
  }, Ge = et, _t = {
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
  }, Ct = _t.mouse, Bt = class extends X.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (z) => {
        if (this.props.onMouseDown(z), !this.props.allowAnyClick && (typeof z.button == "number" && z.button !== 0 || z.ctrlKey)) return !1;
        const Z = this.findDOMNode();
        if (!Z || !Z.ownerDocument || !Z.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: A } = Z;
        if (this.props.disabled || !(z.target instanceof A.defaultView.Node) || this.props.handle && !Pe(z.target, this.props.handle, Z) || this.props.cancel && Pe(z.target, this.props.cancel, Z))
          return;
        z.type === "touchstart" && !this.props.allowMobileScroll && z.preventDefault();
        const ae = Ae(z);
        this.touchIdentifier = ae;
        const Ce = zt(z, ae, this);
        if (Ce == null) return;
        const { x: gt, y: ct } = Ce, Lt = $t(this, gt, ct);
        Ge("DraggableCore: handleDragStart: %j", Lt), Ge("calling", this.props.onStart), !(this.props.onStart(z, Lt) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Ye(A, this.props.nonce), this.dragging = !0, this.lastX = gt, this.lastY = ct, ke(A, Ct.move, this.handleDrag), ke(A, Ct.stop, this.handleDragStop));
      }, this.handleDrag = (z) => {
        const Z = zt(z, this.touchIdentifier, this);
        if (Z == null) return;
        let { x: A, y: ae } = Z;
        if (Array.isArray(this.props.grid)) {
          let ct = A - this.lastX, Lt = ae - this.lastY;
          if ([ct, Lt] = rt(this.props.grid, ct, Lt), !ct && !Lt) return;
          A = this.lastX + ct, ae = this.lastY + Lt;
        }
        const Ce = $t(this, A, ae);
        if (Ge("DraggableCore: handleDrag: %j", Ce), this.props.onDrag(z, Ce) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const ct = document.createEvent("MouseEvents");
            ct.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(ct);
          }
          return;
        }
        this.lastX = A, this.lastY = ae;
      }, this.handleDragStop = (z) => {
        if (!this.dragging) return;
        const Z = zt(z, this.touchIdentifier, this);
        if (Z == null) return;
        let { x: A, y: ae } = Z;
        if (Array.isArray(this.props.grid)) {
          let Lt = A - this.lastX || 0, Yt = ae - this.lastY || 0;
          [Lt, Yt] = rt(this.props.grid, Lt, Yt), A = this.lastX + Lt, ae = this.lastY + Yt;
        }
        const Ce = $t(this, A, ae);
        if (this.props.onStop(z, Ce) === !1 || this.mounted === !1) return !1;
        const ct = this.findDOMNode();
        ct && this.props.enableUserSelectHack && $e(ct.ownerDocument), Ge("DraggableCore: handleDragStop: %j", Ce), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, ct && (Ge("DraggableCore: Removing handlers"), Se(ct.ownerDocument, Ct.move, this.handleDrag), Se(ct.ownerDocument, Ct.stop, this.handleDragStop));
      }, this.onMouseDown = (z) => (Ct = _t.mouse, this.handleDragStart(z)), this.onMouseUp = (z) => (Ct = _t.mouse, this.handleDragStop(z)), this.onTouchStart = (z) => (Ct = _t.touch, this.handleDragStart(z)), this.onTouchEnd = (z) => (Ct = _t.touch, this.handleDragStop(z));
    }
    componentDidMount() {
      this.mounted = !0;
      const z = this.findDOMNode();
      z && ke(z, _t.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const z = this.findDOMNode();
      if (z) {
        const { ownerDocument: Z } = z;
        Se(Z, _t.mouse.move, this.handleDrag), Se(Z, _t.touch.move, this.handleDrag), Se(Z, _t.mouse.stop, this.handleDragStop), Se(Z, _t.touch.stop, this.handleDragStop), Se(z, _t.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && $e(Z);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var z;
      if ((z = this.props) != null && z.nodeRef)
        return this.props.nodeRef.current;
      const Z = Je.default;
      return typeof Z.findDOMNode == "function" ? Z.findDOMNode(this) : (Ge(
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
    allowAnyClick: ve.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: ve.default.bool,
    children: ve.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: ve.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: ve.default.bool,
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
    grid: ve.default.arrayOf(ve.default.number),
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
    handle: ve.default.string,
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
    cancel: ve.default.string,
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
    nodeRef: ve.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: ve.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: ve.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: ve.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: ve.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: ve.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: ve.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: T,
    style: T,
    transform: T
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
  var ln = class extends V.Component {
    constructor(z) {
      super(z), this.onDragStart = (Z, A) => {
        if (Ge("Draggable: onDragStart: %j", A), this.props.onStart(Z, Mt(this, A)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (Z, A) => {
        if (!this.state.dragging) return !1;
        Ge("Draggable: onDrag: %j", A);
        const ae = Mt(this, A), Ce = {
          x: ae.x,
          y: ae.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: ct, y: Lt } = Ce;
          Ce.x += this.state.slackX, Ce.y += this.state.slackY;
          const [Yt, Dn] = je(this, Ce.x, Ce.y);
          Ce.x = Yt, Ce.y = Dn, Ce.slackX = this.state.slackX + (ct - Ce.x), Ce.slackY = this.state.slackY + (Lt - Ce.y), ae.x = Ce.x, ae.y = Ce.y, ae.deltaX = Ce.x - this.state.x, ae.deltaY = Ce.y - this.state.y;
        }
        if (this.props.onDrag(Z, ae) === !1) return !1;
        this.setState(Ce);
      }, this.onDragStop = (Z, A) => {
        if (!this.state.dragging || this.props.onStop(Z, Mt(this, A)) === !1) return !1;
        Ge("Draggable: onDragStop: %j", A);
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
      return z && (!Z || z.x !== Z.x || z.y !== Z.y) ? (Ge("Draggable: getDerivedStateFromProps %j", { position: z, prevPropsPosition: Z }), {
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
      const Z = he.default;
      return typeof Z.findDOMNode == "function" ? Z.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: z,
        bounds: Z,
        children: A,
        defaultPosition: ae,
        defaultClassName: Ce,
        defaultClassNameDragging: gt,
        defaultClassNameDragged: ct,
        position: Lt,
        positionOffset: Yt,
        scale: Dn,
        ...an
      } = this.props;
      let un = {}, mn = null;
      const or = !!!Lt || this.state.dragging, Ar = Lt || ae, Ma = {
        // Set left if horizontal drag is enabled
        x: we(this) && or ? this.state.x : Ar.x,
        // Set top if vertical drag is enabled
        y: ht(this) && or ? this.state.y : Ar.y
      };
      this.state.isElementSVG ? mn = I(Ma, Yt) : un = Be(Ma, Yt);
      const Ja = V.Children.only(A), Wi = (0, Ue.clsx)(Ja.props.className || "", Ce, {
        [gt]: this.state.dragging,
        [ct]: this.state.dragged
      });
      return /* @__PURE__ */ V.createElement(Bt, { ...an, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, V.cloneElement(Ja, {
        className: Wi,
        style: { ...Ja.props.style, ...un },
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
    axis: ne.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: ne.default.oneOfType([
      ne.default.shape({
        left: ne.default.number,
        right: ne.default.number,
        top: ne.default.number,
        bottom: ne.default.number
      }),
      ne.default.string,
      ne.default.oneOf([!1])
    ]),
    defaultClassName: ne.default.string,
    defaultClassNameDragging: ne.default.string,
    defaultClassNameDragged: ne.default.string,
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
    defaultPosition: ne.default.shape({
      x: ne.default.number,
      y: ne.default.number
    }),
    positionOffset: ne.default.shape({
      x: ne.default.oneOfType([ne.default.number, ne.default.string]),
      y: ne.default.oneOfType([ne.default.number, ne.default.string])
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
    position: ne.default.shape({
      x: ne.default.number,
      y: ne.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: T,
    style: T,
    transform: T
  }, ln.defaultProps = {
    ...Bt.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, JE;
}
var yw;
function lb() {
  if (yw) return pv.exports;
  yw = 1;
  const y = rk(), R = y.DraggableCore, m = y.default || y;
  return pv.exports = m, pv.exports.default = m, pv.exports.DraggableCore = R, pv.exports;
}
var vv = { exports: {} }, hv = {}, Sy = {}, gw;
function ak() {
  if (gw) return Sy;
  gw = 1, Sy.__esModule = !0, Sy.cloneElement = le;
  var y = R(Sa());
  function R(B) {
    return B && B.__esModule ? B : { default: B };
  }
  function m(B, Y) {
    var ce = Object.keys(B);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(B);
      Y && (V = V.filter(function(ne) {
        return Object.getOwnPropertyDescriptor(B, ne).enumerable;
      })), ce.push.apply(ce, V);
    }
    return ce;
  }
  function _(B) {
    for (var Y = 1; Y < arguments.length; Y++) {
      var ce = arguments[Y] != null ? arguments[Y] : {};
      Y % 2 ? m(Object(ce), !0).forEach(function(V) {
        Q(B, V, ce[V]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(ce)) : m(Object(ce)).forEach(function(V) {
        Object.defineProperty(B, V, Object.getOwnPropertyDescriptor(ce, V));
      });
    }
    return B;
  }
  function Q(B, Y, ce) {
    return Y = H(Y), Y in B ? Object.defineProperty(B, Y, { value: ce, enumerable: !0, configurable: !0, writable: !0 }) : B[Y] = ce, B;
  }
  function H(B) {
    var Y = S(B, "string");
    return typeof Y == "symbol" ? Y : String(Y);
  }
  function S(B, Y) {
    if (typeof B != "object" || B === null) return B;
    var ce = B[Symbol.toPrimitive];
    if (ce !== void 0) {
      var V = ce.call(B, Y);
      if (typeof V != "object") return V;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (Y === "string" ? String : Number)(B);
  }
  function le(B, Y) {
    return Y.style && B.props.style && (Y.style = _(_({}, B.props.style), Y.style)), Y.className && B.props.className && (Y.className = B.props.className + " " + Y.className), /* @__PURE__ */ y.default.cloneElement(B, Y);
  }
  return Sy;
}
var mv = {}, Sw;
function Uw() {
  if (Sw) return mv;
  Sw = 1, mv.__esModule = !0, mv.resizableProps = void 0;
  var y = R(/* @__PURE__ */ Zu());
  lb();
  function R(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var m = {
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
      for (var Q = arguments.length, H = new Array(Q), S = 0; S < Q; S++)
        H[S] = arguments[S];
      var le = H[0];
      if (le.axis === "both" || le.axis === "y") {
        var B;
        return (B = y.default.number).isRequired.apply(B, H);
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
      for (var Q = arguments.length, H = new Array(Q), S = 0; S < Q; S++)
        H[S] = arguments[S];
      var le = H[0];
      if (le.axis === "both" || le.axis === "x") {
        var B;
        return (B = y.default.number).isRequired.apply(B, H);
      }
      return y.default.number.apply(y.default, H);
    }
  };
  return mv.resizableProps = m, mv;
}
var Ew;
function jw() {
  if (Ew) return hv;
  Ew = 1, hv.__esModule = !0, hv.default = void 0;
  var y = S(Sa()), R = lb(), m = ak(), _ = Uw(), Q = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function H(k) {
    if (typeof WeakMap != "function") return null;
    var g = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap();
    return (H = function(b) {
      return b ? T : g;
    })(k);
  }
  function S(k, g) {
    if (k && k.__esModule)
      return k;
    if (k === null || typeof k != "object" && typeof k != "function")
      return { default: k };
    var T = H(g);
    if (T && T.has(k))
      return T.get(k);
    var w = {}, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in k)
      if (D !== "default" && Object.prototype.hasOwnProperty.call(k, D)) {
        var P = b ? Object.getOwnPropertyDescriptor(k, D) : null;
        P && (P.get || P.set) ? Object.defineProperty(w, D, P) : w[D] = k[D];
      }
    return w.default = k, T && T.set(k, w), w;
  }
  function le() {
    return le = Object.assign ? Object.assign.bind() : function(k) {
      for (var g = 1; g < arguments.length; g++) {
        var T = arguments[g];
        for (var w in T)
          Object.prototype.hasOwnProperty.call(T, w) && (k[w] = T[w]);
      }
      return k;
    }, le.apply(this, arguments);
  }
  function B(k, g) {
    if (k == null) return {};
    var T = {}, w = Object.keys(k), b, D;
    for (D = 0; D < w.length; D++)
      b = w[D], !(g.indexOf(b) >= 0) && (T[b] = k[b]);
    return T;
  }
  function Y(k, g) {
    var T = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(k);
      g && (w = w.filter(function(b) {
        return Object.getOwnPropertyDescriptor(k, b).enumerable;
      })), T.push.apply(T, w);
    }
    return T;
  }
  function ce(k) {
    for (var g = 1; g < arguments.length; g++) {
      var T = arguments[g] != null ? arguments[g] : {};
      g % 2 ? Y(Object(T), !0).forEach(function(w) {
        V(k, w, T[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(T)) : Y(Object(T)).forEach(function(w) {
        Object.defineProperty(k, w, Object.getOwnPropertyDescriptor(T, w));
      });
    }
    return k;
  }
  function V(k, g, T) {
    return g = ne(g), g in k ? Object.defineProperty(k, g, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : k[g] = T, k;
  }
  function ne(k) {
    var g = he(k, "string");
    return typeof g == "symbol" ? g : String(g);
  }
  function he(k, g) {
    if (typeof k != "object" || k === null) return k;
    var T = k[Symbol.toPrimitive];
    if (T !== void 0) {
      var w = T.call(k, g);
      if (typeof w != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(k);
  }
  function Ue(k, g) {
    k.prototype = Object.create(g.prototype), k.prototype.constructor = k, ye(k, g);
  }
  function ye(k, g) {
    return ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, b) {
      return w.__proto__ = b, w;
    }, ye(k, g);
  }
  var K = /* @__PURE__ */ function(k) {
    Ue(g, k);
    function g() {
      for (var w, b = arguments.length, D = new Array(b), P = 0; P < b; P++)
        D[P] = arguments[P];
      return w = k.call.apply(k, [this].concat(D)) || this, w.handleRefs = {}, w.lastHandleRect = null, w.slack = null, w;
    }
    var T = g.prototype;
    return T.componentWillUnmount = function() {
      this.resetData();
    }, T.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, T.runConstraints = function(b, D) {
      var P = this.props, fe = P.minConstraints, de = P.maxConstraints, _e = P.lockAspectRatio;
      if (!fe && !de && !_e) return [b, D];
      if (_e) {
        var Pe = this.props.width / this.props.height, ke = b - this.props.width, Se = D - this.props.height;
        Math.abs(ke) > Math.abs(Se * Pe) ? D = b / Pe : b = D * Pe;
      }
      var qe = b, Qe = D, Ie = this.slack || [0, 0], xe = Ie[0], ge = Ie[1];
      return b += xe, D += ge, fe && (b = Math.max(fe[0], b), D = Math.max(fe[1], D)), de && (b = Math.min(de[0], b), D = Math.min(de[1], D)), this.slack = [xe + (qe - b), ge + (Qe - D)], [b, D];
    }, T.resizeHandler = function(b, D) {
      var P = this;
      return function(fe, de) {
        var _e = de.node, Pe = de.deltaX, ke = de.deltaY;
        b === "onResizeStart" && P.resetData();
        var Se = (P.props.axis === "both" || P.props.axis === "x") && D !== "n" && D !== "s", qe = (P.props.axis === "both" || P.props.axis === "y") && D !== "e" && D !== "w";
        if (!(!Se && !qe)) {
          var Qe = D[0], Ie = D[D.length - 1], xe = _e.getBoundingClientRect();
          if (P.lastHandleRect != null) {
            if (Ie === "w") {
              var ge = xe.left - P.lastHandleRect.left;
              Pe += ge;
            }
            if (Qe === "n") {
              var Be = xe.top - P.lastHandleRect.top;
              ke += Be;
            }
          }
          P.lastHandleRect = xe, Ie === "w" && (Pe = -Pe), Qe === "n" && (ke = -ke);
          var I = P.props.width + (Se ? Pe / P.props.transformScale : 0), O = P.props.height + (qe ? ke / P.props.transformScale : 0), G = P.runConstraints(I, O);
          I = G[0], O = G[1];
          var Ae = I !== P.props.width || O !== P.props.height, Oe = typeof P.props[b] == "function" ? P.props[b] : null, Ye = b === "onResize" && !Ae;
          Oe && !Ye && (fe.persist == null || fe.persist(), Oe(fe, {
            node: _e,
            size: {
              width: I,
              height: O
            },
            handle: D
          })), b === "onResizeStop" && P.resetData();
        }
      };
    }, T.renderResizeHandle = function(b, D) {
      var P = this.props.handle;
      if (!P)
        return /* @__PURE__ */ y.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + b,
          ref: D
        });
      if (typeof P == "function")
        return P(b, D);
      var fe = typeof P.type == "string", de = ce({
        ref: D
      }, fe ? {} : {
        handleAxis: b
      });
      return /* @__PURE__ */ y.cloneElement(P, de);
    }, T.render = function() {
      var b = this, D = this.props, P = D.children, fe = D.className, de = D.draggableOpts;
      D.width, D.height, D.handle, D.handleSize, D.lockAspectRatio, D.axis, D.minConstraints, D.maxConstraints, D.onResize, D.onResizeStop, D.onResizeStart;
      var _e = D.resizeHandles;
      D.transformScale;
      var Pe = B(D, Q);
      return (0, m.cloneElement)(P, ce(ce({}, Pe), {}, {
        className: (fe ? fe + " " : "") + "react-resizable",
        children: [].concat(P.props.children, _e.map(function(ke) {
          var Se, qe = (Se = b.handleRefs[ke]) != null ? Se : b.handleRefs[ke] = /* @__PURE__ */ y.createRef();
          return /* @__PURE__ */ y.createElement(R.DraggableCore, le({}, de, {
            nodeRef: qe,
            key: "resizableHandle-" + ke,
            onStop: b.resizeHandler("onResizeStop", ke),
            onStart: b.resizeHandler("onResizeStart", ke),
            onDrag: b.resizeHandler("onResize", ke)
          }), b.renderResizeHandle(ke, qe));
        }))
      }));
    }, g;
  }(y.Component);
  return hv.default = K, K.propTypes = _.resizableProps, K.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, hv;
}
var yv = {}, bw;
function ik() {
  if (bw) return yv;
  bw = 1, yv.__esModule = !0, yv.default = void 0;
  var y = le(Sa()), R = H(/* @__PURE__ */ Zu()), m = H(jw()), _ = Uw(), Q = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function H(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function S(g) {
    if (typeof WeakMap != "function") return null;
    var T = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap();
    return (S = function(D) {
      return D ? w : T;
    })(g);
  }
  function le(g, T) {
    if (g && g.__esModule)
      return g;
    if (g === null || typeof g != "object" && typeof g != "function")
      return { default: g };
    var w = S(T);
    if (w && w.has(g))
      return w.get(g);
    var b = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in g)
      if (P !== "default" && Object.prototype.hasOwnProperty.call(g, P)) {
        var fe = D ? Object.getOwnPropertyDescriptor(g, P) : null;
        fe && (fe.get || fe.set) ? Object.defineProperty(b, P, fe) : b[P] = g[P];
      }
    return b.default = g, w && w.set(g, b), b;
  }
  function B() {
    return B = Object.assign ? Object.assign.bind() : function(g) {
      for (var T = 1; T < arguments.length; T++) {
        var w = arguments[T];
        for (var b in w)
          Object.prototype.hasOwnProperty.call(w, b) && (g[b] = w[b]);
      }
      return g;
    }, B.apply(this, arguments);
  }
  function Y(g, T) {
    var w = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(g);
      T && (b = b.filter(function(D) {
        return Object.getOwnPropertyDescriptor(g, D).enumerable;
      })), w.push.apply(w, b);
    }
    return w;
  }
  function ce(g) {
    for (var T = 1; T < arguments.length; T++) {
      var w = arguments[T] != null ? arguments[T] : {};
      T % 2 ? Y(Object(w), !0).forEach(function(b) {
        V(g, b, w[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(w)) : Y(Object(w)).forEach(function(b) {
        Object.defineProperty(g, b, Object.getOwnPropertyDescriptor(w, b));
      });
    }
    return g;
  }
  function V(g, T, w) {
    return T = ne(T), T in g ? Object.defineProperty(g, T, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : g[T] = w, g;
  }
  function ne(g) {
    var T = he(g, "string");
    return typeof T == "symbol" ? T : String(T);
  }
  function he(g, T) {
    if (typeof g != "object" || g === null) return g;
    var w = g[Symbol.toPrimitive];
    if (w !== void 0) {
      var b = w.call(g, T);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (T === "string" ? String : Number)(g);
  }
  function Ue(g, T) {
    if (g == null) return {};
    var w = {}, b = Object.keys(g), D, P;
    for (P = 0; P < b.length; P++)
      D = b[P], !(T.indexOf(D) >= 0) && (w[D] = g[D]);
    return w;
  }
  function ye(g, T) {
    g.prototype = Object.create(T.prototype), g.prototype.constructor = g, K(g, T);
  }
  function K(g, T) {
    return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, D) {
      return b.__proto__ = D, b;
    }, K(g, T);
  }
  var k = /* @__PURE__ */ function(g) {
    ye(T, g);
    function T() {
      for (var b, D = arguments.length, P = new Array(D), fe = 0; fe < D; fe++)
        P[fe] = arguments[fe];
      return b = g.call.apply(g, [this].concat(P)) || this, b.state = {
        width: b.props.width,
        height: b.props.height,
        propsWidth: b.props.width,
        propsHeight: b.props.height
      }, b.onResize = function(de, _e) {
        var Pe = _e.size;
        b.props.onResize ? (de.persist == null || de.persist(), b.setState(Pe, function() {
          return b.props.onResize && b.props.onResize(de, _e);
        })) : b.setState(Pe);
      }, b;
    }
    T.getDerivedStateFromProps = function(D, P) {
      return P.propsWidth !== D.width || P.propsHeight !== D.height ? {
        width: D.width,
        height: D.height,
        propsWidth: D.width,
        propsHeight: D.height
      } : null;
    };
    var w = T.prototype;
    return w.render = function() {
      var D = this.props, P = D.handle, fe = D.handleSize;
      D.onResize;
      var de = D.onResizeStart, _e = D.onResizeStop, Pe = D.draggableOpts, ke = D.minConstraints, Se = D.maxConstraints, qe = D.lockAspectRatio, Qe = D.axis;
      D.width, D.height;
      var Ie = D.resizeHandles, xe = D.style, ge = D.transformScale, Be = Ue(D, Q);
      return /* @__PURE__ */ y.createElement(m.default, {
        axis: Qe,
        draggableOpts: Pe,
        handle: P,
        handleSize: fe,
        height: this.state.height,
        lockAspectRatio: qe,
        maxConstraints: Se,
        minConstraints: ke,
        onResizeStart: de,
        onResize: this.onResize,
        onResizeStop: _e,
        resizeHandles: Ie,
        transformScale: ge,
        width: this.state.width
      }, /* @__PURE__ */ y.createElement("div", B({}, Be, {
        style: ce(ce({}, xe), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, T;
  }(y.Component);
  return yv.default = k, k.propTypes = ce(ce({}, _.resizableProps), {}, {
    children: R.default.element
  }), yv;
}
var Rw;
function ok() {
  return Rw || (Rw = 1, vv.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, vv.exports.Resizable = jw().default, vv.exports.ResizableBox = ik().default), vv.exports;
}
var eu = {}, Cw;
function Hw() {
  if (Cw) return eu;
  Cw = 1, Object.defineProperty(eu, "__esModule", {
    value: !0
  }), eu.resizeHandleType = eu.resizeHandleAxesType = eu.default = void 0;
  var y = m(/* @__PURE__ */ Zu()), R = m(Sa());
  function m(H) {
    return H && H.__esModule ? H : { default: H };
  }
  const _ = eu.resizeHandleAxesType = y.default.arrayOf(y.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), Q = eu.resizeHandleType = y.default.oneOfType([y.default.node, y.default.func]);
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
      var S = H.layout;
      S !== void 0 && rd().validateLayout(S, "layout");
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
    resizeHandle: Q,
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
    children: function(H, S) {
      const le = H[S], B = {};
      R.default.Children.forEach(le, function(Y) {
        if ((Y == null ? void 0 : Y.key) != null) {
          if (B[Y.key])
            throw new Error('Duplicate child key "' + Y.key + '" found! This will cause problems in ReactGridLayout.');
          B[Y.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: y.default.any
  }, eu;
}
var ww;
function lk() {
  if (ww) return dv;
  ww = 1, Object.defineProperty(dv, "__esModule", {
    value: !0
  }), dv.default = void 0;
  var y = Y(Sa()), R = by(), m = Y(/* @__PURE__ */ Zu()), _ = lb(), Q = ok(), H = rd(), S = ib(), le = Hw(), B = Y(Ty());
  function Y(K) {
    return K && K.__esModule ? K : { default: K };
  }
  function ce(K, k) {
    var g = Object.keys(K);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(K);
      k && (T = T.filter(function(w) {
        return Object.getOwnPropertyDescriptor(K, w).enumerable;
      })), g.push.apply(g, T);
    }
    return g;
  }
  function V(K) {
    for (var k = 1; k < arguments.length; k++) {
      var g = arguments[k] != null ? arguments[k] : {};
      k % 2 ? ce(Object(g), !0).forEach(function(T) {
        ne(K, T, g[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(K, Object.getOwnPropertyDescriptors(g)) : ce(Object(g)).forEach(function(T) {
        Object.defineProperty(K, T, Object.getOwnPropertyDescriptor(g, T));
      });
    }
    return K;
  }
  function ne(K, k, g) {
    return (k = he(k)) in K ? Object.defineProperty(K, k, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : K[k] = g, K;
  }
  function he(K) {
    var k = Ue(K, "string");
    return typeof k == "symbol" ? k : k + "";
  }
  function Ue(K, k) {
    if (typeof K != "object" || !K) return K;
    var g = K[Symbol.toPrimitive];
    if (g !== void 0) {
      var T = g.call(K, k);
      if (typeof T != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (k === "string" ? String : Number)(K);
  }
  let ye = class extends y.default.Component {
    constructor() {
      super(...arguments), ne(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), ne(this, "elementRef", /* @__PURE__ */ y.default.createRef()), ne(this, "onDragStart", (k, g) => {
        let {
          node: T
        } = g;
        const {
          onDragStart: w,
          transformScale: b
        } = this.props;
        if (!w) return;
        const D = {
          top: 0,
          left: 0
        }, {
          offsetParent: P
        } = T;
        if (!P) return;
        const fe = P.getBoundingClientRect(), de = T.getBoundingClientRect(), _e = de.left / b, Pe = fe.left / b, ke = de.top / b, Se = fe.top / b;
        D.left = _e - Pe + P.scrollLeft, D.top = ke - Se + P.scrollTop, this.setState({
          dragging: D
        });
        const {
          x: qe,
          y: Qe
        } = (0, S.calcXY)(this.getPositionParams(), D.top, D.left, this.props.w, this.props.h);
        return w.call(this, this.props.i, qe, Qe, {
          e: k,
          node: T,
          newPosition: D
        });
      }), ne(this, "onDrag", (k, g, T) => {
        let {
          node: w,
          deltaX: b,
          deltaY: D
        } = g;
        const {
          onDrag: P
        } = this.props;
        if (!P) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let fe = this.state.dragging.top + D, de = this.state.dragging.left + b;
        const {
          isBounded: _e,
          i: Pe,
          w: ke,
          h: Se,
          containerWidth: qe
        } = this.props, Qe = this.getPositionParams();
        if (_e) {
          const {
            offsetParent: Be
          } = w;
          if (Be) {
            const {
              margin: I,
              rowHeight: O
            } = this.props, G = Be.clientHeight - (0, S.calcGridItemWHPx)(Se, O, I[1]);
            fe = (0, S.clamp)(fe, 0, G);
            const Ae = (0, S.calcGridColWidth)(Qe), Oe = qe - (0, S.calcGridItemWHPx)(ke, Ae, I[0]);
            de = (0, S.clamp)(de, 0, Oe);
          }
        }
        const Ie = {
          top: fe,
          left: de
        };
        T ? this.setState({
          dragging: Ie
        }) : (0, R.flushSync)(() => {
          this.setState({
            dragging: Ie
          });
        });
        const {
          x: xe,
          y: ge
        } = (0, S.calcXY)(Qe, fe, de, ke, Se);
        return P.call(this, Pe, xe, ge, {
          e: k,
          node: w,
          newPosition: Ie
        });
      }), ne(this, "onDragStop", (k, g) => {
        let {
          node: T
        } = g;
        const {
          onDragStop: w
        } = this.props;
        if (!w) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: b,
          h: D,
          i: P
        } = this.props, {
          left: fe,
          top: de
        } = this.state.dragging, _e = {
          top: de,
          left: fe
        };
        this.setState({
          dragging: null
        });
        const {
          x: Pe,
          y: ke
        } = (0, S.calcXY)(this.getPositionParams(), de, fe, b, D);
        return w.call(this, P, Pe, ke, {
          e: k,
          node: T,
          newPosition: _e
        });
      }), ne(this, "onResizeStop", (k, g, T) => this.onResizeHandler(k, g, T, "onResizeStop")), ne(this, "onResizeStart", (k, g, T) => this.onResizeHandler(k, g, T, "onResizeStart")), ne(this, "onResize", (k, g, T) => this.onResizeHandler(k, g, T, "onResize"));
    }
    shouldComponentUpdate(k, g) {
      if (this.props.children !== k.children || this.props.droppingPosition !== k.droppingPosition) return !0;
      const T = (0, S.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), w = (0, S.calcGridItemPosition)(this.getPositionParams(k), k.x, k.y, k.w, k.h, g);
      return !(0, H.fastPositionEqual)(T, w) || this.props.useCSSTransforms !== k.useCSSTransforms;
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
        droppingPosition: g
      } = this.props;
      if (!g) return;
      const T = this.elementRef.current;
      if (!T) return;
      const w = k.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: b
      } = this.state, D = b && g.left !== w.left || g.top !== w.top;
      if (!b)
        this.onDragStart(g.e, {
          node: T,
          deltaX: g.left,
          deltaY: g.top
        });
      else if (D) {
        const P = g.left - b.left, fe = g.top - b.top;
        this.onDrag(
          g.e,
          {
            node: T,
            deltaX: P,
            deltaY: fe
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
        usePercentages: g,
        containerWidth: T,
        useCSSTransforms: w
      } = this.props;
      let b;
      return w ? b = (0, H.setTransform)(k) : (b = (0, H.setTopLeft)(k), g && (b.left = (0, H.perc)(k.left / T), b.width = (0, H.perc)(k.width / T))), b;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(k, g) {
      return /* @__PURE__ */ y.default.createElement(_.DraggableCore, {
        disabled: !g,
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
    curryResizeHandler(k, g) {
      return (T, w) => (
        /*: Function*/
        g(T, w, k)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(k, g, T) {
      const {
        cols: w,
        minW: b,
        minH: D,
        maxW: P,
        maxH: fe,
        transformScale: de,
        resizeHandles: _e,
        resizeHandle: Pe
      } = this.props, ke = this.getPositionParams(), Se = (0, S.calcGridItemPosition)(ke, 0, 0, w, 0).width, qe = (0, S.calcGridItemPosition)(ke, 0, 0, b, D), Qe = (0, S.calcGridItemPosition)(ke, 0, 0, P, fe), Ie = [qe.width, qe.height], xe = [Math.min(Qe.width, Se), Math.min(Qe.height, 1 / 0)];
      return /* @__PURE__ */ y.default.createElement(
        Q.Resizable,
        {
          draggableOpts: {
            disabled: !T
          },
          className: T ? void 0 : "react-resizable-hide",
          width: g.width,
          height: g.height,
          minConstraints: Ie,
          maxConstraints: xe,
          onResizeStop: this.curryResizeHandler(g, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(g, this.onResizeStart),
          onResize: this.curryResizeHandler(g, this.onResize),
          transformScale: de,
          resizeHandles: _e,
          handle: Pe
        },
        k
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(k, g, T, w) {
      let {
        node: b,
        size: D,
        handle: P
      } = g;
      const fe = this.props[w];
      if (!fe) return;
      const {
        x: de,
        y: _e,
        i: Pe,
        maxH: ke,
        minH: Se,
        containerWidth: qe
      } = this.props, {
        minW: Qe,
        maxW: Ie
      } = this.props;
      let xe = D;
      b && (xe = (0, H.resizeItemInDirection)(P, T, D, qe), (0, R.flushSync)(() => {
        this.setState({
          resizing: w === "onResizeStop" ? null : xe
        });
      }));
      let {
        w: ge,
        h: Be
      } = (0, S.calcWH)(this.getPositionParams(), xe.width, xe.height, de, _e, P);
      ge = (0, S.clamp)(ge, Math.max(Qe, 1), Ie), Be = (0, S.clamp)(Be, Se, ke), fe.call(this, Pe, ge, Be, {
        e: k,
        node: b,
        size: xe,
        handle: P
      });
    }
    render() {
      const {
        x: k,
        y: g,
        w: T,
        h: w,
        isDraggable: b,
        isResizable: D,
        droppingPosition: P,
        useCSSTransforms: fe
      } = this.props, de = (0, S.calcGridItemPosition)(this.getPositionParams(), k, g, T, w, this.state), _e = y.default.Children.only(this.props.children);
      let Pe = /* @__PURE__ */ y.default.cloneElement(_e, {
        ref: this.elementRef,
        className: (0, B.default)("react-grid-item", _e.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": b,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!P,
          cssTransforms: fe
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: V(V(V({}, this.props.style), _e.props.style), this.createStyle(de))
      });
      return Pe = this.mixinResizable(Pe, de, D), Pe = this.mixinDraggable(Pe, b), Pe;
    }
  };
  return dv.default = ye, ne(ye, "propTypes", {
    // Children must be only a single element
    children: m.default.element,
    // General grid attributes
    cols: m.default.number.isRequired,
    containerWidth: m.default.number.isRequired,
    rowHeight: m.default.number.isRequired,
    margin: m.default.array.isRequired,
    maxRows: m.default.number.isRequired,
    containerPadding: m.default.array.isRequired,
    // These are all in grid units
    x: m.default.number.isRequired,
    y: m.default.number.isRequired,
    w: m.default.number.isRequired,
    h: m.default.number.isRequired,
    // All optional
    minW: function(K, k) {
      const g = K[k];
      if (typeof g != "number") return new Error("minWidth not Number");
      if (g > K.w || g > K.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(K, k) {
      const g = K[k];
      if (typeof g != "number") return new Error("maxWidth not Number");
      if (g < K.w || g < K.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(K, k) {
      const g = K[k];
      if (typeof g != "number") return new Error("minHeight not Number");
      if (g > K.h || g > K.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(K, k) {
      const g = K[k];
      if (typeof g != "number") return new Error("maxHeight not Number");
      if (g < K.h || g < K.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: m.default.string.isRequired,
    // Resize handle options
    resizeHandles: le.resizeHandleAxesType,
    resizeHandle: le.resizeHandleType,
    // Functions
    onDragStop: m.default.func,
    onDragStart: m.default.func,
    onDrag: m.default.func,
    onResizeStop: m.default.func,
    onResizeStart: m.default.func,
    onResize: m.default.func,
    // Flags
    isDraggable: m.default.bool.isRequired,
    isResizable: m.default.bool.isRequired,
    isBounded: m.default.bool.isRequired,
    static: m.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: m.default.bool.isRequired,
    transformScale: m.default.number,
    // Others
    className: m.default.string,
    // Selector for draggable handle
    handle: m.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: m.default.string,
    // Current position of a dropping element
    droppingPosition: m.default.shape({
      e: m.default.object.isRequired,
      left: m.default.number.isRequired,
      top: m.default.number.isRequired
    })
  }), ne(ye, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), dv;
}
var Tw;
function Fw() {
  if (Tw) return fv;
  Tw = 1, Object.defineProperty(fv, "__esModule", {
    value: !0
  }), fv.default = void 0;
  var y = B(Sa()), R = /* @__PURE__ */ ab(), m = le(Ty()), _ = rd(), Q = ib(), H = le(lk()), S = le(Hw());
  function le(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function B(k, g) {
    if (typeof WeakMap == "function") var T = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap();
    return (B = function(b, D) {
      if (!D && b && b.__esModule) return b;
      var P, fe, de = { __proto__: null, default: b };
      if (b === null || typeof b != "object" && typeof b != "function") return de;
      if (P = D ? w : T) {
        if (P.has(b)) return P.get(b);
        P.set(b, de);
      }
      for (const _e in b) _e !== "default" && {}.hasOwnProperty.call(b, _e) && ((fe = (P = Object.defineProperty) && Object.getOwnPropertyDescriptor(b, _e)) && (fe.get || fe.set) ? P(de, _e, fe) : de[_e] = b[_e]);
      return de;
    })(k, g);
  }
  function Y(k, g) {
    var T = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(k);
      g && (w = w.filter(function(b) {
        return Object.getOwnPropertyDescriptor(k, b).enumerable;
      })), T.push.apply(T, w);
    }
    return T;
  }
  function ce(k) {
    for (var g = 1; g < arguments.length; g++) {
      var T = arguments[g] != null ? arguments[g] : {};
      g % 2 ? Y(Object(T), !0).forEach(function(w) {
        V(k, w, T[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(T)) : Y(Object(T)).forEach(function(w) {
        Object.defineProperty(k, w, Object.getOwnPropertyDescriptor(T, w));
      });
    }
    return k;
  }
  function V(k, g, T) {
    return (g = ne(g)) in k ? Object.defineProperty(k, g, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : k[g] = T, k;
  }
  function ne(k) {
    var g = he(k, "string");
    return typeof g == "symbol" ? g : g + "";
  }
  function he(k, g) {
    if (typeof k != "object" || !k) return k;
    var T = k[Symbol.toPrimitive];
    if (T !== void 0) {
      var w = T.call(k, g);
      if (typeof w != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (g === "string" ? String : Number)(k);
  }
  const Ue = "react-grid-layout";
  let ye = !1;
  try {
    ye = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let K = class extends y.Component {
    constructor() {
      super(...arguments), V(this, "state", {
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
      }), V(this, "dragEnterCounter", 0), V(this, "onDragStart", (g, T, w, b) => {
        let {
          e: D,
          node: P
        } = b;
        const {
          layout: fe
        } = this.state, de = (0, _.getLayoutItem)(fe, g);
        if (!de) return;
        const _e = {
          w: de.w,
          h: de.h,
          x: de.x,
          y: de.y,
          placeholder: !0,
          i: g
        };
        return this.setState({
          oldDragItem: (0, _.cloneLayoutItem)(de),
          oldLayout: fe,
          activeDrag: _e
        }), this.props.onDragStart(fe, de, de, null, D, P);
      }), V(this, "onDrag", (g, T, w, b) => {
        let {
          e: D,
          node: P
        } = b;
        const {
          oldDragItem: fe
        } = this.state;
        let {
          layout: de
        } = this.state;
        const {
          cols: _e,
          allowOverlap: Pe,
          preventCollision: ke
        } = this.props, Se = (0, _.getLayoutItem)(de, g);
        if (!Se) return;
        const qe = {
          w: Se.w,
          h: Se.h,
          x: Se.x,
          y: Se.y,
          placeholder: !0,
          i: g
        };
        de = (0, _.moveElement)(de, Se, T, w, !0, ke, (0, _.compactType)(this.props), _e, Pe), this.props.onDrag(de, fe, Se, qe, D, P), this.setState({
          layout: Pe ? de : (0, _.compact)(de, (0, _.compactType)(this.props), _e),
          activeDrag: qe
        });
      }), V(this, "onDragStop", (g, T, w, b) => {
        let {
          e: D,
          node: P
        } = b;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: fe
        } = this.state;
        let {
          layout: de
        } = this.state;
        const {
          cols: _e,
          preventCollision: Pe,
          allowOverlap: ke
        } = this.props, Se = (0, _.getLayoutItem)(de, g);
        if (!Se) return;
        de = (0, _.moveElement)(de, Se, T, w, !0, Pe, (0, _.compactType)(this.props), _e, ke);
        const Qe = ke ? de : (0, _.compact)(de, (0, _.compactType)(this.props), _e);
        this.props.onDragStop(Qe, fe, Se, null, D, P);
        const {
          oldLayout: Ie
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Qe,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(Qe, Ie);
      }), V(this, "onResizeStart", (g, T, w, b) => {
        let {
          e: D,
          node: P
        } = b;
        const {
          layout: fe
        } = this.state, de = (0, _.getLayoutItem)(fe, g);
        de && (this.setState({
          oldResizeItem: (0, _.cloneLayoutItem)(de),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(fe, de, de, null, D, P));
      }), V(this, "onResize", (g, T, w, b) => {
        let {
          e: D,
          node: P,
          size: fe,
          handle: de
        } = b;
        const {
          oldResizeItem: _e
        } = this.state, {
          layout: Pe
        } = this.state, {
          cols: ke,
          preventCollision: Se,
          allowOverlap: qe
        } = this.props;
        let Qe = !1, Ie, xe, ge;
        const [Be, I] = (0, _.withLayoutItem)(Pe, g, (G) => {
          let Ae;
          return xe = G.x, ge = G.y, ["sw", "w", "nw", "n", "ne"].indexOf(de) !== -1 && (["sw", "nw", "w"].indexOf(de) !== -1 && (xe = G.x + (G.w - T), T = G.x !== xe && xe < 0 ? G.w : T, xe = xe < 0 ? 0 : xe), ["ne", "n", "nw"].indexOf(de) !== -1 && (ge = G.y + (G.h - w), w = G.y !== ge && ge < 0 ? G.h : w, ge = ge < 0 ? 0 : ge), Qe = !0), Se && !qe && (Ae = (0, _.getAllCollisions)(Pe, ce(ce({}, G), {}, {
            w: T,
            h: w,
            x: xe,
            y: ge
          })).filter((Ye) => Ye.i !== G.i).length > 0, Ae && (ge = G.y, w = G.h, xe = G.x, T = G.w, Qe = !1)), G.w = T, G.h = w, G;
        });
        if (!I) return;
        Ie = Be, Qe && (Ie = (0, _.moveElement)(Be, I, xe, ge, !0, this.props.preventCollision, (0, _.compactType)(this.props), ke, qe));
        const O = {
          w: I.w,
          h: I.h,
          x: I.x,
          y: I.y,
          static: !0,
          i: g
        };
        this.props.onResize(Ie, _e, I, O, D, P), this.setState({
          layout: qe ? Ie : (0, _.compact)(Ie, (0, _.compactType)(this.props), ke),
          activeDrag: O
        });
      }), V(this, "onResizeStop", (g, T, w, b) => {
        let {
          e: D,
          node: P
        } = b;
        const {
          layout: fe,
          oldResizeItem: de
        } = this.state, {
          cols: _e,
          allowOverlap: Pe
        } = this.props, ke = (0, _.getLayoutItem)(fe, g), Se = Pe ? fe : (0, _.compact)(fe, (0, _.compactType)(this.props), _e);
        this.props.onResizeStop(Se, de, ke, null, D, P);
        const {
          oldLayout: qe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Se,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(Se, qe);
      }), V(this, "onDragOver", (g) => {
        var T;
        if (g.preventDefault(), g.stopPropagation(), ye && // $FlowIgnore can't figure this out
        !((T = g.nativeEvent.target) !== null && T !== void 0 && T.classList.contains(Ue)))
          return !1;
        const {
          droppingItem: w,
          onDropDragOver: b,
          margin: D,
          cols: P,
          rowHeight: fe,
          maxRows: de,
          width: _e,
          containerPadding: Pe,
          transformScale: ke
        } = this.props, Se = b == null ? void 0 : b(g);
        if (Se === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const qe = ce(ce({}, w), Se), {
          layout: Qe
        } = this.state, Ie = g.currentTarget.getBoundingClientRect(), xe = g.clientX - Ie.left, ge = g.clientY - Ie.top, Be = {
          left: xe / ke,
          top: ge / ke,
          e: g
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: I,
              top: O
            } = this.state.droppingPosition;
            (I != xe || O != ge) && this.setState({
              droppingPosition: Be
            });
          }
        } else {
          const I = {
            cols: P,
            margin: D,
            maxRows: de,
            rowHeight: fe,
            containerWidth: _e,
            containerPadding: Pe || D
          }, O = (0, Q.calcXY)(I, ge, xe, qe.w, qe.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ y.createElement("div", {
              key: qe.i
            }),
            droppingPosition: Be,
            layout: [...Qe, ce(ce({}, qe), {}, {
              x: O.x,
              y: O.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), V(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: g,
          cols: T
        } = this.props, {
          layout: w
        } = this.state, b = (0, _.compact)(w.filter((D) => D.i !== g.i), (0, _.compactType)(this.props), T, this.props.allowOverlap);
        this.setState({
          layout: b,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), V(this, "onDragLeave", (g) => {
        g.preventDefault(), g.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), V(this, "onDragEnter", (g) => {
        g.preventDefault(), g.stopPropagation(), this.dragEnterCounter++;
      }), V(this, "onDrop", (g) => {
        g.preventDefault(), g.stopPropagation();
        const {
          droppingItem: T
        } = this.props, {
          layout: w
        } = this.state, b = w.find((D) => D.i === T.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(w, b, g);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(g, T) {
      let w;
      return T.activeDrag ? null : (!(0, R.deepEqual)(g.layout, T.propsLayout) || g.compactType !== T.compactType ? w = g.layout : (0, _.childrenEqual)(g.children, T.children) || (w = T.layout), w ? {
        layout: (0, _.synchronizeLayoutWithChildren)(w, g.children, g.cols, (0, _.compactType)(g), g.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: g.compactType,
        children: g.children,
        propsLayout: g.layout
      } : null);
    }
    shouldComponentUpdate(g, T) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== g.children || !(0, _.fastRGLPropsEqual)(this.props, g, R.deepEqual) || this.state.activeDrag !== T.activeDrag || this.state.mounted !== T.mounted || this.state.droppingPosition !== T.droppingPosition
      );
    }
    componentDidUpdate(g, T) {
      if (!this.state.activeDrag) {
        const w = this.state.layout, b = T.layout;
        this.onLayoutMaybeChanged(w, b);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const g = (0, _.bottom)(this.state.layout), T = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return g * this.props.rowHeight + (g - 1) * this.props.margin[1] + T * 2 + "px";
    }
    onLayoutMaybeChanged(g, T) {
      T || (T = this.state.layout), (0, R.deepEqual)(T, g) || this.props.onLayoutChange(g);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: g
      } = this.state;
      if (!g) return null;
      const {
        width: T,
        cols: w,
        margin: b,
        containerPadding: D,
        rowHeight: P,
        maxRows: fe,
        useCSSTransforms: de,
        transformScale: _e
      } = this.props;
      return /* @__PURE__ */ y.createElement(H.default, {
        w: g.w,
        h: g.h,
        x: g.x,
        y: g.y,
        i: g.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: T,
        cols: w,
        margin: b,
        containerPadding: D || b,
        maxRows: fe,
        rowHeight: P,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: de,
        transformScale: _e
      }, /* @__PURE__ */ y.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(g, T) {
      if (!g || !g.key) return;
      const w = (0, _.getLayoutItem)(this.state.layout, String(g.key));
      if (!w) return null;
      const {
        width: b,
        cols: D,
        margin: P,
        containerPadding: fe,
        rowHeight: de,
        maxRows: _e,
        isDraggable: Pe,
        isResizable: ke,
        isBounded: Se,
        useCSSTransforms: qe,
        transformScale: Qe,
        draggableCancel: Ie,
        draggableHandle: xe,
        resizeHandles: ge,
        resizeHandle: Be
      } = this.props, {
        mounted: I,
        droppingPosition: O
      } = this.state, G = typeof w.isDraggable == "boolean" ? w.isDraggable : !w.static && Pe, Ae = typeof w.isResizable == "boolean" ? w.isResizable : !w.static && ke, Oe = w.resizeHandles || ge, Ye = G && Se && w.isBounded !== !1;
      return /* @__PURE__ */ y.createElement(H.default, {
        containerWidth: b,
        cols: D,
        margin: P,
        containerPadding: fe || P,
        maxRows: _e,
        rowHeight: de,
        cancel: Ie,
        handle: xe,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: G,
        isResizable: Ae,
        isBounded: Ye,
        useCSSTransforms: qe && I,
        usePercentages: !I,
        transformScale: Qe,
        w: w.w,
        h: w.h,
        x: w.x,
        y: w.y,
        i: w.i,
        minH: w.minH,
        minW: w.minW,
        maxH: w.maxH,
        maxW: w.maxW,
        static: w.static,
        droppingPosition: T ? O : void 0,
        resizeHandles: Oe,
        resizeHandle: Be
      }, g);
    }
    render() {
      const {
        className: g,
        style: T,
        isDroppable: w,
        innerRef: b
      } = this.props, D = (0, m.default)(Ue, g), P = ce({
        height: this.containerHeight()
      }, T);
      return /* @__PURE__ */ y.createElement("div", {
        ref: b,
        className: D,
        style: P,
        onDrop: w ? this.onDrop : _.noop,
        onDragLeave: w ? this.onDragLeave : _.noop,
        onDragEnter: w ? this.onDragEnter : _.noop,
        onDragOver: w ? this.onDragOver : _.noop
      }, y.Children.map(this.props.children, (fe) => this.processGridItem(fe)), w && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return fv.default = K, V(K, "displayName", "ReactGridLayout"), V(K, "propTypes", S.default), V(K, "defaultProps", {
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
  }), fv;
}
var gv = {}, vc = {}, xw;
function Bw() {
  if (xw) return vc;
  xw = 1, Object.defineProperty(vc, "__esModule", {
    value: !0
  }), vc.findOrGenerateResponsiveLayout = _, vc.getBreakpointFromWidth = R, vc.getColsFromBreakpoint = m, vc.sortBreakpoints = Q;
  var y = rd();
  function R(H, S) {
    const le = Q(H);
    let B = le[0];
    for (let Y = 1, ce = le.length; Y < ce; Y++) {
      const V = le[Y];
      S > H[V] && (B = V);
    }
    return B;
  }
  function m(H, S) {
    if (!S[H])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + H + " is missing!");
    return S[H];
  }
  function _(H, S, le, B, Y, ce) {
    if (H[le]) return (0, y.cloneLayout)(H[le]);
    let V = H[B];
    const ne = Q(S), he = ne.slice(ne.indexOf(le));
    for (let Ue = 0, ye = he.length; Ue < ye; Ue++) {
      const K = he[Ue];
      if (H[K]) {
        V = H[K];
        break;
      }
    }
    return V = (0, y.cloneLayout)(V || []), (0, y.compact)((0, y.correctBounds)(V, {
      cols: Y
    }), ce, Y);
  }
  function Q(H) {
    return Object.keys(H).sort(function(le, B) {
      return H[le] - H[B];
    });
  }
  return vc;
}
var _w;
function uk() {
  if (_w) return gv;
  _w = 1, Object.defineProperty(gv, "__esModule", {
    value: !0
  }), gv.default = void 0;
  var y = B(Sa()), R = le(/* @__PURE__ */ Zu()), m = /* @__PURE__ */ ab(), _ = rd(), Q = Bw(), H = le(Fw());
  const S = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function le(w) {
    return w && w.__esModule ? w : { default: w };
  }
  function B(w, b) {
    if (typeof WeakMap == "function") var D = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap();
    return (B = function(fe, de) {
      if (!de && fe && fe.__esModule) return fe;
      var _e, Pe, ke = { __proto__: null, default: fe };
      if (fe === null || typeof fe != "object" && typeof fe != "function") return ke;
      if (_e = de ? P : D) {
        if (_e.has(fe)) return _e.get(fe);
        _e.set(fe, ke);
      }
      for (const Se in fe) Se !== "default" && {}.hasOwnProperty.call(fe, Se) && ((Pe = (_e = Object.defineProperty) && Object.getOwnPropertyDescriptor(fe, Se)) && (Pe.get || Pe.set) ? _e(ke, Se, Pe) : ke[Se] = fe[Se]);
      return ke;
    })(w, b);
  }
  function Y() {
    return Y = Object.assign ? Object.assign.bind() : function(w) {
      for (var b = 1; b < arguments.length; b++) {
        var D = arguments[b];
        for (var P in D) ({}).hasOwnProperty.call(D, P) && (w[P] = D[P]);
      }
      return w;
    }, Y.apply(null, arguments);
  }
  function ce(w, b) {
    if (w == null) return {};
    var D, P, fe = V(w, b);
    if (Object.getOwnPropertySymbols) {
      var de = Object.getOwnPropertySymbols(w);
      for (P = 0; P < de.length; P++) D = de[P], b.indexOf(D) === -1 && {}.propertyIsEnumerable.call(w, D) && (fe[D] = w[D]);
    }
    return fe;
  }
  function V(w, b) {
    if (w == null) return {};
    var D = {};
    for (var P in w) if ({}.hasOwnProperty.call(w, P)) {
      if (b.indexOf(P) !== -1) continue;
      D[P] = w[P];
    }
    return D;
  }
  function ne(w, b) {
    var D = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(w);
      b && (P = P.filter(function(fe) {
        return Object.getOwnPropertyDescriptor(w, fe).enumerable;
      })), D.push.apply(D, P);
    }
    return D;
  }
  function he(w) {
    for (var b = 1; b < arguments.length; b++) {
      var D = arguments[b] != null ? arguments[b] : {};
      b % 2 ? ne(Object(D), !0).forEach(function(P) {
        Ue(w, P, D[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(D)) : ne(Object(D)).forEach(function(P) {
        Object.defineProperty(w, P, Object.getOwnPropertyDescriptor(D, P));
      });
    }
    return w;
  }
  function Ue(w, b, D) {
    return (b = ye(b)) in w ? Object.defineProperty(w, b, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : w[b] = D, w;
  }
  function ye(w) {
    var b = K(w, "string");
    return typeof b == "symbol" ? b : b + "";
  }
  function K(w, b) {
    if (typeof w != "object" || !w) return w;
    var D = w[Symbol.toPrimitive];
    if (D !== void 0) {
      var P = D.call(w, b);
      if (typeof P != "object") return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (b === "string" ? String : Number)(w);
  }
  const k = (w) => Object.prototype.toString.call(w);
  function g(w, b) {
    return w == null ? null : Array.isArray(w) ? w : w[b];
  }
  let T = class extends y.Component {
    constructor() {
      super(...arguments), Ue(this, "state", this.generateInitialState()), Ue(this, "onLayoutChange", (b) => {
        this.props.onLayoutChange(b, he(he({}, this.props.layouts), {}, {
          [this.state.breakpoint]: b
        }));
      });
    }
    generateInitialState() {
      const {
        width: b,
        breakpoints: D,
        layouts: P,
        cols: fe
      } = this.props, de = (0, Q.getBreakpointFromWidth)(D, b), _e = (0, Q.getColsFromBreakpoint)(de, fe), Pe = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, Q.findOrGenerateResponsiveLayout)(P, D, de, de, _e, Pe),
        breakpoint: de,
        cols: _e
      };
    }
    static getDerivedStateFromProps(b, D) {
      if (!(0, m.deepEqual)(b.layouts, D.layouts)) {
        const {
          breakpoint: P,
          cols: fe
        } = D;
        return {
          layout: (0, Q.findOrGenerateResponsiveLayout)(b.layouts, b.breakpoints, P, P, fe, b.compactType),
          layouts: b.layouts
        };
      }
      return null;
    }
    componentDidUpdate(b) {
      (this.props.width != b.width || this.props.breakpoint !== b.breakpoint || !(0, m.deepEqual)(this.props.breakpoints, b.breakpoints) || !(0, m.deepEqual)(this.props.cols, b.cols)) && this.onWidthChange(b);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(b) {
      const {
        breakpoints: D,
        cols: P,
        layouts: fe,
        compactType: de
      } = this.props, _e = this.props.breakpoint || (0, Q.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), Pe = this.state.breakpoint, ke = (0, Q.getColsFromBreakpoint)(_e, P), Se = he({}, fe);
      if (Pe !== _e || b.breakpoints !== D || b.cols !== P) {
        Pe in Se || (Se[Pe] = (0, _.cloneLayout)(this.state.layout));
        let Ie = (0, Q.findOrGenerateResponsiveLayout)(Se, D, _e, Pe, ke, de);
        Ie = (0, _.synchronizeLayoutWithChildren)(Ie, this.props.children, ke, de, this.props.allowOverlap), Se[_e] = Ie, this.props.onBreakpointChange(_e, ke), this.props.onLayoutChange(Ie, Se), this.setState({
          breakpoint: _e,
          layout: Ie,
          cols: ke
        });
      }
      const qe = g(this.props.margin, _e), Qe = g(this.props.containerPadding, _e);
      this.props.onWidthChange(this.props.width, qe, ke, Qe);
    }
    render() {
      const b = this.props, {
        breakpoint: D,
        breakpoints: P,
        cols: fe,
        layouts: de,
        margin: _e,
        containerPadding: Pe,
        onBreakpointChange: ke,
        onLayoutChange: Se,
        onWidthChange: qe
      } = b, Qe = ce(b, S);
      return /* @__PURE__ */ y.createElement(H.default, Y({}, Qe, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: g(_e, this.state.breakpoint),
        containerPadding: g(Pe, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return gv.default = T, Ue(T, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: R.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: R.default.object,
    allowOverlap: R.default.bool,
    // # of cols. This is a breakpoint -> cols map
    cols: R.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: R.default.oneOfType([R.default.array, R.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: R.default.oneOfType([R.default.array, R.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts(w, b) {
      if (k(w[b]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + k(w[b]));
      Object.keys(w[b]).forEach((D) => {
        if (!(D in w.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, _.validateLayout)(w.layouts[D], "layouts." + D);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: R.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: R.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: R.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: R.default.func
  }), Ue(T, "defaultProps", {
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
  }), gv;
}
var Ey = {}, Vw = function() {
  if (typeof Map < "u")
    return Map;
  function y(R, m) {
    var _ = -1;
    return R.some(function(Q, H) {
      return Q[0] === m ? (_ = H, !0) : !1;
    }), _;
  }
  return (
    /** @class */
    function() {
      function R() {
        this.__entries__ = [];
      }
      return Object.defineProperty(R.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), R.prototype.get = function(m) {
        var _ = y(this.__entries__, m), Q = this.__entries__[_];
        return Q && Q[1];
      }, R.prototype.set = function(m, _) {
        var Q = y(this.__entries__, m);
        ~Q ? this.__entries__[Q][1] = _ : this.__entries__.push([m, _]);
      }, R.prototype.delete = function(m) {
        var _ = this.__entries__, Q = y(_, m);
        ~Q && _.splice(Q, 1);
      }, R.prototype.has = function(m) {
        return !!~y(this.__entries__, m);
      }, R.prototype.clear = function() {
        this.__entries__.splice(0);
      }, R.prototype.forEach = function(m, _) {
        _ === void 0 && (_ = null);
        for (var Q = 0, H = this.__entries__; Q < H.length; Q++) {
          var S = H[Q];
          m.call(_, S[1], S[0]);
        }
      }, R;
    }()
  );
}(), tb = typeof window < "u" && typeof document < "u" && window.document === document, Ry = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), sk = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ry) : function(y) {
    return setTimeout(function() {
      return y(Date.now());
    }, 1e3 / 60);
  };
}(), ck = 2;
function fk(y, R) {
  var m = !1, _ = !1, Q = 0;
  function H() {
    m && (m = !1, y()), _ && le();
  }
  function S() {
    sk(H);
  }
  function le() {
    var B = Date.now();
    if (m) {
      if (B - Q < ck)
        return;
      _ = !0;
    } else
      m = !0, _ = !1, setTimeout(S, R);
    Q = B;
  }
  return le;
}
var dk = 20, pk = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vk = typeof MutationObserver < "u", hk = (
  /** @class */
  function() {
    function y() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = fk(this.refresh.bind(this), dk);
    }
    return y.prototype.addObserver = function(R) {
      ~this.observers_.indexOf(R) || this.observers_.push(R), this.connected_ || this.connect_();
    }, y.prototype.removeObserver = function(R) {
      var m = this.observers_, _ = m.indexOf(R);
      ~_ && m.splice(_, 1), !m.length && this.connected_ && this.disconnect_();
    }, y.prototype.refresh = function() {
      var R = this.updateObservers_();
      R && this.refresh();
    }, y.prototype.updateObservers_ = function() {
      var R = this.observers_.filter(function(m) {
        return m.gatherActive(), m.hasActive();
      });
      return R.forEach(function(m) {
        return m.broadcastActive();
      }), R.length > 0;
    }, y.prototype.connect_ = function() {
      !tb || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vk ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, y.prototype.disconnect_ = function() {
      !tb || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, y.prototype.onTransitionEnd_ = function(R) {
      var m = R.propertyName, _ = m === void 0 ? "" : m, Q = pk.some(function(H) {
        return !!~_.indexOf(H);
      });
      Q && this.refresh();
    }, y.getInstance = function() {
      return this.instance_ || (this.instance_ = new y()), this.instance_;
    }, y.instance_ = null, y;
  }()
), Iw = function(y, R) {
  for (var m = 0, _ = Object.keys(R); m < _.length; m++) {
    var Q = _[m];
    Object.defineProperty(y, Q, {
      value: R[Q],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return y;
}, nd = function(y) {
  var R = y && y.ownerDocument && y.ownerDocument.defaultView;
  return R || Ry;
}, $w = xy(0, 0, 0, 0);
function Cy(y) {
  return parseFloat(y) || 0;
}
function Ow(y) {
  for (var R = [], m = 1; m < arguments.length; m++)
    R[m - 1] = arguments[m];
  return R.reduce(function(_, Q) {
    var H = y["border-" + Q + "-width"];
    return _ + Cy(H);
  }, 0);
}
function mk(y) {
  for (var R = ["top", "right", "bottom", "left"], m = {}, _ = 0, Q = R; _ < Q.length; _++) {
    var H = Q[_], S = y["padding-" + H];
    m[H] = Cy(S);
  }
  return m;
}
function yk(y) {
  var R = y.getBBox();
  return xy(0, 0, R.width, R.height);
}
function gk(y) {
  var R = y.clientWidth, m = y.clientHeight;
  if (!R && !m)
    return $w;
  var _ = nd(y).getComputedStyle(y), Q = mk(_), H = Q.left + Q.right, S = Q.top + Q.bottom, le = Cy(_.width), B = Cy(_.height);
  if (_.boxSizing === "border-box" && (Math.round(le + H) !== R && (le -= Ow(_, "left", "right") + H), Math.round(B + S) !== m && (B -= Ow(_, "top", "bottom") + S)), !Ek(y)) {
    var Y = Math.round(le + H) - R, ce = Math.round(B + S) - m;
    Math.abs(Y) !== 1 && (le -= Y), Math.abs(ce) !== 1 && (B -= ce);
  }
  return xy(Q.left, Q.top, le, B);
}
var Sk = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(y) {
    return y instanceof nd(y).SVGGraphicsElement;
  } : function(y) {
    return y instanceof nd(y).SVGElement && typeof y.getBBox == "function";
  };
}();
function Ek(y) {
  return y === nd(y).document.documentElement;
}
function bk(y) {
  return tb ? Sk(y) ? yk(y) : gk(y) : $w;
}
function Rk(y) {
  var R = y.x, m = y.y, _ = y.width, Q = y.height, H = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, S = Object.create(H.prototype);
  return Iw(S, {
    x: R,
    y: m,
    width: _,
    height: Q,
    top: m,
    right: R + _,
    bottom: Q + m,
    left: R
  }), S;
}
function xy(y, R, m, _) {
  return { x: y, y: R, width: m, height: _ };
}
var Ck = (
  /** @class */
  function() {
    function y(R) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xy(0, 0, 0, 0), this.target = R;
    }
    return y.prototype.isActive = function() {
      var R = bk(this.target);
      return this.contentRect_ = R, R.width !== this.broadcastWidth || R.height !== this.broadcastHeight;
    }, y.prototype.broadcastRect = function() {
      var R = this.contentRect_;
      return this.broadcastWidth = R.width, this.broadcastHeight = R.height, R;
    }, y;
  }()
), wk = (
  /** @class */
  /* @__PURE__ */ function() {
    function y(R, m) {
      var _ = Rk(m);
      Iw(this, { target: R, contentRect: _ });
    }
    return y;
  }()
), Tk = (
  /** @class */
  function() {
    function y(R, m, _) {
      if (this.activeObservations_ = [], this.observations_ = new Vw(), typeof R != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = R, this.controller_ = m, this.callbackCtx_ = _;
    }
    return y.prototype.observe = function(R) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(R instanceof nd(R).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var m = this.observations_;
        m.has(R) || (m.set(R, new Ck(R)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, y.prototype.unobserve = function(R) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(R instanceof nd(R).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var m = this.observations_;
        m.has(R) && (m.delete(R), m.size || this.controller_.removeObserver(this));
      }
    }, y.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, y.prototype.gatherActive = function() {
      var R = this;
      this.clearActive(), this.observations_.forEach(function(m) {
        m.isActive() && R.activeObservations_.push(m);
      });
    }, y.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var R = this.callbackCtx_, m = this.activeObservations_.map(function(_) {
          return new wk(_.target, _.broadcastRect());
        });
        this.callback_.call(R, m, R), this.clearActive();
      }
    }, y.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, y.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, y;
  }()
), Ww = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Vw(), qw = (
  /** @class */
  /* @__PURE__ */ function() {
    function y(R) {
      if (!(this instanceof y))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var m = hk.getInstance(), _ = new Tk(R, m, this);
      Ww.set(this, _);
    }
    return y;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(y) {
  qw.prototype[y] = function() {
    var R;
    return (R = Ww.get(this))[y].apply(R, arguments);
  };
});
var xk = function() {
  return typeof Ry.ResizeObserver < "u" ? Ry.ResizeObserver : qw;
}();
const _k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xk
}, Symbol.toStringTag, { value: "Module" })), Ok = /* @__PURE__ */ ND(_k);
var Dw;
function Dk() {
  if (Dw) return Ey;
  Dw = 1, Object.defineProperty(Ey, "__esModule", {
    value: !0
  }), Ey.default = Ue;
  var y = S(Sa()), R = H(/* @__PURE__ */ Zu()), m = H(Ok), _ = H(Ty());
  const Q = ["measureBeforeMount"];
  function H(ye) {
    return ye && ye.__esModule ? ye : { default: ye };
  }
  function S(ye, K) {
    if (typeof WeakMap == "function") var k = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (S = function(T, w) {
      if (!w && T && T.__esModule) return T;
      var b, D, P = { __proto__: null, default: T };
      if (T === null || typeof T != "object" && typeof T != "function") return P;
      if (b = w ? g : k) {
        if (b.has(T)) return b.get(T);
        b.set(T, P);
      }
      for (const fe in T) fe !== "default" && {}.hasOwnProperty.call(T, fe) && ((D = (b = Object.defineProperty) && Object.getOwnPropertyDescriptor(T, fe)) && (D.get || D.set) ? b(P, fe, D) : P[fe] = T[fe]);
      return P;
    })(ye, K);
  }
  function le() {
    return le = Object.assign ? Object.assign.bind() : function(ye) {
      for (var K = 1; K < arguments.length; K++) {
        var k = arguments[K];
        for (var g in k) ({}).hasOwnProperty.call(k, g) && (ye[g] = k[g]);
      }
      return ye;
    }, le.apply(null, arguments);
  }
  function B(ye, K) {
    if (ye == null) return {};
    var k, g, T = Y(ye, K);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(ye);
      for (g = 0; g < w.length; g++) k = w[g], K.indexOf(k) === -1 && {}.propertyIsEnumerable.call(ye, k) && (T[k] = ye[k]);
    }
    return T;
  }
  function Y(ye, K) {
    if (ye == null) return {};
    var k = {};
    for (var g in ye) if ({}.hasOwnProperty.call(ye, g)) {
      if (K.indexOf(g) !== -1) continue;
      k[g] = ye[g];
    }
    return k;
  }
  function ce(ye, K, k) {
    return (K = V(K)) in ye ? Object.defineProperty(ye, K, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : ye[K] = k, ye;
  }
  function V(ye) {
    var K = ne(ye, "string");
    return typeof K == "symbol" ? K : K + "";
  }
  function ne(ye, K) {
    if (typeof ye != "object" || !ye) return ye;
    var k = ye[Symbol.toPrimitive];
    if (k !== void 0) {
      var g = k.call(ye, K);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (K === "string" ? String : Number)(ye);
  }
  const he = "react-grid-layout";
  function Ue(ye) {
    var K;
    return K = class extends y.Component {
      constructor() {
        super(...arguments), ce(this, "state", {
          width: 1280
        }), ce(this, "elementRef", /* @__PURE__ */ y.createRef()), ce(this, "mounted", !1), ce(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new m.default((T) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const b = T[0].contentRect.width;
            this.setState({
              width: b
            });
          }
        });
        const g = this.elementRef.current;
        g instanceof HTMLElement && this.resizeObserver.observe(g);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const g = this.elementRef.current;
        g instanceof HTMLElement && this.resizeObserver.unobserve(g), this.resizeObserver.disconnect();
      }
      render() {
        const g = this.props, {
          measureBeforeMount: T
        } = g, w = B(g, Q);
        return T && !this.mounted ? /* @__PURE__ */ y.createElement("div", {
          className: (0, _.default)(this.props.className, he),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ y.createElement(ye, le({
          innerRef: this.elementRef
        }, w, this.state));
      }
    }, ce(K, "defaultProps", {
      measureBeforeMount: !1
    }), ce(K, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: R.default.bool
    }), K;
  }
  return Ey;
}
var kw;
function kk() {
  return kw || (kw = 1, function(y) {
    y.exports = Fw().default, y.exports.utils = rd(), y.exports.calculateUtils = ib(), y.exports.Responsive = uk().default, y.exports.Responsive.utils = Bw(), y.exports.WidthProvider = Dk().default;
  }(WE)), WE.exports;
}
var zw = kk();
const zk = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, wy = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, Yw = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, _n = (y, R, m, _, Q) => ({ i: y, x: R, y: m, w: _, h: Q, minW: Math.min(_, 3), minH: 2, maxW: 12, maxH: 12 }), nb = { lg: [_n("activity-history", 0, 0, 3, 4), _n("automations", 3, 0, 3, 4), _n("backup-restore", 6, 0, 3, 4), _n("access-control", 0, 5, 6, 3), _n("alarm-configuration", 6, 4, 6, 8), _n("security-status", 9, 0, 3, 3)], md: [_n("activity-history", 0, 0, 4, 4), _n("automations", 4, 0, 4, 4), _n("backup-restore", 0, 4, 4, 4), _n("access-control", 4, 4, 4, 3), _n("alarm-configuration", 0, 8, 8, 8), _n("security-status", 0, 16, 4, 3)], sm: [_n("activity-history", 0, 0, 4, 4), _n("automations", 0, 4, 4, 4), _n("backup-restore", 0, 8, 4, 4), _n("access-control", 0, 12, 4, 3), _n("alarm-configuration", 0, 15, 4, 8), _n("security-status", 0, 23, 4, 3)], xs: [_n("activity-history", 0, 0, 2, 4), _n("automations", 0, 4, 2, 4), _n("backup-restore", 0, 8, 2, 4), _n("access-control", 0, 12, 2, 3), _n("alarm-configuration", 0, 15, 2, 8), _n("security-status", 0, 23, 2, 3)], xxs: [_n("activity-history", 0, 0, 2, 4), _n("automations", 0, 4, 2, 4), _n("backup-restore", 0, 8, 2, 4), _n("access-control", 0, 12, 2, 3), _n("alarm-configuration", 0, 15, 2, 8), _n("security-status", 0, 23, 2, 3)] };
function Mk(y, R, m) {
  var _;
  return ((_ = Object.entries(Yw).filter(([, Q]) => Math.min(Q.w, m) <= m).map(([Q, H]) => ({ size: Q, distance: Math.abs(Math.min(H.w, m) - y) + Math.abs(H.h - R) })).sort((Q, H) => Q.distance - H.distance)[0]) == null ? void 0 : _.size) || "S";
}
function Lk(y, R) {
  const m = Yw[y];
  return { w: Math.min(m.w, R), h: m.h };
}
function Nk(y, R) {
  const m = Mk(y.w, y.h, R), _ = Lk(m, R);
  return { ...y, w: _.w, h: _.h, size: m };
}
function Mw(y, R) {
  return y.some((m) => m.i !== R.i && R.x < m.x + m.w && R.x + R.w > m.x && R.y < m.y + m.h && R.y + R.h > m.y);
}
function rb(y) {
  const R = {};
  return Object.keys(wy).forEach((m) => {
    const _ = wy[m], Q = Array.isArray(y == null ? void 0 : y[m]) ? y[m] : [], H = new Map(Q.map((S) => [S.i, S]));
    R[m] = (nb[m] || []).map((S) => {
      const le = H.get(S.i);
      return le ? { ...S, ...le, w: Math.min(Math.max(1, le.w), _), x: Math.max(0, Math.min(le.x, _ - Math.min(le.w, _))), y: Math.max(0, le.y) } : { ...S };
    });
  }), R;
}
class Pk {
  key(R, m) {
    return `argus:dashboard-layout:${R}:${m}`;
  }
  async load(R, m) {
    try {
      const _ = JSON.parse(localStorage.getItem(this.key(R, m)) || "null");
      return (_ == null ? void 0 : _.layoutVersion) === 1 ? rb(_.layouts) : null;
    } catch {
      return null;
    }
  }
  async save(R, m, _) {
    localStorage.setItem(this.key(R, m), JSON.stringify({ layoutVersion: 1, layouts: _, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }));
  }
  async reset(R, m) {
    localStorage.removeItem(this.key(R, m));
  }
}
const Ak = zw.WidthProvider(zw.Responsive);
function Uk({ widget: y, node: R, editing: m }) {
  const _ = Eo.useRef(null);
  return Eo.useLayoutEffect(() => {
    var Q, H;
    (Q = _.current) == null || Q.appendChild(R), R.draggable = !1, (H = R.querySelector(":scope > .panel-edit-overlay")) == null || H.remove(), m ? R.setAttribute("inert", "") : R.removeAttribute("inert");
  }, [R, m]), /* @__PURE__ */ yi.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ yi.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ yi.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${y.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ yi.jsx("strong", { children: y.title })
    ] }),
    /* @__PURE__ */ yi.jsx("div", { className: "argus-widget__content", ref: _ })
  ] });
}
function jk({ widgets: y, nodes: R, storage: m, userId: _, dashboardId: Q, onEditing: H, registerEditor: S }) {
  const [le, B] = Eo.useState(nb), [Y, ce] = Eo.useState(!1), [V, ne] = Eo.useState("lg"), he = Eo.useRef(nb), Ue = Eo.useRef();
  Eo.useEffect(() => {
    S(ce);
  }, [S]), Eo.useEffect(() => {
    m.load(_, Q).then((g) => {
      const T = rb(g);
      B(T), he.current = T;
    });
  }, [m, _, Q]), Eo.useEffect(() => {
    H(Y);
  }, [Y, H]), Eo.useEffect(() => () => clearTimeout(Ue.current), []);
  const ye = (g, T = !1) => {
    B(g), he.current = g, clearTimeout(Ue.current), Ue.current = window.setTimeout(() => m.save(_, Q, g), T ? 0 : 550);
  }, K = (g, T, w) => {
    const b = Nk(w, wy[V]), D = le[V] || [];
    if (Mw(D, b)) {
      B({ ...he.current });
      return;
    }
    ye({ ...le, [V]: D.map((P) => P.i === w.i ? b : P) }, !0);
  }, k = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await m.reset(_, Q);
    const g = rb(null);
    ye(g, !0);
  };
  return /* @__PURE__ */ yi.jsxs("section", { className: `argus-dashboard ${Y ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ yi.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ yi.jsx("button", { type: "button", onClick: () => ce((g) => !g), children: Y ? "✓ Listo" : "✥ Editar tablero" }),
      Y && /* @__PURE__ */ yi.jsx("button", { type: "button", onClick: k, children: "Restablecer diseño" })
    ] }),
    /* @__PURE__ */ yi.jsx(Ak, { className: "argus-dashboard-grid", layouts: le, breakpoints: zk, cols: wy, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: Y, isResizable: Y, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (g) => ne(g), onLayoutChange: (g, T) => {
      Y && B(T);
    }, onResizeStop: K, onDragStop: (g, T, w) => {
      const b = le[V] || [];
      if (Mw(b, w)) {
        B({ ...he.current });
        return;
      }
      ye({ ...le, [V]: b.map((D) => D.i === w.i ? w : D) }, !0);
    }, useCSSTransforms: !0, children: y.filter((g) => g.visible && R.has(g.id)).map((g) => /* @__PURE__ */ yi.jsx("div", { children: /* @__PURE__ */ yi.jsx(Uk, { widget: g, node: R.get(g.id), editing: Y }) }, g.id)) })
  ] });
}
const Lw = [{ id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 }, { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 }, { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 }, { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 }, { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 }, { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }];
function eb(y) {
  var S, le, B, Y, ce;
  const R = (S = y.shadowRoot) == null ? void 0 : S.getElementById("widget-grid");
  if (!R || y._argusReactRoot) return;
  let m = y.shadowRoot.getElementById("argus-react-dashboard-style");
  m || (m = document.createElement("style"), m.id = "argus-react-dashboard-style", m.textContent = qD + YD + GD, y.shadowRoot.appendChild(m));
  const _ = /* @__PURE__ */ new Map();
  Lw.forEach((V) => {
    const ne = y.shadowRoot.getElementById(V.nativeId);
    ne && _.set(V.id, ne);
  });
  const Q = document.createElement("div");
  Q.id = "argus-react-dashboard-root", R.appendChild(Q);
  const H = WD.createRoot(Q);
  y._argusReactRoot = H, H.render(/* @__PURE__ */ yi.jsx(jk, { widgets: Lw, nodes: _, storage: new Pk(), userId: ((le = y._currentProfile) == null ? void 0 : le.id) || ((Y = (B = y._hass) == null ? void 0 : B.user) == null ? void 0 : Y.id) || "anonymous", dashboardId: ((ce = y._dashboard) == null ? void 0 : ce.entry_id) || "default", onEditing: (V) => {
    y._widgetEditing = V, R.classList.toggle("editing", V);
  }, registerEditor: (V) => {
    y._argusReactSetEditing = V;
  } }));
}
function qk(y) {
  if (!y || y.__argusReactDashboard) return;
  y.__argusReactDashboard = !0;
  const R = y.prototype, m = R.connectedCallback, _ = R._load, Q = R._initWidgetGrid;
  R.connectedCallback = function() {
    const H = m == null ? void 0 : m.call(this);
    return queueMicrotask(() => eb(this)), H;
  }, R._load = async function() {
    const H = await (_ == null ? void 0 : _.call(this));
    return eb(this), H;
  }, R._initWidgetGrid = function() {
    const H = Q == null ? void 0 : Q.call(this);
    return eb(this), H;
  }, R._toggleWidgetEditing = function() {
    var H;
    (H = this._argusReactSetEditing) == null || H.call(this, !this._widgetEditing);
  };
}
export {
  qk as applyReactDashboardLayout
};
