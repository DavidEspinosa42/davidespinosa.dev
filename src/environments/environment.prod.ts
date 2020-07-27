import { Environment } from './environment.interface';

export const environment: Environment = {
	production: true,
	api: {
		getBlogExcerpts: 'assets/mocks/blog-excerpts-response.json',
		getBlog: 'assets/mocks',
	}
};
