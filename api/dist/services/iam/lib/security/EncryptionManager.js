"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var EncryptionManager =
/*#__PURE__*/
function () {
  function EncryptionManager(bcryptManager) {
    (0, _classCallCheck2["default"])(this, EncryptionManager);
    this.bcryptManager = bcryptManager;
  }

  (0, _createClass2["default"])(EncryptionManager, [{
    key: "hash",
    value: function hash(plaintextpassword) {
      return this.bcryptManager.hash(plaintextpassword);
    }
  }, {
    key: "compare",
    value: function compare(plaintextpassword, hash) {
      return this.bcryptManager.compare(plaintextpassword, hash);
    }
  }]);
  return EncryptionManager;
}();

var _default = EncryptionManager;
exports["default"] = _default;