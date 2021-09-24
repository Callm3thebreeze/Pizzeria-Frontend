import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { ErrorInterceptorService } from "./errors/error-interceptor.service";
import { NotFoundInterceptorService } from "./errors/notfound-interceptor.service";
import { UnauthorizedInterceptorService } from "./errors/unauthorized-interceptor.service";
import { DeniedInterceptorService } from "./errors/denied-interceptor.service";

export const INTERCEPTORS = [

    {
        provide: HTTP_INTERCEPTORS,
        userClass: AuthInterceptorService,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        userClass: ErrorInterceptorService,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        userClass: NotFoundInterceptorService,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        userClass: UnauthorizedInterceptorService,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        userClass: DeniedInterceptorService,
        multi: true
    },
]
