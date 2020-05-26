async function VerifyToken(token, role, { userRepository, accessTokenManager }) {
  if (!token) {
    throw new Error("No Token");
  }

  if (!role) {
    throw new Error("No Role");
  }

  const decoded = accessTokenManager.decode(token);

  // Look up user from id
  const user = await userRepository.get(decoded.uid);

  if (!user) {
    throw new Error("No Such User");
  }

  // Check role
  if (!user.role.includes(role)) {
    throw new Error("User does not have this role");
  }
  
  return true;
}

export default VerifyToken;
