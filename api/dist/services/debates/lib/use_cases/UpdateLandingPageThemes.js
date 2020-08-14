"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function UpdateLandingPageThemes(debateID, themes, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!debateID) {
    throw new Error("No debateID");
  }

  if (!themes) {
    throw new Error("No themes");
  }

  var debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.themes = themes;
  await debateRepository.merge(debate);
  return debate;
}

var _default = UpdateLandingPageThemes;
exports["default"] = _default;