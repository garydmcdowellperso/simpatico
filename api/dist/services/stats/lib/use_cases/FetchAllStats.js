"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchAllStats(id, _ref) {
  var statsRepository = _ref.statsRepository;

  if (!id) {
    throw new Error("No id");
  }

  return statsRepository.getByAccountId(id);
}

var _default = FetchAllStats;
exports["default"] = _default;