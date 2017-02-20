import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/RX';

import { SellerModel } from '../../shared/models/seller.model';
import { SITE_HOST_URL } from '../../shared/index';

@Injectable()
export class SellerService {
  constructor(private http:Http){}

  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }

  getSeller(){
    return this.http.get(SITE_HOST_URL+'seller')
                    .map(res => <SellerModel>res.json().data)
                    .catch(this.handleError);
  }
}
