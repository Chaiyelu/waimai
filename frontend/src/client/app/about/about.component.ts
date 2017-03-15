import { Component, OnInit, OnChanges, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { SellerModel } from '../shared/models/seller.model';
import { SellerService } from '../core/service/seller.service';
import { RatingModel } from '../shared/models/rating.model';
import { RatingsService } from '../core/service/ratings.service';
import * as BScroll from 'better-scroll/build/bscroll';

const ALL = 2;

@Component({
  moduleId: module.id,
  selector: 'wm-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit, OnChanges, AfterViewChecked{
  @ViewChild('elratings') elRatings: ElementRef;
  private seller: object;
  private ratings: RatingModel[];
  private selectType: number;
  private onlyContent: boolean = false;
  private desc: object;
  private scroll: any;
  private allowInitScroll:boolean = false;
  constructor(private sellerService:SellerService,private ratingsService:RatingsService){
    this.seller = {};
    this.ratings = [];
  }

  ngOnChanges(){

  }

  ngOnInit(){
    this.selectType = ALL;
    this.onlyContent = false;
    this.desc = { all: '全部', positive: '满意', negative: '不满意' };

    this.sellerService.getSeller().subscribe(
      seller => {
        this.seller = seller;
        this.allowInitScroll = true;
      },
      error => console.log(error)
    );

    this.ratingsService.getRatings().subscribe(
      ratings => {
        this.ratings = ratings;
        console.log(this.ratings);
        this.allowInitScroll = true;
      },
      error => console.log(error)
    );

  }

  ngAfterViewChecked() {
    if (this.allowInitScroll) {
      this._initScroll();
      this.allowInitScroll = false;
    }
  }

 _initScroll() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.elRatings.nativeElement, {
        click: true
      });
    } else {
      this.scroll.refresh();
    }
  }

  needShow(type?: number, text?:string){
    if (this.onlyContent && !text) {
      return false;
    }
    if (this.selectType == ALL) {
      return true;
    } else {
      return this.selectType == type;
    }
  }

  onToggleContent(onlyCon:boolean){
    console.log(onlyCon);
    this.onlyContent = onlyCon;
  }

  onSelectType(type: number) {
    this.selectType = type;
    console.log(type);
    //this.allowInitScroll = true;
  }
}
