import { SpinnerComponent } from './spinner/spinner.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationEnd, Router, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let nativeElement: HTMLElement;
	let router: Router;

	beforeEach(() => {
		TestBed.configureTestingModule({
  			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent, HeaderComponent, FooterComponent, SpinnerComponent
			],
		}).compileComponents();
		router = TestBed.inject(Router);
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		nativeElement = fixture.nativeElement;
	});

	it('should render spinner component and hide router-outlet while loading the app', () => {
		// tslint:disable-next-line: deprecation
		TestBed.get(Router).events.next(new NavigationStart(1, 'url'));

		fixture.detectChanges();

		expect(component.loading).toBeTrue();
		expect(nativeElement.querySelector('app-header')).not.toBeNull();
		expect(nativeElement.querySelector('app-footer')).not.toBeNull();
		expect(nativeElement.querySelector('app-spinner')).not.toBeNull();
		expect(nativeElement.querySelector('router-outlet')).toBeNull();
	});

	it('should hide spinner component and show router-outlet when finished loading the app', () => {
		// tslint:disable-next-line: deprecation
		TestBed.get(Router).events.next(new NavigationEnd(1, 'url', 'otherUrl'));

		fixture.detectChanges();

		expect(component.loading).toBeFalse();
		expect(nativeElement.querySelector('app-header')).not.toBeNull();
		expect(nativeElement.querySelector('app-footer')).not.toBeNull();
		expect(nativeElement.querySelector('app-spinner')).toBeNull();
		expect(nativeElement.querySelector('router-outlet')).not.toBeNull();
	});

	it('should hide spinner component and show router-outlet when cancel loading the app', () => {
		// tslint:disable-next-line: deprecation
		TestBed.get(Router).events.next(new NavigationCancel(1, 'url', 'otherUrl'));

		fixture.detectChanges();

		expect(component.loading).toBeFalse();
		expect(nativeElement.querySelector('app-header')).not.toBeNull();
		expect(nativeElement.querySelector('app-footer')).not.toBeNull();
		expect(nativeElement.querySelector('app-spinner')).toBeNull();
		expect(nativeElement.querySelector('router-outlet')).not.toBeNull();
	});

	it('should hide spinner component and show router-outlet when having an error at loading the app', () => {
		// tslint:disable-next-line: deprecation
		TestBed.get(Router).events.next(new NavigationError(1, 'url', 'otherUrl'));

		fixture.detectChanges();

		expect(component.loading).toBeFalse();
		expect(nativeElement.querySelector('app-header')).not.toBeNull();
		expect(nativeElement.querySelector('app-footer')).not.toBeNull();
		expect(nativeElement.querySelector('app-spinner')).toBeNull();
		expect(nativeElement.querySelector('router-outlet')).not.toBeNull();
	});

	it('should hide spinner component and show router-outlet when other state', () => {
		// tslint:disable-next-line: deprecation
		TestBed.get(Router).events.next();

		fixture.detectChanges();

		expect(component.loading).toBeFalse();
		expect(nativeElement.querySelector('app-header')).not.toBeNull();
		expect(nativeElement.querySelector('app-footer')).not.toBeNull();
		expect(nativeElement.querySelector('app-spinner')).toBeNull();
		expect(nativeElement.querySelector('router-outlet')).not.toBeNull();
	});

});
