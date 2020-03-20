import { HttpClient } from '@angular/common/http';
import { StorageService } from './storageService';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class MembrosService{ 


    constructor(public http: HttpClient, 
        public storage: StorageService){

        }

        findById(id: string) {
            return this.http.get(`${API_CONFIG.baseUrl}/membros/${id}`);
        }



}