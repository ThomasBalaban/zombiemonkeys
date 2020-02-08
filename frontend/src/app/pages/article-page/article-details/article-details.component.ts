import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  singleArticle: any;
  private articleSubscription: Subscription;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.articleSubscription = this.articlesService.getSingleArticle(this.route.snapshot.params.id).subscribe( (res: any) => {
      this.singleArticle = res;
    },
    error => console.log(error));
  }

}
