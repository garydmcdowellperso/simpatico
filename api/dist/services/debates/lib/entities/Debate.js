"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Debate = function Debate() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var slug = arguments.length > 2 ? arguments[2] : undefined;
  var debateType = arguments.length > 3 ? arguments[3] : undefined;
  var languages = arguments.length > 4 ? arguments[4] : undefined;
  var header = arguments.length > 5 ? arguments[5] : undefined;
  var overview = arguments.length > 6 ? arguments[6] : undefined;
  var themes = arguments.length > 7 ? arguments[7] : undefined;
  var connection = arguments.length > 8 ? arguments[8] : undefined;
  var footer = arguments.length > 9 ? arguments[9] : undefined;
  var metaTags = arguments.length > 10 ? arguments[10] : undefined;
  var deleted = arguments.length > 11 ? arguments[11] : undefined;
  var accountId = arguments.length > 12 ? arguments[12] : undefined;
  (0, _classCallCheck2["default"])(this, Debate);
  this.id = id;
  this.name = name;
  this.slug = slug;
  this.debateType = debateType;
  this.languages = languages;
  this.header = header;
  this.overview = overview;
  this.themes = themes;
  this.footer = footer;
  this.metaTags = metaTags;
  this.connection = connection;
  this.deleted = deleted;
  this.accountId = accountId;
  this.trackingId = trackingId;
};

var _default = Debate;
exports["default"] = _default;