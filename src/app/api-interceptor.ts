import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { CommonDataService } from "./services/common/common-data.service";

// Класс перехватчика api-запросов.
@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    constructor(private commonService: CommonDataService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            headers: req.headers.set(
                "Authorization", "Bearer ".concat(sessionStorage["token"])
            ),
            
            // Если нужно отправлять куки с каждым запросом.
            withCredentials: true
        });

        // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });

        // req = req.clone({ headers: req.headers.set('Accept', 'multipart/form-data') });

        // req = req.clone({ headers: req.headers.set('Content-Type', 'multipart/form-data') });

        // req = req.clone({ headers: req.headers.set('Content-Type', 'multipart/form-data;boundary="boundary"') });
    
        return next.handle(req).pipe(
            catchError(err => {
                this.commonService.routeToStart(err);

                return throwError(err.message);
            }));
    }
}