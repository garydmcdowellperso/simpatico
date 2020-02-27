async function VerifyToken(token, { userRepository, accessTokenManager }) {
  if (!token) {
    throw new Error("No Token");
  }

  const decoded = accessTokenManager.decode(token);

  // Look up user from id
  const user = await userRepository.get(decoded.uid);

  if (!user) {
    throw new Error("No Such User");
  }

  return true;
}

export default VerifyToken;
