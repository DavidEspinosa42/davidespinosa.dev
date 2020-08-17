import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { InfoItems } from './info-items.interface';

describe('InfoComponent', () => {
	let component: InfoComponent;
	let fixture: ComponentFixture<InfoComponent>;
	let nativeElement: HTMLElement;
	const itemsMock: InfoItems = {
		icon: 'check2',
		items: ['Angular', 'AWS']
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InfoComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(InfoComponent);
		component = fixture.componentInstance;
		component.items = itemsMock;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render a paragraph with an icon for each item received', () => {
		expect(nativeElement.querySelectorAll('p').length).toEqual(2);

		expect(nativeElement.querySelectorAll('p svg.bi use').item(0).getAttribute('xlink:href'))
			.toEqual('assets/bootstrap-icons.svg#check2');
		expect(nativeElement.querySelectorAll('p').item(0).textContent).toContain('Angular');

		expect(nativeElement.querySelectorAll('p svg.bi use').item(1).getAttribute('xlink:href'))
			.toEqual('assets/bootstrap-icons.svg#check2');
		expect(nativeElement.querySelectorAll('p').item(1).textContent).toContain('AWS');
	});
});
