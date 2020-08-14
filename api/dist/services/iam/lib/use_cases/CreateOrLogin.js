"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../entities/User"));

async function CreateOrLogin(firstName, lastName, email, password, _ref) {
  var userRepository = _ref.userRepository,
      accessTokenManager = _ref.accessTokenManager;

  if (!firstName) {
    throw new Error("No First Name");
  }

  if (!lastName) {
    throw new Error("No Last Name");
  }

  if (!email) {
    throw new Error("No Emal");
  }

  var user = new _User["default"](null, firstName, lastName, email, password); // Check if the user exists

  var existingUser = await userRepository.getByEmail(email);
  var data; // User exists so check password

  if (existingUser) {
    data = existingUser;
  } // User doesn't exist but validated elsewhere so create


  if (!existingUser) {
    data = await userRepository.persist(user);
  }

  return accessTokenManager.generate({
    uid: data.id
  });
}

var _default = CreateOrLogin;
exports["default"] = _default;