import Debate from '../entities/Debate';

async function UpdateLandingPageOverview(
  debateID,
  overview,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!overview) {
    throw new Error("No overview");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.overview = overview;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateLandingPageOverview;
