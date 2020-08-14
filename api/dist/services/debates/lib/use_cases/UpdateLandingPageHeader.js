"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function UpdateLandingPageHeader(debateID, header, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!debateID) {
    throw new Error("No debateID");
  }

  if (!header) {
    throw new Error("No header");
  }

  var debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.header = header;
  await debateRepository.merge(debate);
  return debate;
}

var _default = UpdateLandingPageHeader;
exports["default"] = _default;