import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { Experience } from '../experience.interface';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let nativeElement: HTMLElement;

  const experienceMock: Experience = {
    company: 'ACCENTURE',
    projects: [
      {
        position: 'Sr. Full Stack Developer',
        dates: '(December 2019 - Present)',
        description: `I did this and that...`
      },
      {
        position: 'Semi Sr. Full Stack Developer',
        dates: '(December 2018 - November 2019)',
        description: `I did this...`
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    component.experience = experienceMock;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render company name with chevron right icon', () => {
    expect(nativeElement.querySelectorAll('div.container div.row div.col h5').length).toEqual(1);
    expect(nativeElement.querySelector('p.text-primary svg.bi use').getAttribute('xlink:href'))
      .toEqual('assets/bootstrap-icons.svg#chevron-right');
    expect(nativeElement.querySelector('p.text-primary').textContent).toEqual('ACCENTURE');
  });

  it('should render 4 paragraphs with 2 breaks', () => {
    expect(nativeElement.querySelectorAll('div.container div.row div.col p.content').length).toEqual(4);
    expect(nativeElement.querySelectorAll('div.container div.row div.col hr').length).toEqual(2);
  });

  it('should render 2 paragraphs with positions and dates', () => {
    expect(nativeElement.querySelectorAll('p.content strong').item(0).textContent).toEqual('Sr. Full Stack Developer');
    expect(nativeElement.querySelectorAll('p.content strong').item(1).textContent).toEqual('Semi Sr. Full Stack Developer');
    expect(nativeElement.querySelectorAll('p.content span.badge.text-dark').item(0).textContent).toEqual('(December 2019 - Present)');
    expect(nativeElement.querySelectorAll('p.content span.badge.text-dark').item(1).textContent).toEqual('(December 2018 - November 2019)');
  });

  it('should render 2 paragraphs with description', () => {
    expect(nativeElement.querySelectorAll('p.content').item(1).textContent).toEqual('I did this and that...');
    expect(nativeElement.querySelectorAll('p.content').item(3).textContent).toEqual('I did this...');
  });
});
