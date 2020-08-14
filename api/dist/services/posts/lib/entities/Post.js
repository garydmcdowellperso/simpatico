"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Post = function Post() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var title = arguments.length > 1 ? arguments[1] : undefined;
  var contents = arguments.length > 2 ? arguments[2] : undefined;
  var user = arguments.length > 3 ? arguments[3] : undefined;
  var timestamp = arguments.length > 4 ? arguments[4] : undefined;
  var module = arguments.length > 5 ? arguments[5] : undefined;
  var accountId = arguments.length > 6 ? arguments[6] : undefined;
  var likes = arguments.length > 7 ? arguments[7] : undefined;
  var dislikes = arguments.length > 8 ? arguments[8] : undefined;
  var shares = arguments.length > 9 ? arguments[9] : undefined;
  var replies = arguments.length > 10 ? arguments[10] : undefined;
  var deleted = arguments.length > 11 ? arguments[11] : undefined;
  (0, _classCallCheck2["default"])(this, Post);
  this.id = id;
  this.title = title;
  this.contents = contents;
  this.user = user;
  this.timestamp = timestamp;
  this.module = module;
  this.accountId = accountId;
  this.likes = likes;
  this.dislikes = dislikes;
  this.shares = shares;
  this.replies = replies;
  this.deleted = deleted;
};

var _default = Post;
exports["default"] = _default;