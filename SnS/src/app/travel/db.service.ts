import { TravelExpand } from './travel-expand/travel-expand.model';
import { TravelListService } from './travel-list.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DBService {

  constructor(private http: HttpClient, private travelListService: TravelListService) {}

  // IN CASE DATA STORAGE NEED TO BE UPDATED - disable fetchExpands here + resolver from routing
  // storeExpands(){
  //  const expands = this.travelListService.getTravelList();
  //  console.log(expands)
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
}
