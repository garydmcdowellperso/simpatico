import DebateSerializer from "../serializers/DebateSerializer";
import CreateDebate from "../use_cases/CreateDebate";
import FetchDebate from "../use_cases/FetchDebate";
import FetchAllDebates from "../use_cases/FetchAllDebates";
import UpdateLandingPageHeader from "../use_cases/UpdateLandingPageHeader";
import UpdateLandingPageOverview from "../use_cases/UpdateLandingPageOverview";
import UpdateLandingPageThemes from "../use_cases/UpdateLandingPageThemes";
import UpdateConnection from "../use_cases/UpdateConnection";
import UpdateGeneralInfo from "../use_cases/UpdateGeneralInfo";

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

async function fetchAllDebates() {
  // Treatment
  const response = await FetchAllDebates({
    debateRepository
  });

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateLandingPageHeader(inputs) {
  // Inputs
  const { debateID, header } = inputs;

  // Treatment
  const response = await UpdateLandingPageHeader(debateID, header, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateLandingPageOverview(inputs) {
  // Inputs
  const { debateID, overview } = inputs;

  // Treatment
  const response = await UpdateLandingPageOverview(debateID, overview, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateLandingPageThemes(inputs) {
  // Inputs
  const { debateID, themes } = inputs;

  // Treatment
  const response = await UpdateLandingPageThemes(debateID, themes, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateConnection(inputs) {
  // Inputs
  const { debateID, connection } = inputs;

  // Treatment
  const response = await UpdateConnection(debateID, connection, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateGeneralInfo(inputs) {
  // Inputs
  const { debateID, info } = inputs;

  // Treatment
  const response = await UpdateGeneralInfo(debateID, info, {
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
  fetchDebate,
  fetchAllDebates,
  updateLandingPageHeader,
  updateLandingPageOverview,
  updateLandingPageThemes,
  updateConnection,
  updateGeneralInfo
};
