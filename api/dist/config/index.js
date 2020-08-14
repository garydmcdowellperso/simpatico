"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var trueValue = "true";
var config = {
  simpatico: {
    root: process.env.SIMPATICO_ROOT || "/root/simpatico",
    sudo: trueValue === process.env.SUDO || trueValue === "false"
  },
  nginx: {
    root: process.env.NGINX_ROOT || '/User/gary'
  },
  server: {
    port: process.env.PORT || "5000",
    docPrefix: process.env.DOC_URL_PREFIX || "doc"
  },
  matomo: {
    server: 'localhost',
    token: '9ab164f139278c6d37480c8055405e95'
  },
  db: {
    dbname: process.env.NODE_ENV === "test" ? "".concat(process.env.MONGO_DB_NAME || "stargate2-5", "_test") : process.env.MONGO_DB_NAME || "stargate2-5",
    url: process.env.MONGO_URL || "mongodb://localhost:27017/"
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY || "shhhhhh!"
};
var _default = config;
exports["default"] = _default;