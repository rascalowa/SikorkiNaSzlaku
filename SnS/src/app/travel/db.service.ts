import { TravelExpand } from './travel-expand/travel-expand.model';
import { TravelListService } from './travel-list.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DBService{

  private travelExpands: TravelExpand[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private travelListService: TravelListService) {}

  // IN CASE DATA STORAGE NEED TO BE UPDATED - disable fetchExpands here + resolver
  // storeExpands(){
  //  const expands = this.travelListService.getTravelList();
  //  this.http.put('https://ng-sns.firebaseio.com/expands.json', expands)
  //   .subscribe(response => {
  //     console.log(response);
  //   });
  // }

  fetchExpands(){
    // take 1 (to get token) and unsubscribe - get one user if there is any when db data are fetched
    return this.http
    .get<TravelExpand[]>(
      'https://ng-sns.firebaseio.com/expands.json'
      )
      .pipe(
        tap(expands => {
          this.travelListService.setTravelList(expands);
        })
      );
  };

  // to return direct reference to this array - exact copy in case of changing we still have original one, so we really can access it from outside
  getTravelList() {
    return this.travelExpands.slice();
  }

  getTravelCountry(index: number){
    return this.travelExpands[index];
  }
}
