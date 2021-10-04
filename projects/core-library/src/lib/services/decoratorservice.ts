import { Injectable } from "@angular/core"
import { AuthorizationObserver } from "./authorizationobserver"

@Injectable({providedIn: 'root'})
export class DecoratorService {

    private static authorizationObserver: AuthorizationObserver;
    
    public constructor(authorizationObserver:AuthorizationObserver){
        DecoratorService.authorizationObserver = authorizationObserver
    }


    public static getAuthorizationObserver(): AuthorizationObserver {
        return DecoratorService.authorizationObserver
    }
}