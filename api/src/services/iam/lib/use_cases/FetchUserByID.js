async function FetchUserByUID(uid, { userRepository }) {
  if (!uid) {
    throw new Error("No UID");
  }

  const user = await userRepository.get(uid);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export default FetchUserByUID;
