import { Component, OnInit, Input, OnChanges } from '@angular/core';

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
@Component({
  moduleId: module.id,
  selector: 'wm-ratingselect',
  templateUrl: 'ratingselect.component.html',
  styleUrls: ['ratingselect.component.css']
})


export class RatingselectComponent implements OnInit, OnChanges {
  @Input() ratings: Array<any> = [];
  @Input() selectType: number = ALL;
  @Input() onlyContent: boolean = false;
  @Input() desc: object = { all: '全部', positive: '满意', negative: '不满意' };
  private ratingspt: Array<any>;
  private ratingsnt: Array<any>;

  constructor() {
    console.log(this.ratings);
  }

  ngOnChanges() {
    if(this.ratings){
      console.log(this.ratings);
      this.ratingspt = this._positives();
      this.ratingsnt = this._negatives();
    }

  }

  ngOnInit() {
    //this.desc = { all: '全部', positive: '满意', negative: '不满意' };
    this.onlyContent = false;

  }

  select(type: number, event: EventListener) {
    if (!event._constructed) {
      return;
    }
    this.selectType = type;
    //this.$dispatch('ratingtype.select', type);
  }

  toggleContent(event: EventListener) {
    if (!event._constructed) {
      return;
    }
    console.log(8787);
    this.onlyContent = !this.onlyContent;
    //this.$dispatch('content.toggle', this.onlyContent);
  }

  _positives() {
    return this.ratings.filter((rating) => {
      return rating.rateType === POSITIVE;
    });
  }

  _negatives() {
    return this.ratings.filter((rating) => {
      return rating.rateType === NEGATIVE;
    });
  }
}
