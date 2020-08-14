"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _StatsSerializer = _interopRequireDefault(require("../serializers/StatsSerializer"));

var _VisitorSerializer = _interopRequireDefault(require("../serializers/VisitorSerializer"));

var _DevicesSerializer = _interopRequireDefault(require("../serializers/DevicesSerializer"));

var _FetchAllStats = _interopRequireDefault(require("../use_cases/FetchAllStats"));

var _FetchVisitors = _interopRequireDefault(require("../use_cases/FetchVisitors"));

var _FetchDevices = _interopRequireDefault(require("../use_cases/FetchDevices"));

var _UpdateStats = _interopRequireDefault(require("../use_cases/UpdateStats"));

var _CreateStats = _interopRequireDefault(require("../use_cases/CreateStats"));

var _FetchStatsByDebateId = _interopRequireDefault(require("../use_cases/FetchStatsByDebateId"));

var _FetchLatestStatsByDebateId = _interopRequireDefault(require("../use_cases/FetchLatestStatsByDebateId"));

var _FetchVisitorsByDayForMonth = _interopRequireDefault(require("../use_cases/FetchVisitorsByDayForMonth"));

var _StatsRepository = _interopRequireDefault(require("../repositories/StatsRepository"));

var _HTTPRequester = _interopRequireDefault(require("../comms/HTTPRequester"));

var _StatsRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/StatsRepositoryMongo"));

var _HTTPRequesterAxios = _interopRequireDefault(require("../interface_adapters/http/HTTPRequesterAxios"));

var _array = require("core-js/fn/array");

var statsRepository = new _StatsRepository["default"](new _StatsRepositoryMongo["default"]());
var httpRequester = new _HTTPRequester["default"](new _HTTPRequesterAxios["default"]());

async function fetchStatsByDebateId(inputs) {
  // Inputs
  var debateId = inputs.debateId; // Treatment

  var response = await (0, _FetchStatsByDebateId["default"])(debateId, {
    statsRepository: statsRepository
  });
  var statsSerializer = new _StatsSerializer["default"]();
  return statsSerializer.serialize(response);
}

async function fetchLatestStatsByDebateId(inputs) {
  // Inputs
  var debateId = inputs.debateId; // Treatment

  var response = await (0, _FetchLatestStatsByDebateId["default"])(debateId, {
    statsRepository: statsRepository
  });
  var statsSerializer = new _StatsSerializer["default"]();
  return statsSerializer.serialize(response);
}

async function updateStats(inputs) {
  // Inputs
  var debateId = inputs.debateId,
      posts = inputs.posts,
      pageviews = inputs.pageviews,
      signups = inputs.signups,
      reactions = inputs.reactions; // Treatment

  var response = await (0, _UpdateStats["default"])(debateId, posts, pageviews, signups, reactions, {
    statsRepository: statsRepository
  });
  var statsSerializer = new _StatsSerializer["default"]();
  return statsSerializer.serialize(response);
}

async function createStats(inputs) {
  // Inputs
  var id = inputs.id,
      debateId = inputs.debateId,
      shares = inputs.shares,
      signups = inputs.signups,
      reactions = inputs.reactions,
      pageviews = inputs.pageviews,
      posts = inputs.posts,
      timestamp = inputs.timestamp; // Treatment

  var response = await (0, _CreateStats["default"])(id, debateId, shares, signups, reactions, pageviews, posts, timestamp, {
    statsRepository: statsRepository
  });
  var statsSerializer = new _StatsSerializer["default"]();
  return statsSerializer.serialize(response);
}

async function fetchAllStats(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _FetchAllStats["default"])(id, {
    statsRepository: statsRepository
  });
  var statsSerializer = new _StatsSerializer["default"]();
  return statsSerializer.serialize(response);
}

async function fetchVisitors(inputs) {
  // Inputs
  var id = inputs.id,
      debateId = inputs.debateId,
      trackingId = inputs.trackingId; // Treatment

  var response = await (0, _FetchVisitors["default"])(id, debateId, trackingId, {
    httpRequester: httpRequester
  });
  var visitorSerializer = new _VisitorSerializer["default"]();
  return visitorSerializer.serialize(response);
}

async function fetchDevices(inputs) {
  // Inputs
  var id = inputs.id,
      debateId = inputs.debateId,
      trackingId = inputs.trackingId; // Treatment

  var response = await (0, _FetchDevices["default"])(id, debateId, trackingId, {
    httpRequester: httpRequester
  });
  var devicesSerializer = new _DevicesSerializer["default"]();
  return devicesSerializer.serialize(response);
}

async function fetchVisitorsByDayForMonth(inputs) {
  // Inputs
  var id = inputs.id,
      debateId = inputs.debateId,
      trackingId = inputs.trackingId,
      month = inputs.month; // Treatment

  var response = await (0, _FetchVisitorsByDayForMonth["default"])(id, debateId, trackingId, month, {
    httpRequester: httpRequester
  });
  var forSerialiser = [];
  Object.values(response).forEach(function (value) {
    forSerialiser.push(value);
  });
  var visitorSerializer = new _VisitorSerializer["default"]();
  return visitorSerializer.serialize(forSerialiser);
}

module.exports = {
  fetchAllStats: fetchAllStats,
  fetchVisitors: fetchVisitors,
  fetchStatsByDebateId: fetchStatsByDebateId,
  updateStats: updateStats,
  createStats: createStats,
  fetchLatestStatsByDebateId: fetchLatestStatsByDebateId,
  fetchDevices: fetchDevices,
  fetchVisitorsByDayForMonth: fetchVisitorsByDayForMonth
};