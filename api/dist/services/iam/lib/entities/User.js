"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var User = function User() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var debates = arguments.length > 1 ? arguments[1] : undefined;
  var accountId = arguments.length > 2 ? arguments[2] : undefined;
  var firstName = arguments.length > 3 ? arguments[3] : undefined;
  var lastName = arguments.length > 4 ? arguments[4] : undefined;
  var email = arguments.length > 5 ? arguments[5] : undefined;
  var password = arguments.length > 6 ? arguments[6] : undefined;
  var activated = arguments.length > 7 ? arguments[7] : undefined;
  var token = arguments.length > 8 ? arguments[8] : undefined;
  var role = arguments.length > 9 ? arguments[9] : undefined;
  var bio = arguments.length > 10 ? arguments[10] : undefined;
  var score = arguments.length > 11 ? arguments[11] : undefined;
  var avatar = arguments.length > 12 ? arguments[12] : undefined;
  var badge = arguments.length > 13 ? arguments[13] : undefined;
  var likes = arguments.length > 14 ? arguments[14] : undefined;
  var dislikes = arguments.length > 15 ? arguments[15] : undefined;
  var contributions = arguments.length > 16 ? arguments[16] : undefined;
  (0, _classCallCheck2["default"])(this, User);
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.activated = activated;
  this.token = token;
  this.role = role;
  this.bio = bio;
  this.score = score;
  this.avatar = avatar;
  this.badge = badge;
  this.likes = likes;
  this.dislikes = dislikes;
  this.contributions = contributions;
  this.debates = debates;
  this.accountId = accountId;
};

var _default = User;
exports["default"] = _default;