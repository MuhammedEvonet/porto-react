const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: '/react/porto/demo21',
    trailingSlash: isProduction
} 

module.exports = {
  future: {
    webpack5: false,
  },
  webpack: function (config, options) {
    console.log(options.webpack.version); // Should be webpack v5 now
    config.experiments = {};
    return config;
  },
};
