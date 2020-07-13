const _serializeSingleStat = stat => {
  return {
    label: stat.label,
    nb_uniq_visitors: stat.nb_uniq_visitors,
    nb_visits: stat.nb_visits,
    nb_actions: stat.nb_actions,
    nb_users: stat.nb_users,
    max_actions: stat.max_actions,
    sum_visit_length: stat.sum_visit_length,
    bounce_count: stat.bounce_count,
    nb_visits_converted: stat.nb_visits_converted,
    segment: stat.segment
  };
};

class DevicesSerializer {
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

export default DevicesSerializer;
