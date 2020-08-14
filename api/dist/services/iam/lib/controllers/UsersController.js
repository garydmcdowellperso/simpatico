"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _UserSerializer = _interopRequireDefault(require("../serializers/UserSerializer"));

var _TokenSerializer = _interopRequireDefault(require("../serializers/TokenSerializer"));

var _CreateOrLogin = _interopRequireDefault(require("../use_cases/CreateOrLogin"));

var _CreateUser = _interopRequireDefault(require("../use_cases/CreateUser"));

var _Login = _interopRequireDefault(require("../use_cases/Login"));

var _Activate = _interopRequireDefault(require("../use_cases/Activate"));

var _VerifyToken = _interopRequireDefault(require("../use_cases/VerifyToken"));

var _FetchUserByID = _interopRequireDefault(require("../use_cases/FetchUserByID"));

var _FetchUserByEmail = _interopRequireDefault(require("../use_cases/FetchUserByEmail"));

var _FetchUserByUserIdAccountId = _interopRequireDefault(require("../use_cases/FetchUserByUserIdAccountId"));

var _UpdateUserInfo = _interopRequireDefault(require("../use_cases/UpdateUserInfo"));

var _FetchUsersByAccountId = _interopRequireDefault(require("../use_cases/FetchUsersByAccountId"));

var _UserRepository = _interopRequireDefault(require("../repositories/UserRepository"));

var _AccessTokenManager = _interopRequireDefault(require("../security/AccessTokenManager"));

var _EncryptionManager = _interopRequireDefault(require("../security/EncryptionManager"));

var _UserRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/UserRepositoryMongo"));

var _JwtAccessTokenManager = _interopRequireDefault(require("../interface_adapters/security/JwtAccessTokenManager"));

var _BcryptManager = _interopRequireDefault(require("../interface_adapters/security/BcryptManager"));

var userRepository = new _UserRepository["default"](new _UserRepositoryMongo["default"]());
var accessTokenManager = new _AccessTokenManager["default"](new _JwtAccessTokenManager["default"]());
var encryptionManager = new _EncryptionManager["default"](new _BcryptManager["default"]());

async function createOrLogin(inputs) {
  // Input
  var firstName = inputs.firstName,
      lastName = inputs.lastName,
      email = inputs.email,
      password = inputs.password; // Treatment

  var token = await (0, _CreateOrLogin["default"])(firstName, lastName, email, password, {
    userRepository: userRepository,
    accessTokenManager: accessTokenManager
  }); // Output

  var tokenSerializer = new _TokenSerializer["default"]();
  return tokenSerializer.serialize(token);
}

async function login(inputs) {
  // Input
  var email = inputs.email,
      password = inputs.password; // Treatment

  var token = await (0, _Login["default"])(email, password, {
    userRepository: userRepository,
    encryptionManager: encryptionManager,
    accessTokenManager: accessTokenManager
  }); // Output

  var tokenSerializer = new _TokenSerializer["default"]();
  return tokenSerializer.serialize(token);
}

async function activate(inputs) {
  // Input
  var token = inputs.token; // Treatment

  var tokenUser = await (0, _Activate["default"])(token, {
    userRepository: userRepository,
    accessTokenManager: accessTokenManager
  }); // Output

  var tokenSerializer = new _TokenSerializer["default"]();
  return tokenSerializer.serialize(tokenUser);
}

async function createUser(inputs) {
  // Input
  var debateId = inputs.debateId,
      accountId = inputs.accountId,
      firstname = inputs.firstname,
      lastname = inputs.lastname,
      email = inputs.email,
      password = inputs.password,
      role = inputs.role; // Treatment

  var user = await (0, _CreateUser["default"])(debateId, accountId, firstname, lastname, email, password, role, {
    userRepository: userRepository,
    encryptionManager: encryptionManager,
    accessTokenManager: accessTokenManager
  }); // Output

  var userSerializer = new _UserSerializer["default"]();
  return userSerializer.serialize(user);
}

async function verifyToken(inputs) {
  // Input
  var token = inputs.token,
      role = inputs.role; // Treatment

  return (0, _VerifyToken["default"])(token, role, {
    userRepository: userRepository,
    accessTokenManager: accessTokenManager
  });
}

async function fetchUser(inputs) {
  // Input
  var uid = inputs.uid; // Treatment

  var user = await (0, _FetchUserByID["default"])(uid, {
    userRepository: userRepository
  }); // Output

  var userSerializer = new _UserSerializer["default"]();
  return userSerializer.serialize(user);
}

async function fetchUserAdmin(inputs) {
  // Input
  var accountId = inputs.accountId,
      userId = inputs.userId; // Treatment

  var user = await (0, _FetchUserByUserIdAccountId["default"])(userId, accountId, {
    userRepository: userRepository
  }); // Output

  var userSerializer = new _UserSerializer["default"]();
  return userSerializer.serialize(user);
}

async function fetchUsers(inputs) {
  // Input
  var id = inputs.id; // Treatment

  var users = await (0, _FetchUsersByAccountId["default"])(id, {
    userRepository: userRepository
  }); // Output

  var userSerializer = new _UserSerializer["default"]();
  return userSerializer.serialize(users);
}

async function fetchUserByEmail(inputs) {
  // Input
  var email = inputs.email; // Treatment

  var user = await (0, _FetchUserByEmail["default"])(email, {
    userRepository: userRepository
  }); // Output

  var userSerializer = new _UserSerializer["default"]();
  return userSerializer.serialize(user);
}

async function updateUserInfo(inputs) {
  // Input
  var id = inputs.id,
      firstName = inputs.firstName,
      lastName = inputs.lastName,
      email = inputs.email,
      bio = inputs.bio,
      avatar = inputs.avatar; // Treatment

  var user = await (0, _UpdateUserInfo["default"])(id, firstName, lastName, email, bio, avatar, {
    userRepository: userRepository
  }); // Output

  var userSerializer = new _UserSerializer["default"]();
  return userSerializer.serialize(user);
}

module.exports = {
  createOrLogin: createOrLogin,
  verifyToken: verifyToken,
  fetchUser: fetchUser,
  fetchUsers: fetchUsers,
  login: login,
  createUser: createUser,
  activate: activate,
  fetchUserByEmail: fetchUserByEmail,
  updateUserInfo: updateUserInfo,
  fetchUserAdmin: fetchUserAdmin
};