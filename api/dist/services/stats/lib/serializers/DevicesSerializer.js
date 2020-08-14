"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _serializeSingleStat = function _serializeSingleStat(stat) {
  return {
    label: stat.label,
    nb_uniq_visitors: stat.nb_uniq_visitors,
    nb_visits: stat.nb_visits,
    nb_actions: stat.nb_actions,
    nb_users: stat.nb_users,
    max_actions: stat.max_actions,
    sum_visit_length: stat.sum_visit_length,
    bounce_count: stat.bounce_count,
    nb_visits_converted: stat.nb_visits_converted,
    segment: stat.segment
  };
};

var DevicesSerializer =
/*#__PURE__*/
function () {
  function DevicesSerializer() {
    (0, _classCallCheck2["default"])(this, DevicesSerializer);
  }

  (0, _createClass2["default"])(DevicesSerializer, [{
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
  return DevicesSerializer;
}();

var _default = DevicesSerializer;
exports["default"] = _default;