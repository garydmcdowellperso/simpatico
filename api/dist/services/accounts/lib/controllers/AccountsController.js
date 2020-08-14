"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _AccountSerializer = _interopRequireDefault(require("../serializers/AccountSerializer"));

var _CreateAccount = _interopRequireDefault(require("../use_cases/CreateAccount"));

var _FetchAccount = _interopRequireDefault(require("../use_cases/FetchAccount"));

var _UpdateAccountInfo = _interopRequireDefault(require("../use_cases/UpdateAccountInfo"));

var _AccountRepository = _interopRequireDefault(require("../repositories/AccountRepository"));

var _AccountRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/AccountRepositoryMongo"));

var accountRepository = new _AccountRepository["default"](new _AccountRepositoryMongo["default"]());

async function createAccount(inputs) {
  // Inputs
  var account = inputs.account; // Treatment

  var response = await (0, _CreateAccount["default"])(account, {
    accountRepository: accountRepository
  });
  var accountSerializer = new _AccountSerializer["default"]();
  return accountSerializer.serialize(response);
}

async function fetchAccount(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _FetchAccount["default"])(id, {
    accountRepository: accountRepository
  });

  if (!response) {
    return {};
  }

  var accountSerializer = new _AccountSerializer["default"]();
  return accountSerializer.serialize(response);
}

async function updateAccountInfo(inputs) {
  // Inputs
  var id = inputs.id,
      name = inputs.name; // Treatment

  var response = await (0, _UpdateAccountInfo["default"])(id, name, {
    accountRepository: accountRepository
  });
  var accountSerializer = new _AccountSerializer["default"]();
  return accountSerializer.serialize(response);
}

module.exports = {
  createAccount: createAccount,
  fetchAccount: fetchAccount,
  updateAccountInfo: updateAccountInfo
};