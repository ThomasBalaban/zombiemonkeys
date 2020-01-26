import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VideosService } from 'src/app/services/videos.service';
import { VideoPageComponent } from './video-page.component';
import { VideosComponent } from 'src/app/components/videos/videos.component';

@NgModule({
  declarations: [
    VideoPageComponent,
    VideosComponent
  ],
  imports: [
    CommonModule
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
