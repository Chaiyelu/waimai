import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SellerService } from './service/seller.service';
import { GoodsService } from './service/goods.service';
import { RatingsService } from './service/ratings.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [SellerService, GoodsService, RatingsService]
})

export class CoreModule {}
