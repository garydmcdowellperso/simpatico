"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function UpdateLandingPageOverview(debateID, overview, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!debateID) {
    throw new Error("No debateID");
  }

  if (!overview) {
    throw new Error("No overview");
  }

  var debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.overview = overview;
  await debateRepository.merge(debate);
  return debate;
}

var _default = UpdateLandingPageOverview;
exports["default"] = _default;