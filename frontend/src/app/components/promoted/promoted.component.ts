import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotedService } from 'src/app/services/promoted.service';

@Component({
  selector: 'app-promoted',
  templateUrl: './promoted.component.html',
  styleUrls: ['./promoted.component.scss']
})
export class PromotedComponent implements OnInit {
  promotedItem: any;
  private promotedSubscription: Subscription;

  constructor(
    private promotedService: PromotedService
  ) { }

  ngOnInit() {
    this.promotedSubscription = this.promotedService.getData().subscribe( (res: any) => {
      console.log(res);
      this.promotedItem = res;
    },
    error => console.log(error))
  }

  hyphenateUrlParams(type: string, id: number, str:string){
    const changedstr = str.replace(/\s+/g, '-');

    return type + '/' + id + '/' + changedstr.toLowerCase();
  }

}
