import TokenSerializer from '../serializers/TokenSerializer';
import CreateOrLogin from '../use_cases/CreateOrLogin';
import UserRepository from '../repositories/UserRepository';
import AccessTokenManager from '../security/AccessTokenManager';

import UserRepositoryInMemory from '../interface_adapters/storage/UserRepositoryInMemory';
import JwtAccessTokenManager from '../interface_adapters/security/JwtAccessTokenManager';

const userRepository = new UserRepository(new UserRepositoryInMemory());
const accessTokenManager = new AccessTokenManager(new JwtAccessTokenManager());

/*
const UserRepositorySQLite = require('../storage/UserRepositorySQLite');
const userRepository = new UserRepository(new UserRepositorySQLite());
*/

async function createOrLogin(request) {
  // Input
  const { firstName, lastName, email, password } = request.body;

  // Treatment
  const token = await CreateOrLogin(firstName, lastName, email, password, {
    userRepository,
    accessTokenManager,
  });

  console.log('token', token)
  // Output
  const tokenSerializer = new TokenSerializer();
  return tokenSerializer.serialize(token);
}

export default createOrLogin;

module.exports = {
  createOrLogin,
};
