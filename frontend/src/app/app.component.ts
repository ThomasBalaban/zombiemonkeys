import { Component, OnInit } from '@angular/core';
import { VideosService } from './services/videos.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  private videos: any;
  private videoSubscription: Subscription;

  constructor(
    private videoService: VideosService,
    private cookieService: CookieService,
  ) {

  }

  ngOnInit() {
    if () {
      this.videoSubscription = this.videoService.getData().subscribe( (res: any) => {
        this.videos = res;

        console.log(this.videos);
      },
      error => console.log(error));
    }
  } else {
    this.videos = 'please log in';
  }
}
