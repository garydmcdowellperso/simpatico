"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var HTTPRequester =
/*#__PURE__*/
function () {
  function HTTPRequester(httpRequester) {
    (0, _classCallCheck2["default"])(this, HTTPRequester);
    this.httpRequester = httpRequester;
  }

  (0, _createClass2["default"])(HTTPRequester, [{
    key: "get",
    value: function get(url) {
      return this.httpRequester.get(url);
    }
  }]);
  return HTTPRequester;
}();

var _default = HTTPRequester;
exports["default"] = _default;