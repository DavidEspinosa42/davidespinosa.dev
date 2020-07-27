import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './blog-post.interface';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Utils } from '../../utils';

@Injectable({
	providedIn: 'root'
})
export class BlogPostService {

	constructor(private http: HttpClient) { }

	public getBlogPost(link: string): Observable<BlogPost> {
		return this.http.get<BlogPost>(`${environment.api.getBlog}/${link}`)
			.pipe(
				catchError(Utils.handleError)
			);
	}

}
