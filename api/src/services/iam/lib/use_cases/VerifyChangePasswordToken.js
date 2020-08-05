async function VerifyChangePasswordToken(token, { userRepository, accessTokenManager }) {
  if (!token) {
    throw new Error("No Token");
  }

  const decoded = accessTokenManager.decode(token);

  console.log('decoded', decoded)

  // Look up user from id
  const user = await userRepository.get(decoded.uid);

  if (!user) {
    throw new Error("No Such User");
  }
  
  return true;
}

export default VerifyChangePasswordToken;
