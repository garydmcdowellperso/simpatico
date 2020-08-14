"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _PageSerializer = _interopRequireDefault(require("../serializers/PageSerializer"));

var _CreatePage = _interopRequireDefault(require("../use_cases/CreatePage"));

var _FetchPage = _interopRequireDefault(require("../use_cases/FetchPage"));

var _FetchAllPages = _interopRequireDefault(require("../use_cases/FetchAllPages"));

var _FetchAllPagesForDebate = _interopRequireDefault(require("../use_cases/FetchAllPagesForDebate"));

var _UpdatePage = _interopRequireDefault(require("../use_cases/UpdatePage"));

var _PageRepository = _interopRequireDefault(require("../repositories/PageRepository"));

var _PageRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/PageRepositoryMongo"));

var pageRepository = new _PageRepository["default"](new _PageRepositoryMongo["default"]());

async function fetchAllPages() {
  // Treatment
  var response = await (0, _FetchAllPages["default"])({
    pageRepository: pageRepository
  });
  var pagesSerializer = new _PageSerializer["default"]();
  return pagesSerializer.serialize(response);
}

async function fetchAllPagesForDebate(inputs) {
  var debateId = inputs.debateId; // Treatment

  var response = await (0, _FetchAllPagesForDebate["default"])(debateId, {
    pageRepository: pageRepository
  });
  var pagesSerializer = new _PageSerializer["default"]();
  return pagesSerializer.serialize(response);
}

async function fetchPage(inputs) {
  var id = inputs.id; // Treatment

  var response = await (0, _FetchPage["default"])(id, {
    pageRepository: pageRepository
  });
  var pagesSerializer = new _PageSerializer["default"]();
  return pagesSerializer.serialize(response);
}

async function createPage(inputs) {
  // Inputs
  var name = inputs.name,
      debateId = inputs.debateId,
      type = inputs.type,
      url = inputs.url,
      languages = inputs.languages; // Treatment

  var response = await (0, _CreatePage["default"])(name, debateId, type, url, languages, {
    pageRepository: pageRepository
  });
  var pagesSerializer = new _PageSerializer["default"]();
  return pagesSerializer.serialize(response);
}

async function updatePage(inputs) {
  // Inputs
  var name = inputs.name,
      id = inputs.id,
      debateId = inputs.debateId,
      type = inputs.type,
      url = inputs.url,
      languages = inputs.languages; // Treatment

  var response = await (0, _UpdatePage["default"])(name, id, debateId, type, url, languages, {
    pageRepository: pageRepository
  });
  var pagesSerializer = new _PageSerializer["default"]();
  return pagesSerializer.serialize(response);
}

module.exports = {
  fetchAllPages: fetchAllPages,
  fetchAllPagesForDebate: fetchAllPagesForDebate,
  createPage: createPage,
  fetchPage: fetchPage,
  updatePage: updatePage
};