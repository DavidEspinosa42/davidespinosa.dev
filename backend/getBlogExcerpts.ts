/* eslint-disable @typescript-eslint/no-unused-vars */
import { DynamoDB } from 'aws-sdk';
import { APIGatewayProxyHandlerV2, APIGatewayProxyResultV2, APIGatewayProxyEventV2 } from 'aws-lambda';

const dynamoDb = new DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
	const params: DynamoDB.DocumentClient.ScanInput = {
		TableName: process.env.BLOG_POST_TABLE,
	};

	try {
		const result = await dynamoDb.scan(params).promise();
		const response: APIGatewayProxyResultV2 = {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(result.Items),
		};
		return response;
	} catch (error) {
		// AWS Cloudwatch log
		console.error(error);

		const response: APIGatewayProxyResultV2 = {
			statusCode: error.statusCode || 501,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'text/plain',
			},
			body: 'Couldn\'t fetch the blog excerpts.',
		};
		return response;
	}
};
