async function ChangePasswordSuccess(id, password, { userRepository, encryptionManager, accessTokenManager }) {
  if (!id) {
    throw new Error("No id");
  }
  if (!password) {
    throw new Error("No password");
  }

  const user = await userRepository.get(id);

  if (!user) {
    throw new Error("User not found");
  }

  const hashedPassword = await encryptionManager.hash(password);

  delete user.token
  user.password = hashedPassword;

  await userRepository.merge(user);

  return accessTokenManager.generate({ 
    uid: user.id,
    accountId: user.accountId,
    debateId: user.accountId,
    role: user.role
  });
}

export default ChangePasswordSuccess;
