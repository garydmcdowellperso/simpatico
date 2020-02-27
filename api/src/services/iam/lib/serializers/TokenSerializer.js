const _serializeToken = token => {
  return {
    token
  };
};

class TokenSerializer {
  serialize(data) {
    if (!data) {
      throw new Error("Expect data to be not undefined nor null");
    }
    if (Array.isArray(data)) {
      return data.map(_serializeToken);
    }
    return _serializeToken(data);
  }
}

export default TokenSerializer;
