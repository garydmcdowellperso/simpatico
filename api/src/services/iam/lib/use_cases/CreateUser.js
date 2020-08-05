import User from '../entities/User';

async function CreateUser(
  debateId,
  accountId,
  firstName,
  lastName,
  email,
  password,
  role,
  { userRepository, encryptionManager, accessTokenManager }
) {
  if (!accountId) {
    throw new Error("No Account ID");
  }
  if (!firstName) {
    throw new Error("No First Name");
  }
  if (!lastName) {
    throw new Error("No Last Name");
  }
  if (!email) {
    throw new Error("No Email");
  }
  if (!password) {
    throw new Error("No password");
  }
  if (!role) {
    throw new Error("No role");
  }

  // Check if the user exists
  const existingUser = await userRepository.getByEmail(email);

  if (existingUser) {
    throw new Error("User exists");
  }

  const hashedPassword = await encryptionManager.hash(password);

  const token = accessTokenManager.generate({ 
    uid: existingUser.id,
    accountId: existingUser.accountId,
    debateId: existingUser.accountId,
    role: existingUser.role
  });

  const user = new User(null, debateId ? [debateId] : [], accountId, firstName, lastName, email, hashedPassword, false, token, [role], "", "", 0, 0, [], [], []);

  const data = await userRepository.persist(user);

  return user;
}

export default CreateUser;
