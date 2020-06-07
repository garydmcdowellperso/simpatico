import "core-js/stable";
import "regenerator-runtime/runtime";
import "make-promises-safe";
import helmet from "fastify-helmet";
import fastify from "fastify";
import blipp from "fastify-blipp";
import client from "fastify-http-client";
import swagger from "fastify-swagger";
import circuitBreaker from "fastify-circuit-breaker";
import oauthPlugin from "fastify-oauth2";

// Global config params
import config from "./config";
import app from "./plugins/app";
import auth from "./plugins/auth";
import iam from "./api/iam";
import ping from "./api/ping";
import post from "./api/post";
import thread from "./api/thread";
import debate from "./api/debate";
import page from "./api/page";
import stats from "./api/stats";
import module from "./api/module";
import email from "./api/email";
import account from "./api/account";

const singleton = fastify({
  logger: true
});

// Libs
singleton.register(require("fastify-cookie"), {
  secret: "Dinosaur10!", // for cookies signature
  parseOptions: {} // options for parsing cookies
});

singleton.register(oauthPlugin, {
  name: "googleOAuth2",
  scope: ["openid profile email"],
  credentials: {
    client: {
      id:
        "933256841958-27u37103pk4rkaqogir75gk57qs07lgh.apps.googleusercontent.com",
      secret: "ry6R_IOmADoNfXTySD-5nQIV"
    },
    auth: oauthPlugin.GOOGLE_CONFIGURATION
  },
  // register a fastify url to start the redirect flow
  startRedirectPath: "/login/google",
  // facebook redirect here after the user login
  callbackUri: "https://0040d099ab7e.ngrok.io/api/v1/login/google/callback"
});

// Print routes
singleton.register(blipp);

// Security
singleton.register(helmet, {
  hidePoweredBy: true,
  noCache: true
});

// Plugins
singleton.register(app);
singleton.register(auth);
singleton.register(client);

// Swagger doc
singleton.register(swagger, {
  routePrefix: config.server.docPrefix,
  swagger: {
    info: {
      title: "api",
      description: "API Gateway Simpatico",
      version: "1.0.0"
    },
    host: `localhost:${config.server.port}`,
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "api", description: "simpatico related end-points" }]
  },
  exposeRoute: true
});

// Circuit breaker for async calls that can fail
singleton.register(circuitBreaker, {
  threshold: 3, // default 5
  timeout: 5000, // default 10000
  resetTimeout: 5000 // default 10000
});

// Routes
singleton.register(iam, { prefix: "/v1" });
singleton.register(ping, { prefix: "/v1" });
singleton.register(post, { prefix: "/v1" });
singleton.register(thread, { prefix: "/v1" });
singleton.register(debate, { prefix: "/v1" });
singleton.register(page, { prefix: "/v1" });
singleton.register(stats, { prefix: "/v1" });
singleton.register(module, { prefix: "/v1" });
singleton.register(email, { prefix: "/v1" });
singleton.register(account, { prefix: "/v1" });

// Hook it all together
const start = async () => {
  try {
    await singleton.listen(config.server.port, "0.0.0.0"); // This loads our plugins
    singleton.log.info(
      `server listening on ${singleton.server.address().port}`
    );

    // Output Routes
    singleton.blipp();

    // Generate swagger docs
    singleton.swagger();

    // App ok
    singleton.setHealth("ok");
  } catch (err) {
    /* istanbul ignore next */
    singleton.log.error({ err }, "server error");
    /* istanbul ignore next */
    process.exit(1);
  }
};

start();

export default singleton;
