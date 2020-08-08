import jwt from "jsonwebtoken";

import config from "../../../../../config";

class JwtAccessTokenManager {
  generate(payload) {
    return jwt.sign(payload, config.jwt.secret, {
      algorithm: 'HMAC',
      expiresIn: config.jwt.expiresIn
    });
  }

  decode(accessToken) {
    return jwt.verify(accessToken, config.jwt.secret);
  }
}

export default JwtAccessTokenManager;
