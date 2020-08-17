/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpackConfig = require('./webpack.config');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
	config.set({
		files: [
			{ pattern: './*.spec.ts' },
		],
		frameworks: ['jasmine'],
		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-coverage-istanbul-reporter',
			'karma-webpack',
		],
		preprocessors: {
			'./*.spec.ts': ['webpack'],
		},
		webpack: {
			mode: 'development',
			module: webpackConfig.module,
			resolve: webpackConfig.resolve,
		},
		coverageIstanbulReporter: {
			dir: './coverage',
			reports: ['html', 'text', 'text-summary'],
			combineBrowserReports: true,
			fixWebpackSourcePaths: true,
			thresholds: {
				global: {
					statements: 100,
					lines: 100,
					branches: 100,
					functions: 100,
				},
			},
		},
		reporters: ['coverage-istanbul'],
		browsers: ['ChromeHeadless'],
	});
};
