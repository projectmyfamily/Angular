import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisDTO } from '../model/credenciaisDTO';
import { StorageService } from './storageService';
import { LocalUser } from './../model/localUser';
import { API_CONFIG } from '../config/api.config';


@Injectable()
export class Auth{ 
    jwtHelper: JwtHelperService= new JwtHelperService();

constructor(public http: HttpClient, public storage: StorageService){ 

}


login(creds: CredenciaisDTO){
    return this.http.post(
        `${API_CONFIG.baseUrl}/login`,
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

remail(email: string){
    return this.http.post(
        'http://10.142.47.224:8080/account/email?value=', email
    )

}



}