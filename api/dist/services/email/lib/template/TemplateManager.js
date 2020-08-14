"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TemplateManager =
/*#__PURE__*/
function () {
  function TemplateManager(templateManager) {
    (0, _classCallCheck2["default"])(this, TemplateManager);
    this.templateManager = templateManager;
  }

  (0, _createClass2["default"])(TemplateManager, [{
    key: "htmlOutput",
    value: function htmlOutput(template, data) {
      return this.templateManager.htmlOutput(template, data);
    }
  }]);
  return TemplateManager;
}();

var _default = TemplateManager;
exports["default"] = _default;