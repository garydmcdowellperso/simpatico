"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function fetchAllPages(_ref) {
  var pageRepository = _ref.pageRepository;
  return pageRepository.find();
}

var _default = fetchAllPages;
exports["default"] = _default;