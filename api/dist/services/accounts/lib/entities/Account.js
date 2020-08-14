"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Account = function Account() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var deleted = arguments.length > 2 ? arguments[2] : undefined;
  (0, _classCallCheck2["default"])(this, Account);
  this.id = id;
  this.name = name;
  this.deleted = deleted;
};

var _default = Account;
exports["default"] = _default;