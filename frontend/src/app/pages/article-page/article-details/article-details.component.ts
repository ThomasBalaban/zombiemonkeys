import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  singleArticle: any;
  user: any;
  public comment = [];
  private articleSubscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private articlesService: ArticlesService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.articleSubscription = this.articlesService.getSingleArticle(this.route.snapshot.params.id).subscribe( (res: any) => {
      this.singleArticle = res;
      this.getCommentInfo();
    },
    error => console.log(error));
  }

  getCommentInfo() {
    this.singleArticle.comments.forEach(item => {      
      this.userService.getSingleUser(item.user).subscribe( (user: any) => {
        this.user = user;
        if (this.user.id = item.user) {
          item.userinfo = this.user
        }
        this.comment.push(item);
      }, error => console.log(error))
    });
  }

}
