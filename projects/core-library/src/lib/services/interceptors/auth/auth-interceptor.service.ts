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
          const modified = req.clone({setHeaders: { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiamFqYWoiLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImlhdCI6MTYzMjkxMzQwNiwiZXhwIjoxNjMzMjczNDA2fQ.XygJ2X5s27-fBz1bM8DPxmt72-IKFEjyB8X3pLyEsu26oDrl6W4lVktRlOUFV9CfbNDKdUmpyhHUlMaOImhXJw'}});
          AuthorizationObserver.addToken = false;
          return next.handle(modified);
      }      

      return next.handle(req);

  }
}
