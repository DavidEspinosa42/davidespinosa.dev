import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { WhoAmIComponent } from './whoami/whoami.component';
import { ExperienceComponent } from './experience/experience.component';
import { TitleComponent } from './title/title.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeComponent, WhoAmIComponent, ExperienceComponent, TitleComponent ]
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
    expect(nativeElement.querySelectorAll('app-whoami').length).toEqual(1);
  });

  it('should render 3 experience components', () => {
    expect(nativeElement.querySelectorAll('app-experience').length).toEqual(3);
  });
});
