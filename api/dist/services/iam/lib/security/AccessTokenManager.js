"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var AccessTokenManager =
/*#__PURE__*/
function () {
  function AccessTokenManager(accessTokenManager) {
    (0, _classCallCheck2["default"])(this, AccessTokenManager);
    this.accessTokenManager = accessTokenManager;
  }

  (0, _createClass2["default"])(AccessTokenManager, [{
    key: "generate",
    value: function generate(payload) {
      return this.accessTokenManager.generate(payload);
    }
  }, {
    key: "decode",
    value: function decode(payload) {
      return this.accessTokenManager.decode(payload);
    }
  }]);
  return AccessTokenManager;
}();

var _default = AccessTokenManager;
exports["default"] = _default;