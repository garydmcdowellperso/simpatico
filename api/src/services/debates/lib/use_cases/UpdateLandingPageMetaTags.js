import Debate from '../entities/Debate';

async function UpdateLandingPageMetaTags(
  debateID,
  metaTags,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!metaTags) {
    throw new Error("No meta tags");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.metaTags = metaTags;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateLandingPageMetaTags;
