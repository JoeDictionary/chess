const path = require('path');

const CLIENT = 'src/client',
  SERVER = 'src/server';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: `./${CLIENT}/index.ts`,
  output: {
    filename: 'bundle.js',
    publicPath: 'public',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, CLIENT)],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [path.resolve(__dirname, CLIENT)],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
