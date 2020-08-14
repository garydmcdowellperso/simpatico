"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchModule(id, _ref) {
  var moduleRepository = _ref.moduleRepository;

  if (!id) {
    throw new Error("No id");
  }

  return moduleRepository.get(id);
}

var _default = FetchModule;
exports["default"] = _default;