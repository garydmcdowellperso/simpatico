import moment from 'moment';

const _serializeSingleStat = stat => {
  return {
    id: stat.id,
    accountId: stat.accountId,
    posts: stat.posts,
    pageviews: stat.pageviews,
    reactions: stat.reactions,
    signups: stat.signups,
    shares: stat.shares
  };
};

class StatsSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleStat);
    }
    return _serializeSingleStat(data);
  }
}

export default StatsSerializer;
