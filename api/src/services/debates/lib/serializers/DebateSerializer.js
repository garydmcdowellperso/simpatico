import moment from 'moment';

const _serializeSingleDebate = debate => {
  return {
    id: debate.id,
    name: debate.name,
    url: debate.url,
    debateType: debate.debateType,
    languages: debate.languages,
    header: debate.header,
    overview: debate.overview,
    themes: debate.themes,
    sidebar: debate.sidebar,
    footer: debate.footer,
    metaTags: debate.metaTags,
    connection: debate.connection,
    deleted: debate.deleted,
    accountId: debate.accountId,
    trackingId: debate.trackingId
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
