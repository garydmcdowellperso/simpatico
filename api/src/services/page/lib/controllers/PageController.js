import PageSerializer from "../serializers/PageSerializer";
import FetchAllPages from "../use_cases/FetchAllPages";
import CreatePage from "../use_cases/CreatePage";
import FetchPage from "../use_cases/FetchPage";
import UpdatePage from "../use_cases/UpdatePage";
import PageRepository from "../repositories/PageRepository";

import PageRepositoryMongo from "../interface_adapters/storage/PageRepositoryMongo";

const pageRepository = new PageRepository(new PageRepositoryMongo());

async function fetchAllPages(inputs) {
  const { debateId } = inputs

  // Treatment
  const response = await FetchAllPages(debateId, {
    pageRepository
  });

  const pagesSerializer = new PageSerializer();
  return pagesSerializer.serialize(response);
}

async function fetchPage(inputs) {
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
  createPage,
  fetchPage,
  updatePage
};
