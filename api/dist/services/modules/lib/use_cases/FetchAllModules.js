"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function fetchAllModules(_ref) {
  var moduleRepository = _ref.moduleRepository;
  return moduleRepository.find();
}

var _default = fetchAllModules;
exports["default"] = _default;