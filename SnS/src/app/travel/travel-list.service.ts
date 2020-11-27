import { TravelExpand } from './travel-expand/travel-expand.model';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TravelListService {
private travelExpands: TravelExpand[] = [];

//IN CASE SOME CHANGES ARE NEEDED


  // WITH FIRST PAGE LOADING
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
