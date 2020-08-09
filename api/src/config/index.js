const trueValue = "true";

const config = {
  simpatico: {
    root: process.env.SIMPATICO_ROOT || "/root/simpatico",
    sudo: (trueValue === process.env.SUDO) || (trueValue === "false"),
    hostname: process.env.SIMPATICO_HOSTNAME || "simpatico.cloud"
  },
  nginx: {
    root: process.env.NGINX_ROOT || '/User/gary'
  },
  server: {
    port: process.env.PORT || "5000",
    docPrefix: process.env.DOC_URL_PREFIX || "doc"
  },
  matomo: {
    server: 'matomo.simpatico.cloud',
    token: 'a4302404b514244c30b56e3de1ce2e77'
  },
  db: {
    dbname:
      process.env.NODE_ENV === "test"
        ? `${process.env.MONGO_DB_NAME || "stargate2-5"}_test`
        : process.env.MONGO_DB_NAME || "stargate2-5",
    url: process.env.MONGO_URL || "mongodb://localhost:27017/"
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY || "shhhhhh!",
    expiresIn: process.env.JWT_EXPIRES_IN || 3600
  }
};

export default config;
