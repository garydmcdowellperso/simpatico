import Account from '../entities/Account';

async function UpdateAccountInfo(
  id,
  name,
  { accountRepository }
) {
  if (!id) {
    throw new Error("No id");
  }
  if (!name) {
    throw new Error("No name");
  }

  const account = await accountRepository.get(id);

  if (!account) {
    throw new Error("No account");
  }

  account.name = name;

  await accountRepository.merge(account);

  return account;
}

export default UpdateAccountInfo;
