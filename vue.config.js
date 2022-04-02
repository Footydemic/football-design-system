const path = require("path")

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        !process.env.LIBRARY
          ? path.resolve(__dirname, "./theme/setup.scss")
          : "",
        path.resolve(__dirname, "./theme/main.scss"),
      ],
      resolveUrl: false,
    },
  },
  css: {
    extract: process.env.LIBRARY ? true : false,
  },
}
