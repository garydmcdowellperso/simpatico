import User from '../entities/User';

async function Activate(
  token,
  { userRepository, accessTokenManager }
) {
  if (!token) {
    throw new Error("No Token");
  }

  // Look up the user by token
  const existingUser = await userRepository.getByToken(token);

  if (!existingUser) {
    throw new Error("User doesn't exist");
  }

  // Check not aleady activated
  if (existingUser.activated) {
    throw new Error("User already activated");
  }

  // Check token exists
  if (!existingUser.token) {
    throw new Error("User already activated");
  }
  
  //  Update user to be activated
  existingUser.activated = true;
  delete existingUser.token;

  await userRepository.merge(existingUser);

  // Generate token
  const newToken = await accessTokenManager.generate({ 
    uid: existingUser.id,
    accountId: existingUser.accountId,
    debateId: existingUser.accountId,
    role: existingUser.role
  });

  return { token: newToken, role: existingUser.role }
}

export default Activate;
