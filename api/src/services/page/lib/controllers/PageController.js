import PageSerializer from "../serializers/PageSerializer";
import CreatePage from "../use_cases/CreatePage";
import FetchPage from "../use_cases/FetchPage";
import FetchAllPages from "../use_cases/FetchAllPages";
import FetchAllPagesForDebate from "../use_cases/FetchAllPagesForDebate";
import UpdatePage from "../use_cases/UpdatePage";
import PageRepository from "../repositories/PageRepository";

import PageRepositoryMongo from "../interface_adapters/storage/PageRepositoryMongo";

const pageRepository = new PageRepository(new PageRepositoryMongo());

async function fetchAllPages() {
  // Treatment
  const response = await FetchAllPages({
    pageRepository
  });

  const pagesSerializer = new PageSerializer();
  return pagesSerializer.serialize(response);
}

async function fetchAllPagesForDebate(inputs) {
  const { debateId } = inputs

  // Treatment
  const response = await FetchAllPagesForDebate(debateId, {
    pageRepository
  });

  const pagesSerializer = new PageSerializer();
  return pagesSerializer.serialize(response);
}

async function fetchPage(input) {
  const { id } = inputs

  // Treatment
  const response = await FetchPage(id, {
    pageRepository
  });

  const pagesSerializer = new PageSerializer();
  return pagesSerializer.serialize(response);
}

async function createPage(inputs) {
  // Inputs
  const { name, debateId, type, url, languages } = inputs;

  // Treatment
  const response = await CreatePage(name, debateId, type, url, languages, {
    pageRepository
  });

  const pagesSerializer = new PageSerializer();
  return pagesSerializer.serialize(response);
}

async function updatePage(inputs) {
  // Inputs
  const { name, id, debateId, type, url, languages } = inputs;

  // Treatment
  const response = await UpdatePage(name, id, debateId, type, url, languages, {
    pageRepository
  });

  const pagesSerializer = new PageSerializer();
  return pagesSerializer.serialize(response);
}

module.exports = {
  fetchAllPages,
  fetchAllPagesForDebate,
  createPage,
  fetchPage,
  updatePage
};
