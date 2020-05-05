(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/@react-page/create-plugin-materialui/lib-es/Controls/index.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@react-page/create-plugin-materialui/lib-es/Controls/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/ui */ "../node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.debounce */ "../node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uniforms_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uniforms-material */ "../node_modules/uniforms-material/index.js");
/* harmony import */ var uniforms_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniforms_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_makeUniformsSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/makeUniformsSchema */ "../node_modules/@react-page/create-plugin-materialui/lib-es/utils/makeUniformsSchema.js");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





// see https://github.com/vazco/uniforms/issues/617
// tslint:disable-next-line:no-any
var AutoForm = uniforms_material__WEBPACK_IMPORTED_MODULE_3__["AutoForm"];
// tslint:disable-next-line:no-any
var AutoFields = uniforms_material__WEBPACK_IMPORTED_MODULE_3__["AutoFields"];
var defaultControlsLayout = {
    columnCount: 2,
};
var getDefaultValue = function (bridge) {
    return bridge.getSubfields(null).reduce(function (acc, fieldName) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[fieldName] = bridge.getInitialValue(fieldName), _a)));
    }, {});
};
function Controls(props) {
    var saveDebounced = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (m) { return props.onChange(m); }, 1000), [props.onChange]);
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(), 2), preview = _a[0], setPreview = _a[1];
    var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (model) {
        setPreview(model);
        saveDebounced(model);
    }, []);
    var focused = props.focused, state = props.state, schema = props.schema, _b = props.controlsLayout, controlsLayout = _b === void 0 ? defaultControlsLayout : _b, Renderer = props.Renderer, remove = props.remove;
    var bridge = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () { return Object(_utils_makeUniformsSchema__WEBPACK_IMPORTED_MODULE_4__["default"])(schema); }, [schema]);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        var _a;
        onSubmit(__assign(__assign({}, getDefaultValue(bridge)), (_a = (preview !== null && preview !== void 0 ? preview : state), (_a !== null && _a !== void 0 ? _a : {}))));
    }, [bridge]);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Renderer, __assign({}, props, { state: (preview !== null && preview !== void 0 ? preview : state) })),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_0__["BottomToolbar"], __assign({ open: focused, title: props.text, onDelete: remove, icon: props.IconComponent }, props),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { style: { marginBottom: 24, maxHeight: '50vh', overflow: 'auto' } },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AutoForm, { model: preview || state, autosave: true, schema: bridge, onSubmit: onSubmit },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { style: {
                            columnCount: controlsLayout.columnCount || 2,
                            columnRule: '1px solid #E0E0E0',
                            columnGap: 48,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AutoFields, { element: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"] })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Controls);
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=1.js.map