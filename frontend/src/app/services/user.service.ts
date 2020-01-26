import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser;

  baseUrl = 'http://127.0.0.1:8000/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  public static handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }

  createUser(authData, retries = 0): Observable<any> {
    const body = JSON.stringify(authData);

    return this.http.post(this.baseUrl + 'users/', body, {headers: this.headers}).pipe(
      map( (res: any) => {
        return res;
      }),
      retry(retries),
      catchError(UserService.handleError)
    );
  }

  public makeAccount(authData, retries?: number) {
    return this.createUser(authData, retries);
  }

  loginUser(authData, retries = 0): Observable<any> {
    const body = JSON.stringify(authData);
    console.log('auth data', authData)

    return this.http.post(this.baseUrl + 'login/', body, {headers: this.headers}).pipe(
      map( (res: any) => {
        this.currentUser = res;
        console.log('current user from logging in: ', this.currentUser);
        localStorage.setItem('current user', JSON.stringify(this.currentUser));
        return res;
      }),
      retry(retries),
      catchError(UserService.handleError)
    );
  }

  public login(authData, retries?: number) {
    return this.loginUser(authData, retries);
  }

  getCurrentUserData() {
    return JSON.parse(localStorage.getItem('current user'));
  }

  getAuth() { // I wont need this in the future its just a example to get the token and add it to the header
    const token = this.cookieService.get('zmat');

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    });
  }
}
