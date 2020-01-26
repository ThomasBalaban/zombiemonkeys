import { Component, OnInit } from '@angular/core';
import { VideosService } from './services/videos.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  videos: [];
  private videoSubscription: Subscription;

  constructor(
    private videoService: VideosService,
    private cookieService: CookieService,
    private userService: UserService,
  ) {

  }

  ngOnInit() {
    if ( this.cookieService.get('zmat') ) {
      this.videoSubscription = this.videoService.getData().subscribe( (res: any) => {
        this.videos = res;
        console.log('you are logged in as: ', this.userService.getCurrentUserData())
      },
      error => console.log(error));
    } else {
      this.videos;
    }
  }
}
