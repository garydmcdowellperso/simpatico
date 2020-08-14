"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchUsersByAccountId(id, _ref) {
  var userRepository = _ref.userRepository;

  if (!id) {
    throw new Error("No ID");
  }

  var users = await userRepository.getByAccountId(id);

  if (!users) {
    throw new Error("Users not found");
  }

  return users;
}

var _default = FetchUsersByAccountId;
exports["default"] = _default;