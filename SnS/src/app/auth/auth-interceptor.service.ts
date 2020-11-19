import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) {}
  //first request(immutable), second function which forwards the request(lets request continue its journey)
  //intercept runs code before request leaves my app(before is really sent), before is forwarded to subscribe
  intercept(req: HttpRequest<any>, next: HttpHandler){
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        //if we don't have user we can't modify request, no token of null
        if (!user) {
          return next.handle(req);
        }
      //in order to modify request: (returns new object with old headers and also with new header)
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)});
      //handle returns and observable, w can also interact with response(pipe, map, tap)
        return next.handle(modifiedReq);
      })
    );
  }
}
