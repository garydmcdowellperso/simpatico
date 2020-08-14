"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TransportManager =
/*#__PURE__*/
function () {
  function TransportManager(transportManager) {
    (0, _classCallCheck2["default"])(this, TransportManager);
    this.transportManager = transportManager;
  }

  (0, _createClass2["default"])(TransportManager, [{
    key: "sendMail",
    value: function sendMail(option) {
      return this.transportManager.sendMail(option);
    }
  }]);
  return TransportManager;
}();

var _default = TransportManager;
exports["default"] = _default;