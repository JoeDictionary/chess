const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const CLIENT = './src/client';
const SERVER = './src/server';

serverConfig = env => {
	console.log("NODE_ENV:", env.NODE_ENV);

	return {
		watch: env.NODE_ENV === 'development',
		target: 'node',
		mode: env.NODE_ENV,
		devtool: 'source-map',
		entry: {
			server: path.resolve(__dirname, SERVER, 'index.ts'),
		},
		output: {
			filename: '[name].js',
			// publicPath: 'public', // REVIEW I don't think it is needed here
			path: path.resolve(__dirname, 'public'),
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: ['ts-loader'],
					include: [path.resolve(__dirname, SERVER)],
				},
			],
		},
		plugins: [
			new NodemonPlugin(),
		],
		externals: [nodeExternals()]
	};
}

clientConfig = env => {
  console.log('NODE_ENV:', env.NODE_ENV);

  return {
    watch: env.NODE_ENV === 'watch', // For developing with server
    /* 		devServer: {
			contentBase: path.resolve(__dirname, 'public'),
			compress: true,
			port: 8080,
		}, */
    mode: env.NODE_ENV,
    devtool: 'source-map',
    entry: {
      client: `./${CLIENT}/index.ts`,
      // server: `./${SERVER}/index.ts`
    },
    output: {
      filename: '[name].js',
      publicPath: 'public',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
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
    // plugins: [
    // 	new NodemonPlugin(),
    // ],
    // externals: [nodeExternals()]
  };
};

module.exports = env => {
  console.log('NODE_ENV:', env.NODE_ENV);

  return {
    watch: env.NODE_ENV === 'watch', // For developing with server
    /* 		devServer: {
			contentBase: path.resolve(__dirname, 'public'),
			compress: true,
			port: 8080,
		}, */
    mode: env.NODE_ENV,
    devtool: 'source-map',
    entry: {
      client: `./${CLIENT}/index.ts`,
      // server: `./${SERVER}/index.ts`
    },
    output: {
      filename: '[name].js',
      publicPath: 'public',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
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
    // plugins: [
    // 	new NodemonPlugin(),
    // ],
    // externals: [nodeExternals()]
  };
};
