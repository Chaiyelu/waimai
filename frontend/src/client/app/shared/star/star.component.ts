import { Component, Input, OnInit, OnChanges} from '@angular/core';

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

export class StarComponent implements OnInit, OnChanges{
  @Input() size: number;
  @Input() score: number;
  private itemClasses: String[];

  starType(){
    return 'star-' +this.size;
  }

  ngOnChanges(){
    /**
     * 如果输入属性是父组件中异步请求过来的数据时
     * 必须在ngOnchanges()做监听，不能在ngOninit(),不然会获取不到数据
     */
    this.itemClasses = this.setClasses();
  }

  ngOnInit(){
  }

  setClasses(){
    console.log(this.score);
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
