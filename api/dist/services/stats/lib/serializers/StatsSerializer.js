"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _serializeSingleStat = function _serializeSingleStat(stat) {
  return {
    id: stat.id,
    accountId: stat.accountId,
    debateId: stat.debateId,
    posts: stat.posts,
    pageviews: stat.pageviews,
    reactions: stat.reactions,
    signups: stat.signups,
    shares: stat.shares,
    timestamp: stat.timestamp,
    deleted: stat.deleted
  };
};

var StatsSerializer =
/*#__PURE__*/
function () {
  function StatsSerializer() {
    (0, _classCallCheck2["default"])(this, StatsSerializer);
  }

  (0, _createClass2["default"])(StatsSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSingleStat);
      }

      return _serializeSingleStat(data);
    }
  }]);
  return StatsSerializer;
}();

var _default = StatsSerializer;
exports["default"] = _default;