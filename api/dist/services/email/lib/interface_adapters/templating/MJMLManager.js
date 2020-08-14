"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mjml = _interopRequireDefault(require("mjml"));

var _mustache = _interopRequireDefault(require("mustache"));

var MJMLManager =
/*#__PURE__*/
function () {
  function MJMLManager() {
    (0, _classCallCheck2["default"])(this, MJMLManager);
  }

  (0, _createClass2["default"])(MJMLManager, [{
    key: "htmlOutput",
    value: function htmlOutput(template, data) {
      return (0, _mjml["default"])(_mustache["default"].render(template, data), {});
    }
  }]);
  return MJMLManager;
}();

var _default = MJMLManager;
exports["default"] = _default;