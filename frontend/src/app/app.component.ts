import { Component, OnInit } from '@angular/core';
import { VideosService } from './services/videos.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  private videos: [];
  private videoSubscription: Subscription;

  constructor(
    private videoService: VideosService,
    private cookieService: CookieService,
    private loginService: LoginService,
  ) {

  }

  ngOnInit() {
    if ( this.cookieService.get('zmat') ) {
      this.videoSubscription = this.videoService.getData().subscribe( (res: any) => {
        this.videos = res;
        console.log('you are logged in as: ', this.loginService.getUserData())
      },
      error => console.log(error));
    } else {
      this.videos;
    }
  }
}
