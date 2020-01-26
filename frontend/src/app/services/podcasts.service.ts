import { Injectable } from '@angular/core';
import { Observable, throwError, fromEventPattern  } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

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

  getAllpodcasts(retries = 0): Observable<any> {
    return this.http.get(this.baseUrl + 'podcast', {headers: this.headers}).pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(PodcastsService.handleError)
    );
  }

  public getData(retries?: number) {
    return this.getAllpodcasts(retries);
  }
}
