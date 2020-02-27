import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = "shhhhhh!";

class JwtAccessTokenManager {
  generate(payload) {
    return jwt.sign(payload, JWT_SECRET_KEY);
  }

  decode(accessToken) {
    return jwt.verify(accessToken, JWT_SECRET_KEY);
  }
}

export default JwtAccessTokenManager;
