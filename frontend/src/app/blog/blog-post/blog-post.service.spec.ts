import { TestBed } from '@angular/core/testing';

import { BlogPostService } from './blog-post.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogPost } from './blog-post.interface';
import { environment } from 'src/environments/environment';

describe('BlogPostService', () => {
	let service: BlogPostService;
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	const blogPostServiceMock: BlogPost = {
		title: 'Lorem Ipsum',
		content: 'Lorem ipsum dolor sit amet...'
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});

		service = TestBed.inject(BlogPostService);
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should make an HTTP GET and return a blog post', () => {
		const link = 'a-blog-link';
		service.getBlogPost(link)
			.subscribe((response: BlogPost) =>
				expect(response).toEqual(blogPostServiceMock)
			);

		const req = httpTestingController.expectOne(`${environment.api.getBlog}/${link}`);
		expect(req.request.method).toEqual('GET');

		req.flush(blogPostServiceMock);
	});

	it('should catch error on failed HTTP GET call', () => {
		const link = 'another-blog-link';
		service.getBlogPost(link)
			.subscribe(
				() => fail('should have failed with the network error'),
				(error: string) => {
					expect(error).toEqual('Something bad happened; please try again later.');
				}
			);

		const req = httpTestingController.expectOne(`${environment.api.getBlog}/${link}`);

		req.error(new ErrorEvent('Network error'));
	});
});
