import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { ArticlesService } from 'src/app/services/articles.service';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticlePageComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ArticlesService
  ],
  exports: [
    ArticlePageComponent,
    ArticlesComponent,
  ]
})
export class ArticleModule { }
