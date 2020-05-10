import { Points } from './../model/points';
import { TarefasUpdate } from './../model/tarefasUpdate';
import { TarefasCadastrar } from './../model/tarefas.cadastrar';
import { Observable } from 'rxjs';
import { AccountDTO } from './../model/accountDTO';
import { StorageService } from './storageService';
import { API_CONFIG } from './../config/api.config';
import { Cadastrar } from './../model/cadastrar';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MembrosCadastrar } from '../model/membros.cadastrar';
import { ImageUtilService } from './image-util-service';




@Injectable()
export class AccountService {

    constructor(
        public http: HttpClient, 
        public storage: StorageService,
        public imageUtilService: ImageUtilService,) {
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/account/${id}`);
    }
    
    findByEmail(email: string) : Observable<AccountDTO> {
       // return this.http.get(`${API_CONFIG.baseUrl}/account/email?value=${email}`);
       let token = this.storage.getLocalUser().token;
       let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

       return this.http.get<AccountDTO>(
           `${API_CONFIG.baseUrl}/account/email?value=${email}`,
           {'headers': authHeader});
       

    }

    insert(cad : Cadastrar) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/account`, 
            cad,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }


    insertMembros(cad : MembrosCadastrar, id: string) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/membros/account/${id}`, 
            cad,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }


    deleteMembros(id: string):Observable<void>{ 
        return this.http.delete<void>(`${API_CONFIG.baseUrl}/membros/${id}`)

    }


    inserttarefas(cad: TarefasCadastrar, id: string){ 
        return this.http.post(
            `${API_CONFIG.baseUrl}/tarefas/membros/${id}`, 
        cad, 
        {
            observe: 'response',
            responseType: 'text'
        }
    );

  
}

    updateTarefas(cad: TarefasUpdate, id:String){ 
       return this.http.put(
            `${API_CONFIG.baseUrl}/tarefas/${id}`,
            cad, 
            {
                observe: 'response',
                responseType: 'text'
            }
        )
    }
    updatePoints(points: Points, id: string){ 
      return  this.http.put(
            `${API_CONFIG.baseUrl}/membros/points/${id}`,
            points,
            {
                observe: 'response',
                responseType: 'text'
            }
        )
    }

    uploadPicture(picture, id){ 
        let pictureBlob = this.imageUtilService.dataUriToBlob(picture)
        let formData: FormData = new  FormData();
        formData.set('file', pictureBlob, `file${id}.jpeg`)
        return this.http.post(
            `${API_CONFIG.baseUrl}/membros/picture`,
            formData,
            { 
                observe: 'response',
                responseType: 'text'
            }
           
        );
        }


}