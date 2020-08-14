"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _EmailController = _interopRequireDefault(require("../../services/email/lib/controllers/EmailController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fs = require('fs');

var config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.post("/sendEmail", {
    config: config,
    schema: {
      description: "sends an email",
      tags: ["api"],
      body: {
        type: "object",
        properties: {
          template: {
            type: "object",
            properties: {
              type: {
                type: 'string'
              },
              language: {
                type: 'string'
              },
              name: {
                type: 'string'
              }
            }
          },
          email: {
            type: "object",
            properties: {
              to: {
                type: 'string'
              },
              from: {
                type: 'string'
              },
              cc: {
                type: 'string'
              },
              bcc: {
                type: 'string'
              },
              subject: {
                type: 'string'
              }
            }
          },
          substitutions: {
            type: "object"
          }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            status: {
              type: "number"
            },
            reason: {
              type: 'string'
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#sendEmail] Entering");

    var inputs = _objectSpread({}, request.body);

    var response = await _EmailController["default"].sendEmail(inputs);
    return response;
  });
};

module.exports = routes;