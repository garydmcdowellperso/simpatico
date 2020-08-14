"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ModuleController = _interopRequireDefault(require("../../services/modules/lib/controllers/ModuleController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.post("/createModule", {
    config: config,
    schema: {
      description: "creates a new module",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          title: {
            type: 'object',
            properties: {
              en: {
                type: "string"
              },
              fr: {
                type: "string"
              },
              es: {
                type: "string"
              }
            }
          },
          help: {
            type: 'object',
            properties: {
              en: {
                type: "string"
              },
              fr: {
                type: "string"
              },
              es: {
                type: "string"
              }
            }
          },
          name: {
            type: 'string'
          },
          debateId: {
            type: 'number'
          },
          moduleType: {
            type: 'string'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: {
              type: "number"
            },
            name: {
              type: "string"
            },
            debateId: {
              type: "number"
            },
            moduleType: {
              type: "string"
            },
            title: {
              type: 'object',
              properties: {
                en: {
                  type: "string"
                },
                fr: {
                  type: "string"
                },
                es: {
                  type: "string"
                }
              }
            },
            help: {
              type: 'object',
              properties: {
                en: {
                  type: "string"
                },
                fr: {
                  type: "string"
                },
                es: {
                  type: "string"
                }
              }
            },
            inuse: {
              type: "boolean"
            },
            posts: {
              type: "number"
            },
            contributions: {
              type: "number"
            },
            participants: {
              type: "number"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#createModule] Entering");

    var inputs = _objectSpread({}, request.body); // Create the module


    var response = await _ModuleController["default"].createModule(inputs);
    return response;
  });
  fastify.get("/fetchAllModules", {
    config: config,
    schema: {
      description: "fetches all the modules",
      tags: ["api"],
      response: {
        200: {
          type: "array",
          items: {
            type: 'object',
            properties: {
              id: {
                type: "number"
              },
              name: {
                type: "string"
              },
              debateId: {
                type: "number"
              },
              moduleType: {
                type: "string"
              },
              title: {
                type: 'object',
                properties: {
                  en: {
                    type: "string"
                  },
                  fr: {
                    type: "string"
                  },
                  es: {
                    type: "string"
                  }
                }
              },
              help: {
                type: 'object',
                properties: {
                  en: {
                    type: "string"
                  },
                  fr: {
                    type: "string"
                  },
                  es: {
                    type: "string"
                  }
                }
              },
              inuse: {
                type: "boolean"
              },
              posts: {
                type: "number"
              },
              contributions: {
                type: "number"
              },
              participants: {
                type: "number"
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchAllModules] Entering");
    return [{
      id: 1,
      moduleType: "Thread",
      title: "Dummy1",
      help: "How to use this module",
      inuse: true,
      posts: 0,
      contributions: 0,
      participants: 0
    }];
  });
  fastify.get("/fetchAllModulesForDebate", {
    config: config,
    schema: {
      description: "fetches all the modules for a debate",
      tags: ["api"],
      querystring: {
        debateId: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: {
            type: 'object',
            properties: {
              id: {
                type: "number"
              },
              name: {
                type: "string"
              },
              debateId: {
                type: "number"
              },
              moduleType: {
                type: "string"
              },
              title: {
                type: 'object',
                properties: {
                  en: {
                    type: "string"
                  },
                  fr: {
                    type: "string"
                  },
                  es: {
                    type: "string"
                  }
                }
              },
              help: {
                type: 'object',
                properties: {
                  en: {
                    type: "string"
                  },
                  fr: {
                    type: "string"
                  },
                  es: {
                    type: "string"
                  }
                }
              },
              inuse: {
                type: "boolean"
              },
              posts: {
                type: "number"
              },
              contributions: {
                type: "number"
              },
              participants: {
                type: "number"
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchAllModulesForDebate] Entering");
    var inputs = {
      debateId: request.query.debateId
    };
    var response = await _ModuleController["default"].fetchAllModulesForDebate(inputs);
    return response;
  });
  fastify.get("/fetchModule", {
    config: config,
    schema: {
      description: "fetches a module",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: {
              type: "number"
            },
            name: {
              type: "string"
            },
            moduleType: {
              type: "string"
            },
            debateId: {
              type: "number"
            },
            title: {
              type: 'object',
              properties: {
                en: {
                  type: "string"
                },
                fr: {
                  type: "string"
                },
                es: {
                  type: "string"
                }
              }
            },
            help: {
              type: 'object',
              properties: {
                en: {
                  type: "string"
                },
                fr: {
                  type: "string"
                },
                es: {
                  type: "string"
                }
              }
            },
            inuse: {
              type: "boolean"
            },
            posts: {
              type: "number"
            },
            contributions: {
              type: "number"
            },
            participants: {
              type: "number"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchModule] Entering");
    var inputs = {
      id: request.query.id
    };
    var response = await _ModuleController["default"].fetchModule(inputs);
    return response;
  });
  fastify.put("/updateModule", {
    config: config,
    schema: {
      description: "updates a module",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          title: {
            type: 'object',
            properties: {
              en: {
                type: "string"
              },
              fr: {
                type: "string"
              },
              es: {
                type: "string"
              }
            }
          },
          help: {
            type: 'object',
            properties: {
              en: {
                type: "string"
              },
              fr: {
                type: "string"
              },
              es: {
                type: "string"
              }
            }
          },
          id: {
            type: 'number'
          },
          moduleType: {
            type: 'string'
          },
          name: {
            type: "string"
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: {
              type: "number"
            },
            name: {
              type: "string"
            },
            moduleType: {
              type: "string"
            },
            debateId: {
              type: "number"
            },
            title: {
              type: 'object',
              properties: {
                en: {
                  type: "string"
                },
                fr: {
                  type: "string"
                },
                es: {
                  type: "string"
                }
              }
            },
            help: {
              type: 'object',
              properties: {
                en: {
                  type: "string"
                },
                fr: {
                  type: "string"
                },
                es: {
                  type: "string"
                }
              }
            },
            inuse: {
              type: "boolean"
            },
            posts: {
              type: "number"
            },
            contributions: {
              type: "number"
            },
            participants: {
              type: "number"
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateModule] Entering");

    var inputs = _objectSpread({}, request.body); // First find the module


    var module = await _ModuleController["default"].fetchModule(inputs);

    var inputs2 = _objectSpread({}, request.body, {
      debateId: module.debateId,
      posts: module.posts,
      contributions: module.contributions,
      participants: module.participants,
      inuse: module.inuse,
      deleted: module.deleted
    }); // Update the page


    var response = await _ModuleController["default"].updateModule(inputs2);
    return {
      status: 'ok',
      reason: ''
    };
  });
};

module.exports = routes;