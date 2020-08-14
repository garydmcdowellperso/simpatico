"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function fetchAllModulesForDebate(debateId, _ref) {
  var moduleRepository = _ref.moduleRepository;
  return moduleRepository.findByDebateId(debateId);
}

var _default = fetchAllModulesForDebate;
exports["default"] = _default;