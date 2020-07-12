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
    expect(nativeElement.querySelectorAll('div.container div.row div.col-sm-8 p').length).toEqual(3);
    expect(nativeElement.querySelectorAll('.col-sm-8 p').item(0).textContent).toEqual('Hi! I\'m David Espinosa, a Sr. Full Stack Software Developer from Argentina.');
    expect(nativeElement.querySelectorAll('.col-sm-8 p').item(1).textContent).toEqual('I love using Typescript with the Serverless framework for the backend and the Angular framework for the frontend.');
    expect(nativeElement.querySelectorAll('.col-sm-8 p').item(2).textContent).toEqual('I\'m convinced serverless is the future, that\'s why I\'m constantly learning about AWS serverless services.');
  });

  it('should render 2 AWS badges', () => {
    expect(nativeElement.querySelectorAll('div.container div.row div.col-sm-4 img').length).toEqual(2);
    expect(nativeElement.querySelectorAll('.col-sm-4 img').item(0).getAttribute('src')).toEqual('assets/AWS-Certified_Cloud-Practitioner_512x512.png');
    expect(nativeElement.querySelectorAll('.col-sm-4 img').item(1).getAttribute('src')).toEqual('assets/AWS-Certified_Solutions-Architect_Associate_512x512.png');
  });
});
