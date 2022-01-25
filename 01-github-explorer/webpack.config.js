const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, ''),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bunble.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
