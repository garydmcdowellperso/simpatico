"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = require("lodash");

var _StatsController = _interopRequireDefault(require("../../services/stats/lib/controllers/StatsController"));

var _DebatesController = _interopRequireDefault(require("../../services/debates/lib/controllers/DebatesController"));

var _PostsController = _interopRequireDefault(require("../../services/posts/lib/controllers/PostsController"));

var _UsersController = _interopRequireDefault(require("../../services/iam/lib/controllers/UsersController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../../config');

var _require = require('../schemas/stats'),
    statsDefault = _require.statsDefault,
    statsSchema = _require.statsSchema,
    devicesSchema = _require.devicesSchema,
    visitorsSchema = _require.visitorsSchema;

var postsAndReactions = function postsAndReactions(posts) {
  var nreactions = 0;
  var nposts = 0;
  posts.map(function (post) {
    nreactions += post.likes + post.dislikes;
    nposts += 1;

    if (post.replies) {
      var values = postsAndReactions(post.replies);
      nreactions += values.nreactions;
      nposts += values.nposts;
    }
  });
  return {
    nreactions: nreactions,
    nposts: nposts
  };
};
/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */


var routes = async function routes(fastify) {
  fastify.get("/fetchUsersByDevice", {
    config: config,
    schema: {
      description: "fetches the devices used for across all debates on an account",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: devicesSchema
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#fetchUsersByDevice] Entering");

    var inputs = _objectSpread({}, request.query); // Get all the debates for an account


    var debates = await _DebatesController["default"].fetchAllDebates(inputs); // Create new the stats for each debate

    var finalDevices = [{
      label: 'Desktop',
      nb_uniq_visitors: 0,
      nb_visits: 0
    }, {
      label: 'Smartphone',
      nb_uniq_visitors: 0,
      nb_visits: 0
    }];
    var response = await debates.map(async function (debate) {
      inputs.debateId = debate.id;
      inputs.trackingId = debate.trackingId;
      var devices = await _StatsController["default"].fetchDevices(inputs);
      devices.map(function (device) {
        if (device.label === 'Desktop') {
          finalDevices[0].nb_visits += device.nb_visits;
        }

        if (device.label === 'Smartphone') {
          finalDevices[1].nb_visits += device.nb_visits;
        }
      });
      return;
    });
    await Promise.all(response);
    console.log('finalDevices', finalDevices);
    return finalDevices;
  });
  fastify.get("/fetchVisitorsByDayForMonth", {
    config: config,
    schema: {
      description: "fetches the visitors across all debates by day for the month specified",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        },
        month: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: visitorsSchema
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#fetchVisitorsByDayForMonth] Entering");

    var inputs = _objectSpread({}, request.query); // Get all the debates for an account


    var debates = await _DebatesController["default"].fetchAllDebates(inputs); // Create new the stats for each debate

    var finalVisitors = [];
    var response = await debates.map(async function (debate) {
      inputs.debateId = debate.id;
      inputs.trackingId = debate.trackingId;
      var visitors = await _StatsController["default"].fetchVisitorsByDayForMonth(inputs);
      finalVisitors.push({
        label: debate.name,
        data: visitors
      });
      return;
    });
    await Promise.all(response);
    return finalVisitors;
  });
  fastify.get("/createStats", {
    config: config,
    schema: {
      description: "creates daily statistics for an account",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: statsSchema
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#createStats] Entering");

    var inputs = _objectSpread({}, request.query);

    var timestamp = (0, _moment["default"])().format("X"); // Get all the debates for an account

    var debates = await _DebatesController["default"].fetchAllDebates(inputs); // Create new the stats for each debate

    var response = await debates.map(async function (debate) {
      inputs.debateId = debate.id;
      inputs.trackingId = debate.trackingId;
      inputs.timestamp = timestamp; // Get last recorded stats

      var stats = await _StatsController["default"].fetchLatestStatsByDebateId(inputs);

      if (!stats || stats.length === 0) {
        // First time creation
        stats.push(statsDefault);
      } // Use last stats as a reference for the new one


      if (stats) {
        var newStats = _objectSpread({}, stats[0]); // Get all the posts made


        var posts = await _PostsController["default"].fetchPosts(inputs); // Reactions

        var _postsAndReactions = postsAndReactions(posts),
            nreactions = _postsAndReactions.nreactions,
            nposts = _postsAndReactions.nposts;

        newStats.posts.value = nposts;
        var diff = nposts - stats[0].posts.value;
        var growth = (diff / stats[0].posts.value * 100).toString();
        newStats.posts.percentage = "".concat(growth, "%");
        newStats.reactions.value = nreactions;
        diff = nreactions - stats[0].reactions.value;
        growth = (diff / stats[0].reactions.value * 100).toString();
        newStats.reactions.percentage = "".concat(growth, "%"); // Get all the visitors

        var visitors = await _StatsController["default"].fetchVisitors(inputs);
        newStats.pageviews.value = visitors.nb_visits;
        diff = visitors.nb_visits - stats[0].pageviews.value;
        growth = (diff / stats[0].pageviews.value * 100).toString();
        newStats.pageviews.percentage = "".concat(growth, "%"); // Get all new accounts

        var users = await _UsersController["default"].fetchUsers(inputs);
        newStats.signups.value = users.length;
        diff = users.length - stats[0].signups.value;
        growth = (diff / stats[0].signups.value * 100).toString();
        newStats.signups.percentage = "".concat(growth, "%"); // Create it

        inputs.posts = newStats.posts;
        inputs.pageviews = newStats.pageviews;
        inputs.signups = newStats.signups;
        inputs.reactions = newStats.reactions;
        inputs.shares = newStats.shares;
        await _StatsController["default"].createStats(inputs);
        return newStats;
      }
    });
    var replies = await Promise.all(response);
    return replies;
  });
  fastify.get("/fetchStats", {
    config: config,
    schema: {
      description: "fetches statistics for an account",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: statsSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#fetchStats] Entering");

    var inputs = _objectSpread({}, request.query); // Get all the debates for an account


    var debates = await _DebatesController["default"].fetchAllDebates(inputs);
    var previous = (0, _lodash.cloneDeep)(statsDefault);
    var finalStats = (0, _lodash.cloneDeep)(statsDefault);
    var current = await debates.map(async function (debate) {
      inputs.debateId = debate.id;
      inputs.trackingId = debate.trackingId; // Get last recorded stats

      var stats = await _StatsController["default"].fetchLatestStatsByDebateId(inputs);
      console.log('stats', stats);

      if (stats && stats.length > 0) {
        // Nothing yet so return default
        finalStats.posts.value += stats[0].posts.value;
        finalStats.pageviews.value += stats[0].pageviews.value;
        finalStats.reactions.value += stats[0].reactions.value;
        finalStats.signups.value += stats[0].signups.value;
        finalStats.shares.value += stats[0].shares.value;

        if (stats[1]) {
          previous.posts.value += stats[1].posts.value;
          previous.pageviews.value += stats[1].pageviews.value;
          previous.reactions.value += stats[1].reactions.value;
          previous.signups.value += stats[1].signups.value;
          previous.shares.value += stats[1].shares.value;
        }
      }

      return;
    });
    await Promise.all(current);

    if (previous.posts.value > 0) {
      var diff = finalStats.posts.value - previous.posts.value;
      var growth = (diff / previous.posts.value * 100).toString();
      finalStats.posts.percentage = "".concat(growth, "%");
    } else {
      finalStats.posts.percentage = "0%";
    }

    if (previous.pageviews.value > 0) {
      var _diff = finalStats.pageviews.value - previous.pageviews.value;

      var _growth = (_diff / previous.pageviews.value * 100).toString();

      finalStats.pageviews.percentage = "".concat(_growth, "%");
    } else {
      finalStats.pageviews.percentage = "0%";
    }

    if (previous.reactions.value > 0) {
      var _diff2 = finalStats.reactions.value - previous.reactions.value;

      var _growth2 = (_diff2 / previous.reactions.value * 100).toString();

      finalStats.reactions.percentage = "".concat(_growth2, "%");
    } else {
      finalStats.reactions.percentage = "0%";
    }

    if (previous.signups.value > 0) {
      var _diff3 = finalStats.signups.value - previous.signups.value;

      var _growth3 = (_diff3 / previous.signups.value * 100).toString();

      finalStats.signups.percentage = "".concat(_growth3, "%");
    } else {
      finalStats.signups.percentage = "0%";
    }

    if (previous.shares.value > 0) {
      var _diff4 = finalStats.shares.value - previous.shares.value;

      var _growth4 = (_diff4 / previous.shares.value * 100).toString();

      finalStats.shares.percentage = "".concat(_growth4, "%");
    } else {
      finalStats.shares.percentage = "0%";
    }

    return finalStats;
  });
};

module.exports = routes;