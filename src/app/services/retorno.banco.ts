import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { StorageService } from './storageService';
import { AccountDTO } from './../model/accountDTO';

@Injectable()
export class RetornoBanco{ 
ac: AccountDTO;
user: any

    constructor(public account: AccountService, public storage: StorageService){
    this.user = this.loadUser();
     }

    loadUser(){ 
        let localUser = this.storage.getLocalUser();
          if (localUser && localUser.email) {
            this.account.findByEmail(localUser.email)
              .subscribe(response => {
                this.ac = response as AccountDTO;
                return this.ac
              },
              error => {
                if (error.status == 403) {
                }
              });
          }
          else {
          
          }    
      
      }


}