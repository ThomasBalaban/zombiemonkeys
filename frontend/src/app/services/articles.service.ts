import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl = 'http://127.0.0.1:8000/api/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
  ) { }

  public static handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }

  getAllArticles(retries = 0): Observable<any> {
    return this.http.get(this.baseUrl + 'articles', {headers: this.headers}).pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(ArticlesService.handleError)
    );
  }

  public getData(retries?: number) {
    return this.getAllArticles(retries);
  }

  getSingleArticle(articleId, retries = 0): Observable<any> {
    return this.http.get(this.baseUrl + 'articles/' + articleId, {headers: this.headers}).pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(ArticlesService.handleError)
    );
  }

  public getSingleData(articleId: number, retries?: number) {
    return this.getSingleArticle(articleId, retries);
  }
}
