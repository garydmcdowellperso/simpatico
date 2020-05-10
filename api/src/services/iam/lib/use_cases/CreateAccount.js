import User from '../entities/User';

async function CreateAccount(
  firstName,
  lastName,
  email,
  password,
  { userRepository, encryptionManager, accessTokenManager }
) {
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

  // Check if the user exists
  const existingUser = await userRepository.getByEmail(email);

  if (existingUser) {
    throw new Error("User exists");
  }

  const hashedPassword = await encryptionManager.hash(password);
  console.log('hashedPassword', hashedPassword)
  const token = accessTokenManager.generate({ email });

  const user = new User(null, firstName, lastName, email, hashedPassword, false, token);

  const data = await userRepository.persist(user);

  return user;
}

export default CreateAccount;
