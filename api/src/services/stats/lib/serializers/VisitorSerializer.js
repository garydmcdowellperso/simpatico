const _serializeSingleStat = stat => {
  return {
    nb_uniq_visitors: stat.nb_uniq_visitors,
    nb_users: stat.nb_users,
    nb_visits: stat.nb_visits,
    nb_actions: stat.nb_actions,
    nb_visits_converted: stat.nb_visits_converted,
    bounce_count: stat.bounce_count,
    sum_visit_length: stat.sum_visit_length,
    bounce_rate: stat.bounce_rate,
    nb_actions_per_visit: stat.nb_actions_per_visit,
    avg_time_on_site: stat.avg_time_on_site,
    max_actions: stat.max_actions
  };
};

class VisitorSerializer {
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

export default VisitorSerializer;
