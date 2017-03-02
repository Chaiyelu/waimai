import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SellerService } from '../../core/service/seller.service';
import { SellerModel } from '../models/seller.model';
import { FoodModel } from '../models/food.model';

@Component({
  moduleId: module.id,
	selector: 'wm-shopcart',
	templateUrl: 'shopcart.component.html',
  styleUrls: ['shopcart.component.css']
})

export class ShopcartComponent implements OnInit, OnChanges {
  @Input() selectFoods: any[] = [];

  private seller:SellerModel;
  private payStateText:String;
  private payStateClass:String;

  constructor(private sellerService:SellerService){
    this.seller = {};
  }

  ngOnChanges() {

  }

	ngOnInit() {
    // this.seller = this.sellerService.seller;
    // console.log(this.seller);
    this.sellerService.getSeller().subscribe(
      seller => {
        this.seller = seller;
        console.log(seller);
      },
      error => console.log(error)
    );
  }


  totalPrice(){
    let total = 0;
    this.selectFoods.forEach((food) => {
      total += food.price * food.count;
    });
    return total;
  }

  totalCount(){
    let count = 0;
    this.selectFoods.forEach((food) => {
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

}
