import UserSerializer from "../serializers/UserSerializer";
import TokenSerializer from "../serializers/TokenSerializer";
import CreateOrLogin from "../use_cases/CreateOrLogin";
import CreateUser from "../use_cases/CreateUser";
import Login from "../use_cases/Login";
import Activate from "../use_cases/Activate";
import VerifyToken from "../use_cases/VerifyToken";
import FetchUserByUID from "../use_cases/FetchUserByID";
import FetchUserByEmail from "../use_cases/FetchUserByEmail";
import FetchUserByUserIdAccountId from "../use_cases/FetchUserByUserIdAccountId";
import UpdateUserInfo from "../use_cases/UpdateUserInfo";
import FetchUsersByAccountId from "../use_cases/FetchUsersByAccountId";
import UserRepository from "../repositories/UserRepository";
import AccessTokenManager from "../security/AccessTokenManager";
import EncryptionManager from "../security/EncryptionManager";

import UserRepositoryMongo from "../interface_adapters/storage/UserRepositoryMongo";
import JwtAccessTokenManager from "../interface_adapters/security/JwtAccessTokenManager";
import BcryptManager from "../interface_adapters/security/BcryptManager";

const userRepository = new UserRepository(new UserRepositoryMongo());
const accessTokenManager = new AccessTokenManager(new JwtAccessTokenManager());
const encryptionManager = new EncryptionManager(new BcryptManager());

async function createOrLogin(inputs) {
  // Input
  const { firstName, lastName, email, password } = inputs;

  // Treatment
  const token = await CreateOrLogin(firstName, lastName, email, password, {
    userRepository,
    accessTokenManager
  });

  // Output
  const tokenSerializer = new TokenSerializer();
  return tokenSerializer.serialize(token);
}

async function login(inputs) {
  // Input
  const { email, password } = inputs;

  // Treatment
  const token = await Login(email, password, {
    userRepository,
    encryptionManager,
    accessTokenManager
  });

  // Output
  const tokenSerializer = new TokenSerializer();
  return tokenSerializer.serialize(token);
}

async function activate(inputs) {
  // Input
  const { token } = inputs;

  // Treatment
  const tokenUser = await Activate(token, {
    userRepository,
    accessTokenManager
  });

  // Output
  const tokenSerializer = new TokenSerializer();
  return tokenSerializer.serialize(tokenUser);
}

async function createUser(inputs) {
  // Input
  const { debateId, accountId, firstname, lastname, email, password, role } = inputs;

  // Treatment
  const user = await CreateUser(debateId, accountId, firstname, lastname, email, password, role, {
    userRepository,
    encryptionManager,
    accessTokenManager
  });

  // Output
  const userSerializer = new UserSerializer();
  return userSerializer.serialize(user);
}

async function verifyToken(inputs) {
  // Input
  const { token, role } = inputs;

  // Treatment
  return VerifyToken(token, role, {
    userRepository,
    accessTokenManager
  });
}

async function fetchUser(inputs) {
  // Input
  const { uid } = inputs;

  // Treatment
  const user = await FetchUserByUID(uid, {
    userRepository
  });

  // Output
  const userSerializer = new UserSerializer();
  return userSerializer.serialize(user);
}

async function fetchUserAdmin(inputs) {
  // Input
  const { accountId, userId } = inputs;

  // Treatment
  const user = await FetchUserByUserIdAccountId(userId, accountId, {
    userRepository
  });

  // Output
  const userSerializer = new UserSerializer();
  return userSerializer.serialize(user);
}

async function fetchUsers(inputs) {
  // Input
  const { id } = inputs;

  // Treatment
  const users = await FetchUsersByAccountId(id, {
    userRepository
  });

  // Output
  const userSerializer = new UserSerializer();
  return userSerializer.serialize(users);
}

async function fetchUserByEmail(inputs) {
  // Input
  const { email } = inputs;

  // Treatment
  const user = await FetchUserByEmail(email, {
    userRepository
  });

  // Output
  const userSerializer = new UserSerializer();
  return userSerializer.serialize(user);
}

async function updateUserInfo(inputs) {
  // Input
  const { id, firstName, lastName, email, bio, avatar } = inputs;

  // Treatment
  const user = await UpdateUserInfo(id, firstName, lastName, email, bio, avatar, {
    userRepository
  });

  // Output
  const userSerializer = new UserSerializer();
  return userSerializer.serialize(user);
}

module.exports = {
  createOrLogin,
  verifyToken,
  fetchUser,
  fetchUsers,
  login,
  createUser,
  activate,
  fetchUserByEmail,
  updateUserInfo,
  fetchUserAdmin
};
