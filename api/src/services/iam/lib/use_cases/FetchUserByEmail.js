async function FetchUserByEmail(email, { userRepository }) {
  if (!email) {
    throw new Error("No email");
  }

  const user = await userRepository.getByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export default FetchUserByEmail;
