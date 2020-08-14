"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var NodeMailerManager =
/*#__PURE__*/
function () {
  function NodeMailerManager() {
    (0, _classCallCheck2["default"])(this, NodeMailerManager);
  }

  (0, _createClass2["default"])(NodeMailerManager, [{
    key: "sendMail",
    value: function sendMail(options) {
      var transporter = _nodemailer["default"].createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: 'XXXX'
        }
      });

      return transporter.sendMail(options);
    }
  }]);
  return NodeMailerManager;
}();

var _default = NodeMailerManager;
exports["default"] = _default;