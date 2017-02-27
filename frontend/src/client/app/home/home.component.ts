import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { GoodsService } from '../core/service/goods.service';
import { GoodModel } from '../shared/models/good.model';
//import { Iscroll } from '../core/directive/iscroll.directive';
//import * as IScroll from 'iscroll/build/iscroll';
import * as BScroll from 'better-scroll/build/bscroll';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private goods:GoodModel[];
  private classMap:String[];
  private allowInitScroll:boolean = false;
  private BScroll: any;
  private listHeight:number[] = [];
  private scrollY:number = 0;
  @ViewChild('menuwrapper') menuWrapper:ElementRef;
  @ViewChild('foodswrapper') foodsWrapper:ElementRef;
  @ViewChild('foodlists') foodsLists:ElementRef;
  private menuScroll:any;
  private foodsScroll:any;

  constructor(private goodsService:GoodsService) {
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
  }

  /**
   * 获取所有物品
   */
  ngOnInit() {
    this.goodsService.getGoods().subscribe(
      goods => {
        this.goods = goods;
        this.allowInitScroll = true;
        console.log(111);

        //let scroll =new BScroll(this.bscroll.nativeElement);
      },
      error => console.log(error)
    )
    //this.bscroll.nativeElement.style.backgroundColor = 'yellow';
  }

  ngAfterViewInit() {
    // this._initScroll();

  }
  ngAfterViewChecked() {
    if(this.allowInitScroll){
      this._initScroll();
      this._calculateHeight();
    }
    this.allowInitScroll = false;
    this._currentIndex();
  }

  _initScroll(){
    this.menuScroll = new BScroll(this.menuWrapper.nativeElement, {
      click: true
    });
    this.foodsScroll = new BScroll(this.foodsWrapper.nativeElement, {
      probeType: 3
    });

    this.foodsScroll.on('scroll', (pos) => {
      this.scrollY = Math.abs(Math.round(pos.y));
    });

  }

  _calculateHeight(){
    let foodLists = this.foodsWrapper.nativeElement.getElementsByClassName('food-list-hook');
    console.log(foodLists);
    let height = 0;
    this.listHeight.push(height);
    for(let i = 0;i < foodLists.length;i++){
      let item = foodLists[i];
      height += item.clientHeight;
      this.listHeight.push(height);
    }
    console.log(this.listHeight);
  }

  _currentIndex(){
    for(let i =0; i < this.listHeight.length; i++){
      let height1 = this.listHeight[i];
      let height2 = this.listHeight[i+1];
      if ((this.scrollY >= height1 && this.scrollY < height2)) {
        return i;
      }
    }
    return 0;
  }

  selectMenu(index:number,event:EventListener){
    if (!event._constructed) {
      return;
    }
    let foodLists = this.foodsWrapper.nativeElement.getElementsByClassName('food-list-hook');
    let el = foodLists[index];
    this.foodsScroll.scrollToElement(el, 300);
    console.log(index);
  }
}
