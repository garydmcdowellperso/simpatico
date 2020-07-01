const _serializeSingleUser = user => {
  return {
    id: user.id,
    'first-name': user.firstName,
    'last-name': user.lastName,
    email: user.email,
    password: user.password,
    activated: user.activated,
    token: user.token,
    role: user.role,
    bio: user.bio,
    avatar: user.avatar,
    score: user.score,
    badge: user.badge,
    likes: user.likes,
    dislikes: user.dislikes,
    contributions: user.contributions,
    accountId: user.accountId,
    debates: user.debates,
    accountId: user.accountId
  };
};

class UserSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }
}

export default UserSerializer;
