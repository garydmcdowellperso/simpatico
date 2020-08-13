const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");

module.exports = withTM(
  withCSS({
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
      return config;
    },
    // assetPrefix: "/home",
    publicRuntimeConfig: {
      localeSubpaths:
        typeof process.env.LOCALE_SUBPATHS === "string"
          ? process.env.LOCALE_SUBPATHS
          : "none"
    }
  })
);
