"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function CreateDebate(name, slug, debateType, languages, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!name) {
    throw new Error("No name");
  }

  if (!slug) {
    throw new Error("No slug");
  }

  if (!debateType) {
    throw new Error("No debateType");
  }

  if (!languages) {
    throw new Error("No languages");
  }

  var debate = new _Debate["default"](null, name, slug, debateType, languages, false);
  return debateRepository.persist(debate);
}

var _default = CreateDebate;
exports["default"] = _default;