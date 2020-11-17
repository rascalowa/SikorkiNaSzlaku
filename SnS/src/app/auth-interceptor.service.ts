import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor{
  //first request(immutable), second function which forwards the request(lets request continue its journey)
  //intercept runs code before request leaves my app(before is really sent), before is forwarded to subscribe
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("req is on its way" + req.url);
    //in order to modify request: (returns new object with old headers and also with new header)
    const modifiedReq = req.clone({headers: req.headers.append('Auth', 'asd')});
    //handle returns and observable, w can also interact with response(pipe, map, tap)
    return next.handle(modifiedReq);
  }
}
