import { Component, OnChanges, OnInit, AfterViewInit, AfterContentChecked.Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { flyInRight, flyShowRight } from '../../core/animations/fly-in';
import * as BScroll from 'better-scroll/build/bscroll';

const ALL = 2;

@Component({
  moduleId: module.id,
  selector: 'wm-food',
  templateUrl: 'food.component.html',
  styleUrls: ['food.component.css'],
  animations: [flyInRight, flyShowRight]
})

export class FoodComponent implements OnChanges, OnInit, AfterViewInit, AfterContentChecked {
  @Input() food: object;
  @Output() selectFoodsEmit = new EventEmitter();
  @ViewChild('fooddetail') foodDetail: ElementRef;
  private allowInitScroll: boolean = false;
  private selectType: number;
  private onlyContent: boolean;
  private desc: object = { all: '全部', positive: '推荐', negative: '吐槽' };
  private scroll:any;

  private showFlag: string;

  constructor() {
    this.showFlag = 'off';
  }

  ngOnChanges() {
    console.log(this.food);

  }

  ngOnInit() {
    this.selectType = ALL;
    this.onlyContent = true;
    //this.desc = { all: '全部', positive: '推荐', negative: '吐槽' };
  }

  ngAfterViewInit() {
  }

  ngAfterContentChecked() {

  }

  _initScroll() {
    // let scroll = new BScroll(this.foodDetail.nativeElement, {
    //   click: true
    // })
    if (!this.scroll) {
      this.scroll = new BScroll(this.foodDetail.nativeElement, {
        click: true
      });
    } else {
      this.scroll.refresh();
    }
  }
  isShow() {
    this.showFlag = 'on';
    this.allowInitScroll = true;
  }

  isHide() {
    this.showFlag = 'off';
  }

  onAddFirst() {
    if (!event._constructed) {
      return;
    }
    this.food.count = 1;
    this.selectFoodsEmit.emit();
  }

  selectFoods() {
    this.selectFoodsEmit.emit();
  }

}
