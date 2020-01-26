import { Injectable } from '@angular/core';
import { Observable, throwError, forkJoin  } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry, filter, switchMap } from 'rxjs/operators';
import { ArticlesService } from './articles.service';
import { PodcastsService } from './podcasts.service';
import { VideosService } from './videos.service';

@Injectable({
  providedIn: 'root'
})
export class PromotedService {

  baseUrl = 'http://127.0.0.1:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private articleService: ArticlesService,
    private podcastService: PodcastsService,
    private videoService: VideosService,
  ) { }

  public static handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }

  getPromotedItems(retries = 0): Observable<any> {
    return this.articleService.getAllArticles()
      .pipe(
        switchMap( (articles) => {
          return this.podcastService.getAllpodcasts()
          .pipe(
            switchMap( (podcasts) => {
              return this.videoService.getAllVideos()
              .pipe(
                map( (videos: any) => {
                  const promotedResponse = {
                    article: articles.filter(articles => articles.promoted > 0),
                    podcast: podcasts.filter(podcasts => podcasts.promoted > 0),
                    video: videos.filter(videos => videos.promoted > 0)
                  }

                  return promotedResponse
                })
              )
            })
          )
        }),
        retry(retries),
        catchError(PromotedService.handleError)
      );
  }

  public getData(retries?: number) {
    return this.getPromotedItems(retries);
  }
}
// return this.http.get(this.baseUrl + 'articles', {headers: this.headers})
//       .pipe(
//         map( (res: any) => {
//           return //res.filter(res => res.promoted > 0);
//         }),
//         retry(retries),
//         catchError(PromotedService.handleError)
//       );