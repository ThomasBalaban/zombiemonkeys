import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastPageComponent } from './podcast-page.component';
import { PodcastsComponent } from 'src/app/pages/podcast-page/podcasts/podcasts.component';
import { PodcastsService } from 'src/app/services/podcasts.service';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PodcastPageComponent,
    PodcastsComponent,
    PodcastDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    PodcastsService
  ],
  exports: [
    PodcastPageComponent,
    PodcastsComponent
  ]
})
export class PodcastModule { }
