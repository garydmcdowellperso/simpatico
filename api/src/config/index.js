const config = {
  server: {
    port: process.env.PORT || '5000',
    docPrefix: process.env.DOC_URL_PREFIX || 'doc',
  },
  db: {
    dbname:
      process.env.NODE_ENV === 'test'
        ? `${process.env.MONGO_DB_NAME || 'stargate2-5'}_test`
        : process.env.MONGO_DB_NAME || 'stargate2-5',
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/',
  },
};

export default config;
