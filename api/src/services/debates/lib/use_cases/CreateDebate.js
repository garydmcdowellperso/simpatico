import Debate from '../entities/Debate';

async function CreateDebate(
  name,
  slug,
  debateType,
  languages,
  { debateRepository }
) {
  if (!name) {
    throw new Error("No name");
  }
  if (!slug) {
    throw new Error("No slug");
  }
  if (!debateType) {
    throw new Error("No debateType");
  }
  if (!languages) {
    throw new Error("No languages");
  }

  const debate = new Debate(null, name, slug, debateType, languages, false);

  return debateRepository.persist(debate);
}

export default CreateDebate;
