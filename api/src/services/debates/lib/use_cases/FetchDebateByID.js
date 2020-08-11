async function FetchDebateByID(
  id,
  { debateRepository }
) {
  if (!id) {
    throw new Error("No ID");
  }

  return debateRepository.get(id);
}

export default FetchDebateByID;
