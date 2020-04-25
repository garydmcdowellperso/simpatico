import Page from '../entities/Page';

async function CreatePage(
  name,
  debateId,
  type,
  url,
  languages,
  { pageRepository }
) {
  if (!name) {
    throw new Error("No name");
  }
  if (!type) {
    throw new Error("No type");
  }
  if (!languages) {
    throw new Error("No languages");
  }

  const page = new Page(null, name, debateId, type, url, languages, true, false);

  return pageRepository.persist(page);
}

export default CreatePage;
