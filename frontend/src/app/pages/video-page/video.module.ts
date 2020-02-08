import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VideosService } from 'src/app/services/videos.service';
import { VideoPageComponent } from './video-page.component';
import { VideosComponent } from './videos/videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    VideoPageComponent,
    VideosComponent,
    VideoDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    VideosService
  ],
  exports: [
    VideoPageComponent,
    VideosComponent
  ]
})
export class VideoModule { }
