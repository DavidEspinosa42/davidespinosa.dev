import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogExcerpt } from './blog-excerpt/blog-excerpt.interface';

@Injectable({
	providedIn: 'root'
})
export class BlogService {

	private mockBlogExcerptsResponse: BlogExcerpt[] = [
		{
			title: 'Lorem Ipsum',
			link: 'lorem-ipsum',
			excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ipsum eget massa commodo aliquam quis sit amet magna. Quisque ac sapien bibendum, aliquam lorem id, eleifend libero. Quisque sit amet erat est. Nunc iaculis massa in neque lacinia ultrices. Sed sagittis lectus nec lectus imperdiet, a porttitor arcu aliquet. Aenean lorem magna, tempus et suscipit sed, elementum et velit. Ut varius metus lorem, vel blandit lorem sagittis sit amet.'
		},
		{
			title: 'Dolor sit amet',
			link: 'dolor-sit-met',
			excerpt: 'Cras dignissim lectus in sem euismod pharetra. Etiam semper ante nec lectus vulputate bibendum. Morbi finibus gravida dolor, et porta nisl pharetra in. Quisque pharetra viverra purus, quis sodales tortor. Integer pharetra placerat magna, at hendrerit erat dignissim ac. Vivamus purus justo, bibendum ac vehicula sit amet, accumsan a sem. Sed finibus blandit nibh, id interdum felis luctus vitae. Nulla et mollis ligula. Integer pretium lectus non malesuada condimentum. Donec est velit, eleifend vitae convallis sed, malesuada ac augue. Vestibulum tellus magna, posuere eu gravida sit amet, iaculis id dui. Sed pharetra nibh molestie, scelerisque dolor eget, pharetra mi. Maecenas elementum blandit suscipit.'
		}
	];

	constructor(private http: HttpClient) { }

	public getBlogExcerpts(): Observable<BlogExcerpt[]> {
		return of(this.mockBlogExcerptsResponse);
	}
}
