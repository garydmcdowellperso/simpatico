import jwt from "jsonwebtoken";

import config from "../../../../../config";

class JwtAccessTokenManager {
  generate(payload) {
    console.log('config', config.jwt)
    return jwt.sign(payload, config.jwt.secret, {
      algorithm: 'HS256',
      expiresIn: config.jwt.expiresIn
    });
  }

  decode(accessToken) {
    return jwt.verify(accessToken, config.jwt.secret);
  }
}

export default JwtAccessTokenManager;
