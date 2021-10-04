import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDTO } from "../../../user/userDTO";
import { DecoratorService } from "../../decoratorservice";
import { IndexeddbService } from "../../indexeddb.service";


@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private indexeddbService: IndexeddbService){
    }
    private async setAuthorization(req: HttpRequest<any>): Promise<HttpRequest<any>> {
        const userDTO: UserDTO = await this.indexeddbService.getUser();
        return req.clone({ setHeaders: { 'Authorization': `${userDTO.type} ${userDTO.token}` } });
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authorizationObserver = DecoratorService.getAuthorizationObserver();
        if (authorizationObserver.addToken) {
            let modified =null;
            modified =(async ()=>await this.setAuthorization(req));
            authorizationObserver.addToken = false;
            //TODO: descomentar
            return next.handle(/*modified*/req);
        }
        return next.handle(req);
    }
}