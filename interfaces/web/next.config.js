const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withTM = require('next-transpile-modules');

module.exports = withTM(
  withBundleAnalyzer(
    withCSS({
      publicRuntimeConfig: {
        localeSubpaths:
          typeof process.env.LOCALE_SUBPATHS === 'string'
            ? process.env.LOCALE_SUBPATHS
            : 'none',
      },
    }),
  ),
);
