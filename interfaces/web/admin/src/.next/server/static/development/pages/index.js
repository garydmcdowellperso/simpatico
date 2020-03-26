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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "../node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

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

/***/ "../node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _objectWithoutPropertiesLoose;

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

/***/ "../node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

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

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./assets/range-date-picker.css":
/*!**************************************!*\
  !*** ./assets/range-date-picker.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/shards-dashboards.1.1.0.min.css":
/*!************************************************!*\
  !*** ./assets/shards-dashboards.1.1.0.min.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Overview.js":
/*!********************************!*\
  !*** ./components/Overview.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/PageTitle */ "./components/common/PageTitle.js");
/* harmony import */ var _common_SmallStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/SmallStats */ "./components/common/SmallStats.js");
/* harmony import */ var _blog_UsersOverview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/UsersOverview */ "./components/blog/UsersOverview.js");
/* harmony import */ var _blog_UsersByDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/UsersByDevice */ "./components/blog/UsersByDevice.js");
/* harmony import */ var _blog_NewDraft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/NewDraft */ "./components/blog/NewDraft.js");
/* harmony import */ var _blog_Discussions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/Discussions */ "./components/blog/Discussions.js");
/* harmony import */ var _common_TopReferrals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/TopReferrals */ "./components/common/TopReferrals.js");












var Overview = function Overview(_ref) {
  var smallStats = _ref.smallStats;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "main-content-container px-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    noGutters: true,
    className: "page-header py-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_PageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Overview",
    subtitle: "Dashboard",
    className: "text-sm-left mb-3"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Row"], null, smallStats.map(function (stats, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Col"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      className: "col-lg mb-4",
      key: idx
    }, stats.attrs), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SmallStats__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "small-stats-".concat(idx),
      variation: "1",
      chartData: stats.datasets,
      chartLabels: stats.chartLabels,
      label: stats.label,
      value: stats.value,
      percentage: stats.percentage,
      increase: stats.increase,
      decrease: stats.decrease
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "8",
    md: "12",
    sm: "12",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_UsersOverview__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_UsersByDevice__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "4",
    md: "6",
    sm: "12",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_NewDraft__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "5",
    md: "12",
    sm: "12",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blog_Discussions__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "3",
    md: "12",
    sm: "12",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_TopReferrals__WEBPACK_IMPORTED_MODULE_10__["default"], null))));
};

Overview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
Overview.defaultProps = {
  smallStats: [{
    label: "Posts",
    value: "2,390",
    percentage: "4.7%",
    increase: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: {
      md: "6",
      sm: "6"
    },
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: "rgba(0, 184, 216, 0.1)",
      borderColor: "rgb(0, 184, 216)",
      data: [1, 2, 1, 3, 5, 4, 7]
    }]
  }, {
    label: "Pages",
    value: "182",
    percentage: "12.4",
    increase: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: {
      md: "6",
      sm: "6"
    },
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: "rgba(23,198,113,0.1)",
      borderColor: "rgb(23,198,113)",
      data: [1, 2, 3, 3, 3, 4, 4]
    }]
  }, {
    label: "Comments",
    value: "8,147",
    percentage: "3.8%",
    increase: false,
    decrease: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: {
      md: "4",
      sm: "6"
    },
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: "rgba(255,180,0,0.1)",
      borderColor: "rgb(255,180,0)",
      data: [2, 3, 3, 3, 4, 3, 3]
    }]
  }, {
    label: "New Customers",
    value: "29",
    percentage: "2.71%",
    increase: false,
    decrease: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: {
      md: "4",
      sm: "6"
    },
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: "rgba(255,65,105,0.1)",
      borderColor: "rgb(255,65,105)",
      data: [1, 7, 1, 3, 1, 4, 8]
    }]
  }, {
    label: "Subscribers",
    value: "17,281",
    percentage: "2.4%",
    increase: false,
    decrease: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: {
      md: "4",
      sm: "6"
    },
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: "rgb(0,123,255,0.1)",
      borderColor: "rgb(0,123,255)",
      data: [3, 2, 3, 2, 4, 5, 4]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./components/blog/Discussions.js":
/*!****************************************!*\
  !*** ./components/blog/Discussions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_2__);




var Discussions = function Discussions(_ref) {
  var title = _ref.title,
      discussions = _ref.discussions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    small: true,
    className: "blog-comments"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    className: "border-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "m-0"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "p-0"
  }, discussions.map(function (discussion, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: idx,
      className: "blog-comments__item d-flex p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blog-comments__avatar mr-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: discussion.author.image,
      alt: discussion.author.name
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blog-comments__content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blog-comments__meta text-mutes"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "text-secondary",
      href: discussion.author.url
    }, discussion.author.name), " ", "on", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "text-secondary",
      href: discussion.post.url
    }, discussion.post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-mutes"
    }, "- ", discussion.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "m-0 my-1 mb-2 text-muted"
    }, discussion.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blog-comments__actions"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
      size: "sm"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      theme: "white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-success"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "check")), " ", "Approve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      theme: "white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-danger"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "clear")), " ", "Reject"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      theme: "white"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-light"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "more_vert")), " ", "Edit")))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], {
    className: "border-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "text-center view-report"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    theme: "white",
    type: "submit"
  }, "View All Comments")))));
};

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The discussions dataset.
   */
  discussions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
Discussions.defaultProps = {
  title: "Discussions",
  discussions: [{
    id: 1,
    date: "3 days ago",
    author: {
      image: __webpack_require__(/*! ../../images/avatars/1.jpg */ "./images/avatars/1.jpg"),
      name: "John Doe",
      url: "#"
    },
    post: {
      title: "Hello World!",
      url: "#"
    },
    body: "Well, the way they make shows is, they make one show ..."
  }, {
    id: 2,
    date: "4 days ago",
    author: {
      image: __webpack_require__(/*! ../../images/avatars/2.jpg */ "./images/avatars/2.jpg"),
      name: "John Doe",
      url: "#"
    },
    post: {
      title: "Hello World!",
      url: "#"
    },
    body: "After the avalanche, it took us a week to climb out. Now..."
  }, {
    id: 3,
    date: "5 days ago",
    author: {
      image: __webpack_require__(/*! ../../images/avatars/3.jpg */ "./images/avatars/3.jpg"),
      name: "John Doe",
      url: "#"
    },
    post: {
      title: "Hello World!",
      url: "#"
    },
    body: "My money's in that office, right? If she start giving me..."
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Discussions);

/***/ }),

/***/ "./components/blog/NewDraft.js":
/*!*************************************!*\
  !*** ./components/blog/NewDraft.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_2__);




var NewDraft = function NewDraft(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    small: true,
    className: "h-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    className: "border-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "m-0"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "d-flex flex-column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "quick-post-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["FormInput"], {
    placeholder: "Brave New World"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["FormTextarea"], {
    placeholder: "Words can be like X-rays if you use them properly..."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: "mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    theme: "accent",
    type: "submit"
  }, "Create Draft")))));
};

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NewDraft.defaultProps = {
  title: "New Draft"
};
/* harmony default export */ __webpack_exports__["default"] = (NewDraft);

/***/ }),

/***/ "./components/blog/UsersByDevice.js":
/*!******************************************!*\
  !*** ./components/blog/UsersByDevice.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/chart */ "./utils/chart.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var UsersByDevice =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UsersByDevice, _React$Component);

  function UsersByDevice(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsersByDevice);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UsersByDevice).call(this, props));
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsersByDevice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chartConfig = {
        type: "pie",
        data: this.props.chartData,
        options: _objectSpread({}, {
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        }, {}, this.props.chartOptions)
      };
      new _utils_chart__WEBPACK_IMPORTED_MODULE_9__["default"](this.canvasRef.current, chartConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        small: true,
        className: "h-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        className: "border-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "m-0"
      }, title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        className: "d-flex py-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("canvas", {
        height: "220",
        ref: this.canvasRef,
        className: "blog-users-by-device m-auto"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["CardFooter"], {
        className: "border-top"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["FormSelect"], {
        size: "sm",
        value: "last-week",
        style: {
          maxWidth: "130px"
        },
        onChange: function onChange() {}
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "last-week"
      }, "Last Week"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "today"
      }, "Today"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "last-month"
      }, "Last Month"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "last-year"
      }, "Last Year"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "text-right view-report"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#"
      }, "View full report \u2192")))));
    }
  }]);

  return UsersByDevice;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

UsersByDevice.propTypes = {
  /**
   * The component's title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * The chart config object.
   */
  chartConfig: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * The Chart.js options.
   */
  chartOptions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * The chart data.
   */
  chartData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
UsersByDevice.defaultProps = {
  title: "Users by device",
  chartData: {
    datasets: [{
      hoverBorderColor: "#ffffff",
      data: [68.3, 24.2, 7.5],
      backgroundColor: ["rgba(0,123,255,0.9)", "rgba(0,123,255,0.5)", "rgba(0,123,255,0.3)"]
    }],
    labels: ["Desktop", "Tablet", "Mobile"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UsersByDevice);

/***/ }),

/***/ "./components/blog/UsersOverview.js":
/*!******************************************!*\
  !*** ./components/blog/UsersOverview.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_RangeDatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/RangeDatePicker */ "./components/common/RangeDatePicker.js");
/* harmony import */ var _utils_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/chart */ "./utils/chart.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var UsersOverview =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UsersOverview, _React$Component);

  function UsersOverview(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UsersOverview);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UsersOverview).call(this, props));
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UsersOverview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chartOptions = _objectSpread({}, {
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            gridLines: false,
            ticks: {
              callback: function callback(tick, index) {
                // Jump every 7 values on the X axis labels to avoid clutter.
                return index % 7 !== 0 ? "" : tick;
              }
            }
          }],
          yAxes: [{
            ticks: {
              suggestedMax: 45,
              callback: function callback(tick) {
                if (tick === 0) {
                  return tick;
                } // Format the amounts using Ks for thousands.


                return tick > 999 ? "".concat((tick / 1000).toFixed(1), "K") : tick;
              }
            }
          }]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      }, {}, this.props.chartOptions);

      var BlogUsersOverview = new _utils_chart__WEBPACK_IMPORTED_MODULE_10__["default"](this.canvasRef.current, {
        type: "LineWithLine",
        data: this.props.chartData,
        options: chartOptions
      }); // They can still be triggered on hover.

      var buoMeta = BlogUsersOverview.getDatasetMeta(0);
      buoMeta.data[0]._model.radius = 0;
      buoMeta.data[this.props.chartData.datasets[0].data.length - 1]._model.radius = 0; // Render the chart.

      BlogUsersOverview.render();
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        small: true,
        className: "h-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], {
        className: "border-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "m-0"
      }, title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        className: "pt-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "border-bottom py-2 bg-light"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: "6",
        className: "d-flex mb-2 mb-sm-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_RangeDatePicker__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Col"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        size: "sm",
        className: "d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
      }, "View Full Report \u2192"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("canvas", {
        height: "120",
        ref: this.canvasRef,
        style: {
          maxWidth: "100% !important"
        }
      })));
    }
  }]);

  return UsersOverview;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * The chart dataset.
   */
  chartData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * The Chart.js options.
   */
  chartOptions: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
UsersOverview.defaultProps = {
  title: "Users Overview",
  chartData: {
    labels: Array.from(new Array(30), function (_, i) {
      return i === 0 ? 1 : i;
    }),
    datasets: [{
      label: "Current Month",
      fill: "start",
      data: [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
      backgroundColor: "rgba(0,123,255,0.1)",
      borderColor: "rgba(0,123,255,1)",
      pointBackgroundColor: "#ffffff",
      pointHoverBackgroundColor: "rgb(0,123,255)",
      borderWidth: 1.5,
      pointRadius: 0,
      pointHoverRadius: 3
    }, {
      label: "Past Month",
      fill: "start",
      data: [380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380, 291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720, 780, 1200],
      backgroundColor: "rgba(255,65,105,0.1)",
      borderColor: "rgba(255,65,105,1)",
      pointBackgroundColor: "#ffffff",
      pointHoverBackgroundColor: "rgba(255,65,105,1)",
      borderDash: [3, 3],
      borderWidth: 1,
      pointRadius: 0,
      pointHoverRadius: 2,
      pointBorderColor: "rgba(255,65,105,1)"
    }]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UsersOverview);

/***/ }),

/***/ "./components/common/PageTitle.js":
/*!****************************************!*\
  !*** ./components/common/PageTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_5__);







var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      className = _ref.className,
      attrs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["title", "subtitle", "className"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, "text-center", "text-md-left", "mb-sm-0");
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_5__["Col"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    xs: "12",
    sm: "4",
    className: classes
  }, attrs), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "text-uppercase page-subtitle"
  }, subtitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "page-title"
  }, title));
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The page subtitle.
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./components/common/RangeDatePicker.js":
/*!**********************************************!*\
  !*** ./components/common/RangeDatePicker.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_range_date_picker_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/range-date-picker.css */ "./assets/range-date-picker.css");
/* harmony import */ var _assets_range_date_picker_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_range_date_picker_css__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var RangeDatePicker =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(RangeDatePicker, _React$Component);

  function RangeDatePicker(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RangeDatePicker);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RangeDatePicker).call(this, props));
    _this.state = {
      startDate: undefined,
      endDate: undefined
    };
    _this.handleStartDateChange = _this.handleStartDateChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.handleEndDateChange = _this.handleEndDateChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RangeDatePicker, [{
    key: "handleStartDateChange",
    value: function handleStartDateChange(value) {
      this.setState(_objectSpread({}, this.state, {}, {
        startDate: new Date(value)
      }));
    }
  }, {
    key: "handleEndDateChange",
    value: function handleEndDateChange(value) {
      this.setState(_objectSpread({}, this.state, {}, {
        endDate: new Date(value)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, "d-flex", "my-auto", "date-range");
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_9__["DatePicker"], {
        size: "sm",
        selected: this.state.startDate,
        onChange: this.handleStartDateChange,
        placeholderText: "Start Date",
        dropdownMode: "select",
        className: "text-center"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_9__["DatePicker"], {
        size: "sm",
        selected: this.state.endDate,
        onChange: this.handleEndDateChange,
        placeholderText: "End Date",
        dropdownMode: "select",
        className: "text-center"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_9__["InputGroupAddon"], {
        type: "append"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_9__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE916"))));
    }
  }]);

  return RangeDatePicker;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RangeDatePicker);

/***/ }),

/***/ "./components/common/SmallStats.js":
/*!*****************************************!*\
  !*** ./components/common/SmallStats.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/chart */ "./utils/chart.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SmallStats =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SmallStats, _React$Component);

  function SmallStats(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SmallStats);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SmallStats).call(this, props));
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SmallStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var chartOptions = _objectSpread({}, {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          custom: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0.33
          }
        },
        scales: {
          xAxes: [{
            gridLines: false,
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
              isplay: false,
              // Avoid getting the graph line cut of at the top of the canvas.
              // Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
              suggestedMax: Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.props.chartData[0].data)) + 1
            }
          }]
        }
      }, {}, this.props.chartOptions);

      var chartConfig = _objectSpread({}, {
        type: "line",
        data: _objectSpread({}, {
          labels: this.props.chartLabels
        }, {}, {
          datasets: this.props.chartData
        }),
        options: chartOptions
      }, {}, this.props.chartConfig);

      new _utils_chart__WEBPACK_IMPORTED_MODULE_12__["default"](this.canvasRef.current, chartConfig);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          variation = _this$props.variation,
          label = _this$props.label,
          value = _this$props.value,
          percentage = _this$props.percentage,
          increase = _this$props.increase;
      var cardClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("stats-small", variation && "stats-small--".concat(variation));
      var cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()(variation === "1" ? "p-0 d-flex" : "px-0 pb-0");
      var innerWrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("d-flex", variation === "1" ? "flex-column m-auto" : "px-3");
      var dataFieldClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("stats-small__data", variation === "1" && "text-center");
      var labelClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("stats-small__label", "text-uppercase", variation !== "1" && "mb-1");
      var valueClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("stats-small__value", "count", variation === "1" ? "my-3" : "m-0");
      var innerDataFieldClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("stats-small__data", variation !== "1" && "text-right align-items-center");
      var percentageClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()("stats-small__percentage", "stats-small__percentage--".concat(increase ? "increase" : "decrease"));
      var canvasHeight = variation === "1" ? 120 : 60;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        small: true,
        className: cardClasses
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_11__["CardBody"], {
        className: cardBodyClasses
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: innerWrapperClasses
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: dataFieldClasses
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: labelClasses
      }, label), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
        className: valueClasses
      }, value)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: innerDataFieldClasses
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: percentageClasses
      }, percentage))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        height: canvasHeight,
        ref: this.canvasRef,
        className: "stats-small-".concat(shortid__WEBPACK_IMPORTED_MODULE_10___default()())
      })));
    }
  }]);

  return SmallStats;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

SmallStats.propTypes = {
  /**
   * The Small Stats variation.
   */
  variation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /**
   * The label.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

  /**
   * The value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),

  /**
   * The percentage number or string.
   */
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),

  /**
   * Whether is a value increase, or not.
   */
  increase: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  /**
   * The Chart.js configuration object.
   */
  chartConfig: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /**
   * The Chart.js options object.
   */
  chartOptions: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /**
   * The chart data.
   */
  chartData: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,

  /**
   * The chart labels.
   */
  chartLabels: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array
};
SmallStats.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  label: "Label",
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: []
};
/* harmony default export */ __webpack_exports__["default"] = (SmallStats);

/***/ }),

/***/ "./components/common/TopReferrals.js":
/*!*******************************************!*\
  !*** ./components/common/TopReferrals.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_2__);




var TopReferrals = function TopReferrals(_ref) {
  var title = _ref.title,
      referralData = _ref.referralData;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    small: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    className: "border-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "m-0"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-handle"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    small: true,
    flush: true,
    className: "list-group-small"
  }, referralData.map(function (item, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["ListGroupItem"], {
      key: idx,
      className: "d-flex px-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-semibold text-fiord-blue"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ml-auto text-right text-semibold text-reagent-gray"
    }, item.value));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], {
    className: "border-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["FormSelect"], {
    size: "sm",
    value: "last-week",
    style: {
      maxWidth: "130px"
    },
    onChange: function onChange() {}
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "last-week"
  }, "Last Week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "today"
  }, "Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "last-month"
  }, "Last Month"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "last-year"
  }, "Last Year"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "text-right view-report"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "Full report \u2192")))));
};

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The referral data.
   */
  referralData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
TopReferrals.defaultProps = {
  title: "Top Referrals",
  referralData: [{
    title: "GitHub",
    value: "19,291"
  }, {
    title: "Stack Overflow",
    value: "11,201"
  }, {
    title: "Hacker News",
    value: "9,291"
  }, {
    title: "Reddit",
    value: "8,281"
  }, {
    title: "The Next Web",
    value: "7,128"
  }, {
    title: "Tech Crunch",
    value: "6,218"
  }, {
    title: "YouTube",
    value: "1,218"
  }, {
    title: "Adobe",
    value: "1,171"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (TopReferrals);

/***/ }),

/***/ "./components/layout/MainFooter.js":
/*!*****************************************!*\
  !*** ./components/layout/MainFooter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var MainFooter = function MainFooter(_ref) {
  var contained = _ref.contained,
      menuItems = _ref.menuItems,
      copyright = _ref.copyright;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "main-footer d-flex p-2 px-3 bg-white border-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: contained
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, menuItems.map(function (item, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      key: item.title
    }, item.title));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "copyright ml-auto my-auto mr-2"
  }, copyright))));
};

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The menu items array.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * The copyright info.
   */
  copyright: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2020 Simpatico",
  menuItems: [{
    title: "Home",
    to: "#"
  }, {
    title: "Services",
    to: "#"
  }, {
    title: "About",
    to: "#"
  }, {
    title: "Products",
    to: "#"
  }, {
    title: "Blog",
    to: "#"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (MainFooter);

/***/ }),

/***/ "./components/layout/MainNavbar/MainNavbar.js":
/*!****************************************************!*\
  !*** ./components/layout/MainNavbar/MainNavbar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NavbarSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavbarSearch */ "./components/layout/MainNavbar/NavbarSearch.js");
/* harmony import */ var _NavbarNav_NavbarNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarNav/NavbarNav */ "./components/layout/MainNavbar/NavbarNav/NavbarNav.js");
/* harmony import */ var _NavbarToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarToggle */ "./components/layout/MainNavbar/NavbarToggle.js");








var MainNavbar = function MainNavbar(_ref) {
  var layout = _ref.layout,
      stickyTop = _ref.stickyTop;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("main-navbar", "bg-white", stickyTop && "sticky-top");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    type: "light",
    className: "align-items-stretch flex-md-nowrap p-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarSearch__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarNav_NavbarNav__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarToggle__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
MainNavbar.defaultProps = {
  stickyTop: true
};
/* harmony default export */ __webpack_exports__["default"] = (MainNavbar);

/***/ }),

/***/ "./components/layout/MainNavbar/NavbarNav/NavbarNav.js":
/*!*************************************************************!*\
  !*** ./components/layout/MainNavbar/NavbarNav/NavbarNav.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ "./components/layout/MainNavbar/NavbarNav/Notifications.js");
/* harmony import */ var _UserActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserActions */ "./components/layout/MainNavbar/NavbarNav/UserActions.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    navbar: true,
    className: "border-left flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notifications__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserActions__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

/***/ }),

/***/ "./components/layout/MainNavbar/NavbarNav/Notifications.js":
/*!*****************************************************************!*\
  !*** ./components/layout/MainNavbar/NavbarNav/Notifications.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notifications; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_7__);









var Notifications =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Notifications, _React$Component);

  function Notifications(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Notifications);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Notifications).call(this, props));
    _this.state = {
      visible: false
    };
    _this.toggleNotifications = _this.toggleNotifications.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Notifications, [{
    key: "toggleNotifications",
    value: function toggleNotifications() {
      this.setState({
        visible: !this.state.visible
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        className: "border-right dropdown notifications"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "nav-link-icon text-center",
        onClick: this.toggleNotifications
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "nav-link-icon__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE7F4"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
        pill: true,
        theme: "danger"
      }, "2"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
        open: this.state.visible,
        className: "dropdown-menu dropdown-menu-small"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "notification__icon-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "notification__icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE6E1"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "notification__content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "notification__category"
      }, "Analytics"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Your website\u2019s active users count increased by", " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success text-semibold"
      }, "28%"), " in the last week. Great job!"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "notification__icon-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "notification__icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE8D1"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "notification__content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "notification__category"
      }, "Sales"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Last week your store\u2019s sales count decreased by", " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger text-semibold"
      }, "5.52%"), ". It could have been worse!"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        className: "notification__all text-center"
      }, "View all Notifications")));
    }
  }]);

  return Notifications;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/layout/MainNavbar/NavbarNav/UserActions.js":
/*!***************************************************************!*\
  !*** ./components/layout/MainNavbar/NavbarNav/UserActions.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserActions; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_7__);









var UserActions =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UserActions, _React$Component);

  function UserActions(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserActions);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UserActions).call(this, props));
    _this.state = {
      visible: false
    };
    _this.toggleUserActions = _this.toggleUserActions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UserActions, [{
    key: "toggleUserActions",
    value: function toggleUserActions() {
      this.setState({
        visible: !this.state.visible
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        tag: shards_react__WEBPACK_IMPORTED_MODULE_7__["Dropdown"],
        caret: true,
        toggle: this.toggleUserActions
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        caret: true,
        tag: shards_react__WEBPACK_IMPORTED_MODULE_7__["NavLink"],
        className: "text-nowrap px-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "user-avatar rounded-circle mr-2",
        src: __webpack_require__(/*! ./../../../../images/avatars/0.jpg */ "./images/avatars/0.jpg"),
        alt: "User Avatar"
      }), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "d-none d-md-inline-block"
      }, "Sierra Brooks")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
        tag: shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"],
        right: true,
        small: true,
        open: this.state.visible
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        to: "user-profile"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE7FD"), " Profile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        to: "edit-user-profile"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE8B8"), " Edit Profile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        to: "file-manager-list"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE2C7"), " Files"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        to: "transaction-history"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE896"), " Transactions"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        divider: true
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        to: "/",
        className: "text-danger"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons text-danger"
      }, "\uE879"), " Logout")));
    }
  }]);

  return UserActions;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/layout/MainNavbar/NavbarSearch.js":
/*!******************************************************!*\
  !*** ./components/layout/MainNavbar/NavbarSearch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "main-navbar__search w-100 d-none d-md-flex d-lg-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    seamless: true,
    className: "ml-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    type: "prepend"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "search"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
    className: "navbar-search",
    placeholder: "Search for something..."
  })));
});

/***/ }),

/***/ "./components/layout/MainNavbar/NavbarToggle.js":
/*!******************************************************!*\
  !*** ./components/layout/MainNavbar/NavbarToggle.js ***!
  \******************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _flux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../flux */ "./flux/index.js");









var NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(NavbarToggle, _React$Component);

  function NavbarToggle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NavbarToggle);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NavbarToggle).call(this, props));
    _this.handleClick = _this.handleClick.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NavbarToggle, [{
    key: "handleClick",
    value: function handleClick() {
      _flux__WEBPACK_IMPORTED_MODULE_7__["Dispatcher"].dispatch({
        actionType: _flux__WEBPACK_IMPORTED_MODULE_7__["Constants"].TOGGLE_SIDEBAR
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "nav"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        onClick: this.handleClick,
        className: "nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE5D2")));
    }
  }]);

  return NavbarToggle;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavbarToggle);

/***/ }),

/***/ "./components/layout/MainSidebar/MainSidebar.js":
/*!******************************************************!*\
  !*** ./components/layout/MainSidebar/MainSidebar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SidebarMainNavbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarMainNavbar */ "./components/layout/MainSidebar/SidebarMainNavbar.js");
/* harmony import */ var _SidebarNavItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarNavItems */ "./components/layout/MainSidebar/SidebarNavItems.js");
/* harmony import */ var _flux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../flux */ "./flux/index.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var MainSidebar =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(MainSidebar, _React$Component);

  function MainSidebar(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MainSidebar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MainSidebar).call(this, props));
    _this.state = {
      menuVisible: false,
      sidebarNavItems: _flux__WEBPACK_IMPORTED_MODULE_13__["Store"].getSidebarItems()
    };
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MainSidebar, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _flux__WEBPACK_IMPORTED_MODULE_13__["Store"].addChangeListener(this.onChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _flux__WEBPACK_IMPORTED_MODULE_13__["Store"].removeChangeListener(this.onChange);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.setState(_objectSpread({}, this.state, {
        menuVisible: _flux__WEBPACK_IMPORTED_MODULE_13__["Store"].getMenuState(),
        sidebarNavItems: _flux__WEBPACK_IMPORTED_MODULE_13__["Store"].getSidebarItems()
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classnames__WEBPACK_IMPORTED_MODULE_9___default()("main-sidebar", "px-0", "col-12", this.state.menuVisible && "open");
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        tag: "aside",
        className: classes,
        lg: {
          size: 2
        },
        md: {
          size: 3
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SidebarMainNavbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hideLogoText: this.props.hideLogoText
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SidebarNavItems__WEBPACK_IMPORTED_MODULE_12__["default"], null));
    }
  }]);

  return MainSidebar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
MainSidebar.defaultProps = {
  hideLogoText: false
};
/* harmony default export */ __webpack_exports__["default"] = (MainSidebar);

/***/ }),

/***/ "./components/layout/MainSidebar/SidebarMainNavbar.js":
/*!************************************************************!*\
  !*** ./components/layout/MainSidebar/SidebarMainNavbar.js ***!
  \************************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _flux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../flux */ "./flux/index.js");











var SidebarMainNavbar =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SidebarMainNavbar, _React$Component);

  function SidebarMainNavbar(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SidebarMainNavbar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SidebarMainNavbar).call(this, props));
    _this.handleToggleSidebar = _this.handleToggleSidebar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SidebarMainNavbar, [{
    key: "handleToggleSidebar",
    value: function handleToggleSidebar() {
      _flux__WEBPACK_IMPORTED_MODULE_9__["Dispatcher"].dispatch({
        actionType: _flux__WEBPACK_IMPORTED_MODULE_9__["Constants"].TOGGLE_SIDEBAR
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hideLogoText = this.props.hideLogoText;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-navbar"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        className: "align-items-stretch bg-white flex-md-nowrap border-bottom p-0",
        type: "light"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavbarBrand"], {
        className: "w-100 mr-0",
        href: "#",
        style: {
          lineHeight: "25px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-table m-auto"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        id: "main-logo",
        className: "d-inline-block align-top mr-1",
        style: {
          maxWidth: "25px"
        },
        src: __webpack_require__(/*! ../../../images/intelligence-collective1.png */ "./images/intelligence-collective1.png"),
        alt: "Simpatico Dashboard"
      }), !hideLogoText && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "d-none d-md-inline ml-1"
      }, "Simpatico Dashboard"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "toggle-sidebar d-sm-inline d-md-none d-lg-none",
        onClick: this.handleToggleSidebar
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons"
      }, "\uE5C4"))));
    }
  }]);

  return SidebarMainNavbar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarMainNavbar);

/***/ }),

/***/ "./components/layout/MainSidebar/SidebarNavItem.js":
/*!*********************************************************!*\
  !*** ./components/layout/MainSidebar/SidebarNavItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var SidebarNavItem = function SidebarNavItem(_ref) {
  var item = _ref.item;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-inline-block item-icon-wrapper",
    dangerouslySetInnerHTML: {
      __html: item.htmlBefore
    }
  }), item.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.title))));
};

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarNavItem);

/***/ }),

/***/ "./components/layout/MainSidebar/SidebarNavItems.js":
/*!**********************************************************!*\
  !*** ./components/layout/MainSidebar/SidebarNavItems.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SidebarNavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarNavItem */ "./components/layout/MainSidebar/SidebarNavItem.js");
/* harmony import */ var _flux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../flux */ "./flux/index.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var SidebarNavItems =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SidebarNavItems, _React$Component);

  function SidebarNavItems(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SidebarNavItems);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SidebarNavItems).call(this, props));
    _this.state = {
      navItems: _flux__WEBPACK_IMPORTED_MODULE_10__["Store"].getSidebarItems()
    };
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SidebarNavItems, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _flux__WEBPACK_IMPORTED_MODULE_10__["Store"].addChangeListener(this.onChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _flux__WEBPACK_IMPORTED_MODULE_10__["Store"].removeChangeListener(this.onChange);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.setState(_objectSpread({}, this.state, {
        navItems: _flux__WEBPACK_IMPORTED_MODULE_10__["Store"].getSidebarItems()
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var items = this.state.navItems;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "nav--no-borders flex-column"
      }, items.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SidebarNavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: idx,
          item: item
        });
      })));
    }
  }]);

  return SidebarNavItems;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SidebarNavItems);

/***/ }),

/***/ "./data/sidebar-nav-items.js":
/*!***********************************!*\
  !*** ./data/sidebar-nav-items.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return [{
    title: "Overview",
    to: "/blog-overview",
    htmlBefore: '<i class="material-icons">home</i>',
    htmlAfter: ""
  }, {
    title: "Users",
    htmlBefore: '<i class="material-icons">emoji_people</i>',
    to: "/blog-posts"
  }, {
    title: "Insights",
    htmlBefore: '<i class="material-icons">emoji_objects</i>',
    to: "/add-new-post"
  }, {
    title: "Configure",
    htmlBefore: '<i class="material-icons">build</i>',
    to: "/components-overview"
  }, {
    title: "Exports",
    htmlBefore: '<i class="material-icons">import_export</i>',
    to: "/tables"
  }];
});

/***/ }),

/***/ "./flux/constants.js":
/*!***************************!*\
  !*** ./flux/constants.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  CHANGE: "CHANGE",
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
});

/***/ }),

/***/ "./flux/dispatcher.js":
/*!****************************!*\
  !*** ./flux/dispatcher.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flux */ "flux");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new flux__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]());

/***/ }),

/***/ "./flux/index.js":
/*!***********************!*\
  !*** ./flux/index.js ***!
  \***********************/
/*! exports provided: Constants, Dispatcher, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./flux/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispatcher */ "./flux/dispatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return _dispatcher__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./flux/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./flux/store.js":
/*!***********************!*\
  !*** ./flux/store.js ***!
  \***********************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dispatcher */ "./flux/dispatcher.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./flux/constants.js");
/* harmony import */ var _data_sidebar_nav_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/sidebar-nav-items */ "./data/sidebar-nav-items.js");










var _store = {
  menuVisible: false,
  navItems: Object(_data_sidebar_nav_items__WEBPACK_IMPORTED_MODULE_9__["default"])()
};

var Store =
/*#__PURE__*/
function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Store, _EventEmitter);

  function Store() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Store);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Store).call(this));
    _this.registerToActions = _this.registerToActions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.toggleSidebar = _this.toggleSidebar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _dispatcher__WEBPACK_IMPORTED_MODULE_7__["default"].register(_this.registerToActions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Store, [{
    key: "registerToActions",
    value: function registerToActions(_ref) {
      var actionType = _ref.actionType,
          payload = _ref.payload;

      switch (actionType) {
        case _constants__WEBPACK_IMPORTED_MODULE_8__["default"].TOGGLE_SIDEBAR:
          this.toggleSidebar();
          break;

        default:
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      _store.menuVisible = !_store.menuVisible;
      this.emit(_constants__WEBPACK_IMPORTED_MODULE_8__["default"].CHANGE);
    }
  }, {
    key: "getMenuState",
    value: function getMenuState() {
      return _store.menuVisible;
    }
  }, {
    key: "getSidebarItems",
    value: function getSidebarItems() {
      return _store.navItems;
    }
  }, {
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.on(_constants__WEBPACK_IMPORTED_MODULE_8__["default"].CHANGE, callback);
    }
  }, {
    key: "removeChangeListener",
    value: function removeChangeListener(callback) {
      this.removeListener(_constants__WEBPACK_IMPORTED_MODULE_8__["default"].CHANGE, callback);
    }
  }]);

  return Store;
}(events__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]);

/* harmony default export */ __webpack_exports__["default"] = (new Store());

/***/ }),

/***/ "./images/avatars/0.jpg":
/*!******************************!*\
  !*** ./images/avatars/0.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/0-73476783ca0f7583198978de7073815b.jpg";

/***/ }),

/***/ "./images/avatars/1.jpg":
/*!******************************!*\
  !*** ./images/avatars/1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/avatars/2.jpg":
/*!******************************!*\
  !*** ./images/avatars/2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/avatars/3.jpg":
/*!******************************!*\
  !*** ./images/avatars/3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/intelligence-collective1.png":
/*!*********************************************!*\
  !*** ./images/intelligence-collective1.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/intelligence-collective1-7a646d6b83c2efdd0aa7a8a904fa5783.png";

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_MainNavbar_MainNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/MainNavbar/MainNavbar */ "./components/layout/MainNavbar/MainNavbar.js");
/* harmony import */ var _components_layout_MainSidebar_MainSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/MainSidebar/MainSidebar */ "./components/layout/MainSidebar/MainSidebar.js");
/* harmony import */ var _components_layout_MainFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/MainFooter */ "./components/layout/MainFooter.js");
/* harmony import */ var _components_Overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Overview */ "./components/Overview.js");
/* harmony import */ var _assets_shards_dashboards_1_1_0_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/shards-dashboards.1.1.0.min.css */ "./assets/shards-dashboards.1.1.0.min.css");
/* harmony import */ var _assets_shards_dashboards_1_1_0_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_shards_dashboards_1_1_0_min_css__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var noNavbar = _ref.noNavbar,
      noFooter = _ref.noFooter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "My styled page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css",
    rel: "stylesheet"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_MainSidebar_MainSidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shards_react__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "main-content p-0",
    lg: {
      size: 10,
      offset: 2
    },
    md: {
      size: 9,
      offset: 3
    },
    sm: "12",
    tag: "main"
  }, !noNavbar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_MainNavbar_MainNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Overview__WEBPACK_IMPORTED_MODULE_6__["default"], null), !noFooter && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_MainFooter__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
});

/***/ }),

/***/ "./utils/chart.js":
/*!************************!*\
  !*** ./utils/chart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.LineWithLine = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.line;
chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.LineWithLine = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.line.extend({
  draw: function draw(ease) {
    chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      var activePoint = this.chart.tooltip._active[0];
      var ctx = this.chart.ctx;

      var _activePoint$tooltipP = activePoint.tooltipPosition(),
          x = _activePoint$tooltipP.x;

      var topY = this.chart.scales['y-axis-0'].top;
      var bottomY = this.chart.scales['y-axis-0'].bottom; // Draw the line

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#ddd';
      ctx.stroke();
      ctx.restore();
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (chart_js__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gary/dev/simpatico/interfaces/web/admin/src/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "flux":
/*!***********************!*\
  !*** external "flux" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flux");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "shards-react":
/*!*******************************!*\
  !*** external "shards-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shards-react");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

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
//# sourceMappingURL=index.js.map