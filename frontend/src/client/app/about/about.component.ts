import { Component, OnInit } from '@angular/core';
import { SellerModel } from '../shared/models/seller.model';
import { SellerService } from '../core/service/seller.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  private seller:object;

  constructor(private sellerService:SellerService){
    this.seller = {};
  }

  ngOnInit(){
    this.sellerService.getSeller().subscribe(
      seller => {
        this.seller = seller;
      },
      error => console.log(error)
    );
  }
}
