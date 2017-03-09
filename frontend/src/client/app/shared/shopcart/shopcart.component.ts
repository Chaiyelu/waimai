import { Component, OnInit, OnChanges, AfterViewChecked, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SellerService } from '../../core/service/seller.service';
import { SellerModel } from '../models/seller.model';
import { FoodModel } from '../models/food.model';
import { fold, fade } from '../../core/animations/fold';
import * as BScroll from 'better-scroll/build/bscroll';

@Component({
  moduleId: module.id,
	selector: 'wm-shopcart',
	templateUrl: 'shopcart.component.html',
  styleUrls: ['shopcart.component.css'],
  animations: [ fold, fade ]
})

export class ShopcartComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() selectedFoods: any[];
  @Output() selectFoodsEmit = new EventEmitter();
  @ViewChild('listcontent') listContent: ElementRef;

  private seller:object;
  private payStateText:String;
  private payStateClass:String;
  private ttPrice:number;
  private ttCount:number;
  private isFold:boolean;
  private status:string = 'off';

  constructor(private sellerService:SellerService){
    this.seller = {};
    this.isFold = true;
  }

  ngOnChanges() {
    this.ttPrice = this.totalPrice();
    this.ttCount = this.totalCount();
    this.payState();
  }

	ngOnInit() {
    // this.seller = this.sellerService.seller;
    // console.log(this.seller);
    this.sellerService.getSeller().subscribe(
      seller => {
        this.seller = seller;
        this.payState();
        console.log(seller);
      },
      error => console.log(error)
    );

  }

  ngAfterViewChecked(){

  }

  totalPrice(){
    let total = 0;
    this.selectedFoods.forEach((food) => {
      total += food.price * food.count;
    });
    return total;
  }

  totalCount(){
    let count = 0;
    this.selectedFoods.forEach((food) => {
      count += food.count;
    })
    return count;
  }

  payState(){
    if (this.totalPrice() === 0) {
      this.payStateText = `￥${this.seller.minPrice}元起送`;
      this.payStateClass = 'not-enough';
    } else if (this.totalPrice() < this.seller.minPrice) {
      let diff = this.seller.minPrice - this.totalPrice();
      this.payStateText = `还差￥${diff}元起送`;
      this.payStateClass = 'not-enough';
    } else {
      this.payStateText = '去结算';
      this.payStateClass = 'enough';
    }
  }

  listShow(){
    if (!this.totalCount()) {
      this.isFold = true;
      return "off";
    }
    let show = (!this.isFold)?'on':'off';
    if (show === 'on') {
      let scroll  = new BScroll(this.listContent.nativeElement, {
        click: true
      });
    }
    return show;
  }

  toggleList(){
    if (!this.totalCount()) {
      return;
    }
    this.isFold = !this.isFold;
    this.status = this.listShow();
  }

  selectFoods(){
    this.selectFoodsEmit.emit();
  }

  empty(){
    this.selectedFoods.forEach((food) => {
      food.count = 0;
    });
    this.status = this.listShow();
    this.ttPrice = this.totalPrice();
    this.ttCount = this.totalCount();
    this.payState();
  }

  hideList(){
    this.isFold = true;
    this.status = this.listShow();
  }

  pay(){
    event.stopPropagation();
    if (this.totalPrice() < this.seller.minPrice) {
      return;
    }
    window.alert(`去支付${this.ttPrice}`);
  }
}
