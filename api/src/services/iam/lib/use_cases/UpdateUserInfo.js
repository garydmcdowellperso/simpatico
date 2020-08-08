async function UpdateUserInfo(id, firstName, lastName, email, bio, avatar, { userRepository }) {
  if (!id) {
    throw new Error("No id");
  }
  if (!firstName) {
    throw new Error("No firstName");
  }
  if (!lastName) {
    throw new Error("No lastName");
  }

  const user = await userRepository.get(id);

  if (!user) {
    throw new Error("User not found");
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.bio = bio;
  user.avatar = avatar;

  await userRepository.merge(user);

  return user;
}

export default UpdateUserInfo;
