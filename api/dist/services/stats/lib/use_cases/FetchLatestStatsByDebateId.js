"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchLatestStatsByDebateId(debateId, _ref) {
  var statsRepository = _ref.statsRepository;

  if (!debateId) {
    throw new Error("No debate id");
  }

  return statsRepository.getLatestByDebateId(debateId);
}

var _default = FetchLatestStatsByDebateId;
exports["default"] = _default;