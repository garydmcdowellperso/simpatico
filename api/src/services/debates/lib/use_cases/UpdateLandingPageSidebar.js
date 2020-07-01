import Debate from '../entities/Debate';

async function UpdateLandingPageSidebar(
  debateID,
  sidebar,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!sidebar) {
    throw new Error("No sidebar");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.sidebar = sidebar;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateLandingPageSidebar;
