import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/ui/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { PromotedComponent } from './components/promoted/promoted.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VideoModule } from './pages/video-page/video.module';
import { ArticleModule } from './pages/article-page/article.module'
import { PodcastModule } from './pages/podcast-page/podcast.module';
import { NavigationComponent } from './components/ui/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PromotedComponent,
    HomePageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VideoModule,
    ArticleModule,
    PodcastModule,
    RouterModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
