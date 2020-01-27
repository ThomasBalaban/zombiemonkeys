import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.scss']
})
export class PodcastDetailsComponent implements OnInit {
  singlePodcast: any;
  private podcastSubscription: Subscription;

  constructor(
    private podcastService: PodcastsService,
  ) { }

  ngOnInit() {
    this.podcastSubscription = this.podcastService.getSingleData(1).subscribe( (res: any) => {
      this.singlePodcast = res;
    },
    error => console.log(error))
  }

}
