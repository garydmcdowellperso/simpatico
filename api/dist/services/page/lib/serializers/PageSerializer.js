"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _serializeSinglePage = function _serializeSinglePage(page) {
  return {
    id: page.id,
    debateId: page.debateId,
    name: page.name,
    type: page.type,
    url: page.url,
    languages: page.languages,
    inuse: page.inuse,
    deleted: page.deleted
  };
};

var PageSerializer =
/*#__PURE__*/
function () {
  function PageSerializer() {
    (0, _classCallCheck2["default"])(this, PageSerializer);
  }

  (0, _createClass2["default"])(PageSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSinglePage);
      }

      return _serializeSinglePage(data);
    }
  }]);
  return PageSerializer;
}();

var _default = PageSerializer;
exports["default"] = _default;