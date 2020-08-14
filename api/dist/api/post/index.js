"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _uuid = require("uuid");

var _PostsController = _interopRequireDefault(require("../../services/posts/lib/controllers/PostsController"));

var _UsersController = _interopRequireDefault(require("../../services/iam/lib/controllers/UsersController"));

var _EmailController = _interopRequireDefault(require("../../services/email/lib/controllers/EmailController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../../config');

var _require = require('../schemas/post'),
    postSchema = _require.postSchema;

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.post('/createPost', {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: 'creates a post',
      tags: ['api'],
      body: {
        type: 'object',
        properties: {
          title: {
            type: 'string'
          },
          contents: {
            type: 'string'
          },
          module: {
            type: 'number'
          },
          accountId: {
            type: 'number'
          }
        }
      },
      response: {
        200: postSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#createPost] Entering");
    var timestamp = (0, _moment["default"])().format("X");

    var inputs = _objectSpread({}, request.body, {
      timestamp: timestamp,
      user: request.user.uid
    });

    var response = await _PostsController["default"].createPost(inputs); // Send off notifications if we have mentions

    var regex = /(data-mention data-value=\"[a-zA-Z0-9]*\")+/gm;
    var found = request.body.contents.match(regex);

    if (found && found.length > 0) {
      // Send notification email
      var inputsEmali = {
        template: {
          type: "post",
          language: "en-US",
          name: "mention"
        },
        email: {
          to: "garydmcdowell@gmail.com",
          from: "noreply@simpatico.cloud",
          subject: "You have been mentioned in a post"
        },
        substitutions: {
          firstname: "Gary",
          lastname: "McDowell",
          url: "https://49646ddc7fe9.ngrok.io/thread/?module=".concat(request.body.module, "#").concat(response.id)
        }
      };
      await _EmailController["default"].sendEmail(inputsEmali);
    } // Replace user which is an ID with a name


    var userinputs = {
      uid: response.user
    };
    var user = await _UsersController["default"].fetchUser(userinputs);
    response.uid = response.user;
    response.user = user["first-name"];
    response.avatar = user.avatar;
    return response;
  });
  fastify.post('/likePost', {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: 'likes a post',
      tags: ['api'],
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        }
      },
      response: {
        200: postSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#likePost] Entering");

    var inputs = _objectSpread({}, request.body);

    var response = await _PostsController["default"].likePost(inputs); // Replace user which is an ID with a name

    var userinputs = {
      uid: request.user.uid
    };
    var user = await _UsersController["default"].fetchUser(userinputs);
    response.uid = request.user;
    response.user = user["first-name"];
    response.avatar = user.avatar;
    return response;
  });
  fastify.post('/dislikePost', {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: 'dislikes a post',
      tags: ['api'],
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        }
      },
      response: {
        200: postSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#dislikePost] Entering");

    var inputs = _objectSpread({}, request.body);

    var response = await _PostsController["default"].dislikePost(inputs); // Replace user which is an ID with a name

    var userinputs = {
      uid: request.user.uid
    };
    var user = await _UsersController["default"].fetchUser(userinputs);
    response.uid = request.user.uid;
    response.user = user["first-name"];
    response.avatar = user.avatar;
    return response;
  });
  fastify.post('/updatePost', {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: 'updates a post',
      tags: ['api'],
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          contents: {
            type: 'string'
          }
        }
      },
      response: {
        200: postSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#updatePost] Entering");

    var inputs = _objectSpread({}, request.body, {
      uid: request.user.uid
    });

    var response = await _PostsController["default"].updatePost(inputs); // Replace user which is an ID with a name

    var userinputs = {
      uid: request.user.uid
    };
    var user = await _UsersController["default"].fetchUser(userinputs);
    response.uid = request.user.uid;
    response.user = user["first-name"];
    response.avatar = user.avatar;
    return response;
  });
  fastify["delete"]('/deletePost', {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: 'deletes a post',
      tags: ['api'],
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          }
        }
      },
      response: {
        200: postSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#deletePost] Entering");

    var inputs = _objectSpread({}, request.body, {
      uid: request.user.uid
    });

    var response = await _PostsController["default"].deletePost(inputs); // Replace user which is an ID with a name

    var userinputs = {
      uid: request.user.uid
    };
    var user = await _UsersController["default"].fetchUser(userinputs);
    response.uid = request.user.uid;
    response.user = user["first-name"];
    response.avatar = user.avatar;
    return response;
  });
  fastify.post("/replyPost", {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: "replies to a post",
      tags: ["api"],
      body: {
        type: "object",
        properties: {
          id: {
            type: "string"
          },
          contents: {
            type: "string"
          }
        }
      },
      response: {
        200: postSchema
      }
    }
  }, async function (request) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#replyPost] Entering");
    var timestamp = (0, _moment["default"])().format("X");

    var inputs = _objectSpread({}, request.body, {
      timestamp: timestamp,
      user: request.user.uid
    });

    var response = await _PostsController["default"].replyPost(inputs); // Replace user which is an ID with a name

    var userinputs = {
      uid: request.user.uid
    };
    var user = await _UsersController["default"].fetchUser(userinputs);
    response.user = user["first-name"];
    response.avatar = user.avatar;

    if (response.replies) {
      var replies = await response.replies.map(async function (reply) {
        var userInputs = {
          uid: reply.user
        };
        var replyUser = await _UsersController["default"].fetchUser(userInputs);
        reply.user = replyUser["first-name"];
        reply.avatar = replyUser.avatar;
        return reply;
      });
      await Promise.all(replies);
    }

    return response;
  });
  fastify.get("/fetchPostsForModule", {
    config: config,
    schema: {
      description: "fetches the posts for a given thread",
      tags: ["api"],
      querystring: {
        module: {
          type: "number"
        },
        page: {
          type: "number"
        },
        sort: {
          type: "string"
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            page: {
              type: "number"
            },
            more: {
              type: "boolean"
            },
            posts: {
              type: "array",
              items: postSchema
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchPostsForModule] Entering");
    var inputs = {
      module: request.query.module,
      page: request.query.page,
      sort: request.query.sort
    };
    var response = await _PostsController["default"].fetchPostsForModule(inputs);
    var count = await _PostsController["default"].countPostsForModule(inputs);
    var more = false;

    if (response.length > 0) {
      if (request.query.page * 5 < count) {
        more = true;
      }
    }

    if (response.length > 0) {
      var resps = await response.map(async function (resp) {
        if (resp.replies === null) {
          delete resp.replies;
        } // Add name of user 


        var userinputs = {
          uid: resp.user
        };
        var user = await _UsersController["default"].fetchUser(userinputs);
        resp.uid = resp.user;
        resp.user = user["first-name"];
        resp.avatar = user.avatar;

        if (resp.replies) {
          var replies = await resp.replies.map(async function (reply) {
            var userInputs = {
              uid: reply.user
            };
            var replyUser = await _UsersController["default"].fetchUser(userInputs);
            resp.uid = resp.user;
            reply.user = replyUser["first-name"];
            resp.avatar = replyUser.avatar;
            return reply;
          });
          await Promise.all(replies);
        }

        return resp;
      });
      var posts = await Promise.all(resps);
      var final = {
        more: more,
        page: request.query.page,
        posts: posts
      };
      return final;
    }

    return [];
  });
  fastify.get("/fetchAllPostsForModule", {
    config: config,
    schema: {
      description: "fetches the posts for a given module",
      tags: ["api"],
      querystring: {
        module: {
          type: "number"
        },
        sort: {
          type: "string"
        }
      },
      response: {
        200: {
          type: "object",
          properties: {
            posts: {
              type: "array",
              items: postSchema
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchAllPostsForModule] Entering");
    var inputs = {
      module: request.query.module,
      sort: request.query.sort
    };
    var response = await _PostsController["default"].fetchAllPostsForModule(inputs);

    if (response.length > 0) {
      var resps = await response.map(async function (resp) {
        if (resp.replies === null) {
          delete resp.replies;
        } // Add name of user 


        var userinputs = {
          uid: resp.user
        };
        var user = await _UsersController["default"].fetchUser(userinputs);
        resp.uid = resp.user;
        resp.user = user["first-name"];
        resp.avatar = user.avatar;

        if (resp.replies) {
          var replies = await resp.replies.map(async function (reply) {
            var userInputs = {
              uid: reply.user
            };
            var replyUser = await _UsersController["default"].fetchUser(userInputs);
            resp.uid = resp.user;
            reply.user = replyUser["first-name"];
            resp.avatar = replyUser.avatar;
            return reply;
          });
          await Promise.all(replies);
        }

        return resp;
      });
      var posts = await Promise.all(resps);
      var final = {
        posts: posts
      };
      return final;
    }

    return [];
  });
  fastify.get("/fetchPosts", {
    config: config,
    schema: {
      description: "fetches the posts for an account (across all debates)",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: postSchema
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchPosts] Entering");

    var inputs = _objectSpread({}, request.query);

    var response = await _PostsController["default"].fetchPosts(inputs);

    if (response.length > 0) {
      var resps = await response.map(async function (resp) {
        if (resp.replies == null) {
          delete resp.replies;
        } // Add name of user 


        var userinputs = {
          uid: resp.user
        };
        var user = await _UsersController["default"].fetchUser(userinputs);
        resp.uid = resp.user;
        resp.user = user["first-name"];
        resp.avatar = user.avatar;

        if (resp.replies) {
          var replies = await resp.replies.map(async function (reply) {
            var userInputs = {
              uid: reply.user
            };
            var replyUser = await _UsersController["default"].fetchUser(userInputs);
            resp.uid = resp.user;
            reply.user = replyUser["first-name"];
            resp.avatar = user.avatar;
            return reply;
          });
          await Promise.all(replies);
        }

        return resp;
      });
      var final = await Promise.all(resps);
      return final;
    }

    return [];
  });
  fastify.get("/fetchTopContributors", {
    config: config,
    schema: {
      description: "fetches the users who have made the most posts for an account",
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
              user: {
                type: "string"
              },
              module: {
                type: "number"
              },
              avatar: {
                type: "string"
              },
              contributions: {
                type: "number"
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchTopContributors] Entering");

    var inputs = _objectSpread({}, request.query);

    var response = await _PostsController["default"].fetchTopContributors(inputs);

    if (response.length > 0) {
      var resps = await response.map(async function (resp) {
        if (resp.replies == null) {
          delete resp.replies;
        } // Add name of user 


        var userinputs = {
          uid: resp.id
        };
        var user = await _UsersController["default"].fetchUser(userinputs);
        resp.user = user["first-name"];
        resp.avatar = user.avatar;
        return resp;
      });
      var final = await Promise.all(resps);
      return final;
    }

    return [];
  });
  fastify.post('/exportPostsForModule', {
    config: config,
    preValidation: [fastify.authenticate],
    schema: {
      description: 'csv export of data, transferred by email',
      tags: ['api'],
      body: {
        type: 'object',
        properties: {
          module: {
            type: 'number'
          },
          fields: {
            type: 'object'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status: {
              type: 'string'
            },
            message: {
              type: 'string'
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    fastify.log.info({
      user: request.user,
      body: request.body
    }, "[src#api#exportPostsForModule] Entering");

    var inputs = _objectSpread({}, request.body);

    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({
      status: 'ok',
      message: 'processing'
    });
    inputs.sort = 'Sort Ascending';
    var response = await _PostsController["default"].fetchAllPostsForModule(inputs);

    if (response.length > 0) {
      var resps = await response.map(async function (resp) {
        if (resp.replies === null) {
          delete resp.replies;
        } // Add name of user 


        var userinputs = {
          uid: resp.user
        };
        var user = await _UsersController["default"].fetchUser(userinputs);
        resp.uid = resp.user;
        resp.user = user["first-name"];
        resp.avatar = user.avatar;

        if (resp.replies) {
          var replies = await resp.replies.map(async function (reply) {
            var userInputs = {
              uid: reply.user
            };
            var replyUser = await _UsersController["default"].fetchUser(userInputs);
            resp.uid = resp.user;
            reply.user = replyUser["first-name"];
            resp.avatar = replyUser.avatar;
            return reply;
          });
          await Promise.all(replies);
        }

        return resp;
      });
      var posts = await Promise.all(resps);
      console.log('posts', posts); // Serialize object to CSV

      var filename = (0, _uuid.v4)();
      await _PostsController["default"].serializePostToCSV(posts, request.body.fields, filename); // Send notification email

      var inputsEmali = {
        template: {
          type: "export",
          language: "en-US",
          name: "default"
        },
        email: {
          to: "garydmcdowell@gmail.com",
          from: "noreply@simpatico.cloud",
          subject: "Export ready"
        },
        substitutions: {
          firstname: "Gary",
          lastname: "McDowell"
        },
        attachment: "/tmp/".concat(filename, ".csv")
      };
      await _EmailController["default"].sendEmail(inputsEmali);
    }
  });
};

module.exports = routes;