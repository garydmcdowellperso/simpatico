async function DeleteDebate(
  debateId,
  accountId,
  { debateRepository }
) {
  if (!debateId) {
    throw new Error("No debateId");
  }

  // Check it exists
  const debate = await debateRepository.get(debateId);

  if (!debate) {
    throw new Error("Debate does not exist");
  }

  if (debate.accountId !== accountId) {
    throw new Error("Debate does not belong to this account");
  }

  debate.deleted = true;

  await debateRepository.merge(debate);

  return debateRepository.getByAccountId(accountId);
}

export default DeleteDebate;
