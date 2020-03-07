import { StorageService } from './../services/storageService';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class AuthInterceptor{ 

    constructor(public storage: StorageService){

    }

    intertcept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
       
        let localUser = this.storage.getLocalUser()
        if(localUser){ 
            const authReq = req.clone({headers: req.headers.set('Authorization','Bearer ' + localUser.token)});
            return next.handle(authReq)
        }else{
            return next.handle(req)
        }
       
      

        

    }


}

export const AuthInterceptorProvider = { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}