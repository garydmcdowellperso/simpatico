import UserSerializer from "../serializers/UserSerializer";
import TokenSerializer from "../serializers/TokenSerializer";
import CreateOrLogin from "../use_cases/CreateOrLogin";
import VerifyToken from "../use_cases/VerifyToken";
import FetchUserByUID from "../use_cases/FetchUserByID";
import UserRepository from "../repositories/UserRepository";
import AccessTokenManager from "../security/AccessTokenManager";

// import UserRepositoryInMemory from "../interface_adapters/storage/UserRepositoryInMemory";
import UserRepositoryMongo from "../interface_adapters/storage/UserRepositoryMongo";
import JwtAccessTokenManager from "../interface_adapters/security/JwtAccessTokenManager";

const userRepository = new UserRepository(new UserRepositoryMongo());
const accessTokenManager = new AccessTokenManager(new JwtAccessTokenManager());

/*
const UserRepositorySQLite = require('../storage/UserRepositorySQLite');
const userRepository = new UserRepository(new UserRepositorySQLite());
*/

async function createOrLogin(inputs) {
  // Input
  const { firstName, lastName, email, password } = inputs;

  // Treatment
  const token = await CreateOrLogin(firstName, lastName, email, password, {
    userRepository,
    accessTokenManager
  });

  console.log('token', token)
  // Output
  const tokenSerializer = new TokenSerializer();
  return tokenSerializer.serialize(token);
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
  fetchUser
};
