async function FetchAllDebates(
  { debateRepository }
) {
  return debateRepository.find();
}

export default FetchAllDebates;
