import { Environment } from './environment.interface';

export const environment: Environment = {
	production: true,
	api: {
		getBlogExcerpts: 'https://h8ulfycge1.execute-api.us-east-1.amazonaws.com/dev/getBlogExcerpts',
		getBlog: 'https://h8ulfycge1.execute-api.us-east-1.amazonaws.com/dev/getBlogPost',
	}
};
