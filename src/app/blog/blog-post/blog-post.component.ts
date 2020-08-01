import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from './blog-post.interface';
import { BlogPostService } from './blog-post.service';

@Component({
	selector: 'app-blog-post',
	templateUrl: './blog-post.component.html',
	styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
	public blogPost: BlogPost;
	public errorMessage: string;

	constructor(
		private route: ActivatedRoute,
		private blogPostService: BlogPostService
		) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.blogPostService.getBlogPost(params.link).subscribe(
				(response: BlogPost) => {
					this.blogPost = response;
				}, (error: string) => {
					this.errorMessage = error;
				}
			);
		});
	}

}
