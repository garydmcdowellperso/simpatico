"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Module = _interopRequireDefault(require("../entities/Module"));

async function UpdateModule(id, moduleType, debateId, title, help, posts, contributions, participants, inuse, deleted, name, _ref) {
  var moduleRepository = _ref.moduleRepository;

  if (!id) {
    throw new Error("No id");
  }

  if (!moduleType) {
    throw new Error("No moduleType");
  }

  if (!debateId) {
    throw new Error("No debateId");
  }

  if (!title) {
    throw new Error("No title");
  }

  if (!help) {
    throw new Error("No help");
  }

  if (!name) {
    throw new Error("No name");
  }

  var module = new _Module["default"](id, moduleType, debateId, title, help, inuse, posts, contributions, participants, deleted, name);
  return moduleRepository.merge(module);
}

var _default = UpdateModule;
exports["default"] = _default;