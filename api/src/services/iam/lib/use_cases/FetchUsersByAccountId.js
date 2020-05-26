async function FetchUsersByAccountId(id, { userRepository }) {
  if (!id) {
    throw new Error("No ID");
  }

  const users = await userRepository.getByAccountId(id);

  if (!users) {
    throw new Error("Users not found");
  }

  return users;
}

export default FetchUsersByAccountId;
