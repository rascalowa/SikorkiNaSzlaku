import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SikorkiNaSzlaku';
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
