import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: [];
  private articleSubscription: Subscription;

  constructor(
    private articleService: ArticlesService
  ) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.getData().subscribe( (res: any) => {
      this.articles = res;
    },
    error => console.log(error));
  }

  hyphenateUrlParams(id: number, str:string){
    const changedstr = str.replace(/\s+/g, '-');

    return id + '/' + changedstr.toLowerCase();
  }
}
