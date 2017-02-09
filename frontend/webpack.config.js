const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: '../public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js?/,
      include: SRC_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-2'],
      },
    }],
  },
};

module.exports = config;
