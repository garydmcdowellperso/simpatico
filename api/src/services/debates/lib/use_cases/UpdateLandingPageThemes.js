import Debate from '../entities/Debate';

async function UpdateLandingPageThemes(
  debateID,
  themes,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!themes) {
    throw new Error("No themes");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.themes = themes;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateLandingPageThemes;
