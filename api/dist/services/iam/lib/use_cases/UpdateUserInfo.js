"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function UpdateUserInfo(id, firstName, lastName, email, bio, avatar, _ref) {
  var userRepository = _ref.userRepository;

  if (!id) {
    throw new Error("No id");
  }

  if (!firstName) {
    throw new Error("No firstName");
  }

  if (!lastName) {
    throw new Error("No lastName");
  }

  if (!bio) {
    throw new Error("No bio");
  }

  if (!avatar) {
    throw new Error("No avatar");
  }

  var user = await userRepository.get(id);

  if (!user) {
    throw new Error("User not found");
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.bio = bio;
  user.avatar = avatar;
  await userRepository.merge(user);
  return user;
}

var _default = UpdateUserInfo;
exports["default"] = _default;