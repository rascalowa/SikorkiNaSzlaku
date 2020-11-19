import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-subs',
  templateUrl: './travel-subs.component.html',
  styleUrls: ['./travel-subs.component.css', '../app.component.css']
})
export class TravelSubsComponent {
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/auth']);
  }
}
