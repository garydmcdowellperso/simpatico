import User from '../entities/User';

async function CreateOrLogin(
  firstName,
  lastName,
  email,
  password,
  { userRepository, accessTokenManager },
) {
  if (!firstName) {
    throw new Error('No First Name');
  }
  if (!lastName) {
    throw new Error('No Last Name');
  }
  if (!email) {
    throw new Error('No Emal');
  }
  if (!password) {
    throw new Error('No Password');
  }

  const user = new User(null, firstName, lastName, email, password);

  // Check if the user exists
  const existingUser = await userRepository.getByEmail(email);

  // User exists so check password
  if (existingUser) {
    console.log('here', existingUser);
  }

  // User doesn't exist but validated elsewhere so create
  let data;
  if (!existingUser) {
    data = await userRepository.persist(user);
  }
  return accessTokenManager.generate({ uid: data.id });
}

export default CreateOrLogin;
