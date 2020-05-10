import Debate from '../entities/Debate';

async function UpdateConnection(
  debateID,
  connection,
  { debateRepository }
) {
  if (!debateID) {
    throw new Error("No debateID");
  }
  if (!connection) {
    throw new Error("No connection");
  }

  const debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.connection = connection;

  await debateRepository.merge(debate);

  return debate;
}

export default UpdateConnection;
