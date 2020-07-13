import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { WhoAmIComponent } from './whoami/whoami.component';
import { ExperienceComponent } from './experience/experience.component';
import { TitleComponent } from './title/title.component';
import { InfoComponent } from './info/info.component';

describe('ResumeComponent', () => {
	let component: ResumeComponent;
	let fixture: ComponentFixture<ResumeComponent>;
	let nativeElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ResumeComponent, WhoAmIComponent, ExperienceComponent, TitleComponent, InfoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResumeComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have an array of 3 experiences', () => {
		expect(component.experiences.length).toEqual(3);
	});

	it('should render the whoami component', () => {
		expect(nativeElement.querySelectorAll('div.container div.row div.col app-whoami').length).toEqual(1);
	});

	it('should render 3 experience components with 1 title', () => {
		expect(nativeElement.querySelectorAll('div.container div.row div.col-lg-9 app-title').length).toEqual(1);
		expect(nativeElement.querySelectorAll('div.container div.row div.col-lg-9 app-experience').length).toEqual(3);
	});

	it('should render 4 info components with 4 titles', () => {
		expect(nativeElement.querySelectorAll('div.container div.row div.col-lg-3 app-title').length).toEqual(4);
		expect(nativeElement.querySelectorAll('div.container div.row div.col-lg-3 app-info').length).toEqual(4);
	});
});
