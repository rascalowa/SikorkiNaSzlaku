import { TravelExpand } from './travel-expand/travel-expand.model';
// import { TravelListService } from './travel-list.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

//Necessary when my service gets another service injected
@Injectable({ providedIn: 'root' })
export class DBService{
  private travelExpands: TravelExpand[] = [];

  constructor(private http: HttpClient) {}


  storeExpands(){
   const expands = this.getTravelList();
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
          this.setTravelList(expands);
        })
        )
      };

  setTravelList(travelExpands: TravelExpand[]) {
    this.travelExpands = travelExpands;
  }

  // to return direct reference to this array - exact copy in case of changing we still have original one, so we really can access it from outside
  getTravelList() {
    return this.travelExpands.slice();
  }

  getTravelCountry(index: number){
    return this.travelExpands[index];
  }

}
