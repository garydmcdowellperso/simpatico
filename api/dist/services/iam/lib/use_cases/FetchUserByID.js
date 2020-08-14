"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchUserByUID(uid, _ref) {
  var userRepository = _ref.userRepository;

  if (!uid) {
    throw new Error("No UID");
  }

  var user = await userRepository.get(uid);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

var _default = FetchUserByUID;
exports["default"] = _default;