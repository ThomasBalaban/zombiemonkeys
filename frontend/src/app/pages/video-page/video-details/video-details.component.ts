import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { VideosService } from 'src/app/services/videos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  singleVideo: any;
  private videoSubscription: Subscription;

  constructor(
    private videoService: VideosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.videoSubscription = this.videoService.getSingleData(this.route.snapshot.params.id).subscribe( (res: any) => {
      this.singleVideo = res;
    },
    error => console.log(error))
  }

}
