import { Component, OnInit} from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { SellerService } from './core/service/seller.service';
import { SellerModel } from './shared/models/seller.model';
/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'wm-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private seller:SellerModel;

  constructor(private sellerService:SellerService) {
    console.log('Environment config', Config);
  }

  ngOnInit(){
    this.sellerService.getSeller().subscribe(
      seller => {
        this.seller = seller;
        console.log(seller);
      },
      error => console.log(error)
    );
  }
}
