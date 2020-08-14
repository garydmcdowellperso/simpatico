"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("../../../../../config"));

var HTTPRequesterAxios =
/*#__PURE__*/
function () {
  function HTTPRequesterAxios() {
    (0, _classCallCheck2["default"])(this, HTTPRequesterAxios);
  }

  (0, _createClass2["default"])(HTTPRequesterAxios, [{
    key: "get",
    value: async function get(url) {
      try {
        var response = await _axios["default"].get(url);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }]);
  return HTTPRequesterAxios;
}();

var _default = HTTPRequesterAxios;
exports["default"] = _default;