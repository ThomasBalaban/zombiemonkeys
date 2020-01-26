import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'videos', component: VideoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
