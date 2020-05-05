(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "../node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "../node_modules/@material-ui/core/esm/utils/capitalize.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'round' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== "round" && classes.extended, size !== 'large' && classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(size))], disabled && classes.disabled, {
      'primary': classes.primary,
      'secondary': classes.secondary,
      'inherit': classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, children));
});
 true ? Fab.propTypes = {
  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['round', 'extended'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiFab'
})(Fab));

/***/ }),

/***/ "../node_modules/@material-ui/core/esm/Fab/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material-ui/core/esm/Fab/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fab */ "../node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Fab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/icons/Add.js":
/*!*************************************************!*\
  !*** ../node_modules/@material-ui/icons/Add.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Create.js":
/*!****************************************************!*\
  !*** ../node_modules/@material-ui/icons/Create.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Create');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Devices.js":
/*!*****************************************************!*\
  !*** ../node_modules/@material-ui/icons/Devices.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
}), 'Devices');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/SettingsOverscan.js":
/*!**************************************************************!*\
  !*** ../node_modules/@material-ui/icons/SettingsOverscan.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"
}), 'SettingsOverscan');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/ViewQuilt.js":
/*!*******************************************************!*\
  !*** ../node_modules/@material-ui/icons/ViewQuilt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"
}), 'ViewQuilt');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Fab */ "../node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var device_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! device.js */ "../node_modules/device.js/dist/device.es.js");
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



var DisplayModeToggle = function (_a) {
    var description = _a.description, icon = _a.icon, onClick = _a.onClick, active = _a.active, disabled = _a.disabled;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-button" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-button-inner" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1__["default"], { color: active ? 'secondary' : 'default', size: device_js__WEBPACK_IMPORTED_MODULE_2__["device"].mobile ? 'small' : 'large', onClick: onClick, disabled: disabled }, icon)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-button-description" }, description)));
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayModeToggle);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleEdit/index.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleEdit/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Create */ "../node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-page/core */ "../node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_4__);
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





var Inner = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Button_index__WEBPACK_IMPORTED_MODULE_2__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_1___default.a, null), description: props.label, active: props.isEditMode, onClick: props.editMode })); };
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createStructuredSelector"])({
    isEditMode: _react_page_core__WEBPACK_IMPORTED_MODULE_3__["Selectors"].Display.isEditMode,
});
var mapDispatchToProps = { editMode: _react_page_core__WEBPACK_IMPORTED_MODULE_3__["Actions"].Display.editMode };
/* harmony default export */ __webpack_exports__["default"] = (Object(_react_page_core__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleInsert/index.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleInsert/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Add */ "../node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-page/core */ "../node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_4__);
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





var Inner = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Button_index__WEBPACK_IMPORTED_MODULE_2__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, null), description: props.label, active: props.isInsertMode, onClick: props.insertMode })); };
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createStructuredSelector"])({
    isInsertMode: _react_page_core__WEBPACK_IMPORTED_MODULE_3__["Selectors"].Display.isInsertMode,
});
var mapDispatchToProps = { insertMode: _react_page_core__WEBPACK_IMPORTED_MODULE_3__["Actions"].Display.insertMode };
/* harmony default export */ __webpack_exports__["default"] = (Object(_react_page_core__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleLayout/index.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleLayout/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/ViewQuilt */ "../node_modules/@material-ui/icons/ViewQuilt.js");
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js");
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-page/core */ "../node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_4__);
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





var Inner = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_1___default.a, null), description: props.label, active: props.isLayoutMode, onClick: props.layoutMode })); };
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createStructuredSelector"])({
    isLayoutMode: _react_page_core__WEBPACK_IMPORTED_MODULE_3__["Selectors"].Display.isLayoutMode,
});
var mapDispatchToProps = { layoutMode: _react_page_core__WEBPACK_IMPORTED_MODULE_3__["Actions"].Display.layoutMode };
/* harmony default export */ __webpack_exports__["default"] = (Object(_react_page_core__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/TogglePreview/index.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/TogglePreview/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Devices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Devices */ "../node_modules/@material-ui/icons/Devices.js");
/* harmony import */ var _material_ui_icons_Devices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Devices__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-page/core */ "../node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js");
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





var Inner = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Button_index__WEBPACK_IMPORTED_MODULE_4__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Devices__WEBPACK_IMPORTED_MODULE_1___default.a, null), description: props.label, active: props.isPreviewMode, onClick: props.previewMode })); };
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createStructuredSelector"])({
    isPreviewMode: _react_page_core__WEBPACK_IMPORTED_MODULE_2__["Selectors"].Display.isPreviewMode,
});
var mapDispatchToProps = { previewMode: _react_page_core__WEBPACK_IMPORTED_MODULE_2__["Actions"].Display.previewMode };
/* harmony default export */ __webpack_exports__["default"] = (Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleResize/index.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleResize/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_SettingsOverscan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/SettingsOverscan */ "../node_modules/@material-ui/icons/SettingsOverscan.js");
/* harmony import */ var _material_ui_icons_SettingsOverscan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SettingsOverscan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-page/core */ "../node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/Button/index.js");
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





var Inner = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Button_index__WEBPACK_IMPORTED_MODULE_4__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_SettingsOverscan__WEBPACK_IMPORTED_MODULE_1___default.a, null), description: props.label, active: props.isResizeMode, onClick: props.resizeMode })); };
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createStructuredSelector"])({
    isResizeMode: _react_page_core__WEBPACK_IMPORTED_MODULE_2__["Selectors"].Display.isResizeMode,
});
var mapDispatchToProps = { resizeMode: _react_page_core__WEBPACK_IMPORTED_MODULE_2__["Actions"].Display.resizeMode };
/* harmony default export */ __webpack_exports__["default"] = (Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Inner));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/index.js":
/*!************************************************************************!*\
  !*** ../node_modules/@react-page/ui/lib-es/DisplayModeToggle/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToggleEdit_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleEdit/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleEdit/index.js");
/* harmony import */ var _ToggleInsert_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleInsert/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleInsert/index.js");
/* harmony import */ var _ToggleLayout_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToggleLayout/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleLayout/index.js");
/* harmony import */ var _TogglePreview_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TogglePreview/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/TogglePreview/index.js");
/* harmony import */ var _ToggleResize_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToggleResize/index */ "../node_modules/@react-page/ui/lib-es/DisplayModeToggle/ToggleResize/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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






var defaultTranslations = {
    edit: 'Edit things',
    insert: 'Add things',
    layout: 'Move things',
    resize: 'Resize things',
    preview: 'Preview result',
};
var getStickyNessstyle = function (stickyness) {
    if (!stickyness ||
        (!stickyness.shouldStickToBottom && !stickyness.shouldStickToTop)) {
        return {
            position: 'fixed',
        };
    }
    return {
        position: 'absolute',
        bottom: stickyness.shouldStickToBottom ? 0 : 'auto',
        top: stickyness.shouldStickToTop ? 0 : 'auto',
        right: -stickyness.rightOffset || 0,
    };
};
var Inner = function (_a) {
    var stickyNess = _a.stickyNess, _b = _a.translations, translations = _b === void 0 ? defaultTranslations : _b;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-control-group", style: __assign({ position: 'fixed', zIndex: 10001, bottom: 0, right: 0, display: 'flex', maxHeight: '100%' }, getStickyNessstyle(stickyNess)) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: stickyNess.stickyElRef, style: {
                padding: 16,
                position: 'relative',
                flexFlow: 'column wrap',
                direction: 'rtl',
                display: 'flex',
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-control" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToggleEdit_index__WEBPACK_IMPORTED_MODULE_1__["default"], { label: translations.edit }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-clearfix" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-control" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToggleInsert_index__WEBPACK_IMPORTED_MODULE_2__["default"], { label: translations.insert }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-clearfix" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-control" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToggleLayout_index__WEBPACK_IMPORTED_MODULE_3__["default"], { label: translations.layout }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-clearfix" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-control" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToggleResize_index__WEBPACK_IMPORTED_MODULE_5__["default"], { label: translations.resize }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-clearfix" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-control" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TogglePreview_index__WEBPACK_IMPORTED_MODULE_4__["default"], { label: translations.preview }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "ory-controls-mode-toggle-clearfix" })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inner);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/device.js/dist/device.es.js":
/*!***************************************************!*\
  !*** ../node_modules/device.js/dist/device.es.js ***!
  \***************************************************/
/*! exports provided: device, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hasClass_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) { return !!className && element.classList.contains(className); }else { return (" " + element.className + " ").indexOf(" " + className + " ") !== -1; }
}
module.exports = exports["default"];
});

var addClass_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;



var _hasClass2 = _interopRequireDefault(hasClass_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) { element.classList.add(className); }else if (!(0, _hasClass2.default)(element)) { element.className = element.className + ' ' + className; }
}
module.exports = exports['default'];
});

var removeClass = function removeClass(element, className) {
  if (element.classList) { element.classList.remove(className); }else { element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, ''); }
};

var index = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = exports.removeClass = exports.addClass = undefined;



var _addClass2 = _interopRequireDefault(addClass_1);



var _removeClass2 = _interopRequireDefault(removeClass);



var _hasClass2 = _interopRequireDefault(hasClass_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addClass = _addClass2.default;
exports.removeClass = _removeClass2.default;
exports.hasClass = _hasClass2.default;
exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };
});

var index_2 = index.removeClass;
var index_3 = index.addClass;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
var nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var documentTimeout = null;

var documentCallbacks = [];
var stopDocumentTimeout = function () {
  if (documentTimeout) {
    clearTimeout(documentTimeout);
    documentTimeout = null;
  }
};

var waitForDocument = function (callback) {
  if (callback) {
    documentCallbacks.push(callback);
  }
  if (typeof document !== 'undefined') {
    stopDocumentTimeout();
    for (var i = 0, l = documentCallbacks.length; i < l; i++) {
      documentCallbacks[i](document);
    }
    documentCallbacks.length = 0;
    return;
  }
  stopDocumentTimeout();
  setTimeout(function () {
    waitForDocument();
  }, 100);
};

var getUserAgent = function () {
  if (typeof document !== 'undefined') {
    return window.navigator.userAgent;
  }
  return '';
};


var isIE = function (v) {
  return RegExp('msie' + (!isNaN(v)?('\\s'+v):''), 'i').test(navigator.userAgent);
};

// const getDocumentElement = () => {
//   if (typeof document !== 'undefined') {
//     return document.documentElement;
//   }
//   return null;
// };

// Check if documentElement already has a given class.
// const hasClass = (domNode, className) => {
//   let regex;
//   regex = new RegExp(className, 'i');
//   return domNode.className.match(regex);
// };

// // Add one or more CSS classes to the <html> element.
// const addClass = (domNode, className) => {
//   let currentClassNames = null;
//   if (!hasClass(domNode, className)) {
//     currentClassNames = domNode.className.replace(/^\s+|\s+$/g, '');
//     domNode.className = currentClassNames + ' ' + className;
//   }
// };

// // Remove single CSS class from the <html> element.
// const removeClass = (domNode, className) => {
//   if (hasClass(domNode, className)) {
//     domNode.className = domNode.className.replace(' ' + className, '');
//   }
// };

var staticDevice = null;

var Device = function Device(userAgent) {
  var this$1 = this;
  if ( userAgent === void 0 ) userAgent = null;

  this.state = {
    addedClasses: false
  };

  this.matchCache = {};
  this.featureCache = {};
  this.classes = '';

  this.setUserAgent(userAgent);

  this.callback = null;

  if (typeof document === 'undefined' && !this.userAgent) {
    // console.log('document net defined');
    waitForDocument(function () {
      this$1.setUserAgent();
    });
  }
};

var prototypeAccessors = { features: {},deviceorientation: {},ie9: {},touchDevice: {},touch: {},ios: {},iphone: {},ipod: {},ipad: {},android: {},androidPhone: {},androidTablet: {},blackberry: {},blackberryPhone: {},blackberryTablet: {},windows: {},ie10: {},windowsPhone: {},windowsTablet: {},fxos: {},fxosPhone: {},fxosTablet: {},meego: {},cordova: {},nodeWebkit: {},mobile: {},tablet: {},desktop: {},television: {},portrait: {},landscape: {} };
var staticAccessors = { device: {} };

staticAccessors.device.get = function () {
  if (!staticDevice) {
    staticDevice = new Device();
  }
  return staticDevice;
};

Device.prototype.match = function match (needle) {
  if (!this.matchCache[needle]) {
    this.matchCache[needle] = this.userAgent.indexOf(needle) > -1;
  }
  return this.matchCache[needle];
};

Device.prototype.feature = function feature (key) {

  return this.featureCache[key];
};

Device.prototype.addFeature = function addFeature (key, value) {
  if (!this.featureCache[key]) {
    this.featureCache[key] = value;
  }
  return value;
};

Device.prototype.setUserAgent = function setUserAgent (userAgent) {
    if ( userAgent === void 0 ) userAgent = null;

  this.userAgent = userAgent || this.userAgent || getUserAgent();

  if (this.userAgent) {
    stopDocumentTimeout();
    this.matchCache = {};
    this.userAgent = this.userAgent.toLowerCase();
  }
};

Device.prototype.onOrientationChange = function onOrientationChange (orientation) {
  // console.log('orientation', orientation);
};

Device.prototype.getClasses = function getClasses () {
  if (this.classes) {
    return this.classes;
  }

  if (!this.userAgent) {
    this.setUserAgent();
  }

  if (this.landscape) {
    this.classes += 'landscape ';
  } else {
    this.classes += 'portrait ';
  }

  if (this.touch) {
    this.classes += 'touch ';
  }
  if (this.ios) {
    if (this.ipad) {
      this.classes += 'ios ipad tablet ';
    } else if (this.iphone) {
      this.classes += 'ios iphone mobile ';
    } else if (this.ipod) {
      this.classes += 'ios ipod mobile ';
    }
  } else if (this.android) {
    if (this.androidTablet) {
      this.classes += 'android tablet ';
    } else {
      this.classes += 'android mobile ';
    }
  } else if (this.blackberry) {
    if (this.blackberryTablet) {
      this.classes += 'blackberry tablet ';
    } else {
      this.classes += 'blackberry mobile ';
    }
  } else if (this.windows) {
    if (this.windowsTablet) {
      this.classes += 'windows tablet ';
    } else if (this.windowsPhone) {
      this.classes += 'windows mobile ';
    } else {
      this.classes += 'windows desktop ';
    }
  } else if (this.fxos) {
    if (this.fxosTablet) {
      this.classes += 'fxos tablet ';
    } else {
      this.classes += 'fxos mobile ';
    }
  } else if (this.meego) {
    this.classes += 'meego mobile ';
  } else if (this.nodeWebkit) {
    this.classes += 'node-webkit ';
  } else if (this.television) {
    this.classes += 'television ';
  } else if (this.desktop) {
    this.classes += 'desktop ';
  }

  if (this.cordova) {
    this.classes += 'cordova ';
  }

  if (!this.desktop && this.deviceorientation) {
    this.classes += 'deviceorientation ';
  }
  this.classes = this.classes.slice(0, -1);
  return this.classes;
};

Device.prototype.addClasses = function addClasses (targetNode) {
  if (!this.targetNode) {
    this.targetNode = targetNode;
    if (!targetNode && typeof document !== 'undefined') {
      this.targetNode = document.documentElement;
    }

    if (!this.targetNode) {
      // console.warn('addClasses to nothing?');
      return;
    }

    if (!this.userAgent) {
      this.setUserAgent();
    }

    this.commitClasses();

    this.addListener();
  }
};

Device.prototype.addListener = function addListener () {
    var this$1 = this;


  if (this.hasListener) {
    return;
  }

  this.hasListener = true;
  this.handleOrientation = this.handleOrientation.bind(this);
  this.onResize = throttle_1(this.handleOrientation, 200);

  var onOrientationChange = function () {
    setTimeout(function () {
      this$1.handleOrientation();
    }, 10);
  };

  if ('onorientationchange' in window) {
    window.addEventListener('orientationchange', onOrientationChange, false);
  } else {
    window.addEventListener('resize', this.onResize, false);
  }
  onOrientationChange();
};

Device.prototype.handleOrientation = function handleOrientation () {
  this.onOrientationChange(this.landscape);
  if (!this.targetNode){
    return;
  }
  if (this.landscape) {
    index_2(this.targetNode, 'portrait');
    index_3(this.targetNode, 'landscape');
  } else {
    index_2(this.targetNode, 'landscape');
    index_3(this.targetNode, 'portrait');
  }
};

Device.prototype.commitClasses = function commitClasses () {
  if (this.state.addedClasses || !this.targetNode) {
    return;
  }
  this.state.addedClasses = true;
  this.targetNode.className += this.getClasses();
};

prototypeAccessors.features.get = function () {

  return {
    wheelEvent: this.feature('wheelEvent') || this.addFeature('wheelEvent', ('onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
        document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
        'DOMMouseScroll')) // let's assume that remaining browsers are older Firefox
  };
  // detect available wheel event
  // support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
  // document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
  // 'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

};

prototypeAccessors.deviceorientation.get = function () {
  if (!this.canOrientate) {
    this.canOrientate =
      'ondeviceorientation' in window || 'deviceorientation' in window;
  }
  return !this.desktop && this.canOrientate;
};

prototypeAccessors.ie9.get = function (){
  if (!this.matchCache['ie9']) {
    if (typeof document !== 'undefined') {
      this.matchCache['ie9'] = this.windows && isIE(10);
    }
  }
  return this.matchCache['ie9'] || false;
};

prototypeAccessors.touchDevice.get = function () {
  if (!this.matchCache['touchDevice']) {
    if (typeof document !== 'undefined') {
      this.matchCache['touchDevice'] = !!(navigator && navigator.userAgent) && navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    }
  }
  return this.matchCache['touchDevice'] || false;
};


prototypeAccessors.touch.get = function () {
  if (!this.matchCache['touch']) {
    if (typeof document !== 'undefined') {
      this.matchCache['touch'] = (('ontouchstart' in window) ||( window.DocumentTouch && document instanceof DocumentTouch) || (navigator && navigator.msMaxTouchPoints > 0) || (navigator && navigator.maxTouchPoints));
    }
  }
  return this.matchCache['touch'] || false;

};

prototypeAccessors.ios.get = function () {
  return this.iphone || this.ipod || this.ipad;
};

prototypeAccessors.iphone.get = function () {
  return !this.windows && this.match('iphone');
};

prototypeAccessors.ipod.get = function () {
  return this.match('ipod');
};

prototypeAccessors.ipad.get = function () {
  return this.match('ipad');
};

prototypeAccessors.android.get = function () {
  return !this.windows && this.match('android');
};

prototypeAccessors.androidPhone.get = function () {
  return this.android && this.match('mobile');
};

prototypeAccessors.androidTablet.get = function () {
  return this.android && !this.match('mobile');
};

prototypeAccessors.blackberry.get = function () {
  return this.match('blackberry') || this.match('bb10') || this.match('rim');
};

prototypeAccessors.blackberryPhone.get = function () {
  return this.blackberry && !this.match('tablet');
};

prototypeAccessors.blackberryTablet.get = function () {
  return this.blackberry && this.match('tablet');
};

prototypeAccessors.windows.get = function () {
  return this.match('windows');
};

prototypeAccessors.ie10.get = function (){
  if (!this.matchCache['ie10']) {
    if (typeof document !== 'undefined') {
      this.matchCache['ie10'] = this.windows && isIE(10);
    }
  }
  return this.matchCache['ie10'] || false;
};

prototypeAccessors.windowsPhone.get = function () {
  return this.windows && this.match('phone');
};

prototypeAccessors.windowsTablet.get = function () {
  return this.windows && (this.match('touch') && !this.windowsPhone);
};

prototypeAccessors.fxos.get = function () {
  return (
    (this.match('(mobile;') || this.match('(tablet;')) && this.match('; rv:')
  );
};

prototypeAccessors.fxosPhone.get = function () {
  return this.fxos && this.match('mobile');
};

prototypeAccessors.fxosTablet.get = function () {
  return this.fxos && this.match('tablet');
};

prototypeAccessors.meego.get = function () {
  return this.match('meego');
};

prototypeAccessors.cordova.get = function () {
  return window.cordova && location.protocol === 'file:';
};

prototypeAccessors.nodeWebkit.get = function () {
  return typeof window.process === 'object';
};

prototypeAccessors.mobile.get = function () {
  return (
    this.androidPhone ||
    this.iphone ||
    this.ipod ||
    this.windowsPhone ||
    this.blackberryPhone ||
    this.fxosPhone ||
    this.meego
  );
};

prototypeAccessors.tablet.get = function () {
  return (
    this.ipad ||
    this.androidTablet ||
    this.blackberryTablet ||
    this.windowsTablet ||
    this.fxosTablet
  );
};

prototypeAccessors.desktop.get = function () {
  return !this.tablet && !this.mobile;
};

prototypeAccessors.television.get = function () {
    var this$1 = this;

  var i,
    television = [
      'googletv',
      'viera',
      'smarttv',
      'internet.tv',
      'netcast',
      'nettv',
      'appletv',
      'boxee',
      'kylo',
      'roku',
      'dlnadoc',
      'roku',
      'pov_tv',
      'hbbtv',
      'ce-html'
    ];

  i = 0;
  while (i++ < television.length) {
    if (this$1.match(television[i])) {
      return true;
    }
  }
  return false;
};

prototypeAccessors.portrait.get = function () {
  if ('orientation' in window) {
    return window.orientation === 0;
  }
  if (typeof window !== 'undefined') {
    return window.innerHeight / window.innerWidth > 1;
  }
  return false;
};

prototypeAccessors.landscape.get = function () {
  if (typeof window !== 'undefined') {
    if ('orientation' in window) {
      return window.orientation !== 0;
    }
    return window.innerHeight / window.innerWidth < 1;
  }
  return false;
};

Object.defineProperties( Device.prototype, prototypeAccessors );
Object.defineProperties( Device, staticAccessors );
var device = new Device();

/* harmony default export */ __webpack_exports__["default"] = (Device);
//# sourceMappingURL=device.es.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=13.js.map