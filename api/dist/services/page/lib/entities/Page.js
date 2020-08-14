"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Page = function Page() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var debateId = arguments.length > 2 ? arguments[2] : undefined;
  var type = arguments.length > 3 ? arguments[3] : undefined;
  var url = arguments.length > 4 ? arguments[4] : undefined;
  var languages = arguments.length > 5 ? arguments[5] : undefined;
  var inuse = arguments.length > 6 ? arguments[6] : undefined;
  var deleted = arguments.length > 7 ? arguments[7] : undefined;
  (0, _classCallCheck2["default"])(this, Page);
  this.id = id;
  this.name = name;
  this.debateId = debateId;
  this.type = type;
  this.url = url;
  this.inuse = inuse;
  this.languages = languages;
  this.deleted = deleted;
};

var _default = Page;
exports["default"] = _default;