import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { BlogExcerpt } from './blog-excerpt/blog-excerpt.interface';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	public blogExcerpts: BlogExcerpt[];
	public errorMessage: string;

	constructor(private blogService: BlogService) { }

	ngOnInit(): void {
		this.blogService.getBlogExcerpts().subscribe(
			(response: BlogExcerpt[]) => {
				this.blogExcerpts = response;
			}, (error: string) => {
				this.errorMessage = error;
			}
		);
	}

}
