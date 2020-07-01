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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

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

/***/ "../node_modules/next/dist/pages/_document.js":
/*!****************************************************!*\
  !*** ../node_modules/next/dist/pages/_document.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "../node_modules/next/dist/server/htmlescape.js":
/*!******************************************************!*\
  !*** ../node_modules/next/dist/server/htmlescape.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "../node_modules/next/document.js":
/*!****************************************!*\
  !*** ../node_modules/next/document.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "../node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.jsx":
/*!*****************************!*\
  !*** ./pages/_document.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/document */ "../node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var MyDocument = /*#__PURE__*/function (_Document) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MyDocument, _Document);

  var _super = _createSuper(MyDocument);

  function MyDocument() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, MyDocument);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(MyDocument, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("html", {
        lang: "en"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_8__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_8__["Main"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_8__["NextScript"], null)));
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_8___default.a);



MyDocument.getInitialProps = async function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  var sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["ServerStyleSheets"]();
  var originalRenderPage = ctx.renderPage;

  ctx.renderPage = function () {
    return originalRenderPage({
      enhanceApp: function enhanceApp(App) {
        return function (props) {
          return sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(App, props));
        };
      }
    });
  };

  var initialProps = await next_document__WEBPACK_IMPORTED_MODULE_8___default.a.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.toArray(initialProps.styles)), [sheets.getStyleElement()])
  });
};

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.jsx */"./pages/_document.jsx");


/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwibWlkZGxld2FyZSIsIk5leHRTY3JpcHQiLCJNYWluIiwiSGVhZCIsIkh0bWwiLCJkZWZhdWx0IiwiX3Byb3BUeXBlcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2VydmVyIiwiX2NvbnN0YW50cyIsIl9kb2N1bWVudENvbnRleHQiLCJfdXRpbHMiLCJEb2N1bWVudENvbnRleHQiLCJEb2N1bWVudEluaXRpYWxQcm9wcyIsIkRvY3VtZW50UHJvcHMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJvYmoiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJyZXEiLCJyZXMiLCJkZWR1cGUiLCJidW5kbGVzIiwiZmlsZXMiLCJTZXQiLCJrZXB0IiwiYnVuZGxlIiwiZmlsZSIsImFkZCIsInB1c2giLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJwYXRoIiwicHJvY2VzcyIsIkRvY3VtZW50IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZXJzIiwiZW5oYW5jZUFwcCIsIkFwcCIsImVuaGFuY2VyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiaHRtbCIsImhlYWQiLCJyZW5kZXJQYWdlIiwic3R5bGVzIiwicmVuZGVyRG9jdW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiX2RvY3VtZW50UHJvcHMiLCJfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIiwiRGF0ZSIsIm5vdyIsInJlbmRlciIsImhlYWRUYWdzTWlkZGxld2FyZSIsIlByb21pc2UiLCJib2R5VGFnc01pZGRsZXdhcmUiLCJodG1sUHJvcHNNaWRkbGV3YXJlIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiY29udGV4dCIsImluQW1wTW9kZSIsImh0bWxQcm9wcyIsImFzc2lnbiIsImFtcCIsInVuZGVmaW5lZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwiaXNSZXF1aXJlZCIsImdldENzc0xpbmtzIiwiYXNzZXRQcmVmaXgiLCJjc3NGaWxlcyIsImxlbmd0aCIsImZpbHRlciIsImYiLCJ0ZXN0IiwiY3NzTGlua0VsZW1lbnRzIiwiZm9yRWFjaCIsIm5vbmNlIiwicmVsIiwiaHJlZiIsImVuY29kZVVSSSIsImFzIiwiY3Jvc3NPcmlnaW4iLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImR5bmFtaWNJbXBvcnRzIiwibWFwIiwiZW5kc1dpdGgiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImFtcFBhdGgiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiX19ORVhUX0RBVEFfXyIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInBhZ2UiLCJidWlsZElkIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9jaGlsZCRwcm9wcyIsImlzUmVhY3RIZWxtZXQiLCJ0eXBlIiwiY29uc29sZSIsIndhcm4iLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsIm5hbWUiLCJzcmMiLCJpbmRleE9mIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJrZXlzIiwicHJvcCIsImN1clN0eWxlcyIsIkFycmF5IiwiaXNBcnJheSIsImhhc1N0eWxlcyIsImVsIiwiX2VsJHByb3BzIiwiX2VsJHByb3BzJGRhbmdlcm91c2x5IiwiX19odG1sIiwiaXNEZXZlbG9wbWVudCIsIkZyYWdtZW50IiwiY29udGVudCIsImNvdW50IiwidG9TdHJpbmciLCJjbGVhbkFtcFBhdGgiLCJzdHlsZSIsImpvaW4iLCJyZXBsYWNlIiwiYXN5bmMiLCJnZXRBbXBQYXRoIiwiZ2V0UGFnZUZpbGUiLCJpZCIsInN0cmluZyIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0RHluYW1pY0NodW5rcyIsIm1vZGVyblByb3BzIiwiaW5jbHVkZXMiLCJnZXRTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJub01vZHVsZSIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwic3RhdGljTWFya3VwIiwiZGV2RmlsZXMiLCJib2R5VGFncyIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwicGFnZVNjcmlwdCIsImFwcFNjcmlwdCIsIm1hdGNoIiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhc1BhdGgiLCJzdGFydGluZ1VybCIsIk15RG9jdW1lbnQiLCJzaGVldHMiLCJTZXJ2ZXJTdHlsZVNoZWV0cyIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsImNvbGxlY3QiLCJpbml0aWFsUHJvcHMiLCJSZWFjdCIsInRvQXJyYXkiLCJnZXRTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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WCxHQUE2QixnQkFBTUMsR0FBTixFQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsTUFBTTRJLE1BQU0sR0FBRyxJQUFJQywwRUFBSixFQUFmO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUc5SSxHQUFHLENBQUNTLFVBQS9COztBQUVBVCxLQUFHLENBQUNTLFVBQUosR0FBaUI7QUFBQSxXQUNmcUksa0JBQWtCLENBQUM7QUFDakI1SSxnQkFBVSxFQUFFLG9CQUFBQyxHQUFHO0FBQUEsZUFBSSxVQUFBRSxLQUFLO0FBQUEsaUJBQUl1SSxNQUFNLENBQUNHLE9BQVAsZUFBZSwyREFBQyxHQUFELEVBQVMxSSxLQUFULENBQWYsQ0FBSjtBQUFBLFNBQVQ7QUFBQTtBQURFLEtBQUQsQ0FESDtBQUFBLEdBQWpCOztBQUtBLE1BQU0ySSxZQUFZLEdBQUcsTUFBTW5KLG9EQUFRLENBQUNFLGVBQVQsQ0FBeUJDLEdBQXpCLENBQTNCO0FBRUEseUNBQ0tnSixZQURMO0FBRUU7QUFDQXRJLFVBQU0sNEZBQ0R1SSw0Q0FBSyxDQUFDN0UsUUFBTixDQUFlOEUsT0FBZixDQUF1QkYsWUFBWSxDQUFDdEksTUFBcEMsQ0FEQyxJQUVKa0ksTUFBTSxDQUFDTyxlQUFQLEVBRkk7QUFIUjtBQVFELENBMUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWlkZGxld2FyZT1taWRkbGV3YXJlO2V4cG9ydHMuTmV4dFNjcmlwdD1leHBvcnRzLk1haW49ZXhwb3J0cy5IZWFkPWV4cG9ydHMuSHRtbD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX3V0aWxzMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzXCIpO3ZhciBfaHRtbGVzY2FwZT1yZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUoe3JlcSxyZXN9KXt9ZnVuY3Rpb24gZGVkdXBlKGJ1bmRsZXMpe2NvbnN0IGZpbGVzPW5ldyBTZXQoKTtjb25zdCBrZXB0PVtdO2Zvcihjb25zdCBidW5kbGUgb2YgYnVuZGxlcyl7aWYoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSljb250aW51ZTtmaWxlcy5hZGQoYnVuZGxlLmZpbGUpO2tlcHQucHVzaChidW5kbGUpO31yZXR1cm4ga2VwdDt9ZnVuY3Rpb24gZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KHBhdGgpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcLmpzJC8sJy5tb2R1bGUuanMnKTt9cmV0dXJuIHBhdGg7fS8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL2NsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHsvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7Y29uc3QgZW5oYW5jZXJzPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP2F3YWl0IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWVuaGFuY2UtYXBwLXNlcnZlciEnKSkpLnRoZW4obW9kPT5tb2QuZGVmYXVsdChjdHgpKTpbXTtjb25zdCBlbmhhbmNlQXBwPUFwcD0+e2Zvcihjb25zdCBlbmhhbmNlciBvZiBlbmhhbmNlcnMpe0FwcD1lbmhhbmNlcihBcHApO31yZXR1cm4gcHJvcHM9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCxwcm9wcyk7fTtjb25zdHtodG1sLGhlYWR9PWF3YWl0IGN0eC5yZW5kZXJQYWdlKHtlbmhhbmNlQXBwfSk7Y29uc3Qgc3R5bGVzPVsuLi4oMCxfc2VydmVyLmRlZmF1bHQpKCksLi4uKHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP2F3YWl0IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWdldC1zdHlsZXMtc2VydmVyIScpKSkudGhlbihtb2Q9Pm1vZC5kZWZhdWx0KGN0eCkpOltdKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnQscHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp7X2RvY3VtZW50UHJvcHM6cHJvcHMsLy8gSW4gZGV2IHdlIGludmFsaWRhdGUgdGhlIGNhY2hlIGJ5IGFwcGVuZGluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzb3VyY2UgVVJMLlxuLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvaXNzdWVzLzU4NjBcbi8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2IGlzIGZpeGVkLlxuX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZzpwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nP3RzPScrRGF0ZS5ub3coKTonJ319LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvY3VtZW50LHByb3BzKSk7fXJlbmRlcigpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbixudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LG51bGwpKSk7fX1leHBvcnRzLmRlZmF1bHQ9RG9jdW1lbnQ7RG9jdW1lbnQuaGVhZFRhZ3NNaWRkbGV3YXJlPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJykpKTooKT0+W107RG9jdW1lbnQuYm9keVRhZ3NNaWRkbGV3YXJlPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWJvZHktdGFncy1zZXJ2ZXIhJykpKTooKT0+W107RG9jdW1lbnQuaHRtbFByb3BzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1odG1sLXByb3BzLXNlcnZlciEnKSkpOigpPT5bXTtjbGFzcyBIdG1sIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31yZW5kZXIoKXtjb25zdHtpbkFtcE1vZGUsaHRtbFByb3BzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsT2JqZWN0LmFzc2lnbih7fSxodG1sUHJvcHMsdGhpcy5wcm9wcyx7YW1wOmluQW1wTW9kZT8nJzp1bmRlZmluZWQsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGUmJnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPycnOnVuZGVmaW5lZH0pKTt9fWV4cG9ydHMuSHRtbD1IdG1sO0h0bWwuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SHRtbC5wcm9wVHlwZXM9e2NoaWxkcmVuOl9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWR9O2NsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldENzc0xpbmtzKCl7Y29uc3R7YXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3QgY3NzRmlsZXM9ZmlsZXMmJmZpbGVzLmxlbmd0aD9maWxlcy5maWx0ZXIoZj0+L1xcLmNzcyQvLnRlc3QoZikpOltdO2NvbnN0IGNzc0xpbmtFbGVtZW50cz1bXTtjc3NGaWxlcy5mb3JFYWNoKGZpbGU9Pntjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmAke2ZpbGV9LXByZWxvYWRgLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk7fSk7cmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGg9PT0wP251bGw6Y3NzTGlua0VsZW1lbnRzO31nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4fT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcChidW5kbGU9PnsvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlbiB0aGVcbi8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4vLyB2YXJpYW50cyBvbmx5LlxuaWYoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKXtyZXR1cm4gbnVsbDt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixrZXk6YnVuZGxlLmZpbGUsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoYnVuZGxlLmZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSk7fSkvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4uZmlsdGVyKEJvb2xlYW4pO31nZXRQcmVsb2FkTWFpbkxpbmtzKCl7Y29uc3R7YXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzJiZmaWxlcy5sZW5ndGg/ZmlsZXMuZmlsdGVyKGZpbGU9PnsvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlblxuLy8gdGhlIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGVcbi8vIG1vZGVybiB2YXJpYW50cyBvbmx5LlxucmV0dXJuIGZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSk7fSk6W107cmV0dXJuIXByZWxvYWRGaWxlcy5sZW5ndGg/bnVsbDpwcmVsb2FkRmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk7fXJlbmRlcigpe2NvbnN0e3N0eWxlcyxhbXBQYXRoLGluQW1wTW9kZSxhc3NldFByZWZpeCxoeWJyaWRBbXAsY2Fub25pY2FsQmFzZSxfX05FWFRfREFUQV9fLGRhbmdlcm91c0FzUGF0aCxoZWFkVGFncyx1bnN0YWJsZV9ydW50aW1lSlN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdHtwYWdlLGJ1aWxkSWR9PV9fTkVYVF9EQVRBX187bGV0e2hlYWR9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztsZXQgY2hpbGRyZW49dGhpcy5wcm9wcy5jaGlsZHJlbjsvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLGNoaWxkPT57dmFyIF9jaGlsZCRwcm9wcztjb25zdCBpc1JlYWN0SGVsbWV0PWNoaWxkPT09bnVsbHx8Y2hpbGQ9PT12b2lkIDA/dm9pZCAwOihfY2hpbGQkcHJvcHM9Y2hpbGQucHJvcHMpPT09bnVsbHx8X2NoaWxkJHByb3BzPT09dm9pZCAwP3ZvaWQgMDpfY2hpbGQkcHJvcHNbJ2RhdGEtcmVhY3QtaGVsbWV0J107aWYoKGNoaWxkPT09bnVsbHx8Y2hpbGQ9PT12b2lkIDA/dm9pZCAwOmNoaWxkLnR5cGUpPT09J3RpdGxlJyYmIWlzUmVhY3RIZWxtZXQpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiKTt9cmV0dXJuIGNoaWxkO30pO2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31sZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO3JldHVybiBudWxsO319ZWxzZXsvLyBub24tYW1wIG1vZGVcbmlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdhbXBodG1sJyl7aGFzQW1waHRtbFJlbD10cnVlO319cmV0dXJuIGNoaWxkO30pOy8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuY29uc3QgY3VyU3R5bGVzPUFycmF5LmlzQXJyYXkoc3R5bGVzKT9zdHlsZXM6W107aWYoaW5BbXBNb2RlJiZzdHlsZXMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbkFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSl7Y29uc3QgaGFzU3R5bGVzPWVsPT57dmFyIF9lbCRwcm9wcyxfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk7cmV0dXJuIGVsPT09bnVsbHx8ZWw9PT12b2lkIDA/dm9pZCAwOihfZWwkcHJvcHM9ZWwucHJvcHMpPT09bnVsbHx8X2VsJHByb3BzPT09dm9pZCAwP3ZvaWQgMDooX2VsJHByb3BzJGRhbmdlcm91c2x5PV9lbCRwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCk9PT1udWxsfHxfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9PT12b2lkIDA/dm9pZCAwOl9lbCRwcm9wcyRkYW5nZXJvdXNseS5fX2h0bWw7fTsvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkPT57aWYoQXJyYXkuaXNBcnJheShjaGlsZCkpe2NoaWxkLmZvckVhY2goZWw9Pmhhc1N0eWxlcyhlbCkmJmN1clN0eWxlcy5wdXNoKGVsKSk7fWVsc2UgaWYoaGFzU3R5bGVzKGNoaWxkKSl7Y3VyU3R5bGVzLnB1c2goY2hpbGQpO319KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsdGhpcy5wcm9wcyx0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZCxkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6bm9uZX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpibG9ja31gfX0pKSksY2hpbGRyZW4saGVhZCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcIm5leHQtaGVhZC1jb3VudFwiLGNvbnRlbnQ6X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoaGVhZHx8W10pLnRvU3RyaW5nKCl9KSxpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwifSksIWhhc0Nhbm9uaWNhbFJlbCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImNhbm9uaWNhbFwiLGhyZWY6Y2Fub25pY2FsQmFzZSsoMCxfdXRpbHMyLmNsZWFuQW1wUGF0aCkoZGFuZ2Vyb3VzQXNQYXRoKX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsYXM6XCJzY3JpcHRcIixocmVmOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pLHN0eWxlcyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1jdXN0b21cIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6Y3VyU3R5bGVzLm1hcChzdHlsZT0+c3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKS5qb2luKCcnKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywnJykucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csJycpfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gfX0pKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLHNyYzpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSksIWluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhaGFzQW1waHRtbFJlbCYmaHlicmlkQW1wJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiYW1waHRtbFwiLGhyZWY6Y2Fub25pY2FsQmFzZStnZXRBbXBQYXRoKGFtcFBhdGgsZGFuZ2Vyb3VzQXNQYXRoKX0pLHRoaXMuZ2V0Q3NzTGlua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixocmVmOmFzc2V0UHJlZml4K2dldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYCkpK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSwhZGlzYWJsZVJ1bnRpbWVKUyYmcGFnZSE9PScvX2Vycm9yJyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixocmVmOmFzc2V0UHJlZml4K2dldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkpK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSwhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZWxvYWRNYWluTGlua3MoKSx0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qLyAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4vLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbi8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse2lkOlwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCJ9KSxzdHlsZXN8fG51bGwpLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGhlYWRUYWdzfHxbXSkpKTt9fWV4cG9ydHMuSGVhZD1IZWFkO0hlYWQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SGVhZC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307Y2xhc3MgTWFpbiBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWx9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztpZihpbkFtcE1vZGUpcmV0dXJuIF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQ7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6XCJfX25leHRcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmh0bWx9fSk7fX1leHBvcnRzLk1haW49TWFpbjtNYWluLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O2NsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeCxmaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoYnVuZGxlPT57bGV0IG1vZGVyblByb3BzPXt9O2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpe21vZGVyblByb3BzPS9cXC5tb2R1bGVcXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpP3t0eXBlOidtb2R1bGUnfTp7bm9Nb2R1bGU6dHJ1ZX07fWlmKCEvXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKXx8ZmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxrZXk6YnVuZGxlLmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShidW5kbGUuZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxtb2Rlcm5Qcm9wcykpO30pO31nZXRTY3JpcHRzKCl7Y29uc3R7YXNzZXRQcmVmaXgsZmlsZXMsbG93UHJpb3JpdHlGaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdCBub3JtYWxTY3JpcHRzPWZpbGVzPT09bnVsbHx8ZmlsZXM9PT12b2lkIDA/dm9pZCAwOmZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7Y29uc3QgbG93UHJpb3JpdHlTY3JpcHRzPWxvd1ByaW9yaXR5RmlsZXM9PT1udWxsfHxsb3dQcmlvcml0eUZpbGVzPT09dm9pZCAwP3ZvaWQgMDpsb3dQcmlvcml0eUZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7cmV0dXJuWy4uLm5vcm1hbFNjcmlwdHMsLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoZmlsZT0+e2xldCBtb2Rlcm5Qcm9wcz17fTtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXttb2Rlcm5Qcm9wcz1maWxlLmVuZHNXaXRoKCcubW9kdWxlLmpzJyk/e3R5cGU6J21vZHVsZSd9Ontub01vZHVsZTp0cnVlfTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsYXN5bmM6dHJ1ZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxtb2Rlcm5Qcm9wcykpO30pO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXsvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbi8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuY29uc3R7YXNzZXRQcmVmaXgscG9seWZpbGxGaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gcG9seWZpbGxGaWxlcy5maWx0ZXIocG9seWZpbGw9PnBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSYmIS9cXC5tb2R1bGVcXC5qcyQvLnRlc3QocG9seWZpbGwpKS5tYXAocG9seWZpbGw9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpwb2x5ZmlsbCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sbm9Nb2R1bGU6dHJ1ZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9KSk7fXN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wcyl7Y29uc3R7X19ORVhUX0RBVEFfX309ZG9jdW1lbnRQcm9wczt0cnl7Y29uc3QgZGF0YT1KU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKTtyZXR1cm4oMCxfaHRtbGVzY2FwZS5odG1sRXNjYXBlSnNvblN0cmluZykoZGF0YSk7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpe3Rocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2NpcmN1bGFyLXN0cnVjdHVyZWApO310aHJvdyBlcnI7fX1yZW5kZXIoKXtjb25zdHtzdGF0aWNNYXJrdXAsYXNzZXRQcmVmaXgsaW5BbXBNb2RlLGRldkZpbGVzLF9fTkVYVF9EQVRBX18sYm9keVRhZ3MsdW5zdGFibGVfcnVudGltZUpTfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7aWYoaW5BbXBNb2RlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyl7cmV0dXJuIG51bGw7fWNvbnN0IGRldkZpbGVzPVtfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNILF9jb25zdGFudHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLHN0YXRpY01hcmt1cHx8ZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzKX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksZGV2RmlsZXM/ZGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixcImRhdGEtYW1wZGV2bW9kZVwiOnRydWV9KSk6bnVsbCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihib2R5VGFnc3x8W10pKSk7fWNvbnN0e3BhZ2UsYnVpbGRJZH09X19ORVhUX0RBVEFfXztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWNvbnN0IHBhZ2VTY3JpcHQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6cGFnZSxrZXk6cGFnZSxzcmM6YXNzZXRQcmVmaXgrZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEP3tub01vZHVsZTp0cnVlfTp7fSkpLHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOnBhZ2Usa2V5OmAke3BhZ2V9LW1vZGVybmAsc3JjOmFzc2V0UHJlZml4K2dldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkpK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLHR5cGU6XCJtb2R1bGVcIn0pXTtjb25zdCBhcHBTY3JpcHQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6XCIvX2FwcFwiLHNyYzphc3NldFByZWZpeCtgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsa2V5OlwiX2FwcFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0scHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRD97bm9Nb2R1bGU6dHJ1ZX06e30pKSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpcIi9fYXBwXCIsc3JjOmFzc2V0UHJlZml4K2AvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5tb2R1bGUuanNgK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsa2V5OlwiX2FwcC1tb2Rlcm5cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sdHlwZTpcIm1vZHVsZVwifSldO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWRpc2FibGVSdW50aW1lSlMmJmRldkZpbGVzP2RldkZpbGVzLm1hcChmaWxlPT4hZmlsZS5tYXRjaCgvXFwuanNcXC5tYXAvKSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk6bnVsbCxzdGF0aWNNYXJrdXB8fGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcyl9fSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmIWRpc2FibGVSdW50aW1lSlM/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7bm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4fX0pOm51bGwsIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksIWRpc2FibGVSdW50aW1lSlMmJmFwcFNjcmlwdCwhZGlzYWJsZVJ1bnRpbWVKUyYmcGFnZSE9PScvX2Vycm9yJyYmcGFnZVNjcmlwdCxkaXNhYmxlUnVudGltZUpTfHxzdGF0aWNNYXJrdXA/bnVsbDp0aGlzLmdldER5bmFtaWNDaHVua3MoKSxkaXNhYmxlUnVudGltZUpTfHxzdGF0aWNNYXJrdXA/bnVsbDp0aGlzLmdldFNjcmlwdHMoKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihib2R5VGFnc3x8W10pKSk7fX1leHBvcnRzLk5leHRTY3JpcHQ9TmV4dFNjcmlwdDtOZXh0U2NyaXB0LmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O05leHRTY3JpcHQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O05leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXg9JyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztmdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsYXNQYXRoKXtyZXR1cm4gYW1wUGF0aHx8YCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/Jyk/JyYnOic/J31hbXA9MWA7fWZ1bmN0aW9uIGdldFBhZ2VGaWxlKHBhZ2UsYnVpbGRJZCl7Y29uc3Qgc3RhcnRpbmdVcmw9cGFnZT09PScvJz8nL2luZGV4JzpwYWdlO3JldHVybiBidWlsZElkP2Ake3N0YXJ0aW5nVXJsfS4ke2J1aWxkSWR9LmpzYDpgJHtzdGFydGluZ1VybH0uanNgO30iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7LyogUFdBIHByaW1hcnkgY29sb3IgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59XG5cbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgLy8gUmVzb2x1dGlvbiBvcmRlclxuICAvL1xuICAvLyBPbiB0aGUgc2VydmVyOlxuICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDMuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyA0LiBhcHAucmVuZGVyXG4gIC8vIDUuIHBhZ2UucmVuZGVyXG4gIC8vIDYuIGRvY3VtZW50LnJlbmRlclxuICAvL1xuICAvLyBPbiB0aGUgc2VydmVyIHdpdGggZXJyb3I6XG4gIC8vIDEuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBhcHAucmVuZGVyXG4gIC8vIDMuIHBhZ2UucmVuZGVyXG4gIC8vIDQuIGRvY3VtZW50LnJlbmRlclxuICAvL1xuICAvLyBPbiB0aGUgY2xpZW50XG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMy4gYXBwLnJlbmRlclxuICAvLyA0LiBwYWdlLnJlbmRlclxuXG4gIC8vIFJlbmRlciBhcHAgYW5kIHBhZ2UgYW5kIGdldCB0aGUgY29udGV4dCBvZiB0aGUgcGFnZSB3aXRoIGNvbGxlY3RlZCBzaWRlIGVmZmVjdHMuXG4gIGNvbnN0IHNoZWV0cyA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0cygpO1xuICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcblxuICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgIGVuaGFuY2VBcHA6IEFwcCA9PiBwcm9wcyA9PiBzaGVldHMuY29sbGVjdCg8QXBwIHsuLi5wcm9wc30gLz4pXG4gICAgfSk7XG5cbiAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgLy8gU3R5bGVzIGZyYWdtZW50IGlzIHJlbmRlcmVkIGFmdGVyIHRoZSBhcHAgYW5kIHBhZ2UgcmVuZGVyaW5nIGZpbmlzaC5cbiAgICBzdHlsZXM6IFtcbiAgICAgIC4uLlJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoaW5pdGlhbFByb3BzLnN0eWxlcyksXG4gICAgICBzaGVldHMuZ2V0U3R5bGVFbGVtZW50KClcbiAgICBdXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==