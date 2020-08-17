/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'production',
	entry: slsw.lib.entries,
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
	},
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts?$/,
				loader: 'ts-loader',
			},
			{
				test: /\.ts?$/,
				loader: 'istanbul-instrumenter-loader',
				options: { esModules: true },
				enforce: 'post',
				exclude: [/\.spec\.ts$/],
			},
		],
	},
};
