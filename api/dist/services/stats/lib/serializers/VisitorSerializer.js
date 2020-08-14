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
    nb_uniq_visitors: stat.nb_uniq_visitors,
    nb_users: stat.nb_users,
    nb_visits: stat.nb_visits,
    nb_actions: stat.nb_actions,
    nb_visits_converted: stat.nb_visits_converted,
    bounce_count: stat.bounce_count,
    sum_visit_length: stat.sum_visit_length,
    bounce_rate: stat.bounce_rate,
    nb_actions_per_visit: stat.nb_actions_per_visit,
    avg_time_on_site: stat.avg_time_on_site,
    max_actions: stat.max_actions
  };
};

var VisitorSerializer =
/*#__PURE__*/
function () {
  function VisitorSerializer() {
    (0, _classCallCheck2["default"])(this, VisitorSerializer);
  }

  (0, _createClass2["default"])(VisitorSerializer, [{
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
  return VisitorSerializer;
}();

var _default = VisitorSerializer;
exports["default"] = _default;