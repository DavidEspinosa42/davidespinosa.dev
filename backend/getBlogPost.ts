import { DynamoDB } from 'aws-sdk';
import { APIGatewayProxyHandlerV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

const dynamoDB = new DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
	const params: DynamoDB.DocumentClient.GetItemInput = {
		TableName: process.env.BLOG_POST_TABLE,
		Key: {
			id: event.pathParameters.id,
		},
	};

	try {
		const result = await dynamoDB.get(params).promise();
		const response: APIGatewayProxyResultV2 = {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(result.Item),
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
			body: 'Couldn\'t fetch the blog post.',
		};
		return response;
	}
};
