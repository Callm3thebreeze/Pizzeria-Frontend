import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DecoratorService } from '../../decoratorservice';


@Injectable({
  providedIn: 'root' 
})

export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

      const AuthorizationObserver = DecoratorService.getAuthorizationObserver();
      if (AuthorizationObserver.addToken){
          const modified = req.clone({setHeaders: { 'x-Custom-Header': 'x'}});
          AuthorizationObserver.addToken = false;
          return next.handle(modified);
      }      

      return next.handle(req);

  }
}
