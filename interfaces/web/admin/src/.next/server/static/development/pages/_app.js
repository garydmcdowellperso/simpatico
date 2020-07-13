module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../config.js":
/*!********************!*\
  !*** ../config.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  api: {
    host: process.env.API_HOST || 'http://localhost:5000'
  },
  server: {
    host: process.env.SERVER_HOST || 'http://localhost',
    port: parseInt(process.env.PORT, 10) || 1006
  },
  i18n: {
    languages: process.env.LANGUAGES || ['en', 'es', 'fr'],
    defaultLanguage: process.env.DEFAULT_LANGUAGE || 'fr',
  },
});


/***/ }),

/***/ "../i18n.js":
/*!******************!*\
  !*** ../i18n.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ "next-i18next");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../config.js");



const {
  i18n: { languages, defaultLanguage },
} = _config__WEBPACK_IMPORTED_MODULE_1__["default"];

const fallbackLanguage = defaultLanguage;

// Options list: https://github.com/i18next/i18next-browser-languageDetector#detector-options
const detectorOptions = {
  order: ['cookie'],
  caches: ['cookie'],
  lookupCookie: 'next-i18next',
};

/* harmony default export */ __webpack_exports__["default"] = (new next_i18next__WEBPACK_IMPORTED_MODULE_0___default.a({
  otherLanguages: languages,
  fallbackLng: fallbackLanguage,
  defaultNS: 'common',
  detection: detectorOptions,
}));

// known bug showing 'react-i18next:: i18n.languages were undefined or empty undefined'
// https://github.com/isaachinman/next-i18next/issues/374


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/inherits.js":
/*!**********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/inherits.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./actions/account.js":
/*!****************************!*\
  !*** ./actions/account.js ***!
  \****************************/
/*! exports provided: FETCH_ACCOUNT_REQUEST, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE, UPDATE_ACCOUNT_INFO_REQUEST, UPDATE_ACCOUNT_INFO_SUCCESS, UPDATE_ACCOUNT_INFO_FAILURE, fetchAccountRequest, fetchAccountSuccess, fetchAccountFailure, updateAccountInfoRequest, updateAccountInfoSuccess, updateAccountInfoFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACCOUNT_REQUEST", function() { return FETCH_ACCOUNT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACCOUNT_SUCCESS", function() { return FETCH_ACCOUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ACCOUNT_FAILURE", function() { return FETCH_ACCOUNT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ACCOUNT_INFO_REQUEST", function() { return UPDATE_ACCOUNT_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ACCOUNT_INFO_SUCCESS", function() { return UPDATE_ACCOUNT_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ACCOUNT_INFO_FAILURE", function() { return UPDATE_ACCOUNT_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccountRequest", function() { return fetchAccountRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccountSuccess", function() { return fetchAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAccountFailure", function() { return fetchAccountFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountInfoRequest", function() { return updateAccountInfoRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountInfoSuccess", function() { return updateAccountInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAccountInfoFailure", function() { return updateAccountInfoFailure; });
var FETCH_ACCOUNT_REQUEST = "FETCH_ACCOUNT_REQUEST";
var FETCH_ACCOUNT_SUCCESS = "FETCH_ACCOUNT_SUCCESS";
var FETCH_ACCOUNT_FAILURE = "FETCH_ACCOUNT_FAILURE";
var UPDATE_ACCOUNT_INFO_REQUEST = "UPDATE_ACCOUNT_INFO_REQUEST";
var UPDATE_ACCOUNT_INFO_SUCCESS = "UPDATE_ACCOUNT_INFO_SUCCESS";
var UPDATE_ACCOUNT_INFO_FAILURE = "UPDATE_ACCOUNT_INFO_FAILURE";
function fetchAccountRequest(id) {
  return {
    type: FETCH_ACCOUNT_REQUEST,
    id: id
  };
}
function fetchAccountSuccess(account) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    account: account
  };
}
function fetchAccountFailure(error) {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    error: error
  };
}
function updateAccountInfoRequest(accountId, name) {
  return {
    type: UPDATE_ACCOUNT_INFO_REQUEST,
    accountId: accountId,
    name: name
  };
}
function updateAccountInfoSuccess(account) {
  return {
    type: UPDATE_ACCOUNT_INFO_SUCCESS,
    account: account
  };
}
function updateAccountInfoFailure(error) {
  return {
    type: UPDATE_ACCOUNT_INFO_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_REQUEST_SUCCESS, VERIFY_TOKEN_REQUEST_FAILURE, FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_REQUEST_SUCCESS, FETCH_USER_INFO_REQUEST_FAILURE, verifyTokenRequest, verifyTokenRequestSuccess, verifyTokenRequestFailure, fetchUserInfo, fetchUserInfoSuccess, fetchUserInfoFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_REQUEST", function() { return VERIFY_TOKEN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_REQUEST_SUCCESS", function() { return VERIFY_TOKEN_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_REQUEST_FAILURE", function() { return VERIFY_TOKEN_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_INFO_REQUEST", function() { return FETCH_USER_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_INFO_REQUEST_SUCCESS", function() { return FETCH_USER_INFO_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_INFO_REQUEST_FAILURE", function() { return FETCH_USER_INFO_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyTokenRequest", function() { return verifyTokenRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyTokenRequestSuccess", function() { return verifyTokenRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyTokenRequestFailure", function() { return verifyTokenRequestFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfo", function() { return fetchUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoSuccess", function() { return fetchUserInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoFailure", function() { return fetchUserInfoFailure; });
var VERIFY_TOKEN_REQUEST = "VERIFY_TOKEN_REQUEST";
var VERIFY_TOKEN_REQUEST_SUCCESS = "VERIFY_TOKEN_REQUEST_SUCCESS";
var VERIFY_TOKEN_REQUEST_FAILURE = "VERIFY_TOKEN_REQUEST_FAILURE";
var FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
var FETCH_USER_INFO_REQUEST_SUCCESS = "FETCH_USER_INFO_REQUEST_SUCCESS";
var FETCH_USER_INFO_REQUEST_FAILURE = "FETCH_USER_INFO_REQUEST_FAILURE";
function verifyTokenRequest(_ref) {
  var token = _ref.token,
      role = _ref.role;
  return {
    type: VERIFY_TOKEN_REQUEST,
    token: token,
    role: role
  };
}
function verifyTokenRequestSuccess(json) {
  return {
    type: VERIFY_TOKEN_REQUEST_SUCCESS,
    json: json
  };
}
function verifyTokenRequestFailure(error) {
  return {
    type: VERIFY_TOKEN_REQUEST_FAILURE,
    error: error
  };
}
function fetchUserInfo() {
  return {
    type: FETCH_USER_INFO_REQUEST
  };
}
function fetchUserInfoSuccess(json) {
  return {
    type: FETCH_USER_INFO_REQUEST_SUCCESS,
    json: json
  };
}
function fetchUserInfoFailure(error) {
  return {
    type: FETCH_USER_INFO_REQUEST_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/debate.js":
/*!***************************!*\
  !*** ./actions/debate.js ***!
  \***************************/
/*! exports provided: FETCH_ALLDEBATES_REQUEST, FETCH_ALLDEBATES_SUCCESS, FETCH_ALLDEBATES_FAILURE, FETCH_DEBATE_REQUEST, FETCH_DEBATE_SUCCESS, FETCH_DEBATE_FAILURE, CREATE_DEBATE_REQUEST, CREATE_DEBATE_SUCCESS, CREATE_DEBATE_FAILURE, UPDATE_LANDING_PAGE_HEADER_REQUEST, UPDATE_LANDING_PAGE_HEADER_SUCCESS, UPDATE_LANDING_PAGE_HEADER_FAILURE, UPDATE_LANDING_PAGE_OVERVIEW_REQUEST, UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS, UPDATE_LANDING_PAGE_OVERVIEW_FAILURE, UPDATE_LANDING_PAGE_THEMES_REQUEST, UPDATE_LANDING_PAGE_THEMES_SUCCESS, UPDATE_LANDING_PAGE_THEMES_FAILURE, UPDATE_LANDING_PAGE_SIDEBAR_REQUEST, UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS, UPDATE_LANDING_PAGE_SIDEBAR_FAILURE, UPDATE_LANDING_PAGE_FOOTER_REQUEST, UPDATE_LANDING_PAGE_FOOTER_SUCCESS, UPDATE_LANDING_PAGE_FOOTER_FAILURE, UPDATE_LANDING_PAGE_METATAGS_REQUEST, UPDATE_LANDING_PAGE_METATAGS_SUCCESS, UPDATE_LANDING_PAGE_METATAGS_FAILURE, UPDATE_CONNECTION_REQUEST, UPDATE_CONNECTION_SUCCESS, UPDATE_CONNECTION_FAILURE, UPDATE_GENERAL_INFO_REQUEST, UPDATE_GENERAL_INFO_SUCCESS, UPDATE_GENERAL_INFO_FAILURE, fetchDebatesRequest, fetchDebatesSuccess, fetchDebatesFailure, fetchDebateRequest, fetchDebateSuccess, fetchDebateFailure, createDebateRequest, createDebateSuccess, createDebateFailure, updateLandingPageHeaderRequest, updateLandingPageHeaderSuccess, updateLandingPageHeaderFailure, updateLandingPageOverviewRequest, updateLandingPageOverviewSuccess, updateLandingPageOverviewFailure, updateLandingPageThemesRequest, updateLandingPageThemesSuccess, updateLandingPageThemesFailure, updateConnectionRequest, updateConnectionSuccess, updateConnectionFailure, updateGeneralInfoRequest, updateGeneralInfoSuccess, updateGeneralInfoFailure, updateLandingPageSidebarRequest, updateLandingPageSidebarSuccess, updateLandingPageSidebarFailure, updateLandingPageFooterRequest, updateLandingPageFooterSuccess, updateLandingPageFooterFailure, updateLandingPageMetaTagsRequest, updateLandingPageMetaTagsSuccess, updateLandingPageMetaTagsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLDEBATES_REQUEST", function() { return FETCH_ALLDEBATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLDEBATES_SUCCESS", function() { return FETCH_ALLDEBATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLDEBATES_FAILURE", function() { return FETCH_ALLDEBATES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEBATE_REQUEST", function() { return FETCH_DEBATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEBATE_SUCCESS", function() { return FETCH_DEBATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEBATE_FAILURE", function() { return FETCH_DEBATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DEBATE_REQUEST", function() { return CREATE_DEBATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DEBATE_SUCCESS", function() { return CREATE_DEBATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_DEBATE_FAILURE", function() { return CREATE_DEBATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_HEADER_REQUEST", function() { return UPDATE_LANDING_PAGE_HEADER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_HEADER_SUCCESS", function() { return UPDATE_LANDING_PAGE_HEADER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_HEADER_FAILURE", function() { return UPDATE_LANDING_PAGE_HEADER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_OVERVIEW_REQUEST", function() { return UPDATE_LANDING_PAGE_OVERVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS", function() { return UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_OVERVIEW_FAILURE", function() { return UPDATE_LANDING_PAGE_OVERVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_THEMES_REQUEST", function() { return UPDATE_LANDING_PAGE_THEMES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_THEMES_SUCCESS", function() { return UPDATE_LANDING_PAGE_THEMES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_THEMES_FAILURE", function() { return UPDATE_LANDING_PAGE_THEMES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_SIDEBAR_REQUEST", function() { return UPDATE_LANDING_PAGE_SIDEBAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS", function() { return UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_SIDEBAR_FAILURE", function() { return UPDATE_LANDING_PAGE_SIDEBAR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_FOOTER_REQUEST", function() { return UPDATE_LANDING_PAGE_FOOTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_FOOTER_SUCCESS", function() { return UPDATE_LANDING_PAGE_FOOTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_FOOTER_FAILURE", function() { return UPDATE_LANDING_PAGE_FOOTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_METATAGS_REQUEST", function() { return UPDATE_LANDING_PAGE_METATAGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_METATAGS_SUCCESS", function() { return UPDATE_LANDING_PAGE_METATAGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_PAGE_METATAGS_FAILURE", function() { return UPDATE_LANDING_PAGE_METATAGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONNECTION_REQUEST", function() { return UPDATE_CONNECTION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONNECTION_SUCCESS", function() { return UPDATE_CONNECTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONNECTION_FAILURE", function() { return UPDATE_CONNECTION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GENERAL_INFO_REQUEST", function() { return UPDATE_GENERAL_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GENERAL_INFO_SUCCESS", function() { return UPDATE_GENERAL_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GENERAL_INFO_FAILURE", function() { return UPDATE_GENERAL_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebatesRequest", function() { return fetchDebatesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebatesSuccess", function() { return fetchDebatesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebatesFailure", function() { return fetchDebatesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebateRequest", function() { return fetchDebateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebateSuccess", function() { return fetchDebateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebateFailure", function() { return fetchDebateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDebateRequest", function() { return createDebateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDebateSuccess", function() { return createDebateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDebateFailure", function() { return createDebateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageHeaderRequest", function() { return updateLandingPageHeaderRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageHeaderSuccess", function() { return updateLandingPageHeaderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageHeaderFailure", function() { return updateLandingPageHeaderFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageOverviewRequest", function() { return updateLandingPageOverviewRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageOverviewSuccess", function() { return updateLandingPageOverviewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageOverviewFailure", function() { return updateLandingPageOverviewFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageThemesRequest", function() { return updateLandingPageThemesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageThemesSuccess", function() { return updateLandingPageThemesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageThemesFailure", function() { return updateLandingPageThemesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConnectionRequest", function() { return updateConnectionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConnectionSuccess", function() { return updateConnectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConnectionFailure", function() { return updateConnectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGeneralInfoRequest", function() { return updateGeneralInfoRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGeneralInfoSuccess", function() { return updateGeneralInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGeneralInfoFailure", function() { return updateGeneralInfoFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageSidebarRequest", function() { return updateLandingPageSidebarRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageSidebarSuccess", function() { return updateLandingPageSidebarSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageSidebarFailure", function() { return updateLandingPageSidebarFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageFooterRequest", function() { return updateLandingPageFooterRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageFooterSuccess", function() { return updateLandingPageFooterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageFooterFailure", function() { return updateLandingPageFooterFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageMetaTagsRequest", function() { return updateLandingPageMetaTagsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageMetaTagsSuccess", function() { return updateLandingPageMetaTagsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingPageMetaTagsFailure", function() { return updateLandingPageMetaTagsFailure; });
var FETCH_ALLDEBATES_REQUEST = "FETCH_ALLDEBATES_REQUEST";
var FETCH_ALLDEBATES_SUCCESS = "FETCH_ALLDEBATES_SUCCESS";
var FETCH_ALLDEBATES_FAILURE = "FETCH_ALLDEBATES_FAILURE";
var FETCH_DEBATE_REQUEST = "FETCH_DEBATE_REQUEST";
var FETCH_DEBATE_SUCCESS = "FETCH_DEBATE_SUCCESS";
var FETCH_DEBATE_FAILURE = "FETCH_DEBATE_FAILURE";
var CREATE_DEBATE_REQUEST = "CREATE_DEBATE_REQUEST";
var CREATE_DEBATE_SUCCESS = "CREATE_DEBATE_SUCCESS";
var CREATE_DEBATE_FAILURE = "CREATE_DEBATE_FAILURE";
var UPDATE_LANDING_PAGE_HEADER_REQUEST = "UPDATE_LANDING_PAGE_HEADER_REQUEST";
var UPDATE_LANDING_PAGE_HEADER_SUCCESS = "UPDATE_LANDING_PAGE_HEADER_SUCCESS";
var UPDATE_LANDING_PAGE_HEADER_FAILURE = "UPDATE_LANDING_PAGE_HEADER_FAILURE";
var UPDATE_LANDING_PAGE_OVERVIEW_REQUEST = "UPDATE_LANDING_PAGE_OVERVIEW_REQUEST";
var UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS = "UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS";
var UPDATE_LANDING_PAGE_OVERVIEW_FAILURE = "UPDATE_LANDING_PAGE_OVERVIEW_FAILURE";
var UPDATE_LANDING_PAGE_THEMES_REQUEST = "UPDATE_LANDING_PAGE_THEMES_REQUEST";
var UPDATE_LANDING_PAGE_THEMES_SUCCESS = "UPDATE_LANDING_PAGE_THEMES_SUCCESS";
var UPDATE_LANDING_PAGE_THEMES_FAILURE = "UPDATE_LANDING_PAGE_THEMES_FAILURE";
var UPDATE_LANDING_PAGE_SIDEBAR_REQUEST = "UPDATE_LANDING_PAGE_SIDEBAR_REQUEST";
var UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS = "UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS";
var UPDATE_LANDING_PAGE_SIDEBAR_FAILURE = "UPDATE_LANDING_PAGE_SIDEBAR_FAILURE";
var UPDATE_LANDING_PAGE_FOOTER_REQUEST = "UPDATE_LANDING_PAGE_FOOTER_REQUEST";
var UPDATE_LANDING_PAGE_FOOTER_SUCCESS = "UPDATE_LANDING_PAGE_FOOTER_SUCCESS";
var UPDATE_LANDING_PAGE_FOOTER_FAILURE = "UPDATE_LANDING_PAGE_FOOTER_FAILURE";
var UPDATE_LANDING_PAGE_METATAGS_REQUEST = "UPDATE_LANDING_PAGE_METATAGS_REQUEST";
var UPDATE_LANDING_PAGE_METATAGS_SUCCESS = "UPDATE_LANDING_PAGE_METATAGS_SUCCESS";
var UPDATE_LANDING_PAGE_METATAGS_FAILURE = "UPDATE_LANDING_PAGE_METATAGS_FAILURE";
var UPDATE_CONNECTION_REQUEST = "UPDATE_CONNECTION_REQUEST";
var UPDATE_CONNECTION_SUCCESS = "UPDATE_CONNECTION_SUCCESS";
var UPDATE_CONNECTION_FAILURE = "UPDATE_CONNECTION_FAILURE";
var UPDATE_GENERAL_INFO_REQUEST = "UPDATE_GENERAL_INFO_REQUEST";
var UPDATE_GENERAL_INFO_SUCCESS = "UPDATE_GENERAL_INFO_SUCCESS";
var UPDATE_GENERAL_INFO_FAILURE = "UPDATE_GENERAL_INFO_FAILURE";
function fetchDebatesRequest(accountId) {
  return {
    type: FETCH_ALLDEBATES_REQUEST,
    accountId: accountId
  };
}
function fetchDebatesSuccess(debates) {
  return {
    type: FETCH_ALLDEBATES_SUCCESS,
    debates: debates
  };
}
function fetchDebatesFailure(error) {
  return {
    type: FETCH_ALLDEBATES_FAILURE,
    error: error
  };
}
function fetchDebateRequest(name) {
  return {
    type: FETCH_DEBATE_REQUEST,
    name: name
  };
}
function fetchDebateSuccess(debate) {
  return {
    type: FETCH_DEBATE_SUCCESS,
    debate: debate
  };
}
function fetchDebateFailure(error) {
  return {
    type: FETCH_DEBATE_FALIURE,
    error: error
  };
}
function createDebateRequest(name, slug, debateType, languages) {
  return {
    type: CREATE_DEBATE_REQUEST,
    name: name,
    slug: slug,
    debateType: debateType,
    languages: languages
  };
}
function createDebateSuccess(debate) {
  return {
    type: CREATE_DEBATE_SUCCESS,
    debate: debate
  };
}
function createDebateFailure(error) {
  return {
    type: CREATE_DEBATE_FAILURE,
    error: error
  };
}
function updateLandingPageHeaderRequest(debateID, header) {
  return {
    type: UPDATE_LANDING_PAGE_HEADER_REQUEST,
    debateID: debateID,
    header: header
  };
}
function updateLandingPageHeaderSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_HEADER_SUCCESS,
    debate: debate
  };
}
function updateLandingPageHeaderFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_HEADER_FAILURE,
    error: error
  };
}
function updateLandingPageOverviewRequest(debateID, overview) {
  return {
    type: UPDATE_LANDING_PAGE_OVERVIEW_REQUEST,
    debateID: debateID,
    overview: overview
  };
}
function updateLandingPageOverviewSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS,
    debate: debate
  };
}
function updateLandingPageOverviewFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_OVERVIEW_FAILURE,
    error: error
  };
}
function updateLandingPageThemesRequest(debateID, themes) {
  return {
    type: UPDATE_LANDING_PAGE_THEMES_REQUEST,
    debateID: debateID,
    themes: themes
  };
}
function updateLandingPageThemesSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_THEMES_SUCCESS,
    debate: debate
  };
}
function updateLandingPageThemesFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_THEMES_FAILURE,
    error: error
  };
}
function updateConnectionRequest(debateID, connection) {
  return {
    type: UPDATE_CONNECTION_REQUEST,
    debateID: debateID,
    connection: connection
  };
}
function updateConnectionSuccess(debate) {
  return {
    type: UPDATE_CONNECTION_SUCCESS,
    debate: debate
  };
}
function updateConnectionFailure(error) {
  return {
    type: UPDATE_CONNECTION_FAILURE,
    error: error
  };
}
function updateGeneralInfoRequest(debateID, info) {
  return {
    type: UPDATE_GENERAL_INFO_REQUEST,
    debateID: debateID,
    info: info
  };
}
function updateGeneralInfoSuccess(debate) {
  return {
    type: UPDATE_GENERAL_INFO_SUCCESS,
    debate: debate
  };
}
function updateGeneralInfoFailure(error) {
  return {
    type: UPDATE_GENERAL_INFO_FAILURE,
    error: error
  };
}
function updateLandingPageSidebarRequest(debateID, sidebar) {
  return {
    type: UPDATE_LANDING_PAGE_SIDEBAR_REQUEST,
    debateID: debateID,
    sidebar: sidebar
  };
}
function updateLandingPageSidebarSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS,
    debate: debate
  };
}
function updateLandingPageSidebarFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_SIDEBAR_FAILURE,
    error: error
  };
}
function updateLandingPageFooterRequest(debateID, footer) {
  return {
    type: UPDATE_LANDING_PAGE_FOOTER_REQUEST,
    debateID: debateID,
    footer: footer
  };
}
function updateLandingPageFooterSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_FOOTER_SUCCESS,
    debate: debate
  };
}
function updateLandingPageFooterFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_FOOTER_FAILURE,
    error: error
  };
}
function updateLandingPageMetaTagsRequest(debateID, metaTags) {
  return {
    type: UPDATE_LANDING_PAGE_METATAGS_REQUEST,
    debateID: debateID,
    metaTags: metaTags
  };
}
function updateLandingPageMetaTagsSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_METATAGS_SUCCESS,
    debate: debate
  };
}
function updateLandingPageMetaTagsFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_METATAGS_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/modules.js":
/*!****************************!*\
  !*** ./actions/modules.js ***!
  \****************************/
/*! exports provided: FETCH_ALLMODULES_FOR_DEBATE_REQUEST, FETCH_ALLMODULES_FOR_DEBATE_SUCCESS, FETCH_ALLMODULES_FOR_DEBATE_FAILURE, FETCH_ALLMODULES_REQUEST, FETCH_ALLMODULES_SUCCESS, FETCH_ALLMODULES_FAILURE, CREATE_MODULE_REQUEST, CREATE_MODULE_SUCCESS, CREATE_MODULE_FAILURE, FETCH_MODULE_REQUEST, FETCH_MODULE_SUCCESS, FETCH_MODULE_FAILURE, UPDATE_MODULE_REQUEST, UPDATE_MODULE_SUCCESS, UPDATE_MODULE_FAILURE, fetchAllModulesRequest, fetchAllModulesSuccess, fetchAllModulesFailure, fetchAllModulesForDebateRequest, fetchAllModulesForDebateSuccess, fetchAllModulesForDebateFailure, createModuleRequest, createModuleSuccess, createModuleFailure, fetchModuleRequest, fetchModuleSuccess, fetchModuleFailure, updateModuleRequest, updateModuleSuccess, updateModuleFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLMODULES_FOR_DEBATE_REQUEST", function() { return FETCH_ALLMODULES_FOR_DEBATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLMODULES_FOR_DEBATE_SUCCESS", function() { return FETCH_ALLMODULES_FOR_DEBATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLMODULES_FOR_DEBATE_FAILURE", function() { return FETCH_ALLMODULES_FOR_DEBATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLMODULES_REQUEST", function() { return FETCH_ALLMODULES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLMODULES_SUCCESS", function() { return FETCH_ALLMODULES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLMODULES_FAILURE", function() { return FETCH_ALLMODULES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MODULE_REQUEST", function() { return CREATE_MODULE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MODULE_SUCCESS", function() { return CREATE_MODULE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MODULE_FAILURE", function() { return CREATE_MODULE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MODULE_REQUEST", function() { return FETCH_MODULE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MODULE_SUCCESS", function() { return FETCH_MODULE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MODULE_FAILURE", function() { return FETCH_MODULE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MODULE_REQUEST", function() { return UPDATE_MODULE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MODULE_SUCCESS", function() { return UPDATE_MODULE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MODULE_FAILURE", function() { return UPDATE_MODULE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllModulesRequest", function() { return fetchAllModulesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllModulesSuccess", function() { return fetchAllModulesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllModulesFailure", function() { return fetchAllModulesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllModulesForDebateRequest", function() { return fetchAllModulesForDebateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllModulesForDebateSuccess", function() { return fetchAllModulesForDebateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllModulesForDebateFailure", function() { return fetchAllModulesForDebateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModuleRequest", function() { return createModuleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModuleSuccess", function() { return createModuleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModuleFailure", function() { return createModuleFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchModuleRequest", function() { return fetchModuleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchModuleSuccess", function() { return fetchModuleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchModuleFailure", function() { return fetchModuleFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModuleRequest", function() { return updateModuleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModuleSuccess", function() { return updateModuleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModuleFailure", function() { return updateModuleFailure; });
var FETCH_ALLMODULES_FOR_DEBATE_REQUEST = "FETCH_ALLMODULES_FOR_DEBATE_REQUEST";
var FETCH_ALLMODULES_FOR_DEBATE_SUCCESS = "FETCH_ALLMODULES_FOR_DEBATE_SUCCESS";
var FETCH_ALLMODULES_FOR_DEBATE_FAILURE = "FETCH_ALLMODULES_FOR_DEBATE_FAILURE";
var FETCH_ALLMODULES_REQUEST = "FETCH_ALLMODULES_REQUEST";
var FETCH_ALLMODULES_SUCCESS = "FETCH_ALLMODULES_SUCCESS";
var FETCH_ALLMODULES_FAILURE = "FETCH_ALLMODULES_FAILURE";
var CREATE_MODULE_REQUEST = "CREATE_MODULE_REQUEST";
var CREATE_MODULE_SUCCESS = "CREATE_MODULE_SUCCESS";
var CREATE_MODULE_FAILURE = "CREATE_MODULE_FAILURE";
var FETCH_MODULE_REQUEST = "FETCH_MODULE_REQUEST";
var FETCH_MODULE_SUCCESS = "FETCH_MODULE_SUCCESS";
var FETCH_MODULE_FAILURE = "FETCH_MODULE_FAILURE";
var UPDATE_MODULE_REQUEST = "UPDATE_MODULE_REQUEST";
var UPDATE_MODULE_SUCCESS = "UPDATE_MODULE_SUCCESS";
var UPDATE_MODULE_FAILURE = "UPDATE_MODULE_FAILURE";
function fetchAllModulesRequest() {
  return {
    type: FETCH_ALLMODULES_REQUEST
  };
}
function fetchAllModulesSuccess(modules) {
  return {
    type: FETCH_ALLMODULES_SUCCESS,
    modules: modules
  };
}
function fetchAllModulesFailure(error) {
  return {
    type: FETCH_ALLMODULES_FAILURE,
    error: error
  };
}
function fetchAllModulesForDebateRequest(debateId) {
  return {
    type: FETCH_ALLMODULES_FOR_DEBATE_REQUEST,
    debateId: debateId
  };
}
function fetchAllModulesForDebateSuccess(modules) {
  return {
    type: FETCH_ALLMODULES_FOR_DEBATE_SUCCESS,
    modules: modules
  };
}
function fetchAllModulesForDebateFailure(error) {
  return {
    type: FETCH_ALLMODULES_FOR_DEBATE_FAILURE,
    error: error
  };
}
function createModuleRequest(title, debateId, moduleType, help, name) {
  return {
    type: CREATE_MODULE_REQUEST,
    title: title,
    debateId: debateId,
    moduleType: moduleType,
    help: help,
    name: name
  };
}
function createModuleSuccess(module) {
  return {
    type: CREATE_MODULE_SUCCESS,
    module: module
  };
}
function createModuleFailure(error) {
  return {
    type: CREATE_MODULE_FAILURE,
    error: error
  };
}
function fetchModuleRequest(id) {
  return {
    type: FETCH_MODULE_REQUEST,
    id: id
  };
}
function fetchModuleSuccess(module) {
  return {
    type: FETCH_MODULE_SUCCESS,
    module: module
  };
}
function fetchModuleFailure(error) {
  return {
    type: FETCH_MODULE_FAILURE,
    error: error
  };
}
function updateModuleRequest(title, id, moduleType, help, name) {
  return {
    type: UPDATE_MODULE_REQUEST,
    title: title,
    id: id,
    moduleType: moduleType,
    help: help,
    name: name
  };
}
function updateModuleSuccess(module) {
  return {
    type: UPDATE_MODULE_SUCCESS,
    module: module
  };
}
function updateModuleFailure(error) {
  return {
    type: UPDATE_MODULE_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/pages.js":
/*!**************************!*\
  !*** ./actions/pages.js ***!
  \**************************/
/*! exports provided: FETCH_ALLPAGES_FOR_DEBATE_REQUEST, FETCH_ALLPAGES_FOR_DEBATE_SUCCESS, FETCH_ALLPAGES_FOR_DEBATE_FAILURE, FETCH_ALLPAGES_REQUEST, FETCH_ALLPAGES_SUCCESS, FETCH_ALLPAGES_FAILURE, CREATE_PAGE_REQUEST, CREATE_PAGE_SUCCESS, CREATE_PAGE_FAILURE, FETCH_PAGE_REQUEST, FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE, UPDATE_PAGE_REQUEST, UPDATE_PAGE_SUCCESS, UPDATE_PAGE_FAILURE, fetchAllPagesRequest, fetchAllPagesSuccess, fetchAllPagesFailure, fetchAllPagesForDebateRequest, fetchAllPagesForDebateSuccess, fetchAllPagesForDebateFailure, createPageRequest, createPageSuccess, createPageFailure, fetchPageRequest, fetchPageSuccess, fetchPageFailure, updatePageRequest, updatePageSuccess, updatePageFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLPAGES_FOR_DEBATE_REQUEST", function() { return FETCH_ALLPAGES_FOR_DEBATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLPAGES_FOR_DEBATE_SUCCESS", function() { return FETCH_ALLPAGES_FOR_DEBATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLPAGES_FOR_DEBATE_FAILURE", function() { return FETCH_ALLPAGES_FOR_DEBATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLPAGES_REQUEST", function() { return FETCH_ALLPAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLPAGES_SUCCESS", function() { return FETCH_ALLPAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLPAGES_FAILURE", function() { return FETCH_ALLPAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PAGE_REQUEST", function() { return CREATE_PAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PAGE_SUCCESS", function() { return CREATE_PAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PAGE_FAILURE", function() { return CREATE_PAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PAGE_REQUEST", function() { return FETCH_PAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PAGE_SUCCESS", function() { return FETCH_PAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PAGE_FAILURE", function() { return FETCH_PAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PAGE_REQUEST", function() { return UPDATE_PAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PAGE_SUCCESS", function() { return UPDATE_PAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PAGE_FAILURE", function() { return UPDATE_PAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPagesRequest", function() { return fetchAllPagesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPagesSuccess", function() { return fetchAllPagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPagesFailure", function() { return fetchAllPagesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPagesForDebateRequest", function() { return fetchAllPagesForDebateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPagesForDebateSuccess", function() { return fetchAllPagesForDebateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPagesForDebateFailure", function() { return fetchAllPagesForDebateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageRequest", function() { return createPageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageSuccess", function() { return createPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageFailure", function() { return createPageFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPageRequest", function() { return fetchPageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPageSuccess", function() { return fetchPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPageFailure", function() { return fetchPageFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageRequest", function() { return updatePageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageSuccess", function() { return updatePageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageFailure", function() { return updatePageFailure; });
var FETCH_ALLPAGES_FOR_DEBATE_REQUEST = "FETCH_ALLPAGES_FOR_DEBATE_REQUEST";
var FETCH_ALLPAGES_FOR_DEBATE_SUCCESS = "FETCH_ALLPAGES_FOR_DEBATE_SUCCESS";
var FETCH_ALLPAGES_FOR_DEBATE_FAILURE = "FETCH_ALLPAGES_FOR_DEBATE_FAILURE";
var FETCH_ALLPAGES_REQUEST = "FETCH_ALLPAGES_REQUEST";
var FETCH_ALLPAGES_SUCCESS = "FETCH_ALLPAGES_SUCCESS";
var FETCH_ALLPAGES_FAILURE = "FETCH_ALLPAGES_FAILURE";
var CREATE_PAGE_REQUEST = "CREATE_PAGE_REQUEST";
var CREATE_PAGE_SUCCESS = "CREATE_PAGE_SUCCESS";
var CREATE_PAGE_FAILURE = "CREATE_PAGE_FAILURE";
var FETCH_PAGE_REQUEST = "FETCH_PAGE_REQUEST";
var FETCH_PAGE_SUCCESS = "FETCH_PAGE_SUCCESS";
var FETCH_PAGE_FAILURE = "FETCH_PAGE_FAILURE";
var UPDATE_PAGE_REQUEST = "UPDATE_PAGE_REQUEST";
var UPDATE_PAGE_SUCCESS = "UPDATE_PAGE_SUCCESS";
var UPDATE_PAGE_FAILURE = "UPDATE_PAGE_FAILURE";
function fetchAllPagesRequest() {
  return {
    type: FETCH_ALLPAGES_REQUEST
  };
}
function fetchAllPagesSuccess(pages) {
  return {
    type: FETCH_ALLPAGES_SUCCESS,
    pages: pages
  };
}
function fetchAllPagesFailure(error) {
  return {
    type: FETCH_ALLPAGES_FAILURE,
    error: error
  };
}
function fetchAllPagesForDebateRequest(debateId) {
  return {
    type: FETCH_ALLPAGES_FOR_DEBATE_REQUEST,
    debateId: debateId
  };
}
function fetchAllPagesForDebateSuccess(pages) {
  return {
    type: FETCH_ALLPAGES_FOR_DEBATE_SUCCESS,
    pages: pages
  };
}
function fetchAllPagesForDebateFailure(error) {
  return {
    type: FETCH_ALLPAGES_FOR_DEBATE_FAILURE,
    error: error
  };
}
function createPageRequest(name, debateId, pageType, url, languages) {
  return {
    type: CREATE_PAGE_REQUEST,
    name: name,
    debateId: debateId,
    pageType: pageType,
    url: url,
    languages: languages
  };
}
function createPageSuccess(pages) {
  return {
    type: CREATE_PAGE_SUCCESS,
    pages: pages
  };
}
function createPageFailure(error) {
  return {
    type: CREATE_PAGE_FAILURE,
    error: error
  };
}
function fetchPageRequest(id) {
  return {
    type: FETCH_PAGE_REQUEST,
    id: id
  };
}
function fetchPageSuccess(page) {
  return {
    type: FETCH_PAGE_SUCCESS,
    page: page
  };
}
function fetchPageFailure(error) {
  return {
    type: FETCH_PAGE_FAILURE,
    error: error
  };
}
function updatePageRequest(name, id, pageType, url, languages) {
  return {
    type: UPDATE_PAGE_REQUEST,
    name: name,
    id: id,
    pageType: pageType,
    url: url,
    languages: languages
  };
}
function updatePageSuccess(page) {
  return {
    type: UPDATE_PAGE_SUCCESS,
    page: page
  };
}
function updatePageFailure(error) {
  return {
    type: UPDATE_PAGE_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/posts.js":
/*!**************************!*\
  !*** ./actions/posts.js ***!
  \**************************/
/*! exports provided: FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_TOP_CONTRIBUTORS_REQUEST, FETCH_TOP_CONTRIBUTORS_SUCCESS, FETCH_TOP_CONTRIBUTORS_FAILURE, EXPORT_POSTS_FOR_MODULE_REQUEST, EXPORT_POSTS_FOR_MODULE_SUCCESS, EXPORT_POSTS_FOR_MODULE_FAILURE, fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure, fetchTopContributorsRequest, fetchTopContributorsSuccess, fetchTopContributorsFailure, exportPostsForModuleRequest, exportPostsForModuleSuccess, exportPostsForModuleFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_REQUEST", function() { return FETCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_SUCCESS", function() { return FETCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_FAILURE", function() { return FETCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_CONTRIBUTORS_REQUEST", function() { return FETCH_TOP_CONTRIBUTORS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_CONTRIBUTORS_SUCCESS", function() { return FETCH_TOP_CONTRIBUTORS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_CONTRIBUTORS_FAILURE", function() { return FETCH_TOP_CONTRIBUTORS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORT_POSTS_FOR_MODULE_REQUEST", function() { return EXPORT_POSTS_FOR_MODULE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORT_POSTS_FOR_MODULE_SUCCESS", function() { return EXPORT_POSTS_FOR_MODULE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPORT_POSTS_FOR_MODULE_FAILURE", function() { return EXPORT_POSTS_FOR_MODULE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsRequest", function() { return fetchPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsSuccess", function() { return fetchPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsFailure", function() { return fetchPostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTopContributorsRequest", function() { return fetchTopContributorsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTopContributorsSuccess", function() { return fetchTopContributorsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTopContributorsFailure", function() { return fetchTopContributorsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportPostsForModuleRequest", function() { return exportPostsForModuleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportPostsForModuleSuccess", function() { return exportPostsForModuleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportPostsForModuleFailure", function() { return exportPostsForModuleFailure; });
var FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
var FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
var FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
var FETCH_TOP_CONTRIBUTORS_REQUEST = "FETCH_TOP_CONTRIBUTORS_REQUEST";
var FETCH_TOP_CONTRIBUTORS_SUCCESS = "FETCH_TOP_CONTRIBUTORS_SUCCESS";
var FETCH_TOP_CONTRIBUTORS_FAILURE = "FETCH_TOP_CONTRIBUTORS_FAILURE";
var EXPORT_POSTS_FOR_MODULE_REQUEST = "EXPORT_POSTS_FOR_MODULE_REQUEST";
var EXPORT_POSTS_FOR_MODULE_SUCCESS = "EXPORT_POSTS_FOR_MODULE_SUCCESS";
var EXPORT_POSTS_FOR_MODULE_FAILURE = "EXPORT_POSTS_FOR_MODULE_FAILURE";
function fetchPostsRequest(accountId) {
  return {
    type: FETCH_POSTS_REQUEST,
    accountId: accountId
  };
}
function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts: posts
  };
}
function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    error: error
  };
}
function fetchTopContributorsRequest(accountId) {
  return {
    type: FETCH_TOP_CONTRIBUTORS_REQUEST,
    accountId: accountId
  };
}
function fetchTopContributorsSuccess(contributors) {
  return {
    type: FETCH_TOP_CONTRIBUTORS_SUCCESS,
    contributors: contributors
  };
}
function fetchTopContributorsFailure(error) {
  return {
    type: FETCH_TOP_CONTRIBUTORS_FAILURE,
    error: error
  };
}
function exportPostsForModuleRequest(data) {
  return {
    type: EXPORT_POSTS_FOR_MODULE_REQUEST,
    data: data
  };
}
function exportPostsForModuleSuccess() {
  return {
    type: EXPORT_POSTS_FOR_MODULE_SUCCESS
  };
}
function exportPostsForModuleFailure(error) {
  return {
    type: EXPORT_POSTS_FOR_MODULE_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/stats.js":
/*!**************************!*\
  !*** ./actions/stats.js ***!
  \**************************/
/*! exports provided: FETCH_STATS_REQUEST, FETCH_STATS_SUCCESS, FETCH_STATS_FAILURE, FETCH_USERSBYDEVICE_REQUEST, FETCH_USERSBYDEVICE_SUCCESS, FETCH_USERSBYDEVICE_FAILURE, FETCH_VISITORSBYDAYFORMONTH_REQUEST, FETCH_VISITORSBYDAYFORMONTH_SUCCESS, FETCH_VISITORSBYDAYFORMONTH_FAILURE, fetchStatsRequest, fetchStatsSuccess, fetchStatsFailure, fetchUsersByDeviceRequest, fetchUsersByDeviceSuccess, fetchUsersByDeviceFailure, fetchVisitorsByDayForMonthRequest, fetchVisitorsByDayForMonthSuccess, fetchVisitorsByDayForMonthFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STATS_REQUEST", function() { return FETCH_STATS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STATS_SUCCESS", function() { return FETCH_STATS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STATS_FAILURE", function() { return FETCH_STATS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSBYDEVICE_REQUEST", function() { return FETCH_USERSBYDEVICE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSBYDEVICE_SUCCESS", function() { return FETCH_USERSBYDEVICE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERSBYDEVICE_FAILURE", function() { return FETCH_USERSBYDEVICE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VISITORSBYDAYFORMONTH_REQUEST", function() { return FETCH_VISITORSBYDAYFORMONTH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VISITORSBYDAYFORMONTH_SUCCESS", function() { return FETCH_VISITORSBYDAYFORMONTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VISITORSBYDAYFORMONTH_FAILURE", function() { return FETCH_VISITORSBYDAYFORMONTH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStatsRequest", function() { return fetchStatsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStatsSuccess", function() { return fetchStatsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStatsFailure", function() { return fetchStatsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersByDeviceRequest", function() { return fetchUsersByDeviceRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersByDeviceSuccess", function() { return fetchUsersByDeviceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersByDeviceFailure", function() { return fetchUsersByDeviceFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVisitorsByDayForMonthRequest", function() { return fetchVisitorsByDayForMonthRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVisitorsByDayForMonthSuccess", function() { return fetchVisitorsByDayForMonthSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVisitorsByDayForMonthFailure", function() { return fetchVisitorsByDayForMonthFailure; });
var FETCH_STATS_REQUEST = "FETCH_STATS_REQUEST";
var FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
var FETCH_STATS_FAILURE = "FETCH_STATS_FAILURE";
var FETCH_USERSBYDEVICE_REQUEST = "FETCH_USERSBYDEVICE_REQUEST";
var FETCH_USERSBYDEVICE_SUCCESS = "FETCH_USERSBYDEVICE_SUCCESS";
var FETCH_USERSBYDEVICE_FAILURE = "FETCH_USERSBYDEVICE_FAILURE";
var FETCH_VISITORSBYDAYFORMONTH_REQUEST = "FETCH_VISITORSBYDAYFORMONTH_REQUEST";
var FETCH_VISITORSBYDAYFORMONTH_SUCCESS = "FETCH_VISITORSBYDAYFORMONTH_SUCCESS";
var FETCH_VISITORSBYDAYFORMONTH_FAILURE = "FETCH_VISITORSBYDAYFORMONTH_FAILURE";
function fetchStatsRequest(accountId) {
  return {
    type: FETCH_STATS_REQUEST,
    accountId: accountId
  };
}
function fetchStatsSuccess(stats) {
  return {
    type: FETCH_STATS_SUCCESS,
    stats: stats
  };
}
function fetchStatsFailure(error) {
  return {
    type: FETCH_STATS_FAILURE,
    error: error
  };
}
function fetchUsersByDeviceRequest(accountId) {
  return {
    type: FETCH_USERSBYDEVICE_REQUEST,
    accountId: accountId
  };
}
function fetchUsersByDeviceSuccess(devices) {
  return {
    type: FETCH_USERSBYDEVICE_SUCCESS,
    devices: devices
  };
}
function fetchUsersByDeviceFailure(error) {
  return {
    type: FETCH_USERSBYDEVICE_FAILURE,
    error: error
  };
}
function fetchVisitorsByDayForMonthRequest(accountId, month) {
  return {
    type: FETCH_VISITORSBYDAYFORMONTH_REQUEST,
    accountId: accountId,
    month: month
  };
}
function fetchVisitorsByDayForMonthSuccess(visitors) {
  return {
    type: FETCH_VISITORSBYDAYFORMONTH_SUCCESS,
    visitors: visitors
  };
}
function fetchVisitorsByDayForMonthFailure(error) {
  return {
    type: FETCH_VISITORSBYDAYFORMONTH_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./actions/users.js":
/*!**************************!*\
  !*** ./actions/users.js ***!
  \**************************/
/*! exports provided: FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USER_INFO_ADMIN_REQUEST, FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS, FETCH_USER_INFO_ADMIN_REQUEST_FAILURE, UPDATE_USER_INFO_REQUEST, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAILURE, fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, fetchUserInfoAdmin, fetchUserInfoAdminSuccess, fetchUserInfoAdminFailure, updateUserInfo, updateUserInfoSuccess, updateUserInfoFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_REQUEST", function() { return FETCH_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_SUCCESS", function() { return FETCH_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS_FAILURE", function() { return FETCH_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_INFO_ADMIN_REQUEST", function() { return FETCH_USER_INFO_ADMIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS", function() { return FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_INFO_ADMIN_REQUEST_FAILURE", function() { return FETCH_USER_INFO_ADMIN_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO_REQUEST", function() { return UPDATE_USER_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO_SUCCESS", function() { return UPDATE_USER_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO_FAILURE", function() { return UPDATE_USER_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersRequest", function() { return fetchUsersRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersSuccess", function() { return fetchUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersFailure", function() { return fetchUsersFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoAdmin", function() { return fetchUserInfoAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoAdminSuccess", function() { return fetchUserInfoAdminSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserInfoAdminFailure", function() { return fetchUserInfoAdminFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return updateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfoSuccess", function() { return updateUserInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfoFailure", function() { return updateUserInfoFailure; });
var FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
var FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
var FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
var FETCH_USER_INFO_ADMIN_REQUEST = "FETCH_USER_INFO_ADMIN_REQUEST";
var FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS = "FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS";
var FETCH_USER_INFO_ADMIN_REQUEST_FAILURE = "FETCH_USER_INFO_ADMIN_REQUEST_FAILURE";
var UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
var UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
var UPDATE_USER_INFO_FAILURE = "UPDATE_USER_INFO_FAILURE";
function fetchUsersRequest(accountId) {
  return {
    type: FETCH_USERS_REQUEST,
    accountId: accountId
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users: users
  };
}
function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error: error
  };
}
function fetchUserInfoAdmin(userId, accountId) {
  return {
    type: FETCH_USER_INFO_ADMIN_REQUEST,
    userId: userId,
    accountId: accountId
  };
}
function fetchUserInfoAdminSuccess(json) {
  return {
    type: FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS,
    json: json
  };
}
function fetchUserInfoAdminFailure(error) {
  return {
    type: FETCH_USER_INFO_ADMIN_REQUEST_FAILURE,
    error: error
  };
}
function updateUserInfo(user) {
  return {
    type: UPDATE_USER_INFO_REQUEST,
    user: user
  };
}
function updateUserInfoSuccess(json) {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    json: json
  };
}
function updateUserInfoFailure(error) {
  return {
    type: UPDATE_USER_INFO_FAILURE,
    error: error
  };
}

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: callApi, get, post, putApi, remove, init, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putApi", function() { return putApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var store;
var callApi = function callApi(route, method, body, options) {
  options = _objectSpread({
    method: method,
    body: body,
    headers: {}
  }, options);
  options.headers["Content-Type"] = "application/json; charset=UTF-8";
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("/api/".concat(route), options).then(function (response) {
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {// Log the user out
      }

      if (response.status === 400) {
        return response.json().then(function (error) {
          throw new Error(error.response);
        });
      }
    }

    return response.json();
  });
};
var get = function get(route, options) {
  return callApi(route, "GET", undefined, options);
};
var post = function post(route, body, options) {
  return callApi(route, "POST", body, options);
};
var putApi = function putApi(route, body, options) {
  return callApi(route, "PUT", body, options);
};
var remove = function remove(route, body, options) {
  return callApi(route, "DELETE", body, options);
};
var init = function init(_store) {
  store = _store;
};
var Api = {
  get: get,
  post: post,
  putApi: putApi,
  remove: remove,
  callApi: callApi,
  init: init
};
/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @socialgouv/matomo-next */ "@socialgouv/matomo-next");
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");

















var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_16__["default"].withTranslation;
var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_10___default()();
var store;

var makeStore = function makeStore(initialState) {
  store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_14__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(sagaMiddleware));
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_13__["default"]);
  return store;
};

var Simpatico =
/*#__PURE__*/
function (_App) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Simpatico, _App);

  function Simpatico() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Simpatico);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Simpatico).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Simpatico, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_12__["init"])({
        url: 'http://localhost',
        siteId: 1
      }); // Not on the URL so check the localStorage

      if (localStorage.getItem("token")) {
        // Ask server to verify and set cookie
        store.dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["verifyTokenRequest"])({
          token: localStorage.getItem("token"),
          role: "administrator"
        }));
      }

      if (!localStorage.getItem("token")) {
        // Send them back to login
        window.location.href = '/connect/';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, pageProps));
    }
  }], [{
    key: "getInitialProps",
    value: async function getInitialProps(_ref) {
      var Component = _ref.Component,
          ctx = _ref.ctx;
      var pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return {
        pageProps: pageProps
      };
    }
  }]);

  return Simpatico;
}(next_app__WEBPACK_IMPORTED_MODULE_5___default.a);

var appWithTranslation = _i18n__WEBPACK_IMPORTED_MODULE_16__["default"].appWithTranslation;
/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default()(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default()(makeStore), appWithTranslation, withTranslation(["common"]))(Simpatico));

/***/ }),

/***/ "./reducers/account.js":
/*!*****************************!*\
  !*** ./reducers/account.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return account; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/account */ "./actions/account.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  processing: false,
  error: "",
  account: null
};
function account() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_account__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCOUNT_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_account__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCOUNT_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        account: action.account
      });

    case _actions_account__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCOUNT_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        account: null
      });

    case _actions_account__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ACCOUNT_INFO_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_account__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ACCOUNT_INFO_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        account: action.account
      });

    case _actions_account__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ACCOUNT_INFO_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        account: null
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  id: null,
  isValidToken: null,
  token: "",
  processing: false,
  error: ""
};
function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        token: action.token
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST_SUCCESS"]:
      // Parse out json and update the store
      if (action && action.json && action.json.statusCode === 500) {
        return _objectSpread({}, state, {
          processing: false,
          error: "",
          isValidToken: false
        });
      } // Parse out json and update the store


      return _objectSpread({}, state, {
        processing: false,
        error: "",
        isValidToken: true
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        isValidToken: false,
        token: ""
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        id: null
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        avatar: action.json.avatar,
        id: action.json.id
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        id: null
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/debate.js":
/*!****************************!*\
  !*** ./reducers/debate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debate; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_debate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/debate */ "./actions/debate.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  debates: [],
  processing: false,
  error: "",
  debate: null
};
function debate() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debates: action.debates
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debates: []
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_FAILURE"]:
      return _objectSpread({}, state, {
        //processing: false,
        error: action.error,
        debate: []
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_SIDEBAR_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_SIDEBAR_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_FOOTER_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_FOOTER_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_FOOTER_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_METATAGS_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_METATAGS_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_METATAGS_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CONNECTION_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CONNECTION_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CONNECTION_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_GENERAL_INFO_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_GENERAL_INFO_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_GENERAL_INFO_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        debate: null
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account */ "./reducers/account.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./reducers/auth.js");
/* harmony import */ var _debate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debate */ "./reducers/debate.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ "./reducers/modules.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "./reducers/pages.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts */ "./reducers/posts.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats */ "./reducers/stats.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users */ "./reducers/users.js");









var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  account: _account__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  debate: _debate__WEBPACK_IMPORTED_MODULE_3__["default"],
  modules: _modules__WEBPACK_IMPORTED_MODULE_4__["default"],
  pages: _pages__WEBPACK_IMPORTED_MODULE_5__["default"],
  posts: _posts__WEBPACK_IMPORTED_MODULE_6__["default"],
  stats: _stats__WEBPACK_IMPORTED_MODULE_7__["default"],
  users: _users__WEBPACK_IMPORTED_MODULE_8__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

/***/ }),

/***/ "./reducers/modules.js":
/*!*****************************!*\
  !*** ./reducers/modules.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modules; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modules */ "./actions/modules.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  modules: [],
  processing: false,
  error: "",
  module: null,
  processing_update: false
};
function modules() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        modules: action.modules
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        modules: []
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_FOR_DEBATE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_FOR_DEBATE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        modules: action.modules
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_FOR_DEBATE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        modules: []
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["CREATE_MODULE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["CREATE_MODULE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        module: action.module
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["CREATE_MODULE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        module: null
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        module: action.module
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        module: null
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MODULE_REQUEST"]:
      return _objectSpread({}, state, {
        processing_update: true,
        error: ""
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MODULE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing_update: false,
        error: "",
        module: null
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MODULE_FAILURE"]:
      return _objectSpread({}, state, {
        processing_update: false,
        error: action.error,
        module: null
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/pages.js":
/*!***************************!*\
  !*** ./reducers/pages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pages */ "./actions/pages.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  pages: [],
  processing: false,
  error: "",
  page: null,
  processing_update: false
};
function pages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        pages: action.pages
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        pages: []
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_FOR_DEBATE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_FOR_DEBATE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        pages: action.pages
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_FOR_DEBATE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        pages: []
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        page: action.page
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        page: null
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        page: action.page
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        page: null
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_REQUEST"]:
      return _objectSpread({}, state, {
        processing_update: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing_update: false,
        error: "",
        page: null
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_FAILURE"]:
      return _objectSpread({}, state, {
        processing_update: false,
        error: action.error,
        page: null
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/posts.js":
/*!***************************!*\
  !*** ./reducers/posts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return posts; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/posts */ "./actions/posts.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  posts: [],
  processing: false,
  error: "",
  contributors: []
};
function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        posts: []
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_SUCCESS"]:
      // Parse out json and update the store
      console.log('action', action);
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        posts: action.posts
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        posts: []
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOP_CONTRIBUTORS_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        contributors: []
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOP_CONTRIBUTORS_SUCCESS"]:
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        contributors: action.contributors
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOP_CONTRIBUTORS_FAILURE"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        contributors: []
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["EXPORT_POSTS_FOR_MODULE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["EXPORT_POSTS_FOR_MODULE_SUCCESS"]:
      return _objectSpread({}, state, {
        processing: false,
        error: ""
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["EXPORT_POSTS_FOR_MODULE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/stats.js":
/*!***************************!*\
  !*** ./reducers/stats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stats; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/stats */ "./actions/stats.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  posts: null,
  pageviews: null,
  reactions: null,
  signups: null,
  shares: null,
  processing: false,
  error: "",
  devices: [],
  visitors: []
};
function stats() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_STATS_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_STATS_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        posts: action.stats.posts,
        pageviews: action.stats.pageviews,
        reactions: action.stats.reactions,
        shares: action.stats.shares,
        signups: action.stats.signups
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_STATS_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        stats: []
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERSBYDEVICE_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERSBYDEVICE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        devices: action.devices
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERSBYDEVICE_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        devices: []
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_VISITORSBYDAYFORMONTH_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_VISITORSBYDAYFORMONTH_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        visitors: action.visitors
      });

    case _actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_VISITORSBYDAYFORMONTH_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        visitors: []
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./reducers/users.js":
/*!***************************!*\
  !*** ./reducers/users.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return users; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/users */ "./actions/users.js");


var _initialState;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = (_initialState = {
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  id: null
}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "avatar", ""), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "bio", ""), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "badge", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "score", 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "likes", []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "dislikes", []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "contributions", []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "debates", []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "role", []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "users", []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "processing", false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_initialState, "error", ""), _initialState);
function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: ""
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        users: action.users
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        users: []
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_ADMIN_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        avatar: action.json.avatar,
        id: action.json.id,
        bio: action.json.bio,
        badge: action.json.badge,
        score: action.json.score,
        likes: action.json.likes,
        dislikes: action.json.dislikes,
        contributions: action.json.contributions,
        debates: action.json.debates,
        role: action.json.role
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_ADMIN_REQUEST_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_INFO_REQUEST"]:
      return _objectSpread({}, state, {
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_INFO_SUCCESS"]:
      // Parse out json and update the store
      console.log('action', action.json);
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        bio: action.json.bio,
        avatar: action.json.avatar,
        score: action.json.score,
        badge: action.json.badge,
        id: action.json.id,
        likes: action.json.likes,
        dislikes: action.json.dislikes,
        contributions: action.json.contributions,
        debates: action.json.debates,
        role: action.json.role
      });

    case _actions_users__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_INFO_FAILURE"]:
      return _objectSpread({}, state, {
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./sagas/account.js":
/*!**************************!*\
  !*** ./sagas/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accountSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/account */ "./actions/account.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchAccount(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAccount?id=".concat(action.id)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_account__WEBPACK_IMPORTED_MODULE_1__["fetchAccountSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_account__WEBPACK_IMPORTED_MODULE_1__["fetchAccountFailure"])(err));
  });
  yield r;
}

function* updateAccountInfo(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateAccountInfo", JSON.stringify({
    id: action.accountId,
    name: action.name
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_account__WEBPACK_IMPORTED_MODULE_1__["updateAccountInfoSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_account__WEBPACK_IMPORTED_MODULE_1__["updateAccountInfoFailure"])(err));
  });
  yield r;
}

function* accountSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_account__WEBPACK_IMPORTED_MODULE_1__["FETCH_ACCOUNT_REQUEST"], fetchAccount);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_account__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ACCOUNT_INFO_REQUEST"], updateAccountInfo);
}

/***/ }),

/***/ "./sagas/auth.js":
/*!***********************!*\
  !*** ./sagas/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* verifyTokenRequest(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/verifyToken", JSON.stringify({
    token: action.token,
    role: action.role
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["verifyTokenRequestSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["verifyTokenRequestFailure"])(err));
  });
  yield r;
}

function* fetchUserInfo() {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchUserInfo").then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["fetchUserInfoSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["fetchUserInfoFailure"])(err));
  });
  yield r;
}

function* authSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST"], verifyTokenRequest);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST"], fetchUserInfo);
}

/***/ }),

/***/ "./sagas/debate.js":
/*!*************************!*\
  !*** ./sagas/debate.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_debate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/debate */ "./actions/debate.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchAllDebates(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAllDebates?id=".concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["fetchDebatesSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["fetchDebatesFailure"])(err));
  });
  yield r;
}

function* fetchDebate(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchDebate?name=".concat(action.name)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["fetchDebateSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["fetchDebateFailure"])(err));
  });
  yield r;
}

function* createDebate(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/createDebate", JSON.stringify({
    name: action.name,
    slug: action.slug,
    debateType: action.debateType,
    languages: action.languages
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["createDebateSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["createDebateFailure"])(err));
  });
  yield r;
}

function* updateLandingPageHeader(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateLandingPageHeader", JSON.stringify({
    debateID: action.debateID,
    header: action.header
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageHeaderSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageHeaderFailure"])(err));
  });
  yield r;
}

function* updateLandingPageOverview(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateLandingPageOverview", JSON.stringify({
    debateID: action.debateID,
    overview: action.overview
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageOverviewSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageOverviewFailure"])(err));
  });
  yield r;
}

function* updateLandingPageThemes(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateLandingPageThemes", JSON.stringify({
    debateID: action.debateID,
    themes: action.themes
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageThemesSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageThemesFailure"])(err));
  });
  yield r;
}

function* updateLandingPageSidebar(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateLandingPageSidebar", JSON.stringify({
    debateID: action.debateID,
    sidebar: action.sidebar
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageSidebarSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageSidebarFailure"])(err));
  });
  yield r;
}

function* updateLandingPageFooter(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateLandingPageFooter", JSON.stringify({
    debateID: action.debateID,
    footer: action.footer
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageFooterSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageFooterFailure"])(err));
  });
  yield r;
}

function* updateLandingPageMetaTags(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateLandingPageMetaTags", JSON.stringify({
    debateID: action.debateID,
    metaTags: action.metaTags
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageMetaTagsSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateLandingPageMetaTagsFailure"])(err));
  });
  yield r;
}

function* updateConnection(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateConnection", JSON.stringify({
    debateID: action.debateID,
    connection: action.connection
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateConnectionSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateConnectionFailure"])(err));
  });
  yield r;
}

function* updateGeneralInfo(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateGeneralInfo", JSON.stringify({
    debateID: action.debateID,
    info: action.info
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateGeneralInfoSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["updateGeneralInfoFailure"])(err));
  });
  yield r;
}

function* authSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_REQUEST"], fetchDebate);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_REQUEST"], fetchAllDebates);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_REQUEST"], createDebate);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_REQUEST"], updateLandingPageHeader);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_REQUEST"], updateLandingPageOverview);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_REQUEST"], updateLandingPageThemes);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_SIDEBAR_REQUEST"], updateLandingPageSidebar);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_FOOTER_REQUEST"], updateLandingPageFooter);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_METATAGS_REQUEST"], updateLandingPageMetaTags);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_CONNECTION_REQUEST"], updateConnection);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_GENERAL_INFO_REQUEST"], updateGeneralInfo);
}

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account */ "./sagas/account.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./sagas/auth.js");
/* harmony import */ var _debate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debate */ "./sagas/debate.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules */ "./sagas/modules.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages */ "./sagas/pages.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts */ "./sagas/posts.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stats */ "./sagas/stats.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users */ "./sagas/users.js");









/* harmony default export */ __webpack_exports__["default"] = (function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_account__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_debate__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_modules__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_pages__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_posts__WEBPACK_IMPORTED_MODULE_6__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_stats__WEBPACK_IMPORTED_MODULE_7__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_users__WEBPACK_IMPORTED_MODULE_8__["default"])]);
});

/***/ }),

/***/ "./sagas/modules.js":
/*!**************************!*\
  !*** ./sagas/modules.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModulesSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modules */ "./actions/modules.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchAllModulesForDebate(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAllModulesForDebate?debateId=".concat(action.debateId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchAllModulesForDebateSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchAllModulesForDebateFailure"])(err));
  });
  yield r;
}

function* fetchAllModules(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAllModules").then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchAllModulesSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchAllModulesFailure"])(err));
  });
  yield r;
}

function* createModule(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/createModule", JSON.stringify({
    title: action.title,
    moduleType: action.moduleType,
    debateId: action.debateId,
    help: action.help,
    name: action.name
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["createModuleSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["createModuleFailure"])(err));
  });
  yield r;
}

function* fetchModule(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchModule?id=".concat(action.id)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchModuleSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchModuleFailure"])(err));
  });
  yield r;
}

function* updateModule(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateModule", JSON.stringify({
    title: action.title,
    moduleType: action.moduleType,
    id: action.id,
    help: action.help,
    name: action.name
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["updateModuleSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(updateModuleFailure(err));
  });
  yield r;
}

function* ModulesSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_FOR_DEBATE_REQUEST"], fetchAllModulesForDebate);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLMODULES_REQUEST"], fetchAllModules);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["CREATE_MODULE_REQUEST"], createModule);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_REQUEST"], fetchModule);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["UPDATE_MODULE_REQUEST"], updateModule);
}

/***/ }),

/***/ "./sagas/pages.js":
/*!************************!*\
  !*** ./sagas/pages.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pagesSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pages */ "./actions/pages.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchAllPages(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAllPages").then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["fetchAllPagesSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["fetchAllPagesFailure"])(err));
  });
  yield r;
}

function* fetchAllPagesForDebate(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAllPagesForDebate?debateId=".concat(action.debateId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["fetchAllPagesForDebateSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["fetchAllPagesForDebateFailure"])(err));
  });
  yield r;
}

function* createPage(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/createPage", JSON.stringify({
    name: action.name,
    type: action.pageType,
    debateId: action.debateId,
    url: action.url,
    languages: action.languages
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["createPageSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["createPageFailure"])(err));
  });
  yield r;
}

function* fetchPage(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchPage?id=".concat(action.id)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["fetchPageSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["fetchPageFailure"])(err));
  });
  yield r;
}

function* updatePage(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updatePage", JSON.stringify({
    name: action.name,
    type: action.pageType,
    id: action.id,
    url: action.url,
    languages: action.languages
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["updatePageSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["updatePageFailure"])(err));
  });
  yield r;
}

function* pagesSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_FOR_DEBATE_REQUEST"], fetchAllPagesForDebate);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_REQUEST"], fetchAllPages);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_REQUEST"], createPage);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_REQUEST"], fetchPage);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_REQUEST"], updatePage);
}

/***/ }),

/***/ "./sagas/posts.js":
/*!************************!*\
  !*** ./sagas/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postsSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/posts */ "./actions/posts.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchPosts(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchPosts?id=".concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["fetchPostsSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["fetchPostsFailure"])(err));
  });
  yield r;
}

function* fetchTopContributors(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchTopContributors?id=".concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["fetchTopContributorsSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["fetchTopContributorsFailure"])(err));
  });
  yield r;
}

function* exportPostsForModule(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/exportPostsForModule", JSON.stringify({
    module: action.data.module,
    fields: action.data.fields
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["exportPostsForModuleSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["exportPostsForModuleFailure"])(err));
  });
  yield r;
}

function* postsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_REQUEST"], fetchPosts);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOP_CONTRIBUTORS_REQUEST"], fetchTopContributors);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["EXPORT_POSTS_FOR_MODULE_REQUEST"], exportPostsForModule);
}

/***/ }),

/***/ "./sagas/stats.js":
/*!************************!*\
  !*** ./sagas/stats.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return statsSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/stats */ "./actions/stats.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchStats(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchStats?id=".concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["fetchStatsSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["fetchStatsFailure"])(err));
  });
  yield r;
}

function* fetchUsersByDevice(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchUsersByDevice?id=".concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["fetchUsersByDeviceSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["fetchUsersByDeviceFailure"])(err));
  });
  yield r;
}

function* fetchVisitorsByDayForMonth(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchVisitorsByDayForMonth?id=".concat(action.accountId, "&month=").concat(action.month)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["fetchVisitorsByDayForMonthSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["fetchVisitorsByDayForMonthFailure"])(err));
  });
  yield r;
}

function* statsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_STATS_REQUEST"], fetchStats);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERSBYDEVICE_REQUEST"], fetchUsersByDevice);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_stats__WEBPACK_IMPORTED_MODULE_1__["FETCH_VISITORSBYDAYFORMONTH_REQUEST"], fetchVisitorsByDayForMonth);
}

/***/ }),

/***/ "./sagas/users.js":
/*!************************!*\
  !*** ./sagas/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usersSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/users */ "./actions/users.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchUsers(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchUsers?id=".concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_users__WEBPACK_IMPORTED_MODULE_1__["fetchUsersSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_users__WEBPACK_IMPORTED_MODULE_1__["fetchUsersFailure"])(err));
  });
  yield r;
}

function* fetchUserInfoAdmin(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchUserInfoAdmin?userId=".concat(action.userId, "&accountId=").concat(action.accountId)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_users__WEBPACK_IMPORTED_MODULE_1__["fetchUserInfoAdminSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_users__WEBPACK_IMPORTED_MODULE_1__["fetchUserInfoAdminFailure"])(err));
  });
  yield r;
}

function* updateUserInfo(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["putApi"])("v1/updateUserInfo", JSON.stringify({
    id: action.user.id,
    email: action.user.email,
    firstName: action.user.firstName,
    lastName: action.user.lastName,
    bio: action.user.bio,
    avatar: action.user.avatar,
    password: action.user.password,
    confirmPassword: action.user.confirmPassword,
    debates: action.user.debates,
    role: action.user.role
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_users__WEBPACK_IMPORTED_MODULE_1__["updateUserInfoSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_users__WEBPACK_IMPORTED_MODULE_1__["updateUserInfoFailure"])(err));
  });
  yield r;
}

function* usersSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USERS_REQUEST"], fetchUsers);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_users__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_ADMIN_REQUEST"], fetchUserInfoAdmin);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_users__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_INFO_REQUEST"], updateUserInfo);
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@socialgouv/matomo-next":
/*!******************************************!*\
  !*** external "@socialgouv/matomo-next" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@socialgouv/matomo-next");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/flowRight":
/*!***********************************!*\
  !*** external "lodash/flowRight" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/flowRight");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map