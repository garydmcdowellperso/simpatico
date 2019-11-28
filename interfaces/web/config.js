export default {
  api: {
    host: process.env.STARGATE_HOST || 'http://localhost:5000'
  },
  server: {
    host: process.env.SERVER_HOST || 'http://localhost',
    port: parseInt(process.env.PORT, 10) || 4000
  },
  i18n: {
    languages: process.env.LANGUAGES || ['en', 'es', 'fr'],
    defaultLanguage: process.env.DEFAULT_LANGUAGE || 'fr',
  },
};
