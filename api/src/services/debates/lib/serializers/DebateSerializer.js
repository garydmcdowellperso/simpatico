import moment from 'moment';

const _serializeSingleDebate = debate => {
  return {
    id: debate.id,
    name: debate.name,
    slug: debate.slug,
    debateType: debate.debateType,
    languages: debate.languages,
    header: debate.header,
    overview: debate.overview,
    themes: debate.themes,
    deleted: debate.deleted
  };
};

class DebateSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleDebate);
    }
    return _serializeSingleDebate(data);
  }
}

export default DebateSerializer;
