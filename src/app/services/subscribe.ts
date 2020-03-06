import { Cadastrar } from './../model/cadastrar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class Subscribe{ 



    constructor(public http: HttpClient){ 

    }



    cadastrar(cad: Cadastrar) {
        return this.http.post('http://10.142.47.224:8080/account', cad.email);
    }

}