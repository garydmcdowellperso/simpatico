"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

require("make-promises-safe");

var _fastifyHelmet = _interopRequireDefault(require("fastify-helmet"));

var _fastify = _interopRequireDefault(require("fastify"));

var _fastifyBlipp = _interopRequireDefault(require("fastify-blipp"));

var _fastifyHttpClient = _interopRequireDefault(require("fastify-http-client"));

var _fastifySwagger = _interopRequireDefault(require("fastify-swagger"));

var _fastifyCircuitBreaker = _interopRequireDefault(require("fastify-circuit-breaker"));

var _fastifyOauth = _interopRequireDefault(require("fastify-oauth2"));

var _config = _interopRequireDefault(require("./config"));

var _app = _interopRequireDefault(require("./plugins/app"));

var _auth = _interopRequireDefault(require("./plugins/auth"));

var _iam = _interopRequireDefault(require("./api/iam"));

var _ping = _interopRequireDefault(require("./api/ping"));

var _post = _interopRequireDefault(require("./api/post"));

var _thread = _interopRequireDefault(require("./api/thread"));

var _debate = _interopRequireDefault(require("./api/debate"));

var _page = _interopRequireDefault(require("./api/page"));

var _stats = _interopRequireDefault(require("./api/stats"));

var _module2 = _interopRequireDefault(require("./api/module"));

var _email = _interopRequireDefault(require("./api/email"));

var _account = _interopRequireDefault(require("./api/account"));

// Global config params
var singleton = (0, _fastify["default"])({
  logger: true
}); // Libs

singleton.register(require("fastify-cookie"), {
  secret: "Dinosaur10!",
  // for cookies signature
  parseOptions: {} // options for parsing cookies

});
singleton.register(_fastifyOauth["default"], {
  name: "googleOAuth2",
  scope: ["openid profile email"],
  credentials: {
    client: {
      id: "933256841958-27u37103pk4rkaqogir75gk57qs07lgh.apps.googleusercontent.com",
      secret: "ry6R_IOmADoNfXTySD-5nQIV"
    },
    auth: _fastifyOauth["default"].GOOGLE_CONFIGURATION
  },
  // register a fastify url to start the redirect flow
  startRedirectPath: "/login/google",
  // facebook redirect here after the user login
  callbackUri: "https://49646ddc7fe9.ngrok.io/api/v1/login/google/callback"
}); // Print routes

singleton.register(_fastifyBlipp["default"]); // Security

singleton.register(_fastifyHelmet["default"], {
  hidePoweredBy: true,
  noCache: true
}); // Plugins

singleton.register(_app["default"]);
singleton.register(_auth["default"]);
singleton.register(_fastifyHttpClient["default"]); // Swagger doc

singleton.register(_fastifySwagger["default"], {
  routePrefix: _config["default"].server.docPrefix,
  swagger: {
    info: {
      title: "api",
      description: "API Gateway Simpatico",
      version: "1.0.0"
    },
    host: "localhost:".concat(_config["default"].server.port),
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{
      name: "api",
      description: "simpatico related end-points"
    }]
  },
  exposeRoute: true
}); // Circuit breaker for async calls that can fail

singleton.register(_fastifyCircuitBreaker["default"], {
  threshold: 3,
  // default 5
  timeout: 5000,
  // default 10000
  resetTimeout: 5000 // default 10000

}); // Routes

singleton.register(_iam["default"], {
  prefix: "/v1"
});
singleton.register(_ping["default"], {
  prefix: "/v1"
});
singleton.register(_post["default"], {
  prefix: "/v1"
});
singleton.register(_thread["default"], {
  prefix: "/v1"
});
singleton.register(_debate["default"], {
  prefix: "/v1"
});
singleton.register(_page["default"], {
  prefix: "/v1"
});
singleton.register(_stats["default"], {
  prefix: "/v1"
});
singleton.register(_module2["default"], {
  prefix: "/v1"
});
singleton.register(_email["default"], {
  prefix: "/v1"
});
singleton.register(_account["default"], {
  prefix: "/v1"
}); // Hook it all together

var start = async function start() {
  try {
    await singleton.listen(_config["default"].server.port, "0.0.0.0"); // This loads our plugins

    singleton.log.info("server listening on ".concat(singleton.server.address().port)); // Output Routes

    singleton.blipp(); // Generate swagger docs

    singleton.swagger(); // App ok

    singleton.setHealth("ok");
  } catch (err) {
    /* istanbul ignore next */
    singleton.log.error({
      err: err
    }, "server error");
    /* istanbul ignore next */

    process.exit(1);
  }
};

start();
var _default = singleton;
exports["default"] = _default;