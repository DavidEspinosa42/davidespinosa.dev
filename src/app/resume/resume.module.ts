import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { WhoAmIComponent } from './whoami/whoami.component';
import { ExperienceComponent } from './experience/experience.component';
import { TitleComponent } from './title/title.component';


@NgModule({
	declarations: [ResumeComponent, WhoAmIComponent, ExperienceComponent, TitleComponent],
	imports: [
		CommonModule,
		ResumeRoutingModule
	]
})
export class ResumeModule { }
