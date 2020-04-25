import moment from 'moment';

const _serializeSinglePage = page => {
  return {
    id: page.id,
    debateId: page.debateId,
    name: page.name,
    type: page.type,
    url: page.url,
    languages: page.languages,
    inuse: page.inuse,
    deleted: page.deleted
  };
};

class PageSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSinglePage);
    }
    return _serializeSinglePage(data);
  }
}

export default PageSerializer;
