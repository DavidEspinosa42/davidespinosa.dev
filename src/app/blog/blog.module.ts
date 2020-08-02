import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogExcerptComponent } from './blog-excerpt/blog-excerpt.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
	declarations: [BlogComponent, BlogExcerptComponent, BlogPostComponent],
	imports: [
		CommonModule,
		BlogRoutingModule,
		ShareButtonsModule,
		ShareIconsModule
	]
})
export class BlogModule { }
