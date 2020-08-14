"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _UsersController = _interopRequireDefault(require("../../services/iam/lib/controllers/UsersController"));

var _EmailController = _interopRequireDefault(require("../../services/email/lib/controllers/EmailController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.post("/loginRequest", {
    config: config,
    schema: {
      description: "login to a debate",
      tags: ["api"],
      summary: "login to a debate",
      body: {
        type: 'object',
        properties: {
          email: {
            type: 'string'
          },
          password: {
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
            token: {
              type: "string"
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      body: request.body
    }, "[src#api#iam#loginRequest] Entering");

    var inputs = _objectSpread({}, request.body);

    try {
      var response = await _UsersController["default"].login(inputs);
      reply.setCookie("simpatico", response.token, {
        httpOnly: true,
        secure: true,
        path: "/",
        domain: "49646ddc7fe9.ngrok.io"
      });
      reply.send({
        status: 'ok',
        token: response.token
      });
    } catch (error) {
      throw error;
    }
  });
  fastify.put("/updateUserInfo", {
    config: config,
    schema: {
      description: "updates user information",
      tags: ["api"],
      summary: "updates user information",
      body: {
        type: 'object',
        properties: {
          id: {
            type: "number"
          },
          firstName: {
            type: "string"
          },
          lastName: {
            type: "string"
          },
          email: {
            type: "string"
          },
          bio: {
            type: "string"
          },
          avatar: {
            type: "string"
          },
          password: {
            type: "string"
          },
          confirmPassword: {
            type: "string"
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
            "first-name": {
              type: "string"
            },
            "last-name": {
              type: "string"
            },
            email: {
              type: "string"
            },
            bio: {
              type: "string"
            },
            avatar: {
              type: "string"
            },
            score: {
              type: "number"
            },
            badge: {
              type: "number"
            },
            debates: {
              type: "array",
              items: {
                type: "number"
              }
            },
            role: {
              type: "array",
              items: {
                type: "string"
              }
            },
            likes: {
              type: "array",
              items: {
                type: "object"
              }
            },
            dislikes: {
              type: "array",
              items: {
                type: "object"
              }
            },
            contributions: {
              type: "array",
              items: {
                type: "object"
              }
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      body: request.body
    }, "[src#api#iam#updateUserInfo] Entering");

    var inputs = _objectSpread({}, request.body);

    var user = await _UsersController["default"].updateUserInfo(inputs);
    return user;
  });
  fastify.post("/loginRequestAdmin", {
    config: config,
    schema: {
      description: "login to admin",
      tags: ["api"],
      summary: "login to admin",
      body: {
        type: 'object',
        properties: {
          email: {
            type: 'string'
          },
          password: {
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
            token: {
              type: "string"
            },
            accountId: {
              type: "number"
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      body: request.body
    }, "[src#api#iam#loginRequestAdmin] Entering");

    var inputs = _objectSpread({}, request.body);

    try {
      var response = await _UsersController["default"].login(inputs);
      var user = await _UsersController["default"].fetchUserByEmail(inputs);
      var roles;

      if (user.role) {
        roles = user.role.map(function (role, idx) {
          if (role === 'administrator') {
            return 'found';
          }
        });

        if (roles.indexOf('found') > -1) {
          reply.setCookie("simpatico", response.token, {
            httpOnly: true,
            secure: true,
            path: "/",
            domain: "49646ddc7fe9.ngrok.io"
          });
          reply.send({
            status: 'ok',
            token: response.token,
            accountId: user.accountId
          });
        } else {
          // Not correct role
          throw new Error("User does not have role");
        }
      } else {
        throw new Error("User does not have role");
      }
    } catch (error) {
      throw error;
    }
  });
  fastify.post("/createUser", {
    config: config,
    schema: {
      description: "creates a user for a debate",
      tags: ["api"],
      summary: "creates a user for a debate",
      body: {
        type: 'object',
        properties: {
          debateId: {
            type: 'number'
          },
          accountId: {
            type: 'number'
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
  }, async function (request, reply) {
    fastify.log.info({
      body: request.body
    }, "[src#api#iam#createUser] Entering");

    var inputs = _objectSpread({}, request.body);

    var response = await _UsersController["default"].createUser(inputs); // Send activattion email

    var inputsEmali = {
      template: {
        type: "account",
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
        url: "https://49646ddc7fe9.ngrok.io/api/v1/activate?token=".concat(response.token)
      }
    };
    await _EmailController["default"].sendEmail(inputsEmali);
    return {
      status: 'ok',
      reason: ""
    };
  });
  fastify.get("/login/google/callback", {
    config: config,
    schema: {
      description: "google social media callback url",
      tags: ["api"],
      summary: "google oauth callback url",
      querystring: {
        state: {
          type: "string"
        },
        scope: {
          type: "string"
        },
        prompt: {
          type: "string"
        },
        authuser: {
          type: "string"
        },
        session_state: {
          type: "string"
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      query: request.query
    }, "[src#api#login/google/callback] Entering");
    var authCodeResponse = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
    var responseUserInfo = await fastify.httpclient.request("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: "Bearer ".concat(authCodeResponse.access_token)
      }
    });
    var responseUserInfoJSON = JSON.parse(responseUserInfo.data);
    console.log("responseUserInfo", JSON.parse(responseUserInfo.data));
    var inputs = {
      firstName: responseUserInfoJSON.given_name,
      lastName: responseUserInfoJSON.family_name,
      email: responseUserInfoJSON.email
    };
    var responseCreate = await _UsersController["default"].createOrLogin(inputs);
    reply.setCookie("simpatico", responseCreate.token, {
      httpOnly: true,
      secure: true,
      path: "/",
      domain: "f84bf21a.ngrok.io"
    });
    reply.redirect("/?token=".concat(responseCreate.token));
  });
  fastify.get("/activate", {
    config: config,
    schema: {
      description: "activates an account",
      tags: ["api"],
      summary: "activates an account",
      querystring: {
        token: {
          type: "string"
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      query: request.query
    }, "[src#api#activate] Entering");

    var inputs = _objectSpread({}, request.query);

    var responseActivate = await _UsersController["default"].activate(inputs);
    reply.setCookie("simpatico", responseActivate.token, {
      httpOnly: true,
      secure: true,
      path: "/",
      domain: "49646ddc7fe9.ngrok.io"
    });
    reply.redirect("/?token=".concat(responseActivate.token));
  });
  fastify.post("/verifyToken", {
    config: config,
    schema: {
      description: "verify a provided token",
      tags: ["api"],
      body: {
        type: "object",
        properties: {
          token: {
            type: "string"
          },
          role: {
            type: "string"
          }
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            isValidToken: {
              type: "boolean"
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      body: request.body
    }, "[src#api#verifyToken] Entering"); // Do I really like it, is it, is it wicked ?

    var inputs = _objectSpread({}, request.body);

    var isValidToken = await _UsersController["default"].verifyToken(inputs);

    if (isValidToken) {
      reply.setCookie("simpatico", request.body.token, {
        httpOnly: true,
        secure: true,
        path: "/"
      }).send({
        isValidToken: isValidToken
      });
    }

    if (!isValidToken) {
      reply.send({
        isValidToken: isValidToken
      });
    }
  });
  fastify.get("/fetchUserInfoAdmin", {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: "get user info as admin for account",
      tags: ["api"],
      querystring: {
        accountId: {
          type: "number"
        },
        userId: {
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
            "first-name": {
              type: "string"
            },
            "last-name": {
              type: "string"
            },
            email: {
              type: "string"
            },
            bio: {
              type: "string"
            },
            avatar: {
              type: "string"
            },
            score: {
              type: "number"
            },
            badge: {
              type: "number"
            },
            debates: {
              type: "array",
              items: {
                type: "number"
              }
            },
            role: {
              type: "array",
              items: {
                type: "string"
              }
            },
            likes: {
              type: "array",
              items: {
                type: "object"
              }
            },
            dislikes: {
              type: "array",
              items: {
                type: "object"
              }
            },
            contributions: {
              type: "array",
              items: {
                type: "object"
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#fetchUserInfoAdmin] Entering");

    var inputs = _objectSpread({}, request.query);

    var user = await _UsersController["default"].fetchUserAdmin(inputs);
    return user;
  });
  fastify.get("/fetchUserInfo", {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: "get user info, protected by token",
      tags: ["api"],
      response: {
        200: {
          type: "object",
          properties: {
            id: {
              type: "number"
            },
            "first-name": {
              type: "string"
            },
            "last-name": {
              type: "string"
            },
            email: {
              type: "string"
            },
            bio: {
              type: "string"
            },
            avatar: {
              type: "string"
            },
            score: {
              type: "number"
            },
            badge: {
              type: "number"
            },
            accountId: {
              type: "number"
            },
            likes: {
              type: "array",
              items: {
                type: "object"
              }
            },
            dislikes: {
              type: "array",
              items: {
                type: "object"
              }
            },
            contributions: {
              type: "array",
              items: {
                type: "object"
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user
    }, "[src#api#fetchUserInfo] Entering");
    var inputs = {
      uid: request.user.uid
    };
    var user = await _UsersController["default"].fetchUser(inputs);
    return user;
  });
  fastify.get("/fetchUsers", {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: "get all user info for an account, protected by token",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "number"
              },
              "first-name": {
                type: "string"
              },
              "last-name": {
                type: "string"
              },
              email: {
                type: "string"
              },
              bio: {
                type: "string"
              },
              avatar: {
                type: "string"
              },
              score: {
                type: "number"
              },
              badge: {
                type: "number"
              },
              activated: {
                type: "boolean"
              },
              role: {
                type: "array",
                items: {
                  type: "string"
                }
              },
              debates: {
                type: "array",
                items: {
                  type: "number"
                }
              },
              likes: {
                type: "array",
                items: {
                  type: "object"
                }
              },
              dislikes: {
                type: "array",
                items: {
                  type: "object"
                }
              },
              contributions: {
                type: "array",
                items: {
                  type: "object"
                }
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#fetchUsers] Entering");

    var inputs = _objectSpread({}, request.query);

    var users = await _UsersController["default"].fetchUsers(inputs);
    return users;
  });
};

module.exports = routes;