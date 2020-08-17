import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
	let component: SpinnerComponent;
	let fixture: ComponentFixture<SpinnerComponent>;
	let nativeElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SpinnerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SpinnerComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render spinner', () => {
		expect(nativeElement.querySelector
			('div.container div.row div.col div.text-center div.text-primary.m-5.spinner-border[role=\'status\'] span.sr-only').innerHTML)
			.toEqual('Loading...');
	});
});
