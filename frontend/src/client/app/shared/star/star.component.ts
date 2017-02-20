import { Component, Input, OnInit} from '@angular/core';

const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

@Component({
  moduleId: module.id,
  selector: 'wm-plugins-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})

export class StarComponent implements OnInit{
  @Input() size: number;
  @Input() score: number;
  private itemClasses: String[];

  starType(){
    return 'star-' +this.size;
  }

  ngOnInit(){
    this.itemClasses = this.setClasses();
  }

  setClasses(){
    let result:String[] = [];
    let scroe = Math.floor(this.score * 2) / 2;
    let hasDecimal = scroe % 1 !==0;
    let integer = Math.floor(scroe);
    for(let i = 0;i < integer; i++){
      result.push(CLS_ON);
    }
    if(hasDecimal){
      result.push(CLS_HALF);
    }
    while(result.length < LENGTH){
      result.push(CLS_OFF);
    }
    return result;
  }

}
