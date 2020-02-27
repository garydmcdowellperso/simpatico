import fp from "fastify-plugin";
import jwt from "jsonwebtoken";

import config from "../config";

const authPlugin = fp(async fastify => {
  fastify.decorate("authenticate", async (request, reply) => {
    try {
      const token = request.cookies.simpatico;
      const decoded = jwt.verify(token, config.jwtSecretKey);
      request.user = decoded;
    } catch (err) {
      reply.send(err);
    }
  });
});

export default authPlugin;
