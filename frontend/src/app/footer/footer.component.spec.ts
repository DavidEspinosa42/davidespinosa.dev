import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;
	let nativeElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FooterComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render the footer', () => {
		expect(nativeElement.querySelector('div.container div.row div.col p.text-center').textContent)
			.toEqual('Powered by Angular 10 and AWS | Source Code available on my Github');
		expect(nativeElement.querySelector('a').getAttribute('href')).toEqual('https://github.com/DavidEspinosa42/davidespinosa.dev');
	});
});
