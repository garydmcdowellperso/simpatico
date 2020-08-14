"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchDebate(name, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!name) {
    throw new Error("No name");
  }

  return debateRepository.getByName(name);
}

var _default = FetchDebate;
exports["default"] = _default;