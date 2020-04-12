async function FetchDebate(
  name,
  { debateRepository }
) {
  if (!name) {
    throw new Error("No name");
  }

  return debateRepository.getByName(name);
}

export default FetchDebate;
