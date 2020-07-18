import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationComponent } from './certification.component';
import { CertificationItems } from './certification-items.interface';

describe('CertificationComponent', () => {
	let component: CertificationComponent;
	let fixture: ComponentFixture<CertificationComponent>;
	let nativeElement: HTMLElement;
	const itemsMock: CertificationItems = {
		icon: 'award',
		items: [
			{
				name: 'AWS Solutions Architect Associate',
				image: 'AWS_Architect_Associate_David_Espinosa'
			},
			{
				name: 'AWS Cloud Practitioner',
				image: 'AWS_Cloud_Practitioner_David_Espinosa'
			}
		]
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CertificationComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CertificationComponent);
		component = fixture.componentInstance;
		component.items = itemsMock;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render a paragraph with an icon and modal link for each item received', () => {
		expect(nativeElement.querySelectorAll('p').length).toEqual(2);

		expect(nativeElement.querySelectorAll('p svg.bi use').item(0).getAttribute('xlink:href'))
			.toEqual('assets/bootstrap-icons.svg#award');
		expect(nativeElement.querySelectorAll('p').item(0).textContent).toContain('AWS Solutions Architect Associate');
		expect(nativeElement.querySelectorAll('p a').item(0).getAttribute('data-toggle')).toEqual('modal');
		expect(nativeElement.querySelectorAll('p a').item(0).getAttribute('data-target')).toEqual('#AWS_Architect_Associate_David_Espinosa');

		expect(nativeElement.querySelectorAll('p svg.bi use').item(1).getAttribute('xlink:href'))
			.toEqual('assets/bootstrap-icons.svg#award');
		expect(nativeElement.querySelectorAll('p').item(1).textContent).toContain('AWS Cloud Practitioner');
		expect(nativeElement.querySelectorAll('p a').item(1).getAttribute('data-toggle')).toEqual('modal');
		expect(nativeElement.querySelectorAll('p a').item(1).getAttribute('data-target')).toEqual('#AWS_Cloud_Practitioner_David_Espinosa');
	});

	it('should render a modal for each item received', () => {
		expect(nativeElement.querySelectorAll('div.modal.fade').length).toEqual(2);

		expect(nativeElement.querySelectorAll('div.modal.fade').item(0).getAttribute('id')).toEqual('AWS_Architect_Associate_David_Espinosa');
		expect(nativeElement.querySelectorAll('div.modal.fade').item(1).getAttribute('id')).toEqual('AWS_Cloud_Practitioner_David_Espinosa');

		expect(nativeElement.querySelectorAll('div.modal.fade div.modal-dialog.modal-dialog-centered div.modal-content div.modal-body img.img-fluid')
			.item(0).getAttribute('src')).toEqual('assets/AWS_Architect_Associate_David_Espinosa.png');
		expect(nativeElement.querySelectorAll('div.modal.fade div.modal-dialog.modal-dialog-centered div.modal-content div.modal-body img.img-fluid')
			.item(1).getAttribute('src')).toEqual('assets/AWS_Cloud_Practitioner_David_Espinosa.png');
	});
});
