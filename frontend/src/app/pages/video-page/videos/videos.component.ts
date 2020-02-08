import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideosService } from 'src/app/services/videos.service';

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

  hyphenateUrlParams(id: number, str:string){
    const changedstr = str.replace(/\s+/g, '-')

    return id + '/' + changedstr.toLowerCase();
  }

}
