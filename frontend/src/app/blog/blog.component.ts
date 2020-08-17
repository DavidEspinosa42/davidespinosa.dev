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
	public loading: boolean = true;

	constructor(private blogService: BlogService) { }

	ngOnInit(): void {
		this.blogService.getBlogExcerpts().subscribe(
			(response: BlogExcerpt[]) => {
				this.loading = false;
				this.blogExcerpts = response;
			}, (error: string) => {
				this.loading = false;
				this.errorMessage = error;
			}
		);
	}

}
