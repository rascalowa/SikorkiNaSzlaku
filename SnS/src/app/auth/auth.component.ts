import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css', '../app.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  };

  onSubmit(form: NgForm){
    // //in case user remove 'disabled' in DevTools
    if (!form.valid){
      return;
    }
    //extract email and password
    const email = form.value.email;
    const password = form.value.password;
    //both singup and login need to be subscribed with the same response/error handling
    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
     authObservable = this.authService.login(email, password);
    } else {
     authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/travel']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    )
  }
}
