async function FetchAllStats(
  id,
  { statsRepository }
) {
  if (!id) {
    throw new Error("No id");
  }

  return statsRepository.getByAccountId(id);
}

export default FetchAllStats;
