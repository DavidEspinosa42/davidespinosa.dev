import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
	},
	{
		path: '',
		redirectTo: 'resume',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'resume'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
