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
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
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
  var token = _ref.token;
  return {
    type: VERIFY_TOKEN_REQUEST,
    token: token
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
/*! exports provided: FETCH_ALLDEBATES_REQUEST, FETCH_ALLDEBATES_SUCCESS, FETCH_ALLDEBATES_FAILURE, FETCH_DEBATE_REQUEST, FETCH_DEBATE_SUCCESS, FETCH_DEBATE_FAILURE, CREATE_DEBATE_REQUEST, CREATE_DEBATE_SUCCESS, CREATE_DEBATE_FAILURE, UPDATE_LANDING_PAGE_HEADER_REQUEST, UPDATE_LANDING_PAGE_HEADER_SUCCESS, UPDATE_LANDING_PAGE_HEADER_FAILURE, UPDATE_LANDING_PAGE_OVERVIEW_REQUEST, UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS, UPDATE_LANDING_PAGE_OVERVIEW_FAILURE, UPDATE_LANDING_PAGE_THEMES_REQUEST, UPDATE_LANDING_PAGE_THEMES_SUCCESS, UPDATE_LANDING_PAGE_THEMES_FAILURE, fetchDebatesRequest, fetchDebatesSuccess, fetchDebatesFailure, fetchDebateRequest, fetchDebateSuccess, fetchDebateFailure, createDebateRequest, createDebateSuccess, createDebateFailure, updateLandingPageHeaderRequest, updateLandingPageHeaderSuccess, updateLandingPageHeaderFailure, updateLandingPageOverviewRequest, updateLandingPageOverviewSuccess, updateLandingPageOverviewFailure, updateLandingPageThemesRequest, updateLandingPageThemesSuccess, updateLandingPageThemesFailure */
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
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_14__);















var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_10___default()();
var store;

var getUrlParameter = function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]".concat(name, "=([^&#]*)"));
  var results = regex.exec(window.location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var makeStore = function makeStore(initialState) {
  store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(sagaMiddleware));
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_11__["default"]);
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
      // Check if token passed in - validate it and use the response to populate local storage
      if (window.location.search.includes("token")) {
        // Ask server to verify and set cookie
        store.dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_13__["verifyTokenRequest"])({
          token: getUrlParameter("token")
        }));
      }

      if (!window.location.search.includes("token")) {
        // Not on the URL so check the localStorage
        if (localStorage.getItem("token")) {
          // Ask server to verify and set cookie
          store.dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_13__["verifyTokenRequest"])({
            token: localStorage.getItem("token")
          }));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          debate = _this$props.debate;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, pageProps));
    }
  }], [{
    key: "getInitialProps",
    value: async function getInitialProps(_ref) {
      var Component = _ref.Component,
          ctx = _ref.ctx,
          req = _ref.req;
      var pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      return {
        pageProps: pageProps
      };
    }
  }]);

  return Simpatico;
}(next_app__WEBPACK_IMPORTED_MODULE_5___default.a);

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_9___default()(makeStore)(Simpatico));

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
  isValidToken: false,
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
        isValidToken: false,
        token: action.token
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST_SUCCESS"]:
      // Parse out json and update the store
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
        id: null
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER_INFO_REQUEST_SUCCESS"]:
      return _objectSpread({}, state, {
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
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





var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  debate: _debate__WEBPACK_IMPORTED_MODULE_2__["default"],
  modules: _modules__WEBPACK_IMPORTED_MODULE_3__["default"],
  pages: _pages__WEBPACK_IMPORTED_MODULE_4__["default"]
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
    token: action.token
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





/* harmony default export */ __webpack_exports__["default"] = (function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_debate__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_modules__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_pages__WEBPACK_IMPORTED_MODULE_4__["default"])]);
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
//# sourceMappingURL=_app.js.map