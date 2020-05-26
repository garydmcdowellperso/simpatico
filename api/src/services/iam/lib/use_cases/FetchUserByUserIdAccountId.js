async function FetchUserByUserIdAccountId(userId, accountId, { userRepository }) {
  if (!userId) {
    throw new Error("No User ID");
  }

  if (!accountId) {
    throw new Error("No Account ID");
  }

  const user = await userRepository.getByUserIdAccountId(userId, accountId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export default FetchUserByUserIdAccountId;
