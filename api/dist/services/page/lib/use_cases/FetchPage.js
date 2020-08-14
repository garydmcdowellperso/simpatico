"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchPage(id, _ref) {
  var pageRepository = _ref.pageRepository;

  if (!id) {
    throw new Error("No id");
  }

  return pageRepository.get(id);
}

var _default = FetchPage;
exports["default"] = _default;