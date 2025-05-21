const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Allow imports from outside src directory
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
      );
      
      // Add shared directory to module resolution
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@shared': path.resolve(__dirname, '../shared'),
      };

      // Find the rule that processes .ts(x) files and include the shared directory
      const tsRule = webpackConfig.module.rules.find(
        (rule) => rule.oneOf && rule.oneOf.find((oneOfRule) =>
          oneOfRule.test && oneOfRule.test.toString().includes('ts|tsx')
        )
      );

      if (tsRule) {
        const tsLoaderRule = tsRule.oneOf.find((oneOfRule) =>
          oneOfRule.test && oneOfRule.test.toString().includes('ts|tsx')
        );
        if (tsLoaderRule) {
          if (Array.isArray(tsLoaderRule.include)) {
            tsLoaderRule.include.push(path.resolve(__dirname, '../shared'));
          } else if (tsLoaderRule.include) {
            tsLoaderRule.include = [tsLoaderRule.include, path.resolve(__dirname, '../shared')];
          } else {
            tsLoaderRule.include = [path.resolve(__dirname, 'src'), path.resolve(__dirname, '../shared')];
          }
        }
      }
      
      return webpackConfig;
    },
  },
}; 