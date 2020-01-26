import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './common/ui/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ArticlesComponent } from './components/articles/articles.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { PromotedComponent } from './components/promoted/promoted.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { PodcastPageComponent } from './pages/podcast-page/podcast-page.component';
import { VideoModule } from './pages/video-page/video.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ArticlesComponent,
    PodcastsComponent,
    PromotedComponent,
    HomePageComponent,
    ArticlePageComponent,
    PodcastPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VideoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
