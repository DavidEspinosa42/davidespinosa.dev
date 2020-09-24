import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAmIComponent } from './whoami.component';

describe('WhoAmIComponent', () => {
	let component: WhoAmIComponent;
	let fixture: ComponentFixture<WhoAmIComponent>;
	let nativeElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WhoAmIComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhoAmIComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render presentation text', () => {
		expect(nativeElement.querySelectorAll('div.row div.col-lg-8 p').length).toEqual(2);
		expect(nativeElement.querySelectorAll('.col-lg-8.my-auto p').item(0).textContent)
			.toEqual('Hi! I\'m David Espinosa, a Sr. Full Stack Software Developer from Argentina.');
		expect(nativeElement.querySelectorAll('.col-lg-8.my-auto p').item(1).textContent)
			.toEqual('I love working with the latest technologies, I\'ve been specializing in Angular, Typescript, Node and AWS Serverless but I\'m open to work with any modern language, framework, library or cloud provider.');
	});

	it('should render 3 AWS badges', () => {
		expect(nativeElement.querySelectorAll('div.row div.col-lg-4 img').length).toEqual(3);
		expect(nativeElement.querySelectorAll('.col-lg-4.text-center.my-auto img').item(0).getAttribute('src'))
			.toEqual('assets/AWS-Certified_Cloud-Practitioner_512x512.png');
		expect(nativeElement.querySelectorAll('.col-lg-4.text-center.my-auto img').item(1).getAttribute('src'))
			.toEqual('assets/AWS-Certified_Developer_Associate_512x512.png');
		expect(nativeElement.querySelectorAll('.col-lg-4.text-center.my-auto img').item(2).getAttribute('src'))
			.toEqual('assets/AWS-Certified_Solutions-Architect_Associate_512x512.png');
	});
});
