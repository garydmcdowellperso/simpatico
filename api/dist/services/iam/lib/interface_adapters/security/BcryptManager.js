"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var saltRounds = 10;

var BcryptManager =
/*#__PURE__*/
function () {
  function BcryptManager() {
    (0, _classCallCheck2["default"])(this, BcryptManager);
  }

  (0, _createClass2["default"])(BcryptManager, [{
    key: "hash",
    value: function hash(plaintextpassword) {
      return _bcryptjs["default"].hash(plaintextpassword, saltRounds);
    }
  }, {
    key: "compare",
    value: function compare(plaintextpassword, hash) {
      return _bcryptjs["default"].compare(plaintextpassword, hash);
    }
  }]);
  return BcryptManager;
}();

var _default = BcryptManager;
exports["default"] = _default;