"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchUserByUserIdAccountId(userId, accountId, _ref) {
  var userRepository = _ref.userRepository;

  if (!userId) {
    throw new Error("No User ID");
  }

  if (!accountId) {
    throw new Error("No Account ID");
  }

  var user = await userRepository.getByUserIdAccountId(userId, accountId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

var _default = FetchUserByUserIdAccountId;
exports["default"] = _default;