import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from 'rxjs'; //creates new observable wrapping our error
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWVM2vtNy4MQdVdUBk5cYI_zQuzXn6tq8',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
      //too much logic in component, better way to move error handling here
    ).pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWVM2vtNy4MQdVdUBk5cYI_zQuzXn6tq8',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  //after page refresh
  autoLogin() {
    //in order to work with saved data we need to convert it from string to JSObject
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
      );

    //in user model comparicon of expiration date, token truish only when is valid
    if(loadedUser.token) {
      //pass new identicated user
      this.user.next(loadedUser);
      //future time from expDate minus current time in miliseconds
      const expirationDuration = new Date (userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    //in case of timeout still running after user logout
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  //expDur- amount of miliseconds
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
    ) {
    //resData.expirationDate - in string :nr of SECONDS until token expires
    //newDate.getTime - current timestamp in MILISECONDS since the beginning of time in JS (1970)
    //expirationDate -> point in the future when token expires in miliseconsds since beginning of JS
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User( email, userId, token, expirationDate );
    //emit this user as a currently logged in user
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    //data saved in local storage can not be JS object, they need to be string version
    localStorage.setItem('userData', JSON.stringify(user));
  }

  //signup and login share the same error handling logic
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    //check if error doesn't have that format(network error)
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "This password is not correct!";
        break;
    }
    return throwError(errorMessage);
  }
}
