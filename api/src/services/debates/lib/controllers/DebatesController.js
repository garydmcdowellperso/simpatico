import DebateSerializer from "../serializers/DebateSerializer";
import CreateDebate from "../use_cases/CreateDebate";
import DeleteDebate from "../use_cases/DeleteDebate";
import FetchDebate from "../use_cases/FetchDebate";
import FetchAllDebates from "../use_cases/FetchAllDebates";
import UpdateLandingPageHeader from "../use_cases/UpdateLandingPageHeader";
import UpdateLandingPageOverview from "../use_cases/UpdateLandingPageOverview";
import UpdateLandingPageThemes from "../use_cases/UpdateLandingPageThemes";
import UpdateLandingPageSidebar from "../use_cases/UpdateLandingPageSidebar";
import UpdateLandingPageFooter from "../use_cases/UpdateLandingPageFooter";
import UpdateLandingPageMetaTags from "../use_cases/UpdateLandingPageMetaTags";
import UpdateConnection from "../use_cases/UpdateConnection";
import UpdateGeneralInfo from "../use_cases/UpdateGeneralInfo";

import DebateRepository from "../repositories/DebateRepository";

import DebateRepositoryMongo from "../interface_adapters/storage/DebateRepositoryMongo";

const debateRepository = new DebateRepository(new DebateRepositoryMongo());

async function createDebate(inputs) {
  // Inputs
  const { name, url, debateType, languages, accountId, header, overview, connection, footer, sidebar, trackingId} = inputs;

  // Treatment
  const response = await CreateDebate(name, url, debateType, languages, accountId, header, overview, connection, footer, trackingId, sidebar, {
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

async function deleteDebate(inputs) {
  // Inputs
  const { debateId, accountId } = inputs;

  // Treatment
  const response = await DeleteDebate(debateId, accountId, {
    debateRepository
  });

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function fetchAllDebates(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await FetchAllDebates(id, {
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

async function updateLandingPageSidebar(inputs) {
  // Inputs
  const { debateID, sidebar } = inputs;

  // Treatment
  const response = await UpdateLandingPageSidebar(debateID, sidebar, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateLandingPageFooter(inputs) {
  // Inputs
  const { debateID, footer } = inputs;

  // Treatment
  const response = await UpdateLandingPageFooter(debateID, footer, {
    debateRepository
  });

  if (!response) {
    return {};
  }

  const debateSerializer = new DebateSerializer();
  return debateSerializer.serialize(response);
}

async function updateLandingPageMetaTags(inputs) {
  // Inputs
  const { debateID, metaTags } = inputs;

  // Treatment
  const response = await UpdateLandingPageMetaTags(debateID, metaTags, {
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
  deleteDebate,
  fetchDebate,
  fetchAllDebates,
  updateLandingPageHeader,
  updateLandingPageOverview,
  updateLandingPageThemes,
  updateLandingPageSidebar,
  updateLandingPageFooter,
  updateLandingPageMetaTags,
  updateConnection,
  updateGeneralInfo
};
