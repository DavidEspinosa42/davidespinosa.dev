import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BlogExcerpt } from './blog-excerpt/blog-excerpt.interface';
import { environment } from 'src/environments/environment';
import { Utils } from '../utils';

@Injectable({
	providedIn: 'root'
})
export class BlogService {

	constructor(private http: HttpClient) { }

	public getBlogExcerpts(): Observable<BlogExcerpt[]> {
		return this.http.get<BlogExcerpt[]>(environment.api.getBlogExcerpts)
			.pipe(
				catchError(Utils.handleError)
			);
	}

}
