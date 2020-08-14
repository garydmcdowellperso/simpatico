"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _AccountsController = _interopRequireDefault(require("../../services/accounts/lib/controllers/AccountsController"));

var _UsersController = _interopRequireDefault(require("../../services/iam/lib/controllers/UsersController"));

var _EmailController = _interopRequireDefault(require("../../services/email/lib/controllers/EmailController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fs = require('fs');

var shell = require('shelljs');

var config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.post("/createAccount", {
    config: config,
    schema: {
      description: "creates a new account and admin user",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          account: {
            type: 'string'
          },
          firstname: {
            type: 'string'
          },
          lastname: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          },
          role: {
            type: 'string'
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
    fastify.log.info(request.body, "[src#api#createAccount] Entering");

    var inputs = _objectSpread({}, request.body); // Create the account


    var responseAccount = await _AccountsController["default"].createAccount(inputs);
    console.log('responseAccount', responseAccount); // Create the admin user for the account

    var newInputs = {
      accountId: responseAccount.id,
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      email: request.body.email,
      password: request.body.password,
      role: request.body.role
    };
    var responseUser = await _UsersController["default"].createUser(newInputs); // Send activattion email

    var inputsEmali = {
      template: {
        type: "test",
        language: "en-US",
        name: "creation"
      },
      email: {
        to: request.body.email,
        from: "noreply@simpatico.cloud",
        subject: "Activate your account"
      },
      substitutions: {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        url: "https://49646ddc7fe9.ngrok.io/api/v1/activate?token=".concat(responseUser.token)
      }
    };
    await _EmailController["default"].sendEmail(inputsEmali);
    return {
      status: 'ok',
      reason: ''
    };
  });
  fastify.get("/fetchAccount", {
    config: config,
    schema: {
      description: "fetches account info",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: {
              type: "number"
            },
            name: {
              type: "string"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.query, "[src#api#fetchAccount] Entering");
    var inputs = {
      id: request.query.id
    }; // Create the account

    var responseAccount = await _AccountsController["default"].fetchAccount(inputs);
    console.log('responseAccount', responseAccount);
    return {
      id: responseAccount.id,
      name: responseAccount.name
    };
  });
  fastify.put("/updateAccountInfo", {
    config: config,
    schema: {
      description: "updates the account information",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'number'
          },
          name: {
            type: 'string'
          }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            id: {
              type: "number"
            },
            name: {
              type: "string"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateAccountInfo] Entering");
    console;

    var inputs = _objectSpread({}, request.body); // Update the account info


    var response = await _AccountsController["default"].updateAccountInfo(inputs);
    return response;
  });
};

module.exports = routes;