import AccountSerializer from "../serializers/AccountSerializer";
import CreateAccount from "../use_cases/CreateAccount";
import FetchAccount from "../use_cases/FetchAccount";
import UpdateAccountInfo from "../use_cases/UpdateAccountInfo";

import AccountRepository from "../repositories/AccountRepository";

import AccountRepositoryMongo from "../interface_adapters/storage/AccountRepositoryMongo";

const accountRepository = new AccountRepository(new AccountRepositoryMongo());

async function createAccount(inputs) {
  // Inputs
  const { account } = inputs;

  // Treatment
  const response = await CreateAccount(account, {
    accountRepository
  });

  const accountSerializer = new AccountSerializer();
  return accountSerializer.serialize(response);
}

async function fetchAccount(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await FetchAccount(id, {
    accountRepository
  });

  if (!response) {
    return {};
  }

  const accountSerializer = new AccountSerializer();
  return accountSerializer.serialize(response);
}

async function updateAccountInfo(inputs) {
  // Inputs
  const { id, name } = inputs;

  // Treatment
  const response = await UpdateAccountInfo(id, name, {
    accountRepository
  });


  const accountSerializer = new AccountSerializer();
  return accountSerializer.serialize(response);
}

module.exports = {
  createAccount,
  fetchAccount,
  updateAccountInfo
};
