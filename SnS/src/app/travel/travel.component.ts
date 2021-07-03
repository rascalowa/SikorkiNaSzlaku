import { TravelExpand } from './travel-expand/travel-expand.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  countryId: number = null;
  isScreenSmall$: Observable<boolean>;
  error = null;
  activeCountryCode: string;
  showCountryModal = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private travelExpandService: TravelExpandService,
    private router: Router,
    private route: ActivatedRoute
    // private dbService: DBService
    ) { }

  ngOnInit(): void {
    this.isScreenSmall$ = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .pipe(map(({ matches })=> matches ));
}
  // IN CASE DATA STORAGE NEEDS TO BE UPDATED
  // onStoreExpands(){
  //   this.dbService.storeExpands();
  // }


  openCountryModal(event) {
    this.activeCountryCode = event.target.id;
    //overlay here
    this.showCountryModal = true;
  }

  closeCountryModal() {
    this.showCountryModal = false;
    //overlay here
  }

  showModal() {
    if (this.showCountryModal) {
      return 'block';
    }
  }


  openTravelExpand(event) {//what type event is?!
    this.countryId = event.target.id;
    this.travelExpandService.expandId = this.countryId;
  }
  // openTravelExpand(id: number) {
  //   this.router.navigate([id], {relativeTo: this.route});
  //   this.travelExpandService.expandId = id;
  // }

  openModal(id: number) {
    // this.travelExpandService.expandId = id;

  }

  onScrollToTop() {
    window.scroll(0,0);
  }
}

