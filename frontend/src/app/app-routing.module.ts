import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { PodcastPageComponent } from './pages/podcast-page/podcast-page.component';
import { PodcastDetailsComponent } from './pages/podcast-page/podcast-details/podcast-details.component';
import { ArticleDetailsComponent } from './pages/article-page/article-details/article-details.component';
import { VideoDetailsComponent } from './pages/video-page/video-details/video-details.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'videos/:id/:name', component: VideoDetailsComponent },
  { path: 'videos', component: VideoPageComponent },
  { path: 'articles/:id/:name', component: ArticleDetailsComponent },
  { path: 'articles', component: ArticlePageComponent },
  { path: 'podcasts/:id/:name', component: PodcastDetailsComponent },
  { path: 'podcasts', component: PodcastPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
