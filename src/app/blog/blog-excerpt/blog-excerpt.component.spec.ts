import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExcerptComponent } from './blog-excerpt.component';

describe('BlogExcerptComponent', () => {
	let component: BlogExcerptComponent;
	let fixture: ComponentFixture<BlogExcerptComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BlogExcerptComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogExcerptComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
