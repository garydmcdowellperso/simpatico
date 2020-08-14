"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _DebatesController = _interopRequireDefault(require("../../services/debates/lib/controllers/DebatesController"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var fs = require('fs');

var shell = require('shelljs');

var config = require('../../config');

var _require = require('../schemas/debate'),
    debateSchema = _require.debateSchema;

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
var routes = async function routes(fastify) {
  fastify.get("/fetchDebate", {
    config: config,
    schema: {
      description: "fetches a debate ",
      tags: ["api"],
      querystring: {
        name: {
          type: "string"
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info("[src#api#fetchDebate] Entering");
    var inputs = {
      name: request.query.name
    };
    var response = await _DebatesController["default"].fetchDebate(inputs);
    return response;
  });
  fastify.get("/fetchAllDebates", {
    config: config,
    schema: {
      description: "fetches all the debates associated to an account",
      tags: ["api"],
      querystring: {
        id: {
          type: "number"
        }
      },
      response: {
        200: {
          type: "array",
          items: debateSchema
        }
      }
    }
  }, async function (request) {
    fastify.log.info({
      query: request.query
    }, "[src#api#fetchAllDebates] Entering");

    var inputs = _objectSpread({}, request.query);

    var response = await _DebatesController["default"].fetchAllDebates(inputs);
    return response;
  });
  fastify.put("/updateGeneralInfo", {
    config: config,
    schema: {
      description: "updates the general information for a debate",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          slug: {
            type: 'string'
          },
          debateType: {
            type: 'string'
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateGeneralInfo] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate general info


    var response = await _DebatesController["default"].updateGeneralInfo(inputs);
    return response;
  });
  fastify.put("/updateConnection", {
    config: config,
    schema: {
      description: "updates the connectioin information for a debate",
      tags: ["api"],
      body: {
        type: "object",
        properties: {
          debateID: {
            type: "number"
          },
          connection: {
            type: "object",
            properties: {
              firstname: {
                type: "boolean"
              },
              lastname: {
                type: "boolean"
              },
              username: {
                type: "boolean"
              },
              email: {
                type: "boolean"
              },
              password: {
                type: "boolean"
              },
              google: {
                type: "boolean"
              },
              linkedin: {
                type: "boolean"
              },
              additional_fields: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    active: {
                      type: "boolean"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateConnection] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate connection


    var response = await _DebatesController["default"].updateConnection(inputs);
    return response;
  });
  fastify.post("/createDebate", {
    config: config,
    schema: {
      description: "creates a new debate",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          slug: {
            type: 'string'
          },
          debateType: {
            type: 'string'
          },
          languages: {
            type: 'object',
            properties: {
              english: {
                type: 'boolean'
              },
              french: {
                type: 'boolean'
              },
              spanish: {
                type: 'boolean'
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
    fastify.log.info(request.body, "[src#api#createDebate] Entering");

    var inputs = _objectSpread({}, request.body); // Create the debate


    var response = await _DebatesController["default"].createDebate(inputs);
    return {
      status: 'ok',
      reason: ''
    };
  });
  fastify.put("/updateLandingPageHeader", {
    config: config,
    schema: {
      description: "updates the header for a debate landing page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          debateID: {
            type: 'number'
          },
          header: {
            type: 'object',
            properties: {
              share: {
                type: 'boolean'
              },
              sections: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    page: {
                      type: 'number'
                    },
                    languages: {
                      type: 'object',
                      properties: {
                        en: {
                          type: 'string'
                        },
                        fr: {
                          type: 'string'
                        },
                        es: {
                          type: 'string'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateLandingPageHeader] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate landing page header


    var response = await _DebatesController["default"].updateLandingPageHeader(inputs);
    return response;
  });
  fastify.put("/updateLandingPageOverview", {
    config: config,
    schema: {
      description: "updates the overview for a debate landing page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          debateID: {
            type: 'number'
          },
          overview: {
            type: 'object',
            properties: {
              url: {
                type: 'string'
              },
              title: {
                type: 'object',
                properties: {
                  en: {
                    type: 'string'
                  },
                  fr: {
                    type: 'string'
                  },
                  es: {
                    type: 'string'
                  }
                }
              },
              description: {
                type: 'object',
                properties: {
                  en: {
                    type: 'string'
                  },
                  fr: {
                    type: 'string'
                  },
                  es: {
                    type: 'string'
                  }
                }
              },
              linkText: {
                type: 'object',
                properties: {
                  en: {
                    type: 'string'
                  },
                  fr: {
                    type: 'string'
                  },
                  es: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateLandingPageOverview] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate landing page overview


    var response = await _DebatesController["default"].updateLandingPageOverview(inputs);
    return response;
  });
  fastify.put("/updateLandingPageThemes", {
    config: config,
    schema: {
      description: "updates the themes for a debate landing page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          debateID: {
            type: 'number'
          },
          themes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                url: {
                  type: 'string'
                },
                image: {
                  type: 'string'
                },
                module: {
                  type: 'number'
                },
                title: {
                  type: 'object',
                  properties: {
                    en: {
                      type: 'string'
                    },
                    fr: {
                      type: 'string'
                    },
                    es: {
                      type: 'string'
                    }
                  }
                },
                description: {
                  type: 'object',
                  properties: {
                    en: {
                      type: 'string'
                    },
                    fr: {
                      type: 'string'
                    },
                    es: {
                      type: 'string'
                    }
                  }
                },
                imageText: {
                  type: 'object',
                  properties: {
                    en: {
                      type: 'string'
                    },
                    fr: {
                      type: 'string'
                    },
                    es: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateLandingPageThemes] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate landing page themes


    var response = await _DebatesController["default"].updateLandingPageThemes(inputs);
    return response;
  });
  fastify.put("/updateLandingPageSidebar", {
    config: config,
    schema: {
      description: "updates the sidebar for a debate landing page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          debateID: {
            type: 'number'
          },
          sidebar: {
            type: 'object',
            properties: {
              about: {
                type: 'object',
                properties: {
                  en: {
                    type: 'string'
                  },
                  fr: {
                    type: 'string'
                  },
                  es: {
                    type: 'string'
                  }
                }
              },
              social: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string'
                    },
                    url: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateLandingPageSidebar] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate landing page sidebar


    var response = await _DebatesController["default"].updateLandingPageSidebar(inputs);
    return response;
  });
  fastify.put("/updateLandingPageFooter", {
    config: config,
    schema: {
      description: "updates the footer for a debate landing page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          debateID: {
            type: 'number'
          },
          footer: {
            type: 'object',
            properties: {
              sections: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    page: {
                      type: 'number'
                    },
                    languages: {
                      type: 'object',
                      properties: {
                        en: {
                          type: 'string'
                        },
                        fr: {
                          type: 'string'
                        },
                        es: {
                          type: 'string'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateLandingPageFooter] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate landing page footer


    var response = await _DebatesController["default"].updateLandingPageFooter(inputs);
    return response;
  });
  fastify.put("/updateLandingPageMetaTags", {
    config: config,
    schema: {
      description: "updates the metatags for a debate landing page",
      tags: ["api"],
      body: {
        type: 'object',
        properties: {
          debateID: {
            type: 'number'
          },
          metaTags: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                type: {
                  type: 'string'
                },
                typevalue: {
                  type: 'string'
                },
                content: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      response: {
        200: debateSchema
      }
    }
  }, async function (request) {
    fastify.log.info(request.body, "[src#api#updateLandingPageMetaTags] Entering");

    var inputs = _objectSpread({}, request.body); // Update the debate landing page meta tags


    var response = await _DebatesController["default"].updateLandingPageMetaTags(inputs);
    return response;
  });
};

module.exports = routes;