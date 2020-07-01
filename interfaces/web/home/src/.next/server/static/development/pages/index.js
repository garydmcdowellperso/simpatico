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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Overview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Overview */ "./components/Overview.jsx");
/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Theme */ "./components/Theme.jsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main */ "./components/Main.jsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.jsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../i18n */ "../i18n.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config */ "../config.js");
/* harmony import */ var _actions_debate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/debate */ "./actions/debate.js");
/* harmony import */ var _actions_posts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../actions/posts */ "./actions/posts.js");


















var getCurrentLang = function getCurrentLang() {
  return _i18n__WEBPACK_IMPORTED_MODULE_13__["default"].i18n.language || 'en';
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
    dispatch(Object(_actions_debate__WEBPACK_IMPORTED_MODULE_15__["setDebateRequest"])(debateServer));
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
            dispatch(Object(_actions_posts__WEBPACK_IMPORTED_MODULE_16__["fetchPostsRequest"])(accountId));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selected: "home",
    title: debate.slug,
    header: debate.header
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Overview__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: debate.overview
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 4
  }, debate.themes.map(function (theme) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Theme__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: theme.title[getCurrentLang()],
      theme: theme
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 5,
    className: classes.mainGrid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Latest contributon",
    posts: posts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    description: debate.sidebar.about[getCurrentLang()],
    social: debate.sidebar.social
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    footer: debate.footer
  })) : null);
}

Home.getInitialProps = async function (ctx) {
  if (ctx.req) {
    // Do a check if this debate exists before trying to render (no saga here, server side)
    var res = await fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_14__["default"].api.host, "/v1/fetchDebate?name=").concat(ctx.req.headers.host));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9hdXRoLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvZGViYXRlLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL092ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGhlbWUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlck1lbnUuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2Zsb3dSaWdodFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2hhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJWRVJJRllfVE9LRU5fUkVRVUVTVCIsIlZFUklGWV9UT0tFTl9SRVFVRVNUX1NVQ0NFU1MiLCJWRVJJRllfVE9LRU5fUkVRVUVTVF9GQUlMVVJFIiwiRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1QiLCJGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9TVUNDRVNTIiwiRkVUQ0hfVVNFUl9JTkZPX1JFUVVFU1RfRkFJTFVSRSIsInZlcmlmeVRva2VuUmVxdWVzdCIsInRva2VuIiwicm9sZSIsInZlcmlmeVRva2VuUmVxdWVzdFN1Y2Nlc3MiLCJ2ZXJpZnlUb2tlblJlcXVlc3RGYWlsdXJlIiwiZmV0Y2hVc2VySW5mbyIsImZldGNoVXNlckluZm9TdWNjZXNzIiwiZmV0Y2hVc2VySW5mb0ZhaWx1cmUiLCJGRVRDSF9BTExERUJBVEVTX1JFUVVFU1QiLCJGRVRDSF9BTExERUJBVEVTX1NVQ0NFU1MiLCJGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkUiLCJGRVRDSF9ERUJBVEVfUkVRVUVTVCIsIkZFVENIX0RFQkFURV9TVUNDRVNTIiwiRkVUQ0hfREVCQVRFX0ZBSUxVUkUiLCJTRVRfREVCQVRFX1JFUVVFU1QiLCJTRVRfREVCQVRFX1NVQ0NFU1MiLCJTRVRfREVCQVRFX0ZBSUxVUkUiLCJDUkVBVEVfREVCQVRFX1JFUVVFU1QiLCJDUkVBVEVfREVCQVRFX1NVQ0NFU1MiLCJDUkVBVEVfREVCQVRFX0ZBSUxVUkUiLCJVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNUIiwiVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTUyIsIlVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX0ZBSUxVUkUiLCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1JFUVVFU1QiLCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1MiLCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX0ZBSUxVUkUiLCJVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNUIiwiVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfU1VDQ0VTUyIsIlVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX0ZBSUxVUkUiLCJmZXRjaERlYmF0ZXNSZXF1ZXN0IiwiZmV0Y2hEZWJhdGVzU3VjY2VzcyIsImRlYmF0ZXMiLCJmZXRjaERlYmF0ZXNGYWlsdXJlIiwic2V0RGViYXRlUmVxdWVzdCIsImRlYmF0ZSIsImZldGNoRGViYXRlUmVxdWVzdCIsImZldGNoRGViYXRlU3VjY2VzcyIsImZldGNoRGViYXRlRmFpbHVyZSIsImNyZWF0ZURlYmF0ZVJlcXVlc3QiLCJzbHVnIiwiZGViYXRlVHlwZSIsImxhbmd1YWdlcyIsImNyZWF0ZURlYmF0ZVN1Y2Nlc3MiLCJjcmVhdGVEZWJhdGVGYWlsdXJlIiwidXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJSZXF1ZXN0IiwiZGViYXRlSUQiLCJoZWFkZXIiLCJ1cGRhdGVMYW5kaW5nUGFnZUhlYWRlclN1Y2Nlc3MiLCJ1cGRhdGVMYW5kaW5nUGFnZUhlYWRlckZhaWx1cmUiLCJ1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3UmVxdWVzdCIsIm92ZXJ2aWV3IiwidXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld1N1Y2Nlc3MiLCJ1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3RmFpbHVyZSIsInVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzUmVxdWVzdCIsInRoZW1lcyIsInVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzU3VjY2VzcyIsInVwZGF0ZUxhbmRpbmdQYWdlVGhlbWVzRmFpbHVyZSIsIkZFVENIX01PRFVMRV9SRVFVRVNUIiwiRkVUQ0hfTU9EVUxFX1NVQ0NFU1MiLCJGRVRDSF9NT0RVTEVfRkFJTFVSRSIsImZldGNoTW9kdWxlUmVxdWVzdCIsImlkIiwiZmV0Y2hNb2R1bGVTdWNjZXNzIiwibW9kdWxlIiwiZmV0Y2hNb2R1bGVGYWlsdXJlIiwiRkVUQ0hfUE9TVFNfUkVRVUVTVCIsIkZFVENIX1BPU1RTX1NVQ0NFU1MiLCJGRVRDSF9QT1NUU19GQUlMVVJFIiwiZmV0Y2hQb3N0c1JlcXVlc3QiLCJhY2NvdW50SWQiLCJmZXRjaFBvc3RzU3VjY2VzcyIsInBvc3RzIiwiZmV0Y2hQb3N0c0ZhaWx1cmUiLCJ3aXRoVHJhbnNsYXRpb24iLCJuZXh0STE4TmV4dEluc3RhbmNlIiwiZ2V0Q3VycmVudExhbmciLCJpMThuIiwibGFuZ3VhZ2UiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb290ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0b29sYmFyU2Vjb25kYXJ5IiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvd1giLCJsaW5rU2VsZWN0ZWQiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwibGluayIsIkZvb3RlciIsImNsYXNzZXMiLCJzZWxlY3RlZCIsInNlY3Rpb25zIiwic2VjdGlvbiIsImlkeCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmbG93UmlnaHQiLCJ0b29sYmFyIiwiYm9yZGVyQm90dG9tIiwiZGl2aWRlciIsInRvb2xiYXJUaXRsZSIsImZsZXgiLCJ3aWR0aCIsInRvb2xiYXJMaW5rIiwiZmxleFNocmluayIsIkhlYWRlciIsInVzZVN0YXRlIiwic2hhcmVPcGVuIiwic2V0U2hhcmVPcGVuIiwiZmlyc3ROYW1lRGlzcGxheSIsInNldEZpcnN0TmFtZURpc3BsYXkiLCJ0IiwiaGFuZGxlU2hhcmVDbG9zZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJmaXJzdE5hbWVMb2NhbFN0b3JhZ2UiLCJ1c2VTZWxlY3RvciIsImF1dGgiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlzVmFsaWRUb2tlbiIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzaGFyZSIsImFycmF5Iiwicm9vdCIsImZsZXhHcm93IiwiY29udGVudCIsIk1haW4iLCJ0b3BQb3N0IiwidG9wUG9zdExpbmsiLCJ1c2VyIiwiYXZhdGFyIiwidGltZXN0YW1wIiwiX19odG1sIiwiY29udGVudHMiLCJtYWluRmVhdHVyZWRQb3N0IiwicG9zaXRpb24iLCJncmV5IiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVybGF5IiwidG9wIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwibWFpbkZlYXR1cmVkUG9zdENvbnRlbnQiLCJicmVha3BvaW50cyIsInVwIiwicGFkZGluZ1JpZ2h0IiwiT3ZlcnZpZXciLCJkaXNwbGF5IiwibGlua1RleHQiLCJwb3N0IiwibmV0d29yayIsInNoYXJlQ291bnQiLCJuZXR3b3JrU2hhcmVCdXR0b24iLCJUcmFuc2l0aW9uIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwiU2hhcmUiLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJzaGFyZVVybCIsImNvdW50Iiwic2lkZWJhckFib3V0Qm94Iiwic2lkZWJhclNlY3Rpb24iLCJtYXJnaW5Ub3AiLCJTaWRlYmFyIiwic29jaWFsIiwiY2FyZCIsImNhcmREZXRhaWxzIiwiY2FyZE1lZGlhIiwiVGhlbWUiLCJtb2R1bGVzIiwibW9kdWxlVHlwZSIsImltYWdlVGV4dCIsImltYWdlIiwibWFyZ2luUmlnaHQiLCJVc2VyTWVudSIsInNldE9wZW4iLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImNvbnRhaW5zIiwiaGFuZGxlTGlzdEtleURvd24iLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJjbGVhciIsIm1haW5HcmlkIiwiSG9tZSIsImRlYmF0ZVNlcnZlciIsIm1ldGFUYWdzIiwidGFnIiwidHlwZXZhbHVlIiwic2lkZWJhciIsImFib3V0IiwicmVxIiwiY29uZmlnIiwiYXBpIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1pGO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1Q7O0FBRTlCO0FBQ0EsU0FBUyw2QkFBNkI7QUFDdEMsQ0FBQyxHQUFHLCtDQUFNOztBQUVWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxtREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtB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QSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGFwaToge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkFQSV9IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlNFUlZFUl9IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0JyxcbiAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgMTAwMFxuICB9LFxuICBpMThuOiB7XG4gICAgbGFuZ3VhZ2VzOiBwcm9jZXNzLmVudi5MQU5HVUFHRVMgfHwgWydlbicsICdlcycsICdmciddLFxuICAgIGRlZmF1bHRMYW5ndWFnZTogcHJvY2Vzcy5lbnYuREVGQVVMVF9MQU5HVUFHRSB8fCAnZnInLFxuICB9LFxufTtcbiIsImltcG9ydCBOZXh0STE4TmV4dCBmcm9tICduZXh0LWkxOG5leHQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IHtcbiAgaTE4bjogeyBsYW5ndWFnZXMsIGRlZmF1bHRMYW5ndWFnZSB9LFxufSA9IGNvbmZpZztcblxuY29uc3QgZmFsbGJhY2tMYW5ndWFnZSA9IGRlZmF1bHRMYW5ndWFnZTtcblxuLy8gT3B0aW9ucyBsaXN0OiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VEZXRlY3RvciNkZXRlY3Rvci1vcHRpb25zXG5jb25zdCBkZXRlY3Rvck9wdGlvbnMgPSB7XG4gIG9yZGVyOiBbJ2Nvb2tpZSddLFxuICBjYWNoZXM6IFsnY29va2llJ10sXG4gIGxvb2t1cENvb2tpZTogJ25leHQtaTE4bmV4dCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgTmV4dEkxOE5leHQoe1xuICBvdGhlckxhbmd1YWdlczogbGFuZ3VhZ2VzLFxuICBmYWxsYmFja0xuZzogZmFsbGJhY2tMYW5ndWFnZSxcbiAgZGVmYXVsdE5TOiAnY29tbW9uJyxcbiAgZGV0ZWN0aW9uOiBkZXRlY3Rvck9wdGlvbnMsXG59KTtcblxuLy8ga25vd24gYnVnIHNob3dpbmcgJ3JlYWN0LWkxOG5leHQ6OiBpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eSB1bmRlZmluZWQnXG4vLyBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNoaW5tYW4vbmV4dC1pMThuZXh0L2lzc3Vlcy8zNzRcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnQgY29uc3QgVkVSSUZZX1RPS0VOX1JFUVVFU1QgPSBcIlZFUklGWV9UT0tFTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVkVSSUZZX1RPS0VOX1JFUVVFU1RfU1VDQ0VTUyA9IFwiVkVSSUZZX1RPS0VOX1JFUVVFU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFZFUklGWV9UT0tFTl9SRVFVRVNUX0ZBSUxVUkUgPSBcIlZFUklGWV9UT0tFTl9SRVFVRVNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJfSU5GT19SRVFVRVNUID0gXCJGRVRDSF9VU0VSX0lORk9fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJfSU5GT19SRVFVRVNUX1NVQ0NFU1MgPVxuICBcIkZFVENIX1VTRVJfSU5GT19SRVFVRVNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9GQUlMVVJFID1cbiAgXCJGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlblJlcXVlc3QoeyB0b2tlbiwgcm9sZSB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVkVSSUZZX1RPS0VOX1JFUVVFU1QsXG4gICAgdG9rZW4sXG4gICAgcm9sZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW5SZXF1ZXN0U3VjY2Vzcyhqc29uKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVkVSSUZZX1RPS0VOX1JFUVVFU1RfU1VDQ0VTUyxcbiAgICBqc29uXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlblJlcXVlc3RGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVkVSSUZZX1RPS0VOX1JFUVVFU1RfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VySW5mbygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VySW5mb1N1Y2Nlc3MoanNvbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1VTRVJfSU5GT19SRVFVRVNUX1NVQ0NFU1MsXG4gICAganNvblxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2VySW5mb0ZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9VU0VSX0lORk9fUkVRVUVTVF9GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfQUxMREVCQVRFU19SRVFVRVNUID0gXCJGRVRDSF9BTExERUJBVEVTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9BTExERUJBVEVTX1NVQ0NFU1MgPSBcIkZFVENIX0FMTERFQkFURVNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0FMTERFQkFURVNfRkFJTFVSRSA9IFwiRkVUQ0hfQUxMREVCQVRFU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9ERUJBVEVfUkVRVUVTVCA9IFwiRkVUQ0hfREVCQVRFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9ERUJBVEVfU1VDQ0VTUyA9IFwiRkVUQ0hfREVCQVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9ERUJBVEVfRkFJTFVSRSA9IFwiRkVUQ0hfREVCQVRFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9ERUJBVEVfUkVRVUVTVCA9IFwiU0VUX0RFQkFURV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0VUX0RFQkFURV9TVUNDRVNTID0gXCJTRVRfREVCQVRFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTRVRfREVCQVRFX0ZBSUxVUkUgPSBcIlNFVF9ERUJBVEVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RFQkFURV9SRVFVRVNUID0gXCJDUkVBVEVfREVCQVRFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfREVCQVRFX1NVQ0NFU1MgPSBcIkNSRUFURV9ERUJBVEVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERUJBVEVfRkFJTFVSRSA9IFwiQ1JFQVRFX0RFQkFURV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNUID0gXCJVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTUyA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX0ZBSUxVUkUgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfSEVBREVSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfUkVRVUVTVCA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19TVUNDRVNTID0gXCJVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX0ZBSUxVUkUgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfUkVRVUVTVCA9IFwiVVBEQVRFX0xBTkRJTkdfUEFHRV9USEVNRVNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1NVQ0NFU1MgPSBcIlVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19GQUlMVVJFID0gXCJVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlYmF0ZXNSZXF1ZXN0KCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX0FMTERFQkFURVNfUkVRVUVTVFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZWJhdGVzU3VjY2VzcyhkZWJhdGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfQUxMREVCQVRFU19TVUNDRVNTLFxuICAgIGRlYmF0ZXNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGViYXRlc0ZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9BTExERUJBVEVTX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlYmF0ZVJlcXVlc3QoZGViYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0RFQkFURV9SRVFVRVNULFxuICAgIGRlYmF0ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEZWJhdGVSZXF1ZXN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9ERUJBVEVfUkVRVUVTVCxcbiAgICBuYW1lXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlYmF0ZVN1Y2Nlc3MoZGViYXRlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfREVCQVRFX1NVQ0NFU1MsXG4gICAgZGViYXRlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlYmF0ZUZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9ERUJBVEVfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGViYXRlUmVxdWVzdChuYW1lLCBzbHVnLCBkZWJhdGVUeXBlLCBsYW5ndWFnZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDUkVBVEVfREVCQVRFX1JFUVVFU1QsXG4gICAgbmFtZSxcbiAgICBzbHVnLFxuICAgIGRlYmF0ZVR5cGUsXG4gICAgbGFuZ3VhZ2VzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWJhdGVTdWNjZXNzKGRlYmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENSRUFURV9ERUJBVEVfU1VDQ0VTUyxcbiAgICBkZWJhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlYmF0ZUZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDUkVBVEVfREVCQVRFX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyUmVxdWVzdChkZWJhdGVJRCwgaGVhZGVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfUkVRVUVTVCxcbiAgICBkZWJhdGVJRCxcbiAgICBoZWFkZXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxhbmRpbmdQYWdlSGVhZGVyU3VjY2VzcyhkZWJhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX0hFQURFUl9TVUNDRVNTLFxuICAgIGRlYmF0ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VIZWFkZXJGYWlsdXJlKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9IRUFERVJfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VPdmVydmlld1JlcXVlc3QoZGViYXRlSUQsIG92ZXJ2aWV3KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFX0xBTkRJTkdfUEFHRV9PVkVSVklFV19SRVFVRVNULFxuICAgIGRlYmF0ZUlELFxuICAgIG92ZXJ2aWV3XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3U3VjY2VzcyhkZWJhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX09WRVJWSUVXX1NVQ0NFU1MsXG4gICAgZGViYXRlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZU92ZXJ2aWV3RmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfT1ZFUlZJRVdfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNSZXF1ZXN0KGRlYmF0ZUlELCB0aGVtZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19SRVFVRVNULFxuICAgIGRlYmF0ZUlELFxuICAgIHRoZW1lc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZGluZ1BhZ2VUaGVtZXNTdWNjZXNzKGRlYmF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9MQU5ESU5HX1BBR0VfVEhFTUVTX1NVQ0NFU1MsXG4gICAgZGViYXRlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kaW5nUGFnZVRoZW1lc0ZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfTEFORElOR19QQUdFX1RIRU1FU19GQUlMVVJFLFxuICAgIGVycm9yXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfTU9EVUxFX1JFUVVFU1QgPSBcIkZFVENIX01PRFVMRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfTU9EVUxFX1NVQ0NFU1MgPSBcIkZFVENIX01PRFVMRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfTU9EVUxFX0ZBSUxVUkUgPSBcIkZFVENIX01PRFVMRV9GQUlMVVJFXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTW9kdWxlUmVxdWVzdChpZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX01PRFVMRV9SRVFVRVNULFxuICAgIGlkXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vZHVsZVN1Y2Nlc3MobW9kdWxlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkVUQ0hfTU9EVUxFX1NVQ0NFU1MsXG4gICAgbW9kdWxlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vZHVsZUZhaWx1cmUoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9NT0RVTEVfRkFJTFVSRSxcbiAgICBlcnJvclxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX1BPU1RTX1JFUVVFU1QgPSBcIkZFVENIX1BPU1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9QT1NUU19TVUNDRVNTID0gXCJGRVRDSF9QT1NUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfUE9TVFNfRkFJTFVSRSA9IFwiRkVUQ0hfUE9TVFNfRkFJTFVSRVwiOyAgXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzUmVxdWVzdChhY2NvdW50SWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9QT1NUU19SRVFVRVNULFxuICAgIGFjY291bnRJZFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0c1N1Y2Nlc3MocG9zdHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBGRVRDSF9QT1NUU19TVUNDRVNTLFxuICAgIHBvc3RzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc3RzRmFpbHVyZShlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BPU1RTX0ZBSUxVUkUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmbG93UmlnaHQgZnJvbSAnbG9kYXNoL2Zsb3dSaWdodCc7XG5cbmltcG9ydCBuZXh0STE4TmV4dEluc3RhbmNlIGZyb20gJy4uLy4uL2kxOG4nO1xuXG5jb25zdCB7IHdpdGhUcmFuc2xhdGlvbiB9ID0gbmV4dEkxOE5leHRJbnN0YW5jZTtcblxuY29uc3QgZ2V0Q3VycmVudExhbmcgPSAoKSA9PiBuZXh0STE4TmV4dEluc3RhbmNlLmkxOG4ubGFuZ3VhZ2UgfHwgJ2VuJztcblxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICBDb3B5cmlnaHQgwqlcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3NpbXBhdGljby5vbmxpbmUvXCI+XG4gICAgICAgIFNpbXBhdGljb1xuICAgICAgPC9hPntcIiBcIn1cbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICB7XCIuXCJ9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIC8vIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYsIDApXG4gIH0sXG4gIHRvb2xiYXJTZWNvbmRhcnk6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIixcbiAgICBvdmVyZmxvd1g6IFwiYXV0b1wiXG4gIH0sXG4gIGxpbmtTZWxlY3RlZDoge1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICBmb250RmFtaWx5OiBcIlJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMS41JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMDkzOGVtJyxcbiAgICBjb2xvcjogJyMwMDdiZmYnXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDA5MzhlbSdcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHNlbGVjdGVkLCBmb290ZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgIDxUb29sYmFyXG4gICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgIHZhcmlhbnQ9XCJkZW5zZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyU2Vjb25kYXJ5fVxuICAgICAgPlxuICAgICAge2Zvb3Rlci5zZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGlkeCkgPT4ge1xuICAgICAgICBpZiAoc2VjdGlvbi5wYWdlKSB7XG4gICAgICAgICAgcmV0dXJuICg8TGlua1xuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnY21zcGFnZScsIHF1ZXJ5OiB7IHBhZ2U6IHNlY3Rpb24ucGFnZSwgdGl0bGU6IHNlY3Rpb24ubGFuZ3VhZ2VzW2dldEN1cnJlbnRMYW5nKCldIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBzZWN0aW9uLmxhbmd1YWdlc1tnZXRDdXJyZW50TGFuZygpXSA/IGNsYXNzZXMubGlua1NlbGVjdGVkIDogY2xhc3Nlcy5saW5rfT57c2VjdGlvbi5sYW5ndWFnZXNbZ2V0Q3VycmVudExhbmcoKV19PC9hPlxuICAgICAgICAgIDwvTGluaz4pXG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgICAgPC9Ub29sYmFyPlxuICAgICAgPENvcHlyaWdodCAvPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZsb3dSaWdodChcbiAgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG4pKEZvb3Rlcik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgZmxvd1JpZ2h0IGZyb20gJ2xvZGFzaC9mbG93UmlnaHQnO1xuXG5pbXBvcnQgbmV4dEkxOE5leHRJbnN0YW5jZSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCBVc2VyTWVudSBmcm9tIFwiLi9Vc2VyTWVudVwiO1xuaW1wb3J0IFNoYXJlIGZyb20gXCIuL1NoYXJlXCI7XG5pbXBvcnQgeyBmZXRjaFVzZXJJbmZvIH0gZnJvbSBcIi4uL2FjdGlvbnMvYXV0aFwiO1xuXG5jb25zdCB7IHdpdGhUcmFuc2xhdGlvbiB9ID0gbmV4dEkxOE5leHRJbnN0YW5jZTtcblxuY29uc3QgZ2V0Q3VycmVudExhbmcgPSAoKSA9PiBuZXh0STE4TmV4dEluc3RhbmNlLmkxOG4ubGFuZ3VhZ2UgfHwgJ2VuJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICB0b29sYmFyOiB7XG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5kaXZpZGVyfWBcbiAgfSxcbiAgdG9vbGJhclRpdGxlOiB7XG4gICAgZmxleDogMVxuICB9LFxuICB0b29sYmFyU2Vjb25kYXJ5OiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgd2lkdGg6IFwiODAlXCIsXG4gICAgb3ZlcmZsb3dYOiBcImF1dG9cIlxuICB9LFxuICB0b29sYmFyTGluazoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgZmxleFNocmluazogMFxuICB9LFxuICBsaW5rU2VsZWN0ZWQ6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogJzEuNScsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDA5MzhlbScsXG4gICAgY29sb3I6ICcjMDA3YmZmJ1xuICB9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXCIsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjAwOTM4ZW0nXG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IFtzaGFyZU9wZW4sIHNldFNoYXJlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaXJzdE5hbWVEaXNwbGF5LCBzZXRGaXJzdE5hbWVEaXNwbGF5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB7IGhlYWRlciwgdGl0bGUsIHNlbGVjdGVkLCB0IH0gPSBwcm9wcztcblxuICBmdW5jdGlvbiBoYW5kbGVTaGFyZUNsb3NlKCkge1xuICAgIHNldFNoYXJlT3BlbihmYWxzZSk7XG4gIH1cblxuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgbGV0IGZpcnN0TmFtZUxvY2FsU3RvcmFnZTtcblxuICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGlkLCBpc1ZhbGlkVG9rZW4sIHRva2VuLCBhY2NvdW50SWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFNlcnZlciBzaWRlIHJlbmRlcmluZyBwcm90ZWN0aW9uXG4gICAgZmlyc3ROYW1lTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdE5hbWVcIik7XG4gIH1cbiAgLy8gRmlyc3QgdGltZSBlZmZlY3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQdWxsIGluZm8gZnJvbSBsb2NhbCBzdG9yYWdlIGlmIGF2YWlsYWJsZVxuICAgIGlmIChmaXJzdE5hbWVMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHNldEZpcnN0TmFtZURpc3BsYXkoZmlyc3ROYW1lTG9jYWxTdG9yYWdlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuXG4gIC8vIEZpcnN0IHRpbWUgZWZmZWN0IGFuZCB3aGVuIGlzVmFsaWRUb2tlbiBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBpZiAoaXNWYWxpZFRva2VuKSB7XG4gICAgIC8vIFNvIHRoZSB0b2tlbiBpcyBwcmVzZW50IGFuZCB2YWxpZCwgZG8gSSBoYXZlIHRoZSB1c2VyIGRldGFpbHM/XG4gICAgIGlmICghZmlyc3ROYW1lTG9jYWxTdG9yYWdlKSB7XG4gICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VySW5mbygpKTtcbiAgICAgfVxuICAgfVxuXG4gICAvLyBTb3JyeSB0b2tlbiBubyBsb25nZXIgdmFsaWQsIGdldCByaWQgb2YgZGlzcGxheSBuYW1lIGZvciBsb2dpblxuICAgaWYgKGlzVmFsaWRUb2tlbikge1xuICAgICBpZiAoZmlyc3ROYW1lTG9jYWxTdG9yYWdlKSB7XG4gICAgICBzZXRGaXJzdE5hbWVEaXNwbGF5KCk7XG4gICAgIH1cbiAgIH1cblxuICAgaWYgKGlzVmFsaWRUb2tlbikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XG4gICB9XG4gIH0sIFtpc1ZhbGlkVG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNldCBsb2NhbHN0b3JhZ2UgZm9yIG90aGVyIGFwcHMgYnV0IGFsc28gdXBkYXRlIG91ciBsb2NhbCBzdGF0ZSB0byBmb3JjZSByZW5kZXJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0TmFtZVwiLCBmaXJzdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdE5hbWVcIiwgbGFzdE5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWlkXCIsIGlkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY291bnRJZFwiLCBhY2NvdW50SWQpO1xuICAgIHNldEZpcnN0TmFtZURpc3BsYXkoZmlyc3ROYW1lKTtcbiAgfSwgW2ZpcnN0TmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cbiAgICAgICAge2hlYWRlci5zaGFyZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiB7XG4gICAgICAgICAgICBzZXRTaGFyZU9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICA+e3QoJ3NoYXJlJyl9PC9CdXR0b24+XG4gICAgICAgICAgPFNoYXJlIG9wZW49e3NoYXJlT3Blbn0gaGFuZGxlQ2xvc2U9e2hhbmRsZVNoYXJlQ2xvc2V9IC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgbm9XcmFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhclRpdGxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+PC8+ICkgOiBudWxsIH1cbiAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICB7IWZpcnN0TmFtZURpc3BsYXkgP1xuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpbi9cIjtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3NpZ25pbicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA6IDxVc2VyTWVudSBmaXJzdE5hbWVEaXNwbGF5PXtmaXJzdE5hbWVEaXNwbGF5fS8+fVxuICAgICAgPC9Ub29sYmFyPlxuICAgICAgPFRvb2xiYXJcbiAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgdmFyaWFudD1cImRlbnNlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJTZWNvbmRhcnl9XG4gICAgICA+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICA+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzZWxlY3RlZCA9PT0gJ2hvbWUnID8gY2xhc3Nlcy5saW5rU2VsZWN0ZWQgOiBjbGFzc2VzLmxpbmt9Pnt0KCdob21lJyl9PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtoZWFkZXIuc2VjdGlvbnMubWFwKChzZWN0aW9uLCBpZHgpID0+IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnY21zcGFnZScsIHF1ZXJ5OiB7IHBhZ2U6IHNlY3Rpb24ucGFnZSwgdGl0bGU6IHNlY3Rpb24ubGFuZ3VhZ2VzW2dldEN1cnJlbnRMYW5nKCldIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBzZWN0aW9uLmxhbmd1YWdlc1tnZXRDdXJyZW50TGFuZygpXSA/IGNsYXNzZXMubGlua1NlbGVjdGVkIDogY2xhc3Nlcy5saW5rfT57c2VjdGlvbi5sYW5ndWFnZXNbZ2V0Q3VycmVudExhbmcoKV19PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC8+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmbG93UmlnaHQoXG4gIHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKVxuKShIZWFkZXIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBcInRleHQtZGVjb3JhdGlvblwiOiBcIm5vbmVcIlxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcbiAgbGV0IHRvcFBvc3QgPSBudWxsO1xuICBsZXQgdG9wUG9zdExpbmsgPSBcIlwiO1xuXG4gIGNvbnN0IHsgcG9zdHMsIHRpdGxlIH0gPSBwcm9wcztcblxuICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgIHRvcFBvc3QgPSBwb3N0c1twb3N0cy5sZW5ndGgtMV07XG4gICAgdG9wUG9zdExpbmsgPSBgL3RocmVhZC8/bW9kdWxlPSR7dG9wUG9zdC5tb2R1bGV9IyR7dG9wUG9zdC5pZH1gO1xuICB9XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAge3RvcFBvc3QgP1xuICAgICAgICAoXG4gICAgICAgIDw+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8YSBocmVmPVwiXCI+PEF2YXRhciBhbHQ9e3RvcFBvc3QudXNlcn0gc3JjPXt0b3BQb3N0LmF2YXRhcn0gLz48L2E+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIHt0b3BQb3N0LnVzZXJ9IC0gIHt0b3BQb3N0LnRpbWVzdGFtcH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9IGhyZWY9e3RvcFBvc3RMaW5rfT5cbiAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdG9wUG9zdC5jb250ZW50c319IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgICA6IG51bGwgXG4gICAgICB9XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5NYWluLnByb3BUeXBlcyA9IHtcbiAgcG9zdHM6IFByb3BUeXBlcy5hcnJheSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgbmV4dEkxOE5leHRJbnN0YW5jZSBmcm9tICcuLi8uLi9pMThuJztcblxuY29uc3QgZ2V0Q3VycmVudExhbmcgPSAoKSA9PiBuZXh0STE4TmV4dEluc3RhbmNlLmkxOG4ubGFuZ3VhZ2UgfHwgJ2VuJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBtYWluRmVhdHVyZWRQb3N0OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbODAwXSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tKScsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIH0sXG4gIG1haW5GZWF0dXJlZFBvc3RDb250ZW50OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBvdmVydmlldyA9IHByb3BzLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5GZWF0dXJlZFBvc3R9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke292ZXJ2aWV3LnVybH0pYCB9fT5cbiAgICAgIHsvKiBJbmNyZWFzZSB0aGUgcHJpb3JpdHkgb2YgdGhlIGhlcm8gYmFja2dyb3VuZCBpbWFnZSAqL31cbiAgICAgIHs8aW1nIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBzcmM9e292ZXJ2aWV3LnVybH0gYWx0PXtvdmVydmlldy50aXRsZX0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5vdmVybGF5fSAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluRmVhdHVyZWRQb3N0Q29udGVudH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwiaW5oZXJpdFwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAge292ZXJ2aWV3LnRpdGxlW2dldEN1cnJlbnRMYW5nKCldfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29sb3I9XCJpbmhlcml0XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgICB7b3ZlcnZpZXcuZGVzY3JpcHRpb25bZ2V0Q3VycmVudExhbmcoKV19XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgaHJlZj17eyBwYXRobmFtZTogJ2Ntc3BhZ2UnLCBxdWVyeTogeyBwYWdlOiBvdmVydmlldy5wYWdlIH0gfX0+XG4gICAgICAgICAgICAgIDxhPntvdmVydmlldy5saW5rVGV4dFtnZXRDdXJyZW50TGFuZygpXX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApO1xufVxuXG5PdmVydmlldy5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgICBFbWFpbEljb24sXG4gICAgRW1haWxTaGFyZUJ1dHRvbixcbiAgICBGYWNlYm9va0ljb24sXG4gICAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgICBGYWNlYm9va1NoYXJlQ291bnQsXG4gICAgRmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbixcbiAgICBGYWNlYm9va01lc3Nlbmdlckljb24sXG4gICAgSW5zdGFwYXBlclNoYXJlQnV0dG9uLFxuICAgIExpbmVTaGFyZUJ1dHRvbixcbiAgICBMaW5rZWRpblNoYXJlQnV0dG9uLFxuICAgIExpbmtlZGluSWNvbixcbiAgICBMaXZlam91cm5hbFNoYXJlQnV0dG9uLFxuICAgIE1haWxydVNoYXJlQnV0dG9uLFxuICAgIE9LU2hhcmVCdXR0b24sXG4gICAgUGludGVyZXN0U2hhcmVCdXR0b24sXG4gICAgUG9ja2V0U2hhcmVCdXR0b24sXG4gICAgUmVkZGl0U2hhcmVCdXR0b24sXG4gICAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcbiAgICBUdW1ibHJTaGFyZUJ1dHRvbixcbiAgICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gICAgVHdpdHRlckljb24sXG4gICAgVmliZXJTaGFyZUJ1dHRvbixcbiAgICBWS1NoYXJlQnV0dG9uLFxuICAgIFdoYXRzYXBwU2hhcmVCdXR0b24sXG4gICAgV2hhdHNhcHBJY29uLFxuICAgIFdvcmtwbGFjZVNoYXJlQnV0dG9uXG4gIH0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIG5ldHdvcms6IHtcbiAgICAgICAgXCJ2ZXJ0aWNhbEFsaWduXCI6IFwidG9wXCIsXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjEwcHhcIixcbiAgICAgICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgc2hhcmVDb3VudDoge1xuICAgICAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgICAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgICAgICBcIm92ZXJmbG93XCI6IFwidmlzaWJsZVwiLFxuICAgICAgICBcIndpZHRoXCI6IDAsXG4gICAgICAgIFwibWFyZ2luVG9wXCI6IFwiM3B4XCIsXG4gICAgICAgIFwiZm9udFNpemVcIjogXCIxMnB4XCIsXG4gICAgICAgIFwiZm9udENvbG9yXCI6IFwiYmxhY2tcIlxuICAgIH0sXG4gICAgbmV0d29ya1NoYXJlQnV0dG9uOiB7XG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICB9LFxuICB9KSk7XG5cbmNvbnN0IFRyYW5zaXRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIHJlZikge1xuICByZXR1cm4gPFNsaWRlIGRpcmVjdGlvbj1cInVwXCIgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuaW1wb3J0IGZsb3dSaWdodCBmcm9tICdsb2Rhc2gvZmxvd1JpZ2h0JztcblxuaW1wb3J0IG5leHRJMThOZXh0SW5zdGFuY2UgZnJvbSAnLi4vLi4vaTE4bic7XG5cbmNvbnN0IHsgd2l0aFRyYW5zbGF0aW9uIH0gPSBuZXh0STE4TmV4dEluc3RhbmNlO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5mdW5jdGlvbiBTaGFyZShwcm9wcykge1xuICAgIGNvbnN0IHsgb3BlbiwgaGFuZGxlQ2xvc2UsIHQgfSA9IHByb3BzO1xuICBcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICBsZXQgc2hhcmVVcmwgPSAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2hhcmVVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgY29uc3QgdGl0bGUgPSBcIlNpbXBhdGljb1wiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxEaWFsb2dcbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259XG4gICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIlxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCI+e3QoJ3NoYXJlJyl9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrfT5cbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya1NoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUNvdW50IHVybD17c2hhcmVVcmx9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaGFyZUNvdW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudCA9PiBjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUNvdW50PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrfT5cbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZD1cIjUyMTI3MDQwMTU4ODM3MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya1NoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tNZXNzZW5nZXJJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhY2Vib29rTWVzc2VuZ2VyU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya30+XG4gICAgICAgICAgICAgICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya1NoYXJlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHdpdHRlckljb24gc2l6ZT17MzJ9IHJvdW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNoYXJlQ291bnR9PiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmt9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua2VkaW5TaGFyZUJ1dHRvbiB1cmw9e3NoYXJlVXJsfSBjbGFzc05hbWU9e2NsYXNzZXMubmV0d29ya1NoYXJlQnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rZWRpbkljb24gc2l6ZT17MzJ9IHJvdW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua2VkaW5TaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXR3b3JrfT5cbiAgICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCI6OiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmtTaGFyZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwSWNvbiBzaXplPXszMn0gcm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNoYXJlQ291bnR9PiZuYnNwOzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmt9PlxuICAgICAgICAgICAgICAgICAgICA8RW1haWxTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5ldHdvcmtTaGFyZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtYWlsSWNvbiBzaXplPXszMn0gcm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9FbWFpbFNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsb3dSaWdodChcbiAgICB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSlcbikoU2hhcmUpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9HaXRIdWJcIjtcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIjtcbmltcG9ydCBmbG93UmlnaHQgZnJvbSAnbG9kYXNoL2Zsb3dSaWdodCc7XG5cbmltcG9ydCBuZXh0STE4TmV4dEluc3RhbmNlIGZyb20gJy4uLy4uL2kxOG4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHNpZGViYXJBYm91dEJveDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbMjAwXSxcbiAgfSxcbiAgc2lkZWJhclNlY3Rpb246IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KSk7XG5cbmNvbnN0IHsgd2l0aFRyYW5zbGF0aW9uIH0gPSBuZXh0STE4TmV4dEluc3RhbmNlO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5mdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgc29jaWFsLCB0IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXswfSBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhckFib3V0Qm94fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIHt0KCdhYm91dCcpfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5PntkZXNjcmlwdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyU2VjdGlvbn0+XG4gICAgICAgIHt0KCdzb2NpYWwnKX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIHtzb2NpYWwubWFwKChuZXR3b3JrLCBpZHgpID0+IChcbiAgICAgICAgPExpbmsgZGlzcGxheT1cImJsb2NrXCIgdmFyaWFudD1cImJvZHkxXCIgaHJlZj17bmV0d29yay51cmx9IGtleT17aWR4fT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAge25ldHdvcmsubmFtZSA9PT0gJ2dpdGh1YicgPyA8R2l0SHViSWNvbiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgIHtuZXR3b3JrLm5hbWUgPT09ICdmYWNlYm9vaycgPyA8RmFjZWJvb2tJY29uIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAge25ldHdvcmsubmFtZSA9PT0gJ3R3aXR0ZXInID8gPFR3aXR0ZXJJY29uIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAge25ldHdvcmsubmFtZSA9PT0gJ2luc3RhZ3JhbScgPyA8SW5zdGFncmFtSWNvbiAvPiA6IG51bGx9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPntuZXR3b3JrLm5hbWV9PC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5TaWRlYmFyLnByb3BUeXBlcyA9IHtcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvY2lhbDogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmxvd1JpZ2h0KFxuICB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSlcbikoU2lkZWJhcik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZmV0Y2hNb2R1bGVSZXF1ZXN0IH0gZnJvbSBcIi4uL2FjdGlvbnMvbW9kdWxlc1wiO1xuXG5pbXBvcnQgbmV4dEkxOE5leHRJbnN0YW5jZSBmcm9tICcuLi8uLi9pMThuJztcblxuY29uc3QgZ2V0Q3VycmVudExhbmcgPSAoKSA9PiBuZXh0STE4TmV4dEluc3RhbmNlLmkxOG4ubGFuZ3VhZ2UgfHwgJ2VuJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIGNhcmREZXRhaWxzOiB7XG4gICAgZmxleDogMSxcbiAgfSxcbiAgY2FyZE1lZGlhOiB7XG4gICAgd2lkdGg6IDE2MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvLyBGaXJzdCB0aW1lIGVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFB1bGwgaW5mbyBmcm9tIGxvY2FsIHN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gICAgaWYgKHRoZW1lICYmIHRoZW1lLm1vZHVsZSkge1xuXG4gICAgICBkaXNwYXRjaChmZXRjaE1vZHVsZVJlcXVlc3QodGhlbWUubW9kdWxlKSk7XG4gICAgfVxuICB9LCBbdGhlbWVdKTtcblxuICBjb25zdCB7IG1vZHVsZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubW9kdWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgPENhcmRBY3Rpb25BcmVhIGNvbXBvbmVudD1cImFcIiBocmVmPXt0aGVtZS51cmx9PlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZERldGFpbHN9PlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgIHt0aGVtZS50aXRsZVtnZXRDdXJyZW50TGFuZygpXX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgIHt0aGVtZS5kZXNjcmlwdGlvbltnZXRDdXJyZW50TGFuZygpXX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAge21vZHVsZSAmJiBtb2R1bGUubW9kdWxlVHlwZSA9PT0gJ3RocmVhZCcgP1xuICAgICAgICAgICAgICAgICAgKDxMaW5rIGhyZWY9eycvdGhyZWFkLz9tb2R1bGU9JyArIG1vZHVsZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPnt0aGVtZS5pbWFnZVRleHRbZ2V0Q3VycmVudExhbmcoKV19PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPikgOiBudWxsfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxuICAgICAgICAgICAge3RoZW1lLmltYWdlID8gKFxuICAgICAgICAgICAgPENhcmRNZWRpYSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE1lZGlhfSBpbWFnZT17dGhlbWUuaW1hZ2V9IHRpdGxlPXt0aGVtZS5pbWFnZVRleHRbZ2V0Q3VycmVudExhbmcoKV19IC8+XG4gICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5UaGVtZS5wcm9wVHlwZXMgPSB7XG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5pbXBvcnQgR3JvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Hcm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlcic7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGZsb3dSaWdodCBmcm9tICdsb2Rhc2gvZmxvd1JpZ2h0JztcblxuaW1wb3J0IG5leHRJMThOZXh0SW5zdGFuY2UgZnJvbSAnLi4vLi4vaTE4bic7XG5jb25zdCB7IHdpdGhUcmFuc2xhdGlvbiB9ID0gbmV4dEkxOE5leHRJbnN0YW5jZTtcblxuY29uc3QgZ2V0Q3VycmVudExhbmcgPSAoKSA9PiBuZXh0STE4TmV4dEluc3RhbmNlLmkxOG4ubGFuZ3VhZ2UgfHwgJ2VuJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgXCJ6LWluZGV4XCI6IDEwMDAsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIFVzZXJNZW51KHt0LCBmaXJzdE5hbWVEaXNwbGF5fSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHByZXZPcGVuID0+ICFwcmV2T3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSBldmVudCA9PiB7XG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmV0dXJuIGZvY3VzIHRvIHRoZSBidXR0b24gd2hlbiB3ZSB0cmFuc2l0aW9uZWQgZnJvbSAhb3BlbiAtPiBvcGVuXG4gIGNvbnN0IHByZXZPcGVuID0gUmVhY3QudXNlUmVmKG9wZW4pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuO1xuICB9LCBbb3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcmVmPXthbmNob3JSZWZ9XG4gICAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/ICdtZW51LWxpc3QtZ3JvdycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtmaXJzdE5hbWVEaXNwbGF5fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPFBvcHBlciBvcGVuPXtvcGVufSBhbmNob3JFbD17YW5jaG9yUmVmLmN1cnJlbnR9IHJvbGU9e3VuZGVmaW5lZH0gdHJhbnNpdGlvbiBkaXNhYmxlUG9ydGFsPlxuICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICA8R3Jvd1xuICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnY2VudGVyIHRvcCcgOiAnY2VudGVyIGJvdHRvbScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IGF1dG9Gb2N1c0l0ZW09e29wZW59IGlkPVwibWVudS1saXN0LWdyb3dcIiBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2ZpbGUvXCI7XG4gICAgICAgICAgICAgICAgICAgIH19Pnt0KCdwcm9maWxlJyl9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+ICB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRva2Vuc1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG5cbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4vJztcbiAgICAgICAgICAgICAgICAgICAgfX0gPnt0KCdsb2dvdXQnKX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUG9wcGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsb3dSaWdodChcbiAgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pXG4pKFVzZXJNZW51KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBPdmVydmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9PdmVydmlld1wiO1xuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9jb21wb25lbnRzL1RoZW1lXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IG5leHRJMThOZXh0SW5zdGFuY2UgZnJvbSAnLi4vLi4vaTE4bic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IHNldERlYmF0ZVJlcXVlc3QgfSBmcm9tICcuLi9hY3Rpb25zL2RlYmF0ZSc7XG5pbXBvcnQgeyBmZXRjaFBvc3RzUmVxdWVzdCB9IGZyb20gJy4uL2FjdGlvbnMvcG9zdHMnO1xuXG5jb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IG5leHRJMThOZXh0SW5zdGFuY2UuaTE4bi5sYW5ndWFnZSB8fCAnZW4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIG1haW5HcmlkOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIEhvbWUoeyBkZWJhdGVTZXJ2ZXIgfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgaWYgKGRlYmF0ZVNlcnZlcikge1xuICAgIC8vIFB1dCB0aGUgc2VydmVyIHNpZGUgZmV0Y2ggaW50byBjbGllbnQgc2lkZSBzdG9yZVxuICAgIGRpc3BhdGNoKHNldERlYmF0ZVJlcXVlc3QoZGViYXRlU2VydmVyKSlcbiAgfVxuXG4gIGNvbnN0IGRlYmF0ZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmRlYmF0ZS5kZWJhdGUpO1xuICBjb25zdCB7IHBvc3RzIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0cyk7XG4gIGNvbnN0IHsgaXNWYWxpZFRva2VuLCBhY2NvdW50SWQgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlYmF0ZSAmJiBkZWJhdGUuZGViYXRlVHlwZSA9PT0gJ3ByaXZhdGUnKSB7XG4gICAgICBpZiAoaXNWYWxpZFRva2VuID09PSBmYWxzZSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4vJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc1ZhbGlkVG9rZW4sIGRlYmF0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlYmF0ZSAmJiBkZWJhdGUuZGViYXRlVHlwZSA9PT0gJ3ByaXZhdGUnKSB7XG4gICAgICBpZiAoaXNWYWxpZFRva2VuID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAoISFhY2NvdW50SWQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoUG9zdHNSZXF1ZXN0KGFjY291bnRJZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjY291bnRJZF0pO1xuXG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGlmICghZGViYXRlKSB7XG4gICAgcmV0dXJuICg8ZGl2Lz4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntkZWJhdGUuc2x1Z308L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIHtkZWJhdGUubWV0YVRhZ3MubWFwKCh0YWcsIGlkeCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGFnLnR5cGUgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICg8bWV0YSBwcm9wZXJ0eT17dGFnLnR5cGV2YWx1ZX0gY29udGVudD17dGFnLmNvbnRlbnR9IGtleT17aWR4fSAvPilcbiAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICByZXR1cm4gKDxtZXRhIG5hbWU9e3RhZy50eXBldmFsdWV9IGNvbnRlbnQ9e3RhZy5jb250ZW50fSBrZXk9e2lkeH0gLz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9IZWFkPlxuICAgICAge2RlYmF0ZSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgICA8SGVhZGVyIHNlbGVjdGVkPSdob21lJyB0aXRsZT17ZGViYXRlLnNsdWd9IGhlYWRlcj17ZGViYXRlLmhlYWRlcn0gLz5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxPdmVydmlldyBkYXRhPXtkZWJhdGUub3ZlcnZpZXd9IC8+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgICAgIHtkZWJhdGUudGhlbWVzLm1hcCh0aGVtZSA9PiAoXG4gICAgICAgICAgICAgICAgPFRoZW1lIGtleT17dGhlbWUudGl0bGVbZ2V0Q3VycmVudExhbmcoKV19IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5HcmlkfT5cbiAgICAgICAgICAgICAgPE1haW4gdGl0bGU9XCJMYXRlc3QgY29udHJpYnV0b25cIiBwb3N0cz17cG9zdHN9IC8+XG4gICAgICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2RlYmF0ZS5zaWRlYmFyLmFib3V0W2dldEN1cnJlbnRMYW5nKCldfVxuICAgICAgICAgICAgICAgIHNvY2lhbD17ZGViYXRlLnNpZGViYXIuc29jaWFsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxGb290ZXIgZm9vdGVyPXtkZWJhdGUuZm9vdGVyfSAvPlxuICAgICAgPC8+KSA6IG51bGwgfVxuICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICBpZiAoY3R4LnJlcSkge1xuICAgIC8vIERvIGEgY2hlY2sgaWYgdGhpcyBkZWJhdGUgZXhpc3RzIGJlZm9yZSB0cnlpbmcgdG8gcmVuZGVyIChubyBzYWdhIGhlcmUsIHNlcnZlciBzaWRlKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5hcGkuaG9zdH0vdjEvZmV0Y2hEZWJhdGU/bmFtZT0ke2N0eC5yZXEuaGVhZGVycy5ob3N0fWApXG4gICAgY29uc3QgZGViYXRlU2VydmVyID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlYmF0ZVNlcnZlclxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlYmF0ZVNlcnZlcjogbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZmxvd1JpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNoYXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9