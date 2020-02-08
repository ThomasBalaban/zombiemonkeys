import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { PodcastsService } from 'src/app/services/podcasts.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.podcastSubscription = this.podcastService.getSingleData(this.route.snapshot.params.id).subscribe( (res: any) => {
      this.singlePodcast = res;
    },
    error => console.log(error))
  }

}
