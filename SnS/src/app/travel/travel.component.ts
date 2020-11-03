import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  bodyText: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private travelExpandService: TravelExpandService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.isScreenSmall$ = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    //matches - boolean
    .pipe(map(({ matches })=> matches ))

    this.bodyText = 'This text will be updates';
  }

  // onLoadTravelExpands(){
  //   //reach out to our backend to get stored data
  //   //once we are done, we want to navigate away

  //   //programatically routing to different page
  //   //route is defined as an array of different single elements of this path
  //   //first- first segment of my path
  //   this.router.navigate(['/auth'])
  // }

  openModal(id: string) {
    this.travelExpandService.open(id);
  }

  closeModal(id: string) {
    this.travelExpandService.close(id);
  }
}
