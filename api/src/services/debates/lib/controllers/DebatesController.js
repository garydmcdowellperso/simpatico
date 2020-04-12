import DebateSerializer from "../serializers/DebateSerializer";
import CreateDebate from "../use_cases/CreateDebate";
import FetchDebate from "../use_cases/FetchDebate";
import DebateRepository from "../repositories/DebateRepository";

import DebateRepositoryMongo from "../interface_adapters/storage/DebateRepositoryMongo";

const debateRepository = new DebateRepository(new DebateRepositoryMongo());

async function createDebate(inputs) {
  // Inputs
  const { name, slug, debateType, languages } = inputs;

  // Treatment
  const response = await CreateDebate(name, slug, debateType, languages, {
    debateRepository
  });

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function fetchDebate(inputs) {
  // Inputs
  const { name } = inputs;

  // Treatment
  const response = await FetchDebate(name, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

module.exports = {
  createDebate,
  fetchDebate
};
