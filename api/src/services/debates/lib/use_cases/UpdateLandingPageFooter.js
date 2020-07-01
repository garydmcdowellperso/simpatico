import Debate from '../entities/Debate';

async function UpdateLandingPageFooter(
  debateID,
  footer,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!footer) {
    throw new Error("No footer");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.footer = footer;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateLandingPageFooter;
