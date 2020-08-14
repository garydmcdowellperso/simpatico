"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Account = _interopRequireDefault(require("../entities/Account"));

async function CreateAccount(account, _ref) {
  var accountRepository = _ref.accountRepository;

  if (!account) {
    throw new Error("No account");
  }

  var response = new _Account["default"](null, account, false);
  return accountRepository.persist(response);
}

var _default = CreateAccount;
exports["default"] = _default;