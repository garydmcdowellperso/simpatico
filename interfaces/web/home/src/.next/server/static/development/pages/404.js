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

/***/ "./pages/404.jsx":
/*!***********************!*\
  !*** ./pages/404.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Custom404; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Custom404() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    className: "bg-purple"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stars"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "brand-logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://salehriaz.com/404Page/img/logo.svg",
    width: "80px"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "central-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "image-404",
    src: "http://salehriaz.com/404Page/img/404.svg",
    width: "300px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://salehriaz.com/404Page/404.html",
    className: "btn-go-home",
    target: "_blank"
  }, "GO BACK HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "objects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "object_rocket",
    src: "http://salehriaz.com/404Page/img/rocket.svg",
    width: "40px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "earth-moon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "object_earth",
    src: "http://salehriaz.com/404Page/img/earth.svg",
    width: "100px"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "object_moon",
    src: "http://salehriaz.com/404Page/img/moon.svg",
    width: "80px"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box_astronaut"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "object_astronaut",
    src: "http://salehriaz.com/404Page/img/astronaut.svg",
    width: "140px"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "glowing_stars"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star"
  }))));
}

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/404.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gary/dev/simpatico/interfaces/web/home/src/pages/404.jsx */"./pages/404.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=404.js.map