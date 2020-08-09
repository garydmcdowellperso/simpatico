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
    port: parseInt(process.env.PORT, 10) || 1000
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

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
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
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

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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
/*! exports provided: FETCH_ALLDEBATES_REQUEST, FETCH_ALLDEBATES_SUCCESS, FETCH_ALLDEBATES_FAILURE, FETCH_DEBATE_REQUEST, FETCH_DEBATE_SUCCESS, FETCH_DEBATE_FAILURE, SET_DEBATE_REQUEST, SET_DEBATE_SUCCESS, SET_DEBATE_FAILURE, CREATE_DEBATE_REQUEST, CREATE_DEBATE_SUCCESS, CREATE_DEBATE_FAILURE, UPDATE_LANDING_PAGE_HEADER_REQUEST, UPDATE_LANDING_PAGE_HEADER_SUCCESS, UPDATE_LANDING_PAGE_HEADER_FAILURE, UPDATE_LANDING_PAGE_OVERVIEW_REQUEST, UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS, UPDATE_LANDING_PAGE_OVERVIEW_FAILURE, UPDATE_LANDING_PAGE_THEMES_REQUEST, UPDATE_LANDING_PAGE_THEMES_SUCCESS, UPDATE_LANDING_PAGE_THEMES_FAILURE, fetchDebatesRequest, fetchDebatesSuccess, fetchDebatesFailure, setDebateRequest, fetchDebateRequest, fetchDebateSuccess, fetchDebateFailure, createDebateRequest, createDebateSuccess, createDebateFailure, updateLandingPageHeaderRequest, updateLandingPageHeaderSuccess, updateLandingPageHeaderFailure, updateLandingPageOverviewRequest, updateLandingPageOverviewSuccess, updateLandingPageOverviewFailure, updateLandingPageThemesRequest, updateLandingPageThemesSuccess, updateLandingPageThemesFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLDEBATES_REQUEST", function() { return FETCH_ALLDEBATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLDEBATES_SUCCESS", function() { return FETCH_ALLDEBATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALLDEBATES_FAILURE", function() { return FETCH_ALLDEBATES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEBATE_REQUEST", function() { return FETCH_DEBATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEBATE_SUCCESS", function() { return FETCH_DEBATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEBATE_FAILURE", function() { return FETCH_DEBATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEBATE_REQUEST", function() { return SET_DEBATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEBATE_SUCCESS", function() { return SET_DEBATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEBATE_FAILURE", function() { return SET_DEBATE_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebatesRequest", function() { return fetchDebatesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebatesSuccess", function() { return fetchDebatesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDebatesFailure", function() { return fetchDebatesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDebateRequest", function() { return setDebateRequest; });
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
var FETCH_ALLDEBATES_REQUEST = "FETCH_ALLDEBATES_REQUEST";
var FETCH_ALLDEBATES_SUCCESS = "FETCH_ALLDEBATES_SUCCESS";
var FETCH_ALLDEBATES_FAILURE = "FETCH_ALLDEBATES_FAILURE";
var FETCH_DEBATE_REQUEST = "FETCH_DEBATE_REQUEST";
var FETCH_DEBATE_SUCCESS = "FETCH_DEBATE_SUCCESS";
var FETCH_DEBATE_FAILURE = "FETCH_DEBATE_FAILURE";
var SET_DEBATE_REQUEST = "SET_DEBATE_REQUEST";
var SET_DEBATE_SUCCESS = "SET_DEBATE_SUCCESS";
var SET_DEBATE_FAILURE = "SET_DEBATE_FAILURE";
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
function fetchDebatesRequest() {
  return {
    type: FETCH_ALLDEBATES_REQUEST
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
function setDebateRequest(debate) {
  return {
    type: SET_DEBATE_REQUEST,
    debate: debate
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
    type: FETCH_DEBATE_FAILURE,
    error: error
  };
}
function createDebateRequest(name, url, debateType, languages) {
  return {
    type: CREATE_DEBATE_REQUEST,
    name: name,
    url: url,
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

/***/ }),

/***/ "./actions/modules.js":
/*!****************************!*\
  !*** ./actions/modules.js ***!
  \****************************/
/*! exports provided: FETCH_MODULE_REQUEST, FETCH_MODULE_SUCCESS, FETCH_MODULE_FAILURE, fetchModuleRequest, fetchModuleSuccess, fetchModuleFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MODULE_REQUEST", function() { return FETCH_MODULE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MODULE_SUCCESS", function() { return FETCH_MODULE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MODULE_FAILURE", function() { return FETCH_MODULE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchModuleRequest", function() { return fetchModuleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchModuleSuccess", function() { return fetchModuleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchModuleFailure", function() { return fetchModuleFailure; });
var FETCH_MODULE_REQUEST = "FETCH_MODULE_REQUEST";
var FETCH_MODULE_SUCCESS = "FETCH_MODULE_SUCCESS";
var FETCH_MODULE_FAILURE = "FETCH_MODULE_FAILURE";
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

/***/ }),

/***/ "./actions/pages.js":
/*!**************************!*\
  !*** ./actions/pages.js ***!
  \**************************/
/*! exports provided: FETCH_ALLPAGES_REQUEST, FETCH_ALLPAGES_SUCCESS, FETCH_ALLPAGES_FAILURE, CREATE_PAGE_REQUEST, CREATE_PAGE_SUCCESS, CREATE_PAGE_FAILURE, FETCH_PAGE_REQUEST, FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILURE, UPDATE_PAGE_REQUEST, UPDATE_PAGE_SUCCESS, UPDATE_PAGE_FAILURE, fetchAllPagesRequest, fetchAllPagesSuccess, fetchAllPagesFailure, createPageRequest, createPageSuccess, createPageFailure, fetchPageRequest, fetchPageSuccess, fetchPageFailure, updatePageRequest, updatePageSuccess, updatePageFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageRequest", function() { return createPageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageSuccess", function() { return createPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageFailure", function() { return createPageFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPageRequest", function() { return fetchPageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPageSuccess", function() { return fetchPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPageFailure", function() { return fetchPageFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageRequest", function() { return updatePageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageSuccess", function() { return updatePageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePageFailure", function() { return updatePageFailure; });
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
/*! exports provided: FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_REQUEST", function() { return FETCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_SUCCESS", function() { return FETCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POSTS_FAILURE", function() { return FETCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsRequest", function() { return fetchPostsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsSuccess", function() { return fetchPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsFailure", function() { return fetchPostsFailure; });
var FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
var FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
var FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_16__["default"].withTranslation;
var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_10___default()();
var store;

var makeStore = function makeStore(initialState) {
  store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_13__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(sagaMiddleware));
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_12__["default"]);
  return store;
};

var Simpatico = /*#__PURE__*/function (_App) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Simpatico, _App);

  var _super = _createSuper(Simpatico);

  function Simpatico() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Simpatico);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Simpatico, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Not on the URL so check the localStorage
      if (localStorage.getItem("token")) {
        // Ask server to verify and set cookie
        store.dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_14__["verifyTokenRequest"])({
          token: localStorage.getItem("token"),
          role: "participant"
        }));
      } else {
        // No token, set to false rather than unknown
        store.dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_14__["verifyTokenRequestFailure"])('no valid token'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: store
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, pageProps));
    }
  }]);

  return Simpatico;
}(next_app__WEBPACK_IMPORTED_MODULE_5___default.a);

var appWithTranslation = _i18n__WEBPACK_IMPORTED_MODULE_16__["default"].appWithTranslation;
/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default()(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default()(makeStore), appWithTranslation, withTranslation(["common"]))(Simpatico));

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
  id: null,
  isValidToken: null,
  token: "",
  processing: false,
  error: "",
  accountId: null
};
function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: "",
        token: action.token
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST_SUCCESS"]:
      // Parse out json and update the store
      if (action && action.json && action.json.statusCode === 500) {
        return _objectSpread(_objectSpread({}, state), {}, {
          processing: false,
          error: "",
          isValidToken: false
        });
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        isValidToken: true
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        isValidToken: false,
        token: ""
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        id: null
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        id: action.json.id,
        accountId: action.json.accountId
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
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
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debates: action.debates
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        debates: []
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["SET_DEBATE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        //processing: false,
        error: action.error,
        debate: []
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        debate: null
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        debate: action.debate
      });

    case _actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
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
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./reducers/auth.js");
/* harmony import */ var _debate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debate */ "./reducers/debate.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./reducers/modules.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./reducers/pages.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts */ "./reducers/posts.js");






var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  debate: _debate__WEBPACK_IMPORTED_MODULE_2__["default"],
  modules: _modules__WEBPACK_IMPORTED_MODULE_3__["default"],
  pages: _pages__WEBPACK_IMPORTED_MODULE_4__["default"],
  posts: _posts__WEBPACK_IMPORTED_MODULE_5__["default"]
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
  processing: false,
  error: "",
  module: null
};
function modules() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        module: action.module
      });

    case _actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
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
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        pages: action.pages
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLPAGES_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        pages: []
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        page: action.page
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["CREATE_PAGE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        page: null
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        page: action.page
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["FETCH_PAGE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        page: null
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing_update: true,
        error: ""
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing_update: false,
        error: "",
        page: null
      });

    case _actions_pages__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PAGE_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
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
  error: ""
};
function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        error: "",
        posts: []
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_SUCCESS"]:
      // Parse out json and update the store
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: "",
        posts: action.posts
      });

    case _actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        error: action.error,
        posts: []
      });

    default:
      return state;
  }
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




function* fetchAllDebates() {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchAllDebates").then(function (json) {
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

function* authSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEBATE_REQUEST"], fetchDebate);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALLDEBATES_REQUEST"], fetchAllDebates);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["CREATE_DEBATE_REQUEST"], createDebate);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_HEADER_REQUEST"], updateLandingPageHeader);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_OVERVIEW_REQUEST"], updateLandingPageOverview);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_debate__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LANDING_PAGE_THEMES_REQUEST"], updateLandingPageThemes);
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
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./sagas/auth.js");
/* harmony import */ var _debate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debate */ "./sagas/debate.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./sagas/modules.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./sagas/pages.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts */ "./sagas/posts.js");






/* harmony default export */ __webpack_exports__["default"] = (function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_debate__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_modules__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_pages__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_posts__WEBPACK_IMPORTED_MODULE_5__["default"])]);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modulesSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modules */ "./actions/modules.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");




function* fetchModule(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/fetchModule?id=".concat(action.id)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchModuleSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["fetchModuleFailure"])(err));
  });
  yield r;
}

function* modulesSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_modules__WEBPACK_IMPORTED_MODULE_1__["FETCH_MODULE_REQUEST"], fetchModule);
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

function* postsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_posts__WEBPACK_IMPORTED_MODULE_1__["FETCH_POSTS_REQUEST"], fetchPosts);
}

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2RlYmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9kZWJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9hdXRoLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2RlYmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9tb2R1bGVzLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3BhZ2VzLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3RzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9mbG93UmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJleGVjT25jZSIsImNvbnNvbGUiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiVkVSSUZZX1RPS0VOX1JFUVVFU1QiLCJWRVJJRllfVE9LRU5fUkVRVUVTVF9TVUNDRVNTIiwiVkVSSUZZX1RPS0VOX1JFUVVFU1RfRkFJTFVSRSIsIkZFVENIX1VTRVJfSU5GT19SRVFVRVNUIiwiRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfU1VDQ0VTUyIsIkZFVENIX1VTRVJfSU5GT19SRVFVRVNUX0ZBSUxVUkUiLCJ2ZXJpZnlUb2tlblJlcXVlc3QiLCJ0b2tlbiIsInJvbGUiLCJ0eXBlIiwidmVyaWZ5VG9rZW5SZXF1ZXN0U3VjY2VzcyIsImpzb24iLCJ2ZXJpZnlUb2tlblJlcXVlc3RGYWlsdXJlIiwiZmV0Y2hVc2VySW5mbyIsImZldGNoVXNlckluZm9TdWNjZXNzIiwiZmV0Y2hVc2VySW5mb0ZhaWx1cmUiLCJGRVRDSF9BTExERUJBVEVTX1JFUVVFU1QiLCJGRVRDSF9BTExERUJBVEVTX1NVQ0NFU1MiLCJGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkUiLCJGRVRDSF9ERUJBVEVfUkVRVUVTVCIsIkZFVENIX0RFQkFURV9TVUNDRVNTIiwiRkVUQ0hfREVCQVRFX0ZBSUxVUkUiLCJTRVRfREVCQVRFX1JFUVVFU1QiLCJTRVRfREVCQVRFX1NVQ0NFU1MiLCJTRVRfREVCQVRFX0ZBSUxVUkUiLCJDUkVBVEVfREVCQVRFX1JFUVVFU1QiLCJDUkVBVEVfREVCQVRFX1NVQ0NFU1MiLCJDUkVBVEVfREVCQVRFX0ZBSUxVUkUiLCJVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNUIiwiVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTUyIsIlVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX0ZBSUxVUkUiLCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1JFUVVFU1QiLCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1MiLCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX0ZBSUxVUkUiLCJVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNUIiwiVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTUyIsIlVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX0ZBSUxVUkUiLCJmZXRjaERlYmF0ZXNSZXF1ZXN0IiwiZmV0Y2hEZWJhdGVzU3VjY2VzcyIsImRlYmF0ZXMiLCJmZXRjaERlYmF0ZXNGYWlsdXJlIiwic2V0RGViYXRlUmVxdWVzdCIsImRlYmF0ZSIsImZldGNoRGViYXRlUmVxdWVzdCIsIm5hbWUiLCJmZXRjaERlYmF0ZVN1Y2Nlc3MiLCJmZXRjaERlYmF0ZUZhaWx1cmUiLCJjcmVhdGVEZWJhdGVSZXF1ZXN0Iiwic2x1ZyIsImRlYmF0ZVR5cGUiLCJsYW5ndWFnZXMiLCJjcmVhdGVEZWJhdGVTdWNjZXNzIiwiY3JlYXRlRGViYXRlRmFpbHVyZSIsInVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyUmVxdWVzdCIsImRlYmF0ZUlEIiwiaGVhZGVyIiwidXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJTdWNjZXNzIiwidXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJGYWlsdXJlIiwidXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld1JlcXVlc3QiLCJvdmVydmlldyIsInVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdTdWNjZXNzIiwidXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld0ZhaWx1cmUiLCJ1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc1JlcXVlc3QiLCJ0aGVtZXMiLCJ1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc1N1Y2Nlc3MiLCJ1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc0ZhaWx1cmUiLCJGRVRDSF9NT0RVTEVfUkVRVUVTVCIsIkZFVENIX01PRFVMRV9TVUNDRVNTIiwiRkVUQ0hfTU9EVUxFX0ZBSUxVUkUiLCJmZXRjaE1vZHVsZVJlcXVlc3QiLCJpZCIsImZldGNoTW9kdWxlU3VjY2VzcyIsIm1vZHVsZSIsImZldGNoTW9kdWxlRmFpbHVyZSIsIkZFVENIX0FMTFBBR0VTX1JFUVVFU1QiLCJGRVRDSF9BTExQQUdFU19TVUNDRVNTIiwiRkVUQ0hfQUxMUEFHRVNfRkFJTFVSRSIsIkNSRUFURV9QQUdFX1JFUVVFU1QiLCJDUkVBVEVfUEFHRV9TVUNDRVNTIiwiQ1JFQVRFX1BBR0VfRkFJTFVSRSIsIkZFVENIX1BBR0VfUkVRVUVTVCIsIkZFVENIX1BBR0VfU1VDQ0VTUyIsIkZFVENIX1BBR0VfRkFJTFVSRSIsIlVQREFURV9QQUdFX1JFUVVFU1QiLCJVUERBVEVfUEFHRV9TVUNDRVNTIiwiVVBEQVRFX1BBR0VfRkFJTFVSRSIsImZldGNoQWxsUGFnZXNSZXF1ZXN0IiwiZmV0Y2hBbGxQYWdlc1N1Y2Nlc3MiLCJwYWdlcyIsImZldGNoQWxsUGFnZXNGYWlsdXJlIiwiY3JlYXRlUGFnZVJlcXVlc3QiLCJkZWJhdGVJZCIsInBhZ2VUeXBlIiwiY3JlYXRlUGFnZVN1Y2Nlc3MiLCJjcmVhdGVQYWdlRmFpbHVyZSIsImZldGNoUGFnZVJlcXVlc3QiLCJmZXRjaFBhZ2VTdWNjZXNzIiwicGFnZSIsImZldGNoUGFnZUZhaWx1cmUiLCJ1cGRhdGVQYWdlUmVxdWVzdCIsInVwZGF0ZVBhZ2VTdWNjZXNzIiwidXBkYXRlUGFnZUZhaWx1cmUiLCJGRVRDSF9QT1NUU19SRVFVRVNUIiwiRkVUQ0hfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1BPU1RTX0ZBSUxVUkUiLCJmZXRjaFBvc3RzUmVxdWVzdCIsImFjY291bnRJZCIsImZldGNoUG9zdHNTdWNjZXNzIiwicG9zdHMiLCJmZXRjaFBvc3RzRmFpbHVyZSIsInN0b3JlIiwiY2FsbEFwaSIsInJvdXRlIiwibWV0aG9kIiwiYm9keSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsInN0YXR1cyIsIkVycm9yIiwiZ2V0IiwidW5kZWZpbmVkIiwicG9zdCIsInB1dEFwaSIsInJlbW92ZSIsImluaXQiLCJfc3RvcmUiLCJBcGkiLCJ3aXRoVHJhbnNsYXRpb24iLCJpMThuIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1ha2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiYWxsUmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJzYWdhcyIsIlNpbXBhdGljbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNwYXRjaCIsImFwcFdpdGhUcmFuc2xhdGlvbiIsImZsb3dSaWdodCIsIndpdGhSZWR1eCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJpc1ZhbGlkVG9rZW4iLCJwcm9jZXNzaW5nIiwiYXV0aCIsInN0YXRlIiwiYWN0aW9uIiwic3RhdHVzQ29kZSIsImNvbWJpbmVSZWR1Y2VycyIsIm1vZHVsZXMiLCJwcm9jZXNzaW5nX3VwZGF0ZSIsInIiLCJKU09OIiwic3RyaW5naWZ5IiwicHV0IiwiZXJyIiwiYXV0aFNhZ2EiLCJ0YWtlTGF0ZXN0IiwiZmV0Y2hBbGxEZWJhdGVzIiwiZmV0Y2hEZWJhdGUiLCJjcmVhdGVEZWJhdGUiLCJ1cGRhdGVMYW5kaW5nUGFnZUhlYWRlciIsInVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXciLCJ1cGRhdGVMYW5kaW5nUGFnZVRoZW1lcyIsImFsbCIsImZvcmsiLCJkZWJhdGVTYWdhIiwibW9kdWxlc1NhZ2EiLCJwYWdlc1NhZ2EiLCJwb3N0c1NhZ2EiLCJmZXRjaE1vZHVsZSIsImZldGNoQWxsUGFnZXMiLCJjcmVhdGVQYWdlIiwiZmV0Y2hQYWdlIiwidXBkYXRlUGFnZSIsImZldGNoUG9zdHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEw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c0JtRixVQUF0QixDQUFoQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFwaToge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkFQSV9IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0JyxcbiAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgMTAwMFxuICB9LFxuICBpMThuOiB7XG4gICAgbGFuZ3VhZ2VzOiBwcm9jZXNzLmVudi5MQU5HVUFHRVMgfHwgWydlbicsICdlcycsICdmciddLFxuICAgIGRlZmF1bHRMYW5ndWFnZTogcHJvY2Vzcy5lbnYuREVGQVVMVF9MQU5HVUFHRSB8fCAnZnInLFxuICB9LFxufTtcbiIsImltcG9ydCBOZXh0STE4TmV4dCBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IHtcbiAgaTE4bjogeyBsYW5ndWFnZXMsIGRlZmF1bHRMYW5ndWFnZSB9LFxufSA9IGNvbmZpZztcblxuY29uc3QgZmFsbGJhY2tMYW5ndWFnZSA9IGRlZmF1bHRMYW5ndWFnZTtcblxuLy8gT3B0aW9ucyBsaXN0OiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VEZXRlY3RvciNkZXRlY3Rvci1vcHRpb25zXG5jb25zdCBkZXRlY3Rvck9wdGlvbnMgPSB7XG4gIG9yZGVyOiBbJ2Nvb2tpZSddLFxuICBjYWNoZXM6IFsnY29va2llJ10sXG4gIGxvb2t1cENvb2tpZTogJ25leHQtaTE4bmV4dCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgTmV4dEkxOE5leHQoe1xuICBvdGhlckxhbmd1YWdlczogbGFuZ3VhZ2VzLFxuICBmYWxsYmFja0xuZzogZmFsbGJhY2tMYW5ndWFnZSxcbiAgZGVmYXVsdE5TOiAnY29tbW9uJyxcbiAgZGV0ZWN0aW9uOiBkZXRlY3Rvck9wdGlvbnMsXG59KTtcblxuLy8ga25vd24gYnVnIHNob3dpbmcgJ3JlYWN0LWkxOG5leHQ6OiBpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eSB1bmRlZmluZWQnXG4vLyBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNoaW5tYW4vbmV4dC1pMThuZXh0L2lzc3Vlcy8zNzRcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZXhwb3J0IGNvbnN0IFZFUklGWV9UT0tFTl9SRVFVRVNUID0gXCJWRVJJRllfVE9LRU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFZFUklGWV9UT0tFTl9SRVFVRVNUX1NVQ0NFU1MgPSBcIlZFUklGWV9UT0tFTl9SRVFVRVNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBWRVJJRllfVE9LRU5fUkVRVUVTVF9GQUlMVVJFID0gXCJWRVJJRllfVE9LRU5fUkVRVUVTVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVCA9IFwiRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9TVUNDRVNTID1cbiAgXCJGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfRkFJTFVSRSA9XG4gIFwiRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW5SZXF1ZXN0KHsgdG9rZW4sIHJvbGUgfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFZFUklGWV9UT0tFTl9SRVFVRVNULFxuICAgIHRva2VuLFxuICAgIHJvbGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuUmVxdWVzdFN1Y2Nlc3MoanNvbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFZFUklGWV9UT0tFTl9SRVFVRVNUX1NVQ0NFU1MsXG4gICAganNvblxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW5SZXF1ZXN0RmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFZFUklGWV9UT0tFTl9SRVFVRVNUX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlckluZm8oKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlckluZm9TdWNjZXNzKGpzb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9TVUNDRVNTLFxuICAgIGpzb25cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlckluZm9GYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX0FMTERFQkFURVNfUkVRVUVTVCA9IFwiRkVUQ0hfQUxMREVCQVRFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfQUxMREVCQVRFU19TVUNDRVNTID0gXCJGRVRDSF9BTExERUJBVEVTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkUgPSBcIkZFVENIX0FMTERFQkFURVNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hfREVCQVRFX1JFUVVFU1QgPSBcIkZFVENIX0RFQkFURV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfREVCQVRFX1NVQ0NFU1MgPSBcIkZFVENIX0RFQkFURV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfREVCQVRFX0ZBSUxVUkUgPSBcIkZFVENIX0RFQkFURV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVCQVRFX1JFUVVFU1QgPSBcIlNFVF9ERUJBVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUJBVEVfU1VDQ0VTUyA9IFwiU0VUX0RFQkFURV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0VUX0RFQkFURV9GQUlMVVJFID0gXCJTRVRfREVCQVRFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9ERUJBVEVfUkVRVUVTVCA9IFwiQ1JFQVRFX0RFQkFURV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0RFQkFURV9TVUNDRVNTID0gXCJDUkVBVEVfREVCQVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfREVCQVRFX0ZBSUxVUkUgPSBcIkNSRUFURV9ERUJBVEVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfUkVRVUVTVCA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1NVQ0NFU1MgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9GQUlMVVJFID0gXCJVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1JFUVVFU1QgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfU1VDQ0VTUyA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19GQUlMVVJFID0gXCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1JFUVVFU1QgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19TVUNDRVNTID0gXCJVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfRkFJTFVSRSA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfRkFJTFVSRVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZWJhdGVzUmVxdWVzdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9BTExERUJBVEVTX1JFUVVFU1RcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGViYXRlc1N1Y2Nlc3MoZGViYXRlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0FMTERFQkFURVNfU1VDQ0VTUyxcbiAgICBkZWJhdGVzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlYmF0ZXNGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfQUxMREVCQVRFU19GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJhdGVSZXF1ZXN0KGRlYmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9ERUJBVEVfUkVRVUVTVCxcbiAgICBkZWJhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGViYXRlUmVxdWVzdChuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfREVCQVRFX1JFUVVFU1QsXG4gICAgbmFtZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZWJhdGVTdWNjZXNzKGRlYmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0RFQkFURV9TVUNDRVNTLFxuICAgIGRlYmF0ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZWJhdGVGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfREVCQVRFX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlYmF0ZVJlcXVlc3QobmFtZSwgc2x1ZywgZGViYXRlVHlwZSwgbGFuZ3VhZ2VzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX0RFQkFURV9SRVFVRVNULFxuICAgIG5hbWUsXG4gICAgc2x1ZyxcbiAgICBkZWJhdGVUeXBlLFxuICAgIGxhbmd1YWdlc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGViYXRlU3VjY2VzcyhkZWJhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDUkVBVEVfREVCQVRFX1NVQ0NFU1MsXG4gICAgZGViYXRlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWJhdGVGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX0RFQkFURV9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZUhlYWRlclJlcXVlc3QoZGViYXRlSUQsIGhlYWRlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1JFUVVFU1QsXG4gICAgZGViYXRlSUQsXG4gICAgaGVhZGVyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZUhlYWRlclN1Y2Nlc3MoZGViYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTUyxcbiAgICBkZWJhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdSZXF1ZXN0KGRlYmF0ZUlELCBvdmVydmlldykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfUkVRVUVTVCxcbiAgICBkZWJhdGVJRCxcbiAgICBvdmVydmlld1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld1N1Y2Nlc3MoZGViYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19TVUNDRVNTLFxuICAgIGRlYmF0ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld0ZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzUmVxdWVzdChkZWJhdGVJRCwgdGhlbWVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfUkVRVUVTVCxcbiAgICBkZWJhdGVJRCxcbiAgICB0aGVtZXNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzU3VjY2VzcyhkZWJhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19TVUNDRVNTLFxuICAgIGRlYmF0ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX01PRFVMRV9SRVFVRVNUID0gXCJGRVRDSF9NT0RVTEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX01PRFVMRV9TVUNDRVNTID0gXCJGRVRDSF9NT0RVTEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX01PRFVMRV9GQUlMVVJFID0gXCJGRVRDSF9NT0RVTEVfRkFJTFVSRVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vZHVsZVJlcXVlc3QoaWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9NT0RVTEVfUkVRVUVTVCxcbiAgICBpZFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb2R1bGVTdWNjZXNzKG1vZHVsZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX01PRFVMRV9TVUNDRVNTLFxuICAgIG1vZHVsZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb2R1bGVGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfTU9EVUxFX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBGRVRDSF9BTExQQUdFU19SRVFVRVNUID0gXCJGRVRDSF9BTExQQUdFU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfQUxMUEFHRVNfU1VDQ0VTUyA9IFwiRkVUQ0hfQUxMUEFHRVNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0FMTFBBR0VTX0ZBSUxVUkUgPSBcIkZFVENIX0FMTFBBR0VTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QQUdFX1JFUVVFU1QgPSBcIkNSRUFURV9QQUdFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFHRV9TVUNDRVNTID0gXCJDUkVBVEVfUEFHRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBR0VfRkFJTFVSRSA9IFwiQ1JFQVRFX1BBR0VfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hfUEFHRV9SRVFVRVNUID0gXCJGRVRDSF9QQUdFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9QQUdFX1NVQ0NFU1MgPSBcIkZFVENIX1BBR0VfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BBR0VfRkFJTFVSRSA9IFwiRkVUQ0hfUEFHRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfUEFHRV9SRVFVRVNUID0gXCJVUERBVEVfUEFHRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BBR0VfU1VDQ0VTUyA9IFwiVVBEQVRFX1BBR0VfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQUdFX0ZBSUxVUkUgPSBcIlVQREFURV9QQUdFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQWxsUGFnZXNSZXF1ZXN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0FMTFBBR0VTX1JFUVVFU1RcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQWxsUGFnZXNTdWNjZXNzKHBhZ2VzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfQUxMUEFHRVNfU1VDQ0VTUyxcbiAgICBwYWdlc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBbGxQYWdlc0ZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9BTExQQUdFU19GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlUmVxdWVzdChuYW1lLCBkZWJhdGVJZCwgcGFnZVR5cGUsIHVybCwgbGFuZ3VhZ2VzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX1BBR0VfUkVRVUVTVCxcbiAgICBuYW1lLFxuICAgIGRlYmF0ZUlkLFxuICAgIHBhZ2VUeXBlLFxuICAgIHVybCxcbiAgICBsYW5ndWFnZXNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VTdWNjZXNzKHBhZ2VzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX1BBR0VfU1VDQ0VTUyxcbiAgICBwYWdlc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZUZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDUkVBVEVfUEFHRV9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBhZ2VSZXF1ZXN0KGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfUEFHRV9SRVFVRVNULFxuICAgIGlkXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBhZ2VTdWNjZXNzKHBhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9QQUdFX1NVQ0NFU1MsXG4gICAgcGFnZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQYWdlRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BBR0VfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGFnZVJlcXVlc3QobmFtZSwgaWQsIHBhZ2VUeXBlLCB1cmwsIGxhbmd1YWdlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9QQUdFX1JFUVVFU1QsXG4gICAgbmFtZSxcbiAgICBpZCxcbiAgICBwYWdlVHlwZSxcbiAgICB1cmwsXG4gICAgbGFuZ3VhZ2VzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQYWdlU3VjY2VzcyhwYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX1BBR0VfU1VDQ0VTUyxcbiAgICBwYWdlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQYWdlRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9QQUdFX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn0iLCJleHBvcnQgY29uc3QgRkVUQ0hfUE9TVFNfUkVRVUVTVCA9IFwiRkVUQ0hfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BPU1RTX1NVQ0NFU1MgPSBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1NUU19GQUlMVVJFID0gXCJGRVRDSF9QT1NUU19GQUlMVVJFXCI7ICBcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHNSZXF1ZXN0KGFjY291bnRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BPU1RTX1JFUVVFU1QsXG4gICAgYWNjb3VudElkXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzU3VjY2Vzcyhwb3N0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BPU1RTX1NVQ0NFU1MsXG4gICAgcG9zdHNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHNGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfUE9TVFNfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxubGV0IHN0b3JlO1xuXG5leHBvcnQgY29uc3QgY2FsbEFwaSA9IChyb3V0ZSwgbWV0aG9kLCBib2R5LCBvcHRpb25zKSA9PiB7XG4gIG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kLFxuICAgIGJvZHksXG4gICAgaGVhZGVyczoge30sXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuICBvcHRpb25zLmhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIjtcblxuICByZXR1cm4gZmV0Y2goYC9hcGkvJHtyb3V0ZX1gLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgLy8gTG9nIHRoZSB1c2VyIG91dFxuICAgICAgfVxuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKGVycm9yID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHJvdXRlLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBjYWxsQXBpKHJvdXRlLCBcIkdFVFwiLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3QgPSAocm91dGUsIGJvZHksIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNhbGxBcGkocm91dGUsIFwiUE9TVFwiLCBib2R5LCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXRBcGkgPSAocm91dGUsIGJvZHksIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIGNhbGxBcGkocm91dGUsIFwiUFVUXCIsIGJvZHksIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChyb3V0ZSwgYm9keSwgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gY2FsbEFwaShyb3V0ZSwgXCJERUxFVEVcIiwgYm9keSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdCA9IF9zdG9yZSA9PiB7XG4gIHN0b3JlID0gX3N0b3JlO1xufTtcblxuY29uc3QgQXBpID0ge1xuICBnZXQsXG4gIHBvc3QsXG4gIHB1dEFwaSxcbiAgcmVtb3ZlLFxuICBjYWxsQXBpLFxuICBpbml0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgZmxvd1JpZ2h0IGZyb20gJ2xvZGFzaC9mbG93UmlnaHQnO1xuXG5pbXBvcnQgc2FnYXMgZnJvbSBcIi4uL3NhZ2FzXCI7XG5pbXBvcnQgYWxsUmVkdWNlcnMgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUb2tlblJlcXVlc3QsIHZlcmlmeVRva2VuUmVxdWVzdEZhaWx1cmUgfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnXG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi9pMThuJztcblxuY29uc3QgeyB3aXRoVHJhbnNsYXRpb24gfSA9IGkxOG47XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxubGV0IHN0b3JlO1xuXG5jb25zdCBtYWtlU3RvcmUgPSBpbml0aWFsU3RhdGUgPT4ge1xuICBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIGFsbFJlZHVjZXJzLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpXG4gICk7XG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhcyk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY2xhc3MgU2ltcGF0aWNvIGV4dGVuZHMgQXBwIHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gTm90IG9uIHRoZSBVUkwgc28gY2hlY2sgdGhlIGxvY2FsU3RvcmFnZVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKSB7XG4gICAgICAvLyBBc2sgc2VydmVyIHRvIHZlcmlmeSBhbmQgc2V0IGNvb2tpZVxuICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIHZlcmlmeVRva2VuUmVxdWVzdCh7XG4gICAgICAgICAgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXG4gICAgICAgICAgcm9sZTogXCJwYXJ0aWNpcGFudFwiXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyB0b2tlbiwgc2V0IHRvIGZhbHNlIHJhdGhlciB0aGFuIHVua25vd25cbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICB2ZXJpZnlUb2tlblJlcXVlc3RGYWlsdXJlKCdubyB2YWxpZCB0b2tlbicpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgeyBhcHBXaXRoVHJhbnNsYXRpb24gfSA9IGkxOG47XG5cbmV4cG9ydCBkZWZhdWx0IGZsb3dSaWdodChcbiAgd2l0aFJlZHV4KG1ha2VTdG9yZSksXG4gIGFwcFdpdGhUcmFuc2xhdGlvbixcbiAgd2l0aFRyYW5zbGF0aW9uKFtgY29tbW9uYF0pXG4pKFNpbXBhdGljbyk7IiwiaW1wb3J0IHtcbiAgVkVSSUZZX1RPS0VOX1JFUVVFU1QsXG4gIFZFUklGWV9UT0tFTl9SRVFVRVNUX1NVQ0NFU1MsXG4gIFZFUklGWV9UT0tFTl9SRVFVRVNUX0ZBSUxVUkUsXG4gIEZFVENIX1VTRVJfSU5GT19SRVFVRVNULFxuICBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9TVUNDRVNTLFxuICBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9GQUlMVVJFXG59IGZyb20gXCIuLi9hY3Rpb25zL2F1dGhcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBmaXJzdE5hbWU6IFwiXCIsXG4gIGxhc3ROYW1lOiBcIlwiLFxuICBlbWFpbDogXCJcIixcbiAgaWQ6IG51bGwsXG4gIGlzVmFsaWRUb2tlbjogbnVsbCxcbiAgdG9rZW46IFwiXCIsXG4gIHByb2Nlc3Npbmc6IGZhbHNlLFxuICBlcnJvcjogXCJcIixcbiAgYWNjb3VudElkOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVkVSSUZZX1RPS0VOX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgIHRva2VuOiBhY3Rpb24udG9rZW5cbiAgICAgIH07XG4gICAgY2FzZSBWRVJJRllfVE9LRU5fUkVRVUVTVF9TVUNDRVNTOlxuICAgICAgLy8gUGFyc2Ugb3V0IGpzb24gYW5kIHVwZGF0ZSB0aGUgc3RvcmVcbiAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uLmpzb24gJiYgYWN0aW9uLmpzb24uc3RhdHVzQ29kZSA9PT0gNTAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgICAgaXNWYWxpZFRva2VuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkVG9rZW46IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBWRVJJRllfVE9LRU5fUkVRVUVTVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBpc1ZhbGlkVG9rZW46IGZhbHNlLFxuICAgICAgICB0b2tlbjogXCJcIlxuICAgICAgfTtcbiAgICBjYXNlIEZFVENIX1VTRVJfSU5GT19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgaWQ6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgZmlyc3ROYW1lOiBhY3Rpb24uanNvbltcImZpcnN0LW5hbWVcIl0sXG4gICAgICAgIGxhc3ROYW1lOiBhY3Rpb24uanNvbltcImxhc3QtbmFtZVwiXSxcbiAgICAgICAgZW1haWw6IGFjdGlvbi5qc29uLmVtYWlsLFxuICAgICAgICBpZDogYWN0aW9uLmpzb24uaWQsXG4gICAgICAgIGFjY291bnRJZDogYWN0aW9uLmpzb24uYWNjb3VudElkXG4gICAgICB9O1xuICAgIGNhc2UgRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxuICAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIGlkOiBudWxsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEZFVENIX0FMTERFQkFURVNfUkVRVUVTVCxcbiAgRkVUQ0hfQUxMREVCQVRFU19TVUNDRVNTLFxuICBGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkUsXG4gIFNFVF9ERUJBVEVfUkVRVUVTVCxcbiAgRkVUQ0hfREVCQVRFX1JFUVVFU1QsXG4gIEZFVENIX0RFQkFURV9TVUNDRVNTLFxuICBGRVRDSF9ERUJBVEVfRkFJTFVSRSxcbiAgQ1JFQVRFX0RFQkFURV9SRVFVRVNULFxuICBDUkVBVEVfREVCQVRFX1NVQ0NFU1MsXG4gIENSRUFURV9ERUJBVEVfRkFJTFVSRSxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfUkVRVUVTVCxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTUyxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfRkFJTFVSRSxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19SRVFVRVNULFxuICBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1MsXG4gIFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfRkFJTFVSRSxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfUkVRVUVTVCxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTUyxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL2FjdGlvbnMvZGViYXRlXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGViYXRlczogW10sXG4gIHByb2Nlc3Npbmc6IGZhbHNlLFxuICBlcnJvcjogXCJcIixcbiAgZGViYXRlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJhdGUoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9BTExERUJBVEVTX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9BTExERUJBVEVTX1NVQ0NFU1M6XG4gICAgICAvLyBQYXJzZSBvdXQganNvbiBhbmQgdXBkYXRlIHRoZSBzdG9yZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgZGViYXRlczogYWN0aW9uLmRlYmF0ZXNcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGRlYmF0ZXM6IFtdXG4gICAgICB9O1xuICAgIGNhc2UgU0VUX0RFQkFURV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgZGViYXRlOiBhY3Rpb24uZGViYXRlXG4gICAgICB9O1xuICAgIGNhc2UgRkVUQ0hfREVCQVRFX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9ERUJBVEVfU1VDQ0VTUzpcbiAgICAgIC8vIFBhcnNlIG91dCBqc29uIGFuZCB1cGRhdGUgdGhlIHN0b3JlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICBkZWJhdGU6IGFjdGlvbi5kZWJhdGVcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9ERUJBVEVfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgZGViYXRlOiBudWxsXG4gICAgICB9O1xuICAgICAgY2FzZSBDUkVBVEVfREVCQVRFX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgIH07XG4gICAgY2FzZSBDUkVBVEVfREVCQVRFX1NVQ0NFU1M6XG4gICAgICAvLyBQYXJzZSBvdXQganNvbiBhbmQgdXBkYXRlIHRoZSBzdG9yZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgZGViYXRlOiBhY3Rpb24uZGViYXRlXG4gICAgICB9O1xuICAgIGNhc2UgQ1JFQVRFX0RFQkFURV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC8vcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGRlYmF0ZTogW11cbiAgICAgIH07ICAgICAgXG4gICAgY2FzZSBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBcIlwiXG4gICAgICB9O1xuICAgIGNhc2UgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTUzpcbiAgICAgIC8vIFBhcnNlIG91dCBqc29uIGFuZCB1cGRhdGUgdGhlIHN0b3JlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICBkZWJhdGU6IGFjdGlvbi5kZWJhdGVcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBkZWJhdGU6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1M6XG4gICAgICAvLyBQYXJzZSBvdXQganNvbiBhbmQgdXBkYXRlIHRoZSBzdG9yZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgZGViYXRlOiBhY3Rpb24uZGViYXRlXG4gICAgICB9O1xuICAgIGNhc2UgVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBkZWJhdGU6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBcIlwiXG4gICAgICB9O1xuICAgIGNhc2UgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTUzpcbiAgICAgIC8vIFBhcnNlIG91dCBqc29uIGFuZCB1cGRhdGUgdGhlIHN0b3JlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICBkZWJhdGU6IGFjdGlvbi5kZWJhdGVcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBkZWJhdGU6IG51bGxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCBhdXRoIGZyb20gXCIuL2F1dGhcIjtcbmltcG9ydCBkZWJhdGUgZnJvbSBcIi4vZGViYXRlXCI7XG5pbXBvcnQgbW9kdWxlcyBmcm9tIFwiLi9tb2R1bGVzXCI7XG5pbXBvcnQgcGFnZXMgZnJvbSBcIi4vcGFnZXNcIjtcbmltcG9ydCBwb3N0cyBmcm9tIFwiLi9wb3N0c1wiO1xuXG5jb25zdCBhbGxSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGF1dGgsXG4gIGRlYmF0ZSxcbiAgbW9kdWxlcyxcbiAgcGFnZXMsXG4gIHBvc3RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWxsUmVkdWNlcnM7XG4iLCJpbXBvcnQge1xuICBGRVRDSF9NT0RVTEVfUkVRVUVTVCxcbiAgRkVUQ0hfTU9EVUxFX1NVQ0NFU1MsXG4gIEZFVENIX01PRFVMRV9GQUlMVVJFLFxufSBmcm9tIFwiLi4vYWN0aW9ucy9tb2R1bGVzXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvY2Vzc2luZzogZmFsc2UsXG4gIGVycm9yOiBcIlwiLFxuICBtb2R1bGU6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZHVsZXMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9NT0RVTEVfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgfTtcbiAgICBjYXNlIEZFVENIX01PRFVMRV9TVUNDRVNTOlxuICAgICAgLy8gUGFyc2Ugb3V0IGpzb24gYW5kIHVwZGF0ZSB0aGUgc3RvcmVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgIG1vZHVsZTogYWN0aW9uLm1vZHVsZVxuICAgICAgfTtcbiAgICBjYXNlIEZFVENIX01PRFVMRV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBtb2R1bGU6IG51bGxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRkVUQ0hfQUxMUEFHRVNfUkVRVUVTVCxcbiAgRkVUQ0hfQUxMUEFHRVNfU1VDQ0VTUyxcbiAgRkVUQ0hfQUxMUEFHRVNfRkFJTFVSRSxcbiAgQ1JFQVRFX1BBR0VfUkVRVUVTVCxcbiAgQ1JFQVRFX1BBR0VfU1VDQ0VTUyxcbiAgQ1JFQVRFX1BBR0VfRkFJTFVSRSxcbiAgRkVUQ0hfUEFHRV9SRVFVRVNULFxuICBGRVRDSF9QQUdFX1NVQ0NFU1MsXG4gIEZFVENIX1BBR0VfRkFJTFVSRSxcbiAgVVBEQVRFX1BBR0VfUkVRVUVTVCxcbiAgVVBEQVRFX1BBR0VfU1VDQ0VTUyxcbiAgVVBEQVRFX1BBR0VfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcGFnZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwYWdlczogW10sXG4gIHByb2Nlc3Npbmc6IGZhbHNlLFxuICBlcnJvcjogXCJcIixcbiAgcGFnZTogbnVsbCxcbiAgcHJvY2Vzc2luZ191cGRhdGU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlcyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0FMTFBBR0VTX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9BTExQQUdFU19TVUNDRVNTOlxuICAgICAgLy8gUGFyc2Ugb3V0IGpzb24gYW5kIHVwZGF0ZSB0aGUgc3RvcmVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgIHBhZ2VzOiBhY3Rpb24ucGFnZXNcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9BTExQQUdFU19GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBwYWdlczogW11cbiAgICAgIH07XG4gICAgY2FzZSBDUkVBVEVfUEFHRV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBcIlwiXG4gICAgICB9O1xuICAgIGNhc2UgQ1JFQVRFX1BBR0VfU1VDQ0VTUzpcbiAgICAgIC8vIFBhcnNlIG91dCBqc29uIGFuZCB1cGRhdGUgdGhlIHN0b3JlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICBwYWdlOiBhY3Rpb24ucGFnZVxuICAgICAgfTtcbiAgICBjYXNlIENSRUFURV9QQUdFX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIHBhZ2U6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9QQUdFX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCJcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9QQUdFX1NVQ0NFU1M6XG4gICAgICAvLyBQYXJzZSBvdXQganNvbiBhbmQgdXBkYXRlIHRoZSBzdG9yZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2VcbiAgICAgIH07XG4gICAgY2FzZSBGRVRDSF9QQUdFX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIHBhZ2U6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfUEFHRV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3NpbmdfdXBkYXRlOiB0cnVlLFxuICAgICAgICBlcnJvcjogXCJcIlxuICAgICAgfTtcbiAgICBjYXNlIFVQREFURV9QQUdFX1NVQ0NFU1M6XG4gICAgICAvLyBQYXJzZSBvdXQganNvbiBhbmQgdXBkYXRlIHRoZSBzdG9yZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3NpbmdfdXBkYXRlOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgIHBhZ2U6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfUEFHRV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3NpbmdfdXBkYXRlOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgcGFnZTogbnVsbFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBGRVRDSF9QT1NUU19SRVFVRVNULFxuICBGRVRDSF9QT1NUU19TVUNDRVNTLFxuICBGRVRDSF9QT1NUU19GQUlMVVJFLFxufSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0c1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHBvc3RzOiBbXSxcbiAgcHJvY2Vzc2luZzogZmFsc2UsXG4gIGVycm9yOiBcIlwiLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3N0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX1BPU1RTX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICAgIHBvc3RzOiBbXVxuICAgICAgfTtcbiAgICBjYXNlIEZFVENIX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAvLyBQYXJzZSBvdXQganNvbiBhbmQgdXBkYXRlIHRoZSBzdG9yZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJcIixcbiAgICAgICAgcG9zdHM6IGFjdGlvbi5wb3N0c1xuICAgICAgfTtcbiAgICBjYXNlIEZFVENIX1BPU1RTX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIHBvc3RzOiBbXVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge1xuICBWRVJJRllfVE9LRU5fUkVRVUVTVCxcbiAgdmVyaWZ5VG9rZW5SZXF1ZXN0U3VjY2VzcyxcbiAgdmVyaWZ5VG9rZW5SZXF1ZXN0RmFpbHVyZSxcbiAgRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1QsXG4gIGZldGNoVXNlckluZm9TdWNjZXNzLFxuICBmZXRjaFVzZXJJbmZvRmFpbHVyZVxufSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5mdW5jdGlvbiogdmVyaWZ5VG9rZW5SZXF1ZXN0KGFjdGlvbikge1xuICBjb25zdCByID0geWllbGQgcG9zdChcbiAgICBcInYxL3ZlcmlmeVRva2VuXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdG9rZW46IGFjdGlvbi50b2tlbixcbiAgICAgIHJvbGU6IGFjdGlvbi5yb2xlXG4gICAgfSlcbiAgKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KHZlcmlmeVRva2VuUmVxdWVzdFN1Y2Nlc3MoanNvbikpKVxuICAgIC5jYXRjaChlcnIgPT4gcHV0KHZlcmlmeVRva2VuUmVxdWVzdEZhaWx1cmUoZXJyKSkpO1xuICB5aWVsZCByO1xufVxuXG5mdW5jdGlvbiogZmV0Y2hVc2VySW5mbygpIHtcbiAgY29uc3QgciA9IHlpZWxkIGdldChcInYxL2ZldGNoVXNlckluZm9cIilcbiAgICAudGhlbihqc29uID0+IHB1dChmZXRjaFVzZXJJbmZvU3VjY2Vzcyhqc29uKSkpXG4gICAgLmNhdGNoKGVyciA9PiBwdXQoZmV0Y2hVc2VySW5mb0ZhaWx1cmUoZXJyKSkpO1xuICB5aWVsZCByO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYXV0aFNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVkVSSUZZX1RPS0VOX1JFUVVFU1QsIHZlcmlmeVRva2VuUmVxdWVzdCk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1QsIGZldGNoVXNlckluZm8pO1xufVxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHtcbiAgRkVUQ0hfQUxMREVCQVRFU19SRVFVRVNULFxuICBmZXRjaERlYmF0ZXNTdWNjZXNzLFxuICBmZXRjaERlYmF0ZXNGYWlsdXJlLFxuICBDUkVBVEVfREVCQVRFX1JFUVVFU1QsXG4gIGNyZWF0ZURlYmF0ZVN1Y2Nlc3MsXG4gIGNyZWF0ZURlYmF0ZUZhaWx1cmUsXG4gIEZFVENIX0RFQkFURV9SRVFVRVNULFxuICBmZXRjaERlYmF0ZVN1Y2Nlc3MsXG4gIGZldGNoRGViYXRlRmFpbHVyZSxcbiAgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfUkVRVUVTVCxcbiAgdXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJTdWNjZXNzLFxuICB1cGRhdGVMYW5kaW5nUGFnZUhlYWRlckZhaWx1cmUsXG4gIFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfUkVRVUVTVCxcbiAgdXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld1N1Y2Nlc3MsXG4gIHVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdGYWlsdXJlLFxuICBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNULFxuICB1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc1N1Y2Nlc3MsXG4gIHVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzRmFpbHVyZVxufSBmcm9tIFwiLi4vYWN0aW9ucy9kZWJhdGVcIjtcbmltcG9ydCB7IGdldCwgcG9zdCwgcHV0QXBpIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuZnVuY3Rpb24qIGZldGNoQWxsRGViYXRlcygpIHtcbiAgY29uc3QgciA9IHlpZWxkIGdldChcInYxL2ZldGNoQWxsRGViYXRlc1wiKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KGZldGNoRGViYXRlc1N1Y2Nlc3MoanNvbikpKVxuICAgIC5jYXRjaChlcnIgPT4gcHV0KGZldGNoRGViYXRlc0ZhaWx1cmUoZXJyKSkpO1xuICB5aWVsZCByO1xufVxuXG5mdW5jdGlvbiogZmV0Y2hEZWJhdGUoYWN0aW9uKSB7XG4gIGNvbnN0IHIgPSB5aWVsZCBnZXQoYHYxL2ZldGNoRGViYXRlP25hbWU9JHthY3Rpb24ubmFtZX1gKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KGZldGNoRGViYXRlU3VjY2Vzcyhqc29uKSkpXG4gICAgLmNhdGNoKGVyciA9PiBwdXQoZmV0Y2hEZWJhdGVGYWlsdXJlKGVycikpKTtcbiAgeWllbGQgcjtcbn1cblxuZnVuY3Rpb24qIGNyZWF0ZURlYmF0ZShhY3Rpb24pIHtcbiAgY29uc3QgciA9IHlpZWxkIHBvc3QoXCJ2MS9jcmVhdGVEZWJhdGVcIixcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiBhY3Rpb24ubmFtZSxcbiAgICAgIHNsdWc6IGFjdGlvbi5zbHVnLFxuICAgICAgZGViYXRlVHlwZTogYWN0aW9uLmRlYmF0ZVR5cGUsXG4gICAgICBsYW5ndWFnZXM6IGFjdGlvbi5sYW5ndWFnZXNcbiAgICB9KSlcbiAgICAudGhlbihqc29uID0+IHB1dChjcmVhdGVEZWJhdGVTdWNjZXNzKGpzb24pKSlcbiAgICAuY2F0Y2goZXJyID0+IHB1dChjcmVhdGVEZWJhdGVGYWlsdXJlKGVycikpKTtcbiAgeWllbGQgcjtcbn1cblxuZnVuY3Rpb24qIHVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyKGFjdGlvbikge1xuICBjb25zdCByID0geWllbGQgcHV0QXBpKFwidjEvdXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJcIixcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkZWJhdGVJRDogYWN0aW9uLmRlYmF0ZUlELFxuICAgICAgaGVhZGVyOiBhY3Rpb24uaGVhZGVyXG4gICAgfSkpXG4gICAgLnRoZW4oanNvbiA9PiBwdXQodXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJTdWNjZXNzKGpzb24pKSlcbiAgICAuY2F0Y2goZXJyID0+IHB1dCh1cGRhdGVMYW5kaW5nUGFnZUhlYWRlckZhaWx1cmUoZXJyKSkpO1xuICB5aWVsZCByO1xufVxuXG5mdW5jdGlvbiogdXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlldyhhY3Rpb24pIHtcbiAgY29uc3QgciA9IHlpZWxkIHB1dEFwaShcInYxL3VwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdcIixcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkZWJhdGVJRDogYWN0aW9uLmRlYmF0ZUlELFxuICAgICAgb3ZlcnZpZXc6IGFjdGlvbi5vdmVydmlld1xuICAgIH0pKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KHVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdTdWNjZXNzKGpzb24pKSlcbiAgICAuY2F0Y2goZXJyID0+IHB1dCh1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3RmFpbHVyZShlcnIpKSk7XG4gIHlpZWxkIHI7XG59XG5cbmZ1bmN0aW9uKiB1cGRhdGVMYW5kaW5nUGFnZVRoZW1lcyhhY3Rpb24pIHtcbiAgY29uc3QgciA9IHlpZWxkIHB1dEFwaShcInYxL3VwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZGViYXRlSUQ6IGFjdGlvbi5kZWJhdGVJRCxcbiAgICAgIHRoZW1lczogYWN0aW9uLnRoZW1lc1xuICAgIH0pKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KHVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzU3VjY2Vzcyhqc29uKSkpXG4gICAgLmNhdGNoKGVyciA9PiBwdXQodXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNGYWlsdXJlKGVycikpKTtcbiAgeWllbGQgcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGF1dGhTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZFVENIX0RFQkFURV9SRVFVRVNULCBmZXRjaERlYmF0ZSk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRkVUQ0hfQUxMREVCQVRFU19SRVFVRVNULCBmZXRjaEFsbERlYmF0ZXMpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KENSRUFURV9ERUJBVEVfUkVRVUVTVCwgY3JlYXRlRGViYXRlKTtcbiAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNULCB1cGRhdGVMYW5kaW5nUGFnZUhlYWRlcik7XG4gIHlpZWxkIHRha2VMYXRlc3QoVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19SRVFVRVNULCB1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3KTtcbiAgeWllbGQgdGFrZUxhdGVzdChVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNULCB1cGRhdGVMYW5kaW5nUGFnZVRoZW1lcyk7XG59XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCBhdXRoU2FnYSBmcm9tIFwiLi9hdXRoXCI7XG5pbXBvcnQgZGViYXRlU2FnYSBmcm9tIFwiLi9kZWJhdGVcIjtcbmltcG9ydCBtb2R1bGVzU2FnYSBmcm9tIFwiLi9tb2R1bGVzXCI7XG5pbXBvcnQgcGFnZXNTYWdhIGZyb20gXCIuL3BhZ2VzXCI7XG5pbXBvcnQgcG9zdHNTYWdhIGZyb20gXCIuL3Bvc3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKigpIHtcbiAgeWllbGQgYWxsKFtmb3JrKGF1dGhTYWdhKSwgZm9yayhkZWJhdGVTYWdhKSwgZm9yayhtb2R1bGVzU2FnYSksIGZvcmsocGFnZXNTYWdhKSwgZm9yayhwb3N0c1NhZ2EpXSk7XG59XG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge1xuICBGRVRDSF9NT0RVTEVfUkVRVUVTVCxcbiAgZmV0Y2hNb2R1bGVTdWNjZXNzLFxuICBmZXRjaE1vZHVsZUZhaWx1cmUsXG59IGZyb20gXCIuLi9hY3Rpb25zL21vZHVsZXNcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cblxuZnVuY3Rpb24qIGZldGNoTW9kdWxlKGFjdGlvbikge1xuICBjb25zdCByID0geWllbGQgZ2V0KGB2MS9mZXRjaE1vZHVsZT9pZD0ke2FjdGlvbi5pZH1gKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KGZldGNoTW9kdWxlU3VjY2Vzcyhqc29uKSkpXG4gICAgLmNhdGNoKGVyciA9PiBwdXQoZmV0Y2hNb2R1bGVGYWlsdXJlKGVycikpKTtcbiAgeWllbGQgcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1vZHVsZXNTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEZFVENIX01PRFVMRV9SRVFVRVNULCBmZXRjaE1vZHVsZSk7XG59XG4iLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge1xuICBGRVRDSF9BTExQQUdFU19SRVFVRVNULFxuICBmZXRjaEFsbFBhZ2VzU3VjY2VzcyxcbiAgZmV0Y2hBbGxQYWdlc0ZhaWx1cmUsXG4gIENSRUFURV9QQUdFX1JFUVVFU1QsXG4gIGNyZWF0ZVBhZ2VTdWNjZXNzLFxuICBjcmVhdGVQYWdlRmFpbHVyZSxcbiAgRkVUQ0hfUEFHRV9SRVFVRVNULFxuICBmZXRjaFBhZ2VTdWNjZXNzLFxuICBmZXRjaFBhZ2VGYWlsdXJlLFxuICBVUERBVEVfUEFHRV9SRVFVRVNULFxuICB1cGRhdGVQYWdlU3VjY2VzcyxcbiAgdXBkYXRlUGFnZUZhaWx1cmUsXG59IGZyb20gXCIuLi9hY3Rpb25zL3BhZ2VzXCI7XG5pbXBvcnQgeyBnZXQsIHBvc3QsIHB1dEFwaSB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5cbmZ1bmN0aW9uKiBmZXRjaEFsbFBhZ2VzKGFjdGlvbikge1xuICBjb25zdCByID0geWllbGQgZ2V0KGB2MS9mZXRjaEFsbFBhZ2VzYClcbiAgICAudGhlbihqc29uID0+IHB1dChmZXRjaEFsbFBhZ2VzU3VjY2Vzcyhqc29uKSkpXG4gICAgLmNhdGNoKGVyciA9PiBwdXQoZmV0Y2hBbGxQYWdlc0ZhaWx1cmUoZXJyKSkpO1xuICB5aWVsZCByO1xufVxuXG5mdW5jdGlvbiogY3JlYXRlUGFnZShhY3Rpb24pIHtcbiAgY29uc3QgciA9IHlpZWxkIHBvc3QoXCJ2MS9jcmVhdGVQYWdlXCIsXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogYWN0aW9uLm5hbWUsXG4gICAgICB0eXBlOiBhY3Rpb24ucGFnZVR5cGUsXG4gICAgICBkZWJhdGVJZDogYWN0aW9uLmRlYmF0ZUlkLFxuICAgICAgdXJsOiBhY3Rpb24udXJsLFxuICAgICAgbGFuZ3VhZ2VzOiBhY3Rpb24ubGFuZ3VhZ2VzXG4gICAgfSkpXG4gICAgLnRoZW4oanNvbiA9PiBwdXQoY3JlYXRlUGFnZVN1Y2Nlc3MoanNvbikpKVxuICAgIC5jYXRjaChlcnIgPT4gcHV0KGNyZWF0ZVBhZ2VGYWlsdXJlKGVycikpKTtcbiAgeWllbGQgcjtcbn1cblxuZnVuY3Rpb24qIGZldGNoUGFnZShhY3Rpb24pIHtcbiAgY29uc3QgciA9IHlpZWxkIGdldChgdjEvZmV0Y2hQYWdlP2lkPSR7YWN0aW9uLmlkfWApXG4gICAgLnRoZW4oanNvbiA9PiBwdXQoZmV0Y2hQYWdlU3VjY2Vzcyhqc29uKSkpXG4gICAgLmNhdGNoKGVyciA9PiBwdXQoZmV0Y2hQYWdlRmFpbHVyZShlcnIpKSk7XG4gIHlpZWxkIHI7XG59XG5cbmZ1bmN0aW9uKiB1cGRhdGVQYWdlKGFjdGlvbikge1xuICBjb25zdCByID0geWllbGQgcHV0QXBpKFwidjEvdXBkYXRlUGFnZVwiLFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6IGFjdGlvbi5uYW1lLFxuICAgICAgdHlwZTogYWN0aW9uLnBhZ2VUeXBlLFxuICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgIHVybDogYWN0aW9uLnVybCxcbiAgICAgIGxhbmd1YWdlczogYWN0aW9uLmxhbmd1YWdlc1xuICAgIH0pKVxuICAgIC50aGVuKGpzb24gPT4gcHV0KHVwZGF0ZVBhZ2VTdWNjZXNzKGpzb24pKSlcbiAgICAuY2F0Y2goZXJyID0+IHB1dCh1cGRhdGVQYWdlRmFpbHVyZShlcnIpKSk7XG4gIHlpZWxkIHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwYWdlc1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRkVUQ0hfQUxMUEFHRVNfUkVRVUVTVCwgZmV0Y2hBbGxQYWdlcyk7XG4gIHlpZWxkIHRha2VMYXRlc3QoQ1JFQVRFX1BBR0VfUkVRVUVTVCwgY3JlYXRlUGFnZSk7XG4gIHlpZWxkIHRha2VMYXRlc3QoRkVUQ0hfUEFHRV9SRVFVRVNULCBmZXRjaFBhZ2UpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVQREFURV9QQUdFX1JFUVVFU1QsIHVwZGF0ZVBhZ2UpO1xufVxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHtcbiAgRkVUQ0hfUE9TVFNfUkVRVUVTVCxcbiAgZmV0Y2hQb3N0c1N1Y2Nlc3MsXG4gIGZldGNoUG9zdHNGYWlsdXJlLFxufSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0c1wiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuZnVuY3Rpb24qIGZldGNoUG9zdHMoYWN0aW9uKSB7XG4gIGNvbnN0IHIgPSB5aWVsZCBnZXQoYHYxL2ZldGNoUG9zdHM/aWQ9JHthY3Rpb24uYWNjb3VudElkfWApXG4gICAgLnRoZW4oanNvbiA9PiBwdXQoZmV0Y2hQb3N0c1N1Y2Nlc3MoanNvbikpKVxuICAgIC5jYXRjaChlcnIgPT4gcHV0KGZldGNoUG9zdHNGYWlsdXJlKGVycikpKTtcbiAgeWllbGQgcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChGRVRDSF9QT1NUU19SRVFVRVNULCBmZXRjaFBvc3RzKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZmxvd1JpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==