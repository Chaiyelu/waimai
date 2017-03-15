import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/RX';

import { RatingModel } from '../../shared/models/rating.model';
import { SITE_HOST_URL } from '../../shared/index';

@Injectable()
export class RatingsService {
  constructor(private http:Http){}

  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }

  getRatings(){
    return this.http.get(SITE_HOST_URL+'ratings')
                    .map(res => <RatingModel>res.json().data)
                    .catch(this.handleError);
  }
}
