"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function UpdateGeneralInfo(debateID, info, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!debateID) {
    throw new Error("No debateID");
  }

  if (!info) {
    throw new Error("No info");
  }

  var debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.name = info.name;
  debate.slug = info.slug;
  debate.debateType = info.debateType;
  await debateRepository.merge(debate);
  return debate;
}

var _default = UpdateGeneralInfo;
exports["default"] = _default;