import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExcerptComponent } from './blog-excerpt.component';
import { BlogExcerpt } from './blog-excerpt.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogExcerptComponent', () => {
	let component: BlogExcerptComponent;
	let fixture: ComponentFixture<BlogExcerptComponent>;
	let nativeElement: HTMLElement;

	const blogExcerptMock: BlogExcerpt = {
		title: 'Lorsem Ipsum',
		link: 'lorem-ipsum',
		excerpt: 'Lorem ipsum dolor sit...'
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [BlogExcerptComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogExcerptComponent);
		component = fixture.componentInstance;
		component.blogExcerpt = blogExcerptMock;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render a blog excerpt card', () => {
		expect(nativeElement.querySelector('div.card div.card-body h3.card-title').textContent).toEqual('Lorsem Ipsum');
		expect(nativeElement.querySelector('div.card div.card-body p.card-text').textContent).toEqual('Lorem ipsum dolor sit...');
		expect(nativeElement.querySelector('div.card div.card-body a').getAttribute('href')).toEqual('/lorem-ipsum');
	});
});
