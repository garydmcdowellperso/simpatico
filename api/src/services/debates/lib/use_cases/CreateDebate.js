import Debate from '../entities/Debate';

async function CreateDebate(
  name,
  url,
  debateType,
  languages,
  { debateRepository }
) {
  if (!name) {
    throw new Error("No name");
  }
  if (!url) {
    throw new Error("No url");
  }
  if (!debateType) {
    throw new Error("No debateType");
  }
  if (!languages) {
    throw new Error("No languages");
  }

  const debate = new Debate(null, name, url, debateType, languages, false);

  return debateRepository.persist(debate);
}

export default CreateDebate;
