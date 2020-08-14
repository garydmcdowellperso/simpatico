"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _DebateSerializer = _interopRequireDefault(require("../serializers/DebateSerializer"));

var _CreateDebate = _interopRequireDefault(require("../use_cases/CreateDebate"));

var _FetchDebate = _interopRequireDefault(require("../use_cases/FetchDebate"));

var _FetchAllDebates = _interopRequireDefault(require("../use_cases/FetchAllDebates"));

var _UpdateLandingPageHeader = _interopRequireDefault(require("../use_cases/UpdateLandingPageHeader"));

var _UpdateLandingPageOverview = _interopRequireDefault(require("../use_cases/UpdateLandingPageOverview"));

var _UpdateLandingPageThemes = _interopRequireDefault(require("../use_cases/UpdateLandingPageThemes"));

var _UpdateLandingPageSidebar = _interopRequireDefault(require("../use_cases/UpdateLandingPageSidebar"));

var _UpdateLandingPageFooter = _interopRequireDefault(require("../use_cases/UpdateLandingPageFooter"));

var _UpdateLandingPageMetaTags = _interopRequireDefault(require("../use_cases/UpdateLandingPageMetaTags"));

var _UpdateConnection = _interopRequireDefault(require("../use_cases/UpdateConnection"));

var _UpdateGeneralInfo = _interopRequireDefault(require("../use_cases/UpdateGeneralInfo"));

var _DebateRepository = _interopRequireDefault(require("../repositories/DebateRepository"));

var _DebateRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/DebateRepositoryMongo"));

var debateRepository = new _DebateRepository["default"](new _DebateRepositoryMongo["default"]());

async function createDebate(inputs) {
  // Inputs
  var name = inputs.name,
      slug = inputs.slug,
      debateType = inputs.debateType,
      languages = inputs.languages; // Treatment

  var response = await (0, _CreateDebate["default"])(name, slug, debateType, languages, {
    debateRepository: debateRepository
  });
  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function fetchDebate(inputs) {
  // Inputs
  var name = inputs.name; // Treatment

  var response = await (0, _FetchDebate["default"])(name, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function fetchAllDebates(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _FetchAllDebates["default"])(id, {
    debateRepository: debateRepository
  });
  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateLandingPageHeader(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      header = inputs.header; // Treatment

  var response = await (0, _UpdateLandingPageHeader["default"])(debateID, header, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateLandingPageOverview(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      overview = inputs.overview; // Treatment

  var response = await (0, _UpdateLandingPageOverview["default"])(debateID, overview, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateLandingPageThemes(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      themes = inputs.themes; // Treatment

  var response = await (0, _UpdateLandingPageThemes["default"])(debateID, themes, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateLandingPageSidebar(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      sidebar = inputs.sidebar; // Treatment

  var response = await (0, _UpdateLandingPageSidebar["default"])(debateID, sidebar, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateLandingPageFooter(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      footer = inputs.footer; // Treatment

  var response = await (0, _UpdateLandingPageFooter["default"])(debateID, footer, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateLandingPageMetaTags(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      metaTags = inputs.metaTags; // Treatment

  var response = await (0, _UpdateLandingPageMetaTags["default"])(debateID, metaTags, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateConnection(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      connection = inputs.connection; // Treatment

  var response = await (0, _UpdateConnection["default"])(debateID, connection, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

async function updateGeneralInfo(inputs) {
  // Inputs
  var debateID = inputs.debateID,
      info = inputs.info; // Treatment

  var response = await (0, _UpdateGeneralInfo["default"])(debateID, info, {
    debateRepository: debateRepository
  });

  if (!response) {
    return {};
  }

  var debateSerializer = new _DebateSerializer["default"]();
  return debateSerializer.serialize(response);
}

module.exports = {
  createDebate: createDebate,
  fetchDebate: fetchDebate,
  fetchAllDebates: fetchAllDebates,
  updateLandingPageHeader: updateLandingPageHeader,
  updateLandingPageOverview: updateLandingPageOverview,
  updateLandingPageThemes: updateLandingPageThemes,
  updateLandingPageSidebar: updateLandingPageSidebar,
  updateLandingPageFooter: updateLandingPageFooter,
  updateLandingPageMetaTags: updateLandingPageMetaTags,
  updateConnection: updateConnection,
  updateGeneralInfo: updateGeneralInfo
};