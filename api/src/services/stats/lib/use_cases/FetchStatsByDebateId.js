async function FetchStatsByDebateId(
  debateId,
  { statsRepository }
) {
  if (!debateId) {
    throw new Error("No debate id");
  }

  return statsRepository.getByDebateId(debateId);
}

export default FetchStatsByDebateId;
