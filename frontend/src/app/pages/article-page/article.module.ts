import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { ArticlesComponent } from 'src/app/components/articles/articles.component';
import { ArticlesService } from 'src/app/services/articles.service';

@NgModule({
  declarations: [
    ArticlePageComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ArticlesService
  ],
  exports: [
    ArticlePageComponent,
    ArticlesComponent
  ]
})
export class ArticleModule { }
