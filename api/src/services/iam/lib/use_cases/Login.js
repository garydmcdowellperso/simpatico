async function Login(
  email,
  password,
  { userRepository, encryptionManager, accessTokenManager }
) {
  if (!email) {
    throw new Error("No email");
  }
  if (!password) {
    throw new Error("No password");
  }

  // Check if the user exists
  const existingUser = await userRepository.getByEmail(email);

  if (!existingUser) {
    throw new Error("User does not exist");
  }

  // Check active
  if (!existingUser.activated) {
    throw new Error("User not activated");
  }

  // Check password
  const response = await encryptionManager.compare(password, existingUser.password);

  if (!response) {
    throw new Error("Wrong password");
  }

  return accessTokenManager.generate({ 
    uid: existingUser.id,
    accountId: existingUser.accountId,
    debateId: existingUser.accountId,
    role: existingUser.role
  });
}

export default Login;
