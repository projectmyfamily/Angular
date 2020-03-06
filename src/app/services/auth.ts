import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisDTO } from '../model/credenciaisDTO';
import { StorageService } from './storageService';
import { LocalUser } from './../model/localUser';


@Injectable()
export class Auth{ 
    jwtHelper: JwtHelperService= new JwtHelperService();

constructor(public http: HttpClient, public storage: StorageService){ 

}


login(creds: CredenciaisDTO){
    return this.http.post(
        'http://localhost:8080/login',
        creds,{
            observe: 'response',
            responseType: 'text'
        }

        )


}


successLogin(authorizationValue: string){ 
    let tok = authorizationValue.substring(7);
    let user: LocalUser = { 
        token:tok,
        email:this.jwtHelper.decodeToken(tok).sub
    }
    this.storage.setLocalUser(user)

}






}