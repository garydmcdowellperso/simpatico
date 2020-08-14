import fp from "fastify-plugin";
import jwt from "jsonwebtoken";

import config from "../config";

const authPlugin = fp(async fastify => {
  fastify.decorate("authenticate", async (request, reply) => {
    try {
      const token = request.cookies.simpatico;
      const decoded = jwt.verify(token, config.jwt.secret);
      request.user = decoded;
    } catch (err) {
      reply.send(err);
    }
  });
  fastify.decorate("authenticateAdmin", async (request, reply) => {
    try {
      const token = request.cookies.simpatico;
      const decoded = jwt.verify(token, config.jwt.secret);

      if (!decoded.normalize.includes('admiinstrator')) {
        reply.code(401).send('Unauthorised')
      } else {
        request.user = decoded;
      }
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
