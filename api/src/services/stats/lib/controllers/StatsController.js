import StatsSerializer from "../serializers/StatsSerializer";
import FetchAllStats from "../use_cases/FetchAllStats";

import StatsRepository from "../repositories/StatsRepository";

import StatsRepositoryMongo from "../interface_adapters/storage/StatsRepositoryMongo";

const statsRepository = new StatsRepository(new StatsRepositoryMongo());


async function fetchAllStats(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await FetchAllStats(id, {
    statsRepository
  });

  const statsSerializer = new StatsSerializer();
  return statsSerializer.serialize(response);
}

module.exports = {
  fetchAllStats
};
