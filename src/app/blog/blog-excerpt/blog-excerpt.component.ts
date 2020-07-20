import { Component, OnInit, Input } from '@angular/core';
import { BlogExcerpt } from './blog-excerpt.interface';

@Component({
	selector: 'app-blog-excerpt',
	templateUrl: './blog-excerpt.component.html',
	styleUrls: ['./blog-excerpt.component.scss']
})
export class BlogExcerptComponent implements OnInit {
	@Input()
	public blogExcerpt: BlogExcerpt;

	constructor() { }

	ngOnInit(): void {
	}

}
