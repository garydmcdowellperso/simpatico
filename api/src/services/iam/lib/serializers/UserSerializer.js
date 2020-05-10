const _serializeSingleUser = user => {
  return {
    id: user.id,
    'first-name': user.firstName,
    'last-name': user.lastName,
    email: user.email,
    password: user.password,
    activated: user.activated,
    token: user.token
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
