import { TravelExpand } from './travel-expand/travel-expand.model';
import { TravelListService } from './travel-list.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

//Necessary when my service gets another service injected
@Injectable({ providedIn: 'root' })
export class DBService{

  constructor(private http: HttpClient, private travelListService: TravelListService) {}

  storeExpands(){
   const expands = this.travelListService.getTravelList();
   this.http.put('https://ng-sns.firebaseio.com/expands.json', expands)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchExpands(){
    return this.http
      .get<TravelExpand[]>(
        'https://ng-sns.firebaseio.com/expands.json'
        )
      .pipe(
        tap(expands => {
          this.travelListService.setTravelList(expands);
        })
        )
      };
}
