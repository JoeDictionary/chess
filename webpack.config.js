const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
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
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				include:[path.resolve(__dirname, 'src')]
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
