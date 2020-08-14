"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Module = function Module() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var moduleType = arguments.length > 1 ? arguments[1] : undefined;
  var debateId = arguments.length > 2 ? arguments[2] : undefined;
  var title = arguments.length > 3 ? arguments[3] : undefined;
  var help = arguments.length > 4 ? arguments[4] : undefined;
  var inuse = arguments.length > 5 ? arguments[5] : undefined;
  var posts = arguments.length > 6 ? arguments[6] : undefined;
  var contributions = arguments.length > 7 ? arguments[7] : undefined;
  var participants = arguments.length > 8 ? arguments[8] : undefined;
  var deleted = arguments.length > 9 ? arguments[9] : undefined;
  var name = arguments.length > 10 ? arguments[10] : undefined;
  (0, _classCallCheck2["default"])(this, Module);
  this.id = id;
  this.moduleType = moduleType;
  this.debateId = debateId;
  this.title = title;
  this.help = help;
  this.inuse = inuse;
  this.posts = posts;
  this.contributions = contributions;
  this.participants = participants;
  this.deleted = deleted;
  this.name = name;
};

var _default = Module;
exports["default"] = _default;