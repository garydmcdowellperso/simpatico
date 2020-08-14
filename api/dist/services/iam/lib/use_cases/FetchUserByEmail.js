"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchUserByEmail(email, _ref) {
  var userRepository = _ref.userRepository;

  if (!email) {
    throw new Error("No email");
  }

  var user = await userRepository.getByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

var _default = FetchUserByEmail;
exports["default"] = _default;