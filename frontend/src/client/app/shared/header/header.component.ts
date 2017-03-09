import { Component, Input, OnInit} from '@angular/core';
import { SellerModel } from '../models/seller.model';
import { flyIn } from '../../core/animations/fly-in';

@Component({
  moduleId: module.id,
  selector: 'wm-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  animations: [ flyIn ]
})
export class HeaderComponent implements OnInit{
  @Input() seller: SellerModel;

  private classMap:String[];
  detailShow: boolean = false;
  constructor(){
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
}

  ngOnInit(){

  }

  showDetail(){
    this.detailShow = true;
  }

  hideDetail(){
    this.detailShow = false;
  }
}
