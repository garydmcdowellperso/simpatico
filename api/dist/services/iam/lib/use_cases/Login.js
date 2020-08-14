"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function Login(email, password, _ref) {
  var userRepository = _ref.userRepository,
      encryptionManager = _ref.encryptionManager,
      accessTokenManager = _ref.accessTokenManager;

  if (!email) {
    throw new Error("No email");
  }

  if (!password) {
    throw new Error("No password");
  } // Check if the user exists


  var existingUser = await userRepository.getByEmail(email);

  if (!existingUser) {
    throw new Error("User does not exist");
  } // Check active


  if (!existingUser.activated) {
    throw new Error("User not activated");
  } // Check password


  var response = await encryptionManager.compare(password, existingUser.password);

  if (!response) {
    throw new Error("Wrong password");
  }

  return accessTokenManager.generate({
    uid: existingUser.id
  });
}

var _default = Login;
exports["default"] = _default;