"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../entities/User"));

async function CreateUser(debateId, accountId, firstName, lastName, email, password, role, _ref) {
  var userRepository = _ref.userRepository,
      encryptionManager = _ref.encryptionManager,
      accessTokenManager = _ref.accessTokenManager;

  if (!accountId) {
    throw new Error("No Account ID");
  }

  if (!firstName) {
    throw new Error("No First Name");
  }

  if (!lastName) {
    throw new Error("No Last Name");
  }

  if (!email) {
    throw new Error("No Email");
  }

  if (!password) {
    throw new Error("No password");
  }

  if (!role) {
    throw new Error("No role");
  } // Check if the user exists


  var existingUser = await userRepository.getByEmail(email);

  if (existingUser) {
    throw new Error("User exists");
  }

  var hashedPassword = await encryptionManager.hash(password);
  var token = accessTokenManager.generate({
    email: email
  });
  var user = new _User["default"](null, debateId ? [debateId] : [], accountId, firstName, lastName, email, hashedPassword, false, token, [role], "", "", 0, 0, [], [], []);
  var data = await userRepository.persist(user);
  return user;
}

var _default = CreateUser;
exports["default"] = _default;