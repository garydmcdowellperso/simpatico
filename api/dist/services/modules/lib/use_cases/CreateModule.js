"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Module = _interopRequireDefault(require("../entities/Module"));

async function CreateModule(moduleType, title, debateId, help, inuse, posts, contributions, participants, deleted, name, _ref) {
  var moduleRepository = _ref.moduleRepository;

  if (!moduleType) {
    throw new Error("No moduleType");
  }

  if (!title) {
    throw new Error("No title");
  }

  if (!debateId) {
    throw new Error("No debateId");
  }

  if (!help) {
    throw new Error("No help");
  }

  if (!name) {
    throw new Error("No name");
  }

  var module = new _Module["default"](null, moduleType, debateId, title, help, inuse, posts, contributions, participants, deleted, name);
  return moduleRepository.persist(module);
}

var _default = CreateModule;
exports["default"] = _default;