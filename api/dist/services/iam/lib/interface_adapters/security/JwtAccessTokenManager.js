"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var JWT_SECRET_KEY = "shhhhhh!";

var JwtAccessTokenManager =
/*#__PURE__*/
function () {
  function JwtAccessTokenManager() {
    (0, _classCallCheck2["default"])(this, JwtAccessTokenManager);
  }

  (0, _createClass2["default"])(JwtAccessTokenManager, [{
    key: "generate",
    value: function generate(payload) {
      return _jsonwebtoken["default"].sign(payload, JWT_SECRET_KEY);
    }
  }, {
    key: "decode",
    value: function decode(accessToken) {
      return _jsonwebtoken["default"].verify(accessToken, JWT_SECRET_KEY);
    }
  }]);
  return JwtAccessTokenManager;
}();

var _default = JwtAccessTokenManager;
exports["default"] = _default;