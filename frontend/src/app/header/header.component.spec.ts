import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let nativeElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render the header', () => {
		expect(nativeElement.querySelectorAll('div.container nav.navbar.navbar-expand.navbar-dark div.navbar-nav a.nav-link').length).toEqual(2);

		expect(nativeElement.querySelectorAll('a').item(0).getAttribute('routerLink')).toEqual('/resume');
		expect(nativeElement.querySelectorAll('a').item(0).textContent).toEqual('Resume');

		expect(nativeElement.querySelectorAll('a').item(1).getAttribute('routerLink')).toEqual('/blog');
		expect(nativeElement.querySelectorAll('a').item(1).textContent).toEqual('Blog');
	});
});
