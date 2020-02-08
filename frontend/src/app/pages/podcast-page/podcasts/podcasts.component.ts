import { Component, OnInit } from '@angular/core';
import { PodcastsService } from 'src/app/services/podcasts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  podcasts: [];
  private podcastSubscription: Subscription;

  constructor(
    private podcastService: PodcastsService
  ) { }

  ngOnInit() {
    this.podcastSubscription = this.podcastService.getData().subscribe( (res: any) => {
      this.podcasts = res;
    },
    error => console.log(error));

    
  }

  hyphenateUrlParams(id: number, str:string){
    const changedstr = str.replace(/\s+/g, '-')

    return id + '/' + changedstr.toLowerCase();
  }
}
