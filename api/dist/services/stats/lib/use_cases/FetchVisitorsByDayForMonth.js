"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../../../config"));

async function FetchVisitorsByDayForMonth(id, debateId, trackingId, month, _ref) {
  var httpRequester = _ref.httpRequester;

  if (!id) {
    throw new Error("No id");
  }

  if (!debateId) {
    throw new Error("No debateId");
  }

  if (!trackingId) {
    throw new Error("No trackingId");
  }

  if (!month) {
    throw new Error("No month");
  } // Call matomo for the visitors


  return httpRequester.get("http://".concat(_config["default"].matomo.server, "/index.php?date=2020-07-01,2020-07-31&expanded=1&filter_limit=300&format=json&format_metrics=1&idSite=1&method=API.get&module=API&period=day&token_auth=").concat(_config["default"].matomo.token));
}

var _default = FetchVisitorsByDayForMonth;
exports["default"] = _default;