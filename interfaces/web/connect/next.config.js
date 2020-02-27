const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');

module.exports = withTM(
  withCSS({
    assetPrefix: "/connect",
    publicRuntimeConfig: {
      localeSubpaths:
        typeof process.env.LOCALE_SUBPATHS === 'string'
          ? process.env.LOCALE_SUBPATHS
          : 'none',
    },
  }),
);
