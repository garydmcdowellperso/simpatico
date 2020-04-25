import Debate from '../entities/Debate';

async function UpdateLandingPageHeader(
  debateID,
  header,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!header) {
    throw new Error("No header");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.header = header;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateLandingPageHeader;
