import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
    ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
      return this.authService.user
      .pipe(
        //to not have ongoing subscription
        take(1),
        map( user => {
          //everything what is not or undefined is true
          const isAuth = !!user
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['/travelsubs']);
        }
      ))
    }
}
