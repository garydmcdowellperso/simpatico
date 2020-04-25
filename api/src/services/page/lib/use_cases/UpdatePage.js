import Page from '../entities/Page';

async function UpdatePage(
  name,
  id,
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
  if (!id) {
    throw new Error("No ID");
  }
  if (!debateId) {
    throw new Error("No debateID");
  }
  if (!languages) {
    throw new Error("No languages");
  }

  const page = new Page(id, name, debateId, type, url, languages, true, false);

  return pageRepository.merge(page);
}

export default UpdatePage;
