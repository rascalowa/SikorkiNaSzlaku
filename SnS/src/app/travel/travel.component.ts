import { ExpandTest } from './expand-test.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TravelExpandService } from './travel-expand';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css', '../app.component.css']
})
export class TravelComponent implements OnInit {
  // $ to mark observables
  isScreenSmall$: Observable<boolean>;
  fetchedExpandsArray: ExpandTest[] = [];
  isFetching = false;
  error = null;
  isAuthenticated: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private travelExpandService: TravelExpandService,
    ) { }

  ngOnInit(): void {
    this.isScreenSmall$ = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    //matches - boolean
    .pipe(map(({ matches })=> matches ));
}

  // onStoreExpands(){
  //   this.dbService.storeExpands();
  // }

  openModal(id: number) {
    this.travelExpandService.expandId = id;
    this.travelExpandService.open('expand');
  }

}

