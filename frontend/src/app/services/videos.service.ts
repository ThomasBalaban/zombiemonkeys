import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

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

  getAllVideos(retries = 0): Observable<any> {
    return this.http.get(this.baseUrl + 'videos', {headers: this.headers}).pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(VideosService.handleError)
    );
  }

  public getData(retries?: number) {
    return this.getAllVideos(retries);
  }

  getSingleVideo(videoId, retries = 0): Observable<any> {
    return this.http.get(this.baseUrl + 'videos/' + videoId, {headers: this.headers}).pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(VideosService.handleError)
    );
  }

  public getSingleData(videoId: number, retries?: number) {
    return this.getSingleVideo(videoId, retries);
  }
}
