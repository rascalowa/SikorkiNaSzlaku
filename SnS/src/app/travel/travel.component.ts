import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TravelExpandService } from './travel-expand';
//IN CASE FIREBASE STORAGE NEEDS TO BE UPDATED
// import { DBService } from './db.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css', '../app.component.css']
})
export class TravelComponent implements OnInit {
  isScreenSmall$: Observable<boolean>;
  error = null;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private travelExpandService: TravelExpandService,
    // private dbService: DBService
    ) { }

  ngOnInit(): void {
    this.isScreenSmall$ = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    //matches - boolean
    .pipe(map(({ matches })=> matches ));
}
  // IN CASE DATA STORAGE NEED TO BE UPDATED
  // onStoreExpands(){
  //   this.dbService.storeExpands();
  // }

  openModal(id: number) {
    this.travelExpandService.expandId = id;
    this.travelExpandService.open('expand');
  }

  onScroll() {
    window.scroll(0,0);
  }
}

