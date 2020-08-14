import ModuleSerializer from "../serializers/ModuleSerializer";
import CreateModule from "../use_cases/CreateModule";
import FetchModule from "../use_cases/FetchModule";
import FetchAllModules from "../use_cases/FetchAllModules";
import FetchAllModulesForDebate from "../use_cases/FetchAllModulesForDebate";
import UpdateModule from "../use_cases/UpdateModule";
import ModuleRepository from "../repositories/ModuleRepository";

import ModuleRepositoryMongo from "../interface_adapters/storage/ModuleRepositoryMongo";

const moduleRepository = new ModuleRepository(new ModuleRepositoryMongo());

async function fetchAllModules() {
  // Treatment
  const response = await FetchAllModules({
    moduleRepository
  });

  const modulesSerializer = new ModuleSerializer();
  return modulesSerializer.serialize(response);
}

async function fetchAllModulesForDebate(inputs) {
  const { debateId } = inputs

  // Treatment
  const response = await FetchAllModulesForDebate(debateId, {
    moduleRepository
  });

  const modulesSerializer = new ModuleSerializer();
  return modulesSerializer.serialize(response);
}

async function fetchModule(inputs) {
  const { id } = inputs

  // Treatment
  const response = await FetchModule(id, {
    moduleRepository
  });

  const modulesSerializer = new ModuleSerializer();
  return modulesSerializer.serialize(response);
}

async function createModule(inputs) {
  // Inputs
  const { moduleType, title, debateId, help, posts, contributons, participants, inuse, deleted, name } = inputs;

  // Treatment
  const response = await CreateModule(moduleType, title, debateId, help, inuse, posts, contributons, participants, deleted, name, {
    moduleRepository
  });

  const modulesSerializer = new ModuleSerializer();
  return modulesSerializer.serialize(response);
}

async function updateModule(inputs) {
  // Inputs
  const { id, moduleType, title, help, debateId, posts, contributions, participants, inuse, deleted, name } = inputs;

  // Treatment
  const response = await UpdateModule(id, moduleType, debateId, title, help, posts, contributions, participants, inuse, deleted, name, {
    moduleRepository
  });

  const modulesSerializer = new ModuleSerializer();
  return modulesSerializer.serialize(response);
}

module.exports = {
  fetchAllModules,
  fetchAllModulesForDebate,
  createModule,
  fetchModule,
  updateModule
};
