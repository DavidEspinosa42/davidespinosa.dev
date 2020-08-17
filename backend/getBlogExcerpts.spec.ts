import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Request, AWSError, DynamoDB } from 'aws-sdk';
import { APIGatewayProxyEventV2, Context } from 'aws-lambda';
import { handler } from './getBlogExcerpts';

describe('getBlogExcerpts', () => {
	const event: Partial<APIGatewayProxyEventV2> = {};
	const context: Partial<Context> = {};
	const callback = () => {};

	it('should get blog excerpts', async () => {
		const params: DynamoDB.DocumentClient.ScanInput = {
			TableName: process.env.BLOG_POST_TABLE,
		};
		const mockDynamoDBResponse = {
			promise() {
				return {
					Items: [
						{
							title: 'Title mock',
							link: 'link-mock',
							excerpt: '<p>Excerpt mock</p>',
						},
					],
				};
			},
		} as unknown as Request<DocumentClient.ScanOutput, AWSError>;
		spyOn(DynamoDB.DocumentClient.prototype, 'scan').and.returnValue(mockDynamoDBResponse);

		const response = await handler(event as APIGatewayProxyEventV2, context as Context, callback);

		expect(DynamoDB.DocumentClient.prototype.scan).toHaveBeenCalledWith(params);
		expect(response).toEqual(
			{
				statusCode: 200,
				body: '[{"title":"Title mock","link":"link-mock","excerpt":"<p>Excerpt mock</p>"}]',
			},
		);
	});

	it('should catch error and respond when get blog excerpts fails', async () => {
		const params: DynamoDB.DocumentClient.ScanInput = {
			TableName: process.env.BLOG_POST_TABLE,
		};
		const mockDynamoDBResponse = {
			promise() {
				throw new Error('an error');
			},
		} as unknown as Request<DocumentClient.ScanOutput, AWSError>;
		spyOn(DynamoDB.DocumentClient.prototype, 'scan').and.returnValue(mockDynamoDBResponse);

		const response = await handler(event as APIGatewayProxyEventV2, context as Context, callback);

		expect(DynamoDB.DocumentClient.prototype.scan).toHaveBeenCalledWith(params);
		expect(response).toEqual(
			{
				statusCode: 501,
				headers: { 'Content-Type': 'text/plain' },
				body: 'Couldn\'t fetch the blog excerpts.',
			},
		);
	});
});
