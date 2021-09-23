import { Injectable } from "@angular/core"
import { AuthorizationObserver } from "./authorizationobserver"

@Injectable({providedIn: 'root'})
export class DecoratorService {

    private static authorizationObserver: AuthorizationObserver;
    
    public constructor(authorizatrionObserver:AuthorizationObserver){
        DecoratorService.authorizationObserver = authorizatrionObserver
    }


    public static getAuthorizationObserver(): AuthorizationObserver {
        return DecoratorService.authorizationObserver
    }
}