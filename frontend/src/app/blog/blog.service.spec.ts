import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BlogService } from './blog.service';
import { BlogExcerpt } from './blog-excerpt/blog-excerpt.interface';
import { environment } from 'src/environments/environment';

describe('BlogService', () => {
	let service: BlogService;
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	const blogServiceMock: BlogExcerpt[] = [
		{
			title: 'Lorem Ipsum',
			link: 'lorem-ipsum',
			excerpt: 'Lorem ipsum dolor sit amet'
		},
		{
			title: 'Dolor sit amet',
			link: 'dolor-sit-met',
			excerpt: 'Cras dignissim lectus'
		}
	];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});

		service = TestBed.inject(BlogService);
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should make an HTTP GET and return a blog excerpts array', () => {
		service.getBlogExcerpts()
			.subscribe((response: BlogExcerpt[]) =>
				expect(response).toEqual(blogServiceMock)
			);

		const req = httpTestingController.expectOne(environment.api.getBlogExcerpts);
		expect(req.request.method).toEqual('GET');

		req.flush(blogServiceMock);
	});

	it('should catch error on failed HTTP GET call', () => {
		service.getBlogExcerpts()
			.subscribe(
				() => fail('should have failed with the network error'),
				(error: string) => {
					expect(error).toEqual('Something bad happened; please try again later.');
				}
			);

		const req = httpTestingController.expectOne(environment.api.getBlogExcerpts);

		req.error(new ErrorEvent('Network error'));
	});
});
