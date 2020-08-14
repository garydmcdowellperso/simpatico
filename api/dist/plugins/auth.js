"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fastifyPlugin = _interopRequireDefault(require("fastify-plugin"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var authPlugin = (0, _fastifyPlugin["default"])(async function (fastify) {
  fastify.decorate("authenticate", async function (request, reply) {
    try {
      var token = request.cookies.simpatico;

      var decoded = _jsonwebtoken["default"].verify(token, _config["default"].jwtSecretKey);

      request.user = decoded;
    } catch (err) {
      reply.send(err);
    }
  });
});
var _default = authPlugin;
exports["default"] = _default;