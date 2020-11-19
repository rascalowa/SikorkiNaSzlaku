import { ExpandTest } from './expand-test.model';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TravelExpandService } from './travel-expand';
import { DBService } from './db.service';
// import { HeaderComponent } from '../header/header.component';

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
    private http: HttpClient,
    private dbService: DBService,
    // private headerCmp: HeaderComponent
    ) { }

  ngOnInit(): void {
    this.isScreenSmall$ = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    //matches - boolean
    .pipe(map(({ matches })=> matches ));
    // this.dbService.
    this.dbService.fetchExpands().subscribe();
    // this.isAuthenticated = this.headerCmp.isAuthenticated;
    // console.log(this.isAuthenticated);
}

  onStoreExpands(){
    this.dbService.storeExpands();
  }


//   onDeleteAllExpands(){
//     this.dbService.deleteAllExpands().subscribe(() => {
//       this.fetchedExpandsArray = [];
//     })
//   }

//   onHandleError(){
//     this.error = null;
//   }

  openModal(id: number) {
    this.travelExpandService.expandId = id;
    this.travelExpandService.open('expand');
  }

  // private fetchExpands(){
  //   this.isFetching = true;
  //   this.dbService.fetchExpands().subscribe(
  //     //successful case
  //     fetchedData => {
  //     this.isFetching = false;
  //     this.fetchedExpandsArray = fetchedData;
  //     //second argument is called when the error is thrown
  //     },
  //     error => {
  //     this.isFetching = false;
  //     this.error = error.message;
  //     console.log(error);
  //     }
  //   );
  // }
}

