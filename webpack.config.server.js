const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin-next'); // TODO Remove from project

const SERVER = './src/server';

module.exports = env => {
	console.log("NODE_ENV:", env.NODE_ENV);

	return {
		watch: env.NODE_ENV === 'development',
		mode: env.NODE_ENV,
		devtool: 'source-map',
		entry: {
			server: path.resolve(__dirname, SERVER, 'index.ts'),
		},
		output: {
			filename: '[name].js',
			publicPath: '/', // REVIEW I don't think it is needed here
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