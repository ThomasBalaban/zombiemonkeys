import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastPageComponent } from './podcast-page.component';
import { PodcastsComponent } from 'src/app/components/podcasts/podcasts.component';
import { PodcastsService } from 'src/app/services/podcasts.service';

@NgModule({
  declarations: [
    PodcastPageComponent,
    PodcastsComponent
  ],
  imports: [
    CommonModule
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
