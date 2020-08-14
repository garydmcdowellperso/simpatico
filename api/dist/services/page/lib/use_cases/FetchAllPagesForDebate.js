"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function fetchAllPagesForDebate(debateId, _ref) {
  var pageRepository = _ref.pageRepository;
  return pageRepository.findByDebateId(debateId);
}

var _default = fetchAllPagesForDebate;
exports["default"] = _default;