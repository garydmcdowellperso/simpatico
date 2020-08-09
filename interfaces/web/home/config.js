export default {
  api: {
    host: process.env.API_HOST || 'http://localhost:5000'
  },
  matomo: {
    host: process.env.MATOMO_HOST || 'https://matomo.simpatico.cloud',
  },
  server: {
    host: process.env.SERVER_HOST || 'http://localhost',
    port: parseInt(process.env.PORT, 10) || 1000
  },
  i18n: {
    languages: process.env.LANGUAGES || ['en', 'es', 'fr'],
    defaultLanguage: process.env.DEFAULT_LANGUAGE || 'fr',
  },
};
