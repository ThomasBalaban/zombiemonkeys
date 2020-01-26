import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: [];
  private videoSubscription: Subscription;

  constructor(
    private videoService: VideosService,
  ) { }

  ngOnInit() {
    this.videoSubscription = this.videoService.getData().subscribe( (res: any) => {
      this.videos = res;
    },
    error => console.log(error));
  }

}
