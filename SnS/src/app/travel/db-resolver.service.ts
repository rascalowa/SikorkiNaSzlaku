import { DBService } from './db.service';
import { TravelExpand } from './travel-expand/travel-expand.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

//To be sure that data necessary for loading page will be already at place - resolver runs whenever this route gets loaded!!
@Injectable({providedIn: 'root'})
export class DBResolverService implements Resolve<TravelExpand[]> {

  constructor(private dbService: DBService) {}

  // WITH FIRST PAGE LOADING
  //will subscribe for me
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dbService.fetchExpands();
  }
}
