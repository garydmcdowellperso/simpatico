const trueValue = "true";

const config = {
  simpatico: {
    root: process.env.SIMPATICO_ROOT || "/root/simpatico",
    sudo: process.env.SUDO || (trueValue === "true")
  },
  nginx: {
    root: process.env.NGINX_ROOT || '/User/gary'
  },
  server: {
    port: process.env.PORT || "5000",
    docPrefix: process.env.DOC_URL_PREFIX || "doc"
  },
  db: {
    dbname:
      process.env.NODE_ENV === "test"
        ? `${process.env.MONGO_DB_NAME || "stargate2-5"}_test`
        : process.env.MONGO_DB_NAME || "stargate2-5",
    url: process.env.MONGO_URL || "mongodb://localhost:27017/"
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY || "shhhhhh!"
};

export default config;
