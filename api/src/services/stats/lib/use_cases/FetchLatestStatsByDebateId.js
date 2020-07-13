async function FetchLatestStatsByDebateId(
  debateId,
  { statsRepository }
) {
  if (!debateId) {
    throw new Error("No debate id");
  }

  return statsRepository.getLatestByDebateId(debateId);
}

export default FetchLatestStatsByDebateId;
