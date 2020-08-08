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
  let existingUser = await userRepository.getByEmail(email);

  if (existingUser) {
    throw new Error("User exists");
  }

  const hashedPassword = await encryptionManager.hash(password);

  // Create the user first so we can encode the uid in the token
  const user = new User(null, debateId ? [debateId] : [], accountId, firstName, lastName, email, hashedPassword, false, null, role, "", 0, 0, 0, 0, [], [], []);
  await userRepository.persist(user);

  // Get it back out so we can add the token
  existingUser = await userRepository.getByEmail(email);

  const token = accessTokenManager.generate({ 
    uid: existingUser.id,
    accountId: accountId,
    debateId: debateId,
    role: role
  });

  existingUser.token = token;
  await userRepository.merge(existingUser);

  return existingUser;
}

export default CreateUser;
