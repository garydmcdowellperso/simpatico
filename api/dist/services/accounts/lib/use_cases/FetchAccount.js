"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchAccount(id, _ref) {
  var accountRepository = _ref.accountRepository;

  if (!id) {
    throw new Error("No id");
  }

  return accountRepository.get(id);
}

var _default = FetchAccount;
exports["default"] = _default;