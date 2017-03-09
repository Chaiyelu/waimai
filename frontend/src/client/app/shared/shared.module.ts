import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/index';
import { NavbarComponent } from './navbar/index';
import { ShopcartComponent } from './shopcart/index';
import { StarComponent } from './star/star.component';
import { CartcontrolComponent } from './cartcontrol/cartcontrol.component';
import { FoodComponent } from './food/food.component';
import { SplitComponent } from './split/split.component';
import { RatingselectComponent } from './ratingselect/ratingselect.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, NavbarComponent, StarComponent,
    ShopcartComponent, CartcontrolComponent, FoodComponent, SplitComponent,
    RatingselectComponent
  ],
  exports: [HeaderComponent, NavbarComponent, StarComponent,
    CommonModule, FormsModule, RouterModule, ShopcartComponent,
    CartcontrolComponent, FoodComponent, SplitComponent,
    RatingselectComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
