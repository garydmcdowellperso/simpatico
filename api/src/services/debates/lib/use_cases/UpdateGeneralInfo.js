import Debate from '../entities/Debate';

async function UpdateGeneralInfo(
  debateID,
  info,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!info) {
    throw new Error("No info");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.name = info.name;
  debate.url = info.url;
  debate.debateType = info.debateType;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateGeneralInfo;
