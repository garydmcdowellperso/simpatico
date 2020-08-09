
const _serializeSingleSite = site => {
  return {
    id: stat.value
  };
};

class SiteSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleSite);
    }
    return _serializeSingleSite(data);
  }
}

export default SiteSerializer;
