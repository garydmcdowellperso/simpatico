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
    host: process.env.API_HOST || "http://localhost:5000"
  },
  server: {
    host: process.env.SERVER_HOST || "http://localhost",
    port: parseInt(process.env.PORT, 10) || 1007
  },
  i18n: {
    languages: process.env.LANGUAGES || ["en", "es", "fr"],
    defaultLanguage: process.env.DEFAULT_LANGUAGE || "fr"
  }
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

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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
/*! exports provided: LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE, CALLBACK_REQUEST, CALLBACK_REQUEST_SUCCESS, CALLBACK_REQUEST_FAILURE, FORGOTTEN_PASSWORD_REQUEST, FORGOTTEN_PASSWORD_SUCCESS, FORGOTTEN_PASSWORD_FAILURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_FAILURE, FORGOTTEN_PASSWORD_RESET_SENT, forgottenPasswordReset, loginRequest, loginRequestSuccess, loginRequestFailure, createAccountRequest, createAccountSuccess, createAccountFailure, callBackRequest, callBackRequestSuccess, callBackRequestFailure, forgottenPasswordRequest, forgottenPasswordFailure, forgottenPasswordSuccess, changePasswordRequest, changePasswordFailure, changePasswordSuccess, changePasswordVerifyTokenRequest, changePasswordVerifyTokenFailure, changePasswordVerifyTokenSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST_SUCCESS", function() { return LOGIN_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST_FAILURE", function() { return LOGIN_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ACCOUNT_REQUEST", function() { return CREATE_ACCOUNT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ACCOUNT_SUCCESS", function() { return CREATE_ACCOUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ACCOUNT_FAILURE", function() { return CREATE_ACCOUNT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLBACK_REQUEST", function() { return CALLBACK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLBACK_REQUEST_SUCCESS", function() { return CALLBACK_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLBACK_REQUEST_FAILURE", function() { return CALLBACK_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGOTTEN_PASSWORD_REQUEST", function() { return FORGOTTEN_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGOTTEN_PASSWORD_SUCCESS", function() { return FORGOTTEN_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGOTTEN_PASSWORD_FAILURE", function() { return FORGOTTEN_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_REQUEST", function() { return CHANGE_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_SUCCESS", function() { return CHANGE_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_FAILURE", function() { return CHANGE_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_REQUEST", function() { return VERIFY_TOKEN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_SUCCESS", function() { return VERIFY_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_TOKEN_FAILURE", function() { return VERIFY_TOKEN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGOTTEN_PASSWORD_RESET_SENT", function() { return FORGOTTEN_PASSWORD_RESET_SENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgottenPasswordReset", function() { return forgottenPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestSuccess", function() { return loginRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestFailure", function() { return loginRequestFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccountRequest", function() { return createAccountRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccountSuccess", function() { return createAccountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccountFailure", function() { return createAccountFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callBackRequest", function() { return callBackRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callBackRequestSuccess", function() { return callBackRequestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callBackRequestFailure", function() { return callBackRequestFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgottenPasswordRequest", function() { return forgottenPasswordRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgottenPasswordFailure", function() { return forgottenPasswordFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgottenPasswordSuccess", function() { return forgottenPasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordRequest", function() { return changePasswordRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordFailure", function() { return changePasswordFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordSuccess", function() { return changePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordVerifyTokenRequest", function() { return changePasswordVerifyTokenRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordVerifyTokenFailure", function() { return changePasswordVerifyTokenFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordVerifyTokenSuccess", function() { return changePasswordVerifyTokenSuccess; });
var LOGIN_REQUEST = "LOGIN_REQUEST";
var LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
var LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";
var CREATE_ACCOUNT_REQUEST = "CREATE_ACCOUNT_REQUEST";
var CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
var CREATE_ACCOUNT_FAILURE = "CREATE_ACCOUNT_FAILURE";
var CALLBACK_REQUEST = "CALLBACK_REQUEST";
var CALLBACK_REQUEST_SUCCESS = "CALLBACK_REQUEST_SUCCESS";
var CALLBACK_REQUEST_FAILURE = "CALLBACK_REQUEST_FAILURE";
var FORGOTTEN_PASSWORD_REQUEST = "FORGOTTEN_PASSWORD_REQUEST";
var FORGOTTEN_PASSWORD_SUCCESS = "FORGOTTEN_PASSWORD_SUCCESS";
var FORGOTTEN_PASSWORD_FAILURE = "FORGOTTEN_PASSWORD_FAILURE";
var CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
var CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
var CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";
var VERIFY_TOKEN_REQUEST = "VERIFY_TOKEN_REQUEST";
var VERIFY_TOKEN_SUCCESS = "VERIFY_TOKEN_SUCCESS";
var VERIFY_TOKEN_FAILURE = "VERIFY_TOKEN_FAILURE";
var FORGOTTEN_PASSWORD_RESET_SENT = "FORGOTTEN_PASSWORD_RESET_SENT";
function forgottenPasswordReset() {
  return {
    type: FORGOTTEN_PASSWORD_RESET_SENT
  };
}
function loginRequest(_ref) {
  var email = _ref.email,
      password = _ref.password,
      debateName = _ref.debateName;
  return {
    type: LOGIN_REQUEST,
    email: email,
    password: password,
    debateName: debateName
  };
}
function loginRequestSuccess(response) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    token: response.token
  };
}
function loginRequestFailure(error) {
  return {
    type: LOGIN_REQUEST_FAILURE,
    error: error
  };
}
function createAccountRequest(firstname, lastname, email, password, debateId, accountId) {
  return {
    type: CREATE_ACCOUNT_REQUEST,
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    debateId: debateId,
    accountId: accountId
  };
}
function createAccountSuccess() {
  return {
    type: CREATE_ACCOUNT_SUCCESS
  };
}
function createAccountFailure(error) {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    error: error
  };
}
function callBackRequest(params) {
  return {
    type: CALLBACK_REQUEST,
    params: params
  };
}
function callBackRequestSuccess(token) {
  return {
    type: CALLBACK_REQUEST_SUCCESS,
    token: token
  };
}
function callBackRequestFailure(error) {
  return {
    type: CALLBACK_REQUEST_FAILURE,
    error: error
  };
}
function forgottenPasswordRequest(_ref2) {
  var email = _ref2.email,
      debateName = _ref2.debateName;
  return {
    type: FORGOTTEN_PASSWORD_REQUEST,
    email: email,
    debateName: debateName
  };
}
function forgottenPasswordFailure(error) {
  return {
    type: FORGOTTEN_PASSWORD_FAILURE,
    error: error
  };
}
function forgottenPasswordSuccess() {
  return {
    type: FORGOTTEN_PASSWORD_SUCCESS
  };
}
function changePasswordRequest(_ref3) {
  var email = _ref3.email,
      password = _ref3.password,
      debateName = _ref3.debateName,
      token = _ref3.token;
  return {
    type: CHANGE_PASSWORD_REQUEST,
    email: email,
    password: password,
    debateName: debateName,
    token: token
  };
}
function changePasswordFailure(error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    error: error
  };
}
function changePasswordSuccess(response) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    token: response.token
  };
}
function changePasswordVerifyTokenRequest(email, token) {
  return {
    type: VERIFY_TOKEN_REQUEST,
    email: email,
    token: token
  };
}
function changePasswordVerifyTokenFailure(error) {
  return {
    type: VERIFY_TOKEN_FAILURE,
    error: error
  };
}
function changePasswordVerifyTokenSuccess(response) {
  return {
    type: VERIFY_TOKEN_SUCCESS,
    isValidToken: response.isValidToken
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_15__["default"].withTranslation;
var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_11___default()();

var makeStore = function makeStore(initialState, options) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_14__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"])(sagaMiddleware));
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_13__["default"]);
  return store;
};

var Simpatico = /*#__PURE__*/function (_App) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Simpatico, _App);

  var _super = _createSuper(Simpatico);

  function Simpatico() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Simpatico);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Simpatico, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          debate = _this$props.debate,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
        store: store
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, pageProps, debate)));
    }
  }], [{
    key: "getInitialProps",
    value: async function getInitialProps(_ref) {
      var Component = _ref.Component,
          ctx = _ref.ctx;
      var pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      if (ctx.req) {
        var host = ctx.req.get('host');
        var res = await fetch("https://e8e5120fec0b.ngrok.io/api/v1/fetchDebate?name=".concat(host));
        var debate = await res.json();
        return {
          pageProps: pageProps,
          debate: debate
        };
      }
    }
  }]);

  return Simpatico;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a);

var appWithTranslation = _i18n__WEBPACK_IMPORTED_MODULE_15__["default"].appWithTranslation;
/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_12___default()(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default()(makeStore), appWithTranslation, withTranslation(["common"]))(Simpatico));

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
  isValidToken: null,
  sent: false,
  sending: null,
  token: "",
  processing: false,
  error: "",
  accountCreated: false
};
function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FORGOTTEN_PASSWORD_RESET_SENT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: null,
        sent: false
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PASSWORD_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: true
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PASSWORD_SUCCESS"]:
      console.log('action', action);
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        token: action.token
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PASSWORD_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        error: action.error
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: true
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        isValidToken: action.isValidToken
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        error: action.error
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FORGOTTEN_PASSWORD_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: true
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FORGOTTEN_PASSWORD_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        sent: true
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["FORGOTTEN_PASSWORD_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sending: false,
        sent: false,
        error: action.error
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        token: "",
        error: ""
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        token: action.token,
        error: ""
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        token: "",
        error: action.error
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["CREATE_ACCOUNT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: true,
        accountCreated: false,
        error: ""
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["CREATE_ACCOUNT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        accountCreated: true,
        error: ""
      });

    case _actions_auth__WEBPACK_IMPORTED_MODULE_1__["CREATE_ACCOUNT_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        processing: false,
        accountCreated: false,
        error: action.error
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


var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

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




function* verifyToken(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["get"])("v1/verifyChangePasswordToken?email=".concat(action.email, "&token=").concat(action.token)).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["changePasswordVerifyTokenSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["changePasswordVerifyTokenFailure"])(err));
  });
  yield r;
}

function* forgottenPassword(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/forgottenPassword", JSON.stringify({
    email: action.email,
    debateName: action.debateName
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["forgottenPasswordSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["forgottenPasswordFailure"])(err));
  });
  yield r;
}

function* loginRequest(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/loginRequest", JSON.stringify({
    email: action.email,
    password: action.password,
    debateName: action.debateName
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["loginRequestSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["loginRequestFailure"])(err));
  });
  yield r;
}

function* createAccount(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/createUser", JSON.stringify({
    firstname: action.firstname,
    lastname: action.lastname,
    email: action.email,
    password: action.password,
    debateId: action.debateId,
    accountId: action.accountId,
    role: 'participant'
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["createAccountSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["createAccountFailure"])(err));
  });
  yield r;
}

function* changePassword(action) {
  var r = yield Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["post"])("v1/changePassword", JSON.stringify({
    email: action.email,
    password: action.password,
    debateName: action.debateName,
    token: action.token
  })).then(function (json) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["changePasswordSuccess"])(json));
  })["catch"](function (err) {
    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["changePasswordFailure"])(err));
  });
  yield r;
}

function* authSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"], loginRequest);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["CREATE_ACCOUNT_REQUEST"], createAccount);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["FORGOTTEN_PASSWORD_REQUEST"], forgottenPassword);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["VERIFY_TOKEN_REQUEST"], verifyToken);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PASSWORD_REQUEST"], changePassword);
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


/* harmony default export */ __webpack_exports__["default"] = (function* () {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_1__["default"])]);
});

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
//# sourceMappingURL=_app.js.map