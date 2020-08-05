async function ResetPassword(
  email,
  { userRepository, encryptionManager, accessTokenManager }
) {
  if (!email) {
    throw new Error("No email");
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

  const token = accessTokenManager.generate({ uid: existingUser.id, email });

  existingUser.token = token;

  await userRepository.merge(existingUser);

  return token;
}

export default ResetPassword;
