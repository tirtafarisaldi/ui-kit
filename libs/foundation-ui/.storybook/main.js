module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/lib/**/*.stories.@(css)'
  ],
  addons: ['@storybook/addon-essentials', '@nrwl/react/plugins/storybook'],
  staticDirs: ['../public'],
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
