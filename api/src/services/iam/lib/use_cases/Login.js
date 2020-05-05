import bcrypt from 'bcrypt';

async function Login(
  email,
  password,
  { userRepository, accessTokenManager }
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
  console.log('existingUser', existingUser)

  // Check password
  const response = await bcrypt.compare(password, existingUser.password);

  console.log('response', response)

  return accessTokenManager.generate({ uid: existingUser.id });
}

export default Login;
