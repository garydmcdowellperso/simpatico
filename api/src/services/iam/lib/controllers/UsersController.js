import UserSerializer from "../serializers/UserSerializer";
import TokenSerializer from "../serializers/TokenSerializer";
import CreateOrLogin from "../use_cases/CreateOrLogin";
import CreateAccount from "../use_cases/CreateAccount";
import Login from "../use_cases/Login";
import Activate from "../use_cases/Activate";
import VerifyToken from "../use_cases/VerifyToken";
import FetchUserByUID from "../use_cases/FetchUserByID";
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

async function createAccount(inputs) {
  // Input
  const { firstname, lastname, email, password } = inputs;

  // Treatment
  const user = await CreateAccount(firstname, lastname, email, password, {
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
  const { token } = inputs;

  // Treatment
  return VerifyToken(token, {
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


module.exports = {
  createOrLogin,
  verifyToken,
  fetchUser,
  login,
  createAccount,
  activate
};
