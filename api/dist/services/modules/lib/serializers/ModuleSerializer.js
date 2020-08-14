"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _serializeSingleModule = function _serializeSingleModule(module) {
  return {
    id: module.id,
    debateId: module.debateId,
    moduleType: module.moduleType,
    title: module.title,
    help: module.help,
    inuse: module.inuse,
    posts: module.posts,
    contributions: module.contributions,
    participants: module.participants,
    deleted: module.deleted,
    name: module.name
  };
};

var ModuleSerializer =
/*#__PURE__*/
function () {
  function ModuleSerializer() {
    (0, _classCallCheck2["default"])(this, ModuleSerializer);
  }

  (0, _createClass2["default"])(ModuleSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSingleModule);
      }

      return _serializeSingleModule(data);
    }
  }]);
  return ModuleSerializer;
}();

var _default = ModuleSerializer;
exports["default"] = _default;