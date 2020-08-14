"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../entities/User"));

async function Activate(token, _ref) {
  var userRepository = _ref.userRepository,
      accessTokenManager = _ref.accessTokenManager;

  if (!token) {
    throw new Error("No Token");
  } // Look up the user by token


  var existingUser = await userRepository.getByToken(token);

  if (!existingUser) {
    throw new Error("User doesn't exist");
  } // Check not aleady activated


  if (existingUser.activated) {
    throw new Error("User already activated");
  } // Check token exists


  if (!existingUser.token) {
    throw new Error("User already activated");
  } //  Update user to be activated


  existingUser.activated = true;
  delete existingUser.token;
  await userRepository.merge(existingUser); // Generate token

  return accessTokenManager.generate({
    uid: existingUser.id
  });
}

var _default = Activate;
exports["default"] = _default;