class AccessTokenManager {
  constructor(accessTokenManager) {
    this.accessTokenManager = accessTokenManager;
  }

  generate(payload) {
    return this.accessTokenManager.generate(payload);
  }

  decode(payload) {
    return this.accessTokenManager.decode(payload);
  }
}

export default AccessTokenManager;
