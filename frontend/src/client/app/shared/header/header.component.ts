import { Component, Input, OnInit} from '@angular/core';
import { SellerModel } from '../models/seller.model';

@Component({
  moduleId: module.id,
  selector: 'wm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() seller: SellerModel;

  private classMap:String[];
  detailHidden: boolean = true;
  constructor(){
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
}

  ngOnInit(){

  }

  showDetail(){
    this.detailHidden = false;
  }

  hideDetail(){
    this.detailHidden = true;
  }
}
