"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _serializeSingleDebate = function _serializeSingleDebate(debate) {
  return {
    id: debate.id,
    name: debate.name,
    slug: debate.slug,
    debateType: debate.debateType,
    languages: debate.languages,
    header: debate.header,
    overview: debate.overview,
    themes: debate.themes,
    sidebar: debate.sidebar,
    footer: debate.footer,
    metaTags: debate.metaTags,
    connection: debate.connection,
    deleted: debate.deleted,
    accountId: debate.accountId,
    trackingId: debate.trackingId
  };
};

var DebateSerializer =
/*#__PURE__*/
function () {
  function DebateSerializer() {
    (0, _classCallCheck2["default"])(this, DebateSerializer);
  }

  (0, _createClass2["default"])(DebateSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSingleDebate);
      }

      return _serializeSingleDebate(data);
    }
  }]);
  return DebateSerializer;
}();

var _default = DebateSerializer;
exports["default"] = _default;