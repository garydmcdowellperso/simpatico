import fp from "fastify-plugin";
import jwt from "jsonwebtoken";

import config from "../config";

const authPlugin = fp(async fastify => {
  fastify.decorate("authenticate", async (request, reply) => {
    try {
      const token = request.cookies.simpatico;

      if (!token) {
        reply.code(401).send('Unauthorised')
      }
      const decoded = jwt.verify(token, config.jwt.secret);
      request.user = decoded;
    } catch (err) {
      reply.send(err);
    }
  });
  fastify.decorate("authorise", async (request, reply) => {
    // Check query params against token
    if (request.query) {
    }
    // Check body params against token
    if (request.body) {
      if (request.body.accountId && request.body.accountId !== request.user.accountId) {
        reply.code(401).send('Unauthorised')
      }
    }
  });
});

export default authPlugin;
