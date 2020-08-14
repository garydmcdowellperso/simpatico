"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _PageController = _interopRequireDefault(require("../../services/page/lib/controllers/PageController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.get("/fetchAllPagesForDebate", {
    config: config,
    schema: {
      description: "fetches all the pages associated to a debate",
      tags: ["api"],
      querystring: {
        debateId: {
          type: "number"
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchAllPagesForDebate] Entering");
    var inputs = {
      debateId: request.query.debateId
    };
    var response = await _PageController["default"].fetchAllPagesForDebate(inputs);
    return response;
  });
  fastify.get("/fetchAllPages", {
    config: config,
    schema: {
      description: "fetches all the pages",
      tags: ["api"]
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchAllPages] Entering");
    var response = await _PageController["default"].fetchAllPages();
    return response;
  });
  fastify.get("/fetchPage", {
    config: config,
    schema: {
      description: "fetches a specific page",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchPage] Entering");
    var inputs = {
      id: request.query.id
    };
    var response = await _PageController["default"].fetchPage(inputs);
    return response;
  });
  fastify.post("/createPage", {
    config: config,
    schema: {
      description: "creates a new page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          debateId: {
            type: 'number'
          },
          type: {
            type: 'string'
          },
          url: {
            type: 'string'
          },
          languages: {
            type: 'object',
            properties: {
              english: {
                type: 'object'
              },
              french: {
                type: 'object'
              },
              spanish: {
                type: 'object'
              }
            }
          }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            status: {
              type: "string"
            },
            reason: {
              type: "string"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#createPage] Entering");

    var inputs = _objectSpread({}, request.body); // Create the page


    var response = await _PageController["default"].createPage(inputs);
    return {
      status: 'ok',
      reason: ''
    };
  });
  fastify.put("/updatePage", {
    config: config,
    schema: {
      description: "updates a new page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          id: {
            type: 'number'
          },
          type: {
            type: 'string'
          },
          url: {
            type: 'string'
          },
          languages: {
            type: 'object',
            properties: {
              english: {
                type: 'object'
              },
              french: {
                type: 'object'
              },
              spanish: {
                type: 'object'
              }
            }
          }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            status: {
              type: "string"
            },
            reason: {
              type: "string"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updatePage] Entering");

    var inputs = _objectSpread({}, request.body); // First find the page


    var page = await _PageController["default"].fetchPage(inputs);

    var inputs2 = _objectSpread({}, request.body, {
      debateId: page.debateId
    }); // Update the page


    var response = await _PageController["default"].updatePage(inputs2);
    return {
      status: 'ok',
      reason: ''
    };
  });
};

module.exports = routes;