const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const withImages = require('next-images')

module.exports = withTM(
  withImages(
    withCSS({
      assetPrefix: "/thread",
      publicRuntimeConfig: {
        localeSubpaths:
          typeof process.env.LOCALE_SUBPATHS === 'string'
            ? process.env.LOCALE_SUBPATHS
            : 'none',
      },
    })
  )
);
