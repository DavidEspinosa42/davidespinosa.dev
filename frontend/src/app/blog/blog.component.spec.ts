import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { BlogExcerptComponent } from './blog-excerpt/blog-excerpt.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogExcerpt } from './blog-excerpt/blog-excerpt.interface';
import { BlogService } from './blog.service';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogComponent', () => {
	let component: BlogComponent;
	let fixture: ComponentFixture<BlogComponent>;
	let nativeElement: HTMLElement;
	let blogService: jasmine.SpyObj<BlogService>;

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
	const errorMessageMock: string = 'error text received';

	beforeEach(async(() => {
		blogService = jasmine.createSpyObj<BlogService>('BlogService', ['getBlogExcerpts']);

		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [BlogComponent, BlogExcerptComponent, BlogPostComponent],
			providers: [{ provide: BlogService, useValue: blogService }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call service OnInit and render a blog excerpt for each item received', () => {
		expect(component.loading).toEqual(true);
		const blogServiceSpy = blogService.getBlogExcerpts.and.returnValue(of(blogServiceMock));

		fixture.detectChanges();

		expect(component.blogExcerpts).toEqual(blogServiceMock);
		expect(component.errorMessage).toEqual(undefined);
		expect(component.loading).toEqual(false);
		expect(blogServiceSpy.calls.count()).toEqual(1);
		expect(nativeElement.querySelectorAll('div.container div.row.paddingless div.col app-blog-excerpt').length).toEqual(2);
	});

	it('should call service OnInit and render error text if call to service fails', () => {
		expect(component.loading).toEqual(true);
		const blogServiceSpy = blogService.getBlogExcerpts.and.returnValue(throwError(errorMessageMock));

		fixture.detectChanges();

		expect(component.blogExcerpts).toEqual(undefined);
		expect(component.errorMessage).toEqual(errorMessageMock);
		expect(component.loading).toEqual(false);
		expect(blogServiceSpy.calls.count()).toEqual(1);
		expect(nativeElement.querySelector('div.container div.paddingless.row div.col h3').textContent).toEqual('error text received');
	});

	it('should hide spinner when backend answers', () => {
		blogService.getBlogExcerpts.and.returnValue(of(blogServiceMock));

		fixture.detectChanges();

		expect(nativeElement.querySelector('app-spinner')).toBeNull();
	});
});
