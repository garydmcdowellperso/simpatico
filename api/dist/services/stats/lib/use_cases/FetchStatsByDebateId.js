"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchStatsByDebateId(debateId, _ref) {
  var statsRepository = _ref.statsRepository;

  if (!debateId) {
    throw new Error("No debate id");
  }

  return statsRepository.getByDebateId(debateId);
}

var _default = FetchStatsByDebateId;
exports["default"] = _default;