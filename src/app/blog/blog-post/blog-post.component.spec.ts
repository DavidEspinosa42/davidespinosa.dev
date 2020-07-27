import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostComponent } from './blog-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './blog-post.interface';
import { of, throwError } from 'rxjs';

describe('BlogPostComponent', () => {
	let component: BlogPostComponent;
	let fixture: ComponentFixture<BlogPostComponent>;
	let nativeElement: HTMLElement;
	let blogPostService: jasmine.SpyObj<BlogPostService>;

	const blogPostServiceMock: BlogPost = {
		title: 'Lorem Ipsum',
		content: 'Lorem ipsum dolor sit amet...'
	};
	const errorMessageMock: string = 'error text received';

	beforeEach(async(() => {
		blogPostService = jasmine.createSpyObj<BlogPostService>('BlogPostService', ['getBlogPost']);

		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [BlogPostComponent],
			providers: [{ provide: BlogPostService, useValue: blogPostService }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogPostComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call service OnInit get blog data', () => {
		const blogServiceSpy = blogPostService.getBlogPost.and.returnValue(of(blogPostServiceMock));

		fixture.detectChanges();

		expect(component.blogPost).toEqual(blogPostServiceMock);
		expect(component.errorMessage).toEqual(undefined);
		expect(blogServiceSpy.calls.count()).toEqual(1);
	});

	it('should render blog post on succesfull service call', () => {
		blogPostService.getBlogPost.and.returnValue(of(blogPostServiceMock));

		fixture.detectChanges();

		expect(nativeElement.querySelector('div.container div.row div.col div h3').textContent).toEqual('Lorem Ipsum');
		expect(nativeElement.querySelector('div.container div.row div.col div p').textContent).toEqual('Lorem ipsum dolor sit amet...');
	});

	it('should call service OnInit and render error text if call to service fails', () => {
		const blogServiceSpy = blogPostService.getBlogPost.and.returnValue(throwError(errorMessageMock));

		fixture.detectChanges();

		expect(component.blogPost).toEqual(undefined);
		expect(component.errorMessage).toEqual(errorMessageMock);
		expect(blogServiceSpy.calls.count()).toEqual(1);
		expect(nativeElement.querySelector('div.container div.row div.col div h3').textContent).toEqual('error text received');
	});
});
