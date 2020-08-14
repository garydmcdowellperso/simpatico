"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Stats = function Stats() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var accountId = arguments.length > 1 ? arguments[1] : undefined;
  var debateId = arguments.length > 2 ? arguments[2] : undefined;
  var posts = arguments.length > 3 ? arguments[3] : undefined;
  var pageviews = arguments.length > 4 ? arguments[4] : undefined;
  var reactions = arguments.length > 5 ? arguments[5] : undefined;
  var signups = arguments.length > 6 ? arguments[6] : undefined;
  var shares = arguments.length > 7 ? arguments[7] : undefined;
  var timestamp = arguments.length > 8 ? arguments[8] : undefined;
  var deleted = arguments.length > 9 ? arguments[9] : undefined;
  (0, _classCallCheck2["default"])(this, Stats);
  this.id = id;
  this.accountId = accountId;
  this.debateId = debateId;
  this.posts = posts;
  this.pageviews = pageviews;
  this.reactions = reactions;
  this.signups = signups;
  this.shares = shares;
  this.timestamp = timestamp;
  this.deleted = deleted;
};

var _default = Stats;
exports["default"] = _default;