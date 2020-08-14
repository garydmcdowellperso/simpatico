"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../../../config"));

async function FetchVisitors(id, debateId, trackingId, _ref) {
  var httpRequester = _ref.httpRequester;

  if (!id) {
    throw new Error("No id");
  }

  if (!debateId) {
    throw new Error("No debateId");
  }

  if (!trackingId) {
    throw new Error("No trackingId");
  } // Call matomo for the visitors


  return httpRequester.get("http://".concat(_config["default"].matomo.server, "/index.php?module=API&method=VisitsSummary.get&idSite=").concat(trackingId, "&period=day&date=today&format=JSON&token_auth=").concat(_config["default"].matomo.token));
}

var _default = FetchVisitors;
exports["default"] = _default;