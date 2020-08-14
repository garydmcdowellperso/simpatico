"use strict";

var config = require('../../config');
/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */


var routes = async function routes(fastify) {
  fastify.get("/ping", {
    config: config,
    schema: {
      description: "tests if service is alive",
      tags: ['api'],
      summary: 'tests if service is alive',
      response: {
        200: {
          type: 'object',
          properties: {
            response: {
              type: 'string'
            }
          }
        }
      }
    }
  }, async function () {
    fastify.log.debug('[src#api#ping] Entering');
    var result = await fastify.countEvents();

    if (result > 0) {
      return {
        response: 'ok'
      };
    }

    throw new Error('Not ok');
  });
};

module.exports = routes;