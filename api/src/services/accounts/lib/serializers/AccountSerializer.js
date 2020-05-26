import moment from 'moment';

const _serializeSingleAccount = account => {
  return {
    id: account.id,
    name: account.name,
    deleted: account.deleted
  };
};

class AccountSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleAccount);
    }
    return _serializeSingleAccount(data);
  }
}

export default AccountSerializer;
