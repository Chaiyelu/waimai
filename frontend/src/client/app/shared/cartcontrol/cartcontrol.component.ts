import { Component, OnInit, OnChanges, SimpleChanges ,Input, Output, EventEmitter } from '@angular/core';
import { moveIn, roll } from '../../animations/fly-in';

@Component({
  moduleId: module.id,
  selector: 'cartcontrol',
  templateUrl: 'cartcontrol.component.html',
  styleUrls: ['cartcontrol.component.css'],
  animations: [moveIn, roll]
})

export class CartcontrolComponent implements OnInit {
  @Input() food: {} = {};
  @Output() selectFoodsEmit = new EventEmitter();

  private isRoll: string;

  constructor() {
    this.food = {};
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      // let chng = changes[propName];
      // let cur = JSON.stringify(chng.currentValue);
      // let prev = JSON.stringify(chng.previousValue);
      // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      if (this.food.count > 0) {
        this.isRoll = 'active';
      } else {
        this.isRoll = 'inactive';
      }
    }
  }

  ngOnInit() {
    //console.log(this.food);
  }

  addCart(event: EventListener) {
    if (!event._constructed) {
      return;
    }
    if (!this.food.count) {
      this.food.count = 1;
    } else {
      this.food.count++;
    }
    this.selectFoodsEmit.emit();
    console.log(this.food);
  }

  decreaseCart(event: EventListener) {
    if (!event._constructed) {
      return;
    }
    if (this.food.count) {
      this.food.count--;
    }
    this.selectFoodsEmit.emit();
  }



}
