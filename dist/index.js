'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var useScript_1 = createCommonjsModule(function (module, exports) {

var __rest = commonjsGlobal && commonjsGlobal.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scripts = void 0;

 // Previously loading/loaded scripts and their current status


exports.scripts = {}; // Check for existing <script> tags with this src. If so, update scripts[src]
// and return the new status; otherwise, return undefined.

var checkExisting = function (src) {
  var existing = document.querySelector("script[src=\"" + src + "\"]");

  if (existing) {
    // Assume existing <script> tag is already loaded,
    // and cache that data for future use.
    return exports.scripts[src] = {
      loading: false,
      error: null,
      scriptEl: existing
    };
  }

  return undefined;
};

function useScript(_a) {
  var src = _a.src,
      _b = _a.checkForExisting,
      checkForExisting = _b === void 0 ? false : _b,
      attributes = __rest(_a, ["src", "checkForExisting"]); // Check whether some instance of this hook considered this src.


  var status = src ? exports.scripts[src] : undefined; // If requested, check for existing <script> tags with this src
  // (unless we've already loaded the script ourselves).

  if (!status && checkForExisting && src && isBrowser) {
    status = checkExisting(src);
  }

  var _c = (0, react__default.useState)(status ? status.loading : Boolean(src)),
      loading = _c[0],
      setLoading = _c[1];

  var _d = (0, react__default.useState)(status ? status.error : null),
      error = _d[0],
      setError = _d[1];

  (0, react__default.useEffect)(function () {
    // Nothing to do on server, or if no src specified, or
    // if loading has already resolved to "loaded" or "error" state.
    if (!isBrowser || !src || !loading || error) return; // Check again for existing <script> tags with this src
    // in case it's changed since mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps

    status = exports.scripts[src];

    if (!status && checkForExisting) {
      status = checkExisting(src);
    } // Determine or create <script> element to listen to.


    var scriptEl;

    if (status) {
      scriptEl = status.scriptEl;
    } else {
      scriptEl = document.createElement('script');
      scriptEl.src = src;
      Object.keys(attributes).forEach(function (key) {
        if (scriptEl[key] === undefined) {
          scriptEl.setAttribute(key, attributes[key]);
        } else {
          scriptEl[key] = attributes[key];
        }
      });
      status = exports.scripts[src] = {
        loading: true,
        error: null,
        scriptEl: scriptEl
      };
    } // `status` is now guaranteed to be defined: either the old status
    // from a previous load, or a newly created one.


    var handleLoad = function () {
      if (status) status.loading = false;
      setLoading(false);
    };

    var handleError = function (error) {
      if (status) status.error = error;
      setError(error);
    };

    scriptEl.addEventListener('load', handleLoad);
    scriptEl.addEventListener('error', handleError);
    document.body.appendChild(scriptEl);
    return function () {
      scriptEl.removeEventListener('load', handleLoad);
      scriptEl.removeEventListener('error', handleError);
    }; // we need to ignore the attributes as they're a new object per call, so we'd never skip an effect call
  }, [src]);
  return [loading, error];
}

exports.default = useScript;
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
});

unwrapExports(useScript_1);
var useScript_2 = useScript_1.scripts;

var lib = createCommonjsModule(function (module, exports) {

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scripts = exports.default = void 0;



Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return __importDefault(useScript_1).default;
  }
});
Object.defineProperty(exports, "scripts", {
  enumerable: true,
  get: function () {
    return useScript_1.scripts;
  }
});
});

var useScript = unwrapExports(lib);
var lib_1 = lib.scripts;

var renameKeyInObject = function renameKeyInObject(o, oldKey, newKey) {
  var newObject = {};
  delete Object.assign(newObject, o, _defineProperty({}, newKey, o[oldKey]))[oldKey];
  return newObject;
};
/**
 * Wrap link handler creation and instance to clean up iframe via destroy() method
 */


var createPlaidHandler = function createPlaidHandler(config, creator) {
  var state = {
    plaid: null,
    open: false,
    onExitCallback: null
  }; // If Plaid is not available, throw an Error

  if (typeof window === 'undefined' || !window.Plaid) {
    throw new Error('Plaid not loaded');
  }

  state.plaid = creator(_objectSpread2(_objectSpread2({}, config), {}, {
    onExit: function onExit(error, metadata) {
      state.open = false;
      config.onExit && config.onExit(error, metadata);
      state.onExitCallback && state.onExitCallback();
    }
  }));

  var open = function open(institutionId) {
    if (!state.plaid) {
      return;
    }

    state.open = true;
    state.onExitCallback = null;
    state.plaid.open(institutionId);
  };

  var exit = function exit(exitOptions, callback) {
    if (!state.open || !state.plaid) {
      callback && callback();
      return;
    }

    state.onExitCallback = callback;
    state.plaid.exit(exitOptions);

    if (exitOptions && exitOptions.force) {
      state.open = false;
    }
  };

  var destroy = function destroy() {
    if (!state.plaid) {
      return;
    }

    state.plaid.destroy();
    state.plaid = null;
  };

  return {
    open: open,
    exit: exit,
    destroy: destroy
  };
};
var createPlaid = function createPlaid(options, creator) {
  var config = renameKeyInObject(options, 'publicKey', 'key');
  return createPlaidHandler(config, creator);
};

var PLAID_LINK_STABLE_URL = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js';

var noop = function noop() {};
/**
 * This hook loads Plaid script and manages the Plaid Link creation for you.
 * You get easy open & exit methods to call and loading & error states.
 *
 * This will destroy the Plaid UI on un-mounting so it's up to you to be
 * graceful to the user.
 *
 * A new Plaid instance is created every time the token and products options change.
 * It's up to you to prevent unnecessary re-creations on re-render.
 */


var usePlaidLink = function usePlaidLink(options) {
  // Asynchronously load the plaid/link/stable url into the DOM
  var _useScript = useScript({
    src: PLAID_LINK_STABLE_URL,
    checkForExisting: true
  }),
      _useScript2 = _slicedToArray(_useScript, 2),
      loading = _useScript2[0],
      error = _useScript2[1]; // internal state


  var _useState = react.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      plaid = _useState2[0],
      setPlaid = _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      iframeLoaded = _useState4[0],
      setIframeLoaded = _useState4[1];

  var products = (options.product || []).slice().sort().join(',');
  react.useEffect(function () {
    // If the link.js script is still loading, return prematurely
    if (loading) {
      return;
    } // If the token and publicKey is undefined, return prematurely


    if (!options.token && !options.publicKey) {
      return;
    }

    if (error || !window.Plaid) {
      // eslint-disable-next-line no-console
      console.error('Error loading Plaid', error);
      return;
    } // if an old plaid instance exists, destroy it before
    // creating a new one


    if (plaid != null) {
      plaid.exit({
        force: true
      }, function () {
        return plaid.destroy();
      });
    }

    var next = createPlaid(_objectSpread2(_objectSpread2({}, options), {}, {
      onLoad: function onLoad() {
        setIframeLoaded(true);
        options.onLoad && options.onLoad();
      }
    }), window.Plaid.create);
    setPlaid(next); // destroy the Plaid iframe factory

    return function () {
      return next.exit({
        force: true
      }, function () {
        return next.destroy();
      });
    };
  }, [loading, error, options.publicKey, options.token, products]);
  var ready = plaid != null && (!loading || iframeLoaded);

  var openNoOp = function openNoOp() {
    if (!options.token) {
      console.warn('react-plaid-link: You cannot call open() without a valid token supplied to usePlaidLink. This is a no-op.');
    }
  };

  return {
    error: error,
    ready: ready,
    exit: plaid ? plaid.exit : noop,
    open: plaid ? plaid.open : openNoOp
  };
};

var _excluded = ["children", "style", "className"];
var PlaidLink = function PlaidLink(props) {
  var children = props.children,
      style = props.style,
      className = props.className,
      config = _objectWithoutProperties(props, _excluded);

  var _usePlaidLink = usePlaidLink(_objectSpread2({}, config)),
      error = _usePlaidLink.error,
      open = _usePlaidLink.open;

  return /*#__PURE__*/react__default.createElement("button", {
    disabled: Boolean(error),
    type: "button",
    className: className,
    style: _objectSpread2({
      padding: '6px 4px',
      outline: 'none',
      background: '#FFFFFF',
      border: '2px solid #F1F1F1',
      borderRadius: '4px'
    }, style),
    onClick: function onClick() {
      return open();
    }
  }, children);
};
PlaidLink.displayName = 'PlaidLink';

// The following event names are stable and will not be deprecated or changed

(function (PlaidLinkStableEvent) {
  PlaidLinkStableEvent["OPEN"] = "OPEN";
  PlaidLinkStableEvent["EXIT"] = "EXIT";
  PlaidLinkStableEvent["HANDOFF"] = "HANDOFF";
  PlaidLinkStableEvent["SELECT_INSTITUTION"] = "SELECT_INSTITUTION";
  PlaidLinkStableEvent["ERROR"] = "ERROR";
  PlaidLinkStableEvent["BANK_INCOME_INSIGHTS_COMPLETED"] = "BANK_INCOME_INSIGHTS_COMPLETED";
  PlaidLinkStableEvent["IDENTITY_VERIFICATION_PASS_SESSION"] = "IDENTITY_VERIFICATION_PASS_SESSION";
  PlaidLinkStableEvent["IDENTITY_VERIFICATION_FAIL_SESSION"] = "IDENTITY_VERIFICATION_FAIL_SESSION";
})(exports.PlaidLinkStableEvent || (exports.PlaidLinkStableEvent = {}));

exports.PlaidLink = PlaidLink;
exports.usePlaidLink = usePlaidLink;
