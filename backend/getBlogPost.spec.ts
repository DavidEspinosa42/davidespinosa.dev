import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Request, AWSError, DynamoDB } from 'aws-sdk';
import { APIGatewayProxyEventV2, Context } from 'aws-lambda';
import { handler } from './getBlogPost';

describe('getBlogPost', () => {
	const event: Partial<APIGatewayProxyEventV2> = {
		pathParameters: {
			id: '23',
		},
	};
	const context: Partial<Context> = {};
	const callback = () => {};

	it('should get blog post', async () => {
		const params: DynamoDB.DocumentClient.GetItemInput = {
			TableName: process.env.BLOG_POST_TABLE,
			Key: {
				id: event.pathParameters.id,
			},
		};
		const mockDynamoDBResponse = {
			promise() {
				return {
					Item: {
						title: 'Post title mock',
						content: '<p>Post content mock</p>',
					},
				};
			},
		} as unknown as Request<DocumentClient.GetItemOutput, AWSError>;
		spyOn(DynamoDB.DocumentClient.prototype, 'get').and.returnValue(mockDynamoDBResponse);

		const response = await handler(event as APIGatewayProxyEventV2, context as Context, callback);

		expect(DynamoDB.DocumentClient.prototype.get).toHaveBeenCalledWith(params);
		expect(response).toEqual(
			{
				statusCode: 200,
				body: '{"title":"Post title mock","content":"<p>Post content mock</p>"}',
			},
		);
	});

	it('should catch error and respond when get blog post fails', async () => {
		const params: DynamoDB.DocumentClient.GetItemInput = {
			TableName: process.env.BLOG_POST_TABLE,
			Key: {
				id: event.pathParameters.id,
			},
		};
		const mockDynamoDBResponse = {
			promise() {
				throw new Error('an error');
			},
		} as unknown as Request<DocumentClient.GetItemOutput, AWSError>;
		spyOn(DynamoDB.DocumentClient.prototype, 'get').and.returnValue(mockDynamoDBResponse);

		const response = await handler(event as APIGatewayProxyEventV2, context as Context, callback);

		expect(DynamoDB.DocumentClient.prototype.get).toHaveBeenCalledWith(params);
		expect(response).toEqual(
			{
				statusCode: 501,
				headers: { 'Content-Type': 'text/plain' },
				body: 'Couldn\'t fetch the blog post.',
			},
		);
	});
});
