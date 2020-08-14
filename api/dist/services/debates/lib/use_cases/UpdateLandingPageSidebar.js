"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function UpdateLandingPageSidebar(debateID, sidebar, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!debateID) {
    throw new Error("No debateID");
  }

  if (!sidebar) {
    throw new Error("No sidebar");
  }

  var debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.sidebar = sidebar;
  await debateRepository.merge(debate);
  return debate;
}

var _default = UpdateLandingPageSidebar;
exports["default"] = _default;