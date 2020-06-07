const _serializeSingleTopContributor = contrib => {
  return {
    id: contrib._id,
    contributions: contrib.count
  };
};

class TopContributorsSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTopContributor);
    }
    return _serializeSingleTopContributor(data);
  }
}

export default TopContributorsSerializer;
