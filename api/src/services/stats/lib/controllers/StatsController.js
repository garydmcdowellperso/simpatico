import StatsSerializer from "../serializers/StatsSerializer";
import VisitorSerializer from "../serializers/VisitorSerializer";
import DevicesSerializer from "../serializers/DevicesSerializer";
import SiteSerializer from "../serializers/SiteSerializer";
import CreateSite from "../use_cases/CreateSite";
import FetchAllStats from "../use_cases/FetchAllStats";
import FetchVisitors from "../use_cases/FetchVisitors";
import FetchDevices from "../use_cases/FetchDevices";
import UpdateStats from "../use_cases/UpdateStats";
import CreateStats from "../use_cases/CreateStats";
import FetchStatsByDebateId from "../use_cases/FetchStatsByDebateId";
import FetchLatestStatsByDebateId from "../use_cases/FetchLatestStatsByDebateId";
import FetchVisitorsByDayForMonth from "../use_cases/FetchVisitorsByDayForMonth";

import StatsRepository from "../repositories/StatsRepository";
import HTTPRequester from "../comms/HTTPRequester";

import StatsRepositoryMongo from "../interface_adapters/storage/StatsRepositoryMongo";
import HTTPRequesterAxios from "../interface_adapters/http/HTTPRequesterAxios";

const statsRepository = new StatsRepository(new StatsRepositoryMongo());
const httpRequester = new HTTPRequester(new HTTPRequesterAxios());

async function createSite(inputs) {
  // Inputs
  const { name } = inputs;

  // Treatment
  const response = await CreateSite(name, {
    httpRequester
  });

  console.log('response', response)
  const siteSerializer = new SiteSerializer();
  return siteSerializer.serialize(response);
}

async function fetchStatsByDebateId(inputs) {
  // Inputs
  const { debateId } = inputs;

  // Treatment
  const response = await FetchStatsByDebateId(debateId, {
    statsRepository
  });

  const statsSerializer = new StatsSerializer();
  return statsSerializer.serialize(response);
}

async function fetchLatestStatsByDebateId(inputs) {
  // Inputs
  const { debateId } = inputs;

  // Treatment
  const response = await FetchLatestStatsByDebateId(debateId, {
    statsRepository
  });

  const statsSerializer = new StatsSerializer();
  return statsSerializer.serialize(response);
}

async function updateStats(inputs) {
  // Inputs
  const { debateId, posts, pageviews, signups, reactions } = inputs;

  // Treatment
  const response = await UpdateStats(debateId, posts, pageviews, signups, reactions, {
    statsRepository
  });

  const statsSerializer = new StatsSerializer();
  return statsSerializer.serialize(response);
}

async function createStats(inputs) {
  // Inputs
  const {   
    id,
    debateId,
    shares,
    signups,
    reactions,
    pageviews,
    posts,
    timestamp 
  } = inputs;

  // Treatment
  const response = await CreateStats(id, debateId, shares, signups, reactions, pageviews, posts, timestamp, {
    statsRepository
  });

  const statsSerializer = new StatsSerializer();
  return statsSerializer.serialize(response);
}

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

async function fetchVisitors(inputs) {
  // Inputs
  const { id, debateId, trackingId } = inputs;

  // Treatment
  const response = await FetchVisitors(id, debateId, trackingId, {
    httpRequester
  });

  const visitorSerializer = new VisitorSerializer();
  return visitorSerializer.serialize(response);
}

async function fetchDevices(inputs) {
  // Inputs
  const { id, debateId, trackingId } = inputs;

  // Treatment
  const response = await FetchDevices(id, debateId, trackingId, {
    httpRequester
  });

  const devicesSerializer = new DevicesSerializer();
  return devicesSerializer.serialize(response);
}

async function fetchVisitorsByDayForMonth(inputs) {
  // Inputs
  const { id, debateId, trackingId, month } = inputs;

  // Treatment
  const response = await FetchVisitorsByDayForMonth(id, debateId, trackingId, month, {
    httpRequester
  });

  let forSerialiser = [];
  Object.values(response).forEach(value => {
    forSerialiser.push(value)
  });

  const visitorSerializer = new VisitorSerializer();
  return visitorSerializer.serialize(forSerialiser);
}

module.exports = {
  createSite,
  fetchAllStats,
  fetchVisitors,
  fetchStatsByDebateId,
  updateStats,
  createStats,
  fetchLatestStatsByDebateId,
  fetchDevices,
  fetchVisitorsByDayForMonth
};
