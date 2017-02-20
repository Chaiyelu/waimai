import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SellerService } from './service/seller.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [SellerService]
})

export class CoreModule {}
