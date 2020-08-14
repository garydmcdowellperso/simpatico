"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchAllDebates(id, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!id) {
    throw new Error("No id");
  }

  return debateRepository.getByAccountId(id);
}

var _default = FetchAllDebates;
exports["default"] = _default;