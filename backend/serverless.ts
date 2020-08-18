/* eslint-disable no-template-curly-in-string */
import AWS = require('serverless/aws');

const API: AWS.Serverless = {
	service: {
		name: 'david-espinosa-api',
	},
	frameworkVersion: '>=1.1.0 <2.0.0',
	custom: {
		webpack: {
			webpackConfig: './webpack.config.js',
			includeModules: {
				forceExclude: ['aws-sdk'],
			},
		},
	},
	plugins: [
		'serverless-webpack',
	],
	package: {
		individually: true,
	},
	provider: {
		name: 'aws',
		region: 'us-east-1',
		runtime: 'nodejs12.x',
		environment: {
			BLOG_POST_TABLE: 'BlogPostTable',
		},
		iamRoleStatements: [
			{
				Effect: 'Allow',
				Action: [
					'dynamodb:Scan',
					'dynamodb:GetItem',
				],
				Resource: 'arn:aws:dynamodb:us-east-1:*:table/${self:provider.environment.BLOG_POST_TABLE}',
			},
		],
	},
	resources: {
		Resources:
		{
			BlogPostTable: {
				Type: 'AWS::DynamoDB::Table',
				DeletionPolicy: 'Retain',
				Properties: {
					AttributeDefinitions: [
						{
							AttributeName: 'link',
							AttributeType: 'S',
						},
					],
					KeySchema: [
						{
							AttributeName: 'link',
							KeyType: 'HASH',
						},
					],
					ProvisionedThroughput: {
						ReadCapacityUnits: 1,
						WriteCapacityUnits: 1,
					},
					TableName: 'BlogPostTable',
				},
			},
		},
	},
	functions: {
		getBlogPost: {
			handler: 'getBlogPost.handler',
			events: [
				{
					http: {
						path: 'getBlogPost/{link}',
						method: 'get',
						cors: true,
					},
				},
			],
		},
		getBlogExcerpts: {
			handler: 'getBlogExcerpts.handler',
			events: [
				{
					http: {
						path: 'getBlogExcerpts',
						method: 'get',
						cors: true,
					},
				},
			],
		},
	},
};

module.exports = API;
