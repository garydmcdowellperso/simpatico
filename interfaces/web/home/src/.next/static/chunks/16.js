(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "../node_modules/@react-page/ui/lib-es/ThemeProvider/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/ThemeProvider/index.js ***!
  \********************************************************************/
/*! exports provided: darkTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "../node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _DarkTheme_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkTheme/index */ "../node_modules/@react-page/ui/lib-es/ThemeProvider/DarkTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return _DarkTheme_index__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _themeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeOptions */ "../node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */







var generateClassName = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["createGenerateClassName"])({
    disableGlobal: true,
    productionPrefix: 'ory',
});
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_themeOptions__WEBPACK_IMPORTED_MODULE_4__["themeOptions"]);
var ThemeProvider = /** @class */ (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeProvider.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["StylesProvider"], { injectFirst: true, generateClassName: generateClassName },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], { theme: this.props.theme || theme }, this.props.children)));
    };
    return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js ***!
  \***************************************************************************/
/*! exports provided: themeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeOptions", function() { return themeOptions; });
var themeOptions = {};
//# sourceMappingURL=themeOptions.js.map

/***/ })

}]);
//# sourceMappingURL=16.js.map