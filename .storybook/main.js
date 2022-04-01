module.exports = {
  stories: [
    "../stories/*.stories.js"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: "@import './theme/setup.scss'; @import './theme/main.scss';",
        }
      }
    }
  ],
  features: {
    postcss: false,
  }
}
