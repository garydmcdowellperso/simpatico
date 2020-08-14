"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../../../config"));

async function FetchDevices(id, debateId, trackingId, _ref) {
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


  return httpRequester.get("http://".concat(_config["default"].matomo.server, "/index.php?module=API&method=DevicesDetection.getType&idSite=1&period=week&date=today&format=JSON&token_auth=").concat(_config["default"].matomo.token));
}

var _default = FetchDevices;
exports["default"] = _default;