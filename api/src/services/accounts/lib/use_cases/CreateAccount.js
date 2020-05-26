import Account from '../entities/Account';

async function CreateAccount(
  account,
  { accountRepository }
) {
  if (!account) {
    throw new Error("No account");
  }

  const response = new Account(null, account, false);

  return accountRepository.persist(response);
}

export default CreateAccount;
