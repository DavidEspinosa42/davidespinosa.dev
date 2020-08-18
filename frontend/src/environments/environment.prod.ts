import { Environment } from './environment.interface';

export const environment: Environment = {
	production: true,
	api: {
		getBlogExcerpts: 'https://vt10r2kmxj.execute-api.us-east-1.amazonaws.com/dev/getBlogExcerpts',
		getBlog: 'https://vt10r2kmxj.execute-api.us-east-1.amazonaws.com/dev/getBlogPost',
	}
};
