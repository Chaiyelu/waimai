import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/RX';

import { GoodModel } from '../../shared/models/good.model';
import { SITE_HOST_URL } from '../../shared/index';

@Injectable()
export class GoodsService {
  constructor(private http:Http){}

  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }

  getGoods(){
    return this.http.get(SITE_HOST_URL+'goods')
                    .map(res => <GoodModel[]>res.json().data)
                    .catch(this.handleError);
  }


}
