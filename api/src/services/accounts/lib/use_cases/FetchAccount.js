async function FetchAccount(
  id,
  { accountRepository }
) {
  if (!id) {
    throw new Error("No id");
  }

  return accountRepository.get(id);
}

export default FetchAccount;
