import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
	let component: TitleComponent;
	let fixture: ComponentFixture<TitleComponent>;
	let nativeElement: HTMLElement;
	const titleMock: string = 'MY TITLE';

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TitleComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TitleComponent);
		component = fixture.componentInstance;
		component.title = titleMock;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render a centered title', () => {
		expect(nativeElement.querySelector('div.wrapper h5 p.text-center strong').textContent).toEqual('MY TITLE');
	});
});
