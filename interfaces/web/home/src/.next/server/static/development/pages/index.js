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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

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

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js");

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
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
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
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

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

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
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
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

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

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
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

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
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


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
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
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
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
    this.basePath = basePath;
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
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
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


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, as, options);
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
        this.changeState(method, url, as, options);

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

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
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
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
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

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
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

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

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
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
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
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
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
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
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

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

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

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!**************************************************************************!*\
  !*** ../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");








var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_7__["default"].withTranslation;

var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_7__["default"].i18n.language || 'en';
};

function Copyright() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright \xA9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://simpatico.online/"
  }, "Simpatico"), " ", new Date().getFullYear(), ".");
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    footer: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0)
    },
    toolbarSecondary: {
      justifyContent: "space-around",
      overflowX: "auto"
    },
    linkSelected: {
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.00938em',
      color: '#007bff'
    },
    link: {
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.00938em'
    }
  };
});

function Footer(props) {
  var classes = useStyles();
  var selected = props.selected,
      footer = props.footer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary
  }, footer.sections.map(function (section, idx) {
    if (section.page) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        key: idx,
        href: {
          pathname: 'cmspage',
          query: {
            page: section.page,
            title: section.languages[getCurrentLang()]
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: selected === section.languages[getCurrentLang()] ? classes.linkSelected : classes.link
      }, section.languages[getCurrentLang()]));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null));
}

Footer.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_6___default()(withTranslation(['common']))(Footer));

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UserMenu */ "./components/UserMenu.jsx");
/* harmony import */ var _Share__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Share */ "./components/Share.jsx");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");

















var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_13__["default"].withTranslation;

var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_13__["default"].i18n.language || 'en';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    toolbar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    toolbarTitle: {
      flex: 1
    },
    toolbarSecondary: {
      justifyContent: "space-around",
      width: "80%",
      overflowX: "auto"
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0
    },
    linkSelected: {
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.00938em',
      color: '#007bff'
    },
    link: {
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.00938em'
    }
  };
});

function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      shareOpen = _useState2[0],
      setShareOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      firstNameDisplay = _useState4[0],
      setFirstNameDisplay = _useState4[1];

  var classes = useStyles();
  var header = props.header,
      title = props.title,
      selected = props.selected,
      t = props.t;

  function handleShareClose() {
    setShareOpen(false);
  }

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  var firstNameLocalStorage;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.auth;
  }),
      firstName = _useSelector.firstName,
      lastName = _useSelector.lastName,
      id = _useSelector.id,
      isValidToken = _useSelector.isValidToken,
      token = _useSelector.token,
      accountId = _useSelector.accountId;

  if (false) {} // First time effect


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Pull info from local storage if available
    if (firstNameLocalStorage) {
      setFirstNameDisplay(firstNameLocalStorage);
    }
  }, []); // First time effect and when isValidToken changes

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isValidToken) {
      // So the token is present and valid, do I have the user details?
      if (!firstNameLocalStorage) {
        dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_16__["fetchUserInfo"])());
      }
    } // Sorry token no longer valid, get rid of display name for login


    if (isValidToken) {
      if (firstNameLocalStorage) {
        setFirstNameDisplay();
      }
    }

    if (isValidToken) {
      localStorage.setItem("token", token);
    }
  }, [isValidToken]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Set localstorage for other apps but also update our local state to force render
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("uid", id);
    localStorage.setItem("accountId", accountId);
    setFirstNameDisplay(firstName);
  }, [firstName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.toolbar
  }, header.share ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: function onClick() {
      setShareOpen(true);
    },
    size: "small"
  }, t('share')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Share__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: shareOpen,
    handleClose: handleShareClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    component: "h2",
    variant: "h5",
    color: "inherit",
    align: "center",
    noWrap: true,
    className: classes.toolbarTitle
  }, title)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8___default.a, null)), !firstNameDisplay ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "outlined",
    size: "small",
    onClick: function onClick() {
      window.location = "/login/";
    }
  }, t('signin')) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    firstNameDisplay: firstNameDisplay
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "nav",
    variant: "dense",
    className: classes.toolbarSecondary
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: selected === 'home' ? classes.linkSelected : classes.link
  }, t('home'))), header.sections.map(function (section, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
      key: idx,
      href: {
        pathname: 'cmspage',
        query: {
          page: section.page,
          title: section.languages[getCurrentLang()]
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: selected === section.languages[getCurrentLang()] ? classes.linkSelected : classes.link
    }, section.languages[getCurrentLang()]));
  })));
}

Header.propTypes = {
  sections: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_12___default()(withTranslation(['common']))(Header));

/***/ }),

/***/ "./components/Main.jsx":
/*!*****************************!*\
  !*** ./components/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    content: {
      "text-decoration": "none"
    }
  };
});
function Main(props) {
  var topPost = null;
  var topPostLink = "";
  var posts = props.posts,
      title = props.title;

  if (posts.length > 0) {
    topPost = posts[posts.length - 1];
    topPostLink = "/thread/?module=".concat(topPost.module, "#").concat(topPost.id);
  }

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    gutterBottom: true
  }, title), topPost ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    alt: topPost.user,
    src: topPost.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "subtitle2",
    gutterBottom: true
  }, topPost.user, " -  ", topPost.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: classes.content,
    href: topPostLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: topPost.contents
    }
  }))) : null);
}
Main.propTypes = {
  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/Overview.jsx":
/*!*********************************!*\
  !*** ./components/Overview.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overview; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");










var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_8__["default"].i18n.language || 'en';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)'
    },
    mainFeaturedPostContent: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: 'relative',
      padding: theme.spacing(3)
    }, theme.breakpoints.up('md'), {
      padding: theme.spacing(6),
      paddingRight: 0
    })
  };
});
function Overview(props) {
  var classes = useStyles();
  var overview = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.mainFeaturedPost,
    style: {
      backgroundImage: "url(".concat(overview.url, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: {
      display: 'none'
    },
    src: overview.url,
    alt: overview.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.overlay
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.mainFeaturedPostContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h1",
    variant: "h3",
    color: "inherit",
    gutterBottom: true
  }, overview.title[getCurrentLang()]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h5",
    color: "inherit",
    paragraph: true
  }, overview.description[getCurrentLang()]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: {
      pathname: 'cmspage',
      query: {
        page: overview.page
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, overview.linkText[getCurrentLang()]))))));
}
Overview.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/***/ }),

/***/ "./components/Share.jsx":
/*!******************************!*\
  !*** ./components/Share.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-share */ "react-share");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    network: {
      "verticalAlign": "top",
      "display": "inline-block",
      "margin-right": "10px",
      "textAlign": "center"
    },
    shareCount: {
      "display": "inline-flex",
      "justifyContent": "center",
      "whiteSpace": "nowrap",
      "overflow": "visible",
      "width": 0,
      "marginTop": "3px",
      "fontSize": "12px",
      "fontColor": "black"
    },
    networkShareButton: {
      cursor: "pointer"
    }
  };
});
var Transition = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    direction: "up",
    ref: ref
  }, props));
});


var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_12__["default"].withTranslation;

var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_12__["default"].i18n.language || 'en';
};

function Share(props) {
  var open = props.open,
      handleClose = props.handleClose,
      t = props.t;
  var classes = useStyles();
  var shareUrl = '';

  if (false) {}

  var title = "Simpatico";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "alert-dialog-slide-title"
  }, t('share')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.network
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookShareButton"], {
    url: shareUrl,
    quote: title,
    className: classes.networkShareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookIcon"], {
    size: 32,
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookShareCount"], {
    url: shareUrl,
    className: classes.shareCount
  }, function (count) {
    return count;
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.network
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookMessengerShareButton"], {
    url: shareUrl,
    appId: "521270401588372",
    className: classes.networkShareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["FacebookMessengerIcon"], {
    size: 32,
    round: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.network
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterShareButton"], {
    url: shareUrl,
    title: title,
    className: classes.networkShareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["TwitterIcon"], {
    size: 32,
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.shareCount
  }, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.network
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["LinkedinShareButton"], {
    url: shareUrl,
    className: classes.networkShareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["LinkedinIcon"], {
    size: 32,
    round: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.network
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["WhatsappShareButton"], {
    url: shareUrl,
    title: title,
    separator: ":: ",
    className: classes.networkShareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["WhatsappIcon"], {
    size: 32,
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.shareCount
  }, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.network
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["EmailShareButton"], {
    url: shareUrl,
    subject: title,
    body: "body",
    className: classes.networkShareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_10__["EmailIcon"], {
    size: 32,
    round: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClose,
    color: "primary"
  }, "Close"))));
}

/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default()(withTranslation(['common']))(Share));

/***/ }),

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "@material-ui/icons/Twitter");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "@material-ui/icons/Instagram");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200]
    },
    sidebarSection: {
      marginTop: theme.spacing(3)
    }
  };
});
var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_12__["default"].withTranslation;

var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_12__["default"].i18n.language || 'en';
};

function Sidebar(props) {
  var classes = useStyles();
  var description = props.description,
      social = props.social,
      t = props.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    elevation: 0,
    className: classes.sidebarAboutBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h6",
    gutterBottom: true
  }, t('about')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, null, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h6",
    gutterBottom: true,
    className: classes.sidebarSection
  }, t('social')), social.map(function (network, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      display: "block",
      variant: "body1",
      href: network.url,
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      direction: "row",
      spacing: 1,
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true
    }, network.name === 'github' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7___default.a, null) : null, network.name === 'facebook' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8___default.a, null) : null, network.name === 'twitter' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_9___default.a, null) : null, network.name === 'instagram' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_10___default.a, null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      item: true
    }, network.name)));
  }));
}

Sidebar.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  social: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default()(withTranslation(['common']))(Sidebar));

/***/ }),

/***/ "./components/Theme.jsx":
/*!******************************!*\
  !*** ./components/Theme.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Theme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/modules */ "./actions/modules.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");















var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_13__["default"].i18n.language || 'en';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});
function Theme(props) {
  var classes = useStyles();
  var theme = props.theme;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])(); // First time effect

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Pull info from local storage if available
    if (theme && theme.module) {
      dispatch(Object(_actions_modules__WEBPACK_IMPORTED_MODULE_12__["fetchModuleRequest"])(theme.module));
    }
  }, [theme]);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.modules;
  }),
      module = _useSelector.module;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "a",
    href: theme.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.cardDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "h2",
    variant: "h5"
  }, theme.title[getCurrentLang()]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subtitle1",
    paragraph: true
  }, theme.description[getCurrentLang()]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "subtitle1",
    color: "primary"
  }, module && module.moduleType === 'thread' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: '/thread/?module=' + module.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, theme.imageText[getCurrentLang()])) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    xsDown: true
  }, theme.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.cardMedia,
    image: theme.image,
    title: theme.imageText[getCurrentLang()]
  }) : null))));
}
Theme.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./components/UserMenu.jsx":
/*!*********************************!*\
  !*** ./components/UserMenu.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");













var withTranslation = _i18n__WEBPACK_IMPORTED_MODULE_12__["default"].withTranslation;

var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_12__["default"].i18n.language || 'en';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      "z-index": 1000
    },
    paper: {
      marginRight: theme.spacing(2)
    }
  };
});

function UserMenu(_ref) {
  var t = _ref.t,
      firstNameDisplay = _ref.firstNameDisplay;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  var prevOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(open);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ref: anchorRef,
    "aria-controls": open ? 'menu-list-grow' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle
  }, firstNameDisplay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_5___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, TransitionProps, {
      style: {
        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClickAway: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_9___default.a, {
      autoFocusItem: open,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDown
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
      onClick: function onClick() {
        window.location.href = "/profile/";
      }
    }, t('profile')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
      onClick: function onClick() {
        // Remove tokens
        localStorage.clear();
        window.location.href = '/login/';
      }
    }, t('logout'))))));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (lodash_flowRight__WEBPACK_IMPORTED_MODULE_11___default()(withTranslation(['common']))(UserMenu));

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @socialgouv/matomo-next */ "@socialgouv/matomo-next");
/* harmony import */ var _socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Overview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Overview */ "./components/Overview.jsx");
/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Theme */ "./components/Theme.jsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Main */ "./components/Main.jsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../config */ "../config.js");
/* harmony import */ var _actions_debate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/debate */ "./actions/debate.js");
/* harmony import */ var _actions_posts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/posts */ "./actions/posts.js");



















var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_14__["default"].i18n.language || 'en';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    mainGrid: {
      marginTop: theme.spacing(3)
    }
  };
});

function Home(_ref) {
  var debateServer = _ref.debateServer;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  if (debateServer) {
    // Put the server side fetch into client side store
    dispatch(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_16__["setDebateRequest"])(debateServer));
  }

  var debate = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.debate.debate;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.posts;
  }),
      posts = _useSelector.posts;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.auth;
  }),
      isValidToken = _useSelector2.isValidToken,
      accountId = _useSelector2.accountId;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_socialgouv_matomo_next__WEBPACK_IMPORTED_MODULE_7__["init"])({
      url: 'http://localhost',
      siteId: debate.trackingId
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (debate && debate.debateType === 'private') {
      if (isValidToken === false) {
        window.location.href = '/login/';
      }
    }
  }, [isValidToken, debate]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (debate && debate.debateType === 'private') {
      if (isValidToken === true) {
        if (posts.length === 0) {
          if (!!accountId) {
            dispatch(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_17__["fetchPostsRequest"])(accountId));
          }
        }
      }
    }
  }, [accountId]);
  var classes = useStyles();

  if (!debate) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, debate.slug), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), debate.metaTags.map(function (tag, idx) {
    if (tag.type === 'property') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        property: tag.typevalue,
        content: tag.content,
        key: idx
      });
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: tag.typevalue,
        content: tag.content,
        key: idx
      });
    }
  })), debate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    maxWidth: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    selected: "home",
    title: debate.slug,
    header: debate.header
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Overview__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: debate.overview
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 4
  }, debate.themes.map(function (theme) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Theme__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: theme.title[getCurrentLang()],
      theme: theme
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 5,
    className: classes.mainGrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Latest contributon",
    posts: posts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    description: debate.sidebar.about[getCurrentLang()],
    social: debate.sidebar.social
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    footer: debate.footer
  })) : null);
}

Home.getInitialProps = async function (ctx) {
  if (ctx.req) {
    // Do a check if this debate exists before trying to render (no saga here, server side)
    var res = await fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_15__["default"].api.host, "/v1/fetchDebate?name=").concat(ctx.req.headers.host));
    var debateServer = await res.json();
    return {
      debateServer: debateServer
    };
  }

  return {
    debateServer: null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gary/dev/simpatico/interfaces/web/home/src/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "@socialgouv/matomo-next":
/*!******************************************!*\
  !*** external "@socialgouv/matomo-next" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@socialgouv/matomo-next");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-share");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9hdXRoLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvZGViYXRlLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL092ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhlbWUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlck1lbnUuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNvY2lhbGdvdXYvbWF0b21vLW5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZmxvd1JpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaGFyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIlZFUklGWV9UT0tFTl9SRVFVRVNUIiwiVkVSSUZZX1RPS0VOX1JFUVVFU1RfU1VDQ0VTUyIsIlZFUklGWV9UT0tFTl9SRVFVRVNUX0ZBSUxVUkUiLCJGRVRDSF9VU0VSX0lORk9fUkVRVUVTVCIsIkZFVENIX1VTRVJfSU5GT19SRVFVRVNUX1NVQ0NFU1MiLCJGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9GQUlMVVJFIiwidmVyaWZ5VG9rZW5SZXF1ZXN0IiwidG9rZW4iLCJyb2xlIiwidmVyaWZ5VG9rZW5SZXF1ZXN0U3VjY2VzcyIsInZlcmlmeVRva2VuUmVxdWVzdEZhaWx1cmUiLCJmZXRjaFVzZXJJbmZvIiwiZmV0Y2hVc2VySW5mb1N1Y2Nlc3MiLCJmZXRjaFVzZXJJbmZvRmFpbHVyZSIsIkZFVENIX0FMTERFQkFURVNfUkVRVUVTVCIsIkZFVENIX0FMTERFQkFURVNfU1VDQ0VTUyIsIkZFVENIX0FMTERFQkFURVNfRkFJTFVSRSIsIkZFVENIX0RFQkFURV9SRVFVRVNUIiwiRkVUQ0hfREVCQVRFX1NVQ0NFU1MiLCJGRVRDSF9ERUJBVEVfRkFJTFVSRSIsIlNFVF9ERUJBVEVfUkVRVUVTVCIsIlNFVF9ERUJBVEVfU1VDQ0VTUyIsIlNFVF9ERUJBVEVfRkFJTFVSRSIsIkNSRUFURV9ERUJBVEVfUkVRVUVTVCIsIkNSRUFURV9ERUJBVEVfU1VDQ0VTUyIsIkNSRUFURV9ERUJBVEVfRkFJTFVSRSIsIlVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1JFUVVFU1QiLCJVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9TVUNDRVNTIiwiVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfRkFJTFVSRSIsIlVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfUkVRVUVTVCIsIlVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfU1VDQ0VTUyIsIlVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfRkFJTFVSRSIsIlVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1JFUVVFU1QiLCJVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19TVUNDRVNTIiwiVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfRkFJTFVSRSIsImZldGNoRGViYXRlc1JlcXVlc3QiLCJmZXRjaERlYmF0ZXNTdWNjZXNzIiwiZGViYXRlcyIsImZldGNoRGViYXRlc0ZhaWx1cmUiLCJzZXREZWJhdGVSZXF1ZXN0IiwiZGViYXRlIiwiZmV0Y2hEZWJhdGVSZXF1ZXN0IiwiZmV0Y2hEZWJhdGVTdWNjZXNzIiwiZmV0Y2hEZWJhdGVGYWlsdXJlIiwiY3JlYXRlRGViYXRlUmVxdWVzdCIsInNsdWciLCJkZWJhdGVUeXBlIiwibGFuZ3VhZ2VzIiwiY3JlYXRlRGViYXRlU3VjY2VzcyIsImNyZWF0ZURlYmF0ZUZhaWx1cmUiLCJ1cGRhdGVMYW5kaW5nUGFnZUhlYWRlclJlcXVlc3QiLCJkZWJhdGVJRCIsImhlYWRlciIsInVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyU3VjY2VzcyIsInVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyRmFpbHVyZSIsInVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdSZXF1ZXN0Iiwib3ZlcnZpZXciLCJ1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3U3VjY2VzcyIsInVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdGYWlsdXJlIiwidXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNSZXF1ZXN0IiwidGhlbWVzIiwidXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNTdWNjZXNzIiwidXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNGYWlsdXJlIiwiRkVUQ0hfTU9EVUxFX1JFUVVFU1QiLCJGRVRDSF9NT0RVTEVfU1VDQ0VTUyIsIkZFVENIX01PRFVMRV9GQUlMVVJFIiwiZmV0Y2hNb2R1bGVSZXF1ZXN0IiwiaWQiLCJmZXRjaE1vZHVsZVN1Y2Nlc3MiLCJtb2R1bGUiLCJmZXRjaE1vZHVsZUZhaWx1cmUiLCJGRVRDSF9QT1NUU19SRVFVRVNUIiwiRkVUQ0hfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1BPU1RTX0ZBSUxVUkUiLCJmZXRjaFBvc3RzUmVxdWVzdCIsImFjY291bnRJZCIsImZldGNoUG9zdHNTdWNjZXNzIiwicG9zdHMiLCJmZXRjaFBvc3RzRmFpbHVyZSIsIndpdGhUcmFuc2xhdGlvbiIsIm5leHRJMThOZXh0SW5zdGFuY2UiLCJnZXRDdXJyZW50TGFuZyIsImkxOG4iLCJsYW5ndWFnZSIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRvb2xiYXJTZWNvbmRhcnkiLCJqdXN0aWZ5Q29udGVudCIsIm92ZXJmbG93WCIsImxpbmtTZWxlY3RlZCIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJsaW5rIiwiRm9vdGVyIiwiY2xhc3NlcyIsInNlbGVjdGVkIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwiaWR4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZsb3dSaWdodCIsInRvb2xiYXIiLCJib3JkZXJCb3R0b20iLCJkaXZpZGVyIiwidG9vbGJhclRpdGxlIiwiZmxleCIsIndpZHRoIiwidG9vbGJhckxpbmsiLCJmbGV4U2hyaW5rIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJzaGFyZU9wZW4iLCJzZXRTaGFyZU9wZW4iLCJmaXJzdE5hbWVEaXNwbGF5Iiwic2V0Rmlyc3ROYW1lRGlzcGxheSIsInQiLCJoYW5kbGVTaGFyZUNsb3NlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImZpcnN0TmFtZUxvY2FsU3RvcmFnZSIsInVzZVNlbGVjdG9yIiwiYXV0aCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaXNWYWxpZFRva2VuIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNoYXJlIiwiYXJyYXkiLCJyb290IiwiZmxleEdyb3ciLCJjb250ZW50IiwiTWFpbiIsInRvcFBvc3QiLCJ0b3BQb3N0TGluayIsInVzZXIiLCJhdmF0YXIiLCJ0aW1lc3RhbXAiLCJfX2h0bWwiLCJjb250ZW50cyIsIm1haW5GZWF0dXJlZFBvc3QiLCJwb3NpdGlvbiIsImdyZXkiLCJjb21tb24iLCJ3aGl0ZSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJsYXkiLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJtYWluRmVhdHVyZWRQb3N0Q29udGVudCIsImJyZWFrcG9pbnRzIiwidXAiLCJwYWRkaW5nUmlnaHQiLCJPdmVydmlldyIsImRpc3BsYXkiLCJsaW5rVGV4dCIsInBvc3QiLCJuZXR3b3JrIiwic2hhcmVDb3VudCIsIm5ldHdvcmtTaGFyZUJ1dHRvbiIsIlRyYW5zaXRpb24iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJTaGFyZSIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsInNoYXJlVXJsIiwiY291bnQiLCJzaWRlYmFyQWJvdXRCb3giLCJzaWRlYmFyU2VjdGlvbiIsIm1hcmdpblRvcCIsIlNpZGViYXIiLCJzb2NpYWwiLCJjYXJkIiwiY2FyZERldGFpbHMiLCJjYXJkTWVkaWEiLCJUaGVtZSIsIm1vZHVsZXMiLCJtb2R1bGVUeXBlIiwiaW1hZ2VUZXh0IiwiaW1hZ2UiLCJtYXJnaW5SaWdodCIsIlVzZXJNZW51Iiwic2V0T3BlbiIsImFuY2hvclJlZiIsInVzZVJlZiIsImhhbmRsZVRvZ2dsZSIsInByZXZPcGVuIiwiY29udGFpbnMiLCJoYW5kbGVMaXN0S2V5RG93biIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsImNsZWFyIiwibWFpbkdyaWQiLCJIb21lIiwiZGViYXRlU2VydmVyIiwiaW5pdCIsInNpdGVJZCIsInRyYWNraW5nSWQiLCJtZXRhVGFncyIsInRhZyIsInR5cGV2YWx1ZSIsInNpZGViYXIiLCJhYm91dCIsInJlcSIsImNvbmZpZyIsImFwaSIsImhlYWRlcnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNaRjtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNUOztBQUU5QjtBQUNBLFNBQVMsNkJBQTZCO0FBQ3RDLENBQUMsR0FBRywrQ0FBTTs7QUFFVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksbURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsRUFBQzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUM7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7QUNKQSxxQkFBcUIsbUJBQU8sQ0FBQyxrRkFBa0I7O0FBRS9DLDJCQUEyQixtQkFBTyxDQUFDLDhGQUF3Qjs7QUFFM0Qsc0JBQXNCLG1CQUFPLENBQUMsb0ZBQW1COztBQUVqRDtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLHVJQUFELENBQWxDOztBQUFtRixJQUFJQyx1QkFBdUIsR0FBQ0QsbUJBQU8sQ0FBQyx5SUFBRCxDQUFuQzs7QUFBcUZFLE9BQU8sQ0FBQ0MsVUFBUixHQUFtQixJQUFuQjtBQUF3QkQsT0FBTyxDQUFDRSxPQUFSLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0osdUJBQXVCLENBQUNELG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFsQzs7QUFBcUQsSUFBSU0sSUFBSSxHQUFDTixtQkFBTyxDQUFDLGdCQUFELENBQWhCOztBQUF3QixJQUFJTyxNQUFNLEdBQUNQLG1CQUFPLENBQUMsMERBQUQsQ0FBbEI7O0FBQStDLElBQUlRLE9BQU8sR0FBQ1Qsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNERBQUQsQ0FBUixDQUFsQzs7QUFBd0QsSUFBSVMsUUFBUSxHQUFDVCxtQkFBTyxDQUFDLG9HQUFELENBQXBCOztBQUF5RCxTQUFTVSxPQUFULENBQWlCQyxJQUFqQixFQUFzQjtBQUFDLE1BQUlDLEdBQUcsR0FBQyxDQUFDLEdBQUVOLElBQUksQ0FBQ08sS0FBUixFQUFlRixJQUFmLEVBQW9CLEtBQXBCLEVBQTBCLElBQTFCLENBQVI7QUFBd0MsTUFBSUcsTUFBTSxHQUFDLENBQUMsR0FBRVIsSUFBSSxDQUFDTyxLQUFSLEVBQWUsQ0FBQyxHQUFFTixNQUFNLENBQUNRLGlCQUFWLEdBQWYsRUFBOEMsS0FBOUMsRUFBb0QsSUFBcEQsQ0FBWDtBQUFxRSxTQUFNLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxJQUFXSixHQUFHLENBQUNLLFFBQUosS0FBZUgsTUFBTSxDQUFDRyxRQUF0QixJQUFnQ0wsR0FBRyxDQUFDSSxJQUFKLEtBQVdGLE1BQU0sQ0FBQ0UsSUFBbkU7QUFBeUU7O0FBQUEsU0FBU0UsaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXNDO0FBQUMsTUFBSUMsUUFBUSxHQUFDLElBQWI7QUFBa0IsTUFBSUMsTUFBTSxHQUFDLElBQVg7QUFBZ0IsTUFBSUMsVUFBVSxHQUFDLElBQWY7QUFBb0IsU0FBTSxDQUFDWCxJQUFELEVBQU1ZLEVBQU4sS0FBVztBQUFDLFFBQUdELFVBQVUsSUFBRVgsSUFBSSxLQUFHUyxRQUFuQixJQUE2QkcsRUFBRSxLQUFHRixNQUFyQyxFQUE0QztBQUFDLGFBQU9DLFVBQVA7QUFBbUI7O0FBQUEsUUFBSUUsTUFBTSxHQUFDTCxVQUFVLENBQUNSLElBQUQsRUFBTVksRUFBTixDQUFyQjtBQUErQkgsWUFBUSxHQUFDVCxJQUFUO0FBQWNVLFVBQU0sR0FBQ0UsRUFBUDtBQUFVRCxjQUFVLEdBQUNFLE1BQVg7QUFBa0IsV0FBT0EsTUFBUDtBQUFlLEdBQTFLO0FBQTRLOztBQUFBLFNBQVNDLFNBQVQsQ0FBbUJiLEdBQW5CLEVBQXVCO0FBQUMsU0FBT0EsR0FBRyxJQUFFLE9BQU9BLEdBQVAsS0FBYSxRQUFsQixHQUEyQixDQUFDLEdBQUVMLE1BQU0sQ0FBQ21CLG9CQUFWLEVBQWdDZCxHQUFoQyxDQUEzQixHQUFnRUEsR0FBdkU7QUFBNEU7O0FBQUEsSUFBSWUsUUFBSjtBQUFhLElBQUlDLFNBQVMsR0FBQyxJQUFJQyxHQUFKLEVBQWQ7QUFBd0IsSUFBSUMsb0JBQW9CLEdBQUMsUUFBNEJDLFNBQTVCLEdBQXdELElBQWpGO0FBQXNGLElBQUlDLFVBQVUsR0FBQyxFQUFmOztBQUFrQixTQUFTQyxXQUFULEdBQXNCO0FBQUM7QUFDL3FDLE1BQUdOLFFBQUgsRUFBWTtBQUFDLFdBQU9BLFFBQVA7QUFBaUIsR0FEZ3BDLENBQ2hwQzs7O0FBQzlCLE1BQUcsQ0FBQ0csb0JBQUosRUFBeUI7QUFBQyxXQUFPSSxTQUFQO0FBQWtCOztBQUFBLFNBQU9QLFFBQVEsR0FBQyxJQUFJRyxvQkFBSixDQUF5QkssT0FBTyxJQUFFO0FBQUNBLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQkMsS0FBSyxJQUFFO0FBQUMsVUFBRyxDQUFDVCxTQUFTLENBQUNVLEdBQVYsQ0FBY0QsS0FBSyxDQUFDRSxNQUFwQixDQUFKLEVBQWdDO0FBQUM7QUFBUTs7QUFBQSxVQUFJQyxFQUFFLEdBQUNaLFNBQVMsQ0FBQ2EsR0FBVixDQUFjSixLQUFLLENBQUNFLE1BQXBCLENBQVA7O0FBQW1DLFVBQUdGLEtBQUssQ0FBQ0ssY0FBTixJQUFzQkwsS0FBSyxDQUFDTSxpQkFBTixHQUF3QixDQUFqRCxFQUFtRDtBQUFDaEIsZ0JBQVEsQ0FBQ2lCLFNBQVQsQ0FBbUJQLEtBQUssQ0FBQ0UsTUFBekI7QUFBaUNYLGlCQUFTLENBQUNpQixNQUFWLENBQWlCUixLQUFLLENBQUNFLE1BQXZCO0FBQStCQyxVQUFFO0FBQUk7QUFBQyxLQUEvTjtBQUFrTyxHQUFyUSxFQUFzUTtBQUFDTSxjQUFVLEVBQUM7QUFBWixHQUF0USxDQUFoQjtBQUE2Uzs7QUFBQSxJQUFJQyxxQkFBcUIsR0FBQyxDQUFDQyxFQUFELEVBQUlSLEVBQUosS0FBUztBQUFDLE1BQUliLFFBQVEsR0FBQ00sV0FBVyxFQUF4Qjs7QUFBMkIsTUFBRyxDQUFDTixRQUFKLEVBQWE7QUFBQyxXQUFNLE1BQUksQ0FBRSxDQUFaO0FBQWM7O0FBQUFBLFVBQVEsQ0FBQ3NCLE9BQVQsQ0FBaUJELEVBQWpCO0FBQXFCcEIsV0FBUyxDQUFDc0IsR0FBVixDQUFjRixFQUFkLEVBQWlCUixFQUFqQjtBQUFxQixTQUFNLE1BQUk7QUFBQyxRQUFHO0FBQUNiLGNBQVEsQ0FBQ2lCLFNBQVQsQ0FBbUJJLEVBQW5CO0FBQXdCLEtBQTVCLENBQTRCLE9BQU1HLEdBQU4sRUFBVTtBQUFDQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFvQjs7QUFBQXZCLGFBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJHLEVBQWpCO0FBQXNCLEdBQTVGO0FBQThGLENBQW5POztBQUFvTyxNQUFNTSxJQUFOLFNBQW1CakQsTUFBTSxDQUFDa0QsU0FBMUIsQ0FBbUM7QUFBQ0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFBQyxVQUFNQSxLQUFOO0FBQWEsU0FBS0MsQ0FBTCxHQUFPLEtBQUssQ0FBWjs7QUFBYyxTQUFLQyxnQkFBTCxHQUFzQixNQUFJLENBQUUsQ0FBNUI7O0FBQTZCLFNBQUtDLFVBQUwsR0FBZ0IxQyxpQkFBaUIsQ0FBQyxDQUFDUCxJQUFELEVBQU1rRCxNQUFOLEtBQWU7QUFBQyxhQUFNO0FBQUNsRCxZQUFJLEVBQUMsQ0FBQyxHQUFFRixRQUFRLENBQUNxRCxXQUFaLEVBQXlCckMsU0FBUyxDQUFDZCxJQUFELENBQWxDLENBQU47QUFBZ0RZLFVBQUUsRUFBQ3NDLE1BQU0sR0FBQyxDQUFDLEdBQUVwRCxRQUFRLENBQUNxRCxXQUFaLEVBQXlCckMsU0FBUyxDQUFDb0MsTUFBRCxDQUFsQyxDQUFELEdBQTZDQTtBQUF0RyxPQUFOO0FBQXFILEtBQXRJLENBQWpDOztBQUF5SyxTQUFLRSxXQUFMLEdBQWlCQyxDQUFDLElBQUU7QUFBQyxVQUFHO0FBQUNDLGdCQUFEO0FBQVUxQjtBQUFWLFVBQWtCeUIsQ0FBQyxDQUFDRSxhQUF2Qjs7QUFBcUMsVUFBR0QsUUFBUSxLQUFHLEdBQVgsS0FBaUIxQixNQUFNLElBQUVBLE1BQU0sS0FBRyxPQUFqQixJQUEwQnlCLENBQUMsQ0FBQ0csT0FBNUIsSUFBcUNILENBQUMsQ0FBQ0ksT0FBdkMsSUFBZ0RKLENBQUMsQ0FBQ0ssUUFBbEQsSUFBNERMLENBQUMsQ0FBQ00sV0FBRixJQUFlTixDQUFDLENBQUNNLFdBQUYsQ0FBY0MsS0FBZCxLQUFzQixDQUFsSCxDQUFILEVBQXdIO0FBQUM7QUFDeGdDO0FBQVE7O0FBQUEsVUFBRztBQUFDNUQsWUFBRDtBQUFNWTtBQUFOLFVBQVUsS0FBS3FDLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXOUMsSUFBM0IsRUFBZ0MsS0FBSzhDLEtBQUwsQ0FBV2xDLEVBQTNDLENBQWI7O0FBQTRELFVBQUcsQ0FBQ2IsT0FBTyxDQUFDQyxJQUFELENBQVgsRUFBa0I7QUFBQztBQUN2RjtBQUFROztBQUFBLFVBQUc7QUFBQzZEO0FBQUQsVUFBV3pDLE1BQU0sQ0FBQzBDLFFBQXJCO0FBQThCOUQsVUFBSSxHQUFDLENBQUMsR0FBRUwsSUFBSSxDQUFDb0UsT0FBUixFQUFpQkYsUUFBakIsRUFBMEI3RCxJQUExQixDQUFMO0FBQXFDWSxRQUFFLEdBQUNBLEVBQUUsR0FBQyxDQUFDLEdBQUVqQixJQUFJLENBQUNvRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQmpELEVBQTFCLENBQUQsR0FBK0JaLElBQXBDO0FBQXlDcUQsT0FBQyxDQUFDVyxjQUFGLEdBRnF2QixDQUVsdUI7O0FBQ3ZJLFVBQUc7QUFBQ0M7QUFBRCxVQUFTLEtBQUtuQixLQUFqQjs7QUFBdUIsVUFBR21CLE1BQU0sSUFBRSxJQUFYLEVBQWdCO0FBQUNBLGNBQU0sR0FBQ3JELEVBQUUsQ0FBQ3NELE9BQUgsQ0FBVyxHQUFYLElBQWdCLENBQXZCO0FBQTBCLE9BSHV5QixDQUd2eUI7OztBQUNsRXJFLGFBQU8sQ0FBQ0osT0FBUixDQUFnQixLQUFLcUQsS0FBTCxDQUFXcUIsT0FBWCxHQUFtQixTQUFuQixHQUE2QixNQUE3QyxFQUFxRG5FLElBQXJELEVBQTBEWSxFQUExRCxFQUE2RDtBQUFDd0QsZUFBTyxFQUFDLEtBQUt0QixLQUFMLENBQVdzQjtBQUFwQixPQUE3RCxFQUEyRkMsSUFBM0YsQ0FBZ0dDLE9BQU8sSUFBRTtBQUFDLFlBQUcsQ0FBQ0EsT0FBSixFQUFZOztBQUFPLFlBQUdMLE1BQUgsRUFBVTtBQUFDN0MsZ0JBQU0sQ0FBQ21ELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFBcUJDLGtCQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZDtBQUF1QjtBQUFDLE9BQXJMO0FBQXdMLEtBSjZwQjs7QUFJNXBCLGNBQXVDO0FBQUMsVUFBRzVCLEtBQUssQ0FBQzZCLFFBQVQsRUFBa0I7QUFBQ2xDLGVBQU8sQ0FBQ21DLElBQVIsQ0FBYSxpS0FBYjtBQUFpTDtBQUFDOztBQUFBLFNBQUs3QixDQUFMLEdBQU9ELEtBQUssQ0FBQzZCLFFBQU4sS0FBaUIsS0FBeEI7QUFBK0I7O0FBQUFFLHNCQUFvQixHQUFFO0FBQUMsU0FBSzdCLGdCQUFMO0FBQXlCOztBQUFBOEIsVUFBUSxHQUFFO0FBQUMsUUFBRztBQUFDakI7QUFBRCxRQUFXekMsTUFBTSxDQUFDMEMsUUFBckI7QUFBOEIsUUFBRztBQUFDOUQsVUFBSSxFQUFDK0UsVUFBTjtBQUFpQm5FLFFBQUUsRUFBQ29FO0FBQXBCLFFBQThCLEtBQUsvQixVQUFMLENBQWdCLEtBQUtILEtBQUwsQ0FBVzlDLElBQTNCLEVBQWdDLEtBQUs4QyxLQUFMLENBQVdsQyxFQUEzQyxDQUFqQztBQUFnRixRQUFJcUUsWUFBWSxHQUFDLENBQUMsR0FBRXRGLElBQUksQ0FBQ29FLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCa0IsVUFBMUIsQ0FBakI7QUFBdUQsV0FBTSxDQUFDRSxZQUFELEVBQWNELFFBQVEsR0FBQyxDQUFDLEdBQUVyRixJQUFJLENBQUNvRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQm1CLFFBQTFCLENBQUQsR0FBcUNDLFlBQTNELENBQU47QUFBZ0Y7O0FBQUFDLFdBQVMsQ0FBQ0MsR0FBRCxFQUFLO0FBQUMsUUFBRyxLQUFLcEMsQ0FBTCxJQUFRNUIsb0JBQVIsSUFBOEJnRSxHQUE5QixJQUFtQ0EsR0FBRyxDQUFDQyxPQUExQyxFQUFrRDtBQUFDLFdBQUtwQyxnQkFBTDtBQUF3QixVQUFJcUMsWUFBWSxHQUFDaEUsVUFBVSxDQUFDLEtBQUt5RCxRQUFMLEdBQWdCUSxJQUFoQixFQUFxQjtBQUNoNEIsU0FEMjJCLENBQUQsQ0FBM0I7O0FBQ3owQixVQUFHLENBQUNELFlBQUosRUFBaUI7QUFBQyxhQUFLckMsZ0JBQUwsR0FBc0JaLHFCQUFxQixDQUFDK0MsR0FBRCxFQUFLLE1BQUk7QUFBQyxlQUFLUixRQUFMO0FBQWlCLFNBQTNCLENBQTNDO0FBQXlFO0FBQUM7QUFBQyxHQUw2ZixDQUs3ZjtBQUNuRzs7O0FBQ0FBLFVBQVEsQ0FBQ1ksT0FBRCxFQUFTO0FBQUMsUUFBRyxDQUFDLEtBQUt4QyxDQUFOLFFBQUgsRUFBd0MsT0FBekMsQ0FBZ0Q7O0FBQ2pFLFFBQUl5QyxLQUFLLEdBQUMsS0FBS1YsUUFBTCxFQUFWLENBRGlCLENBQ1M7QUFDMUI7QUFDQTs7QUFDQWpGLFdBQU8sQ0FBQ0osT0FBUixDQUFnQmtGLFFBQWhCLENBQXlCYSxLQUFLO0FBQUM7QUFBVSxLQUFYLENBQTlCLEVBQTRDQSxLQUFLO0FBQUM7QUFBWSxLQUFiLENBQWpELEVBQWlFRCxPQUFqRSxFQUEwRUUsS0FBMUUsQ0FBZ0ZqRCxHQUFHLElBQUU7QUFBQyxnQkFBdUM7QUFBQztBQUM5SCxjQUFNQSxHQUFOO0FBQVc7QUFBQyxLQURaOztBQUNjbkIsY0FBVSxDQUFDbUUsS0FBSyxDQUFDRixJQUFOLEVBQVc7QUFDcEMsT0FEeUIsQ0FBRCxDQUFWLEdBQ1IsSUFEUTtBQUNGOztBQUFBSSxRQUFNLEdBQUU7QUFBQyxRQUFHO0FBQUNDO0FBQUQsUUFBVyxLQUFLN0MsS0FBbkI7QUFBeUIsUUFBRztBQUFDOUMsVUFBRDtBQUFNWTtBQUFOLFFBQVUsS0FBS3FDLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXOUMsSUFBM0IsRUFBZ0MsS0FBSzhDLEtBQUwsQ0FBV2xDLEVBQTNDLENBQWIsQ0FBMUIsQ0FBc0Y7O0FBQzFHLFFBQUcsT0FBTytFLFFBQVAsS0FBa0IsUUFBckIsRUFBOEI7QUFBQ0EsY0FBUSxHQUFDLGFBQWFqRyxNQUFNLENBQUNELE9BQVAsQ0FBZW1HLGFBQWYsQ0FBNkIsR0FBN0IsRUFBaUMsSUFBakMsRUFBc0NELFFBQXRDLENBQXRCO0FBQXVFLEtBRGxGLENBQ2tGOzs7QUFDdEcsUUFBSUUsS0FBSyxHQUFDbkcsTUFBTSxDQUFDb0csUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJKLFFBQXJCLENBQVY7O0FBQXlDLFFBQUk3QyxLQUFLLEdBQUM7QUFBQ3FDLFNBQUcsRUFBQzlDLEVBQUUsSUFBRTtBQUFDLGFBQUs2QyxTQUFMLENBQWU3QyxFQUFmOztBQUFtQixZQUFHd0QsS0FBSyxJQUFFLE9BQU9BLEtBQVAsS0FBZSxRQUF0QixJQUFnQ0EsS0FBSyxDQUFDVixHQUF6QyxFQUE2QztBQUFDLGNBQUcsT0FBT1UsS0FBSyxDQUFDVixHQUFiLEtBQW1CLFVBQXRCLEVBQWlDVSxLQUFLLENBQUNWLEdBQU4sQ0FBVTlDLEVBQVYsRUFBakMsS0FBb0QsSUFBRyxPQUFPd0QsS0FBSyxDQUFDVixHQUFiLEtBQW1CLFFBQXRCLEVBQStCO0FBQUNVLGlCQUFLLENBQUNWLEdBQU4sQ0FBVWEsT0FBVixHQUFrQjNELEVBQWxCO0FBQXNCO0FBQUM7QUFBQyxPQUF2TDtBQUF3TDRELGtCQUFZLEVBQUM1QyxDQUFDLElBQUU7QUFBQyxZQUFHd0MsS0FBSyxDQUFDL0MsS0FBTixJQUFhLE9BQU8rQyxLQUFLLENBQUMvQyxLQUFOLENBQVltRCxZQUFuQixLQUFrQyxVQUFsRCxFQUE2RDtBQUFDSixlQUFLLENBQUMvQyxLQUFOLENBQVltRCxZQUFaLENBQXlCNUMsQ0FBekI7QUFBNkI7O0FBQUEsYUFBS3NCLFFBQUwsQ0FBYztBQUFDdUIsa0JBQVEsRUFBQztBQUFWLFNBQWQ7QUFBZ0MsT0FBcFU7QUFBcVVDLGFBQU8sRUFBQzlDLENBQUMsSUFBRTtBQUFDLFlBQUd3QyxLQUFLLENBQUMvQyxLQUFOLElBQWEsT0FBTytDLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWXFELE9BQW5CLEtBQTZCLFVBQTdDLEVBQXdEO0FBQUNOLGVBQUssQ0FBQy9DLEtBQU4sQ0FBWXFELE9BQVosQ0FBb0I5QyxDQUFwQjtBQUF3Qjs7QUFBQSxZQUFHLENBQUNBLENBQUMsQ0FBQytDLGdCQUFOLEVBQXVCO0FBQUMsZUFBS2hELFdBQUwsQ0FBaUJDLENBQWpCO0FBQXFCO0FBQUM7QUFBaGQsS0FBVixDQUZyQixDQUVpZjtBQUNyZ0I7O0FBQ0EsUUFBRyxLQUFLUCxLQUFMLENBQVd1RCxRQUFYLElBQXFCUixLQUFLLENBQUNTLElBQU4sS0FBYSxHQUFiLElBQWtCLEVBQUUsVUFBU1QsS0FBSyxDQUFDL0MsS0FBakIsQ0FBMUMsRUFBa0U7QUFBQ0EsV0FBSyxDQUFDOUMsSUFBTixHQUFXWSxFQUFFLElBQUVaLElBQWY7QUFBcUIsS0FKcEUsQ0FJb0U7QUFDeEY7OztBQUNBLFFBQUd1RyxLQUFILEVBQTRDLGdDQUErTzs7QUFBQSxXQUFPN0csTUFBTSxDQUFDRCxPQUFQLENBQWUrRyxZQUFmLENBQTRCWCxLQUE1QixFQUFrQy9DLEtBQWxDLENBQVA7QUFBaUQ7O0FBbkJvUjs7QUFtQm5SLFVBQXdDO0FBQUMsTUFBSThCLElBQUksR0FBQyxDQUFDLEdBQUVoRixNQUFNLENBQUM2RyxRQUFWLEVBQW9CaEUsT0FBTyxDQUFDQyxLQUE1QixDQUFULENBQUQsQ0FBNkM7O0FBQ2xhLE1BQUlnRSxTQUFTLEdBQUNySCxtQkFBTyxDQUFDLDhCQUFELENBQXJCOztBQUFvQyxNQUFJc0gsS0FBSyxHQUFDdEgsbUJBQU8sQ0FBQywwQ0FBRCxDQUFqQixDQURpVixDQUMzUzs7O0FBQzFFc0QsTUFBSSxDQUFDaUUsU0FBTCxHQUFlRCxLQUFLLENBQUM7QUFBQzNHLFFBQUksRUFBQzBHLFNBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxTQUFTLENBQUNJLE1BQVgsRUFBa0JKLFNBQVMsQ0FBQ0ssTUFBNUIsQ0FBcEIsRUFBeURDLFVBQS9EO0FBQTBFcEcsTUFBRSxFQUFDOEYsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksTUFBWCxFQUFrQkosU0FBUyxDQUFDSyxNQUE1QixDQUFwQixDQUE3RTtBQUFzSXBDLFlBQVEsRUFBQytCLFNBQVMsQ0FBQ08sSUFBeko7QUFBOEo5QyxXQUFPLEVBQUN1QyxTQUFTLENBQUNPLElBQWhMO0FBQXFMN0MsV0FBTyxFQUFDc0MsU0FBUyxDQUFDTyxJQUF2TTtBQUE0TVosWUFBUSxFQUFDSyxTQUFTLENBQUNPLElBQS9OO0FBQW9PaEQsVUFBTSxFQUFDeUMsU0FBUyxDQUFDTyxJQUFyUDtBQUEwUHRCLFlBQVEsRUFBQ2UsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ1EsT0FBWCxFQUFtQixDQUFDcEUsS0FBRCxFQUFPcUUsUUFBUCxLQUFrQjtBQUFDLFVBQUlDLEtBQUssR0FBQ3RFLEtBQUssQ0FBQ3FFLFFBQUQsQ0FBZjs7QUFBMEIsVUFBRyxPQUFPQyxLQUFQLEtBQWUsUUFBbEIsRUFBMkI7QUFBQ3hDLFlBQUksQ0FBQyxpSUFBRCxDQUFKO0FBQXlJOztBQUFBLGFBQU8sSUFBUDtBQUFhLEtBQWxQLENBQXBCLEVBQXlRb0M7QUFBNWdCLEdBQUQsQ0FBcEI7QUFBK2lCOztBQUFBLElBQUlLLFFBQVEsR0FBQzFFLElBQWI7QUFBa0JwRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0I0SCxRQUFoQixDOzs7Ozs7Ozs7Ozs7QUN2QnBqQjs7QUFBQSxJQUFJL0gsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMseUlBQUQsQ0FBbkM7O0FBQXFGLElBQUlELHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLHVJQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUMrSCxTQUFSLEdBQWtCQSxTQUFsQjtBQUE0Qi9ILE9BQU8sQ0FBQ2dJLHdCQUFSLEdBQWlDQSx3QkFBakM7QUFBMERoSSxPQUFPLENBQUNpSSxZQUFSLEdBQXFCakksT0FBTyxDQUFDa0ksVUFBUixHQUFtQmxJLE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQTdEOztBQUErRCxJQUFJQyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlTLFFBQVEsR0FBQ1IsdUJBQXVCLENBQUNELG1CQUFPLENBQUMsb0dBQUQsQ0FBUixDQUFwQzs7QUFBa0ZFLE9BQU8sQ0FBQ21JLE1BQVIsR0FBZTVILFFBQVEsQ0FBQ0wsT0FBeEI7QUFBZ0NGLE9BQU8sQ0FBQ29JLFVBQVIsR0FBbUI3SCxRQUFRLENBQUM2SCxVQUE1Qjs7QUFBdUMsSUFBSUMsY0FBYyxHQUFDdkksbUJBQU8sQ0FBQyw0RUFBRCxDQUExQjs7QUFBZ0UsSUFBSXdJLFdBQVcsR0FBQ3pJLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHNFQUFELENBQVIsQ0FBdEM7O0FBQWlFRSxPQUFPLENBQUNrSSxVQUFSLEdBQW1CSSxXQUFXLENBQUNwSSxPQUEvQjtBQUF1Qzs7QUFBbUIsSUFBSXFJLGVBQWUsR0FBQztBQUFDQyxRQUFNLEVBQUMsSUFBUjtBQUFhO0FBQzN3QkMsZ0JBQWMsRUFBQyxFQUQrdUI7O0FBQzV1QkMsT0FBSyxDQUFDcEcsRUFBRCxFQUFJO0FBQUMsUUFBRyxLQUFLa0csTUFBUixFQUFlLE9BQU9sRyxFQUFFLEVBQVQ7O0FBQVksZUFBK0IsRUFBK0I7QUFBQzs7QUFEd29CLENBQXBCLEMsQ0FDbG5COztBQUN4SCxJQUFJcUcsaUJBQWlCLEdBQUMsQ0FBQyxVQUFELEVBQVksT0FBWixFQUFvQixPQUFwQixFQUE0QixRQUE1QixFQUFxQyxZQUFyQyxFQUFrRCxZQUFsRCxFQUErRCxVQUEvRCxDQUF0QjtBQUFpRyxJQUFJQyxZQUFZLEdBQUMsQ0FBQyxrQkFBRCxFQUFvQixxQkFBcEIsRUFBMEMscUJBQTFDLEVBQWdFLGtCQUFoRSxFQUFtRixpQkFBbkYsRUFBcUcsb0JBQXJHLENBQWpCO0FBQTRJLElBQUlDLGdCQUFnQixHQUFDLENBQUMsTUFBRCxFQUFRLFNBQVIsRUFBa0IsUUFBbEIsRUFBMkIsTUFBM0IsRUFBa0MsVUFBbEMsRUFBNkMsZ0JBQTdDLENBQXJCLEMsQ0FBb0Y7O0FBQ2pVQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JSLGVBQXRCLEVBQXNDLFFBQXRDLEVBQStDO0FBQUNoRyxLQUFHLEdBQUU7QUFBQyxXQUFPaEMsUUFBUSxDQUFDTCxPQUFULENBQWlCOEksTUFBeEI7QUFBZ0M7O0FBQXZDLENBQS9DO0FBQXlGTCxpQkFBaUIsQ0FBQ3pHLE9BQWxCLENBQTBCK0csS0FBSyxJQUFFO0FBQUM7QUFDM0g7QUFDQTtBQUNBO0FBQ0FILFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQlIsZUFBdEIsRUFBc0NVLEtBQXRDLEVBQTRDO0FBQUMxRyxPQUFHLEdBQUU7QUFBQyxVQUFJaUcsTUFBTSxHQUFDVSxTQUFTLEVBQXBCO0FBQXVCLGFBQU9WLE1BQU0sQ0FBQ1MsS0FBRCxDQUFiO0FBQXNCOztBQUFwRCxHQUE1QztBQUFvRyxDQUpYO0FBSWFKLGdCQUFnQixDQUFDM0csT0FBakIsQ0FBeUIrRyxLQUFLLElBQUU7QUFBQztBQUN2STs7QUFBQ1YsaUJBQWUsQ0FBQ1UsS0FBRCxDQUFmLEdBQXVCLFlBQVU7QUFBQyxRQUFJVCxNQUFNLEdBQUNVLFNBQVMsRUFBcEI7QUFBdUIsV0FBT1YsTUFBTSxDQUFDUyxLQUFELENBQU4sQ0FBYyxHQUFHRSxTQUFqQixDQUFQO0FBQW9DLEdBQTdGO0FBQStGLENBRE07QUFDSlAsWUFBWSxDQUFDMUcsT0FBYixDQUFxQmtILEtBQUssSUFBRTtBQUFDYixpQkFBZSxDQUFDRyxLQUFoQixDQUFzQixNQUFJO0FBQUNuSSxZQUFRLENBQUNMLE9BQVQsQ0FBaUI4SSxNQUFqQixDQUF3QkssRUFBeEIsQ0FBMkJELEtBQTNCLEVBQWlDLFlBQVU7QUFBQyxVQUFJRSxVQUFVLEdBQUMsT0FBS0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFBTCxHQUFtQ0osS0FBSyxDQUFDSyxTQUFOLENBQWdCLENBQWhCLENBQWxEO0FBQXFFLFVBQUlDLGdCQUFnQixHQUFDbkIsZUFBckI7O0FBQXFDLFVBQUdtQixnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFuQixFQUFnQztBQUFDLFlBQUc7QUFBQ0ksMEJBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBR0gsU0FBaEM7QUFBNEMsU0FBaEQsQ0FBZ0QsT0FBTWxHLEdBQU4sRUFBVTtBQUFDO0FBQzVZQyxpQkFBTyxDQUFDQyxLQUFSLENBQWMsMENBQXdDbUcsVUFBdEQsRUFEMlksQ0FDelU7O0FBQ2xFcEcsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFHLENBQUMwRyxPQUFKLEdBQVksSUFBWixHQUFpQjFHLEdBQUcsQ0FBQzJHLEtBQW5DO0FBQTJDO0FBQUM7QUFBQyxLQUY2RztBQUUxRyxHQUYrRTtBQUU1RSxDQUYrQzs7QUFFN0MsU0FBU1YsU0FBVCxHQUFvQjtBQUFDLE1BQUcsQ0FBQ1gsZUFBZSxDQUFDQyxNQUFwQixFQUEyQjtBQUFDLFFBQUltQixPQUFPLEdBQUMsZ0NBQThCLHlFQUExQztBQUFvSCxVQUFNLElBQUlFLEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQTBCOztBQUFBLFNBQU9wQixlQUFlLENBQUNDLE1BQXZCO0FBQStCLEMsQ0FBQTs7O0FBQ25SLElBQUlWLFFBQVEsR0FBQ1MsZUFBYixDLENBQTZCOztBQUM3QnZJLE9BQU8sQ0FBQ0UsT0FBUixHQUFnQjRILFFBQWhCOztBQUF5QixTQUFTQyxTQUFULEdBQW9CO0FBQUMsU0FBTzVILE1BQU0sQ0FBQ0QsT0FBUCxDQUFlNEosVUFBZixDQUEwQnpCLGNBQWMsQ0FBQzBCLGFBQXpDLENBQVA7QUFBZ0UsQyxDQUFBO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUk5QixZQUFZLEdBQUMsU0FBU0EsWUFBVCxHQUF1QjtBQUFDLE9BQUksSUFBSStCLElBQUksR0FBQ2IsU0FBUyxDQUFDYyxNQUFuQixFQUEwQkMsSUFBSSxHQUFDLElBQUlDLEtBQUosQ0FBVUgsSUFBVixDQUEvQixFQUErQ0ksSUFBSSxHQUFDLENBQXhELEVBQTBEQSxJQUFJLEdBQUNKLElBQS9ELEVBQW9FSSxJQUFJLEVBQXhFLEVBQTJFO0FBQUNGLFFBQUksQ0FBQ0UsSUFBRCxDQUFKLEdBQVdqQixTQUFTLENBQUNpQixJQUFELENBQXBCO0FBQTRCOztBQUFBN0IsaUJBQWUsQ0FBQ0MsTUFBaEIsR0FBdUIsSUFBSWpJLFFBQVEsQ0FBQ0wsT0FBYixDQUFxQixHQUFHZ0ssSUFBeEIsQ0FBdkI7QUFBcUQzQixpQkFBZSxDQUFDRSxjQUFoQixDQUErQnZHLE9BQS9CLENBQXVDSSxFQUFFLElBQUVBLEVBQUUsRUFBN0M7QUFBaURpRyxpQkFBZSxDQUFDRSxjQUFoQixHQUErQixFQUEvQjtBQUFrQyxTQUFPRixlQUFlLENBQUNDLE1BQXZCO0FBQStCLENBQXhULEMsQ0FBeVQ7OztBQUN6VHhJLE9BQU8sQ0FBQ2lJLFlBQVIsR0FBcUJBLFlBQXJCOztBQUFrQyxTQUFTRCx3QkFBVCxDQUFrQ1EsTUFBbEMsRUFBeUM7QUFBQyxNQUFJbEksT0FBTyxHQUFDa0ksTUFBWjtBQUFtQixNQUFJNkIsUUFBUSxHQUFDLEVBQWI7O0FBQWdCLE9BQUksSUFBSUMsUUFBUixJQUFvQjNCLGlCQUFwQixFQUFzQztBQUFDLFFBQUcsT0FBT3JJLE9BQU8sQ0FBQ2dLLFFBQUQsQ0FBZCxLQUEyQixRQUE5QixFQUF1QztBQUFDRCxjQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFtQnhCLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBYyxFQUFkLEVBQWlCakssT0FBTyxDQUFDZ0ssUUFBRCxDQUF4QixDQUFuQixDQUFELENBQXdEOztBQUNyUDtBQUFVOztBQUFBRCxZQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFtQmhLLE9BQU8sQ0FBQ2dLLFFBQUQsQ0FBMUI7QUFBc0MsR0FEMkIsQ0FDM0I7OztBQUNoREQsVUFBUSxDQUFDckIsTUFBVCxHQUFnQnpJLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQjhJLE1BQWpDO0FBQXdDSCxrQkFBZ0IsQ0FBQzNHLE9BQWpCLENBQXlCK0csS0FBSyxJQUFFO0FBQUNvQixZQUFRLENBQUNwQixLQUFELENBQVIsR0FBZ0IsWUFBVTtBQUFDLGFBQU8zSSxPQUFPLENBQUMySSxLQUFELENBQVAsQ0FBZSxHQUFHRSxTQUFsQixDQUFQO0FBQXFDLEtBQWhFO0FBQWtFLEdBQW5HO0FBQXFHLFNBQU9rQixRQUFQO0FBQWlCLEM7Ozs7Ozs7Ozs7OztBQ3JCako7O0FBQUEsSUFBSXhLLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLHVJQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0JnSSxVQUFoQjs7QUFBMkIsSUFBSS9ILE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSVEsT0FBTyxHQUFDUixtQkFBTyxDQUFDLDREQUFELENBQW5COztBQUFnQyxTQUFTb0ksVUFBVCxDQUFvQnNDLGlCQUFwQixFQUFzQztBQUFDLFdBQVNDLGlCQUFULENBQTJCbEgsS0FBM0IsRUFBaUM7QUFBQyxXQUFNLGFBQWFwRCxNQUFNLENBQUNELE9BQVAsQ0FBZW1HLGFBQWYsQ0FBNkJtRSxpQkFBN0IsRUFBK0MxQixNQUFNLENBQUN5QixNQUFQLENBQWM7QUFBQy9CLFlBQU0sRUFBQyxDQUFDLEdBQUVsSSxPQUFPLENBQUN5SCxTQUFYO0FBQVIsS0FBZCxFQUErQ3hFLEtBQS9DLENBQS9DLENBQW5CO0FBQTBIOztBQUFBa0gsbUJBQWlCLENBQUNDLGVBQWxCLEdBQWtDRixpQkFBaUIsQ0FBQ0UsZUFBcEQsQ0FBbUU7QUFBbkU7QUFDemFELG1CQUFpQixDQUFDRSxtQkFBbEIsR0FBc0NILGlCQUFpQixDQUFDRyxtQkFBeEQ7O0FBQTRFLFlBQXVDO0FBQUMsUUFBSUMsSUFBSSxHQUFDSixpQkFBaUIsQ0FBQ0ssV0FBbEIsSUFBK0JMLGlCQUFpQixDQUFDSSxJQUFqRCxJQUF1RCxTQUFoRTtBQUEwRUgscUJBQWlCLENBQUNJLFdBQWxCLEdBQThCLGdCQUFjRCxJQUFkLEdBQW1CLEdBQWpEO0FBQXNEOztBQUFBLFNBQU9ILGlCQUFQO0FBQTBCLEM7Ozs7Ozs7Ozs7OztBQ0RsUTtBQUNiOzs7Ozs7Ozs7Ozs7QUFXQTNCLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQi9JLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU2SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxTQUFTaUQsSUFBVCxHQUFnQjtBQUNaLFFBQU1DLEdBQUcsR0FBR2pDLE1BQU0sQ0FBQ2tDLE1BQVAsQ0FBYyxJQUFkLENBQVo7QUFDQSxTQUFPO0FBQ0gzQixNQUFFLENBQUN0QyxJQUFELEVBQU9rRSxPQUFQLEVBQWdCO0FBQ2Q7QUFDQSxPQUFDRixHQUFHLENBQUNoRSxJQUFELENBQUgsS0FBY2dFLEdBQUcsQ0FBQ2hFLElBQUQsQ0FBSCxHQUFZLEVBQTFCLENBQUQsRUFBZ0NtRSxJQUFoQyxDQUFxQ0QsT0FBckM7QUFDSCxLQUpFOztBQUtIRSxPQUFHLENBQUNwRSxJQUFELEVBQU9rRSxPQUFQLEVBQWdCO0FBQ2YsVUFBSUYsR0FBRyxDQUFDaEUsSUFBRCxDQUFQLEVBQWU7QUFDWDtBQUNBZ0UsV0FBRyxDQUFDaEUsSUFBRCxDQUFILENBQVVxRSxNQUFWLENBQWlCTCxHQUFHLENBQUNoRSxJQUFELENBQUgsQ0FBVXBDLE9BQVYsQ0FBa0JzRyxPQUFsQixNQUErQixDQUFoRCxFQUFtRCxDQUFuRDtBQUNIO0FBQ0osS0FWRTs7QUFXSEksUUFBSSxDQUFDdEUsSUFBRCxFQUFPLEdBQUd1RSxJQUFWLEVBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxPQUFDUCxHQUFHLENBQUNoRSxJQUFELENBQUgsSUFBYSxFQUFkLEVBQWtCd0UsS0FBbEIsR0FBMEJDLEdBQTFCLENBQStCUCxPQUFELElBQWE7QUFDdkNBLGVBQU8sQ0FBQyxHQUFHSyxJQUFKLENBQVA7QUFDSCxPQUZEO0FBR0g7O0FBakJFLEdBQVA7QUFtQkg7O0FBQ0R0TCxPQUFPLENBQUNFLE9BQVIsR0FBa0I0SyxJQUFsQixDOzs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBQ2IsSUFBSVcsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUN6TCxVQUFaLEdBQTBCeUwsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQTVDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQi9JLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU2SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNOEQsS0FBSyxHQUFHN0wsbUJBQU8sQ0FBQyxnQkFBRCxDQUFyQjs7QUFDQSxNQUFNOEwsTUFBTSxHQUFHSCxlQUFlLENBQUMzTCxtQkFBTyxDQUFDLGtFQUFELENBQVIsQ0FBOUI7O0FBQ0EsTUFBTStMLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsb0VBQUQsQ0FBdkI7O0FBQ0EsTUFBTWdNLFlBQVksR0FBR2hNLG1CQUFPLENBQUMsZ0dBQUQsQ0FBNUI7O0FBQ0EsTUFBTWlNLGVBQWUsR0FBR2pNLG1CQUFPLENBQUMsc0dBQUQsQ0FBL0I7O0FBQ0EsTUFBTWtNLGFBQWEsR0FBR2xNLG1CQUFPLENBQUMsa0dBQUQsQ0FBN0I7O0FBQ0EsTUFBTW1NLFFBQVEsR0FBR2pGLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBU3BELFdBQVQsQ0FBcUJzSSxJQUFyQixFQUEyQjtBQUN2QixTQUFPQSxJQUFJLENBQUN2SCxPQUFMLENBQWFzSCxRQUFiLE1BQTJCLENBQTNCLEdBQStCQSxRQUFRLEdBQUdDLElBQTFDLEdBQWlEQSxJQUF4RDtBQUNIOztBQUNEbE0sT0FBTyxDQUFDNEQsV0FBUixHQUFzQkEsV0FBdEI7O0FBQ0EsU0FBU3VJLFdBQVQsQ0FBcUJELElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU9BLElBQUksQ0FBQ3ZILE9BQUwsQ0FBYXNILFFBQWIsTUFBMkIsQ0FBM0IsR0FDREMsSUFBSSxDQUFDRSxNQUFMLENBQVlILFFBQVEsQ0FBQ2hDLE1BQXJCLEtBQWdDLEdBRC9CLEdBRURpQyxJQUZOO0FBR0g7O0FBQ0RsTSxPQUFPLENBQUNtTSxXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTRSxPQUFULENBQWlCSCxJQUFqQixFQUF1QjtBQUNuQixTQUFPQSxJQUFJLENBQUN0SCxPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixLQUEyQixHQUFsQztBQUNIOztBQUNELE1BQU0wSCxZQUFZLEdBQUlKLElBQUQsSUFBVUcsT0FBTyxDQUFDLENBQUNILElBQUQsSUFBU0EsSUFBSSxLQUFLLEdBQWxCLEdBQXdCLFFBQXhCLEdBQW1DQSxJQUFwQyxDQUF0Qzs7QUFDQSxTQUFTSyxhQUFULENBQXVCakksUUFBdkIsRUFBaUNrSSxLQUFqQyxFQUF3Q0MsY0FBeEMsRUFBd0RuSyxFQUF4RCxFQUE0RDtBQUN4RCxNQUFJb0ssUUFBUSxHQUFHRCxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQXBDOztBQUNBLFdBQVNFLFdBQVQsR0FBdUI7QUFDbkIsV0FBT0MsS0FBSyxDQUFDZixPQUFPLENBQUNySyxvQkFBUixDQUE2QjtBQUN0QzhDLGNBQVEsRUFBRVYsV0FBVyxFQUNyQjtBQUNDLHFCQUFjaUosYUFBYSxDQUFDQyxPQUFRLEdBQUVYLFdBQVcsQ0FBQzdILFFBQUQsQ0FBVyxPQUZ4QyxDQURpQjtBQUl0Q2tJO0FBSnNDLEtBQTdCLENBQUQsRUFLUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU8saUJBQVcsRUFBRTtBQVpiLEtBTFEsQ0FBTCxDQWtCSmpJLElBbEJJLENBa0JDa0ksR0FBRyxJQUFJO0FBQ1gsVUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBYTtBQUNULFlBQUksRUFBRVAsUUFBRixHQUFhLENBQWIsSUFBa0JNLEdBQUcsQ0FBQ0UsTUFBSixJQUFjLEdBQXBDLEVBQXlDO0FBQ3JDLGlCQUFPUCxXQUFXLEVBQWxCO0FBQ0g7O0FBQ0QsY0FBTSxJQUFJOUMsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSDs7QUFDRCxhQUFPbUQsR0FBRyxDQUFDRyxJQUFKLEVBQVA7QUFDSCxLQTFCTSxDQUFQO0FBMkJIOztBQUNELFNBQU9SLFdBQVcsR0FDYjdILElBREUsQ0FDR3NJLElBQUksSUFBSTtBQUNkLFdBQU85SyxFQUFFLEdBQUdBLEVBQUUsQ0FBQzhLLElBQUQsQ0FBTCxHQUFjQSxJQUF2QjtBQUNILEdBSE0sRUFJRmxILEtBSkUsQ0FJS2pELEdBQUQsSUFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUN3SixjQUFMLEVBQXFCO0FBQ2pCO0FBQ0F4SixTQUFHLENBQUNvSyxJQUFKLEdBQVcsaUJBQVg7QUFDSDs7QUFDRCxVQUFNcEssR0FBTjtBQUNILEdBYk0sQ0FBUDtBQWNIOztBQUNELE1BQU1rRixNQUFOLENBQWE7QUFDVDdFLGFBQVcsQ0FBQ2dCLFFBQUQsRUFBV2tJLEtBQVgsRUFBa0JuTCxFQUFsQixFQUFzQjtBQUFFaU0sZ0JBQUY7QUFBZ0JDLGNBQWhCO0FBQTRCQyxPQUE1QjtBQUFpQ0MsV0FBakM7QUFBMENwSyxhQUExQztBQUFxREosT0FBckQ7QUFBMER5SyxnQkFBMUQ7QUFBd0VDO0FBQXhFLEdBQXRCLEVBQTZHO0FBQ3BIO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQi9KLENBQUQsSUFBTztBQUNyQixVQUFJLENBQUNBLENBQUMsQ0FBQ2dLLEtBQVAsRUFBYztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRXhKLGtCQUFGO0FBQVlrSTtBQUFaLFlBQXNCLElBQTVCO0FBQ0EsYUFBS3VCLFdBQUwsQ0FBaUIsY0FBakIsRUFBaUNsQyxPQUFPLENBQUNySyxvQkFBUixDQUE2QjtBQUFFOEMsa0JBQUY7QUFBWWtJO0FBQVosU0FBN0IsQ0FBakMsRUFBb0ZYLE9BQU8sQ0FBQ21DLE1BQVIsRUFBcEY7QUFDQTtBQUNILE9BZG9CLENBZXJCO0FBQ0E7OztBQUNBLFVBQUlsSyxDQUFDLENBQUNnSyxLQUFGLElBQ0EsS0FBS0csS0FETCxJQUVBbkssQ0FBQyxDQUFDZ0ssS0FBRixDQUFRek0sRUFBUixLQUFlLEtBQUs2TSxNQUZwQixJQUdBdkMsS0FBSyxDQUFDaEwsS0FBTixDQUFZbUQsQ0FBQyxDQUFDZ0ssS0FBRixDQUFRcE4sR0FBcEIsRUFBeUI0RCxRQUF6QixLQUFzQyxLQUFLQSxRQUgvQyxFQUd5RDtBQUNyRDtBQUNILE9BdEJvQixDQXVCckI7QUFDQTs7O0FBQ0EsVUFBSSxLQUFLNkosSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVckssQ0FBQyxDQUFDZ0ssS0FBWixDQUFsQixFQUFzQztBQUNsQztBQUNIOztBQUNELFlBQU07QUFBRXBOLFdBQUY7QUFBT1csVUFBUDtBQUFXMkU7QUFBWCxVQUF1QmxDLENBQUMsQ0FBQ2dLLEtBQS9COztBQUNBLGdCQUEyQztBQUN2QyxZQUFJLE9BQU9wTixHQUFQLEtBQWUsV0FBZixJQUE4QixPQUFPVyxFQUFQLEtBQWMsV0FBaEQsRUFBNkQ7QUFDekQ2QixpQkFBTyxDQUFDbUMsSUFBUixDQUFhLDBIQUFiO0FBQ0g7QUFDSjs7QUFDRCxXQUFLVCxPQUFMLENBQWFsRSxHQUFiLEVBQWtCVyxFQUFsQixFQUFzQjJFLE9BQXRCO0FBQ0gsS0FuQ0Q7O0FBb0NBLFNBQUtvSSxjQUFMLEdBQXVCRixNQUFELElBQVk7QUFDOUIsWUFBTTVKLFFBQVEsR0FBR2dJLFlBQVksQ0FBQ1gsS0FBSyxDQUFDaEwsS0FBTixDQUFZdU4sTUFBWixFQUFvQjVKLFFBQXJCLENBQTdCO0FBQ0EsYUFBTyxTQUNEK0osU0FEQyxHQUVEOUIsYUFBYSxDQUFDakksUUFBRCxFQUFXLElBQVgsRUFBaUIsS0FBSzJKLEtBQXRCLEVBQTZCYixJQUFJLElBQUssS0FBS1EsR0FBTCxDQUFTdEosUUFBVCxJQUFxQjhJLElBQTNELENBRm5CO0FBR0gsS0FMRDs7QUFNQSxTQUFLa0IsY0FBTCxHQUF1QkosTUFBRCxJQUFZO0FBQzlCLFVBQUk7QUFBRTVKLGdCQUFGO0FBQVlrSTtBQUFaLFVBQXNCYixLQUFLLENBQUNoTCxLQUFOLENBQVl1TixNQUFaLEVBQW9CLElBQXBCLENBQTFCO0FBQ0E1SixjQUFRLEdBQUdnSSxZQUFZLENBQUNoSSxRQUFELENBQXZCO0FBQ0EsYUFBT2lJLGFBQWEsQ0FBQ2pJLFFBQUQsRUFBV2tJLEtBQVgsRUFBa0IsS0FBS3lCLEtBQXZCLENBQXBCO0FBQ0gsS0FKRCxDQTdDb0gsQ0FrRHBIOzs7QUFDQSxTQUFLTSxLQUFMLEdBQWFsQyxPQUFPLENBQUMvSCxRQUFELENBQXBCLENBbkRvSCxDQW9EcEg7O0FBQ0EsU0FBS2tLLFVBQUwsR0FBa0IsRUFBbEIsQ0FyRG9ILENBc0RwSDtBQUNBO0FBQ0E7O0FBQ0EsUUFBSWxLLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUN4QixXQUFLa0ssVUFBTCxDQUFnQixLQUFLRCxLQUFyQixJQUE4QjtBQUMxQmxMLGlCQUQwQjtBQUUxQkUsYUFBSyxFQUFFK0osWUFGbUI7QUFHMUJySyxXQUgwQjtBQUkxQndMLGVBQU8sRUFBRW5CLFlBQVksSUFBSUEsWUFBWSxDQUFDbUIsT0FKWjtBQUsxQkMsZUFBTyxFQUFFcEIsWUFBWSxJQUFJQSxZQUFZLENBQUNvQjtBQUxaLE9BQTlCO0FBT0g7O0FBQ0QsU0FBS0YsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUFFbkwsZUFBUyxFQUFFbUs7QUFBYixLQUEzQixDQWxFb0gsQ0FtRXBIO0FBQ0E7O0FBQ0EsU0FBS3hFLE1BQUwsR0FBY2IsTUFBTSxDQUFDYSxNQUFyQjtBQUNBLFNBQUt1RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtqSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtrSSxLQUFMLEdBQWFBLEtBQWIsQ0F4RW9ILENBeUVwSDtBQUNBOztBQUNBLFNBQUswQixNQUFMLEdBQ0k7QUFDQXBDLGdCQUFZLENBQUM2QyxjQUFiLENBQTRCckssUUFBNUIsS0FBeUN1SSxhQUFhLENBQUMrQixVQUF2RCxHQUFvRXRLLFFBQXBFLEdBQStFakQsRUFGbkY7QUFHQSxTQUFLNEssUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLNEMsR0FBTCxHQUFXbkIsWUFBWDtBQUNBLFNBQUtvQixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0J0QixPQUFoQixDQWpGb0gsQ0FrRnBIO0FBQ0E7O0FBQ0EsU0FBS1EsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLTixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxlQUFtQyxFQVNsQztBQUNKLEdBakdRLENBa0dUOzs7QUFDQSxTQUFPcUIsd0JBQVAsQ0FBZ0N0TyxHQUFoQyxFQUFxQztBQUNqQyxRQUFJc0csS0FBSixFQUE4QyxFQUE5QyxNQUtLO0FBQ0QsYUFBT3RHLEdBQVA7QUFDSDtBQUNKOztBQUNEdU8sUUFBTSxDQUFDVixLQUFELEVBQVE3QyxHQUFSLEVBQWE7QUFDZixVQUFNckksU0FBUyxHQUFHcUksR0FBRyxDQUFDeEwsT0FBSixJQUFld0wsR0FBakM7QUFDQSxVQUFNMEIsSUFBSSxHQUFHLEtBQUtvQixVQUFMLENBQWdCRCxLQUFoQixDQUFiOztBQUNBLFFBQUksQ0FBQ25CLElBQUwsRUFBVztBQUNQLFlBQU0sSUFBSXZELEtBQUosQ0FBVyxvQ0FBbUMwRSxLQUFNLEVBQXBELENBQU47QUFDSDs7QUFDRCxVQUFNVyxPQUFPLEdBQUdwRyxNQUFNLENBQUN5QixNQUFQLENBQWN6QixNQUFNLENBQUN5QixNQUFQLENBQWMsRUFBZCxFQUFrQjZDLElBQWxCLENBQWQsRUFBdUM7QUFBRS9KLGVBQUY7QUFBYW9MLGFBQU8sRUFBRS9DLEdBQUcsQ0FBQytDLE9BQTFCO0FBQW1DQyxhQUFPLEVBQUVoRCxHQUFHLENBQUNnRDtBQUFoRCxLQUF2QyxDQUFoQjtBQUNBLFNBQUtGLFVBQUwsQ0FBZ0JELEtBQWhCLElBQXlCVyxPQUF6QixDQVBlLENBUWY7O0FBQ0EsUUFBSVgsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDbkIsV0FBS1ksTUFBTCxDQUFZLEtBQUtYLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckIsQ0FBWjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSUEsS0FBSyxLQUFLLEtBQUtBLEtBQW5CLEVBQTBCO0FBQ3RCLFdBQUtZLE1BQUwsQ0FBWUQsT0FBWjtBQUNIO0FBQ0o7O0FBQ0RFLFFBQU0sR0FBRztBQUNMdk4sVUFBTSxDQUFDMEMsUUFBUCxDQUFnQjZLLE1BQWhCO0FBQ0g7QUFDRDs7Ozs7QUFHQUMsTUFBSSxHQUFHO0FBQ0h4TixVQUFNLENBQUN5TixPQUFQLENBQWVELElBQWY7QUFDSDtBQUNEOzs7Ozs7OztBQU1BbkUsTUFBSSxDQUFDeEssR0FBRCxFQUFNVyxFQUFFLEdBQUdYLEdBQVgsRUFBZ0JzRixPQUFPLEdBQUcsRUFBMUIsRUFBOEI7QUFDOUIsV0FBTyxLQUFLdUosTUFBTCxDQUFZLFdBQVosRUFBeUI3TyxHQUF6QixFQUE4QlcsRUFBOUIsRUFBa0MyRSxPQUFsQyxDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQXBCLFNBQU8sQ0FBQ2xFLEdBQUQsRUFBTVcsRUFBRSxHQUFHWCxHQUFYLEVBQWdCc0YsT0FBTyxHQUFHLEVBQTFCLEVBQThCO0FBQ2pDLFdBQU8sS0FBS3VKLE1BQUwsQ0FBWSxjQUFaLEVBQTRCN08sR0FBNUIsRUFBaUNXLEVBQWpDLEVBQXFDMkUsT0FBckMsQ0FBUDtBQUNIOztBQUNEdUosUUFBTSxDQUFDQyxNQUFELEVBQVNwUCxJQUFULEVBQWVxUCxHQUFmLEVBQW9CekosT0FBcEIsRUFBNkI7QUFDL0IsV0FBTyxJQUFJcUksT0FBSixDQUFZLENBQUM3SixPQUFELEVBQVVrTCxNQUFWLEtBQXFCO0FBQ3BDLFVBQUksQ0FBQzFKLE9BQU8sQ0FBQzJKLEVBQWIsRUFBaUI7QUFDYixhQUFLMUIsS0FBTCxHQUFhLEtBQWI7QUFDSCxPQUhtQyxDQUlwQzs7O0FBQ0EsVUFBSXBDLE9BQU8sQ0FBQytELEVBQVosRUFBZ0I7QUFDWkMsbUJBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUNILE9BUG1DLENBUXBDO0FBQ0E7OztBQUNBLFVBQUlwUCxHQUFHLEdBQUcsT0FBT04sSUFBUCxLQUFnQixRQUFoQixHQUEyQnlMLE9BQU8sQ0FBQ3JLLG9CQUFSLENBQTZCcEIsSUFBN0IsQ0FBM0IsR0FBZ0VBLElBQTFFO0FBQ0EsVUFBSWlCLEVBQUUsR0FBRyxPQUFPb08sR0FBUCxLQUFlLFFBQWYsR0FBMEI1RCxPQUFPLENBQUNySyxvQkFBUixDQUE2QmlPLEdBQTdCLENBQTFCLEdBQThEQSxHQUF2RTtBQUNBL08sU0FBRyxHQUFHa0QsV0FBVyxDQUFDbEQsR0FBRCxDQUFqQjtBQUNBVyxRQUFFLEdBQUd1QyxXQUFXLENBQUN2QyxFQUFELENBQWhCLENBYm9DLENBY3BDO0FBQ0E7O0FBQ0EsVUFBSTJGLEtBQUosRUFBOEMsRUFPN0M7O0FBQ0QsV0FBSytJLGtCQUFMLENBQXdCMU8sRUFBeEIsRUF4Qm9DLENBeUJwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUksQ0FBQzJFLE9BQU8sQ0FBQzJKLEVBQVQsSUFBZSxLQUFLSyxlQUFMLENBQXFCM08sRUFBckIsQ0FBbkIsRUFBNkM7QUFDekMsYUFBSzZNLE1BQUwsR0FBYzdNLEVBQWQ7QUFDQThHLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NoSyxFQUF0QztBQUNBLGFBQUswTSxXQUFMLENBQWlCeUIsTUFBakIsRUFBeUI5TyxHQUF6QixFQUE4QlcsRUFBOUIsRUFBa0MyRSxPQUFsQztBQUNBLGFBQUtpSyxZQUFMLENBQWtCNU8sRUFBbEI7QUFDQThHLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixvQkFBbkIsRUFBeUNoSyxFQUF6QztBQUNBLGVBQU9tRCxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0g7O0FBQ0QsWUFBTTtBQUFFRixnQkFBRjtBQUFZa0ksYUFBWjtBQUFtQnpMO0FBQW5CLFVBQWdDNEssS0FBSyxDQUFDaEwsS0FBTixDQUFZRCxHQUFaLEVBQWlCLElBQWpCLENBQXRDOztBQUNBLFVBQUksQ0FBQzRELFFBQUQsSUFBYXZELFFBQWpCLEVBQTJCO0FBQ3ZCLGtCQUEyQztBQUN2QyxnQkFBTSxJQUFJOEksS0FBSixDQUFXLGtDQUFpQ25KLEdBQUksa0RBQWhELENBQU47QUFDSDs7QUFDRCxlQUFPOEQsT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNILE9BNUNtQyxDQTZDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxDQUFDLEtBQUswTCxRQUFMLENBQWM3TyxFQUFkLENBQUwsRUFBd0I7QUFDcEJtTyxjQUFNLEdBQUcsY0FBVDtBQUNIOztBQUNELFlBQU1qQixLQUFLLEdBQUdsQyxPQUFPLENBQUMvSCxRQUFELENBQXJCO0FBQ0EsWUFBTTtBQUFFTyxlQUFPLEdBQUc7QUFBWixVQUFzQm1CLE9BQTVCOztBQUNBLFVBQUk4RixZQUFZLENBQUM2QyxjQUFiLENBQTRCSixLQUE1QixDQUFKLEVBQXdDO0FBQ3BDLGNBQU07QUFBRWpLLGtCQUFRLEVBQUU2TDtBQUFaLFlBQTJCeEUsS0FBSyxDQUFDaEwsS0FBTixDQUFZVSxFQUFaLENBQWpDO0FBQ0EsY0FBTStPLFVBQVUsR0FBR3BFLGFBQWEsQ0FBQ3FFLGFBQWQsQ0FBNEI5QixLQUE1QixDQUFuQjtBQUNBLGNBQU0rQixVQUFVLEdBQUd2RSxlQUFlLENBQUN3RSxlQUFoQixDQUFnQ0gsVUFBaEMsRUFBNENELFVBQTVDLENBQW5COztBQUNBLFlBQUksQ0FBQ0csVUFBTCxFQUFpQjtBQUNiLGdCQUFNRSxhQUFhLEdBQUcxSCxNQUFNLENBQUMySCxJQUFQLENBQVlMLFVBQVUsQ0FBQ00sTUFBdkIsRUFBK0JDLE1BQS9CLENBQXNDQyxLQUFLLElBQUksQ0FBQ3BFLEtBQUssQ0FBQ29FLEtBQUQsQ0FBckQsQ0FBdEI7O0FBQ0EsY0FBSUosYUFBYSxDQUFDdkcsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixzQkFBMkM7QUFDdkMvRyxxQkFBTyxDQUFDbUMsSUFBUixDQUFjLDZEQUFELEdBQ1IsZUFBY21MLGFBQWEsQ0FBQ3pLLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsOEJBRDVDO0FBRUg7O0FBQ0QsbUJBQU8ySixNQUFNLENBQUMsSUFBSTdGLEtBQUosQ0FBVyw4QkFBNkJzRyxVQUFXLDhDQUE2QzVCLEtBQU0sS0FBNUYsR0FDbkIsNkRBRFMsQ0FBRCxDQUFiO0FBRUg7QUFDSixTQVZELE1BV0s7QUFDRDtBQUNBekYsZ0JBQU0sQ0FBQ3lCLE1BQVAsQ0FBY2lDLEtBQWQsRUFBcUI4RCxVQUFyQjtBQUNIO0FBQ0o7O0FBQ0RuSSxZQUFNLENBQUNhLE1BQVAsQ0FBY3FDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDaEssRUFBdkMsRUEzRW9DLENBNEVwQzs7QUFDQSxXQUFLd1AsWUFBTCxDQUFrQnRDLEtBQWxCLEVBQXlCakssUUFBekIsRUFBbUNrSSxLQUFuQyxFQUEwQ25MLEVBQTFDLEVBQThDd0QsT0FBOUMsRUFBdURDLElBQXZELENBQTREZ00sU0FBUyxJQUFJO0FBQ3JFLGNBQU07QUFBRTNOO0FBQUYsWUFBWTJOLFNBQWxCOztBQUNBLFlBQUkzTixLQUFLLElBQUlBLEtBQUssQ0FBQzROLFNBQW5CLEVBQThCO0FBQzFCLGlCQUFPdk0sT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNIOztBQUNEMkQsY0FBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLHFCQUFuQixFQUEwQ2hLLEVBQTFDO0FBQ0EsYUFBSzBNLFdBQUwsQ0FBaUJ5QixNQUFqQixFQUF5QjlPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQzJFLE9BQWxDOztBQUNBLGtCQUEyQztBQUN2QyxnQkFBTWdMLE9BQU8sR0FBRyxLQUFLeEMsVUFBTCxDQUFnQixPQUFoQixFQUF5Qm5MLFNBQXpDO0FBQ0F4QixnQkFBTSxDQUFDb1AsSUFBUCxDQUFZQyxhQUFaLEdBQ0lGLE9BQU8sQ0FBQ3RHLGVBQVIsS0FBNEJzRyxPQUFPLENBQUNyRyxtQkFBcEMsSUFDSSxDQUFDbUcsU0FBUyxDQUFDek4sU0FBVixDQUFvQnFILGVBRjdCO0FBR0g7O0FBQ0QsYUFBSzFILEdBQUwsQ0FBU3VMLEtBQVQsRUFBZ0JqSyxRQUFoQixFQUEwQmtJLEtBQTFCLEVBQWlDbkwsRUFBakMsRUFBcUN5UCxTQUFyQzs7QUFDQSxZQUFJM04sS0FBSixFQUFXO0FBQ1BnRixnQkFBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q2xJLEtBQXZDLEVBQThDOUIsRUFBOUM7QUFDQSxnQkFBTThCLEtBQU47QUFDSDs7QUFDRGdGLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixxQkFBbkIsRUFBMENoSyxFQUExQztBQUNBLGVBQU9tRCxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0gsT0FwQkQsRUFvQkdrTCxNQXBCSDtBQXFCSCxLQWxHTSxDQUFQO0FBbUdIOztBQUNEM0IsYUFBVyxDQUFDeUIsTUFBRCxFQUFTOU8sR0FBVCxFQUFjVyxFQUFkLEVBQWtCMkUsT0FBTyxHQUFHLEVBQTVCLEVBQWdDO0FBQ3ZDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT25FLE1BQU0sQ0FBQ3lOLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNwTSxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQ0FBZjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxPQUFPdEIsTUFBTSxDQUFDeU4sT0FBUCxDQUFlRSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0N0TSxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQkFBMEJxTSxNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQjNELE9BQU8sQ0FBQ21DLE1BQVIsT0FBcUIzTSxFQUFuRCxFQUF1RDtBQUNuRFEsWUFBTSxDQUFDeU4sT0FBUCxDQUFlRSxNQUFmLEVBQXVCO0FBQ25COU8sV0FEbUI7QUFFbkJXLFVBRm1CO0FBR25CMkU7QUFIbUIsT0FBdkIsRUFLQTtBQUNBO0FBQ0E7QUFDQSxRQVJBLEVBUUkzRSxFQVJKO0FBU0g7QUFDSjs7QUFDRHdQLGNBQVksQ0FBQ3RDLEtBQUQsRUFBUWpLLFFBQVIsRUFBa0JrSSxLQUFsQixFQUF5Qm5MLEVBQXpCLEVBQTZCd0QsT0FBTyxHQUFHLEtBQXZDLEVBQThDO0FBQ3RELFVBQU1zTSxlQUFlLEdBQUcsS0FBSzNDLFVBQUwsQ0FBZ0JELEtBQWhCLENBQXhCLENBRHNELENBRXREO0FBQ0E7O0FBQ0EsUUFBSTFKLE9BQU8sSUFBSXNNLGVBQVgsSUFBOEIsS0FBSzVDLEtBQUwsS0FBZUEsS0FBakQsRUFBd0Q7QUFDcEQsYUFBT0YsT0FBTyxDQUFDN0osT0FBUixDQUFnQjJNLGVBQWhCLENBQVA7QUFDSDs7QUFDRCxVQUFNQyxXQUFXLEdBQUcsQ0FBQ25PLEdBQUQsRUFBTW9PLGFBQU4sS0FBd0I7QUFDeEMsYUFBTyxJQUFJaEQsT0FBSixDQUFZN0osT0FBTyxJQUFJO0FBQzFCLFlBQUl2QixHQUFHLENBQUNvSyxJQUFKLEtBQWEsaUJBQWIsSUFBa0NnRSxhQUF0QyxFQUFxRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F4UCxnQkFBTSxDQUFDMEMsUUFBUCxDQUFnQjlELElBQWhCLEdBQXVCWSxFQUF2QixDQU5pRCxDQU9qRDtBQUNBOztBQUNBNEIsYUFBRyxDQUFDOE4sU0FBSixHQUFnQixJQUFoQixDQVRpRCxDQVVqRDs7QUFDQSxpQkFBT3ZNLE9BQU8sQ0FBQztBQUFFckIsaUJBQUssRUFBRUY7QUFBVCxXQUFELENBQWQ7QUFDSDs7QUFDRCxZQUFJQSxHQUFHLENBQUM4TixTQUFSLEVBQW1CO0FBQ2Y7QUFDQSxpQkFBT3ZNLE9BQU8sQ0FBQztBQUFFckIsaUJBQUssRUFBRUY7QUFBVCxXQUFELENBQWQ7QUFDSDs7QUFDRHVCLGVBQU8sQ0FBQyxLQUFLOE0sY0FBTCxDQUFvQixTQUFwQixFQUNIeE0sSUFERyxDQUNFa0ksR0FBRyxJQUFJO0FBQ2IsZ0JBQU07QUFBRXVFLGdCQUFJLEVBQUVsTztBQUFSLGNBQXNCMkosR0FBNUI7QUFDQSxnQkFBTThELFNBQVMsR0FBRztBQUFFek4scUJBQUY7QUFBYUo7QUFBYixXQUFsQjtBQUNBLGlCQUFPLElBQUlvTCxPQUFKLENBQVk3SixPQUFPLElBQUk7QUFDMUIsaUJBQUtrRyxlQUFMLENBQXFCckgsU0FBckIsRUFBZ0M7QUFDNUJKLGlCQUQ0QjtBQUU1QnFCLHNCQUY0QjtBQUc1QmtJO0FBSDRCLGFBQWhDLEVBSUcxSCxJQUpILENBSVF2QixLQUFLLElBQUk7QUFDYnVOLHVCQUFTLENBQUN2TixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBdU4sdUJBQVMsQ0FBQzNOLEtBQVYsR0FBa0JGLEdBQWxCO0FBQ0F1QixxQkFBTyxDQUFDc00sU0FBRCxDQUFQO0FBQ0gsYUFSRCxFQVFHVSxNQUFNLElBQUk7QUFDVHRPLHFCQUFPLENBQUNDLEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RHFPLE1BQXpEO0FBQ0FWLHVCQUFTLENBQUMzTixLQUFWLEdBQWtCRixHQUFsQjtBQUNBNk4sdUJBQVMsQ0FBQ3ZOLEtBQVYsR0FBa0IsRUFBbEI7QUFDQWlCLHFCQUFPLENBQUNzTSxTQUFELENBQVA7QUFDSCxhQWJEO0FBY0gsV0FmTSxDQUFQO0FBZ0JILFNBcEJPLEVBcUJINUssS0FyQkcsQ0FxQkdqRCxHQUFHLElBQUltTyxXQUFXLENBQUNuTyxHQUFELEVBQU0sSUFBTixDQXJCckIsQ0FBRCxDQUFQO0FBc0JILE9BeENNLENBQVA7QUF5Q0gsS0ExQ0Q7O0FBMkNBLFdBQU8sSUFBSW9MLE9BQUosQ0FBWSxDQUFDN0osT0FBRCxFQUFVa0wsTUFBVixLQUFxQjtBQUNwQyxVQUFJeUIsZUFBSixFQUFxQjtBQUNqQixlQUFPM00sT0FBTyxDQUFDMk0sZUFBRCxDQUFkO0FBQ0g7O0FBQ0QsV0FBS0csY0FBTCxDQUFvQi9DLEtBQXBCLEVBQTJCekosSUFBM0IsQ0FBZ0NrSSxHQUFHLElBQUl4SSxPQUFPLENBQUM7QUFDM0NuQixpQkFBUyxFQUFFMkosR0FBRyxDQUFDdUUsSUFENEI7QUFFM0M5QyxlQUFPLEVBQUV6QixHQUFHLENBQUN0QixHQUFKLENBQVErQyxPQUYwQjtBQUczQ0MsZUFBTyxFQUFFMUIsR0FBRyxDQUFDdEIsR0FBSixDQUFRZ0Q7QUFIMEIsT0FBRCxDQUE5QyxFQUlJZ0IsTUFKSjtBQUtILEtBVE0sRUFVRjVLLElBVkUsQ0FVSWdNLFNBQUQsSUFBZTtBQUNyQixZQUFNO0FBQUV6TixpQkFBRjtBQUFhb0wsZUFBYjtBQUFzQkM7QUFBdEIsVUFBa0NvQyxTQUF4Qzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTTtBQUFFVztBQUFGLFlBQXlCM1IsbUJBQU8sQ0FBQywwQkFBRCxDQUF0Qzs7QUFDQSxZQUFJLENBQUMyUixrQkFBa0IsQ0FBQ3BPLFNBQUQsQ0FBdkIsRUFBb0M7QUFDaEMsZ0JBQU0sSUFBSXdHLEtBQUosQ0FBVyx5REFBd0R2RixRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBS29OLFFBQUwsQ0FBYyxNQUFNakQsT0FBTyxHQUM1QixLQUFLTCxjQUFMLENBQW9CL00sRUFBcEIsQ0FENEIsR0FFNUJxTixPQUFPLEdBQ0gsS0FBS0osY0FBTCxDQUFvQmpOLEVBQXBCLENBREcsR0FFSCxLQUFLcUosZUFBTCxDQUFxQnJILFNBQXJCLEVBQ0Y7QUFDQTtBQUNJaUIsZ0JBREo7QUFFSWtJLGFBRko7QUFHSTBCLGNBQU0sRUFBRTdNO0FBSFosT0FGRSxDQUpILEVBVUt5RCxJQVZMLENBVVV2QixLQUFLLElBQUk7QUFDdEJ1TixpQkFBUyxDQUFDdk4sS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxhQUFLaUwsVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJ1QyxTQUF6QjtBQUNBLGVBQU9BLFNBQVA7QUFDSCxPQWRNLENBQVA7QUFlSCxLQWpDTSxFQWtDRjVLLEtBbENFLENBa0NJa0wsV0FsQ0osQ0FBUDtBQW1DSDs7QUFDRHBPLEtBQUcsQ0FBQ3VMLEtBQUQsRUFBUWpLLFFBQVIsRUFBa0JrSSxLQUFsQixFQUF5Qm5MLEVBQXpCLEVBQTZCK0wsSUFBN0IsRUFBbUM7QUFDbEMsU0FBS08sVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtZLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtqSyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtrSSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLMEIsTUFBTCxHQUFjN00sRUFBZDtBQUNBLFNBQUs4TixNQUFMLENBQVkvQixJQUFaO0FBQ0g7QUFDRDs7Ozs7O0FBSUF1RSxnQkFBYyxDQUFDclAsRUFBRCxFQUFLO0FBQ2YsU0FBSzZMLElBQUwsR0FBWTdMLEVBQVo7QUFDSDs7QUFDRDBOLGlCQUFlLENBQUMzTyxFQUFELEVBQUs7QUFDaEIsUUFBSSxDQUFDLEtBQUs2TSxNQUFWLEVBQ0ksT0FBTyxLQUFQO0FBQ0osVUFBTSxDQUFDMEQsWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUszRCxNQUFMLENBQVk0RCxLQUFaLENBQWtCLEdBQWxCLENBQWhDO0FBQ0EsVUFBTSxDQUFDQyxZQUFELEVBQWVDLE9BQWYsSUFBMEIzUSxFQUFFLENBQUN5USxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUpnQixDQUtoQjs7QUFDQSxRQUFJRSxPQUFPLElBQUlKLFlBQVksS0FBS0csWUFBNUIsSUFBNENGLE9BQU8sS0FBS0csT0FBNUQsRUFBcUU7QUFDakUsYUFBTyxJQUFQO0FBQ0gsS0FSZSxDQVNoQjs7O0FBQ0EsUUFBSUosWUFBWSxLQUFLRyxZQUFyQixFQUFtQztBQUMvQixhQUFPLEtBQVA7QUFDSCxLQVplLENBYWhCO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFPRixPQUFPLEtBQUtHLE9BQW5CO0FBQ0g7O0FBQ0QvQixjQUFZLENBQUM1TyxFQUFELEVBQUs7QUFDYixVQUFNLEdBQUc0USxJQUFILElBQVc1USxFQUFFLENBQUN5USxLQUFILENBQVMsR0FBVCxDQUFqQixDQURhLENBRWI7O0FBQ0EsUUFBSUcsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDYnBRLFlBQU0sQ0FBQ21ELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQTtBQUNILEtBTlksQ0FPYjs7O0FBQ0EsVUFBTWtOLElBQUksR0FBR2pOLFFBQVEsQ0FBQ2tOLGNBQVQsQ0FBd0JGLElBQXhCLENBQWI7O0FBQ0EsUUFBSUMsSUFBSixFQUFVO0FBQ05BLFVBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FaWSxDQWFiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR3BOLFFBQVEsQ0FBQ3FOLGlCQUFULENBQTJCTCxJQUEzQixFQUFpQyxDQUFqQyxDQUFmOztBQUNBLFFBQUlJLE1BQUosRUFBWTtBQUNSQSxZQUFNLENBQUNELGNBQVA7QUFDSDtBQUNKOztBQUNEbEMsVUFBUSxDQUFDaEMsTUFBRCxFQUFTO0FBQ2IsV0FBTyxLQUFLQSxNQUFMLEtBQWdCQSxNQUF2QjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUE5SSxVQUFRLENBQUMxRSxHQUFELEVBQU13TixNQUFNLEdBQUd4TixHQUFmLEVBQW9Cc0YsT0FBTyxHQUFHLEVBQTlCLEVBQWtDO0FBQ3RDLFdBQU8sSUFBSXFJLE9BQUosQ0FBWSxDQUFDN0osT0FBRCxFQUFVa0wsTUFBVixLQUFxQjtBQUNwQyxZQUFNO0FBQUVwTCxnQkFBRjtBQUFZdkQ7QUFBWixVQUF5QjRLLEtBQUssQ0FBQ2hMLEtBQU4sQ0FBWUQsR0FBWixDQUEvQjs7QUFDQSxVQUFJLENBQUM0RCxRQUFELElBQWF2RCxRQUFqQixFQUEyQjtBQUN2QixrQkFBMkM7QUFDdkMsZ0JBQU0sSUFBSThJLEtBQUosQ0FBVyxrQ0FBaUNuSixHQUFJLGtEQUFoRCxDQUFOO0FBQ0g7O0FBQ0Q7QUFDSCxPQVBtQyxDQVFwQzs7O0FBQ0EsZ0JBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsWUFBTTZOLEtBQUssR0FBR3BDLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDL0gsUUFBRCxDQUFSLENBQXpCO0FBQ0ErSixhQUFPLENBQUN0RCxHQUFSLENBQVksQ0FDUixLQUFLd0MsVUFBTCxDQUFnQmdGLFlBQWhCLENBQTZCN1IsR0FBN0IsRUFBa0N5TCxXQUFXLENBQUMrQixNQUFELENBQTdDLENBRFEsRUFFUixLQUFLWCxVQUFMLENBQWdCdkgsT0FBTyxDQUFDVyxRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTRENEgsS0FBNUQsQ0FGUSxDQUFaLEVBR0d6SixJQUhILENBR1EsTUFBTU4sT0FBTyxFQUhyQixFQUd5QmtMLE1BSHpCO0FBSUgsS0FqQk0sQ0FBUDtBQWtCSDs7QUFDRCxRQUFNNEIsY0FBTixDQUFxQi9DLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQUl3QyxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXlCLE1BQU0sR0FBSSxLQUFLMUQsR0FBTCxHQUFXLE1BQU07QUFDN0JpQyxlQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0F4QyxTQUFLLEdBQUdwQyxXQUFXLENBQUNvQyxLQUFELENBQW5CO0FBQ0EsVUFBTWtFLGVBQWUsR0FBRyxNQUFNLEtBQUtsRixVQUFMLENBQWdCbUYsUUFBaEIsQ0FBeUJuRSxLQUF6QixDQUE5Qjs7QUFDQSxRQUFJd0MsU0FBSixFQUFlO0FBQ1gsWUFBTTVOLEtBQUssR0FBRyxJQUFJMEcsS0FBSixDQUFXLHdDQUF1QzBFLEtBQU0sR0FBeEQsQ0FBZDtBQUNBcEwsV0FBSyxDQUFDNE4sU0FBTixHQUFrQixJQUFsQjtBQUNBLFlBQU01TixLQUFOO0FBQ0g7O0FBQ0QsUUFBSXFQLE1BQU0sS0FBSyxLQUFLMUQsR0FBcEIsRUFBeUI7QUFDckIsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxXQUFPMkQsZUFBUDtBQUNIOztBQUNEZixVQUFRLENBQUNpQixFQUFELEVBQUs7QUFDVCxRQUFJNUIsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU15QixNQUFNLEdBQUcsTUFBTTtBQUNqQnpCLGVBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxTQUFLakMsR0FBTCxHQUFXMEQsTUFBWDtBQUNBLFdBQU9HLEVBQUUsR0FBRzdOLElBQUwsQ0FBVXNJLElBQUksSUFBSTtBQUNyQixVQUFJb0YsTUFBTSxLQUFLLEtBQUsxRCxHQUFwQixFQUF5QjtBQUNyQixhQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFVBQUlpQyxTQUFKLEVBQWU7QUFDWCxjQUFNOU4sR0FBRyxHQUFHLElBQUk0RyxLQUFKLENBQVUsaUNBQVYsQ0FBWjtBQUNBNUcsV0FBRyxDQUFDOE4sU0FBSixHQUFnQixJQUFoQjtBQUNBLGNBQU05TixHQUFOO0FBQ0g7O0FBQ0QsYUFBT21LLElBQVA7QUFDSCxLQVZNLENBQVA7QUFXSDs7QUFDRDFDLGlCQUFlLENBQUNySCxTQUFELEVBQVl1UCxHQUFaLEVBQWlCO0FBQzVCLFVBQU07QUFBRXZQLGVBQVMsRUFBRW1LO0FBQWIsUUFBcUIsS0FBS2dCLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBM0I7O0FBQ0EsVUFBTXFFLE9BQU8sR0FBRyxLQUFLOUQsUUFBTCxDQUFjdkIsR0FBZCxDQUFoQjs7QUFDQW9GLE9BQUcsQ0FBQ0MsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBT2hILE9BQU8sQ0FBQ2lILG1CQUFSLENBQTRCdEYsR0FBNUIsRUFBaUM7QUFDcENxRixhQURvQztBQUVwQ3hQLGVBRm9DO0FBR3BDbUYsWUFBTSxFQUFFLElBSDRCO0FBSXBDb0s7QUFKb0MsS0FBakMsQ0FBUDtBQU1IOztBQUNEN0Msb0JBQWtCLENBQUMxTyxFQUFELEVBQUs7QUFDbkIsUUFBSSxLQUFLeU4sR0FBVCxFQUFjO0FBQ1YsWUFBTWhMLENBQUMsR0FBRyxJQUFJK0YsS0FBSixDQUFVLGlCQUFWLENBQVY7QUFDQS9GLE9BQUMsQ0FBQ2lOLFNBQUYsR0FBYyxJQUFkO0FBQ0E1SSxZQUFNLENBQUNhLE1BQVAsQ0FBY3FDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDdkgsQ0FBdkMsRUFBMEN6QyxFQUExQztBQUNBLFdBQUt5TixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNESyxRQUFNLENBQUMvQixJQUFELEVBQU87QUFDVCxTQUFLeUIsR0FBTCxDQUFTekIsSUFBVCxFQUFlLEtBQUtvQixVQUFMLENBQWdCLE9BQWhCLEVBQXlCbkwsU0FBeEM7QUFDSDs7QUF2ZlE7O0FBeWZickQsT0FBTyxDQUFDRSxPQUFSLEdBQWtCaUksTUFBbEI7QUFDQUEsTUFBTSxDQUFDYSxNQUFQLEdBQWdCNEMsTUFBTSxDQUFDMUwsT0FBUCxFQUFoQixDOzs7Ozs7Ozs7Ozs7QUNsa0JhOztBQUNiNEksTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDLEUsQ0FDQTs7QUFDQSxNQUFNa0wsVUFBVSxHQUFHLHNCQUFuQjs7QUFDQSxTQUFTcEUsY0FBVCxDQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsU0FBT3dFLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQnpFLEtBQWhCLENBQVA7QUFDSDs7QUFDRHZPLE9BQU8sQ0FBQzJPLGNBQVIsR0FBeUJBLGNBQXpCLEM7Ozs7Ozs7Ozs7OztBQ1BhOztBQUNiN0YsTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVMwSSxlQUFULENBQXlCSCxVQUF6QixFQUFxQztBQUNqQyxRQUFNO0FBQUU2QyxNQUFGO0FBQU12QztBQUFOLE1BQWlCTixVQUF2QjtBQUNBLFNBQVE5TCxRQUFELElBQWM7QUFDakIsVUFBTWdNLFVBQVUsR0FBRzJDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRNU8sUUFBUixDQUFuQjs7QUFDQSxRQUFJLENBQUNnTSxVQUFMLEVBQWlCO0FBQ2IsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTTZDLE1BQU0sR0FBSXZDLEtBQUQsSUFBVztBQUN0QixVQUFJO0FBQ0EsZUFBT3dDLGtCQUFrQixDQUFDeEMsS0FBRCxDQUF6QjtBQUNILE9BRkQsQ0FHQSxPQUFPeUMsQ0FBUCxFQUFVO0FBQ04sY0FBTXBRLEdBQUcsR0FBRyxJQUFJNEcsS0FBSixDQUFVLHdCQUFWLENBQVo7QUFDQTVHLFdBQUcsQ0FBQ29LLElBQUosR0FBVyxlQUFYO0FBQ0EsY0FBTXBLLEdBQU47QUFDSDtBQUNKLEtBVEQ7O0FBVUEsVUFBTXFRLE1BQU0sR0FBRyxFQUFmO0FBQ0F4SyxVQUFNLENBQUMySCxJQUFQLENBQVlDLE1BQVosRUFBb0J4TyxPQUFwQixDQUE2QnFSLFFBQUQsSUFBYztBQUN0QyxZQUFNQyxDQUFDLEdBQUc5QyxNQUFNLENBQUM2QyxRQUFELENBQWhCO0FBQ0EsWUFBTUUsQ0FBQyxHQUFHbkQsVUFBVSxDQUFDa0QsQ0FBQyxDQUFDRSxHQUFILENBQXBCOztBQUNBLFVBQUlELENBQUMsS0FBS3pSLFNBQVYsRUFBcUI7QUFDakJzUixjQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixDQUFDRSxDQUFDLENBQUM5TyxPQUFGLENBQVUsR0FBVixDQUFELEdBQ2I4TyxDQUFDLENBQUMzQixLQUFGLENBQVEsR0FBUixFQUFhdEcsR0FBYixDQUFpQnJKLEtBQUssSUFBSWdSLE1BQU0sQ0FBQ2hSLEtBQUQsQ0FBaEMsQ0FEYSxHQUVicVIsQ0FBQyxDQUFDRyxNQUFGLEdBQ0ksQ0FBQ1IsTUFBTSxDQUFDTSxDQUFELENBQVAsQ0FESixHQUVJTixNQUFNLENBQUNNLENBQUQsQ0FKaEI7QUFLSDtBQUNKLEtBVkQ7QUFXQSxXQUFPSCxNQUFQO0FBQ0gsR0E1QkQ7QUE2Qkg7O0FBQ0R0VCxPQUFPLENBQUN1USxlQUFSLEdBQTBCQSxlQUExQixDOzs7Ozs7Ozs7Ozs7QUNsQ2E7O0FBQ2J6SCxNQUFNLENBQUNDLGNBQVAsQ0FBc0IvSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNkgsT0FBSyxFQUFFO0FBQVQsQ0FBN0MsRSxDQUNBO0FBQ0E7O0FBQ0EsU0FBUytMLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9BLEdBQUcsQ0FBQ2pQLE9BQUosQ0FBWSxzQkFBWixFQUFvQyxNQUFwQyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU3lMLGFBQVQsQ0FBdUJ5RCxlQUF2QixFQUF3QztBQUNwQztBQUNBLFFBQU1DLFlBQVksR0FBR0gsV0FBVyxDQUFDRSxlQUFlLENBQUNsUCxPQUFoQixDQUF3QixLQUF4QixFQUErQixFQUEvQixLQUFzQyxHQUF2QyxDQUFoQztBQUNBLFFBQU04TCxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlzRCxVQUFVLEdBQUcsQ0FBakI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0YsWUFBWSxDQUFDblAsT0FBYixDQUFxQiw2QkFBckIsRUFBb0QsQ0FBQ3lPLENBQUQsRUFBSWEsRUFBSixLQUFXO0FBQ3RGLFVBQU1DLFVBQVUsR0FBRyxhQUFhbkIsSUFBYixDQUFrQmtCLEVBQWxCLENBQW5CO0FBQ0F4RCxVQUFNLENBQUN3RCxFQUFFLENBQ0w7QUFESyxLQUVKdFAsT0FGRSxDQUVNLDBCQUZOLEVBRWtDLElBRmxDLEVBR0ZBLE9BSEUsQ0FHTSxRQUhOLEVBR2dCLEVBSGhCLENBQUQsQ0FJTjtBQUpNLEtBQU4sR0FLSTtBQUFFOE8sU0FBRyxFQUFFTSxVQUFVLEVBQWpCO0FBQXFCTCxZQUFNLEVBQUVRO0FBQTdCLEtBTEo7QUFNQSxXQUFPQSxVQUFVLEdBQUcsUUFBSCxHQUFjLFdBQS9CO0FBQ0gsR0FUMEIsQ0FBM0I7QUFVQSxNQUFJQyx1QkFBSixDQWZvQyxDQWdCcEM7QUFDQTs7QUFDQSxZQUFtQztBQUMvQkEsMkJBQXVCLEdBQUdMLFlBQVksQ0FBQ25QLE9BQWIsQ0FBcUIsNkJBQXJCLEVBQW9ELENBQUN5TyxDQUFELEVBQUlhLEVBQUosS0FBVztBQUNyRixZQUFNQyxVQUFVLEdBQUcsYUFBYW5CLElBQWIsQ0FBa0JrQixFQUFsQixDQUFuQjtBQUNBLFlBQU1HLEdBQUcsR0FBR0gsRUFBRSxDQUNWO0FBRFUsT0FFVHRQLE9BRk8sQ0FFQywwQkFGRCxFQUU2QixJQUY3QixFQUdQQSxPQUhPLENBR0MsUUFIRCxFQUdXLEVBSFgsQ0FBWjtBQUlBLGFBQU91UCxVQUFVLEdBQ1YsT0FBTVAsV0FBVyxDQUFDUyxHQUFELENBQU0sT0FEYixHQUVWLE9BQU1ULFdBQVcsQ0FBQ1MsR0FBRCxDQUFNLFVBRjlCO0FBR0gsS0FUeUIsQ0FBMUI7QUFVSDs7QUFDRCxTQUFPdkwsTUFBTSxDQUFDeUIsTUFBUCxDQUFjO0FBQUUwSSxNQUFFLEVBQUUsSUFBSXFCLE1BQUosQ0FBVyxNQUFNTCxrQkFBTixHQUEyQixTQUF0QyxFQUFpRCxHQUFqRCxDQUFOO0FBQTZEdkQ7QUFBN0QsR0FBZCxFQUFzRjBELHVCQUF1QixHQUM5RztBQUNFRyxjQUFVLEVBQUcsSUFBR0gsdUJBQXdCO0FBRDFDLEdBRDhHLEdBSTlHLEVBSkMsQ0FBUDtBQUtIOztBQUNEcFUsT0FBTyxDQUFDcVEsYUFBUixHQUF3QkEsYUFBeEIsQzs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUNidkgsTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU04RCxLQUFLLEdBQUc3TCxtQkFBTyxDQUFDLGdCQUFELENBQXJCO0FBQ0E7Ozs7O0FBR0EsU0FBU29ILFFBQVQsQ0FBa0J5TCxFQUFsQixFQUFzQjtBQUNsQixNQUFJNkIsSUFBSSxHQUFHLEtBQVg7QUFDQSxNQUFJbFQsTUFBSjtBQUNBLFNBQVEsQ0FBQyxHQUFHNEksSUFBSixLQUFhO0FBQ2pCLFFBQUksQ0FBQ3NLLElBQUwsRUFBVztBQUNQQSxVQUFJLEdBQUcsSUFBUDtBQUNBbFQsWUFBTSxHQUFHcVIsRUFBRSxDQUFDLEdBQUd6SSxJQUFKLENBQVg7QUFDSDs7QUFDRCxXQUFPNUksTUFBUDtBQUNILEdBTkQ7QUFPSDs7QUFDRHRCLE9BQU8sQ0FBQ2tILFFBQVIsR0FBbUJBLFFBQW5COztBQUNBLFNBQVNyRyxpQkFBVCxHQUE2QjtBQUN6QixRQUFNO0FBQUVFLFlBQUY7QUFBWTBULFlBQVo7QUFBc0JDO0FBQXRCLE1BQStCN1MsTUFBTSxDQUFDMEMsUUFBNUM7QUFDQSxTQUFRLEdBQUV4RCxRQUFTLEtBQUkwVCxRQUFTLEdBQUVDLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDSDs7QUFDRDFVLE9BQU8sQ0FBQ2EsaUJBQVIsR0FBNEJBLGlCQUE1Qjs7QUFDQSxTQUFTbU4sTUFBVCxHQUFrQjtBQUNkLFFBQU07QUFBRXZOO0FBQUYsTUFBV29CLE1BQU0sQ0FBQzBDLFFBQXhCO0FBQ0EsUUFBTTNELE1BQU0sR0FBR0MsaUJBQWlCLEVBQWhDO0FBQ0EsU0FBT0osSUFBSSxDQUFDZ0osU0FBTCxDQUFlN0ksTUFBTSxDQUFDcUosTUFBdEIsQ0FBUDtBQUNIOztBQUNEakssT0FBTyxDQUFDZ08sTUFBUixHQUFpQkEsTUFBakI7O0FBQ0EsU0FBUzJHLGNBQVQsQ0FBd0J0UixTQUF4QixFQUFtQztBQUMvQixTQUFPLE9BQU9BLFNBQVAsS0FBcUIsUUFBckIsR0FDREEsU0FEQyxHQUVEQSxTQUFTLENBQUN3SCxXQUFWLElBQXlCeEgsU0FBUyxDQUFDdUgsSUFBbkMsSUFBMkMsU0FGakQ7QUFHSDs7QUFDRDVLLE9BQU8sQ0FBQzJVLGNBQVIsR0FBeUJBLGNBQXpCOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUI1SCxHQUFuQixFQUF3QjtBQUNwQixTQUFPQSxHQUFHLENBQUM2SCxRQUFKLElBQWdCN0gsR0FBRyxDQUFDOEgsV0FBM0I7QUFDSDs7QUFDRDlVLE9BQU8sQ0FBQzRVLFNBQVIsR0FBb0JBLFNBQXBCOztBQUNBLGVBQWU5QixtQkFBZixDQUFtQ3RGLEdBQW5DLEVBQXdDb0YsR0FBeEMsRUFBNkM7QUFDekMsTUFBSW1DLEVBQUo7O0FBQ0EsWUFBMkM7QUFDdkMsUUFBSSxDQUFDQSxFQUFFLEdBQUd2SCxHQUFHLENBQUN3SCxTQUFWLE1BQXlCLElBQXpCLElBQWlDRCxFQUFFLEtBQUssS0FBSyxDQUE3QyxHQUFpRCxLQUFLLENBQXRELEdBQTBEQSxFQUFFLENBQUNySyxlQUFqRSxFQUFrRjtBQUM5RSxZQUFNZixPQUFPLEdBQUksSUFBR2dMLGNBQWMsQ0FBQ25ILEdBQUQsQ0FBTSx3SkFBeEM7QUFDQSxZQUFNLElBQUkzRCxLQUFKLENBQVVGLE9BQVYsQ0FBTjtBQUNIO0FBQ0osR0FQd0MsQ0FRekM7OztBQUNBLFFBQU1xRCxHQUFHLEdBQUc0RixHQUFHLENBQUM1RixHQUFKLElBQVk0RixHQUFHLENBQUNBLEdBQUosSUFBV0EsR0FBRyxDQUFDQSxHQUFKLENBQVE1RixHQUEzQzs7QUFDQSxNQUFJLENBQUNRLEdBQUcsQ0FBQzlDLGVBQVQsRUFBMEI7QUFDdEIsUUFBSWtJLEdBQUcsQ0FBQ0EsR0FBSixJQUFXQSxHQUFHLENBQUN2UCxTQUFuQixFQUE4QjtBQUMxQjtBQUNBLGFBQU87QUFDSDRSLGlCQUFTLEVBQUUsTUFBTW5DLG1CQUFtQixDQUFDRixHQUFHLENBQUN2UCxTQUFMLEVBQWdCdVAsR0FBRyxDQUFDQSxHQUFwQjtBQURqQyxPQUFQO0FBR0g7O0FBQ0QsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsUUFBTXJQLEtBQUssR0FBRyxNQUFNaUssR0FBRyxDQUFDOUMsZUFBSixDQUFvQmtJLEdBQXBCLENBQXBCOztBQUNBLE1BQUk1RixHQUFHLElBQUk0SCxTQUFTLENBQUM1SCxHQUFELENBQXBCLEVBQTJCO0FBQ3ZCLFdBQU96SixLQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUixVQUFNb0csT0FBTyxHQUFJLElBQUdnTCxjQUFjLENBQUNuSCxHQUFELENBQU0sK0RBQThEakssS0FBTSxZQUE1RztBQUNBLFVBQU0sSUFBSXNHLEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQ0g7O0FBQ0QsWUFBMkM7QUFDdkMsUUFBSWIsTUFBTSxDQUFDMkgsSUFBUCxDQUFZbE4sS0FBWixFQUFtQjBHLE1BQW5CLEtBQThCLENBQTlCLElBQW1DLENBQUMySSxHQUFHLENBQUNBLEdBQTVDLEVBQWlEO0FBQzdDMVAsYUFBTyxDQUFDbUMsSUFBUixDQUFjLEdBQUVzUCxjQUFjLENBQUNuSCxHQUFELENBQU0sNEtBQXBDO0FBQ0g7QUFDSjs7QUFDRCxTQUFPakssS0FBUDtBQUNIOztBQUNEdkQsT0FBTyxDQUFDOFMsbUJBQVIsR0FBOEJBLG1CQUE5QjtBQUNBOVMsT0FBTyxDQUFDa1YsYUFBUixHQUF3QixDQUNwQixNQURvQixFQUVwQixNQUZvQixFQUdwQixNQUhvQixFQUlwQixVQUpvQixFQUtwQixNQUxvQixFQU1wQixNQU5vQixFQU9wQixVQVBvQixFQVFwQixNQVJvQixFQVNwQixVQVRvQixFQVVwQixPQVZvQixFQVdwQixRQVhvQixFQVlwQixTQVpvQixDQUF4Qjs7QUFjQSxTQUFTMVQsb0JBQVQsQ0FBOEJkLEdBQTlCLEVBQW1Dc0YsT0FBbkMsRUFBNEM7QUFDeEMsWUFBNEM7QUFDeEMsUUFBSXRGLEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFuQyxFQUE2QztBQUN6Q29JLFlBQU0sQ0FBQzJILElBQVAsQ0FBWS9QLEdBQVosRUFBaUJ3QixPQUFqQixDQUF5Qm1TLEdBQUcsSUFBSTtBQUM1QixZQUFJclUsT0FBTyxDQUFDa1YsYUFBUixDQUFzQnZRLE9BQXRCLENBQThCMFAsR0FBOUIsTUFBdUMsQ0FBQyxDQUE1QyxFQUErQztBQUMzQ25SLGlCQUFPLENBQUNtQyxJQUFSLENBQWMscURBQW9EZ1AsR0FBSSxFQUF0RTtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBQ0o7O0FBQ0QsU0FBTzFJLEtBQUssQ0FBQ3dKLE1BQU4sQ0FBYXpVLEdBQWIsRUFBa0JzRixPQUFsQixDQUFQO0FBQ0g7O0FBQ0RoRyxPQUFPLENBQUN3QixvQkFBUixHQUErQkEsb0JBQS9CO0FBQ0F4QixPQUFPLENBQUNvVixFQUFSLEdBQWEsT0FBT3ZGLFdBQVAsS0FBdUIsV0FBcEM7QUFDQTdQLE9BQU8sQ0FBQzRQLEVBQVIsR0FBYTVQLE9BQU8sQ0FBQ29WLEVBQVIsSUFDVCxPQUFPdkYsV0FBVyxDQUFDQyxJQUFuQixLQUE0QixVQURuQixJQUVULE9BQU9ELFdBQVcsQ0FBQ3dGLE9BQW5CLEtBQStCLFVBRm5DLEM7Ozs7Ozs7Ozs7O0FDdEdBLGlCQUFpQixtQkFBTyxDQUFDLG9FQUFvQjs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDZGQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBQ0EsSUFBTUMsNEJBQTRCLEdBQUcsOEJBQXJDO0FBRUEsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTUMsK0JBQStCLEdBQzFDLGlDQURLO0FBRUEsSUFBTUMsK0JBQStCLEdBQzFDLGlDQURLO0FBR0EsU0FBU0Msa0JBQVQsT0FBNkM7QUFBQSxNQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbEQsU0FBTztBQUNML08sUUFBSSxFQUFFdU8sb0JBREQ7QUFFTE8sU0FBSyxFQUFMQSxLQUZLO0FBR0xDLFFBQUksRUFBSkE7QUFISyxHQUFQO0FBS0Q7QUFFTSxTQUFTQyx5QkFBVCxDQUFtQzVJLElBQW5DLEVBQXlDO0FBQzlDLFNBQU87QUFDTHBHLFFBQUksRUFBRXdPLDRCQUREO0FBRUxwSSxRQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBUzZJLHlCQUFULENBQW1DN1MsS0FBbkMsRUFBMEM7QUFDL0MsU0FBTztBQUNMNEQsUUFBSSxFQUFFeU8sNEJBREQ7QUFFTHJTLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTOFMsYUFBVCxHQUF5QjtBQUM5QixTQUFPO0FBQ0xsUCxRQUFJLEVBQUUwTztBQURELEdBQVA7QUFHRDtBQUVNLFNBQVNTLG9CQUFULENBQThCL0ksSUFBOUIsRUFBb0M7QUFDekMsU0FBTztBQUNMcEcsUUFBSSxFQUFFMk8sK0JBREQ7QUFFTHZJLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTZ0osb0JBQVQsQ0FBOEJoVCxLQUE5QixFQUFxQztBQUMxQyxTQUFPO0FBQ0w0RCxRQUFJLEVBQUU0TywrQkFERDtBQUVMeFMsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUNsREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1pVCx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxJQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFFQSxJQUFNQyxvQ0FBb0MsR0FBRyxzQ0FBN0M7QUFDQSxJQUFNQyxvQ0FBb0MsR0FBRyxzQ0FBN0M7QUFDQSxJQUFNQyxvQ0FBb0MsR0FBRyxzQ0FBN0M7QUFFQSxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFDQSxJQUFNQyxrQ0FBa0MsR0FBRyxvQ0FBM0M7QUFFQSxTQUFTQyxtQkFBVCxHQUErQjtBQUNwQyxTQUFPO0FBQ0wxUSxRQUFJLEVBQUVxUDtBQURELEdBQVA7QUFHRDtBQUVNLFNBQVNzQixtQkFBVCxDQUE2QkMsT0FBN0IsRUFBc0M7QUFDM0MsU0FBTztBQUNMNVEsUUFBSSxFQUFFc1Asd0JBREQ7QUFFTHNCLFdBQU8sRUFBUEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyxtQkFBVCxDQUE2QnpVLEtBQTdCLEVBQW9DO0FBQ3pDLFNBQU87QUFDTDRELFFBQUksRUFBRXVQLHdCQUREO0FBRUxuVCxTQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBUzBVLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztBQUN2QyxTQUFPO0FBQ0wvUSxRQUFJLEVBQUUyUCxrQkFERDtBQUVMb0IsVUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVNLFNBQVNDLGtCQUFULENBQTRCbk4sSUFBNUIsRUFBa0M7QUFDdkMsU0FBTztBQUNMN0QsUUFBSSxFQUFFd1Asb0JBREQ7QUFFTDNMLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTb04sa0JBQVQsQ0FBNEJGLE1BQTVCLEVBQW9DO0FBQ3pDLFNBQU87QUFDTC9RLFFBQUksRUFBRXlQLG9CQUREO0FBRUxzQixVQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU0csa0JBQVQsQ0FBNEI5VSxLQUE1QixFQUFtQztBQUN4QyxTQUFPO0FBQ0w0RCxRQUFJLEVBQUUwUCxvQkFERDtBQUVMdFQsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDtBQUVNLFNBQVMrVSxtQkFBVCxDQUE2QnROLElBQTdCLEVBQW1DdU4sSUFBbkMsRUFBeUNDLFVBQXpDLEVBQXFEQyxTQUFyRCxFQUFnRTtBQUNyRSxTQUFPO0FBQ0x0UixRQUFJLEVBQUU4UCxxQkFERDtBQUVMak0sUUFBSSxFQUFKQSxJQUZLO0FBR0x1TixRQUFJLEVBQUpBLElBSEs7QUFJTEMsY0FBVSxFQUFWQSxVQUpLO0FBS0xDLGFBQVMsRUFBVEE7QUFMSyxHQUFQO0FBT0Q7QUFFTSxTQUFTQyxtQkFBVCxDQUE2QlIsTUFBN0IsRUFBcUM7QUFDMUMsU0FBTztBQUNML1EsUUFBSSxFQUFFK1AscUJBREQ7QUFFTGdCLFVBQU0sRUFBTkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTUyxtQkFBVCxDQUE2QnBWLEtBQTdCLEVBQW9DO0FBQ3pDLFNBQU87QUFDTDRELFFBQUksRUFBRWdRLHFCQUREO0FBRUw1VCxTQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU3FWLDhCQUFULENBQXdDQyxRQUF4QyxFQUFrREMsTUFBbEQsRUFBMEQ7QUFDL0QsU0FBTztBQUNMM1IsUUFBSSxFQUFFaVEsa0NBREQ7QUFFTHlCLFlBQVEsRUFBUkEsUUFGSztBQUdMQyxVQUFNLEVBQU5BO0FBSEssR0FBUDtBQUtEO0FBRU0sU0FBU0MsOEJBQVQsQ0FBd0NiLE1BQXhDLEVBQWdEO0FBQ3JELFNBQU87QUFDTC9RLFFBQUksRUFBRWtRLGtDQUREO0FBRUxhLFVBQU0sRUFBTkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTYyw4QkFBVCxDQUF3Q3pWLEtBQXhDLEVBQStDO0FBQ3BELFNBQU87QUFDTDRELFFBQUksRUFBRW1RLGtDQUREO0FBRUwvVCxTQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBUzBWLGdDQUFULENBQTBDSixRQUExQyxFQUFvREssUUFBcEQsRUFBOEQ7QUFDbkUsU0FBTztBQUNML1IsUUFBSSxFQUFFb1Esb0NBREQ7QUFFTHNCLFlBQVEsRUFBUkEsUUFGSztBQUdMSyxZQUFRLEVBQVJBO0FBSEssR0FBUDtBQUtEO0FBRU0sU0FBU0MsZ0NBQVQsQ0FBMENqQixNQUExQyxFQUFrRDtBQUN2RCxTQUFPO0FBQ0wvUSxRQUFJLEVBQUVxUSxvQ0FERDtBQUVMVSxVQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU2tCLGdDQUFULENBQTBDN1YsS0FBMUMsRUFBaUQ7QUFDdEQsU0FBTztBQUNMNEQsUUFBSSxFQUFFc1Esb0NBREQ7QUFFTGxVLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTOFYsOEJBQVQsQ0FBd0NSLFFBQXhDLEVBQWtEUyxNQUFsRCxFQUEwRDtBQUMvRCxTQUFPO0FBQ0xuUyxRQUFJLEVBQUV1USxrQ0FERDtBQUVMbUIsWUFBUSxFQUFSQSxRQUZLO0FBR0xTLFVBQU0sRUFBTkE7QUFISyxHQUFQO0FBS0Q7QUFFTSxTQUFTQyw4QkFBVCxDQUF3Q3JCLE1BQXhDLEVBQWdEO0FBQ3JELFNBQU87QUFDTC9RLFFBQUksRUFBRXdRLGtDQUREO0FBRUxPLFVBQU0sRUFBTkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTc0IsOEJBQVQsQ0FBd0NqVyxLQUF4QyxFQUErQztBQUNwRCxTQUFPO0FBQ0w0RCxRQUFJLEVBQUV5USxrQ0FERDtBQUVMclUsU0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUNwS0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNa1csb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBR0EsU0FBU0Msa0JBQVQsQ0FBNEJDLEVBQTVCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTDFTLFFBQUksRUFBRXNTLG9CQUREO0FBRUxJLE1BQUUsRUFBRkE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyxrQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0M7QUFDekMsU0FBTztBQUNMNVMsUUFBSSxFQUFFdVMsb0JBREQ7QUFFTEssVUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVNLFNBQVNDLGtCQUFULENBQTRCelcsS0FBNUIsRUFBbUM7QUFDeEMsU0FBTztBQUNMNEQsUUFBSSxFQUFFd1Msb0JBREQ7QUFFTHBXLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTTBXLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLFNBQVNDLGlCQUFULENBQTJCQyxTQUEzQixFQUFzQztBQUMzQyxTQUFPO0FBQ0xsVCxRQUFJLEVBQUU4UyxtQkFERDtBQUVMSSxhQUFTLEVBQVRBO0FBRkssR0FBUDtBQUlEO0FBRU0sU0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDLFNBQU87QUFDTHBULFFBQUksRUFBRStTLG1CQUREO0FBRUxLLFNBQUssRUFBTEE7QUFGSyxHQUFQO0FBSUQ7QUFFTSxTQUFTQyxpQkFBVCxDQUEyQmpYLEtBQTNCLEVBQWtDO0FBQ3ZDLFNBQU87QUFDTDRELFFBQUksRUFBRWdULG1CQUREO0FBRUw1VyxTQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7SUFFUWtYLGUsR0FBb0JDLDZDLENBQXBCRCxlOztBQUVSLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNRCw2Q0FBbUIsQ0FBQ0UsSUFBcEIsQ0FBeUJDLFFBQXpCLElBQXFDLElBQTNDO0FBQUEsQ0FBdkI7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQixzQkFDRSwyREFBQyxtRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixTQUFLLEVBQUMsZUFBbEM7QUFBa0QsU0FBSyxFQUFDO0FBQXhELG9DQUVFO0FBQUcsUUFBSSxFQUFDO0FBQVIsaUJBRkYsRUFJTyxHQUpQLEVBS0csSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBTEgsRUFNRyxHQU5ILENBREY7QUFVRDs7QUFFRCxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsVUFBZCxDQUF5QkMsS0FEcEM7QUFFTjtBQUNBQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFISCxLQUQ2QjtBQU1yQ0Msb0JBQWdCLEVBQUU7QUFDaEJDLG9CQUFjLEVBQUUsY0FEQTtBQUVoQkMsZUFBUyxFQUFFO0FBRkssS0FObUI7QUFVckNDLGdCQUFZLEVBQUU7QUFDWkMsb0JBQWMsRUFBRSxNQURKO0FBRVpDLFlBQU0sRUFBRSxTQUZJO0FBR1pDLGNBQVEsRUFBRSxNQUhFO0FBSVpDLGdCQUFVLEVBQUUsc0NBSkE7QUFLWkMsZ0JBQVUsRUFBRSxHQUxBO0FBTVpDLGdCQUFVLEVBQUUsS0FOQTtBQU9aQyxtQkFBYSxFQUFFLFdBUEg7QUFRWkMsV0FBSyxFQUFFO0FBUkssS0FWdUI7QUFvQnJDQyxRQUFJLEVBQUU7QUFDSlIsb0JBQWMsRUFBRSxNQURaO0FBRUpDLFlBQU0sRUFBRSxTQUZKO0FBR0pDLGNBQVEsRUFBRSxNQUhOO0FBSUpDLGdCQUFVLEVBQUUsc0NBSlI7QUFLSkMsZ0JBQVUsRUFBRSxHQUxSO0FBTUpDLGdCQUFVLEVBQUUsS0FOUjtBQU9KQyxtQkFBYSxFQUFFO0FBUFg7QUFwQitCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQStCQSxTQUFTRyxNQUFULENBQWdCN1ksS0FBaEIsRUFBdUI7QUFDckIsTUFBTThZLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7QUFEcUIsTUFFYnlCLFFBRmEsR0FFUS9ZLEtBRlIsQ0FFYitZLFFBRmE7QUFBQSxNQUVIdEIsTUFGRyxHQUVRelgsS0FGUixDQUVIeVgsTUFGRztBQUlyQixzQkFDRTtBQUFRLGFBQVMsRUFBRXFCLE9BQU8sQ0FBQ3JCO0FBQTNCLGtCQUNFLDJEQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFDLEtBRFo7QUFFRSxXQUFPLEVBQUMsT0FGVjtBQUdFLGFBQVMsRUFBRXFCLE9BQU8sQ0FBQ2Q7QUFIckIsS0FLQ1AsTUFBTSxDQUFDdUIsUUFBUCxDQUFnQi9RLEdBQWhCLENBQW9CLFVBQUNnUixPQUFELEVBQVVDLEdBQVYsRUFBa0I7QUFDckMsUUFBSUQsT0FBTyxDQUFDakwsSUFBWixFQUFrQjtBQUNoQiwwQkFBUSwyREFBQyxnREFBRDtBQUNOLFdBQUcsRUFBRWtMLEdBREM7QUFFTixZQUFJLEVBQUU7QUFBRW5ZLGtCQUFRLEVBQUUsU0FBWjtBQUF1QmtJLGVBQUssRUFBRTtBQUFFK0UsZ0JBQUksRUFBRWlMLE9BQU8sQ0FBQ2pMLElBQWhCO0FBQXNCbUwsaUJBQUssRUFBRUYsT0FBTyxDQUFDbkUsU0FBUixDQUFrQmtDLGNBQWMsRUFBaEM7QUFBN0I7QUFBOUI7QUFGQSxzQkFJTjtBQUFHLGlCQUFTLEVBQUUrQixRQUFRLEtBQUtFLE9BQU8sQ0FBQ25FLFNBQVIsQ0FBa0JrQyxjQUFjLEVBQWhDLENBQWIsR0FBbUQ4QixPQUFPLENBQUNYLFlBQTNELEdBQTBFVyxPQUFPLENBQUNGO0FBQWhHLFNBQXVHSyxPQUFPLENBQUNuRSxTQUFSLENBQWtCa0MsY0FBYyxFQUFoQyxDQUF2RyxDQUpNLENBQVI7QUFNRDtBQUNGLEdBVEEsQ0FMRCxDQURGLGVBaUJFLDJEQUFDLFNBQUQsT0FqQkYsQ0FERjtBQXFCRDs7QUFFRDZCLE1BQU0sQ0FBQy9VLFNBQVAsR0FBbUI7QUFDakJzVixhQUFXLEVBQUV4VixpREFBUyxDQUFDSSxNQUROO0FBRWpCbVYsT0FBSyxFQUFFdlYsaURBQVMsQ0FBQ0k7QUFGQSxDQUFuQjtBQUtlcVYsc0hBQVMsQ0FDdEJ2QyxlQUFlLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FETyxDQUFULENBRWIrQixNQUZhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFFUS9CLGUsR0FBb0JDLDhDLENBQXBCRCxlOztBQUVSLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNRCw4Q0FBbUIsQ0FBQ0UsSUFBcEIsQ0FBeUJDLFFBQXpCLElBQXFDLElBQTNDO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUksU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDOEIsV0FBTyxFQUFFO0FBQ1BDLGtCQUFZLHNCQUFlL0IsS0FBSyxDQUFDRyxPQUFOLENBQWM2QixPQUE3QjtBQURMLEtBRDRCO0FBSXJDQyxnQkFBWSxFQUFFO0FBQ1pDLFVBQUksRUFBRTtBQURNLEtBSnVCO0FBT3JDMUIsb0JBQWdCLEVBQUU7QUFDaEJDLG9CQUFjLEVBQUUsY0FEQTtBQUVoQjBCLFdBQUssRUFBRSxLQUZTO0FBR2hCekIsZUFBUyxFQUFFO0FBSEssS0FQbUI7QUFZckMwQixlQUFXLEVBQUU7QUFDWDlCLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVg4QixnQkFBVSxFQUFFO0FBRkQsS0Fad0I7QUFnQnJDMUIsZ0JBQVksRUFBRTtBQUNaQyxvQkFBYyxFQUFFLE1BREo7QUFFWkMsWUFBTSxFQUFFLFNBRkk7QUFHWkMsY0FBUSxFQUFFLE1BSEU7QUFJWkMsZ0JBQVUsRUFBRSxzQ0FKQTtBQUtaQyxnQkFBVSxFQUFFLEdBTEE7QUFNWkMsZ0JBQVUsRUFBRSxLQU5BO0FBT1pDLG1CQUFhLEVBQUUsV0FQSDtBQVFaQyxXQUFLLEVBQUU7QUFSSyxLQWhCdUI7QUEwQnJDQyxRQUFJLEVBQUU7QUFDSlIsb0JBQWMsRUFBRSxNQURaO0FBRUpDLFlBQU0sRUFBRSxTQUZKO0FBR0pDLGNBQVEsRUFBRSxNQUhOO0FBSUpDLGdCQUFVLEVBQUUsc0NBSlI7QUFLSkMsZ0JBQVUsRUFBRSxHQUxSO0FBTUpDLGdCQUFVLEVBQUUsS0FOUjtBQU9KQyxtQkFBYSxFQUFFO0FBUFg7QUExQitCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQXFDQSxTQUFTb0IsTUFBVCxDQUFnQjlaLEtBQWhCLEVBQXVCO0FBQUEsa0JBQ2ErWixzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQTtBQUFBLE1BQ2RDLFNBRGM7QUFBQSxNQUNIQyxZQURHOztBQUFBLG1CQUUyQkYsc0RBQVEsRUFGbkM7QUFBQTtBQUFBLE1BRWRHLGdCQUZjO0FBQUEsTUFFSUMsbUJBRko7O0FBR3JCLE1BQU1yQixPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBSHFCLE1BS2JuQyxNQUxhLEdBS2tCblYsS0FMbEIsQ0FLYm1WLE1BTGE7QUFBQSxNQUtMZ0UsS0FMSyxHQUtrQm5aLEtBTGxCLENBS0xtWixLQUxLO0FBQUEsTUFLRUosUUFMRixHQUtrQi9ZLEtBTGxCLENBS0UrWSxRQUxGO0FBQUEsTUFLWXFCLENBTFosR0FLa0JwYSxLQUxsQixDQUtZb2EsQ0FMWjs7QUFPckIsV0FBU0MsZ0JBQVQsR0FBNEI7QUFDMUJKLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7O0FBR0QsTUFBTUssUUFBUSxHQUFHQyxnRUFBVyxFQUE1QjtBQUNBLE1BQUlDLHFCQUFKOztBQWJxQixxQkFlK0NDLGdFQUFXLENBQUMsVUFBQWxRLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNtUSxJQUFWO0FBQUEsR0FBTixDQWYxRDtBQUFBLE1BZWJDLFNBZmEsZ0JBZWJBLFNBZmE7QUFBQSxNQWVGQyxRQWZFLGdCQWVGQSxRQWZFO0FBQUEsTUFlUTFFLEVBZlIsZ0JBZVFBLEVBZlI7QUFBQSxNQWVZMkUsWUFmWixnQkFlWUEsWUFmWjtBQUFBLE1BZTBCdkksS0FmMUIsZ0JBZTBCQSxLQWYxQjtBQUFBLE1BZWlDb0UsU0FmakMsZ0JBZWlDQSxTQWZqQzs7QUFpQnJCLGFBQW1DLEVBakJkLENBcUJyQjs7O0FBQ0FvRSx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLFFBQUlOLHFCQUFKLEVBQTJCO0FBQ3pCTCx5QkFBbUIsQ0FBQ0sscUJBQUQsQ0FBbkI7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQsQ0F0QnFCLENBOEJyQjs7QUFDQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSUQsWUFBSixFQUFrQjtBQUNoQjtBQUNBLFVBQUksQ0FBQ0wscUJBQUwsRUFBNEI7QUFDMUJGLGdCQUFRLENBQUM1SCxvRUFBYSxFQUFkLENBQVI7QUFDRDtBQUNGLEtBTmMsQ0FRZjs7O0FBQ0EsUUFBSW1JLFlBQUosRUFBa0I7QUFDaEIsVUFBSUwscUJBQUosRUFBMkI7QUFDMUJMLDJCQUFtQjtBQUNuQjtBQUNGOztBQUVELFFBQUlVLFlBQUosRUFBa0I7QUFDZkUsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QjFJLEtBQTlCO0FBQ0Y7QUFDRCxHQWxCUSxFQWtCTixDQUFDdUksWUFBRCxDQWxCTSxDQUFUO0FBb0JBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDTCxTQUFsQztBQUNBSSxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDSixRQUFqQztBQUNBRyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCOUUsRUFBNUI7QUFDQTZFLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0N0RSxTQUFsQztBQUNBeUQsdUJBQW1CLENBQUNRLFNBQUQsQ0FBbkI7QUFDRCxHQVBRLEVBT04sQ0FBQ0EsU0FBRCxDQVBNLENBQVQ7QUFTQSxzQkFDRSxxSUFDRSwyREFBQyxnRUFBRDtBQUFTLGFBQVMsRUFBRTdCLE9BQU8sQ0FBQ1E7QUFBNUIsS0FDR25FLE1BQU0sQ0FBQzhGLEtBQVAsZ0JBQ0MscUlBQ0EsMkRBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUUsbUJBQUs7QUFDcEJoQixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNXLEtBRmI7QUFHRSxRQUFJLEVBQUM7QUFIUCxLQUlJRyxDQUFDLENBQUMsT0FBRCxDQUpMLENBREEsZUFNQSwyREFBQywrQ0FBRDtBQUFPLFFBQUksRUFBRUosU0FBYjtBQUF3QixlQUFXLEVBQUVLO0FBQXJDLElBTkEsZUFPQSwyREFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBQyxJQURaO0FBRUUsV0FBTyxFQUFDLElBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFNBQUssRUFBQyxRQUpSO0FBS0UsVUFBTSxNQUxSO0FBTUUsYUFBUyxFQUFFdkIsT0FBTyxDQUFDVztBQU5yQixLQVFHTixLQVJILENBUEEsQ0FERCxHQWlCc0IsSUFsQnpCLGVBbUJFLDJEQUFDLG1FQUFELHFCQUNFLDJEQUFDLGdFQUFELE9BREYsQ0FuQkYsZUFzQkUsMkRBQUMsbUVBQUQscUJBQ0UsMkRBQUMsdUVBQUQsT0FERixDQXRCRixFQXlCRyxDQUFDZSxnQkFBRCxnQkFDQywyREFBQywrREFBRDtBQUNFLFdBQU8sRUFBQyxVQURWO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYjViLFlBQU0sQ0FBQzBDLFFBQVAsR0FBa0IsU0FBbEI7QUFDRDtBQUxILEtBT0dvWixDQUFDLENBQUMsUUFBRCxDQVBKLENBREQsZ0JBVUMsMkRBQUMsa0RBQUQ7QUFBVSxvQkFBZ0IsRUFBRUY7QUFBNUIsSUFuQ0osQ0FERixlQXNDRSwyREFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBQyxLQURaO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxhQUFTLEVBQUVwQixPQUFPLENBQUNkO0FBSHJCLGtCQUtFLDJEQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDO0FBRFAsa0JBR0U7QUFBRyxhQUFTLEVBQUVlLFFBQVEsS0FBSyxNQUFiLEdBQXNCRCxPQUFPLENBQUNYLFlBQTlCLEdBQTZDVyxPQUFPLENBQUNGO0FBQW5FLEtBQTBFd0IsQ0FBQyxDQUFDLE1BQUQsQ0FBM0UsQ0FIRixDQUxGLEVBVUdqRixNQUFNLENBQUM2RCxRQUFQLENBQWdCL1EsR0FBaEIsQ0FBb0IsVUFBQ2dSLE9BQUQsRUFBVUMsR0FBVjtBQUFBLHdCQUNuQiwyREFBQyxpREFBRDtBQUNFLFNBQUcsRUFBRUEsR0FEUDtBQUVFLFVBQUksRUFBRTtBQUFFblksZ0JBQVEsRUFBRSxTQUFaO0FBQXVCa0ksYUFBSyxFQUFFO0FBQUUrRSxjQUFJLEVBQUVpTCxPQUFPLENBQUNqTCxJQUFoQjtBQUFzQm1MLGVBQUssRUFBRUYsT0FBTyxDQUFDbkUsU0FBUixDQUFrQmtDLGNBQWMsRUFBaEM7QUFBN0I7QUFBOUI7QUFGUixvQkFJRTtBQUFHLGVBQVMsRUFBRStCLFFBQVEsS0FBS0UsT0FBTyxDQUFDbkUsU0FBUixDQUFrQmtDLGNBQWMsRUFBaEMsQ0FBYixHQUFtRDhCLE9BQU8sQ0FBQ1gsWUFBM0QsR0FBMEVXLE9BQU8sQ0FBQ0Y7QUFBaEcsT0FBdUdLLE9BQU8sQ0FBQ25FLFNBQVIsQ0FBa0JrQyxjQUFjLEVBQWhDLENBQXZHLENBSkYsQ0FEbUI7QUFBQSxHQUFwQixDQVZILENBdENGLENBREY7QUE0REQ7O0FBRUQ4QyxNQUFNLENBQUNoVyxTQUFQLEdBQW1CO0FBQ2pCa1YsVUFBUSxFQUFFcFYsaURBQVMsQ0FBQ3NYLEtBREg7QUFFakIvQixPQUFLLEVBQUV2VixpREFBUyxDQUFDSTtBQUZBLENBQW5CO0FBS2VxVix1SEFBUyxDQUN0QnZDLGVBQWUsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQURPLENBQVQsQ0FFYmdELE1BRmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUMxTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU14QyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkMyRCxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEaUM7QUFJdkNDLFdBQU8sRUFBRTtBQUNQLHlCQUFtQjtBQURaO0FBSjhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBU2UsU0FBU0MsSUFBVCxDQUFjdGIsS0FBZCxFQUFxQjtBQUNsQyxNQUFJdWIsT0FBTyxHQUFHLElBQWQ7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFGa0MsTUFJMUI1RSxLQUowQixHQUlUNVcsS0FKUyxDQUkxQjRXLEtBSjBCO0FBQUEsTUFJbkJ1QyxLQUptQixHQUlUblosS0FKUyxDQUluQm1aLEtBSm1COztBQU1sQyxNQUFJdkMsS0FBSyxDQUFDbFEsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCNlUsV0FBTyxHQUFHM0UsS0FBSyxDQUFDQSxLQUFLLENBQUNsUSxNQUFOLEdBQWEsQ0FBZCxDQUFmO0FBQ0E4VSxlQUFXLDZCQUFzQkQsT0FBTyxDQUFDbkYsTUFBOUIsY0FBd0NtRixPQUFPLENBQUNyRixFQUFoRCxDQUFYO0FBQ0Q7O0FBRUQsTUFBTTRDLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7QUFFQSxzQkFDRSwyREFBQyw2REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixrQkFDRSwyREFBQyxtRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWTtBQUFyQyxLQUNHNkIsS0FESCxDQURGLEVBSUdvQyxPQUFPLGdCQUVOLHFJQUNBLDJEQUFDLDZEQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxXQUFPLEVBQUMsWUFIVjtBQUlFLGNBQVUsRUFBQztBQUpiLGtCQU1FO0FBQUcsUUFBSSxFQUFDO0FBQVIsa0JBQVcsMkRBQUMsK0RBQUQ7QUFBUSxPQUFHLEVBQUVBLE9BQU8sQ0FBQ0UsSUFBckI7QUFBMkIsT0FBRyxFQUFFRixPQUFPLENBQUNHO0FBQXhDLElBQVgsQ0FORixlQU9FLDJEQUFDLG1FQUFEO0FBQVksV0FBTyxFQUFDLFdBQXBCO0FBQWdDLGdCQUFZO0FBQTVDLEtBQ0dILE9BQU8sQ0FBQ0UsSUFEWCxVQUNxQkYsT0FBTyxDQUFDSSxTQUQ3QixDQVBGLENBREEsZUFZQSwyREFBQyxnRUFBRCxPQVpBLGVBYUE7QUFBRyxhQUFTLEVBQUU3QyxPQUFPLENBQUN1QyxPQUF0QjtBQUErQixRQUFJLEVBQUVHO0FBQXJDLGtCQUNFO0FBQU0sMkJBQXVCLEVBQUU7QUFBQ0ksWUFBTSxFQUFFTCxPQUFPLENBQUNNO0FBQWpCO0FBQS9CLElBREYsQ0FiQSxDQUZNLEdBb0JMLElBeEJMLENBREY7QUE2QkQ7QUFFRFAsSUFBSSxDQUFDeFgsU0FBTCxHQUFpQjtBQUNmOFMsT0FBSyxFQUFFaFQsaURBQVMsQ0FBQ3NYLEtBREY7QUFFZi9CLE9BQUssRUFBRXZWLGlEQUFTLENBQUNJO0FBRkYsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNZ1QsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU1ELDZDQUFtQixDQUFDRSxJQUFwQixDQUF5QkMsUUFBekIsSUFBcUMsSUFBM0M7QUFBQSxDQUF2Qjs7QUFFQSxJQUFNSSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNzRSxvQkFBZ0IsRUFBRTtBQUNoQkMsY0FBUSxFQUFFLFVBRE07QUFFaEJyRSxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY3FFLElBQWQsQ0FBbUIsR0FBbkIsQ0FGRDtBQUdoQnJELFdBQUssRUFBRW5CLEtBQUssQ0FBQ0csT0FBTixDQUFjc0UsTUFBZCxDQUFxQkMsS0FIWjtBQUloQkMsa0JBQVksRUFBRTNFLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FKRTtBQUtoQnFFLHFCQUFlLEVBQUUseUNBTEQ7QUFNaEJDLG9CQUFjLEVBQUUsT0FOQTtBQU9oQkMsc0JBQWdCLEVBQUUsV0FQRjtBQVFoQkMsd0JBQWtCLEVBQUU7QUFSSixLQURtQjtBQVdyQ0MsV0FBTyxFQUFFO0FBQ1BULGNBQVEsRUFBRSxVQURIO0FBRVBVLFNBQUcsRUFBRSxDQUZFO0FBR1BDLFlBQU0sRUFBRSxDQUhEO0FBSVBDLFdBQUssRUFBRSxDQUpBO0FBS1BDLFVBQUksRUFBRSxDQUxDO0FBTVBsRixxQkFBZSxFQUFFO0FBTlYsS0FYNEI7QUFtQnJDbUYsMkJBQXVCLEVBQUU7QUFDdkJkLGNBQVEsRUFBRSxVQURXO0FBRXJCakUsYUFBTyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRlksT0FHcEJQLEtBQUssQ0FBQ3NGLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSG9CLEVBR1M7QUFDNUJqRixhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FEbUI7QUFFNUJpRixrQkFBWSxFQUFFO0FBRmMsS0FIVDtBQW5CYyxHQUFMO0FBQUEsQ0FBTixDQUE1QjtBQTZCZSxTQUFTQyxRQUFULENBQWtCamQsS0FBbEIsRUFBeUI7QUFDdEMsTUFBTThZLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7QUFFQSxNQUFNL0IsUUFBUSxHQUFHdlYsS0FBSyxDQUFDNkosSUFBdkI7QUFFQSxzQkFDRSwyREFBQyw4REFBRDtBQUFPLGFBQVMsRUFBRWlQLE9BQU8sQ0FBQ2dELGdCQUExQjtBQUE0QyxTQUFLLEVBQUU7QUFBRU0scUJBQWUsZ0JBQVM3RyxRQUFRLENBQUNwWSxHQUFsQjtBQUFqQjtBQUFuRCxrQkFFRztBQUFLLFNBQUssRUFBRTtBQUFFK2YsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFpQyxPQUFHLEVBQUUzSCxRQUFRLENBQUNwWSxHQUEvQztBQUFvRCxPQUFHLEVBQUVvWSxRQUFRLENBQUM0RDtBQUFsRSxJQUZILGVBR0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQzBEO0FBQXhCLElBSEYsZUFJRSwyREFBQyw2REFBRDtBQUFNLGFBQVM7QUFBZixrQkFDRSwyREFBQyw2REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRTtBQUFmLGtCQUNFO0FBQUssYUFBUyxFQUFFMUQsT0FBTyxDQUFDK0Q7QUFBeEIsa0JBQ0UsMkRBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsSUFBdEI7QUFBMkIsV0FBTyxFQUFDLElBQW5DO0FBQXdDLFNBQUssRUFBQyxTQUE5QztBQUF3RCxnQkFBWTtBQUFwRSxLQUNHdEgsUUFBUSxDQUFDNEQsS0FBVCxDQUFlbkMsY0FBYyxFQUE3QixDQURILENBREYsZUFJRSwyREFBQyxtRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsU0FBL0I7QUFBeUMsYUFBUztBQUFsRCxLQUNHekIsUUFBUSxDQUFDNkQsV0FBVCxDQUFxQnBDLGNBQWMsRUFBbkMsQ0FESCxDQUpGLGVBT0UsMkRBQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUU7QUFBRWpXLGNBQVEsRUFBRSxTQUFaO0FBQXVCa0ksV0FBSyxFQUFFO0FBQUUrRSxZQUFJLEVBQUV1SCxRQUFRLENBQUN2SDtBQUFqQjtBQUE5QjtBQURSLGtCQUVFLHNFQUFJdUgsUUFBUSxDQUFDNEgsUUFBVCxDQUFrQm5HLGNBQWMsRUFBaEMsQ0FBSixDQUZGLENBUEYsQ0FERixDQURGLENBSkYsQ0FERjtBQXVCRDtBQUVEaUcsUUFBUSxDQUFDblosU0FBVCxHQUFxQjtBQUNuQnNaLE1BQUksRUFBRXhaLGlEQUFTLENBQUNLO0FBREcsQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNkJFLElBQU1xVCxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckM2RixXQUFPLEVBQUU7QUFDTCx1QkFBaUIsS0FEWjtBQUVMLGlCQUFXLGNBRk47QUFHTCxzQkFBZ0IsTUFIWDtBQUlMLG1CQUFhO0FBSlIsS0FENEI7QUFPckNDLGNBQVUsRUFBRTtBQUNSLGlCQUFXLGFBREg7QUFFUix3QkFBa0IsUUFGVjtBQUdSLG9CQUFjLFFBSE47QUFJUixrQkFBWSxTQUpKO0FBS1IsZUFBUyxDQUxEO0FBTVIsbUJBQWEsS0FOTDtBQU9SLGtCQUFZLE1BUEo7QUFRUixtQkFBYTtBQVJMLEtBUHlCO0FBaUJyQ0Msc0JBQWtCLEVBQUU7QUFDaEJsRixZQUFNLEVBQUU7QUFEUTtBQWpCaUIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFzQkYsSUFBTW1GLFVBQVUsR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQixTQUFTRixVQUFULENBQW9CeGQsS0FBcEIsRUFBMkJxQyxHQUEzQixFQUFnQztBQUNsRSxzQkFBTywyREFBQyw4REFBRDtBQUFPLGFBQVMsRUFBQyxJQUFqQjtBQUFzQixPQUFHLEVBQUVBO0FBQTNCLEtBQW9DckMsS0FBcEMsRUFBUDtBQUNELENBRmtCLENBQW5CO0FBSUE7QUFFQTtJQUVROFcsZSxHQUFvQkMsOEMsQ0FBcEJELGU7O0FBRVIsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU1ELDhDQUFtQixDQUFDRSxJQUFwQixDQUF5QkMsUUFBekIsSUFBcUMsSUFBM0M7QUFBQSxDQUF2Qjs7QUFFQSxTQUFTeUcsS0FBVCxDQUFlM2QsS0FBZixFQUFzQjtBQUFBLE1BQ1Y0ZCxJQURVLEdBQ2U1ZCxLQURmLENBQ1Y0ZCxJQURVO0FBQUEsTUFDSkMsV0FESSxHQUNlN2QsS0FEZixDQUNKNmQsV0FESTtBQUFBLE1BQ1N6RCxDQURULEdBQ2VwYSxLQURmLENBQ1NvYSxDQURUO0FBR2xCLE1BQU10QixPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBRUEsTUFBSXdHLFFBQVEsR0FBRyxFQUFmOztBQUNBLGFBQW1DLEVBRWxDOztBQUNELE1BQU0zRSxLQUFLLEdBQUcsV0FBZDtBQUVBLHNCQUNFLHFGQUNFLDJEQUFDLCtEQUFEO0FBQ0UsUUFBSSxFQUFFeUUsSUFEUjtBQUVFLHVCQUFtQixFQUFFSixVQUZ2QjtBQUdFLGVBQVcsTUFIYjtBQUlFLFdBQU8sRUFBRUssV0FKWDtBQUtFLHVCQUFnQiwwQkFMbEI7QUFNRSx3QkFBaUI7QUFObkIsa0JBUUUsMkRBQUMsb0VBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsS0FBNEN6RCxDQUFDLENBQUMsT0FBRCxDQUE3QyxDQVJGLGVBU0UsMkRBQUMsc0VBQUQscUJBQ007QUFBSyxhQUFTLEVBQUV0QixPQUFPLENBQUN1RTtBQUF4QixrQkFDSSwyREFBQyxnRUFBRDtBQUNJLE9BQUcsRUFBRVMsUUFEVDtBQUVJLFNBQUssRUFBRTNFLEtBRlg7QUFHSSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3lFO0FBSHZCLGtCQUtJLDJEQUFDLHlEQUFEO0FBQWMsUUFBSSxFQUFFLEVBQXBCO0FBQXdCLFNBQUs7QUFBN0IsSUFMSixDQURKLGVBUUkscUZBQ0ksMkRBQUMsK0RBQUQ7QUFBb0IsT0FBRyxFQUFFTyxRQUF6QjtBQUFtQyxhQUFTLEVBQUVoRixPQUFPLENBQUN3RTtBQUF0RCxLQUNDLFVBQUFTLEtBQUs7QUFBQSxXQUFJQSxLQUFKO0FBQUEsR0FETixDQURKLENBUkosQ0FETixlQWVNO0FBQUssYUFBUyxFQUFFakYsT0FBTyxDQUFDdUU7QUFBeEIsa0JBQ0ksMkRBQUMseUVBQUQ7QUFDSSxPQUFHLEVBQUVTLFFBRFQ7QUFFSSxTQUFLLEVBQUMsaUJBRlY7QUFHSSxhQUFTLEVBQUVoRixPQUFPLENBQUN5RTtBQUh2QixrQkFLSSwyREFBQyxrRUFBRDtBQUF1QixRQUFJLEVBQUUsRUFBN0I7QUFBaUMsU0FBSztBQUF0QyxJQUxKLENBREosQ0FmTixlQXdCTTtBQUFLLGFBQVMsRUFBRXpFLE9BQU8sQ0FBQ3VFO0FBQXhCLGtCQUNJLDJEQUFDLCtEQUFEO0FBQ0ksT0FBRyxFQUFFUyxRQURUO0FBRUksU0FBSyxFQUFFM0UsS0FGWDtBQUdJLGFBQVMsRUFBRUwsT0FBTyxDQUFDeUU7QUFIdkIsa0JBS0ksMkRBQUMsd0RBQUQ7QUFBYSxRQUFJLEVBQUUsRUFBbkI7QUFBdUIsU0FBSztBQUE1QixJQUxKLENBREosZUFTSTtBQUFLLGFBQVMsRUFBRXpFLE9BQU8sQ0FBQ3dFO0FBQXhCLFlBVEosQ0F4Qk4sZUFtQ007QUFBSyxhQUFTLEVBQUV4RSxPQUFPLENBQUN1RTtBQUF4QixrQkFDSSwyREFBQyxnRUFBRDtBQUFxQixPQUFHLEVBQUVTLFFBQTFCO0FBQW9DLGFBQVMsRUFBRWhGLE9BQU8sQ0FBQ3lFO0FBQXZELGtCQUNJLDJEQUFDLHlEQUFEO0FBQWMsUUFBSSxFQUFFLEVBQXBCO0FBQXdCLFNBQUs7QUFBN0IsSUFESixDQURKLENBbkNOLGVBd0NNO0FBQUssYUFBUyxFQUFFekUsT0FBTyxDQUFDdUU7QUFBeEIsa0JBQ0ksMkRBQUMsZ0VBQUQ7QUFDSSxPQUFHLEVBQUVTLFFBRFQ7QUFFSSxTQUFLLEVBQUUzRSxLQUZYO0FBR0ksYUFBUyxFQUFDLEtBSGQ7QUFJSSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3lFO0FBSnZCLGtCQU1JLDJEQUFDLHlEQUFEO0FBQWMsUUFBSSxFQUFFLEVBQXBCO0FBQXdCLFNBQUs7QUFBN0IsSUFOSixDQURKLGVBVUk7QUFBSyxhQUFTLEVBQUV6RSxPQUFPLENBQUN3RTtBQUF4QixZQVZKLENBeENOLGVBb0RNO0FBQUssYUFBUyxFQUFFeEUsT0FBTyxDQUFDdUU7QUFBeEIsa0JBQ0ksMkRBQUMsNkRBQUQ7QUFDSSxPQUFHLEVBQUVTLFFBRFQ7QUFFSSxXQUFPLEVBQUUzRSxLQUZiO0FBR0ksUUFBSSxFQUFDLE1BSFQ7QUFJSSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3lFO0FBSnZCLGtCQU1JLDJEQUFDLHNEQUFEO0FBQVcsUUFBSSxFQUFFLEVBQWpCO0FBQXFCLFNBQUs7QUFBMUIsSUFOSixDQURKLENBcEROLENBVEYsZUF3RUUsMkRBQUMsc0VBQUQscUJBQ0UsMkRBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUVNLFdBQWpCO0FBQThCLFNBQUssRUFBQztBQUFwQyxhQURGLENBeEVGLENBREYsQ0FERjtBQWtGSDs7QUFFY3hFLHVIQUFTLENBQ3BCdkMsZUFBZSxDQUFDLENBQUMsUUFBRCxDQUFELENBREssQ0FBVCxDQUViNkcsS0FGYSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNckcsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDd0csbUJBQWUsRUFBRTtBQUNmbEcsYUFBTyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFZkwscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNxRSxJQUFkLENBQW1CLEdBQW5CO0FBRkYsS0FEb0I7QUFLckNpQyxrQkFBYyxFQUFFO0FBQ2RDLGVBQVMsRUFBRTFHLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFERztBQUxxQixHQUFMO0FBQUEsQ0FBTixDQUE1QjtJQVVRakIsZSxHQUFvQkMsOEMsQ0FBcEJELGU7O0FBRVIsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU1ELDhDQUFtQixDQUFDRSxJQUFwQixDQUF5QkMsUUFBekIsSUFBcUMsSUFBM0M7QUFBQSxDQUF2Qjs7QUFFQSxTQUFTaUgsT0FBVCxDQUFpQm5lLEtBQWpCLEVBQXdCO0FBQ3RCLE1BQU04WSxPQUFPLEdBQUd4QixTQUFTLEVBQXpCO0FBRHNCLE1BRWQ4QixXQUZjLEdBRWFwWixLQUZiLENBRWRvWixXQUZjO0FBQUEsTUFFRGdGLE1BRkMsR0FFYXBlLEtBRmIsQ0FFRG9lLE1BRkM7QUFBQSxNQUVPaEUsQ0FGUCxHQUVhcGEsS0FGYixDQUVPb2EsQ0FGUDtBQUl0QixzQkFDRSwyREFBQyw2REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixrQkFDRSwyREFBQyw4REFBRDtBQUFPLGFBQVMsRUFBRSxDQUFsQjtBQUFxQixhQUFTLEVBQUV0QixPQUFPLENBQUNrRjtBQUF4QyxrQkFDRSwyREFBQyxtRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWTtBQUFyQyxLQUNHNUQsQ0FBQyxDQUFDLE9BQUQsQ0FESixDQURGLGVBSUUsMkRBQUMsbUVBQUQsUUFBYWhCLFdBQWIsQ0FKRixDQURGLGVBT0UsMkRBQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBc0MsYUFBUyxFQUFFTixPQUFPLENBQUNtRjtBQUF6RCxLQUNHN0QsQ0FBQyxDQUFDLFFBQUQsQ0FESixDQVBGLEVBVUdnRSxNQUFNLENBQUNuVyxHQUFQLENBQVcsVUFBQ29WLE9BQUQsRUFBVW5FLEdBQVY7QUFBQSx3QkFDViwyREFBQyw2REFBRDtBQUFNLGFBQU8sRUFBQyxPQUFkO0FBQXNCLGFBQU8sRUFBQyxPQUE5QjtBQUFzQyxVQUFJLEVBQUVtRSxPQUFPLENBQUNsZ0IsR0FBcEQ7QUFBeUQsU0FBRyxFQUFFK2I7QUFBOUQsb0JBQ0UsMkRBQUMsNkRBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsZUFBUyxFQUFDLEtBQTFCO0FBQWdDLGFBQU8sRUFBRSxDQUF6QztBQUE0QyxnQkFBVSxFQUFDO0FBQXZELG9CQUNFLDJEQUFDLDZEQUFEO0FBQU0sVUFBSTtBQUFWLE9BQ0dtRSxPQUFPLENBQUNoVyxJQUFSLEtBQWlCLFFBQWpCLGdCQUE0QiwyREFBQyxnRUFBRCxPQUE1QixHQUE2QyxJQURoRCxFQUVHZ1csT0FBTyxDQUFDaFcsSUFBUixLQUFpQixVQUFqQixnQkFBOEIsMkRBQUMsa0VBQUQsT0FBOUIsR0FBaUQsSUFGcEQsRUFHR2dXLE9BQU8sQ0FBQ2hXLElBQVIsS0FBaUIsU0FBakIsZ0JBQTZCLDJEQUFDLGlFQUFELE9BQTdCLEdBQStDLElBSGxELEVBSUdnVyxPQUFPLENBQUNoVyxJQUFSLEtBQWlCLFdBQWpCLGdCQUErQiwyREFBQyxvRUFBRCxPQUEvQixHQUFtRCxJQUp0RCxDQURGLGVBT0UsMkRBQUMsNkRBQUQ7QUFBTSxVQUFJO0FBQVYsT0FBWWdXLE9BQU8sQ0FBQ2hXLElBQXBCLENBUEYsQ0FERixDQURVO0FBQUEsR0FBWCxDQVZILENBREY7QUEwQkQ7O0FBRUQ4VyxPQUFPLENBQUNyYSxTQUFSLEdBQW9CO0FBQ2xCc1YsYUFBVyxFQUFFeFYsaURBQVMsQ0FBQ0ksTUFETDtBQUVsQm9hLFFBQU0sRUFBRXhhLGlEQUFTLENBQUNzWDtBQUZBLENBQXBCO0FBS2U3Qix1SEFBUyxDQUN0QnZDLGVBQWUsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQURPLENBQVQsQ0FFYnFILE9BRmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1uSCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsU0FBTUQsOENBQW1CLENBQUNFLElBQXBCLENBQXlCQyxRQUF6QixJQUFxQyxJQUEzQztBQUFBLENBQXZCOztBQUVBLElBQU1JLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQjhHLE1BQUksRUFBRTtBQUNKbkIsV0FBTyxFQUFFO0FBREwsR0FEcUI7QUFJM0JvQixhQUFXLEVBQUU7QUFDWDVFLFFBQUksRUFBRTtBQURLLEdBSmM7QUFPM0I2RSxXQUFTLEVBQUU7QUFDVDVFLFNBQUssRUFBRTtBQURFO0FBUGdCLENBQUQsQ0FBNUI7QUFZZSxTQUFTNkUsS0FBVCxDQUFleGUsS0FBZixFQUFzQjtBQUNuQyxNQUFNOFksT0FBTyxHQUFHeEIsU0FBUyxFQUF6QjtBQURtQyxNQUUzQkUsS0FGMkIsR0FFakJ4WCxLQUZpQixDQUUzQndYLEtBRjJCO0FBSW5DLE1BQU04QyxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCLENBSm1DLENBTW5DOztBQUNBTyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLFFBQUl0RCxLQUFLLElBQUlBLEtBQUssQ0FBQ3BCLE1BQW5CLEVBQTJCO0FBRXpCa0UsY0FBUSxDQUFDckUsNEVBQWtCLENBQUN1QixLQUFLLENBQUNwQixNQUFQLENBQW5CLENBQVI7QUFDRDtBQUNGLEdBTlEsRUFNTixDQUFDb0IsS0FBRCxDQU5NLENBQVQ7O0FBUG1DLHFCQWVoQmlELGdFQUFXLENBQUMsVUFBQWxRLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNrVSxPQUFWO0FBQUEsR0FBTixDQWZLO0FBQUEsTUFlM0JySSxNQWYyQixnQkFlM0JBLE1BZjJCOztBQWlCbkMsc0JBQ0UsMkRBQUMsNkRBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsa0JBQ0UsMkRBQUMsdUVBQUQ7QUFBZ0IsYUFBUyxFQUFDLEdBQTFCO0FBQThCLFFBQUksRUFBRW9CLEtBQUssQ0FBQ3JhO0FBQTFDLGtCQUNFLDJEQUFDLDZEQUFEO0FBQU0sYUFBUyxFQUFFMmIsT0FBTyxDQUFDdUY7QUFBekIsa0JBQ0U7QUFBSyxhQUFTLEVBQUV2RixPQUFPLENBQUN3RjtBQUF4QixrQkFDRSwyREFBQyxvRUFBRCxxQkFDRSwyREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxJQUF0QjtBQUEyQixXQUFPLEVBQUM7QUFBbkMsS0FDRzlHLEtBQUssQ0FBQzJCLEtBQU4sQ0FBWW5DLGNBQWMsRUFBMUIsQ0FESCxDQURGLGVBSUUsMkRBQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUMsV0FBcEI7QUFBZ0MsYUFBUztBQUF6QyxLQUNHUSxLQUFLLENBQUM0QixXQUFOLENBQWtCcEMsY0FBYyxFQUFoQyxDQURILENBSkYsZUFPRSwyREFBQyxtRUFBRDtBQUFZLFdBQU8sRUFBQyxXQUFwQjtBQUFnQyxTQUFLLEVBQUM7QUFBdEMsS0FDR1osTUFBTSxJQUFJQSxNQUFNLENBQUNzSSxVQUFQLEtBQXNCLFFBQWhDLGdCQUNFLDJEQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFFLHFCQUFxQnRJLE1BQU0sQ0FBQ0Y7QUFBeEMsa0JBQ0Msc0VBQUlzQixLQUFLLENBQUNtSCxTQUFOLENBQWdCM0gsY0FBYyxFQUE5QixDQUFKLENBREQsQ0FERixHQUdZLElBSmYsQ0FQRixDQURGLENBREYsZUFpQkUsMkRBQUMsK0RBQUQ7QUFBUSxVQUFNO0FBQWQsS0FDR1EsS0FBSyxDQUFDb0gsS0FBTixnQkFDRCwyREFBQyxrRUFBRDtBQUFXLGFBQVMsRUFBRTlGLE9BQU8sQ0FBQ3lGLFNBQTlCO0FBQXlDLFNBQUssRUFBRS9HLEtBQUssQ0FBQ29ILEtBQXREO0FBQTZELFNBQUssRUFBRXBILEtBQUssQ0FBQ21ILFNBQU4sQ0FBZ0IzSCxjQUFjLEVBQTlCO0FBQXBFLElBREMsR0FFRyxJQUhOLENBakJGLENBREYsQ0FERixDQURGO0FBNkJEO0FBRUR3SCxLQUFLLENBQUMxYSxTQUFOLEdBQWtCO0FBQ2hCc1osTUFBSSxFQUFFeFosaURBQVMsQ0FBQ0s7QUFEQSxDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7SUFDUTZTLGUsR0FBb0JDLDhDLENBQXBCRCxlOztBQUVSLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFNRCw4Q0FBbUIsQ0FBQ0UsSUFBcEIsQ0FBeUJDLFFBQXpCLElBQXFDLElBQTNDO0FBQUEsQ0FBdkI7O0FBR0EsSUFBTUksU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDMkQsUUFBSSxFQUFFO0FBQ0orQixhQUFPLEVBQUUsTUFETDtBQUVKLGlCQUFXO0FBRlAsS0FEK0I7QUFLckNyRixTQUFLLEVBQUU7QUFDTGdILGlCQUFXLEVBQUVySCxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRFI7QUFMOEIsR0FBTDtBQUFBLENBQU4sQ0FBNUI7O0FBVUEsU0FBUytHLFFBQVQsT0FBeUM7QUFBQSxNQUF0QjFFLENBQXNCLFFBQXRCQSxDQUFzQjtBQUFBLE1BQW5CRixnQkFBbUIsUUFBbkJBLGdCQUFtQjtBQUN2QyxNQUFNcEIsT0FBTyxHQUFHeEIsU0FBUyxFQUF6Qjs7QUFEdUMsd0JBRWZtRyw0Q0FBSyxDQUFDMUQsUUFBTixDQUFlLEtBQWYsQ0FGZTtBQUFBO0FBQUEsTUFFaEM2RCxJQUZnQztBQUFBLE1BRTFCbUIsT0FGMEI7O0FBR3ZDLE1BQU1DLFNBQVMsR0FBR3ZCLDRDQUFLLENBQUN3QixNQUFOLENBQWEsSUFBYixDQUFsQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxXQUFPLENBQUMsVUFBQUksUUFBUTtBQUFBLGFBQUksQ0FBQ0EsUUFBTDtBQUFBLEtBQVQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTXRCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFoWSxLQUFLLEVBQUk7QUFDM0IsUUFBSW1aLFNBQVMsQ0FBQzliLE9BQVYsSUFBcUI4YixTQUFTLENBQUM5YixPQUFWLENBQWtCa2MsUUFBbEIsQ0FBMkJ2WixLQUFLLENBQUMvRyxNQUFqQyxDQUF6QixFQUFtRTtBQUNqRTtBQUNEOztBQUVEaWdCLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQU5EOztBQVFBLFdBQVNNLGlCQUFULENBQTJCeFosS0FBM0IsRUFBa0M7QUFDaEMsUUFBSUEsS0FBSyxDQUFDaUwsR0FBTixLQUFjLEtBQWxCLEVBQXlCO0FBQ3ZCakwsV0FBSyxDQUFDM0UsY0FBTjtBQUNBNmQsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsR0F0QnNDLENBd0J2Qzs7O0FBQ0EsTUFBTUksUUFBUSxHQUFHMUIsNENBQUssQ0FBQ3dCLE1BQU4sQ0FBYXJCLElBQWIsQ0FBakI7QUFDQUgsOENBQUssQ0FBQzNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJcUUsUUFBUSxDQUFDamMsT0FBVCxLQUFxQixJQUFyQixJQUE2QjBhLElBQUksS0FBSyxLQUExQyxFQUFpRDtBQUMvQ29CLGVBQVMsQ0FBQzliLE9BQVYsQ0FBa0J0QixLQUFsQjtBQUNEOztBQUVEdWQsWUFBUSxDQUFDamMsT0FBVCxHQUFtQjBhLElBQW5CO0FBQ0QsR0FORCxFQU1HLENBQUNBLElBQUQsQ0FOSDtBQVFBLHNCQUNFO0FBQUssYUFBUyxFQUFFOUUsT0FBTyxDQUFDcUM7QUFBeEIsa0JBQ0UscUZBQ0UsMkRBQUMsK0RBQUQ7QUFDRSxPQUFHLEVBQUU2RCxTQURQO0FBRUUscUJBQWVwQixJQUFJLEdBQUcsZ0JBQUgsR0FBc0JuZixTQUYzQztBQUdFLHFCQUFjLE1BSGhCO0FBSUUsV0FBTyxFQUFFeWdCO0FBSlgsS0FNR2hGLGdCQU5ILENBREYsZUFTRSwyREFBQywrREFBRDtBQUFRLFFBQUksRUFBRTBELElBQWQ7QUFBb0IsWUFBUSxFQUFFb0IsU0FBUyxDQUFDOWIsT0FBeEM7QUFBaUQsUUFBSSxFQUFFekUsU0FBdkQ7QUFBa0UsY0FBVSxNQUE1RTtBQUE2RSxpQkFBYTtBQUExRixLQUNHO0FBQUEsUUFBRzZnQixlQUFILFNBQUdBLGVBQUg7QUFBQSxRQUFvQkMsU0FBcEIsU0FBb0JBLFNBQXBCO0FBQUEsd0JBQ0MsMkRBQUMsNkRBQUQsNEVBQ01ELGVBRE47QUFFRSxXQUFLLEVBQUU7QUFBRUUsdUJBQWUsRUFBRUQsU0FBUyxLQUFLLFFBQWQsR0FBeUIsWUFBekIsR0FBd0M7QUFBM0Q7QUFGVCxxQkFJRSwyREFBQyw4REFBRCxxQkFDRSwyREFBQywwRUFBRDtBQUFtQixpQkFBVyxFQUFFMUI7QUFBaEMsb0JBQ0UsMkRBQUMsaUVBQUQ7QUFBVSxtQkFBYSxFQUFFRCxJQUF6QjtBQUErQixRQUFFLEVBQUMsZ0JBQWxDO0FBQW1ELGVBQVMsRUFBRXlCO0FBQTlELG9CQUNFLDJEQUFDLGlFQUFEO0FBQVUsYUFBTyxFQUFFLG1CQUFNO0FBQ3ZCL2dCLGNBQU0sQ0FBQzBDLFFBQVAsQ0FBZ0I5RCxJQUFoQixHQUF1QixXQUF2QjtBQUNEO0FBRkQsT0FFSWtkLENBQUMsQ0FBQyxTQUFELENBRkwsQ0FERixlQUlFLDJEQUFDLGlFQUFEO0FBQVUsYUFBTyxFQUFFLG1CQUFPO0FBQ3hCO0FBQ0FXLG9CQUFZLENBQUMwRSxLQUFiO0FBRUFuaEIsY0FBTSxDQUFDMEMsUUFBUCxDQUFnQjlELElBQWhCLEdBQXVCLFNBQXZCO0FBQ0Q7QUFMRCxPQUtLa2QsQ0FBQyxDQUFDLFFBQUQsQ0FMTixDQUpGLENBREYsQ0FERixDQUpGLENBREQ7QUFBQSxHQURILENBVEYsQ0FERixDQURGO0FBc0NEOztBQUVjZix1SEFBUyxDQUN0QnZDLGVBQWUsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQURPLENBQVQsQ0FFYmdJLFFBRmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNyR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU05SCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsU0FBTUQsOENBQW1CLENBQUNFLElBQXBCLENBQXlCQyxRQUF6QixJQUFxQyxJQUEzQztBQUFBLENBQXZCOztBQUVBLElBQU1JLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ2tJLFlBQVEsRUFBRTtBQUNSeEIsZUFBUyxFQUFFMUcsS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZDtBQURIO0FBRDJCLEdBQUw7QUFBQSxDQUFOLENBQTVCOztBQU1BLFNBQVM0SCxJQUFULE9BQWdDO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM5QixNQUFNdEYsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFFQSxNQUFJcUYsWUFBSixFQUFrQjtBQUNoQjtBQUNBdEYsWUFBUSxDQUFDaEcseUVBQWdCLENBQUNzTCxZQUFELENBQWpCLENBQVI7QUFDRDs7QUFFRCxNQUFNckwsTUFBTSxHQUFHa0csK0RBQVcsQ0FBQyxVQUFBbFEsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ2dLLE1BQU4sQ0FBYUEsTUFBakI7QUFBQSxHQUFOLENBQTFCOztBQVI4QixxQkFTWmtHLCtEQUFXLENBQUMsVUFBQWxRLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNxTSxLQUFWO0FBQUEsR0FBTixDQVRDO0FBQUEsTUFTdEJBLEtBVHNCLGdCQVN0QkEsS0FUc0I7O0FBQUEsc0JBVU02RCwrREFBVyxDQUFDLFVBQUFsUSxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDbVEsSUFBVjtBQUFBLEdBQU4sQ0FWakI7QUFBQSxNQVV0QkcsWUFWc0IsaUJBVXRCQSxZQVZzQjtBQUFBLE1BVVJuRSxTQVZRLGlCQVVSQSxTQVZROztBQVk5Qm9FLHlEQUFTLENBQUMsWUFBTTtBQUNkK0Usd0VBQUksQ0FBQztBQUFFMWlCLFNBQUcsRUFBRSxrQkFBUDtBQUEyQjJpQixZQUFNLEVBQUV2TCxNQUFNLENBQUN3TDtBQUExQyxLQUFELENBQUo7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFqRix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJdkcsTUFBTSxJQUFJQSxNQUFNLENBQUNNLFVBQVAsS0FBc0IsU0FBcEMsRUFBK0M7QUFDN0MsVUFBSWdHLFlBQVksS0FBSyxLQUFyQixFQUE0QjtBQUMxQnZjLGNBQU0sQ0FBQzBDLFFBQVAsQ0FBZ0I5RCxJQUFoQixHQUF1QixTQUF2QjtBQUNEO0FBQ0Y7QUFDRixHQU5RLEVBTU4sQ0FBQzJkLFlBQUQsRUFBZXRHLE1BQWYsQ0FOTSxDQUFUO0FBUUF1Ryx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJdkcsTUFBTSxJQUFJQSxNQUFNLENBQUNNLFVBQVAsS0FBc0IsU0FBcEMsRUFBK0M7QUFDN0MsVUFBSWdHLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QixZQUFJakUsS0FBSyxDQUFDbFEsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixjQUFJLENBQUMsQ0FBQ2dRLFNBQU4sRUFBaUI7QUFDZjRELG9CQUFRLENBQUM3RCx5RUFBaUIsQ0FBQ0MsU0FBRCxDQUFsQixDQUFSO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQVZRLEVBVU4sQ0FBQ0EsU0FBRCxDQVZNLENBQVQ7QUFhQSxNQUFNb0MsT0FBTyxHQUFHeEIsU0FBUyxFQUF6Qjs7QUFFQSxNQUFJLENBQUMvQyxNQUFMLEVBQWE7QUFDWCx3QkFBUSx1RUFBUjtBQUNEOztBQUVELHNCQUNFLHFGQUNFLDJEQUFDLGdEQUFELHFCQUNFLDBFQUFRQSxNQUFNLENBQUNLLElBQWYsQ0FERixlQUVFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDO0FBQTlCLElBRkYsRUFHR0wsTUFBTSxDQUFDeUwsUUFBUCxDQUFnQi9YLEdBQWhCLENBQW9CLFVBQUNnWSxHQUFELEVBQU0vRyxHQUFOLEVBQWM7QUFFL0IsUUFBSStHLEdBQUcsQ0FBQ3pjLElBQUosS0FBYSxVQUFqQixFQUE2QjtBQUMzQiwwQkFBUTtBQUFNLGdCQUFRLEVBQUV5YyxHQUFHLENBQUNDLFNBQXBCO0FBQStCLGVBQU8sRUFBRUQsR0FBRyxDQUFDNUUsT0FBNUM7QUFBcUQsV0FBRyxFQUFFbkM7QUFBMUQsUUFBUjtBQUNELEtBRkQsTUFFUTtBQUNOLDBCQUFRO0FBQU0sWUFBSSxFQUFFK0csR0FBRyxDQUFDQyxTQUFoQjtBQUEyQixlQUFPLEVBQUVELEdBQUcsQ0FBQzVFLE9BQXhDO0FBQWlELFdBQUcsRUFBRW5DO0FBQXRELFFBQVI7QUFDRDtBQUNKLEdBUEEsQ0FISCxDQURGLEVBYUczRSxNQUFNLGdCQUNQLHFJQUNFLDJEQUFDLG9FQUFELE9BREYsZUFFRSwyREFBQyxrRUFBRDtBQUFXLFlBQVEsRUFBQztBQUFwQixrQkFDRSwyREFBQywwREFBRDtBQUFRLFlBQVEsRUFBQyxNQUFqQjtBQUF3QixTQUFLLEVBQUVBLE1BQU0sQ0FBQ0ssSUFBdEM7QUFBNEMsVUFBTSxFQUFFTCxNQUFNLENBQUNZO0FBQTNELElBREYsZUFFRSxzRkFDRSwyREFBQyw0REFBRDtBQUFVLFFBQUksRUFBRVosTUFBTSxDQUFDZ0I7QUFBdkIsSUFERixlQUVFLDJEQUFDLDZEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRTtBQUF6QixLQUNHaEIsTUFBTSxDQUFDb0IsTUFBUCxDQUFjMU4sR0FBZCxDQUFrQixVQUFBdVAsS0FBSztBQUFBLHdCQUN0QiwyREFBQywwREFBRDtBQUFPLFNBQUcsRUFBRUEsS0FBSyxDQUFDMkIsS0FBTixDQUFZbkMsY0FBYyxFQUExQixDQUFaO0FBQTJDLFdBQUssRUFBRVE7QUFBbEQsTUFEc0I7QUFBQSxHQUF2QixDQURILENBRkYsZUFPRSwyREFBQyw2REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBUyxFQUFFc0IsT0FBTyxDQUFDNEc7QUFBL0Msa0JBQ0UsMkRBQUMseURBQUQ7QUFBTSxTQUFLLEVBQUMsb0JBQVo7QUFBaUMsU0FBSyxFQUFFOUk7QUFBeEMsSUFERixlQUVFLDJEQUFDLDREQUFEO0FBQ0UsZUFBVyxFQUFFckMsTUFBTSxDQUFDNEwsT0FBUCxDQUFlQyxLQUFmLENBQXFCcEosY0FBYyxFQUFuQyxDQURmO0FBRUUsVUFBTSxFQUFFekMsTUFBTSxDQUFDNEwsT0FBUCxDQUFlL0I7QUFGekIsSUFGRixDQVBGLENBRkYsQ0FGRixlQW9CRSwyREFBQywyREFBRDtBQUFRLFVBQU0sRUFBRTdKLE1BQU0sQ0FBQ2tEO0FBQXZCLElBcEJGLENBRE8sR0FzQkEsSUFuQ1QsQ0FERjtBQXVDRDs7QUFFRGtJLElBQUksQ0FBQ3hZLGVBQUwsR0FBdUIsZ0JBQU1rSSxHQUFOLEVBQWE7QUFDbEMsTUFBSUEsR0FBRyxDQUFDZ1IsR0FBUixFQUFhO0FBQ1g7QUFDQSxRQUFNNVcsR0FBRyxHQUFHLE1BQU1KLEtBQUssV0FBSWlYLGdEQUFNLENBQUNDLEdBQVAsQ0FBV2hqQixJQUFmLGtDQUEyQzhSLEdBQUcsQ0FBQ2dSLEdBQUosQ0FBUUcsT0FBUixDQUFnQmpqQixJQUEzRCxFQUF2QjtBQUNBLFFBQU1xaUIsWUFBWSxHQUFHLE1BQU1uVyxHQUFHLENBQUNHLElBQUosRUFBM0I7QUFFQSxXQUFPO0FBQ0xnVyxrQkFBWSxFQUFaQTtBQURLLEtBQVA7QUFHRDs7QUFFRCxTQUFPO0FBQ0xBLGdCQUFZLEVBQUU7QUFEVCxHQUFQO0FBR0QsQ0FkRDs7QUFnQmVELG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpOiB7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuQVBJX0hPU1QgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCdcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuU0VSVkVSX0hPU1QgfHwgJ2h0dHA6Ly9sb2NhbGhvc3QnLFxuICAgIHBvcnQ6IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKSB8fCAxMDAwXG4gIH0sXG4gIGkxOG46IHtcbiAgICBsYW5ndWFnZXM6IHByb2Nlc3MuZW52LkxBTkdVQUdFUyB8fCBbJ2VuJywgJ2VzJywgJ2ZyJ10sXG4gICAgZGVmYXVsdExhbmd1YWdlOiBwcm9jZXNzLmVudi5ERUZBVUxUX0xBTkdVQUdFIHx8ICdmcicsXG4gIH0sXG59O1xuIiwiaW1wb3J0IE5leHRJMThOZXh0IGZyb20gJ25leHQtaTE4bmV4dCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuY29uc3Qge1xuICBpMThuOiB7IGxhbmd1YWdlcywgZGVmYXVsdExhbmd1YWdlIH0sXG59ID0gY29uZmlnO1xuXG5jb25zdCBmYWxsYmFja0xhbmd1YWdlID0gZGVmYXVsdExhbmd1YWdlO1xuXG4vLyBPcHRpb25zIGxpc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yI2RldGVjdG9yLW9wdGlvbnNcbmNvbnN0IGRldGVjdG9yT3B0aW9ucyA9IHtcbiAgb3JkZXI6IFsnY29va2llJ10sXG4gIGNhY2hlczogWydjb29raWUnXSxcbiAgbG9va3VwQ29va2llOiAnbmV4dC1pMThuZXh0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOZXh0STE4TmV4dCh7XG4gIG90aGVyTGFuZ3VhZ2VzOiBsYW5ndWFnZXMsXG4gIGZhbGxiYWNrTG5nOiBmYWxsYmFja0xhbmd1YWdlLFxuICBkZWZhdWx0TlM6ICdjb21tb24nLFxuICBkZXRlY3Rpb246IGRldGVjdG9yT3B0aW9ucyxcbn0pO1xuXG4vLyBrbm93biBidWcgc2hvd2luZyAncmVhY3QtaTE4bmV4dDo6IGkxOG4ubGFuZ3VhZ2VzIHdlcmUgdW5kZWZpbmVkIG9yIGVtcHR5IHVuZGVmaW5lZCdcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pc2FhY2hpbm1hbi9uZXh0LWkxOG5leHQvaXNzdWVzLzM3NFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydCBjb25zdCBWRVJJRllfVE9LRU5fUkVRVUVTVCA9IFwiVkVSSUZZX1RPS0VOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBWRVJJRllfVE9LRU5fUkVRVUVTVF9TVUNDRVNTID0gXCJWRVJJRllfVE9LRU5fUkVRVUVTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVkVSSUZZX1RPS0VOX1JFUVVFU1RfRkFJTFVSRSA9IFwiVkVSSUZZX1RPS0VOX1JFUVVFU1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1QgPSBcIkZFVENIX1VTRVJfSU5GT19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfU1VDQ0VTUyA9XG4gIFwiRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJfSU5GT19SRVFVRVNUX0ZBSUxVUkUgPVxuICBcIkZFVENIX1VTRVJfSU5GT19SRVFVRVNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuUmVxdWVzdCh7IHRva2VuLCByb2xlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBWRVJJRllfVE9LRU5fUkVRVUVTVCxcbiAgICB0b2tlbixcbiAgICByb2xlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlblJlcXVlc3RTdWNjZXNzKGpzb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBWRVJJRllfVE9LRU5fUkVRVUVTVF9TVUNDRVNTLFxuICAgIGpzb25cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuUmVxdWVzdEZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBWRVJJRllfVE9LRU5fUkVRVUVTVF9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJJbmZvKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1VTRVJfSU5GT19SRVFVRVNUXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJJbmZvU3VjY2Vzcyhqc29uKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfU1VDQ0VTUyxcbiAgICBqc29uXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJJbmZvRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1VTRVJfSU5GT19SRVFVRVNUX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBGRVRDSF9BTExERUJBVEVTX1JFUVVFU1QgPSBcIkZFVENIX0FMTERFQkFURVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0FMTERFQkFURVNfU1VDQ0VTUyA9IFwiRkVUQ0hfQUxMREVCQVRFU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfQUxMREVCQVRFU19GQUlMVVJFID0gXCJGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZFVENIX0RFQkFURV9SRVFVRVNUID0gXCJGRVRDSF9ERUJBVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0RFQkFURV9TVUNDRVNTID0gXCJGRVRDSF9ERUJBVEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0RFQkFURV9GQUlMVVJFID0gXCJGRVRDSF9ERUJBVEVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0VUX0RFQkFURV9SRVFVRVNUID0gXCJTRVRfREVCQVRFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTRVRfREVCQVRFX1NVQ0NFU1MgPSBcIlNFVF9ERUJBVEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNFVF9ERUJBVEVfRkFJTFVSRSA9IFwiU0VUX0RFQkFURV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfREVCQVRFX1JFUVVFU1QgPSBcIkNSRUFURV9ERUJBVEVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERUJBVEVfU1VDQ0VTUyA9IFwiQ1JFQVRFX0RFQkFURV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0RFQkFURV9GQUlMVVJFID0gXCJDUkVBVEVfREVCQVRFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1JFUVVFU1QgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9TVUNDRVNTID0gXCJVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfRkFJTFVSRSA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19SRVFVRVNUID0gXCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1MgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfRkFJTFVSRSA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNUID0gXCJVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTUyA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX0ZBSUxVUkUgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGViYXRlc1JlcXVlc3QoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfQUxMREVCQVRFU19SRVFVRVNUXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlYmF0ZXNTdWNjZXNzKGRlYmF0ZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9BTExERUJBVEVTX1NVQ0NFU1MsXG4gICAgZGViYXRlc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZWJhdGVzRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0FMTERFQkFURVNfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGViYXRlUmVxdWVzdChkZWJhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfREVCQVRFX1JFUVVFU1QsXG4gICAgZGViYXRlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlYmF0ZVJlcXVlc3QobmFtZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0RFQkFURV9SRVFVRVNULFxuICAgIG5hbWVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGViYXRlU3VjY2VzcyhkZWJhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9ERUJBVEVfU1VDQ0VTUyxcbiAgICBkZWJhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGViYXRlRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0RFQkFURV9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWJhdGVSZXF1ZXN0KG5hbWUsIHNsdWcsIGRlYmF0ZVR5cGUsIGxhbmd1YWdlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENSRUFURV9ERUJBVEVfUkVRVUVTVCxcbiAgICBuYW1lLFxuICAgIHNsdWcsXG4gICAgZGViYXRlVHlwZSxcbiAgICBsYW5ndWFnZXNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlYmF0ZVN1Y2Nlc3MoZGViYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX0RFQkFURV9TVUNDRVNTLFxuICAgIGRlYmF0ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGViYXRlRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENSRUFURV9ERUJBVEVfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJSZXF1ZXN0KGRlYmF0ZUlELCBoZWFkZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNULFxuICAgIGRlYmF0ZUlELFxuICAgIGhlYWRlclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJTdWNjZXNzKGRlYmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX1NVQ0NFU1MsXG4gICAgZGViYXRlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZUhlYWRlckZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3UmVxdWVzdChkZWJhdGVJRCwgb3ZlcnZpZXcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1JFUVVFU1QsXG4gICAgZGViYXRlSUQsXG4gICAgb3ZlcnZpZXdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdTdWNjZXNzKGRlYmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfU1VDQ0VTUyxcbiAgICBkZWJhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlT3ZlcnZpZXdGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc1JlcXVlc3QoZGViYXRlSUQsIHRoZW1lcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1JFUVVFU1QsXG4gICAgZGViYXRlSUQsXG4gICAgdGhlbWVzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc1N1Y2Nlc3MoZGViYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTUyxcbiAgICBkZWJhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBGRVRDSF9NT0RVTEVfUkVRVUVTVCA9IFwiRkVUQ0hfTU9EVUxFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9NT0RVTEVfU1VDQ0VTUyA9IFwiRkVUQ0hfTU9EVUxFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9NT0RVTEVfRkFJTFVSRSA9IFwiRkVUQ0hfTU9EVUxFX0ZBSUxVUkVcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hNb2R1bGVSZXF1ZXN0KGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfTU9EVUxFX1JFUVVFU1QsXG4gICAgaWRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW9kdWxlU3VjY2Vzcyhtb2R1bGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9NT0RVTEVfU1VDQ0VTUyxcbiAgICBtb2R1bGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW9kdWxlRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX01PRFVMRV9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfUE9TVFNfUkVRVUVTVCA9IFwiRkVUQ0hfUE9TVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX1BPU1RTX1NVQ0NFU1MgPSBcIkZFVENIX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1NUU19GQUlMVVJFID0gXCJGRVRDSF9QT1NUU19GQUlMVVJFXCI7ICBcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHNSZXF1ZXN0KGFjY291bnRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BPU1RTX1JFUVVFU1QsXG4gICAgYWNjb3VudElkXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzU3VjY2Vzcyhwb3N0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BPU1RTX1NVQ0NFU1MsXG4gICAgcG9zdHNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHNGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfUE9TVFNfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZsb3dSaWdodCBmcm9tICdsb2Rhc2gvZmxvd1JpZ2h0JztcblxuaW1wb3J0IG5leHRJMThOZXh0SW5zdGFuY2UgZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IHsgd2l0aFRyYW5zbGF0aW9uIH0gPSBuZXh0STE4TmV4dEluc3RhbmNlO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIENvcHlyaWdodCDCqVxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc2ltcGF0aWNvLm9ubGluZS9cIj5cbiAgICAgICAgU2ltcGF0aWNvXG4gICAgICA8L2E+e1wiIFwifVxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIHtcIi5cIn1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZm9vdGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgLy8gbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiwgMClcbiAgfSxcbiAgdG9vbGJhclNlY29uZGFyeToge1xuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWFyb3VuZFwiLFxuICAgIG92ZXJmbG93WDogXCJhdXRvXCJcbiAgfSxcbiAgbGlua1NlbGVjdGVkOiB7XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjAwOTM4ZW0nLFxuICAgIGNvbG9yOiAnIzAwN2JmZidcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICBmb250RmFtaWx5OiBcIlJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMDkzOGVtJ1xuICB9XG59KSk7XG5cbmZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgc2VsZWN0ZWQsIGZvb3RlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPFRvb2xiYXJcbiAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgdmFyaWFudD1cImRlbnNlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJTZWNvbmRhcnl9XG4gICAgICA+XG4gICAgICB7Zm9vdGVyLnNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgIGlmIChzZWN0aW9uLnBhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gKDxMaW5rXG4gICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6ICdjbXNwYWdlJywgcXVlcnk6IHsgcGFnZTogc2VjdGlvbi5wYWdlLCB0aXRsZTogc2VjdGlvbi5sYW5ndWFnZXNbZ2V0Q3VycmVudExhbmcoKV0gfSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IHNlY3Rpb24ubGFuZ3VhZ2VzW2dldEN1cnJlbnRMYW5nKCldID8gY2xhc3Nlcy5saW5rU2VsZWN0ZWQgOiBjbGFzc2VzLmxpbmt9PntzZWN0aW9uLmxhbmd1YWdlc1tnZXRDdXJyZW50TGFuZygpXX08L2E+XG4gICAgICAgICAgPC9MaW5rPilcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgICA8Q29weXJpZ2h0IC8+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmxvd1JpZ2h0KFxuICB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSlcbikoRm9vdGVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBmbG93UmlnaHQgZnJvbSAnbG9kYXNoL2Zsb3dSaWdodCc7XG5cbmltcG9ydCBuZXh0STE4TmV4dEluc3RhbmNlIGZyb20gJy4uLy4uL2kxOG4nO1xuaW1wb3J0IFVzZXJNZW51IGZyb20gXCIuL1VzZXJNZW51XCI7XG5pbXBvcnQgU2hhcmUgZnJvbSBcIi4vU2hhcmVcIjtcbmltcG9ydCB7IGZldGNoVXNlckluZm8gfSBmcm9tIFwiLi4vYWN0aW9ucy9hdXRoXCI7XG5cbmNvbnN0IHsgd2l0aFRyYW5zbGF0aW9uIH0gPSBuZXh0STE4TmV4dEluc3RhbmNlO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRvb2xiYXI6IHtcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YFxuICB9LFxuICB0b29sYmFyVGl0bGU6IHtcbiAgICBmbGV4OiAxXG4gIH0sXG4gIHRvb2xiYXJTZWNvbmRhcnk6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcbiAgICB3aWR0aDogXCI4MCVcIixcbiAgICBvdmVyZmxvd1g6IFwiYXV0b1wiXG4gIH0sXG4gIHRvb2xiYXJMaW5rOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICBmbGV4U2hyaW5rOiAwXG4gIH0sXG4gIGxpbmtTZWxlY3RlZDoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICBmb250RmFtaWx5OiBcIlJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMDkzOGVtJyxcbiAgICBjb2xvcjogJyMwMDdiZmYnXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDA5MzhlbSdcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgW3NoYXJlT3Blbiwgc2V0U2hhcmVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpcnN0TmFtZURpc3BsYXksIHNldEZpcnN0TmFtZURpc3BsYXldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHsgaGVhZGVyLCB0aXRsZSwgc2VsZWN0ZWQsIHQgfSA9IHByb3BzO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVNoYXJlQ2xvc2UoKSB7XG4gICAgc2V0U2hhcmVPcGVuKGZhbHNlKTtcbiAgfVxuXG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBsZXQgZmlyc3ROYW1lTG9jYWxTdG9yYWdlO1xuXG4gIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgaWQsIGlzVmFsaWRUb2tlbiwgdG9rZW4sIGFjY291bnRJZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aCk7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gU2VydmVyIHNpZGUgcmVuZGVyaW5nIHByb3RlY3Rpb25cbiAgICBmaXJzdE5hbWVMb2NhbFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TmFtZVwiKTtcbiAgfVxuICAvLyBGaXJzdCB0aW1lIGVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFB1bGwgaW5mbyBmcm9tIGxvY2FsIHN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgaWYgKGZpcnN0TmFtZUxvY2FsU3RvcmFnZSkge1xuICAgICAgc2V0Rmlyc3ROYW1lRGlzcGxheShmaXJzdE5hbWVMb2NhbFN0b3JhZ2UpO1xuICAgIH1cbiAgfSwgW10pO1xuXG5cbiAgLy8gRmlyc3QgdGltZSBlZmZlY3QgYW5kIHdoZW4gaXNWYWxpZFRva2VuIGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIGlmIChpc1ZhbGlkVG9rZW4pIHtcbiAgICAgLy8gU28gdGhlIHRva2VuIGlzIHByZXNlbnQgYW5kIHZhbGlkLCBkbyBJIGhhdmUgdGhlIHVzZXIgZGV0YWlscz9cbiAgICAgaWYgKCFmaXJzdE5hbWVMb2NhbFN0b3JhZ2UpIHtcbiAgICAgICBkaXNwYXRjaChmZXRjaFVzZXJJbmZvKCkpO1xuICAgICB9XG4gICB9XG5cbiAgIC8vIFNvcnJ5IHRva2VuIG5vIGxvbmdlciB2YWxpZCwgZ2V0IHJpZCBvZiBkaXNwbGF5IG5hbWUgZm9yIGxvZ2luXG4gICBpZiAoaXNWYWxpZFRva2VuKSB7XG4gICAgIGlmIChmaXJzdE5hbWVMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHNldEZpcnN0TmFtZURpc3BsYXkoKTtcbiAgICAgfVxuICAgfVxuXG4gICBpZiAoaXNWYWxpZFRva2VuKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcbiAgIH1cbiAgfSwgW2lzVmFsaWRUb2tlbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGxvY2Fsc3RvcmFnZSBmb3Igb3RoZXIgYXBwcyBidXQgYWxzbyB1cGRhdGUgb3VyIGxvY2FsIHN0YXRlIHRvIGZvcmNlIHJlbmRlclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3ROYW1lXCIsIGZpcnN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0TmFtZVwiLCBsYXN0TmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aWRcIiwgaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjb3VudElkXCIsIGFjY291bnRJZCk7XG4gICAgc2V0Rmlyc3ROYW1lRGlzcGxheShmaXJzdE5hbWUpO1xuICB9LCBbZmlyc3ROYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxuICAgICAgICB7aGVhZGVyLnNoYXJlID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtcbiAgICAgICAgICAgIHNldFNoYXJlT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgID57dCgnc2hhcmUnKX08L0J1dHRvbj5cbiAgICAgICAgICA8U2hhcmUgb3Blbj17c2hhcmVPcGVufSBoYW5kbGVDbG9zZT17aGFuZGxlU2hhcmVDbG9zZX0gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBub1dyYXBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyVGl0bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT48Lz4gKSA6IG51bGwgfVxuICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIHshZmlyc3ROYW1lRGlzcGxheSA/XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xvZ2luL1wiO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnc2lnbmluJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDogPFVzZXJNZW51IGZpcnN0TmFtZURpc3BsYXk9e2ZpcnN0TmFtZURpc3BsYXl9Lz59XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgICA8VG9vbGJhclxuICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICB2YXJpYW50PVwiZGVuc2VcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclNlY29uZGFyeX1cbiAgICAgID5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3NlbGVjdGVkID09PSAnaG9tZScgPyBjbGFzc2VzLmxpbmtTZWxlY3RlZCA6IGNsYXNzZXMubGlua30+e3QoJ2hvbWUnKX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge2hlYWRlci5zZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGlkeCkgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6ICdjbXNwYWdlJywgcXVlcnk6IHsgcGFnZTogc2VjdGlvbi5wYWdlLCB0aXRsZTogc2VjdGlvbi5sYW5ndWFnZXNbZ2V0Q3VycmVudExhbmcoKV0gfSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IHNlY3Rpb24ubGFuZ3VhZ2VzW2dldEN1cnJlbnRMYW5nKCldID8gY2xhc3Nlcy5saW5rU2VsZWN0ZWQgOiBjbGFzc2VzLmxpbmt9PntzZWN0aW9uLmxhbmd1YWdlc1tnZXRDdXJyZW50TGFuZygpXX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgc2VjdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZsb3dSaWdodChcbiAgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG4pKEhlYWRlcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIFwidGV4dC1kZWNvcmF0aW9uXCI6IFwibm9uZVwiXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wcykge1xuICBsZXQgdG9wUG9zdCA9IG51bGw7XG4gIGxldCB0b3BQb3N0TGluayA9IFwiXCI7XG5cbiAgY29uc3QgeyBwb3N0cywgdGl0bGUgfSA9IHByb3BzO1xuXG4gIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgdG9wUG9zdCA9IHBvc3RzW3Bvc3RzLmxlbmd0aC0xXTtcbiAgICB0b3BQb3N0TGluayA9IGAvdGhyZWFkLz9tb2R1bGU9JHt0b3BQb3N0Lm1vZHVsZX0jJHt0b3BQb3N0LmlkfWA7XG4gIH1cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7dG9wUG9zdCA/XG4gICAgICAgIChcbiAgICAgICAgPD5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj48QXZhdGFyIGFsdD17dG9wUG9zdC51c2VyfSBzcmM9e3RvcFBvc3QuYXZhdGFyfSAvPjwvYT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAge3RvcFBvc3QudXNlcn0gLSAge3RvcFBvc3QudGltZXN0YW1wfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0gaHJlZj17dG9wUG9zdExpbmt9PlxuICAgICAgICAgIDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0b3BQb3N0LmNvbnRlbnRzfX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgIDogbnVsbCBcbiAgICAgIH1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbk1haW4ucHJvcFR5cGVzID0ge1xuICBwb3N0czogUHJvcFR5cGVzLmFycmF5LFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBuZXh0STE4TmV4dEluc3RhbmNlIGZyb20gJy4uLy4uL2kxOG4nO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIG1haW5GZWF0dXJlZFBvc3Q6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs4MDBdLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20pJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjMpJyxcbiAgfSxcbiAgbWFpbkZlYXR1cmVkUG9zdENvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXcocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IG92ZXJ2aWV3ID0gcHJvcHMuZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkZlYXR1cmVkUG9zdH0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7b3ZlcnZpZXcudXJsfSlgIH19PlxuICAgICAgey8qIEluY3JlYXNlIHRoZSBwcmlvcml0eSBvZiB0aGUgaGVybyBiYWNrZ3JvdW5kIGltYWdlICovfVxuICAgICAgezxpbWcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IHNyYz17b3ZlcnZpZXcudXJsfSBhbHQ9e292ZXJ2aWV3LnRpdGxlfSAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm92ZXJsYXl9IC8+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5GZWF0dXJlZFBvc3RDb250ZW50fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgzXCIgY29sb3I9XCJpbmhlcml0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICB7b3ZlcnZpZXcudGl0bGVbZ2V0Q3VycmVudExhbmcoKV19XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cImluaGVyaXRcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIHtvdmVydmlldy5kZXNjcmlwdGlvbltnZXRDdXJyZW50TGFuZygpXX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnY21zcGFnZScsIHF1ZXJ5OiB7IHBhZ2U6IG92ZXJ2aWV3LnBhZ2UgfSB9fT5cbiAgICAgICAgICAgICAgPGE+e292ZXJ2aWV3LmxpbmtUZXh0W2dldEN1cnJlbnRMYW5nKCldfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gICk7XG59XG5cbk92ZXJ2aWV3LnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQge1xuICAgIEVtYWlsSWNvbixcbiAgICBFbWFpbFNoYXJlQnV0dG9uLFxuICAgIEZhY2Vib29rSWNvbixcbiAgICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICAgIEZhY2Vib29rU2hhcmVDb3VudCxcbiAgICBGYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uLFxuICAgIEZhY2Vib29rTWVzc2VuZ2VySWNvbixcbiAgICBJbnN0YXBhcGVyU2hhcmVCdXR0b24sXG4gICAgTGluZVNoYXJlQnV0dG9uLFxuICAgIExpbmtlZGluU2hhcmVCdXR0b24sXG4gICAgTGlua2VkaW5JY29uLFxuICAgIExpdmVqb3VybmFsU2hhcmVCdXR0b24sXG4gICAgTWFpbHJ1U2hhcmVCdXR0b24sXG4gICAgT0tTaGFyZUJ1dHRvbixcbiAgICBQaW50ZXJlc3RTaGFyZUJ1dHRvbixcbiAgICBQb2NrZXRTaGFyZUJ1dHRvbixcbiAgICBSZWRkaXRTaGFyZUJ1dHRvbixcbiAgICBUZWxlZ3JhbVNoYXJlQnV0dG9uLFxuICAgIFR1bWJsclNoYXJlQnV0dG9uLFxuICAgIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgICBUd2l0dGVySWNvbixcbiAgICBWaWJlclNoYXJlQnV0dG9uLFxuICAgIFZLU2hhcmVCdXR0b24sXG4gICAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcbiAgICBXaGF0c2FwcEljb24sXG4gICAgV29ya3BsYWNlU2hhcmVCdXR0b25cbiAgfSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcblxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgbmV0d29yazoge1xuICAgICAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJ0b3BcIixcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMTBweFwiLFxuICAgICAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gICAgfSxcbiAgICBzaGFyZUNvdW50OiB7XG4gICAgICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICAgICAgXCJ3aGl0ZVNwYWNlXCI6IFwibm93cmFwXCIsXG4gICAgICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCIsXG4gICAgICAgIFwid2lkdGhcIjogMCxcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCIzcHhcIixcbiAgICAgICAgXCJmb250U2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgXCJmb250Q29sb3JcIjogXCJibGFja1wiXG4gICAgfSxcbiAgICBuZXR3b3JrU2hhcmVCdXR0b246IHtcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgIH0sXG4gIH0pKTtcblxuY29uc3QgVHJhbnNpdGlvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiA8U2xpZGUgZGlyZWN0aW9uPVwidXBcIiByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5pbXBvcnQgZmxvd1JpZ2h0IGZyb20gJ2xvZGFzaC9mbG93UmlnaHQnO1xuXG5pbXBvcnQgbmV4dEkxOE5leHRJbnN0YW5jZSBmcm9tICcuLi8uLi9pMThuJztcblxuY29uc3QgeyB3aXRoVHJhbnNsYXRpb24gfSA9IG5leHRJMThOZXh0SW5zdGFuY2U7XG5cbmNvbnN0IGdldEN1cnJlbnRMYW5nID0gKCkgPT4gbmV4dEkxOE5leHRJbnN0YW5jZS5pMThuLmxhbmd1YWdlIHx8ICdlbic7XG5cbmZ1bmN0aW9uIFNoYXJlKHByb3BzKSB7XG4gICAgY29uc3QgeyBvcGVuLCBoYW5kbGVDbG9zZSwgdCB9ID0gcHJvcHM7XG4gIFxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIGxldCBzaGFyZVVybCA9ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzaGFyZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBjb25zdCB0aXRsZSA9IFwiU2ltcGF0aWNvXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERpYWxvZ1xuICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvbn1cbiAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS10aXRsZVwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIj57dCgnc2hhcmUnKX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmt9PlxuICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrU2hhcmVCdXR0b259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MzJ9IHJvdW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQ291bnQgdXJsPXtzaGFyZVVybH0gY2xhc3NOYW1lPXtjbGFzc2VzLnNoYXJlQ291bnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ID0+IGNvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQ291bnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmt9PlxuICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkPVwiNTIxMjcwNDAxNTg4MzcyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrU2hhcmVCdXR0b259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va01lc3Nlbmdlckljb24gc2l6ZT17MzJ9IHJvdW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrfT5cbiAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrU2hhcmVCdXR0b259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBzaXplPXszMn0gcm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ud2l0dGVyU2hhcmVCdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2hhcmVDb3VudH0+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rZWRpblNoYXJlQnV0dG9uIHVybD17c2hhcmVVcmx9IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrU2hhcmVCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtlZGluSWNvbiBzaXplPXszMn0gcm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rZWRpblNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmt9PlxuICAgICAgICAgICAgICAgICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcj1cIjo6IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya1NoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNhcHBJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1doYXRzYXBwU2hhcmVCdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2hhcmVDb3VudH0+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya30+XG4gICAgICAgICAgICAgICAgICAgIDxFbWFpbFNoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NoYXJlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdD17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5PVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya1NoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1haWxJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0VtYWlsU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxvd1JpZ2h0KFxuICAgIHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuKShTaGFyZSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiO1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCI7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCI7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiO1xuaW1wb3J0IGZsb3dSaWdodCBmcm9tICdsb2Rhc2gvZmxvd1JpZ2h0JztcblxuaW1wb3J0IG5leHRJMThOZXh0SW5zdGFuY2UgZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgc2lkZWJhckFib3V0Qm94OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVsyMDBdLFxuICB9LFxuICBzaWRlYmFyU2VjdGlvbjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbn0pKTtcblxuY29uc3QgeyB3aXRoVHJhbnNsYXRpb24gfSA9IG5leHRJMThOZXh0SW5zdGFuY2U7XG5cbmNvbnN0IGdldEN1cnJlbnRMYW5nID0gKCkgPT4gbmV4dEkxOE5leHRJbnN0YW5jZS5pMThuLmxhbmd1YWdlIHx8ICdlbic7XG5cbmZ1bmN0aW9uIFNpZGViYXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBzb2NpYWwsIHQgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyQWJvdXRCb3h9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAge3QoJ2Fib3V0Jyl9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHk+e2Rlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20gY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJTZWN0aW9ufT5cbiAgICAgICAge3QoJ3NvY2lhbCcpfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3NvY2lhbC5tYXAoKG5ldHdvcmssIGlkeCkgPT4gKFxuICAgICAgICA8TGluayBkaXNwbGF5PVwiYmxvY2tcIiB2YXJpYW50PVwiYm9keTFcIiBocmVmPXtuZXR3b3JrLnVybH0ga2V5PXtpZHh9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICB7bmV0d29yay5uYW1lID09PSAnZ2l0aHViJyA/IDxHaXRIdWJJY29uIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAge25ldHdvcmsubmFtZSA9PT0gJ2ZhY2Vib29rJyA/IDxGYWNlYm9va0ljb24gLz4gOiBudWxsfVxuICAgICAgICAgICAgICB7bmV0d29yay5uYW1lID09PSAndHdpdHRlcicgPyA8VHdpdHRlckljb24gLz4gOiBudWxsfVxuICAgICAgICAgICAgICB7bmV0d29yay5uYW1lID09PSAnaW5zdGFncmFtJyA/IDxJbnN0YWdyYW1JY29uIC8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+e25ldHdvcmsubmFtZX08L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cblNpZGViYXIucHJvcFR5cGVzID0ge1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29jaWFsOiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmbG93UmlnaHQoXG4gIHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuKShTaWRlYmFyKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBmZXRjaE1vZHVsZVJlcXVlc3QgfSBmcm9tIFwiLi4vYWN0aW9ucy9tb2R1bGVzXCI7XG5cbmltcG9ydCBuZXh0STE4TmV4dEluc3RhbmNlIGZyb20gJy4uLy4uL2kxOG4nO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgfSxcbiAgY2FyZERldGFpbHM6IHtcbiAgICBmbGV4OiAxLFxuICB9LFxuICBjYXJkTWVkaWE6IHtcbiAgICB3aWR0aDogMTYwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZW1lKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyB0aGVtZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vIEZpcnN0IHRpbWUgZWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUHVsbCBpbmZvIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgICBpZiAodGhlbWUgJiYgdGhlbWUubW9kdWxlKSB7XG5cbiAgICAgIGRpc3BhdGNoKGZldGNoTW9kdWxlUmVxdWVzdCh0aGVtZS5tb2R1bGUpKTtcbiAgICB9XG4gIH0sIFt0aGVtZV0pO1xuXG4gIGNvbnN0IHsgbW9kdWxlIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tb2R1bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICA8Q2FyZEFjdGlvbkFyZWEgY29tcG9uZW50PVwiYVwiIGhyZWY9e3RoZW1lLnVybH0+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkRGV0YWlsc30+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAge3RoZW1lLnRpdGxlW2dldEN1cnJlbnRMYW5nKCldfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAge3RoZW1lLmRlc2NyaXB0aW9uW2dldEN1cnJlbnRMYW5nKCldfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICB7bW9kdWxlICYmIG1vZHVsZS5tb2R1bGVUeXBlID09PSAndGhyZWFkJyA/XG4gICAgICAgICAgICAgICAgICAoPExpbmsgaHJlZj17Jy90aHJlYWQvP21vZHVsZT0nICsgbW9kdWxlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3RoZW1lLmltYWdlVGV4dFtnZXRDdXJyZW50TGFuZygpXX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+KSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XG4gICAgICAgICAgICB7dGhlbWUuaW1hZ2UgPyAoXG4gICAgICAgICAgICA8Q2FyZE1lZGlhIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkTWVkaWF9IGltYWdlPXt0aGVtZS5pbWFnZX0gdGl0bGU9e3RoZW1lLmltYWdlVGV4dFtnZXRDdXJyZW50TGFuZygpXX0gLz5cbiAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cblRoZW1lLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCBHcm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBQb3BwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgZmxvd1JpZ2h0IGZyb20gJ2xvZGFzaC9mbG93UmlnaHQnO1xuXG5pbXBvcnQgbmV4dEkxOE5leHRJbnN0YW5jZSBmcm9tICcuLi8uLi9pMThuJztcbmNvbnN0IHsgd2l0aFRyYW5zbGF0aW9uIH0gPSBuZXh0STE4TmV4dEluc3RhbmNlO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBcInotaW5kZXhcIjogMTAwMCxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gVXNlck1lbnUoe3QsIGZpcnN0TmFtZURpc3BsYXl9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldE9wZW4ocHJldk9wZW4gPT4gIXByZXZPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyByZXR1cm4gZm9jdXMgdG8gdGhlIGJ1dHRvbiB3aGVuIHdlIHRyYW5zaXRpb25lZCBmcm9tICFvcGVuIC0+IG9wZW5cbiAgY29uc3QgcHJldk9wZW4gPSBSZWFjdC51c2VSZWYob3Blbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZPcGVuLmN1cnJlbnQgPT09IHRydWUgJiYgb3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIGFuY2hvclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJldk9wZW4uY3VycmVudCA9IG9wZW47XG4gIH0sIFtvcGVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICByZWY9e2FuY2hvclJlZn1cbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gJ21lbnUtbGlzdC1ncm93JyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpcnN0TmFtZURpc3BsYXl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8UG9wcGVyIG9wZW49e29wZW59IGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH0gcm9sZT17dW5kZWZpbmVkfSB0cmFuc2l0aW9uIGRpc2FibGVQb3J0YWw+XG4gICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICA8TWVudUxpc3QgYXV0b0ZvY3VzSXRlbT17b3Blbn0gaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZmlsZS9cIjtcbiAgICAgICAgICAgICAgICAgICAgfX0+e3QoJ3Byb2ZpbGUnKX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdG9rZW5zXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcblxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbi8nO1xuICAgICAgICAgICAgICAgICAgICB9fSA+e3QoJ2xvZ291dCcpfTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Qb3BwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxvd1JpZ2h0KFxuICB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSlcbikoVXNlck1lbnUpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiQHNvY2lhbGdvdXYvbWF0b21vLW5leHRcIjtcblxuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL092ZXJ2aWV3XCI7XG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGhlbWVcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgbmV4dEkxOE5leHRJbnN0YW5jZSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgc2V0RGViYXRlUmVxdWVzdCB9IGZyb20gJy4uL2FjdGlvbnMvZGViYXRlJztcbmltcG9ydCB7IGZldGNoUG9zdHNSZXF1ZXN0IH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0cyc7XG5cbmNvbnN0IGdldEN1cnJlbnRMYW5nID0gKCkgPT4gbmV4dEkxOE5leHRJbnN0YW5jZS5pMThuLmxhbmd1YWdlIHx8ICdlbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgbWFpbkdyaWQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMylcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gSG9tZSh7IGRlYmF0ZVNlcnZlciB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBpZiAoZGViYXRlU2VydmVyKSB7XG4gICAgLy8gUHV0IHRoZSBzZXJ2ZXIgc2lkZSBmZXRjaCBpbnRvIGNsaWVudCBzaWRlIHN0b3JlXG4gICAgZGlzcGF0Y2goc2V0RGViYXRlUmVxdWVzdChkZWJhdGVTZXJ2ZXIpKVxuICB9XG5cbiAgY29uc3QgZGViYXRlID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZGViYXRlLmRlYmF0ZSk7XG4gIGNvbnN0IHsgcG9zdHMgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3RzKTtcbiAgY29uc3QgeyBpc1ZhbGlkVG9rZW4sIGFjY291bnRJZCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0KHsgdXJsOiAnaHR0cDovL2xvY2FsaG9zdCcsIHNpdGVJZDogZGViYXRlLnRyYWNraW5nSWQgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWJhdGUgJiYgZGViYXRlLmRlYmF0ZVR5cGUgPT09ICdwcml2YXRlJykge1xuICAgICAgaWYgKGlzVmFsaWRUb2tlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luLyc7XG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNWYWxpZFRva2VuLCBkZWJhdGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWJhdGUgJiYgZGViYXRlLmRlYmF0ZVR5cGUgPT09ICdwcml2YXRlJykge1xuICAgICAgaWYgKGlzVmFsaWRUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocG9zdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKCEhYWNjb3VudElkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFBvc3RzUmVxdWVzdChhY2NvdW50SWQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50SWRdKTtcblxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBpZiAoIWRlYmF0ZSkge1xuICAgIHJldHVybiAoPGRpdi8+KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57ZGViYXRlLnNsdWd9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICB7ZGViYXRlLm1ldGFUYWdzLm1hcCgodGFnLCBpZHgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRhZy50eXBlID09PSAncHJvcGVydHknKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoPG1ldGEgcHJvcGVydHk9e3RhZy50eXBldmFsdWV9IGNvbnRlbnQ9e3RhZy5jb250ZW50fSBrZXk9e2lkeH0gLz4pXG4gICAgICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8bWV0YSBuYW1lPXt0YWcudHlwZXZhbHVlfSBjb250ZW50PXt0YWcuY29udGVudH0ga2V5PXtpZHh9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtkZWJhdGUgPyAoXG4gICAgICA8PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPEhlYWRlciBzZWxlY3RlZD0naG9tZScgdGl0bGU9e2RlYmF0ZS5zbHVnfSBoZWFkZXI9e2RlYmF0ZS5oZWFkZXJ9IC8+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8T3ZlcnZpZXcgZGF0YT17ZGViYXRlLm92ZXJ2aWV3fSAvPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICB7ZGViYXRlLnRoZW1lcy5tYXAodGhlbWUgPT4gKFxuICAgICAgICAgICAgICAgIDxUaGVtZSBrZXk9e3RoZW1lLnRpdGxlW2dldEN1cnJlbnRMYW5nKCldfSB0aGVtZT17dGhlbWV9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluR3JpZH0+XG4gICAgICAgICAgICAgIDxNYWluIHRpdGxlPVwiTGF0ZXN0IGNvbnRyaWJ1dG9uXCIgcG9zdHM9e3Bvc3RzfSAvPlxuICAgICAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZWJhdGUuc2lkZWJhci5hYm91dFtnZXRDdXJyZW50TGFuZygpXX1cbiAgICAgICAgICAgICAgICBzb2NpYWw9e2RlYmF0ZS5zaWRlYmFyLnNvY2lhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Rm9vdGVyIGZvb3Rlcj17ZGViYXRlLmZvb3Rlcn0gLz5cbiAgICAgIDwvPikgOiBudWxsIH1cbiAgICAgPC9kaXY+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgaWYgKGN0eC5yZXEpIHtcbiAgICAvLyBEbyBhIGNoZWNrIGlmIHRoaXMgZGViYXRlIGV4aXN0cyBiZWZvcmUgdHJ5aW5nIHRvIHJlbmRlciAobm8gc2FnYSBoZXJlLCBzZXJ2ZXIgc2lkZSlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYXBpLmhvc3R9L3YxL2ZldGNoRGViYXRlP25hbWU9JHtjdHgucmVxLmhlYWRlcnMuaG9zdH1gKVxuICAgIGNvbnN0IGRlYmF0ZVNlcnZlciA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICBkZWJhdGVTZXJ2ZXJcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkZWJhdGVTZXJ2ZXI6IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNvY2lhbGdvdXYvbWF0b21vLW5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2Zsb3dSaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaGFyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==