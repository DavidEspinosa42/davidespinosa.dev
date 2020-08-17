export interface Environment {
	production: boolean;
	api: {
		getBlogExcerpts: string;
		getBlog: string;
	};
}
