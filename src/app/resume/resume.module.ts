import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { WhoAmIComponent } from './whoami/whoami.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [ResumeComponent, WhoAmIComponent, ExperienceComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
