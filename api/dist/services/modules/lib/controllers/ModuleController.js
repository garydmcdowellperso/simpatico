"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ModuleSerializer = _interopRequireDefault(require("../serializers/ModuleSerializer"));

var _CreateModule = _interopRequireDefault(require("../use_cases/CreateModule"));

var _FetchModule = _interopRequireDefault(require("../use_cases/FetchModule"));

var _FetchAllModules = _interopRequireDefault(require("../use_cases/FetchAllModules"));

var _FetchAllModulesForDebate = _interopRequireDefault(require("../use_cases/FetchAllModulesForDebate"));

var _UpdateModule = _interopRequireDefault(require("../use_cases/UpdateModule"));

var _ModuleRepository = _interopRequireDefault(require("../repositories/ModuleRepository"));

var _ModuleRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/ModuleRepositoryMongo"));

var moduleRepository = new _ModuleRepository["default"](new _ModuleRepositoryMongo["default"]());

async function fetchAllModules() {
  // Treatment
  var response = await (0, _FetchAllModules["default"])({
    moduleRepository: moduleRepository
  });
  var modulesSerializer = new _ModuleSerializer["default"]();
  return modulesSerializer.serialize(response);
}

async function fetchAllModulesForDebate(inputs) {
  var debateId = inputs.debateId; // Treatment

  var response = await (0, _FetchAllModulesForDebate["default"])(debateId, {
    moduleRepository: moduleRepository
  });
  var modulesSerializer = new _ModuleSerializer["default"]();
  return modulesSerializer.serialize(response);
}

async function fetchModule(inputs) {
  var id = inputs.id; // Treatment

  var response = await (0, _FetchModule["default"])(id, {
    moduleRepository: moduleRepository
  });
  var modulesSerializer = new _ModuleSerializer["default"]();
  return modulesSerializer.serialize(response);
}

async function createModule(inputs) {
  // Inputs
  var moduleType = inputs.moduleType,
      title = inputs.title,
      debateId = inputs.debateId,
      help = inputs.help,
      posts = inputs.posts,
      contributons = inputs.contributons,
      participants = inputs.participants,
      inuse = inputs.inuse,
      deleted = inputs.deleted; // Treatment

  var response = await (0, _CreateModule["default"])(moduleType, title, debateId, help, false, 0, 0, 0, false, {
    moduleRepository: moduleRepository
  });
  var modulesSerializer = new _ModuleSerializer["default"]();
  return modulesSerializer.serialize(response);
}

async function updateModule(inputs) {
  // Inputs
  var id = inputs.id,
      moduleType = inputs.moduleType,
      title = inputs.title,
      help = inputs.help,
      debateId = inputs.debateId,
      posts = inputs.posts,
      contributions = inputs.contributions,
      participants = inputs.participants,
      inuse = inputs.inuse,
      deleted = inputs.deleted,
      name = inputs.name; // Treatment

  var response = await (0, _UpdateModule["default"])(id, moduleType, debateId, title, help, posts, contributions, participants, inuse, deleted, name, {
    moduleRepository: moduleRepository
  });
  var modulesSerializer = new _ModuleSerializer["default"]();
  return modulesSerializer.serialize(response);
}

module.exports = {
  fetchAllModules: fetchAllModules,
  fetchAllModulesForDebate: fetchAllModulesForDebate,
  createModule: createModule,
  fetchModule: fetchModule,
  updateModule: updateModule
};