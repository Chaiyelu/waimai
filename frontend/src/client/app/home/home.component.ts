import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterViewChecked, EventEmitter } from '@angular/core';
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
export class HomeComponent implements OnInit, OnChanges, AfterViewChecked {
  private goods: GoodModel[];
  private classMap: String[];
  private allowInitScroll: boolean = false;
  private BScroll: any;
  private listHeight: number[] = [];
  private scrollY: number = 0;
  @ViewChild('menuwrapper') menuWrapper: ElementRef;
  @ViewChild('foodswrapper') foodsWrapper: ElementRef;
  @ViewChild('foodlists') foodsLists: ElementRef;
  private menuScroll: any;
  private foodsScroll: any;
  private selectedFoods: any[];

  constructor(private goodsService: GoodsService) {
    this.goods = [];
    this.selectedFoods = [];
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }

  /**
   * 获取所有物品
   */
  ngOnChanges(changes: SimpleChanges) {

  }

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

  ngAfterViewChecked() {
    if (this.allowInitScroll) {
      this._initScroll();
      this._calculateHeight();
    }
    this.allowInitScroll = false;
    this._currentIndex();
    //console.log(this.goods);

  }

  _initScroll() {
    this.menuScroll = new BScroll(this.menuWrapper.nativeElement, {
      click: true
    });
    this.foodsScroll = new BScroll(this.foodsWrapper.nativeElement, {
      click: true,
      probeType: 3
    });

    this.foodsScroll.on('scroll', (pos: any) => {
      this.scrollY = Math.abs(Math.round(pos.y));
    });

  }

  _calculateHeight() {
    let foodLists = this.foodsWrapper.nativeElement.getElementsByClassName('food-list-hook');
    console.log(foodLists);
    let height = 0;
    this.listHeight.push(height);
    for (let i = 0; i < foodLists.length; i++) {
      let item = foodLists[i];
      height += item.clientHeight;
      this.listHeight.push(height);
    }
    console.log(this.listHeight);
  }

  _currentIndex() {
    for (let i = 0; i < this.listHeight.length; i++) {
      let height1 = this.listHeight[i];
      let height2 = this.listHeight[i + 1];
      if ((this.scrollY >= height1 && this.scrollY < height2)) {
        return i;
      }
    }
    return 0;
  }

  selectMenu(index: number, event: EventListener) {
    if (!event._constructed) {
      return;
    }
    let foodLists = this.foodsWrapper.nativeElement.getElementsByClassName('food-list-hook');
    let el = foodLists[index];
    this.foodsScroll.scrollToElement(el, 300);
    console.log(index);
  }

  selectFoods(){
    let foods:any[] = [];
    this.goods.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food);
        }
      })
    });
    this.selectedFoods = foods;
    console.log(this.selectedFoods);
  }
}
