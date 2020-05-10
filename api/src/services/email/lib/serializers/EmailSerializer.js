const _serializeSingleEmail = email => {
  return {
    template: email.template,
    email: email.email,
    substitutions: email.substitutions
  };
};

class EmailSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleEmail);
    }
    return _serializeSingleEmail(data);
  }
}

export default EmailSerializer;
