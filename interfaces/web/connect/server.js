/* eslint-disable no-console */
import express from 'express';
import proxy from 'express-http-proxy';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

import config from './config';
import nextI18next from './i18n';

const {
  server: { port: serverPort, host: serverHost },
  api: { host: apiHost },
} = config;

const start = () => {
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev, dir: './src' });
  const handle = app.getRequestHandler();

  app
    .prepare()
    .then(() => {
      const server = express();

      server.use(nextI18NextMiddleware(nextI18next));

      server.use('/static', express.static('static'));

      // healthcheck route for k8s
      server.get('/v1/ping', (req, res) => { res.status(200).json({ result: 'ok' })});
      // Peoxy api calls
      server.use('/api', proxy(apiHost));
      server.get('*', (req, res) => handle(req, res));

      server.listen(serverPort, err => {
        if (err) throw err;
        console.log(`> Ready on ${serverHost}:${serverPort}`);
      });
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
};

export default start;
