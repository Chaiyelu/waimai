import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'angular2-infinite-scroll/angular2-infinite-scroll';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, InfiniteScrollModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }
