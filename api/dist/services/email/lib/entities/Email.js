"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Email = function Email() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var template = arguments.length > 1 ? arguments[1] : undefined;
  var email = arguments.length > 2 ? arguments[2] : undefined;
  var substitutions = arguments.length > 3 ? arguments[3] : undefined;
  var attachment = arguments.length > 4 ? arguments[4] : undefined;
  (0, _classCallCheck2["default"])(this, Email);
  this.id = id;
  this.template = template;
  this.email = email;
  this.substitutions = substitutions;
  this.attachment = attachment;
};

var _default = Email;
exports["default"] = _default;