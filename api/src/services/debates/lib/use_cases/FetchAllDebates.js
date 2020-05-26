async function FetchAllDebates(
  id,
  { debateRepository }
) {
  if (!id) {
    throw new Error("No id");
  }

  return debateRepository.getByAccountId(id);
}

export default FetchAllDebates;
