const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");
const withImages = require('next-images')

module.exports = withTM(
  withImages(withCSS({
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
      return config;
    },
    assetPrefix: "/admin",
    publicRuntimeConfig: {
      localeSubpaths:
        typeof process.env.LOCALE_SUBPATHS === "string"
          ? process.env.LOCALE_SUBPATHS
          : "none"
    }
  }))
);
