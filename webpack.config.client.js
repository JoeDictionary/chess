const path = require('path');

const CLIENT = './src/client';

module.exports = env => {
	console.log("NODE_ENV:", env.NODE_ENV);

	return {
		watch: env.NODE_ENV === 'watch', // For developing with server
/* 		devServer: {
			contentBase: path.resolve(__dirname, 'public'),
			compress: true,
			port: 9000,
		}, */
		mode: 'development',
		devtool: 'source-map',
		entry: {
			client: `./${CLIENT}/index.ts`,
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
	}
}
