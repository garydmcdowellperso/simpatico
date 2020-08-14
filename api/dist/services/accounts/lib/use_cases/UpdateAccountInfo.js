"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Account = _interopRequireDefault(require("../entities/Account"));

async function UpdateAccountInfo(id, name, _ref) {
  var accountRepository = _ref.accountRepository;

  if (!id) {
    throw new Error("No id");
  }

  if (!name) {
    throw new Error("No name");
  }

  var account = await accountRepository.get(id);

  if (!account) {
    throw new Error("No account");
  }

  account.name = name;
  await accountRepository.merge(account);
  return account;
}

var _default = UpdateAccountInfo;
exports["default"] = _default;