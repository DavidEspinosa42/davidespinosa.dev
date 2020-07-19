import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogExcerptComponent } from './blog-excerpt/blog-excerpt.component';

@NgModule({
	declarations: [BlogComponent, BlogExcerptComponent],
	imports: [
		CommonModule,
		BlogRoutingModule
	]
})
export class BlogModule { }
