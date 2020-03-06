import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredenciaisDTO } from '../model/credenciaisDTO';
import { StorageService } from './storageService';
import { LocalUser } from './../model/localUser';


@Injectable()
export class Auth{ 


constructor(public http: HttpClient, public storage: StorageService){ 

}


login(creds: CredenciaisDTO){
    return this.http.post(
        'http://10.142.47.224:8080/login',
        creds,{
            observe: 'response',
            responseType: 'text'
        }

        )


}


successLogin(authorizationValue: string){ 
    let tok = authorizationValue.substring(7);
    let user: LocalUser = { 
        token:tok
    }
    this.storage.setLocalUser(user)

}

remail(email: string){
    return this.http.post(
        'http://10.142.47.224:8080/account/email?value=', email
    )

}



}