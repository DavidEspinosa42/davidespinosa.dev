import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'resume',
		pathMatch: 'full'
	},
	{
		path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
	},
	{
		path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
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
